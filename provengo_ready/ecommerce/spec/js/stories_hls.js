// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:drugs:read_only
bthread("crud:drugs:read_only", function () {

  // Read-only check for drugs
  verifydrugsExists(id);
});

// Story: crud:orders:read_only
bthread("crud:orders:read_only", function () {

  // Read-only check for orders
  verifyordersExists(id);
});

// Story: crud:inventory:read_only
bthread("crud:inventory:read_only", function () {
  let ndc = "ndc_240";
  // Read-only check for inventory
  verifyinventoryExists(ndc);
});
