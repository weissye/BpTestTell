//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: app ----

function addApp(appId) {
  var url = "/apps";
  var description = "Add app " + appId;
  var body = {
    "id": appId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getApp(appId) {
  var url = "/apps";
  var description = "Get app " + appId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingApp(appId) {
  return addApp(appId);
}

function verifyAppExists(appId) {
  return getApp(appId);
}

function verifyAppDoesNotExist(appId) {
  return getApp(appId);
}

function matchAddedApp(appId) {
  return bp.EventSet("matchAddedApp", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(appId);
  });
}

function waitForAnyAppAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add app (.+)/)});
  var m = ev.data.parameters.description.match(/Add app (.+)/);
  var captures = m.slice(1);
  var names = ["appId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: env ----

function addEnv(envId) {
  var url = "/envs";
  var description = "Add env " + envId;
  var body = {
    "id": envId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getEnv(envId) {
  var url = "/envs";
  var description = "Get env " + envId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingEnv(envId) {
  return addEnv(envId);
}

function verifyEnvExists(envId) {
  return getEnv(envId);
}

function verifyEnvDoesNotExist(envId) {
  return getEnv(envId);
}

function matchAddedEnv(envId) {
  return bp.EventSet("matchAddedEnv", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(envId);
  });
}

function waitForAnyEnvAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add env (.+)/)});
  var m = ev.data.parameters.description.match(/Add env (.+)/);
  var captures = m.slice(1);
  var names = ["envId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: config ----

function addConfig(configId) {
  var url = "/configs";
  var description = "Add config " + configId;
  var body = {
    "id": configId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getConfig(configId) {
  var url = "/configs";
  var description = "Get config " + configId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingConfig(configId) {
  return addConfig(configId);
}

function verifyConfigExists(configId) {
  return getConfig(configId);
}

function verifyConfigDoesNotExist(configId) {
  return getConfig(configId);
}

function matchAddedConfig(configId) {
  return bp.EventSet("matchAddedConfig", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(configId);
  });
}

function waitForAnyConfigAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add config (.+)/)});
  var m = ev.data.parameters.description.match(/Add config (.+)/);
  var captures = m.slice(1);
  var names = ["configId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: release ----

function addRelease(releaseId) {
  var url = "/releases";
  var description = "Add release " + releaseId;
  var body = {
    "id": releaseId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRelease(releaseId) {
  var url = "/releases";
  var description = "Get release " + releaseId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRelease(releaseId) {
  return addRelease(releaseId);
}

function verifyReleaseExists(releaseId) {
  return getRelease(releaseId);
}

function verifyReleaseDoesNotExist(releaseId) {
  return getRelease(releaseId);
}

function matchAddedRelease(releaseId) {
  return bp.EventSet("matchAddedRelease", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(releaseId);
  });
}

function waitForAnyReleaseAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add release (.+)/)});
  var m = ev.data.parameters.description.match(/Add release (.+)/);
  var captures = m.slice(1);
  var names = ["releaseId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: policy ----

function addPolicy(policyId) {
  var url = "/policies";
  var description = "Add policy " + policyId;
  var body = {
    "id": policyId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPolicy(policyId) {
  var url = "/policies";
  var description = "Get policy " + policyId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPolicy(policyId) {
  return addPolicy(policyId);
}

function verifyPolicyExists(policyId) {
  return getPolicy(policyId);
}

function verifyPolicyDoesNotExist(policyId) {
  return getPolicy(policyId);
}

function matchAddedPolicy(policyId) {
  return bp.EventSet("matchAddedPolicy", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(policyId);
  });
}

function waitForAnyPolicyAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add policy (.+)/)});
  var m = ev.data.parameters.description.match(/Add policy (.+)/);
  var captures = m.slice(1);
  var names = ["policyId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
