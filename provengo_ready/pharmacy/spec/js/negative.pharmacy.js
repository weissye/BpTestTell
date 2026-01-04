// Auto-generated NEGATIVE (Fuzzing) stories for pharmacy
//@provengo summon rest

bthread("fuzz:Drugs:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345;
  verifyDrugsRejects(bad_id, name_valid);
});
bthread("fuzz:Drugs:name_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let bad_name = 12345;
  verifyDrugsRejects(id_valid, bad_name);
});
bthread("fuzz:Drugs:id_Missing", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyDrugsRejects(missing_id, name_valid);
});
bthread("fuzz:Orders:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345;
  verifyOrdersRejects(bad_id);
});
bthread("fuzz:Orders:id_Missing", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyOrdersRejects(missing_id);
});
bthread("fuzz:Patients:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345;
  verifyPatientsRejects(bad_id, name_valid);
});
bthread("fuzz:Patients:name_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let bad_name = 12345;
  verifyPatientsRejects(id_valid, bad_name);
});
bthread("fuzz:Patients:id_Missing", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let name_valid = "name_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyPatientsRejects(missing_id, name_valid);
});
bthread("fuzz:Inventory:ndc_InvalidType", function () {
  let ndc_valid = "ndc_valid_" + Math.floor(Math.random()*1000);
  let bad_ndc = 12345;
  verifyInventoryRejects(bad_ndc);
});
bthread("fuzz:Inventory:ndc_Missing", function () {
  let ndc_valid = "ndc_valid_" + Math.floor(Math.random()*1000);
  let missing_ndc = undefined;
  verifyInventoryRejects(missing_ndc);
});
bthread("fuzz:Prescriptions:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = 12345;
  verifyPrescriptionsRejects(bad_id);
});
bthread("fuzz:Prescriptions:id_Missing", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyPrescriptionsRejects(missing_id);
});