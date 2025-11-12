// ---- crud:activitypub:nondet:1:1 ----
bthread("crud:activitypub:nondet:1:1", function () {
  let user-id = 200;
  addActivitypub(user-id);
  tryToAddExistingActivitypub(user-id);
  verifyActivitypubExists(user-id);
  updateActivitypub(user-id);
  deleteActivitypub(user-id);
  tryToDeleteANonExistingActivitypub(user-id);
  verifyActivitypubDoesNotExist(user-id);
  
});

// ---- crud:activitypub:nondet:1:2 ----
bthread("crud:activitypub:nondet:1:2", function () {
  let user-id = 200;
  addActivitypub(user-id);
  tryToAddExistingActivitypub(user-id);
  updateActivitypub(user-id);
  verifyActivitypubExists(user-id);
  deleteActivitypub(user-id);
  tryToDeleteANonExistingActivitypub(user-id);
  verifyActivitypubDoesNotExist(user-id);
  
});

// ---- crud:activitypub:nondet:1:3 ----
bthread("crud:activitypub:nondet:1:3", function () {
  let user-id = 200;
  addActivitypub(user-id);
  tryToAddExistingActivitypub(user-id);
  verifyActivitypubExists(user-id);
  deleteActivitypub(user-id);
  tryToDeleteANonExistingActivitypub(user-id);
  verifyActivitypubDoesNotExist(user-id);
  
});

// ---- crud:activitypub:nondet:1:4 ----
bthread("crud:activitypub:nondet:1:4", function () {
  let user-id = 201;
  addActivitypub(user-id);
  tryToAddExistingActivitypub(user-id);
  deleteActivitypub(user-id);
  tryToDeleteANonExistingActivitypub(user-id);
  verifyActivitypubDoesNotExist(user-id);
  
});

// ---- crud:admin:nondet:2:1 ----
bthread("crud:admin:nondet:2:1", function () {
  let username = "username_201";
  let id = 201;
  let owner = "owner_201";
  let repo = "repo_201";
  let task = "task_201";
  addAdmin(username, id, owner, repo, task);
  tryToAddExistingAdmin(username, id, owner, repo, task);
  verifyAdminExists(username, id, owner, repo, task);
  updateAdmin(username, id, owner, repo, task);
  deleteAdmin(username, id, owner, repo, task);
  tryToDeleteANonExistingAdmin(username, id, owner, repo, task);
  verifyAdminDoesNotExist(username, id, owner, repo, task);
  
});

// ---- crud:admin:nondet:2:2 ----
bthread("crud:admin:nondet:2:2", function () {
  let username = "username_201";
  let id = 201;
  let owner = "owner_201";
  let repo = "repo_201";
  let task = "task_201";
  addAdmin(username, id, owner, repo, task);
  tryToAddExistingAdmin(username, id, owner, repo, task);
  updateAdmin(username, id, owner, repo, task);
  verifyAdminExists(username, id, owner, repo, task);
  deleteAdmin(username, id, owner, repo, task);
  tryToDeleteANonExistingAdmin(username, id, owner, repo, task);
  verifyAdminDoesNotExist(username, id, owner, repo, task);
  
});

// ---- crud:admin:nondet:2:3 ----
bthread("crud:admin:nondet:2:3", function () {
  let username = "username_201";
  let id = 201;
  let owner = "owner_201";
  let repo = "repo_201";
  let task = "task_201";
  addAdmin(username, id, owner, repo, task);
  tryToAddExistingAdmin(username, id, owner, repo, task);
  verifyAdminExists(username, id, owner, repo, task);
  deleteAdmin(username, id, owner, repo, task);
  tryToDeleteANonExistingAdmin(username, id, owner, repo, task);
  verifyAdminDoesNotExist(username, id, owner, repo, task);
  
});

// ---- crud:admin:nondet:2:4 ----
bthread("crud:admin:nondet:2:4", function () {
  let username = "username_202";
  let id = 202;
  let owner = "owner_202";
  let repo = "repo_202";
  let task = "task_202";
  addAdmin(username, id, owner, repo, task);
  tryToAddExistingAdmin(username, id, owner, repo, task);
  deleteAdmin(username, id, owner, repo, task);
  tryToDeleteANonExistingAdmin(username, id, owner, repo, task);
  verifyAdminDoesNotExist(username, id, owner, repo, task);
  
});

// ---- crud:gitignore:nondet:3:1 ----
bthread("crud:gitignore:nondet:3:1", function () {
  let name = "name_202";
  addGitignore(name);
  tryToAddExistingGitignore(name);
  verifyGitignoreExists(name);
  updateGitignore(name);
  deleteGitignore(name);
  tryToDeleteANonExistingGitignore(name);
  verifyGitignoreDoesNotExist(name);
  
});

// ---- crud:gitignore:nondet:3:2 ----
bthread("crud:gitignore:nondet:3:2", function () {
  let name = "name_202";
  addGitignore(name);
  tryToAddExistingGitignore(name);
  updateGitignore(name);
  verifyGitignoreExists(name);
  deleteGitignore(name);
  tryToDeleteANonExistingGitignore(name);
  verifyGitignoreDoesNotExist(name);
  
});

// ---- crud:gitignore:nondet:3:3 ----
bthread("crud:gitignore:nondet:3:3", function () {
  let name = "name_202";
  addGitignore(name);
  tryToAddExistingGitignore(name);
  verifyGitignoreExists(name);
  deleteGitignore(name);
  tryToDeleteANonExistingGitignore(name);
  verifyGitignoreDoesNotExist(name);
  
});

// ---- crud:gitignore:nondet:3:4 ----
bthread("crud:gitignore:nondet:3:4", function () {
  let name = "name_203";
  addGitignore(name);
  tryToAddExistingGitignore(name);
  deleteGitignore(name);
  tryToDeleteANonExistingGitignore(name);
  verifyGitignoreDoesNotExist(name);
  
});

// ---- crud:label:nondet:4:1 ----
bthread("crud:label:nondet:4:1", function () {
  let name = "name_203";
  addLabel(name);
  tryToAddExistingLabel(name);
  verifyLabelExists(name);
  updateLabel(name);
  deleteLabel(name);
  tryToDeleteANonExistingLabel(name);
  verifyLabelDoesNotExist(name);
  
});

// ---- crud:label:nondet:4:2 ----
bthread("crud:label:nondet:4:2", function () {
  let name = "name_203";
  addLabel(name);
  tryToAddExistingLabel(name);
  updateLabel(name);
  verifyLabelExists(name);
  deleteLabel(name);
  tryToDeleteANonExistingLabel(name);
  verifyLabelDoesNotExist(name);
  
});

// ---- crud:label:nondet:4:3 ----
bthread("crud:label:nondet:4:3", function () {
  let name = "name_203";
  addLabel(name);
  tryToAddExistingLabel(name);
  verifyLabelExists(name);
  deleteLabel(name);
  tryToDeleteANonExistingLabel(name);
  verifyLabelDoesNotExist(name);
  
});

// ---- crud:label:nondet:4:4 ----
bthread("crud:label:nondet:4:4", function () {
  let name = "name_204";
  addLabel(name);
  tryToAddExistingLabel(name);
  deleteLabel(name);
  tryToDeleteANonExistingLabel(name);
  verifyLabelDoesNotExist(name);
  
});

// ---- crud:license:nondet:5:1 ----
bthread("crud:license:nondet:5:1", function () {
  let name = "name_204";
  addLicense(name);
  tryToAddExistingLicense(name);
  verifyLicenseExists(name);
  updateLicense(name);
  deleteLicense(name);
  tryToDeleteANonExistingLicense(name);
  verifyLicenseDoesNotExist(name);
  
});

// ---- crud:license:nondet:5:2 ----
bthread("crud:license:nondet:5:2", function () {
  let name = "name_204";
  addLicense(name);
  tryToAddExistingLicense(name);
  updateLicense(name);
  verifyLicenseExists(name);
  deleteLicense(name);
  tryToDeleteANonExistingLicense(name);
  verifyLicenseDoesNotExist(name);
  
});

// ---- crud:license:nondet:5:3 ----
bthread("crud:license:nondet:5:3", function () {
  let name = "name_204";
  addLicense(name);
  tryToAddExistingLicense(name);
  verifyLicenseExists(name);
  deleteLicense(name);
  tryToDeleteANonExistingLicense(name);
  verifyLicenseDoesNotExist(name);
  
});

// ---- crud:license:nondet:5:4 ----
bthread("crud:license:nondet:5:4", function () {
  let name = "name_205";
  addLicense(name);
  tryToAddExistingLicense(name);
  deleteLicense(name);
  tryToDeleteANonExistingLicense(name);
  verifyLicenseDoesNotExist(name);
  
});

// ---- crud:markdown:nondet:6:1 ----
bthread("crud:markdown:nondet:6:1", function () {
  let id = 205;
  addMarkdown(id);
  tryToAddExistingMarkdown(id);
  verifyMarkdownExists(id);
  updateMarkdown(id);
  deleteMarkdown(id);
  tryToDeleteANonExistingMarkdown(id);
  verifyMarkdownDoesNotExist(id);
  
});

// ---- crud:markdown:nondet:6:2 ----
bthread("crud:markdown:nondet:6:2", function () {
  let id = 205;
  addMarkdown(id);
  tryToAddExistingMarkdown(id);
  updateMarkdown(id);
  verifyMarkdownExists(id);
  deleteMarkdown(id);
  tryToDeleteANonExistingMarkdown(id);
  verifyMarkdownDoesNotExist(id);
  
});

// ---- crud:markdown:nondet:6:3 ----
bthread("crud:markdown:nondet:6:3", function () {
  let id = 205;
  addMarkdown(id);
  tryToAddExistingMarkdown(id);
  verifyMarkdownExists(id);
  deleteMarkdown(id);
  tryToDeleteANonExistingMarkdown(id);
  verifyMarkdownDoesNotExist(id);
  
});

// ---- crud:markdown:nondet:6:4 ----
bthread("crud:markdown:nondet:6:4", function () {
  let id = 206;
  addMarkdown(id);
  tryToAddExistingMarkdown(id);
  deleteMarkdown(id);
  tryToDeleteANonExistingMarkdown(id);
  verifyMarkdownDoesNotExist(id);
  
});

// ---- crud:markup:nondet:7:1 ----
bthread("crud:markup:nondet:7:1", function () {
  let id = 206;
  addMarkup(id);
  tryToAddExistingMarkup(id);
  verifyMarkupExists(id);
  updateMarkup(id);
  deleteMarkup(id);
  tryToDeleteANonExistingMarkup(id);
  verifyMarkupDoesNotExist(id);
  
});

// ---- crud:markup:nondet:7:2 ----
bthread("crud:markup:nondet:7:2", function () {
  let id = 206;
  addMarkup(id);
  tryToAddExistingMarkup(id);
  updateMarkup(id);
  verifyMarkupExists(id);
  deleteMarkup(id);
  tryToDeleteANonExistingMarkup(id);
  verifyMarkupDoesNotExist(id);
  
});

// ---- crud:markup:nondet:7:3 ----
bthread("crud:markup:nondet:7:3", function () {
  let id = 206;
  addMarkup(id);
  tryToAddExistingMarkup(id);
  verifyMarkupExists(id);
  deleteMarkup(id);
  tryToDeleteANonExistingMarkup(id);
  verifyMarkupDoesNotExist(id);
  
});

// ---- crud:markup:nondet:7:4 ----
bthread("crud:markup:nondet:7:4", function () {
  let id = 207;
  addMarkup(id);
  tryToAddExistingMarkup(id);
  deleteMarkup(id);
  tryToDeleteANonExistingMarkup(id);
  verifyMarkupDoesNotExist(id);
  
});

// ---- crud:nodeinfo:nondet:8:1 ----
bthread("crud:nodeinfo:nondet:8:1", function () {
  let id = 207;
  addNodeinfo(id);
  tryToAddExistingNodeinfo(id);
  verifyNodeinfoExists(id);
  updateNodeinfo(id);
  deleteNodeinfo(id);
  tryToDeleteANonExistingNodeinfo(id);
  verifyNodeinfoDoesNotExist(id);
  
});

// ---- crud:nodeinfo:nondet:8:2 ----
bthread("crud:nodeinfo:nondet:8:2", function () {
  let id = 207;
  addNodeinfo(id);
  tryToAddExistingNodeinfo(id);
  updateNodeinfo(id);
  verifyNodeinfoExists(id);
  deleteNodeinfo(id);
  tryToDeleteANonExistingNodeinfo(id);
  verifyNodeinfoDoesNotExist(id);
  
});

// ---- crud:nodeinfo:nondet:8:3 ----
bthread("crud:nodeinfo:nondet:8:3", function () {
  let id = 207;
  addNodeinfo(id);
  tryToAddExistingNodeinfo(id);
  verifyNodeinfoExists(id);
  deleteNodeinfo(id);
  tryToDeleteANonExistingNodeinfo(id);
  verifyNodeinfoDoesNotExist(id);
  
});

// ---- crud:nodeinfo:nondet:8:4 ----
bthread("crud:nodeinfo:nondet:8:4", function () {
  let id = 208;
  addNodeinfo(id);
  tryToAddExistingNodeinfo(id);
  deleteNodeinfo(id);
  tryToDeleteANonExistingNodeinfo(id);
  verifyNodeinfoDoesNotExist(id);
  
});

// ---- crud:notification:nondet:9:1 ----
bthread("crud:notification:nondet:9:1", function () {
  let id = 208;
  addNotification(id);
  tryToAddExistingNotification(id);
  verifyNotificationExists(id);
  updateNotification(id);
  deleteNotification(id);
  tryToDeleteANonExistingNotification(id);
  verifyNotificationDoesNotExist(id);
  
});

// ---- crud:notification:nondet:9:2 ----
bthread("crud:notification:nondet:9:2", function () {
  let id = 208;
  addNotification(id);
  tryToAddExistingNotification(id);
  updateNotification(id);
  verifyNotificationExists(id);
  deleteNotification(id);
  tryToDeleteANonExistingNotification(id);
  verifyNotificationDoesNotExist(id);
  
});

// ---- crud:notification:nondet:9:3 ----
bthread("crud:notification:nondet:9:3", function () {
  let id = 208;
  addNotification(id);
  tryToAddExistingNotification(id);
  verifyNotificationExists(id);
  deleteNotification(id);
  tryToDeleteANonExistingNotification(id);
  verifyNotificationDoesNotExist(id);
  
});

// ---- crud:notification:nondet:9:4 ----
bthread("crud:notification:nondet:9:4", function () {
  let id = 209;
  addNotification(id);
  tryToAddExistingNotification(id);
  deleteNotification(id);
  tryToDeleteANonExistingNotification(id);
  verifyNotificationDoesNotExist(id);
  
});

// ---- crud:org:nondet:10:1 ----
bthread("crud:org:nondet:10:1", function () {
  let org = "org_209";
  addOrg(org);
  tryToAddExistingOrg(org);
  verifyOrgExists(org);
  updateOrg(org);
  deleteOrg(org);
  tryToDeleteANonExistingOrg(org);
  verifyOrgDoesNotExist(org);
  
});

// ---- crud:org:nondet:10:2 ----
bthread("crud:org:nondet:10:2", function () {
  let org = "org_209";
  addOrg(org);
  tryToAddExistingOrg(org);
  updateOrg(org);
  verifyOrgExists(org);
  deleteOrg(org);
  tryToDeleteANonExistingOrg(org);
  verifyOrgDoesNotExist(org);
  
});

// ---- crud:org:nondet:10:3 ----
bthread("crud:org:nondet:10:3", function () {
  let org = "org_209";
  addOrg(org);
  tryToAddExistingOrg(org);
  verifyOrgExists(org);
  deleteOrg(org);
  tryToDeleteANonExistingOrg(org);
  verifyOrgDoesNotExist(org);
  
});

// ---- crud:org:nondet:10:4 ----
bthread("crud:org:nondet:10:4", function () {
  let org = "org_210";
  addOrg(org);
  tryToAddExistingOrg(org);
  deleteOrg(org);
  tryToDeleteANonExistingOrg(org);
  verifyOrgDoesNotExist(org);
  
});

// ---- crud:org:nondet:11:1 ----
bthread("crud:org:nondet:11:1", function () {
  let org = "org_210";
  let username = "username_210";
  let id = 210;
  let variablename = "variablename_210";
  let secretname = "secretname_210";
  addOrg(org, username, id, variablename, secretname);
  tryToAddExistingOrg(org, username, id, variablename, secretname);
  verifyOrgExists(org, username, id, variablename, secretname);
  updateOrg(org, username, id, variablename, secretname);
  deleteOrg(org, username, id, variablename, secretname);
  tryToDeleteANonExistingOrg(org, username, id, variablename, secretname);
  verifyOrgDoesNotExist(org, username, id, variablename, secretname);
  
});

// ---- crud:org:nondet:11:2 ----
bthread("crud:org:nondet:11:2", function () {
  let org = "org_210";
  let username = "username_210";
  let id = 210;
  let variablename = "variablename_210";
  let secretname = "secretname_210";
  addOrg(org, username, id, variablename, secretname);
  tryToAddExistingOrg(org, username, id, variablename, secretname);
  updateOrg(org, username, id, variablename, secretname);
  verifyOrgExists(org, username, id, variablename, secretname);
  deleteOrg(org, username, id, variablename, secretname);
  tryToDeleteANonExistingOrg(org, username, id, variablename, secretname);
  verifyOrgDoesNotExist(org, username, id, variablename, secretname);
  
});

// ---- crud:org:nondet:11:3 ----
bthread("crud:org:nondet:11:3", function () {
  let org = "org_210";
  let username = "username_210";
  let id = 210;
  let variablename = "variablename_210";
  let secretname = "secretname_210";
  addOrg(org, username, id, variablename, secretname);
  tryToAddExistingOrg(org, username, id, variablename, secretname);
  verifyOrgExists(org, username, id, variablename, secretname);
  deleteOrg(org, username, id, variablename, secretname);
  tryToDeleteANonExistingOrg(org, username, id, variablename, secretname);
  verifyOrgDoesNotExist(org, username, id, variablename, secretname);
  
});

// ---- crud:org:nondet:11:4 ----
bthread("crud:org:nondet:11:4", function () {
  let org = "org_211";
  let username = "username_211";
  let id = 211;
  let variablename = "variablename_211";
  let secretname = "secretname_211";
  addOrg(org, username, id, variablename, secretname);
  tryToAddExistingOrg(org, username, id, variablename, secretname);
  deleteOrg(org, username, id, variablename, secretname);
  tryToDeleteANonExistingOrg(org, username, id, variablename, secretname);
  verifyOrgDoesNotExist(org, username, id, variablename, secretname);
  
});

// ---- crud:package:nondet:12:1 ----
bthread("crud:package:nondet:12:1", function () {
  let owner = "owner_211";
  let type = "type_211";
  let name = "name_211";
  let version = "version_211";
  addPackage(owner, type, name, version);
  tryToAddExistingPackage(owner, type, name, version);
  verifyPackageExists(owner, type, name, version);
  updatePackage(owner, type, name, version);
  deletePackage(owner, type, name, version);
  tryToDeleteANonExistingPackage(owner, type, name, version);
  verifyPackageDoesNotExist(owner, type, name, version);
  
});

// ---- crud:package:nondet:12:2 ----
bthread("crud:package:nondet:12:2", function () {
  let owner = "owner_211";
  let type = "type_211";
  let name = "name_211";
  let version = "version_211";
  addPackage(owner, type, name, version);
  tryToAddExistingPackage(owner, type, name, version);
  updatePackage(owner, type, name, version);
  verifyPackageExists(owner, type, name, version);
  deletePackage(owner, type, name, version);
  tryToDeleteANonExistingPackage(owner, type, name, version);
  verifyPackageDoesNotExist(owner, type, name, version);
  
});

// ---- crud:package:nondet:12:3 ----
bthread("crud:package:nondet:12:3", function () {
  let owner = "owner_211";
  let type = "type_211";
  let name = "name_211";
  let version = "version_211";
  addPackage(owner, type, name, version);
  tryToAddExistingPackage(owner, type, name, version);
  verifyPackageExists(owner, type, name, version);
  deletePackage(owner, type, name, version);
  tryToDeleteANonExistingPackage(owner, type, name, version);
  verifyPackageDoesNotExist(owner, type, name, version);
  
});

// ---- crud:package:nondet:12:4 ----
bthread("crud:package:nondet:12:4", function () {
  let owner = "owner_212";
  let type = "type_212";
  let name = "name_212";
  let version = "version_212";
  addPackage(owner, type, name, version);
  tryToAddExistingPackage(owner, type, name, version);
  deletePackage(owner, type, name, version);
  tryToDeleteANonExistingPackage(owner, type, name, version);
  verifyPackageDoesNotExist(owner, type, name, version);
  
});

// ---- crud:repo:nondet:13:1 ----
bthread("crud:repo:nondet:13:1", function () {
  let owner = "owner_212";
  let repo = "repo_212";
  let index = "index_212";
  let id = 212;
  let sha = "sha_212";
  let attachment_id = 212;
  let filepath = "filepath_212";
  let name = "name_212";
  let variablename = "variablename_212";
  let collaborator = "collaborator_212";
  let tag = "tag_212";
  let pageName = "pageName_212";
  let branch = "branch_212";
  let ref = "ref_212";
  let user = "user_212";
  let team = "team_212";
  let secretname = "secretname_212";
  let diffType = "diffType_212";
  let topic = "topic_212";
  let archive = "archive_212";
  let basehead = "basehead_212";
  let position = "position_212";
  let base = "base_212";
  let head = "head_212";
  let template_owner = "template_owner_212";
  let template_repo = "template_repo_212";
  addRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  tryToAddExistingRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  verifyRepoExists(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  updateRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  deleteRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  tryToDeleteANonExistingRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  verifyRepoDoesNotExist(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  
});

// ---- crud:repo:nondet:13:2 ----
bthread("crud:repo:nondet:13:2", function () {
  let owner = "owner_212";
  let repo = "repo_212";
  let index = "index_212";
  let id = 212;
  let sha = "sha_212";
  let attachment_id = 212;
  let filepath = "filepath_212";
  let name = "name_212";
  let variablename = "variablename_212";
  let collaborator = "collaborator_212";
  let tag = "tag_212";
  let pageName = "pageName_212";
  let branch = "branch_212";
  let ref = "ref_212";
  let user = "user_212";
  let team = "team_212";
  let secretname = "secretname_212";
  let diffType = "diffType_212";
  let topic = "topic_212";
  let archive = "archive_212";
  let basehead = "basehead_212";
  let position = "position_212";
  let base = "base_212";
  let head = "head_212";
  let template_owner = "template_owner_212";
  let template_repo = "template_repo_212";
  addRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  tryToAddExistingRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  updateRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  verifyRepoExists(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  deleteRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  tryToDeleteANonExistingRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  verifyRepoDoesNotExist(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  
});

// ---- crud:repo:nondet:13:3 ----
bthread("crud:repo:nondet:13:3", function () {
  let owner = "owner_212";
  let repo = "repo_212";
  let index = "index_212";
  let id = 212;
  let sha = "sha_212";
  let attachment_id = 212;
  let filepath = "filepath_212";
  let name = "name_212";
  let variablename = "variablename_212";
  let collaborator = "collaborator_212";
  let tag = "tag_212";
  let pageName = "pageName_212";
  let branch = "branch_212";
  let ref = "ref_212";
  let user = "user_212";
  let team = "team_212";
  let secretname = "secretname_212";
  let diffType = "diffType_212";
  let topic = "topic_212";
  let archive = "archive_212";
  let basehead = "basehead_212";
  let position = "position_212";
  let base = "base_212";
  let head = "head_212";
  let template_owner = "template_owner_212";
  let template_repo = "template_repo_212";
  addRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  tryToAddExistingRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  verifyRepoExists(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  deleteRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  tryToDeleteANonExistingRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  verifyRepoDoesNotExist(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  
});

// ---- crud:repo:nondet:13:4 ----
bthread("crud:repo:nondet:13:4", function () {
  let owner = "owner_213";
  let repo = "repo_213";
  let index = "index_213";
  let id = 213;
  let sha = "sha_213";
  let attachment_id = 213;
  let filepath = "filepath_213";
  let name = "name_213";
  let variablename = "variablename_213";
  let collaborator = "collaborator_213";
  let tag = "tag_213";
  let pageName = "pageName_213";
  let branch = "branch_213";
  let ref = "ref_213";
  let user = "user_213";
  let team = "team_213";
  let secretname = "secretname_213";
  let diffType = "diffType_213";
  let topic = "topic_213";
  let archive = "archive_213";
  let basehead = "basehead_213";
  let position = "position_213";
  let base = "base_213";
  let head = "head_213";
  let template_owner = "template_owner_213";
  let template_repo = "template_repo_213";
  addRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  tryToAddExistingRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  deleteRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  tryToDeleteANonExistingRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  verifyRepoDoesNotExist(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  
});

// ---- crud:repositorie:nondet:14:1 ----
bthread("crud:repositorie:nondet:14:1", function () {
  let id = 213;
  addRepositorie(id);
  tryToAddExistingRepositorie(id);
  verifyRepositorieExists(id);
  updateRepositorie(id);
  deleteRepositorie(id);
  tryToDeleteANonExistingRepositorie(id);
  verifyRepositorieDoesNotExist(id);
  
});

// ---- crud:repositorie:nondet:14:2 ----
bthread("crud:repositorie:nondet:14:2", function () {
  let id = 213;
  addRepositorie(id);
  tryToAddExistingRepositorie(id);
  updateRepositorie(id);
  verifyRepositorieExists(id);
  deleteRepositorie(id);
  tryToDeleteANonExistingRepositorie(id);
  verifyRepositorieDoesNotExist(id);
  
});

// ---- crud:repositorie:nondet:14:3 ----
bthread("crud:repositorie:nondet:14:3", function () {
  let id = 213;
  addRepositorie(id);
  tryToAddExistingRepositorie(id);
  verifyRepositorieExists(id);
  deleteRepositorie(id);
  tryToDeleteANonExistingRepositorie(id);
  verifyRepositorieDoesNotExist(id);
  
});

// ---- crud:repositorie:nondet:14:4 ----
bthread("crud:repositorie:nondet:14:4", function () {
  let id = 214;
  addRepositorie(id);
  tryToAddExistingRepositorie(id);
  deleteRepositorie(id);
  tryToDeleteANonExistingRepositorie(id);
  verifyRepositorieDoesNotExist(id);
  
});

// ---- crud:setting:nondet:15:1 ----
bthread("crud:setting:nondet:15:1", function () {
  let id = 214;
  addSetting(id);
  tryToAddExistingSetting(id);
  verifySettingExists(id);
  updateSetting(id);
  deleteSetting(id);
  tryToDeleteANonExistingSetting(id);
  verifySettingDoesNotExist(id);
  
});

// ---- crud:setting:nondet:15:2 ----
bthread("crud:setting:nondet:15:2", function () {
  let id = 214;
  addSetting(id);
  tryToAddExistingSetting(id);
  updateSetting(id);
  verifySettingExists(id);
  deleteSetting(id);
  tryToDeleteANonExistingSetting(id);
  verifySettingDoesNotExist(id);
  
});

// ---- crud:setting:nondet:15:3 ----
bthread("crud:setting:nondet:15:3", function () {
  let id = 214;
  addSetting(id);
  tryToAddExistingSetting(id);
  verifySettingExists(id);
  deleteSetting(id);
  tryToDeleteANonExistingSetting(id);
  verifySettingDoesNotExist(id);
  
});

// ---- crud:setting:nondet:15:4 ----
bthread("crud:setting:nondet:15:4", function () {
  let id = 215;
  addSetting(id);
  tryToAddExistingSetting(id);
  deleteSetting(id);
  tryToDeleteANonExistingSetting(id);
  verifySettingDoesNotExist(id);
  
});

// ---- crud:signing_key.gpg:nondet:16:1 ----
bthread("crud:signing_key.gpg:nondet:16:1", function () {
  let id = 215;
  addSigning_key.gpg(id);
  tryToAddExistingSigning_key.gpg(id);
  verifySigning_key.gpgExists(id);
  updateSigning_key.gpg(id);
  deleteSigning_key.gpg(id);
  tryToDeleteANonExistingSigning_key.gpg(id);
  verifySigning_key.gpgDoesNotExist(id);
  
});

// ---- crud:signing_key.gpg:nondet:16:2 ----
bthread("crud:signing_key.gpg:nondet:16:2", function () {
  let id = 215;
  addSigning_key.gpg(id);
  tryToAddExistingSigning_key.gpg(id);
  updateSigning_key.gpg(id);
  verifySigning_key.gpgExists(id);
  deleteSigning_key.gpg(id);
  tryToDeleteANonExistingSigning_key.gpg(id);
  verifySigning_key.gpgDoesNotExist(id);
  
});

// ---- crud:signing_key.gpg:nondet:16:3 ----
bthread("crud:signing_key.gpg:nondet:16:3", function () {
  let id = 215;
  addSigning_key.gpg(id);
  tryToAddExistingSigning_key.gpg(id);
  verifySigning_key.gpgExists(id);
  deleteSigning_key.gpg(id);
  tryToDeleteANonExistingSigning_key.gpg(id);
  verifySigning_key.gpgDoesNotExist(id);
  
});

// ---- crud:signing_key.gpg:nondet:16:4 ----
bthread("crud:signing_key.gpg:nondet:16:4", function () {
  let id = 216;
  addSigning_key.gpg(id);
  tryToAddExistingSigning_key.gpg(id);
  deleteSigning_key.gpg(id);
  tryToDeleteANonExistingSigning_key.gpg(id);
  verifySigning_key.gpgDoesNotExist(id);
  
});

// ---- crud:team:nondet:17:1 ----
bthread("crud:team:nondet:17:1", function () {
  let id = 216;
  let username = "username_216";
  let org = "org_216";
  let repo = "repo_216";
  addTeam(id, username, org, repo);
  tryToAddExistingTeam(id, username, org, repo);
  verifyTeamExists(id, username, org, repo);
  updateTeam(id, username, org, repo);
  deleteTeam(id, username, org, repo);
  tryToDeleteANonExistingTeam(id, username, org, repo);
  verifyTeamDoesNotExist(id, username, org, repo);
  
});

// ---- crud:team:nondet:17:2 ----
bthread("crud:team:nondet:17:2", function () {
  let id = 216;
  let username = "username_216";
  let org = "org_216";
  let repo = "repo_216";
  addTeam(id, username, org, repo);
  tryToAddExistingTeam(id, username, org, repo);
  updateTeam(id, username, org, repo);
  verifyTeamExists(id, username, org, repo);
  deleteTeam(id, username, org, repo);
  tryToDeleteANonExistingTeam(id, username, org, repo);
  verifyTeamDoesNotExist(id, username, org, repo);
  
});

// ---- crud:team:nondet:17:3 ----
bthread("crud:team:nondet:17:3", function () {
  let id = 216;
  let username = "username_216";
  let org = "org_216";
  let repo = "repo_216";
  addTeam(id, username, org, repo);
  tryToAddExistingTeam(id, username, org, repo);
  verifyTeamExists(id, username, org, repo);
  deleteTeam(id, username, org, repo);
  tryToDeleteANonExistingTeam(id, username, org, repo);
  verifyTeamDoesNotExist(id, username, org, repo);
  
});

// ---- crud:team:nondet:17:4 ----
bthread("crud:team:nondet:17:4", function () {
  let id = 217;
  let username = "username_217";
  let org = "org_217";
  let repo = "repo_217";
  addTeam(id, username, org, repo);
  tryToAddExistingTeam(id, username, org, repo);
  deleteTeam(id, username, org, repo);
  tryToDeleteANonExistingTeam(id, username, org, repo);
  verifyTeamDoesNotExist(id, username, org, repo);
  
});

// ---- crud:topic:nondet:18:1 ----
bthread("crud:topic:nondet:18:1", function () {
  let id = 217;
  addTopic(id);
  tryToAddExistingTopic(id);
  verifyTopicExists(id);
  updateTopic(id);
  deleteTopic(id);
  tryToDeleteANonExistingTopic(id);
  verifyTopicDoesNotExist(id);
  
});

// ---- crud:topic:nondet:18:2 ----
bthread("crud:topic:nondet:18:2", function () {
  let id = 217;
  addTopic(id);
  tryToAddExistingTopic(id);
  updateTopic(id);
  verifyTopicExists(id);
  deleteTopic(id);
  tryToDeleteANonExistingTopic(id);
  verifyTopicDoesNotExist(id);
  
});

// ---- crud:topic:nondet:18:3 ----
bthread("crud:topic:nondet:18:3", function () {
  let id = 217;
  addTopic(id);
  tryToAddExistingTopic(id);
  verifyTopicExists(id);
  deleteTopic(id);
  tryToDeleteANonExistingTopic(id);
  verifyTopicDoesNotExist(id);
  
});

// ---- crud:topic:nondet:18:4 ----
bthread("crud:topic:nondet:18:4", function () {
  let id = 218;
  addTopic(id);
  tryToAddExistingTopic(id);
  deleteTopic(id);
  tryToDeleteANonExistingTopic(id);
  verifyTopicDoesNotExist(id);
  
});

// ---- crud:user:nondet:19:1 ----
bthread("crud:user:nondet:19:1", function () {
  let id = 218;
  let username = "username_218";
  let variablename = "variablename_218";
  let owner = "owner_218";
  let repo = "repo_218";
  let secretname = "secretname_218";
  addUser(id, username, variablename, owner, repo, secretname);
  tryToAddExistingUser(id, username, variablename, owner, repo, secretname);
  verifyUserExists(id, username, variablename, owner, repo, secretname);
  updateUser(id, username, variablename, owner, repo, secretname);
  deleteUser(id, username, variablename, owner, repo, secretname);
  tryToDeleteANonExistingUser(id, username, variablename, owner, repo, secretname);
  verifyUserDoesNotExist(id, username, variablename, owner, repo, secretname);
  
});

// ---- crud:user:nondet:19:2 ----
bthread("crud:user:nondet:19:2", function () {
  let id = 218;
  let username = "username_218";
  let variablename = "variablename_218";
  let owner = "owner_218";
  let repo = "repo_218";
  let secretname = "secretname_218";
  addUser(id, username, variablename, owner, repo, secretname);
  tryToAddExistingUser(id, username, variablename, owner, repo, secretname);
  updateUser(id, username, variablename, owner, repo, secretname);
  verifyUserExists(id, username, variablename, owner, repo, secretname);
  deleteUser(id, username, variablename, owner, repo, secretname);
  tryToDeleteANonExistingUser(id, username, variablename, owner, repo, secretname);
  verifyUserDoesNotExist(id, username, variablename, owner, repo, secretname);
  
});

// ---- crud:user:nondet:19:3 ----
bthread("crud:user:nondet:19:3", function () {
  let id = 218;
  let username = "username_218";
  let variablename = "variablename_218";
  let owner = "owner_218";
  let repo = "repo_218";
  let secretname = "secretname_218";
  addUser(id, username, variablename, owner, repo, secretname);
  tryToAddExistingUser(id, username, variablename, owner, repo, secretname);
  verifyUserExists(id, username, variablename, owner, repo, secretname);
  deleteUser(id, username, variablename, owner, repo, secretname);
  tryToDeleteANonExistingUser(id, username, variablename, owner, repo, secretname);
  verifyUserDoesNotExist(id, username, variablename, owner, repo, secretname);
  
});

// ---- crud:user:nondet:19:4 ----
bthread("crud:user:nondet:19:4", function () {
  let id = 219;
  let username = "username_219";
  let variablename = "variablename_219";
  let owner = "owner_219";
  let repo = "repo_219";
  let secretname = "secretname_219";
  addUser(id, username, variablename, owner, repo, secretname);
  tryToAddExistingUser(id, username, variablename, owner, repo, secretname);
  deleteUser(id, username, variablename, owner, repo, secretname);
  tryToDeleteANonExistingUser(id, username, variablename, owner, repo, secretname);
  verifyUserDoesNotExist(id, username, variablename, owner, repo, secretname);
  
});

// ---- crud:user:nondet:20:1 ----
bthread("crud:user:nondet:20:1", function () {
  let username = "username_219";
  let target = "target_219";
  let org = "org_219";
  let token = "token_219";
  addUser(username, target, org, token);
  tryToAddExistingUser(username, target, org, token);
  verifyUserExists(username, target, org, token);
  updateUser(username, target, org, token);
  deleteUser(username, target, org, token);
  tryToDeleteANonExistingUser(username, target, org, token);
  verifyUserDoesNotExist(username, target, org, token);
  
});

// ---- crud:user:nondet:20:2 ----
bthread("crud:user:nondet:20:2", function () {
  let username = "username_219";
  let target = "target_219";
  let org = "org_219";
  let token = "token_219";
  addUser(username, target, org, token);
  tryToAddExistingUser(username, target, org, token);
  updateUser(username, target, org, token);
  verifyUserExists(username, target, org, token);
  deleteUser(username, target, org, token);
  tryToDeleteANonExistingUser(username, target, org, token);
  verifyUserDoesNotExist(username, target, org, token);
  
});

// ---- crud:user:nondet:20:3 ----
bthread("crud:user:nondet:20:3", function () {
  let username = "username_219";
  let target = "target_219";
  let org = "org_219";
  let token = "token_219";
  addUser(username, target, org, token);
  tryToAddExistingUser(username, target, org, token);
  verifyUserExists(username, target, org, token);
  deleteUser(username, target, org, token);
  tryToDeleteANonExistingUser(username, target, org, token);
  verifyUserDoesNotExist(username, target, org, token);
  
});

// ---- crud:user:nondet:20:4 ----
bthread("crud:user:nondet:20:4", function () {
  let username = "username_220";
  let target = "target_220";
  let org = "org_220";
  let token = "token_220";
  addUser(username, target, org, token);
  tryToAddExistingUser(username, target, org, token);
  deleteUser(username, target, org, token);
  tryToDeleteANonExistingUser(username, target, org, token);
  verifyUserDoesNotExist(username, target, org, token);
  
});

// ---- crud:version:nondet:21:1 ----
bthread("crud:version:nondet:21:1", function () {
  let id = 220;
  addVersion(id);
  tryToAddExistingVersion(id);
  verifyVersionExists(id);
  updateVersion(id);
  deleteVersion(id);
  tryToDeleteANonExistingVersion(id);
  verifyVersionDoesNotExist(id);
  
});

// ---- crud:version:nondet:21:2 ----
bthread("crud:version:nondet:21:2", function () {
  let id = 220;
  addVersion(id);
  tryToAddExistingVersion(id);
  updateVersion(id);
  verifyVersionExists(id);
  deleteVersion(id);
  tryToDeleteANonExistingVersion(id);
  verifyVersionDoesNotExist(id);
  
});

// ---- crud:version:nondet:21:3 ----
bthread("crud:version:nondet:21:3", function () {
  let id = 220;
  addVersion(id);
  tryToAddExistingVersion(id);
  verifyVersionExists(id);
  deleteVersion(id);
  tryToDeleteANonExistingVersion(id);
  verifyVersionDoesNotExist(id);
  
});

// ---- crud:version:nondet:21:4 ----
bthread("crud:version:nondet:21:4", function () {
  let id = 221;
  addVersion(id);
  tryToAddExistingVersion(id);
  deleteVersion(id);
  tryToDeleteANonExistingVersion(id);
  verifyVersionDoesNotExist(id);
  
});
