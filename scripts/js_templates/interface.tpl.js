\
// === {{name}} — LLE (Readable Interfaces) ===
// Source GOLD: {{gold_base}} | OpenAPI: {{oas_base}}
// Requires ./svc.js with: request(method, path, {query, body, headers}) -> Promise<json>
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const { createVerifier } = require('../runtime/js/verify');
const { waitFor } = require('../runtime/js/waitFor');
const { match } = require('../runtime/js/matchers');
const { pickList } = require('../runtime/js/listUtils');
const svc = require('./svc');

/** Replace {param} tokens in path with encoded values. */
function build(tpl, params={}){
  return tpl.replace(/\{(\w+)\}/g, (_,k)=> encodeURIComponent(params[k]));
}

const _ajv = new Ajv({ allErrors: true, strict: false });
addFormats(_ajv);
const verify = {};
{% for op in ops %}{% if op.schema_json %}
verify["{{op.fn}}"] = createVerifier(_ajv, {{op.schema_json}});
{% endif %}{% endfor %}
function hasVerifier(fn){ return !!verify[fn]; }

{% for op in ops %}
/**
 * {{op.method}} {{op.path}}
 * {{op.summary or ''}}
 * {{op.description or ''}}
 * @param {Object} args - { params?, query?, body?, headers? }
 * @returns {Promise<Object>}
 */
async function {{op.fn}}(args={}){
  const { params, query, body, headers } = args || {};
  const url = {{ 'build("'+op.path+'", params||{})' if op.has_params else '"'+op.path+'"' }};
  const res = await svc.request("{{op.method}}", url, { query, body, headers });
  if (hasVerifier("{{op.fn}}")){
    const { ok, errors } = verify["{{op.fn}}"](res);
    if (!ok){
      const e = new Error("Schema verification failed: {{op.fn}}");
      e.errors = errors;
      throw e;
    }
  }
  return res;
}

/** soft matcher for {{op.fn}} */
function match_{{op.fn}}(obj, shape){ return match(obj, shape); }

/** waitFor wrapper for {{op.fn}} */
async function waitFor_{{op.fn}}(predicate, opts={}, args={}){
  return waitFor(async ()=> await {{op.fn}}(args), predicate, opts);
}

{% if op.is_list %}
/**
 * verifyIfExist_{{op.fn}}: run {{op.fn}} and ensure at least one element in the list matches `shape`.
 * @param {Object} shape e.g., {id:/^g_/, status:'ready'}
 * @param {Object} args forwarded to {{op.fn}} (query etc.)
 * @param {Object} opts {listKey?:'items'|..., listPath?:'data.items'}
 */
async function verifyIfExist_{{op.fn}}(shape, args={}, opts={}){
  const res = await {{op.fn}}(args);
  const arr = pickList(res, opts);
  if (!arr.some(x => match(x, shape))){
    const e = new Error("verifyIfExist failed (no match found) for {{op.fn}}");
    e.last = res;
    throw e;
  }
  return true;
}

/**
 * verifyIfNotExist_{{op.fn}}: run {{op.fn}} and ensure no element matches `shape`.
 */
async function verifyIfNotExist_{{op.fn}}(shape, args={}, opts={}){
  const res = await {{op.fn}}(args);
  const arr = pickList(res, opts);
  if (arr.some(x => match(x, shape))){
    const e = new Error("verifyIfNotExist failed (found unexpected match) for {{op.fn}}");
    e.last = res;
    throw e;
  }
  return true;
}

/** wait until list contains a matching element */
async function waitForExist_{{op.fn}}(shape, args={}, opts={}){
  return waitFor(async ()=>{
    const res = await {{op.fn}}(args);
    const arr = pickList(res, opts);
    return { ok: arr.some(x => match(x, shape)), res };
  }, x=>x.ok===true, opts).then(x=>x.res);
}

/** wait until list does NOT contain a matching element */
async function waitForNotExist_{{op.fn}}(shape, args={}, opts={}){
  return waitFor(async ()=>{
    const res = await {{op.fn}}(args);
    const arr = pickList(res, opts);
    return { ok: !arr.some(x => match(x, shape)), res };
  }, x=>x.ok===true, opts).then(x=>x.res);
}
{% endif %}
{% endfor %}

module.exports = {
  build, _ajv, hasVerifier,
{% for op in ops %}  {{op.fn}}, match_{{op.fn}}, waitFor_{{op.fn}},
{% if op.is_list %}  verifyIfExist_{{op.fn}}, verifyIfNotExist_{{op.fn}}, waitForExist_{{op.fn}}, waitForNotExist_{{op.fn}},
{% endif %}
{% endfor %}
};
