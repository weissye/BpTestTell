/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExisting2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid); } catch (_e) {}
  add2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid);
  verify2010_04_01Exists(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid);
  tryToAddExisting2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid);
  delete2010_04_01(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid);
  verify2010_04_01DoesNotExist(AccountSid, Sid, CallSid, DomainSid, CountryCode, ReferenceSid, ConferenceSid, MessageSid, QueueSid, ConnectAppSid, AddOnResultSid, PayloadSid);
}
