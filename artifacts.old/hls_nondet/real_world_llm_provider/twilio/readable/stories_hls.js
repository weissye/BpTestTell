// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls_nondet
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// --- pick() shim: prefer BPjs nondet, else random fallback ---
if (typeof pick === 'undefined') {
  function pick(options) {
    if (typeof bp !== 'undefined' && typeof bp.pickFrom === 'function') {
      return bp.pickFrom(options); // nondeterministic exploration
    }
    // fallback for plain JS execution
    return options[Math.floor(Math.random() * options.length)];
  }
}

// --- _pk(e,key): robust primary-key extractor for wait/match events ---
function _pk(e, key) {
  if (e == null) return undefined;
  if (typeof e === 'object') {
    if (Object.prototype.hasOwnProperty.call(e, key) && typeof e[key] !== 'function') return e[key];
    if (e.data && Object.prototype.hasOwnProperty.call(e.data, key) && typeof e.data[key] !== 'function') return e.data[key];
    if (e.payload && Object.prototype.hasOwnProperty.call(e.payload, key) && typeof e.payload[key] !== 'function') return e.payload[key];
    if (Object.prototype.hasOwnProperty.call(e, 'id') && typeof e['id'] !== 'function') return e['id'];
    // minimal extra fallback for Inventory-like entities
    if (Object.prototype.hasOwnProperty.call(e, 'ndc') && typeof e['ndc'] !== 'function') return e['ndc'];
  }
  return (typeof e === 'string' || typeof e === 'number') ? e : undefined;
}

// --- canonKey(v): normalize any key-like value to a scalar string ---
function canonKey(v) {
  if (v == null) return '1001';
  if (typeof v === 'function') return '1001';
  if (typeof v === 'object') {
    if ('id' in v) return String(v.id);
    if ('ndc' in v) return String(v.ndc);
    const ks = Object.keys(v);
    if (ks.length) return String(v[ks[0]]);
    return '1001';
  }
  return String(v);
}

// ===== ACTIVE LIFECYCLES =====


bthread("AccountenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAccountenumstatus(x.id);
  const e_add = waitForAccountenumstatusAdded(id);
  block(matchDeleteAccountenumstatus(id), function () {
    verifyAccountenumstatusExists(id);
  });
  updateAccountenumstatus(x.id);
  updateAccountenumstatus(x.id);
  const e_upd = waitForAccountenumstatusUpdated(id);
  block(matchDeleteAccountenumstatus(id), function () {
    verifyAccountenumstatusUpdated(id);
  });
  deleteAccountenumstatus(x.id);
  const e_del = waitForAccountenumstatusDeleted(id);
  block(matchAddAccountenumstatus(id), function () {
    verifyAccountenumstatusDoesNotExist(id);
  });
});

bthread("AccountenumtypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAccountenumtype(x.id);
  const e_add = waitForAccountenumtypeAdded(id);
  block(matchDeleteAccountenumtype(id), function () {
    verifyAccountenumtypeExists(id);
  });
  updateAccountenumtype(x.id);
  updateAccountenumtype(x.id);
  const e_upd = waitForAccountenumtypeUpdated(id);
  block(matchDeleteAccountenumtype(id), function () {
    verifyAccountenumtypeUpdated(id);
  });
  deleteAccountenumtype(x.id);
  const e_del = waitForAccountenumtypeDeleted(id);
  block(matchAddAccountenumtype(id), function () {
    verifyAccountenumtypeDoesNotExist(id);
  });
});

bthread("Apiv2010accountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010account(x.id);
  const e_add = waitForApiv2010accountAdded(id);
  block(matchDeleteApiv2010account(id), function () {
    verifyApiv2010accountExists(id);
  });
  updateApiv2010account(x.id);
  updateApiv2010account(x.id);
  const e_upd = waitForApiv2010accountUpdated(id);
  block(matchDeleteApiv2010account(id), function () {
    verifyApiv2010accountUpdated(id);
  });
  deleteApiv2010account(x.id);
  const e_del = waitForApiv2010accountDeleted(id);
  block(matchAddApiv2010account(id), function () {
    verifyApiv2010accountDoesNotExist(id);
  });
});

bthread("Apiv2010accountaddressLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountaddress(x.id);
  const e_add = waitForApiv2010accountaddressAdded(id);
  block(matchDeleteApiv2010accountaddress(id), function () {
    verifyApiv2010accountaddressExists(id);
  });
  updateApiv2010accountaddress(x.id);
  updateApiv2010accountaddress(x.id);
  const e_upd = waitForApiv2010accountaddressUpdated(id);
  block(matchDeleteApiv2010accountaddress(id), function () {
    verifyApiv2010accountaddressUpdated(id);
  });
  deleteApiv2010accountaddress(x.id);
  const e_del = waitForApiv2010accountaddressDeleted(id);
  block(matchAddApiv2010accountaddress(id), function () {
    verifyApiv2010accountaddressDoesNotExist(id);
  });
});

bthread("Apiv2010accountaddressdependentphonenumberLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountaddressdependentphonenumber(x.id);
  const e_add = waitForApiv2010accountaddressdependentphonenumberAdded(id);
  block(matchDeleteApiv2010accountaddressdependentphonenumber(id), function () {
    verifyApiv2010accountaddressdependentphonenumberExists(id);
  });
  updateApiv2010accountaddressdependentphonenumber(x.id);
  updateApiv2010accountaddressdependentphonenumber(x.id);
  const e_upd = waitForApiv2010accountaddressdependentphonenumberUpdated(id);
  block(matchDeleteApiv2010accountaddressdependentphonenumber(id), function () {
    verifyApiv2010accountaddressdependentphonenumberUpdated(id);
  });
  deleteApiv2010accountaddressdependentphonenumber(x.id);
  const e_del = waitForApiv2010accountaddressdependentphonenumberDeleted(id);
  block(matchAddApiv2010accountaddressdependentphonenumber(id), function () {
    verifyApiv2010accountaddressdependentphonenumberDoesNotExist(id);
  });
});

bthread("Apiv2010accountapplicationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountapplication(x.id);
  const e_add = waitForApiv2010accountapplicationAdded(id);
  block(matchDeleteApiv2010accountapplication(id), function () {
    verifyApiv2010accountapplicationExists(id);
  });
  updateApiv2010accountapplication(x.id);
  updateApiv2010accountapplication(x.id);
  const e_upd = waitForApiv2010accountapplicationUpdated(id);
  block(matchDeleteApiv2010accountapplication(id), function () {
    verifyApiv2010accountapplicationUpdated(id);
  });
  deleteApiv2010accountapplication(x.id);
  const e_del = waitForApiv2010accountapplicationDeleted(id);
  block(matchAddApiv2010accountapplication(id), function () {
    verifyApiv2010accountapplicationDoesNotExist(id);
  });
});

bthread("Apiv2010accountauthorizedconnectappLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountauthorizedconnectapp(x.id);
  const e_add = waitForApiv2010accountauthorizedconnectappAdded(id);
  block(matchDeleteApiv2010accountauthorizedconnectapp(id), function () {
    verifyApiv2010accountauthorizedconnectappExists(id);
  });
  updateApiv2010accountauthorizedconnectapp(x.id);
  updateApiv2010accountauthorizedconnectapp(x.id);
  const e_upd = waitForApiv2010accountauthorizedconnectappUpdated(id);
  block(matchDeleteApiv2010accountauthorizedconnectapp(id), function () {
    verifyApiv2010accountauthorizedconnectappUpdated(id);
  });
  deleteApiv2010accountauthorizedconnectapp(x.id);
  const e_del = waitForApiv2010accountauthorizedconnectappDeleted(id);
  block(matchAddApiv2010accountauthorizedconnectapp(id), function () {
    verifyApiv2010accountauthorizedconnectappDoesNotExist(id);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountavailablephonenumbercountry(x.id);
  const e_add = waitForApiv2010accountavailablephonenumbercountryAdded(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountry(id), function () {
    verifyApiv2010accountavailablephonenumbercountryExists(id);
  });
  updateApiv2010accountavailablephonenumbercountry(x.id);
  updateApiv2010accountavailablephonenumbercountry(x.id);
  const e_upd = waitForApiv2010accountavailablephonenumbercountryUpdated(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountry(id), function () {
    verifyApiv2010accountavailablephonenumbercountryUpdated(id);
  });
  deleteApiv2010accountavailablephonenumbercountry(x.id);
  const e_del = waitForApiv2010accountavailablephonenumbercountryDeleted(id);
  block(matchAddApiv2010accountavailablephonenumbercountry(id), function () {
    verifyApiv2010accountavailablephonenumbercountryDoesNotExist(id);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumberlocalLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(x.id);
  const e_add = waitForApiv2010accountavailablephonenumbercountryavailablephonenumberlocalAdded(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumberlocalExists(id);
  });
  updateApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(x.id);
  updateApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(x.id);
  const e_upd = waitForApiv2010accountavailablephonenumbercountryavailablephonenumberlocalUpdated(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumberlocalUpdated(id);
  });
  deleteApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(x.id);
  const e_del = waitForApiv2010accountavailablephonenumbercountryavailablephonenumberlocalDeleted(id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumberlocalDoesNotExist(id);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(x.id);
  const e_add = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineAdded(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineExists(id);
  });
  updateApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(x.id);
  updateApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(x.id);
  const e_upd = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineUpdated(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineUpdated(id);
  });
  deleteApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(x.id);
  const e_del = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineDeleted(id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineDoesNotExist(id);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbermobileLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(x.id);
  const e_add = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbermobileAdded(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermobileExists(id);
  });
  updateApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(x.id);
  updateApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(x.id);
  const e_upd = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbermobileUpdated(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermobileUpdated(id);
  });
  deleteApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(x.id);
  const e_del = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbermobileDeleted(id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermobileDoesNotExist(id);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbernationalLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountavailablephonenumbercountryavailablephonenumbernational(x.id);
  const e_add = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbernationalAdded(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbernational(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbernationalExists(id);
  });
  updateApiv2010accountavailablephonenumbercountryavailablephonenumbernational(x.id);
  updateApiv2010accountavailablephonenumbercountryavailablephonenumbernational(x.id);
  const e_upd = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbernationalUpdated(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbernational(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbernationalUpdated(id);
  });
  deleteApiv2010accountavailablephonenumbercountryavailablephonenumbernational(x.id);
  const e_del = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbernationalDeleted(id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbernational(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbernationalDoesNotExist(id);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(x.id);
  const e_add = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostAdded(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostExists(id);
  });
  updateApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(x.id);
  updateApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(x.id);
  const e_upd = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostUpdated(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostUpdated(id);
  });
  deleteApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(x.id);
  const e_del = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostDeleted(id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostDoesNotExist(id);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(x.id);
  const e_add = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeAdded(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeExists(id);
  });
  updateApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(x.id);
  updateApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(x.id);
  const e_upd = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeUpdated(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeUpdated(id);
  });
  deleteApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(x.id);
  const e_del = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeDeleted(id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeDoesNotExist(id);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbervoipLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(x.id);
  const e_add = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbervoipAdded(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbervoipExists(id);
  });
  updateApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(x.id);
  updateApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(x.id);
  const e_upd = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbervoipUpdated(id);
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbervoipUpdated(id);
  });
  deleteApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(x.id);
  const e_del = waitForApiv2010accountavailablephonenumbercountryavailablephonenumbervoipDeleted(id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(id), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbervoipDoesNotExist(id);
  });
});

bthread("Apiv2010accountbalanceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountbalance(x.id);
  const e_add = waitForApiv2010accountbalanceAdded(id);
  block(matchDeleteApiv2010accountbalance(id), function () {
    verifyApiv2010accountbalanceExists(id);
  });
  updateApiv2010accountbalance(x.id);
  updateApiv2010accountbalance(x.id);
  const e_upd = waitForApiv2010accountbalanceUpdated(id);
  block(matchDeleteApiv2010accountbalance(id), function () {
    verifyApiv2010accountbalanceUpdated(id);
  });
  deleteApiv2010accountbalance(x.id);
  const e_del = waitForApiv2010accountbalanceDeleted(id);
  block(matchAddApiv2010accountbalance(id), function () {
    verifyApiv2010accountbalanceDoesNotExist(id);
  });
});

bthread("Apiv2010accountcallLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountcall(x.id);
  const e_add = waitForApiv2010accountcallAdded(id);
  block(matchDeleteApiv2010accountcall(id), function () {
    verifyApiv2010accountcallExists(id);
  });
  updateApiv2010accountcall(x.id);
  updateApiv2010accountcall(x.id);
  const e_upd = waitForApiv2010accountcallUpdated(id);
  block(matchDeleteApiv2010accountcall(id), function () {
    verifyApiv2010accountcallUpdated(id);
  });
  deleteApiv2010accountcall(x.id);
  const e_del = waitForApiv2010accountcallDeleted(id);
  block(matchAddApiv2010accountcall(id), function () {
    verifyApiv2010accountcallDoesNotExist(id);
  });
});

bthread("Apiv2010accountcallcalleventLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountcallcallevent(x.id);
  const e_add = waitForApiv2010accountcallcalleventAdded(id);
  block(matchDeleteApiv2010accountcallcallevent(id), function () {
    verifyApiv2010accountcallcalleventExists(id);
  });
  updateApiv2010accountcallcallevent(x.id);
  updateApiv2010accountcallcallevent(x.id);
  const e_upd = waitForApiv2010accountcallcalleventUpdated(id);
  block(matchDeleteApiv2010accountcallcallevent(id), function () {
    verifyApiv2010accountcallcalleventUpdated(id);
  });
  deleteApiv2010accountcallcallevent(x.id);
  const e_del = waitForApiv2010accountcallcalleventDeleted(id);
  block(matchAddApiv2010accountcallcallevent(id), function () {
    verifyApiv2010accountcallcalleventDoesNotExist(id);
  });
});

bthread("Apiv2010accountcallcallnotificationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountcallcallnotification(x.id);
  const e_add = waitForApiv2010accountcallcallnotificationAdded(id);
  block(matchDeleteApiv2010accountcallcallnotification(id), function () {
    verifyApiv2010accountcallcallnotificationExists(id);
  });
  updateApiv2010accountcallcallnotification(x.id);
  updateApiv2010accountcallcallnotification(x.id);
  const e_upd = waitForApiv2010accountcallcallnotificationUpdated(id);
  block(matchDeleteApiv2010accountcallcallnotification(id), function () {
    verifyApiv2010accountcallcallnotificationUpdated(id);
  });
  deleteApiv2010accountcallcallnotification(x.id);
  const e_del = waitForApiv2010accountcallcallnotificationDeleted(id);
  block(matchAddApiv2010accountcallcallnotification(id), function () {
    verifyApiv2010accountcallcallnotificationDoesNotExist(id);
  });
});

bthread("Apiv2010accountcallcallnotificationinstanceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountcallcallnotificationinstance(x.id);
  const e_add = waitForApiv2010accountcallcallnotificationinstanceAdded(id);
  block(matchDeleteApiv2010accountcallcallnotificationinstance(id), function () {
    verifyApiv2010accountcallcallnotificationinstanceExists(id);
  });
  updateApiv2010accountcallcallnotificationinstance(x.id);
  updateApiv2010accountcallcallnotificationinstance(x.id);
  const e_upd = waitForApiv2010accountcallcallnotificationinstanceUpdated(id);
  block(matchDeleteApiv2010accountcallcallnotificationinstance(id), function () {
    verifyApiv2010accountcallcallnotificationinstanceUpdated(id);
  });
  deleteApiv2010accountcallcallnotificationinstance(x.id);
  const e_del = waitForApiv2010accountcallcallnotificationinstanceDeleted(id);
  block(matchAddApiv2010accountcallcallnotificationinstance(id), function () {
    verifyApiv2010accountcallcallnotificationinstanceDoesNotExist(id);
  });
});

bthread("Apiv2010accountcallcallrecordingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountcallcallrecording(x.id);
  const e_add = waitForApiv2010accountcallcallrecordingAdded(id);
  block(matchDeleteApiv2010accountcallcallrecording(id), function () {
    verifyApiv2010accountcallcallrecordingExists(id);
  });
  updateApiv2010accountcallcallrecording(x.id);
  updateApiv2010accountcallcallrecording(x.id);
  const e_upd = waitForApiv2010accountcallcallrecordingUpdated(id);
  block(matchDeleteApiv2010accountcallcallrecording(id), function () {
    verifyApiv2010accountcallcallrecordingUpdated(id);
  });
  deleteApiv2010accountcallcallrecording(x.id);
  const e_del = waitForApiv2010accountcallcallrecordingDeleted(id);
  block(matchAddApiv2010accountcallcallrecording(id), function () {
    verifyApiv2010accountcallcallrecordingDoesNotExist(id);
  });
});

bthread("Apiv2010accountcallpaymentsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountcallpayments(x.id);
  const e_add = waitForApiv2010accountcallpaymentsAdded(id);
  block(matchDeleteApiv2010accountcallpayments(id), function () {
    verifyApiv2010accountcallpaymentsExists(id);
  });
  updateApiv2010accountcallpayments(x.id);
  updateApiv2010accountcallpayments(x.id);
  const e_upd = waitForApiv2010accountcallpaymentsUpdated(id);
  block(matchDeleteApiv2010accountcallpayments(id), function () {
    verifyApiv2010accountcallpaymentsUpdated(id);
  });
  deleteApiv2010accountcallpayments(x.id);
  const e_del = waitForApiv2010accountcallpaymentsDeleted(id);
  block(matchAddApiv2010accountcallpayments(id), function () {
    verifyApiv2010accountcallpaymentsDoesNotExist(id);
  });
});

bthread("Apiv2010accountcallrealtimetranscriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountcallrealtimetranscription(x.id);
  const e_add = waitForApiv2010accountcallrealtimetranscriptionAdded(id);
  block(matchDeleteApiv2010accountcallrealtimetranscription(id), function () {
    verifyApiv2010accountcallrealtimetranscriptionExists(id);
  });
  updateApiv2010accountcallrealtimetranscription(x.id);
  updateApiv2010accountcallrealtimetranscription(x.id);
  const e_upd = waitForApiv2010accountcallrealtimetranscriptionUpdated(id);
  block(matchDeleteApiv2010accountcallrealtimetranscription(id), function () {
    verifyApiv2010accountcallrealtimetranscriptionUpdated(id);
  });
  deleteApiv2010accountcallrealtimetranscription(x.id);
  const e_del = waitForApiv2010accountcallrealtimetranscriptionDeleted(id);
  block(matchAddApiv2010accountcallrealtimetranscription(id), function () {
    verifyApiv2010accountcallrealtimetranscriptionDoesNotExist(id);
  });
});

bthread("Apiv2010accountcallsiprecLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountcallsiprec(x.id);
  const e_add = waitForApiv2010accountcallsiprecAdded(id);
  block(matchDeleteApiv2010accountcallsiprec(id), function () {
    verifyApiv2010accountcallsiprecExists(id);
  });
  updateApiv2010accountcallsiprec(x.id);
  updateApiv2010accountcallsiprec(x.id);
  const e_upd = waitForApiv2010accountcallsiprecUpdated(id);
  block(matchDeleteApiv2010accountcallsiprec(id), function () {
    verifyApiv2010accountcallsiprecUpdated(id);
  });
  deleteApiv2010accountcallsiprec(x.id);
  const e_del = waitForApiv2010accountcallsiprecDeleted(id);
  block(matchAddApiv2010accountcallsiprec(id), function () {
    verifyApiv2010accountcallsiprecDoesNotExist(id);
  });
});

bthread("Apiv2010accountcallstreamLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountcallstream(x.id);
  const e_add = waitForApiv2010accountcallstreamAdded(id);
  block(matchDeleteApiv2010accountcallstream(id), function () {
    verifyApiv2010accountcallstreamExists(id);
  });
  updateApiv2010accountcallstream(x.id);
  updateApiv2010accountcallstream(x.id);
  const e_upd = waitForApiv2010accountcallstreamUpdated(id);
  block(matchDeleteApiv2010accountcallstream(id), function () {
    verifyApiv2010accountcallstreamUpdated(id);
  });
  deleteApiv2010accountcallstream(x.id);
  const e_del = waitForApiv2010accountcallstreamDeleted(id);
  block(matchAddApiv2010accountcallstream(id), function () {
    verifyApiv2010accountcallstreamDoesNotExist(id);
  });
});

bthread("Apiv2010accountcalluserdefinedmessageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountcalluserdefinedmessage(x.id);
  const e_add = waitForApiv2010accountcalluserdefinedmessageAdded(id);
  block(matchDeleteApiv2010accountcalluserdefinedmessage(id), function () {
    verifyApiv2010accountcalluserdefinedmessageExists(id);
  });
  updateApiv2010accountcalluserdefinedmessage(x.id);
  updateApiv2010accountcalluserdefinedmessage(x.id);
  const e_upd = waitForApiv2010accountcalluserdefinedmessageUpdated(id);
  block(matchDeleteApiv2010accountcalluserdefinedmessage(id), function () {
    verifyApiv2010accountcalluserdefinedmessageUpdated(id);
  });
  deleteApiv2010accountcalluserdefinedmessage(x.id);
  const e_del = waitForApiv2010accountcalluserdefinedmessageDeleted(id);
  block(matchAddApiv2010accountcalluserdefinedmessage(id), function () {
    verifyApiv2010accountcalluserdefinedmessageDoesNotExist(id);
  });
});

bthread("Apiv2010accountcalluserdefinedmessagesubscriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountcalluserdefinedmessagesubscription(x.id);
  const e_add = waitForApiv2010accountcalluserdefinedmessagesubscriptionAdded(id);
  block(matchDeleteApiv2010accountcalluserdefinedmessagesubscription(id), function () {
    verifyApiv2010accountcalluserdefinedmessagesubscriptionExists(id);
  });
  updateApiv2010accountcalluserdefinedmessagesubscription(x.id);
  updateApiv2010accountcalluserdefinedmessagesubscription(x.id);
  const e_upd = waitForApiv2010accountcalluserdefinedmessagesubscriptionUpdated(id);
  block(matchDeleteApiv2010accountcalluserdefinedmessagesubscription(id), function () {
    verifyApiv2010accountcalluserdefinedmessagesubscriptionUpdated(id);
  });
  deleteApiv2010accountcalluserdefinedmessagesubscription(x.id);
  const e_del = waitForApiv2010accountcalluserdefinedmessagesubscriptionDeleted(id);
  block(matchAddApiv2010accountcalluserdefinedmessagesubscription(id), function () {
    verifyApiv2010accountcalluserdefinedmessagesubscriptionDoesNotExist(id);
  });
});

bthread("Apiv2010accountconferenceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountconference(x.id);
  const e_add = waitForApiv2010accountconferenceAdded(id);
  block(matchDeleteApiv2010accountconference(id), function () {
    verifyApiv2010accountconferenceExists(id);
  });
  updateApiv2010accountconference(x.id);
  updateApiv2010accountconference(x.id);
  const e_upd = waitForApiv2010accountconferenceUpdated(id);
  block(matchDeleteApiv2010accountconference(id), function () {
    verifyApiv2010accountconferenceUpdated(id);
  });
  deleteApiv2010accountconference(x.id);
  const e_del = waitForApiv2010accountconferenceDeleted(id);
  block(matchAddApiv2010accountconference(id), function () {
    verifyApiv2010accountconferenceDoesNotExist(id);
  });
});

bthread("Apiv2010accountconferenceconferencerecordingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountconferenceconferencerecording(x.id);
  const e_add = waitForApiv2010accountconferenceconferencerecordingAdded(id);
  block(matchDeleteApiv2010accountconferenceconferencerecording(id), function () {
    verifyApiv2010accountconferenceconferencerecordingExists(id);
  });
  updateApiv2010accountconferenceconferencerecording(x.id);
  updateApiv2010accountconferenceconferencerecording(x.id);
  const e_upd = waitForApiv2010accountconferenceconferencerecordingUpdated(id);
  block(matchDeleteApiv2010accountconferenceconferencerecording(id), function () {
    verifyApiv2010accountconferenceconferencerecordingUpdated(id);
  });
  deleteApiv2010accountconferenceconferencerecording(x.id);
  const e_del = waitForApiv2010accountconferenceconferencerecordingDeleted(id);
  block(matchAddApiv2010accountconferenceconferencerecording(id), function () {
    verifyApiv2010accountconferenceconferencerecordingDoesNotExist(id);
  });
});

bthread("Apiv2010accountconferenceparticipantLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountconferenceparticipant(x.id);
  const e_add = waitForApiv2010accountconferenceparticipantAdded(id);
  block(matchDeleteApiv2010accountconferenceparticipant(id), function () {
    verifyApiv2010accountconferenceparticipantExists(id);
  });
  updateApiv2010accountconferenceparticipant(x.id);
  updateApiv2010accountconferenceparticipant(x.id);
  const e_upd = waitForApiv2010accountconferenceparticipantUpdated(id);
  block(matchDeleteApiv2010accountconferenceparticipant(id), function () {
    verifyApiv2010accountconferenceparticipantUpdated(id);
  });
  deleteApiv2010accountconferenceparticipant(x.id);
  const e_del = waitForApiv2010accountconferenceparticipantDeleted(id);
  block(matchAddApiv2010accountconferenceparticipant(id), function () {
    verifyApiv2010accountconferenceparticipantDoesNotExist(id);
  });
});

bthread("Apiv2010accountconnectappLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountconnectapp(x.id);
  const e_add = waitForApiv2010accountconnectappAdded(id);
  block(matchDeleteApiv2010accountconnectapp(id), function () {
    verifyApiv2010accountconnectappExists(id);
  });
  updateApiv2010accountconnectapp(x.id);
  updateApiv2010accountconnectapp(x.id);
  const e_upd = waitForApiv2010accountconnectappUpdated(id);
  block(matchDeleteApiv2010accountconnectapp(id), function () {
    verifyApiv2010accountconnectappUpdated(id);
  });
  deleteApiv2010accountconnectapp(x.id);
  const e_del = waitForApiv2010accountconnectappDeleted(id);
  block(matchAddApiv2010accountconnectapp(id), function () {
    verifyApiv2010accountconnectappDoesNotExist(id);
  });
});

bthread("Apiv2010accountincomingphonenumberLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountincomingphonenumber(x.id);
  const e_add = waitForApiv2010accountincomingphonenumberAdded(id);
  block(matchDeleteApiv2010accountincomingphonenumber(id), function () {
    verifyApiv2010accountincomingphonenumberExists(id);
  });
  updateApiv2010accountincomingphonenumber(x.id);
  updateApiv2010accountincomingphonenumber(x.id);
  const e_upd = waitForApiv2010accountincomingphonenumberUpdated(id);
  block(matchDeleteApiv2010accountincomingphonenumber(id), function () {
    verifyApiv2010accountincomingphonenumberUpdated(id);
  });
  deleteApiv2010accountincomingphonenumber(x.id);
  const e_del = waitForApiv2010accountincomingphonenumberDeleted(id);
  block(matchAddApiv2010accountincomingphonenumber(id), function () {
    verifyApiv2010accountincomingphonenumberDoesNotExist(id);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberassignedaddonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(x.id);
  const e_add = waitForApiv2010accountincomingphonenumberincomingphonenumberassignedaddonAdded(id);
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonExists(id);
  });
  updateApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(x.id);
  updateApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(x.id);
  const e_upd = waitForApiv2010accountincomingphonenumberincomingphonenumberassignedaddonUpdated(id);
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonUpdated(id);
  });
  deleteApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(x.id);
  const e_del = waitForApiv2010accountincomingphonenumberincomingphonenumberassignedaddonDeleted(id);
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonDoesNotExist(id);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(x.id);
  const e_add = waitForApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionAdded(id);
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionExists(id);
  });
  updateApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(x.id);
  updateApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(x.id);
  const e_upd = waitForApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionUpdated(id);
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionUpdated(id);
  });
  deleteApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(x.id);
  const e_del = waitForApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionDeleted(id);
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionDoesNotExist(id);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberlocalLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountincomingphonenumberincomingphonenumberlocal(x.id);
  const e_add = waitForApiv2010accountincomingphonenumberincomingphonenumberlocalAdded(id);
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumberlocal(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberlocalExists(id);
  });
  updateApiv2010accountincomingphonenumberincomingphonenumberlocal(x.id);
  updateApiv2010accountincomingphonenumberincomingphonenumberlocal(x.id);
  const e_upd = waitForApiv2010accountincomingphonenumberincomingphonenumberlocalUpdated(id);
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumberlocal(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberlocalUpdated(id);
  });
  deleteApiv2010accountincomingphonenumberincomingphonenumberlocal(x.id);
  const e_del = waitForApiv2010accountincomingphonenumberincomingphonenumberlocalDeleted(id);
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumberlocal(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberlocalDoesNotExist(id);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumbermobileLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountincomingphonenumberincomingphonenumbermobile(x.id);
  const e_add = waitForApiv2010accountincomingphonenumberincomingphonenumbermobileAdded(id);
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumbermobile(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumbermobileExists(id);
  });
  updateApiv2010accountincomingphonenumberincomingphonenumbermobile(x.id);
  updateApiv2010accountincomingphonenumberincomingphonenumbermobile(x.id);
  const e_upd = waitForApiv2010accountincomingphonenumberincomingphonenumbermobileUpdated(id);
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumbermobile(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumbermobileUpdated(id);
  });
  deleteApiv2010accountincomingphonenumberincomingphonenumbermobile(x.id);
  const e_del = waitForApiv2010accountincomingphonenumberincomingphonenumbermobileDeleted(id);
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumbermobile(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumbermobileDoesNotExist(id);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumbertollfreeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountincomingphonenumberincomingphonenumbertollfree(x.id);
  const e_add = waitForApiv2010accountincomingphonenumberincomingphonenumbertollfreeAdded(id);
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumbertollfree(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumbertollfreeExists(id);
  });
  updateApiv2010accountincomingphonenumberincomingphonenumbertollfree(x.id);
  updateApiv2010accountincomingphonenumberincomingphonenumbertollfree(x.id);
  const e_upd = waitForApiv2010accountincomingphonenumberincomingphonenumbertollfreeUpdated(id);
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumbertollfree(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumbertollfreeUpdated(id);
  });
  deleteApiv2010accountincomingphonenumberincomingphonenumbertollfree(x.id);
  const e_del = waitForApiv2010accountincomingphonenumberincomingphonenumbertollfreeDeleted(id);
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumbertollfree(id), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumbertollfreeDoesNotExist(id);
  });
});

bthread("Apiv2010accountkeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountkey(x.id);
  const e_add = waitForApiv2010accountkeyAdded(id);
  block(matchDeleteApiv2010accountkey(id), function () {
    verifyApiv2010accountkeyExists(id);
  });
  updateApiv2010accountkey(x.id);
  updateApiv2010accountkey(x.id);
  const e_upd = waitForApiv2010accountkeyUpdated(id);
  block(matchDeleteApiv2010accountkey(id), function () {
    verifyApiv2010accountkeyUpdated(id);
  });
  deleteApiv2010accountkey(x.id);
  const e_del = waitForApiv2010accountkeyDeleted(id);
  block(matchAddApiv2010accountkey(id), function () {
    verifyApiv2010accountkeyDoesNotExist(id);
  });
});

bthread("Apiv2010accountmessageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountmessage(x.id);
  const e_add = waitForApiv2010accountmessageAdded(id);
  block(matchDeleteApiv2010accountmessage(id), function () {
    verifyApiv2010accountmessageExists(id);
  });
  updateApiv2010accountmessage(x.id);
  updateApiv2010accountmessage(x.id);
  const e_upd = waitForApiv2010accountmessageUpdated(id);
  block(matchDeleteApiv2010accountmessage(id), function () {
    verifyApiv2010accountmessageUpdated(id);
  });
  deleteApiv2010accountmessage(x.id);
  const e_del = waitForApiv2010accountmessageDeleted(id);
  block(matchAddApiv2010accountmessage(id), function () {
    verifyApiv2010accountmessageDoesNotExist(id);
  });
});

bthread("Apiv2010accountmessagemediaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountmessagemedia(x.id);
  const e_add = waitForApiv2010accountmessagemediaAdded(id);
  block(matchDeleteApiv2010accountmessagemedia(id), function () {
    verifyApiv2010accountmessagemediaExists(id);
  });
  updateApiv2010accountmessagemedia(x.id);
  updateApiv2010accountmessagemedia(x.id);
  const e_upd = waitForApiv2010accountmessagemediaUpdated(id);
  block(matchDeleteApiv2010accountmessagemedia(id), function () {
    verifyApiv2010accountmessagemediaUpdated(id);
  });
  deleteApiv2010accountmessagemedia(x.id);
  const e_del = waitForApiv2010accountmessagemediaDeleted(id);
  block(matchAddApiv2010accountmessagemedia(id), function () {
    verifyApiv2010accountmessagemediaDoesNotExist(id);
  });
});

bthread("Apiv2010accountmessagemessagefeedbackLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountmessagemessagefeedback(x.id);
  const e_add = waitForApiv2010accountmessagemessagefeedbackAdded(id);
  block(matchDeleteApiv2010accountmessagemessagefeedback(id), function () {
    verifyApiv2010accountmessagemessagefeedbackExists(id);
  });
  updateApiv2010accountmessagemessagefeedback(x.id);
  updateApiv2010accountmessagemessagefeedback(x.id);
  const e_upd = waitForApiv2010accountmessagemessagefeedbackUpdated(id);
  block(matchDeleteApiv2010accountmessagemessagefeedback(id), function () {
    verifyApiv2010accountmessagemessagefeedbackUpdated(id);
  });
  deleteApiv2010accountmessagemessagefeedback(x.id);
  const e_del = waitForApiv2010accountmessagemessagefeedbackDeleted(id);
  block(matchAddApiv2010accountmessagemessagefeedback(id), function () {
    verifyApiv2010accountmessagemessagefeedbackDoesNotExist(id);
  });
});

bthread("Apiv2010accountnewkeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountnewkey(x.id);
  const e_add = waitForApiv2010accountnewkeyAdded(id);
  block(matchDeleteApiv2010accountnewkey(id), function () {
    verifyApiv2010accountnewkeyExists(id);
  });
  updateApiv2010accountnewkey(x.id);
  updateApiv2010accountnewkey(x.id);
  const e_upd = waitForApiv2010accountnewkeyUpdated(id);
  block(matchDeleteApiv2010accountnewkey(id), function () {
    verifyApiv2010accountnewkeyUpdated(id);
  });
  deleteApiv2010accountnewkey(x.id);
  const e_del = waitForApiv2010accountnewkeyDeleted(id);
  block(matchAddApiv2010accountnewkey(id), function () {
    verifyApiv2010accountnewkeyDoesNotExist(id);
  });
});

bthread("Apiv2010accountnewsigningkeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountnewsigningkey(x.id);
  const e_add = waitForApiv2010accountnewsigningkeyAdded(id);
  block(matchDeleteApiv2010accountnewsigningkey(id), function () {
    verifyApiv2010accountnewsigningkeyExists(id);
  });
  updateApiv2010accountnewsigningkey(x.id);
  updateApiv2010accountnewsigningkey(x.id);
  const e_upd = waitForApiv2010accountnewsigningkeyUpdated(id);
  block(matchDeleteApiv2010accountnewsigningkey(id), function () {
    verifyApiv2010accountnewsigningkeyUpdated(id);
  });
  deleteApiv2010accountnewsigningkey(x.id);
  const e_del = waitForApiv2010accountnewsigningkeyDeleted(id);
  block(matchAddApiv2010accountnewsigningkey(id), function () {
    verifyApiv2010accountnewsigningkeyDoesNotExist(id);
  });
});

bthread("Apiv2010accountnotificationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountnotification(x.id);
  const e_add = waitForApiv2010accountnotificationAdded(id);
  block(matchDeleteApiv2010accountnotification(id), function () {
    verifyApiv2010accountnotificationExists(id);
  });
  updateApiv2010accountnotification(x.id);
  updateApiv2010accountnotification(x.id);
  const e_upd = waitForApiv2010accountnotificationUpdated(id);
  block(matchDeleteApiv2010accountnotification(id), function () {
    verifyApiv2010accountnotificationUpdated(id);
  });
  deleteApiv2010accountnotification(x.id);
  const e_del = waitForApiv2010accountnotificationDeleted(id);
  block(matchAddApiv2010accountnotification(id), function () {
    verifyApiv2010accountnotificationDoesNotExist(id);
  });
});

bthread("Apiv2010accountnotificationinstanceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountnotificationinstance(x.id);
  const e_add = waitForApiv2010accountnotificationinstanceAdded(id);
  block(matchDeleteApiv2010accountnotificationinstance(id), function () {
    verifyApiv2010accountnotificationinstanceExists(id);
  });
  updateApiv2010accountnotificationinstance(x.id);
  updateApiv2010accountnotificationinstance(x.id);
  const e_upd = waitForApiv2010accountnotificationinstanceUpdated(id);
  block(matchDeleteApiv2010accountnotificationinstance(id), function () {
    verifyApiv2010accountnotificationinstanceUpdated(id);
  });
  deleteApiv2010accountnotificationinstance(x.id);
  const e_del = waitForApiv2010accountnotificationinstanceDeleted(id);
  block(matchAddApiv2010accountnotificationinstance(id), function () {
    verifyApiv2010accountnotificationinstanceDoesNotExist(id);
  });
});

bthread("Apiv2010accountoutgoingcalleridLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountoutgoingcallerid(x.id);
  const e_add = waitForApiv2010accountoutgoingcalleridAdded(id);
  block(matchDeleteApiv2010accountoutgoingcallerid(id), function () {
    verifyApiv2010accountoutgoingcalleridExists(id);
  });
  updateApiv2010accountoutgoingcallerid(x.id);
  updateApiv2010accountoutgoingcallerid(x.id);
  const e_upd = waitForApiv2010accountoutgoingcalleridUpdated(id);
  block(matchDeleteApiv2010accountoutgoingcallerid(id), function () {
    verifyApiv2010accountoutgoingcalleridUpdated(id);
  });
  deleteApiv2010accountoutgoingcallerid(x.id);
  const e_del = waitForApiv2010accountoutgoingcalleridDeleted(id);
  block(matchAddApiv2010accountoutgoingcallerid(id), function () {
    verifyApiv2010accountoutgoingcalleridDoesNotExist(id);
  });
});

bthread("Apiv2010accountqueueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountqueue(x.id);
  const e_add = waitForApiv2010accountqueueAdded(id);
  block(matchDeleteApiv2010accountqueue(id), function () {
    verifyApiv2010accountqueueExists(id);
  });
  updateApiv2010accountqueue(x.id);
  updateApiv2010accountqueue(x.id);
  const e_upd = waitForApiv2010accountqueueUpdated(id);
  block(matchDeleteApiv2010accountqueue(id), function () {
    verifyApiv2010accountqueueUpdated(id);
  });
  deleteApiv2010accountqueue(x.id);
  const e_del = waitForApiv2010accountqueueDeleted(id);
  block(matchAddApiv2010accountqueue(id), function () {
    verifyApiv2010accountqueueDoesNotExist(id);
  });
});

bthread("Apiv2010accountqueuememberLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountqueuemember(x.id);
  const e_add = waitForApiv2010accountqueuememberAdded(id);
  block(matchDeleteApiv2010accountqueuemember(id), function () {
    verifyApiv2010accountqueuememberExists(id);
  });
  updateApiv2010accountqueuemember(x.id);
  updateApiv2010accountqueuemember(x.id);
  const e_upd = waitForApiv2010accountqueuememberUpdated(id);
  block(matchDeleteApiv2010accountqueuemember(id), function () {
    verifyApiv2010accountqueuememberUpdated(id);
  });
  deleteApiv2010accountqueuemember(x.id);
  const e_del = waitForApiv2010accountqueuememberDeleted(id);
  block(matchAddApiv2010accountqueuemember(id), function () {
    verifyApiv2010accountqueuememberDoesNotExist(id);
  });
});

bthread("Apiv2010accountrecordingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountrecording(x.id);
  const e_add = waitForApiv2010accountrecordingAdded(id);
  block(matchDeleteApiv2010accountrecording(id), function () {
    verifyApiv2010accountrecordingExists(id);
  });
  updateApiv2010accountrecording(x.id);
  updateApiv2010accountrecording(x.id);
  const e_upd = waitForApiv2010accountrecordingUpdated(id);
  block(matchDeleteApiv2010accountrecording(id), function () {
    verifyApiv2010accountrecordingUpdated(id);
  });
  deleteApiv2010accountrecording(x.id);
  const e_del = waitForApiv2010accountrecordingDeleted(id);
  block(matchAddApiv2010accountrecording(id), function () {
    verifyApiv2010accountrecordingDoesNotExist(id);
  });
});

bthread("Apiv2010accountrecordingrecordingaddonresultLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountrecordingrecordingaddonresult(x.id);
  const e_add = waitForApiv2010accountrecordingrecordingaddonresultAdded(id);
  block(matchDeleteApiv2010accountrecordingrecordingaddonresult(id), function () {
    verifyApiv2010accountrecordingrecordingaddonresultExists(id);
  });
  updateApiv2010accountrecordingrecordingaddonresult(x.id);
  updateApiv2010accountrecordingrecordingaddonresult(x.id);
  const e_upd = waitForApiv2010accountrecordingrecordingaddonresultUpdated(id);
  block(matchDeleteApiv2010accountrecordingrecordingaddonresult(id), function () {
    verifyApiv2010accountrecordingrecordingaddonresultUpdated(id);
  });
  deleteApiv2010accountrecordingrecordingaddonresult(x.id);
  const e_del = waitForApiv2010accountrecordingrecordingaddonresultDeleted(id);
  block(matchAddApiv2010accountrecordingrecordingaddonresult(id), function () {
    verifyApiv2010accountrecordingrecordingaddonresultDoesNotExist(id);
  });
});

bthread("Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(x.id);
  const e_add = waitForApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadAdded(id);
  block(matchDeleteApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(id), function () {
    verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadExists(id);
  });
  updateApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(x.id);
  updateApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(x.id);
  const e_upd = waitForApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadUpdated(id);
  block(matchDeleteApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(id), function () {
    verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadUpdated(id);
  });
  deleteApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(x.id);
  const e_del = waitForApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadDeleted(id);
  block(matchAddApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(id), function () {
    verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadDoesNotExist(id);
  });
});

bthread("Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(x.id);
  const e_add = waitForApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataAdded(id);
  block(matchDeleteApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(id), function () {
    verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataExists(id);
  });
  updateApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(x.id);
  updateApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(x.id);
  const e_upd = waitForApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataUpdated(id);
  block(matchDeleteApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(id), function () {
    verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataUpdated(id);
  });
  deleteApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(x.id);
  const e_del = waitForApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataDeleted(id);
  block(matchAddApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(id), function () {
    verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataDoesNotExist(id);
  });
});

bthread("Apiv2010accountrecordingrecordingtranscriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountrecordingrecordingtranscription(x.id);
  const e_add = waitForApiv2010accountrecordingrecordingtranscriptionAdded(id);
  block(matchDeleteApiv2010accountrecordingrecordingtranscription(id), function () {
    verifyApiv2010accountrecordingrecordingtranscriptionExists(id);
  });
  updateApiv2010accountrecordingrecordingtranscription(x.id);
  updateApiv2010accountrecordingrecordingtranscription(x.id);
  const e_upd = waitForApiv2010accountrecordingrecordingtranscriptionUpdated(id);
  block(matchDeleteApiv2010accountrecordingrecordingtranscription(id), function () {
    verifyApiv2010accountrecordingrecordingtranscriptionUpdated(id);
  });
  deleteApiv2010accountrecordingrecordingtranscription(x.id);
  const e_del = waitForApiv2010accountrecordingrecordingtranscriptionDeleted(id);
  block(matchAddApiv2010accountrecordingrecordingtranscription(id), function () {
    verifyApiv2010accountrecordingrecordingtranscriptionDoesNotExist(id);
  });
});

bthread("Apiv2010accountshortcodeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountshortcode(x.id);
  const e_add = waitForApiv2010accountshortcodeAdded(id);
  block(matchDeleteApiv2010accountshortcode(id), function () {
    verifyApiv2010accountshortcodeExists(id);
  });
  updateApiv2010accountshortcode(x.id);
  updateApiv2010accountshortcode(x.id);
  const e_upd = waitForApiv2010accountshortcodeUpdated(id);
  block(matchDeleteApiv2010accountshortcode(id), function () {
    verifyApiv2010accountshortcodeUpdated(id);
  });
  deleteApiv2010accountshortcode(x.id);
  const e_del = waitForApiv2010accountshortcodeDeleted(id);
  block(matchAddApiv2010accountshortcode(id), function () {
    verifyApiv2010accountshortcodeDoesNotExist(id);
  });
});

bthread("Apiv2010accountsigningkeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsigningkey(x.id);
  const e_add = waitForApiv2010accountsigningkeyAdded(id);
  block(matchDeleteApiv2010accountsigningkey(id), function () {
    verifyApiv2010accountsigningkeyExists(id);
  });
  updateApiv2010accountsigningkey(x.id);
  updateApiv2010accountsigningkey(x.id);
  const e_upd = waitForApiv2010accountsigningkeyUpdated(id);
  block(matchDeleteApiv2010accountsigningkey(id), function () {
    verifyApiv2010accountsigningkeyUpdated(id);
  });
  deleteApiv2010accountsigningkey(x.id);
  const e_del = waitForApiv2010accountsigningkeyDeleted(id);
  block(matchAddApiv2010accountsigningkey(id), function () {
    verifyApiv2010accountsigningkeyDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsip(x.id);
  const e_add = waitForApiv2010accountsipAdded(id);
  block(matchDeleteApiv2010accountsip(id), function () {
    verifyApiv2010accountsipExists(id);
  });
  updateApiv2010accountsip(x.id);
  updateApiv2010accountsip(x.id);
  const e_upd = waitForApiv2010accountsipUpdated(id);
  block(matchDeleteApiv2010accountsip(id), function () {
    verifyApiv2010accountsipUpdated(id);
  });
  deleteApiv2010accountsip(x.id);
  const e_del = waitForApiv2010accountsipDeleted(id);
  block(matchAddApiv2010accountsip(id), function () {
    verifyApiv2010accountsipDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipcredentiallistLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipcredentiallist(x.id);
  const e_add = waitForApiv2010accountsipsipcredentiallistAdded(id);
  block(matchDeleteApiv2010accountsipsipcredentiallist(id), function () {
    verifyApiv2010accountsipsipcredentiallistExists(id);
  });
  updateApiv2010accountsipsipcredentiallist(x.id);
  updateApiv2010accountsipsipcredentiallist(x.id);
  const e_upd = waitForApiv2010accountsipsipcredentiallistUpdated(id);
  block(matchDeleteApiv2010accountsipsipcredentiallist(id), function () {
    verifyApiv2010accountsipsipcredentiallistUpdated(id);
  });
  deleteApiv2010accountsipsipcredentiallist(x.id);
  const e_del = waitForApiv2010accountsipsipcredentiallistDeleted(id);
  block(matchAddApiv2010accountsipsipcredentiallist(id), function () {
    verifyApiv2010accountsipsipcredentiallistDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipcredentiallistsipcredentialLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipcredentiallistsipcredential(x.id);
  const e_add = waitForApiv2010accountsipsipcredentiallistsipcredentialAdded(id);
  block(matchDeleteApiv2010accountsipsipcredentiallistsipcredential(id), function () {
    verifyApiv2010accountsipsipcredentiallistsipcredentialExists(id);
  });
  updateApiv2010accountsipsipcredentiallistsipcredential(x.id);
  updateApiv2010accountsipsipcredentiallistsipcredential(x.id);
  const e_upd = waitForApiv2010accountsipsipcredentiallistsipcredentialUpdated(id);
  block(matchDeleteApiv2010accountsipsipcredentiallistsipcredential(id), function () {
    verifyApiv2010accountsipsipcredentiallistsipcredentialUpdated(id);
  });
  deleteApiv2010accountsipsipcredentiallistsipcredential(x.id);
  const e_del = waitForApiv2010accountsipsipcredentiallistsipcredentialDeleted(id);
  block(matchAddApiv2010accountsipsipcredentiallistsipcredential(id), function () {
    verifyApiv2010accountsipsipcredentiallistsipcredentialDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipdomainLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipdomain(x.id);
  const e_add = waitForApiv2010accountsipsipdomainAdded(id);
  block(matchDeleteApiv2010accountsipsipdomain(id), function () {
    verifyApiv2010accountsipsipdomainExists(id);
  });
  updateApiv2010accountsipsipdomain(x.id);
  updateApiv2010accountsipsipdomain(x.id);
  const e_upd = waitForApiv2010accountsipsipdomainUpdated(id);
  block(matchDeleteApiv2010accountsipsipdomain(id), function () {
    verifyApiv2010accountsipsipdomainUpdated(id);
  });
  deleteApiv2010accountsipsipdomain(x.id);
  const e_del = waitForApiv2010accountsipsipdomainDeleted(id);
  block(matchAddApiv2010accountsipsipdomain(id), function () {
    verifyApiv2010accountsipsipdomainDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipdomainsipauth(x.id);
  const e_add = waitForApiv2010accountsipsipdomainsipauthAdded(id);
  block(matchDeleteApiv2010accountsipsipdomainsipauth(id), function () {
    verifyApiv2010accountsipsipdomainsipauthExists(id);
  });
  updateApiv2010accountsipsipdomainsipauth(x.id);
  updateApiv2010accountsipsipdomainsipauth(x.id);
  const e_upd = waitForApiv2010accountsipsipdomainsipauthUpdated(id);
  block(matchDeleteApiv2010accountsipsipdomainsipauth(id), function () {
    verifyApiv2010accountsipsipdomainsipauthUpdated(id);
  });
  deleteApiv2010accountsipsipdomainsipauth(x.id);
  const e_del = waitForApiv2010accountsipsipdomainsipauthDeleted(id);
  block(matchAddApiv2010accountsipsipdomainsipauth(id), function () {
    verifyApiv2010accountsipsipdomainsipauthDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipdomainsipauthsipauthcalls(x.id);
  const e_add = waitForApiv2010accountsipsipdomainsipauthsipauthcallsAdded(id);
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthcalls(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallsExists(id);
  });
  updateApiv2010accountsipsipdomainsipauthsipauthcalls(x.id);
  updateApiv2010accountsipsipdomainsipauthsipauthcalls(x.id);
  const e_upd = waitForApiv2010accountsipsipdomainsipauthsipauthcallsUpdated(id);
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthcalls(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallsUpdated(id);
  });
  deleteApiv2010accountsipsipdomainsipauthsipauthcalls(x.id);
  const e_del = waitForApiv2010accountsipsipdomainsipauthsipauthcallsDeleted(id);
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthcalls(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallsDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(x.id);
  const e_add = waitForApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingAdded(id);
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingExists(id);
  });
  updateApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(x.id);
  updateApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(x.id);
  const e_upd = waitForApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingUpdated(id);
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingUpdated(id);
  });
  deleteApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(x.id);
  const e_del = waitForApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingDeleted(id);
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(x.id);
  const e_add = waitForApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingAdded(id);
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingExists(id);
  });
  updateApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(x.id);
  updateApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(x.id);
  const e_upd = waitForApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingUpdated(id);
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingUpdated(id);
  });
  deleteApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(x.id);
  const e_del = waitForApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingDeleted(id);
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthregistrationsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipdomainsipauthsipauthregistrations(x.id);
  const e_add = waitForApiv2010accountsipsipdomainsipauthsipauthregistrationsAdded(id);
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthregistrations(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthregistrationsExists(id);
  });
  updateApiv2010accountsipsipdomainsipauthsipauthregistrations(x.id);
  updateApiv2010accountsipsipdomainsipauthsipauthregistrations(x.id);
  const e_upd = waitForApiv2010accountsipsipdomainsipauthsipauthregistrationsUpdated(id);
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthregistrations(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthregistrationsUpdated(id);
  });
  deleteApiv2010accountsipsipdomainsipauthsipauthregistrations(x.id);
  const e_del = waitForApiv2010accountsipsipdomainsipauthsipauthregistrationsDeleted(id);
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthregistrations(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthregistrationsDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(x.id);
  const e_add = waitForApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingAdded(id);
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingExists(id);
  });
  updateApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(x.id);
  updateApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(x.id);
  const e_upd = waitForApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingUpdated(id);
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingUpdated(id);
  });
  deleteApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(x.id);
  const e_del = waitForApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingDeleted(id);
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipdomainsipcredentiallistmappingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipdomainsipcredentiallistmapping(x.id);
  const e_add = waitForApiv2010accountsipsipdomainsipcredentiallistmappingAdded(id);
  block(matchDeleteApiv2010accountsipsipdomainsipcredentiallistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipcredentiallistmappingExists(id);
  });
  updateApiv2010accountsipsipdomainsipcredentiallistmapping(x.id);
  updateApiv2010accountsipsipdomainsipcredentiallistmapping(x.id);
  const e_upd = waitForApiv2010accountsipsipdomainsipcredentiallistmappingUpdated(id);
  block(matchDeleteApiv2010accountsipsipdomainsipcredentiallistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipcredentiallistmappingUpdated(id);
  });
  deleteApiv2010accountsipsipdomainsipcredentiallistmapping(x.id);
  const e_del = waitForApiv2010accountsipsipdomainsipcredentiallistmappingDeleted(id);
  block(matchAddApiv2010accountsipsipdomainsipcredentiallistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipcredentiallistmappingDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipdomainsipipaccesscontrollistmappingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipdomainsipipaccesscontrollistmapping(x.id);
  const e_add = waitForApiv2010accountsipsipdomainsipipaccesscontrollistmappingAdded(id);
  block(matchDeleteApiv2010accountsipsipdomainsipipaccesscontrollistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipipaccesscontrollistmappingExists(id);
  });
  updateApiv2010accountsipsipdomainsipipaccesscontrollistmapping(x.id);
  updateApiv2010accountsipsipdomainsipipaccesscontrollistmapping(x.id);
  const e_upd = waitForApiv2010accountsipsipdomainsipipaccesscontrollistmappingUpdated(id);
  block(matchDeleteApiv2010accountsipsipdomainsipipaccesscontrollistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipipaccesscontrollistmappingUpdated(id);
  });
  deleteApiv2010accountsipsipdomainsipipaccesscontrollistmapping(x.id);
  const e_del = waitForApiv2010accountsipsipdomainsipipaccesscontrollistmappingDeleted(id);
  block(matchAddApiv2010accountsipsipdomainsipipaccesscontrollistmapping(id), function () {
    verifyApiv2010accountsipsipdomainsipipaccesscontrollistmappingDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipipaccesscontrollistLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipipaccesscontrollist(x.id);
  const e_add = waitForApiv2010accountsipsipipaccesscontrollistAdded(id);
  block(matchDeleteApiv2010accountsipsipipaccesscontrollist(id), function () {
    verifyApiv2010accountsipsipipaccesscontrollistExists(id);
  });
  updateApiv2010accountsipsipipaccesscontrollist(x.id);
  updateApiv2010accountsipsipipaccesscontrollist(x.id);
  const e_upd = waitForApiv2010accountsipsipipaccesscontrollistUpdated(id);
  block(matchDeleteApiv2010accountsipsipipaccesscontrollist(id), function () {
    verifyApiv2010accountsipsipipaccesscontrollistUpdated(id);
  });
  deleteApiv2010accountsipsipipaccesscontrollist(x.id);
  const e_del = waitForApiv2010accountsipsipipaccesscontrollistDeleted(id);
  block(matchAddApiv2010accountsipsipipaccesscontrollist(id), function () {
    verifyApiv2010accountsipsipipaccesscontrollistDoesNotExist(id);
  });
});

bthread("Apiv2010accountsipsipipaccesscontrollistsipipaddressLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountsipsipipaccesscontrollistsipipaddress(x.id);
  const e_add = waitForApiv2010accountsipsipipaccesscontrollistsipipaddressAdded(id);
  block(matchDeleteApiv2010accountsipsipipaccesscontrollistsipipaddress(id), function () {
    verifyApiv2010accountsipsipipaccesscontrollistsipipaddressExists(id);
  });
  updateApiv2010accountsipsipipaccesscontrollistsipipaddress(x.id);
  updateApiv2010accountsipsipipaccesscontrollistsipipaddress(x.id);
  const e_upd = waitForApiv2010accountsipsipipaccesscontrollistsipipaddressUpdated(id);
  block(matchDeleteApiv2010accountsipsipipaccesscontrollistsipipaddress(id), function () {
    verifyApiv2010accountsipsipipaccesscontrollistsipipaddressUpdated(id);
  });
  deleteApiv2010accountsipsipipaccesscontrollistsipipaddress(x.id);
  const e_del = waitForApiv2010accountsipsipipaccesscontrollistsipipaddressDeleted(id);
  block(matchAddApiv2010accountsipsipipaccesscontrollistsipipaddress(id), function () {
    verifyApiv2010accountsipsipipaccesscontrollistsipipaddressDoesNotExist(id);
  });
});

bthread("Apiv2010accounttokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accounttoken(x.id);
  const e_add = waitForApiv2010accounttokenAdded(id);
  block(matchDeleteApiv2010accounttoken(id), function () {
    verifyApiv2010accounttokenExists(id);
  });
  updateApiv2010accounttoken(x.id);
  updateApiv2010accounttoken(x.id);
  const e_upd = waitForApiv2010accounttokenUpdated(id);
  block(matchDeleteApiv2010accounttoken(id), function () {
    verifyApiv2010accounttokenUpdated(id);
  });
  deleteApiv2010accounttoken(x.id);
  const e_del = waitForApiv2010accounttokenDeleted(id);
  block(matchAddApiv2010accounttoken(id), function () {
    verifyApiv2010accounttokenDoesNotExist(id);
  });
});

bthread("Apiv2010accounttranscriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accounttranscription(x.id);
  const e_add = waitForApiv2010accounttranscriptionAdded(id);
  block(matchDeleteApiv2010accounttranscription(id), function () {
    verifyApiv2010accounttranscriptionExists(id);
  });
  updateApiv2010accounttranscription(x.id);
  updateApiv2010accounttranscription(x.id);
  const e_upd = waitForApiv2010accounttranscriptionUpdated(id);
  block(matchDeleteApiv2010accounttranscription(id), function () {
    verifyApiv2010accounttranscriptionUpdated(id);
  });
  deleteApiv2010accounttranscription(x.id);
  const e_del = waitForApiv2010accounttranscriptionDeleted(id);
  block(matchAddApiv2010accounttranscription(id), function () {
    verifyApiv2010accounttranscriptionDoesNotExist(id);
  });
});

bthread("Apiv2010accountusageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountusage(x.id);
  const e_add = waitForApiv2010accountusageAdded(id);
  block(matchDeleteApiv2010accountusage(id), function () {
    verifyApiv2010accountusageExists(id);
  });
  updateApiv2010accountusage(x.id);
  updateApiv2010accountusage(x.id);
  const e_upd = waitForApiv2010accountusageUpdated(id);
  block(matchDeleteApiv2010accountusage(id), function () {
    verifyApiv2010accountusageUpdated(id);
  });
  deleteApiv2010accountusage(x.id);
  const e_del = waitForApiv2010accountusageDeleted(id);
  block(matchAddApiv2010accountusage(id), function () {
    verifyApiv2010accountusageDoesNotExist(id);
  });
});

bthread("Apiv2010accountusageusagerecordLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountusageusagerecord(x.id);
  const e_add = waitForApiv2010accountusageusagerecordAdded(id);
  block(matchDeleteApiv2010accountusageusagerecord(id), function () {
    verifyApiv2010accountusageusagerecordExists(id);
  });
  updateApiv2010accountusageusagerecord(x.id);
  updateApiv2010accountusageusagerecord(x.id);
  const e_upd = waitForApiv2010accountusageusagerecordUpdated(id);
  block(matchDeleteApiv2010accountusageusagerecord(id), function () {
    verifyApiv2010accountusageusagerecordUpdated(id);
  });
  deleteApiv2010accountusageusagerecord(x.id);
  const e_del = waitForApiv2010accountusageusagerecordDeleted(id);
  block(matchAddApiv2010accountusageusagerecord(id), function () {
    verifyApiv2010accountusageusagerecordDoesNotExist(id);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordalltimeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountusageusagerecordusagerecordalltime(x.id);
  const e_add = waitForApiv2010accountusageusagerecordusagerecordalltimeAdded(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordalltime(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordalltimeExists(id);
  });
  updateApiv2010accountusageusagerecordusagerecordalltime(x.id);
  updateApiv2010accountusageusagerecordusagerecordalltime(x.id);
  const e_upd = waitForApiv2010accountusageusagerecordusagerecordalltimeUpdated(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordalltime(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordalltimeUpdated(id);
  });
  deleteApiv2010accountusageusagerecordusagerecordalltime(x.id);
  const e_del = waitForApiv2010accountusageusagerecordusagerecordalltimeDeleted(id);
  block(matchAddApiv2010accountusageusagerecordusagerecordalltime(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordalltimeDoesNotExist(id);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecorddailyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountusageusagerecordusagerecorddaily(x.id);
  const e_add = waitForApiv2010accountusageusagerecordusagerecorddailyAdded(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecorddaily(id), function () {
    verifyApiv2010accountusageusagerecordusagerecorddailyExists(id);
  });
  updateApiv2010accountusageusagerecordusagerecorddaily(x.id);
  updateApiv2010accountusageusagerecordusagerecorddaily(x.id);
  const e_upd = waitForApiv2010accountusageusagerecordusagerecorddailyUpdated(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecorddaily(id), function () {
    verifyApiv2010accountusageusagerecordusagerecorddailyUpdated(id);
  });
  deleteApiv2010accountusageusagerecordusagerecorddaily(x.id);
  const e_del = waitForApiv2010accountusageusagerecordusagerecorddailyDeleted(id);
  block(matchAddApiv2010accountusageusagerecordusagerecorddaily(id), function () {
    verifyApiv2010accountusageusagerecordusagerecorddailyDoesNotExist(id);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordlastmonthLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountusageusagerecordusagerecordlastmonth(x.id);
  const e_add = waitForApiv2010accountusageusagerecordusagerecordlastmonthAdded(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordlastmonth(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordlastmonthExists(id);
  });
  updateApiv2010accountusageusagerecordusagerecordlastmonth(x.id);
  updateApiv2010accountusageusagerecordusagerecordlastmonth(x.id);
  const e_upd = waitForApiv2010accountusageusagerecordusagerecordlastmonthUpdated(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordlastmonth(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordlastmonthUpdated(id);
  });
  deleteApiv2010accountusageusagerecordusagerecordlastmonth(x.id);
  const e_del = waitForApiv2010accountusageusagerecordusagerecordlastmonthDeleted(id);
  block(matchAddApiv2010accountusageusagerecordusagerecordlastmonth(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordlastmonthDoesNotExist(id);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordmonthlyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountusageusagerecordusagerecordmonthly(x.id);
  const e_add = waitForApiv2010accountusageusagerecordusagerecordmonthlyAdded(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordmonthly(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordmonthlyExists(id);
  });
  updateApiv2010accountusageusagerecordusagerecordmonthly(x.id);
  updateApiv2010accountusageusagerecordusagerecordmonthly(x.id);
  const e_upd = waitForApiv2010accountusageusagerecordusagerecordmonthlyUpdated(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordmonthly(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordmonthlyUpdated(id);
  });
  deleteApiv2010accountusageusagerecordusagerecordmonthly(x.id);
  const e_del = waitForApiv2010accountusageusagerecordusagerecordmonthlyDeleted(id);
  block(matchAddApiv2010accountusageusagerecordusagerecordmonthly(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordmonthlyDoesNotExist(id);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordthismonthLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountusageusagerecordusagerecordthismonth(x.id);
  const e_add = waitForApiv2010accountusageusagerecordusagerecordthismonthAdded(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordthismonth(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordthismonthExists(id);
  });
  updateApiv2010accountusageusagerecordusagerecordthismonth(x.id);
  updateApiv2010accountusageusagerecordusagerecordthismonth(x.id);
  const e_upd = waitForApiv2010accountusageusagerecordusagerecordthismonthUpdated(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordthismonth(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordthismonthUpdated(id);
  });
  deleteApiv2010accountusageusagerecordusagerecordthismonth(x.id);
  const e_del = waitForApiv2010accountusageusagerecordusagerecordthismonthDeleted(id);
  block(matchAddApiv2010accountusageusagerecordusagerecordthismonth(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordthismonthDoesNotExist(id);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordtodayLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountusageusagerecordusagerecordtoday(x.id);
  const e_add = waitForApiv2010accountusageusagerecordusagerecordtodayAdded(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordtoday(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordtodayExists(id);
  });
  updateApiv2010accountusageusagerecordusagerecordtoday(x.id);
  updateApiv2010accountusageusagerecordusagerecordtoday(x.id);
  const e_upd = waitForApiv2010accountusageusagerecordusagerecordtodayUpdated(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordtoday(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordtodayUpdated(id);
  });
  deleteApiv2010accountusageusagerecordusagerecordtoday(x.id);
  const e_del = waitForApiv2010accountusageusagerecordusagerecordtodayDeleted(id);
  block(matchAddApiv2010accountusageusagerecordusagerecordtoday(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordtodayDoesNotExist(id);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordyearlyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountusageusagerecordusagerecordyearly(x.id);
  const e_add = waitForApiv2010accountusageusagerecordusagerecordyearlyAdded(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordyearly(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordyearlyExists(id);
  });
  updateApiv2010accountusageusagerecordusagerecordyearly(x.id);
  updateApiv2010accountusageusagerecordusagerecordyearly(x.id);
  const e_upd = waitForApiv2010accountusageusagerecordusagerecordyearlyUpdated(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordyearly(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordyearlyUpdated(id);
  });
  deleteApiv2010accountusageusagerecordusagerecordyearly(x.id);
  const e_del = waitForApiv2010accountusageusagerecordusagerecordyearlyDeleted(id);
  block(matchAddApiv2010accountusageusagerecordusagerecordyearly(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordyearlyDoesNotExist(id);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordyesterdayLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountusageusagerecordusagerecordyesterday(x.id);
  const e_add = waitForApiv2010accountusageusagerecordusagerecordyesterdayAdded(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordyesterday(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordyesterdayExists(id);
  });
  updateApiv2010accountusageusagerecordusagerecordyesterday(x.id);
  updateApiv2010accountusageusagerecordusagerecordyesterday(x.id);
  const e_upd = waitForApiv2010accountusageusagerecordusagerecordyesterdayUpdated(id);
  block(matchDeleteApiv2010accountusageusagerecordusagerecordyesterday(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordyesterdayUpdated(id);
  });
  deleteApiv2010accountusageusagerecordusagerecordyesterday(x.id);
  const e_del = waitForApiv2010accountusageusagerecordusagerecordyesterdayDeleted(id);
  block(matchAddApiv2010accountusageusagerecordusagerecordyesterday(id), function () {
    verifyApiv2010accountusageusagerecordusagerecordyesterdayDoesNotExist(id);
  });
});

bthread("Apiv2010accountusageusagetriggerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountusageusagetrigger(x.id);
  const e_add = waitForApiv2010accountusageusagetriggerAdded(id);
  block(matchDeleteApiv2010accountusageusagetrigger(id), function () {
    verifyApiv2010accountusageusagetriggerExists(id);
  });
  updateApiv2010accountusageusagetrigger(x.id);
  updateApiv2010accountusageusagetrigger(x.id);
  const e_upd = waitForApiv2010accountusageusagetriggerUpdated(id);
  block(matchDeleteApiv2010accountusageusagetrigger(id), function () {
    verifyApiv2010accountusageusagetriggerUpdated(id);
  });
  deleteApiv2010accountusageusagetrigger(x.id);
  const e_del = waitForApiv2010accountusageusagetriggerDeleted(id);
  block(matchAddApiv2010accountusageusagetrigger(id), function () {
    verifyApiv2010accountusageusagetriggerDoesNotExist(id);
  });
});

bthread("Apiv2010accountvalidationrequestLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApiv2010accountvalidationrequest(x.id);
  const e_add = waitForApiv2010accountvalidationrequestAdded(id);
  block(matchDeleteApiv2010accountvalidationrequest(id), function () {
    verifyApiv2010accountvalidationrequestExists(id);
  });
  updateApiv2010accountvalidationrequest(x.id);
  updateApiv2010accountvalidationrequest(x.id);
  const e_upd = waitForApiv2010accountvalidationrequestUpdated(id);
  block(matchDeleteApiv2010accountvalidationrequest(id), function () {
    verifyApiv2010accountvalidationrequestUpdated(id);
  });
  deleteApiv2010accountvalidationrequest(x.id);
  const e_del = waitForApiv2010accountvalidationrequestDeleted(id);
  block(matchAddApiv2010accountvalidationrequest(id), function () {
    verifyApiv2010accountvalidationrequestDoesNotExist(id);
  });
});

bthread("AuthorizedconnectappenumpermissionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthorizedconnectappenumpermission(x.id);
  const e_add = waitForAuthorizedconnectappenumpermissionAdded(id);
  block(matchDeleteAuthorizedconnectappenumpermission(id), function () {
    verifyAuthorizedconnectappenumpermissionExists(id);
  });
  updateAuthorizedconnectappenumpermission(x.id);
  updateAuthorizedconnectappenumpermission(x.id);
  const e_upd = waitForAuthorizedconnectappenumpermissionUpdated(id);
  block(matchDeleteAuthorizedconnectappenumpermission(id), function () {
    verifyAuthorizedconnectappenumpermissionUpdated(id);
  });
  deleteAuthorizedconnectappenumpermission(x.id);
  const e_del = waitForAuthorizedconnectappenumpermissionDeleted(id);
  block(matchAddAuthorizedconnectappenumpermission(id), function () {
    verifyAuthorizedconnectappenumpermissionDoesNotExist(id);
  });
});

bthread("CallenumeventLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCallenumevent(x.id);
  const e_add = waitForCallenumeventAdded(id);
  block(matchDeleteCallenumevent(id), function () {
    verifyCallenumeventExists(id);
  });
  updateCallenumevent(x.id);
  updateCallenumevent(x.id);
  const e_upd = waitForCallenumeventUpdated(id);
  block(matchDeleteCallenumevent(id), function () {
    verifyCallenumeventUpdated(id);
  });
  deleteCallenumevent(x.id);
  const e_del = waitForCallenumeventDeleted(id);
  block(matchAddCallenumevent(id), function () {
    verifyCallenumeventDoesNotExist(id);
  });
});

bthread("CallenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCallenumstatus(x.id);
  const e_add = waitForCallenumstatusAdded(id);
  block(matchDeleteCallenumstatus(id), function () {
    verifyCallenumstatusExists(id);
  });
  updateCallenumstatus(x.id);
  updateCallenumstatus(x.id);
  const e_upd = waitForCallenumstatusUpdated(id);
  block(matchDeleteCallenumstatus(id), function () {
    verifyCallenumstatusUpdated(id);
  });
  deleteCallenumstatus(x.id);
  const e_del = waitForCallenumstatusDeleted(id);
  block(matchAddCallenumstatus(id), function () {
    verifyCallenumstatusDoesNotExist(id);
  });
});

bthread("CallenumupdatestatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCallenumupdatestatus(x.id);
  const e_add = waitForCallenumupdatestatusAdded(id);
  block(matchDeleteCallenumupdatestatus(id), function () {
    verifyCallenumupdatestatusExists(id);
  });
  updateCallenumupdatestatus(x.id);
  updateCallenumupdatestatus(x.id);
  const e_upd = waitForCallenumupdatestatusUpdated(id);
  block(matchDeleteCallenumupdatestatus(id), function () {
    verifyCallenumupdatestatusUpdated(id);
  });
  deleteCallenumupdatestatus(x.id);
  const e_del = waitForCallenumupdatestatusDeleted(id);
  block(matchAddCallenumupdatestatus(id), function () {
    verifyCallenumupdatestatusDoesNotExist(id);
  });
});

bthread("CallrecordingenumsourceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCallrecordingenumsource(x.id);
  const e_add = waitForCallrecordingenumsourceAdded(id);
  block(matchDeleteCallrecordingenumsource(id), function () {
    verifyCallrecordingenumsourceExists(id);
  });
  updateCallrecordingenumsource(x.id);
  updateCallrecordingenumsource(x.id);
  const e_upd = waitForCallrecordingenumsourceUpdated(id);
  block(matchDeleteCallrecordingenumsource(id), function () {
    verifyCallrecordingenumsourceUpdated(id);
  });
  deleteCallrecordingenumsource(x.id);
  const e_del = waitForCallrecordingenumsourceDeleted(id);
  block(matchAddCallrecordingenumsource(id), function () {
    verifyCallrecordingenumsourceDoesNotExist(id);
  });
});

bthread("CallrecordingenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCallrecordingenumstatus(x.id);
  const e_add = waitForCallrecordingenumstatusAdded(id);
  block(matchDeleteCallrecordingenumstatus(id), function () {
    verifyCallrecordingenumstatusExists(id);
  });
  updateCallrecordingenumstatus(x.id);
  updateCallrecordingenumstatus(x.id);
  const e_upd = waitForCallrecordingenumstatusUpdated(id);
  block(matchDeleteCallrecordingenumstatus(id), function () {
    verifyCallrecordingenumstatusUpdated(id);
  });
  deleteCallrecordingenumstatus(x.id);
  const e_del = waitForCallrecordingenumstatusDeleted(id);
  block(matchAddCallrecordingenumstatus(id), function () {
    verifyCallrecordingenumstatusDoesNotExist(id);
  });
});

bthread("ConferenceenumreasonconferenceendedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConferenceenumreasonconferenceended(x.id);
  const e_add = waitForConferenceenumreasonconferenceendedAdded(id);
  block(matchDeleteConferenceenumreasonconferenceended(id), function () {
    verifyConferenceenumreasonconferenceendedExists(id);
  });
  updateConferenceenumreasonconferenceended(x.id);
  updateConferenceenumreasonconferenceended(x.id);
  const e_upd = waitForConferenceenumreasonconferenceendedUpdated(id);
  block(matchDeleteConferenceenumreasonconferenceended(id), function () {
    verifyConferenceenumreasonconferenceendedUpdated(id);
  });
  deleteConferenceenumreasonconferenceended(x.id);
  const e_del = waitForConferenceenumreasonconferenceendedDeleted(id);
  block(matchAddConferenceenumreasonconferenceended(id), function () {
    verifyConferenceenumreasonconferenceendedDoesNotExist(id);
  });
});

bthread("ConferenceenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConferenceenumstatus(x.id);
  const e_add = waitForConferenceenumstatusAdded(id);
  block(matchDeleteConferenceenumstatus(id), function () {
    verifyConferenceenumstatusExists(id);
  });
  updateConferenceenumstatus(x.id);
  updateConferenceenumstatus(x.id);
  const e_upd = waitForConferenceenumstatusUpdated(id);
  block(matchDeleteConferenceenumstatus(id), function () {
    verifyConferenceenumstatusUpdated(id);
  });
  deleteConferenceenumstatus(x.id);
  const e_del = waitForConferenceenumstatusDeleted(id);
  block(matchAddConferenceenumstatus(id), function () {
    verifyConferenceenumstatusDoesNotExist(id);
  });
});

bthread("ConferenceenumupdatestatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConferenceenumupdatestatus(x.id);
  const e_add = waitForConferenceenumupdatestatusAdded(id);
  block(matchDeleteConferenceenumupdatestatus(id), function () {
    verifyConferenceenumupdatestatusExists(id);
  });
  updateConferenceenumupdatestatus(x.id);
  updateConferenceenumupdatestatus(x.id);
  const e_upd = waitForConferenceenumupdatestatusUpdated(id);
  block(matchDeleteConferenceenumupdatestatus(id), function () {
    verifyConferenceenumupdatestatusUpdated(id);
  });
  deleteConferenceenumupdatestatus(x.id);
  const e_del = waitForConferenceenumupdatestatusDeleted(id);
  block(matchAddConferenceenumupdatestatus(id), function () {
    verifyConferenceenumupdatestatusDoesNotExist(id);
  });
});

bthread("ConferencerecordingenumsourceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConferencerecordingenumsource(x.id);
  const e_add = waitForConferencerecordingenumsourceAdded(id);
  block(matchDeleteConferencerecordingenumsource(id), function () {
    verifyConferencerecordingenumsourceExists(id);
  });
  updateConferencerecordingenumsource(x.id);
  updateConferencerecordingenumsource(x.id);
  const e_upd = waitForConferencerecordingenumsourceUpdated(id);
  block(matchDeleteConferencerecordingenumsource(id), function () {
    verifyConferencerecordingenumsourceUpdated(id);
  });
  deleteConferencerecordingenumsource(x.id);
  const e_del = waitForConferencerecordingenumsourceDeleted(id);
  block(matchAddConferencerecordingenumsource(id), function () {
    verifyConferencerecordingenumsourceDoesNotExist(id);
  });
});

bthread("ConferencerecordingenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConferencerecordingenumstatus(x.id);
  const e_add = waitForConferencerecordingenumstatusAdded(id);
  block(matchDeleteConferencerecordingenumstatus(id), function () {
    verifyConferencerecordingenumstatusExists(id);
  });
  updateConferencerecordingenumstatus(x.id);
  updateConferencerecordingenumstatus(x.id);
  const e_upd = waitForConferencerecordingenumstatusUpdated(id);
  block(matchDeleteConferencerecordingenumstatus(id), function () {
    verifyConferencerecordingenumstatusUpdated(id);
  });
  deleteConferencerecordingenumstatus(x.id);
  const e_del = waitForConferencerecordingenumstatusDeleted(id);
  block(matchAddConferencerecordingenumstatus(id), function () {
    verifyConferencerecordingenumstatusDoesNotExist(id);
  });
});

bthread("ConnectappenumpermissionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConnectappenumpermission(x.id);
  const e_add = waitForConnectappenumpermissionAdded(id);
  block(matchDeleteConnectappenumpermission(id), function () {
    verifyConnectappenumpermissionExists(id);
  });
  updateConnectappenumpermission(x.id);
  updateConnectappenumpermission(x.id);
  const e_upd = waitForConnectappenumpermissionUpdated(id);
  block(matchDeleteConnectappenumpermission(id), function () {
    verifyConnectappenumpermissionUpdated(id);
  });
  deleteConnectappenumpermission(x.id);
  const e_del = waitForConnectappenumpermissionDeleted(id);
  block(matchAddConnectappenumpermission(id), function () {
    verifyConnectappenumpermissionDoesNotExist(id);
  });
});

bthread("DependentphonenumberenumaddressrequirementLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDependentphonenumberenumaddressrequirement(x.id);
  const e_add = waitForDependentphonenumberenumaddressrequirementAdded(id);
  block(matchDeleteDependentphonenumberenumaddressrequirement(id), function () {
    verifyDependentphonenumberenumaddressrequirementExists(id);
  });
  updateDependentphonenumberenumaddressrequirement(x.id);
  updateDependentphonenumberenumaddressrequirement(x.id);
  const e_upd = waitForDependentphonenumberenumaddressrequirementUpdated(id);
  block(matchDeleteDependentphonenumberenumaddressrequirement(id), function () {
    verifyDependentphonenumberenumaddressrequirementUpdated(id);
  });
  deleteDependentphonenumberenumaddressrequirement(x.id);
  const e_del = waitForDependentphonenumberenumaddressrequirementDeleted(id);
  block(matchAddDependentphonenumberenumaddressrequirement(id), function () {
    verifyDependentphonenumberenumaddressrequirementDoesNotExist(id);
  });
});

bthread("DependentphonenumberenumemergencystatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDependentphonenumberenumemergencystatus(x.id);
  const e_add = waitForDependentphonenumberenumemergencystatusAdded(id);
  block(matchDeleteDependentphonenumberenumemergencystatus(id), function () {
    verifyDependentphonenumberenumemergencystatusExists(id);
  });
  updateDependentphonenumberenumemergencystatus(x.id);
  updateDependentphonenumberenumemergencystatus(x.id);
  const e_upd = waitForDependentphonenumberenumemergencystatusUpdated(id);
  block(matchDeleteDependentphonenumberenumemergencystatus(id), function () {
    verifyDependentphonenumberenumemergencystatusUpdated(id);
  });
  deleteDependentphonenumberenumemergencystatus(x.id);
  const e_del = waitForDependentphonenumberenumemergencystatusDeleted(id);
  block(matchAddDependentphonenumberenumemergencystatus(id), function () {
    verifyDependentphonenumberenumemergencystatusDoesNotExist(id);
  });
});

bthread("IncomingphonenumberenumaddressrequirementLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumberenumaddressrequirement(x.id);
  const e_add = waitForIncomingphonenumberenumaddressrequirementAdded(id);
  block(matchDeleteIncomingphonenumberenumaddressrequirement(id), function () {
    verifyIncomingphonenumberenumaddressrequirementExists(id);
  });
  updateIncomingphonenumberenumaddressrequirement(x.id);
  updateIncomingphonenumberenumaddressrequirement(x.id);
  const e_upd = waitForIncomingphonenumberenumaddressrequirementUpdated(id);
  block(matchDeleteIncomingphonenumberenumaddressrequirement(id), function () {
    verifyIncomingphonenumberenumaddressrequirementUpdated(id);
  });
  deleteIncomingphonenumberenumaddressrequirement(x.id);
  const e_del = waitForIncomingphonenumberenumaddressrequirementDeleted(id);
  block(matchAddIncomingphonenumberenumaddressrequirement(id), function () {
    verifyIncomingphonenumberenumaddressrequirementDoesNotExist(id);
  });
});

bthread("IncomingphonenumberenumemergencyaddressstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumberenumemergencyaddressstatus(x.id);
  const e_add = waitForIncomingphonenumberenumemergencyaddressstatusAdded(id);
  block(matchDeleteIncomingphonenumberenumemergencyaddressstatus(id), function () {
    verifyIncomingphonenumberenumemergencyaddressstatusExists(id);
  });
  updateIncomingphonenumberenumemergencyaddressstatus(x.id);
  updateIncomingphonenumberenumemergencyaddressstatus(x.id);
  const e_upd = waitForIncomingphonenumberenumemergencyaddressstatusUpdated(id);
  block(matchDeleteIncomingphonenumberenumemergencyaddressstatus(id), function () {
    verifyIncomingphonenumberenumemergencyaddressstatusUpdated(id);
  });
  deleteIncomingphonenumberenumemergencyaddressstatus(x.id);
  const e_del = waitForIncomingphonenumberenumemergencyaddressstatusDeleted(id);
  block(matchAddIncomingphonenumberenumemergencyaddressstatus(id), function () {
    verifyIncomingphonenumberenumemergencyaddressstatusDoesNotExist(id);
  });
});

bthread("IncomingphonenumberenumemergencystatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumberenumemergencystatus(x.id);
  const e_add = waitForIncomingphonenumberenumemergencystatusAdded(id);
  block(matchDeleteIncomingphonenumberenumemergencystatus(id), function () {
    verifyIncomingphonenumberenumemergencystatusExists(id);
  });
  updateIncomingphonenumberenumemergencystatus(x.id);
  updateIncomingphonenumberenumemergencystatus(x.id);
  const e_upd = waitForIncomingphonenumberenumemergencystatusUpdated(id);
  block(matchDeleteIncomingphonenumberenumemergencystatus(id), function () {
    verifyIncomingphonenumberenumemergencystatusUpdated(id);
  });
  deleteIncomingphonenumberenumemergencystatus(x.id);
  const e_del = waitForIncomingphonenumberenumemergencystatusDeleted(id);
  block(matchAddIncomingphonenumberenumemergencystatus(id), function () {
    verifyIncomingphonenumberenumemergencystatusDoesNotExist(id);
  });
});

bthread("IncomingphonenumberenumvoicereceivemodeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumberenumvoicereceivemode(x.id);
  const e_add = waitForIncomingphonenumberenumvoicereceivemodeAdded(id);
  block(matchDeleteIncomingphonenumberenumvoicereceivemode(id), function () {
    verifyIncomingphonenumberenumvoicereceivemodeExists(id);
  });
  updateIncomingphonenumberenumvoicereceivemode(x.id);
  updateIncomingphonenumberenumvoicereceivemode(x.id);
  const e_upd = waitForIncomingphonenumberenumvoicereceivemodeUpdated(id);
  block(matchDeleteIncomingphonenumberenumvoicereceivemode(id), function () {
    verifyIncomingphonenumberenumvoicereceivemodeUpdated(id);
  });
  deleteIncomingphonenumberenumvoicereceivemode(x.id);
  const e_del = waitForIncomingphonenumberenumvoicereceivemodeDeleted(id);
  block(matchAddIncomingphonenumberenumvoicereceivemode(id), function () {
    verifyIncomingphonenumberenumvoicereceivemodeDoesNotExist(id);
  });
});

bthread("IncomingphonenumberlocalenumaddressrequirementLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumberlocalenumaddressrequirement(x.id);
  const e_add = waitForIncomingphonenumberlocalenumaddressrequirementAdded(id);
  block(matchDeleteIncomingphonenumberlocalenumaddressrequirement(id), function () {
    verifyIncomingphonenumberlocalenumaddressrequirementExists(id);
  });
  updateIncomingphonenumberlocalenumaddressrequirement(x.id);
  updateIncomingphonenumberlocalenumaddressrequirement(x.id);
  const e_upd = waitForIncomingphonenumberlocalenumaddressrequirementUpdated(id);
  block(matchDeleteIncomingphonenumberlocalenumaddressrequirement(id), function () {
    verifyIncomingphonenumberlocalenumaddressrequirementUpdated(id);
  });
  deleteIncomingphonenumberlocalenumaddressrequirement(x.id);
  const e_del = waitForIncomingphonenumberlocalenumaddressrequirementDeleted(id);
  block(matchAddIncomingphonenumberlocalenumaddressrequirement(id), function () {
    verifyIncomingphonenumberlocalenumaddressrequirementDoesNotExist(id);
  });
});

bthread("IncomingphonenumberlocalenumemergencyaddressstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumberlocalenumemergencyaddressstatus(x.id);
  const e_add = waitForIncomingphonenumberlocalenumemergencyaddressstatusAdded(id);
  block(matchDeleteIncomingphonenumberlocalenumemergencyaddressstatus(id), function () {
    verifyIncomingphonenumberlocalenumemergencyaddressstatusExists(id);
  });
  updateIncomingphonenumberlocalenumemergencyaddressstatus(x.id);
  updateIncomingphonenumberlocalenumemergencyaddressstatus(x.id);
  const e_upd = waitForIncomingphonenumberlocalenumemergencyaddressstatusUpdated(id);
  block(matchDeleteIncomingphonenumberlocalenumemergencyaddressstatus(id), function () {
    verifyIncomingphonenumberlocalenumemergencyaddressstatusUpdated(id);
  });
  deleteIncomingphonenumberlocalenumemergencyaddressstatus(x.id);
  const e_del = waitForIncomingphonenumberlocalenumemergencyaddressstatusDeleted(id);
  block(matchAddIncomingphonenumberlocalenumemergencyaddressstatus(id), function () {
    verifyIncomingphonenumberlocalenumemergencyaddressstatusDoesNotExist(id);
  });
});

bthread("IncomingphonenumberlocalenumemergencystatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumberlocalenumemergencystatus(x.id);
  const e_add = waitForIncomingphonenumberlocalenumemergencystatusAdded(id);
  block(matchDeleteIncomingphonenumberlocalenumemergencystatus(id), function () {
    verifyIncomingphonenumberlocalenumemergencystatusExists(id);
  });
  updateIncomingphonenumberlocalenumemergencystatus(x.id);
  updateIncomingphonenumberlocalenumemergencystatus(x.id);
  const e_upd = waitForIncomingphonenumberlocalenumemergencystatusUpdated(id);
  block(matchDeleteIncomingphonenumberlocalenumemergencystatus(id), function () {
    verifyIncomingphonenumberlocalenumemergencystatusUpdated(id);
  });
  deleteIncomingphonenumberlocalenumemergencystatus(x.id);
  const e_del = waitForIncomingphonenumberlocalenumemergencystatusDeleted(id);
  block(matchAddIncomingphonenumberlocalenumemergencystatus(id), function () {
    verifyIncomingphonenumberlocalenumemergencystatusDoesNotExist(id);
  });
});

bthread("IncomingphonenumberlocalenumvoicereceivemodeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumberlocalenumvoicereceivemode(x.id);
  const e_add = waitForIncomingphonenumberlocalenumvoicereceivemodeAdded(id);
  block(matchDeleteIncomingphonenumberlocalenumvoicereceivemode(id), function () {
    verifyIncomingphonenumberlocalenumvoicereceivemodeExists(id);
  });
  updateIncomingphonenumberlocalenumvoicereceivemode(x.id);
  updateIncomingphonenumberlocalenumvoicereceivemode(x.id);
  const e_upd = waitForIncomingphonenumberlocalenumvoicereceivemodeUpdated(id);
  block(matchDeleteIncomingphonenumberlocalenumvoicereceivemode(id), function () {
    verifyIncomingphonenumberlocalenumvoicereceivemodeUpdated(id);
  });
  deleteIncomingphonenumberlocalenumvoicereceivemode(x.id);
  const e_del = waitForIncomingphonenumberlocalenumvoicereceivemodeDeleted(id);
  block(matchAddIncomingphonenumberlocalenumvoicereceivemode(id), function () {
    verifyIncomingphonenumberlocalenumvoicereceivemodeDoesNotExist(id);
  });
});

bthread("IncomingphonenumbermobileenumaddressrequirementLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumbermobileenumaddressrequirement(x.id);
  const e_add = waitForIncomingphonenumbermobileenumaddressrequirementAdded(id);
  block(matchDeleteIncomingphonenumbermobileenumaddressrequirement(id), function () {
    verifyIncomingphonenumbermobileenumaddressrequirementExists(id);
  });
  updateIncomingphonenumbermobileenumaddressrequirement(x.id);
  updateIncomingphonenumbermobileenumaddressrequirement(x.id);
  const e_upd = waitForIncomingphonenumbermobileenumaddressrequirementUpdated(id);
  block(matchDeleteIncomingphonenumbermobileenumaddressrequirement(id), function () {
    verifyIncomingphonenumbermobileenumaddressrequirementUpdated(id);
  });
  deleteIncomingphonenumbermobileenumaddressrequirement(x.id);
  const e_del = waitForIncomingphonenumbermobileenumaddressrequirementDeleted(id);
  block(matchAddIncomingphonenumbermobileenumaddressrequirement(id), function () {
    verifyIncomingphonenumbermobileenumaddressrequirementDoesNotExist(id);
  });
});

bthread("IncomingphonenumbermobileenumemergencyaddressstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumbermobileenumemergencyaddressstatus(x.id);
  const e_add = waitForIncomingphonenumbermobileenumemergencyaddressstatusAdded(id);
  block(matchDeleteIncomingphonenumbermobileenumemergencyaddressstatus(id), function () {
    verifyIncomingphonenumbermobileenumemergencyaddressstatusExists(id);
  });
  updateIncomingphonenumbermobileenumemergencyaddressstatus(x.id);
  updateIncomingphonenumbermobileenumemergencyaddressstatus(x.id);
  const e_upd = waitForIncomingphonenumbermobileenumemergencyaddressstatusUpdated(id);
  block(matchDeleteIncomingphonenumbermobileenumemergencyaddressstatus(id), function () {
    verifyIncomingphonenumbermobileenumemergencyaddressstatusUpdated(id);
  });
  deleteIncomingphonenumbermobileenumemergencyaddressstatus(x.id);
  const e_del = waitForIncomingphonenumbermobileenumemergencyaddressstatusDeleted(id);
  block(matchAddIncomingphonenumbermobileenumemergencyaddressstatus(id), function () {
    verifyIncomingphonenumbermobileenumemergencyaddressstatusDoesNotExist(id);
  });
});

bthread("IncomingphonenumbermobileenumemergencystatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumbermobileenumemergencystatus(x.id);
  const e_add = waitForIncomingphonenumbermobileenumemergencystatusAdded(id);
  block(matchDeleteIncomingphonenumbermobileenumemergencystatus(id), function () {
    verifyIncomingphonenumbermobileenumemergencystatusExists(id);
  });
  updateIncomingphonenumbermobileenumemergencystatus(x.id);
  updateIncomingphonenumbermobileenumemergencystatus(x.id);
  const e_upd = waitForIncomingphonenumbermobileenumemergencystatusUpdated(id);
  block(matchDeleteIncomingphonenumbermobileenumemergencystatus(id), function () {
    verifyIncomingphonenumbermobileenumemergencystatusUpdated(id);
  });
  deleteIncomingphonenumbermobileenumemergencystatus(x.id);
  const e_del = waitForIncomingphonenumbermobileenumemergencystatusDeleted(id);
  block(matchAddIncomingphonenumbermobileenumemergencystatus(id), function () {
    verifyIncomingphonenumbermobileenumemergencystatusDoesNotExist(id);
  });
});

bthread("IncomingphonenumbermobileenumvoicereceivemodeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumbermobileenumvoicereceivemode(x.id);
  const e_add = waitForIncomingphonenumbermobileenumvoicereceivemodeAdded(id);
  block(matchDeleteIncomingphonenumbermobileenumvoicereceivemode(id), function () {
    verifyIncomingphonenumbermobileenumvoicereceivemodeExists(id);
  });
  updateIncomingphonenumbermobileenumvoicereceivemode(x.id);
  updateIncomingphonenumbermobileenumvoicereceivemode(x.id);
  const e_upd = waitForIncomingphonenumbermobileenumvoicereceivemodeUpdated(id);
  block(matchDeleteIncomingphonenumbermobileenumvoicereceivemode(id), function () {
    verifyIncomingphonenumbermobileenumvoicereceivemodeUpdated(id);
  });
  deleteIncomingphonenumbermobileenumvoicereceivemode(x.id);
  const e_del = waitForIncomingphonenumbermobileenumvoicereceivemodeDeleted(id);
  block(matchAddIncomingphonenumbermobileenumvoicereceivemode(id), function () {
    verifyIncomingphonenumbermobileenumvoicereceivemodeDoesNotExist(id);
  });
});

bthread("IncomingphonenumbertollfreeenumaddressrequirementLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumbertollfreeenumaddressrequirement(x.id);
  const e_add = waitForIncomingphonenumbertollfreeenumaddressrequirementAdded(id);
  block(matchDeleteIncomingphonenumbertollfreeenumaddressrequirement(id), function () {
    verifyIncomingphonenumbertollfreeenumaddressrequirementExists(id);
  });
  updateIncomingphonenumbertollfreeenumaddressrequirement(x.id);
  updateIncomingphonenumbertollfreeenumaddressrequirement(x.id);
  const e_upd = waitForIncomingphonenumbertollfreeenumaddressrequirementUpdated(id);
  block(matchDeleteIncomingphonenumbertollfreeenumaddressrequirement(id), function () {
    verifyIncomingphonenumbertollfreeenumaddressrequirementUpdated(id);
  });
  deleteIncomingphonenumbertollfreeenumaddressrequirement(x.id);
  const e_del = waitForIncomingphonenumbertollfreeenumaddressrequirementDeleted(id);
  block(matchAddIncomingphonenumbertollfreeenumaddressrequirement(id), function () {
    verifyIncomingphonenumbertollfreeenumaddressrequirementDoesNotExist(id);
  });
});

bthread("IncomingphonenumbertollfreeenumemergencyaddressstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumbertollfreeenumemergencyaddressstatus(x.id);
  const e_add = waitForIncomingphonenumbertollfreeenumemergencyaddressstatusAdded(id);
  block(matchDeleteIncomingphonenumbertollfreeenumemergencyaddressstatus(id), function () {
    verifyIncomingphonenumbertollfreeenumemergencyaddressstatusExists(id);
  });
  updateIncomingphonenumbertollfreeenumemergencyaddressstatus(x.id);
  updateIncomingphonenumbertollfreeenumemergencyaddressstatus(x.id);
  const e_upd = waitForIncomingphonenumbertollfreeenumemergencyaddressstatusUpdated(id);
  block(matchDeleteIncomingphonenumbertollfreeenumemergencyaddressstatus(id), function () {
    verifyIncomingphonenumbertollfreeenumemergencyaddressstatusUpdated(id);
  });
  deleteIncomingphonenumbertollfreeenumemergencyaddressstatus(x.id);
  const e_del = waitForIncomingphonenumbertollfreeenumemergencyaddressstatusDeleted(id);
  block(matchAddIncomingphonenumbertollfreeenumemergencyaddressstatus(id), function () {
    verifyIncomingphonenumbertollfreeenumemergencyaddressstatusDoesNotExist(id);
  });
});

bthread("IncomingphonenumbertollfreeenumemergencystatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumbertollfreeenumemergencystatus(x.id);
  const e_add = waitForIncomingphonenumbertollfreeenumemergencystatusAdded(id);
  block(matchDeleteIncomingphonenumbertollfreeenumemergencystatus(id), function () {
    verifyIncomingphonenumbertollfreeenumemergencystatusExists(id);
  });
  updateIncomingphonenumbertollfreeenumemergencystatus(x.id);
  updateIncomingphonenumbertollfreeenumemergencystatus(x.id);
  const e_upd = waitForIncomingphonenumbertollfreeenumemergencystatusUpdated(id);
  block(matchDeleteIncomingphonenumbertollfreeenumemergencystatus(id), function () {
    verifyIncomingphonenumbertollfreeenumemergencystatusUpdated(id);
  });
  deleteIncomingphonenumbertollfreeenumemergencystatus(x.id);
  const e_del = waitForIncomingphonenumbertollfreeenumemergencystatusDeleted(id);
  block(matchAddIncomingphonenumbertollfreeenumemergencystatus(id), function () {
    verifyIncomingphonenumbertollfreeenumemergencystatusDoesNotExist(id);
  });
});

bthread("IncomingphonenumbertollfreeenumvoicereceivemodeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumbertollfreeenumvoicereceivemode(x.id);
  const e_add = waitForIncomingphonenumbertollfreeenumvoicereceivemodeAdded(id);
  block(matchDeleteIncomingphonenumbertollfreeenumvoicereceivemode(id), function () {
    verifyIncomingphonenumbertollfreeenumvoicereceivemodeExists(id);
  });
  updateIncomingphonenumbertollfreeenumvoicereceivemode(x.id);
  updateIncomingphonenumbertollfreeenumvoicereceivemode(x.id);
  const e_upd = waitForIncomingphonenumbertollfreeenumvoicereceivemodeUpdated(id);
  block(matchDeleteIncomingphonenumbertollfreeenumvoicereceivemode(id), function () {
    verifyIncomingphonenumbertollfreeenumvoicereceivemodeUpdated(id);
  });
  deleteIncomingphonenumbertollfreeenumvoicereceivemode(x.id);
  const e_del = waitForIncomingphonenumbertollfreeenumvoicereceivemodeDeleted(id);
  block(matchAddIncomingphonenumbertollfreeenumvoicereceivemode(id), function () {
    verifyIncomingphonenumbertollfreeenumvoicereceivemodeDoesNotExist(id);
  });
});

bthread("MessageenumaddressretentionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessageenumaddressretention(x.id);
  const e_add = waitForMessageenumaddressretentionAdded(id);
  block(matchDeleteMessageenumaddressretention(id), function () {
    verifyMessageenumaddressretentionExists(id);
  });
  updateMessageenumaddressretention(x.id);
  updateMessageenumaddressretention(x.id);
  const e_upd = waitForMessageenumaddressretentionUpdated(id);
  block(matchDeleteMessageenumaddressretention(id), function () {
    verifyMessageenumaddressretentionUpdated(id);
  });
  deleteMessageenumaddressretention(x.id);
  const e_del = waitForMessageenumaddressretentionDeleted(id);
  block(matchAddMessageenumaddressretention(id), function () {
    verifyMessageenumaddressretentionDoesNotExist(id);
  });
});

bthread("MessageenumcontentretentionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessageenumcontentretention(x.id);
  const e_add = waitForMessageenumcontentretentionAdded(id);
  block(matchDeleteMessageenumcontentretention(id), function () {
    verifyMessageenumcontentretentionExists(id);
  });
  updateMessageenumcontentretention(x.id);
  updateMessageenumcontentretention(x.id);
  const e_upd = waitForMessageenumcontentretentionUpdated(id);
  block(matchDeleteMessageenumcontentretention(id), function () {
    verifyMessageenumcontentretentionUpdated(id);
  });
  deleteMessageenumcontentretention(x.id);
  const e_del = waitForMessageenumcontentretentionDeleted(id);
  block(matchAddMessageenumcontentretention(id), function () {
    verifyMessageenumcontentretentionDoesNotExist(id);
  });
});

bthread("MessageenumdirectionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessageenumdirection(x.id);
  const e_add = waitForMessageenumdirectionAdded(id);
  block(matchDeleteMessageenumdirection(id), function () {
    verifyMessageenumdirectionExists(id);
  });
  updateMessageenumdirection(x.id);
  updateMessageenumdirection(x.id);
  const e_upd = waitForMessageenumdirectionUpdated(id);
  block(matchDeleteMessageenumdirection(id), function () {
    verifyMessageenumdirectionUpdated(id);
  });
  deleteMessageenumdirection(x.id);
  const e_del = waitForMessageenumdirectionDeleted(id);
  block(matchAddMessageenumdirection(id), function () {
    verifyMessageenumdirectionDoesNotExist(id);
  });
});

bthread("MessageenumriskcheckLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessageenumriskcheck(x.id);
  const e_add = waitForMessageenumriskcheckAdded(id);
  block(matchDeleteMessageenumriskcheck(id), function () {
    verifyMessageenumriskcheckExists(id);
  });
  updateMessageenumriskcheck(x.id);
  updateMessageenumriskcheck(x.id);
  const e_upd = waitForMessageenumriskcheckUpdated(id);
  block(matchDeleteMessageenumriskcheck(id), function () {
    verifyMessageenumriskcheckUpdated(id);
  });
  deleteMessageenumriskcheck(x.id);
  const e_del = waitForMessageenumriskcheckDeleted(id);
  block(matchAddMessageenumriskcheck(id), function () {
    verifyMessageenumriskcheckDoesNotExist(id);
  });
});

bthread("MessageenumscheduletypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessageenumscheduletype(x.id);
  const e_add = waitForMessageenumscheduletypeAdded(id);
  block(matchDeleteMessageenumscheduletype(id), function () {
    verifyMessageenumscheduletypeExists(id);
  });
  updateMessageenumscheduletype(x.id);
  updateMessageenumscheduletype(x.id);
  const e_upd = waitForMessageenumscheduletypeUpdated(id);
  block(matchDeleteMessageenumscheduletype(id), function () {
    verifyMessageenumscheduletypeUpdated(id);
  });
  deleteMessageenumscheduletype(x.id);
  const e_del = waitForMessageenumscheduletypeDeleted(id);
  block(matchAddMessageenumscheduletype(id), function () {
    verifyMessageenumscheduletypeDoesNotExist(id);
  });
});

bthread("MessageenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessageenumstatus(x.id);
  const e_add = waitForMessageenumstatusAdded(id);
  block(matchDeleteMessageenumstatus(id), function () {
    verifyMessageenumstatusExists(id);
  });
  updateMessageenumstatus(x.id);
  updateMessageenumstatus(x.id);
  const e_upd = waitForMessageenumstatusUpdated(id);
  block(matchDeleteMessageenumstatus(id), function () {
    verifyMessageenumstatusUpdated(id);
  });
  deleteMessageenumstatus(x.id);
  const e_del = waitForMessageenumstatusDeleted(id);
  block(matchAddMessageenumstatus(id), function () {
    verifyMessageenumstatusDoesNotExist(id);
  });
});

bthread("MessageenumtraffictypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessageenumtraffictype(x.id);
  const e_add = waitForMessageenumtraffictypeAdded(id);
  block(matchDeleteMessageenumtraffictype(id), function () {
    verifyMessageenumtraffictypeExists(id);
  });
  updateMessageenumtraffictype(x.id);
  updateMessageenumtraffictype(x.id);
  const e_upd = waitForMessageenumtraffictypeUpdated(id);
  block(matchDeleteMessageenumtraffictype(id), function () {
    verifyMessageenumtraffictypeUpdated(id);
  });
  deleteMessageenumtraffictype(x.id);
  const e_del = waitForMessageenumtraffictypeDeleted(id);
  block(matchAddMessageenumtraffictype(id), function () {
    verifyMessageenumtraffictypeDoesNotExist(id);
  });
});

bthread("MessageenumupdatestatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessageenumupdatestatus(x.id);
  const e_add = waitForMessageenumupdatestatusAdded(id);
  block(matchDeleteMessageenumupdatestatus(id), function () {
    verifyMessageenumupdatestatusExists(id);
  });
  updateMessageenumupdatestatus(x.id);
  updateMessageenumupdatestatus(x.id);
  const e_upd = waitForMessageenumupdatestatusUpdated(id);
  block(matchDeleteMessageenumupdatestatus(id), function () {
    verifyMessageenumupdatestatusUpdated(id);
  });
  deleteMessageenumupdatestatus(x.id);
  const e_del = waitForMessageenumupdatestatusDeleted(id);
  block(matchAddMessageenumupdatestatus(id), function () {
    verifyMessageenumupdatestatusDoesNotExist(id);
  });
});

bthread("MessagefeedbackenumoutcomeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessagefeedbackenumoutcome(x.id);
  const e_add = waitForMessagefeedbackenumoutcomeAdded(id);
  block(matchDeleteMessagefeedbackenumoutcome(id), function () {
    verifyMessagefeedbackenumoutcomeExists(id);
  });
  updateMessagefeedbackenumoutcome(x.id);
  updateMessagefeedbackenumoutcome(x.id);
  const e_upd = waitForMessagefeedbackenumoutcomeUpdated(id);
  block(matchDeleteMessagefeedbackenumoutcome(id), function () {
    verifyMessagefeedbackenumoutcomeUpdated(id);
  });
  deleteMessagefeedbackenumoutcome(x.id);
  const e_del = waitForMessagefeedbackenumoutcomeDeleted(id);
  block(matchAddMessagefeedbackenumoutcome(id), function () {
    verifyMessagefeedbackenumoutcomeDoesNotExist(id);
  });
});

bthread("ParticipantenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addParticipantenumstatus(x.id);
  const e_add = waitForParticipantenumstatusAdded(id);
  block(matchDeleteParticipantenumstatus(id), function () {
    verifyParticipantenumstatusExists(id);
  });
  updateParticipantenumstatus(x.id);
  updateParticipantenumstatus(x.id);
  const e_upd = waitForParticipantenumstatusUpdated(id);
  block(matchDeleteParticipantenumstatus(id), function () {
    verifyParticipantenumstatusUpdated(id);
  });
  deleteParticipantenumstatus(x.id);
  const e_del = waitForParticipantenumstatusDeleted(id);
  block(matchAddParticipantenumstatus(id), function () {
    verifyParticipantenumstatusDoesNotExist(id);
  });
});

bthread("PaymentsenumbankaccounttypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPaymentsenumbankaccounttype(x.id);
  const e_add = waitForPaymentsenumbankaccounttypeAdded(id);
  block(matchDeletePaymentsenumbankaccounttype(id), function () {
    verifyPaymentsenumbankaccounttypeExists(id);
  });
  updatePaymentsenumbankaccounttype(x.id);
  updatePaymentsenumbankaccounttype(x.id);
  const e_upd = waitForPaymentsenumbankaccounttypeUpdated(id);
  block(matchDeletePaymentsenumbankaccounttype(id), function () {
    verifyPaymentsenumbankaccounttypeUpdated(id);
  });
  deletePaymentsenumbankaccounttype(x.id);
  const e_del = waitForPaymentsenumbankaccounttypeDeleted(id);
  block(matchAddPaymentsenumbankaccounttype(id), function () {
    verifyPaymentsenumbankaccounttypeDoesNotExist(id);
  });
});

bthread("PaymentsenumcaptureLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPaymentsenumcapture(x.id);
  const e_add = waitForPaymentsenumcaptureAdded(id);
  block(matchDeletePaymentsenumcapture(id), function () {
    verifyPaymentsenumcaptureExists(id);
  });
  updatePaymentsenumcapture(x.id);
  updatePaymentsenumcapture(x.id);
  const e_upd = waitForPaymentsenumcaptureUpdated(id);
  block(matchDeletePaymentsenumcapture(id), function () {
    verifyPaymentsenumcaptureUpdated(id);
  });
  deletePaymentsenumcapture(x.id);
  const e_del = waitForPaymentsenumcaptureDeleted(id);
  block(matchAddPaymentsenumcapture(id), function () {
    verifyPaymentsenumcaptureDoesNotExist(id);
  });
});

bthread("PaymentsenumpaymentmethodLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPaymentsenumpaymentmethod(x.id);
  const e_add = waitForPaymentsenumpaymentmethodAdded(id);
  block(matchDeletePaymentsenumpaymentmethod(id), function () {
    verifyPaymentsenumpaymentmethodExists(id);
  });
  updatePaymentsenumpaymentmethod(x.id);
  updatePaymentsenumpaymentmethod(x.id);
  const e_upd = waitForPaymentsenumpaymentmethodUpdated(id);
  block(matchDeletePaymentsenumpaymentmethod(id), function () {
    verifyPaymentsenumpaymentmethodUpdated(id);
  });
  deletePaymentsenumpaymentmethod(x.id);
  const e_del = waitForPaymentsenumpaymentmethodDeleted(id);
  block(matchAddPaymentsenumpaymentmethod(id), function () {
    verifyPaymentsenumpaymentmethodDoesNotExist(id);
  });
});

bthread("PaymentsenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPaymentsenumstatus(x.id);
  const e_add = waitForPaymentsenumstatusAdded(id);
  block(matchDeletePaymentsenumstatus(id), function () {
    verifyPaymentsenumstatusExists(id);
  });
  updatePaymentsenumstatus(x.id);
  updatePaymentsenumstatus(x.id);
  const e_upd = waitForPaymentsenumstatusUpdated(id);
  block(matchDeletePaymentsenumstatus(id), function () {
    verifyPaymentsenumstatusUpdated(id);
  });
  deletePaymentsenumstatus(x.id);
  const e_del = waitForPaymentsenumstatusDeleted(id);
  block(matchAddPaymentsenumstatus(id), function () {
    verifyPaymentsenumstatusDoesNotExist(id);
  });
});

bthread("PaymentsenumtokentypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPaymentsenumtokentype(x.id);
  const e_add = waitForPaymentsenumtokentypeAdded(id);
  block(matchDeletePaymentsenumtokentype(id), function () {
    verifyPaymentsenumtokentypeExists(id);
  });
  updatePaymentsenumtokentype(x.id);
  updatePaymentsenumtokentype(x.id);
  const e_upd = waitForPaymentsenumtokentypeUpdated(id);
  block(matchDeletePaymentsenumtokentype(id), function () {
    verifyPaymentsenumtokentypeUpdated(id);
  });
  deletePaymentsenumtokentype(x.id);
  const e_del = waitForPaymentsenumtokentypeDeleted(id);
  block(matchAddPaymentsenumtokentype(id), function () {
    verifyPaymentsenumtokentypeDoesNotExist(id);
  });
});

bthread("RealtimetranscriptionenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealtimetranscriptionenumstatus(x.id);
  const e_add = waitForRealtimetranscriptionenumstatusAdded(id);
  block(matchDeleteRealtimetranscriptionenumstatus(id), function () {
    verifyRealtimetranscriptionenumstatusExists(id);
  });
  updateRealtimetranscriptionenumstatus(x.id);
  updateRealtimetranscriptionenumstatus(x.id);
  const e_upd = waitForRealtimetranscriptionenumstatusUpdated(id);
  block(matchDeleteRealtimetranscriptionenumstatus(id), function () {
    verifyRealtimetranscriptionenumstatusUpdated(id);
  });
  deleteRealtimetranscriptionenumstatus(x.id);
  const e_del = waitForRealtimetranscriptionenumstatusDeleted(id);
  block(matchAddRealtimetranscriptionenumstatus(id), function () {
    verifyRealtimetranscriptionenumstatusDoesNotExist(id);
  });
});

bthread("RealtimetranscriptionenumtrackLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealtimetranscriptionenumtrack(x.id);
  const e_add = waitForRealtimetranscriptionenumtrackAdded(id);
  block(matchDeleteRealtimetranscriptionenumtrack(id), function () {
    verifyRealtimetranscriptionenumtrackExists(id);
  });
  updateRealtimetranscriptionenumtrack(x.id);
  updateRealtimetranscriptionenumtrack(x.id);
  const e_upd = waitForRealtimetranscriptionenumtrackUpdated(id);
  block(matchDeleteRealtimetranscriptionenumtrack(id), function () {
    verifyRealtimetranscriptionenumtrackUpdated(id);
  });
  deleteRealtimetranscriptionenumtrack(x.id);
  const e_del = waitForRealtimetranscriptionenumtrackDeleted(id);
  block(matchAddRealtimetranscriptionenumtrack(id), function () {
    verifyRealtimetranscriptionenumtrackDoesNotExist(id);
  });
});

bthread("RealtimetranscriptionenumupdatestatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealtimetranscriptionenumupdatestatus(x.id);
  const e_add = waitForRealtimetranscriptionenumupdatestatusAdded(id);
  block(matchDeleteRealtimetranscriptionenumupdatestatus(id), function () {
    verifyRealtimetranscriptionenumupdatestatusExists(id);
  });
  updateRealtimetranscriptionenumupdatestatus(x.id);
  updateRealtimetranscriptionenumupdatestatus(x.id);
  const e_upd = waitForRealtimetranscriptionenumupdatestatusUpdated(id);
  block(matchDeleteRealtimetranscriptionenumupdatestatus(id), function () {
    verifyRealtimetranscriptionenumupdatestatusUpdated(id);
  });
  deleteRealtimetranscriptionenumupdatestatus(x.id);
  const e_del = waitForRealtimetranscriptionenumupdatestatusDeleted(id);
  block(matchAddRealtimetranscriptionenumupdatestatus(id), function () {
    verifyRealtimetranscriptionenumupdatestatusDoesNotExist(id);
  });
});

bthread("RecordingaddonresultenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRecordingaddonresultenumstatus(x.id);
  const e_add = waitForRecordingaddonresultenumstatusAdded(id);
  block(matchDeleteRecordingaddonresultenumstatus(id), function () {
    verifyRecordingaddonresultenumstatusExists(id);
  });
  updateRecordingaddonresultenumstatus(x.id);
  updateRecordingaddonresultenumstatus(x.id);
  const e_upd = waitForRecordingaddonresultenumstatusUpdated(id);
  block(matchDeleteRecordingaddonresultenumstatus(id), function () {
    verifyRecordingaddonresultenumstatusUpdated(id);
  });
  deleteRecordingaddonresultenumstatus(x.id);
  const e_del = waitForRecordingaddonresultenumstatusDeleted(id);
  block(matchAddRecordingaddonresultenumstatus(id), function () {
    verifyRecordingaddonresultenumstatusDoesNotExist(id);
  });
});

bthread("RecordingenumsourceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRecordingenumsource(x.id);
  const e_add = waitForRecordingenumsourceAdded(id);
  block(matchDeleteRecordingenumsource(id), function () {
    verifyRecordingenumsourceExists(id);
  });
  updateRecordingenumsource(x.id);
  updateRecordingenumsource(x.id);
  const e_upd = waitForRecordingenumsourceUpdated(id);
  block(matchDeleteRecordingenumsource(id), function () {
    verifyRecordingenumsourceUpdated(id);
  });
  deleteRecordingenumsource(x.id);
  const e_del = waitForRecordingenumsourceDeleted(id);
  block(matchAddRecordingenumsource(id), function () {
    verifyRecordingenumsourceDoesNotExist(id);
  });
});

bthread("RecordingenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRecordingenumstatus(x.id);
  const e_add = waitForRecordingenumstatusAdded(id);
  block(matchDeleteRecordingenumstatus(id), function () {
    verifyRecordingenumstatusExists(id);
  });
  updateRecordingenumstatus(x.id);
  updateRecordingenumstatus(x.id);
  const e_upd = waitForRecordingenumstatusUpdated(id);
  block(matchDeleteRecordingenumstatus(id), function () {
    verifyRecordingenumstatusUpdated(id);
  });
  deleteRecordingenumstatus(x.id);
  const e_del = waitForRecordingenumstatusDeleted(id);
  block(matchAddRecordingenumstatus(id), function () {
    verifyRecordingenumstatusDoesNotExist(id);
  });
});

bthread("RecordingtranscriptionenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRecordingtranscriptionenumstatus(x.id);
  const e_add = waitForRecordingtranscriptionenumstatusAdded(id);
  block(matchDeleteRecordingtranscriptionenumstatus(id), function () {
    verifyRecordingtranscriptionenumstatusExists(id);
  });
  updateRecordingtranscriptionenumstatus(x.id);
  updateRecordingtranscriptionenumstatus(x.id);
  const e_upd = waitForRecordingtranscriptionenumstatusUpdated(id);
  block(matchDeleteRecordingtranscriptionenumstatus(id), function () {
    verifyRecordingtranscriptionenumstatusUpdated(id);
  });
  deleteRecordingtranscriptionenumstatus(x.id);
  const e_del = waitForRecordingtranscriptionenumstatusDeleted(id);
  block(matchAddRecordingtranscriptionenumstatus(id), function () {
    verifyRecordingtranscriptionenumstatusDoesNotExist(id);
  });
});

bthread("SiprecenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSiprecenumstatus(x.id);
  const e_add = waitForSiprecenumstatusAdded(id);
  block(matchDeleteSiprecenumstatus(id), function () {
    verifySiprecenumstatusExists(id);
  });
  updateSiprecenumstatus(x.id);
  updateSiprecenumstatus(x.id);
  const e_upd = waitForSiprecenumstatusUpdated(id);
  block(matchDeleteSiprecenumstatus(id), function () {
    verifySiprecenumstatusUpdated(id);
  });
  deleteSiprecenumstatus(x.id);
  const e_del = waitForSiprecenumstatusDeleted(id);
  block(matchAddSiprecenumstatus(id), function () {
    verifySiprecenumstatusDoesNotExist(id);
  });
});

bthread("SiprecenumtrackLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSiprecenumtrack(x.id);
  const e_add = waitForSiprecenumtrackAdded(id);
  block(matchDeleteSiprecenumtrack(id), function () {
    verifySiprecenumtrackExists(id);
  });
  updateSiprecenumtrack(x.id);
  updateSiprecenumtrack(x.id);
  const e_upd = waitForSiprecenumtrackUpdated(id);
  block(matchDeleteSiprecenumtrack(id), function () {
    verifySiprecenumtrackUpdated(id);
  });
  deleteSiprecenumtrack(x.id);
  const e_del = waitForSiprecenumtrackDeleted(id);
  block(matchAddSiprecenumtrack(id), function () {
    verifySiprecenumtrackDoesNotExist(id);
  });
});

bthread("SiprecenumupdatestatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSiprecenumupdatestatus(x.id);
  const e_add = waitForSiprecenumupdatestatusAdded(id);
  block(matchDeleteSiprecenumupdatestatus(id), function () {
    verifySiprecenumupdatestatusExists(id);
  });
  updateSiprecenumupdatestatus(x.id);
  updateSiprecenumupdatestatus(x.id);
  const e_upd = waitForSiprecenumupdatestatusUpdated(id);
  block(matchDeleteSiprecenumupdatestatus(id), function () {
    verifySiprecenumupdatestatusUpdated(id);
  });
  deleteSiprecenumupdatestatus(x.id);
  const e_del = waitForSiprecenumupdatestatusDeleted(id);
  block(matchAddSiprecenumupdatestatus(id), function () {
    verifySiprecenumupdatestatusDoesNotExist(id);
  });
});

bthread("SmsfeedbackenumoutcomeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSmsfeedbackenumoutcome(x.id);
  const e_add = waitForSmsfeedbackenumoutcomeAdded(id);
  block(matchDeleteSmsfeedbackenumoutcome(id), function () {
    verifySmsfeedbackenumoutcomeExists(id);
  });
  updateSmsfeedbackenumoutcome(x.id);
  updateSmsfeedbackenumoutcome(x.id);
  const e_upd = waitForSmsfeedbackenumoutcomeUpdated(id);
  block(matchDeleteSmsfeedbackenumoutcome(id), function () {
    verifySmsfeedbackenumoutcomeUpdated(id);
  });
  deleteSmsfeedbackenumoutcome(x.id);
  const e_del = waitForSmsfeedbackenumoutcomeDeleted(id);
  block(matchAddSmsfeedbackenumoutcome(id), function () {
    verifySmsfeedbackenumoutcomeDoesNotExist(id);
  });
});

bthread("SmsmessageenumdirectionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSmsmessageenumdirection(x.id);
  const e_add = waitForSmsmessageenumdirectionAdded(id);
  block(matchDeleteSmsmessageenumdirection(id), function () {
    verifySmsmessageenumdirectionExists(id);
  });
  updateSmsmessageenumdirection(x.id);
  updateSmsmessageenumdirection(x.id);
  const e_upd = waitForSmsmessageenumdirectionUpdated(id);
  block(matchDeleteSmsmessageenumdirection(id), function () {
    verifySmsmessageenumdirectionUpdated(id);
  });
  deleteSmsmessageenumdirection(x.id);
  const e_del = waitForSmsmessageenumdirectionDeleted(id);
  block(matchAddSmsmessageenumdirection(id), function () {
    verifySmsmessageenumdirectionDoesNotExist(id);
  });
});

bthread("SmsmessageenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSmsmessageenumstatus(x.id);
  const e_add = waitForSmsmessageenumstatusAdded(id);
  block(matchDeleteSmsmessageenumstatus(id), function () {
    verifySmsmessageenumstatusExists(id);
  });
  updateSmsmessageenumstatus(x.id);
  updateSmsmessageenumstatus(x.id);
  const e_upd = waitForSmsmessageenumstatusUpdated(id);
  block(matchDeleteSmsmessageenumstatus(id), function () {
    verifySmsmessageenumstatusUpdated(id);
  });
  deleteSmsmessageenumstatus(x.id);
  const e_del = waitForSmsmessageenumstatusDeleted(id);
  block(matchAddSmsmessageenumstatus(id), function () {
    verifySmsmessageenumstatusDoesNotExist(id);
  });
});

bthread("StreamenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStreamenumstatus(x.id);
  const e_add = waitForStreamenumstatusAdded(id);
  block(matchDeleteStreamenumstatus(id), function () {
    verifyStreamenumstatusExists(id);
  });
  updateStreamenumstatus(x.id);
  updateStreamenumstatus(x.id);
  const e_upd = waitForStreamenumstatusUpdated(id);
  block(matchDeleteStreamenumstatus(id), function () {
    verifyStreamenumstatusUpdated(id);
  });
  deleteStreamenumstatus(x.id);
  const e_del = waitForStreamenumstatusDeleted(id);
  block(matchAddStreamenumstatus(id), function () {
    verifyStreamenumstatusDoesNotExist(id);
  });
});

bthread("StreamenumtrackLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStreamenumtrack(x.id);
  const e_add = waitForStreamenumtrackAdded(id);
  block(matchDeleteStreamenumtrack(id), function () {
    verifyStreamenumtrackExists(id);
  });
  updateStreamenumtrack(x.id);
  updateStreamenumtrack(x.id);
  const e_upd = waitForStreamenumtrackUpdated(id);
  block(matchDeleteStreamenumtrack(id), function () {
    verifyStreamenumtrackUpdated(id);
  });
  deleteStreamenumtrack(x.id);
  const e_del = waitForStreamenumtrackDeleted(id);
  block(matchAddStreamenumtrack(id), function () {
    verifyStreamenumtrackDoesNotExist(id);
  });
});

bthread("StreamenumupdatestatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStreamenumupdatestatus(x.id);
  const e_add = waitForStreamenumupdatestatusAdded(id);
  block(matchDeleteStreamenumupdatestatus(id), function () {
    verifyStreamenumupdatestatusExists(id);
  });
  updateStreamenumupdatestatus(x.id);
  updateStreamenumupdatestatus(x.id);
  const e_upd = waitForStreamenumupdatestatusUpdated(id);
  block(matchDeleteStreamenumupdatestatus(id), function () {
    verifyStreamenumupdatestatusUpdated(id);
  });
  deleteStreamenumupdatestatus(x.id);
  const e_del = waitForStreamenumupdatestatusDeleted(id);
  block(matchAddStreamenumupdatestatus(id), function () {
    verifyStreamenumupdatestatusDoesNotExist(id);
  });
});

bthread("TranscriptionenumstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTranscriptionenumstatus(x.id);
  const e_add = waitForTranscriptionenumstatusAdded(id);
  block(matchDeleteTranscriptionenumstatus(id), function () {
    verifyTranscriptionenumstatusExists(id);
  });
  updateTranscriptionenumstatus(x.id);
  updateTranscriptionenumstatus(x.id);
  const e_upd = waitForTranscriptionenumstatusUpdated(id);
  block(matchDeleteTranscriptionenumstatus(id), function () {
    verifyTranscriptionenumstatusUpdated(id);
  });
  deleteTranscriptionenumstatus(x.id);
  const e_del = waitForTranscriptionenumstatusDeleted(id);
  block(matchAddTranscriptionenumstatus(id), function () {
    verifyTranscriptionenumstatusDoesNotExist(id);
  });
});

bthread("UsagetriggerenumrecurringLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsagetriggerenumrecurring(x.id);
  const e_add = waitForUsagetriggerenumrecurringAdded(id);
  block(matchDeleteUsagetriggerenumrecurring(id), function () {
    verifyUsagetriggerenumrecurringExists(id);
  });
  updateUsagetriggerenumrecurring(x.id);
  updateUsagetriggerenumrecurring(x.id);
  const e_upd = waitForUsagetriggerenumrecurringUpdated(id);
  block(matchDeleteUsagetriggerenumrecurring(id), function () {
    verifyUsagetriggerenumrecurringUpdated(id);
  });
  deleteUsagetriggerenumrecurring(x.id);
  const e_del = waitForUsagetriggerenumrecurringDeleted(id);
  block(matchAddUsagetriggerenumrecurring(id), function () {
    verifyUsagetriggerenumrecurringDoesNotExist(id);
  });
});

bthread("UsagetriggerenumtriggerfieldLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsagetriggerenumtriggerfield(x.id);
  const e_add = waitForUsagetriggerenumtriggerfieldAdded(id);
  block(matchDeleteUsagetriggerenumtriggerfield(id), function () {
    verifyUsagetriggerenumtriggerfieldExists(id);
  });
  updateUsagetriggerenumtriggerfield(x.id);
  updateUsagetriggerenumtriggerfield(x.id);
  const e_upd = waitForUsagetriggerenumtriggerfieldUpdated(id);
  block(matchDeleteUsagetriggerenumtriggerfield(id), function () {
    verifyUsagetriggerenumtriggerfieldUpdated(id);
  });
  deleteUsagetriggerenumtriggerfield(x.id);
  const e_del = waitForUsagetriggerenumtriggerfieldDeleted(id);
  block(matchAddUsagetriggerenumtriggerfield(id), function () {
    verifyUsagetriggerenumtriggerfieldDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Accountenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAccountenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateAccountenumstatus(x.id);
  }
  if (pick([true,false])) { deleteAccountenumstatus(x.id); }
  verifyAccountenumstatusExists(x.id);
  verifyAccountenumstatusUpdated(x.id);
});

bthread("Accountenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAccountenumstatus(a.id);
  block(matchAddAccountenumstatus(a.id, ANY), function () {});
  addAccountenumstatus(b.id);
});

bthread("Accountenumtype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAccountenumtype(x.id);
  for (var i=0; i<steps; i++) {
    updateAccountenumtype(x.id);
  }
  if (pick([true,false])) { deleteAccountenumtype(x.id); }
  verifyAccountenumtypeExists(x.id);
  verifyAccountenumtypeUpdated(x.id);
});

bthread("Accountenumtype nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAccountenumtype(a.id);
  block(matchAddAccountenumtype(a.id, ANY), function () {});
  addAccountenumtype(b.id);
});

bthread("Apiv2010account nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010account(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010account(x.id);
  }
  if (pick([true,false])) { deleteApiv2010account(x.id); }
  verifyApiv2010accountExists(x.id);
  verifyApiv2010accountUpdated(x.id);
});

bthread("Apiv2010account nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010account(a.id);
  block(matchAddApiv2010account(a.id, ANY), function () {});
  addApiv2010account(b.id);
});

bthread("Apiv2010accountaddress nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountaddress(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountaddress(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountaddress(x.id); }
  verifyApiv2010accountaddressExists(x.id);
  verifyApiv2010accountaddressUpdated(x.id);
});

bthread("Apiv2010accountaddress nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountaddress(a.id);
  block(matchAddApiv2010accountaddress(a.id, ANY), function () {});
  addApiv2010accountaddress(b.id);
});

bthread("Apiv2010accountaddressdependentphonenumber nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountaddressdependentphonenumber(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountaddressdependentphonenumber(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountaddressdependentphonenumber(x.id); }
  verifyApiv2010accountaddressdependentphonenumberExists(x.id);
  verifyApiv2010accountaddressdependentphonenumberUpdated(x.id);
});

bthread("Apiv2010accountaddressdependentphonenumber nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountaddressdependentphonenumber(a.id);
  block(matchAddApiv2010accountaddressdependentphonenumber(a.id, ANY), function () {});
  addApiv2010accountaddressdependentphonenumber(b.id);
});

bthread("Apiv2010accountapplication nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountapplication(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountapplication(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountapplication(x.id); }
  verifyApiv2010accountapplicationExists(x.id);
  verifyApiv2010accountapplicationUpdated(x.id);
});

bthread("Apiv2010accountapplication nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountapplication(a.id);
  block(matchAddApiv2010accountapplication(a.id, ANY), function () {});
  addApiv2010accountapplication(b.id);
});

bthread("Apiv2010accountauthorizedconnectapp nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountauthorizedconnectapp(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountauthorizedconnectapp(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountauthorizedconnectapp(x.id); }
  verifyApiv2010accountauthorizedconnectappExists(x.id);
  verifyApiv2010accountauthorizedconnectappUpdated(x.id);
});

bthread("Apiv2010accountauthorizedconnectapp nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountauthorizedconnectapp(a.id);
  block(matchAddApiv2010accountauthorizedconnectapp(a.id, ANY), function () {});
  addApiv2010accountauthorizedconnectapp(b.id);
});

bthread("Apiv2010accountavailablephonenumbercountry nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountavailablephonenumbercountry(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountavailablephonenumbercountry(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountavailablephonenumbercountry(x.id); }
  verifyApiv2010accountavailablephonenumbercountryExists(x.id);
  verifyApiv2010accountavailablephonenumbercountryUpdated(x.id);
});

bthread("Apiv2010accountavailablephonenumbercountry nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountavailablephonenumbercountry(a.id);
  block(matchAddApiv2010accountavailablephonenumbercountry(a.id, ANY), function () {});
  addApiv2010accountavailablephonenumbercountry(b.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumberlocal nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(x.id); }
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumberlocalExists(x.id);
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumberlocalUpdated(x.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumberlocal nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(a.id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(a.id, ANY), function () {});
  addApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(b.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(x.id); }
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineExists(x.id);
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineUpdated(x.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(a.id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(a.id, ANY), function () {});
  addApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(b.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbermobile nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(x.id); }
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermobileExists(x.id);
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermobileUpdated(x.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbermobile nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(a.id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(a.id, ANY), function () {});
  addApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(b.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbernational nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountavailablephonenumbercountryavailablephonenumbernational(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountavailablephonenumbercountryavailablephonenumbernational(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountavailablephonenumbercountryavailablephonenumbernational(x.id); }
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumbernationalExists(x.id);
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumbernationalUpdated(x.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbernational nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountavailablephonenumbercountryavailablephonenumbernational(a.id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbernational(a.id, ANY), function () {});
  addApiv2010accountavailablephonenumbercountryavailablephonenumbernational(b.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(x.id); }
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostExists(x.id);
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostUpdated(x.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(a.id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(a.id, ANY), function () {});
  addApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(b.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbertollfree nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(x.id); }
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeExists(x.id);
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeUpdated(x.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbertollfree nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(a.id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(a.id, ANY), function () {});
  addApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(b.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbervoip nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(x.id); }
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumbervoipExists(x.id);
  verifyApiv2010accountavailablephonenumbercountryavailablephonenumbervoipUpdated(x.id);
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbervoip nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(a.id);
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(a.id, ANY), function () {});
  addApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(b.id);
});

bthread("Apiv2010accountbalance nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountbalance(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountbalance(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountbalance(x.id); }
  verifyApiv2010accountbalanceExists(x.id);
  verifyApiv2010accountbalanceUpdated(x.id);
});

bthread("Apiv2010accountbalance nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountbalance(a.id);
  block(matchAddApiv2010accountbalance(a.id, ANY), function () {});
  addApiv2010accountbalance(b.id);
});

bthread("Apiv2010accountcall nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountcall(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountcall(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountcall(x.id); }
  verifyApiv2010accountcallExists(x.id);
  verifyApiv2010accountcallUpdated(x.id);
});

bthread("Apiv2010accountcall nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountcall(a.id);
  block(matchAddApiv2010accountcall(a.id, ANY), function () {});
  addApiv2010accountcall(b.id);
});

bthread("Apiv2010accountcallcallevent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountcallcallevent(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountcallcallevent(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountcallcallevent(x.id); }
  verifyApiv2010accountcallcalleventExists(x.id);
  verifyApiv2010accountcallcalleventUpdated(x.id);
});

bthread("Apiv2010accountcallcallevent nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountcallcallevent(a.id);
  block(matchAddApiv2010accountcallcallevent(a.id, ANY), function () {});
  addApiv2010accountcallcallevent(b.id);
});

bthread("Apiv2010accountcallcallnotification nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountcallcallnotification(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountcallcallnotification(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountcallcallnotification(x.id); }
  verifyApiv2010accountcallcallnotificationExists(x.id);
  verifyApiv2010accountcallcallnotificationUpdated(x.id);
});

bthread("Apiv2010accountcallcallnotification nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountcallcallnotification(a.id);
  block(matchAddApiv2010accountcallcallnotification(a.id, ANY), function () {});
  addApiv2010accountcallcallnotification(b.id);
});

bthread("Apiv2010accountcallcallnotificationinstance nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountcallcallnotificationinstance(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountcallcallnotificationinstance(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountcallcallnotificationinstance(x.id); }
  verifyApiv2010accountcallcallnotificationinstanceExists(x.id);
  verifyApiv2010accountcallcallnotificationinstanceUpdated(x.id);
});

bthread("Apiv2010accountcallcallnotificationinstance nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountcallcallnotificationinstance(a.id);
  block(matchAddApiv2010accountcallcallnotificationinstance(a.id, ANY), function () {});
  addApiv2010accountcallcallnotificationinstance(b.id);
});

bthread("Apiv2010accountcallcallrecording nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountcallcallrecording(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountcallcallrecording(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountcallcallrecording(x.id); }
  verifyApiv2010accountcallcallrecordingExists(x.id);
  verifyApiv2010accountcallcallrecordingUpdated(x.id);
});

bthread("Apiv2010accountcallcallrecording nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountcallcallrecording(a.id);
  block(matchAddApiv2010accountcallcallrecording(a.id, ANY), function () {});
  addApiv2010accountcallcallrecording(b.id);
});

bthread("Apiv2010accountcallpayments nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountcallpayments(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountcallpayments(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountcallpayments(x.id); }
  verifyApiv2010accountcallpaymentsExists(x.id);
  verifyApiv2010accountcallpaymentsUpdated(x.id);
});

bthread("Apiv2010accountcallpayments nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountcallpayments(a.id);
  block(matchAddApiv2010accountcallpayments(a.id, ANY), function () {});
  addApiv2010accountcallpayments(b.id);
});

bthread("Apiv2010accountcallrealtimetranscription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountcallrealtimetranscription(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountcallrealtimetranscription(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountcallrealtimetranscription(x.id); }
  verifyApiv2010accountcallrealtimetranscriptionExists(x.id);
  verifyApiv2010accountcallrealtimetranscriptionUpdated(x.id);
});

bthread("Apiv2010accountcallrealtimetranscription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountcallrealtimetranscription(a.id);
  block(matchAddApiv2010accountcallrealtimetranscription(a.id, ANY), function () {});
  addApiv2010accountcallrealtimetranscription(b.id);
});

bthread("Apiv2010accountcallsiprec nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountcallsiprec(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountcallsiprec(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountcallsiprec(x.id); }
  verifyApiv2010accountcallsiprecExists(x.id);
  verifyApiv2010accountcallsiprecUpdated(x.id);
});

bthread("Apiv2010accountcallsiprec nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountcallsiprec(a.id);
  block(matchAddApiv2010accountcallsiprec(a.id, ANY), function () {});
  addApiv2010accountcallsiprec(b.id);
});

bthread("Apiv2010accountcallstream nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountcallstream(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountcallstream(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountcallstream(x.id); }
  verifyApiv2010accountcallstreamExists(x.id);
  verifyApiv2010accountcallstreamUpdated(x.id);
});

bthread("Apiv2010accountcallstream nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountcallstream(a.id);
  block(matchAddApiv2010accountcallstream(a.id, ANY), function () {});
  addApiv2010accountcallstream(b.id);
});

bthread("Apiv2010accountcalluserdefinedmessage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountcalluserdefinedmessage(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountcalluserdefinedmessage(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountcalluserdefinedmessage(x.id); }
  verifyApiv2010accountcalluserdefinedmessageExists(x.id);
  verifyApiv2010accountcalluserdefinedmessageUpdated(x.id);
});

bthread("Apiv2010accountcalluserdefinedmessage nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountcalluserdefinedmessage(a.id);
  block(matchAddApiv2010accountcalluserdefinedmessage(a.id, ANY), function () {});
  addApiv2010accountcalluserdefinedmessage(b.id);
});

bthread("Apiv2010accountcalluserdefinedmessagesubscription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountcalluserdefinedmessagesubscription(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountcalluserdefinedmessagesubscription(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountcalluserdefinedmessagesubscription(x.id); }
  verifyApiv2010accountcalluserdefinedmessagesubscriptionExists(x.id);
  verifyApiv2010accountcalluserdefinedmessagesubscriptionUpdated(x.id);
});

bthread("Apiv2010accountcalluserdefinedmessagesubscription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountcalluserdefinedmessagesubscription(a.id);
  block(matchAddApiv2010accountcalluserdefinedmessagesubscription(a.id, ANY), function () {});
  addApiv2010accountcalluserdefinedmessagesubscription(b.id);
});

bthread("Apiv2010accountconference nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountconference(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountconference(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountconference(x.id); }
  verifyApiv2010accountconferenceExists(x.id);
  verifyApiv2010accountconferenceUpdated(x.id);
});

bthread("Apiv2010accountconference nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountconference(a.id);
  block(matchAddApiv2010accountconference(a.id, ANY), function () {});
  addApiv2010accountconference(b.id);
});

bthread("Apiv2010accountconferenceconferencerecording nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountconferenceconferencerecording(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountconferenceconferencerecording(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountconferenceconferencerecording(x.id); }
  verifyApiv2010accountconferenceconferencerecordingExists(x.id);
  verifyApiv2010accountconferenceconferencerecordingUpdated(x.id);
});

bthread("Apiv2010accountconferenceconferencerecording nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountconferenceconferencerecording(a.id);
  block(matchAddApiv2010accountconferenceconferencerecording(a.id, ANY), function () {});
  addApiv2010accountconferenceconferencerecording(b.id);
});

bthread("Apiv2010accountconferenceparticipant nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountconferenceparticipant(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountconferenceparticipant(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountconferenceparticipant(x.id); }
  verifyApiv2010accountconferenceparticipantExists(x.id);
  verifyApiv2010accountconferenceparticipantUpdated(x.id);
});

bthread("Apiv2010accountconferenceparticipant nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountconferenceparticipant(a.id);
  block(matchAddApiv2010accountconferenceparticipant(a.id, ANY), function () {});
  addApiv2010accountconferenceparticipant(b.id);
});

bthread("Apiv2010accountconnectapp nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountconnectapp(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountconnectapp(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountconnectapp(x.id); }
  verifyApiv2010accountconnectappExists(x.id);
  verifyApiv2010accountconnectappUpdated(x.id);
});

bthread("Apiv2010accountconnectapp nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountconnectapp(a.id);
  block(matchAddApiv2010accountconnectapp(a.id, ANY), function () {});
  addApiv2010accountconnectapp(b.id);
});

bthread("Apiv2010accountincomingphonenumber nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountincomingphonenumber(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountincomingphonenumber(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountincomingphonenumber(x.id); }
  verifyApiv2010accountincomingphonenumberExists(x.id);
  verifyApiv2010accountincomingphonenumberUpdated(x.id);
});

bthread("Apiv2010accountincomingphonenumber nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountincomingphonenumber(a.id);
  block(matchAddApiv2010accountincomingphonenumber(a.id, ANY), function () {});
  addApiv2010accountincomingphonenumber(b.id);
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberassignedaddon nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(x.id); }
  verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonExists(x.id);
  verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonUpdated(x.id);
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberassignedaddon nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(a.id);
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(a.id, ANY), function () {});
  addApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(b.id);
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(x.id); }
  verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionExists(x.id);
  verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionUpdated(x.id);
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(a.id);
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(a.id, ANY), function () {});
  addApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(b.id);
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberlocal nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountincomingphonenumberincomingphonenumberlocal(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountincomingphonenumberincomingphonenumberlocal(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountincomingphonenumberincomingphonenumberlocal(x.id); }
  verifyApiv2010accountincomingphonenumberincomingphonenumberlocalExists(x.id);
  verifyApiv2010accountincomingphonenumberincomingphonenumberlocalUpdated(x.id);
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberlocal nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountincomingphonenumberincomingphonenumberlocal(a.id);
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumberlocal(a.id, ANY), function () {});
  addApiv2010accountincomingphonenumberincomingphonenumberlocal(b.id);
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumbermobile nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountincomingphonenumberincomingphonenumbermobile(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountincomingphonenumberincomingphonenumbermobile(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountincomingphonenumberincomingphonenumbermobile(x.id); }
  verifyApiv2010accountincomingphonenumberincomingphonenumbermobileExists(x.id);
  verifyApiv2010accountincomingphonenumberincomingphonenumbermobileUpdated(x.id);
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumbermobile nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountincomingphonenumberincomingphonenumbermobile(a.id);
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumbermobile(a.id, ANY), function () {});
  addApiv2010accountincomingphonenumberincomingphonenumbermobile(b.id);
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumbertollfree nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountincomingphonenumberincomingphonenumbertollfree(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountincomingphonenumberincomingphonenumbertollfree(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountincomingphonenumberincomingphonenumbertollfree(x.id); }
  verifyApiv2010accountincomingphonenumberincomingphonenumbertollfreeExists(x.id);
  verifyApiv2010accountincomingphonenumberincomingphonenumbertollfreeUpdated(x.id);
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumbertollfree nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountincomingphonenumberincomingphonenumbertollfree(a.id);
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumbertollfree(a.id, ANY), function () {});
  addApiv2010accountincomingphonenumberincomingphonenumbertollfree(b.id);
});

bthread("Apiv2010accountkey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountkey(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountkey(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountkey(x.id); }
  verifyApiv2010accountkeyExists(x.id);
  verifyApiv2010accountkeyUpdated(x.id);
});

bthread("Apiv2010accountkey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountkey(a.id);
  block(matchAddApiv2010accountkey(a.id, ANY), function () {});
  addApiv2010accountkey(b.id);
});

bthread("Apiv2010accountmessage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountmessage(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountmessage(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountmessage(x.id); }
  verifyApiv2010accountmessageExists(x.id);
  verifyApiv2010accountmessageUpdated(x.id);
});

bthread("Apiv2010accountmessage nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountmessage(a.id);
  block(matchAddApiv2010accountmessage(a.id, ANY), function () {});
  addApiv2010accountmessage(b.id);
});

bthread("Apiv2010accountmessagemedia nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountmessagemedia(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountmessagemedia(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountmessagemedia(x.id); }
  verifyApiv2010accountmessagemediaExists(x.id);
  verifyApiv2010accountmessagemediaUpdated(x.id);
});

bthread("Apiv2010accountmessagemedia nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountmessagemedia(a.id);
  block(matchAddApiv2010accountmessagemedia(a.id, ANY), function () {});
  addApiv2010accountmessagemedia(b.id);
});

bthread("Apiv2010accountmessagemessagefeedback nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountmessagemessagefeedback(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountmessagemessagefeedback(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountmessagemessagefeedback(x.id); }
  verifyApiv2010accountmessagemessagefeedbackExists(x.id);
  verifyApiv2010accountmessagemessagefeedbackUpdated(x.id);
});

bthread("Apiv2010accountmessagemessagefeedback nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountmessagemessagefeedback(a.id);
  block(matchAddApiv2010accountmessagemessagefeedback(a.id, ANY), function () {});
  addApiv2010accountmessagemessagefeedback(b.id);
});

bthread("Apiv2010accountnewkey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountnewkey(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountnewkey(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountnewkey(x.id); }
  verifyApiv2010accountnewkeyExists(x.id);
  verifyApiv2010accountnewkeyUpdated(x.id);
});

bthread("Apiv2010accountnewkey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountnewkey(a.id);
  block(matchAddApiv2010accountnewkey(a.id, ANY), function () {});
  addApiv2010accountnewkey(b.id);
});

bthread("Apiv2010accountnewsigningkey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountnewsigningkey(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountnewsigningkey(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountnewsigningkey(x.id); }
  verifyApiv2010accountnewsigningkeyExists(x.id);
  verifyApiv2010accountnewsigningkeyUpdated(x.id);
});

bthread("Apiv2010accountnewsigningkey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountnewsigningkey(a.id);
  block(matchAddApiv2010accountnewsigningkey(a.id, ANY), function () {});
  addApiv2010accountnewsigningkey(b.id);
});

bthread("Apiv2010accountnotification nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountnotification(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountnotification(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountnotification(x.id); }
  verifyApiv2010accountnotificationExists(x.id);
  verifyApiv2010accountnotificationUpdated(x.id);
});

bthread("Apiv2010accountnotification nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountnotification(a.id);
  block(matchAddApiv2010accountnotification(a.id, ANY), function () {});
  addApiv2010accountnotification(b.id);
});

bthread("Apiv2010accountnotificationinstance nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountnotificationinstance(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountnotificationinstance(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountnotificationinstance(x.id); }
  verifyApiv2010accountnotificationinstanceExists(x.id);
  verifyApiv2010accountnotificationinstanceUpdated(x.id);
});

bthread("Apiv2010accountnotificationinstance nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountnotificationinstance(a.id);
  block(matchAddApiv2010accountnotificationinstance(a.id, ANY), function () {});
  addApiv2010accountnotificationinstance(b.id);
});

bthread("Apiv2010accountoutgoingcallerid nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountoutgoingcallerid(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountoutgoingcallerid(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountoutgoingcallerid(x.id); }
  verifyApiv2010accountoutgoingcalleridExists(x.id);
  verifyApiv2010accountoutgoingcalleridUpdated(x.id);
});

bthread("Apiv2010accountoutgoingcallerid nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountoutgoingcallerid(a.id);
  block(matchAddApiv2010accountoutgoingcallerid(a.id, ANY), function () {});
  addApiv2010accountoutgoingcallerid(b.id);
});

bthread("Apiv2010accountqueue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountqueue(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountqueue(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountqueue(x.id); }
  verifyApiv2010accountqueueExists(x.id);
  verifyApiv2010accountqueueUpdated(x.id);
});

bthread("Apiv2010accountqueue nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountqueue(a.id);
  block(matchAddApiv2010accountqueue(a.id, ANY), function () {});
  addApiv2010accountqueue(b.id);
});

bthread("Apiv2010accountqueuemember nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountqueuemember(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountqueuemember(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountqueuemember(x.id); }
  verifyApiv2010accountqueuememberExists(x.id);
  verifyApiv2010accountqueuememberUpdated(x.id);
});

bthread("Apiv2010accountqueuemember nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountqueuemember(a.id);
  block(matchAddApiv2010accountqueuemember(a.id, ANY), function () {});
  addApiv2010accountqueuemember(b.id);
});

bthread("Apiv2010accountrecording nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountrecording(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountrecording(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountrecording(x.id); }
  verifyApiv2010accountrecordingExists(x.id);
  verifyApiv2010accountrecordingUpdated(x.id);
});

bthread("Apiv2010accountrecording nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountrecording(a.id);
  block(matchAddApiv2010accountrecording(a.id, ANY), function () {});
  addApiv2010accountrecording(b.id);
});

bthread("Apiv2010accountrecordingrecordingaddonresult nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountrecordingrecordingaddonresult(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountrecordingrecordingaddonresult(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountrecordingrecordingaddonresult(x.id); }
  verifyApiv2010accountrecordingrecordingaddonresultExists(x.id);
  verifyApiv2010accountrecordingrecordingaddonresultUpdated(x.id);
});

bthread("Apiv2010accountrecordingrecordingaddonresult nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountrecordingrecordingaddonresult(a.id);
  block(matchAddApiv2010accountrecordingrecordingaddonresult(a.id, ANY), function () {});
  addApiv2010accountrecordingrecordingaddonresult(b.id);
});

bthread("Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(x.id); }
  verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadExists(x.id);
  verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadUpdated(x.id);
});

bthread("Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(a.id);
  block(matchAddApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(a.id, ANY), function () {});
  addApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(b.id);
});

bthread("Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(x.id); }
  verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataExists(x.id);
  verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataUpdated(x.id);
});

bthread("Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(a.id);
  block(matchAddApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(a.id, ANY), function () {});
  addApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(b.id);
});

bthread("Apiv2010accountrecordingrecordingtranscription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountrecordingrecordingtranscription(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountrecordingrecordingtranscription(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountrecordingrecordingtranscription(x.id); }
  verifyApiv2010accountrecordingrecordingtranscriptionExists(x.id);
  verifyApiv2010accountrecordingrecordingtranscriptionUpdated(x.id);
});

bthread("Apiv2010accountrecordingrecordingtranscription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountrecordingrecordingtranscription(a.id);
  block(matchAddApiv2010accountrecordingrecordingtranscription(a.id, ANY), function () {});
  addApiv2010accountrecordingrecordingtranscription(b.id);
});

bthread("Apiv2010accountshortcode nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountshortcode(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountshortcode(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountshortcode(x.id); }
  verifyApiv2010accountshortcodeExists(x.id);
  verifyApiv2010accountshortcodeUpdated(x.id);
});

bthread("Apiv2010accountshortcode nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountshortcode(a.id);
  block(matchAddApiv2010accountshortcode(a.id, ANY), function () {});
  addApiv2010accountshortcode(b.id);
});

bthread("Apiv2010accountsigningkey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsigningkey(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsigningkey(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsigningkey(x.id); }
  verifyApiv2010accountsigningkeyExists(x.id);
  verifyApiv2010accountsigningkeyUpdated(x.id);
});

bthread("Apiv2010accountsigningkey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsigningkey(a.id);
  block(matchAddApiv2010accountsigningkey(a.id, ANY), function () {});
  addApiv2010accountsigningkey(b.id);
});

bthread("Apiv2010accountsip nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsip(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsip(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsip(x.id); }
  verifyApiv2010accountsipExists(x.id);
  verifyApiv2010accountsipUpdated(x.id);
});

bthread("Apiv2010accountsip nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsip(a.id);
  block(matchAddApiv2010accountsip(a.id, ANY), function () {});
  addApiv2010accountsip(b.id);
});

bthread("Apiv2010accountsipsipcredentiallist nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipcredentiallist(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipcredentiallist(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipcredentiallist(x.id); }
  verifyApiv2010accountsipsipcredentiallistExists(x.id);
  verifyApiv2010accountsipsipcredentiallistUpdated(x.id);
});

bthread("Apiv2010accountsipsipcredentiallist nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipcredentiallist(a.id);
  block(matchAddApiv2010accountsipsipcredentiallist(a.id, ANY), function () {});
  addApiv2010accountsipsipcredentiallist(b.id);
});

bthread("Apiv2010accountsipsipcredentiallistsipcredential nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipcredentiallistsipcredential(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipcredentiallistsipcredential(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipcredentiallistsipcredential(x.id); }
  verifyApiv2010accountsipsipcredentiallistsipcredentialExists(x.id);
  verifyApiv2010accountsipsipcredentiallistsipcredentialUpdated(x.id);
});

bthread("Apiv2010accountsipsipcredentiallistsipcredential nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipcredentiallistsipcredential(a.id);
  block(matchAddApiv2010accountsipsipcredentiallistsipcredential(a.id, ANY), function () {});
  addApiv2010accountsipsipcredentiallistsipcredential(b.id);
});

bthread("Apiv2010accountsipsipdomain nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipdomain(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipdomain(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipdomain(x.id); }
  verifyApiv2010accountsipsipdomainExists(x.id);
  verifyApiv2010accountsipsipdomainUpdated(x.id);
});

bthread("Apiv2010accountsipsipdomain nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipdomain(a.id);
  block(matchAddApiv2010accountsipsipdomain(a.id, ANY), function () {});
  addApiv2010accountsipsipdomain(b.id);
});

bthread("Apiv2010accountsipsipdomainsipauth nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipdomainsipauth(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipdomainsipauth(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipdomainsipauth(x.id); }
  verifyApiv2010accountsipsipdomainsipauthExists(x.id);
  verifyApiv2010accountsipsipdomainsipauthUpdated(x.id);
});

bthread("Apiv2010accountsipsipdomainsipauth nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipdomainsipauth(a.id);
  block(matchAddApiv2010accountsipsipdomainsipauth(a.id, ANY), function () {});
  addApiv2010accountsipsipdomainsipauth(b.id);
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcalls nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipdomainsipauthsipauthcalls(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipdomainsipauthsipauthcalls(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipdomainsipauthsipauthcalls(x.id); }
  verifyApiv2010accountsipsipdomainsipauthsipauthcallsExists(x.id);
  verifyApiv2010accountsipsipdomainsipauthsipauthcallsUpdated(x.id);
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcalls nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipdomainsipauthsipauthcalls(a.id);
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthcalls(a.id, ANY), function () {});
  addApiv2010accountsipsipdomainsipauthsipauthcalls(b.id);
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(x.id); }
  verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingExists(x.id);
  verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingUpdated(x.id);
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(a.id);
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(a.id, ANY), function () {});
  addApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(b.id);
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(x.id); }
  verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingExists(x.id);
  verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingUpdated(x.id);
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(a.id);
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(a.id, ANY), function () {});
  addApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(b.id);
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthregistrations nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipdomainsipauthsipauthregistrations(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipdomainsipauthsipauthregistrations(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipdomainsipauthsipauthregistrations(x.id); }
  verifyApiv2010accountsipsipdomainsipauthsipauthregistrationsExists(x.id);
  verifyApiv2010accountsipsipdomainsipauthsipauthregistrationsUpdated(x.id);
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthregistrations nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipdomainsipauthsipauthregistrations(a.id);
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthregistrations(a.id, ANY), function () {});
  addApiv2010accountsipsipdomainsipauthsipauthregistrations(b.id);
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(x.id); }
  verifyApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingExists(x.id);
  verifyApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingUpdated(x.id);
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(a.id);
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(a.id, ANY), function () {});
  addApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(b.id);
});

bthread("Apiv2010accountsipsipdomainsipcredentiallistmapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipdomainsipcredentiallistmapping(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipdomainsipcredentiallistmapping(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipdomainsipcredentiallistmapping(x.id); }
  verifyApiv2010accountsipsipdomainsipcredentiallistmappingExists(x.id);
  verifyApiv2010accountsipsipdomainsipcredentiallistmappingUpdated(x.id);
});

bthread("Apiv2010accountsipsipdomainsipcredentiallistmapping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipdomainsipcredentiallistmapping(a.id);
  block(matchAddApiv2010accountsipsipdomainsipcredentiallistmapping(a.id, ANY), function () {});
  addApiv2010accountsipsipdomainsipcredentiallistmapping(b.id);
});

bthread("Apiv2010accountsipsipdomainsipipaccesscontrollistmapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipdomainsipipaccesscontrollistmapping(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipdomainsipipaccesscontrollistmapping(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipdomainsipipaccesscontrollistmapping(x.id); }
  verifyApiv2010accountsipsipdomainsipipaccesscontrollistmappingExists(x.id);
  verifyApiv2010accountsipsipdomainsipipaccesscontrollistmappingUpdated(x.id);
});

bthread("Apiv2010accountsipsipdomainsipipaccesscontrollistmapping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipdomainsipipaccesscontrollistmapping(a.id);
  block(matchAddApiv2010accountsipsipdomainsipipaccesscontrollistmapping(a.id, ANY), function () {});
  addApiv2010accountsipsipdomainsipipaccesscontrollistmapping(b.id);
});

bthread("Apiv2010accountsipsipipaccesscontrollist nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipipaccesscontrollist(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipipaccesscontrollist(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipipaccesscontrollist(x.id); }
  verifyApiv2010accountsipsipipaccesscontrollistExists(x.id);
  verifyApiv2010accountsipsipipaccesscontrollistUpdated(x.id);
});

bthread("Apiv2010accountsipsipipaccesscontrollist nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipipaccesscontrollist(a.id);
  block(matchAddApiv2010accountsipsipipaccesscontrollist(a.id, ANY), function () {});
  addApiv2010accountsipsipipaccesscontrollist(b.id);
});

bthread("Apiv2010accountsipsipipaccesscontrollistsipipaddress nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountsipsipipaccesscontrollistsipipaddress(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountsipsipipaccesscontrollistsipipaddress(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountsipsipipaccesscontrollistsipipaddress(x.id); }
  verifyApiv2010accountsipsipipaccesscontrollistsipipaddressExists(x.id);
  verifyApiv2010accountsipsipipaccesscontrollistsipipaddressUpdated(x.id);
});

bthread("Apiv2010accountsipsipipaccesscontrollistsipipaddress nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountsipsipipaccesscontrollistsipipaddress(a.id);
  block(matchAddApiv2010accountsipsipipaccesscontrollistsipipaddress(a.id, ANY), function () {});
  addApiv2010accountsipsipipaccesscontrollistsipipaddress(b.id);
});

bthread("Apiv2010accounttoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accounttoken(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accounttoken(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accounttoken(x.id); }
  verifyApiv2010accounttokenExists(x.id);
  verifyApiv2010accounttokenUpdated(x.id);
});

bthread("Apiv2010accounttoken nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accounttoken(a.id);
  block(matchAddApiv2010accounttoken(a.id, ANY), function () {});
  addApiv2010accounttoken(b.id);
});

bthread("Apiv2010accounttranscription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accounttranscription(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accounttranscription(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accounttranscription(x.id); }
  verifyApiv2010accounttranscriptionExists(x.id);
  verifyApiv2010accounttranscriptionUpdated(x.id);
});

bthread("Apiv2010accounttranscription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accounttranscription(a.id);
  block(matchAddApiv2010accounttranscription(a.id, ANY), function () {});
  addApiv2010accounttranscription(b.id);
});

bthread("Apiv2010accountusage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountusage(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountusage(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountusage(x.id); }
  verifyApiv2010accountusageExists(x.id);
  verifyApiv2010accountusageUpdated(x.id);
});

bthread("Apiv2010accountusage nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountusage(a.id);
  block(matchAddApiv2010accountusage(a.id, ANY), function () {});
  addApiv2010accountusage(b.id);
});

bthread("Apiv2010accountusageusagerecord nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountusageusagerecord(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountusageusagerecord(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountusageusagerecord(x.id); }
  verifyApiv2010accountusageusagerecordExists(x.id);
  verifyApiv2010accountusageusagerecordUpdated(x.id);
});

bthread("Apiv2010accountusageusagerecord nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountusageusagerecord(a.id);
  block(matchAddApiv2010accountusageusagerecord(a.id, ANY), function () {});
  addApiv2010accountusageusagerecord(b.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordalltime nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountusageusagerecordusagerecordalltime(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountusageusagerecordusagerecordalltime(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountusageusagerecordusagerecordalltime(x.id); }
  verifyApiv2010accountusageusagerecordusagerecordalltimeExists(x.id);
  verifyApiv2010accountusageusagerecordusagerecordalltimeUpdated(x.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordalltime nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountusageusagerecordusagerecordalltime(a.id);
  block(matchAddApiv2010accountusageusagerecordusagerecordalltime(a.id, ANY), function () {});
  addApiv2010accountusageusagerecordusagerecordalltime(b.id);
});

bthread("Apiv2010accountusageusagerecordusagerecorddaily nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountusageusagerecordusagerecorddaily(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountusageusagerecordusagerecorddaily(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountusageusagerecordusagerecorddaily(x.id); }
  verifyApiv2010accountusageusagerecordusagerecorddailyExists(x.id);
  verifyApiv2010accountusageusagerecordusagerecorddailyUpdated(x.id);
});

bthread("Apiv2010accountusageusagerecordusagerecorddaily nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountusageusagerecordusagerecorddaily(a.id);
  block(matchAddApiv2010accountusageusagerecordusagerecorddaily(a.id, ANY), function () {});
  addApiv2010accountusageusagerecordusagerecorddaily(b.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordlastmonth nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountusageusagerecordusagerecordlastmonth(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountusageusagerecordusagerecordlastmonth(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountusageusagerecordusagerecordlastmonth(x.id); }
  verifyApiv2010accountusageusagerecordusagerecordlastmonthExists(x.id);
  verifyApiv2010accountusageusagerecordusagerecordlastmonthUpdated(x.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordlastmonth nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountusageusagerecordusagerecordlastmonth(a.id);
  block(matchAddApiv2010accountusageusagerecordusagerecordlastmonth(a.id, ANY), function () {});
  addApiv2010accountusageusagerecordusagerecordlastmonth(b.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordmonthly nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountusageusagerecordusagerecordmonthly(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountusageusagerecordusagerecordmonthly(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountusageusagerecordusagerecordmonthly(x.id); }
  verifyApiv2010accountusageusagerecordusagerecordmonthlyExists(x.id);
  verifyApiv2010accountusageusagerecordusagerecordmonthlyUpdated(x.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordmonthly nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountusageusagerecordusagerecordmonthly(a.id);
  block(matchAddApiv2010accountusageusagerecordusagerecordmonthly(a.id, ANY), function () {});
  addApiv2010accountusageusagerecordusagerecordmonthly(b.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordthismonth nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountusageusagerecordusagerecordthismonth(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountusageusagerecordusagerecordthismonth(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountusageusagerecordusagerecordthismonth(x.id); }
  verifyApiv2010accountusageusagerecordusagerecordthismonthExists(x.id);
  verifyApiv2010accountusageusagerecordusagerecordthismonthUpdated(x.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordthismonth nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountusageusagerecordusagerecordthismonth(a.id);
  block(matchAddApiv2010accountusageusagerecordusagerecordthismonth(a.id, ANY), function () {});
  addApiv2010accountusageusagerecordusagerecordthismonth(b.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordtoday nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountusageusagerecordusagerecordtoday(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountusageusagerecordusagerecordtoday(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountusageusagerecordusagerecordtoday(x.id); }
  verifyApiv2010accountusageusagerecordusagerecordtodayExists(x.id);
  verifyApiv2010accountusageusagerecordusagerecordtodayUpdated(x.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordtoday nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountusageusagerecordusagerecordtoday(a.id);
  block(matchAddApiv2010accountusageusagerecordusagerecordtoday(a.id, ANY), function () {});
  addApiv2010accountusageusagerecordusagerecordtoday(b.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordyearly nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountusageusagerecordusagerecordyearly(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountusageusagerecordusagerecordyearly(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountusageusagerecordusagerecordyearly(x.id); }
  verifyApiv2010accountusageusagerecordusagerecordyearlyExists(x.id);
  verifyApiv2010accountusageusagerecordusagerecordyearlyUpdated(x.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordyearly nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountusageusagerecordusagerecordyearly(a.id);
  block(matchAddApiv2010accountusageusagerecordusagerecordyearly(a.id, ANY), function () {});
  addApiv2010accountusageusagerecordusagerecordyearly(b.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordyesterday nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountusageusagerecordusagerecordyesterday(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountusageusagerecordusagerecordyesterday(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountusageusagerecordusagerecordyesterday(x.id); }
  verifyApiv2010accountusageusagerecordusagerecordyesterdayExists(x.id);
  verifyApiv2010accountusageusagerecordusagerecordyesterdayUpdated(x.id);
});

bthread("Apiv2010accountusageusagerecordusagerecordyesterday nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountusageusagerecordusagerecordyesterday(a.id);
  block(matchAddApiv2010accountusageusagerecordusagerecordyesterday(a.id, ANY), function () {});
  addApiv2010accountusageusagerecordusagerecordyesterday(b.id);
});

bthread("Apiv2010accountusageusagetrigger nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountusageusagetrigger(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountusageusagetrigger(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountusageusagetrigger(x.id); }
  verifyApiv2010accountusageusagetriggerExists(x.id);
  verifyApiv2010accountusageusagetriggerUpdated(x.id);
});

bthread("Apiv2010accountusageusagetrigger nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountusageusagetrigger(a.id);
  block(matchAddApiv2010accountusageusagetrigger(a.id, ANY), function () {});
  addApiv2010accountusageusagetrigger(b.id);
});

bthread("Apiv2010accountvalidationrequest nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApiv2010accountvalidationrequest(x.id);
  for (var i=0; i<steps; i++) {
    updateApiv2010accountvalidationrequest(x.id);
  }
  if (pick([true,false])) { deleteApiv2010accountvalidationrequest(x.id); }
  verifyApiv2010accountvalidationrequestExists(x.id);
  verifyApiv2010accountvalidationrequestUpdated(x.id);
});

bthread("Apiv2010accountvalidationrequest nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApiv2010accountvalidationrequest(a.id);
  block(matchAddApiv2010accountvalidationrequest(a.id, ANY), function () {});
  addApiv2010accountvalidationrequest(b.id);
});

bthread("Authorizedconnectappenumpermission nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAuthorizedconnectappenumpermission(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthorizedconnectappenumpermission(x.id);
  }
  if (pick([true,false])) { deleteAuthorizedconnectappenumpermission(x.id); }
  verifyAuthorizedconnectappenumpermissionExists(x.id);
  verifyAuthorizedconnectappenumpermissionUpdated(x.id);
});

bthread("Authorizedconnectappenumpermission nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuthorizedconnectappenumpermission(a.id);
  block(matchAddAuthorizedconnectappenumpermission(a.id, ANY), function () {});
  addAuthorizedconnectappenumpermission(b.id);
});

bthread("Callenumevent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCallenumevent(x.id);
  for (var i=0; i<steps; i++) {
    updateCallenumevent(x.id);
  }
  if (pick([true,false])) { deleteCallenumevent(x.id); }
  verifyCallenumeventExists(x.id);
  verifyCallenumeventUpdated(x.id);
});

bthread("Callenumevent nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCallenumevent(a.id);
  block(matchAddCallenumevent(a.id, ANY), function () {});
  addCallenumevent(b.id);
});

bthread("Callenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCallenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateCallenumstatus(x.id);
  }
  if (pick([true,false])) { deleteCallenumstatus(x.id); }
  verifyCallenumstatusExists(x.id);
  verifyCallenumstatusUpdated(x.id);
});

bthread("Callenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCallenumstatus(a.id);
  block(matchAddCallenumstatus(a.id, ANY), function () {});
  addCallenumstatus(b.id);
});

bthread("Callenumupdatestatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCallenumupdatestatus(x.id);
  for (var i=0; i<steps; i++) {
    updateCallenumupdatestatus(x.id);
  }
  if (pick([true,false])) { deleteCallenumupdatestatus(x.id); }
  verifyCallenumupdatestatusExists(x.id);
  verifyCallenumupdatestatusUpdated(x.id);
});

bthread("Callenumupdatestatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCallenumupdatestatus(a.id);
  block(matchAddCallenumupdatestatus(a.id, ANY), function () {});
  addCallenumupdatestatus(b.id);
});

bthread("Callrecordingenumsource nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCallrecordingenumsource(x.id);
  for (var i=0; i<steps; i++) {
    updateCallrecordingenumsource(x.id);
  }
  if (pick([true,false])) { deleteCallrecordingenumsource(x.id); }
  verifyCallrecordingenumsourceExists(x.id);
  verifyCallrecordingenumsourceUpdated(x.id);
});

bthread("Callrecordingenumsource nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCallrecordingenumsource(a.id);
  block(matchAddCallrecordingenumsource(a.id, ANY), function () {});
  addCallrecordingenumsource(b.id);
});

bthread("Callrecordingenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCallrecordingenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateCallrecordingenumstatus(x.id);
  }
  if (pick([true,false])) { deleteCallrecordingenumstatus(x.id); }
  verifyCallrecordingenumstatusExists(x.id);
  verifyCallrecordingenumstatusUpdated(x.id);
});

bthread("Callrecordingenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCallrecordingenumstatus(a.id);
  block(matchAddCallrecordingenumstatus(a.id, ANY), function () {});
  addCallrecordingenumstatus(b.id);
});

bthread("Conferenceenumreasonconferenceended nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addConferenceenumreasonconferenceended(x.id);
  for (var i=0; i<steps; i++) {
    updateConferenceenumreasonconferenceended(x.id);
  }
  if (pick([true,false])) { deleteConferenceenumreasonconferenceended(x.id); }
  verifyConferenceenumreasonconferenceendedExists(x.id);
  verifyConferenceenumreasonconferenceendedUpdated(x.id);
});

bthread("Conferenceenumreasonconferenceended nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConferenceenumreasonconferenceended(a.id);
  block(matchAddConferenceenumreasonconferenceended(a.id, ANY), function () {});
  addConferenceenumreasonconferenceended(b.id);
});

bthread("Conferenceenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addConferenceenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateConferenceenumstatus(x.id);
  }
  if (pick([true,false])) { deleteConferenceenumstatus(x.id); }
  verifyConferenceenumstatusExists(x.id);
  verifyConferenceenumstatusUpdated(x.id);
});

bthread("Conferenceenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConferenceenumstatus(a.id);
  block(matchAddConferenceenumstatus(a.id, ANY), function () {});
  addConferenceenumstatus(b.id);
});

bthread("Conferenceenumupdatestatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addConferenceenumupdatestatus(x.id);
  for (var i=0; i<steps; i++) {
    updateConferenceenumupdatestatus(x.id);
  }
  if (pick([true,false])) { deleteConferenceenumupdatestatus(x.id); }
  verifyConferenceenumupdatestatusExists(x.id);
  verifyConferenceenumupdatestatusUpdated(x.id);
});

bthread("Conferenceenumupdatestatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConferenceenumupdatestatus(a.id);
  block(matchAddConferenceenumupdatestatus(a.id, ANY), function () {});
  addConferenceenumupdatestatus(b.id);
});

bthread("Conferencerecordingenumsource nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addConferencerecordingenumsource(x.id);
  for (var i=0; i<steps; i++) {
    updateConferencerecordingenumsource(x.id);
  }
  if (pick([true,false])) { deleteConferencerecordingenumsource(x.id); }
  verifyConferencerecordingenumsourceExists(x.id);
  verifyConferencerecordingenumsourceUpdated(x.id);
});

bthread("Conferencerecordingenumsource nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConferencerecordingenumsource(a.id);
  block(matchAddConferencerecordingenumsource(a.id, ANY), function () {});
  addConferencerecordingenumsource(b.id);
});

bthread("Conferencerecordingenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addConferencerecordingenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateConferencerecordingenumstatus(x.id);
  }
  if (pick([true,false])) { deleteConferencerecordingenumstatus(x.id); }
  verifyConferencerecordingenumstatusExists(x.id);
  verifyConferencerecordingenumstatusUpdated(x.id);
});

bthread("Conferencerecordingenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConferencerecordingenumstatus(a.id);
  block(matchAddConferencerecordingenumstatus(a.id, ANY), function () {});
  addConferencerecordingenumstatus(b.id);
});

bthread("Connectappenumpermission nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addConnectappenumpermission(x.id);
  for (var i=0; i<steps; i++) {
    updateConnectappenumpermission(x.id);
  }
  if (pick([true,false])) { deleteConnectappenumpermission(x.id); }
  verifyConnectappenumpermissionExists(x.id);
  verifyConnectappenumpermissionUpdated(x.id);
});

bthread("Connectappenumpermission nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConnectappenumpermission(a.id);
  block(matchAddConnectappenumpermission(a.id, ANY), function () {});
  addConnectappenumpermission(b.id);
});

bthread("Dependentphonenumberenumaddressrequirement nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addDependentphonenumberenumaddressrequirement(x.id);
  for (var i=0; i<steps; i++) {
    updateDependentphonenumberenumaddressrequirement(x.id);
  }
  if (pick([true,false])) { deleteDependentphonenumberenumaddressrequirement(x.id); }
  verifyDependentphonenumberenumaddressrequirementExists(x.id);
  verifyDependentphonenumberenumaddressrequirementUpdated(x.id);
});

bthread("Dependentphonenumberenumaddressrequirement nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDependentphonenumberenumaddressrequirement(a.id);
  block(matchAddDependentphonenumberenumaddressrequirement(a.id, ANY), function () {});
  addDependentphonenumberenumaddressrequirement(b.id);
});

bthread("Dependentphonenumberenumemergencystatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addDependentphonenumberenumemergencystatus(x.id);
  for (var i=0; i<steps; i++) {
    updateDependentphonenumberenumemergencystatus(x.id);
  }
  if (pick([true,false])) { deleteDependentphonenumberenumemergencystatus(x.id); }
  verifyDependentphonenumberenumemergencystatusExists(x.id);
  verifyDependentphonenumberenumemergencystatusUpdated(x.id);
});

bthread("Dependentphonenumberenumemergencystatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDependentphonenumberenumemergencystatus(a.id);
  block(matchAddDependentphonenumberenumemergencystatus(a.id, ANY), function () {});
  addDependentphonenumberenumemergencystatus(b.id);
});

bthread("Incomingphonenumberenumaddressrequirement nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumberenumaddressrequirement(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumberenumaddressrequirement(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumberenumaddressrequirement(x.id); }
  verifyIncomingphonenumberenumaddressrequirementExists(x.id);
  verifyIncomingphonenumberenumaddressrequirementUpdated(x.id);
});

bthread("Incomingphonenumberenumaddressrequirement nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumberenumaddressrequirement(a.id);
  block(matchAddIncomingphonenumberenumaddressrequirement(a.id, ANY), function () {});
  addIncomingphonenumberenumaddressrequirement(b.id);
});

bthread("Incomingphonenumberenumemergencyaddressstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumberenumemergencyaddressstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumberenumemergencyaddressstatus(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumberenumemergencyaddressstatus(x.id); }
  verifyIncomingphonenumberenumemergencyaddressstatusExists(x.id);
  verifyIncomingphonenumberenumemergencyaddressstatusUpdated(x.id);
});

bthread("Incomingphonenumberenumemergencyaddressstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumberenumemergencyaddressstatus(a.id);
  block(matchAddIncomingphonenumberenumemergencyaddressstatus(a.id, ANY), function () {});
  addIncomingphonenumberenumemergencyaddressstatus(b.id);
});

bthread("Incomingphonenumberenumemergencystatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumberenumemergencystatus(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumberenumemergencystatus(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumberenumemergencystatus(x.id); }
  verifyIncomingphonenumberenumemergencystatusExists(x.id);
  verifyIncomingphonenumberenumemergencystatusUpdated(x.id);
});

bthread("Incomingphonenumberenumemergencystatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumberenumemergencystatus(a.id);
  block(matchAddIncomingphonenumberenumemergencystatus(a.id, ANY), function () {});
  addIncomingphonenumberenumemergencystatus(b.id);
});

bthread("Incomingphonenumberenumvoicereceivemode nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumberenumvoicereceivemode(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumberenumvoicereceivemode(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumberenumvoicereceivemode(x.id); }
  verifyIncomingphonenumberenumvoicereceivemodeExists(x.id);
  verifyIncomingphonenumberenumvoicereceivemodeUpdated(x.id);
});

bthread("Incomingphonenumberenumvoicereceivemode nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumberenumvoicereceivemode(a.id);
  block(matchAddIncomingphonenumberenumvoicereceivemode(a.id, ANY), function () {});
  addIncomingphonenumberenumvoicereceivemode(b.id);
});

bthread("Incomingphonenumberlocalenumaddressrequirement nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumberlocalenumaddressrequirement(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumberlocalenumaddressrequirement(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumberlocalenumaddressrequirement(x.id); }
  verifyIncomingphonenumberlocalenumaddressrequirementExists(x.id);
  verifyIncomingphonenumberlocalenumaddressrequirementUpdated(x.id);
});

bthread("Incomingphonenumberlocalenumaddressrequirement nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumberlocalenumaddressrequirement(a.id);
  block(matchAddIncomingphonenumberlocalenumaddressrequirement(a.id, ANY), function () {});
  addIncomingphonenumberlocalenumaddressrequirement(b.id);
});

bthread("Incomingphonenumberlocalenumemergencyaddressstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumberlocalenumemergencyaddressstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumberlocalenumemergencyaddressstatus(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumberlocalenumemergencyaddressstatus(x.id); }
  verifyIncomingphonenumberlocalenumemergencyaddressstatusExists(x.id);
  verifyIncomingphonenumberlocalenumemergencyaddressstatusUpdated(x.id);
});

bthread("Incomingphonenumberlocalenumemergencyaddressstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumberlocalenumemergencyaddressstatus(a.id);
  block(matchAddIncomingphonenumberlocalenumemergencyaddressstatus(a.id, ANY), function () {});
  addIncomingphonenumberlocalenumemergencyaddressstatus(b.id);
});

bthread("Incomingphonenumberlocalenumemergencystatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumberlocalenumemergencystatus(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumberlocalenumemergencystatus(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumberlocalenumemergencystatus(x.id); }
  verifyIncomingphonenumberlocalenumemergencystatusExists(x.id);
  verifyIncomingphonenumberlocalenumemergencystatusUpdated(x.id);
});

bthread("Incomingphonenumberlocalenumemergencystatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumberlocalenumemergencystatus(a.id);
  block(matchAddIncomingphonenumberlocalenumemergencystatus(a.id, ANY), function () {});
  addIncomingphonenumberlocalenumemergencystatus(b.id);
});

bthread("Incomingphonenumberlocalenumvoicereceivemode nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumberlocalenumvoicereceivemode(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumberlocalenumvoicereceivemode(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumberlocalenumvoicereceivemode(x.id); }
  verifyIncomingphonenumberlocalenumvoicereceivemodeExists(x.id);
  verifyIncomingphonenumberlocalenumvoicereceivemodeUpdated(x.id);
});

bthread("Incomingphonenumberlocalenumvoicereceivemode nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumberlocalenumvoicereceivemode(a.id);
  block(matchAddIncomingphonenumberlocalenumvoicereceivemode(a.id, ANY), function () {});
  addIncomingphonenumberlocalenumvoicereceivemode(b.id);
});

bthread("Incomingphonenumbermobileenumaddressrequirement nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumbermobileenumaddressrequirement(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumbermobileenumaddressrequirement(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumbermobileenumaddressrequirement(x.id); }
  verifyIncomingphonenumbermobileenumaddressrequirementExists(x.id);
  verifyIncomingphonenumbermobileenumaddressrequirementUpdated(x.id);
});

bthread("Incomingphonenumbermobileenumaddressrequirement nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumbermobileenumaddressrequirement(a.id);
  block(matchAddIncomingphonenumbermobileenumaddressrequirement(a.id, ANY), function () {});
  addIncomingphonenumbermobileenumaddressrequirement(b.id);
});

bthread("Incomingphonenumbermobileenumemergencyaddressstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumbermobileenumemergencyaddressstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumbermobileenumemergencyaddressstatus(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumbermobileenumemergencyaddressstatus(x.id); }
  verifyIncomingphonenumbermobileenumemergencyaddressstatusExists(x.id);
  verifyIncomingphonenumbermobileenumemergencyaddressstatusUpdated(x.id);
});

bthread("Incomingphonenumbermobileenumemergencyaddressstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumbermobileenumemergencyaddressstatus(a.id);
  block(matchAddIncomingphonenumbermobileenumemergencyaddressstatus(a.id, ANY), function () {});
  addIncomingphonenumbermobileenumemergencyaddressstatus(b.id);
});

bthread("Incomingphonenumbermobileenumemergencystatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumbermobileenumemergencystatus(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumbermobileenumemergencystatus(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumbermobileenumemergencystatus(x.id); }
  verifyIncomingphonenumbermobileenumemergencystatusExists(x.id);
  verifyIncomingphonenumbermobileenumemergencystatusUpdated(x.id);
});

bthread("Incomingphonenumbermobileenumemergencystatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumbermobileenumemergencystatus(a.id);
  block(matchAddIncomingphonenumbermobileenumemergencystatus(a.id, ANY), function () {});
  addIncomingphonenumbermobileenumemergencystatus(b.id);
});

bthread("Incomingphonenumbermobileenumvoicereceivemode nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumbermobileenumvoicereceivemode(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumbermobileenumvoicereceivemode(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumbermobileenumvoicereceivemode(x.id); }
  verifyIncomingphonenumbermobileenumvoicereceivemodeExists(x.id);
  verifyIncomingphonenumbermobileenumvoicereceivemodeUpdated(x.id);
});

bthread("Incomingphonenumbermobileenumvoicereceivemode nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumbermobileenumvoicereceivemode(a.id);
  block(matchAddIncomingphonenumbermobileenumvoicereceivemode(a.id, ANY), function () {});
  addIncomingphonenumbermobileenumvoicereceivemode(b.id);
});

bthread("Incomingphonenumbertollfreeenumaddressrequirement nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumbertollfreeenumaddressrequirement(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumbertollfreeenumaddressrequirement(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumbertollfreeenumaddressrequirement(x.id); }
  verifyIncomingphonenumbertollfreeenumaddressrequirementExists(x.id);
  verifyIncomingphonenumbertollfreeenumaddressrequirementUpdated(x.id);
});

bthread("Incomingphonenumbertollfreeenumaddressrequirement nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumbertollfreeenumaddressrequirement(a.id);
  block(matchAddIncomingphonenumbertollfreeenumaddressrequirement(a.id, ANY), function () {});
  addIncomingphonenumbertollfreeenumaddressrequirement(b.id);
});

bthread("Incomingphonenumbertollfreeenumemergencyaddressstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumbertollfreeenumemergencyaddressstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumbertollfreeenumemergencyaddressstatus(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumbertollfreeenumemergencyaddressstatus(x.id); }
  verifyIncomingphonenumbertollfreeenumemergencyaddressstatusExists(x.id);
  verifyIncomingphonenumbertollfreeenumemergencyaddressstatusUpdated(x.id);
});

bthread("Incomingphonenumbertollfreeenumemergencyaddressstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumbertollfreeenumemergencyaddressstatus(a.id);
  block(matchAddIncomingphonenumbertollfreeenumemergencyaddressstatus(a.id, ANY), function () {});
  addIncomingphonenumbertollfreeenumemergencyaddressstatus(b.id);
});

bthread("Incomingphonenumbertollfreeenumemergencystatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumbertollfreeenumemergencystatus(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumbertollfreeenumemergencystatus(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumbertollfreeenumemergencystatus(x.id); }
  verifyIncomingphonenumbertollfreeenumemergencystatusExists(x.id);
  verifyIncomingphonenumbertollfreeenumemergencystatusUpdated(x.id);
});

bthread("Incomingphonenumbertollfreeenumemergencystatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumbertollfreeenumemergencystatus(a.id);
  block(matchAddIncomingphonenumbertollfreeenumemergencystatus(a.id, ANY), function () {});
  addIncomingphonenumbertollfreeenumemergencystatus(b.id);
});

bthread("Incomingphonenumbertollfreeenumvoicereceivemode nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncomingphonenumbertollfreeenumvoicereceivemode(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumbertollfreeenumvoicereceivemode(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumbertollfreeenumvoicereceivemode(x.id); }
  verifyIncomingphonenumbertollfreeenumvoicereceivemodeExists(x.id);
  verifyIncomingphonenumbertollfreeenumvoicereceivemodeUpdated(x.id);
});

bthread("Incomingphonenumbertollfreeenumvoicereceivemode nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumbertollfreeenumvoicereceivemode(a.id);
  block(matchAddIncomingphonenumbertollfreeenumvoicereceivemode(a.id, ANY), function () {});
  addIncomingphonenumbertollfreeenumvoicereceivemode(b.id);
});

bthread("Messageenumaddressretention nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMessageenumaddressretention(x.id);
  for (var i=0; i<steps; i++) {
    updateMessageenumaddressretention(x.id);
  }
  if (pick([true,false])) { deleteMessageenumaddressretention(x.id); }
  verifyMessageenumaddressretentionExists(x.id);
  verifyMessageenumaddressretentionUpdated(x.id);
});

bthread("Messageenumaddressretention nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessageenumaddressretention(a.id);
  block(matchAddMessageenumaddressretention(a.id, ANY), function () {});
  addMessageenumaddressretention(b.id);
});

bthread("Messageenumcontentretention nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMessageenumcontentretention(x.id);
  for (var i=0; i<steps; i++) {
    updateMessageenumcontentretention(x.id);
  }
  if (pick([true,false])) { deleteMessageenumcontentretention(x.id); }
  verifyMessageenumcontentretentionExists(x.id);
  verifyMessageenumcontentretentionUpdated(x.id);
});

bthread("Messageenumcontentretention nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessageenumcontentretention(a.id);
  block(matchAddMessageenumcontentretention(a.id, ANY), function () {});
  addMessageenumcontentretention(b.id);
});

bthread("Messageenumdirection nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMessageenumdirection(x.id);
  for (var i=0; i<steps; i++) {
    updateMessageenumdirection(x.id);
  }
  if (pick([true,false])) { deleteMessageenumdirection(x.id); }
  verifyMessageenumdirectionExists(x.id);
  verifyMessageenumdirectionUpdated(x.id);
});

bthread("Messageenumdirection nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessageenumdirection(a.id);
  block(matchAddMessageenumdirection(a.id, ANY), function () {});
  addMessageenumdirection(b.id);
});

bthread("Messageenumriskcheck nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMessageenumriskcheck(x.id);
  for (var i=0; i<steps; i++) {
    updateMessageenumriskcheck(x.id);
  }
  if (pick([true,false])) { deleteMessageenumriskcheck(x.id); }
  verifyMessageenumriskcheckExists(x.id);
  verifyMessageenumriskcheckUpdated(x.id);
});

bthread("Messageenumriskcheck nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessageenumriskcheck(a.id);
  block(matchAddMessageenumriskcheck(a.id, ANY), function () {});
  addMessageenumriskcheck(b.id);
});

bthread("Messageenumscheduletype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMessageenumscheduletype(x.id);
  for (var i=0; i<steps; i++) {
    updateMessageenumscheduletype(x.id);
  }
  if (pick([true,false])) { deleteMessageenumscheduletype(x.id); }
  verifyMessageenumscheduletypeExists(x.id);
  verifyMessageenumscheduletypeUpdated(x.id);
});

bthread("Messageenumscheduletype nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessageenumscheduletype(a.id);
  block(matchAddMessageenumscheduletype(a.id, ANY), function () {});
  addMessageenumscheduletype(b.id);
});

bthread("Messageenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMessageenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateMessageenumstatus(x.id);
  }
  if (pick([true,false])) { deleteMessageenumstatus(x.id); }
  verifyMessageenumstatusExists(x.id);
  verifyMessageenumstatusUpdated(x.id);
});

bthread("Messageenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessageenumstatus(a.id);
  block(matchAddMessageenumstatus(a.id, ANY), function () {});
  addMessageenumstatus(b.id);
});

bthread("Messageenumtraffictype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMessageenumtraffictype(x.id);
  for (var i=0; i<steps; i++) {
    updateMessageenumtraffictype(x.id);
  }
  if (pick([true,false])) { deleteMessageenumtraffictype(x.id); }
  verifyMessageenumtraffictypeExists(x.id);
  verifyMessageenumtraffictypeUpdated(x.id);
});

bthread("Messageenumtraffictype nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessageenumtraffictype(a.id);
  block(matchAddMessageenumtraffictype(a.id, ANY), function () {});
  addMessageenumtraffictype(b.id);
});

bthread("Messageenumupdatestatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMessageenumupdatestatus(x.id);
  for (var i=0; i<steps; i++) {
    updateMessageenumupdatestatus(x.id);
  }
  if (pick([true,false])) { deleteMessageenumupdatestatus(x.id); }
  verifyMessageenumupdatestatusExists(x.id);
  verifyMessageenumupdatestatusUpdated(x.id);
});

bthread("Messageenumupdatestatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessageenumupdatestatus(a.id);
  block(matchAddMessageenumupdatestatus(a.id, ANY), function () {});
  addMessageenumupdatestatus(b.id);
});

bthread("Messagefeedbackenumoutcome nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMessagefeedbackenumoutcome(x.id);
  for (var i=0; i<steps; i++) {
    updateMessagefeedbackenumoutcome(x.id);
  }
  if (pick([true,false])) { deleteMessagefeedbackenumoutcome(x.id); }
  verifyMessagefeedbackenumoutcomeExists(x.id);
  verifyMessagefeedbackenumoutcomeUpdated(x.id);
});

bthread("Messagefeedbackenumoutcome nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessagefeedbackenumoutcome(a.id);
  block(matchAddMessagefeedbackenumoutcome(a.id, ANY), function () {});
  addMessagefeedbackenumoutcome(b.id);
});

bthread("Participantenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addParticipantenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateParticipantenumstatus(x.id);
  }
  if (pick([true,false])) { deleteParticipantenumstatus(x.id); }
  verifyParticipantenumstatusExists(x.id);
  verifyParticipantenumstatusUpdated(x.id);
});

bthread("Participantenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addParticipantenumstatus(a.id);
  block(matchAddParticipantenumstatus(a.id, ANY), function () {});
  addParticipantenumstatus(b.id);
});

bthread("Paymentsenumbankaccounttype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPaymentsenumbankaccounttype(x.id);
  for (var i=0; i<steps; i++) {
    updatePaymentsenumbankaccounttype(x.id);
  }
  if (pick([true,false])) { deletePaymentsenumbankaccounttype(x.id); }
  verifyPaymentsenumbankaccounttypeExists(x.id);
  verifyPaymentsenumbankaccounttypeUpdated(x.id);
});

bthread("Paymentsenumbankaccounttype nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPaymentsenumbankaccounttype(a.id);
  block(matchAddPaymentsenumbankaccounttype(a.id, ANY), function () {});
  addPaymentsenumbankaccounttype(b.id);
});

bthread("Paymentsenumcapture nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPaymentsenumcapture(x.id);
  for (var i=0; i<steps; i++) {
    updatePaymentsenumcapture(x.id);
  }
  if (pick([true,false])) { deletePaymentsenumcapture(x.id); }
  verifyPaymentsenumcaptureExists(x.id);
  verifyPaymentsenumcaptureUpdated(x.id);
});

bthread("Paymentsenumcapture nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPaymentsenumcapture(a.id);
  block(matchAddPaymentsenumcapture(a.id, ANY), function () {});
  addPaymentsenumcapture(b.id);
});

bthread("Paymentsenumpaymentmethod nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPaymentsenumpaymentmethod(x.id);
  for (var i=0; i<steps; i++) {
    updatePaymentsenumpaymentmethod(x.id);
  }
  if (pick([true,false])) { deletePaymentsenumpaymentmethod(x.id); }
  verifyPaymentsenumpaymentmethodExists(x.id);
  verifyPaymentsenumpaymentmethodUpdated(x.id);
});

bthread("Paymentsenumpaymentmethod nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPaymentsenumpaymentmethod(a.id);
  block(matchAddPaymentsenumpaymentmethod(a.id, ANY), function () {});
  addPaymentsenumpaymentmethod(b.id);
});

bthread("Paymentsenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPaymentsenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updatePaymentsenumstatus(x.id);
  }
  if (pick([true,false])) { deletePaymentsenumstatus(x.id); }
  verifyPaymentsenumstatusExists(x.id);
  verifyPaymentsenumstatusUpdated(x.id);
});

bthread("Paymentsenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPaymentsenumstatus(a.id);
  block(matchAddPaymentsenumstatus(a.id, ANY), function () {});
  addPaymentsenumstatus(b.id);
});

bthread("Paymentsenumtokentype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPaymentsenumtokentype(x.id);
  for (var i=0; i<steps; i++) {
    updatePaymentsenumtokentype(x.id);
  }
  if (pick([true,false])) { deletePaymentsenumtokentype(x.id); }
  verifyPaymentsenumtokentypeExists(x.id);
  verifyPaymentsenumtokentypeUpdated(x.id);
});

bthread("Paymentsenumtokentype nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPaymentsenumtokentype(a.id);
  block(matchAddPaymentsenumtokentype(a.id, ANY), function () {});
  addPaymentsenumtokentype(b.id);
});

bthread("Realtimetranscriptionenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRealtimetranscriptionenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateRealtimetranscriptionenumstatus(x.id);
  }
  if (pick([true,false])) { deleteRealtimetranscriptionenumstatus(x.id); }
  verifyRealtimetranscriptionenumstatusExists(x.id);
  verifyRealtimetranscriptionenumstatusUpdated(x.id);
});

bthread("Realtimetranscriptionenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealtimetranscriptionenumstatus(a.id);
  block(matchAddRealtimetranscriptionenumstatus(a.id, ANY), function () {});
  addRealtimetranscriptionenumstatus(b.id);
});

bthread("Realtimetranscriptionenumtrack nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRealtimetranscriptionenumtrack(x.id);
  for (var i=0; i<steps; i++) {
    updateRealtimetranscriptionenumtrack(x.id);
  }
  if (pick([true,false])) { deleteRealtimetranscriptionenumtrack(x.id); }
  verifyRealtimetranscriptionenumtrackExists(x.id);
  verifyRealtimetranscriptionenumtrackUpdated(x.id);
});

bthread("Realtimetranscriptionenumtrack nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealtimetranscriptionenumtrack(a.id);
  block(matchAddRealtimetranscriptionenumtrack(a.id, ANY), function () {});
  addRealtimetranscriptionenumtrack(b.id);
});

bthread("Realtimetranscriptionenumupdatestatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRealtimetranscriptionenumupdatestatus(x.id);
  for (var i=0; i<steps; i++) {
    updateRealtimetranscriptionenumupdatestatus(x.id);
  }
  if (pick([true,false])) { deleteRealtimetranscriptionenumupdatestatus(x.id); }
  verifyRealtimetranscriptionenumupdatestatusExists(x.id);
  verifyRealtimetranscriptionenumupdatestatusUpdated(x.id);
});

bthread("Realtimetranscriptionenumupdatestatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealtimetranscriptionenumupdatestatus(a.id);
  block(matchAddRealtimetranscriptionenumupdatestatus(a.id, ANY), function () {});
  addRealtimetranscriptionenumupdatestatus(b.id);
});

bthread("Recordingaddonresultenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRecordingaddonresultenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateRecordingaddonresultenumstatus(x.id);
  }
  if (pick([true,false])) { deleteRecordingaddonresultenumstatus(x.id); }
  verifyRecordingaddonresultenumstatusExists(x.id);
  verifyRecordingaddonresultenumstatusUpdated(x.id);
});

bthread("Recordingaddonresultenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRecordingaddonresultenumstatus(a.id);
  block(matchAddRecordingaddonresultenumstatus(a.id, ANY), function () {});
  addRecordingaddonresultenumstatus(b.id);
});

bthread("Recordingenumsource nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRecordingenumsource(x.id);
  for (var i=0; i<steps; i++) {
    updateRecordingenumsource(x.id);
  }
  if (pick([true,false])) { deleteRecordingenumsource(x.id); }
  verifyRecordingenumsourceExists(x.id);
  verifyRecordingenumsourceUpdated(x.id);
});

bthread("Recordingenumsource nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRecordingenumsource(a.id);
  block(matchAddRecordingenumsource(a.id, ANY), function () {});
  addRecordingenumsource(b.id);
});

bthread("Recordingenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRecordingenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateRecordingenumstatus(x.id);
  }
  if (pick([true,false])) { deleteRecordingenumstatus(x.id); }
  verifyRecordingenumstatusExists(x.id);
  verifyRecordingenumstatusUpdated(x.id);
});

bthread("Recordingenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRecordingenumstatus(a.id);
  block(matchAddRecordingenumstatus(a.id, ANY), function () {});
  addRecordingenumstatus(b.id);
});

bthread("Recordingtranscriptionenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRecordingtranscriptionenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateRecordingtranscriptionenumstatus(x.id);
  }
  if (pick([true,false])) { deleteRecordingtranscriptionenumstatus(x.id); }
  verifyRecordingtranscriptionenumstatusExists(x.id);
  verifyRecordingtranscriptionenumstatusUpdated(x.id);
});

bthread("Recordingtranscriptionenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRecordingtranscriptionenumstatus(a.id);
  block(matchAddRecordingtranscriptionenumstatus(a.id, ANY), function () {});
  addRecordingtranscriptionenumstatus(b.id);
});

bthread("Siprecenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSiprecenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateSiprecenumstatus(x.id);
  }
  if (pick([true,false])) { deleteSiprecenumstatus(x.id); }
  verifySiprecenumstatusExists(x.id);
  verifySiprecenumstatusUpdated(x.id);
});

bthread("Siprecenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSiprecenumstatus(a.id);
  block(matchAddSiprecenumstatus(a.id, ANY), function () {});
  addSiprecenumstatus(b.id);
});

bthread("Siprecenumtrack nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSiprecenumtrack(x.id);
  for (var i=0; i<steps; i++) {
    updateSiprecenumtrack(x.id);
  }
  if (pick([true,false])) { deleteSiprecenumtrack(x.id); }
  verifySiprecenumtrackExists(x.id);
  verifySiprecenumtrackUpdated(x.id);
});

bthread("Siprecenumtrack nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSiprecenumtrack(a.id);
  block(matchAddSiprecenumtrack(a.id, ANY), function () {});
  addSiprecenumtrack(b.id);
});

bthread("Siprecenumupdatestatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSiprecenumupdatestatus(x.id);
  for (var i=0; i<steps; i++) {
    updateSiprecenumupdatestatus(x.id);
  }
  if (pick([true,false])) { deleteSiprecenumupdatestatus(x.id); }
  verifySiprecenumupdatestatusExists(x.id);
  verifySiprecenumupdatestatusUpdated(x.id);
});

bthread("Siprecenumupdatestatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSiprecenumupdatestatus(a.id);
  block(matchAddSiprecenumupdatestatus(a.id, ANY), function () {});
  addSiprecenumupdatestatus(b.id);
});

bthread("Smsfeedbackenumoutcome nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSmsfeedbackenumoutcome(x.id);
  for (var i=0; i<steps; i++) {
    updateSmsfeedbackenumoutcome(x.id);
  }
  if (pick([true,false])) { deleteSmsfeedbackenumoutcome(x.id); }
  verifySmsfeedbackenumoutcomeExists(x.id);
  verifySmsfeedbackenumoutcomeUpdated(x.id);
});

bthread("Smsfeedbackenumoutcome nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSmsfeedbackenumoutcome(a.id);
  block(matchAddSmsfeedbackenumoutcome(a.id, ANY), function () {});
  addSmsfeedbackenumoutcome(b.id);
});

bthread("Smsmessageenumdirection nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSmsmessageenumdirection(x.id);
  for (var i=0; i<steps; i++) {
    updateSmsmessageenumdirection(x.id);
  }
  if (pick([true,false])) { deleteSmsmessageenumdirection(x.id); }
  verifySmsmessageenumdirectionExists(x.id);
  verifySmsmessageenumdirectionUpdated(x.id);
});

bthread("Smsmessageenumdirection nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSmsmessageenumdirection(a.id);
  block(matchAddSmsmessageenumdirection(a.id, ANY), function () {});
  addSmsmessageenumdirection(b.id);
});

bthread("Smsmessageenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSmsmessageenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateSmsmessageenumstatus(x.id);
  }
  if (pick([true,false])) { deleteSmsmessageenumstatus(x.id); }
  verifySmsmessageenumstatusExists(x.id);
  verifySmsmessageenumstatusUpdated(x.id);
});

bthread("Smsmessageenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSmsmessageenumstatus(a.id);
  block(matchAddSmsmessageenumstatus(a.id, ANY), function () {});
  addSmsmessageenumstatus(b.id);
});

bthread("Streamenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addStreamenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateStreamenumstatus(x.id);
  }
  if (pick([true,false])) { deleteStreamenumstatus(x.id); }
  verifyStreamenumstatusExists(x.id);
  verifyStreamenumstatusUpdated(x.id);
});

bthread("Streamenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addStreamenumstatus(a.id);
  block(matchAddStreamenumstatus(a.id, ANY), function () {});
  addStreamenumstatus(b.id);
});

bthread("Streamenumtrack nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addStreamenumtrack(x.id);
  for (var i=0; i<steps; i++) {
    updateStreamenumtrack(x.id);
  }
  if (pick([true,false])) { deleteStreamenumtrack(x.id); }
  verifyStreamenumtrackExists(x.id);
  verifyStreamenumtrackUpdated(x.id);
});

bthread("Streamenumtrack nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addStreamenumtrack(a.id);
  block(matchAddStreamenumtrack(a.id, ANY), function () {});
  addStreamenumtrack(b.id);
});

bthread("Streamenumupdatestatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addStreamenumupdatestatus(x.id);
  for (var i=0; i<steps; i++) {
    updateStreamenumupdatestatus(x.id);
  }
  if (pick([true,false])) { deleteStreamenumupdatestatus(x.id); }
  verifyStreamenumupdatestatusExists(x.id);
  verifyStreamenumupdatestatusUpdated(x.id);
});

bthread("Streamenumupdatestatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addStreamenumupdatestatus(a.id);
  block(matchAddStreamenumupdatestatus(a.id, ANY), function () {});
  addStreamenumupdatestatus(b.id);
});

bthread("Transcriptionenumstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addTranscriptionenumstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateTranscriptionenumstatus(x.id);
  }
  if (pick([true,false])) { deleteTranscriptionenumstatus(x.id); }
  verifyTranscriptionenumstatusExists(x.id);
  verifyTranscriptionenumstatusUpdated(x.id);
});

bthread("Transcriptionenumstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTranscriptionenumstatus(a.id);
  block(matchAddTranscriptionenumstatus(a.id, ANY), function () {});
  addTranscriptionenumstatus(b.id);
});

bthread("Usagetriggerenumrecurring nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addUsagetriggerenumrecurring(x.id);
  for (var i=0; i<steps; i++) {
    updateUsagetriggerenumrecurring(x.id);
  }
  if (pick([true,false])) { deleteUsagetriggerenumrecurring(x.id); }
  verifyUsagetriggerenumrecurringExists(x.id);
  verifyUsagetriggerenumrecurringUpdated(x.id);
});

bthread("Usagetriggerenumrecurring nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUsagetriggerenumrecurring(a.id);
  block(matchAddUsagetriggerenumrecurring(a.id, ANY), function () {});
  addUsagetriggerenumrecurring(b.id);
});

bthread("Usagetriggerenumtriggerfield nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addUsagetriggerenumtriggerfield(x.id);
  for (var i=0; i<steps; i++) {
    updateUsagetriggerenumtriggerfield(x.id);
  }
  if (pick([true,false])) { deleteUsagetriggerenumtriggerfield(x.id); }
  verifyUsagetriggerenumtriggerfieldExists(x.id);
  verifyUsagetriggerenumtriggerfieldUpdated(x.id);
});

bthread("Usagetriggerenumtriggerfield nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUsagetriggerenumtriggerfield(a.id);
  block(matchAddUsagetriggerenumtriggerfield(a.id, ANY), function () {});
  addUsagetriggerenumtriggerfield(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Accountenumstatus create verification", function () {
  const e = waitForAnyAccountenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccountenumstatus(k), function () {
    verifyAccountenumstatusExists(k);
  });
});

bthread("Accountenumstatus update verification", function () {
  const e = waitForAnyAccountenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccountenumstatus(k), function () {
    verifyAccountenumstatusUpdated(k);
  });
});

bthread("Accountenumstatus delete verification", function () {
  const e = waitForAnyAccountenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAccountenumstatus(k), function () {
    verifyAccountenumstatusDoesNotExist(k);
  });
});

bthread("Accountenumtype create verification", function () {
  const e = waitForAnyAccountenumtypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccountenumtype(k), function () {
    verifyAccountenumtypeExists(k);
  });
});

bthread("Accountenumtype update verification", function () {
  const e = waitForAnyAccountenumtypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccountenumtype(k), function () {
    verifyAccountenumtypeUpdated(k);
  });
});

bthread("Accountenumtype delete verification", function () {
  const e = waitForAnyAccountenumtypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAccountenumtype(k), function () {
    verifyAccountenumtypeDoesNotExist(k);
  });
});

bthread("Apiv2010account create verification", function () {
  const e = waitForAnyApiv2010accountAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010account(k), function () {
    verifyApiv2010accountExists(k);
  });
});

bthread("Apiv2010account update verification", function () {
  const e = waitForAnyApiv2010accountUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010account(k), function () {
    verifyApiv2010accountUpdated(k);
  });
});

bthread("Apiv2010account delete verification", function () {
  const e = waitForAnyApiv2010accountDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010account(k), function () {
    verifyApiv2010accountDoesNotExist(k);
  });
});

bthread("Apiv2010accountaddress create verification", function () {
  const e = waitForAnyApiv2010accountaddressAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountaddress(k), function () {
    verifyApiv2010accountaddressExists(k);
  });
});

bthread("Apiv2010accountaddress update verification", function () {
  const e = waitForAnyApiv2010accountaddressUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountaddress(k), function () {
    verifyApiv2010accountaddressUpdated(k);
  });
});

bthread("Apiv2010accountaddress delete verification", function () {
  const e = waitForAnyApiv2010accountaddressDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountaddress(k), function () {
    verifyApiv2010accountaddressDoesNotExist(k);
  });
});

bthread("Apiv2010accountaddressdependentphonenumber create verification", function () {
  const e = waitForAnyApiv2010accountaddressdependentphonenumberAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountaddressdependentphonenumber(k), function () {
    verifyApiv2010accountaddressdependentphonenumberExists(k);
  });
});

bthread("Apiv2010accountaddressdependentphonenumber update verification", function () {
  const e = waitForAnyApiv2010accountaddressdependentphonenumberUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountaddressdependentphonenumber(k), function () {
    verifyApiv2010accountaddressdependentphonenumberUpdated(k);
  });
});

bthread("Apiv2010accountaddressdependentphonenumber delete verification", function () {
  const e = waitForAnyApiv2010accountaddressdependentphonenumberDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountaddressdependentphonenumber(k), function () {
    verifyApiv2010accountaddressdependentphonenumberDoesNotExist(k);
  });
});

bthread("Apiv2010accountapplication create verification", function () {
  const e = waitForAnyApiv2010accountapplicationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountapplication(k), function () {
    verifyApiv2010accountapplicationExists(k);
  });
});

bthread("Apiv2010accountapplication update verification", function () {
  const e = waitForAnyApiv2010accountapplicationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountapplication(k), function () {
    verifyApiv2010accountapplicationUpdated(k);
  });
});

bthread("Apiv2010accountapplication delete verification", function () {
  const e = waitForAnyApiv2010accountapplicationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountapplication(k), function () {
    verifyApiv2010accountapplicationDoesNotExist(k);
  });
});

bthread("Apiv2010accountauthorizedconnectapp create verification", function () {
  const e = waitForAnyApiv2010accountauthorizedconnectappAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountauthorizedconnectapp(k), function () {
    verifyApiv2010accountauthorizedconnectappExists(k);
  });
});

bthread("Apiv2010accountauthorizedconnectapp update verification", function () {
  const e = waitForAnyApiv2010accountauthorizedconnectappUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountauthorizedconnectapp(k), function () {
    verifyApiv2010accountauthorizedconnectappUpdated(k);
  });
});

bthread("Apiv2010accountauthorizedconnectapp delete verification", function () {
  const e = waitForAnyApiv2010accountauthorizedconnectappDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountauthorizedconnectapp(k), function () {
    verifyApiv2010accountauthorizedconnectappDoesNotExist(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountry create verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountry(k), function () {
    verifyApiv2010accountavailablephonenumbercountryExists(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountry update verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountry(k), function () {
    verifyApiv2010accountavailablephonenumbercountryUpdated(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountry delete verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountry(k), function () {
    verifyApiv2010accountavailablephonenumbercountryDoesNotExist(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumberlocal create verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumberlocalAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumberlocalExists(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumberlocal update verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumberlocalUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumberlocalUpdated(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumberlocal delete verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumberlocalDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumberlocalDoesNotExist(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine create verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineExists(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine update verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineUpdated(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine delete verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineDoesNotExist(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbermobile create verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbermobileAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermobileExists(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbermobile update verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbermobileUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermobileUpdated(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbermobile delete verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbermobileDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbermobileDoesNotExist(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbernational create verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbernationalAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbernational(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbernationalExists(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbernational update verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbernationalUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbernational(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbernationalUpdated(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbernational delete verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbernationalDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbernational(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbernationalDoesNotExist(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost create verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostExists(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost update verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostUpdated(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost delete verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostDoesNotExist(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbertollfree create verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeExists(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbertollfree update verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeUpdated(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbertollfree delete verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeDoesNotExist(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbervoip create verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbervoipAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbervoipExists(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbervoip update verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbervoipUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbervoipUpdated(k);
  });
});

bthread("Apiv2010accountavailablephonenumbercountryavailablephonenumbervoip delete verification", function () {
  const e = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbervoipDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(k), function () {
    verifyApiv2010accountavailablephonenumbercountryavailablephonenumbervoipDoesNotExist(k);
  });
});

bthread("Apiv2010accountbalance create verification", function () {
  const e = waitForAnyApiv2010accountbalanceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountbalance(k), function () {
    verifyApiv2010accountbalanceExists(k);
  });
});

bthread("Apiv2010accountbalance update verification", function () {
  const e = waitForAnyApiv2010accountbalanceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountbalance(k), function () {
    verifyApiv2010accountbalanceUpdated(k);
  });
});

bthread("Apiv2010accountbalance delete verification", function () {
  const e = waitForAnyApiv2010accountbalanceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountbalance(k), function () {
    verifyApiv2010accountbalanceDoesNotExist(k);
  });
});

bthread("Apiv2010accountcall create verification", function () {
  const e = waitForAnyApiv2010accountcallAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcall(k), function () {
    verifyApiv2010accountcallExists(k);
  });
});

bthread("Apiv2010accountcall update verification", function () {
  const e = waitForAnyApiv2010accountcallUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcall(k), function () {
    verifyApiv2010accountcallUpdated(k);
  });
});

bthread("Apiv2010accountcall delete verification", function () {
  const e = waitForAnyApiv2010accountcallDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountcall(k), function () {
    verifyApiv2010accountcallDoesNotExist(k);
  });
});

bthread("Apiv2010accountcallcallevent create verification", function () {
  const e = waitForAnyApiv2010accountcallcalleventAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallcallevent(k), function () {
    verifyApiv2010accountcallcalleventExists(k);
  });
});

bthread("Apiv2010accountcallcallevent update verification", function () {
  const e = waitForAnyApiv2010accountcallcalleventUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallcallevent(k), function () {
    verifyApiv2010accountcallcalleventUpdated(k);
  });
});

bthread("Apiv2010accountcallcallevent delete verification", function () {
  const e = waitForAnyApiv2010accountcallcalleventDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountcallcallevent(k), function () {
    verifyApiv2010accountcallcalleventDoesNotExist(k);
  });
});

bthread("Apiv2010accountcallcallnotification create verification", function () {
  const e = waitForAnyApiv2010accountcallcallnotificationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallcallnotification(k), function () {
    verifyApiv2010accountcallcallnotificationExists(k);
  });
});

bthread("Apiv2010accountcallcallnotification update verification", function () {
  const e = waitForAnyApiv2010accountcallcallnotificationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallcallnotification(k), function () {
    verifyApiv2010accountcallcallnotificationUpdated(k);
  });
});

bthread("Apiv2010accountcallcallnotification delete verification", function () {
  const e = waitForAnyApiv2010accountcallcallnotificationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountcallcallnotification(k), function () {
    verifyApiv2010accountcallcallnotificationDoesNotExist(k);
  });
});

bthread("Apiv2010accountcallcallnotificationinstance create verification", function () {
  const e = waitForAnyApiv2010accountcallcallnotificationinstanceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallcallnotificationinstance(k), function () {
    verifyApiv2010accountcallcallnotificationinstanceExists(k);
  });
});

bthread("Apiv2010accountcallcallnotificationinstance update verification", function () {
  const e = waitForAnyApiv2010accountcallcallnotificationinstanceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallcallnotificationinstance(k), function () {
    verifyApiv2010accountcallcallnotificationinstanceUpdated(k);
  });
});

bthread("Apiv2010accountcallcallnotificationinstance delete verification", function () {
  const e = waitForAnyApiv2010accountcallcallnotificationinstanceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountcallcallnotificationinstance(k), function () {
    verifyApiv2010accountcallcallnotificationinstanceDoesNotExist(k);
  });
});

bthread("Apiv2010accountcallcallrecording create verification", function () {
  const e = waitForAnyApiv2010accountcallcallrecordingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallcallrecording(k), function () {
    verifyApiv2010accountcallcallrecordingExists(k);
  });
});

bthread("Apiv2010accountcallcallrecording update verification", function () {
  const e = waitForAnyApiv2010accountcallcallrecordingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallcallrecording(k), function () {
    verifyApiv2010accountcallcallrecordingUpdated(k);
  });
});

bthread("Apiv2010accountcallcallrecording delete verification", function () {
  const e = waitForAnyApiv2010accountcallcallrecordingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountcallcallrecording(k), function () {
    verifyApiv2010accountcallcallrecordingDoesNotExist(k);
  });
});

bthread("Apiv2010accountcallpayments create verification", function () {
  const e = waitForAnyApiv2010accountcallpaymentsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallpayments(k), function () {
    verifyApiv2010accountcallpaymentsExists(k);
  });
});

bthread("Apiv2010accountcallpayments update verification", function () {
  const e = waitForAnyApiv2010accountcallpaymentsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallpayments(k), function () {
    verifyApiv2010accountcallpaymentsUpdated(k);
  });
});

bthread("Apiv2010accountcallpayments delete verification", function () {
  const e = waitForAnyApiv2010accountcallpaymentsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountcallpayments(k), function () {
    verifyApiv2010accountcallpaymentsDoesNotExist(k);
  });
});

bthread("Apiv2010accountcallrealtimetranscription create verification", function () {
  const e = waitForAnyApiv2010accountcallrealtimetranscriptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallrealtimetranscription(k), function () {
    verifyApiv2010accountcallrealtimetranscriptionExists(k);
  });
});

bthread("Apiv2010accountcallrealtimetranscription update verification", function () {
  const e = waitForAnyApiv2010accountcallrealtimetranscriptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallrealtimetranscription(k), function () {
    verifyApiv2010accountcallrealtimetranscriptionUpdated(k);
  });
});

bthread("Apiv2010accountcallrealtimetranscription delete verification", function () {
  const e = waitForAnyApiv2010accountcallrealtimetranscriptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountcallrealtimetranscription(k), function () {
    verifyApiv2010accountcallrealtimetranscriptionDoesNotExist(k);
  });
});

bthread("Apiv2010accountcallsiprec create verification", function () {
  const e = waitForAnyApiv2010accountcallsiprecAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallsiprec(k), function () {
    verifyApiv2010accountcallsiprecExists(k);
  });
});

bthread("Apiv2010accountcallsiprec update verification", function () {
  const e = waitForAnyApiv2010accountcallsiprecUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallsiprec(k), function () {
    verifyApiv2010accountcallsiprecUpdated(k);
  });
});

bthread("Apiv2010accountcallsiprec delete verification", function () {
  const e = waitForAnyApiv2010accountcallsiprecDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountcallsiprec(k), function () {
    verifyApiv2010accountcallsiprecDoesNotExist(k);
  });
});

bthread("Apiv2010accountcallstream create verification", function () {
  const e = waitForAnyApiv2010accountcallstreamAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallstream(k), function () {
    verifyApiv2010accountcallstreamExists(k);
  });
});

bthread("Apiv2010accountcallstream update verification", function () {
  const e = waitForAnyApiv2010accountcallstreamUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcallstream(k), function () {
    verifyApiv2010accountcallstreamUpdated(k);
  });
});

bthread("Apiv2010accountcallstream delete verification", function () {
  const e = waitForAnyApiv2010accountcallstreamDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountcallstream(k), function () {
    verifyApiv2010accountcallstreamDoesNotExist(k);
  });
});

bthread("Apiv2010accountcalluserdefinedmessage create verification", function () {
  const e = waitForAnyApiv2010accountcalluserdefinedmessageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcalluserdefinedmessage(k), function () {
    verifyApiv2010accountcalluserdefinedmessageExists(k);
  });
});

bthread("Apiv2010accountcalluserdefinedmessage update verification", function () {
  const e = waitForAnyApiv2010accountcalluserdefinedmessageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcalluserdefinedmessage(k), function () {
    verifyApiv2010accountcalluserdefinedmessageUpdated(k);
  });
});

bthread("Apiv2010accountcalluserdefinedmessage delete verification", function () {
  const e = waitForAnyApiv2010accountcalluserdefinedmessageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountcalluserdefinedmessage(k), function () {
    verifyApiv2010accountcalluserdefinedmessageDoesNotExist(k);
  });
});

bthread("Apiv2010accountcalluserdefinedmessagesubscription create verification", function () {
  const e = waitForAnyApiv2010accountcalluserdefinedmessagesubscriptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcalluserdefinedmessagesubscription(k), function () {
    verifyApiv2010accountcalluserdefinedmessagesubscriptionExists(k);
  });
});

bthread("Apiv2010accountcalluserdefinedmessagesubscription update verification", function () {
  const e = waitForAnyApiv2010accountcalluserdefinedmessagesubscriptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountcalluserdefinedmessagesubscription(k), function () {
    verifyApiv2010accountcalluserdefinedmessagesubscriptionUpdated(k);
  });
});

bthread("Apiv2010accountcalluserdefinedmessagesubscription delete verification", function () {
  const e = waitForAnyApiv2010accountcalluserdefinedmessagesubscriptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountcalluserdefinedmessagesubscription(k), function () {
    verifyApiv2010accountcalluserdefinedmessagesubscriptionDoesNotExist(k);
  });
});

bthread("Apiv2010accountconference create verification", function () {
  const e = waitForAnyApiv2010accountconferenceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountconference(k), function () {
    verifyApiv2010accountconferenceExists(k);
  });
});

bthread("Apiv2010accountconference update verification", function () {
  const e = waitForAnyApiv2010accountconferenceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountconference(k), function () {
    verifyApiv2010accountconferenceUpdated(k);
  });
});

bthread("Apiv2010accountconference delete verification", function () {
  const e = waitForAnyApiv2010accountconferenceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountconference(k), function () {
    verifyApiv2010accountconferenceDoesNotExist(k);
  });
});

bthread("Apiv2010accountconferenceconferencerecording create verification", function () {
  const e = waitForAnyApiv2010accountconferenceconferencerecordingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountconferenceconferencerecording(k), function () {
    verifyApiv2010accountconferenceconferencerecordingExists(k);
  });
});

bthread("Apiv2010accountconferenceconferencerecording update verification", function () {
  const e = waitForAnyApiv2010accountconferenceconferencerecordingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountconferenceconferencerecording(k), function () {
    verifyApiv2010accountconferenceconferencerecordingUpdated(k);
  });
});

bthread("Apiv2010accountconferenceconferencerecording delete verification", function () {
  const e = waitForAnyApiv2010accountconferenceconferencerecordingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountconferenceconferencerecording(k), function () {
    verifyApiv2010accountconferenceconferencerecordingDoesNotExist(k);
  });
});

bthread("Apiv2010accountconferenceparticipant create verification", function () {
  const e = waitForAnyApiv2010accountconferenceparticipantAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountconferenceparticipant(k), function () {
    verifyApiv2010accountconferenceparticipantExists(k);
  });
});

bthread("Apiv2010accountconferenceparticipant update verification", function () {
  const e = waitForAnyApiv2010accountconferenceparticipantUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountconferenceparticipant(k), function () {
    verifyApiv2010accountconferenceparticipantUpdated(k);
  });
});

bthread("Apiv2010accountconferenceparticipant delete verification", function () {
  const e = waitForAnyApiv2010accountconferenceparticipantDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountconferenceparticipant(k), function () {
    verifyApiv2010accountconferenceparticipantDoesNotExist(k);
  });
});

bthread("Apiv2010accountconnectapp create verification", function () {
  const e = waitForAnyApiv2010accountconnectappAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountconnectapp(k), function () {
    verifyApiv2010accountconnectappExists(k);
  });
});

bthread("Apiv2010accountconnectapp update verification", function () {
  const e = waitForAnyApiv2010accountconnectappUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountconnectapp(k), function () {
    verifyApiv2010accountconnectappUpdated(k);
  });
});

bthread("Apiv2010accountconnectapp delete verification", function () {
  const e = waitForAnyApiv2010accountconnectappDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountconnectapp(k), function () {
    verifyApiv2010accountconnectappDoesNotExist(k);
  });
});

bthread("Apiv2010accountincomingphonenumber create verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountincomingphonenumber(k), function () {
    verifyApiv2010accountincomingphonenumberExists(k);
  });
});

bthread("Apiv2010accountincomingphonenumber update verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountincomingphonenumber(k), function () {
    verifyApiv2010accountincomingphonenumberUpdated(k);
  });
});

bthread("Apiv2010accountincomingphonenumber delete verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountincomingphonenumber(k), function () {
    verifyApiv2010accountincomingphonenumberDoesNotExist(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberassignedaddon create verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonExists(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberassignedaddon update verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonUpdated(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberassignedaddon delete verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonDoesNotExist(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension create verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionExists(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension update verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionUpdated(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension delete verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionDoesNotExist(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberlocal create verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumberlocalAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumberlocal(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberlocalExists(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberlocal update verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumberlocalUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumberlocal(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberlocalUpdated(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumberlocal delete verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumberlocalDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumberlocal(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumberlocalDoesNotExist(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumbermobile create verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumbermobileAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumbermobile(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumbermobileExists(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumbermobile update verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumbermobileUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumbermobile(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumbermobileUpdated(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumbermobile delete verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumbermobileDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumbermobile(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumbermobileDoesNotExist(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumbertollfree create verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumbertollfreeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumbertollfree(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumbertollfreeExists(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumbertollfree update verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumbertollfreeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountincomingphonenumberincomingphonenumbertollfree(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumbertollfreeUpdated(k);
  });
});

bthread("Apiv2010accountincomingphonenumberincomingphonenumbertollfree delete verification", function () {
  const e = waitForAnyApiv2010accountincomingphonenumberincomingphonenumbertollfreeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumbertollfree(k), function () {
    verifyApiv2010accountincomingphonenumberincomingphonenumbertollfreeDoesNotExist(k);
  });
});

bthread("Apiv2010accountkey create verification", function () {
  const e = waitForAnyApiv2010accountkeyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountkey(k), function () {
    verifyApiv2010accountkeyExists(k);
  });
});

bthread("Apiv2010accountkey update verification", function () {
  const e = waitForAnyApiv2010accountkeyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountkey(k), function () {
    verifyApiv2010accountkeyUpdated(k);
  });
});

bthread("Apiv2010accountkey delete verification", function () {
  const e = waitForAnyApiv2010accountkeyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountkey(k), function () {
    verifyApiv2010accountkeyDoesNotExist(k);
  });
});

bthread("Apiv2010accountmessage create verification", function () {
  const e = waitForAnyApiv2010accountmessageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountmessage(k), function () {
    verifyApiv2010accountmessageExists(k);
  });
});

bthread("Apiv2010accountmessage update verification", function () {
  const e = waitForAnyApiv2010accountmessageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountmessage(k), function () {
    verifyApiv2010accountmessageUpdated(k);
  });
});

bthread("Apiv2010accountmessage delete verification", function () {
  const e = waitForAnyApiv2010accountmessageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountmessage(k), function () {
    verifyApiv2010accountmessageDoesNotExist(k);
  });
});

bthread("Apiv2010accountmessagemedia create verification", function () {
  const e = waitForAnyApiv2010accountmessagemediaAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountmessagemedia(k), function () {
    verifyApiv2010accountmessagemediaExists(k);
  });
});

bthread("Apiv2010accountmessagemedia update verification", function () {
  const e = waitForAnyApiv2010accountmessagemediaUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountmessagemedia(k), function () {
    verifyApiv2010accountmessagemediaUpdated(k);
  });
});

bthread("Apiv2010accountmessagemedia delete verification", function () {
  const e = waitForAnyApiv2010accountmessagemediaDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountmessagemedia(k), function () {
    verifyApiv2010accountmessagemediaDoesNotExist(k);
  });
});

bthread("Apiv2010accountmessagemessagefeedback create verification", function () {
  const e = waitForAnyApiv2010accountmessagemessagefeedbackAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountmessagemessagefeedback(k), function () {
    verifyApiv2010accountmessagemessagefeedbackExists(k);
  });
});

bthread("Apiv2010accountmessagemessagefeedback update verification", function () {
  const e = waitForAnyApiv2010accountmessagemessagefeedbackUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountmessagemessagefeedback(k), function () {
    verifyApiv2010accountmessagemessagefeedbackUpdated(k);
  });
});

bthread("Apiv2010accountmessagemessagefeedback delete verification", function () {
  const e = waitForAnyApiv2010accountmessagemessagefeedbackDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountmessagemessagefeedback(k), function () {
    verifyApiv2010accountmessagemessagefeedbackDoesNotExist(k);
  });
});

bthread("Apiv2010accountnewkey create verification", function () {
  const e = waitForAnyApiv2010accountnewkeyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountnewkey(k), function () {
    verifyApiv2010accountnewkeyExists(k);
  });
});

bthread("Apiv2010accountnewkey update verification", function () {
  const e = waitForAnyApiv2010accountnewkeyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountnewkey(k), function () {
    verifyApiv2010accountnewkeyUpdated(k);
  });
});

bthread("Apiv2010accountnewkey delete verification", function () {
  const e = waitForAnyApiv2010accountnewkeyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountnewkey(k), function () {
    verifyApiv2010accountnewkeyDoesNotExist(k);
  });
});

bthread("Apiv2010accountnewsigningkey create verification", function () {
  const e = waitForAnyApiv2010accountnewsigningkeyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountnewsigningkey(k), function () {
    verifyApiv2010accountnewsigningkeyExists(k);
  });
});

bthread("Apiv2010accountnewsigningkey update verification", function () {
  const e = waitForAnyApiv2010accountnewsigningkeyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountnewsigningkey(k), function () {
    verifyApiv2010accountnewsigningkeyUpdated(k);
  });
});

bthread("Apiv2010accountnewsigningkey delete verification", function () {
  const e = waitForAnyApiv2010accountnewsigningkeyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountnewsigningkey(k), function () {
    verifyApiv2010accountnewsigningkeyDoesNotExist(k);
  });
});

bthread("Apiv2010accountnotification create verification", function () {
  const e = waitForAnyApiv2010accountnotificationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountnotification(k), function () {
    verifyApiv2010accountnotificationExists(k);
  });
});

bthread("Apiv2010accountnotification update verification", function () {
  const e = waitForAnyApiv2010accountnotificationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountnotification(k), function () {
    verifyApiv2010accountnotificationUpdated(k);
  });
});

bthread("Apiv2010accountnotification delete verification", function () {
  const e = waitForAnyApiv2010accountnotificationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountnotification(k), function () {
    verifyApiv2010accountnotificationDoesNotExist(k);
  });
});

bthread("Apiv2010accountnotificationinstance create verification", function () {
  const e = waitForAnyApiv2010accountnotificationinstanceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountnotificationinstance(k), function () {
    verifyApiv2010accountnotificationinstanceExists(k);
  });
});

bthread("Apiv2010accountnotificationinstance update verification", function () {
  const e = waitForAnyApiv2010accountnotificationinstanceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountnotificationinstance(k), function () {
    verifyApiv2010accountnotificationinstanceUpdated(k);
  });
});

bthread("Apiv2010accountnotificationinstance delete verification", function () {
  const e = waitForAnyApiv2010accountnotificationinstanceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountnotificationinstance(k), function () {
    verifyApiv2010accountnotificationinstanceDoesNotExist(k);
  });
});

bthread("Apiv2010accountoutgoingcallerid create verification", function () {
  const e = waitForAnyApiv2010accountoutgoingcalleridAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountoutgoingcallerid(k), function () {
    verifyApiv2010accountoutgoingcalleridExists(k);
  });
});

bthread("Apiv2010accountoutgoingcallerid update verification", function () {
  const e = waitForAnyApiv2010accountoutgoingcalleridUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountoutgoingcallerid(k), function () {
    verifyApiv2010accountoutgoingcalleridUpdated(k);
  });
});

bthread("Apiv2010accountoutgoingcallerid delete verification", function () {
  const e = waitForAnyApiv2010accountoutgoingcalleridDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountoutgoingcallerid(k), function () {
    verifyApiv2010accountoutgoingcalleridDoesNotExist(k);
  });
});

bthread("Apiv2010accountqueue create verification", function () {
  const e = waitForAnyApiv2010accountqueueAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountqueue(k), function () {
    verifyApiv2010accountqueueExists(k);
  });
});

bthread("Apiv2010accountqueue update verification", function () {
  const e = waitForAnyApiv2010accountqueueUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountqueue(k), function () {
    verifyApiv2010accountqueueUpdated(k);
  });
});

bthread("Apiv2010accountqueue delete verification", function () {
  const e = waitForAnyApiv2010accountqueueDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountqueue(k), function () {
    verifyApiv2010accountqueueDoesNotExist(k);
  });
});

bthread("Apiv2010accountqueuemember create verification", function () {
  const e = waitForAnyApiv2010accountqueuememberAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountqueuemember(k), function () {
    verifyApiv2010accountqueuememberExists(k);
  });
});

bthread("Apiv2010accountqueuemember update verification", function () {
  const e = waitForAnyApiv2010accountqueuememberUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountqueuemember(k), function () {
    verifyApiv2010accountqueuememberUpdated(k);
  });
});

bthread("Apiv2010accountqueuemember delete verification", function () {
  const e = waitForAnyApiv2010accountqueuememberDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountqueuemember(k), function () {
    verifyApiv2010accountqueuememberDoesNotExist(k);
  });
});

bthread("Apiv2010accountrecording create verification", function () {
  const e = waitForAnyApiv2010accountrecordingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountrecording(k), function () {
    verifyApiv2010accountrecordingExists(k);
  });
});

bthread("Apiv2010accountrecording update verification", function () {
  const e = waitForAnyApiv2010accountrecordingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountrecording(k), function () {
    verifyApiv2010accountrecordingUpdated(k);
  });
});

bthread("Apiv2010accountrecording delete verification", function () {
  const e = waitForAnyApiv2010accountrecordingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountrecording(k), function () {
    verifyApiv2010accountrecordingDoesNotExist(k);
  });
});

bthread("Apiv2010accountrecordingrecordingaddonresult create verification", function () {
  const e = waitForAnyApiv2010accountrecordingrecordingaddonresultAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountrecordingrecordingaddonresult(k), function () {
    verifyApiv2010accountrecordingrecordingaddonresultExists(k);
  });
});

bthread("Apiv2010accountrecordingrecordingaddonresult update verification", function () {
  const e = waitForAnyApiv2010accountrecordingrecordingaddonresultUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountrecordingrecordingaddonresult(k), function () {
    verifyApiv2010accountrecordingrecordingaddonresultUpdated(k);
  });
});

bthread("Apiv2010accountrecordingrecordingaddonresult delete verification", function () {
  const e = waitForAnyApiv2010accountrecordingrecordingaddonresultDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountrecordingrecordingaddonresult(k), function () {
    verifyApiv2010accountrecordingrecordingaddonresultDoesNotExist(k);
  });
});

bthread("Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload create verification", function () {
  const e = waitForAnyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(k), function () {
    verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadExists(k);
  });
});

bthread("Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload update verification", function () {
  const e = waitForAnyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(k), function () {
    verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadUpdated(k);
  });
});

bthread("Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload delete verification", function () {
  const e = waitForAnyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(k), function () {
    verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadDoesNotExist(k);
  });
});

bthread("Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata create verification", function () {
  const e = waitForAnyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(k), function () {
    verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataExists(k);
  });
});

bthread("Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata update verification", function () {
  const e = waitForAnyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(k), function () {
    verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataUpdated(k);
  });
});

bthread("Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata delete verification", function () {
  const e = waitForAnyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(k), function () {
    verifyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataDoesNotExist(k);
  });
});

bthread("Apiv2010accountrecordingrecordingtranscription create verification", function () {
  const e = waitForAnyApiv2010accountrecordingrecordingtranscriptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountrecordingrecordingtranscription(k), function () {
    verifyApiv2010accountrecordingrecordingtranscriptionExists(k);
  });
});

bthread("Apiv2010accountrecordingrecordingtranscription update verification", function () {
  const e = waitForAnyApiv2010accountrecordingrecordingtranscriptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountrecordingrecordingtranscription(k), function () {
    verifyApiv2010accountrecordingrecordingtranscriptionUpdated(k);
  });
});

bthread("Apiv2010accountrecordingrecordingtranscription delete verification", function () {
  const e = waitForAnyApiv2010accountrecordingrecordingtranscriptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountrecordingrecordingtranscription(k), function () {
    verifyApiv2010accountrecordingrecordingtranscriptionDoesNotExist(k);
  });
});

bthread("Apiv2010accountshortcode create verification", function () {
  const e = waitForAnyApiv2010accountshortcodeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountshortcode(k), function () {
    verifyApiv2010accountshortcodeExists(k);
  });
});

bthread("Apiv2010accountshortcode update verification", function () {
  const e = waitForAnyApiv2010accountshortcodeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountshortcode(k), function () {
    verifyApiv2010accountshortcodeUpdated(k);
  });
});

bthread("Apiv2010accountshortcode delete verification", function () {
  const e = waitForAnyApiv2010accountshortcodeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountshortcode(k), function () {
    verifyApiv2010accountshortcodeDoesNotExist(k);
  });
});

bthread("Apiv2010accountsigningkey create verification", function () {
  const e = waitForAnyApiv2010accountsigningkeyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsigningkey(k), function () {
    verifyApiv2010accountsigningkeyExists(k);
  });
});

bthread("Apiv2010accountsigningkey update verification", function () {
  const e = waitForAnyApiv2010accountsigningkeyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsigningkey(k), function () {
    verifyApiv2010accountsigningkeyUpdated(k);
  });
});

bthread("Apiv2010accountsigningkey delete verification", function () {
  const e = waitForAnyApiv2010accountsigningkeyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsigningkey(k), function () {
    verifyApiv2010accountsigningkeyDoesNotExist(k);
  });
});

bthread("Apiv2010accountsip create verification", function () {
  const e = waitForAnyApiv2010accountsipAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsip(k), function () {
    verifyApiv2010accountsipExists(k);
  });
});

bthread("Apiv2010accountsip update verification", function () {
  const e = waitForAnyApiv2010accountsipUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsip(k), function () {
    verifyApiv2010accountsipUpdated(k);
  });
});

bthread("Apiv2010accountsip delete verification", function () {
  const e = waitForAnyApiv2010accountsipDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsip(k), function () {
    verifyApiv2010accountsipDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipcredentiallist create verification", function () {
  const e = waitForAnyApiv2010accountsipsipcredentiallistAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipcredentiallist(k), function () {
    verifyApiv2010accountsipsipcredentiallistExists(k);
  });
});

bthread("Apiv2010accountsipsipcredentiallist update verification", function () {
  const e = waitForAnyApiv2010accountsipsipcredentiallistUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipcredentiallist(k), function () {
    verifyApiv2010accountsipsipcredentiallistUpdated(k);
  });
});

bthread("Apiv2010accountsipsipcredentiallist delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipcredentiallistDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipcredentiallist(k), function () {
    verifyApiv2010accountsipsipcredentiallistDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipcredentiallistsipcredential create verification", function () {
  const e = waitForAnyApiv2010accountsipsipcredentiallistsipcredentialAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipcredentiallistsipcredential(k), function () {
    verifyApiv2010accountsipsipcredentiallistsipcredentialExists(k);
  });
});

bthread("Apiv2010accountsipsipcredentiallistsipcredential update verification", function () {
  const e = waitForAnyApiv2010accountsipsipcredentiallistsipcredentialUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipcredentiallistsipcredential(k), function () {
    verifyApiv2010accountsipsipcredentiallistsipcredentialUpdated(k);
  });
});

bthread("Apiv2010accountsipsipcredentiallistsipcredential delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipcredentiallistsipcredentialDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipcredentiallistsipcredential(k), function () {
    verifyApiv2010accountsipsipcredentiallistsipcredentialDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipdomain create verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomain(k), function () {
    verifyApiv2010accountsipsipdomainExists(k);
  });
});

bthread("Apiv2010accountsipsipdomain update verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomain(k), function () {
    verifyApiv2010accountsipsipdomainUpdated(k);
  });
});

bthread("Apiv2010accountsipsipdomain delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipdomain(k), function () {
    verifyApiv2010accountsipsipdomainDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauth create verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipauth(k), function () {
    verifyApiv2010accountsipsipdomainsipauthExists(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauth update verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipauth(k), function () {
    verifyApiv2010accountsipsipdomainsipauthUpdated(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauth delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipauth(k), function () {
    verifyApiv2010accountsipsipdomainsipauthDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcalls create verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthcallsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthcalls(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallsExists(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcalls update verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthcallsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthcalls(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallsUpdated(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcalls delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthcallsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthcalls(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallsDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping create verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingExists(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping update verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingUpdated(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping create verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingExists(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping update verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingUpdated(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthregistrations create verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthregistrationsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthregistrations(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthregistrationsExists(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthregistrations update verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthregistrationsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthregistrations(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthregistrationsUpdated(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthregistrations delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthregistrationsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthregistrations(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthregistrationsDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping create verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingExists(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping update verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingUpdated(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipcredentiallistmapping create verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipcredentiallistmappingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipcredentiallistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipcredentiallistmappingExists(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipcredentiallistmapping update verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipcredentiallistmappingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipcredentiallistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipcredentiallistmappingUpdated(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipcredentiallistmapping delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipcredentiallistmappingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipcredentiallistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipcredentiallistmappingDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipipaccesscontrollistmapping create verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipipaccesscontrollistmappingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipipaccesscontrollistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipipaccesscontrollistmappingExists(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipipaccesscontrollistmapping update verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipipaccesscontrollistmappingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipdomainsipipaccesscontrollistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipipaccesscontrollistmappingUpdated(k);
  });
});

bthread("Apiv2010accountsipsipdomainsipipaccesscontrollistmapping delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipdomainsipipaccesscontrollistmappingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipipaccesscontrollistmapping(k), function () {
    verifyApiv2010accountsipsipdomainsipipaccesscontrollistmappingDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipipaccesscontrollist create verification", function () {
  const e = waitForAnyApiv2010accountsipsipipaccesscontrollistAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipipaccesscontrollist(k), function () {
    verifyApiv2010accountsipsipipaccesscontrollistExists(k);
  });
});

bthread("Apiv2010accountsipsipipaccesscontrollist update verification", function () {
  const e = waitForAnyApiv2010accountsipsipipaccesscontrollistUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipipaccesscontrollist(k), function () {
    verifyApiv2010accountsipsipipaccesscontrollistUpdated(k);
  });
});

bthread("Apiv2010accountsipsipipaccesscontrollist delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipipaccesscontrollistDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipipaccesscontrollist(k), function () {
    verifyApiv2010accountsipsipipaccesscontrollistDoesNotExist(k);
  });
});

bthread("Apiv2010accountsipsipipaccesscontrollistsipipaddress create verification", function () {
  const e = waitForAnyApiv2010accountsipsipipaccesscontrollistsipipaddressAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipipaccesscontrollistsipipaddress(k), function () {
    verifyApiv2010accountsipsipipaccesscontrollistsipipaddressExists(k);
  });
});

bthread("Apiv2010accountsipsipipaccesscontrollistsipipaddress update verification", function () {
  const e = waitForAnyApiv2010accountsipsipipaccesscontrollistsipipaddressUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountsipsipipaccesscontrollistsipipaddress(k), function () {
    verifyApiv2010accountsipsipipaccesscontrollistsipipaddressUpdated(k);
  });
});

bthread("Apiv2010accountsipsipipaccesscontrollistsipipaddress delete verification", function () {
  const e = waitForAnyApiv2010accountsipsipipaccesscontrollistsipipaddressDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountsipsipipaccesscontrollistsipipaddress(k), function () {
    verifyApiv2010accountsipsipipaccesscontrollistsipipaddressDoesNotExist(k);
  });
});

bthread("Apiv2010accounttoken create verification", function () {
  const e = waitForAnyApiv2010accounttokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accounttoken(k), function () {
    verifyApiv2010accounttokenExists(k);
  });
});

bthread("Apiv2010accounttoken update verification", function () {
  const e = waitForAnyApiv2010accounttokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accounttoken(k), function () {
    verifyApiv2010accounttokenUpdated(k);
  });
});

bthread("Apiv2010accounttoken delete verification", function () {
  const e = waitForAnyApiv2010accounttokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accounttoken(k), function () {
    verifyApiv2010accounttokenDoesNotExist(k);
  });
});

bthread("Apiv2010accounttranscription create verification", function () {
  const e = waitForAnyApiv2010accounttranscriptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accounttranscription(k), function () {
    verifyApiv2010accounttranscriptionExists(k);
  });
});

bthread("Apiv2010accounttranscription update verification", function () {
  const e = waitForAnyApiv2010accounttranscriptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accounttranscription(k), function () {
    verifyApiv2010accounttranscriptionUpdated(k);
  });
});

bthread("Apiv2010accounttranscription delete verification", function () {
  const e = waitForAnyApiv2010accounttranscriptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accounttranscription(k), function () {
    verifyApiv2010accounttranscriptionDoesNotExist(k);
  });
});

bthread("Apiv2010accountusage create verification", function () {
  const e = waitForAnyApiv2010accountusageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusage(k), function () {
    verifyApiv2010accountusageExists(k);
  });
});

bthread("Apiv2010accountusage update verification", function () {
  const e = waitForAnyApiv2010accountusageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusage(k), function () {
    verifyApiv2010accountusageUpdated(k);
  });
});

bthread("Apiv2010accountusage delete verification", function () {
  const e = waitForAnyApiv2010accountusageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountusage(k), function () {
    verifyApiv2010accountusageDoesNotExist(k);
  });
});

bthread("Apiv2010accountusageusagerecord create verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecord(k), function () {
    verifyApiv2010accountusageusagerecordExists(k);
  });
});

bthread("Apiv2010accountusageusagerecord update verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecord(k), function () {
    verifyApiv2010accountusageusagerecordUpdated(k);
  });
});

bthread("Apiv2010accountusageusagerecord delete verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountusageusagerecord(k), function () {
    verifyApiv2010accountusageusagerecordDoesNotExist(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordalltime create verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordalltimeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordalltime(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordalltimeExists(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordalltime update verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordalltimeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordalltime(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordalltimeUpdated(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordalltime delete verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordalltimeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordalltime(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordalltimeDoesNotExist(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecorddaily create verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecorddailyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecorddaily(k), function () {
    verifyApiv2010accountusageusagerecordusagerecorddailyExists(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecorddaily update verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecorddailyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecorddaily(k), function () {
    verifyApiv2010accountusageusagerecordusagerecorddailyUpdated(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecorddaily delete verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecorddailyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecorddaily(k), function () {
    verifyApiv2010accountusageusagerecordusagerecorddailyDoesNotExist(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordlastmonth create verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordlastmonthAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordlastmonth(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordlastmonthExists(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordlastmonth update verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordlastmonthUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordlastmonth(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordlastmonthUpdated(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordlastmonth delete verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordlastmonthDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordlastmonth(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordlastmonthDoesNotExist(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordmonthly create verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordmonthlyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordmonthly(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordmonthlyExists(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordmonthly update verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordmonthlyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordmonthly(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordmonthlyUpdated(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordmonthly delete verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordmonthlyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordmonthly(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordmonthlyDoesNotExist(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordthismonth create verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordthismonthAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordthismonth(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordthismonthExists(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordthismonth update verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordthismonthUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordthismonth(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordthismonthUpdated(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordthismonth delete verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordthismonthDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordthismonth(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordthismonthDoesNotExist(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordtoday create verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordtodayAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordtoday(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordtodayExists(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordtoday update verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordtodayUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordtoday(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordtodayUpdated(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordtoday delete verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordtodayDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordtoday(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordtodayDoesNotExist(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordyearly create verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordyearlyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordyearly(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordyearlyExists(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordyearly update verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordyearlyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordyearly(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordyearlyUpdated(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordyearly delete verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordyearlyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordyearly(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordyearlyDoesNotExist(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordyesterday create verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordyesterdayAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordyesterday(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordyesterdayExists(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordyesterday update verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordyesterdayUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagerecordusagerecordyesterday(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordyesterdayUpdated(k);
  });
});

bthread("Apiv2010accountusageusagerecordusagerecordyesterday delete verification", function () {
  const e = waitForAnyApiv2010accountusageusagerecordusagerecordyesterdayDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordyesterday(k), function () {
    verifyApiv2010accountusageusagerecordusagerecordyesterdayDoesNotExist(k);
  });
});

bthread("Apiv2010accountusageusagetrigger create verification", function () {
  const e = waitForAnyApiv2010accountusageusagetriggerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagetrigger(k), function () {
    verifyApiv2010accountusageusagetriggerExists(k);
  });
});

bthread("Apiv2010accountusageusagetrigger update verification", function () {
  const e = waitForAnyApiv2010accountusageusagetriggerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountusageusagetrigger(k), function () {
    verifyApiv2010accountusageusagetriggerUpdated(k);
  });
});

bthread("Apiv2010accountusageusagetrigger delete verification", function () {
  const e = waitForAnyApiv2010accountusageusagetriggerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountusageusagetrigger(k), function () {
    verifyApiv2010accountusageusagetriggerDoesNotExist(k);
  });
});

bthread("Apiv2010accountvalidationrequest create verification", function () {
  const e = waitForAnyApiv2010accountvalidationrequestAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountvalidationrequest(k), function () {
    verifyApiv2010accountvalidationrequestExists(k);
  });
});

bthread("Apiv2010accountvalidationrequest update verification", function () {
  const e = waitForAnyApiv2010accountvalidationrequestUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApiv2010accountvalidationrequest(k), function () {
    verifyApiv2010accountvalidationrequestUpdated(k);
  });
});

bthread("Apiv2010accountvalidationrequest delete verification", function () {
  const e = waitForAnyApiv2010accountvalidationrequestDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApiv2010accountvalidationrequest(k), function () {
    verifyApiv2010accountvalidationrequestDoesNotExist(k);
  });
});

bthread("Authorizedconnectappenumpermission create verification", function () {
  const e = waitForAnyAuthorizedconnectappenumpermissionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthorizedconnectappenumpermission(k), function () {
    verifyAuthorizedconnectappenumpermissionExists(k);
  });
});

bthread("Authorizedconnectappenumpermission update verification", function () {
  const e = waitForAnyAuthorizedconnectappenumpermissionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthorizedconnectappenumpermission(k), function () {
    verifyAuthorizedconnectappenumpermissionUpdated(k);
  });
});

bthread("Authorizedconnectappenumpermission delete verification", function () {
  const e = waitForAnyAuthorizedconnectappenumpermissionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthorizedconnectappenumpermission(k), function () {
    verifyAuthorizedconnectappenumpermissionDoesNotExist(k);
  });
});

bthread("Callenumevent create verification", function () {
  const e = waitForAnyCallenumeventAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallenumevent(k), function () {
    verifyCallenumeventExists(k);
  });
});

bthread("Callenumevent update verification", function () {
  const e = waitForAnyCallenumeventUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallenumevent(k), function () {
    verifyCallenumeventUpdated(k);
  });
});

bthread("Callenumevent delete verification", function () {
  const e = waitForAnyCallenumeventDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCallenumevent(k), function () {
    verifyCallenumeventDoesNotExist(k);
  });
});

bthread("Callenumstatus create verification", function () {
  const e = waitForAnyCallenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallenumstatus(k), function () {
    verifyCallenumstatusExists(k);
  });
});

bthread("Callenumstatus update verification", function () {
  const e = waitForAnyCallenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallenumstatus(k), function () {
    verifyCallenumstatusUpdated(k);
  });
});

bthread("Callenumstatus delete verification", function () {
  const e = waitForAnyCallenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCallenumstatus(k), function () {
    verifyCallenumstatusDoesNotExist(k);
  });
});

bthread("Callenumupdatestatus create verification", function () {
  const e = waitForAnyCallenumupdatestatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallenumupdatestatus(k), function () {
    verifyCallenumupdatestatusExists(k);
  });
});

bthread("Callenumupdatestatus update verification", function () {
  const e = waitForAnyCallenumupdatestatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallenumupdatestatus(k), function () {
    verifyCallenumupdatestatusUpdated(k);
  });
});

bthread("Callenumupdatestatus delete verification", function () {
  const e = waitForAnyCallenumupdatestatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCallenumupdatestatus(k), function () {
    verifyCallenumupdatestatusDoesNotExist(k);
  });
});

bthread("Callrecordingenumsource create verification", function () {
  const e = waitForAnyCallrecordingenumsourceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallrecordingenumsource(k), function () {
    verifyCallrecordingenumsourceExists(k);
  });
});

bthread("Callrecordingenumsource update verification", function () {
  const e = waitForAnyCallrecordingenumsourceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallrecordingenumsource(k), function () {
    verifyCallrecordingenumsourceUpdated(k);
  });
});

bthread("Callrecordingenumsource delete verification", function () {
  const e = waitForAnyCallrecordingenumsourceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCallrecordingenumsource(k), function () {
    verifyCallrecordingenumsourceDoesNotExist(k);
  });
});

bthread("Callrecordingenumstatus create verification", function () {
  const e = waitForAnyCallrecordingenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallrecordingenumstatus(k), function () {
    verifyCallrecordingenumstatusExists(k);
  });
});

bthread("Callrecordingenumstatus update verification", function () {
  const e = waitForAnyCallrecordingenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallrecordingenumstatus(k), function () {
    verifyCallrecordingenumstatusUpdated(k);
  });
});

bthread("Callrecordingenumstatus delete verification", function () {
  const e = waitForAnyCallrecordingenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCallrecordingenumstatus(k), function () {
    verifyCallrecordingenumstatusDoesNotExist(k);
  });
});

bthread("Conferenceenumreasonconferenceended create verification", function () {
  const e = waitForAnyConferenceenumreasonconferenceendedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConferenceenumreasonconferenceended(k), function () {
    verifyConferenceenumreasonconferenceendedExists(k);
  });
});

bthread("Conferenceenumreasonconferenceended update verification", function () {
  const e = waitForAnyConferenceenumreasonconferenceendedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConferenceenumreasonconferenceended(k), function () {
    verifyConferenceenumreasonconferenceendedUpdated(k);
  });
});

bthread("Conferenceenumreasonconferenceended delete verification", function () {
  const e = waitForAnyConferenceenumreasonconferenceendedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConferenceenumreasonconferenceended(k), function () {
    verifyConferenceenumreasonconferenceendedDoesNotExist(k);
  });
});

bthread("Conferenceenumstatus create verification", function () {
  const e = waitForAnyConferenceenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConferenceenumstatus(k), function () {
    verifyConferenceenumstatusExists(k);
  });
});

bthread("Conferenceenumstatus update verification", function () {
  const e = waitForAnyConferenceenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConferenceenumstatus(k), function () {
    verifyConferenceenumstatusUpdated(k);
  });
});

bthread("Conferenceenumstatus delete verification", function () {
  const e = waitForAnyConferenceenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConferenceenumstatus(k), function () {
    verifyConferenceenumstatusDoesNotExist(k);
  });
});

bthread("Conferenceenumupdatestatus create verification", function () {
  const e = waitForAnyConferenceenumupdatestatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConferenceenumupdatestatus(k), function () {
    verifyConferenceenumupdatestatusExists(k);
  });
});

bthread("Conferenceenumupdatestatus update verification", function () {
  const e = waitForAnyConferenceenumupdatestatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConferenceenumupdatestatus(k), function () {
    verifyConferenceenumupdatestatusUpdated(k);
  });
});

bthread("Conferenceenumupdatestatus delete verification", function () {
  const e = waitForAnyConferenceenumupdatestatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConferenceenumupdatestatus(k), function () {
    verifyConferenceenumupdatestatusDoesNotExist(k);
  });
});

bthread("Conferencerecordingenumsource create verification", function () {
  const e = waitForAnyConferencerecordingenumsourceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConferencerecordingenumsource(k), function () {
    verifyConferencerecordingenumsourceExists(k);
  });
});

bthread("Conferencerecordingenumsource update verification", function () {
  const e = waitForAnyConferencerecordingenumsourceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConferencerecordingenumsource(k), function () {
    verifyConferencerecordingenumsourceUpdated(k);
  });
});

bthread("Conferencerecordingenumsource delete verification", function () {
  const e = waitForAnyConferencerecordingenumsourceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConferencerecordingenumsource(k), function () {
    verifyConferencerecordingenumsourceDoesNotExist(k);
  });
});

bthread("Conferencerecordingenumstatus create verification", function () {
  const e = waitForAnyConferencerecordingenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConferencerecordingenumstatus(k), function () {
    verifyConferencerecordingenumstatusExists(k);
  });
});

bthread("Conferencerecordingenumstatus update verification", function () {
  const e = waitForAnyConferencerecordingenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConferencerecordingenumstatus(k), function () {
    verifyConferencerecordingenumstatusUpdated(k);
  });
});

bthread("Conferencerecordingenumstatus delete verification", function () {
  const e = waitForAnyConferencerecordingenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConferencerecordingenumstatus(k), function () {
    verifyConferencerecordingenumstatusDoesNotExist(k);
  });
});

bthread("Connectappenumpermission create verification", function () {
  const e = waitForAnyConnectappenumpermissionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConnectappenumpermission(k), function () {
    verifyConnectappenumpermissionExists(k);
  });
});

bthread("Connectappenumpermission update verification", function () {
  const e = waitForAnyConnectappenumpermissionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConnectappenumpermission(k), function () {
    verifyConnectappenumpermissionUpdated(k);
  });
});

bthread("Connectappenumpermission delete verification", function () {
  const e = waitForAnyConnectappenumpermissionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConnectappenumpermission(k), function () {
    verifyConnectappenumpermissionDoesNotExist(k);
  });
});

bthread("Dependentphonenumberenumaddressrequirement create verification", function () {
  const e = waitForAnyDependentphonenumberenumaddressrequirementAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDependentphonenumberenumaddressrequirement(k), function () {
    verifyDependentphonenumberenumaddressrequirementExists(k);
  });
});

bthread("Dependentphonenumberenumaddressrequirement update verification", function () {
  const e = waitForAnyDependentphonenumberenumaddressrequirementUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDependentphonenumberenumaddressrequirement(k), function () {
    verifyDependentphonenumberenumaddressrequirementUpdated(k);
  });
});

bthread("Dependentphonenumberenumaddressrequirement delete verification", function () {
  const e = waitForAnyDependentphonenumberenumaddressrequirementDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDependentphonenumberenumaddressrequirement(k), function () {
    verifyDependentphonenumberenumaddressrequirementDoesNotExist(k);
  });
});

bthread("Dependentphonenumberenumemergencystatus create verification", function () {
  const e = waitForAnyDependentphonenumberenumemergencystatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDependentphonenumberenumemergencystatus(k), function () {
    verifyDependentphonenumberenumemergencystatusExists(k);
  });
});

bthread("Dependentphonenumberenumemergencystatus update verification", function () {
  const e = waitForAnyDependentphonenumberenumemergencystatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDependentphonenumberenumemergencystatus(k), function () {
    verifyDependentphonenumberenumemergencystatusUpdated(k);
  });
});

bthread("Dependentphonenumberenumemergencystatus delete verification", function () {
  const e = waitForAnyDependentphonenumberenumemergencystatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDependentphonenumberenumemergencystatus(k), function () {
    verifyDependentphonenumberenumemergencystatusDoesNotExist(k);
  });
});

bthread("Incomingphonenumberenumaddressrequirement create verification", function () {
  const e = waitForAnyIncomingphonenumberenumaddressrequirementAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberenumaddressrequirement(k), function () {
    verifyIncomingphonenumberenumaddressrequirementExists(k);
  });
});

bthread("Incomingphonenumberenumaddressrequirement update verification", function () {
  const e = waitForAnyIncomingphonenumberenumaddressrequirementUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberenumaddressrequirement(k), function () {
    verifyIncomingphonenumberenumaddressrequirementUpdated(k);
  });
});

bthread("Incomingphonenumberenumaddressrequirement delete verification", function () {
  const e = waitForAnyIncomingphonenumberenumaddressrequirementDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumberenumaddressrequirement(k), function () {
    verifyIncomingphonenumberenumaddressrequirementDoesNotExist(k);
  });
});

bthread("Incomingphonenumberenumemergencyaddressstatus create verification", function () {
  const e = waitForAnyIncomingphonenumberenumemergencyaddressstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberenumemergencyaddressstatus(k), function () {
    verifyIncomingphonenumberenumemergencyaddressstatusExists(k);
  });
});

bthread("Incomingphonenumberenumemergencyaddressstatus update verification", function () {
  const e = waitForAnyIncomingphonenumberenumemergencyaddressstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberenumemergencyaddressstatus(k), function () {
    verifyIncomingphonenumberenumemergencyaddressstatusUpdated(k);
  });
});

bthread("Incomingphonenumberenumemergencyaddressstatus delete verification", function () {
  const e = waitForAnyIncomingphonenumberenumemergencyaddressstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumberenumemergencyaddressstatus(k), function () {
    verifyIncomingphonenumberenumemergencyaddressstatusDoesNotExist(k);
  });
});

bthread("Incomingphonenumberenumemergencystatus create verification", function () {
  const e = waitForAnyIncomingphonenumberenumemergencystatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberenumemergencystatus(k), function () {
    verifyIncomingphonenumberenumemergencystatusExists(k);
  });
});

bthread("Incomingphonenumberenumemergencystatus update verification", function () {
  const e = waitForAnyIncomingphonenumberenumemergencystatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberenumemergencystatus(k), function () {
    verifyIncomingphonenumberenumemergencystatusUpdated(k);
  });
});

bthread("Incomingphonenumberenumemergencystatus delete verification", function () {
  const e = waitForAnyIncomingphonenumberenumemergencystatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumberenumemergencystatus(k), function () {
    verifyIncomingphonenumberenumemergencystatusDoesNotExist(k);
  });
});

bthread("Incomingphonenumberenumvoicereceivemode create verification", function () {
  const e = waitForAnyIncomingphonenumberenumvoicereceivemodeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberenumvoicereceivemode(k), function () {
    verifyIncomingphonenumberenumvoicereceivemodeExists(k);
  });
});

bthread("Incomingphonenumberenumvoicereceivemode update verification", function () {
  const e = waitForAnyIncomingphonenumberenumvoicereceivemodeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberenumvoicereceivemode(k), function () {
    verifyIncomingphonenumberenumvoicereceivemodeUpdated(k);
  });
});

bthread("Incomingphonenumberenumvoicereceivemode delete verification", function () {
  const e = waitForAnyIncomingphonenumberenumvoicereceivemodeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumberenumvoicereceivemode(k), function () {
    verifyIncomingphonenumberenumvoicereceivemodeDoesNotExist(k);
  });
});

bthread("Incomingphonenumberlocalenumaddressrequirement create verification", function () {
  const e = waitForAnyIncomingphonenumberlocalenumaddressrequirementAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberlocalenumaddressrequirement(k), function () {
    verifyIncomingphonenumberlocalenumaddressrequirementExists(k);
  });
});

bthread("Incomingphonenumberlocalenumaddressrequirement update verification", function () {
  const e = waitForAnyIncomingphonenumberlocalenumaddressrequirementUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberlocalenumaddressrequirement(k), function () {
    verifyIncomingphonenumberlocalenumaddressrequirementUpdated(k);
  });
});

bthread("Incomingphonenumberlocalenumaddressrequirement delete verification", function () {
  const e = waitForAnyIncomingphonenumberlocalenumaddressrequirementDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumberlocalenumaddressrequirement(k), function () {
    verifyIncomingphonenumberlocalenumaddressrequirementDoesNotExist(k);
  });
});

bthread("Incomingphonenumberlocalenumemergencyaddressstatus create verification", function () {
  const e = waitForAnyIncomingphonenumberlocalenumemergencyaddressstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberlocalenumemergencyaddressstatus(k), function () {
    verifyIncomingphonenumberlocalenumemergencyaddressstatusExists(k);
  });
});

bthread("Incomingphonenumberlocalenumemergencyaddressstatus update verification", function () {
  const e = waitForAnyIncomingphonenumberlocalenumemergencyaddressstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberlocalenumemergencyaddressstatus(k), function () {
    verifyIncomingphonenumberlocalenumemergencyaddressstatusUpdated(k);
  });
});

bthread("Incomingphonenumberlocalenumemergencyaddressstatus delete verification", function () {
  const e = waitForAnyIncomingphonenumberlocalenumemergencyaddressstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumberlocalenumemergencyaddressstatus(k), function () {
    verifyIncomingphonenumberlocalenumemergencyaddressstatusDoesNotExist(k);
  });
});

bthread("Incomingphonenumberlocalenumemergencystatus create verification", function () {
  const e = waitForAnyIncomingphonenumberlocalenumemergencystatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberlocalenumemergencystatus(k), function () {
    verifyIncomingphonenumberlocalenumemergencystatusExists(k);
  });
});

bthread("Incomingphonenumberlocalenumemergencystatus update verification", function () {
  const e = waitForAnyIncomingphonenumberlocalenumemergencystatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberlocalenumemergencystatus(k), function () {
    verifyIncomingphonenumberlocalenumemergencystatusUpdated(k);
  });
});

bthread("Incomingphonenumberlocalenumemergencystatus delete verification", function () {
  const e = waitForAnyIncomingphonenumberlocalenumemergencystatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumberlocalenumemergencystatus(k), function () {
    verifyIncomingphonenumberlocalenumemergencystatusDoesNotExist(k);
  });
});

bthread("Incomingphonenumberlocalenumvoicereceivemode create verification", function () {
  const e = waitForAnyIncomingphonenumberlocalenumvoicereceivemodeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberlocalenumvoicereceivemode(k), function () {
    verifyIncomingphonenumberlocalenumvoicereceivemodeExists(k);
  });
});

bthread("Incomingphonenumberlocalenumvoicereceivemode update verification", function () {
  const e = waitForAnyIncomingphonenumberlocalenumvoicereceivemodeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumberlocalenumvoicereceivemode(k), function () {
    verifyIncomingphonenumberlocalenumvoicereceivemodeUpdated(k);
  });
});

bthread("Incomingphonenumberlocalenumvoicereceivemode delete verification", function () {
  const e = waitForAnyIncomingphonenumberlocalenumvoicereceivemodeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumberlocalenumvoicereceivemode(k), function () {
    verifyIncomingphonenumberlocalenumvoicereceivemodeDoesNotExist(k);
  });
});

bthread("Incomingphonenumbermobileenumaddressrequirement create verification", function () {
  const e = waitForAnyIncomingphonenumbermobileenumaddressrequirementAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbermobileenumaddressrequirement(k), function () {
    verifyIncomingphonenumbermobileenumaddressrequirementExists(k);
  });
});

bthread("Incomingphonenumbermobileenumaddressrequirement update verification", function () {
  const e = waitForAnyIncomingphonenumbermobileenumaddressrequirementUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbermobileenumaddressrequirement(k), function () {
    verifyIncomingphonenumbermobileenumaddressrequirementUpdated(k);
  });
});

bthread("Incomingphonenumbermobileenumaddressrequirement delete verification", function () {
  const e = waitForAnyIncomingphonenumbermobileenumaddressrequirementDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumbermobileenumaddressrequirement(k), function () {
    verifyIncomingphonenumbermobileenumaddressrequirementDoesNotExist(k);
  });
});

bthread("Incomingphonenumbermobileenumemergencyaddressstatus create verification", function () {
  const e = waitForAnyIncomingphonenumbermobileenumemergencyaddressstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbermobileenumemergencyaddressstatus(k), function () {
    verifyIncomingphonenumbermobileenumemergencyaddressstatusExists(k);
  });
});

bthread("Incomingphonenumbermobileenumemergencyaddressstatus update verification", function () {
  const e = waitForAnyIncomingphonenumbermobileenumemergencyaddressstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbermobileenumemergencyaddressstatus(k), function () {
    verifyIncomingphonenumbermobileenumemergencyaddressstatusUpdated(k);
  });
});

bthread("Incomingphonenumbermobileenumemergencyaddressstatus delete verification", function () {
  const e = waitForAnyIncomingphonenumbermobileenumemergencyaddressstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumbermobileenumemergencyaddressstatus(k), function () {
    verifyIncomingphonenumbermobileenumemergencyaddressstatusDoesNotExist(k);
  });
});

bthread("Incomingphonenumbermobileenumemergencystatus create verification", function () {
  const e = waitForAnyIncomingphonenumbermobileenumemergencystatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbermobileenumemergencystatus(k), function () {
    verifyIncomingphonenumbermobileenumemergencystatusExists(k);
  });
});

bthread("Incomingphonenumbermobileenumemergencystatus update verification", function () {
  const e = waitForAnyIncomingphonenumbermobileenumemergencystatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbermobileenumemergencystatus(k), function () {
    verifyIncomingphonenumbermobileenumemergencystatusUpdated(k);
  });
});

bthread("Incomingphonenumbermobileenumemergencystatus delete verification", function () {
  const e = waitForAnyIncomingphonenumbermobileenumemergencystatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumbermobileenumemergencystatus(k), function () {
    verifyIncomingphonenumbermobileenumemergencystatusDoesNotExist(k);
  });
});

bthread("Incomingphonenumbermobileenumvoicereceivemode create verification", function () {
  const e = waitForAnyIncomingphonenumbermobileenumvoicereceivemodeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbermobileenumvoicereceivemode(k), function () {
    verifyIncomingphonenumbermobileenumvoicereceivemodeExists(k);
  });
});

bthread("Incomingphonenumbermobileenumvoicereceivemode update verification", function () {
  const e = waitForAnyIncomingphonenumbermobileenumvoicereceivemodeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbermobileenumvoicereceivemode(k), function () {
    verifyIncomingphonenumbermobileenumvoicereceivemodeUpdated(k);
  });
});

bthread("Incomingphonenumbermobileenumvoicereceivemode delete verification", function () {
  const e = waitForAnyIncomingphonenumbermobileenumvoicereceivemodeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumbermobileenumvoicereceivemode(k), function () {
    verifyIncomingphonenumbermobileenumvoicereceivemodeDoesNotExist(k);
  });
});

bthread("Incomingphonenumbertollfreeenumaddressrequirement create verification", function () {
  const e = waitForAnyIncomingphonenumbertollfreeenumaddressrequirementAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbertollfreeenumaddressrequirement(k), function () {
    verifyIncomingphonenumbertollfreeenumaddressrequirementExists(k);
  });
});

bthread("Incomingphonenumbertollfreeenumaddressrequirement update verification", function () {
  const e = waitForAnyIncomingphonenumbertollfreeenumaddressrequirementUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbertollfreeenumaddressrequirement(k), function () {
    verifyIncomingphonenumbertollfreeenumaddressrequirementUpdated(k);
  });
});

bthread("Incomingphonenumbertollfreeenumaddressrequirement delete verification", function () {
  const e = waitForAnyIncomingphonenumbertollfreeenumaddressrequirementDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumbertollfreeenumaddressrequirement(k), function () {
    verifyIncomingphonenumbertollfreeenumaddressrequirementDoesNotExist(k);
  });
});

bthread("Incomingphonenumbertollfreeenumemergencyaddressstatus create verification", function () {
  const e = waitForAnyIncomingphonenumbertollfreeenumemergencyaddressstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbertollfreeenumemergencyaddressstatus(k), function () {
    verifyIncomingphonenumbertollfreeenumemergencyaddressstatusExists(k);
  });
});

bthread("Incomingphonenumbertollfreeenumemergencyaddressstatus update verification", function () {
  const e = waitForAnyIncomingphonenumbertollfreeenumemergencyaddressstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbertollfreeenumemergencyaddressstatus(k), function () {
    verifyIncomingphonenumbertollfreeenumemergencyaddressstatusUpdated(k);
  });
});

bthread("Incomingphonenumbertollfreeenumemergencyaddressstatus delete verification", function () {
  const e = waitForAnyIncomingphonenumbertollfreeenumemergencyaddressstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumbertollfreeenumemergencyaddressstatus(k), function () {
    verifyIncomingphonenumbertollfreeenumemergencyaddressstatusDoesNotExist(k);
  });
});

bthread("Incomingphonenumbertollfreeenumemergencystatus create verification", function () {
  const e = waitForAnyIncomingphonenumbertollfreeenumemergencystatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbertollfreeenumemergencystatus(k), function () {
    verifyIncomingphonenumbertollfreeenumemergencystatusExists(k);
  });
});

bthread("Incomingphonenumbertollfreeenumemergencystatus update verification", function () {
  const e = waitForAnyIncomingphonenumbertollfreeenumemergencystatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbertollfreeenumemergencystatus(k), function () {
    verifyIncomingphonenumbertollfreeenumemergencystatusUpdated(k);
  });
});

bthread("Incomingphonenumbertollfreeenumemergencystatus delete verification", function () {
  const e = waitForAnyIncomingphonenumbertollfreeenumemergencystatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumbertollfreeenumemergencystatus(k), function () {
    verifyIncomingphonenumbertollfreeenumemergencystatusDoesNotExist(k);
  });
});

bthread("Incomingphonenumbertollfreeenumvoicereceivemode create verification", function () {
  const e = waitForAnyIncomingphonenumbertollfreeenumvoicereceivemodeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbertollfreeenumvoicereceivemode(k), function () {
    verifyIncomingphonenumbertollfreeenumvoicereceivemodeExists(k);
  });
});

bthread("Incomingphonenumbertollfreeenumvoicereceivemode update verification", function () {
  const e = waitForAnyIncomingphonenumbertollfreeenumvoicereceivemodeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbertollfreeenumvoicereceivemode(k), function () {
    verifyIncomingphonenumbertollfreeenumvoicereceivemodeUpdated(k);
  });
});

bthread("Incomingphonenumbertollfreeenumvoicereceivemode delete verification", function () {
  const e = waitForAnyIncomingphonenumbertollfreeenumvoicereceivemodeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumbertollfreeenumvoicereceivemode(k), function () {
    verifyIncomingphonenumbertollfreeenumvoicereceivemodeDoesNotExist(k);
  });
});

bthread("Messageenumaddressretention create verification", function () {
  const e = waitForAnyMessageenumaddressretentionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumaddressretention(k), function () {
    verifyMessageenumaddressretentionExists(k);
  });
});

bthread("Messageenumaddressretention update verification", function () {
  const e = waitForAnyMessageenumaddressretentionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumaddressretention(k), function () {
    verifyMessageenumaddressretentionUpdated(k);
  });
});

bthread("Messageenumaddressretention delete verification", function () {
  const e = waitForAnyMessageenumaddressretentionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessageenumaddressretention(k), function () {
    verifyMessageenumaddressretentionDoesNotExist(k);
  });
});

bthread("Messageenumcontentretention create verification", function () {
  const e = waitForAnyMessageenumcontentretentionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumcontentretention(k), function () {
    verifyMessageenumcontentretentionExists(k);
  });
});

bthread("Messageenumcontentretention update verification", function () {
  const e = waitForAnyMessageenumcontentretentionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumcontentretention(k), function () {
    verifyMessageenumcontentretentionUpdated(k);
  });
});

bthread("Messageenumcontentretention delete verification", function () {
  const e = waitForAnyMessageenumcontentretentionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessageenumcontentretention(k), function () {
    verifyMessageenumcontentretentionDoesNotExist(k);
  });
});

bthread("Messageenumdirection create verification", function () {
  const e = waitForAnyMessageenumdirectionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumdirection(k), function () {
    verifyMessageenumdirectionExists(k);
  });
});

bthread("Messageenumdirection update verification", function () {
  const e = waitForAnyMessageenumdirectionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumdirection(k), function () {
    verifyMessageenumdirectionUpdated(k);
  });
});

bthread("Messageenumdirection delete verification", function () {
  const e = waitForAnyMessageenumdirectionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessageenumdirection(k), function () {
    verifyMessageenumdirectionDoesNotExist(k);
  });
});

bthread("Messageenumriskcheck create verification", function () {
  const e = waitForAnyMessageenumriskcheckAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumriskcheck(k), function () {
    verifyMessageenumriskcheckExists(k);
  });
});

bthread("Messageenumriskcheck update verification", function () {
  const e = waitForAnyMessageenumriskcheckUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumriskcheck(k), function () {
    verifyMessageenumriskcheckUpdated(k);
  });
});

bthread("Messageenumriskcheck delete verification", function () {
  const e = waitForAnyMessageenumriskcheckDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessageenumriskcheck(k), function () {
    verifyMessageenumriskcheckDoesNotExist(k);
  });
});

bthread("Messageenumscheduletype create verification", function () {
  const e = waitForAnyMessageenumscheduletypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumscheduletype(k), function () {
    verifyMessageenumscheduletypeExists(k);
  });
});

bthread("Messageenumscheduletype update verification", function () {
  const e = waitForAnyMessageenumscheduletypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumscheduletype(k), function () {
    verifyMessageenumscheduletypeUpdated(k);
  });
});

bthread("Messageenumscheduletype delete verification", function () {
  const e = waitForAnyMessageenumscheduletypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessageenumscheduletype(k), function () {
    verifyMessageenumscheduletypeDoesNotExist(k);
  });
});

bthread("Messageenumstatus create verification", function () {
  const e = waitForAnyMessageenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumstatus(k), function () {
    verifyMessageenumstatusExists(k);
  });
});

bthread("Messageenumstatus update verification", function () {
  const e = waitForAnyMessageenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumstatus(k), function () {
    verifyMessageenumstatusUpdated(k);
  });
});

bthread("Messageenumstatus delete verification", function () {
  const e = waitForAnyMessageenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessageenumstatus(k), function () {
    verifyMessageenumstatusDoesNotExist(k);
  });
});

bthread("Messageenumtraffictype create verification", function () {
  const e = waitForAnyMessageenumtraffictypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumtraffictype(k), function () {
    verifyMessageenumtraffictypeExists(k);
  });
});

bthread("Messageenumtraffictype update verification", function () {
  const e = waitForAnyMessageenumtraffictypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumtraffictype(k), function () {
    verifyMessageenumtraffictypeUpdated(k);
  });
});

bthread("Messageenumtraffictype delete verification", function () {
  const e = waitForAnyMessageenumtraffictypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessageenumtraffictype(k), function () {
    verifyMessageenumtraffictypeDoesNotExist(k);
  });
});

bthread("Messageenumupdatestatus create verification", function () {
  const e = waitForAnyMessageenumupdatestatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumupdatestatus(k), function () {
    verifyMessageenumupdatestatusExists(k);
  });
});

bthread("Messageenumupdatestatus update verification", function () {
  const e = waitForAnyMessageenumupdatestatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageenumupdatestatus(k), function () {
    verifyMessageenumupdatestatusUpdated(k);
  });
});

bthread("Messageenumupdatestatus delete verification", function () {
  const e = waitForAnyMessageenumupdatestatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessageenumupdatestatus(k), function () {
    verifyMessageenumupdatestatusDoesNotExist(k);
  });
});

bthread("Messagefeedbackenumoutcome create verification", function () {
  const e = waitForAnyMessagefeedbackenumoutcomeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessagefeedbackenumoutcome(k), function () {
    verifyMessagefeedbackenumoutcomeExists(k);
  });
});

bthread("Messagefeedbackenumoutcome update verification", function () {
  const e = waitForAnyMessagefeedbackenumoutcomeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessagefeedbackenumoutcome(k), function () {
    verifyMessagefeedbackenumoutcomeUpdated(k);
  });
});

bthread("Messagefeedbackenumoutcome delete verification", function () {
  const e = waitForAnyMessagefeedbackenumoutcomeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessagefeedbackenumoutcome(k), function () {
    verifyMessagefeedbackenumoutcomeDoesNotExist(k);
  });
});

bthread("Participantenumstatus create verification", function () {
  const e = waitForAnyParticipantenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteParticipantenumstatus(k), function () {
    verifyParticipantenumstatusExists(k);
  });
});

bthread("Participantenumstatus update verification", function () {
  const e = waitForAnyParticipantenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteParticipantenumstatus(k), function () {
    verifyParticipantenumstatusUpdated(k);
  });
});

bthread("Participantenumstatus delete verification", function () {
  const e = waitForAnyParticipantenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddParticipantenumstatus(k), function () {
    verifyParticipantenumstatusDoesNotExist(k);
  });
});

bthread("Paymentsenumbankaccounttype create verification", function () {
  const e = waitForAnyPaymentsenumbankaccounttypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePaymentsenumbankaccounttype(k), function () {
    verifyPaymentsenumbankaccounttypeExists(k);
  });
});

bthread("Paymentsenumbankaccounttype update verification", function () {
  const e = waitForAnyPaymentsenumbankaccounttypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePaymentsenumbankaccounttype(k), function () {
    verifyPaymentsenumbankaccounttypeUpdated(k);
  });
});

bthread("Paymentsenumbankaccounttype delete verification", function () {
  const e = waitForAnyPaymentsenumbankaccounttypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPaymentsenumbankaccounttype(k), function () {
    verifyPaymentsenumbankaccounttypeDoesNotExist(k);
  });
});

bthread("Paymentsenumcapture create verification", function () {
  const e = waitForAnyPaymentsenumcaptureAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePaymentsenumcapture(k), function () {
    verifyPaymentsenumcaptureExists(k);
  });
});

bthread("Paymentsenumcapture update verification", function () {
  const e = waitForAnyPaymentsenumcaptureUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePaymentsenumcapture(k), function () {
    verifyPaymentsenumcaptureUpdated(k);
  });
});

bthread("Paymentsenumcapture delete verification", function () {
  const e = waitForAnyPaymentsenumcaptureDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPaymentsenumcapture(k), function () {
    verifyPaymentsenumcaptureDoesNotExist(k);
  });
});

bthread("Paymentsenumpaymentmethod create verification", function () {
  const e = waitForAnyPaymentsenumpaymentmethodAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePaymentsenumpaymentmethod(k), function () {
    verifyPaymentsenumpaymentmethodExists(k);
  });
});

bthread("Paymentsenumpaymentmethod update verification", function () {
  const e = waitForAnyPaymentsenumpaymentmethodUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePaymentsenumpaymentmethod(k), function () {
    verifyPaymentsenumpaymentmethodUpdated(k);
  });
});

bthread("Paymentsenumpaymentmethod delete verification", function () {
  const e = waitForAnyPaymentsenumpaymentmethodDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPaymentsenumpaymentmethod(k), function () {
    verifyPaymentsenumpaymentmethodDoesNotExist(k);
  });
});

bthread("Paymentsenumstatus create verification", function () {
  const e = waitForAnyPaymentsenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePaymentsenumstatus(k), function () {
    verifyPaymentsenumstatusExists(k);
  });
});

bthread("Paymentsenumstatus update verification", function () {
  const e = waitForAnyPaymentsenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePaymentsenumstatus(k), function () {
    verifyPaymentsenumstatusUpdated(k);
  });
});

bthread("Paymentsenumstatus delete verification", function () {
  const e = waitForAnyPaymentsenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPaymentsenumstatus(k), function () {
    verifyPaymentsenumstatusDoesNotExist(k);
  });
});

bthread("Paymentsenumtokentype create verification", function () {
  const e = waitForAnyPaymentsenumtokentypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePaymentsenumtokentype(k), function () {
    verifyPaymentsenumtokentypeExists(k);
  });
});

bthread("Paymentsenumtokentype update verification", function () {
  const e = waitForAnyPaymentsenumtokentypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePaymentsenumtokentype(k), function () {
    verifyPaymentsenumtokentypeUpdated(k);
  });
});

bthread("Paymentsenumtokentype delete verification", function () {
  const e = waitForAnyPaymentsenumtokentypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPaymentsenumtokentype(k), function () {
    verifyPaymentsenumtokentypeDoesNotExist(k);
  });
});

bthread("Realtimetranscriptionenumstatus create verification", function () {
  const e = waitForAnyRealtimetranscriptionenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealtimetranscriptionenumstatus(k), function () {
    verifyRealtimetranscriptionenumstatusExists(k);
  });
});

bthread("Realtimetranscriptionenumstatus update verification", function () {
  const e = waitForAnyRealtimetranscriptionenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealtimetranscriptionenumstatus(k), function () {
    verifyRealtimetranscriptionenumstatusUpdated(k);
  });
});

bthread("Realtimetranscriptionenumstatus delete verification", function () {
  const e = waitForAnyRealtimetranscriptionenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealtimetranscriptionenumstatus(k), function () {
    verifyRealtimetranscriptionenumstatusDoesNotExist(k);
  });
});

bthread("Realtimetranscriptionenumtrack create verification", function () {
  const e = waitForAnyRealtimetranscriptionenumtrackAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealtimetranscriptionenumtrack(k), function () {
    verifyRealtimetranscriptionenumtrackExists(k);
  });
});

bthread("Realtimetranscriptionenumtrack update verification", function () {
  const e = waitForAnyRealtimetranscriptionenumtrackUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealtimetranscriptionenumtrack(k), function () {
    verifyRealtimetranscriptionenumtrackUpdated(k);
  });
});

bthread("Realtimetranscriptionenumtrack delete verification", function () {
  const e = waitForAnyRealtimetranscriptionenumtrackDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealtimetranscriptionenumtrack(k), function () {
    verifyRealtimetranscriptionenumtrackDoesNotExist(k);
  });
});

bthread("Realtimetranscriptionenumupdatestatus create verification", function () {
  const e = waitForAnyRealtimetranscriptionenumupdatestatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealtimetranscriptionenumupdatestatus(k), function () {
    verifyRealtimetranscriptionenumupdatestatusExists(k);
  });
});

bthread("Realtimetranscriptionenumupdatestatus update verification", function () {
  const e = waitForAnyRealtimetranscriptionenumupdatestatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealtimetranscriptionenumupdatestatus(k), function () {
    verifyRealtimetranscriptionenumupdatestatusUpdated(k);
  });
});

bthread("Realtimetranscriptionenumupdatestatus delete verification", function () {
  const e = waitForAnyRealtimetranscriptionenumupdatestatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealtimetranscriptionenumupdatestatus(k), function () {
    verifyRealtimetranscriptionenumupdatestatusDoesNotExist(k);
  });
});

bthread("Recordingaddonresultenumstatus create verification", function () {
  const e = waitForAnyRecordingaddonresultenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecordingaddonresultenumstatus(k), function () {
    verifyRecordingaddonresultenumstatusExists(k);
  });
});

bthread("Recordingaddonresultenumstatus update verification", function () {
  const e = waitForAnyRecordingaddonresultenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecordingaddonresultenumstatus(k), function () {
    verifyRecordingaddonresultenumstatusUpdated(k);
  });
});

bthread("Recordingaddonresultenumstatus delete verification", function () {
  const e = waitForAnyRecordingaddonresultenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRecordingaddonresultenumstatus(k), function () {
    verifyRecordingaddonresultenumstatusDoesNotExist(k);
  });
});

bthread("Recordingenumsource create verification", function () {
  const e = waitForAnyRecordingenumsourceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecordingenumsource(k), function () {
    verifyRecordingenumsourceExists(k);
  });
});

bthread("Recordingenumsource update verification", function () {
  const e = waitForAnyRecordingenumsourceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecordingenumsource(k), function () {
    verifyRecordingenumsourceUpdated(k);
  });
});

bthread("Recordingenumsource delete verification", function () {
  const e = waitForAnyRecordingenumsourceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRecordingenumsource(k), function () {
    verifyRecordingenumsourceDoesNotExist(k);
  });
});

bthread("Recordingenumstatus create verification", function () {
  const e = waitForAnyRecordingenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecordingenumstatus(k), function () {
    verifyRecordingenumstatusExists(k);
  });
});

bthread("Recordingenumstatus update verification", function () {
  const e = waitForAnyRecordingenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecordingenumstatus(k), function () {
    verifyRecordingenumstatusUpdated(k);
  });
});

bthread("Recordingenumstatus delete verification", function () {
  const e = waitForAnyRecordingenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRecordingenumstatus(k), function () {
    verifyRecordingenumstatusDoesNotExist(k);
  });
});

bthread("Recordingtranscriptionenumstatus create verification", function () {
  const e = waitForAnyRecordingtranscriptionenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecordingtranscriptionenumstatus(k), function () {
    verifyRecordingtranscriptionenumstatusExists(k);
  });
});

bthread("Recordingtranscriptionenumstatus update verification", function () {
  const e = waitForAnyRecordingtranscriptionenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecordingtranscriptionenumstatus(k), function () {
    verifyRecordingtranscriptionenumstatusUpdated(k);
  });
});

bthread("Recordingtranscriptionenumstatus delete verification", function () {
  const e = waitForAnyRecordingtranscriptionenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRecordingtranscriptionenumstatus(k), function () {
    verifyRecordingtranscriptionenumstatusDoesNotExist(k);
  });
});

bthread("Siprecenumstatus create verification", function () {
  const e = waitForAnySiprecenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSiprecenumstatus(k), function () {
    verifySiprecenumstatusExists(k);
  });
});

bthread("Siprecenumstatus update verification", function () {
  const e = waitForAnySiprecenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSiprecenumstatus(k), function () {
    verifySiprecenumstatusUpdated(k);
  });
});

bthread("Siprecenumstatus delete verification", function () {
  const e = waitForAnySiprecenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSiprecenumstatus(k), function () {
    verifySiprecenumstatusDoesNotExist(k);
  });
});

bthread("Siprecenumtrack create verification", function () {
  const e = waitForAnySiprecenumtrackAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSiprecenumtrack(k), function () {
    verifySiprecenumtrackExists(k);
  });
});

bthread("Siprecenumtrack update verification", function () {
  const e = waitForAnySiprecenumtrackUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSiprecenumtrack(k), function () {
    verifySiprecenumtrackUpdated(k);
  });
});

bthread("Siprecenumtrack delete verification", function () {
  const e = waitForAnySiprecenumtrackDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSiprecenumtrack(k), function () {
    verifySiprecenumtrackDoesNotExist(k);
  });
});

bthread("Siprecenumupdatestatus create verification", function () {
  const e = waitForAnySiprecenumupdatestatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSiprecenumupdatestatus(k), function () {
    verifySiprecenumupdatestatusExists(k);
  });
});

bthread("Siprecenumupdatestatus update verification", function () {
  const e = waitForAnySiprecenumupdatestatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSiprecenumupdatestatus(k), function () {
    verifySiprecenumupdatestatusUpdated(k);
  });
});

bthread("Siprecenumupdatestatus delete verification", function () {
  const e = waitForAnySiprecenumupdatestatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSiprecenumupdatestatus(k), function () {
    verifySiprecenumupdatestatusDoesNotExist(k);
  });
});

bthread("Smsfeedbackenumoutcome create verification", function () {
  const e = waitForAnySmsfeedbackenumoutcomeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSmsfeedbackenumoutcome(k), function () {
    verifySmsfeedbackenumoutcomeExists(k);
  });
});

bthread("Smsfeedbackenumoutcome update verification", function () {
  const e = waitForAnySmsfeedbackenumoutcomeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSmsfeedbackenumoutcome(k), function () {
    verifySmsfeedbackenumoutcomeUpdated(k);
  });
});

bthread("Smsfeedbackenumoutcome delete verification", function () {
  const e = waitForAnySmsfeedbackenumoutcomeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSmsfeedbackenumoutcome(k), function () {
    verifySmsfeedbackenumoutcomeDoesNotExist(k);
  });
});

bthread("Smsmessageenumdirection create verification", function () {
  const e = waitForAnySmsmessageenumdirectionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSmsmessageenumdirection(k), function () {
    verifySmsmessageenumdirectionExists(k);
  });
});

bthread("Smsmessageenumdirection update verification", function () {
  const e = waitForAnySmsmessageenumdirectionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSmsmessageenumdirection(k), function () {
    verifySmsmessageenumdirectionUpdated(k);
  });
});

bthread("Smsmessageenumdirection delete verification", function () {
  const e = waitForAnySmsmessageenumdirectionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSmsmessageenumdirection(k), function () {
    verifySmsmessageenumdirectionDoesNotExist(k);
  });
});

bthread("Smsmessageenumstatus create verification", function () {
  const e = waitForAnySmsmessageenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSmsmessageenumstatus(k), function () {
    verifySmsmessageenumstatusExists(k);
  });
});

bthread("Smsmessageenumstatus update verification", function () {
  const e = waitForAnySmsmessageenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSmsmessageenumstatus(k), function () {
    verifySmsmessageenumstatusUpdated(k);
  });
});

bthread("Smsmessageenumstatus delete verification", function () {
  const e = waitForAnySmsmessageenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSmsmessageenumstatus(k), function () {
    verifySmsmessageenumstatusDoesNotExist(k);
  });
});

bthread("Streamenumstatus create verification", function () {
  const e = waitForAnyStreamenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStreamenumstatus(k), function () {
    verifyStreamenumstatusExists(k);
  });
});

bthread("Streamenumstatus update verification", function () {
  const e = waitForAnyStreamenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStreamenumstatus(k), function () {
    verifyStreamenumstatusUpdated(k);
  });
});

bthread("Streamenumstatus delete verification", function () {
  const e = waitForAnyStreamenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStreamenumstatus(k), function () {
    verifyStreamenumstatusDoesNotExist(k);
  });
});

bthread("Streamenumtrack create verification", function () {
  const e = waitForAnyStreamenumtrackAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStreamenumtrack(k), function () {
    verifyStreamenumtrackExists(k);
  });
});

bthread("Streamenumtrack update verification", function () {
  const e = waitForAnyStreamenumtrackUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStreamenumtrack(k), function () {
    verifyStreamenumtrackUpdated(k);
  });
});

bthread("Streamenumtrack delete verification", function () {
  const e = waitForAnyStreamenumtrackDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStreamenumtrack(k), function () {
    verifyStreamenumtrackDoesNotExist(k);
  });
});

bthread("Streamenumupdatestatus create verification", function () {
  const e = waitForAnyStreamenumupdatestatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStreamenumupdatestatus(k), function () {
    verifyStreamenumupdatestatusExists(k);
  });
});

bthread("Streamenumupdatestatus update verification", function () {
  const e = waitForAnyStreamenumupdatestatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStreamenumupdatestatus(k), function () {
    verifyStreamenumupdatestatusUpdated(k);
  });
});

bthread("Streamenumupdatestatus delete verification", function () {
  const e = waitForAnyStreamenumupdatestatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStreamenumupdatestatus(k), function () {
    verifyStreamenumupdatestatusDoesNotExist(k);
  });
});

bthread("Transcriptionenumstatus create verification", function () {
  const e = waitForAnyTranscriptionenumstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTranscriptionenumstatus(k), function () {
    verifyTranscriptionenumstatusExists(k);
  });
});

bthread("Transcriptionenumstatus update verification", function () {
  const e = waitForAnyTranscriptionenumstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTranscriptionenumstatus(k), function () {
    verifyTranscriptionenumstatusUpdated(k);
  });
});

bthread("Transcriptionenumstatus delete verification", function () {
  const e = waitForAnyTranscriptionenumstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTranscriptionenumstatus(k), function () {
    verifyTranscriptionenumstatusDoesNotExist(k);
  });
});

bthread("Usagetriggerenumrecurring create verification", function () {
  const e = waitForAnyUsagetriggerenumrecurringAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsagetriggerenumrecurring(k), function () {
    verifyUsagetriggerenumrecurringExists(k);
  });
});

bthread("Usagetriggerenumrecurring update verification", function () {
  const e = waitForAnyUsagetriggerenumrecurringUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsagetriggerenumrecurring(k), function () {
    verifyUsagetriggerenumrecurringUpdated(k);
  });
});

bthread("Usagetriggerenumrecurring delete verification", function () {
  const e = waitForAnyUsagetriggerenumrecurringDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsagetriggerenumrecurring(k), function () {
    verifyUsagetriggerenumrecurringDoesNotExist(k);
  });
});

bthread("Usagetriggerenumtriggerfield create verification", function () {
  const e = waitForAnyUsagetriggerenumtriggerfieldAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsagetriggerenumtriggerfield(k), function () {
    verifyUsagetriggerenumtriggerfieldExists(k);
  });
});

bthread("Usagetriggerenumtriggerfield update verification", function () {
  const e = waitForAnyUsagetriggerenumtriggerfieldUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsagetriggerenumtriggerfield(k), function () {
    verifyUsagetriggerenumtriggerfieldUpdated(k);
  });
});

bthread("Usagetriggerenumtriggerfield delete verification", function () {
  const e = waitForAnyUsagetriggerenumtriggerfieldDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsagetriggerenumtriggerfield(k), function () {
    verifyUsagetriggerenumtriggerfieldDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Accountenumstatus", function () {
  const x = waitForAnyAccountenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAccountenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Accountenumtype", function () {
  const x = waitForAnyAccountenumtypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAccountenumtype(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010account", function () {
  const x = waitForAnyApiv2010accountAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010account(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountaddress", function () {
  const x = waitForAnyApiv2010accountaddressAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountaddress(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountaddressdependentphonenumber", function () {
  const x = waitForAnyApiv2010accountaddressdependentphonenumberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountaddressdependentphonenumber(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountapplication", function () {
  const x = waitForAnyApiv2010accountapplicationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountapplication(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountauthorizedconnectapp", function () {
  const x = waitForAnyApiv2010accountauthorizedconnectappAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountauthorizedconnectapp(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountavailablephonenumbercountry", function () {
  const x = waitForAnyApiv2010accountavailablephonenumbercountryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountry(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountavailablephonenumbercountryavailablephonenumberlocal", function () {
  const x = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumberlocalAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumberlocal(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine", function () {
  const x = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachineAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbermachinetomachine(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountavailablephonenumbercountryavailablephonenumbermobile", function () {
  const x = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbermobileAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbermobile(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountavailablephonenumbercountryavailablephonenumbernational", function () {
  const x = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbernationalAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbernational(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost", function () {
  const x = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcostAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbersharedcost(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountavailablephonenumbercountryavailablephonenumbertollfree", function () {
  const x = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbertollfreeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbertollfree(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountavailablephonenumbercountryavailablephonenumbervoip", function () {
  const x = waitForAnyApiv2010accountavailablephonenumbercountryavailablephonenumbervoipAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountavailablephonenumbercountryavailablephonenumbervoip(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountbalance", function () {
  const x = waitForAnyApiv2010accountbalanceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountbalance(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountcall", function () {
  const x = waitForAnyApiv2010accountcallAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountcall(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountcallcallevent", function () {
  const x = waitForAnyApiv2010accountcallcalleventAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountcallcallevent(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountcallcallnotification", function () {
  const x = waitForAnyApiv2010accountcallcallnotificationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountcallcallnotification(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountcallcallnotificationinstance", function () {
  const x = waitForAnyApiv2010accountcallcallnotificationinstanceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountcallcallnotificationinstance(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountcallcallrecording", function () {
  const x = waitForAnyApiv2010accountcallcallrecordingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountcallcallrecording(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountcallpayments", function () {
  const x = waitForAnyApiv2010accountcallpaymentsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountcallpayments(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountcallrealtimetranscription", function () {
  const x = waitForAnyApiv2010accountcallrealtimetranscriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountcallrealtimetranscription(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountcallsiprec", function () {
  const x = waitForAnyApiv2010accountcallsiprecAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountcallsiprec(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountcallstream", function () {
  const x = waitForAnyApiv2010accountcallstreamAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountcallstream(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountcalluserdefinedmessage", function () {
  const x = waitForAnyApiv2010accountcalluserdefinedmessageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountcalluserdefinedmessage(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountcalluserdefinedmessagesubscription", function () {
  const x = waitForAnyApiv2010accountcalluserdefinedmessagesubscriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountcalluserdefinedmessagesubscription(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountconference", function () {
  const x = waitForAnyApiv2010accountconferenceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountconference(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountconferenceconferencerecording", function () {
  const x = waitForAnyApiv2010accountconferenceconferencerecordingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountconferenceconferencerecording(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountconferenceparticipant", function () {
  const x = waitForAnyApiv2010accountconferenceparticipantAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountconferenceparticipant(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountconnectapp", function () {
  const x = waitForAnyApiv2010accountconnectappAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountconnectapp(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountincomingphonenumber", function () {
  const x = waitForAnyApiv2010accountincomingphonenumberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountincomingphonenumber(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountincomingphonenumberincomingphonenumberassignedaddon", function () {
  const x = waitForAnyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumberassignedaddon(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension", function () {
  const x = waitForAnyApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextensionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumberassignedaddonincomingphonenumberassignedaddonextension(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountincomingphonenumberincomingphonenumberlocal", function () {
  const x = waitForAnyApiv2010accountincomingphonenumberincomingphonenumberlocalAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumberlocal(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountincomingphonenumberincomingphonenumbermobile", function () {
  const x = waitForAnyApiv2010accountincomingphonenumberincomingphonenumbermobileAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumbermobile(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountincomingphonenumberincomingphonenumbertollfree", function () {
  const x = waitForAnyApiv2010accountincomingphonenumberincomingphonenumbertollfreeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountincomingphonenumberincomingphonenumbertollfree(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountkey", function () {
  const x = waitForAnyApiv2010accountkeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountkey(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountmessage", function () {
  const x = waitForAnyApiv2010accountmessageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountmessage(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountmessagemedia", function () {
  const x = waitForAnyApiv2010accountmessagemediaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountmessagemedia(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountmessagemessagefeedback", function () {
  const x = waitForAnyApiv2010accountmessagemessagefeedbackAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountmessagemessagefeedback(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountnewkey", function () {
  const x = waitForAnyApiv2010accountnewkeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountnewkey(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountnewsigningkey", function () {
  const x = waitForAnyApiv2010accountnewsigningkeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountnewsigningkey(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountnotification", function () {
  const x = waitForAnyApiv2010accountnotificationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountnotification(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountnotificationinstance", function () {
  const x = waitForAnyApiv2010accountnotificationinstanceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountnotificationinstance(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountoutgoingcallerid", function () {
  const x = waitForAnyApiv2010accountoutgoingcalleridAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountoutgoingcallerid(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountqueue", function () {
  const x = waitForAnyApiv2010accountqueueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountqueue(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountqueuemember", function () {
  const x = waitForAnyApiv2010accountqueuememberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountqueuemember(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountrecording", function () {
  const x = waitForAnyApiv2010accountrecordingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountrecording(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountrecordingrecordingaddonresult", function () {
  const x = waitForAnyApiv2010accountrecordingrecordingaddonresultAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountrecordingrecordingaddonresult(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload", function () {
  const x = waitForAnyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayload(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata", function () {
  const x = waitForAnyApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddataAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountrecordingrecordingaddonresultrecordingaddonresultpayloadrecordingaddonresultpayloaddata(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountrecordingrecordingtranscription", function () {
  const x = waitForAnyApiv2010accountrecordingrecordingtranscriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountrecordingrecordingtranscription(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountshortcode", function () {
  const x = waitForAnyApiv2010accountshortcodeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountshortcode(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsigningkey", function () {
  const x = waitForAnyApiv2010accountsigningkeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsigningkey(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsip", function () {
  const x = waitForAnyApiv2010accountsipAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsip(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipcredentiallist", function () {
  const x = waitForAnyApiv2010accountsipsipcredentiallistAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipcredentiallist(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipcredentiallistsipcredential", function () {
  const x = waitForAnyApiv2010accountsipsipcredentiallistsipcredentialAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipcredentiallistsipcredential(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipdomain", function () {
  const x = waitForAnyApiv2010accountsipsipdomainAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipdomain(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipdomainsipauth", function () {
  const x = waitForAnyApiv2010accountsipsipdomainsipauthAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipauth(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipdomainsipauthsipauthcalls", function () {
  const x = waitForAnyApiv2010accountsipsipdomainsipauthsipauthcallsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthcalls(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping", function () {
  const x = waitForAnyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmappingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallscredentiallistmapping(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping", function () {
  const x = waitForAnyApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmappingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthcallssipauthcallsipaccesscontrollistmapping(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipdomainsipauthsipauthregistrations", function () {
  const x = waitForAnyApiv2010accountsipsipdomainsipauthsipauthregistrationsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthregistrations(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping", function () {
  const x = waitForAnyApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmappingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipauthsipauthregistrationssipauthregistrationscredentiallistmapping(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipdomainsipcredentiallistmapping", function () {
  const x = waitForAnyApiv2010accountsipsipdomainsipcredentiallistmappingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipcredentiallistmapping(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipdomainsipipaccesscontrollistmapping", function () {
  const x = waitForAnyApiv2010accountsipsipdomainsipipaccesscontrollistmappingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipdomainsipipaccesscontrollistmapping(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipipaccesscontrollist", function () {
  const x = waitForAnyApiv2010accountsipsipipaccesscontrollistAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipipaccesscontrollist(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountsipsipipaccesscontrollistsipipaddress", function () {
  const x = waitForAnyApiv2010accountsipsipipaccesscontrollistsipipaddressAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountsipsipipaccesscontrollistsipipaddress(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accounttoken", function () {
  const x = waitForAnyApiv2010accounttokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accounttoken(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accounttranscription", function () {
  const x = waitForAnyApiv2010accounttranscriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accounttranscription(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountusage", function () {
  const x = waitForAnyApiv2010accountusageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountusage(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountusageusagerecord", function () {
  const x = waitForAnyApiv2010accountusageusagerecordAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountusageusagerecord(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountusageusagerecordusagerecordalltime", function () {
  const x = waitForAnyApiv2010accountusageusagerecordusagerecordalltimeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordalltime(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountusageusagerecordusagerecorddaily", function () {
  const x = waitForAnyApiv2010accountusageusagerecordusagerecorddailyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecorddaily(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountusageusagerecordusagerecordlastmonth", function () {
  const x = waitForAnyApiv2010accountusageusagerecordusagerecordlastmonthAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordlastmonth(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountusageusagerecordusagerecordmonthly", function () {
  const x = waitForAnyApiv2010accountusageusagerecordusagerecordmonthlyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordmonthly(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountusageusagerecordusagerecordthismonth", function () {
  const x = waitForAnyApiv2010accountusageusagerecordusagerecordthismonthAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordthismonth(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountusageusagerecordusagerecordtoday", function () {
  const x = waitForAnyApiv2010accountusageusagerecordusagerecordtodayAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordtoday(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountusageusagerecordusagerecordyearly", function () {
  const x = waitForAnyApiv2010accountusageusagerecordusagerecordyearlyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordyearly(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountusageusagerecordusagerecordyesterday", function () {
  const x = waitForAnyApiv2010accountusageusagerecordusagerecordyesterdayAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountusageusagerecordusagerecordyesterday(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountusageusagetrigger", function () {
  const x = waitForAnyApiv2010accountusageusagetriggerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountusageusagetrigger(k, ANY), function () {});
});

bthread("Guard: Unique Apiv2010accountvalidationrequest", function () {
  const x = waitForAnyApiv2010accountvalidationrequestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApiv2010accountvalidationrequest(k, ANY), function () {});
});

bthread("Guard: Unique Authorizedconnectappenumpermission", function () {
  const x = waitForAnyAuthorizedconnectappenumpermissionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthorizedconnectappenumpermission(k, ANY), function () {});
});

bthread("Guard: Unique Callenumevent", function () {
  const x = waitForAnyCallenumeventAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCallenumevent(k, ANY), function () {});
});

bthread("Guard: Unique Callenumstatus", function () {
  const x = waitForAnyCallenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCallenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Callenumupdatestatus", function () {
  const x = waitForAnyCallenumupdatestatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCallenumupdatestatus(k, ANY), function () {});
});

bthread("Guard: Unique Callrecordingenumsource", function () {
  const x = waitForAnyCallrecordingenumsourceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCallrecordingenumsource(k, ANY), function () {});
});

bthread("Guard: Unique Callrecordingenumstatus", function () {
  const x = waitForAnyCallrecordingenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCallrecordingenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Conferenceenumreasonconferenceended", function () {
  const x = waitForAnyConferenceenumreasonconferenceendedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConferenceenumreasonconferenceended(k, ANY), function () {});
});

bthread("Guard: Unique Conferenceenumstatus", function () {
  const x = waitForAnyConferenceenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConferenceenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Conferenceenumupdatestatus", function () {
  const x = waitForAnyConferenceenumupdatestatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConferenceenumupdatestatus(k, ANY), function () {});
});

bthread("Guard: Unique Conferencerecordingenumsource", function () {
  const x = waitForAnyConferencerecordingenumsourceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConferencerecordingenumsource(k, ANY), function () {});
});

bthread("Guard: Unique Conferencerecordingenumstatus", function () {
  const x = waitForAnyConferencerecordingenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConferencerecordingenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Connectappenumpermission", function () {
  const x = waitForAnyConnectappenumpermissionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConnectappenumpermission(k, ANY), function () {});
});

bthread("Guard: Unique Dependentphonenumberenumaddressrequirement", function () {
  const x = waitForAnyDependentphonenumberenumaddressrequirementAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDependentphonenumberenumaddressrequirement(k, ANY), function () {});
});

bthread("Guard: Unique Dependentphonenumberenumemergencystatus", function () {
  const x = waitForAnyDependentphonenumberenumemergencystatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDependentphonenumberenumemergencystatus(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumberenumaddressrequirement", function () {
  const x = waitForAnyIncomingphonenumberenumaddressrequirementAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumberenumaddressrequirement(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumberenumemergencyaddressstatus", function () {
  const x = waitForAnyIncomingphonenumberenumemergencyaddressstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumberenumemergencyaddressstatus(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumberenumemergencystatus", function () {
  const x = waitForAnyIncomingphonenumberenumemergencystatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumberenumemergencystatus(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumberenumvoicereceivemode", function () {
  const x = waitForAnyIncomingphonenumberenumvoicereceivemodeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumberenumvoicereceivemode(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumberlocalenumaddressrequirement", function () {
  const x = waitForAnyIncomingphonenumberlocalenumaddressrequirementAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumberlocalenumaddressrequirement(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumberlocalenumemergencyaddressstatus", function () {
  const x = waitForAnyIncomingphonenumberlocalenumemergencyaddressstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumberlocalenumemergencyaddressstatus(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumberlocalenumemergencystatus", function () {
  const x = waitForAnyIncomingphonenumberlocalenumemergencystatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumberlocalenumemergencystatus(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumberlocalenumvoicereceivemode", function () {
  const x = waitForAnyIncomingphonenumberlocalenumvoicereceivemodeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumberlocalenumvoicereceivemode(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumbermobileenumaddressrequirement", function () {
  const x = waitForAnyIncomingphonenumbermobileenumaddressrequirementAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumbermobileenumaddressrequirement(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumbermobileenumemergencyaddressstatus", function () {
  const x = waitForAnyIncomingphonenumbermobileenumemergencyaddressstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumbermobileenumemergencyaddressstatus(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumbermobileenumemergencystatus", function () {
  const x = waitForAnyIncomingphonenumbermobileenumemergencystatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumbermobileenumemergencystatus(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumbermobileenumvoicereceivemode", function () {
  const x = waitForAnyIncomingphonenumbermobileenumvoicereceivemodeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumbermobileenumvoicereceivemode(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumbertollfreeenumaddressrequirement", function () {
  const x = waitForAnyIncomingphonenumbertollfreeenumaddressrequirementAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumbertollfreeenumaddressrequirement(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumbertollfreeenumemergencyaddressstatus", function () {
  const x = waitForAnyIncomingphonenumbertollfreeenumemergencyaddressstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumbertollfreeenumemergencyaddressstatus(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumbertollfreeenumemergencystatus", function () {
  const x = waitForAnyIncomingphonenumbertollfreeenumemergencystatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumbertollfreeenumemergencystatus(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumbertollfreeenumvoicereceivemode", function () {
  const x = waitForAnyIncomingphonenumbertollfreeenumvoicereceivemodeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumbertollfreeenumvoicereceivemode(k, ANY), function () {});
});

bthread("Guard: Unique Messageenumaddressretention", function () {
  const x = waitForAnyMessageenumaddressretentionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessageenumaddressretention(k, ANY), function () {});
});

bthread("Guard: Unique Messageenumcontentretention", function () {
  const x = waitForAnyMessageenumcontentretentionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessageenumcontentretention(k, ANY), function () {});
});

bthread("Guard: Unique Messageenumdirection", function () {
  const x = waitForAnyMessageenumdirectionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessageenumdirection(k, ANY), function () {});
});

bthread("Guard: Unique Messageenumriskcheck", function () {
  const x = waitForAnyMessageenumriskcheckAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessageenumriskcheck(k, ANY), function () {});
});

bthread("Guard: Unique Messageenumscheduletype", function () {
  const x = waitForAnyMessageenumscheduletypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessageenumscheduletype(k, ANY), function () {});
});

bthread("Guard: Unique Messageenumstatus", function () {
  const x = waitForAnyMessageenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessageenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Messageenumtraffictype", function () {
  const x = waitForAnyMessageenumtraffictypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessageenumtraffictype(k, ANY), function () {});
});

bthread("Guard: Unique Messageenumupdatestatus", function () {
  const x = waitForAnyMessageenumupdatestatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessageenumupdatestatus(k, ANY), function () {});
});

bthread("Guard: Unique Messagefeedbackenumoutcome", function () {
  const x = waitForAnyMessagefeedbackenumoutcomeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessagefeedbackenumoutcome(k, ANY), function () {});
});

bthread("Guard: Unique Participantenumstatus", function () {
  const x = waitForAnyParticipantenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddParticipantenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Paymentsenumbankaccounttype", function () {
  const x = waitForAnyPaymentsenumbankaccounttypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPaymentsenumbankaccounttype(k, ANY), function () {});
});

bthread("Guard: Unique Paymentsenumcapture", function () {
  const x = waitForAnyPaymentsenumcaptureAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPaymentsenumcapture(k, ANY), function () {});
});

bthread("Guard: Unique Paymentsenumpaymentmethod", function () {
  const x = waitForAnyPaymentsenumpaymentmethodAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPaymentsenumpaymentmethod(k, ANY), function () {});
});

bthread("Guard: Unique Paymentsenumstatus", function () {
  const x = waitForAnyPaymentsenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPaymentsenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Paymentsenumtokentype", function () {
  const x = waitForAnyPaymentsenumtokentypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPaymentsenumtokentype(k, ANY), function () {});
});

bthread("Guard: Unique Realtimetranscriptionenumstatus", function () {
  const x = waitForAnyRealtimetranscriptionenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealtimetranscriptionenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Realtimetranscriptionenumtrack", function () {
  const x = waitForAnyRealtimetranscriptionenumtrackAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealtimetranscriptionenumtrack(k, ANY), function () {});
});

bthread("Guard: Unique Realtimetranscriptionenumupdatestatus", function () {
  const x = waitForAnyRealtimetranscriptionenumupdatestatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealtimetranscriptionenumupdatestatus(k, ANY), function () {});
});

bthread("Guard: Unique Recordingaddonresultenumstatus", function () {
  const x = waitForAnyRecordingaddonresultenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRecordingaddonresultenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Recordingenumsource", function () {
  const x = waitForAnyRecordingenumsourceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRecordingenumsource(k, ANY), function () {});
});

bthread("Guard: Unique Recordingenumstatus", function () {
  const x = waitForAnyRecordingenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRecordingenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Recordingtranscriptionenumstatus", function () {
  const x = waitForAnyRecordingtranscriptionenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRecordingtranscriptionenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Siprecenumstatus", function () {
  const x = waitForAnySiprecenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSiprecenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Siprecenumtrack", function () {
  const x = waitForAnySiprecenumtrackAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSiprecenumtrack(k, ANY), function () {});
});

bthread("Guard: Unique Siprecenumupdatestatus", function () {
  const x = waitForAnySiprecenumupdatestatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSiprecenumupdatestatus(k, ANY), function () {});
});

bthread("Guard: Unique Smsfeedbackenumoutcome", function () {
  const x = waitForAnySmsfeedbackenumoutcomeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSmsfeedbackenumoutcome(k, ANY), function () {});
});

bthread("Guard: Unique Smsmessageenumdirection", function () {
  const x = waitForAnySmsmessageenumdirectionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSmsmessageenumdirection(k, ANY), function () {});
});

bthread("Guard: Unique Smsmessageenumstatus", function () {
  const x = waitForAnySmsmessageenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSmsmessageenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Streamenumstatus", function () {
  const x = waitForAnyStreamenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStreamenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Streamenumtrack", function () {
  const x = waitForAnyStreamenumtrackAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStreamenumtrack(k, ANY), function () {});
});

bthread("Guard: Unique Streamenumupdatestatus", function () {
  const x = waitForAnyStreamenumupdatestatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStreamenumupdatestatus(k, ANY), function () {});
});

bthread("Guard: Unique Transcriptionenumstatus", function () {
  const x = waitForAnyTranscriptionenumstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTranscriptionenumstatus(k, ANY), function () {});
});

bthread("Guard: Unique Usagetriggerenumrecurring", function () {
  const x = waitForAnyUsagetriggerenumrecurringAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsagetriggerenumrecurring(k, ANY), function () {});
});

bthread("Guard: Unique Usagetriggerenumtriggerfield", function () {
  const x = waitForAnyUsagetriggerenumtriggerfieldAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsagetriggerenumtriggerfield(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
