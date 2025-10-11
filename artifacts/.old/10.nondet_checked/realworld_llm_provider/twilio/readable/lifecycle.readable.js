/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExisting2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid); } catch (_e) {}
  add2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid);
  verify2010_04_01Exists(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid);
  tryToAddExisting2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid);
  delete2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid);
  verify2010_04_01DoesNotExist(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, ReferenceSid, AddOnResultSid, PayloadSid, AddressSid);
}
