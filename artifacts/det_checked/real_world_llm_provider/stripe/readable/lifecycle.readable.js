/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_v1(account, customer, invoice, charge) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingV1(account, customer, invoice, charge); } catch (_e) {}
  addV1(account, customer, invoice, charge);
  verifyV1Exists(account, customer, invoice, charge);
  tryToAddExistingV1(account, customer, invoice, charge);
  deleteV1(account, customer, invoice, charge);
  verifyV1DoesNotExist(account, customer, invoice, charge);
}
