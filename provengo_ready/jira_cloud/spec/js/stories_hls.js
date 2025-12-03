// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// Story: crud:Issue:nondet:1:1
bthread("crud:Issue:nondet:1:1", function () {
  let fields = {};
  let historyMetadata = "historyMetadata_200";
  let id = 200;
  let issueIdOrKey = 200;
  let key = "key_200";
  let properties = "properties_200";
  let summary = "summary_200";
  let transition = "transition_200";
  let update = {};
  createIssue(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  waitForIssueAdded(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  tryToAddExistingIssue(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  verifyIssueExists(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  editIssue(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  deleteIssue(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  tryToDeleteANonExistingIssue(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  verifyIssueDoesNotExist(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
});

// Story: crud:Issue:nondet:1:2
bthread("crud:Issue:nondet:1:2", function () {
  let fields = {};
  let historyMetadata = "historyMetadata_201";
  let id = 201;
  let issueIdOrKey = 201;
  let key = "key_201";
  let properties = "properties_201";
  let summary = "summary_201";
  let transition = "transition_201";
  let update = {};
  createIssue(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  // waitForIssueAdded(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  tryToAddExistingIssue(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  editIssue(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  verifyIssueExists(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  deleteIssue(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  tryToDeleteANonExistingIssue(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  verifyIssueDoesNotExist(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
});

// Story: crud:Issue:nondet:negative:dup-add
bthread("crud:Issue:nondet:negative:dup-add", function () {
  let fields = {};
  let historyMetadata = "historyMetadata_206";
  let id = 206;
  let issueIdOrKey = 206;
  let key = "key_206";
  let properties = "properties_206";
  let summary = "summary_206";
  let transition = "transition_206";
  let update = {};
  createIssue(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  // waitForIssueAdded(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  verifyIssueExists(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  tryToAddExistingIssue(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
  verifyIssueExists(fields, historyMetadata, id, issueIdOrKey, key, properties, summary, transition, update);
});

// Story: crud:Event:read_only
bthread("crud:Event:read_only", function () {

  verifyEventExists();
});

// Story: crud:IssueChangelog:read_only
bthread("crud:IssueChangelog:read_only", function () {
  let changelogIds = "changelogIds_240";
  let issueIdOrKey;
  verifyIssueChangelogExists(changelogIds, issueIdOrKey);
});

// Story: crud:IssueEditMeta:read_only
bthread("crud:IssueEditMeta:read_only", function () {
  let issueIdOrKey;
  verifyIssueEditMetaExists(issueIdOrKey);
});

// Story: crud:IssueTransition:read_only
bthread("crud:IssueTransition:read_only", function () {
  let fields = {};
  let historyMetadata = "historyMetadata_270";
  let issueIdOrKey;
  let properties = "properties_270";
  let transition = "transition_270";
  let transitionId = 270;
  let update = {};
  verifyIssueTransitionExists(fields, historyMetadata, issueIdOrKey, properties, transition, transitionId, update);
});

// Story: crud:Workflow:nondet:1:1
bthread("crud:Workflow:nondet:1:1", function () {
  let entityId = 300;
  let expand = "expand_300";
  let id = 300;
  let isActive = "isActive_300";
  let issueTypeIds;
  let maxResults = "maxResults_300";
  let name = "name_300";
  let orderBy = "orderBy_300";
  let projectId;
  let queryString = "queryString_300";
  let scope = "scope_300";
  let startAt = "startAt_300";
  let workflowIds = "workflowIds_300";
  let workflowNames = "workflowNames_300";
  // Dependency Barrier
  let deps = {};
  deps["issueTypeIds"] = matchAnyIssueAdded();
  deps["issueTypeIds"] = matchAnyIssueTypeAdded();
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"issueTypeIds": "id", "projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueTypeIds = captured["issueTypeIds"];
  issueTypeIds = captured["issueTypeIds"];
  projectId = captured["projectId"];
  readWorkflowPreviews(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  waitForWorkflowAdded(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  tryToAddExistingWorkflow(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  verifyWorkflowExists(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  updateWorkflows(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  deleteInactiveWorkflow(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  tryToDeleteANonExistingWorkflow(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  verifyWorkflowDoesNotExist(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
});

// Story: crud:Workflow:nondet:1:2
bthread("crud:Workflow:nondet:1:2", function () {
  let entityId = 301;
  let expand = "expand_301";
  let id = 301;
  let isActive = "isActive_301";
  let issueTypeIds;
  let maxResults = "maxResults_301";
  let name = "name_301";
  let orderBy = "orderBy_301";
  let projectId;
  let queryString = "queryString_301";
  let scope = "scope_301";
  let startAt = "startAt_301";
  let workflowIds = "workflowIds_301";
  let workflowNames = "workflowNames_301";
  // Dependency Barrier
  let deps = {};
  deps["issueTypeIds"] = matchAnyIssueAdded();
  deps["issueTypeIds"] = matchAnyIssueTypeAdded();
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"issueTypeIds": "id", "projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueTypeIds = captured["issueTypeIds"];
  issueTypeIds = captured["issueTypeIds"];
  projectId = captured["projectId"];
  readWorkflowPreviews(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  // waitForWorkflowAdded(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  tryToAddExistingWorkflow(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  updateWorkflows(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  verifyWorkflowExists(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  deleteInactiveWorkflow(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  tryToDeleteANonExistingWorkflow(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  verifyWorkflowDoesNotExist(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
});

// Story: crud:Workflow:nondet:negative:dup-add
bthread("crud:Workflow:nondet:negative:dup-add", function () {
  let entityId = 306;
  let expand = "expand_306";
  let id = 306;
  let isActive = "isActive_306";
  let issueTypeIds;
  let maxResults = "maxResults_306";
  let name = "name_306";
  let orderBy = "orderBy_306";
  let projectId;
  let queryString = "queryString_306";
  let scope = "scope_306";
  let startAt = "startAt_306";
  let workflowIds = "workflowIds_306";
  let workflowNames = "workflowNames_306";
  // Dependency Barrier
  let deps = {};
  deps["issueTypeIds"] = matchAnyIssueAdded();
  deps["issueTypeIds"] = matchAnyIssueTypeAdded();
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"issueTypeIds": "id", "projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueTypeIds = captured["issueTypeIds"];
  issueTypeIds = captured["issueTypeIds"];
  projectId = captured["projectId"];
  readWorkflowPreviews(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  // waitForWorkflowAdded(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  verifyWorkflowExists(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  tryToAddExistingWorkflow(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
  verifyWorkflowExists(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
});

// Story: crud:WorkflowsBulk:read_only
bthread("crud:WorkflowsBulk:read_only", function () {
  let scope = "scope_310";
  let statuses = "statuses_310";
  let useApprovalConfiguration = "useApprovalConfiguration_310";
  let workflows = "workflows_310";
  verifyWorkflowsBulkExists(scope, statuses, useApprovalConfiguration, workflows);
});

// Story: crud:IssueSecurityScheme:nondet:1:1
bthread("crud:IssueSecurityScheme:nondet:1:1", function () {
  let description = "description_320";
  let id = 320;
  let levels = "levels_320";
  let name = "name_320";
  let schemeId = 320;
  createIssueSecurityScheme(description, id, levels, name, schemeId);
  waitForIssueSecuritySchemeAdded(description, id, levels, name, schemeId);
  tryToAddExistingIssueSecurityScheme(description, id, levels, name, schemeId);
  verifyIssueSecuritySchemeExists(description, id, levels, name, schemeId);
  updateIssueSecurityScheme(description, id, levels, name, schemeId);
  deleteSecurityScheme(description, id, levels, name, schemeId);
  tryToDeleteANonExistingIssueSecurityScheme(description, id, levels, name, schemeId);
  verifyIssueSecuritySchemeDoesNotExist(description, id, levels, name, schemeId);
});

// Story: crud:IssueSecurityScheme:nondet:1:2
bthread("crud:IssueSecurityScheme:nondet:1:2", function () {
  let description = "description_321";
  let id = 321;
  let levels = "levels_321";
  let name = "name_321";
  let schemeId = 321;
  createIssueSecurityScheme(description, id, levels, name, schemeId);
  // waitForIssueSecuritySchemeAdded(description, id, levels, name, schemeId);
  tryToAddExistingIssueSecurityScheme(description, id, levels, name, schemeId);
  updateIssueSecurityScheme(description, id, levels, name, schemeId);
  verifyIssueSecuritySchemeExists(description, id, levels, name, schemeId);
  deleteSecurityScheme(description, id, levels, name, schemeId);
  tryToDeleteANonExistingIssueSecurityScheme(description, id, levels, name, schemeId);
  verifyIssueSecuritySchemeDoesNotExist(description, id, levels, name, schemeId);
});

// Story: crud:IssueSecurityScheme:nondet:negative:dup-add
bthread("crud:IssueSecurityScheme:nondet:negative:dup-add", function () {
  let description = "description_326";
  let id = 326;
  let levels = "levels_326";
  let name = "name_326";
  let schemeId = 326;
  createIssueSecurityScheme(description, id, levels, name, schemeId);
  // waitForIssueSecuritySchemeAdded(description, id, levels, name, schemeId);
  verifyIssueSecuritySchemeExists(description, id, levels, name, schemeId);
  tryToAddExistingIssueSecurityScheme(description, id, levels, name, schemeId);
  verifyIssueSecuritySchemeExists(description, id, levels, name, schemeId);
});

// Story: crud:IssueSecurityLevel:nondet:1:1
bthread("crud:IssueSecurityLevel:nondet:1:1", function () {
  let levelId = 330;
  let name = "name_330";
  let schemeId = 330;
  addSecurityLevel(levelId, name, schemeId);
  waitForIssueSecurityLevelAdded(levelId, name, schemeId);
  tryToAddExistingIssueSecurityLevel(levelId, name, schemeId);
  verifyIssueSecurityLevelExists(levelId, name, schemeId);
  updateSecurityLevel(levelId, name, schemeId);
  removeLevel(levelId, name, schemeId);
  tryToDeleteANonExistingIssueSecurityLevel(levelId, name, schemeId);
  verifyIssueSecurityLevelDoesNotExist(levelId, name, schemeId);
});

// Story: crud:IssueSecurityLevel:nondet:1:2
bthread("crud:IssueSecurityLevel:nondet:1:2", function () {
  let levelId = 331;
  let name = "name_331";
  let schemeId = 331;
  addSecurityLevel(levelId, name, schemeId);
  // waitForIssueSecurityLevelAdded(levelId, name, schemeId);
  tryToAddExistingIssueSecurityLevel(levelId, name, schemeId);
  updateSecurityLevel(levelId, name, schemeId);
  verifyIssueSecurityLevelExists(levelId, name, schemeId);
  removeLevel(levelId, name, schemeId);
  tryToDeleteANonExistingIssueSecurityLevel(levelId, name, schemeId);
  verifyIssueSecurityLevelDoesNotExist(levelId, name, schemeId);
});

// Story: crud:IssueSecurityLevel:nondet:negative:dup-add
bthread("crud:IssueSecurityLevel:nondet:negative:dup-add", function () {
  let levelId = 336;
  let name = "name_336";
  let schemeId = 336;
  addSecurityLevel(levelId, name, schemeId);
  // waitForIssueSecurityLevelAdded(levelId, name, schemeId);
  verifyIssueSecurityLevelExists(levelId, name, schemeId);
  tryToAddExistingIssueSecurityLevel(levelId, name, schemeId);
  verifyIssueSecurityLevelExists(levelId, name, schemeId);
});

// Story: crud:IssueSecurityLevelMember:nondet:1:1
bthread("crud:IssueSecurityLevelMember:nondet:1:1", function () {
  let id = 340;
  let levelId = 340;
  let memberId = 340;
  let schemeId = 340;
  addSecurityLevelMembers(id, levelId, memberId, schemeId);
  waitForIssueSecurityLevelMemberAdded(id, levelId, memberId, schemeId);
  tryToAddExistingIssueSecurityLevelMember(id, levelId, memberId, schemeId);
  verifyIssueSecurityLevelMemberExists(id, levelId, memberId, schemeId);
  removeMemberFromSecurityLevel(id, levelId, memberId, schemeId);
  tryToDeleteANonExistingIssueSecurityLevelMember(id, levelId, memberId, schemeId);
  verifyIssueSecurityLevelMemberDoesNotExist(id, levelId, memberId, schemeId);
});

// Story: crud:IssueSecurityLevelMember:nondet:1:2
bthread("crud:IssueSecurityLevelMember:nondet:1:2", function () {
  let id = 341;
  let levelId = 341;
  let memberId = 341;
  let schemeId = 341;
  addSecurityLevelMembers(id, levelId, memberId, schemeId);
  // waitForIssueSecurityLevelMemberAdded(id, levelId, memberId, schemeId);
  tryToAddExistingIssueSecurityLevelMember(id, levelId, memberId, schemeId);
  verifyIssueSecurityLevelMemberExists(id, levelId, memberId, schemeId);
  removeMemberFromSecurityLevel(id, levelId, memberId, schemeId);
  tryToDeleteANonExistingIssueSecurityLevelMember(id, levelId, memberId, schemeId);
  verifyIssueSecurityLevelMemberDoesNotExist(id, levelId, memberId, schemeId);
});

// Story: crud:IssueSecurityLevelMember:nondet:negative:dup-add
bthread("crud:IssueSecurityLevelMember:nondet:negative:dup-add", function () {
  let id = 346;
  let levelId = 346;
  let memberId = 346;
  let schemeId = 346;
  addSecurityLevelMembers(id, levelId, memberId, schemeId);
  // waitForIssueSecurityLevelMemberAdded(id, levelId, memberId, schemeId);
  verifyIssueSecurityLevelMemberExists(id, levelId, memberId, schemeId);
  tryToAddExistingIssueSecurityLevelMember(id, levelId, memberId, schemeId);
  verifyIssueSecurityLevelMemberExists(id, levelId, memberId, schemeId);
});

// Story: crud:IssueSecuritySchemeProject:read_only
bthread("crud:IssueSecuritySchemeProject:read_only", function () {
  let projectId;
  let schemeId = 350;
  verifyIssueSecuritySchemeProjectExists(projectId, schemeId);
});

// Story: crud:Version:nondet:1:1
bthread("crud:Version:nondet:1:1", function () {
  let approvers = "approvers_370";
  let archived = "archived_370";
  let description = "description_370";
  let driver = "driver_370";
  let expand = "expand_370";
  let id = 370;
  let issuesStatusForFixVersion = "issuesStatusForFixVersion_370";
  let moveAffectedIssuesTo = "moveAffectedIssuesTo_370";
  let moveFixIssuesTo = "moveFixIssuesTo_370";
  let moveUnfixedIssuesTo = "moveUnfixedIssuesTo_370";
  let name = "name_370";
  let operations = "operations_370";
  let overdue = "overdue_370";
  let project = "project_370";
  let projectId;
  let releaseDate = "releaseDate_370";
  let released = "released_370";
  let self = "self_370";
  let startDate = "startDate_370";
  let userReleaseDate = "userReleaseDate_370";
  let userStartDate = "userStartDate_370";
  // Dependency Barrier
  let deps = {};
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  projectId = captured["projectId"];
  createVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  waitForVersionAdded(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  tryToAddExistingVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  verifyVersionExists(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  updateVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  deleteVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  tryToDeleteANonExistingVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  verifyVersionDoesNotExist(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
});

// Story: crud:Version:nondet:1:2
bthread("crud:Version:nondet:1:2", function () {
  let approvers = "approvers_371";
  let archived = "archived_371";
  let description = "description_371";
  let driver = "driver_371";
  let expand = "expand_371";
  let id = 371;
  let issuesStatusForFixVersion = "issuesStatusForFixVersion_371";
  let moveAffectedIssuesTo = "moveAffectedIssuesTo_371";
  let moveFixIssuesTo = "moveFixIssuesTo_371";
  let moveUnfixedIssuesTo = "moveUnfixedIssuesTo_371";
  let name = "name_371";
  let operations = "operations_371";
  let overdue = "overdue_371";
  let project = "project_371";
  let projectId;
  let releaseDate = "releaseDate_371";
  let released = "released_371";
  let self = "self_371";
  let startDate = "startDate_371";
  let userReleaseDate = "userReleaseDate_371";
  let userStartDate = "userStartDate_371";
  // Dependency Barrier
  let deps = {};
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  projectId = captured["projectId"];
  createVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  // waitForVersionAdded(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  tryToAddExistingVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  updateVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  verifyVersionExists(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  deleteVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  tryToDeleteANonExistingVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  verifyVersionDoesNotExist(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
});

// Story: crud:Version:nondet:negative:dup-add
bthread("crud:Version:nondet:negative:dup-add", function () {
  let approvers = "approvers_376";
  let archived = "archived_376";
  let description = "description_376";
  let driver = "driver_376";
  let expand = "expand_376";
  let id = 376;
  let issuesStatusForFixVersion = "issuesStatusForFixVersion_376";
  let moveAffectedIssuesTo = "moveAffectedIssuesTo_376";
  let moveFixIssuesTo = "moveFixIssuesTo_376";
  let moveUnfixedIssuesTo = "moveUnfixedIssuesTo_376";
  let name = "name_376";
  let operations = "operations_376";
  let overdue = "overdue_376";
  let project = "project_376";
  let projectId;
  let releaseDate = "releaseDate_376";
  let released = "released_376";
  let self = "self_376";
  let startDate = "startDate_376";
  let userReleaseDate = "userReleaseDate_376";
  let userStartDate = "userStartDate_376";
  // Dependency Barrier
  let deps = {};
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  projectId = captured["projectId"];
  createVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  // waitForVersionAdded(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  verifyVersionExists(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  tryToAddExistingVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
  verifyVersionExists(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
});

// Story: crud:ProjectVersions:read_only
bthread("crud:ProjectVersions:read_only", function () {
  let expand = "expand_380";
  let maxResults = "maxResults_380";
  let orderBy = "orderBy_380";
  let projectIdOrKey;
  let query = "query_380";
  let startAt = "startAt_380";
  let status = "status_380";
  verifyProjectVersionsExists(expand, maxResults, orderBy, projectIdOrKey, query, startAt, status);
});

// Story: crud:VersionRelatedWork:read_only
bthread("crud:VersionRelatedWork:read_only", function () {
  let category = "category_410";
  let id = 410;
  let issueId;
  let relatedWorkId;
  let title = "title_410";
  let url = "url_410";
  verifyVersionRelatedWorkExists(category, id, issueId, relatedWorkId, title, url);
});

// Story: crud:VersionRelatedIssuesCount:read_only
bthread("crud:VersionRelatedIssuesCount:read_only", function () {
  let id = 430;
  verifyVersionRelatedIssuesCountExists(id);
});

// Story: crud:VersionUnresolvedIssuesCount:read_only
bthread("crud:VersionUnresolvedIssuesCount:read_only", function () {
  let id = 440;
  verifyVersionUnresolvedIssuesCountExists(id);
});

// Story: crud:Dashboard:nondet:1:1
bthread("crud:Dashboard:nondet:1:1", function () {
  let description = "description_460";
  let editPermissions = "editPermissions_460";
  let id = 460;
  let name = "name_460";
  let sharePermissions = "sharePermissions_460";
  createDashboard(description, editPermissions, id, name, sharePermissions);
  waitForDashboardAdded(description, editPermissions, id, name, sharePermissions);
  tryToAddExistingDashboard(description, editPermissions, id, name, sharePermissions);
  verifyDashboardExists(description, editPermissions, id, name, sharePermissions);
  updateDashboard(description, editPermissions, id, name, sharePermissions);
  deleteDashboard(description, editPermissions, id, name, sharePermissions);
  tryToDeleteANonExistingDashboard(description, editPermissions, id, name, sharePermissions);
  verifyDashboardDoesNotExist(description, editPermissions, id, name, sharePermissions);
});

// Story: crud:Dashboard:nondet:1:2
bthread("crud:Dashboard:nondet:1:2", function () {
  let description = "description_461";
  let editPermissions = "editPermissions_461";
  let id = 461;
  let name = "name_461";
  let sharePermissions = "sharePermissions_461";
  createDashboard(description, editPermissions, id, name, sharePermissions);
  // waitForDashboardAdded(description, editPermissions, id, name, sharePermissions);
  tryToAddExistingDashboard(description, editPermissions, id, name, sharePermissions);
  updateDashboard(description, editPermissions, id, name, sharePermissions);
  verifyDashboardExists(description, editPermissions, id, name, sharePermissions);
  deleteDashboard(description, editPermissions, id, name, sharePermissions);
  tryToDeleteANonExistingDashboard(description, editPermissions, id, name, sharePermissions);
  verifyDashboardDoesNotExist(description, editPermissions, id, name, sharePermissions);
});

// Story: crud:Dashboard:nondet:negative:dup-add
bthread("crud:Dashboard:nondet:negative:dup-add", function () {
  let description = "description_466";
  let editPermissions = "editPermissions_466";
  let id = 466;
  let name = "name_466";
  let sharePermissions = "sharePermissions_466";
  createDashboard(description, editPermissions, id, name, sharePermissions);
  // waitForDashboardAdded(description, editPermissions, id, name, sharePermissions);
  verifyDashboardExists(description, editPermissions, id, name, sharePermissions);
  tryToAddExistingDashboard(description, editPermissions, id, name, sharePermissions);
  verifyDashboardExists(description, editPermissions, id, name, sharePermissions);
});

// Story: crud:DashboardGadget:nondet:1:1
bthread("crud:DashboardGadget:nondet:1:1", function () {
  let color = "color_470";
  let dashboardId;
  let gadgetId = 470;
  let ignoreUriAndModuleKeyValidation = "ignoreUriAndModuleKeyValidation_470";
  let moduleKey = "moduleKey_470";
  let position = "position_470";
  let title = "title_470";
  let uri = "uri_470";
  // Dependency Barrier
  let deps = {};
  deps["dashboardId"] = matchAnyDashboardAdded();
  let pkMap = {"dashboardId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  dashboardId = captured["dashboardId"];
  addGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  waitForDashboardGadgetAdded(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  tryToAddExistingDashboardGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  verifyDashboardGadgetExists(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  updateGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  removeGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  tryToDeleteANonExistingDashboardGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  verifyDashboardGadgetDoesNotExist(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
});

// Story: crud:DashboardGadget:nondet:1:2
bthread("crud:DashboardGadget:nondet:1:2", function () {
  let color = "color_471";
  let dashboardId;
  let gadgetId = 471;
  let ignoreUriAndModuleKeyValidation = "ignoreUriAndModuleKeyValidation_471";
  let moduleKey = "moduleKey_471";
  let position = "position_471";
  let title = "title_471";
  let uri = "uri_471";
  // Dependency Barrier
  let deps = {};
  deps["dashboardId"] = matchAnyDashboardAdded();
  let pkMap = {"dashboardId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  dashboardId = captured["dashboardId"];
  addGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  // waitForDashboardGadgetAdded(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  tryToAddExistingDashboardGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  updateGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  verifyDashboardGadgetExists(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  removeGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  tryToDeleteANonExistingDashboardGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  verifyDashboardGadgetDoesNotExist(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
});

// Story: crud:DashboardGadget:nondet:negative:dup-add
bthread("crud:DashboardGadget:nondet:negative:dup-add", function () {
  let color = "color_476";
  let dashboardId;
  let gadgetId = 476;
  let ignoreUriAndModuleKeyValidation = "ignoreUriAndModuleKeyValidation_476";
  let moduleKey = "moduleKey_476";
  let position = "position_476";
  let title = "title_476";
  let uri = "uri_476";
  // Dependency Barrier
  let deps = {};
  deps["dashboardId"] = matchAnyDashboardAdded();
  let pkMap = {"dashboardId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  dashboardId = captured["dashboardId"];
  addGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  // waitForDashboardGadgetAdded(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  verifyDashboardGadgetExists(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  tryToAddExistingDashboardGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
  verifyDashboardGadgetExists(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
});

// Story: crud:DashboardItemProperty:read_only
bthread("crud:DashboardItemProperty:read_only", function () {
  let dashboardId;
  let itemId = 480;
  let propertyKey = "propertyKey_480";
  verifyDashboardItemPropertyExists(dashboardId, itemId, propertyKey);
});

// Story: crud:CustomFieldContext:nondet:1:1
bthread("crud:CustomFieldContext:nondet:1:1", function () {
  let contextId = 490;
  let description = "description_490";
  let fieldId = 490;
  let id = 490;
  let isAnyIssueType = "isAnyIssueType_490";
  let isGlobalContext = "isGlobalContext_490";
  let issueTypeIds;
  let maxResults = "maxResults_490";
  let name = "name_490";
  let projectIds;
  let startAt = "startAt_490";
  // Dependency Barrier
  let deps = {};
  deps["issueTypeIds"] = matchAnyIssueAdded();
  deps["issueTypeIds"] = matchAnyIssueTypeAdded();
  deps["projectIds"] = matchAnyProjectAdded();
  let pkMap = {"issueTypeIds": "id", "projectIds": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueTypeIds = captured["issueTypeIds"];
  issueTypeIds = captured["issueTypeIds"];
  projectIds = captured["projectIds"];
  createCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  waitForCustomFieldContextAdded(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  tryToAddExistingCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  verifyCustomFieldContextExists(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  updateCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  deleteCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  tryToDeleteANonExistingCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  verifyCustomFieldContextDoesNotExist(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
});

// Story: crud:CustomFieldContext:nondet:1:2
bthread("crud:CustomFieldContext:nondet:1:2", function () {
  let contextId = 491;
  let description = "description_491";
  let fieldId = 491;
  let id = 491;
  let isAnyIssueType = "isAnyIssueType_491";
  let isGlobalContext = "isGlobalContext_491";
  let issueTypeIds;
  let maxResults = "maxResults_491";
  let name = "name_491";
  let projectIds;
  let startAt = "startAt_491";
  // Dependency Barrier
  let deps = {};
  deps["issueTypeIds"] = matchAnyIssueAdded();
  deps["issueTypeIds"] = matchAnyIssueTypeAdded();
  deps["projectIds"] = matchAnyProjectAdded();
  let pkMap = {"issueTypeIds": "id", "projectIds": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueTypeIds = captured["issueTypeIds"];
  issueTypeIds = captured["issueTypeIds"];
  projectIds = captured["projectIds"];
  createCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  // waitForCustomFieldContextAdded(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  tryToAddExistingCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  updateCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  verifyCustomFieldContextExists(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  deleteCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  tryToDeleteANonExistingCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  verifyCustomFieldContextDoesNotExist(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
});

// Story: crud:CustomFieldContext:nondet:negative:dup-add
bthread("crud:CustomFieldContext:nondet:negative:dup-add", function () {
  let contextId = 496;
  let description = "description_496";
  let fieldId = 496;
  let id = 496;
  let isAnyIssueType = "isAnyIssueType_496";
  let isGlobalContext = "isGlobalContext_496";
  let issueTypeIds;
  let maxResults = "maxResults_496";
  let name = "name_496";
  let projectIds;
  let startAt = "startAt_496";
  // Dependency Barrier
  let deps = {};
  deps["issueTypeIds"] = matchAnyIssueAdded();
  deps["issueTypeIds"] = matchAnyIssueTypeAdded();
  deps["projectIds"] = matchAnyProjectAdded();
  let pkMap = {"issueTypeIds": "id", "projectIds": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueTypeIds = captured["issueTypeIds"];
  issueTypeIds = captured["issueTypeIds"];
  projectIds = captured["projectIds"];
  createCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  // waitForCustomFieldContextAdded(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  verifyCustomFieldContextExists(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  tryToAddExistingCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
  verifyCustomFieldContextExists(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
});

// Story: crud:CustomFieldContextDefaultValue:read_only
bthread("crud:CustomFieldContextDefaultValue:read_only", function () {
  let contextId = 500;
  let fieldId = 500;
  let maxResults = "maxResults_500";
  let startAt = "startAt_500";
  verifyCustomFieldContextDefaultValueExists(contextId, fieldId, maxResults, startAt);
});

// Story: crud:CustomFieldContextIssueTypeMapping:read_only
bthread("crud:CustomFieldContextIssueTypeMapping:read_only", function () {
  let contextId = 510;
  let fieldId = 510;
  let maxResults = "maxResults_510";
  let startAt = "startAt_510";
  verifyCustomFieldContextIssueTypeMappingExists(contextId, fieldId, maxResults, startAt);
});

// Story: crud:CustomFieldContextProjectMapping:read_only
bthread("crud:CustomFieldContextProjectMapping:read_only", function () {
  let contextId = 520;
  let fieldId = 520;
  let maxResults = "maxResults_520";
  let startAt = "startAt_520";
  verifyCustomFieldContextProjectMappingExists(contextId, fieldId, maxResults, startAt);
});

// Story: crud:CustomFieldContextIssueType:nondet:1:1
bthread("crud:CustomFieldContextIssueType:nondet:1:1", function () {
  let contextId = 530;
  let fieldId = 530;
  addIssueTypesToContext(contextId, fieldId);
  waitForCustomFieldContextIssueTypeAdded(contextId, fieldId);
  tryToAddExistingCustomFieldContextIssueType(contextId, fieldId);
  verifyCustomFieldContextIssueTypeExists(contextId, fieldId);
  removeIssueTypesFromContext(contextId, fieldId);
  tryToDeleteANonExistingCustomFieldContextIssueType(contextId, fieldId);
  verifyCustomFieldContextIssueTypeDoesNotExist(contextId, fieldId);
});

// Story: crud:CustomFieldContextIssueType:nondet:1:2
bthread("crud:CustomFieldContextIssueType:nondet:1:2", function () {
  let contextId = 531;
  let fieldId = 531;
  addIssueTypesToContext(contextId, fieldId);
  // waitForCustomFieldContextIssueTypeAdded(contextId, fieldId);
  tryToAddExistingCustomFieldContextIssueType(contextId, fieldId);
  verifyCustomFieldContextIssueTypeExists(contextId, fieldId);
  removeIssueTypesFromContext(contextId, fieldId);
  tryToDeleteANonExistingCustomFieldContextIssueType(contextId, fieldId);
  verifyCustomFieldContextIssueTypeDoesNotExist(contextId, fieldId);
});

// Story: crud:CustomFieldContextIssueType:nondet:negative:dup-add
bthread("crud:CustomFieldContextIssueType:nondet:negative:dup-add", function () {
  let contextId = 536;
  let fieldId = 536;
  addIssueTypesToContext(contextId, fieldId);
  // waitForCustomFieldContextIssueTypeAdded(contextId, fieldId);
  verifyCustomFieldContextIssueTypeExists(contextId, fieldId);
  tryToAddExistingCustomFieldContextIssueType(contextId, fieldId);
  verifyCustomFieldContextIssueTypeExists(contextId, fieldId);
});

// Story: crud:CustomFieldContextProject:nondet:1:1
bthread("crud:CustomFieldContextProject:nondet:1:1", function () {
  let contextId = 540;
  let fieldId = 540;
  assignProjectsToCustomFieldContext(contextId, fieldId);
  waitForCustomFieldContextProjectAdded(contextId, fieldId);
  tryToAddExistingCustomFieldContextProject(contextId, fieldId);
  verifyCustomFieldContextProjectExists(contextId, fieldId);
  removeCustomFieldContextFromProjects(contextId, fieldId);
  tryToDeleteANonExistingCustomFieldContextProject(contextId, fieldId);
  verifyCustomFieldContextProjectDoesNotExist(contextId, fieldId);
});

// Story: crud:CustomFieldContextProject:nondet:1:2
bthread("crud:CustomFieldContextProject:nondet:1:2", function () {
  let contextId = 541;
  let fieldId = 541;
  assignProjectsToCustomFieldContext(contextId, fieldId);
  // waitForCustomFieldContextProjectAdded(contextId, fieldId);
  tryToAddExistingCustomFieldContextProject(contextId, fieldId);
  verifyCustomFieldContextProjectExists(contextId, fieldId);
  removeCustomFieldContextFromProjects(contextId, fieldId);
  tryToDeleteANonExistingCustomFieldContextProject(contextId, fieldId);
  verifyCustomFieldContextProjectDoesNotExist(contextId, fieldId);
});

// Story: crud:CustomFieldContextProject:nondet:negative:dup-add
bthread("crud:CustomFieldContextProject:nondet:negative:dup-add", function () {
  let contextId = 546;
  let fieldId = 546;
  assignProjectsToCustomFieldContext(contextId, fieldId);
  // waitForCustomFieldContextProjectAdded(contextId, fieldId);
  verifyCustomFieldContextProjectExists(contextId, fieldId);
  tryToAddExistingCustomFieldContextProject(contextId, fieldId);
  verifyCustomFieldContextProjectExists(contextId, fieldId);
});

// Story: crud:Project:nondet:1:1
bthread("crud:Project:nondet:1:1", function () {
  let assigneeType = "assigneeType_550";
  let avatarId;
  let categoryId = 550;
  let description = "description_550";
  let fieldConfigurationScheme = 550;
  let issueSecurityScheme = 550;
  let issueTypeScheme = 550;
  let issueTypeScreenScheme = 550;
  let key = "key_550";
  let lead = "lead_550";
  let leadAccountId = 550;
  let name = "name_550";
  let notificationScheme = 550;
  let permissionScheme = 550;
  let projectIdOrKey = 550;
  let projectTemplateKey = "projectTemplateKey_550";
  let projectTypeKey = "projectTypeKey_550";
  let url = "url_550";
  let workflowScheme = 550;
  // Dependency Barrier
  let deps = {};
  deps["avatarId"] = matchAnyAvatarAdded();
  let pkMap = {"avatarId": "type"};
  let captured = resolveDependencies(deps, pkMap);
  avatarId = captured["avatarId"];
  createProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  waitForProjectAdded(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  tryToAddExistingProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  verifyProjectExists(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  updateProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  deleteProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  tryToDeleteANonExistingProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  verifyProjectDoesNotExist(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
});

// Story: crud:Project:nondet:1:2
bthread("crud:Project:nondet:1:2", function () {
  let assigneeType = "assigneeType_551";
  let avatarId;
  let categoryId = 551;
  let description = "description_551";
  let fieldConfigurationScheme = 551;
  let issueSecurityScheme = 551;
  let issueTypeScheme = 551;
  let issueTypeScreenScheme = 551;
  let key = "key_551";
  let lead = "lead_551";
  let leadAccountId = 551;
  let name = "name_551";
  let notificationScheme = 551;
  let permissionScheme = 551;
  let projectIdOrKey = 551;
  let projectTemplateKey = "projectTemplateKey_551";
  let projectTypeKey = "projectTypeKey_551";
  let url = "url_551";
  let workflowScheme = 551;
  // Dependency Barrier
  let deps = {};
  deps["avatarId"] = matchAnyAvatarAdded();
  let pkMap = {"avatarId": "type"};
  let captured = resolveDependencies(deps, pkMap);
  avatarId = captured["avatarId"];
  createProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  // waitForProjectAdded(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  tryToAddExistingProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  updateProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  verifyProjectExists(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  deleteProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  tryToDeleteANonExistingProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  verifyProjectDoesNotExist(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
});

// Story: crud:Project:nondet:negative:dup-add
bthread("crud:Project:nondet:negative:dup-add", function () {
  let assigneeType = "assigneeType_556";
  let avatarId;
  let categoryId = 556;
  let description = "description_556";
  let fieldConfigurationScheme = 556;
  let issueSecurityScheme = 556;
  let issueTypeScheme = 556;
  let issueTypeScreenScheme = 556;
  let key = "key_556";
  let lead = "lead_556";
  let leadAccountId = 556;
  let name = "name_556";
  let notificationScheme = 556;
  let permissionScheme = 556;
  let projectIdOrKey = 556;
  let projectTemplateKey = "projectTemplateKey_556";
  let projectTypeKey = "projectTypeKey_556";
  let url = "url_556";
  let workflowScheme = 556;
  // Dependency Barrier
  let deps = {};
  deps["avatarId"] = matchAnyAvatarAdded();
  let pkMap = {"avatarId": "type"};
  let captured = resolveDependencies(deps, pkMap);
  avatarId = captured["avatarId"];
  createProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  // waitForProjectAdded(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  verifyProjectExists(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  tryToAddExistingProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
  verifyProjectExists(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
});

// Story: crud:FieldConfiguration:nondet:1:1
bthread("crud:FieldConfiguration:nondet:1:1", function () {
  let description = "description_560";
  let id = 560;
  let isDefault = "isDefault_560";
  let maxResults = "maxResults_560";
  let name = "name_560";
  let query = "query_560";
  let startAt = "startAt_560";
  createFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt);
  waitForFieldConfigurationAdded(description, id, isDefault, maxResults, name, query, startAt);
  tryToAddExistingFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt);
  verifyFieldConfigurationExists(description, id, isDefault, maxResults, name, query, startAt);
  updateFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt);
  deleteFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt);
  tryToDeleteANonExistingFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt);
  verifyFieldConfigurationDoesNotExist(description, id, isDefault, maxResults, name, query, startAt);
});

// Story: crud:FieldConfiguration:nondet:1:2
bthread("crud:FieldConfiguration:nondet:1:2", function () {
  let description = "description_561";
  let id = 561;
  let isDefault = "isDefault_561";
  let maxResults = "maxResults_561";
  let name = "name_561";
  let query = "query_561";
  let startAt = "startAt_561";
  createFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt);
  // waitForFieldConfigurationAdded(description, id, isDefault, maxResults, name, query, startAt);
  tryToAddExistingFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt);
  updateFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt);
  verifyFieldConfigurationExists(description, id, isDefault, maxResults, name, query, startAt);
  deleteFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt);
  tryToDeleteANonExistingFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt);
  verifyFieldConfigurationDoesNotExist(description, id, isDefault, maxResults, name, query, startAt);
});

// Story: crud:FieldConfiguration:nondet:negative:dup-add
bthread("crud:FieldConfiguration:nondet:negative:dup-add", function () {
  let description = "description_566";
  let id = 566;
  let isDefault = "isDefault_566";
  let maxResults = "maxResults_566";
  let name = "name_566";
  let query = "query_566";
  let startAt = "startAt_566";
  createFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt);
  // waitForFieldConfigurationAdded(description, id, isDefault, maxResults, name, query, startAt);
  verifyFieldConfigurationExists(description, id, isDefault, maxResults, name, query, startAt);
  tryToAddExistingFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt);
  verifyFieldConfigurationExists(description, id, isDefault, maxResults, name, query, startAt);
});

// Story: crud:FieldConfigurationItems:read_only
bthread("crud:FieldConfigurationItems:read_only", function () {
  let id = 570;
  let maxResults = "maxResults_570";
  let startAt = "startAt_570";
  verifyFieldConfigurationItemsExists(id, maxResults, startAt);
});

// Story: crud:FieldConfigurationScheme:nondet:1:1
bthread("crud:FieldConfigurationScheme:nondet:1:1", function () {
  let description = "description_580";
  let id = 580;
  let maxResults = "maxResults_580";
  let name = "name_580";
  let startAt = "startAt_580";
  createFieldConfigurationScheme(description, id, maxResults, name, startAt);
  waitForFieldConfigurationSchemeAdded(description, id, maxResults, name, startAt);
  tryToAddExistingFieldConfigurationScheme(description, id, maxResults, name, startAt);
  verifyFieldConfigurationSchemeExists(description, id, maxResults, name, startAt);
  updateFieldConfigurationScheme(description, id, maxResults, name, startAt);
  deleteFieldConfigurationScheme(description, id, maxResults, name, startAt);
  tryToDeleteANonExistingFieldConfigurationScheme(description, id, maxResults, name, startAt);
  verifyFieldConfigurationSchemeDoesNotExist(description, id, maxResults, name, startAt);
});

// Story: crud:FieldConfigurationScheme:nondet:1:2
bthread("crud:FieldConfigurationScheme:nondet:1:2", function () {
  let description = "description_581";
  let id = 581;
  let maxResults = "maxResults_581";
  let name = "name_581";
  let startAt = "startAt_581";
  createFieldConfigurationScheme(description, id, maxResults, name, startAt);
  // waitForFieldConfigurationSchemeAdded(description, id, maxResults, name, startAt);
  tryToAddExistingFieldConfigurationScheme(description, id, maxResults, name, startAt);
  updateFieldConfigurationScheme(description, id, maxResults, name, startAt);
  verifyFieldConfigurationSchemeExists(description, id, maxResults, name, startAt);
  deleteFieldConfigurationScheme(description, id, maxResults, name, startAt);
  tryToDeleteANonExistingFieldConfigurationScheme(description, id, maxResults, name, startAt);
  verifyFieldConfigurationSchemeDoesNotExist(description, id, maxResults, name, startAt);
});

// Story: crud:FieldConfigurationScheme:nondet:negative:dup-add
bthread("crud:FieldConfigurationScheme:nondet:negative:dup-add", function () {
  let description = "description_586";
  let id = 586;
  let maxResults = "maxResults_586";
  let name = "name_586";
  let startAt = "startAt_586";
  createFieldConfigurationScheme(description, id, maxResults, name, startAt);
  // waitForFieldConfigurationSchemeAdded(description, id, maxResults, name, startAt);
  verifyFieldConfigurationSchemeExists(description, id, maxResults, name, startAt);
  tryToAddExistingFieldConfigurationScheme(description, id, maxResults, name, startAt);
  verifyFieldConfigurationSchemeExists(description, id, maxResults, name, startAt);
});

// Story: crud:FieldConfigurationSchemeMapping:read_only
bthread("crud:FieldConfigurationSchemeMapping:read_only", function () {
  let fieldConfigurationSchemeId;
  let id = 590;
  let maxResults = "maxResults_590";
  let startAt = "startAt_590";
  verifyFieldConfigurationSchemeMappingExists(fieldConfigurationSchemeId, id, maxResults, startAt);
});

// Story: crud:FieldConfigurationSchemeProjectAssociation:read_only
bthread("crud:FieldConfigurationSchemeProjectAssociation:read_only", function () {
  let maxResults = "maxResults_600";
  let projectId;
  let startAt = "startAt_600";
  verifyFieldConfigurationSchemeProjectAssociationExists(maxResults, projectId, startAt);
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let accountId = 610;
  let actionDescriptorId = 610;
  let applicationKeys = "applicationKeys_610";
  let avatarSize = "avatarSize_610";
  let displayName = "displayName_610";
  let emailAddress = "emailAddress_610";
  let exclude = "exclude_610";
  let excludeAccountIds = "excludeAccountIds_610";
  let excludeConnectUsers = "excludeConnectUsers_610";
  let issueId;
  let issueKey = "issueKey_610";
  let key = "key_610";
  let maxResult = "maxResult_610";
  let maxResults = "maxResults_610";
  let name = "name_610";
  let password = "password_610";
  let permissions = "permissions_610";
  let products = "products_610";
  let project = "project_610";
  let projectKey = "projectKey_610";
  let projectKeys = "projectKeys_610";
  let property = "property_610";
  let query = "query_610";
  let recommend = "recommend_610";
  let self = "self_610";
  let showAvatar = "showAvatar_610";
  let startAt = "startAt_610";
  // Dependency Barrier
  let deps = {};
  deps["issueId"] = matchAnyIssueAdded();
  let pkMap = {"issueId": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueId = captured["issueId"];
  createUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  waitForUserAdded(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  tryToAddExistingUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  verifyUserExists(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  removeUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  tryToDeleteANonExistingUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  verifyUserDoesNotExist(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let accountId = 611;
  let actionDescriptorId = 611;
  let applicationKeys = "applicationKeys_611";
  let avatarSize = "avatarSize_611";
  let displayName = "displayName_611";
  let emailAddress = "emailAddress_611";
  let exclude = "exclude_611";
  let excludeAccountIds = "excludeAccountIds_611";
  let excludeConnectUsers = "excludeConnectUsers_611";
  let issueId;
  let issueKey = "issueKey_611";
  let key = "key_611";
  let maxResult = "maxResult_611";
  let maxResults = "maxResults_611";
  let name = "name_611";
  let password = "password_611";
  let permissions = "permissions_611";
  let products = "products_611";
  let project = "project_611";
  let projectKey = "projectKey_611";
  let projectKeys = "projectKeys_611";
  let property = "property_611";
  let query = "query_611";
  let recommend = "recommend_611";
  let self = "self_611";
  let showAvatar = "showAvatar_611";
  let startAt = "startAt_611";
  // Dependency Barrier
  let deps = {};
  deps["issueId"] = matchAnyIssueAdded();
  let pkMap = {"issueId": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueId = captured["issueId"];
  createUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  // waitForUserAdded(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  tryToAddExistingUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  verifyUserExists(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  removeUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  tryToDeleteANonExistingUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  verifyUserDoesNotExist(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let accountId = 616;
  let actionDescriptorId = 616;
  let applicationKeys = "applicationKeys_616";
  let avatarSize = "avatarSize_616";
  let displayName = "displayName_616";
  let emailAddress = "emailAddress_616";
  let exclude = "exclude_616";
  let excludeAccountIds = "excludeAccountIds_616";
  let excludeConnectUsers = "excludeConnectUsers_616";
  let issueId;
  let issueKey = "issueKey_616";
  let key = "key_616";
  let maxResult = "maxResult_616";
  let maxResults = "maxResults_616";
  let name = "name_616";
  let password = "password_616";
  let permissions = "permissions_616";
  let products = "products_616";
  let project = "project_616";
  let projectKey = "projectKey_616";
  let projectKeys = "projectKeys_616";
  let property = "property_616";
  let query = "query_616";
  let recommend = "recommend_616";
  let self = "self_616";
  let showAvatar = "showAvatar_616";
  let startAt = "startAt_616";
  // Dependency Barrier
  let deps = {};
  deps["issueId"] = matchAnyIssueAdded();
  let pkMap = {"issueId": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueId = captured["issueId"];
  createUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  // waitForUserAdded(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  verifyUserExists(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  tryToAddExistingUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
  verifyUserExists(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
});

// Story: crud:UserColumns:read_only
bthread("crud:UserColumns:read_only", function () {
  let accountId = 620;
  verifyUserColumnsExists(accountId);
});

// Story: crud:UserEmail:read_only
bthread("crud:UserEmail:read_only", function () {
  let accountId = 630;
  verifyUserEmailExists(accountId);
});

// Story: crud:UserEmailBulk:read_only
bthread("crud:UserEmailBulk:read_only", function () {
  let accountId = 640;
  verifyUserEmailBulkExists(accountId);
});

// Story: crud:UserGroups:read_only
bthread("crud:UserGroups:read_only", function () {
  let accountId = 650;
  verifyUserGroupsExists(accountId);
});

// Story: crud:UsersBulk:read_only
bthread("crud:UsersBulk:read_only", function () {
  let accountId = 660;
  verifyUsersBulkExists(accountId);
});

// Story: crud:UsersBulkMigration:read_only
bthread("crud:UsersBulkMigration:read_only", function () {
  let key = "key_670";
  let username = "username_670";
  verifyUsersBulkMigrationExists(key, username);
});

// Story: crud:Users:read_only
bthread("crud:Users:read_only", function () {
  let maxResults = "maxResults_680";
  let startAt = "startAt_680";
  verifyUsersExists(maxResults, startAt);
});

// Story: crud:UsersDefault:read_only
bthread("crud:UsersDefault:read_only", function () {
  let maxResults = "maxResults_690";
  let startAt = "startAt_690";
  verifyUsersDefaultExists(maxResults, startAt);
});

// Story: crud:WorkflowScheme:nondet:1:1
bthread("crud:WorkflowScheme:nondet:1:1", function () {
  let defaultWorkflow = "defaultWorkflow_700";
  let description = "description_700";
  let draft = "draft_700";
  let id = 700;
  let issueTypeMappings = {};
  let issueTypes = {};
  let lastModified = "lastModified_700";
  let lastModifiedUser = "lastModifiedUser_700";
  let name = "name_700";
  let originalDefaultWorkflow = "originalDefaultWorkflow_700";
  let originalIssueTypeMappings = {};
  let self = "self_700";
  let updateDraftIfNeeded = "updateDraftIfNeeded_700";
  createWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  waitForWorkflowSchemeAdded(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  tryToAddExistingWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  verifyWorkflowSchemeExists(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  updateWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  deleteWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  tryToDeleteANonExistingWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  verifyWorkflowSchemeDoesNotExist(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
});

// Story: crud:WorkflowScheme:nondet:1:2
bthread("crud:WorkflowScheme:nondet:1:2", function () {
  let defaultWorkflow = "defaultWorkflow_701";
  let description = "description_701";
  let draft = "draft_701";
  let id = 701;
  let issueTypeMappings = {};
  let issueTypes = {};
  let lastModified = "lastModified_701";
  let lastModifiedUser = "lastModifiedUser_701";
  let name = "name_701";
  let originalDefaultWorkflow = "originalDefaultWorkflow_701";
  let originalIssueTypeMappings = {};
  let self = "self_701";
  let updateDraftIfNeeded = "updateDraftIfNeeded_701";
  createWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  // waitForWorkflowSchemeAdded(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  tryToAddExistingWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  updateWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  verifyWorkflowSchemeExists(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  deleteWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  tryToDeleteANonExistingWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  verifyWorkflowSchemeDoesNotExist(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
});

// Story: crud:WorkflowScheme:nondet:negative:dup-add
bthread("crud:WorkflowScheme:nondet:negative:dup-add", function () {
  let defaultWorkflow = "defaultWorkflow_706";
  let description = "description_706";
  let draft = "draft_706";
  let id = 706;
  let issueTypeMappings = {};
  let issueTypes = {};
  let lastModified = "lastModified_706";
  let lastModifiedUser = "lastModifiedUser_706";
  let name = "name_706";
  let originalDefaultWorkflow = "originalDefaultWorkflow_706";
  let originalIssueTypeMappings = {};
  let self = "self_706";
  let updateDraftIfNeeded = "updateDraftIfNeeded_706";
  createWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  // waitForWorkflowSchemeAdded(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  verifyWorkflowSchemeExists(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  tryToAddExistingWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
  verifyWorkflowSchemeExists(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self, updateDraftIfNeeded);
});

// Story: crud:WorkflowSchemeDefaultWorkflow:read_only
bthread("crud:WorkflowSchemeDefaultWorkflow:read_only", function () {
  let id = 710;
  verifyWorkflowSchemeDefaultWorkflowExists(id);
});

// Story: crud:WorkflowSchemeIssueType:read_only
bthread("crud:WorkflowSchemeIssueType:read_only", function () {
  let id = 720;
  let issueType = "issueType_720";
  verifyWorkflowSchemeIssueTypeExists(id, issueType);
});

// Story: crud:WorkflowSchemeWorkflowMapping:read_only
bthread("crud:WorkflowSchemeWorkflowMapping:read_only", function () {
  let id = 730;
  let workflowName = "workflowName_730";
  verifyWorkflowSchemeWorkflowMappingExists(id, workflowName);
});

// Story: crud:CustomField:nondet:1:1
bthread("crud:CustomField:nondet:1:1", function () {
  let description = "description_740";
  let fieldId = 740;
  let id = 740;
  let name = "name_740";
  let searcherKey = "searcherKey_740";
  let type = "type_740";
  createCustomField(description, fieldId, id, name, searcherKey, type);
  waitForCustomFieldAdded(description, fieldId, id, name, searcherKey, type);
  tryToAddExistingCustomField(description, fieldId, id, name, searcherKey, type);
  verifyCustomFieldExists(description, fieldId, id, name, searcherKey, type);
  updateCustomField(description, fieldId, id, name, searcherKey, type);
  deleteCustomField(description, fieldId, id, name, searcherKey, type);
  tryToDeleteANonExistingCustomField(description, fieldId, id, name, searcherKey, type);
  verifyCustomFieldDoesNotExist(description, fieldId, id, name, searcherKey, type);
});

// Story: crud:CustomField:nondet:1:2
bthread("crud:CustomField:nondet:1:2", function () {
  let description = "description_741";
  let fieldId = 741;
  let id = 741;
  let name = "name_741";
  let searcherKey = "searcherKey_741";
  let type = "type_741";
  createCustomField(description, fieldId, id, name, searcherKey, type);
  // waitForCustomFieldAdded(description, fieldId, id, name, searcherKey, type);
  tryToAddExistingCustomField(description, fieldId, id, name, searcherKey, type);
  updateCustomField(description, fieldId, id, name, searcherKey, type);
  verifyCustomFieldExists(description, fieldId, id, name, searcherKey, type);
  deleteCustomField(description, fieldId, id, name, searcherKey, type);
  tryToDeleteANonExistingCustomField(description, fieldId, id, name, searcherKey, type);
  verifyCustomFieldDoesNotExist(description, fieldId, id, name, searcherKey, type);
});

// Story: crud:CustomField:nondet:negative:dup-add
bthread("crud:CustomField:nondet:negative:dup-add", function () {
  let description = "description_746";
  let fieldId = 746;
  let id = 746;
  let name = "name_746";
  let searcherKey = "searcherKey_746";
  let type = "type_746";
  createCustomField(description, fieldId, id, name, searcherKey, type);
  // waitForCustomFieldAdded(description, fieldId, id, name, searcherKey, type);
  verifyCustomFieldExists(description, fieldId, id, name, searcherKey, type);
  tryToAddExistingCustomField(description, fieldId, id, name, searcherKey, type);
  verifyCustomFieldExists(description, fieldId, id, name, searcherKey, type);
});

// Story: crud:Filter:nondet:1:1
bthread("crud:Filter:nondet:1:1", function () {
  let approximateLastUsed = "approximateLastUsed_750";
  let description = "description_750";
  let editPermissions = "editPermissions_750";
  let favourite = "favourite_750";
  let favouritedCount = 750;
  let id = 750;
  let jql = "jql_750";
  let name = "name_750";
  let owner = "owner_750";
  let searchUrl = "searchUrl_750";
  let self = "self_750";
  let sharePermissions = "sharePermissions_750";
  let sharedUsers = "sharedUsers_750";
  let subscriptions = "subscriptions_750";
  let viewUrl = "viewUrl_750";
  createFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  waitForFilterAdded(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  tryToAddExistingFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  verifyFilterExists(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  updateFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  deleteFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  tryToDeleteANonExistingFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  verifyFilterDoesNotExist(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
});

// Story: crud:Filter:nondet:1:2
bthread("crud:Filter:nondet:1:2", function () {
  let approximateLastUsed = "approximateLastUsed_751";
  let description = "description_751";
  let editPermissions = "editPermissions_751";
  let favourite = "favourite_751";
  let favouritedCount = 751;
  let id = 751;
  let jql = "jql_751";
  let name = "name_751";
  let owner = "owner_751";
  let searchUrl = "searchUrl_751";
  let self = "self_751";
  let sharePermissions = "sharePermissions_751";
  let sharedUsers = "sharedUsers_751";
  let subscriptions = "subscriptions_751";
  let viewUrl = "viewUrl_751";
  createFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  // waitForFilterAdded(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  tryToAddExistingFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  updateFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  verifyFilterExists(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  deleteFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  tryToDeleteANonExistingFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  verifyFilterDoesNotExist(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
});

// Story: crud:Filter:nondet:negative:dup-add
bthread("crud:Filter:nondet:negative:dup-add", function () {
  let approximateLastUsed = "approximateLastUsed_756";
  let description = "description_756";
  let editPermissions = "editPermissions_756";
  let favourite = "favourite_756";
  let favouritedCount = 756;
  let id = 756;
  let jql = "jql_756";
  let name = "name_756";
  let owner = "owner_756";
  let searchUrl = "searchUrl_756";
  let self = "self_756";
  let sharePermissions = "sharePermissions_756";
  let sharedUsers = "sharedUsers_756";
  let subscriptions = "subscriptions_756";
  let viewUrl = "viewUrl_756";
  createFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  // waitForFilterAdded(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  verifyFilterExists(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  tryToAddExistingFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  verifyFilterExists(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
});

// Story: crud:FilterColumns:read_only
bthread("crud:FilterColumns:read_only", function () {
  let id = 760;
  verifyFilterColumnsExists(id);
});

// Story: crud:FilterFavourite:nondet:1:1
bthread("crud:FilterFavourite:nondet:1:1", function () {
  let id = 770;
  setFavouriteForFilter(id);
  waitForFilterFavouriteAdded(id);
  tryToAddExistingFilterFavourite(id);
  verifyFilterFavouriteExists(id);
  deleteFavouriteForFilter(id);
  tryToDeleteANonExistingFilterFavourite(id);
  verifyFilterFavouriteDoesNotExist(id);
});

// Story: crud:FilterFavourite:nondet:1:2
bthread("crud:FilterFavourite:nondet:1:2", function () {
  let id = 771;
  setFavouriteForFilter(id);
  // waitForFilterFavouriteAdded(id);
  tryToAddExistingFilterFavourite(id);
  verifyFilterFavouriteExists(id);
  deleteFavouriteForFilter(id);
  tryToDeleteANonExistingFilterFavourite(id);
  verifyFilterFavouriteDoesNotExist(id);
});

// Story: crud:FilterFavourite:nondet:negative:dup-add
bthread("crud:FilterFavourite:nondet:negative:dup-add", function () {
  let id = 776;
  setFavouriteForFilter(id);
  // waitForFilterFavouriteAdded(id);
  verifyFilterFavouriteExists(id);
  tryToAddExistingFilterFavourite(id);
  verifyFilterFavouriteExists(id);
});

// Story: crud:IssueTypeScreenScheme:nondet:1:1
bthread("crud:IssueTypeScreenScheme:nondet:1:1", function () {
  let description = "description_790";
  let expand = "expand_790";
  let id = 790;
  let issueTypeMappings = "issueTypeMappings_790";
  let issueTypeScreenSchemeId;
  let maxResults = "maxResults_790";
  let name = "name_790";
  let orderBy = "orderBy_790";
  let queryString = "queryString_790";
  let startAt = "startAt_790";
  // Dependency Barrier
  let deps = {};
  deps["issueTypeScreenSchemeId"] = matchAnyIssueAdded();
  deps["issueTypeScreenSchemeId"] = matchAnyScreenAdded();
  deps["issueTypeScreenSchemeId"] = matchAnyIssueTypeAdded();
  let pkMap = {"issueTypeScreenSchemeId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  issueTypeScreenSchemeId = captured["issueTypeScreenSchemeId"];
  issueTypeScreenSchemeId = captured["issueTypeScreenSchemeId"];
  issueTypeScreenSchemeId = captured["issueTypeScreenSchemeId"];
  createIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  waitForIssueTypeScreenSchemeAdded(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToAddExistingIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeScreenSchemeExists(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  updateIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  deleteIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToDeleteANonExistingIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeScreenSchemeDoesNotExist(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
});

// Story: crud:IssueTypeScreenScheme:nondet:1:2
bthread("crud:IssueTypeScreenScheme:nondet:1:2", function () {
  let description = "description_791";
  let expand = "expand_791";
  let id = 791;
  let issueTypeMappings = "issueTypeMappings_791";
  let issueTypeScreenSchemeId;
  let maxResults = "maxResults_791";
  let name = "name_791";
  let orderBy = "orderBy_791";
  let queryString = "queryString_791";
  let startAt = "startAt_791";
  // Dependency Barrier
  let deps = {};
  deps["issueTypeScreenSchemeId"] = matchAnyIssueAdded();
  deps["issueTypeScreenSchemeId"] = matchAnyScreenAdded();
  deps["issueTypeScreenSchemeId"] = matchAnyIssueTypeAdded();
  let pkMap = {"issueTypeScreenSchemeId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  issueTypeScreenSchemeId = captured["issueTypeScreenSchemeId"];
  issueTypeScreenSchemeId = captured["issueTypeScreenSchemeId"];
  issueTypeScreenSchemeId = captured["issueTypeScreenSchemeId"];
  createIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  // waitForIssueTypeScreenSchemeAdded(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToAddExistingIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  updateIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeScreenSchemeExists(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  deleteIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToDeleteANonExistingIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeScreenSchemeDoesNotExist(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
});

// Story: crud:IssueTypeScreenScheme:nondet:negative:dup-add
bthread("crud:IssueTypeScreenScheme:nondet:negative:dup-add", function () {
  let description = "description_796";
  let expand = "expand_796";
  let id = 796;
  let issueTypeMappings = "issueTypeMappings_796";
  let issueTypeScreenSchemeId;
  let maxResults = "maxResults_796";
  let name = "name_796";
  let orderBy = "orderBy_796";
  let queryString = "queryString_796";
  let startAt = "startAt_796";
  // Dependency Barrier
  let deps = {};
  deps["issueTypeScreenSchemeId"] = matchAnyIssueAdded();
  deps["issueTypeScreenSchemeId"] = matchAnyScreenAdded();
  deps["issueTypeScreenSchemeId"] = matchAnyIssueTypeAdded();
  let pkMap = {"issueTypeScreenSchemeId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  issueTypeScreenSchemeId = captured["issueTypeScreenSchemeId"];
  issueTypeScreenSchemeId = captured["issueTypeScreenSchemeId"];
  issueTypeScreenSchemeId = captured["issueTypeScreenSchemeId"];
  createIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  // waitForIssueTypeScreenSchemeAdded(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeScreenSchemeExists(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToAddExistingIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeScreenSchemeExists(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
});

// Story: crud:IssueTypeScreenSchemeMapping:read_only
bthread("crud:IssueTypeScreenSchemeMapping:read_only", function () {
  let issueTypeIds;
  let issueTypeScreenSchemeId;
  let maxResults = "maxResults_800";
  let screenSchemeId;
  let startAt = "startAt_800";
  verifyIssueTypeScreenSchemeMappingExists(issueTypeIds, issueTypeScreenSchemeId, maxResults, screenSchemeId, startAt);
});

// Story: crud:IssueTypeScreenSchemeProjectAssociation:read_only
bthread("crud:IssueTypeScreenSchemeProjectAssociation:read_only", function () {
  let issueTypeScreenSchemeId;
  let maxResults = "maxResults_810";
  let projectId;
  let startAt = "startAt_810";
  verifyIssueTypeScreenSchemeProjectAssociationExists(issueTypeScreenSchemeId, maxResults, projectId, startAt);
});

// Story: crud:IssueTypeScreenSchemeProject:read_only
bthread("crud:IssueTypeScreenSchemeProject:read_only", function () {
  let issueTypeScreenSchemeId;
  let maxResults = "maxResults_820";
  let query = "query_820";
  let startAt = "startAt_820";
  verifyIssueTypeScreenSchemeProjectExists(issueTypeScreenSchemeId, maxResults, query, startAt);
});

// Story: crud:Attachment:read_only
bthread("crud:Attachment:read_only", function () {
  let id = 830;
  verifyAttachmentExists(id);
});

// Story: crud:AttachmentContent:read_only
bthread("crud:AttachmentContent:read_only", function () {
  let id = 840;
  verifyAttachmentContentExists(id);
});

// Story: crud:AttachmentThumbnail:read_only
bthread("crud:AttachmentThumbnail:read_only", function () {
  let id = 850;
  verifyAttachmentThumbnailExists(id);
});

// Story: crud:AttachmentExpandedHuman:read_only
bthread("crud:AttachmentExpandedHuman:read_only", function () {
  let id = 860;
  verifyAttachmentExpandedHumanExists(id);
});

// Story: crud:AttachmentExpandedRaw:read_only
bthread("crud:AttachmentExpandedRaw:read_only", function () {
  let id = 870;
  verifyAttachmentExpandedRawExists(id);
});

// Story: crud:AttachmentMeta:read_only
bthread("crud:AttachmentMeta:read_only", function () {

  verifyAttachmentMetaExists();
});

// Story: crud:IssueBulk:read_only
bthread("crud:IssueBulk:read_only", function () {
  let endingBefore = "endingBefore_900";
  let issueIdsOrKeys;
  let searchText = "searchText_900";
  let selectedIssueIdsOrKeys;
  let startingAfter = "startingAfter_900";
  let taskId = 900;
  let transitionId = 900;
  verifyIssueBulkExists(endingBefore, issueIdsOrKeys, searchText, selectedIssueIdsOrKeys, startingAfter, taskId, transitionId);
});

// Story: crud:IssueTypeScheme:nondet:1:1
bthread("crud:IssueTypeScheme:nondet:1:1", function () {
  let defaultIssueTypeId;
  let description = "description_910";
  let expand = "expand_910";
  let id = 910;
  let issueTypeIds;
  let issueTypeSchemeId;
  let maxResults = "maxResults_910";
  let name = "name_910";
  let orderBy = "orderBy_910";
  let queryString = "queryString_910";
  let startAt = "startAt_910";
  // Dependency Barrier
  let deps = {};
  deps["defaultIssueTypeId"] = matchAnyIssueAdded();
  deps["defaultIssueTypeId"] = matchAnyIssueTypeAdded();
  deps["issueTypeIds"] = matchAnyIssueAdded();
  deps["issueTypeIds"] = matchAnyIssueTypeAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueTypeAdded();
  let pkMap = {"defaultIssueTypeId": "id", "issueTypeIds": "id", "issueTypeSchemeId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  defaultIssueTypeId = captured["defaultIssueTypeId"];
  defaultIssueTypeId = captured["defaultIssueTypeId"];
  issueTypeIds = captured["issueTypeIds"];
  issueTypeIds = captured["issueTypeIds"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  createIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  waitForIssueTypeSchemeAdded(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToAddExistingIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeSchemeExists(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  updateIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  deleteIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToDeleteANonExistingIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeSchemeDoesNotExist(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
});

// Story: crud:IssueTypeScheme:nondet:1:2
bthread("crud:IssueTypeScheme:nondet:1:2", function () {
  let defaultIssueTypeId;
  let description = "description_911";
  let expand = "expand_911";
  let id = 911;
  let issueTypeIds;
  let issueTypeSchemeId;
  let maxResults = "maxResults_911";
  let name = "name_911";
  let orderBy = "orderBy_911";
  let queryString = "queryString_911";
  let startAt = "startAt_911";
  // Dependency Barrier
  let deps = {};
  deps["defaultIssueTypeId"] = matchAnyIssueAdded();
  deps["defaultIssueTypeId"] = matchAnyIssueTypeAdded();
  deps["issueTypeIds"] = matchAnyIssueAdded();
  deps["issueTypeIds"] = matchAnyIssueTypeAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueTypeAdded();
  let pkMap = {"defaultIssueTypeId": "id", "issueTypeIds": "id", "issueTypeSchemeId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  defaultIssueTypeId = captured["defaultIssueTypeId"];
  defaultIssueTypeId = captured["defaultIssueTypeId"];
  issueTypeIds = captured["issueTypeIds"];
  issueTypeIds = captured["issueTypeIds"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  createIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  // waitForIssueTypeSchemeAdded(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToAddExistingIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  updateIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeSchemeExists(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  deleteIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToDeleteANonExistingIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeSchemeDoesNotExist(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
});

// Story: crud:IssueTypeScheme:nondet:negative:dup-add
bthread("crud:IssueTypeScheme:nondet:negative:dup-add", function () {
  let defaultIssueTypeId;
  let description = "description_916";
  let expand = "expand_916";
  let id = 916;
  let issueTypeIds;
  let issueTypeSchemeId;
  let maxResults = "maxResults_916";
  let name = "name_916";
  let orderBy = "orderBy_916";
  let queryString = "queryString_916";
  let startAt = "startAt_916";
  // Dependency Barrier
  let deps = {};
  deps["defaultIssueTypeId"] = matchAnyIssueAdded();
  deps["defaultIssueTypeId"] = matchAnyIssueTypeAdded();
  deps["issueTypeIds"] = matchAnyIssueAdded();
  deps["issueTypeIds"] = matchAnyIssueTypeAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueTypeAdded();
  let pkMap = {"defaultIssueTypeId": "id", "issueTypeIds": "id", "issueTypeSchemeId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  defaultIssueTypeId = captured["defaultIssueTypeId"];
  defaultIssueTypeId = captured["defaultIssueTypeId"];
  issueTypeIds = captured["issueTypeIds"];
  issueTypeIds = captured["issueTypeIds"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  createIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  // waitForIssueTypeSchemeAdded(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeSchemeExists(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToAddExistingIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeSchemeExists(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
});

// Story: crud:IssueTypeSchemeProjectAssociation:read_only
bthread("crud:IssueTypeSchemeProjectAssociation:read_only", function () {
  let maxResults = "maxResults_920";
  let projectId;
  let startAt = "startAt_920";
  verifyIssueTypeSchemeProjectAssociationExists(maxResults, projectId, startAt);
});

// Story: crud:IssueTypeSchemeMapping:read_only
bthread("crud:IssueTypeSchemeMapping:read_only", function () {
  let issueTypeSchemeId;
  let maxResults = "maxResults_930";
  let startAt = "startAt_930";
  verifyIssueTypeSchemeMappingExists(issueTypeSchemeId, maxResults, startAt);
});

// Story: crud:IssueTypeInScheme:nondet:1:1
bthread("crud:IssueTypeInScheme:nondet:1:1", function () {
  let issueTypeId;
  let issueTypeSchemeId;
  // Dependency Barrier
  let deps = {};
  deps["issueTypeId"] = matchAnyIssueAdded();
  deps["issueTypeId"] = matchAnyIssueTypeAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueTypeSchemeAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueTypeAdded();
  let pkMap = {"issueTypeId": "id", "issueTypeSchemeId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  issueTypeId = captured["issueTypeId"];
  issueTypeId = captured["issueTypeId"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  addIssueTypesToIssueTypeScheme(issueTypeId, issueTypeSchemeId);
  waitForIssueTypeInSchemeAdded(issueTypeId, issueTypeSchemeId);
  tryToAddExistingIssueTypeInScheme(issueTypeId, issueTypeSchemeId);
  verifyIssueTypeInSchemeExists(issueTypeId, issueTypeSchemeId);
  reorderIssueTypesInIssueTypeScheme(issueTypeId, issueTypeSchemeId);
  removeIssueTypeFromIssueTypeScheme(issueTypeId, issueTypeSchemeId);
  tryToDeleteANonExistingIssueTypeInScheme(issueTypeId, issueTypeSchemeId);
  verifyIssueTypeInSchemeDoesNotExist(issueTypeId, issueTypeSchemeId);
});

// Story: crud:IssueTypeInScheme:nondet:1:2
bthread("crud:IssueTypeInScheme:nondet:1:2", function () {
  let issueTypeId;
  let issueTypeSchemeId;
  // Dependency Barrier
  let deps = {};
  deps["issueTypeId"] = matchAnyIssueAdded();
  deps["issueTypeId"] = matchAnyIssueTypeAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueTypeSchemeAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueTypeAdded();
  let pkMap = {"issueTypeId": "id", "issueTypeSchemeId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  issueTypeId = captured["issueTypeId"];
  issueTypeId = captured["issueTypeId"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  addIssueTypesToIssueTypeScheme(issueTypeId, issueTypeSchemeId);
  // waitForIssueTypeInSchemeAdded(issueTypeId, issueTypeSchemeId);
  tryToAddExistingIssueTypeInScheme(issueTypeId, issueTypeSchemeId);
  reorderIssueTypesInIssueTypeScheme(issueTypeId, issueTypeSchemeId);
  verifyIssueTypeInSchemeExists(issueTypeId, issueTypeSchemeId);
  removeIssueTypeFromIssueTypeScheme(issueTypeId, issueTypeSchemeId);
  tryToDeleteANonExistingIssueTypeInScheme(issueTypeId, issueTypeSchemeId);
  verifyIssueTypeInSchemeDoesNotExist(issueTypeId, issueTypeSchemeId);
});

// Story: crud:IssueTypeInScheme:nondet:negative:dup-add
bthread("crud:IssueTypeInScheme:nondet:negative:dup-add", function () {
  let issueTypeId;
  let issueTypeSchemeId;
  // Dependency Barrier
  let deps = {};
  deps["issueTypeId"] = matchAnyIssueAdded();
  deps["issueTypeId"] = matchAnyIssueTypeAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueTypeSchemeAdded();
  deps["issueTypeSchemeId"] = matchAnyIssueTypeAdded();
  let pkMap = {"issueTypeId": "id", "issueTypeSchemeId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  issueTypeId = captured["issueTypeId"];
  issueTypeId = captured["issueTypeId"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  issueTypeSchemeId = captured["issueTypeSchemeId"];
  addIssueTypesToIssueTypeScheme(issueTypeId, issueTypeSchemeId);
  // waitForIssueTypeInSchemeAdded(issueTypeId, issueTypeSchemeId);
  verifyIssueTypeInSchemeExists(issueTypeId, issueTypeSchemeId);
  tryToAddExistingIssueTypeInScheme(issueTypeId, issueTypeSchemeId);
  verifyIssueTypeInSchemeExists(issueTypeId, issueTypeSchemeId);
});

// Story: crud:Avatar:nondet:1:1
bthread("crud:Avatar:nondet:1:1", function () {
  let entityId = 950;
  let format = "format_950";
  let id = 950;
  let owningObjectId = 950;
  let size = "size_950";
  let type = 950;
  let x = "x_950";
  let y = "y_950";
  storeAvatar(entityId, format, id, owningObjectId, size, type, x, y);
  waitForAvatarAdded(entityId, format, id, owningObjectId, size, type, x, y);
  tryToAddExistingAvatar(entityId, format, id, owningObjectId, size, type, x, y);
  verifyAvatarExists(entityId, format, id, owningObjectId, size, type, x, y);
  deleteAvatar(entityId, format, id, owningObjectId, size, type, x, y);
  tryToDeleteANonExistingAvatar(entityId, format, id, owningObjectId, size, type, x, y);
  verifyAvatarDoesNotExist(entityId, format, id, owningObjectId, size, type, x, y);
});

// Story: crud:Avatar:nondet:1:2
bthread("crud:Avatar:nondet:1:2", function () {
  let entityId = 951;
  let format = "format_951";
  let id = 951;
  let owningObjectId = 951;
  let size = "size_951";
  let type = 951;
  let x = "x_951";
  let y = "y_951";
  storeAvatar(entityId, format, id, owningObjectId, size, type, x, y);
  // waitForAvatarAdded(entityId, format, id, owningObjectId, size, type, x, y);
  tryToAddExistingAvatar(entityId, format, id, owningObjectId, size, type, x, y);
  verifyAvatarExists(entityId, format, id, owningObjectId, size, type, x, y);
  deleteAvatar(entityId, format, id, owningObjectId, size, type, x, y);
  tryToDeleteANonExistingAvatar(entityId, format, id, owningObjectId, size, type, x, y);
  verifyAvatarDoesNotExist(entityId, format, id, owningObjectId, size, type, x, y);
});

// Story: crud:Avatar:nondet:negative:dup-add
bthread("crud:Avatar:nondet:negative:dup-add", function () {
  let entityId = 956;
  let format = "format_956";
  let id = 956;
  let owningObjectId = 956;
  let size = "size_956";
  let type = 956;
  let x = "x_956";
  let y = "y_956";
  storeAvatar(entityId, format, id, owningObjectId, size, type, x, y);
  // waitForAvatarAdded(entityId, format, id, owningObjectId, size, type, x, y);
  verifyAvatarExists(entityId, format, id, owningObjectId, size, type, x, y);
  tryToAddExistingAvatar(entityId, format, id, owningObjectId, size, type, x, y);
  verifyAvatarExists(entityId, format, id, owningObjectId, size, type, x, y);
});

// Story: crud:SystemAvatar:read_only
bthread("crud:SystemAvatar:read_only", function () {
  let type = 960;
  verifySystemAvatarExists(type);
});

// Story: crud:Worklog:nondet:1:1
bthread("crud:Worklog:nondet:1:1", function () {
  let author = "author_970";
  let comment = "comment_970";
  let created = "created_970";
  let id = 970;
  let issueId;
  let issueIdOrKey;
  let properties = "properties_970";
  let self = "self_970";
  let since = "since_970";
  let started = "started_970";
  let timeSpent = "timeSpent_970";
  let timeSpentSeconds = 970;
  let updateAuthor = "updateAuthor_970";
  let updated = "updated_970";
  let visibility = "visibility_970";
  // Dependency Barrier
  let deps = {};
  deps["issueId"] = matchAnyIssueAdded();
  deps["issueIdOrKey"] = matchAnyIssueAdded();
  let pkMap = {"issueId": "issueIdOrKey", "issueIdOrKey": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueId = captured["issueId"];
  issueIdOrKey = captured["issueIdOrKey"];
  addWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  waitForWorklogAdded(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  tryToAddExistingWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  verifyWorklogExists(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  updateWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  deleteWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  tryToDeleteANonExistingWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  verifyWorklogDoesNotExist(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
});

// Story: crud:Worklog:nondet:1:2
bthread("crud:Worklog:nondet:1:2", function () {
  let author = "author_971";
  let comment = "comment_971";
  let created = "created_971";
  let id = 971;
  let issueId;
  let issueIdOrKey;
  let properties = "properties_971";
  let self = "self_971";
  let since = "since_971";
  let started = "started_971";
  let timeSpent = "timeSpent_971";
  let timeSpentSeconds = 971;
  let updateAuthor = "updateAuthor_971";
  let updated = "updated_971";
  let visibility = "visibility_971";
  // Dependency Barrier
  let deps = {};
  deps["issueId"] = matchAnyIssueAdded();
  deps["issueIdOrKey"] = matchAnyIssueAdded();
  let pkMap = {"issueId": "issueIdOrKey", "issueIdOrKey": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueId = captured["issueId"];
  issueIdOrKey = captured["issueIdOrKey"];
  addWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  // waitForWorklogAdded(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  tryToAddExistingWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  updateWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  verifyWorklogExists(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  deleteWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  tryToDeleteANonExistingWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  verifyWorklogDoesNotExist(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
});

// Story: crud:Worklog:nondet:negative:dup-add
bthread("crud:Worklog:nondet:negative:dup-add", function () {
  let author = "author_976";
  let comment = "comment_976";
  let created = "created_976";
  let id = 976;
  let issueId;
  let issueIdOrKey;
  let properties = "properties_976";
  let self = "self_976";
  let since = "since_976";
  let started = "started_976";
  let timeSpent = "timeSpent_976";
  let timeSpentSeconds = 976;
  let updateAuthor = "updateAuthor_976";
  let updated = "updated_976";
  let visibility = "visibility_976";
  // Dependency Barrier
  let deps = {};
  deps["issueId"] = matchAnyIssueAdded();
  deps["issueIdOrKey"] = matchAnyIssueAdded();
  let pkMap = {"issueId": "issueIdOrKey", "issueIdOrKey": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueId = captured["issueId"];
  issueIdOrKey = captured["issueIdOrKey"];
  addWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  // waitForWorklogAdded(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  verifyWorklogExists(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  tryToAddExistingWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  verifyWorklogExists(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
});

// Story: crud:NotificationScheme:nondet:1:1
bthread("crud:NotificationScheme:nondet:1:1", function () {
  let description = "description_980";
  let id = 980;
  let name = "name_980";
  let notificationSchemeEvents = "notificationSchemeEvents_980";
  let notificationSchemeId;
  // Dependency Barrier
  let deps = {};
  deps["notificationSchemeId"] = matchAnyNotificationAdded();
  let pkMap = {"notificationSchemeId": "notificationSchemeId"};
  let captured = resolveDependencies(deps, pkMap);
  notificationSchemeId = captured["notificationSchemeId"];
  createNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  waitForNotificationSchemeAdded(description, id, name, notificationSchemeEvents, notificationSchemeId);
  tryToAddExistingNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  verifyNotificationSchemeExists(description, id, name, notificationSchemeEvents, notificationSchemeId);
  updateNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  deleteNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  tryToDeleteANonExistingNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  verifyNotificationSchemeDoesNotExist(description, id, name, notificationSchemeEvents, notificationSchemeId);
});

// Story: crud:NotificationScheme:nondet:1:2
bthread("crud:NotificationScheme:nondet:1:2", function () {
  let description = "description_981";
  let id = 981;
  let name = "name_981";
  let notificationSchemeEvents = "notificationSchemeEvents_981";
  let notificationSchemeId;
  // Dependency Barrier
  let deps = {};
  deps["notificationSchemeId"] = matchAnyNotificationAdded();
  let pkMap = {"notificationSchemeId": "notificationSchemeId"};
  let captured = resolveDependencies(deps, pkMap);
  notificationSchemeId = captured["notificationSchemeId"];
  createNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  // waitForNotificationSchemeAdded(description, id, name, notificationSchemeEvents, notificationSchemeId);
  tryToAddExistingNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  updateNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  verifyNotificationSchemeExists(description, id, name, notificationSchemeEvents, notificationSchemeId);
  deleteNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  tryToDeleteANonExistingNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  verifyNotificationSchemeDoesNotExist(description, id, name, notificationSchemeEvents, notificationSchemeId);
});

// Story: crud:NotificationScheme:nondet:negative:dup-add
bthread("crud:NotificationScheme:nondet:negative:dup-add", function () {
  let description = "description_986";
  let id = 986;
  let name = "name_986";
  let notificationSchemeEvents = "notificationSchemeEvents_986";
  let notificationSchemeId;
  // Dependency Barrier
  let deps = {};
  deps["notificationSchemeId"] = matchAnyNotificationAdded();
  let pkMap = {"notificationSchemeId": "notificationSchemeId"};
  let captured = resolveDependencies(deps, pkMap);
  notificationSchemeId = captured["notificationSchemeId"];
  createNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  // waitForNotificationSchemeAdded(description, id, name, notificationSchemeEvents, notificationSchemeId);
  verifyNotificationSchemeExists(description, id, name, notificationSchemeEvents, notificationSchemeId);
  tryToAddExistingNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  verifyNotificationSchemeExists(description, id, name, notificationSchemeEvents, notificationSchemeId);
});

// Story: crud:PriorityScheme:nondet:1:1
bthread("crud:PriorityScheme:nondet:1:1", function () {
  let defaultPriorityId;
  let description = "description_1010";
  let expand = "expand_1010";
  let mappings = "mappings_1010";
  let maxResults = "maxResults_1010";
  let name = "name_1010";
  let onlyDefault = "onlyDefault_1010";
  let orderBy = "orderBy_1010";
  let priorityId;
  let priorityIds;
  let projectIds;
  let schemeId = 1010;
  let schemeName = "schemeName_1010";
  let startAt = "startAt_1010";
  // Dependency Barrier
  let deps = {};
  deps["defaultPriorityId"] = matchAnyPriorityAdded();
  deps["priorityId"] = matchAnyPriorityAdded();
  deps["priorityIds"] = matchAnyPriorityAdded();
  deps["projectIds"] = matchAnyProjectAdded();
  let pkMap = {"defaultPriorityId": "id", "priorityId": "id", "priorityIds": "id", "projectIds": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  defaultPriorityId = captured["defaultPriorityId"];
  priorityId = captured["priorityId"];
  priorityIds = captured["priorityIds"];
  projectIds = captured["projectIds"];
  createPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  waitForPrioritySchemeAdded(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  tryToAddExistingPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  verifyPrioritySchemeExists(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  updatePriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  deletePriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  tryToDeleteANonExistingPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  verifyPrioritySchemeDoesNotExist(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
});

// Story: crud:PriorityScheme:nondet:1:2
bthread("crud:PriorityScheme:nondet:1:2", function () {
  let defaultPriorityId;
  let description = "description_1011";
  let expand = "expand_1011";
  let mappings = "mappings_1011";
  let maxResults = "maxResults_1011";
  let name = "name_1011";
  let onlyDefault = "onlyDefault_1011";
  let orderBy = "orderBy_1011";
  let priorityId;
  let priorityIds;
  let projectIds;
  let schemeId = 1011;
  let schemeName = "schemeName_1011";
  let startAt = "startAt_1011";
  // Dependency Barrier
  let deps = {};
  deps["defaultPriorityId"] = matchAnyPriorityAdded();
  deps["priorityId"] = matchAnyPriorityAdded();
  deps["priorityIds"] = matchAnyPriorityAdded();
  deps["projectIds"] = matchAnyProjectAdded();
  let pkMap = {"defaultPriorityId": "id", "priorityId": "id", "priorityIds": "id", "projectIds": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  defaultPriorityId = captured["defaultPriorityId"];
  priorityId = captured["priorityId"];
  priorityIds = captured["priorityIds"];
  projectIds = captured["projectIds"];
  createPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  // waitForPrioritySchemeAdded(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  tryToAddExistingPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  updatePriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  verifyPrioritySchemeExists(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  deletePriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  tryToDeleteANonExistingPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  verifyPrioritySchemeDoesNotExist(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
});

// Story: crud:PriorityScheme:nondet:negative:dup-add
bthread("crud:PriorityScheme:nondet:negative:dup-add", function () {
  let defaultPriorityId;
  let description = "description_1016";
  let expand = "expand_1016";
  let mappings = "mappings_1016";
  let maxResults = "maxResults_1016";
  let name = "name_1016";
  let onlyDefault = "onlyDefault_1016";
  let orderBy = "orderBy_1016";
  let priorityId;
  let priorityIds;
  let projectIds;
  let schemeId = 1016;
  let schemeName = "schemeName_1016";
  let startAt = "startAt_1016";
  // Dependency Barrier
  let deps = {};
  deps["defaultPriorityId"] = matchAnyPriorityAdded();
  deps["priorityId"] = matchAnyPriorityAdded();
  deps["priorityIds"] = matchAnyPriorityAdded();
  deps["projectIds"] = matchAnyProjectAdded();
  let pkMap = {"defaultPriorityId": "id", "priorityId": "id", "priorityIds": "id", "projectIds": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  defaultPriorityId = captured["defaultPriorityId"];
  priorityId = captured["priorityId"];
  priorityIds = captured["priorityIds"];
  projectIds = captured["projectIds"];
  createPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  // waitForPrioritySchemeAdded(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  verifyPrioritySchemeExists(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  tryToAddExistingPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  verifyPrioritySchemeExists(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
});

// Story: crud:PrioritySchemePriorities:read_only
bthread("crud:PrioritySchemePriorities:read_only", function () {
  let maxResults = "maxResults_1030";
  let schemeId = 1030;
  let startAt = "startAt_1030";
  verifyPrioritySchemePrioritiesExists(maxResults, schemeId, startAt);
});

// Story: crud:PrioritySchemeProjects:read_only
bthread("crud:PrioritySchemeProjects:read_only", function () {
  let maxResults = "maxResults_1040";
  let projectId;
  let query = "query_1040";
  let schemeId = 1040;
  let startAt = "startAt_1040";
  verifyPrioritySchemeProjectsExists(maxResults, projectId, query, schemeId, startAt);
});

// Story: crud:AvailablePriorities:read_only
bthread("crud:AvailablePriorities:read_only", function () {
  let exclude = "exclude_1050";
  let maxResults = "maxResults_1050";
  let query = "query_1050";
  let schemeId = 1050;
  let startAt = "startAt_1050";
  verifyAvailablePrioritiesExists(exclude, maxResults, query, schemeId, startAt);
});

// Story: crud:Status:nondet:1:1
bthread("crud:Status:nondet:1:1", function () {
  let id = 1060;
  let name = "name_1060";
  let scope = "scope_1060";
  let scope.project.id;
  let statuses = "statuses_1060";
  // Dependency Barrier
  let deps = {};
  deps["scope.project.id"] = matchAnyProjectAdded();
  let pkMap = {"scope.project.id": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  scope.project.id = captured["scope.project.id"];
  createStatuses(id, name, scope, scope.project.id, statuses);
  waitForStatusAdded(id, name, scope, scope.project.id, statuses);
  tryToAddExistingStatus(id, name, scope, scope.project.id, statuses);
  verifyStatusExists(id, name, scope, scope.project.id, statuses);
  updateStatuses(id, name, scope, scope.project.id, statuses);
  deleteStatusesById(id, name, scope, scope.project.id, statuses);
  tryToDeleteANonExistingStatus(id, name, scope, scope.project.id, statuses);
  verifyStatusDoesNotExist(id, name, scope, scope.project.id, statuses);
});

// Story: crud:Status:nondet:1:2
bthread("crud:Status:nondet:1:2", function () {
  let id = 1061;
  let name = "name_1061";
  let scope = "scope_1061";
  let scope.project.id;
  let statuses = "statuses_1061";
  // Dependency Barrier
  let deps = {};
  deps["scope.project.id"] = matchAnyProjectAdded();
  let pkMap = {"scope.project.id": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  scope.project.id = captured["scope.project.id"];
  createStatuses(id, name, scope, scope.project.id, statuses);
  // waitForStatusAdded(id, name, scope, scope.project.id, statuses);
  tryToAddExistingStatus(id, name, scope, scope.project.id, statuses);
  updateStatuses(id, name, scope, scope.project.id, statuses);
  verifyStatusExists(id, name, scope, scope.project.id, statuses);
  deleteStatusesById(id, name, scope, scope.project.id, statuses);
  tryToDeleteANonExistingStatus(id, name, scope, scope.project.id, statuses);
  verifyStatusDoesNotExist(id, name, scope, scope.project.id, statuses);
});

// Story: crud:Status:nondet:negative:dup-add
bthread("crud:Status:nondet:negative:dup-add", function () {
  let id = 1066;
  let name = "name_1066";
  let scope = "scope_1066";
  let scope.project.id;
  let statuses = "statuses_1066";
  // Dependency Barrier
  let deps = {};
  deps["scope.project.id"] = matchAnyProjectAdded();
  let pkMap = {"scope.project.id": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  scope.project.id = captured["scope.project.id"];
  createStatuses(id, name, scope, scope.project.id, statuses);
  // waitForStatusAdded(id, name, scope, scope.project.id, statuses);
  verifyStatusExists(id, name, scope, scope.project.id, statuses);
  tryToAddExistingStatus(id, name, scope, scope.project.id, statuses);
  verifyStatusExists(id, name, scope, scope.project.id, statuses);
});

// Story: crud:WorkflowSchemeDraft:nondet:1:1
bthread("crud:WorkflowSchemeDraft:nondet:1:1", function () {
  let id = 1070;
  createWorkflowSchemeDraftFromParent(id);
  waitForWorkflowSchemeDraftAdded(id);
  tryToAddExistingWorkflowSchemeDraft(id);
  verifyWorkflowSchemeDraftExists(id);
  updateWorkflowSchemeDraft(id);
  deleteWorkflowSchemeDraft(id);
  tryToDeleteANonExistingWorkflowSchemeDraft(id);
  verifyWorkflowSchemeDraftDoesNotExist(id);
});

// Story: crud:WorkflowSchemeDraft:nondet:1:2
bthread("crud:WorkflowSchemeDraft:nondet:1:2", function () {
  let id = 1071;
  createWorkflowSchemeDraftFromParent(id);
  // waitForWorkflowSchemeDraftAdded(id);
  tryToAddExistingWorkflowSchemeDraft(id);
  updateWorkflowSchemeDraft(id);
  verifyWorkflowSchemeDraftExists(id);
  deleteWorkflowSchemeDraft(id);
  tryToDeleteANonExistingWorkflowSchemeDraft(id);
  verifyWorkflowSchemeDraftDoesNotExist(id);
});

// Story: crud:WorkflowSchemeDraft:nondet:negative:dup-add
bthread("crud:WorkflowSchemeDraft:nondet:negative:dup-add", function () {
  let id = 1076;
  createWorkflowSchemeDraftFromParent(id);
  // waitForWorkflowSchemeDraftAdded(id);
  verifyWorkflowSchemeDraftExists(id);
  tryToAddExistingWorkflowSchemeDraft(id);
  verifyWorkflowSchemeDraftExists(id);
});

// Story: crud:DraftDefaultWorkflow:read_only
bthread("crud:DraftDefaultWorkflow:read_only", function () {
  let id = 1080;
  verifyDraftDefaultWorkflowExists(id);
});

// Story: crud:WorkflowSchemeDraftIssueType:read_only
bthread("crud:WorkflowSchemeDraftIssueType:read_only", function () {
  let id = 1090;
  let issueType = "issueType_1090";
  verifyWorkflowSchemeDraftIssueTypeExists(id, issueType);
});

// Story: crud:DraftWorkflowMapping:read_only
bthread("crud:DraftWorkflowMapping:read_only", function () {
  let id = 1110;
  let workflowName = "workflowName_1110";
  verifyDraftWorkflowMappingExists(id, workflowName);
});

// Story: crud:Component:nondet:1:1
bthread("crud:Component:nondet:1:1", function () {
  let ari = "ari_1120";
  let assignee = "assignee_1120";
  let assigneeType = "assigneeType_1120";
  let description = "description_1120";
  let id = 1120;
  let isAssigneeTypeValid = 1120;
  let lead = "lead_1120";
  let leadAccountId = 1120;
  let leadUserName = "leadUserName_1120";
  let metadata = {};
  let moveIssuesTo = "moveIssuesTo_1120";
  let name = "name_1120";
  let project = "project_1120";
  let projectId;
  let realAssignee = "realAssignee_1120";
  let realAssigneeType = "realAssigneeType_1120";
  let self = "self_1120";
  // Dependency Barrier
  let deps = {};
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  projectId = captured["projectId"];
  createComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  waitForComponentAdded(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  tryToAddExistingComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  verifyComponentExists(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  updateComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  deleteComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  tryToDeleteANonExistingComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  verifyComponentDoesNotExist(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
});

// Story: crud:Component:nondet:1:2
bthread("crud:Component:nondet:1:2", function () {
  let ari = "ari_1121";
  let assignee = "assignee_1121";
  let assigneeType = "assigneeType_1121";
  let description = "description_1121";
  let id = 1121;
  let isAssigneeTypeValid = 1121;
  let lead = "lead_1121";
  let leadAccountId = 1121;
  let leadUserName = "leadUserName_1121";
  let metadata = {};
  let moveIssuesTo = "moveIssuesTo_1121";
  let name = "name_1121";
  let project = "project_1121";
  let projectId;
  let realAssignee = "realAssignee_1121";
  let realAssigneeType = "realAssigneeType_1121";
  let self = "self_1121";
  // Dependency Barrier
  let deps = {};
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  projectId = captured["projectId"];
  createComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  // waitForComponentAdded(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  tryToAddExistingComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  updateComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  verifyComponentExists(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  deleteComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  tryToDeleteANonExistingComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  verifyComponentDoesNotExist(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
});

// Story: crud:Component:nondet:negative:dup-add
bthread("crud:Component:nondet:negative:dup-add", function () {
  let ari = "ari_1126";
  let assignee = "assignee_1126";
  let assigneeType = "assigneeType_1126";
  let description = "description_1126";
  let id = 1126;
  let isAssigneeTypeValid = 1126;
  let lead = "lead_1126";
  let leadAccountId = 1126;
  let leadUserName = "leadUserName_1126";
  let metadata = {};
  let moveIssuesTo = "moveIssuesTo_1126";
  let name = "name_1126";
  let project = "project_1126";
  let projectId;
  let realAssignee = "realAssignee_1126";
  let realAssigneeType = "realAssigneeType_1126";
  let self = "self_1126";
  // Dependency Barrier
  let deps = {};
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  projectId = captured["projectId"];
  createComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  // waitForComponentAdded(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  verifyComponentExists(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  tryToAddExistingComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  verifyComponentExists(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
});

// Story: crud:CustomFieldOption:nondet:1:1
bthread("crud:CustomFieldOption:nondet:1:1", function () {
  let contextId = 1130;
  let fieldId = 1130;
  let id = 1130;
  let maxResults = "maxResults_1130";
  let onlyOptions = "onlyOptions_1130";
  let optionId = 1130;
  let options = "options_1130";
  let startAt = "startAt_1130";
  createCustomFieldOption(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  waitForCustomFieldOptionAdded(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  tryToAddExistingCustomFieldOption(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  verifyCustomFieldOptionExists(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  updateCustomFieldOption(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  deleteCustomFieldOption(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  tryToDeleteANonExistingCustomFieldOption(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  verifyCustomFieldOptionDoesNotExist(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
});

// Story: crud:CustomFieldOption:nondet:1:2
bthread("crud:CustomFieldOption:nondet:1:2", function () {
  let contextId = 1131;
  let fieldId = 1131;
  let id = 1131;
  let maxResults = "maxResults_1131";
  let onlyOptions = "onlyOptions_1131";
  let optionId = 1131;
  let options = "options_1131";
  let startAt = "startAt_1131";
  createCustomFieldOption(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  // waitForCustomFieldOptionAdded(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  tryToAddExistingCustomFieldOption(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  updateCustomFieldOption(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  verifyCustomFieldOptionExists(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  deleteCustomFieldOption(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  tryToDeleteANonExistingCustomFieldOption(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  verifyCustomFieldOptionDoesNotExist(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
});

// Story: crud:CustomFieldOption:nondet:negative:dup-add
bthread("crud:CustomFieldOption:nondet:negative:dup-add", function () {
  let contextId = 1136;
  let fieldId = 1136;
  let id = 1136;
  let maxResults = "maxResults_1136";
  let onlyOptions = "onlyOptions_1136";
  let optionId = 1136;
  let options = "options_1136";
  let startAt = "startAt_1136";
  createCustomFieldOption(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  // waitForCustomFieldOptionAdded(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  verifyCustomFieldOptionExists(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  tryToAddExistingCustomFieldOption(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
  verifyCustomFieldOptionExists(contextId, fieldId, id, maxResults, onlyOptions, optionId, options, startAt);
});

// Story: crud:Screen:nondet:1:1
bthread("crud:Screen:nondet:1:1", function () {
  let description = "description_1160";
  let id = 1160;
  let maxResults = "maxResults_1160";
  let name = "name_1160";
  let orderBy = "orderBy_1160";
  let queryString = "queryString_1160";
  let scope = "scope_1160";
  let screenId = 1160;
  let startAt = "startAt_1160";
  createScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  waitForScreenAdded(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  tryToAddExistingScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  verifyScreenExists(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  updateScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  deleteScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  tryToDeleteANonExistingScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  verifyScreenDoesNotExist(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
});

// Story: crud:Screen:nondet:1:2
bthread("crud:Screen:nondet:1:2", function () {
  let description = "description_1161";
  let id = 1161;
  let maxResults = "maxResults_1161";
  let name = "name_1161";
  let orderBy = "orderBy_1161";
  let queryString = "queryString_1161";
  let scope = "scope_1161";
  let screenId = 1161;
  let startAt = "startAt_1161";
  createScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  // waitForScreenAdded(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  tryToAddExistingScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  updateScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  verifyScreenExists(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  deleteScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  tryToDeleteANonExistingScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  verifyScreenDoesNotExist(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
});

// Story: crud:Screen:nondet:negative:dup-add
bthread("crud:Screen:nondet:negative:dup-add", function () {
  let description = "description_1166";
  let id = 1166;
  let maxResults = "maxResults_1166";
  let name = "name_1166";
  let orderBy = "orderBy_1166";
  let queryString = "queryString_1166";
  let scope = "scope_1166";
  let screenId = 1166;
  let startAt = "startAt_1166";
  createScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  // waitForScreenAdded(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  verifyScreenExists(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  tryToAddExistingScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  verifyScreenExists(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
});

// Story: crud:FieldScreens:read_only
bthread("crud:FieldScreens:read_only", function () {
  let expand = "expand_1170";
  let fieldId = 1170;
  let maxResults = "maxResults_1170";
  let startAt = "startAt_1170";
  verifyFieldScreensExists(expand, fieldId, maxResults, startAt);
});

// Story: crud:AvailableScreenFields:read_only
bthread("crud:AvailableScreenFields:read_only", function () {
  let screenId;
  verifyAvailableScreenFieldsExists(screenId);
});

// Story: crud:IssueFieldOption:nondet:1:1
bthread("crud:IssueFieldOption:nondet:1:1", function () {
  let config = "config_1200";
  let fieldKey = 1200;
  let optionId = 1200;
  let properties = {};
  let value = "value_1200";
  createIssueFieldOption(config, fieldKey, optionId, properties, value);
  waitForIssueFieldOptionAdded(config, fieldKey, optionId, properties, value);
  tryToAddExistingIssueFieldOption(config, fieldKey, optionId, properties, value);
  verifyIssueFieldOptionExists(config, fieldKey, optionId, properties, value);
  updateIssueFieldOption(config, fieldKey, optionId, properties, value);
  deleteIssueFieldOption(config, fieldKey, optionId, properties, value);
  tryToDeleteANonExistingIssueFieldOption(config, fieldKey, optionId, properties, value);
  verifyIssueFieldOptionDoesNotExist(config, fieldKey, optionId, properties, value);
});

// Story: crud:IssueFieldOption:nondet:1:2
bthread("crud:IssueFieldOption:nondet:1:2", function () {
  let config = "config_1201";
  let fieldKey = 1201;
  let optionId = 1201;
  let properties = {};
  let value = "value_1201";
  createIssueFieldOption(config, fieldKey, optionId, properties, value);
  // waitForIssueFieldOptionAdded(config, fieldKey, optionId, properties, value);
  tryToAddExistingIssueFieldOption(config, fieldKey, optionId, properties, value);
  updateIssueFieldOption(config, fieldKey, optionId, properties, value);
  verifyIssueFieldOptionExists(config, fieldKey, optionId, properties, value);
  deleteIssueFieldOption(config, fieldKey, optionId, properties, value);
  tryToDeleteANonExistingIssueFieldOption(config, fieldKey, optionId, properties, value);
  verifyIssueFieldOptionDoesNotExist(config, fieldKey, optionId, properties, value);
});

// Story: crud:IssueFieldOption:nondet:negative:dup-add
bthread("crud:IssueFieldOption:nondet:negative:dup-add", function () {
  let config = "config_1206";
  let fieldKey = 1206;
  let optionId = 1206;
  let properties = {};
  let value = "value_1206";
  createIssueFieldOption(config, fieldKey, optionId, properties, value);
  // waitForIssueFieldOptionAdded(config, fieldKey, optionId, properties, value);
  verifyIssueFieldOptionExists(config, fieldKey, optionId, properties, value);
  tryToAddExistingIssueFieldOption(config, fieldKey, optionId, properties, value);
  verifyIssueFieldOptionExists(config, fieldKey, optionId, properties, value);
});

// Story: crud:Group:nondet:1:1
bthread("crud:Group:nondet:1:1", function () {
  let expand = "expand_1210";
  let groupId = 1210;
  let groupname = "groupname_1210";
  let name = "name_1210";
  let swapGroup = "swapGroup_1210";
  let swapGroupId = 1210;
  createGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  waitForGroupAdded(expand, groupId, groupname, name, swapGroup, swapGroupId);
  tryToAddExistingGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  verifyGroupExists(expand, groupId, groupname, name, swapGroup, swapGroupId);
  removeGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  tryToDeleteANonExistingGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  verifyGroupDoesNotExist(expand, groupId, groupname, name, swapGroup, swapGroupId);
});

// Story: crud:Group:nondet:1:2
bthread("crud:Group:nondet:1:2", function () {
  let expand = "expand_1211";
  let groupId = 1211;
  let groupname = "groupname_1211";
  let name = "name_1211";
  let swapGroup = "swapGroup_1211";
  let swapGroupId = 1211;
  createGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  // waitForGroupAdded(expand, groupId, groupname, name, swapGroup, swapGroupId);
  tryToAddExistingGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  verifyGroupExists(expand, groupId, groupname, name, swapGroup, swapGroupId);
  removeGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  tryToDeleteANonExistingGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  verifyGroupDoesNotExist(expand, groupId, groupname, name, swapGroup, swapGroupId);
});

// Story: crud:Group:nondet:negative:dup-add
bthread("crud:Group:nondet:negative:dup-add", function () {
  let expand = "expand_1216";
  let groupId = 1216;
  let groupname = "groupname_1216";
  let name = "name_1216";
  let swapGroup = "swapGroup_1216";
  let swapGroupId = 1216;
  createGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  // waitForGroupAdded(expand, groupId, groupname, name, swapGroup, swapGroupId);
  verifyGroupExists(expand, groupId, groupname, name, swapGroup, swapGroupId);
  tryToAddExistingGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  verifyGroupExists(expand, groupId, groupname, name, swapGroup, swapGroupId);
});

// Story: crud:GroupBulk:read_only
bthread("crud:GroupBulk:read_only", function () {
  let accessType = "accessType_1220";
  let applicationKey = "applicationKey_1220";
  let groupId;
  let groupName = "groupName_1220";
  let maxResults = "maxResults_1220";
  let startAt = "startAt_1220";
  verifyGroupBulkExists(accessType, applicationKey, groupId, groupName, maxResults, startAt);
});

// Story: crud:GroupMember:read_only
bthread("crud:GroupMember:read_only", function () {
  let groupId;
  let groupname = "groupname_1230";
  let includeInactiveUsers = "includeInactiveUsers_1230";
  let maxResults = "maxResults_1230";
  let startAt = "startAt_1230";
  verifyGroupMemberExists(groupId, groupname, includeInactiveUsers, maxResults, startAt);
});

// Story: crud:GroupUser:nondet:1:1
bthread("crud:GroupUser:nondet:1:1", function () {
  let accountId = 1240;
  let groupId;
  let groupname = "groupname_1240";
  let name = "name_1240";
  // Dependency Barrier
  let deps = {};
  deps["groupId"] = matchAnyGroupAdded();
  let pkMap = {"groupId": "groupId"};
  let captured = resolveDependencies(deps, pkMap);
  groupId = captured["groupId"];
  addUserToGroup(accountId, groupId, groupname, name);
  waitForGroupUserAdded(accountId, groupId, groupname, name);
  tryToAddExistingGroupUser(accountId, groupId, groupname, name);
  verifyGroupUserExists(accountId, groupId, groupname, name);
  removeUserFromGroup(accountId, groupId, groupname, name);
  tryToDeleteANonExistingGroupUser(accountId, groupId, groupname, name);
  verifyGroupUserDoesNotExist(accountId, groupId, groupname, name);
});

// Story: crud:GroupUser:nondet:1:2
bthread("crud:GroupUser:nondet:1:2", function () {
  let accountId = 1241;
  let groupId;
  let groupname = "groupname_1241";
  let name = "name_1241";
  // Dependency Barrier
  let deps = {};
  deps["groupId"] = matchAnyGroupAdded();
  let pkMap = {"groupId": "groupId"};
  let captured = resolveDependencies(deps, pkMap);
  groupId = captured["groupId"];
  addUserToGroup(accountId, groupId, groupname, name);
  // waitForGroupUserAdded(accountId, groupId, groupname, name);
  tryToAddExistingGroupUser(accountId, groupId, groupname, name);
  verifyGroupUserExists(accountId, groupId, groupname, name);
  removeUserFromGroup(accountId, groupId, groupname, name);
  tryToDeleteANonExistingGroupUser(accountId, groupId, groupname, name);
  verifyGroupUserDoesNotExist(accountId, groupId, groupname, name);
});

// Story: crud:GroupUser:nondet:negative:dup-add
bthread("crud:GroupUser:nondet:negative:dup-add", function () {
  let accountId = 1246;
  let groupId;
  let groupname = "groupname_1246";
  let name = "name_1246";
  // Dependency Barrier
  let deps = {};
  deps["groupId"] = matchAnyGroupAdded();
  let pkMap = {"groupId": "groupId"};
  let captured = resolveDependencies(deps, pkMap);
  groupId = captured["groupId"];
  addUserToGroup(accountId, groupId, groupname, name);
  // waitForGroupUserAdded(accountId, groupId, groupname, name);
  verifyGroupUserExists(accountId, groupId, groupname, name);
  tryToAddExistingGroupUser(accountId, groupId, groupname, name);
  verifyGroupUserExists(accountId, groupId, groupname, name);
});

// Story: crud:GroupsPicker:read_only
bthread("crud:GroupsPicker:read_only", function () {
  let accountId = 1250;
  let caseInsensitive = "caseInsensitive_1250";
  let exclude = "exclude_1250";
  let excludeId = 1250;
  let includeTeams = "includeTeams_1250";
  let maxResults = "maxResults_1250";
  let query = "query_1250";
  verifyGroupsPickerExists(accountId, caseInsensitive, exclude, excludeId, includeTeams, maxResults, query);
});

// Story: crud:IssueSearch:read_only
bthread("crud:IssueSearch:read_only", function () {
  let currentIssueKey = "currentIssueKey_1260";
  let currentJQL = "currentJQL_1260";
  let currentProjectId;
  let expand = "expand_1260";
  let failFast = "failFast_1260";
  let fields = "fields_1260";
  let fieldsByKeys = "fieldsByKeys_1260";
  let jql = "jql_1260";
  let maxResults = "maxResults_1260";
  let nextPageToken = "nextPageToken_1260";
  let properties = "properties_1260";
  let query = "query_1260";
  let reconcileIssues = "reconcileIssues_1260";
  let showSubTaskParent = "showSubTaskParent_1260";
  let showSubTasks = "showSubTasks_1260";
  let startAt = "startAt_1260";
  let validateQuery = "validateQuery_1260";
  verifyIssueSearchExists(currentIssueKey, currentJQL, currentProjectId, expand, failFast, fields, fieldsByKeys, jql, maxResults, nextPageToken, properties, query, reconcileIssues, showSubTaskParent, showSubTasks, startAt, validateQuery);
});

// Story: crud:IssuePicker:read_only
bthread("crud:IssuePicker:read_only", function () {
  let currentIssueKey = "currentIssueKey_1270";
  let currentJQL = "currentJQL_1270";
  let currentProjectId;
  let query = "query_1270";
  let showSubTaskParent = "showSubTaskParent_1270";
  let showSubTasks = "showSubTasks_1270";
  verifyIssuePickerExists(currentIssueKey, currentJQL, currentProjectId, query, showSubTaskParent, showSubTasks);
});

// Story: crud:IssueSearchEnhanced:read_only
bthread("crud:IssueSearchEnhanced:read_only", function () {
  let expand = "expand_1300";
  let failFast = "failFast_1300";
  let fields = "fields_1300";
  let fieldsByKeys = "fieldsByKeys_1300";
  let jql = "jql_1300";
  let maxResults = "maxResults_1300";
  let nextPageToken = "nextPageToken_1300";
  let properties = "properties_1300";
  let reconcileIssues = "reconcileIssues_1300";
  verifyIssueSearchEnhancedExists(expand, failFast, fields, fieldsByKeys, jql, maxResults, nextPageToken, properties, reconcileIssues);
});

// Story: crud:IssueProperty:nondet:1:1
bthread("crud:IssueProperty:nondet:1:1", function () {
  let issueIdOrKey;
  let propertyKey = "propertyKey_1310";
  // Dependency Barrier
  let deps = {};
  deps["issueIdOrKey"] = matchAnyIssueAdded();
  let pkMap = {"issueIdOrKey": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueIdOrKey = captured["issueIdOrKey"];
  setIssueProperty(issueIdOrKey, propertyKey);
  waitForIssuePropertyAdded(issueIdOrKey, propertyKey);
  tryToAddExistingIssueProperty(issueIdOrKey, propertyKey);
  verifyIssuePropertyExists(issueIdOrKey, propertyKey);
  bulkSetIssueProperty(issueIdOrKey, propertyKey);
  deleteIssueProperty(issueIdOrKey, propertyKey);
  tryToDeleteANonExistingIssueProperty(issueIdOrKey, propertyKey);
  verifyIssuePropertyDoesNotExist(issueIdOrKey, propertyKey);
});

// Story: crud:IssueProperty:nondet:1:2
bthread("crud:IssueProperty:nondet:1:2", function () {
  let issueIdOrKey;
  let propertyKey = "propertyKey_1311";
  // Dependency Barrier
  let deps = {};
  deps["issueIdOrKey"] = matchAnyIssueAdded();
  let pkMap = {"issueIdOrKey": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueIdOrKey = captured["issueIdOrKey"];
  setIssueProperty(issueIdOrKey, propertyKey);
  // waitForIssuePropertyAdded(issueIdOrKey, propertyKey);
  tryToAddExistingIssueProperty(issueIdOrKey, propertyKey);
  bulkSetIssueProperty(issueIdOrKey, propertyKey);
  verifyIssuePropertyExists(issueIdOrKey, propertyKey);
  deleteIssueProperty(issueIdOrKey, propertyKey);
  tryToDeleteANonExistingIssueProperty(issueIdOrKey, propertyKey);
  verifyIssuePropertyDoesNotExist(issueIdOrKey, propertyKey);
});

// Story: crud:IssueProperty:nondet:negative:dup-add
bthread("crud:IssueProperty:nondet:negative:dup-add", function () {
  let issueIdOrKey;
  let propertyKey = "propertyKey_1316";
  // Dependency Barrier
  let deps = {};
  deps["issueIdOrKey"] = matchAnyIssueAdded();
  let pkMap = {"issueIdOrKey": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueIdOrKey = captured["issueIdOrKey"];
  setIssueProperty(issueIdOrKey, propertyKey);
  // waitForIssuePropertyAdded(issueIdOrKey, propertyKey);
  verifyIssuePropertyExists(issueIdOrKey, propertyKey);
  tryToAddExistingIssueProperty(issueIdOrKey, propertyKey);
  verifyIssuePropertyExists(issueIdOrKey, propertyKey);
});

// Story: crud:IssuePropertyKeys:read_only
bthread("crud:IssuePropertyKeys:read_only", function () {
  let issueIdOrKey;
  verifyIssuePropertyKeysExists(issueIdOrKey);
});

// Story: crud:IssueType:nondet:1:1
bthread("crud:IssueType:nondet:1:1", function () {
  let alternativeIssueTypeId;
  let description = "description_1330";
  let hierarchyLevel = 1330;
  let id = 1330;
  let level = "level_1330";
  let name = "name_1330";
  let projectId;
  let size = "size_1330";
  let type = "type_1330";
  let x = "x_1330";
  let y = "y_1330";
  // Dependency Barrier
  let deps = {};
  deps["alternativeIssueTypeId"] = matchAnyIssueAdded();
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"alternativeIssueTypeId": "issueIdOrKey", "projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  alternativeIssueTypeId = captured["alternativeIssueTypeId"];
  projectId = captured["projectId"];
  createIssueType(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  waitForIssueTypeAdded(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  tryToAddExistingIssueType(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  verifyIssueTypeExists(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  updateIssueType(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  deleteIssueType(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  tryToDeleteANonExistingIssueType(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  verifyIssueTypeDoesNotExist(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
});

// Story: crud:IssueType:nondet:1:2
bthread("crud:IssueType:nondet:1:2", function () {
  let alternativeIssueTypeId;
  let description = "description_1331";
  let hierarchyLevel = 1331;
  let id = 1331;
  let level = "level_1331";
  let name = "name_1331";
  let projectId;
  let size = "size_1331";
  let type = "type_1331";
  let x = "x_1331";
  let y = "y_1331";
  // Dependency Barrier
  let deps = {};
  deps["alternativeIssueTypeId"] = matchAnyIssueAdded();
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"alternativeIssueTypeId": "issueIdOrKey", "projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  alternativeIssueTypeId = captured["alternativeIssueTypeId"];
  projectId = captured["projectId"];
  createIssueType(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  // waitForIssueTypeAdded(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  tryToAddExistingIssueType(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  updateIssueType(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  verifyIssueTypeExists(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  deleteIssueType(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  tryToDeleteANonExistingIssueType(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  verifyIssueTypeDoesNotExist(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
});

// Story: crud:IssueType:nondet:negative:dup-add
bthread("crud:IssueType:nondet:negative:dup-add", function () {
  let alternativeIssueTypeId;
  let description = "description_1336";
  let hierarchyLevel = 1336;
  let id = 1336;
  let level = "level_1336";
  let name = "name_1336";
  let projectId;
  let size = "size_1336";
  let type = "type_1336";
  let x = "x_1336";
  let y = "y_1336";
  // Dependency Barrier
  let deps = {};
  deps["alternativeIssueTypeId"] = matchAnyIssueAdded();
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"alternativeIssueTypeId": "issueIdOrKey", "projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  alternativeIssueTypeId = captured["alternativeIssueTypeId"];
  projectId = captured["projectId"];
  createIssueType(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  // waitForIssueTypeAdded(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  verifyIssueTypeExists(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  tryToAddExistingIssueType(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  verifyIssueTypeExists(alternativeIssueTypeId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
});

// Story: crud:JqlAutoCompleteData:read_only
bthread("crud:JqlAutoCompleteData:read_only", function () {
  let includeCollapsedFields = "includeCollapsedFields_1340";
  let projectIds;
  verifyJqlAutoCompleteDataExists(includeCollapsedFields, projectIds);
});

// Story: crud:JqlAutoCompleteSuggestions:read_only
bthread("crud:JqlAutoCompleteSuggestions:read_only", function () {
  let fieldName = "fieldName_1350";
  let fieldValue = "fieldValue_1350";
  let predicateName = "predicateName_1350";
  let predicateValue = "predicateValue_1350";
  verifyJqlAutoCompleteSuggestionsExists(fieldName, fieldValue, predicateName, predicateValue);
});

// Story: crud:Plan:nondet:1:1
bthread("crud:Plan:nondet:1:1", function () {
  let crossProjectReleases = "crossProjectReleases_1390";
  let customFields = "customFields_1390";
  let exclusionRules = "exclusionRules_1390";
  let issueSources = "issueSources_1390";
  let leadAccountId = 1390;
  let name = "name_1390";
  let permissions = "permissions_1390";
  let planId = 1390;
  let scheduling = "scheduling_1390";
  createPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  waitForPlanAdded(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  tryToAddExistingPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  verifyPlanExists(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  updatePlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  trashPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  tryToDeleteANonExistingPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  verifyPlanDoesNotExist(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
});

// Story: crud:Plan:nondet:1:2
bthread("crud:Plan:nondet:1:2", function () {
  let crossProjectReleases = "crossProjectReleases_1391";
  let customFields = "customFields_1391";
  let exclusionRules = "exclusionRules_1391";
  let issueSources = "issueSources_1391";
  let leadAccountId = 1391;
  let name = "name_1391";
  let permissions = "permissions_1391";
  let planId = 1391;
  let scheduling = "scheduling_1391";
  createPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  // waitForPlanAdded(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  tryToAddExistingPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  updatePlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  verifyPlanExists(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  trashPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  tryToDeleteANonExistingPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  verifyPlanDoesNotExist(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
});

// Story: crud:Plan:nondet:negative:dup-add
bthread("crud:Plan:nondet:negative:dup-add", function () {
  let crossProjectReleases = "crossProjectReleases_1396";
  let customFields = "customFields_1396";
  let exclusionRules = "exclusionRules_1396";
  let issueSources = "issueSources_1396";
  let leadAccountId = 1396;
  let name = "name_1396";
  let permissions = "permissions_1396";
  let planId = 1396;
  let scheduling = "scheduling_1396";
  createPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  // waitForPlanAdded(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  verifyPlanExists(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  tryToAddExistingPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
  verifyPlanExists(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling);
});

// Story: crud:AtlassianTeam:nondet:1:1
bthread("crud:AtlassianTeam:nondet:1:1", function () {
  let capacity = 1400;
  let id = 1400;
  let issueSourceId;
  let planId;
  let planningStyle = "planningStyle_1400";
  let sprintLength = 1400;
  // Dependency Barrier
  let deps = {};
  deps["issueSourceId"] = matchAnyIssueAdded();
  deps["planId"] = matchAnyPlanAdded();
  let pkMap = {"issueSourceId": "issueIdOrKey", "planId": "planId"};
  let captured = resolveDependencies(deps, pkMap);
  issueSourceId = captured["issueSourceId"];
  planId = captured["planId"];
  addAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  waitForAtlassianTeamAdded(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  tryToAddExistingAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  verifyAtlassianTeamExists(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  updateAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  removeAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  tryToDeleteANonExistingAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  verifyAtlassianTeamDoesNotExist(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
});

// Story: crud:AtlassianTeam:nondet:1:2
bthread("crud:AtlassianTeam:nondet:1:2", function () {
  let capacity = 1401;
  let id = 1401;
  let issueSourceId;
  let planId;
  let planningStyle = "planningStyle_1401";
  let sprintLength = 1401;
  // Dependency Barrier
  let deps = {};
  deps["issueSourceId"] = matchAnyIssueAdded();
  deps["planId"] = matchAnyPlanAdded();
  let pkMap = {"issueSourceId": "issueIdOrKey", "planId": "planId"};
  let captured = resolveDependencies(deps, pkMap);
  issueSourceId = captured["issueSourceId"];
  planId = captured["planId"];
  addAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  // waitForAtlassianTeamAdded(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  tryToAddExistingAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  updateAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  verifyAtlassianTeamExists(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  removeAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  tryToDeleteANonExistingAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  verifyAtlassianTeamDoesNotExist(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
});

// Story: crud:AtlassianTeam:nondet:negative:dup-add
bthread("crud:AtlassianTeam:nondet:negative:dup-add", function () {
  let capacity = 1406;
  let id = 1406;
  let issueSourceId;
  let planId;
  let planningStyle = "planningStyle_1406";
  let sprintLength = 1406;
  // Dependency Barrier
  let deps = {};
  deps["issueSourceId"] = matchAnyIssueAdded();
  deps["planId"] = matchAnyPlanAdded();
  let pkMap = {"issueSourceId": "issueIdOrKey", "planId": "planId"};
  let captured = resolveDependencies(deps, pkMap);
  issueSourceId = captured["issueSourceId"];
  planId = captured["planId"];
  addAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  // waitForAtlassianTeamAdded(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  verifyAtlassianTeamExists(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  tryToAddExistingAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  verifyAtlassianTeamExists(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
});

// Story: crud:PlanOnlyTeam:nondet:1:1
bthread("crud:PlanOnlyTeam:nondet:1:1", function () {
  let capacity = 1410;
  let id = 1410;
  let issueSourceId;
  let memberAccountIds = "memberAccountIds_1410";
  let name = "name_1410";
  let planId;
  let planningStyle = "planningStyle_1410";
  let sprintLength = 1410;
  // Dependency Barrier
  let deps = {};
  deps["issueSourceId"] = matchAnyIssueAdded();
  deps["planId"] = matchAnyPlanAdded();
  let pkMap = {"issueSourceId": "issueIdOrKey", "planId": "planId"};
  let captured = resolveDependencies(deps, pkMap);
  issueSourceId = captured["issueSourceId"];
  planId = captured["planId"];
  createPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  waitForPlanOnlyTeamAdded(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  tryToAddExistingPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  verifyPlanOnlyTeamExists(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  updatePlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  deletePlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  tryToDeleteANonExistingPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  verifyPlanOnlyTeamDoesNotExist(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
});

// Story: crud:PlanOnlyTeam:nondet:1:2
bthread("crud:PlanOnlyTeam:nondet:1:2", function () {
  let capacity = 1411;
  let id = 1411;
  let issueSourceId;
  let memberAccountIds = "memberAccountIds_1411";
  let name = "name_1411";
  let planId;
  let planningStyle = "planningStyle_1411";
  let sprintLength = 1411;
  // Dependency Barrier
  let deps = {};
  deps["issueSourceId"] = matchAnyIssueAdded();
  deps["planId"] = matchAnyPlanAdded();
  let pkMap = {"issueSourceId": "issueIdOrKey", "planId": "planId"};
  let captured = resolveDependencies(deps, pkMap);
  issueSourceId = captured["issueSourceId"];
  planId = captured["planId"];
  createPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  // waitForPlanOnlyTeamAdded(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  tryToAddExistingPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  updatePlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  verifyPlanOnlyTeamExists(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  deletePlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  tryToDeleteANonExistingPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  verifyPlanOnlyTeamDoesNotExist(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
});

// Story: crud:PlanOnlyTeam:nondet:negative:dup-add
bthread("crud:PlanOnlyTeam:nondet:negative:dup-add", function () {
  let capacity = 1416;
  let id = 1416;
  let issueSourceId;
  let memberAccountIds = "memberAccountIds_1416";
  let name = "name_1416";
  let planId;
  let planningStyle = "planningStyle_1416";
  let sprintLength = 1416;
  // Dependency Barrier
  let deps = {};
  deps["issueSourceId"] = matchAnyIssueAdded();
  deps["planId"] = matchAnyPlanAdded();
  let pkMap = {"issueSourceId": "issueIdOrKey", "planId": "planId"};
  let captured = resolveDependencies(deps, pkMap);
  issueSourceId = captured["issueSourceId"];
  planId = captured["planId"];
  createPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  // waitForPlanOnlyTeamAdded(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  verifyPlanOnlyTeamExists(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  tryToAddExistingPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  verifyPlanOnlyTeamExists(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
});

// Story: crud:Team:read_only
bthread("crud:Team:read_only", function () {
  let cursor = "cursor_1420";
  let maxResults = "maxResults_1420";
  let planId;
  verifyTeamExists(cursor, maxResults, planId);
});

// Story: crud:Priority:nondet:1:1
bthread("crud:Priority:nondet:1:1", function () {
  let avatarId;
  let description = "description_1430";
  let iconUrl = "iconUrl_1430";
  let id = 1430;
  let name = "name_1430";
  let statusColor = "statusColor_1430";
  // Dependency Barrier
  let deps = {};
  deps["avatarId"] = matchAnyAvatarAdded();
  let pkMap = {"avatarId": "type"};
  let captured = resolveDependencies(deps, pkMap);
  avatarId = captured["avatarId"];
  createPriority(avatarId, description, iconUrl, id, name, statusColor);
  waitForPriorityAdded(avatarId, description, iconUrl, id, name, statusColor);
  tryToAddExistingPriority(avatarId, description, iconUrl, id, name, statusColor);
  verifyPriorityExists(avatarId, description, iconUrl, id, name, statusColor);
  updatePriority(avatarId, description, iconUrl, id, name, statusColor);
  deletePriority(avatarId, description, iconUrl, id, name, statusColor);
  tryToDeleteANonExistingPriority(avatarId, description, iconUrl, id, name, statusColor);
  verifyPriorityDoesNotExist(avatarId, description, iconUrl, id, name, statusColor);
});

// Story: crud:Priority:nondet:1:2
bthread("crud:Priority:nondet:1:2", function () {
  let avatarId;
  let description = "description_1431";
  let iconUrl = "iconUrl_1431";
  let id = 1431;
  let name = "name_1431";
  let statusColor = "statusColor_1431";
  // Dependency Barrier
  let deps = {};
  deps["avatarId"] = matchAnyAvatarAdded();
  let pkMap = {"avatarId": "type"};
  let captured = resolveDependencies(deps, pkMap);
  avatarId = captured["avatarId"];
  createPriority(avatarId, description, iconUrl, id, name, statusColor);
  // waitForPriorityAdded(avatarId, description, iconUrl, id, name, statusColor);
  tryToAddExistingPriority(avatarId, description, iconUrl, id, name, statusColor);
  updatePriority(avatarId, description, iconUrl, id, name, statusColor);
  verifyPriorityExists(avatarId, description, iconUrl, id, name, statusColor);
  deletePriority(avatarId, description, iconUrl, id, name, statusColor);
  tryToDeleteANonExistingPriority(avatarId, description, iconUrl, id, name, statusColor);
  verifyPriorityDoesNotExist(avatarId, description, iconUrl, id, name, statusColor);
});

// Story: crud:Priority:nondet:negative:dup-add
bthread("crud:Priority:nondet:negative:dup-add", function () {
  let avatarId;
  let description = "description_1436";
  let iconUrl = "iconUrl_1436";
  let id = 1436;
  let name = "name_1436";
  let statusColor = "statusColor_1436";
  // Dependency Barrier
  let deps = {};
  deps["avatarId"] = matchAnyAvatarAdded();
  let pkMap = {"avatarId": "type"};
  let captured = resolveDependencies(deps, pkMap);
  avatarId = captured["avatarId"];
  createPriority(avatarId, description, iconUrl, id, name, statusColor);
  // waitForPriorityAdded(avatarId, description, iconUrl, id, name, statusColor);
  verifyPriorityExists(avatarId, description, iconUrl, id, name, statusColor);
  tryToAddExistingPriority(avatarId, description, iconUrl, id, name, statusColor);
  verifyPriorityExists(avatarId, description, iconUrl, id, name, statusColor);
});
