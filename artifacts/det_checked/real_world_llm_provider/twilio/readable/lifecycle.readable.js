/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_2010_04_01(AccountSid, Sid, CallSid, QueueSid, ConnectAppSid, CountryCode) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExisting2010_04_01(AccountSid, Sid, CallSid, QueueSid, ConnectAppSid, CountryCode); } catch (_e) {}
  add2010_04_01(AccountSid, Sid, CallSid, QueueSid, ConnectAppSid, CountryCode);
  verify2010_04_01Exists(AccountSid, Sid, CallSid, QueueSid, ConnectAppSid, CountryCode);
  tryToAddExisting2010_04_01(AccountSid, Sid, CallSid, QueueSid, ConnectAppSid, CountryCode);
  delete2010_04_01(AccountSid, Sid, CallSid, QueueSid, ConnectAppSid, CountryCode);
  verify2010_04_01DoesNotExist(AccountSid, Sid, CallSid, QueueSid, ConnectAppSid, CountryCode);
}
