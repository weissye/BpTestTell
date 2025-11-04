/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_2010_04_01(AccountSid, Sid, CallSid, ReferenceSid, ConferenceSid, MessageSid, DomainSid, CountryCode, QueueSid, RecordingSid, ResourceSid, AssignedAddOnSid, ConnectAppSid, AddOnResultSid, PayloadSid) {
  try { tryToDeleteANonExisting2010_04_01(AccountSid, Sid, CallSid, ReferenceSid, ConferenceSid, MessageSid, DomainSid, CountryCode, QueueSid, RecordingSid, ResourceSid, AssignedAddOnSid, ConnectAppSid, AddOnResultSid, PayloadSid); } catch (_e) {}
  add2010_04_01(AccountSid, Sid, CallSid, ReferenceSid, ConferenceSid, MessageSid, DomainSid, CountryCode, QueueSid, RecordingSid, ResourceSid, AssignedAddOnSid, ConnectAppSid, AddOnResultSid, PayloadSid);
  verify2010_04_01Exists(AccountSid, Sid, CallSid, ReferenceSid, ConferenceSid, MessageSid, DomainSid, CountryCode, QueueSid, RecordingSid, ResourceSid, AssignedAddOnSid, ConnectAppSid, AddOnResultSid, PayloadSid);
  tryToAddExisting2010_04_01(AccountSid, Sid, CallSid, ReferenceSid, ConferenceSid, MessageSid, DomainSid, CountryCode, QueueSid, RecordingSid, ResourceSid, AssignedAddOnSid, ConnectAppSid, AddOnResultSid, PayloadSid);
  delete2010_04_01(AccountSid, Sid, CallSid, ReferenceSid, ConferenceSid, MessageSid, DomainSid, CountryCode, QueueSid, RecordingSid, ResourceSid, AssignedAddOnSid, ConnectAppSid, AddOnResultSid, PayloadSid);
  verify2010_04_01DoesNotExist(AccountSid, Sid, CallSid, ReferenceSid, ConferenceSid, MessageSid, DomainSid, CountryCode, QueueSid, RecordingSid, ResourceSid, AssignedAddOnSid, ConnectAppSid, AddOnResultSid, PayloadSid);
}
