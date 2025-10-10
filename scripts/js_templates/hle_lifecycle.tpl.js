\
// === {{name}} — HLE (Readable Lifecycles) ===
// High-level functions grouped by entity, built on top of ./{{name}}.interface
const api = require('./{{name}}.interface');

/** Helper that extracts a plausible ID field from a response */
function _id(x){
  return x?.id || x?.[Object.keys(x||{}).find(k=>/id$/i.test(k))] || x?.data?.id || x?.data?.[Object.keys(x?.data||{}).find(k=>/id$/i.test(k))];
}

{% for ent in entities %}
/* -------------------- {{ent.name | upper}} ({{ent.base}}) -------------------- */
/** Create a {{ent.name}}. */
async function create{{ent.Name}}(body){
  {% if ent.ops.create %}return api.{{ent.ops.create}}({ body });{% else %}throw new Error("No POST /{{ent.base}} op in GOLD");{% endif %}
}

/** Get a {{ent.name}} by id */
async function get{{ent.Name}}(id){
  {% if ent.ops.get %}return api.{{ent.ops.get}}({ params: { {{ent.idParam}}: id } });{% else %}throw new Error("No GET /{{ent.base}}/{id} op in GOLD");{% endif %}
}

/** List {{ent.plural}} */
async function list{{ent.NamePlural}}(query){
  {% if ent.ops.list %}return api.{{ent.ops.list}}({ query });{% else %}throw new Error("No GET /{{ent.base}} op in GOLD");{% endif %}
}

/** Update a {{ent.name}} */
async function update{{ent.Name}}(id, body){
  {% if ent.ops.update %}return api.{{ent.ops.update}}({ params: { {{ent.idParam}}: id }, body });{% else %}throw new Error("No PUT/PATCH /{{ent.base}}/{id} op in GOLD");{% endif %}
}

/** Delete a {{ent.name}} */
async function delete{{ent.Name}}(id){
  {% if ent.ops.delete %}return api.{{ent.ops.delete}}({ params: { {{ent.idParam}}: id } });{% else %}throw new Error("No DELETE /{{ent.base}}/{id} op in GOLD");{% endif %}
}

{% if ent.ops.approve %}
/** Approve {{ent.name}} */
async function approve{{ent.Name}}(id){
  return api.{{ent.ops.approve}}({ params: { {{ent.idParam}}: id } });
}
{% endif %}
{% if ent.ops.close %}
/** Close {{ent.name}} */
async function close{{ent.Name}}(id){
  return api.{{ent.ops.close}}({ params: { {{ent.idParam}}: id } });
}
{% endif %}

/**
 * Lifecycle for {{ent.name}}: create → (optional wait) → (optional update) → get
 * @param {Object} body initial payload
 * @param {Object} opts { waitStatusField?, waitTarget='ready', updates?, verifyInListShape?, listQuery?, listPick?:{listKey|listPath} }
 * @returns {Promise<{id:any, created:any, updated?:any, current:any}>}
 */
async function lifecycle{{ent.Name}}(body, opts={}){
  const created = await create{{ent.Name}}(body);
  const id = _id(created);

  // If requested, verify creation appears in list
  {% if ent.ops.list %}
  if (opts.verifyInListShape){
    await api.waitForExist_{{ent.ops.list}}(opts.verifyInListShape, { query: opts.listQuery }, opts.listPick || {});
  }
  {% endif %}

  if (opts.waitStatusField && {{ 'true' if ent.ops.get else 'false' }}){
    await api.waitFor_{{ent.ops.get}}(res => res?.[opts.waitStatusField] === (opts.waitTarget ?? 'ready'),
      { intervalMs: 400, timeoutMs: 15000 },
      { params: { {{ent.idParam}}: id } });
  }

  let updated;
  if (opts.updates && {{ 'true' if ent.ops.update else 'false' }}){
    updated = await update{{ent.Name}}(id, opts.updates);
  }
  const current = {{ 'await get'+ent.Name+'(id)' if ent.ops.get else 'created' }};
  return { id, created, updated, current };
}
{% endfor %}

module.exports = {
{% for ent in entities %}
  create{{ent.Name}}, get{{ent.Name}}, list{{ent.NamePlural}}, update{{ent.Name}}, delete{{ent.Name}},
  {% if ent.ops.approve %}approve{{ent.Name}},{% endif %}{% if ent.ops.close %} close{{ent.Name}},{% endif %}
  lifecycle{{ent.Name}},
{% endfor %}
};
