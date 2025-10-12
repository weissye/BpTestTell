/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_activitypub(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingActivitypub(id); } catch (_e) {}
  addActivitypub(id);
  verifyActivitypubExists(id);
  tryToAddExistingActivitypub(id);
  deleteActivitypub(id);
  verifyActivitypubDoesNotExist(id);
}

function lifecycle_admin(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingAdmin(id); } catch (_e) {}
  addAdmin(id);
  verifyAdminExists(id);
  tryToAddExistingAdmin(id);
  deleteAdmin(id);
  verifyAdminDoesNotExist(id);
}

function lifecycle_gitignore(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingGitignore(id); } catch (_e) {}
  addGitignore(id);
  verifyGitignoreExists(id);
  tryToAddExistingGitignore(id);
  deleteGitignore(id);
  verifyGitignoreDoesNotExist(id);
}

function lifecycle_label(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingLabel(id); } catch (_e) {}
  addLabel(id);
  verifyLabelExists(id);
  tryToAddExistingLabel(id);
  deleteLabel(id);
  verifyLabelDoesNotExist(id);
}

function lifecycle_license(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingLicense(id); } catch (_e) {}
  addLicense(id);
  verifyLicenseExists(id);
  tryToAddExistingLicense(id);
  deleteLicense(id);
  verifyLicenseDoesNotExist(id);
}

function lifecycle_markdown(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingMarkdown(id); } catch (_e) {}
  addMarkdown(id);
  verifyMarkdownExists(id);
  tryToAddExistingMarkdown(id);
  deleteMarkdown(id);
  verifyMarkdownDoesNotExist(id);
}

function lifecycle_markup(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingMarkup(id); } catch (_e) {}
  addMarkup(id);
  verifyMarkupExists(id);
  tryToAddExistingMarkup(id);
  deleteMarkup(id);
  verifyMarkupDoesNotExist(id);
}

function lifecycle_nodeinfo(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingNodeinfo(id); } catch (_e) {}
  addNodeinfo(id);
  verifyNodeinfoExists(id);
  tryToAddExistingNodeinfo(id);
  deleteNodeinfo(id);
  verifyNodeinfoDoesNotExist(id);
}

function lifecycle_notification(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingNotification(id); } catch (_e) {}
  addNotification(id);
  verifyNotificationExists(id);
  tryToAddExistingNotification(id);
  deleteNotification(id);
  verifyNotificationDoesNotExist(id);
}

function lifecycle_org(org, username) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingOrg(org, username); } catch (_e) {}
  addOrg(org, username);
  verifyOrgExists(org, username);
  tryToAddExistingOrg(org, username);
  deleteOrg(org, username);
  verifyOrgDoesNotExist(org, username);
}

function lifecycle_package(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingPackage(id); } catch (_e) {}
  addPackage(id);
  verifyPackageExists(id);
  tryToAddExistingPackage(id);
  deletePackage(id);
  verifyPackageDoesNotExist(id);
}

function lifecycle_repo(owner, repo, index, id, secretname, branch) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRepo(owner, repo, index, id, secretname, branch); } catch (_e) {}
  addRepo(owner, repo, index, id, secretname, branch);
  verifyRepoExists(owner, repo, index, id, secretname, branch);
  tryToAddExistingRepo(owner, repo, index, id, secretname, branch);
  deleteRepo(owner, repo, index, id, secretname, branch);
  verifyRepoDoesNotExist(owner, repo, index, id, secretname, branch);
}

function lifecycle_setting(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingSetting(id); } catch (_e) {}
  addSetting(id);
  verifySettingExists(id);
  tryToAddExistingSetting(id);
  deleteSetting(id);
  verifySettingDoesNotExist(id);
}

function lifecycle_signing_key.gpg(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingSigning_key.gpg(id); } catch (_e) {}
  addSigning_key.gpg(id);
  verifySigning_key.gpgExists(id);
  tryToAddExistingSigning_key.gpg(id);
  deleteSigning_key.gpg(id);
  verifySigning_key.gpgDoesNotExist(id);
}

function lifecycle_user(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingUser(id); } catch (_e) {}
  addUser(id);
  verifyUserExists(id);
  tryToAddExistingUser(id);
  deleteUser(id);
  verifyUserDoesNotExist(id);
}

function lifecycle_user(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingUser(id); } catch (_e) {}
  addUser(id);
  verifyUserExists(id);
  tryToAddExistingUser(id);
  deleteUser(id);
  verifyUserDoesNotExist(id);
}

function lifecycle_version(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingVersion(id); } catch (_e) {}
  addVersion(id);
  verifyVersionExists(id);
  tryToAddExistingVersion(id);
  deleteVersion(id);
  verifyVersionDoesNotExist(id);
}
