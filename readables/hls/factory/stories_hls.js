// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: factory
// Source: artifacts\hls_nondet\7_suts_llm_provider\factory\hls_nondet_gold.json


bthread(`HLS PASSIVE: add Machine`, function () {
  const ev = waitFor({op: 'add', entity: 'Machine'});
  block({op: 'deleteMachine'});
  verifyMachineExists(ev.id);
});

bthread(`HLS PASSIVE: add MaintenanceTicket`, function () {
  const ev = waitFor({op: 'add', entity: 'MaintenanceTicket'});
  block({op: 'deleteMaintenanceTicket'});
  verifyMaintenanceTicketExists(ev.id);
});

bthread(`HLS PASSIVE: add WorkOrder`, function () {
  const ev = waitFor({op: 'add', entity: 'WorkOrder'});
  block({op: 'deleteWorkOrder'});
  verifyWorkOrderExists(ev.id);
});

