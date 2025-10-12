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

function lifecycle_app(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingApp(id); } catch (_e) {}
  addApp(id);
  verifyAppExists(id);
  tryToAddExistingApp(id);
  deleteApp(id);
  verifyAppDoesNotExist(id);
}

function lifecycle_app_manifest(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingApp_manifest(id); } catch (_e) {}
  addApp_manifest(id);
  verifyApp_manifestExists(id);
  tryToAddExistingApp_manifest(id);
  deleteApp_manifest(id);
  verifyApp_manifestDoesNotExist(id);
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

function lifecycle_assignment(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingAssignment(id); } catch (_e) {}
  addAssignment(id);
  verifyAssignmentExists(id);
  tryToAddExistingAssignment(id);
  deleteAssignment(id);
  verifyAssignmentDoesNotExist(id);
}

function lifecycle_classroom(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingClassroom(id); } catch (_e) {}
  addClassroom(id);
  verifyClassroomExists(id);
  tryToAddExistingClassroom(id);
  deleteClassroom(id);
  verifyClassroomDoesNotExist(id);
}

function lifecycle_codes_of_conduct(key) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingCodes_of_conduct(key); } catch (_e) {}
  addCodes_of_conduct(key);
  verifyCodes_of_conductExists(key);
  tryToAddExistingCodes_of_conduct(key);
  deleteCodes_of_conduct(key);
  verifyCodes_of_conductDoesNotExist(key);
}

function lifecycle_credential(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingCredential(id); } catch (_e) {}
  addCredential(id);
  verifyCredentialExists(id);
  tryToAddExistingCredential(id);
  deleteCredential(id);
  verifyCredentialDoesNotExist(id);
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

function lifecycle_enterprise(enterprise) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingEnterprise(enterprise); } catch (_e) {}
  addEnterprise(enterprise);
  verifyEnterpriseExists(enterprise);
  tryToAddExistingEnterprise(enterprise);
  deleteEnterprise(enterprise);
  verifyEnterpriseDoesNotExist(enterprise);
}

function lifecycle_event(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingEvent(id); } catch (_e) {}
  addEvent(id);
  verifyEventExists(id);
  tryToAddExistingEvent(id);
  deleteEvent(id);
  verifyEventDoesNotExist(id);
}

function lifecycle_gist(gist_id, comment_id, sha) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingGist(gist_id, comment_id, sha); } catch (_e) {}
  addGist(gist_id, comment_id, sha);
  verifyGistExists(gist_id, comment_id, sha);
  tryToAddExistingGist(gist_id, comment_id, sha);
  deleteGist(gist_id, comment_id, sha);
  verifyGistDoesNotExist(gist_id, comment_id, sha);
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

function lifecycle_installation(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingInstallation(id); } catch (_e) {}
  addInstallation(id);
  verifyInstallationExists(id);
  tryToAddExistingInstallation(id);
  deleteInstallation(id);
  verifyInstallationDoesNotExist(id);
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

function lifecycle_notification(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingNotification(id); } catch (_e) {}
  addNotification(id);
  verifyNotificationExists(id);
  tryToAddExistingNotification(id);
  deleteNotification(id);
  verifyNotificationDoesNotExist(id);
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

function lifecycle_organization(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingOrganization(id); } catch (_e) {}
  addOrganization(id);
  verifyOrganizationExists(id);
  tryToAddExistingOrganization(id);
  deleteOrganization(id);
  verifyOrganizationDoesNotExist(id);
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

function lifecycle_project(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingProject(id); } catch (_e) {}
  addProject(id);
  verifyProjectExists(id);
  tryToAddExistingProject(id);
  deleteProject(id);
  verifyProjectDoesNotExist(id);
}

function lifecycle_rate_limit(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRate_limit(id); } catch (_e) {}
  addRate_limit(id);
  verifyRate_limitExists(id);
  tryToAddExistingRate_limit(id);
  deleteRate_limit(id);
  verifyRate_limitDoesNotExist(id);
}

function lifecycle_repo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id); } catch (_e) {}
  addRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id);
  verifyRepoExists(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id);
  tryToAddExistingRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id);
  deleteRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id);
  verifyRepoDoesNotExist(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id);
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

function lifecycle_search(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingSearch(id); } catch (_e) {}
  addSearch(id);
  verifySearchExists(id);
  tryToAddExistingSearch(id);
  deleteSearch(id);
  verifySearchDoesNotExist(id);
}

function lifecycle_team(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingTeam(id); } catch (_e) {}
  addTeam(id);
  verifyTeamExists(id);
  tryToAddExistingTeam(id);
  deleteTeam(id);
  verifyTeamDoesNotExist(id);
}

function lifecycle_user(codespace_name, secret_name) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingUser(codespace_name, secret_name); } catch (_e) {}
  addUser(codespace_name, secret_name);
  verifyUserExists(codespace_name, secret_name);
  tryToAddExistingUser(codespace_name, secret_name);
  deleteUser(codespace_name, secret_name);
  verifyUserDoesNotExist(codespace_name, secret_name);
}

function lifecycle_user(username) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingUser(username); } catch (_e) {}
  addUser(username);
  verifyUserExists(username);
  tryToAddExistingUser(username);
  deleteUser(username);
  verifyUserDoesNotExist(username);
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
