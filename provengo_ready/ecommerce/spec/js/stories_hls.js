// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Drug:read_only
bthread("crud:Drug:read_only", function () {

  verifyDrugExists();
});

// Story: crud:Order:read_only
bthread("crud:Order:read_only", function () {

  verifyOrderExists();
});

// Story: crud:Inventory:read_only
bthread("crud:Inventory:read_only", function () {
  let ndc = "ndc_240";
  verifyInventoryExists("ndc_240");
});
