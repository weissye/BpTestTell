//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("http://localhost:8080", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: app ----

function createApp() {
  var url = "/apps";
  var description = "Create app";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getApps() {
  var url = "/apps";
  var description = "Get apps";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingApp() {
  return createApp();
}

function verifyAppExists() {
  return getApps();
}

function verifyAppDoesNotExist() {
  return getApps();
}

// ---- Entity: env ----

function createEnv() {
  var url = "/envs";
  var description = "Create env";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getEnvs() {
  var url = "/envs";
  var description = "Get envs";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingEnv() {
  return createEnv();
}

function verifyEnvExists() {
  return getEnvs();
}

function verifyEnvDoesNotExist() {
  return getEnvs();
}

// ---- Entity: config ----

function createConfig() {
  var url = "/configs";
  var description = "Create config";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getConfigs() {
  var url = "/configs";
  var description = "Get configs";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingConfig() {
  return createConfig();
}

function verifyConfigExists() {
  return getConfigs();
}

function verifyConfigDoesNotExist() {
  return getConfigs();
}

// ---- Entity: release ----

function createRelease() {
  var url = "/releases";
  var description = "Create release";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getReleases() {
  var url = "/releases";
  var description = "Get releases";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRelease() {
  return createRelease();
}

function verifyReleaseExists() {
  return getReleases();
}

function verifyReleaseDoesNotExist() {
  return getReleases();
}

// ---- Entity: policy ----

function createPolicy() {
  var url = "/policies";
  var description = "Create policy";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPolicies() {
  var url = "/policies";
  var description = "Get policies";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPolicy() {
  return createPolicy();
}

function verifyPolicyExists() {
  return getPolicies();
}

function verifyPolicyDoesNotExist() {
  return getPolicies();
}
