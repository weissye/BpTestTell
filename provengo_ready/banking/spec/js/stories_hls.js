// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Account:read_only
bthread("crud:Account:read_only", function () {
  let accountId = 210;
  verifyAccountExists(210);
});

// Story: crud:Transaction:read_only
bthread("crud:Transaction:read_only", function () {
  let accountId = 220;
  verifyTransactionExists(220);
});

// Story: crud:Loan:read_only
bthread("crud:Loan:read_only", function () {

  verifyLoanExists();
});
