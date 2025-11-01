// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("AppLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApp(x.id);
  updateApp(x.id);
  updateApp(x.id);
  verifyAppExists(x.id);
  verifyAppUpdated(x.id);
  deleteApp(x.id);
});

bthread("ConfigLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfig(x.id);
  updateConfig(x.id);
  updateConfig(x.id);
  verifyConfigExists(x.id);
  verifyConfigUpdated(x.id);
  deleteConfig(x.id);
});

bthread("EnvLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnv(x.id);
  updateEnv(x.id);
  updateEnv(x.id);
  verifyEnvExists(x.id);
  verifyEnvUpdated(x.id);
  deleteEnv(x.id);
});

bthread("PolicyLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPolicy(x.id);
  updatePolicy(x.id);
  updatePolicy(x.id);
  verifyPolicyExists(x.id);
  verifyPolicyUpdated(x.id);
  deletePolicy(x.id);
});

bthread("ReleasLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReleas(x.id);
  updateReleas(x.id);
  updateReleas(x.id);
  verifyReleasExists(x.id);
  verifyReleasUpdated(x.id);
  deleteReleas(x.id);
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

bthread("App create verification", function () {
  const e = waitForAnyAppAdded();
  block(matchDeleteApp(e.id, ANY), function () {
    verifyAppExists(e.id);
  });
});

bthread("App update verification", function () {
  const e = waitForAnyAppUpdated();
  block(matchDeleteApp(e.id, ANY), function () {
    verifyAppUpdated(e.id);
  });
});

bthread("App delete verification", function () {
  const e = waitForAnyAppDeleted();
  block(matchAddApp(e.id, ANY), function () {
    verifyAppDoesNotExist(e.id);
  });
});

bthread("Config create verification", function () {
  const e = waitForAnyConfigAdded();
  block(matchDeleteConfig(e.id, ANY), function () {
    verifyConfigExists(e.id);
  });
});

bthread("Config update verification", function () {
  const e = waitForAnyConfigUpdated();
  block(matchDeleteConfig(e.id, ANY), function () {
    verifyConfigUpdated(e.id);
  });
});

bthread("Config delete verification", function () {
  const e = waitForAnyConfigDeleted();
  block(matchAddConfig(e.id, ANY), function () {
    verifyConfigDoesNotExist(e.id);
  });
});

bthread("Env create verification", function () {
  const e = waitForAnyEnvAdded();
  block(matchDeleteEnv(e.id, ANY), function () {
    verifyEnvExists(e.id);
  });
});

bthread("Env update verification", function () {
  const e = waitForAnyEnvUpdated();
  block(matchDeleteEnv(e.id, ANY), function () {
    verifyEnvUpdated(e.id);
  });
});

bthread("Env delete verification", function () {
  const e = waitForAnyEnvDeleted();
  block(matchAddEnv(e.id, ANY), function () {
    verifyEnvDoesNotExist(e.id);
  });
});

bthread("Policy create verification", function () {
  const e = waitForAnyPolicyAdded();
  block(matchDeletePolicy(e.id, ANY), function () {
    verifyPolicyExists(e.id);
  });
});

bthread("Policy update verification", function () {
  const e = waitForAnyPolicyUpdated();
  block(matchDeletePolicy(e.id, ANY), function () {
    verifyPolicyUpdated(e.id);
  });
});

bthread("Policy delete verification", function () {
  const e = waitForAnyPolicyDeleted();
  block(matchAddPolicy(e.id, ANY), function () {
    verifyPolicyDoesNotExist(e.id);
  });
});

bthread("Releas create verification", function () {
  const e = waitForAnyReleasAdded();
  block(matchDeleteReleas(e.id, ANY), function () {
    verifyReleasExists(e.id);
  });
});

bthread("Releas update verification", function () {
  const e = waitForAnyReleasUpdated();
  block(matchDeleteReleas(e.id, ANY), function () {
    verifyReleasUpdated(e.id);
  });
});

bthread("Releas delete verification", function () {
  const e = waitForAnyReleasDeleted();
  block(matchAddReleas(e.id, ANY), function () {
    verifyReleasDoesNotExist(e.id);
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

bthread("Guard: Unique App", function () {
  const x = waitForAnyAppAdded();
  block(matchAddApp(x.id, ANY), function () {});
});

bthread("Guard: Unique Config", function () {
  const x = waitForAnyConfigAdded();
  block(matchAddConfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Env", function () {
  const x = waitForAnyEnvAdded();
  block(matchAddEnv(x.id, ANY), function () {});
});

bthread("Guard: Unique Policy", function () {
  const x = waitForAnyPolicyAdded();
  block(matchAddPolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Releas", function () {
  const x = waitForAnyReleasAdded();
  block(matchAddReleas(x.id, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  block(matchAddReset(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====


// ===== AUTO-HAZARD (generic pack) =====

globalThis.__DSL_ENTITIES__ = ["App", "Config", "Env", "Policy", "Releas", "Reset"];
globalThis.__GRAPH_RELATIONSHIPS__ = [];
globalThis.__DSL_DO__ = {"App": {"add": "addApp", "update": "updateApp", "delete": "deleteApp"}, "Config": {"add": "addConfig", "update": "updateConfig", "delete": "deleteConfig"}, "Env": {"add": "addEnv", "update": "updateEnv", "delete": "deleteEnv"}, "Policy": {"add": "addPolicy", "update": "updatePolicy", "delete": "deletePolicy"}, "Releas": {"add": "addReleas", "update": "updateReleas", "delete": "deleteReleas"}, "Reset": {"add": "addReset", "update": "updateReset", "delete": "deleteReset"}};
globalThis.__DSL_ARG0__ = {"App": "id", "Config": "id", "Env": "id", "Policy": "id", "Releas": "id", "Reset": "id"};


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
