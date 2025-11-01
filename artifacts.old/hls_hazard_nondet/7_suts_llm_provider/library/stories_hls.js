// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("BookLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBook(x.id);
  updateBook(x.id);
  updateBook(x.id);
  verifyBookExists(x.id);
  verifyBookUpdated(x.id);
  deleteBook(x.id);
});

bthread("HoldLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHold(x.id);
  updateHold(x.id);
  updateHold(x.id);
  verifyHoldExists(x.id);
  verifyHoldUpdated(x.id);
  deleteHold(x.id);
});

bthread("LoanLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLoan(x.id);
  updateLoan(x.id);
  updateLoan(x.id);
  verifyLoanExists(x.id);
  verifyLoanUpdated(x.id);
  deleteLoan(x.id);
});

bthread("UserLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUser(x.id);
  updateUser(x.id);
  updateUser(x.id);
  verifyUserExists(x.id);
  verifyUserUpdated(x.id);
  deleteUser(x.id);
});

// ===== NONDET VARIANTS =====

bthread("Book nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Book_id_N"}]);
  const steps = pick([0,1,2,10]);
  addBook(x.id);
  for (var i=0; i<steps; i++) {
    updateBook(x.id);
  }
  if (pick([true,false])) { deleteBook(x.id); }
  verifyBookExists(x.id);
  verifyBookUpdated(x.id);
});

bthread("Book nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBook(a.id);
  block(matchAddBook(a.id, ANY), function () {});
  addBook(b.id);
});

bthread("Hold nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Hold_id_N"}]);
  const steps = pick([0,1,2,10]);
  addHold(x.id);
  for (var i=0; i<steps; i++) {
    updateHold(x.id);
  }
  if (pick([true,false])) { deleteHold(x.id); }
  verifyHoldExists(x.id);
  verifyHoldUpdated(x.id);
});

bthread("Hold nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
  addHold(a.id);
  block(matchAddHold(a.id, ANY), function () {});
  addHold(b.id);
});

bthread("Loan nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Loan_id_N"}]);
  const steps = pick([0,1,2,10]);
  addLoan(x.id);
  for (var i=0; i<steps; i++) {
    updateLoan(x.id);
  }
  if (pick([true,false])) { deleteLoan(x.id); }
  verifyLoanExists(x.id);
  verifyLoanUpdated(x.id);
});

bthread("Loan nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLoan(a.id);
  block(matchAddLoan(a.id, ANY), function () {});
  addLoan(b.id);
});

bthread("User nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "User_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUser(x.id);
  for (var i=0; i<steps; i++) {
    updateUser(x.id);
  }
  if (pick([true,false])) { deleteUser(x.id); }
  verifyUserExists(x.id);
  verifyUserUpdated(x.id);
});

bthread("User nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUser(a.id);
  block(matchAddUser(a.id, ANY), function () {});
  addUser(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Book create verification", function () {
  const e = waitForAnyBookAdded();
  block(matchDeleteBook(e.id, ANY), function () {
    verifyBookExists(e.id);
  });
});

bthread("Book update verification", function () {
  const e = waitForAnyBookUpdated();
  block(matchDeleteBook(e.id, ANY), function () {
    verifyBookUpdated(e.id);
  });
});

bthread("Book delete verification", function () {
  const e = waitForAnyBookDeleted();
  block(matchAddBook(e.id, ANY), function () {
    verifyBookDoesNotExist(e.id);
  });
});

bthread("Hold create verification", function () {
  const e = waitForAnyHoldAdded();
  block(matchDeleteHold(e.id, ANY), function () {
    verifyHoldExists(e.id);
  });
});

bthread("Hold update verification", function () {
  const e = waitForAnyHoldUpdated();
  block(matchDeleteHold(e.id, ANY), function () {
    verifyHoldUpdated(e.id);
  });
});

bthread("Hold delete verification", function () {
  const e = waitForAnyHoldDeleted();
  block(matchAddHold(e.id, ANY), function () {
    verifyHoldDoesNotExist(e.id);
  });
});

bthread("Loan create verification", function () {
  const e = waitForAnyLoanAdded();
  block(matchDeleteLoan(e.id, ANY), function () {
    verifyLoanExists(e.id);
  });
});

bthread("Loan update verification", function () {
  const e = waitForAnyLoanUpdated();
  block(matchDeleteLoan(e.id, ANY), function () {
    verifyLoanUpdated(e.id);
  });
});

bthread("Loan delete verification", function () {
  const e = waitForAnyLoanDeleted();
  block(matchAddLoan(e.id, ANY), function () {
    verifyLoanDoesNotExist(e.id);
  });
});

bthread("User create verification", function () {
  const e = waitForAnyUserAdded();
  block(matchDeleteUser(e.id, ANY), function () {
    verifyUserExists(e.id);
  });
});

bthread("User update verification", function () {
  const e = waitForAnyUserUpdated();
  block(matchDeleteUser(e.id, ANY), function () {
    verifyUserUpdated(e.id);
  });
});

bthread("User delete verification", function () {
  const e = waitForAnyUserDeleted();
  block(matchAddUser(e.id, ANY), function () {
    verifyUserDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Book", function () {
  const x = waitForAnyBookAdded();
  block(matchAddBook(x.id, ANY), function () {});
});

bthread("Guard: Unique Hold", function () {
  const x = waitForAnyHoldAdded();
  block(matchAddHold(x.id, ANY), function () {});
});

bthread("Guard: Unique Loan", function () {
  const x = waitForAnyLoanAdded();
  block(matchAddLoan(x.id, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  block(matchAddUser(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====


// ===== AUTO-HAZARD (generic pack) =====

globalThis.__DSL_ENTITIES__ = ["Book", "Hold", "Loan", "User"];
globalThis.__GRAPH_RELATIONSHIPS__ = [];
globalThis.__DSL_DO__ = {"Book": {"add": "addBook", "update": "updateBook", "delete": "deleteBook"}, "Hold": {"add": "addHold", "update": "updateHold", "delete": "deleteHold"}, "Loan": {"add": "addLoan", "update": "updateLoan", "delete": "deleteLoan"}, "User": {"add": "addUser", "update": "updateUser", "delete": "deleteUser"}};
globalThis.__DSL_ARG0__ = {"Book": "id", "Hold": "id", "Loan": "id", "User": "id"};


// @auto-hazard-begin
(function AutoHazardPack(){
  if (typeof bp === 'undefined') return;
  if (String((bp.env && bp.env.HLS_HAZARD_PACK) || 'auto') === 'off') return;

  const R = (globalThis.read || globalThis || {});
  const on = (name, def=1) => Number((bp.env && bp.env[name]) ?? def) !== 0;
  const det = String((bp.env && bp.env.DET_MODE) || '1') === '1';
  const log = (...a)=>{ if (bp && bp.log && bp.log.info) try{ bp.log.info(a.join(' ')); }catch(_){ } };
  const FN = (k)=> typeof R[k] === 'function';
  const looksLikeIdField = (k, ent)=> /(^id$|Id$|ID$|_id$)/.test(k) || k.toLowerCase()=== (ent.toLowerCase()+'id');
  const looksLikeLimit   = (k)=> /(limit|capacity|quota|max|budget|credit)/i.test(k);
  const looksLikeAmount  = (k)=> /(amount|qty|quantity|units|size|weight|cost|load)/i.test(k);
  const looksLikeStock   = (k)=> /(stock|inventory|balance|available|remaining|free)/i.test(k);

  const ENTS = globalThis.__DSL_ENTITIES__ || [];
  const RELS = globalThis.__GRAPH_RELATIONSHIPS__ || [];
  const DOFN = globalThis.__DSL_DO__ || {};
  const ARG0 = globalThis.__DSL_ARG0__ || {};

  globalThis.__hlsFocus = globalThis.__hlsFocus || {};

  function discoverReadersForEntity(ent){
    const plural = ent.endsWith('s') ? ent : ent + 's';
    const guesses = ['list'+plural, 'list'+ent, 'get'+ent, 'get'+ent+'ById', 'get'+plural, 'fetch'+ent, 'fetch'+plural];
    const readers = {};
    for (const g of guesses){
      if (FN(g)) readers[g] = R[g];
    }
    return readers;
  }

  async function sampleEntities(ent){
    const readers = discoverReadersForEntity(ent);
    const listFn = readers['list'+ent+'s'] || readers['list'+ent] || readers['get'+ent+'s'] || null;
    let items = [];
    if (listFn) { try { items = await listFn(); } catch(_) {} }
    if (!Array.isArray(items)) items = [];
    const sample = items[0] || {};
    const keys = Object.keys(sample||{});
    const idKey = keys.find(k=> looksLikeIdField(k, ent)) || 'id';
    const numericKeys = keys.filter(k=> typeof sample[k] === 'number');
    const counters = numericKeys.filter(k=> looksLikeStock(k));
    const amounts  = numericKeys.filter(k=> looksLikeAmount(k));
    const limits   = numericKeys.filter(k=> looksLikeLimit(k));
    return { items, idKey, counters, amounts, limits };
  }

  async function chooseFocusFor(ent){
    try {
      const s = await sampleEntities(ent);
      let id = s.items.length ? (det ? s.items[0][s.idKey] : s.items[Math.floor(Math.random()*s.items.length)][s.idKey]) : null;
      if (!id) {
        const waitName = 'waitForAny'+ent+'Added';
        if (typeof globalThis[waitName] === 'function') {
          const e = await globalThis[waitName]();
          if (e && e[s.idKey]) id = e[s.idKey];
          else if (e && e.id)  id = e.id;
        }
      }
      if (id !== undefined && id !== null) {
        globalThis.__hlsFocus[ent] = id;
      }
    } catch(_){}
  }

  (function wrapDo(){
    Object.keys(DOFN).forEach(ent => {
      const opmap = DOFN[ent] || {};
      ['add','update','delete'].forEach(op => {
        const fnName = opmap[op];
        if (!fnName) return;
        const orig = globalThis[fnName];
        if (typeof orig !== 'function') return;
        if (orig.__wrappedByHazard) return;
        const arg0Name = ARG0[ent] || 'id';
        globalThis[fnName] = async function(...args){
          const f = globalThis.__hlsFocus ? globalThis.__hlsFocus[ent] : undefined;
          if (f !== undefined && f !== null) {
            if (args.length === 0) args = [f];
            else args[0] = f;
          }
          return await orig.apply(this, args);
        };
        globalThis[fnName].__wrappedByHazard = true;
      });
    });
  })();

  try {
    ENTS.forEach(ent=>{
      bp.registerBThread('CB:'+ent+'Focus', function(){
        return bp.async(()=> chooseFocusFor(ent));
      });
    });
  } catch(_){}

  if (on('HLS_HAZARD_OVR',1)) {
    bp.registerBThread('HO:NonNegativeCounters', function(){
      return bp.async(async function(){
        const ents = ENTS;
        for (const ent of ents){
          const s = await sampleEntities(ent);
          const id = (globalThis.__hlsFocus && globalThis.__hlsFocus[ent]) || null;
          if (!id) continue;
          let obj=null;
          const r = discoverReadersForEntity(ent);
          for (const g of ['get'+ent,'get'+ent+'ById']) {
            if (r[g]) { try{ obj = await r[g](id); }catch(_){ } }
            if (obj) break;
          }
          if (!obj) obj = s.items.find(x=> x[s.idKey]===id) || null;
          if (!obj) continue;
          for (const k of s.counters){
            const v = Number(obj[k]);
            if (isFinite(v) && v < 0) throw new Error(`[HazardOracle] NonNegative: ${ent}.${k} became negative for ${id}`);
          }
        }
      });
    });
  }

  if (on('HLS_HAZARD_CAS',1)) {
    (function(){
      const rels = RELS;
      rels.forEach(({parent,child})=>{
        bp.registerBThread(`HO:RefIntegrity ${parent}->${child}`, function(){
          return bp.async(async function(){
            const pS = await sampleEntities(parent);
            const cS = await sampleEntities(child);
            const focusId = (globalThis.__hlsFocus && globalThis.__hlsFocus[parent]) || null;
            if (!focusId) return;
            let children = [];
            const cr = discoverReadersForEntity(child);
            const listChild = cr['list'+child+'s'] || cr['list'+child] || cr['get'+child+'s'] || null;
            if (listChild) { try{ children = await listChild(); }catch(_){ } }
            if (!Array.isArray(children)) children = [];
            const fkCandidates = Object.keys(children[0]||{}).filter(k=> /(Id$|_id$|ID$|^id$)/.test(k) && k.toLowerCase()!==('id'));
            const fk = fkCandidates[0] || (parent.toLowerCase()+'Id') || 'parentId';
            const deps = children.filter(x=> String(x[fk]) === String(focusId));
            if (deps.length>0){
              let parentObj = null;
              const pr = discoverReadersForEntity(parent);
              for (const g of ['get'+parent,'get'+parent+'ById']) {
                if (pr[g]) { try{ parentObj = await pr[g](focusId); }catch(_){ } }
                if (parentObj) break;
              }
              if (!parentObj) throw new Error(`[HazardOracle] ReferentialIntegrity: ${parent} ${focusId} missing while ${child} dependents exist`);
            }
          });
        });
      });
    })();
  }

  if (on('HLS_HAZARD_WSK',1)) {
    (function(){
      const rels = RELS;
      rels.forEach(({parent,child})=>{
        bp.registerBThread(`HO:AggregateLimit ${parent}<-${child}`, function(){
          return bp.async(async function(){
            const pS = await sampleEntities(parent);
            const cS = await sampleEntities(child);
            const focusId = (globalThis.__hlsFocus && globalThis.__hlsFocus[parent]) || null;
            if (!focusId) return;
            let pObj=null;
            const pr = discoverReadersForEntity(parent);
            for (const g of ['get'+parent,'get'+parent+'ById']) {
              if (pr[g]) { try{ pObj = await pr[g](focusId); }catch(_){ } }
              if (pObj) break;
            }
            if (!pObj && pS.items.length) pObj = pS.items.find(x=> x[pS.idKey]===focusId) || pS.items[0];
            if (!pObj) return;
            const limitKey = pS.limits[0] || Object.keys(pObj).find(k=> /(limit|capacity|quota|max|budget|credit)/i.test(k));
            const limitVal = Number(limitKey ? pObj[limitKey] : NaN);
            if (!isFinite(limitVal)) return;
            let children = [];
            const cr = discoverReadersForEntity(child);
            const listChild = cr['list'+child+'s'] || cr['list'+child] || cr['get'+child+'s'] || null;
            if (listChild) { try{ children = await listChild(); }catch(_){ } }
            if (!Array.isArray(children)) children = [];
            const fkCandidates = Object.keys(children[0]||{}).filter(k=> /(Id$|_id$|ID$|^id$)/.test(k) && k.toLowerCase()!==('id'));
            const fk = fkCandidates[0] || (parent.toLowerCase()+'Id') || 'parentId';
            const contribKey = cS.amounts[0] || Object.keys(children[0]||{}).find(k=> /(amount|qty|quantity|units|size|weight|cost|load)/i.test(k));
            if (!contribKey) return;
            const total = children.filter(x=> String(x[fk])===String(focusId))
                                  .reduce((s,x)=> s + (Number(x[contribKey])||0), 0);
            if (total > limitVal) throw new Error(`[HazardOracle] AggregateLimit: Σ ${child}.${contribKey} (${total}) > ${parent}.${limitKey} (${limitVal}) for ${focusId}`);
          });
        });
      });
    })();
  }
})(); // AutoHazardPack
// @auto-hazard-end
