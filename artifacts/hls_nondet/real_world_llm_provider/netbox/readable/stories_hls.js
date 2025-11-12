// ---- crud:api:nondet:1:1 ----
bthread("crud:api:nondet:1:1", function () {
  let id = 200;
  let name = "name_200";
  addApi(id, name);
  tryToAddExistingApi(id, name);
  verifyApiExists(id, name);
  updateApi(id, name);
  deleteApi(id, name);
  tryToDeleteANonExistingApi(id, name);
  verifyApiDoesNotExist(id, name);
  
});

// ---- crud:api:nondet:1:2 ----
bthread("crud:api:nondet:1:2", function () {
  let id = 200;
  let name = "name_200";
  addApi(id, name);
  tryToAddExistingApi(id, name);
  updateApi(id, name);
  verifyApiExists(id, name);
  deleteApi(id, name);
  tryToDeleteANonExistingApi(id, name);
  verifyApiDoesNotExist(id, name);
  
});

// ---- crud:api:nondet:1:3 ----
bthread("crud:api:nondet:1:3", function () {
  let id = 200;
  let name = "name_200";
  addApi(id, name);
  tryToAddExistingApi(id, name);
  verifyApiExists(id, name);
  deleteApi(id, name);
  tryToDeleteANonExistingApi(id, name);
  verifyApiDoesNotExist(id, name);
  
});

// ---- crud:api:nondet:1:4 ----
bthread("crud:api:nondet:1:4", function () {
  let id = 201;
  let name = "name_201";
  addApi(id, name);
  tryToAddExistingApi(id, name);
  deleteApi(id, name);
  tryToDeleteANonExistingApi(id, name);
  verifyApiDoesNotExist(id, name);
  
});
