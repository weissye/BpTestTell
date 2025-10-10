/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_advisorie(ghsa_id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingAdvisorie(ghsa_id); } catch (_e) {}
  addAdvisorie(ghsa_id);
  verifyAdvisorieExists(ghsa_id);
  tryToAddExistingAdvisorie(ghsa_id);
  deleteAdvisorie(ghsa_id);
  verifyAdvisorieDoesNotExist(ghsa_id);
}

function lifecycle_app(url, content_type) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingApp(url, content_type); } catch (_e) {}
  addApp(url, content_type);
  verifyAppExists(url, content_type);
  tryToAddExistingApp(url, content_type);
  deleteApp(url, content_type);
  verifyAppDoesNotExist(url, content_type);
}

function lifecycle_app_manifest(manifest) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingApp_manifest(manifest); } catch (_e) {}
  addApp_manifest(manifest);
  verifyApp_manifestExists(manifest);
  tryToAddExistingApp_manifest(manifest);
  deleteApp_manifest(manifest);
  verifyApp_manifestDoesNotExist(manifest);
}

function lifecycle_application(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingApplication(id); } catch (_e) {}
  addApplication(id);
  verifyApplicationExists(id);
  tryToAddExistingApplication(id);
  deleteApplication(id);
  verifyApplicationDoesNotExist(id);
}

function lifecycle_app(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingApp(id); } catch (_e) {}
  addApp(id);
  verifyAppExists(id);
  tryToAddExistingApp(id);
  deleteApp(id);
  verifyAppDoesNotExist(id);
}

function lifecycle_assignment(assignment_id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingAssignment(assignment_id); } catch (_e) {}
  addAssignment(assignment_id);
  verifyAssignmentExists(assignment_id);
  tryToAddExistingAssignment(assignment_id);
  deleteAssignment(assignment_id);
  verifyAssignmentDoesNotExist(assignment_id);
}

function lifecycle_classroom(classroom_id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingClassroom(classroom_id); } catch (_e) {}
  addClassroom(classroom_id);
  verifyClassroomExists(classroom_id);
  tryToAddExistingClassroom(classroom_id);
  deleteClassroom(classroom_id);
  verifyClassroomDoesNotExist(classroom_id);
}

function lifecycle_emoji(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingEmoji(id); } catch (_e) {}
  addEmoji(id);
  verifyEmojiExists(id);
  tryToAddExistingEmoji(id);
  deleteEmoji(id);
  verifyEmojiDoesNotExist(id);
}

function lifecycle_installation(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingInstallation(id); } catch (_e) {}
  addInstallation(id);
  verifyInstallationExists(id);
  tryToAddExistingInstallation(id);
  deleteInstallation(id);
  verifyInstallationDoesNotExist(id);
}

function lifecycle_marketplace_listing(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingMarketplace_listing(id); } catch (_e) {}
  addMarketplace_listing(id);
  verifyMarketplace_listingExists(id);
  tryToAddExistingMarketplace_listing(id);
  deleteMarketplace_listing(id);
  verifyMarketplace_listingDoesNotExist(id);
}

function lifecycle_meta(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingMeta(id); } catch (_e) {}
  addMeta(id);
  verifyMetaExists(id);
  tryToAddExistingMeta(id);
  deleteMeta(id);
  verifyMetaDoesNotExist(id);
}

function lifecycle_octocat(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingOctocat(id); } catch (_e) {}
  addOctocat(id);
  verifyOctocatExists(id);
  tryToAddExistingOctocat(id);
  deleteOctocat(id);
  verifyOctocatDoesNotExist(id);
}

function lifecycle_org(org) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingOrg(org); } catch (_e) {}
  addOrg(org);
  verifyOrgExists(org);
  tryToAddExistingOrg(org);
  deleteOrg(org);
  verifyOrgDoesNotExist(org);
}

function lifecycle_repo(owner, repo, ghsa_id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRepo(owner, repo, ghsa_id); } catch (_e) {}
  addRepo(owner, repo, ghsa_id);
  verifyRepoExists(owner, repo, ghsa_id);
  tryToAddExistingRepo(owner, repo, ghsa_id);
  deleteRepo(owner, repo, ghsa_id);
  verifyRepoDoesNotExist(owner, repo, ghsa_id);
}

function lifecycle_root(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRoot(id); } catch (_e) {}
  addRoot(id);
  verifyRootExists(id);
  tryToAddExistingRoot(id);
  deleteRoot(id);
  verifyRootDoesNotExist(id);
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

function lifecycle_zen(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingZen(id); } catch (_e) {}
  addZen(id);
  verifyZenExists(id);
  tryToAddExistingZen(id);
  deleteZen(id);
  verifyZenDoesNotExist(id);
}
