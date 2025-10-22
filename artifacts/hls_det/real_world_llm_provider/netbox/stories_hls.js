// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
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
    if (Object.prototype.hasOwnProperty.call(e, key)) return e[key];
    if (e.data && Object.prototype.hasOwnProperty.call(e.data, key)) return e.data[key];
    if (e.payload && Object.prototype.hasOwnProperty.call(e.payload, key)) return e.payload[key];
    if (Object.prototype.hasOwnProperty.call(e, 'id')) return e['id'];
    // minimal extra fallback for Inventory-like entities
    if (Object.prototype.hasOwnProperty.call(e, 'ndc')) return e['ndc'];
  }
  return (typeof e === 'string' || typeof e === 'number') ? e : undefined;
}

// --- canonKey(v): normalize any key-like value to a scalar string ---
function canonKey(v) {
  if (v == null) return '1001';
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


bthread("AggregateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAggregate(x.id);
  const e_add = waitForAggregateAdded(id);
  block(matchDeleteAggregate(id), function () {
    verifyAggregateExists(id);
  });
  updateAggregate(x.id);
  updateAggregate(x.id);
  const e_upd = waitForAggregateUpdated(id);
  block(matchDeleteAggregate(id), function () {
    verifyAggregateUpdated(id);
  });
  deleteAggregate(x.id);
  const e_del = waitForAggregateDeleted(id);
  block(matchAddAggregate(id), function () {
    verifyAggregateDoesNotExist(id);
  });
});

bthread("ApiLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApi(x.id);
  const e_add = waitForApiAdded(id);
  block(matchDeleteApi(id), function () {
    verifyApiExists(id);
  });
  updateApi(x.id);
  updateApi(x.id);
  const e_upd = waitForApiUpdated(id);
  block(matchDeleteApi(id), function () {
    verifyApiUpdated(id);
  });
  deleteApi(x.id);
  const e_del = waitForApiDeleted(id);
  block(matchAddApi(id), function () {
    verifyApiDoesNotExist(id);
  });
});

bthread("AsnLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAsn(x.id);
  const e_add = waitForAsnAdded(id);
  block(matchDeleteAsn(id), function () {
    verifyAsnExists(id);
  });
  updateAsn(x.id);
  updateAsn(x.id);
  const e_upd = waitForAsnUpdated(id);
  block(matchDeleteAsn(id), function () {
    verifyAsnUpdated(id);
  });
  deleteAsn(x.id);
  const e_del = waitForAsnDeleted(id);
  block(matchAddAsn(id), function () {
    verifyAsnDoesNotExist(id);
  });
});

bthread("AsnrangeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAsnrange(x.id);
  const e_add = waitForAsnrangeAdded(id);
  block(matchDeleteAsnrange(id), function () {
    verifyAsnrangeExists(id);
  });
  updateAsnrange(x.id);
  updateAsnrange(x.id);
  const e_upd = waitForAsnrangeUpdated(id);
  block(matchDeleteAsnrange(id), function () {
    verifyAsnrangeUpdated(id);
  });
  deleteAsnrange(x.id);
  const e_del = waitForAsnrangeDeleted(id);
  block(matchAddAsnrange(id), function () {
    verifyAsnrangeDoesNotExist(id);
  });
});

bthread("AvailableasnLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAvailableasn(x.id);
  const e_add = waitForAvailableasnAdded(id);
  block(matchDeleteAvailableasn(id), function () {
    verifyAvailableasnExists(id);
  });
  updateAvailableasn(x.id);
  updateAvailableasn(x.id);
  const e_upd = waitForAvailableasnUpdated(id);
  block(matchDeleteAvailableasn(id), function () {
    verifyAvailableasnUpdated(id);
  });
  deleteAvailableasn(x.id);
  const e_del = waitForAvailableasnDeleted(id);
  block(matchAddAvailableasn(id), function () {
    verifyAvailableasnDoesNotExist(id);
  });
});

bthread("AvailableipLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAvailableip(x.id);
  const e_add = waitForAvailableipAdded(id);
  block(matchDeleteAvailableip(id), function () {
    verifyAvailableipExists(id);
  });
  updateAvailableip(x.id);
  updateAvailableip(x.id);
  const e_upd = waitForAvailableipUpdated(id);
  block(matchDeleteAvailableip(id), function () {
    verifyAvailableipUpdated(id);
  });
  deleteAvailableip(x.id);
  const e_del = waitForAvailableipDeleted(id);
  block(matchAddAvailableip(id), function () {
    verifyAvailableipDoesNotExist(id);
  });
});

bthread("AvailableprefixeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAvailableprefixe(x.id);
  const e_add = waitForAvailableprefixeAdded(id);
  block(matchDeleteAvailableprefixe(id), function () {
    verifyAvailableprefixeExists(id);
  });
  updateAvailableprefixe(x.id);
  updateAvailableprefixe(x.id);
  const e_upd = waitForAvailableprefixeUpdated(id);
  block(matchDeleteAvailableprefixe(id), function () {
    verifyAvailableprefixeUpdated(id);
  });
  deleteAvailableprefixe(x.id);
  const e_del = waitForAvailableprefixeDeleted(id);
  block(matchAddAvailableprefixe(id), function () {
    verifyAvailableprefixeDoesNotExist(id);
  });
});

bthread("AvailablevlanLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAvailablevlan(x.id);
  const e_add = waitForAvailablevlanAdded(id);
  block(matchDeleteAvailablevlan(id), function () {
    verifyAvailablevlanExists(id);
  });
  updateAvailablevlan(x.id);
  updateAvailablevlan(x.id);
  const e_upd = waitForAvailablevlanUpdated(id);
  block(matchDeleteAvailablevlan(id), function () {
    verifyAvailablevlanUpdated(id);
  });
  deleteAvailablevlan(x.id);
  const e_del = waitForAvailablevlanDeleted(id);
  block(matchAddAvailablevlan(id), function () {
    verifyAvailablevlanDoesNotExist(id);
  });
});

bthread("BackgroundqueueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBackgroundqueue(x.id);
  const e_add = waitForBackgroundqueueAdded(id);
  block(matchDeleteBackgroundqueue(id), function () {
    verifyBackgroundqueueExists(id);
  });
  updateBackgroundqueue(x.id);
  updateBackgroundqueue(x.id);
  const e_upd = waitForBackgroundqueueUpdated(id);
  block(matchDeleteBackgroundqueue(id), function () {
    verifyBackgroundqueueUpdated(id);
  });
  deleteBackgroundqueue(x.id);
  const e_del = waitForBackgroundqueueDeleted(id);
  block(matchAddBackgroundqueue(id), function () {
    verifyBackgroundqueueDoesNotExist(id);
  });
});

bthread("BackgroundtaskLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBackgroundtask(x.id);
  const e_add = waitForBackgroundtaskAdded(id);
  block(matchDeleteBackgroundtask(id), function () {
    verifyBackgroundtaskExists(id);
  });
  updateBackgroundtask(x.id);
  updateBackgroundtask(x.id);
  const e_upd = waitForBackgroundtaskUpdated(id);
  block(matchDeleteBackgroundtask(id), function () {
    verifyBackgroundtaskUpdated(id);
  });
  deleteBackgroundtask(x.id);
  const e_del = waitForBackgroundtaskDeleted(id);
  block(matchAddBackgroundtask(id), function () {
    verifyBackgroundtaskDoesNotExist(id);
  });
});

bthread("BackgroundworkerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBackgroundworker(x.id);
  const e_add = waitForBackgroundworkerAdded(id);
  block(matchDeleteBackgroundworker(id), function () {
    verifyBackgroundworkerExists(id);
  });
  updateBackgroundworker(x.id);
  updateBackgroundworker(x.id);
  const e_upd = waitForBackgroundworkerUpdated(id);
  block(matchDeleteBackgroundworker(id), function () {
    verifyBackgroundworkerUpdated(id);
  });
  deleteBackgroundworker(x.id);
  const e_del = waitForBackgroundworkerDeleted(id);
  block(matchAddBackgroundworker(id), function () {
    verifyBackgroundworkerDoesNotExist(id);
  });
});

bthread("BookmarkLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBookmark(x.id);
  const e_add = waitForBookmarkAdded(id);
  block(matchDeleteBookmark(id), function () {
    verifyBookmarkExists(id);
  });
  updateBookmark(x.id);
  updateBookmark(x.id);
  const e_upd = waitForBookmarkUpdated(id);
  block(matchDeleteBookmark(id), function () {
    verifyBookmarkUpdated(id);
  });
  deleteBookmark(x.id);
  const e_del = waitForBookmarkDeleted(id);
  block(matchAddBookmark(id), function () {
    verifyBookmarkDoesNotExist(id);
  });
});

bthread("CableLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCable(x.id);
  const e_add = waitForCableAdded(id);
  block(matchDeleteCable(id), function () {
    verifyCableExists(id);
  });
  updateCable(x.id);
  updateCable(x.id);
  const e_upd = waitForCableUpdated(id);
  block(matchDeleteCable(id), function () {
    verifyCableUpdated(id);
  });
  deleteCable(x.id);
  const e_del = waitForCableDeleted(id);
  block(matchAddCable(id), function () {
    verifyCableDoesNotExist(id);
  });
});

bthread("CableterminationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCabletermination(x.id);
  const e_add = waitForCableterminationAdded(id);
  block(matchDeleteCabletermination(id), function () {
    verifyCableterminationExists(id);
  });
  updateCabletermination(x.id);
  updateCabletermination(x.id);
  const e_upd = waitForCableterminationUpdated(id);
  block(matchDeleteCabletermination(id), function () {
    verifyCableterminationUpdated(id);
  });
  deleteCabletermination(x.id);
  const e_del = waitForCableterminationDeleted(id);
  block(matchAddCabletermination(id), function () {
    verifyCableterminationDoesNotExist(id);
  });
});

bthread("ChoiceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChoice(x.id);
  const e_add = waitForChoiceAdded(id);
  block(matchDeleteChoice(id), function () {
    verifyChoiceExists(id);
  });
  updateChoice(x.id);
  updateChoice(x.id);
  const e_upd = waitForChoiceUpdated(id);
  block(matchDeleteChoice(id), function () {
    verifyChoiceUpdated(id);
  });
  deleteChoice(x.id);
  const e_del = waitForChoiceDeleted(id);
  block(matchAddChoice(id), function () {
    verifyChoiceDoesNotExist(id);
  });
});

bthread("CircuitLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCircuit(x.id);
  const e_add = waitForCircuitAdded(id);
  block(matchDeleteCircuit(id), function () {
    verifyCircuitExists(id);
  });
  updateCircuit(x.id);
  updateCircuit(x.id);
  const e_upd = waitForCircuitUpdated(id);
  block(matchDeleteCircuit(id), function () {
    verifyCircuitUpdated(id);
  });
  deleteCircuit(x.id);
  const e_del = waitForCircuitDeleted(id);
  block(matchAddCircuit(id), function () {
    verifyCircuitDoesNotExist(id);
  });
});

bthread("CircuitgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCircuitgroup(x.id);
  const e_add = waitForCircuitgroupAdded(id);
  block(matchDeleteCircuitgroup(id), function () {
    verifyCircuitgroupExists(id);
  });
  updateCircuitgroup(x.id);
  updateCircuitgroup(x.id);
  const e_upd = waitForCircuitgroupUpdated(id);
  block(matchDeleteCircuitgroup(id), function () {
    verifyCircuitgroupUpdated(id);
  });
  deleteCircuitgroup(x.id);
  const e_del = waitForCircuitgroupDeleted(id);
  block(matchAddCircuitgroup(id), function () {
    verifyCircuitgroupDoesNotExist(id);
  });
});

bthread("CircuitgroupassignmentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCircuitgroupassignment(x.id);
  const e_add = waitForCircuitgroupassignmentAdded(id);
  block(matchDeleteCircuitgroupassignment(id), function () {
    verifyCircuitgroupassignmentExists(id);
  });
  updateCircuitgroupassignment(x.id);
  updateCircuitgroupassignment(x.id);
  const e_upd = waitForCircuitgroupassignmentUpdated(id);
  block(matchDeleteCircuitgroupassignment(id), function () {
    verifyCircuitgroupassignmentUpdated(id);
  });
  deleteCircuitgroupassignment(x.id);
  const e_del = waitForCircuitgroupassignmentDeleted(id);
  block(matchAddCircuitgroupassignment(id), function () {
    verifyCircuitgroupassignmentDoesNotExist(id);
  });
});

bthread("CircuitterminationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCircuittermination(x.id);
  const e_add = waitForCircuitterminationAdded(id);
  block(matchDeleteCircuittermination(id), function () {
    verifyCircuitterminationExists(id);
  });
  updateCircuittermination(x.id);
  updateCircuittermination(x.id);
  const e_upd = waitForCircuitterminationUpdated(id);
  block(matchDeleteCircuittermination(id), function () {
    verifyCircuitterminationUpdated(id);
  });
  deleteCircuittermination(x.id);
  const e_del = waitForCircuitterminationDeleted(id);
  block(matchAddCircuittermination(id), function () {
    verifyCircuitterminationDoesNotExist(id);
  });
});

bthread("CircuittypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCircuittype(x.id);
  const e_add = waitForCircuittypeAdded(id);
  block(matchDeleteCircuittype(id), function () {
    verifyCircuittypeExists(id);
  });
  updateCircuittype(x.id);
  updateCircuittype(x.id);
  const e_upd = waitForCircuittypeUpdated(id);
  block(matchDeleteCircuittype(id), function () {
    verifyCircuittypeUpdated(id);
  });
  deleteCircuittype(x.id);
  const e_del = waitForCircuittypeDeleted(id);
  block(matchAddCircuittype(id), function () {
    verifyCircuittypeDoesNotExist(id);
  });
});

bthread("ClusterLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCluster(x.id);
  const e_add = waitForClusterAdded(id);
  block(matchDeleteCluster(id), function () {
    verifyClusterExists(id);
  });
  updateCluster(x.id);
  updateCluster(x.id);
  const e_upd = waitForClusterUpdated(id);
  block(matchDeleteCluster(id), function () {
    verifyClusterUpdated(id);
  });
  deleteCluster(x.id);
  const e_del = waitForClusterDeleted(id);
  block(matchAddCluster(id), function () {
    verifyClusterDoesNotExist(id);
  });
});

bthread("ClustergroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClustergroup(x.id);
  const e_add = waitForClustergroupAdded(id);
  block(matchDeleteClustergroup(id), function () {
    verifyClustergroupExists(id);
  });
  updateClustergroup(x.id);
  updateClustergroup(x.id);
  const e_upd = waitForClustergroupUpdated(id);
  block(matchDeleteClustergroup(id), function () {
    verifyClustergroupUpdated(id);
  });
  deleteClustergroup(x.id);
  const e_del = waitForClustergroupDeleted(id);
  block(matchAddClustergroup(id), function () {
    verifyClustergroupDoesNotExist(id);
  });
});

bthread("ClustertypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClustertype(x.id);
  const e_add = waitForClustertypeAdded(id);
  block(matchDeleteClustertype(id), function () {
    verifyClustertypeExists(id);
  });
  updateClustertype(x.id);
  updateClustertype(x.id);
  const e_upd = waitForClustertypeUpdated(id);
  block(matchDeleteClustertype(id), function () {
    verifyClustertypeUpdated(id);
  });
  deleteClustertype(x.id);
  const e_del = waitForClustertypeDeleted(id);
  block(matchAddClustertype(id), function () {
    verifyClustertypeDoesNotExist(id);
  });
});

bthread("ConfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConfig(x.id);
  const e_add = waitForConfigAdded(id);
  block(matchDeleteConfig(id), function () {
    verifyConfigExists(id);
  });
  updateConfig(x.id);
  updateConfig(x.id);
  const e_upd = waitForConfigUpdated(id);
  block(matchDeleteConfig(id), function () {
    verifyConfigUpdated(id);
  });
  deleteConfig(x.id);
  const e_del = waitForConfigDeleted(id);
  block(matchAddConfig(id), function () {
    verifyConfigDoesNotExist(id);
  });
});

bthread("ConfigcontextLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConfigcontext(x.id);
  const e_add = waitForConfigcontextAdded(id);
  block(matchDeleteConfigcontext(id), function () {
    verifyConfigcontextExists(id);
  });
  updateConfigcontext(x.id);
  updateConfigcontext(x.id);
  const e_upd = waitForConfigcontextUpdated(id);
  block(matchDeleteConfigcontext(id), function () {
    verifyConfigcontextUpdated(id);
  });
  deleteConfigcontext(x.id);
  const e_del = waitForConfigcontextDeleted(id);
  block(matchAddConfigcontext(id), function () {
    verifyConfigcontextDoesNotExist(id);
  });
});

bthread("ConfigcontextprofileLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConfigcontextprofile(x.id);
  const e_add = waitForConfigcontextprofileAdded(id);
  block(matchDeleteConfigcontextprofile(id), function () {
    verifyConfigcontextprofileExists(id);
  });
  updateConfigcontextprofile(x.id);
  updateConfigcontextprofile(x.id);
  const e_upd = waitForConfigcontextprofileUpdated(id);
  block(matchDeleteConfigcontextprofile(id), function () {
    verifyConfigcontextprofileUpdated(id);
  });
  deleteConfigcontextprofile(x.id);
  const e_del = waitForConfigcontextprofileDeleted(id);
  block(matchAddConfigcontextprofile(id), function () {
    verifyConfigcontextprofileDoesNotExist(id);
  });
});

bthread("ConfigtemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConfigtemplate(x.id);
  const e_add = waitForConfigtemplateAdded(id);
  block(matchDeleteConfigtemplate(id), function () {
    verifyConfigtemplateExists(id);
  });
  updateConfigtemplate(x.id);
  updateConfigtemplate(x.id);
  const e_upd = waitForConfigtemplateUpdated(id);
  block(matchDeleteConfigtemplate(id), function () {
    verifyConfigtemplateUpdated(id);
  });
  deleteConfigtemplate(x.id);
  const e_del = waitForConfigtemplateDeleted(id);
  block(matchAddConfigtemplate(id), function () {
    verifyConfigtemplateDoesNotExist(id);
  });
});

bthread("ConnecteddeviceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConnecteddevice(x.id);
  const e_add = waitForConnecteddeviceAdded(id);
  block(matchDeleteConnecteddevice(id), function () {
    verifyConnecteddeviceExists(id);
  });
  updateConnecteddevice(x.id);
  updateConnecteddevice(x.id);
  const e_upd = waitForConnecteddeviceUpdated(id);
  block(matchDeleteConnecteddevice(id), function () {
    verifyConnecteddeviceUpdated(id);
  });
  deleteConnecteddevice(x.id);
  const e_del = waitForConnecteddeviceDeleted(id);
  block(matchAddConnecteddevice(id), function () {
    verifyConnecteddeviceDoesNotExist(id);
  });
});

bthread("ConsoleportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConsoleport(x.id);
  const e_add = waitForConsoleportAdded(id);
  block(matchDeleteConsoleport(id), function () {
    verifyConsoleportExists(id);
  });
  updateConsoleport(x.id);
  updateConsoleport(x.id);
  const e_upd = waitForConsoleportUpdated(id);
  block(matchDeleteConsoleport(id), function () {
    verifyConsoleportUpdated(id);
  });
  deleteConsoleport(x.id);
  const e_del = waitForConsoleportDeleted(id);
  block(matchAddConsoleport(id), function () {
    verifyConsoleportDoesNotExist(id);
  });
});

bthread("ConsoleporttemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConsoleporttemplate(x.id);
  const e_add = waitForConsoleporttemplateAdded(id);
  block(matchDeleteConsoleporttemplate(id), function () {
    verifyConsoleporttemplateExists(id);
  });
  updateConsoleporttemplate(x.id);
  updateConsoleporttemplate(x.id);
  const e_upd = waitForConsoleporttemplateUpdated(id);
  block(matchDeleteConsoleporttemplate(id), function () {
    verifyConsoleporttemplateUpdated(id);
  });
  deleteConsoleporttemplate(x.id);
  const e_del = waitForConsoleporttemplateDeleted(id);
  block(matchAddConsoleporttemplate(id), function () {
    verifyConsoleporttemplateDoesNotExist(id);
  });
});

bthread("ConsoleserverportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConsoleserverport(x.id);
  const e_add = waitForConsoleserverportAdded(id);
  block(matchDeleteConsoleserverport(id), function () {
    verifyConsoleserverportExists(id);
  });
  updateConsoleserverport(x.id);
  updateConsoleserverport(x.id);
  const e_upd = waitForConsoleserverportUpdated(id);
  block(matchDeleteConsoleserverport(id), function () {
    verifyConsoleserverportUpdated(id);
  });
  deleteConsoleserverport(x.id);
  const e_del = waitForConsoleserverportDeleted(id);
  block(matchAddConsoleserverport(id), function () {
    verifyConsoleserverportDoesNotExist(id);
  });
});

bthread("ConsoleserverporttemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConsoleserverporttemplate(x.id);
  const e_add = waitForConsoleserverporttemplateAdded(id);
  block(matchDeleteConsoleserverporttemplate(id), function () {
    verifyConsoleserverporttemplateExists(id);
  });
  updateConsoleserverporttemplate(x.id);
  updateConsoleserverporttemplate(x.id);
  const e_upd = waitForConsoleserverporttemplateUpdated(id);
  block(matchDeleteConsoleserverporttemplate(id), function () {
    verifyConsoleserverporttemplateUpdated(id);
  });
  deleteConsoleserverporttemplate(x.id);
  const e_del = waitForConsoleserverporttemplateDeleted(id);
  block(matchAddConsoleserverporttemplate(id), function () {
    verifyConsoleserverporttemplateDoesNotExist(id);
  });
});

bthread("ContactLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addContact(x.id);
  const e_add = waitForContactAdded(id);
  block(matchDeleteContact(id), function () {
    verifyContactExists(id);
  });
  updateContact(x.id);
  updateContact(x.id);
  const e_upd = waitForContactUpdated(id);
  block(matchDeleteContact(id), function () {
    verifyContactUpdated(id);
  });
  deleteContact(x.id);
  const e_del = waitForContactDeleted(id);
  block(matchAddContact(id), function () {
    verifyContactDoesNotExist(id);
  });
});

bthread("ContactassignmentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addContactassignment(x.id);
  const e_add = waitForContactassignmentAdded(id);
  block(matchDeleteContactassignment(id), function () {
    verifyContactassignmentExists(id);
  });
  updateContactassignment(x.id);
  updateContactassignment(x.id);
  const e_upd = waitForContactassignmentUpdated(id);
  block(matchDeleteContactassignment(id), function () {
    verifyContactassignmentUpdated(id);
  });
  deleteContactassignment(x.id);
  const e_del = waitForContactassignmentDeleted(id);
  block(matchAddContactassignment(id), function () {
    verifyContactassignmentDoesNotExist(id);
  });
});

bthread("ContactgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addContactgroup(x.id);
  const e_add = waitForContactgroupAdded(id);
  block(matchDeleteContactgroup(id), function () {
    verifyContactgroupExists(id);
  });
  updateContactgroup(x.id);
  updateContactgroup(x.id);
  const e_upd = waitForContactgroupUpdated(id);
  block(matchDeleteContactgroup(id), function () {
    verifyContactgroupUpdated(id);
  });
  deleteContactgroup(x.id);
  const e_del = waitForContactgroupDeleted(id);
  block(matchAddContactgroup(id), function () {
    verifyContactgroupDoesNotExist(id);
  });
});

bthread("ContactroleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addContactrole(x.id);
  const e_add = waitForContactroleAdded(id);
  block(matchDeleteContactrole(id), function () {
    verifyContactroleExists(id);
  });
  updateContactrole(x.id);
  updateContactrole(x.id);
  const e_upd = waitForContactroleUpdated(id);
  block(matchDeleteContactrole(id), function () {
    verifyContactroleUpdated(id);
  });
  deleteContactrole(x.id);
  const e_del = waitForContactroleDeleted(id);
  block(matchAddContactrole(id), function () {
    verifyContactroleDoesNotExist(id);
  });
});

bthread("CoreLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCore(x.id);
  const e_add = waitForCoreAdded(id);
  block(matchDeleteCore(id), function () {
    verifyCoreExists(id);
  });
  updateCore(x.id);
  updateCore(x.id);
  const e_upd = waitForCoreUpdated(id);
  block(matchDeleteCore(id), function () {
    verifyCoreUpdated(id);
  });
  deleteCore(x.id);
  const e_del = waitForCoreDeleted(id);
  block(matchAddCore(id), function () {
    verifyCoreDoesNotExist(id);
  });
});

bthread("CustomfieldLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomfield(x.id);
  const e_add = waitForCustomfieldAdded(id);
  block(matchDeleteCustomfield(id), function () {
    verifyCustomfieldExists(id);
  });
  updateCustomfield(x.id);
  updateCustomfield(x.id);
  const e_upd = waitForCustomfieldUpdated(id);
  block(matchDeleteCustomfield(id), function () {
    verifyCustomfieldUpdated(id);
  });
  deleteCustomfield(x.id);
  const e_del = waitForCustomfieldDeleted(id);
  block(matchAddCustomfield(id), function () {
    verifyCustomfieldDoesNotExist(id);
  });
});

bthread("CustomfieldchoicesetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomfieldchoiceset(x.id);
  const e_add = waitForCustomfieldchoicesetAdded(id);
  block(matchDeleteCustomfieldchoiceset(id), function () {
    verifyCustomfieldchoicesetExists(id);
  });
  updateCustomfieldchoiceset(x.id);
  updateCustomfieldchoiceset(x.id);
  const e_upd = waitForCustomfieldchoicesetUpdated(id);
  block(matchDeleteCustomfieldchoiceset(id), function () {
    verifyCustomfieldchoicesetUpdated(id);
  });
  deleteCustomfieldchoiceset(x.id);
  const e_del = waitForCustomfieldchoicesetDeleted(id);
  block(matchAddCustomfieldchoiceset(id), function () {
    verifyCustomfieldchoicesetDoesNotExist(id);
  });
});

bthread("CustomlinkLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomlink(x.id);
  const e_add = waitForCustomlinkAdded(id);
  block(matchDeleteCustomlink(id), function () {
    verifyCustomlinkExists(id);
  });
  updateCustomlink(x.id);
  updateCustomlink(x.id);
  const e_upd = waitForCustomlinkUpdated(id);
  block(matchDeleteCustomlink(id), function () {
    verifyCustomlinkUpdated(id);
  });
  deleteCustomlink(x.id);
  const e_del = waitForCustomlinkDeleted(id);
  block(matchAddCustomlink(id), function () {
    verifyCustomlinkDoesNotExist(id);
  });
});

bthread("DashboardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDashboard(x.id);
  const e_add = waitForDashboardAdded(id);
  block(matchDeleteDashboard(id), function () {
    verifyDashboardExists(id);
  });
  updateDashboard(x.id);
  updateDashboard(x.id);
  const e_upd = waitForDashboardUpdated(id);
  block(matchDeleteDashboard(id), function () {
    verifyDashboardUpdated(id);
  });
  deleteDashboard(x.id);
  const e_del = waitForDashboardDeleted(id);
  block(matchAddDashboard(id), function () {
    verifyDashboardDoesNotExist(id);
  });
});

bthread("DatafileLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDatafile(x.id);
  const e_add = waitForDatafileAdded(id);
  block(matchDeleteDatafile(id), function () {
    verifyDatafileExists(id);
  });
  updateDatafile(x.id);
  updateDatafile(x.id);
  const e_upd = waitForDatafileUpdated(id);
  block(matchDeleteDatafile(id), function () {
    verifyDatafileUpdated(id);
  });
  deleteDatafile(x.id);
  const e_del = waitForDatafileDeleted(id);
  block(matchAddDatafile(id), function () {
    verifyDatafileDoesNotExist(id);
  });
});

bthread("DatasourceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDatasource(x.id);
  const e_add = waitForDatasourceAdded(id);
  block(matchDeleteDatasource(id), function () {
    verifyDatasourceExists(id);
  });
  updateDatasource(x.id);
  updateDatasource(x.id);
  const e_upd = waitForDatasourceUpdated(id);
  block(matchDeleteDatasource(id), function () {
    verifyDatasourceUpdated(id);
  });
  deleteDatasource(x.id);
  const e_del = waitForDatasourceDeleted(id);
  block(matchAddDatasource(id), function () {
    verifyDatasourceDoesNotExist(id);
  });
});

bthread("DcimLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDcim(x.id);
  const e_add = waitForDcimAdded(id);
  block(matchDeleteDcim(id), function () {
    verifyDcimExists(id);
  });
  updateDcim(x.id);
  updateDcim(x.id);
  const e_upd = waitForDcimUpdated(id);
  block(matchDeleteDcim(id), function () {
    verifyDcimUpdated(id);
  });
  deleteDcim(x.id);
  const e_del = waitForDcimDeleted(id);
  block(matchAddDcim(id), function () {
    verifyDcimDoesNotExist(id);
  });
});

bthread("DeleteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDelete(x.id);
  const e_add = waitForDeleteAdded(id);
  block(matchDeleteDelete(id), function () {
    verifyDeleteExists(id);
  });
  updateDelete(x.id);
  updateDelete(x.id);
  const e_upd = waitForDeleteUpdated(id);
  block(matchDeleteDelete(id), function () {
    verifyDeleteUpdated(id);
  });
  deleteDelete(x.id);
  const e_del = waitForDeleteDeleted(id);
  block(matchAddDelete(id), function () {
    verifyDeleteDoesNotExist(id);
  });
});

bthread("DeviceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDevice(x.id);
  const e_add = waitForDeviceAdded(id);
  block(matchDeleteDevice(id), function () {
    verifyDeviceExists(id);
  });
  updateDevice(x.id);
  updateDevice(x.id);
  const e_upd = waitForDeviceUpdated(id);
  block(matchDeleteDevice(id), function () {
    verifyDeviceUpdated(id);
  });
  deleteDevice(x.id);
  const e_del = waitForDeviceDeleted(id);
  block(matchAddDevice(id), function () {
    verifyDeviceDoesNotExist(id);
  });
});

bthread("DevicebayLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDevicebay(x.id);
  const e_add = waitForDevicebayAdded(id);
  block(matchDeleteDevicebay(id), function () {
    verifyDevicebayExists(id);
  });
  updateDevicebay(x.id);
  updateDevicebay(x.id);
  const e_upd = waitForDevicebayUpdated(id);
  block(matchDeleteDevicebay(id), function () {
    verifyDevicebayUpdated(id);
  });
  deleteDevicebay(x.id);
  const e_del = waitForDevicebayDeleted(id);
  block(matchAddDevicebay(id), function () {
    verifyDevicebayDoesNotExist(id);
  });
});

bthread("DevicebaytemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDevicebaytemplate(x.id);
  const e_add = waitForDevicebaytemplateAdded(id);
  block(matchDeleteDevicebaytemplate(id), function () {
    verifyDevicebaytemplateExists(id);
  });
  updateDevicebaytemplate(x.id);
  updateDevicebaytemplate(x.id);
  const e_upd = waitForDevicebaytemplateUpdated(id);
  block(matchDeleteDevicebaytemplate(id), function () {
    verifyDevicebaytemplateUpdated(id);
  });
  deleteDevicebaytemplate(x.id);
  const e_del = waitForDevicebaytemplateDeleted(id);
  block(matchAddDevicebaytemplate(id), function () {
    verifyDevicebaytemplateDoesNotExist(id);
  });
});

bthread("DeviceroleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDevicerole(x.id);
  const e_add = waitForDeviceroleAdded(id);
  block(matchDeleteDevicerole(id), function () {
    verifyDeviceroleExists(id);
  });
  updateDevicerole(x.id);
  updateDevicerole(x.id);
  const e_upd = waitForDeviceroleUpdated(id);
  block(matchDeleteDevicerole(id), function () {
    verifyDeviceroleUpdated(id);
  });
  deleteDevicerole(x.id);
  const e_del = waitForDeviceroleDeleted(id);
  block(matchAddDevicerole(id), function () {
    verifyDeviceroleDoesNotExist(id);
  });
});

bthread("DevicetypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDevicetype(x.id);
  const e_add = waitForDevicetypeAdded(id);
  block(matchDeleteDevicetype(id), function () {
    verifyDevicetypeExists(id);
  });
  updateDevicetype(x.id);
  updateDevicetype(x.id);
  const e_upd = waitForDevicetypeUpdated(id);
  block(matchDeleteDevicetype(id), function () {
    verifyDevicetypeUpdated(id);
  });
  deleteDevicetype(x.id);
  const e_del = waitForDevicetypeDeleted(id);
  block(matchAddDevicetype(id), function () {
    verifyDevicetypeDoesNotExist(id);
  });
});

bthread("ElevationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addElevation(x.id);
  const e_add = waitForElevationAdded(id);
  block(matchDeleteElevation(id), function () {
    verifyElevationExists(id);
  });
  updateElevation(x.id);
  updateElevation(x.id);
  const e_upd = waitForElevationUpdated(id);
  block(matchDeleteElevation(id), function () {
    verifyElevationUpdated(id);
  });
  deleteElevation(x.id);
  const e_del = waitForElevationDeleted(id);
  block(matchAddElevation(id), function () {
    verifyElevationDoesNotExist(id);
  });
});

bthread("EnqueueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEnqueue(x.id);
  const e_add = waitForEnqueueAdded(id);
  block(matchDeleteEnqueue(id), function () {
    verifyEnqueueExists(id);
  });
  updateEnqueue(x.id);
  updateEnqueue(x.id);
  const e_upd = waitForEnqueueUpdated(id);
  block(matchDeleteEnqueue(id), function () {
    verifyEnqueueUpdated(id);
  });
  deleteEnqueue(x.id);
  const e_del = waitForEnqueueDeleted(id);
  block(matchAddEnqueue(id), function () {
    verifyEnqueueDoesNotExist(id);
  });
});

bthread("EventruleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEventrule(x.id);
  const e_add = waitForEventruleAdded(id);
  block(matchDeleteEventrule(id), function () {
    verifyEventruleExists(id);
  });
  updateEventrule(x.id);
  updateEventrule(x.id);
  const e_upd = waitForEventruleUpdated(id);
  block(matchDeleteEventrule(id), function () {
    verifyEventruleUpdated(id);
  });
  deleteEventrule(x.id);
  const e_del = waitForEventruleDeleted(id);
  block(matchAddEventrule(id), function () {
    verifyEventruleDoesNotExist(id);
  });
});

bthread("ExporttemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExporttemplate(x.id);
  const e_add = waitForExporttemplateAdded(id);
  block(matchDeleteExporttemplate(id), function () {
    verifyExporttemplateExists(id);
  });
  updateExporttemplate(x.id);
  updateExporttemplate(x.id);
  const e_upd = waitForExporttemplateUpdated(id);
  block(matchDeleteExporttemplate(id), function () {
    verifyExporttemplateUpdated(id);
  });
  deleteExporttemplate(x.id);
  const e_del = waitForExporttemplateDeleted(id);
  block(matchAddExporttemplate(id), function () {
    verifyExporttemplateDoesNotExist(id);
  });
});

bthread("ExtraLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExtra(x.id);
  const e_add = waitForExtraAdded(id);
  block(matchDeleteExtra(id), function () {
    verifyExtraExists(id);
  });
  updateExtra(x.id);
  updateExtra(x.id);
  const e_upd = waitForExtraUpdated(id);
  block(matchDeleteExtra(id), function () {
    verifyExtraUpdated(id);
  });
  deleteExtra(x.id);
  const e_del = waitForExtraDeleted(id);
  block(matchAddExtra(id), function () {
    verifyExtraDoesNotExist(id);
  });
});

bthread("FhrpgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFhrpgroup(x.id);
  const e_add = waitForFhrpgroupAdded(id);
  block(matchDeleteFhrpgroup(id), function () {
    verifyFhrpgroupExists(id);
  });
  updateFhrpgroup(x.id);
  updateFhrpgroup(x.id);
  const e_upd = waitForFhrpgroupUpdated(id);
  block(matchDeleteFhrpgroup(id), function () {
    verifyFhrpgroupUpdated(id);
  });
  deleteFhrpgroup(x.id);
  const e_del = waitForFhrpgroupDeleted(id);
  block(matchAddFhrpgroup(id), function () {
    verifyFhrpgroupDoesNotExist(id);
  });
});

bthread("FhrpgroupassignmentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFhrpgroupassignment(x.id);
  const e_add = waitForFhrpgroupassignmentAdded(id);
  block(matchDeleteFhrpgroupassignment(id), function () {
    verifyFhrpgroupassignmentExists(id);
  });
  updateFhrpgroupassignment(x.id);
  updateFhrpgroupassignment(x.id);
  const e_upd = waitForFhrpgroupassignmentUpdated(id);
  block(matchDeleteFhrpgroupassignment(id), function () {
    verifyFhrpgroupassignmentUpdated(id);
  });
  deleteFhrpgroupassignment(x.id);
  const e_del = waitForFhrpgroupassignmentDeleted(id);
  block(matchAddFhrpgroupassignment(id), function () {
    verifyFhrpgroupassignmentDoesNotExist(id);
  });
});

bthread("FrontportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFrontport(x.id);
  const e_add = waitForFrontportAdded(id);
  block(matchDeleteFrontport(id), function () {
    verifyFrontportExists(id);
  });
  updateFrontport(x.id);
  updateFrontport(x.id);
  const e_upd = waitForFrontportUpdated(id);
  block(matchDeleteFrontport(id), function () {
    verifyFrontportUpdated(id);
  });
  deleteFrontport(x.id);
  const e_del = waitForFrontportDeleted(id);
  block(matchAddFrontport(id), function () {
    verifyFrontportDoesNotExist(id);
  });
});

bthread("FrontporttemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFrontporttemplate(x.id);
  const e_add = waitForFrontporttemplateAdded(id);
  block(matchDeleteFrontporttemplate(id), function () {
    verifyFrontporttemplateExists(id);
  });
  updateFrontporttemplate(x.id);
  updateFrontporttemplate(x.id);
  const e_upd = waitForFrontporttemplateUpdated(id);
  block(matchDeleteFrontporttemplate(id), function () {
    verifyFrontporttemplateUpdated(id);
  });
  deleteFrontporttemplate(x.id);
  const e_del = waitForFrontporttemplateDeleted(id);
  block(matchAddFrontporttemplate(id), function () {
    verifyFrontporttemplateDoesNotExist(id);
  });
});

bthread("GroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGroup(x.id);
  const e_add = waitForGroupAdded(id);
  block(matchDeleteGroup(id), function () {
    verifyGroupExists(id);
  });
  updateGroup(x.id);
  updateGroup(x.id);
  const e_upd = waitForGroupUpdated(id);
  block(matchDeleteGroup(id), function () {
    verifyGroupUpdated(id);
  });
  deleteGroup(x.id);
  const e_del = waitForGroupDeleted(id);
  block(matchAddGroup(id), function () {
    verifyGroupDoesNotExist(id);
  });
});

bthread("IkepolicyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIkepolicy(x.id);
  const e_add = waitForIkepolicyAdded(id);
  block(matchDeleteIkepolicy(id), function () {
    verifyIkepolicyExists(id);
  });
  updateIkepolicy(x.id);
  updateIkepolicy(x.id);
  const e_upd = waitForIkepolicyUpdated(id);
  block(matchDeleteIkepolicy(id), function () {
    verifyIkepolicyUpdated(id);
  });
  deleteIkepolicy(x.id);
  const e_del = waitForIkepolicyDeleted(id);
  block(matchAddIkepolicy(id), function () {
    verifyIkepolicyDoesNotExist(id);
  });
});

bthread("IkeproposalLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIkeproposal(x.id);
  const e_add = waitForIkeproposalAdded(id);
  block(matchDeleteIkeproposal(id), function () {
    verifyIkeproposalExists(id);
  });
  updateIkeproposal(x.id);
  updateIkeproposal(x.id);
  const e_upd = waitForIkeproposalUpdated(id);
  block(matchDeleteIkeproposal(id), function () {
    verifyIkeproposalUpdated(id);
  });
  deleteIkeproposal(x.id);
  const e_del = waitForIkeproposalDeleted(id);
  block(matchAddIkeproposal(id), function () {
    verifyIkeproposalDoesNotExist(id);
  });
});

bthread("ImageattachmentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addImageattachment(x.id);
  const e_add = waitForImageattachmentAdded(id);
  block(matchDeleteImageattachment(id), function () {
    verifyImageattachmentExists(id);
  });
  updateImageattachment(x.id);
  updateImageattachment(x.id);
  const e_upd = waitForImageattachmentUpdated(id);
  block(matchDeleteImageattachment(id), function () {
    verifyImageattachmentUpdated(id);
  });
  deleteImageattachment(x.id);
  const e_del = waitForImageattachmentDeleted(id);
  block(matchAddImageattachment(id), function () {
    verifyImageattachmentDoesNotExist(id);
  });
});

bthread("InterfaceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInterface(x.id);
  const e_add = waitForInterfaceAdded(id);
  block(matchDeleteInterface(id), function () {
    verifyInterfaceExists(id);
  });
  updateInterface(x.id);
  updateInterface(x.id);
  const e_upd = waitForInterfaceUpdated(id);
  block(matchDeleteInterface(id), function () {
    verifyInterfaceUpdated(id);
  });
  deleteInterface(x.id);
  const e_del = waitForInterfaceDeleted(id);
  block(matchAddInterface(id), function () {
    verifyInterfaceDoesNotExist(id);
  });
});

bthread("InterfacetemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInterfacetemplate(x.id);
  const e_add = waitForInterfacetemplateAdded(id);
  block(matchDeleteInterfacetemplate(id), function () {
    verifyInterfacetemplateExists(id);
  });
  updateInterfacetemplate(x.id);
  updateInterfacetemplate(x.id);
  const e_upd = waitForInterfacetemplateUpdated(id);
  block(matchDeleteInterfacetemplate(id), function () {
    verifyInterfacetemplateUpdated(id);
  });
  deleteInterfacetemplate(x.id);
  const e_del = waitForInterfacetemplateDeleted(id);
  block(matchAddInterfacetemplate(id), function () {
    verifyInterfacetemplateDoesNotExist(id);
  });
});

bthread("InventoryitemLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInventoryitem(x.id);
  const e_add = waitForInventoryitemAdded(id);
  block(matchDeleteInventoryitem(id), function () {
    verifyInventoryitemExists(id);
  });
  updateInventoryitem(x.id);
  updateInventoryitem(x.id);
  const e_upd = waitForInventoryitemUpdated(id);
  block(matchDeleteInventoryitem(id), function () {
    verifyInventoryitemUpdated(id);
  });
  deleteInventoryitem(x.id);
  const e_del = waitForInventoryitemDeleted(id);
  block(matchAddInventoryitem(id), function () {
    verifyInventoryitemDoesNotExist(id);
  });
});

bthread("InventoryitemroleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInventoryitemrole(x.id);
  const e_add = waitForInventoryitemroleAdded(id);
  block(matchDeleteInventoryitemrole(id), function () {
    verifyInventoryitemroleExists(id);
  });
  updateInventoryitemrole(x.id);
  updateInventoryitemrole(x.id);
  const e_upd = waitForInventoryitemroleUpdated(id);
  block(matchDeleteInventoryitemrole(id), function () {
    verifyInventoryitemroleUpdated(id);
  });
  deleteInventoryitemrole(x.id);
  const e_del = waitForInventoryitemroleDeleted(id);
  block(matchAddInventoryitemrole(id), function () {
    verifyInventoryitemroleDoesNotExist(id);
  });
});

bthread("InventoryitemtemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInventoryitemtemplate(x.id);
  const e_add = waitForInventoryitemtemplateAdded(id);
  block(matchDeleteInventoryitemtemplate(id), function () {
    verifyInventoryitemtemplateExists(id);
  });
  updateInventoryitemtemplate(x.id);
  updateInventoryitemtemplate(x.id);
  const e_upd = waitForInventoryitemtemplateUpdated(id);
  block(matchDeleteInventoryitemtemplate(id), function () {
    verifyInventoryitemtemplateUpdated(id);
  });
  deleteInventoryitemtemplate(x.id);
  const e_del = waitForInventoryitemtemplateDeleted(id);
  block(matchAddInventoryitemtemplate(id), function () {
    verifyInventoryitemtemplateDoesNotExist(id);
  });
});

bthread("IpaddressLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIpaddress(x.id);
  const e_add = waitForIpaddressAdded(id);
  block(matchDeleteIpaddress(id), function () {
    verifyIpaddressExists(id);
  });
  updateIpaddress(x.id);
  updateIpaddress(x.id);
  const e_upd = waitForIpaddressUpdated(id);
  block(matchDeleteIpaddress(id), function () {
    verifyIpaddressUpdated(id);
  });
  deleteIpaddress(x.id);
  const e_del = waitForIpaddressDeleted(id);
  block(matchAddIpaddress(id), function () {
    verifyIpaddressDoesNotExist(id);
  });
});

bthread("IpamLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIpam(x.id);
  const e_add = waitForIpamAdded(id);
  block(matchDeleteIpam(id), function () {
    verifyIpamExists(id);
  });
  updateIpam(x.id);
  updateIpam(x.id);
  const e_upd = waitForIpamUpdated(id);
  block(matchDeleteIpam(id), function () {
    verifyIpamUpdated(id);
  });
  deleteIpam(x.id);
  const e_del = waitForIpamDeleted(id);
  block(matchAddIpam(id), function () {
    verifyIpamDoesNotExist(id);
  });
});

bthread("IprangeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIprange(x.id);
  const e_add = waitForIprangeAdded(id);
  block(matchDeleteIprange(id), function () {
    verifyIprangeExists(id);
  });
  updateIprange(x.id);
  updateIprange(x.id);
  const e_upd = waitForIprangeUpdated(id);
  block(matchDeleteIprange(id), function () {
    verifyIprangeUpdated(id);
  });
  deleteIprange(x.id);
  const e_del = waitForIprangeDeleted(id);
  block(matchAddIprange(id), function () {
    verifyIprangeDoesNotExist(id);
  });
});

bthread("IpsecpolicyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIpsecpolicy(x.id);
  const e_add = waitForIpsecpolicyAdded(id);
  block(matchDeleteIpsecpolicy(id), function () {
    verifyIpsecpolicyExists(id);
  });
  updateIpsecpolicy(x.id);
  updateIpsecpolicy(x.id);
  const e_upd = waitForIpsecpolicyUpdated(id);
  block(matchDeleteIpsecpolicy(id), function () {
    verifyIpsecpolicyUpdated(id);
  });
  deleteIpsecpolicy(x.id);
  const e_del = waitForIpsecpolicyDeleted(id);
  block(matchAddIpsecpolicy(id), function () {
    verifyIpsecpolicyDoesNotExist(id);
  });
});

bthread("IpsecprofileLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIpsecprofile(x.id);
  const e_add = waitForIpsecprofileAdded(id);
  block(matchDeleteIpsecprofile(id), function () {
    verifyIpsecprofileExists(id);
  });
  updateIpsecprofile(x.id);
  updateIpsecprofile(x.id);
  const e_upd = waitForIpsecprofileUpdated(id);
  block(matchDeleteIpsecprofile(id), function () {
    verifyIpsecprofileUpdated(id);
  });
  deleteIpsecprofile(x.id);
  const e_del = waitForIpsecprofileDeleted(id);
  block(matchAddIpsecprofile(id), function () {
    verifyIpsecprofileDoesNotExist(id);
  });
});

bthread("IpsecproposalLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIpsecproposal(x.id);
  const e_add = waitForIpsecproposalAdded(id);
  block(matchDeleteIpsecproposal(id), function () {
    verifyIpsecproposalExists(id);
  });
  updateIpsecproposal(x.id);
  updateIpsecproposal(x.id);
  const e_upd = waitForIpsecproposalUpdated(id);
  block(matchDeleteIpsecproposal(id), function () {
    verifyIpsecproposalUpdated(id);
  });
  deleteIpsecproposal(x.id);
  const e_del = waitForIpsecproposalDeleted(id);
  block(matchAddIpsecproposal(id), function () {
    verifyIpsecproposalDoesNotExist(id);
  });
});

bthread("JobLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addJob(x.id);
  const e_add = waitForJobAdded(id);
  block(matchDeleteJob(id), function () {
    verifyJobExists(id);
  });
  updateJob(x.id);
  updateJob(x.id);
  const e_upd = waitForJobUpdated(id);
  block(matchDeleteJob(id), function () {
    verifyJobUpdated(id);
  });
  deleteJob(x.id);
  const e_del = waitForJobDeleted(id);
  block(matchAddJob(id), function () {
    verifyJobDoesNotExist(id);
  });
});

bthread("JournalentryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addJournalentry(x.id);
  const e_add = waitForJournalentryAdded(id);
  block(matchDeleteJournalentry(id), function () {
    verifyJournalentryExists(id);
  });
  updateJournalentry(x.id);
  updateJournalentry(x.id);
  const e_upd = waitForJournalentryUpdated(id);
  block(matchDeleteJournalentry(id), function () {
    verifyJournalentryUpdated(id);
  });
  deleteJournalentry(x.id);
  const e_del = waitForJournalentryDeleted(id);
  block(matchAddJournalentry(id), function () {
    verifyJournalentryDoesNotExist(id);
  });
});

bthread("L2vpnLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addL2vpn(x.id);
  const e_add = waitForL2vpnAdded(id);
  block(matchDeleteL2vpn(id), function () {
    verifyL2vpnExists(id);
  });
  updateL2vpn(x.id);
  updateL2vpn(x.id);
  const e_upd = waitForL2vpnUpdated(id);
  block(matchDeleteL2vpn(id), function () {
    verifyL2vpnUpdated(id);
  });
  deleteL2vpn(x.id);
  const e_del = waitForL2vpnDeleted(id);
  block(matchAddL2vpn(id), function () {
    verifyL2vpnDoesNotExist(id);
  });
});

bthread("L2vpnterminationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addL2vpntermination(x.id);
  const e_add = waitForL2vpnterminationAdded(id);
  block(matchDeleteL2vpntermination(id), function () {
    verifyL2vpnterminationExists(id);
  });
  updateL2vpntermination(x.id);
  updateL2vpntermination(x.id);
  const e_upd = waitForL2vpnterminationUpdated(id);
  block(matchDeleteL2vpntermination(id), function () {
    verifyL2vpnterminationUpdated(id);
  });
  deleteL2vpntermination(x.id);
  const e_del = waitForL2vpnterminationDeleted(id);
  block(matchAddL2vpntermination(id), function () {
    verifyL2vpnterminationDoesNotExist(id);
  });
});

bthread("LocationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLocation(x.id);
  const e_add = waitForLocationAdded(id);
  block(matchDeleteLocation(id), function () {
    verifyLocationExists(id);
  });
  updateLocation(x.id);
  updateLocation(x.id);
  const e_upd = waitForLocationUpdated(id);
  block(matchDeleteLocation(id), function () {
    verifyLocationUpdated(id);
  });
  deleteLocation(x.id);
  const e_del = waitForLocationDeleted(id);
  block(matchAddLocation(id), function () {
    verifyLocationDoesNotExist(id);
  });
});

bthread("MacaddressLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMacaddress(x.id);
  const e_add = waitForMacaddressAdded(id);
  block(matchDeleteMacaddress(id), function () {
    verifyMacaddressExists(id);
  });
  updateMacaddress(x.id);
  updateMacaddress(x.id);
  const e_upd = waitForMacaddressUpdated(id);
  block(matchDeleteMacaddress(id), function () {
    verifyMacaddressUpdated(id);
  });
  deleteMacaddress(x.id);
  const e_del = waitForMacaddressDeleted(id);
  block(matchAddMacaddress(id), function () {
    verifyMacaddressDoesNotExist(id);
  });
});

bthread("ManufacturerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addManufacturer(x.id);
  const e_add = waitForManufacturerAdded(id);
  block(matchDeleteManufacturer(id), function () {
    verifyManufacturerExists(id);
  });
  updateManufacturer(x.id);
  updateManufacturer(x.id);
  const e_upd = waitForManufacturerUpdated(id);
  block(matchDeleteManufacturer(id), function () {
    verifyManufacturerUpdated(id);
  });
  deleteManufacturer(x.id);
  const e_del = waitForManufacturerDeleted(id);
  block(matchAddManufacturer(id), function () {
    verifyManufacturerDoesNotExist(id);
  });
});

bthread("ModuleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addModule(x.id);
  const e_add = waitForModuleAdded(id);
  block(matchDeleteModule(id), function () {
    verifyModuleExists(id);
  });
  updateModule(x.id);
  updateModule(x.id);
  const e_upd = waitForModuleUpdated(id);
  block(matchDeleteModule(id), function () {
    verifyModuleUpdated(id);
  });
  deleteModule(x.id);
  const e_del = waitForModuleDeleted(id);
  block(matchAddModule(id), function () {
    verifyModuleDoesNotExist(id);
  });
});

bthread("ModulebayLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addModulebay(x.id);
  const e_add = waitForModulebayAdded(id);
  block(matchDeleteModulebay(id), function () {
    verifyModulebayExists(id);
  });
  updateModulebay(x.id);
  updateModulebay(x.id);
  const e_upd = waitForModulebayUpdated(id);
  block(matchDeleteModulebay(id), function () {
    verifyModulebayUpdated(id);
  });
  deleteModulebay(x.id);
  const e_del = waitForModulebayDeleted(id);
  block(matchAddModulebay(id), function () {
    verifyModulebayDoesNotExist(id);
  });
});

bthread("ModulebaytemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addModulebaytemplate(x.id);
  const e_add = waitForModulebaytemplateAdded(id);
  block(matchDeleteModulebaytemplate(id), function () {
    verifyModulebaytemplateExists(id);
  });
  updateModulebaytemplate(x.id);
  updateModulebaytemplate(x.id);
  const e_upd = waitForModulebaytemplateUpdated(id);
  block(matchDeleteModulebaytemplate(id), function () {
    verifyModulebaytemplateUpdated(id);
  });
  deleteModulebaytemplate(x.id);
  const e_del = waitForModulebaytemplateDeleted(id);
  block(matchAddModulebaytemplate(id), function () {
    verifyModulebaytemplateDoesNotExist(id);
  });
});

bthread("ModuletypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addModuletype(x.id);
  const e_add = waitForModuletypeAdded(id);
  block(matchDeleteModuletype(id), function () {
    verifyModuletypeExists(id);
  });
  updateModuletype(x.id);
  updateModuletype(x.id);
  const e_upd = waitForModuletypeUpdated(id);
  block(matchDeleteModuletype(id), function () {
    verifyModuletypeUpdated(id);
  });
  deleteModuletype(x.id);
  const e_del = waitForModuletypeDeleted(id);
  block(matchAddModuletype(id), function () {
    verifyModuletypeDoesNotExist(id);
  });
});

bthread("ModuletypeprofileLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addModuletypeprofile(x.id);
  const e_add = waitForModuletypeprofileAdded(id);
  block(matchDeleteModuletypeprofile(id), function () {
    verifyModuletypeprofileExists(id);
  });
  updateModuletypeprofile(x.id);
  updateModuletypeprofile(x.id);
  const e_upd = waitForModuletypeprofileUpdated(id);
  block(matchDeleteModuletypeprofile(id), function () {
    verifyModuletypeprofileUpdated(id);
  });
  deleteModuletypeprofile(x.id);
  const e_del = waitForModuletypeprofileDeleted(id);
  block(matchAddModuletypeprofile(id), function () {
    verifyModuletypeprofileDoesNotExist(id);
  });
});

bthread("NotificationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNotification(x.id);
  const e_add = waitForNotificationAdded(id);
  block(matchDeleteNotification(id), function () {
    verifyNotificationExists(id);
  });
  updateNotification(x.id);
  updateNotification(x.id);
  const e_upd = waitForNotificationUpdated(id);
  block(matchDeleteNotification(id), function () {
    verifyNotificationUpdated(id);
  });
  deleteNotification(x.id);
  const e_del = waitForNotificationDeleted(id);
  block(matchAddNotification(id), function () {
    verifyNotificationDoesNotExist(id);
  });
});

bthread("NotificationgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNotificationgroup(x.id);
  const e_add = waitForNotificationgroupAdded(id);
  block(matchDeleteNotificationgroup(id), function () {
    verifyNotificationgroupExists(id);
  });
  updateNotificationgroup(x.id);
  updateNotificationgroup(x.id);
  const e_upd = waitForNotificationgroupUpdated(id);
  block(matchDeleteNotificationgroup(id), function () {
    verifyNotificationgroupUpdated(id);
  });
  deleteNotificationgroup(x.id);
  const e_del = waitForNotificationgroupDeleted(id);
  block(matchAddNotificationgroup(id), function () {
    verifyNotificationgroupDoesNotExist(id);
  });
});

bthread("ObjectchangeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addObjectchange(x.id);
  const e_add = waitForObjectchangeAdded(id);
  block(matchDeleteObjectchange(id), function () {
    verifyObjectchangeExists(id);
  });
  updateObjectchange(x.id);
  updateObjectchange(x.id);
  const e_upd = waitForObjectchangeUpdated(id);
  block(matchDeleteObjectchange(id), function () {
    verifyObjectchangeUpdated(id);
  });
  deleteObjectchange(x.id);
  const e_del = waitForObjectchangeDeleted(id);
  block(matchAddObjectchange(id), function () {
    verifyObjectchangeDoesNotExist(id);
  });
});

bthread("ObjecttypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addObjecttype(x.id);
  const e_add = waitForObjecttypeAdded(id);
  block(matchDeleteObjecttype(id), function () {
    verifyObjecttypeExists(id);
  });
  updateObjecttype(x.id);
  updateObjecttype(x.id);
  const e_upd = waitForObjecttypeUpdated(id);
  block(matchDeleteObjecttype(id), function () {
    verifyObjecttypeUpdated(id);
  });
  deleteObjecttype(x.id);
  const e_del = waitForObjecttypeDeleted(id);
  block(matchAddObjecttype(id), function () {
    verifyObjecttypeDoesNotExist(id);
  });
});

bthread("PathLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPath(x.id);
  const e_add = waitForPathAdded(id);
  block(matchDeletePath(id), function () {
    verifyPathExists(id);
  });
  updatePath(x.id);
  updatePath(x.id);
  const e_upd = waitForPathUpdated(id);
  block(matchDeletePath(id), function () {
    verifyPathUpdated(id);
  });
  deletePath(x.id);
  const e_del = waitForPathDeleted(id);
  block(matchAddPath(id), function () {
    verifyPathDoesNotExist(id);
  });
});

bthread("PermissionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPermission(x.id);
  const e_add = waitForPermissionAdded(id);
  block(matchDeletePermission(id), function () {
    verifyPermissionExists(id);
  });
  updatePermission(x.id);
  updatePermission(x.id);
  const e_upd = waitForPermissionUpdated(id);
  block(matchDeletePermission(id), function () {
    verifyPermissionUpdated(id);
  });
  deletePermission(x.id);
  const e_del = waitForPermissionDeleted(id);
  block(matchAddPermission(id), function () {
    verifyPermissionDoesNotExist(id);
  });
});

bthread("PlatformLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPlatform(x.id);
  const e_add = waitForPlatformAdded(id);
  block(matchDeletePlatform(id), function () {
    verifyPlatformExists(id);
  });
  updatePlatform(x.id);
  updatePlatform(x.id);
  const e_upd = waitForPlatformUpdated(id);
  block(matchDeletePlatform(id), function () {
    verifyPlatformUpdated(id);
  });
  deletePlatform(x.id);
  const e_del = waitForPlatformDeleted(id);
  block(matchAddPlatform(id), function () {
    verifyPlatformDoesNotExist(id);
  });
});

bthread("PowerfeedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPowerfeed(x.id);
  const e_add = waitForPowerfeedAdded(id);
  block(matchDeletePowerfeed(id), function () {
    verifyPowerfeedExists(id);
  });
  updatePowerfeed(x.id);
  updatePowerfeed(x.id);
  const e_upd = waitForPowerfeedUpdated(id);
  block(matchDeletePowerfeed(id), function () {
    verifyPowerfeedUpdated(id);
  });
  deletePowerfeed(x.id);
  const e_del = waitForPowerfeedDeleted(id);
  block(matchAddPowerfeed(id), function () {
    verifyPowerfeedDoesNotExist(id);
  });
});

bthread("PoweroutletLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPoweroutlet(x.id);
  const e_add = waitForPoweroutletAdded(id);
  block(matchDeletePoweroutlet(id), function () {
    verifyPoweroutletExists(id);
  });
  updatePoweroutlet(x.id);
  updatePoweroutlet(x.id);
  const e_upd = waitForPoweroutletUpdated(id);
  block(matchDeletePoweroutlet(id), function () {
    verifyPoweroutletUpdated(id);
  });
  deletePoweroutlet(x.id);
  const e_del = waitForPoweroutletDeleted(id);
  block(matchAddPoweroutlet(id), function () {
    verifyPoweroutletDoesNotExist(id);
  });
});

bthread("PoweroutlettemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPoweroutlettemplate(x.id);
  const e_add = waitForPoweroutlettemplateAdded(id);
  block(matchDeletePoweroutlettemplate(id), function () {
    verifyPoweroutlettemplateExists(id);
  });
  updatePoweroutlettemplate(x.id);
  updatePoweroutlettemplate(x.id);
  const e_upd = waitForPoweroutlettemplateUpdated(id);
  block(matchDeletePoweroutlettemplate(id), function () {
    verifyPoweroutlettemplateUpdated(id);
  });
  deletePoweroutlettemplate(x.id);
  const e_del = waitForPoweroutlettemplateDeleted(id);
  block(matchAddPoweroutlettemplate(id), function () {
    verifyPoweroutlettemplateDoesNotExist(id);
  });
});

bthread("PowerpanelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPowerpanel(x.id);
  const e_add = waitForPowerpanelAdded(id);
  block(matchDeletePowerpanel(id), function () {
    verifyPowerpanelExists(id);
  });
  updatePowerpanel(x.id);
  updatePowerpanel(x.id);
  const e_upd = waitForPowerpanelUpdated(id);
  block(matchDeletePowerpanel(id), function () {
    verifyPowerpanelUpdated(id);
  });
  deletePowerpanel(x.id);
  const e_del = waitForPowerpanelDeleted(id);
  block(matchAddPowerpanel(id), function () {
    verifyPowerpanelDoesNotExist(id);
  });
});

bthread("PowerportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPowerport(x.id);
  const e_add = waitForPowerportAdded(id);
  block(matchDeletePowerport(id), function () {
    verifyPowerportExists(id);
  });
  updatePowerport(x.id);
  updatePowerport(x.id);
  const e_upd = waitForPowerportUpdated(id);
  block(matchDeletePowerport(id), function () {
    verifyPowerportUpdated(id);
  });
  deletePowerport(x.id);
  const e_del = waitForPowerportDeleted(id);
  block(matchAddPowerport(id), function () {
    verifyPowerportDoesNotExist(id);
  });
});

bthread("PowerporttemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPowerporttemplate(x.id);
  const e_add = waitForPowerporttemplateAdded(id);
  block(matchDeletePowerporttemplate(id), function () {
    verifyPowerporttemplateExists(id);
  });
  updatePowerporttemplate(x.id);
  updatePowerporttemplate(x.id);
  const e_upd = waitForPowerporttemplateUpdated(id);
  block(matchDeletePowerporttemplate(id), function () {
    verifyPowerporttemplateUpdated(id);
  });
  deletePowerporttemplate(x.id);
  const e_del = waitForPowerporttemplateDeleted(id);
  block(matchAddPowerporttemplate(id), function () {
    verifyPowerporttemplateDoesNotExist(id);
  });
});

bthread("PrefixeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefixe(x.id);
  const e_add = waitForPrefixeAdded(id);
  block(matchDeletePrefixe(id), function () {
    verifyPrefixeExists(id);
  });
  updatePrefixe(x.id);
  updatePrefixe(x.id);
  const e_upd = waitForPrefixeUpdated(id);
  block(matchDeletePrefixe(id), function () {
    verifyPrefixeUpdated(id);
  });
  deletePrefixe(x.id);
  const e_del = waitForPrefixeDeleted(id);
  block(matchAddPrefixe(id), function () {
    verifyPrefixeDoesNotExist(id);
  });
});

bthread("ProviderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProvider(x.id);
  const e_add = waitForProviderAdded(id);
  block(matchDeleteProvider(id), function () {
    verifyProviderExists(id);
  });
  updateProvider(x.id);
  updateProvider(x.id);
  const e_upd = waitForProviderUpdated(id);
  block(matchDeleteProvider(id), function () {
    verifyProviderUpdated(id);
  });
  deleteProvider(x.id);
  const e_del = waitForProviderDeleted(id);
  block(matchAddProvider(id), function () {
    verifyProviderDoesNotExist(id);
  });
});

bthread("ProvideraccountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProvideraccount(x.id);
  const e_add = waitForProvideraccountAdded(id);
  block(matchDeleteProvideraccount(id), function () {
    verifyProvideraccountExists(id);
  });
  updateProvideraccount(x.id);
  updateProvideraccount(x.id);
  const e_upd = waitForProvideraccountUpdated(id);
  block(matchDeleteProvideraccount(id), function () {
    verifyProvideraccountUpdated(id);
  });
  deleteProvideraccount(x.id);
  const e_del = waitForProvideraccountDeleted(id);
  block(matchAddProvideraccount(id), function () {
    verifyProvideraccountDoesNotExist(id);
  });
});

bthread("ProvidernetworkLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProvidernetwork(x.id);
  const e_add = waitForProvidernetworkAdded(id);
  block(matchDeleteProvidernetwork(id), function () {
    verifyProvidernetworkExists(id);
  });
  updateProvidernetwork(x.id);
  updateProvidernetwork(x.id);
  const e_upd = waitForProvidernetworkUpdated(id);
  block(matchDeleteProvidernetwork(id), function () {
    verifyProvidernetworkUpdated(id);
  });
  deleteProvidernetwork(x.id);
  const e_del = waitForProvidernetworkDeleted(id);
  block(matchAddProvidernetwork(id), function () {
    verifyProvidernetworkDoesNotExist(id);
  });
});

bthread("ProvisionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProvision(x.id);
  const e_add = waitForProvisionAdded(id);
  block(matchDeleteProvision(id), function () {
    verifyProvisionExists(id);
  });
  updateProvision(x.id);
  updateProvision(x.id);
  const e_upd = waitForProvisionUpdated(id);
  block(matchDeleteProvision(id), function () {
    verifyProvisionUpdated(id);
  });
  deleteProvision(x.id);
  const e_del = waitForProvisionDeleted(id);
  block(matchAddProvision(id), function () {
    verifyProvisionDoesNotExist(id);
  });
});

bthread("RackLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRack(x.id);
  const e_add = waitForRackAdded(id);
  block(matchDeleteRack(id), function () {
    verifyRackExists(id);
  });
  updateRack(x.id);
  updateRack(x.id);
  const e_upd = waitForRackUpdated(id);
  block(matchDeleteRack(id), function () {
    verifyRackUpdated(id);
  });
  deleteRack(x.id);
  const e_del = waitForRackDeleted(id);
  block(matchAddRack(id), function () {
    verifyRackDoesNotExist(id);
  });
});

bthread("RackreservationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRackreservation(x.id);
  const e_add = waitForRackreservationAdded(id);
  block(matchDeleteRackreservation(id), function () {
    verifyRackreservationExists(id);
  });
  updateRackreservation(x.id);
  updateRackreservation(x.id);
  const e_upd = waitForRackreservationUpdated(id);
  block(matchDeleteRackreservation(id), function () {
    verifyRackreservationUpdated(id);
  });
  deleteRackreservation(x.id);
  const e_del = waitForRackreservationDeleted(id);
  block(matchAddRackreservation(id), function () {
    verifyRackreservationDoesNotExist(id);
  });
});

bthread("RackroleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRackrole(x.id);
  const e_add = waitForRackroleAdded(id);
  block(matchDeleteRackrole(id), function () {
    verifyRackroleExists(id);
  });
  updateRackrole(x.id);
  updateRackrole(x.id);
  const e_upd = waitForRackroleUpdated(id);
  block(matchDeleteRackrole(id), function () {
    verifyRackroleUpdated(id);
  });
  deleteRackrole(x.id);
  const e_del = waitForRackroleDeleted(id);
  block(matchAddRackrole(id), function () {
    verifyRackroleDoesNotExist(id);
  });
});

bthread("RacktypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRacktype(x.id);
  const e_add = waitForRacktypeAdded(id);
  block(matchDeleteRacktype(id), function () {
    verifyRacktypeExists(id);
  });
  updateRacktype(x.id);
  updateRacktype(x.id);
  const e_upd = waitForRacktypeUpdated(id);
  block(matchDeleteRacktype(id), function () {
    verifyRacktypeUpdated(id);
  });
  deleteRacktype(x.id);
  const e_del = waitForRacktypeDeleted(id);
  block(matchAddRacktype(id), function () {
    verifyRacktypeDoesNotExist(id);
  });
});

bthread("RearportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRearport(x.id);
  const e_add = waitForRearportAdded(id);
  block(matchDeleteRearport(id), function () {
    verifyRearportExists(id);
  });
  updateRearport(x.id);
  updateRearport(x.id);
  const e_upd = waitForRearportUpdated(id);
  block(matchDeleteRearport(id), function () {
    verifyRearportUpdated(id);
  });
  deleteRearport(x.id);
  const e_del = waitForRearportDeleted(id);
  block(matchAddRearport(id), function () {
    verifyRearportDoesNotExist(id);
  });
});

bthread("RearporttemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRearporttemplate(x.id);
  const e_add = waitForRearporttemplateAdded(id);
  block(matchDeleteRearporttemplate(id), function () {
    verifyRearporttemplateExists(id);
  });
  updateRearporttemplate(x.id);
  updateRearporttemplate(x.id);
  const e_upd = waitForRearporttemplateUpdated(id);
  block(matchDeleteRearporttemplate(id), function () {
    verifyRearporttemplateUpdated(id);
  });
  deleteRearporttemplate(x.id);
  const e_del = waitForRearporttemplateDeleted(id);
  block(matchAddRearporttemplate(id), function () {
    verifyRearporttemplateDoesNotExist(id);
  });
});

bthread("RegionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRegion(x.id);
  const e_add = waitForRegionAdded(id);
  block(matchDeleteRegion(id), function () {
    verifyRegionExists(id);
  });
  updateRegion(x.id);
  updateRegion(x.id);
  const e_upd = waitForRegionUpdated(id);
  block(matchDeleteRegion(id), function () {
    verifyRegionUpdated(id);
  });
  deleteRegion(x.id);
  const e_del = waitForRegionDeleted(id);
  block(matchAddRegion(id), function () {
    verifyRegionDoesNotExist(id);
  });
});

bthread("RenderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRender(x.id);
  const e_add = waitForRenderAdded(id);
  block(matchDeleteRender(id), function () {
    verifyRenderExists(id);
  });
  updateRender(x.id);
  updateRender(x.id);
  const e_upd = waitForRenderUpdated(id);
  block(matchDeleteRender(id), function () {
    verifyRenderUpdated(id);
  });
  deleteRender(x.id);
  const e_del = waitForRenderDeleted(id);
  block(matchAddRender(id), function () {
    verifyRenderDoesNotExist(id);
  });
});

bthread("RenderconfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRenderconfig(x.id);
  const e_add = waitForRenderconfigAdded(id);
  block(matchDeleteRenderconfig(id), function () {
    verifyRenderconfigExists(id);
  });
  updateRenderconfig(x.id);
  updateRenderconfig(x.id);
  const e_upd = waitForRenderconfigUpdated(id);
  block(matchDeleteRenderconfig(id), function () {
    verifyRenderconfigUpdated(id);
  });
  deleteRenderconfig(x.id);
  const e_del = waitForRenderconfigDeleted(id);
  block(matchAddRenderconfig(id), function () {
    verifyRenderconfigDoesNotExist(id);
  });
});

bthread("RequeueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRequeue(x.id);
  const e_add = waitForRequeueAdded(id);
  block(matchDeleteRequeue(id), function () {
    verifyRequeueExists(id);
  });
  updateRequeue(x.id);
  updateRequeue(x.id);
  const e_upd = waitForRequeueUpdated(id);
  block(matchDeleteRequeue(id), function () {
    verifyRequeueUpdated(id);
  });
  deleteRequeue(x.id);
  const e_del = waitForRequeueDeleted(id);
  block(matchAddRequeue(id), function () {
    verifyRequeueDoesNotExist(id);
  });
});

bthread("RirLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRir(x.id);
  const e_add = waitForRirAdded(id);
  block(matchDeleteRir(id), function () {
    verifyRirExists(id);
  });
  updateRir(x.id);
  updateRir(x.id);
  const e_upd = waitForRirUpdated(id);
  block(matchDeleteRir(id), function () {
    verifyRirUpdated(id);
  });
  deleteRir(x.id);
  const e_del = waitForRirDeleted(id);
  block(matchAddRir(id), function () {
    verifyRirDoesNotExist(id);
  });
});

bthread("RoleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRole(x.id);
  const e_add = waitForRoleAdded(id);
  block(matchDeleteRole(id), function () {
    verifyRoleExists(id);
  });
  updateRole(x.id);
  updateRole(x.id);
  const e_upd = waitForRoleUpdated(id);
  block(matchDeleteRole(id), function () {
    verifyRoleUpdated(id);
  });
  deleteRole(x.id);
  const e_del = waitForRoleDeleted(id);
  block(matchAddRole(id), function () {
    verifyRoleDoesNotExist(id);
  });
});

bthread("RoutetargetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRoutetarget(x.id);
  const e_add = waitForRoutetargetAdded(id);
  block(matchDeleteRoutetarget(id), function () {
    verifyRoutetargetExists(id);
  });
  updateRoutetarget(x.id);
  updateRoutetarget(x.id);
  const e_upd = waitForRoutetargetUpdated(id);
  block(matchDeleteRoutetarget(id), function () {
    verifyRoutetargetUpdated(id);
  });
  deleteRoutetarget(x.id);
  const e_del = waitForRoutetargetDeleted(id);
  block(matchAddRoutetarget(id), function () {
    verifyRoutetargetDoesNotExist(id);
  });
});

bthread("SavedfilterLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSavedfilter(x.id);
  const e_add = waitForSavedfilterAdded(id);
  block(matchDeleteSavedfilter(id), function () {
    verifySavedfilterExists(id);
  });
  updateSavedfilter(x.id);
  updateSavedfilter(x.id);
  const e_upd = waitForSavedfilterUpdated(id);
  block(matchDeleteSavedfilter(id), function () {
    verifySavedfilterUpdated(id);
  });
  deleteSavedfilter(x.id);
  const e_del = waitForSavedfilterDeleted(id);
  block(matchAddSavedfilter(id), function () {
    verifySavedfilterDoesNotExist(id);
  });
});

bthread("SchemaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSchema(x.id);
  const e_add = waitForSchemaAdded(id);
  block(matchDeleteSchema(id), function () {
    verifySchemaExists(id);
  });
  updateSchema(x.id);
  updateSchema(x.id);
  const e_upd = waitForSchemaUpdated(id);
  block(matchDeleteSchema(id), function () {
    verifySchemaUpdated(id);
  });
  deleteSchema(x.id);
  const e_del = waitForSchemaDeleted(id);
  block(matchAddSchema(id), function () {
    verifySchemaDoesNotExist(id);
  });
});

bthread("ScriptLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addScript(x.id);
  const e_add = waitForScriptAdded(id);
  block(matchDeleteScript(id), function () {
    verifyScriptExists(id);
  });
  updateScript(x.id);
  updateScript(x.id);
  const e_upd = waitForScriptUpdated(id);
  block(matchDeleteScript(id), function () {
    verifyScriptUpdated(id);
  });
  deleteScript(x.id);
  const e_del = waitForScriptDeleted(id);
  block(matchAddScript(id), function () {
    verifyScriptDoesNotExist(id);
  });
});

bthread("ServiceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addService(x.id);
  const e_add = waitForServiceAdded(id);
  block(matchDeleteService(id), function () {
    verifyServiceExists(id);
  });
  updateService(x.id);
  updateService(x.id);
  const e_upd = waitForServiceUpdated(id);
  block(matchDeleteService(id), function () {
    verifyServiceUpdated(id);
  });
  deleteService(x.id);
  const e_del = waitForServiceDeleted(id);
  block(matchAddService(id), function () {
    verifyServiceDoesNotExist(id);
  });
});

bthread("ServicetemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addServicetemplate(x.id);
  const e_add = waitForServicetemplateAdded(id);
  block(matchDeleteServicetemplate(id), function () {
    verifyServicetemplateExists(id);
  });
  updateServicetemplate(x.id);
  updateServicetemplate(x.id);
  const e_upd = waitForServicetemplateUpdated(id);
  block(matchDeleteServicetemplate(id), function () {
    verifyServicetemplateUpdated(id);
  });
  deleteServicetemplate(x.id);
  const e_del = waitForServicetemplateDeleted(id);
  block(matchAddServicetemplate(id), function () {
    verifyServicetemplateDoesNotExist(id);
  });
});

bthread("SiteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSite(x.id);
  const e_add = waitForSiteAdded(id);
  block(matchDeleteSite(id), function () {
    verifySiteExists(id);
  });
  updateSite(x.id);
  updateSite(x.id);
  const e_upd = waitForSiteUpdated(id);
  block(matchDeleteSite(id), function () {
    verifySiteUpdated(id);
  });
  deleteSite(x.id);
  const e_del = waitForSiteDeleted(id);
  block(matchAddSite(id), function () {
    verifySiteDoesNotExist(id);
  });
});

bthread("SitegroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSitegroup(x.id);
  const e_add = waitForSitegroupAdded(id);
  block(matchDeleteSitegroup(id), function () {
    verifySitegroupExists(id);
  });
  updateSitegroup(x.id);
  updateSitegroup(x.id);
  const e_upd = waitForSitegroupUpdated(id);
  block(matchDeleteSitegroup(id), function () {
    verifySitegroupUpdated(id);
  });
  deleteSitegroup(x.id);
  const e_del = waitForSitegroupDeleted(id);
  block(matchAddSitegroup(id), function () {
    verifySitegroupDoesNotExist(id);
  });
});

bthread("StatuLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStatu(x.id);
  const e_add = waitForStatuAdded(id);
  block(matchDeleteStatu(id), function () {
    verifyStatuExists(id);
  });
  updateStatu(x.id);
  updateStatu(x.id);
  const e_upd = waitForStatuUpdated(id);
  block(matchDeleteStatu(id), function () {
    verifyStatuUpdated(id);
  });
  deleteStatu(x.id);
  const e_del = waitForStatuDeleted(id);
  block(matchAddStatu(id), function () {
    verifyStatuDoesNotExist(id);
  });
});

bthread("StopLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStop(x.id);
  const e_add = waitForStopAdded(id);
  block(matchDeleteStop(id), function () {
    verifyStopExists(id);
  });
  updateStop(x.id);
  updateStop(x.id);
  const e_upd = waitForStopUpdated(id);
  block(matchDeleteStop(id), function () {
    verifyStopUpdated(id);
  });
  deleteStop(x.id);
  const e_del = waitForStopDeleted(id);
  block(matchAddStop(id), function () {
    verifyStopDoesNotExist(id);
  });
});

bthread("SubscriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSubscription(x.id);
  const e_add = waitForSubscriptionAdded(id);
  block(matchDeleteSubscription(id), function () {
    verifySubscriptionExists(id);
  });
  updateSubscription(x.id);
  updateSubscription(x.id);
  const e_upd = waitForSubscriptionUpdated(id);
  block(matchDeleteSubscription(id), function () {
    verifySubscriptionUpdated(id);
  });
  deleteSubscription(x.id);
  const e_del = waitForSubscriptionDeleted(id);
  block(matchAddSubscription(id), function () {
    verifySubscriptionDoesNotExist(id);
  });
});

bthread("SyncLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSync(x.id);
  const e_add = waitForSyncAdded(id);
  block(matchDeleteSync(id), function () {
    verifySyncExists(id);
  });
  updateSync(x.id);
  updateSync(x.id);
  const e_upd = waitForSyncUpdated(id);
  block(matchDeleteSync(id), function () {
    verifySyncUpdated(id);
  });
  deleteSync(x.id);
  const e_del = waitForSyncDeleted(id);
  block(matchAddSync(id), function () {
    verifySyncDoesNotExist(id);
  });
});

bthread("TableconfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTableconfig(x.id);
  const e_add = waitForTableconfigAdded(id);
  block(matchDeleteTableconfig(id), function () {
    verifyTableconfigExists(id);
  });
  updateTableconfig(x.id);
  updateTableconfig(x.id);
  const e_upd = waitForTableconfigUpdated(id);
  block(matchDeleteTableconfig(id), function () {
    verifyTableconfigUpdated(id);
  });
  deleteTableconfig(x.id);
  const e_del = waitForTableconfigDeleted(id);
  block(matchAddTableconfig(id), function () {
    verifyTableconfigDoesNotExist(id);
  });
});

bthread("TagLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTag(x.id);
  const e_add = waitForTagAdded(id);
  block(matchDeleteTag(id), function () {
    verifyTagExists(id);
  });
  updateTag(x.id);
  updateTag(x.id);
  const e_upd = waitForTagUpdated(id);
  block(matchDeleteTag(id), function () {
    verifyTagUpdated(id);
  });
  deleteTag(x.id);
  const e_del = waitForTagDeleted(id);
  block(matchAddTag(id), function () {
    verifyTagDoesNotExist(id);
  });
});

bthread("TaggedobjectLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTaggedobject(x.id);
  const e_add = waitForTaggedobjectAdded(id);
  block(matchDeleteTaggedobject(id), function () {
    verifyTaggedobjectExists(id);
  });
  updateTaggedobject(x.id);
  updateTaggedobject(x.id);
  const e_upd = waitForTaggedobjectUpdated(id);
  block(matchDeleteTaggedobject(id), function () {
    verifyTaggedobjectUpdated(id);
  });
  deleteTaggedobject(x.id);
  const e_del = waitForTaggedobjectDeleted(id);
  block(matchAddTaggedobject(id), function () {
    verifyTaggedobjectDoesNotExist(id);
  });
});

bthread("TenancyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTenancy(x.id);
  const e_add = waitForTenancyAdded(id);
  block(matchDeleteTenancy(id), function () {
    verifyTenancyExists(id);
  });
  updateTenancy(x.id);
  updateTenancy(x.id);
  const e_upd = waitForTenancyUpdated(id);
  block(matchDeleteTenancy(id), function () {
    verifyTenancyUpdated(id);
  });
  deleteTenancy(x.id);
  const e_del = waitForTenancyDeleted(id);
  block(matchAddTenancy(id), function () {
    verifyTenancyDoesNotExist(id);
  });
});

bthread("TenantLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTenant(x.id);
  const e_add = waitForTenantAdded(id);
  block(matchDeleteTenant(id), function () {
    verifyTenantExists(id);
  });
  updateTenant(x.id);
  updateTenant(x.id);
  const e_upd = waitForTenantUpdated(id);
  block(matchDeleteTenant(id), function () {
    verifyTenantUpdated(id);
  });
  deleteTenant(x.id);
  const e_del = waitForTenantDeleted(id);
  block(matchAddTenant(id), function () {
    verifyTenantDoesNotExist(id);
  });
});

bthread("TenantgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTenantgroup(x.id);
  const e_add = waitForTenantgroupAdded(id);
  block(matchDeleteTenantgroup(id), function () {
    verifyTenantgroupExists(id);
  });
  updateTenantgroup(x.id);
  updateTenantgroup(x.id);
  const e_upd = waitForTenantgroupUpdated(id);
  block(matchDeleteTenantgroup(id), function () {
    verifyTenantgroupUpdated(id);
  });
  deleteTenantgroup(x.id);
  const e_del = waitForTenantgroupDeleted(id);
  block(matchAddTenantgroup(id), function () {
    verifyTenantgroupDoesNotExist(id);
  });
});

bthread("TokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addToken(x.id);
  const e_add = waitForTokenAdded(id);
  block(matchDeleteToken(id), function () {
    verifyTokenExists(id);
  });
  updateToken(x.id);
  updateToken(x.id);
  const e_upd = waitForTokenUpdated(id);
  block(matchDeleteToken(id), function () {
    verifyTokenUpdated(id);
  });
  deleteToken(x.id);
  const e_del = waitForTokenDeleted(id);
  block(matchAddToken(id), function () {
    verifyTokenDoesNotExist(id);
  });
});

bthread("TraceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTrace(x.id);
  const e_add = waitForTraceAdded(id);
  block(matchDeleteTrace(id), function () {
    verifyTraceExists(id);
  });
  updateTrace(x.id);
  updateTrace(x.id);
  const e_upd = waitForTraceUpdated(id);
  block(matchDeleteTrace(id), function () {
    verifyTraceUpdated(id);
  });
  deleteTrace(x.id);
  const e_del = waitForTraceDeleted(id);
  block(matchAddTrace(id), function () {
    verifyTraceDoesNotExist(id);
  });
});

bthread("TunnelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTunnel(x.id);
  const e_add = waitForTunnelAdded(id);
  block(matchDeleteTunnel(id), function () {
    verifyTunnelExists(id);
  });
  updateTunnel(x.id);
  updateTunnel(x.id);
  const e_upd = waitForTunnelUpdated(id);
  block(matchDeleteTunnel(id), function () {
    verifyTunnelUpdated(id);
  });
  deleteTunnel(x.id);
  const e_del = waitForTunnelDeleted(id);
  block(matchAddTunnel(id), function () {
    verifyTunnelDoesNotExist(id);
  });
});

bthread("TunnelgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTunnelgroup(x.id);
  const e_add = waitForTunnelgroupAdded(id);
  block(matchDeleteTunnelgroup(id), function () {
    verifyTunnelgroupExists(id);
  });
  updateTunnelgroup(x.id);
  updateTunnelgroup(x.id);
  const e_upd = waitForTunnelgroupUpdated(id);
  block(matchDeleteTunnelgroup(id), function () {
    verifyTunnelgroupUpdated(id);
  });
  deleteTunnelgroup(x.id);
  const e_del = waitForTunnelgroupDeleted(id);
  block(matchAddTunnelgroup(id), function () {
    verifyTunnelgroupDoesNotExist(id);
  });
});

bthread("TunnelterminationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTunneltermination(x.id);
  const e_add = waitForTunnelterminationAdded(id);
  block(matchDeleteTunneltermination(id), function () {
    verifyTunnelterminationExists(id);
  });
  updateTunneltermination(x.id);
  updateTunneltermination(x.id);
  const e_upd = waitForTunnelterminationUpdated(id);
  block(matchDeleteTunneltermination(id), function () {
    verifyTunnelterminationUpdated(id);
  });
  deleteTunneltermination(x.id);
  const e_del = waitForTunnelterminationDeleted(id);
  block(matchAddTunneltermination(id), function () {
    verifyTunnelterminationDoesNotExist(id);
  });
});

bthread("UserLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUser(x.id);
  const e_add = waitForUserAdded(id);
  block(matchDeleteUser(id), function () {
    verifyUserExists(id);
  });
  updateUser(x.id);
  updateUser(x.id);
  const e_upd = waitForUserUpdated(id);
  block(matchDeleteUser(id), function () {
    verifyUserUpdated(id);
  });
  deleteUser(x.id);
  const e_del = waitForUserDeleted(id);
  block(matchAddUser(id), function () {
    verifyUserDoesNotExist(id);
  });
});

bthread("VirtualchassiLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVirtualchassi(x.id);
  const e_add = waitForVirtualchassiAdded(id);
  block(matchDeleteVirtualchassi(id), function () {
    verifyVirtualchassiExists(id);
  });
  updateVirtualchassi(x.id);
  updateVirtualchassi(x.id);
  const e_upd = waitForVirtualchassiUpdated(id);
  block(matchDeleteVirtualchassi(id), function () {
    verifyVirtualchassiUpdated(id);
  });
  deleteVirtualchassi(x.id);
  const e_del = waitForVirtualchassiDeleted(id);
  block(matchAddVirtualchassi(id), function () {
    verifyVirtualchassiDoesNotExist(id);
  });
});

bthread("VirtualcircuitLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVirtualcircuit(x.id);
  const e_add = waitForVirtualcircuitAdded(id);
  block(matchDeleteVirtualcircuit(id), function () {
    verifyVirtualcircuitExists(id);
  });
  updateVirtualcircuit(x.id);
  updateVirtualcircuit(x.id);
  const e_upd = waitForVirtualcircuitUpdated(id);
  block(matchDeleteVirtualcircuit(id), function () {
    verifyVirtualcircuitUpdated(id);
  });
  deleteVirtualcircuit(x.id);
  const e_del = waitForVirtualcircuitDeleted(id);
  block(matchAddVirtualcircuit(id), function () {
    verifyVirtualcircuitDoesNotExist(id);
  });
});

bthread("VirtualcircuitterminationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVirtualcircuittermination(x.id);
  const e_add = waitForVirtualcircuitterminationAdded(id);
  block(matchDeleteVirtualcircuittermination(id), function () {
    verifyVirtualcircuitterminationExists(id);
  });
  updateVirtualcircuittermination(x.id);
  updateVirtualcircuittermination(x.id);
  const e_upd = waitForVirtualcircuitterminationUpdated(id);
  block(matchDeleteVirtualcircuittermination(id), function () {
    verifyVirtualcircuitterminationUpdated(id);
  });
  deleteVirtualcircuittermination(x.id);
  const e_del = waitForVirtualcircuitterminationDeleted(id);
  block(matchAddVirtualcircuittermination(id), function () {
    verifyVirtualcircuitterminationDoesNotExist(id);
  });
});

bthread("VirtualcircuittypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVirtualcircuittype(x.id);
  const e_add = waitForVirtualcircuittypeAdded(id);
  block(matchDeleteVirtualcircuittype(id), function () {
    verifyVirtualcircuittypeExists(id);
  });
  updateVirtualcircuittype(x.id);
  updateVirtualcircuittype(x.id);
  const e_upd = waitForVirtualcircuittypeUpdated(id);
  block(matchDeleteVirtualcircuittype(id), function () {
    verifyVirtualcircuittypeUpdated(id);
  });
  deleteVirtualcircuittype(x.id);
  const e_del = waitForVirtualcircuittypeDeleted(id);
  block(matchAddVirtualcircuittype(id), function () {
    verifyVirtualcircuittypeDoesNotExist(id);
  });
});

bthread("VirtualdevicecontextLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVirtualdevicecontext(x.id);
  const e_add = waitForVirtualdevicecontextAdded(id);
  block(matchDeleteVirtualdevicecontext(id), function () {
    verifyVirtualdevicecontextExists(id);
  });
  updateVirtualdevicecontext(x.id);
  updateVirtualdevicecontext(x.id);
  const e_upd = waitForVirtualdevicecontextUpdated(id);
  block(matchDeleteVirtualdevicecontext(id), function () {
    verifyVirtualdevicecontextUpdated(id);
  });
  deleteVirtualdevicecontext(x.id);
  const e_del = waitForVirtualdevicecontextDeleted(id);
  block(matchAddVirtualdevicecontext(id), function () {
    verifyVirtualdevicecontextDoesNotExist(id);
  });
});

bthread("VirtualdiskLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVirtualdisk(x.id);
  const e_add = waitForVirtualdiskAdded(id);
  block(matchDeleteVirtualdisk(id), function () {
    verifyVirtualdiskExists(id);
  });
  updateVirtualdisk(x.id);
  updateVirtualdisk(x.id);
  const e_upd = waitForVirtualdiskUpdated(id);
  block(matchDeleteVirtualdisk(id), function () {
    verifyVirtualdiskUpdated(id);
  });
  deleteVirtualdisk(x.id);
  const e_del = waitForVirtualdiskDeleted(id);
  block(matchAddVirtualdisk(id), function () {
    verifyVirtualdiskDoesNotExist(id);
  });
});

bthread("VirtualizationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVirtualization(x.id);
  const e_add = waitForVirtualizationAdded(id);
  block(matchDeleteVirtualization(id), function () {
    verifyVirtualizationExists(id);
  });
  updateVirtualization(x.id);
  updateVirtualization(x.id);
  const e_upd = waitForVirtualizationUpdated(id);
  block(matchDeleteVirtualization(id), function () {
    verifyVirtualizationUpdated(id);
  });
  deleteVirtualization(x.id);
  const e_del = waitForVirtualizationDeleted(id);
  block(matchAddVirtualization(id), function () {
    verifyVirtualizationDoesNotExist(id);
  });
});

bthread("VirtualmachineLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVirtualmachine(x.id);
  const e_add = waitForVirtualmachineAdded(id);
  block(matchDeleteVirtualmachine(id), function () {
    verifyVirtualmachineExists(id);
  });
  updateVirtualmachine(x.id);
  updateVirtualmachine(x.id);
  const e_upd = waitForVirtualmachineUpdated(id);
  block(matchDeleteVirtualmachine(id), function () {
    verifyVirtualmachineUpdated(id);
  });
  deleteVirtualmachine(x.id);
  const e_del = waitForVirtualmachineDeleted(id);
  block(matchAddVirtualmachine(id), function () {
    verifyVirtualmachineDoesNotExist(id);
  });
});

bthread("VlanLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVlan(x.id);
  const e_add = waitForVlanAdded(id);
  block(matchDeleteVlan(id), function () {
    verifyVlanExists(id);
  });
  updateVlan(x.id);
  updateVlan(x.id);
  const e_upd = waitForVlanUpdated(id);
  block(matchDeleteVlan(id), function () {
    verifyVlanUpdated(id);
  });
  deleteVlan(x.id);
  const e_del = waitForVlanDeleted(id);
  block(matchAddVlan(id), function () {
    verifyVlanDoesNotExist(id);
  });
});

bthread("VlangroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVlangroup(x.id);
  const e_add = waitForVlangroupAdded(id);
  block(matchDeleteVlangroup(id), function () {
    verifyVlangroupExists(id);
  });
  updateVlangroup(x.id);
  updateVlangroup(x.id);
  const e_upd = waitForVlangroupUpdated(id);
  block(matchDeleteVlangroup(id), function () {
    verifyVlangroupUpdated(id);
  });
  deleteVlangroup(x.id);
  const e_del = waitForVlangroupDeleted(id);
  block(matchAddVlangroup(id), function () {
    verifyVlangroupDoesNotExist(id);
  });
});

bthread("VlantranslationpolicyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVlantranslationpolicy(x.id);
  const e_add = waitForVlantranslationpolicyAdded(id);
  block(matchDeleteVlantranslationpolicy(id), function () {
    verifyVlantranslationpolicyExists(id);
  });
  updateVlantranslationpolicy(x.id);
  updateVlantranslationpolicy(x.id);
  const e_upd = waitForVlantranslationpolicyUpdated(id);
  block(matchDeleteVlantranslationpolicy(id), function () {
    verifyVlantranslationpolicyUpdated(id);
  });
  deleteVlantranslationpolicy(x.id);
  const e_del = waitForVlantranslationpolicyDeleted(id);
  block(matchAddVlantranslationpolicy(id), function () {
    verifyVlantranslationpolicyDoesNotExist(id);
  });
});

bthread("VlantranslationruleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVlantranslationrule(x.id);
  const e_add = waitForVlantranslationruleAdded(id);
  block(matchDeleteVlantranslationrule(id), function () {
    verifyVlantranslationruleExists(id);
  });
  updateVlantranslationrule(x.id);
  updateVlantranslationrule(x.id);
  const e_upd = waitForVlantranslationruleUpdated(id);
  block(matchDeleteVlantranslationrule(id), function () {
    verifyVlantranslationruleUpdated(id);
  });
  deleteVlantranslationrule(x.id);
  const e_del = waitForVlantranslationruleDeleted(id);
  block(matchAddVlantranslationrule(id), function () {
    verifyVlantranslationruleDoesNotExist(id);
  });
});

bthread("VpnLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVpn(x.id);
  const e_add = waitForVpnAdded(id);
  block(matchDeleteVpn(id), function () {
    verifyVpnExists(id);
  });
  updateVpn(x.id);
  updateVpn(x.id);
  const e_upd = waitForVpnUpdated(id);
  block(matchDeleteVpn(id), function () {
    verifyVpnUpdated(id);
  });
  deleteVpn(x.id);
  const e_del = waitForVpnDeleted(id);
  block(matchAddVpn(id), function () {
    verifyVpnDoesNotExist(id);
  });
});

bthread("VrfLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVrf(x.id);
  const e_add = waitForVrfAdded(id);
  block(matchDeleteVrf(id), function () {
    verifyVrfExists(id);
  });
  updateVrf(x.id);
  updateVrf(x.id);
  const e_upd = waitForVrfUpdated(id);
  block(matchDeleteVrf(id), function () {
    verifyVrfUpdated(id);
  });
  deleteVrf(x.id);
  const e_del = waitForVrfDeleted(id);
  block(matchAddVrf(id), function () {
    verifyVrfDoesNotExist(id);
  });
});

bthread("WebhookLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWebhook(x.id);
  const e_add = waitForWebhookAdded(id);
  block(matchDeleteWebhook(id), function () {
    verifyWebhookExists(id);
  });
  updateWebhook(x.id);
  updateWebhook(x.id);
  const e_upd = waitForWebhookUpdated(id);
  block(matchDeleteWebhook(id), function () {
    verifyWebhookUpdated(id);
  });
  deleteWebhook(x.id);
  const e_del = waitForWebhookDeleted(id);
  block(matchAddWebhook(id), function () {
    verifyWebhookDoesNotExist(id);
  });
});

bthread("WirelesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWireles(x.id);
  const e_add = waitForWirelesAdded(id);
  block(matchDeleteWireles(id), function () {
    verifyWirelesExists(id);
  });
  updateWireles(x.id);
  updateWireles(x.id);
  const e_upd = waitForWirelesUpdated(id);
  block(matchDeleteWireles(id), function () {
    verifyWirelesUpdated(id);
  });
  deleteWireles(x.id);
  const e_del = waitForWirelesDeleted(id);
  block(matchAddWireles(id), function () {
    verifyWirelesDoesNotExist(id);
  });
});

bthread("WirelesslanLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWirelesslan(x.id);
  const e_add = waitForWirelesslanAdded(id);
  block(matchDeleteWirelesslan(id), function () {
    verifyWirelesslanExists(id);
  });
  updateWirelesslan(x.id);
  updateWirelesslan(x.id);
  const e_upd = waitForWirelesslanUpdated(id);
  block(matchDeleteWirelesslan(id), function () {
    verifyWirelesslanUpdated(id);
  });
  deleteWirelesslan(x.id);
  const e_del = waitForWirelesslanDeleted(id);
  block(matchAddWirelesslan(id), function () {
    verifyWirelesslanDoesNotExist(id);
  });
});

bthread("WirelesslangroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWirelesslangroup(x.id);
  const e_add = waitForWirelesslangroupAdded(id);
  block(matchDeleteWirelesslangroup(id), function () {
    verifyWirelesslangroupExists(id);
  });
  updateWirelesslangroup(x.id);
  updateWirelesslangroup(x.id);
  const e_upd = waitForWirelesslangroupUpdated(id);
  block(matchDeleteWirelesslangroup(id), function () {
    verifyWirelesslangroupUpdated(id);
  });
  deleteWirelesslangroup(x.id);
  const e_del = waitForWirelesslangroupDeleted(id);
  block(matchAddWirelesslangroup(id), function () {
    verifyWirelesslangroupDoesNotExist(id);
  });
});

bthread("WirelesslinkLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWirelesslink(x.id);
  const e_add = waitForWirelesslinkAdded(id);
  block(matchDeleteWirelesslink(id), function () {
    verifyWirelesslinkExists(id);
  });
  updateWirelesslink(x.id);
  updateWirelesslink(x.id);
  const e_upd = waitForWirelesslinkUpdated(id);
  block(matchDeleteWirelesslink(id), function () {
    verifyWirelesslinkUpdated(id);
  });
  deleteWirelesslink(x.id);
  const e_del = waitForWirelesslinkDeleted(id);
  block(matchAddWirelesslink(id), function () {
    verifyWirelesslinkDoesNotExist(id);
  });
});

// ===== PASSIVE ASSERTIONS =====

bthread("Aggregate create verification", function () {
  const e = waitForAnyAggregateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAggregate(k, ANY), function () {
    verifyAggregateExists(k);
  });
});

bthread("Aggregate update verification", function () {
  const e = waitForAnyAggregateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAggregate(k, ANY), function () {
    verifyAggregateUpdated(k);
  });
});

bthread("Aggregate delete verification", function () {
  const e = waitForAnyAggregateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAggregate(k, ANY), function () {
    verifyAggregateDoesNotExist(k);
  });
});

bthread("Api create verification", function () {
  const e = waitForAnyApiAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApi(k, ANY), function () {
    verifyApiExists(k);
  });
});

bthread("Api update verification", function () {
  const e = waitForAnyApiUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApi(k, ANY), function () {
    verifyApiUpdated(k);
  });
});

bthread("Api delete verification", function () {
  const e = waitForAnyApiDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApi(k, ANY), function () {
    verifyApiDoesNotExist(k);
  });
});

bthread("Asn create verification", function () {
  const e = waitForAnyAsnAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAsn(k, ANY), function () {
    verifyAsnExists(k);
  });
});

bthread("Asn update verification", function () {
  const e = waitForAnyAsnUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAsn(k, ANY), function () {
    verifyAsnUpdated(k);
  });
});

bthread("Asn delete verification", function () {
  const e = waitForAnyAsnDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAsn(k, ANY), function () {
    verifyAsnDoesNotExist(k);
  });
});

bthread("Asnrange create verification", function () {
  const e = waitForAnyAsnrangeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAsnrange(k, ANY), function () {
    verifyAsnrangeExists(k);
  });
});

bthread("Asnrange update verification", function () {
  const e = waitForAnyAsnrangeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAsnrange(k, ANY), function () {
    verifyAsnrangeUpdated(k);
  });
});

bthread("Asnrange delete verification", function () {
  const e = waitForAnyAsnrangeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAsnrange(k, ANY), function () {
    verifyAsnrangeDoesNotExist(k);
  });
});

bthread("Availableasn create verification", function () {
  const e = waitForAnyAvailableasnAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailableasn(k, ANY), function () {
    verifyAvailableasnExists(k);
  });
});

bthread("Availableasn update verification", function () {
  const e = waitForAnyAvailableasnUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailableasn(k, ANY), function () {
    verifyAvailableasnUpdated(k);
  });
});

bthread("Availableasn delete verification", function () {
  const e = waitForAnyAvailableasnDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAvailableasn(k, ANY), function () {
    verifyAvailableasnDoesNotExist(k);
  });
});

bthread("Availableip create verification", function () {
  const e = waitForAnyAvailableipAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailableip(k, ANY), function () {
    verifyAvailableipExists(k);
  });
});

bthread("Availableip update verification", function () {
  const e = waitForAnyAvailableipUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailableip(k, ANY), function () {
    verifyAvailableipUpdated(k);
  });
});

bthread("Availableip delete verification", function () {
  const e = waitForAnyAvailableipDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAvailableip(k, ANY), function () {
    verifyAvailableipDoesNotExist(k);
  });
});

bthread("Availableprefixe create verification", function () {
  const e = waitForAnyAvailableprefixeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailableprefixe(k, ANY), function () {
    verifyAvailableprefixeExists(k);
  });
});

bthread("Availableprefixe update verification", function () {
  const e = waitForAnyAvailableprefixeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailableprefixe(k, ANY), function () {
    verifyAvailableprefixeUpdated(k);
  });
});

bthread("Availableprefixe delete verification", function () {
  const e = waitForAnyAvailableprefixeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAvailableprefixe(k, ANY), function () {
    verifyAvailableprefixeDoesNotExist(k);
  });
});

bthread("Availablevlan create verification", function () {
  const e = waitForAnyAvailablevlanAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailablevlan(k, ANY), function () {
    verifyAvailablevlanExists(k);
  });
});

bthread("Availablevlan update verification", function () {
  const e = waitForAnyAvailablevlanUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailablevlan(k, ANY), function () {
    verifyAvailablevlanUpdated(k);
  });
});

bthread("Availablevlan delete verification", function () {
  const e = waitForAnyAvailablevlanDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAvailablevlan(k, ANY), function () {
    verifyAvailablevlanDoesNotExist(k);
  });
});

bthread("Backgroundqueue create verification", function () {
  const e = waitForAnyBackgroundqueueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBackgroundqueue(k, ANY), function () {
    verifyBackgroundqueueExists(k);
  });
});

bthread("Backgroundqueue update verification", function () {
  const e = waitForAnyBackgroundqueueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBackgroundqueue(k, ANY), function () {
    verifyBackgroundqueueUpdated(k);
  });
});

bthread("Backgroundqueue delete verification", function () {
  const e = waitForAnyBackgroundqueueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBackgroundqueue(k, ANY), function () {
    verifyBackgroundqueueDoesNotExist(k);
  });
});

bthread("Backgroundtask create verification", function () {
  const e = waitForAnyBackgroundtaskAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBackgroundtask(k, ANY), function () {
    verifyBackgroundtaskExists(k);
  });
});

bthread("Backgroundtask update verification", function () {
  const e = waitForAnyBackgroundtaskUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBackgroundtask(k, ANY), function () {
    verifyBackgroundtaskUpdated(k);
  });
});

bthread("Backgroundtask delete verification", function () {
  const e = waitForAnyBackgroundtaskDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBackgroundtask(k, ANY), function () {
    verifyBackgroundtaskDoesNotExist(k);
  });
});

bthread("Backgroundworker create verification", function () {
  const e = waitForAnyBackgroundworkerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBackgroundworker(k, ANY), function () {
    verifyBackgroundworkerExists(k);
  });
});

bthread("Backgroundworker update verification", function () {
  const e = waitForAnyBackgroundworkerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBackgroundworker(k, ANY), function () {
    verifyBackgroundworkerUpdated(k);
  });
});

bthread("Backgroundworker delete verification", function () {
  const e = waitForAnyBackgroundworkerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBackgroundworker(k, ANY), function () {
    verifyBackgroundworkerDoesNotExist(k);
  });
});

bthread("Bookmark create verification", function () {
  const e = waitForAnyBookmarkAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBookmark(k, ANY), function () {
    verifyBookmarkExists(k);
  });
});

bthread("Bookmark update verification", function () {
  const e = waitForAnyBookmarkUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBookmark(k, ANY), function () {
    verifyBookmarkUpdated(k);
  });
});

bthread("Bookmark delete verification", function () {
  const e = waitForAnyBookmarkDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBookmark(k, ANY), function () {
    verifyBookmarkDoesNotExist(k);
  });
});

bthread("Cable create verification", function () {
  const e = waitForAnyCableAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCable(k, ANY), function () {
    verifyCableExists(k);
  });
});

bthread("Cable update verification", function () {
  const e = waitForAnyCableUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCable(k, ANY), function () {
    verifyCableUpdated(k);
  });
});

bthread("Cable delete verification", function () {
  const e = waitForAnyCableDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCable(k, ANY), function () {
    verifyCableDoesNotExist(k);
  });
});

bthread("Cabletermination create verification", function () {
  const e = waitForAnyCableterminationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCabletermination(k, ANY), function () {
    verifyCableterminationExists(k);
  });
});

bthread("Cabletermination update verification", function () {
  const e = waitForAnyCableterminationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCabletermination(k, ANY), function () {
    verifyCableterminationUpdated(k);
  });
});

bthread("Cabletermination delete verification", function () {
  const e = waitForAnyCableterminationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCabletermination(k, ANY), function () {
    verifyCableterminationDoesNotExist(k);
  });
});

bthread("Choice create verification", function () {
  const e = waitForAnyChoiceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChoice(k, ANY), function () {
    verifyChoiceExists(k);
  });
});

bthread("Choice update verification", function () {
  const e = waitForAnyChoiceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChoice(k, ANY), function () {
    verifyChoiceUpdated(k);
  });
});

bthread("Choice delete verification", function () {
  const e = waitForAnyChoiceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddChoice(k, ANY), function () {
    verifyChoiceDoesNotExist(k);
  });
});

bthread("Circuit create verification", function () {
  const e = waitForAnyCircuitAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCircuit(k, ANY), function () {
    verifyCircuitExists(k);
  });
});

bthread("Circuit update verification", function () {
  const e = waitForAnyCircuitUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCircuit(k, ANY), function () {
    verifyCircuitUpdated(k);
  });
});

bthread("Circuit delete verification", function () {
  const e = waitForAnyCircuitDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCircuit(k, ANY), function () {
    verifyCircuitDoesNotExist(k);
  });
});

bthread("Circuitgroup create verification", function () {
  const e = waitForAnyCircuitgroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCircuitgroup(k, ANY), function () {
    verifyCircuitgroupExists(k);
  });
});

bthread("Circuitgroup update verification", function () {
  const e = waitForAnyCircuitgroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCircuitgroup(k, ANY), function () {
    verifyCircuitgroupUpdated(k);
  });
});

bthread("Circuitgroup delete verification", function () {
  const e = waitForAnyCircuitgroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCircuitgroup(k, ANY), function () {
    verifyCircuitgroupDoesNotExist(k);
  });
});

bthread("Circuitgroupassignment create verification", function () {
  const e = waitForAnyCircuitgroupassignmentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCircuitgroupassignment(k, ANY), function () {
    verifyCircuitgroupassignmentExists(k);
  });
});

bthread("Circuitgroupassignment update verification", function () {
  const e = waitForAnyCircuitgroupassignmentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCircuitgroupassignment(k, ANY), function () {
    verifyCircuitgroupassignmentUpdated(k);
  });
});

bthread("Circuitgroupassignment delete verification", function () {
  const e = waitForAnyCircuitgroupassignmentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCircuitgroupassignment(k, ANY), function () {
    verifyCircuitgroupassignmentDoesNotExist(k);
  });
});

bthread("Circuittermination create verification", function () {
  const e = waitForAnyCircuitterminationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCircuittermination(k, ANY), function () {
    verifyCircuitterminationExists(k);
  });
});

bthread("Circuittermination update verification", function () {
  const e = waitForAnyCircuitterminationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCircuittermination(k, ANY), function () {
    verifyCircuitterminationUpdated(k);
  });
});

bthread("Circuittermination delete verification", function () {
  const e = waitForAnyCircuitterminationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCircuittermination(k, ANY), function () {
    verifyCircuitterminationDoesNotExist(k);
  });
});

bthread("Circuittype create verification", function () {
  const e = waitForAnyCircuittypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCircuittype(k, ANY), function () {
    verifyCircuittypeExists(k);
  });
});

bthread("Circuittype update verification", function () {
  const e = waitForAnyCircuittypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCircuittype(k, ANY), function () {
    verifyCircuittypeUpdated(k);
  });
});

bthread("Circuittype delete verification", function () {
  const e = waitForAnyCircuittypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCircuittype(k, ANY), function () {
    verifyCircuittypeDoesNotExist(k);
  });
});

bthread("Cluster create verification", function () {
  const e = waitForAnyClusterAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCluster(k, ANY), function () {
    verifyClusterExists(k);
  });
});

bthread("Cluster update verification", function () {
  const e = waitForAnyClusterUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCluster(k, ANY), function () {
    verifyClusterUpdated(k);
  });
});

bthread("Cluster delete verification", function () {
  const e = waitForAnyClusterDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCluster(k, ANY), function () {
    verifyClusterDoesNotExist(k);
  });
});

bthread("Clustergroup create verification", function () {
  const e = waitForAnyClustergroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClustergroup(k, ANY), function () {
    verifyClustergroupExists(k);
  });
});

bthread("Clustergroup update verification", function () {
  const e = waitForAnyClustergroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClustergroup(k, ANY), function () {
    verifyClustergroupUpdated(k);
  });
});

bthread("Clustergroup delete verification", function () {
  const e = waitForAnyClustergroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClustergroup(k, ANY), function () {
    verifyClustergroupDoesNotExist(k);
  });
});

bthread("Clustertype create verification", function () {
  const e = waitForAnyClustertypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClustertype(k, ANY), function () {
    verifyClustertypeExists(k);
  });
});

bthread("Clustertype update verification", function () {
  const e = waitForAnyClustertypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClustertype(k, ANY), function () {
    verifyClustertypeUpdated(k);
  });
});

bthread("Clustertype delete verification", function () {
  const e = waitForAnyClustertypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClustertype(k, ANY), function () {
    verifyClustertypeDoesNotExist(k);
  });
});

bthread("Config create verification", function () {
  const e = waitForAnyConfigAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfig(k, ANY), function () {
    verifyConfigExists(k);
  });
});

bthread("Config update verification", function () {
  const e = waitForAnyConfigUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfig(k, ANY), function () {
    verifyConfigUpdated(k);
  });
});

bthread("Config delete verification", function () {
  const e = waitForAnyConfigDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConfig(k, ANY), function () {
    verifyConfigDoesNotExist(k);
  });
});

bthread("Configcontext create verification", function () {
  const e = waitForAnyConfigcontextAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfigcontext(k, ANY), function () {
    verifyConfigcontextExists(k);
  });
});

bthread("Configcontext update verification", function () {
  const e = waitForAnyConfigcontextUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfigcontext(k, ANY), function () {
    verifyConfigcontextUpdated(k);
  });
});

bthread("Configcontext delete verification", function () {
  const e = waitForAnyConfigcontextDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConfigcontext(k, ANY), function () {
    verifyConfigcontextDoesNotExist(k);
  });
});

bthread("Configcontextprofile create verification", function () {
  const e = waitForAnyConfigcontextprofileAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfigcontextprofile(k, ANY), function () {
    verifyConfigcontextprofileExists(k);
  });
});

bthread("Configcontextprofile update verification", function () {
  const e = waitForAnyConfigcontextprofileUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfigcontextprofile(k, ANY), function () {
    verifyConfigcontextprofileUpdated(k);
  });
});

bthread("Configcontextprofile delete verification", function () {
  const e = waitForAnyConfigcontextprofileDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConfigcontextprofile(k, ANY), function () {
    verifyConfigcontextprofileDoesNotExist(k);
  });
});

bthread("Configtemplate create verification", function () {
  const e = waitForAnyConfigtemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfigtemplate(k, ANY), function () {
    verifyConfigtemplateExists(k);
  });
});

bthread("Configtemplate update verification", function () {
  const e = waitForAnyConfigtemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfigtemplate(k, ANY), function () {
    verifyConfigtemplateUpdated(k);
  });
});

bthread("Configtemplate delete verification", function () {
  const e = waitForAnyConfigtemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConfigtemplate(k, ANY), function () {
    verifyConfigtemplateDoesNotExist(k);
  });
});

bthread("Connecteddevice create verification", function () {
  const e = waitForAnyConnecteddeviceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConnecteddevice(k, ANY), function () {
    verifyConnecteddeviceExists(k);
  });
});

bthread("Connecteddevice update verification", function () {
  const e = waitForAnyConnecteddeviceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConnecteddevice(k, ANY), function () {
    verifyConnecteddeviceUpdated(k);
  });
});

bthread("Connecteddevice delete verification", function () {
  const e = waitForAnyConnecteddeviceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConnecteddevice(k, ANY), function () {
    verifyConnecteddeviceDoesNotExist(k);
  });
});

bthread("Consoleport create verification", function () {
  const e = waitForAnyConsoleportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConsoleport(k, ANY), function () {
    verifyConsoleportExists(k);
  });
});

bthread("Consoleport update verification", function () {
  const e = waitForAnyConsoleportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConsoleport(k, ANY), function () {
    verifyConsoleportUpdated(k);
  });
});

bthread("Consoleport delete verification", function () {
  const e = waitForAnyConsoleportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConsoleport(k, ANY), function () {
    verifyConsoleportDoesNotExist(k);
  });
});

bthread("Consoleporttemplate create verification", function () {
  const e = waitForAnyConsoleporttemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConsoleporttemplate(k, ANY), function () {
    verifyConsoleporttemplateExists(k);
  });
});

bthread("Consoleporttemplate update verification", function () {
  const e = waitForAnyConsoleporttemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConsoleporttemplate(k, ANY), function () {
    verifyConsoleporttemplateUpdated(k);
  });
});

bthread("Consoleporttemplate delete verification", function () {
  const e = waitForAnyConsoleporttemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConsoleporttemplate(k, ANY), function () {
    verifyConsoleporttemplateDoesNotExist(k);
  });
});

bthread("Consoleserverport create verification", function () {
  const e = waitForAnyConsoleserverportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConsoleserverport(k, ANY), function () {
    verifyConsoleserverportExists(k);
  });
});

bthread("Consoleserverport update verification", function () {
  const e = waitForAnyConsoleserverportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConsoleserverport(k, ANY), function () {
    verifyConsoleserverportUpdated(k);
  });
});

bthread("Consoleserverport delete verification", function () {
  const e = waitForAnyConsoleserverportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConsoleserverport(k, ANY), function () {
    verifyConsoleserverportDoesNotExist(k);
  });
});

bthread("Consoleserverporttemplate create verification", function () {
  const e = waitForAnyConsoleserverporttemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConsoleserverporttemplate(k, ANY), function () {
    verifyConsoleserverporttemplateExists(k);
  });
});

bthread("Consoleserverporttemplate update verification", function () {
  const e = waitForAnyConsoleserverporttemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConsoleserverporttemplate(k, ANY), function () {
    verifyConsoleserverporttemplateUpdated(k);
  });
});

bthread("Consoleserverporttemplate delete verification", function () {
  const e = waitForAnyConsoleserverporttemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConsoleserverporttemplate(k, ANY), function () {
    verifyConsoleserverporttemplateDoesNotExist(k);
  });
});

bthread("Contact create verification", function () {
  const e = waitForAnyContactAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContact(k, ANY), function () {
    verifyContactExists(k);
  });
});

bthread("Contact update verification", function () {
  const e = waitForAnyContactUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContact(k, ANY), function () {
    verifyContactUpdated(k);
  });
});

bthread("Contact delete verification", function () {
  const e = waitForAnyContactDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddContact(k, ANY), function () {
    verifyContactDoesNotExist(k);
  });
});

bthread("Contactassignment create verification", function () {
  const e = waitForAnyContactassignmentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContactassignment(k, ANY), function () {
    verifyContactassignmentExists(k);
  });
});

bthread("Contactassignment update verification", function () {
  const e = waitForAnyContactassignmentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContactassignment(k, ANY), function () {
    verifyContactassignmentUpdated(k);
  });
});

bthread("Contactassignment delete verification", function () {
  const e = waitForAnyContactassignmentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddContactassignment(k, ANY), function () {
    verifyContactassignmentDoesNotExist(k);
  });
});

bthread("Contactgroup create verification", function () {
  const e = waitForAnyContactgroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContactgroup(k, ANY), function () {
    verifyContactgroupExists(k);
  });
});

bthread("Contactgroup update verification", function () {
  const e = waitForAnyContactgroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContactgroup(k, ANY), function () {
    verifyContactgroupUpdated(k);
  });
});

bthread("Contactgroup delete verification", function () {
  const e = waitForAnyContactgroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddContactgroup(k, ANY), function () {
    verifyContactgroupDoesNotExist(k);
  });
});

bthread("Contactrole create verification", function () {
  const e = waitForAnyContactroleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContactrole(k, ANY), function () {
    verifyContactroleExists(k);
  });
});

bthread("Contactrole update verification", function () {
  const e = waitForAnyContactroleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContactrole(k, ANY), function () {
    verifyContactroleUpdated(k);
  });
});

bthread("Contactrole delete verification", function () {
  const e = waitForAnyContactroleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddContactrole(k, ANY), function () {
    verifyContactroleDoesNotExist(k);
  });
});

bthread("Core create verification", function () {
  const e = waitForAnyCoreAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCore(k, ANY), function () {
    verifyCoreExists(k);
  });
});

bthread("Core update verification", function () {
  const e = waitForAnyCoreUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCore(k, ANY), function () {
    verifyCoreUpdated(k);
  });
});

bthread("Core delete verification", function () {
  const e = waitForAnyCoreDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCore(k, ANY), function () {
    verifyCoreDoesNotExist(k);
  });
});

bthread("Customfield create verification", function () {
  const e = waitForAnyCustomfieldAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomfield(k, ANY), function () {
    verifyCustomfieldExists(k);
  });
});

bthread("Customfield update verification", function () {
  const e = waitForAnyCustomfieldUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomfield(k, ANY), function () {
    verifyCustomfieldUpdated(k);
  });
});

bthread("Customfield delete verification", function () {
  const e = waitForAnyCustomfieldDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCustomfield(k, ANY), function () {
    verifyCustomfieldDoesNotExist(k);
  });
});

bthread("Customfieldchoiceset create verification", function () {
  const e = waitForAnyCustomfieldchoicesetAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomfieldchoiceset(k, ANY), function () {
    verifyCustomfieldchoicesetExists(k);
  });
});

bthread("Customfieldchoiceset update verification", function () {
  const e = waitForAnyCustomfieldchoicesetUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomfieldchoiceset(k, ANY), function () {
    verifyCustomfieldchoicesetUpdated(k);
  });
});

bthread("Customfieldchoiceset delete verification", function () {
  const e = waitForAnyCustomfieldchoicesetDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCustomfieldchoiceset(k, ANY), function () {
    verifyCustomfieldchoicesetDoesNotExist(k);
  });
});

bthread("Customlink create verification", function () {
  const e = waitForAnyCustomlinkAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomlink(k, ANY), function () {
    verifyCustomlinkExists(k);
  });
});

bthread("Customlink update verification", function () {
  const e = waitForAnyCustomlinkUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomlink(k, ANY), function () {
    verifyCustomlinkUpdated(k);
  });
});

bthread("Customlink delete verification", function () {
  const e = waitForAnyCustomlinkDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCustomlink(k, ANY), function () {
    verifyCustomlinkDoesNotExist(k);
  });
});

bthread("Dashboard create verification", function () {
  const e = waitForAnyDashboardAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDashboard(k, ANY), function () {
    verifyDashboardExists(k);
  });
});

bthread("Dashboard update verification", function () {
  const e = waitForAnyDashboardUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDashboard(k, ANY), function () {
    verifyDashboardUpdated(k);
  });
});

bthread("Dashboard delete verification", function () {
  const e = waitForAnyDashboardDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDashboard(k, ANY), function () {
    verifyDashboardDoesNotExist(k);
  });
});

bthread("Datafile create verification", function () {
  const e = waitForAnyDatafileAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDatafile(k, ANY), function () {
    verifyDatafileExists(k);
  });
});

bthread("Datafile update verification", function () {
  const e = waitForAnyDatafileUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDatafile(k, ANY), function () {
    verifyDatafileUpdated(k);
  });
});

bthread("Datafile delete verification", function () {
  const e = waitForAnyDatafileDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDatafile(k, ANY), function () {
    verifyDatafileDoesNotExist(k);
  });
});

bthread("Datasource create verification", function () {
  const e = waitForAnyDatasourceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDatasource(k, ANY), function () {
    verifyDatasourceExists(k);
  });
});

bthread("Datasource update verification", function () {
  const e = waitForAnyDatasourceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDatasource(k, ANY), function () {
    verifyDatasourceUpdated(k);
  });
});

bthread("Datasource delete verification", function () {
  const e = waitForAnyDatasourceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDatasource(k, ANY), function () {
    verifyDatasourceDoesNotExist(k);
  });
});

bthread("Dcim create verification", function () {
  const e = waitForAnyDcimAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDcim(k, ANY), function () {
    verifyDcimExists(k);
  });
});

bthread("Dcim update verification", function () {
  const e = waitForAnyDcimUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDcim(k, ANY), function () {
    verifyDcimUpdated(k);
  });
});

bthread("Dcim delete verification", function () {
  const e = waitForAnyDcimDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDcim(k, ANY), function () {
    verifyDcimDoesNotExist(k);
  });
});

bthread("Delete create verification", function () {
  const e = waitForAnyDeleteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDelete(k, ANY), function () {
    verifyDeleteExists(k);
  });
});

bthread("Delete update verification", function () {
  const e = waitForAnyDeleteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDelete(k, ANY), function () {
    verifyDeleteUpdated(k);
  });
});

bthread("Delete delete verification", function () {
  const e = waitForAnyDeleteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDelete(k, ANY), function () {
    verifyDeleteDoesNotExist(k);
  });
});

bthread("Device create verification", function () {
  const e = waitForAnyDeviceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevice(k, ANY), function () {
    verifyDeviceExists(k);
  });
});

bthread("Device update verification", function () {
  const e = waitForAnyDeviceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevice(k, ANY), function () {
    verifyDeviceUpdated(k);
  });
});

bthread("Device delete verification", function () {
  const e = waitForAnyDeviceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDevice(k, ANY), function () {
    verifyDeviceDoesNotExist(k);
  });
});

bthread("Devicebay create verification", function () {
  const e = waitForAnyDevicebayAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevicebay(k, ANY), function () {
    verifyDevicebayExists(k);
  });
});

bthread("Devicebay update verification", function () {
  const e = waitForAnyDevicebayUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevicebay(k, ANY), function () {
    verifyDevicebayUpdated(k);
  });
});

bthread("Devicebay delete verification", function () {
  const e = waitForAnyDevicebayDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDevicebay(k, ANY), function () {
    verifyDevicebayDoesNotExist(k);
  });
});

bthread("Devicebaytemplate create verification", function () {
  const e = waitForAnyDevicebaytemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevicebaytemplate(k, ANY), function () {
    verifyDevicebaytemplateExists(k);
  });
});

bthread("Devicebaytemplate update verification", function () {
  const e = waitForAnyDevicebaytemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevicebaytemplate(k, ANY), function () {
    verifyDevicebaytemplateUpdated(k);
  });
});

bthread("Devicebaytemplate delete verification", function () {
  const e = waitForAnyDevicebaytemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDevicebaytemplate(k, ANY), function () {
    verifyDevicebaytemplateDoesNotExist(k);
  });
});

bthread("Devicerole create verification", function () {
  const e = waitForAnyDeviceroleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevicerole(k, ANY), function () {
    verifyDeviceroleExists(k);
  });
});

bthread("Devicerole update verification", function () {
  const e = waitForAnyDeviceroleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevicerole(k, ANY), function () {
    verifyDeviceroleUpdated(k);
  });
});

bthread("Devicerole delete verification", function () {
  const e = waitForAnyDeviceroleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDevicerole(k, ANY), function () {
    verifyDeviceroleDoesNotExist(k);
  });
});

bthread("Devicetype create verification", function () {
  const e = waitForAnyDevicetypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevicetype(k, ANY), function () {
    verifyDevicetypeExists(k);
  });
});

bthread("Devicetype update verification", function () {
  const e = waitForAnyDevicetypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevicetype(k, ANY), function () {
    verifyDevicetypeUpdated(k);
  });
});

bthread("Devicetype delete verification", function () {
  const e = waitForAnyDevicetypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDevicetype(k, ANY), function () {
    verifyDevicetypeDoesNotExist(k);
  });
});

bthread("Elevation create verification", function () {
  const e = waitForAnyElevationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteElevation(k, ANY), function () {
    verifyElevationExists(k);
  });
});

bthread("Elevation update verification", function () {
  const e = waitForAnyElevationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteElevation(k, ANY), function () {
    verifyElevationUpdated(k);
  });
});

bthread("Elevation delete verification", function () {
  const e = waitForAnyElevationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddElevation(k, ANY), function () {
    verifyElevationDoesNotExist(k);
  });
});

bthread("Enqueue create verification", function () {
  const e = waitForAnyEnqueueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnqueue(k, ANY), function () {
    verifyEnqueueExists(k);
  });
});

bthread("Enqueue update verification", function () {
  const e = waitForAnyEnqueueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnqueue(k, ANY), function () {
    verifyEnqueueUpdated(k);
  });
});

bthread("Enqueue delete verification", function () {
  const e = waitForAnyEnqueueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEnqueue(k, ANY), function () {
    verifyEnqueueDoesNotExist(k);
  });
});

bthread("Eventrule create verification", function () {
  const e = waitForAnyEventruleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEventrule(k, ANY), function () {
    verifyEventruleExists(k);
  });
});

bthread("Eventrule update verification", function () {
  const e = waitForAnyEventruleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEventrule(k, ANY), function () {
    verifyEventruleUpdated(k);
  });
});

bthread("Eventrule delete verification", function () {
  const e = waitForAnyEventruleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEventrule(k, ANY), function () {
    verifyEventruleDoesNotExist(k);
  });
});

bthread("Exporttemplate create verification", function () {
  const e = waitForAnyExporttemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExporttemplate(k, ANY), function () {
    verifyExporttemplateExists(k);
  });
});

bthread("Exporttemplate update verification", function () {
  const e = waitForAnyExporttemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExporttemplate(k, ANY), function () {
    verifyExporttemplateUpdated(k);
  });
});

bthread("Exporttemplate delete verification", function () {
  const e = waitForAnyExporttemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExporttemplate(k, ANY), function () {
    verifyExporttemplateDoesNotExist(k);
  });
});

bthread("Extra create verification", function () {
  const e = waitForAnyExtraAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExtra(k, ANY), function () {
    verifyExtraExists(k);
  });
});

bthread("Extra update verification", function () {
  const e = waitForAnyExtraUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExtra(k, ANY), function () {
    verifyExtraUpdated(k);
  });
});

bthread("Extra delete verification", function () {
  const e = waitForAnyExtraDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExtra(k, ANY), function () {
    verifyExtraDoesNotExist(k);
  });
});

bthread("Fhrpgroup create verification", function () {
  const e = waitForAnyFhrpgroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFhrpgroup(k, ANY), function () {
    verifyFhrpgroupExists(k);
  });
});

bthread("Fhrpgroup update verification", function () {
  const e = waitForAnyFhrpgroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFhrpgroup(k, ANY), function () {
    verifyFhrpgroupUpdated(k);
  });
});

bthread("Fhrpgroup delete verification", function () {
  const e = waitForAnyFhrpgroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFhrpgroup(k, ANY), function () {
    verifyFhrpgroupDoesNotExist(k);
  });
});

bthread("Fhrpgroupassignment create verification", function () {
  const e = waitForAnyFhrpgroupassignmentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFhrpgroupassignment(k, ANY), function () {
    verifyFhrpgroupassignmentExists(k);
  });
});

bthread("Fhrpgroupassignment update verification", function () {
  const e = waitForAnyFhrpgroupassignmentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFhrpgroupassignment(k, ANY), function () {
    verifyFhrpgroupassignmentUpdated(k);
  });
});

bthread("Fhrpgroupassignment delete verification", function () {
  const e = waitForAnyFhrpgroupassignmentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFhrpgroupassignment(k, ANY), function () {
    verifyFhrpgroupassignmentDoesNotExist(k);
  });
});

bthread("Frontport create verification", function () {
  const e = waitForAnyFrontportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFrontport(k, ANY), function () {
    verifyFrontportExists(k);
  });
});

bthread("Frontport update verification", function () {
  const e = waitForAnyFrontportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFrontport(k, ANY), function () {
    verifyFrontportUpdated(k);
  });
});

bthread("Frontport delete verification", function () {
  const e = waitForAnyFrontportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFrontport(k, ANY), function () {
    verifyFrontportDoesNotExist(k);
  });
});

bthread("Frontporttemplate create verification", function () {
  const e = waitForAnyFrontporttemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFrontporttemplate(k, ANY), function () {
    verifyFrontporttemplateExists(k);
  });
});

bthread("Frontporttemplate update verification", function () {
  const e = waitForAnyFrontporttemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFrontporttemplate(k, ANY), function () {
    verifyFrontporttemplateUpdated(k);
  });
});

bthread("Frontporttemplate delete verification", function () {
  const e = waitForAnyFrontporttemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFrontporttemplate(k, ANY), function () {
    verifyFrontporttemplateDoesNotExist(k);
  });
});

bthread("Group create verification", function () {
  const e = waitForAnyGroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGroup(k, ANY), function () {
    verifyGroupExists(k);
  });
});

bthread("Group update verification", function () {
  const e = waitForAnyGroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGroup(k, ANY), function () {
    verifyGroupUpdated(k);
  });
});

bthread("Group delete verification", function () {
  const e = waitForAnyGroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGroup(k, ANY), function () {
    verifyGroupDoesNotExist(k);
  });
});

bthread("Ikepolicy create verification", function () {
  const e = waitForAnyIkepolicyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIkepolicy(k, ANY), function () {
    verifyIkepolicyExists(k);
  });
});

bthread("Ikepolicy update verification", function () {
  const e = waitForAnyIkepolicyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIkepolicy(k, ANY), function () {
    verifyIkepolicyUpdated(k);
  });
});

bthread("Ikepolicy delete verification", function () {
  const e = waitForAnyIkepolicyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIkepolicy(k, ANY), function () {
    verifyIkepolicyDoesNotExist(k);
  });
});

bthread("Ikeproposal create verification", function () {
  const e = waitForAnyIkeproposalAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIkeproposal(k, ANY), function () {
    verifyIkeproposalExists(k);
  });
});

bthread("Ikeproposal update verification", function () {
  const e = waitForAnyIkeproposalUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIkeproposal(k, ANY), function () {
    verifyIkeproposalUpdated(k);
  });
});

bthread("Ikeproposal delete verification", function () {
  const e = waitForAnyIkeproposalDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIkeproposal(k, ANY), function () {
    verifyIkeproposalDoesNotExist(k);
  });
});

bthread("Imageattachment create verification", function () {
  const e = waitForAnyImageattachmentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImageattachment(k, ANY), function () {
    verifyImageattachmentExists(k);
  });
});

bthread("Imageattachment update verification", function () {
  const e = waitForAnyImageattachmentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImageattachment(k, ANY), function () {
    verifyImageattachmentUpdated(k);
  });
});

bthread("Imageattachment delete verification", function () {
  const e = waitForAnyImageattachmentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddImageattachment(k, ANY), function () {
    verifyImageattachmentDoesNotExist(k);
  });
});

bthread("Interface create verification", function () {
  const e = waitForAnyInterfaceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInterface(k, ANY), function () {
    verifyInterfaceExists(k);
  });
});

bthread("Interface update verification", function () {
  const e = waitForAnyInterfaceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInterface(k, ANY), function () {
    verifyInterfaceUpdated(k);
  });
});

bthread("Interface delete verification", function () {
  const e = waitForAnyInterfaceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInterface(k, ANY), function () {
    verifyInterfaceDoesNotExist(k);
  });
});

bthread("Interfacetemplate create verification", function () {
  const e = waitForAnyInterfacetemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInterfacetemplate(k, ANY), function () {
    verifyInterfacetemplateExists(k);
  });
});

bthread("Interfacetemplate update verification", function () {
  const e = waitForAnyInterfacetemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInterfacetemplate(k, ANY), function () {
    verifyInterfacetemplateUpdated(k);
  });
});

bthread("Interfacetemplate delete verification", function () {
  const e = waitForAnyInterfacetemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInterfacetemplate(k, ANY), function () {
    verifyInterfacetemplateDoesNotExist(k);
  });
});

bthread("Inventoryitem create verification", function () {
  const e = waitForAnyInventoryitemAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInventoryitem(k, ANY), function () {
    verifyInventoryitemExists(k);
  });
});

bthread("Inventoryitem update verification", function () {
  const e = waitForAnyInventoryitemUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInventoryitem(k, ANY), function () {
    verifyInventoryitemUpdated(k);
  });
});

bthread("Inventoryitem delete verification", function () {
  const e = waitForAnyInventoryitemDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInventoryitem(k, ANY), function () {
    verifyInventoryitemDoesNotExist(k);
  });
});

bthread("Inventoryitemrole create verification", function () {
  const e = waitForAnyInventoryitemroleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInventoryitemrole(k, ANY), function () {
    verifyInventoryitemroleExists(k);
  });
});

bthread("Inventoryitemrole update verification", function () {
  const e = waitForAnyInventoryitemroleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInventoryitemrole(k, ANY), function () {
    verifyInventoryitemroleUpdated(k);
  });
});

bthread("Inventoryitemrole delete verification", function () {
  const e = waitForAnyInventoryitemroleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInventoryitemrole(k, ANY), function () {
    verifyInventoryitemroleDoesNotExist(k);
  });
});

bthread("Inventoryitemtemplate create verification", function () {
  const e = waitForAnyInventoryitemtemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInventoryitemtemplate(k, ANY), function () {
    verifyInventoryitemtemplateExists(k);
  });
});

bthread("Inventoryitemtemplate update verification", function () {
  const e = waitForAnyInventoryitemtemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInventoryitemtemplate(k, ANY), function () {
    verifyInventoryitemtemplateUpdated(k);
  });
});

bthread("Inventoryitemtemplate delete verification", function () {
  const e = waitForAnyInventoryitemtemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInventoryitemtemplate(k, ANY), function () {
    verifyInventoryitemtemplateDoesNotExist(k);
  });
});

bthread("Ipaddress create verification", function () {
  const e = waitForAnyIpaddressAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaddress(k, ANY), function () {
    verifyIpaddressExists(k);
  });
});

bthread("Ipaddress update verification", function () {
  const e = waitForAnyIpaddressUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaddress(k, ANY), function () {
    verifyIpaddressUpdated(k);
  });
});

bthread("Ipaddress delete verification", function () {
  const e = waitForAnyIpaddressDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIpaddress(k, ANY), function () {
    verifyIpaddressDoesNotExist(k);
  });
});

bthread("Ipam create verification", function () {
  const e = waitForAnyIpamAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpam(k, ANY), function () {
    verifyIpamExists(k);
  });
});

bthread("Ipam update verification", function () {
  const e = waitForAnyIpamUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpam(k, ANY), function () {
    verifyIpamUpdated(k);
  });
});

bthread("Ipam delete verification", function () {
  const e = waitForAnyIpamDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIpam(k, ANY), function () {
    verifyIpamDoesNotExist(k);
  });
});

bthread("Iprange create verification", function () {
  const e = waitForAnyIprangeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIprange(k, ANY), function () {
    verifyIprangeExists(k);
  });
});

bthread("Iprange update verification", function () {
  const e = waitForAnyIprangeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIprange(k, ANY), function () {
    verifyIprangeUpdated(k);
  });
});

bthread("Iprange delete verification", function () {
  const e = waitForAnyIprangeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIprange(k, ANY), function () {
    verifyIprangeDoesNotExist(k);
  });
});

bthread("Ipsecpolicy create verification", function () {
  const e = waitForAnyIpsecpolicyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpsecpolicy(k, ANY), function () {
    verifyIpsecpolicyExists(k);
  });
});

bthread("Ipsecpolicy update verification", function () {
  const e = waitForAnyIpsecpolicyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpsecpolicy(k, ANY), function () {
    verifyIpsecpolicyUpdated(k);
  });
});

bthread("Ipsecpolicy delete verification", function () {
  const e = waitForAnyIpsecpolicyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIpsecpolicy(k, ANY), function () {
    verifyIpsecpolicyDoesNotExist(k);
  });
});

bthread("Ipsecprofile create verification", function () {
  const e = waitForAnyIpsecprofileAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpsecprofile(k, ANY), function () {
    verifyIpsecprofileExists(k);
  });
});

bthread("Ipsecprofile update verification", function () {
  const e = waitForAnyIpsecprofileUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpsecprofile(k, ANY), function () {
    verifyIpsecprofileUpdated(k);
  });
});

bthread("Ipsecprofile delete verification", function () {
  const e = waitForAnyIpsecprofileDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIpsecprofile(k, ANY), function () {
    verifyIpsecprofileDoesNotExist(k);
  });
});

bthread("Ipsecproposal create verification", function () {
  const e = waitForAnyIpsecproposalAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpsecproposal(k, ANY), function () {
    verifyIpsecproposalExists(k);
  });
});

bthread("Ipsecproposal update verification", function () {
  const e = waitForAnyIpsecproposalUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpsecproposal(k, ANY), function () {
    verifyIpsecproposalUpdated(k);
  });
});

bthread("Ipsecproposal delete verification", function () {
  const e = waitForAnyIpsecproposalDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIpsecproposal(k, ANY), function () {
    verifyIpsecproposalDoesNotExist(k);
  });
});

bthread("Job create verification", function () {
  const e = waitForAnyJobAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteJob(k, ANY), function () {
    verifyJobExists(k);
  });
});

bthread("Job update verification", function () {
  const e = waitForAnyJobUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteJob(k, ANY), function () {
    verifyJobUpdated(k);
  });
});

bthread("Job delete verification", function () {
  const e = waitForAnyJobDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddJob(k, ANY), function () {
    verifyJobDoesNotExist(k);
  });
});

bthread("Journalentry create verification", function () {
  const e = waitForAnyJournalentryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteJournalentry(k, ANY), function () {
    verifyJournalentryExists(k);
  });
});

bthread("Journalentry update verification", function () {
  const e = waitForAnyJournalentryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteJournalentry(k, ANY), function () {
    verifyJournalentryUpdated(k);
  });
});

bthread("Journalentry delete verification", function () {
  const e = waitForAnyJournalentryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddJournalentry(k, ANY), function () {
    verifyJournalentryDoesNotExist(k);
  });
});

bthread("L2vpn create verification", function () {
  const e = waitForAnyL2vpnAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteL2vpn(k, ANY), function () {
    verifyL2vpnExists(k);
  });
});

bthread("L2vpn update verification", function () {
  const e = waitForAnyL2vpnUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteL2vpn(k, ANY), function () {
    verifyL2vpnUpdated(k);
  });
});

bthread("L2vpn delete verification", function () {
  const e = waitForAnyL2vpnDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddL2vpn(k, ANY), function () {
    verifyL2vpnDoesNotExist(k);
  });
});

bthread("L2vpntermination create verification", function () {
  const e = waitForAnyL2vpnterminationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteL2vpntermination(k, ANY), function () {
    verifyL2vpnterminationExists(k);
  });
});

bthread("L2vpntermination update verification", function () {
  const e = waitForAnyL2vpnterminationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteL2vpntermination(k, ANY), function () {
    verifyL2vpnterminationUpdated(k);
  });
});

bthread("L2vpntermination delete verification", function () {
  const e = waitForAnyL2vpnterminationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddL2vpntermination(k, ANY), function () {
    verifyL2vpnterminationDoesNotExist(k);
  });
});

bthread("Location create verification", function () {
  const e = waitForAnyLocationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLocation(k, ANY), function () {
    verifyLocationExists(k);
  });
});

bthread("Location update verification", function () {
  const e = waitForAnyLocationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLocation(k, ANY), function () {
    verifyLocationUpdated(k);
  });
});

bthread("Location delete verification", function () {
  const e = waitForAnyLocationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLocation(k, ANY), function () {
    verifyLocationDoesNotExist(k);
  });
});

bthread("Macaddress create verification", function () {
  const e = waitForAnyMacaddressAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMacaddress(k, ANY), function () {
    verifyMacaddressExists(k);
  });
});

bthread("Macaddress update verification", function () {
  const e = waitForAnyMacaddressUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMacaddress(k, ANY), function () {
    verifyMacaddressUpdated(k);
  });
});

bthread("Macaddress delete verification", function () {
  const e = waitForAnyMacaddressDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMacaddress(k, ANY), function () {
    verifyMacaddressDoesNotExist(k);
  });
});

bthread("Manufacturer create verification", function () {
  const e = waitForAnyManufacturerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteManufacturer(k, ANY), function () {
    verifyManufacturerExists(k);
  });
});

bthread("Manufacturer update verification", function () {
  const e = waitForAnyManufacturerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteManufacturer(k, ANY), function () {
    verifyManufacturerUpdated(k);
  });
});

bthread("Manufacturer delete verification", function () {
  const e = waitForAnyManufacturerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddManufacturer(k, ANY), function () {
    verifyManufacturerDoesNotExist(k);
  });
});

bthread("Module create verification", function () {
  const e = waitForAnyModuleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModule(k, ANY), function () {
    verifyModuleExists(k);
  });
});

bthread("Module update verification", function () {
  const e = waitForAnyModuleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModule(k, ANY), function () {
    verifyModuleUpdated(k);
  });
});

bthread("Module delete verification", function () {
  const e = waitForAnyModuleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddModule(k, ANY), function () {
    verifyModuleDoesNotExist(k);
  });
});

bthread("Modulebay create verification", function () {
  const e = waitForAnyModulebayAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModulebay(k, ANY), function () {
    verifyModulebayExists(k);
  });
});

bthread("Modulebay update verification", function () {
  const e = waitForAnyModulebayUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModulebay(k, ANY), function () {
    verifyModulebayUpdated(k);
  });
});

bthread("Modulebay delete verification", function () {
  const e = waitForAnyModulebayDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddModulebay(k, ANY), function () {
    verifyModulebayDoesNotExist(k);
  });
});

bthread("Modulebaytemplate create verification", function () {
  const e = waitForAnyModulebaytemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModulebaytemplate(k, ANY), function () {
    verifyModulebaytemplateExists(k);
  });
});

bthread("Modulebaytemplate update verification", function () {
  const e = waitForAnyModulebaytemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModulebaytemplate(k, ANY), function () {
    verifyModulebaytemplateUpdated(k);
  });
});

bthread("Modulebaytemplate delete verification", function () {
  const e = waitForAnyModulebaytemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddModulebaytemplate(k, ANY), function () {
    verifyModulebaytemplateDoesNotExist(k);
  });
});

bthread("Moduletype create verification", function () {
  const e = waitForAnyModuletypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModuletype(k, ANY), function () {
    verifyModuletypeExists(k);
  });
});

bthread("Moduletype update verification", function () {
  const e = waitForAnyModuletypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModuletype(k, ANY), function () {
    verifyModuletypeUpdated(k);
  });
});

bthread("Moduletype delete verification", function () {
  const e = waitForAnyModuletypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddModuletype(k, ANY), function () {
    verifyModuletypeDoesNotExist(k);
  });
});

bthread("Moduletypeprofile create verification", function () {
  const e = waitForAnyModuletypeprofileAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModuletypeprofile(k, ANY), function () {
    verifyModuletypeprofileExists(k);
  });
});

bthread("Moduletypeprofile update verification", function () {
  const e = waitForAnyModuletypeprofileUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModuletypeprofile(k, ANY), function () {
    verifyModuletypeprofileUpdated(k);
  });
});

bthread("Moduletypeprofile delete verification", function () {
  const e = waitForAnyModuletypeprofileDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddModuletypeprofile(k, ANY), function () {
    verifyModuletypeprofileDoesNotExist(k);
  });
});

bthread("Notification create verification", function () {
  const e = waitForAnyNotificationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotification(k, ANY), function () {
    verifyNotificationExists(k);
  });
});

bthread("Notification update verification", function () {
  const e = waitForAnyNotificationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotification(k, ANY), function () {
    verifyNotificationUpdated(k);
  });
});

bthread("Notification delete verification", function () {
  const e = waitForAnyNotificationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNotification(k, ANY), function () {
    verifyNotificationDoesNotExist(k);
  });
});

bthread("Notificationgroup create verification", function () {
  const e = waitForAnyNotificationgroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotificationgroup(k, ANY), function () {
    verifyNotificationgroupExists(k);
  });
});

bthread("Notificationgroup update verification", function () {
  const e = waitForAnyNotificationgroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotificationgroup(k, ANY), function () {
    verifyNotificationgroupUpdated(k);
  });
});

bthread("Notificationgroup delete verification", function () {
  const e = waitForAnyNotificationgroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNotificationgroup(k, ANY), function () {
    verifyNotificationgroupDoesNotExist(k);
  });
});

bthread("Objectchange create verification", function () {
  const e = waitForAnyObjectchangeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteObjectchange(k, ANY), function () {
    verifyObjectchangeExists(k);
  });
});

bthread("Objectchange update verification", function () {
  const e = waitForAnyObjectchangeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteObjectchange(k, ANY), function () {
    verifyObjectchangeUpdated(k);
  });
});

bthread("Objectchange delete verification", function () {
  const e = waitForAnyObjectchangeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddObjectchange(k, ANY), function () {
    verifyObjectchangeDoesNotExist(k);
  });
});

bthread("Objecttype create verification", function () {
  const e = waitForAnyObjecttypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteObjecttype(k, ANY), function () {
    verifyObjecttypeExists(k);
  });
});

bthread("Objecttype update verification", function () {
  const e = waitForAnyObjecttypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteObjecttype(k, ANY), function () {
    verifyObjecttypeUpdated(k);
  });
});

bthread("Objecttype delete verification", function () {
  const e = waitForAnyObjecttypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddObjecttype(k, ANY), function () {
    verifyObjecttypeDoesNotExist(k);
  });
});

bthread("Path create verification", function () {
  const e = waitForAnyPathAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePath(k, ANY), function () {
    verifyPathExists(k);
  });
});

bthread("Path update verification", function () {
  const e = waitForAnyPathUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePath(k, ANY), function () {
    verifyPathUpdated(k);
  });
});

bthread("Path delete verification", function () {
  const e = waitForAnyPathDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPath(k, ANY), function () {
    verifyPathDoesNotExist(k);
  });
});

bthread("Permission create verification", function () {
  const e = waitForAnyPermissionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePermission(k, ANY), function () {
    verifyPermissionExists(k);
  });
});

bthread("Permission update verification", function () {
  const e = waitForAnyPermissionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePermission(k, ANY), function () {
    verifyPermissionUpdated(k);
  });
});

bthread("Permission delete verification", function () {
  const e = waitForAnyPermissionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPermission(k, ANY), function () {
    verifyPermissionDoesNotExist(k);
  });
});

bthread("Platform create verification", function () {
  const e = waitForAnyPlatformAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePlatform(k, ANY), function () {
    verifyPlatformExists(k);
  });
});

bthread("Platform update verification", function () {
  const e = waitForAnyPlatformUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePlatform(k, ANY), function () {
    verifyPlatformUpdated(k);
  });
});

bthread("Platform delete verification", function () {
  const e = waitForAnyPlatformDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPlatform(k, ANY), function () {
    verifyPlatformDoesNotExist(k);
  });
});

bthread("Powerfeed create verification", function () {
  const e = waitForAnyPowerfeedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePowerfeed(k, ANY), function () {
    verifyPowerfeedExists(k);
  });
});

bthread("Powerfeed update verification", function () {
  const e = waitForAnyPowerfeedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePowerfeed(k, ANY), function () {
    verifyPowerfeedUpdated(k);
  });
});

bthread("Powerfeed delete verification", function () {
  const e = waitForAnyPowerfeedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPowerfeed(k, ANY), function () {
    verifyPowerfeedDoesNotExist(k);
  });
});

bthread("Poweroutlet create verification", function () {
  const e = waitForAnyPoweroutletAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePoweroutlet(k, ANY), function () {
    verifyPoweroutletExists(k);
  });
});

bthread("Poweroutlet update verification", function () {
  const e = waitForAnyPoweroutletUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePoweroutlet(k, ANY), function () {
    verifyPoweroutletUpdated(k);
  });
});

bthread("Poweroutlet delete verification", function () {
  const e = waitForAnyPoweroutletDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPoweroutlet(k, ANY), function () {
    verifyPoweroutletDoesNotExist(k);
  });
});

bthread("Poweroutlettemplate create verification", function () {
  const e = waitForAnyPoweroutlettemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePoweroutlettemplate(k, ANY), function () {
    verifyPoweroutlettemplateExists(k);
  });
});

bthread("Poweroutlettemplate update verification", function () {
  const e = waitForAnyPoweroutlettemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePoweroutlettemplate(k, ANY), function () {
    verifyPoweroutlettemplateUpdated(k);
  });
});

bthread("Poweroutlettemplate delete verification", function () {
  const e = waitForAnyPoweroutlettemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPoweroutlettemplate(k, ANY), function () {
    verifyPoweroutlettemplateDoesNotExist(k);
  });
});

bthread("Powerpanel create verification", function () {
  const e = waitForAnyPowerpanelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePowerpanel(k, ANY), function () {
    verifyPowerpanelExists(k);
  });
});

bthread("Powerpanel update verification", function () {
  const e = waitForAnyPowerpanelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePowerpanel(k, ANY), function () {
    verifyPowerpanelUpdated(k);
  });
});

bthread("Powerpanel delete verification", function () {
  const e = waitForAnyPowerpanelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPowerpanel(k, ANY), function () {
    verifyPowerpanelDoesNotExist(k);
  });
});

bthread("Powerport create verification", function () {
  const e = waitForAnyPowerportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePowerport(k, ANY), function () {
    verifyPowerportExists(k);
  });
});

bthread("Powerport update verification", function () {
  const e = waitForAnyPowerportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePowerport(k, ANY), function () {
    verifyPowerportUpdated(k);
  });
});

bthread("Powerport delete verification", function () {
  const e = waitForAnyPowerportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPowerport(k, ANY), function () {
    verifyPowerportDoesNotExist(k);
  });
});

bthread("Powerporttemplate create verification", function () {
  const e = waitForAnyPowerporttemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePowerporttemplate(k, ANY), function () {
    verifyPowerporttemplateExists(k);
  });
});

bthread("Powerporttemplate update verification", function () {
  const e = waitForAnyPowerporttemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePowerporttemplate(k, ANY), function () {
    verifyPowerporttemplateUpdated(k);
  });
});

bthread("Powerporttemplate delete verification", function () {
  const e = waitForAnyPowerporttemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPowerporttemplate(k, ANY), function () {
    verifyPowerporttemplateDoesNotExist(k);
  });
});

bthread("Prefixe create verification", function () {
  const e = waitForAnyPrefixeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePrefixe(k, ANY), function () {
    verifyPrefixeExists(k);
  });
});

bthread("Prefixe update verification", function () {
  const e = waitForAnyPrefixeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePrefixe(k, ANY), function () {
    verifyPrefixeUpdated(k);
  });
});

bthread("Prefixe delete verification", function () {
  const e = waitForAnyPrefixeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPrefixe(k, ANY), function () {
    verifyPrefixeDoesNotExist(k);
  });
});

bthread("Provider create verification", function () {
  const e = waitForAnyProviderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProvider(k, ANY), function () {
    verifyProviderExists(k);
  });
});

bthread("Provider update verification", function () {
  const e = waitForAnyProviderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProvider(k, ANY), function () {
    verifyProviderUpdated(k);
  });
});

bthread("Provider delete verification", function () {
  const e = waitForAnyProviderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProvider(k, ANY), function () {
    verifyProviderDoesNotExist(k);
  });
});

bthread("Provideraccount create verification", function () {
  const e = waitForAnyProvideraccountAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProvideraccount(k, ANY), function () {
    verifyProvideraccountExists(k);
  });
});

bthread("Provideraccount update verification", function () {
  const e = waitForAnyProvideraccountUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProvideraccount(k, ANY), function () {
    verifyProvideraccountUpdated(k);
  });
});

bthread("Provideraccount delete verification", function () {
  const e = waitForAnyProvideraccountDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProvideraccount(k, ANY), function () {
    verifyProvideraccountDoesNotExist(k);
  });
});

bthread("Providernetwork create verification", function () {
  const e = waitForAnyProvidernetworkAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProvidernetwork(k, ANY), function () {
    verifyProvidernetworkExists(k);
  });
});

bthread("Providernetwork update verification", function () {
  const e = waitForAnyProvidernetworkUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProvidernetwork(k, ANY), function () {
    verifyProvidernetworkUpdated(k);
  });
});

bthread("Providernetwork delete verification", function () {
  const e = waitForAnyProvidernetworkDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProvidernetwork(k, ANY), function () {
    verifyProvidernetworkDoesNotExist(k);
  });
});

bthread("Provision create verification", function () {
  const e = waitForAnyProvisionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProvision(k, ANY), function () {
    verifyProvisionExists(k);
  });
});

bthread("Provision update verification", function () {
  const e = waitForAnyProvisionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProvision(k, ANY), function () {
    verifyProvisionUpdated(k);
  });
});

bthread("Provision delete verification", function () {
  const e = waitForAnyProvisionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProvision(k, ANY), function () {
    verifyProvisionDoesNotExist(k);
  });
});

bthread("Rack create verification", function () {
  const e = waitForAnyRackAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRack(k, ANY), function () {
    verifyRackExists(k);
  });
});

bthread("Rack update verification", function () {
  const e = waitForAnyRackUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRack(k, ANY), function () {
    verifyRackUpdated(k);
  });
});

bthread("Rack delete verification", function () {
  const e = waitForAnyRackDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRack(k, ANY), function () {
    verifyRackDoesNotExist(k);
  });
});

bthread("Rackreservation create verification", function () {
  const e = waitForAnyRackreservationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRackreservation(k, ANY), function () {
    verifyRackreservationExists(k);
  });
});

bthread("Rackreservation update verification", function () {
  const e = waitForAnyRackreservationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRackreservation(k, ANY), function () {
    verifyRackreservationUpdated(k);
  });
});

bthread("Rackreservation delete verification", function () {
  const e = waitForAnyRackreservationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRackreservation(k, ANY), function () {
    verifyRackreservationDoesNotExist(k);
  });
});

bthread("Rackrole create verification", function () {
  const e = waitForAnyRackroleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRackrole(k, ANY), function () {
    verifyRackroleExists(k);
  });
});

bthread("Rackrole update verification", function () {
  const e = waitForAnyRackroleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRackrole(k, ANY), function () {
    verifyRackroleUpdated(k);
  });
});

bthread("Rackrole delete verification", function () {
  const e = waitForAnyRackroleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRackrole(k, ANY), function () {
    verifyRackroleDoesNotExist(k);
  });
});

bthread("Racktype create verification", function () {
  const e = waitForAnyRacktypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRacktype(k, ANY), function () {
    verifyRacktypeExists(k);
  });
});

bthread("Racktype update verification", function () {
  const e = waitForAnyRacktypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRacktype(k, ANY), function () {
    verifyRacktypeUpdated(k);
  });
});

bthread("Racktype delete verification", function () {
  const e = waitForAnyRacktypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRacktype(k, ANY), function () {
    verifyRacktypeDoesNotExist(k);
  });
});

bthread("Rearport create verification", function () {
  const e = waitForAnyRearportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRearport(k, ANY), function () {
    verifyRearportExists(k);
  });
});

bthread("Rearport update verification", function () {
  const e = waitForAnyRearportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRearport(k, ANY), function () {
    verifyRearportUpdated(k);
  });
});

bthread("Rearport delete verification", function () {
  const e = waitForAnyRearportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRearport(k, ANY), function () {
    verifyRearportDoesNotExist(k);
  });
});

bthread("Rearporttemplate create verification", function () {
  const e = waitForAnyRearporttemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRearporttemplate(k, ANY), function () {
    verifyRearporttemplateExists(k);
  });
});

bthread("Rearporttemplate update verification", function () {
  const e = waitForAnyRearporttemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRearporttemplate(k, ANY), function () {
    verifyRearporttemplateUpdated(k);
  });
});

bthread("Rearporttemplate delete verification", function () {
  const e = waitForAnyRearporttemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRearporttemplate(k, ANY), function () {
    verifyRearporttemplateDoesNotExist(k);
  });
});

bthread("Region create verification", function () {
  const e = waitForAnyRegionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRegion(k, ANY), function () {
    verifyRegionExists(k);
  });
});

bthread("Region update verification", function () {
  const e = waitForAnyRegionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRegion(k, ANY), function () {
    verifyRegionUpdated(k);
  });
});

bthread("Region delete verification", function () {
  const e = waitForAnyRegionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRegion(k, ANY), function () {
    verifyRegionDoesNotExist(k);
  });
});

bthread("Render create verification", function () {
  const e = waitForAnyRenderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRender(k, ANY), function () {
    verifyRenderExists(k);
  });
});

bthread("Render update verification", function () {
  const e = waitForAnyRenderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRender(k, ANY), function () {
    verifyRenderUpdated(k);
  });
});

bthread("Render delete verification", function () {
  const e = waitForAnyRenderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRender(k, ANY), function () {
    verifyRenderDoesNotExist(k);
  });
});

bthread("Renderconfig create verification", function () {
  const e = waitForAnyRenderconfigAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRenderconfig(k, ANY), function () {
    verifyRenderconfigExists(k);
  });
});

bthread("Renderconfig update verification", function () {
  const e = waitForAnyRenderconfigUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRenderconfig(k, ANY), function () {
    verifyRenderconfigUpdated(k);
  });
});

bthread("Renderconfig delete verification", function () {
  const e = waitForAnyRenderconfigDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRenderconfig(k, ANY), function () {
    verifyRenderconfigDoesNotExist(k);
  });
});

bthread("Requeue create verification", function () {
  const e = waitForAnyRequeueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequeue(k, ANY), function () {
    verifyRequeueExists(k);
  });
});

bthread("Requeue update verification", function () {
  const e = waitForAnyRequeueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequeue(k, ANY), function () {
    verifyRequeueUpdated(k);
  });
});

bthread("Requeue delete verification", function () {
  const e = waitForAnyRequeueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRequeue(k, ANY), function () {
    verifyRequeueDoesNotExist(k);
  });
});

bthread("Rir create verification", function () {
  const e = waitForAnyRirAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRir(k, ANY), function () {
    verifyRirExists(k);
  });
});

bthread("Rir update verification", function () {
  const e = waitForAnyRirUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRir(k, ANY), function () {
    verifyRirUpdated(k);
  });
});

bthread("Rir delete verification", function () {
  const e = waitForAnyRirDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRir(k, ANY), function () {
    verifyRirDoesNotExist(k);
  });
});

bthread("Role create verification", function () {
  const e = waitForAnyRoleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRole(k, ANY), function () {
    verifyRoleExists(k);
  });
});

bthread("Role update verification", function () {
  const e = waitForAnyRoleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRole(k, ANY), function () {
    verifyRoleUpdated(k);
  });
});

bthread("Role delete verification", function () {
  const e = waitForAnyRoleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRole(k, ANY), function () {
    verifyRoleDoesNotExist(k);
  });
});

bthread("Routetarget create verification", function () {
  const e = waitForAnyRoutetargetAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRoutetarget(k, ANY), function () {
    verifyRoutetargetExists(k);
  });
});

bthread("Routetarget update verification", function () {
  const e = waitForAnyRoutetargetUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRoutetarget(k, ANY), function () {
    verifyRoutetargetUpdated(k);
  });
});

bthread("Routetarget delete verification", function () {
  const e = waitForAnyRoutetargetDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRoutetarget(k, ANY), function () {
    verifyRoutetargetDoesNotExist(k);
  });
});

bthread("Savedfilter create verification", function () {
  const e = waitForAnySavedfilterAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSavedfilter(k, ANY), function () {
    verifySavedfilterExists(k);
  });
});

bthread("Savedfilter update verification", function () {
  const e = waitForAnySavedfilterUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSavedfilter(k, ANY), function () {
    verifySavedfilterUpdated(k);
  });
});

bthread("Savedfilter delete verification", function () {
  const e = waitForAnySavedfilterDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSavedfilter(k, ANY), function () {
    verifySavedfilterDoesNotExist(k);
  });
});

bthread("Schema create verification", function () {
  const e = waitForAnySchemaAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSchema(k, ANY), function () {
    verifySchemaExists(k);
  });
});

bthread("Schema update verification", function () {
  const e = waitForAnySchemaUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSchema(k, ANY), function () {
    verifySchemaUpdated(k);
  });
});

bthread("Schema delete verification", function () {
  const e = waitForAnySchemaDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSchema(k, ANY), function () {
    verifySchemaDoesNotExist(k);
  });
});

bthread("Script create verification", function () {
  const e = waitForAnyScriptAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScript(k, ANY), function () {
    verifyScriptExists(k);
  });
});

bthread("Script update verification", function () {
  const e = waitForAnyScriptUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScript(k, ANY), function () {
    verifyScriptUpdated(k);
  });
});

bthread("Script delete verification", function () {
  const e = waitForAnyScriptDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddScript(k, ANY), function () {
    verifyScriptDoesNotExist(k);
  });
});

bthread("Service create verification", function () {
  const e = waitForAnyServiceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteService(k, ANY), function () {
    verifyServiceExists(k);
  });
});

bthread("Service update verification", function () {
  const e = waitForAnyServiceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteService(k, ANY), function () {
    verifyServiceUpdated(k);
  });
});

bthread("Service delete verification", function () {
  const e = waitForAnyServiceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddService(k, ANY), function () {
    verifyServiceDoesNotExist(k);
  });
});

bthread("Servicetemplate create verification", function () {
  const e = waitForAnyServicetemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteServicetemplate(k, ANY), function () {
    verifyServicetemplateExists(k);
  });
});

bthread("Servicetemplate update verification", function () {
  const e = waitForAnyServicetemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteServicetemplate(k, ANY), function () {
    verifyServicetemplateUpdated(k);
  });
});

bthread("Servicetemplate delete verification", function () {
  const e = waitForAnyServicetemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddServicetemplate(k, ANY), function () {
    verifyServicetemplateDoesNotExist(k);
  });
});

bthread("Site create verification", function () {
  const e = waitForAnySiteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSite(k, ANY), function () {
    verifySiteExists(k);
  });
});

bthread("Site update verification", function () {
  const e = waitForAnySiteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSite(k, ANY), function () {
    verifySiteUpdated(k);
  });
});

bthread("Site delete verification", function () {
  const e = waitForAnySiteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSite(k, ANY), function () {
    verifySiteDoesNotExist(k);
  });
});

bthread("Sitegroup create verification", function () {
  const e = waitForAnySitegroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSitegroup(k, ANY), function () {
    verifySitegroupExists(k);
  });
});

bthread("Sitegroup update verification", function () {
  const e = waitForAnySitegroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSitegroup(k, ANY), function () {
    verifySitegroupUpdated(k);
  });
});

bthread("Sitegroup delete verification", function () {
  const e = waitForAnySitegroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSitegroup(k, ANY), function () {
    verifySitegroupDoesNotExist(k);
  });
});

bthread("Statu create verification", function () {
  const e = waitForAnyStatuAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStatu(k, ANY), function () {
    verifyStatuExists(k);
  });
});

bthread("Statu update verification", function () {
  const e = waitForAnyStatuUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStatu(k, ANY), function () {
    verifyStatuUpdated(k);
  });
});

bthread("Statu delete verification", function () {
  const e = waitForAnyStatuDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStatu(k, ANY), function () {
    verifyStatuDoesNotExist(k);
  });
});

bthread("Stop create verification", function () {
  const e = waitForAnyStopAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStop(k, ANY), function () {
    verifyStopExists(k);
  });
});

bthread("Stop update verification", function () {
  const e = waitForAnyStopUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStop(k, ANY), function () {
    verifyStopUpdated(k);
  });
});

bthread("Stop delete verification", function () {
  const e = waitForAnyStopDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStop(k, ANY), function () {
    verifyStopDoesNotExist(k);
  });
});

bthread("Subscription create verification", function () {
  const e = waitForAnySubscriptionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubscription(k, ANY), function () {
    verifySubscriptionExists(k);
  });
});

bthread("Subscription update verification", function () {
  const e = waitForAnySubscriptionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubscription(k, ANY), function () {
    verifySubscriptionUpdated(k);
  });
});

bthread("Subscription delete verification", function () {
  const e = waitForAnySubscriptionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSubscription(k, ANY), function () {
    verifySubscriptionDoesNotExist(k);
  });
});

bthread("Sync create verification", function () {
  const e = waitForAnySyncAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSync(k, ANY), function () {
    verifySyncExists(k);
  });
});

bthread("Sync update verification", function () {
  const e = waitForAnySyncUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSync(k, ANY), function () {
    verifySyncUpdated(k);
  });
});

bthread("Sync delete verification", function () {
  const e = waitForAnySyncDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSync(k, ANY), function () {
    verifySyncDoesNotExist(k);
  });
});

bthread("Tableconfig create verification", function () {
  const e = waitForAnyTableconfigAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTableconfig(k, ANY), function () {
    verifyTableconfigExists(k);
  });
});

bthread("Tableconfig update verification", function () {
  const e = waitForAnyTableconfigUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTableconfig(k, ANY), function () {
    verifyTableconfigUpdated(k);
  });
});

bthread("Tableconfig delete verification", function () {
  const e = waitForAnyTableconfigDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTableconfig(k, ANY), function () {
    verifyTableconfigDoesNotExist(k);
  });
});

bthread("Tag create verification", function () {
  const e = waitForAnyTagAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTag(k, ANY), function () {
    verifyTagExists(k);
  });
});

bthread("Tag update verification", function () {
  const e = waitForAnyTagUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTag(k, ANY), function () {
    verifyTagUpdated(k);
  });
});

bthread("Tag delete verification", function () {
  const e = waitForAnyTagDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTag(k, ANY), function () {
    verifyTagDoesNotExist(k);
  });
});

bthread("Taggedobject create verification", function () {
  const e = waitForAnyTaggedobjectAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTaggedobject(k, ANY), function () {
    verifyTaggedobjectExists(k);
  });
});

bthread("Taggedobject update verification", function () {
  const e = waitForAnyTaggedobjectUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTaggedobject(k, ANY), function () {
    verifyTaggedobjectUpdated(k);
  });
});

bthread("Taggedobject delete verification", function () {
  const e = waitForAnyTaggedobjectDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTaggedobject(k, ANY), function () {
    verifyTaggedobjectDoesNotExist(k);
  });
});

bthread("Tenancy create verification", function () {
  const e = waitForAnyTenancyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTenancy(k, ANY), function () {
    verifyTenancyExists(k);
  });
});

bthread("Tenancy update verification", function () {
  const e = waitForAnyTenancyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTenancy(k, ANY), function () {
    verifyTenancyUpdated(k);
  });
});

bthread("Tenancy delete verification", function () {
  const e = waitForAnyTenancyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTenancy(k, ANY), function () {
    verifyTenancyDoesNotExist(k);
  });
});

bthread("Tenant create verification", function () {
  const e = waitForAnyTenantAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTenant(k, ANY), function () {
    verifyTenantExists(k);
  });
});

bthread("Tenant update verification", function () {
  const e = waitForAnyTenantUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTenant(k, ANY), function () {
    verifyTenantUpdated(k);
  });
});

bthread("Tenant delete verification", function () {
  const e = waitForAnyTenantDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTenant(k, ANY), function () {
    verifyTenantDoesNotExist(k);
  });
});

bthread("Tenantgroup create verification", function () {
  const e = waitForAnyTenantgroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTenantgroup(k, ANY), function () {
    verifyTenantgroupExists(k);
  });
});

bthread("Tenantgroup update verification", function () {
  const e = waitForAnyTenantgroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTenantgroup(k, ANY), function () {
    verifyTenantgroupUpdated(k);
  });
});

bthread("Tenantgroup delete verification", function () {
  const e = waitForAnyTenantgroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTenantgroup(k, ANY), function () {
    verifyTenantgroupDoesNotExist(k);
  });
});

bthread("Token create verification", function () {
  const e = waitForAnyTokenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteToken(k, ANY), function () {
    verifyTokenExists(k);
  });
});

bthread("Token update verification", function () {
  const e = waitForAnyTokenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteToken(k, ANY), function () {
    verifyTokenUpdated(k);
  });
});

bthread("Token delete verification", function () {
  const e = waitForAnyTokenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddToken(k, ANY), function () {
    verifyTokenDoesNotExist(k);
  });
});

bthread("Trace create verification", function () {
  const e = waitForAnyTraceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTrace(k, ANY), function () {
    verifyTraceExists(k);
  });
});

bthread("Trace update verification", function () {
  const e = waitForAnyTraceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTrace(k, ANY), function () {
    verifyTraceUpdated(k);
  });
});

bthread("Trace delete verification", function () {
  const e = waitForAnyTraceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTrace(k, ANY), function () {
    verifyTraceDoesNotExist(k);
  });
});

bthread("Tunnel create verification", function () {
  const e = waitForAnyTunnelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTunnel(k, ANY), function () {
    verifyTunnelExists(k);
  });
});

bthread("Tunnel update verification", function () {
  const e = waitForAnyTunnelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTunnel(k, ANY), function () {
    verifyTunnelUpdated(k);
  });
});

bthread("Tunnel delete verification", function () {
  const e = waitForAnyTunnelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTunnel(k, ANY), function () {
    verifyTunnelDoesNotExist(k);
  });
});

bthread("Tunnelgroup create verification", function () {
  const e = waitForAnyTunnelgroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTunnelgroup(k, ANY), function () {
    verifyTunnelgroupExists(k);
  });
});

bthread("Tunnelgroup update verification", function () {
  const e = waitForAnyTunnelgroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTunnelgroup(k, ANY), function () {
    verifyTunnelgroupUpdated(k);
  });
});

bthread("Tunnelgroup delete verification", function () {
  const e = waitForAnyTunnelgroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTunnelgroup(k, ANY), function () {
    verifyTunnelgroupDoesNotExist(k);
  });
});

bthread("Tunneltermination create verification", function () {
  const e = waitForAnyTunnelterminationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTunneltermination(k, ANY), function () {
    verifyTunnelterminationExists(k);
  });
});

bthread("Tunneltermination update verification", function () {
  const e = waitForAnyTunnelterminationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTunneltermination(k, ANY), function () {
    verifyTunnelterminationUpdated(k);
  });
});

bthread("Tunneltermination delete verification", function () {
  const e = waitForAnyTunnelterminationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTunneltermination(k, ANY), function () {
    verifyTunnelterminationDoesNotExist(k);
  });
});

bthread("User create verification", function () {
  const e = waitForAnyUserAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUser(k, ANY), function () {
    verifyUserExists(k);
  });
});

bthread("User update verification", function () {
  const e = waitForAnyUserUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUser(k, ANY), function () {
    verifyUserUpdated(k);
  });
});

bthread("User delete verification", function () {
  const e = waitForAnyUserDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUser(k, ANY), function () {
    verifyUserDoesNotExist(k);
  });
});

bthread("Virtualchassi create verification", function () {
  const e = waitForAnyVirtualchassiAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualchassi(k, ANY), function () {
    verifyVirtualchassiExists(k);
  });
});

bthread("Virtualchassi update verification", function () {
  const e = waitForAnyVirtualchassiUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualchassi(k, ANY), function () {
    verifyVirtualchassiUpdated(k);
  });
});

bthread("Virtualchassi delete verification", function () {
  const e = waitForAnyVirtualchassiDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVirtualchassi(k, ANY), function () {
    verifyVirtualchassiDoesNotExist(k);
  });
});

bthread("Virtualcircuit create verification", function () {
  const e = waitForAnyVirtualcircuitAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualcircuit(k, ANY), function () {
    verifyVirtualcircuitExists(k);
  });
});

bthread("Virtualcircuit update verification", function () {
  const e = waitForAnyVirtualcircuitUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualcircuit(k, ANY), function () {
    verifyVirtualcircuitUpdated(k);
  });
});

bthread("Virtualcircuit delete verification", function () {
  const e = waitForAnyVirtualcircuitDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVirtualcircuit(k, ANY), function () {
    verifyVirtualcircuitDoesNotExist(k);
  });
});

bthread("Virtualcircuittermination create verification", function () {
  const e = waitForAnyVirtualcircuitterminationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualcircuittermination(k, ANY), function () {
    verifyVirtualcircuitterminationExists(k);
  });
});

bthread("Virtualcircuittermination update verification", function () {
  const e = waitForAnyVirtualcircuitterminationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualcircuittermination(k, ANY), function () {
    verifyVirtualcircuitterminationUpdated(k);
  });
});

bthread("Virtualcircuittermination delete verification", function () {
  const e = waitForAnyVirtualcircuitterminationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVirtualcircuittermination(k, ANY), function () {
    verifyVirtualcircuitterminationDoesNotExist(k);
  });
});

bthread("Virtualcircuittype create verification", function () {
  const e = waitForAnyVirtualcircuittypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualcircuittype(k, ANY), function () {
    verifyVirtualcircuittypeExists(k);
  });
});

bthread("Virtualcircuittype update verification", function () {
  const e = waitForAnyVirtualcircuittypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualcircuittype(k, ANY), function () {
    verifyVirtualcircuittypeUpdated(k);
  });
});

bthread("Virtualcircuittype delete verification", function () {
  const e = waitForAnyVirtualcircuittypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVirtualcircuittype(k, ANY), function () {
    verifyVirtualcircuittypeDoesNotExist(k);
  });
});

bthread("Virtualdevicecontext create verification", function () {
  const e = waitForAnyVirtualdevicecontextAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualdevicecontext(k, ANY), function () {
    verifyVirtualdevicecontextExists(k);
  });
});

bthread("Virtualdevicecontext update verification", function () {
  const e = waitForAnyVirtualdevicecontextUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualdevicecontext(k, ANY), function () {
    verifyVirtualdevicecontextUpdated(k);
  });
});

bthread("Virtualdevicecontext delete verification", function () {
  const e = waitForAnyVirtualdevicecontextDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVirtualdevicecontext(k, ANY), function () {
    verifyVirtualdevicecontextDoesNotExist(k);
  });
});

bthread("Virtualdisk create verification", function () {
  const e = waitForAnyVirtualdiskAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualdisk(k, ANY), function () {
    verifyVirtualdiskExists(k);
  });
});

bthread("Virtualdisk update verification", function () {
  const e = waitForAnyVirtualdiskUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualdisk(k, ANY), function () {
    verifyVirtualdiskUpdated(k);
  });
});

bthread("Virtualdisk delete verification", function () {
  const e = waitForAnyVirtualdiskDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVirtualdisk(k, ANY), function () {
    verifyVirtualdiskDoesNotExist(k);
  });
});

bthread("Virtualization create verification", function () {
  const e = waitForAnyVirtualizationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualization(k, ANY), function () {
    verifyVirtualizationExists(k);
  });
});

bthread("Virtualization update verification", function () {
  const e = waitForAnyVirtualizationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualization(k, ANY), function () {
    verifyVirtualizationUpdated(k);
  });
});

bthread("Virtualization delete verification", function () {
  const e = waitForAnyVirtualizationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVirtualization(k, ANY), function () {
    verifyVirtualizationDoesNotExist(k);
  });
});

bthread("Virtualmachine create verification", function () {
  const e = waitForAnyVirtualmachineAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualmachine(k, ANY), function () {
    verifyVirtualmachineExists(k);
  });
});

bthread("Virtualmachine update verification", function () {
  const e = waitForAnyVirtualmachineUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVirtualmachine(k, ANY), function () {
    verifyVirtualmachineUpdated(k);
  });
});

bthread("Virtualmachine delete verification", function () {
  const e = waitForAnyVirtualmachineDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVirtualmachine(k, ANY), function () {
    verifyVirtualmachineDoesNotExist(k);
  });
});

bthread("Vlan create verification", function () {
  const e = waitForAnyVlanAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVlan(k, ANY), function () {
    verifyVlanExists(k);
  });
});

bthread("Vlan update verification", function () {
  const e = waitForAnyVlanUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVlan(k, ANY), function () {
    verifyVlanUpdated(k);
  });
});

bthread("Vlan delete verification", function () {
  const e = waitForAnyVlanDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVlan(k, ANY), function () {
    verifyVlanDoesNotExist(k);
  });
});

bthread("Vlangroup create verification", function () {
  const e = waitForAnyVlangroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVlangroup(k, ANY), function () {
    verifyVlangroupExists(k);
  });
});

bthread("Vlangroup update verification", function () {
  const e = waitForAnyVlangroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVlangroup(k, ANY), function () {
    verifyVlangroupUpdated(k);
  });
});

bthread("Vlangroup delete verification", function () {
  const e = waitForAnyVlangroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVlangroup(k, ANY), function () {
    verifyVlangroupDoesNotExist(k);
  });
});

bthread("Vlantranslationpolicy create verification", function () {
  const e = waitForAnyVlantranslationpolicyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVlantranslationpolicy(k, ANY), function () {
    verifyVlantranslationpolicyExists(k);
  });
});

bthread("Vlantranslationpolicy update verification", function () {
  const e = waitForAnyVlantranslationpolicyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVlantranslationpolicy(k, ANY), function () {
    verifyVlantranslationpolicyUpdated(k);
  });
});

bthread("Vlantranslationpolicy delete verification", function () {
  const e = waitForAnyVlantranslationpolicyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVlantranslationpolicy(k, ANY), function () {
    verifyVlantranslationpolicyDoesNotExist(k);
  });
});

bthread("Vlantranslationrule create verification", function () {
  const e = waitForAnyVlantranslationruleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVlantranslationrule(k, ANY), function () {
    verifyVlantranslationruleExists(k);
  });
});

bthread("Vlantranslationrule update verification", function () {
  const e = waitForAnyVlantranslationruleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVlantranslationrule(k, ANY), function () {
    verifyVlantranslationruleUpdated(k);
  });
});

bthread("Vlantranslationrule delete verification", function () {
  const e = waitForAnyVlantranslationruleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVlantranslationrule(k, ANY), function () {
    verifyVlantranslationruleDoesNotExist(k);
  });
});

bthread("Vpn create verification", function () {
  const e = waitForAnyVpnAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVpn(k, ANY), function () {
    verifyVpnExists(k);
  });
});

bthread("Vpn update verification", function () {
  const e = waitForAnyVpnUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVpn(k, ANY), function () {
    verifyVpnUpdated(k);
  });
});

bthread("Vpn delete verification", function () {
  const e = waitForAnyVpnDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVpn(k, ANY), function () {
    verifyVpnDoesNotExist(k);
  });
});

bthread("Vrf create verification", function () {
  const e = waitForAnyVrfAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVrf(k, ANY), function () {
    verifyVrfExists(k);
  });
});

bthread("Vrf update verification", function () {
  const e = waitForAnyVrfUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVrf(k, ANY), function () {
    verifyVrfUpdated(k);
  });
});

bthread("Vrf delete verification", function () {
  const e = waitForAnyVrfDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVrf(k, ANY), function () {
    verifyVrfDoesNotExist(k);
  });
});

bthread("Webhook create verification", function () {
  const e = waitForAnyWebhookAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWebhook(k, ANY), function () {
    verifyWebhookExists(k);
  });
});

bthread("Webhook update verification", function () {
  const e = waitForAnyWebhookUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWebhook(k, ANY), function () {
    verifyWebhookUpdated(k);
  });
});

bthread("Webhook delete verification", function () {
  const e = waitForAnyWebhookDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWebhook(k, ANY), function () {
    verifyWebhookDoesNotExist(k);
  });
});

bthread("Wireles create verification", function () {
  const e = waitForAnyWirelesAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWireles(k, ANY), function () {
    verifyWirelesExists(k);
  });
});

bthread("Wireles update verification", function () {
  const e = waitForAnyWirelesUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWireles(k, ANY), function () {
    verifyWirelesUpdated(k);
  });
});

bthread("Wireles delete verification", function () {
  const e = waitForAnyWirelesDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWireles(k, ANY), function () {
    verifyWirelesDoesNotExist(k);
  });
});

bthread("Wirelesslan create verification", function () {
  const e = waitForAnyWirelesslanAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWirelesslan(k, ANY), function () {
    verifyWirelesslanExists(k);
  });
});

bthread("Wirelesslan update verification", function () {
  const e = waitForAnyWirelesslanUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWirelesslan(k, ANY), function () {
    verifyWirelesslanUpdated(k);
  });
});

bthread("Wirelesslan delete verification", function () {
  const e = waitForAnyWirelesslanDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWirelesslan(k, ANY), function () {
    verifyWirelesslanDoesNotExist(k);
  });
});

bthread("Wirelesslangroup create verification", function () {
  const e = waitForAnyWirelesslangroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWirelesslangroup(k, ANY), function () {
    verifyWirelesslangroupExists(k);
  });
});

bthread("Wirelesslangroup update verification", function () {
  const e = waitForAnyWirelesslangroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWirelesslangroup(k, ANY), function () {
    verifyWirelesslangroupUpdated(k);
  });
});

bthread("Wirelesslangroup delete verification", function () {
  const e = waitForAnyWirelesslangroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWirelesslangroup(k, ANY), function () {
    verifyWirelesslangroupDoesNotExist(k);
  });
});

bthread("Wirelesslink create verification", function () {
  const e = waitForAnyWirelesslinkAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWirelesslink(k, ANY), function () {
    verifyWirelesslinkExists(k);
  });
});

bthread("Wirelesslink update verification", function () {
  const e = waitForAnyWirelesslinkUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWirelesslink(k, ANY), function () {
    verifyWirelesslinkUpdated(k);
  });
});

bthread("Wirelesslink delete verification", function () {
  const e = waitForAnyWirelesslinkDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWirelesslink(k, ANY), function () {
    verifyWirelesslinkDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Aggregate", function () {
  const x = waitForAnyAggregateAdded();
  block(matchAddAggregate(x.id, ANY), function () {});
});

bthread("Guard: Unique Api", function () {
  const x = waitForAnyApiAdded();
  block(matchAddApi(x.id, ANY), function () {});
});

bthread("Guard: Unique Asn", function () {
  const x = waitForAnyAsnAdded();
  block(matchAddAsn(x.id, ANY), function () {});
});

bthread("Guard: Unique Asnrange", function () {
  const x = waitForAnyAsnrangeAdded();
  block(matchAddAsnrange(x.id, ANY), function () {});
});

bthread("Guard: Unique Availableasn", function () {
  const x = waitForAnyAvailableasnAdded();
  block(matchAddAvailableasn(x.id, ANY), function () {});
});

bthread("Guard: Unique Availableip", function () {
  const x = waitForAnyAvailableipAdded();
  block(matchAddAvailableip(x.id, ANY), function () {});
});

bthread("Guard: Unique Availableprefixe", function () {
  const x = waitForAnyAvailableprefixeAdded();
  block(matchAddAvailableprefixe(x.id, ANY), function () {});
});

bthread("Guard: Unique Availablevlan", function () {
  const x = waitForAnyAvailablevlanAdded();
  block(matchAddAvailablevlan(x.id, ANY), function () {});
});

bthread("Guard: Unique Backgroundqueue", function () {
  const x = waitForAnyBackgroundqueueAdded();
  block(matchAddBackgroundqueue(x.id, ANY), function () {});
});

bthread("Guard: Unique Backgroundtask", function () {
  const x = waitForAnyBackgroundtaskAdded();
  block(matchAddBackgroundtask(x.id, ANY), function () {});
});

bthread("Guard: Unique Backgroundworker", function () {
  const x = waitForAnyBackgroundworkerAdded();
  block(matchAddBackgroundworker(x.id, ANY), function () {});
});

bthread("Guard: Unique Bookmark", function () {
  const x = waitForAnyBookmarkAdded();
  block(matchAddBookmark(x.id, ANY), function () {});
});

bthread("Guard: Unique Cable", function () {
  const x = waitForAnyCableAdded();
  block(matchAddCable(x.id, ANY), function () {});
});

bthread("Guard: Unique Cabletermination", function () {
  const x = waitForAnyCableterminationAdded();
  block(matchAddCabletermination(x.id, ANY), function () {});
});

bthread("Guard: Unique Choice", function () {
  const x = waitForAnyChoiceAdded();
  block(matchAddChoice(x.id, ANY), function () {});
});

bthread("Guard: Unique Circuit", function () {
  const x = waitForAnyCircuitAdded();
  block(matchAddCircuit(x.id, ANY), function () {});
});

bthread("Guard: Unique Circuitgroup", function () {
  const x = waitForAnyCircuitgroupAdded();
  block(matchAddCircuitgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Circuitgroupassignment", function () {
  const x = waitForAnyCircuitgroupassignmentAdded();
  block(matchAddCircuitgroupassignment(x.id, ANY), function () {});
});

bthread("Guard: Unique Circuittermination", function () {
  const x = waitForAnyCircuitterminationAdded();
  block(matchAddCircuittermination(x.id, ANY), function () {});
});

bthread("Guard: Unique Circuittype", function () {
  const x = waitForAnyCircuittypeAdded();
  block(matchAddCircuittype(x.id, ANY), function () {});
});

bthread("Guard: Unique Cluster", function () {
  const x = waitForAnyClusterAdded();
  block(matchAddCluster(x.id, ANY), function () {});
});

bthread("Guard: Unique Clustergroup", function () {
  const x = waitForAnyClustergroupAdded();
  block(matchAddClustergroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Clustertype", function () {
  const x = waitForAnyClustertypeAdded();
  block(matchAddClustertype(x.id, ANY), function () {});
});

bthread("Guard: Unique Config", function () {
  const x = waitForAnyConfigAdded();
  block(matchAddConfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Configcontext", function () {
  const x = waitForAnyConfigcontextAdded();
  block(matchAddConfigcontext(x.id, ANY), function () {});
});

bthread("Guard: Unique Configcontextprofile", function () {
  const x = waitForAnyConfigcontextprofileAdded();
  block(matchAddConfigcontextprofile(x.id, ANY), function () {});
});

bthread("Guard: Unique Configtemplate", function () {
  const x = waitForAnyConfigtemplateAdded();
  block(matchAddConfigtemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Connecteddevice", function () {
  const x = waitForAnyConnecteddeviceAdded();
  block(matchAddConnecteddevice(x.id, ANY), function () {});
});

bthread("Guard: Unique Consoleport", function () {
  const x = waitForAnyConsoleportAdded();
  block(matchAddConsoleport(x.id, ANY), function () {});
});

bthread("Guard: Unique Consoleporttemplate", function () {
  const x = waitForAnyConsoleporttemplateAdded();
  block(matchAddConsoleporttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Consoleserverport", function () {
  const x = waitForAnyConsoleserverportAdded();
  block(matchAddConsoleserverport(x.id, ANY), function () {});
});

bthread("Guard: Unique Consoleserverporttemplate", function () {
  const x = waitForAnyConsoleserverporttemplateAdded();
  block(matchAddConsoleserverporttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Contact", function () {
  const x = waitForAnyContactAdded();
  block(matchAddContact(x.id, ANY), function () {});
});

bthread("Guard: Unique Contactassignment", function () {
  const x = waitForAnyContactassignmentAdded();
  block(matchAddContactassignment(x.id, ANY), function () {});
});

bthread("Guard: Unique Contactgroup", function () {
  const x = waitForAnyContactgroupAdded();
  block(matchAddContactgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Contactrole", function () {
  const x = waitForAnyContactroleAdded();
  block(matchAddContactrole(x.id, ANY), function () {});
});

bthread("Guard: Unique Core", function () {
  const x = waitForAnyCoreAdded();
  block(matchAddCore(x.id, ANY), function () {});
});

bthread("Guard: Unique Customfield", function () {
  const x = waitForAnyCustomfieldAdded();
  block(matchAddCustomfield(x.id, ANY), function () {});
});

bthread("Guard: Unique Customfieldchoiceset", function () {
  const x = waitForAnyCustomfieldchoicesetAdded();
  block(matchAddCustomfieldchoiceset(x.id, ANY), function () {});
});

bthread("Guard: Unique Customlink", function () {
  const x = waitForAnyCustomlinkAdded();
  block(matchAddCustomlink(x.id, ANY), function () {});
});

bthread("Guard: Unique Dashboard", function () {
  const x = waitForAnyDashboardAdded();
  block(matchAddDashboard(x.id, ANY), function () {});
});

bthread("Guard: Unique Datafile", function () {
  const x = waitForAnyDatafileAdded();
  block(matchAddDatafile(x.id, ANY), function () {});
});

bthread("Guard: Unique Datasource", function () {
  const x = waitForAnyDatasourceAdded();
  block(matchAddDatasource(x.id, ANY), function () {});
});

bthread("Guard: Unique Dcim", function () {
  const x = waitForAnyDcimAdded();
  block(matchAddDcim(x.id, ANY), function () {});
});

bthread("Guard: Unique Delete", function () {
  const x = waitForAnyDeleteAdded();
  block(matchAddDelete(x.id, ANY), function () {});
});

bthread("Guard: Unique Device", function () {
  const x = waitForAnyDeviceAdded();
  block(matchAddDevice(x.id, ANY), function () {});
});

bthread("Guard: Unique Devicebay", function () {
  const x = waitForAnyDevicebayAdded();
  block(matchAddDevicebay(x.id, ANY), function () {});
});

bthread("Guard: Unique Devicebaytemplate", function () {
  const x = waitForAnyDevicebaytemplateAdded();
  block(matchAddDevicebaytemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Devicerole", function () {
  const x = waitForAnyDeviceroleAdded();
  block(matchAddDevicerole(x.id, ANY), function () {});
});

bthread("Guard: Unique Devicetype", function () {
  const x = waitForAnyDevicetypeAdded();
  block(matchAddDevicetype(x.id, ANY), function () {});
});

bthread("Guard: Unique Elevation", function () {
  const x = waitForAnyElevationAdded();
  block(matchAddElevation(x.id, ANY), function () {});
});

bthread("Guard: Unique Enqueue", function () {
  const x = waitForAnyEnqueueAdded();
  block(matchAddEnqueue(x.id, ANY), function () {});
});

bthread("Guard: Unique Eventrule", function () {
  const x = waitForAnyEventruleAdded();
  block(matchAddEventrule(x.id, ANY), function () {});
});

bthread("Guard: Unique Exporttemplate", function () {
  const x = waitForAnyExporttemplateAdded();
  block(matchAddExporttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Extra", function () {
  const x = waitForAnyExtraAdded();
  block(matchAddExtra(x.id, ANY), function () {});
});

bthread("Guard: Unique Fhrpgroup", function () {
  const x = waitForAnyFhrpgroupAdded();
  block(matchAddFhrpgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Fhrpgroupassignment", function () {
  const x = waitForAnyFhrpgroupassignmentAdded();
  block(matchAddFhrpgroupassignment(x.id, ANY), function () {});
});

bthread("Guard: Unique Frontport", function () {
  const x = waitForAnyFrontportAdded();
  block(matchAddFrontport(x.id, ANY), function () {});
});

bthread("Guard: Unique Frontporttemplate", function () {
  const x = waitForAnyFrontporttemplateAdded();
  block(matchAddFrontporttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Group", function () {
  const x = waitForAnyGroupAdded();
  block(matchAddGroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Ikepolicy", function () {
  const x = waitForAnyIkepolicyAdded();
  block(matchAddIkepolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Ikeproposal", function () {
  const x = waitForAnyIkeproposalAdded();
  block(matchAddIkeproposal(x.id, ANY), function () {});
});

bthread("Guard: Unique Imageattachment", function () {
  const x = waitForAnyImageattachmentAdded();
  block(matchAddImageattachment(x.id, ANY), function () {});
});

bthread("Guard: Unique Interface", function () {
  const x = waitForAnyInterfaceAdded();
  block(matchAddInterface(x.id, ANY), function () {});
});

bthread("Guard: Unique Interfacetemplate", function () {
  const x = waitForAnyInterfacetemplateAdded();
  block(matchAddInterfacetemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Inventoryitem", function () {
  const x = waitForAnyInventoryitemAdded();
  block(matchAddInventoryitem(x.id, ANY), function () {});
});

bthread("Guard: Unique Inventoryitemrole", function () {
  const x = waitForAnyInventoryitemroleAdded();
  block(matchAddInventoryitemrole(x.id, ANY), function () {});
});

bthread("Guard: Unique Inventoryitemtemplate", function () {
  const x = waitForAnyInventoryitemtemplateAdded();
  block(matchAddInventoryitemtemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaddress", function () {
  const x = waitForAnyIpaddressAdded();
  block(matchAddIpaddress(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipam", function () {
  const x = waitForAnyIpamAdded();
  block(matchAddIpam(x.id, ANY), function () {});
});

bthread("Guard: Unique Iprange", function () {
  const x = waitForAnyIprangeAdded();
  block(matchAddIprange(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipsecpolicy", function () {
  const x = waitForAnyIpsecpolicyAdded();
  block(matchAddIpsecpolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipsecprofile", function () {
  const x = waitForAnyIpsecprofileAdded();
  block(matchAddIpsecprofile(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipsecproposal", function () {
  const x = waitForAnyIpsecproposalAdded();
  block(matchAddIpsecproposal(x.id, ANY), function () {});
});

bthread("Guard: Unique Job", function () {
  const x = waitForAnyJobAdded();
  block(matchAddJob(x.id, ANY), function () {});
});

bthread("Guard: Unique Journalentry", function () {
  const x = waitForAnyJournalentryAdded();
  block(matchAddJournalentry(x.id, ANY), function () {});
});

bthread("Guard: Unique L2vpn", function () {
  const x = waitForAnyL2vpnAdded();
  block(matchAddL2vpn(x.id, ANY), function () {});
});

bthread("Guard: Unique L2vpntermination", function () {
  const x = waitForAnyL2vpnterminationAdded();
  block(matchAddL2vpntermination(x.id, ANY), function () {});
});

bthread("Guard: Unique Location", function () {
  const x = waitForAnyLocationAdded();
  block(matchAddLocation(x.id, ANY), function () {});
});

bthread("Guard: Unique Macaddress", function () {
  const x = waitForAnyMacaddressAdded();
  block(matchAddMacaddress(x.id, ANY), function () {});
});

bthread("Guard: Unique Manufacturer", function () {
  const x = waitForAnyManufacturerAdded();
  block(matchAddManufacturer(x.id, ANY), function () {});
});

bthread("Guard: Unique Module", function () {
  const x = waitForAnyModuleAdded();
  block(matchAddModule(x.id, ANY), function () {});
});

bthread("Guard: Unique Modulebay", function () {
  const x = waitForAnyModulebayAdded();
  block(matchAddModulebay(x.id, ANY), function () {});
});

bthread("Guard: Unique Modulebaytemplate", function () {
  const x = waitForAnyModulebaytemplateAdded();
  block(matchAddModulebaytemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Moduletype", function () {
  const x = waitForAnyModuletypeAdded();
  block(matchAddModuletype(x.id, ANY), function () {});
});

bthread("Guard: Unique Moduletypeprofile", function () {
  const x = waitForAnyModuletypeprofileAdded();
  block(matchAddModuletypeprofile(x.id, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  block(matchAddNotification(x.id, ANY), function () {});
});

bthread("Guard: Unique Notificationgroup", function () {
  const x = waitForAnyNotificationgroupAdded();
  block(matchAddNotificationgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Objectchange", function () {
  const x = waitForAnyObjectchangeAdded();
  block(matchAddObjectchange(x.id, ANY), function () {});
});

bthread("Guard: Unique Objecttype", function () {
  const x = waitForAnyObjecttypeAdded();
  block(matchAddObjecttype(x.id, ANY), function () {});
});

bthread("Guard: Unique Path", function () {
  const x = waitForAnyPathAdded();
  block(matchAddPath(x.id, ANY), function () {});
});

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  block(matchAddPermission(x.id, ANY), function () {});
});

bthread("Guard: Unique Platform", function () {
  const x = waitForAnyPlatformAdded();
  block(matchAddPlatform(x.id, ANY), function () {});
});

bthread("Guard: Unique Powerfeed", function () {
  const x = waitForAnyPowerfeedAdded();
  block(matchAddPowerfeed(x.id, ANY), function () {});
});

bthread("Guard: Unique Poweroutlet", function () {
  const x = waitForAnyPoweroutletAdded();
  block(matchAddPoweroutlet(x.id, ANY), function () {});
});

bthread("Guard: Unique Poweroutlettemplate", function () {
  const x = waitForAnyPoweroutlettemplateAdded();
  block(matchAddPoweroutlettemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Powerpanel", function () {
  const x = waitForAnyPowerpanelAdded();
  block(matchAddPowerpanel(x.id, ANY), function () {});
});

bthread("Guard: Unique Powerport", function () {
  const x = waitForAnyPowerportAdded();
  block(matchAddPowerport(x.id, ANY), function () {});
});

bthread("Guard: Unique Powerporttemplate", function () {
  const x = waitForAnyPowerporttemplateAdded();
  block(matchAddPowerporttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Prefixe", function () {
  const x = waitForAnyPrefixeAdded();
  block(matchAddPrefixe(x.id, ANY), function () {});
});

bthread("Guard: Unique Provider", function () {
  const x = waitForAnyProviderAdded();
  block(matchAddProvider(x.id, ANY), function () {});
});

bthread("Guard: Unique Provideraccount", function () {
  const x = waitForAnyProvideraccountAdded();
  block(matchAddProvideraccount(x.id, ANY), function () {});
});

bthread("Guard: Unique Providernetwork", function () {
  const x = waitForAnyProvidernetworkAdded();
  block(matchAddProvidernetwork(x.id, ANY), function () {});
});

bthread("Guard: Unique Provision", function () {
  const x = waitForAnyProvisionAdded();
  block(matchAddProvision(x.id, ANY), function () {});
});

bthread("Guard: Unique Rack", function () {
  const x = waitForAnyRackAdded();
  block(matchAddRack(x.id, ANY), function () {});
});

bthread("Guard: Unique Rackreservation", function () {
  const x = waitForAnyRackreservationAdded();
  block(matchAddRackreservation(x.id, ANY), function () {});
});

bthread("Guard: Unique Rackrole", function () {
  const x = waitForAnyRackroleAdded();
  block(matchAddRackrole(x.id, ANY), function () {});
});

bthread("Guard: Unique Racktype", function () {
  const x = waitForAnyRacktypeAdded();
  block(matchAddRacktype(x.id, ANY), function () {});
});

bthread("Guard: Unique Rearport", function () {
  const x = waitForAnyRearportAdded();
  block(matchAddRearport(x.id, ANY), function () {});
});

bthread("Guard: Unique Rearporttemplate", function () {
  const x = waitForAnyRearporttemplateAdded();
  block(matchAddRearporttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Region", function () {
  const x = waitForAnyRegionAdded();
  block(matchAddRegion(x.id, ANY), function () {});
});

bthread("Guard: Unique Render", function () {
  const x = waitForAnyRenderAdded();
  block(matchAddRender(x.id, ANY), function () {});
});

bthread("Guard: Unique Renderconfig", function () {
  const x = waitForAnyRenderconfigAdded();
  block(matchAddRenderconfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Requeue", function () {
  const x = waitForAnyRequeueAdded();
  block(matchAddRequeue(x.id, ANY), function () {});
});

bthread("Guard: Unique Rir", function () {
  const x = waitForAnyRirAdded();
  block(matchAddRir(x.id, ANY), function () {});
});

bthread("Guard: Unique Role", function () {
  const x = waitForAnyRoleAdded();
  block(matchAddRole(x.id, ANY), function () {});
});

bthread("Guard: Unique Routetarget", function () {
  const x = waitForAnyRoutetargetAdded();
  block(matchAddRoutetarget(x.id, ANY), function () {});
});

bthread("Guard: Unique Savedfilter", function () {
  const x = waitForAnySavedfilterAdded();
  block(matchAddSavedfilter(x.id, ANY), function () {});
});

bthread("Guard: Unique Schema", function () {
  const x = waitForAnySchemaAdded();
  block(matchAddSchema(x.id, ANY), function () {});
});

bthread("Guard: Unique Script", function () {
  const x = waitForAnyScriptAdded();
  block(matchAddScript(x.id, ANY), function () {});
});

bthread("Guard: Unique Service", function () {
  const x = waitForAnyServiceAdded();
  block(matchAddService(x.id, ANY), function () {});
});

bthread("Guard: Unique Servicetemplate", function () {
  const x = waitForAnyServicetemplateAdded();
  block(matchAddServicetemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Site", function () {
  const x = waitForAnySiteAdded();
  block(matchAddSite(x.id, ANY), function () {});
});

bthread("Guard: Unique Sitegroup", function () {
  const x = waitForAnySitegroupAdded();
  block(matchAddSitegroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Statu", function () {
  const x = waitForAnyStatuAdded();
  block(matchAddStatu(x.id, ANY), function () {});
});

bthread("Guard: Unique Stop", function () {
  const x = waitForAnyStopAdded();
  block(matchAddStop(x.id, ANY), function () {});
});

bthread("Guard: Unique Subscription", function () {
  const x = waitForAnySubscriptionAdded();
  block(matchAddSubscription(x.id, ANY), function () {});
});

bthread("Guard: Unique Sync", function () {
  const x = waitForAnySyncAdded();
  block(matchAddSync(x.id, ANY), function () {});
});

bthread("Guard: Unique Tableconfig", function () {
  const x = waitForAnyTableconfigAdded();
  block(matchAddTableconfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Tag", function () {
  const x = waitForAnyTagAdded();
  block(matchAddTag(x.id, ANY), function () {});
});

bthread("Guard: Unique Taggedobject", function () {
  const x = waitForAnyTaggedobjectAdded();
  block(matchAddTaggedobject(x.id, ANY), function () {});
});

bthread("Guard: Unique Tenancy", function () {
  const x = waitForAnyTenancyAdded();
  block(matchAddTenancy(x.id, ANY), function () {});
});

bthread("Guard: Unique Tenant", function () {
  const x = waitForAnyTenantAdded();
  block(matchAddTenant(x.id, ANY), function () {});
});

bthread("Guard: Unique Tenantgroup", function () {
  const x = waitForAnyTenantgroupAdded();
  block(matchAddTenantgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Token", function () {
  const x = waitForAnyTokenAdded();
  block(matchAddToken(x.id, ANY), function () {});
});

bthread("Guard: Unique Trace", function () {
  const x = waitForAnyTraceAdded();
  block(matchAddTrace(x.id, ANY), function () {});
});

bthread("Guard: Unique Tunnel", function () {
  const x = waitForAnyTunnelAdded();
  block(matchAddTunnel(x.id, ANY), function () {});
});

bthread("Guard: Unique Tunnelgroup", function () {
  const x = waitForAnyTunnelgroupAdded();
  block(matchAddTunnelgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Tunneltermination", function () {
  const x = waitForAnyTunnelterminationAdded();
  block(matchAddTunneltermination(x.id, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  block(matchAddUser(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualchassi", function () {
  const x = waitForAnyVirtualchassiAdded();
  block(matchAddVirtualchassi(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualcircuit", function () {
  const x = waitForAnyVirtualcircuitAdded();
  block(matchAddVirtualcircuit(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualcircuittermination", function () {
  const x = waitForAnyVirtualcircuitterminationAdded();
  block(matchAddVirtualcircuittermination(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualcircuittype", function () {
  const x = waitForAnyVirtualcircuittypeAdded();
  block(matchAddVirtualcircuittype(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualdevicecontext", function () {
  const x = waitForAnyVirtualdevicecontextAdded();
  block(matchAddVirtualdevicecontext(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualdisk", function () {
  const x = waitForAnyVirtualdiskAdded();
  block(matchAddVirtualdisk(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualization", function () {
  const x = waitForAnyVirtualizationAdded();
  block(matchAddVirtualization(x.id, ANY), function () {});
});

bthread("Guard: Unique Virtualmachine", function () {
  const x = waitForAnyVirtualmachineAdded();
  block(matchAddVirtualmachine(x.id, ANY), function () {});
});

bthread("Guard: Unique Vlan", function () {
  const x = waitForAnyVlanAdded();
  block(matchAddVlan(x.id, ANY), function () {});
});

bthread("Guard: Unique Vlangroup", function () {
  const x = waitForAnyVlangroupAdded();
  block(matchAddVlangroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Vlantranslationpolicy", function () {
  const x = waitForAnyVlantranslationpolicyAdded();
  block(matchAddVlantranslationpolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Vlantranslationrule", function () {
  const x = waitForAnyVlantranslationruleAdded();
  block(matchAddVlantranslationrule(x.id, ANY), function () {});
});

bthread("Guard: Unique Vpn", function () {
  const x = waitForAnyVpnAdded();
  block(matchAddVpn(x.id, ANY), function () {});
});

bthread("Guard: Unique Vrf", function () {
  const x = waitForAnyVrfAdded();
  block(matchAddVrf(x.id, ANY), function () {});
});

bthread("Guard: Unique Webhook", function () {
  const x = waitForAnyWebhookAdded();
  block(matchAddWebhook(x.id, ANY), function () {});
});

bthread("Guard: Unique Wireles", function () {
  const x = waitForAnyWirelesAdded();
  block(matchAddWireles(x.id, ANY), function () {});
});

bthread("Guard: Unique Wirelesslan", function () {
  const x = waitForAnyWirelesslanAdded();
  block(matchAddWirelesslan(x.id, ANY), function () {});
});

bthread("Guard: Unique Wirelesslangroup", function () {
  const x = waitForAnyWirelesslangroupAdded();
  block(matchAddWirelesslangroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Wirelesslink", function () {
  const x = waitForAnyWirelesslinkAdded();
  block(matchAddWirelesslink(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
