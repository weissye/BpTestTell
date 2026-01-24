// Auto-generated EVIL BACKGROUND AGENTS for Petstore
//@provengo summon rest

// Guard: Block Success if Pet ID exists
bthread("guard:Pet:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyPetAdded());
    let id = e.data.petId || e.data.id;
    bp.sync({ block: bp.Event("Req:addPet:Success:" + id), waitFor: matchAnyPetDeleted() });
  } });
// Guard: Block Fail if Pet ID missing
bthread("guard:Pet:BlockCollisionFail", function() {
  while(true) { let e = waitFor(matchAnyPetAdded()); waitFor(matchAnyPetDeleted());
    bp.sync({ block: bp.Event("Req:addPet:Fail:Conflict:" + e.data.id), waitFor: matchAnyPetAdded() });
  } });
// Guard: Block illegal updates for Pet (State Sentry)
bthread("guard:Pet:StateSentry", function() {
  while(true) { let e = waitFor(matchAnyPetDeleted());
    let id = e.data.id || e.data.petId;
    bp.sync({ block: bp.Event("Req:updatePet:Success:" + id), waitFor: matchAnyPetAdded() });
  } });
// Agent: Dynamic Collision Saboteur for Pet
bthread("evil:collision:Pet", function() {
  while (true) {
    let e = waitFor(matchAnyPetAdded());
    let liveId = e.data.petId || e.data.id;
    addPet("additionalMetadata_collision", "api_key_collision", "category_collision", "file_collision", "name_collision", liveId, "photoUrls_collision", "status_collision", "tags_collision");
  } });

// Guard: Block Success if Store ID exists
bthread("guard:Store:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyStoreAdded());
    let id = e.data.orderId || e.data.id;
    bp.sync({ block: bp.Event("Req:placeOrder:Success:" + id), waitFor: matchAnyStoreDeleted() });
  } });
// Guard: Block Fail if Store ID missing
bthread("guard:Store:BlockCollisionFail", function() {
  while(true) { let e = waitFor(matchAnyStoreAdded()); waitFor(matchAnyStoreDeleted());
    bp.sync({ block: bp.Event("Req:placeOrder:Fail:Conflict:" + e.data.id), waitFor: matchAnyStoreAdded() });
  } });
// Agent: Dynamic Collision Saboteur for Store
bthread("evil:collision:Store", function() {
  while (true) {
    let e = waitFor(matchAnyStoreAdded());
    let liveId = e.data.orderId || e.data.id;
    placeOrder("complete_collision", liveId, "petId_collision", "quantity_collision", "shipDate_collision", "status_collision");
  } });

// Guard: Block Success if User ID exists
bthread("guard:User:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyUserAdded());
    let id = e.data.username || e.data.id;
    bp.sync({ block: bp.Event("Req:createUsersWithListInput:Success:" + id), waitFor: matchAnyUserDeleted() });
  } });
// Guard: Block Fail if User ID missing
bthread("guard:User:BlockCollisionFail", function() {
  while(true) { let e = waitFor(matchAnyUserAdded()); waitFor(matchAnyUserDeleted());
    bp.sync({ block: bp.Event("Req:createUsersWithListInput:Fail:Conflict:" + e.data.id), waitFor: matchAnyUserAdded() });
  } });
// Guard: Block illegal updates for User (State Sentry)
bthread("guard:User:StateSentry", function() {
  while(true) { let e = waitFor(matchAnyUserDeleted());
    let id = e.data.id || e.data.username;
    bp.sync({ block: bp.Event("Req:updateUser:Success:" + id), waitFor: matchAnyUserAdded() });
  } });
// Agent: Dynamic Collision Saboteur for User
bthread("evil:collision:User", function() {
  while (true) {
    let e = waitFor(matchAnyUserAdded());
    let liveId = e.data.username || e.data.id;
    createUsersWithListInput("email_collision", "firstName_collision", "lastName_collision", "password_collision", "phone_collision", "userStatus_collision", liveId);
  } });

// Guard: Block Store creation until Pet is ready
bthread("guard:Store:BlockAddUntilPetReady", function() {
  while(true) {
    // Using EventSet to match any Success intent for Store
    bp.sync({ 
      block: bp.EventSet("Block Store Success", function(ev) { return ev.name.startsWith("Req:placeOrder:Success:"); }), 
      waitFor: matchAnyPetAdded() 
    });
    waitFor(matchAnyPetDeleted());
  } });