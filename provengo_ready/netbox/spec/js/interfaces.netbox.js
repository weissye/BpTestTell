//@provengo summon rest
// === Auto-generated interfaces for netbox ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 443;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function circuits_virtual_circuits_list(cid, cid__empty, cid__ic, cid__ie, cid__iew, cid__iregex, cid__isw, cid__n, cid__nic, cid__nie, cid__niew, cid__nisw, cid__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, provider, provider__n, provider_account, provider_account__n, provider_account_id, provider_account_id__n, provider_id, provider_id__n, provider_network, provider_network_id, provider_network_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, type, type__n, type_id, type_id__n, updated_by_request) {
  var url = "/api/circuits/virtual-circuits/";
  var description = "list Circuits";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function circuits_virtual_circuits_create(cid, cid__empty, cid__ic, cid__ie, cid__iew, cid__iregex, cid__isw, cid__n, cid__nic, cid__nie, cid__niew, cid__nisw, cid__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, provider, provider__n, provider_account, provider_account__n, provider_account_id, provider_account_id__n, provider_id, provider_id__n, provider_network, provider_network_id, provider_network_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, type, type__n, type_id, type_id__n, updated_by_request) {
  var url = "/api/circuits/virtual-circuits/";
  var description = "add Circuits";
  var body = {
    "cid": String(cid),
    "provider_network": String(provider_network),
    "provider_account": String(provider_account),
    "type": String(type),
    "status": String(status),
    "tenant": String(tenant),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"cid": cid, "cid__empty": cid__empty, "cid__ic": cid__ic, "cid__ie": cid__ie, "cid__iew": cid__iew, "cid__iregex": cid__iregex, "cid__isw": cid__isw, "cid__n": cid__n, "cid__nic": cid__nic, "cid__nie": cid__nie, "cid__niew": cid__niew, "cid__nisw": cid__nisw, "cid__regex": cid__regex, "comments": comments, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "offset": offset, "ordering": ordering, "provider": provider, "provider__n": provider__n, "provider_account": provider_account, "provider_account__n": provider_account__n, "provider_account_id": provider_account_id, "provider_account_id__n": provider_account_id__n, "provider_id": provider_id, "provider_id__n": provider_id__n, "provider_network": provider_network, "provider_network_id": provider_network_id, "provider_network_id__n": provider_network_id__n, "q": q, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "type": type, "type__n": type__n, "type_id": type_id, "type_id__n": type_id__n, "updated_by_request": updated_by_request}) });
}

function circuits_virtual_circuits_update(cid, cid__empty, cid__ic, cid__ie, cid__iew, cid__iregex, cid__isw, cid__n, cid__nic, cid__nie, cid__niew, cid__nisw, cid__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, provider, provider__n, provider_account, provider_account__n, provider_account_id, provider_account_id__n, provider_id, provider_id__n, provider_network, provider_network_id, provider_network_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, type, type__n, type_id, type_id__n, updated_by_request) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  var description = "update Circuits";
  var body = {
    "cid": String(cid),
    "provider_network": String(provider_network),
    "provider_account": String(provider_account),
    "type": String(type),
    "status": String(status),
    "tenant": String(tenant),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"cid": cid, "cid__empty": cid__empty, "cid__ic": cid__ic, "cid__ie": cid__ie, "cid__iew": cid__iew, "cid__iregex": cid__iregex, "cid__isw": cid__isw, "cid__n": cid__n, "cid__nic": cid__nic, "cid__nie": cid__nie, "cid__niew": cid__niew, "cid__nisw": cid__nisw, "cid__regex": cid__regex, "comments": comments, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "offset": offset, "ordering": ordering, "provider": provider, "provider__n": provider__n, "provider_account": provider_account, "provider_account__n": provider_account__n, "provider_account_id": provider_account_id, "provider_account_id__n": provider_account_id__n, "provider_id": provider_id, "provider_id__n": provider_id__n, "provider_network": provider_network, "provider_network_id": provider_network_id, "provider_network_id__n": provider_network_id__n, "q": q, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "type": type, "type__n": type__n, "type_id": type_id, "type_id__n": type_id__n, "updated_by_request": updated_by_request}) });
}

function circuits_virtual_circuits_partial_update(cid, cid__empty, cid__ic, cid__ie, cid__iew, cid__iregex, cid__isw, cid__n, cid__nic, cid__nie, cid__niew, cid__nisw, cid__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, provider, provider__n, provider_account, provider_account__n, provider_account_id, provider_account_id__n, provider_id, provider_id__n, provider_network, provider_network_id, provider_network_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, type, type__n, type_id, type_id__n, updated_by_request) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  var description = "patch Circuits";
  var body = {
    "cid": String(cid),
    "provider_network": String(provider_network),
    "provider_account": String(provider_account),
    "type": String(type),
    "status": String(status),
    "tenant": String(tenant),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"cid": cid, "cid__empty": cid__empty, "cid__ic": cid__ic, "cid__ie": cid__ie, "cid__iew": cid__iew, "cid__iregex": cid__iregex, "cid__isw": cid__isw, "cid__n": cid__n, "cid__nic": cid__nic, "cid__nie": cid__nie, "cid__niew": cid__niew, "cid__nisw": cid__nisw, "cid__regex": cid__regex, "comments": comments, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "offset": offset, "ordering": ordering, "provider": provider, "provider__n": provider__n, "provider_account": provider_account, "provider_account__n": provider_account__n, "provider_account_id": provider_account_id, "provider_account_id__n": provider_account_id__n, "provider_id": provider_id, "provider_id__n": provider_id__n, "provider_network": provider_network, "provider_network_id": provider_network_id, "provider_network_id__n": provider_network_id__n, "q": q, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "type": type, "type__n": type__n, "type_id": type_id, "type_id__n": type_id__n, "updated_by_request": updated_by_request}) });
}

function circuits_virtual_circuits_destroy(cid, cid__empty, cid__ic, cid__ie, cid__iew, cid__iregex, cid__isw, cid__n, cid__nic, cid__nie, cid__niew, cid__nisw, cid__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, provider, provider__n, provider_account, provider_account__n, provider_account_id, provider_account_id__n, provider_id, provider_id__n, provider_network, provider_network_id, provider_network_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, type, type__n, type_id, type_id__n, updated_by_request) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  var description = "delete Circuits";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function circuits_virtual_circuits_retrieve(cid, cid__empty, cid__ic, cid__ie, cid__iew, cid__iregex, cid__isw, cid__n, cid__nic, cid__nie, cid__niew, cid__nisw, cid__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, provider, provider__n, provider_account, provider_account__n, provider_account_id, provider_account_id__n, provider_id, provider_id__n, provider_network, provider_network_id, provider_network_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, type, type__n, type_id, type_id__n, updated_by_request) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  var description = "get Circuits";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingCircuits(cid, cid__empty, cid__ic, cid__ie, cid__iew, cid__iregex, cid__isw, cid__n, cid__nic, cid__nie, cid__niew, cid__nisw, cid__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, provider, provider__n, provider_account, provider_account__n, provider_account_id, provider_account_id__n, provider_id, provider_id__n, provider_network, provider_network_id, provider_network_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, type, type__n, type_id, type_id__n, updated_by_request) {
  var url = "/api/circuits/virtual-circuits/";
  var description = "Try Add Existing Circuits";
  var body = {
    "cid": String(cid),
    "provider_network": String(provider_network),
    "provider_account": String(provider_account),
    "type": String(type),
    "status": String(status),
    "tenant": String(tenant),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCircuitsExists(cid, cid__empty, cid__ic, cid__ie, cid__iew, cid__iregex, cid__isw, cid__n, cid__nic, cid__nie, cid__niew, cid__nisw, cid__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, provider, provider__n, provider_account, provider_account__n, provider_account_id, provider_account_id__n, provider_id, provider_id__n, provider_network, provider_network_id, provider_network_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, type, type__n, type_id, type_id__n, updated_by_request) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Circuits exists" } });
  pvg.success("Circuits found");
}

function verifyCircuitsDoesNotExist(cid, cid__empty, cid__ic, cid__ie, cid__iew, cid__iregex, cid__isw, cid__n, cid__nic, cid__nie, cid__niew, cid__nisw, cid__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, provider, provider__n, provider_account, provider_account__n, provider_account_id, provider_account_id__n, provider_id, provider_id__n, provider_network, provider_network_id, provider_network_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, type, type__n, type_id, type_id__n, updated_by_request) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Circuits does not exist" } });
  pvg.success("Circuits not found");
}

function tryToDeleteANonExistingCircuits(cid, cid__empty, cid__ic, cid__ie, cid__iew, cid__iregex, cid__isw, cid__n, cid__nic, cid__nie, cid__niew, cid__nisw, cid__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, provider, provider__n, provider_account, provider_account__n, provider_account_id, provider_account_id__n, provider_id, provider_id__n, provider_network, provider_network_id, provider_network_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, type, type__n, type_id, type_id__n, updated_by_request) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  var description = "Verify negative delete for Circuits";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForCircuitsAdded(cid, cid__empty, cid__ic, cid__ie, cid__iew, cid__iregex, cid__isw, cid__n, cid__nic, cid__nie, cid__niew, cid__nisw, cid__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, provider, provider__n, provider_account, provider_account__n, provider_account_id, provider_account_id__n, provider_id, provider_id__n, provider_network, provider_network_id, provider_network_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, type, type__n, type_id, type_id__n, updated_by_request) {
  waitFor(matchSuccess("add Circuits"));
}

function waitForAnyCircuitsAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Circuits Added", function(e) {
      return e.name.startsWith("Done: add Circuits");
  }) });
}

function core_object_types_list(app_label, app_label__empty, app_label__ic, app_label__ie, app_label__iew, app_label__iregex, app_label__isw, app_label__n, app_label__nic, app_label__nie, app_label__niew, app_label__nisw, app_label__regex, comments, custom_fields, description, enabled, features, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ignore_rules, limit, model, model__empty, model__ic, model__ie, model__iew, model__iregex, model__isw, model__n, model__nic, model__nie, model__niew, model__nisw, model__regex, name, offset, ordering, parameters, _public, q, source_url, sync_interval, type) {
  var url = "/api/core/object-types/";
  var description = "list Core";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function core_object_types_retrieve(app_label, app_label__empty, app_label__ic, app_label__ie, app_label__iew, app_label__iregex, app_label__isw, app_label__n, app_label__nic, app_label__nie, app_label__niew, app_label__nisw, app_label__regex, comments, custom_fields, description, enabled, features, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ignore_rules, limit, model, model__empty, model__ic, model__ie, model__iew, model__iregex, model__isw, model__n, model__nic, model__nie, model__niew, model__nisw, model__regex, name, offset, ordering, parameters, _public, q, source_url, sync_interval, type) {
  var url = "/api/core/object-types/" + id + "/";
  var description = "get Core";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function core_data_sources_sync_create(app_label, app_label__empty, app_label__ic, app_label__ie, app_label__iew, app_label__iregex, app_label__isw, app_label__n, app_label__nic, app_label__nie, app_label__niew, app_label__nisw, app_label__regex, comments, custom_fields, description, enabled, features, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ignore_rules, limit, model, model__empty, model__ic, model__ie, model__iew, model__iregex, model__isw, model__n, model__nic, model__nie, model__niew, model__nisw, model__regex, name, offset, ordering, parameters, _public, q, source_url, sync_interval, type) {
  var url = "/api/core/data-sources/" + id + "/sync/";
  var description = "add Core";
  var body = {
    "name": String(name),
    "type": String(type),
    "source_url": String(source_url),
    "enabled": String(enabled),
    "description": String(description),
    "sync_interval": String(sync_interval),
    "parameters": String(parameters),
    "ignore_rules": String(ignore_rules),
    "comments": String(comments),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"app_label": app_label, "app_label__empty": app_label__empty, "app_label__ic": app_label__ic, "app_label__ie": app_label__ie, "app_label__iew": app_label__iew, "app_label__iregex": app_label__iregex, "app_label__isw": app_label__isw, "app_label__n": app_label__n, "app_label__nic": app_label__nic, "app_label__nie": app_label__nie, "app_label__niew": app_label__niew, "app_label__nisw": app_label__nisw, "app_label__regex": app_label__regex, "comments": comments, "custom_fields": custom_fields, "description": description, "enabled": enabled, "features": features, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "ignore_rules": ignore_rules, "limit": limit, "model": model, "model__empty": model__empty, "model__ic": model__ic, "model__ie": model__ie, "model__iew": model__iew, "model__iregex": model__iregex, "model__isw": model__isw, "model__n": model__n, "model__nic": model__nic, "model__nie": model__nie, "model__niew": model__niew, "model__nisw": model__nisw, "model__regex": model__regex, "name": name, "offset": offset, "ordering": ordering, "parameters": parameters, "_public": _public, "q": q, "source_url": source_url, "sync_interval": sync_interval, "type": type}) });
}

function core_data_sources_update(app_label, app_label__empty, app_label__ic, app_label__ie, app_label__iew, app_label__iregex, app_label__isw, app_label__n, app_label__nic, app_label__nie, app_label__niew, app_label__nisw, app_label__regex, comments, custom_fields, description, enabled, features, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ignore_rules, limit, model, model__empty, model__ic, model__ie, model__iew, model__iregex, model__isw, model__n, model__nic, model__nie, model__niew, model__nisw, model__regex, name, offset, ordering, parameters, _public, q, source_url, sync_interval, type) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "update Core";
  var body = {
    "name": String(name),
    "type": String(type),
    "source_url": String(source_url),
    "enabled": String(enabled),
    "description": String(description),
    "sync_interval": String(sync_interval),
    "parameters": String(parameters),
    "ignore_rules": String(ignore_rules),
    "comments": String(comments),
    "custom_fields": String(custom_fields),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"app_label": app_label, "app_label__empty": app_label__empty, "app_label__ic": app_label__ic, "app_label__ie": app_label__ie, "app_label__iew": app_label__iew, "app_label__iregex": app_label__iregex, "app_label__isw": app_label__isw, "app_label__n": app_label__n, "app_label__nic": app_label__nic, "app_label__nie": app_label__nie, "app_label__niew": app_label__niew, "app_label__nisw": app_label__nisw, "app_label__regex": app_label__regex, "comments": comments, "custom_fields": custom_fields, "description": description, "enabled": enabled, "features": features, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "ignore_rules": ignore_rules, "limit": limit, "model": model, "model__empty": model__empty, "model__ic": model__ic, "model__ie": model__ie, "model__iew": model__iew, "model__iregex": model__iregex, "model__isw": model__isw, "model__n": model__n, "model__nic": model__nic, "model__nie": model__nie, "model__niew": model__niew, "model__nisw": model__nisw, "model__regex": model__regex, "name": name, "offset": offset, "ordering": ordering, "parameters": parameters, "_public": _public, "q": q, "source_url": source_url, "sync_interval": sync_interval, "type": type}) });
}

function core_data_sources_partial_update(app_label, app_label__empty, app_label__ic, app_label__ie, app_label__iew, app_label__iregex, app_label__isw, app_label__n, app_label__nic, app_label__nie, app_label__niew, app_label__nisw, app_label__regex, comments, custom_fields, description, enabled, features, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ignore_rules, limit, model, model__empty, model__ic, model__ie, model__iew, model__iregex, model__isw, model__n, model__nic, model__nie, model__niew, model__nisw, model__regex, name, offset, ordering, parameters, _public, q, source_url, sync_interval, type) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "patch Core";
  var body = {
    "name": String(name),
    "type": String(type),
    "source_url": String(source_url),
    "enabled": String(enabled),
    "description": String(description),
    "sync_interval": String(sync_interval),
    "parameters": String(parameters),
    "ignore_rules": String(ignore_rules),
    "comments": String(comments),
    "custom_fields": String(custom_fields),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"app_label": app_label, "app_label__empty": app_label__empty, "app_label__ic": app_label__ic, "app_label__ie": app_label__ie, "app_label__iew": app_label__iew, "app_label__iregex": app_label__iregex, "app_label__isw": app_label__isw, "app_label__n": app_label__n, "app_label__nic": app_label__nic, "app_label__nie": app_label__nie, "app_label__niew": app_label__niew, "app_label__nisw": app_label__nisw, "app_label__regex": app_label__regex, "comments": comments, "custom_fields": custom_fields, "description": description, "enabled": enabled, "features": features, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "ignore_rules": ignore_rules, "limit": limit, "model": model, "model__empty": model__empty, "model__ic": model__ic, "model__ie": model__ie, "model__iew": model__iew, "model__iregex": model__iregex, "model__isw": model__isw, "model__n": model__n, "model__nic": model__nic, "model__nie": model__nie, "model__niew": model__niew, "model__nisw": model__nisw, "model__regex": model__regex, "name": name, "offset": offset, "ordering": ordering, "parameters": parameters, "_public": _public, "q": q, "source_url": source_url, "sync_interval": sync_interval, "type": type}) });
}

function core_data_sources_destroy(app_label, app_label__empty, app_label__ic, app_label__ie, app_label__iew, app_label__iregex, app_label__isw, app_label__n, app_label__nic, app_label__nie, app_label__niew, app_label__nisw, app_label__regex, comments, custom_fields, description, enabled, features, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ignore_rules, limit, model, model__empty, model__ic, model__ie, model__iew, model__iregex, model__isw, model__n, model__nic, model__nie, model__niew, model__nisw, model__regex, name, offset, ordering, parameters, _public, q, source_url, sync_interval, type) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "delete Core";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingCore(app_label, app_label__empty, app_label__ic, app_label__ie, app_label__iew, app_label__iregex, app_label__isw, app_label__n, app_label__nic, app_label__nie, app_label__niew, app_label__nisw, app_label__regex, comments, custom_fields, description, enabled, features, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ignore_rules, limit, model, model__empty, model__ic, model__ie, model__iew, model__iregex, model__isw, model__n, model__nic, model__nie, model__niew, model__nisw, model__regex, name, offset, ordering, parameters, _public, q, source_url, sync_interval, type) {
  var url = "/api/core/data-sources/" + id + "/sync/";
  var description = "Try Add Existing Core";
  var body = {
    "name": String(name),
    "type": String(type),
    "source_url": String(source_url),
    "enabled": String(enabled),
    "description": String(description),
    "sync_interval": String(sync_interval),
    "parameters": String(parameters),
    "ignore_rules": String(ignore_rules),
    "comments": String(comments),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCoreExists(app_label, app_label__empty, app_label__ic, app_label__ie, app_label__iew, app_label__iregex, app_label__isw, app_label__n, app_label__nic, app_label__nie, app_label__niew, app_label__nisw, app_label__regex, comments, custom_fields, description, enabled, features, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ignore_rules, limit, model, model__empty, model__ic, model__ie, model__iew, model__iregex, model__isw, model__n, model__nic, model__nie, model__niew, model__nisw, model__regex, name, offset, ordering, parameters, _public, q, source_url, sync_interval, type) {
  var url = "/api/core/object-types/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Core exists" } });
  pvg.success("Core found");
}

function verifyCoreDoesNotExist(app_label, app_label__empty, app_label__ic, app_label__ie, app_label__iew, app_label__iregex, app_label__isw, app_label__n, app_label__nic, app_label__nie, app_label__niew, app_label__nisw, app_label__regex, comments, custom_fields, description, enabled, features, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ignore_rules, limit, model, model__empty, model__ic, model__ie, model__iew, model__iregex, model__isw, model__n, model__nic, model__nie, model__niew, model__nisw, model__regex, name, offset, ordering, parameters, _public, q, source_url, sync_interval, type) {
  var url = "/api/core/object-types/" + id + "/";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Core does not exist" } });
  pvg.success("Core not found");
}

function tryToDeleteANonExistingCore(app_label, app_label__empty, app_label__ic, app_label__ie, app_label__iew, app_label__iregex, app_label__isw, app_label__n, app_label__nic, app_label__nie, app_label__niew, app_label__nisw, app_label__regex, comments, custom_fields, description, enabled, features, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ignore_rules, limit, model, model__empty, model__ic, model__ie, model__iew, model__iregex, model__isw, model__n, model__nic, model__nie, model__niew, model__nisw, model__regex, name, offset, ordering, parameters, _public, q, source_url, sync_interval, type) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "Verify negative delete for Core";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForCoreAdded(app_label, app_label__empty, app_label__ic, app_label__ie, app_label__iew, app_label__iregex, app_label__isw, app_label__n, app_label__nic, app_label__nie, app_label__niew, app_label__nisw, app_label__regex, comments, custom_fields, description, enabled, features, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ignore_rules, limit, model, model__empty, model__ic, model__ie, model__iew, model__iregex, model__isw, model__n, model__nic, model__nie, model__niew, model__nisw, model__regex, name, offset, ordering, parameters, _public, q, source_url, sync_interval, type) {
  waitFor(matchSuccess("add Core"));
}

function waitForAnyCoreAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Core Added", function(e) {
      return e.name.startsWith("Done: add Core");
  }) });
}

function dcim_virtual_device_contexts_list(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, identifier, identifier__empty, identifier__gt, identifier__gte, identifier__lt, identifier__lte, identifier__n, interface_id, interface_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/dcim/virtual-device-contexts/";
  var description = "list Dcim";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function dcim_virtual_device_contexts_create(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, identifier, identifier__empty, identifier__gt, identifier__gte, identifier__lt, identifier__lte, identifier__n, interface_id, interface_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/dcim/virtual-device-contexts/";
  var description = "add Dcim";
  var body = {
    "name": String(name),
    "device": String(device),
    "identifier": String(identifier),
    "tenant": String(tenant),
    "primary_ip4": String(primary_ip4),
    "primary_ip6": String(primary_ip6),
    "status": String(status),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"comments": comments, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "device": device, "device__n": device__n, "device_id": device_id, "device_id__n": device_id__n, "has_primary_ip": has_primary_ip, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "identifier": identifier, "identifier__empty": identifier__empty, "identifier__gt": identifier__gt, "identifier__gte": identifier__gte, "identifier__lt": identifier__lt, "identifier__lte": identifier__lte, "identifier__n": identifier__n, "interface_id": interface_id, "interface_id__n": interface_id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "primary_ip4": primary_ip4, "primary_ip4__n": primary_ip4__n, "primary_ip4_id": primary_ip4_id, "primary_ip4_id__n": primary_ip4_id__n, "primary_ip6": primary_ip6, "primary_ip6__n": primary_ip6__n, "primary_ip6_id": primary_ip6_id, "primary_ip6_id__n": primary_ip6_id__n, "q": q, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "updated_by_request": updated_by_request}) });
}

function dcim_virtual_device_contexts_update(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, identifier, identifier__empty, identifier__gt, identifier__gte, identifier__lt, identifier__lte, identifier__n, interface_id, interface_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  var description = "update Dcim";
  var body = {
    "name": String(name),
    "device": String(device),
    "identifier": String(identifier),
    "tenant": String(tenant),
    "primary_ip4": String(primary_ip4),
    "primary_ip6": String(primary_ip6),
    "status": String(status),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"comments": comments, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "device": device, "device__n": device__n, "device_id": device_id, "device_id__n": device_id__n, "has_primary_ip": has_primary_ip, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "identifier": identifier, "identifier__empty": identifier__empty, "identifier__gt": identifier__gt, "identifier__gte": identifier__gte, "identifier__lt": identifier__lt, "identifier__lte": identifier__lte, "identifier__n": identifier__n, "interface_id": interface_id, "interface_id__n": interface_id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "primary_ip4": primary_ip4, "primary_ip4__n": primary_ip4__n, "primary_ip4_id": primary_ip4_id, "primary_ip4_id__n": primary_ip4_id__n, "primary_ip6": primary_ip6, "primary_ip6__n": primary_ip6__n, "primary_ip6_id": primary_ip6_id, "primary_ip6_id__n": primary_ip6_id__n, "q": q, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "updated_by_request": updated_by_request}) });
}

function dcim_virtual_device_contexts_partial_update(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, identifier, identifier__empty, identifier__gt, identifier__gte, identifier__lt, identifier__lte, identifier__n, interface_id, interface_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  var description = "patch Dcim";
  var body = {
    "name": String(name),
    "device": String(device),
    "identifier": String(identifier),
    "tenant": String(tenant),
    "primary_ip4": String(primary_ip4),
    "primary_ip6": String(primary_ip6),
    "status": String(status),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"comments": comments, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "device": device, "device__n": device__n, "device_id": device_id, "device_id__n": device_id__n, "has_primary_ip": has_primary_ip, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "identifier": identifier, "identifier__empty": identifier__empty, "identifier__gt": identifier__gt, "identifier__gte": identifier__gte, "identifier__lt": identifier__lt, "identifier__lte": identifier__lte, "identifier__n": identifier__n, "interface_id": interface_id, "interface_id__n": interface_id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "primary_ip4": primary_ip4, "primary_ip4__n": primary_ip4__n, "primary_ip4_id": primary_ip4_id, "primary_ip4_id__n": primary_ip4_id__n, "primary_ip6": primary_ip6, "primary_ip6__n": primary_ip6__n, "primary_ip6_id": primary_ip6_id, "primary_ip6_id__n": primary_ip6_id__n, "q": q, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "updated_by_request": updated_by_request}) });
}

function dcim_virtual_device_contexts_destroy(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, identifier, identifier__empty, identifier__gt, identifier__gte, identifier__lt, identifier__lte, identifier__n, interface_id, interface_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  var description = "delete Dcim";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function dcim_virtual_device_contexts_retrieve(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, identifier, identifier__empty, identifier__gt, identifier__gte, identifier__lt, identifier__lte, identifier__n, interface_id, interface_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  var description = "get Dcim";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingDcim(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, identifier, identifier__empty, identifier__gt, identifier__gte, identifier__lt, identifier__lte, identifier__n, interface_id, interface_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/dcim/virtual-device-contexts/";
  var description = "Try Add Existing Dcim";
  var body = {
    "name": String(name),
    "device": String(device),
    "identifier": String(identifier),
    "tenant": String(tenant),
    "primary_ip4": String(primary_ip4),
    "primary_ip6": String(primary_ip6),
    "status": String(status),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDcimExists(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, identifier, identifier__empty, identifier__gt, identifier__gte, identifier__lt, identifier__lte, identifier__n, interface_id, interface_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Dcim exists" } });
  pvg.success("Dcim found");
}

function verifyDcimDoesNotExist(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, identifier, identifier__empty, identifier__gt, identifier__gte, identifier__lt, identifier__lte, identifier__n, interface_id, interface_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Dcim does not exist" } });
  pvg.success("Dcim not found");
}

function tryToDeleteANonExistingDcim(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, identifier, identifier__empty, identifier__gt, identifier__gte, identifier__lt, identifier__lte, identifier__n, interface_id, interface_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  var description = "Verify negative delete for Dcim";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForDcimAdded(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, identifier, identifier__empty, identifier__gt, identifier__gte, identifier__lt, identifier__lte, identifier__n, interface_id, interface_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  waitFor(matchSuccess("add Dcim"));
}

function waitForAnyDcimAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Dcim Added", function(e) {
      return e.name.startsWith("Done: add Dcim");
  }) });
}

function extras_webhooks_list(additional_headers, body_template, ca_file_path, ca_file_path__empty, ca_file_path__ic, ca_file_path__ie, ca_file_path__iew, ca_file_path__iregex, ca_file_path__isw, ca_file_path__n, ca_file_path__nic, ca_file_path__nie, ca_file_path__niew, ca_file_path__nisw, ca_file_path__regex, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, http_content_type, http_content_type__empty, http_content_type__ic, http_content_type__ie, http_content_type__iew, http_content_type__iregex, http_content_type__isw, http_content_type__n, http_content_type__nic, http_content_type__nie, http_content_type__niew, http_content_type__nisw, http_content_type__regex, http_method, http_method__empty, http_method__ic, http_method__ie, http_method__iew, http_method__iregex, http_method__isw, http_method__n, http_method__nic, http_method__nie, http_method__niew, http_method__nisw, http_method__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, payload_url, q, secret, secret__empty, secret__ic, secret__ie, secret__iew, secret__iregex, secret__isw, secret__n, secret__nic, secret__nie, secret__niew, secret__nisw, secret__regex, ssl_verification, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/extras/webhooks/";
  var description = "list Extras";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function extras_webhooks_create(additional_headers, body_template, ca_file_path, ca_file_path__empty, ca_file_path__ic, ca_file_path__ie, ca_file_path__iew, ca_file_path__iregex, ca_file_path__isw, ca_file_path__n, ca_file_path__nic, ca_file_path__nie, ca_file_path__niew, ca_file_path__nisw, ca_file_path__regex, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, http_content_type, http_content_type__empty, http_content_type__ic, http_content_type__ie, http_content_type__iew, http_content_type__iregex, http_content_type__isw, http_content_type__n, http_content_type__nic, http_content_type__nie, http_content_type__niew, http_content_type__nisw, http_content_type__regex, http_method, http_method__empty, http_method__ic, http_method__ie, http_method__iew, http_method__iregex, http_method__isw, http_method__n, http_method__nic, http_method__nie, http_method__niew, http_method__nisw, http_method__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, payload_url, q, secret, secret__empty, secret__ic, secret__ie, secret__iew, secret__iregex, secret__isw, secret__n, secret__nic, secret__nie, secret__niew, secret__nisw, secret__regex, ssl_verification, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/extras/webhooks/";
  var description = "add Extras";
  var body = {
    "name": String(name),
    "description": String(description),
    "payload_url": String(payload_url),
    "http_method": String(http_method),
    "http_content_type": String(http_content_type),
    "additional_headers": String(additional_headers),
    "body_template": String(body_template),
    "secret": String(secret),
    "ssl_verification": String(ssl_verification),
    "ca_file_path": String(ca_file_path),
    "custom_fields": String(custom_fields),
    "tags": String(tags),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"additional_headers": additional_headers, "body_template": body_template, "ca_file_path": ca_file_path, "ca_file_path__empty": ca_file_path__empty, "ca_file_path__ic": ca_file_path__ic, "ca_file_path__ie": ca_file_path__ie, "ca_file_path__iew": ca_file_path__iew, "ca_file_path__iregex": ca_file_path__iregex, "ca_file_path__isw": ca_file_path__isw, "ca_file_path__n": ca_file_path__n, "ca_file_path__nic": ca_file_path__nic, "ca_file_path__nie": ca_file_path__nie, "ca_file_path__niew": ca_file_path__niew, "ca_file_path__nisw": ca_file_path__nisw, "ca_file_path__regex": ca_file_path__regex, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "http_content_type": http_content_type, "http_content_type__empty": http_content_type__empty, "http_content_type__ic": http_content_type__ic, "http_content_type__ie": http_content_type__ie, "http_content_type__iew": http_content_type__iew, "http_content_type__iregex": http_content_type__iregex, "http_content_type__isw": http_content_type__isw, "http_content_type__n": http_content_type__n, "http_content_type__nic": http_content_type__nic, "http_content_type__nie": http_content_type__nie, "http_content_type__niew": http_content_type__niew, "http_content_type__nisw": http_content_type__nisw, "http_content_type__regex": http_content_type__regex, "http_method": http_method, "http_method__empty": http_method__empty, "http_method__ic": http_method__ic, "http_method__ie": http_method__ie, "http_method__iew": http_method__iew, "http_method__iregex": http_method__iregex, "http_method__isw": http_method__isw, "http_method__n": http_method__n, "http_method__nic": http_method__nic, "http_method__nie": http_method__nie, "http_method__niew": http_method__niew, "http_method__nisw": http_method__nisw, "http_method__regex": http_method__regex, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "payload_url": payload_url, "q": q, "secret": secret, "secret__empty": secret__empty, "secret__ic": secret__ic, "secret__ie": secret__ie, "secret__iew": secret__iew, "secret__iregex": secret__iregex, "secret__isw": secret__isw, "secret__n": secret__n, "secret__nic": secret__nic, "secret__nie": secret__nie, "secret__niew": secret__niew, "secret__nisw": secret__nisw, "secret__regex": secret__regex, "ssl_verification": ssl_verification, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "updated_by_request": updated_by_request}) });
}

function extras_webhooks_update(additional_headers, body_template, ca_file_path, ca_file_path__empty, ca_file_path__ic, ca_file_path__ie, ca_file_path__iew, ca_file_path__iregex, ca_file_path__isw, ca_file_path__n, ca_file_path__nic, ca_file_path__nie, ca_file_path__niew, ca_file_path__nisw, ca_file_path__regex, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, http_content_type, http_content_type__empty, http_content_type__ic, http_content_type__ie, http_content_type__iew, http_content_type__iregex, http_content_type__isw, http_content_type__n, http_content_type__nic, http_content_type__nie, http_content_type__niew, http_content_type__nisw, http_content_type__regex, http_method, http_method__empty, http_method__ic, http_method__ie, http_method__iew, http_method__iregex, http_method__isw, http_method__n, http_method__nic, http_method__nie, http_method__niew, http_method__nisw, http_method__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, payload_url, q, secret, secret__empty, secret__ic, secret__ie, secret__iew, secret__iregex, secret__isw, secret__n, secret__nic, secret__nie, secret__niew, secret__nisw, secret__regex, ssl_verification, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "update Extras";
  var body = {
    "name": String(name),
    "description": String(description),
    "payload_url": String(payload_url),
    "http_method": String(http_method),
    "http_content_type": String(http_content_type),
    "additional_headers": String(additional_headers),
    "body_template": String(body_template),
    "secret": String(secret),
    "ssl_verification": String(ssl_verification),
    "ca_file_path": String(ca_file_path),
    "custom_fields": String(custom_fields),
    "tags": String(tags),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"additional_headers": additional_headers, "body_template": body_template, "ca_file_path": ca_file_path, "ca_file_path__empty": ca_file_path__empty, "ca_file_path__ic": ca_file_path__ic, "ca_file_path__ie": ca_file_path__ie, "ca_file_path__iew": ca_file_path__iew, "ca_file_path__iregex": ca_file_path__iregex, "ca_file_path__isw": ca_file_path__isw, "ca_file_path__n": ca_file_path__n, "ca_file_path__nic": ca_file_path__nic, "ca_file_path__nie": ca_file_path__nie, "ca_file_path__niew": ca_file_path__niew, "ca_file_path__nisw": ca_file_path__nisw, "ca_file_path__regex": ca_file_path__regex, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "http_content_type": http_content_type, "http_content_type__empty": http_content_type__empty, "http_content_type__ic": http_content_type__ic, "http_content_type__ie": http_content_type__ie, "http_content_type__iew": http_content_type__iew, "http_content_type__iregex": http_content_type__iregex, "http_content_type__isw": http_content_type__isw, "http_content_type__n": http_content_type__n, "http_content_type__nic": http_content_type__nic, "http_content_type__nie": http_content_type__nie, "http_content_type__niew": http_content_type__niew, "http_content_type__nisw": http_content_type__nisw, "http_content_type__regex": http_content_type__regex, "http_method": http_method, "http_method__empty": http_method__empty, "http_method__ic": http_method__ic, "http_method__ie": http_method__ie, "http_method__iew": http_method__iew, "http_method__iregex": http_method__iregex, "http_method__isw": http_method__isw, "http_method__n": http_method__n, "http_method__nic": http_method__nic, "http_method__nie": http_method__nie, "http_method__niew": http_method__niew, "http_method__nisw": http_method__nisw, "http_method__regex": http_method__regex, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "payload_url": payload_url, "q": q, "secret": secret, "secret__empty": secret__empty, "secret__ic": secret__ic, "secret__ie": secret__ie, "secret__iew": secret__iew, "secret__iregex": secret__iregex, "secret__isw": secret__isw, "secret__n": secret__n, "secret__nic": secret__nic, "secret__nie": secret__nie, "secret__niew": secret__niew, "secret__nisw": secret__nisw, "secret__regex": secret__regex, "ssl_verification": ssl_verification, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "updated_by_request": updated_by_request}) });
}

function extras_webhooks_partial_update(additional_headers, body_template, ca_file_path, ca_file_path__empty, ca_file_path__ic, ca_file_path__ie, ca_file_path__iew, ca_file_path__iregex, ca_file_path__isw, ca_file_path__n, ca_file_path__nic, ca_file_path__nie, ca_file_path__niew, ca_file_path__nisw, ca_file_path__regex, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, http_content_type, http_content_type__empty, http_content_type__ic, http_content_type__ie, http_content_type__iew, http_content_type__iregex, http_content_type__isw, http_content_type__n, http_content_type__nic, http_content_type__nie, http_content_type__niew, http_content_type__nisw, http_content_type__regex, http_method, http_method__empty, http_method__ic, http_method__ie, http_method__iew, http_method__iregex, http_method__isw, http_method__n, http_method__nic, http_method__nie, http_method__niew, http_method__nisw, http_method__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, payload_url, q, secret, secret__empty, secret__ic, secret__ie, secret__iew, secret__iregex, secret__isw, secret__n, secret__nic, secret__nie, secret__niew, secret__nisw, secret__regex, ssl_verification, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "patch Extras";
  var body = {
    "name": String(name),
    "description": String(description),
    "payload_url": String(payload_url),
    "http_method": String(http_method),
    "http_content_type": String(http_content_type),
    "additional_headers": String(additional_headers),
    "body_template": String(body_template),
    "secret": String(secret),
    "ssl_verification": String(ssl_verification),
    "ca_file_path": String(ca_file_path),
    "custom_fields": String(custom_fields),
    "tags": String(tags),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"additional_headers": additional_headers, "body_template": body_template, "ca_file_path": ca_file_path, "ca_file_path__empty": ca_file_path__empty, "ca_file_path__ic": ca_file_path__ic, "ca_file_path__ie": ca_file_path__ie, "ca_file_path__iew": ca_file_path__iew, "ca_file_path__iregex": ca_file_path__iregex, "ca_file_path__isw": ca_file_path__isw, "ca_file_path__n": ca_file_path__n, "ca_file_path__nic": ca_file_path__nic, "ca_file_path__nie": ca_file_path__nie, "ca_file_path__niew": ca_file_path__niew, "ca_file_path__nisw": ca_file_path__nisw, "ca_file_path__regex": ca_file_path__regex, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "http_content_type": http_content_type, "http_content_type__empty": http_content_type__empty, "http_content_type__ic": http_content_type__ic, "http_content_type__ie": http_content_type__ie, "http_content_type__iew": http_content_type__iew, "http_content_type__iregex": http_content_type__iregex, "http_content_type__isw": http_content_type__isw, "http_content_type__n": http_content_type__n, "http_content_type__nic": http_content_type__nic, "http_content_type__nie": http_content_type__nie, "http_content_type__niew": http_content_type__niew, "http_content_type__nisw": http_content_type__nisw, "http_content_type__regex": http_content_type__regex, "http_method": http_method, "http_method__empty": http_method__empty, "http_method__ic": http_method__ic, "http_method__ie": http_method__ie, "http_method__iew": http_method__iew, "http_method__iregex": http_method__iregex, "http_method__isw": http_method__isw, "http_method__n": http_method__n, "http_method__nic": http_method__nic, "http_method__nie": http_method__nie, "http_method__niew": http_method__niew, "http_method__nisw": http_method__nisw, "http_method__regex": http_method__regex, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "payload_url": payload_url, "q": q, "secret": secret, "secret__empty": secret__empty, "secret__ic": secret__ic, "secret__ie": secret__ie, "secret__iew": secret__iew, "secret__iregex": secret__iregex, "secret__isw": secret__isw, "secret__n": secret__n, "secret__nic": secret__nic, "secret__nie": secret__nie, "secret__niew": secret__niew, "secret__nisw": secret__nisw, "secret__regex": secret__regex, "ssl_verification": ssl_verification, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "updated_by_request": updated_by_request}) });
}

function extras_webhooks_destroy(additional_headers, body_template, ca_file_path, ca_file_path__empty, ca_file_path__ic, ca_file_path__ie, ca_file_path__iew, ca_file_path__iregex, ca_file_path__isw, ca_file_path__n, ca_file_path__nic, ca_file_path__nie, ca_file_path__niew, ca_file_path__nisw, ca_file_path__regex, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, http_content_type, http_content_type__empty, http_content_type__ic, http_content_type__ie, http_content_type__iew, http_content_type__iregex, http_content_type__isw, http_content_type__n, http_content_type__nic, http_content_type__nie, http_content_type__niew, http_content_type__nisw, http_content_type__regex, http_method, http_method__empty, http_method__ic, http_method__ie, http_method__iew, http_method__iregex, http_method__isw, http_method__n, http_method__nic, http_method__nie, http_method__niew, http_method__nisw, http_method__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, payload_url, q, secret, secret__empty, secret__ic, secret__ie, secret__iew, secret__iregex, secret__isw, secret__n, secret__nic, secret__nie, secret__niew, secret__nisw, secret__regex, ssl_verification, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "delete Extras";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function extras_webhooks_retrieve(additional_headers, body_template, ca_file_path, ca_file_path__empty, ca_file_path__ic, ca_file_path__ie, ca_file_path__iew, ca_file_path__iregex, ca_file_path__isw, ca_file_path__n, ca_file_path__nic, ca_file_path__nie, ca_file_path__niew, ca_file_path__nisw, ca_file_path__regex, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, http_content_type, http_content_type__empty, http_content_type__ic, http_content_type__ie, http_content_type__iew, http_content_type__iregex, http_content_type__isw, http_content_type__n, http_content_type__nic, http_content_type__nie, http_content_type__niew, http_content_type__nisw, http_content_type__regex, http_method, http_method__empty, http_method__ic, http_method__ie, http_method__iew, http_method__iregex, http_method__isw, http_method__n, http_method__nic, http_method__nie, http_method__niew, http_method__nisw, http_method__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, payload_url, q, secret, secret__empty, secret__ic, secret__ie, secret__iew, secret__iregex, secret__isw, secret__n, secret__nic, secret__nie, secret__niew, secret__nisw, secret__regex, ssl_verification, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "get Extras";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingExtras(additional_headers, body_template, ca_file_path, ca_file_path__empty, ca_file_path__ic, ca_file_path__ie, ca_file_path__iew, ca_file_path__iregex, ca_file_path__isw, ca_file_path__n, ca_file_path__nic, ca_file_path__nie, ca_file_path__niew, ca_file_path__nisw, ca_file_path__regex, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, http_content_type, http_content_type__empty, http_content_type__ic, http_content_type__ie, http_content_type__iew, http_content_type__iregex, http_content_type__isw, http_content_type__n, http_content_type__nic, http_content_type__nie, http_content_type__niew, http_content_type__nisw, http_content_type__regex, http_method, http_method__empty, http_method__ic, http_method__ie, http_method__iew, http_method__iregex, http_method__isw, http_method__n, http_method__nic, http_method__nie, http_method__niew, http_method__nisw, http_method__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, payload_url, q, secret, secret__empty, secret__ic, secret__ie, secret__iew, secret__iregex, secret__isw, secret__n, secret__nic, secret__nie, secret__niew, secret__nisw, secret__regex, ssl_verification, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/extras/webhooks/";
  var description = "Try Add Existing Extras";
  var body = {
    "name": String(name),
    "description": String(description),
    "payload_url": String(payload_url),
    "http_method": String(http_method),
    "http_content_type": String(http_content_type),
    "additional_headers": String(additional_headers),
    "body_template": String(body_template),
    "secret": String(secret),
    "ssl_verification": String(ssl_verification),
    "ca_file_path": String(ca_file_path),
    "custom_fields": String(custom_fields),
    "tags": String(tags),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyExtrasExists(additional_headers, body_template, ca_file_path, ca_file_path__empty, ca_file_path__ic, ca_file_path__ie, ca_file_path__iew, ca_file_path__iregex, ca_file_path__isw, ca_file_path__n, ca_file_path__nic, ca_file_path__nie, ca_file_path__niew, ca_file_path__nisw, ca_file_path__regex, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, http_content_type, http_content_type__empty, http_content_type__ic, http_content_type__ie, http_content_type__iew, http_content_type__iregex, http_content_type__isw, http_content_type__n, http_content_type__nic, http_content_type__nie, http_content_type__niew, http_content_type__nisw, http_content_type__regex, http_method, http_method__empty, http_method__ic, http_method__ie, http_method__iew, http_method__iregex, http_method__isw, http_method__n, http_method__nic, http_method__nie, http_method__niew, http_method__nisw, http_method__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, payload_url, q, secret, secret__empty, secret__ic, secret__ie, secret__iew, secret__iregex, secret__isw, secret__n, secret__nic, secret__nie, secret__niew, secret__nisw, secret__regex, ssl_verification, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/extras/webhooks/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Extras exists" } });
  pvg.success("Extras found");
}

function verifyExtrasDoesNotExist(additional_headers, body_template, ca_file_path, ca_file_path__empty, ca_file_path__ic, ca_file_path__ie, ca_file_path__iew, ca_file_path__iregex, ca_file_path__isw, ca_file_path__n, ca_file_path__nic, ca_file_path__nie, ca_file_path__niew, ca_file_path__nisw, ca_file_path__regex, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, http_content_type, http_content_type__empty, http_content_type__ic, http_content_type__ie, http_content_type__iew, http_content_type__iregex, http_content_type__isw, http_content_type__n, http_content_type__nic, http_content_type__nie, http_content_type__niew, http_content_type__nisw, http_content_type__regex, http_method, http_method__empty, http_method__ic, http_method__ie, http_method__iew, http_method__iregex, http_method__isw, http_method__n, http_method__nic, http_method__nie, http_method__niew, http_method__nisw, http_method__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, payload_url, q, secret, secret__empty, secret__ic, secret__ie, secret__iew, secret__iregex, secret__isw, secret__n, secret__nic, secret__nie, secret__niew, secret__nisw, secret__regex, ssl_verification, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/extras/webhooks/" + id + "/";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Extras does not exist" } });
  pvg.success("Extras not found");
}

function tryToDeleteANonExistingExtras(additional_headers, body_template, ca_file_path, ca_file_path__empty, ca_file_path__ic, ca_file_path__ie, ca_file_path__iew, ca_file_path__iregex, ca_file_path__isw, ca_file_path__n, ca_file_path__nic, ca_file_path__nie, ca_file_path__niew, ca_file_path__nisw, ca_file_path__regex, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, http_content_type, http_content_type__empty, http_content_type__ic, http_content_type__ie, http_content_type__iew, http_content_type__iregex, http_content_type__isw, http_content_type__n, http_content_type__nic, http_content_type__nie, http_content_type__niew, http_content_type__nisw, http_content_type__regex, http_method, http_method__empty, http_method__ic, http_method__ie, http_method__iew, http_method__iregex, http_method__isw, http_method__n, http_method__nic, http_method__nie, http_method__niew, http_method__nisw, http_method__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, payload_url, q, secret, secret__empty, secret__ic, secret__ie, secret__iew, secret__iregex, secret__isw, secret__n, secret__nic, secret__nie, secret__niew, secret__nisw, secret__regex, ssl_verification, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "Verify negative delete for Extras";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForExtrasAdded(additional_headers, body_template, ca_file_path, ca_file_path__empty, ca_file_path__ic, ca_file_path__ie, ca_file_path__iew, ca_file_path__iregex, ca_file_path__isw, ca_file_path__n, ca_file_path__nic, ca_file_path__nie, ca_file_path__niew, ca_file_path__nisw, ca_file_path__regex, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, http_content_type, http_content_type__empty, http_content_type__ic, http_content_type__ie, http_content_type__iew, http_content_type__iregex, http_content_type__isw, http_content_type__n, http_content_type__nic, http_content_type__nie, http_content_type__niew, http_content_type__nisw, http_content_type__regex, http_method, http_method__empty, http_method__ic, http_method__ie, http_method__iew, http_method__iregex, http_method__isw, http_method__n, http_method__nic, http_method__nie, http_method__niew, http_method__nisw, http_method__regex, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, payload_url, q, secret, secret__empty, secret__ic, secret__ie, secret__iew, secret__iregex, secret__isw, secret__n, secret__nic, secret__nie, secret__niew, secret__nisw, secret__regex, ssl_verification, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  waitFor(matchSuccess("add Extras"));
}

function waitForAnyExtrasAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Extras Added", function(e) {
      return e.name.startsWith("Done: add Extras");
  }) });
}

function ipam_vrfs_list(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, enforce_unique, export_target, export_target__n, export_target_id, export_target_id__n, export_targets, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, import_target, import_target__n, import_target_id, import_target_id__n, import_targets, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, rd, rd__empty, rd__ic, rd__ie, rd__iew, rd__iregex, rd__isw, rd__n, rd__nic, rd__nie, rd__niew, rd__nisw, rd__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/ipam/vrfs/";
  var description = "list Ipam";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function ipam_vrfs_create(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, enforce_unique, export_target, export_target__n, export_target_id, export_target_id__n, export_targets, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, import_target, import_target__n, import_target_id, import_target_id__n, import_targets, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, rd, rd__empty, rd__ic, rd__ie, rd__iew, rd__iregex, rd__isw, rd__n, rd__nic, rd__nie, rd__niew, rd__nisw, rd__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/ipam/vrfs/";
  var description = "add Ipam";
  var body = {
    "name": String(name),
    "rd": String(rd),
    "tenant": String(tenant),
    "enforce_unique": String(enforce_unique),
    "description": String(description),
    "comments": String(comments),
    "import_targets": String(import_targets),
    "export_targets": String(export_targets),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"comments": comments, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "enforce_unique": enforce_unique, "export_target": export_target, "export_target__n": export_target__n, "export_target_id": export_target_id, "export_target_id__n": export_target_id__n, "export_targets": export_targets, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "import_target": import_target, "import_target__n": import_target__n, "import_target_id": import_target_id, "import_target_id__n": import_target_id__n, "import_targets": import_targets, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "q": q, "rd": rd, "rd__empty": rd__empty, "rd__ic": rd__ic, "rd__ie": rd__ie, "rd__iew": rd__iew, "rd__iregex": rd__iregex, "rd__isw": rd__isw, "rd__n": rd__n, "rd__nic": rd__nic, "rd__nie": rd__nie, "rd__niew": rd__niew, "rd__nisw": rd__nisw, "rd__regex": rd__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "updated_by_request": updated_by_request}) });
}

function ipam_vrfs_update(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, enforce_unique, export_target, export_target__n, export_target_id, export_target_id__n, export_targets, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, import_target, import_target__n, import_target_id, import_target_id__n, import_targets, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, rd, rd__empty, rd__ic, rd__ie, rd__iew, rd__iregex, rd__isw, rd__n, rd__nic, rd__nie, rd__niew, rd__nisw, rd__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "update Ipam";
  var body = {
    "name": String(name),
    "rd": String(rd),
    "tenant": String(tenant),
    "enforce_unique": String(enforce_unique),
    "description": String(description),
    "comments": String(comments),
    "import_targets": String(import_targets),
    "export_targets": String(export_targets),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"comments": comments, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "enforce_unique": enforce_unique, "export_target": export_target, "export_target__n": export_target__n, "export_target_id": export_target_id, "export_target_id__n": export_target_id__n, "export_targets": export_targets, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "import_target": import_target, "import_target__n": import_target__n, "import_target_id": import_target_id, "import_target_id__n": import_target_id__n, "import_targets": import_targets, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "q": q, "rd": rd, "rd__empty": rd__empty, "rd__ic": rd__ic, "rd__ie": rd__ie, "rd__iew": rd__iew, "rd__iregex": rd__iregex, "rd__isw": rd__isw, "rd__n": rd__n, "rd__nic": rd__nic, "rd__nie": rd__nie, "rd__niew": rd__niew, "rd__nisw": rd__nisw, "rd__regex": rd__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "updated_by_request": updated_by_request}) });
}

function ipam_vrfs_partial_update(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, enforce_unique, export_target, export_target__n, export_target_id, export_target_id__n, export_targets, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, import_target, import_target__n, import_target_id, import_target_id__n, import_targets, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, rd, rd__empty, rd__ic, rd__ie, rd__iew, rd__iregex, rd__isw, rd__n, rd__nic, rd__nie, rd__niew, rd__nisw, rd__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "patch Ipam";
  var body = {
    "name": String(name),
    "rd": String(rd),
    "tenant": String(tenant),
    "enforce_unique": String(enforce_unique),
    "description": String(description),
    "comments": String(comments),
    "import_targets": String(import_targets),
    "export_targets": String(export_targets),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"comments": comments, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "enforce_unique": enforce_unique, "export_target": export_target, "export_target__n": export_target__n, "export_target_id": export_target_id, "export_target_id__n": export_target_id__n, "export_targets": export_targets, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "import_target": import_target, "import_target__n": import_target__n, "import_target_id": import_target_id, "import_target_id__n": import_target_id__n, "import_targets": import_targets, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "q": q, "rd": rd, "rd__empty": rd__empty, "rd__ic": rd__ic, "rd__ie": rd__ie, "rd__iew": rd__iew, "rd__iregex": rd__iregex, "rd__isw": rd__isw, "rd__n": rd__n, "rd__nic": rd__nic, "rd__nie": rd__nie, "rd__niew": rd__niew, "rd__nisw": rd__nisw, "rd__regex": rd__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "updated_by_request": updated_by_request}) });
}

function ipam_vrfs_destroy(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, enforce_unique, export_target, export_target__n, export_target_id, export_target_id__n, export_targets, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, import_target, import_target__n, import_target_id, import_target_id__n, import_targets, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, rd, rd__empty, rd__ic, rd__ie, rd__iew, rd__iregex, rd__isw, rd__n, rd__nic, rd__nie, rd__niew, rd__nisw, rd__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "delete Ipam";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function ipam_vrfs_retrieve(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, enforce_unique, export_target, export_target__n, export_target_id, export_target_id__n, export_targets, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, import_target, import_target__n, import_target_id, import_target_id__n, import_targets, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, rd, rd__empty, rd__ic, rd__ie, rd__iew, rd__iregex, rd__isw, rd__n, rd__nic, rd__nie, rd__niew, rd__nisw, rd__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "get Ipam";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingIpam(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, enforce_unique, export_target, export_target__n, export_target_id, export_target_id__n, export_targets, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, import_target, import_target__n, import_target_id, import_target_id__n, import_targets, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, rd, rd__empty, rd__ic, rd__ie, rd__iew, rd__iregex, rd__isw, rd__n, rd__nic, rd__nie, rd__niew, rd__nisw, rd__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/ipam/vrfs/";
  var description = "Try Add Existing Ipam";
  var body = {
    "name": String(name),
    "rd": String(rd),
    "tenant": String(tenant),
    "enforce_unique": String(enforce_unique),
    "description": String(description),
    "comments": String(comments),
    "import_targets": String(import_targets),
    "export_targets": String(export_targets),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIpamExists(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, enforce_unique, export_target, export_target__n, export_target_id, export_target_id__n, export_targets, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, import_target, import_target__n, import_target_id, import_target_id__n, import_targets, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, rd, rd__empty, rd__ic, rd__ie, rd__iew, rd__iregex, rd__isw, rd__n, rd__nic, rd__nie, rd__niew, rd__nisw, rd__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/ipam/vrfs/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Ipam exists" } });
  pvg.success("Ipam found");
}

function verifyIpamDoesNotExist(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, enforce_unique, export_target, export_target__n, export_target_id, export_target_id__n, export_targets, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, import_target, import_target__n, import_target_id, import_target_id__n, import_targets, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, rd, rd__empty, rd__ic, rd__ie, rd__iew, rd__iregex, rd__isw, rd__n, rd__nic, rd__nie, rd__niew, rd__nisw, rd__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/ipam/vrfs/" + id + "/";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Ipam does not exist" } });
  pvg.success("Ipam not found");
}

function tryToDeleteANonExistingIpam(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, enforce_unique, export_target, export_target__n, export_target_id, export_target_id__n, export_targets, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, import_target, import_target__n, import_target_id, import_target_id__n, import_targets, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, rd, rd__empty, rd__ic, rd__ie, rd__iew, rd__iregex, rd__isw, rd__n, rd__nic, rd__nie, rd__niew, rd__nisw, rd__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "Verify negative delete for Ipam";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForIpamAdded(comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, enforce_unique, export_target, export_target__n, export_target_id, export_target_id__n, export_targets, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, import_target, import_target__n, import_target_id, import_target_id__n, import_targets, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, rd, rd__empty, rd__ic, rd__ie, rd__iew, rd__iregex, rd__isw, rd__n, rd__nic, rd__nie, rd__niew, rd__nisw, rd__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  waitFor(matchSuccess("add Ipam"));
}

function waitForAnyIpamAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Ipam Added", function(e) {
      return e.name.startsWith("Done: add Ipam");
  }) });
}

function schema_retrieve(format, id, lang) {
  var url = "/api/schema/";
  var description = "list Schema";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifySchemaExists(format, id, lang) {
  var url = "/api/schema/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Item not found in list");
  }});
}

function verifySchemaDoesNotExist(format, id, lang) {
  var url = "/api/schema/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.fail("Found but should not exist"); }
      pvg.success("Item not found in list");
  }});
}

function status_retrieve(id) {
  var url = "/api/status/";
  var description = "list Status";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyStatusExists(id) {
  var url = "/api/status/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Item not found in list");
  }});
}

function verifyStatusDoesNotExist(id) {
  var url = "/api/status/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.fail("Found but should not exist"); }
      pvg.success("Item not found in list");
  }});
}

function tenancy_tenants_list(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, slug, slug__empty, slug__ic, slug__ie, slug__iew, slug__iregex, slug__isw, slug__n, slug__nic, slug__nie, slug__niew, slug__nisw, slug__regex, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/tenancy/tenants/";
  var description = "list Tenancy";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tenancy_tenants_create(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, slug, slug__empty, slug__ic, slug__ie, slug__iew, slug__iregex, slug__isw, slug__n, slug__nic, slug__nie, slug__niew, slug__nisw, slug__regex, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/tenancy/tenants/";
  var description = "add Tenancy";
  var body = {
    "name": String(name),
    "slug": String(slug),
    "group": String(group),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"comments": comments, "contact": contact, "contact__n": contact__n, "contact_group": contact_group, "contact_group__n": contact_group__n, "contact_role": contact_role, "contact_role__n": contact_role__n, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "group": group, "group__n": group__n, "group_id": group_id, "group_id__n": group_id__n, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "q": q, "slug": slug, "slug__empty": slug__empty, "slug__ic": slug__ic, "slug__ie": slug__ie, "slug__iew": slug__iew, "slug__iregex": slug__iregex, "slug__isw": slug__isw, "slug__n": slug__n, "slug__nic": slug__nic, "slug__nie": slug__nie, "slug__niew": slug__niew, "slug__nisw": slug__nisw, "slug__regex": slug__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "updated_by_request": updated_by_request}) });
}

function tenancy_tenants_update(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, slug, slug__empty, slug__ic, slug__ie, slug__iew, slug__iregex, slug__isw, slug__n, slug__nic, slug__nie, slug__niew, slug__nisw, slug__regex, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "update Tenancy";
  var body = {
    "name": String(name),
    "slug": String(slug),
    "group": String(group),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"comments": comments, "contact": contact, "contact__n": contact__n, "contact_group": contact_group, "contact_group__n": contact_group__n, "contact_role": contact_role, "contact_role__n": contact_role__n, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "group": group, "group__n": group__n, "group_id": group_id, "group_id__n": group_id__n, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "q": q, "slug": slug, "slug__empty": slug__empty, "slug__ic": slug__ic, "slug__ie": slug__ie, "slug__iew": slug__iew, "slug__iregex": slug__iregex, "slug__isw": slug__isw, "slug__n": slug__n, "slug__nic": slug__nic, "slug__nie": slug__nie, "slug__niew": slug__niew, "slug__nisw": slug__nisw, "slug__regex": slug__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "updated_by_request": updated_by_request}) });
}

function tenancy_tenants_partial_update(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, slug, slug__empty, slug__ic, slug__ie, slug__iew, slug__iregex, slug__isw, slug__n, slug__nic, slug__nie, slug__niew, slug__nisw, slug__regex, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "patch Tenancy";
  var body = {
    "name": String(name),
    "slug": String(slug),
    "group": String(group),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"comments": comments, "contact": contact, "contact__n": contact__n, "contact_group": contact_group, "contact_group__n": contact_group__n, "contact_role": contact_role, "contact_role__n": contact_role__n, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "group": group, "group__n": group__n, "group_id": group_id, "group_id__n": group_id__n, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "q": q, "slug": slug, "slug__empty": slug__empty, "slug__ic": slug__ic, "slug__ie": slug__ie, "slug__iew": slug__iew, "slug__iregex": slug__iregex, "slug__isw": slug__isw, "slug__n": slug__n, "slug__nic": slug__nic, "slug__nie": slug__nie, "slug__niew": slug__niew, "slug__nisw": slug__nisw, "slug__regex": slug__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "updated_by_request": updated_by_request}) });
}

function tenancy_tenants_destroy(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, slug, slug__empty, slug__ic, slug__ie, slug__iew, slug__iregex, slug__isw, slug__n, slug__nic, slug__nie, slug__niew, slug__nisw, slug__regex, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "delete Tenancy";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tenancy_tenants_retrieve(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, slug, slug__empty, slug__ic, slug__ie, slug__iew, slug__iregex, slug__isw, slug__n, slug__nic, slug__nie, slug__niew, slug__nisw, slug__regex, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "get Tenancy";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingTenancy(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, slug, slug__empty, slug__ic, slug__ie, slug__iew, slug__iregex, slug__isw, slug__n, slug__nic, slug__nie, slug__niew, slug__nisw, slug__regex, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/tenancy/tenants/";
  var description = "Try Add Existing Tenancy";
  var body = {
    "name": String(name),
    "slug": String(slug),
    "group": String(group),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTenancyExists(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, slug, slug__empty, slug__ic, slug__ie, slug__iew, slug__iregex, slug__isw, slug__n, slug__nic, slug__nie, slug__niew, slug__nisw, slug__regex, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/tenancy/tenants/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Tenancy exists" } });
  pvg.success("Tenancy found");
}

function verifyTenancyDoesNotExist(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, slug, slug__empty, slug__ic, slug__ie, slug__iew, slug__iregex, slug__isw, slug__n, slug__nic, slug__nie, slug__niew, slug__nisw, slug__regex, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/tenancy/tenants/" + id + "/";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Tenancy does not exist" } });
  pvg.success("Tenancy not found");
}

function tryToDeleteANonExistingTenancy(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, slug, slug__empty, slug__ic, slug__ie, slug__iew, slug__iregex, slug__isw, slug__n, slug__nic, slug__nie, slug__niew, slug__nisw, slug__regex, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "Verify negative delete for Tenancy";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForTenancyAdded(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, slug, slug__empty, slug__ic, slug__ie, slug__iew, slug__iregex, slug__isw, slug__n, slug__nic, slug__nie, slug__niew, slug__nisw, slug__regex, tag, tag__n, tag_id, tag_id__n, tags, updated_by_request) {
  waitFor(matchSuccess("add Tenancy"));
}

function waitForAnyTenancyAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Tenancy Added", function(e) {
      return e.name.startsWith("Done: add Tenancy");
  }) });
}

function users_users_list(date_joined, date_joined__empty, date_joined__gt, date_joined__gte, date_joined__lt, date_joined__lte, date_joined__n, email, email__empty, email__ic, email__ie, email__iew, email__iregex, email__isw, email__n, email__nic, email__nie, email__niew, email__nisw, email__regex, first_name, first_name__empty, first_name__ic, first_name__ie, first_name__iew, first_name__iregex, first_name__isw, first_name__n, first_name__nic, first_name__nie, first_name__niew, first_name__nisw, first_name__regex, group, group__n, group_id, group_id__n, groups, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, is_active, is_staff, is_superuser, last_login, last_login__empty, last_login__gt, last_login__gte, last_login__lt, last_login__lte, last_login__n, last_name, last_name__empty, last_name__ic, last_name__ie, last_name__iew, last_name__iregex, last_name__isw, last_name__n, last_name__nic, last_name__nie, last_name__niew, last_name__nisw, last_name__regex, limit, notification_group_id, notification_group_id__n, offset, ordering, password, permission_id, permission_id__n, permissions, q, username, username__empty, username__ic, username__ie, username__iew, username__iregex, username__isw, username__n, username__nic, username__nie, username__niew, username__nisw, username__regex) {
  var url = "/api/users/users/";
  var description = "list Users";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function users_users_create(date_joined, date_joined__empty, date_joined__gt, date_joined__gte, date_joined__lt, date_joined__lte, date_joined__n, email, email__empty, email__ic, email__ie, email__iew, email__iregex, email__isw, email__n, email__nic, email__nie, email__niew, email__nisw, email__regex, first_name, first_name__empty, first_name__ic, first_name__ie, first_name__iew, first_name__iregex, first_name__isw, first_name__n, first_name__nic, first_name__nie, first_name__niew, first_name__nisw, first_name__regex, group, group__n, group_id, group_id__n, groups, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, is_active, is_staff, is_superuser, last_login, last_login__empty, last_login__gt, last_login__gte, last_login__lt, last_login__lte, last_login__n, last_name, last_name__empty, last_name__ic, last_name__ie, last_name__iew, last_name__iregex, last_name__isw, last_name__n, last_name__nic, last_name__nie, last_name__niew, last_name__nisw, last_name__regex, limit, notification_group_id, notification_group_id__n, offset, ordering, password, permission_id, permission_id__n, permissions, q, username, username__empty, username__ic, username__ie, username__iew, username__iregex, username__isw, username__n, username__nic, username__nie, username__niew, username__nisw, username__regex) {
  var url = "/api/users/users/";
  var description = "add Users";
  var body = {
    "username": String(username),
    "password": String(password),
    "first_name": String(first_name),
    "last_name": String(last_name),
    "email": String(email),
    "is_staff": String(is_staff),
    "is_active": String(is_active),
    "date_joined": String(date_joined),
    "last_login": String(last_login),
    "groups": String(groups),
    "permissions": String(permissions),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"date_joined": date_joined, "date_joined__empty": date_joined__empty, "date_joined__gt": date_joined__gt, "date_joined__gte": date_joined__gte, "date_joined__lt": date_joined__lt, "date_joined__lte": date_joined__lte, "date_joined__n": date_joined__n, "email": email, "email__empty": email__empty, "email__ic": email__ic, "email__ie": email__ie, "email__iew": email__iew, "email__iregex": email__iregex, "email__isw": email__isw, "email__n": email__n, "email__nic": email__nic, "email__nie": email__nie, "email__niew": email__niew, "email__nisw": email__nisw, "email__regex": email__regex, "first_name": first_name, "first_name__empty": first_name__empty, "first_name__ic": first_name__ic, "first_name__ie": first_name__ie, "first_name__iew": first_name__iew, "first_name__iregex": first_name__iregex, "first_name__isw": first_name__isw, "first_name__n": first_name__n, "first_name__nic": first_name__nic, "first_name__nie": first_name__nie, "first_name__niew": first_name__niew, "first_name__nisw": first_name__nisw, "first_name__regex": first_name__regex, "group": group, "group__n": group__n, "group_id": group_id, "group_id__n": group_id__n, "groups": groups, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "is_active": is_active, "is_staff": is_staff, "is_superuser": is_superuser, "last_login": last_login, "last_login__empty": last_login__empty, "last_login__gt": last_login__gt, "last_login__gte": last_login__gte, "last_login__lt": last_login__lt, "last_login__lte": last_login__lte, "last_login__n": last_login__n, "last_name": last_name, "last_name__empty": last_name__empty, "last_name__ic": last_name__ic, "last_name__ie": last_name__ie, "last_name__iew": last_name__iew, "last_name__iregex": last_name__iregex, "last_name__isw": last_name__isw, "last_name__n": last_name__n, "last_name__nic": last_name__nic, "last_name__nie": last_name__nie, "last_name__niew": last_name__niew, "last_name__nisw": last_name__nisw, "last_name__regex": last_name__regex, "limit": limit, "notification_group_id": notification_group_id, "notification_group_id__n": notification_group_id__n, "offset": offset, "ordering": ordering, "password": password, "permission_id": permission_id, "permission_id__n": permission_id__n, "permissions": permissions, "q": q, "username": username, "username__empty": username__empty, "username__ic": username__ic, "username__ie": username__ie, "username__iew": username__iew, "username__iregex": username__iregex, "username__isw": username__isw, "username__n": username__n, "username__nic": username__nic, "username__nie": username__nie, "username__niew": username__niew, "username__nisw": username__nisw, "username__regex": username__regex}) });
}

function users_users_update(date_joined, date_joined__empty, date_joined__gt, date_joined__gte, date_joined__lt, date_joined__lte, date_joined__n, email, email__empty, email__ic, email__ie, email__iew, email__iregex, email__isw, email__n, email__nic, email__nie, email__niew, email__nisw, email__regex, first_name, first_name__empty, first_name__ic, first_name__ie, first_name__iew, first_name__iregex, first_name__isw, first_name__n, first_name__nic, first_name__nie, first_name__niew, first_name__nisw, first_name__regex, group, group__n, group_id, group_id__n, groups, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, is_active, is_staff, is_superuser, last_login, last_login__empty, last_login__gt, last_login__gte, last_login__lt, last_login__lte, last_login__n, last_name, last_name__empty, last_name__ic, last_name__ie, last_name__iew, last_name__iregex, last_name__isw, last_name__n, last_name__nic, last_name__nie, last_name__niew, last_name__nisw, last_name__regex, limit, notification_group_id, notification_group_id__n, offset, ordering, password, permission_id, permission_id__n, permissions, q, username, username__empty, username__ic, username__ie, username__iew, username__iregex, username__isw, username__n, username__nic, username__nie, username__niew, username__nisw, username__regex) {
  var url = "/api/users/users/" + id + "/";
  var description = "update Users";
  var body = {
    "username": String(username),
    "password": String(password),
    "first_name": String(first_name),
    "last_name": String(last_name),
    "email": String(email),
    "is_staff": String(is_staff),
    "is_active": String(is_active),
    "date_joined": String(date_joined),
    "last_login": String(last_login),
    "groups": String(groups),
    "permissions": String(permissions),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"date_joined": date_joined, "date_joined__empty": date_joined__empty, "date_joined__gt": date_joined__gt, "date_joined__gte": date_joined__gte, "date_joined__lt": date_joined__lt, "date_joined__lte": date_joined__lte, "date_joined__n": date_joined__n, "email": email, "email__empty": email__empty, "email__ic": email__ic, "email__ie": email__ie, "email__iew": email__iew, "email__iregex": email__iregex, "email__isw": email__isw, "email__n": email__n, "email__nic": email__nic, "email__nie": email__nie, "email__niew": email__niew, "email__nisw": email__nisw, "email__regex": email__regex, "first_name": first_name, "first_name__empty": first_name__empty, "first_name__ic": first_name__ic, "first_name__ie": first_name__ie, "first_name__iew": first_name__iew, "first_name__iregex": first_name__iregex, "first_name__isw": first_name__isw, "first_name__n": first_name__n, "first_name__nic": first_name__nic, "first_name__nie": first_name__nie, "first_name__niew": first_name__niew, "first_name__nisw": first_name__nisw, "first_name__regex": first_name__regex, "group": group, "group__n": group__n, "group_id": group_id, "group_id__n": group_id__n, "groups": groups, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "is_active": is_active, "is_staff": is_staff, "is_superuser": is_superuser, "last_login": last_login, "last_login__empty": last_login__empty, "last_login__gt": last_login__gt, "last_login__gte": last_login__gte, "last_login__lt": last_login__lt, "last_login__lte": last_login__lte, "last_login__n": last_login__n, "last_name": last_name, "last_name__empty": last_name__empty, "last_name__ic": last_name__ic, "last_name__ie": last_name__ie, "last_name__iew": last_name__iew, "last_name__iregex": last_name__iregex, "last_name__isw": last_name__isw, "last_name__n": last_name__n, "last_name__nic": last_name__nic, "last_name__nie": last_name__nie, "last_name__niew": last_name__niew, "last_name__nisw": last_name__nisw, "last_name__regex": last_name__regex, "limit": limit, "notification_group_id": notification_group_id, "notification_group_id__n": notification_group_id__n, "offset": offset, "ordering": ordering, "password": password, "permission_id": permission_id, "permission_id__n": permission_id__n, "permissions": permissions, "q": q, "username": username, "username__empty": username__empty, "username__ic": username__ic, "username__ie": username__ie, "username__iew": username__iew, "username__iregex": username__iregex, "username__isw": username__isw, "username__n": username__n, "username__nic": username__nic, "username__nie": username__nie, "username__niew": username__niew, "username__nisw": username__nisw, "username__regex": username__regex}) });
}

function users_users_partial_update(date_joined, date_joined__empty, date_joined__gt, date_joined__gte, date_joined__lt, date_joined__lte, date_joined__n, email, email__empty, email__ic, email__ie, email__iew, email__iregex, email__isw, email__n, email__nic, email__nie, email__niew, email__nisw, email__regex, first_name, first_name__empty, first_name__ic, first_name__ie, first_name__iew, first_name__iregex, first_name__isw, first_name__n, first_name__nic, first_name__nie, first_name__niew, first_name__nisw, first_name__regex, group, group__n, group_id, group_id__n, groups, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, is_active, is_staff, is_superuser, last_login, last_login__empty, last_login__gt, last_login__gte, last_login__lt, last_login__lte, last_login__n, last_name, last_name__empty, last_name__ic, last_name__ie, last_name__iew, last_name__iregex, last_name__isw, last_name__n, last_name__nic, last_name__nie, last_name__niew, last_name__nisw, last_name__regex, limit, notification_group_id, notification_group_id__n, offset, ordering, password, permission_id, permission_id__n, permissions, q, username, username__empty, username__ic, username__ie, username__iew, username__iregex, username__isw, username__n, username__nic, username__nie, username__niew, username__nisw, username__regex) {
  var url = "/api/users/users/" + id + "/";
  var description = "patch Users";
  var body = {
    "username": String(username),
    "password": String(password),
    "first_name": String(first_name),
    "last_name": String(last_name),
    "email": String(email),
    "is_staff": String(is_staff),
    "is_active": String(is_active),
    "date_joined": String(date_joined),
    "last_login": String(last_login),
    "groups": String(groups),
    "permissions": String(permissions),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"date_joined": date_joined, "date_joined__empty": date_joined__empty, "date_joined__gt": date_joined__gt, "date_joined__gte": date_joined__gte, "date_joined__lt": date_joined__lt, "date_joined__lte": date_joined__lte, "date_joined__n": date_joined__n, "email": email, "email__empty": email__empty, "email__ic": email__ic, "email__ie": email__ie, "email__iew": email__iew, "email__iregex": email__iregex, "email__isw": email__isw, "email__n": email__n, "email__nic": email__nic, "email__nie": email__nie, "email__niew": email__niew, "email__nisw": email__nisw, "email__regex": email__regex, "first_name": first_name, "first_name__empty": first_name__empty, "first_name__ic": first_name__ic, "first_name__ie": first_name__ie, "first_name__iew": first_name__iew, "first_name__iregex": first_name__iregex, "first_name__isw": first_name__isw, "first_name__n": first_name__n, "first_name__nic": first_name__nic, "first_name__nie": first_name__nie, "first_name__niew": first_name__niew, "first_name__nisw": first_name__nisw, "first_name__regex": first_name__regex, "group": group, "group__n": group__n, "group_id": group_id, "group_id__n": group_id__n, "groups": groups, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "is_active": is_active, "is_staff": is_staff, "is_superuser": is_superuser, "last_login": last_login, "last_login__empty": last_login__empty, "last_login__gt": last_login__gt, "last_login__gte": last_login__gte, "last_login__lt": last_login__lt, "last_login__lte": last_login__lte, "last_login__n": last_login__n, "last_name": last_name, "last_name__empty": last_name__empty, "last_name__ic": last_name__ic, "last_name__ie": last_name__ie, "last_name__iew": last_name__iew, "last_name__iregex": last_name__iregex, "last_name__isw": last_name__isw, "last_name__n": last_name__n, "last_name__nic": last_name__nic, "last_name__nie": last_name__nie, "last_name__niew": last_name__niew, "last_name__nisw": last_name__nisw, "last_name__regex": last_name__regex, "limit": limit, "notification_group_id": notification_group_id, "notification_group_id__n": notification_group_id__n, "offset": offset, "ordering": ordering, "password": password, "permission_id": permission_id, "permission_id__n": permission_id__n, "permissions": permissions, "q": q, "username": username, "username__empty": username__empty, "username__ic": username__ic, "username__ie": username__ie, "username__iew": username__iew, "username__iregex": username__iregex, "username__isw": username__isw, "username__n": username__n, "username__nic": username__nic, "username__nie": username__nie, "username__niew": username__niew, "username__nisw": username__nisw, "username__regex": username__regex}) });
}

function users_users_destroy(date_joined, date_joined__empty, date_joined__gt, date_joined__gte, date_joined__lt, date_joined__lte, date_joined__n, email, email__empty, email__ic, email__ie, email__iew, email__iregex, email__isw, email__n, email__nic, email__nie, email__niew, email__nisw, email__regex, first_name, first_name__empty, first_name__ic, first_name__ie, first_name__iew, first_name__iregex, first_name__isw, first_name__n, first_name__nic, first_name__nie, first_name__niew, first_name__nisw, first_name__regex, group, group__n, group_id, group_id__n, groups, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, is_active, is_staff, is_superuser, last_login, last_login__empty, last_login__gt, last_login__gte, last_login__lt, last_login__lte, last_login__n, last_name, last_name__empty, last_name__ic, last_name__ie, last_name__iew, last_name__iregex, last_name__isw, last_name__n, last_name__nic, last_name__nie, last_name__niew, last_name__nisw, last_name__regex, limit, notification_group_id, notification_group_id__n, offset, ordering, password, permission_id, permission_id__n, permissions, q, username, username__empty, username__ic, username__ie, username__iew, username__iregex, username__isw, username__n, username__nic, username__nie, username__niew, username__nisw, username__regex) {
  var url = "/api/users/users/" + id + "/";
  var description = "delete Users";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function users_users_retrieve(date_joined, date_joined__empty, date_joined__gt, date_joined__gte, date_joined__lt, date_joined__lte, date_joined__n, email, email__empty, email__ic, email__ie, email__iew, email__iregex, email__isw, email__n, email__nic, email__nie, email__niew, email__nisw, email__regex, first_name, first_name__empty, first_name__ic, first_name__ie, first_name__iew, first_name__iregex, first_name__isw, first_name__n, first_name__nic, first_name__nie, first_name__niew, first_name__nisw, first_name__regex, group, group__n, group_id, group_id__n, groups, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, is_active, is_staff, is_superuser, last_login, last_login__empty, last_login__gt, last_login__gte, last_login__lt, last_login__lte, last_login__n, last_name, last_name__empty, last_name__ic, last_name__ie, last_name__iew, last_name__iregex, last_name__isw, last_name__n, last_name__nic, last_name__nie, last_name__niew, last_name__nisw, last_name__regex, limit, notification_group_id, notification_group_id__n, offset, ordering, password, permission_id, permission_id__n, permissions, q, username, username__empty, username__ic, username__ie, username__iew, username__iregex, username__isw, username__n, username__nic, username__nie, username__niew, username__nisw, username__regex) {
  var url = "/api/users/users/" + id + "/";
  var description = "get Users";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingUsers(date_joined, date_joined__empty, date_joined__gt, date_joined__gte, date_joined__lt, date_joined__lte, date_joined__n, email, email__empty, email__ic, email__ie, email__iew, email__iregex, email__isw, email__n, email__nic, email__nie, email__niew, email__nisw, email__regex, first_name, first_name__empty, first_name__ic, first_name__ie, first_name__iew, first_name__iregex, first_name__isw, first_name__n, first_name__nic, first_name__nie, first_name__niew, first_name__nisw, first_name__regex, group, group__n, group_id, group_id__n, groups, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, is_active, is_staff, is_superuser, last_login, last_login__empty, last_login__gt, last_login__gte, last_login__lt, last_login__lte, last_login__n, last_name, last_name__empty, last_name__ic, last_name__ie, last_name__iew, last_name__iregex, last_name__isw, last_name__n, last_name__nic, last_name__nie, last_name__niew, last_name__nisw, last_name__regex, limit, notification_group_id, notification_group_id__n, offset, ordering, password, permission_id, permission_id__n, permissions, q, username, username__empty, username__ic, username__ie, username__iew, username__iregex, username__isw, username__n, username__nic, username__nie, username__niew, username__nisw, username__regex) {
  var url = "/api/users/users/";
  var description = "Try Add Existing Users";
  var body = {
    "username": String(username),
    "password": String(password),
    "first_name": String(first_name),
    "last_name": String(last_name),
    "email": String(email),
    "is_staff": String(is_staff),
    "is_active": String(is_active),
    "date_joined": String(date_joined),
    "last_login": String(last_login),
    "groups": String(groups),
    "permissions": String(permissions),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUsersExists(date_joined, date_joined__empty, date_joined__gt, date_joined__gte, date_joined__lt, date_joined__lte, date_joined__n, email, email__empty, email__ic, email__ie, email__iew, email__iregex, email__isw, email__n, email__nic, email__nie, email__niew, email__nisw, email__regex, first_name, first_name__empty, first_name__ic, first_name__ie, first_name__iew, first_name__iregex, first_name__isw, first_name__n, first_name__nic, first_name__nie, first_name__niew, first_name__nisw, first_name__regex, group, group__n, group_id, group_id__n, groups, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, is_active, is_staff, is_superuser, last_login, last_login__empty, last_login__gt, last_login__gte, last_login__lt, last_login__lte, last_login__n, last_name, last_name__empty, last_name__ic, last_name__ie, last_name__iew, last_name__iregex, last_name__isw, last_name__n, last_name__nic, last_name__nie, last_name__niew, last_name__nisw, last_name__regex, limit, notification_group_id, notification_group_id__n, offset, ordering, password, permission_id, permission_id__n, permissions, q, username, username__empty, username__ic, username__ie, username__iew, username__iregex, username__isw, username__n, username__nic, username__nie, username__niew, username__nisw, username__regex) {
  var url = "/api/users/users/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Users exists" } });
  pvg.success("Users found");
}

function verifyUsersDoesNotExist(date_joined, date_joined__empty, date_joined__gt, date_joined__gte, date_joined__lt, date_joined__lte, date_joined__n, email, email__empty, email__ic, email__ie, email__iew, email__iregex, email__isw, email__n, email__nic, email__nie, email__niew, email__nisw, email__regex, first_name, first_name__empty, first_name__ic, first_name__ie, first_name__iew, first_name__iregex, first_name__isw, first_name__n, first_name__nic, first_name__nie, first_name__niew, first_name__nisw, first_name__regex, group, group__n, group_id, group_id__n, groups, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, is_active, is_staff, is_superuser, last_login, last_login__empty, last_login__gt, last_login__gte, last_login__lt, last_login__lte, last_login__n, last_name, last_name__empty, last_name__ic, last_name__ie, last_name__iew, last_name__iregex, last_name__isw, last_name__n, last_name__nic, last_name__nie, last_name__niew, last_name__nisw, last_name__regex, limit, notification_group_id, notification_group_id__n, offset, ordering, password, permission_id, permission_id__n, permissions, q, username, username__empty, username__ic, username__ie, username__iew, username__iregex, username__isw, username__n, username__nic, username__nie, username__niew, username__nisw, username__regex) {
  var url = "/api/users/users/" + id + "/";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Users does not exist" } });
  pvg.success("Users not found");
}

function tryToDeleteANonExistingUsers(date_joined, date_joined__empty, date_joined__gt, date_joined__gte, date_joined__lt, date_joined__lte, date_joined__n, email, email__empty, email__ic, email__ie, email__iew, email__iregex, email__isw, email__n, email__nic, email__nie, email__niew, email__nisw, email__regex, first_name, first_name__empty, first_name__ic, first_name__ie, first_name__iew, first_name__iregex, first_name__isw, first_name__n, first_name__nic, first_name__nie, first_name__niew, first_name__nisw, first_name__regex, group, group__n, group_id, group_id__n, groups, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, is_active, is_staff, is_superuser, last_login, last_login__empty, last_login__gt, last_login__gte, last_login__lt, last_login__lte, last_login__n, last_name, last_name__empty, last_name__ic, last_name__ie, last_name__iew, last_name__iregex, last_name__isw, last_name__n, last_name__nic, last_name__nie, last_name__niew, last_name__nisw, last_name__regex, limit, notification_group_id, notification_group_id__n, offset, ordering, password, permission_id, permission_id__n, permissions, q, username, username__empty, username__ic, username__ie, username__iew, username__iregex, username__isw, username__n, username__nic, username__nie, username__niew, username__nisw, username__regex) {
  var url = "/api/users/users/" + id + "/";
  var description = "Verify negative delete for Users";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForUsersAdded(date_joined, date_joined__empty, date_joined__gt, date_joined__gte, date_joined__lt, date_joined__lte, date_joined__n, email, email__empty, email__ic, email__ie, email__iew, email__iregex, email__isw, email__n, email__nic, email__nie, email__niew, email__nisw, email__regex, first_name, first_name__empty, first_name__ic, first_name__ie, first_name__iew, first_name__iregex, first_name__isw, first_name__n, first_name__nic, first_name__nie, first_name__niew, first_name__nisw, first_name__regex, group, group__n, group_id, group_id__n, groups, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, is_active, is_staff, is_superuser, last_login, last_login__empty, last_login__gt, last_login__gte, last_login__lt, last_login__lte, last_login__n, last_name, last_name__empty, last_name__ic, last_name__ie, last_name__iew, last_name__iregex, last_name__isw, last_name__n, last_name__nic, last_name__nie, last_name__niew, last_name__nisw, last_name__regex, limit, notification_group_id, notification_group_id__n, offset, ordering, password, permission_id, permission_id__n, permissions, q, username, username__empty, username__ic, username__ie, username__iew, username__iregex, username__isw, username__n, username__nic, username__nie, username__niew, username__nisw, username__regex) {
  waitFor(matchSuccess("add Users"));
}

function waitForAnyUsersAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: add Users");
  }) });
}

function virtualization_virtual_machines_list(cluster, cluster__n, cluster_group, cluster_group__n, cluster_group_id, cluster_group_id__n, cluster_id, cluster_id__n, cluster_type, cluster_type__n, cluster_type_id, cluster_type_id__n, comments, config_template, config_template_id, config_template_id__n, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, disk, disk__empty, disk__gt, disk__gte, disk__lt, disk__lte, disk__n, format, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_count, interface_count__empty, interface_count__gt, interface_count__gte, interface_count__lt, interface_count__lte, interface_count__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, local_context_data, mac_address, mac_address__ic, mac_address__ie, mac_address__iew, mac_address__iregex, mac_address__isw, mac_address__n, mac_address__nic, mac_address__nie, mac_address__niew, mac_address__nisw, mac_address__regex, memory, memory__empty, memory__gt, memory__gte, memory__lt, memory__lte, memory__n, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, platform, platform__n, platform_id, platform_id__n, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, region, region__n, region_id, region_id__n, role, role__n, role_id, role_id__n, serial, serial__empty, serial__ic, serial__ie, serial__iew, serial__iregex, serial__isw, serial__n, serial__nic, serial__nie, serial__niew, serial__nisw, serial__regex, site, site__n, site_group, site_group__n, site_group_id, site_group_id__n, site_id, site_id__n, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request, vcpus, vcpus__empty, vcpus__gt, vcpus__gte, vcpus__lt, vcpus__lte, vcpus__n, virtual_disk_count, virtual_disk_count__empty, virtual_disk_count__gt, virtual_disk_count__gte, virtual_disk_count__lt, virtual_disk_count__lte, virtual_disk_count__n) {
  var url = "/api/virtualization/virtual-machines/";
  var description = "list Virtualization";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function virtualization_virtual_machines_render_config_create(cluster, cluster__n, cluster_group, cluster_group__n, cluster_group_id, cluster_group_id__n, cluster_id, cluster_id__n, cluster_type, cluster_type__n, cluster_type_id, cluster_type_id__n, comments, config_template, config_template_id, config_template_id__n, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, disk, disk__empty, disk__gt, disk__gte, disk__lt, disk__lte, disk__n, format, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_count, interface_count__empty, interface_count__gt, interface_count__gte, interface_count__lt, interface_count__lte, interface_count__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, local_context_data, mac_address, mac_address__ic, mac_address__ie, mac_address__iew, mac_address__iregex, mac_address__isw, mac_address__n, mac_address__nic, mac_address__nie, mac_address__niew, mac_address__nisw, mac_address__regex, memory, memory__empty, memory__gt, memory__gte, memory__lt, memory__lte, memory__n, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, platform, platform__n, platform_id, platform_id__n, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, region, region__n, region_id, region_id__n, role, role__n, role_id, role_id__n, serial, serial__empty, serial__ic, serial__ie, serial__iew, serial__iregex, serial__isw, serial__n, serial__nic, serial__nie, serial__niew, serial__nisw, serial__regex, site, site__n, site_group, site_group__n, site_group_id, site_group_id__n, site_id, site_id__n, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request, vcpus, vcpus__empty, vcpus__gt, vcpus__gte, vcpus__lt, vcpus__lte, vcpus__n, virtual_disk_count, virtual_disk_count__empty, virtual_disk_count__gt, virtual_disk_count__gte, virtual_disk_count__lt, virtual_disk_count__lte, virtual_disk_count__n) {
  var url = "/api/virtualization/virtual-machines/" + id + "/render-config/";
  var description = "add Virtualization";
  var body = {
    "name": String(name),
    "status": String(status),
    "site": String(site),
    "cluster": String(cluster),
    "device": String(device),
    "serial": String(serial),
    "role": String(role),
    "tenant": String(tenant),
    "platform": String(platform),
    "primary_ip4": String(primary_ip4),
    "primary_ip6": String(primary_ip6),
    "vcpus": String(vcpus),
    "memory": String(memory),
    "disk": String(disk),
    "description": String(description),
    "comments": String(comments),
    "config_template": String(config_template),
    "local_context_data": String(local_context_data),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"cluster": cluster, "cluster__n": cluster__n, "cluster_group": cluster_group, "cluster_group__n": cluster_group__n, "cluster_group_id": cluster_group_id, "cluster_group_id__n": cluster_group_id__n, "cluster_id": cluster_id, "cluster_id__n": cluster_id__n, "cluster_type": cluster_type, "cluster_type__n": cluster_type__n, "cluster_type_id": cluster_type_id, "cluster_type_id__n": cluster_type_id__n, "comments": comments, "config_template": config_template, "config_template_id": config_template_id, "config_template_id__n": config_template_id__n, "contact": contact, "contact__n": contact__n, "contact_group": contact_group, "contact_group__n": contact_group__n, "contact_role": contact_role, "contact_role__n": contact_role__n, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "device": device, "device__n": device__n, "device_id": device_id, "device_id__n": device_id__n, "disk": disk, "disk__empty": disk__empty, "disk__gt": disk__gt, "disk__gte": disk__gte, "disk__lt": disk__lt, "disk__lte": disk__lte, "disk__n": disk__n, "format": format, "has_primary_ip": has_primary_ip, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "interface_count": interface_count, "interface_count__empty": interface_count__empty, "interface_count__gt": interface_count__gt, "interface_count__gte": interface_count__gte, "interface_count__lt": interface_count__lt, "interface_count__lte": interface_count__lte, "interface_count__n": interface_count__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "local_context_data": local_context_data, "mac_address": mac_address, "mac_address__ic": mac_address__ic, "mac_address__ie": mac_address__ie, "mac_address__iew": mac_address__iew, "mac_address__iregex": mac_address__iregex, "mac_address__isw": mac_address__isw, "mac_address__n": mac_address__n, "mac_address__nic": mac_address__nic, "mac_address__nie": mac_address__nie, "mac_address__niew": mac_address__niew, "mac_address__nisw": mac_address__nisw, "mac_address__regex": mac_address__regex, "memory": memory, "memory__empty": memory__empty, "memory__gt": memory__gt, "memory__gte": memory__gte, "memory__lt": memory__lt, "memory__lte": memory__lte, "memory__n": memory__n, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "platform": platform, "platform__n": platform__n, "platform_id": platform_id, "platform_id__n": platform_id__n, "primary_ip4": primary_ip4, "primary_ip4__n": primary_ip4__n, "primary_ip4_id": primary_ip4_id, "primary_ip4_id__n": primary_ip4_id__n, "primary_ip6": primary_ip6, "primary_ip6__n": primary_ip6__n, "primary_ip6_id": primary_ip6_id, "primary_ip6_id__n": primary_ip6_id__n, "q": q, "region": region, "region__n": region__n, "region_id": region_id, "region_id__n": region_id__n, "role": role, "role__n": role__n, "role_id": role_id, "role_id__n": role_id__n, "serial": serial, "serial__empty": serial__empty, "serial__ic": serial__ic, "serial__ie": serial__ie, "serial__iew": serial__iew, "serial__iregex": serial__iregex, "serial__isw": serial__isw, "serial__n": serial__n, "serial__nic": serial__nic, "serial__nie": serial__nie, "serial__niew": serial__niew, "serial__nisw": serial__nisw, "serial__regex": serial__regex, "site": site, "site__n": site__n, "site_group": site_group, "site_group__n": site_group__n, "site_group_id": site_group_id, "site_group_id__n": site_group_id__n, "site_id": site_id, "site_id__n": site_id__n, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "updated_by_request": updated_by_request, "vcpus": vcpus, "vcpus__empty": vcpus__empty, "vcpus__gt": vcpus__gt, "vcpus__gte": vcpus__gte, "vcpus__lt": vcpus__lt, "vcpus__lte": vcpus__lte, "vcpus__n": vcpus__n, "virtual_disk_count": virtual_disk_count, "virtual_disk_count__empty": virtual_disk_count__empty, "virtual_disk_count__gt": virtual_disk_count__gt, "virtual_disk_count__gte": virtual_disk_count__gte, "virtual_disk_count__lt": virtual_disk_count__lt, "virtual_disk_count__lte": virtual_disk_count__lte, "virtual_disk_count__n": virtual_disk_count__n}) });
}

function virtualization_virtual_machines_update(cluster, cluster__n, cluster_group, cluster_group__n, cluster_group_id, cluster_group_id__n, cluster_id, cluster_id__n, cluster_type, cluster_type__n, cluster_type_id, cluster_type_id__n, comments, config_template, config_template_id, config_template_id__n, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, disk, disk__empty, disk__gt, disk__gte, disk__lt, disk__lte, disk__n, format, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_count, interface_count__empty, interface_count__gt, interface_count__gte, interface_count__lt, interface_count__lte, interface_count__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, local_context_data, mac_address, mac_address__ic, mac_address__ie, mac_address__iew, mac_address__iregex, mac_address__isw, mac_address__n, mac_address__nic, mac_address__nie, mac_address__niew, mac_address__nisw, mac_address__regex, memory, memory__empty, memory__gt, memory__gte, memory__lt, memory__lte, memory__n, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, platform, platform__n, platform_id, platform_id__n, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, region, region__n, region_id, region_id__n, role, role__n, role_id, role_id__n, serial, serial__empty, serial__ic, serial__ie, serial__iew, serial__iregex, serial__isw, serial__n, serial__nic, serial__nie, serial__niew, serial__nisw, serial__regex, site, site__n, site_group, site_group__n, site_group_id, site_group_id__n, site_id, site_id__n, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request, vcpus, vcpus__empty, vcpus__gt, vcpus__gte, vcpus__lt, vcpus__lte, vcpus__n, virtual_disk_count, virtual_disk_count__empty, virtual_disk_count__gt, virtual_disk_count__gte, virtual_disk_count__lt, virtual_disk_count__lte, virtual_disk_count__n) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "update Virtualization";
  var body = {
    "name": String(name),
    "status": String(status),
    "site": String(site),
    "cluster": String(cluster),
    "device": String(device),
    "serial": String(serial),
    "role": String(role),
    "tenant": String(tenant),
    "platform": String(platform),
    "primary_ip4": String(primary_ip4),
    "primary_ip6": String(primary_ip6),
    "vcpus": String(vcpus),
    "memory": String(memory),
    "disk": String(disk),
    "description": String(description),
    "comments": String(comments),
    "config_template": String(config_template),
    "local_context_data": String(local_context_data),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"cluster": cluster, "cluster__n": cluster__n, "cluster_group": cluster_group, "cluster_group__n": cluster_group__n, "cluster_group_id": cluster_group_id, "cluster_group_id__n": cluster_group_id__n, "cluster_id": cluster_id, "cluster_id__n": cluster_id__n, "cluster_type": cluster_type, "cluster_type__n": cluster_type__n, "cluster_type_id": cluster_type_id, "cluster_type_id__n": cluster_type_id__n, "comments": comments, "config_template": config_template, "config_template_id": config_template_id, "config_template_id__n": config_template_id__n, "contact": contact, "contact__n": contact__n, "contact_group": contact_group, "contact_group__n": contact_group__n, "contact_role": contact_role, "contact_role__n": contact_role__n, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "device": device, "device__n": device__n, "device_id": device_id, "device_id__n": device_id__n, "disk": disk, "disk__empty": disk__empty, "disk__gt": disk__gt, "disk__gte": disk__gte, "disk__lt": disk__lt, "disk__lte": disk__lte, "disk__n": disk__n, "format": format, "has_primary_ip": has_primary_ip, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "interface_count": interface_count, "interface_count__empty": interface_count__empty, "interface_count__gt": interface_count__gt, "interface_count__gte": interface_count__gte, "interface_count__lt": interface_count__lt, "interface_count__lte": interface_count__lte, "interface_count__n": interface_count__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "local_context_data": local_context_data, "mac_address": mac_address, "mac_address__ic": mac_address__ic, "mac_address__ie": mac_address__ie, "mac_address__iew": mac_address__iew, "mac_address__iregex": mac_address__iregex, "mac_address__isw": mac_address__isw, "mac_address__n": mac_address__n, "mac_address__nic": mac_address__nic, "mac_address__nie": mac_address__nie, "mac_address__niew": mac_address__niew, "mac_address__nisw": mac_address__nisw, "mac_address__regex": mac_address__regex, "memory": memory, "memory__empty": memory__empty, "memory__gt": memory__gt, "memory__gte": memory__gte, "memory__lt": memory__lt, "memory__lte": memory__lte, "memory__n": memory__n, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "platform": platform, "platform__n": platform__n, "platform_id": platform_id, "platform_id__n": platform_id__n, "primary_ip4": primary_ip4, "primary_ip4__n": primary_ip4__n, "primary_ip4_id": primary_ip4_id, "primary_ip4_id__n": primary_ip4_id__n, "primary_ip6": primary_ip6, "primary_ip6__n": primary_ip6__n, "primary_ip6_id": primary_ip6_id, "primary_ip6_id__n": primary_ip6_id__n, "q": q, "region": region, "region__n": region__n, "region_id": region_id, "region_id__n": region_id__n, "role": role, "role__n": role__n, "role_id": role_id, "role_id__n": role_id__n, "serial": serial, "serial__empty": serial__empty, "serial__ic": serial__ic, "serial__ie": serial__ie, "serial__iew": serial__iew, "serial__iregex": serial__iregex, "serial__isw": serial__isw, "serial__n": serial__n, "serial__nic": serial__nic, "serial__nie": serial__nie, "serial__niew": serial__niew, "serial__nisw": serial__nisw, "serial__regex": serial__regex, "site": site, "site__n": site__n, "site_group": site_group, "site_group__n": site_group__n, "site_group_id": site_group_id, "site_group_id__n": site_group_id__n, "site_id": site_id, "site_id__n": site_id__n, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "updated_by_request": updated_by_request, "vcpus": vcpus, "vcpus__empty": vcpus__empty, "vcpus__gt": vcpus__gt, "vcpus__gte": vcpus__gte, "vcpus__lt": vcpus__lt, "vcpus__lte": vcpus__lte, "vcpus__n": vcpus__n, "virtual_disk_count": virtual_disk_count, "virtual_disk_count__empty": virtual_disk_count__empty, "virtual_disk_count__gt": virtual_disk_count__gt, "virtual_disk_count__gte": virtual_disk_count__gte, "virtual_disk_count__lt": virtual_disk_count__lt, "virtual_disk_count__lte": virtual_disk_count__lte, "virtual_disk_count__n": virtual_disk_count__n}) });
}

function virtualization_virtual_machines_partial_update(cluster, cluster__n, cluster_group, cluster_group__n, cluster_group_id, cluster_group_id__n, cluster_id, cluster_id__n, cluster_type, cluster_type__n, cluster_type_id, cluster_type_id__n, comments, config_template, config_template_id, config_template_id__n, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, disk, disk__empty, disk__gt, disk__gte, disk__lt, disk__lte, disk__n, format, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_count, interface_count__empty, interface_count__gt, interface_count__gte, interface_count__lt, interface_count__lte, interface_count__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, local_context_data, mac_address, mac_address__ic, mac_address__ie, mac_address__iew, mac_address__iregex, mac_address__isw, mac_address__n, mac_address__nic, mac_address__nie, mac_address__niew, mac_address__nisw, mac_address__regex, memory, memory__empty, memory__gt, memory__gte, memory__lt, memory__lte, memory__n, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, platform, platform__n, platform_id, platform_id__n, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, region, region__n, region_id, region_id__n, role, role__n, role_id, role_id__n, serial, serial__empty, serial__ic, serial__ie, serial__iew, serial__iregex, serial__isw, serial__n, serial__nic, serial__nie, serial__niew, serial__nisw, serial__regex, site, site__n, site_group, site_group__n, site_group_id, site_group_id__n, site_id, site_id__n, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request, vcpus, vcpus__empty, vcpus__gt, vcpus__gte, vcpus__lt, vcpus__lte, vcpus__n, virtual_disk_count, virtual_disk_count__empty, virtual_disk_count__gt, virtual_disk_count__gte, virtual_disk_count__lt, virtual_disk_count__lte, virtual_disk_count__n) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "patch Virtualization";
  var body = {
    "name": String(name),
    "status": String(status),
    "site": String(site),
    "cluster": String(cluster),
    "device": String(device),
    "serial": String(serial),
    "role": String(role),
    "tenant": String(tenant),
    "platform": String(platform),
    "primary_ip4": String(primary_ip4),
    "primary_ip6": String(primary_ip6),
    "vcpus": String(vcpus),
    "memory": String(memory),
    "disk": String(disk),
    "description": String(description),
    "comments": String(comments),
    "config_template": String(config_template),
    "local_context_data": String(local_context_data),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"cluster": cluster, "cluster__n": cluster__n, "cluster_group": cluster_group, "cluster_group__n": cluster_group__n, "cluster_group_id": cluster_group_id, "cluster_group_id__n": cluster_group_id__n, "cluster_id": cluster_id, "cluster_id__n": cluster_id__n, "cluster_type": cluster_type, "cluster_type__n": cluster_type__n, "cluster_type_id": cluster_type_id, "cluster_type_id__n": cluster_type_id__n, "comments": comments, "config_template": config_template, "config_template_id": config_template_id, "config_template_id__n": config_template_id__n, "contact": contact, "contact__n": contact__n, "contact_group": contact_group, "contact_group__n": contact_group__n, "contact_role": contact_role, "contact_role__n": contact_role__n, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "device": device, "device__n": device__n, "device_id": device_id, "device_id__n": device_id__n, "disk": disk, "disk__empty": disk__empty, "disk__gt": disk__gt, "disk__gte": disk__gte, "disk__lt": disk__lt, "disk__lte": disk__lte, "disk__n": disk__n, "format": format, "has_primary_ip": has_primary_ip, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "interface_count": interface_count, "interface_count__empty": interface_count__empty, "interface_count__gt": interface_count__gt, "interface_count__gte": interface_count__gte, "interface_count__lt": interface_count__lt, "interface_count__lte": interface_count__lte, "interface_count__n": interface_count__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "local_context_data": local_context_data, "mac_address": mac_address, "mac_address__ic": mac_address__ic, "mac_address__ie": mac_address__ie, "mac_address__iew": mac_address__iew, "mac_address__iregex": mac_address__iregex, "mac_address__isw": mac_address__isw, "mac_address__n": mac_address__n, "mac_address__nic": mac_address__nic, "mac_address__nie": mac_address__nie, "mac_address__niew": mac_address__niew, "mac_address__nisw": mac_address__nisw, "mac_address__regex": mac_address__regex, "memory": memory, "memory__empty": memory__empty, "memory__gt": memory__gt, "memory__gte": memory__gte, "memory__lt": memory__lt, "memory__lte": memory__lte, "memory__n": memory__n, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "platform": platform, "platform__n": platform__n, "platform_id": platform_id, "platform_id__n": platform_id__n, "primary_ip4": primary_ip4, "primary_ip4__n": primary_ip4__n, "primary_ip4_id": primary_ip4_id, "primary_ip4_id__n": primary_ip4_id__n, "primary_ip6": primary_ip6, "primary_ip6__n": primary_ip6__n, "primary_ip6_id": primary_ip6_id, "primary_ip6_id__n": primary_ip6_id__n, "q": q, "region": region, "region__n": region__n, "region_id": region_id, "region_id__n": region_id__n, "role": role, "role__n": role__n, "role_id": role_id, "role_id__n": role_id__n, "serial": serial, "serial__empty": serial__empty, "serial__ic": serial__ic, "serial__ie": serial__ie, "serial__iew": serial__iew, "serial__iregex": serial__iregex, "serial__isw": serial__isw, "serial__n": serial__n, "serial__nic": serial__nic, "serial__nie": serial__nie, "serial__niew": serial__niew, "serial__nisw": serial__nisw, "serial__regex": serial__regex, "site": site, "site__n": site__n, "site_group": site_group, "site_group__n": site_group__n, "site_group_id": site_group_id, "site_group_id__n": site_group_id__n, "site_id": site_id, "site_id__n": site_id__n, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "updated_by_request": updated_by_request, "vcpus": vcpus, "vcpus__empty": vcpus__empty, "vcpus__gt": vcpus__gt, "vcpus__gte": vcpus__gte, "vcpus__lt": vcpus__lt, "vcpus__lte": vcpus__lte, "vcpus__n": vcpus__n, "virtual_disk_count": virtual_disk_count, "virtual_disk_count__empty": virtual_disk_count__empty, "virtual_disk_count__gt": virtual_disk_count__gt, "virtual_disk_count__gte": virtual_disk_count__gte, "virtual_disk_count__lt": virtual_disk_count__lt, "virtual_disk_count__lte": virtual_disk_count__lte, "virtual_disk_count__n": virtual_disk_count__n}) });
}

function virtualization_virtual_machines_destroy(cluster, cluster__n, cluster_group, cluster_group__n, cluster_group_id, cluster_group_id__n, cluster_id, cluster_id__n, cluster_type, cluster_type__n, cluster_type_id, cluster_type_id__n, comments, config_template, config_template_id, config_template_id__n, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, disk, disk__empty, disk__gt, disk__gte, disk__lt, disk__lte, disk__n, format, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_count, interface_count__empty, interface_count__gt, interface_count__gte, interface_count__lt, interface_count__lte, interface_count__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, local_context_data, mac_address, mac_address__ic, mac_address__ie, mac_address__iew, mac_address__iregex, mac_address__isw, mac_address__n, mac_address__nic, mac_address__nie, mac_address__niew, mac_address__nisw, mac_address__regex, memory, memory__empty, memory__gt, memory__gte, memory__lt, memory__lte, memory__n, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, platform, platform__n, platform_id, platform_id__n, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, region, region__n, region_id, region_id__n, role, role__n, role_id, role_id__n, serial, serial__empty, serial__ic, serial__ie, serial__iew, serial__iregex, serial__isw, serial__n, serial__nic, serial__nie, serial__niew, serial__nisw, serial__regex, site, site__n, site_group, site_group__n, site_group_id, site_group_id__n, site_id, site_id__n, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request, vcpus, vcpus__empty, vcpus__gt, vcpus__gte, vcpus__lt, vcpus__lte, vcpus__n, virtual_disk_count, virtual_disk_count__empty, virtual_disk_count__gt, virtual_disk_count__gte, virtual_disk_count__lt, virtual_disk_count__lte, virtual_disk_count__n) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "delete Virtualization";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function virtualization_virtual_machines_retrieve(cluster, cluster__n, cluster_group, cluster_group__n, cluster_group_id, cluster_group_id__n, cluster_id, cluster_id__n, cluster_type, cluster_type__n, cluster_type_id, cluster_type_id__n, comments, config_template, config_template_id, config_template_id__n, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, disk, disk__empty, disk__gt, disk__gte, disk__lt, disk__lte, disk__n, format, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_count, interface_count__empty, interface_count__gt, interface_count__gte, interface_count__lt, interface_count__lte, interface_count__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, local_context_data, mac_address, mac_address__ic, mac_address__ie, mac_address__iew, mac_address__iregex, mac_address__isw, mac_address__n, mac_address__nic, mac_address__nie, mac_address__niew, mac_address__nisw, mac_address__regex, memory, memory__empty, memory__gt, memory__gte, memory__lt, memory__lte, memory__n, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, platform, platform__n, platform_id, platform_id__n, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, region, region__n, region_id, region_id__n, role, role__n, role_id, role_id__n, serial, serial__empty, serial__ic, serial__ie, serial__iew, serial__iregex, serial__isw, serial__n, serial__nic, serial__nie, serial__niew, serial__nisw, serial__regex, site, site__n, site_group, site_group__n, site_group_id, site_group_id__n, site_id, site_id__n, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request, vcpus, vcpus__empty, vcpus__gt, vcpus__gte, vcpus__lt, vcpus__lte, vcpus__n, virtual_disk_count, virtual_disk_count__empty, virtual_disk_count__gt, virtual_disk_count__gte, virtual_disk_count__lt, virtual_disk_count__lte, virtual_disk_count__n) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "get Virtualization";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingVirtualization(cluster, cluster__n, cluster_group, cluster_group__n, cluster_group_id, cluster_group_id__n, cluster_id, cluster_id__n, cluster_type, cluster_type__n, cluster_type_id, cluster_type_id__n, comments, config_template, config_template_id, config_template_id__n, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, disk, disk__empty, disk__gt, disk__gte, disk__lt, disk__lte, disk__n, format, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_count, interface_count__empty, interface_count__gt, interface_count__gte, interface_count__lt, interface_count__lte, interface_count__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, local_context_data, mac_address, mac_address__ic, mac_address__ie, mac_address__iew, mac_address__iregex, mac_address__isw, mac_address__n, mac_address__nic, mac_address__nie, mac_address__niew, mac_address__nisw, mac_address__regex, memory, memory__empty, memory__gt, memory__gte, memory__lt, memory__lte, memory__n, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, platform, platform__n, platform_id, platform_id__n, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, region, region__n, region_id, region_id__n, role, role__n, role_id, role_id__n, serial, serial__empty, serial__ic, serial__ie, serial__iew, serial__iregex, serial__isw, serial__n, serial__nic, serial__nie, serial__niew, serial__nisw, serial__regex, site, site__n, site_group, site_group__n, site_group_id, site_group_id__n, site_id, site_id__n, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request, vcpus, vcpus__empty, vcpus__gt, vcpus__gte, vcpus__lt, vcpus__lte, vcpus__n, virtual_disk_count, virtual_disk_count__empty, virtual_disk_count__gt, virtual_disk_count__gte, virtual_disk_count__lt, virtual_disk_count__lte, virtual_disk_count__n) {
  var url = "/api/virtualization/virtual-machines/" + id + "/render-config/";
  var description = "Try Add Existing Virtualization";
  var body = {
    "name": String(name),
    "status": String(status),
    "site": String(site),
    "cluster": String(cluster),
    "device": String(device),
    "serial": String(serial),
    "role": String(role),
    "tenant": String(tenant),
    "platform": String(platform),
    "primary_ip4": String(primary_ip4),
    "primary_ip6": String(primary_ip6),
    "vcpus": String(vcpus),
    "memory": String(memory),
    "disk": String(disk),
    "description": String(description),
    "comments": String(comments),
    "config_template": String(config_template),
    "local_context_data": String(local_context_data),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVirtualizationExists(cluster, cluster__n, cluster_group, cluster_group__n, cluster_group_id, cluster_group_id__n, cluster_id, cluster_id__n, cluster_type, cluster_type__n, cluster_type_id, cluster_type_id__n, comments, config_template, config_template_id, config_template_id__n, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, disk, disk__empty, disk__gt, disk__gte, disk__lt, disk__lte, disk__n, format, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_count, interface_count__empty, interface_count__gt, interface_count__gte, interface_count__lt, interface_count__lte, interface_count__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, local_context_data, mac_address, mac_address__ic, mac_address__ie, mac_address__iew, mac_address__iregex, mac_address__isw, mac_address__n, mac_address__nic, mac_address__nie, mac_address__niew, mac_address__nisw, mac_address__regex, memory, memory__empty, memory__gt, memory__gte, memory__lt, memory__lte, memory__n, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, platform, platform__n, platform_id, platform_id__n, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, region, region__n, region_id, region_id__n, role, role__n, role_id, role_id__n, serial, serial__empty, serial__ic, serial__ie, serial__iew, serial__iregex, serial__isw, serial__n, serial__nic, serial__nie, serial__niew, serial__nisw, serial__regex, site, site__n, site_group, site_group__n, site_group_id, site_group_id__n, site_id, site_id__n, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request, vcpus, vcpus__empty, vcpus__gt, vcpus__gte, vcpus__lt, vcpus__lte, vcpus__n, virtual_disk_count, virtual_disk_count__empty, virtual_disk_count__gt, virtual_disk_count__gte, virtual_disk_count__lt, virtual_disk_count__lte, virtual_disk_count__n) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Virtualization exists" } });
  pvg.success("Virtualization found");
}

function verifyVirtualizationDoesNotExist(cluster, cluster__n, cluster_group, cluster_group__n, cluster_group_id, cluster_group_id__n, cluster_id, cluster_id__n, cluster_type, cluster_type__n, cluster_type_id, cluster_type_id__n, comments, config_template, config_template_id, config_template_id__n, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, disk, disk__empty, disk__gt, disk__gte, disk__lt, disk__lte, disk__n, format, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_count, interface_count__empty, interface_count__gt, interface_count__gte, interface_count__lt, interface_count__lte, interface_count__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, local_context_data, mac_address, mac_address__ic, mac_address__ie, mac_address__iew, mac_address__iregex, mac_address__isw, mac_address__n, mac_address__nic, mac_address__nie, mac_address__niew, mac_address__nisw, mac_address__regex, memory, memory__empty, memory__gt, memory__gte, memory__lt, memory__lte, memory__n, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, platform, platform__n, platform_id, platform_id__n, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, region, region__n, region_id, region_id__n, role, role__n, role_id, role_id__n, serial, serial__empty, serial__ic, serial__ie, serial__iew, serial__iregex, serial__isw, serial__n, serial__nic, serial__nie, serial__niew, serial__nisw, serial__regex, site, site__n, site_group, site_group__n, site_group_id, site_group_id__n, site_id, site_id__n, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request, vcpus, vcpus__empty, vcpus__gt, vcpus__gte, vcpus__lt, vcpus__lte, vcpus__n, virtual_disk_count, virtual_disk_count__empty, virtual_disk_count__gt, virtual_disk_count__gte, virtual_disk_count__lt, virtual_disk_count__lte, virtual_disk_count__n) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Virtualization does not exist" } });
  pvg.success("Virtualization not found");
}

function tryToDeleteANonExistingVirtualization(cluster, cluster__n, cluster_group, cluster_group__n, cluster_group_id, cluster_group_id__n, cluster_id, cluster_id__n, cluster_type, cluster_type__n, cluster_type_id, cluster_type_id__n, comments, config_template, config_template_id, config_template_id__n, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, disk, disk__empty, disk__gt, disk__gte, disk__lt, disk__lte, disk__n, format, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_count, interface_count__empty, interface_count__gt, interface_count__gte, interface_count__lt, interface_count__lte, interface_count__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, local_context_data, mac_address, mac_address__ic, mac_address__ie, mac_address__iew, mac_address__iregex, mac_address__isw, mac_address__n, mac_address__nic, mac_address__nie, mac_address__niew, mac_address__nisw, mac_address__regex, memory, memory__empty, memory__gt, memory__gte, memory__lt, memory__lte, memory__n, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, platform, platform__n, platform_id, platform_id__n, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, region, region__n, region_id, region_id__n, role, role__n, role_id, role_id__n, serial, serial__empty, serial__ic, serial__ie, serial__iew, serial__iregex, serial__isw, serial__n, serial__nic, serial__nie, serial__niew, serial__nisw, serial__regex, site, site__n, site_group, site_group__n, site_group_id, site_group_id__n, site_id, site_id__n, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request, vcpus, vcpus__empty, vcpus__gt, vcpus__gte, vcpus__lt, vcpus__lte, vcpus__n, virtual_disk_count, virtual_disk_count__empty, virtual_disk_count__gt, virtual_disk_count__gte, virtual_disk_count__lt, virtual_disk_count__lte, virtual_disk_count__n) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "Verify negative delete for Virtualization";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVirtualizationAdded(cluster, cluster__n, cluster_group, cluster_group__n, cluster_group_id, cluster_group_id__n, cluster_id, cluster_id__n, cluster_type, cluster_type__n, cluster_type_id, cluster_type_id__n, comments, config_template, config_template_id, config_template_id__n, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, device, device__n, device_id, device_id__n, disk, disk__empty, disk__gt, disk__gte, disk__lt, disk__lte, disk__n, format, has_primary_ip, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_count, interface_count__empty, interface_count__gt, interface_count__gte, interface_count__lt, interface_count__lte, interface_count__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, local_context_data, mac_address, mac_address__ic, mac_address__ie, mac_address__iew, mac_address__iregex, mac_address__isw, mac_address__n, mac_address__nic, mac_address__nie, mac_address__niew, mac_address__nisw, mac_address__regex, memory, memory__empty, memory__gt, memory__gte, memory__lt, memory__lte, memory__n, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, platform, platform__n, platform_id, platform_id__n, primary_ip4, primary_ip4__n, primary_ip4_id, primary_ip4_id__n, primary_ip6, primary_ip6__n, primary_ip6_id, primary_ip6_id__n, q, region, region__n, region_id, region_id__n, role, role__n, role_id, role_id__n, serial, serial__empty, serial__ic, serial__ie, serial__iew, serial__iregex, serial__isw, serial__n, serial__nic, serial__nie, serial__niew, serial__nisw, serial__regex, site, site__n, site_group, site_group__n, site_group_id, site_group_id__n, site_id, site_id__n, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request, vcpus, vcpus__empty, vcpus__gt, vcpus__gte, vcpus__lt, vcpus__lte, vcpus__n, virtual_disk_count, virtual_disk_count__empty, virtual_disk_count__gt, virtual_disk_count__gte, virtual_disk_count__lt, virtual_disk_count__lte, virtual_disk_count__n) {
  waitFor(matchSuccess("add Virtualization"));
}

function waitForAnyVirtualizationAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Virtualization Added", function(e) {
      return e.name.startsWith("Done: add Virtualization");
  }) });
}

function vpn_tunnels_list(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, encapsulation, encapsulation__empty, encapsulation__ic, encapsulation__ie, encapsulation__iew, encapsulation__iregex, encapsulation__isw, encapsulation__n, encapsulation__nic, encapsulation__nie, encapsulation__niew, encapsulation__nisw, encapsulation__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ipsec_profile, ipsec_profile__n, ipsec_profile_id, ipsec_profile_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, tunnel_id, tunnel_id__empty, tunnel_id__gt, tunnel_id__gte, tunnel_id__lt, tunnel_id__lte, tunnel_id__n, updated_by_request) {
  var url = "/api/vpn/tunnels/";
  var description = "list Vpn";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function vpn_tunnels_create(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, encapsulation, encapsulation__empty, encapsulation__ic, encapsulation__ie, encapsulation__iew, encapsulation__iregex, encapsulation__isw, encapsulation__n, encapsulation__nic, encapsulation__nie, encapsulation__niew, encapsulation__nisw, encapsulation__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ipsec_profile, ipsec_profile__n, ipsec_profile_id, ipsec_profile_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, tunnel_id, tunnel_id__empty, tunnel_id__gt, tunnel_id__gte, tunnel_id__lt, tunnel_id__lte, tunnel_id__n, updated_by_request) {
  var url = "/api/vpn/tunnels/";
  var description = "add Vpn";
  var body = {
    "name": String(name),
    "status": String(status),
    "group": String(group),
    "encapsulation": String(encapsulation),
    "ipsec_profile": String(ipsec_profile),
    "tenant": String(tenant),
    "tunnel_id": String(tunnel_id),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"comments": comments, "contact": contact, "contact__n": contact__n, "contact_group": contact_group, "contact_group__n": contact_group__n, "contact_role": contact_role, "contact_role__n": contact_role__n, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "encapsulation": encapsulation, "encapsulation__empty": encapsulation__empty, "encapsulation__ic": encapsulation__ic, "encapsulation__ie": encapsulation__ie, "encapsulation__iew": encapsulation__iew, "encapsulation__iregex": encapsulation__iregex, "encapsulation__isw": encapsulation__isw, "encapsulation__n": encapsulation__n, "encapsulation__nic": encapsulation__nic, "encapsulation__nie": encapsulation__nie, "encapsulation__niew": encapsulation__niew, "encapsulation__nisw": encapsulation__nisw, "encapsulation__regex": encapsulation__regex, "group": group, "group__n": group__n, "group_id": group_id, "group_id__n": group_id__n, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "ipsec_profile": ipsec_profile, "ipsec_profile__n": ipsec_profile__n, "ipsec_profile_id": ipsec_profile_id, "ipsec_profile_id__n": ipsec_profile_id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "q": q, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "tunnel_id": tunnel_id, "tunnel_id__empty": tunnel_id__empty, "tunnel_id__gt": tunnel_id__gt, "tunnel_id__gte": tunnel_id__gte, "tunnel_id__lt": tunnel_id__lt, "tunnel_id__lte": tunnel_id__lte, "tunnel_id__n": tunnel_id__n, "updated_by_request": updated_by_request}) });
}

function vpn_tunnels_update(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, encapsulation, encapsulation__empty, encapsulation__ic, encapsulation__ie, encapsulation__iew, encapsulation__iregex, encapsulation__isw, encapsulation__n, encapsulation__nic, encapsulation__nie, encapsulation__niew, encapsulation__nisw, encapsulation__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ipsec_profile, ipsec_profile__n, ipsec_profile_id, ipsec_profile_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, tunnel_id, tunnel_id__empty, tunnel_id__gt, tunnel_id__gte, tunnel_id__lt, tunnel_id__lte, tunnel_id__n, updated_by_request) {
  var url = "/api/vpn/tunnels/" + id + "/";
  var description = "update Vpn";
  var body = {
    "name": String(name),
    "status": String(status),
    "group": String(group),
    "encapsulation": String(encapsulation),
    "ipsec_profile": String(ipsec_profile),
    "tenant": String(tenant),
    "tunnel_id": String(tunnel_id),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"comments": comments, "contact": contact, "contact__n": contact__n, "contact_group": contact_group, "contact_group__n": contact_group__n, "contact_role": contact_role, "contact_role__n": contact_role__n, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "encapsulation": encapsulation, "encapsulation__empty": encapsulation__empty, "encapsulation__ic": encapsulation__ic, "encapsulation__ie": encapsulation__ie, "encapsulation__iew": encapsulation__iew, "encapsulation__iregex": encapsulation__iregex, "encapsulation__isw": encapsulation__isw, "encapsulation__n": encapsulation__n, "encapsulation__nic": encapsulation__nic, "encapsulation__nie": encapsulation__nie, "encapsulation__niew": encapsulation__niew, "encapsulation__nisw": encapsulation__nisw, "encapsulation__regex": encapsulation__regex, "group": group, "group__n": group__n, "group_id": group_id, "group_id__n": group_id__n, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "ipsec_profile": ipsec_profile, "ipsec_profile__n": ipsec_profile__n, "ipsec_profile_id": ipsec_profile_id, "ipsec_profile_id__n": ipsec_profile_id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "q": q, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "tunnel_id": tunnel_id, "tunnel_id__empty": tunnel_id__empty, "tunnel_id__gt": tunnel_id__gt, "tunnel_id__gte": tunnel_id__gte, "tunnel_id__lt": tunnel_id__lt, "tunnel_id__lte": tunnel_id__lte, "tunnel_id__n": tunnel_id__n, "updated_by_request": updated_by_request}) });
}

function vpn_tunnels_partial_update(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, encapsulation, encapsulation__empty, encapsulation__ic, encapsulation__ie, encapsulation__iew, encapsulation__iregex, encapsulation__isw, encapsulation__n, encapsulation__nic, encapsulation__nie, encapsulation__niew, encapsulation__nisw, encapsulation__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ipsec_profile, ipsec_profile__n, ipsec_profile_id, ipsec_profile_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, tunnel_id, tunnel_id__empty, tunnel_id__gt, tunnel_id__gte, tunnel_id__lt, tunnel_id__lte, tunnel_id__n, updated_by_request) {
  var url = "/api/vpn/tunnels/" + id + "/";
  var description = "patch Vpn";
  var body = {
    "name": String(name),
    "status": String(status),
    "group": String(group),
    "encapsulation": String(encapsulation),
    "ipsec_profile": String(ipsec_profile),
    "tenant": String(tenant),
    "tunnel_id": String(tunnel_id),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"comments": comments, "contact": contact, "contact__n": contact__n, "contact_group": contact_group, "contact_group__n": contact_group__n, "contact_role": contact_role, "contact_role__n": contact_role__n, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "encapsulation": encapsulation, "encapsulation__empty": encapsulation__empty, "encapsulation__ic": encapsulation__ic, "encapsulation__ie": encapsulation__ie, "encapsulation__iew": encapsulation__iew, "encapsulation__iregex": encapsulation__iregex, "encapsulation__isw": encapsulation__isw, "encapsulation__n": encapsulation__n, "encapsulation__nic": encapsulation__nic, "encapsulation__nie": encapsulation__nie, "encapsulation__niew": encapsulation__niew, "encapsulation__nisw": encapsulation__nisw, "encapsulation__regex": encapsulation__regex, "group": group, "group__n": group__n, "group_id": group_id, "group_id__n": group_id__n, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "ipsec_profile": ipsec_profile, "ipsec_profile__n": ipsec_profile__n, "ipsec_profile_id": ipsec_profile_id, "ipsec_profile_id__n": ipsec_profile_id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "name": name, "name__empty": name__empty, "name__ic": name__ic, "name__ie": name__ie, "name__iew": name__iew, "name__iregex": name__iregex, "name__isw": name__isw, "name__n": name__n, "name__nic": name__nic, "name__nie": name__nie, "name__niew": name__niew, "name__nisw": name__nisw, "name__regex": name__regex, "offset": offset, "ordering": ordering, "q": q, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "tunnel_id": tunnel_id, "tunnel_id__empty": tunnel_id__empty, "tunnel_id__gt": tunnel_id__gt, "tunnel_id__gte": tunnel_id__gte, "tunnel_id__lt": tunnel_id__lt, "tunnel_id__lte": tunnel_id__lte, "tunnel_id__n": tunnel_id__n, "updated_by_request": updated_by_request}) });
}

function vpn_tunnels_destroy(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, encapsulation, encapsulation__empty, encapsulation__ic, encapsulation__ie, encapsulation__iew, encapsulation__iregex, encapsulation__isw, encapsulation__n, encapsulation__nic, encapsulation__nie, encapsulation__niew, encapsulation__nisw, encapsulation__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ipsec_profile, ipsec_profile__n, ipsec_profile_id, ipsec_profile_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, tunnel_id, tunnel_id__empty, tunnel_id__gt, tunnel_id__gte, tunnel_id__lt, tunnel_id__lte, tunnel_id__n, updated_by_request) {
  var url = "/api/vpn/tunnels/" + id + "/";
  var description = "delete Vpn";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function vpn_tunnels_retrieve(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, encapsulation, encapsulation__empty, encapsulation__ic, encapsulation__ie, encapsulation__iew, encapsulation__iregex, encapsulation__isw, encapsulation__n, encapsulation__nic, encapsulation__nie, encapsulation__niew, encapsulation__nisw, encapsulation__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ipsec_profile, ipsec_profile__n, ipsec_profile_id, ipsec_profile_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, tunnel_id, tunnel_id__empty, tunnel_id__gt, tunnel_id__gte, tunnel_id__lt, tunnel_id__lte, tunnel_id__n, updated_by_request) {
  var url = "/api/vpn/tunnels/" + id + "/";
  var description = "get Vpn";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingVpn(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, encapsulation, encapsulation__empty, encapsulation__ic, encapsulation__ie, encapsulation__iew, encapsulation__iregex, encapsulation__isw, encapsulation__n, encapsulation__nic, encapsulation__nie, encapsulation__niew, encapsulation__nisw, encapsulation__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ipsec_profile, ipsec_profile__n, ipsec_profile_id, ipsec_profile_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, tunnel_id, tunnel_id__empty, tunnel_id__gt, tunnel_id__gte, tunnel_id__lt, tunnel_id__lte, tunnel_id__n, updated_by_request) {
  var url = "/api/vpn/tunnels/";
  var description = "Try Add Existing Vpn";
  var body = {
    "name": String(name),
    "status": String(status),
    "group": String(group),
    "encapsulation": String(encapsulation),
    "ipsec_profile": String(ipsec_profile),
    "tenant": String(tenant),
    "tunnel_id": String(tunnel_id),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVpnExists(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, encapsulation, encapsulation__empty, encapsulation__ic, encapsulation__ie, encapsulation__iew, encapsulation__iregex, encapsulation__isw, encapsulation__n, encapsulation__nic, encapsulation__nie, encapsulation__niew, encapsulation__nisw, encapsulation__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ipsec_profile, ipsec_profile__n, ipsec_profile_id, ipsec_profile_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, tunnel_id, tunnel_id__empty, tunnel_id__gt, tunnel_id__gte, tunnel_id__lt, tunnel_id__lte, tunnel_id__n, updated_by_request) {
  var url = "/api/vpn/tunnels/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Vpn exists" } });
  pvg.success("Vpn found");
}

function verifyVpnDoesNotExist(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, encapsulation, encapsulation__empty, encapsulation__ic, encapsulation__ie, encapsulation__iew, encapsulation__iregex, encapsulation__isw, encapsulation__n, encapsulation__nic, encapsulation__nie, encapsulation__niew, encapsulation__nisw, encapsulation__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ipsec_profile, ipsec_profile__n, ipsec_profile_id, ipsec_profile_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, tunnel_id, tunnel_id__empty, tunnel_id__gt, tunnel_id__gte, tunnel_id__lt, tunnel_id__lte, tunnel_id__n, updated_by_request) {
  var url = "/api/vpn/tunnels/" + id + "/";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Vpn does not exist" } });
  pvg.success("Vpn not found");
}

function tryToDeleteANonExistingVpn(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, encapsulation, encapsulation__empty, encapsulation__ic, encapsulation__ie, encapsulation__iew, encapsulation__iregex, encapsulation__isw, encapsulation__n, encapsulation__nic, encapsulation__nie, encapsulation__niew, encapsulation__nisw, encapsulation__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ipsec_profile, ipsec_profile__n, ipsec_profile_id, ipsec_profile_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, tunnel_id, tunnel_id__empty, tunnel_id__gt, tunnel_id__gte, tunnel_id__lt, tunnel_id__lte, tunnel_id__n, updated_by_request) {
  var url = "/api/vpn/tunnels/" + id + "/";
  var description = "Verify negative delete for Vpn";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVpnAdded(comments, contact, contact__n, contact_group, contact_group__n, contact_role, contact_role__n, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, encapsulation, encapsulation__empty, encapsulation__ic, encapsulation__ie, encapsulation__iew, encapsulation__iregex, encapsulation__isw, encapsulation__n, encapsulation__nic, encapsulation__nie, encapsulation__niew, encapsulation__nisw, encapsulation__regex, group, group__n, group_id, group_id__n, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, ipsec_profile, ipsec_profile__n, ipsec_profile_id, ipsec_profile_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, name, name__empty, name__ic, name__ie, name__iew, name__iregex, name__isw, name__n, name__nic, name__nie, name__niew, name__nisw, name__regex, offset, ordering, q, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, tunnel_id, tunnel_id__empty, tunnel_id__gt, tunnel_id__gte, tunnel_id__lt, tunnel_id__lte, tunnel_id__n, updated_by_request) {
  waitFor(matchSuccess("add Vpn"));
}

function waitForAnyVpnAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Vpn Added", function(e) {
      return e.name.startsWith("Done: add Vpn");
  }) });
}

function wireless_wireless_links_list(auth_cipher, auth_cipher__empty, auth_cipher__ic, auth_cipher__ie, auth_cipher__iew, auth_cipher__iregex, auth_cipher__isw, auth_cipher__n, auth_cipher__nic, auth_cipher__nie, auth_cipher__niew, auth_cipher__nisw, auth_cipher__regex, auth_psk, auth_psk__empty, auth_psk__ic, auth_psk__ie, auth_psk__iew, auth_psk__iregex, auth_psk__isw, auth_psk__n, auth_psk__nic, auth_psk__nie, auth_psk__niew, auth_psk__nisw, auth_psk__regex, auth_type, auth_type__empty, auth_type__ic, auth_type__ie, auth_type__iew, auth_type__iregex, auth_type__isw, auth_type__n, auth_type__nic, auth_type__nie, auth_type__niew, auth_type__nisw, auth_type__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, distance, distance__empty, distance__gt, distance__gte, distance__lt, distance__lte, distance__n, distance_unit, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_a, interface_a_id, interface_a_id__n, interface_b, interface_b_id, interface_b_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, q, ssid, ssid__empty, ssid__ic, ssid__ie, ssid__iew, ssid__iregex, ssid__isw, ssid__n, ssid__nic, ssid__nie, ssid__niew, ssid__nisw, ssid__regex, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/wireless/wireless-links/";
  var description = "list Wireless";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function wireless_wireless_links_create(auth_cipher, auth_cipher__empty, auth_cipher__ic, auth_cipher__ie, auth_cipher__iew, auth_cipher__iregex, auth_cipher__isw, auth_cipher__n, auth_cipher__nic, auth_cipher__nie, auth_cipher__niew, auth_cipher__nisw, auth_cipher__regex, auth_psk, auth_psk__empty, auth_psk__ic, auth_psk__ie, auth_psk__iew, auth_psk__iregex, auth_psk__isw, auth_psk__n, auth_psk__nic, auth_psk__nie, auth_psk__niew, auth_psk__nisw, auth_psk__regex, auth_type, auth_type__empty, auth_type__ic, auth_type__ie, auth_type__iew, auth_type__iregex, auth_type__isw, auth_type__n, auth_type__nic, auth_type__nie, auth_type__niew, auth_type__nisw, auth_type__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, distance, distance__empty, distance__gt, distance__gte, distance__lt, distance__lte, distance__n, distance_unit, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_a, interface_a_id, interface_a_id__n, interface_b, interface_b_id, interface_b_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, q, ssid, ssid__empty, ssid__ic, ssid__ie, ssid__iew, ssid__iregex, ssid__isw, ssid__n, ssid__nic, ssid__nie, ssid__niew, ssid__nisw, ssid__regex, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/wireless/wireless-links/";
  var description = "add Wireless";
  var body = {
    "interface_a": String(interface_a),
    "interface_b": String(interface_b),
    "ssid": String(ssid),
    "status": String(status),
    "tenant": String(tenant),
    "auth_type": String(auth_type),
    "auth_cipher": String(auth_cipher),
    "auth_psk": String(auth_psk),
    "distance": String(distance),
    "distance_unit": String(distance_unit),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"auth_cipher": auth_cipher, "auth_cipher__empty": auth_cipher__empty, "auth_cipher__ic": auth_cipher__ic, "auth_cipher__ie": auth_cipher__ie, "auth_cipher__iew": auth_cipher__iew, "auth_cipher__iregex": auth_cipher__iregex, "auth_cipher__isw": auth_cipher__isw, "auth_cipher__n": auth_cipher__n, "auth_cipher__nic": auth_cipher__nic, "auth_cipher__nie": auth_cipher__nie, "auth_cipher__niew": auth_cipher__niew, "auth_cipher__nisw": auth_cipher__nisw, "auth_cipher__regex": auth_cipher__regex, "auth_psk": auth_psk, "auth_psk__empty": auth_psk__empty, "auth_psk__ic": auth_psk__ic, "auth_psk__ie": auth_psk__ie, "auth_psk__iew": auth_psk__iew, "auth_psk__iregex": auth_psk__iregex, "auth_psk__isw": auth_psk__isw, "auth_psk__n": auth_psk__n, "auth_psk__nic": auth_psk__nic, "auth_psk__nie": auth_psk__nie, "auth_psk__niew": auth_psk__niew, "auth_psk__nisw": auth_psk__nisw, "auth_psk__regex": auth_psk__regex, "auth_type": auth_type, "auth_type__empty": auth_type__empty, "auth_type__ic": auth_type__ic, "auth_type__ie": auth_type__ie, "auth_type__iew": auth_type__iew, "auth_type__iregex": auth_type__iregex, "auth_type__isw": auth_type__isw, "auth_type__n": auth_type__n, "auth_type__nic": auth_type__nic, "auth_type__nie": auth_type__nie, "auth_type__niew": auth_type__niew, "auth_type__nisw": auth_type__nisw, "auth_type__regex": auth_type__regex, "comments": comments, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "distance": distance, "distance__empty": distance__empty, "distance__gt": distance__gt, "distance__gte": distance__gte, "distance__lt": distance__lt, "distance__lte": distance__lte, "distance__n": distance__n, "distance_unit": distance_unit, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "interface_a": interface_a, "interface_a_id": interface_a_id, "interface_a_id__n": interface_a_id__n, "interface_b": interface_b, "interface_b_id": interface_b_id, "interface_b_id__n": interface_b_id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "offset": offset, "ordering": ordering, "q": q, "ssid": ssid, "ssid__empty": ssid__empty, "ssid__ic": ssid__ic, "ssid__ie": ssid__ie, "ssid__iew": ssid__iew, "ssid__iregex": ssid__iregex, "ssid__isw": ssid__isw, "ssid__n": ssid__n, "ssid__nic": ssid__nic, "ssid__nie": ssid__nie, "ssid__niew": ssid__niew, "ssid__nisw": ssid__nisw, "ssid__regex": ssid__regex, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "updated_by_request": updated_by_request}) });
}

function wireless_wireless_links_update(auth_cipher, auth_cipher__empty, auth_cipher__ic, auth_cipher__ie, auth_cipher__iew, auth_cipher__iregex, auth_cipher__isw, auth_cipher__n, auth_cipher__nic, auth_cipher__nie, auth_cipher__niew, auth_cipher__nisw, auth_cipher__regex, auth_psk, auth_psk__empty, auth_psk__ic, auth_psk__ie, auth_psk__iew, auth_psk__iregex, auth_psk__isw, auth_psk__n, auth_psk__nic, auth_psk__nie, auth_psk__niew, auth_psk__nisw, auth_psk__regex, auth_type, auth_type__empty, auth_type__ic, auth_type__ie, auth_type__iew, auth_type__iregex, auth_type__isw, auth_type__n, auth_type__nic, auth_type__nie, auth_type__niew, auth_type__nisw, auth_type__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, distance, distance__empty, distance__gt, distance__gte, distance__lt, distance__lte, distance__n, distance_unit, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_a, interface_a_id, interface_a_id__n, interface_b, interface_b_id, interface_b_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, q, ssid, ssid__empty, ssid__ic, ssid__ie, ssid__iew, ssid__iregex, ssid__isw, ssid__n, ssid__nic, ssid__nie, ssid__niew, ssid__nisw, ssid__regex, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  var description = "update Wireless";
  var body = {
    "interface_a": String(interface_a),
    "interface_b": String(interface_b),
    "ssid": String(ssid),
    "status": String(status),
    "tenant": String(tenant),
    "auth_type": String(auth_type),
    "auth_cipher": String(auth_cipher),
    "auth_psk": String(auth_psk),
    "distance": String(distance),
    "distance_unit": String(distance_unit),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"auth_cipher": auth_cipher, "auth_cipher__empty": auth_cipher__empty, "auth_cipher__ic": auth_cipher__ic, "auth_cipher__ie": auth_cipher__ie, "auth_cipher__iew": auth_cipher__iew, "auth_cipher__iregex": auth_cipher__iregex, "auth_cipher__isw": auth_cipher__isw, "auth_cipher__n": auth_cipher__n, "auth_cipher__nic": auth_cipher__nic, "auth_cipher__nie": auth_cipher__nie, "auth_cipher__niew": auth_cipher__niew, "auth_cipher__nisw": auth_cipher__nisw, "auth_cipher__regex": auth_cipher__regex, "auth_psk": auth_psk, "auth_psk__empty": auth_psk__empty, "auth_psk__ic": auth_psk__ic, "auth_psk__ie": auth_psk__ie, "auth_psk__iew": auth_psk__iew, "auth_psk__iregex": auth_psk__iregex, "auth_psk__isw": auth_psk__isw, "auth_psk__n": auth_psk__n, "auth_psk__nic": auth_psk__nic, "auth_psk__nie": auth_psk__nie, "auth_psk__niew": auth_psk__niew, "auth_psk__nisw": auth_psk__nisw, "auth_psk__regex": auth_psk__regex, "auth_type": auth_type, "auth_type__empty": auth_type__empty, "auth_type__ic": auth_type__ic, "auth_type__ie": auth_type__ie, "auth_type__iew": auth_type__iew, "auth_type__iregex": auth_type__iregex, "auth_type__isw": auth_type__isw, "auth_type__n": auth_type__n, "auth_type__nic": auth_type__nic, "auth_type__nie": auth_type__nie, "auth_type__niew": auth_type__niew, "auth_type__nisw": auth_type__nisw, "auth_type__regex": auth_type__regex, "comments": comments, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "distance": distance, "distance__empty": distance__empty, "distance__gt": distance__gt, "distance__gte": distance__gte, "distance__lt": distance__lt, "distance__lte": distance__lte, "distance__n": distance__n, "distance_unit": distance_unit, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "interface_a": interface_a, "interface_a_id": interface_a_id, "interface_a_id__n": interface_a_id__n, "interface_b": interface_b, "interface_b_id": interface_b_id, "interface_b_id__n": interface_b_id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "offset": offset, "ordering": ordering, "q": q, "ssid": ssid, "ssid__empty": ssid__empty, "ssid__ic": ssid__ic, "ssid__ie": ssid__ie, "ssid__iew": ssid__iew, "ssid__iregex": ssid__iregex, "ssid__isw": ssid__isw, "ssid__n": ssid__n, "ssid__nic": ssid__nic, "ssid__nie": ssid__nie, "ssid__niew": ssid__niew, "ssid__nisw": ssid__nisw, "ssid__regex": ssid__regex, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "updated_by_request": updated_by_request}) });
}

function wireless_wireless_links_partial_update(auth_cipher, auth_cipher__empty, auth_cipher__ic, auth_cipher__ie, auth_cipher__iew, auth_cipher__iregex, auth_cipher__isw, auth_cipher__n, auth_cipher__nic, auth_cipher__nie, auth_cipher__niew, auth_cipher__nisw, auth_cipher__regex, auth_psk, auth_psk__empty, auth_psk__ic, auth_psk__ie, auth_psk__iew, auth_psk__iregex, auth_psk__isw, auth_psk__n, auth_psk__nic, auth_psk__nie, auth_psk__niew, auth_psk__nisw, auth_psk__regex, auth_type, auth_type__empty, auth_type__ic, auth_type__ie, auth_type__iew, auth_type__iregex, auth_type__isw, auth_type__n, auth_type__nic, auth_type__nie, auth_type__niew, auth_type__nisw, auth_type__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, distance, distance__empty, distance__gt, distance__gte, distance__lt, distance__lte, distance__n, distance_unit, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_a, interface_a_id, interface_a_id__n, interface_b, interface_b_id, interface_b_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, q, ssid, ssid__empty, ssid__ic, ssid__ie, ssid__iew, ssid__iregex, ssid__isw, ssid__n, ssid__nic, ssid__nie, ssid__niew, ssid__nisw, ssid__regex, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  var description = "patch Wireless";
  var body = {
    "interface_a": String(interface_a),
    "interface_b": String(interface_b),
    "ssid": String(ssid),
    "status": String(status),
    "tenant": String(tenant),
    "auth_type": String(auth_type),
    "auth_cipher": String(auth_cipher),
    "auth_psk": String(auth_psk),
    "distance": String(distance),
    "distance_unit": String(distance_unit),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description, {"auth_cipher": auth_cipher, "auth_cipher__empty": auth_cipher__empty, "auth_cipher__ic": auth_cipher__ic, "auth_cipher__ie": auth_cipher__ie, "auth_cipher__iew": auth_cipher__iew, "auth_cipher__iregex": auth_cipher__iregex, "auth_cipher__isw": auth_cipher__isw, "auth_cipher__n": auth_cipher__n, "auth_cipher__nic": auth_cipher__nic, "auth_cipher__nie": auth_cipher__nie, "auth_cipher__niew": auth_cipher__niew, "auth_cipher__nisw": auth_cipher__nisw, "auth_cipher__regex": auth_cipher__regex, "auth_psk": auth_psk, "auth_psk__empty": auth_psk__empty, "auth_psk__ic": auth_psk__ic, "auth_psk__ie": auth_psk__ie, "auth_psk__iew": auth_psk__iew, "auth_psk__iregex": auth_psk__iregex, "auth_psk__isw": auth_psk__isw, "auth_psk__n": auth_psk__n, "auth_psk__nic": auth_psk__nic, "auth_psk__nie": auth_psk__nie, "auth_psk__niew": auth_psk__niew, "auth_psk__nisw": auth_psk__nisw, "auth_psk__regex": auth_psk__regex, "auth_type": auth_type, "auth_type__empty": auth_type__empty, "auth_type__ic": auth_type__ic, "auth_type__ie": auth_type__ie, "auth_type__iew": auth_type__iew, "auth_type__iregex": auth_type__iregex, "auth_type__isw": auth_type__isw, "auth_type__n": auth_type__n, "auth_type__nic": auth_type__nic, "auth_type__nie": auth_type__nie, "auth_type__niew": auth_type__niew, "auth_type__nisw": auth_type__nisw, "auth_type__regex": auth_type__regex, "comments": comments, "created": created, "created__empty": created__empty, "created__gt": created__gt, "created__gte": created__gte, "created__lt": created__lt, "created__lte": created__lte, "created__n": created__n, "created_by_request": created_by_request, "custom_fields": custom_fields, "description": description, "description__empty": description__empty, "description__ic": description__ic, "description__ie": description__ie, "description__iew": description__iew, "description__iregex": description__iregex, "description__isw": description__isw, "description__n": description__n, "description__nic": description__nic, "description__nie": description__nie, "description__niew": description__niew, "description__nisw": description__nisw, "description__regex": description__regex, "distance": distance, "distance__empty": distance__empty, "distance__gt": distance__gt, "distance__gte": distance__gte, "distance__lt": distance__lt, "distance__lte": distance__lte, "distance__n": distance__n, "distance_unit": distance_unit, "id": id, "id__empty": id__empty, "id__gt": id__gt, "id__gte": id__gte, "id__lt": id__lt, "id__lte": id__lte, "id__n": id__n, "interface_a": interface_a, "interface_a_id": interface_a_id, "interface_a_id__n": interface_a_id__n, "interface_b": interface_b, "interface_b_id": interface_b_id, "interface_b_id__n": interface_b_id__n, "last_updated": last_updated, "last_updated__empty": last_updated__empty, "last_updated__gt": last_updated__gt, "last_updated__gte": last_updated__gte, "last_updated__lt": last_updated__lt, "last_updated__lte": last_updated__lte, "last_updated__n": last_updated__n, "limit": limit, "modified_by_request": modified_by_request, "offset": offset, "ordering": ordering, "q": q, "ssid": ssid, "ssid__empty": ssid__empty, "ssid__ic": ssid__ic, "ssid__ie": ssid__ie, "ssid__iew": ssid__iew, "ssid__iregex": ssid__iregex, "ssid__isw": ssid__isw, "ssid__n": ssid__n, "ssid__nic": ssid__nic, "ssid__nie": ssid__nie, "ssid__niew": ssid__niew, "ssid__nisw": ssid__nisw, "ssid__regex": ssid__regex, "status": status, "status__empty": status__empty, "status__ic": status__ic, "status__ie": status__ie, "status__iew": status__iew, "status__iregex": status__iregex, "status__isw": status__isw, "status__n": status__n, "status__nic": status__nic, "status__nie": status__nie, "status__niew": status__niew, "status__nisw": status__nisw, "status__regex": status__regex, "tag": tag, "tag__n": tag__n, "tag_id": tag_id, "tag_id__n": tag_id__n, "tags": tags, "tenant": tenant, "tenant__n": tenant__n, "tenant_group": tenant_group, "tenant_group__n": tenant_group__n, "tenant_group_id": tenant_group_id, "tenant_group_id__n": tenant_group_id__n, "tenant_id": tenant_id, "tenant_id__n": tenant_id__n, "updated_by_request": updated_by_request}) });
}

function wireless_wireless_links_destroy(auth_cipher, auth_cipher__empty, auth_cipher__ic, auth_cipher__ie, auth_cipher__iew, auth_cipher__iregex, auth_cipher__isw, auth_cipher__n, auth_cipher__nic, auth_cipher__nie, auth_cipher__niew, auth_cipher__nisw, auth_cipher__regex, auth_psk, auth_psk__empty, auth_psk__ic, auth_psk__ie, auth_psk__iew, auth_psk__iregex, auth_psk__isw, auth_psk__n, auth_psk__nic, auth_psk__nie, auth_psk__niew, auth_psk__nisw, auth_psk__regex, auth_type, auth_type__empty, auth_type__ic, auth_type__ie, auth_type__iew, auth_type__iregex, auth_type__isw, auth_type__n, auth_type__nic, auth_type__nie, auth_type__niew, auth_type__nisw, auth_type__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, distance, distance__empty, distance__gt, distance__gte, distance__lt, distance__lte, distance__n, distance_unit, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_a, interface_a_id, interface_a_id__n, interface_b, interface_b_id, interface_b_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, q, ssid, ssid__empty, ssid__ic, ssid__ie, ssid__iew, ssid__iregex, ssid__isw, ssid__n, ssid__nic, ssid__nie, ssid__niew, ssid__nisw, ssid__regex, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  var description = "delete Wireless";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function wireless_wireless_links_retrieve(auth_cipher, auth_cipher__empty, auth_cipher__ic, auth_cipher__ie, auth_cipher__iew, auth_cipher__iregex, auth_cipher__isw, auth_cipher__n, auth_cipher__nic, auth_cipher__nie, auth_cipher__niew, auth_cipher__nisw, auth_cipher__regex, auth_psk, auth_psk__empty, auth_psk__ic, auth_psk__ie, auth_psk__iew, auth_psk__iregex, auth_psk__isw, auth_psk__n, auth_psk__nic, auth_psk__nie, auth_psk__niew, auth_psk__nisw, auth_psk__regex, auth_type, auth_type__empty, auth_type__ic, auth_type__ie, auth_type__iew, auth_type__iregex, auth_type__isw, auth_type__n, auth_type__nic, auth_type__nie, auth_type__niew, auth_type__nisw, auth_type__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, distance, distance__empty, distance__gt, distance__gte, distance__lt, distance__lte, distance__n, distance_unit, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_a, interface_a_id, interface_a_id__n, interface_b, interface_b_id, interface_b_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, q, ssid, ssid__empty, ssid__ic, ssid__ie, ssid__iew, ssid__iregex, ssid__isw, ssid__n, ssid__nic, ssid__nie, ssid__niew, ssid__nisw, ssid__regex, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  var description = "get Wireless";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingWireless(auth_cipher, auth_cipher__empty, auth_cipher__ic, auth_cipher__ie, auth_cipher__iew, auth_cipher__iregex, auth_cipher__isw, auth_cipher__n, auth_cipher__nic, auth_cipher__nie, auth_cipher__niew, auth_cipher__nisw, auth_cipher__regex, auth_psk, auth_psk__empty, auth_psk__ic, auth_psk__ie, auth_psk__iew, auth_psk__iregex, auth_psk__isw, auth_psk__n, auth_psk__nic, auth_psk__nie, auth_psk__niew, auth_psk__nisw, auth_psk__regex, auth_type, auth_type__empty, auth_type__ic, auth_type__ie, auth_type__iew, auth_type__iregex, auth_type__isw, auth_type__n, auth_type__nic, auth_type__nie, auth_type__niew, auth_type__nisw, auth_type__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, distance, distance__empty, distance__gt, distance__gte, distance__lt, distance__lte, distance__n, distance_unit, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_a, interface_a_id, interface_a_id__n, interface_b, interface_b_id, interface_b_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, q, ssid, ssid__empty, ssid__ic, ssid__ie, ssid__iew, ssid__iregex, ssid__isw, ssid__n, ssid__nic, ssid__nie, ssid__niew, ssid__nisw, ssid__regex, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/wireless/wireless-links/";
  var description = "Try Add Existing Wireless";
  var body = {
    "interface_a": String(interface_a),
    "interface_b": String(interface_b),
    "ssid": String(ssid),
    "status": String(status),
    "tenant": String(tenant),
    "auth_type": String(auth_type),
    "auth_cipher": String(auth_cipher),
    "auth_psk": String(auth_psk),
    "distance": String(distance),
    "distance_unit": String(distance_unit),
    "description": String(description),
    "comments": String(comments),
    "tags": String(tags),
    "custom_fields": String(custom_fields),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyWirelessExists(auth_cipher, auth_cipher__empty, auth_cipher__ic, auth_cipher__ie, auth_cipher__iew, auth_cipher__iregex, auth_cipher__isw, auth_cipher__n, auth_cipher__nic, auth_cipher__nie, auth_cipher__niew, auth_cipher__nisw, auth_cipher__regex, auth_psk, auth_psk__empty, auth_psk__ic, auth_psk__ie, auth_psk__iew, auth_psk__iregex, auth_psk__isw, auth_psk__n, auth_psk__nic, auth_psk__nie, auth_psk__niew, auth_psk__nisw, auth_psk__regex, auth_type, auth_type__empty, auth_type__ic, auth_type__ie, auth_type__iew, auth_type__iregex, auth_type__isw, auth_type__n, auth_type__nic, auth_type__nie, auth_type__niew, auth_type__nisw, auth_type__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, distance, distance__empty, distance__gt, distance__gte, distance__lt, distance__lte, distance__n, distance_unit, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_a, interface_a_id, interface_a_id__n, interface_b, interface_b_id, interface_b_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, q, ssid, ssid__empty, ssid__ic, ssid__ie, ssid__iew, ssid__iregex, ssid__isw, ssid__n, ssid__nic, ssid__nie, ssid__niew, ssid__nisw, ssid__regex, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Wireless exists" } });
  pvg.success("Wireless found");
}

function verifyWirelessDoesNotExist(auth_cipher, auth_cipher__empty, auth_cipher__ic, auth_cipher__ie, auth_cipher__iew, auth_cipher__iregex, auth_cipher__isw, auth_cipher__n, auth_cipher__nic, auth_cipher__nie, auth_cipher__niew, auth_cipher__nisw, auth_cipher__regex, auth_psk, auth_psk__empty, auth_psk__ic, auth_psk__ie, auth_psk__iew, auth_psk__iregex, auth_psk__isw, auth_psk__n, auth_psk__nic, auth_psk__nie, auth_psk__niew, auth_psk__nisw, auth_psk__regex, auth_type, auth_type__empty, auth_type__ic, auth_type__ie, auth_type__iew, auth_type__iregex, auth_type__isw, auth_type__n, auth_type__nic, auth_type__nie, auth_type__niew, auth_type__nisw, auth_type__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, distance, distance__empty, distance__gt, distance__gte, distance__lt, distance__lte, distance__n, distance_unit, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_a, interface_a_id, interface_a_id__n, interface_b, interface_b_id, interface_b_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, q, ssid, ssid__empty, ssid__ic, ssid__ie, ssid__iew, ssid__iregex, ssid__isw, ssid__n, ssid__nic, ssid__nie, ssid__niew, ssid__nisw, ssid__regex, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Wireless does not exist" } });
  pvg.success("Wireless not found");
}

function tryToDeleteANonExistingWireless(auth_cipher, auth_cipher__empty, auth_cipher__ic, auth_cipher__ie, auth_cipher__iew, auth_cipher__iregex, auth_cipher__isw, auth_cipher__n, auth_cipher__nic, auth_cipher__nie, auth_cipher__niew, auth_cipher__nisw, auth_cipher__regex, auth_psk, auth_psk__empty, auth_psk__ic, auth_psk__ie, auth_psk__iew, auth_psk__iregex, auth_psk__isw, auth_psk__n, auth_psk__nic, auth_psk__nie, auth_psk__niew, auth_psk__nisw, auth_psk__regex, auth_type, auth_type__empty, auth_type__ic, auth_type__ie, auth_type__iew, auth_type__iregex, auth_type__isw, auth_type__n, auth_type__nic, auth_type__nie, auth_type__niew, auth_type__nisw, auth_type__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, distance, distance__empty, distance__gt, distance__gte, distance__lt, distance__lte, distance__n, distance_unit, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_a, interface_a_id, interface_a_id__n, interface_b, interface_b_id, interface_b_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, q, ssid, ssid__empty, ssid__ic, ssid__ie, ssid__iew, ssid__iregex, ssid__isw, ssid__n, ssid__nic, ssid__nie, ssid__niew, ssid__nisw, ssid__regex, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  var description = "Verify negative delete for Wireless";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForWirelessAdded(auth_cipher, auth_cipher__empty, auth_cipher__ic, auth_cipher__ie, auth_cipher__iew, auth_cipher__iregex, auth_cipher__isw, auth_cipher__n, auth_cipher__nic, auth_cipher__nie, auth_cipher__niew, auth_cipher__nisw, auth_cipher__regex, auth_psk, auth_psk__empty, auth_psk__ic, auth_psk__ie, auth_psk__iew, auth_psk__iregex, auth_psk__isw, auth_psk__n, auth_psk__nic, auth_psk__nie, auth_psk__niew, auth_psk__nisw, auth_psk__regex, auth_type, auth_type__empty, auth_type__ic, auth_type__ie, auth_type__iew, auth_type__iregex, auth_type__isw, auth_type__n, auth_type__nic, auth_type__nie, auth_type__niew, auth_type__nisw, auth_type__regex, comments, created, created__empty, created__gt, created__gte, created__lt, created__lte, created__n, created_by_request, custom_fields, description, description__empty, description__ic, description__ie, description__iew, description__iregex, description__isw, description__n, description__nic, description__nie, description__niew, description__nisw, description__regex, distance, distance__empty, distance__gt, distance__gte, distance__lt, distance__lte, distance__n, distance_unit, id, id__empty, id__gt, id__gte, id__lt, id__lte, id__n, interface_a, interface_a_id, interface_a_id__n, interface_b, interface_b_id, interface_b_id__n, last_updated, last_updated__empty, last_updated__gt, last_updated__gte, last_updated__lt, last_updated__lte, last_updated__n, limit, modified_by_request, offset, ordering, q, ssid, ssid__empty, ssid__ic, ssid__ie, ssid__iew, ssid__iregex, ssid__isw, ssid__n, ssid__nic, ssid__nie, ssid__niew, ssid__nisw, ssid__regex, status, status__empty, status__ic, status__ie, status__iew, status__iregex, status__isw, status__n, status__nic, status__nie, status__niew, status__nisw, status__regex, tag, tag__n, tag_id, tag_id__n, tags, tenant, tenant__n, tenant_group, tenant_group__n, tenant_group_id, tenant_group_id__n, tenant_id, tenant_id__n, updated_by_request) {
  waitFor(matchSuccess("add Wireless"));
}

function waitForAnyWirelessAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Wireless Added", function(e) {
      return e.name.startsWith("Done: add Wireless");
  }) });
}
