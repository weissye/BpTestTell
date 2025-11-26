//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("https://api.github.com", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: users ----

function getUser(username) {
  var url = "/users/" + username;
  var description = "Get user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyusersExists(username) {
  return getUser(username);
}

function verifyusersDoesNotExist(username) {
  return getUser(username);
}

// ---- Entity: webhooks ----

function getWebhookConfigForApp() {
  var url = "/app/hook/config";
  var description = "Get webhook config for app";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhookConfigForApp(url) {
  var url = "/app/hook/config";
  var description = "Update webhook config for app with url " + url;
  var body = {
    "url": url,
    "content_type": content_type,
    "secret": secret,
    "insecure_ssl": insecure_ssl,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifywebhooksExists() {
  return getWebhookConfigForApp();
}

function verifywebhooksDoesNotExist() {
  return getWebhookConfigForApp();
}

// ---- Entity: apps ----

function addAppFromManifest(code) {
  var url = "/app-manifests/" + code + "/conversions";
  var description = "Add app from manifest " + code;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAuthenticatedApp() {
  var url = "/app";
  var description = "Get authenticated app";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAppInstallation(installation_id) {
  var url = "/app/installations/" + installation_id;
  var description = "Get app installation " + installation_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAppInstallation(installation_id) {
  var url = "/app/installations/" + installation_id;
  var description = "Delete app installation " + installation_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createInstallationAccessToken(installation_id) {
  var url = "/app/installations/" + installation_id + "/access_tokens";
  var description = "Create installation access token for installation " + installation_id;
  var body = {
    "repositories": repositories,
    "repository_ids": repository_ids,
    "permissions": permissions,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function suspendAppInstallation(installation_id) {
  var url = "/app/installations/" + installation_id + "/suspended";
  var description = "Suspend app installation " + installation_id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function unsuspendAppInstallation(installation_id) {
  var url = "/app/installations/" + installation_id + "/suspended";
  var description = "Unsuspend app installation " + installation_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAppBySlug(app_slug) {
  var url = "/apps/" + app_slug;
  var description = "Get app by slug " + app_slug;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingapps(code) {
  return addAppFromManifest(code);
}

function verifyappsExists() {
  return getAuthenticatedApp();
}

function verifyappsDoesNotExist() {
  return getAuthenticatedApp();
}

function matchAddedapps(code) {
  return bp.EventSet("matchAddedapps", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(code);
  });
}

function waitForAnyappsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add app from manifest (.+)/)});
  var m = ev.data.parameters.description.match(/Add app from manifest (.+)/);
  var captures = m.slice(1);
  var names = ["code"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedapps(code) {
  return bp.EventSet("matchDeletedapps", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(code);
  });
}

function waitForAnyappsDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete app installation (.+)/)});
  var m = ev.data.parameters.description.match(/Delete app installation (.+)/);
  var captures = m.slice(1);
  var names = ["code"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: enterprise-teams ----

function addEnterpriseTeam(enterprise) {
  var url = "/enterprises/" + enterprise + "/teams";
  var description = "Add enterprise team in " + enterprise;
  var body = {
    "name": name,
    "description": description,
    "sync_to_organizations": sync_to_organizations,
    "group_id": group_id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getEnterpriseTeam(enterprise, team_slug) {
  var url = "/enterprises/" + enterprise + "/teams/" + team_slug;
  var description = "Get enterprise team " + team_slug + " in " + enterprise;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateEnterpriseTeam(enterprise, team_slug) {
  var url = "/enterprises/" + enterprise + "/teams/" + team_slug;
  var description = "Update enterprise team " + team_slug + " in " + enterprise;
  var body = {
    "name": name,
    "description": description,
    "sync_to_organizations": sync_to_organizations,
    "group_id": group_id,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteEnterpriseTeam(enterprise, team_slug) {
  var url = "/enterprises/" + enterprise + "/teams/" + team_slug;
  var description = "Delete enterprise team " + team_slug + " in " + enterprise;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listEnterpriseTeams(enterprise) {
  var url = "/enterprises/" + enterprise + "/teams";
  var description = "List enterprise teams in " + enterprise;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingenterprise-teams(enterprise) {
  return addEnterpriseTeam(enterprise);
}

function verifyenterprise-teamsExists(enterprise, team_slug) {
  return getEnterpriseTeam(enterprise, team_slug);
}

function verifyenterprise-teamsDoesNotExist(enterprise, team_slug) {
  return getEnterpriseTeam(enterprise, team_slug);
}

function tryToDeleteANonExistingenterprise-teams(enterprise, team_slug) {
  return deleteEnterpriseTeam(enterprise, team_slug);
}

function matchAddedenterprise-teams(enterprise) {
  return bp.EventSet("matchAddedenterprise-teams", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(enterprise);
  });
}

function waitForAnyenterprise-teamsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add enterprise team in (.+)/)});
  var m = ev.data.parameters.description.match(/Add enterprise team in (.+)/);
  var captures = m.slice(1);
  var names = ["enterprise"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedenterprise-teams(enterprise) {
  return bp.EventSet("matchDeletedenterprise-teams", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(enterprise);
  });
}

function waitForAnyenterprise-teamsDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete enterprise team (.+) in (.+)/)});
  var m = ev.data.parameters.description.match(/Delete enterprise team (.+) in (.+)/);
  var captures = m.slice(1);
  var names = ["enterprise"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: enterprise-team-memberships ----

function listEnterpriseTeamMembers(enterprise, enterprise-team) {
  var url = "/enterprises/" + enterprise + "/teams/" + enterprise-team + "/memberships";
  var description = "List members in enterprise team " + enterprise-team + " in " + enterprise;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkAddEnterpriseTeamMembers(enterprise, enterprise-team) {
  var url = "/enterprises/" + enterprise + "/teams/" + enterprise-team + "/memberships/add";
  var description = "Bulk add members to enterprise team " + enterprise-team + " in " + enterprise;
  var body = {
    "usernames": usernames,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkRemoveEnterpriseTeamMembers(enterprise, enterprise-team) {
  var url = "/enterprises/" + enterprise + "/teams/" + enterprise-team + "/memberships/remove";
  var description = "Bulk remove members from enterprise team " + enterprise-team + " in " + enterprise;
  var body = {
    "usernames": usernames,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getEnterpriseTeamMembership(enterprise, enterprise-team, username) {
  var url = "/enterprises/" + enterprise + "/teams/" + enterprise-team + "/memberships/" + username;
  var description = "Get membership of user " + username + " in enterprise team " + enterprise-team + " in " + enterprise;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addEnterpriseTeamMember(enterprise, enterprise-team, username) {
  var url = "/enterprises/" + enterprise + "/teams/" + enterprise-team + "/memberships/" + username;
  var description = "Add user " + username + " to enterprise team " + enterprise-team + " in " + enterprise;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeEnterpriseTeamMembership(enterprise, enterprise-team, username) {
  var url = "/enterprises/" + enterprise + "/teams/" + enterprise-team + "/memberships/" + username;
  var description = "Remove user " + username + " from enterprise team " + enterprise-team + " in " + enterprise;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingenterprise-team-memberships(enterprise, enterprise-team, username) {
  return addEnterpriseTeamMember(enterprise, enterprise-team, username);
}

function verifyenterprise-team-membershipsExists(enterprise, enterprise-team, username) {
  return getEnterpriseTeamMembership(enterprise, enterprise-team, username);
}

function verifyenterprise-team-membershipsDoesNotExist(enterprise, enterprise-team, username) {
  return getEnterpriseTeamMembership(enterprise, enterprise-team, username);
}

function matchAddedenterprise-team-memberships(enterprise, enterprise-team, username) {
  return bp.EventSet("matchAddedenterprise-team-memberships", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(enterprise);
  });
}

function waitForAnyenterprise-team-membershipsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add user (.+) to enterprise team (.+) in (.+)/)});
  var m = ev.data.parameters.description.match(/Add user (.+) to enterprise team (.+) in (.+)/);
  var captures = m.slice(1);
  var names = ["enterprise", "enterprise-team", "username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: activity ----

function listPublicEvents() {
  var url = "/events";
  var description = "List public events";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFeeds() {
  var url = "/feeds";
  var description = "Get feeds";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyactivityExists() {
  return listPublicEvents();
}

function verifyactivityDoesNotExist() {
  return listPublicEvents();
}
