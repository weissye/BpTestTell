// interfaces.readable.js
// Generated from your GOLD files.
// This file is meant to be **readable** and easy to wire into a thin ctx HTTP client.
// - ctx.create(resource, payload) => { data, status }
// - ctx.get(resource, id)         => { data, status }
// - ctx.update(resource, id, p)   => { data, status }
// - ctx.delete(resource, id)      => { data, status }
// - ctx.list(resource, query)     => Array or { items: [...] }
// - ctx.try(fn)                   => runs fn() and returns { ok:false, status, error }, no throw

export function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

export async function waitFor(checkFn, { timeout = 15000, interval = 400 } = {}) {
  const deadline = Date.now() + timeout;
  let last;
  while (Date.now() < deadline) {
    last = await checkFn();
    if (last) return last;
    await wait(interval);
  }
  throw new Error("waitFor timeout");
}

// simple field access: path can be like "a.b[0].c"
export function pick(obj, path) {
  return path.split('.').reduce((acc, part) => {
    const m = part.match(/(.+)\[(\d+)\]$/);
    if (m) {
      const key = m[1], idx = Number(m[2]);
      acc = acc?.[key];
      return Array.isArray(acc) ? acc[idx] : undefined;
    }
    return acc?.[part];
  }, obj);
}

export function matchFields(obj, expected) {
  return Object.entries(expected || {}).every(([k, v]) => pick(obj, k) === v);
}

// mode: "IfExist" or "IfNotExist"
export function verifyListContains(items, path, expectedValue, mode = "IfExist") {
  const list = Array.isArray(items) ? items : (items?.items || []);
  const vals = list.map(x => pick(x, path));
  const exists = vals.some(v => v === expectedValue);
  return mode === "IfExist" ? exists : !exists;
}

// tiny helper to capture exceptions as {ok:false, status?}
export async function tryCall(fn) {
  try {
    const r = await fn();
    if (r && typeof r.status === "number") return { ok: r.status >= 200 && r.status < 300, ...r };
    return { ok: true, ...r };
  } catch (e) {
    const status = Number(e?.status || e?.response?.status || e?.code) || 0;
    return { ok: false, status, error: e };
  }
}

// ===================== misc =====================

/** Create misc */
export async function create_misc(ctx, payload) {
  return ctx.create("misc", payload);
}

/** Get one misc by id */
export async function get_misc(ctx, id) {
  return ctx.get("misc", id);
}

/** Update misc */
export async function update_misc(ctx, id, patch) {
  return ctx.update("misc", id, patch);
}

/** Delete misc */
export async function delete_misc(ctx, id) {
  return ctx.delete("misc", id);
}

/** List misc */
export async function list_misc(ctx, query) {
  return ctx.list("misc", query);
}

/** Verify via list whether a value exists/doesn't exist at path */
export async function verify_misc_listed(ctx, path, value, mode = "IfExist") {
  const items = await list_misc(ctx);
  return verifyListContains(items, path, value, mode);
}

/** Wait until value exists/doesn't-exist at path in list */
export async function wait_for_misc_field(ctx, path, value, mode = "IfExist", opts) {
  return waitFor(async () => {
    const items = await list_misc(ctx);
    return verifyListContains(items, path, value, mode);
  }, opts);
}

/** Try to delete and assert 404 */
export async function try_delete_misc_expect_404(ctx, id) {
  const r = await tryCall(() => delete_misc(ctx, id));
  if (r.ok || (r.status !== 404)) {
    throw new Error(`Expected 404 when deleting misc, got ${r.status}`);
  }
  return r;
}

/** Try to create duplicate and assert conflict (409) */
export async function try_create_misc_expect_conflict(ctx, payload) {
  const r = await tryCall(() => create_misc(ctx, payload));
  if (r.ok || (r.status !== 409 && r.status !== 400 && r.status !== 422)) {
    throw new Error(`Expected 409/400/422 (duplicate) when creating misc, got ${r.status}`);
  }
  return r;
}


// -------- Aggregate export --------
export const Interfaces = {
  "misc": { create: create_misc, get: get_misc, update: update_misc, delete: delete_misc, list: list_misc, verifyListed: verify_misc_listed, waitForField: wait_for_misc_field, tryDelete404: try_delete_misc_expect_404, tryCreateConflict: try_create_misc_expect_conflict }
};

export default Interfaces;
