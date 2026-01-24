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
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }

function addPet(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags, config) {
  var url = "/pet"; var reqDescription = "Add a new pet to the store. " + petId;
  var body = {
    "category": category,
    "name": name,
    "photoUrls": photoUrls,
    "status": status,
    "tags": tags,
    "petId": petId
  };
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400, 422];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"additionalMetadata": additionalMetadata, "api_key": api_key, "category": category, "file": file, "name": name, "petId": petId, "photoUrls": photoUrls, "status": status, "tags": tags}) }); }
  return res;
}

function updatePet(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags, config) {
  var url = "/pet"; var reqDescription = "Update an existing pet by Id. " + petId;
  var body = {
    "category": category,
    "name": name,
    "photoUrls": photoUrls,
    "status": status,
    "tags": tags,
    "petId": petId
  };
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400, 404, 422];
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"additionalMetadata": additionalMetadata, "api_key": api_key, "category": category, "file": file, "name": name, "petId": petId, "photoUrls": photoUrls, "status": status, "tags": tags}) }); }
  return res;
}

function findPetsByStatus(config) {
  var url = "/pet/findByStatus"; var reqDescription = "Finds Pets by status. {petId}";
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400];
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return res;
}

function findPetsByTags(config) {
  var url = "/pet/findByTags"; var reqDescription = "Finds Pets by tags. {petId}";
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400];
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return res;
}

function deletePet(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags, config) {
  var url = "/pet/" + petId; var reqDescription = "Delete a pet. " + petId;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204, 400];
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) }); }
  return res;
}

function getPetById(petId, config) {
  var url = "/pet/" + petId; var reqDescription = "Returns a single pet. " + petId;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400, 404];
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return res;
}

function updatePetWithForm(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags, config) {
  var url = "/pet/" + petId; var reqDescription = "Updates a pet resource based on the form data. " + petId;
  var body = {
    "petId": petId
  };
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"additionalMetadata": additionalMetadata, "api_key": api_key, "category": category, "file": file, "name": name, "petId": petId, "photoUrls": photoUrls, "status": status, "tags": tags}) }); }
  return res;
}

function uploadFile(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags, config) {
  var url = "/pet/" + petId + "/uploadImage"; var reqDescription = "Upload image of the pet. " + petId;
  var body = {
    "file": file,
    "petId": petId
  };
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400, 404];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"additionalMetadata": additionalMetadata, "api_key": api_key, "category": category, "file": file, "name": name, "petId": petId, "photoUrls": photoUrls, "status": status, "tags": tags}) }); }
  return res;
}

function tryToAddExistingPet(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags, config) {
  var url = "/pet"; var reqDescription = "Try Add Existing Pet " + petId;
  var body = {
    "category": category,
    "name": name,
    "photoUrls": photoUrls,
    "status": status,
    "tags": tags,
    "petId": petId
  };
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"additionalMetadata": additionalMetadata, "api_key": api_key, "category": category, "file": file, "name": name, "petId": petId, "photoUrls": photoUrls, "status": status, "tags": tags}) }); }
  return res;
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
  var url = "/store/inventory"; var reqDescription = "Returns pet inventories by status. {orderId}";
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return res;
}

function placeOrder(complete, orderId, petId, quantity, shipDate, status, config) {
  var url = "/store/order"; var reqDescription = "Place an order for a pet. " + orderId;
  var body = {
    "complete": complete,
    "petId": petId,
    "quantity": quantity,
    "shipDate": shipDate,
    "status": status,
    "orderId": orderId
  };
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400, 422];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"complete": complete, "orderId": orderId, "petId": petId, "quantity": quantity, "shipDate": shipDate, "status": status}) }); }
  return res;
}

function deleteOrder(complete, orderId, petId, quantity, shipDate, status, config) {
  var url = "/store/order/" + orderId; var reqDescription = "Delete purchase order by identifier. " + orderId;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204, 400, 404];
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) }); }
  return res;
}

function getOrderById(orderId, config) {
  var url = "/store/order/" + orderId; var reqDescription = "Find purchase order by ID. " + orderId;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400, 404];
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return res;
}

function tryToAddExistingStore(complete, orderId, petId, quantity, shipDate, status, config) {
  var url = "/store/order"; var reqDescription = "Try Add Existing Store " + orderId;
  var body = {
    "complete": complete,
    "petId": petId,
    "quantity": quantity,
    "shipDate": shipDate,
    "status": status,
    "orderId": orderId
  };
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"complete": complete, "orderId": orderId, "petId": petId, "quantity": quantity, "shipDate": shipDate, "status": status}) }); }
  return res;
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
  var url = "/user/createWithList"; var reqDescription = "Creates list of users with given input array. " + username;
  var body = [{
    "email": email,
    "firstName": firstName,
    "lastName": lastName,
    "password": password,
    "phone": phone,
    "userStatus": userStatus,
    "username": username
  }];
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"email": email, "firstName": firstName, "lastName": lastName, "password": password, "phone": phone, "userStatus": userStatus, "username": username}) }); }
  return res;
}

function logoutUser(config) {
  var url = "/user/logout"; var reqDescription = "Logs out current logged in user session. {username}";
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return res;
}

function getUserByName(username, config) {
  var url = "/user/" + username; var reqDescription = "Get user by user name. " + username;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400, 404];
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return res;
}

function deleteUser(email, firstName, lastName, password, phone, userStatus, username, config) {
  var url = "/user/" + username; var reqDescription = "Delete user resource. " + username;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204, 400, 404];
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) }); }
  return res;
}

function updateUser(email, firstName, lastName, password, phone, userStatus, username, config) {
  var url = "/user/" + username; var reqDescription = "Update user resource. " + username;
  var body = {
    "email": email,
    "firstName": firstName,
    "lastName": lastName,
    "password": password,
    "phone": phone,
    "userStatus": userStatus,
    "username": username
  };
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400, 404];
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"email": email, "firstName": firstName, "lastName": lastName, "password": password, "phone": phone, "userStatus": userStatus, "username": username}) }); }
  return res;
}

function tryToAddExistingUser(email, firstName, lastName, password, phone, userStatus, username, config) {
  var url = "/user/createWithList"; var reqDescription = "Try Add Existing User " + username;
  var body = [{
    "email": email,
    "firstName": firstName,
    "lastName": lastName,
    "password": password,
    "phone": phone,
    "userStatus": userStatus,
    "username": username
  }];
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"email": email, "firstName": firstName, "lastName": lastName, "password": password, "phone": phone, "userStatus": userStatus, "username": username}) }); }
  return res;
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
