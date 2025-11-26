//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("/api", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: circuitgroupassignment ----

function addCircuitGroupAssignment(id) {
  var url = "/circuits/circuit-group-assignments/";
  var description = "Add circuit group assignment " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCircuitGroupAssignment(id) {
  var url = "/circuits/circuit-group-assignments/" + id + "/";
  var description = "Delete circuit group assignment " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCircuitGroupAssignment(id) {
  var url = "/circuits/circuit-group-assignments/" + id + "/";
  var description = "Get circuit group assignment " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCircuitGroupAssignment(id) {
  var url = "/circuits/circuit-group-assignments/" + id + "/";
  var description = "Update circuit group assignment " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCircuitGroupAssignment(id) {
  return addCircuitGroupAssignment(id);
}

function verifyCircuitGroupAssignmentExists(id) {
  return getCircuitGroupAssignment(id);
}

function verifyCircuitGroupAssignmentDoesNotExist(id) {
  return getCircuitGroupAssignment(id);
}

function tryToDeleteANonExistingCircuitGroupAssignment(id) {
  return deleteCircuitGroupAssignment(id);
}

function matchAddedCircuitGroupAssignment(id) {
  return bp.EventSet("matchAddedCircuitGroupAssignment", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyCircuitGroupAssignmentAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add circuit group assignment (.+)/)});
  var m = ev.data.parameters.description.match(/Add circuit group assignment (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedCircuitGroupAssignment(id) {
  return bp.EventSet("matchDeletedCircuitGroupAssignment", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyCircuitGroupAssignmentDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete circuit group assignment (.+)/)});
  var m = ev.data.parameters.description.match(/Delete circuit group assignment (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: circuitgroup ----

function addCircuitGroup(id) {
  var url = "/circuits/circuit-groups/";
  var description = "Add circuit group " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCircuitGroup(id) {
  var url = "/circuits/circuit-groups/" + id + "/";
  var description = "Delete circuit group " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCircuitGroup(id) {
  var url = "/circuits/circuit-groups/" + id + "/";
  var description = "Get circuit group " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCircuitGroup(id) {
  var url = "/circuits/circuit-groups/" + id + "/";
  var description = "Update circuit group " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCircuitGroup(id) {
  return addCircuitGroup(id);
}

function verifyCircuitGroupExists(id) {
  return getCircuitGroup(id);
}

function verifyCircuitGroupDoesNotExist(id) {
  return getCircuitGroup(id);
}

function tryToDeleteANonExistingCircuitGroup(id) {
  return deleteCircuitGroup(id);
}

function matchAddedCircuitGroup(id) {
  return bp.EventSet("matchAddedCircuitGroup", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyCircuitGroupAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add circuit group (.+)/)});
  var m = ev.data.parameters.description.match(/Add circuit group (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedCircuitGroup(id) {
  return bp.EventSet("matchDeletedCircuitGroup", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyCircuitGroupDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete circuit group (.+)/)});
  var m = ev.data.parameters.description.match(/Delete circuit group (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: circuittermination ----

function addCircuitTermination(id) {
  var url = "/circuits/circuit-terminations/";
  var description = "Add circuit termination " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCircuitTermination(id) {
  var url = "/circuits/circuit-terminations/" + id + "/";
  var description = "Delete circuit termination " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCircuitTermination(id) {
  var url = "/circuits/circuit-terminations/" + id + "/";
  var description = "Get circuit termination " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCircuitTermination(id) {
  var url = "/circuits/circuit-terminations/" + id + "/";
  var description = "Update circuit termination " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCircuitTermination(id) {
  return addCircuitTermination(id);
}

function verifyCircuitTerminationExists(id) {
  return getCircuitTermination(id);
}

function verifyCircuitTerminationDoesNotExist(id) {
  return getCircuitTermination(id);
}

function tryToDeleteANonExistingCircuitTermination(id) {
  return deleteCircuitTermination(id);
}

function matchAddedCircuitTermination(id) {
  return bp.EventSet("matchAddedCircuitTermination", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyCircuitTerminationAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add circuit termination (.+)/)});
  var m = ev.data.parameters.description.match(/Add circuit termination (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedCircuitTermination(id) {
  return bp.EventSet("matchDeletedCircuitTermination", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyCircuitTerminationDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete circuit termination (.+)/)});
  var m = ev.data.parameters.description.match(/Delete circuit termination (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
