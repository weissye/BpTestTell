/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid) {
  try { tryToDeleteANonExisting2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid); } catch (_e) {}
  add2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid);
  verify2010_04_01Exists(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid);
  tryToAddExisting2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid);
  delete2010_04_01(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid);
  verify2010_04_01DoesNotExist(AccountSid, Sid, CallSid, ConferenceSid, CountryCode, ReferenceSid, ResourceSid, MessageSid, DomainSid, QueueSid, RecordingSid, ConnectAppSid, AddOnResultSid, PayloadSid, AddressSid);
}
