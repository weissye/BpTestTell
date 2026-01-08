// Auto-generated stories for PetshopStore
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
// Monitor: Pet Verification (Existence)
bthread("monitor:Pet:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPetAdded() });
    let additionalMetadata = (e.data.parameters && e.data.parameters["additionalMetadata"]) ? e.data.parameters["additionalMetadata"] : e.data["additionalMetadata"];
    let api_key = (e.data.parameters && e.data.parameters["api_key"]) ? e.data.parameters["api_key"] : e.data["api_key"];
    let category = (e.data.parameters && e.data.parameters["category"]) ? e.data.parameters["category"] : e.data["category"];
    let file = (e.data.parameters && e.data.parameters["file"]) ? e.data.parameters["file"] : e.data["file"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let petId = (e.data.parameters && e.data.parameters["petId"]) ? e.data.parameters["petId"] : e.data["petId"];
    let photoUrls = (e.data.parameters && e.data.parameters["photoUrls"]) ? e.data.parameters["photoUrls"] : e.data["photoUrls"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    let tags = (e.data.parameters && e.data.parameters["tags"]) ? e.data.parameters["tags"] : e.data["tags"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPet(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags), function() { verifyPetExists(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags); });
  }
});

// Monitor: Pet Verification (Absence)
bthread("monitor:Pet:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedPet() });
    let additionalMetadata = (e.data.parameters && e.data.parameters["additionalMetadata"]) ? e.data.parameters["additionalMetadata"] : e.data["additionalMetadata"];
    let api_key = (e.data.parameters && e.data.parameters["api_key"]) ? e.data.parameters["api_key"] : e.data["api_key"];
    let category = (e.data.parameters && e.data.parameters["category"]) ? e.data.parameters["category"] : e.data["category"];
    let file = (e.data.parameters && e.data.parameters["file"]) ? e.data.parameters["file"] : e.data["file"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let petId = (e.data.parameters && e.data.parameters["petId"]) ? e.data.parameters["petId"] : e.data["petId"];
    let photoUrls = (e.data.parameters && e.data.parameters["photoUrls"]) ? e.data.parameters["photoUrls"] : e.data["photoUrls"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    let tags = (e.data.parameters && e.data.parameters["tags"]) ? e.data.parameters["tags"] : e.data["tags"];
    // Block Creation while Verifying Absence
    block(matchAnyPetAdded(), function() { verifyPetDoesNotExist(additionalMetadata, api_key, category, file, name, petId, photoUrls, status, tags); });
  }
});

// Monitor: Store Verification (Existence)
bthread("monitor:Store:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyStoreAdded() });
    let complete = (e.data.parameters && e.data.parameters["complete"]) ? e.data.parameters["complete"] : e.data["complete"];
    let orderId = (e.data.parameters && e.data.parameters["orderId"]) ? e.data.parameters["orderId"] : e.data["orderId"];
    let petId = (e.data.parameters && e.data.parameters["petId"]) ? e.data.parameters["petId"] : e.data["petId"];
    let quantity = (e.data.parameters && e.data.parameters["quantity"]) ? e.data.parameters["quantity"] : e.data["quantity"];
    let shipDate = (e.data.parameters && e.data.parameters["shipDate"]) ? e.data.parameters["shipDate"] : e.data["shipDate"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    // Block Deletion while Verifying Existence
    block(matchDeletedStore(complete, orderId, petId, quantity, shipDate, status), function() { verifyStoreExists(complete, orderId, petId, quantity, shipDate, status); });
  }
});

// Monitor: Store Verification (Absence)
bthread("monitor:Store:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedStore() });
    let complete = (e.data.parameters && e.data.parameters["complete"]) ? e.data.parameters["complete"] : e.data["complete"];
    let orderId = (e.data.parameters && e.data.parameters["orderId"]) ? e.data.parameters["orderId"] : e.data["orderId"];
    let petId = (e.data.parameters && e.data.parameters["petId"]) ? e.data.parameters["petId"] : e.data["petId"];
    let quantity = (e.data.parameters && e.data.parameters["quantity"]) ? e.data.parameters["quantity"] : e.data["quantity"];
    let shipDate = (e.data.parameters && e.data.parameters["shipDate"]) ? e.data.parameters["shipDate"] : e.data["shipDate"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    // Block Creation while Verifying Absence
    block(matchAnyStoreAdded(), function() { verifyStoreDoesNotExist(complete, orderId, petId, quantity, shipDate, status); });
  }
});

// Monitor: User Verification (Existence)
bthread("monitor:User:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUserAdded() });
    let email = (e.data.parameters && e.data.parameters["email"]) ? e.data.parameters["email"] : e.data["email"];
    let firstName = (e.data.parameters && e.data.parameters["firstName"]) ? e.data.parameters["firstName"] : e.data["firstName"];
    let lastName = (e.data.parameters && e.data.parameters["lastName"]) ? e.data.parameters["lastName"] : e.data["lastName"];
    let password = (e.data.parameters && e.data.parameters["password"]) ? e.data.parameters["password"] : e.data["password"];
    let phone = (e.data.parameters && e.data.parameters["phone"]) ? e.data.parameters["phone"] : e.data["phone"];
    let userStatus = (e.data.parameters && e.data.parameters["userStatus"]) ? e.data.parameters["userStatus"] : e.data["userStatus"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Deletion while Verifying Existence
    block(matchDeletedUser(email, firstName, lastName, password, phone, userStatus, username), function() { verifyUserExists(email, firstName, lastName, password, phone, userStatus, username); });
  }
});

// Monitor: User Verification (Absence)
bthread("monitor:User:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedUser() });
    let email = (e.data.parameters && e.data.parameters["email"]) ? e.data.parameters["email"] : e.data["email"];
    let firstName = (e.data.parameters && e.data.parameters["firstName"]) ? e.data.parameters["firstName"] : e.data["firstName"];
    let lastName = (e.data.parameters && e.data.parameters["lastName"]) ? e.data.parameters["lastName"] : e.data["lastName"];
    let password = (e.data.parameters && e.data.parameters["password"]) ? e.data.parameters["password"] : e.data["password"];
    let phone = (e.data.parameters && e.data.parameters["phone"]) ? e.data.parameters["phone"] : e.data["phone"];
    let userStatus = (e.data.parameters && e.data.parameters["userStatus"]) ? e.data.parameters["userStatus"] : e.data["userStatus"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Block Creation while Verifying Absence
    block(matchAnyUserAdded(), function() { verifyUserDoesNotExist(email, firstName, lastName, password, phone, userStatus, username); });
  }
});

// Story: crud:Pet:linear:1
bthread("crud:Pet:linear:1", function () {
  // -> Creating Pet
  let additionalMetadata_Pet_100 = "additionalMetadata_Pet_100_" + Math.floor(Math.random()*1000);
  let api_key_Pet_100 = "api_key_Pet_100_" + Math.floor(Math.random()*1000);
  let category_Pet_100 = "category_Pet_100_" + Math.floor(Math.random()*1000);
  let file_Pet_100 = "file_Pet_100_" + Math.floor(Math.random()*1000);
  let name_Pet_100 = "doggie";
  let petId_Pet_100 = Math.floor(Math.random() * 1000);
  let photoUrls_Pet_100 = [];
  let status_Pet_100 = "active";
  let tags_Pet_100 = [];
  addPet(additionalMetadata_Pet_100, api_key_Pet_100, category_Pet_100, file_Pet_100, name_Pet_100, petId_Pet_100, photoUrls_Pet_100, status_Pet_100, tags_Pet_100, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Pet
  let additionalMetadata_Pet_upd_100 = "additionalMetadata_Pet_upd_100_" + Math.floor(Math.random()*1000);
  let api_key_Pet_upd_100 = "api_key_Pet_upd_100_" + Math.floor(Math.random()*1000);
  let category_Pet_upd_100 = "category_Pet_upd_100_" + Math.floor(Math.random()*1000);
  let file_Pet_upd_100 = "file_Pet_upd_100_" + Math.floor(Math.random()*1000);
  let name_Pet_upd_100 = "doggie";
  let petId_Pet_upd_100 = petId_Pet_100;
  let photoUrls_Pet_upd_100 = [];
  let status_Pet_upd_100 = "active";
  let tags_Pet_upd_100 = [];
  updatePet(additionalMetadata_Pet_upd_100, api_key_Pet_upd_100, category_Pet_upd_100, file_Pet_upd_100, name_Pet_upd_100, petId_Pet_upd_100, photoUrls_Pet_upd_100, status_Pet_upd_100, tags_Pet_upd_100, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Pet to prevent foreign key errors (has active dependents)
});

// Story: crud:Store:linear:1
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
  let status_Store_110 = "active";
  placeOrder(complete_Store_110, orderId_Store_110, petId_Store_110, quantity_Store_110, shipDate_Store_110, status_Store_110, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Store
  deleteOrder(orderId_Store_110, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:User:linear:1
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

  // -> Updating User
  let email_User_upd_120 = "john@email.com";
  let firstName_User_upd_120 = "John";
  let lastName_User_upd_120 = "James";
  let password_User_upd_120 = "12345";
  let phone_User_upd_120 = "12345";
  let userStatus_User_upd_120 = Math.floor(Math.random() * 1000);
  let username_User_upd_120 = username_User_120;
  updateUser(email_User_upd_120, firstName_User_upd_120, lastName_User_upd_120, password_User_upd_120, phone_User_upd_120, userStatus_User_upd_120, username_User_upd_120, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting User
  deleteUser(username_User_120, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Pet:linear:2
bthread("crud:Pet:linear:2", function () {
  // -> Creating Pet
  let additionalMetadata_Pet_130 = "additionalMetadata_Pet_130_" + Math.floor(Math.random()*1000);
  let api_key_Pet_130 = "api_key_Pet_130_" + Math.floor(Math.random()*1000);
  let category_Pet_130 = "category_Pet_130_" + Math.floor(Math.random()*1000);
  let file_Pet_130 = "file_Pet_130_" + Math.floor(Math.random()*1000);
  let name_Pet_130 = "doggie";
  let petId_Pet_130 = Math.floor(Math.random() * 1000);
  let photoUrls_Pet_130 = [];
  let status_Pet_130 = "active";
  let tags_Pet_130 = [];
  addPet(additionalMetadata_Pet_130, api_key_Pet_130, category_Pet_130, file_Pet_130, name_Pet_130, petId_Pet_130, photoUrls_Pet_130, status_Pet_130, tags_Pet_130, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Pet
  let additionalMetadata_Pet_upd_130 = "additionalMetadata_Pet_upd_130_" + Math.floor(Math.random()*1000);
  let api_key_Pet_upd_130 = "api_key_Pet_upd_130_" + Math.floor(Math.random()*1000);
  let category_Pet_upd_130 = "category_Pet_upd_130_" + Math.floor(Math.random()*1000);
  let file_Pet_upd_130 = "file_Pet_upd_130_" + Math.floor(Math.random()*1000);
  let name_Pet_upd_130 = "doggie";
  let petId_Pet_upd_130 = petId_Pet_130;
  let photoUrls_Pet_upd_130 = [];
  let status_Pet_upd_130 = "active";
  let tags_Pet_upd_130 = [];
  updatePet(additionalMetadata_Pet_upd_130, api_key_Pet_upd_130, category_Pet_upd_130, file_Pet_upd_130, name_Pet_upd_130, petId_Pet_upd_130, photoUrls_Pet_upd_130, status_Pet_upd_130, tags_Pet_upd_130, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Pet to prevent foreign key errors (has active dependents)
});

// Story: crud:Store:linear:2
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
  let status_Store_140 = "active";
  placeOrder(complete_Store_140, orderId_Store_140, petId_Store_140, quantity_Store_140, shipDate_Store_140, status_Store_140, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Store
  deleteOrder(orderId_Store_140, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:User:linear:2
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

  // -> Updating User
  let email_User_upd_150 = "john@email.com";
  let firstName_User_upd_150 = "John";
  let lastName_User_upd_150 = "James";
  let password_User_upd_150 = "12345";
  let phone_User_upd_150 = "12345";
  let userStatus_User_upd_150 = Math.floor(Math.random() * 1000);
  let username_User_upd_150 = username_User_150;
  updateUser(email_User_upd_150, firstName_User_upd_150, lastName_User_upd_150, password_User_upd_150, phone_User_upd_150, userStatus_User_upd_150, username_User_upd_150, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting User
  deleteUser(username_User_150, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Pet:linear:3
bthread("crud:Pet:linear:3", function () {
  // -> Creating Pet
  let additionalMetadata_Pet_160 = "additionalMetadata_Pet_160_" + Math.floor(Math.random()*1000);
  let api_key_Pet_160 = "api_key_Pet_160_" + Math.floor(Math.random()*1000);
  let category_Pet_160 = "category_Pet_160_" + Math.floor(Math.random()*1000);
  let file_Pet_160 = "file_Pet_160_" + Math.floor(Math.random()*1000);
  let name_Pet_160 = "doggie";
  let petId_Pet_160 = Math.floor(Math.random() * 1000);
  let photoUrls_Pet_160 = [];
  let status_Pet_160 = "active";
  let tags_Pet_160 = [];
  addPet(additionalMetadata_Pet_160, api_key_Pet_160, category_Pet_160, file_Pet_160, name_Pet_160, petId_Pet_160, photoUrls_Pet_160, status_Pet_160, tags_Pet_160, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Pet
  let additionalMetadata_Pet_upd_160 = "additionalMetadata_Pet_upd_160_" + Math.floor(Math.random()*1000);
  let api_key_Pet_upd_160 = "api_key_Pet_upd_160_" + Math.floor(Math.random()*1000);
  let category_Pet_upd_160 = "category_Pet_upd_160_" + Math.floor(Math.random()*1000);
  let file_Pet_upd_160 = "file_Pet_upd_160_" + Math.floor(Math.random()*1000);
  let name_Pet_upd_160 = "doggie";
  let petId_Pet_upd_160 = petId_Pet_160;
  let photoUrls_Pet_upd_160 = [];
  let status_Pet_upd_160 = "active";
  let tags_Pet_upd_160 = [];
  updatePet(additionalMetadata_Pet_upd_160, api_key_Pet_upd_160, category_Pet_upd_160, file_Pet_upd_160, name_Pet_upd_160, petId_Pet_upd_160, photoUrls_Pet_upd_160, status_Pet_upd_160, tags_Pet_upd_160, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Pet to prevent foreign key errors (has active dependents)
});

// Story: crud:Store:linear:3
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
  let status_Store_170 = "active";
  placeOrder(complete_Store_170, orderId_Store_170, petId_Store_170, quantity_Store_170, shipDate_Store_170, status_Store_170, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Store
  deleteOrder(orderId_Store_170, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:User:linear:3
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

  // -> Updating User
  let email_User_upd_180 = "john@email.com";
  let firstName_User_upd_180 = "John";
  let lastName_User_upd_180 = "James";
  let password_User_upd_180 = "12345";
  let phone_User_upd_180 = "12345";
  let userStatus_User_upd_180 = Math.floor(Math.random() * 1000);
  let username_User_upd_180 = username_User_180;
  updateUser(email_User_upd_180, firstName_User_upd_180, lastName_User_upd_180, password_User_upd_180, phone_User_upd_180, userStatus_User_upd_180, username_User_upd_180, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting User
  deleteUser(username_User_180, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Pet_Store (Self-Contained)
bthread("chain:Pet_Store", function () {
  // -> Creating Pet
  let additionalMetadata_Pet_190 = "additionalMetadata_Pet_190_" + Math.floor(Math.random()*1000);
  let api_key_Pet_190 = "api_key_Pet_190_" + Math.floor(Math.random()*1000);
  let category_Pet_190 = "category_Pet_190_" + Math.floor(Math.random()*1000);
  let file_Pet_190 = "file_Pet_190_" + Math.floor(Math.random()*1000);
  let name_Pet_190 = "doggie";
  let petId_Pet_190 = Math.floor(Math.random() * 1000);
  let photoUrls_Pet_190 = [];
  let status_Pet_190 = "active";
  let tags_Pet_190 = [];
  addPet(additionalMetadata_Pet_190, api_key_Pet_190, category_Pet_190, file_Pet_190, name_Pet_190, petId_Pet_190, photoUrls_Pet_190, status_Pet_190, tags_Pet_190, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Store
  let complete_Store_190 = true;
  let orderId_Store_190 = Math.floor(Math.random() * 1000);
  let petId_Store_190 = petId_Pet_190;
  let quantity_Store_190 = Math.floor(Math.random() * 1000);
  let shipDate_Store_190 = "shipDate_Store_190_" + Math.floor(Math.random()*1000);
  let status_Store_190 = "active";
  placeOrder(complete_Store_190, orderId_Store_190, petId_Store_190, quantity_Store_190, shipDate_Store_190, status_Store_190, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Store
  deleteOrder(orderId_Store_190, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Pet
  deletePet(petId_Pet_190, { expectedResponseCodes: [200, 201, 204] });

});
