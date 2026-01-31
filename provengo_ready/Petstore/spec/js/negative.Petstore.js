// Auto-generated EVIL BACKGROUND AGENTS for Petstore
//@provengo summon rest

bthread("guard:Pet:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyPetAdded()); let id = e.data.petId || e.data.id;
    bp.sync({ block: bp.Event("Req:addPet:Success:" + id), waitFor: matchAnyPetDeleted() });
  } });
bthread("fuzz:fields:Pet", function() {
  while(true) {
    let e = waitFor(matchAnyPetAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Pet";
      let additionalMetadata_neg_Pet = "additionalMetadata_malformed_neg_Pet";
      let api_key_neg_Pet = "api_key_malformed_neg_Pet";
      let category_neg_Pet = "category_malformed_neg_Pet";
      let file_neg_Pet = "file_malformed_neg_Pet";
      let name_neg_Pet = "name_malformed_neg_Pet";
      let petId_neg_Pet = "petId_malformed_neg_Pet";
      let photoUrls_neg_Pet = "photoUrls_malformed_neg_Pet";
      let status_neg_Pet = "status_malformed_neg_Pet";
      let tags_neg_Pet = "tags_malformed_neg_Pet";
    verifyPetRejects(additionalMetadata_neg_Pet, api_key_neg_Pet, category_neg_Pet, file_neg_Pet, name_neg_Pet, petId_neg_Pet, photoUrls_neg_Pet, status_neg_Pet, tags_neg_Pet, { description: neg_desc });
  } });

bthread("evil:collision:Pet", function() {
  while (true) {
    let e = waitFor(matchAnyPetAdded());
    let liveId = e.data.petId || e.data.id;
    tryToAddExistingPet("additionalMetadata_collision", "api_key_collision", "category_collision", "file_collision", "name_collision", liveId, "photoUrls_collision", "status_collision", "tags_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Store:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyStoreAdded()); let id = e.data.orderId || e.data.id;
    bp.sync({ block: bp.Event("Req:placeOrder:Success:" + id), waitFor: matchAnyStoreDeleted() });
  } });
bthread("fuzz:fields:Store", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Store";
      let complete_neg_Store = "complete_malformed_neg_Store";
      let orderId_neg_Store = "orderId_malformed_neg_Store";
      let petId_neg_Store = "petId_malformed_neg_Store";
      let quantity_neg_Store = "quantity_malformed_neg_Store";
      let shipDate_neg_Store = "shipDate_malformed_neg_Store";
      let status_neg_Store = "status_malformed_neg_Store";
    verifyStoreRejects(complete_neg_Store, orderId_neg_Store, petId_neg_Store, quantity_neg_Store, shipDate_neg_Store, status_neg_Store, { description: neg_desc });
  } });

bthread("evil:collision:Store", function() {
  while (true) {
    let e = waitFor(matchAnyStoreAdded());
    let liveId = e.data.orderId || e.data.id;
    tryToAddExistingStore("complete_collision", liveId, "petId_collision", "quantity_collision", "shipDate_collision", "status_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:User:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyUserAdded()); let id = e.data.username || e.data.id;
    bp.sync({ block: bp.Event("Req:createUsersWithListInput:Success:" + id), waitFor: matchAnyUserDeleted() });
  } });
bthread("fuzz:fields:User", function() {
  while(true) {
    let e = waitFor(matchAnyUserAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for User";
      let email_neg_User = "email_malformed_neg_User";
      let firstName_neg_User = "firstName_malformed_neg_User";
      let lastName_neg_User = "lastName_malformed_neg_User";
      let password_neg_User = "password_malformed_neg_User";
      let phone_neg_User = "phone_malformed_neg_User";
      let userStatus_neg_User = "userStatus_malformed_neg_User";
      let username_neg_User = "username_malformed_neg_User";
    verifyUserRejects(email_neg_User, firstName_neg_User, lastName_neg_User, password_neg_User, phone_neg_User, userStatus_neg_User, username_neg_User, { description: neg_desc });
  } });

bthread("evil:collision:User", function() {
  while (true) {
    let e = waitFor(matchAnyUserAdded());
    let liveId = e.data.username || e.data.id;
    tryToAddExistingUser("email_collision", "firstName_collision", "lastName_collision", "password_collision", "phone_collision", "userStatus_collision", liveId, { description: "[NEGATIVE TEST] Collision Attack" });
  } });

// --- PHASE 4: COORDINATED VANDALISM (Hyper-Negative) ---
// --- EVIL COORDINATED AGENTS for Petstore (Copy 1) ---
bthread("hyper:Pet:copy1:Saboteur_delete", function() {
  while(true) {
    let e = waitFor(matchAnyPetAdded());
    let targetId = e.data.id;
    // Wait for the main test to finish its verification check
    bp.sync({ waitFor: bp.EventSet("Barrier: Pet Verified", function(ev) {
        return ev.name.includes("Verify Pet") && ev.name.includes(targetId);
    }) });
    deletePet(targetId);
    if (typeof getPetById === "function") { getPetById(targetId); }
  }
});
bthread("hyper:Store:copy1:Saboteur_delete", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    let targetId = e.data.id;
    // Wait for the main test to finish its verification check
    bp.sync({ waitFor: bp.EventSet("Barrier: Store Verified", function(ev) {
        return ev.name.includes("Verify Store") && ev.name.includes(targetId);
    }) });
    deleteOrder(targetId);
    if (typeof getStore === "function") { getStore(targetId); }
  }
});
bthread("hyper:User:copy1:Saboteur_update", function() {
  while(true) {
    let e = waitFor(matchAnyUserAdded());
    let targetId = e.data.id;
    // Wait for the main test to finish its verification check
    bp.sync({ waitFor: bp.EventSet("Barrier: User Verified", function(ev) {
        return ev.name.includes("Verify User") && ev.name.includes(targetId);
    }) });
    updateUser(null, null, null, null, null, null, targetId);
    if (typeof getUser === "function") { getUser(targetId); }
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Store_Pet", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    // Barrier: Ensure main test verifies Store before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Store Verified", function(ev) {
        return ev.name.includes("Verify Store") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.petId || e.data.id;
    deletePet(pId);
    let childId = e.data.orderId || e.data.id;
    getOrderById(childId);
  }
});
// --- EVIL COORDINATED AGENTS for Petstore (Copy 2) ---
bthread("hyper:Pet:copy2:Saboteur_delete", function() {
  while(true) {
    let e = waitFor(matchAnyPetAdded());
    let targetId = e.data.id;
    // Wait for the main test to finish its verification check
    bp.sync({ waitFor: bp.EventSet("Barrier: Pet Verified", function(ev) {
        return ev.name.includes("Verify Pet") && ev.name.includes(targetId);
    }) });
    deletePet(targetId);
    if (typeof getPetById === "function") { getPetById(targetId); }
  }
});
bthread("hyper:Store:copy2:Saboteur_delete", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    let targetId = e.data.id;
    // Wait for the main test to finish its verification check
    bp.sync({ waitFor: bp.EventSet("Barrier: Store Verified", function(ev) {
        return ev.name.includes("Verify Store") && ev.name.includes(targetId);
    }) });
    deleteOrder(targetId);
    if (typeof getStore === "function") { getStore(targetId); }
  }
});
bthread("hyper:User:copy2:Saboteur_update", function() {
  while(true) {
    let e = waitFor(matchAnyUserAdded());
    let targetId = e.data.id;
    // Wait for the main test to finish its verification check
    bp.sync({ waitFor: bp.EventSet("Barrier: User Verified", function(ev) {
        return ev.name.includes("Verify User") && ev.name.includes(targetId);
    }) });
    updateUser(null, null, null, null, null, null, targetId);
    if (typeof getUser === "function") { getUser(targetId); }
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Store_Pet", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    // Barrier: Ensure main test verifies Store before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Store Verified", function(ev) {
        return ev.name.includes("Verify Store") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.petId || e.data.id;
    deletePet(pId);
    let childId = e.data.orderId || e.data.id;
    getOrderById(childId);
  }
});
// --- EVIL COORDINATED AGENTS for Petstore (Copy 3) ---
bthread("hyper:Pet:copy3:Saboteur_delete", function() {
  while(true) {
    let e = waitFor(matchAnyPetAdded());
    let targetId = e.data.id;
    // Wait for the main test to finish its verification check
    bp.sync({ waitFor: bp.EventSet("Barrier: Pet Verified", function(ev) {
        return ev.name.includes("Verify Pet") && ev.name.includes(targetId);
    }) });
    deletePet(targetId);
    if (typeof getPetById === "function") { getPetById(targetId); }
  }
});
bthread("hyper:Store:copy3:Saboteur_delete", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    let targetId = e.data.id;
    // Wait for the main test to finish its verification check
    bp.sync({ waitFor: bp.EventSet("Barrier: Store Verified", function(ev) {
        return ev.name.includes("Verify Store") && ev.name.includes(targetId);
    }) });
    deleteOrder(targetId);
    if (typeof getStore === "function") { getStore(targetId); }
  }
});
bthread("hyper:User:copy3:Saboteur_update", function() {
  while(true) {
    let e = waitFor(matchAnyUserAdded());
    let targetId = e.data.id;
    // Wait for the main test to finish its verification check
    bp.sync({ waitFor: bp.EventSet("Barrier: User Verified", function(ev) {
        return ev.name.includes("Verify User") && ev.name.includes(targetId);
    }) });
    updateUser(null, null, null, null, null, null, targetId);
    if (typeof getUser === "function") { getUser(targetId); }
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Store_Pet", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    // Barrier: Ensure main test verifies Store before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Store Verified", function(ev) {
        return ev.name.includes("Verify Store") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.petId || e.data.id;
    deletePet(pId);
    let childId = e.data.orderId || e.data.id;
    getOrderById(childId);
  }
});