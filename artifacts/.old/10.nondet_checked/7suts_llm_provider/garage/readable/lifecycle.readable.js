/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_v1(roId, chainId, garageId, customerId, vin, pmId) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingV1(roId, chainId, garageId, customerId, vin, pmId); } catch (_e) {}
  addV1(roId, chainId, garageId, customerId, vin, pmId);
  verifyV1Exists(roId, chainId, garageId, customerId, vin, pmId);
  tryToAddExistingV1(roId, chainId, garageId, customerId, vin, pmId);
  deleteV1(roId, chainId, garageId, customerId, vin, pmId);
  verifyV1DoesNotExist(roId, chainId, garageId, customerId, vin, pmId);
}
