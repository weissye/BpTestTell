/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_v1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint); } catch (_e) {}
  addV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint);
  verifyV1Exists(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint);
  tryToAddExistingV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint);
  deleteV1(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint);
  verifyV1DoesNotExist(account, customer, invoice, charge, intent, token, subscription_exposed_id, webhook_endpoint);
}
