// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("ApproveLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApprove(x.id);
  updateApprove(x.id);
  updateApprove(x.id);
  verifyApproveExists(x.id);
  verifyApproveUpdated(x.id);
  deleteApprove(x.id);
});

bthread("CarLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCar(x.id);
  updateCar(x.id);
  updateCar(x.id);
  verifyCarExists(x.id);
  verifyCarUpdated(x.id);
  deleteCar(x.id);
});

bthread("ChainLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addChain(x.id);
  updateChain(x.id);
  updateChain(x.id);
  verifyChainExists(x.id);
  verifyChainUpdated(x.id);
  deleteChain(x.id);
});

bthread("CloseLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClose(x.id);
  updateClose(x.id);
  updateClose(x.id);
  verifyCloseExists(x.id);
  verifyCloseUpdated(x.id);
  deleteClose(x.id);
});

bthread("CustomerLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCustomer(x.id);
  updateCustomer(x.id);
  updateCustomer(x.id);
  verifyCustomerExists(x.id);
  verifyCustomerUpdated(x.id);
  deleteCustomer(x.id);
});

bthread("GarageLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGarage(x.id);
  updateGarage(x.id);
  updateGarage(x.id);
  verifyGarageExists(x.id);
  verifyGarageUpdated(x.id);
  deleteGarage(x.id);
});

bthread("PeriodicmaintenanceLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPeriodicmaintenance(x.id);
  updatePeriodicmaintenance(x.id);
  updatePeriodicmaintenance(x.id);
  verifyPeriodicmaintenanceExists(x.id);
  verifyPeriodicmaintenanceUpdated(x.id);
  deletePeriodicmaintenance(x.id);
});

bthread("RepairorderLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRepairorder(x.id);
  updateRepairorder(x.id);
  updateRepairorder(x.id);
  verifyRepairorderExists(x.id);
  verifyRepairorderUpdated(x.id);
  deleteRepairorder(x.id);
});

bthread("ResetLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReset(x.id);
  updateReset(x.id);
  updateReset(x.id);
  verifyResetExists(x.id);
  verifyResetUpdated(x.id);
  deleteReset(x.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Approve create verification", function () {
  const e = waitForAnyApproveAdded();
  block(matchDeleteApprove(e.id, ANY), function () {
    verifyApproveExists(e.id);
  });
});

bthread("Approve update verification", function () {
  const e = waitForAnyApproveUpdated();
  block(matchDeleteApprove(e.id, ANY), function () {
    verifyApproveUpdated(e.id);
  });
});

bthread("Approve delete verification", function () {
  const e = waitForAnyApproveDeleted();
  block(matchAddApprove(e.id, ANY), function () {
    verifyApproveDoesNotExist(e.id);
  });
});

bthread("Car create verification", function () {
  const e = waitForAnyCarAdded();
  block(matchDeleteCar(e.id, ANY), function () {
    verifyCarExists(e.id);
  });
});

bthread("Car update verification", function () {
  const e = waitForAnyCarUpdated();
  block(matchDeleteCar(e.id, ANY), function () {
    verifyCarUpdated(e.id);
  });
});

bthread("Car delete verification", function () {
  const e = waitForAnyCarDeleted();
  block(matchAddCar(e.id, ANY), function () {
    verifyCarDoesNotExist(e.id);
  });
});

bthread("Chain create verification", function () {
  const e = waitForAnyChainAdded();
  block(matchDeleteChain(e.id, ANY), function () {
    verifyChainExists(e.id);
  });
});

bthread("Chain update verification", function () {
  const e = waitForAnyChainUpdated();
  block(matchDeleteChain(e.id, ANY), function () {
    verifyChainUpdated(e.id);
  });
});

bthread("Chain delete verification", function () {
  const e = waitForAnyChainDeleted();
  block(matchAddChain(e.id, ANY), function () {
    verifyChainDoesNotExist(e.id);
  });
});

bthread("Close create verification", function () {
  const e = waitForAnyCloseAdded();
  block(matchDeleteClose(e.id, ANY), function () {
    verifyCloseExists(e.id);
  });
});

bthread("Close update verification", function () {
  const e = waitForAnyCloseUpdated();
  block(matchDeleteClose(e.id, ANY), function () {
    verifyCloseUpdated(e.id);
  });
});

bthread("Close delete verification", function () {
  const e = waitForAnyCloseDeleted();
  block(matchAddClose(e.id, ANY), function () {
    verifyCloseDoesNotExist(e.id);
  });
});

bthread("Customer create verification", function () {
  const e = waitForAnyCustomerAdded();
  block(matchDeleteCustomer(e.id, ANY), function () {
    verifyCustomerExists(e.id);
  });
});

bthread("Customer update verification", function () {
  const e = waitForAnyCustomerUpdated();
  block(matchDeleteCustomer(e.id, ANY), function () {
    verifyCustomerUpdated(e.id);
  });
});

bthread("Customer delete verification", function () {
  const e = waitForAnyCustomerDeleted();
  block(matchAddCustomer(e.id, ANY), function () {
    verifyCustomerDoesNotExist(e.id);
  });
});

bthread("Garage create verification", function () {
  const e = waitForAnyGarageAdded();
  block(matchDeleteGarage(e.id, ANY), function () {
    verifyGarageExists(e.id);
  });
});

bthread("Garage update verification", function () {
  const e = waitForAnyGarageUpdated();
  block(matchDeleteGarage(e.id, ANY), function () {
    verifyGarageUpdated(e.id);
  });
});

bthread("Garage delete verification", function () {
  const e = waitForAnyGarageDeleted();
  block(matchAddGarage(e.id, ANY), function () {
    verifyGarageDoesNotExist(e.id);
  });
});

bthread("Periodicmaintenance create verification", function () {
  const e = waitForAnyPeriodicmaintenanceAdded();
  block(matchDeletePeriodicmaintenance(e.id, ANY), function () {
    verifyPeriodicmaintenanceExists(e.id);
  });
});

bthread("Periodicmaintenance update verification", function () {
  const e = waitForAnyPeriodicmaintenanceUpdated();
  block(matchDeletePeriodicmaintenance(e.id, ANY), function () {
    verifyPeriodicmaintenanceUpdated(e.id);
  });
});

bthread("Periodicmaintenance delete verification", function () {
  const e = waitForAnyPeriodicmaintenanceDeleted();
  block(matchAddPeriodicmaintenance(e.id, ANY), function () {
    verifyPeriodicmaintenanceDoesNotExist(e.id);
  });
});

bthread("Repairorder create verification", function () {
  const e = waitForAnyRepairorderAdded();
  block(matchDeleteRepairorder(e.id, ANY), function () {
    verifyRepairorderExists(e.id);
  });
});

bthread("Repairorder update verification", function () {
  const e = waitForAnyRepairorderUpdated();
  block(matchDeleteRepairorder(e.id, ANY), function () {
    verifyRepairorderUpdated(e.id);
  });
});

bthread("Repairorder delete verification", function () {
  const e = waitForAnyRepairorderDeleted();
  block(matchAddRepairorder(e.id, ANY), function () {
    verifyRepairorderDoesNotExist(e.id);
  });
});

bthread("Reset create verification", function () {
  const e = waitForAnyResetAdded();
  block(matchDeleteReset(e.id, ANY), function () {
    verifyResetExists(e.id);
  });
});

bthread("Reset update verification", function () {
  const e = waitForAnyResetUpdated();
  block(matchDeleteReset(e.id, ANY), function () {
    verifyResetUpdated(e.id);
  });
});

bthread("Reset delete verification", function () {
  const e = waitForAnyResetDeleted();
  block(matchAddReset(e.id, ANY), function () {
    verifyResetDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Approve", function () {
  const x = waitForAnyApproveAdded();
  block(matchAddApprove(x.id, ANY), function () {});
});

bthread("Guard: Unique Car", function () {
  const x = waitForAnyCarAdded();
  block(matchAddCar(x.id, ANY), function () {});
});

bthread("Guard: Unique Chain", function () {
  const x = waitForAnyChainAdded();
  block(matchAddChain(x.id, ANY), function () {});
});

bthread("Guard: Unique Close", function () {
  const x = waitForAnyCloseAdded();
  block(matchAddClose(x.id, ANY), function () {});
});

bthread("Guard: Unique Customer", function () {
  const x = waitForAnyCustomerAdded();
  block(matchAddCustomer(x.id, ANY), function () {});
});

bthread("Guard: Unique Garage", function () {
  const x = waitForAnyGarageAdded();
  block(matchAddGarage(x.id, ANY), function () {});
});

bthread("Guard: Unique Periodicmaintenance", function () {
  const x = waitForAnyPeriodicmaintenanceAdded();
  block(matchAddPeriodicmaintenance(x.id, ANY), function () {});
});

bthread("Guard: Unique Repairorder", function () {
  const x = waitForAnyRepairorderAdded();
  block(matchAddRepairorder(x.id, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  block(matchAddReset(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====


// ===== AUTO-HAZARD (generic pack) =====

globalThis.__DSL_ENTITIES__ = ["Approve", "Car", "Chain", "Close", "Customer", "Garage", "Periodicmaintenance", "Repairorder", "Reset"];
globalThis.__GRAPH_RELATIONSHIPS__ = [];
globalThis.__DSL_DO__ = {"Approve": {"add": "addApprove", "update": "updateApprove", "delete": "deleteApprove"}, "Car": {"add": "addCar", "update": "updateCar", "delete": "deleteCar"}, "Chain": {"add": "addChain", "update": "updateChain", "delete": "deleteChain"}, "Close": {"add": "addClose", "update": "updateClose", "delete": "deleteClose"}, "Customer": {"add": "addCustomer", "update": "updateCustomer", "delete": "deleteCustomer"}, "Garage": {"add": "addGarage", "update": "updateGarage", "delete": "deleteGarage"}, "Periodicmaintenance": {"add": "addPeriodicmaintenance", "update": "updatePeriodicmaintenance", "delete": "deletePeriodicmaintenance"}, "Repairorder": {"add": "addRepairorder", "update": "updateRepairorder", "delete": "deleteRepairorder"}, "Reset": {"add": "addReset", "update": "updateReset", "delete": "deleteReset"}};
globalThis.__DSL_ARG0__ = {"Approve": "id", "Car": "id", "Chain": "id", "Close": "id", "Customer": "id", "Garage": "id", "Periodicmaintenance": "id", "Repairorder": "id", "Reset": "id"};


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
