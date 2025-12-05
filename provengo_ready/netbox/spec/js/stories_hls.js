// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// Story: crud:CircuitGroupAssignment:nondet:1:1
bthread("crud:CircuitGroupAssignment:nondet:1:1", function () {
  let group = "group_200";
  let id = 200;
  let member_id = 200;
  let member_type = "member_type_200";
  let priority = "priority_200";
  let tags = "tags_200";
  createCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  waitForCircuitGroupAssignmentAdded(group, id, member_id, member_type, priority, tags);
  tryToAddExistingCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentExists(group, id, member_id, member_type, priority, tags);
  updateCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  deleteCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  tryToDeleteANonExistingCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentDoesNotExist(group, id, member_id, member_type, priority, tags);
});

// Story: crud:CircuitGroupAssignment:nondet:1:2
bthread("crud:CircuitGroupAssignment:nondet:1:2", function () {
  let group = "group_201";
  let id = 201;
  let member_id = 201;
  let member_type = "member_type_201";
  let priority = "priority_201";
  let tags = "tags_201";
  createCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  tryToAddExistingCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  updateCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentExists(group, id, member_id, member_type, priority, tags);
  deleteCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  tryToDeleteANonExistingCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentDoesNotExist(group, id, member_id, member_type, priority, tags);
});

// Story: crud:CircuitGroupAssignment:nondet:negative:dup-add
bthread("crud:CircuitGroupAssignment:nondet:negative:dup-add", function () {
  let group = "group_206";
  let id = 206;
  let member_id = 206;
  let member_type = "member_type_206";
  let priority = "priority_206";
  let tags = "tags_206";
  createCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentExists(group, id, member_id, member_type, priority, tags);
  tryToAddExistingCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentExists(group, id, member_id, member_type, priority, tags);
});

// Monitor: CircuitGroupAssignment Addition Verification
bthread("monitor:CircuitGroupAssignment:addition", function () {
  while (true) {
    let item = waitForAnyCircuitGroupAssignmentAdded();
    block(matchDeletedCircuitGroupAssignment(item.group, item.id, item.member_id, item.member_type, item.priority, item.tags), function () {
      verifyCircuitGroupAssignmentExists(item.group, item.id, item.member_id, item.member_type, item.priority, item.tags);
    });
  }
});

// Monitor: CircuitGroupAssignment Deletion Verification
bthread("monitor:CircuitGroupAssignment:deletion", function () {
  while (true) {
    let item = waitForAnyCircuitGroupAssignmentDeleted();
    block(matchAddedCircuitGroupAssignment(item.group, item.id, item.member_id, item.member_type, item.priority, item.tags), function () {
      verifyCircuitGroupAssignmentDoesNotExist(item.group, item.id, item.member_id, item.member_type, item.priority, item.tags);
    });
  }
});

// Story: crud:CircuitGroup:nondet:1:1
bthread("crud:CircuitGroup:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_210";
  let id = 210;
  let name = "name_210";
  let slug = "slug_210";
  let tags = "tags_210";
  let tenant = "tenant_210";
  createCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  waitForCircuitGroupAdded(custom_fields, description, id, name, slug, tags, tenant);
  tryToAddExistingCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  verifyCircuitGroupExists(custom_fields, description, id, name, slug, tags, tenant);
  updateCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  deleteCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  tryToDeleteANonExistingCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  verifyCircuitGroupDoesNotExist(custom_fields, description, id, name, slug, tags, tenant);
});

// Story: crud:CircuitGroup:nondet:1:2
bthread("crud:CircuitGroup:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_211";
  let id = 211;
  let name = "name_211";
  let slug = "slug_211";
  let tags = "tags_211";
  let tenant = "tenant_211";
  createCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  tryToAddExistingCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  updateCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  verifyCircuitGroupExists(custom_fields, description, id, name, slug, tags, tenant);
  deleteCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  tryToDeleteANonExistingCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  verifyCircuitGroupDoesNotExist(custom_fields, description, id, name, slug, tags, tenant);
});

// Story: crud:CircuitGroup:nondet:negative:dup-add
bthread("crud:CircuitGroup:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_216";
  let id = 216;
  let name = "name_216";
  let slug = "slug_216";
  let tags = "tags_216";
  let tenant = "tenant_216";
  createCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  verifyCircuitGroupExists(custom_fields, description, id, name, slug, tags, tenant);
  tryToAddExistingCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  verifyCircuitGroupExists(custom_fields, description, id, name, slug, tags, tenant);
});

// Monitor: CircuitGroup Addition Verification
bthread("monitor:CircuitGroup:addition", function () {
  while (true) {
    let item = waitForAnyCircuitGroupAdded();
    block(matchDeletedCircuitGroup(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags, item.tenant), function () {
      verifyCircuitGroupExists(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags, item.tenant);
    });
  }
});

// Monitor: CircuitGroup Deletion Verification
bthread("monitor:CircuitGroup:deletion", function () {
  while (true) {
    let item = waitForAnyCircuitGroupDeleted();
    block(matchAddedCircuitGroup(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags, item.tenant), function () {
      verifyCircuitGroupDoesNotExist(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags, item.tenant);
    });
  }
});

// Story: crud:CircuitTermination:nondet:1:1
bthread("crud:CircuitTermination:nondet:1:1", function () {
  let circuit = "circuit_220";
  let custom_fields = {};
  let description = "description_220";
  let id = 220;
  let mark_connected = "mark_connected_220";
  let port_speed = 220;
  let pp_info = "pp_info_220";
  let tags = "tags_220";
  let term_side = "term_side_220";
  let termination_id = 220;
  let termination_type = "termination_type_220";
  let upstream_speed = 220;
  let xconnect_id = 220;
  createCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  waitForCircuitTerminationAdded(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  tryToAddExistingCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationExists(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  updateCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  deleteCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  tryToDeleteANonExistingCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationDoesNotExist(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
});

// Story: crud:CircuitTermination:nondet:1:2
bthread("crud:CircuitTermination:nondet:1:2", function () {
  let circuit = "circuit_221";
  let custom_fields = {};
  let description = "description_221";
  let id = 221;
  let mark_connected = "mark_connected_221";
  let port_speed = 221;
  let pp_info = "pp_info_221";
  let tags = "tags_221";
  let term_side = "term_side_221";
  let termination_id = 221;
  let termination_type = "termination_type_221";
  let upstream_speed = 221;
  let xconnect_id = 221;
  createCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  tryToAddExistingCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  updateCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationExists(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  deleteCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  tryToDeleteANonExistingCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationDoesNotExist(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
});

// Story: crud:CircuitTermination:nondet:negative:dup-add
bthread("crud:CircuitTermination:nondet:negative:dup-add", function () {
  let circuit = "circuit_226";
  let custom_fields = {};
  let description = "description_226";
  let id = 226;
  let mark_connected = "mark_connected_226";
  let port_speed = 226;
  let pp_info = "pp_info_226";
  let tags = "tags_226";
  let term_side = "term_side_226";
  let termination_id = 226;
  let termination_type = "termination_type_226";
  let upstream_speed = 226;
  let xconnect_id = 226;
  createCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationExists(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  tryToAddExistingCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationExists(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
});

// Monitor: CircuitTermination Addition Verification
bthread("monitor:CircuitTermination:addition", function () {
  while (true) {
    let item = waitForAnyCircuitTerminationAdded();
    block(matchDeletedCircuitTermination(item.circuit, item.custom_fields, item.description, item.id, item.mark_connected, item.port_speed, item.pp_info, item.tags, item.term_side, item.termination_id, item.termination_type, item.upstream_speed, item.xconnect_id), function () {
      verifyCircuitTerminationExists(item.circuit, item.custom_fields, item.description, item.id, item.mark_connected, item.port_speed, item.pp_info, item.tags, item.term_side, item.termination_id, item.termination_type, item.upstream_speed, item.xconnect_id);
    });
  }
});

// Monitor: CircuitTermination Deletion Verification
bthread("monitor:CircuitTermination:deletion", function () {
  while (true) {
    let item = waitForAnyCircuitTerminationDeleted();
    block(matchAddedCircuitTermination(item.circuit, item.custom_fields, item.description, item.id, item.mark_connected, item.port_speed, item.pp_info, item.tags, item.term_side, item.termination_id, item.termination_type, item.upstream_speed, item.xconnect_id), function () {
      verifyCircuitTerminationDoesNotExist(item.circuit, item.custom_fields, item.description, item.id, item.mark_connected, item.port_speed, item.pp_info, item.tags, item.term_side, item.termination_id, item.termination_type, item.upstream_speed, item.xconnect_id);
    });
  }
});

// Story: crud:CircuitType:nondet:1:1
bthread("crud:CircuitType:nondet:1:1", function () {
  let color = "color_230";
  let custom_fields = {};
  let description = "description_230";
  let id = 230;
  let name = "name_230";
  let slug = "slug_230";
  let tags = "tags_230";
  createCircuitType(color, custom_fields, description, id, name, slug, tags);
  waitForCircuitTypeAdded(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  updateCircuitType(color, custom_fields, description, id, name, slug, tags);
  deleteCircuitType(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:CircuitType:nondet:1:2
bthread("crud:CircuitType:nondet:1:2", function () {
  let color = "color_231";
  let custom_fields = {};
  let description = "description_231";
  let id = 231;
  let name = "name_231";
  let slug = "slug_231";
  let tags = "tags_231";
  createCircuitType(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingCircuitType(color, custom_fields, description, id, name, slug, tags);
  updateCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  deleteCircuitType(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:CircuitType:nondet:negative:dup-add
bthread("crud:CircuitType:nondet:negative:dup-add", function () {
  let color = "color_236";
  let custom_fields = {};
  let description = "description_236";
  let id = 236;
  let name = "name_236";
  let slug = "slug_236";
  let tags = "tags_236";
  createCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
});

// Monitor: CircuitType Addition Verification
bthread("monitor:CircuitType:addition", function () {
  while (true) {
    let item = waitForAnyCircuitTypeAdded();
    block(matchDeletedCircuitType(item.color, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyCircuitTypeExists(item.color, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Monitor: CircuitType Deletion Verification
bthread("monitor:CircuitType:deletion", function () {
  while (true) {
    let item = waitForAnyCircuitTypeDeleted();
    block(matchAddedCircuitType(item.color, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyCircuitTypeDoesNotExist(item.color, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Story: crud:Circuit:nondet:1:1
bthread("crud:Circuit:nondet:1:1", function () {
  let assignments = "assignments_240";
  let cid = 240;
  let comments = "comments_240";
  let commit_rate = 240;
  let custom_fields = {};
  let description = "description_240";
  let distance = 240;
  let distance_unit = "distance_unit_240";
  let id = 240;
  let install_date = "install_date_240";
  let provider;
  let provider_account;
  let status = "status_240";
  let tags = "tags_240";
  let tenant = "tenant_240";
  let termination_date = "termination_date_240";
  let type = "type_240";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["provider_account"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id", "provider_account": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  provider_account = captured["provider_account"];
  createCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  waitForCircuitAdded(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  tryToAddExistingCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  verifyCircuitExists(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  updateCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  deleteCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  tryToDeleteANonExistingCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  verifyCircuitDoesNotExist(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
});

// Story: crud:Circuit:nondet:1:2
bthread("crud:Circuit:nondet:1:2", function () {
  let assignments = "assignments_241";
  let cid = 241;
  let comments = "comments_241";
  let commit_rate = 241;
  let custom_fields = {};
  let description = "description_241";
  let distance = 241;
  let distance_unit = "distance_unit_241";
  let id = 241;
  let install_date = "install_date_241";
  let provider;
  let provider_account;
  let status = "status_241";
  let tags = "tags_241";
  let tenant = "tenant_241";
  let termination_date = "termination_date_241";
  let type = "type_241";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["provider_account"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id", "provider_account": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  provider_account = captured["provider_account"];
  createCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  tryToAddExistingCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  updateCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  verifyCircuitExists(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  deleteCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  tryToDeleteANonExistingCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  verifyCircuitDoesNotExist(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
});

// Story: crud:Circuit:nondet:negative:dup-add
bthread("crud:Circuit:nondet:negative:dup-add", function () {
  let assignments = "assignments_246";
  let cid = 246;
  let comments = "comments_246";
  let commit_rate = 246;
  let custom_fields = {};
  let description = "description_246";
  let distance = 246;
  let distance_unit = "distance_unit_246";
  let id = 246;
  let install_date = "install_date_246";
  let provider;
  let provider_account;
  let status = "status_246";
  let tags = "tags_246";
  let tenant = "tenant_246";
  let termination_date = "termination_date_246";
  let type = "type_246";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["provider_account"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id", "provider_account": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  provider_account = captured["provider_account"];
  createCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  verifyCircuitExists(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  tryToAddExistingCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  verifyCircuitExists(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
});

// Monitor: Circuit Addition Verification
bthread("monitor:Circuit:addition", function () {
  while (true) {
    let item = waitForAnyCircuitAdded();
    block(matchDeletedCircuit(item.assignments, item.cid, item.comments, item.commit_rate, item.custom_fields, item.description, item.distance, item.distance_unit, item.id, item.install_date, item.provider, item.provider_account, item.status, item.tags, item.tenant, item.termination_date, item.type), function () {
      verifyCircuitExists(item.assignments, item.cid, item.comments, item.commit_rate, item.custom_fields, item.description, item.distance, item.distance_unit, item.id, item.install_date, item.provider, item.provider_account, item.status, item.tags, item.tenant, item.termination_date, item.type);
    });
  }
});

// Monitor: Circuit Deletion Verification
bthread("monitor:Circuit:deletion", function () {
  while (true) {
    let item = waitForAnyCircuitDeleted();
    block(matchAddedCircuit(item.assignments, item.cid, item.comments, item.commit_rate, item.custom_fields, item.description, item.distance, item.distance_unit, item.id, item.install_date, item.provider, item.provider_account, item.status, item.tags, item.tenant, item.termination_date, item.type), function () {
      verifyCircuitDoesNotExist(item.assignments, item.cid, item.comments, item.commit_rate, item.custom_fields, item.description, item.distance, item.distance_unit, item.id, item.install_date, item.provider, item.provider_account, item.status, item.tags, item.tenant, item.termination_date, item.type);
    });
  }
});

// Story: crud:ProviderAccount:nondet:1:1
bthread("crud:ProviderAccount:nondet:1:1", function () {
  let account = "account_250";
  let comments = "comments_250";
  let custom_fields = {};
  let description = "description_250";
  let id = 250;
  let name = "name_250";
  let provider;
  let tags = "tags_250";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  createProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  waitForProviderAccountAdded(account, comments, custom_fields, description, id, name, provider, tags);
  tryToAddExistingProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  verifyProviderAccountExists(account, comments, custom_fields, description, id, name, provider, tags);
  updateProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  deleteProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  tryToDeleteANonExistingProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  verifyProviderAccountDoesNotExist(account, comments, custom_fields, description, id, name, provider, tags);
});

// Story: crud:ProviderAccount:nondet:1:2
bthread("crud:ProviderAccount:nondet:1:2", function () {
  let account = "account_251";
  let comments = "comments_251";
  let custom_fields = {};
  let description = "description_251";
  let id = 251;
  let name = "name_251";
  let provider;
  let tags = "tags_251";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  createProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  tryToAddExistingProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  updateProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  verifyProviderAccountExists(account, comments, custom_fields, description, id, name, provider, tags);
  deleteProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  tryToDeleteANonExistingProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  verifyProviderAccountDoesNotExist(account, comments, custom_fields, description, id, name, provider, tags);
});

// Story: crud:ProviderAccount:nondet:negative:dup-add
bthread("crud:ProviderAccount:nondet:negative:dup-add", function () {
  let account = "account_256";
  let comments = "comments_256";
  let custom_fields = {};
  let description = "description_256";
  let id = 256;
  let name = "name_256";
  let provider;
  let tags = "tags_256";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  createProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  verifyProviderAccountExists(account, comments, custom_fields, description, id, name, provider, tags);
  tryToAddExistingProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  verifyProviderAccountExists(account, comments, custom_fields, description, id, name, provider, tags);
});

// Monitor: ProviderAccount Addition Verification
bthread("monitor:ProviderAccount:addition", function () {
  while (true) {
    let item = waitForAnyProviderAccountAdded();
    block(matchDeletedProviderAccount(item.account, item.comments, item.custom_fields, item.description, item.id, item.name, item.provider, item.tags), function () {
      verifyProviderAccountExists(item.account, item.comments, item.custom_fields, item.description, item.id, item.name, item.provider, item.tags);
    });
  }
});

// Monitor: ProviderAccount Deletion Verification
bthread("monitor:ProviderAccount:deletion", function () {
  while (true) {
    let item = waitForAnyProviderAccountDeleted();
    block(matchAddedProviderAccount(item.account, item.comments, item.custom_fields, item.description, item.id, item.name, item.provider, item.tags), function () {
      verifyProviderAccountDoesNotExist(item.account, item.comments, item.custom_fields, item.description, item.id, item.name, item.provider, item.tags);
    });
  }
});

// Story: crud:ProviderNetwork:nondet:1:1
bthread("crud:ProviderNetwork:nondet:1:1", function () {
  let comments = "comments_260";
  let custom_fields = {};
  let description = "description_260";
  let id = 260;
  let name = "name_260";
  let provider;
  let service_id;
  let tags = "tags_260";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["service_id"] = matchAnyServiceAdded();
  let pkMap = {"provider": "id", "service_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  service_id = captured["service_id"];
  createProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  waitForProviderNetworkAdded(comments, custom_fields, description, id, name, provider, service_id, tags);
  tryToAddExistingProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  verifyProviderNetworkExists(comments, custom_fields, description, id, name, provider, service_id, tags);
  updateProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  deleteProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  tryToDeleteANonExistingProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  verifyProviderNetworkDoesNotExist(comments, custom_fields, description, id, name, provider, service_id, tags);
});

// Story: crud:ProviderNetwork:nondet:1:2
bthread("crud:ProviderNetwork:nondet:1:2", function () {
  let comments = "comments_261";
  let custom_fields = {};
  let description = "description_261";
  let id = 261;
  let name = "name_261";
  let provider;
  let service_id;
  let tags = "tags_261";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["service_id"] = matchAnyServiceAdded();
  let pkMap = {"provider": "id", "service_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  service_id = captured["service_id"];
  createProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  tryToAddExistingProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  updateProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  verifyProviderNetworkExists(comments, custom_fields, description, id, name, provider, service_id, tags);
  deleteProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  tryToDeleteANonExistingProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  verifyProviderNetworkDoesNotExist(comments, custom_fields, description, id, name, provider, service_id, tags);
});

// Story: crud:ProviderNetwork:nondet:negative:dup-add
bthread("crud:ProviderNetwork:nondet:negative:dup-add", function () {
  let comments = "comments_266";
  let custom_fields = {};
  let description = "description_266";
  let id = 266;
  let name = "name_266";
  let provider;
  let service_id;
  let tags = "tags_266";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["service_id"] = matchAnyServiceAdded();
  let pkMap = {"provider": "id", "service_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  service_id = captured["service_id"];
  createProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  verifyProviderNetworkExists(comments, custom_fields, description, id, name, provider, service_id, tags);
  tryToAddExistingProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  verifyProviderNetworkExists(comments, custom_fields, description, id, name, provider, service_id, tags);
});

// Monitor: ProviderNetwork Addition Verification
bthread("monitor:ProviderNetwork:addition", function () {
  while (true) {
    let item = waitForAnyProviderNetworkAdded();
    block(matchDeletedProviderNetwork(item.comments, item.custom_fields, item.description, item.id, item.name, item.provider, item.service_id, item.tags), function () {
      verifyProviderNetworkExists(item.comments, item.custom_fields, item.description, item.id, item.name, item.provider, item.service_id, item.tags);
    });
  }
});

// Monitor: ProviderNetwork Deletion Verification
bthread("monitor:ProviderNetwork:deletion", function () {
  while (true) {
    let item = waitForAnyProviderNetworkDeleted();
    block(matchAddedProviderNetwork(item.comments, item.custom_fields, item.description, item.id, item.name, item.provider, item.service_id, item.tags), function () {
      verifyProviderNetworkDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.name, item.provider, item.service_id, item.tags);
    });
  }
});

// Story: crud:Provider:nondet:1:1
bthread("crud:Provider:nondet:1:1", function () {
  let accounts = "accounts_270";
  let asns = "asns_270";
  let comments = "comments_270";
  let custom_fields = {};
  let description = "description_270";
  let id = 270;
  let name = "name_270";
  let slug = "slug_270";
  let tags = "tags_270";
  createProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  waitForProviderAdded(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  tryToAddExistingProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderExists(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  updateProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  deleteProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderDoesNotExist(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
});

// Story: crud:Provider:nondet:1:2
bthread("crud:Provider:nondet:1:2", function () {
  let accounts = "accounts_271";
  let asns = "asns_271";
  let comments = "comments_271";
  let custom_fields = {};
  let description = "description_271";
  let id = 271;
  let name = "name_271";
  let slug = "slug_271";
  let tags = "tags_271";
  createProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  tryToAddExistingProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  updateProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderExists(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  deleteProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderDoesNotExist(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
});

// Story: crud:Provider:nondet:negative:dup-add
bthread("crud:Provider:nondet:negative:dup-add", function () {
  let accounts = "accounts_276";
  let asns = "asns_276";
  let comments = "comments_276";
  let custom_fields = {};
  let description = "description_276";
  let id = 276;
  let name = "name_276";
  let slug = "slug_276";
  let tags = "tags_276";
  createProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderExists(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  tryToAddExistingProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderExists(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
});

// Monitor: Provider Addition Verification
bthread("monitor:Provider:addition", function () {
  while (true) {
    let item = waitForAnyProviderAdded();
    block(matchDeletedProvider(item.accounts, item.asns, item.comments, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyProviderExists(item.accounts, item.asns, item.comments, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Monitor: Provider Deletion Verification
bthread("monitor:Provider:deletion", function () {
  while (true) {
    let item = waitForAnyProviderDeleted();
    block(matchAddedProvider(item.accounts, item.asns, item.comments, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyProviderDoesNotExist(item.accounts, item.asns, item.comments, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Story: crud:VirtualCircuitTermination:nondet:1:1
bthread("crud:VirtualCircuitTermination:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_280";
  let id = 280;
  let _interface = "interface_280";
  let role = "role_280";
  let tags = "tags_280";
  let virtual_circuit = "virtual_circuit_280";
  createVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  waitForVirtualCircuitTerminationAdded(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  tryToAddExistingVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationExists(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  updateVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  deleteVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  tryToDeleteANonExistingVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationDoesNotExist(custom_fields, description, id, _interface, role, tags, virtual_circuit);
});

// Story: crud:VirtualCircuitTermination:nondet:1:2
bthread("crud:VirtualCircuitTermination:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_281";
  let id = 281;
  let _interface = "interface_281";
  let role = "role_281";
  let tags = "tags_281";
  let virtual_circuit = "virtual_circuit_281";
  createVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  tryToAddExistingVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  updateVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationExists(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  deleteVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  tryToDeleteANonExistingVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationDoesNotExist(custom_fields, description, id, _interface, role, tags, virtual_circuit);
});

// Story: crud:VirtualCircuitTermination:nondet:negative:dup-add
bthread("crud:VirtualCircuitTermination:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_286";
  let id = 286;
  let _interface = "interface_286";
  let role = "role_286";
  let tags = "tags_286";
  let virtual_circuit = "virtual_circuit_286";
  createVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationExists(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  tryToAddExistingVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationExists(custom_fields, description, id, _interface, role, tags, virtual_circuit);
});

// Monitor: VirtualCircuitTermination Addition Verification
bthread("monitor:VirtualCircuitTermination:addition", function () {
  while (true) {
    let item = waitForAnyVirtualCircuitTerminationAdded();
    block(matchDeletedVirtualCircuitTermination(item.custom_fields, item.description, item.id, item._interface, item.role, item.tags, item.virtual_circuit), function () {
      verifyVirtualCircuitTerminationExists(item.custom_fields, item.description, item.id, item._interface, item.role, item.tags, item.virtual_circuit);
    });
  }
});

// Monitor: VirtualCircuitTermination Deletion Verification
bthread("monitor:VirtualCircuitTermination:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualCircuitTerminationDeleted();
    block(matchAddedVirtualCircuitTermination(item.custom_fields, item.description, item.id, item._interface, item.role, item.tags, item.virtual_circuit), function () {
      verifyVirtualCircuitTerminationDoesNotExist(item.custom_fields, item.description, item.id, item._interface, item.role, item.tags, item.virtual_circuit);
    });
  }
});

// Story: crud:VirtualCircuitType:nondet:1:1
bthread("crud:VirtualCircuitType:nondet:1:1", function () {
  let color = "color_290";
  let custom_fields = {};
  let description = "description_290";
  let id = 290;
  let name = "name_290";
  let slug = "slug_290";
  let tags = "tags_290";
  createVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  waitForVirtualCircuitTypeAdded(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  updateVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  deleteVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:VirtualCircuitType:nondet:1:2
bthread("crud:VirtualCircuitType:nondet:1:2", function () {
  let color = "color_291";
  let custom_fields = {};
  let description = "description_291";
  let id = 291;
  let name = "name_291";
  let slug = "slug_291";
  let tags = "tags_291";
  createVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  updateVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  deleteVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:VirtualCircuitType:nondet:negative:dup-add
bthread("crud:VirtualCircuitType:nondet:negative:dup-add", function () {
  let color = "color_296";
  let custom_fields = {};
  let description = "description_296";
  let id = 296;
  let name = "name_296";
  let slug = "slug_296";
  let tags = "tags_296";
  createVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
});

// Monitor: VirtualCircuitType Addition Verification
bthread("monitor:VirtualCircuitType:addition", function () {
  while (true) {
    let item = waitForAnyVirtualCircuitTypeAdded();
    block(matchDeletedVirtualCircuitType(item.color, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyVirtualCircuitTypeExists(item.color, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Monitor: VirtualCircuitType Deletion Verification
bthread("monitor:VirtualCircuitType:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualCircuitTypeDeleted();
    block(matchAddedVirtualCircuitType(item.color, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyVirtualCircuitTypeDoesNotExist(item.color, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Story: crud:VirtualCircuit:nondet:1:1
bthread("crud:VirtualCircuit:nondet:1:1", function () {
  let cid = 300;
  let comments = "comments_300";
  let custom_fields = {};
  let description = "description_300";
  let id = 300;
  let provider;
  let provider_account;
  let provider_network;
  let provider_network_id;
  let status = "status_300";
  let tags = "tags_300";
  let tenant = "tenant_300";
  let tenant_group = "tenant_group_300";
  let type = "type_300";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["provider_account"] = matchAnyProviderAdded();
  deps["provider_network"] = matchAnyProviderAdded();
  deps["provider_network_id"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id", "provider_account": "id", "provider_network": "id", "provider_network_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  provider_account = captured["provider_account"];
  provider_network = captured["provider_network"];
  provider_network_id = captured["provider_network_id"];
  createVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  waitForVirtualCircuitAdded(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  tryToAddExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  updateVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  deleteVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  tryToDeleteANonExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  verifyVirtualCircuitDoesNotExist(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
});

// Story: crud:VirtualCircuit:nondet:1:2
bthread("crud:VirtualCircuit:nondet:1:2", function () {
  let cid = 301;
  let comments = "comments_301";
  let custom_fields = {};
  let description = "description_301";
  let id = 301;
  let provider;
  let provider_account;
  let provider_network;
  let provider_network_id;
  let status = "status_301";
  let tags = "tags_301";
  let tenant = "tenant_301";
  let tenant_group = "tenant_group_301";
  let type = "type_301";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["provider_account"] = matchAnyProviderAdded();
  deps["provider_network"] = matchAnyProviderAdded();
  deps["provider_network_id"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id", "provider_account": "id", "provider_network": "id", "provider_network_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  provider_account = captured["provider_account"];
  provider_network = captured["provider_network"];
  provider_network_id = captured["provider_network_id"];
  createVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  tryToAddExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  updateVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  deleteVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  tryToDeleteANonExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  verifyVirtualCircuitDoesNotExist(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
});

// Story: crud:VirtualCircuit:nondet:negative:dup-add
bthread("crud:VirtualCircuit:nondet:negative:dup-add", function () {
  let cid = 306;
  let comments = "comments_306";
  let custom_fields = {};
  let description = "description_306";
  let id = 306;
  let provider;
  let provider_account;
  let provider_network;
  let provider_network_id;
  let status = "status_306";
  let tags = "tags_306";
  let tenant = "tenant_306";
  let tenant_group = "tenant_group_306";
  let type = "type_306";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["provider_account"] = matchAnyProviderAdded();
  deps["provider_network"] = matchAnyProviderAdded();
  deps["provider_network_id"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id", "provider_account": "id", "provider_network": "id", "provider_network_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  provider_account = captured["provider_account"];
  provider_network = captured["provider_network"];
  provider_network_id = captured["provider_network_id"];
  createVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  tryToAddExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
});

// Monitor: VirtualCircuit Addition Verification
bthread("monitor:VirtualCircuit:addition", function () {
  while (true) {
    let item = waitForAnyVirtualCircuitAdded();
    block(matchDeletedVirtualCircuit(item.cid, item.comments, item.custom_fields, item.description, item.id, item.provider, item.provider_account, item.provider_network, item.provider_network_id, item.status, item.tags, item.tenant, item.tenant_group, item.type), function () {
      verifyVirtualCircuitExists(item.cid, item.comments, item.custom_fields, item.description, item.id, item.provider, item.provider_account, item.provider_network, item.provider_network_id, item.status, item.tags, item.tenant, item.tenant_group, item.type);
    });
  }
});

// Monitor: VirtualCircuit Deletion Verification
bthread("monitor:VirtualCircuit:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualCircuitDeleted();
    block(matchAddedVirtualCircuit(item.cid, item.comments, item.custom_fields, item.description, item.id, item.provider, item.provider_account, item.provider_network, item.provider_network_id, item.status, item.tags, item.tenant, item.tenant_group, item.type), function () {
      verifyVirtualCircuitDoesNotExist(item.cid, item.comments, item.custom_fields, item.description, item.id, item.provider, item.provider_account, item.provider_network, item.provider_network_id, item.status, item.tags, item.tenant, item.tenant_group, item.type);
    });
  }
});

// Story: crud:DataSource:nondet:1:1
bthread("crud:DataSource:nondet:1:1", function () {
  let comments = "comments_350";
  let custom_fields = {};
  let description = "description_350";
  let enabled = "enabled_350";
  let id = 350;
  let ignore_rules = "ignore_rules_350";
  let name = "name_350";
  let parameters = "parameters_350";
  let source_url = "source_url_350";
  let status = "status_350";
  let sync_interval = 350;
  let tag = "tag_350";
  let type = "type_350";
  createDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  waitForDataSourceAdded(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  tryToAddExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  updateDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  deleteDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  tryToDeleteANonExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  verifyDataSourceDoesNotExist(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
});

// Story: crud:DataSource:nondet:1:2
bthread("crud:DataSource:nondet:1:2", function () {
  let comments = "comments_351";
  let custom_fields = {};
  let description = "description_351";
  let enabled = "enabled_351";
  let id = 351;
  let ignore_rules = "ignore_rules_351";
  let name = "name_351";
  let parameters = "parameters_351";
  let source_url = "source_url_351";
  let status = "status_351";
  let sync_interval = 351;
  let tag = "tag_351";
  let type = "type_351";
  createDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  tryToAddExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  updateDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  deleteDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  tryToDeleteANonExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  verifyDataSourceDoesNotExist(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
});

// Story: crud:DataSource:nondet:negative:dup-add
bthread("crud:DataSource:nondet:negative:dup-add", function () {
  let comments = "comments_356";
  let custom_fields = {};
  let description = "description_356";
  let enabled = "enabled_356";
  let id = 356;
  let ignore_rules = "ignore_rules_356";
  let name = "name_356";
  let parameters = "parameters_356";
  let source_url = "source_url_356";
  let status = "status_356";
  let sync_interval = 356;
  let tag = "tag_356";
  let type = "type_356";
  createDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  tryToAddExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
});

// Monitor: DataSource Addition Verification
bthread("monitor:DataSource:addition", function () {
  while (true) {
    let item = waitForAnyDataSourceAdded();
    block(matchDeletedDataSource(item.comments, item.custom_fields, item.description, item.enabled, item.id, item.ignore_rules, item.name, item.parameters, item.source_url, item.status, item.sync_interval, item.tag, item.type), function () {
      verifyDataSourceExists(item.comments, item.custom_fields, item.description, item.enabled, item.id, item.ignore_rules, item.name, item.parameters, item.source_url, item.status, item.sync_interval, item.tag, item.type);
    });
  }
});

// Monitor: DataSource Deletion Verification
bthread("monitor:DataSource:deletion", function () {
  while (true) {
    let item = waitForAnyDataSourceDeleted();
    block(matchAddedDataSource(item.comments, item.custom_fields, item.description, item.enabled, item.id, item.ignore_rules, item.name, item.parameters, item.source_url, item.status, item.sync_interval, item.tag, item.type), function () {
      verifyDataSourceDoesNotExist(item.comments, item.custom_fields, item.description, item.enabled, item.id, item.ignore_rules, item.name, item.parameters, item.source_url, item.status, item.sync_interval, item.tag, item.type);
    });
  }
});

// Story: crud:CableTermination:nondet:1:1
bthread("crud:CableTermination:nondet:1:1", function () {
  let cable = 390;
  let cable_end = "cable_end_390";
  let id = 390;
  let termination_id = 390;
  let termination_type = "termination_type_390";
  createCableTermination(cable, cable_end, id, termination_id, termination_type);
  waitForCableTerminationAdded(cable, cable_end, id, termination_id, termination_type);
  tryToAddExistingCableTermination(cable, cable_end, id, termination_id, termination_type);
  verifyCableTerminationExists(cable, cable_end, id, termination_id, termination_type);
  updateCableTermination(cable, cable_end, id, termination_id, termination_type);
  deleteCableTermination(cable, cable_end, id, termination_id, termination_type);
  tryToDeleteANonExistingCableTermination(cable, cable_end, id, termination_id, termination_type);
  verifyCableTerminationDoesNotExist(cable, cable_end, id, termination_id, termination_type);
});

// Story: crud:CableTermination:nondet:1:2
bthread("crud:CableTermination:nondet:1:2", function () {
  let cable = 391;
  let cable_end = "cable_end_391";
  let id = 391;
  let termination_id = 391;
  let termination_type = "termination_type_391";
  createCableTermination(cable, cable_end, id, termination_id, termination_type);
  tryToAddExistingCableTermination(cable, cable_end, id, termination_id, termination_type);
  updateCableTermination(cable, cable_end, id, termination_id, termination_type);
  verifyCableTerminationExists(cable, cable_end, id, termination_id, termination_type);
  deleteCableTermination(cable, cable_end, id, termination_id, termination_type);
  tryToDeleteANonExistingCableTermination(cable, cable_end, id, termination_id, termination_type);
  verifyCableTerminationDoesNotExist(cable, cable_end, id, termination_id, termination_type);
});

// Story: crud:CableTermination:nondet:negative:dup-add
bthread("crud:CableTermination:nondet:negative:dup-add", function () {
  let cable = 396;
  let cable_end = "cable_end_396";
  let id = 396;
  let termination_id = 396;
  let termination_type = "termination_type_396";
  createCableTermination(cable, cable_end, id, termination_id, termination_type);
  verifyCableTerminationExists(cable, cable_end, id, termination_id, termination_type);
  tryToAddExistingCableTermination(cable, cable_end, id, termination_id, termination_type);
  verifyCableTerminationExists(cable, cable_end, id, termination_id, termination_type);
});

// Monitor: CableTermination Addition Verification
bthread("monitor:CableTermination:addition", function () {
  while (true) {
    let item = waitForAnyCableTerminationAdded();
    block(matchDeletedCableTermination(item.cable, item.cable_end, item.id, item.termination_id, item.termination_type), function () {
      verifyCableTerminationExists(item.cable, item.cable_end, item.id, item.termination_id, item.termination_type);
    });
  }
});

// Monitor: CableTermination Deletion Verification
bthread("monitor:CableTermination:deletion", function () {
  while (true) {
    let item = waitForAnyCableTerminationDeleted();
    block(matchAddedCableTermination(item.cable, item.cable_end, item.id, item.termination_id, item.termination_type), function () {
      verifyCableTerminationDoesNotExist(item.cable, item.cable_end, item.id, item.termination_id, item.termination_type);
    });
  }
});

// Story: crud:Cable:nondet:1:1
bthread("crud:Cable:nondet:1:1", function () {
  let a_terminations = "a_terminations_400";
  let b_terminations = "b_terminations_400";
  let color = "color_400";
  let comments = "comments_400";
  let custom_fields = {};
  let description = "description_400";
  let id = 400;
  let label = "label_400";
  let length = 400;
  let length_unit = "length_unit_400";
  let status = "status_400";
  let tags = "tags_400";
  let tenant = "tenant_400";
  let type = "type_400";
  createCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  waitForCableAdded(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  tryToAddExistingCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  verifyCableExists(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  updateCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  deleteCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  tryToDeleteANonExistingCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  verifyCableDoesNotExist(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
});

// Story: crud:Cable:nondet:1:2
bthread("crud:Cable:nondet:1:2", function () {
  let a_terminations = "a_terminations_401";
  let b_terminations = "b_terminations_401";
  let color = "color_401";
  let comments = "comments_401";
  let custom_fields = {};
  let description = "description_401";
  let id = 401;
  let label = "label_401";
  let length = 401;
  let length_unit = "length_unit_401";
  let status = "status_401";
  let tags = "tags_401";
  let tenant = "tenant_401";
  let type = "type_401";
  createCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  tryToAddExistingCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  updateCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  verifyCableExists(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  deleteCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  tryToDeleteANonExistingCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  verifyCableDoesNotExist(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
});

// Story: crud:Cable:nondet:negative:dup-add
bthread("crud:Cable:nondet:negative:dup-add", function () {
  let a_terminations = "a_terminations_406";
  let b_terminations = "b_terminations_406";
  let color = "color_406";
  let comments = "comments_406";
  let custom_fields = {};
  let description = "description_406";
  let id = 406;
  let label = "label_406";
  let length = 406;
  let length_unit = "length_unit_406";
  let status = "status_406";
  let tags = "tags_406";
  let tenant = "tenant_406";
  let type = "type_406";
  createCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  verifyCableExists(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  tryToAddExistingCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  verifyCableExists(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
});

// Monitor: Cable Addition Verification
bthread("monitor:Cable:addition", function () {
  while (true) {
    let item = waitForAnyCableAdded();
    block(matchDeletedCable(item.a_terminations, item.b_terminations, item.color, item.comments, item.custom_fields, item.description, item.id, item.label, item.length, item.length_unit, item.status, item.tags, item.tenant, item.type), function () {
      verifyCableExists(item.a_terminations, item.b_terminations, item.color, item.comments, item.custom_fields, item.description, item.id, item.label, item.length, item.length_unit, item.status, item.tags, item.tenant, item.type);
    });
  }
});

// Monitor: Cable Deletion Verification
bthread("monitor:Cable:deletion", function () {
  while (true) {
    let item = waitForAnyCableDeleted();
    block(matchAddedCable(item.a_terminations, item.b_terminations, item.color, item.comments, item.custom_fields, item.description, item.id, item.label, item.length, item.length_unit, item.status, item.tags, item.tenant, item.type), function () {
      verifyCableDoesNotExist(item.a_terminations, item.b_terminations, item.color, item.comments, item.custom_fields, item.description, item.id, item.label, item.length, item.length_unit, item.status, item.tags, item.tenant, item.type);
    });
  }
});

// Story: crud:ConsolePortTemplate:nondet:1:1
bthread("crud:ConsolePortTemplate:nondet:1:1", function () {
  let description = "description_410";
  let device_type = "device_type_410";
  let id = 410;
  let label = "label_410";
  let module_type = "module_type_410";
  let name = "name_410";
  let type = "type_410";
  createConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  waitForConsolePortTemplateAdded(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsolePortTemplateExists(description, device_type, id, label, module_type, name, type);
  updateConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  deleteConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  tryToDeleteANonExistingConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsolePortTemplateDoesNotExist(description, device_type, id, label, module_type, name, type);
});

// Story: crud:ConsolePortTemplate:nondet:1:2
bthread("crud:ConsolePortTemplate:nondet:1:2", function () {
  let description = "description_411";
  let device_type = "device_type_411";
  let id = 411;
  let label = "label_411";
  let module_type = "module_type_411";
  let name = "name_411";
  let type = "type_411";
  createConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  updateConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsolePortTemplateExists(description, device_type, id, label, module_type, name, type);
  deleteConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  tryToDeleteANonExistingConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsolePortTemplateDoesNotExist(description, device_type, id, label, module_type, name, type);
});

// Story: crud:ConsolePortTemplate:nondet:negative:dup-add
bthread("crud:ConsolePortTemplate:nondet:negative:dup-add", function () {
  let description = "description_416";
  let device_type = "device_type_416";
  let id = 416;
  let label = "label_416";
  let module_type = "module_type_416";
  let name = "name_416";
  let type = "type_416";
  createConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsolePortTemplateExists(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsolePortTemplateExists(description, device_type, id, label, module_type, name, type);
});

// Monitor: ConsolePortTemplate Addition Verification
bthread("monitor:ConsolePortTemplate:addition", function () {
  while (true) {
    let item = waitForAnyConsolePortTemplateAdded();
    block(matchDeletedConsolePortTemplate(item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.type), function () {
      verifyConsolePortTemplateExists(item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.type);
    });
  }
});

// Monitor: ConsolePortTemplate Deletion Verification
bthread("monitor:ConsolePortTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyConsolePortTemplateDeleted();
    block(matchAddedConsolePortTemplate(item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.type), function () {
      verifyConsolePortTemplateDoesNotExist(item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.type);
    });
  }
});

// Story: crud:ConsolePort:nondet:1:1
bthread("crud:ConsolePort:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_420";
  let device = "device_420";
  let id = 420;
  let label = "label_420";
  let mark_connected = "mark_connected_420";
  let module = "module_420";
  let name = "name_420";
  let speed = 420;
  let tags = "tags_420";
  let type = "type_420";
  createConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  waitForConsolePortAdded(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToAddExistingConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsolePortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  updateConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  deleteConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToDeleteANonExistingConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsolePortDoesNotExist(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
});

// Story: crud:ConsolePort:nondet:1:2
bthread("crud:ConsolePort:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_421";
  let device = "device_421";
  let id = 421;
  let label = "label_421";
  let mark_connected = "mark_connected_421";
  let module = "module_421";
  let name = "name_421";
  let speed = 421;
  let tags = "tags_421";
  let type = "type_421";
  createConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToAddExistingConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  updateConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsolePortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  deleteConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToDeleteANonExistingConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsolePortDoesNotExist(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
});

// Story: crud:ConsolePort:nondet:negative:dup-add
bthread("crud:ConsolePort:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_426";
  let device = "device_426";
  let id = 426;
  let label = "label_426";
  let mark_connected = "mark_connected_426";
  let module = "module_426";
  let name = "name_426";
  let speed = 426;
  let tags = "tags_426";
  let type = "type_426";
  createConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsolePortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToAddExistingConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsolePortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
});

// Monitor: ConsolePort Addition Verification
bthread("monitor:ConsolePort:addition", function () {
  while (true) {
    let item = waitForAnyConsolePortAdded();
    block(matchDeletedConsolePort(item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.module, item.name, item.speed, item.tags, item.type), function () {
      verifyConsolePortExists(item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.module, item.name, item.speed, item.tags, item.type);
    });
  }
});

// Monitor: ConsolePort Deletion Verification
bthread("monitor:ConsolePort:deletion", function () {
  while (true) {
    let item = waitForAnyConsolePortDeleted();
    block(matchAddedConsolePort(item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.module, item.name, item.speed, item.tags, item.type), function () {
      verifyConsolePortDoesNotExist(item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.module, item.name, item.speed, item.tags, item.type);
    });
  }
});

// Story: crud:ConsoleServerPortTemplate:nondet:1:1
bthread("crud:ConsoleServerPortTemplate:nondet:1:1", function () {
  let description = "description_430";
  let device_type = "device_type_430";
  let id = 430;
  let label = "label_430";
  let module_type = "module_type_430";
  let name = "name_430";
  let type = "type_430";
  createConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  waitForConsoleServerPortTemplateAdded(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, id, label, module_type, name, type);
  updateConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  deleteConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  tryToDeleteANonExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateDoesNotExist(description, device_type, id, label, module_type, name, type);
});

// Story: crud:ConsoleServerPortTemplate:nondet:1:2
bthread("crud:ConsoleServerPortTemplate:nondet:1:2", function () {
  let description = "description_431";
  let device_type = "device_type_431";
  let id = 431;
  let label = "label_431";
  let module_type = "module_type_431";
  let name = "name_431";
  let type = "type_431";
  createConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  updateConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, id, label, module_type, name, type);
  deleteConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  tryToDeleteANonExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateDoesNotExist(description, device_type, id, label, module_type, name, type);
});

// Story: crud:ConsoleServerPortTemplate:nondet:negative:dup-add
bthread("crud:ConsoleServerPortTemplate:nondet:negative:dup-add", function () {
  let description = "description_436";
  let device_type = "device_type_436";
  let id = 436;
  let label = "label_436";
  let module_type = "module_type_436";
  let name = "name_436";
  let type = "type_436";
  createConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, id, label, module_type, name, type);
});

// Monitor: ConsoleServerPortTemplate Addition Verification
bthread("monitor:ConsoleServerPortTemplate:addition", function () {
  while (true) {
    let item = waitForAnyConsoleServerPortTemplateAdded();
    block(matchDeletedConsoleServerPortTemplate(item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.type), function () {
      verifyConsoleServerPortTemplateExists(item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.type);
    });
  }
});

// Monitor: ConsoleServerPortTemplate Deletion Verification
bthread("monitor:ConsoleServerPortTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyConsoleServerPortTemplateDeleted();
    block(matchAddedConsoleServerPortTemplate(item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.type), function () {
      verifyConsoleServerPortTemplateDoesNotExist(item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.type);
    });
  }
});

// Story: crud:ConsoleServerPort:nondet:1:1
bthread("crud:ConsoleServerPort:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_440";
  let device = "device_440";
  let id = 440;
  let label = "label_440";
  let mark_connected = "mark_connected_440";
  let module = "module_440";
  let name = "name_440";
  let speed = 440;
  let tags = "tags_440";
  let type = "type_440";
  createConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  waitForConsoleServerPortAdded(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToAddExistingConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsoleServerPortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  updateConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  deleteConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToDeleteANonExistingConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsoleServerPortDoesNotExist(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
});

// Story: crud:ConsoleServerPort:nondet:1:2
bthread("crud:ConsoleServerPort:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_441";
  let device = "device_441";
  let id = 441;
  let label = "label_441";
  let mark_connected = "mark_connected_441";
  let module = "module_441";
  let name = "name_441";
  let speed = 441;
  let tags = "tags_441";
  let type = "type_441";
  createConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToAddExistingConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  updateConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsoleServerPortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  deleteConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToDeleteANonExistingConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsoleServerPortDoesNotExist(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
});

// Story: crud:ConsoleServerPort:nondet:negative:dup-add
bthread("crud:ConsoleServerPort:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_446";
  let device = "device_446";
  let id = 446;
  let label = "label_446";
  let mark_connected = "mark_connected_446";
  let module = "module_446";
  let name = "name_446";
  let speed = 446;
  let tags = "tags_446";
  let type = "type_446";
  createConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsoleServerPortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToAddExistingConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsoleServerPortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
});

// Monitor: ConsoleServerPort Addition Verification
bthread("monitor:ConsoleServerPort:addition", function () {
  while (true) {
    let item = waitForAnyConsoleServerPortAdded();
    block(matchDeletedConsoleServerPort(item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.module, item.name, item.speed, item.tags, item.type), function () {
      verifyConsoleServerPortExists(item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.module, item.name, item.speed, item.tags, item.type);
    });
  }
});

// Monitor: ConsoleServerPort Deletion Verification
bthread("monitor:ConsoleServerPort:deletion", function () {
  while (true) {
    let item = waitForAnyConsoleServerPortDeleted();
    block(matchAddedConsoleServerPort(item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.module, item.name, item.speed, item.tags, item.type), function () {
      verifyConsoleServerPortDoesNotExist(item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.module, item.name, item.speed, item.tags, item.type);
    });
  }
});

// Story: crud:DeviceBayTemplate:nondet:1:1
bthread("crud:DeviceBayTemplate:nondet:1:1", function () {
  let description = "description_450";
  let device_type = "device_type_450";
  let id = 450;
  let label = "label_450";
  let name = "name_450";
  createDeviceBayTemplate(description, device_type, id, label, name);
  waitForDeviceBayTemplateAdded(description, device_type, id, label, name);
  tryToAddExistingDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, id, label, name);
  updateDeviceBayTemplate(description, device_type, id, label, name);
  deleteDeviceBayTemplate(description, device_type, id, label, name);
  tryToDeleteANonExistingDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateDoesNotExist(description, device_type, id, label, name);
});

// Story: crud:DeviceBayTemplate:nondet:1:2
bthread("crud:DeviceBayTemplate:nondet:1:2", function () {
  let description = "description_451";
  let device_type = "device_type_451";
  let id = 451;
  let label = "label_451";
  let name = "name_451";
  createDeviceBayTemplate(description, device_type, id, label, name);
  tryToAddExistingDeviceBayTemplate(description, device_type, id, label, name);
  updateDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, id, label, name);
  deleteDeviceBayTemplate(description, device_type, id, label, name);
  tryToDeleteANonExistingDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateDoesNotExist(description, device_type, id, label, name);
});

// Story: crud:DeviceBayTemplate:nondet:negative:dup-add
bthread("crud:DeviceBayTemplate:nondet:negative:dup-add", function () {
  let description = "description_456";
  let device_type = "device_type_456";
  let id = 456;
  let label = "label_456";
  let name = "name_456";
  createDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, id, label, name);
  tryToAddExistingDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, id, label, name);
});

// Monitor: DeviceBayTemplate Addition Verification
bthread("monitor:DeviceBayTemplate:addition", function () {
  while (true) {
    let item = waitForAnyDeviceBayTemplateAdded();
    block(matchDeletedDeviceBayTemplate(item.description, item.device_type, item.id, item.label, item.name), function () {
      verifyDeviceBayTemplateExists(item.description, item.device_type, item.id, item.label, item.name);
    });
  }
});

// Monitor: DeviceBayTemplate Deletion Verification
bthread("monitor:DeviceBayTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyDeviceBayTemplateDeleted();
    block(matchAddedDeviceBayTemplate(item.description, item.device_type, item.id, item.label, item.name), function () {
      verifyDeviceBayTemplateDoesNotExist(item.description, item.device_type, item.id, item.label, item.name);
    });
  }
});

// Story: crud:DeviceBay:nondet:1:1
bthread("crud:DeviceBay:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_460";
  let device = "device_460";
  let id = 460;
  let installed_device = "installed_device_460";
  let label = "label_460";
  let name = "name_460";
  let tags = "tags_460";
  createDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  waitForDeviceBayAdded(custom_fields, description, device, id, installed_device, label, name, tags);
  tryToAddExistingDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  verifyDeviceBayExists(custom_fields, description, device, id, installed_device, label, name, tags);
  updateDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  deleteDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  tryToDeleteANonExistingDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  verifyDeviceBayDoesNotExist(custom_fields, description, device, id, installed_device, label, name, tags);
});

// Story: crud:DeviceBay:nondet:1:2
bthread("crud:DeviceBay:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_461";
  let device = "device_461";
  let id = 461;
  let installed_device = "installed_device_461";
  let label = "label_461";
  let name = "name_461";
  let tags = "tags_461";
  createDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  tryToAddExistingDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  updateDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  verifyDeviceBayExists(custom_fields, description, device, id, installed_device, label, name, tags);
  deleteDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  tryToDeleteANonExistingDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  verifyDeviceBayDoesNotExist(custom_fields, description, device, id, installed_device, label, name, tags);
});

// Story: crud:DeviceBay:nondet:negative:dup-add
bthread("crud:DeviceBay:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_466";
  let device = "device_466";
  let id = 466;
  let installed_device = "installed_device_466";
  let label = "label_466";
  let name = "name_466";
  let tags = "tags_466";
  createDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  verifyDeviceBayExists(custom_fields, description, device, id, installed_device, label, name, tags);
  tryToAddExistingDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  verifyDeviceBayExists(custom_fields, description, device, id, installed_device, label, name, tags);
});

// Monitor: DeviceBay Addition Verification
bthread("monitor:DeviceBay:addition", function () {
  while (true) {
    let item = waitForAnyDeviceBayAdded();
    block(matchDeletedDeviceBay(item.custom_fields, item.description, item.device, item.id, item.installed_device, item.label, item.name, item.tags), function () {
      verifyDeviceBayExists(item.custom_fields, item.description, item.device, item.id, item.installed_device, item.label, item.name, item.tags);
    });
  }
});

// Monitor: DeviceBay Deletion Verification
bthread("monitor:DeviceBay:deletion", function () {
  while (true) {
    let item = waitForAnyDeviceBayDeleted();
    block(matchAddedDeviceBay(item.custom_fields, item.description, item.device, item.id, item.installed_device, item.label, item.name, item.tags), function () {
      verifyDeviceBayDoesNotExist(item.custom_fields, item.description, item.device, item.id, item.installed_device, item.label, item.name, item.tags);
    });
  }
});

// Story: crud:DeviceRole:nondet:1:1
bthread("crud:DeviceRole:nondet:1:1", function () {
  let color = "color_470";
  let comments = "comments_470";
  let config_template = "config_template_470";
  let custom_fields = {};
  let description = "description_470";
  let id = 470;
  let name = "name_470";
  let parent = 470;
  let slug = "slug_470";
  let tags = "tags_470";
  let vm_role = "vm_role_470";
  createDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  waitForDeviceRoleAdded(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToAddExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  updateDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  deleteDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToDeleteANonExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleDoesNotExist(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
});

// Story: crud:DeviceRole:nondet:1:2
bthread("crud:DeviceRole:nondet:1:2", function () {
  let color = "color_471";
  let comments = "comments_471";
  let config_template = "config_template_471";
  let custom_fields = {};
  let description = "description_471";
  let id = 471;
  let name = "name_471";
  let parent = 471;
  let slug = "slug_471";
  let tags = "tags_471";
  let vm_role = "vm_role_471";
  createDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToAddExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  updateDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  deleteDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToDeleteANonExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleDoesNotExist(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
});

// Story: crud:DeviceRole:nondet:negative:dup-add
bthread("crud:DeviceRole:nondet:negative:dup-add", function () {
  let color = "color_476";
  let comments = "comments_476";
  let config_template = "config_template_476";
  let custom_fields = {};
  let description = "description_476";
  let id = 476;
  let name = "name_476";
  let parent = 476;
  let slug = "slug_476";
  let tags = "tags_476";
  let vm_role = "vm_role_476";
  createDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToAddExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
});

// Monitor: DeviceRole Addition Verification
bthread("monitor:DeviceRole:addition", function () {
  while (true) {
    let item = waitForAnyDeviceRoleAdded();
    block(matchDeletedDeviceRole(item.color, item.comments, item.config_template, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags, item.vm_role), function () {
      verifyDeviceRoleExists(item.color, item.comments, item.config_template, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags, item.vm_role);
    });
  }
});

// Monitor: DeviceRole Deletion Verification
bthread("monitor:DeviceRole:deletion", function () {
  while (true) {
    let item = waitForAnyDeviceRoleDeleted();
    block(matchAddedDeviceRole(item.color, item.comments, item.config_template, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags, item.vm_role), function () {
      verifyDeviceRoleDoesNotExist(item.color, item.comments, item.config_template, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags, item.vm_role);
    });
  }
});

// Story: crud:DeviceType:nondet:1:1
bthread("crud:DeviceType:nondet:1:1", function () {
  let airflow = "airflow_480";
  let comments = "comments_480";
  let custom_fields = {};
  let default_platform = "default_platform_480";
  let description = "description_480";
  let exclude_from_utilization = "exclude_from_utilization_480";
  let front_image = "front_image_480";
  let id = 480;
  let is_full_depth = "is_full_depth_480";
  let manufacturer = "manufacturer_480";
  let model = "model_480";
  let part_number = "part_number_480";
  let rear_image = "rear_image_480";
  let slug = "slug_480";
  let subdevice_role = "subdevice_role_480";
  let tags = "tags_480";
  let u_height = 480;
  let weight = 480;
  let weight_unit = "weight_unit_480";
  createDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  waitForDeviceTypeAdded(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToAddExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  updateDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  deleteDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToDeleteANonExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeDoesNotExist(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
});

// Story: crud:DeviceType:nondet:1:2
bthread("crud:DeviceType:nondet:1:2", function () {
  let airflow = "airflow_481";
  let comments = "comments_481";
  let custom_fields = {};
  let default_platform = "default_platform_481";
  let description = "description_481";
  let exclude_from_utilization = "exclude_from_utilization_481";
  let front_image = "front_image_481";
  let id = 481;
  let is_full_depth = "is_full_depth_481";
  let manufacturer = "manufacturer_481";
  let model = "model_481";
  let part_number = "part_number_481";
  let rear_image = "rear_image_481";
  let slug = "slug_481";
  let subdevice_role = "subdevice_role_481";
  let tags = "tags_481";
  let u_height = 481;
  let weight = 481;
  let weight_unit = "weight_unit_481";
  createDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToAddExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  updateDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  deleteDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToDeleteANonExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeDoesNotExist(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
});

// Story: crud:DeviceType:nondet:negative:dup-add
bthread("crud:DeviceType:nondet:negative:dup-add", function () {
  let airflow = "airflow_486";
  let comments = "comments_486";
  let custom_fields = {};
  let default_platform = "default_platform_486";
  let description = "description_486";
  let exclude_from_utilization = "exclude_from_utilization_486";
  let front_image = "front_image_486";
  let id = 486;
  let is_full_depth = "is_full_depth_486";
  let manufacturer = "manufacturer_486";
  let model = "model_486";
  let part_number = "part_number_486";
  let rear_image = "rear_image_486";
  let slug = "slug_486";
  let subdevice_role = "subdevice_role_486";
  let tags = "tags_486";
  let u_height = 486;
  let weight = 486;
  let weight_unit = "weight_unit_486";
  createDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToAddExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
});

// Monitor: DeviceType Addition Verification
bthread("monitor:DeviceType:addition", function () {
  while (true) {
    let item = waitForAnyDeviceTypeAdded();
    block(matchDeletedDeviceType(item.airflow, item.comments, item.custom_fields, item.default_platform, item.description, item.exclude_from_utilization, item.front_image, item.id, item.is_full_depth, item.manufacturer, item.model, item.part_number, item.rear_image, item.slug, item.subdevice_role, item.tags, item.u_height, item.weight, item.weight_unit), function () {
      verifyDeviceTypeExists(item.airflow, item.comments, item.custom_fields, item.default_platform, item.description, item.exclude_from_utilization, item.front_image, item.id, item.is_full_depth, item.manufacturer, item.model, item.part_number, item.rear_image, item.slug, item.subdevice_role, item.tags, item.u_height, item.weight, item.weight_unit);
    });
  }
});

// Monitor: DeviceType Deletion Verification
bthread("monitor:DeviceType:deletion", function () {
  while (true) {
    let item = waitForAnyDeviceTypeDeleted();
    block(matchAddedDeviceType(item.airflow, item.comments, item.custom_fields, item.default_platform, item.description, item.exclude_from_utilization, item.front_image, item.id, item.is_full_depth, item.manufacturer, item.model, item.part_number, item.rear_image, item.slug, item.subdevice_role, item.tags, item.u_height, item.weight, item.weight_unit), function () {
      verifyDeviceTypeDoesNotExist(item.airflow, item.comments, item.custom_fields, item.default_platform, item.description, item.exclude_from_utilization, item.front_image, item.id, item.is_full_depth, item.manufacturer, item.model, item.part_number, item.rear_image, item.slug, item.subdevice_role, item.tags, item.u_height, item.weight, item.weight_unit);
    });
  }
});

// Story: crud:Device:nondet:1:1
bthread("crud:Device:nondet:1:1", function () {
  let airflow = "airflow_490";
  let asset_tag = "asset_tag_490";
  let cluster = "cluster_490";
  let comments = "comments_490";
  let config_template = "config_template_490";
  let custom_fields = {};
  let description = "description_490";
  let device_type = "device_type_490";
  let face = "face_490";
  let id = 490;
  let latitude = 490;
  let local_context_data = "local_context_data_490";
  let location = "location_490";
  let longitude = 490;
  let name = "name_490";
  let oob_ip = "oob_ip_490";
  let platform = "platform_490";
  let position = 490;
  let primary_ip4 = "primary_ip4_490";
  let primary_ip6 = "primary_ip6_490";
  let rack = "rack_490";
  let role = "role_490";
  let serial = "serial_490";
  let site = "site_490";
  let status = "status_490";
  let tags = "tags_490";
  let tenant = "tenant_490";
  let vc_position = 490;
  let vc_priority = 490;
  let virtual_chassis = "virtual_chassis_490";
  createDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  waitForDeviceAdded(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToAddExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  updateDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  deleteDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToDeleteANonExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceDoesNotExist(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
});

// Story: crud:Device:nondet:1:2
bthread("crud:Device:nondet:1:2", function () {
  let airflow = "airflow_491";
  let asset_tag = "asset_tag_491";
  let cluster = "cluster_491";
  let comments = "comments_491";
  let config_template = "config_template_491";
  let custom_fields = {};
  let description = "description_491";
  let device_type = "device_type_491";
  let face = "face_491";
  let id = 491;
  let latitude = 491;
  let local_context_data = "local_context_data_491";
  let location = "location_491";
  let longitude = 491;
  let name = "name_491";
  let oob_ip = "oob_ip_491";
  let platform = "platform_491";
  let position = 491;
  let primary_ip4 = "primary_ip4_491";
  let primary_ip6 = "primary_ip6_491";
  let rack = "rack_491";
  let role = "role_491";
  let serial = "serial_491";
  let site = "site_491";
  let status = "status_491";
  let tags = "tags_491";
  let tenant = "tenant_491";
  let vc_position = 491;
  let vc_priority = 491;
  let virtual_chassis = "virtual_chassis_491";
  createDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToAddExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  updateDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  deleteDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToDeleteANonExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceDoesNotExist(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
});

// Story: crud:Device:nondet:negative:dup-add
bthread("crud:Device:nondet:negative:dup-add", function () {
  let airflow = "airflow_496";
  let asset_tag = "asset_tag_496";
  let cluster = "cluster_496";
  let comments = "comments_496";
  let config_template = "config_template_496";
  let custom_fields = {};
  let description = "description_496";
  let device_type = "device_type_496";
  let face = "face_496";
  let id = 496;
  let latitude = 496;
  let local_context_data = "local_context_data_496";
  let location = "location_496";
  let longitude = 496;
  let name = "name_496";
  let oob_ip = "oob_ip_496";
  let platform = "platform_496";
  let position = 496;
  let primary_ip4 = "primary_ip4_496";
  let primary_ip6 = "primary_ip6_496";
  let rack = "rack_496";
  let role = "role_496";
  let serial = "serial_496";
  let site = "site_496";
  let status = "status_496";
  let tags = "tags_496";
  let tenant = "tenant_496";
  let vc_position = 496;
  let vc_priority = 496;
  let virtual_chassis = "virtual_chassis_496";
  createDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToAddExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
});

// Monitor: Device Addition Verification
bthread("monitor:Device:addition", function () {
  while (true) {
    let item = waitForAnyDeviceAdded();
    block(matchDeletedDevice(item.airflow, item.asset_tag, item.cluster, item.comments, item.config_template, item.custom_fields, item.description, item.device_type, item.face, item.id, item.latitude, item.local_context_data, item.location, item.longitude, item.name, item.oob_ip, item.platform, item.position, item.primary_ip4, item.primary_ip6, item.rack, item.role, item.serial, item.site, item.status, item.tags, item.tenant, item.vc_position, item.vc_priority, item.virtual_chassis), function () {
      verifyDeviceExists(item.airflow, item.asset_tag, item.cluster, item.comments, item.config_template, item.custom_fields, item.description, item.device_type, item.face, item.id, item.latitude, item.local_context_data, item.location, item.longitude, item.name, item.oob_ip, item.platform, item.position, item.primary_ip4, item.primary_ip6, item.rack, item.role, item.serial, item.site, item.status, item.tags, item.tenant, item.vc_position, item.vc_priority, item.virtual_chassis);
    });
  }
});

// Monitor: Device Deletion Verification
bthread("monitor:Device:deletion", function () {
  while (true) {
    let item = waitForAnyDeviceDeleted();
    block(matchAddedDevice(item.airflow, item.asset_tag, item.cluster, item.comments, item.config_template, item.custom_fields, item.description, item.device_type, item.face, item.id, item.latitude, item.local_context_data, item.location, item.longitude, item.name, item.oob_ip, item.platform, item.position, item.primary_ip4, item.primary_ip6, item.rack, item.role, item.serial, item.site, item.status, item.tags, item.tenant, item.vc_position, item.vc_priority, item.virtual_chassis), function () {
      verifyDeviceDoesNotExist(item.airflow, item.asset_tag, item.cluster, item.comments, item.config_template, item.custom_fields, item.description, item.device_type, item.face, item.id, item.latitude, item.local_context_data, item.location, item.longitude, item.name, item.oob_ip, item.platform, item.position, item.primary_ip4, item.primary_ip6, item.rack, item.role, item.serial, item.site, item.status, item.tags, item.tenant, item.vc_position, item.vc_priority, item.virtual_chassis);
    });
  }
});

// Story: crud:FrontPortTemplate:nondet:1:1
bthread("crud:FrontPortTemplate:nondet:1:1", function () {
  let color = "color_510";
  let description = "description_510";
  let device_type = "device_type_510";
  let id = 510;
  let label = "label_510";
  let module_type = "module_type_510";
  let name = "name_510";
  let rear_port = "rear_port_510";
  let rear_port_position = 510;
  let type = "type_510";
  createFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  waitForFrontPortTemplateAdded(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToAddExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateExists(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  updateFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  deleteFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToDeleteANonExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
});

// Story: crud:FrontPortTemplate:nondet:1:2
bthread("crud:FrontPortTemplate:nondet:1:2", function () {
  let color = "color_511";
  let description = "description_511";
  let device_type = "device_type_511";
  let id = 511;
  let label = "label_511";
  let module_type = "module_type_511";
  let name = "name_511";
  let rear_port = "rear_port_511";
  let rear_port_position = 511;
  let type = "type_511";
  createFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToAddExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  updateFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateExists(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  deleteFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToDeleteANonExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
});

// Story: crud:FrontPortTemplate:nondet:negative:dup-add
bthread("crud:FrontPortTemplate:nondet:negative:dup-add", function () {
  let color = "color_516";
  let description = "description_516";
  let device_type = "device_type_516";
  let id = 516;
  let label = "label_516";
  let module_type = "module_type_516";
  let name = "name_516";
  let rear_port = "rear_port_516";
  let rear_port_position = 516;
  let type = "type_516";
  createFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateExists(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToAddExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateExists(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
});

// Monitor: FrontPortTemplate Addition Verification
bthread("monitor:FrontPortTemplate:addition", function () {
  while (true) {
    let item = waitForAnyFrontPortTemplateAdded();
    block(matchDeletedFrontPortTemplate(item.color, item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.rear_port, item.rear_port_position, item.type), function () {
      verifyFrontPortTemplateExists(item.color, item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.rear_port, item.rear_port_position, item.type);
    });
  }
});

// Monitor: FrontPortTemplate Deletion Verification
bthread("monitor:FrontPortTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyFrontPortTemplateDeleted();
    block(matchAddedFrontPortTemplate(item.color, item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.rear_port, item.rear_port_position, item.type), function () {
      verifyFrontPortTemplateDoesNotExist(item.color, item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.rear_port, item.rear_port_position, item.type);
    });
  }
});

// Story: crud:FrontPort:nondet:1:1
bthread("crud:FrontPort:nondet:1:1", function () {
  let color = "color_520";
  let custom_fields = {};
  let description = "description_520";
  let device = "device_520";
  let id = 520;
  let label = "label_520";
  let mark_connected = "mark_connected_520";
  let module = "module_520";
  let name = "name_520";
  let rear_port = 520;
  let rear_port_position = 520;
  let tags = "tags_520";
  let type = "type_520";
  createFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  waitForFrontPortAdded(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  updateFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  deleteFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToDeleteANonExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortDoesNotExist(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
});

// Story: crud:FrontPort:nondet:1:2
bthread("crud:FrontPort:nondet:1:2", function () {
  let color = "color_521";
  let custom_fields = {};
  let description = "description_521";
  let device = "device_521";
  let id = 521;
  let label = "label_521";
  let mark_connected = "mark_connected_521";
  let module = "module_521";
  let name = "name_521";
  let rear_port = 521;
  let rear_port_position = 521;
  let tags = "tags_521";
  let type = "type_521";
  createFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  updateFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  deleteFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToDeleteANonExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortDoesNotExist(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
});

// Story: crud:FrontPort:nondet:negative:dup-add
bthread("crud:FrontPort:nondet:negative:dup-add", function () {
  let color = "color_526";
  let custom_fields = {};
  let description = "description_526";
  let device = "device_526";
  let id = 526;
  let label = "label_526";
  let mark_connected = "mark_connected_526";
  let module = "module_526";
  let name = "name_526";
  let rear_port = 526;
  let rear_port_position = 526;
  let tags = "tags_526";
  let type = "type_526";
  createFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
});

// Monitor: FrontPort Addition Verification
bthread("monitor:FrontPort:addition", function () {
  while (true) {
    let item = waitForAnyFrontPortAdded();
    block(matchDeletedFrontPort(item.color, item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.module, item.name, item.rear_port, item.rear_port_position, item.tags, item.type), function () {
      verifyFrontPortExists(item.color, item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.module, item.name, item.rear_port, item.rear_port_position, item.tags, item.type);
    });
  }
});

// Monitor: FrontPort Deletion Verification
bthread("monitor:FrontPort:deletion", function () {
  while (true) {
    let item = waitForAnyFrontPortDeleted();
    block(matchAddedFrontPort(item.color, item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.module, item.name, item.rear_port, item.rear_port_position, item.tags, item.type), function () {
      verifyFrontPortDoesNotExist(item.color, item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.module, item.name, item.rear_port, item.rear_port_position, item.tags, item.type);
    });
  }
});

// Story: crud:InterfaceTemplate:nondet:1:1
bthread("crud:InterfaceTemplate:nondet:1:1", function () {
  let bridge = 540;
  let created_by_request = "created_by_request_540";
  let description = "description_540";
  let device_type = "device_type_540";
  let device_type_id;
  let enabled = "enabled_540";
  let id = 540;
  let label = "label_540";
  let mgmt_only = "mgmt_only_540";
  let modified_by_request = "modified_by_request_540";
  let module_type = "module_type_540";
  let module_type_id;
  let name = "name_540";
  let poe_mode = "poe_mode_540";
  let poe_type = "poe_type_540";
  let rf_role = "rf_role_540";
  let type = "type_540";
  let updated_by_request = "updated_by_request_540";
  // Dependency Barrier
  let deps = {};
  deps["device_type_id"] = matchAnyDeviceAdded();
  deps["module_type_id"] = matchAnyModuleAdded();
  let pkMap = {"device_type_id": "id", "module_type_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  device_type_id = captured["device_type_id"];
  module_type_id = captured["module_type_id"];
  createInterfaceTemplate(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  waitForInterfaceTemplateAdded(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  tryToAddExistingInterfaceTemplate(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  verifyInterfaceTemplateExists(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  updateInterfaceTemplate(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  deleteInterfaceTemplate(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  tryToDeleteANonExistingInterfaceTemplate(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  verifyInterfaceTemplateDoesNotExist(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
});

// Story: crud:InterfaceTemplate:nondet:1:2
bthread("crud:InterfaceTemplate:nondet:1:2", function () {
  let bridge = 541;
  let created_by_request = "created_by_request_541";
  let description = "description_541";
  let device_type = "device_type_541";
  let device_type_id;
  let enabled = "enabled_541";
  let id = 541;
  let label = "label_541";
  let mgmt_only = "mgmt_only_541";
  let modified_by_request = "modified_by_request_541";
  let module_type = "module_type_541";
  let module_type_id;
  let name = "name_541";
  let poe_mode = "poe_mode_541";
  let poe_type = "poe_type_541";
  let rf_role = "rf_role_541";
  let type = "type_541";
  let updated_by_request = "updated_by_request_541";
  // Dependency Barrier
  let deps = {};
  deps["device_type_id"] = matchAnyDeviceAdded();
  deps["module_type_id"] = matchAnyModuleAdded();
  let pkMap = {"device_type_id": "id", "module_type_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  device_type_id = captured["device_type_id"];
  module_type_id = captured["module_type_id"];
  createInterfaceTemplate(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  tryToAddExistingInterfaceTemplate(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  updateInterfaceTemplate(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  verifyInterfaceTemplateExists(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  deleteInterfaceTemplate(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  tryToDeleteANonExistingInterfaceTemplate(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  verifyInterfaceTemplateDoesNotExist(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
});

// Story: crud:InterfaceTemplate:nondet:negative:dup-add
bthread("crud:InterfaceTemplate:nondet:negative:dup-add", function () {
  let bridge = 546;
  let created_by_request = "created_by_request_546";
  let description = "description_546";
  let device_type = "device_type_546";
  let device_type_id;
  let enabled = "enabled_546";
  let id = 546;
  let label = "label_546";
  let mgmt_only = "mgmt_only_546";
  let modified_by_request = "modified_by_request_546";
  let module_type = "module_type_546";
  let module_type_id;
  let name = "name_546";
  let poe_mode = "poe_mode_546";
  let poe_type = "poe_type_546";
  let rf_role = "rf_role_546";
  let type = "type_546";
  let updated_by_request = "updated_by_request_546";
  // Dependency Barrier
  let deps = {};
  deps["device_type_id"] = matchAnyDeviceAdded();
  deps["module_type_id"] = matchAnyModuleAdded();
  let pkMap = {"device_type_id": "id", "module_type_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  device_type_id = captured["device_type_id"];
  module_type_id = captured["module_type_id"];
  createInterfaceTemplate(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  verifyInterfaceTemplateExists(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  tryToAddExistingInterfaceTemplate(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  verifyInterfaceTemplateExists(bridge, created_by_request, description, device_type, device_type_id, enabled, id, label, mgmt_only, modified_by_request, module_type, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
});

// Monitor: InterfaceTemplate Addition Verification
bthread("monitor:InterfaceTemplate:addition", function () {
  while (true) {
    let item = waitForAnyInterfaceTemplateAdded();
    block(matchDeletedInterfaceTemplate(item.bridge, item.created_by_request, item.description, item.device_type, item.device_type_id, item.enabled, item.id, item.label, item.mgmt_only, item.modified_by_request, item.module_type, item.module_type_id, item.name, item.poe_mode, item.poe_type, item.rf_role, item.type, item.updated_by_request), function () {
      verifyInterfaceTemplateExists(item.bridge, item.created_by_request, item.description, item.device_type, item.device_type_id, item.enabled, item.id, item.label, item.mgmt_only, item.modified_by_request, item.module_type, item.module_type_id, item.name, item.poe_mode, item.poe_type, item.rf_role, item.type, item.updated_by_request);
    });
  }
});

// Monitor: InterfaceTemplate Deletion Verification
bthread("monitor:InterfaceTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyInterfaceTemplateDeleted();
    block(matchAddedInterfaceTemplate(item.bridge, item.created_by_request, item.description, item.device_type, item.device_type_id, item.enabled, item.id, item.label, item.mgmt_only, item.modified_by_request, item.module_type, item.module_type_id, item.name, item.poe_mode, item.poe_type, item.rf_role, item.type, item.updated_by_request), function () {
      verifyInterfaceTemplateDoesNotExist(item.bridge, item.created_by_request, item.description, item.device_type, item.device_type_id, item.enabled, item.id, item.label, item.mgmt_only, item.modified_by_request, item.module_type, item.module_type_id, item.name, item.poe_mode, item.poe_type, item.rf_role, item.type, item.updated_by_request);
    });
  }
});

// Story: crud:Interface:nondet:1:1
bthread("crud:Interface:nondet:1:1", function () {
  let bridge = 550;
  let custom_fields = {};
  let description = "description_550";
  let enabled = "enabled_550";
  let id = 550;
  let mode = "mode_550";
  let mtu = 550;
  let name = "name_550";
  let parent = 550;
  let primary_mac_address = "primary_mac_address_550";
  let qinq_svlan = "qinq_svlan_550";
  let tagged_vlans = "tagged_vlans_550";
  let tags = "tags_550";
  let untagged_vlan = "untagged_vlan_550";
  let virtual_machine = "virtual_machine_550";
  let vlan_translation_policy = "vlan_translation_policy_550";
  let vrf = "vrf_550";
  createInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  waitForInterfaceAdded(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  tryToAddExistingInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceExists(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  updateInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  deleteInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  tryToDeleteANonExistingInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceDoesNotExist(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
});

// Story: crud:Interface:nondet:1:2
bthread("crud:Interface:nondet:1:2", function () {
  let bridge = 551;
  let custom_fields = {};
  let description = "description_551";
  let enabled = "enabled_551";
  let id = 551;
  let mode = "mode_551";
  let mtu = 551;
  let name = "name_551";
  let parent = 551;
  let primary_mac_address = "primary_mac_address_551";
  let qinq_svlan = "qinq_svlan_551";
  let tagged_vlans = "tagged_vlans_551";
  let tags = "tags_551";
  let untagged_vlan = "untagged_vlan_551";
  let virtual_machine = "virtual_machine_551";
  let vlan_translation_policy = "vlan_translation_policy_551";
  let vrf = "vrf_551";
  createInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  tryToAddExistingInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  updateInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceExists(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  deleteInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  tryToDeleteANonExistingInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceDoesNotExist(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
});

// Story: crud:Interface:nondet:negative:dup-add
bthread("crud:Interface:nondet:negative:dup-add", function () {
  let bridge = 556;
  let custom_fields = {};
  let description = "description_556";
  let enabled = "enabled_556";
  let id = 556;
  let mode = "mode_556";
  let mtu = 556;
  let name = "name_556";
  let parent = 556;
  let primary_mac_address = "primary_mac_address_556";
  let qinq_svlan = "qinq_svlan_556";
  let tagged_vlans = "tagged_vlans_556";
  let tags = "tags_556";
  let untagged_vlan = "untagged_vlan_556";
  let virtual_machine = "virtual_machine_556";
  let vlan_translation_policy = "vlan_translation_policy_556";
  let vrf = "vrf_556";
  createInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceExists(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  tryToAddExistingInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceExists(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
});

// Monitor: Interface Addition Verification
bthread("monitor:Interface:addition", function () {
  while (true) {
    let item = waitForAnyInterfaceAdded();
    block(matchDeletedInterface(item.bridge, item.custom_fields, item.description, item.enabled, item.id, item.mode, item.mtu, item.name, item.parent, item.primary_mac_address, item.qinq_svlan, item.tagged_vlans, item.tags, item.untagged_vlan, item.virtual_machine, item.vlan_translation_policy, item.vrf), function () {
      verifyInterfaceExists(item.bridge, item.custom_fields, item.description, item.enabled, item.id, item.mode, item.mtu, item.name, item.parent, item.primary_mac_address, item.qinq_svlan, item.tagged_vlans, item.tags, item.untagged_vlan, item.virtual_machine, item.vlan_translation_policy, item.vrf);
    });
  }
});

// Monitor: Interface Deletion Verification
bthread("monitor:Interface:deletion", function () {
  while (true) {
    let item = waitForAnyInterfaceDeleted();
    block(matchAddedInterface(item.bridge, item.custom_fields, item.description, item.enabled, item.id, item.mode, item.mtu, item.name, item.parent, item.primary_mac_address, item.qinq_svlan, item.tagged_vlans, item.tags, item.untagged_vlan, item.virtual_machine, item.vlan_translation_policy, item.vrf), function () {
      verifyInterfaceDoesNotExist(item.bridge, item.custom_fields, item.description, item.enabled, item.id, item.mode, item.mtu, item.name, item.parent, item.primary_mac_address, item.qinq_svlan, item.tagged_vlans, item.tags, item.untagged_vlan, item.virtual_machine, item.vlan_translation_policy, item.vrf);
    });
  }
});

// Story: crud:InventoryItemRole:nondet:1:1
bthread("crud:InventoryItemRole:nondet:1:1", function () {
  let color = "color_560";
  let created_by_request = "created_by_request_560";
  let custom_fields = {};
  let description = "description_560";
  let id = 560;
  let modified_by_request = "modified_by_request_560";
  let name = "name_560";
  let slug = "slug_560";
  let tags = "tags_560";
  let updated_by_request = "updated_by_request_560";
  createInventoryItemRole(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  waitForInventoryItemRoleAdded(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  tryToAddExistingInventoryItemRole(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  verifyInventoryItemRoleExists(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  updateInventoryItemRole(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  deleteInventoryItemRole(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  tryToDeleteANonExistingInventoryItemRole(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  verifyInventoryItemRoleDoesNotExist(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
});

// Story: crud:InventoryItemRole:nondet:1:2
bthread("crud:InventoryItemRole:nondet:1:2", function () {
  let color = "color_561";
  let created_by_request = "created_by_request_561";
  let custom_fields = {};
  let description = "description_561";
  let id = 561;
  let modified_by_request = "modified_by_request_561";
  let name = "name_561";
  let slug = "slug_561";
  let tags = "tags_561";
  let updated_by_request = "updated_by_request_561";
  createInventoryItemRole(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  tryToAddExistingInventoryItemRole(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  updateInventoryItemRole(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  verifyInventoryItemRoleExists(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  deleteInventoryItemRole(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  tryToDeleteANonExistingInventoryItemRole(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  verifyInventoryItemRoleDoesNotExist(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
});

// Story: crud:InventoryItemRole:nondet:negative:dup-add
bthread("crud:InventoryItemRole:nondet:negative:dup-add", function () {
  let color = "color_566";
  let created_by_request = "created_by_request_566";
  let custom_fields = {};
  let description = "description_566";
  let id = 566;
  let modified_by_request = "modified_by_request_566";
  let name = "name_566";
  let slug = "slug_566";
  let tags = "tags_566";
  let updated_by_request = "updated_by_request_566";
  createInventoryItemRole(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  verifyInventoryItemRoleExists(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  tryToAddExistingInventoryItemRole(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
  verifyInventoryItemRoleExists(color, created_by_request, custom_fields, description, id, modified_by_request, name, slug, tags, updated_by_request);
});

// Monitor: InventoryItemRole Addition Verification
bthread("monitor:InventoryItemRole:addition", function () {
  while (true) {
    let item = waitForAnyInventoryItemRoleAdded();
    block(matchDeletedInventoryItemRole(item.color, item.created_by_request, item.custom_fields, item.description, item.id, item.modified_by_request, item.name, item.slug, item.tags, item.updated_by_request), function () {
      verifyInventoryItemRoleExists(item.color, item.created_by_request, item.custom_fields, item.description, item.id, item.modified_by_request, item.name, item.slug, item.tags, item.updated_by_request);
    });
  }
});

// Monitor: InventoryItemRole Deletion Verification
bthread("monitor:InventoryItemRole:deletion", function () {
  while (true) {
    let item = waitForAnyInventoryItemRoleDeleted();
    block(matchAddedInventoryItemRole(item.color, item.created_by_request, item.custom_fields, item.description, item.id, item.modified_by_request, item.name, item.slug, item.tags, item.updated_by_request), function () {
      verifyInventoryItemRoleDoesNotExist(item.color, item.created_by_request, item.custom_fields, item.description, item.id, item.modified_by_request, item.name, item.slug, item.tags, item.updated_by_request);
    });
  }
});

// Story: crud:InventoryItemTemplate:nondet:1:1
bthread("crud:InventoryItemTemplate:nondet:1:1", function () {
  let component_id = 570;
  let component_type = "component_type_570";
  let created_by_request = "created_by_request_570";
  let description = "description_570";
  let device_type = "device_type_570";
  let id = 570;
  let label = "label_570";
  let manufacturer = "manufacturer_570";
  let manufacturer_id;
  let modified_by_request = "modified_by_request_570";
  let name = "name_570";
  let parent = 570;
  let parent_id = 570;
  let part_id = 570;
  let role = "role_570";
  let role_id;
  let updated_by_request = "updated_by_request_570";
  // Dependency Barrier
  let deps = {};
  deps["manufacturer_id"] = matchAnyManufacturerAdded();
  deps["role_id"] = matchAnyRoleAdded();
  let pkMap = {"manufacturer_id": "id", "role_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  manufacturer_id = captured["manufacturer_id"];
  role_id = captured["role_id"];
  createInventoryItemTemplate(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  waitForInventoryItemTemplateAdded(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  tryToAddExistingInventoryItemTemplate(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  verifyInventoryItemTemplateExists(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  updateInventoryItemTemplate(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  deleteInventoryItemTemplate(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  tryToDeleteANonExistingInventoryItemTemplate(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  verifyInventoryItemTemplateDoesNotExist(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
});

// Story: crud:InventoryItemTemplate:nondet:1:2
bthread("crud:InventoryItemTemplate:nondet:1:2", function () {
  let component_id = 571;
  let component_type = "component_type_571";
  let created_by_request = "created_by_request_571";
  let description = "description_571";
  let device_type = "device_type_571";
  let id = 571;
  let label = "label_571";
  let manufacturer = "manufacturer_571";
  let manufacturer_id;
  let modified_by_request = "modified_by_request_571";
  let name = "name_571";
  let parent = 571;
  let parent_id = 571;
  let part_id = 571;
  let role = "role_571";
  let role_id;
  let updated_by_request = "updated_by_request_571";
  // Dependency Barrier
  let deps = {};
  deps["manufacturer_id"] = matchAnyManufacturerAdded();
  deps["role_id"] = matchAnyRoleAdded();
  let pkMap = {"manufacturer_id": "id", "role_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  manufacturer_id = captured["manufacturer_id"];
  role_id = captured["role_id"];
  createInventoryItemTemplate(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  tryToAddExistingInventoryItemTemplate(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  updateInventoryItemTemplate(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  verifyInventoryItemTemplateExists(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  deleteInventoryItemTemplate(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  tryToDeleteANonExistingInventoryItemTemplate(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  verifyInventoryItemTemplateDoesNotExist(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
});

// Story: crud:InventoryItemTemplate:nondet:negative:dup-add
bthread("crud:InventoryItemTemplate:nondet:negative:dup-add", function () {
  let component_id = 576;
  let component_type = "component_type_576";
  let created_by_request = "created_by_request_576";
  let description = "description_576";
  let device_type = "device_type_576";
  let id = 576;
  let label = "label_576";
  let manufacturer = "manufacturer_576";
  let manufacturer_id;
  let modified_by_request = "modified_by_request_576";
  let name = "name_576";
  let parent = 576;
  let parent_id = 576;
  let part_id = 576;
  let role = "role_576";
  let role_id;
  let updated_by_request = "updated_by_request_576";
  // Dependency Barrier
  let deps = {};
  deps["manufacturer_id"] = matchAnyManufacturerAdded();
  deps["role_id"] = matchAnyRoleAdded();
  let pkMap = {"manufacturer_id": "id", "role_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  manufacturer_id = captured["manufacturer_id"];
  role_id = captured["role_id"];
  createInventoryItemTemplate(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  verifyInventoryItemTemplateExists(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  tryToAddExistingInventoryItemTemplate(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
  verifyInventoryItemTemplateExists(component_id, component_type, created_by_request, description, device_type, id, label, manufacturer, manufacturer_id, modified_by_request, name, parent, parent_id, part_id, role, role_id, updated_by_request);
});

// Monitor: InventoryItemTemplate Addition Verification
bthread("monitor:InventoryItemTemplate:addition", function () {
  while (true) {
    let item = waitForAnyInventoryItemTemplateAdded();
    block(matchDeletedInventoryItemTemplate(item.component_id, item.component_type, item.created_by_request, item.description, item.device_type, item.id, item.label, item.manufacturer, item.manufacturer_id, item.modified_by_request, item.name, item.parent, item.parent_id, item.part_id, item.role, item.role_id, item.updated_by_request), function () {
      verifyInventoryItemTemplateExists(item.component_id, item.component_type, item.created_by_request, item.description, item.device_type, item.id, item.label, item.manufacturer, item.manufacturer_id, item.modified_by_request, item.name, item.parent, item.parent_id, item.part_id, item.role, item.role_id, item.updated_by_request);
    });
  }
});

// Monitor: InventoryItemTemplate Deletion Verification
bthread("monitor:InventoryItemTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyInventoryItemTemplateDeleted();
    block(matchAddedInventoryItemTemplate(item.component_id, item.component_type, item.created_by_request, item.description, item.device_type, item.id, item.label, item.manufacturer, item.manufacturer_id, item.modified_by_request, item.name, item.parent, item.parent_id, item.part_id, item.role, item.role_id, item.updated_by_request), function () {
      verifyInventoryItemTemplateDoesNotExist(item.component_id, item.component_type, item.created_by_request, item.description, item.device_type, item.id, item.label, item.manufacturer, item.manufacturer_id, item.modified_by_request, item.name, item.parent, item.parent_id, item.part_id, item.role, item.role_id, item.updated_by_request);
    });
  }
});

// Story: crud:InventoryItem:nondet:1:1
bthread("crud:InventoryItem:nondet:1:1", function () {
  let asset_tag = "asset_tag_580";
  let component_id = 580;
  let component_type = "component_type_580";
  let custom_fields = {};
  let description = "description_580";
  let device = "device_580";
  let discovered = "discovered_580";
  let id = 580;
  let label = "label_580";
  let manufacturer = "manufacturer_580";
  let name = "name_580";
  let parent = 580;
  let part_id = 580;
  let role = "role_580";
  let serial = "serial_580";
  let status = "status_580";
  let tags = "tags_580";
  createInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  waitForInventoryItemAdded(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  tryToAddExistingInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  verifyInventoryItemExists(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  updateInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  deleteInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  tryToDeleteANonExistingInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  verifyInventoryItemDoesNotExist(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
});

// Story: crud:InventoryItem:nondet:1:2
bthread("crud:InventoryItem:nondet:1:2", function () {
  let asset_tag = "asset_tag_581";
  let component_id = 581;
  let component_type = "component_type_581";
  let custom_fields = {};
  let description = "description_581";
  let device = "device_581";
  let discovered = "discovered_581";
  let id = 581;
  let label = "label_581";
  let manufacturer = "manufacturer_581";
  let name = "name_581";
  let parent = 581;
  let part_id = 581;
  let role = "role_581";
  let serial = "serial_581";
  let status = "status_581";
  let tags = "tags_581";
  createInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  tryToAddExistingInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  updateInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  verifyInventoryItemExists(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  deleteInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  tryToDeleteANonExistingInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  verifyInventoryItemDoesNotExist(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
});

// Story: crud:InventoryItem:nondet:negative:dup-add
bthread("crud:InventoryItem:nondet:negative:dup-add", function () {
  let asset_tag = "asset_tag_586";
  let component_id = 586;
  let component_type = "component_type_586";
  let custom_fields = {};
  let description = "description_586";
  let device = "device_586";
  let discovered = "discovered_586";
  let id = 586;
  let label = "label_586";
  let manufacturer = "manufacturer_586";
  let name = "name_586";
  let parent = 586;
  let part_id = 586;
  let role = "role_586";
  let serial = "serial_586";
  let status = "status_586";
  let tags = "tags_586";
  createInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  verifyInventoryItemExists(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  tryToAddExistingInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  verifyInventoryItemExists(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
});

// Monitor: InventoryItem Addition Verification
bthread("monitor:InventoryItem:addition", function () {
  while (true) {
    let item = waitForAnyInventoryItemAdded();
    block(matchDeletedInventoryItem(item.asset_tag, item.component_id, item.component_type, item.custom_fields, item.description, item.device, item.discovered, item.id, item.label, item.manufacturer, item.name, item.parent, item.part_id, item.role, item.serial, item.status, item.tags), function () {
      verifyInventoryItemExists(item.asset_tag, item.component_id, item.component_type, item.custom_fields, item.description, item.device, item.discovered, item.id, item.label, item.manufacturer, item.name, item.parent, item.part_id, item.role, item.serial, item.status, item.tags);
    });
  }
});

// Monitor: InventoryItem Deletion Verification
bthread("monitor:InventoryItem:deletion", function () {
  while (true) {
    let item = waitForAnyInventoryItemDeleted();
    block(matchAddedInventoryItem(item.asset_tag, item.component_id, item.component_type, item.custom_fields, item.description, item.device, item.discovered, item.id, item.label, item.manufacturer, item.name, item.parent, item.part_id, item.role, item.serial, item.status, item.tags), function () {
      verifyInventoryItemDoesNotExist(item.asset_tag, item.component_id, item.component_type, item.custom_fields, item.description, item.device, item.discovered, item.id, item.label, item.manufacturer, item.name, item.parent, item.part_id, item.role, item.serial, item.status, item.tags);
    });
  }
});

// Story: crud:Location:nondet:1:1
bthread("crud:Location:nondet:1:1", function () {
  let comments = "comments_590";
  let custom_fields = {};
  let description = "description_590";
  let facility = "facility_590";
  let id = 590;
  let name = "name_590";
  let parent = 590;
  let site = "site_590";
  let slug = "slug_590";
  let status = "status_590";
  let tags = "tags_590";
  let tenant = "tenant_590";
  createLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  waitForLocationAdded(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  tryToAddExistingLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  verifyLocationExists(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  updateLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  deleteLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  tryToDeleteANonExistingLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  verifyLocationDoesNotExist(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
});

// Story: crud:Location:nondet:1:2
bthread("crud:Location:nondet:1:2", function () {
  let comments = "comments_591";
  let custom_fields = {};
  let description = "description_591";
  let facility = "facility_591";
  let id = 591;
  let name = "name_591";
  let parent = 591;
  let site = "site_591";
  let slug = "slug_591";
  let status = "status_591";
  let tags = "tags_591";
  let tenant = "tenant_591";
  createLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  tryToAddExistingLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  updateLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  verifyLocationExists(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  deleteLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  tryToDeleteANonExistingLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  verifyLocationDoesNotExist(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
});

// Story: crud:Location:nondet:negative:dup-add
bthread("crud:Location:nondet:negative:dup-add", function () {
  let comments = "comments_596";
  let custom_fields = {};
  let description = "description_596";
  let facility = "facility_596";
  let id = 596;
  let name = "name_596";
  let parent = 596;
  let site = "site_596";
  let slug = "slug_596";
  let status = "status_596";
  let tags = "tags_596";
  let tenant = "tenant_596";
  createLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  verifyLocationExists(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  tryToAddExistingLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  verifyLocationExists(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
});

// Monitor: Location Addition Verification
bthread("monitor:Location:addition", function () {
  while (true) {
    let item = waitForAnyLocationAdded();
    block(matchDeletedLocation(item.comments, item.custom_fields, item.description, item.facility, item.id, item.name, item.parent, item.site, item.slug, item.status, item.tags, item.tenant), function () {
      verifyLocationExists(item.comments, item.custom_fields, item.description, item.facility, item.id, item.name, item.parent, item.site, item.slug, item.status, item.tags, item.tenant);
    });
  }
});

// Monitor: Location Deletion Verification
bthread("monitor:Location:deletion", function () {
  while (true) {
    let item = waitForAnyLocationDeleted();
    block(matchAddedLocation(item.comments, item.custom_fields, item.description, item.facility, item.id, item.name, item.parent, item.site, item.slug, item.status, item.tags, item.tenant), function () {
      verifyLocationDoesNotExist(item.comments, item.custom_fields, item.description, item.facility, item.id, item.name, item.parent, item.site, item.slug, item.status, item.tags, item.tenant);
    });
  }
});

// Story: crud:MACAddress:nondet:1:1
bthread("crud:MACAddress:nondet:1:1", function () {
  let assigned_object_id = 600;
  let assigned_object_type = "assigned_object_type_600";
  let comments = "comments_600";
  let custom_fields = {};
  let description = "description_600";
  let id = 600;
  let mac_address = "mac_address_600";
  let tags = "tags_600";
  createMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  waitForMACAddressAdded(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  tryToAddExistingMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  verifyMACAddressExists(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  updateMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  deleteMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  tryToDeleteANonExistingMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  verifyMACAddressDoesNotExist(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
});

// Story: crud:MACAddress:nondet:1:2
bthread("crud:MACAddress:nondet:1:2", function () {
  let assigned_object_id = 601;
  let assigned_object_type = "assigned_object_type_601";
  let comments = "comments_601";
  let custom_fields = {};
  let description = "description_601";
  let id = 601;
  let mac_address = "mac_address_601";
  let tags = "tags_601";
  createMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  tryToAddExistingMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  updateMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  verifyMACAddressExists(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  deleteMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  tryToDeleteANonExistingMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  verifyMACAddressDoesNotExist(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
});

// Story: crud:MACAddress:nondet:negative:dup-add
bthread("crud:MACAddress:nondet:negative:dup-add", function () {
  let assigned_object_id = 606;
  let assigned_object_type = "assigned_object_type_606";
  let comments = "comments_606";
  let custom_fields = {};
  let description = "description_606";
  let id = 606;
  let mac_address = "mac_address_606";
  let tags = "tags_606";
  createMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  verifyMACAddressExists(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  tryToAddExistingMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  verifyMACAddressExists(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
});

// Monitor: MACAddress Addition Verification
bthread("monitor:MACAddress:addition", function () {
  while (true) {
    let item = waitForAnyMACAddressAdded();
    block(matchDeletedMACAddress(item.assigned_object_id, item.assigned_object_type, item.comments, item.custom_fields, item.description, item.id, item.mac_address, item.tags), function () {
      verifyMACAddressExists(item.assigned_object_id, item.assigned_object_type, item.comments, item.custom_fields, item.description, item.id, item.mac_address, item.tags);
    });
  }
});

// Monitor: MACAddress Deletion Verification
bthread("monitor:MACAddress:deletion", function () {
  while (true) {
    let item = waitForAnyMACAddressDeleted();
    block(matchAddedMACAddress(item.assigned_object_id, item.assigned_object_type, item.comments, item.custom_fields, item.description, item.id, item.mac_address, item.tags), function () {
      verifyMACAddressDoesNotExist(item.assigned_object_id, item.assigned_object_type, item.comments, item.custom_fields, item.description, item.id, item.mac_address, item.tags);
    });
  }
});

// Story: crud:Manufacturer:nondet:1:1
bthread("crud:Manufacturer:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_610";
  let id = 610;
  let name = "name_610";
  let slug = "slug_610";
  let tags = "tags_610";
  createManufacturer(custom_fields, description, id, name, slug, tags);
  waitForManufacturerAdded(custom_fields, description, id, name, slug, tags);
  tryToAddExistingManufacturer(custom_fields, description, id, name, slug, tags);
  verifyManufacturerExists(custom_fields, description, id, name, slug, tags);
  updateManufacturer(custom_fields, description, id, name, slug, tags);
  deleteManufacturer(custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingManufacturer(custom_fields, description, id, name, slug, tags);
  verifyManufacturerDoesNotExist(custom_fields, description, id, name, slug, tags);
});

// Story: crud:Manufacturer:nondet:1:2
bthread("crud:Manufacturer:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_611";
  let id = 611;
  let name = "name_611";
  let slug = "slug_611";
  let tags = "tags_611";
  createManufacturer(custom_fields, description, id, name, slug, tags);
  tryToAddExistingManufacturer(custom_fields, description, id, name, slug, tags);
  updateManufacturer(custom_fields, description, id, name, slug, tags);
  verifyManufacturerExists(custom_fields, description, id, name, slug, tags);
  deleteManufacturer(custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingManufacturer(custom_fields, description, id, name, slug, tags);
  verifyManufacturerDoesNotExist(custom_fields, description, id, name, slug, tags);
});

// Story: crud:Manufacturer:nondet:negative:dup-add
bthread("crud:Manufacturer:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_616";
  let id = 616;
  let name = "name_616";
  let slug = "slug_616";
  let tags = "tags_616";
  createManufacturer(custom_fields, description, id, name, slug, tags);
  verifyManufacturerExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingManufacturer(custom_fields, description, id, name, slug, tags);
  verifyManufacturerExists(custom_fields, description, id, name, slug, tags);
});

// Monitor: Manufacturer Addition Verification
bthread("monitor:Manufacturer:addition", function () {
  while (true) {
    let item = waitForAnyManufacturerAdded();
    block(matchDeletedManufacturer(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyManufacturerExists(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Monitor: Manufacturer Deletion Verification
bthread("monitor:Manufacturer:deletion", function () {
  while (true) {
    let item = waitForAnyManufacturerDeleted();
    block(matchAddedManufacturer(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyManufacturerDoesNotExist(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Story: crud:ModuleBayTemplate:nondet:1:1
bthread("crud:ModuleBayTemplate:nondet:1:1", function () {
  let description = "description_620";
  let device_type = "device_type_620";
  let id = 620;
  let label = "label_620";
  let module_type = "module_type_620";
  let name = "name_620";
  let position = "position_620";
  createModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  waitForModuleBayTemplateAdded(description, device_type, id, label, module_type, name, position);
  tryToAddExistingModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  verifyModuleBayTemplateExists(description, device_type, id, label, module_type, name, position);
  updateModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  deleteModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  tryToDeleteANonExistingModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  verifyModuleBayTemplateDoesNotExist(description, device_type, id, label, module_type, name, position);
});

// Story: crud:ModuleBayTemplate:nondet:1:2
bthread("crud:ModuleBayTemplate:nondet:1:2", function () {
  let description = "description_621";
  let device_type = "device_type_621";
  let id = 621;
  let label = "label_621";
  let module_type = "module_type_621";
  let name = "name_621";
  let position = "position_621";
  createModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  tryToAddExistingModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  updateModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  verifyModuleBayTemplateExists(description, device_type, id, label, module_type, name, position);
  deleteModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  tryToDeleteANonExistingModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  verifyModuleBayTemplateDoesNotExist(description, device_type, id, label, module_type, name, position);
});

// Story: crud:ModuleBayTemplate:nondet:negative:dup-add
bthread("crud:ModuleBayTemplate:nondet:negative:dup-add", function () {
  let description = "description_626";
  let device_type = "device_type_626";
  let id = 626;
  let label = "label_626";
  let module_type = "module_type_626";
  let name = "name_626";
  let position = "position_626";
  createModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  verifyModuleBayTemplateExists(description, device_type, id, label, module_type, name, position);
  tryToAddExistingModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  verifyModuleBayTemplateExists(description, device_type, id, label, module_type, name, position);
});

// Monitor: ModuleBayTemplate Addition Verification
bthread("monitor:ModuleBayTemplate:addition", function () {
  while (true) {
    let item = waitForAnyModuleBayTemplateAdded();
    block(matchDeletedModuleBayTemplate(item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.position), function () {
      verifyModuleBayTemplateExists(item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.position);
    });
  }
});

// Monitor: ModuleBayTemplate Deletion Verification
bthread("monitor:ModuleBayTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyModuleBayTemplateDeleted();
    block(matchAddedModuleBayTemplate(item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.position), function () {
      verifyModuleBayTemplateDoesNotExist(item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.position);
    });
  }
});

// Story: crud:ModuleBay:nondet:1:1
bthread("crud:ModuleBay:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_630";
  let device = "device_630";
  let id = 630;
  let installed_module = "installed_module_630";
  let label = "label_630";
  let module = "module_630";
  let name = "name_630";
  let position = "position_630";
  let tags = "tags_630";
  createModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  waitForModuleBayAdded(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  tryToAddExistingModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  verifyModuleBayExists(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  updateModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  deleteModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  tryToDeleteANonExistingModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  verifyModuleBayDoesNotExist(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
});

// Story: crud:ModuleBay:nondet:1:2
bthread("crud:ModuleBay:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_631";
  let device = "device_631";
  let id = 631;
  let installed_module = "installed_module_631";
  let label = "label_631";
  let module = "module_631";
  let name = "name_631";
  let position = "position_631";
  let tags = "tags_631";
  createModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  tryToAddExistingModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  updateModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  verifyModuleBayExists(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  deleteModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  tryToDeleteANonExistingModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  verifyModuleBayDoesNotExist(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
});

// Story: crud:ModuleBay:nondet:negative:dup-add
bthread("crud:ModuleBay:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_636";
  let device = "device_636";
  let id = 636;
  let installed_module = "installed_module_636";
  let label = "label_636";
  let module = "module_636";
  let name = "name_636";
  let position = "position_636";
  let tags = "tags_636";
  createModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  verifyModuleBayExists(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  tryToAddExistingModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  verifyModuleBayExists(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
});

// Monitor: ModuleBay Addition Verification
bthread("monitor:ModuleBay:addition", function () {
  while (true) {
    let item = waitForAnyModuleBayAdded();
    block(matchDeletedModuleBay(item.custom_fields, item.description, item.device, item.id, item.installed_module, item.label, item.module, item.name, item.position, item.tags), function () {
      verifyModuleBayExists(item.custom_fields, item.description, item.device, item.id, item.installed_module, item.label, item.module, item.name, item.position, item.tags);
    });
  }
});

// Monitor: ModuleBay Deletion Verification
bthread("monitor:ModuleBay:deletion", function () {
  while (true) {
    let item = waitForAnyModuleBayDeleted();
    block(matchAddedModuleBay(item.custom_fields, item.description, item.device, item.id, item.installed_module, item.label, item.module, item.name, item.position, item.tags), function () {
      verifyModuleBayDoesNotExist(item.custom_fields, item.description, item.device, item.id, item.installed_module, item.label, item.module, item.name, item.position, item.tags);
    });
  }
});

// Story: crud:ModuleTypeProfile:nondet:1:1
bthread("crud:ModuleTypeProfile:nondet:1:1", function () {
  let comments = "comments_640";
  let custom_fields = {};
  let description = "description_640";
  let id = 640;
  let name = "name_640";
  let schema = "schema_640";
  let tags = "tags_640";
  createModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  waitForModuleTypeProfileAdded(comments, custom_fields, description, id, name, schema, tags);
  tryToAddExistingModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  verifyModuleTypeProfileExists(comments, custom_fields, description, id, name, schema, tags);
  updateModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  deleteModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  tryToDeleteANonExistingModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  verifyModuleTypeProfileDoesNotExist(comments, custom_fields, description, id, name, schema, tags);
});

// Story: crud:ModuleTypeProfile:nondet:1:2
bthread("crud:ModuleTypeProfile:nondet:1:2", function () {
  let comments = "comments_641";
  let custom_fields = {};
  let description = "description_641";
  let id = 641;
  let name = "name_641";
  let schema = "schema_641";
  let tags = "tags_641";
  createModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  tryToAddExistingModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  updateModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  verifyModuleTypeProfileExists(comments, custom_fields, description, id, name, schema, tags);
  deleteModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  tryToDeleteANonExistingModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  verifyModuleTypeProfileDoesNotExist(comments, custom_fields, description, id, name, schema, tags);
});

// Story: crud:ModuleTypeProfile:nondet:negative:dup-add
bthread("crud:ModuleTypeProfile:nondet:negative:dup-add", function () {
  let comments = "comments_646";
  let custom_fields = {};
  let description = "description_646";
  let id = 646;
  let name = "name_646";
  let schema = "schema_646";
  let tags = "tags_646";
  createModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  verifyModuleTypeProfileExists(comments, custom_fields, description, id, name, schema, tags);
  tryToAddExistingModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  verifyModuleTypeProfileExists(comments, custom_fields, description, id, name, schema, tags);
});

// Monitor: ModuleTypeProfile Addition Verification
bthread("monitor:ModuleTypeProfile:addition", function () {
  while (true) {
    let item = waitForAnyModuleTypeProfileAdded();
    block(matchDeletedModuleTypeProfile(item.comments, item.custom_fields, item.description, item.id, item.name, item.schema, item.tags), function () {
      verifyModuleTypeProfileExists(item.comments, item.custom_fields, item.description, item.id, item.name, item.schema, item.tags);
    });
  }
});

// Monitor: ModuleTypeProfile Deletion Verification
bthread("monitor:ModuleTypeProfile:deletion", function () {
  while (true) {
    let item = waitForAnyModuleTypeProfileDeleted();
    block(matchAddedModuleTypeProfile(item.comments, item.custom_fields, item.description, item.id, item.name, item.schema, item.tags), function () {
      verifyModuleTypeProfileDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.name, item.schema, item.tags);
    });
  }
});

// Story: crud:ModuleType:nondet:1:1
bthread("crud:ModuleType:nondet:1:1", function () {
  let airflow = "airflow_650";
  let attributes = "attributes_650";
  let comments = "comments_650";
  let custom_fields = {};
  let description = "description_650";
  let id = 650;
  let manufacturer = "manufacturer_650";
  let model = "model_650";
  let part_number = "part_number_650";
  let profile = "profile_650";
  let tags = "tags_650";
  let weight = 650;
  let weight_unit = "weight_unit_650";
  createModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  waitForModuleTypeAdded(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  tryToAddExistingModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  verifyModuleTypeExists(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  updateModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  deleteModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  tryToDeleteANonExistingModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  verifyModuleTypeDoesNotExist(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
});

// Story: crud:ModuleType:nondet:1:2
bthread("crud:ModuleType:nondet:1:2", function () {
  let airflow = "airflow_651";
  let attributes = "attributes_651";
  let comments = "comments_651";
  let custom_fields = {};
  let description = "description_651";
  let id = 651;
  let manufacturer = "manufacturer_651";
  let model = "model_651";
  let part_number = "part_number_651";
  let profile = "profile_651";
  let tags = "tags_651";
  let weight = 651;
  let weight_unit = "weight_unit_651";
  createModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  tryToAddExistingModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  updateModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  verifyModuleTypeExists(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  deleteModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  tryToDeleteANonExistingModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  verifyModuleTypeDoesNotExist(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
});

// Story: crud:ModuleType:nondet:negative:dup-add
bthread("crud:ModuleType:nondet:negative:dup-add", function () {
  let airflow = "airflow_656";
  let attributes = "attributes_656";
  let comments = "comments_656";
  let custom_fields = {};
  let description = "description_656";
  let id = 656;
  let manufacturer = "manufacturer_656";
  let model = "model_656";
  let part_number = "part_number_656";
  let profile = "profile_656";
  let tags = "tags_656";
  let weight = 656;
  let weight_unit = "weight_unit_656";
  createModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  verifyModuleTypeExists(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  tryToAddExistingModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  verifyModuleTypeExists(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
});

// Monitor: ModuleType Addition Verification
bthread("monitor:ModuleType:addition", function () {
  while (true) {
    let item = waitForAnyModuleTypeAdded();
    block(matchDeletedModuleType(item.airflow, item.attributes, item.comments, item.custom_fields, item.description, item.id, item.manufacturer, item.model, item.part_number, item.profile, item.tags, item.weight, item.weight_unit), function () {
      verifyModuleTypeExists(item.airflow, item.attributes, item.comments, item.custom_fields, item.description, item.id, item.manufacturer, item.model, item.part_number, item.profile, item.tags, item.weight, item.weight_unit);
    });
  }
});

// Monitor: ModuleType Deletion Verification
bthread("monitor:ModuleType:deletion", function () {
  while (true) {
    let item = waitForAnyModuleTypeDeleted();
    block(matchAddedModuleType(item.airflow, item.attributes, item.comments, item.custom_fields, item.description, item.id, item.manufacturer, item.model, item.part_number, item.profile, item.tags, item.weight, item.weight_unit), function () {
      verifyModuleTypeDoesNotExist(item.airflow, item.attributes, item.comments, item.custom_fields, item.description, item.id, item.manufacturer, item.model, item.part_number, item.profile, item.tags, item.weight, item.weight_unit);
    });
  }
});

// Story: crud:Module:nondet:1:1
bthread("crud:Module:nondet:1:1", function () {
  let asset_tag = "asset_tag_660";
  let comments = "comments_660";
  let custom_fields = {};
  let description = "description_660";
  let device = "device_660";
  let id = 660;
  let module_bay = 660;
  let module_type = "module_type_660";
  let serial = "serial_660";
  let status = "status_660";
  let tags = "tags_660";
  createModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  waitForModuleAdded(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  tryToAddExistingModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  verifyModuleExists(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  updateModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  deleteModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  tryToDeleteANonExistingModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  verifyModuleDoesNotExist(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
});

// Story: crud:Module:nondet:1:2
bthread("crud:Module:nondet:1:2", function () {
  let asset_tag = "asset_tag_661";
  let comments = "comments_661";
  let custom_fields = {};
  let description = "description_661";
  let device = "device_661";
  let id = 661;
  let module_bay = 661;
  let module_type = "module_type_661";
  let serial = "serial_661";
  let status = "status_661";
  let tags = "tags_661";
  createModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  tryToAddExistingModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  updateModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  verifyModuleExists(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  deleteModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  tryToDeleteANonExistingModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  verifyModuleDoesNotExist(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
});

// Story: crud:Module:nondet:negative:dup-add
bthread("crud:Module:nondet:negative:dup-add", function () {
  let asset_tag = "asset_tag_666";
  let comments = "comments_666";
  let custom_fields = {};
  let description = "description_666";
  let device = "device_666";
  let id = 666;
  let module_bay = 666;
  let module_type = "module_type_666";
  let serial = "serial_666";
  let status = "status_666";
  let tags = "tags_666";
  createModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  verifyModuleExists(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  tryToAddExistingModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  verifyModuleExists(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
});

// Monitor: Module Addition Verification
bthread("monitor:Module:addition", function () {
  while (true) {
    let item = waitForAnyModuleAdded();
    block(matchDeletedModule(item.asset_tag, item.comments, item.custom_fields, item.description, item.device, item.id, item.module_bay, item.module_type, item.serial, item.status, item.tags), function () {
      verifyModuleExists(item.asset_tag, item.comments, item.custom_fields, item.description, item.device, item.id, item.module_bay, item.module_type, item.serial, item.status, item.tags);
    });
  }
});

// Monitor: Module Deletion Verification
bthread("monitor:Module:deletion", function () {
  while (true) {
    let item = waitForAnyModuleDeleted();
    block(matchAddedModule(item.asset_tag, item.comments, item.custom_fields, item.description, item.device, item.id, item.module_bay, item.module_type, item.serial, item.status, item.tags), function () {
      verifyModuleDoesNotExist(item.asset_tag, item.comments, item.custom_fields, item.description, item.device, item.id, item.module_bay, item.module_type, item.serial, item.status, item.tags);
    });
  }
});

// Story: crud:Platform:nondet:1:1
bthread("crud:Platform:nondet:1:1", function () {
  let comments = "comments_670";
  let config_template = "config_template_670";
  let custom_fields = {};
  let description = "description_670";
  let id = 670;
  let manufacturer = "manufacturer_670";
  let name = "name_670";
  let parent = 670;
  let slug = "slug_670";
  let tags = "tags_670";
  createPlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  waitForPlatformAdded(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  tryToAddExistingPlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  verifyPlatformExists(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  updatePlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  deletePlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  tryToDeleteANonExistingPlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  verifyPlatformDoesNotExist(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
});

// Story: crud:Platform:nondet:1:2
bthread("crud:Platform:nondet:1:2", function () {
  let comments = "comments_671";
  let config_template = "config_template_671";
  let custom_fields = {};
  let description = "description_671";
  let id = 671;
  let manufacturer = "manufacturer_671";
  let name = "name_671";
  let parent = 671;
  let slug = "slug_671";
  let tags = "tags_671";
  createPlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  tryToAddExistingPlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  updatePlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  verifyPlatformExists(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  deletePlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  tryToDeleteANonExistingPlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  verifyPlatformDoesNotExist(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
});

// Story: crud:Platform:nondet:negative:dup-add
bthread("crud:Platform:nondet:negative:dup-add", function () {
  let comments = "comments_676";
  let config_template = "config_template_676";
  let custom_fields = {};
  let description = "description_676";
  let id = 676;
  let manufacturer = "manufacturer_676";
  let name = "name_676";
  let parent = 676;
  let slug = "slug_676";
  let tags = "tags_676";
  createPlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  verifyPlatformExists(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  tryToAddExistingPlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  verifyPlatformExists(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
});

// Monitor: Platform Addition Verification
bthread("monitor:Platform:addition", function () {
  while (true) {
    let item = waitForAnyPlatformAdded();
    block(matchDeletedPlatform(item.comments, item.config_template, item.custom_fields, item.description, item.id, item.manufacturer, item.name, item.parent, item.slug, item.tags), function () {
      verifyPlatformExists(item.comments, item.config_template, item.custom_fields, item.description, item.id, item.manufacturer, item.name, item.parent, item.slug, item.tags);
    });
  }
});

// Monitor: Platform Deletion Verification
bthread("monitor:Platform:deletion", function () {
  while (true) {
    let item = waitForAnyPlatformDeleted();
    block(matchAddedPlatform(item.comments, item.config_template, item.custom_fields, item.description, item.id, item.manufacturer, item.name, item.parent, item.slug, item.tags), function () {
      verifyPlatformDoesNotExist(item.comments, item.config_template, item.custom_fields, item.description, item.id, item.manufacturer, item.name, item.parent, item.slug, item.tags);
    });
  }
});

// Story: crud:PowerFeed:nondet:1:1
bthread("crud:PowerFeed:nondet:1:1", function () {
  let amperage = 680;
  let comments = "comments_680";
  let custom_fields = {};
  let description = "description_680";
  let id = 680;
  let mark_connected = "mark_connected_680";
  let max_utilization = 680;
  let name = "name_680";
  let phase = "phase_680";
  let power_panel = "power_panel_680";
  let rack = "rack_680";
  let status = "status_680";
  let supply = "supply_680";
  let tags = "tags_680";
  let tenant = "tenant_680";
  let type = "type_680";
  let voltage = 680;
  createPowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  waitForPowerFeedAdded(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  tryToAddExistingPowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  verifyPowerFeedExists(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  updatePowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  deletePowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  tryToDeleteANonExistingPowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  verifyPowerFeedDoesNotExist(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
});

// Story: crud:PowerFeed:nondet:1:2
bthread("crud:PowerFeed:nondet:1:2", function () {
  let amperage = 681;
  let comments = "comments_681";
  let custom_fields = {};
  let description = "description_681";
  let id = 681;
  let mark_connected = "mark_connected_681";
  let max_utilization = 681;
  let name = "name_681";
  let phase = "phase_681";
  let power_panel = "power_panel_681";
  let rack = "rack_681";
  let status = "status_681";
  let supply = "supply_681";
  let tags = "tags_681";
  let tenant = "tenant_681";
  let type = "type_681";
  let voltage = 681;
  createPowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  tryToAddExistingPowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  updatePowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  verifyPowerFeedExists(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  deletePowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  tryToDeleteANonExistingPowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  verifyPowerFeedDoesNotExist(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
});

// Story: crud:PowerFeed:nondet:negative:dup-add
bthread("crud:PowerFeed:nondet:negative:dup-add", function () {
  let amperage = 686;
  let comments = "comments_686";
  let custom_fields = {};
  let description = "description_686";
  let id = 686;
  let mark_connected = "mark_connected_686";
  let max_utilization = 686;
  let name = "name_686";
  let phase = "phase_686";
  let power_panel = "power_panel_686";
  let rack = "rack_686";
  let status = "status_686";
  let supply = "supply_686";
  let tags = "tags_686";
  let tenant = "tenant_686";
  let type = "type_686";
  let voltage = 686;
  createPowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  verifyPowerFeedExists(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  tryToAddExistingPowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  verifyPowerFeedExists(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
});

// Monitor: PowerFeed Addition Verification
bthread("monitor:PowerFeed:addition", function () {
  while (true) {
    let item = waitForAnyPowerFeedAdded();
    block(matchDeletedPowerFeed(item.amperage, item.comments, item.custom_fields, item.description, item.id, item.mark_connected, item.max_utilization, item.name, item.phase, item.power_panel, item.rack, item.status, item.supply, item.tags, item.tenant, item.type, item.voltage), function () {
      verifyPowerFeedExists(item.amperage, item.comments, item.custom_fields, item.description, item.id, item.mark_connected, item.max_utilization, item.name, item.phase, item.power_panel, item.rack, item.status, item.supply, item.tags, item.tenant, item.type, item.voltage);
    });
  }
});

// Monitor: PowerFeed Deletion Verification
bthread("monitor:PowerFeed:deletion", function () {
  while (true) {
    let item = waitForAnyPowerFeedDeleted();
    block(matchAddedPowerFeed(item.amperage, item.comments, item.custom_fields, item.description, item.id, item.mark_connected, item.max_utilization, item.name, item.phase, item.power_panel, item.rack, item.status, item.supply, item.tags, item.tenant, item.type, item.voltage), function () {
      verifyPowerFeedDoesNotExist(item.amperage, item.comments, item.custom_fields, item.description, item.id, item.mark_connected, item.max_utilization, item.name, item.phase, item.power_panel, item.rack, item.status, item.supply, item.tags, item.tenant, item.type, item.voltage);
    });
  }
});

// Story: crud:PowerOutletTemplate:nondet:1:1
bthread("crud:PowerOutletTemplate:nondet:1:1", function () {
  let description = "description_690";
  let device_type = "device_type_690";
  let feed_leg = "feed_leg_690";
  let id = 690;
  let label = "label_690";
  let module_type = "module_type_690";
  let name = "name_690";
  let power_port = "power_port_690";
  let type = "type_690";
  createPowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  waitForPowerOutletTemplateAdded(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  tryToAddExistingPowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  verifyPowerOutletTemplateExists(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  updatePowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  deletePowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  tryToDeleteANonExistingPowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  verifyPowerOutletTemplateDoesNotExist(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
});

// Story: crud:PowerOutletTemplate:nondet:1:2
bthread("crud:PowerOutletTemplate:nondet:1:2", function () {
  let description = "description_691";
  let device_type = "device_type_691";
  let feed_leg = "feed_leg_691";
  let id = 691;
  let label = "label_691";
  let module_type = "module_type_691";
  let name = "name_691";
  let power_port = "power_port_691";
  let type = "type_691";
  createPowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  tryToAddExistingPowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  updatePowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  verifyPowerOutletTemplateExists(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  deletePowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  tryToDeleteANonExistingPowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  verifyPowerOutletTemplateDoesNotExist(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
});

// Story: crud:PowerOutletTemplate:nondet:negative:dup-add
bthread("crud:PowerOutletTemplate:nondet:negative:dup-add", function () {
  let description = "description_696";
  let device_type = "device_type_696";
  let feed_leg = "feed_leg_696";
  let id = 696;
  let label = "label_696";
  let module_type = "module_type_696";
  let name = "name_696";
  let power_port = "power_port_696";
  let type = "type_696";
  createPowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  verifyPowerOutletTemplateExists(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  tryToAddExistingPowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  verifyPowerOutletTemplateExists(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
});

// Monitor: PowerOutletTemplate Addition Verification
bthread("monitor:PowerOutletTemplate:addition", function () {
  while (true) {
    let item = waitForAnyPowerOutletTemplateAdded();
    block(matchDeletedPowerOutletTemplate(item.description, item.device_type, item.feed_leg, item.id, item.label, item.module_type, item.name, item.power_port, item.type), function () {
      verifyPowerOutletTemplateExists(item.description, item.device_type, item.feed_leg, item.id, item.label, item.module_type, item.name, item.power_port, item.type);
    });
  }
});

// Monitor: PowerOutletTemplate Deletion Verification
bthread("monitor:PowerOutletTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyPowerOutletTemplateDeleted();
    block(matchAddedPowerOutletTemplate(item.description, item.device_type, item.feed_leg, item.id, item.label, item.module_type, item.name, item.power_port, item.type), function () {
      verifyPowerOutletTemplateDoesNotExist(item.description, item.device_type, item.feed_leg, item.id, item.label, item.module_type, item.name, item.power_port, item.type);
    });
  }
});

// Story: crud:PowerOutlet:nondet:1:1
bthread("crud:PowerOutlet:nondet:1:1", function () {
  let color = "color_700";
  let custom_fields = {};
  let description = "description_700";
  let device = "device_700";
  let feed_leg = "feed_leg_700";
  let id = 700;
  let label = "label_700";
  let mark_connected = "mark_connected_700";
  let module = "module_700";
  let name = "name_700";
  let power_port = "power_port_700";
  let status = "status_700";
  let tags = "tags_700";
  let type = "type_700";
  createPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  waitForPowerOutletAdded(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  tryToAddExistingPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  verifyPowerOutletExists(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  updatePowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  deletePowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  tryToDeleteANonExistingPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  verifyPowerOutletDoesNotExist(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
});

// Story: crud:PowerOutlet:nondet:1:2
bthread("crud:PowerOutlet:nondet:1:2", function () {
  let color = "color_701";
  let custom_fields = {};
  let description = "description_701";
  let device = "device_701";
  let feed_leg = "feed_leg_701";
  let id = 701;
  let label = "label_701";
  let mark_connected = "mark_connected_701";
  let module = "module_701";
  let name = "name_701";
  let power_port = "power_port_701";
  let status = "status_701";
  let tags = "tags_701";
  let type = "type_701";
  createPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  tryToAddExistingPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  updatePowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  verifyPowerOutletExists(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  deletePowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  tryToDeleteANonExistingPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  verifyPowerOutletDoesNotExist(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
});

// Story: crud:PowerOutlet:nondet:negative:dup-add
bthread("crud:PowerOutlet:nondet:negative:dup-add", function () {
  let color = "color_706";
  let custom_fields = {};
  let description = "description_706";
  let device = "device_706";
  let feed_leg = "feed_leg_706";
  let id = 706;
  let label = "label_706";
  let mark_connected = "mark_connected_706";
  let module = "module_706";
  let name = "name_706";
  let power_port = "power_port_706";
  let status = "status_706";
  let tags = "tags_706";
  let type = "type_706";
  createPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  verifyPowerOutletExists(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  tryToAddExistingPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  verifyPowerOutletExists(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
});

// Monitor: PowerOutlet Addition Verification
bthread("monitor:PowerOutlet:addition", function () {
  while (true) {
    let item = waitForAnyPowerOutletAdded();
    block(matchDeletedPowerOutlet(item.color, item.custom_fields, item.description, item.device, item.feed_leg, item.id, item.label, item.mark_connected, item.module, item.name, item.power_port, item.status, item.tags, item.type), function () {
      verifyPowerOutletExists(item.color, item.custom_fields, item.description, item.device, item.feed_leg, item.id, item.label, item.mark_connected, item.module, item.name, item.power_port, item.status, item.tags, item.type);
    });
  }
});

// Monitor: PowerOutlet Deletion Verification
bthread("monitor:PowerOutlet:deletion", function () {
  while (true) {
    let item = waitForAnyPowerOutletDeleted();
    block(matchAddedPowerOutlet(item.color, item.custom_fields, item.description, item.device, item.feed_leg, item.id, item.label, item.mark_connected, item.module, item.name, item.power_port, item.status, item.tags, item.type), function () {
      verifyPowerOutletDoesNotExist(item.color, item.custom_fields, item.description, item.device, item.feed_leg, item.id, item.label, item.mark_connected, item.module, item.name, item.power_port, item.status, item.tags, item.type);
    });
  }
});

// Story: crud:PowerPanel:nondet:1:1
bthread("crud:PowerPanel:nondet:1:1", function () {
  let comments = "comments_710";
  let custom_fields = {};
  let description = "description_710";
  let id = 710;
  let location = "location_710";
  let name = "name_710";
  let site = "site_710";
  let tags = "tags_710";
  createPowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  waitForPowerPanelAdded(comments, custom_fields, description, id, location, name, site, tags);
  tryToAddExistingPowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  verifyPowerPanelExists(comments, custom_fields, description, id, location, name, site, tags);
  updatePowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  deletePowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  tryToDeleteANonExistingPowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  verifyPowerPanelDoesNotExist(comments, custom_fields, description, id, location, name, site, tags);
});

// Story: crud:PowerPanel:nondet:1:2
bthread("crud:PowerPanel:nondet:1:2", function () {
  let comments = "comments_711";
  let custom_fields = {};
  let description = "description_711";
  let id = 711;
  let location = "location_711";
  let name = "name_711";
  let site = "site_711";
  let tags = "tags_711";
  createPowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  tryToAddExistingPowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  updatePowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  verifyPowerPanelExists(comments, custom_fields, description, id, location, name, site, tags);
  deletePowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  tryToDeleteANonExistingPowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  verifyPowerPanelDoesNotExist(comments, custom_fields, description, id, location, name, site, tags);
});

// Story: crud:PowerPanel:nondet:negative:dup-add
bthread("crud:PowerPanel:nondet:negative:dup-add", function () {
  let comments = "comments_716";
  let custom_fields = {};
  let description = "description_716";
  let id = 716;
  let location = "location_716";
  let name = "name_716";
  let site = "site_716";
  let tags = "tags_716";
  createPowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  verifyPowerPanelExists(comments, custom_fields, description, id, location, name, site, tags);
  tryToAddExistingPowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  verifyPowerPanelExists(comments, custom_fields, description, id, location, name, site, tags);
});

// Monitor: PowerPanel Addition Verification
bthread("monitor:PowerPanel:addition", function () {
  while (true) {
    let item = waitForAnyPowerPanelAdded();
    block(matchDeletedPowerPanel(item.comments, item.custom_fields, item.description, item.id, item.location, item.name, item.site, item.tags), function () {
      verifyPowerPanelExists(item.comments, item.custom_fields, item.description, item.id, item.location, item.name, item.site, item.tags);
    });
  }
});

// Monitor: PowerPanel Deletion Verification
bthread("monitor:PowerPanel:deletion", function () {
  while (true) {
    let item = waitForAnyPowerPanelDeleted();
    block(matchAddedPowerPanel(item.comments, item.custom_fields, item.description, item.id, item.location, item.name, item.site, item.tags), function () {
      verifyPowerPanelDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.location, item.name, item.site, item.tags);
    });
  }
});

// Story: crud:PowerPortTemplate:nondet:1:1
bthread("crud:PowerPortTemplate:nondet:1:1", function () {
  let allocated_draw = 720;
  let description = "description_720";
  let device_type = "device_type_720";
  let id = 720;
  let label = "label_720";
  let maximum_draw = 720;
  let module_type = "module_type_720";
  let name = "name_720";
  let type = "type_720";
  createPowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  waitForPowerPortTemplateAdded(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  tryToAddExistingPowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  verifyPowerPortTemplateExists(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  updatePowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  deletePowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  tryToDeleteANonExistingPowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  verifyPowerPortTemplateDoesNotExist(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
});

// Story: crud:PowerPortTemplate:nondet:1:2
bthread("crud:PowerPortTemplate:nondet:1:2", function () {
  let allocated_draw = 721;
  let description = "description_721";
  let device_type = "device_type_721";
  let id = 721;
  let label = "label_721";
  let maximum_draw = 721;
  let module_type = "module_type_721";
  let name = "name_721";
  let type = "type_721";
  createPowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  tryToAddExistingPowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  updatePowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  verifyPowerPortTemplateExists(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  deletePowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  tryToDeleteANonExistingPowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  verifyPowerPortTemplateDoesNotExist(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
});

// Story: crud:PowerPortTemplate:nondet:negative:dup-add
bthread("crud:PowerPortTemplate:nondet:negative:dup-add", function () {
  let allocated_draw = 726;
  let description = "description_726";
  let device_type = "device_type_726";
  let id = 726;
  let label = "label_726";
  let maximum_draw = 726;
  let module_type = "module_type_726";
  let name = "name_726";
  let type = "type_726";
  createPowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  verifyPowerPortTemplateExists(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  tryToAddExistingPowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  verifyPowerPortTemplateExists(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
});

// Monitor: PowerPortTemplate Addition Verification
bthread("monitor:PowerPortTemplate:addition", function () {
  while (true) {
    let item = waitForAnyPowerPortTemplateAdded();
    block(matchDeletedPowerPortTemplate(item.allocated_draw, item.description, item.device_type, item.id, item.label, item.maximum_draw, item.module_type, item.name, item.type), function () {
      verifyPowerPortTemplateExists(item.allocated_draw, item.description, item.device_type, item.id, item.label, item.maximum_draw, item.module_type, item.name, item.type);
    });
  }
});

// Monitor: PowerPortTemplate Deletion Verification
bthread("monitor:PowerPortTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyPowerPortTemplateDeleted();
    block(matchAddedPowerPortTemplate(item.allocated_draw, item.description, item.device_type, item.id, item.label, item.maximum_draw, item.module_type, item.name, item.type), function () {
      verifyPowerPortTemplateDoesNotExist(item.allocated_draw, item.description, item.device_type, item.id, item.label, item.maximum_draw, item.module_type, item.name, item.type);
    });
  }
});

// Story: crud:PowerPort:nondet:1:1
bthread("crud:PowerPort:nondet:1:1", function () {
  let allocated_draw = 730;
  let custom_fields = {};
  let description = "description_730";
  let device = "device_730";
  let id = 730;
  let label = "label_730";
  let mark_connected = "mark_connected_730";
  let maximum_draw = 730;
  let module = "module_730";
  let name = "name_730";
  let tags = "tags_730";
  let type = "type_730";
  createPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  waitForPowerPortAdded(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  tryToAddExistingPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  verifyPowerPortExists(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  updatePowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  deletePowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  tryToDeleteANonExistingPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  verifyPowerPortDoesNotExist(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
});

// Story: crud:PowerPort:nondet:1:2
bthread("crud:PowerPort:nondet:1:2", function () {
  let allocated_draw = 731;
  let custom_fields = {};
  let description = "description_731";
  let device = "device_731";
  let id = 731;
  let label = "label_731";
  let mark_connected = "mark_connected_731";
  let maximum_draw = 731;
  let module = "module_731";
  let name = "name_731";
  let tags = "tags_731";
  let type = "type_731";
  createPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  tryToAddExistingPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  updatePowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  verifyPowerPortExists(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  deletePowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  tryToDeleteANonExistingPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  verifyPowerPortDoesNotExist(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
});

// Story: crud:PowerPort:nondet:negative:dup-add
bthread("crud:PowerPort:nondet:negative:dup-add", function () {
  let allocated_draw = 736;
  let custom_fields = {};
  let description = "description_736";
  let device = "device_736";
  let id = 736;
  let label = "label_736";
  let mark_connected = "mark_connected_736";
  let maximum_draw = 736;
  let module = "module_736";
  let name = "name_736";
  let tags = "tags_736";
  let type = "type_736";
  createPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  verifyPowerPortExists(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  tryToAddExistingPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  verifyPowerPortExists(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
});

// Monitor: PowerPort Addition Verification
bthread("monitor:PowerPort:addition", function () {
  while (true) {
    let item = waitForAnyPowerPortAdded();
    block(matchDeletedPowerPort(item.allocated_draw, item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.maximum_draw, item.module, item.name, item.tags, item.type), function () {
      verifyPowerPortExists(item.allocated_draw, item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.maximum_draw, item.module, item.name, item.tags, item.type);
    });
  }
});

// Monitor: PowerPort Deletion Verification
bthread("monitor:PowerPort:deletion", function () {
  while (true) {
    let item = waitForAnyPowerPortDeleted();
    block(matchAddedPowerPort(item.allocated_draw, item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.maximum_draw, item.module, item.name, item.tags, item.type), function () {
      verifyPowerPortDoesNotExist(item.allocated_draw, item.custom_fields, item.description, item.device, item.id, item.label, item.mark_connected, item.maximum_draw, item.module, item.name, item.tags, item.type);
    });
  }
});

// Story: crud:RackReservation:nondet:1:1
bthread("crud:RackReservation:nondet:1:1", function () {
  let comments = "comments_740";
  let custom_fields = {};
  let description = "description_740";
  let id = 740;
  let rack = "rack_740";
  let status = "status_740";
  let tags = "tags_740";
  let tenant = "tenant_740";
  let units = "units_740";
  let user = "user_740";
  createRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  waitForRackReservationAdded(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  tryToAddExistingRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  verifyRackReservationExists(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  updateRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  deleteRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  tryToDeleteANonExistingRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  verifyRackReservationDoesNotExist(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
});

// Story: crud:RackReservation:nondet:1:2
bthread("crud:RackReservation:nondet:1:2", function () {
  let comments = "comments_741";
  let custom_fields = {};
  let description = "description_741";
  let id = 741;
  let rack = "rack_741";
  let status = "status_741";
  let tags = "tags_741";
  let tenant = "tenant_741";
  let units = "units_741";
  let user = "user_741";
  createRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  tryToAddExistingRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  updateRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  verifyRackReservationExists(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  deleteRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  tryToDeleteANonExistingRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  verifyRackReservationDoesNotExist(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
});

// Story: crud:RackReservation:nondet:negative:dup-add
bthread("crud:RackReservation:nondet:negative:dup-add", function () {
  let comments = "comments_746";
  let custom_fields = {};
  let description = "description_746";
  let id = 746;
  let rack = "rack_746";
  let status = "status_746";
  let tags = "tags_746";
  let tenant = "tenant_746";
  let units = "units_746";
  let user = "user_746";
  createRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  verifyRackReservationExists(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  tryToAddExistingRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  verifyRackReservationExists(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
});

// Monitor: RackReservation Addition Verification
bthread("monitor:RackReservation:addition", function () {
  while (true) {
    let item = waitForAnyRackReservationAdded();
    block(matchDeletedRackReservation(item.comments, item.custom_fields, item.description, item.id, item.rack, item.status, item.tags, item.tenant, item.units, item.user), function () {
      verifyRackReservationExists(item.comments, item.custom_fields, item.description, item.id, item.rack, item.status, item.tags, item.tenant, item.units, item.user);
    });
  }
});

// Monitor: RackReservation Deletion Verification
bthread("monitor:RackReservation:deletion", function () {
  while (true) {
    let item = waitForAnyRackReservationDeleted();
    block(matchAddedRackReservation(item.comments, item.custom_fields, item.description, item.id, item.rack, item.status, item.tags, item.tenant, item.units, item.user), function () {
      verifyRackReservationDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.rack, item.status, item.tags, item.tenant, item.units, item.user);
    });
  }
});

// Story: crud:RackRole:nondet:1:1
bthread("crud:RackRole:nondet:1:1", function () {
  let color = "color_750";
  let custom_fields = {};
  let description = "description_750";
  let id = 750;
  let name = "name_750";
  let slug = "slug_750";
  let tags = "tags_750";
  createRackRole(color, custom_fields, description, id, name, slug, tags);
  waitForRackRoleAdded(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingRackRole(color, custom_fields, description, id, name, slug, tags);
  verifyRackRoleExists(color, custom_fields, description, id, name, slug, tags);
  updateRackRole(color, custom_fields, description, id, name, slug, tags);
  deleteRackRole(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingRackRole(color, custom_fields, description, id, name, slug, tags);
  verifyRackRoleDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:RackRole:nondet:1:2
bthread("crud:RackRole:nondet:1:2", function () {
  let color = "color_751";
  let custom_fields = {};
  let description = "description_751";
  let id = 751;
  let name = "name_751";
  let slug = "slug_751";
  let tags = "tags_751";
  createRackRole(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingRackRole(color, custom_fields, description, id, name, slug, tags);
  updateRackRole(color, custom_fields, description, id, name, slug, tags);
  verifyRackRoleExists(color, custom_fields, description, id, name, slug, tags);
  deleteRackRole(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingRackRole(color, custom_fields, description, id, name, slug, tags);
  verifyRackRoleDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:RackRole:nondet:negative:dup-add
bthread("crud:RackRole:nondet:negative:dup-add", function () {
  let color = "color_756";
  let custom_fields = {};
  let description = "description_756";
  let id = 756;
  let name = "name_756";
  let slug = "slug_756";
  let tags = "tags_756";
  createRackRole(color, custom_fields, description, id, name, slug, tags);
  verifyRackRoleExists(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingRackRole(color, custom_fields, description, id, name, slug, tags);
  verifyRackRoleExists(color, custom_fields, description, id, name, slug, tags);
});

// Monitor: RackRole Addition Verification
bthread("monitor:RackRole:addition", function () {
  while (true) {
    let item = waitForAnyRackRoleAdded();
    block(matchDeletedRackRole(item.color, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyRackRoleExists(item.color, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Monitor: RackRole Deletion Verification
bthread("monitor:RackRole:deletion", function () {
  while (true) {
    let item = waitForAnyRackRoleDeleted();
    block(matchAddedRackRole(item.color, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyRackRoleDoesNotExist(item.color, item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Story: crud:RackType:nondet:1:1
bthread("crud:RackType:nondet:1:1", function () {
  let comments = "comments_760";
  let custom_fields = {};
  let desc_units = "desc_units_760";
  let description = "description_760";
  let form_factor = "form_factor_760";
  let id = 760;
  let manufacturer = "manufacturer_760";
  let max_weight = 760;
  let model = "model_760";
  let mounting_depth = 760;
  let name = "name_760";
  let outer_depth = 760;
  let outer_height = 760;
  let outer_unit = "outer_unit_760";
  let outer_width = 760;
  let slug = "slug_760";
  let starting_unit = 760;
  let tags = "tags_760";
  let u_height = 760;
  let weight = 760;
  let weight_unit = "weight_unit_760";
  let width = 760;
  createRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  waitForRackTypeAdded(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToAddExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  updateRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  deleteRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeDoesNotExist(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
});

// Story: crud:RackType:nondet:1:2
bthread("crud:RackType:nondet:1:2", function () {
  let comments = "comments_761";
  let custom_fields = {};
  let desc_units = "desc_units_761";
  let description = "description_761";
  let form_factor = "form_factor_761";
  let id = 761;
  let manufacturer = "manufacturer_761";
  let max_weight = 761;
  let model = "model_761";
  let mounting_depth = 761;
  let name = "name_761";
  let outer_depth = 761;
  let outer_height = 761;
  let outer_unit = "outer_unit_761";
  let outer_width = 761;
  let slug = "slug_761";
  let starting_unit = 761;
  let tags = "tags_761";
  let u_height = 761;
  let weight = 761;
  let weight_unit = "weight_unit_761";
  let width = 761;
  createRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToAddExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  updateRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  deleteRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeDoesNotExist(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
});

// Story: crud:RackType:nondet:negative:dup-add
bthread("crud:RackType:nondet:negative:dup-add", function () {
  let comments = "comments_766";
  let custom_fields = {};
  let desc_units = "desc_units_766";
  let description = "description_766";
  let form_factor = "form_factor_766";
  let id = 766;
  let manufacturer = "manufacturer_766";
  let max_weight = 766;
  let model = "model_766";
  let mounting_depth = 766;
  let name = "name_766";
  let outer_depth = 766;
  let outer_height = 766;
  let outer_unit = "outer_unit_766";
  let outer_width = 766;
  let slug = "slug_766";
  let starting_unit = 766;
  let tags = "tags_766";
  let u_height = 766;
  let weight = 766;
  let weight_unit = "weight_unit_766";
  let width = 766;
  createRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToAddExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
});

// Monitor: RackType Addition Verification
bthread("monitor:RackType:addition", function () {
  while (true) {
    let item = waitForAnyRackTypeAdded();
    block(matchDeletedRackType(item.comments, item.custom_fields, item.desc_units, item.description, item.form_factor, item.id, item.manufacturer, item.max_weight, item.model, item.mounting_depth, item.name, item.outer_depth, item.outer_height, item.outer_unit, item.outer_width, item.slug, item.starting_unit, item.tags, item.u_height, item.weight, item.weight_unit, item.width), function () {
      verifyRackTypeExists(item.comments, item.custom_fields, item.desc_units, item.description, item.form_factor, item.id, item.manufacturer, item.max_weight, item.model, item.mounting_depth, item.name, item.outer_depth, item.outer_height, item.outer_unit, item.outer_width, item.slug, item.starting_unit, item.tags, item.u_height, item.weight, item.weight_unit, item.width);
    });
  }
});

// Monitor: RackType Deletion Verification
bthread("monitor:RackType:deletion", function () {
  while (true) {
    let item = waitForAnyRackTypeDeleted();
    block(matchAddedRackType(item.comments, item.custom_fields, item.desc_units, item.description, item.form_factor, item.id, item.manufacturer, item.max_weight, item.model, item.mounting_depth, item.name, item.outer_depth, item.outer_height, item.outer_unit, item.outer_width, item.slug, item.starting_unit, item.tags, item.u_height, item.weight, item.weight_unit, item.width), function () {
      verifyRackTypeDoesNotExist(item.comments, item.custom_fields, item.desc_units, item.description, item.form_factor, item.id, item.manufacturer, item.max_weight, item.model, item.mounting_depth, item.name, item.outer_depth, item.outer_height, item.outer_unit, item.outer_width, item.slug, item.starting_unit, item.tags, item.u_height, item.weight, item.weight_unit, item.width);
    });
  }
});

// Story: crud:Rack:nondet:1:1
bthread("crud:Rack:nondet:1:1", function () {
  let airflow = "airflow_770";
  let asset_tag = "asset_tag_770";
  let comments = "comments_770";
  let custom_fields = {};
  let desc_units = "desc_units_770";
  let description = "description_770";
  let facility_id = 770;
  let form_factor = "form_factor_770";
  let id = 770;
  let location = "location_770";
  let manufacturer = "manufacturer_770";
  let max_weight = 770;
  let mounting_depth = 770;
  let name = "name_770";
  let outer_depth = 770;
  let outer_height = 770;
  let outer_unit = "outer_unit_770";
  let outer_width = 770;
  let rack_type = "rack_type_770";
  let role = "role_770";
  let serial = "serial_770";
  let site = "site_770";
  let starting_unit = 770;
  let status = "status_770";
  let tags = "tags_770";
  let tenant = "tenant_770";
  let u_height = 770;
  let weight = 770;
  let weight_unit = "weight_unit_770";
  let width = 770;
  createRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  waitForRackAdded(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToAddExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  updateRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  deleteRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackDoesNotExist(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
});

// Story: crud:Rack:nondet:1:2
bthread("crud:Rack:nondet:1:2", function () {
  let airflow = "airflow_771";
  let asset_tag = "asset_tag_771";
  let comments = "comments_771";
  let custom_fields = {};
  let desc_units = "desc_units_771";
  let description = "description_771";
  let facility_id = 771;
  let form_factor = "form_factor_771";
  let id = 771;
  let location = "location_771";
  let manufacturer = "manufacturer_771";
  let max_weight = 771;
  let mounting_depth = 771;
  let name = "name_771";
  let outer_depth = 771;
  let outer_height = 771;
  let outer_unit = "outer_unit_771";
  let outer_width = 771;
  let rack_type = "rack_type_771";
  let role = "role_771";
  let serial = "serial_771";
  let site = "site_771";
  let starting_unit = 771;
  let status = "status_771";
  let tags = "tags_771";
  let tenant = "tenant_771";
  let u_height = 771;
  let weight = 771;
  let weight_unit = "weight_unit_771";
  let width = 771;
  createRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToAddExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  updateRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  deleteRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackDoesNotExist(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
});

// Story: crud:Rack:nondet:negative:dup-add
bthread("crud:Rack:nondet:negative:dup-add", function () {
  let airflow = "airflow_776";
  let asset_tag = "asset_tag_776";
  let comments = "comments_776";
  let custom_fields = {};
  let desc_units = "desc_units_776";
  let description = "description_776";
  let facility_id = 776;
  let form_factor = "form_factor_776";
  let id = 776;
  let location = "location_776";
  let manufacturer = "manufacturer_776";
  let max_weight = 776;
  let mounting_depth = 776;
  let name = "name_776";
  let outer_depth = 776;
  let outer_height = 776;
  let outer_unit = "outer_unit_776";
  let outer_width = 776;
  let rack_type = "rack_type_776";
  let role = "role_776";
  let serial = "serial_776";
  let site = "site_776";
  let starting_unit = 776;
  let status = "status_776";
  let tags = "tags_776";
  let tenant = "tenant_776";
  let u_height = 776;
  let weight = 776;
  let weight_unit = "weight_unit_776";
  let width = 776;
  createRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToAddExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
});

// Monitor: Rack Addition Verification
bthread("monitor:Rack:addition", function () {
  while (true) {
    let item = waitForAnyRackAdded();
    block(matchDeletedRack(item.airflow, item.asset_tag, item.comments, item.custom_fields, item.desc_units, item.description, item.facility_id, item.form_factor, item.id, item.location, item.manufacturer, item.max_weight, item.mounting_depth, item.name, item.outer_depth, item.outer_height, item.outer_unit, item.outer_width, item.rack_type, item.role, item.serial, item.site, item.starting_unit, item.status, item.tags, item.tenant, item.u_height, item.weight, item.weight_unit, item.width), function () {
      verifyRackExists(item.airflow, item.asset_tag, item.comments, item.custom_fields, item.desc_units, item.description, item.facility_id, item.form_factor, item.id, item.location, item.manufacturer, item.max_weight, item.mounting_depth, item.name, item.outer_depth, item.outer_height, item.outer_unit, item.outer_width, item.rack_type, item.role, item.serial, item.site, item.starting_unit, item.status, item.tags, item.tenant, item.u_height, item.weight, item.weight_unit, item.width);
    });
  }
});

// Monitor: Rack Deletion Verification
bthread("monitor:Rack:deletion", function () {
  while (true) {
    let item = waitForAnyRackDeleted();
    block(matchAddedRack(item.airflow, item.asset_tag, item.comments, item.custom_fields, item.desc_units, item.description, item.facility_id, item.form_factor, item.id, item.location, item.manufacturer, item.max_weight, item.mounting_depth, item.name, item.outer_depth, item.outer_height, item.outer_unit, item.outer_width, item.rack_type, item.role, item.serial, item.site, item.starting_unit, item.status, item.tags, item.tenant, item.u_height, item.weight, item.weight_unit, item.width), function () {
      verifyRackDoesNotExist(item.airflow, item.asset_tag, item.comments, item.custom_fields, item.desc_units, item.description, item.facility_id, item.form_factor, item.id, item.location, item.manufacturer, item.max_weight, item.mounting_depth, item.name, item.outer_depth, item.outer_height, item.outer_unit, item.outer_width, item.rack_type, item.role, item.serial, item.site, item.starting_unit, item.status, item.tags, item.tenant, item.u_height, item.weight, item.weight_unit, item.width);
    });
  }
});

// Story: crud:RearPortTemplate:nondet:1:1
bthread("crud:RearPortTemplate:nondet:1:1", function () {
  let color = "color_780";
  let description = "description_780";
  let device_type = "device_type_780";
  let id = 780;
  let label = "label_780";
  let module_type = "module_type_780";
  let name = "name_780";
  let positions = 780;
  let tags = "tags_780";
  let type = "type_780";
  createRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, tags, type);
  waitForRearPortTemplateAdded(color, description, device_type, id, label, module_type, name, positions, tags, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, tags, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, tags, type);
  updateRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, tags, type);
  deleteRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, tags, type);
  tryToDeleteANonExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, tags, type);
  verifyRearPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, positions, tags, type);
});

// Story: crud:RearPortTemplate:nondet:1:2
bthread("crud:RearPortTemplate:nondet:1:2", function () {
  let color = "color_781";
  let description = "description_781";
  let device_type = "device_type_781";
  let id = 781;
  let label = "label_781";
  let module_type = "module_type_781";
  let name = "name_781";
  let positions = 781;
  let tags = "tags_781";
  let type = "type_781";
  createRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, tags, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, tags, type);
  updateRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, tags, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, tags, type);
  deleteRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, tags, type);
  tryToDeleteANonExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, tags, type);
  verifyRearPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, positions, tags, type);
});

// Story: crud:RearPortTemplate:nondet:negative:dup-add
bthread("crud:RearPortTemplate:nondet:negative:dup-add", function () {
  let color = "color_786";
  let description = "description_786";
  let device_type = "device_type_786";
  let id = 786;
  let label = "label_786";
  let module_type = "module_type_786";
  let name = "name_786";
  let positions = 786;
  let tags = "tags_786";
  let type = "type_786";
  createRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, tags, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, tags, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, tags, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, tags, type);
});

// Monitor: RearPortTemplate Addition Verification
bthread("monitor:RearPortTemplate:addition", function () {
  while (true) {
    let item = waitForAnyRearPortTemplateAdded();
    block(matchDeletedRearPortTemplate(item.color, item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.positions, item.tags, item.type), function () {
      verifyRearPortTemplateExists(item.color, item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.positions, item.tags, item.type);
    });
  }
});

// Monitor: RearPortTemplate Deletion Verification
bthread("monitor:RearPortTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyRearPortTemplateDeleted();
    block(matchAddedRearPortTemplate(item.color, item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.positions, item.tags, item.type), function () {
      verifyRearPortTemplateDoesNotExist(item.color, item.description, item.device_type, item.id, item.label, item.module_type, item.name, item.positions, item.tags, item.type);
    });
  }
});

// Story: crud:RearPort:nondet:1:1
bthread("crud:RearPort:nondet:1:1", function () {
  let cable = "cable_790";
  let cable_end = "cable_end_790";
  let color = "color_790";
  let custom_fields = {};
  let description = "description_790";
  let device = "device_790";
  let device_role = "device_role_790";
  let device_status = "device_status_790";
  let device_type = "device_type_790";
  let id = 790;
  let label = "label_790";
  let mark_connected = "mark_connected_790";
  let module = "module_790";
  let name = "name_790";
  let occupied = "occupied_790";
  let positions = 790;
  let rack = "rack_790";
  let region = "region_790";
  let site = "site_790";
  let tags = "tags_790";
  let type = "type_790";
  let virtual_chassis = "virtual_chassis_790";
  createRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  waitForRearPortAdded(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  tryToAddExistingRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  verifyRearPortExists(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  updateRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  deleteRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  tryToDeleteANonExistingRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  verifyRearPortDoesNotExist(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
});

// Story: crud:RearPort:nondet:1:2
bthread("crud:RearPort:nondet:1:2", function () {
  let cable = "cable_791";
  let cable_end = "cable_end_791";
  let color = "color_791";
  let custom_fields = {};
  let description = "description_791";
  let device = "device_791";
  let device_role = "device_role_791";
  let device_status = "device_status_791";
  let device_type = "device_type_791";
  let id = 791;
  let label = "label_791";
  let mark_connected = "mark_connected_791";
  let module = "module_791";
  let name = "name_791";
  let occupied = "occupied_791";
  let positions = 791;
  let rack = "rack_791";
  let region = "region_791";
  let site = "site_791";
  let tags = "tags_791";
  let type = "type_791";
  let virtual_chassis = "virtual_chassis_791";
  createRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  tryToAddExistingRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  updateRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  verifyRearPortExists(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  deleteRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  tryToDeleteANonExistingRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  verifyRearPortDoesNotExist(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
});

// Story: crud:RearPort:nondet:negative:dup-add
bthread("crud:RearPort:nondet:negative:dup-add", function () {
  let cable = "cable_796";
  let cable_end = "cable_end_796";
  let color = "color_796";
  let custom_fields = {};
  let description = "description_796";
  let device = "device_796";
  let device_role = "device_role_796";
  let device_status = "device_status_796";
  let device_type = "device_type_796";
  let id = 796;
  let label = "label_796";
  let mark_connected = "mark_connected_796";
  let module = "module_796";
  let name = "name_796";
  let occupied = "occupied_796";
  let positions = 796;
  let rack = "rack_796";
  let region = "region_796";
  let site = "site_796";
  let tags = "tags_796";
  let type = "type_796";
  let virtual_chassis = "virtual_chassis_796";
  createRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  verifyRearPortExists(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  tryToAddExistingRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
  verifyRearPortExists(cable, cable_end, color, custom_fields, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, positions, rack, region, site, tags, type, virtual_chassis);
});

// Monitor: RearPort Addition Verification
bthread("monitor:RearPort:addition", function () {
  while (true) {
    let item = waitForAnyRearPortAdded();
    block(matchDeletedRearPort(item.cable, item.cable_end, item.color, item.custom_fields, item.description, item.device, item.device_role, item.device_status, item.device_type, item.id, item.label, item.mark_connected, item.module, item.name, item.occupied, item.positions, item.rack, item.region, item.site, item.tags, item.type, item.virtual_chassis), function () {
      verifyRearPortExists(item.cable, item.cable_end, item.color, item.custom_fields, item.description, item.device, item.device_role, item.device_status, item.device_type, item.id, item.label, item.mark_connected, item.module, item.name, item.occupied, item.positions, item.rack, item.region, item.site, item.tags, item.type, item.virtual_chassis);
    });
  }
});

// Monitor: RearPort Deletion Verification
bthread("monitor:RearPort:deletion", function () {
  while (true) {
    let item = waitForAnyRearPortDeleted();
    block(matchAddedRearPort(item.cable, item.cable_end, item.color, item.custom_fields, item.description, item.device, item.device_role, item.device_status, item.device_type, item.id, item.label, item.mark_connected, item.module, item.name, item.occupied, item.positions, item.rack, item.region, item.site, item.tags, item.type, item.virtual_chassis), function () {
      verifyRearPortDoesNotExist(item.cable, item.cable_end, item.color, item.custom_fields, item.description, item.device, item.device_role, item.device_status, item.device_type, item.id, item.label, item.mark_connected, item.module, item.name, item.occupied, item.positions, item.rack, item.region, item.site, item.tags, item.type, item.virtual_chassis);
    });
  }
});

// Story: crud:Region:nondet:1:1
bthread("crud:Region:nondet:1:1", function () {
  let comments = "comments_800";
  let custom_fields = {};
  let description = "description_800";
  let id = 800;
  let name = "name_800";
  let parent = 800;
  let slug = "slug_800";
  let tags = "tags_800";
  createRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  waitForRegionAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, custom_fields, description, id, name, parent, slug, tags);
  updateRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:Region:nondet:1:2
bthread("crud:Region:nondet:1:2", function () {
  let comments = "comments_801";
  let custom_fields = {};
  let description = "description_801";
  let id = 801;
  let name = "name_801";
  let parent = 801;
  let slug = "slug_801";
  let tags = "tags_801";
  createRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  updateRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:Region:nondet:negative:dup-add
bthread("crud:Region:nondet:negative:dup-add", function () {
  let comments = "comments_806";
  let custom_fields = {};
  let description = "description_806";
  let id = 806;
  let name = "name_806";
  let parent = 806;
  let slug = "slug_806";
  let tags = "tags_806";
  createRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Monitor: Region Addition Verification
bthread("monitor:Region:addition", function () {
  while (true) {
    let item = waitForAnyRegionAdded();
    block(matchDeletedRegion(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags), function () {
      verifyRegionExists(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags);
    });
  }
});

// Monitor: Region Deletion Verification
bthread("monitor:Region:deletion", function () {
  while (true) {
    let item = waitForAnyRegionDeleted();
    block(matchAddedRegion(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags), function () {
      verifyRegionDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags);
    });
  }
});

// Story: crud:SiteGroup:nondet:1:1
bthread("crud:SiteGroup:nondet:1:1", function () {
  let comments = "comments_810";
  let custom_fields = {};
  let description = "description_810";
  let id = 810;
  let name = "name_810";
  let parent = 810;
  let slug = "slug_810";
  let tags = "tags_810";
  createSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  waitForSiteGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  updateSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:SiteGroup:nondet:1:2
bthread("crud:SiteGroup:nondet:1:2", function () {
  let comments = "comments_811";
  let custom_fields = {};
  let description = "description_811";
  let id = 811;
  let name = "name_811";
  let parent = 811;
  let slug = "slug_811";
  let tags = "tags_811";
  createSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  updateSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:SiteGroup:nondet:negative:dup-add
bthread("crud:SiteGroup:nondet:negative:dup-add", function () {
  let comments = "comments_816";
  let custom_fields = {};
  let description = "description_816";
  let id = 816;
  let name = "name_816";
  let parent = 816;
  let slug = "slug_816";
  let tags = "tags_816";
  createSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Monitor: SiteGroup Addition Verification
bthread("monitor:SiteGroup:addition", function () {
  while (true) {
    let item = waitForAnySiteGroupAdded();
    block(matchDeletedSiteGroup(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags), function () {
      verifySiteGroupExists(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags);
    });
  }
});

// Monitor: SiteGroup Deletion Verification
bthread("monitor:SiteGroup:deletion", function () {
  while (true) {
    let item = waitForAnySiteGroupDeleted();
    block(matchAddedSiteGroup(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags), function () {
      verifySiteGroupDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags);
    });
  }
});

// Story: crud:Site:nondet:1:1
bthread("crud:Site:nondet:1:1", function () {
  let asns = "asns_820";
  let comments = "comments_820";
  let custom_fields = {};
  let description = "description_820";
  let facility = "facility_820";
  let group = "group_820";
  let id = 820;
  let latitude = 820;
  let longitude = 820;
  let name = "name_820";
  let physical_address = "physical_address_820";
  let region = "region_820";
  let shipping_address = "shipping_address_820";
  let slug = "slug_820";
  let status = "status_820";
  let tags = "tags_820";
  let tenant = "tenant_820";
  let time_zone = "time_zone_820";
  createSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  waitForSiteAdded(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToAddExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  updateSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  deleteSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToDeleteANonExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteDoesNotExist(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
});

// Story: crud:Site:nondet:1:2
bthread("crud:Site:nondet:1:2", function () {
  let asns = "asns_821";
  let comments = "comments_821";
  let custom_fields = {};
  let description = "description_821";
  let facility = "facility_821";
  let group = "group_821";
  let id = 821;
  let latitude = 821;
  let longitude = 821;
  let name = "name_821";
  let physical_address = "physical_address_821";
  let region = "region_821";
  let shipping_address = "shipping_address_821";
  let slug = "slug_821";
  let status = "status_821";
  let tags = "tags_821";
  let tenant = "tenant_821";
  let time_zone = "time_zone_821";
  createSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToAddExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  updateSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  deleteSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToDeleteANonExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteDoesNotExist(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
});

// Story: crud:Site:nondet:negative:dup-add
bthread("crud:Site:nondet:negative:dup-add", function () {
  let asns = "asns_826";
  let comments = "comments_826";
  let custom_fields = {};
  let description = "description_826";
  let facility = "facility_826";
  let group = "group_826";
  let id = 826;
  let latitude = 826;
  let longitude = 826;
  let name = "name_826";
  let physical_address = "physical_address_826";
  let region = "region_826";
  let shipping_address = "shipping_address_826";
  let slug = "slug_826";
  let status = "status_826";
  let tags = "tags_826";
  let tenant = "tenant_826";
  let time_zone = "time_zone_826";
  createSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToAddExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
});

// Monitor: Site Addition Verification
bthread("monitor:Site:addition", function () {
  while (true) {
    let item = waitForAnySiteAdded();
    block(matchDeletedSite(item.asns, item.comments, item.custom_fields, item.description, item.facility, item.group, item.id, item.latitude, item.longitude, item.name, item.physical_address, item.region, item.shipping_address, item.slug, item.status, item.tags, item.tenant, item.time_zone), function () {
      verifySiteExists(item.asns, item.comments, item.custom_fields, item.description, item.facility, item.group, item.id, item.latitude, item.longitude, item.name, item.physical_address, item.region, item.shipping_address, item.slug, item.status, item.tags, item.tenant, item.time_zone);
    });
  }
});

// Monitor: Site Deletion Verification
bthread("monitor:Site:deletion", function () {
  while (true) {
    let item = waitForAnySiteDeleted();
    block(matchAddedSite(item.asns, item.comments, item.custom_fields, item.description, item.facility, item.group, item.id, item.latitude, item.longitude, item.name, item.physical_address, item.region, item.shipping_address, item.slug, item.status, item.tags, item.tenant, item.time_zone), function () {
      verifySiteDoesNotExist(item.asns, item.comments, item.custom_fields, item.description, item.facility, item.group, item.id, item.latitude, item.longitude, item.name, item.physical_address, item.region, item.shipping_address, item.slug, item.status, item.tags, item.tenant, item.time_zone);
    });
  }
});

// Story: crud:VirtualChassis:nondet:1:1
bthread("crud:VirtualChassis:nondet:1:1", function () {
  let comments = "comments_830";
  let custom_fields = {};
  let description = "description_830";
  let domain = "domain_830";
  let id = 830;
  let master = 830;
  let name = "name_830";
  let tags = "tags_830";
  createVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  waitForVirtualChassisAdded(comments, custom_fields, description, domain, id, master, name, tags);
  tryToAddExistingVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisExists(comments, custom_fields, description, domain, id, master, name, tags);
  updateVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  deleteVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  tryToDeleteANonExistingVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisDoesNotExist(comments, custom_fields, description, domain, id, master, name, tags);
});

// Story: crud:VirtualChassis:nondet:1:2
bthread("crud:VirtualChassis:nondet:1:2", function () {
  let comments = "comments_831";
  let custom_fields = {};
  let description = "description_831";
  let domain = "domain_831";
  let id = 831;
  let master = 831;
  let name = "name_831";
  let tags = "tags_831";
  createVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  tryToAddExistingVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  updateVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisExists(comments, custom_fields, description, domain, id, master, name, tags);
  deleteVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  tryToDeleteANonExistingVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisDoesNotExist(comments, custom_fields, description, domain, id, master, name, tags);
});

// Story: crud:VirtualChassis:nondet:negative:dup-add
bthread("crud:VirtualChassis:nondet:negative:dup-add", function () {
  let comments = "comments_836";
  let custom_fields = {};
  let description = "description_836";
  let domain = "domain_836";
  let id = 836;
  let master = 836;
  let name = "name_836";
  let tags = "tags_836";
  createVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisExists(comments, custom_fields, description, domain, id, master, name, tags);
  tryToAddExistingVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisExists(comments, custom_fields, description, domain, id, master, name, tags);
});

// Monitor: VirtualChassis Addition Verification
bthread("monitor:VirtualChassis:addition", function () {
  while (true) {
    let item = waitForAnyVirtualChassisAdded();
    block(matchDeletedVirtualChassis(item.comments, item.custom_fields, item.description, item.domain, item.id, item.master, item.name, item.tags), function () {
      verifyVirtualChassisExists(item.comments, item.custom_fields, item.description, item.domain, item.id, item.master, item.name, item.tags);
    });
  }
});

// Monitor: VirtualChassis Deletion Verification
bthread("monitor:VirtualChassis:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualChassisDeleted();
    block(matchAddedVirtualChassis(item.comments, item.custom_fields, item.description, item.domain, item.id, item.master, item.name, item.tags), function () {
      verifyVirtualChassisDoesNotExist(item.comments, item.custom_fields, item.description, item.domain, item.id, item.master, item.name, item.tags);
    });
  }
});

// Story: crud:VirtualDeviceContext:nondet:1:1
bthread("crud:VirtualDeviceContext:nondet:1:1", function () {
  let comments = "comments_840";
  let custom_fields = {};
  let description = "description_840";
  let device = "device_840";
  let id = 840;
  let identifier = 840;
  let name = "name_840";
  let primary_ip4 = "primary_ip4_840";
  let primary_ip6 = "primary_ip6_840";
  let status = "status_840";
  let tags = "tags_840";
  let tenant = "tenant_840";
  createVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  waitForVirtualDeviceContextAdded(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  tryToAddExistingVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextExists(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  updateVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  deleteVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  tryToDeleteANonExistingVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextDoesNotExist(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
});

// Story: crud:VirtualDeviceContext:nondet:1:2
bthread("crud:VirtualDeviceContext:nondet:1:2", function () {
  let comments = "comments_841";
  let custom_fields = {};
  let description = "description_841";
  let device = "device_841";
  let id = 841;
  let identifier = 841;
  let name = "name_841";
  let primary_ip4 = "primary_ip4_841";
  let primary_ip6 = "primary_ip6_841";
  let status = "status_841";
  let tags = "tags_841";
  let tenant = "tenant_841";
  createVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  tryToAddExistingVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  updateVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextExists(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  deleteVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  tryToDeleteANonExistingVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextDoesNotExist(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
});

// Story: crud:VirtualDeviceContext:nondet:negative:dup-add
bthread("crud:VirtualDeviceContext:nondet:negative:dup-add", function () {
  let comments = "comments_846";
  let custom_fields = {};
  let description = "description_846";
  let device = "device_846";
  let id = 846;
  let identifier = 846;
  let name = "name_846";
  let primary_ip4 = "primary_ip4_846";
  let primary_ip6 = "primary_ip6_846";
  let status = "status_846";
  let tags = "tags_846";
  let tenant = "tenant_846";
  createVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextExists(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  tryToAddExistingVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextExists(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
});

// Monitor: VirtualDeviceContext Addition Verification
bthread("monitor:VirtualDeviceContext:addition", function () {
  while (true) {
    let item = waitForAnyVirtualDeviceContextAdded();
    block(matchDeletedVirtualDeviceContext(item.comments, item.custom_fields, item.description, item.device, item.id, item.identifier, item.name, item.primary_ip4, item.primary_ip6, item.status, item.tags, item.tenant), function () {
      verifyVirtualDeviceContextExists(item.comments, item.custom_fields, item.description, item.device, item.id, item.identifier, item.name, item.primary_ip4, item.primary_ip6, item.status, item.tags, item.tenant);
    });
  }
});

// Monitor: VirtualDeviceContext Deletion Verification
bthread("monitor:VirtualDeviceContext:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualDeviceContextDeleted();
    block(matchAddedVirtualDeviceContext(item.comments, item.custom_fields, item.description, item.device, item.id, item.identifier, item.name, item.primary_ip4, item.primary_ip6, item.status, item.tags, item.tenant), function () {
      verifyVirtualDeviceContextDoesNotExist(item.comments, item.custom_fields, item.description, item.device, item.id, item.identifier, item.name, item.primary_ip4, item.primary_ip6, item.status, item.tags, item.tenant);
    });
  }
});

// Story: crud:Bookmark:nondet:1:1
bthread("crud:Bookmark:nondet:1:1", function () {
  let id = 850;
  let object_id = 850;
  let object_type = "object_type_850";
  let user = "user_850";
  createBookmark(id, object_id, object_type, user);
  waitForBookmarkAdded(id, object_id, object_type, user);
  tryToAddExistingBookmark(id, object_id, object_type, user);
  verifyBookmarkExists(id, object_id, object_type, user);
  updateBookmark(id, object_id, object_type, user);
  deleteBookmark(id, object_id, object_type, user);
  tryToDeleteANonExistingBookmark(id, object_id, object_type, user);
  verifyBookmarkDoesNotExist(id, object_id, object_type, user);
});

// Story: crud:Bookmark:nondet:1:2
bthread("crud:Bookmark:nondet:1:2", function () {
  let id = 851;
  let object_id = 851;
  let object_type = "object_type_851";
  let user = "user_851";
  createBookmark(id, object_id, object_type, user);
  tryToAddExistingBookmark(id, object_id, object_type, user);
  updateBookmark(id, object_id, object_type, user);
  verifyBookmarkExists(id, object_id, object_type, user);
  deleteBookmark(id, object_id, object_type, user);
  tryToDeleteANonExistingBookmark(id, object_id, object_type, user);
  verifyBookmarkDoesNotExist(id, object_id, object_type, user);
});

// Story: crud:Bookmark:nondet:negative:dup-add
bthread("crud:Bookmark:nondet:negative:dup-add", function () {
  let id = 856;
  let object_id = 856;
  let object_type = "object_type_856";
  let user = "user_856";
  createBookmark(id, object_id, object_type, user);
  verifyBookmarkExists(id, object_id, object_type, user);
  tryToAddExistingBookmark(id, object_id, object_type, user);
  verifyBookmarkExists(id, object_id, object_type, user);
});

// Monitor: Bookmark Addition Verification
bthread("monitor:Bookmark:addition", function () {
  while (true) {
    let item = waitForAnyBookmarkAdded();
    block(matchDeletedBookmark(item.id, item.object_id, item.object_type, item.user), function () {
      verifyBookmarkExists(item.id, item.object_id, item.object_type, item.user);
    });
  }
});

// Monitor: Bookmark Deletion Verification
bthread("monitor:Bookmark:deletion", function () {
  while (true) {
    let item = waitForAnyBookmarkDeleted();
    block(matchAddedBookmark(item.id, item.object_id, item.object_type, item.user), function () {
      verifyBookmarkDoesNotExist(item.id, item.object_id, item.object_type, item.user);
    });
  }
});

// Story: crud:ConfigContextProfile:nondet:1:1
bthread("crud:ConfigContextProfile:nondet:1:1", function () {
  let comments = "comments_860";
  let data_source = "data_source_860";
  let description = "description_860";
  let id = 860;
  let name = "name_860";
  let schema = "schema_860";
  let tags = "tags_860";
  createConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  waitForConfigContextProfileAdded(comments, data_source, description, id, name, schema, tags);
  tryToAddExistingConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileExists(comments, data_source, description, id, name, schema, tags);
  updateConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  deleteConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  tryToDeleteANonExistingConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileDoesNotExist(comments, data_source, description, id, name, schema, tags);
});

// Story: crud:ConfigContextProfile:nondet:1:2
bthread("crud:ConfigContextProfile:nondet:1:2", function () {
  let comments = "comments_861";
  let data_source = "data_source_861";
  let description = "description_861";
  let id = 861;
  let name = "name_861";
  let schema = "schema_861";
  let tags = "tags_861";
  createConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  tryToAddExistingConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  updateConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileExists(comments, data_source, description, id, name, schema, tags);
  deleteConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  tryToDeleteANonExistingConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileDoesNotExist(comments, data_source, description, id, name, schema, tags);
});

// Story: crud:ConfigContextProfile:nondet:negative:dup-add
bthread("crud:ConfigContextProfile:nondet:negative:dup-add", function () {
  let comments = "comments_866";
  let data_source = "data_source_866";
  let description = "description_866";
  let id = 866;
  let name = "name_866";
  let schema = "schema_866";
  let tags = "tags_866";
  createConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileExists(comments, data_source, description, id, name, schema, tags);
  tryToAddExistingConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileExists(comments, data_source, description, id, name, schema, tags);
});

// Monitor: ConfigContextProfile Addition Verification
bthread("monitor:ConfigContextProfile:addition", function () {
  while (true) {
    let item = waitForAnyConfigContextProfileAdded();
    block(matchDeletedConfigContextProfile(item.comments, item.data_source, item.description, item.id, item.name, item.schema, item.tags), function () {
      verifyConfigContextProfileExists(item.comments, item.data_source, item.description, item.id, item.name, item.schema, item.tags);
    });
  }
});

// Monitor: ConfigContextProfile Deletion Verification
bthread("monitor:ConfigContextProfile:deletion", function () {
  while (true) {
    let item = waitForAnyConfigContextProfileDeleted();
    block(matchAddedConfigContextProfile(item.comments, item.data_source, item.description, item.id, item.name, item.schema, item.tags), function () {
      verifyConfigContextProfileDoesNotExist(item.comments, item.data_source, item.description, item.id, item.name, item.schema, item.tags);
    });
  }
});

// Story: crud:ConfigContext:nondet:1:1
bthread("crud:ConfigContext:nondet:1:1", function () {
  let cluster_groups = "cluster_groups_870";
  let cluster_types = "cluster_types_870";
  let clusters = "clusters_870";
  let data = "data_870";
  let data_source = "data_source_870";
  let description = "description_870";
  let device_types = "device_types_870";
  let id = 870;
  let is_active = "is_active_870";
  let locations = "locations_870";
  let name = "name_870";
  let platforms = "platforms_870";
  let profile = "profile_870";
  let regions = "regions_870";
  let roles = "roles_870";
  let site_groups = "site_groups_870";
  let sites = "sites_870";
  let tags = "tags_870";
  let tenant_groups = "tenant_groups_870";
  let tenants = "tenants_870";
  let weight = 870;
  createConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  waitForConfigContextAdded(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  tryToAddExistingConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextExists(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  updateConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  deleteConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  tryToDeleteANonExistingConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextDoesNotExist(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
});

// Story: crud:ConfigContext:nondet:1:2
bthread("crud:ConfigContext:nondet:1:2", function () {
  let cluster_groups = "cluster_groups_871";
  let cluster_types = "cluster_types_871";
  let clusters = "clusters_871";
  let data = "data_871";
  let data_source = "data_source_871";
  let description = "description_871";
  let device_types = "device_types_871";
  let id = 871;
  let is_active = "is_active_871";
  let locations = "locations_871";
  let name = "name_871";
  let platforms = "platforms_871";
  let profile = "profile_871";
  let regions = "regions_871";
  let roles = "roles_871";
  let site_groups = "site_groups_871";
  let sites = "sites_871";
  let tags = "tags_871";
  let tenant_groups = "tenant_groups_871";
  let tenants = "tenants_871";
  let weight = 871;
  createConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  tryToAddExistingConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  updateConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextExists(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  deleteConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  tryToDeleteANonExistingConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextDoesNotExist(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
});

// Story: crud:ConfigContext:nondet:negative:dup-add
bthread("crud:ConfigContext:nondet:negative:dup-add", function () {
  let cluster_groups = "cluster_groups_876";
  let cluster_types = "cluster_types_876";
  let clusters = "clusters_876";
  let data = "data_876";
  let data_source = "data_source_876";
  let description = "description_876";
  let device_types = "device_types_876";
  let id = 876;
  let is_active = "is_active_876";
  let locations = "locations_876";
  let name = "name_876";
  let platforms = "platforms_876";
  let profile = "profile_876";
  let regions = "regions_876";
  let roles = "roles_876";
  let site_groups = "site_groups_876";
  let sites = "sites_876";
  let tags = "tags_876";
  let tenant_groups = "tenant_groups_876";
  let tenants = "tenants_876";
  let weight = 876;
  createConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextExists(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  tryToAddExistingConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextExists(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
});

// Monitor: ConfigContext Addition Verification
bthread("monitor:ConfigContext:addition", function () {
  while (true) {
    let item = waitForAnyConfigContextAdded();
    block(matchDeletedConfigContext(item.cluster_groups, item.cluster_types, item.clusters, item.data, item.data_source, item.description, item.device_types, item.id, item.is_active, item.locations, item.name, item.platforms, item.profile, item.regions, item.roles, item.site_groups, item.sites, item.tags, item.tenant_groups, item.tenants, item.weight), function () {
      verifyConfigContextExists(item.cluster_groups, item.cluster_types, item.clusters, item.data, item.data_source, item.description, item.device_types, item.id, item.is_active, item.locations, item.name, item.platforms, item.profile, item.regions, item.roles, item.site_groups, item.sites, item.tags, item.tenant_groups, item.tenants, item.weight);
    });
  }
});

// Monitor: ConfigContext Deletion Verification
bthread("monitor:ConfigContext:deletion", function () {
  while (true) {
    let item = waitForAnyConfigContextDeleted();
    block(matchAddedConfigContext(item.cluster_groups, item.cluster_types, item.clusters, item.data, item.data_source, item.description, item.device_types, item.id, item.is_active, item.locations, item.name, item.platforms, item.profile, item.regions, item.roles, item.site_groups, item.sites, item.tags, item.tenant_groups, item.tenants, item.weight), function () {
      verifyConfigContextDoesNotExist(item.cluster_groups, item.cluster_types, item.clusters, item.data, item.data_source, item.description, item.device_types, item.id, item.is_active, item.locations, item.name, item.platforms, item.profile, item.regions, item.roles, item.site_groups, item.sites, item.tags, item.tenant_groups, item.tenants, item.weight);
    });
  }
});

// Story: crud:CustomFieldChoiceSet:nondet:1:1
bthread("crud:CustomFieldChoiceSet:nondet:1:1", function () {
  let base_choices = "base_choices_890";
  let choices = "choices_890";
  let _default = "default_890";
  let description = "description_890";
  let extra_choices = "extra_choices_890";
  let group_name = "group_name_890";
  let id = 890;
  let is_cloneable = "is_cloneable_890";
  let label = "label_890";
  let name = "name_890";
  let order_alphabetically = "order_alphabetically_890";
  let required = "required_890";
  let ui_editable = "ui_editable_890";
  let ui_visible = "ui_visible_890";
  let unique = "unique_890";
  let validation_maximum = "validation_maximum_890";
  let validation_minimum = "validation_minimum_890";
  let validation_regex = "validation_regex_890";
  let weight = "weight_890";
  createCustomFieldChoiceSet(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  waitForCustomFieldChoiceSetAdded(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomFieldChoiceSet(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldChoiceSetExists(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  updateCustomFieldChoiceSet(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  deleteCustomFieldChoiceSet(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToDeleteANonExistingCustomFieldChoiceSet(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldChoiceSetDoesNotExist(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomFieldChoiceSet:nondet:1:2
bthread("crud:CustomFieldChoiceSet:nondet:1:2", function () {
  let base_choices = "base_choices_891";
  let choices = "choices_891";
  let _default = "default_891";
  let description = "description_891";
  let extra_choices = "extra_choices_891";
  let group_name = "group_name_891";
  let id = 891;
  let is_cloneable = "is_cloneable_891";
  let label = "label_891";
  let name = "name_891";
  let order_alphabetically = "order_alphabetically_891";
  let required = "required_891";
  let ui_editable = "ui_editable_891";
  let ui_visible = "ui_visible_891";
  let unique = "unique_891";
  let validation_maximum = "validation_maximum_891";
  let validation_minimum = "validation_minimum_891";
  let validation_regex = "validation_regex_891";
  let weight = "weight_891";
  createCustomFieldChoiceSet(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomFieldChoiceSet(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  updateCustomFieldChoiceSet(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldChoiceSetExists(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  deleteCustomFieldChoiceSet(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToDeleteANonExistingCustomFieldChoiceSet(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldChoiceSetDoesNotExist(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomFieldChoiceSet:nondet:negative:dup-add
bthread("crud:CustomFieldChoiceSet:nondet:negative:dup-add", function () {
  let base_choices = "base_choices_896";
  let choices = "choices_896";
  let _default = "default_896";
  let description = "description_896";
  let extra_choices = "extra_choices_896";
  let group_name = "group_name_896";
  let id = 896;
  let is_cloneable = "is_cloneable_896";
  let label = "label_896";
  let name = "name_896";
  let order_alphabetically = "order_alphabetically_896";
  let required = "required_896";
  let ui_editable = "ui_editable_896";
  let ui_visible = "ui_visible_896";
  let unique = "unique_896";
  let validation_maximum = "validation_maximum_896";
  let validation_minimum = "validation_minimum_896";
  let validation_regex = "validation_regex_896";
  let weight = "weight_896";
  createCustomFieldChoiceSet(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldChoiceSetExists(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomFieldChoiceSet(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldChoiceSetExists(base_choices, choices, _default, description, extra_choices, group_name, id, is_cloneable, label, name, order_alphabetically, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Monitor: CustomFieldChoiceSet Addition Verification
bthread("monitor:CustomFieldChoiceSet:addition", function () {
  while (true) {
    let item = waitForAnyCustomFieldChoiceSetAdded();
    block(matchDeletedCustomFieldChoiceSet(item.base_choices, item.choices, item._default, item.description, item.extra_choices, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.order_alphabetically, item.required, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight), function () {
      verifyCustomFieldChoiceSetExists(item.base_choices, item.choices, item._default, item.description, item.extra_choices, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.order_alphabetically, item.required, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight);
    });
  }
});

// Monitor: CustomFieldChoiceSet Deletion Verification
bthread("monitor:CustomFieldChoiceSet:deletion", function () {
  while (true) {
    let item = waitForAnyCustomFieldChoiceSetDeleted();
    block(matchAddedCustomFieldChoiceSet(item.base_choices, item.choices, item._default, item.description, item.extra_choices, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.order_alphabetically, item.required, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight), function () {
      verifyCustomFieldChoiceSetDoesNotExist(item.base_choices, item.choices, item._default, item.description, item.extra_choices, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.order_alphabetically, item.required, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight);
    });
  }
});

// Story: crud:CustomField:nondet:1:1
bthread("crud:CustomField:nondet:1:1", function () {
  let choice_set = "choice_set_900";
  let comments = "comments_900";
  let _default = "default_900";
  let description = "description_900";
  let filter_logic = "filter_logic_900";
  let group_name = "group_name_900";
  let id = 900;
  let is_cloneable = "is_cloneable_900";
  let label = "label_900";
  let name = "name_900";
  let object_type = "object_type_900";
  let object_types = "object_types_900";
  let related_object_filter = "related_object_filter_900";
  let related_object_type = "related_object_type_900";
  let required = "required_900";
  let search_weight = 900;
  let type = "type_900";
  let ui_editable = "ui_editable_900";
  let ui_visible = "ui_visible_900";
  let unique = "unique_900";
  let validation_maximum = 900;
  let validation_minimum = 900;
  let validation_regex = "validation_regex_900";
  let weight = 900;
  createCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  waitForCustomFieldAdded(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  updateCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  deleteCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToDeleteANonExistingCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldDoesNotExist(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomField:nondet:1:2
bthread("crud:CustomField:nondet:1:2", function () {
  let choice_set = "choice_set_901";
  let comments = "comments_901";
  let _default = "default_901";
  let description = "description_901";
  let filter_logic = "filter_logic_901";
  let group_name = "group_name_901";
  let id = 901;
  let is_cloneable = "is_cloneable_901";
  let label = "label_901";
  let name = "name_901";
  let object_type = "object_type_901";
  let object_types = "object_types_901";
  let related_object_filter = "related_object_filter_901";
  let related_object_type = "related_object_type_901";
  let required = "required_901";
  let search_weight = 901;
  let type = "type_901";
  let ui_editable = "ui_editable_901";
  let ui_visible = "ui_visible_901";
  let unique = "unique_901";
  let validation_maximum = 901;
  let validation_minimum = 901;
  let validation_regex = "validation_regex_901";
  let weight = 901;
  createCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  updateCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  deleteCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToDeleteANonExistingCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldDoesNotExist(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomField:nondet:negative:dup-add
bthread("crud:CustomField:nondet:negative:dup-add", function () {
  let choice_set = "choice_set_906";
  let comments = "comments_906";
  let _default = "default_906";
  let description = "description_906";
  let filter_logic = "filter_logic_906";
  let group_name = "group_name_906";
  let id = 906;
  let is_cloneable = "is_cloneable_906";
  let label = "label_906";
  let name = "name_906";
  let object_type = "object_type_906";
  let object_types = "object_types_906";
  let related_object_filter = "related_object_filter_906";
  let related_object_type = "related_object_type_906";
  let required = "required_906";
  let search_weight = 906;
  let type = "type_906";
  let ui_editable = "ui_editable_906";
  let ui_visible = "ui_visible_906";
  let unique = "unique_906";
  let validation_maximum = 906;
  let validation_minimum = 906;
  let validation_regex = "validation_regex_906";
  let weight = 906;
  createCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Monitor: CustomField Addition Verification
bthread("monitor:CustomField:addition", function () {
  while (true) {
    let item = waitForAnyCustomFieldAdded();
    block(matchDeletedCustomField(item.choice_set, item.comments, item._default, item.description, item.filter_logic, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.object_type, item.object_types, item.related_object_filter, item.related_object_type, item.required, item.search_weight, item.type, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight), function () {
      verifyCustomFieldExists(item.choice_set, item.comments, item._default, item.description, item.filter_logic, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.object_type, item.object_types, item.related_object_filter, item.related_object_type, item.required, item.search_weight, item.type, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight);
    });
  }
});

// Monitor: CustomField Deletion Verification
bthread("monitor:CustomField:deletion", function () {
  while (true) {
    let item = waitForAnyCustomFieldDeleted();
    block(matchAddedCustomField(item.choice_set, item.comments, item._default, item.description, item.filter_logic, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.object_type, item.object_types, item.related_object_filter, item.related_object_type, item.required, item.search_weight, item.type, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight), function () {
      verifyCustomFieldDoesNotExist(item.choice_set, item.comments, item._default, item.description, item.filter_logic, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.object_type, item.object_types, item.related_object_filter, item.related_object_type, item.required, item.search_weight, item.type, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight);
    });
  }
});

// Story: crud:CustomLink:nondet:1:1
bthread("crud:CustomLink:nondet:1:1", function () {
  let button_class = "button_class_910";
  let description = "description_910";
  let enabled = "enabled_910";
  let group_name = "group_name_910";
  let id = 910;
  let link_text = "link_text_910";
  let link_url = "link_url_910";
  let name = "name_910";
  let new_window = "new_window_910";
  let object_types = "object_types_910";
  let weight = 910;
  createCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  waitForCustomLinkAdded(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToAddExistingCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkExists(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  updateCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  deleteCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToDeleteANonExistingCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkDoesNotExist(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
});

// Story: crud:CustomLink:nondet:1:2
bthread("crud:CustomLink:nondet:1:2", function () {
  let button_class = "button_class_911";
  let description = "description_911";
  let enabled = "enabled_911";
  let group_name = "group_name_911";
  let id = 911;
  let link_text = "link_text_911";
  let link_url = "link_url_911";
  let name = "name_911";
  let new_window = "new_window_911";
  let object_types = "object_types_911";
  let weight = 911;
  createCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToAddExistingCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  updateCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkExists(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  deleteCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToDeleteANonExistingCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkDoesNotExist(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
});

// Story: crud:CustomLink:nondet:negative:dup-add
bthread("crud:CustomLink:nondet:negative:dup-add", function () {
  let button_class = "button_class_916";
  let description = "description_916";
  let enabled = "enabled_916";
  let group_name = "group_name_916";
  let id = 916;
  let link_text = "link_text_916";
  let link_url = "link_url_916";
  let name = "name_916";
  let new_window = "new_window_916";
  let object_types = "object_types_916";
  let weight = 916;
  createCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkExists(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToAddExistingCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkExists(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
});

// Monitor: CustomLink Addition Verification
bthread("monitor:CustomLink:addition", function () {
  while (true) {
    let item = waitForAnyCustomLinkAdded();
    block(matchDeletedCustomLink(item.button_class, item.description, item.enabled, item.group_name, item.id, item.link_text, item.link_url, item.name, item.new_window, item.object_types, item.weight), function () {
      verifyCustomLinkExists(item.button_class, item.description, item.enabled, item.group_name, item.id, item.link_text, item.link_url, item.name, item.new_window, item.object_types, item.weight);
    });
  }
});

// Monitor: CustomLink Deletion Verification
bthread("monitor:CustomLink:deletion", function () {
  while (true) {
    let item = waitForAnyCustomLinkDeleted();
    block(matchAddedCustomLink(item.button_class, item.description, item.enabled, item.group_name, item.id, item.link_text, item.link_url, item.name, item.new_window, item.object_types, item.weight), function () {
      verifyCustomLinkDoesNotExist(item.button_class, item.description, item.enabled, item.group_name, item.id, item.link_text, item.link_url, item.name, item.new_window, item.object_types, item.weight);
    });
  }
});

// Story: crud:EventRule:nondet:1:1
bthread("crud:EventRule:nondet:1:1", function () {
  let action_object_id = 930;
  let action_object_type = "action_object_type_930";
  let action_type = "action_type_930";
  let conditions = "conditions_930";
  let custom_fields = {};
  let description = "description_930";
  let enabled = "enabled_930";
  let event_types = "event_types_930";
  let id = 930;
  let name = "name_930";
  let object_types = "object_types_930";
  let tags = "tags_930";
  createEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  waitForEventRuleAdded(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  tryToAddExistingEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleExists(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  updateEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  deleteEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  tryToDeleteANonExistingEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleDoesNotExist(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
});

// Story: crud:EventRule:nondet:1:2
bthread("crud:EventRule:nondet:1:2", function () {
  let action_object_id = 931;
  let action_object_type = "action_object_type_931";
  let action_type = "action_type_931";
  let conditions = "conditions_931";
  let custom_fields = {};
  let description = "description_931";
  let enabled = "enabled_931";
  let event_types = "event_types_931";
  let id = 931;
  let name = "name_931";
  let object_types = "object_types_931";
  let tags = "tags_931";
  createEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  tryToAddExistingEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  updateEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleExists(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  deleteEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  tryToDeleteANonExistingEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleDoesNotExist(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
});

// Story: crud:EventRule:nondet:negative:dup-add
bthread("crud:EventRule:nondet:negative:dup-add", function () {
  let action_object_id = 936;
  let action_object_type = "action_object_type_936";
  let action_type = "action_type_936";
  let conditions = "conditions_936";
  let custom_fields = {};
  let description = "description_936";
  let enabled = "enabled_936";
  let event_types = "event_types_936";
  let id = 936;
  let name = "name_936";
  let object_types = "object_types_936";
  let tags = "tags_936";
  createEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleExists(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  tryToAddExistingEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleExists(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
});

// Monitor: EventRule Addition Verification
bthread("monitor:EventRule:addition", function () {
  while (true) {
    let item = waitForAnyEventRuleAdded();
    block(matchDeletedEventRule(item.action_object_id, item.action_object_type, item.action_type, item.conditions, item.custom_fields, item.description, item.enabled, item.event_types, item.id, item.name, item.object_types, item.tags), function () {
      verifyEventRuleExists(item.action_object_id, item.action_object_type, item.action_type, item.conditions, item.custom_fields, item.description, item.enabled, item.event_types, item.id, item.name, item.object_types, item.tags);
    });
  }
});

// Monitor: EventRule Deletion Verification
bthread("monitor:EventRule:deletion", function () {
  while (true) {
    let item = waitForAnyEventRuleDeleted();
    block(matchAddedEventRule(item.action_object_id, item.action_object_type, item.action_type, item.conditions, item.custom_fields, item.description, item.enabled, item.event_types, item.id, item.name, item.object_types, item.tags), function () {
      verifyEventRuleDoesNotExist(item.action_object_id, item.action_object_type, item.action_type, item.conditions, item.custom_fields, item.description, item.enabled, item.event_types, item.id, item.name, item.object_types, item.tags);
    });
  }
});

// Story: crud:ExportTemplate:nondet:1:1
bthread("crud:ExportTemplate:nondet:1:1", function () {
  let as_attachment = "as_attachment_940";
  let data_source = "data_source_940";
  let description = "description_940";
  let environment_params = "environment_params_940";
  let file_extension = "file_extension_940";
  let file_name = "file_name_940";
  let id = 940;
  let mime_type = "mime_type_940";
  let name = "name_940";
  let object_types = "object_types_940";
  let template_code = "template_code_940";
  createExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  waitForExportTemplateAdded(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  tryToAddExistingExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  updateExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  deleteExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  tryToDeleteANonExistingExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateDoesNotExist(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
});

// Story: crud:ExportTemplate:nondet:1:2
bthread("crud:ExportTemplate:nondet:1:2", function () {
  let as_attachment = "as_attachment_941";
  let data_source = "data_source_941";
  let description = "description_941";
  let environment_params = "environment_params_941";
  let file_extension = "file_extension_941";
  let file_name = "file_name_941";
  let id = 941;
  let mime_type = "mime_type_941";
  let name = "name_941";
  let object_types = "object_types_941";
  let template_code = "template_code_941";
  createExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  tryToAddExistingExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  updateExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  deleteExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  tryToDeleteANonExistingExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateDoesNotExist(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
});

// Story: crud:ExportTemplate:nondet:negative:dup-add
bthread("crud:ExportTemplate:nondet:negative:dup-add", function () {
  let as_attachment = "as_attachment_946";
  let data_source = "data_source_946";
  let description = "description_946";
  let environment_params = "environment_params_946";
  let file_extension = "file_extension_946";
  let file_name = "file_name_946";
  let id = 946;
  let mime_type = "mime_type_946";
  let name = "name_946";
  let object_types = "object_types_946";
  let template_code = "template_code_946";
  createExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  tryToAddExistingExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
});

// Monitor: ExportTemplate Addition Verification
bthread("monitor:ExportTemplate:addition", function () {
  while (true) {
    let item = waitForAnyExportTemplateAdded();
    block(matchDeletedExportTemplate(item.as_attachment, item.data_source, item.description, item.environment_params, item.file_extension, item.file_name, item.id, item.mime_type, item.name, item.object_types, item.template_code), function () {
      verifyExportTemplateExists(item.as_attachment, item.data_source, item.description, item.environment_params, item.file_extension, item.file_name, item.id, item.mime_type, item.name, item.object_types, item.template_code);
    });
  }
});

// Monitor: ExportTemplate Deletion Verification
bthread("monitor:ExportTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyExportTemplateDeleted();
    block(matchAddedExportTemplate(item.as_attachment, item.data_source, item.description, item.environment_params, item.file_extension, item.file_name, item.id, item.mime_type, item.name, item.object_types, item.template_code), function () {
      verifyExportTemplateDoesNotExist(item.as_attachment, item.data_source, item.description, item.environment_params, item.file_extension, item.file_name, item.id, item.mime_type, item.name, item.object_types, item.template_code);
    });
  }
});

// Story: crud:ImageAttachment:nondet:1:1
bthread("crud:ImageAttachment:nondet:1:1", function () {
  let description = "description_950";
  let id = 950;
  let image = "image_950";
  let name = "name_950";
  let object_id = 950;
  let object_type = "object_type_950";
  createImageAttachment(description, id, image, name, object_id, object_type);
  waitForImageAttachmentAdded(description, id, image, name, object_id, object_type);
  tryToAddExistingImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentExists(description, id, image, name, object_id, object_type);
  updateImageAttachment(description, id, image, name, object_id, object_type);
  deleteImageAttachment(description, id, image, name, object_id, object_type);
  tryToDeleteANonExistingImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentDoesNotExist(description, id, image, name, object_id, object_type);
});

// Story: crud:ImageAttachment:nondet:1:2
bthread("crud:ImageAttachment:nondet:1:2", function () {
  let description = "description_951";
  let id = 951;
  let image = "image_951";
  let name = "name_951";
  let object_id = 951;
  let object_type = "object_type_951";
  createImageAttachment(description, id, image, name, object_id, object_type);
  tryToAddExistingImageAttachment(description, id, image, name, object_id, object_type);
  updateImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentExists(description, id, image, name, object_id, object_type);
  deleteImageAttachment(description, id, image, name, object_id, object_type);
  tryToDeleteANonExistingImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentDoesNotExist(description, id, image, name, object_id, object_type);
});

// Story: crud:ImageAttachment:nondet:negative:dup-add
bthread("crud:ImageAttachment:nondet:negative:dup-add", function () {
  let description = "description_956";
  let id = 956;
  let image = "image_956";
  let name = "name_956";
  let object_id = 956;
  let object_type = "object_type_956";
  createImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentExists(description, id, image, name, object_id, object_type);
  tryToAddExistingImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentExists(description, id, image, name, object_id, object_type);
});

// Monitor: ImageAttachment Addition Verification
bthread("monitor:ImageAttachment:addition", function () {
  while (true) {
    let item = waitForAnyImageAttachmentAdded();
    block(matchDeletedImageAttachment(item.description, item.id, item.image, item.name, item.object_id, item.object_type), function () {
      verifyImageAttachmentExists(item.description, item.id, item.image, item.name, item.object_id, item.object_type);
    });
  }
});

// Monitor: ImageAttachment Deletion Verification
bthread("monitor:ImageAttachment:deletion", function () {
  while (true) {
    let item = waitForAnyImageAttachmentDeleted();
    block(matchAddedImageAttachment(item.description, item.id, item.image, item.name, item.object_id, item.object_type), function () {
      verifyImageAttachmentDoesNotExist(item.description, item.id, item.image, item.name, item.object_id, item.object_type);
    });
  }
});

// Story: crud:JournalEntry:nondet:1:1
bthread("crud:JournalEntry:nondet:1:1", function () {
  let assigned_object_id = 960;
  let assigned_object_type = "assigned_object_type_960";
  let comments = "comments_960";
  let created_by = 960;
  let custom_fields = {};
  let id = 960;
  let kind = "kind_960";
  let tags = "tags_960";
  createJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  waitForJournalEntryAdded(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  tryToAddExistingJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryExists(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  updateJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  deleteJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  tryToDeleteANonExistingJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryDoesNotExist(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
});

// Story: crud:JournalEntry:nondet:1:2
bthread("crud:JournalEntry:nondet:1:2", function () {
  let assigned_object_id = 961;
  let assigned_object_type = "assigned_object_type_961";
  let comments = "comments_961";
  let created_by = 961;
  let custom_fields = {};
  let id = 961;
  let kind = "kind_961";
  let tags = "tags_961";
  createJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  tryToAddExistingJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  updateJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryExists(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  deleteJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  tryToDeleteANonExistingJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryDoesNotExist(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
});

// Story: crud:JournalEntry:nondet:negative:dup-add
bthread("crud:JournalEntry:nondet:negative:dup-add", function () {
  let assigned_object_id = 966;
  let assigned_object_type = "assigned_object_type_966";
  let comments = "comments_966";
  let created_by = 966;
  let custom_fields = {};
  let id = 966;
  let kind = "kind_966";
  let tags = "tags_966";
  createJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryExists(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  tryToAddExistingJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryExists(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
});

// Monitor: JournalEntry Addition Verification
bthread("monitor:JournalEntry:addition", function () {
  while (true) {
    let item = waitForAnyJournalEntryAdded();
    block(matchDeletedJournalEntry(item.assigned_object_id, item.assigned_object_type, item.comments, item.created_by, item.custom_fields, item.id, item.kind, item.tags), function () {
      verifyJournalEntryExists(item.assigned_object_id, item.assigned_object_type, item.comments, item.created_by, item.custom_fields, item.id, item.kind, item.tags);
    });
  }
});

// Monitor: JournalEntry Deletion Verification
bthread("monitor:JournalEntry:deletion", function () {
  while (true) {
    let item = waitForAnyJournalEntryDeleted();
    block(matchAddedJournalEntry(item.assigned_object_id, item.assigned_object_type, item.comments, item.created_by, item.custom_fields, item.id, item.kind, item.tags), function () {
      verifyJournalEntryDoesNotExist(item.assigned_object_id, item.assigned_object_type, item.comments, item.created_by, item.custom_fields, item.id, item.kind, item.tags);
    });
  }
});

// Story: crud:NotificationGroup:nondet:1:1
bthread("crud:NotificationGroup:nondet:1:1", function () {
  let description = "description_970";
  let groups = "groups_970";
  let id = 970;
  let name = "name_970";
  let notifications = "notifications_970";
  let slug = "slug_970";
  let users = "users_970";
  createNotificationGroup(description, groups, id, name, notifications, slug, users);
  waitForNotificationGroupAdded(description, groups, id, name, notifications, slug, users);
  tryToAddExistingNotificationGroup(description, groups, id, name, notifications, slug, users);
  verifyNotificationGroupExists(description, groups, id, name, notifications, slug, users);
  updateNotificationGroup(description, groups, id, name, notifications, slug, users);
  deleteNotificationGroup(description, groups, id, name, notifications, slug, users);
  tryToDeleteANonExistingNotificationGroup(description, groups, id, name, notifications, slug, users);
  verifyNotificationGroupDoesNotExist(description, groups, id, name, notifications, slug, users);
});

// Story: crud:NotificationGroup:nondet:1:2
bthread("crud:NotificationGroup:nondet:1:2", function () {
  let description = "description_971";
  let groups = "groups_971";
  let id = 971;
  let name = "name_971";
  let notifications = "notifications_971";
  let slug = "slug_971";
  let users = "users_971";
  createNotificationGroup(description, groups, id, name, notifications, slug, users);
  tryToAddExistingNotificationGroup(description, groups, id, name, notifications, slug, users);
  updateNotificationGroup(description, groups, id, name, notifications, slug, users);
  verifyNotificationGroupExists(description, groups, id, name, notifications, slug, users);
  deleteNotificationGroup(description, groups, id, name, notifications, slug, users);
  tryToDeleteANonExistingNotificationGroup(description, groups, id, name, notifications, slug, users);
  verifyNotificationGroupDoesNotExist(description, groups, id, name, notifications, slug, users);
});

// Story: crud:NotificationGroup:nondet:negative:dup-add
bthread("crud:NotificationGroup:nondet:negative:dup-add", function () {
  let description = "description_976";
  let groups = "groups_976";
  let id = 976;
  let name = "name_976";
  let notifications = "notifications_976";
  let slug = "slug_976";
  let users = "users_976";
  createNotificationGroup(description, groups, id, name, notifications, slug, users);
  verifyNotificationGroupExists(description, groups, id, name, notifications, slug, users);
  tryToAddExistingNotificationGroup(description, groups, id, name, notifications, slug, users);
  verifyNotificationGroupExists(description, groups, id, name, notifications, slug, users);
});

// Monitor: NotificationGroup Addition Verification
bthread("monitor:NotificationGroup:addition", function () {
  while (true) {
    let item = waitForAnyNotificationGroupAdded();
    block(matchDeletedNotificationGroup(item.description, item.groups, item.id, item.name, item.notifications, item.slug, item.users), function () {
      verifyNotificationGroupExists(item.description, item.groups, item.id, item.name, item.notifications, item.slug, item.users);
    });
  }
});

// Monitor: NotificationGroup Deletion Verification
bthread("monitor:NotificationGroup:deletion", function () {
  while (true) {
    let item = waitForAnyNotificationGroupDeleted();
    block(matchAddedNotificationGroup(item.description, item.groups, item.id, item.name, item.notifications, item.slug, item.users), function () {
      verifyNotificationGroupDoesNotExist(item.description, item.groups, item.id, item.name, item.notifications, item.slug, item.users);
    });
  }
});

// Story: crud:Notification:nondet:1:1
bthread("crud:Notification:nondet:1:1", function () {
  let assigned_object_id = 980;
  let assigned_object_type = "assigned_object_type_980";
  let created = "created_980";
  let description = "description_980";
  let event_type = "event_type_980";
  let group = "group_980";
  let id = 980;
  let last_updated = "last_updated_980";
  let level = "level_980";
  let name = "name_980";
  let object_id = 980;
  let object_type = "object_type_980";
  let read = "read_980";
  let status = "status_980";
  let url = "url_980";
  let user = "user_980";
  createNotification(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  waitForNotificationAdded(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  tryToAddExistingNotification(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  verifyNotificationExists(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  updateNotification(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  deleteNotification(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  tryToDeleteANonExistingNotification(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  verifyNotificationDoesNotExist(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
});

// Story: crud:Notification:nondet:1:2
bthread("crud:Notification:nondet:1:2", function () {
  let assigned_object_id = 981;
  let assigned_object_type = "assigned_object_type_981";
  let created = "created_981";
  let description = "description_981";
  let event_type = "event_type_981";
  let group = "group_981";
  let id = 981;
  let last_updated = "last_updated_981";
  let level = "level_981";
  let name = "name_981";
  let object_id = 981;
  let object_type = "object_type_981";
  let read = "read_981";
  let status = "status_981";
  let url = "url_981";
  let user = "user_981";
  createNotification(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  tryToAddExistingNotification(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  updateNotification(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  verifyNotificationExists(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  deleteNotification(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  tryToDeleteANonExistingNotification(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  verifyNotificationDoesNotExist(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
});

// Story: crud:Notification:nondet:negative:dup-add
bthread("crud:Notification:nondet:negative:dup-add", function () {
  let assigned_object_id = 986;
  let assigned_object_type = "assigned_object_type_986";
  let created = "created_986";
  let description = "description_986";
  let event_type = "event_type_986";
  let group = "group_986";
  let id = 986;
  let last_updated = "last_updated_986";
  let level = "level_986";
  let name = "name_986";
  let object_id = 986;
  let object_type = "object_type_986";
  let read = "read_986";
  let status = "status_986";
  let url = "url_986";
  let user = "user_986";
  createNotification(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  verifyNotificationExists(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  tryToAddExistingNotification(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
  verifyNotificationExists(assigned_object_id, assigned_object_type, created, description, event_type, group, id, last_updated, level, name, object_id, object_type, read, status, url, user);
});

// Monitor: Notification Addition Verification
bthread("monitor:Notification:addition", function () {
  while (true) {
    let item = waitForAnyNotificationAdded();
    block(matchDeletedNotification(item.assigned_object_id, item.assigned_object_type, item.created, item.description, item.event_type, item.group, item.id, item.last_updated, item.level, item.name, item.object_id, item.object_type, item.read, item.status, item.url, item.user), function () {
      verifyNotificationExists(item.assigned_object_id, item.assigned_object_type, item.created, item.description, item.event_type, item.group, item.id, item.last_updated, item.level, item.name, item.object_id, item.object_type, item.read, item.status, item.url, item.user);
    });
  }
});

// Monitor: Notification Deletion Verification
bthread("monitor:Notification:deletion", function () {
  while (true) {
    let item = waitForAnyNotificationDeleted();
    block(matchAddedNotification(item.assigned_object_id, item.assigned_object_type, item.created, item.description, item.event_type, item.group, item.id, item.last_updated, item.level, item.name, item.object_id, item.object_type, item.read, item.status, item.url, item.user), function () {
      verifyNotificationDoesNotExist(item.assigned_object_id, item.assigned_object_type, item.created, item.description, item.event_type, item.group, item.id, item.last_updated, item.level, item.name, item.object_id, item.object_type, item.read, item.status, item.url, item.user);
    });
  }
});

// Story: crud:SavedFilter:nondet:1:1
bthread("crud:SavedFilter:nondet:1:1", function () {
  let description = "description_990";
  let enabled = "enabled_990";
  let filters = "filters_990";
  let id = 990;
  let name = "name_990";
  let object_type = "object_type_990";
  let object_types = "object_types_990";
  let parameters = "parameters_990";
  let shared = "shared_990";
  let slug = "slug_990";
  let user = 990;
  let weight = 990;
  createSavedFilter(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  waitForSavedFilterAdded(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  tryToAddExistingSavedFilter(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  updateSavedFilter(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  deleteSavedFilter(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  tryToDeleteANonExistingSavedFilter(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterDoesNotExist(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
});

// Story: crud:SavedFilter:nondet:1:2
bthread("crud:SavedFilter:nondet:1:2", function () {
  let description = "description_991";
  let enabled = "enabled_991";
  let filters = "filters_991";
  let id = 991;
  let name = "name_991";
  let object_type = "object_type_991";
  let object_types = "object_types_991";
  let parameters = "parameters_991";
  let shared = "shared_991";
  let slug = "slug_991";
  let user = 991;
  let weight = 991;
  createSavedFilter(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  tryToAddExistingSavedFilter(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  updateSavedFilter(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  deleteSavedFilter(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  tryToDeleteANonExistingSavedFilter(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterDoesNotExist(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
});

// Story: crud:SavedFilter:nondet:negative:dup-add
bthread("crud:SavedFilter:nondet:negative:dup-add", function () {
  let description = "description_996";
  let enabled = "enabled_996";
  let filters = "filters_996";
  let id = 996;
  let name = "name_996";
  let object_type = "object_type_996";
  let object_types = "object_types_996";
  let parameters = "parameters_996";
  let shared = "shared_996";
  let slug = "slug_996";
  let user = 996;
  let weight = 996;
  createSavedFilter(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  tryToAddExistingSavedFilter(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, filters, id, name, object_type, object_types, parameters, shared, slug, user, weight);
});

// Monitor: SavedFilter Addition Verification
bthread("monitor:SavedFilter:addition", function () {
  while (true) {
    let item = waitForAnySavedFilterAdded();
    block(matchDeletedSavedFilter(item.description, item.enabled, item.filters, item.id, item.name, item.object_type, item.object_types, item.parameters, item.shared, item.slug, item.user, item.weight), function () {
      verifySavedFilterExists(item.description, item.enabled, item.filters, item.id, item.name, item.object_type, item.object_types, item.parameters, item.shared, item.slug, item.user, item.weight);
    });
  }
});

// Monitor: SavedFilter Deletion Verification
bthread("monitor:SavedFilter:deletion", function () {
  while (true) {
    let item = waitForAnySavedFilterDeleted();
    block(matchAddedSavedFilter(item.description, item.enabled, item.filters, item.id, item.name, item.object_type, item.object_types, item.parameters, item.shared, item.slug, item.user, item.weight), function () {
      verifySavedFilterDoesNotExist(item.description, item.enabled, item.filters, item.id, item.name, item.object_type, item.object_types, item.parameters, item.shared, item.slug, item.user, item.weight);
    });
  }
});

// Story: crud:Script:nondet:1:1
bthread("crud:Script:nondet:1:1", function () {
  let description = "description_1000";
  let enabled = "enabled_1000";
  let id = 1000;
  let is_executable = "is_executable_1000";
  let module = "module_1000";
  let name = "name_1000";
  let source = "source_1000";
  createScript(description, enabled, id, is_executable, module, name, source);
  waitForScriptAdded(description, enabled, id, is_executable, module, name, source);
  tryToAddExistingScript(description, enabled, id, is_executable, module, name, source);
  verifyScriptExists(description, enabled, id, is_executable, module, name, source);
  updateScript(description, enabled, id, is_executable, module, name, source);
  deleteScript(description, enabled, id, is_executable, module, name, source);
  tryToDeleteANonExistingScript(description, enabled, id, is_executable, module, name, source);
  verifyScriptDoesNotExist(description, enabled, id, is_executable, module, name, source);
});

// Story: crud:Script:nondet:1:2
bthread("crud:Script:nondet:1:2", function () {
  let description = "description_1001";
  let enabled = "enabled_1001";
  let id = 1001;
  let is_executable = "is_executable_1001";
  let module = "module_1001";
  let name = "name_1001";
  let source = "source_1001";
  createScript(description, enabled, id, is_executable, module, name, source);
  tryToAddExistingScript(description, enabled, id, is_executable, module, name, source);
  updateScript(description, enabled, id, is_executable, module, name, source);
  verifyScriptExists(description, enabled, id, is_executable, module, name, source);
  deleteScript(description, enabled, id, is_executable, module, name, source);
  tryToDeleteANonExistingScript(description, enabled, id, is_executable, module, name, source);
  verifyScriptDoesNotExist(description, enabled, id, is_executable, module, name, source);
});

// Story: crud:Script:nondet:negative:dup-add
bthread("crud:Script:nondet:negative:dup-add", function () {
  let description = "description_1006";
  let enabled = "enabled_1006";
  let id = 1006;
  let is_executable = "is_executable_1006";
  let module = "module_1006";
  let name = "name_1006";
  let source = "source_1006";
  createScript(description, enabled, id, is_executable, module, name, source);
  verifyScriptExists(description, enabled, id, is_executable, module, name, source);
  tryToAddExistingScript(description, enabled, id, is_executable, module, name, source);
  verifyScriptExists(description, enabled, id, is_executable, module, name, source);
});

// Monitor: Script Addition Verification
bthread("monitor:Script:addition", function () {
  while (true) {
    let item = waitForAnyScriptAdded();
    block(matchDeletedScript(item.description, item.enabled, item.id, item.is_executable, item.module, item.name, item.source), function () {
      verifyScriptExists(item.description, item.enabled, item.id, item.is_executable, item.module, item.name, item.source);
    });
  }
});

// Monitor: Script Deletion Verification
bthread("monitor:Script:deletion", function () {
  while (true) {
    let item = waitForAnyScriptDeleted();
    block(matchAddedScript(item.description, item.enabled, item.id, item.is_executable, item.module, item.name, item.source), function () {
      verifyScriptDoesNotExist(item.description, item.enabled, item.id, item.is_executable, item.module, item.name, item.source);
    });
  }
});

// Story: crud:Subscription:nondet:1:1
bthread("crud:Subscription:nondet:1:1", function () {
  let id = 1010;
  let object_id = 1010;
  let object_type = "object_type_1010";
  let user = "user_1010";
  createSubscription(id, object_id, object_type, user);
  waitForSubscriptionAdded(id, object_id, object_type, user);
  tryToAddExistingSubscription(id, object_id, object_type, user);
  verifySubscriptionExists(id, object_id, object_type, user);
  updateSubscription(id, object_id, object_type, user);
  deleteSubscription(id, object_id, object_type, user);
  tryToDeleteANonExistingSubscription(id, object_id, object_type, user);
  verifySubscriptionDoesNotExist(id, object_id, object_type, user);
});

// Story: crud:Subscription:nondet:1:2
bthread("crud:Subscription:nondet:1:2", function () {
  let id = 1011;
  let object_id = 1011;
  let object_type = "object_type_1011";
  let user = "user_1011";
  createSubscription(id, object_id, object_type, user);
  tryToAddExistingSubscription(id, object_id, object_type, user);
  updateSubscription(id, object_id, object_type, user);
  verifySubscriptionExists(id, object_id, object_type, user);
  deleteSubscription(id, object_id, object_type, user);
  tryToDeleteANonExistingSubscription(id, object_id, object_type, user);
  verifySubscriptionDoesNotExist(id, object_id, object_type, user);
});

// Story: crud:Subscription:nondet:negative:dup-add
bthread("crud:Subscription:nondet:negative:dup-add", function () {
  let id = 1016;
  let object_id = 1016;
  let object_type = "object_type_1016";
  let user = "user_1016";
  createSubscription(id, object_id, object_type, user);
  verifySubscriptionExists(id, object_id, object_type, user);
  tryToAddExistingSubscription(id, object_id, object_type, user);
  verifySubscriptionExists(id, object_id, object_type, user);
});

// Monitor: Subscription Addition Verification
bthread("monitor:Subscription:addition", function () {
  while (true) {
    let item = waitForAnySubscriptionAdded();
    block(matchDeletedSubscription(item.id, item.object_id, item.object_type, item.user), function () {
      verifySubscriptionExists(item.id, item.object_id, item.object_type, item.user);
    });
  }
});

// Monitor: Subscription Deletion Verification
bthread("monitor:Subscription:deletion", function () {
  while (true) {
    let item = waitForAnySubscriptionDeleted();
    block(matchAddedSubscription(item.id, item.object_id, item.object_type, item.user), function () {
      verifySubscriptionDoesNotExist(item.id, item.object_id, item.object_type, item.user);
    });
  }
});

// Story: crud:TableConfig:nondet:1:1
bthread("crud:TableConfig:nondet:1:1", function () {
  let columns = "columns_1020";
  let description = "description_1020";
  let enabled = "enabled_1020";
  let id = 1020;
  let name = "name_1020";
  let object_type = "object_type_1020";
  let ordering = "ordering_1020";
  let shared = "shared_1020";
  let table = "table_1020";
  let user = 1020;
  let weight = 1020;
  createTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  waitForTableConfigAdded(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  tryToAddExistingTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigExists(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  updateTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  deleteTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  tryToDeleteANonExistingTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigDoesNotExist(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
});

// Story: crud:TableConfig:nondet:1:2
bthread("crud:TableConfig:nondet:1:2", function () {
  let columns = "columns_1021";
  let description = "description_1021";
  let enabled = "enabled_1021";
  let id = 1021;
  let name = "name_1021";
  let object_type = "object_type_1021";
  let ordering = "ordering_1021";
  let shared = "shared_1021";
  let table = "table_1021";
  let user = 1021;
  let weight = 1021;
  createTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  tryToAddExistingTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  updateTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigExists(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  deleteTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  tryToDeleteANonExistingTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigDoesNotExist(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
});

// Story: crud:TableConfig:nondet:negative:dup-add
bthread("crud:TableConfig:nondet:negative:dup-add", function () {
  let columns = "columns_1026";
  let description = "description_1026";
  let enabled = "enabled_1026";
  let id = 1026;
  let name = "name_1026";
  let object_type = "object_type_1026";
  let ordering = "ordering_1026";
  let shared = "shared_1026";
  let table = "table_1026";
  let user = 1026;
  let weight = 1026;
  createTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigExists(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  tryToAddExistingTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigExists(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
});

// Monitor: TableConfig Addition Verification
bthread("monitor:TableConfig:addition", function () {
  while (true) {
    let item = waitForAnyTableConfigAdded();
    block(matchDeletedTableConfig(item.columns, item.description, item.enabled, item.id, item.name, item.object_type, item.ordering, item.shared, item.table, item.user, item.weight), function () {
      verifyTableConfigExists(item.columns, item.description, item.enabled, item.id, item.name, item.object_type, item.ordering, item.shared, item.table, item.user, item.weight);
    });
  }
});

// Monitor: TableConfig Deletion Verification
bthread("monitor:TableConfig:deletion", function () {
  while (true) {
    let item = waitForAnyTableConfigDeleted();
    block(matchAddedTableConfig(item.columns, item.description, item.enabled, item.id, item.name, item.object_type, item.ordering, item.shared, item.table, item.user, item.weight), function () {
      verifyTableConfigDoesNotExist(item.columns, item.description, item.enabled, item.id, item.name, item.object_type, item.ordering, item.shared, item.table, item.user, item.weight);
    });
  }
});

// Story: crud:Tag:nondet:1:1
bthread("crud:Tag:nondet:1:1", function () {
  let color = "color_1040";
  let description = "description_1040";
  let id = 1040;
  let name = "name_1040";
  let object_types = "object_types_1040";
  let slug = "slug_1040";
  let weight = 1040;
  createTag(color, description, id, name, object_types, slug, weight);
  waitForTagAdded(color, description, id, name, object_types, slug, weight);
  tryToAddExistingTag(color, description, id, name, object_types, slug, weight);
  verifyTagExists(color, description, id, name, object_types, slug, weight);
  updateTag(color, description, id, name, object_types, slug, weight);
  deleteTag(color, description, id, name, object_types, slug, weight);
  tryToDeleteANonExistingTag(color, description, id, name, object_types, slug, weight);
  verifyTagDoesNotExist(color, description, id, name, object_types, slug, weight);
});

// Story: crud:Tag:nondet:1:2
bthread("crud:Tag:nondet:1:2", function () {
  let color = "color_1041";
  let description = "description_1041";
  let id = 1041;
  let name = "name_1041";
  let object_types = "object_types_1041";
  let slug = "slug_1041";
  let weight = 1041;
  createTag(color, description, id, name, object_types, slug, weight);
  tryToAddExistingTag(color, description, id, name, object_types, slug, weight);
  updateTag(color, description, id, name, object_types, slug, weight);
  verifyTagExists(color, description, id, name, object_types, slug, weight);
  deleteTag(color, description, id, name, object_types, slug, weight);
  tryToDeleteANonExistingTag(color, description, id, name, object_types, slug, weight);
  verifyTagDoesNotExist(color, description, id, name, object_types, slug, weight);
});

// Story: crud:Tag:nondet:negative:dup-add
bthread("crud:Tag:nondet:negative:dup-add", function () {
  let color = "color_1046";
  let description = "description_1046";
  let id = 1046;
  let name = "name_1046";
  let object_types = "object_types_1046";
  let slug = "slug_1046";
  let weight = 1046;
  createTag(color, description, id, name, object_types, slug, weight);
  verifyTagExists(color, description, id, name, object_types, slug, weight);
  tryToAddExistingTag(color, description, id, name, object_types, slug, weight);
  verifyTagExists(color, description, id, name, object_types, slug, weight);
});

// Monitor: Tag Addition Verification
bthread("monitor:Tag:addition", function () {
  while (true) {
    let item = waitForAnyTagAdded();
    block(matchDeletedTag(item.color, item.description, item.id, item.name, item.object_types, item.slug, item.weight), function () {
      verifyTagExists(item.color, item.description, item.id, item.name, item.object_types, item.slug, item.weight);
    });
  }
});

// Monitor: Tag Deletion Verification
bthread("monitor:Tag:deletion", function () {
  while (true) {
    let item = waitForAnyTagDeleted();
    block(matchAddedTag(item.color, item.description, item.id, item.name, item.object_types, item.slug, item.weight), function () {
      verifyTagDoesNotExist(item.color, item.description, item.id, item.name, item.object_types, item.slug, item.weight);
    });
  }
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let additional_headers = "additional_headers_1050";
  let body_template = "body_template_1050";
  let ca_file_path = "ca_file_path_1050";
  let custom_fields = {};
  let description = "description_1050";
  let http_content_type = "http_content_type_1050";
  let http_method = "http_method_1050";
  let id = 1050;
  let name = "name_1050";
  let payload_url = "payload_url_1050";
  let secret = "secret_1050";
  let ssl_verification = "ssl_verification_1050";
  let tags = "tags_1050";
  createWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  waitForWebhookAdded(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  tryToAddExistingWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookExists(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  updateWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  deleteWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  tryToDeleteANonExistingWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookDoesNotExist(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let additional_headers = "additional_headers_1051";
  let body_template = "body_template_1051";
  let ca_file_path = "ca_file_path_1051";
  let custom_fields = {};
  let description = "description_1051";
  let http_content_type = "http_content_type_1051";
  let http_method = "http_method_1051";
  let id = 1051;
  let name = "name_1051";
  let payload_url = "payload_url_1051";
  let secret = "secret_1051";
  let ssl_verification = "ssl_verification_1051";
  let tags = "tags_1051";
  createWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  tryToAddExistingWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  updateWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookExists(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  deleteWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  tryToDeleteANonExistingWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookDoesNotExist(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let additional_headers = "additional_headers_1056";
  let body_template = "body_template_1056";
  let ca_file_path = "ca_file_path_1056";
  let custom_fields = {};
  let description = "description_1056";
  let http_content_type = "http_content_type_1056";
  let http_method = "http_method_1056";
  let id = 1056;
  let name = "name_1056";
  let payload_url = "payload_url_1056";
  let secret = "secret_1056";
  let ssl_verification = "ssl_verification_1056";
  let tags = "tags_1056";
  createWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookExists(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  tryToAddExistingWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookExists(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
});

// Monitor: Webhook Addition Verification
bthread("monitor:Webhook:addition", function () {
  while (true) {
    let item = waitForAnyWebhookAdded();
    block(matchDeletedWebhook(item.additional_headers, item.body_template, item.ca_file_path, item.custom_fields, item.description, item.http_content_type, item.http_method, item.id, item.name, item.payload_url, item.secret, item.ssl_verification, item.tags), function () {
      verifyWebhookExists(item.additional_headers, item.body_template, item.ca_file_path, item.custom_fields, item.description, item.http_content_type, item.http_method, item.id, item.name, item.payload_url, item.secret, item.ssl_verification, item.tags);
    });
  }
});

// Monitor: Webhook Deletion Verification
bthread("monitor:Webhook:deletion", function () {
  while (true) {
    let item = waitForAnyWebhookDeleted();
    block(matchAddedWebhook(item.additional_headers, item.body_template, item.ca_file_path, item.custom_fields, item.description, item.http_content_type, item.http_method, item.id, item.name, item.payload_url, item.secret, item.ssl_verification, item.tags), function () {
      verifyWebhookDoesNotExist(item.additional_headers, item.body_template, item.ca_file_path, item.custom_fields, item.description, item.http_content_type, item.http_method, item.id, item.name, item.payload_url, item.secret, item.ssl_verification, item.tags);
    });
  }
});

// Story: crud:Aggregate:nondet:1:1
bthread("crud:Aggregate:nondet:1:1", function () {
  let comments = "comments_1060";
  let custom_fields = {};
  let date_added = "date_added_1060";
  let description = "description_1060";
  let id = 1060;
  let prefix = "prefix_1060";
  let rir = "rir_1060";
  let tags = "tags_1060";
  let tenant = "tenant_1060";
  createAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  waitForAggregateAdded(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  tryToAddExistingAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateExists(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  updateAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  deleteAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  tryToDeleteANonExistingAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateDoesNotExist(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
});

// Story: crud:Aggregate:nondet:1:2
bthread("crud:Aggregate:nondet:1:2", function () {
  let comments = "comments_1061";
  let custom_fields = {};
  let date_added = "date_added_1061";
  let description = "description_1061";
  let id = 1061;
  let prefix = "prefix_1061";
  let rir = "rir_1061";
  let tags = "tags_1061";
  let tenant = "tenant_1061";
  createAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  tryToAddExistingAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  updateAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateExists(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  deleteAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  tryToDeleteANonExistingAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateDoesNotExist(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
});

// Story: crud:Aggregate:nondet:negative:dup-add
bthread("crud:Aggregate:nondet:negative:dup-add", function () {
  let comments = "comments_1066";
  let custom_fields = {};
  let date_added = "date_added_1066";
  let description = "description_1066";
  let id = 1066;
  let prefix = "prefix_1066";
  let rir = "rir_1066";
  let tags = "tags_1066";
  let tenant = "tenant_1066";
  createAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateExists(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  tryToAddExistingAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateExists(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
});

// Monitor: Aggregate Addition Verification
bthread("monitor:Aggregate:addition", function () {
  while (true) {
    let item = waitForAnyAggregateAdded();
    block(matchDeletedAggregate(item.comments, item.custom_fields, item.date_added, item.description, item.id, item.prefix, item.rir, item.tags, item.tenant), function () {
      verifyAggregateExists(item.comments, item.custom_fields, item.date_added, item.description, item.id, item.prefix, item.rir, item.tags, item.tenant);
    });
  }
});

// Monitor: Aggregate Deletion Verification
bthread("monitor:Aggregate:deletion", function () {
  while (true) {
    let item = waitForAnyAggregateDeleted();
    block(matchAddedAggregate(item.comments, item.custom_fields, item.date_added, item.description, item.id, item.prefix, item.rir, item.tags, item.tenant), function () {
      verifyAggregateDoesNotExist(item.comments, item.custom_fields, item.date_added, item.description, item.id, item.prefix, item.rir, item.tags, item.tenant);
    });
  }
});

// Story: crud:ASNRange:nondet:1:1
bthread("crud:ASNRange:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1070";
  let end = 1070;
  let id = 1070;
  let name = "name_1070";
  let rir = "rir_1070";
  let slug = "slug_1070";
  let start = 1070;
  let tags = "tags_1070";
  let tenant = "tenant_1070";
  createASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  waitForASNRangeAdded(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  tryToAddExistingASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  verifyASNRangeExists(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  updateASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  deleteASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  tryToDeleteANonExistingASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  verifyASNRangeDoesNotExist(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
});

// Story: crud:ASNRange:nondet:1:2
bthread("crud:ASNRange:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_1071";
  let end = 1071;
  let id = 1071;
  let name = "name_1071";
  let rir = "rir_1071";
  let slug = "slug_1071";
  let start = 1071;
  let tags = "tags_1071";
  let tenant = "tenant_1071";
  createASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  tryToAddExistingASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  updateASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  verifyASNRangeExists(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  deleteASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  tryToDeleteANonExistingASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  verifyASNRangeDoesNotExist(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
});

// Story: crud:ASNRange:nondet:negative:dup-add
bthread("crud:ASNRange:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_1076";
  let end = 1076;
  let id = 1076;
  let name = "name_1076";
  let rir = "rir_1076";
  let slug = "slug_1076";
  let start = 1076;
  let tags = "tags_1076";
  let tenant = "tenant_1076";
  createASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  verifyASNRangeExists(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  tryToAddExistingASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  verifyASNRangeExists(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
});

// Monitor: ASNRange Addition Verification
bthread("monitor:ASNRange:addition", function () {
  while (true) {
    let item = waitForAnyASNRangeAdded();
    block(matchDeletedASNRange(item.custom_fields, item.description, item.end, item.id, item.name, item.rir, item.slug, item.start, item.tags, item.tenant), function () {
      verifyASNRangeExists(item.custom_fields, item.description, item.end, item.id, item.name, item.rir, item.slug, item.start, item.tags, item.tenant);
    });
  }
});

// Monitor: ASNRange Deletion Verification
bthread("monitor:ASNRange:deletion", function () {
  while (true) {
    let item = waitForAnyASNRangeDeleted();
    block(matchAddedASNRange(item.custom_fields, item.description, item.end, item.id, item.name, item.rir, item.slug, item.start, item.tags, item.tenant), function () {
      verifyASNRangeDoesNotExist(item.custom_fields, item.description, item.end, item.id, item.name, item.rir, item.slug, item.start, item.tags, item.tenant);
    });
  }
});

// Story: crud:ASN:nondet:1:1
bthread("crud:ASN:nondet:1:1", function () {
  let asn = 1080;
  let comments = "comments_1080";
  let custom_fields = {};
  let description = "description_1080";
  let id = 1080;
  let rir = "rir_1080";
  let tags = "tags_1080";
  let tenant = "tenant_1080";
  createASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  waitForASNAdded(asn, comments, custom_fields, description, id, rir, tags, tenant);
  tryToAddExistingASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNExists(asn, comments, custom_fields, description, id, rir, tags, tenant);
  updateASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  deleteASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  tryToDeleteANonExistingASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNDoesNotExist(asn, comments, custom_fields, description, id, rir, tags, tenant);
});

// Story: crud:ASN:nondet:1:2
bthread("crud:ASN:nondet:1:2", function () {
  let asn = 1081;
  let comments = "comments_1081";
  let custom_fields = {};
  let description = "description_1081";
  let id = 1081;
  let rir = "rir_1081";
  let tags = "tags_1081";
  let tenant = "tenant_1081";
  createASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  tryToAddExistingASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  updateASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNExists(asn, comments, custom_fields, description, id, rir, tags, tenant);
  deleteASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  tryToDeleteANonExistingASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNDoesNotExist(asn, comments, custom_fields, description, id, rir, tags, tenant);
});

// Story: crud:ASN:nondet:negative:dup-add
bthread("crud:ASN:nondet:negative:dup-add", function () {
  let asn = 1086;
  let comments = "comments_1086";
  let custom_fields = {};
  let description = "description_1086";
  let id = 1086;
  let rir = "rir_1086";
  let tags = "tags_1086";
  let tenant = "tenant_1086";
  createASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNExists(asn, comments, custom_fields, description, id, rir, tags, tenant);
  tryToAddExistingASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNExists(asn, comments, custom_fields, description, id, rir, tags, tenant);
});

// Monitor: ASN Addition Verification
bthread("monitor:ASN:addition", function () {
  while (true) {
    let item = waitForAnyASNAdded();
    block(matchDeletedASN(item.asn, item.comments, item.custom_fields, item.description, item.id, item.rir, item.tags, item.tenant), function () {
      verifyASNExists(item.asn, item.comments, item.custom_fields, item.description, item.id, item.rir, item.tags, item.tenant);
    });
  }
});

// Monitor: ASN Deletion Verification
bthread("monitor:ASN:deletion", function () {
  while (true) {
    let item = waitForAnyASNDeleted();
    block(matchAddedASN(item.asn, item.comments, item.custom_fields, item.description, item.id, item.rir, item.tags, item.tenant), function () {
      verifyASNDoesNotExist(item.asn, item.comments, item.custom_fields, item.description, item.id, item.rir, item.tags, item.tenant);
    });
  }
});

// Story: crud:FHRPGroupAssignment:nondet:1:1
bthread("crud:FHRPGroupAssignment:nondet:1:1", function () {
  let group = "group_1090";
  let id = 1090;
  let interface_id;
  let interface_type = "interface_type_1090";
  let priority = 1090;
  // Dependency Barrier
  let deps = {};
  deps["interface_id"] = matchAnyInterfaceAdded();
  let pkMap = {"interface_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  interface_id = captured["interface_id"];
  createFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  waitForFHRPGroupAssignmentAdded(group, id, interface_id, interface_type, priority);
  tryToAddExistingFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  verifyFHRPGroupAssignmentExists(group, id, interface_id, interface_type, priority);
  updateFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  deleteFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  tryToDeleteANonExistingFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  verifyFHRPGroupAssignmentDoesNotExist(group, id, interface_id, interface_type, priority);
});

// Story: crud:FHRPGroupAssignment:nondet:1:2
bthread("crud:FHRPGroupAssignment:nondet:1:2", function () {
  let group = "group_1091";
  let id = 1091;
  let interface_id;
  let interface_type = "interface_type_1091";
  let priority = 1091;
  // Dependency Barrier
  let deps = {};
  deps["interface_id"] = matchAnyInterfaceAdded();
  let pkMap = {"interface_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  interface_id = captured["interface_id"];
  createFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  tryToAddExistingFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  updateFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  verifyFHRPGroupAssignmentExists(group, id, interface_id, interface_type, priority);
  deleteFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  tryToDeleteANonExistingFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  verifyFHRPGroupAssignmentDoesNotExist(group, id, interface_id, interface_type, priority);
});

// Story: crud:FHRPGroupAssignment:nondet:negative:dup-add
bthread("crud:FHRPGroupAssignment:nondet:negative:dup-add", function () {
  let group = "group_1096";
  let id = 1096;
  let interface_id;
  let interface_type = "interface_type_1096";
  let priority = 1096;
  // Dependency Barrier
  let deps = {};
  deps["interface_id"] = matchAnyInterfaceAdded();
  let pkMap = {"interface_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  interface_id = captured["interface_id"];
  createFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  verifyFHRPGroupAssignmentExists(group, id, interface_id, interface_type, priority);
  tryToAddExistingFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  verifyFHRPGroupAssignmentExists(group, id, interface_id, interface_type, priority);
});

// Monitor: FHRPGroupAssignment Addition Verification
bthread("monitor:FHRPGroupAssignment:addition", function () {
  while (true) {
    let item = waitForAnyFHRPGroupAssignmentAdded();
    block(matchDeletedFHRPGroupAssignment(item.group, item.id, item.interface_id, item.interface_type, item.priority), function () {
      verifyFHRPGroupAssignmentExists(item.group, item.id, item.interface_id, item.interface_type, item.priority);
    });
  }
});

// Monitor: FHRPGroupAssignment Deletion Verification
bthread("monitor:FHRPGroupAssignment:deletion", function () {
  while (true) {
    let item = waitForAnyFHRPGroupAssignmentDeleted();
    block(matchAddedFHRPGroupAssignment(item.group, item.id, item.interface_id, item.interface_type, item.priority), function () {
      verifyFHRPGroupAssignmentDoesNotExist(item.group, item.id, item.interface_id, item.interface_type, item.priority);
    });
  }
});

// Story: crud:FHRPGroup:nondet:1:1
bthread("crud:FHRPGroup:nondet:1:1", function () {
  let auth_key = "auth_key_1100";
  let auth_type = "auth_type_1100";
  let comments = "comments_1100";
  let custom_fields = {};
  let description = "description_1100";
  let group_id;
  let id = 1100;
  let name = "name_1100";
  let protocol = "protocol_1100";
  let slug = "slug_1100";
  let tags = "tags_1100";
  // Dependency Barrier
  let deps = {};
  deps["group_id"] = matchAnyGroupAdded();
  let pkMap = {"group_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  group_id = captured["group_id"];
  createFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  waitForFHRPGroupAdded(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  tryToAddExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  verifyFHRPGroupExists(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  updateFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  deleteFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  tryToDeleteANonExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  verifyFHRPGroupDoesNotExist(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
});

// Story: crud:FHRPGroup:nondet:1:2
bthread("crud:FHRPGroup:nondet:1:2", function () {
  let auth_key = "auth_key_1101";
  let auth_type = "auth_type_1101";
  let comments = "comments_1101";
  let custom_fields = {};
  let description = "description_1101";
  let group_id;
  let id = 1101;
  let name = "name_1101";
  let protocol = "protocol_1101";
  let slug = "slug_1101";
  let tags = "tags_1101";
  // Dependency Barrier
  let deps = {};
  deps["group_id"] = matchAnyGroupAdded();
  let pkMap = {"group_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  group_id = captured["group_id"];
  createFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  tryToAddExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  updateFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  verifyFHRPGroupExists(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  deleteFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  tryToDeleteANonExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  verifyFHRPGroupDoesNotExist(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
});

// Story: crud:FHRPGroup:nondet:negative:dup-add
bthread("crud:FHRPGroup:nondet:negative:dup-add", function () {
  let auth_key = "auth_key_1106";
  let auth_type = "auth_type_1106";
  let comments = "comments_1106";
  let custom_fields = {};
  let description = "description_1106";
  let group_id;
  let id = 1106;
  let name = "name_1106";
  let protocol = "protocol_1106";
  let slug = "slug_1106";
  let tags = "tags_1106";
  // Dependency Barrier
  let deps = {};
  deps["group_id"] = matchAnyGroupAdded();
  let pkMap = {"group_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  group_id = captured["group_id"];
  createFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  verifyFHRPGroupExists(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  tryToAddExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
  verifyFHRPGroupExists(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, slug, tags);
});

// Monitor: FHRPGroup Addition Verification
bthread("monitor:FHRPGroup:addition", function () {
  while (true) {
    let item = waitForAnyFHRPGroupAdded();
    block(matchDeletedFHRPGroup(item.auth_key, item.auth_type, item.comments, item.custom_fields, item.description, item.group_id, item.id, item.name, item.protocol, item.slug, item.tags), function () {
      verifyFHRPGroupExists(item.auth_key, item.auth_type, item.comments, item.custom_fields, item.description, item.group_id, item.id, item.name, item.protocol, item.slug, item.tags);
    });
  }
});

// Monitor: FHRPGroup Deletion Verification
bthread("monitor:FHRPGroup:deletion", function () {
  while (true) {
    let item = waitForAnyFHRPGroupDeleted();
    block(matchAddedFHRPGroup(item.auth_key, item.auth_type, item.comments, item.custom_fields, item.description, item.group_id, item.id, item.name, item.protocol, item.slug, item.tags), function () {
      verifyFHRPGroupDoesNotExist(item.auth_key, item.auth_type, item.comments, item.custom_fields, item.description, item.group_id, item.id, item.name, item.protocol, item.slug, item.tags);
    });
  }
});

// Story: crud:IPAddress:nondet:1:1
bthread("crud:IPAddress:nondet:1:1", function () {
  let address = "address_1110";
  let assigned_object_id = 1110;
  let assigned_object_type = "assigned_object_type_1110";
  let assigned_to_interface = "assigned_to_interface_1110";
  let comments = "comments_1110";
  let custom_fields = {};
  let description = "description_1110";
  let dns_name = "dns_name_1110";
  let id = 1110;
  let _interface = "interface_1110";
  let nat_inside = 1110;
  let role = "role_1110";
  let service = "service_1110";
  let status = "status_1110";
  let tags = "tags_1110";
  let tenant = "tenant_1110";
  let tenant_id;
  let vrf = "vrf_1110";
  let vrf_id;
  // Dependency Barrier
  let deps = {};
  deps["tenant_id"] = matchAnyTenantAdded();
  deps["vrf_id"] = matchAnyVRFAdded();
  let pkMap = {"tenant_id": "id", "vrf_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  tenant_id = captured["tenant_id"];
  vrf_id = captured["vrf_id"];
  createIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  waitForIPAddressAdded(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  updateIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  deleteIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  tryToDeleteANonExistingIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  verifyIPAddressDoesNotExist(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
});

// Story: crud:IPAddress:nondet:1:2
bthread("crud:IPAddress:nondet:1:2", function () {
  let address = "address_1111";
  let assigned_object_id = 1111;
  let assigned_object_type = "assigned_object_type_1111";
  let assigned_to_interface = "assigned_to_interface_1111";
  let comments = "comments_1111";
  let custom_fields = {};
  let description = "description_1111";
  let dns_name = "dns_name_1111";
  let id = 1111;
  let _interface = "interface_1111";
  let nat_inside = 1111;
  let role = "role_1111";
  let service = "service_1111";
  let status = "status_1111";
  let tags = "tags_1111";
  let tenant = "tenant_1111";
  let tenant_id;
  let vrf = "vrf_1111";
  let vrf_id;
  // Dependency Barrier
  let deps = {};
  deps["tenant_id"] = matchAnyTenantAdded();
  deps["vrf_id"] = matchAnyVRFAdded();
  let pkMap = {"tenant_id": "id", "vrf_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  tenant_id = captured["tenant_id"];
  vrf_id = captured["vrf_id"];
  createIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  updateIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  deleteIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  tryToDeleteANonExistingIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  verifyIPAddressDoesNotExist(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
});

// Story: crud:IPAddress:nondet:negative:dup-add
bthread("crud:IPAddress:nondet:negative:dup-add", function () {
  let address = "address_1116";
  let assigned_object_id = 1116;
  let assigned_object_type = "assigned_object_type_1116";
  let assigned_to_interface = "assigned_to_interface_1116";
  let comments = "comments_1116";
  let custom_fields = {};
  let description = "description_1116";
  let dns_name = "dns_name_1116";
  let id = 1116;
  let _interface = "interface_1116";
  let nat_inside = 1116;
  let role = "role_1116";
  let service = "service_1116";
  let status = "status_1116";
  let tags = "tags_1116";
  let tenant = "tenant_1116";
  let tenant_id;
  let vrf = "vrf_1116";
  let vrf_id;
  // Dependency Barrier
  let deps = {};
  deps["tenant_id"] = matchAnyTenantAdded();
  deps["vrf_id"] = matchAnyVRFAdded();
  let pkMap = {"tenant_id": "id", "vrf_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  tenant_id = captured["tenant_id"];
  vrf_id = captured["vrf_id"];
  createIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, assigned_to_interface, comments, custom_fields, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
});

// Monitor: IPAddress Addition Verification
bthread("monitor:IPAddress:addition", function () {
  while (true) {
    let item = waitForAnyIPAddressAdded();
    block(matchDeletedIPAddress(item.address, item.assigned_object_id, item.assigned_object_type, item.assigned_to_interface, item.comments, item.custom_fields, item.description, item.dns_name, item.id, item._interface, item.nat_inside, item.role, item.service, item.status, item.tags, item.tenant, item.tenant_id, item.vrf, item.vrf_id), function () {
      verifyIPAddressExists(item.address, item.assigned_object_id, item.assigned_object_type, item.assigned_to_interface, item.comments, item.custom_fields, item.description, item.dns_name, item.id, item._interface, item.nat_inside, item.role, item.service, item.status, item.tags, item.tenant, item.tenant_id, item.vrf, item.vrf_id);
    });
  }
});

// Monitor: IPAddress Deletion Verification
bthread("monitor:IPAddress:deletion", function () {
  while (true) {
    let item = waitForAnyIPAddressDeleted();
    block(matchAddedIPAddress(item.address, item.assigned_object_id, item.assigned_object_type, item.assigned_to_interface, item.comments, item.custom_fields, item.description, item.dns_name, item.id, item._interface, item.nat_inside, item.role, item.service, item.status, item.tags, item.tenant, item.tenant_id, item.vrf, item.vrf_id), function () {
      verifyIPAddressDoesNotExist(item.address, item.assigned_object_id, item.assigned_object_type, item.assigned_to_interface, item.comments, item.custom_fields, item.description, item.dns_name, item.id, item._interface, item.nat_inside, item.role, item.service, item.status, item.tags, item.tenant, item.tenant_id, item.vrf, item.vrf_id);
    });
  }
});

// Story: crud:IPRange:nondet:1:1
bthread("crud:IPRange:nondet:1:1", function () {
  let comments = "comments_1120";
  let custom_fields = {};
  let description = "description_1120";
  let end_address = "end_address_1120";
  let id = 1120;
  let mark_populated = "mark_populated_1120";
  let mark_utilized = "mark_utilized_1120";
  let role = "role_1120";
  let start_address = "start_address_1120";
  let status = "status_1120";
  let tags = "tags_1120";
  let tenant = "tenant_1120";
  let vrf = "vrf_1120";
  createIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  waitForIPRangeAdded(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  tryToAddExistingIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  updateIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  deleteIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  tryToDeleteANonExistingIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeDoesNotExist(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
});

// Story: crud:IPRange:nondet:1:2
bthread("crud:IPRange:nondet:1:2", function () {
  let comments = "comments_1121";
  let custom_fields = {};
  let description = "description_1121";
  let end_address = "end_address_1121";
  let id = 1121;
  let mark_populated = "mark_populated_1121";
  let mark_utilized = "mark_utilized_1121";
  let role = "role_1121";
  let start_address = "start_address_1121";
  let status = "status_1121";
  let tags = "tags_1121";
  let tenant = "tenant_1121";
  let vrf = "vrf_1121";
  createIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  tryToAddExistingIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  updateIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  deleteIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  tryToDeleteANonExistingIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeDoesNotExist(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
});

// Story: crud:IPRange:nondet:negative:dup-add
bthread("crud:IPRange:nondet:negative:dup-add", function () {
  let comments = "comments_1126";
  let custom_fields = {};
  let description = "description_1126";
  let end_address = "end_address_1126";
  let id = 1126;
  let mark_populated = "mark_populated_1126";
  let mark_utilized = "mark_utilized_1126";
  let role = "role_1126";
  let start_address = "start_address_1126";
  let status = "status_1126";
  let tags = "tags_1126";
  let tenant = "tenant_1126";
  let vrf = "vrf_1126";
  createIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  tryToAddExistingIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
});

// Monitor: IPRange Addition Verification
bthread("monitor:IPRange:addition", function () {
  while (true) {
    let item = waitForAnyIPRangeAdded();
    block(matchDeletedIPRange(item.comments, item.custom_fields, item.description, item.end_address, item.id, item.mark_populated, item.mark_utilized, item.role, item.start_address, item.status, item.tags, item.tenant, item.vrf), function () {
      verifyIPRangeExists(item.comments, item.custom_fields, item.description, item.end_address, item.id, item.mark_populated, item.mark_utilized, item.role, item.start_address, item.status, item.tags, item.tenant, item.vrf);
    });
  }
});

// Monitor: IPRange Deletion Verification
bthread("monitor:IPRange:deletion", function () {
  while (true) {
    let item = waitForAnyIPRangeDeleted();
    block(matchAddedIPRange(item.comments, item.custom_fields, item.description, item.end_address, item.id, item.mark_populated, item.mark_utilized, item.role, item.start_address, item.status, item.tags, item.tenant, item.vrf), function () {
      verifyIPRangeDoesNotExist(item.comments, item.custom_fields, item.description, item.end_address, item.id, item.mark_populated, item.mark_utilized, item.role, item.start_address, item.status, item.tags, item.tenant, item.vrf);
    });
  }
});

// Story: crud:Prefix:nondet:1:1
bthread("crud:Prefix:nondet:1:1", function () {
  let comments = "comments_1130";
  let custom_fields = {};
  let description = "description_1130";
  let id = 1130;
  let is_pool = "is_pool_1130";
  let mark_utilized = "mark_utilized_1130";
  let prefix = "prefix_1130";
  let role = "role_1130";
  let scope_id = 1130;
  let scope_type = "scope_type_1130";
  let status = "status_1130";
  let tags = "tags_1130";
  let tenant = "tenant_1130";
  let vlan = "vlan_1130";
  let vrf = "vrf_1130";
  createPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  waitForPrefixAdded(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  tryToAddExistingPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixExists(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  updatePrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  deletePrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  tryToDeleteANonExistingPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixDoesNotExist(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
});

// Story: crud:Prefix:nondet:1:2
bthread("crud:Prefix:nondet:1:2", function () {
  let comments = "comments_1131";
  let custom_fields = {};
  let description = "description_1131";
  let id = 1131;
  let is_pool = "is_pool_1131";
  let mark_utilized = "mark_utilized_1131";
  let prefix = "prefix_1131";
  let role = "role_1131";
  let scope_id = 1131;
  let scope_type = "scope_type_1131";
  let status = "status_1131";
  let tags = "tags_1131";
  let tenant = "tenant_1131";
  let vlan = "vlan_1131";
  let vrf = "vrf_1131";
  createPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  tryToAddExistingPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  updatePrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixExists(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  deletePrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  tryToDeleteANonExistingPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixDoesNotExist(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
});

// Story: crud:Prefix:nondet:negative:dup-add
bthread("crud:Prefix:nondet:negative:dup-add", function () {
  let comments = "comments_1136";
  let custom_fields = {};
  let description = "description_1136";
  let id = 1136;
  let is_pool = "is_pool_1136";
  let mark_utilized = "mark_utilized_1136";
  let prefix = "prefix_1136";
  let role = "role_1136";
  let scope_id = 1136;
  let scope_type = "scope_type_1136";
  let status = "status_1136";
  let tags = "tags_1136";
  let tenant = "tenant_1136";
  let vlan = "vlan_1136";
  let vrf = "vrf_1136";
  createPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixExists(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  tryToAddExistingPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixExists(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
});

// Monitor: Prefix Addition Verification
bthread("monitor:Prefix:addition", function () {
  while (true) {
    let item = waitForAnyPrefixAdded();
    block(matchDeletedPrefix(item.comments, item.custom_fields, item.description, item.id, item.is_pool, item.mark_utilized, item.prefix, item.role, item.scope_id, item.scope_type, item.status, item.tags, item.tenant, item.vlan, item.vrf), function () {
      verifyPrefixExists(item.comments, item.custom_fields, item.description, item.id, item.is_pool, item.mark_utilized, item.prefix, item.role, item.scope_id, item.scope_type, item.status, item.tags, item.tenant, item.vlan, item.vrf);
    });
  }
});

// Monitor: Prefix Deletion Verification
bthread("monitor:Prefix:deletion", function () {
  while (true) {
    let item = waitForAnyPrefixDeleted();
    block(matchAddedPrefix(item.comments, item.custom_fields, item.description, item.id, item.is_pool, item.mark_utilized, item.prefix, item.role, item.scope_id, item.scope_type, item.status, item.tags, item.tenant, item.vlan, item.vrf), function () {
      verifyPrefixDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.is_pool, item.mark_utilized, item.prefix, item.role, item.scope_id, item.scope_type, item.status, item.tags, item.tenant, item.vlan, item.vrf);
    });
  }
});

// Story: crud:RIR:nondet:1:1
bthread("crud:RIR:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1140";
  let id = 1140;
  let is_private = "is_private_1140";
  let name = "name_1140";
  let slug = "slug_1140";
  let tags = "tags_1140";
  createRIR(custom_fields, description, id, is_private, name, slug, tags);
  waitForRIRAdded(custom_fields, description, id, is_private, name, slug, tags);
  tryToAddExistingRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, slug, tags);
  updateRIR(custom_fields, description, id, is_private, name, slug, tags);
  deleteRIR(custom_fields, description, id, is_private, name, slug, tags);
  tryToDeleteANonExistingRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRDoesNotExist(custom_fields, description, id, is_private, name, slug, tags);
});

// Story: crud:RIR:nondet:1:2
bthread("crud:RIR:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_1141";
  let id = 1141;
  let is_private = "is_private_1141";
  let name = "name_1141";
  let slug = "slug_1141";
  let tags = "tags_1141";
  createRIR(custom_fields, description, id, is_private, name, slug, tags);
  tryToAddExistingRIR(custom_fields, description, id, is_private, name, slug, tags);
  updateRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, slug, tags);
  deleteRIR(custom_fields, description, id, is_private, name, slug, tags);
  tryToDeleteANonExistingRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRDoesNotExist(custom_fields, description, id, is_private, name, slug, tags);
});

// Story: crud:RIR:nondet:negative:dup-add
bthread("crud:RIR:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_1146";
  let id = 1146;
  let is_private = "is_private_1146";
  let name = "name_1146";
  let slug = "slug_1146";
  let tags = "tags_1146";
  createRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, slug, tags);
  tryToAddExistingRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, slug, tags);
});

// Monitor: RIR Addition Verification
bthread("monitor:RIR:addition", function () {
  while (true) {
    let item = waitForAnyRIRAdded();
    block(matchDeletedRIR(item.custom_fields, item.description, item.id, item.is_private, item.name, item.slug, item.tags), function () {
      verifyRIRExists(item.custom_fields, item.description, item.id, item.is_private, item.name, item.slug, item.tags);
    });
  }
});

// Monitor: RIR Deletion Verification
bthread("monitor:RIR:deletion", function () {
  while (true) {
    let item = waitForAnyRIRDeleted();
    block(matchAddedRIR(item.custom_fields, item.description, item.id, item.is_private, item.name, item.slug, item.tags), function () {
      verifyRIRDoesNotExist(item.custom_fields, item.description, item.id, item.is_private, item.name, item.slug, item.tags);
    });
  }
});

// Story: crud:Role:nondet:1:1
bthread("crud:Role:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1150";
  let id = 1150;
  let name = "name_1150";
  let slug = "slug_1150";
  let tags = "tags_1150";
  let weight = 1150;
  createRole(custom_fields, description, id, name, slug, tags, weight);
  waitForRoleAdded(custom_fields, description, id, name, slug, tags, weight);
  tryToAddExistingRole(custom_fields, description, id, name, slug, tags, weight);
  verifyRoleExists(custom_fields, description, id, name, slug, tags, weight);
  updateRole(custom_fields, description, id, name, slug, tags, weight);
  deleteRole(custom_fields, description, id, name, slug, tags, weight);
  tryToDeleteANonExistingRole(custom_fields, description, id, name, slug, tags, weight);
  verifyRoleDoesNotExist(custom_fields, description, id, name, slug, tags, weight);
});

// Story: crud:Role:nondet:1:2
bthread("crud:Role:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_1151";
  let id = 1151;
  let name = "name_1151";
  let slug = "slug_1151";
  let tags = "tags_1151";
  let weight = 1151;
  createRole(custom_fields, description, id, name, slug, tags, weight);
  tryToAddExistingRole(custom_fields, description, id, name, slug, tags, weight);
  updateRole(custom_fields, description, id, name, slug, tags, weight);
  verifyRoleExists(custom_fields, description, id, name, slug, tags, weight);
  deleteRole(custom_fields, description, id, name, slug, tags, weight);
  tryToDeleteANonExistingRole(custom_fields, description, id, name, slug, tags, weight);
  verifyRoleDoesNotExist(custom_fields, description, id, name, slug, tags, weight);
});

// Story: crud:Role:nondet:negative:dup-add
bthread("crud:Role:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_1156";
  let id = 1156;
  let name = "name_1156";
  let slug = "slug_1156";
  let tags = "tags_1156";
  let weight = 1156;
  createRole(custom_fields, description, id, name, slug, tags, weight);
  verifyRoleExists(custom_fields, description, id, name, slug, tags, weight);
  tryToAddExistingRole(custom_fields, description, id, name, slug, tags, weight);
  verifyRoleExists(custom_fields, description, id, name, slug, tags, weight);
});

// Monitor: Role Addition Verification
bthread("monitor:Role:addition", function () {
  while (true) {
    let item = waitForAnyRoleAdded();
    block(matchDeletedRole(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags, item.weight), function () {
      verifyRoleExists(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags, item.weight);
    });
  }
});

// Monitor: Role Deletion Verification
bthread("monitor:Role:deletion", function () {
  while (true) {
    let item = waitForAnyRoleDeleted();
    block(matchAddedRole(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags, item.weight), function () {
      verifyRoleDoesNotExist(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags, item.weight);
    });
  }
});

// Story: crud:RouteTarget:nondet:1:1
bthread("crud:RouteTarget:nondet:1:1", function () {
  let comments = "comments_1160";
  let custom_fields = {};
  let description = "description_1160";
  let id = 1160;
  let name = "name_1160";
  let tags = "tags_1160";
  let tenant = "tenant_1160";
  createRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  waitForRouteTargetAdded(comments, custom_fields, description, id, name, tags, tenant);
  tryToAddExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetExists(comments, custom_fields, description, id, name, tags, tenant);
  updateRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  deleteRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  tryToDeleteANonExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetDoesNotExist(comments, custom_fields, description, id, name, tags, tenant);
});

// Story: crud:RouteTarget:nondet:1:2
bthread("crud:RouteTarget:nondet:1:2", function () {
  let comments = "comments_1161";
  let custom_fields = {};
  let description = "description_1161";
  let id = 1161;
  let name = "name_1161";
  let tags = "tags_1161";
  let tenant = "tenant_1161";
  createRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  tryToAddExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  updateRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetExists(comments, custom_fields, description, id, name, tags, tenant);
  deleteRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  tryToDeleteANonExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetDoesNotExist(comments, custom_fields, description, id, name, tags, tenant);
});

// Story: crud:RouteTarget:nondet:negative:dup-add
bthread("crud:RouteTarget:nondet:negative:dup-add", function () {
  let comments = "comments_1166";
  let custom_fields = {};
  let description = "description_1166";
  let id = 1166;
  let name = "name_1166";
  let tags = "tags_1166";
  let tenant = "tenant_1166";
  createRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetExists(comments, custom_fields, description, id, name, tags, tenant);
  tryToAddExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetExists(comments, custom_fields, description, id, name, tags, tenant);
});

// Monitor: RouteTarget Addition Verification
bthread("monitor:RouteTarget:addition", function () {
  while (true) {
    let item = waitForAnyRouteTargetAdded();
    block(matchDeletedRouteTarget(item.comments, item.custom_fields, item.description, item.id, item.name, item.tags, item.tenant), function () {
      verifyRouteTargetExists(item.comments, item.custom_fields, item.description, item.id, item.name, item.tags, item.tenant);
    });
  }
});

// Monitor: RouteTarget Deletion Verification
bthread("monitor:RouteTarget:deletion", function () {
  while (true) {
    let item = waitForAnyRouteTargetDeleted();
    block(matchAddedRouteTarget(item.comments, item.custom_fields, item.description, item.id, item.name, item.tags, item.tenant), function () {
      verifyRouteTargetDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.name, item.tags, item.tenant);
    });
  }
});

// Story: crud:ServiceTemplate:nondet:1:1
bthread("crud:ServiceTemplate:nondet:1:1", function () {
  let comments = "comments_1170";
  let custom_fields = {};
  let description = "description_1170";
  let id = 1170;
  let name = "name_1170";
  let ports = "ports_1170";
  let protocol = "protocol_1170";
  let tags = "tags_1170";
  createServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  waitForServiceTemplateAdded(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToAddExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, ports, protocol, tags);
  updateServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  deleteServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToDeleteANonExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateDoesNotExist(comments, custom_fields, description, id, name, ports, protocol, tags);
});

// Story: crud:ServiceTemplate:nondet:1:2
bthread("crud:ServiceTemplate:nondet:1:2", function () {
  let comments = "comments_1171";
  let custom_fields = {};
  let description = "description_1171";
  let id = 1171;
  let name = "name_1171";
  let ports = "ports_1171";
  let protocol = "protocol_1171";
  let tags = "tags_1171";
  createServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToAddExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  updateServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, ports, protocol, tags);
  deleteServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToDeleteANonExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateDoesNotExist(comments, custom_fields, description, id, name, ports, protocol, tags);
});

// Story: crud:ServiceTemplate:nondet:negative:dup-add
bthread("crud:ServiceTemplate:nondet:negative:dup-add", function () {
  let comments = "comments_1176";
  let custom_fields = {};
  let description = "description_1176";
  let id = 1176;
  let name = "name_1176";
  let ports = "ports_1176";
  let protocol = "protocol_1176";
  let tags = "tags_1176";
  createServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToAddExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, ports, protocol, tags);
});

// Monitor: ServiceTemplate Addition Verification
bthread("monitor:ServiceTemplate:addition", function () {
  while (true) {
    let item = waitForAnyServiceTemplateAdded();
    block(matchDeletedServiceTemplate(item.comments, item.custom_fields, item.description, item.id, item.name, item.ports, item.protocol, item.tags), function () {
      verifyServiceTemplateExists(item.comments, item.custom_fields, item.description, item.id, item.name, item.ports, item.protocol, item.tags);
    });
  }
});

// Monitor: ServiceTemplate Deletion Verification
bthread("monitor:ServiceTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyServiceTemplateDeleted();
    block(matchAddedServiceTemplate(item.comments, item.custom_fields, item.description, item.id, item.name, item.ports, item.protocol, item.tags), function () {
      verifyServiceTemplateDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.name, item.ports, item.protocol, item.tags);
    });
  }
});

// Story: crud:Service:nondet:1:1
bthread("crud:Service:nondet:1:1", function () {
  let comments = "comments_1180";
  let custom_fields = {};
  let description = "description_1180";
  let id = 1180;
  let ipaddresses = "ipaddresses_1180";
  let name = "name_1180";
  let parent_object_id = 1180;
  let parent_object_type = "parent_object_type_1180";
  let ports = "ports_1180";
  let protocol = "protocol_1180";
  let tags = "tags_1180";
  createService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  waitForServiceAdded(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToAddExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceExists(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  updateService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  deleteService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToDeleteANonExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceDoesNotExist(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
});

// Story: crud:Service:nondet:1:2
bthread("crud:Service:nondet:1:2", function () {
  let comments = "comments_1181";
  let custom_fields = {};
  let description = "description_1181";
  let id = 1181;
  let ipaddresses = "ipaddresses_1181";
  let name = "name_1181";
  let parent_object_id = 1181;
  let parent_object_type = "parent_object_type_1181";
  let ports = "ports_1181";
  let protocol = "protocol_1181";
  let tags = "tags_1181";
  createService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToAddExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  updateService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceExists(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  deleteService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToDeleteANonExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceDoesNotExist(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
});

// Story: crud:Service:nondet:negative:dup-add
bthread("crud:Service:nondet:negative:dup-add", function () {
  let comments = "comments_1186";
  let custom_fields = {};
  let description = "description_1186";
  let id = 1186;
  let ipaddresses = "ipaddresses_1186";
  let name = "name_1186";
  let parent_object_id = 1186;
  let parent_object_type = "parent_object_type_1186";
  let ports = "ports_1186";
  let protocol = "protocol_1186";
  let tags = "tags_1186";
  createService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceExists(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToAddExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceExists(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
});

// Monitor: Service Addition Verification
bthread("monitor:Service:addition", function () {
  while (true) {
    let item = waitForAnyServiceAdded();
    block(matchDeletedService(item.comments, item.custom_fields, item.description, item.id, item.ipaddresses, item.name, item.parent_object_id, item.parent_object_type, item.ports, item.protocol, item.tags), function () {
      verifyServiceExists(item.comments, item.custom_fields, item.description, item.id, item.ipaddresses, item.name, item.parent_object_id, item.parent_object_type, item.ports, item.protocol, item.tags);
    });
  }
});

// Monitor: Service Deletion Verification
bthread("monitor:Service:deletion", function () {
  while (true) {
    let item = waitForAnyServiceDeleted();
    block(matchAddedService(item.comments, item.custom_fields, item.description, item.id, item.ipaddresses, item.name, item.parent_object_id, item.parent_object_type, item.ports, item.protocol, item.tags), function () {
      verifyServiceDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.ipaddresses, item.name, item.parent_object_id, item.parent_object_type, item.ports, item.protocol, item.tags);
    });
  }
});

// Story: crud:VLANGroup:nondet:1:1
bthread("crud:VLANGroup:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1190";
  let id = 1190;
  let name = "name_1190";
  let scope_id = 1190;
  let scope_type = "scope_type_1190";
  let slug = "slug_1190";
  let tags = "tags_1190";
  let tenant = "tenant_1190";
  let vid_ranges = "vid_ranges_1190";
  createVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  waitForVLANGroupAdded(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  tryToAddExistingVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  verifyVLANGroupExists(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  updateVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  deleteVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  tryToDeleteANonExistingVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  verifyVLANGroupDoesNotExist(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
});

// Story: crud:VLANGroup:nondet:1:2
bthread("crud:VLANGroup:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_1191";
  let id = 1191;
  let name = "name_1191";
  let scope_id = 1191;
  let scope_type = "scope_type_1191";
  let slug = "slug_1191";
  let tags = "tags_1191";
  let tenant = "tenant_1191";
  let vid_ranges = "vid_ranges_1191";
  createVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  tryToAddExistingVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  updateVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  verifyVLANGroupExists(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  deleteVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  tryToDeleteANonExistingVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  verifyVLANGroupDoesNotExist(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
});

// Story: crud:VLANGroup:nondet:negative:dup-add
bthread("crud:VLANGroup:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_1196";
  let id = 1196;
  let name = "name_1196";
  let scope_id = 1196;
  let scope_type = "scope_type_1196";
  let slug = "slug_1196";
  let tags = "tags_1196";
  let tenant = "tenant_1196";
  let vid_ranges = "vid_ranges_1196";
  createVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  verifyVLANGroupExists(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  tryToAddExistingVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  verifyVLANGroupExists(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
});

// Monitor: VLANGroup Addition Verification
bthread("monitor:VLANGroup:addition", function () {
  while (true) {
    let item = waitForAnyVLANGroupAdded();
    block(matchDeletedVLANGroup(item.custom_fields, item.description, item.id, item.name, item.scope_id, item.scope_type, item.slug, item.tags, item.tenant, item.vid_ranges), function () {
      verifyVLANGroupExists(item.custom_fields, item.description, item.id, item.name, item.scope_id, item.scope_type, item.slug, item.tags, item.tenant, item.vid_ranges);
    });
  }
});

// Monitor: VLANGroup Deletion Verification
bthread("monitor:VLANGroup:deletion", function () {
  while (true) {
    let item = waitForAnyVLANGroupDeleted();
    block(matchAddedVLANGroup(item.custom_fields, item.description, item.id, item.name, item.scope_id, item.scope_type, item.slug, item.tags, item.tenant, item.vid_ranges), function () {
      verifyVLANGroupDoesNotExist(item.custom_fields, item.description, item.id, item.name, item.scope_id, item.scope_type, item.slug, item.tags, item.tenant, item.vid_ranges);
    });
  }
});

// Story: crud:VLAN:nondet:1:1
bthread("crud:VLAN:nondet:1:1", function () {
  let comments = "comments_1200";
  let custom_fields = {};
  let description = "description_1200";
  let group = "group_1200";
  let id = 1200;
  let name = "name_1200";
  let qinq_role = "qinq_role_1200";
  let qinq_svlan = 1200;
  let role = "role_1200";
  let site = "site_1200";
  let slug = "slug_1200";
  let status = "status_1200";
  let tags = "tags_1200";
  let tenant = "tenant_1200";
  let vid = 1200;
  createVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  waitForVLANAdded(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  tryToAddExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  verifyVLANExists(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  updateVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  deleteVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  tryToDeleteANonExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  verifyVLANDoesNotExist(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
});

// Story: crud:VLAN:nondet:1:2
bthread("crud:VLAN:nondet:1:2", function () {
  let comments = "comments_1201";
  let custom_fields = {};
  let description = "description_1201";
  let group = "group_1201";
  let id = 1201;
  let name = "name_1201";
  let qinq_role = "qinq_role_1201";
  let qinq_svlan = 1201;
  let role = "role_1201";
  let site = "site_1201";
  let slug = "slug_1201";
  let status = "status_1201";
  let tags = "tags_1201";
  let tenant = "tenant_1201";
  let vid = 1201;
  createVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  tryToAddExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  updateVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  verifyVLANExists(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  deleteVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  tryToDeleteANonExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  verifyVLANDoesNotExist(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
});

// Story: crud:VLAN:nondet:negative:dup-add
bthread("crud:VLAN:nondet:negative:dup-add", function () {
  let comments = "comments_1206";
  let custom_fields = {};
  let description = "description_1206";
  let group = "group_1206";
  let id = 1206;
  let name = "name_1206";
  let qinq_role = "qinq_role_1206";
  let qinq_svlan = 1206;
  let role = "role_1206";
  let site = "site_1206";
  let slug = "slug_1206";
  let status = "status_1206";
  let tags = "tags_1206";
  let tenant = "tenant_1206";
  let vid = 1206;
  createVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  verifyVLANExists(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  tryToAddExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
  verifyVLANExists(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, slug, status, tags, tenant, vid);
});

// Monitor: VLAN Addition Verification
bthread("monitor:VLAN:addition", function () {
  while (true) {
    let item = waitForAnyVLANAdded();
    block(matchDeletedVLAN(item.comments, item.custom_fields, item.description, item.group, item.id, item.name, item.qinq_role, item.qinq_svlan, item.role, item.site, item.slug, item.status, item.tags, item.tenant, item.vid), function () {
      verifyVLANExists(item.comments, item.custom_fields, item.description, item.group, item.id, item.name, item.qinq_role, item.qinq_svlan, item.role, item.site, item.slug, item.status, item.tags, item.tenant, item.vid);
    });
  }
});

// Monitor: VLAN Deletion Verification
bthread("monitor:VLAN:deletion", function () {
  while (true) {
    let item = waitForAnyVLANDeleted();
    block(matchAddedVLAN(item.comments, item.custom_fields, item.description, item.group, item.id, item.name, item.qinq_role, item.qinq_svlan, item.role, item.site, item.slug, item.status, item.tags, item.tenant, item.vid), function () {
      verifyVLANDoesNotExist(item.comments, item.custom_fields, item.description, item.group, item.id, item.name, item.qinq_role, item.qinq_svlan, item.role, item.site, item.slug, item.status, item.tags, item.tenant, item.vid);
    });
  }
});

// Story: crud:VLANTranslationPolicy:nondet:1:1
bthread("crud:VLANTranslationPolicy:nondet:1:1", function () {
  let description = "description_1210";
  let id = 1210;
  let name = "name_1210";
  let slug = "slug_1210";
  createVLANTranslationPolicy(description, id, name, slug);
  waitForVLANTranslationPolicyAdded(description, id, name, slug);
  tryToAddExistingVLANTranslationPolicy(description, id, name, slug);
  verifyVLANTranslationPolicyExists(description, id, name, slug);
  updateVLANTranslationPolicy(description, id, name, slug);
  deleteVLANTranslationPolicy(description, id, name, slug);
  tryToDeleteANonExistingVLANTranslationPolicy(description, id, name, slug);
  verifyVLANTranslationPolicyDoesNotExist(description, id, name, slug);
});

// Story: crud:VLANTranslationPolicy:nondet:1:2
bthread("crud:VLANTranslationPolicy:nondet:1:2", function () {
  let description = "description_1211";
  let id = 1211;
  let name = "name_1211";
  let slug = "slug_1211";
  createVLANTranslationPolicy(description, id, name, slug);
  tryToAddExistingVLANTranslationPolicy(description, id, name, slug);
  updateVLANTranslationPolicy(description, id, name, slug);
  verifyVLANTranslationPolicyExists(description, id, name, slug);
  deleteVLANTranslationPolicy(description, id, name, slug);
  tryToDeleteANonExistingVLANTranslationPolicy(description, id, name, slug);
  verifyVLANTranslationPolicyDoesNotExist(description, id, name, slug);
});

// Story: crud:VLANTranslationPolicy:nondet:negative:dup-add
bthread("crud:VLANTranslationPolicy:nondet:negative:dup-add", function () {
  let description = "description_1216";
  let id = 1216;
  let name = "name_1216";
  let slug = "slug_1216";
  createVLANTranslationPolicy(description, id, name, slug);
  verifyVLANTranslationPolicyExists(description, id, name, slug);
  tryToAddExistingVLANTranslationPolicy(description, id, name, slug);
  verifyVLANTranslationPolicyExists(description, id, name, slug);
});

// Monitor: VLANTranslationPolicy Addition Verification
bthread("monitor:VLANTranslationPolicy:addition", function () {
  while (true) {
    let item = waitForAnyVLANTranslationPolicyAdded();
    block(matchDeletedVLANTranslationPolicy(item.description, item.id, item.name, item.slug), function () {
      verifyVLANTranslationPolicyExists(item.description, item.id, item.name, item.slug);
    });
  }
});

// Monitor: VLANTranslationPolicy Deletion Verification
bthread("monitor:VLANTranslationPolicy:deletion", function () {
  while (true) {
    let item = waitForAnyVLANTranslationPolicyDeleted();
    block(matchAddedVLANTranslationPolicy(item.description, item.id, item.name, item.slug), function () {
      verifyVLANTranslationPolicyDoesNotExist(item.description, item.id, item.name, item.slug);
    });
  }
});

// Story: crud:VLANTranslationRule:nondet:1:1
bthread("crud:VLANTranslationRule:nondet:1:1", function () {
  let description = "description_1220";
  let id = 1220;
  let local_vid = 1220;
  let policy = 1220;
  let policy_id = 1220;
  let remote_vid = 1220;
  createVLANTranslationRule(description, id, local_vid, policy, policy_id, remote_vid);
  waitForVLANTranslationRuleAdded(description, id, local_vid, policy, policy_id, remote_vid);
  tryToAddExistingVLANTranslationRule(description, id, local_vid, policy, policy_id, remote_vid);
  verifyVLANTranslationRuleExists(description, id, local_vid, policy, policy_id, remote_vid);
  updateVLANTranslationRule(description, id, local_vid, policy, policy_id, remote_vid);
  deleteVLANTranslationRule(description, id, local_vid, policy, policy_id, remote_vid);
  tryToDeleteANonExistingVLANTranslationRule(description, id, local_vid, policy, policy_id, remote_vid);
  verifyVLANTranslationRuleDoesNotExist(description, id, local_vid, policy, policy_id, remote_vid);
});

// Story: crud:VLANTranslationRule:nondet:1:2
bthread("crud:VLANTranslationRule:nondet:1:2", function () {
  let description = "description_1221";
  let id = 1221;
  let local_vid = 1221;
  let policy = 1221;
  let policy_id = 1221;
  let remote_vid = 1221;
  createVLANTranslationRule(description, id, local_vid, policy, policy_id, remote_vid);
  tryToAddExistingVLANTranslationRule(description, id, local_vid, policy, policy_id, remote_vid);
  updateVLANTranslationRule(description, id, local_vid, policy, policy_id, remote_vid);
  verifyVLANTranslationRuleExists(description, id, local_vid, policy, policy_id, remote_vid);
  deleteVLANTranslationRule(description, id, local_vid, policy, policy_id, remote_vid);
  tryToDeleteANonExistingVLANTranslationRule(description, id, local_vid, policy, policy_id, remote_vid);
  verifyVLANTranslationRuleDoesNotExist(description, id, local_vid, policy, policy_id, remote_vid);
});

// Story: crud:VLANTranslationRule:nondet:negative:dup-add
bthread("crud:VLANTranslationRule:nondet:negative:dup-add", function () {
  let description = "description_1226";
  let id = 1226;
  let local_vid = 1226;
  let policy = 1226;
  let policy_id = 1226;
  let remote_vid = 1226;
  createVLANTranslationRule(description, id, local_vid, policy, policy_id, remote_vid);
  verifyVLANTranslationRuleExists(description, id, local_vid, policy, policy_id, remote_vid);
  tryToAddExistingVLANTranslationRule(description, id, local_vid, policy, policy_id, remote_vid);
  verifyVLANTranslationRuleExists(description, id, local_vid, policy, policy_id, remote_vid);
});

// Monitor: VLANTranslationRule Addition Verification
bthread("monitor:VLANTranslationRule:addition", function () {
  while (true) {
    let item = waitForAnyVLANTranslationRuleAdded();
    block(matchDeletedVLANTranslationRule(item.description, item.id, item.local_vid, item.policy, item.policy_id, item.remote_vid), function () {
      verifyVLANTranslationRuleExists(item.description, item.id, item.local_vid, item.policy, item.policy_id, item.remote_vid);
    });
  }
});

// Monitor: VLANTranslationRule Deletion Verification
bthread("monitor:VLANTranslationRule:deletion", function () {
  while (true) {
    let item = waitForAnyVLANTranslationRuleDeleted();
    block(matchAddedVLANTranslationRule(item.description, item.id, item.local_vid, item.policy, item.policy_id, item.remote_vid), function () {
      verifyVLANTranslationRuleDoesNotExist(item.description, item.id, item.local_vid, item.policy, item.policy_id, item.remote_vid);
    });
  }
});

// Story: crud:VRF:nondet:1:1
bthread("crud:VRF:nondet:1:1", function () {
  let comments = "comments_1230";
  let custom_fields = {};
  let description = "description_1230";
  let enforce_unique = "enforce_unique_1230";
  let export_targets = "export_targets_1230";
  let id = 1230;
  let import_targets = "import_targets_1230";
  let name = "name_1230";
  let rd = "rd_1230";
  let slug = "slug_1230";
  let tags = "tags_1230";
  let tenant = "tenant_1230";
  createVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  waitForVRFAdded(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  tryToAddExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  verifyVRFExists(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  updateVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  deleteVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  tryToDeleteANonExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  verifyVRFDoesNotExist(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
});

// Story: crud:VRF:nondet:1:2
bthread("crud:VRF:nondet:1:2", function () {
  let comments = "comments_1231";
  let custom_fields = {};
  let description = "description_1231";
  let enforce_unique = "enforce_unique_1231";
  let export_targets = "export_targets_1231";
  let id = 1231;
  let import_targets = "import_targets_1231";
  let name = "name_1231";
  let rd = "rd_1231";
  let slug = "slug_1231";
  let tags = "tags_1231";
  let tenant = "tenant_1231";
  createVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  tryToAddExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  updateVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  verifyVRFExists(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  deleteVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  tryToDeleteANonExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  verifyVRFDoesNotExist(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
});

// Story: crud:VRF:nondet:negative:dup-add
bthread("crud:VRF:nondet:negative:dup-add", function () {
  let comments = "comments_1236";
  let custom_fields = {};
  let description = "description_1236";
  let enforce_unique = "enforce_unique_1236";
  let export_targets = "export_targets_1236";
  let id = 1236;
  let import_targets = "import_targets_1236";
  let name = "name_1236";
  let rd = "rd_1236";
  let slug = "slug_1236";
  let tags = "tags_1236";
  let tenant = "tenant_1236";
  createVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  verifyVRFExists(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  tryToAddExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
  verifyVRFExists(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, slug, tags, tenant);
});

// Monitor: VRF Addition Verification
bthread("monitor:VRF:addition", function () {
  while (true) {
    let item = waitForAnyVRFAdded();
    block(matchDeletedVRF(item.comments, item.custom_fields, item.description, item.enforce_unique, item.export_targets, item.id, item.import_targets, item.name, item.rd, item.slug, item.tags, item.tenant), function () {
      verifyVRFExists(item.comments, item.custom_fields, item.description, item.enforce_unique, item.export_targets, item.id, item.import_targets, item.name, item.rd, item.slug, item.tags, item.tenant);
    });
  }
});

// Monitor: VRF Deletion Verification
bthread("monitor:VRF:deletion", function () {
  while (true) {
    let item = waitForAnyVRFDeleted();
    block(matchAddedVRF(item.comments, item.custom_fields, item.description, item.enforce_unique, item.export_targets, item.id, item.import_targets, item.name, item.rd, item.slug, item.tags, item.tenant), function () {
      verifyVRFDoesNotExist(item.comments, item.custom_fields, item.description, item.enforce_unique, item.export_targets, item.id, item.import_targets, item.name, item.rd, item.slug, item.tags, item.tenant);
    });
  }
});

// Story: crud:ContactAssignment:nondet:1:1
bthread("crud:ContactAssignment:nondet:1:1", function () {
  let contact = "contact_1240";
  let custom_fields = {};
  let id = 1240;
  let object_id = 1240;
  let object_type = "object_type_1240";
  let priority = "priority_1240";
  let role = "role_1240";
  let tags = "tags_1240";
  createContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  waitForContactAssignmentAdded(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  tryToAddExistingContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentExists(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  updateContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  deleteContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  tryToDeleteANonExistingContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentDoesNotExist(contact, custom_fields, id, object_id, object_type, priority, role, tags);
});

// Story: crud:ContactAssignment:nondet:1:2
bthread("crud:ContactAssignment:nondet:1:2", function () {
  let contact = "contact_1241";
  let custom_fields = {};
  let id = 1241;
  let object_id = 1241;
  let object_type = "object_type_1241";
  let priority = "priority_1241";
  let role = "role_1241";
  let tags = "tags_1241";
  createContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  tryToAddExistingContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  updateContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentExists(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  deleteContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  tryToDeleteANonExistingContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentDoesNotExist(contact, custom_fields, id, object_id, object_type, priority, role, tags);
});

// Story: crud:ContactAssignment:nondet:negative:dup-add
bthread("crud:ContactAssignment:nondet:negative:dup-add", function () {
  let contact = "contact_1246";
  let custom_fields = {};
  let id = 1246;
  let object_id = 1246;
  let object_type = "object_type_1246";
  let priority = "priority_1246";
  let role = "role_1246";
  let tags = "tags_1246";
  createContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentExists(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  tryToAddExistingContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentExists(contact, custom_fields, id, object_id, object_type, priority, role, tags);
});

// Monitor: ContactAssignment Addition Verification
bthread("monitor:ContactAssignment:addition", function () {
  while (true) {
    let item = waitForAnyContactAssignmentAdded();
    block(matchDeletedContactAssignment(item.contact, item.custom_fields, item.id, item.object_id, item.object_type, item.priority, item.role, item.tags), function () {
      verifyContactAssignmentExists(item.contact, item.custom_fields, item.id, item.object_id, item.object_type, item.priority, item.role, item.tags);
    });
  }
});

// Monitor: ContactAssignment Deletion Verification
bthread("monitor:ContactAssignment:deletion", function () {
  while (true) {
    let item = waitForAnyContactAssignmentDeleted();
    block(matchAddedContactAssignment(item.contact, item.custom_fields, item.id, item.object_id, item.object_type, item.priority, item.role, item.tags), function () {
      verifyContactAssignmentDoesNotExist(item.contact, item.custom_fields, item.id, item.object_id, item.object_type, item.priority, item.role, item.tags);
    });
  }
});

// Story: crud:ContactGroup:nondet:1:1
bthread("crud:ContactGroup:nondet:1:1", function () {
  let comments = "comments_1250";
  let custom_fields = {};
  let description = "description_1250";
  let id = 1250;
  let name = "name_1250";
  let parent = 1250;
  let slug = "slug_1250";
  let tags = "tags_1250";
  createContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  waitForContactGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  updateContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:ContactGroup:nondet:1:2
bthread("crud:ContactGroup:nondet:1:2", function () {
  let comments = "comments_1251";
  let custom_fields = {};
  let description = "description_1251";
  let id = 1251;
  let name = "name_1251";
  let parent = 1251;
  let slug = "slug_1251";
  let tags = "tags_1251";
  createContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  updateContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:ContactGroup:nondet:negative:dup-add
bthread("crud:ContactGroup:nondet:negative:dup-add", function () {
  let comments = "comments_1256";
  let custom_fields = {};
  let description = "description_1256";
  let id = 1256;
  let name = "name_1256";
  let parent = 1256;
  let slug = "slug_1256";
  let tags = "tags_1256";
  createContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Monitor: ContactGroup Addition Verification
bthread("monitor:ContactGroup:addition", function () {
  while (true) {
    let item = waitForAnyContactGroupAdded();
    block(matchDeletedContactGroup(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags), function () {
      verifyContactGroupExists(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags);
    });
  }
});

// Monitor: ContactGroup Deletion Verification
bthread("monitor:ContactGroup:deletion", function () {
  while (true) {
    let item = waitForAnyContactGroupDeleted();
    block(matchAddedContactGroup(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags), function () {
      verifyContactGroupDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags);
    });
  }
});

// Story: crud:ContactRole:nondet:1:1
bthread("crud:ContactRole:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1260";
  let id = 1260;
  let name = "name_1260";
  let slug = "slug_1260";
  let tags = "tags_1260";
  createContactRole(custom_fields, description, id, name, slug, tags);
  waitForContactRoleAdded(custom_fields, description, id, name, slug, tags);
  tryToAddExistingContactRole(custom_fields, description, id, name, slug, tags);
  verifyContactRoleExists(custom_fields, description, id, name, slug, tags);
  updateContactRole(custom_fields, description, id, name, slug, tags);
  deleteContactRole(custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingContactRole(custom_fields, description, id, name, slug, tags);
  verifyContactRoleDoesNotExist(custom_fields, description, id, name, slug, tags);
});

// Story: crud:ContactRole:nondet:1:2
bthread("crud:ContactRole:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_1261";
  let id = 1261;
  let name = "name_1261";
  let slug = "slug_1261";
  let tags = "tags_1261";
  createContactRole(custom_fields, description, id, name, slug, tags);
  tryToAddExistingContactRole(custom_fields, description, id, name, slug, tags);
  updateContactRole(custom_fields, description, id, name, slug, tags);
  verifyContactRoleExists(custom_fields, description, id, name, slug, tags);
  deleteContactRole(custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingContactRole(custom_fields, description, id, name, slug, tags);
  verifyContactRoleDoesNotExist(custom_fields, description, id, name, slug, tags);
});

// Story: crud:ContactRole:nondet:negative:dup-add
bthread("crud:ContactRole:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_1266";
  let id = 1266;
  let name = "name_1266";
  let slug = "slug_1266";
  let tags = "tags_1266";
  createContactRole(custom_fields, description, id, name, slug, tags);
  verifyContactRoleExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingContactRole(custom_fields, description, id, name, slug, tags);
  verifyContactRoleExists(custom_fields, description, id, name, slug, tags);
});

// Monitor: ContactRole Addition Verification
bthread("monitor:ContactRole:addition", function () {
  while (true) {
    let item = waitForAnyContactRoleAdded();
    block(matchDeletedContactRole(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyContactRoleExists(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Monitor: ContactRole Deletion Verification
bthread("monitor:ContactRole:deletion", function () {
  while (true) {
    let item = waitForAnyContactRoleDeleted();
    block(matchAddedContactRole(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyContactRoleDoesNotExist(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Story: crud:Contact:nondet:1:1
bthread("crud:Contact:nondet:1:1", function () {
  let address = "address_1270";
  let comments = "comments_1270";
  let custom_fields = {};
  let description = "description_1270";
  let email = "email_1270";
  let groups = "groups_1270";
  let id = 1270;
  let link = "link_1270";
  let name = "name_1270";
  let phone = "phone_1270";
  let tags = "tags_1270";
  let title = "title_1270";
  createContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  waitForContactAdded(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  tryToAddExistingContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactExists(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  updateContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  deleteContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  tryToDeleteANonExistingContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactDoesNotExist(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
});

// Story: crud:Contact:nondet:1:2
bthread("crud:Contact:nondet:1:2", function () {
  let address = "address_1271";
  let comments = "comments_1271";
  let custom_fields = {};
  let description = "description_1271";
  let email = "email_1271";
  let groups = "groups_1271";
  let id = 1271;
  let link = "link_1271";
  let name = "name_1271";
  let phone = "phone_1271";
  let tags = "tags_1271";
  let title = "title_1271";
  createContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  tryToAddExistingContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  updateContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactExists(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  deleteContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  tryToDeleteANonExistingContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactDoesNotExist(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
});

// Story: crud:Contact:nondet:negative:dup-add
bthread("crud:Contact:nondet:negative:dup-add", function () {
  let address = "address_1276";
  let comments = "comments_1276";
  let custom_fields = {};
  let description = "description_1276";
  let email = "email_1276";
  let groups = "groups_1276";
  let id = 1276;
  let link = "link_1276";
  let name = "name_1276";
  let phone = "phone_1276";
  let tags = "tags_1276";
  let title = "title_1276";
  createContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactExists(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  tryToAddExistingContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactExists(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
});

// Monitor: Contact Addition Verification
bthread("monitor:Contact:addition", function () {
  while (true) {
    let item = waitForAnyContactAdded();
    block(matchDeletedContact(item.address, item.comments, item.custom_fields, item.description, item.email, item.groups, item.id, item.link, item.name, item.phone, item.tags, item.title), function () {
      verifyContactExists(item.address, item.comments, item.custom_fields, item.description, item.email, item.groups, item.id, item.link, item.name, item.phone, item.tags, item.title);
    });
  }
});

// Monitor: Contact Deletion Verification
bthread("monitor:Contact:deletion", function () {
  while (true) {
    let item = waitForAnyContactDeleted();
    block(matchAddedContact(item.address, item.comments, item.custom_fields, item.description, item.email, item.groups, item.id, item.link, item.name, item.phone, item.tags, item.title), function () {
      verifyContactDoesNotExist(item.address, item.comments, item.custom_fields, item.description, item.email, item.groups, item.id, item.link, item.name, item.phone, item.tags, item.title);
    });
  }
});

// Story: crud:TenantGroup:nondet:1:1
bthread("crud:TenantGroup:nondet:1:1", function () {
  let comments = "comments_1280";
  let custom_fields = {};
  let description = "description_1280";
  let id = 1280;
  let name = "name_1280";
  let parent = 1280;
  let slug = "slug_1280";
  let tags = "tags_1280";
  createTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  waitForTenantGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  updateTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:TenantGroup:nondet:1:2
bthread("crud:TenantGroup:nondet:1:2", function () {
  let comments = "comments_1281";
  let custom_fields = {};
  let description = "description_1281";
  let id = 1281;
  let name = "name_1281";
  let parent = 1281;
  let slug = "slug_1281";
  let tags = "tags_1281";
  createTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  updateTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:TenantGroup:nondet:negative:dup-add
bthread("crud:TenantGroup:nondet:negative:dup-add", function () {
  let comments = "comments_1286";
  let custom_fields = {};
  let description = "description_1286";
  let id = 1286;
  let name = "name_1286";
  let parent = 1286;
  let slug = "slug_1286";
  let tags = "tags_1286";
  createTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Monitor: TenantGroup Addition Verification
bthread("monitor:TenantGroup:addition", function () {
  while (true) {
    let item = waitForAnyTenantGroupAdded();
    block(matchDeletedTenantGroup(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags), function () {
      verifyTenantGroupExists(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags);
    });
  }
});

// Monitor: TenantGroup Deletion Verification
bthread("monitor:TenantGroup:deletion", function () {
  while (true) {
    let item = waitForAnyTenantGroupDeleted();
    block(matchAddedTenantGroup(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags), function () {
      verifyTenantGroupDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags);
    });
  }
});

// Story: crud:Tenant:nondet:1:1
bthread("crud:Tenant:nondet:1:1", function () {
  let comments = "comments_1290";
  let contact = "contact_1290";
  let contact_group = "contact_group_1290";
  let contact_role = "contact_role_1290";
  let custom_fields = {};
  let description = "description_1290";
  let group = "group_1290";
  let id = 1290;
  let name = "name_1290";
  let slug = "slug_1290";
  let tags = "tags_1290";
  createTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  waitForTenantAdded(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  tryToAddExistingTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  updateTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  deleteTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  tryToDeleteANonExistingTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  verifyTenantDoesNotExist(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
});

// Story: crud:Tenant:nondet:1:2
bthread("crud:Tenant:nondet:1:2", function () {
  let comments = "comments_1291";
  let contact = "contact_1291";
  let contact_group = "contact_group_1291";
  let contact_role = "contact_role_1291";
  let custom_fields = {};
  let description = "description_1291";
  let group = "group_1291";
  let id = 1291;
  let name = "name_1291";
  let slug = "slug_1291";
  let tags = "tags_1291";
  createTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  tryToAddExistingTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  updateTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  deleteTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  tryToDeleteANonExistingTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  verifyTenantDoesNotExist(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
});

// Story: crud:Tenant:nondet:negative:dup-add
bthread("crud:Tenant:nondet:negative:dup-add", function () {
  let comments = "comments_1296";
  let contact = "contact_1296";
  let contact_group = "contact_group_1296";
  let contact_role = "contact_role_1296";
  let custom_fields = {};
  let description = "description_1296";
  let group = "group_1296";
  let id = 1296;
  let name = "name_1296";
  let slug = "slug_1296";
  let tags = "tags_1296";
  createTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  tryToAddExistingTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
});

// Monitor: Tenant Addition Verification
bthread("monitor:Tenant:addition", function () {
  while (true) {
    let item = waitForAnyTenantAdded();
    block(matchDeletedTenant(item.comments, item.contact, item.contact_group, item.contact_role, item.custom_fields, item.description, item.group, item.id, item.name, item.slug, item.tags), function () {
      verifyTenantExists(item.comments, item.contact, item.contact_group, item.contact_role, item.custom_fields, item.description, item.group, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Monitor: Tenant Deletion Verification
bthread("monitor:Tenant:deletion", function () {
  while (true) {
    let item = waitForAnyTenantDeleted();
    block(matchAddedTenant(item.comments, item.contact, item.contact_group, item.contact_role, item.custom_fields, item.description, item.group, item.id, item.name, item.slug, item.tags), function () {
      verifyTenantDoesNotExist(item.comments, item.contact, item.contact_group, item.contact_role, item.custom_fields, item.description, item.group, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Story: crud:Group:nondet:1:1
bthread("crud:Group:nondet:1:1", function () {
  let description = "description_1300";
  let id = 1300;
  let name = "name_1300";
  let permissions = "permissions_1300";
  createGroup(description, id, name, permissions);
  waitForGroupAdded(description, id, name, permissions);
  tryToAddExistingGroup(description, id, name, permissions);
  verifyGroupExists(description, id, name, permissions);
  updateGroupsBulk(description, id, name, permissions);
  deleteGroupsBulk(description, id, name, permissions);
  tryToDeleteANonExistingGroup(description, id, name, permissions);
  verifyGroupDoesNotExist(description, id, name, permissions);
});

// Story: crud:Group:nondet:1:2
bthread("crud:Group:nondet:1:2", function () {
  let description = "description_1301";
  let id = 1301;
  let name = "name_1301";
  let permissions = "permissions_1301";
  createGroup(description, id, name, permissions);
  tryToAddExistingGroup(description, id, name, permissions);
  updateGroupsBulk(description, id, name, permissions);
  verifyGroupExists(description, id, name, permissions);
  deleteGroupsBulk(description, id, name, permissions);
  tryToDeleteANonExistingGroup(description, id, name, permissions);
  verifyGroupDoesNotExist(description, id, name, permissions);
});

// Story: crud:Group:nondet:negative:dup-add
bthread("crud:Group:nondet:negative:dup-add", function () {
  let description = "description_1306";
  let id = 1306;
  let name = "name_1306";
  let permissions = "permissions_1306";
  createGroup(description, id, name, permissions);
  verifyGroupExists(description, id, name, permissions);
  tryToAddExistingGroup(description, id, name, permissions);
  verifyGroupExists(description, id, name, permissions);
});

// Monitor: Group Addition Verification
bthread("monitor:Group:addition", function () {
  while (true) {
    let item = waitForAnyGroupAdded();
    block(matchDeletedGroup(item.description, item.id, item.name, item.permissions), function () {
      verifyGroupExists(item.description, item.id, item.name, item.permissions);
    });
  }
});

// Monitor: Group Deletion Verification
bthread("monitor:Group:deletion", function () {
  while (true) {
    let item = waitForAnyGroupDeleted();
    block(matchAddedGroup(item.description, item.id, item.name, item.permissions), function () {
      verifyGroupDoesNotExist(item.description, item.id, item.name, item.permissions);
    });
  }
});

// Story: crud:Permission:nondet:1:1
bthread("crud:Permission:nondet:1:1", function () {
  let actions = "actions_1310";
  let constraints = "constraints_1310";
  let description = "description_1310";
  let enabled = "enabled_1310";
  let groups = "groups_1310";
  let id = 1310;
  let name = "name_1310";
  let object_types = "object_types_1310";
  let users = "users_1310";
  createPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  waitForPermissionAdded(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToAddExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionExists(actions, constraints, description, enabled, groups, id, name, object_types, users);
  updatePermissionsBulk(actions, constraints, description, enabled, groups, id, name, object_types, users);
  deletePermissionsBulk(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToDeleteANonExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionDoesNotExist(actions, constraints, description, enabled, groups, id, name, object_types, users);
});

// Story: crud:Permission:nondet:1:2
bthread("crud:Permission:nondet:1:2", function () {
  let actions = "actions_1311";
  let constraints = "constraints_1311";
  let description = "description_1311";
  let enabled = "enabled_1311";
  let groups = "groups_1311";
  let id = 1311;
  let name = "name_1311";
  let object_types = "object_types_1311";
  let users = "users_1311";
  createPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToAddExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  updatePermissionsBulk(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionExists(actions, constraints, description, enabled, groups, id, name, object_types, users);
  deletePermissionsBulk(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToDeleteANonExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionDoesNotExist(actions, constraints, description, enabled, groups, id, name, object_types, users);
});

// Story: crud:Permission:nondet:negative:dup-add
bthread("crud:Permission:nondet:negative:dup-add", function () {
  let actions = "actions_1316";
  let constraints = "constraints_1316";
  let description = "description_1316";
  let enabled = "enabled_1316";
  let groups = "groups_1316";
  let id = 1316;
  let name = "name_1316";
  let object_types = "object_types_1316";
  let users = "users_1316";
  createPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionExists(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToAddExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionExists(actions, constraints, description, enabled, groups, id, name, object_types, users);
});

// Monitor: Permission Addition Verification
bthread("monitor:Permission:addition", function () {
  while (true) {
    let item = waitForAnyPermissionAdded();
    block(matchDeletedPermission(item.actions, item.constraints, item.description, item.enabled, item.groups, item.id, item.name, item.object_types, item.users), function () {
      verifyPermissionExists(item.actions, item.constraints, item.description, item.enabled, item.groups, item.id, item.name, item.object_types, item.users);
    });
  }
});

// Monitor: Permission Deletion Verification
bthread("monitor:Permission:deletion", function () {
  while (true) {
    let item = waitForAnyPermissionDeleted();
    block(matchAddedPermission(item.actions, item.constraints, item.description, item.enabled, item.groups, item.id, item.name, item.object_types, item.users), function () {
      verifyPermissionDoesNotExist(item.actions, item.constraints, item.description, item.enabled, item.groups, item.id, item.name, item.object_types, item.users);
    });
  }
});

// Story: crud:Token:nondet:1:1
bthread("crud:Token:nondet:1:1", function () {
  let description = "description_1320";
  let expires = "expires_1320";
  let id = 1320;
  let key = "key_1320";
  let last_used = "last_used_1320";
  let user = "user_1320";
  let write_enabled = "write_enabled_1320";
  createToken(description, expires, id, key, last_used, user, write_enabled);
  waitForTokenAdded(description, expires, id, key, last_used, user, write_enabled);
  tryToAddExistingToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenExists(description, expires, id, key, last_used, user, write_enabled);
  updateTokensBulk(description, expires, id, key, last_used, user, write_enabled);
  deleteTokensBulk(description, expires, id, key, last_used, user, write_enabled);
  tryToDeleteANonExistingToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenDoesNotExist(description, expires, id, key, last_used, user, write_enabled);
});

// Story: crud:Token:nondet:1:2
bthread("crud:Token:nondet:1:2", function () {
  let description = "description_1321";
  let expires = "expires_1321";
  let id = 1321;
  let key = "key_1321";
  let last_used = "last_used_1321";
  let user = "user_1321";
  let write_enabled = "write_enabled_1321";
  createToken(description, expires, id, key, last_used, user, write_enabled);
  tryToAddExistingToken(description, expires, id, key, last_used, user, write_enabled);
  updateTokensBulk(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenExists(description, expires, id, key, last_used, user, write_enabled);
  deleteTokensBulk(description, expires, id, key, last_used, user, write_enabled);
  tryToDeleteANonExistingToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenDoesNotExist(description, expires, id, key, last_used, user, write_enabled);
});

// Story: crud:Token:nondet:negative:dup-add
bthread("crud:Token:nondet:negative:dup-add", function () {
  let description = "description_1326";
  let expires = "expires_1326";
  let id = 1326;
  let key = "key_1326";
  let last_used = "last_used_1326";
  let user = "user_1326";
  let write_enabled = "write_enabled_1326";
  createToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenExists(description, expires, id, key, last_used, user, write_enabled);
  tryToAddExistingToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenExists(description, expires, id, key, last_used, user, write_enabled);
});

// Monitor: Token Addition Verification
bthread("monitor:Token:addition", function () {
  while (true) {
    let item = waitForAnyTokenAdded();
    block(matchDeletedToken(item.description, item.expires, item.id, item.key, item.last_used, item.user, item.write_enabled), function () {
      verifyTokenExists(item.description, item.expires, item.id, item.key, item.last_used, item.user, item.write_enabled);
    });
  }
});

// Monitor: Token Deletion Verification
bthread("monitor:Token:deletion", function () {
  while (true) {
    let item = waitForAnyTokenDeleted();
    block(matchAddedToken(item.description, item.expires, item.id, item.key, item.last_used, item.user, item.write_enabled), function () {
      verifyTokenDoesNotExist(item.description, item.expires, item.id, item.key, item.last_used, item.user, item.write_enabled);
    });
  }
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let date_joined = "date_joined_1330";
  let email = "email_1330";
  let first_name = "first_name_1330";
  let groups = "groups_1330";
  let id = 1330;
  let is_active = "is_active_1330";
  let is_staff = "is_staff_1330";
  let last_login = "last_login_1330";
  let last_name = "last_name_1330";
  let password = "password_1330";
  let permissions = "permissions_1330";
  let username = "username_1330";
  createUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  waitForUserAdded(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToAddExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserExists(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  updateUsersBulk(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  deleteUsersBulk(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToDeleteANonExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserDoesNotExist(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let date_joined = "date_joined_1331";
  let email = "email_1331";
  let first_name = "first_name_1331";
  let groups = "groups_1331";
  let id = 1331;
  let is_active = "is_active_1331";
  let is_staff = "is_staff_1331";
  let last_login = "last_login_1331";
  let last_name = "last_name_1331";
  let password = "password_1331";
  let permissions = "permissions_1331";
  let username = "username_1331";
  createUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToAddExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  updateUsersBulk(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserExists(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  deleteUsersBulk(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToDeleteANonExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserDoesNotExist(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let date_joined = "date_joined_1336";
  let email = "email_1336";
  let first_name = "first_name_1336";
  let groups = "groups_1336";
  let id = 1336;
  let is_active = "is_active_1336";
  let is_staff = "is_staff_1336";
  let last_login = "last_login_1336";
  let last_name = "last_name_1336";
  let password = "password_1336";
  let permissions = "permissions_1336";
  let username = "username_1336";
  createUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserExists(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToAddExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserExists(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
});

// Monitor: User Addition Verification
bthread("monitor:User:addition", function () {
  while (true) {
    let item = waitForAnyUserAdded();
    block(matchDeletedUser(item.date_joined, item.email, item.first_name, item.groups, item.id, item.is_active, item.is_staff, item.last_login, item.last_name, item.password, item.permissions, item.username), function () {
      verifyUserExists(item.date_joined, item.email, item.first_name, item.groups, item.id, item.is_active, item.is_staff, item.last_login, item.last_name, item.password, item.permissions, item.username);
    });
  }
});

// Monitor: User Deletion Verification
bthread("monitor:User:deletion", function () {
  while (true) {
    let item = waitForAnyUserDeleted();
    block(matchAddedUser(item.date_joined, item.email, item.first_name, item.groups, item.id, item.is_active, item.is_staff, item.last_login, item.last_name, item.password, item.permissions, item.username), function () {
      verifyUserDoesNotExist(item.date_joined, item.email, item.first_name, item.groups, item.id, item.is_active, item.is_staff, item.last_login, item.last_name, item.password, item.permissions, item.username);
    });
  }
});

// Story: crud:ClusterGroup:nondet:1:1
bthread("crud:ClusterGroup:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1340";
  let id = 1340;
  let name = "name_1340";
  let slug = "slug_1340";
  let tags = "tags_1340";
  createClusterGroup(custom_fields, description, id, name, slug, tags);
  waitForClusterGroupAdded(custom_fields, description, id, name, slug, tags);
  tryToAddExistingClusterGroup(custom_fields, description, id, name, slug, tags);
  verifyClusterGroupExists(custom_fields, description, id, name, slug, tags);
  updateClusterGroup(custom_fields, description, id, name, slug, tags);
  deleteClusterGroup(custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingClusterGroup(custom_fields, description, id, name, slug, tags);
  verifyClusterGroupDoesNotExist(custom_fields, description, id, name, slug, tags);
});

// Story: crud:ClusterGroup:nondet:1:2
bthread("crud:ClusterGroup:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_1341";
  let id = 1341;
  let name = "name_1341";
  let slug = "slug_1341";
  let tags = "tags_1341";
  createClusterGroup(custom_fields, description, id, name, slug, tags);
  tryToAddExistingClusterGroup(custom_fields, description, id, name, slug, tags);
  updateClusterGroup(custom_fields, description, id, name, slug, tags);
  verifyClusterGroupExists(custom_fields, description, id, name, slug, tags);
  deleteClusterGroup(custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingClusterGroup(custom_fields, description, id, name, slug, tags);
  verifyClusterGroupDoesNotExist(custom_fields, description, id, name, slug, tags);
});

// Story: crud:ClusterGroup:nondet:negative:dup-add
bthread("crud:ClusterGroup:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_1346";
  let id = 1346;
  let name = "name_1346";
  let slug = "slug_1346";
  let tags = "tags_1346";
  createClusterGroup(custom_fields, description, id, name, slug, tags);
  verifyClusterGroupExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingClusterGroup(custom_fields, description, id, name, slug, tags);
  verifyClusterGroupExists(custom_fields, description, id, name, slug, tags);
});

// Monitor: ClusterGroup Addition Verification
bthread("monitor:ClusterGroup:addition", function () {
  while (true) {
    let item = waitForAnyClusterGroupAdded();
    block(matchDeletedClusterGroup(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyClusterGroupExists(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Monitor: ClusterGroup Deletion Verification
bthread("monitor:ClusterGroup:deletion", function () {
  while (true) {
    let item = waitForAnyClusterGroupDeleted();
    block(matchAddedClusterGroup(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyClusterGroupDoesNotExist(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Story: crud:ClusterType:nondet:1:1
bthread("crud:ClusterType:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1350";
  let id = 1350;
  let name = "name_1350";
  let slug = "slug_1350";
  let tags = "tags_1350";
  createClusterType(custom_fields, description, id, name, slug, tags);
  waitForClusterTypeAdded(custom_fields, description, id, name, slug, tags);
  tryToAddExistingClusterType(custom_fields, description, id, name, slug, tags);
  verifyClusterTypeExists(custom_fields, description, id, name, slug, tags);
  updateClusterType(custom_fields, description, id, name, slug, tags);
  deleteClusterType(custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingClusterType(custom_fields, description, id, name, slug, tags);
  verifyClusterTypeDoesNotExist(custom_fields, description, id, name, slug, tags);
});

// Story: crud:ClusterType:nondet:1:2
bthread("crud:ClusterType:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_1351";
  let id = 1351;
  let name = "name_1351";
  let slug = "slug_1351";
  let tags = "tags_1351";
  createClusterType(custom_fields, description, id, name, slug, tags);
  tryToAddExistingClusterType(custom_fields, description, id, name, slug, tags);
  updateClusterType(custom_fields, description, id, name, slug, tags);
  verifyClusterTypeExists(custom_fields, description, id, name, slug, tags);
  deleteClusterType(custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingClusterType(custom_fields, description, id, name, slug, tags);
  verifyClusterTypeDoesNotExist(custom_fields, description, id, name, slug, tags);
});

// Story: crud:ClusterType:nondet:negative:dup-add
bthread("crud:ClusterType:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_1356";
  let id = 1356;
  let name = "name_1356";
  let slug = "slug_1356";
  let tags = "tags_1356";
  createClusterType(custom_fields, description, id, name, slug, tags);
  verifyClusterTypeExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingClusterType(custom_fields, description, id, name, slug, tags);
  verifyClusterTypeExists(custom_fields, description, id, name, slug, tags);
});

// Monitor: ClusterType Addition Verification
bthread("monitor:ClusterType:addition", function () {
  while (true) {
    let item = waitForAnyClusterTypeAdded();
    block(matchDeletedClusterType(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyClusterTypeExists(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Monitor: ClusterType Deletion Verification
bthread("monitor:ClusterType:deletion", function () {
  while (true) {
    let item = waitForAnyClusterTypeDeleted();
    block(matchAddedClusterType(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyClusterTypeDoesNotExist(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Story: crud:Cluster:nondet:1:1
bthread("crud:Cluster:nondet:1:1", function () {
  let comments = "comments_1360";
  let custom_fields = {};
  let description = "description_1360";
  let group = "group_1360";
  let id = 1360;
  let name = "name_1360";
  let scope_id = 1360;
  let scope_type = "scope_type_1360";
  let status = "status_1360";
  let tags = "tags_1360";
  let tenant = "tenant_1360";
  let type = "type_1360";
  createCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  waitForClusterAdded(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  tryToAddExistingCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  verifyClusterExists(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  updateCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  deleteCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  tryToDeleteANonExistingCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  verifyClusterDoesNotExist(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
});

// Story: crud:Cluster:nondet:1:2
bthread("crud:Cluster:nondet:1:2", function () {
  let comments = "comments_1361";
  let custom_fields = {};
  let description = "description_1361";
  let group = "group_1361";
  let id = 1361;
  let name = "name_1361";
  let scope_id = 1361;
  let scope_type = "scope_type_1361";
  let status = "status_1361";
  let tags = "tags_1361";
  let tenant = "tenant_1361";
  let type = "type_1361";
  createCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  tryToAddExistingCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  updateCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  verifyClusterExists(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  deleteCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  tryToDeleteANonExistingCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  verifyClusterDoesNotExist(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
});

// Story: crud:Cluster:nondet:negative:dup-add
bthread("crud:Cluster:nondet:negative:dup-add", function () {
  let comments = "comments_1366";
  let custom_fields = {};
  let description = "description_1366";
  let group = "group_1366";
  let id = 1366;
  let name = "name_1366";
  let scope_id = 1366;
  let scope_type = "scope_type_1366";
  let status = "status_1366";
  let tags = "tags_1366";
  let tenant = "tenant_1366";
  let type = "type_1366";
  createCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  verifyClusterExists(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  tryToAddExistingCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  verifyClusterExists(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
});

// Monitor: Cluster Addition Verification
bthread("monitor:Cluster:addition", function () {
  while (true) {
    let item = waitForAnyClusterAdded();
    block(matchDeletedCluster(item.comments, item.custom_fields, item.description, item.group, item.id, item.name, item.scope_id, item.scope_type, item.status, item.tags, item.tenant, item.type), function () {
      verifyClusterExists(item.comments, item.custom_fields, item.description, item.group, item.id, item.name, item.scope_id, item.scope_type, item.status, item.tags, item.tenant, item.type);
    });
  }
});

// Monitor: Cluster Deletion Verification
bthread("monitor:Cluster:deletion", function () {
  while (true) {
    let item = waitForAnyClusterDeleted();
    block(matchAddedCluster(item.comments, item.custom_fields, item.description, item.group, item.id, item.name, item.scope_id, item.scope_type, item.status, item.tags, item.tenant, item.type), function () {
      verifyClusterDoesNotExist(item.comments, item.custom_fields, item.description, item.group, item.id, item.name, item.scope_id, item.scope_type, item.status, item.tags, item.tenant, item.type);
    });
  }
});

// Story: crud:VirtualDisk:nondet:1:1
bthread("crud:VirtualDisk:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1370";
  let id = 1370;
  let name = "name_1370";
  let size = 1370;
  let tags = "tags_1370";
  let virtual_machine = "virtual_machine_1370";
  createVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  waitForVirtualDiskAdded(custom_fields, description, id, name, size, tags, virtual_machine);
  tryToAddExistingVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  verifyVirtualDiskExists(custom_fields, description, id, name, size, tags, virtual_machine);
  updateVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  deleteVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  tryToDeleteANonExistingVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  verifyVirtualDiskDoesNotExist(custom_fields, description, id, name, size, tags, virtual_machine);
});

// Story: crud:VirtualDisk:nondet:1:2
bthread("crud:VirtualDisk:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_1371";
  let id = 1371;
  let name = "name_1371";
  let size = 1371;
  let tags = "tags_1371";
  let virtual_machine = "virtual_machine_1371";
  createVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  tryToAddExistingVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  updateVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  verifyVirtualDiskExists(custom_fields, description, id, name, size, tags, virtual_machine);
  deleteVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  tryToDeleteANonExistingVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  verifyVirtualDiskDoesNotExist(custom_fields, description, id, name, size, tags, virtual_machine);
});

// Story: crud:VirtualDisk:nondet:negative:dup-add
bthread("crud:VirtualDisk:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_1376";
  let id = 1376;
  let name = "name_1376";
  let size = 1376;
  let tags = "tags_1376";
  let virtual_machine = "virtual_machine_1376";
  createVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  verifyVirtualDiskExists(custom_fields, description, id, name, size, tags, virtual_machine);
  tryToAddExistingVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  verifyVirtualDiskExists(custom_fields, description, id, name, size, tags, virtual_machine);
});

// Monitor: VirtualDisk Addition Verification
bthread("monitor:VirtualDisk:addition", function () {
  while (true) {
    let item = waitForAnyVirtualDiskAdded();
    block(matchDeletedVirtualDisk(item.custom_fields, item.description, item.id, item.name, item.size, item.tags, item.virtual_machine), function () {
      verifyVirtualDiskExists(item.custom_fields, item.description, item.id, item.name, item.size, item.tags, item.virtual_machine);
    });
  }
});

// Monitor: VirtualDisk Deletion Verification
bthread("monitor:VirtualDisk:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualDiskDeleted();
    block(matchAddedVirtualDisk(item.custom_fields, item.description, item.id, item.name, item.size, item.tags, item.virtual_machine), function () {
      verifyVirtualDiskDoesNotExist(item.custom_fields, item.description, item.id, item.name, item.size, item.tags, item.virtual_machine);
    });
  }
});

// Story: crud:VirtualMachine:nondet:1:1
bthread("crud:VirtualMachine:nondet:1:1", function () {
  let cluster = "cluster_1380";
  let cluster_group = "cluster_group_1380";
  let cluster_type = "cluster_type_1380";
  let comments = "comments_1380";
  let config_template = "config_template_1380";
  let config_template_id = 1380;
  let contact = "contact_1380";
  let contact_role = "contact_role_1380";
  let custom_fields = {};
  let description = "description_1380";
  let device = "device_1380";
  let disk = 1380;
  let format = "format_1380";
  let id = 1380;
  let local_context_data = "local_context_data_1380";
  let memory = 1380;
  let name = "name_1380";
  let platform = "platform_1380";
  let primary_ip4 = "primary_ip4_1380";
  let primary_ip6 = "primary_ip6_1380";
  let role = "role_1380";
  let serial = "serial_1380";
  let site = "site_1380";
  let status = "status_1380";
  let tag = "tag_1380";
  let tags = "tags_1380";
  let tenant = "tenant_1380";
  let vcpus = 1380;
  createVirtualMachine(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  waitForVirtualMachineAdded(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  tryToAddExistingVirtualMachine(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  verifyVirtualMachineExists(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  updateVirtualMachine(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  deleteVirtualMachine(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  tryToDeleteANonExistingVirtualMachine(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  verifyVirtualMachineDoesNotExist(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
});

// Story: crud:VirtualMachine:nondet:1:2
bthread("crud:VirtualMachine:nondet:1:2", function () {
  let cluster = "cluster_1381";
  let cluster_group = "cluster_group_1381";
  let cluster_type = "cluster_type_1381";
  let comments = "comments_1381";
  let config_template = "config_template_1381";
  let config_template_id = 1381;
  let contact = "contact_1381";
  let contact_role = "contact_role_1381";
  let custom_fields = {};
  let description = "description_1381";
  let device = "device_1381";
  let disk = 1381;
  let format = "format_1381";
  let id = 1381;
  let local_context_data = "local_context_data_1381";
  let memory = 1381;
  let name = "name_1381";
  let platform = "platform_1381";
  let primary_ip4 = "primary_ip4_1381";
  let primary_ip6 = "primary_ip6_1381";
  let role = "role_1381";
  let serial = "serial_1381";
  let site = "site_1381";
  let status = "status_1381";
  let tag = "tag_1381";
  let tags = "tags_1381";
  let tenant = "tenant_1381";
  let vcpus = 1381;
  createVirtualMachine(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  tryToAddExistingVirtualMachine(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  updateVirtualMachine(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  verifyVirtualMachineExists(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  deleteVirtualMachine(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  tryToDeleteANonExistingVirtualMachine(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  verifyVirtualMachineDoesNotExist(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
});

// Story: crud:VirtualMachine:nondet:negative:dup-add
bthread("crud:VirtualMachine:nondet:negative:dup-add", function () {
  let cluster = "cluster_1386";
  let cluster_group = "cluster_group_1386";
  let cluster_type = "cluster_type_1386";
  let comments = "comments_1386";
  let config_template = "config_template_1386";
  let config_template_id = 1386;
  let contact = "contact_1386";
  let contact_role = "contact_role_1386";
  let custom_fields = {};
  let description = "description_1386";
  let device = "device_1386";
  let disk = 1386;
  let format = "format_1386";
  let id = 1386;
  let local_context_data = "local_context_data_1386";
  let memory = 1386;
  let name = "name_1386";
  let platform = "platform_1386";
  let primary_ip4 = "primary_ip4_1386";
  let primary_ip6 = "primary_ip6_1386";
  let role = "role_1386";
  let serial = "serial_1386";
  let site = "site_1386";
  let status = "status_1386";
  let tag = "tag_1386";
  let tags = "tags_1386";
  let tenant = "tenant_1386";
  let vcpus = 1386;
  createVirtualMachine(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  verifyVirtualMachineExists(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  tryToAddExistingVirtualMachine(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
  verifyVirtualMachineExists(cluster, cluster_group, cluster_type, comments, config_template, config_template_id, contact, contact_role, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tag, tags, tenant, vcpus);
});

// Monitor: VirtualMachine Addition Verification
bthread("monitor:VirtualMachine:addition", function () {
  while (true) {
    let item = waitForAnyVirtualMachineAdded();
    block(matchDeletedVirtualMachine(item.cluster, item.cluster_group, item.cluster_type, item.comments, item.config_template, item.config_template_id, item.contact, item.contact_role, item.custom_fields, item.description, item.device, item.disk, item.format, item.id, item.local_context_data, item.memory, item.name, item.platform, item.primary_ip4, item.primary_ip6, item.role, item.serial, item.site, item.status, item.tag, item.tags, item.tenant, item.vcpus), function () {
      verifyVirtualMachineExists(item.cluster, item.cluster_group, item.cluster_type, item.comments, item.config_template, item.config_template_id, item.contact, item.contact_role, item.custom_fields, item.description, item.device, item.disk, item.format, item.id, item.local_context_data, item.memory, item.name, item.platform, item.primary_ip4, item.primary_ip6, item.role, item.serial, item.site, item.status, item.tag, item.tags, item.tenant, item.vcpus);
    });
  }
});

// Monitor: VirtualMachine Deletion Verification
bthread("monitor:VirtualMachine:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualMachineDeleted();
    block(matchAddedVirtualMachine(item.cluster, item.cluster_group, item.cluster_type, item.comments, item.config_template, item.config_template_id, item.contact, item.contact_role, item.custom_fields, item.description, item.device, item.disk, item.format, item.id, item.local_context_data, item.memory, item.name, item.platform, item.primary_ip4, item.primary_ip6, item.role, item.serial, item.site, item.status, item.tag, item.tags, item.tenant, item.vcpus), function () {
      verifyVirtualMachineDoesNotExist(item.cluster, item.cluster_group, item.cluster_type, item.comments, item.config_template, item.config_template_id, item.contact, item.contact_role, item.custom_fields, item.description, item.device, item.disk, item.format, item.id, item.local_context_data, item.memory, item.name, item.platform, item.primary_ip4, item.primary_ip6, item.role, item.serial, item.site, item.status, item.tag, item.tags, item.tenant, item.vcpus);
    });
  }
});

// Story: crud:IKEPolicy:nondet:1:1
bthread("crud:IKEPolicy:nondet:1:1", function () {
  let comments = "comments_1390";
  let custom_fields = {};
  let description = "description_1390";
  let id = 1390;
  let mode = "mode_1390";
  let name = "name_1390";
  let preshared_key = "preshared_key_1390";
  let proposals = "proposals_1390";
  let tags = "tags_1390";
  let version = 1390;
  createIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  waitForIKEPolicyAdded(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  tryToAddExistingIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyExists(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  updateIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  deleteIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  tryToDeleteANonExistingIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyDoesNotExist(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
});

// Story: crud:IKEPolicy:nondet:1:2
bthread("crud:IKEPolicy:nondet:1:2", function () {
  let comments = "comments_1391";
  let custom_fields = {};
  let description = "description_1391";
  let id = 1391;
  let mode = "mode_1391";
  let name = "name_1391";
  let preshared_key = "preshared_key_1391";
  let proposals = "proposals_1391";
  let tags = "tags_1391";
  let version = 1391;
  createIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  tryToAddExistingIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  updateIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyExists(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  deleteIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  tryToDeleteANonExistingIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyDoesNotExist(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
});

// Story: crud:IKEPolicy:nondet:negative:dup-add
bthread("crud:IKEPolicy:nondet:negative:dup-add", function () {
  let comments = "comments_1396";
  let custom_fields = {};
  let description = "description_1396";
  let id = 1396;
  let mode = "mode_1396";
  let name = "name_1396";
  let preshared_key = "preshared_key_1396";
  let proposals = "proposals_1396";
  let tags = "tags_1396";
  let version = 1396;
  createIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyExists(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  tryToAddExistingIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyExists(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
});

// Monitor: IKEPolicy Addition Verification
bthread("monitor:IKEPolicy:addition", function () {
  while (true) {
    let item = waitForAnyIKEPolicyAdded();
    block(matchDeletedIKEPolicy(item.comments, item.custom_fields, item.description, item.id, item.mode, item.name, item.preshared_key, item.proposals, item.tags, item.version), function () {
      verifyIKEPolicyExists(item.comments, item.custom_fields, item.description, item.id, item.mode, item.name, item.preshared_key, item.proposals, item.tags, item.version);
    });
  }
});

// Monitor: IKEPolicy Deletion Verification
bthread("monitor:IKEPolicy:deletion", function () {
  while (true) {
    let item = waitForAnyIKEPolicyDeleted();
    block(matchAddedIKEPolicy(item.comments, item.custom_fields, item.description, item.id, item.mode, item.name, item.preshared_key, item.proposals, item.tags, item.version), function () {
      verifyIKEPolicyDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.mode, item.name, item.preshared_key, item.proposals, item.tags, item.version);
    });
  }
});

// Story: crud:IKEProposal:nondet:1:1
bthread("crud:IKEProposal:nondet:1:1", function () {
  let authentication_algorithm = "authentication_algorithm_1400";
  let authentication_method = "authentication_method_1400";
  let comments = "comments_1400";
  let custom_fields = {};
  let description = "description_1400";
  let encryption_algorithm = "encryption_algorithm_1400";
  let group = 1400;
  let id = 1400;
  let name = "name_1400";
  let sa_lifetime = 1400;
  let tags = "tags_1400";
  createIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  waitForIKEProposalAdded(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  tryToAddExistingIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalExists(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  updateIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  deleteIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  tryToDeleteANonExistingIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalDoesNotExist(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
});

// Story: crud:IKEProposal:nondet:1:2
bthread("crud:IKEProposal:nondet:1:2", function () {
  let authentication_algorithm = "authentication_algorithm_1401";
  let authentication_method = "authentication_method_1401";
  let comments = "comments_1401";
  let custom_fields = {};
  let description = "description_1401";
  let encryption_algorithm = "encryption_algorithm_1401";
  let group = 1401;
  let id = 1401;
  let name = "name_1401";
  let sa_lifetime = 1401;
  let tags = "tags_1401";
  createIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  tryToAddExistingIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  updateIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalExists(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  deleteIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  tryToDeleteANonExistingIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalDoesNotExist(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
});

// Story: crud:IKEProposal:nondet:negative:dup-add
bthread("crud:IKEProposal:nondet:negative:dup-add", function () {
  let authentication_algorithm = "authentication_algorithm_1406";
  let authentication_method = "authentication_method_1406";
  let comments = "comments_1406";
  let custom_fields = {};
  let description = "description_1406";
  let encryption_algorithm = "encryption_algorithm_1406";
  let group = 1406;
  let id = 1406;
  let name = "name_1406";
  let sa_lifetime = 1406;
  let tags = "tags_1406";
  createIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalExists(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  tryToAddExistingIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalExists(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
});

// Monitor: IKEProposal Addition Verification
bthread("monitor:IKEProposal:addition", function () {
  while (true) {
    let item = waitForAnyIKEProposalAdded();
    block(matchDeletedIKEProposal(item.authentication_algorithm, item.authentication_method, item.comments, item.custom_fields, item.description, item.encryption_algorithm, item.group, item.id, item.name, item.sa_lifetime, item.tags), function () {
      verifyIKEProposalExists(item.authentication_algorithm, item.authentication_method, item.comments, item.custom_fields, item.description, item.encryption_algorithm, item.group, item.id, item.name, item.sa_lifetime, item.tags);
    });
  }
});

// Monitor: IKEProposal Deletion Verification
bthread("monitor:IKEProposal:deletion", function () {
  while (true) {
    let item = waitForAnyIKEProposalDeleted();
    block(matchAddedIKEProposal(item.authentication_algorithm, item.authentication_method, item.comments, item.custom_fields, item.description, item.encryption_algorithm, item.group, item.id, item.name, item.sa_lifetime, item.tags), function () {
      verifyIKEProposalDoesNotExist(item.authentication_algorithm, item.authentication_method, item.comments, item.custom_fields, item.description, item.encryption_algorithm, item.group, item.id, item.name, item.sa_lifetime, item.tags);
    });
  }
});

// Story: crud:IPSecPolicy:nondet:1:1
bthread("crud:IPSecPolicy:nondet:1:1", function () {
  let comments = "comments_1410";
  let custom_fields = {};
  let description = "description_1410";
  let id = 1410;
  let name = "name_1410";
  let pfs_group = 1410;
  let proposals = "proposals_1410";
  let tags = "tags_1410";
  createIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  waitForIPSecPolicyAdded(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  tryToAddExistingIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyExists(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  updateIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  deleteIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  tryToDeleteANonExistingIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyDoesNotExist(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
});

// Story: crud:IPSecPolicy:nondet:1:2
bthread("crud:IPSecPolicy:nondet:1:2", function () {
  let comments = "comments_1411";
  let custom_fields = {};
  let description = "description_1411";
  let id = 1411;
  let name = "name_1411";
  let pfs_group = 1411;
  let proposals = "proposals_1411";
  let tags = "tags_1411";
  createIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  tryToAddExistingIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  updateIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyExists(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  deleteIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  tryToDeleteANonExistingIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyDoesNotExist(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
});

// Story: crud:IPSecPolicy:nondet:negative:dup-add
bthread("crud:IPSecPolicy:nondet:negative:dup-add", function () {
  let comments = "comments_1416";
  let custom_fields = {};
  let description = "description_1416";
  let id = 1416;
  let name = "name_1416";
  let pfs_group = 1416;
  let proposals = "proposals_1416";
  let tags = "tags_1416";
  createIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyExists(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  tryToAddExistingIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyExists(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
});

// Monitor: IPSecPolicy Addition Verification
bthread("monitor:IPSecPolicy:addition", function () {
  while (true) {
    let item = waitForAnyIPSecPolicyAdded();
    block(matchDeletedIPSecPolicy(item.comments, item.custom_fields, item.description, item.id, item.name, item.pfs_group, item.proposals, item.tags), function () {
      verifyIPSecPolicyExists(item.comments, item.custom_fields, item.description, item.id, item.name, item.pfs_group, item.proposals, item.tags);
    });
  }
});

// Monitor: IPSecPolicy Deletion Verification
bthread("monitor:IPSecPolicy:deletion", function () {
  while (true) {
    let item = waitForAnyIPSecPolicyDeleted();
    block(matchAddedIPSecPolicy(item.comments, item.custom_fields, item.description, item.id, item.name, item.pfs_group, item.proposals, item.tags), function () {
      verifyIPSecPolicyDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.name, item.pfs_group, item.proposals, item.tags);
    });
  }
});

// Story: crud:IPSecProfile:nondet:1:1
bthread("crud:IPSecProfile:nondet:1:1", function () {
  let comments = "comments_1420";
  let custom_fields = {};
  let description = "description_1420";
  let id = 1420;
  let ike_policy = "ike_policy_1420";
  let ipsec_policy = "ipsec_policy_1420";
  let mode = "mode_1420";
  let name = "name_1420";
  let tags = "tags_1420";
  createIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  waitForIPSecProfileAdded(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  tryToAddExistingIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileExists(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  updateIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  deleteIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  tryToDeleteANonExistingIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileDoesNotExist(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
});

// Story: crud:IPSecProfile:nondet:1:2
bthread("crud:IPSecProfile:nondet:1:2", function () {
  let comments = "comments_1421";
  let custom_fields = {};
  let description = "description_1421";
  let id = 1421;
  let ike_policy = "ike_policy_1421";
  let ipsec_policy = "ipsec_policy_1421";
  let mode = "mode_1421";
  let name = "name_1421";
  let tags = "tags_1421";
  createIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  tryToAddExistingIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  updateIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileExists(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  deleteIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  tryToDeleteANonExistingIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileDoesNotExist(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
});

// Story: crud:IPSecProfile:nondet:negative:dup-add
bthread("crud:IPSecProfile:nondet:negative:dup-add", function () {
  let comments = "comments_1426";
  let custom_fields = {};
  let description = "description_1426";
  let id = 1426;
  let ike_policy = "ike_policy_1426";
  let ipsec_policy = "ipsec_policy_1426";
  let mode = "mode_1426";
  let name = "name_1426";
  let tags = "tags_1426";
  createIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileExists(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  tryToAddExistingIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileExists(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
});

// Monitor: IPSecProfile Addition Verification
bthread("monitor:IPSecProfile:addition", function () {
  while (true) {
    let item = waitForAnyIPSecProfileAdded();
    block(matchDeletedIPSecProfile(item.comments, item.custom_fields, item.description, item.id, item.ike_policy, item.ipsec_policy, item.mode, item.name, item.tags), function () {
      verifyIPSecProfileExists(item.comments, item.custom_fields, item.description, item.id, item.ike_policy, item.ipsec_policy, item.mode, item.name, item.tags);
    });
  }
});

// Monitor: IPSecProfile Deletion Verification
bthread("monitor:IPSecProfile:deletion", function () {
  while (true) {
    let item = waitForAnyIPSecProfileDeleted();
    block(matchAddedIPSecProfile(item.comments, item.custom_fields, item.description, item.id, item.ike_policy, item.ipsec_policy, item.mode, item.name, item.tags), function () {
      verifyIPSecProfileDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.ike_policy, item.ipsec_policy, item.mode, item.name, item.tags);
    });
  }
});

// Story: crud:IPSecProposal:nondet:1:1
bthread("crud:IPSecProposal:nondet:1:1", function () {
  let authentication_algorithm = "authentication_algorithm_1430";
  let comments = "comments_1430";
  let custom_fields = {};
  let description = "description_1430";
  let encryption_algorithm = "encryption_algorithm_1430";
  let id = 1430;
  let name = "name_1430";
  let sa_lifetime_data = 1430;
  let sa_lifetime_seconds = 1430;
  let tags = "tags_1430";
  createIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  waitForIPSecProposalAdded(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  tryToAddExistingIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalExists(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  updateIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  deleteIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  tryToDeleteANonExistingIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalDoesNotExist(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
});

// Story: crud:IPSecProposal:nondet:1:2
bthread("crud:IPSecProposal:nondet:1:2", function () {
  let authentication_algorithm = "authentication_algorithm_1431";
  let comments = "comments_1431";
  let custom_fields = {};
  let description = "description_1431";
  let encryption_algorithm = "encryption_algorithm_1431";
  let id = 1431;
  let name = "name_1431";
  let sa_lifetime_data = 1431;
  let sa_lifetime_seconds = 1431;
  let tags = "tags_1431";
  createIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  tryToAddExistingIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  updateIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalExists(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  deleteIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  tryToDeleteANonExistingIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalDoesNotExist(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
});

// Story: crud:IPSecProposal:nondet:negative:dup-add
bthread("crud:IPSecProposal:nondet:negative:dup-add", function () {
  let authentication_algorithm = "authentication_algorithm_1436";
  let comments = "comments_1436";
  let custom_fields = {};
  let description = "description_1436";
  let encryption_algorithm = "encryption_algorithm_1436";
  let id = 1436;
  let name = "name_1436";
  let sa_lifetime_data = 1436;
  let sa_lifetime_seconds = 1436;
  let tags = "tags_1436";
  createIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalExists(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  tryToAddExistingIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalExists(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
});

// Monitor: IPSecProposal Addition Verification
bthread("monitor:IPSecProposal:addition", function () {
  while (true) {
    let item = waitForAnyIPSecProposalAdded();
    block(matchDeletedIPSecProposal(item.authentication_algorithm, item.comments, item.custom_fields, item.description, item.encryption_algorithm, item.id, item.name, item.sa_lifetime_data, item.sa_lifetime_seconds, item.tags), function () {
      verifyIPSecProposalExists(item.authentication_algorithm, item.comments, item.custom_fields, item.description, item.encryption_algorithm, item.id, item.name, item.sa_lifetime_data, item.sa_lifetime_seconds, item.tags);
    });
  }
});

// Monitor: IPSecProposal Deletion Verification
bthread("monitor:IPSecProposal:deletion", function () {
  while (true) {
    let item = waitForAnyIPSecProposalDeleted();
    block(matchAddedIPSecProposal(item.authentication_algorithm, item.comments, item.custom_fields, item.description, item.encryption_algorithm, item.id, item.name, item.sa_lifetime_data, item.sa_lifetime_seconds, item.tags), function () {
      verifyIPSecProposalDoesNotExist(item.authentication_algorithm, item.comments, item.custom_fields, item.description, item.encryption_algorithm, item.id, item.name, item.sa_lifetime_data, item.sa_lifetime_seconds, item.tags);
    });
  }
});

// Story: crud:L2VPNTermination:nondet:1:1
bthread("crud:L2VPNTermination:nondet:1:1", function () {
  let assigned_object_id = 1440;
  let assigned_object_type = "assigned_object_type_1440";
  let custom_fields = {};
  let id = 1440;
  let l2vpn = "l2vpn_1440";
  let tags = "tags_1440";
  createL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  waitForL2VPNTerminationAdded(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  tryToAddExistingL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationExists(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  updateL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  deleteL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  tryToDeleteANonExistingL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationDoesNotExist(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
});

// Story: crud:L2VPNTermination:nondet:1:2
bthread("crud:L2VPNTermination:nondet:1:2", function () {
  let assigned_object_id = 1441;
  let assigned_object_type = "assigned_object_type_1441";
  let custom_fields = {};
  let id = 1441;
  let l2vpn = "l2vpn_1441";
  let tags = "tags_1441";
  createL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  tryToAddExistingL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  updateL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationExists(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  deleteL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  tryToDeleteANonExistingL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationDoesNotExist(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
});

// Story: crud:L2VPNTermination:nondet:negative:dup-add
bthread("crud:L2VPNTermination:nondet:negative:dup-add", function () {
  let assigned_object_id = 1446;
  let assigned_object_type = "assigned_object_type_1446";
  let custom_fields = {};
  let id = 1446;
  let l2vpn = "l2vpn_1446";
  let tags = "tags_1446";
  createL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationExists(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  tryToAddExistingL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationExists(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
});

// Monitor: L2VPNTermination Addition Verification
bthread("monitor:L2VPNTermination:addition", function () {
  while (true) {
    let item = waitForAnyL2VPNTerminationAdded();
    block(matchDeletedL2VPNTermination(item.assigned_object_id, item.assigned_object_type, item.custom_fields, item.id, item.l2vpn, item.tags), function () {
      verifyL2VPNTerminationExists(item.assigned_object_id, item.assigned_object_type, item.custom_fields, item.id, item.l2vpn, item.tags);
    });
  }
});

// Monitor: L2VPNTermination Deletion Verification
bthread("monitor:L2VPNTermination:deletion", function () {
  while (true) {
    let item = waitForAnyL2VPNTerminationDeleted();
    block(matchAddedL2VPNTermination(item.assigned_object_id, item.assigned_object_type, item.custom_fields, item.id, item.l2vpn, item.tags), function () {
      verifyL2VPNTerminationDoesNotExist(item.assigned_object_id, item.assigned_object_type, item.custom_fields, item.id, item.l2vpn, item.tags);
    });
  }
});

// Story: crud:L2VPN:nondet:1:1
bthread("crud:L2VPN:nondet:1:1", function () {
  let comments = "comments_1450";
  let custom_fields = {};
  let description = "description_1450";
  let export_targets = "export_targets_1450";
  let id = 1450;
  let identifier = 1450;
  let import_targets = "import_targets_1450";
  let name = "name_1450";
  let slug = "slug_1450";
  let status = "status_1450";
  let tags = "tags_1450";
  let tenant = "tenant_1450";
  let type = "type_1450";
  createL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  waitForL2VPNAdded(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  tryToAddExistingL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNExists(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  updateL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  deleteL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  tryToDeleteANonExistingL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNDoesNotExist(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
});

// Story: crud:L2VPN:nondet:1:2
bthread("crud:L2VPN:nondet:1:2", function () {
  let comments = "comments_1451";
  let custom_fields = {};
  let description = "description_1451";
  let export_targets = "export_targets_1451";
  let id = 1451;
  let identifier = 1451;
  let import_targets = "import_targets_1451";
  let name = "name_1451";
  let slug = "slug_1451";
  let status = "status_1451";
  let tags = "tags_1451";
  let tenant = "tenant_1451";
  let type = "type_1451";
  createL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  tryToAddExistingL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  updateL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNExists(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  deleteL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  tryToDeleteANonExistingL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNDoesNotExist(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
});

// Story: crud:L2VPN:nondet:negative:dup-add
bthread("crud:L2VPN:nondet:negative:dup-add", function () {
  let comments = "comments_1456";
  let custom_fields = {};
  let description = "description_1456";
  let export_targets = "export_targets_1456";
  let id = 1456;
  let identifier = 1456;
  let import_targets = "import_targets_1456";
  let name = "name_1456";
  let slug = "slug_1456";
  let status = "status_1456";
  let tags = "tags_1456";
  let tenant = "tenant_1456";
  let type = "type_1456";
  createL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNExists(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  tryToAddExistingL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNExists(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
});

// Monitor: L2VPN Addition Verification
bthread("monitor:L2VPN:addition", function () {
  while (true) {
    let item = waitForAnyL2VPNAdded();
    block(matchDeletedL2VPN(item.comments, item.custom_fields, item.description, item.export_targets, item.id, item.identifier, item.import_targets, item.name, item.slug, item.status, item.tags, item.tenant, item.type), function () {
      verifyL2VPNExists(item.comments, item.custom_fields, item.description, item.export_targets, item.id, item.identifier, item.import_targets, item.name, item.slug, item.status, item.tags, item.tenant, item.type);
    });
  }
});

// Monitor: L2VPN Deletion Verification
bthread("monitor:L2VPN:deletion", function () {
  while (true) {
    let item = waitForAnyL2VPNDeleted();
    block(matchAddedL2VPN(item.comments, item.custom_fields, item.description, item.export_targets, item.id, item.identifier, item.import_targets, item.name, item.slug, item.status, item.tags, item.tenant, item.type), function () {
      verifyL2VPNDoesNotExist(item.comments, item.custom_fields, item.description, item.export_targets, item.id, item.identifier, item.import_targets, item.name, item.slug, item.status, item.tags, item.tenant, item.type);
    });
  }
});

// Story: crud:TunnelGroup:nondet:1:1
bthread("crud:TunnelGroup:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1460";
  let id = 1460;
  let name = "name_1460";
  let slug = "slug_1460";
  let tags = "tags_1460";
  createTunnelGroup(custom_fields, description, id, name, slug, tags);
  waitForTunnelGroupAdded(custom_fields, description, id, name, slug, tags);
  tryToAddExistingTunnelGroup(custom_fields, description, id, name, slug, tags);
  verifyTunnelGroupExists(custom_fields, description, id, name, slug, tags);
  updateTunnelGroup(custom_fields, description, id, name, slug, tags);
  deleteTunnelGroup(custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingTunnelGroup(custom_fields, description, id, name, slug, tags);
  verifyTunnelGroupDoesNotExist(custom_fields, description, id, name, slug, tags);
});

// Story: crud:TunnelGroup:nondet:1:2
bthread("crud:TunnelGroup:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_1461";
  let id = 1461;
  let name = "name_1461";
  let slug = "slug_1461";
  let tags = "tags_1461";
  createTunnelGroup(custom_fields, description, id, name, slug, tags);
  tryToAddExistingTunnelGroup(custom_fields, description, id, name, slug, tags);
  updateTunnelGroup(custom_fields, description, id, name, slug, tags);
  verifyTunnelGroupExists(custom_fields, description, id, name, slug, tags);
  deleteTunnelGroup(custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingTunnelGroup(custom_fields, description, id, name, slug, tags);
  verifyTunnelGroupDoesNotExist(custom_fields, description, id, name, slug, tags);
});

// Story: crud:TunnelGroup:nondet:negative:dup-add
bthread("crud:TunnelGroup:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_1466";
  let id = 1466;
  let name = "name_1466";
  let slug = "slug_1466";
  let tags = "tags_1466";
  createTunnelGroup(custom_fields, description, id, name, slug, tags);
  verifyTunnelGroupExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingTunnelGroup(custom_fields, description, id, name, slug, tags);
  verifyTunnelGroupExists(custom_fields, description, id, name, slug, tags);
});

// Monitor: TunnelGroup Addition Verification
bthread("monitor:TunnelGroup:addition", function () {
  while (true) {
    let item = waitForAnyTunnelGroupAdded();
    block(matchDeletedTunnelGroup(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyTunnelGroupExists(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Monitor: TunnelGroup Deletion Verification
bthread("monitor:TunnelGroup:deletion", function () {
  while (true) {
    let item = waitForAnyTunnelGroupDeleted();
    block(matchAddedTunnelGroup(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags), function () {
      verifyTunnelGroupDoesNotExist(item.custom_fields, item.description, item.id, item.name, item.slug, item.tags);
    });
  }
});

// Story: crud:TunnelTermination:nondet:1:1
bthread("crud:TunnelTermination:nondet:1:1", function () {
  let custom_fields = {};
  let id = 1470;
  let outside_ip = "outside_ip_1470";
  let role = "role_1470";
  let tags = "tags_1470";
  let termination_id = 1470;
  let termination_type = "termination_type_1470";
  let tunnel = "tunnel_1470";
  createTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  waitForTunnelTerminationAdded(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  tryToAddExistingTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  verifyTunnelTerminationExists(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  updateTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  deleteTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  tryToDeleteANonExistingTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  verifyTunnelTerminationDoesNotExist(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
});

// Story: crud:TunnelTermination:nondet:1:2
bthread("crud:TunnelTermination:nondet:1:2", function () {
  let custom_fields = {};
  let id = 1471;
  let outside_ip = "outside_ip_1471";
  let role = "role_1471";
  let tags = "tags_1471";
  let termination_id = 1471;
  let termination_type = "termination_type_1471";
  let tunnel = "tunnel_1471";
  createTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  tryToAddExistingTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  updateTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  verifyTunnelTerminationExists(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  deleteTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  tryToDeleteANonExistingTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  verifyTunnelTerminationDoesNotExist(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
});

// Story: crud:TunnelTermination:nondet:negative:dup-add
bthread("crud:TunnelTermination:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let id = 1476;
  let outside_ip = "outside_ip_1476";
  let role = "role_1476";
  let tags = "tags_1476";
  let termination_id = 1476;
  let termination_type = "termination_type_1476";
  let tunnel = "tunnel_1476";
  createTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  verifyTunnelTerminationExists(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  tryToAddExistingTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  verifyTunnelTerminationExists(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
});

// Monitor: TunnelTermination Addition Verification
bthread("monitor:TunnelTermination:addition", function () {
  while (true) {
    let item = waitForAnyTunnelTerminationAdded();
    block(matchDeletedTunnelTermination(item.custom_fields, item.id, item.outside_ip, item.role, item.tags, item.termination_id, item.termination_type, item.tunnel), function () {
      verifyTunnelTerminationExists(item.custom_fields, item.id, item.outside_ip, item.role, item.tags, item.termination_id, item.termination_type, item.tunnel);
    });
  }
});

// Monitor: TunnelTermination Deletion Verification
bthread("monitor:TunnelTermination:deletion", function () {
  while (true) {
    let item = waitForAnyTunnelTerminationDeleted();
    block(matchAddedTunnelTermination(item.custom_fields, item.id, item.outside_ip, item.role, item.tags, item.termination_id, item.termination_type, item.tunnel), function () {
      verifyTunnelTerminationDoesNotExist(item.custom_fields, item.id, item.outside_ip, item.role, item.tags, item.termination_id, item.termination_type, item.tunnel);
    });
  }
});

// Story: crud:Tunnel:nondet:1:1
bthread("crud:Tunnel:nondet:1:1", function () {
  let comments = "comments_1480";
  let custom_fields = {};
  let description = "description_1480";
  let encapsulation = "encapsulation_1480";
  let group = "group_1480";
  let id = 1480;
  let ipsec_profile = "ipsec_profile_1480";
  let name = "name_1480";
  let status = "status_1480";
  let tags = "tags_1480";
  let tenant = "tenant_1480";
  let tunnel_id = 1480;
  createTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  waitForTunnelAdded(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  tryToAddExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  verifyTunnelExists(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  updateTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  deleteTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  tryToDeleteANonExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  verifyTunnelDoesNotExist(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
});

// Story: crud:Tunnel:nondet:1:2
bthread("crud:Tunnel:nondet:1:2", function () {
  let comments = "comments_1481";
  let custom_fields = {};
  let description = "description_1481";
  let encapsulation = "encapsulation_1481";
  let group = "group_1481";
  let id = 1481;
  let ipsec_profile = "ipsec_profile_1481";
  let name = "name_1481";
  let status = "status_1481";
  let tags = "tags_1481";
  let tenant = "tenant_1481";
  let tunnel_id = 1481;
  createTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  tryToAddExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  updateTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  verifyTunnelExists(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  deleteTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  tryToDeleteANonExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  verifyTunnelDoesNotExist(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
});

// Story: crud:Tunnel:nondet:negative:dup-add
bthread("crud:Tunnel:nondet:negative:dup-add", function () {
  let comments = "comments_1486";
  let custom_fields = {};
  let description = "description_1486";
  let encapsulation = "encapsulation_1486";
  let group = "group_1486";
  let id = 1486;
  let ipsec_profile = "ipsec_profile_1486";
  let name = "name_1486";
  let status = "status_1486";
  let tags = "tags_1486";
  let tenant = "tenant_1486";
  let tunnel_id = 1486;
  createTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  verifyTunnelExists(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  tryToAddExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
  verifyTunnelExists(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, status, tags, tenant, tunnel_id);
});

// Monitor: Tunnel Addition Verification
bthread("monitor:Tunnel:addition", function () {
  while (true) {
    let item = waitForAnyTunnelAdded();
    block(matchDeletedTunnel(item.comments, item.custom_fields, item.description, item.encapsulation, item.group, item.id, item.ipsec_profile, item.name, item.status, item.tags, item.tenant, item.tunnel_id), function () {
      verifyTunnelExists(item.comments, item.custom_fields, item.description, item.encapsulation, item.group, item.id, item.ipsec_profile, item.name, item.status, item.tags, item.tenant, item.tunnel_id);
    });
  }
});

// Monitor: Tunnel Deletion Verification
bthread("monitor:Tunnel:deletion", function () {
  while (true) {
    let item = waitForAnyTunnelDeleted();
    block(matchAddedTunnel(item.comments, item.custom_fields, item.description, item.encapsulation, item.group, item.id, item.ipsec_profile, item.name, item.status, item.tags, item.tenant, item.tunnel_id), function () {
      verifyTunnelDoesNotExist(item.comments, item.custom_fields, item.description, item.encapsulation, item.group, item.id, item.ipsec_profile, item.name, item.status, item.tags, item.tenant, item.tunnel_id);
    });
  }
});

// Story: crud:WirelessLANGroup:nondet:1:1
bthread("crud:WirelessLANGroup:nondet:1:1", function () {
  let comments = "comments_1490";
  let custom_fields = {};
  let description = "description_1490";
  let id = 1490;
  let name = "name_1490";
  let parent = 1490;
  let slug = "slug_1490";
  let tags = "tags_1490";
  createWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  waitForWirelessLANGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyWirelessLANGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  updateWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyWirelessLANGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:WirelessLANGroup:nondet:1:2
bthread("crud:WirelessLANGroup:nondet:1:2", function () {
  let comments = "comments_1491";
  let custom_fields = {};
  let description = "description_1491";
  let id = 1491;
  let name = "name_1491";
  let parent = 1491;
  let slug = "slug_1491";
  let tags = "tags_1491";
  createWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  updateWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyWirelessLANGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyWirelessLANGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:WirelessLANGroup:nondet:negative:dup-add
bthread("crud:WirelessLANGroup:nondet:negative:dup-add", function () {
  let comments = "comments_1496";
  let custom_fields = {};
  let description = "description_1496";
  let id = 1496;
  let name = "name_1496";
  let parent = 1496;
  let slug = "slug_1496";
  let tags = "tags_1496";
  createWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyWirelessLANGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyWirelessLANGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Monitor: WirelessLANGroup Addition Verification
bthread("monitor:WirelessLANGroup:addition", function () {
  while (true) {
    let item = waitForAnyWirelessLANGroupAdded();
    block(matchDeletedWirelessLANGroup(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags), function () {
      verifyWirelessLANGroupExists(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags);
    });
  }
});

// Monitor: WirelessLANGroup Deletion Verification
bthread("monitor:WirelessLANGroup:deletion", function () {
  while (true) {
    let item = waitForAnyWirelessLANGroupDeleted();
    block(matchAddedWirelessLANGroup(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags), function () {
      verifyWirelessLANGroupDoesNotExist(item.comments, item.custom_fields, item.description, item.id, item.name, item.parent, item.slug, item.tags);
    });
  }
});

// Story: crud:WirelessLAN:nondet:1:1
bthread("crud:WirelessLAN:nondet:1:1", function () {
  let auth_cipher = "auth_cipher_1500";
  let auth_psk = "auth_psk_1500";
  let auth_type = "auth_type_1500";
  let comments = "comments_1500";
  let custom_fields = {};
  let description = "description_1500";
  let group = "group_1500";
  let id = 1500;
  let scope_id = 1500;
  let scope_type = "scope_type_1500";
  let ssid = 1500;
  let status = "status_1500";
  let tags = "tags_1500";
  let tenant = "tenant_1500";
  let vlan = "vlan_1500";
  createWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  waitForWirelessLANAdded(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  tryToAddExistingWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  verifyWirelessLANExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  updateWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  deleteWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  tryToDeleteANonExistingWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  verifyWirelessLANDoesNotExist(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
});

// Story: crud:WirelessLAN:nondet:1:2
bthread("crud:WirelessLAN:nondet:1:2", function () {
  let auth_cipher = "auth_cipher_1501";
  let auth_psk = "auth_psk_1501";
  let auth_type = "auth_type_1501";
  let comments = "comments_1501";
  let custom_fields = {};
  let description = "description_1501";
  let group = "group_1501";
  let id = 1501;
  let scope_id = 1501;
  let scope_type = "scope_type_1501";
  let ssid = 1501;
  let status = "status_1501";
  let tags = "tags_1501";
  let tenant = "tenant_1501";
  let vlan = "vlan_1501";
  createWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  tryToAddExistingWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  updateWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  verifyWirelessLANExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  deleteWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  tryToDeleteANonExistingWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  verifyWirelessLANDoesNotExist(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
});

// Story: crud:WirelessLAN:nondet:negative:dup-add
bthread("crud:WirelessLAN:nondet:negative:dup-add", function () {
  let auth_cipher = "auth_cipher_1506";
  let auth_psk = "auth_psk_1506";
  let auth_type = "auth_type_1506";
  let comments = "comments_1506";
  let custom_fields = {};
  let description = "description_1506";
  let group = "group_1506";
  let id = 1506;
  let scope_id = 1506;
  let scope_type = "scope_type_1506";
  let ssid = 1506;
  let status = "status_1506";
  let tags = "tags_1506";
  let tenant = "tenant_1506";
  let vlan = "vlan_1506";
  createWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  verifyWirelessLANExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  tryToAddExistingWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  verifyWirelessLANExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
});

// Monitor: WirelessLAN Addition Verification
bthread("monitor:WirelessLAN:addition", function () {
  while (true) {
    let item = waitForAnyWirelessLANAdded();
    block(matchDeletedWirelessLAN(item.auth_cipher, item.auth_psk, item.auth_type, item.comments, item.custom_fields, item.description, item.group, item.id, item.scope_id, item.scope_type, item.ssid, item.status, item.tags, item.tenant, item.vlan), function () {
      verifyWirelessLANExists(item.auth_cipher, item.auth_psk, item.auth_type, item.comments, item.custom_fields, item.description, item.group, item.id, item.scope_id, item.scope_type, item.ssid, item.status, item.tags, item.tenant, item.vlan);
    });
  }
});

// Monitor: WirelessLAN Deletion Verification
bthread("monitor:WirelessLAN:deletion", function () {
  while (true) {
    let item = waitForAnyWirelessLANDeleted();
    block(matchAddedWirelessLAN(item.auth_cipher, item.auth_psk, item.auth_type, item.comments, item.custom_fields, item.description, item.group, item.id, item.scope_id, item.scope_type, item.ssid, item.status, item.tags, item.tenant, item.vlan), function () {
      verifyWirelessLANDoesNotExist(item.auth_cipher, item.auth_psk, item.auth_type, item.comments, item.custom_fields, item.description, item.group, item.id, item.scope_id, item.scope_type, item.ssid, item.status, item.tags, item.tenant, item.vlan);
    });
  }
});

// Story: crud:WirelessLink:nondet:1:1
bthread("crud:WirelessLink:nondet:1:1", function () {
  let auth_cipher = "auth_cipher_1510";
  let auth_psk = "auth_psk_1510";
  let auth_type = "auth_type_1510";
  let comments = "comments_1510";
  let custom_fields = {};
  let description = "description_1510";
  let distance = 1510;
  let distance_unit = "distance_unit_1510";
  let id = 1510;
  let interface_a = "interface_a_1510";
  let interface_b = "interface_b_1510";
  let ssid = 1510;
  let status = "status_1510";
  let tags = "tags_1510";
  let tenant = "tenant_1510";
  createWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  waitForWirelessLinkAdded(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  tryToAddExistingWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  verifyWirelessLinkExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  updateWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  deleteWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  tryToDeleteANonExistingWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  verifyWirelessLinkDoesNotExist(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
});

// Story: crud:WirelessLink:nondet:1:2
bthread("crud:WirelessLink:nondet:1:2", function () {
  let auth_cipher = "auth_cipher_1511";
  let auth_psk = "auth_psk_1511";
  let auth_type = "auth_type_1511";
  let comments = "comments_1511";
  let custom_fields = {};
  let description = "description_1511";
  let distance = 1511;
  let distance_unit = "distance_unit_1511";
  let id = 1511;
  let interface_a = "interface_a_1511";
  let interface_b = "interface_b_1511";
  let ssid = 1511;
  let status = "status_1511";
  let tags = "tags_1511";
  let tenant = "tenant_1511";
  createWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  tryToAddExistingWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  updateWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  verifyWirelessLinkExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  deleteWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  tryToDeleteANonExistingWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  verifyWirelessLinkDoesNotExist(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
});

// Story: crud:WirelessLink:nondet:negative:dup-add
bthread("crud:WirelessLink:nondet:negative:dup-add", function () {
  let auth_cipher = "auth_cipher_1516";
  let auth_psk = "auth_psk_1516";
  let auth_type = "auth_type_1516";
  let comments = "comments_1516";
  let custom_fields = {};
  let description = "description_1516";
  let distance = 1516;
  let distance_unit = "distance_unit_1516";
  let id = 1516;
  let interface_a = "interface_a_1516";
  let interface_b = "interface_b_1516";
  let ssid = 1516;
  let status = "status_1516";
  let tags = "tags_1516";
  let tenant = "tenant_1516";
  createWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  verifyWirelessLinkExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  tryToAddExistingWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  verifyWirelessLinkExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
});

// Monitor: WirelessLink Addition Verification
bthread("monitor:WirelessLink:addition", function () {
  while (true) {
    let item = waitForAnyWirelessLinkAdded();
    block(matchDeletedWirelessLink(item.auth_cipher, item.auth_psk, item.auth_type, item.comments, item.custom_fields, item.description, item.distance, item.distance_unit, item.id, item.interface_a, item.interface_b, item.ssid, item.status, item.tags, item.tenant), function () {
      verifyWirelessLinkExists(item.auth_cipher, item.auth_psk, item.auth_type, item.comments, item.custom_fields, item.description, item.distance, item.distance_unit, item.id, item.interface_a, item.interface_b, item.ssid, item.status, item.tags, item.tenant);
    });
  }
});

// Monitor: WirelessLink Deletion Verification
bthread("monitor:WirelessLink:deletion", function () {
  while (true) {
    let item = waitForAnyWirelessLinkDeleted();
    block(matchAddedWirelessLink(item.auth_cipher, item.auth_psk, item.auth_type, item.comments, item.custom_fields, item.description, item.distance, item.distance_unit, item.id, item.interface_a, item.interface_b, item.ssid, item.status, item.tags, item.tenant), function () {
      verifyWirelessLinkDoesNotExist(item.auth_cipher, item.auth_psk, item.auth_type, item.comments, item.custom_fields, item.description, item.distance, item.distance_unit, item.id, item.interface_a, item.interface_b, item.ssid, item.status, item.tags, item.tenant);
    });
  }
});
