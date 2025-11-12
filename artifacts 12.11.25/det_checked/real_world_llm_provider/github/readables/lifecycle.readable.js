/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_advisorie(ghsa_id) {
  try { tryToDeleteANonExistingAdvisorie(ghsa_id); } catch (_e) {}
  addAdvisorie(ghsa_id);
  verifyAdvisorieExists(ghsa_id);
  tryToAddExistingAdvisorie(ghsa_id);
  deleteAdvisorie(ghsa_id);
  verifyAdvisorieDoesNotExist(ghsa_id);
}

function lifecycle_app(installation_id, delivery_id) {
  try { tryToDeleteANonExistingApp(installation_id, delivery_id); } catch (_e) {}
  addApp(installation_id, delivery_id);
  verifyAppExists(installation_id, delivery_id);
  tryToAddExistingApp(installation_id, delivery_id);
  deleteApp(installation_id, delivery_id);
  verifyAppDoesNotExist(installation_id, delivery_id);
}

function lifecycle_app_manifest(code) {
  try { tryToDeleteANonExistingApp_manifest(code); } catch (_e) {}
  addApp_manifest(code);
  verifyApp_manifestExists(code);
  tryToAddExistingApp_manifest(code);
  deleteApp_manifest(code);
  verifyApp_manifestDoesNotExist(code);
}

function lifecycle_application(client_id) {
  try { tryToDeleteANonExistingApplication(client_id); } catch (_e) {}
  addApplication(client_id);
  verifyApplicationExists(client_id);
  tryToAddExistingApplication(client_id);
  deleteApplication(client_id);
  verifyApplicationDoesNotExist(client_id);
}

function lifecycle_app(app_slug) {
  try { tryToDeleteANonExistingApp(app_slug); } catch (_e) {}
  addApp(app_slug);
  verifyAppExists(app_slug);
  tryToAddExistingApp(app_slug);
  deleteApp(app_slug);
  verifyAppDoesNotExist(app_slug);
}

function lifecycle_assignment(assignment_id) {
  try { tryToDeleteANonExistingAssignment(assignment_id); } catch (_e) {}
  addAssignment(assignment_id);
  verifyAssignmentExists(assignment_id);
  tryToAddExistingAssignment(assignment_id);
  deleteAssignment(assignment_id);
  verifyAssignmentDoesNotExist(assignment_id);
}

function lifecycle_classroom(classroom_id) {
  try { tryToDeleteANonExistingClassroom(classroom_id); } catch (_e) {}
  addClassroom(classroom_id);
  verifyClassroomExists(classroom_id);
  tryToAddExistingClassroom(classroom_id);
  deleteClassroom(classroom_id);
  verifyClassroomDoesNotExist(classroom_id);
}

function lifecycle_codes_of_conduct(key) {
  try { tryToDeleteANonExistingCodes_of_conduct(key); } catch (_e) {}
  addCodes_of_conduct(key);
  verifyCodes_of_conductExists(key);
  tryToAddExistingCodes_of_conduct(key);
  deleteCodes_of_conduct(key);
  verifyCodes_of_conductDoesNotExist(key);
}

function lifecycle_credential(id) {
  try { tryToDeleteANonExistingCredential(id); } catch (_e) {}
  addCredential(id);
  verifyCredentialExists(id);
  tryToAddExistingCredential(id);
  deleteCredential(id);
  verifyCredentialDoesNotExist(id);
}

function lifecycle_emoji(id) {
  try { tryToDeleteANonExistingEmoji(id); } catch (_e) {}
  addEmoji(id);
  verifyEmojiExists(id);
  tryToAddExistingEmoji(id);
  deleteEmoji(id);
  verifyEmojiDoesNotExist(id);
}

function lifecycle_enterprise(enterprise, configuration_id, enterprise-team, username, team_slug) {
  try { tryToDeleteANonExistingEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug); } catch (_e) {}
  addEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug);
  verifyEnterpriseExists(enterprise, configuration_id, enterprise-team, username, team_slug);
  tryToAddExistingEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug);
  deleteEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug);
  verifyEnterpriseDoesNotExist(enterprise, configuration_id, enterprise-team, username, team_slug);
}

function lifecycle_event(id) {
  try { tryToDeleteANonExistingEvent(id); } catch (_e) {}
  addEvent(id);
  verifyEventExists(id);
  tryToAddExistingEvent(id);
  deleteEvent(id);
  verifyEventDoesNotExist(id);
}

function lifecycle_feed(id) {
  try { tryToDeleteANonExistingFeed(id); } catch (_e) {}
  addFeed(id);
  verifyFeedExists(id);
  tryToAddExistingFeed(id);
  deleteFeed(id);
  verifyFeedDoesNotExist(id);
}

function lifecycle_gist(gist_id, comment_id, sha) {
  try { tryToDeleteANonExistingGist(gist_id, comment_id, sha); } catch (_e) {}
  addGist(gist_id, comment_id, sha);
  verifyGistExists(gist_id, comment_id, sha);
  tryToAddExistingGist(gist_id, comment_id, sha);
  deleteGist(gist_id, comment_id, sha);
  verifyGistDoesNotExist(gist_id, comment_id, sha);
}

function lifecycle_gitignore(name) {
  try { tryToDeleteANonExistingGitignore(name); } catch (_e) {}
  addGitignore(name);
  verifyGitignoreExists(name);
  tryToAddExistingGitignore(name);
  deleteGitignore(name);
  verifyGitignoreDoesNotExist(name);
}

function lifecycle_installation(id) {
  try { tryToDeleteANonExistingInstallation(id); } catch (_e) {}
  addInstallation(id);
  verifyInstallationExists(id);
  tryToAddExistingInstallation(id);
  deleteInstallation(id);
  verifyInstallationDoesNotExist(id);
}

function lifecycle_issue(id) {
  try { tryToDeleteANonExistingIssue(id); } catch (_e) {}
  addIssue(id);
  verifyIssueExists(id);
  tryToAddExistingIssue(id);
  deleteIssue(id);
  verifyIssueDoesNotExist(id);
}

function lifecycle_license(license) {
  try { tryToDeleteANonExistingLicense(license); } catch (_e) {}
  addLicense(license);
  verifyLicenseExists(license);
  tryToAddExistingLicense(license);
  deleteLicense(license);
  verifyLicenseDoesNotExist(license);
}

function lifecycle_markdown(id) {
  try { tryToDeleteANonExistingMarkdown(id); } catch (_e) {}
  addMarkdown(id);
  verifyMarkdownExists(id);
  tryToAddExistingMarkdown(id);
  deleteMarkdown(id);
  verifyMarkdownDoesNotExist(id);
}

function lifecycle_marketplace_listing(account_id, plan_id) {
  try { tryToDeleteANonExistingMarketplace_listing(account_id, plan_id); } catch (_e) {}
  addMarketplace_listing(account_id, plan_id);
  verifyMarketplace_listingExists(account_id, plan_id);
  tryToAddExistingMarketplace_listing(account_id, plan_id);
  deleteMarketplace_listing(account_id, plan_id);
  verifyMarketplace_listingDoesNotExist(account_id, plan_id);
}

function lifecycle_meta(id) {
  try { tryToDeleteANonExistingMeta(id); } catch (_e) {}
  addMeta(id);
  verifyMetaExists(id);
  tryToAddExistingMeta(id);
  deleteMeta(id);
  verifyMetaDoesNotExist(id);
}

function lifecycle_network(owner, repo) {
  try { tryToDeleteANonExistingNetwork(owner, repo); } catch (_e) {}
  addNetwork(owner, repo);
  verifyNetworkExists(owner, repo);
  tryToAddExistingNetwork(owner, repo);
  deleteNetwork(owner, repo);
  verifyNetworkDoesNotExist(owner, repo);
}

function lifecycle_notification(thread_id) {
  try { tryToDeleteANonExistingNotification(thread_id); } catch (_e) {}
  addNotification(thread_id);
  verifyNotificationExists(thread_id);
  tryToAddExistingNotification(thread_id);
  deleteNotification(thread_id);
  verifyNotificationDoesNotExist(thread_id);
}

function lifecycle_octocat(id) {
  try { tryToDeleteANonExistingOctocat(id); } catch (_e) {}
  addOctocat(id);
  verifyOctocatExists(id);
  tryToAddExistingOctocat(id);
  deleteOctocat(id);
  verifyOctocatDoesNotExist(id);
}

function lifecycle_organization(org) {
  try { tryToDeleteANonExistingOrganization(org); } catch (_e) {}
  addOrganization(org);
  verifyOrganizationExists(org);
  tryToAddExistingOrganization(org);
  deleteOrganization(org);
  verifyOrganizationDoesNotExist(org);
}

function lifecycle_org(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  try { tryToDeleteANonExistingOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement); } catch (_e) {}
  addOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement);
  verifyOrgExists(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement);
  tryToAddExistingOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement);
  deleteOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement);
  verifyOrgDoesNotExist(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement);
}

function lifecycle_project(project_id, column_id, username) {
  try { tryToDeleteANonExistingProject(project_id, column_id, username); } catch (_e) {}
  addProject(project_id, column_id, username);
  verifyProjectExists(project_id, column_id, username);
  tryToAddExistingProject(project_id, column_id, username);
  deleteProject(project_id, column_id, username);
  verifyProjectDoesNotExist(project_id, column_id, username);
}

function lifecycle_rate_limit(id) {
  try { tryToDeleteANonExistingRate_limit(id); } catch (_e) {}
  addRate_limit(id);
  verifyRate_limitExists(id);
  tryToAddExistingRate_limit(id);
  deleteRate_limit(id);
  verifyRate_limitDoesNotExist(id);
}

function lifecycle_repo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  try { tryToDeleteANonExistingRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo); } catch (_e) {}
  addRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo);
  verifyRepoExists(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo);
  tryToAddExistingRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo);
  deleteRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo);
  verifyRepoDoesNotExist(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo);
}

function lifecycle_repositorie(id) {
  try { tryToDeleteANonExistingRepositorie(id); } catch (_e) {}
  addRepositorie(id);
  verifyRepositorieExists(id);
  tryToAddExistingRepositorie(id);
  deleteRepositorie(id);
  verifyRepositorieDoesNotExist(id);
}

function lifecycle_root(id) {
  try { tryToDeleteANonExistingRoot(id); } catch (_e) {}
  addRoot(id);
  verifyRootExists(id);
  tryToAddExistingRoot(id);
  deleteRoot(id);
  verifyRootDoesNotExist(id);
}

function lifecycle_search(id) {
  try { tryToDeleteANonExistingSearch(id); } catch (_e) {}
  addSearch(id);
  verifySearchExists(id);
  tryToAddExistingSearch(id);
  deleteSearch(id);
  verifySearchDoesNotExist(id);
}

function lifecycle_team(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  try { tryToDeleteANonExistingTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo); } catch (_e) {}
  addTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo);
  verifyTeamExists(team_id, discussion_number, username, comment_number, project_id, owner, repo);
  tryToAddExistingTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo);
  deleteTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo);
  verifyTeamDoesNotExist(team_id, discussion_number, username, comment_number, project_id, owner, repo);
}

function lifecycle_user(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  try { tryToDeleteANonExistingUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id); } catch (_e) {}
  addUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id);
  verifyUserExists(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id);
  tryToAddExistingUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id);
  deleteUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id);
  verifyUserDoesNotExist(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id);
}

function lifecycle_user(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  try { tryToDeleteANonExistingUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id); } catch (_e) {}
  addUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id);
  verifyUserExists(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id);
  tryToAddExistingUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id);
  deleteUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id);
  verifyUserDoesNotExist(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id);
}

function lifecycle_version(id) {
  try { tryToDeleteANonExistingVersion(id); } catch (_e) {}
  addVersion(id);
  verifyVersionExists(id);
  tryToAddExistingVersion(id);
  deleteVersion(id);
  verifyVersionDoesNotExist(id);
}

function lifecycle_zen(id) {
  try { tryToDeleteANonExistingZen(id); } catch (_e) {}
  addZen(id);
  verifyZenExists(id);
  tryToAddExistingZen(id);
  deleteZen(id);
  verifyZenDoesNotExist(id);
}
