/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_v1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card); } catch (_e) {}
  addV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card);
  verifyV1Exists(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card);
  tryToAddExistingV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card);
  deleteV1(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card);
  verifyV1DoesNotExist(account, id, customer, intent, charge, invoice, webhook_endpoint, reader, subscription_exposed_id, person, transaction, capability, payment_method, domain, refund, card);
}
