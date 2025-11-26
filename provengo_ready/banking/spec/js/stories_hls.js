// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Accounts:read_only
bthread("crud:Accounts:read_only", function () {

  // Read-only check for Accounts
  verifyAccountsExists(id);
});

// Story: crud:Transactions:read_only
bthread("crud:Transactions:read_only", function () {
  let accountId = 220;
  // Read-only check for Transactions
  verifyTransactionsExists(accountId);
});

// Story: crud:Loans:read_only
bthread("crud:Loans:read_only", function () {

  // Read-only check for Loans
  verifyLoansExists(id);
});
