/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_activitypub(user-id) {
  try { tryToDeleteANonExistingActivitypub(user-id); } catch (_e) {}
  addActivitypub(user-id);
  verifyActivitypubExists(user-id);
  tryToAddExistingActivitypub(user-id);
  deleteActivitypub(user-id);
  verifyActivitypubDoesNotExist(user-id);
}

function lifecycle_admin(username, id, owner, repo, task) {
  try { tryToDeleteANonExistingAdmin(username, id, owner, repo, task); } catch (_e) {}
  addAdmin(username, id, owner, repo, task);
  verifyAdminExists(username, id, owner, repo, task);
  tryToAddExistingAdmin(username, id, owner, repo, task);
  deleteAdmin(username, id, owner, repo, task);
  verifyAdminDoesNotExist(username, id, owner, repo, task);
}

function lifecycle_gitignore(name) {
  try { tryToDeleteANonExistingGitignore(name); } catch (_e) {}
  addGitignore(name);
  verifyGitignoreExists(name);
  tryToAddExistingGitignore(name);
  deleteGitignore(name);
  verifyGitignoreDoesNotExist(name);
}

function lifecycle_label(name) {
  try { tryToDeleteANonExistingLabel(name); } catch (_e) {}
  addLabel(name);
  verifyLabelExists(name);
  tryToAddExistingLabel(name);
  deleteLabel(name);
  verifyLabelDoesNotExist(name);
}

function lifecycle_license(name) {
  try { tryToDeleteANonExistingLicense(name); } catch (_e) {}
  addLicense(name);
  verifyLicenseExists(name);
  tryToAddExistingLicense(name);
  deleteLicense(name);
  verifyLicenseDoesNotExist(name);
}

function lifecycle_markdown(id) {
  try { tryToDeleteANonExistingMarkdown(id); } catch (_e) {}
  addMarkdown(id);
  verifyMarkdownExists(id);
  tryToAddExistingMarkdown(id);
  deleteMarkdown(id);
  verifyMarkdownDoesNotExist(id);
}

function lifecycle_markup(id) {
  try { tryToDeleteANonExistingMarkup(id); } catch (_e) {}
  addMarkup(id);
  verifyMarkupExists(id);
  tryToAddExistingMarkup(id);
  deleteMarkup(id);
  verifyMarkupDoesNotExist(id);
}

function lifecycle_nodeinfo(id) {
  try { tryToDeleteANonExistingNodeinfo(id); } catch (_e) {}
  addNodeinfo(id);
  verifyNodeinfoExists(id);
  tryToAddExistingNodeinfo(id);
  deleteNodeinfo(id);
  verifyNodeinfoDoesNotExist(id);
}

function lifecycle_notification(id) {
  try { tryToDeleteANonExistingNotification(id); } catch (_e) {}
  addNotification(id);
  verifyNotificationExists(id);
  tryToAddExistingNotification(id);
  deleteNotification(id);
  verifyNotificationDoesNotExist(id);
}

function lifecycle_org(org) {
  try { tryToDeleteANonExistingOrg(org); } catch (_e) {}
  addOrg(org);
  verifyOrgExists(org);
  tryToAddExistingOrg(org);
  deleteOrg(org);
  verifyOrgDoesNotExist(org);
}

function lifecycle_org(org, username, id, variablename, secretname) {
  try { tryToDeleteANonExistingOrg(org, username, id, variablename, secretname); } catch (_e) {}
  addOrg(org, username, id, variablename, secretname);
  verifyOrgExists(org, username, id, variablename, secretname);
  tryToAddExistingOrg(org, username, id, variablename, secretname);
  deleteOrg(org, username, id, variablename, secretname);
  verifyOrgDoesNotExist(org, username, id, variablename, secretname);
}

function lifecycle_package(owner, type, name, version) {
  try { tryToDeleteANonExistingPackage(owner, type, name, version); } catch (_e) {}
  addPackage(owner, type, name, version);
  verifyPackageExists(owner, type, name, version);
  tryToAddExistingPackage(owner, type, name, version);
  deletePackage(owner, type, name, version);
  verifyPackageDoesNotExist(owner, type, name, version);
}

function lifecycle_repo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  try { tryToDeleteANonExistingRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo); } catch (_e) {}
  addRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  verifyRepoExists(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  tryToAddExistingRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  deleteRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
  verifyRepoDoesNotExist(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo);
}

function lifecycle_repositorie(id) {
  try { tryToDeleteANonExistingRepositorie(id); } catch (_e) {}
  addRepositorie(id);
  verifyRepositorieExists(id);
  tryToAddExistingRepositorie(id);
  deleteRepositorie(id);
  verifyRepositorieDoesNotExist(id);
}

function lifecycle_setting(id) {
  try { tryToDeleteANonExistingSetting(id); } catch (_e) {}
  addSetting(id);
  verifySettingExists(id);
  tryToAddExistingSetting(id);
  deleteSetting(id);
  verifySettingDoesNotExist(id);
}

function lifecycle_signing_key.gpg(id) {
  try { tryToDeleteANonExistingSigning_key.gpg(id); } catch (_e) {}
  addSigning_key.gpg(id);
  verifySigning_key.gpgExists(id);
  tryToAddExistingSigning_key.gpg(id);
  deleteSigning_key.gpg(id);
  verifySigning_key.gpgDoesNotExist(id);
}

function lifecycle_team(id, username, org, repo) {
  try { tryToDeleteANonExistingTeam(id, username, org, repo); } catch (_e) {}
  addTeam(id, username, org, repo);
  verifyTeamExists(id, username, org, repo);
  tryToAddExistingTeam(id, username, org, repo);
  deleteTeam(id, username, org, repo);
  verifyTeamDoesNotExist(id, username, org, repo);
}

function lifecycle_topic(id) {
  try { tryToDeleteANonExistingTopic(id); } catch (_e) {}
  addTopic(id);
  verifyTopicExists(id);
  tryToAddExistingTopic(id);
  deleteTopic(id);
  verifyTopicDoesNotExist(id);
}

function lifecycle_user(id, username, variablename, owner, repo, secretname) {
  try { tryToDeleteANonExistingUser(id, username, variablename, owner, repo, secretname); } catch (_e) {}
  addUser(id, username, variablename, owner, repo, secretname);
  verifyUserExists(id, username, variablename, owner, repo, secretname);
  tryToAddExistingUser(id, username, variablename, owner, repo, secretname);
  deleteUser(id, username, variablename, owner, repo, secretname);
  verifyUserDoesNotExist(id, username, variablename, owner, repo, secretname);
}

function lifecycle_user(username, target, org, token) {
  try { tryToDeleteANonExistingUser(username, target, org, token); } catch (_e) {}
  addUser(username, target, org, token);
  verifyUserExists(username, target, org, token);
  tryToAddExistingUser(username, target, org, token);
  deleteUser(username, target, org, token);
  verifyUserDoesNotExist(username, target, org, token);
}

function lifecycle_version(id) {
  try { tryToDeleteANonExistingVersion(id); } catch (_e) {}
  addVersion(id);
  verifyVersionExists(id);
  tryToAddExistingVersion(id);
  deleteVersion(id);
  verifyVersionDoesNotExist(id);
}
