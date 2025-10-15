// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: pharmacy
// Source: artifacts\hls_nondet\7_suts_llm_provider\pharmacy\hls_nondet_gold.json


bthread(`HLS PASSIVE: add Drug`, function () {
  const ev = waitFor({op: 'add', entity: 'Drug'});
  block({op: 'deleteDrug'});
  verifyDrugExists(ev.id);
});

bthread(`HLS PASSIVE: add Order`, function () {
  const ev = waitFor({op: 'add', entity: 'Order'});
  block({op: 'deleteOrder'});
  verifyOrderExists(ev.id);
});

bthread(`HLS PASSIVE: add Patient`, function () {
  const ev = waitFor({op: 'add', entity: 'Patient'});
  block({op: 'deletePatient'});
  verifyPatientExists(ev.id);
});

bthread(`HLS PASSIVE: add Prescription`, function () {
  const ev = waitFor({op: 'add', entity: 'Prescription'});
  block({op: 'deletePrescription'});
  verifyPrescriptionExists(ev.id);
});

