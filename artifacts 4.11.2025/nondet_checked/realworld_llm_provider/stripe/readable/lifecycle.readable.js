/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_v1(account, charge, customer) {
  try { tryToDeleteANonExistingV1(account, charge, customer); } catch (_e) {}
  addV1(account, charge, customer);
  verifyV1Exists(account, charge, customer);
  tryToAddExistingV1(account, charge, customer);
  deleteV1(account, charge, customer);
  verifyV1DoesNotExist(account, charge, customer);
}
