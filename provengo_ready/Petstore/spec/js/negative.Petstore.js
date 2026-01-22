// Auto-generated EVIL BACKGROUND AGENTS for Petstore
//@provengo summon rest

// Agent: Persistent Stalker for Pet
bthread("evil:fuzz:Pet:Stalker", function () {
  while (true) {
    let e = waitFor(matchAnyPetAdded());
    let liveId = e.data.petId || e.data.id || e.data.PetId;

    verifyPetRejects(["NOT_A_STRING_ARRAY"], "api_key_valid", "category_valid", "file_valid", "name_valid", liveId, [], "status_valid", []);
    verifyPetRejects("additionalMetadata_valid", ["NOT_A_STRING_ARRAY"], "category_valid", "file_valid", "name_valid", liveId, [], "status_valid", []);
    verifyPetRejects("additionalMetadata_valid", "api_key_valid", ["NOT_A_STRING_ARRAY"], "file_valid", "name_valid", liveId, [], "status_valid", []);
    verifyPetRejects("additionalMetadata_valid", "api_key_valid", "category_valid", ["NOT_A_STRING_ARRAY"], "name_valid", liveId, [], "status_valid", []);
    verifyPetRejects("additionalMetadata_valid", "api_key_valid", "category_valid", "file_valid", ["NOT_A_STRING_ARRAY"], liveId, [], "status_valid", []);
    verifyPetRejects("additionalMetadata_valid", "api_key_valid", "category_valid", "file_valid", "name_valid", liveId, "NOT_AN_ARRAY", "status_valid", []);
    verifyPetRejects("additionalMetadata_valid", "api_key_valid", "category_valid", "file_valid", "name_valid", liveId, [], ["NOT_A_STRING_ARRAY"], []);
    verifyPetRejects("additionalMetadata_valid", "api_key_valid", "category_valid", "file_valid", "name_valid", liveId, [], "status_valid", "NOT_AN_ARRAY");
  }
});

// Guard: Block Success if Pet ID already exists
bthread("guard:Pet:BlockCollisionSuccess", function() {
  while(true) {
    let e = waitFor(matchAnyPetAdded());
    let liveId = e.data.petId || e.data.id;
    bp.sync({ block: bp.Event("Req:addPet:Success:" + liveId), waitFor: matchAnyPetDeleted() });
  }
});
// Guard: Block Fail if Pet ID is missing (System is clean)
bthread("guard:Pet:BlockCollisionFail", function() {
  while(true) {
    let e = waitFor(matchAnyPetAdded());
    waitFor(matchAnyPetDeleted());
    bp.sync({ block: bp.Event("Req:addPet:Fail:Conflict:" + e.data.id), waitFor: matchAnyPetAdded() });
  }
});

// Agent: Dynamic Collision Saboteur for Pet
bthread("evil:collision:Pet", function() {
  while (true) {
    let e = waitFor(matchAnyPetAdded());
    let liveId = e.data.petId || e.data.id;
    addPet("additionalMetadata_collision", "api_key_collision", "category_collision", "file_collision", "name_collision", liveId, "photoUrls_collision", "status_collision", "tags_collision");
  }
});

// Agent: Persistent Stalker for Store
bthread("evil:fuzz:Store:Stalker", function () {
  while (true) {
    let e = waitFor(matchAnyStoreAdded());
    let liveId = e.data.orderId || e.data.id || e.data.StoreId;

    verifyStoreRejects("NOT_A_BOOL", liveId, 101, 101, "shipDate_valid", "status_valid");
    verifyStoreRejects(true, liveId, "INVALID_STRING", 101, "shipDate_valid", "status_valid");
    verifyStoreRejects(true, liveId, 101, "INVALID_STRING", "shipDate_valid", "status_valid");
    verifyStoreRejects(true, liveId, 101, 101, ["NOT_A_STRING_ARRAY"], "status_valid");
    verifyStoreRejects(true, liveId, 101, 101, "shipDate_valid", ["NOT_A_STRING_ARRAY"]);
  }
});

// Guard: Block Success if Store ID already exists
bthread("guard:Store:BlockCollisionSuccess", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    let liveId = e.data.orderId || e.data.id;
    bp.sync({ block: bp.Event("Req:placeOrder:Success:" + liveId), waitFor: matchAnyStoreDeleted() });
  }
});
// Guard: Block Fail if Store ID is missing (System is clean)
bthread("guard:Store:BlockCollisionFail", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    waitFor(matchAnyStoreDeleted());
    bp.sync({ block: bp.Event("Req:placeOrder:Fail:Conflict:" + e.data.id), waitFor: matchAnyStoreAdded() });
  }
});

// Agent: Dynamic Collision Saboteur for Store
bthread("evil:collision:Store", function() {
  while (true) {
    let e = waitFor(matchAnyStoreAdded());
    let liveId = e.data.orderId || e.data.id;
    placeOrder("complete_collision", liveId, "petId_collision", "quantity_collision", "shipDate_collision", "status_collision");
  }
});

// Agent: Persistent Stalker for User
bthread("evil:fuzz:User:Stalker", function () {
  while (true) {
    let e = waitFor(matchAnyUserAdded());
    let liveId = e.data.username || e.data.id || e.data.UserId;

    verifyUserRejects(["NOT_A_STRING_ARRAY"], "firstName_valid", "lastName_valid", "password_valid", "phone_valid", 101, liveId);
    verifyUserRejects("email_valid", ["NOT_A_STRING_ARRAY"], "lastName_valid", "password_valid", "phone_valid", 101, liveId);
    verifyUserRejects("email_valid", "firstName_valid", ["NOT_A_STRING_ARRAY"], "password_valid", "phone_valid", 101, liveId);
    verifyUserRejects("email_valid", "firstName_valid", "lastName_valid", ["NOT_A_STRING_ARRAY"], "phone_valid", 101, liveId);
    verifyUserRejects("email_valid", "firstName_valid", "lastName_valid", "password_valid", ["NOT_A_STRING_ARRAY"], 101, liveId);
    verifyUserRejects("email_valid", "firstName_valid", "lastName_valid", "password_valid", "phone_valid", "INVALID_STRING", liveId);
  }
});

// Guard: Block Success if User ID already exists
bthread("guard:User:BlockCollisionSuccess", function() {
  while(true) {
    let e = waitFor(matchAnyUserAdded());
    let liveId = e.data.username || e.data.id;
    bp.sync({ block: bp.Event("Req:createUsersWithListInput:Success:" + liveId), waitFor: matchAnyUserDeleted() });
  }
});
// Guard: Block Fail if User ID is missing (System is clean)
bthread("guard:User:BlockCollisionFail", function() {
  while(true) {
    let e = waitFor(matchAnyUserAdded());
    waitFor(matchAnyUserDeleted());
    bp.sync({ block: bp.Event("Req:createUsersWithListInput:Fail:Conflict:" + e.data.id), waitFor: matchAnyUserAdded() });
  }
});

// Agent: Dynamic Collision Saboteur for User
bthread("evil:collision:User", function() {
  while (true) {
    let e = waitFor(matchAnyUserAdded());
    let liveId = e.data.username || e.data.id;
    createUsersWithListInput("email_collision", "firstName_collision", "lastName_collision", "password_collision", "phone_collision", "userStatus_collision", liveId);
  }
});

// Agent: Orphan-Maker (Store -> Pet)
bthread("evil:relational:OrphanMaker_Store", function() {
  while(true) {
    let e = waitFor(matchAnyStoreAdded());
    let pId = e.data.PetId || e.data.id;
    deletePet(pId);
    let childId = e.data.orderId || e.data.id;
    getStoreById(childId);
  }
});
