//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && typeof e.data.parameters.description === "string" && re.test(e.data.parameters.description));
  });
}

function matchesDescription(str) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === str);
  });
}

function waitFor(eventSet) {
  return bp.sync({waitFor: eventSet});
}

function matchSuccess(desc) {
  return bp.EventSet("Success Event", function(e) {
    return e.name === "Done: " + desc;
  });
}

// ---- Entity: app ----

function createApp() {
  var url = "/apps";
  var description = "Create app";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getApps() {
  var url = "/apps";
  var description = "Get apps";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingApp() {
  var url = "/apps";
  var body = {
  };
  var description = "Verify that we cannot add another App...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyAppExists() {
  var url = "/apps";
  var description = "Verify App exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("App exists");
          }
        }
      }
      return pvg.fail("Expected App to exist but it does not");
    }
  });
}

function verifyAppDoesNotExist() {
  var url = "/apps";
  var description = "Verify App does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected App to not exist but it does");
          }
        }
      }
      return pvg.success("App does not exist");
    }
  });
}

function matchAddedApp() {
  var expectedDesc = "Create app";
  return matchSuccess(expectedDesc);
}

function waitForAnyAppAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ app$/));
  var m = ev.data.parameters.description.match(/^Create\ app$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAppAddedEvent(keyVal) {
  return bp.EventSet("AddApp:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAppAdded() {
  return bp.EventSet("matchAnyAppAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create app") > -1;
  });
}

function waitForAppAdded() {
  var expectedDesc = "Create app";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: env ----

function createEnv() {
  var url = "/envs";
  var description = "Create env";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getEnvs() {
  var url = "/envs";
  var description = "Get envs";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingEnv() {
  var url = "/envs";
  var body = {
  };
  var description = "Verify that we cannot add another Env...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyEnvExists() {
  var url = "/envs";
  var description = "Verify Env exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Env exists");
          }
        }
      }
      return pvg.fail("Expected Env to exist but it does not");
    }
  });
}

function verifyEnvDoesNotExist() {
  var url = "/envs";
  var description = "Verify Env does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Env to not exist but it does");
          }
        }
      }
      return pvg.success("Env does not exist");
    }
  });
}

function matchAddedEnv() {
  var expectedDesc = "Create env";
  return matchSuccess(expectedDesc);
}

function waitForAnyEnvAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ env$/));
  var m = ev.data.parameters.description.match(/^Create\ env$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getEnvAddedEvent(keyVal) {
  return bp.EventSet("AddEnv:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyEnvAdded() {
  return bp.EventSet("matchAnyEnvAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create env") > -1;
  });
}

function waitForEnvAdded() {
  var expectedDesc = "Create env";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: config ----

function createConfig() {
  var url = "/configs";
  var description = "Create config";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getConfigs() {
  var url = "/configs";
  var description = "Get configs";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingConfig() {
  var url = "/configs";
  var body = {
  };
  var description = "Verify that we cannot add another Config...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyConfigExists() {
  var url = "/configs";
  var description = "Verify Config exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Config exists");
          }
        }
      }
      return pvg.fail("Expected Config to exist but it does not");
    }
  });
}

function verifyConfigDoesNotExist() {
  var url = "/configs";
  var description = "Verify Config does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Config to not exist but it does");
          }
        }
      }
      return pvg.success("Config does not exist");
    }
  });
}

function matchAddedConfig() {
  var expectedDesc = "Create config";
  return matchSuccess(expectedDesc);
}

function waitForAnyConfigAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ config$/));
  var m = ev.data.parameters.description.match(/^Create\ config$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getConfigAddedEvent(keyVal) {
  return bp.EventSet("AddConfig:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyConfigAdded() {
  return bp.EventSet("matchAnyConfigAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create config") > -1;
  });
}

function waitForConfigAdded() {
  var expectedDesc = "Create config";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: release ----

function createRelease() {
  var url = "/releases";
  var description = "Create release";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getReleases() {
  var url = "/releases";
  var description = "Get releases";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingRelease() {
  var url = "/releases";
  var body = {
  };
  var description = "Verify that we cannot add another Release...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyReleaseExists() {
  var url = "/releases";
  var description = "Verify Release exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Release exists");
          }
        }
      }
      return pvg.fail("Expected Release to exist but it does not");
    }
  });
}

function verifyReleaseDoesNotExist() {
  var url = "/releases";
  var description = "Verify Release does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Release to not exist but it does");
          }
        }
      }
      return pvg.success("Release does not exist");
    }
  });
}

function matchAddedRelease() {
  var expectedDesc = "Create release";
  return matchSuccess(expectedDesc);
}

function waitForAnyReleaseAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ release$/));
  var m = ev.data.parameters.description.match(/^Create\ release$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getReleaseAddedEvent(keyVal) {
  return bp.EventSet("AddRelease:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyReleaseAdded() {
  return bp.EventSet("matchAnyReleaseAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create release") > -1;
  });
}

function waitForReleaseAdded() {
  var expectedDesc = "Create release";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: policy ----

function createPolicy() {
  var url = "/policies";
  var description = "Create policy";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getPolicies() {
  var url = "/policies";
  var description = "Get policies";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingPolicy() {
  var url = "/policies";
  var body = {
  };
  var description = "Verify that we cannot add another Policy...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPolicyExists() {
  var url = "/policies";
  var description = "Verify Policy exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Policy exists");
          }
        }
      }
      return pvg.fail("Expected Policy to exist but it does not");
    }
  });
}

function verifyPolicyDoesNotExist() {
  var url = "/policies";
  var description = "Verify Policy does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Policy to not exist but it does");
          }
        }
      }
      return pvg.success("Policy does not exist");
    }
  });
}

function matchAddedPolicy() {
  var expectedDesc = "Create policy";
  return matchSuccess(expectedDesc);
}

function waitForAnyPolicyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ policy$/));
  var m = ev.data.parameters.description.match(/^Create\ policy$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPolicyAddedEvent(keyVal) {
  return bp.EventSet("AddPolicy:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyPolicyAdded() {
  return bp.EventSet("matchAnyPolicyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create policy") > -1;
  });
}

function waitForPolicyAdded() {
  var expectedDesc = "Create policy";
  waitFor(matchSuccess(expectedDesc));
}
