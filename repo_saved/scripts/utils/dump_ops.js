// scripts/tools/dump_ops.js
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

function normalizeSpec(mod) {
  const spec = mod?.default ?? mod ?? {};
  const ops =
    spec.operations ??
    spec.endpoints ??
    spec.actions ??
    (spec.api && spec.api.operations) ??
    {};
  return { spec, ops };
}

async function loadSpec(p) {
  const full = path.resolve(p);
  try {
    // Try CJS first
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const mod = require(full);
    return normalizeSpec(mod);
  } catch (e1) {
    try {
      // Fallback to ESM
      const mod = await import(pathToFileURL(full).href);
      return normalizeSpec(mod);
    } catch (e2) {
      return { error: `Failed to load ${full}\nCJS: ${e1.message}\nESM: ${e2.message}` };
    }
  }
}

(async () => {
  const file = process.argv[2];
  if (!file) {
    console.error('Usage: node scripts/tools/dump_ops.js <path-to-interfaces.js>');
    process.exit(1);
  }
  const res = await loadSpec(file);
  if (res.error) {
    console.error(res.error);
    process.exit(2);
  }
  const { spec, ops } = res;
  const opKeys = Object.keys(ops || {});
  console.log(JSON.stringify({
    file,
    system: spec.system ?? null,
    opCount: opKeys.length,
    opKeys: opKeys.slice(0, 10)  // preview
  }, null, 2));
})();
