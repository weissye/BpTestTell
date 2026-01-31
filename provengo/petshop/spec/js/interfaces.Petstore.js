//@provengo summon rest
// === Auto-generated interfaces for Petstore ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
var path = '/v3';

const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", { headers: { "Content-Type": "application/json", "api_key": "special-key" } });

const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }

function addPet(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags, config) {
  var url = "/pet"; var reqDescription = "Add a new pet to the store.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "category": category,
    "name": name,
    "id": petId,
    "photoUrls": photoUrls,
    "status": status,
    "tags": tags
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"photoUrls": photoUrls, "status": status, "category": category, "name": name, "file": file, "api_key": api_key, "id": petId, "additionalMetadata": additionalMetadata, "tags": tags, "petId": petId}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"photoUrls": photoUrls, "status": status, "category": category, "name": name, "file": file, "api_key": api_key, "id": petId, "additionalMetadata": additionalMetadata, "tags": tags, "petId": petId}) }); }
  return response;
}

function updatePet(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags, config) {
  var url = "/pet"; var reqDescription = "Update an existing pet by Id.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "category": category,
    "name": name,
    "id": petId,
    "photoUrls": photoUrls,
    "status": status,
    "tags": tags
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"photoUrls": photoUrls, "status": status, "category": category, "name": name, "file": file, "api_key": api_key, "id": petId, "additionalMetadata": additionalMetadata, "tags": tags, "petId": petId}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"photoUrls": photoUrls, "status": status, "category": category, "name": name, "file": file, "api_key": api_key, "id": petId, "additionalMetadata": additionalMetadata, "tags": tags, "petId": petId}) }); }
  return response;
}

function findPetsByStatus(config) {
  var url = "/pet/findByStatus"; var reqDescription = "Finds Pets by status.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function findPetsByTags(config) {
  var url = "/pet/findByTags"; var reqDescription = "Finds Pets by tags.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function deletePet(petId, config) {
  var url = "/pet/" + petId; var reqDescription = "Delete a pet.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": petId, "petId": petId}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": petId, "petId": petId}) }); }
  return response;
}

function getPetById(petId, config) {
  var url = "/pet/" + petId; var reqDescription = "Returns a single pet.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": petId, "petId": petId}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": petId, "petId": petId}) }); }
  return response;
}

function updatePetWithForm(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags, config) {
  var url = "/pet/" + petId; var reqDescription = "Updates a pet resource based on the form data.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"photoUrls": photoUrls, "status": status, "category": category, "name": name, "file": file, "api_key": api_key, "id": petId, "additionalMetadata": additionalMetadata, "tags": tags, "petId": petId}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"photoUrls": photoUrls, "status": status, "category": category, "name": name, "file": file, "api_key": api_key, "id": petId, "additionalMetadata": additionalMetadata, "tags": tags, "petId": petId}) }); }
  return response;
}

function uploadFile(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags, config) {
  var url = "/pet/" + petId + "/uploadImage"; var reqDescription = "Upload image of the pet.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "file": file
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"photoUrls": photoUrls, "status": status, "category": category, "name": name, "file": file, "api_key": api_key, "id": petId, "additionalMetadata": additionalMetadata, "tags": tags, "petId": petId}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"photoUrls": photoUrls, "status": status, "category": category, "name": name, "file": file, "api_key": api_key, "id": petId, "additionalMetadata": additionalMetadata, "tags": tags, "petId": petId}) }); }
  return response;
}

function tryToAddExistingPet(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags, config) {
  var url = "/pet"; var reqDescription = "Try Add Existing Pet";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "category": category,
    "name": name,
    "id": petId,
    "photoUrls": photoUrls,
    "status": status,
    "tags": tags
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"photoUrls": photoUrls, "status": status, "category": category, "name": name, "file": file, "api_key": api_key, "id": petId, "additionalMetadata": additionalMetadata, "tags": tags, "petId": petId}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"photoUrls": photoUrls, "status": status, "category": category, "name": name, "file": file, "api_key": api_key, "id": petId, "additionalMetadata": additionalMetadata, "tags": tags, "petId": petId}) }); }
  return response;
}

function verifyPetRejects(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags) {
  var url = "/pet";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "additionalMetadata": additionalMetadata,
    "api_key": api_key,
    "category": category,
    "file": file,
    "name": name,
    "petId": petId,
    "photoUrls": photoUrls,
    "status": status,
    "tags": tags
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyPetExists(petId) {
  var url = "/pet/" + petId;
  var description = "Verify Pet " + petId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Pet found");
}

function verifyPetDeleted(petId) {
  var url = "/pet/" + petId;
  var description = "Verify Pet " + petId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Pet correctly deleted (404)");
}

function verifyPetDoesNotExist(petId) { verifyPetDeleted(petId); }

function matchAnyPetAdded() {
  return bp.EventSet("Any Pet Added", function(e) {
      return e.name.startsWith("Done: Positive: Add a new pet to the store.");
  });
}

function matchDeletedPet(petId) {
  return bp.EventSet("Deleted Pet " + petId, function(e) {
      return e.name.startsWith("Done: Positive: Delete a pet.") && e.name.includes(petId);
  });
}

function matchAnyPetDeleted() {
  return bp.EventSet("Any Pet Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a pet.");
  });
}

function getInventory(config) {
  var url = "/store/inventory"; var reqDescription = "Returns pet inventories by status.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function placeOrder(complete, orderId, petId, quantity, shipDate, status, config) {
  var url = "/store/order"; var reqDescription = "Place an order for a pet.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "complete": complete,
    "id": orderId,
    "petId": petId,
    "quantity": quantity,
    "shipDate": shipDate,
    "status": status
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"orderId": orderId, "status": status, "id": orderId, "shipDate": shipDate, "petId": petId, "complete": complete, "quantity": quantity}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"orderId": orderId, "status": status, "id": orderId, "shipDate": shipDate, "petId": petId, "complete": complete, "quantity": quantity}) }); }
  return response;
}

function getOrderById(orderId, config) {
  var url = "/store/order/" + orderId; var reqDescription = "Find purchase order by ID.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": orderId, "orderId": orderId}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": orderId, "orderId": orderId}) }); }
  return response;
}

function deleteOrder(orderId, config) {
  var url = "/store/order/" + orderId; var reqDescription = "Delete purchase order by identifier.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": orderId, "orderId": orderId}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": orderId, "orderId": orderId}) }); }
  return response;
}

function tryToAddExistingStore(complete, orderId, petId, quantity, shipDate, status, config) {
  var url = "/store/order"; var reqDescription = "Try Add Existing Store";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "complete": complete,
    "id": orderId,
    "petId": petId,
    "quantity": quantity,
    "shipDate": shipDate,
    "status": status
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"orderId": orderId, "status": status, "id": orderId, "shipDate": shipDate, "petId": petId, "complete": complete, "quantity": quantity}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"orderId": orderId, "status": status, "id": orderId, "shipDate": shipDate, "petId": petId, "complete": complete, "quantity": quantity}) }); }
  return response;
}

function verifyStoreRejects(complete, orderId, petId, quantity, shipDate, status) {
  var url = "/store/order";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "complete": complete,
    "orderId": orderId,
    "petId": petId,
    "quantity": quantity,
    "shipDate": shipDate,
    "status": status
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyStoreExists(orderId) {
  var url = "/store/order/" + orderId;
  var description = "Verify Store " + orderId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Store found");
}

function verifyStoreDeleted(orderId) {
  var url = "/store/order/" + orderId;
  var description = "Verify Store " + orderId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Store correctly deleted (404)");
}

function verifyStoreDoesNotExist(orderId) { verifyStoreDeleted(orderId); }

function matchAnyStoreAdded() {
  return bp.EventSet("Any Store Added", function(e) {
      return e.name.startsWith("Done: Positive: Place an order for a pet.");
  });
}

function matchDeletedStore(orderId) {
  return bp.EventSet("Deleted Store " + orderId, function(e) {
      return e.name.startsWith("Done: Positive: Delete purchase order by identifier.") && e.name.includes(orderId);
  });
}

function matchAnyStoreDeleted() {
  return bp.EventSet("Any Store Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete purchase order by identifier.");
  });
}

function createUsersWithListInput(email, firstName, lastName, password, phone, userStatus, username, config) {
  var url = "/user/createWithList"; var reqDescription = "Creates list of users with given input array.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = [{
    "email": email,
    "firstName": firstName,
    "lastName": lastName,
    "password": password,
    "phone": phone,
    "userStatus": userStatus,
    "username": username
  }]; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"lastName": lastName, "email": email, "password": password, "firstName": firstName, "userStatus": userStatus, "id": username, "phone": phone, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"lastName": lastName, "email": email, "password": password, "firstName": firstName, "userStatus": userStatus, "id": username, "phone": phone, "username": username}) }); }
  return response;
}

function loginUser(config) {
  var url = "/user/login"; var reqDescription = "Logs user into the system.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function getUserByName(username, config) {
  var url = "/user/" + username; var reqDescription = "Get user by user name.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": username, "username": username}) }); }
  return response;
}

function updateUser(email, firstName, lastName, password, phone, userStatus, username, config) {
  var url = "/user/" + username; var reqDescription = "Update user resource.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "email": email,
    "firstName": firstName,
    "lastName": lastName,
    "password": password,
    "phone": phone,
    "userStatus": userStatus
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"lastName": lastName, "email": email, "password": password, "firstName": firstName, "userStatus": userStatus, "id": username, "phone": phone, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"lastName": lastName, "email": email, "password": password, "firstName": firstName, "userStatus": userStatus, "id": username, "phone": phone, "username": username}) }); }
  return response;
}

function deleteUser(username, config) {
  var url = "/user/" + username; var reqDescription = "Delete user resource.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": username, "username": username}) }); }
  return response;
}

function logoutUser(config) {
  var url = "/user/logout"; var reqDescription = "Logs out current logged in user session.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function tryToAddExistingUser(email, firstName, lastName, password, phone, userStatus, username, config) {
  var url = "/user/createWithList"; var reqDescription = "Try Add Existing User";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = [{
    "email": email,
    "firstName": firstName,
    "lastName": lastName,
    "password": password,
    "phone": phone,
    "userStatus": userStatus,
    "username": username
  }]; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"lastName": lastName, "email": email, "password": password, "firstName": firstName, "userStatus": userStatus, "id": username, "phone": phone, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"lastName": lastName, "email": email, "password": password, "firstName": firstName, "userStatus": userStatus, "id": username, "phone": phone, "username": username}) }); }
  return response;
}

function verifyUserRejects(email, firstName, lastName, password, phone, userStatus, username) {
  var url = "/user/createWithList";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = [{
    "email": email,
    "firstName": firstName,
    "lastName": lastName,
    "password": password,
    "phone": phone,
    "userStatus": userStatus,
    "username": username
  }];
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyUserExists(username) {
  var url = "/user/" + username;
  var description = "Verify User " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("User found");
}

function verifyUserDeleted(username) {
  var url = "/user/" + username;
  var description = "Verify User " + username + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("User correctly deleted (404)");
}

function verifyUserDoesNotExist(username) { verifyUserDeleted(username); }

function matchAnyUserAdded() {
  return bp.EventSet("Any User Added", function(e) {
      return e.name.startsWith("Done: Positive: Creates list of users with given input array.");
  });
}

function matchDeletedUser(username) {
  return bp.EventSet("Deleted User " + username, function(e) {
      return e.name.startsWith("Done: Positive: Delete user resource.") && e.name.includes(username);
  });
}

function matchAnyUserDeleted() {
  return bp.EventSet("Any User Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete user resource.");
  });
}
