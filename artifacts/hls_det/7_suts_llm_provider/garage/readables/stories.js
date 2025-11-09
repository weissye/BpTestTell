// Auto-generated minimal seed (fallback when no mappable ops were found)
bp.registerBThread("seed: open-close", function () {
  bp.sync({request: Event("Open")});
  bp.sync({request: Event("Close")});
});

bp.registerBThread("seed: login-logout", function () {
  bp.sync({request: Event("Login")});
  bp.sync({request: Event("Logout")});
});

bp.registerBThread("seed: nop-1", function () { });
bp.registerBThread("seed: nop-2", function () { });
bp.registerBThread("seed: nop-3", function () { });
