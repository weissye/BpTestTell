/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_v1(chainId, garageId, customerId, vin, roId) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingV1(chainId, garageId, customerId, vin, roId); } catch (_e) {}
  addV1(chainId, garageId, customerId, vin, roId);
  verifyV1Exists(chainId, garageId, customerId, vin, roId);
  tryToAddExistingV1(chainId, garageId, customerId, vin, roId);
  deleteV1(chainId, garageId, customerId, vin, roId);
  verifyV1DoesNotExist(chainId, garageId, customerId, vin, roId);
}
