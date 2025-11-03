/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_v1(invoice, charge, customer) {
  try { tryToDeleteANonExistingV1(invoice, charge, customer); } catch (_e) {}
  addV1(invoice, charge, customer);
  verifyV1Exists(invoice, charge, customer);
  tryToAddExistingV1(invoice, charge, customer);
  deleteV1(invoice, charge, customer);
  verifyV1DoesNotExist(invoice, charge, customer);
}
