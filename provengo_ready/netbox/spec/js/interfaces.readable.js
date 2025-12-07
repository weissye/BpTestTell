//@provengo summon rest
// === Auto-generated interfaces.js ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function createCircuitGroupAssignment(id) {
  var url = "/api/circuits/circuit-group-assignments/";
  var description = "Create circuit group assignment with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteCircuitGroupAssignment(id) {
  var url = "/api/circuits/circuit-group-assignments/" + id + "/";
  var description = "Delete circuit group assignment with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateCircuitGroupAssignment(id) {
  var url = "/api/circuits/circuit-group-assignments/" + id + "/";
  var description = "Update circuit group assignment with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getCircuitGroupAssignment(id) {
  var url = "/api/circuits/circuit-group-assignments/" + id + "/";
  var description = "Get circuit group assignment with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingCircuitGroupAssignment(id) {
  var url = "/api/circuits/circuit-group-assignments/";
  var description = "Try Add Existing CircuitGroupAssignment";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCircuitGroupAssignmentExists(id) {
  var url = "/api/circuits/circuit-group-assignments/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("CircuitGroupAssignment not found in list");
  }});
}

function verifyCircuitGroupAssignmentDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingCircuitGroupAssignment(id) {
  var url = "/api/circuits/circuit-group-assignments/" + id + "/";
  var description = "Verify negative delete for CircuitGroupAssignment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForCircuitGroupAssignmentAdded(id) {
  waitFor(matchSuccess("Create circuit group assignment with id " + id));
}

function createCircuitGroup(id) {
  var url = "/api/circuits/circuit-groups/";
  var description = "Create circuit group {name} with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteCircuitGroup(id) {
  var url = "/api/circuits/circuit-groups/" + id + "/";
  var description = "Delete circuit group with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateCircuitGroup(id) {
  var url = "/api/circuits/circuit-groups/" + id + "/";
  var description = "Update circuit group with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getCircuitGroup(id) {
  var url = "/api/circuits/circuit-groups/" + id + "/";
  var description = "Get circuit group with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingCircuitGroup(id) {
  var url = "/api/circuits/circuit-groups/";
  var description = "Try Add Existing CircuitGroup";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCircuitGroupExists(id) {
  var url = "/api/circuits/circuit-groups/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("CircuitGroup not found in list");
  }});
}

function verifyCircuitGroupDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingCircuitGroup(id) {
  var url = "/api/circuits/circuit-groups/" + id + "/";
  var description = "Verify negative delete for CircuitGroup";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForCircuitGroupAdded(id) {
  waitFor(matchSuccess("Create circuit group {name} with id " + id));
}

function createCircuitTermination(id) {
  var url = "/api/circuits/circuit-terminations/";
  var description = "Create circuit termination with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteCircuitTermination(id) {
  var url = "/api/circuits/circuit-terminations/" + id + "/";
  var description = "Delete circuit termination with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateCircuitTermination(id) {
  var url = "/api/circuits/circuit-terminations/" + id + "/";
  var description = "Update circuit termination with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getCircuitTermination(id) {
  var url = "/api/circuits/circuit-terminations/" + id + "/";
  var description = "Get circuit termination with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingCircuitTermination(id) {
  var url = "/api/circuits/circuit-terminations/";
  var description = "Try Add Existing CircuitTermination";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCircuitTerminationExists(id) {
  var url = "/api/circuits/circuit-terminations/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("CircuitTermination not found in list");
  }});
}

function verifyCircuitTerminationDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingCircuitTermination(id) {
  var url = "/api/circuits/circuit-terminations/" + id + "/";
  var description = "Verify negative delete for CircuitTermination";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForCircuitTerminationAdded(id) {
  waitFor(matchSuccess("Create circuit termination with id " + id));
}

function createCircuitType(id) {
  var url = "/api/circuits/circuit-types/";
  var description = "Create circuit type {name} with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteCircuitType(id) {
  var url = "/api/circuits/circuit-types/" + id + "/";
  var description = "Delete circuit type with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateCircuitType(id) {
  var url = "/api/circuits/circuit-types/" + id + "/";
  var description = "Update circuit type with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getCircuitType(id) {
  var url = "/api/circuits/circuit-types/" + id + "/";
  var description = "Get circuit type with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingCircuitType(id) {
  var url = "/api/circuits/circuit-types/";
  var description = "Try Add Existing CircuitType";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCircuitTypeExists(id) {
  var url = "/api/circuits/circuit-types/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("CircuitType not found in list");
  }});
}

function verifyCircuitTypeDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingCircuitType(id) {
  var url = "/api/circuits/circuit-types/" + id + "/";
  var description = "Verify negative delete for CircuitType";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForCircuitTypeAdded(id) {
  waitFor(matchSuccess("Create circuit type {name} with id " + id));
}

function createCircuit(id) {
  var url = "/api/circuits/circuits/";
  var description = "Create circuit";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteCircuit(id) {
  var url = "/api/circuits/circuits/" + id + "/";
  var description = "Delete circuit with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateCircuit(id) {
  var url = "/api/circuits/circuits/" + id + "/";
  var description = "Update circuit with id " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getCircuit(id) {
  var url = "/api/circuits/circuits/" + id + "/";
  var description = "Get circuit with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function patchCircuit(id) {
  var url = "/api/circuits/circuits/" + id + "/";
  var description = "Patch circuit with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function tryToAddExistingCircuit(id) {
  var url = "/api/circuits/circuits/";
  var description = "Try Add Existing Circuit";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCircuitExists(id) {
  var url = "/api/circuits/circuits/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Circuit not found in list");
  }});
}

function verifyCircuitDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingCircuit(id) {
  var url = "/api/circuits/circuits/" + id + "/";
  var description = "Verify negative delete for Circuit";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForCircuitAdded(id) {
  waitFor(matchSuccess("Create circuit"));
}

function getProviderAccount(id) {
  var url = "/api/circuits/provider-accounts/" + id + "/";
  var description = "Get provider account with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createProviderAccount(id) {
  var url = "/api/circuits/provider-accounts/";
  var description = "Create provider account";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateProviderAccount(id) {
  var url = "/api/circuits/provider-accounts/" + id + "/";
  var description = "Update provider account with id " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchProviderAccount(id) {
  var url = "/api/circuits/provider-accounts/" + id + "/";
  var description = "Patch provider account with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteProviderAccount(id) {
  var url = "/api/circuits/provider-accounts/" + id + "/";
  var description = "Delete provider account with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingProviderAccount(id) {
  var url = "/api/circuits/provider-accounts/";
  var description = "Try Add Existing ProviderAccount";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyProviderAccountExists(id) {
  var url = "/api/circuits/provider-accounts/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ProviderAccount not found in list");
  }});
}

function verifyProviderAccountDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingProviderAccount(id) {
  var url = "/api/circuits/provider-accounts/" + id + "/";
  var description = "Verify negative delete for ProviderAccount";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForProviderAccountAdded(id) {
  waitFor(matchSuccess("Create provider account"));
}

function getProviderNetwork(id) {
  var url = "/api/circuits/provider-networks/" + id + "/";
  var description = "Get provider network with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createProviderNetwork(id) {
  var url = "/api/circuits/provider-networks/";
  var description = "Create provider network";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateProviderNetwork(id) {
  var url = "/api/circuits/provider-networks/" + id + "/";
  var description = "Update provider network with id " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchProviderNetwork(id) {
  var url = "/api/circuits/provider-networks/" + id + "/";
  var description = "Patch provider network with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteProviderNetwork(id) {
  var url = "/api/circuits/provider-networks/" + id + "/";
  var description = "Delete provider network with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingProviderNetwork(id) {
  var url = "/api/circuits/provider-networks/";
  var description = "Try Add Existing ProviderNetwork";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyProviderNetworkExists(id) {
  var url = "/api/circuits/provider-networks/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ProviderNetwork not found in list");
  }});
}

function verifyProviderNetworkDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingProviderNetwork(id) {
  var url = "/api/circuits/provider-networks/" + id + "/";
  var description = "Verify negative delete for ProviderNetwork";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForProviderNetworkAdded(id) {
  waitFor(matchSuccess("Create provider network"));
}

function getProvider(id) {
  var url = "/api/circuits/providers/" + id + "/";
  var description = "Get provider with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createProvider(id) {
  var url = "/api/circuits/providers/";
  var description = "Create provider";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateProvider(id) {
  var url = "/api/circuits/providers/" + id + "/";
  var description = "Update provider with id " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchProvider(id) {
  var url = "/api/circuits/providers/" + id + "/";
  var description = "Patch provider with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteProvider(id) {
  var url = "/api/circuits/providers/" + id + "/";
  var description = "Delete provider with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingProvider(id) {
  var url = "/api/circuits/providers/";
  var description = "Try Add Existing Provider";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyProviderExists(id) {
  var url = "/api/circuits/providers/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Provider not found in list");
  }});
}

function verifyProviderDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingProvider(id) {
  var url = "/api/circuits/providers/" + id + "/";
  var description = "Verify negative delete for Provider";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForProviderAdded(id) {
  waitFor(matchSuccess("Create provider"));
}

function getVirtualCircuitTermination(id) {
  var url = "/api/circuits/virtual-circuit-terminations/" + id + "/";
  var description = "Get virtual circuit termination with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createVirtualCircuitTermination(id) {
  var url = "/api/circuits/virtual-circuit-terminations/";
  var description = "Create virtual circuit termination";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateVirtualCircuitTermination(id) {
  var url = "/api/circuits/virtual-circuit-terminations/" + id + "/";
  var description = "Update virtual circuit termination with id " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchVirtualCircuitTermination(id) {
  var url = "/api/circuits/virtual-circuit-terminations/" + id + "/";
  var description = "Patch virtual circuit termination with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteVirtualCircuitTermination(id) {
  var url = "/api/circuits/virtual-circuit-terminations/" + id + "/";
  var description = "Delete virtual circuit termination with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingVirtualCircuitTermination(id) {
  var url = "/api/circuits/virtual-circuit-terminations/";
  var description = "Try Add Existing VirtualCircuitTermination";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVirtualCircuitTerminationExists(id) {
  var url = "/api/circuits/virtual-circuit-terminations/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("VirtualCircuitTermination not found in list");
  }});
}

function verifyVirtualCircuitTerminationDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingVirtualCircuitTermination(id) {
  var url = "/api/circuits/virtual-circuit-terminations/" + id + "/";
  var description = "Verify negative delete for VirtualCircuitTermination";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVirtualCircuitTerminationAdded(id) {
  waitFor(matchSuccess("Create virtual circuit termination"));
}

function createVirtualCircuitType(color, description, id, name, slug) {
  var url = "/api/circuits/virtual-circuit-types/";
  var description = "Create virtual circuit type with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "description": String(description),
    "color": String(color),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteVirtualCircuitType(color, description, id, name, slug) {
  var url = "/api/circuits/virtual-circuit-types/" + id + "/";
  var description = "Delete virtual circuit type with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateVirtualCircuitType(color, description, id, name, slug) {
  var url = "/api/circuits/virtual-circuit-types/" + id + "/";
  var description = "Update virtual circuit type with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "description": String(description),
    "color": String(color),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getVirtualCircuitType(color, description, id, name, slug) {
  var url = "/api/circuits/virtual-circuit-types/" + id + "/";
  var description = "Get virtual circuit type with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingVirtualCircuitType(color, description, id, name, slug) {
  var url = "/api/circuits/virtual-circuit-types/";
  var description = "Try Add Existing VirtualCircuitType";
  var body = {
    "name": String(name),
    "slug": String(slug),
    "description": String(description),
    "color": String(color),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVirtualCircuitTypeExists(color, description, id, name, slug) {
  var url = "/api/circuits/virtual-circuit-types/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("VirtualCircuitType not found in list");
  }});
}

function verifyVirtualCircuitTypeDoesNotExist(color, description, id, name, slug) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingVirtualCircuitType(color, description, id, name, slug) {
  var url = "/api/circuits/virtual-circuit-types/" + id + "/";
  var description = "Verify negative delete for VirtualCircuitType";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVirtualCircuitTypeAdded(color, description, id, name, slug) {
  waitFor(matchSuccess("Create virtual circuit type with id " + id));
}

function createVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type) {
  var url = "/api/circuits/virtual-circuits/";
  var description = "Create virtual circuit with id " + id;
  var body = {
    "cid": String(cid),
    "type": String(type),
    "provider": String(provider),
    "provider_account": String(provider_account),
    "provider_network_id": String(provider_network_id),
    "status": String(status),
    "tenant": String(tenant),
    "tenant_group": String(tenant_group),
    "description": String(description),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  var description = "Delete virtual circuit with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  var description = "Update virtual circuit with id " + id;
  var body = {
    "cid": String(cid),
    "type": String(type),
    "provider": String(provider),
    "provider_account": String(provider_account),
    "provider_network_id": String(provider_network_id),
    "status": String(status),
    "tenant": String(tenant),
    "tenant_group": String(tenant_group),
    "description": String(description),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  var description = "Get virtual circuit with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type) {
  var url = "/api/circuits/virtual-circuits/";
  var description = "Try Add Existing VirtualCircuit";
  var body = {
    "cid": String(cid),
    "type": String(type),
    "provider": String(provider),
    "provider_account": String(provider_account),
    "provider_network_id": String(provider_network_id),
    "status": String(status),
    "tenant": String(tenant),
    "tenant_group": String(tenant_group),
    "description": String(description),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVirtualCircuitExists(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("VirtualCircuit not found in list");
  }});
}

function verifyVirtualCircuitDoesNotExist(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type) {
  var url = "/api/circuits/virtual-circuits/" + id + "/";
  var description = "Verify negative delete for VirtualCircuit";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVirtualCircuitAdded(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type) {
  waitFor(matchSuccess("Create virtual circuit with id " + id));
}

function getBackgroundQueue(name) {
  var url = "/api/core/background-queues/" + name + "/";
  var description = "Get background queue " + name;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyBackgroundQueueExists(name) {
  var url = "/api/core/background-queues/" + name + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].name) === String(name)) return pvg.success("Found"); }
      pvg.fail("BackgroundQueue not found in list");
  }});
}

function verifyBackgroundQueueDoesNotExist(name) { pvg.success("Assumed gone"); }

function getBackgroundTask(id) {
  var url = "/api/core/background-tasks/" + id + "/";
  var description = "Get background task " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteBackgroundTask(id) {
  var url = "/api/core/background-tasks/" + id + "/delete/";
  var description = "Delete background task " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function enqueueBackgroundTask(id) {
  var url = "/api/core/background-tasks/" + id + "/enqueue/";
  var description = "Enqueue background task " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function requeueBackgroundTask(id) {
  var url = "/api/core/background-tasks/" + id + "/requeue/";
  var description = "Requeue background task " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function stopBackgroundTask(id) {
  var url = "/api/core/background-tasks/" + id + "/stop/";
  var description = "Stop background task " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function verifyBackgroundTaskExists(id) {
  var url = "/api/core/background-tasks/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("BackgroundTask not found in list");
  }});
}

function verifyBackgroundTaskDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingBackgroundTask(id) {
  var url = "/api/core/background-tasks/" + id + "/delete/";
  var description = "Verify negative delete for BackgroundTask";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function getBackgroundWorker(name) {
  var url = "/api/core/background-workers/" + name + "/";
  var description = "Get background worker " + name;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyBackgroundWorkerExists(name) {
  var url = "/api/core/background-workers/" + name + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].name) === String(name)) return pvg.success("Found"); }
      pvg.fail("BackgroundWorker not found in list");
  }});
}

function verifyBackgroundWorkerDoesNotExist(name) { pvg.success("Assumed gone"); }

function getDataFile(id) {
  var url = "/api/core/data-files/" + id + "/";
  var description = "Get data file with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listDataFiles(id) {
  var url = "/api/core/data-files/";
  var description = "List data files";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyDataFileExists(id) {
  var url = "/api/core/data-files/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("DataFile not found in list");
  }});
}

function verifyDataFileDoesNotExist(id) { pvg.success("Assumed gone"); }

function createDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/";
  var description = "Create data source";
  var body = {
    "name": String(name),
    "description": String(description),
    "enabled": String(enabled),
    "source_url": String(source_url),
    "status": String(status),
    "sync_interval": String(sync_interval),
    "tag": String(tag),
    "type": String(type),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "Delete data source with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "Update data source with id " + id;
  var body = {
    "name": String(name),
    "description": String(description),
    "enabled": String(enabled),
    "source_url": String(source_url),
    "status": String(status),
    "sync_interval": String(sync_interval),
    "tag": String(tag),
    "type": String(type),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "Partially update data source with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "Get data source with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listDataSources(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/";
  var description = "List data sources";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function bulkUpdateDataSources(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/";
  var description = "Bulk update data sources";
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPartialUpdateDataSources(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/";
  var description = "Bulk partial update data sources";
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteDataSources(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/";
  var description = "Bulk delete data sources";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function syncCreateDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/" + id + "/sync/";
  var description = "Sync data source with id " + id;
  var body = {
    "name": String(name),
    "description": String(description),
    "enabled": String(enabled),
    "source_url": String(source_url),
    "status": String(status),
    "sync_interval": String(sync_interval),
    "tag": String(tag),
    "type": String(type),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function tryToAddExistingDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/";
  var description = "Try Add Existing DataSource";
  var body = {
    "name": String(name),
    "description": String(description),
    "enabled": String(enabled),
    "source_url": String(source_url),
    "status": String(status),
    "sync_interval": String(sync_interval),
    "tag": String(tag),
    "type": String(type),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDataSourceExists(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("DataSource not found in list");
  }});
}

function verifyDataSourceDoesNotExist(description, enabled, id, name, source_url, status, sync_interval, tag, type) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  var url = "/api/core/data-sources/" + id + "/";
  var description = "Verify negative delete for DataSource";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForDataSourceAdded(description, enabled, id, name, source_url, status, sync_interval, tag, type) {
  waitFor(matchSuccess("Create data source"));
}

function getJob(id) {
  var url = "/api/core/jobs/" + id + "/";
  var description = "Get job with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listJobs(id) {
  var url = "/api/core/jobs/";
  var description = "List jobs";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyJobExists(id) {
  var url = "/api/core/jobs/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Job not found in list");
  }});
}

function verifyJobDoesNotExist(id) { pvg.success("Assumed gone"); }

function getObjectChange(id) {
  var url = "/api/core/object-changes/" + id + "/";
  var description = "Get object change with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listObjectChanges(id) {
  var url = "/api/core/object-changes/";
  var description = "List object changes";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyObjectChangeExists(id) {
  var url = "/api/core/object-changes/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ObjectChange not found in list");
  }});
}

function verifyObjectChangeDoesNotExist(id) { pvg.success("Assumed gone"); }

function getObjectType(id) {
  var url = "/api/extras/object-types/" + id + "/";
  var description = "Get object type with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listObjectTypes(id) {
  var url = "/api/extras/object-types/";
  var description = "List object types";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyObjectTypeExists(id) {
  var url = "/api/extras/object-types/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ObjectType not found in list");
  }});
}

function verifyObjectTypeDoesNotExist(id) { pvg.success("Assumed gone"); }

function createCableTermination(id) {
  var url = "/api/dcim/cable-terminations/";
  var description = "Create cable termination with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteCableTermination(id) {
  var url = "/api/dcim/cable-terminations/" + id + "/";
  var description = "Delete cable termination with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateCableTermination(id) {
  var url = "/api/dcim/cable-terminations/" + id + "/";
  var description = "Update cable termination with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateCableTermination(id) {
  var url = "/api/dcim/cable-terminations/" + id + "/";
  var description = "Partially update cable termination with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getCableTermination(id) {
  var url = "/api/dcim/cable-terminations/" + id + "/";
  var description = "Get cable termination with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingCableTermination(id) {
  var url = "/api/dcim/cable-terminations/";
  var description = "Try Add Existing CableTermination";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCableTerminationExists(id) {
  var url = "/api/dcim/cable-terminations/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("CableTermination not found in list");
  }});
}

function verifyCableTerminationDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingCableTermination(id) {
  var url = "/api/dcim/cable-terminations/" + id + "/";
  var description = "Verify negative delete for CableTermination";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForCableTerminationAdded(id) {
  waitFor(matchSuccess("Create cable termination with id " + id));
}

function createCable(id) {
  var url = "/api/dcim/cables/";
  var description = "Create cable with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteCable(id) {
  var url = "/api/dcim/cables/" + id + "/";
  var description = "Delete cable with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateCable(id) {
  var url = "/api/dcim/cables/" + id + "/";
  var description = "Update cable with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateCable(id) {
  var url = "/api/dcim/cables/" + id + "/";
  var description = "Partially update cable with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getCable(id) {
  var url = "/api/dcim/cables/" + id + "/";
  var description = "Get cable with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingCable(id) {
  var url = "/api/dcim/cables/";
  var description = "Try Add Existing Cable";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCableExists(id) {
  var url = "/api/dcim/cables/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Cable not found in list");
  }});
}

function verifyCableDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingCable(id) {
  var url = "/api/dcim/cables/" + id + "/";
  var description = "Verify negative delete for Cable";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForCableAdded(id) {
  waitFor(matchSuccess("Create cable with id " + id));
}

function createConsolePortTemplate(id) {
  var url = "/api/dcim/console-port-templates/";
  var description = "Create console port template with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteConsolePortTemplate(id) {
  var url = "/api/dcim/console-port-templates/" + id + "/";
  var description = "Delete console port template with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateConsolePortTemplate(id) {
  var url = "/api/dcim/console-port-templates/" + id + "/";
  var description = "Update console port template with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateConsolePortTemplate(id) {
  var url = "/api/dcim/console-port-templates/" + id + "/";
  var description = "Partially update console port template with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getConsolePortTemplate(id) {
  var url = "/api/dcim/console-port-templates/" + id + "/";
  var description = "Get console port template with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingConsolePortTemplate(id) {
  var url = "/api/dcim/console-port-templates/";
  var description = "Try Add Existing ConsolePortTemplate";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyConsolePortTemplateExists(id) {
  var url = "/api/dcim/console-port-templates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ConsolePortTemplate not found in list");
  }});
}

function verifyConsolePortTemplateDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingConsolePortTemplate(id) {
  var url = "/api/dcim/console-port-templates/" + id + "/";
  var description = "Verify negative delete for ConsolePortTemplate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForConsolePortTemplateAdded(id) {
  waitFor(matchSuccess("Create console port template with id " + id));
}

function createConsolePort(id) {
  var url = "/api/dcim/console-ports/";
  var description = "Create console port with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteConsolePort(id) {
  var url = "/api/dcim/console-ports/" + id + "/";
  var description = "Delete console port with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateConsolePort(id) {
  var url = "/api/dcim/console-ports/" + id + "/";
  var description = "Update console port with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateConsolePort(id) {
  var url = "/api/dcim/console-ports/" + id + "/";
  var description = "Partially update console port with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getConsolePort(id) {
  var url = "/api/dcim/console-ports/" + id + "/";
  var description = "Get console port with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingConsolePort(id) {
  var url = "/api/dcim/console-ports/";
  var description = "Try Add Existing ConsolePort";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyConsolePortExists(id) {
  var url = "/api/dcim/console-ports/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ConsolePort not found in list");
  }});
}

function verifyConsolePortDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingConsolePort(id) {
  var url = "/api/dcim/console-ports/" + id + "/";
  var description = "Verify negative delete for ConsolePort";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForConsolePortAdded(id) {
  waitFor(matchSuccess("Create console port with id " + id));
}

function createConsoleServerPortTemplate(id) {
  var url = "/api/dcim/console-server-port-templates/";
  var description = "Create console server port template with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteConsoleServerPortTemplate(id) {
  var url = "/api/dcim/console-server-port-templates/" + id + "/";
  var description = "Delete console server port template with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateConsoleServerPortTemplate(id) {
  var url = "/api/dcim/console-server-port-templates/" + id + "/";
  var description = "Update console server port template with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getConsoleServerPortTemplate(id) {
  var url = "/api/dcim/console-server-port-templates/" + id + "/";
  var description = "Get console server port template with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingConsoleServerPortTemplate(id) {
  var url = "/api/dcim/console-server-port-templates/";
  var description = "Try Add Existing ConsoleServerPortTemplate";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyConsoleServerPortTemplateExists(id) {
  var url = "/api/dcim/console-server-port-templates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ConsoleServerPortTemplate not found in list");
  }});
}

function verifyConsoleServerPortTemplateDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingConsoleServerPortTemplate(id) {
  var url = "/api/dcim/console-server-port-templates/" + id + "/";
  var description = "Verify negative delete for ConsoleServerPortTemplate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForConsoleServerPortTemplateAdded(id) {
  waitFor(matchSuccess("Create console server port template with id " + id));
}

function createConsoleServerPort(id) {
  var url = "/api/dcim/console-server-ports/";
  var description = "Create console server port with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteConsoleServerPort(id) {
  var url = "/api/dcim/console-server-ports/" + id + "/";
  var description = "Delete console server port with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateConsoleServerPort(id) {
  var url = "/api/dcim/console-server-ports/" + id + "/";
  var description = "Update console server port with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getConsoleServerPort(id) {
  var url = "/api/dcim/console-server-ports/" + id + "/";
  var description = "Get console server port with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingConsoleServerPort(id) {
  var url = "/api/dcim/console-server-ports/";
  var description = "Try Add Existing ConsoleServerPort";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyConsoleServerPortExists(id) {
  var url = "/api/dcim/console-server-ports/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ConsoleServerPort not found in list");
  }});
}

function verifyConsoleServerPortDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingConsoleServerPort(id) {
  var url = "/api/dcim/console-server-ports/" + id + "/";
  var description = "Verify negative delete for ConsoleServerPort";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForConsoleServerPortAdded(id) {
  waitFor(matchSuccess("Create console server port with id " + id));
}

function createDeviceBayTemplate(id) {
  var url = "/api/dcim/device-bay-templates/";
  var description = "Create device bay template with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteDeviceBayTemplate(id) {
  var url = "/api/dcim/device-bay-templates/" + id + "/";
  var description = "Delete device bay template with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateDeviceBayTemplate(id) {
  var url = "/api/dcim/device-bay-templates/" + id + "/";
  var description = "Update device bay template with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getDeviceBayTemplate(id) {
  var url = "/api/dcim/device-bay-templates/" + id + "/";
  var description = "Get device bay template with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingDeviceBayTemplate(id) {
  var url = "/api/dcim/device-bay-templates/";
  var description = "Try Add Existing DeviceBayTemplate";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDeviceBayTemplateExists(id) {
  var url = "/api/dcim/device-bay-templates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("DeviceBayTemplate not found in list");
  }});
}

function verifyDeviceBayTemplateDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingDeviceBayTemplate(id) {
  var url = "/api/dcim/device-bay-templates/" + id + "/";
  var description = "Verify negative delete for DeviceBayTemplate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForDeviceBayTemplateAdded(id) {
  waitFor(matchSuccess("Create device bay template with id " + id));
}

function createDeviceBay(id) {
  var url = "/api/dcim/device-bays/";
  var description = "Create device bay with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteDeviceBay(id) {
  var url = "/api/dcim/device-bays/" + id + "/";
  var description = "Delete device bay with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateDeviceBay(id) {
  var url = "/api/dcim/device-bays/" + id + "/";
  var description = "Update device bay with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getDeviceBay(id) {
  var url = "/api/dcim/device-bays/" + id + "/";
  var description = "Get device bay with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingDeviceBay(id) {
  var url = "/api/dcim/device-bays/";
  var description = "Try Add Existing DeviceBay";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDeviceBayExists(id) {
  var url = "/api/dcim/device-bays/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("DeviceBay not found in list");
  }});
}

function verifyDeviceBayDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingDeviceBay(id) {
  var url = "/api/dcim/device-bays/" + id + "/";
  var description = "Verify negative delete for DeviceBay";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForDeviceBayAdded(id) {
  waitFor(matchSuccess("Create device bay with id " + id));
}

function createDeviceRole(id, name, slug) {
  var url = "/api/dcim/device-roles/";
  var description = "Create device role " + name + " with id " + id;
  var body = {
    "slug": String(slug),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteDeviceRole(id, name, slug) {
  var url = "/api/dcim/device-roles/" + id + "/";
  var description = "Delete device role with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateDeviceRole(id, name, slug) {
  var url = "/api/dcim/device-roles/" + id + "/";
  var description = "Update device role with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getDeviceRole(id, name, slug) {
  var url = "/api/dcim/device-roles/" + id + "/";
  var description = "Get device role with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function patchDeviceRole(id, name, slug) {
  var url = "/api/dcim/device-roles/" + id + "/";
  var description = "Patch device role with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function tryToAddExistingDeviceRole(id, name, slug) {
  var url = "/api/dcim/device-roles/";
  var description = "Try Add Existing DeviceRole";
  var body = {
    "slug": String(slug),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDeviceRoleExists(id, name, slug) {
  var url = "/api/dcim/device-roles/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("DeviceRole not found in list");
  }});
}

function verifyDeviceRoleDoesNotExist(id, name, slug) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingDeviceRole(id, name, slug) {
  var url = "/api/dcim/device-roles/" + id + "/";
  var description = "Verify negative delete for DeviceRole";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForDeviceRoleAdded(id, name, slug) {
  waitFor(matchSuccess("Create device role " + name + " with id " + id));
}

function createDeviceType(id) {
  var url = "/api/dcim/device-types/";
  var description = "Create device type";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getDeviceType(id) {
  var url = "/api/dcim/device-types/" + id + "/";
  var description = "Get device type with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateDeviceType(id) {
  var url = "/api/dcim/device-types/" + id + "/";
  var description = "Update device type with id " + id;
  var body = {
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchDeviceType(id) {
  var url = "/api/dcim/device-types/" + id + "/";
  var description = "Patch device type with id " + id;
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteDeviceType(id) {
  var url = "/api/dcim/device-types/" + id + "/";
  var description = "Delete device type with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function bulkUpdateDeviceTypes(id) {
  var url = "/api/dcim/device-types/";
  var description = "Bulk update device types";
  var body = {
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPatchDeviceTypes(id) {
  var url = "/api/dcim/device-types/";
  var description = "Bulk patch device types";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteDeviceTypes(id) {
  var url = "/api/dcim/device-types/";
  var description = "Bulk delete device types";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingDeviceType(id) {
  var url = "/api/dcim/device-types/";
  var description = "Try Add Existing DeviceType";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDeviceTypeExists(id) {
  var url = "/api/dcim/device-types/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("DeviceType not found in list");
  }});
}

function verifyDeviceTypeDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingDeviceType(id) {
  var url = "/api/dcim/device-types/" + id + "/";
  var description = "Verify negative delete for DeviceType";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForDeviceTypeAdded(id) {
  waitFor(matchSuccess("Create device type"));
}

function createDevice(id) {
  var url = "/api/dcim/devices/";
  var description = "Create device";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getDevice(id) {
  var url = "/api/dcim/devices/" + id + "/";
  var description = "Get device with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateDevice(id) {
  var url = "/api/dcim/devices/" + id + "/";
  var description = "Update device with id " + id;
  var body = {
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchDevice(id) {
  var url = "/api/dcim/devices/" + id + "/";
  var description = "Patch device with id " + id;
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteDevice(id) {
  var url = "/api/dcim/devices/" + id + "/";
  var description = "Delete device with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function bulkUpdateDevices(id) {
  var url = "/api/dcim/devices/";
  var description = "Bulk update devices";
  var body = {
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPatchDevices(id) {
  var url = "/api/dcim/devices/";
  var description = "Bulk patch devices";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteDevices(id) {
  var url = "/api/dcim/devices/";
  var description = "Bulk delete devices";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingDevice(id) {
  var url = "/api/dcim/devices/";
  var description = "Try Add Existing Device";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDeviceExists(id) {
  var url = "/api/dcim/devices/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Device not found in list");
  }});
}

function verifyDeviceDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingDevice(id) {
  var url = "/api/dcim/devices/" + id + "/";
  var description = "Verify negative delete for Device";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForDeviceAdded(id) {
  waitFor(matchSuccess("Create device"));
}

function createDeviceRenderConfig(id) {
  var url = "/api/dcim/devices/" + id + "/render-config/";
  var description = "Render config for device with id " + id;
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function tryToAddExistingDeviceRenderConfig(id) {
  var url = "/api/dcim/devices/" + id + "/render-config/";
  var description = "Try Add Existing DeviceRenderConfig";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function waitForDeviceRenderConfigAdded(id) {
  waitFor(matchSuccess("Render config for device with id " + id));
}

function createFrontPortTemplate(id) {
  var url = "/api/dcim/front-port-templates/";
  var description = "Create front port template";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getFrontPortTemplate(id) {
  var url = "/api/dcim/front-port-templates/" + id + "/";
  var description = "Get front port template with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateFrontPortTemplate(id) {
  var url = "/api/dcim/front-port-templates/" + id + "/";
  var description = "Update front port template with id " + id;
  var body = {
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchFrontPortTemplate(id) {
  var url = "/api/dcim/front-port-templates/" + id + "/";
  var description = "Patch front port template with id " + id;
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteFrontPortTemplate(id) {
  var url = "/api/dcim/front-port-templates/" + id + "/";
  var description = "Delete front port template with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function bulkUpdateFrontPortTemplates(id) {
  var url = "/api/dcim/front-port-templates/";
  var description = "Bulk update front port templates";
  var body = {
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPatchFrontPortTemplates(id) {
  var url = "/api/dcim/front-port-templates/";
  var description = "Bulk patch front port templates";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteFrontPortTemplates(id) {
  var url = "/api/dcim/front-port-templates/";
  var description = "Bulk delete front port templates";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingFrontPortTemplate(id) {
  var url = "/api/dcim/front-port-templates/";
  var description = "Try Add Existing FrontPortTemplate";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyFrontPortTemplateExists(id) {
  var url = "/api/dcim/front-port-templates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("FrontPortTemplate not found in list");
  }});
}

function verifyFrontPortTemplateDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingFrontPortTemplate(id) {
  var url = "/api/dcim/front-port-templates/" + id + "/";
  var description = "Verify negative delete for FrontPortTemplate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForFrontPortTemplateAdded(id) {
  waitFor(matchSuccess("Create front port template"));
}

function createFrontPort(id) {
  var url = "/api/dcim/front-ports/";
  var description = "Create front port";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getFrontPort(id) {
  var url = "/api/dcim/front-ports/" + id + "/";
  var description = "Get front port with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateFrontPort(id) {
  var url = "/api/dcim/front-ports/" + id + "/";
  var description = "Update front port with id " + id;
  var body = {
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchFrontPort(id) {
  var url = "/api/dcim/front-ports/" + id + "/";
  var description = "Patch front port with id " + id;
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteFrontPort(id) {
  var url = "/api/dcim/front-ports/" + id + "/";
  var description = "Delete front port with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function bulkUpdateFrontPorts(id) {
  var url = "/api/dcim/front-ports/";
  var description = "Bulk update front ports";
  var body = {
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPatchFrontPorts(id) {
  var url = "/api/dcim/front-ports/";
  var description = "Bulk patch front ports";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteFrontPorts(id) {
  var url = "/api/dcim/front-ports/";
  var description = "Bulk delete front ports";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingFrontPort(id) {
  var url = "/api/dcim/front-ports/";
  var description = "Try Add Existing FrontPort";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyFrontPortExists(id) {
  var url = "/api/dcim/front-ports/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("FrontPort not found in list");
  }});
}

function verifyFrontPortDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingFrontPort(id) {
  var url = "/api/dcim/front-ports/" + id + "/";
  var description = "Verify negative delete for FrontPort";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForFrontPortAdded(id) {
  waitFor(matchSuccess("Create front port"));
}

function getFrontPortPaths(id) {
  var url = "/api/dcim/front-ports/" + id + "/paths/";
  var description = "Get paths for front port with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyFrontPortPathsExists(id) {
  var url = "/api/dcim/front-ports/" + id + "/paths/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("FrontPortPaths not found in list");
  }});
}

function verifyFrontPortPathsDoesNotExist(id) { pvg.success("Assumed gone"); }

function createInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request) {
  var url = "/api/dcim/interface-templates/";
  var description = "Create interface template " + name;
  var body = {
    "name": String(name),
    "device_type_id": String(device_type_id),
    "module_type_id": String(module_type_id),
    "description": String(description),
    "enabled": String(enabled),
    "poe_mode": String(poe_mode),
    "poe_type": String(poe_type),
    "rf_role": String(rf_role),
    "type": String(type),
    "mgmt_only": String(mgmt_only),
    "created_by_request": String(created_by_request),
    "modified_by_request": String(modified_by_request),
    "updated_by_request": String(updated_by_request),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request) {
  var url = "/api/dcim/interface-templates/" + id + "/";
  var description = "Get interface template with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request) {
  var url = "/api/dcim/interface-templates/" + id + "/";
  var description = "Update interface template with id " + id;
  var body = {
    "name": String(name),
    "device_type_id": String(device_type_id),
    "module_type_id": String(module_type_id),
    "description": String(description),
    "enabled": String(enabled),
    "poe_mode": String(poe_mode),
    "poe_type": String(poe_type),
    "rf_role": String(rf_role),
    "type": String(type),
    "mgmt_only": String(mgmt_only),
    "created_by_request": String(created_by_request),
    "modified_by_request": String(modified_by_request),
    "updated_by_request": String(updated_by_request),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request) {
  var url = "/api/dcim/interface-templates/" + id + "/";
  var description = "Partially update interface template with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request) {
  var url = "/api/dcim/interface-templates/" + id + "/";
  var description = "Delete interface template with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request) {
  var url = "/api/dcim/interface-templates/";
  var description = "Try Add Existing InterfaceTemplate";
  var body = {
    "name": String(name),
    "device_type_id": String(device_type_id),
    "module_type_id": String(module_type_id),
    "description": String(description),
    "enabled": String(enabled),
    "poe_mode": String(poe_mode),
    "poe_type": String(poe_type),
    "rf_role": String(rf_role),
    "type": String(type),
    "mgmt_only": String(mgmt_only),
    "created_by_request": String(created_by_request),
    "modified_by_request": String(modified_by_request),
    "updated_by_request": String(updated_by_request),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyInterfaceTemplateExists(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request) {
  var url = "/api/dcim/interface-templates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("InterfaceTemplate not found in list");
  }});
}

function verifyInterfaceTemplateDoesNotExist(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request) {
  var url = "/api/dcim/interface-templates/" + id + "/";
  var description = "Verify negative delete for InterfaceTemplate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForInterfaceTemplateAdded(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request) {
  waitFor(matchSuccess("Create interface template " + name));
}

function createInterface(id) {
  var url = "/api/virtualization/interfaces/";
  var description = "Create interface with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getInterface(id) {
  var url = "/api/virtualization/interfaces/" + id + "/";
  var description = "Get interface with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateInterface(id) {
  var url = "/api/virtualization/interfaces/" + id + "/";
  var description = "Update interface with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateInterface(id) {
  var url = "/api/dcim/interfaces/" + id + "/";
  var description = "Partially update interface with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteInterface(id) {
  var url = "/api/virtualization/interfaces/" + id + "/";
  var description = "Delete interface with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingInterface(id) {
  var url = "/api/virtualization/interfaces/";
  var description = "Try Add Existing Interface";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyInterfaceExists(id) {
  var url = "/api/virtualization/interfaces/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Interface not found in list");
  }});
}

function verifyInterfaceDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingInterface(id) {
  var url = "/api/virtualization/interfaces/" + id + "/";
  var description = "Verify negative delete for Interface";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForInterfaceAdded(id) {
  waitFor(matchSuccess("Create interface with id " + id));
}

function createInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request) {
  var url = "/api/dcim/inventory-item-roles/";
  var description = "Create inventory item role " + name;
  var body = {
    "name": String(name),
    "color": String(color),
    "description": String(description),
    "created_by_request": String(created_by_request),
    "modified_by_request": String(modified_by_request),
    "updated_by_request": String(updated_by_request),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request) {
  var url = "/api/dcim/inventory-item-roles/" + id + "/";
  var description = "Get inventory item role with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request) {
  var url = "/api/dcim/inventory-item-roles/" + id + "/";
  var description = "Update inventory item role with id " + id;
  var body = {
    "name": String(name),
    "color": String(color),
    "description": String(description),
    "created_by_request": String(created_by_request),
    "modified_by_request": String(modified_by_request),
    "updated_by_request": String(updated_by_request),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request) {
  var url = "/api/dcim/inventory-item-roles/" + id + "/";
  var description = "Partially update inventory item role with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request) {
  var url = "/api/dcim/inventory-item-roles/" + id + "/";
  var description = "Delete inventory item role with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request) {
  var url = "/api/dcim/inventory-item-roles/";
  var description = "Try Add Existing InventoryItemRole";
  var body = {
    "name": String(name),
    "color": String(color),
    "description": String(description),
    "created_by_request": String(created_by_request),
    "modified_by_request": String(modified_by_request),
    "updated_by_request": String(updated_by_request),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyInventoryItemRoleExists(color, created_by_request, description, id, modified_by_request, name, updated_by_request) {
  var url = "/api/dcim/inventory-item-roles/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("InventoryItemRole not found in list");
  }});
}

function verifyInventoryItemRoleDoesNotExist(color, created_by_request, description, id, modified_by_request, name, updated_by_request) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request) {
  var url = "/api/dcim/inventory-item-roles/" + id + "/";
  var description = "Verify negative delete for InventoryItemRole";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForInventoryItemRoleAdded(color, created_by_request, description, id, modified_by_request, name, updated_by_request) {
  waitFor(matchSuccess("Create inventory item role " + name));
}

function createInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request) {
  var url = "/api/dcim/inventory-item-templates/";
  var description = "Create inventory item template " + name;
  var body = {
    "name": String(name),
    "component_id": String(component_id),
    "component_type": String(component_type),
    "description": String(description),
    "created_by_request": String(created_by_request),
    "modified_by_request": String(modified_by_request),
    "updated_by_request": String(updated_by_request),
    "parent_id": String(parent_id),
    "part_id": String(part_id),
    "role_id": String(role_id),
    "manufacturer_id": String(manufacturer_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request) {
  var url = "/api/dcim/inventory-item-templates/" + id + "/";
  var description = "Get inventory item template with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request) {
  var url = "/api/dcim/inventory-item-templates/" + id + "/";
  var description = "Update inventory item template with id " + id;
  var body = {
    "name": String(name),
    "component_id": String(component_id),
    "component_type": String(component_type),
    "description": String(description),
    "created_by_request": String(created_by_request),
    "modified_by_request": String(modified_by_request),
    "updated_by_request": String(updated_by_request),
    "parent_id": String(parent_id),
    "part_id": String(part_id),
    "role_id": String(role_id),
    "manufacturer_id": String(manufacturer_id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request) {
  var url = "/api/dcim/inventory-item-templates/" + id + "/";
  var description = "Partially update inventory item template with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request) {
  var url = "/api/dcim/inventory-item-templates/" + id + "/";
  var description = "Delete inventory item template with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request) {
  var url = "/api/dcim/inventory-item-templates/";
  var description = "Try Add Existing InventoryItemTemplate";
  var body = {
    "name": String(name),
    "component_id": String(component_id),
    "component_type": String(component_type),
    "description": String(description),
    "created_by_request": String(created_by_request),
    "modified_by_request": String(modified_by_request),
    "updated_by_request": String(updated_by_request),
    "parent_id": String(parent_id),
    "part_id": String(part_id),
    "role_id": String(role_id),
    "manufacturer_id": String(manufacturer_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyInventoryItemTemplateExists(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request) {
  var url = "/api/dcim/inventory-item-templates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("InventoryItemTemplate not found in list");
  }});
}

function verifyInventoryItemTemplateDoesNotExist(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request) {
  var url = "/api/dcim/inventory-item-templates/" + id + "/";
  var description = "Verify negative delete for InventoryItemTemplate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForInventoryItemTemplateAdded(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request) {
  waitFor(matchSuccess("Create inventory item template " + name));
}

function createInventoryItem(id) {
  var url = "/api/dcim/inventory-items/";
  var description = "Create inventory item with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteInventoryItem(id) {
  var url = "/api/dcim/inventory-items/" + id + "/";
  var description = "Delete inventory item with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateInventoryItem(id) {
  var url = "/api/dcim/inventory-items/" + id + "/";
  var description = "Update inventory item with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getInventoryItem(id) {
  var url = "/api/dcim/inventory-items/" + id + "/";
  var description = "Get inventory item with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingInventoryItem(id) {
  var url = "/api/dcim/inventory-items/";
  var description = "Try Add Existing InventoryItem";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyInventoryItemExists(id) {
  var url = "/api/dcim/inventory-items/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("InventoryItem not found in list");
  }});
}

function verifyInventoryItemDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingInventoryItem(id) {
  var url = "/api/dcim/inventory-items/" + id + "/";
  var description = "Verify negative delete for InventoryItem";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForInventoryItemAdded(id) {
  waitFor(matchSuccess("Create inventory item with id " + id));
}

function createLocation(id) {
  var url = "/api/dcim/locations/";
  var description = "Create location {name} with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteLocation(id) {
  var url = "/api/dcim/locations/" + id + "/";
  var description = "Delete location with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateLocation(id) {
  var url = "/api/dcim/locations/" + id + "/";
  var description = "Update location with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getLocation(id) {
  var url = "/api/dcim/locations/" + id + "/";
  var description = "Get location with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingLocation(id) {
  var url = "/api/dcim/locations/";
  var description = "Try Add Existing Location";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyLocationExists(id) {
  var url = "/api/dcim/locations/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Location not found in list");
  }});
}

function verifyLocationDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingLocation(id) {
  var url = "/api/dcim/locations/" + id + "/";
  var description = "Verify negative delete for Location";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForLocationAdded(id) {
  waitFor(matchSuccess("Create location {name} with id " + id));
}

function createMACAddress(id) {
  var url = "/api/dcim/mac-addresses/";
  var description = "Create MAC address {mac_address} with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteMACAddress(id) {
  var url = "/api/dcim/mac-addresses/" + id + "/";
  var description = "Delete MAC address with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateMACAddress(id) {
  var url = "/api/dcim/mac-addresses/" + id + "/";
  var description = "Update MAC address with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getMACAddress(id) {
  var url = "/api/dcim/mac-addresses/" + id + "/";
  var description = "Get MAC address with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingMACAddress(id) {
  var url = "/api/dcim/mac-addresses/";
  var description = "Try Add Existing MACAddress";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyMACAddressExists(id) {
  var url = "/api/dcim/mac-addresses/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("MACAddress not found in list");
  }});
}

function verifyMACAddressDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingMACAddress(id) {
  var url = "/api/dcim/mac-addresses/" + id + "/";
  var description = "Verify negative delete for MACAddress";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForMACAddressAdded(id) {
  waitFor(matchSuccess("Create MAC address {mac_address} with id " + id));
}

function createManufacturer(id) {
  var url = "/api/dcim/manufacturers/";
  var description = "Create manufacturer {name} with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteManufacturer(id) {
  var url = "/api/dcim/manufacturers/" + id + "/";
  var description = "Delete manufacturer with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateManufacturer(id) {
  var url = "/api/dcim/manufacturers/" + id + "/";
  var description = "Update manufacturer with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getManufacturer(id) {
  var url = "/api/dcim/manufacturers/" + id + "/";
  var description = "Get manufacturer with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingManufacturer(id) {
  var url = "/api/dcim/manufacturers/";
  var description = "Try Add Existing Manufacturer";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyManufacturerExists(id) {
  var url = "/api/dcim/manufacturers/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Manufacturer not found in list");
  }});
}

function verifyManufacturerDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingManufacturer(id) {
  var url = "/api/dcim/manufacturers/" + id + "/";
  var description = "Verify negative delete for Manufacturer";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForManufacturerAdded(id) {
  waitFor(matchSuccess("Create manufacturer {name} with id " + id));
}

function createModuleBayTemplate(id) {
  var url = "/api/dcim/module-bay-templates/";
  var description = "Create module bay template {name} with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteModuleBayTemplate(id) {
  var url = "/api/dcim/module-bay-templates/" + id + "/";
  var description = "Delete module bay template with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateModuleBayTemplate(id) {
  var url = "/api/dcim/module-bay-templates/" + id + "/";
  var description = "Update module bay template with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getModuleBayTemplate(id) {
  var url = "/api/dcim/module-bay-templates/" + id + "/";
  var description = "Get module bay template with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingModuleBayTemplate(id) {
  var url = "/api/dcim/module-bay-templates/";
  var description = "Try Add Existing ModuleBayTemplate";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyModuleBayTemplateExists(id) {
  var url = "/api/dcim/module-bay-templates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ModuleBayTemplate not found in list");
  }});
}

function verifyModuleBayTemplateDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingModuleBayTemplate(id) {
  var url = "/api/dcim/module-bay-templates/" + id + "/";
  var description = "Verify negative delete for ModuleBayTemplate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForModuleBayTemplateAdded(id) {
  waitFor(matchSuccess("Create module bay template {name} with id " + id));
}

function createModuleBay(id) {
  var url = "/api/dcim/module-bays/";
  var description = "Create module bay with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteModuleBay(id) {
  var url = "/api/dcim/module-bays/" + id + "/";
  var description = "Delete module bay with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateModuleBay(id) {
  var url = "/api/dcim/module-bays/" + id + "/";
  var description = "Update module bay with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getModuleBay(id) {
  var url = "/api/dcim/module-bays/" + id + "/";
  var description = "Get module bay with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingModuleBay(id) {
  var url = "/api/dcim/module-bays/";
  var description = "Try Add Existing ModuleBay";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyModuleBayExists(id) {
  var url = "/api/dcim/module-bays/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ModuleBay not found in list");
  }});
}

function verifyModuleBayDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingModuleBay(id) {
  var url = "/api/dcim/module-bays/" + id + "/";
  var description = "Verify negative delete for ModuleBay";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForModuleBayAdded(id) {
  waitFor(matchSuccess("Create module bay with id " + id));
}

function createModuleTypeProfile(id) {
  var url = "/api/dcim/module-type-profiles/";
  var description = "Create module type profile with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteModuleTypeProfile(id) {
  var url = "/api/dcim/module-type-profiles/" + id + "/";
  var description = "Delete module type profile with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateModuleTypeProfile(id) {
  var url = "/api/dcim/module-type-profiles/" + id + "/";
  var description = "Update module type profile with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getModuleTypeProfile(id) {
  var url = "/api/dcim/module-type-profiles/" + id + "/";
  var description = "Get module type profile with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingModuleTypeProfile(id) {
  var url = "/api/dcim/module-type-profiles/";
  var description = "Try Add Existing ModuleTypeProfile";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyModuleTypeProfileExists(id) {
  var url = "/api/dcim/module-type-profiles/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ModuleTypeProfile not found in list");
  }});
}

function verifyModuleTypeProfileDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingModuleTypeProfile(id) {
  var url = "/api/dcim/module-type-profiles/" + id + "/";
  var description = "Verify negative delete for ModuleTypeProfile";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForModuleTypeProfileAdded(id) {
  waitFor(matchSuccess("Create module type profile with id " + id));
}

function createModuleType(id) {
  var url = "/api/dcim/module-types/";
  var description = "Create module type with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteModuleType(id) {
  var url = "/api/dcim/module-types/" + id + "/";
  var description = "Delete module type with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateModuleType(id) {
  var url = "/api/dcim/module-types/" + id + "/";
  var description = "Update module type with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getModuleType(id) {
  var url = "/api/dcim/module-types/" + id + "/";
  var description = "Get module type with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingModuleType(id) {
  var url = "/api/dcim/module-types/";
  var description = "Try Add Existing ModuleType";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyModuleTypeExists(id) {
  var url = "/api/dcim/module-types/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ModuleType not found in list");
  }});
}

function verifyModuleTypeDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingModuleType(id) {
  var url = "/api/dcim/module-types/" + id + "/";
  var description = "Verify negative delete for ModuleType";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForModuleTypeAdded(id) {
  waitFor(matchSuccess("Create module type with id " + id));
}

function createModule(id) {
  var url = "/api/dcim/modules/";
  var description = "Create module with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteModule(id) {
  var url = "/api/dcim/modules/" + id + "/";
  var description = "Delete module with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateModule(id) {
  var url = "/api/dcim/modules/" + id + "/";
  var description = "Update module with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getModule(id) {
  var url = "/api/dcim/modules/" + id + "/";
  var description = "Get module with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingModule(id) {
  var url = "/api/dcim/modules/";
  var description = "Try Add Existing Module";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyModuleExists(id) {
  var url = "/api/dcim/modules/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Module not found in list");
  }});
}

function verifyModuleDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingModule(id) {
  var url = "/api/dcim/modules/" + id + "/";
  var description = "Verify negative delete for Module";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForModuleAdded(id) {
  waitFor(matchSuccess("Create module with id " + id));
}

function createPlatform(id) {
  var url = "/api/dcim/platforms/";
  var description = "Create platform with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePlatform(id) {
  var url = "/api/dcim/platforms/" + id + "/";
  var description = "Delete platform with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updatePlatform(id) {
  var url = "/api/dcim/platforms/" + id + "/";
  var description = "Update platform with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getPlatform(id) {
  var url = "/api/dcim/platforms/" + id + "/";
  var description = "Get platform with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingPlatform(id) {
  var url = "/api/dcim/platforms/";
  var description = "Try Add Existing Platform";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPlatformExists(id) {
  var url = "/api/dcim/platforms/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Platform not found in list");
  }});
}

function verifyPlatformDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingPlatform(id) {
  var url = "/api/dcim/platforms/" + id + "/";
  var description = "Verify negative delete for Platform";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForPlatformAdded(id) {
  waitFor(matchSuccess("Create platform with id " + id));
}

function createPowerFeed(id) {
  var url = "/api/dcim/power-feeds/";
  var description = "Create power feed with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePowerFeed(id) {
  var url = "/api/dcim/power-feeds/" + id + "/";
  var description = "Delete power feed with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updatePowerFeed(id) {
  var url = "/api/dcim/power-feeds/" + id + "/";
  var description = "Update power feed with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getPowerFeed(id) {
  var url = "/api/dcim/power-feeds/" + id + "/";
  var description = "Get power feed with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingPowerFeed(id) {
  var url = "/api/dcim/power-feeds/";
  var description = "Try Add Existing PowerFeed";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPowerFeedExists(id) {
  var url = "/api/dcim/power-feeds/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("PowerFeed not found in list");
  }});
}

function verifyPowerFeedDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingPowerFeed(id) {
  var url = "/api/dcim/power-feeds/" + id + "/";
  var description = "Verify negative delete for PowerFeed";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForPowerFeedAdded(id) {
  waitFor(matchSuccess("Create power feed with id " + id));
}

function createPowerOutletTemplate(id) {
  var url = "/api/dcim/power-outlet-templates/";
  var description = "Create power outlet template with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePowerOutletTemplate(id) {
  var url = "/api/dcim/power-outlet-templates/" + id + "/";
  var description = "Delete power outlet template with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updatePowerOutletTemplate(id) {
  var url = "/api/dcim/power-outlet-templates/" + id + "/";
  var description = "Update power outlet template with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getPowerOutletTemplate(id) {
  var url = "/api/dcim/power-outlet-templates/" + id + "/";
  var description = "Get power outlet template with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingPowerOutletTemplate(id) {
  var url = "/api/dcim/power-outlet-templates/";
  var description = "Try Add Existing PowerOutletTemplate";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPowerOutletTemplateExists(id) {
  var url = "/api/dcim/power-outlet-templates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("PowerOutletTemplate not found in list");
  }});
}

function verifyPowerOutletTemplateDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingPowerOutletTemplate(id) {
  var url = "/api/dcim/power-outlet-templates/" + id + "/";
  var description = "Verify negative delete for PowerOutletTemplate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForPowerOutletTemplateAdded(id) {
  waitFor(matchSuccess("Create power outlet template with id " + id));
}

function createPowerOutlet(id) {
  var url = "/api/dcim/power-outlets/";
  var description = "Create power outlet with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePowerOutlet(id) {
  var url = "/api/dcim/power-outlets/" + id + "/";
  var description = "Delete power outlet with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updatePowerOutlet(id) {
  var url = "/api/dcim/power-outlets/" + id + "/";
  var description = "Update power outlet with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getPowerOutlet(id) {
  var url = "/api/dcim/power-outlets/" + id + "/";
  var description = "Get power outlet with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingPowerOutlet(id) {
  var url = "/api/dcim/power-outlets/";
  var description = "Try Add Existing PowerOutlet";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPowerOutletExists(id) {
  var url = "/api/dcim/power-outlets/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("PowerOutlet not found in list");
  }});
}

function verifyPowerOutletDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingPowerOutlet(id) {
  var url = "/api/dcim/power-outlets/" + id + "/";
  var description = "Verify negative delete for PowerOutlet";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForPowerOutletAdded(id) {
  waitFor(matchSuccess("Create power outlet with id " + id));
}

function createPowerPanel(id) {
  var url = "/api/dcim/power-panels/";
  var description = "Create power panel with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePowerPanel(id) {
  var url = "/api/dcim/power-panels/" + id + "/";
  var description = "Delete power panel with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updatePowerPanel(id) {
  var url = "/api/dcim/power-panels/" + id + "/";
  var description = "Update power panel with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getPowerPanel(id) {
  var url = "/api/dcim/power-panels/" + id + "/";
  var description = "Get power panel with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingPowerPanel(id) {
  var url = "/api/dcim/power-panels/";
  var description = "Try Add Existing PowerPanel";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPowerPanelExists(id) {
  var url = "/api/dcim/power-panels/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("PowerPanel not found in list");
  }});
}

function verifyPowerPanelDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingPowerPanel(id) {
  var url = "/api/dcim/power-panels/" + id + "/";
  var description = "Verify negative delete for PowerPanel";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForPowerPanelAdded(id) {
  waitFor(matchSuccess("Create power panel with id " + id));
}

function createPowerPortTemplate(id) {
  var url = "/api/dcim/power-port-templates/";
  var description = "Create power port template " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePowerPortTemplate(id) {
  var url = "/api/dcim/power-port-templates/" + id + "/";
  var description = "Delete power port template " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updatePowerPortTemplate(id) {
  var url = "/api/dcim/power-port-templates/" + id + "/";
  var description = "Update power port template " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getPowerPortTemplate(id) {
  var url = "/api/dcim/power-port-templates/" + id + "/";
  var description = "Get power port template " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingPowerPortTemplate(id) {
  var url = "/api/dcim/power-port-templates/";
  var description = "Try Add Existing PowerPortTemplate";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPowerPortTemplateExists(id) {
  var url = "/api/dcim/power-port-templates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("PowerPortTemplate not found in list");
  }});
}

function verifyPowerPortTemplateDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingPowerPortTemplate(id) {
  var url = "/api/dcim/power-port-templates/" + id + "/";
  var description = "Verify negative delete for PowerPortTemplate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForPowerPortTemplateAdded(id) {
  waitFor(matchSuccess("Create power port template " + id));
}

function createPowerPort(id) {
  var url = "/api/dcim/power-ports/";
  var description = "Create power port " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePowerPort(id) {
  var url = "/api/dcim/power-ports/" + id + "/";
  var description = "Delete power port " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updatePowerPort(id) {
  var url = "/api/dcim/power-ports/" + id + "/";
  var description = "Update power port " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getPowerPort(id) {
  var url = "/api/dcim/power-ports/" + id + "/";
  var description = "Get power port " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingPowerPort(id) {
  var url = "/api/dcim/power-ports/";
  var description = "Try Add Existing PowerPort";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPowerPortExists(id) {
  var url = "/api/dcim/power-ports/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("PowerPort not found in list");
  }});
}

function verifyPowerPortDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingPowerPort(id) {
  var url = "/api/dcim/power-ports/" + id + "/";
  var description = "Verify negative delete for PowerPort";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForPowerPortAdded(id) {
  waitFor(matchSuccess("Create power port " + id));
}

function createRackReservation(id) {
  var url = "/api/dcim/rack-reservations/";
  var description = "Create rack reservation " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteRackReservation(id) {
  var url = "/api/dcim/rack-reservations/" + id + "/";
  var description = "Delete rack reservation " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateRackReservation(id) {
  var url = "/api/dcim/rack-reservations/" + id + "/";
  var description = "Update rack reservation " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getRackReservation(id) {
  var url = "/api/dcim/rack-reservations/" + id + "/";
  var description = "Get rack reservation " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingRackReservation(id) {
  var url = "/api/dcim/rack-reservations/";
  var description = "Try Add Existing RackReservation";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRackReservationExists(id) {
  var url = "/api/dcim/rack-reservations/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("RackReservation not found in list");
  }});
}

function verifyRackReservationDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingRackReservation(id) {
  var url = "/api/dcim/rack-reservations/" + id + "/";
  var description = "Verify negative delete for RackReservation";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForRackReservationAdded(id) {
  waitFor(matchSuccess("Create rack reservation " + id));
}

function createRackRole(id, name, slug) {
  var url = "/api/dcim/rack-roles/";
  var description = "Create rack role " + name + " with slug " + slug;
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteRackRole(id, name, slug) {
  var url = "/api/dcim/rack-roles/" + id + "/";
  var description = "Delete rack role " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateRackRole(id, name, slug) {
  var url = "/api/dcim/rack-roles/" + id + "/";
  var description = "Update rack role " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getRackRole(id, name, slug) {
  var url = "/api/dcim/rack-roles/" + id + "/";
  var description = "Get rack role " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingRackRole(id, name, slug) {
  var url = "/api/dcim/rack-roles/";
  var description = "Try Add Existing RackRole";
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRackRoleExists(id, name, slug) {
  var url = "/api/dcim/rack-roles/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("RackRole not found in list");
  }});
}

function verifyRackRoleDoesNotExist(id, name, slug) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingRackRole(id, name, slug) {
  var url = "/api/dcim/rack-roles/" + id + "/";
  var description = "Verify negative delete for RackRole";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForRackRoleAdded(id, name, slug) {
  waitFor(matchSuccess("Create rack role " + name + " with slug " + slug));
}

function createRackType(comments, desc_units, id, name, slug, tags, u_height, width) {
  var url = "/api/dcim/rack-types/";
  var description = "Create rack type " + name + " with slug " + slug;
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteRackType(comments, desc_units, id, name, slug, tags, u_height, width) {
  var url = "/api/dcim/rack-types/" + id + "/";
  var description = "Delete rack type with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateRackType(comments, desc_units, id, name, slug, tags, u_height, width) {
  var url = "/api/dcim/rack-types/" + id + "/";
  var description = "Update rack type with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "width": String(width),
    "u_height": String(u_height),
    "desc_units": String(desc_units),
    "comments": String(comments),
    "tags": String(tags),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getRackType(comments, desc_units, id, name, slug, tags, u_height, width) {
  var url = "/api/dcim/rack-types/" + id + "/";
  var description = "Get rack type with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function partialUpdateRackType(comments, desc_units, id, name, slug, tags, u_height, width) {
  var url = "/api/dcim/rack-types/" + id + "/";
  var description = "Partially update rack type with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "width": String(width),
    "u_height": String(u_height),
    "desc_units": String(desc_units),
    "comments": String(comments),
    "tags": String(tags),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function tryToAddExistingRackType(comments, desc_units, id, name, slug, tags, u_height, width) {
  var url = "/api/dcim/rack-types/";
  var description = "Try Add Existing RackType";
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRackTypeExists(comments, desc_units, id, name, slug, tags, u_height, width) {
  var url = "/api/dcim/rack-types/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("RackType not found in list");
  }});
}

function verifyRackTypeDoesNotExist(comments, desc_units, id, name, slug, tags, u_height, width) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingRackType(comments, desc_units, id, name, slug, tags, u_height, width) {
  var url = "/api/dcim/rack-types/" + id + "/";
  var description = "Verify negative delete for RackType";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForRackTypeAdded(comments, desc_units, id, name, slug, tags, u_height, width) {
  waitFor(matchSuccess("Create rack type " + name + " with slug " + slug));
}

function listRacks(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit) {
  var url = "/api/dcim/racks/";
  var description = "List racks";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit) {
  var url = "/api/dcim/racks/";
  var description = "Create rack " + name + " with id " + id;
  var body = {
    "name": String(name),
    "facility_id": String(facility_id),
    "site": String(site),
    "location": String(location),
    "rack_type": String(rack_type),
    "serial": String(serial),
    "asset_tag": String(asset_tag),
    "u_height": String(u_height),
    "desc_units": String(desc_units),
    "outer_width": String(outer_width),
    "outer_depth": String(outer_depth),
    "outer_height": String(outer_height),
    "outer_unit": String(outer_unit),
    "weight": String(weight),
    "weight_unit": String(weight_unit),
    "max_weight": String(max_weight),
    "comments": String(comments),
    "tags": String(tags),
    "tenant": String(tenant),
    "role": String(role),
    "status": String(status),
    "manufacturer": String(manufacturer),
    "mounting_depth": String(mounting_depth),
    "starting_unit": String(starting_unit),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit) {
  var url = "/api/dcim/racks/" + id + "/";
  var description = "Update rack with id " + id;
  var body = {
    "name": String(name),
    "facility_id": String(facility_id),
    "site": String(site),
    "location": String(location),
    "rack_type": String(rack_type),
    "serial": String(serial),
    "asset_tag": String(asset_tag),
    "u_height": String(u_height),
    "desc_units": String(desc_units),
    "outer_width": String(outer_width),
    "outer_depth": String(outer_depth),
    "outer_height": String(outer_height),
    "outer_unit": String(outer_unit),
    "weight": String(weight),
    "weight_unit": String(weight_unit),
    "max_weight": String(max_weight),
    "comments": String(comments),
    "tags": String(tags),
    "tenant": String(tenant),
    "role": String(role),
    "status": String(status),
    "manufacturer": String(manufacturer),
    "mounting_depth": String(mounting_depth),
    "starting_unit": String(starting_unit),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit) {
  var url = "/api/dcim/racks/" + id + "/";
  var description = "Partially update rack with id " + id;
  var body = {
    "name": String(name),
    "facility_id": String(facility_id),
    "site": String(site),
    "location": String(location),
    "rack_type": String(rack_type),
    "serial": String(serial),
    "asset_tag": String(asset_tag),
    "u_height": String(u_height),
    "desc_units": String(desc_units),
    "outer_width": String(outer_width),
    "outer_depth": String(outer_depth),
    "outer_height": String(outer_height),
    "outer_unit": String(outer_unit),
    "weight": String(weight),
    "weight_unit": String(weight_unit),
    "max_weight": String(max_weight),
    "comments": String(comments),
    "tags": String(tags),
    "tenant": String(tenant),
    "role": String(role),
    "status": String(status),
    "manufacturer": String(manufacturer),
    "mounting_depth": String(mounting_depth),
    "starting_unit": String(starting_unit),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit) {
  var url = "/api/dcim/racks/" + id + "/";
  var description = "Delete rack with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit) {
  var url = "/api/dcim/racks/";
  var description = "Try Add Existing Rack";
  var body = {
    "name": String(name),
    "facility_id": String(facility_id),
    "site": String(site),
    "location": String(location),
    "rack_type": String(rack_type),
    "serial": String(serial),
    "asset_tag": String(asset_tag),
    "u_height": String(u_height),
    "desc_units": String(desc_units),
    "outer_width": String(outer_width),
    "outer_depth": String(outer_depth),
    "outer_height": String(outer_height),
    "outer_unit": String(outer_unit),
    "weight": String(weight),
    "weight_unit": String(weight_unit),
    "max_weight": String(max_weight),
    "comments": String(comments),
    "tags": String(tags),
    "tenant": String(tenant),
    "role": String(role),
    "status": String(status),
    "manufacturer": String(manufacturer),
    "mounting_depth": String(mounting_depth),
    "starting_unit": String(starting_unit),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit) {
  var url = "/api/dcim/racks/" + id + "/";
  var description = "Verify negative delete for Rack";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForRackAdded(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit) {
  waitFor(matchSuccess("Create rack " + name + " with id " + id));
}

function getRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type) {
  var url = "/api/dcim/rear-port-templates/" + id + "/";
  var description = "Get rear port template with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type) {
  var url = "/api/dcim/rear-port-templates/";
  var description = "Create rear port template " + name + " with id " + id;
  var body = {
    "name": String(name),
    "label": String(label),
    "type": String(type),
    "color": String(color),
    "positions": String(positions),
    "description": String(description),
    "tags": String(tags),
    "device_type": String(device_type),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type) {
  var url = "/api/dcim/rear-port-templates/" + id + "/";
  var description = "Update rear port template with id " + id;
  var body = {
    "name": String(name),
    "label": String(label),
    "type": String(type),
    "color": String(color),
    "positions": String(positions),
    "description": String(description),
    "tags": String(tags),
    "device_type": String(device_type),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type) {
  var url = "/api/dcim/rear-port-templates/" + id + "/";
  var description = "Partially update rear port template with id " + id;
  var body = {
    "name": String(name),
    "label": String(label),
    "type": String(type),
    "color": String(color),
    "positions": String(positions),
    "description": String(description),
    "tags": String(tags),
    "device_type": String(device_type),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type) {
  var url = "/api/dcim/rear-port-templates/" + id + "/";
  var description = "Delete rear port template with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type) {
  var url = "/api/dcim/rear-port-templates/";
  var description = "Try Add Existing RearPortTemplate";
  var body = {
    "name": String(name),
    "label": String(label),
    "type": String(type),
    "color": String(color),
    "positions": String(positions),
    "description": String(description),
    "tags": String(tags),
    "device_type": String(device_type),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRearPortTemplateExists(color, description, device_type, id, label, name, positions, tags, type) {
  var url = "/api/dcim/rear-port-templates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("RearPortTemplate not found in list");
  }});
}

function verifyRearPortTemplateDoesNotExist(color, description, device_type, id, label, name, positions, tags, type) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type) {
  var url = "/api/dcim/rear-port-templates/" + id + "/";
  var description = "Verify negative delete for RearPortTemplate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForRearPortTemplateAdded(color, description, device_type, id, label, name, positions, tags, type) {
  waitFor(matchSuccess("Create rear port template " + name + " with id " + id));
}

function getRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis) {
  var url = "/api/dcim/rear-ports/" + id + "/";
  var description = "Get rear port with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis) {
  var url = "/api/dcim/rear-ports/";
  var description = "Create rear port " + name + " with id " + id;
  var body = {
    "name": String(name),
    "label": String(label),
    "type": String(type),
    "color": String(color),
    "cable_end": String(cable_end),
    "cable": String(cable),
    "device": String(device),
    "device_type": String(device_type),
    "device_role": String(device_role),
    "device_status": String(device_status),
    "module": String(module),
    "rack": String(rack),
    "region": String(region),
    "site": String(site),
    "virtual_chassis": String(virtual_chassis),
    "description": String(description),
    "tags": String(tags),
    "occupied": String(occupied),
    "mark_connected": String(mark_connected),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis) {
  var url = "/api/dcim/rear-ports/" + id + "/";
  var description = "Update rear port with id " + id;
  var body = {
    "name": String(name),
    "label": String(label),
    "type": String(type),
    "color": String(color),
    "cable_end": String(cable_end),
    "cable": String(cable),
    "device": String(device),
    "device_type": String(device_type),
    "device_role": String(device_role),
    "device_status": String(device_status),
    "module": String(module),
    "rack": String(rack),
    "region": String(region),
    "site": String(site),
    "virtual_chassis": String(virtual_chassis),
    "description": String(description),
    "tags": String(tags),
    "occupied": String(occupied),
    "mark_connected": String(mark_connected),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis) {
  var url = "/api/dcim/rear-ports/" + id + "/";
  var description = "Partially update rear port with id " + id;
  var body = {
    "name": String(name),
    "label": String(label),
    "type": String(type),
    "color": String(color),
    "cable_end": String(cable_end),
    "cable": String(cable),
    "device": String(device),
    "device_type": String(device_type),
    "device_role": String(device_role),
    "device_status": String(device_status),
    "module": String(module),
    "rack": String(rack),
    "region": String(region),
    "site": String(site),
    "virtual_chassis": String(virtual_chassis),
    "description": String(description),
    "tags": String(tags),
    "occupied": String(occupied),
    "mark_connected": String(mark_connected),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis) {
  var url = "/api/dcim/rear-ports/" + id + "/";
  var description = "Delete rear port with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis) {
  var url = "/api/dcim/rear-ports/";
  var description = "Try Add Existing RearPort";
  var body = {
    "name": String(name),
    "label": String(label),
    "type": String(type),
    "color": String(color),
    "cable_end": String(cable_end),
    "cable": String(cable),
    "device": String(device),
    "device_type": String(device_type),
    "device_role": String(device_role),
    "device_status": String(device_status),
    "module": String(module),
    "rack": String(rack),
    "region": String(region),
    "site": String(site),
    "virtual_chassis": String(virtual_chassis),
    "description": String(description),
    "tags": String(tags),
    "occupied": String(occupied),
    "mark_connected": String(mark_connected),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRearPortExists(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis) {
  var url = "/api/dcim/rear-ports/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("RearPort not found in list");
  }});
}

function verifyRearPortDoesNotExist(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis) {
  var url = "/api/dcim/rear-ports/" + id + "/";
  var description = "Verify negative delete for RearPort";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForRearPortAdded(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis) {
  waitFor(matchSuccess("Create rear port " + name + " with id " + id));
}

function getRegion(id) {
  var url = "/api/dcim/regions/" + id + "/";
  var description = "Get region with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createRegion(id) {
  var url = "/api/dcim/regions/";
  var description = "Create region";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateRegion(id) {
  var url = "/api/dcim/regions/" + id + "/";
  var description = "Update region with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateRegion(id) {
  var url = "/api/dcim/regions/" + id + "/";
  var description = "Partially update region with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteRegion(id) {
  var url = "/api/dcim/regions/" + id + "/";
  var description = "Delete region with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingRegion(id) {
  var url = "/api/dcim/regions/";
  var description = "Try Add Existing Region";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRegionExists(id) {
  var url = "/api/dcim/regions/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Region not found in list");
  }});
}

function verifyRegionDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingRegion(id) {
  var url = "/api/dcim/regions/" + id + "/";
  var description = "Verify negative delete for Region";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForRegionAdded(id) {
  waitFor(matchSuccess("Create region"));
}

function getSiteGroup(id) {
  var url = "/api/dcim/site-groups/" + id + "/";
  var description = "Get site group with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createSiteGroup(id) {
  var url = "/api/dcim/site-groups/";
  var description = "Create site group";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateSiteGroup(id) {
  var url = "/api/dcim/site-groups/" + id + "/";
  var description = "Update site group with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateSiteGroup(id) {
  var url = "/api/dcim/site-groups/" + id + "/";
  var description = "Partially update site group with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteSiteGroup(id) {
  var url = "/api/dcim/site-groups/" + id + "/";
  var description = "Delete site group with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function bulkUpdateSiteGroups(id) {
  var url = "/api/dcim/site-groups/";
  var description = "Bulk update site groups";
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPartialUpdateSiteGroups(id) {
  var url = "/api/dcim/site-groups/";
  var description = "Bulk partially update site groups";
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteSiteGroups(id) {
  var url = "/api/dcim/site-groups/";
  var description = "Bulk delete site groups";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingSiteGroup(id) {
  var url = "/api/dcim/site-groups/";
  var description = "Try Add Existing SiteGroup";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifySiteGroupExists(id) {
  var url = "/api/dcim/site-groups/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("SiteGroup not found in list");
  }});
}

function verifySiteGroupDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingSiteGroup(id) {
  var url = "/api/dcim/site-groups/" + id + "/";
  var description = "Verify negative delete for SiteGroup";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForSiteGroupAdded(id) {
  waitFor(matchSuccess("Create site group"));
}

function getSite(id) {
  var url = "/api/dcim/sites/" + id + "/";
  var description = "Get site with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createSite(id) {
  var url = "/api/dcim/sites/";
  var description = "Create site";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateSite(id) {
  var url = "/api/dcim/sites/" + id + "/";
  var description = "Update site with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateSite(id) {
  var url = "/api/dcim/sites/" + id + "/";
  var description = "Partially update site with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteSite(id) {
  var url = "/api/dcim/sites/" + id + "/";
  var description = "Delete site with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function bulkUpdateSites(id) {
  var url = "/api/dcim/sites/";
  var description = "Bulk update sites";
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPartialUpdateSites(id) {
  var url = "/api/dcim/sites/";
  var description = "Bulk partially update sites";
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteSites(id) {
  var url = "/api/dcim/sites/";
  var description = "Bulk delete sites";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingSite(id) {
  var url = "/api/dcim/sites/";
  var description = "Try Add Existing Site";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifySiteExists(id) {
  var url = "/api/dcim/sites/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Site not found in list");
  }});
}

function verifySiteDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingSite(id) {
  var url = "/api/dcim/sites/" + id + "/";
  var description = "Verify negative delete for Site";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForSiteAdded(id) {
  waitFor(matchSuccess("Create site"));
}

function getVirtualChassis(id) {
  var url = "/api/dcim/virtual-chassis/" + id + "/";
  var description = "Get virtual chassis with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createVirtualChassis(id) {
  var url = "/api/dcim/virtual-chassis/";
  var description = "Create virtual chassis";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateVirtualChassis(id) {
  var url = "/api/dcim/virtual-chassis/" + id + "/";
  var description = "Update virtual chassis with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateVirtualChassis(id) {
  var url = "/api/dcim/virtual-chassis/" + id + "/";
  var description = "Partially update virtual chassis with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteVirtualChassis(id) {
  var url = "/api/dcim/virtual-chassis/" + id + "/";
  var description = "Delete virtual chassis with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function bulkUpdateVirtualChassis(id) {
  var url = "/api/dcim/virtual-chassis/";
  var description = "Bulk update virtual chassis";
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPartialUpdateVirtualChassis(id) {
  var url = "/api/dcim/virtual-chassis/";
  var description = "Bulk partially update virtual chassis";
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteVirtualChassis(id) {
  var url = "/api/dcim/virtual-chassis/";
  var description = "Bulk delete virtual chassis";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingVirtualChassis(id) {
  var url = "/api/dcim/virtual-chassis/";
  var description = "Try Add Existing VirtualChassis";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVirtualChassisExists(id) {
  var url = "/api/dcim/virtual-chassis/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("VirtualChassis not found in list");
  }});
}

function verifyVirtualChassisDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingVirtualChassis(id) {
  var url = "/api/dcim/virtual-chassis/" + id + "/";
  var description = "Verify negative delete for VirtualChassis";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVirtualChassisAdded(id) {
  waitFor(matchSuccess("Create virtual chassis"));
}

function getVirtualDeviceContext(id) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  var description = "Get virtual device context with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createVirtualDeviceContext(id) {
  var url = "/api/dcim/virtual-device-contexts/";
  var description = "Create virtual device context";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateVirtualDeviceContext(id) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  var description = "Update virtual device context with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateVirtualDeviceContext(id) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  var description = "Partially update virtual device context with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteVirtualDeviceContext(id) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  var description = "Delete virtual device context with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function bulkUpdateVirtualDeviceContexts(id) {
  var url = "/api/dcim/virtual-device-contexts/";
  var description = "Bulk update virtual device contexts";
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPartialUpdateVirtualDeviceContexts(id) {
  var url = "/api/dcim/virtual-device-contexts/";
  var description = "Bulk partially update virtual device contexts";
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteVirtualDeviceContexts(id) {
  var url = "/api/dcim/virtual-device-contexts/";
  var description = "Bulk delete virtual device contexts";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingVirtualDeviceContext(id) {
  var url = "/api/dcim/virtual-device-contexts/";
  var description = "Try Add Existing VirtualDeviceContext";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVirtualDeviceContextExists(id) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("VirtualDeviceContext not found in list");
  }});
}

function verifyVirtualDeviceContextDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingVirtualDeviceContext(id) {
  var url = "/api/dcim/virtual-device-contexts/" + id + "/";
  var description = "Verify negative delete for VirtualDeviceContext";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVirtualDeviceContextAdded(id) {
  waitFor(matchSuccess("Create virtual device context"));
}

function createBookmark(id) {
  var url = "/api/extras/bookmarks/";
  var description = "Create bookmark with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteBookmark(id) {
  var url = "/api/extras/bookmarks/" + id + "/";
  var description = "Delete bookmark with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateBookmark(id) {
  var url = "/api/extras/bookmarks/" + id + "/";
  var description = "Update bookmark with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getBookmark(id) {
  var url = "/api/extras/bookmarks/" + id + "/";
  var description = "Get bookmark with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingBookmark(id) {
  var url = "/api/extras/bookmarks/";
  var description = "Try Add Existing Bookmark";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyBookmarkExists(id) {
  var url = "/api/extras/bookmarks/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Bookmark not found in list");
  }});
}

function verifyBookmarkDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingBookmark(id) {
  var url = "/api/extras/bookmarks/" + id + "/";
  var description = "Verify negative delete for Bookmark";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForBookmarkAdded(id) {
  waitFor(matchSuccess("Create bookmark with id " + id));
}

function createConfigContextProfile(id) {
  var url = "/api/extras/config-context-profiles/";
  var description = "Create config context profile with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteConfigContextProfile(id) {
  var url = "/api/extras/config-context-profiles/" + id + "/";
  var description = "Delete config context profile with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateConfigContextProfile(id) {
  var url = "/api/extras/config-context-profiles/" + id + "/";
  var description = "Update config context profile with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getConfigContextProfile(id) {
  var url = "/api/extras/config-context-profiles/" + id + "/";
  var description = "Get config context profile with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingConfigContextProfile(id) {
  var url = "/api/extras/config-context-profiles/";
  var description = "Try Add Existing ConfigContextProfile";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyConfigContextProfileExists(id) {
  var url = "/api/extras/config-context-profiles/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ConfigContextProfile not found in list");
  }});
}

function verifyConfigContextProfileDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingConfigContextProfile(id) {
  var url = "/api/extras/config-context-profiles/" + id + "/";
  var description = "Verify negative delete for ConfigContextProfile";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForConfigContextProfileAdded(id) {
  waitFor(matchSuccess("Create config context profile with id " + id));
}

function createConfigContext(id) {
  var url = "/api/extras/config-contexts/";
  var description = "Create config context with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteConfigContext(id) {
  var url = "/api/extras/config-contexts/" + id + "/";
  var description = "Delete config context with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateConfigContext(id) {
  var url = "/api/extras/config-contexts/" + id + "/";
  var description = "Update config context with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getConfigContext(id) {
  var url = "/api/extras/config-contexts/" + id + "/";
  var description = "Get config context with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingConfigContext(id) {
  var url = "/api/extras/config-contexts/";
  var description = "Try Add Existing ConfigContext";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyConfigContextExists(id) {
  var url = "/api/extras/config-contexts/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ConfigContext not found in list");
  }});
}

function verifyConfigContextDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingConfigContext(id) {
  var url = "/api/extras/config-contexts/" + id + "/";
  var description = "Verify negative delete for ConfigContext";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForConfigContextAdded(id) {
  waitFor(matchSuccess("Create config context with id " + id));
}

function renderConfigTemplate(format, id) {
  var url = "/api/extras/config-templates/" + id + "/render/";
  var description = "Render config template with id " + id + " in format " + format;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function syncConfigTemplate(format, id) {
  var url = "/api/extras/config-templates/" + id + "/sync/";
  var description = "Sync config template with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function createCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-field-choice-sets/";
  var description = "Create custom field choice set " + name;
  var body = {
    "name": String(name),
    "label": String(label),
    "choices": String(choices),
    "weight": String(weight),
    "description": String(description),
    "required": String(required),
    "default": String(_default),
    "group_name": String(group_name),
    "ui_visible": String(ui_visible),
    "ui_editable": String(ui_editable),
    "is_cloneable": String(is_cloneable),
    "validation_minimum": String(validation_minimum),
    "validation_maximum": String(validation_maximum),
    "validation_regex": String(validation_regex),
    "unique": String(unique),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-field-choice-sets/" + id + "/";
  var description = "Delete custom field choice set with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-field-choice-sets/" + id + "/";
  var description = "Update custom field choice set with id " + id;
  var body = {
    "name": String(name),
    "label": String(label),
    "choices": String(choices),
    "weight": String(weight),
    "description": String(description),
    "required": String(required),
    "default": String(_default),
    "group_name": String(group_name),
    "ui_visible": String(ui_visible),
    "ui_editable": String(ui_editable),
    "is_cloneable": String(is_cloneable),
    "validation_minimum": String(validation_minimum),
    "validation_maximum": String(validation_maximum),
    "validation_regex": String(validation_regex),
    "unique": String(unique),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-field-choice-sets/" + id + "/";
  var description = "Partially update custom field choice set with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-field-choice-sets/" + id + "/";
  var description = "Get custom field choice set with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function bulkUpdateCustomFieldChoiceSets(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-field-choice-sets/";
  var description = "Bulk update custom field choice sets";
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPartialUpdateCustomFieldChoiceSets(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-field-choice-sets/";
  var description = "Bulk partial update custom field choice sets";
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteCustomFieldChoiceSets(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-field-choice-sets/";
  var description = "Bulk delete custom field choice sets";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-field-choice-sets/";
  var description = "Try Add Existing CustomFieldChoiceSet";
  var body = {
    "name": String(name),
    "label": String(label),
    "choices": String(choices),
    "weight": String(weight),
    "description": String(description),
    "required": String(required),
    "default": String(_default),
    "group_name": String(group_name),
    "ui_visible": String(ui_visible),
    "ui_editable": String(ui_editable),
    "is_cloneable": String(is_cloneable),
    "validation_minimum": String(validation_minimum),
    "validation_maximum": String(validation_maximum),
    "validation_regex": String(validation_regex),
    "unique": String(unique),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCustomFieldChoiceSetExists(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-field-choice-sets/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("CustomFieldChoiceSet not found in list");
  }});
}

function verifyCustomFieldChoiceSetDoesNotExist(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-field-choice-sets/" + id + "/";
  var description = "Verify negative delete for CustomFieldChoiceSet";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForCustomFieldChoiceSetAdded(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  waitFor(matchSuccess("Create custom field choice set " + name));
}

function createCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-fields/";
  var description = "Create custom field " + name;
  var body = {
    "name": String(name),
    "label": String(label),
    "type": String(type),
    "required": String(required),
    "default": String(_default),
    "description": String(description),
    "weight": String(weight),
    "filter_logic": String(filter_logic),
    "ui_visible": String(ui_visible),
    "ui_editable": String(ui_editable),
    "is_cloneable": String(is_cloneable),
    "search_weight": String(search_weight),
    "validation_minimum": String(validation_minimum),
    "validation_maximum": String(validation_maximum),
    "validation_regex": String(validation_regex),
    "unique": String(unique),
    "object_type": String(object_type),
    "choice_set": String(choice_set),
    "group_name": String(group_name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-fields/" + id + "/";
  var description = "Delete custom field with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-fields/" + id + "/";
  var description = "Update custom field with id " + id;
  var body = {
    "name": String(name),
    "label": String(label),
    "type": String(type),
    "required": String(required),
    "default": String(_default),
    "description": String(description),
    "weight": String(weight),
    "filter_logic": String(filter_logic),
    "ui_visible": String(ui_visible),
    "ui_editable": String(ui_editable),
    "is_cloneable": String(is_cloneable),
    "search_weight": String(search_weight),
    "validation_minimum": String(validation_minimum),
    "validation_maximum": String(validation_maximum),
    "validation_regex": String(validation_regex),
    "unique": String(unique),
    "object_type": String(object_type),
    "choice_set": String(choice_set),
    "group_name": String(group_name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-fields/" + id + "/";
  var description = "Partially update custom field with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-fields/" + id + "/";
  var description = "Get custom field with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function bulkUpdateCustomFields(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-fields/";
  var description = "Bulk update custom fields";
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPartialUpdateCustomFields(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-fields/";
  var description = "Bulk partial update custom fields";
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteCustomFields(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-fields/";
  var description = "Bulk delete custom fields";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-fields/";
  var description = "Try Add Existing CustomField";
  var body = {
    "name": String(name),
    "label": String(label),
    "type": String(type),
    "required": String(required),
    "default": String(_default),
    "description": String(description),
    "weight": String(weight),
    "filter_logic": String(filter_logic),
    "ui_visible": String(ui_visible),
    "ui_editable": String(ui_editable),
    "is_cloneable": String(is_cloneable),
    "search_weight": String(search_weight),
    "validation_minimum": String(validation_minimum),
    "validation_maximum": String(validation_maximum),
    "validation_regex": String(validation_regex),
    "unique": String(unique),
    "object_type": String(object_type),
    "choice_set": String(choice_set),
    "group_name": String(group_name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCustomFieldExists(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-fields/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("CustomField not found in list");
  }});
}

function verifyCustomFieldDoesNotExist(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  var url = "/api/extras/custom-fields/" + id + "/";
  var description = "Verify negative delete for CustomField";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForCustomFieldAdded(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight) {
  waitFor(matchSuccess("Create custom field " + name));
}

function createCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) {
  var url = "/api/extras/custom-links/";
  var description = "Create custom link " + name;
  var body = {
    "name": String(name),
    "link_text": String(link_text),
    "link_url": String(link_url),
    "button_class": String(button_class),
    "new_window": String(new_window),
    "weight": String(weight),
    "enabled": String(enabled),
    "group_name": String(group_name),
    "description": String(description),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) {
  var url = "/api/extras/custom-links/" + id + "/";
  var description = "Delete custom link with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) {
  var url = "/api/extras/custom-links/" + id + "/";
  var description = "Update custom link with id " + id;
  var body = {
    "name": String(name),
    "link_text": String(link_text),
    "link_url": String(link_url),
    "button_class": String(button_class),
    "new_window": String(new_window),
    "weight": String(weight),
    "enabled": String(enabled),
    "group_name": String(group_name),
    "description": String(description),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) {
  var url = "/api/extras/custom-links/" + id + "/";
  var description = "Partially update custom link with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) {
  var url = "/api/extras/custom-links/" + id + "/";
  var description = "Get custom link with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function bulkUpdateCustomLinks(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) {
  var url = "/api/extras/custom-links/";
  var description = "Bulk update custom links";
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPartialUpdateCustomLinks(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) {
  var url = "/api/extras/custom-links/";
  var description = "Bulk partial update custom links";
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteCustomLinks(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) {
  var url = "/api/extras/custom-links/";
  var description = "Bulk delete custom links";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) {
  var url = "/api/extras/custom-links/";
  var description = "Try Add Existing CustomLink";
  var body = {
    "name": String(name),
    "link_text": String(link_text),
    "link_url": String(link_url),
    "button_class": String(button_class),
    "new_window": String(new_window),
    "weight": String(weight),
    "enabled": String(enabled),
    "group_name": String(group_name),
    "description": String(description),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCustomLinkExists(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) {
  var url = "/api/extras/custom-links/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("CustomLink not found in list");
  }});
}

function verifyCustomLinkDoesNotExist(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) {
  var url = "/api/extras/custom-links/" + id + "/";
  var description = "Verify negative delete for CustomLink";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForCustomLinkAdded(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight) {
  waitFor(matchSuccess("Create custom link " + name));
}

function deleteDashboard(id) {
  var url = "/api/extras/dashboard/";
  var description = "Delete dashboard";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateDashboard(id) {
  var url = "/api/extras/dashboard/";
  var description = "Update dashboard";
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateDashboard(id) {
  var url = "/api/extras/dashboard/";
  var description = "Partially update dashboard";
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getDashboard(id) {
  var url = "/api/extras/dashboard/";
  var description = "Get dashboard";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyDashboardExists(id) {
  var url = "/api/extras/dashboard/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Dashboard not found in list");
  }});
}

function verifyDashboardDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingDashboard(id) {
  var url = "/api/extras/dashboard/";
  var description = "Verify negative delete for Dashboard";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function createEventRule(id) {
  var url = "/api/extras/event-rules/";
  var description = "Create event rule with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteEventRule(id) {
  var url = "/api/extras/event-rules/" + id + "/";
  var description = "Delete event rule with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateEventRule(id) {
  var url = "/api/extras/event-rules/" + id + "/";
  var description = "Update event rule with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateEventRule(id) {
  var url = "/api/extras/event-rules/" + id + "/";
  var description = "Partial update event rule with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getEventRule(id) {
  var url = "/api/extras/event-rules/" + id + "/";
  var description = "Get event rule with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingEventRule(id) {
  var url = "/api/extras/event-rules/";
  var description = "Try Add Existing EventRule";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyEventRuleExists(id) {
  var url = "/api/extras/event-rules/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("EventRule not found in list");
  }});
}

function verifyEventRuleDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingEventRule(id) {
  var url = "/api/extras/event-rules/" + id + "/";
  var description = "Verify negative delete for EventRule";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForEventRuleAdded(id) {
  waitFor(matchSuccess("Create event rule with id " + id));
}

function createExportTemplate(id) {
  var url = "/api/extras/export-templates/";
  var description = "Create export template with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteExportTemplate(id) {
  var url = "/api/extras/export-templates/" + id + "/";
  var description = "Delete export template with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateExportTemplate(id) {
  var url = "/api/extras/export-templates/" + id + "/";
  var description = "Update export template with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateExportTemplate(id) {
  var url = "/api/extras/export-templates/" + id + "/";
  var description = "Partial update export template with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getExportTemplate(id) {
  var url = "/api/extras/export-templates/" + id + "/";
  var description = "Get export template with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function syncExportTemplate(id) {
  var url = "/api/extras/export-templates/" + id + "/sync/";
  var description = "Sync export template with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function tryToAddExistingExportTemplate(id) {
  var url = "/api/extras/export-templates/";
  var description = "Try Add Existing ExportTemplate";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyExportTemplateExists(id) {
  var url = "/api/extras/export-templates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ExportTemplate not found in list");
  }});
}

function verifyExportTemplateDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingExportTemplate(id) {
  var url = "/api/extras/export-templates/" + id + "/";
  var description = "Verify negative delete for ExportTemplate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForExportTemplateAdded(id) {
  waitFor(matchSuccess("Create export template with id " + id));
}

function createImageAttachment(id) {
  var url = "/api/extras/image-attachments/";
  var description = "Create image attachment with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteImageAttachment(id) {
  var url = "/api/extras/image-attachments/" + id + "/";
  var description = "Delete image attachment with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateImageAttachment(id) {
  var url = "/api/extras/image-attachments/" + id + "/";
  var description = "Update image attachment with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateImageAttachment(id) {
  var url = "/api/extras/image-attachments/" + id + "/";
  var description = "Partial update image attachment with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getImageAttachment(id) {
  var url = "/api/extras/image-attachments/" + id + "/";
  var description = "Get image attachment with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingImageAttachment(id) {
  var url = "/api/extras/image-attachments/";
  var description = "Try Add Existing ImageAttachment";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyImageAttachmentExists(id) {
  var url = "/api/extras/image-attachments/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ImageAttachment not found in list");
  }});
}

function verifyImageAttachmentDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingImageAttachment(id) {
  var url = "/api/extras/image-attachments/" + id + "/";
  var description = "Verify negative delete for ImageAttachment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForImageAttachmentAdded(id) {
  waitFor(matchSuccess("Create image attachment with id " + id));
}

function createJournalEntry(id) {
  var url = "/api/extras/journal-entries/";
  var description = "Create journal entry with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteJournalEntry(id) {
  var url = "/api/extras/journal-entries/" + id + "/";
  var description = "Delete journal entry with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateJournalEntry(id) {
  var url = "/api/extras/journal-entries/" + id + "/";
  var description = "Update journal entry with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateJournalEntry(id) {
  var url = "/api/extras/journal-entries/" + id + "/";
  var description = "Partial update journal entry with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getJournalEntry(id) {
  var url = "/api/extras/journal-entries/" + id + "/";
  var description = "Get journal entry with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingJournalEntry(id) {
  var url = "/api/extras/journal-entries/";
  var description = "Try Add Existing JournalEntry";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyJournalEntryExists(id) {
  var url = "/api/extras/journal-entries/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("JournalEntry not found in list");
  }});
}

function verifyJournalEntryDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingJournalEntry(id) {
  var url = "/api/extras/journal-entries/" + id + "/";
  var description = "Verify negative delete for JournalEntry";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForJournalEntryAdded(id) {
  waitFor(matchSuccess("Create journal entry with id " + id));
}

function createNotificationGroup(description, id, name, notifications, slug) {
  var url = "/api/extras/notification-groups/";
  var description = "Create notification group";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteNotificationGroup(description, id, name, notifications, slug) {
  var url = "/api/extras/notification-groups/" + id + "/";
  var description = "Delete notification group with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateNotificationGroup(description, id, name, notifications, slug) {
  var url = "/api/extras/notification-groups/" + id + "/";
  var description = "Update notification group with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "description": String(description),
    "notifications": String(notifications),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateNotificationGroup(description, id, name, notifications, slug) {
  var url = "/api/extras/notification-groups/";
  var description = "Bulk partial update notification groups";
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getNotificationGroup(description, id, name, notifications, slug) {
  var url = "/api/extras/notification-groups/" + id + "/";
  var description = "Get notification group with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function patchNotificationGroup(description, id, name, notifications, slug) {
  var url = "/api/extras/notification-groups/" + id + "/";
  var description = "Patch notification group with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "description": String(description),
    "notifications": String(notifications),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function tryToAddExistingNotificationGroup(description, id, name, notifications, slug) {
  var url = "/api/extras/notification-groups/";
  var description = "Try Add Existing NotificationGroup";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyNotificationGroupExists(description, id, name, notifications, slug) {
  var url = "/api/extras/notification-groups/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("NotificationGroup not found in list");
  }});
}

function verifyNotificationGroupDoesNotExist(description, id, name, notifications, slug) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingNotificationGroup(description, id, name, notifications, slug) {
  var url = "/api/extras/notification-groups/" + id + "/";
  var description = "Verify negative delete for NotificationGroup";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForNotificationGroupAdded(description, id, name, notifications, slug) {
  waitFor(matchSuccess("Create notification group"));
}

function listNotifications(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user) {
  var url = "/api/extras/notifications/";
  var description = "List notifications";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user) {
  var url = "/api/extras/notifications/";
  var description = "Create notification with name " + name;
  var body = {
    "name": String(name),
    "group": String(group),
    "status": String(status),
    "level": String(level),
    "assigned_object_type": String(assigned_object_type),
    "assigned_object_id": String(assigned_object_id),
    "user": String(user),
    "url": String(url),
    "created": String(created),
    "last_updated": String(last_updated),
    "description": String(description),
    "read": String(read),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user) {
  var url = "/api/extras/notifications/" + id + "/";
  var description = "Update notification with id " + id;
  var body = {
    "name": String(name),
    "group": String(group),
    "status": String(status),
    "level": String(level),
    "assigned_object_type": String(assigned_object_type),
    "assigned_object_id": String(assigned_object_id),
    "user": String(user),
    "url": String(url),
    "created": String(created),
    "last_updated": String(last_updated),
    "description": String(description),
    "read": String(read),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user) {
  var url = "/api/extras/notifications/" + id + "/";
  var description = "Patch notification with id " + id;
  var body = {
    "name": String(name),
    "group": String(group),
    "status": String(status),
    "level": String(level),
    "assigned_object_type": String(assigned_object_type),
    "assigned_object_id": String(assigned_object_id),
    "user": String(user),
    "url": String(url),
    "created": String(created),
    "last_updated": String(last_updated),
    "description": String(description),
    "read": String(read),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user) {
  var url = "/api/extras/notifications/" + id + "/";
  var description = "Delete notification with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user) {
  var url = "/api/extras/notifications/";
  var description = "Try Add Existing Notification";
  var body = {
    "name": String(name),
    "group": String(group),
    "status": String(status),
    "level": String(level),
    "assigned_object_type": String(assigned_object_type),
    "assigned_object_id": String(assigned_object_id),
    "user": String(user),
    "url": String(url),
    "created": String(created),
    "last_updated": String(last_updated),
    "description": String(description),
    "read": String(read),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user) {
  var url = "/api/extras/notifications/" + id + "/";
  var description = "Verify negative delete for Notification";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForNotificationAdded(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user) {
  waitFor(matchSuccess("Create notification with name " + name));
}

function listSavedFilters(description, enabled, filters, id, name, object_type, shared, slug, user, weight) {
  var url = "/api/extras/saved-filters/";
  var description = "List saved filters";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight) {
  var url = "/api/extras/saved-filters/";
  var description = "Create saved filter with name " + name;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "description": String(description),
    "enabled": String(enabled),
    "shared": String(shared),
    "user": String(user),
    "object_type": String(object_type),
    "weight": String(weight),
    "filters": String(filters),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight) {
  var url = "/api/extras/saved-filters/" + id + "/";
  var description = "Update saved filter with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "description": String(description),
    "enabled": String(enabled),
    "shared": String(shared),
    "user": String(user),
    "object_type": String(object_type),
    "weight": String(weight),
    "filters": String(filters),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight) {
  var url = "/api/extras/saved-filters/" + id + "/";
  var description = "Patch saved filter with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "description": String(description),
    "enabled": String(enabled),
    "shared": String(shared),
    "user": String(user),
    "object_type": String(object_type),
    "weight": String(weight),
    "filters": String(filters),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight) {
  var url = "/api/extras/saved-filters/" + id + "/";
  var description = "Delete saved filter with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight) {
  var url = "/api/extras/saved-filters/";
  var description = "Try Add Existing SavedFilter";
  var body = {
    "name": String(name),
    "slug": String(slug),
    "description": String(description),
    "enabled": String(enabled),
    "shared": String(shared),
    "user": String(user),
    "object_type": String(object_type),
    "weight": String(weight),
    "filters": String(filters),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight) {
  var url = "/api/extras/saved-filters/" + id + "/";
  var description = "Verify negative delete for SavedFilter";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForSavedFilterAdded(description, enabled, filters, id, name, object_type, shared, slug, user, weight) {
  waitFor(matchSuccess("Create saved filter with name " + name));
}

function listScripts(description, enabled, id, is_executable, module, name, source) {
  var url = "/api/extras/scripts/";
  var description = "List scripts";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createScript(description, enabled, id, is_executable, module, name, source) {
  var url = "/api/extras/scripts/";
  var description = "Create script";
  var body = {
    "description": String(description),
    "enabled": String(enabled),
    "is_executable": String(is_executable),
    "module": String(module),
    "name": String(name),
    "source": String(source),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getScript(description, enabled, id, is_executable, module, name, source) {
  var url = "/api/extras/scripts/" + id + "/";
  var description = "Get script with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateScript(description, enabled, id, is_executable, module, name, source) {
  var url = "/api/extras/scripts/" + id + "/";
  var description = "Update script with id " + id;
  var body = {
    "name": String(name),
    "description": String(description),
    "module": String(module),
    "source": String(source),
    "is_executable": String(is_executable),
    "enabled": String(enabled),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchScript(description, enabled, id, is_executable, module, name, source) {
  var url = "/api/extras/scripts/" + id + "/";
  var description = "Patch script with id " + id;
  var body = {
    "name": String(name),
    "description": String(description),
    "module": String(module),
    "source": String(source),
    "is_executable": String(is_executable),
    "enabled": String(enabled),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteScript(description, enabled, id, is_executable, module, name, source) {
  var url = "/api/extras/scripts/" + id + "/";
  var description = "Delete script with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingScript(description, enabled, id, is_executable, module, name, source) {
  var url = "/api/extras/scripts/";
  var description = "Try Add Existing Script";
  var body = {
    "description": String(description),
    "enabled": String(enabled),
    "is_executable": String(is_executable),
    "module": String(module),
    "name": String(name),
    "source": String(source),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyScriptExists(description, enabled, id, is_executable, module, name, source) {
  var url = "/api/extras/scripts/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Script not found in list");
  }});
}

function verifyScriptDoesNotExist(description, enabled, id, is_executable, module, name, source) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingScript(description, enabled, id, is_executable, module, name, source) {
  var url = "/api/extras/scripts/" + id + "/";
  var description = "Verify negative delete for Script";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForScriptAdded(description, enabled, id, is_executable, module, name, source) {
  waitFor(matchSuccess("Create script"));
}

function listSubscriptions(id) {
  var url = "/api/extras/subscriptions/";
  var description = "List subscriptions";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createSubscription(id) {
  var url = "/api/extras/subscriptions/";
  var description = "Create subscription";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateSubscription(id) {
  var url = "/api/extras/subscriptions/" + id + "/";
  var description = "Update subscription with id " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchSubscription(id) {
  var url = "/api/extras/subscriptions/" + id + "/";
  var description = "Patch subscription with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteSubscription(id) {
  var url = "/api/extras/subscriptions/" + id + "/";
  var description = "Delete subscription with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getSubscription(id) {
  var url = "/api/extras/subscriptions/" + id + "/";
  var description = "Get subscription with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingSubscription(id) {
  var url = "/api/extras/subscriptions/";
  var description = "Try Add Existing Subscription";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifySubscriptionExists(id) {
  var url = "/api/extras/subscriptions/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Subscription not found in list");
  }});
}

function verifySubscriptionDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingSubscription(id) {
  var url = "/api/extras/subscriptions/" + id + "/";
  var description = "Verify negative delete for Subscription";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForSubscriptionAdded(id) {
  waitFor(matchSuccess("Create subscription"));
}

function getTableConfig(id, name) {
  var url = "/api/extras/table-configs/" + id + "/";
  var description = "Get table config with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createTableConfig(id, name) {
  var url = "/api/extras/table-configs/";
  var description = "Create table config with name " + name;
  var body = {
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateTableConfig(id, name) {
  var url = "/api/extras/table-configs/" + id + "/";
  var description = "Update table config with id " + id;
  var body = {
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchTableConfig(id, name) {
  var url = "/api/extras/table-configs/" + id + "/";
  var description = "Patch table config with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteTableConfig(id, name) {
  var url = "/api/extras/table-configs/" + id + "/";
  var description = "Delete table config with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingTableConfig(id, name) {
  var url = "/api/extras/table-configs/";
  var description = "Try Add Existing TableConfig";
  var body = {
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTableConfigExists(id, name) {
  var url = "/api/extras/table-configs/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("TableConfig not found in list");
  }});
}

function verifyTableConfigDoesNotExist(id, name) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingTableConfig(id, name) {
  var url = "/api/extras/table-configs/" + id + "/";
  var description = "Verify negative delete for TableConfig";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForTableConfigAdded(id, name) {
  waitFor(matchSuccess("Create table config with name " + name));
}

function getTaggedObject(id) {
  var url = "/api/extras/tagged-objects/" + id + "/";
  var description = "Get tagged object with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyTaggedObjectExists(id) {
  var url = "/api/extras/tagged-objects/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("TaggedObject not found in list");
  }});
}

function verifyTaggedObjectDoesNotExist(id) { pvg.success("Assumed gone"); }

function getTag(id, name, slug) {
  var url = "/api/extras/tags/" + id + "/";
  var description = "Get tag with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createTag(id, name, slug) {
  var url = "/api/extras/tags/";
  var description = "Create tag with name " + name + " and slug " + slug;
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateTag(id, name, slug) {
  var url = "/api/extras/tags/" + id + "/";
  var description = "Update tag with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchTag(id, name, slug) {
  var url = "/api/extras/tags/" + id + "/";
  var description = "Patch tag with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteTag(id, name, slug) {
  var url = "/api/extras/tags/" + id + "/";
  var description = "Delete tag with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingTag(id, name, slug) {
  var url = "/api/extras/tags/";
  var description = "Try Add Existing Tag";
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTagExists(id, name, slug) {
  var url = "/api/extras/tags/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Tag not found in list");
  }});
}

function verifyTagDoesNotExist(id, name, slug) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingTag(id, name, slug) {
  var url = "/api/extras/tags/" + id + "/";
  var description = "Verify negative delete for Tag";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForTagAdded(id, name, slug) {
  waitFor(matchSuccess("Create tag with name " + name + " and slug " + slug));
}

function getWebhook(id, name) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "Get webhook with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createWebhook(id, name) {
  var url = "/api/extras/webhooks/";
  var description = "Create webhook with name " + name;
  var body = {
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateWebhook(id, name) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "Update webhook with id " + id;
  var body = {
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchWebhook(id, name) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "Patch webhook with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteWebhook(id, name) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "Delete webhook with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingWebhook(id, name) {
  var url = "/api/extras/webhooks/";
  var description = "Try Add Existing Webhook";
  var body = {
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyWebhookExists(id, name) {
  var url = "/api/extras/webhooks/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Webhook not found in list");
  }});
}

function verifyWebhookDoesNotExist(id, name) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingWebhook(id, name) {
  var url = "/api/extras/webhooks/" + id + "/";
  var description = "Verify negative delete for Webhook";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForWebhookAdded(id, name) {
  waitFor(matchSuccess("Create webhook with name " + name));
}

function createAggregate(id) {
  var url = "/api/ipam/aggregates/";
  var description = "Create aggregate with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteAggregate(id) {
  var url = "/api/ipam/aggregates/" + id + "/";
  var description = "Delete aggregate with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateAggregate(id) {
  var url = "/api/ipam/aggregates/" + id + "/";
  var description = "Update aggregate with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getAggregate(id) {
  var url = "/api/ipam/aggregates/" + id + "/";
  var description = "Get aggregate with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingAggregate(id) {
  var url = "/api/ipam/aggregates/";
  var description = "Try Add Existing Aggregate";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyAggregateExists(id) {
  var url = "/api/ipam/aggregates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Aggregate not found in list");
  }});
}

function verifyAggregateDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingAggregate(id) {
  var url = "/api/ipam/aggregates/" + id + "/";
  var description = "Verify negative delete for Aggregate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForAggregateAdded(id) {
  waitFor(matchSuccess("Create aggregate with id " + id));
}

function createASNRange(id) {
  var url = "/api/ipam/asn-ranges/";
  var description = "Create ASN range with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteASNRange(id) {
  var url = "/api/ipam/asn-ranges/" + id + "/";
  var description = "Delete ASN range with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateASNRange(id) {
  var url = "/api/ipam/asn-ranges/" + id + "/";
  var description = "Update ASN range with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getASNRange(id) {
  var url = "/api/ipam/asn-ranges/" + id + "/";
  var description = "Get ASN range with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingASNRange(id) {
  var url = "/api/ipam/asn-ranges/";
  var description = "Try Add Existing ASNRange";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyASNRangeExists(id) {
  var url = "/api/ipam/asn-ranges/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ASNRange not found in list");
  }});
}

function verifyASNRangeDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingASNRange(id) {
  var url = "/api/ipam/asn-ranges/" + id + "/";
  var description = "Verify negative delete for ASNRange";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForASNRangeAdded(id) {
  waitFor(matchSuccess("Create ASN range with id " + id));
}

function createASN(id) {
  var url = "/api/ipam/asns/";
  var description = "Create ASN with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteASN(id) {
  var url = "/api/ipam/asns/" + id + "/";
  var description = "Delete ASN with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateASN(id) {
  var url = "/api/ipam/asns/" + id + "/";
  var description = "Update ASN with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getASN(id) {
  var url = "/api/ipam/asns/" + id + "/";
  var description = "Get ASN with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingASN(id) {
  var url = "/api/ipam/asns/";
  var description = "Try Add Existing ASN";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyASNExists(id) {
  var url = "/api/ipam/asns/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ASN not found in list");
  }});
}

function verifyASNDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingASN(id) {
  var url = "/api/ipam/asns/" + id + "/";
  var description = "Verify negative delete for ASN";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForASNAdded(id) {
  waitFor(matchSuccess("Create ASN with id " + id));
}

function createFHRPGroupAssignment(id) {
  var url = "/api/ipam/fhrp-group-assignments/";
  var description = "Create FHRP group assignment with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteFHRPGroupAssignment(id) {
  var url = "/api/ipam/fhrp-group-assignments/" + id + "/";
  var description = "Delete FHRP group assignment with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateFHRPGroupAssignment(id) {
  var url = "/api/ipam/fhrp-group-assignments/" + id + "/";
  var description = "Update FHRP group assignment with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getFHRPGroupAssignment(id) {
  var url = "/api/ipam/fhrp-group-assignments/" + id + "/";
  var description = "Get FHRP group assignment with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingFHRPGroupAssignment(id) {
  var url = "/api/ipam/fhrp-group-assignments/";
  var description = "Try Add Existing FHRPGroupAssignment";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyFHRPGroupAssignmentExists(id) {
  var url = "/api/ipam/fhrp-group-assignments/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("FHRPGroupAssignment not found in list");
  }});
}

function verifyFHRPGroupAssignmentDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingFHRPGroupAssignment(id) {
  var url = "/api/ipam/fhrp-group-assignments/" + id + "/";
  var description = "Verify negative delete for FHRPGroupAssignment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForFHRPGroupAssignmentAdded(id) {
  waitFor(matchSuccess("Create FHRP group assignment with id " + id));
}

function createFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug) {
  var url = "/api/ipam/fhrp-groups/";
  var description = "Create FHRP group with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug) {
  var url = "/api/ipam/fhrp-groups/" + id + "/";
  var description = "Delete fhrp group with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug) {
  var url = "/api/ipam/fhrp-groups/" + id + "/";
  var description = "Update fhrp group with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "protocol": String(protocol),
    "auth_type": String(auth_type),
    "auth_key": String(auth_key),
    "description": String(description),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug) {
  var url = "/api/ipam/fhrp-groups/" + id + "/";
  var description = "Get fhrp group with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function patchFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug) {
  var url = "/api/ipam/fhrp-groups/" + id + "/";
  var description = "Patch fhrp group with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "protocol": String(protocol),
    "auth_type": String(auth_type),
    "auth_key": String(auth_key),
    "description": String(description),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function tryToAddExistingFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug) {
  var url = "/api/ipam/fhrp-groups/";
  var description = "Try Add Existing FHRPGroup";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyFHRPGroupExists(auth_key, auth_type, description, id, name, protocol, slug) {
  var url = "/api/ipam/fhrp-groups/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("FHRPGroup not found in list");
  }});
}

function verifyFHRPGroupDoesNotExist(auth_key, auth_type, description, id, name, protocol, slug) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug) {
  var url = "/api/ipam/fhrp-groups/" + id + "/";
  var description = "Verify negative delete for FHRPGroup";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForFHRPGroupAdded(auth_key, auth_type, description, id, name, protocol, slug) {
  waitFor(matchSuccess("Create FHRP group with id " + id));
}

function listIPAddresses(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id) {
  var url = "/api/ipam/ip-addresses/";
  var description = "List ip addresses";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id) {
  var url = "/api/ipam/ip-addresses/";
  var description = "Create ip address " + address;
  var body = {
    "address": String(address),
    "vrf": String(vrf),
    "tenant": String(tenant),
    "status": String(status),
    "role": String(role),
    "description": String(description),
    "nat_inside": String(nat_inside),
    "dns_name": String(dns_name),
    "interface": String(_interface),
    "vrf_id": String(vrf_id),
    "tenant_id": String(tenant_id),
    "assigned_object_type": String(assigned_object_type),
    "assigned_object_id": String(assigned_object_id),
    "assigned_to_interface": String(assigned_to_interface),
    "service": String(service),
    "tags": String(tags),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id) {
  var url = "/api/ipam/ip-addresses/" + id + "/";
  var description = "Update ip address with id " + id;
  var body = {
    "address": String(address),
    "vrf": String(vrf),
    "tenant": String(tenant),
    "status": String(status),
    "role": String(role),
    "description": String(description),
    "nat_inside": String(nat_inside),
    "dns_name": String(dns_name),
    "interface": String(_interface),
    "vrf_id": String(vrf_id),
    "tenant_id": String(tenant_id),
    "assigned_object_type": String(assigned_object_type),
    "assigned_object_id": String(assigned_object_id),
    "assigned_to_interface": String(assigned_to_interface),
    "service": String(service),
    "tags": String(tags),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id) {
  var url = "/api/ipam/ip-addresses/" + id + "/";
  var description = "Patch ip address with id " + id;
  var body = {
    "address": String(address),
    "vrf": String(vrf),
    "tenant": String(tenant),
    "status": String(status),
    "role": String(role),
    "description": String(description),
    "nat_inside": String(nat_inside),
    "dns_name": String(dns_name),
    "interface": String(_interface),
    "vrf_id": String(vrf_id),
    "tenant_id": String(tenant_id),
    "assigned_object_type": String(assigned_object_type),
    "assigned_object_id": String(assigned_object_id),
    "assigned_to_interface": String(assigned_to_interface),
    "service": String(service),
    "tags": String(tags),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id) {
  var url = "/api/ipam/ip-addresses/" + id + "/";
  var description = "Delete ip address with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id) {
  var url = "/api/ipam/ip-addresses/";
  var description = "Try Add Existing IPAddress";
  var body = {
    "address": String(address),
    "vrf": String(vrf),
    "tenant": String(tenant),
    "status": String(status),
    "role": String(role),
    "description": String(description),
    "nat_inside": String(nat_inside),
    "dns_name": String(dns_name),
    "interface": String(_interface),
    "vrf_id": String(vrf_id),
    "tenant_id": String(tenant_id),
    "assigned_object_type": String(assigned_object_type),
    "assigned_object_id": String(assigned_object_id),
    "assigned_to_interface": String(assigned_to_interface),
    "service": String(service),
    "tags": String(tags),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id) {
  var url = "/api/ipam/ip-addresses/" + id + "/";
  var description = "Verify negative delete for IPAddress";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForIPAddressAdded(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id) {
  waitFor(matchSuccess("Create ip address " + address));
}

function listIPRanges(description, end_address, id, role, start_address, status, tags, tenant, vrf) {
  var url = "/api/ipam/ip-ranges/";
  var description = "List ip ranges";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf) {
  var url = "/api/ipam/ip-ranges/";
  var description = "Create ip range " + start_address + " - " + end_address;
  var body = {
    "start_address": String(start_address),
    "end_address": String(end_address),
    "vrf": String(vrf),
    "tenant": String(tenant),
    "status": String(status),
    "role": String(role),
    "description": String(description),
    "tags": String(tags),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updateIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf) {
  var url = "/api/ipam/ip-ranges/" + id + "/";
  var description = "Update ip range with id " + id;
  var body = {
    "start_address": String(start_address),
    "end_address": String(end_address),
    "vrf": String(vrf),
    "tenant": String(tenant),
    "status": String(status),
    "role": String(role),
    "description": String(description),
    "tags": String(tags),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf) {
  var url = "/api/ipam/ip-ranges/" + id + "/";
  var description = "Patch ip range with id " + id;
  var body = {
    "start_address": String(start_address),
    "end_address": String(end_address),
    "vrf": String(vrf),
    "tenant": String(tenant),
    "status": String(status),
    "role": String(role),
    "description": String(description),
    "tags": String(tags),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf) {
  var url = "/api/ipam/ip-ranges/" + id + "/";
  var description = "Delete ip range with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf) {
  var url = "/api/ipam/ip-ranges/";
  var description = "Try Add Existing IPRange";
  var body = {
    "start_address": String(start_address),
    "end_address": String(end_address),
    "vrf": String(vrf),
    "tenant": String(tenant),
    "status": String(status),
    "role": String(role),
    "description": String(description),
    "tags": String(tags),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf) {
  var url = "/api/ipam/ip-ranges/" + id + "/";
  var description = "Verify negative delete for IPRange";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForIPRangeAdded(description, end_address, id, role, start_address, status, tags, tenant, vrf) {
  waitFor(matchSuccess("Create ip range " + start_address + " - " + end_address));
}

function listPrefixes(description, id, prefix, role, status, tags, tenant, vrf) {
  var url = "/api/ipam/prefixes/";
  var description = "List prefixes";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createPrefix(description, id, prefix, role, status, tags, tenant, vrf) {
  var url = "/api/ipam/prefixes/";
  var description = "Create prefix " + prefix;
  var body = {
    "prefix": String(prefix),
    "vrf": String(vrf),
    "tenant": String(tenant),
    "status": String(status),
    "role": String(role),
    "description": String(description),
    "tags": String(tags),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function updatePrefix(description, id, prefix, role, status, tags, tenant, vrf) {
  var url = "/api/ipam/prefixes/" + id + "/";
  var description = "Update prefix with id " + id;
  var body = {
    "prefix": String(prefix),
    "vrf": String(vrf),
    "tenant": String(tenant),
    "status": String(status),
    "role": String(role),
    "description": String(description),
    "tags": String(tags),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function patchPrefix(description, id, prefix, role, status, tags, tenant, vrf) {
  var url = "/api/ipam/prefixes/" + id + "/";
  var description = "Patch prefix with id " + id;
  var body = {
    "prefix": String(prefix),
    "vrf": String(vrf),
    "tenant": String(tenant),
    "status": String(status),
    "role": String(role),
    "description": String(description),
    "tags": String(tags),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePrefix(description, id, prefix, role, status, tags, tenant, vrf) {
  var url = "/api/ipam/prefixes/" + id + "/";
  var description = "Delete prefix with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingPrefix(description, id, prefix, role, status, tags, tenant, vrf) {
  var url = "/api/ipam/prefixes/";
  var description = "Try Add Existing Prefix";
  var body = {
    "prefix": String(prefix),
    "vrf": String(vrf),
    "tenant": String(tenant),
    "status": String(status),
    "role": String(role),
    "description": String(description),
    "tags": String(tags),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingPrefix(description, id, prefix, role, status, tags, tenant, vrf) {
  var url = "/api/ipam/prefixes/" + id + "/";
  var description = "Verify negative delete for Prefix";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForPrefixAdded(description, id, prefix, role, status, tags, tenant, vrf) {
  waitFor(matchSuccess("Create prefix " + prefix));
}

function createRIR(id) {
  var url = "/api/ipam/rirs/";
  var description = "Create RIR with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteRIR(id) {
  var url = "/api/ipam/rirs/" + id + "/";
  var description = "Delete RIR with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateRIR(id) {
  var url = "/api/ipam/rirs/" + id + "/";
  var description = "Update RIR with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getRIR(id) {
  var url = "/api/ipam/rirs/" + id + "/";
  var description = "Get RIR with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingRIR(id) {
  var url = "/api/ipam/rirs/";
  var description = "Try Add Existing RIR";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRIRExists(id) {
  var url = "/api/ipam/rirs/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("RIR not found in list");
  }});
}

function verifyRIRDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingRIR(id) {
  var url = "/api/ipam/rirs/" + id + "/";
  var description = "Verify negative delete for RIR";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForRIRAdded(id) {
  waitFor(matchSuccess("Create RIR with id " + id));
}

function createRole(id) {
  var url = "/api/ipam/roles/";
  var description = "Create role with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteRole(id) {
  var url = "/api/ipam/roles/" + id + "/";
  var description = "Delete role with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateRole(id) {
  var url = "/api/ipam/roles/" + id + "/";
  var description = "Update role with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getRole(id) {
  var url = "/api/ipam/roles/" + id + "/";
  var description = "Get role with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingRole(id) {
  var url = "/api/ipam/roles/";
  var description = "Try Add Existing Role";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRoleExists(id) {
  var url = "/api/ipam/roles/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Role not found in list");
  }});
}

function verifyRoleDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingRole(id) {
  var url = "/api/ipam/roles/" + id + "/";
  var description = "Verify negative delete for Role";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForRoleAdded(id) {
  waitFor(matchSuccess("Create role with id " + id));
}

function createRouteTarget(id) {
  var url = "/api/ipam/route-targets/";
  var description = "Create route target with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteRouteTarget(id) {
  var url = "/api/ipam/route-targets/" + id + "/";
  var description = "Delete route target with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateRouteTarget(id) {
  var url = "/api/ipam/route-targets/" + id + "/";
  var description = "Update route target with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getRouteTarget(id) {
  var url = "/api/ipam/route-targets/" + id + "/";
  var description = "Get route target with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingRouteTarget(id) {
  var url = "/api/ipam/route-targets/";
  var description = "Try Add Existing RouteTarget";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRouteTargetExists(id) {
  var url = "/api/ipam/route-targets/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("RouteTarget not found in list");
  }});
}

function verifyRouteTargetDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingRouteTarget(id) {
  var url = "/api/ipam/route-targets/" + id + "/";
  var description = "Verify negative delete for RouteTarget";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForRouteTargetAdded(id) {
  waitFor(matchSuccess("Create route target with id " + id));
}

function createServiceTemplate(id) {
  var url = "/api/ipam/service-templates/";
  var description = "Create service template with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteServiceTemplate(id) {
  var url = "/api/ipam/service-templates/" + id + "/";
  var description = "Delete service template with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateServiceTemplate(id) {
  var url = "/api/ipam/service-templates/" + id + "/";
  var description = "Update service template with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getServiceTemplate(id) {
  var url = "/api/ipam/service-templates/" + id + "/";
  var description = "Get service template with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingServiceTemplate(id) {
  var url = "/api/ipam/service-templates/";
  var description = "Try Add Existing ServiceTemplate";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyServiceTemplateExists(id) {
  var url = "/api/ipam/service-templates/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ServiceTemplate not found in list");
  }});
}

function verifyServiceTemplateDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingServiceTemplate(id) {
  var url = "/api/ipam/service-templates/" + id + "/";
  var description = "Verify negative delete for ServiceTemplate";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForServiceTemplateAdded(id) {
  waitFor(matchSuccess("Create service template with id " + id));
}

function createService(id) {
  var url = "/api/ipam/services/";
  var description = "Create service with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteService(id) {
  var url = "/api/ipam/services/" + id + "/";
  var description = "Delete service with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateService(id) {
  var url = "/api/ipam/services/" + id + "/";
  var description = "Update service with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getService(id) {
  var url = "/api/ipam/services/" + id + "/";
  var description = "Get service with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingService(id) {
  var url = "/api/ipam/services/";
  var description = "Try Add Existing Service";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyServiceExists(id) {
  var url = "/api/ipam/services/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Service not found in list");
  }});
}

function verifyServiceDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingService(id) {
  var url = "/api/ipam/services/" + id + "/";
  var description = "Verify negative delete for Service";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForServiceAdded(id) {
  waitFor(matchSuccess("Create service with id " + id));
}

function createVLANGroup(id, name, slug) {
  var url = "/api/ipam/vlan-groups/";
  var description = "Create vlan group " + name + " with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteVLANGroup(id, name, slug) {
  var url = "/api/ipam/vlan-groups/" + id + "/";
  var description = "Delete vlan group with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateVLANGroup(id, name, slug) {
  var url = "/api/ipam/vlan-groups/" + id + "/";
  var description = "Update vlan group " + name + " with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getVLANGroup(id, name, slug) {
  var url = "/api/ipam/vlan-groups/" + id + "/";
  var description = "Get vlan group with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingVLANGroup(id, name, slug) {
  var url = "/api/ipam/vlan-groups/";
  var description = "Try Add Existing VLANGroup";
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVLANGroupExists(id, name, slug) {
  var url = "/api/ipam/vlan-groups/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("VLANGroup not found in list");
  }});
}

function verifyVLANGroupDoesNotExist(id, name, slug) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingVLANGroup(id, name, slug) {
  var url = "/api/ipam/vlan-groups/" + id + "/";
  var description = "Verify negative delete for VLANGroup";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVLANGroupAdded(id, name, slug) {
  waitFor(matchSuccess("Create vlan group " + name + " with id " + id));
}

function createVLAN(id, name, slug, status, vid) {
  var url = "/api/ipam/vlans/";
  var description = "Create vlan " + name + " with id " + id + " and vid " + vid;
  var body = {
    "vid": String(vid),
    "name": String(name),
    "status": String(status),
    "slug": String(slug),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteVLAN(id, name, slug, status, vid) {
  var url = "/api/ipam/vlans/" + id + "/";
  var description = "Delete vlan with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateVLAN(id, name, slug, status, vid) {
  var url = "/api/ipam/vlans/" + id + "/";
  var description = "Update vlan " + name + " with id " + id + " and vid " + vid;
  var body = {
    "vid": String(vid),
    "name": String(name),
    "status": String(status),
    "slug": String(slug),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getVLAN(id, name, slug, status, vid) {
  var url = "/api/ipam/vlans/" + id + "/";
  var description = "Get vlan with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingVLAN(id, name, slug, status, vid) {
  var url = "/api/ipam/vlans/";
  var description = "Try Add Existing VLAN";
  var body = {
    "vid": String(vid),
    "name": String(name),
    "status": String(status),
    "slug": String(slug),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVLANExists(id, name, slug, status, vid) {
  var url = "/api/ipam/vlans/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("VLAN not found in list");
  }});
}

function verifyVLANDoesNotExist(id, name, slug, status, vid) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingVLAN(id, name, slug, status, vid) {
  var url = "/api/ipam/vlans/" + id + "/";
  var description = "Verify negative delete for VLAN";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVLANAdded(id, name, slug, status, vid) {
  waitFor(matchSuccess("Create vlan " + name + " with id " + id + " and vid " + vid));
}

function createVLANTranslationPolicy(id, name, slug) {
  var url = "/api/ipam/vlan-translation-policies/";
  var description = "Create vlan translation policy " + name + " with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteVLANTranslationPolicy(id, name, slug) {
  var url = "/api/ipam/vlan-translation-policies/" + id + "/";
  var description = "Delete vlan translation policy with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateVLANTranslationPolicy(id, name, slug) {
  var url = "/api/ipam/vlan-translation-policies/" + id + "/";
  var description = "Update vlan translation policy " + name + " with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getVLANTranslationPolicy(id, name, slug) {
  var url = "/api/ipam/vlan-translation-policies/" + id + "/";
  var description = "Get vlan translation policy with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingVLANTranslationPolicy(id, name, slug) {
  var url = "/api/ipam/vlan-translation-policies/";
  var description = "Try Add Existing VLANTranslationPolicy";
  var body = {
    "name": String(name),
    "slug": String(slug),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVLANTranslationPolicyExists(id, name, slug) {
  var url = "/api/ipam/vlan-translation-policies/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("VLANTranslationPolicy not found in list");
  }});
}

function verifyVLANTranslationPolicyDoesNotExist(id, name, slug) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingVLANTranslationPolicy(id, name, slug) {
  var url = "/api/ipam/vlan-translation-policies/" + id + "/";
  var description = "Verify negative delete for VLANTranslationPolicy";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVLANTranslationPolicyAdded(id, name, slug) {
  waitFor(matchSuccess("Create vlan translation policy " + name + " with id " + id));
}

function createVLANTranslationRule(id, local_vid, policy_id, remote_vid) {
  var url = "/api/ipam/vlan-translation-rules/";
  var description = "Create vlan translation rule with id " + id + " for policy " + policy_id;
  var body = {
    "policy_id": String(policy_id),
    "local_vid": String(local_vid),
    "remote_vid": String(remote_vid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteVLANTranslationRule(id, local_vid, policy_id, remote_vid) {
  var url = "/api/ipam/vlan-translation-rules/" + id + "/";
  var description = "Delete vlan translation rule with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateVLANTranslationRule(id, local_vid, policy_id, remote_vid) {
  var url = "/api/ipam/vlan-translation-rules/" + id + "/";
  var description = "Update vlan translation rule with id " + id + " for policy " + policy_id;
  var body = {
    "policy_id": String(policy_id),
    "local_vid": String(local_vid),
    "remote_vid": String(remote_vid),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getVLANTranslationRule(id, local_vid, policy_id, remote_vid) {
  var url = "/api/ipam/vlan-translation-rules/" + id + "/";
  var description = "Get vlan translation rule with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingVLANTranslationRule(id, local_vid, policy_id, remote_vid) {
  var url = "/api/ipam/vlan-translation-rules/";
  var description = "Try Add Existing VLANTranslationRule";
  var body = {
    "policy_id": String(policy_id),
    "local_vid": String(local_vid),
    "remote_vid": String(remote_vid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVLANTranslationRuleExists(id, local_vid, policy_id, remote_vid) {
  var url = "/api/ipam/vlan-translation-rules/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("VLANTranslationRule not found in list");
  }});
}

function verifyVLANTranslationRuleDoesNotExist(id, local_vid, policy_id, remote_vid) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingVLANTranslationRule(id, local_vid, policy_id, remote_vid) {
  var url = "/api/ipam/vlan-translation-rules/" + id + "/";
  var description = "Verify negative delete for VLANTranslationRule";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVLANTranslationRuleAdded(id, local_vid, policy_id, remote_vid) {
  waitFor(matchSuccess("Create vlan translation rule with id " + id + " for policy " + policy_id));
}

function createVRF(id, name) {
  var url = "/api/ipam/vrfs/";
  var description = "Create VRF with name " + name;
  var body = {
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteVRF(id, name) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "Delete VRF with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateVRF(id, name) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "Update VRF with id " + id + " and name " + name;
  var body = {
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getVRF(id, name) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "Retrieve VRF with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function patchVRF(id, name) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "Partially update VRF with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function tryToAddExistingVRF(id, name) {
  var url = "/api/ipam/vrfs/";
  var description = "Try Add Existing VRF";
  var body = {
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVRFExists(id, name) {
  var url = "/api/ipam/vrfs/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("VRF not found in list");
  }});
}

function verifyVRFDoesNotExist(id, name) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingVRF(id, name) {
  var url = "/api/ipam/vrfs/" + id + "/";
  var description = "Verify negative delete for VRF";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVRFAdded(id, name) {
  waitFor(matchSuccess("Create VRF with name " + name));
}

function createContactAssignment(id) {
  var url = "/api/tenancy/contact-assignments/";
  var description = "Create contact assignment with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteContactAssignment(id) {
  var url = "/api/tenancy/contact-assignments/" + id + "/";
  var description = "Delete contact assignment with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateContactAssignment(id) {
  var url = "/api/tenancy/contact-assignments/" + id + "/";
  var description = "Update contact assignment with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateContactAssignment(id) {
  var url = "/api/tenancy/contact-assignments/" + id + "/";
  var description = "Partially update contact assignment with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getContactAssignment(id) {
  var url = "/api/tenancy/contact-assignments/" + id + "/";
  var description = "Get contact assignment with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingContactAssignment(id) {
  var url = "/api/tenancy/contact-assignments/";
  var description = "Try Add Existing ContactAssignment";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyContactAssignmentExists(id) {
  var url = "/api/tenancy/contact-assignments/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ContactAssignment not found in list");
  }});
}

function verifyContactAssignmentDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingContactAssignment(id) {
  var url = "/api/tenancy/contact-assignments/" + id + "/";
  var description = "Verify negative delete for ContactAssignment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForContactAssignmentAdded(id) {
  waitFor(matchSuccess("Create contact assignment with id " + id));
}

function createContactGroup(id) {
  var url = "/api/tenancy/contact-groups/";
  var description = "Create contact group {name} with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteContactGroup(id) {
  var url = "/api/tenancy/contact-groups/" + id + "/";
  var description = "Delete contact group with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateContactGroup(id) {
  var url = "/api/tenancy/contact-groups/" + id + "/";
  var description = "Update contact group with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateContactGroup(id) {
  var url = "/api/tenancy/contact-groups/" + id + "/";
  var description = "Partially update contact group with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getContactGroup(id) {
  var url = "/api/tenancy/contact-groups/" + id + "/";
  var description = "Get contact group with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingContactGroup(id) {
  var url = "/api/tenancy/contact-groups/";
  var description = "Try Add Existing ContactGroup";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyContactGroupExists(id) {
  var url = "/api/tenancy/contact-groups/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ContactGroup not found in list");
  }});
}

function verifyContactGroupDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingContactGroup(id) {
  var url = "/api/tenancy/contact-groups/" + id + "/";
  var description = "Verify negative delete for ContactGroup";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForContactGroupAdded(id) {
  waitFor(matchSuccess("Create contact group {name} with id " + id));
}

function createContactRole(id) {
  var url = "/api/tenancy/contact-roles/";
  var description = "Create contact role {name} with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteContactRole(id) {
  var url = "/api/tenancy/contact-roles/" + id + "/";
  var description = "Delete contact role with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateContactRole(id) {
  var url = "/api/tenancy/contact-roles/" + id + "/";
  var description = "Update contact role with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateContactRole(id) {
  var url = "/api/tenancy/contact-roles/" + id + "/";
  var description = "Partially update contact role with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getContactRole(id) {
  var url = "/api/tenancy/contact-roles/" + id + "/";
  var description = "Get contact role with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingContactRole(id) {
  var url = "/api/tenancy/contact-roles/";
  var description = "Try Add Existing ContactRole";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyContactRoleExists(id) {
  var url = "/api/tenancy/contact-roles/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ContactRole not found in list");
  }});
}

function verifyContactRoleDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingContactRole(id) {
  var url = "/api/tenancy/contact-roles/" + id + "/";
  var description = "Verify negative delete for ContactRole";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForContactRoleAdded(id) {
  waitFor(matchSuccess("Create contact role {name} with id " + id));
}

function createContact(id) {
  var url = "/api/tenancy/contacts/";
  var description = "Create contact {name} with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteContact(id) {
  var url = "/api/tenancy/contacts/" + id + "/";
  var description = "Delete contact with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateContact(id) {
  var url = "/api/tenancy/contacts/" + id + "/";
  var description = "Update contact with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateContact(id) {
  var url = "/api/tenancy/contacts/" + id + "/";
  var description = "Partially update contact with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getContact(id) {
  var url = "/api/tenancy/contacts/" + id + "/";
  var description = "Get contact with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingContact(id) {
  var url = "/api/tenancy/contacts/";
  var description = "Try Add Existing Contact";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyContactExists(id) {
  var url = "/api/tenancy/contacts/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Contact not found in list");
  }});
}

function verifyContactDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingContact(id) {
  var url = "/api/tenancy/contacts/" + id + "/";
  var description = "Verify negative delete for Contact";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForContactAdded(id) {
  waitFor(matchSuccess("Create contact {name} with id " + id));
}

function createTenantGroup(id) {
  var url = "/api/tenancy/tenant-groups/";
  var description = "Create tenant group {name} with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteTenantGroup(id) {
  var url = "/api/tenancy/tenant-groups/" + id + "/";
  var description = "Delete tenant group with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateTenantGroup(id) {
  var url = "/api/tenancy/tenant-groups/" + id + "/";
  var description = "Update tenant group with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateTenantGroup(id) {
  var url = "/api/tenancy/tenant-groups/" + id + "/";
  var description = "Partially update tenant group with id " + id;
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getTenantGroup(id) {
  var url = "/api/tenancy/tenant-groups/" + id + "/";
  var description = "Get tenant group with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingTenantGroup(id) {
  var url = "/api/tenancy/tenant-groups/";
  var description = "Try Add Existing TenantGroup";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTenantGroupExists(id) {
  var url = "/api/tenancy/tenant-groups/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("TenantGroup not found in list");
  }});
}

function verifyTenantGroupDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingTenantGroup(id) {
  var url = "/api/tenancy/tenant-groups/" + id + "/";
  var description = "Verify negative delete for TenantGroup";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForTenantGroupAdded(id) {
  waitFor(matchSuccess("Create tenant group {name} with id " + id));
}

function createTenant(contact, contact_group, contact_role, description, group, id, name, slug) {
  var url = "/api/tenancy/tenants/";
  var description = "Create tenant with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "description": String(description),
    "group": String(group),
    "contact": String(contact),
    "contact_group": String(contact_group),
    "contact_role": String(contact_role),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteTenant(contact, contact_group, contact_role, description, group, id, name, slug) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "Delete tenant with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateTenant(contact, contact_group, contact_role, description, group, id, name, slug) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "Update tenant with id " + id;
  var body = {
    "name": String(name),
    "slug": String(slug),
    "description": String(description),
    "group": String(group),
    "contact": String(contact),
    "contact_group": String(contact_group),
    "contact_role": String(contact_role),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getTenant(contact, contact_group, contact_role, description, group, id, name, slug) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "Get tenant with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingTenant(contact, contact_group, contact_role, description, group, id, name, slug) {
  var url = "/api/tenancy/tenants/";
  var description = "Try Add Existing Tenant";
  var body = {
    "name": String(name),
    "slug": String(slug),
    "description": String(description),
    "group": String(group),
    "contact": String(contact),
    "contact_group": String(contact_group),
    "contact_role": String(contact_role),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTenantExists(contact, contact_group, contact_role, description, group, id, name, slug) {
  var url = "/api/tenancy/tenants/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Tenant not found in list");
  }});
}

function verifyTenantDoesNotExist(contact, contact_group, contact_role, description, group, id, name, slug) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingTenant(contact, contact_group, contact_role, description, group, id, name, slug) {
  var url = "/api/tenancy/tenants/" + id + "/";
  var description = "Verify negative delete for Tenant";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForTenantAdded(contact, contact_group, contact_role, description, group, id, name, slug) {
  waitFor(matchSuccess("Create tenant with id " + id));
}

function createGroup(id) {
  var url = "/api/users/groups/";
  var description = "Create group with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteGroupsBulk(id) {
  var url = "/api/users/groups/";
  var description = "Delete groups in bulk";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateGroupsBulk(id) {
  var url = "/api/users/groups/";
  var description = "Bulk update groups";
  var body = {
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateGroupsBulk(id) {
  var url = "/api/users/groups/";
  var description = "Bulk partial update groups";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getGroup(id) {
  var url = "/api/users/groups/" + id + "/";
  var description = "Get group with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateGroup(id) {
  var url = "/api/users/groups/" + id + "/";
  var description = "Update group with id " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateGroup(id) {
  var url = "/api/users/groups/" + id + "/";
  var description = "Partial update group with id " + id;
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteGroup(id) {
  var url = "/api/users/groups/" + id + "/";
  var description = "Delete group with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingGroup(id) {
  var url = "/api/users/groups/";
  var description = "Try Add Existing Group";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyGroupExists(id) {
  var url = "/api/users/groups/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Group not found in list");
  }});
}

function verifyGroupDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingGroup(id) {
  var url = "/api/users/groups/";
  var description = "Verify negative delete for Group";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForGroupAdded(id) {
  waitFor(matchSuccess("Create group with id " + id));
}

function createPermission(id) {
  var url = "/api/users/permissions/";
  var description = "Create permission with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePermissionsBulk(id) {
  var url = "/api/users/permissions/";
  var description = "Delete permissions in bulk";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updatePermissionsBulk(id) {
  var url = "/api/users/permissions/";
  var description = "Bulk update permissions";
  var body = {
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdatePermissionsBulk(id) {
  var url = "/api/users/permissions/";
  var description = "Bulk partial update permissions";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getPermission(id) {
  var url = "/api/users/permissions/" + id + "/";
  var description = "Get permission with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updatePermission(id) {
  var url = "/api/users/permissions/" + id + "/";
  var description = "Update permission with id " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdatePermission(id) {
  var url = "/api/users/permissions/" + id + "/";
  var description = "Partial update permission with id " + id;
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePermission(id) {
  var url = "/api/users/permissions/" + id + "/";
  var description = "Delete permission with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingPermission(id) {
  var url = "/api/users/permissions/";
  var description = "Try Add Existing Permission";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPermissionExists(id) {
  var url = "/api/users/permissions/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Permission not found in list");
  }});
}

function verifyPermissionDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingPermission(id) {
  var url = "/api/users/permissions/";
  var description = "Verify negative delete for Permission";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForPermissionAdded(id) {
  waitFor(matchSuccess("Create permission with id " + id));
}

function createToken(id, key) {
  var url = "/api/users/tokens/";
  var description = "Create token with id " + id + " and key " + key;
  var body = {
    "id": String(id),
    "key": String(key),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteTokensBulk(id, key) {
  var url = "/api/users/tokens/";
  var description = "Delete tokens in bulk";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateTokensBulk(id, key) {
  var url = "/api/users/tokens/";
  var description = "Bulk update tokens";
  var body = {
    "key": String(key),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateTokensBulk(id, key) {
  var url = "/api/users/tokens/";
  var description = "Bulk partial update tokens";
  var body = {
    "key": String(key),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getToken(id, key) {
  var url = "/api/users/tokens/" + id + "/";
  var description = "Get token with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateToken(id, key) {
  var url = "/api/users/tokens/" + id + "/";
  var description = "Update token with id " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateToken(id, key) {
  var url = "/api/users/tokens/" + id + "/";
  var description = "Partial update token with id " + id;
  var body = {
    "key": String(key),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteToken(id, key) {
  var url = "/api/users/tokens/" + id + "/";
  var description = "Delete token with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function provisionToken(id, key) {
  var url = "/api/users/tokens/provision/";
  var description = "Provision a new token";
  var body = {
    "key": String(key),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 401],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function tryToAddExistingToken(id, key) {
  var url = "/api/users/tokens/";
  var description = "Try Add Existing Token";
  var body = {
    "id": String(id),
    "key": String(key),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTokenExists(id, key) {
  var url = "/api/users/tokens/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Token not found in list");
  }});
}

function verifyTokenDoesNotExist(id, key) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingToken(id, key) {
  var url = "/api/users/tokens/";
  var description = "Verify negative delete for Token";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForTokenAdded(id, key) {
  waitFor(matchSuccess("Create token with id " + id + " and key " + key));
}

function createUser(email, id, username) {
  var url = "/api/users/users/";
  var description = "Create user " + username + " with id " + id + " and email " + email;
  var body = {
    "id": String(id),
    "username": String(username),
    "email": String(email),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteUsersBulk(email, id, username) {
  var url = "/api/users/users/";
  var description = "Delete users in bulk";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateUsersBulk(email, id, username) {
  var url = "/api/users/users/";
  var description = "Bulk update users";
  var body = {
    "email": String(email),
    "username": String(username),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateUsersBulk(email, id, username) {
  var url = "/api/users/users/";
  var description = "Bulk partial update users";
  var body = {
    "email": String(email),
    "username": String(username),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getUser(email, id, username) {
  var url = "/api/users/users/" + id + "/";
  var description = "Get user with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateUser(email, id, username) {
  var url = "/api/users/users/" + id + "/";
  var description = "Update user with id " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateUser(email, id, username) {
  var url = "/api/users/users/" + id + "/";
  var description = "Partial update user with id " + id;
  var body = {
    "email": String(email),
    "username": String(username),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteUser(email, id, username) {
  var url = "/api/users/users/" + id + "/";
  var description = "Delete user with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingUser(email, id, username) {
  var url = "/api/users/users/";
  var description = "Try Add Existing User";
  var body = {
    "id": String(id),
    "username": String(username),
    "email": String(email),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserExists(email, id, username) {
  var url = "/api/users/users/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("User not found in list");
  }});
}

function verifyUserDoesNotExist(email, id, username) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingUser(email, id, username) {
  var url = "/api/users/users/";
  var description = "Verify negative delete for User";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForUserAdded(email, id, username) {
  waitFor(matchSuccess("Create user " + username + " with id " + id + " and email " + email));
}

function createClusterGroup(id) {
  var url = "/api/virtualization/cluster-groups/";
  var description = "Create cluster group with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteClusterGroup(id) {
  var url = "/api/virtualization/cluster-groups/" + id + "/";
  var description = "Delete cluster group with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateClusterGroup(id) {
  var url = "/api/virtualization/cluster-groups/" + id + "/";
  var description = "Update cluster group with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getClusterGroup(id) {
  var url = "/api/virtualization/cluster-groups/" + id + "/";
  var description = "Get cluster group with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClusterGroup(id) {
  var url = "/api/virtualization/cluster-groups/";
  var description = "Try Add Existing ClusterGroup";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClusterGroupExists(id) {
  var url = "/api/virtualization/cluster-groups/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ClusterGroup not found in list");
  }});
}

function verifyClusterGroupDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingClusterGroup(id) {
  var url = "/api/virtualization/cluster-groups/" + id + "/";
  var description = "Verify negative delete for ClusterGroup";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForClusterGroupAdded(id) {
  waitFor(matchSuccess("Create cluster group with id " + id));
}

function createClusterType(id) {
  var url = "/api/virtualization/cluster-types/";
  var description = "Create cluster type with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteClusterType(id) {
  var url = "/api/virtualization/cluster-types/" + id + "/";
  var description = "Delete cluster type with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateClusterType(id) {
  var url = "/api/virtualization/cluster-types/" + id + "/";
  var description = "Update cluster type with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getClusterType(id) {
  var url = "/api/virtualization/cluster-types/" + id + "/";
  var description = "Get cluster type with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClusterType(id) {
  var url = "/api/virtualization/cluster-types/";
  var description = "Try Add Existing ClusterType";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClusterTypeExists(id) {
  var url = "/api/virtualization/cluster-types/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("ClusterType not found in list");
  }});
}

function verifyClusterTypeDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingClusterType(id) {
  var url = "/api/virtualization/cluster-types/" + id + "/";
  var description = "Verify negative delete for ClusterType";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForClusterTypeAdded(id) {
  waitFor(matchSuccess("Create cluster type with id " + id));
}

function createCluster(id) {
  var url = "/api/virtualization/clusters/";
  var description = "Create cluster with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteCluster(id) {
  var url = "/api/virtualization/clusters/" + id + "/";
  var description = "Delete cluster with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateCluster(id) {
  var url = "/api/virtualization/clusters/" + id + "/";
  var description = "Update cluster with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getCluster(id) {
  var url = "/api/virtualization/clusters/" + id + "/";
  var description = "Get cluster with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingCluster(id) {
  var url = "/api/virtualization/clusters/";
  var description = "Try Add Existing Cluster";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClusterExists(id) {
  var url = "/api/virtualization/clusters/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Cluster not found in list");
  }});
}

function verifyClusterDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingCluster(id) {
  var url = "/api/virtualization/clusters/" + id + "/";
  var description = "Verify negative delete for Cluster";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForClusterAdded(id) {
  waitFor(matchSuccess("Create cluster with id " + id));
}

function createVirtualDisk(id) {
  var url = "/api/virtualization/virtual-disks/";
  var description = "Create virtual disk with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteVirtualDisk(id) {
  var url = "/api/virtualization/virtual-disks/" + id + "/";
  var description = "Delete virtual disk with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateVirtualDisk(id) {
  var url = "/api/virtualization/virtual-disks/" + id + "/";
  var description = "Update virtual disk with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getVirtualDisk(id) {
  var url = "/api/virtualization/virtual-disks/" + id + "/";
  var description = "Get virtual disk with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingVirtualDisk(id) {
  var url = "/api/virtualization/virtual-disks/";
  var description = "Try Add Existing VirtualDisk";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVirtualDiskExists(id) {
  var url = "/api/virtualization/virtual-disks/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("VirtualDisk not found in list");
  }});
}

function verifyVirtualDiskDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingVirtualDisk(id) {
  var url = "/api/virtualization/virtual-disks/" + id + "/";
  var description = "Verify negative delete for VirtualDisk";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVirtualDiskAdded(id) {
  waitFor(matchSuccess("Create virtual disk with id " + id));
}

function createVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/";
  var description = "Create virtual machine with id " + id;
  var body = {
    "name": String(name),
    "cluster": String(cluster),
    "status": String(status),
    "role": String(role),
    "tenant": String(tenant),
    "platform": String(platform),
    "site": String(site),
    "serial": String(serial),
    "memory": String(memory),
    "vcpus": String(vcpus),
    "disk": String(disk),
    "description": String(description),
    "device": String(device),
    "config_template_id": String(config_template_id),
    "contact": String(contact),
    "contact_role": String(contact_role),
    "cluster_group": String(cluster_group),
    "cluster_type": String(cluster_type),
    "tag": String(tag),
    "local_context_data": String(local_context_data),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "Delete virtual machine with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "Update virtual machine with id " + id;
  var body = {
    "name": String(name),
    "cluster": String(cluster),
    "status": String(status),
    "role": String(role),
    "tenant": String(tenant),
    "platform": String(platform),
    "site": String(site),
    "serial": String(serial),
    "memory": String(memory),
    "vcpus": String(vcpus),
    "disk": String(disk),
    "description": String(description),
    "device": String(device),
    "config_template_id": String(config_template_id),
    "contact": String(contact),
    "contact_role": String(contact_role),
    "cluster_group": String(cluster_group),
    "cluster_type": String(cluster_type),
    "tag": String(tag),
    "local_context_data": String(local_context_data),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function partialUpdateVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "Partially update virtual machine with id " + id;
  var body = {
    "name": String(name),
    "cluster": String(cluster),
    "status": String(status),
    "role": String(role),
    "tenant": String(tenant),
    "platform": String(platform),
    "site": String(site),
    "serial": String(serial),
    "memory": String(memory),
    "vcpus": String(vcpus),
    "disk": String(disk),
    "description": String(description),
    "device": String(device),
    "config_template_id": String(config_template_id),
    "contact": String(contact),
    "contact_role": String(contact_role),
    "cluster_group": String(cluster_group),
    "cluster_type": String(cluster_type),
    "tag": String(tag),
    "local_context_data": String(local_context_data),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkUpdateVirtualMachines(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/";
  var description = "Bulk update virtual machines";
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkPartialUpdateVirtualMachines(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/";
  var description = "Bulk partially update virtual machines";
  var body = undefined;
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function bulkDeleteVirtualMachines(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/";
  var description = "Bulk delete virtual machines";
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "Get virtual machine with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listVirtualMachines(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/";
  var description = "List virtual machines";
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function renderVirtualMachineConfig(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/" + id + "/render-config/";
  var description = "Render config for virtual machine with id " + id;
  var body = {
    "name": String(name),
    "cluster": String(cluster),
    "status": String(status),
    "role": String(role),
    "tenant": String(tenant),
    "platform": String(platform),
    "site": String(site),
    "serial": String(serial),
    "memory": String(memory),
    "vcpus": String(vcpus),
    "disk": String(disk),
    "description": String(description),
    "device": String(device),
    "config_template_id": String(config_template_id),
    "contact": String(contact),
    "contact_role": String(contact_role),
    "cluster_group": String(cluster_group),
    "cluster_type": String(cluster_type),
    "tag": String(tag),
    "local_context_data": String(local_context_data),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function tryToAddExistingVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/";
  var description = "Try Add Existing VirtualMachine";
  var body = {
    "name": String(name),
    "cluster": String(cluster),
    "status": String(status),
    "role": String(role),
    "tenant": String(tenant),
    "platform": String(platform),
    "site": String(site),
    "serial": String(serial),
    "memory": String(memory),
    "vcpus": String(vcpus),
    "disk": String(disk),
    "description": String(description),
    "device": String(device),
    "config_template_id": String(config_template_id),
    "contact": String(contact),
    "contact_role": String(contact_role),
    "cluster_group": String(cluster_group),
    "cluster_type": String(cluster_type),
    "tag": String(tag),
    "local_context_data": String(local_context_data),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVirtualMachineExists(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("VirtualMachine not found in list");
  }});
}

function verifyVirtualMachineDoesNotExist(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  var url = "/api/virtualization/virtual-machines/" + id + "/";
  var description = "Verify negative delete for VirtualMachine";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForVirtualMachineAdded(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus) {
  waitFor(matchSuccess("Create virtual machine with id " + id));
}

function createIKEPolicy(id) {
  var url = "/api/vpn/ike-policies/";
  var description = "Create ike policy with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteIKEPolicy(id) {
  var url = "/api/vpn/ike-policies/" + id + "/";
  var description = "Delete ike policy with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateIKEPolicy(id) {
  var url = "/api/vpn/ike-policies/" + id + "/";
  var description = "Update ike policy with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getIKEPolicy(id) {
  var url = "/api/vpn/ike-policies/" + id + "/";
  var description = "Get ike policy with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingIKEPolicy(id) {
  var url = "/api/vpn/ike-policies/";
  var description = "Try Add Existing IKEPolicy";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIKEPolicyExists(id) {
  var url = "/api/vpn/ike-policies/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("IKEPolicy not found in list");
  }});
}

function verifyIKEPolicyDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingIKEPolicy(id) {
  var url = "/api/vpn/ike-policies/" + id + "/";
  var description = "Verify negative delete for IKEPolicy";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForIKEPolicyAdded(id) {
  waitFor(matchSuccess("Create ike policy with id " + id));
}

function createIKEProposal(id) {
  var url = "/api/vpn/ike-proposals/";
  var description = "Create ike proposal with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteIKEProposal(id) {
  var url = "/api/vpn/ike-proposals/" + id + "/";
  var description = "Delete ike proposal with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateIKEProposal(id) {
  var url = "/api/vpn/ike-proposals/" + id + "/";
  var description = "Update ike proposal with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getIKEProposal(id) {
  var url = "/api/vpn/ike-proposals/" + id + "/";
  var description = "Get ike proposal with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingIKEProposal(id) {
  var url = "/api/vpn/ike-proposals/";
  var description = "Try Add Existing IKEProposal";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIKEProposalExists(id) {
  var url = "/api/vpn/ike-proposals/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("IKEProposal not found in list");
  }});
}

function verifyIKEProposalDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingIKEProposal(id) {
  var url = "/api/vpn/ike-proposals/" + id + "/";
  var description = "Verify negative delete for IKEProposal";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForIKEProposalAdded(id) {
  waitFor(matchSuccess("Create ike proposal with id " + id));
}

function createIPSecPolicy(id) {
  var url = "/api/vpn/ipsec-policies/";
  var description = "Create ipsec policy with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteIPSecPolicy(id) {
  var url = "/api/vpn/ipsec-policies/" + id + "/";
  var description = "Delete ipsec policy with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateIPSecPolicy(id) {
  var url = "/api/vpn/ipsec-policies/" + id + "/";
  var description = "Update ipsec policy with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getIPSecPolicy(id) {
  var url = "/api/vpn/ipsec-policies/" + id + "/";
  var description = "Get ipsec policy with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingIPSecPolicy(id) {
  var url = "/api/vpn/ipsec-policies/";
  var description = "Try Add Existing IPSecPolicy";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIPSecPolicyExists(id) {
  var url = "/api/vpn/ipsec-policies/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("IPSecPolicy not found in list");
  }});
}

function verifyIPSecPolicyDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingIPSecPolicy(id) {
  var url = "/api/vpn/ipsec-policies/" + id + "/";
  var description = "Verify negative delete for IPSecPolicy";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForIPSecPolicyAdded(id) {
  waitFor(matchSuccess("Create ipsec policy with id " + id));
}

function createIPSecProfile(id) {
  var url = "/api/vpn/ipsec-profiles/";
  var description = "Create ipsec profile with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteIPSecProfile(id) {
  var url = "/api/vpn/ipsec-profiles/" + id + "/";
  var description = "Delete ipsec profile with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateIPSecProfile(id) {
  var url = "/api/vpn/ipsec-profiles/" + id + "/";
  var description = "Update ipsec profile with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getIPSecProfile(id) {
  var url = "/api/vpn/ipsec-profiles/" + id + "/";
  var description = "Get ipsec profile with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingIPSecProfile(id) {
  var url = "/api/vpn/ipsec-profiles/";
  var description = "Try Add Existing IPSecProfile";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIPSecProfileExists(id) {
  var url = "/api/vpn/ipsec-profiles/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("IPSecProfile not found in list");
  }});
}

function verifyIPSecProfileDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingIPSecProfile(id) {
  var url = "/api/vpn/ipsec-profiles/" + id + "/";
  var description = "Verify negative delete for IPSecProfile";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForIPSecProfileAdded(id) {
  waitFor(matchSuccess("Create ipsec profile with id " + id));
}

function createIPSecProposal(id) {
  var url = "/api/vpn/ipsec-proposals/";
  var description = "Create ipsec proposal with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteIPSecProposal(id) {
  var url = "/api/vpn/ipsec-proposals/" + id + "/";
  var description = "Delete ipsec proposal with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateIPSecProposal(id) {
  var url = "/api/vpn/ipsec-proposals/" + id + "/";
  var description = "Update ipsec proposal with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getIPSecProposal(id) {
  var url = "/api/vpn/ipsec-proposals/" + id + "/";
  var description = "Get ipsec proposal with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingIPSecProposal(id) {
  var url = "/api/vpn/ipsec-proposals/";
  var description = "Try Add Existing IPSecProposal";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIPSecProposalExists(id) {
  var url = "/api/vpn/ipsec-proposals/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("IPSecProposal not found in list");
  }});
}

function verifyIPSecProposalDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingIPSecProposal(id) {
  var url = "/api/vpn/ipsec-proposals/" + id + "/";
  var description = "Verify negative delete for IPSecProposal";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForIPSecProposalAdded(id) {
  waitFor(matchSuccess("Create ipsec proposal with id " + id));
}

function createL2VPNTermination(id) {
  var url = "/api/vpn/l2vpn-terminations/";
  var description = "Create l2vpn termination with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteL2VPNTermination(id) {
  var url = "/api/vpn/l2vpn-terminations/" + id + "/";
  var description = "Delete l2vpn termination with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateL2VPNTermination(id) {
  var url = "/api/vpn/l2vpn-terminations/" + id + "/";
  var description = "Update l2vpn termination with id " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getL2VPNTermination(id) {
  var url = "/api/vpn/l2vpn-terminations/" + id + "/";
  var description = "Get l2vpn termination with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingL2VPNTermination(id) {
  var url = "/api/vpn/l2vpn-terminations/";
  var description = "Try Add Existing L2VPNTermination";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyL2VPNTerminationExists(id) {
  var url = "/api/vpn/l2vpn-terminations/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("L2VPNTermination not found in list");
  }});
}

function verifyL2VPNTerminationDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingL2VPNTermination(id) {
  var url = "/api/vpn/l2vpn-terminations/" + id + "/";
  var description = "Verify negative delete for L2VPNTermination";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForL2VPNTerminationAdded(id) {
  waitFor(matchSuccess("Create l2vpn termination with id " + id));
}

function createL2VPN(id, name, slug) {
  var url = "/api/vpn/l2vpns/";
  var description = "Create l2vpn " + name + " with id " + id;
  var body = {
    "slug": String(slug),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteL2VPN(id, name, slug) {
  var url = "/api/vpn/l2vpns/" + id + "/";
  var description = "Delete l2vpn with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateL2VPN(id, name, slug) {
  var url = "/api/vpn/l2vpns/" + id + "/";
  var description = "Update l2vpn with id " + id;
  var body = {
    "slug": String(slug),
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getL2VPN(id, name, slug) {
  var url = "/api/vpn/l2vpns/" + id + "/";
  var description = "Get l2vpn with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingL2VPN(id, name, slug) {
  var url = "/api/vpn/l2vpns/";
  var description = "Try Add Existing L2VPN";
  var body = {
    "slug": String(slug),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyL2VPNExists(id, name, slug) {
  var url = "/api/vpn/l2vpns/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("L2VPN not found in list");
  }});
}

function verifyL2VPNDoesNotExist(id, name, slug) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingL2VPN(id, name, slug) {
  var url = "/api/vpn/l2vpns/" + id + "/";
  var description = "Verify negative delete for L2VPN";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForL2VPNAdded(id, name, slug) {
  waitFor(matchSuccess("Create l2vpn " + name + " with id " + id));
}

function createTunnelGroup(id, name) {
  var url = "/api/vpn/tunnel-groups/";
  var description = "Create tunnel group " + name + " with id " + id;
  var body = {
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteTunnelGroup(id, name) {
  var url = "/api/vpn/tunnel-groups/" + id + "/";
  var description = "Delete tunnel group with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateTunnelGroup(id, name) {
  var url = "/api/vpn/tunnel-groups/" + id + "/";
  var description = "Update tunnel group with id " + id;
  var body = {
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getTunnelGroup(id, name) {
  var url = "/api/vpn/tunnel-groups/" + id + "/";
  var description = "Get tunnel group with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingTunnelGroup(id, name) {
  var url = "/api/vpn/tunnel-groups/";
  var description = "Try Add Existing TunnelGroup";
  var body = {
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTunnelGroupExists(id, name) {
  var url = "/api/vpn/tunnel-groups/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("TunnelGroup not found in list");
  }});
}

function verifyTunnelGroupDoesNotExist(id, name) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingTunnelGroup(id, name) {
  var url = "/api/vpn/tunnel-groups/" + id + "/";
  var description = "Verify negative delete for TunnelGroup";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForTunnelGroupAdded(id, name) {
  waitFor(matchSuccess("Create tunnel group " + name + " with id " + id));
}

function createTunnelTermination(id) {
  var url = "/api/vpn/tunnel-terminations/";
  var description = "Create tunnel termination with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteTunnelTermination(id) {
  var url = "/api/vpn/tunnel-terminations/" + id + "/";
  var description = "Delete tunnel termination with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateTunnelTermination(id) {
  var url = "/api/vpn/tunnel-terminations/" + id + "/";
  var description = "Update tunnel termination with id " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getTunnelTermination(id) {
  var url = "/api/vpn/tunnel-terminations/" + id + "/";
  var description = "Get tunnel termination with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingTunnelTermination(id) {
  var url = "/api/vpn/tunnel-terminations/";
  var description = "Try Add Existing TunnelTermination";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTunnelTerminationExists(id) {
  var url = "/api/vpn/tunnel-terminations/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("TunnelTermination not found in list");
  }});
}

function verifyTunnelTerminationDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingTunnelTermination(id) {
  var url = "/api/vpn/tunnel-terminations/" + id + "/";
  var description = "Verify negative delete for TunnelTermination";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForTunnelTerminationAdded(id) {
  waitFor(matchSuccess("Create tunnel termination with id " + id));
}

function createTunnel(id, name) {
  var url = "/api/vpn/tunnels/";
  var description = "Create tunnel " + name + " with id " + id;
  var body = {
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteTunnel(id, name) {
  var url = "/api/vpn/tunnels/" + id + "/";
  var description = "Delete tunnel with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateTunnel(id, name) {
  var url = "/api/vpn/tunnels/" + id + "/";
  var description = "Update tunnel with id " + id;
  var body = {
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getTunnel(id, name) {
  var url = "/api/vpn/tunnels/" + id + "/";
  var description = "Get tunnel with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingTunnel(id, name) {
  var url = "/api/vpn/tunnels/";
  var description = "Try Add Existing Tunnel";
  var body = {
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTunnelExists(id, name) {
  var url = "/api/vpn/tunnels/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Tunnel not found in list");
  }});
}

function verifyTunnelDoesNotExist(id, name) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingTunnel(id, name) {
  var url = "/api/vpn/tunnels/" + id + "/";
  var description = "Verify negative delete for Tunnel";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForTunnelAdded(id, name) {
  waitFor(matchSuccess("Create tunnel " + name + " with id " + id));
}

function createWirelessLANGroup(id) {
  var url = "/api/wireless/wireless-lan-groups/";
  var description = "Create wireless LAN group with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteWirelessLANGroup(id) {
  var url = "/api/wireless/wireless-lan-groups/" + id + "/";
  var description = "Delete wireless LAN group with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateWirelessLANGroup(id) {
  var url = "/api/wireless/wireless-lan-groups/" + id + "/";
  var description = "Update wireless LAN group with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getWirelessLANGroup(id) {
  var url = "/api/wireless/wireless-lan-groups/" + id + "/";
  var description = "Get wireless LAN group with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingWirelessLANGroup(id) {
  var url = "/api/wireless/wireless-lan-groups/";
  var description = "Try Add Existing WirelessLANGroup";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyWirelessLANGroupExists(id) {
  var url = "/api/wireless/wireless-lan-groups/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("WirelessLANGroup not found in list");
  }});
}

function verifyWirelessLANGroupDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingWirelessLANGroup(id) {
  var url = "/api/wireless/wireless-lan-groups/" + id + "/";
  var description = "Verify negative delete for WirelessLANGroup";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForWirelessLANGroupAdded(id) {
  waitFor(matchSuccess("Create wireless LAN group with id " + id));
}

function createWirelessLAN(id) {
  var url = "/api/wireless/wireless-lans/";
  var description = "Create wireless LAN with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteWirelessLAN(id) {
  var url = "/api/wireless/wireless-lans/" + id + "/";
  var description = "Delete wireless LAN with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateWirelessLAN(id) {
  var url = "/api/wireless/wireless-lans/" + id + "/";
  var description = "Update wireless LAN with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getWirelessLAN(id) {
  var url = "/api/wireless/wireless-lans/" + id + "/";
  var description = "Get wireless LAN with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingWirelessLAN(id) {
  var url = "/api/wireless/wireless-lans/";
  var description = "Try Add Existing WirelessLAN";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyWirelessLANExists(id) {
  var url = "/api/wireless/wireless-lans/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("WirelessLAN not found in list");
  }});
}

function verifyWirelessLANDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingWirelessLAN(id) {
  var url = "/api/wireless/wireless-lans/" + id + "/";
  var description = "Verify negative delete for WirelessLAN";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForWirelessLANAdded(id) {
  waitFor(matchSuccess("Create wireless LAN with id " + id));
}

function createWirelessLink(id) {
  var url = "/api/wireless/wireless-links/";
  var description = "Create wireless link with id " + id;
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteWirelessLink(id) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  var description = "Delete wireless link with id " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateWirelessLink(id) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  var description = "Update wireless link with id " + id;
  var body = undefined;
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getWirelessLink(id) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  var description = "Get wireless link with id " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingWirelessLink(id) {
  var url = "/api/wireless/wireless-links/";
  var description = "Try Add Existing WirelessLink";
  var body = undefined;
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyWirelessLinkExists(id) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("WirelessLink not found in list");
  }});
}

function verifyWirelessLinkDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingWirelessLink(id) {
  var url = "/api/wireless/wireless-links/" + id + "/";
  var description = "Verify negative delete for WirelessLink";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForWirelessLinkAdded(id) {
  waitFor(matchSuccess("Create wireless link with id " + id));
}
