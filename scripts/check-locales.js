#!/usr/bin/env node
/**
 * scripts/check-locales.js —— 语言包一致性守门
 *
 * 检查范围：
 *   1. 中枢字典 web/locales/{en-US,id-ID,zh-CN}.mjs
 *   2. 每个模块的 modules/<id>/front/locales/{en-US,id-ID,zh-CN}.mjs
 * 规则：
 *   - 三语文件必须齐全
 *   - 三语的「叶子键路径」集合必须完全一致（缺键 / 多键逐条报出）
 *   - 叶子值必须是非空字符串
 *   - 插值占位符 {xxx} 在三语之间必须一致
 *
 * 用法：node scripts/check-locales.js   （全部通过 exit 0，否则 exit 1）
 */
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const ROOT = path.resolve(__dirname, "..");
const LOCS = ["en-US", "id-ID", "zh-CN"];

function leaves(obj, prefix = "", out = new Map()) {
  for (const [k, v] of Object.entries(obj || {})) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) leaves(v, p, out);
    else out.set(p, v);
  }
  return out;
}

const placeholders = (s) => (typeof s === "string" ? [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(",") : "");

async function checkSet(label, dir) {
  const problems = [];
  const maps = {};
  for (const loc of LOCS) {
    const file = path.join(dir, `${loc}.mjs`);
    if (!fs.existsSync(file)) {
      problems.push(`缺文件 ${path.relative(ROOT, file)}`);
      continue;
    }
    const mod = await import(pathToFileURL(file).href);
    maps[loc] = leaves(mod.default);
  }
  const present = LOCS.filter((l) => maps[l]);
  const all = new Set(present.flatMap((l) => [...maps[l].keys()]));
  for (const key of all) {
    for (const loc of present) {
      if (!maps[loc].has(key)) problems.push(`[${loc}] 缺键 ${key}`);
      else {
        const v = maps[loc].get(key);
        if (typeof v !== "string" || !v.trim()) problems.push(`[${loc}] 键 ${key} 不是非空字符串`);
      }
    }
    const ph = new Set(present.filter((l) => maps[l].has(key)).map((l) => placeholders(maps[l].get(key))));
    if (ph.size > 1) problems.push(`键 ${key} 三语占位符不一致: ${[...ph].map((x) => `{${x}}`).join(" vs ")}`);
  }
  return { label, keys: all.size, problems };
}

async function main() {
  const sets = [["web/locales（中枢）", path.join(ROOT, "web", "locales")]];
  const modulesDir = path.join(ROOT, "modules");
  for (const id of fs.readdirSync(modulesDir).sort()) {
    const dir = path.join(modulesDir, id, "front", "locales");
    if (fs.existsSync(dir)) sets.push([`modules/${id}`, dir]);
  }
  let failed = 0;
  for (const [label, dir] of sets) {
    const r = await checkSet(label, dir);
    if (r.problems.length) {
      failed++;
      console.log(`  FAIL ${r.label}（${r.keys} 键）`);
      for (const p of r.problems) console.log(`       - ${p}`);
    } else {
      console.log(`  PASS ${r.label}（${r.keys} 键）`);
    }
  }
  console.log(failed ? `\nLOCALES: ${failed}/${sets.length} 组不一致` : `\nLOCALES: ALL PASS（${sets.length} 组）`);
  process.exit(failed ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

