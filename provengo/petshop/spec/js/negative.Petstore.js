// Auto-generated EVIL BACKGROUND AGENTS for Petstore
//@provengo summon rest

// Agent: Persistent Stalker for Pet
bthread("evil:fuzz:Pet:Stalker", function () {
  while (true) {
    // Path 1: Discovery (Stalking live IDs)
    let e = waitFor(matchAnyPetAdded());
    let liveId = e.data.petId || e.data.id || e.data.petId;

    // Path 2: Sequential Corruption (Hitting live ID with dirty payloads)
    // Step: Fuzzing additionalMetadata
    verifyPetRejects(["NOT_A_STRING_ARRAY"], "api_key_valid", "category_valid", "file_valid", "name_valid", liveId, [], "status_valid", []);
    // Step: Fuzzing api_key
    verifyPetRejects("additionalMetadata_valid", ["NOT_A_STRING_ARRAY"], "category_valid", "file_valid", "name_valid", liveId, [], "status_valid", []);
    // Step: Fuzzing category
    verifyPetRejects("additionalMetadata_valid", "api_key_valid", ["NOT_A_STRING_ARRAY"], "file_valid", "name_valid", liveId, [], "status_valid", []);
    // Step: Fuzzing file
    verifyPetRejects("additionalMetadata_valid", "api_key_valid", "category_valid", ["NOT_A_STRING_ARRAY"], "name_valid", liveId, [], "status_valid", []);
    // Step: Fuzzing name
    verifyPetRejects("additionalMetadata_valid", "api_key_valid", "category_valid", "file_valid", ["NOT_A_STRING_ARRAY"], liveId, [], "status_valid", []);
    // Step: Fuzzing photoUrls
    verifyPetRejects("additionalMetadata_valid", "api_key_valid", "category_valid", "file_valid", "name_valid", liveId, "NOT_AN_ARRAY", "status_valid", []);
    // Step: Fuzzing status
    verifyPetRejects("additionalMetadata_valid", "api_key_valid", "category_valid", "file_valid", "name_valid", liveId, [], ["NOT_A_STRING_ARRAY"], []);
    // Step: Fuzzing tags
    verifyPetRejects("additionalMetadata_valid", "api_key_valid", "category_valid", "file_valid", "name_valid", liveId, [], "status_valid", "NOT_AN_ARRAY");
  }
});

// Agent: Identity Collision Saboteur for Pet
bthread("evil:collision:Pet:Copy1", function () {
  let staticKey = "STRESS_COLLISION_KEY";
  while(true) {
    // Path: Simultaneous Write Collision
    verifyPetRejects("additionalMetadata_val", "api_key_val", "category_val", "file_val", "name_val", staticKey, [], "status_val", []);
  }
});

bthread("evil:collision:Pet:Copy2", function () {
  let staticKey = "STRESS_COLLISION_KEY";
  while(true) {
    // Path: Simultaneous Write Collision
    verifyPetRejects("additionalMetadata_val", "api_key_val", "category_val", "file_val", "name_val", staticKey, [], "status_val", []);
  }
});

bthread("evil:collision:Pet:Copy3", function () {
  let staticKey = "STRESS_COLLISION_KEY";
  while(true) {
    // Path: Simultaneous Write Collision
    verifyPetRejects("additionalMetadata_val", "api_key_val", "category_val", "file_val", "name_val", staticKey, [], "status_val", []);
  }
});

// Agent: Persistent Stalker for Store
bthread("evil:fuzz:Store:Stalker", function () {
  while (true) {
    // Path 1: Discovery (Stalking live IDs)
    let e = waitFor(matchAnyStoreAdded());
    let liveId = e.data.orderId || e.data.id || e.data.petId;

    // Path 2: Sequential Corruption (Hitting live ID with dirty payloads)
    // Step: Fuzzing complete
    verifyStoreRejects("NOT_A_BOOL", liveId, 101, 101, "shipDate_valid", "status_valid");
    // Step: Fuzzing petId
    verifyStoreRejects(true, liveId, "INVALID_STRING", 101, "shipDate_valid", "status_valid");
    // Step: Fuzzing quantity
    verifyStoreRejects(true, liveId, 101, "INVALID_STRING", "shipDate_valid", "status_valid");
    // Step: Fuzzing shipDate
    verifyStoreRejects(true, liveId, 101, 101, ["NOT_A_STRING_ARRAY"], "status_valid");
    // Step: Fuzzing status
    verifyStoreRejects(true, liveId, 101, 101, "shipDate_valid", ["NOT_A_STRING_ARRAY"]);
  }
});

// Agent: Persistent Stalker for User
bthread("evil:fuzz:User:Stalker", function () {
  while (true) {
    // Path 1: Discovery (Stalking live IDs)
    let e = waitFor(matchAnyUserAdded());
    let liveId = e.data.username || e.data.id || e.data.petId;

    // Path 2: Sequential Corruption (Hitting live ID with dirty payloads)
    // Step: Fuzzing email
    verifyUserRejects(["NOT_A_STRING_ARRAY"], "firstName_valid", "lastName_valid", "password_valid", "phone_valid", 101, liveId);
    // Step: Fuzzing firstName
    verifyUserRejects("email_valid", ["NOT_A_STRING_ARRAY"], "lastName_valid", "password_valid", "phone_valid", 101, liveId);
    // Step: Fuzzing lastName
    verifyUserRejects("email_valid", "firstName_valid", ["NOT_A_STRING_ARRAY"], "password_valid", "phone_valid", 101, liveId);
    // Step: Fuzzing password
    verifyUserRejects("email_valid", "firstName_valid", "lastName_valid", ["NOT_A_STRING_ARRAY"], "phone_valid", 101, liveId);
    // Step: Fuzzing phone
    verifyUserRejects("email_valid", "firstName_valid", "lastName_valid", "password_valid", ["NOT_A_STRING_ARRAY"], 101, liveId);
    // Step: Fuzzing userStatus
    verifyUserRejects("email_valid", "firstName_valid", "lastName_valid", "password_valid", "phone_valid", "INVALID_STRING", liveId);
  }
});

// Agent: Identity Collision Saboteur for User
bthread("evil:collision:User:Copy1", function () {
  let staticKey = "STRESS_COLLISION_KEY";
  while(true) {
    // Path: Simultaneous Write Collision
    verifyUserRejects(staticKey, "firstName_val", "lastName_val", "password_val", "phone_val", 999, staticKey);
  }
});

bthread("evil:collision:User:Copy2", function () {
  let staticKey = "STRESS_COLLISION_KEY";
  while(true) {
    // Path: Simultaneous Write Collision
    verifyUserRejects(staticKey, "firstName_val", "lastName_val", "password_val", "phone_val", 999, staticKey);
  }
});

bthread("evil:collision:User:Copy3", function () {
  let staticKey = "STRESS_COLLISION_KEY";
  while(true) {
    // Path: Simultaneous Write Collision
    verifyUserRejects(staticKey, "firstName_val", "lastName_val", "password_val", "phone_val", 999, staticKey);
  }
});

// Agent: Orphan-Maker (Store -> Pet)
bthread("evil:relational:OrphanMaker_Store", function() {
  while(true) {
    // Path 1: Dependency Interception
    let e = waitFor(matchAnyStoreAdded());
    let pId = e.data.PetId || e.data.id;

    // Path 2: Parent Erasure (Breaking Integrity)
    deletePet(pId);

    // Path 3: Verification of Chaos
    // Try to interact with the orphan to trigger a backend join-crash
    let childId = e.data.username || e.data.id;
    getStoreById(childId);
  }
});
