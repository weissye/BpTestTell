// Auto-generated stories for Petstore
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    bp.log.info("DEBUG: [resolveDependencies] Caught event: " + e.name);
    if (e.data) bp.log.info("DEBUG: [resolveDependencies] Data: " + JSON.stringify(e.data));
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (val) {
            captured[k] = val;
            bp.log.info("DEBUG: [resolveDependencies] Resolved " + k + " -> " + val);
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// --- Monitors [RESTORED] ---
bthread("monitor:Pet:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPetAdded() });
    let idVal = e.data.petId || e.data.id;
    verifyPetExists(idVal);
  } });

bthread("monitor:Store:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyStoreAdded() });
    let idVal = e.data.orderId || e.data.id;
    verifyStoreExists(idVal);
  } });

bthread("monitor:User:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserAdded() });
    let idVal = e.data.username || e.data.id;
    verifyUserExists(idVal);
  } });

bthread("crud:Pet:linear:1", function () {
  // -> Creating Pet
  let additionalMetadata_Pet_100 = "additionalMetadata_Pet_100_" + Math.floor(Math.random()*1000);
  let api_key_Pet_100 = "api_key_Pet_100_" + Math.floor(Math.random()*1000);
  let category_Pet_100 = { "id": 1, "name": "category_Pet_100_obj" };
  let file_Pet_100 = "file_Pet_100_" + Math.floor(Math.random()*1000);
  let name_Pet_100 = "name_Pet_100_" + Math.floor(Math.random()*1000);
  let petId_Pet_100 = 100 + Math.floor(Math.random() * 99);
  let photoUrls_Pet_100 = [];
  let status_Pet_100 = "status_Pet_100_" + Math.floor(Math.random()*1000);
  let tags_Pet_100 = [];
  addPet(additionalMetadata_Pet_100, api_key_Pet_100, category_Pet_100, file_Pet_100, name_Pet_100, petId_Pet_100, photoUrls_Pet_100, status_Pet_100, tags_Pet_100, { expectedResponseCodes: [200, 201, 204] });

  verifyPetExists(petId_Pet_100);
  // -> Updating Pet
  let additionalMetadata_Pet_upd_100 = "additionalMetadata_Pet_upd_100_" + Math.floor(Math.random()*1000);
  let api_key_Pet_upd_100 = "api_key_Pet_upd_100_" + Math.floor(Math.random()*1000);
  let category_Pet_upd_100 = { "id": 1, "name": "category_Pet_upd_100_obj" };
  let file_Pet_upd_100 = "file_Pet_upd_100_" + Math.floor(Math.random()*1000);
  let name_Pet_upd_100 = "name_Pet_upd_100_" + Math.floor(Math.random()*1000);
  let petId_Pet_upd_100 = petId_Pet_100;
  let photoUrls_Pet_upd_100 = [];
  let status_Pet_upd_100 = "status_Pet_upd_100_" + Math.floor(Math.random()*1000);
  let tags_Pet_upd_100 = [];
  updatePet(additionalMetadata_Pet_upd_100, api_key_Pet_upd_100, category_Pet_upd_100, file_Pet_upd_100, name_Pet_upd_100, petId_Pet_upd_100, photoUrls_Pet_upd_100, status_Pet_upd_100, tags_Pet_upd_100, { expectedResponseCodes: [200, 201, 204] });

  verifyPetExists(petId_Pet_100);
  // -> Deleting Parent Pet (Relational Intent Race)
  deletePet(petId_Pet_100);

});

bthread("crud:Store:linear:1", function () {
  let deps = {};
  deps["Pet"] = matchAnyPetAdded();
  let pkMap = {"Pet": "petId"};
  let captured = resolveDependencies(deps, pkMap);
  let PetId = captured["Pet"];
  // -> Creating Store
  let complete_Store_110 = true;
  let orderId_Store_110 = 110 + Math.floor(Math.random() * 99);
  let petId_Store_110 = PetId;
  let quantity_Store_110 = 110 + Math.floor(Math.random() * 99);
  let shipDate_Store_110 = "2025-01-25T12:00:00Z";
  let status_Store_110 = "status_Store_110_" + Math.floor(Math.random()*1000);
  placeOrder(complete_Store_110, orderId_Store_110, petId_Store_110, quantity_Store_110, shipDate_Store_110, status_Store_110, { expectedResponseCodes: [200, 201, 204] });

  verifyStoreExists(orderId_Store_110);
  verifyStoreExists(orderId_Store_110);
  // -> Deleting Leaf Store (Standard)
  deleteOrder(orderId_Store_110);
  verifyStoreDoesNotExist(orderId_Store_110);

});

bthread("crud:User:linear:1", function () {
  // -> Creating User
  let email_User_120 = "email_User_120_" + Math.floor(Math.random()*1000);
  let firstName_User_120 = "firstName_User_120_" + Math.floor(Math.random()*1000);
  let lastName_User_120 = "lastName_User_120_" + Math.floor(Math.random()*1000);
  let password_User_120 = "password_User_120_" + Math.floor(Math.random()*1000);
  let phone_User_120 = "phone_User_120_" + Math.floor(Math.random()*1000);
  let userStatus_User_120 = 120 + Math.floor(Math.random() * 99);
  let username_User_120 = "username_User_120";
  createUsersWithListInput(email_User_120, firstName_User_120, lastName_User_120, password_User_120, phone_User_120, userStatus_User_120, username_User_120, { expectedResponseCodes: [200, 201, 204] });

  verifyUserExists(username_User_120);
  // -> Updating User
  let email_User_upd_120 = "email_User_upd_120_" + Math.floor(Math.random()*1000);
  let firstName_User_upd_120 = "firstName_User_upd_120_" + Math.floor(Math.random()*1000);
  let lastName_User_upd_120 = "lastName_User_upd_120_" + Math.floor(Math.random()*1000);
  let password_User_upd_120 = "password_User_upd_120_" + Math.floor(Math.random()*1000);
  let phone_User_upd_120 = "phone_User_upd_120_" + Math.floor(Math.random()*1000);
  let userStatus_User_upd_120 = 120 + Math.floor(Math.random() * 99);
  let username_User_upd_120 = username_User_120;
  updateUser(email_User_upd_120, firstName_User_upd_120, lastName_User_upd_120, password_User_upd_120, phone_User_upd_120, userStatus_User_upd_120, username_User_upd_120, { expectedResponseCodes: [200, 201, 204] });

  verifyUserExists(username_User_120);
  // -> Deleting Leaf User (Standard)
  deleteUser(username_User_120);
  verifyUserDoesNotExist(username_User_120);

});

bthread("crud:Pet:linear:2", function () {
  // -> Creating Pet
  let additionalMetadata_Pet_130 = "additionalMetadata_Pet_130_" + Math.floor(Math.random()*1000);
  let api_key_Pet_130 = "api_key_Pet_130_" + Math.floor(Math.random()*1000);
  let category_Pet_130 = { "id": 1, "name": "category_Pet_130_obj" };
  let file_Pet_130 = "file_Pet_130_" + Math.floor(Math.random()*1000);
  let name_Pet_130 = "name_Pet_130_" + Math.floor(Math.random()*1000);
  let petId_Pet_130 = 130 + Math.floor(Math.random() * 99);
  let photoUrls_Pet_130 = [];
  let status_Pet_130 = "status_Pet_130_" + Math.floor(Math.random()*1000);
  let tags_Pet_130 = [];
  addPet(additionalMetadata_Pet_130, api_key_Pet_130, category_Pet_130, file_Pet_130, name_Pet_130, petId_Pet_130, photoUrls_Pet_130, status_Pet_130, tags_Pet_130, { expectedResponseCodes: [200, 201, 204] });

  verifyPetExists(petId_Pet_130);
  // -> Updating Pet
  let additionalMetadata_Pet_upd_130 = "additionalMetadata_Pet_upd_130_" + Math.floor(Math.random()*1000);
  let api_key_Pet_upd_130 = "api_key_Pet_upd_130_" + Math.floor(Math.random()*1000);
  let category_Pet_upd_130 = { "id": 1, "name": "category_Pet_upd_130_obj" };
  let file_Pet_upd_130 = "file_Pet_upd_130_" + Math.floor(Math.random()*1000);
  let name_Pet_upd_130 = "name_Pet_upd_130_" + Math.floor(Math.random()*1000);
  let petId_Pet_upd_130 = petId_Pet_130;
  let photoUrls_Pet_upd_130 = [];
  let status_Pet_upd_130 = "status_Pet_upd_130_" + Math.floor(Math.random()*1000);
  let tags_Pet_upd_130 = [];
  updatePet(additionalMetadata_Pet_upd_130, api_key_Pet_upd_130, category_Pet_upd_130, file_Pet_upd_130, name_Pet_upd_130, petId_Pet_upd_130, photoUrls_Pet_upd_130, status_Pet_upd_130, tags_Pet_upd_130, { expectedResponseCodes: [200, 201, 204] });

  verifyPetExists(petId_Pet_130);
  // -> Deleting Parent Pet (Relational Intent Race)
  deletePet(petId_Pet_130);

});

bthread("crud:Store:linear:2", function () {
  let deps = {};
  deps["Pet"] = matchAnyPetAdded();
  let pkMap = {"Pet": "petId"};
  let captured = resolveDependencies(deps, pkMap);
  let PetId = captured["Pet"];
  // -> Creating Store
  let complete_Store_140 = true;
  let orderId_Store_140 = 140 + Math.floor(Math.random() * 99);
  let petId_Store_140 = PetId;
  let quantity_Store_140 = 140 + Math.floor(Math.random() * 99);
  let shipDate_Store_140 = "2025-01-25T12:00:00Z";
  let status_Store_140 = "status_Store_140_" + Math.floor(Math.random()*1000);
  placeOrder(complete_Store_140, orderId_Store_140, petId_Store_140, quantity_Store_140, shipDate_Store_140, status_Store_140, { expectedResponseCodes: [200, 201, 204] });

  verifyStoreExists(orderId_Store_140);
  verifyStoreExists(orderId_Store_140);
  // -> Deleting Leaf Store (Standard)
  deleteOrder(orderId_Store_140);
  verifyStoreDoesNotExist(orderId_Store_140);

});

bthread("crud:User:linear:2", function () {
  // -> Creating User
  let email_User_150 = "email_User_150_" + Math.floor(Math.random()*1000);
  let firstName_User_150 = "firstName_User_150_" + Math.floor(Math.random()*1000);
  let lastName_User_150 = "lastName_User_150_" + Math.floor(Math.random()*1000);
  let password_User_150 = "password_User_150_" + Math.floor(Math.random()*1000);
  let phone_User_150 = "phone_User_150_" + Math.floor(Math.random()*1000);
  let userStatus_User_150 = 150 + Math.floor(Math.random() * 99);
  let username_User_150 = "username_User_150";
  createUsersWithListInput(email_User_150, firstName_User_150, lastName_User_150, password_User_150, phone_User_150, userStatus_User_150, username_User_150, { expectedResponseCodes: [200, 201, 204] });

  verifyUserExists(username_User_150);
  // -> Updating User
  let email_User_upd_150 = "email_User_upd_150_" + Math.floor(Math.random()*1000);
  let firstName_User_upd_150 = "firstName_User_upd_150_" + Math.floor(Math.random()*1000);
  let lastName_User_upd_150 = "lastName_User_upd_150_" + Math.floor(Math.random()*1000);
  let password_User_upd_150 = "password_User_upd_150_" + Math.floor(Math.random()*1000);
  let phone_User_upd_150 = "phone_User_upd_150_" + Math.floor(Math.random()*1000);
  let userStatus_User_upd_150 = 150 + Math.floor(Math.random() * 99);
  let username_User_upd_150 = username_User_150;
  updateUser(email_User_upd_150, firstName_User_upd_150, lastName_User_upd_150, password_User_upd_150, phone_User_upd_150, userStatus_User_upd_150, username_User_upd_150, { expectedResponseCodes: [200, 201, 204] });

  verifyUserExists(username_User_150);
  // -> Deleting Leaf User (Standard)
  deleteUser(username_User_150);
  verifyUserDoesNotExist(username_User_150);

});

bthread("crud:Pet:linear:3", function () {
  // -> Creating Pet
  let additionalMetadata_Pet_160 = "additionalMetadata_Pet_160_" + Math.floor(Math.random()*1000);
  let api_key_Pet_160 = "api_key_Pet_160_" + Math.floor(Math.random()*1000);
  let category_Pet_160 = { "id": 1, "name": "category_Pet_160_obj" };
  let file_Pet_160 = "file_Pet_160_" + Math.floor(Math.random()*1000);
  let name_Pet_160 = "name_Pet_160_" + Math.floor(Math.random()*1000);
  let petId_Pet_160 = 160 + Math.floor(Math.random() * 99);
  let photoUrls_Pet_160 = [];
  let status_Pet_160 = "status_Pet_160_" + Math.floor(Math.random()*1000);
  let tags_Pet_160 = [];
  addPet(additionalMetadata_Pet_160, api_key_Pet_160, category_Pet_160, file_Pet_160, name_Pet_160, petId_Pet_160, photoUrls_Pet_160, status_Pet_160, tags_Pet_160, { expectedResponseCodes: [200, 201, 204] });

  verifyPetExists(petId_Pet_160);
  // -> Updating Pet
  let additionalMetadata_Pet_upd_160 = "additionalMetadata_Pet_upd_160_" + Math.floor(Math.random()*1000);
  let api_key_Pet_upd_160 = "api_key_Pet_upd_160_" + Math.floor(Math.random()*1000);
  let category_Pet_upd_160 = { "id": 1, "name": "category_Pet_upd_160_obj" };
  let file_Pet_upd_160 = "file_Pet_upd_160_" + Math.floor(Math.random()*1000);
  let name_Pet_upd_160 = "name_Pet_upd_160_" + Math.floor(Math.random()*1000);
  let petId_Pet_upd_160 = petId_Pet_160;
  let photoUrls_Pet_upd_160 = [];
  let status_Pet_upd_160 = "status_Pet_upd_160_" + Math.floor(Math.random()*1000);
  let tags_Pet_upd_160 = [];
  updatePet(additionalMetadata_Pet_upd_160, api_key_Pet_upd_160, category_Pet_upd_160, file_Pet_upd_160, name_Pet_upd_160, petId_Pet_upd_160, photoUrls_Pet_upd_160, status_Pet_upd_160, tags_Pet_upd_160, { expectedResponseCodes: [200, 201, 204] });

  verifyPetExists(petId_Pet_160);
  // -> Deleting Parent Pet (Relational Intent Race)
  deletePet(petId_Pet_160);

});

bthread("crud:Store:linear:3", function () {
  let deps = {};
  deps["Pet"] = matchAnyPetAdded();
  let pkMap = {"Pet": "petId"};
  let captured = resolveDependencies(deps, pkMap);
  let PetId = captured["Pet"];
  // -> Creating Store
  let complete_Store_170 = true;
  let orderId_Store_170 = 170 + Math.floor(Math.random() * 99);
  let petId_Store_170 = PetId;
  let quantity_Store_170 = 170 + Math.floor(Math.random() * 99);
  let shipDate_Store_170 = "2025-01-25T12:00:00Z";
  let status_Store_170 = "status_Store_170_" + Math.floor(Math.random()*1000);
  placeOrder(complete_Store_170, orderId_Store_170, petId_Store_170, quantity_Store_170, shipDate_Store_170, status_Store_170, { expectedResponseCodes: [200, 201, 204] });

  verifyStoreExists(orderId_Store_170);
  verifyStoreExists(orderId_Store_170);
  // -> Deleting Leaf Store (Standard)
  deleteOrder(orderId_Store_170);
  verifyStoreDoesNotExist(orderId_Store_170);

});

bthread("crud:User:linear:3", function () {
  // -> Creating User
  let email_User_180 = "email_User_180_" + Math.floor(Math.random()*1000);
  let firstName_User_180 = "firstName_User_180_" + Math.floor(Math.random()*1000);
  let lastName_User_180 = "lastName_User_180_" + Math.floor(Math.random()*1000);
  let password_User_180 = "password_User_180_" + Math.floor(Math.random()*1000);
  let phone_User_180 = "phone_User_180_" + Math.floor(Math.random()*1000);
  let userStatus_User_180 = 180 + Math.floor(Math.random() * 99);
  let username_User_180 = "username_User_180";
  createUsersWithListInput(email_User_180, firstName_User_180, lastName_User_180, password_User_180, phone_User_180, userStatus_User_180, username_User_180, { expectedResponseCodes: [200, 201, 204] });

  verifyUserExists(username_User_180);
  // -> Updating User
  let email_User_upd_180 = "email_User_upd_180_" + Math.floor(Math.random()*1000);
  let firstName_User_upd_180 = "firstName_User_upd_180_" + Math.floor(Math.random()*1000);
  let lastName_User_upd_180 = "lastName_User_upd_180_" + Math.floor(Math.random()*1000);
  let password_User_upd_180 = "password_User_upd_180_" + Math.floor(Math.random()*1000);
  let phone_User_upd_180 = "phone_User_upd_180_" + Math.floor(Math.random()*1000);
  let userStatus_User_upd_180 = 180 + Math.floor(Math.random() * 99);
  let username_User_upd_180 = username_User_180;
  updateUser(email_User_upd_180, firstName_User_upd_180, lastName_User_upd_180, password_User_upd_180, phone_User_upd_180, userStatus_User_upd_180, username_User_upd_180, { expectedResponseCodes: [200, 201, 204] });

  verifyUserExists(username_User_180);
  // -> Deleting Leaf User (Standard)
  deleteUser(username_User_180);
  verifyUserDoesNotExist(username_User_180);

});

// --- PHASE 1: GLOBAL HYPER-SEEDING for Petstore ---
// --- Hyper-Story Constellation Copy 1 ---
bthread("hyper:Petstore:copy1:PetManager", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.petId;
    addPet(null, null, null, null, null, activeId);
    uploadFile(null, null, null, null, null, activeId);
    updatePet(null, null, null, null, null, activeId);
    getPetById(activeId);
  } });
bthread("hyper:Petstore:copy1:StoreCoordinator", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.petId;
    addPet(null, null, null, null, null, activeId);
    findPetsByStatus(activeId);
    getPetById(activeId);
    deletePet(activeId);
  } });
bthread("hyper:Petstore:copy1:UserAdministrator", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.petId;
    addPet(null, null, null, null, null, activeId);
    updatePet(null, null, null, null, null, activeId);
    findPetsByStatus(activeId);
    getPetById(activeId);
  } });
bthread("hyper:Petstore:copy1:PetViewer", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.petId;
    findPetsByStatus(activeId);
    findPetsByTags(activeId);
    getPetById(activeId);
    updatePetWithForm(null, null, null, null, null, activeId);
  } });
// --- Hyper-Story Constellation Copy 2 ---
bthread("hyper:Petstore:copy2:PetManager", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.petId;
    addPet(null, null, null, null, null, activeId);
    uploadFile(null, null, null, null, null, activeId);
    updatePet(null, null, null, null, null, activeId);
    getPetById(activeId);
  } });
bthread("hyper:Petstore:copy2:StoreCoordinator", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.petId;
    addPet(null, null, null, null, null, activeId);
    findPetsByStatus(activeId);
    getPetById(activeId);
    deletePet(activeId);
  } });
bthread("hyper:Petstore:copy2:UserAdministrator", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.petId;
    addPet(null, null, null, null, null, activeId);
    updatePet(null, null, null, null, null, activeId);
    findPetsByStatus(activeId);
    getPetById(activeId);
  } });
bthread("hyper:Petstore:copy2:PetViewer", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.petId;
    findPetsByStatus(activeId);
    findPetsByTags(activeId);
    getPetById(activeId);
    updatePetWithForm(null, null, null, null, null, activeId);
  } });
// --- Hyper-Story Constellation Copy 3 ---
bthread("hyper:Petstore:copy3:PetManager", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.petId;
    addPet(null, null, null, null, null, activeId);
    uploadFile(null, null, null, null, null, activeId);
    updatePet(null, null, null, null, null, activeId);
    getPetById(activeId);
  } });
bthread("hyper:Petstore:copy3:StoreCoordinator", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.petId;
    addPet(null, null, null, null, null, activeId);
    findPetsByStatus(activeId);
    getPetById(activeId);
    deletePet(activeId);
  } });
bthread("hyper:Petstore:copy3:UserAdministrator", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.petId;
    addPet(null, null, null, null, null, activeId);
    updatePet(null, null, null, null, null, activeId);
    findPetsByStatus(activeId);
    getPetById(activeId);
  } });
bthread("hyper:Petstore:copy3:PetViewer", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.petId;
    findPetsByStatus(activeId);
    findPetsByTags(activeId);
    getPetById(activeId);
    updatePetWithForm(null, null, null, null, null, activeId);
  } });