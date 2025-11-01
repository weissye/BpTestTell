// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("DrugLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDrug(x.id);
  updateDrug(x.id);
  updateDrug(x.id);
  verifyDrugExists(x.id);
  verifyDrugUpdated(x.id);
  deleteDrug(x.id);
});

bthread("InventoryLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInventory(x.id);
  updateInventory(x.id);
  updateInventory(x.id);
  verifyInventoryExists(x.id);
  verifyInventoryUpdated(x.id);
  deleteInventory(x.id);
});

bthread("OrderLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrder(x.id);
  updateOrder(x.id);
  updateOrder(x.id);
  verifyOrderExists(x.id);
  verifyOrderUpdated(x.id);
  deleteOrder(x.id);
});

bthread("PatientLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPatient(x.id);
  updatePatient(x.id);
  updatePatient(x.id);
  verifyPatientExists(x.id);
  verifyPatientUpdated(x.id);
  deletePatient(x.id);
});

bthread("PrescriptionLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPrescription(x.id);
  updatePrescription(x.id);
  updatePrescription(x.id);
  verifyPrescriptionExists(x.id);
  verifyPrescriptionUpdated(x.id);
  deletePrescription(x.id);
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

// ===== NONDET VARIANTS =====

bthread("Drug nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Drug_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDrug(x.id);
  for (var i=0; i<steps; i++) {
    updateDrug(x.id);
  }
  if (pick([true,false])) { deleteDrug(x.id); }
  verifyDrugExists(x.id);
  verifyDrugUpdated(x.id);
});

bthread("Drug nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDrug(a.id);
  block(matchAddDrug(a.id, ANY), function () {});
  addDrug(b.id);
});

bthread("Inventory nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Inventory_id_N"}]);
  const steps = pick([0,1,2,10]);
  addInventory(x.id);
  for (var i=0; i<steps; i++) {
    updateInventory(x.id);
  }
  if (pick([true,false])) { deleteInventory(x.id); }
  verifyInventoryExists(x.id);
  verifyInventoryUpdated(x.id);
});

bthread("Inventory nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInventory(a.id);
  block(matchAddInventory(a.id, ANY), function () {});
  addInventory(b.id);
});

bthread("Order nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Order_id_N"}]);
  const steps = pick([0,1,2,10]);
  addOrder(x.id);
  for (var i=0; i<steps; i++) {
    updateOrder(x.id);
  }
  if (pick([true,false])) { deleteOrder(x.id); }
  verifyOrderExists(x.id);
  verifyOrderUpdated(x.id);
});

bthread("Order nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOrder(a.id);
  block(matchAddOrder(a.id, ANY), function () {});
  addOrder(b.id);
});

bthread("Patient nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Patient_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPatient(x.id);
  for (var i=0; i<steps; i++) {
    updatePatient(x.id);
  }
  if (pick([true,false])) { deletePatient(x.id); }
  verifyPatientExists(x.id);
  verifyPatientUpdated(x.id);
});

bthread("Patient nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPatient(a.id);
  block(matchAddPatient(a.id, ANY), function () {});
  addPatient(b.id);
});

bthread("Prescription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Prescription_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPrescription(x.id);
  for (var i=0; i<steps; i++) {
    updatePrescription(x.id);
  }
  if (pick([true,false])) { deletePrescription(x.id); }
  verifyPrescriptionExists(x.id);
  verifyPrescriptionUpdated(x.id);
});

bthread("Prescription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPrescription(a.id);
  block(matchAddPrescription(a.id, ANY), function () {});
  addPrescription(b.id);
});

bthread("Reset nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Reset_id_N"}]);
  const steps = pick([0,1,2,10]);
  addReset(x.id);
  for (var i=0; i<steps; i++) {
    updateReset(x.id);
  }
  if (pick([true,false])) { deleteReset(x.id); }
  verifyResetExists(x.id);
  verifyResetUpdated(x.id);
});

bthread("Reset nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReset(a.id);
  block(matchAddReset(a.id, ANY), function () {});
  addReset(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Drug create verification", function () {
  const e = waitForAnyDrugAdded();
  block(matchDeleteDrug(e.id, ANY), function () {
    verifyDrugExists(e.id);
  });
});

bthread("Drug update verification", function () {
  const e = waitForAnyDrugUpdated();
  block(matchDeleteDrug(e.id, ANY), function () {
    verifyDrugUpdated(e.id);
  });
});

bthread("Drug delete verification", function () {
  const e = waitForAnyDrugDeleted();
  block(matchAddDrug(e.id, ANY), function () {
    verifyDrugDoesNotExist(e.id);
  });
});

bthread("Inventory create verification", function () {
  const e = waitForAnyInventoryAdded();
  block(matchDeleteInventory(e.id, ANY), function () {
    verifyInventoryExists(e.id);
  });
});

bthread("Inventory update verification", function () {
  const e = waitForAnyInventoryUpdated();
  block(matchDeleteInventory(e.id, ANY), function () {
    verifyInventoryUpdated(e.id);
  });
});

bthread("Inventory delete verification", function () {
  const e = waitForAnyInventoryDeleted();
  block(matchAddInventory(e.id, ANY), function () {
    verifyInventoryDoesNotExist(e.id);
  });
});

bthread("Order create verification", function () {
  const e = waitForAnyOrderAdded();
  block(matchDeleteOrder(e.id, ANY), function () {
    verifyOrderExists(e.id);
  });
});

bthread("Order update verification", function () {
  const e = waitForAnyOrderUpdated();
  block(matchDeleteOrder(e.id, ANY), function () {
    verifyOrderUpdated(e.id);
  });
});

bthread("Order delete verification", function () {
  const e = waitForAnyOrderDeleted();
  block(matchAddOrder(e.id, ANY), function () {
    verifyOrderDoesNotExist(e.id);
  });
});

bthread("Patient create verification", function () {
  const e = waitForAnyPatientAdded();
  block(matchDeletePatient(e.id, ANY), function () {
    verifyPatientExists(e.id);
  });
});

bthread("Patient update verification", function () {
  const e = waitForAnyPatientUpdated();
  block(matchDeletePatient(e.id, ANY), function () {
    verifyPatientUpdated(e.id);
  });
});

bthread("Patient delete verification", function () {
  const e = waitForAnyPatientDeleted();
  block(matchAddPatient(e.id, ANY), function () {
    verifyPatientDoesNotExist(e.id);
  });
});

bthread("Prescription create verification", function () {
  const e = waitForAnyPrescriptionAdded();
  block(matchDeletePrescription(e.id, ANY), function () {
    verifyPrescriptionExists(e.id);
  });
});

bthread("Prescription update verification", function () {
  const e = waitForAnyPrescriptionUpdated();
  block(matchDeletePrescription(e.id, ANY), function () {
    verifyPrescriptionUpdated(e.id);
  });
});

bthread("Prescription delete verification", function () {
  const e = waitForAnyPrescriptionDeleted();
  block(matchAddPrescription(e.id, ANY), function () {
    verifyPrescriptionDoesNotExist(e.id);
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

bthread("Guard: Unique Drug", function () {
  const x = waitForAnyDrugAdded();
  block(matchAddDrug(x.id, ANY), function () {});
});

bthread("Guard: Unique Inventory", function () {
  const x = waitForAnyInventoryAdded();
  block(matchAddInventory(x.id, ANY), function () {});
});

bthread("Guard: Unique Order", function () {
  const x = waitForAnyOrderAdded();
  block(matchAddOrder(x.id, ANY), function () {});
});

bthread("Guard: Unique Patient", function () {
  const x = waitForAnyPatientAdded();
  block(matchAddPatient(x.id, ANY), function () {});
});

bthread("Guard: Unique Prescription", function () {
  const x = waitForAnyPrescriptionAdded();
  block(matchAddPrescription(x.id, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  block(matchAddReset(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====


// ===== AUTO-HAZARD (generic pack) =====

globalThis.__DSL_ENTITIES__ = ["Drug", "Inventory", "Order", "Patient", "Prescription", "Reset"];
globalThis.__GRAPH_RELATIONSHIPS__ = [];
globalThis.__DSL_DO__ = {"Drug": {"add": "addDrug", "update": "updateDrug", "delete": "deleteDrug"}, "Inventory": {"add": "addInventory", "update": "updateInventory", "delete": "deleteInventory"}, "Order": {"add": "addOrder", "update": "updateOrder", "delete": "deleteOrder"}, "Patient": {"add": "addPatient", "update": "updatePatient", "delete": "deletePatient"}, "Prescription": {"add": "addPrescription", "update": "updatePrescription", "delete": "deletePrescription"}, "Reset": {"add": "addReset", "update": "updateReset", "delete": "deleteReset"}};
globalThis.__DSL_ARG0__ = {"Drug": "id", "Inventory": "id", "Order": "id", "Patient": "id", "Prescription": "id", "Reset": "id"};


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
