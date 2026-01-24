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

// --- Monitors ---
bthread("monitor:Pet:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPetAdded() });
    let idVal = e.data.petId || e.data.id;
    block(matchDeletedPet(idVal), function() { verifyPetExists(idVal); });
  } });

bthread("monitor:Store:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyStoreAdded() });
    let idVal = e.data.orderId || e.data.id;
    block(matchDeletedStore(idVal), function() { verifyStoreExists(idVal); });
  } });

bthread("monitor:User:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserAdded() });
    let idVal = e.data.username || e.data.id;
    block(matchDeletedUser(idVal), function() { verifyUserExists(idVal); });
  } });

bthread("crud:Pet:linear:1", function () {
  // -> Creating Pet
  let additionalMetadata_Pet_100 = "additionalMetadata_Pet_100_" + Math.floor(Math.random()*1000);
  let api_key_Pet_100 = "api_key_Pet_100_" + Math.floor(Math.random()*1000);
  let category_Pet_100 = { "id": 1, "name": "val_Pet_100" };
  let file_Pet_100 = "file_Pet_100_" + Math.floor(Math.random()*1000);
  let name_Pet_100 = "doggie";
  let petId_Pet_100 = Math.floor(Math.random() * 1000);
  let photoUrls_Pet_100 = [];
  let status_Pet_100 = "available";
  let tags_Pet_100 = [];
  addPet(additionalMetadata_Pet_100, api_key_Pet_100, category_Pet_100, file_Pet_100, name_Pet_100, petId_Pet_100, photoUrls_Pet_100, status_Pet_100, tags_Pet_100, { expectedResponseCodes: [200, 201, 204] });

  verifyPetExists(petId_Pet_100); // Inline Fidelity Check
  // -> Updating Pet
  let additionalMetadata_Pet_upd_100 = "additionalMetadata_Pet_upd_100_" + Math.floor(Math.random()*1000);
  let api_key_Pet_upd_100 = "api_key_Pet_upd_100_" + Math.floor(Math.random()*1000);
  let category_Pet_upd_100 = { "id": 1, "name": "val_Pet_upd_100" };
  let file_Pet_upd_100 = "file_Pet_upd_100_" + Math.floor(Math.random()*1000);
  let name_Pet_upd_100 = "doggie";
  let petId_Pet_upd_100 = petId_Pet_100;
  let photoUrls_Pet_upd_100 = [];
  let status_Pet_upd_100 = "available";
  let tags_Pet_upd_100 = [];
  updatePet(additionalMetadata_Pet_upd_100, api_key_Pet_upd_100, category_Pet_upd_100, file_Pet_upd_100, name_Pet_upd_100, petId_Pet_upd_100, photoUrls_Pet_upd_100, status_Pet_upd_100, tags_Pet_upd_100, { expectedResponseCodes: [200, 201, 204] });

  verifyPetExists(petId_Pet_100); // Post-Update Fidelity Check
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
  let orderId_Store_110 = Math.floor(Math.random() * 1000);
  let petId_Store_110 = PetId;
  let quantity_Store_110 = Math.floor(Math.random() * 1000);
  let shipDate_Store_110 = "shipDate_Store_110_" + Math.floor(Math.random()*1000);
  let status_Store_110 = "available";
  placeOrder(complete_Store_110, orderId_Store_110, petId_Store_110, quantity_Store_110, shipDate_Store_110, status_Store_110, { expectedResponseCodes: [200, 201, 204] });

  verifyStoreExists(orderId_Store_110); // Inline Fidelity Check
  verifyStoreExists(orderId_Store_110); // Post-Update Fidelity Check
  // -> Deleting Leaf Store (Standard)
  deleteOrder(orderId_Store_110);
  verifyStoreDoesNotExist(orderId_Store_110);

});

bthread("crud:User:linear:1", function () {
  // -> Creating User
  let email_User_120 = "john@email.com";
  let firstName_User_120 = "John";
  let lastName_User_120 = "James";
  let password_User_120 = "12345";
  let phone_User_120 = "12345";
  let userStatus_User_120 = Math.floor(Math.random() * 1000);
  let username_User_120 = "theUser";
  createUsersWithListInput(email_User_120, firstName_User_120, lastName_User_120, password_User_120, phone_User_120, userStatus_User_120, username_User_120, { expectedResponseCodes: [200, 201, 204] });

  verifyUserExists(username_User_120); // Inline Fidelity Check
  // -> Updating User
  let email_User_upd_120 = "john@email.com";
  let firstName_User_upd_120 = "John";
  let lastName_User_upd_120 = "James";
  let password_User_upd_120 = "12345";
  let phone_User_upd_120 = "12345";
  let userStatus_User_upd_120 = Math.floor(Math.random() * 1000);
  let username_User_upd_120 = username_User_120;
  updateUser(email_User_upd_120, firstName_User_upd_120, lastName_User_upd_120, password_User_upd_120, phone_User_upd_120, userStatus_User_upd_120, username_User_upd_120, { expectedResponseCodes: [200, 201, 204] });

  verifyUserExists(username_User_120); // Post-Update Fidelity Check
  // -> Deleting Leaf User (Standard)
  deleteUser(username_User_120);
  verifyUserDoesNotExist(username_User_120);

});

bthread("crud:Pet:linear:2", function () {
  // -> Creating Pet
  let additionalMetadata_Pet_130 = "additionalMetadata_Pet_130_" + Math.floor(Math.random()*1000);
  let api_key_Pet_130 = "api_key_Pet_130_" + Math.floor(Math.random()*1000);
  let category_Pet_130 = { "id": 1, "name": "val_Pet_130" };
  let file_Pet_130 = "file_Pet_130_" + Math.floor(Math.random()*1000);
  let name_Pet_130 = "doggie";
  let petId_Pet_130 = Math.floor(Math.random() * 1000);
  let photoUrls_Pet_130 = [];
  let status_Pet_130 = "available";
  let tags_Pet_130 = [];
  addPet(additionalMetadata_Pet_130, api_key_Pet_130, category_Pet_130, file_Pet_130, name_Pet_130, petId_Pet_130, photoUrls_Pet_130, status_Pet_130, tags_Pet_130, { expectedResponseCodes: [200, 201, 204] });

  verifyPetExists(petId_Pet_130); // Inline Fidelity Check
  // -> Updating Pet
  let additionalMetadata_Pet_upd_130 = "additionalMetadata_Pet_upd_130_" + Math.floor(Math.random()*1000);
  let api_key_Pet_upd_130 = "api_key_Pet_upd_130_" + Math.floor(Math.random()*1000);
  let category_Pet_upd_130 = { "id": 1, "name": "val_Pet_upd_130" };
  let file_Pet_upd_130 = "file_Pet_upd_130_" + Math.floor(Math.random()*1000);
  let name_Pet_upd_130 = "doggie";
  let petId_Pet_upd_130 = petId_Pet_130;
  let photoUrls_Pet_upd_130 = [];
  let status_Pet_upd_130 = "available";
  let tags_Pet_upd_130 = [];
  updatePet(additionalMetadata_Pet_upd_130, api_key_Pet_upd_130, category_Pet_upd_130, file_Pet_upd_130, name_Pet_upd_130, petId_Pet_upd_130, photoUrls_Pet_upd_130, status_Pet_upd_130, tags_Pet_upd_130, { expectedResponseCodes: [200, 201, 204] });

  verifyPetExists(petId_Pet_130); // Post-Update Fidelity Check
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
  let orderId_Store_140 = Math.floor(Math.random() * 1000);
  let petId_Store_140 = PetId;
  let quantity_Store_140 = Math.floor(Math.random() * 1000);
  let shipDate_Store_140 = "shipDate_Store_140_" + Math.floor(Math.random()*1000);
  let status_Store_140 = "available";
  placeOrder(complete_Store_140, orderId_Store_140, petId_Store_140, quantity_Store_140, shipDate_Store_140, status_Store_140, { expectedResponseCodes: [200, 201, 204] });

  verifyStoreExists(orderId_Store_140); // Inline Fidelity Check
  verifyStoreExists(orderId_Store_140); // Post-Update Fidelity Check
  // -> Deleting Leaf Store (Standard)
  deleteOrder(orderId_Store_140);
  verifyStoreDoesNotExist(orderId_Store_140);

});

bthread("crud:User:linear:2", function () {
  // -> Creating User
  let email_User_150 = "john@email.com";
  let firstName_User_150 = "John";
  let lastName_User_150 = "James";
  let password_User_150 = "12345";
  let phone_User_150 = "12345";
  let userStatus_User_150 = Math.floor(Math.random() * 1000);
  let username_User_150 = "theUser";
  createUsersWithListInput(email_User_150, firstName_User_150, lastName_User_150, password_User_150, phone_User_150, userStatus_User_150, username_User_150, { expectedResponseCodes: [200, 201, 204] });

  verifyUserExists(username_User_150); // Inline Fidelity Check
  // -> Updating User
  let email_User_upd_150 = "john@email.com";
  let firstName_User_upd_150 = "John";
  let lastName_User_upd_150 = "James";
  let password_User_upd_150 = "12345";
  let phone_User_upd_150 = "12345";
  let userStatus_User_upd_150 = Math.floor(Math.random() * 1000);
  let username_User_upd_150 = username_User_150;
  updateUser(email_User_upd_150, firstName_User_upd_150, lastName_User_upd_150, password_User_upd_150, phone_User_upd_150, userStatus_User_upd_150, username_User_upd_150, { expectedResponseCodes: [200, 201, 204] });

  verifyUserExists(username_User_150); // Post-Update Fidelity Check
  // -> Deleting Leaf User (Standard)
  deleteUser(username_User_150);
  verifyUserDoesNotExist(username_User_150);

});

bthread("crud:Pet:linear:3", function () {
  // -> Creating Pet
  let additionalMetadata_Pet_160 = "additionalMetadata_Pet_160_" + Math.floor(Math.random()*1000);
  let api_key_Pet_160 = "api_key_Pet_160_" + Math.floor(Math.random()*1000);
  let category_Pet_160 = { "id": 1, "name": "val_Pet_160" };
  let file_Pet_160 = "file_Pet_160_" + Math.floor(Math.random()*1000);
  let name_Pet_160 = "doggie";
  let petId_Pet_160 = Math.floor(Math.random() * 1000);
  let photoUrls_Pet_160 = [];
  let status_Pet_160 = "available";
  let tags_Pet_160 = [];
  addPet(additionalMetadata_Pet_160, api_key_Pet_160, category_Pet_160, file_Pet_160, name_Pet_160, petId_Pet_160, photoUrls_Pet_160, status_Pet_160, tags_Pet_160, { expectedResponseCodes: [200, 201, 204] });

  verifyPetExists(petId_Pet_160); // Inline Fidelity Check
  // -> Updating Pet
  let additionalMetadata_Pet_upd_160 = "additionalMetadata_Pet_upd_160_" + Math.floor(Math.random()*1000);
  let api_key_Pet_upd_160 = "api_key_Pet_upd_160_" + Math.floor(Math.random()*1000);
  let category_Pet_upd_160 = { "id": 1, "name": "val_Pet_upd_160" };
  let file_Pet_upd_160 = "file_Pet_upd_160_" + Math.floor(Math.random()*1000);
  let name_Pet_upd_160 = "doggie";
  let petId_Pet_upd_160 = petId_Pet_160;
  let photoUrls_Pet_upd_160 = [];
  let status_Pet_upd_160 = "available";
  let tags_Pet_upd_160 = [];
  updatePet(additionalMetadata_Pet_upd_160, api_key_Pet_upd_160, category_Pet_upd_160, file_Pet_upd_160, name_Pet_upd_160, petId_Pet_upd_160, photoUrls_Pet_upd_160, status_Pet_upd_160, tags_Pet_upd_160, { expectedResponseCodes: [200, 201, 204] });

  verifyPetExists(petId_Pet_160); // Post-Update Fidelity Check
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
  let orderId_Store_170 = Math.floor(Math.random() * 1000);
  let petId_Store_170 = PetId;
  let quantity_Store_170 = Math.floor(Math.random() * 1000);
  let shipDate_Store_170 = "shipDate_Store_170_" + Math.floor(Math.random()*1000);
  let status_Store_170 = "available";
  placeOrder(complete_Store_170, orderId_Store_170, petId_Store_170, quantity_Store_170, shipDate_Store_170, status_Store_170, { expectedResponseCodes: [200, 201, 204] });

  verifyStoreExists(orderId_Store_170); // Inline Fidelity Check
  verifyStoreExists(orderId_Store_170); // Post-Update Fidelity Check
  // -> Deleting Leaf Store (Standard)
  deleteOrder(orderId_Store_170);
  verifyStoreDoesNotExist(orderId_Store_170);

});

bthread("crud:User:linear:3", function () {
  // -> Creating User
  let email_User_180 = "john@email.com";
  let firstName_User_180 = "John";
  let lastName_User_180 = "James";
  let password_User_180 = "12345";
  let phone_User_180 = "12345";
  let userStatus_User_180 = Math.floor(Math.random() * 1000);
  let username_User_180 = "theUser";
  createUsersWithListInput(email_User_180, firstName_User_180, lastName_User_180, password_User_180, phone_User_180, userStatus_User_180, username_User_180, { expectedResponseCodes: [200, 201, 204] });

  verifyUserExists(username_User_180); // Inline Fidelity Check
  // -> Updating User
  let email_User_upd_180 = "john@email.com";
  let firstName_User_upd_180 = "John";
  let lastName_User_upd_180 = "James";
  let password_User_upd_180 = "12345";
  let phone_User_upd_180 = "12345";
  let userStatus_User_upd_180 = Math.floor(Math.random() * 1000);
  let username_User_upd_180 = username_User_180;
  updateUser(email_User_upd_180, firstName_User_upd_180, lastName_User_upd_180, password_User_upd_180, phone_User_upd_180, userStatus_User_upd_180, username_User_upd_180, { expectedResponseCodes: [200, 201, 204] });

  verifyUserExists(username_User_180); // Post-Update Fidelity Check
  // -> Deleting Leaf User (Standard)
  deleteUser(username_User_180);
  verifyUserDoesNotExist(username_User_180);

});

// --- PHASE 3: HYPER-COORDINATED AGENTS ---
// --- PHASE 1: GLOBAL HYPER-SEEDING for Petstore ---
bthread("hyper:Petstore:GlobalSeeder", function() {
  bp.log.info("Seeding system for hyper-coordinated testing...");
    let additionalMetadata_Pet_init_0 = "additionalMetadata_Pet_init_0_" + Math.floor(Math.random()*1000);
    let api_key_Pet_init_0 = "api_key_Pet_init_0_" + Math.floor(Math.random()*1000);
    let category_Pet_init_0 = { "id": 1, "name": "val_Pet_init_0" };
    let file_Pet_init_0 = "file_Pet_init_0_" + Math.floor(Math.random()*1000);
    let name_Pet_init_0 = "doggie";
    let petId_Pet_init_0 = Math.floor(Math.random() * 1000);
    let photoUrls_Pet_init_0 = [];
    let status_Pet_init_0 = "available";
    let tags_Pet_init_0 = [];
    addPet(additionalMetadata_Pet_init_0, api_key_Pet_init_0, category_Pet_init_0, file_Pet_init_0, name_Pet_init_0, petId_Pet_init_0, photoUrls_Pet_init_0, status_Pet_init_0, tags_Pet_init_0, { expectedResponseCodes: [200, 201, 204] });
    let additionalMetadata_Pet_init_1 = "additionalMetadata_Pet_init_1_" + Math.floor(Math.random()*1000);
    let api_key_Pet_init_1 = "api_key_Pet_init_1_" + Math.floor(Math.random()*1000);
    let category_Pet_init_1 = { "id": 1, "name": "val_Pet_init_1" };
    let file_Pet_init_1 = "file_Pet_init_1_" + Math.floor(Math.random()*1000);
    let name_Pet_init_1 = "doggie";
    let petId_Pet_init_1 = Math.floor(Math.random() * 1000);
    let photoUrls_Pet_init_1 = [];
    let status_Pet_init_1 = "available";
    let tags_Pet_init_1 = [];
    addPet(additionalMetadata_Pet_init_1, api_key_Pet_init_1, category_Pet_init_1, file_Pet_init_1, name_Pet_init_1, petId_Pet_init_1, photoUrls_Pet_init_1, status_Pet_init_1, tags_Pet_init_1, { expectedResponseCodes: [200, 201, 204] });
    let additionalMetadata_Pet_init_2 = "additionalMetadata_Pet_init_2_" + Math.floor(Math.random()*1000);
    let api_key_Pet_init_2 = "api_key_Pet_init_2_" + Math.floor(Math.random()*1000);
    let category_Pet_init_2 = { "id": 1, "name": "val_Pet_init_2" };
    let file_Pet_init_2 = "file_Pet_init_2_" + Math.floor(Math.random()*1000);
    let name_Pet_init_2 = "doggie";
    let petId_Pet_init_2 = Math.floor(Math.random() * 1000);
    let photoUrls_Pet_init_2 = [];
    let status_Pet_init_2 = "available";
    let tags_Pet_init_2 = [];
    addPet(additionalMetadata_Pet_init_2, api_key_Pet_init_2, category_Pet_init_2, file_Pet_init_2, name_Pet_init_2, petId_Pet_init_2, photoUrls_Pet_init_2, status_Pet_init_2, tags_Pet_init_2, { expectedResponseCodes: [200, 201, 204] });
    let additionalMetadata_Pet_init_3 = "additionalMetadata_Pet_init_3_" + Math.floor(Math.random()*1000);
    let api_key_Pet_init_3 = "api_key_Pet_init_3_" + Math.floor(Math.random()*1000);
    let category_Pet_init_3 = { "id": 1, "name": "val_Pet_init_3" };
    let file_Pet_init_3 = "file_Pet_init_3_" + Math.floor(Math.random()*1000);
    let name_Pet_init_3 = "doggie";
    let petId_Pet_init_3 = Math.floor(Math.random() * 1000);
    let photoUrls_Pet_init_3 = [];
    let status_Pet_init_3 = "available";
    let tags_Pet_init_3 = [];
    addPet(additionalMetadata_Pet_init_3, api_key_Pet_init_3, category_Pet_init_3, file_Pet_init_3, name_Pet_init_3, petId_Pet_init_3, photoUrls_Pet_init_3, status_Pet_init_3, tags_Pet_init_3, { expectedResponseCodes: [200, 201, 204] });
    let additionalMetadata_Pet_init_4 = "additionalMetadata_Pet_init_4_" + Math.floor(Math.random()*1000);
    let api_key_Pet_init_4 = "api_key_Pet_init_4_" + Math.floor(Math.random()*1000);
    let category_Pet_init_4 = { "id": 1, "name": "val_Pet_init_4" };
    let file_Pet_init_4 = "file_Pet_init_4_" + Math.floor(Math.random()*1000);
    let name_Pet_init_4 = "doggie";
    let petId_Pet_init_4 = Math.floor(Math.random() * 1000);
    let photoUrls_Pet_init_4 = [];
    let status_Pet_init_4 = "available";
    let tags_Pet_init_4 = [];
    addPet(additionalMetadata_Pet_init_4, api_key_Pet_init_4, category_Pet_init_4, file_Pet_init_4, name_Pet_init_4, petId_Pet_init_4, photoUrls_Pet_init_4, status_Pet_init_4, tags_Pet_init_4, { expectedResponseCodes: [200, 201, 204] });
    let additionalMetadata_Pet_init_5 = "additionalMetadata_Pet_init_5_" + Math.floor(Math.random()*1000);
    let api_key_Pet_init_5 = "api_key_Pet_init_5_" + Math.floor(Math.random()*1000);
    let category_Pet_init_5 = { "id": 1, "name": "val_Pet_init_5" };
    let file_Pet_init_5 = "file_Pet_init_5_" + Math.floor(Math.random()*1000);
    let name_Pet_init_5 = "doggie";
    let petId_Pet_init_5 = Math.floor(Math.random() * 1000);
    let photoUrls_Pet_init_5 = [];
    let status_Pet_init_5 = "available";
    let tags_Pet_init_5 = [];
    addPet(additionalMetadata_Pet_init_5, api_key_Pet_init_5, category_Pet_init_5, file_Pet_init_5, name_Pet_init_5, petId_Pet_init_5, photoUrls_Pet_init_5, status_Pet_init_5, tags_Pet_init_5, { expectedResponseCodes: [200, 201, 204] });
    let additionalMetadata_Pet_init_6 = "additionalMetadata_Pet_init_6_" + Math.floor(Math.random()*1000);
    let api_key_Pet_init_6 = "api_key_Pet_init_6_" + Math.floor(Math.random()*1000);
    let category_Pet_init_6 = { "id": 1, "name": "val_Pet_init_6" };
    let file_Pet_init_6 = "file_Pet_init_6_" + Math.floor(Math.random()*1000);
    let name_Pet_init_6 = "doggie";
    let petId_Pet_init_6 = Math.floor(Math.random() * 1000);
    let photoUrls_Pet_init_6 = [];
    let status_Pet_init_6 = "available";
    let tags_Pet_init_6 = [];
    addPet(additionalMetadata_Pet_init_6, api_key_Pet_init_6, category_Pet_init_6, file_Pet_init_6, name_Pet_init_6, petId_Pet_init_6, photoUrls_Pet_init_6, status_Pet_init_6, tags_Pet_init_6, { expectedResponseCodes: [200, 201, 204] });
    let additionalMetadata_Pet_init_7 = "additionalMetadata_Pet_init_7_" + Math.floor(Math.random()*1000);
    let api_key_Pet_init_7 = "api_key_Pet_init_7_" + Math.floor(Math.random()*1000);
    let category_Pet_init_7 = { "id": 1, "name": "val_Pet_init_7" };
    let file_Pet_init_7 = "file_Pet_init_7_" + Math.floor(Math.random()*1000);
    let name_Pet_init_7 = "doggie";
    let petId_Pet_init_7 = Math.floor(Math.random() * 1000);
    let photoUrls_Pet_init_7 = [];
    let status_Pet_init_7 = "available";
    let tags_Pet_init_7 = [];
    addPet(additionalMetadata_Pet_init_7, api_key_Pet_init_7, category_Pet_init_7, file_Pet_init_7, name_Pet_init_7, petId_Pet_init_7, photoUrls_Pet_init_7, status_Pet_init_7, tags_Pet_init_7, { expectedResponseCodes: [200, 201, 204] });
    let additionalMetadata_Pet_init_8 = "additionalMetadata_Pet_init_8_" + Math.floor(Math.random()*1000);
    let api_key_Pet_init_8 = "api_key_Pet_init_8_" + Math.floor(Math.random()*1000);
    let category_Pet_init_8 = { "id": 1, "name": "val_Pet_init_8" };
    let file_Pet_init_8 = "file_Pet_init_8_" + Math.floor(Math.random()*1000);
    let name_Pet_init_8 = "doggie";
    let petId_Pet_init_8 = Math.floor(Math.random() * 1000);
    let photoUrls_Pet_init_8 = [];
    let status_Pet_init_8 = "available";
    let tags_Pet_init_8 = [];
    addPet(additionalMetadata_Pet_init_8, api_key_Pet_init_8, category_Pet_init_8, file_Pet_init_8, name_Pet_init_8, petId_Pet_init_8, photoUrls_Pet_init_8, status_Pet_init_8, tags_Pet_init_8, { expectedResponseCodes: [200, 201, 204] });
    let additionalMetadata_Pet_init_9 = "additionalMetadata_Pet_init_9_" + Math.floor(Math.random()*1000);
    let api_key_Pet_init_9 = "api_key_Pet_init_9_" + Math.floor(Math.random()*1000);
    let category_Pet_init_9 = { "id": 1, "name": "val_Pet_init_9" };
    let file_Pet_init_9 = "file_Pet_init_9_" + Math.floor(Math.random()*1000);
    let name_Pet_init_9 = "doggie";
    let petId_Pet_init_9 = Math.floor(Math.random() * 1000);
    let photoUrls_Pet_init_9 = [];
    let status_Pet_init_9 = "available";
    let tags_Pet_init_9 = [];
    addPet(additionalMetadata_Pet_init_9, api_key_Pet_init_9, category_Pet_init_9, file_Pet_init_9, name_Pet_init_9, petId_Pet_init_9, photoUrls_Pet_init_9, status_Pet_init_9, tags_Pet_init_9, { expectedResponseCodes: [200, 201, 204] });
    let email_User_init_0 = "john@email.com";
    let firstName_User_init_0 = "John";
    let lastName_User_init_0 = "James";
    let password_User_init_0 = "12345";
    let phone_User_init_0 = "12345";
    let userStatus_User_init_0 = Math.floor(Math.random() * 1000);
    let username_User_init_0 = "theUser";
    createUsersWithListInput(email_User_init_0, firstName_User_init_0, lastName_User_init_0, password_User_init_0, phone_User_init_0, userStatus_User_init_0, username_User_init_0, { expectedResponseCodes: [200, 201, 204] });
    let email_User_init_1 = "john@email.com";
    let firstName_User_init_1 = "John";
    let lastName_User_init_1 = "James";
    let password_User_init_1 = "12345";
    let phone_User_init_1 = "12345";
    let userStatus_User_init_1 = Math.floor(Math.random() * 1000);
    let username_User_init_1 = "theUser";
    createUsersWithListInput(email_User_init_1, firstName_User_init_1, lastName_User_init_1, password_User_init_1, phone_User_init_1, userStatus_User_init_1, username_User_init_1, { expectedResponseCodes: [200, 201, 204] });
    let email_User_init_2 = "john@email.com";
    let firstName_User_init_2 = "John";
    let lastName_User_init_2 = "James";
    let password_User_init_2 = "12345";
    let phone_User_init_2 = "12345";
    let userStatus_User_init_2 = Math.floor(Math.random() * 1000);
    let username_User_init_2 = "theUser";
    createUsersWithListInput(email_User_init_2, firstName_User_init_2, lastName_User_init_2, password_User_init_2, phone_User_init_2, userStatus_User_init_2, username_User_init_2, { expectedResponseCodes: [200, 201, 204] });
    let email_User_init_3 = "john@email.com";
    let firstName_User_init_3 = "John";
    let lastName_User_init_3 = "James";
    let password_User_init_3 = "12345";
    let phone_User_init_3 = "12345";
    let userStatus_User_init_3 = Math.floor(Math.random() * 1000);
    let username_User_init_3 = "theUser";
    createUsersWithListInput(email_User_init_3, firstName_User_init_3, lastName_User_init_3, password_User_init_3, phone_User_init_3, userStatus_User_init_3, username_User_init_3, { expectedResponseCodes: [200, 201, 204] });
    let email_User_init_4 = "john@email.com";
    let firstName_User_init_4 = "John";
    let lastName_User_init_4 = "James";
    let password_User_init_4 = "12345";
    let phone_User_init_4 = "12345";
    let userStatus_User_init_4 = Math.floor(Math.random() * 1000);
    let username_User_init_4 = "theUser";
    createUsersWithListInput(email_User_init_4, firstName_User_init_4, lastName_User_init_4, password_User_init_4, phone_User_init_4, userStatus_User_init_4, username_User_init_4, { expectedResponseCodes: [200, 201, 204] });
    let email_User_init_5 = "john@email.com";
    let firstName_User_init_5 = "John";
    let lastName_User_init_5 = "James";
    let password_User_init_5 = "12345";
    let phone_User_init_5 = "12345";
    let userStatus_User_init_5 = Math.floor(Math.random() * 1000);
    let username_User_init_5 = "theUser";
    createUsersWithListInput(email_User_init_5, firstName_User_init_5, lastName_User_init_5, password_User_init_5, phone_User_init_5, userStatus_User_init_5, username_User_init_5, { expectedResponseCodes: [200, 201, 204] });
    let email_User_init_6 = "john@email.com";
    let firstName_User_init_6 = "John";
    let lastName_User_init_6 = "James";
    let password_User_init_6 = "12345";
    let phone_User_init_6 = "12345";
    let userStatus_User_init_6 = Math.floor(Math.random() * 1000);
    let username_User_init_6 = "theUser";
    createUsersWithListInput(email_User_init_6, firstName_User_init_6, lastName_User_init_6, password_User_init_6, phone_User_init_6, userStatus_User_init_6, username_User_init_6, { expectedResponseCodes: [200, 201, 204] });
    let email_User_init_7 = "john@email.com";
    let firstName_User_init_7 = "John";
    let lastName_User_init_7 = "James";
    let password_User_init_7 = "12345";
    let phone_User_init_7 = "12345";
    let userStatus_User_init_7 = Math.floor(Math.random() * 1000);
    let username_User_init_7 = "theUser";
    createUsersWithListInput(email_User_init_7, firstName_User_init_7, lastName_User_init_7, password_User_init_7, phone_User_init_7, userStatus_User_init_7, username_User_init_7, { expectedResponseCodes: [200, 201, 204] });
    let email_User_init_8 = "john@email.com";
    let firstName_User_init_8 = "John";
    let lastName_User_init_8 = "James";
    let password_User_init_8 = "12345";
    let phone_User_init_8 = "12345";
    let userStatus_User_init_8 = Math.floor(Math.random() * 1000);
    let username_User_init_8 = "theUser";
    createUsersWithListInput(email_User_init_8, firstName_User_init_8, lastName_User_init_8, password_User_init_8, phone_User_init_8, userStatus_User_init_8, username_User_init_8, { expectedResponseCodes: [200, 201, 204] });
    let email_User_init_9 = "john@email.com";
    let firstName_User_init_9 = "John";
    let lastName_User_init_9 = "James";
    let password_User_init_9 = "12345";
    let phone_User_init_9 = "12345";
    let userStatus_User_init_9 = Math.floor(Math.random() * 1000);
    let username_User_init_9 = "theUser";
    createUsersWithListInput(email_User_init_9, firstName_User_init_9, lastName_User_init_9, password_User_init_9, phone_User_init_9, userStatus_User_init_9, username_User_init_9, { expectedResponseCodes: [200, 201, 204] });
  bp.sync({ request: bp.Event("Done: Hyper_Seeding_Complete") });
});

// --- Hyper-Story Constellation Copy 1 ---
bthread("hyper:Petstore:copy1:PetManager", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: add -> addPet
    addPet(activeId);
    // Chain step 1: update -> updatePet
    updatePet(activeId);
    // Chain step 2: list -> findPetsByStatus
    findPetsByStatus(activeId);
    // Chain step 3: get -> getPetById
    getPetById(activeId);
    // Chain step 4: delete -> deletePet
    deletePet(activeId);
  }
});
bthread("hyper:Petstore:copy1:StoreKeeper", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: add -> addPet
    addPet(activeId);
    // Chain step 1: list -> findPetsByStatus
    findPetsByStatus(activeId);
    // Chain step 2: get -> getPetById
    getPetById(activeId);
    // Chain step 3: delete -> deletePet
    deletePet(activeId);
  }
});
bthread("hyper:Petstore:copy1:UserAdmin", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: add -> addPet
    addPet(activeId);
    // Chain step 1: update -> updatePet
    updatePet(activeId);
    // Chain step 2: list -> findPetsByStatus
    findPetsByStatus(activeId);
    // Chain step 3: get -> getPetById
    getPetById(activeId);
    // Chain step 4: delete -> deletePet
    deletePet(activeId);
  }
});
bthread("hyper:Petstore:copy1:ContentModerator", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: add -> addPet
    addPet(activeId);
    // Chain step 1: uploadImage -> uploadFile
    uploadFile(activeId);
    // Chain step 2: updateWithForm -> updatePetWithForm
    updatePetWithForm(activeId);
    // Chain step 3: get -> getPetById
    getPetById(activeId);
  }
});
bthread("hyper:Petstore:copy1:ReportGenerator", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: list -> findPetsByStatus
    findPetsByStatus(activeId);
    // Chain step 1: listByTags -> findPetsByTags
    findPetsByTags(activeId);
    // Chain step 2: get -> getPetById
    getPetById(activeId);
    // Chain step 3: add -> addPet
    addPet(activeId);
  }
});
// --- Hyper-Story Constellation Copy 2 ---
bthread("hyper:Petstore:copy2:PetManager", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: add -> addPet
    addPet(activeId);
    // Chain step 1: update -> updatePet
    updatePet(activeId);
    // Chain step 2: list -> findPetsByStatus
    findPetsByStatus(activeId);
    // Chain step 3: get -> getPetById
    getPetById(activeId);
    // Chain step 4: delete -> deletePet
    deletePet(activeId);
  }
});
bthread("hyper:Petstore:copy2:StoreKeeper", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: add -> addPet
    addPet(activeId);
    // Chain step 1: list -> findPetsByStatus
    findPetsByStatus(activeId);
    // Chain step 2: get -> getPetById
    getPetById(activeId);
    // Chain step 3: delete -> deletePet
    deletePet(activeId);
  }
});
bthread("hyper:Petstore:copy2:UserAdmin", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: add -> addPet
    addPet(activeId);
    // Chain step 1: update -> updatePet
    updatePet(activeId);
    // Chain step 2: list -> findPetsByStatus
    findPetsByStatus(activeId);
    // Chain step 3: get -> getPetById
    getPetById(activeId);
    // Chain step 4: delete -> deletePet
    deletePet(activeId);
  }
});
bthread("hyper:Petstore:copy2:ContentModerator", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: add -> addPet
    addPet(activeId);
    // Chain step 1: uploadImage -> uploadFile
    uploadFile(activeId);
    // Chain step 2: updateWithForm -> updatePetWithForm
    updatePetWithForm(activeId);
    // Chain step 3: get -> getPetById
    getPetById(activeId);
  }
});
bthread("hyper:Petstore:copy2:ReportGenerator", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: list -> findPetsByStatus
    findPetsByStatus(activeId);
    // Chain step 1: listByTags -> findPetsByTags
    findPetsByTags(activeId);
    // Chain step 2: get -> getPetById
    getPetById(activeId);
    // Chain step 3: add -> addPet
    addPet(activeId);
  }
});
// --- Hyper-Story Constellation Copy 3 ---
bthread("hyper:Petstore:copy3:PetManager", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: add -> addPet
    addPet(activeId);
    // Chain step 1: update -> updatePet
    updatePet(activeId);
    // Chain step 2: list -> findPetsByStatus
    findPetsByStatus(activeId);
    // Chain step 3: get -> getPetById
    getPetById(activeId);
    // Chain step 4: delete -> deletePet
    deletePet(activeId);
  }
});
bthread("hyper:Petstore:copy3:StoreKeeper", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: add -> addPet
    addPet(activeId);
    // Chain step 1: list -> findPetsByStatus
    findPetsByStatus(activeId);
    // Chain step 2: get -> getPetById
    getPetById(activeId);
    // Chain step 3: delete -> deletePet
    deletePet(activeId);
  }
});
bthread("hyper:Petstore:copy3:UserAdmin", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: add -> addPet
    addPet(activeId);
    // Chain step 1: update -> updatePet
    updatePet(activeId);
    // Chain step 2: list -> findPetsByStatus
    findPetsByStatus(activeId);
    // Chain step 3: get -> getPetById
    getPetById(activeId);
    // Chain step 4: delete -> deletePet
    deletePet(activeId);
  }
});
bthread("hyper:Petstore:copy3:ContentModerator", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: add -> addPet
    addPet(activeId);
    // Chain step 1: uploadImage -> uploadFile
    uploadFile(activeId);
    // Chain step 2: updateWithForm -> updatePetWithForm
    updatePetWithForm(activeId);
    // Chain step 3: get -> getPetById
    getPetById(activeId);
  }
});
bthread("hyper:Petstore:copy3:ReportGenerator", function() {
  waitFor(bp.Event("Done: Hyper_Seeding_Complete"));
  while(true) {
    let e_0 = waitFor(matchAnyPetAdded());
    let activeId = e_0.data.id || e_0.data.PetId;
    // Chain step 0: list -> findPetsByStatus
    findPetsByStatus(activeId);
    // Chain step 1: listByTags -> findPetsByTags
    findPetsByTags(activeId);
    // Chain step 2: get -> getPetById
    getPetById(activeId);
    // Chain step 3: add -> addPet
    addPet(activeId);
  }
});

// --- PHASE 4: HYPER-NEGATIVE ADVERSARIES ---
// --- EVIL COORDINATED AGENTS for Petstore (Copy 1) ---
bthread("hyper:evil:copy1:Saboteur_Pet", function() {
  while(true) {
    let e = waitFor(matchAnyPetAdded());
    let targetId = e.data.id || e.data.PetId;
    // EVIL: Execute deletePet while positive agents are active
    deletePet(targetId);
    // Verification of Chaos: Trigger 500 on dead resource
    getPetById(targetId);
  }
});
bthread("hyper:evil:copy1:Saboteur_User", function() {
  while(true) {
    let e = waitFor(matchAnyUserAdded());
    let targetId = e.data.id || e.data.UserId;
    // EVIL: Execute updateUser while positive agents are active
    updateUser(targetId);
    // Verification of Chaos: Trigger 500 on dead resource
    getUserByName(targetId);
  }
});
bthread("hyper:evil:copy1:Saboteur_Store", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    let targetId = e.data.id || e.data.StoreId;
    // EVIL: Execute deleteOrder while positive agents are active
    deleteOrder(targetId);
    // Verification of Chaos: Trigger 500 on dead resource
    getOrderById(targetId);
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Store", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    let pId = e.data.PetId || e.data.id;
    // Path 2: Parent Erasure (Breaking Integrity)
    deletePet(pId);
    // Path 3: Child Sabotage (Triggering 500 Join Error)
    let childId = e.data.id || e.data.StoreId;
    getOrderById(childId);
  }
});
// --- EVIL COORDINATED AGENTS for Petstore (Copy 2) ---
bthread("hyper:evil:copy2:Saboteur_Pet", function() {
  while(true) {
    let e = waitFor(matchAnyPetAdded());
    let targetId = e.data.id || e.data.PetId;
    // EVIL: Execute deletePet while positive agents are active
    deletePet(targetId);
    // Verification of Chaos: Trigger 500 on dead resource
    getPetById(targetId);
  }
});
bthread("hyper:evil:copy2:Saboteur_User", function() {
  while(true) {
    let e = waitFor(matchAnyUserAdded());
    let targetId = e.data.id || e.data.UserId;
    // EVIL: Execute updateUser while positive agents are active
    updateUser(targetId);
    // Verification of Chaos: Trigger 500 on dead resource
    getUserByName(targetId);
  }
});
bthread("hyper:evil:copy2:Saboteur_Store", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    let targetId = e.data.id || e.data.StoreId;
    // EVIL: Execute deleteOrder while positive agents are active
    deleteOrder(targetId);
    // Verification of Chaos: Trigger 500 on dead resource
    getOrderById(targetId);
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Store", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    let pId = e.data.PetId || e.data.id;
    // Path 2: Parent Erasure (Breaking Integrity)
    deletePet(pId);
    // Path 3: Child Sabotage (Triggering 500 Join Error)
    let childId = e.data.id || e.data.StoreId;
    getOrderById(childId);
  }
});
// --- EVIL COORDINATED AGENTS for Petstore (Copy 3) ---
bthread("hyper:evil:copy3:Saboteur_Pet", function() {
  while(true) {
    let e = waitFor(matchAnyPetAdded());
    let targetId = e.data.id || e.data.PetId;
    // EVIL: Execute deletePet while positive agents are active
    deletePet(targetId);
    // Verification of Chaos: Trigger 500 on dead resource
    getPetById(targetId);
  }
});
bthread("hyper:evil:copy3:Saboteur_User", function() {
  while(true) {
    let e = waitFor(matchAnyUserAdded());
    let targetId = e.data.id || e.data.UserId;
    // EVIL: Execute updateUser while positive agents are active
    updateUser(targetId);
    // Verification of Chaos: Trigger 500 on dead resource
    getUserByName(targetId);
  }
});
bthread("hyper:evil:copy3:Saboteur_Store", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    let targetId = e.data.id || e.data.StoreId;
    // EVIL: Execute deleteOrder while positive agents are active
    deleteOrder(targetId);
    // Verification of Chaos: Trigger 500 on dead resource
    getOrderById(targetId);
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Store", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    let pId = e.data.PetId || e.data.id;
    // Path 2: Parent Erasure (Breaking Integrity)
    deletePet(pId);
    // Path 3: Child Sabotage (Triggering 500 Join Error)
    let childId = e.data.id || e.data.StoreId;
    getOrderById(childId);
  }
});
