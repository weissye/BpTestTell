// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
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
  let issuetype = "issuetype_200";
  let key = "key_200";
  let project = "project_200";
  let properties = "properties_200";
  let summary = "summary_200";
  let transition = "transition_200";
  let update = {};
  let updateHistory = "updateHistory_200";
  createIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  // waitForIssueAdded(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  tryToAddExistingIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  verifyIssueExists(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  editIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  deleteIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  tryToDeleteANonExistingIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  verifyIssueDoesNotExist(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
});

// Story: crud:Issue:nondet:1:2
bthread("crud:Issue:nondet:1:2", function () {
  let fields = {};
  let historyMetadata = "historyMetadata_201";
  let id = 201;
  let issueIdOrKey = 201;
  let issuetype = "issuetype_201";
  let key = "key_201";
  let project = "project_201";
  let properties = "properties_201";
  let summary = "summary_201";
  let transition = "transition_201";
  let update = {};
  let updateHistory = "updateHistory_201";
  createIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  // waitForIssueAdded(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  tryToAddExistingIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  editIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  verifyIssueExists(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  deleteIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  tryToDeleteANonExistingIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  verifyIssueDoesNotExist(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
});

// Story: crud:Issue:nondet:negative:dup-add
bthread("crud:Issue:nondet:negative:dup-add", function () {
  let fields = {};
  let historyMetadata = "historyMetadata_206";
  let id = 206;
  let issueIdOrKey = 206;
  let issuetype = "issuetype_206";
  let key = "key_206";
  let project = "project_206";
  let properties = "properties_206";
  let summary = "summary_206";
  let transition = "transition_206";
  let update = {};
  let updateHistory = "updateHistory_206";
  createIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  // waitForIssueAdded(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  verifyIssueExists(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  tryToAddExistingIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
  verifyIssueExists(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
});

// Story: crud:Event:read_only
bthread("crud:Event:read_only", function () {

  verifyEventExists();
});

// Story: crud:IssueChangelog:read_only
bthread("crud:IssueChangelog:read_only", function () {
  let changelogIds = "changelogIds_240";
  verifyIssueChangelogExists(changelogIds, issueIdOrKey);
});

// Story: crud:IssueTransition:read_only
bthread("crud:IssueTransition:read_only", function () {
  let fields = {};
  let historyMetadata = "historyMetadata_260";
  let properties = "properties_260";
  let transition = "transition_260";
  let transitionId = 260;
  let update = {};
  verifyIssueTransitionExists(fields, historyMetadata, issueIdOrKey, properties, transition, transitionId, update);
});

// Story: crud:IssueEditMeta:read_only
bthread("crud:IssueEditMeta:read_only", function () {

  verifyIssueEditMetaExists(issueIdOrKey);
});

// Story: crud:Workflow:nondet:1:1
bthread("crud:Workflow:nondet:1:1", function () {
  let entityId = 300;
  let expand = "expand_300";
  let id = 300;
  let isActive = "isActive_300";
  let maxResults = "maxResults_300";
  let name = "name_300";
  let orderBy = "orderBy_300";
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
  // waitForWorkflowAdded(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
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
  let maxResults = "maxResults_301";
  let name = "name_301";
  let orderBy = "orderBy_301";
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
  let maxResults = "maxResults_306";
  let name = "name_306";
  let orderBy = "orderBy_306";
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
  let workflows = "workflows_310";
  verifyWorkflowsBulkExists(scope, statuses, workflows);
});

// Story: crud:IssueSecurityScheme:nondet:1:1
bthread("crud:IssueSecurityScheme:nondet:1:1", function () {
  let description = "description_320";
  let id = 320;
  let levels = "levels_320";
  let name = "name_320";
  let schemeId = 320;
  createIssueSecurityScheme(description, id, levels, name, schemeId);
  // waitForIssueSecuritySchemeAdded(description, id, levels, name, schemeId);
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
  let id = 330;
  let levelId = 330;
  let name = "name_330";
  let schemeId = 330;
  addSecurityLevel(id, levelId, name, schemeId);
  // waitForIssueSecurityLevelAdded(id, levelId, name, schemeId);
  tryToAddExistingIssueSecurityLevel(id, levelId, name, schemeId);
  verifyIssueSecurityLevelExists(id, levelId, name, schemeId);
  updateSecurityLevel(id, levelId, name, schemeId);
  removeLevel(id, levelId, name, schemeId);
  tryToDeleteANonExistingIssueSecurityLevel(id, levelId, name, schemeId);
  verifyIssueSecurityLevelDoesNotExist(id, levelId, name, schemeId);
});

// Story: crud:IssueSecurityLevel:nondet:1:2
bthread("crud:IssueSecurityLevel:nondet:1:2", function () {
  let id = 331;
  let levelId = 331;
  let name = "name_331";
  let schemeId = 331;
  addSecurityLevel(id, levelId, name, schemeId);
  // waitForIssueSecurityLevelAdded(id, levelId, name, schemeId);
  tryToAddExistingIssueSecurityLevel(id, levelId, name, schemeId);
  updateSecurityLevel(id, levelId, name, schemeId);
  verifyIssueSecurityLevelExists(id, levelId, name, schemeId);
  removeLevel(id, levelId, name, schemeId);
  tryToDeleteANonExistingIssueSecurityLevel(id, levelId, name, schemeId);
  verifyIssueSecurityLevelDoesNotExist(id, levelId, name, schemeId);
});

// Story: crud:IssueSecurityLevel:nondet:negative:dup-add
bthread("crud:IssueSecurityLevel:nondet:negative:dup-add", function () {
  let id = 336;
  let levelId = 336;
  let name = "name_336";
  let schemeId = 336;
  addSecurityLevel(id, levelId, name, schemeId);
  // waitForIssueSecurityLevelAdded(id, levelId, name, schemeId);
  verifyIssueSecurityLevelExists(id, levelId, name, schemeId);
  tryToAddExistingIssueSecurityLevel(id, levelId, name, schemeId);
  verifyIssueSecurityLevelExists(id, levelId, name, schemeId);
});

// Story: crud:IssueSecurityLevelMember:nondet:1:1
bthread("crud:IssueSecurityLevelMember:nondet:1:1", function () {
  let id = 340;
  let levelId = 340;
  let memberId = 340;
  let schemeId = 340;
  addSecurityLevelMembers(id, levelId, memberId, schemeId);
  // waitForIssueSecurityLevelMemberAdded(id, levelId, memberId, schemeId);
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

// Story: crud:IssueSecuritySchemeProjectAssociation:read_only
bthread("crud:IssueSecuritySchemeProjectAssociation:read_only", function () {
  let schemeId = 350;
  verifyIssueSecuritySchemeProjectAssociationExists(issueSecuritySchemeId, projectId, schemeId);
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
  // waitForVersionAdded(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
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
  let query = "query_380";
  let startAt = "startAt_380";
  let status = "status_380";
  verifyProjectVersionsExists(expand, maxResults, orderBy, projectIdOrKey, query, startAt, status);
});

// Story: crud:VersionRelatedWork:read_only
bthread("crud:VersionRelatedWork:read_only", function () {
  let category = "category_410";
  let id = 410;
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
  // waitForDashboardAdded(description, editPermissions, id, name, sharePermissions);
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
  // waitForDashboardGadgetAdded(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
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
  let maxResults = "maxResults_490";
  let name = "name_490";
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
  // waitForCustomFieldContextAdded(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
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
  let maxResults = "maxResults_491";
  let name = "name_491";
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
  let maxResults = "maxResults_496";
  let name = "name_496";
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

// Story: crud:Project:nondet:1:1
bthread("crud:Project:nondet:1:1", function () {
  let assigneeType = "assigneeType_550";
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
  // waitForProjectAdded(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
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
  // waitForFieldConfigurationAdded(description, id, isDefault, maxResults, name, query, startAt);
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
  // waitForFieldConfigurationSchemeAdded(description, id, maxResults, name, startAt);
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
  let id = 590;
  let maxResults = "maxResults_590";
  let startAt = "startAt_590";
  verifyFieldConfigurationSchemeMappingExists(fieldConfigurationSchemeId, id, maxResults, startAt);
});

// Story: crud:FieldConfigurationSchemeProjectAssociation:read_only
bthread("crud:FieldConfigurationSchemeProjectAssociation:read_only", function () {
  let maxResults = "maxResults_600";
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
  // waitForUserAdded(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
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
  let returnDraftIfExists = "returnDraftIfExists_700";
  let self = "self_700";
  let updateDraftIfNeeded = "updateDraftIfNeeded_700";
  createWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  // waitForWorkflowSchemeAdded(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  tryToAddExistingWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  verifyWorkflowSchemeExists(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  updateWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  deleteWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  tryToDeleteANonExistingWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  verifyWorkflowSchemeDoesNotExist(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
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
  let returnDraftIfExists = "returnDraftIfExists_701";
  let self = "self_701";
  let updateDraftIfNeeded = "updateDraftIfNeeded_701";
  createWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  // waitForWorkflowSchemeAdded(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  tryToAddExistingWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  updateWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  verifyWorkflowSchemeExists(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  deleteWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  tryToDeleteANonExistingWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  verifyWorkflowSchemeDoesNotExist(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
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
  let returnDraftIfExists = "returnDraftIfExists_706";
  let self = "self_706";
  let updateDraftIfNeeded = "updateDraftIfNeeded_706";
  createWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  // waitForWorkflowSchemeAdded(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  verifyWorkflowSchemeExists(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  tryToAddExistingWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
  verifyWorkflowSchemeExists(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
});

// Story: crud:WorkflowSchemeDefaultWorkflow:read_only
bthread("crud:WorkflowSchemeDefaultWorkflow:read_only", function () {
  let id = 710;
  let returnDraftIfExists = "returnDraftIfExists_710";
  let updateDraftIfNeeded = "updateDraftIfNeeded_710";
  verifyWorkflowSchemeDefaultWorkflowExists(id, returnDraftIfExists, updateDraftIfNeeded);
});

// Story: crud:WorkflowSchemeIssueType:read_only
bthread("crud:WorkflowSchemeIssueType:read_only", function () {
  let id = 720;
  let issueType = "issueType_720";
  let returnDraftIfExists = "returnDraftIfExists_720";
  let updateDraftIfNeeded = "updateDraftIfNeeded_720";
  verifyWorkflowSchemeIssueTypeExists(id, issueType, returnDraftIfExists, updateDraftIfNeeded);
});

// Story: crud:WorkflowSchemeWorkflowMapping:read_only
bthread("crud:WorkflowSchemeWorkflowMapping:read_only", function () {
  let id = 730;
  let returnDraftIfExists = "returnDraftIfExists_730";
  let updateDraftIfNeeded = "updateDraftIfNeeded_730";
  let workflowName = "workflowName_730";
  verifyWorkflowSchemeWorkflowMappingExists(id, returnDraftIfExists, updateDraftIfNeeded, workflowName);
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
  // waitForCustomFieldAdded(description, fieldId, id, name, searcherKey, type);
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
  let approximateLastUsed = "approximateLastUsed_760";
  let description = "description_760";
  let editPermissions = "editPermissions_760";
  let favourite = "favourite_760";
  let favouritedCount = 760;
  let id = 760;
  let jql = "jql_760";
  let name = "name_760";
  let owner = "owner_760";
  let searchUrl = "searchUrl_760";
  let self = "self_760";
  let sharePermissions = "sharePermissions_760";
  let sharedUsers = "sharedUsers_760";
  let subscriptions = "subscriptions_760";
  let viewUrl = "viewUrl_760";
  createFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  // waitForFilterAdded(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  tryToAddExistingFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  verifyFilterExists(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  updateFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  deleteFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  tryToDeleteANonExistingFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  verifyFilterDoesNotExist(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
});

// Story: crud:Filter:nondet:1:2
bthread("crud:Filter:nondet:1:2", function () {
  let approximateLastUsed = "approximateLastUsed_761";
  let description = "description_761";
  let editPermissions = "editPermissions_761";
  let favourite = "favourite_761";
  let favouritedCount = 761;
  let id = 761;
  let jql = "jql_761";
  let name = "name_761";
  let owner = "owner_761";
  let searchUrl = "searchUrl_761";
  let self = "self_761";
  let sharePermissions = "sharePermissions_761";
  let sharedUsers = "sharedUsers_761";
  let subscriptions = "subscriptions_761";
  let viewUrl = "viewUrl_761";
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
  let approximateLastUsed = "approximateLastUsed_766";
  let description = "description_766";
  let editPermissions = "editPermissions_766";
  let favourite = "favourite_766";
  let favouritedCount = 766;
  let id = 766;
  let jql = "jql_766";
  let name = "name_766";
  let owner = "owner_766";
  let searchUrl = "searchUrl_766";
  let self = "self_766";
  let sharePermissions = "sharePermissions_766";
  let sharedUsers = "sharedUsers_766";
  let subscriptions = "subscriptions_766";
  let viewUrl = "viewUrl_766";
  createFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  // waitForFilterAdded(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  verifyFilterExists(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  tryToAddExistingFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
  verifyFilterExists(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
});

// Story: crud:FilterColumns:read_only
bthread("crud:FilterColumns:read_only", function () {
  let id = 770;
  verifyFilterColumnsExists(id);
});

// Story: crud:FilterFavourite:nondet:1:1
bthread("crud:FilterFavourite:nondet:1:1", function () {
  let id = 780;
  setFavouriteForFilter(id);
  // waitForFilterFavouriteAdded(id);
  tryToAddExistingFilterFavourite(id);
  verifyFilterFavouriteExists(id);
  deleteFavouriteForFilter(id);
  tryToDeleteANonExistingFilterFavourite(id);
  verifyFilterFavouriteDoesNotExist(id);
});

// Story: crud:FilterFavourite:nondet:1:2
bthread("crud:FilterFavourite:nondet:1:2", function () {
  let id = 781;
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
  let id = 786;
  setFavouriteForFilter(id);
  // waitForFilterFavouriteAdded(id);
  verifyFilterFavouriteExists(id);
  tryToAddExistingFilterFavourite(id);
  verifyFilterFavouriteExists(id);
});

// Story: crud:IssueTypeScreenScheme:nondet:1:1
bthread("crud:IssueTypeScreenScheme:nondet:1:1", function () {
  let description = "description_800";
  let expand = "expand_800";
  let id = 800;
  let issueTypeMappings = "issueTypeMappings_800";
  let maxResults = "maxResults_800";
  let name = "name_800";
  let orderBy = "orderBy_800";
  let queryString = "queryString_800";
  let startAt = "startAt_800";
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
  verifyIssueTypeScreenSchemeExists(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  updateIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  deleteIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToDeleteANonExistingIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeScreenSchemeDoesNotExist(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
});

// Story: crud:IssueTypeScreenScheme:nondet:1:2
bthread("crud:IssueTypeScreenScheme:nondet:1:2", function () {
  let description = "description_801";
  let expand = "expand_801";
  let id = 801;
  let issueTypeMappings = "issueTypeMappings_801";
  let maxResults = "maxResults_801";
  let name = "name_801";
  let orderBy = "orderBy_801";
  let queryString = "queryString_801";
  let startAt = "startAt_801";
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
  let description = "description_806";
  let expand = "expand_806";
  let id = 806;
  let issueTypeMappings = "issueTypeMappings_806";
  let maxResults = "maxResults_806";
  let name = "name_806";
  let orderBy = "orderBy_806";
  let queryString = "queryString_806";
  let startAt = "startAt_806";
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
  let maxResults = "maxResults_810";
  let startAt = "startAt_810";
  verifyIssueTypeScreenSchemeMappingExists(issueTypeScreenSchemeId, maxResults, startAt);
});

// Story: crud:IssueTypeScreenSchemeProjectAssociation:read_only
bthread("crud:IssueTypeScreenSchemeProjectAssociation:read_only", function () {
  let maxResults = "maxResults_820";
  let startAt = "startAt_820";
  verifyIssueTypeScreenSchemeProjectAssociationExists(issueTypeScreenSchemeId, maxResults, projectId, startAt);
});

// Story: crud:IssueTypeScreenSchemeProject:read_only
bthread("crud:IssueTypeScreenSchemeProject:read_only", function () {
  let maxResults = "maxResults_830";
  let query = "query_830";
  let startAt = "startAt_830";
  verifyIssueTypeScreenSchemeProjectExists(issueTypeScreenSchemeId, maxResults, query, startAt);
});

// Story: crud:Attachment:read_only
bthread("crud:Attachment:read_only", function () {
  let id = 840;
  verifyAttachmentExists(id);
});

// Story: crud:AttachmentContent:read_only
bthread("crud:AttachmentContent:read_only", function () {
  let id = 850;
  verifyAttachmentContentExists(id);
});

// Story: crud:AttachmentThumbnail:read_only
bthread("crud:AttachmentThumbnail:read_only", function () {
  let id = 860;
  verifyAttachmentThumbnailExists(id);
});

// Story: crud:AttachmentExpandedHuman:read_only
bthread("crud:AttachmentExpandedHuman:read_only", function () {
  let id = 870;
  verifyAttachmentExpandedHumanExists(id);
});

// Story: crud:AttachmentExpandedRaw:read_only
bthread("crud:AttachmentExpandedRaw:read_only", function () {
  let id = 880;
  verifyAttachmentExpandedRawExists(id);
});

// Story: crud:IssueBulk:nondet:1:1
bthread("crud:IssueBulk:nondet:1:1", function () {
  let editedFieldsInput = "editedFieldsInput_900";
  let selectedActions = "selectedActions_900";
  let sendBulkNotification = "sendBulkNotification_900";
  let taskId = 900;
  let transitionId = 900;
  // Dependency Barrier
  let deps = {};
  deps["issueIdsOrKeys"] = matchAnyIssueAdded();
  deps["selectedIssueIdsOrKeys"] = matchAnyIssueAdded();
  let pkMap = {"issueIdsOrKeys": "issueIdOrKey", "selectedIssueIdsOrKeys": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueIdsOrKeys = captured["issueIdsOrKeys"];
  selectedIssueIdsOrKeys = captured["selectedIssueIdsOrKeys"];
  submitBulkEdit(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  // waitForIssueBulkAdded(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  tryToAddExistingIssueBulk(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  verifyIssueBulkExists(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  submitBulkMove(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  submitBulkDelete(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  tryToDeleteANonExistingIssueBulk(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  verifyIssueBulkDoesNotExist(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
});

// Story: crud:IssueBulk:nondet:1:2
bthread("crud:IssueBulk:nondet:1:2", function () {
  let editedFieldsInput = "editedFieldsInput_901";
  let selectedActions = "selectedActions_901";
  let sendBulkNotification = "sendBulkNotification_901";
  let taskId = 901;
  let transitionId = 901;
  // Dependency Barrier
  let deps = {};
  deps["issueIdsOrKeys"] = matchAnyIssueAdded();
  deps["selectedIssueIdsOrKeys"] = matchAnyIssueAdded();
  let pkMap = {"issueIdsOrKeys": "issueIdOrKey", "selectedIssueIdsOrKeys": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueIdsOrKeys = captured["issueIdsOrKeys"];
  selectedIssueIdsOrKeys = captured["selectedIssueIdsOrKeys"];
  submitBulkEdit(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  // waitForIssueBulkAdded(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  tryToAddExistingIssueBulk(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  submitBulkMove(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  verifyIssueBulkExists(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  submitBulkDelete(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  tryToDeleteANonExistingIssueBulk(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  verifyIssueBulkDoesNotExist(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
});

// Story: crud:IssueBulk:nondet:negative:dup-add
bthread("crud:IssueBulk:nondet:negative:dup-add", function () {
  let editedFieldsInput = "editedFieldsInput_906";
  let selectedActions = "selectedActions_906";
  let sendBulkNotification = "sendBulkNotification_906";
  let taskId = 906;
  let transitionId = 906;
  // Dependency Barrier
  let deps = {};
  deps["issueIdsOrKeys"] = matchAnyIssueAdded();
  deps["selectedIssueIdsOrKeys"] = matchAnyIssueAdded();
  let pkMap = {"issueIdsOrKeys": "issueIdOrKey", "selectedIssueIdsOrKeys": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueIdsOrKeys = captured["issueIdsOrKeys"];
  selectedIssueIdsOrKeys = captured["selectedIssueIdsOrKeys"];
  submitBulkEdit(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  // waitForIssueBulkAdded(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  verifyIssueBulkExists(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  tryToAddExistingIssueBulk(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
  verifyIssueBulkExists(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
});

// Story: crud:IssueTypeScheme:nondet:1:1
bthread("crud:IssueTypeScheme:nondet:1:1", function () {
  let description = "description_910";
  let expand = "expand_910";
  let id = 910;
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
  // waitForIssueTypeSchemeAdded(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToAddExistingIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeSchemeExists(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  updateIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  deleteIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  tryToDeleteANonExistingIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
  verifyIssueTypeSchemeDoesNotExist(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
});

// Story: crud:IssueTypeScheme:nondet:1:2
bthread("crud:IssueTypeScheme:nondet:1:2", function () {
  let description = "description_911";
  let expand = "expand_911";
  let id = 911;
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
  let description = "description_916";
  let expand = "expand_916";
  let id = 916;
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
  let startAt = "startAt_920";
  verifyIssueTypeSchemeProjectAssociationExists(maxResults, projectId, startAt);
});

// Story: crud:IssueTypeSchemeMapping:read_only
bthread("crud:IssueTypeSchemeMapping:read_only", function () {
  let maxResults = "maxResults_930";
  let startAt = "startAt_930";
  verifyIssueTypeSchemeMappingExists(issueTypeSchemeId, maxResults, startAt);
});

// Story: crud:IssueTypeInScheme:nondet:1:1
bthread("crud:IssueTypeInScheme:nondet:1:1", function () {

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
  verifyIssueTypeInSchemeExists(issueTypeId, issueTypeSchemeId);
  reorderIssueTypesInIssueTypeScheme(issueTypeId, issueTypeSchemeId);
  removeIssueTypeFromIssueTypeScheme(issueTypeId, issueTypeSchemeId);
  tryToDeleteANonExistingIssueTypeInScheme(issueTypeId, issueTypeSchemeId);
  verifyIssueTypeInSchemeDoesNotExist(issueTypeId, issueTypeSchemeId);
});

// Story: crud:IssueTypeInScheme:nondet:1:2
bthread("crud:IssueTypeInScheme:nondet:1:2", function () {

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
  let id = 950;
  let owningObjectId = 950;
  let size = "size_950";
  let type = 950;
  let x = "x_950";
  let y = "y_950";
  storeAvatar(entityId, id, owningObjectId, size, type, x, y);
  // waitForAvatarAdded(entityId, id, owningObjectId, size, type, x, y);
  tryToAddExistingAvatar(entityId, id, owningObjectId, size, type, x, y);
  verifyAvatarExists(entityId, id, owningObjectId, size, type, x, y);
  deleteAvatar(entityId, id, owningObjectId, size, type, x, y);
  tryToDeleteANonExistingAvatar(entityId, id, owningObjectId, size, type, x, y);
  verifyAvatarDoesNotExist(entityId, id, owningObjectId, size, type, x, y);
});

// Story: crud:Avatar:nondet:1:2
bthread("crud:Avatar:nondet:1:2", function () {
  let entityId = 951;
  let id = 951;
  let owningObjectId = 951;
  let size = "size_951";
  let type = 951;
  let x = "x_951";
  let y = "y_951";
  storeAvatar(entityId, id, owningObjectId, size, type, x, y);
  // waitForAvatarAdded(entityId, id, owningObjectId, size, type, x, y);
  tryToAddExistingAvatar(entityId, id, owningObjectId, size, type, x, y);
  verifyAvatarExists(entityId, id, owningObjectId, size, type, x, y);
  deleteAvatar(entityId, id, owningObjectId, size, type, x, y);
  tryToDeleteANonExistingAvatar(entityId, id, owningObjectId, size, type, x, y);
  verifyAvatarDoesNotExist(entityId, id, owningObjectId, size, type, x, y);
});

// Story: crud:Avatar:nondet:negative:dup-add
bthread("crud:Avatar:nondet:negative:dup-add", function () {
  let entityId = 956;
  let id = 956;
  let owningObjectId = 956;
  let size = "size_956";
  let type = 956;
  let x = "x_956";
  let y = "y_956";
  storeAvatar(entityId, id, owningObjectId, size, type, x, y);
  // waitForAvatarAdded(entityId, id, owningObjectId, size, type, x, y);
  verifyAvatarExists(entityId, id, owningObjectId, size, type, x, y);
  tryToAddExistingAvatar(entityId, id, owningObjectId, size, type, x, y);
  verifyAvatarExists(entityId, id, owningObjectId, size, type, x, y);
});

// Story: crud:SystemAvatar:read_only
bthread("crud:SystemAvatar:read_only", function () {
  let type = 960;
  verifySystemAvatarExists(type);
});

// Story: crud:Worklog:nondet:1:1
bthread("crud:Worklog:nondet:1:1", function () {
  let author = "author_980";
  let comment = "comment_980";
  let created = "created_980";
  let id = 980;
  let properties = "properties_980";
  let self = "self_980";
  let since = "since_980";
  let started = "started_980";
  let timeSpent = "timeSpent_980";
  let timeSpentSeconds = 980;
  let updateAuthor = "updateAuthor_980";
  let updated = "updated_980";
  let visibility = "visibility_980";
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
  verifyWorklogExists(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  updateWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  deleteWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  tryToDeleteANonExistingWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  verifyWorklogDoesNotExist(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
});

// Story: crud:Worklog:nondet:1:2
bthread("crud:Worklog:nondet:1:2", function () {
  let author = "author_981";
  let comment = "comment_981";
  let created = "created_981";
  let id = 981;
  let properties = "properties_981";
  let self = "self_981";
  let since = "since_981";
  let started = "started_981";
  let timeSpent = "timeSpent_981";
  let timeSpentSeconds = 981;
  let updateAuthor = "updateAuthor_981";
  let updated = "updated_981";
  let visibility = "visibility_981";
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
  let author = "author_986";
  let comment = "comment_986";
  let created = "created_986";
  let id = 986;
  let properties = "properties_986";
  let self = "self_986";
  let since = "since_986";
  let started = "started_986";
  let timeSpent = "timeSpent_986";
  let timeSpentSeconds = 986;
  let updateAuthor = "updateAuthor_986";
  let updated = "updated_986";
  let visibility = "visibility_986";
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
  let description = "description_990";
  let id = 990;
  let name = "name_990";
  let notificationSchemeEvents = "notificationSchemeEvents_990";
  // Dependency Barrier
  let deps = {};
  deps["notificationSchemeId"] = matchAnyNotificationAdded();
  let pkMap = {"notificationSchemeId": "notificationSchemeId"};
  let captured = resolveDependencies(deps, pkMap);
  notificationSchemeId = captured["notificationSchemeId"];
  createNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  // waitForNotificationSchemeAdded(description, id, name, notificationSchemeEvents, notificationSchemeId);
  tryToAddExistingNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  verifyNotificationSchemeExists(description, id, name, notificationSchemeEvents, notificationSchemeId);
  updateNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  deleteNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  tryToDeleteANonExistingNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
  verifyNotificationSchemeDoesNotExist(description, id, name, notificationSchemeEvents, notificationSchemeId);
});

// Story: crud:NotificationScheme:nondet:1:2
bthread("crud:NotificationScheme:nondet:1:2", function () {
  let description = "description_991";
  let id = 991;
  let name = "name_991";
  let notificationSchemeEvents = "notificationSchemeEvents_991";
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
  let description = "description_996";
  let id = 996;
  let name = "name_996";
  let notificationSchemeEvents = "notificationSchemeEvents_996";
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
  let description = "description_1020";
  let expand = "expand_1020";
  let mappings = "mappings_1020";
  let maxResults = "maxResults_1020";
  let name = "name_1020";
  let onlyDefault = "onlyDefault_1020";
  let orderBy = "orderBy_1020";
  let schemeId = 1020;
  let schemeName = "schemeName_1020";
  let startAt = "startAt_1020";
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
  verifyPrioritySchemeExists(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  updatePriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  deletePriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  tryToDeleteANonExistingPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
  verifyPrioritySchemeDoesNotExist(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
});

// Story: crud:PriorityScheme:nondet:1:2
bthread("crud:PriorityScheme:nondet:1:2", function () {
  let description = "description_1021";
  let expand = "expand_1021";
  let mappings = "mappings_1021";
  let maxResults = "maxResults_1021";
  let name = "name_1021";
  let onlyDefault = "onlyDefault_1021";
  let orderBy = "orderBy_1021";
  let schemeId = 1021;
  let schemeName = "schemeName_1021";
  let startAt = "startAt_1021";
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
  let description = "description_1026";
  let expand = "expand_1026";
  let mappings = "mappings_1026";
  let maxResults = "maxResults_1026";
  let name = "name_1026";
  let onlyDefault = "onlyDefault_1026";
  let orderBy = "orderBy_1026";
  let schemeId = 1026;
  let schemeName = "schemeName_1026";
  let startAt = "startAt_1026";
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
  let maxResults = "maxResults_1040";
  let schemeId = 1040;
  let startAt = "startAt_1040";
  verifyPrioritySchemePrioritiesExists(maxResults, schemeId, startAt);
});

// Story: crud:PrioritySchemeProjects:read_only
bthread("crud:PrioritySchemeProjects:read_only", function () {
  let maxResults = "maxResults_1050";
  let query = "query_1050";
  let schemeId = 1050;
  let startAt = "startAt_1050";
  verifyPrioritySchemeProjectsExists(maxResults, projectId, query, schemeId, startAt);
});

// Story: crud:AvailablePriorities:read_only
bthread("crud:AvailablePriorities:read_only", function () {
  let exclude = "exclude_1060";
  let maxResults = "maxResults_1060";
  let query = "query_1060";
  let schemeId = 1060;
  let startAt = "startAt_1060";
  verifyAvailablePrioritiesExists(exclude, maxResults, query, schemeId, startAt);
});

// Story: crud:Status:nondet:1:1
bthread("crud:Status:nondet:1:1", function () {
  let id = 1070;
  let name = "name_1070";
  let scope = "scope_1070";
  let statuses = "statuses_1070";
  createStatuses(id, name, scope, statuses);
  // waitForStatusAdded(id, name, scope, statuses);
  tryToAddExistingStatus(id, name, scope, statuses);
  verifyStatusExists(id, name, scope, statuses);
  updateStatuses(id, name, scope, statuses);
  deleteStatusesById(id, name, scope, statuses);
  tryToDeleteANonExistingStatus(id, name, scope, statuses);
  verifyStatusDoesNotExist(id, name, scope, statuses);
});

// Story: crud:Status:nondet:1:2
bthread("crud:Status:nondet:1:2", function () {
  let id = 1071;
  let name = "name_1071";
  let scope = "scope_1071";
  let statuses = "statuses_1071";
  createStatuses(id, name, scope, statuses);
  // waitForStatusAdded(id, name, scope, statuses);
  tryToAddExistingStatus(id, name, scope, statuses);
  updateStatuses(id, name, scope, statuses);
  verifyStatusExists(id, name, scope, statuses);
  deleteStatusesById(id, name, scope, statuses);
  tryToDeleteANonExistingStatus(id, name, scope, statuses);
  verifyStatusDoesNotExist(id, name, scope, statuses);
});

// Story: crud:Status:nondet:negative:dup-add
bthread("crud:Status:nondet:negative:dup-add", function () {
  let id = 1076;
  let name = "name_1076";
  let scope = "scope_1076";
  let statuses = "statuses_1076";
  createStatuses(id, name, scope, statuses);
  // waitForStatusAdded(id, name, scope, statuses);
  verifyStatusExists(id, name, scope, statuses);
  tryToAddExistingStatus(id, name, scope, statuses);
  verifyStatusExists(id, name, scope, statuses);
});

// Story: crud:WorkflowSchemeDraft:nondet:1:1
bthread("crud:WorkflowSchemeDraft:nondet:1:1", function () {
  let id = 1080;
  createWorkflowSchemeDraftFromParent(id);
  // waitForWorkflowSchemeDraftAdded(id);
  tryToAddExistingWorkflowSchemeDraft(id);
  verifyWorkflowSchemeDraftExists(id);
  updateWorkflowSchemeDraft(id);
  deleteWorkflowSchemeDraft(id);
  tryToDeleteANonExistingWorkflowSchemeDraft(id);
  verifyWorkflowSchemeDraftDoesNotExist(id);
});

// Story: crud:WorkflowSchemeDraft:nondet:1:2
bthread("crud:WorkflowSchemeDraft:nondet:1:2", function () {
  let id = 1081;
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
  let id = 1086;
  createWorkflowSchemeDraftFromParent(id);
  // waitForWorkflowSchemeDraftAdded(id);
  verifyWorkflowSchemeDraftExists(id);
  tryToAddExistingWorkflowSchemeDraft(id);
  verifyWorkflowSchemeDraftExists(id);
});

// Story: crud:DraftDefaultWorkflow:read_only
bthread("crud:DraftDefaultWorkflow:read_only", function () {
  let id = 1090;
  verifyDraftDefaultWorkflowExists(id);
});

// Story: crud:WorkflowSchemeDraftIssueType:read_only
bthread("crud:WorkflowSchemeDraftIssueType:read_only", function () {
  let id = 1100;
  let issueType = "issueType_1100";
  verifyWorkflowSchemeDraftIssueTypeExists(id, issueType);
});

// Story: crud:DraftWorkflowMapping:read_only
bthread("crud:DraftWorkflowMapping:read_only", function () {
  let id = 1120;
  let workflowName = "workflowName_1120";
  verifyDraftWorkflowMappingExists(id, workflowName);
});

// Story: crud:Component:nondet:1:1
bthread("crud:Component:nondet:1:1", function () {
  let ari = "ari_1130";
  let assignee = "assignee_1130";
  let assigneeType = "assigneeType_1130";
  let description = "description_1130";
  let id = 1130;
  let isAssigneeTypeValid = 1130;
  let lead = "lead_1130";
  let leadAccountId = 1130;
  let leadUserName = "leadUserName_1130";
  let metadata = {};
  let moveIssuesTo = "moveIssuesTo_1130";
  let name = "name_1130";
  let project = "project_1130";
  let realAssignee = "realAssignee_1130";
  let realAssigneeType = "realAssigneeType_1130";
  let self = "self_1130";
  // Dependency Barrier
  let deps = {};
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  projectId = captured["projectId"];
  createComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  // waitForComponentAdded(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  tryToAddExistingComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  verifyComponentExists(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  updateComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  deleteComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  tryToDeleteANonExistingComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
  verifyComponentDoesNotExist(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
});

// Story: crud:Component:nondet:1:2
bthread("crud:Component:nondet:1:2", function () {
  let ari = "ari_1131";
  let assignee = "assignee_1131";
  let assigneeType = "assigneeType_1131";
  let description = "description_1131";
  let id = 1131;
  let isAssigneeTypeValid = 1131;
  let lead = "lead_1131";
  let leadAccountId = 1131;
  let leadUserName = "leadUserName_1131";
  let metadata = {};
  let moveIssuesTo = "moveIssuesTo_1131";
  let name = "name_1131";
  let project = "project_1131";
  let realAssignee = "realAssignee_1131";
  let realAssigneeType = "realAssigneeType_1131";
  let self = "self_1131";
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
  let ari = "ari_1136";
  let assignee = "assignee_1136";
  let assigneeType = "assigneeType_1136";
  let description = "description_1136";
  let id = 1136;
  let isAssigneeTypeValid = 1136;
  let lead = "lead_1136";
  let leadAccountId = 1136;
  let leadUserName = "leadUserName_1136";
  let metadata = {};
  let moveIssuesTo = "moveIssuesTo_1136";
  let name = "name_1136";
  let project = "project_1136";
  let realAssignee = "realAssignee_1136";
  let realAssigneeType = "realAssigneeType_1136";
  let self = "self_1136";
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

// Story: crud:CustomFieldOption:read_only
bthread("crud:CustomFieldOption:read_only", function () {
  let id = 1140;
  verifyCustomFieldOptionExists(id);
});

// Story: crud:CustomFieldOptionContext:nondet:1:1
bthread("crud:CustomFieldOptionContext:nondet:1:1", function () {
  let contextId = 1150;
  let fieldId = 1150;
  let optionId = 1150;
  let options = "options_1150";
  createCustomFieldOption(contextId, fieldId, optionId, options);
  // waitForCustomFieldOptionContextAdded(contextId, fieldId, optionId, options);
  tryToAddExistingCustomFieldOptionContext(contextId, fieldId, optionId, options);
  verifyCustomFieldOptionContextExists(contextId, fieldId, optionId, options);
  updateCustomFieldOption(contextId, fieldId, optionId, options);
  deleteCustomFieldOption(contextId, fieldId, optionId, options);
  tryToDeleteANonExistingCustomFieldOptionContext(contextId, fieldId, optionId, options);
  verifyCustomFieldOptionContextDoesNotExist(contextId, fieldId, optionId, options);
});

// Story: crud:CustomFieldOptionContext:nondet:1:2
bthread("crud:CustomFieldOptionContext:nondet:1:2", function () {
  let contextId = 1151;
  let fieldId = 1151;
  let optionId = 1151;
  let options = "options_1151";
  createCustomFieldOption(contextId, fieldId, optionId, options);
  // waitForCustomFieldOptionContextAdded(contextId, fieldId, optionId, options);
  tryToAddExistingCustomFieldOptionContext(contextId, fieldId, optionId, options);
  updateCustomFieldOption(contextId, fieldId, optionId, options);
  verifyCustomFieldOptionContextExists(contextId, fieldId, optionId, options);
  deleteCustomFieldOption(contextId, fieldId, optionId, options);
  tryToDeleteANonExistingCustomFieldOptionContext(contextId, fieldId, optionId, options);
  verifyCustomFieldOptionContextDoesNotExist(contextId, fieldId, optionId, options);
});

// Story: crud:CustomFieldOptionContext:nondet:negative:dup-add
bthread("crud:CustomFieldOptionContext:nondet:negative:dup-add", function () {
  let contextId = 1156;
  let fieldId = 1156;
  let optionId = 1156;
  let options = "options_1156";
  createCustomFieldOption(contextId, fieldId, optionId, options);
  // waitForCustomFieldOptionContextAdded(contextId, fieldId, optionId, options);
  verifyCustomFieldOptionContextExists(contextId, fieldId, optionId, options);
  tryToAddExistingCustomFieldOptionContext(contextId, fieldId, optionId, options);
  verifyCustomFieldOptionContextExists(contextId, fieldId, optionId, options);
});

// Story: crud:Screen:nondet:1:1
bthread("crud:Screen:nondet:1:1", function () {
  let description = "description_1180";
  let id = 1180;
  let maxResults = "maxResults_1180";
  let name = "name_1180";
  let orderBy = "orderBy_1180";
  let queryString = "queryString_1180";
  let scope = "scope_1180";
  let screenId = 1180;
  let startAt = "startAt_1180";
  createScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  // waitForScreenAdded(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  tryToAddExistingScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  verifyScreenExists(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  updateScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  deleteScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  tryToDeleteANonExistingScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  verifyScreenDoesNotExist(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
});

// Story: crud:Screen:nondet:1:2
bthread("crud:Screen:nondet:1:2", function () {
  let description = "description_1181";
  let id = 1181;
  let maxResults = "maxResults_1181";
  let name = "name_1181";
  let orderBy = "orderBy_1181";
  let queryString = "queryString_1181";
  let scope = "scope_1181";
  let screenId = 1181;
  let startAt = "startAt_1181";
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
  let description = "description_1186";
  let id = 1186;
  let maxResults = "maxResults_1186";
  let name = "name_1186";
  let orderBy = "orderBy_1186";
  let queryString = "queryString_1186";
  let scope = "scope_1186";
  let screenId = 1186;
  let startAt = "startAt_1186";
  createScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  // waitForScreenAdded(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  verifyScreenExists(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  tryToAddExistingScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
  verifyScreenExists(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
});

// Story: crud:FieldScreens:read_only
bthread("crud:FieldScreens:read_only", function () {
  let expand = "expand_1190";
  let fieldId = 1190;
  let maxResults = "maxResults_1190";
  let startAt = "startAt_1190";
  verifyFieldScreensExists(expand, fieldId, maxResults, startAt);
});

// Story: crud:AvailableScreenFields:read_only
bthread("crud:AvailableScreenFields:read_only", function () {

  verifyAvailableScreenFieldsExists(screenId);
});

// Story: crud:IssueFieldOption:nondet:1:1
bthread("crud:IssueFieldOption:nondet:1:1", function () {
  let config = "config_1220";
  let fieldKey = 1220;
  let optionId = 1220;
  let properties = {};
  let value = "value_1220";
  createIssueFieldOption(config, fieldKey, optionId, properties, value);
  // waitForIssueFieldOptionAdded(config, fieldKey, optionId, properties, value);
  tryToAddExistingIssueFieldOption(config, fieldKey, optionId, properties, value);
  verifyIssueFieldOptionExists(config, fieldKey, optionId, properties, value);
  updateIssueFieldOption(config, fieldKey, optionId, properties, value);
  deleteIssueFieldOption(config, fieldKey, optionId, properties, value);
  tryToDeleteANonExistingIssueFieldOption(config, fieldKey, optionId, properties, value);
  verifyIssueFieldOptionDoesNotExist(config, fieldKey, optionId, properties, value);
});

// Story: crud:IssueFieldOption:nondet:1:2
bthread("crud:IssueFieldOption:nondet:1:2", function () {
  let config = "config_1221";
  let fieldKey = 1221;
  let optionId = 1221;
  let properties = {};
  let value = "value_1221";
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
  let config = "config_1226";
  let fieldKey = 1226;
  let optionId = 1226;
  let properties = {};
  let value = "value_1226";
  createIssueFieldOption(config, fieldKey, optionId, properties, value);
  // waitForIssueFieldOptionAdded(config, fieldKey, optionId, properties, value);
  verifyIssueFieldOptionExists(config, fieldKey, optionId, properties, value);
  tryToAddExistingIssueFieldOption(config, fieldKey, optionId, properties, value);
  verifyIssueFieldOptionExists(config, fieldKey, optionId, properties, value);
});

// Story: crud:Group:nondet:1:1
bthread("crud:Group:nondet:1:1", function () {
  let expand = "expand_1230";
  let groupId = 1230;
  let groupname = "groupname_1230";
  let name = "name_1230";
  let swapGroup = "swapGroup_1230";
  let swapGroupId = 1230;
  createGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  // waitForGroupAdded(expand, groupId, groupname, name, swapGroup, swapGroupId);
  tryToAddExistingGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  verifyGroupExists(expand, groupId, groupname, name, swapGroup, swapGroupId);
  removeGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  tryToDeleteANonExistingGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  verifyGroupDoesNotExist(expand, groupId, groupname, name, swapGroup, swapGroupId);
});

// Story: crud:Group:nondet:1:2
bthread("crud:Group:nondet:1:2", function () {
  let expand = "expand_1231";
  let groupId = 1231;
  let groupname = "groupname_1231";
  let name = "name_1231";
  let swapGroup = "swapGroup_1231";
  let swapGroupId = 1231;
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
  let expand = "expand_1236";
  let groupId = 1236;
  let groupname = "groupname_1236";
  let name = "name_1236";
  let swapGroup = "swapGroup_1236";
  let swapGroupId = 1236;
  createGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  // waitForGroupAdded(expand, groupId, groupname, name, swapGroup, swapGroupId);
  verifyGroupExists(expand, groupId, groupname, name, swapGroup, swapGroupId);
  tryToAddExistingGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
  verifyGroupExists(expand, groupId, groupname, name, swapGroup, swapGroupId);
});

// Story: crud:GroupMember:read_only
bthread("crud:GroupMember:read_only", function () {
  let groupname = "groupname_1240";
  let includeInactiveUsers = "includeInactiveUsers_1240";
  let maxResults = "maxResults_1240";
  let startAt = "startAt_1240";
  verifyGroupMemberExists(groupId, groupname, includeInactiveUsers, maxResults, startAt);
});

// Story: crud:GroupUser:nondet:1:1
bthread("crud:GroupUser:nondet:1:1", function () {
  let accountId = 1250;
  let groupname = "groupname_1250";
  let name = "name_1250";
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

// Story: crud:GroupUser:nondet:1:2
bthread("crud:GroupUser:nondet:1:2", function () {
  let accountId = 1251;
  let groupname = "groupname_1251";
  let name = "name_1251";
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
  let accountId = 1256;
  let groupname = "groupname_1256";
  let name = "name_1256";
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

// Story: crud:IssueProperty:nondet:1:1
bthread("crud:IssueProperty:nondet:1:1", function () {
  let propertyKey = "propertyKey_1260";
  // Dependency Barrier
  let deps = {};
  deps["issueIdOrKey"] = matchAnyIssueAdded();
  let pkMap = {"issueIdOrKey": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueIdOrKey = captured["issueIdOrKey"];
  setIssueProperty(issueIdOrKey, propertyKey);
  // waitForIssuePropertyAdded(issueIdOrKey, propertyKey);
  tryToAddExistingIssueProperty(issueIdOrKey, propertyKey);
  verifyIssuePropertyExists(issueIdOrKey, propertyKey);
  deleteIssueProperty(issueIdOrKey, propertyKey);
  tryToDeleteANonExistingIssueProperty(issueIdOrKey, propertyKey);
  verifyIssuePropertyDoesNotExist(issueIdOrKey, propertyKey);
});

// Story: crud:IssueProperty:nondet:1:2
bthread("crud:IssueProperty:nondet:1:2", function () {
  let propertyKey = "propertyKey_1261";
  // Dependency Barrier
  let deps = {};
  deps["issueIdOrKey"] = matchAnyIssueAdded();
  let pkMap = {"issueIdOrKey": "issueIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  issueIdOrKey = captured["issueIdOrKey"];
  setIssueProperty(issueIdOrKey, propertyKey);
  // waitForIssuePropertyAdded(issueIdOrKey, propertyKey);
  tryToAddExistingIssueProperty(issueIdOrKey, propertyKey);
  verifyIssuePropertyExists(issueIdOrKey, propertyKey);
  deleteIssueProperty(issueIdOrKey, propertyKey);
  tryToDeleteANonExistingIssueProperty(issueIdOrKey, propertyKey);
  verifyIssuePropertyDoesNotExist(issueIdOrKey, propertyKey);
});

// Story: crud:IssueProperty:nondet:negative:dup-add
bthread("crud:IssueProperty:nondet:negative:dup-add", function () {
  let propertyKey = "propertyKey_1266";
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

// Story: crud:IssuePropertyBulk:nondet:1:1
bthread("crud:IssuePropertyBulk:nondet:1:1", function () {
  let propertyKey = 1290;
  bulkSetIssueProperty(propertyKey);
  // waitForIssuePropertyBulkAdded(propertyKey);
  tryToAddExistingIssuePropertyBulk(propertyKey);
  verifyIssuePropertyBulkExists(propertyKey);
  bulkDeleteIssueProperty(propertyKey);
  tryToDeleteANonExistingIssuePropertyBulk(propertyKey);
  verifyIssuePropertyBulkDoesNotExist(propertyKey);
});

// Story: crud:IssuePropertyBulk:nondet:1:2
bthread("crud:IssuePropertyBulk:nondet:1:2", function () {
  let propertyKey = 1291;
  bulkSetIssueProperty(propertyKey);
  // waitForIssuePropertyBulkAdded(propertyKey);
  tryToAddExistingIssuePropertyBulk(propertyKey);
  verifyIssuePropertyBulkExists(propertyKey);
  bulkDeleteIssueProperty(propertyKey);
  tryToDeleteANonExistingIssuePropertyBulk(propertyKey);
  verifyIssuePropertyBulkDoesNotExist(propertyKey);
});

// Story: crud:IssuePropertyBulk:nondet:negative:dup-add
bthread("crud:IssuePropertyBulk:nondet:negative:dup-add", function () {
  let propertyKey = 1296;
  bulkSetIssueProperty(propertyKey);
  // waitForIssuePropertyBulkAdded(propertyKey);
  verifyIssuePropertyBulkExists(propertyKey);
  tryToAddExistingIssuePropertyBulk(propertyKey);
  verifyIssuePropertyBulkExists(propertyKey);
});

// Story: crud:IssuePropertyKeys:read_only
bthread("crud:IssuePropertyKeys:read_only", function () {

  verifyIssuePropertyKeysExists(issueIdOrKey);
});

// Story: crud:IssueType:nondet:1:1
bthread("crud:IssueType:nondet:1:1", function () {
  let description = "description_1310";
  let hierarchyLevel = 1310;
  let id = 1310;
  let level = "level_1310";
  let name = "name_1310";
  let size = "size_1310";
  let type = "type_1310";
  let x = "x_1310";
  let y = "y_1310";
  // Dependency Barrier
  let deps = {};
  deps["alternativeIssueTypeId"] = matchAnyIssueAdded();
  deps["avatarId"] = matchAnyAvatarAdded();
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"alternativeIssueTypeId": "issueIdOrKey", "avatarId": "type", "projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  alternativeIssueTypeId = captured["alternativeIssueTypeId"];
  avatarId = captured["avatarId"];
  projectId = captured["projectId"];
  createIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  // waitForIssueTypeAdded(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  tryToAddExistingIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  verifyIssueTypeExists(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  updateIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  deleteIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  tryToDeleteANonExistingIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  verifyIssueTypeDoesNotExist(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
});

// Story: crud:IssueType:nondet:1:2
bthread("crud:IssueType:nondet:1:2", function () {
  let description = "description_1311";
  let hierarchyLevel = 1311;
  let id = 1311;
  let level = "level_1311";
  let name = "name_1311";
  let size = "size_1311";
  let type = "type_1311";
  let x = "x_1311";
  let y = "y_1311";
  // Dependency Barrier
  let deps = {};
  deps["alternativeIssueTypeId"] = matchAnyIssueAdded();
  deps["avatarId"] = matchAnyAvatarAdded();
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"alternativeIssueTypeId": "issueIdOrKey", "avatarId": "type", "projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  alternativeIssueTypeId = captured["alternativeIssueTypeId"];
  avatarId = captured["avatarId"];
  projectId = captured["projectId"];
  createIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  // waitForIssueTypeAdded(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  tryToAddExistingIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  updateIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  verifyIssueTypeExists(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  deleteIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  tryToDeleteANonExistingIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  verifyIssueTypeDoesNotExist(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
});

// Story: crud:IssueType:nondet:negative:dup-add
bthread("crud:IssueType:nondet:negative:dup-add", function () {
  let description = "description_1316";
  let hierarchyLevel = 1316;
  let id = 1316;
  let level = "level_1316";
  let name = "name_1316";
  let size = "size_1316";
  let type = "type_1316";
  let x = "x_1316";
  let y = "y_1316";
  // Dependency Barrier
  let deps = {};
  deps["alternativeIssueTypeId"] = matchAnyIssueAdded();
  deps["avatarId"] = matchAnyAvatarAdded();
  deps["projectId"] = matchAnyProjectAdded();
  let pkMap = {"alternativeIssueTypeId": "issueIdOrKey", "avatarId": "type", "projectId": "projectIdOrKey"};
  let captured = resolveDependencies(deps, pkMap);
  alternativeIssueTypeId = captured["alternativeIssueTypeId"];
  avatarId = captured["avatarId"];
  projectId = captured["projectId"];
  createIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  // waitForIssueTypeAdded(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  verifyIssueTypeExists(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  tryToAddExistingIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
  verifyIssueTypeExists(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
});

// Story: crud:AutoCompleteData:read_only
bthread("crud:AutoCompleteData:read_only", function () {
  let includeCollapsedFields = "includeCollapsedFields_1320";
  verifyAutoCompleteDataExists(includeCollapsedFields, projectIds);
});

// Story: crud:AutoCompleteSuggestions:read_only
bthread("crud:AutoCompleteSuggestions:read_only", function () {
  let fieldName = "fieldName_1330";
  let fieldValue = "fieldValue_1330";
  let predicateName = "predicateName_1330";
  let predicateValue = "predicateValue_1330";
  verifyAutoCompleteSuggestionsExists(fieldName, fieldValue, predicateName, predicateValue);
});

// Story: crud:Plan:nondet:1:1
bthread("crud:Plan:nondet:1:1", function () {
  let crossProjectReleases = "crossProjectReleases_1370";
  let customFields = "customFields_1370";
  let exclusionRules = "exclusionRules_1370";
  let issueSources = "issueSources_1370";
  let leadAccountId = 1370;
  let name = "name_1370";
  let permissions = "permissions_1370";
  let planId = 1370;
  let scheduling = "scheduling_1370";
  // Dependency Barrier
  let deps = {};
  deps["useGroupId"] = matchAnyGroupAdded();
  let pkMap = {"useGroupId": "groupId"};
  let captured = resolveDependencies(deps, pkMap);
  useGroupId = captured["useGroupId"];
  createPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  // waitForPlanAdded(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  tryToAddExistingPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  verifyPlanExists(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  updatePlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  trashPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  tryToDeleteANonExistingPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  verifyPlanDoesNotExist(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
});

// Story: crud:Plan:nondet:1:2
bthread("crud:Plan:nondet:1:2", function () {
  let crossProjectReleases = "crossProjectReleases_1371";
  let customFields = "customFields_1371";
  let exclusionRules = "exclusionRules_1371";
  let issueSources = "issueSources_1371";
  let leadAccountId = 1371;
  let name = "name_1371";
  let permissions = "permissions_1371";
  let planId = 1371;
  let scheduling = "scheduling_1371";
  // Dependency Barrier
  let deps = {};
  deps["useGroupId"] = matchAnyGroupAdded();
  let pkMap = {"useGroupId": "groupId"};
  let captured = resolveDependencies(deps, pkMap);
  useGroupId = captured["useGroupId"];
  createPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  // waitForPlanAdded(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  tryToAddExistingPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  updatePlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  verifyPlanExists(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  trashPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  tryToDeleteANonExistingPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  verifyPlanDoesNotExist(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
});

// Story: crud:Plan:nondet:negative:dup-add
bthread("crud:Plan:nondet:negative:dup-add", function () {
  let crossProjectReleases = "crossProjectReleases_1376";
  let customFields = "customFields_1376";
  let exclusionRules = "exclusionRules_1376";
  let issueSources = "issueSources_1376";
  let leadAccountId = 1376;
  let name = "name_1376";
  let permissions = "permissions_1376";
  let planId = 1376;
  let scheduling = "scheduling_1376";
  // Dependency Barrier
  let deps = {};
  deps["useGroupId"] = matchAnyGroupAdded();
  let pkMap = {"useGroupId": "groupId"};
  let captured = resolveDependencies(deps, pkMap);
  useGroupId = captured["useGroupId"];
  createPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  // waitForPlanAdded(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  verifyPlanExists(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  tryToAddExistingPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
  verifyPlanExists(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
});

// Story: crud:AtlassianTeam:nondet:1:1
bthread("crud:AtlassianTeam:nondet:1:1", function () {
  let capacity = 1380;
  let id = 1380;
  let planningStyle = "planningStyle_1380";
  let sprintLength = 1380;
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
  verifyAtlassianTeamExists(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  updateAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  removeAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  tryToDeleteANonExistingAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
  verifyAtlassianTeamDoesNotExist(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
});

// Story: crud:AtlassianTeam:nondet:1:2
bthread("crud:AtlassianTeam:nondet:1:2", function () {
  let capacity = 1381;
  let id = 1381;
  let planningStyle = "planningStyle_1381";
  let sprintLength = 1381;
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
  let capacity = 1386;
  let id = 1386;
  let planningStyle = "planningStyle_1386";
  let sprintLength = 1386;
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
  let capacity = 1390;
  let id = 1390;
  let memberAccountIds = "memberAccountIds_1390";
  let name = "name_1390";
  let planningStyle = "planningStyle_1390";
  let sprintLength = 1390;
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
  verifyPlanOnlyTeamExists(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  updatePlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  deletePlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  tryToDeleteANonExistingPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
  verifyPlanOnlyTeamDoesNotExist(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
});

// Story: crud:PlanOnlyTeam:nondet:1:2
bthread("crud:PlanOnlyTeam:nondet:1:2", function () {
  let capacity = 1391;
  let id = 1391;
  let memberAccountIds = "memberAccountIds_1391";
  let name = "name_1391";
  let planningStyle = "planningStyle_1391";
  let sprintLength = 1391;
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
  let capacity = 1396;
  let id = 1396;
  let memberAccountIds = "memberAccountIds_1396";
  let name = "name_1396";
  let planningStyle = "planningStyle_1396";
  let sprintLength = 1396;
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
  let cursor = "cursor_1400";
  let maxResults = "maxResults_1400";
  verifyTeamExists(cursor, maxResults, planId);
});

// Story: crud:Priority:nondet:1:1
bthread("crud:Priority:nondet:1:1", function () {
  let description = "description_1410";
  let iconUrl = "iconUrl_1410";
  let id = 1410;
  let name = "name_1410";
  let statusColor = "statusColor_1410";
  // Dependency Barrier
  let deps = {};
  deps["avatarId"] = matchAnyAvatarAdded();
  let pkMap = {"avatarId": "type"};
  let captured = resolveDependencies(deps, pkMap);
  avatarId = captured["avatarId"];
  createPriority(avatarId, description, iconUrl, id, name, statusColor);
  // waitForPriorityAdded(avatarId, description, iconUrl, id, name, statusColor);
  tryToAddExistingPriority(avatarId, description, iconUrl, id, name, statusColor);
  verifyPriorityExists(avatarId, description, iconUrl, id, name, statusColor);
  updatePriority(avatarId, description, iconUrl, id, name, statusColor);
  deletePriority(avatarId, description, iconUrl, id, name, statusColor);
  tryToDeleteANonExistingPriority(avatarId, description, iconUrl, id, name, statusColor);
  verifyPriorityDoesNotExist(avatarId, description, iconUrl, id, name, statusColor);
});

// Story: crud:Priority:nondet:1:2
bthread("crud:Priority:nondet:1:2", function () {
  let description = "description_1411";
  let iconUrl = "iconUrl_1411";
  let id = 1411;
  let name = "name_1411";
  let statusColor = "statusColor_1411";
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
  let description = "description_1416";
  let iconUrl = "iconUrl_1416";
  let id = 1416;
  let name = "name_1416";
  let statusColor = "statusColor_1416";
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
