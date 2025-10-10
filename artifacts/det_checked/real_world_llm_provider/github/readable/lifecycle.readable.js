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

function lifecycle_app_manifest(code) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingApp_manifest(code); } catch (_e) {}
  addApp_manifest(code);
  verifyApp_manifestExists(code);
  tryToAddExistingApp_manifest(code);
  deleteApp_manifest(code);
  verifyApp_manifestDoesNotExist(code);
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

function lifecycle_gist(gist_id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingGist(gist_id); } catch (_e) {}
  addGist(gist_id);
  verifyGistExists(gist_id);
  tryToAddExistingGist(gist_id);
  deleteGist(gist_id);
  verifyGistDoesNotExist(gist_id);
}

function lifecycle_org(org, team_slug, username) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingOrg(org, team_slug, username); } catch (_e) {}
  addOrg(org, team_slug, username);
  verifyOrgExists(org, team_slug, username);
  tryToAddExistingOrg(org, team_slug, username);
  deleteOrg(org, team_slug, username);
  verifyOrgDoesNotExist(org, team_slug, username);
}

function lifecycle_repo(owner, repo, branch, run_id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRepo(owner, repo, branch, run_id); } catch (_e) {}
  addRepo(owner, repo, branch, run_id);
  verifyRepoExists(owner, repo, branch, run_id);
  tryToAddExistingRepo(owner, repo, branch, run_id);
  deleteRepo(owner, repo, branch, run_id);
  verifyRepoDoesNotExist(owner, repo, branch, run_id);
}

function lifecycle_v1(org, owner, repo, username, run_id, branch, package_type, package_name) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingV1(org, owner, repo, username, run_id, branch, package_type, package_name); } catch (_e) {}
  addV1(org, owner, repo, username, run_id, branch, package_type, package_name);
  verifyV1Exists(org, owner, repo, username, run_id, branch, package_type, package_name);
  tryToAddExistingV1(org, owner, repo, username, run_id, branch, package_type, package_name);
  deleteV1(org, owner, repo, username, run_id, branch, package_type, package_name);
  verifyV1DoesNotExist(org, owner, repo, username, run_id, branch, package_type, package_name);
}
