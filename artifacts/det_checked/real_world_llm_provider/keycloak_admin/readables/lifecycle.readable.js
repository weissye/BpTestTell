/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_root(id) {
  try { tryToDeleteANonExistingRoot(id); } catch (_e) {}
  addRoot(id);
  verifyRootExists(id);
  tryToAddExistingRoot(id);
  deleteRoot(id);
  verifyRootDoesNotExist(id);
}

function lifecycle_{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  try { tryToDeleteANonExisting{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId); } catch (_e) {}
  add{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId);
  verify{realm}Exists(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId);
  tryToAddExisting{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId);
  delete{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId);
  verify{realm}DoesNotExist(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId);
}
