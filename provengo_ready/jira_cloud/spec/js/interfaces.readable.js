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

// ---- Entity: issue ----

function createIssue(updateHistory) {
  var url = "/rest/api/3/issue";
  var description = "Create issue with summary {summary} in project {project.id}";
  var body = {
    "fields": {
      "assignee": {
        "id": assignee.id,
      },
      "components": [{'id': '{components.id}'}],
      "customfield_10000": customfield_10000,
      "customfield_20000": customfield_20000,
      "customfield_30000": customfield_30000,
      "customfield_40000": customfield_40000,
      "customfield_50000": customfield_50000,
      "customfield_60000": customfield_60000,
      "customfield_70000": customfield_70000,
      "customfield_80000": customfield_80000,
      "description": description,
      "duedate": duedate,
      "environment": environment,
      "fixVersions": [{'id': '{fixVersions.id}'}],
      "issuetype": {
        "id": issuetype.id,
      },
      "labels": labels,
      "parent": {
        "key": parent.key,
      },
      "priority": {
        "id": priority.id,
      },
      "project": {
        "id": project.id,
      },
      "reporter": {
        "id": reporter.id,
      },
      "security": {
        "id": security.id,
      },
      "summary": summary,
      "timetracking": {
        "originalEstimate": timetracking.originalEstimate,
        "remainingEstimate": timetracking.remainingEstimate,
      },
      "versions": [{'id': '{versions.id}'}],
    },
    "update": undefined,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createIssues() {
  var url = "/rest/api/3/issue/bulk";
  var description = "Bulk create issues";
  var body = {
    "issueUpdates": [{'fields': {'assignee': {'id': '{assignee.id}'}, 'components': [{'id': '{components.id}'}], 'customfield_10000': '{customfield_10000}', 'customfield_20000': '{customfield_20000}', 'customfield_30000': '{customfield_30000}', 'customfield_40000': '{customfield_40000}', 'customfield_50000': '{customfield_50000}', 'customfield_60000': '{customfield_60000}', 'customfield_70000': '{customfield_70000}', 'customfield_80000': '{customfield_80000}', 'description': '{description}', 'duedate': '{duedate}', 'environment': '{environment}', 'fixVersions': [{'id': '{fixVersions.id}'}], 'issuetype': {'id': '{issuetype.id}'}, 'labels': '{labels}', 'priority': {'id': '{priority.id}'}, 'project': {'id': '{project.id}'}, 'reporter': {'id': '{reporter.id}'}, 'security': {'id': '{security.id}'}, 'summary': '{summary}', 'timetracking': {'originalEstimate': '{timetracking.originalEstimate}', 'remainingEstimate': '{timetracking.remainingEstimate}'}, 'versions': [{'id': '{versions.id}'}]}, 'update': {}}],
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIssue(issueIdOrKey, fields, fieldsByKeys, expand, properties, updateHistory, failFast) {
  var url = "/rest/api/3/issue/" + issueIdOrKey;
  var description = "Get issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function editIssue(issueIdOrKey, notifyUsers, overrideScreenSecurity, overrideEditableFlag, returnIssue, expand) {
  var url = "/rest/api/3/issue/" + issueIdOrKey;
  var description = "Edit issue " + issueIdOrKey + " with summary {fields.summary}";
  var body = {
    "fields": fields,
    "historyMetadata": historyMetadata,
    "properties": properties,
    "update": update,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIssue(issueIdOrKey, deleteSubtasks) {
  var url = "/rest/api/3/issue/" + issueIdOrKey;
  var description = "Delete issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function assignIssue(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/assignee";
  var description = "Assign issue " + issueIdOrKey + " to accountId {accountId}";
  var body = {
    "accountId": accountId,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getChangeLogs(issueIdOrKey, startAt, maxResults) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/changelog";
  var description = "Get changelogs for issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getChangeLogsByIds(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/changelog/list";
  var description = "Get changelogs by IDs for issue " + issueIdOrKey;
  var body = {
    "changelogIds": changelogIds,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getEditIssueMeta(issueIdOrKey, overrideScreenSecurity, overrideEditableFlag) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/editmeta";
  var description = "Get edit metadata for issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function notify(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/notify";
  var description = "Send notification for issue " + issueIdOrKey + " with subject {subject}";
  var body = {
    "htmlBody": htmlBody,
    "restrict": restrict,
    "subject": subject,
    "textBody": textBody,
    "to": to,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTransitions(issueIdOrKey, expand, transitionId, skipRemoteOnlyCondition, includeUnavailableTransitions, sortByOpsBarAndStatus) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/transitions";
  var description = "Get transitions for issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function doTransition(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/transitions";
  var description = "Transition issue " + issueIdOrKey + " with transition id {transition.id}";
  var body = {
    "fields": fields,
    "historyMetadata": historyMetadata,
    "transition": {
      "id": transition.id,
    },
    "update": update,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function archiveIssuesAsync() {
  var url = "/rest/api/3/issue/archive";
  var description = "Archive issues by JQL {jql}";
  var body = {
    "jql": jql,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function archiveIssues() {
  var url = "/rest/api/3/issue/archive";
  var description = "Archive issues by IDs or keys {issueIdsOrKeys}";
  var body = {
    "issueIdsOrKeys": issueIdsOrKeys,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function unarchiveIssues() {
  var url = "/rest/api/3/issue/unarchive";
  var description = "Unarchive issues by IDs or keys {issueIdsOrKeys}";
  var body = {
    "issueIdsOrKeys": issueIdsOrKeys,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssue(updateHistory, issueIdOrKey, fields, fieldsByKeys, expand, properties, failFast, notifyUsers, overrideScreenSecurity, overrideEditableFlag, returnIssue, deleteSubtasks, startAt, maxResults, transitionId, skipRemoteOnlyCondition, includeUnavailableTransitions, sortByOpsBarAndStatus) {
  return createIssue(updateHistory);
}

function verifyIssueExists(updateHistory, issueIdOrKey, fields, fieldsByKeys, expand, properties, failFast, notifyUsers, overrideScreenSecurity, overrideEditableFlag, returnIssue, deleteSubtasks, startAt, maxResults, transitionId, skipRemoteOnlyCondition, includeUnavailableTransitions, sortByOpsBarAndStatus) {
  return getIssue(issueIdOrKey, fields, fieldsByKeys, expand, properties, updateHistory, failFast);
}

function verifyIssueDoesNotExist(updateHistory, issueIdOrKey, fields, fieldsByKeys, expand, properties, failFast, notifyUsers, overrideScreenSecurity, overrideEditableFlag, returnIssue, deleteSubtasks, startAt, maxResults, transitionId, skipRemoteOnlyCondition, includeUnavailableTransitions, sortByOpsBarAndStatus) {
  return getIssue(issueIdOrKey, fields, fieldsByKeys, expand, properties, updateHistory, failFast);
}

function tryToDeleteANonExistingIssue(updateHistory, issueIdOrKey, fields, fieldsByKeys, expand, properties, failFast, notifyUsers, overrideScreenSecurity, overrideEditableFlag, returnIssue, deleteSubtasks, startAt, maxResults, transitionId, skipRemoteOnlyCondition, includeUnavailableTransitions, sortByOpsBarAndStatus) {
  return deleteIssue(issueIdOrKey, deleteSubtasks);
}

// ---- Entity: workflow ----

function createWorkflow(name) {
  var url = "/rest/api/3/workflow";
  var description = "Create workflow " + name + " with id {id}";
  var body = {
    "name": name,
    "description": description,
    "statuses": statuses,
    "transitions": transitions,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteInactiveWorkflow(entityId) {
  var url = "/rest/api/3/workflow/" + entityId;
  var description = "Delete inactive workflow with id " + entityId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWorkflows() {
  var url = "/rest/api/3/workflows/update";
  var description = "Bulk update workflows with ids {id}";
  var body = {
    "workflows": workflows,
    "statuses": statuses,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAllWorkflows(workflowName) {
  var url = "/rest/api/3/workflow";
  var description = "Get all workflows filtered by name " + workflowName;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWorkflow(name, entityId, workflowName) {
  return createWorkflow(name);
}

function verifyWorkflowExists(name, entityId, workflowName) {
  return getAllWorkflows(workflowName);
}

function verifyWorkflowDoesNotExist(name, entityId, workflowName) {
  return getAllWorkflows(workflowName);
}

function tryToDeleteANonExistingWorkflow(name, entityId, workflowName) {
  return deleteInactiveWorkflow(entityId);
}

// ---- Entity: issue security scheme ----

function createIssueSecurityScheme(id, name) {
  var url = "/rest/api/3/issuesecurityschemes";
  var description = "Create issue security scheme " + name + " with id " + id;
  var body = {
    "name": name,
    "description": description,
    "levels": levels,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIssueSecurityScheme(id) {
  var url = "/rest/api/3/issuesecurityschemes/" + id;
  var description = "Get issue security scheme with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIssueSecurityScheme(id, name) {
  var url = "/rest/api/3/issuesecurityschemes/" + id;
  var description = "Update issue security scheme " + id + " with name " + name;
  var body = {
    "name": name,
    "description": description,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteSecurityScheme(schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId;
  var description = "Delete issue security scheme with id " + schemeId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueSecurityScheme(id, name, schemeId) {
  return createIssueSecurityScheme(id, name);
}

function verifyIssueSecuritySchemeExists(id, name, schemeId) {
  return getIssueSecurityScheme(id);
}

function verifyIssueSecuritySchemeDoesNotExist(id, name, schemeId) {
  return getIssueSecurityScheme(id);
}

function tryToDeleteANonExistingIssueSecurityScheme(id, name, schemeId) {
  return deleteSecurityScheme(schemeId);
}

// ---- Entity: issue security level ----

function addSecurityLevel(schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level";
  var description = "Add issue security levels to scheme " + schemeId;
  var body = {
    "levels": levels,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getSecurityLevels() {
  var url = "/rest/api/3/issuesecurityschemes/level";
  var description = "Get issue security levels";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSecurityLevel(schemeId, levelId, name) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level/" + levelId;
  var description = "Update issue security level " + levelId + " in scheme " + schemeId + " with name " + name;
  var body = {
    "name": name,
    "description": description,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeLevel(schemeId, levelId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level/" + levelId;
  var description = "Remove issue security level " + levelId + " from scheme " + schemeId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueSecurityLevel(schemeId, levelId, name) {
  return addSecurityLevel(schemeId);
}

function verifyIssueSecurityLevelExists(schemeId, levelId, name) {
  return getSecurityLevels();
}

function verifyIssueSecurityLevelDoesNotExist(schemeId, levelId, name) {
  return getSecurityLevels();
}

function tryToDeleteANonExistingIssueSecurityLevel(schemeId, levelId, name) {
  return removeLevel(schemeId, levelId);
}

// ---- Entity: issue security level member ----

function addSecurityLevelMembers(schemeId, levelId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level/" + levelId + "/member";
  var description = "Add members to issue security level " + levelId + " in scheme " + schemeId;
  var body = {
    "members": members,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getSecurityLevelMembers() {
  var url = "/rest/api/3/issuesecurityschemes/level/member";
  var description = "Get issue security level members";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeMemberFromSecurityLevel(schemeId, levelId, memberId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level/" + levelId + "/member/" + memberId;
  var description = "Remove member " + memberId + " from issue security level " + levelId + " in scheme " + schemeId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueSecurityLevelMember(schemeId, levelId, memberId) {
  return addSecurityLevelMembers(schemeId, levelId);
}

function verifyIssueSecurityLevelMemberExists(schemeId, levelId, memberId) {
  return getSecurityLevelMembers();
}

function verifyIssueSecurityLevelMemberDoesNotExist(schemeId, levelId, memberId) {
  return getSecurityLevelMembers();
}

function tryToDeleteANonExistingIssueSecurityLevelMember(schemeId, levelId, memberId) {
  return removeMemberFromSecurityLevel(schemeId, levelId, memberId);
}

// ---- Entity: issue security scheme project association ----

function searchProjectsUsingSecuritySchemes() {
  var url = "/rest/api/3/issuesecurityschemes/project";
  var description = "Get projects using issue security schemes";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function associateSchemesToProjects(projectId, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/project";
  var description = "Associate security scheme " + schemeId + " to project " + projectId;
  var body = {
    "projectId": projectId,
    "schemeId": schemeId,
    "oldToNewSecurityLevelMappings": oldToNewSecurityLevelMappings,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIssueSecuritySchemeProjectAssociationExists(projectId, schemeId) {
  return searchProjectsUsingSecuritySchemes();
}

function verifyIssueSecuritySchemeProjectAssociationDoesNotExist(projectId, schemeId) {
  return searchProjectsUsingSecuritySchemes();
}

// ---- Entity: issue security level default ----

function setDefaultLevels() {
  var url = "/rest/api/3/issuesecurityschemes/level/default";
  var description = "Set default issue security levels";
  var body = {
    "defaultValues": defaultValues,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: version ----

function createVersion() {
  var url = "/rest/api/3/version";
  var description = "Create version {name} with projectId {projectId}";
  var body = {
    "archived": archived,
    "description": description,
    "name": name,
    "projectId": projectId,
    "releaseDate": releaseDate,
    "released": released,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteVersion(id) {
  var url = "/rest/api/3/version/" + id;
  var description = "Delete version with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateVersion(id) {
  var url = "/rest/api/3/version/" + id;
  var description = "Update version {name} with id " + id;
  var body = {
    "archived": archived,
    "description": description,
    "id": id,
    "name": name,
    "overdue": overdue,
    "projectId": projectId,
    "releaseDate": releaseDate,
    "released": released,
    "self": self,
    "userReleaseDate": userReleaseDate,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getVersion(id) {
  var url = "/rest/api/3/version/" + id;
  var description = "Get version with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVersion(id) {
  return createVersion();
}

function verifyVersionExists(id) {
  return getVersion(id);
}

function verifyVersionDoesNotExist(id) {
  return getVersion(id);
}

function tryToDeleteANonExistingVersion(id) {
  return deleteVersion(id);
}

// ---- Entity: version related work ----

function createRelatedWork(id) {
  var url = "/rest/api/3/version/" + id + "/relatedwork";
  var description = "Create related work {title} for version " + id;
  var body = {
    "category": category,
    "title": title,
    "url": url,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRelatedWork(versionId, relatedWorkId) {
  var url = "/rest/api/3/version/" + versionId + "/relatedwork/" + relatedWorkId;
  var description = "Delete related work " + relatedWorkId + " from version " + versionId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRelatedWork(id) {
  var url = "/rest/api/3/version/" + id + "/relatedwork";
  var description = "Update related work {relatedWorkId} for version " + id;
  var body = {
    "category": category,
    "relatedWorkId": relatedWorkId,
    "title": title,
    "url": url,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRelatedWork(id) {
  var url = "/rest/api/3/version/" + id + "/relatedwork";
  var description = "Get related work for version " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVersionRelatedWork(id, versionId, relatedWorkId) {
  return createRelatedWork(id);
}

function verifyVersionRelatedWorkExists(id, versionId, relatedWorkId) {
  return getRelatedWork(id);
}

function verifyVersionRelatedWorkDoesNotExist(id, versionId, relatedWorkId) {
  return getRelatedWork(id);
}

function tryToDeleteANonExistingVersionRelatedWork(id, versionId, relatedWorkId) {
  return deleteRelatedWork(versionId, relatedWorkId);
}

// ---- Entity: dashboard ----

function createDashboard(extendAdminPermissions) {
  var url = "/rest/api/3/dashboard";
  var description = "Create dashboard {name}";
  var body = {
    "description": description,
    "editPermissions": editPermissions,
    "name": name,
    "sharePermissions": sharePermissions,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDashboard(id) {
  var url = "/rest/api/3/dashboard/" + id;
  var description = "Delete dashboard " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDashboard(id, extendAdminPermissions) {
  var url = "/rest/api/3/dashboard/" + id;
  var description = "Update dashboard " + id + " with name {name}";
  var body = {
    "description": description,
    "editPermissions": editPermissions,
    "name": name,
    "sharePermissions": sharePermissions,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDashboard(id) {
  var url = "/rest/api/3/dashboard/" + id;
  var description = "Get dashboard " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDashboard(extendAdminPermissions, id) {
  return createDashboard(extendAdminPermissions);
}

function verifyDashboardExists(extendAdminPermissions, id) {
  return getDashboard(id);
}

function verifyDashboardDoesNotExist(extendAdminPermissions, id) {
  return getDashboard(id);
}

function tryToDeleteANonExistingDashboard(extendAdminPermissions, id) {
  return deleteDashboard(id);
}

// ---- Entity: dashboard gadget ----

function addGadget(dashboardId) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/gadget";
  var description = "Add gadget {title} to dashboard " + dashboardId;
  var body = {
    "color": color,
    "ignoreUriAndModuleKeyValidation": ignoreUriAndModuleKeyValidation,
    "moduleKey": moduleKey,
    "position": position,
    "title": title,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeGadget(dashboardId, gadgetId) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/gadget/" + gadgetId;
  var description = "Remove gadget " + gadgetId + " from dashboard " + dashboardId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateGadget(dashboardId, gadgetId) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/gadget/" + gadgetId;
  var description = "Update gadget " + gadgetId + " on dashboard " + dashboardId + " with title {title}";
  var body = {
    "color": color,
    "position": position,
    "title": title,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAllGadgets(dashboardId, moduleKey, uri, gadgetId) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/gadget";
  var description = "Get gadgets for dashboard " + dashboardId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDashboardGadget(dashboardId, gadgetId, moduleKey, uri) {
  return addGadget(dashboardId);
}

function verifyDashboardGadgetExists(dashboardId, gadgetId, moduleKey, uri) {
  return getAllGadgets(dashboardId, moduleKey, uri, gadgetId);
}

function verifyDashboardGadgetDoesNotExist(dashboardId, gadgetId, moduleKey, uri) {
  return getAllGadgets(dashboardId, moduleKey, uri, gadgetId);
}

function tryToDeleteANonExistingDashboardGadget(dashboardId, gadgetId, moduleKey, uri) {
  return removeGadget(dashboardId, gadgetId);
}

// ---- Entity: dashboard item property ----

function getDashboardItemProperty(dashboardId, itemId, propertyKey) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/items/" + itemId + "/properties/" + propertyKey;
  var description = "Get property " + propertyKey + " of dashboard item " + itemId + " in dashboard " + dashboardId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDashboardItemProperty(dashboardId, itemId, propertyKey) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/items/" + itemId + "/properties/" + propertyKey;
  var description = "Delete property " + propertyKey + " of dashboard item " + itemId + " in dashboard " + dashboardId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setDashboardItemProperty(dashboardId, itemId, propertyKey) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/items/" + itemId + "/properties/" + propertyKey;
  var description = "Set property " + propertyKey + " of dashboard item " + itemId + " in dashboard " + dashboardId;
  var body = {
    "value": value,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDashboardItemPropertyExists(dashboardId, itemId, propertyKey) {
  return getDashboardItemProperty(dashboardId, itemId, propertyKey);
}

function verifyDashboardItemPropertyDoesNotExist(dashboardId, itemId, propertyKey) {
  return getDashboardItemProperty(dashboardId, itemId, propertyKey);
}

function tryToDeleteANonExistingDashboardItemProperty(dashboardId, itemId, propertyKey) {
  return deleteDashboardItemProperty(dashboardId, itemId, propertyKey);
}

// ---- Entity: custom field context ----

function createCustomFieldContext(fieldId) {
  var url = "/rest/api/3/field/" + fieldId + "/context";
  var description = "Create custom field context {name} for field " + fieldId;
  var body = {
    "description": description,
    "issueTypeIds": issueTypeIds,
    "name": name,
    "projectIds": projectIds,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCustomFieldContext(fieldId, contextId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId;
  var description = "Delete custom field context " + contextId + " for field " + fieldId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCustomFieldContext(fieldId, contextId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId;
  var description = "Update custom field context " + contextId + " for field " + fieldId + " with name {name}";
  var body = {
    "description": description,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getContextsForField(fieldId, isAnyIssueType, isGlobalContext, contextId, startAt, maxResults) {
  var url = "/rest/api/3/field/" + fieldId + "/context";
  var description = "Get custom field contexts for field " + fieldId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomFieldContext(fieldId, contextId, isAnyIssueType, isGlobalContext, startAt, maxResults) {
  return createCustomFieldContext(fieldId);
}

function verifyCustomFieldContextExists(fieldId, contextId, isAnyIssueType, isGlobalContext, startAt, maxResults) {
  return getContextsForField(fieldId, isAnyIssueType, isGlobalContext, contextId, startAt, maxResults);
}

function verifyCustomFieldContextDoesNotExist(fieldId, contextId, isAnyIssueType, isGlobalContext, startAt, maxResults) {
  return getContextsForField(fieldId, isAnyIssueType, isGlobalContext, contextId, startAt, maxResults);
}

function tryToDeleteANonExistingCustomFieldContext(fieldId, contextId, isAnyIssueType, isGlobalContext, startAt, maxResults) {
  return deleteCustomFieldContext(fieldId, contextId);
}

// ---- Entity: custom field context default value ----

function getDefaultValues(fieldId, contextId, startAt, maxResults) {
  var url = "/rest/api/3/field/" + fieldId + "/context/defaultValue";
  var description = "Get default values for custom field " + fieldId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setDefaultValues(fieldId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/defaultValue";
  var description = "Set default values for custom field " + fieldId;
  var body = {
    "defaultValues": defaultValues,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCustomFieldContextDefaultValueExists(fieldId, contextId, startAt, maxResults) {
  return getDefaultValues(fieldId, contextId, startAt, maxResults);
}

function verifyCustomFieldContextDefaultValueDoesNotExist(fieldId, contextId, startAt, maxResults) {
  return getDefaultValues(fieldId, contextId, startAt, maxResults);
}

// ---- Entity: custom field context issue type mapping ----

function getIssueTypeMappingsForContexts(fieldId, contextId, startAt, maxResults) {
  var url = "/rest/api/3/field/" + fieldId + "/context/issuetypemapping";
  var description = "Get issue type mappings for custom field " + fieldId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCustomFieldContextIssueTypeMappingExists(fieldId, contextId, startAt, maxResults) {
  return getIssueTypeMappingsForContexts(fieldId, contextId, startAt, maxResults);
}

function verifyCustomFieldContextIssueTypeMappingDoesNotExist(fieldId, contextId, startAt, maxResults) {
  return getIssueTypeMappingsForContexts(fieldId, contextId, startAt, maxResults);
}

// ---- Entity: custom field context project issue type mapping ----

function getCustomFieldContextsForProjectsAndIssueTypes(fieldId, startAt, maxResults) {
  var url = "/rest/api/3/field/" + fieldId + "/context/mapping";
  var description = "Get custom field contexts for projects and issue types for field " + fieldId;
  var body = {
    "mappings": mappings,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomFieldContextProjectIssueTypeMapping(fieldId, startAt, maxResults) {
  return getCustomFieldContextsForProjectsAndIssueTypes(fieldId, startAt, maxResults);
}

// ---- Entity: custom field context project mapping ----

function getProjectContextMapping(fieldId, contextId, startAt, maxResults) {
  var url = "/rest/api/3/field/" + fieldId + "/context/projectmapping";
  var description = "Get project mappings for custom field " + fieldId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCustomFieldContextProjectMappingExists(fieldId, contextId, startAt, maxResults) {
  return getProjectContextMapping(fieldId, contextId, startAt, maxResults);
}

function verifyCustomFieldContextProjectMappingDoesNotExist(fieldId, contextId, startAt, maxResults) {
  return getProjectContextMapping(fieldId, contextId, startAt, maxResults);
}

// ---- Entity: custom field context issue type ----

function addIssueTypesToContext(fieldId, contextId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/issuetype";
  var description = "Add issue types to context " + contextId + " for field " + fieldId;
  var body = {
    "issueTypeIds": issueTypeIds,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeIssueTypesFromContext(fieldId, contextId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/issuetype/remove";
  var description = "Remove issue types from context " + contextId + " for field " + fieldId;
  var body = {
    "issueTypeIds": issueTypeIds,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomFieldContextIssueType(fieldId, contextId) {
  return addIssueTypesToContext(fieldId, contextId);
}

function tryToDeleteANonExistingCustomFieldContextIssueType(fieldId, contextId) {
  return removeIssueTypesFromContext(fieldId, contextId);
}

// ---- Entity: custom field context project ----

function assignProjectsToCustomFieldContext(fieldId, contextId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/project";
  var description = "Assign projects to custom field context " + contextId + " for field " + fieldId;
  var body = {
    "projectIds": projectIds,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeCustomFieldContextFromProjects(fieldId, contextId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/project/remove";
  var description = "Remove projects from custom field context " + contextId + " for field " + fieldId;
  var body = {
    "projectIds": projectIds,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomFieldContextProject(fieldId, contextId) {
  return assignProjectsToCustomFieldContext(fieldId, contextId);
}

function tryToDeleteANonExistingCustomFieldContextProject(fieldId, contextId) {
  return removeCustomFieldContextFromProjects(fieldId, contextId);
}

// ---- Entity: project ----

function createProject() {
  var url = "/rest/api/3/project";
  var description = "Create project {key} with name {name}";
  var body = {
    "assigneeType": assigneeType,
    "avatarId": avatarId,
    "categoryId": categoryId,
    "description": description,
    "issueSecurityScheme": issueSecurityScheme,
    "key": key,
    "leadAccountId": leadAccountId,
    "name": name,
    "notificationScheme": notificationScheme,
    "permissionScheme": permissionScheme,
    "projectTemplateKey": projectTemplateKey,
    "projectTypeKey": projectTypeKey,
    "url": url,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteProject(projectIdOrKey) {
  var url = "/rest/api/3/project/" + projectIdOrKey;
  var description = "Delete project " + projectIdOrKey;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateProject(projectIdOrKey) {
  var url = "/rest/api/3/project/" + projectIdOrKey;
  var description = "Update project " + projectIdOrKey + " with name {name}";
  var body = {
    "assigneeType": assigneeType,
    "avatarId": avatarId,
    "categoryId": categoryId,
    "description": description,
    "issueSecurityScheme": issueSecurityScheme,
    "key": key,
    "leadAccountId": leadAccountId,
    "name": name,
    "notificationScheme": notificationScheme,
    "permissionScheme": permissionScheme,
    "url": url,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getProject(projectIdOrKey) {
  var url = "/rest/api/3/project/" + projectIdOrKey;
  var description = "Get project " + projectIdOrKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingProject(projectIdOrKey) {
  return createProject();
}

function verifyProjectExists(projectIdOrKey) {
  return getProject(projectIdOrKey);
}

function verifyProjectDoesNotExist(projectIdOrKey) {
  return getProject(projectIdOrKey);
}

function tryToDeleteANonExistingProject(projectIdOrKey) {
  return deleteProject(projectIdOrKey);
}

// ---- Entity: field configuration ----

function createFieldConfiguration() {
  var url = "/rest/api/3/fieldconfiguration";
  var description = "Create field configuration {name}";
  var body = {
    "name": name,
    "description": description,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFieldConfiguration(id) {
  var url = "/rest/api/3/fieldconfiguration/" + id;
  var description = "Delete field configuration " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFieldConfiguration(id) {
  var url = "/rest/api/3/fieldconfiguration/" + id;
  var description = "Update field configuration " + id + " with name {name}";
  var body = {
    "name": name,
    "description": description,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAllFieldConfigurations(id, isDefault, query, startAt, maxResults) {
  var url = "/rest/api/3/fieldconfiguration";
  var description = "Get all field configurations";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFieldConfiguration(id, isDefault, query, startAt, maxResults) {
  return createFieldConfiguration();
}

function verifyFieldConfigurationExists(id, isDefault, query, startAt, maxResults) {
  return getAllFieldConfigurations(id, isDefault, query, startAt, maxResults);
}

function verifyFieldConfigurationDoesNotExist(id, isDefault, query, startAt, maxResults) {
  return getAllFieldConfigurations(id, isDefault, query, startAt, maxResults);
}

function tryToDeleteANonExistingFieldConfiguration(id, isDefault, query, startAt, maxResults) {
  return deleteFieldConfiguration(id);
}

// ---- Entity: field configuration items ----

function getFieldConfigurationItems(id, startAt, maxResults) {
  var url = "/rest/api/3/fieldconfiguration/" + id + "/fields";
  var description = "Get field configuration items for field configuration " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFieldConfigurationItems(id) {
  var url = "/rest/api/3/fieldconfiguration/" + id + "/fields";
  var description = "Update field configuration items for field configuration " + id;
  var body = {
    "fieldConfigurationItems": fieldConfigurationItems,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyFieldConfigurationItemsExists(id, startAt, maxResults) {
  return getFieldConfigurationItems(id, startAt, maxResults);
}

function verifyFieldConfigurationItemsDoesNotExist(id, startAt, maxResults) {
  return getFieldConfigurationItems(id, startAt, maxResults);
}

// ---- Entity: field configuration scheme ----

function createFieldConfigurationScheme() {
  var url = "/rest/api/3/fieldconfigurationscheme";
  var description = "Create field configuration scheme {name}";
  var body = {
    "name": name,
    "description": description,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFieldConfigurationScheme(id) {
  var url = "/rest/api/3/fieldconfigurationscheme/" + id;
  var description = "Delete field configuration scheme " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFieldConfigurationScheme(id) {
  var url = "/rest/api/3/fieldconfigurationscheme/" + id;
  var description = "Update field configuration scheme " + id + " with name {name}";
  var body = {
    "name": name,
    "description": description,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAllFieldConfigurationSchemes(id, startAt, maxResults) {
  var url = "/rest/api/3/fieldconfigurationscheme";
  var description = "Get all field configuration schemes";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFieldConfigurationScheme(id, startAt, maxResults) {
  return createFieldConfigurationScheme();
}

function verifyFieldConfigurationSchemeExists(id, startAt, maxResults) {
  return getAllFieldConfigurationSchemes(id, startAt, maxResults);
}

function verifyFieldConfigurationSchemeDoesNotExist(id, startAt, maxResults) {
  return getAllFieldConfigurationSchemes(id, startAt, maxResults);
}

function tryToDeleteANonExistingFieldConfigurationScheme(id, startAt, maxResults) {
  return deleteFieldConfigurationScheme(id);
}

// ---- Entity: field configuration scheme mapping ----

function setFieldConfigurationSchemeMapping(id) {
  var url = "/rest/api/3/fieldconfigurationscheme/" + id + "/mapping";
  var description = "Assign issue types to field configuration scheme " + id;
  var body = {
    "mappings": mappings,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeIssueTypesFromGlobalFieldConfigurationScheme(id) {
  var url = "/rest/api/3/fieldconfigurationscheme/" + id + "/mapping/delete";
  var description = "Remove issue types from field configuration scheme " + id;
  var body = {
    "issueTypeIds": issueTypeIds,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFieldConfigurationSchemeMappings(fieldConfigurationSchemeId, startAt, maxResults) {
  var url = "/rest/api/3/fieldconfigurationscheme/mapping";
  var description = "Get field configuration issue type items";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyFieldConfigurationSchemeMappingExists(id, fieldConfigurationSchemeId, startAt, maxResults) {
  return getFieldConfigurationSchemeMappings(fieldConfigurationSchemeId, startAt, maxResults);
}

function verifyFieldConfigurationSchemeMappingDoesNotExist(id, fieldConfigurationSchemeId, startAt, maxResults) {
  return getFieldConfigurationSchemeMappings(fieldConfigurationSchemeId, startAt, maxResults);
}

function tryToDeleteANonExistingFieldConfigurationSchemeMapping(id, fieldConfigurationSchemeId, startAt, maxResults) {
  return removeIssueTypesFromGlobalFieldConfigurationScheme(id);
}

// ---- Entity: field configuration scheme project association ----

function getFieldConfigurationSchemeProjectMapping(projectId, startAt, maxResults) {
  var url = "/rest/api/3/fieldconfigurationscheme/project";
  var description = "Get field configuration schemes for projects";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function assignFieldConfigurationSchemeToProject() {
  var url = "/rest/api/3/fieldconfigurationscheme/project";
  var description = "Assign field configuration scheme {fieldConfigurationSchemeId} to project {projectId}";
  var body = {
    "fieldConfigurationSchemeId": fieldConfigurationSchemeId,
    "projectId": projectId,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyFieldConfigurationSchemeProjectAssociationExists(projectId, startAt, maxResults) {
  return getFieldConfigurationSchemeProjectMapping(projectId, startAt, maxResults);
}

function verifyFieldConfigurationSchemeProjectAssociationDoesNotExist(projectId, startAt, maxResults) {
  return getFieldConfigurationSchemeProjectMapping(projectId, startAt, maxResults);
}

// ---- Entity: user ----

function createUser() {
  var url = "/rest/api/3/user";
  var description = "Create user with emailAddress {emailAddress}";
  var body = {
    "emailAddress": emailAddress,
    "products": products,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeUser(accountId) {
  var url = "/rest/api/3/user";
  var description = "Delete user with accountId " + accountId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function findUsers(query, accountId, property, startAt, maxResults) {
  var url = "/rest/api/3/user/search";
  var description = "Find users matching query " + query + " or accountId " + accountId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setUserColumns(accountId) {
  var url = "/rest/api/3/user/columns";
  var description = "Set user default columns for accountId " + accountId;
  var body = UserColumnRequestBody;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function findBulkAssignableUsers(query, accountId, projectKeys, startAt, maxResults) {
  var url = "/rest/api/3/user/assignable/multiProjectSearch";
  var description = "Find users assignable to projects " + projectKeys + " matching query " + query + " or accountId " + accountId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function findAssignableUsers(query, accountId, project, issueKey, issueId, startAt, maxResults, actionDescriptorId, recommend) {
  var url = "/rest/api/3/user/assignable/search";
  var description = "Find users assignable to issues in project " + project + " or issueKey " + issueKey + " or issueId " + issueId + " matching query " + query + " or accountId " + accountId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function findUsersWithAllPermissions(query, accountId, permissions, issueKey, projectKey, startAt, maxResults) {
  var url = "/rest/api/3/user/permission/search";
  var description = "Find users with permissions " + permissions + " matching query " + query + " or accountId " + accountId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function findUsersForPicker(query, maxResults, showAvatar, exclude, excludeAccountIds, avatarSize, excludeConnectUsers) {
  var url = "/rest/api/3/user/picker";
  var description = "Find users for picker matching query " + query;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function findUsersByQuery(query, startAt, maxResults) {
  var url = "/rest/api/3/user/search/query";
  var description = "Find users by query " + query;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function findUserKeysByQuery(query, startAt, maxResult) {
  var url = "/rest/api/3/user/search/query/key";
  var description = "Find user keys by query " + query;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function findUsersWithBrowsePermission(query, accountId, issueKey, projectKey, startAt, maxResults) {
  var url = "/rest/api/3/user/viewissue/search";
  var description = "Find users with browse permission matching query " + query + " or accountId " + accountId + " for issueKey " + issueKey + " or projectKey " + projectKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUser(accountId, query, property, startAt, maxResults, projectKeys, project, issueKey, issueId, actionDescriptorId, recommend, permissions, projectKey, showAvatar, exclude, excludeAccountIds, avatarSize, excludeConnectUsers, maxResult) {
  return createUser();
}

function verifyUserExists(accountId, query, property, startAt, maxResults, projectKeys, project, issueKey, issueId, actionDescriptorId, recommend, permissions, projectKey, showAvatar, exclude, excludeAccountIds, avatarSize, excludeConnectUsers, maxResult) {
  return findUsers(query, accountId, property, startAt, maxResults);
}

function verifyUserDoesNotExist(accountId, query, property, startAt, maxResults, projectKeys, project, issueKey, issueId, actionDescriptorId, recommend, permissions, projectKey, showAvatar, exclude, excludeAccountIds, avatarSize, excludeConnectUsers, maxResult) {
  return findUsers(query, accountId, property, startAt, maxResults);
}

function tryToDeleteANonExistingUser(accountId, query, property, startAt, maxResults, projectKeys, project, issueKey, issueId, actionDescriptorId, recommend, permissions, projectKey, showAvatar, exclude, excludeAccountIds, avatarSize, excludeConnectUsers, maxResult) {
  return removeUser(accountId);
}

// ---- Entity: workflow scheme ----

function createWorkflowScheme() {
  var url = "/rest/api/3/workflowscheme";
  var description = "Create workflow scheme {name} with id {id}";
  var body = {
    "defaultWorkflow": defaultWorkflow,
    "description": description,
    "issueTypeMappings": issueTypeMappings,
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWorkflowScheme(id) {
  var url = "/rest/api/3/workflowscheme/" + id;
  var description = "Delete workflow scheme with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWorkflowScheme(id) {
  var url = "/rest/api/3/workflowscheme/" + id;
  var description = "Update workflow scheme {name} with id " + id;
  var body = {
    "defaultWorkflow": defaultWorkflow,
    "description": description,
    "issueTypeMappings": issueTypeMappings,
    "name": name,
    "updateDraftIfNeeded": updateDraftIfNeeded,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWorkflowScheme(id, returnDraftIfExists) {
  var url = "/rest/api/3/workflowscheme/" + id;
  var description = "Get workflow scheme with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAllWorkflowSchemes(startAt, maxResults) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Get all workflow schemes starting at " + startAt + " with max results " + maxResults;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWorkflowScheme(id, returnDraftIfExists, startAt, maxResults) {
  return createWorkflowScheme();
}

function verifyWorkflowSchemeExists(id, returnDraftIfExists, startAt, maxResults) {
  return getWorkflowScheme(id, returnDraftIfExists);
}

function verifyWorkflowSchemeDoesNotExist(id, returnDraftIfExists, startAt, maxResults) {
  return getWorkflowScheme(id, returnDraftIfExists);
}

function tryToDeleteANonExistingWorkflowScheme(id, returnDraftIfExists, startAt, maxResults) {
  return deleteWorkflowScheme(id);
}

// ---- Entity: default workflow ----

function getDefaultWorkflow(id, returnDraftIfExists) {
  var url = "/rest/api/3/workflowscheme/" + id + "/default";
  var description = "Get default workflow for workflow scheme with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDefaultWorkflow(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/default";
  var description = "Update default workflow for workflow scheme with id " + id;
  var body = {
    "updateDraftIfNeeded": updateDraftIfNeeded,
    "workflow": workflow,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDefaultWorkflow(id, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id + "/default";
  var description = "Delete default workflow for workflow scheme with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDefaultWorkflowExists(id, returnDraftIfExists, updateDraftIfNeeded) {
  return getDefaultWorkflow(id, returnDraftIfExists);
}

function verifyDefaultWorkflowDoesNotExist(id, returnDraftIfExists, updateDraftIfNeeded) {
  return getDefaultWorkflow(id, returnDraftIfExists);
}

function tryToDeleteANonExistingDefaultWorkflow(id, returnDraftIfExists, updateDraftIfNeeded) {
  return deleteDefaultWorkflow(id, updateDraftIfNeeded);
}

// ---- Entity: workflow scheme issue type ----

function getWorkflowSchemeIssueType(id, issueType, returnDraftIfExists) {
  var url = "/rest/api/3/workflowscheme/" + id + "/issuetype/" + issueType;
  var description = "Get workflow for issue type " + issueType + " in workflow scheme with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setWorkflowSchemeIssueType(id, issueType) {
  var url = "/rest/api/3/workflowscheme/" + id + "/issuetype/" + issueType;
  var description = "Set workflow for issue type " + issueType + " in workflow scheme with id " + id;
  var body = {
    "issueType": issueType,
    "updateDraftIfNeeded": updateDraftIfNeeded,
    "workflow": workflow,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWorkflowSchemeIssueType(id, issueType, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id + "/issuetype/" + issueType;
  var description = "Delete workflow for issue type " + issueType + " in workflow scheme with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowSchemeIssueTypeExists(id, issueType, returnDraftIfExists, updateDraftIfNeeded) {
  return getWorkflowSchemeIssueType(id, issueType, returnDraftIfExists);
}

function verifyWorkflowSchemeIssueTypeDoesNotExist(id, issueType, returnDraftIfExists, updateDraftIfNeeded) {
  return getWorkflowSchemeIssueType(id, issueType, returnDraftIfExists);
}

function tryToDeleteANonExistingWorkflowSchemeIssueType(id, issueType, returnDraftIfExists, updateDraftIfNeeded) {
  return deleteWorkflowSchemeIssueType(id, issueType, updateDraftIfNeeded);
}

// ---- Entity: workflow mapping ----

function getWorkflow(id, workflowName, returnDraftIfExists) {
  var url = "/rest/api/3/workflowscheme/" + id + "/workflow";
  var description = "Get issue types for workflow " + workflowName + " in workflow scheme with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWorkflowMapping(id, workflowName) {
  var url = "/rest/api/3/workflowscheme/" + id + "/workflow";
  var description = "Set issue types for workflow " + workflowName + " in workflow scheme with id " + id;
  var body = {
    "issueTypes": issueTypes,
    "updateDraftIfNeeded": updateDraftIfNeeded,
    "workflow": workflow,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWorkflowMapping(id, workflowName, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id + "/workflow";
  var description = "Delete issue types for workflow " + workflowName + " in workflow scheme with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowMappingExists(id, workflowName, returnDraftIfExists, updateDraftIfNeeded) {
  return getWorkflow(id, workflowName, returnDraftIfExists);
}

function verifyWorkflowMappingDoesNotExist(id, workflowName, returnDraftIfExists, updateDraftIfNeeded) {
  return getWorkflow(id, workflowName, returnDraftIfExists);
}

function tryToDeleteANonExistingWorkflowMapping(id, workflowName, returnDraftIfExists, updateDraftIfNeeded) {
  return deleteWorkflowMapping(id, workflowName, updateDraftIfNeeded);
}

// ---- Entity: custom field ----

function createCustomField() {
  var url = "/rest/api/3/field";
  var description = "Create custom field {name} with id {id}";
  var body = {
    "description": description,
    "name": name,
    "searcherKey": searcherKey,
    "type": type,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCustomField(id) {
  var url = "/rest/api/3/field/" + id;
  var description = "Delete custom field with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCustomField(fieldId) {
  var url = "/rest/api/3/field/" + fieldId;
  var description = "Update custom field " + fieldId + " with name {name}";
  var body = {
    "description": description,
    "name": name,
    "searcherKey": searcherKey,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFields() {
  var url = "/rest/api/3/field";
  var description = "Get all fields";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function restoreCustomField(id) {
  var url = "/rest/api/3/field/" + id + "/restore";
  var description = "Restore custom field with id " + id + " from trash";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function trashCustomField(id) {
  var url = "/rest/api/3/field/" + id + "/trash";
  var description = "Move custom field with id " + id + " to trash";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomField(id, fieldId) {
  return createCustomField();
}

function verifyCustomFieldExists(id, fieldId) {
  return getFields();
}

function verifyCustomFieldDoesNotExist(id, fieldId) {
  return getFields();
}

function tryToDeleteANonExistingCustomField(id, fieldId) {
  return deleteCustomField(id);
}

// ---- Entity: filter ----

function createFilter() {
  var url = "/rest/api/3/filter";
  var description = "Create filter {name} with id {id}";
  var body = {
    "description": description,
    "jql": jql,
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFilter(id) {
  var url = "/rest/api/3/filter/" + id;
  var description = "Delete filter with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFilter(id) {
  var url = "/rest/api/3/filter/" + id;
  var description = "Update filter {name} with id " + id;
  var body = {
    "description": description,
    "jql": jql,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFilter(id) {
  var url = "/rest/api/3/filter/" + id;
  var description = "Get filter with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFilter(id) {
  return createFilter();
}

function verifyFilterExists(id) {
  return getFilter(id);
}

function verifyFilterDoesNotExist(id) {
  return getFilter(id);
}

function tryToDeleteANonExistingFilter(id) {
  return deleteFilter(id);
}

// ---- Entity: filter columns ----

function getColumns(id) {
  var url = "/rest/api/3/filter/" + id + "/columns";
  var description = "Get columns for filter with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setColumns(id) {
  var url = "/rest/api/3/filter/" + id + "/columns";
  var description = "Set columns for filter with id " + id;
  var body = {
    "columns": columns,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetColumns(id) {
  var url = "/rest/api/3/filter/" + id + "/columns";
  var description = "Reset columns for filter with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyFilterColumnsExists(id) {
  return getColumns(id);
}

function verifyFilterColumnsDoesNotExist(id) {
  return getColumns(id);
}

function tryToDeleteANonExistingFilterColumns(id) {
  return resetColumns(id);
}

// ---- Entity: filter favourite ----

function setFavouriteForFilter(id) {
  var url = "/rest/api/3/filter/" + id + "/favourite";
  var description = "Add filter with id " + id + " as favorite";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFavouriteForFilter(id) {
  var url = "/rest/api/3/filter/" + id + "/favourite";
  var description = "Remove filter with id " + id + " as favorite";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFilterFavourite(id) {
  return setFavouriteForFilter(id);
}

function tryToDeleteANonExistingFilterFavourite(id) {
  return deleteFavouriteForFilter(id);
}

// ---- Entity: filter owner ----

function changeFilterOwner(id) {
  var url = "/rest/api/3/filter/" + id + "/owner";
  var description = "Change owner of filter with id " + id + " to accountId {accountId}";
  var body = {
    "accountId": accountId,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: issue type screen scheme ----

function createIssueTypeScreenScheme(name) {
  var url = "/rest/api/3/issuetypescreenscheme";
  var description = "Create issue type screen scheme " + name;
  var body = {
    "name": name,
    "issueTypeMappings": issueTypeMappings,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIssueTypeScreenScheme(issueTypeScreenSchemeId) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId;
  var description = "Delete issue type screen scheme " + issueTypeScreenSchemeId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIssueTypeScreenScheme(issueTypeScreenSchemeId, name) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId;
  var description = "Update issue type screen scheme " + issueTypeScreenSchemeId + " with name " + name;
  var body = {
    "name": name,
    "description": description,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIssueTypeScreenSchemes(id, queryString, orderBy, expand, startAt, maxResults) {
  var url = "/rest/api/3/issuetypescreenscheme";
  var description = "Get issue type screen schemes";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueTypeScreenScheme(name, issueTypeScreenSchemeId, id, queryString, orderBy, expand, startAt, maxResults) {
  return createIssueTypeScreenScheme(name);
}

function verifyIssueTypeScreenSchemeExists(name, issueTypeScreenSchemeId, id, queryString, orderBy, expand, startAt, maxResults) {
  return getIssueTypeScreenSchemes(id, queryString, orderBy, expand, startAt, maxResults);
}

function verifyIssueTypeScreenSchemeDoesNotExist(name, issueTypeScreenSchemeId, id, queryString, orderBy, expand, startAt, maxResults) {
  return getIssueTypeScreenSchemes(id, queryString, orderBy, expand, startAt, maxResults);
}

function tryToDeleteANonExistingIssueTypeScreenScheme(name, issueTypeScreenSchemeId, id, queryString, orderBy, expand, startAt, maxResults) {
  return deleteIssueTypeScreenScheme(issueTypeScreenSchemeId);
}

// ---- Entity: issue type screen scheme mapping ----

function getIssueTypeScreenSchemeMappings(issueTypeScreenSchemeId, startAt, maxResults) {
  var url = "/rest/api/3/issuetypescreenscheme/mapping";
  var description = "Get issue type screen scheme mappings";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function appendMappingsForIssueTypeScreenScheme(issueTypeScreenSchemeId) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId + "/mapping";
  var description = "Append mappings to issue type screen scheme " + issueTypeScreenSchemeId;
  var body = {
    "issueTypeMappings": issueTypeMappings,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDefaultScreenScheme(issueTypeScreenSchemeId, screenSchemeId) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId + "/mapping/default";
  var description = "Update issue type screen scheme " + issueTypeScreenSchemeId + " default screen scheme with screenSchemeId " + screenSchemeId;
  var body = {
    "screenSchemeId": screenSchemeId,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeMappingsFromIssueTypeScreenScheme(issueTypeScreenSchemeId, issueTypeIds) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId + "/mapping/remove";
  var description = "Remove mappings from issue type screen scheme " + issueTypeScreenSchemeId + " for issueTypeIds " + issueTypeIds;
  var body = {
    "issueTypeIds": issueTypeIds,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIssueTypeScreenSchemeMappingExists(issueTypeScreenSchemeId, startAt, maxResults, screenSchemeId, issueTypeIds) {
  return getIssueTypeScreenSchemeMappings(issueTypeScreenSchemeId, startAt, maxResults);
}

function verifyIssueTypeScreenSchemeMappingDoesNotExist(issueTypeScreenSchemeId, startAt, maxResults, screenSchemeId, issueTypeIds) {
  return getIssueTypeScreenSchemeMappings(issueTypeScreenSchemeId, startAt, maxResults);
}

// ---- Entity: issue type screen scheme project association ----

function getIssueTypeScreenSchemeProjectAssociations(projectId, startAt, maxResults) {
  var url = "/rest/api/3/issuetypescreenscheme/project";
  var description = "Get issue type screen schemes for projects " + projectId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function assignIssueTypeScreenSchemeToProject(issueTypeScreenSchemeId, projectId) {
  var url = "/rest/api/3/issuetypescreenscheme/project";
  var description = "Assign issue type screen scheme " + issueTypeScreenSchemeId + " to project " + projectId;
  var body = {
    "issueTypeScreenSchemeId": issueTypeScreenSchemeId,
    "projectId": projectId,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIssueTypeScreenSchemeProjectAssociationExists(projectId, startAt, maxResults, issueTypeScreenSchemeId) {
  return getIssueTypeScreenSchemeProjectAssociations(projectId, startAt, maxResults);
}

function verifyIssueTypeScreenSchemeProjectAssociationDoesNotExist(projectId, startAt, maxResults, issueTypeScreenSchemeId) {
  return getIssueTypeScreenSchemeProjectAssociations(projectId, startAt, maxResults);
}

// ---- Entity: issue type screen scheme project ----

function getProjectsForIssueTypeScreenScheme(issueTypeScreenSchemeId, startAt, maxResults, query) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId + "/project";
  var description = "Get projects for issue type screen scheme " + issueTypeScreenSchemeId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIssueTypeScreenSchemeProjectExists(issueTypeScreenSchemeId, startAt, maxResults, query) {
  return getProjectsForIssueTypeScreenScheme(issueTypeScreenSchemeId, startAt, maxResults, query);
}

function verifyIssueTypeScreenSchemeProjectDoesNotExist(issueTypeScreenSchemeId, startAt, maxResults, query) {
  return getProjectsForIssueTypeScreenScheme(issueTypeScreenSchemeId, startAt, maxResults, query);
}

// ---- Entity: attachment ----

function getAttachment(id) {
  var url = "/rest/api/3/attachment/" + id;
  var description = "Get attachment metadata with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeAttachment(id) {
  var url = "/rest/api/3/attachment/" + id;
  var description = "Delete attachment with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAttachmentExists(id) {
  return getAttachment(id);
}

function verifyAttachmentDoesNotExist(id) {
  return getAttachment(id);
}

function tryToDeleteANonExistingAttachment(id) {
  return removeAttachment(id);
}

// ---- Entity: attachment content ----

function getAttachmentContent(id) {
  var url = "/rest/api/3/attachment/content/" + id;
  var description = "Get attachment content with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAttachmentContentExists(id) {
  return getAttachmentContent(id);
}

function verifyAttachmentContentDoesNotExist(id) {
  return getAttachmentContent(id);
}

// ---- Entity: attachment thumbnail ----

function getAttachmentThumbnail(id) {
  var url = "/rest/api/3/attachment/thumbnail/" + id;
  var description = "Get attachment thumbnail with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAttachmentThumbnailExists(id) {
  return getAttachmentThumbnail(id);
}

function verifyAttachmentThumbnailDoesNotExist(id) {
  return getAttachmentThumbnail(id);
}

// ---- Entity: expanded attachment human ----

function expandAttachmentForHumans(id) {
  var url = "/rest/api/3/attachment/" + id + "/expand/human";
  var description = "Get all metadata for expanded attachment with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAttachmentExpandedHumanExists(id) {
  return expandAttachmentForHumans(id);
}

function verifyAttachmentExpandedHumanDoesNotExist(id) {
  return expandAttachmentForHumans(id);
}

// ---- Entity: expanded attachment raw ----

function expandAttachmentForMachines(id) {
  var url = "/rest/api/3/attachment/" + id + "/expand/raw";
  var description = "Get contents metadata for expanded attachment with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAttachmentExpandedRawExists(id) {
  return expandAttachmentForMachines(id);
}

function verifyAttachmentExpandedRawDoesNotExist(id) {
  return expandAttachmentForMachines(id);
}

// ---- Entity: attachment meta ----

function getAttachmentMeta() {
  var url = "/rest/api/3/attachment/meta";
  var description = "Get Jira attachment settings";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAttachmentMetaExists() {
  return getAttachmentMeta();
}

function verifyAttachmentMetaDoesNotExist() {
  return getAttachmentMeta();
}

// ---- Entity: issue attachment ----

function addAttachment(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/attachments";
  var description = "Add attachment to issue " + issueIdOrKey;
  var body = {
    "files": "[multipart/form-data array]",
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueAttachment(issueIdOrKey) {
  return addAttachment(issueIdOrKey);
}

// ---- Entity: issue bulk operation ----

function submitBulkDelete(selectedIssueIdsOrKeys) {
  var url = "/rest/api/3/bulk/issues/delete";
  var description = "Bulk delete issues with ids or keys " + selectedIssueIdsOrKeys;
  var body = {
    "selectedIssueIdsOrKeys": selectedIssueIdsOrKeys,
    "sendBulkNotification": undefined,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBulkEditableFields(issueIdsOrKeys, searchText, endingBefore, startingAfter) {
  var url = "/rest/api/3/bulk/issues/fields";
  var description = "Get bulk editable fields for issues " + issueIdsOrKeys;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function submitBulkEdit() {
  var url = "/rest/api/3/bulk/issues/fields";
  var description = "Bulk edit issues with ids or keys {selectedIssueIdsOrKeys}";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function submitBulkMove() {
  var url = "/rest/api/3/bulk/issues/move";
  var description = "Bulk move issues with mapping {targetToSourcesMapping}";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAvailableTransitions(issueIdsOrKeys, endingBefore, startingAfter) {
  var url = "/rest/api/3/bulk/issues/transition";
  var description = "Get available transitions for issues " + issueIdsOrKeys;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function submitBulkTransition(selectedIssueIdsOrKeys, transitionId) {
  var url = "/rest/api/3/bulk/issues/transition";
  var description = "Bulk transition issues " + selectedIssueIdsOrKeys + " to transition " + transitionId;
  var body = {
    "bulkTransitionInputs": [{'selectedIssueIdsOrKeys': '{selectedIssueIdsOrKeys}', 'transitionId': '{transitionId}'}],
    "sendBulkNotification": undefined,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function submitBulkUnwatch(selectedIssueIdsOrKeys) {
  var url = "/rest/api/3/bulk/issues/unwatch";
  var description = "Bulk unwatch issues with ids or keys " + selectedIssueIdsOrKeys;
  var body = {
    "selectedIssueIdsOrKeys": selectedIssueIdsOrKeys,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function submitBulkWatch(selectedIssueIdsOrKeys) {
  var url = "/rest/api/3/bulk/issues/watch";
  var description = "Bulk watch issues with ids or keys " + selectedIssueIdsOrKeys;
  var body = {
    "selectedIssueIdsOrKeys": selectedIssueIdsOrKeys,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBulkOperationProgress(taskId) {
  var url = "/rest/api/3/bulk/queue/" + taskId;
  var description = "Get bulk issue operation progress for task " + taskId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIssueBulkExists(selectedIssueIdsOrKeys, issueIdsOrKeys, searchText, endingBefore, startingAfter, transitionId, taskId) {
  return getBulkEditableFields(issueIdsOrKeys, searchText, endingBefore, startingAfter);
}

function verifyIssueBulkDoesNotExist(selectedIssueIdsOrKeys, issueIdsOrKeys, searchText, endingBefore, startingAfter, transitionId, taskId) {
  return getBulkEditableFields(issueIdsOrKeys, searchText, endingBefore, startingAfter);
}

function tryToDeleteANonExistingIssueBulk(selectedIssueIdsOrKeys, issueIdsOrKeys, searchText, endingBefore, startingAfter, transitionId, taskId) {
  return submitBulkDelete(selectedIssueIdsOrKeys);
}

// ---- Entity: issue type scheme ----

function createIssueTypeScheme() {
  var url = "/rest/api/3/issuetypescheme";
  var description = "Create issue type scheme {name} with defaultIssueTypeId {defaultIssueTypeId}";
  var body = {
    "defaultIssueTypeId": defaultIssueTypeId,
    "description": description,
    "issueTypeIds": issueTypeIds,
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIssueTypeScheme(issueTypeSchemeId) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId;
  var description = "Delete issue type scheme with id " + issueTypeSchemeId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIssueTypeScheme(issueTypeSchemeId) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId;
  var description = "Update issue type scheme {name} with id " + issueTypeSchemeId;
  var body = {
    "defaultIssueTypeId": defaultIssueTypeId,
    "description": description,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAllIssueTypeSchemes(id) {
  var url = "/rest/api/3/issuetypescheme";
  var description = "Get all issue type schemes";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueTypeScheme(issueTypeSchemeId, id) {
  return createIssueTypeScheme();
}

function verifyIssueTypeSchemeExists(issueTypeSchemeId, id) {
  return getAllIssueTypeSchemes(id);
}

function verifyIssueTypeSchemeDoesNotExist(issueTypeSchemeId, id) {
  return getAllIssueTypeSchemes(id);
}

function tryToDeleteANonExistingIssueTypeScheme(issueTypeSchemeId, id) {
  return deleteIssueTypeScheme(issueTypeSchemeId);
}

// ---- Entity: issue type scheme project association ----

function assignIssueTypeSchemeToProject() {
  var url = "/rest/api/3/issuetypescheme/project";
  var description = "Assign issue type scheme {issueTypeSchemeId} to project {projectId}";
  var body = {
    "issueTypeSchemeId": issueTypeSchemeId,
    "projectId": projectId,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIssueTypeSchemeForProjects(projectId) {
  var url = "/rest/api/3/issuetypescheme/project";
  var description = "Get issue type schemes for projects with projectId " + projectId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIssueTypeSchemeProjectAssociationExists(projectId) {
  return getIssueTypeSchemeForProjects(projectId);
}

function verifyIssueTypeSchemeProjectAssociationDoesNotExist(projectId) {
  return getIssueTypeSchemeForProjects(projectId);
}

// ---- Entity: issue type scheme mapping ----

function getIssueTypeSchemesMapping(issueTypeSchemeId) {
  var url = "/rest/api/3/issuetypescheme/mapping";
  var description = "Get issue type scheme items for issueTypeSchemeId " + issueTypeSchemeId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIssueTypeSchemeMappingExists(issueTypeSchemeId) {
  return getIssueTypeSchemesMapping(issueTypeSchemeId);
}

function verifyIssueTypeSchemeMappingDoesNotExist(issueTypeSchemeId) {
  return getIssueTypeSchemesMapping(issueTypeSchemeId);
}

// ---- Entity: issue type in issue type scheme ----

function addIssueTypesToIssueTypeScheme(issueTypeSchemeId) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId + "/issuetype";
  var description = "Add issue types {issueTypeIds} to issue type scheme " + issueTypeSchemeId;
  var body = {
    "issueTypeIds": issueTypeIds,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function reorderIssueTypesInIssueTypeScheme(issueTypeSchemeId) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId + "/issuetype/move";
  var description = "Change order of issue types in issue type scheme " + issueTypeSchemeId + " after {after}";
  var body = {
    "after": after,
    "issueTypeIds": issueTypeIds,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeIssueTypeFromIssueTypeScheme(issueTypeSchemeId, issueTypeId) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId + "/issuetype/" + issueTypeId;
  var description = "Remove issue type " + issueTypeId + " from issue type scheme " + issueTypeSchemeId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueTypeInScheme(issueTypeSchemeId, issueTypeId) {
  return addIssueTypesToIssueTypeScheme(issueTypeSchemeId);
}

function tryToDeleteANonExistingIssueTypeInScheme(issueTypeSchemeId, issueTypeId) {
  return removeIssueTypeFromIssueTypeScheme(issueTypeSchemeId, issueTypeId);
}

// ---- Entity: avatar ----

function getAvatar(type, entityId, id, size, format) {
  var url = "";
  var description = "Get avatar of type " + type + " with entityId " + entityId + " and id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function storeAvatar(type, entityId, size, x, y) {
  var url = "/rest/api/3/universal_avatar/type/" + type + "/owner/" + entityId;
  var description = "Load avatar of type " + type + " for entity " + entityId + " with crop size " + size + " at coordinates (" + x + "," + y + ")";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAvatar(type, owningObjectId, id) {
  var url = "/rest/api/3/universal_avatar/type/" + type + "/owner/" + owningObjectId + "/avatar/" + id;
  var description = "Delete avatar with id " + id + " of type " + type + " owned by " + owningObjectId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAvatar(type, entityId, id, size, format, x, y, owningObjectId) {
  return storeAvatar(type, entityId, size, x, y);
}

function verifyAvatarExists(type, entityId, id, size, format, x, y, owningObjectId) {
  return getAvatar(type, entityId, id, size, format);
}

function verifyAvatarDoesNotExist(type, entityId, id, size, format, x, y, owningObjectId) {
  return getAvatar(type, entityId, id, size, format);
}

function tryToDeleteANonExistingAvatar(type, entityId, id, size, format, x, y, owningObjectId) {
  return deleteAvatar(type, owningObjectId, id);
}

// ---- Entity: worklog ----

function addWorklog(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog";
  var description = "Add worklog to issue " + issueIdOrKey + " with started {started} and timeSpentSeconds {timeSpentSeconds}";
  var body = {
    "comment": comment,
    "started": started,
    "timeSpentSeconds": timeSpentSeconds,
    "visibility": visibility,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWorklog(issueIdOrKey, id) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog/" + id;
  var description = "Delete worklog " + id + " from issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWorklog(issueIdOrKey, id) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog/" + id;
  var description = "Update worklog " + id + " on issue " + issueIdOrKey + " with started {started} and timeSpentSeconds {timeSpentSeconds}";
  var body = {
    "comment": comment,
    "started": started,
    "timeSpentSeconds": timeSpentSeconds,
    "visibility": visibility,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWorklog(issueIdOrKey, id) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog/" + id;
  var description = "Get worklog " + id + " from issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkDeleteWorklogs(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog";
  var description = "Bulk delete worklogs {ids} from issue " + issueIdOrKey;
  var body = {
    "ids": ids,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkMoveWorklogs(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog/move";
  var description = "Bulk move worklogs {ids} from issue " + issueIdOrKey + " to issue {issueIdOrKeyDest}";
  var body = {
    "ids": ids,
    "issueIdOrKey": issueIdOrKeyDest,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWorklogsForIds() {
  var url = "/rest/api/3/worklog/list";
  var description = "Get worklogs for IDs {ids}";
  var body = {
    "ids": ids,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIdsOfWorklogsDeletedSince(since) {
  var url = "/rest/api/3/worklog/deleted";
  var description = "Get IDs of worklogs deleted since " + since;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIdsOfWorklogsModifiedSince(since) {
  var url = "/rest/api/3/worklog/updated";
  var description = "Get IDs of worklogs updated since " + since;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWorklog(issueIdOrKey, id, since) {
  return addWorklog(issueIdOrKey);
}

function verifyWorklogExists(issueIdOrKey, id, since) {
  return getWorklog(issueIdOrKey, id);
}

function verifyWorklogDoesNotExist(issueIdOrKey, id, since) {
  return getWorklog(issueIdOrKey, id);
}

function tryToDeleteANonExistingWorklog(issueIdOrKey, id, since) {
  return deleteWorklog(issueIdOrKey, id);
}

// ---- Entity: notification scheme ----

function createNotificationScheme() {
  var url = "/rest/api/3/notificationscheme";
  var description = "Create notification scheme {name}";
  var body = {
    "description": description,
    "name": name,
    "notificationSchemeEvents": notificationSchemeEvents,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteNotificationScheme(notificationSchemeId) {
  var url = "/rest/api/3/notificationscheme/" + notificationSchemeId;
  var description = "Delete notification scheme " + notificationSchemeId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateNotificationScheme(id) {
  var url = "/rest/api/3/notificationscheme/" + id;
  var description = "Update notification scheme " + id + " with name {name}";
  var body = {
    "description": description,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getNotificationScheme(id) {
  var url = "/rest/api/3/notificationscheme/" + id;
  var description = "Get notification scheme " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingNotificationScheme(notificationSchemeId, id) {
  return createNotificationScheme();
}

function verifyNotificationSchemeExists(notificationSchemeId, id) {
  return getNotificationScheme(id);
}

function verifyNotificationSchemeDoesNotExist(notificationSchemeId, id) {
  return getNotificationScheme(id);
}

function tryToDeleteANonExistingNotificationScheme(notificationSchemeId, id) {
  return deleteNotificationScheme(notificationSchemeId);
}

// ---- Entity: notification ----

function addNotifications(id) {
  var url = "/rest/api/3/notificationscheme/" + id + "/notification";
  var description = "Add notifications to notification scheme " + id;
  var body = {
    "notificationSchemeEvents": notificationSchemeEvents,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeNotificationFromNotificationScheme(notificationSchemeId, notificationId) {
  var url = "/rest/api/3/notificationscheme/" + notificationSchemeId + "/notification/" + notificationId;
  var description = "Remove notification " + notificationId + " from notification scheme " + notificationSchemeId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingNotification(id, notificationSchemeId, notificationId) {
  return addNotifications(id);
}

function tryToDeleteANonExistingNotification(id, notificationSchemeId, notificationId) {
  return removeNotificationFromNotificationScheme(notificationSchemeId, notificationId);
}

// ---- Entity: priority scheme ----

function createPriorityScheme(name, defaultPriorityId, description, priorityIds, projectIds, mappings) {
  var url = "/rest/api/3/priorityscheme";
  var description = "Create priority scheme " + name + " with id {schemeId}";
  var body = {
    "name": name,
    "defaultPriorityId": defaultPriorityId,
    "description": description,
    "priorityIds": priorityIds,
    "projectIds": projectIds,
    "mappings": mappings,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePriorityScheme(schemeId) {
  var url = "/rest/api/3/priorityscheme/" + schemeId;
  var description = "Delete priority scheme with id " + schemeId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePriorityScheme(schemeId, name, defaultPriorityId, description, mappings, priorities, projects) {
  var url = "/rest/api/3/priorityscheme/" + schemeId;
  var description = "Update priority scheme " + name + " with id " + schemeId;
  var body = {
    "name": name,
    "defaultPriorityId": defaultPriorityId,
    "description": description,
    "mappings": mappings,
    "priorities": priorities,
    "projects": projects,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPrioritySchemes(startAt, maxResults, priorityId, schemeId, schemeName, onlyDefault, orderBy, expand) {
  var url = "/rest/api/3/priorityscheme";
  var description = "Get priority schemes";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPriorityScheme(name, defaultPriorityId, description, priorityIds, projectIds, mappings, schemeId, priorities, projects, startAt, maxResults, priorityId, schemeName, onlyDefault, orderBy, expand) {
  return createPriorityScheme(name, defaultPriorityId, description, priorityIds, projectIds, mappings);
}

function verifyPrioritySchemeExists(name, defaultPriorityId, description, priorityIds, projectIds, mappings, schemeId, priorities, projects, startAt, maxResults, priorityId, schemeName, onlyDefault, orderBy, expand) {
  return getPrioritySchemes(startAt, maxResults, priorityId, schemeId, schemeName, onlyDefault, orderBy, expand);
}

function verifyPrioritySchemeDoesNotExist(name, defaultPriorityId, description, priorityIds, projectIds, mappings, schemeId, priorities, projects, startAt, maxResults, priorityId, schemeName, onlyDefault, orderBy, expand) {
  return getPrioritySchemes(startAt, maxResults, priorityId, schemeId, schemeName, onlyDefault, orderBy, expand);
}

function tryToDeleteANonExistingPriorityScheme(name, defaultPriorityId, description, priorityIds, projectIds, mappings, schemeId, priorities, projects, startAt, maxResults, priorityId, schemeName, onlyDefault, orderBy, expand) {
  return deletePriorityScheme(schemeId);
}

// ---- Entity: status ----

function createStatuses() {
  var url = "/rest/api/3/statuses";
  var description = "Create statuses with names {name}";
  var body = {
    "statuses": [{'description': '{description}', 'name': '{name}', 'statusCategory': '{statusCategory}'}],
    "scope": {
      "project": {
        "id": projectId,
      },
      "type": type,
    },
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteStatusesById(id) {
  var url = "/rest/api/3/statuses";
  var description = "Bulk delete statuses with ids " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateStatuses() {
  var url = "/rest/api/3/statuses";
  var description = "Bulk update statuses with ids {id} and names {name}";
  var body = {
    "statuses": [{'id': '{id}', 'description': '{description}', 'name': '{name}', 'statusCategory': '{statusCategory}'}],
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getStatusesById(id) {
  var url = "/rest/api/3/statuses";
  var description = "Bulk get statuses with ids " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingStatus(id) {
  return createStatuses();
}

function verifyStatusExists(id) {
  return getStatusesById(id);
}

function verifyStatusDoesNotExist(id) {
  return getStatusesById(id);
}

function tryToDeleteANonExistingStatus(id) {
  return deleteStatusesById(id);
}

// ---- Entity: workflow scheme draft ----

function createWorkflowSchemeDraftFromParent(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/createdraft";
  var description = "Create draft workflow scheme from workflow scheme " + id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWorkflowSchemeDraft(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft";
  var description = "Delete draft workflow scheme from workflow scheme " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWorkflowSchemeDraft(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft";
  var description = "Get draft workflow scheme from workflow scheme " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWorkflowSchemeDraft(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft";
  var description = "Update draft workflow scheme " + id + " with name {name}";
  var body = {
    "defaultWorkflow": defaultWorkflow,
    "description": description,
    "issueTypeMappings": issueTypeMappings,
    "name": name,
    "updateDraftIfNeeded": updateDraftIfNeeded,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWorkflowSchemeDraft(id) {
  return createWorkflowSchemeDraftFromParent(id);
}

function verifyWorkflowSchemeDraftExists(id) {
  return getWorkflowSchemeDraft(id);
}

function verifyWorkflowSchemeDraftDoesNotExist(id) {
  return getWorkflowSchemeDraft(id);
}

function tryToDeleteANonExistingWorkflowSchemeDraft(id) {
  return deleteWorkflowSchemeDraft(id);
}

// ---- Entity: draft default workflow ----

function deleteDraftDefaultWorkflow(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/default";
  var description = "Delete draft default workflow from workflow scheme " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDraftDefaultWorkflow(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/default";
  var description = "Get draft default workflow from workflow scheme " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDraftDefaultWorkflow(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/default";
  var description = "Update draft default workflow {workflow} in workflow scheme " + id;
  var body = {
    "updateDraftIfNeeded": updateDraftIfNeeded,
    "workflow": workflow,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDraftDefaultWorkflowExists(id) {
  return getDraftDefaultWorkflow(id);
}

function verifyDraftDefaultWorkflowDoesNotExist(id) {
  return getDraftDefaultWorkflow(id);
}

function tryToDeleteANonExistingDraftDefaultWorkflow(id) {
  return deleteDraftDefaultWorkflow(id);
}

// ---- Entity: workflow scheme draft issue type ----

function deleteWorkflowSchemeDraftIssueType(id, issueType) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/issuetype/" + issueType;
  var description = "Delete workflow for issue type " + issueType + " in draft workflow scheme " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWorkflowSchemeDraftIssueType(id, issueType) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/issuetype/" + issueType;
  var description = "Get workflow for issue type " + issueType + " in draft workflow scheme " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setWorkflowSchemeDraftIssueType(id, issueType) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/issuetype/" + issueType;
  var description = "Set workflow {workflow} for issue type " + issueType + " in draft workflow scheme " + id;
  var body = {
    "issueType": issueType,
    "updateDraftIfNeeded": updateDraftIfNeeded,
    "workflow": workflow,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowSchemeDraftIssueTypeExists(id, issueType) {
  return getWorkflowSchemeDraftIssueType(id, issueType);
}

function verifyWorkflowSchemeDraftIssueTypeDoesNotExist(id, issueType) {
  return getWorkflowSchemeDraftIssueType(id, issueType);
}

function tryToDeleteANonExistingWorkflowSchemeDraftIssueType(id, issueType) {
  return deleteWorkflowSchemeDraftIssueType(id, issueType);
}

// ---- Entity: publish draft workflow scheme ----

function publishDraftWorkflowScheme(id, validateOnly) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/publish";
  var description = "Publish draft workflow scheme " + id + " with validateOnly " + validateOnly;
  var body = {
    "statusMappings": statusMappings,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPublishDraftWorkflowScheme(id, validateOnly) {
  return publishDraftWorkflowScheme(id, validateOnly);
}

// ---- Entity: draft workflow mapping ----

function deleteDraftWorkflowMapping(id, workflowName) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/workflow";
  var description = "Delete issue types for workflow " + workflowName + " in draft workflow scheme " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDraftWorkflow(id, workflowName) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/workflow";
  var description = "Get issue types for workflow " + workflowName + " in draft workflow scheme " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDraftWorkflowMapping(id, workflowName) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/workflow";
  var description = "Set issue types for workflow {workflow} in draft workflow scheme " + id;
  var body = {
    "issueTypes": issueTypes,
    "updateDraftIfNeeded": updateDraftIfNeeded,
    "workflow": workflow,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDraftWorkflowMappingExists(id, workflowName) {
  return getDraftWorkflow(id, workflowName);
}

function verifyDraftWorkflowMappingDoesNotExist(id, workflowName) {
  return getDraftWorkflow(id, workflowName);
}

function tryToDeleteANonExistingDraftWorkflowMapping(id, workflowName) {
  return deleteDraftWorkflowMapping(id, workflowName);
}

// ---- Entity: component ----

function createComponent() {
  var url = "/rest/api/3/component";
  var description = "Create component {name} with id {id}";
  var body = {
    "assigneeType": assigneeType,
    "description": description,
    "isAssigneeTypeValid": isAssigneeTypeValid,
    "leadAccountId": leadAccountId,
    "name": name,
    "project": project,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteComponent(id, moveIssuesTo) {
  var url = "/rest/api/3/component/" + id;
  var description = "Delete component with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateComponent(id) {
  var url = "/rest/api/3/component/" + id;
  var description = "Update component {name} with id " + id;
  var body = {
    "assigneeType": assigneeType,
    "description": description,
    "isAssigneeTypeValid": isAssigneeTypeValid,
    "leadAccountId": leadAccountId,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getComponent(id) {
  var url = "/rest/api/3/component/" + id;
  var description = "Get component with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingComponent(id, moveIssuesTo) {
  return createComponent();
}

function verifyComponentExists(id, moveIssuesTo) {
  return getComponent(id);
}

function verifyComponentDoesNotExist(id, moveIssuesTo) {
  return getComponent(id);
}

function tryToDeleteANonExistingComponent(id, moveIssuesTo) {
  return deleteComponent(id, moveIssuesTo);
}

// ---- Entity: custom field option ----

function createCustomFieldOption(fieldId, contextId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option";
  var description = "Create custom field options in context " + contextId + " for field " + fieldId;
  var body = {
    "options": "[{"disabled": false, "value": "{value}"}]",
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCustomFieldOption(fieldId, contextId, optionId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option/" + optionId;
  var description = "Delete custom field option " + optionId + " in context " + contextId + " for field " + fieldId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCustomFieldOption(fieldId, contextId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option";
  var description = "Update custom field options in context " + contextId + " for field " + fieldId;
  var body = {
    "options": "[{"id": "{id}", "disabled": false, "value": "{value}"}]",
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOptionsForContext(fieldId, contextId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option";
  var description = "Get custom field options in context " + contextId + " for field " + fieldId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomFieldOption(fieldId, contextId, optionId) {
  return createCustomFieldOption(fieldId, contextId);
}

function verifyCustomFieldOptionExists(fieldId, contextId, optionId) {
  return getOptionsForContext(fieldId, contextId);
}

function verifyCustomFieldOptionDoesNotExist(fieldId, contextId, optionId) {
  return getOptionsForContext(fieldId, contextId);
}

function tryToDeleteANonExistingCustomFieldOption(fieldId, contextId, optionId) {
  return deleteCustomFieldOption(fieldId, contextId, optionId);
}

// ---- Entity: custom field option ----

function getCustomFieldOption(id) {
  var url = "/rest/api/3/customFieldOption/" + id;
  var description = "Get custom field option " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCustomFieldOptionSingleExists(id) {
  return getCustomFieldOption(id);
}

function verifyCustomFieldOptionSingleDoesNotExist(id) {
  return getCustomFieldOption(id);
}

// ---- Entity: custom field option reorder ----

function reorderCustomFieldOptions(fieldId, contextId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option/move";
  var description = "Reorder custom field options in context " + contextId + " for field " + fieldId;
  var body = {
    "customFieldOptionIds": "["{customFieldOptionIds}"]",
    "position": position,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: custom field option replace ----

function replaceCustomFieldOption(fieldId, contextId, optionId, replaceWith, jql) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option/" + optionId + "/issue";
  var description = "Replace custom field option " + optionId + " with " + replaceWith + " in context " + contextId + " for field " + fieldId + " using JQL " + jql;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingCustomFieldOptionReplace(fieldId, contextId, optionId, replaceWith, jql) {
  return replaceCustomFieldOption(fieldId, contextId, optionId, replaceWith, jql);
}

// ---- Entity: screen ----

function createScreen() {
  var url = "/rest/api/3/screens";
  var description = "Create screen {name}";
  var body = {
    "name": name,
    "description": description,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteScreen(screenId) {
  var url = "/rest/api/3/screens/" + screenId;
  var description = "Delete screen " + screenId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateScreen(screenId) {
  var url = "/rest/api/3/screens/" + screenId;
  var description = "Update screen " + screenId + " with name {name}";
  var body = {
    "name": name,
    "description": description,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getScreens(startAt, maxResults, id, queryString, scope, orderBy) {
  var url = "/rest/api/3/screens";
  var description = "Get screens";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingScreen(screenId, startAt, maxResults, id, queryString, scope, orderBy) {
  return createScreen();
}

function verifyScreenExists(screenId, startAt, maxResults, id, queryString, scope, orderBy) {
  return getScreens(startAt, maxResults, id, queryString, scope, orderBy);
}

function verifyScreenDoesNotExist(screenId, startAt, maxResults, id, queryString, scope, orderBy) {
  return getScreens(startAt, maxResults, id, queryString, scope, orderBy);
}

function tryToDeleteANonExistingScreen(screenId, startAt, maxResults, id, queryString, scope, orderBy) {
  return deleteScreen(screenId);
}

// ---- Entity: fieldScreens ----

function getScreensForField(fieldId, startAt, maxResults, expand) {
  var url = "/rest/api/3/field/" + fieldId + "/screens";
  var description = "Get screens for field " + fieldId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyFieldScreensExists(fieldId, startAt, maxResults, expand) {
  return getScreensForField(fieldId, startAt, maxResults, expand);
}

function verifyFieldScreensDoesNotExist(fieldId, startAt, maxResults, expand) {
  return getScreensForField(fieldId, startAt, maxResults, expand);
}

// ---- Entity: fieldDefaultScreen ----

function addFieldToDefaultScreen(fieldId) {
  var url = "/rest/api/3/screens/addToDefault/" + fieldId;
  var description = "Add field " + fieldId + " to default screen";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFieldDefaultScreen(fieldId) {
  return addFieldToDefaultScreen(fieldId);
}

// ---- Entity: screenAvailableFields ----

function getAvailableScreenFields(screenId) {
  var url = "/rest/api/3/screens/" + screenId + "/availableFields";
  var description = "Get available fields for screen " + screenId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyScreenAvailableFieldsExists(screenId) {
  return getAvailableScreenFields(screenId);
}

function verifyScreenAvailableFieldsDoesNotExist(screenId) {
  return getAvailableScreenFields(screenId);
}

// ---- Entity: issue field option ----

function createIssueFieldOption(fieldKey) {
  var url = "/rest/api/3/field/" + fieldKey + "/option";
  var description = "Create issue field option with value {value} for field " + fieldKey;
  var body = {
    "config": config,
    "properties": properties,
    "value": value,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIssueFieldOption(fieldKey, optionId) {
  var url = "/rest/api/3/field/" + fieldKey + "/option/" + optionId;
  var description = "Delete issue field option " + optionId + " for field " + fieldKey;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIssueFieldOption(fieldKey, optionId) {
  var url = "/rest/api/3/field/" + fieldKey + "/option/" + optionId;
  var description = "Update issue field option " + optionId + " with value {value} for field " + fieldKey;
  var body = {
    "config": config,
    "id": optionId,
    "properties": properties,
    "value": value,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIssueFieldOption(fieldKey, optionId) {
  var url = "/rest/api/3/field/" + fieldKey + "/option/" + optionId;
  var description = "Get issue field option " + optionId + " for field " + fieldKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueFieldOption(fieldKey, optionId) {
  return createIssueFieldOption(fieldKey);
}

function verifyIssueFieldOptionExists(fieldKey, optionId) {
  return getIssueFieldOption(fieldKey, optionId);
}

function verifyIssueFieldOptionDoesNotExist(fieldKey, optionId) {
  return getIssueFieldOption(fieldKey, optionId);
}

function tryToDeleteANonExistingIssueFieldOption(fieldKey, optionId) {
  return deleteIssueFieldOption(fieldKey, optionId);
}

// ---- Entity: group ----

function createGroup() {
  var url = "/rest/api/3/group";
  var description = "Create group {name}";
  var body = {
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeGroup(groupname, groupId, swapGroup, swapGroupId) {
  var url = "/rest/api/3/group";
  var description = "Remove group " + groupname + " with id " + groupId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getGroup(groupname, groupId, expand) {
  var url = "/rest/api/3/group";
  var description = "Get group " + groupname + " with id " + groupId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingGroup(groupname, groupId, swapGroup, swapGroupId, expand) {
  return createGroup();
}

function verifyGroupExists(groupname, groupId, swapGroup, swapGroupId, expand) {
  return getGroup(groupname, groupId, expand);
}

function verifyGroupDoesNotExist(groupname, groupId, swapGroup, swapGroupId, expand) {
  return getGroup(groupname, groupId, expand);
}

function tryToDeleteANonExistingGroup(groupname, groupId, swapGroup, swapGroupId, expand) {
  return removeGroup(groupname, groupId, swapGroup, swapGroupId);
}

// ---- Entity: group member ----

function getUsersFromGroup(groupname, groupId, includeInactiveUsers, startAt, maxResults) {
  var url = "/rest/api/3/group/member";
  var description = "Get users from group " + groupname + " with id " + groupId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyGroupMemberExists(groupname, groupId, includeInactiveUsers, startAt, maxResults) {
  return getUsersFromGroup(groupname, groupId, includeInactiveUsers, startAt, maxResults);
}

function verifyGroupMemberDoesNotExist(groupname, groupId, includeInactiveUsers, startAt, maxResults) {
  return getUsersFromGroup(groupname, groupId, includeInactiveUsers, startAt, maxResults);
}

// ---- Entity: group user ----

function addUserToGroup(groupname, groupId) {
  var url = "/rest/api/3/group/user";
  var description = "Add user {accountId} to group " + groupname + " with id " + groupId;
  var body = {
    "accountId": accountId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeUserFromGroup(groupname, groupId, accountId) {
  var url = "/rest/api/3/group/user";
  var description = "Remove user " + accountId + " from group " + groupname + " with id " + groupId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingGroupUser(groupname, groupId, accountId) {
  return addUserToGroup(groupname, groupId);
}

function tryToDeleteANonExistingGroupUser(groupname, groupId, accountId) {
  return removeUserFromGroup(groupname, groupId, accountId);
}

// ---- Entity: issue search ----

function getIssuePickerResource(query, currentJQL, currentIssueKey, currentProjectId, showSubTasks, showSubTaskParent) {
  var url = "/rest/api/3/issue/picker";
  var description = "Get issue picker suggestions with query " + query;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function matchIssues() {
  var url = "/rest/api/3/jql/match";
  var description = "Match issues with JQL queries";
  var body = {
    "issueIds": issueIds,
    "jqls": jqls,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function searchForIssuesUsingJql(jql, startAt, maxResults, validateQuery, fields, expand, properties, fieldsByKeys, failFast) {
  var url = "/rest/api/3/search";
  var description = "Search for issues using JQL " + jql;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function searchForIssuesUsingJqlPost() {
  var url = "/rest/api/3/search";
  var description = "Search for issues using JQL POST";
  var body = {
    "expand": expand,
    "fields": fields,
    "fieldsByKeys": fieldsByKeys,
    "jql": jql,
    "maxResults": maxResults,
    "startAt": startAt,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function countIssues() {
  var url = "/rest/api/3/search/approximate-count";
  var description = "Count issues using JQL {jql}";
  var body = {
    "jql": jql,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function searchAndReconsileIssuesUsingJql(jql, nextPageToken, maxResults, fields, expand, properties, fieldsByKeys, failFast, reconcileIssues) {
  var url = "/rest/api/3/search/jql";
  var description = "Search for issues using JQL enhanced search " + jql;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function searchAndReconsileIssuesUsingJqlPost() {
  var url = "/rest/api/3/search/jql";
  var description = "Search for issues using JQL enhanced search POST";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIssueSearchExists(query, currentJQL, currentIssueKey, currentProjectId, showSubTasks, showSubTaskParent, jql, startAt, maxResults, validateQuery, fields, expand, properties, fieldsByKeys, failFast, nextPageToken, reconcileIssues) {
  return getIssuePickerResource(query, currentJQL, currentIssueKey, currentProjectId, showSubTasks, showSubTaskParent);
}

function verifyIssueSearchDoesNotExist(query, currentJQL, currentIssueKey, currentProjectId, showSubTasks, showSubTaskParent, jql, startAt, maxResults, validateQuery, fields, expand, properties, fieldsByKeys, failFast, nextPageToken, reconcileIssues) {
  return getIssuePickerResource(query, currentJQL, currentIssueKey, currentProjectId, showSubTasks, showSubTaskParent);
}

// ---- Entity: issue property ----

function setIssueProperty(issueIdOrKey, propertyKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/properties/" + propertyKey;
  var description = "Set issue property " + propertyKey + " for issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIssueProperty(issueIdOrKey, propertyKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/properties/" + propertyKey;
  var description = "Delete issue property " + propertyKey + " for issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIssueProperty(issueIdOrKey, propertyKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/properties/" + propertyKey;
  var description = "Get issue property " + propertyKey + " for issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueProperty(issueIdOrKey, propertyKey) {
  return setIssueProperty(issueIdOrKey, propertyKey);
}

function verifyIssuePropertyExists(issueIdOrKey, propertyKey) {
  return getIssueProperty(issueIdOrKey, propertyKey);
}

function verifyIssuePropertyDoesNotExist(issueIdOrKey, propertyKey) {
  return getIssueProperty(issueIdOrKey, propertyKey);
}

function tryToDeleteANonExistingIssueProperty(issueIdOrKey, propertyKey) {
  return deleteIssueProperty(issueIdOrKey, propertyKey);
}

// ---- Entity: issue properties bulk ----

function bulkSetIssuesPropertiesList() {
  var url = "/rest/api/3/issue/properties";
  var description = "Bulk set issues properties by list";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssuePropertiesBulk() {
  return bulkSetIssuesPropertiesList();
}

// ---- Entity: issue properties bulk by issue ----

function bulkSetIssuePropertiesByIssue() {
  var url = "/rest/api/3/issue/properties/multi";
  var description = "Bulk set issue properties by issue";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssuePropertiesBulkByIssue() {
  return bulkSetIssuePropertiesByIssue();
}

// ---- Entity: issue property bulk ----

function bulkSetIssueProperty(propertyKey) {
  var url = "/rest/api/3/issue/properties/" + propertyKey;
  var description = "Bulk set issue property " + propertyKey;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkDeleteIssueProperty(propertyKey) {
  var url = "/rest/api/3/issue/properties/" + propertyKey;
  var description = "Bulk delete issue property " + propertyKey;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssuePropertyBulk(propertyKey) {
  return bulkSetIssueProperty(propertyKey);
}

function tryToDeleteANonExistingIssuePropertyBulk(propertyKey) {
  return bulkDeleteIssueProperty(propertyKey);
}

// ---- Entity: issue property keys ----

function getIssuePropertyKeys(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/properties";
  var description = "Get issue property keys for issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIssuePropertyKeysExists(issueIdOrKey) {
  return getIssuePropertyKeys(issueIdOrKey);
}

function verifyIssuePropertyKeysDoesNotExist(issueIdOrKey) {
  return getIssuePropertyKeys(issueIdOrKey);
}

// ---- Entity: issue type ----

function createIssueType() {
  var url = "/rest/api/3/issuetype";
  var description = "Create issue type {name} with id {id}";
  var body = {
    "description": description,
    "name": name,
    "type": type,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIssueType(id, alternativeIssueTypeId) {
  var url = "/rest/api/3/issuetype/" + id;
  var description = "Delete issue type with id " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIssueType(id) {
  var url = "/rest/api/3/issuetype/" + id;
  var description = "Update issue type {name} with id " + id;
  var body = {
    "avatarId": avatarId,
    "description": description,
    "name": name,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIssueType(id) {
  var url = "/rest/api/3/issuetype/" + id;
  var description = "Get issue type with id " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueType(id, alternativeIssueTypeId) {
  return createIssueType();
}

function verifyIssueTypeExists(id, alternativeIssueTypeId) {
  return getIssueType(id);
}

function verifyIssueTypeDoesNotExist(id, alternativeIssueTypeId) {
  return getIssueType(id);
}

function tryToDeleteANonExistingIssueType(id, alternativeIssueTypeId) {
  return deleteIssueType(id, alternativeIssueTypeId);
}

// ---- Entity: jqlAutoCompleteData ----

function getAutoComplete() {
  var url = "/rest/api/3/jql/autocompletedata";
  var description = "Get field reference data";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAutoCompletePost() {
  var url = "/rest/api/3/jql/autocompletedata";
  var description = "Get field reference data with includeCollapsedFields {includeCollapsedFields} and projectIds {projectIds}";
  var body = {
    "includeCollapsedFields": includeCollapsedFields,
    "projectIds": projectIds,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingJqlAutoCompleteData() {
  return getAutoCompletePost();
}

function verifyJqlAutoCompleteDataExists() {
  return getAutoComplete();
}

function verifyJqlAutoCompleteDataDoesNotExist() {
  return getAutoComplete();
}

// ---- Entity: jqlAutoCompleteSuggestions ----

function getFieldAutoCompleteForQueryString(fieldName, fieldValue, predicateName, predicateValue) {
  var url = "/rest/api/3/jql/autocompletedata/suggestions";
  var description = "Get field auto complete suggestions for fieldName " + fieldName + ", fieldValue " + fieldValue + ", predicateName " + predicateName + ", predicateValue " + predicateValue;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyJqlAutoCompleteSuggestionsExists(fieldName, fieldValue, predicateName, predicateValue) {
  return getFieldAutoCompleteForQueryString(fieldName, fieldValue, predicateName, predicateValue);
}

function verifyJqlAutoCompleteSuggestionsDoesNotExist(fieldName, fieldValue, predicateName, predicateValue) {
  return getFieldAutoCompleteForQueryString(fieldName, fieldValue, predicateName, predicateValue);
}

// ---- Entity: jqlParse ----

function parseJqlQueries(validation) {
  var url = "/rest/api/3/jql/parse";
  var description = "Parse JQL queries with validation " + validation + " and queries {queries}";
  var body = {
    "queries": queries,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingJqlParse(validation) {
  return parseJqlQueries(validation);
}

// ---- Entity: jqlPdCleaner ----

function migrateQueries() {
  var url = "/rest/api/3/jql/pdcleaner";
  var description = "Convert user identifiers to account IDs in JQL queries with queryStrings {queryStrings}";
  var body = {
    "queryStrings": queryStrings,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingJqlPdCleaner() {
  return migrateQueries();
}

// ---- Entity: jqlSanitize ----

function sanitiseJqlQueries() {
  var url = "/rest/api/3/jql/sanitize";
  var description = "Sanitize JQL queries with queries {queries}";
  var body = {
    "queries": queries,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingJqlSanitize() {
  return sanitiseJqlQueries();
}

// ---- Entity: plan ----

function createPlan() {
  var url = "/rest/api/3/plans/plan";
  var description = "Create plan {name}";
  var body = {
    "crossProjectReleases": "[{name: "{name}", releaseIds: [...] }]",
    "customFields": "[{customFieldId: ..., filter: ...}]",
    "exclusionRules": ...,
    "issueSources": "[{type: ..., value: ...}]",
    "leadAccountId": leadAccountId,
    "name": name,
    "permissions": "[{holder: {type: ..., value: ...}, type: ...}]",
    "scheduling": ...,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPlan(planId) {
  var url = "/rest/api/3/plans/plan/" + planId;
  var description = "Get plan " + planId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePlan(planId) {
  var url = "/rest/api/3/plans/plan/" + planId;
  var description = "Update plan " + planId;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function archivePlan(planId) {
  var url = "/rest/api/3/plans/plan/" + planId + "/archive";
  var description = "Archive plan " + planId;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function duplicatePlan(planId, name) {
  var url = "/rest/api/3/plans/plan/" + planId + "/duplicate";
  var description = "Duplicate plan " + planId + " with name " + name;
  var body = {
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function trashPlan(planId) {
  var url = "/rest/api/3/plans/plan/" + planId + "/trash";
  var description = "Trash plan " + planId;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPlan(planId, name) {
  return createPlan();
}

function verifyPlanExists(planId, name) {
  return getPlan(planId);
}

function verifyPlanDoesNotExist(planId, name) {
  return getPlan(planId);
}

// ---- Entity: atlassian team ----

function addAtlassianTeam(planId, id) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/atlassian";
  var description = "Add Atlassian team with id " + id + " to plan " + planId;
  var body = {
    "id": id,
    "capacity": capacity,
    "issueSourceId": issueSourceId,
    "planningStyle": planningStyle,
    "sprintLength": sprintLength,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeAtlassianTeam(planId, atlassianTeamId) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/atlassian/" + atlassianTeamId;
  var description = "Remove Atlassian team " + atlassianTeamId + " from plan " + planId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAtlassianTeam(planId, atlassianTeamId) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/atlassian/" + atlassianTeamId;
  var description = "Get Atlassian team " + atlassianTeamId + " in plan " + planId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAtlassianTeam(planId, atlassianTeamId) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/atlassian/" + atlassianTeamId;
  var description = "Update Atlassian team " + atlassianTeamId + " in plan " + planId;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAtlassianTeam(planId, id, atlassianTeamId) {
  return addAtlassianTeam(planId, id);
}

function verifyAtlassianTeamExists(planId, id, atlassianTeamId) {
  return getAtlassianTeam(planId, atlassianTeamId);
}

function verifyAtlassianTeamDoesNotExist(planId, id, atlassianTeamId) {
  return getAtlassianTeam(planId, atlassianTeamId);
}

function tryToDeleteANonExistingAtlassianTeam(planId, id, atlassianTeamId) {
  return removeAtlassianTeam(planId, atlassianTeamId);
}

// ---- Entity: plan-only team ----

function createPlanOnlyTeam(planId, name) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/planonly";
  var description = "Create plan-only team " + name + " in plan " + planId;
  var body = {
    "name": name,
    "capacity": capacity,
    "issueSourceId": issueSourceId,
    "memberAccountIds": memberAccountIds,
    "planningStyle": planningStyle,
    "sprintLength": sprintLength,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePlanOnlyTeam(planId, planOnlyTeamId) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/planonly/" + planOnlyTeamId;
  var description = "Delete plan-only team " + planOnlyTeamId + " from plan " + planId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPlanOnlyTeam(planId, planOnlyTeamId) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/planonly/" + planOnlyTeamId;
  var description = "Get plan-only team " + planOnlyTeamId + " in plan " + planId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePlanOnlyTeam(planId, planOnlyTeamId) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/planonly/" + planOnlyTeamId;
  var description = "Update plan-only team " + planOnlyTeamId + " in plan " + planId;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPlanOnlyTeam(planId, name, planOnlyTeamId) {
  return createPlanOnlyTeam(planId, name);
}

function verifyPlanOnlyTeamExists(planId, name, planOnlyTeamId) {
  return getPlanOnlyTeam(planId, planOnlyTeamId);
}

function verifyPlanOnlyTeamDoesNotExist(planId, name, planOnlyTeamId) {
  return getPlanOnlyTeam(planId, planOnlyTeamId);
}

function tryToDeleteANonExistingPlanOnlyTeam(planId, name, planOnlyTeamId) {
  return deletePlanOnlyTeam(planId, planOnlyTeamId);
}

// ---- Entity: team ----

function getTeams(planId, cursor, maxResults) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team";
  var description = "Get teams in plan " + planId + " paginated";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTeamExists(planId, cursor, maxResults) {
  return getTeams(planId, cursor, maxResults);
}

function verifyTeamDoesNotExist(planId, cursor, maxResults) {
  return getTeams(planId, cursor, maxResults);
}

// ---- Entity: priority ----

function createPriority() {
  var url = "/rest/api/3/priority";
  var description = "Create priority {name}";
  var body = {
    "description": description,
    "iconUrl": iconUrl,
    "name": name,
    "statusColor": statusColor,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePriority(id) {
  var url = "/rest/api/3/priority/" + id;
  var description = "Delete priority " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePriority(id) {
  var url = "/rest/api/3/priority/" + id;
  var description = "Update priority " + id + " with name {name}";
  var body = {
    "description": description,
    "iconUrl": iconUrl,
    "name": name,
    "statusColor": statusColor,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPriority(id) {
  var url = "/rest/api/3/priority/" + id;
  var description = "Get priority " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPriorities() {
  var url = "/rest/api/3/priority";
  var description = "Get priorities";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function searchPriorities(startAt, maxResults, id, projectId, priorityName, onlyDefault, expand) {
  var url = "/rest/api/3/priority/search";
  var description = "Search priorities with filters";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setDefaultPriority() {
  var url = "/rest/api/3/priority/default";
  var description = "Set default priority {id}";
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

function movePriorities() {
  var url = "/rest/api/3/priority/move";
  var description = "Move priorities after {after} with ids {ids}";
  var body = {
    "after": after,
    "ids": ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPriority(id, startAt, maxResults, projectId, priorityName, onlyDefault, expand) {
  return createPriority();
}

function verifyPriorityExists(id, startAt, maxResults, projectId, priorityName, onlyDefault, expand) {
  return getPriority(id);
}

function verifyPriorityDoesNotExist(id, startAt, maxResults, projectId, priorityName, onlyDefault, expand) {
  return getPriority(id);
}

function tryToDeleteANonExistingPriority(id, startAt, maxResults, projectId, priorityName, onlyDefault, expand) {
  return deletePriority(id);
}
