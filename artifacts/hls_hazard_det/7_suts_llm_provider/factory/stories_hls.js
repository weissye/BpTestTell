// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("MachineLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMachine(x.id);
  updateMachine(x.id);
  updateMachine(x.id);
  verifyMachineExists(x.id);
  verifyMachineUpdated(x.id);
  deleteMachine(x.id);
});

bthread("MaintenanceticketLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMaintenanceticket(x.id);
  updateMaintenanceticket(x.id);
  updateMaintenanceticket(x.id);
  verifyMaintenanceticketExists(x.id);
  verifyMaintenanceticketUpdated(x.id);
  deleteMaintenanceticket(x.id);
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

bthread("SensorreadingLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSensorreading(x.id);
  updateSensorreading(x.id);
  updateSensorreading(x.id);
  verifySensorreadingExists(x.id);
  verifySensorreadingUpdated(x.id);
  deleteSensorreading(x.id);
});

bthread("WorkorderLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWorkorder(x.id);
  updateWorkorder(x.id);
  updateWorkorder(x.id);
  verifyWorkorderExists(x.id);
  verifyWorkorderUpdated(x.id);
  deleteWorkorder(x.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Machine create verification", function () {
  const e = waitForAnyMachineAdded();
  block(matchDeleteMachine(e.id, ANY), function () {
    verifyMachineExists(e.id);
  });
});

bthread("Machine update verification", function () {
  const e = waitForAnyMachineUpdated();
  block(matchDeleteMachine(e.id, ANY), function () {
    verifyMachineUpdated(e.id);
  });
});

bthread("Machine delete verification", function () {
  const e = waitForAnyMachineDeleted();
  block(matchAddMachine(e.id, ANY), function () {
    verifyMachineDoesNotExist(e.id);
  });
});

bthread("Maintenanceticket create verification", function () {
  const e = waitForAnyMaintenanceticketAdded();
  block(matchDeleteMaintenanceticket(e.id, ANY), function () {
    verifyMaintenanceticketExists(e.id);
  });
});

bthread("Maintenanceticket update verification", function () {
  const e = waitForAnyMaintenanceticketUpdated();
  block(matchDeleteMaintenanceticket(e.id, ANY), function () {
    verifyMaintenanceticketUpdated(e.id);
  });
});

bthread("Maintenanceticket delete verification", function () {
  const e = waitForAnyMaintenanceticketDeleted();
  block(matchAddMaintenanceticket(e.id, ANY), function () {
    verifyMaintenanceticketDoesNotExist(e.id);
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

bthread("Sensorreading create verification", function () {
  const e = waitForAnySensorreadingAdded();
  block(matchDeleteSensorreading(e.id, ANY), function () {
    verifySensorreadingExists(e.id);
  });
});

bthread("Sensorreading update verification", function () {
  const e = waitForAnySensorreadingUpdated();
  block(matchDeleteSensorreading(e.id, ANY), function () {
    verifySensorreadingUpdated(e.id);
  });
});

bthread("Sensorreading delete verification", function () {
  const e = waitForAnySensorreadingDeleted();
  block(matchAddSensorreading(e.id, ANY), function () {
    verifySensorreadingDoesNotExist(e.id);
  });
});

bthread("Workorder create verification", function () {
  const e = waitForAnyWorkorderAdded();
  block(matchDeleteWorkorder(e.id, ANY), function () {
    verifyWorkorderExists(e.id);
  });
});

bthread("Workorder update verification", function () {
  const e = waitForAnyWorkorderUpdated();
  block(matchDeleteWorkorder(e.id, ANY), function () {
    verifyWorkorderUpdated(e.id);
  });
});

bthread("Workorder delete verification", function () {
  const e = waitForAnyWorkorderDeleted();
  block(matchAddWorkorder(e.id, ANY), function () {
    verifyWorkorderDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Machine", function () {
  const x = waitForAnyMachineAdded();
  block(matchAddMachine(x.id, ANY), function () {});
});

bthread("Guard: Unique Maintenanceticket", function () {
  const x = waitForAnyMaintenanceticketAdded();
  block(matchAddMaintenanceticket(x.id, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  block(matchAddReset(x.id, ANY), function () {});
});

bthread("Guard: Unique Sensorreading", function () {
  const x = waitForAnySensorreadingAdded();
  block(matchAddSensorreading(x.id, ANY), function () {});
});

bthread("Guard: Unique Workorder", function () {
  const x = waitForAnyWorkorderAdded();
  block(matchAddWorkorder(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====


// ===== AUTO-HAZARD (generic pack) =====

globalThis.__DSL_ENTITIES__ = ["Machine", "Maintenanceticket", "Reset", "Sensorreading", "Workorder"];
globalThis.__GRAPH_RELATIONSHIPS__ = [];
globalThis.__DSL_DO__ = {"Machine": {"add": "addMachine", "update": "updateMachine", "delete": "deleteMachine"}, "Maintenanceticket": {"add": "addMaintenanceticket", "update": "updateMaintenanceticket", "delete": "deleteMaintenanceticket"}, "Reset": {"add": "addReset", "update": "updateReset", "delete": "deleteReset"}, "Sensorreading": {"add": "addSensorreading", "update": "updateSensorreading", "delete": "deleteSensorreading"}, "Workorder": {"add": "addWorkorder", "update": "updateWorkorder", "delete": "deleteWorkorder"}};
globalThis.__DSL_ARG0__ = {"Machine": "id", "Maintenanceticket": "id", "Reset": "id", "Sensorreading": "id", "Workorder": "id"};


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
