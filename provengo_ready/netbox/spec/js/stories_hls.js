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
  let id = 200;
  createCircuitGroupAssignment(id);
  waitForCircuitGroupAssignmentAdded(id);
  tryToAddExistingCircuitGroupAssignment(id);
  verifyCircuitGroupAssignmentExists(id);
  updateCircuitGroupAssignment(id);
  deleteCircuitGroupAssignment(id);
  tryToDeleteANonExistingCircuitGroupAssignment(id);
  verifyCircuitGroupAssignmentDoesNotExist(id);
});

// Story: crud:CircuitGroupAssignment:nondet:1:2
bthread("crud:CircuitGroupAssignment:nondet:1:2", function () {
  let id = 201;
  createCircuitGroupAssignment(id);
  tryToAddExistingCircuitGroupAssignment(id);
  updateCircuitGroupAssignment(id);
  verifyCircuitGroupAssignmentExists(id);
  deleteCircuitGroupAssignment(id);
  tryToDeleteANonExistingCircuitGroupAssignment(id);
  verifyCircuitGroupAssignmentDoesNotExist(id);
});

// Story: crud:CircuitGroupAssignment:nondet:negative:dup-add
bthread("crud:CircuitGroupAssignment:nondet:negative:dup-add", function () {
  let id = 206;
  createCircuitGroupAssignment(id);
  verifyCircuitGroupAssignmentExists(id);
  tryToAddExistingCircuitGroupAssignment(id);
  verifyCircuitGroupAssignmentExists(id);
});

// Monitor: CircuitGroupAssignment Addition Verification
bthread("monitor:CircuitGroupAssignment:addition", function () {
  while (true) {
    let item = waitForAnyCircuitGroupAssignmentAdded();
    block(matchDeletedCircuitGroupAssignment(item.id), function () {
      verifyCircuitGroupAssignmentExists(item.id);
    });
  }
});

// Monitor: CircuitGroupAssignment Deletion Verification
bthread("monitor:CircuitGroupAssignment:deletion", function () {
  while (true) {
    let item = waitForAnyCircuitGroupAssignmentDeleted();
    block(matchAddedCircuitGroupAssignment(item.id), function () {
      verifyCircuitGroupAssignmentDoesNotExist(item.id);
    });
  }
});

// Story: crud:CircuitGroup:nondet:1:1
bthread("crud:CircuitGroup:nondet:1:1", function () {
  let id = 210;
  createCircuitGroup(id);
  waitForCircuitGroupAdded(id);
  tryToAddExistingCircuitGroup(id);
  verifyCircuitGroupExists(id);
  updateCircuitGroup(id);
  deleteCircuitGroup(id);
  tryToDeleteANonExistingCircuitGroup(id);
  verifyCircuitGroupDoesNotExist(id);
});

// Story: crud:CircuitGroup:nondet:1:2
bthread("crud:CircuitGroup:nondet:1:2", function () {
  let id = 211;
  createCircuitGroup(id);
  tryToAddExistingCircuitGroup(id);
  updateCircuitGroup(id);
  verifyCircuitGroupExists(id);
  deleteCircuitGroup(id);
  tryToDeleteANonExistingCircuitGroup(id);
  verifyCircuitGroupDoesNotExist(id);
});

// Story: crud:CircuitGroup:nondet:negative:dup-add
bthread("crud:CircuitGroup:nondet:negative:dup-add", function () {
  let id = 216;
  createCircuitGroup(id);
  verifyCircuitGroupExists(id);
  tryToAddExistingCircuitGroup(id);
  verifyCircuitGroupExists(id);
});

// Monitor: CircuitGroup Addition Verification
bthread("monitor:CircuitGroup:addition", function () {
  while (true) {
    let item = waitForAnyCircuitGroupAdded();
    block(matchDeletedCircuitGroup(item.id), function () {
      verifyCircuitGroupExists(item.id);
    });
  }
});

// Monitor: CircuitGroup Deletion Verification
bthread("monitor:CircuitGroup:deletion", function () {
  while (true) {
    let item = waitForAnyCircuitGroupDeleted();
    block(matchAddedCircuitGroup(item.id), function () {
      verifyCircuitGroupDoesNotExist(item.id);
    });
  }
});

// Story: crud:CircuitTermination:nondet:1:1
bthread("crud:CircuitTermination:nondet:1:1", function () {
  let id = 220;
  createCircuitTermination(id);
  waitForCircuitTerminationAdded(id);
  tryToAddExistingCircuitTermination(id);
  verifyCircuitTerminationExists(id);
  updateCircuitTermination(id);
  deleteCircuitTermination(id);
  tryToDeleteANonExistingCircuitTermination(id);
  verifyCircuitTerminationDoesNotExist(id);
});

// Story: crud:CircuitTermination:nondet:1:2
bthread("crud:CircuitTermination:nondet:1:2", function () {
  let id = 221;
  createCircuitTermination(id);
  tryToAddExistingCircuitTermination(id);
  updateCircuitTermination(id);
  verifyCircuitTerminationExists(id);
  deleteCircuitTermination(id);
  tryToDeleteANonExistingCircuitTermination(id);
  verifyCircuitTerminationDoesNotExist(id);
});

// Story: crud:CircuitTermination:nondet:negative:dup-add
bthread("crud:CircuitTermination:nondet:negative:dup-add", function () {
  let id = 226;
  createCircuitTermination(id);
  verifyCircuitTerminationExists(id);
  tryToAddExistingCircuitTermination(id);
  verifyCircuitTerminationExists(id);
});

// Monitor: CircuitTermination Addition Verification
bthread("monitor:CircuitTermination:addition", function () {
  while (true) {
    let item = waitForAnyCircuitTerminationAdded();
    block(matchDeletedCircuitTermination(item.id), function () {
      verifyCircuitTerminationExists(item.id);
    });
  }
});

// Monitor: CircuitTermination Deletion Verification
bthread("monitor:CircuitTermination:deletion", function () {
  while (true) {
    let item = waitForAnyCircuitTerminationDeleted();
    block(matchAddedCircuitTermination(item.id), function () {
      verifyCircuitTerminationDoesNotExist(item.id);
    });
  }
});

// Story: crud:CircuitType:nondet:1:1
bthread("crud:CircuitType:nondet:1:1", function () {
  let id = 230;
  createCircuitType(id);
  waitForCircuitTypeAdded(id);
  tryToAddExistingCircuitType(id);
  verifyCircuitTypeExists(id);
  updateCircuitType(id);
  deleteCircuitType(id);
  tryToDeleteANonExistingCircuitType(id);
  verifyCircuitTypeDoesNotExist(id);
});

// Story: crud:CircuitType:nondet:1:2
bthread("crud:CircuitType:nondet:1:2", function () {
  let id = 231;
  createCircuitType(id);
  tryToAddExistingCircuitType(id);
  updateCircuitType(id);
  verifyCircuitTypeExists(id);
  deleteCircuitType(id);
  tryToDeleteANonExistingCircuitType(id);
  verifyCircuitTypeDoesNotExist(id);
});

// Story: crud:CircuitType:nondet:negative:dup-add
bthread("crud:CircuitType:nondet:negative:dup-add", function () {
  let id = 236;
  createCircuitType(id);
  verifyCircuitTypeExists(id);
  tryToAddExistingCircuitType(id);
  verifyCircuitTypeExists(id);
});

// Monitor: CircuitType Addition Verification
bthread("monitor:CircuitType:addition", function () {
  while (true) {
    let item = waitForAnyCircuitTypeAdded();
    block(matchDeletedCircuitType(item.id), function () {
      verifyCircuitTypeExists(item.id);
    });
  }
});

// Monitor: CircuitType Deletion Verification
bthread("monitor:CircuitType:deletion", function () {
  while (true) {
    let item = waitForAnyCircuitTypeDeleted();
    block(matchAddedCircuitType(item.id), function () {
      verifyCircuitTypeDoesNotExist(item.id);
    });
  }
});

// Story: crud:Circuit:nondet:1:1
bthread("crud:Circuit:nondet:1:1", function () {
  let id = 240;
  createCircuit(id);
  waitForCircuitAdded(id);
  tryToAddExistingCircuit(id);
  verifyCircuitExists(id);
  updateCircuit(id);
  deleteCircuit(id);
  tryToDeleteANonExistingCircuit(id);
  verifyCircuitDoesNotExist(id);
});

// Story: crud:Circuit:nondet:1:2
bthread("crud:Circuit:nondet:1:2", function () {
  let id = 241;
  createCircuit(id);
  tryToAddExistingCircuit(id);
  updateCircuit(id);
  verifyCircuitExists(id);
  deleteCircuit(id);
  tryToDeleteANonExistingCircuit(id);
  verifyCircuitDoesNotExist(id);
});

// Story: crud:Circuit:nondet:negative:dup-add
bthread("crud:Circuit:nondet:negative:dup-add", function () {
  let id = 246;
  createCircuit(id);
  verifyCircuitExists(id);
  tryToAddExistingCircuit(id);
  verifyCircuitExists(id);
});

// Monitor: Circuit Addition Verification
bthread("monitor:Circuit:addition", function () {
  while (true) {
    let item = waitForAnyCircuitAdded();
    block(matchDeletedCircuit(item.id), function () {
      verifyCircuitExists(item.id);
    });
  }
});

// Monitor: Circuit Deletion Verification
bthread("monitor:Circuit:deletion", function () {
  while (true) {
    let item = waitForAnyCircuitDeleted();
    block(matchAddedCircuit(item.id), function () {
      verifyCircuitDoesNotExist(item.id);
    });
  }
});

// Story: crud:ProviderAccount:nondet:1:1
bthread("crud:ProviderAccount:nondet:1:1", function () {
  let id = 250;
  createProviderAccount(id);
  waitForProviderAccountAdded(id);
  tryToAddExistingProviderAccount(id);
  verifyProviderAccountExists(id);
  updateProviderAccount(id);
  deleteProviderAccount(id);
  tryToDeleteANonExistingProviderAccount(id);
  verifyProviderAccountDoesNotExist(id);
});

// Story: crud:ProviderAccount:nondet:1:2
bthread("crud:ProviderAccount:nondet:1:2", function () {
  let id = 251;
  createProviderAccount(id);
  tryToAddExistingProviderAccount(id);
  updateProviderAccount(id);
  verifyProviderAccountExists(id);
  deleteProviderAccount(id);
  tryToDeleteANonExistingProviderAccount(id);
  verifyProviderAccountDoesNotExist(id);
});

// Story: crud:ProviderAccount:nondet:negative:dup-add
bthread("crud:ProviderAccount:nondet:negative:dup-add", function () {
  let id = 256;
  createProviderAccount(id);
  verifyProviderAccountExists(id);
  tryToAddExistingProviderAccount(id);
  verifyProviderAccountExists(id);
});

// Monitor: ProviderAccount Addition Verification
bthread("monitor:ProviderAccount:addition", function () {
  while (true) {
    let item = waitForAnyProviderAccountAdded();
    block(matchDeletedProviderAccount(item.id), function () {
      verifyProviderAccountExists(item.id);
    });
  }
});

// Monitor: ProviderAccount Deletion Verification
bthread("monitor:ProviderAccount:deletion", function () {
  while (true) {
    let item = waitForAnyProviderAccountDeleted();
    block(matchAddedProviderAccount(item.id), function () {
      verifyProviderAccountDoesNotExist(item.id);
    });
  }
});

// Story: crud:ProviderNetwork:nondet:1:1
bthread("crud:ProviderNetwork:nondet:1:1", function () {
  let id = 260;
  createProviderNetwork(id);
  waitForProviderNetworkAdded(id);
  tryToAddExistingProviderNetwork(id);
  verifyProviderNetworkExists(id);
  updateProviderNetwork(id);
  deleteProviderNetwork(id);
  tryToDeleteANonExistingProviderNetwork(id);
  verifyProviderNetworkDoesNotExist(id);
});

// Story: crud:ProviderNetwork:nondet:1:2
bthread("crud:ProviderNetwork:nondet:1:2", function () {
  let id = 261;
  createProviderNetwork(id);
  tryToAddExistingProviderNetwork(id);
  updateProviderNetwork(id);
  verifyProviderNetworkExists(id);
  deleteProviderNetwork(id);
  tryToDeleteANonExistingProviderNetwork(id);
  verifyProviderNetworkDoesNotExist(id);
});

// Story: crud:ProviderNetwork:nondet:negative:dup-add
bthread("crud:ProviderNetwork:nondet:negative:dup-add", function () {
  let id = 266;
  createProviderNetwork(id);
  verifyProviderNetworkExists(id);
  tryToAddExistingProviderNetwork(id);
  verifyProviderNetworkExists(id);
});

// Monitor: ProviderNetwork Addition Verification
bthread("monitor:ProviderNetwork:addition", function () {
  while (true) {
    let item = waitForAnyProviderNetworkAdded();
    block(matchDeletedProviderNetwork(item.id), function () {
      verifyProviderNetworkExists(item.id);
    });
  }
});

// Monitor: ProviderNetwork Deletion Verification
bthread("monitor:ProviderNetwork:deletion", function () {
  while (true) {
    let item = waitForAnyProviderNetworkDeleted();
    block(matchAddedProviderNetwork(item.id), function () {
      verifyProviderNetworkDoesNotExist(item.id);
    });
  }
});

// Story: crud:Provider:nondet:1:1
bthread("crud:Provider:nondet:1:1", function () {
  let id = 270;
  createProvider(id);
  waitForProviderAdded(id);
  tryToAddExistingProvider(id);
  verifyProviderExists(id);
  updateProvider(id);
  deleteProvider(id);
  tryToDeleteANonExistingProvider(id);
  verifyProviderDoesNotExist(id);
});

// Story: crud:Provider:nondet:1:2
bthread("crud:Provider:nondet:1:2", function () {
  let id = 271;
  createProvider(id);
  tryToAddExistingProvider(id);
  updateProvider(id);
  verifyProviderExists(id);
  deleteProvider(id);
  tryToDeleteANonExistingProvider(id);
  verifyProviderDoesNotExist(id);
});

// Story: crud:Provider:nondet:negative:dup-add
bthread("crud:Provider:nondet:negative:dup-add", function () {
  let id = 276;
  createProvider(id);
  verifyProviderExists(id);
  tryToAddExistingProvider(id);
  verifyProviderExists(id);
});

// Monitor: Provider Addition Verification
bthread("monitor:Provider:addition", function () {
  while (true) {
    let item = waitForAnyProviderAdded();
    block(matchDeletedProvider(item.id), function () {
      verifyProviderExists(item.id);
    });
  }
});

// Monitor: Provider Deletion Verification
bthread("monitor:Provider:deletion", function () {
  while (true) {
    let item = waitForAnyProviderDeleted();
    block(matchAddedProvider(item.id), function () {
      verifyProviderDoesNotExist(item.id);
    });
  }
});

// Story: crud:VirtualCircuitTermination:nondet:1:1
bthread("crud:VirtualCircuitTermination:nondet:1:1", function () {
  let id = 280;
  createVirtualCircuitTermination(id);
  waitForVirtualCircuitTerminationAdded(id);
  tryToAddExistingVirtualCircuitTermination(id);
  verifyVirtualCircuitTerminationExists(id);
  updateVirtualCircuitTermination(id);
  deleteVirtualCircuitTermination(id);
  tryToDeleteANonExistingVirtualCircuitTermination(id);
  verifyVirtualCircuitTerminationDoesNotExist(id);
});

// Story: crud:VirtualCircuitTermination:nondet:1:2
bthread("crud:VirtualCircuitTermination:nondet:1:2", function () {
  let id = 281;
  createVirtualCircuitTermination(id);
  tryToAddExistingVirtualCircuitTermination(id);
  updateVirtualCircuitTermination(id);
  verifyVirtualCircuitTerminationExists(id);
  deleteVirtualCircuitTermination(id);
  tryToDeleteANonExistingVirtualCircuitTermination(id);
  verifyVirtualCircuitTerminationDoesNotExist(id);
});

// Story: crud:VirtualCircuitTermination:nondet:negative:dup-add
bthread("crud:VirtualCircuitTermination:nondet:negative:dup-add", function () {
  let id = 286;
  createVirtualCircuitTermination(id);
  verifyVirtualCircuitTerminationExists(id);
  tryToAddExistingVirtualCircuitTermination(id);
  verifyVirtualCircuitTerminationExists(id);
});

// Monitor: VirtualCircuitTermination Addition Verification
bthread("monitor:VirtualCircuitTermination:addition", function () {
  while (true) {
    let item = waitForAnyVirtualCircuitTerminationAdded();
    block(matchDeletedVirtualCircuitTermination(item.id), function () {
      verifyVirtualCircuitTerminationExists(item.id);
    });
  }
});

// Monitor: VirtualCircuitTermination Deletion Verification
bthread("monitor:VirtualCircuitTermination:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualCircuitTerminationDeleted();
    block(matchAddedVirtualCircuitTermination(item.id), function () {
      verifyVirtualCircuitTerminationDoesNotExist(item.id);
    });
  }
});

// Story: crud:VirtualCircuitType:nondet:1:1
bthread("crud:VirtualCircuitType:nondet:1:1", function () {
  let color = "color_290";
  let description = "description_290";
  let id = 290;
  let name = "name_290";
  let slug = "slug_290";
  createVirtualCircuitType(color, description, id, name, slug);
  waitForVirtualCircuitTypeAdded(color, description, id, name, slug);
  tryToAddExistingVirtualCircuitType(color, description, id, name, slug);
  verifyVirtualCircuitTypeExists(color, description, id, name, slug);
  updateVirtualCircuitType(color, description, id, name, slug);
  deleteVirtualCircuitType(color, description, id, name, slug);
  tryToDeleteANonExistingVirtualCircuitType(color, description, id, name, slug);
  verifyVirtualCircuitTypeDoesNotExist(color, description, id, name, slug);
});

// Story: crud:VirtualCircuitType:nondet:1:2
bthread("crud:VirtualCircuitType:nondet:1:2", function () {
  let color = "color_291";
  let description = "description_291";
  let id = 291;
  let name = "name_291";
  let slug = "slug_291";
  createVirtualCircuitType(color, description, id, name, slug);
  tryToAddExistingVirtualCircuitType(color, description, id, name, slug);
  updateVirtualCircuitType(color, description, id, name, slug);
  verifyVirtualCircuitTypeExists(color, description, id, name, slug);
  deleteVirtualCircuitType(color, description, id, name, slug);
  tryToDeleteANonExistingVirtualCircuitType(color, description, id, name, slug);
  verifyVirtualCircuitTypeDoesNotExist(color, description, id, name, slug);
});

// Story: crud:VirtualCircuitType:nondet:negative:dup-add
bthread("crud:VirtualCircuitType:nondet:negative:dup-add", function () {
  let color = "color_296";
  let description = "description_296";
  let id = 296;
  let name = "name_296";
  let slug = "slug_296";
  createVirtualCircuitType(color, description, id, name, slug);
  verifyVirtualCircuitTypeExists(color, description, id, name, slug);
  tryToAddExistingVirtualCircuitType(color, description, id, name, slug);
  verifyVirtualCircuitTypeExists(color, description, id, name, slug);
});

// Monitor: VirtualCircuitType Addition Verification
bthread("monitor:VirtualCircuitType:addition", function () {
  while (true) {
    let item = waitForAnyVirtualCircuitTypeAdded();
    block(matchDeletedVirtualCircuitType(item.color, item.description, item.id, item.name, item.slug), function () {
      verifyVirtualCircuitTypeExists(item.color, item.description, item.id, item.name, item.slug);
    });
  }
});

// Monitor: VirtualCircuitType Deletion Verification
bthread("monitor:VirtualCircuitType:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualCircuitTypeDeleted();
    block(matchAddedVirtualCircuitType(item.color, item.description, item.id, item.name, item.slug), function () {
      verifyVirtualCircuitTypeDoesNotExist(item.color, item.description, item.id, item.name, item.slug);
    });
  }
});

// Story: crud:VirtualCircuit:nondet:1:1
bthread("crud:VirtualCircuit:nondet:1:1", function () {
  let cid = 300;
  let description = "description_300";
  let id = 300;
  let provider;
  let provider_account;
  let provider_network_id;
  let status = "status_300";
  let tenant = "tenant_300";
  let tenant_group = "tenant_group_300";
  let type = "type_300";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["provider_account"] = matchAnyProviderAdded();
  deps["provider_network_id"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id", "provider_account": "id", "provider_network_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  provider_account = captured["provider_account"];
  provider_network_id = captured["provider_network_id"];
  createVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  waitForVirtualCircuitAdded(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  tryToAddExistingVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  verifyVirtualCircuitExists(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  updateVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  deleteVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  tryToDeleteANonExistingVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  verifyVirtualCircuitDoesNotExist(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
});

// Story: crud:VirtualCircuit:nondet:1:2
bthread("crud:VirtualCircuit:nondet:1:2", function () {
  let cid = 301;
  let description = "description_301";
  let id = 301;
  let provider;
  let provider_account;
  let provider_network_id;
  let status = "status_301";
  let tenant = "tenant_301";
  let tenant_group = "tenant_group_301";
  let type = "type_301";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["provider_account"] = matchAnyProviderAdded();
  deps["provider_network_id"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id", "provider_account": "id", "provider_network_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  provider_account = captured["provider_account"];
  provider_network_id = captured["provider_network_id"];
  createVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  tryToAddExistingVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  updateVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  verifyVirtualCircuitExists(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  deleteVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  tryToDeleteANonExistingVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  verifyVirtualCircuitDoesNotExist(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
});

// Story: crud:VirtualCircuit:nondet:negative:dup-add
bthread("crud:VirtualCircuit:nondet:negative:dup-add", function () {
  let cid = 306;
  let description = "description_306";
  let id = 306;
  let provider;
  let provider_account;
  let provider_network_id;
  let status = "status_306";
  let tenant = "tenant_306";
  let tenant_group = "tenant_group_306";
  let type = "type_306";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["provider_account"] = matchAnyProviderAdded();
  deps["provider_network_id"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id", "provider_account": "id", "provider_network_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  provider_account = captured["provider_account"];
  provider_network_id = captured["provider_network_id"];
  createVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  verifyVirtualCircuitExists(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  tryToAddExistingVirtualCircuit(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
  verifyVirtualCircuitExists(cid, description, id, provider, provider_account, provider_network_id, status, tenant, tenant_group, type);
});

// Monitor: VirtualCircuit Addition Verification
bthread("monitor:VirtualCircuit:addition", function () {
  while (true) {
    let item = waitForAnyVirtualCircuitAdded();
    block(matchDeletedVirtualCircuit(item.cid, item.description, item.id, item.provider, item.provider_account, item.provider_network_id, item.status, item.tenant, item.tenant_group, item.type), function () {
      verifyVirtualCircuitExists(item.cid, item.description, item.id, item.provider, item.provider_account, item.provider_network_id, item.status, item.tenant, item.tenant_group, item.type);
    });
  }
});

// Monitor: VirtualCircuit Deletion Verification
bthread("monitor:VirtualCircuit:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualCircuitDeleted();
    block(matchAddedVirtualCircuit(item.cid, item.description, item.id, item.provider, item.provider_account, item.provider_network_id, item.status, item.tenant, item.tenant_group, item.type), function () {
      verifyVirtualCircuitDoesNotExist(item.cid, item.description, item.id, item.provider, item.provider_account, item.provider_network_id, item.status, item.tenant, item.tenant_group, item.type);
    });
  }
});

// Story: crud:DataSource:nondet:1:1
bthread("crud:DataSource:nondet:1:1", function () {
  let description = "description_350";
  let enabled = "enabled_350";
  let id = 350;
  let name = "name_350";
  let source_url = "source_url_350";
  let status = "status_350";
  let sync_interval = "sync_interval_350";
  let tag = "tag_350";
  let type = "type_350";
  createDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  waitForDataSourceAdded(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  tryToAddExistingDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  verifyDataSourceExists(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  updateDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  deleteDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  tryToDeleteANonExistingDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  verifyDataSourceDoesNotExist(description, enabled, id, name, source_url, status, sync_interval, tag, type);
});

// Story: crud:DataSource:nondet:1:2
bthread("crud:DataSource:nondet:1:2", function () {
  let description = "description_351";
  let enabled = "enabled_351";
  let id = 351;
  let name = "name_351";
  let source_url = "source_url_351";
  let status = "status_351";
  let sync_interval = "sync_interval_351";
  let tag = "tag_351";
  let type = "type_351";
  createDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  tryToAddExistingDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  updateDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  verifyDataSourceExists(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  deleteDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  tryToDeleteANonExistingDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  verifyDataSourceDoesNotExist(description, enabled, id, name, source_url, status, sync_interval, tag, type);
});

// Story: crud:DataSource:nondet:negative:dup-add
bthread("crud:DataSource:nondet:negative:dup-add", function () {
  let description = "description_356";
  let enabled = "enabled_356";
  let id = 356;
  let name = "name_356";
  let source_url = "source_url_356";
  let status = "status_356";
  let sync_interval = "sync_interval_356";
  let tag = "tag_356";
  let type = "type_356";
  createDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  verifyDataSourceExists(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  tryToAddExistingDataSource(description, enabled, id, name, source_url, status, sync_interval, tag, type);
  verifyDataSourceExists(description, enabled, id, name, source_url, status, sync_interval, tag, type);
});

// Monitor: DataSource Addition Verification
bthread("monitor:DataSource:addition", function () {
  while (true) {
    let item = waitForAnyDataSourceAdded();
    block(matchDeletedDataSource(item.description, item.enabled, item.id, item.name, item.source_url, item.status, item.sync_interval, item.tag, item.type), function () {
      verifyDataSourceExists(item.description, item.enabled, item.id, item.name, item.source_url, item.status, item.sync_interval, item.tag, item.type);
    });
  }
});

// Monitor: DataSource Deletion Verification
bthread("monitor:DataSource:deletion", function () {
  while (true) {
    let item = waitForAnyDataSourceDeleted();
    block(matchAddedDataSource(item.description, item.enabled, item.id, item.name, item.source_url, item.status, item.sync_interval, item.tag, item.type), function () {
      verifyDataSourceDoesNotExist(item.description, item.enabled, item.id, item.name, item.source_url, item.status, item.sync_interval, item.tag, item.type);
    });
  }
});

// Story: crud:CableTermination:nondet:1:1
bthread("crud:CableTermination:nondet:1:1", function () {
  let id = 390;
  createCableTermination(id);
  waitForCableTerminationAdded(id);
  tryToAddExistingCableTermination(id);
  verifyCableTerminationExists(id);
  updateCableTermination(id);
  deleteCableTermination(id);
  tryToDeleteANonExistingCableTermination(id);
  verifyCableTerminationDoesNotExist(id);
});

// Story: crud:CableTermination:nondet:1:2
bthread("crud:CableTermination:nondet:1:2", function () {
  let id = 391;
  createCableTermination(id);
  tryToAddExistingCableTermination(id);
  updateCableTermination(id);
  verifyCableTerminationExists(id);
  deleteCableTermination(id);
  tryToDeleteANonExistingCableTermination(id);
  verifyCableTerminationDoesNotExist(id);
});

// Story: crud:CableTermination:nondet:negative:dup-add
bthread("crud:CableTermination:nondet:negative:dup-add", function () {
  let id = 396;
  createCableTermination(id);
  verifyCableTerminationExists(id);
  tryToAddExistingCableTermination(id);
  verifyCableTerminationExists(id);
});

// Monitor: CableTermination Addition Verification
bthread("monitor:CableTermination:addition", function () {
  while (true) {
    let item = waitForAnyCableTerminationAdded();
    block(matchDeletedCableTermination(item.id), function () {
      verifyCableTerminationExists(item.id);
    });
  }
});

// Monitor: CableTermination Deletion Verification
bthread("monitor:CableTermination:deletion", function () {
  while (true) {
    let item = waitForAnyCableTerminationDeleted();
    block(matchAddedCableTermination(item.id), function () {
      verifyCableTerminationDoesNotExist(item.id);
    });
  }
});

// Story: crud:Cable:nondet:1:1
bthread("crud:Cable:nondet:1:1", function () {
  let id = 400;
  createCable(id);
  waitForCableAdded(id);
  tryToAddExistingCable(id);
  verifyCableExists(id);
  updateCable(id);
  deleteCable(id);
  tryToDeleteANonExistingCable(id);
  verifyCableDoesNotExist(id);
});

// Story: crud:Cable:nondet:1:2
bthread("crud:Cable:nondet:1:2", function () {
  let id = 401;
  createCable(id);
  tryToAddExistingCable(id);
  updateCable(id);
  verifyCableExists(id);
  deleteCable(id);
  tryToDeleteANonExistingCable(id);
  verifyCableDoesNotExist(id);
});

// Story: crud:Cable:nondet:negative:dup-add
bthread("crud:Cable:nondet:negative:dup-add", function () {
  let id = 406;
  createCable(id);
  verifyCableExists(id);
  tryToAddExistingCable(id);
  verifyCableExists(id);
});

// Monitor: Cable Addition Verification
bthread("monitor:Cable:addition", function () {
  while (true) {
    let item = waitForAnyCableAdded();
    block(matchDeletedCable(item.id), function () {
      verifyCableExists(item.id);
    });
  }
});

// Monitor: Cable Deletion Verification
bthread("monitor:Cable:deletion", function () {
  while (true) {
    let item = waitForAnyCableDeleted();
    block(matchAddedCable(item.id), function () {
      verifyCableDoesNotExist(item.id);
    });
  }
});

// Story: crud:ConsolePortTemplate:nondet:1:1
bthread("crud:ConsolePortTemplate:nondet:1:1", function () {
  let id = 410;
  createConsolePortTemplate(id);
  waitForConsolePortTemplateAdded(id);
  tryToAddExistingConsolePortTemplate(id);
  verifyConsolePortTemplateExists(id);
  updateConsolePortTemplate(id);
  deleteConsolePortTemplate(id);
  tryToDeleteANonExistingConsolePortTemplate(id);
  verifyConsolePortTemplateDoesNotExist(id);
});

// Story: crud:ConsolePortTemplate:nondet:1:2
bthread("crud:ConsolePortTemplate:nondet:1:2", function () {
  let id = 411;
  createConsolePortTemplate(id);
  tryToAddExistingConsolePortTemplate(id);
  updateConsolePortTemplate(id);
  verifyConsolePortTemplateExists(id);
  deleteConsolePortTemplate(id);
  tryToDeleteANonExistingConsolePortTemplate(id);
  verifyConsolePortTemplateDoesNotExist(id);
});

// Story: crud:ConsolePortTemplate:nondet:negative:dup-add
bthread("crud:ConsolePortTemplate:nondet:negative:dup-add", function () {
  let id = 416;
  createConsolePortTemplate(id);
  verifyConsolePortTemplateExists(id);
  tryToAddExistingConsolePortTemplate(id);
  verifyConsolePortTemplateExists(id);
});

// Monitor: ConsolePortTemplate Addition Verification
bthread("monitor:ConsolePortTemplate:addition", function () {
  while (true) {
    let item = waitForAnyConsolePortTemplateAdded();
    block(matchDeletedConsolePortTemplate(item.id), function () {
      verifyConsolePortTemplateExists(item.id);
    });
  }
});

// Monitor: ConsolePortTemplate Deletion Verification
bthread("monitor:ConsolePortTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyConsolePortTemplateDeleted();
    block(matchAddedConsolePortTemplate(item.id), function () {
      verifyConsolePortTemplateDoesNotExist(item.id);
    });
  }
});

// Story: crud:ConsolePort:nondet:1:1
bthread("crud:ConsolePort:nondet:1:1", function () {
  let id = 420;
  createConsolePort(id);
  waitForConsolePortAdded(id);
  tryToAddExistingConsolePort(id);
  verifyConsolePortExists(id);
  updateConsolePort(id);
  deleteConsolePort(id);
  tryToDeleteANonExistingConsolePort(id);
  verifyConsolePortDoesNotExist(id);
});

// Story: crud:ConsolePort:nondet:1:2
bthread("crud:ConsolePort:nondet:1:2", function () {
  let id = 421;
  createConsolePort(id);
  tryToAddExistingConsolePort(id);
  updateConsolePort(id);
  verifyConsolePortExists(id);
  deleteConsolePort(id);
  tryToDeleteANonExistingConsolePort(id);
  verifyConsolePortDoesNotExist(id);
});

// Story: crud:ConsolePort:nondet:negative:dup-add
bthread("crud:ConsolePort:nondet:negative:dup-add", function () {
  let id = 426;
  createConsolePort(id);
  verifyConsolePortExists(id);
  tryToAddExistingConsolePort(id);
  verifyConsolePortExists(id);
});

// Monitor: ConsolePort Addition Verification
bthread("monitor:ConsolePort:addition", function () {
  while (true) {
    let item = waitForAnyConsolePortAdded();
    block(matchDeletedConsolePort(item.id), function () {
      verifyConsolePortExists(item.id);
    });
  }
});

// Monitor: ConsolePort Deletion Verification
bthread("monitor:ConsolePort:deletion", function () {
  while (true) {
    let item = waitForAnyConsolePortDeleted();
    block(matchAddedConsolePort(item.id), function () {
      verifyConsolePortDoesNotExist(item.id);
    });
  }
});

// Story: crud:ConsoleServerPortTemplate:nondet:1:1
bthread("crud:ConsoleServerPortTemplate:nondet:1:1", function () {
  let id = 430;
  createConsoleServerPortTemplate(id);
  waitForConsoleServerPortTemplateAdded(id);
  tryToAddExistingConsoleServerPortTemplate(id);
  verifyConsoleServerPortTemplateExists(id);
  updateConsoleServerPortTemplate(id);
  deleteConsoleServerPortTemplate(id);
  tryToDeleteANonExistingConsoleServerPortTemplate(id);
  verifyConsoleServerPortTemplateDoesNotExist(id);
});

// Story: crud:ConsoleServerPortTemplate:nondet:1:2
bthread("crud:ConsoleServerPortTemplate:nondet:1:2", function () {
  let id = 431;
  createConsoleServerPortTemplate(id);
  tryToAddExistingConsoleServerPortTemplate(id);
  updateConsoleServerPortTemplate(id);
  verifyConsoleServerPortTemplateExists(id);
  deleteConsoleServerPortTemplate(id);
  tryToDeleteANonExistingConsoleServerPortTemplate(id);
  verifyConsoleServerPortTemplateDoesNotExist(id);
});

// Story: crud:ConsoleServerPortTemplate:nondet:negative:dup-add
bthread("crud:ConsoleServerPortTemplate:nondet:negative:dup-add", function () {
  let id = 436;
  createConsoleServerPortTemplate(id);
  verifyConsoleServerPortTemplateExists(id);
  tryToAddExistingConsoleServerPortTemplate(id);
  verifyConsoleServerPortTemplateExists(id);
});

// Monitor: ConsoleServerPortTemplate Addition Verification
bthread("monitor:ConsoleServerPortTemplate:addition", function () {
  while (true) {
    let item = waitForAnyConsoleServerPortTemplateAdded();
    block(matchDeletedConsoleServerPortTemplate(item.id), function () {
      verifyConsoleServerPortTemplateExists(item.id);
    });
  }
});

// Monitor: ConsoleServerPortTemplate Deletion Verification
bthread("monitor:ConsoleServerPortTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyConsoleServerPortTemplateDeleted();
    block(matchAddedConsoleServerPortTemplate(item.id), function () {
      verifyConsoleServerPortTemplateDoesNotExist(item.id);
    });
  }
});

// Story: crud:ConsoleServerPort:nondet:1:1
bthread("crud:ConsoleServerPort:nondet:1:1", function () {
  let id = 440;
  createConsoleServerPort(id);
  waitForConsoleServerPortAdded(id);
  tryToAddExistingConsoleServerPort(id);
  verifyConsoleServerPortExists(id);
  updateConsoleServerPort(id);
  deleteConsoleServerPort(id);
  tryToDeleteANonExistingConsoleServerPort(id);
  verifyConsoleServerPortDoesNotExist(id);
});

// Story: crud:ConsoleServerPort:nondet:1:2
bthread("crud:ConsoleServerPort:nondet:1:2", function () {
  let id = 441;
  createConsoleServerPort(id);
  tryToAddExistingConsoleServerPort(id);
  updateConsoleServerPort(id);
  verifyConsoleServerPortExists(id);
  deleteConsoleServerPort(id);
  tryToDeleteANonExistingConsoleServerPort(id);
  verifyConsoleServerPortDoesNotExist(id);
});

// Story: crud:ConsoleServerPort:nondet:negative:dup-add
bthread("crud:ConsoleServerPort:nondet:negative:dup-add", function () {
  let id = 446;
  createConsoleServerPort(id);
  verifyConsoleServerPortExists(id);
  tryToAddExistingConsoleServerPort(id);
  verifyConsoleServerPortExists(id);
});

// Monitor: ConsoleServerPort Addition Verification
bthread("monitor:ConsoleServerPort:addition", function () {
  while (true) {
    let item = waitForAnyConsoleServerPortAdded();
    block(matchDeletedConsoleServerPort(item.id), function () {
      verifyConsoleServerPortExists(item.id);
    });
  }
});

// Monitor: ConsoleServerPort Deletion Verification
bthread("monitor:ConsoleServerPort:deletion", function () {
  while (true) {
    let item = waitForAnyConsoleServerPortDeleted();
    block(matchAddedConsoleServerPort(item.id), function () {
      verifyConsoleServerPortDoesNotExist(item.id);
    });
  }
});

// Story: crud:DeviceBayTemplate:nondet:1:1
bthread("crud:DeviceBayTemplate:nondet:1:1", function () {
  let id = 450;
  createDeviceBayTemplate(id);
  waitForDeviceBayTemplateAdded(id);
  tryToAddExistingDeviceBayTemplate(id);
  verifyDeviceBayTemplateExists(id);
  updateDeviceBayTemplate(id);
  deleteDeviceBayTemplate(id);
  tryToDeleteANonExistingDeviceBayTemplate(id);
  verifyDeviceBayTemplateDoesNotExist(id);
});

// Story: crud:DeviceBayTemplate:nondet:1:2
bthread("crud:DeviceBayTemplate:nondet:1:2", function () {
  let id = 451;
  createDeviceBayTemplate(id);
  tryToAddExistingDeviceBayTemplate(id);
  updateDeviceBayTemplate(id);
  verifyDeviceBayTemplateExists(id);
  deleteDeviceBayTemplate(id);
  tryToDeleteANonExistingDeviceBayTemplate(id);
  verifyDeviceBayTemplateDoesNotExist(id);
});

// Story: crud:DeviceBayTemplate:nondet:negative:dup-add
bthread("crud:DeviceBayTemplate:nondet:negative:dup-add", function () {
  let id = 456;
  createDeviceBayTemplate(id);
  verifyDeviceBayTemplateExists(id);
  tryToAddExistingDeviceBayTemplate(id);
  verifyDeviceBayTemplateExists(id);
});

// Monitor: DeviceBayTemplate Addition Verification
bthread("monitor:DeviceBayTemplate:addition", function () {
  while (true) {
    let item = waitForAnyDeviceBayTemplateAdded();
    block(matchDeletedDeviceBayTemplate(item.id), function () {
      verifyDeviceBayTemplateExists(item.id);
    });
  }
});

// Monitor: DeviceBayTemplate Deletion Verification
bthread("monitor:DeviceBayTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyDeviceBayTemplateDeleted();
    block(matchAddedDeviceBayTemplate(item.id), function () {
      verifyDeviceBayTemplateDoesNotExist(item.id);
    });
  }
});

// Story: crud:DeviceBay:nondet:1:1
bthread("crud:DeviceBay:nondet:1:1", function () {
  let id = 460;
  createDeviceBay(id);
  waitForDeviceBayAdded(id);
  tryToAddExistingDeviceBay(id);
  verifyDeviceBayExists(id);
  updateDeviceBay(id);
  deleteDeviceBay(id);
  tryToDeleteANonExistingDeviceBay(id);
  verifyDeviceBayDoesNotExist(id);
});

// Story: crud:DeviceBay:nondet:1:2
bthread("crud:DeviceBay:nondet:1:2", function () {
  let id = 461;
  createDeviceBay(id);
  tryToAddExistingDeviceBay(id);
  updateDeviceBay(id);
  verifyDeviceBayExists(id);
  deleteDeviceBay(id);
  tryToDeleteANonExistingDeviceBay(id);
  verifyDeviceBayDoesNotExist(id);
});

// Story: crud:DeviceBay:nondet:negative:dup-add
bthread("crud:DeviceBay:nondet:negative:dup-add", function () {
  let id = 466;
  createDeviceBay(id);
  verifyDeviceBayExists(id);
  tryToAddExistingDeviceBay(id);
  verifyDeviceBayExists(id);
});

// Monitor: DeviceBay Addition Verification
bthread("monitor:DeviceBay:addition", function () {
  while (true) {
    let item = waitForAnyDeviceBayAdded();
    block(matchDeletedDeviceBay(item.id), function () {
      verifyDeviceBayExists(item.id);
    });
  }
});

// Monitor: DeviceBay Deletion Verification
bthread("monitor:DeviceBay:deletion", function () {
  while (true) {
    let item = waitForAnyDeviceBayDeleted();
    block(matchAddedDeviceBay(item.id), function () {
      verifyDeviceBayDoesNotExist(item.id);
    });
  }
});

// Story: crud:DeviceRole:nondet:1:1
bthread("crud:DeviceRole:nondet:1:1", function () {
  let id = 470;
  let name = "name_470";
  let slug = "slug_470";
  createDeviceRole(id, name, slug);
  waitForDeviceRoleAdded(id, name, slug);
  tryToAddExistingDeviceRole(id, name, slug);
  verifyDeviceRoleExists(id, name, slug);
  updateDeviceRole(id, name, slug);
  deleteDeviceRole(id, name, slug);
  tryToDeleteANonExistingDeviceRole(id, name, slug);
  verifyDeviceRoleDoesNotExist(id, name, slug);
});

// Story: crud:DeviceRole:nondet:1:2
bthread("crud:DeviceRole:nondet:1:2", function () {
  let id = 471;
  let name = "name_471";
  let slug = "slug_471";
  createDeviceRole(id, name, slug);
  tryToAddExistingDeviceRole(id, name, slug);
  updateDeviceRole(id, name, slug);
  verifyDeviceRoleExists(id, name, slug);
  deleteDeviceRole(id, name, slug);
  tryToDeleteANonExistingDeviceRole(id, name, slug);
  verifyDeviceRoleDoesNotExist(id, name, slug);
});

// Story: crud:DeviceRole:nondet:negative:dup-add
bthread("crud:DeviceRole:nondet:negative:dup-add", function () {
  let id = 476;
  let name = "name_476";
  let slug = "slug_476";
  createDeviceRole(id, name, slug);
  verifyDeviceRoleExists(id, name, slug);
  tryToAddExistingDeviceRole(id, name, slug);
  verifyDeviceRoleExists(id, name, slug);
});

// Monitor: DeviceRole Addition Verification
bthread("monitor:DeviceRole:addition", function () {
  while (true) {
    let item = waitForAnyDeviceRoleAdded();
    block(matchDeletedDeviceRole(item.id, item.name, item.slug), function () {
      verifyDeviceRoleExists(item.id, item.name, item.slug);
    });
  }
});

// Monitor: DeviceRole Deletion Verification
bthread("monitor:DeviceRole:deletion", function () {
  while (true) {
    let item = waitForAnyDeviceRoleDeleted();
    block(matchAddedDeviceRole(item.id, item.name, item.slug), function () {
      verifyDeviceRoleDoesNotExist(item.id, item.name, item.slug);
    });
  }
});

// Story: crud:DeviceType:nondet:1:1
bthread("crud:DeviceType:nondet:1:1", function () {
  let id = 480;
  createDeviceType(id);
  waitForDeviceTypeAdded(id);
  tryToAddExistingDeviceType(id);
  verifyDeviceTypeExists(id);
  updateDeviceType(id);
  deleteDeviceType(id);
  tryToDeleteANonExistingDeviceType(id);
  verifyDeviceTypeDoesNotExist(id);
});

// Story: crud:DeviceType:nondet:1:2
bthread("crud:DeviceType:nondet:1:2", function () {
  let id = 481;
  createDeviceType(id);
  tryToAddExistingDeviceType(id);
  updateDeviceType(id);
  verifyDeviceTypeExists(id);
  deleteDeviceType(id);
  tryToDeleteANonExistingDeviceType(id);
  verifyDeviceTypeDoesNotExist(id);
});

// Story: crud:DeviceType:nondet:negative:dup-add
bthread("crud:DeviceType:nondet:negative:dup-add", function () {
  let id = 486;
  createDeviceType(id);
  verifyDeviceTypeExists(id);
  tryToAddExistingDeviceType(id);
  verifyDeviceTypeExists(id);
});

// Monitor: DeviceType Addition Verification
bthread("monitor:DeviceType:addition", function () {
  while (true) {
    let item = waitForAnyDeviceTypeAdded();
    block(matchDeletedDeviceType(item.id), function () {
      verifyDeviceTypeExists(item.id);
    });
  }
});

// Monitor: DeviceType Deletion Verification
bthread("monitor:DeviceType:deletion", function () {
  while (true) {
    let item = waitForAnyDeviceTypeDeleted();
    block(matchAddedDeviceType(item.id), function () {
      verifyDeviceTypeDoesNotExist(item.id);
    });
  }
});

// Story: crud:Device:nondet:1:1
bthread("crud:Device:nondet:1:1", function () {
  let id = 490;
  createDevice(id);
  waitForDeviceAdded(id);
  tryToAddExistingDevice(id);
  verifyDeviceExists(id);
  updateDevice(id);
  deleteDevice(id);
  tryToDeleteANonExistingDevice(id);
  verifyDeviceDoesNotExist(id);
});

// Story: crud:Device:nondet:1:2
bthread("crud:Device:nondet:1:2", function () {
  let id = 491;
  createDevice(id);
  tryToAddExistingDevice(id);
  updateDevice(id);
  verifyDeviceExists(id);
  deleteDevice(id);
  tryToDeleteANonExistingDevice(id);
  verifyDeviceDoesNotExist(id);
});

// Story: crud:Device:nondet:negative:dup-add
bthread("crud:Device:nondet:negative:dup-add", function () {
  let id = 496;
  createDevice(id);
  verifyDeviceExists(id);
  tryToAddExistingDevice(id);
  verifyDeviceExists(id);
});

// Monitor: Device Addition Verification
bthread("monitor:Device:addition", function () {
  while (true) {
    let item = waitForAnyDeviceAdded();
    block(matchDeletedDevice(item.id), function () {
      verifyDeviceExists(item.id);
    });
  }
});

// Monitor: Device Deletion Verification
bthread("monitor:Device:deletion", function () {
  while (true) {
    let item = waitForAnyDeviceDeleted();
    block(matchAddedDevice(item.id), function () {
      verifyDeviceDoesNotExist(item.id);
    });
  }
});

// Story: crud:FrontPortTemplate:nondet:1:1
bthread("crud:FrontPortTemplate:nondet:1:1", function () {
  let id = 510;
  createFrontPortTemplate(id);
  waitForFrontPortTemplateAdded(id);
  tryToAddExistingFrontPortTemplate(id);
  verifyFrontPortTemplateExists(id);
  updateFrontPortTemplate(id);
  deleteFrontPortTemplate(id);
  tryToDeleteANonExistingFrontPortTemplate(id);
  verifyFrontPortTemplateDoesNotExist(id);
});

// Story: crud:FrontPortTemplate:nondet:1:2
bthread("crud:FrontPortTemplate:nondet:1:2", function () {
  let id = 511;
  createFrontPortTemplate(id);
  tryToAddExistingFrontPortTemplate(id);
  updateFrontPortTemplate(id);
  verifyFrontPortTemplateExists(id);
  deleteFrontPortTemplate(id);
  tryToDeleteANonExistingFrontPortTemplate(id);
  verifyFrontPortTemplateDoesNotExist(id);
});

// Story: crud:FrontPortTemplate:nondet:negative:dup-add
bthread("crud:FrontPortTemplate:nondet:negative:dup-add", function () {
  let id = 516;
  createFrontPortTemplate(id);
  verifyFrontPortTemplateExists(id);
  tryToAddExistingFrontPortTemplate(id);
  verifyFrontPortTemplateExists(id);
});

// Monitor: FrontPortTemplate Addition Verification
bthread("monitor:FrontPortTemplate:addition", function () {
  while (true) {
    let item = waitForAnyFrontPortTemplateAdded();
    block(matchDeletedFrontPortTemplate(item.id), function () {
      verifyFrontPortTemplateExists(item.id);
    });
  }
});

// Monitor: FrontPortTemplate Deletion Verification
bthread("monitor:FrontPortTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyFrontPortTemplateDeleted();
    block(matchAddedFrontPortTemplate(item.id), function () {
      verifyFrontPortTemplateDoesNotExist(item.id);
    });
  }
});

// Story: crud:FrontPort:nondet:1:1
bthread("crud:FrontPort:nondet:1:1", function () {
  let id = 520;
  createFrontPort(id);
  waitForFrontPortAdded(id);
  tryToAddExistingFrontPort(id);
  verifyFrontPortExists(id);
  updateFrontPort(id);
  deleteFrontPort(id);
  tryToDeleteANonExistingFrontPort(id);
  verifyFrontPortDoesNotExist(id);
});

// Story: crud:FrontPort:nondet:1:2
bthread("crud:FrontPort:nondet:1:2", function () {
  let id = 521;
  createFrontPort(id);
  tryToAddExistingFrontPort(id);
  updateFrontPort(id);
  verifyFrontPortExists(id);
  deleteFrontPort(id);
  tryToDeleteANonExistingFrontPort(id);
  verifyFrontPortDoesNotExist(id);
});

// Story: crud:FrontPort:nondet:negative:dup-add
bthread("crud:FrontPort:nondet:negative:dup-add", function () {
  let id = 526;
  createFrontPort(id);
  verifyFrontPortExists(id);
  tryToAddExistingFrontPort(id);
  verifyFrontPortExists(id);
});

// Monitor: FrontPort Addition Verification
bthread("monitor:FrontPort:addition", function () {
  while (true) {
    let item = waitForAnyFrontPortAdded();
    block(matchDeletedFrontPort(item.id), function () {
      verifyFrontPortExists(item.id);
    });
  }
});

// Monitor: FrontPort Deletion Verification
bthread("monitor:FrontPort:deletion", function () {
  while (true) {
    let item = waitForAnyFrontPortDeleted();
    block(matchAddedFrontPort(item.id), function () {
      verifyFrontPortDoesNotExist(item.id);
    });
  }
});

// Story: crud:InterfaceTemplate:nondet:1:1
bthread("crud:InterfaceTemplate:nondet:1:1", function () {
  let created_by_request = "created_by_request_540";
  let description = "description_540";
  let device_type_id;
  let enabled = "enabled_540";
  let id = 540;
  let mgmt_only = "mgmt_only_540";
  let modified_by_request = "modified_by_request_540";
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
  createInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  waitForInterfaceTemplateAdded(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  tryToAddExistingInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  verifyInterfaceTemplateExists(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  updateInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  deleteInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  tryToDeleteANonExistingInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  verifyInterfaceTemplateDoesNotExist(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
});

// Story: crud:InterfaceTemplate:nondet:1:2
bthread("crud:InterfaceTemplate:nondet:1:2", function () {
  let created_by_request = "created_by_request_541";
  let description = "description_541";
  let device_type_id;
  let enabled = "enabled_541";
  let id = 541;
  let mgmt_only = "mgmt_only_541";
  let modified_by_request = "modified_by_request_541";
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
  createInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  tryToAddExistingInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  updateInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  verifyInterfaceTemplateExists(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  deleteInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  tryToDeleteANonExistingInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  verifyInterfaceTemplateDoesNotExist(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
});

// Story: crud:InterfaceTemplate:nondet:negative:dup-add
bthread("crud:InterfaceTemplate:nondet:negative:dup-add", function () {
  let created_by_request = "created_by_request_546";
  let description = "description_546";
  let device_type_id;
  let enabled = "enabled_546";
  let id = 546;
  let mgmt_only = "mgmt_only_546";
  let modified_by_request = "modified_by_request_546";
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
  createInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  verifyInterfaceTemplateExists(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  tryToAddExistingInterfaceTemplate(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
  verifyInterfaceTemplateExists(created_by_request, description, device_type_id, enabled, id, mgmt_only, modified_by_request, module_type_id, name, poe_mode, poe_type, rf_role, type, updated_by_request);
});

// Monitor: InterfaceTemplate Addition Verification
bthread("monitor:InterfaceTemplate:addition", function () {
  while (true) {
    let item = waitForAnyInterfaceTemplateAdded();
    block(matchDeletedInterfaceTemplate(item.created_by_request, item.description, item.device_type_id, item.enabled, item.id, item.mgmt_only, item.modified_by_request, item.module_type_id, item.name, item.poe_mode, item.poe_type, item.rf_role, item.type, item.updated_by_request), function () {
      verifyInterfaceTemplateExists(item.created_by_request, item.description, item.device_type_id, item.enabled, item.id, item.mgmt_only, item.modified_by_request, item.module_type_id, item.name, item.poe_mode, item.poe_type, item.rf_role, item.type, item.updated_by_request);
    });
  }
});

// Monitor: InterfaceTemplate Deletion Verification
bthread("monitor:InterfaceTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyInterfaceTemplateDeleted();
    block(matchAddedInterfaceTemplate(item.created_by_request, item.description, item.device_type_id, item.enabled, item.id, item.mgmt_only, item.modified_by_request, item.module_type_id, item.name, item.poe_mode, item.poe_type, item.rf_role, item.type, item.updated_by_request), function () {
      verifyInterfaceTemplateDoesNotExist(item.created_by_request, item.description, item.device_type_id, item.enabled, item.id, item.mgmt_only, item.modified_by_request, item.module_type_id, item.name, item.poe_mode, item.poe_type, item.rf_role, item.type, item.updated_by_request);
    });
  }
});

// Story: crud:Interface:nondet:1:1
bthread("crud:Interface:nondet:1:1", function () {
  let id = 550;
  createInterface(id);
  waitForInterfaceAdded(id);
  tryToAddExistingInterface(id);
  verifyInterfaceExists(id);
  updateInterface(id);
  deleteInterface(id);
  tryToDeleteANonExistingInterface(id);
  verifyInterfaceDoesNotExist(id);
});

// Story: crud:Interface:nondet:1:2
bthread("crud:Interface:nondet:1:2", function () {
  let id = 551;
  createInterface(id);
  tryToAddExistingInterface(id);
  updateInterface(id);
  verifyInterfaceExists(id);
  deleteInterface(id);
  tryToDeleteANonExistingInterface(id);
  verifyInterfaceDoesNotExist(id);
});

// Story: crud:Interface:nondet:negative:dup-add
bthread("crud:Interface:nondet:negative:dup-add", function () {
  let id = 556;
  createInterface(id);
  verifyInterfaceExists(id);
  tryToAddExistingInterface(id);
  verifyInterfaceExists(id);
});

// Monitor: Interface Addition Verification
bthread("monitor:Interface:addition", function () {
  while (true) {
    let item = waitForAnyInterfaceAdded();
    block(matchDeletedInterface(item.id), function () {
      verifyInterfaceExists(item.id);
    });
  }
});

// Monitor: Interface Deletion Verification
bthread("monitor:Interface:deletion", function () {
  while (true) {
    let item = waitForAnyInterfaceDeleted();
    block(matchAddedInterface(item.id), function () {
      verifyInterfaceDoesNotExist(item.id);
    });
  }
});

// Story: crud:InventoryItemRole:nondet:1:1
bthread("crud:InventoryItemRole:nondet:1:1", function () {
  let color = "color_560";
  let created_by_request = "created_by_request_560";
  let description = "description_560";
  let id = 560;
  let modified_by_request = "modified_by_request_560";
  let name = "name_560";
  let updated_by_request = "updated_by_request_560";
  createInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  waitForInventoryItemRoleAdded(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  tryToAddExistingInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  verifyInventoryItemRoleExists(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  updateInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  deleteInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  tryToDeleteANonExistingInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  verifyInventoryItemRoleDoesNotExist(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
});

// Story: crud:InventoryItemRole:nondet:1:2
bthread("crud:InventoryItemRole:nondet:1:2", function () {
  let color = "color_561";
  let created_by_request = "created_by_request_561";
  let description = "description_561";
  let id = 561;
  let modified_by_request = "modified_by_request_561";
  let name = "name_561";
  let updated_by_request = "updated_by_request_561";
  createInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  tryToAddExistingInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  updateInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  verifyInventoryItemRoleExists(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  deleteInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  tryToDeleteANonExistingInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  verifyInventoryItemRoleDoesNotExist(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
});

// Story: crud:InventoryItemRole:nondet:negative:dup-add
bthread("crud:InventoryItemRole:nondet:negative:dup-add", function () {
  let color = "color_566";
  let created_by_request = "created_by_request_566";
  let description = "description_566";
  let id = 566;
  let modified_by_request = "modified_by_request_566";
  let name = "name_566";
  let updated_by_request = "updated_by_request_566";
  createInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  verifyInventoryItemRoleExists(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  tryToAddExistingInventoryItemRole(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
  verifyInventoryItemRoleExists(color, created_by_request, description, id, modified_by_request, name, updated_by_request);
});

// Monitor: InventoryItemRole Addition Verification
bthread("monitor:InventoryItemRole:addition", function () {
  while (true) {
    let item = waitForAnyInventoryItemRoleAdded();
    block(matchDeletedInventoryItemRole(item.color, item.created_by_request, item.description, item.id, item.modified_by_request, item.name, item.updated_by_request), function () {
      verifyInventoryItemRoleExists(item.color, item.created_by_request, item.description, item.id, item.modified_by_request, item.name, item.updated_by_request);
    });
  }
});

// Monitor: InventoryItemRole Deletion Verification
bthread("monitor:InventoryItemRole:deletion", function () {
  while (true) {
    let item = waitForAnyInventoryItemRoleDeleted();
    block(matchAddedInventoryItemRole(item.color, item.created_by_request, item.description, item.id, item.modified_by_request, item.name, item.updated_by_request), function () {
      verifyInventoryItemRoleDoesNotExist(item.color, item.created_by_request, item.description, item.id, item.modified_by_request, item.name, item.updated_by_request);
    });
  }
});

// Story: crud:InventoryItemTemplate:nondet:1:1
bthread("crud:InventoryItemTemplate:nondet:1:1", function () {
  let component_id = 570;
  let component_type = "component_type_570";
  let created_by_request = "created_by_request_570";
  let description = "description_570";
  let id = 570;
  let manufacturer_id;
  let modified_by_request = "modified_by_request_570";
  let name = "name_570";
  let parent_id = 570;
  let part_id = 570;
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
  createInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  waitForInventoryItemTemplateAdded(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  tryToAddExistingInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  verifyInventoryItemTemplateExists(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  updateInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  deleteInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  tryToDeleteANonExistingInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  verifyInventoryItemTemplateDoesNotExist(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
});

// Story: crud:InventoryItemTemplate:nondet:1:2
bthread("crud:InventoryItemTemplate:nondet:1:2", function () {
  let component_id = 571;
  let component_type = "component_type_571";
  let created_by_request = "created_by_request_571";
  let description = "description_571";
  let id = 571;
  let manufacturer_id;
  let modified_by_request = "modified_by_request_571";
  let name = "name_571";
  let parent_id = 571;
  let part_id = 571;
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
  createInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  tryToAddExistingInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  updateInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  verifyInventoryItemTemplateExists(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  deleteInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  tryToDeleteANonExistingInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  verifyInventoryItemTemplateDoesNotExist(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
});

// Story: crud:InventoryItemTemplate:nondet:negative:dup-add
bthread("crud:InventoryItemTemplate:nondet:negative:dup-add", function () {
  let component_id = 576;
  let component_type = "component_type_576";
  let created_by_request = "created_by_request_576";
  let description = "description_576";
  let id = 576;
  let manufacturer_id;
  let modified_by_request = "modified_by_request_576";
  let name = "name_576";
  let parent_id = 576;
  let part_id = 576;
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
  createInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  verifyInventoryItemTemplateExists(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  tryToAddExistingInventoryItemTemplate(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
  verifyInventoryItemTemplateExists(component_id, component_type, created_by_request, description, id, manufacturer_id, modified_by_request, name, parent_id, part_id, role_id, updated_by_request);
});

// Monitor: InventoryItemTemplate Addition Verification
bthread("monitor:InventoryItemTemplate:addition", function () {
  while (true) {
    let item = waitForAnyInventoryItemTemplateAdded();
    block(matchDeletedInventoryItemTemplate(item.component_id, item.component_type, item.created_by_request, item.description, item.id, item.manufacturer_id, item.modified_by_request, item.name, item.parent_id, item.part_id, item.role_id, item.updated_by_request), function () {
      verifyInventoryItemTemplateExists(item.component_id, item.component_type, item.created_by_request, item.description, item.id, item.manufacturer_id, item.modified_by_request, item.name, item.parent_id, item.part_id, item.role_id, item.updated_by_request);
    });
  }
});

// Monitor: InventoryItemTemplate Deletion Verification
bthread("monitor:InventoryItemTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyInventoryItemTemplateDeleted();
    block(matchAddedInventoryItemTemplate(item.component_id, item.component_type, item.created_by_request, item.description, item.id, item.manufacturer_id, item.modified_by_request, item.name, item.parent_id, item.part_id, item.role_id, item.updated_by_request), function () {
      verifyInventoryItemTemplateDoesNotExist(item.component_id, item.component_type, item.created_by_request, item.description, item.id, item.manufacturer_id, item.modified_by_request, item.name, item.parent_id, item.part_id, item.role_id, item.updated_by_request);
    });
  }
});

// Story: crud:InventoryItem:nondet:1:1
bthread("crud:InventoryItem:nondet:1:1", function () {
  let id = 580;
  createInventoryItem(id);
  waitForInventoryItemAdded(id);
  tryToAddExistingInventoryItem(id);
  verifyInventoryItemExists(id);
  updateInventoryItem(id);
  deleteInventoryItem(id);
  tryToDeleteANonExistingInventoryItem(id);
  verifyInventoryItemDoesNotExist(id);
});

// Story: crud:InventoryItem:nondet:1:2
bthread("crud:InventoryItem:nondet:1:2", function () {
  let id = 581;
  createInventoryItem(id);
  tryToAddExistingInventoryItem(id);
  updateInventoryItem(id);
  verifyInventoryItemExists(id);
  deleteInventoryItem(id);
  tryToDeleteANonExistingInventoryItem(id);
  verifyInventoryItemDoesNotExist(id);
});

// Story: crud:InventoryItem:nondet:negative:dup-add
bthread("crud:InventoryItem:nondet:negative:dup-add", function () {
  let id = 586;
  createInventoryItem(id);
  verifyInventoryItemExists(id);
  tryToAddExistingInventoryItem(id);
  verifyInventoryItemExists(id);
});

// Monitor: InventoryItem Addition Verification
bthread("monitor:InventoryItem:addition", function () {
  while (true) {
    let item = waitForAnyInventoryItemAdded();
    block(matchDeletedInventoryItem(item.id), function () {
      verifyInventoryItemExists(item.id);
    });
  }
});

// Monitor: InventoryItem Deletion Verification
bthread("monitor:InventoryItem:deletion", function () {
  while (true) {
    let item = waitForAnyInventoryItemDeleted();
    block(matchAddedInventoryItem(item.id), function () {
      verifyInventoryItemDoesNotExist(item.id);
    });
  }
});

// Story: crud:Location:nondet:1:1
bthread("crud:Location:nondet:1:1", function () {
  let id = 590;
  createLocation(id);
  waitForLocationAdded(id);
  tryToAddExistingLocation(id);
  verifyLocationExists(id);
  updateLocation(id);
  deleteLocation(id);
  tryToDeleteANonExistingLocation(id);
  verifyLocationDoesNotExist(id);
});

// Story: crud:Location:nondet:1:2
bthread("crud:Location:nondet:1:2", function () {
  let id = 591;
  createLocation(id);
  tryToAddExistingLocation(id);
  updateLocation(id);
  verifyLocationExists(id);
  deleteLocation(id);
  tryToDeleteANonExistingLocation(id);
  verifyLocationDoesNotExist(id);
});

// Story: crud:Location:nondet:negative:dup-add
bthread("crud:Location:nondet:negative:dup-add", function () {
  let id = 596;
  createLocation(id);
  verifyLocationExists(id);
  tryToAddExistingLocation(id);
  verifyLocationExists(id);
});

// Monitor: Location Addition Verification
bthread("monitor:Location:addition", function () {
  while (true) {
    let item = waitForAnyLocationAdded();
    block(matchDeletedLocation(item.id), function () {
      verifyLocationExists(item.id);
    });
  }
});

// Monitor: Location Deletion Verification
bthread("monitor:Location:deletion", function () {
  while (true) {
    let item = waitForAnyLocationDeleted();
    block(matchAddedLocation(item.id), function () {
      verifyLocationDoesNotExist(item.id);
    });
  }
});

// Story: crud:MACAddress:nondet:1:1
bthread("crud:MACAddress:nondet:1:1", function () {
  let id = 600;
  createMACAddress(id);
  waitForMACAddressAdded(id);
  tryToAddExistingMACAddress(id);
  verifyMACAddressExists(id);
  updateMACAddress(id);
  deleteMACAddress(id);
  tryToDeleteANonExistingMACAddress(id);
  verifyMACAddressDoesNotExist(id);
});

// Story: crud:MACAddress:nondet:1:2
bthread("crud:MACAddress:nondet:1:2", function () {
  let id = 601;
  createMACAddress(id);
  tryToAddExistingMACAddress(id);
  updateMACAddress(id);
  verifyMACAddressExists(id);
  deleteMACAddress(id);
  tryToDeleteANonExistingMACAddress(id);
  verifyMACAddressDoesNotExist(id);
});

// Story: crud:MACAddress:nondet:negative:dup-add
bthread("crud:MACAddress:nondet:negative:dup-add", function () {
  let id = 606;
  createMACAddress(id);
  verifyMACAddressExists(id);
  tryToAddExistingMACAddress(id);
  verifyMACAddressExists(id);
});

// Monitor: MACAddress Addition Verification
bthread("monitor:MACAddress:addition", function () {
  while (true) {
    let item = waitForAnyMACAddressAdded();
    block(matchDeletedMACAddress(item.id), function () {
      verifyMACAddressExists(item.id);
    });
  }
});

// Monitor: MACAddress Deletion Verification
bthread("monitor:MACAddress:deletion", function () {
  while (true) {
    let item = waitForAnyMACAddressDeleted();
    block(matchAddedMACAddress(item.id), function () {
      verifyMACAddressDoesNotExist(item.id);
    });
  }
});

// Story: crud:Manufacturer:nondet:1:1
bthread("crud:Manufacturer:nondet:1:1", function () {
  let id = 610;
  createManufacturer(id);
  waitForManufacturerAdded(id);
  tryToAddExistingManufacturer(id);
  verifyManufacturerExists(id);
  updateManufacturer(id);
  deleteManufacturer(id);
  tryToDeleteANonExistingManufacturer(id);
  verifyManufacturerDoesNotExist(id);
});

// Story: crud:Manufacturer:nondet:1:2
bthread("crud:Manufacturer:nondet:1:2", function () {
  let id = 611;
  createManufacturer(id);
  tryToAddExistingManufacturer(id);
  updateManufacturer(id);
  verifyManufacturerExists(id);
  deleteManufacturer(id);
  tryToDeleteANonExistingManufacturer(id);
  verifyManufacturerDoesNotExist(id);
});

// Story: crud:Manufacturer:nondet:negative:dup-add
bthread("crud:Manufacturer:nondet:negative:dup-add", function () {
  let id = 616;
  createManufacturer(id);
  verifyManufacturerExists(id);
  tryToAddExistingManufacturer(id);
  verifyManufacturerExists(id);
});

// Monitor: Manufacturer Addition Verification
bthread("monitor:Manufacturer:addition", function () {
  while (true) {
    let item = waitForAnyManufacturerAdded();
    block(matchDeletedManufacturer(item.id), function () {
      verifyManufacturerExists(item.id);
    });
  }
});

// Monitor: Manufacturer Deletion Verification
bthread("monitor:Manufacturer:deletion", function () {
  while (true) {
    let item = waitForAnyManufacturerDeleted();
    block(matchAddedManufacturer(item.id), function () {
      verifyManufacturerDoesNotExist(item.id);
    });
  }
});

// Story: crud:ModuleBayTemplate:nondet:1:1
bthread("crud:ModuleBayTemplate:nondet:1:1", function () {
  let id = 620;
  createModuleBayTemplate(id);
  waitForModuleBayTemplateAdded(id);
  tryToAddExistingModuleBayTemplate(id);
  verifyModuleBayTemplateExists(id);
  updateModuleBayTemplate(id);
  deleteModuleBayTemplate(id);
  tryToDeleteANonExistingModuleBayTemplate(id);
  verifyModuleBayTemplateDoesNotExist(id);
});

// Story: crud:ModuleBayTemplate:nondet:1:2
bthread("crud:ModuleBayTemplate:nondet:1:2", function () {
  let id = 621;
  createModuleBayTemplate(id);
  tryToAddExistingModuleBayTemplate(id);
  updateModuleBayTemplate(id);
  verifyModuleBayTemplateExists(id);
  deleteModuleBayTemplate(id);
  tryToDeleteANonExistingModuleBayTemplate(id);
  verifyModuleBayTemplateDoesNotExist(id);
});

// Story: crud:ModuleBayTemplate:nondet:negative:dup-add
bthread("crud:ModuleBayTemplate:nondet:negative:dup-add", function () {
  let id = 626;
  createModuleBayTemplate(id);
  verifyModuleBayTemplateExists(id);
  tryToAddExistingModuleBayTemplate(id);
  verifyModuleBayTemplateExists(id);
});

// Monitor: ModuleBayTemplate Addition Verification
bthread("monitor:ModuleBayTemplate:addition", function () {
  while (true) {
    let item = waitForAnyModuleBayTemplateAdded();
    block(matchDeletedModuleBayTemplate(item.id), function () {
      verifyModuleBayTemplateExists(item.id);
    });
  }
});

// Monitor: ModuleBayTemplate Deletion Verification
bthread("monitor:ModuleBayTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyModuleBayTemplateDeleted();
    block(matchAddedModuleBayTemplate(item.id), function () {
      verifyModuleBayTemplateDoesNotExist(item.id);
    });
  }
});

// Story: crud:ModuleBay:nondet:1:1
bthread("crud:ModuleBay:nondet:1:1", function () {
  let id = 630;
  createModuleBay(id);
  waitForModuleBayAdded(id);
  tryToAddExistingModuleBay(id);
  verifyModuleBayExists(id);
  updateModuleBay(id);
  deleteModuleBay(id);
  tryToDeleteANonExistingModuleBay(id);
  verifyModuleBayDoesNotExist(id);
});

// Story: crud:ModuleBay:nondet:1:2
bthread("crud:ModuleBay:nondet:1:2", function () {
  let id = 631;
  createModuleBay(id);
  tryToAddExistingModuleBay(id);
  updateModuleBay(id);
  verifyModuleBayExists(id);
  deleteModuleBay(id);
  tryToDeleteANonExistingModuleBay(id);
  verifyModuleBayDoesNotExist(id);
});

// Story: crud:ModuleBay:nondet:negative:dup-add
bthread("crud:ModuleBay:nondet:negative:dup-add", function () {
  let id = 636;
  createModuleBay(id);
  verifyModuleBayExists(id);
  tryToAddExistingModuleBay(id);
  verifyModuleBayExists(id);
});

// Monitor: ModuleBay Addition Verification
bthread("monitor:ModuleBay:addition", function () {
  while (true) {
    let item = waitForAnyModuleBayAdded();
    block(matchDeletedModuleBay(item.id), function () {
      verifyModuleBayExists(item.id);
    });
  }
});

// Monitor: ModuleBay Deletion Verification
bthread("monitor:ModuleBay:deletion", function () {
  while (true) {
    let item = waitForAnyModuleBayDeleted();
    block(matchAddedModuleBay(item.id), function () {
      verifyModuleBayDoesNotExist(item.id);
    });
  }
});

// Story: crud:ModuleTypeProfile:nondet:1:1
bthread("crud:ModuleTypeProfile:nondet:1:1", function () {
  let id = 640;
  createModuleTypeProfile(id);
  waitForModuleTypeProfileAdded(id);
  tryToAddExistingModuleTypeProfile(id);
  verifyModuleTypeProfileExists(id);
  updateModuleTypeProfile(id);
  deleteModuleTypeProfile(id);
  tryToDeleteANonExistingModuleTypeProfile(id);
  verifyModuleTypeProfileDoesNotExist(id);
});

// Story: crud:ModuleTypeProfile:nondet:1:2
bthread("crud:ModuleTypeProfile:nondet:1:2", function () {
  let id = 641;
  createModuleTypeProfile(id);
  tryToAddExistingModuleTypeProfile(id);
  updateModuleTypeProfile(id);
  verifyModuleTypeProfileExists(id);
  deleteModuleTypeProfile(id);
  tryToDeleteANonExistingModuleTypeProfile(id);
  verifyModuleTypeProfileDoesNotExist(id);
});

// Story: crud:ModuleTypeProfile:nondet:negative:dup-add
bthread("crud:ModuleTypeProfile:nondet:negative:dup-add", function () {
  let id = 646;
  createModuleTypeProfile(id);
  verifyModuleTypeProfileExists(id);
  tryToAddExistingModuleTypeProfile(id);
  verifyModuleTypeProfileExists(id);
});

// Monitor: ModuleTypeProfile Addition Verification
bthread("monitor:ModuleTypeProfile:addition", function () {
  while (true) {
    let item = waitForAnyModuleTypeProfileAdded();
    block(matchDeletedModuleTypeProfile(item.id), function () {
      verifyModuleTypeProfileExists(item.id);
    });
  }
});

// Monitor: ModuleTypeProfile Deletion Verification
bthread("monitor:ModuleTypeProfile:deletion", function () {
  while (true) {
    let item = waitForAnyModuleTypeProfileDeleted();
    block(matchAddedModuleTypeProfile(item.id), function () {
      verifyModuleTypeProfileDoesNotExist(item.id);
    });
  }
});

// Story: crud:ModuleType:nondet:1:1
bthread("crud:ModuleType:nondet:1:1", function () {
  let id = 650;
  createModuleType(id);
  waitForModuleTypeAdded(id);
  tryToAddExistingModuleType(id);
  verifyModuleTypeExists(id);
  updateModuleType(id);
  deleteModuleType(id);
  tryToDeleteANonExistingModuleType(id);
  verifyModuleTypeDoesNotExist(id);
});

// Story: crud:ModuleType:nondet:1:2
bthread("crud:ModuleType:nondet:1:2", function () {
  let id = 651;
  createModuleType(id);
  tryToAddExistingModuleType(id);
  updateModuleType(id);
  verifyModuleTypeExists(id);
  deleteModuleType(id);
  tryToDeleteANonExistingModuleType(id);
  verifyModuleTypeDoesNotExist(id);
});

// Story: crud:ModuleType:nondet:negative:dup-add
bthread("crud:ModuleType:nondet:negative:dup-add", function () {
  let id = 656;
  createModuleType(id);
  verifyModuleTypeExists(id);
  tryToAddExistingModuleType(id);
  verifyModuleTypeExists(id);
});

// Monitor: ModuleType Addition Verification
bthread("monitor:ModuleType:addition", function () {
  while (true) {
    let item = waitForAnyModuleTypeAdded();
    block(matchDeletedModuleType(item.id), function () {
      verifyModuleTypeExists(item.id);
    });
  }
});

// Monitor: ModuleType Deletion Verification
bthread("monitor:ModuleType:deletion", function () {
  while (true) {
    let item = waitForAnyModuleTypeDeleted();
    block(matchAddedModuleType(item.id), function () {
      verifyModuleTypeDoesNotExist(item.id);
    });
  }
});

// Story: crud:Module:nondet:1:1
bthread("crud:Module:nondet:1:1", function () {
  let id = 660;
  createModule(id);
  waitForModuleAdded(id);
  tryToAddExistingModule(id);
  verifyModuleExists(id);
  updateModule(id);
  deleteModule(id);
  tryToDeleteANonExistingModule(id);
  verifyModuleDoesNotExist(id);
});

// Story: crud:Module:nondet:1:2
bthread("crud:Module:nondet:1:2", function () {
  let id = 661;
  createModule(id);
  tryToAddExistingModule(id);
  updateModule(id);
  verifyModuleExists(id);
  deleteModule(id);
  tryToDeleteANonExistingModule(id);
  verifyModuleDoesNotExist(id);
});

// Story: crud:Module:nondet:negative:dup-add
bthread("crud:Module:nondet:negative:dup-add", function () {
  let id = 666;
  createModule(id);
  verifyModuleExists(id);
  tryToAddExistingModule(id);
  verifyModuleExists(id);
});

// Monitor: Module Addition Verification
bthread("monitor:Module:addition", function () {
  while (true) {
    let item = waitForAnyModuleAdded();
    block(matchDeletedModule(item.id), function () {
      verifyModuleExists(item.id);
    });
  }
});

// Monitor: Module Deletion Verification
bthread("monitor:Module:deletion", function () {
  while (true) {
    let item = waitForAnyModuleDeleted();
    block(matchAddedModule(item.id), function () {
      verifyModuleDoesNotExist(item.id);
    });
  }
});

// Story: crud:Platform:nondet:1:1
bthread("crud:Platform:nondet:1:1", function () {
  let id = 670;
  createPlatform(id);
  waitForPlatformAdded(id);
  tryToAddExistingPlatform(id);
  verifyPlatformExists(id);
  updatePlatform(id);
  deletePlatform(id);
  tryToDeleteANonExistingPlatform(id);
  verifyPlatformDoesNotExist(id);
});

// Story: crud:Platform:nondet:1:2
bthread("crud:Platform:nondet:1:2", function () {
  let id = 671;
  createPlatform(id);
  tryToAddExistingPlatform(id);
  updatePlatform(id);
  verifyPlatformExists(id);
  deletePlatform(id);
  tryToDeleteANonExistingPlatform(id);
  verifyPlatformDoesNotExist(id);
});

// Story: crud:Platform:nondet:negative:dup-add
bthread("crud:Platform:nondet:negative:dup-add", function () {
  let id = 676;
  createPlatform(id);
  verifyPlatformExists(id);
  tryToAddExistingPlatform(id);
  verifyPlatformExists(id);
});

// Monitor: Platform Addition Verification
bthread("monitor:Platform:addition", function () {
  while (true) {
    let item = waitForAnyPlatformAdded();
    block(matchDeletedPlatform(item.id), function () {
      verifyPlatformExists(item.id);
    });
  }
});

// Monitor: Platform Deletion Verification
bthread("monitor:Platform:deletion", function () {
  while (true) {
    let item = waitForAnyPlatformDeleted();
    block(matchAddedPlatform(item.id), function () {
      verifyPlatformDoesNotExist(item.id);
    });
  }
});

// Story: crud:PowerFeed:nondet:1:1
bthread("crud:PowerFeed:nondet:1:1", function () {
  let id = 680;
  createPowerFeed(id);
  waitForPowerFeedAdded(id);
  tryToAddExistingPowerFeed(id);
  verifyPowerFeedExists(id);
  updatePowerFeed(id);
  deletePowerFeed(id);
  tryToDeleteANonExistingPowerFeed(id);
  verifyPowerFeedDoesNotExist(id);
});

// Story: crud:PowerFeed:nondet:1:2
bthread("crud:PowerFeed:nondet:1:2", function () {
  let id = 681;
  createPowerFeed(id);
  tryToAddExistingPowerFeed(id);
  updatePowerFeed(id);
  verifyPowerFeedExists(id);
  deletePowerFeed(id);
  tryToDeleteANonExistingPowerFeed(id);
  verifyPowerFeedDoesNotExist(id);
});

// Story: crud:PowerFeed:nondet:negative:dup-add
bthread("crud:PowerFeed:nondet:negative:dup-add", function () {
  let id = 686;
  createPowerFeed(id);
  verifyPowerFeedExists(id);
  tryToAddExistingPowerFeed(id);
  verifyPowerFeedExists(id);
});

// Monitor: PowerFeed Addition Verification
bthread("monitor:PowerFeed:addition", function () {
  while (true) {
    let item = waitForAnyPowerFeedAdded();
    block(matchDeletedPowerFeed(item.id), function () {
      verifyPowerFeedExists(item.id);
    });
  }
});

// Monitor: PowerFeed Deletion Verification
bthread("monitor:PowerFeed:deletion", function () {
  while (true) {
    let item = waitForAnyPowerFeedDeleted();
    block(matchAddedPowerFeed(item.id), function () {
      verifyPowerFeedDoesNotExist(item.id);
    });
  }
});

// Story: crud:PowerOutletTemplate:nondet:1:1
bthread("crud:PowerOutletTemplate:nondet:1:1", function () {
  let id = 690;
  createPowerOutletTemplate(id);
  waitForPowerOutletTemplateAdded(id);
  tryToAddExistingPowerOutletTemplate(id);
  verifyPowerOutletTemplateExists(id);
  updatePowerOutletTemplate(id);
  deletePowerOutletTemplate(id);
  tryToDeleteANonExistingPowerOutletTemplate(id);
  verifyPowerOutletTemplateDoesNotExist(id);
});

// Story: crud:PowerOutletTemplate:nondet:1:2
bthread("crud:PowerOutletTemplate:nondet:1:2", function () {
  let id = 691;
  createPowerOutletTemplate(id);
  tryToAddExistingPowerOutletTemplate(id);
  updatePowerOutletTemplate(id);
  verifyPowerOutletTemplateExists(id);
  deletePowerOutletTemplate(id);
  tryToDeleteANonExistingPowerOutletTemplate(id);
  verifyPowerOutletTemplateDoesNotExist(id);
});

// Story: crud:PowerOutletTemplate:nondet:negative:dup-add
bthread("crud:PowerOutletTemplate:nondet:negative:dup-add", function () {
  let id = 696;
  createPowerOutletTemplate(id);
  verifyPowerOutletTemplateExists(id);
  tryToAddExistingPowerOutletTemplate(id);
  verifyPowerOutletTemplateExists(id);
});

// Monitor: PowerOutletTemplate Addition Verification
bthread("monitor:PowerOutletTemplate:addition", function () {
  while (true) {
    let item = waitForAnyPowerOutletTemplateAdded();
    block(matchDeletedPowerOutletTemplate(item.id), function () {
      verifyPowerOutletTemplateExists(item.id);
    });
  }
});

// Monitor: PowerOutletTemplate Deletion Verification
bthread("monitor:PowerOutletTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyPowerOutletTemplateDeleted();
    block(matchAddedPowerOutletTemplate(item.id), function () {
      verifyPowerOutletTemplateDoesNotExist(item.id);
    });
  }
});

// Story: crud:PowerOutlet:nondet:1:1
bthread("crud:PowerOutlet:nondet:1:1", function () {
  let id = 700;
  createPowerOutlet(id);
  waitForPowerOutletAdded(id);
  tryToAddExistingPowerOutlet(id);
  verifyPowerOutletExists(id);
  updatePowerOutlet(id);
  deletePowerOutlet(id);
  tryToDeleteANonExistingPowerOutlet(id);
  verifyPowerOutletDoesNotExist(id);
});

// Story: crud:PowerOutlet:nondet:1:2
bthread("crud:PowerOutlet:nondet:1:2", function () {
  let id = 701;
  createPowerOutlet(id);
  tryToAddExistingPowerOutlet(id);
  updatePowerOutlet(id);
  verifyPowerOutletExists(id);
  deletePowerOutlet(id);
  tryToDeleteANonExistingPowerOutlet(id);
  verifyPowerOutletDoesNotExist(id);
});

// Story: crud:PowerOutlet:nondet:negative:dup-add
bthread("crud:PowerOutlet:nondet:negative:dup-add", function () {
  let id = 706;
  createPowerOutlet(id);
  verifyPowerOutletExists(id);
  tryToAddExistingPowerOutlet(id);
  verifyPowerOutletExists(id);
});

// Monitor: PowerOutlet Addition Verification
bthread("monitor:PowerOutlet:addition", function () {
  while (true) {
    let item = waitForAnyPowerOutletAdded();
    block(matchDeletedPowerOutlet(item.id), function () {
      verifyPowerOutletExists(item.id);
    });
  }
});

// Monitor: PowerOutlet Deletion Verification
bthread("monitor:PowerOutlet:deletion", function () {
  while (true) {
    let item = waitForAnyPowerOutletDeleted();
    block(matchAddedPowerOutlet(item.id), function () {
      verifyPowerOutletDoesNotExist(item.id);
    });
  }
});

// Story: crud:PowerPanel:nondet:1:1
bthread("crud:PowerPanel:nondet:1:1", function () {
  let id = 710;
  createPowerPanel(id);
  waitForPowerPanelAdded(id);
  tryToAddExistingPowerPanel(id);
  verifyPowerPanelExists(id);
  updatePowerPanel(id);
  deletePowerPanel(id);
  tryToDeleteANonExistingPowerPanel(id);
  verifyPowerPanelDoesNotExist(id);
});

// Story: crud:PowerPanel:nondet:1:2
bthread("crud:PowerPanel:nondet:1:2", function () {
  let id = 711;
  createPowerPanel(id);
  tryToAddExistingPowerPanel(id);
  updatePowerPanel(id);
  verifyPowerPanelExists(id);
  deletePowerPanel(id);
  tryToDeleteANonExistingPowerPanel(id);
  verifyPowerPanelDoesNotExist(id);
});

// Story: crud:PowerPanel:nondet:negative:dup-add
bthread("crud:PowerPanel:nondet:negative:dup-add", function () {
  let id = 716;
  createPowerPanel(id);
  verifyPowerPanelExists(id);
  tryToAddExistingPowerPanel(id);
  verifyPowerPanelExists(id);
});

// Monitor: PowerPanel Addition Verification
bthread("monitor:PowerPanel:addition", function () {
  while (true) {
    let item = waitForAnyPowerPanelAdded();
    block(matchDeletedPowerPanel(item.id), function () {
      verifyPowerPanelExists(item.id);
    });
  }
});

// Monitor: PowerPanel Deletion Verification
bthread("monitor:PowerPanel:deletion", function () {
  while (true) {
    let item = waitForAnyPowerPanelDeleted();
    block(matchAddedPowerPanel(item.id), function () {
      verifyPowerPanelDoesNotExist(item.id);
    });
  }
});

// Story: crud:PowerPortTemplate:nondet:1:1
bthread("crud:PowerPortTemplate:nondet:1:1", function () {
  let id = 720;
  createPowerPortTemplate(id);
  waitForPowerPortTemplateAdded(id);
  tryToAddExistingPowerPortTemplate(id);
  verifyPowerPortTemplateExists(id);
  updatePowerPortTemplate(id);
  deletePowerPortTemplate(id);
  tryToDeleteANonExistingPowerPortTemplate(id);
  verifyPowerPortTemplateDoesNotExist(id);
});

// Story: crud:PowerPortTemplate:nondet:1:2
bthread("crud:PowerPortTemplate:nondet:1:2", function () {
  let id = 721;
  createPowerPortTemplate(id);
  tryToAddExistingPowerPortTemplate(id);
  updatePowerPortTemplate(id);
  verifyPowerPortTemplateExists(id);
  deletePowerPortTemplate(id);
  tryToDeleteANonExistingPowerPortTemplate(id);
  verifyPowerPortTemplateDoesNotExist(id);
});

// Story: crud:PowerPortTemplate:nondet:negative:dup-add
bthread("crud:PowerPortTemplate:nondet:negative:dup-add", function () {
  let id = 726;
  createPowerPortTemplate(id);
  verifyPowerPortTemplateExists(id);
  tryToAddExistingPowerPortTemplate(id);
  verifyPowerPortTemplateExists(id);
});

// Monitor: PowerPortTemplate Addition Verification
bthread("monitor:PowerPortTemplate:addition", function () {
  while (true) {
    let item = waitForAnyPowerPortTemplateAdded();
    block(matchDeletedPowerPortTemplate(item.id), function () {
      verifyPowerPortTemplateExists(item.id);
    });
  }
});

// Monitor: PowerPortTemplate Deletion Verification
bthread("monitor:PowerPortTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyPowerPortTemplateDeleted();
    block(matchAddedPowerPortTemplate(item.id), function () {
      verifyPowerPortTemplateDoesNotExist(item.id);
    });
  }
});

// Story: crud:PowerPort:nondet:1:1
bthread("crud:PowerPort:nondet:1:1", function () {
  let id = 730;
  createPowerPort(id);
  waitForPowerPortAdded(id);
  tryToAddExistingPowerPort(id);
  verifyPowerPortExists(id);
  updatePowerPort(id);
  deletePowerPort(id);
  tryToDeleteANonExistingPowerPort(id);
  verifyPowerPortDoesNotExist(id);
});

// Story: crud:PowerPort:nondet:1:2
bthread("crud:PowerPort:nondet:1:2", function () {
  let id = 731;
  createPowerPort(id);
  tryToAddExistingPowerPort(id);
  updatePowerPort(id);
  verifyPowerPortExists(id);
  deletePowerPort(id);
  tryToDeleteANonExistingPowerPort(id);
  verifyPowerPortDoesNotExist(id);
});

// Story: crud:PowerPort:nondet:negative:dup-add
bthread("crud:PowerPort:nondet:negative:dup-add", function () {
  let id = 736;
  createPowerPort(id);
  verifyPowerPortExists(id);
  tryToAddExistingPowerPort(id);
  verifyPowerPortExists(id);
});

// Monitor: PowerPort Addition Verification
bthread("monitor:PowerPort:addition", function () {
  while (true) {
    let item = waitForAnyPowerPortAdded();
    block(matchDeletedPowerPort(item.id), function () {
      verifyPowerPortExists(item.id);
    });
  }
});

// Monitor: PowerPort Deletion Verification
bthread("monitor:PowerPort:deletion", function () {
  while (true) {
    let item = waitForAnyPowerPortDeleted();
    block(matchAddedPowerPort(item.id), function () {
      verifyPowerPortDoesNotExist(item.id);
    });
  }
});

// Story: crud:RackReservation:nondet:1:1
bthread("crud:RackReservation:nondet:1:1", function () {
  let id = 740;
  createRackReservation(id);
  waitForRackReservationAdded(id);
  tryToAddExistingRackReservation(id);
  verifyRackReservationExists(id);
  updateRackReservation(id);
  deleteRackReservation(id);
  tryToDeleteANonExistingRackReservation(id);
  verifyRackReservationDoesNotExist(id);
});

// Story: crud:RackReservation:nondet:1:2
bthread("crud:RackReservation:nondet:1:2", function () {
  let id = 741;
  createRackReservation(id);
  tryToAddExistingRackReservation(id);
  updateRackReservation(id);
  verifyRackReservationExists(id);
  deleteRackReservation(id);
  tryToDeleteANonExistingRackReservation(id);
  verifyRackReservationDoesNotExist(id);
});

// Story: crud:RackReservation:nondet:negative:dup-add
bthread("crud:RackReservation:nondet:negative:dup-add", function () {
  let id = 746;
  createRackReservation(id);
  verifyRackReservationExists(id);
  tryToAddExistingRackReservation(id);
  verifyRackReservationExists(id);
});

// Monitor: RackReservation Addition Verification
bthread("monitor:RackReservation:addition", function () {
  while (true) {
    let item = waitForAnyRackReservationAdded();
    block(matchDeletedRackReservation(item.id), function () {
      verifyRackReservationExists(item.id);
    });
  }
});

// Monitor: RackReservation Deletion Verification
bthread("monitor:RackReservation:deletion", function () {
  while (true) {
    let item = waitForAnyRackReservationDeleted();
    block(matchAddedRackReservation(item.id), function () {
      verifyRackReservationDoesNotExist(item.id);
    });
  }
});

// Story: crud:RackRole:nondet:1:1
bthread("crud:RackRole:nondet:1:1", function () {
  let id = 750;
  let name = "name_750";
  let slug = "slug_750";
  createRackRole(id, name, slug);
  waitForRackRoleAdded(id, name, slug);
  tryToAddExistingRackRole(id, name, slug);
  verifyRackRoleExists(id, name, slug);
  updateRackRole(id, name, slug);
  deleteRackRole(id, name, slug);
  tryToDeleteANonExistingRackRole(id, name, slug);
  verifyRackRoleDoesNotExist(id, name, slug);
});

// Story: crud:RackRole:nondet:1:2
bthread("crud:RackRole:nondet:1:2", function () {
  let id = 751;
  let name = "name_751";
  let slug = "slug_751";
  createRackRole(id, name, slug);
  tryToAddExistingRackRole(id, name, slug);
  updateRackRole(id, name, slug);
  verifyRackRoleExists(id, name, slug);
  deleteRackRole(id, name, slug);
  tryToDeleteANonExistingRackRole(id, name, slug);
  verifyRackRoleDoesNotExist(id, name, slug);
});

// Story: crud:RackRole:nondet:negative:dup-add
bthread("crud:RackRole:nondet:negative:dup-add", function () {
  let id = 756;
  let name = "name_756";
  let slug = "slug_756";
  createRackRole(id, name, slug);
  verifyRackRoleExists(id, name, slug);
  tryToAddExistingRackRole(id, name, slug);
  verifyRackRoleExists(id, name, slug);
});

// Monitor: RackRole Addition Verification
bthread("monitor:RackRole:addition", function () {
  while (true) {
    let item = waitForAnyRackRoleAdded();
    block(matchDeletedRackRole(item.id, item.name, item.slug), function () {
      verifyRackRoleExists(item.id, item.name, item.slug);
    });
  }
});

// Monitor: RackRole Deletion Verification
bthread("monitor:RackRole:deletion", function () {
  while (true) {
    let item = waitForAnyRackRoleDeleted();
    block(matchAddedRackRole(item.id, item.name, item.slug), function () {
      verifyRackRoleDoesNotExist(item.id, item.name, item.slug);
    });
  }
});

// Story: crud:RackType:nondet:1:1
bthread("crud:RackType:nondet:1:1", function () {
  let comments = "comments_760";
  let desc_units = "desc_units_760";
  let id = 760;
  let name = "name_760";
  let slug = "slug_760";
  let tags = "tags_760";
  let u_height = "u_height_760";
  let width = "width_760";
  createRackType(comments, desc_units, id, name, slug, tags, u_height, width);
  waitForRackTypeAdded(comments, desc_units, id, name, slug, tags, u_height, width);
  tryToAddExistingRackType(comments, desc_units, id, name, slug, tags, u_height, width);
  verifyRackTypeExists(comments, desc_units, id, name, slug, tags, u_height, width);
  updateRackType(comments, desc_units, id, name, slug, tags, u_height, width);
  deleteRackType(comments, desc_units, id, name, slug, tags, u_height, width);
  tryToDeleteANonExistingRackType(comments, desc_units, id, name, slug, tags, u_height, width);
  verifyRackTypeDoesNotExist(comments, desc_units, id, name, slug, tags, u_height, width);
});

// Story: crud:RackType:nondet:1:2
bthread("crud:RackType:nondet:1:2", function () {
  let comments = "comments_761";
  let desc_units = "desc_units_761";
  let id = 761;
  let name = "name_761";
  let slug = "slug_761";
  let tags = "tags_761";
  let u_height = "u_height_761";
  let width = "width_761";
  createRackType(comments, desc_units, id, name, slug, tags, u_height, width);
  tryToAddExistingRackType(comments, desc_units, id, name, slug, tags, u_height, width);
  updateRackType(comments, desc_units, id, name, slug, tags, u_height, width);
  verifyRackTypeExists(comments, desc_units, id, name, slug, tags, u_height, width);
  deleteRackType(comments, desc_units, id, name, slug, tags, u_height, width);
  tryToDeleteANonExistingRackType(comments, desc_units, id, name, slug, tags, u_height, width);
  verifyRackTypeDoesNotExist(comments, desc_units, id, name, slug, tags, u_height, width);
});

// Story: crud:RackType:nondet:negative:dup-add
bthread("crud:RackType:nondet:negative:dup-add", function () {
  let comments = "comments_766";
  let desc_units = "desc_units_766";
  let id = 766;
  let name = "name_766";
  let slug = "slug_766";
  let tags = "tags_766";
  let u_height = "u_height_766";
  let width = "width_766";
  createRackType(comments, desc_units, id, name, slug, tags, u_height, width);
  verifyRackTypeExists(comments, desc_units, id, name, slug, tags, u_height, width);
  tryToAddExistingRackType(comments, desc_units, id, name, slug, tags, u_height, width);
  verifyRackTypeExists(comments, desc_units, id, name, slug, tags, u_height, width);
});

// Monitor: RackType Addition Verification
bthread("monitor:RackType:addition", function () {
  while (true) {
    let item = waitForAnyRackTypeAdded();
    block(matchDeletedRackType(item.comments, item.desc_units, item.id, item.name, item.slug, item.tags, item.u_height, item.width), function () {
      verifyRackTypeExists(item.comments, item.desc_units, item.id, item.name, item.slug, item.tags, item.u_height, item.width);
    });
  }
});

// Monitor: RackType Deletion Verification
bthread("monitor:RackType:deletion", function () {
  while (true) {
    let item = waitForAnyRackTypeDeleted();
    block(matchAddedRackType(item.comments, item.desc_units, item.id, item.name, item.slug, item.tags, item.u_height, item.width), function () {
      verifyRackTypeDoesNotExist(item.comments, item.desc_units, item.id, item.name, item.slug, item.tags, item.u_height, item.width);
    });
  }
});

// Story: crud:Rack:nondet:1:1
bthread("crud:Rack:nondet:1:1", function () {
  let asset_tag = "asset_tag_770";
  let comments = "comments_770";
  let desc_units = "desc_units_770";
  let facility_id = 770;
  let id = 770;
  let location = "location_770";
  let manufacturer = "manufacturer_770";
  let max_weight = "max_weight_770";
  let mounting_depth = "mounting_depth_770";
  let name = "name_770";
  let outer_depth = "outer_depth_770";
  let outer_height = "outer_height_770";
  let outer_unit = "outer_unit_770";
  let outer_width = "outer_width_770";
  let rack_type = "rack_type_770";
  let role = "role_770";
  let serial = "serial_770";
  let site = "site_770";
  let starting_unit = "starting_unit_770";
  let status = "status_770";
  let tags = "tags_770";
  let tenant = "tenant_770";
  let u_height = "u_height_770";
  let weight = "weight_770";
  let weight_unit = "weight_unit_770";
  createRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  waitForRackAdded(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  tryToAddExistingRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  verifyRackExists(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  updateRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  deleteRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  tryToDeleteANonExistingRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  verifyRackDoesNotExist(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
});

// Story: crud:Rack:nondet:1:2
bthread("crud:Rack:nondet:1:2", function () {
  let asset_tag = "asset_tag_771";
  let comments = "comments_771";
  let desc_units = "desc_units_771";
  let facility_id = 771;
  let id = 771;
  let location = "location_771";
  let manufacturer = "manufacturer_771";
  let max_weight = "max_weight_771";
  let mounting_depth = "mounting_depth_771";
  let name = "name_771";
  let outer_depth = "outer_depth_771";
  let outer_height = "outer_height_771";
  let outer_unit = "outer_unit_771";
  let outer_width = "outer_width_771";
  let rack_type = "rack_type_771";
  let role = "role_771";
  let serial = "serial_771";
  let site = "site_771";
  let starting_unit = "starting_unit_771";
  let status = "status_771";
  let tags = "tags_771";
  let tenant = "tenant_771";
  let u_height = "u_height_771";
  let weight = "weight_771";
  let weight_unit = "weight_unit_771";
  createRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  tryToAddExistingRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  updateRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  verifyRackExists(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  deleteRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  tryToDeleteANonExistingRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  verifyRackDoesNotExist(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
});

// Story: crud:Rack:nondet:negative:dup-add
bthread("crud:Rack:nondet:negative:dup-add", function () {
  let asset_tag = "asset_tag_776";
  let comments = "comments_776";
  let desc_units = "desc_units_776";
  let facility_id = 776;
  let id = 776;
  let location = "location_776";
  let manufacturer = "manufacturer_776";
  let max_weight = "max_weight_776";
  let mounting_depth = "mounting_depth_776";
  let name = "name_776";
  let outer_depth = "outer_depth_776";
  let outer_height = "outer_height_776";
  let outer_unit = "outer_unit_776";
  let outer_width = "outer_width_776";
  let rack_type = "rack_type_776";
  let role = "role_776";
  let serial = "serial_776";
  let site = "site_776";
  let starting_unit = "starting_unit_776";
  let status = "status_776";
  let tags = "tags_776";
  let tenant = "tenant_776";
  let u_height = "u_height_776";
  let weight = "weight_776";
  let weight_unit = "weight_unit_776";
  createRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  verifyRackExists(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  tryToAddExistingRack(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
  verifyRackExists(asset_tag, comments, desc_units, facility_id, id, location, manufacturer, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit);
});

// Monitor: Rack Addition Verification
bthread("monitor:Rack:addition", function () {
  while (true) {
    let item = waitForAnyRackAdded();
    block(matchDeletedRack(item.asset_tag, item.comments, item.desc_units, item.facility_id, item.id, item.location, item.manufacturer, item.max_weight, item.mounting_depth, item.name, item.outer_depth, item.outer_height, item.outer_unit, item.outer_width, item.rack_type, item.role, item.serial, item.site, item.starting_unit, item.status, item.tags, item.tenant, item.u_height, item.weight, item.weight_unit), function () {
      verifyRackExists(item.asset_tag, item.comments, item.desc_units, item.facility_id, item.id, item.location, item.manufacturer, item.max_weight, item.mounting_depth, item.name, item.outer_depth, item.outer_height, item.outer_unit, item.outer_width, item.rack_type, item.role, item.serial, item.site, item.starting_unit, item.status, item.tags, item.tenant, item.u_height, item.weight, item.weight_unit);
    });
  }
});

// Monitor: Rack Deletion Verification
bthread("monitor:Rack:deletion", function () {
  while (true) {
    let item = waitForAnyRackDeleted();
    block(matchAddedRack(item.asset_tag, item.comments, item.desc_units, item.facility_id, item.id, item.location, item.manufacturer, item.max_weight, item.mounting_depth, item.name, item.outer_depth, item.outer_height, item.outer_unit, item.outer_width, item.rack_type, item.role, item.serial, item.site, item.starting_unit, item.status, item.tags, item.tenant, item.u_height, item.weight, item.weight_unit), function () {
      verifyRackDoesNotExist(item.asset_tag, item.comments, item.desc_units, item.facility_id, item.id, item.location, item.manufacturer, item.max_weight, item.mounting_depth, item.name, item.outer_depth, item.outer_height, item.outer_unit, item.outer_width, item.rack_type, item.role, item.serial, item.site, item.starting_unit, item.status, item.tags, item.tenant, item.u_height, item.weight, item.weight_unit);
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
  let name = "name_780";
  let positions = "positions_780";
  let tags = "tags_780";
  let type = "type_780";
  createRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type);
  waitForRearPortTemplateAdded(color, description, device_type, id, label, name, positions, tags, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, name, positions, tags, type);
  updateRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type);
  deleteRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type);
  tryToDeleteANonExistingRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type);
  verifyRearPortTemplateDoesNotExist(color, description, device_type, id, label, name, positions, tags, type);
});

// Story: crud:RearPortTemplate:nondet:1:2
bthread("crud:RearPortTemplate:nondet:1:2", function () {
  let color = "color_781";
  let description = "description_781";
  let device_type = "device_type_781";
  let id = 781;
  let label = "label_781";
  let name = "name_781";
  let positions = "positions_781";
  let tags = "tags_781";
  let type = "type_781";
  createRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type);
  updateRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, name, positions, tags, type);
  deleteRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type);
  tryToDeleteANonExistingRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type);
  verifyRearPortTemplateDoesNotExist(color, description, device_type, id, label, name, positions, tags, type);
});

// Story: crud:RearPortTemplate:nondet:negative:dup-add
bthread("crud:RearPortTemplate:nondet:negative:dup-add", function () {
  let color = "color_786";
  let description = "description_786";
  let device_type = "device_type_786";
  let id = 786;
  let label = "label_786";
  let name = "name_786";
  let positions = "positions_786";
  let tags = "tags_786";
  let type = "type_786";
  createRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, name, positions, tags, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, name, positions, tags, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, name, positions, tags, type);
});

// Monitor: RearPortTemplate Addition Verification
bthread("monitor:RearPortTemplate:addition", function () {
  while (true) {
    let item = waitForAnyRearPortTemplateAdded();
    block(matchDeletedRearPortTemplate(item.color, item.description, item.device_type, item.id, item.label, item.name, item.positions, item.tags, item.type), function () {
      verifyRearPortTemplateExists(item.color, item.description, item.device_type, item.id, item.label, item.name, item.positions, item.tags, item.type);
    });
  }
});

// Monitor: RearPortTemplate Deletion Verification
bthread("monitor:RearPortTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyRearPortTemplateDeleted();
    block(matchAddedRearPortTemplate(item.color, item.description, item.device_type, item.id, item.label, item.name, item.positions, item.tags, item.type), function () {
      verifyRearPortTemplateDoesNotExist(item.color, item.description, item.device_type, item.id, item.label, item.name, item.positions, item.tags, item.type);
    });
  }
});

// Story: crud:RearPort:nondet:1:1
bthread("crud:RearPort:nondet:1:1", function () {
  let cable = "cable_790";
  let cable_end = "cable_end_790";
  let color = "color_790";
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
  let rack = "rack_790";
  let region = "region_790";
  let site = "site_790";
  let tags = "tags_790";
  let type = "type_790";
  let virtual_chassis = "virtual_chassis_790";
  createRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  waitForRearPortAdded(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  tryToAddExistingRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  verifyRearPortExists(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  updateRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  deleteRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  tryToDeleteANonExistingRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  verifyRearPortDoesNotExist(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
});

// Story: crud:RearPort:nondet:1:2
bthread("crud:RearPort:nondet:1:2", function () {
  let cable = "cable_791";
  let cable_end = "cable_end_791";
  let color = "color_791";
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
  let rack = "rack_791";
  let region = "region_791";
  let site = "site_791";
  let tags = "tags_791";
  let type = "type_791";
  let virtual_chassis = "virtual_chassis_791";
  createRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  tryToAddExistingRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  updateRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  verifyRearPortExists(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  deleteRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  tryToDeleteANonExistingRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  verifyRearPortDoesNotExist(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
});

// Story: crud:RearPort:nondet:negative:dup-add
bthread("crud:RearPort:nondet:negative:dup-add", function () {
  let cable = "cable_796";
  let cable_end = "cable_end_796";
  let color = "color_796";
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
  let rack = "rack_796";
  let region = "region_796";
  let site = "site_796";
  let tags = "tags_796";
  let type = "type_796";
  let virtual_chassis = "virtual_chassis_796";
  createRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  verifyRearPortExists(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  tryToAddExistingRearPort(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
  verifyRearPortExists(cable, cable_end, color, description, device, device_role, device_status, device_type, id, label, mark_connected, module, name, occupied, rack, region, site, tags, type, virtual_chassis);
});

// Monitor: RearPort Addition Verification
bthread("monitor:RearPort:addition", function () {
  while (true) {
    let item = waitForAnyRearPortAdded();
    block(matchDeletedRearPort(item.cable, item.cable_end, item.color, item.description, item.device, item.device_role, item.device_status, item.device_type, item.id, item.label, item.mark_connected, item.module, item.name, item.occupied, item.rack, item.region, item.site, item.tags, item.type, item.virtual_chassis), function () {
      verifyRearPortExists(item.cable, item.cable_end, item.color, item.description, item.device, item.device_role, item.device_status, item.device_type, item.id, item.label, item.mark_connected, item.module, item.name, item.occupied, item.rack, item.region, item.site, item.tags, item.type, item.virtual_chassis);
    });
  }
});

// Monitor: RearPort Deletion Verification
bthread("monitor:RearPort:deletion", function () {
  while (true) {
    let item = waitForAnyRearPortDeleted();
    block(matchAddedRearPort(item.cable, item.cable_end, item.color, item.description, item.device, item.device_role, item.device_status, item.device_type, item.id, item.label, item.mark_connected, item.module, item.name, item.occupied, item.rack, item.region, item.site, item.tags, item.type, item.virtual_chassis), function () {
      verifyRearPortDoesNotExist(item.cable, item.cable_end, item.color, item.description, item.device, item.device_role, item.device_status, item.device_type, item.id, item.label, item.mark_connected, item.module, item.name, item.occupied, item.rack, item.region, item.site, item.tags, item.type, item.virtual_chassis);
    });
  }
});

// Story: crud:Region:nondet:1:1
bthread("crud:Region:nondet:1:1", function () {
  let id = 800;
  createRegion(id);
  waitForRegionAdded(id);
  tryToAddExistingRegion(id);
  verifyRegionExists(id);
  updateRegion(id);
  deleteRegion(id);
  tryToDeleteANonExistingRegion(id);
  verifyRegionDoesNotExist(id);
});

// Story: crud:Region:nondet:1:2
bthread("crud:Region:nondet:1:2", function () {
  let id = 801;
  createRegion(id);
  tryToAddExistingRegion(id);
  updateRegion(id);
  verifyRegionExists(id);
  deleteRegion(id);
  tryToDeleteANonExistingRegion(id);
  verifyRegionDoesNotExist(id);
});

// Story: crud:Region:nondet:negative:dup-add
bthread("crud:Region:nondet:negative:dup-add", function () {
  let id = 806;
  createRegion(id);
  verifyRegionExists(id);
  tryToAddExistingRegion(id);
  verifyRegionExists(id);
});

// Monitor: Region Addition Verification
bthread("monitor:Region:addition", function () {
  while (true) {
    let item = waitForAnyRegionAdded();
    block(matchDeletedRegion(item.id), function () {
      verifyRegionExists(item.id);
    });
  }
});

// Monitor: Region Deletion Verification
bthread("monitor:Region:deletion", function () {
  while (true) {
    let item = waitForAnyRegionDeleted();
    block(matchAddedRegion(item.id), function () {
      verifyRegionDoesNotExist(item.id);
    });
  }
});

// Story: crud:SiteGroup:nondet:1:1
bthread("crud:SiteGroup:nondet:1:1", function () {
  let id = 810;
  createSiteGroup(id);
  waitForSiteGroupAdded(id);
  tryToAddExistingSiteGroup(id);
  verifySiteGroupExists(id);
  updateSiteGroup(id);
  deleteSiteGroup(id);
  tryToDeleteANonExistingSiteGroup(id);
  verifySiteGroupDoesNotExist(id);
});

// Story: crud:SiteGroup:nondet:1:2
bthread("crud:SiteGroup:nondet:1:2", function () {
  let id = 811;
  createSiteGroup(id);
  tryToAddExistingSiteGroup(id);
  updateSiteGroup(id);
  verifySiteGroupExists(id);
  deleteSiteGroup(id);
  tryToDeleteANonExistingSiteGroup(id);
  verifySiteGroupDoesNotExist(id);
});

// Story: crud:SiteGroup:nondet:negative:dup-add
bthread("crud:SiteGroup:nondet:negative:dup-add", function () {
  let id = 816;
  createSiteGroup(id);
  verifySiteGroupExists(id);
  tryToAddExistingSiteGroup(id);
  verifySiteGroupExists(id);
});

// Monitor: SiteGroup Addition Verification
bthread("monitor:SiteGroup:addition", function () {
  while (true) {
    let item = waitForAnySiteGroupAdded();
    block(matchDeletedSiteGroup(item.id), function () {
      verifySiteGroupExists(item.id);
    });
  }
});

// Monitor: SiteGroup Deletion Verification
bthread("monitor:SiteGroup:deletion", function () {
  while (true) {
    let item = waitForAnySiteGroupDeleted();
    block(matchAddedSiteGroup(item.id), function () {
      verifySiteGroupDoesNotExist(item.id);
    });
  }
});

// Story: crud:Site:nondet:1:1
bthread("crud:Site:nondet:1:1", function () {
  let id = 820;
  createSite(id);
  waitForSiteAdded(id);
  tryToAddExistingSite(id);
  verifySiteExists(id);
  updateSite(id);
  deleteSite(id);
  tryToDeleteANonExistingSite(id);
  verifySiteDoesNotExist(id);
});

// Story: crud:Site:nondet:1:2
bthread("crud:Site:nondet:1:2", function () {
  let id = 821;
  createSite(id);
  tryToAddExistingSite(id);
  updateSite(id);
  verifySiteExists(id);
  deleteSite(id);
  tryToDeleteANonExistingSite(id);
  verifySiteDoesNotExist(id);
});

// Story: crud:Site:nondet:negative:dup-add
bthread("crud:Site:nondet:negative:dup-add", function () {
  let id = 826;
  createSite(id);
  verifySiteExists(id);
  tryToAddExistingSite(id);
  verifySiteExists(id);
});

// Monitor: Site Addition Verification
bthread("monitor:Site:addition", function () {
  while (true) {
    let item = waitForAnySiteAdded();
    block(matchDeletedSite(item.id), function () {
      verifySiteExists(item.id);
    });
  }
});

// Monitor: Site Deletion Verification
bthread("monitor:Site:deletion", function () {
  while (true) {
    let item = waitForAnySiteDeleted();
    block(matchAddedSite(item.id), function () {
      verifySiteDoesNotExist(item.id);
    });
  }
});

// Story: crud:VirtualChassis:nondet:1:1
bthread("crud:VirtualChassis:nondet:1:1", function () {
  let id = 830;
  createVirtualChassis(id);
  waitForVirtualChassisAdded(id);
  tryToAddExistingVirtualChassis(id);
  verifyVirtualChassisExists(id);
  updateVirtualChassis(id);
  deleteVirtualChassis(id);
  tryToDeleteANonExistingVirtualChassis(id);
  verifyVirtualChassisDoesNotExist(id);
});

// Story: crud:VirtualChassis:nondet:1:2
bthread("crud:VirtualChassis:nondet:1:2", function () {
  let id = 831;
  createVirtualChassis(id);
  tryToAddExistingVirtualChassis(id);
  updateVirtualChassis(id);
  verifyVirtualChassisExists(id);
  deleteVirtualChassis(id);
  tryToDeleteANonExistingVirtualChassis(id);
  verifyVirtualChassisDoesNotExist(id);
});

// Story: crud:VirtualChassis:nondet:negative:dup-add
bthread("crud:VirtualChassis:nondet:negative:dup-add", function () {
  let id = 836;
  createVirtualChassis(id);
  verifyVirtualChassisExists(id);
  tryToAddExistingVirtualChassis(id);
  verifyVirtualChassisExists(id);
});

// Monitor: VirtualChassis Addition Verification
bthread("monitor:VirtualChassis:addition", function () {
  while (true) {
    let item = waitForAnyVirtualChassisAdded();
    block(matchDeletedVirtualChassis(item.id), function () {
      verifyVirtualChassisExists(item.id);
    });
  }
});

// Monitor: VirtualChassis Deletion Verification
bthread("monitor:VirtualChassis:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualChassisDeleted();
    block(matchAddedVirtualChassis(item.id), function () {
      verifyVirtualChassisDoesNotExist(item.id);
    });
  }
});

// Story: crud:VirtualDeviceContext:nondet:1:1
bthread("crud:VirtualDeviceContext:nondet:1:1", function () {
  let id = 840;
  createVirtualDeviceContext(id);
  waitForVirtualDeviceContextAdded(id);
  tryToAddExistingVirtualDeviceContext(id);
  verifyVirtualDeviceContextExists(id);
  updateVirtualDeviceContext(id);
  deleteVirtualDeviceContext(id);
  tryToDeleteANonExistingVirtualDeviceContext(id);
  verifyVirtualDeviceContextDoesNotExist(id);
});

// Story: crud:VirtualDeviceContext:nondet:1:2
bthread("crud:VirtualDeviceContext:nondet:1:2", function () {
  let id = 841;
  createVirtualDeviceContext(id);
  tryToAddExistingVirtualDeviceContext(id);
  updateVirtualDeviceContext(id);
  verifyVirtualDeviceContextExists(id);
  deleteVirtualDeviceContext(id);
  tryToDeleteANonExistingVirtualDeviceContext(id);
  verifyVirtualDeviceContextDoesNotExist(id);
});

// Story: crud:VirtualDeviceContext:nondet:negative:dup-add
bthread("crud:VirtualDeviceContext:nondet:negative:dup-add", function () {
  let id = 846;
  createVirtualDeviceContext(id);
  verifyVirtualDeviceContextExists(id);
  tryToAddExistingVirtualDeviceContext(id);
  verifyVirtualDeviceContextExists(id);
});

// Monitor: VirtualDeviceContext Addition Verification
bthread("monitor:VirtualDeviceContext:addition", function () {
  while (true) {
    let item = waitForAnyVirtualDeviceContextAdded();
    block(matchDeletedVirtualDeviceContext(item.id), function () {
      verifyVirtualDeviceContextExists(item.id);
    });
  }
});

// Monitor: VirtualDeviceContext Deletion Verification
bthread("monitor:VirtualDeviceContext:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualDeviceContextDeleted();
    block(matchAddedVirtualDeviceContext(item.id), function () {
      verifyVirtualDeviceContextDoesNotExist(item.id);
    });
  }
});

// Story: crud:Bookmark:nondet:1:1
bthread("crud:Bookmark:nondet:1:1", function () {
  let id = 850;
  createBookmark(id);
  waitForBookmarkAdded(id);
  tryToAddExistingBookmark(id);
  verifyBookmarkExists(id);
  updateBookmark(id);
  deleteBookmark(id);
  tryToDeleteANonExistingBookmark(id);
  verifyBookmarkDoesNotExist(id);
});

// Story: crud:Bookmark:nondet:1:2
bthread("crud:Bookmark:nondet:1:2", function () {
  let id = 851;
  createBookmark(id);
  tryToAddExistingBookmark(id);
  updateBookmark(id);
  verifyBookmarkExists(id);
  deleteBookmark(id);
  tryToDeleteANonExistingBookmark(id);
  verifyBookmarkDoesNotExist(id);
});

// Story: crud:Bookmark:nondet:negative:dup-add
bthread("crud:Bookmark:nondet:negative:dup-add", function () {
  let id = 856;
  createBookmark(id);
  verifyBookmarkExists(id);
  tryToAddExistingBookmark(id);
  verifyBookmarkExists(id);
});

// Monitor: Bookmark Addition Verification
bthread("monitor:Bookmark:addition", function () {
  while (true) {
    let item = waitForAnyBookmarkAdded();
    block(matchDeletedBookmark(item.id), function () {
      verifyBookmarkExists(item.id);
    });
  }
});

// Monitor: Bookmark Deletion Verification
bthread("monitor:Bookmark:deletion", function () {
  while (true) {
    let item = waitForAnyBookmarkDeleted();
    block(matchAddedBookmark(item.id), function () {
      verifyBookmarkDoesNotExist(item.id);
    });
  }
});

// Story: crud:ConfigContextProfile:nondet:1:1
bthread("crud:ConfigContextProfile:nondet:1:1", function () {
  let id = 860;
  createConfigContextProfile(id);
  waitForConfigContextProfileAdded(id);
  tryToAddExistingConfigContextProfile(id);
  verifyConfigContextProfileExists(id);
  updateConfigContextProfile(id);
  deleteConfigContextProfile(id);
  tryToDeleteANonExistingConfigContextProfile(id);
  verifyConfigContextProfileDoesNotExist(id);
});

// Story: crud:ConfigContextProfile:nondet:1:2
bthread("crud:ConfigContextProfile:nondet:1:2", function () {
  let id = 861;
  createConfigContextProfile(id);
  tryToAddExistingConfigContextProfile(id);
  updateConfigContextProfile(id);
  verifyConfigContextProfileExists(id);
  deleteConfigContextProfile(id);
  tryToDeleteANonExistingConfigContextProfile(id);
  verifyConfigContextProfileDoesNotExist(id);
});

// Story: crud:ConfigContextProfile:nondet:negative:dup-add
bthread("crud:ConfigContextProfile:nondet:negative:dup-add", function () {
  let id = 866;
  createConfigContextProfile(id);
  verifyConfigContextProfileExists(id);
  tryToAddExistingConfigContextProfile(id);
  verifyConfigContextProfileExists(id);
});

// Monitor: ConfigContextProfile Addition Verification
bthread("monitor:ConfigContextProfile:addition", function () {
  while (true) {
    let item = waitForAnyConfigContextProfileAdded();
    block(matchDeletedConfigContextProfile(item.id), function () {
      verifyConfigContextProfileExists(item.id);
    });
  }
});

// Monitor: ConfigContextProfile Deletion Verification
bthread("monitor:ConfigContextProfile:deletion", function () {
  while (true) {
    let item = waitForAnyConfigContextProfileDeleted();
    block(matchAddedConfigContextProfile(item.id), function () {
      verifyConfigContextProfileDoesNotExist(item.id);
    });
  }
});

// Story: crud:ConfigContext:nondet:1:1
bthread("crud:ConfigContext:nondet:1:1", function () {
  let id = 870;
  createConfigContext(id);
  waitForConfigContextAdded(id);
  tryToAddExistingConfigContext(id);
  verifyConfigContextExists(id);
  updateConfigContext(id);
  deleteConfigContext(id);
  tryToDeleteANonExistingConfigContext(id);
  verifyConfigContextDoesNotExist(id);
});

// Story: crud:ConfigContext:nondet:1:2
bthread("crud:ConfigContext:nondet:1:2", function () {
  let id = 871;
  createConfigContext(id);
  tryToAddExistingConfigContext(id);
  updateConfigContext(id);
  verifyConfigContextExists(id);
  deleteConfigContext(id);
  tryToDeleteANonExistingConfigContext(id);
  verifyConfigContextDoesNotExist(id);
});

// Story: crud:ConfigContext:nondet:negative:dup-add
bthread("crud:ConfigContext:nondet:negative:dup-add", function () {
  let id = 876;
  createConfigContext(id);
  verifyConfigContextExists(id);
  tryToAddExistingConfigContext(id);
  verifyConfigContextExists(id);
});

// Monitor: ConfigContext Addition Verification
bthread("monitor:ConfigContext:addition", function () {
  while (true) {
    let item = waitForAnyConfigContextAdded();
    block(matchDeletedConfigContext(item.id), function () {
      verifyConfigContextExists(item.id);
    });
  }
});

// Monitor: ConfigContext Deletion Verification
bthread("monitor:ConfigContext:deletion", function () {
  while (true) {
    let item = waitForAnyConfigContextDeleted();
    block(matchAddedConfigContext(item.id), function () {
      verifyConfigContextDoesNotExist(item.id);
    });
  }
});

// Story: crud:CustomFieldChoiceSet:nondet:1:1
bthread("crud:CustomFieldChoiceSet:nondet:1:1", function () {
  let choices = "choices_890";
  let _default = "default_890";
  let description = "description_890";
  let group_name = "group_name_890";
  let id = 890;
  let is_cloneable = "is_cloneable_890";
  let label = "label_890";
  let name = "name_890";
  let required = "required_890";
  let ui_editable = "ui_editable_890";
  let ui_visible = "ui_visible_890";
  let unique = "unique_890";
  let validation_maximum = "validation_maximum_890";
  let validation_minimum = "validation_minimum_890";
  let validation_regex = "validation_regex_890";
  let weight = "weight_890";
  createCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  waitForCustomFieldChoiceSetAdded(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldChoiceSetExists(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  updateCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  deleteCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToDeleteANonExistingCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldChoiceSetDoesNotExist(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomFieldChoiceSet:nondet:1:2
bthread("crud:CustomFieldChoiceSet:nondet:1:2", function () {
  let choices = "choices_891";
  let _default = "default_891";
  let description = "description_891";
  let group_name = "group_name_891";
  let id = 891;
  let is_cloneable = "is_cloneable_891";
  let label = "label_891";
  let name = "name_891";
  let required = "required_891";
  let ui_editable = "ui_editable_891";
  let ui_visible = "ui_visible_891";
  let unique = "unique_891";
  let validation_maximum = "validation_maximum_891";
  let validation_minimum = "validation_minimum_891";
  let validation_regex = "validation_regex_891";
  let weight = "weight_891";
  createCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  updateCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldChoiceSetExists(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  deleteCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToDeleteANonExistingCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldChoiceSetDoesNotExist(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomFieldChoiceSet:nondet:negative:dup-add
bthread("crud:CustomFieldChoiceSet:nondet:negative:dup-add", function () {
  let choices = "choices_896";
  let _default = "default_896";
  let description = "description_896";
  let group_name = "group_name_896";
  let id = 896;
  let is_cloneable = "is_cloneable_896";
  let label = "label_896";
  let name = "name_896";
  let required = "required_896";
  let ui_editable = "ui_editable_896";
  let ui_visible = "ui_visible_896";
  let unique = "unique_896";
  let validation_maximum = "validation_maximum_896";
  let validation_minimum = "validation_minimum_896";
  let validation_regex = "validation_regex_896";
  let weight = "weight_896";
  createCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldChoiceSetExists(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomFieldChoiceSet(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldChoiceSetExists(choices, _default, description, group_name, id, is_cloneable, label, name, required, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Monitor: CustomFieldChoiceSet Addition Verification
bthread("monitor:CustomFieldChoiceSet:addition", function () {
  while (true) {
    let item = waitForAnyCustomFieldChoiceSetAdded();
    block(matchDeletedCustomFieldChoiceSet(item.choices, item._default, item.description, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.required, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight), function () {
      verifyCustomFieldChoiceSetExists(item.choices, item._default, item.description, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.required, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight);
    });
  }
});

// Monitor: CustomFieldChoiceSet Deletion Verification
bthread("monitor:CustomFieldChoiceSet:deletion", function () {
  while (true) {
    let item = waitForAnyCustomFieldChoiceSetDeleted();
    block(matchAddedCustomFieldChoiceSet(item.choices, item._default, item.description, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.required, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight), function () {
      verifyCustomFieldChoiceSetDoesNotExist(item.choices, item._default, item.description, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.required, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight);
    });
  }
});

// Story: crud:CustomField:nondet:1:1
bthread("crud:CustomField:nondet:1:1", function () {
  let choice_set = "choice_set_900";
  let _default = "default_900";
  let description = "description_900";
  let filter_logic = "filter_logic_900";
  let group_name = "group_name_900";
  let id = 900;
  let is_cloneable = "is_cloneable_900";
  let label = "label_900";
  let name = "name_900";
  let object_type = "object_type_900";
  let required = "required_900";
  let search_weight = "search_weight_900";
  let type = "type_900";
  let ui_editable = "ui_editable_900";
  let ui_visible = "ui_visible_900";
  let unique = "unique_900";
  let validation_maximum = "validation_maximum_900";
  let validation_minimum = "validation_minimum_900";
  let validation_regex = "validation_regex_900";
  let weight = "weight_900";
  createCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  waitForCustomFieldAdded(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  updateCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  deleteCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToDeleteANonExistingCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldDoesNotExist(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomField:nondet:1:2
bthread("crud:CustomField:nondet:1:2", function () {
  let choice_set = "choice_set_901";
  let _default = "default_901";
  let description = "description_901";
  let filter_logic = "filter_logic_901";
  let group_name = "group_name_901";
  let id = 901;
  let is_cloneable = "is_cloneable_901";
  let label = "label_901";
  let name = "name_901";
  let object_type = "object_type_901";
  let required = "required_901";
  let search_weight = "search_weight_901";
  let type = "type_901";
  let ui_editable = "ui_editable_901";
  let ui_visible = "ui_visible_901";
  let unique = "unique_901";
  let validation_maximum = "validation_maximum_901";
  let validation_minimum = "validation_minimum_901";
  let validation_regex = "validation_regex_901";
  let weight = "weight_901";
  createCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  updateCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  deleteCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToDeleteANonExistingCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldDoesNotExist(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomField:nondet:negative:dup-add
bthread("crud:CustomField:nondet:negative:dup-add", function () {
  let choice_set = "choice_set_906";
  let _default = "default_906";
  let description = "description_906";
  let filter_logic = "filter_logic_906";
  let group_name = "group_name_906";
  let id = 906;
  let is_cloneable = "is_cloneable_906";
  let label = "label_906";
  let name = "name_906";
  let object_type = "object_type_906";
  let required = "required_906";
  let search_weight = "search_weight_906";
  let type = "type_906";
  let ui_editable = "ui_editable_906";
  let ui_visible = "ui_visible_906";
  let unique = "unique_906";
  let validation_maximum = "validation_maximum_906";
  let validation_minimum = "validation_minimum_906";
  let validation_regex = "validation_regex_906";
  let weight = "weight_906";
  createCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomField(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Monitor: CustomField Addition Verification
bthread("monitor:CustomField:addition", function () {
  while (true) {
    let item = waitForAnyCustomFieldAdded();
    block(matchDeletedCustomField(item.choice_set, item._default, item.description, item.filter_logic, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.object_type, item.required, item.search_weight, item.type, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight), function () {
      verifyCustomFieldExists(item.choice_set, item._default, item.description, item.filter_logic, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.object_type, item.required, item.search_weight, item.type, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight);
    });
  }
});

// Monitor: CustomField Deletion Verification
bthread("monitor:CustomField:deletion", function () {
  while (true) {
    let item = waitForAnyCustomFieldDeleted();
    block(matchAddedCustomField(item.choice_set, item._default, item.description, item.filter_logic, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.object_type, item.required, item.search_weight, item.type, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight), function () {
      verifyCustomFieldDoesNotExist(item.choice_set, item._default, item.description, item.filter_logic, item.group_name, item.id, item.is_cloneable, item.label, item.name, item.object_type, item.required, item.search_weight, item.type, item.ui_editable, item.ui_visible, item.unique, item.validation_maximum, item.validation_minimum, item.validation_regex, item.weight);
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
  let weight = "weight_910";
  createCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  waitForCustomLinkAdded(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  tryToAddExistingCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  verifyCustomLinkExists(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  updateCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  deleteCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  tryToDeleteANonExistingCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  verifyCustomLinkDoesNotExist(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
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
  let weight = "weight_911";
  createCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  tryToAddExistingCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  updateCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  verifyCustomLinkExists(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  deleteCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  tryToDeleteANonExistingCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  verifyCustomLinkDoesNotExist(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
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
  let weight = "weight_916";
  createCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  verifyCustomLinkExists(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  tryToAddExistingCustomLink(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
  verifyCustomLinkExists(button_class, description, enabled, group_name, id, link_text, link_url, name, new_window, weight);
});

// Monitor: CustomLink Addition Verification
bthread("monitor:CustomLink:addition", function () {
  while (true) {
    let item = waitForAnyCustomLinkAdded();
    block(matchDeletedCustomLink(item.button_class, item.description, item.enabled, item.group_name, item.id, item.link_text, item.link_url, item.name, item.new_window, item.weight), function () {
      verifyCustomLinkExists(item.button_class, item.description, item.enabled, item.group_name, item.id, item.link_text, item.link_url, item.name, item.new_window, item.weight);
    });
  }
});

// Monitor: CustomLink Deletion Verification
bthread("monitor:CustomLink:deletion", function () {
  while (true) {
    let item = waitForAnyCustomLinkDeleted();
    block(matchAddedCustomLink(item.button_class, item.description, item.enabled, item.group_name, item.id, item.link_text, item.link_url, item.name, item.new_window, item.weight), function () {
      verifyCustomLinkDoesNotExist(item.button_class, item.description, item.enabled, item.group_name, item.id, item.link_text, item.link_url, item.name, item.new_window, item.weight);
    });
  }
});

// Story: crud:EventRule:nondet:1:1
bthread("crud:EventRule:nondet:1:1", function () {
  let id = 930;
  createEventRule(id);
  waitForEventRuleAdded(id);
  tryToAddExistingEventRule(id);
  verifyEventRuleExists(id);
  updateEventRule(id);
  deleteEventRule(id);
  tryToDeleteANonExistingEventRule(id);
  verifyEventRuleDoesNotExist(id);
});

// Story: crud:EventRule:nondet:1:2
bthread("crud:EventRule:nondet:1:2", function () {
  let id = 931;
  createEventRule(id);
  tryToAddExistingEventRule(id);
  updateEventRule(id);
  verifyEventRuleExists(id);
  deleteEventRule(id);
  tryToDeleteANonExistingEventRule(id);
  verifyEventRuleDoesNotExist(id);
});

// Story: crud:EventRule:nondet:negative:dup-add
bthread("crud:EventRule:nondet:negative:dup-add", function () {
  let id = 936;
  createEventRule(id);
  verifyEventRuleExists(id);
  tryToAddExistingEventRule(id);
  verifyEventRuleExists(id);
});

// Monitor: EventRule Addition Verification
bthread("monitor:EventRule:addition", function () {
  while (true) {
    let item = waitForAnyEventRuleAdded();
    block(matchDeletedEventRule(item.id), function () {
      verifyEventRuleExists(item.id);
    });
  }
});

// Monitor: EventRule Deletion Verification
bthread("monitor:EventRule:deletion", function () {
  while (true) {
    let item = waitForAnyEventRuleDeleted();
    block(matchAddedEventRule(item.id), function () {
      verifyEventRuleDoesNotExist(item.id);
    });
  }
});

// Story: crud:ExportTemplate:nondet:1:1
bthread("crud:ExportTemplate:nondet:1:1", function () {
  let id = 940;
  createExportTemplate(id);
  waitForExportTemplateAdded(id);
  tryToAddExistingExportTemplate(id);
  verifyExportTemplateExists(id);
  updateExportTemplate(id);
  deleteExportTemplate(id);
  tryToDeleteANonExistingExportTemplate(id);
  verifyExportTemplateDoesNotExist(id);
});

// Story: crud:ExportTemplate:nondet:1:2
bthread("crud:ExportTemplate:nondet:1:2", function () {
  let id = 941;
  createExportTemplate(id);
  tryToAddExistingExportTemplate(id);
  updateExportTemplate(id);
  verifyExportTemplateExists(id);
  deleteExportTemplate(id);
  tryToDeleteANonExistingExportTemplate(id);
  verifyExportTemplateDoesNotExist(id);
});

// Story: crud:ExportTemplate:nondet:negative:dup-add
bthread("crud:ExportTemplate:nondet:negative:dup-add", function () {
  let id = 946;
  createExportTemplate(id);
  verifyExportTemplateExists(id);
  tryToAddExistingExportTemplate(id);
  verifyExportTemplateExists(id);
});

// Monitor: ExportTemplate Addition Verification
bthread("monitor:ExportTemplate:addition", function () {
  while (true) {
    let item = waitForAnyExportTemplateAdded();
    block(matchDeletedExportTemplate(item.id), function () {
      verifyExportTemplateExists(item.id);
    });
  }
});

// Monitor: ExportTemplate Deletion Verification
bthread("monitor:ExportTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyExportTemplateDeleted();
    block(matchAddedExportTemplate(item.id), function () {
      verifyExportTemplateDoesNotExist(item.id);
    });
  }
});

// Story: crud:ImageAttachment:nondet:1:1
bthread("crud:ImageAttachment:nondet:1:1", function () {
  let id = 950;
  createImageAttachment(id);
  waitForImageAttachmentAdded(id);
  tryToAddExistingImageAttachment(id);
  verifyImageAttachmentExists(id);
  updateImageAttachment(id);
  deleteImageAttachment(id);
  tryToDeleteANonExistingImageAttachment(id);
  verifyImageAttachmentDoesNotExist(id);
});

// Story: crud:ImageAttachment:nondet:1:2
bthread("crud:ImageAttachment:nondet:1:2", function () {
  let id = 951;
  createImageAttachment(id);
  tryToAddExistingImageAttachment(id);
  updateImageAttachment(id);
  verifyImageAttachmentExists(id);
  deleteImageAttachment(id);
  tryToDeleteANonExistingImageAttachment(id);
  verifyImageAttachmentDoesNotExist(id);
});

// Story: crud:ImageAttachment:nondet:negative:dup-add
bthread("crud:ImageAttachment:nondet:negative:dup-add", function () {
  let id = 956;
  createImageAttachment(id);
  verifyImageAttachmentExists(id);
  tryToAddExistingImageAttachment(id);
  verifyImageAttachmentExists(id);
});

// Monitor: ImageAttachment Addition Verification
bthread("monitor:ImageAttachment:addition", function () {
  while (true) {
    let item = waitForAnyImageAttachmentAdded();
    block(matchDeletedImageAttachment(item.id), function () {
      verifyImageAttachmentExists(item.id);
    });
  }
});

// Monitor: ImageAttachment Deletion Verification
bthread("monitor:ImageAttachment:deletion", function () {
  while (true) {
    let item = waitForAnyImageAttachmentDeleted();
    block(matchAddedImageAttachment(item.id), function () {
      verifyImageAttachmentDoesNotExist(item.id);
    });
  }
});

// Story: crud:JournalEntry:nondet:1:1
bthread("crud:JournalEntry:nondet:1:1", function () {
  let id = 960;
  createJournalEntry(id);
  waitForJournalEntryAdded(id);
  tryToAddExistingJournalEntry(id);
  verifyJournalEntryExists(id);
  updateJournalEntry(id);
  deleteJournalEntry(id);
  tryToDeleteANonExistingJournalEntry(id);
  verifyJournalEntryDoesNotExist(id);
});

// Story: crud:JournalEntry:nondet:1:2
bthread("crud:JournalEntry:nondet:1:2", function () {
  let id = 961;
  createJournalEntry(id);
  tryToAddExistingJournalEntry(id);
  updateJournalEntry(id);
  verifyJournalEntryExists(id);
  deleteJournalEntry(id);
  tryToDeleteANonExistingJournalEntry(id);
  verifyJournalEntryDoesNotExist(id);
});

// Story: crud:JournalEntry:nondet:negative:dup-add
bthread("crud:JournalEntry:nondet:negative:dup-add", function () {
  let id = 966;
  createJournalEntry(id);
  verifyJournalEntryExists(id);
  tryToAddExistingJournalEntry(id);
  verifyJournalEntryExists(id);
});

// Monitor: JournalEntry Addition Verification
bthread("monitor:JournalEntry:addition", function () {
  while (true) {
    let item = waitForAnyJournalEntryAdded();
    block(matchDeletedJournalEntry(item.id), function () {
      verifyJournalEntryExists(item.id);
    });
  }
});

// Monitor: JournalEntry Deletion Verification
bthread("monitor:JournalEntry:deletion", function () {
  while (true) {
    let item = waitForAnyJournalEntryDeleted();
    block(matchAddedJournalEntry(item.id), function () {
      verifyJournalEntryDoesNotExist(item.id);
    });
  }
});

// Story: crud:NotificationGroup:nondet:1:1
bthread("crud:NotificationGroup:nondet:1:1", function () {
  let description = "description_970";
  let id = 970;
  let name = "name_970";
  let notifications = "notifications_970";
  let slug = "slug_970";
  createNotificationGroup(description, id, name, notifications, slug);
  waitForNotificationGroupAdded(description, id, name, notifications, slug);
  tryToAddExistingNotificationGroup(description, id, name, notifications, slug);
  verifyNotificationGroupExists(description, id, name, notifications, slug);
  updateNotificationGroup(description, id, name, notifications, slug);
  deleteNotificationGroup(description, id, name, notifications, slug);
  tryToDeleteANonExistingNotificationGroup(description, id, name, notifications, slug);
  verifyNotificationGroupDoesNotExist(description, id, name, notifications, slug);
});

// Story: crud:NotificationGroup:nondet:1:2
bthread("crud:NotificationGroup:nondet:1:2", function () {
  let description = "description_971";
  let id = 971;
  let name = "name_971";
  let notifications = "notifications_971";
  let slug = "slug_971";
  createNotificationGroup(description, id, name, notifications, slug);
  tryToAddExistingNotificationGroup(description, id, name, notifications, slug);
  updateNotificationGroup(description, id, name, notifications, slug);
  verifyNotificationGroupExists(description, id, name, notifications, slug);
  deleteNotificationGroup(description, id, name, notifications, slug);
  tryToDeleteANonExistingNotificationGroup(description, id, name, notifications, slug);
  verifyNotificationGroupDoesNotExist(description, id, name, notifications, slug);
});

// Story: crud:NotificationGroup:nondet:negative:dup-add
bthread("crud:NotificationGroup:nondet:negative:dup-add", function () {
  let description = "description_976";
  let id = 976;
  let name = "name_976";
  let notifications = "notifications_976";
  let slug = "slug_976";
  createNotificationGroup(description, id, name, notifications, slug);
  verifyNotificationGroupExists(description, id, name, notifications, slug);
  tryToAddExistingNotificationGroup(description, id, name, notifications, slug);
  verifyNotificationGroupExists(description, id, name, notifications, slug);
});

// Monitor: NotificationGroup Addition Verification
bthread("monitor:NotificationGroup:addition", function () {
  while (true) {
    let item = waitForAnyNotificationGroupAdded();
    block(matchDeletedNotificationGroup(item.description, item.id, item.name, item.notifications, item.slug), function () {
      verifyNotificationGroupExists(item.description, item.id, item.name, item.notifications, item.slug);
    });
  }
});

// Monitor: NotificationGroup Deletion Verification
bthread("monitor:NotificationGroup:deletion", function () {
  while (true) {
    let item = waitForAnyNotificationGroupDeleted();
    block(matchAddedNotificationGroup(item.description, item.id, item.name, item.notifications, item.slug), function () {
      verifyNotificationGroupDoesNotExist(item.description, item.id, item.name, item.notifications, item.slug);
    });
  }
});

// Story: crud:Notification:nondet:1:1
bthread("crud:Notification:nondet:1:1", function () {
  let assigned_object_id = 980;
  let assigned_object_type = "assigned_object_type_980";
  let created = "created_980";
  let description = "description_980";
  let group = "group_980";
  let id = 980;
  let last_updated = "last_updated_980";
  let level = "level_980";
  let name = "name_980";
  let read = "read_980";
  let status = "status_980";
  let url = "url_980";
  let user = "user_980";
  createNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  waitForNotificationAdded(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  tryToAddExistingNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  verifyNotificationExists(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  updateNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  deleteNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  tryToDeleteANonExistingNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  verifyNotificationDoesNotExist(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
});

// Story: crud:Notification:nondet:1:2
bthread("crud:Notification:nondet:1:2", function () {
  let assigned_object_id = 981;
  let assigned_object_type = "assigned_object_type_981";
  let created = "created_981";
  let description = "description_981";
  let group = "group_981";
  let id = 981;
  let last_updated = "last_updated_981";
  let level = "level_981";
  let name = "name_981";
  let read = "read_981";
  let status = "status_981";
  let url = "url_981";
  let user = "user_981";
  createNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  tryToAddExistingNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  updateNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  verifyNotificationExists(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  deleteNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  tryToDeleteANonExistingNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  verifyNotificationDoesNotExist(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
});

// Story: crud:Notification:nondet:negative:dup-add
bthread("crud:Notification:nondet:negative:dup-add", function () {
  let assigned_object_id = 986;
  let assigned_object_type = "assigned_object_type_986";
  let created = "created_986";
  let description = "description_986";
  let group = "group_986";
  let id = 986;
  let last_updated = "last_updated_986";
  let level = "level_986";
  let name = "name_986";
  let read = "read_986";
  let status = "status_986";
  let url = "url_986";
  let user = "user_986";
  createNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  verifyNotificationExists(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  tryToAddExistingNotification(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
  verifyNotificationExists(assigned_object_id, assigned_object_type, created, description, group, id, last_updated, level, name, read, status, url, user);
});

// Monitor: Notification Addition Verification
bthread("monitor:Notification:addition", function () {
  while (true) {
    let item = waitForAnyNotificationAdded();
    block(matchDeletedNotification(item.assigned_object_id, item.assigned_object_type, item.created, item.description, item.group, item.id, item.last_updated, item.level, item.name, item.read, item.status, item.url, item.user), function () {
      verifyNotificationExists(item.assigned_object_id, item.assigned_object_type, item.created, item.description, item.group, item.id, item.last_updated, item.level, item.name, item.read, item.status, item.url, item.user);
    });
  }
});

// Monitor: Notification Deletion Verification
bthread("monitor:Notification:deletion", function () {
  while (true) {
    let item = waitForAnyNotificationDeleted();
    block(matchAddedNotification(item.assigned_object_id, item.assigned_object_type, item.created, item.description, item.group, item.id, item.last_updated, item.level, item.name, item.read, item.status, item.url, item.user), function () {
      verifyNotificationDoesNotExist(item.assigned_object_id, item.assigned_object_type, item.created, item.description, item.group, item.id, item.last_updated, item.level, item.name, item.read, item.status, item.url, item.user);
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
  let shared = "shared_990";
  let slug = "slug_990";
  let user = "user_990";
  let weight = "weight_990";
  createSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  waitForSavedFilterAdded(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  tryToAddExistingSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  updateSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  deleteSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  tryToDeleteANonExistingSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  verifySavedFilterDoesNotExist(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
});

// Story: crud:SavedFilter:nondet:1:2
bthread("crud:SavedFilter:nondet:1:2", function () {
  let description = "description_991";
  let enabled = "enabled_991";
  let filters = "filters_991";
  let id = 991;
  let name = "name_991";
  let object_type = "object_type_991";
  let shared = "shared_991";
  let slug = "slug_991";
  let user = "user_991";
  let weight = "weight_991";
  createSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  tryToAddExistingSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  updateSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  deleteSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  tryToDeleteANonExistingSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  verifySavedFilterDoesNotExist(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
});

// Story: crud:SavedFilter:nondet:negative:dup-add
bthread("crud:SavedFilter:nondet:negative:dup-add", function () {
  let description = "description_996";
  let enabled = "enabled_996";
  let filters = "filters_996";
  let id = 996;
  let name = "name_996";
  let object_type = "object_type_996";
  let shared = "shared_996";
  let slug = "slug_996";
  let user = "user_996";
  let weight = "weight_996";
  createSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  tryToAddExistingSavedFilter(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, filters, id, name, object_type, shared, slug, user, weight);
});

// Monitor: SavedFilter Addition Verification
bthread("monitor:SavedFilter:addition", function () {
  while (true) {
    let item = waitForAnySavedFilterAdded();
    block(matchDeletedSavedFilter(item.description, item.enabled, item.filters, item.id, item.name, item.object_type, item.shared, item.slug, item.user, item.weight), function () {
      verifySavedFilterExists(item.description, item.enabled, item.filters, item.id, item.name, item.object_type, item.shared, item.slug, item.user, item.weight);
    });
  }
});

// Monitor: SavedFilter Deletion Verification
bthread("monitor:SavedFilter:deletion", function () {
  while (true) {
    let item = waitForAnySavedFilterDeleted();
    block(matchAddedSavedFilter(item.description, item.enabled, item.filters, item.id, item.name, item.object_type, item.shared, item.slug, item.user, item.weight), function () {
      verifySavedFilterDoesNotExist(item.description, item.enabled, item.filters, item.id, item.name, item.object_type, item.shared, item.slug, item.user, item.weight);
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
  createSubscription(id);
  waitForSubscriptionAdded(id);
  tryToAddExistingSubscription(id);
  verifySubscriptionExists(id);
  updateSubscription(id);
  deleteSubscription(id);
  tryToDeleteANonExistingSubscription(id);
  verifySubscriptionDoesNotExist(id);
});

// Story: crud:Subscription:nondet:1:2
bthread("crud:Subscription:nondet:1:2", function () {
  let id = 1011;
  createSubscription(id);
  tryToAddExistingSubscription(id);
  updateSubscription(id);
  verifySubscriptionExists(id);
  deleteSubscription(id);
  tryToDeleteANonExistingSubscription(id);
  verifySubscriptionDoesNotExist(id);
});

// Story: crud:Subscription:nondet:negative:dup-add
bthread("crud:Subscription:nondet:negative:dup-add", function () {
  let id = 1016;
  createSubscription(id);
  verifySubscriptionExists(id);
  tryToAddExistingSubscription(id);
  verifySubscriptionExists(id);
});

// Monitor: Subscription Addition Verification
bthread("monitor:Subscription:addition", function () {
  while (true) {
    let item = waitForAnySubscriptionAdded();
    block(matchDeletedSubscription(item.id), function () {
      verifySubscriptionExists(item.id);
    });
  }
});

// Monitor: Subscription Deletion Verification
bthread("monitor:Subscription:deletion", function () {
  while (true) {
    let item = waitForAnySubscriptionDeleted();
    block(matchAddedSubscription(item.id), function () {
      verifySubscriptionDoesNotExist(item.id);
    });
  }
});

// Story: crud:TableConfig:nondet:1:1
bthread("crud:TableConfig:nondet:1:1", function () {
  let id = 1020;
  let name = "name_1020";
  createTableConfig(id, name);
  waitForTableConfigAdded(id, name);
  tryToAddExistingTableConfig(id, name);
  verifyTableConfigExists(id, name);
  updateTableConfig(id, name);
  deleteTableConfig(id, name);
  tryToDeleteANonExistingTableConfig(id, name);
  verifyTableConfigDoesNotExist(id, name);
});

// Story: crud:TableConfig:nondet:1:2
bthread("crud:TableConfig:nondet:1:2", function () {
  let id = 1021;
  let name = "name_1021";
  createTableConfig(id, name);
  tryToAddExistingTableConfig(id, name);
  updateTableConfig(id, name);
  verifyTableConfigExists(id, name);
  deleteTableConfig(id, name);
  tryToDeleteANonExistingTableConfig(id, name);
  verifyTableConfigDoesNotExist(id, name);
});

// Story: crud:TableConfig:nondet:negative:dup-add
bthread("crud:TableConfig:nondet:negative:dup-add", function () {
  let id = 1026;
  let name = "name_1026";
  createTableConfig(id, name);
  verifyTableConfigExists(id, name);
  tryToAddExistingTableConfig(id, name);
  verifyTableConfigExists(id, name);
});

// Monitor: TableConfig Addition Verification
bthread("monitor:TableConfig:addition", function () {
  while (true) {
    let item = waitForAnyTableConfigAdded();
    block(matchDeletedTableConfig(item.id, item.name), function () {
      verifyTableConfigExists(item.id, item.name);
    });
  }
});

// Monitor: TableConfig Deletion Verification
bthread("monitor:TableConfig:deletion", function () {
  while (true) {
    let item = waitForAnyTableConfigDeleted();
    block(matchAddedTableConfig(item.id, item.name), function () {
      verifyTableConfigDoesNotExist(item.id, item.name);
    });
  }
});

// Story: crud:Tag:nondet:1:1
bthread("crud:Tag:nondet:1:1", function () {
  let id = 1040;
  let name = "name_1040";
  let slug = "slug_1040";
  createTag(id, name, slug);
  waitForTagAdded(id, name, slug);
  tryToAddExistingTag(id, name, slug);
  verifyTagExists(id, name, slug);
  updateTag(id, name, slug);
  deleteTag(id, name, slug);
  tryToDeleteANonExistingTag(id, name, slug);
  verifyTagDoesNotExist(id, name, slug);
});

// Story: crud:Tag:nondet:1:2
bthread("crud:Tag:nondet:1:2", function () {
  let id = 1041;
  let name = "name_1041";
  let slug = "slug_1041";
  createTag(id, name, slug);
  tryToAddExistingTag(id, name, slug);
  updateTag(id, name, slug);
  verifyTagExists(id, name, slug);
  deleteTag(id, name, slug);
  tryToDeleteANonExistingTag(id, name, slug);
  verifyTagDoesNotExist(id, name, slug);
});

// Story: crud:Tag:nondet:negative:dup-add
bthread("crud:Tag:nondet:negative:dup-add", function () {
  let id = 1046;
  let name = "name_1046";
  let slug = "slug_1046";
  createTag(id, name, slug);
  verifyTagExists(id, name, slug);
  tryToAddExistingTag(id, name, slug);
  verifyTagExists(id, name, slug);
});

// Monitor: Tag Addition Verification
bthread("monitor:Tag:addition", function () {
  while (true) {
    let item = waitForAnyTagAdded();
    block(matchDeletedTag(item.id, item.name, item.slug), function () {
      verifyTagExists(item.id, item.name, item.slug);
    });
  }
});

// Monitor: Tag Deletion Verification
bthread("monitor:Tag:deletion", function () {
  while (true) {
    let item = waitForAnyTagDeleted();
    block(matchAddedTag(item.id, item.name, item.slug), function () {
      verifyTagDoesNotExist(item.id, item.name, item.slug);
    });
  }
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let id = 1050;
  let name = "name_1050";
  createWebhook(id, name);
  waitForWebhookAdded(id, name);
  tryToAddExistingWebhook(id, name);
  verifyWebhookExists(id, name);
  updateWebhook(id, name);
  deleteWebhook(id, name);
  tryToDeleteANonExistingWebhook(id, name);
  verifyWebhookDoesNotExist(id, name);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let id = 1051;
  let name = "name_1051";
  createWebhook(id, name);
  tryToAddExistingWebhook(id, name);
  updateWebhook(id, name);
  verifyWebhookExists(id, name);
  deleteWebhook(id, name);
  tryToDeleteANonExistingWebhook(id, name);
  verifyWebhookDoesNotExist(id, name);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let id = 1056;
  let name = "name_1056";
  createWebhook(id, name);
  verifyWebhookExists(id, name);
  tryToAddExistingWebhook(id, name);
  verifyWebhookExists(id, name);
});

// Monitor: Webhook Addition Verification
bthread("monitor:Webhook:addition", function () {
  while (true) {
    let item = waitForAnyWebhookAdded();
    block(matchDeletedWebhook(item.id, item.name), function () {
      verifyWebhookExists(item.id, item.name);
    });
  }
});

// Monitor: Webhook Deletion Verification
bthread("monitor:Webhook:deletion", function () {
  while (true) {
    let item = waitForAnyWebhookDeleted();
    block(matchAddedWebhook(item.id, item.name), function () {
      verifyWebhookDoesNotExist(item.id, item.name);
    });
  }
});

// Story: crud:Aggregate:nondet:1:1
bthread("crud:Aggregate:nondet:1:1", function () {
  let id = 1060;
  createAggregate(id);
  waitForAggregateAdded(id);
  tryToAddExistingAggregate(id);
  verifyAggregateExists(id);
  updateAggregate(id);
  deleteAggregate(id);
  tryToDeleteANonExistingAggregate(id);
  verifyAggregateDoesNotExist(id);
});

// Story: crud:Aggregate:nondet:1:2
bthread("crud:Aggregate:nondet:1:2", function () {
  let id = 1061;
  createAggregate(id);
  tryToAddExistingAggregate(id);
  updateAggregate(id);
  verifyAggregateExists(id);
  deleteAggregate(id);
  tryToDeleteANonExistingAggregate(id);
  verifyAggregateDoesNotExist(id);
});

// Story: crud:Aggregate:nondet:negative:dup-add
bthread("crud:Aggregate:nondet:negative:dup-add", function () {
  let id = 1066;
  createAggregate(id);
  verifyAggregateExists(id);
  tryToAddExistingAggregate(id);
  verifyAggregateExists(id);
});

// Monitor: Aggregate Addition Verification
bthread("monitor:Aggregate:addition", function () {
  while (true) {
    let item = waitForAnyAggregateAdded();
    block(matchDeletedAggregate(item.id), function () {
      verifyAggregateExists(item.id);
    });
  }
});

// Monitor: Aggregate Deletion Verification
bthread("monitor:Aggregate:deletion", function () {
  while (true) {
    let item = waitForAnyAggregateDeleted();
    block(matchAddedAggregate(item.id), function () {
      verifyAggregateDoesNotExist(item.id);
    });
  }
});

// Story: crud:ASNRange:nondet:1:1
bthread("crud:ASNRange:nondet:1:1", function () {
  let id = 1070;
  createASNRange(id);
  waitForASNRangeAdded(id);
  tryToAddExistingASNRange(id);
  verifyASNRangeExists(id);
  updateASNRange(id);
  deleteASNRange(id);
  tryToDeleteANonExistingASNRange(id);
  verifyASNRangeDoesNotExist(id);
});

// Story: crud:ASNRange:nondet:1:2
bthread("crud:ASNRange:nondet:1:2", function () {
  let id = 1071;
  createASNRange(id);
  tryToAddExistingASNRange(id);
  updateASNRange(id);
  verifyASNRangeExists(id);
  deleteASNRange(id);
  tryToDeleteANonExistingASNRange(id);
  verifyASNRangeDoesNotExist(id);
});

// Story: crud:ASNRange:nondet:negative:dup-add
bthread("crud:ASNRange:nondet:negative:dup-add", function () {
  let id = 1076;
  createASNRange(id);
  verifyASNRangeExists(id);
  tryToAddExistingASNRange(id);
  verifyASNRangeExists(id);
});

// Monitor: ASNRange Addition Verification
bthread("monitor:ASNRange:addition", function () {
  while (true) {
    let item = waitForAnyASNRangeAdded();
    block(matchDeletedASNRange(item.id), function () {
      verifyASNRangeExists(item.id);
    });
  }
});

// Monitor: ASNRange Deletion Verification
bthread("monitor:ASNRange:deletion", function () {
  while (true) {
    let item = waitForAnyASNRangeDeleted();
    block(matchAddedASNRange(item.id), function () {
      verifyASNRangeDoesNotExist(item.id);
    });
  }
});

// Story: crud:ASN:nondet:1:1
bthread("crud:ASN:nondet:1:1", function () {
  let id = 1080;
  createASN(id);
  waitForASNAdded(id);
  tryToAddExistingASN(id);
  verifyASNExists(id);
  updateASN(id);
  deleteASN(id);
  tryToDeleteANonExistingASN(id);
  verifyASNDoesNotExist(id);
});

// Story: crud:ASN:nondet:1:2
bthread("crud:ASN:nondet:1:2", function () {
  let id = 1081;
  createASN(id);
  tryToAddExistingASN(id);
  updateASN(id);
  verifyASNExists(id);
  deleteASN(id);
  tryToDeleteANonExistingASN(id);
  verifyASNDoesNotExist(id);
});

// Story: crud:ASN:nondet:negative:dup-add
bthread("crud:ASN:nondet:negative:dup-add", function () {
  let id = 1086;
  createASN(id);
  verifyASNExists(id);
  tryToAddExistingASN(id);
  verifyASNExists(id);
});

// Monitor: ASN Addition Verification
bthread("monitor:ASN:addition", function () {
  while (true) {
    let item = waitForAnyASNAdded();
    block(matchDeletedASN(item.id), function () {
      verifyASNExists(item.id);
    });
  }
});

// Monitor: ASN Deletion Verification
bthread("monitor:ASN:deletion", function () {
  while (true) {
    let item = waitForAnyASNDeleted();
    block(matchAddedASN(item.id), function () {
      verifyASNDoesNotExist(item.id);
    });
  }
});

// Story: crud:FHRPGroupAssignment:nondet:1:1
bthread("crud:FHRPGroupAssignment:nondet:1:1", function () {
  let id = 1090;
  createFHRPGroupAssignment(id);
  waitForFHRPGroupAssignmentAdded(id);
  tryToAddExistingFHRPGroupAssignment(id);
  verifyFHRPGroupAssignmentExists(id);
  updateFHRPGroupAssignment(id);
  deleteFHRPGroupAssignment(id);
  tryToDeleteANonExistingFHRPGroupAssignment(id);
  verifyFHRPGroupAssignmentDoesNotExist(id);
});

// Story: crud:FHRPGroupAssignment:nondet:1:2
bthread("crud:FHRPGroupAssignment:nondet:1:2", function () {
  let id = 1091;
  createFHRPGroupAssignment(id);
  tryToAddExistingFHRPGroupAssignment(id);
  updateFHRPGroupAssignment(id);
  verifyFHRPGroupAssignmentExists(id);
  deleteFHRPGroupAssignment(id);
  tryToDeleteANonExistingFHRPGroupAssignment(id);
  verifyFHRPGroupAssignmentDoesNotExist(id);
});

// Story: crud:FHRPGroupAssignment:nondet:negative:dup-add
bthread("crud:FHRPGroupAssignment:nondet:negative:dup-add", function () {
  let id = 1096;
  createFHRPGroupAssignment(id);
  verifyFHRPGroupAssignmentExists(id);
  tryToAddExistingFHRPGroupAssignment(id);
  verifyFHRPGroupAssignmentExists(id);
});

// Monitor: FHRPGroupAssignment Addition Verification
bthread("monitor:FHRPGroupAssignment:addition", function () {
  while (true) {
    let item = waitForAnyFHRPGroupAssignmentAdded();
    block(matchDeletedFHRPGroupAssignment(item.id), function () {
      verifyFHRPGroupAssignmentExists(item.id);
    });
  }
});

// Monitor: FHRPGroupAssignment Deletion Verification
bthread("monitor:FHRPGroupAssignment:deletion", function () {
  while (true) {
    let item = waitForAnyFHRPGroupAssignmentDeleted();
    block(matchAddedFHRPGroupAssignment(item.id), function () {
      verifyFHRPGroupAssignmentDoesNotExist(item.id);
    });
  }
});

// Story: crud:FHRPGroup:nondet:1:1
bthread("crud:FHRPGroup:nondet:1:1", function () {
  let auth_key = "auth_key_1100";
  let auth_type = "auth_type_1100";
  let description = "description_1100";
  let id = 1100;
  let name = "name_1100";
  let protocol = "protocol_1100";
  let slug = "slug_1100";
  createFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug);
  waitForFHRPGroupAdded(auth_key, auth_type, description, id, name, protocol, slug);
  tryToAddExistingFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug);
  verifyFHRPGroupExists(auth_key, auth_type, description, id, name, protocol, slug);
  updateFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug);
  deleteFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug);
  tryToDeleteANonExistingFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug);
  verifyFHRPGroupDoesNotExist(auth_key, auth_type, description, id, name, protocol, slug);
});

// Story: crud:FHRPGroup:nondet:1:2
bthread("crud:FHRPGroup:nondet:1:2", function () {
  let auth_key = "auth_key_1101";
  let auth_type = "auth_type_1101";
  let description = "description_1101";
  let id = 1101;
  let name = "name_1101";
  let protocol = "protocol_1101";
  let slug = "slug_1101";
  createFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug);
  tryToAddExistingFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug);
  updateFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug);
  verifyFHRPGroupExists(auth_key, auth_type, description, id, name, protocol, slug);
  deleteFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug);
  tryToDeleteANonExistingFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug);
  verifyFHRPGroupDoesNotExist(auth_key, auth_type, description, id, name, protocol, slug);
});

// Story: crud:FHRPGroup:nondet:negative:dup-add
bthread("crud:FHRPGroup:nondet:negative:dup-add", function () {
  let auth_key = "auth_key_1106";
  let auth_type = "auth_type_1106";
  let description = "description_1106";
  let id = 1106;
  let name = "name_1106";
  let protocol = "protocol_1106";
  let slug = "slug_1106";
  createFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug);
  verifyFHRPGroupExists(auth_key, auth_type, description, id, name, protocol, slug);
  tryToAddExistingFHRPGroup(auth_key, auth_type, description, id, name, protocol, slug);
  verifyFHRPGroupExists(auth_key, auth_type, description, id, name, protocol, slug);
});

// Monitor: FHRPGroup Addition Verification
bthread("monitor:FHRPGroup:addition", function () {
  while (true) {
    let item = waitForAnyFHRPGroupAdded();
    block(matchDeletedFHRPGroup(item.auth_key, item.auth_type, item.description, item.id, item.name, item.protocol, item.slug), function () {
      verifyFHRPGroupExists(item.auth_key, item.auth_type, item.description, item.id, item.name, item.protocol, item.slug);
    });
  }
});

// Monitor: FHRPGroup Deletion Verification
bthread("monitor:FHRPGroup:deletion", function () {
  while (true) {
    let item = waitForAnyFHRPGroupDeleted();
    block(matchAddedFHRPGroup(item.auth_key, item.auth_type, item.description, item.id, item.name, item.protocol, item.slug), function () {
      verifyFHRPGroupDoesNotExist(item.auth_key, item.auth_type, item.description, item.id, item.name, item.protocol, item.slug);
    });
  }
});

// Story: crud:IPAddress:nondet:1:1
bthread("crud:IPAddress:nondet:1:1", function () {
  let address = "address_1110";
  let assigned_object_id = 1110;
  let assigned_object_type = "assigned_object_type_1110";
  let assigned_to_interface = "assigned_to_interface_1110";
  let description = "description_1110";
  let dns_name = "dns_name_1110";
  let id = 1110;
  let _interface = "interface_1110";
  let nat_inside = "nat_inside_1110";
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
  createIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  waitForIPAddressAdded(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  updateIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  deleteIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  tryToDeleteANonExistingIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  verifyIPAddressDoesNotExist(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
});

// Story: crud:IPAddress:nondet:1:2
bthread("crud:IPAddress:nondet:1:2", function () {
  let address = "address_1111";
  let assigned_object_id = 1111;
  let assigned_object_type = "assigned_object_type_1111";
  let assigned_to_interface = "assigned_to_interface_1111";
  let description = "description_1111";
  let dns_name = "dns_name_1111";
  let id = 1111;
  let _interface = "interface_1111";
  let nat_inside = "nat_inside_1111";
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
  createIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  updateIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  deleteIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  tryToDeleteANonExistingIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  verifyIPAddressDoesNotExist(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
});

// Story: crud:IPAddress:nondet:negative:dup-add
bthread("crud:IPAddress:nondet:negative:dup-add", function () {
  let address = "address_1116";
  let assigned_object_id = 1116;
  let assigned_object_type = "assigned_object_type_1116";
  let assigned_to_interface = "assigned_to_interface_1116";
  let description = "description_1116";
  let dns_name = "dns_name_1116";
  let id = 1116;
  let _interface = "interface_1116";
  let nat_inside = "nat_inside_1116";
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
  createIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, assigned_to_interface, description, dns_name, id, _interface, nat_inside, role, service, status, tags, tenant, tenant_id, vrf, vrf_id);
});

// Monitor: IPAddress Addition Verification
bthread("monitor:IPAddress:addition", function () {
  while (true) {
    let item = waitForAnyIPAddressAdded();
    block(matchDeletedIPAddress(item.address, item.assigned_object_id, item.assigned_object_type, item.assigned_to_interface, item.description, item.dns_name, item.id, item._interface, item.nat_inside, item.role, item.service, item.status, item.tags, item.tenant, item.tenant_id, item.vrf, item.vrf_id), function () {
      verifyIPAddressExists(item.address, item.assigned_object_id, item.assigned_object_type, item.assigned_to_interface, item.description, item.dns_name, item.id, item._interface, item.nat_inside, item.role, item.service, item.status, item.tags, item.tenant, item.tenant_id, item.vrf, item.vrf_id);
    });
  }
});

// Monitor: IPAddress Deletion Verification
bthread("monitor:IPAddress:deletion", function () {
  while (true) {
    let item = waitForAnyIPAddressDeleted();
    block(matchAddedIPAddress(item.address, item.assigned_object_id, item.assigned_object_type, item.assigned_to_interface, item.description, item.dns_name, item.id, item._interface, item.nat_inside, item.role, item.service, item.status, item.tags, item.tenant, item.tenant_id, item.vrf, item.vrf_id), function () {
      verifyIPAddressDoesNotExist(item.address, item.assigned_object_id, item.assigned_object_type, item.assigned_to_interface, item.description, item.dns_name, item.id, item._interface, item.nat_inside, item.role, item.service, item.status, item.tags, item.tenant, item.tenant_id, item.vrf, item.vrf_id);
    });
  }
});

// Story: crud:IPRange:nondet:1:1
bthread("crud:IPRange:nondet:1:1", function () {
  let description = "description_1120";
  let end_address = "end_address_1120";
  let id = 1120;
  let role = "role_1120";
  let start_address = "start_address_1120";
  let status = "status_1120";
  let tags = "tags_1120";
  let tenant = "tenant_1120";
  let vrf = "vrf_1120";
  createIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  waitForIPRangeAdded(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  tryToAddExistingIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  updateIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  deleteIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  tryToDeleteANonExistingIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeDoesNotExist(description, end_address, id, role, start_address, status, tags, tenant, vrf);
});

// Story: crud:IPRange:nondet:1:2
bthread("crud:IPRange:nondet:1:2", function () {
  let description = "description_1121";
  let end_address = "end_address_1121";
  let id = 1121;
  let role = "role_1121";
  let start_address = "start_address_1121";
  let status = "status_1121";
  let tags = "tags_1121";
  let tenant = "tenant_1121";
  let vrf = "vrf_1121";
  createIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  tryToAddExistingIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  updateIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  deleteIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  tryToDeleteANonExistingIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeDoesNotExist(description, end_address, id, role, start_address, status, tags, tenant, vrf);
});

// Story: crud:IPRange:nondet:negative:dup-add
bthread("crud:IPRange:nondet:negative:dup-add", function () {
  let description = "description_1126";
  let end_address = "end_address_1126";
  let id = 1126;
  let role = "role_1126";
  let start_address = "start_address_1126";
  let status = "status_1126";
  let tags = "tags_1126";
  let tenant = "tenant_1126";
  let vrf = "vrf_1126";
  createIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  tryToAddExistingIPRange(description, end_address, id, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(description, end_address, id, role, start_address, status, tags, tenant, vrf);
});

// Monitor: IPRange Addition Verification
bthread("monitor:IPRange:addition", function () {
  while (true) {
    let item = waitForAnyIPRangeAdded();
    block(matchDeletedIPRange(item.description, item.end_address, item.id, item.role, item.start_address, item.status, item.tags, item.tenant, item.vrf), function () {
      verifyIPRangeExists(item.description, item.end_address, item.id, item.role, item.start_address, item.status, item.tags, item.tenant, item.vrf);
    });
  }
});

// Monitor: IPRange Deletion Verification
bthread("monitor:IPRange:deletion", function () {
  while (true) {
    let item = waitForAnyIPRangeDeleted();
    block(matchAddedIPRange(item.description, item.end_address, item.id, item.role, item.start_address, item.status, item.tags, item.tenant, item.vrf), function () {
      verifyIPRangeDoesNotExist(item.description, item.end_address, item.id, item.role, item.start_address, item.status, item.tags, item.tenant, item.vrf);
    });
  }
});

// Story: crud:Prefix:nondet:1:1
bthread("crud:Prefix:nondet:1:1", function () {
  let description = "description_1130";
  let id = 1130;
  let prefix = "prefix_1130";
  let role = "role_1130";
  let status = "status_1130";
  let tags = "tags_1130";
  let tenant = "tenant_1130";
  let vrf = "vrf_1130";
  createPrefix(description, id, prefix, role, status, tags, tenant, vrf);
  waitForPrefixAdded(description, id, prefix, role, status, tags, tenant, vrf);
  tryToAddExistingPrefix(description, id, prefix, role, status, tags, tenant, vrf);
  verifyPrefixExists(description, id, prefix, role, status, tags, tenant, vrf);
  updatePrefix(description, id, prefix, role, status, tags, tenant, vrf);
  deletePrefix(description, id, prefix, role, status, tags, tenant, vrf);
  tryToDeleteANonExistingPrefix(description, id, prefix, role, status, tags, tenant, vrf);
  verifyPrefixDoesNotExist(description, id, prefix, role, status, tags, tenant, vrf);
});

// Story: crud:Prefix:nondet:1:2
bthread("crud:Prefix:nondet:1:2", function () {
  let description = "description_1131";
  let id = 1131;
  let prefix = "prefix_1131";
  let role = "role_1131";
  let status = "status_1131";
  let tags = "tags_1131";
  let tenant = "tenant_1131";
  let vrf = "vrf_1131";
  createPrefix(description, id, prefix, role, status, tags, tenant, vrf);
  tryToAddExistingPrefix(description, id, prefix, role, status, tags, tenant, vrf);
  updatePrefix(description, id, prefix, role, status, tags, tenant, vrf);
  verifyPrefixExists(description, id, prefix, role, status, tags, tenant, vrf);
  deletePrefix(description, id, prefix, role, status, tags, tenant, vrf);
  tryToDeleteANonExistingPrefix(description, id, prefix, role, status, tags, tenant, vrf);
  verifyPrefixDoesNotExist(description, id, prefix, role, status, tags, tenant, vrf);
});

// Story: crud:Prefix:nondet:negative:dup-add
bthread("crud:Prefix:nondet:negative:dup-add", function () {
  let description = "description_1136";
  let id = 1136;
  let prefix = "prefix_1136";
  let role = "role_1136";
  let status = "status_1136";
  let tags = "tags_1136";
  let tenant = "tenant_1136";
  let vrf = "vrf_1136";
  createPrefix(description, id, prefix, role, status, tags, tenant, vrf);
  verifyPrefixExists(description, id, prefix, role, status, tags, tenant, vrf);
  tryToAddExistingPrefix(description, id, prefix, role, status, tags, tenant, vrf);
  verifyPrefixExists(description, id, prefix, role, status, tags, tenant, vrf);
});

// Monitor: Prefix Addition Verification
bthread("monitor:Prefix:addition", function () {
  while (true) {
    let item = waitForAnyPrefixAdded();
    block(matchDeletedPrefix(item.description, item.id, item.prefix, item.role, item.status, item.tags, item.tenant, item.vrf), function () {
      verifyPrefixExists(item.description, item.id, item.prefix, item.role, item.status, item.tags, item.tenant, item.vrf);
    });
  }
});

// Monitor: Prefix Deletion Verification
bthread("monitor:Prefix:deletion", function () {
  while (true) {
    let item = waitForAnyPrefixDeleted();
    block(matchAddedPrefix(item.description, item.id, item.prefix, item.role, item.status, item.tags, item.tenant, item.vrf), function () {
      verifyPrefixDoesNotExist(item.description, item.id, item.prefix, item.role, item.status, item.tags, item.tenant, item.vrf);
    });
  }
});

// Story: crud:RIR:nondet:1:1
bthread("crud:RIR:nondet:1:1", function () {
  let id = 1140;
  createRIR(id);
  waitForRIRAdded(id);
  tryToAddExistingRIR(id);
  verifyRIRExists(id);
  updateRIR(id);
  deleteRIR(id);
  tryToDeleteANonExistingRIR(id);
  verifyRIRDoesNotExist(id);
});

// Story: crud:RIR:nondet:1:2
bthread("crud:RIR:nondet:1:2", function () {
  let id = 1141;
  createRIR(id);
  tryToAddExistingRIR(id);
  updateRIR(id);
  verifyRIRExists(id);
  deleteRIR(id);
  tryToDeleteANonExistingRIR(id);
  verifyRIRDoesNotExist(id);
});

// Story: crud:RIR:nondet:negative:dup-add
bthread("crud:RIR:nondet:negative:dup-add", function () {
  let id = 1146;
  createRIR(id);
  verifyRIRExists(id);
  tryToAddExistingRIR(id);
  verifyRIRExists(id);
});

// Monitor: RIR Addition Verification
bthread("monitor:RIR:addition", function () {
  while (true) {
    let item = waitForAnyRIRAdded();
    block(matchDeletedRIR(item.id), function () {
      verifyRIRExists(item.id);
    });
  }
});

// Monitor: RIR Deletion Verification
bthread("monitor:RIR:deletion", function () {
  while (true) {
    let item = waitForAnyRIRDeleted();
    block(matchAddedRIR(item.id), function () {
      verifyRIRDoesNotExist(item.id);
    });
  }
});

// Story: crud:Role:nondet:1:1
bthread("crud:Role:nondet:1:1", function () {
  let id = 1150;
  createRole(id);
  waitForRoleAdded(id);
  tryToAddExistingRole(id);
  verifyRoleExists(id);
  updateRole(id);
  deleteRole(id);
  tryToDeleteANonExistingRole(id);
  verifyRoleDoesNotExist(id);
});

// Story: crud:Role:nondet:1:2
bthread("crud:Role:nondet:1:2", function () {
  let id = 1151;
  createRole(id);
  tryToAddExistingRole(id);
  updateRole(id);
  verifyRoleExists(id);
  deleteRole(id);
  tryToDeleteANonExistingRole(id);
  verifyRoleDoesNotExist(id);
});

// Story: crud:Role:nondet:negative:dup-add
bthread("crud:Role:nondet:negative:dup-add", function () {
  let id = 1156;
  createRole(id);
  verifyRoleExists(id);
  tryToAddExistingRole(id);
  verifyRoleExists(id);
});

// Monitor: Role Addition Verification
bthread("monitor:Role:addition", function () {
  while (true) {
    let item = waitForAnyRoleAdded();
    block(matchDeletedRole(item.id), function () {
      verifyRoleExists(item.id);
    });
  }
});

// Monitor: Role Deletion Verification
bthread("monitor:Role:deletion", function () {
  while (true) {
    let item = waitForAnyRoleDeleted();
    block(matchAddedRole(item.id), function () {
      verifyRoleDoesNotExist(item.id);
    });
  }
});

// Story: crud:RouteTarget:nondet:1:1
bthread("crud:RouteTarget:nondet:1:1", function () {
  let id = 1160;
  createRouteTarget(id);
  waitForRouteTargetAdded(id);
  tryToAddExistingRouteTarget(id);
  verifyRouteTargetExists(id);
  updateRouteTarget(id);
  deleteRouteTarget(id);
  tryToDeleteANonExistingRouteTarget(id);
  verifyRouteTargetDoesNotExist(id);
});

// Story: crud:RouteTarget:nondet:1:2
bthread("crud:RouteTarget:nondet:1:2", function () {
  let id = 1161;
  createRouteTarget(id);
  tryToAddExistingRouteTarget(id);
  updateRouteTarget(id);
  verifyRouteTargetExists(id);
  deleteRouteTarget(id);
  tryToDeleteANonExistingRouteTarget(id);
  verifyRouteTargetDoesNotExist(id);
});

// Story: crud:RouteTarget:nondet:negative:dup-add
bthread("crud:RouteTarget:nondet:negative:dup-add", function () {
  let id = 1166;
  createRouteTarget(id);
  verifyRouteTargetExists(id);
  tryToAddExistingRouteTarget(id);
  verifyRouteTargetExists(id);
});

// Monitor: RouteTarget Addition Verification
bthread("monitor:RouteTarget:addition", function () {
  while (true) {
    let item = waitForAnyRouteTargetAdded();
    block(matchDeletedRouteTarget(item.id), function () {
      verifyRouteTargetExists(item.id);
    });
  }
});

// Monitor: RouteTarget Deletion Verification
bthread("monitor:RouteTarget:deletion", function () {
  while (true) {
    let item = waitForAnyRouteTargetDeleted();
    block(matchAddedRouteTarget(item.id), function () {
      verifyRouteTargetDoesNotExist(item.id);
    });
  }
});

// Story: crud:ServiceTemplate:nondet:1:1
bthread("crud:ServiceTemplate:nondet:1:1", function () {
  let id = 1170;
  createServiceTemplate(id);
  waitForServiceTemplateAdded(id);
  tryToAddExistingServiceTemplate(id);
  verifyServiceTemplateExists(id);
  updateServiceTemplate(id);
  deleteServiceTemplate(id);
  tryToDeleteANonExistingServiceTemplate(id);
  verifyServiceTemplateDoesNotExist(id);
});

// Story: crud:ServiceTemplate:nondet:1:2
bthread("crud:ServiceTemplate:nondet:1:2", function () {
  let id = 1171;
  createServiceTemplate(id);
  tryToAddExistingServiceTemplate(id);
  updateServiceTemplate(id);
  verifyServiceTemplateExists(id);
  deleteServiceTemplate(id);
  tryToDeleteANonExistingServiceTemplate(id);
  verifyServiceTemplateDoesNotExist(id);
});

// Story: crud:ServiceTemplate:nondet:negative:dup-add
bthread("crud:ServiceTemplate:nondet:negative:dup-add", function () {
  let id = 1176;
  createServiceTemplate(id);
  verifyServiceTemplateExists(id);
  tryToAddExistingServiceTemplate(id);
  verifyServiceTemplateExists(id);
});

// Monitor: ServiceTemplate Addition Verification
bthread("monitor:ServiceTemplate:addition", function () {
  while (true) {
    let item = waitForAnyServiceTemplateAdded();
    block(matchDeletedServiceTemplate(item.id), function () {
      verifyServiceTemplateExists(item.id);
    });
  }
});

// Monitor: ServiceTemplate Deletion Verification
bthread("monitor:ServiceTemplate:deletion", function () {
  while (true) {
    let item = waitForAnyServiceTemplateDeleted();
    block(matchAddedServiceTemplate(item.id), function () {
      verifyServiceTemplateDoesNotExist(item.id);
    });
  }
});

// Story: crud:Service:nondet:1:1
bthread("crud:Service:nondet:1:1", function () {
  let id = 1180;
  createService(id);
  waitForServiceAdded(id);
  tryToAddExistingService(id);
  verifyServiceExists(id);
  updateService(id);
  deleteService(id);
  tryToDeleteANonExistingService(id);
  verifyServiceDoesNotExist(id);
});

// Story: crud:Service:nondet:1:2
bthread("crud:Service:nondet:1:2", function () {
  let id = 1181;
  createService(id);
  tryToAddExistingService(id);
  updateService(id);
  verifyServiceExists(id);
  deleteService(id);
  tryToDeleteANonExistingService(id);
  verifyServiceDoesNotExist(id);
});

// Story: crud:Service:nondet:negative:dup-add
bthread("crud:Service:nondet:negative:dup-add", function () {
  let id = 1186;
  createService(id);
  verifyServiceExists(id);
  tryToAddExistingService(id);
  verifyServiceExists(id);
});

// Monitor: Service Addition Verification
bthread("monitor:Service:addition", function () {
  while (true) {
    let item = waitForAnyServiceAdded();
    block(matchDeletedService(item.id), function () {
      verifyServiceExists(item.id);
    });
  }
});

// Monitor: Service Deletion Verification
bthread("monitor:Service:deletion", function () {
  while (true) {
    let item = waitForAnyServiceDeleted();
    block(matchAddedService(item.id), function () {
      verifyServiceDoesNotExist(item.id);
    });
  }
});

// Story: crud:VLANGroup:nondet:1:1
bthread("crud:VLANGroup:nondet:1:1", function () {
  let id = 1190;
  let name = "name_1190";
  let slug = "slug_1190";
  createVLANGroup(id, name, slug);
  waitForVLANGroupAdded(id, name, slug);
  tryToAddExistingVLANGroup(id, name, slug);
  verifyVLANGroupExists(id, name, slug);
  updateVLANGroup(id, name, slug);
  deleteVLANGroup(id, name, slug);
  tryToDeleteANonExistingVLANGroup(id, name, slug);
  verifyVLANGroupDoesNotExist(id, name, slug);
});

// Story: crud:VLANGroup:nondet:1:2
bthread("crud:VLANGroup:nondet:1:2", function () {
  let id = 1191;
  let name = "name_1191";
  let slug = "slug_1191";
  createVLANGroup(id, name, slug);
  tryToAddExistingVLANGroup(id, name, slug);
  updateVLANGroup(id, name, slug);
  verifyVLANGroupExists(id, name, slug);
  deleteVLANGroup(id, name, slug);
  tryToDeleteANonExistingVLANGroup(id, name, slug);
  verifyVLANGroupDoesNotExist(id, name, slug);
});

// Story: crud:VLANGroup:nondet:negative:dup-add
bthread("crud:VLANGroup:nondet:negative:dup-add", function () {
  let id = 1196;
  let name = "name_1196";
  let slug = "slug_1196";
  createVLANGroup(id, name, slug);
  verifyVLANGroupExists(id, name, slug);
  tryToAddExistingVLANGroup(id, name, slug);
  verifyVLANGroupExists(id, name, slug);
});

// Monitor: VLANGroup Addition Verification
bthread("monitor:VLANGroup:addition", function () {
  while (true) {
    let item = waitForAnyVLANGroupAdded();
    block(matchDeletedVLANGroup(item.id, item.name, item.slug), function () {
      verifyVLANGroupExists(item.id, item.name, item.slug);
    });
  }
});

// Monitor: VLANGroup Deletion Verification
bthread("monitor:VLANGroup:deletion", function () {
  while (true) {
    let item = waitForAnyVLANGroupDeleted();
    block(matchAddedVLANGroup(item.id, item.name, item.slug), function () {
      verifyVLANGroupDoesNotExist(item.id, item.name, item.slug);
    });
  }
});

// Story: crud:VLAN:nondet:1:1
bthread("crud:VLAN:nondet:1:1", function () {
  let id = 1200;
  let name = "name_1200";
  let slug = "slug_1200";
  let status = "status_1200";
  let vid = 1200;
  createVLAN(id, name, slug, status, vid);
  waitForVLANAdded(id, name, slug, status, vid);
  tryToAddExistingVLAN(id, name, slug, status, vid);
  verifyVLANExists(id, name, slug, status, vid);
  updateVLAN(id, name, slug, status, vid);
  deleteVLAN(id, name, slug, status, vid);
  tryToDeleteANonExistingVLAN(id, name, slug, status, vid);
  verifyVLANDoesNotExist(id, name, slug, status, vid);
});

// Story: crud:VLAN:nondet:1:2
bthread("crud:VLAN:nondet:1:2", function () {
  let id = 1201;
  let name = "name_1201";
  let slug = "slug_1201";
  let status = "status_1201";
  let vid = 1201;
  createVLAN(id, name, slug, status, vid);
  tryToAddExistingVLAN(id, name, slug, status, vid);
  updateVLAN(id, name, slug, status, vid);
  verifyVLANExists(id, name, slug, status, vid);
  deleteVLAN(id, name, slug, status, vid);
  tryToDeleteANonExistingVLAN(id, name, slug, status, vid);
  verifyVLANDoesNotExist(id, name, slug, status, vid);
});

// Story: crud:VLAN:nondet:negative:dup-add
bthread("crud:VLAN:nondet:negative:dup-add", function () {
  let id = 1206;
  let name = "name_1206";
  let slug = "slug_1206";
  let status = "status_1206";
  let vid = 1206;
  createVLAN(id, name, slug, status, vid);
  verifyVLANExists(id, name, slug, status, vid);
  tryToAddExistingVLAN(id, name, slug, status, vid);
  verifyVLANExists(id, name, slug, status, vid);
});

// Monitor: VLAN Addition Verification
bthread("monitor:VLAN:addition", function () {
  while (true) {
    let item = waitForAnyVLANAdded();
    block(matchDeletedVLAN(item.id, item.name, item.slug, item.status, item.vid), function () {
      verifyVLANExists(item.id, item.name, item.slug, item.status, item.vid);
    });
  }
});

// Monitor: VLAN Deletion Verification
bthread("monitor:VLAN:deletion", function () {
  while (true) {
    let item = waitForAnyVLANDeleted();
    block(matchAddedVLAN(item.id, item.name, item.slug, item.status, item.vid), function () {
      verifyVLANDoesNotExist(item.id, item.name, item.slug, item.status, item.vid);
    });
  }
});

// Story: crud:VLANTranslationPolicy:nondet:1:1
bthread("crud:VLANTranslationPolicy:nondet:1:1", function () {
  let id = 1210;
  let name = "name_1210";
  let slug = "slug_1210";
  createVLANTranslationPolicy(id, name, slug);
  waitForVLANTranslationPolicyAdded(id, name, slug);
  tryToAddExistingVLANTranslationPolicy(id, name, slug);
  verifyVLANTranslationPolicyExists(id, name, slug);
  updateVLANTranslationPolicy(id, name, slug);
  deleteVLANTranslationPolicy(id, name, slug);
  tryToDeleteANonExistingVLANTranslationPolicy(id, name, slug);
  verifyVLANTranslationPolicyDoesNotExist(id, name, slug);
});

// Story: crud:VLANTranslationPolicy:nondet:1:2
bthread("crud:VLANTranslationPolicy:nondet:1:2", function () {
  let id = 1211;
  let name = "name_1211";
  let slug = "slug_1211";
  createVLANTranslationPolicy(id, name, slug);
  tryToAddExistingVLANTranslationPolicy(id, name, slug);
  updateVLANTranslationPolicy(id, name, slug);
  verifyVLANTranslationPolicyExists(id, name, slug);
  deleteVLANTranslationPolicy(id, name, slug);
  tryToDeleteANonExistingVLANTranslationPolicy(id, name, slug);
  verifyVLANTranslationPolicyDoesNotExist(id, name, slug);
});

// Story: crud:VLANTranslationPolicy:nondet:negative:dup-add
bthread("crud:VLANTranslationPolicy:nondet:negative:dup-add", function () {
  let id = 1216;
  let name = "name_1216";
  let slug = "slug_1216";
  createVLANTranslationPolicy(id, name, slug);
  verifyVLANTranslationPolicyExists(id, name, slug);
  tryToAddExistingVLANTranslationPolicy(id, name, slug);
  verifyVLANTranslationPolicyExists(id, name, slug);
});

// Monitor: VLANTranslationPolicy Addition Verification
bthread("monitor:VLANTranslationPolicy:addition", function () {
  while (true) {
    let item = waitForAnyVLANTranslationPolicyAdded();
    block(matchDeletedVLANTranslationPolicy(item.id, item.name, item.slug), function () {
      verifyVLANTranslationPolicyExists(item.id, item.name, item.slug);
    });
  }
});

// Monitor: VLANTranslationPolicy Deletion Verification
bthread("monitor:VLANTranslationPolicy:deletion", function () {
  while (true) {
    let item = waitForAnyVLANTranslationPolicyDeleted();
    block(matchAddedVLANTranslationPolicy(item.id, item.name, item.slug), function () {
      verifyVLANTranslationPolicyDoesNotExist(item.id, item.name, item.slug);
    });
  }
});

// Story: crud:VLANTranslationRule:nondet:1:1
bthread("crud:VLANTranslationRule:nondet:1:1", function () {
  let id = 1220;
  let local_vid = 1220;
  let policy_id = 1220;
  let remote_vid = 1220;
  createVLANTranslationRule(id, local_vid, policy_id, remote_vid);
  waitForVLANTranslationRuleAdded(id, local_vid, policy_id, remote_vid);
  tryToAddExistingVLANTranslationRule(id, local_vid, policy_id, remote_vid);
  verifyVLANTranslationRuleExists(id, local_vid, policy_id, remote_vid);
  updateVLANTranslationRule(id, local_vid, policy_id, remote_vid);
  deleteVLANTranslationRule(id, local_vid, policy_id, remote_vid);
  tryToDeleteANonExistingVLANTranslationRule(id, local_vid, policy_id, remote_vid);
  verifyVLANTranslationRuleDoesNotExist(id, local_vid, policy_id, remote_vid);
});

// Story: crud:VLANTranslationRule:nondet:1:2
bthread("crud:VLANTranslationRule:nondet:1:2", function () {
  let id = 1221;
  let local_vid = 1221;
  let policy_id = 1221;
  let remote_vid = 1221;
  createVLANTranslationRule(id, local_vid, policy_id, remote_vid);
  tryToAddExistingVLANTranslationRule(id, local_vid, policy_id, remote_vid);
  updateVLANTranslationRule(id, local_vid, policy_id, remote_vid);
  verifyVLANTranslationRuleExists(id, local_vid, policy_id, remote_vid);
  deleteVLANTranslationRule(id, local_vid, policy_id, remote_vid);
  tryToDeleteANonExistingVLANTranslationRule(id, local_vid, policy_id, remote_vid);
  verifyVLANTranslationRuleDoesNotExist(id, local_vid, policy_id, remote_vid);
});

// Story: crud:VLANTranslationRule:nondet:negative:dup-add
bthread("crud:VLANTranslationRule:nondet:negative:dup-add", function () {
  let id = 1226;
  let local_vid = 1226;
  let policy_id = 1226;
  let remote_vid = 1226;
  createVLANTranslationRule(id, local_vid, policy_id, remote_vid);
  verifyVLANTranslationRuleExists(id, local_vid, policy_id, remote_vid);
  tryToAddExistingVLANTranslationRule(id, local_vid, policy_id, remote_vid);
  verifyVLANTranslationRuleExists(id, local_vid, policy_id, remote_vid);
});

// Monitor: VLANTranslationRule Addition Verification
bthread("monitor:VLANTranslationRule:addition", function () {
  while (true) {
    let item = waitForAnyVLANTranslationRuleAdded();
    block(matchDeletedVLANTranslationRule(item.id, item.local_vid, item.policy_id, item.remote_vid), function () {
      verifyVLANTranslationRuleExists(item.id, item.local_vid, item.policy_id, item.remote_vid);
    });
  }
});

// Monitor: VLANTranslationRule Deletion Verification
bthread("monitor:VLANTranslationRule:deletion", function () {
  while (true) {
    let item = waitForAnyVLANTranslationRuleDeleted();
    block(matchAddedVLANTranslationRule(item.id, item.local_vid, item.policy_id, item.remote_vid), function () {
      verifyVLANTranslationRuleDoesNotExist(item.id, item.local_vid, item.policy_id, item.remote_vid);
    });
  }
});

// Story: crud:VRF:nondet:1:1
bthread("crud:VRF:nondet:1:1", function () {
  let id = 1230;
  let name = "name_1230";
  createVRF(id, name);
  waitForVRFAdded(id, name);
  tryToAddExistingVRF(id, name);
  verifyVRFExists(id, name);
  updateVRF(id, name);
  deleteVRF(id, name);
  tryToDeleteANonExistingVRF(id, name);
  verifyVRFDoesNotExist(id, name);
});

// Story: crud:VRF:nondet:1:2
bthread("crud:VRF:nondet:1:2", function () {
  let id = 1231;
  let name = "name_1231";
  createVRF(id, name);
  tryToAddExistingVRF(id, name);
  updateVRF(id, name);
  verifyVRFExists(id, name);
  deleteVRF(id, name);
  tryToDeleteANonExistingVRF(id, name);
  verifyVRFDoesNotExist(id, name);
});

// Story: crud:VRF:nondet:negative:dup-add
bthread("crud:VRF:nondet:negative:dup-add", function () {
  let id = 1236;
  let name = "name_1236";
  createVRF(id, name);
  verifyVRFExists(id, name);
  tryToAddExistingVRF(id, name);
  verifyVRFExists(id, name);
});

// Monitor: VRF Addition Verification
bthread("monitor:VRF:addition", function () {
  while (true) {
    let item = waitForAnyVRFAdded();
    block(matchDeletedVRF(item.id, item.name), function () {
      verifyVRFExists(item.id, item.name);
    });
  }
});

// Monitor: VRF Deletion Verification
bthread("monitor:VRF:deletion", function () {
  while (true) {
    let item = waitForAnyVRFDeleted();
    block(matchAddedVRF(item.id, item.name), function () {
      verifyVRFDoesNotExist(item.id, item.name);
    });
  }
});

// Story: crud:ContactAssignment:nondet:1:1
bthread("crud:ContactAssignment:nondet:1:1", function () {
  let id = 1240;
  createContactAssignment(id);
  waitForContactAssignmentAdded(id);
  tryToAddExistingContactAssignment(id);
  verifyContactAssignmentExists(id);
  updateContactAssignment(id);
  deleteContactAssignment(id);
  tryToDeleteANonExistingContactAssignment(id);
  verifyContactAssignmentDoesNotExist(id);
});

// Story: crud:ContactAssignment:nondet:1:2
bthread("crud:ContactAssignment:nondet:1:2", function () {
  let id = 1241;
  createContactAssignment(id);
  tryToAddExistingContactAssignment(id);
  updateContactAssignment(id);
  verifyContactAssignmentExists(id);
  deleteContactAssignment(id);
  tryToDeleteANonExistingContactAssignment(id);
  verifyContactAssignmentDoesNotExist(id);
});

// Story: crud:ContactAssignment:nondet:negative:dup-add
bthread("crud:ContactAssignment:nondet:negative:dup-add", function () {
  let id = 1246;
  createContactAssignment(id);
  verifyContactAssignmentExists(id);
  tryToAddExistingContactAssignment(id);
  verifyContactAssignmentExists(id);
});

// Monitor: ContactAssignment Addition Verification
bthread("monitor:ContactAssignment:addition", function () {
  while (true) {
    let item = waitForAnyContactAssignmentAdded();
    block(matchDeletedContactAssignment(item.id), function () {
      verifyContactAssignmentExists(item.id);
    });
  }
});

// Monitor: ContactAssignment Deletion Verification
bthread("monitor:ContactAssignment:deletion", function () {
  while (true) {
    let item = waitForAnyContactAssignmentDeleted();
    block(matchAddedContactAssignment(item.id), function () {
      verifyContactAssignmentDoesNotExist(item.id);
    });
  }
});

// Story: crud:ContactGroup:nondet:1:1
bthread("crud:ContactGroup:nondet:1:1", function () {
  let id = 1250;
  createContactGroup(id);
  waitForContactGroupAdded(id);
  tryToAddExistingContactGroup(id);
  verifyContactGroupExists(id);
  updateContactGroup(id);
  deleteContactGroup(id);
  tryToDeleteANonExistingContactGroup(id);
  verifyContactGroupDoesNotExist(id);
});

// Story: crud:ContactGroup:nondet:1:2
bthread("crud:ContactGroup:nondet:1:2", function () {
  let id = 1251;
  createContactGroup(id);
  tryToAddExistingContactGroup(id);
  updateContactGroup(id);
  verifyContactGroupExists(id);
  deleteContactGroup(id);
  tryToDeleteANonExistingContactGroup(id);
  verifyContactGroupDoesNotExist(id);
});

// Story: crud:ContactGroup:nondet:negative:dup-add
bthread("crud:ContactGroup:nondet:negative:dup-add", function () {
  let id = 1256;
  createContactGroup(id);
  verifyContactGroupExists(id);
  tryToAddExistingContactGroup(id);
  verifyContactGroupExists(id);
});

// Monitor: ContactGroup Addition Verification
bthread("monitor:ContactGroup:addition", function () {
  while (true) {
    let item = waitForAnyContactGroupAdded();
    block(matchDeletedContactGroup(item.id), function () {
      verifyContactGroupExists(item.id);
    });
  }
});

// Monitor: ContactGroup Deletion Verification
bthread("monitor:ContactGroup:deletion", function () {
  while (true) {
    let item = waitForAnyContactGroupDeleted();
    block(matchAddedContactGroup(item.id), function () {
      verifyContactGroupDoesNotExist(item.id);
    });
  }
});

// Story: crud:ContactRole:nondet:1:1
bthread("crud:ContactRole:nondet:1:1", function () {
  let id = 1260;
  createContactRole(id);
  waitForContactRoleAdded(id);
  tryToAddExistingContactRole(id);
  verifyContactRoleExists(id);
  updateContactRole(id);
  deleteContactRole(id);
  tryToDeleteANonExistingContactRole(id);
  verifyContactRoleDoesNotExist(id);
});

// Story: crud:ContactRole:nondet:1:2
bthread("crud:ContactRole:nondet:1:2", function () {
  let id = 1261;
  createContactRole(id);
  tryToAddExistingContactRole(id);
  updateContactRole(id);
  verifyContactRoleExists(id);
  deleteContactRole(id);
  tryToDeleteANonExistingContactRole(id);
  verifyContactRoleDoesNotExist(id);
});

// Story: crud:ContactRole:nondet:negative:dup-add
bthread("crud:ContactRole:nondet:negative:dup-add", function () {
  let id = 1266;
  createContactRole(id);
  verifyContactRoleExists(id);
  tryToAddExistingContactRole(id);
  verifyContactRoleExists(id);
});

// Monitor: ContactRole Addition Verification
bthread("monitor:ContactRole:addition", function () {
  while (true) {
    let item = waitForAnyContactRoleAdded();
    block(matchDeletedContactRole(item.id), function () {
      verifyContactRoleExists(item.id);
    });
  }
});

// Monitor: ContactRole Deletion Verification
bthread("monitor:ContactRole:deletion", function () {
  while (true) {
    let item = waitForAnyContactRoleDeleted();
    block(matchAddedContactRole(item.id), function () {
      verifyContactRoleDoesNotExist(item.id);
    });
  }
});

// Story: crud:Contact:nondet:1:1
bthread("crud:Contact:nondet:1:1", function () {
  let id = 1270;
  createContact(id);
  waitForContactAdded(id);
  tryToAddExistingContact(id);
  verifyContactExists(id);
  updateContact(id);
  deleteContact(id);
  tryToDeleteANonExistingContact(id);
  verifyContactDoesNotExist(id);
});

// Story: crud:Contact:nondet:1:2
bthread("crud:Contact:nondet:1:2", function () {
  let id = 1271;
  createContact(id);
  tryToAddExistingContact(id);
  updateContact(id);
  verifyContactExists(id);
  deleteContact(id);
  tryToDeleteANonExistingContact(id);
  verifyContactDoesNotExist(id);
});

// Story: crud:Contact:nondet:negative:dup-add
bthread("crud:Contact:nondet:negative:dup-add", function () {
  let id = 1276;
  createContact(id);
  verifyContactExists(id);
  tryToAddExistingContact(id);
  verifyContactExists(id);
});

// Monitor: Contact Addition Verification
bthread("monitor:Contact:addition", function () {
  while (true) {
    let item = waitForAnyContactAdded();
    block(matchDeletedContact(item.id), function () {
      verifyContactExists(item.id);
    });
  }
});

// Monitor: Contact Deletion Verification
bthread("monitor:Contact:deletion", function () {
  while (true) {
    let item = waitForAnyContactDeleted();
    block(matchAddedContact(item.id), function () {
      verifyContactDoesNotExist(item.id);
    });
  }
});

// Story: crud:TenantGroup:nondet:1:1
bthread("crud:TenantGroup:nondet:1:1", function () {
  let id = 1280;
  createTenantGroup(id);
  waitForTenantGroupAdded(id);
  tryToAddExistingTenantGroup(id);
  verifyTenantGroupExists(id);
  updateTenantGroup(id);
  deleteTenantGroup(id);
  tryToDeleteANonExistingTenantGroup(id);
  verifyTenantGroupDoesNotExist(id);
});

// Story: crud:TenantGroup:nondet:1:2
bthread("crud:TenantGroup:nondet:1:2", function () {
  let id = 1281;
  createTenantGroup(id);
  tryToAddExistingTenantGroup(id);
  updateTenantGroup(id);
  verifyTenantGroupExists(id);
  deleteTenantGroup(id);
  tryToDeleteANonExistingTenantGroup(id);
  verifyTenantGroupDoesNotExist(id);
});

// Story: crud:TenantGroup:nondet:negative:dup-add
bthread("crud:TenantGroup:nondet:negative:dup-add", function () {
  let id = 1286;
  createTenantGroup(id);
  verifyTenantGroupExists(id);
  tryToAddExistingTenantGroup(id);
  verifyTenantGroupExists(id);
});

// Monitor: TenantGroup Addition Verification
bthread("monitor:TenantGroup:addition", function () {
  while (true) {
    let item = waitForAnyTenantGroupAdded();
    block(matchDeletedTenantGroup(item.id), function () {
      verifyTenantGroupExists(item.id);
    });
  }
});

// Monitor: TenantGroup Deletion Verification
bthread("monitor:TenantGroup:deletion", function () {
  while (true) {
    let item = waitForAnyTenantGroupDeleted();
    block(matchAddedTenantGroup(item.id), function () {
      verifyTenantGroupDoesNotExist(item.id);
    });
  }
});

// Story: crud:Tenant:nondet:1:1
bthread("crud:Tenant:nondet:1:1", function () {
  let contact = "contact_1290";
  let contact_group = "contact_group_1290";
  let contact_role = "contact_role_1290";
  let description = "description_1290";
  let group = "group_1290";
  let id = 1290;
  let name = "name_1290";
  let slug = "slug_1290";
  createTenant(contact, contact_group, contact_role, description, group, id, name, slug);
  waitForTenantAdded(contact, contact_group, contact_role, description, group, id, name, slug);
  tryToAddExistingTenant(contact, contact_group, contact_role, description, group, id, name, slug);
  verifyTenantExists(contact, contact_group, contact_role, description, group, id, name, slug);
  updateTenant(contact, contact_group, contact_role, description, group, id, name, slug);
  deleteTenant(contact, contact_group, contact_role, description, group, id, name, slug);
  tryToDeleteANonExistingTenant(contact, contact_group, contact_role, description, group, id, name, slug);
  verifyTenantDoesNotExist(contact, contact_group, contact_role, description, group, id, name, slug);
});

// Story: crud:Tenant:nondet:1:2
bthread("crud:Tenant:nondet:1:2", function () {
  let contact = "contact_1291";
  let contact_group = "contact_group_1291";
  let contact_role = "contact_role_1291";
  let description = "description_1291";
  let group = "group_1291";
  let id = 1291;
  let name = "name_1291";
  let slug = "slug_1291";
  createTenant(contact, contact_group, contact_role, description, group, id, name, slug);
  tryToAddExistingTenant(contact, contact_group, contact_role, description, group, id, name, slug);
  updateTenant(contact, contact_group, contact_role, description, group, id, name, slug);
  verifyTenantExists(contact, contact_group, contact_role, description, group, id, name, slug);
  deleteTenant(contact, contact_group, contact_role, description, group, id, name, slug);
  tryToDeleteANonExistingTenant(contact, contact_group, contact_role, description, group, id, name, slug);
  verifyTenantDoesNotExist(contact, contact_group, contact_role, description, group, id, name, slug);
});

// Story: crud:Tenant:nondet:negative:dup-add
bthread("crud:Tenant:nondet:negative:dup-add", function () {
  let contact = "contact_1296";
  let contact_group = "contact_group_1296";
  let contact_role = "contact_role_1296";
  let description = "description_1296";
  let group = "group_1296";
  let id = 1296;
  let name = "name_1296";
  let slug = "slug_1296";
  createTenant(contact, contact_group, contact_role, description, group, id, name, slug);
  verifyTenantExists(contact, contact_group, contact_role, description, group, id, name, slug);
  tryToAddExistingTenant(contact, contact_group, contact_role, description, group, id, name, slug);
  verifyTenantExists(contact, contact_group, contact_role, description, group, id, name, slug);
});

// Monitor: Tenant Addition Verification
bthread("monitor:Tenant:addition", function () {
  while (true) {
    let item = waitForAnyTenantAdded();
    block(matchDeletedTenant(item.contact, item.contact_group, item.contact_role, item.description, item.group, item.id, item.name, item.slug), function () {
      verifyTenantExists(item.contact, item.contact_group, item.contact_role, item.description, item.group, item.id, item.name, item.slug);
    });
  }
});

// Monitor: Tenant Deletion Verification
bthread("monitor:Tenant:deletion", function () {
  while (true) {
    let item = waitForAnyTenantDeleted();
    block(matchAddedTenant(item.contact, item.contact_group, item.contact_role, item.description, item.group, item.id, item.name, item.slug), function () {
      verifyTenantDoesNotExist(item.contact, item.contact_group, item.contact_role, item.description, item.group, item.id, item.name, item.slug);
    });
  }
});

// Story: crud:Group:nondet:1:1
bthread("crud:Group:nondet:1:1", function () {
  let id = 1300;
  createGroup(id);
  waitForGroupAdded(id);
  tryToAddExistingGroup(id);
  verifyGroupExists(id);
  updateGroupsBulk(id);
  deleteGroupsBulk(id);
  tryToDeleteANonExistingGroup(id);
  verifyGroupDoesNotExist(id);
});

// Story: crud:Group:nondet:1:2
bthread("crud:Group:nondet:1:2", function () {
  let id = 1301;
  createGroup(id);
  tryToAddExistingGroup(id);
  updateGroupsBulk(id);
  verifyGroupExists(id);
  deleteGroupsBulk(id);
  tryToDeleteANonExistingGroup(id);
  verifyGroupDoesNotExist(id);
});

// Story: crud:Group:nondet:negative:dup-add
bthread("crud:Group:nondet:negative:dup-add", function () {
  let id = 1306;
  createGroup(id);
  verifyGroupExists(id);
  tryToAddExistingGroup(id);
  verifyGroupExists(id);
});

// Monitor: Group Addition Verification
bthread("monitor:Group:addition", function () {
  while (true) {
    let item = waitForAnyGroupAdded();
    block(matchDeletedGroup(item.id), function () {
      verifyGroupExists(item.id);
    });
  }
});

// Monitor: Group Deletion Verification
bthread("monitor:Group:deletion", function () {
  while (true) {
    let item = waitForAnyGroupDeleted();
    block(matchAddedGroup(item.id), function () {
      verifyGroupDoesNotExist(item.id);
    });
  }
});

// Story: crud:Permission:nondet:1:1
bthread("crud:Permission:nondet:1:1", function () {
  let id = 1310;
  createPermission(id);
  waitForPermissionAdded(id);
  tryToAddExistingPermission(id);
  verifyPermissionExists(id);
  updatePermissionsBulk(id);
  deletePermissionsBulk(id);
  tryToDeleteANonExistingPermission(id);
  verifyPermissionDoesNotExist(id);
});

// Story: crud:Permission:nondet:1:2
bthread("crud:Permission:nondet:1:2", function () {
  let id = 1311;
  createPermission(id);
  tryToAddExistingPermission(id);
  updatePermissionsBulk(id);
  verifyPermissionExists(id);
  deletePermissionsBulk(id);
  tryToDeleteANonExistingPermission(id);
  verifyPermissionDoesNotExist(id);
});

// Story: crud:Permission:nondet:negative:dup-add
bthread("crud:Permission:nondet:negative:dup-add", function () {
  let id = 1316;
  createPermission(id);
  verifyPermissionExists(id);
  tryToAddExistingPermission(id);
  verifyPermissionExists(id);
});

// Monitor: Permission Addition Verification
bthread("monitor:Permission:addition", function () {
  while (true) {
    let item = waitForAnyPermissionAdded();
    block(matchDeletedPermission(item.id), function () {
      verifyPermissionExists(item.id);
    });
  }
});

// Monitor: Permission Deletion Verification
bthread("monitor:Permission:deletion", function () {
  while (true) {
    let item = waitForAnyPermissionDeleted();
    block(matchAddedPermission(item.id), function () {
      verifyPermissionDoesNotExist(item.id);
    });
  }
});

// Story: crud:Token:nondet:1:1
bthread("crud:Token:nondet:1:1", function () {
  let id = 1320;
  let key = "key_1320";
  createToken(id, key);
  waitForTokenAdded(id, key);
  tryToAddExistingToken(id, key);
  verifyTokenExists(id, key);
  updateTokensBulk(id, key);
  deleteTokensBulk(id, key);
  tryToDeleteANonExistingToken(id, key);
  verifyTokenDoesNotExist(id, key);
});

// Story: crud:Token:nondet:1:2
bthread("crud:Token:nondet:1:2", function () {
  let id = 1321;
  let key = "key_1321";
  createToken(id, key);
  tryToAddExistingToken(id, key);
  updateTokensBulk(id, key);
  verifyTokenExists(id, key);
  deleteTokensBulk(id, key);
  tryToDeleteANonExistingToken(id, key);
  verifyTokenDoesNotExist(id, key);
});

// Story: crud:Token:nondet:negative:dup-add
bthread("crud:Token:nondet:negative:dup-add", function () {
  let id = 1326;
  let key = "key_1326";
  createToken(id, key);
  verifyTokenExists(id, key);
  tryToAddExistingToken(id, key);
  verifyTokenExists(id, key);
});

// Monitor: Token Addition Verification
bthread("monitor:Token:addition", function () {
  while (true) {
    let item = waitForAnyTokenAdded();
    block(matchDeletedToken(item.id, item.key), function () {
      verifyTokenExists(item.id, item.key);
    });
  }
});

// Monitor: Token Deletion Verification
bthread("monitor:Token:deletion", function () {
  while (true) {
    let item = waitForAnyTokenDeleted();
    block(matchAddedToken(item.id, item.key), function () {
      verifyTokenDoesNotExist(item.id, item.key);
    });
  }
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let email = "email_1330";
  let id = 1330;
  let username = "username_1330";
  createUser(email, id, username);
  waitForUserAdded(email, id, username);
  tryToAddExistingUser(email, id, username);
  verifyUserExists(email, id, username);
  updateUsersBulk(email, id, username);
  deleteUsersBulk(email, id, username);
  tryToDeleteANonExistingUser(email, id, username);
  verifyUserDoesNotExist(email, id, username);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let email = "email_1331";
  let id = 1331;
  let username = "username_1331";
  createUser(email, id, username);
  tryToAddExistingUser(email, id, username);
  updateUsersBulk(email, id, username);
  verifyUserExists(email, id, username);
  deleteUsersBulk(email, id, username);
  tryToDeleteANonExistingUser(email, id, username);
  verifyUserDoesNotExist(email, id, username);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let email = "email_1336";
  let id = 1336;
  let username = "username_1336";
  createUser(email, id, username);
  verifyUserExists(email, id, username);
  tryToAddExistingUser(email, id, username);
  verifyUserExists(email, id, username);
});

// Monitor: User Addition Verification
bthread("monitor:User:addition", function () {
  while (true) {
    let item = waitForAnyUserAdded();
    block(matchDeletedUser(item.email, item.id, item.username), function () {
      verifyUserExists(item.email, item.id, item.username);
    });
  }
});

// Monitor: User Deletion Verification
bthread("monitor:User:deletion", function () {
  while (true) {
    let item = waitForAnyUserDeleted();
    block(matchAddedUser(item.email, item.id, item.username), function () {
      verifyUserDoesNotExist(item.email, item.id, item.username);
    });
  }
});

// Story: crud:ClusterGroup:nondet:1:1
bthread("crud:ClusterGroup:nondet:1:1", function () {
  let id = 1340;
  createClusterGroup(id);
  waitForClusterGroupAdded(id);
  tryToAddExistingClusterGroup(id);
  verifyClusterGroupExists(id);
  updateClusterGroup(id);
  deleteClusterGroup(id);
  tryToDeleteANonExistingClusterGroup(id);
  verifyClusterGroupDoesNotExist(id);
});

// Story: crud:ClusterGroup:nondet:1:2
bthread("crud:ClusterGroup:nondet:1:2", function () {
  let id = 1341;
  createClusterGroup(id);
  tryToAddExistingClusterGroup(id);
  updateClusterGroup(id);
  verifyClusterGroupExists(id);
  deleteClusterGroup(id);
  tryToDeleteANonExistingClusterGroup(id);
  verifyClusterGroupDoesNotExist(id);
});

// Story: crud:ClusterGroup:nondet:negative:dup-add
bthread("crud:ClusterGroup:nondet:negative:dup-add", function () {
  let id = 1346;
  createClusterGroup(id);
  verifyClusterGroupExists(id);
  tryToAddExistingClusterGroup(id);
  verifyClusterGroupExists(id);
});

// Monitor: ClusterGroup Addition Verification
bthread("monitor:ClusterGroup:addition", function () {
  while (true) {
    let item = waitForAnyClusterGroupAdded();
    block(matchDeletedClusterGroup(item.id), function () {
      verifyClusterGroupExists(item.id);
    });
  }
});

// Monitor: ClusterGroup Deletion Verification
bthread("monitor:ClusterGroup:deletion", function () {
  while (true) {
    let item = waitForAnyClusterGroupDeleted();
    block(matchAddedClusterGroup(item.id), function () {
      verifyClusterGroupDoesNotExist(item.id);
    });
  }
});

// Story: crud:ClusterType:nondet:1:1
bthread("crud:ClusterType:nondet:1:1", function () {
  let id = 1350;
  createClusterType(id);
  waitForClusterTypeAdded(id);
  tryToAddExistingClusterType(id);
  verifyClusterTypeExists(id);
  updateClusterType(id);
  deleteClusterType(id);
  tryToDeleteANonExistingClusterType(id);
  verifyClusterTypeDoesNotExist(id);
});

// Story: crud:ClusterType:nondet:1:2
bthread("crud:ClusterType:nondet:1:2", function () {
  let id = 1351;
  createClusterType(id);
  tryToAddExistingClusterType(id);
  updateClusterType(id);
  verifyClusterTypeExists(id);
  deleteClusterType(id);
  tryToDeleteANonExistingClusterType(id);
  verifyClusterTypeDoesNotExist(id);
});

// Story: crud:ClusterType:nondet:negative:dup-add
bthread("crud:ClusterType:nondet:negative:dup-add", function () {
  let id = 1356;
  createClusterType(id);
  verifyClusterTypeExists(id);
  tryToAddExistingClusterType(id);
  verifyClusterTypeExists(id);
});

// Monitor: ClusterType Addition Verification
bthread("monitor:ClusterType:addition", function () {
  while (true) {
    let item = waitForAnyClusterTypeAdded();
    block(matchDeletedClusterType(item.id), function () {
      verifyClusterTypeExists(item.id);
    });
  }
});

// Monitor: ClusterType Deletion Verification
bthread("monitor:ClusterType:deletion", function () {
  while (true) {
    let item = waitForAnyClusterTypeDeleted();
    block(matchAddedClusterType(item.id), function () {
      verifyClusterTypeDoesNotExist(item.id);
    });
  }
});

// Story: crud:Cluster:nondet:1:1
bthread("crud:Cluster:nondet:1:1", function () {
  let id = 1360;
  createCluster(id);
  waitForClusterAdded(id);
  tryToAddExistingCluster(id);
  verifyClusterExists(id);
  updateCluster(id);
  deleteCluster(id);
  tryToDeleteANonExistingCluster(id);
  verifyClusterDoesNotExist(id);
});

// Story: crud:Cluster:nondet:1:2
bthread("crud:Cluster:nondet:1:2", function () {
  let id = 1361;
  createCluster(id);
  tryToAddExistingCluster(id);
  updateCluster(id);
  verifyClusterExists(id);
  deleteCluster(id);
  tryToDeleteANonExistingCluster(id);
  verifyClusterDoesNotExist(id);
});

// Story: crud:Cluster:nondet:negative:dup-add
bthread("crud:Cluster:nondet:negative:dup-add", function () {
  let id = 1366;
  createCluster(id);
  verifyClusterExists(id);
  tryToAddExistingCluster(id);
  verifyClusterExists(id);
});

// Monitor: Cluster Addition Verification
bthread("monitor:Cluster:addition", function () {
  while (true) {
    let item = waitForAnyClusterAdded();
    block(matchDeletedCluster(item.id), function () {
      verifyClusterExists(item.id);
    });
  }
});

// Monitor: Cluster Deletion Verification
bthread("monitor:Cluster:deletion", function () {
  while (true) {
    let item = waitForAnyClusterDeleted();
    block(matchAddedCluster(item.id), function () {
      verifyClusterDoesNotExist(item.id);
    });
  }
});

// Story: crud:VirtualDisk:nondet:1:1
bthread("crud:VirtualDisk:nondet:1:1", function () {
  let id = 1370;
  createVirtualDisk(id);
  waitForVirtualDiskAdded(id);
  tryToAddExistingVirtualDisk(id);
  verifyVirtualDiskExists(id);
  updateVirtualDisk(id);
  deleteVirtualDisk(id);
  tryToDeleteANonExistingVirtualDisk(id);
  verifyVirtualDiskDoesNotExist(id);
});

// Story: crud:VirtualDisk:nondet:1:2
bthread("crud:VirtualDisk:nondet:1:2", function () {
  let id = 1371;
  createVirtualDisk(id);
  tryToAddExistingVirtualDisk(id);
  updateVirtualDisk(id);
  verifyVirtualDiskExists(id);
  deleteVirtualDisk(id);
  tryToDeleteANonExistingVirtualDisk(id);
  verifyVirtualDiskDoesNotExist(id);
});

// Story: crud:VirtualDisk:nondet:negative:dup-add
bthread("crud:VirtualDisk:nondet:negative:dup-add", function () {
  let id = 1376;
  createVirtualDisk(id);
  verifyVirtualDiskExists(id);
  tryToAddExistingVirtualDisk(id);
  verifyVirtualDiskExists(id);
});

// Monitor: VirtualDisk Addition Verification
bthread("monitor:VirtualDisk:addition", function () {
  while (true) {
    let item = waitForAnyVirtualDiskAdded();
    block(matchDeletedVirtualDisk(item.id), function () {
      verifyVirtualDiskExists(item.id);
    });
  }
});

// Monitor: VirtualDisk Deletion Verification
bthread("monitor:VirtualDisk:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualDiskDeleted();
    block(matchAddedVirtualDisk(item.id), function () {
      verifyVirtualDiskDoesNotExist(item.id);
    });
  }
});

// Story: crud:VirtualMachine:nondet:1:1
bthread("crud:VirtualMachine:nondet:1:1", function () {
  let cluster = "cluster_1380";
  let cluster_group = "cluster_group_1380";
  let cluster_type = "cluster_type_1380";
  let config_template_id = 1380;
  let contact = "contact_1380";
  let contact_role = "contact_role_1380";
  let description = "description_1380";
  let device = "device_1380";
  let disk = "disk_1380";
  let format = "format_1380";
  let id = 1380;
  let local_context_data = "local_context_data_1380";
  let memory = "memory_1380";
  let name = "name_1380";
  let platform = "platform_1380";
  let role = "role_1380";
  let serial = "serial_1380";
  let site = "site_1380";
  let status = "status_1380";
  let tag = "tag_1380";
  let tenant = "tenant_1380";
  let vcpus = "vcpus_1380";
  createVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  waitForVirtualMachineAdded(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  tryToAddExistingVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  verifyVirtualMachineExists(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  updateVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  deleteVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  tryToDeleteANonExistingVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  verifyVirtualMachineDoesNotExist(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
});

// Story: crud:VirtualMachine:nondet:1:2
bthread("crud:VirtualMachine:nondet:1:2", function () {
  let cluster = "cluster_1381";
  let cluster_group = "cluster_group_1381";
  let cluster_type = "cluster_type_1381";
  let config_template_id = 1381;
  let contact = "contact_1381";
  let contact_role = "contact_role_1381";
  let description = "description_1381";
  let device = "device_1381";
  let disk = "disk_1381";
  let format = "format_1381";
  let id = 1381;
  let local_context_data = "local_context_data_1381";
  let memory = "memory_1381";
  let name = "name_1381";
  let platform = "platform_1381";
  let role = "role_1381";
  let serial = "serial_1381";
  let site = "site_1381";
  let status = "status_1381";
  let tag = "tag_1381";
  let tenant = "tenant_1381";
  let vcpus = "vcpus_1381";
  createVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  tryToAddExistingVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  updateVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  verifyVirtualMachineExists(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  deleteVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  tryToDeleteANonExistingVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  verifyVirtualMachineDoesNotExist(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
});

// Story: crud:VirtualMachine:nondet:negative:dup-add
bthread("crud:VirtualMachine:nondet:negative:dup-add", function () {
  let cluster = "cluster_1386";
  let cluster_group = "cluster_group_1386";
  let cluster_type = "cluster_type_1386";
  let config_template_id = 1386;
  let contact = "contact_1386";
  let contact_role = "contact_role_1386";
  let description = "description_1386";
  let device = "device_1386";
  let disk = "disk_1386";
  let format = "format_1386";
  let id = 1386;
  let local_context_data = "local_context_data_1386";
  let memory = "memory_1386";
  let name = "name_1386";
  let platform = "platform_1386";
  let role = "role_1386";
  let serial = "serial_1386";
  let site = "site_1386";
  let status = "status_1386";
  let tag = "tag_1386";
  let tenant = "tenant_1386";
  let vcpus = "vcpus_1386";
  createVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  verifyVirtualMachineExists(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  tryToAddExistingVirtualMachine(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
  verifyVirtualMachineExists(cluster, cluster_group, cluster_type, config_template_id, contact, contact_role, description, device, disk, format, id, local_context_data, memory, name, platform, role, serial, site, status, tag, tenant, vcpus);
});

// Monitor: VirtualMachine Addition Verification
bthread("monitor:VirtualMachine:addition", function () {
  while (true) {
    let item = waitForAnyVirtualMachineAdded();
    block(matchDeletedVirtualMachine(item.cluster, item.cluster_group, item.cluster_type, item.config_template_id, item.contact, item.contact_role, item.description, item.device, item.disk, item.format, item.id, item.local_context_data, item.memory, item.name, item.platform, item.role, item.serial, item.site, item.status, item.tag, item.tenant, item.vcpus), function () {
      verifyVirtualMachineExists(item.cluster, item.cluster_group, item.cluster_type, item.config_template_id, item.contact, item.contact_role, item.description, item.device, item.disk, item.format, item.id, item.local_context_data, item.memory, item.name, item.platform, item.role, item.serial, item.site, item.status, item.tag, item.tenant, item.vcpus);
    });
  }
});

// Monitor: VirtualMachine Deletion Verification
bthread("monitor:VirtualMachine:deletion", function () {
  while (true) {
    let item = waitForAnyVirtualMachineDeleted();
    block(matchAddedVirtualMachine(item.cluster, item.cluster_group, item.cluster_type, item.config_template_id, item.contact, item.contact_role, item.description, item.device, item.disk, item.format, item.id, item.local_context_data, item.memory, item.name, item.platform, item.role, item.serial, item.site, item.status, item.tag, item.tenant, item.vcpus), function () {
      verifyVirtualMachineDoesNotExist(item.cluster, item.cluster_group, item.cluster_type, item.config_template_id, item.contact, item.contact_role, item.description, item.device, item.disk, item.format, item.id, item.local_context_data, item.memory, item.name, item.platform, item.role, item.serial, item.site, item.status, item.tag, item.tenant, item.vcpus);
    });
  }
});

// Story: crud:IKEPolicy:nondet:1:1
bthread("crud:IKEPolicy:nondet:1:1", function () {
  let id = 1390;
  createIKEPolicy(id);
  waitForIKEPolicyAdded(id);
  tryToAddExistingIKEPolicy(id);
  verifyIKEPolicyExists(id);
  updateIKEPolicy(id);
  deleteIKEPolicy(id);
  tryToDeleteANonExistingIKEPolicy(id);
  verifyIKEPolicyDoesNotExist(id);
});

// Story: crud:IKEPolicy:nondet:1:2
bthread("crud:IKEPolicy:nondet:1:2", function () {
  let id = 1391;
  createIKEPolicy(id);
  tryToAddExistingIKEPolicy(id);
  updateIKEPolicy(id);
  verifyIKEPolicyExists(id);
  deleteIKEPolicy(id);
  tryToDeleteANonExistingIKEPolicy(id);
  verifyIKEPolicyDoesNotExist(id);
});

// Story: crud:IKEPolicy:nondet:negative:dup-add
bthread("crud:IKEPolicy:nondet:negative:dup-add", function () {
  let id = 1396;
  createIKEPolicy(id);
  verifyIKEPolicyExists(id);
  tryToAddExistingIKEPolicy(id);
  verifyIKEPolicyExists(id);
});

// Monitor: IKEPolicy Addition Verification
bthread("monitor:IKEPolicy:addition", function () {
  while (true) {
    let item = waitForAnyIKEPolicyAdded();
    block(matchDeletedIKEPolicy(item.id), function () {
      verifyIKEPolicyExists(item.id);
    });
  }
});

// Monitor: IKEPolicy Deletion Verification
bthread("monitor:IKEPolicy:deletion", function () {
  while (true) {
    let item = waitForAnyIKEPolicyDeleted();
    block(matchAddedIKEPolicy(item.id), function () {
      verifyIKEPolicyDoesNotExist(item.id);
    });
  }
});

// Story: crud:IKEProposal:nondet:1:1
bthread("crud:IKEProposal:nondet:1:1", function () {
  let id = 1400;
  createIKEProposal(id);
  waitForIKEProposalAdded(id);
  tryToAddExistingIKEProposal(id);
  verifyIKEProposalExists(id);
  updateIKEProposal(id);
  deleteIKEProposal(id);
  tryToDeleteANonExistingIKEProposal(id);
  verifyIKEProposalDoesNotExist(id);
});

// Story: crud:IKEProposal:nondet:1:2
bthread("crud:IKEProposal:nondet:1:2", function () {
  let id = 1401;
  createIKEProposal(id);
  tryToAddExistingIKEProposal(id);
  updateIKEProposal(id);
  verifyIKEProposalExists(id);
  deleteIKEProposal(id);
  tryToDeleteANonExistingIKEProposal(id);
  verifyIKEProposalDoesNotExist(id);
});

// Story: crud:IKEProposal:nondet:negative:dup-add
bthread("crud:IKEProposal:nondet:negative:dup-add", function () {
  let id = 1406;
  createIKEProposal(id);
  verifyIKEProposalExists(id);
  tryToAddExistingIKEProposal(id);
  verifyIKEProposalExists(id);
});

// Monitor: IKEProposal Addition Verification
bthread("monitor:IKEProposal:addition", function () {
  while (true) {
    let item = waitForAnyIKEProposalAdded();
    block(matchDeletedIKEProposal(item.id), function () {
      verifyIKEProposalExists(item.id);
    });
  }
});

// Monitor: IKEProposal Deletion Verification
bthread("monitor:IKEProposal:deletion", function () {
  while (true) {
    let item = waitForAnyIKEProposalDeleted();
    block(matchAddedIKEProposal(item.id), function () {
      verifyIKEProposalDoesNotExist(item.id);
    });
  }
});

// Story: crud:IPSecPolicy:nondet:1:1
bthread("crud:IPSecPolicy:nondet:1:1", function () {
  let id = 1410;
  createIPSecPolicy(id);
  waitForIPSecPolicyAdded(id);
  tryToAddExistingIPSecPolicy(id);
  verifyIPSecPolicyExists(id);
  updateIPSecPolicy(id);
  deleteIPSecPolicy(id);
  tryToDeleteANonExistingIPSecPolicy(id);
  verifyIPSecPolicyDoesNotExist(id);
});

// Story: crud:IPSecPolicy:nondet:1:2
bthread("crud:IPSecPolicy:nondet:1:2", function () {
  let id = 1411;
  createIPSecPolicy(id);
  tryToAddExistingIPSecPolicy(id);
  updateIPSecPolicy(id);
  verifyIPSecPolicyExists(id);
  deleteIPSecPolicy(id);
  tryToDeleteANonExistingIPSecPolicy(id);
  verifyIPSecPolicyDoesNotExist(id);
});

// Story: crud:IPSecPolicy:nondet:negative:dup-add
bthread("crud:IPSecPolicy:nondet:negative:dup-add", function () {
  let id = 1416;
  createIPSecPolicy(id);
  verifyIPSecPolicyExists(id);
  tryToAddExistingIPSecPolicy(id);
  verifyIPSecPolicyExists(id);
});

// Monitor: IPSecPolicy Addition Verification
bthread("monitor:IPSecPolicy:addition", function () {
  while (true) {
    let item = waitForAnyIPSecPolicyAdded();
    block(matchDeletedIPSecPolicy(item.id), function () {
      verifyIPSecPolicyExists(item.id);
    });
  }
});

// Monitor: IPSecPolicy Deletion Verification
bthread("monitor:IPSecPolicy:deletion", function () {
  while (true) {
    let item = waitForAnyIPSecPolicyDeleted();
    block(matchAddedIPSecPolicy(item.id), function () {
      verifyIPSecPolicyDoesNotExist(item.id);
    });
  }
});

// Story: crud:IPSecProfile:nondet:1:1
bthread("crud:IPSecProfile:nondet:1:1", function () {
  let id = 1420;
  createIPSecProfile(id);
  waitForIPSecProfileAdded(id);
  tryToAddExistingIPSecProfile(id);
  verifyIPSecProfileExists(id);
  updateIPSecProfile(id);
  deleteIPSecProfile(id);
  tryToDeleteANonExistingIPSecProfile(id);
  verifyIPSecProfileDoesNotExist(id);
});

// Story: crud:IPSecProfile:nondet:1:2
bthread("crud:IPSecProfile:nondet:1:2", function () {
  let id = 1421;
  createIPSecProfile(id);
  tryToAddExistingIPSecProfile(id);
  updateIPSecProfile(id);
  verifyIPSecProfileExists(id);
  deleteIPSecProfile(id);
  tryToDeleteANonExistingIPSecProfile(id);
  verifyIPSecProfileDoesNotExist(id);
});

// Story: crud:IPSecProfile:nondet:negative:dup-add
bthread("crud:IPSecProfile:nondet:negative:dup-add", function () {
  let id = 1426;
  createIPSecProfile(id);
  verifyIPSecProfileExists(id);
  tryToAddExistingIPSecProfile(id);
  verifyIPSecProfileExists(id);
});

// Monitor: IPSecProfile Addition Verification
bthread("monitor:IPSecProfile:addition", function () {
  while (true) {
    let item = waitForAnyIPSecProfileAdded();
    block(matchDeletedIPSecProfile(item.id), function () {
      verifyIPSecProfileExists(item.id);
    });
  }
});

// Monitor: IPSecProfile Deletion Verification
bthread("monitor:IPSecProfile:deletion", function () {
  while (true) {
    let item = waitForAnyIPSecProfileDeleted();
    block(matchAddedIPSecProfile(item.id), function () {
      verifyIPSecProfileDoesNotExist(item.id);
    });
  }
});

// Story: crud:IPSecProposal:nondet:1:1
bthread("crud:IPSecProposal:nondet:1:1", function () {
  let id = 1430;
  createIPSecProposal(id);
  waitForIPSecProposalAdded(id);
  tryToAddExistingIPSecProposal(id);
  verifyIPSecProposalExists(id);
  updateIPSecProposal(id);
  deleteIPSecProposal(id);
  tryToDeleteANonExistingIPSecProposal(id);
  verifyIPSecProposalDoesNotExist(id);
});

// Story: crud:IPSecProposal:nondet:1:2
bthread("crud:IPSecProposal:nondet:1:2", function () {
  let id = 1431;
  createIPSecProposal(id);
  tryToAddExistingIPSecProposal(id);
  updateIPSecProposal(id);
  verifyIPSecProposalExists(id);
  deleteIPSecProposal(id);
  tryToDeleteANonExistingIPSecProposal(id);
  verifyIPSecProposalDoesNotExist(id);
});

// Story: crud:IPSecProposal:nondet:negative:dup-add
bthread("crud:IPSecProposal:nondet:negative:dup-add", function () {
  let id = 1436;
  createIPSecProposal(id);
  verifyIPSecProposalExists(id);
  tryToAddExistingIPSecProposal(id);
  verifyIPSecProposalExists(id);
});

// Monitor: IPSecProposal Addition Verification
bthread("monitor:IPSecProposal:addition", function () {
  while (true) {
    let item = waitForAnyIPSecProposalAdded();
    block(matchDeletedIPSecProposal(item.id), function () {
      verifyIPSecProposalExists(item.id);
    });
  }
});

// Monitor: IPSecProposal Deletion Verification
bthread("monitor:IPSecProposal:deletion", function () {
  while (true) {
    let item = waitForAnyIPSecProposalDeleted();
    block(matchAddedIPSecProposal(item.id), function () {
      verifyIPSecProposalDoesNotExist(item.id);
    });
  }
});

// Story: crud:L2VPNTermination:nondet:1:1
bthread("crud:L2VPNTermination:nondet:1:1", function () {
  let id = 1440;
  createL2VPNTermination(id);
  waitForL2VPNTerminationAdded(id);
  tryToAddExistingL2VPNTermination(id);
  verifyL2VPNTerminationExists(id);
  updateL2VPNTermination(id);
  deleteL2VPNTermination(id);
  tryToDeleteANonExistingL2VPNTermination(id);
  verifyL2VPNTerminationDoesNotExist(id);
});

// Story: crud:L2VPNTermination:nondet:1:2
bthread("crud:L2VPNTermination:nondet:1:2", function () {
  let id = 1441;
  createL2VPNTermination(id);
  tryToAddExistingL2VPNTermination(id);
  updateL2VPNTermination(id);
  verifyL2VPNTerminationExists(id);
  deleteL2VPNTermination(id);
  tryToDeleteANonExistingL2VPNTermination(id);
  verifyL2VPNTerminationDoesNotExist(id);
});

// Story: crud:L2VPNTermination:nondet:negative:dup-add
bthread("crud:L2VPNTermination:nondet:negative:dup-add", function () {
  let id = 1446;
  createL2VPNTermination(id);
  verifyL2VPNTerminationExists(id);
  tryToAddExistingL2VPNTermination(id);
  verifyL2VPNTerminationExists(id);
});

// Monitor: L2VPNTermination Addition Verification
bthread("monitor:L2VPNTermination:addition", function () {
  while (true) {
    let item = waitForAnyL2VPNTerminationAdded();
    block(matchDeletedL2VPNTermination(item.id), function () {
      verifyL2VPNTerminationExists(item.id);
    });
  }
});

// Monitor: L2VPNTermination Deletion Verification
bthread("monitor:L2VPNTermination:deletion", function () {
  while (true) {
    let item = waitForAnyL2VPNTerminationDeleted();
    block(matchAddedL2VPNTermination(item.id), function () {
      verifyL2VPNTerminationDoesNotExist(item.id);
    });
  }
});

// Story: crud:L2VPN:nondet:1:1
bthread("crud:L2VPN:nondet:1:1", function () {
  let id = 1450;
  let name = "name_1450";
  let slug = "slug_1450";
  createL2VPN(id, name, slug);
  waitForL2VPNAdded(id, name, slug);
  tryToAddExistingL2VPN(id, name, slug);
  verifyL2VPNExists(id, name, slug);
  updateL2VPN(id, name, slug);
  deleteL2VPN(id, name, slug);
  tryToDeleteANonExistingL2VPN(id, name, slug);
  verifyL2VPNDoesNotExist(id, name, slug);
});

// Story: crud:L2VPN:nondet:1:2
bthread("crud:L2VPN:nondet:1:2", function () {
  let id = 1451;
  let name = "name_1451";
  let slug = "slug_1451";
  createL2VPN(id, name, slug);
  tryToAddExistingL2VPN(id, name, slug);
  updateL2VPN(id, name, slug);
  verifyL2VPNExists(id, name, slug);
  deleteL2VPN(id, name, slug);
  tryToDeleteANonExistingL2VPN(id, name, slug);
  verifyL2VPNDoesNotExist(id, name, slug);
});

// Story: crud:L2VPN:nondet:negative:dup-add
bthread("crud:L2VPN:nondet:negative:dup-add", function () {
  let id = 1456;
  let name = "name_1456";
  let slug = "slug_1456";
  createL2VPN(id, name, slug);
  verifyL2VPNExists(id, name, slug);
  tryToAddExistingL2VPN(id, name, slug);
  verifyL2VPNExists(id, name, slug);
});

// Monitor: L2VPN Addition Verification
bthread("monitor:L2VPN:addition", function () {
  while (true) {
    let item = waitForAnyL2VPNAdded();
    block(matchDeletedL2VPN(item.id, item.name, item.slug), function () {
      verifyL2VPNExists(item.id, item.name, item.slug);
    });
  }
});

// Monitor: L2VPN Deletion Verification
bthread("monitor:L2VPN:deletion", function () {
  while (true) {
    let item = waitForAnyL2VPNDeleted();
    block(matchAddedL2VPN(item.id, item.name, item.slug), function () {
      verifyL2VPNDoesNotExist(item.id, item.name, item.slug);
    });
  }
});

// Story: crud:TunnelGroup:nondet:1:1
bthread("crud:TunnelGroup:nondet:1:1", function () {
  let id = 1460;
  let name = "name_1460";
  createTunnelGroup(id, name);
  waitForTunnelGroupAdded(id, name);
  tryToAddExistingTunnelGroup(id, name);
  verifyTunnelGroupExists(id, name);
  updateTunnelGroup(id, name);
  deleteTunnelGroup(id, name);
  tryToDeleteANonExistingTunnelGroup(id, name);
  verifyTunnelGroupDoesNotExist(id, name);
});

// Story: crud:TunnelGroup:nondet:1:2
bthread("crud:TunnelGroup:nondet:1:2", function () {
  let id = 1461;
  let name = "name_1461";
  createTunnelGroup(id, name);
  tryToAddExistingTunnelGroup(id, name);
  updateTunnelGroup(id, name);
  verifyTunnelGroupExists(id, name);
  deleteTunnelGroup(id, name);
  tryToDeleteANonExistingTunnelGroup(id, name);
  verifyTunnelGroupDoesNotExist(id, name);
});

// Story: crud:TunnelGroup:nondet:negative:dup-add
bthread("crud:TunnelGroup:nondet:negative:dup-add", function () {
  let id = 1466;
  let name = "name_1466";
  createTunnelGroup(id, name);
  verifyTunnelGroupExists(id, name);
  tryToAddExistingTunnelGroup(id, name);
  verifyTunnelGroupExists(id, name);
});

// Monitor: TunnelGroup Addition Verification
bthread("monitor:TunnelGroup:addition", function () {
  while (true) {
    let item = waitForAnyTunnelGroupAdded();
    block(matchDeletedTunnelGroup(item.id, item.name), function () {
      verifyTunnelGroupExists(item.id, item.name);
    });
  }
});

// Monitor: TunnelGroup Deletion Verification
bthread("monitor:TunnelGroup:deletion", function () {
  while (true) {
    let item = waitForAnyTunnelGroupDeleted();
    block(matchAddedTunnelGroup(item.id, item.name), function () {
      verifyTunnelGroupDoesNotExist(item.id, item.name);
    });
  }
});

// Story: crud:TunnelTermination:nondet:1:1
bthread("crud:TunnelTermination:nondet:1:1", function () {
  let id = 1470;
  createTunnelTermination(id);
  waitForTunnelTerminationAdded(id);
  tryToAddExistingTunnelTermination(id);
  verifyTunnelTerminationExists(id);
  updateTunnelTermination(id);
  deleteTunnelTermination(id);
  tryToDeleteANonExistingTunnelTermination(id);
  verifyTunnelTerminationDoesNotExist(id);
});

// Story: crud:TunnelTermination:nondet:1:2
bthread("crud:TunnelTermination:nondet:1:2", function () {
  let id = 1471;
  createTunnelTermination(id);
  tryToAddExistingTunnelTermination(id);
  updateTunnelTermination(id);
  verifyTunnelTerminationExists(id);
  deleteTunnelTermination(id);
  tryToDeleteANonExistingTunnelTermination(id);
  verifyTunnelTerminationDoesNotExist(id);
});

// Story: crud:TunnelTermination:nondet:negative:dup-add
bthread("crud:TunnelTermination:nondet:negative:dup-add", function () {
  let id = 1476;
  createTunnelTermination(id);
  verifyTunnelTerminationExists(id);
  tryToAddExistingTunnelTermination(id);
  verifyTunnelTerminationExists(id);
});

// Monitor: TunnelTermination Addition Verification
bthread("monitor:TunnelTermination:addition", function () {
  while (true) {
    let item = waitForAnyTunnelTerminationAdded();
    block(matchDeletedTunnelTermination(item.id), function () {
      verifyTunnelTerminationExists(item.id);
    });
  }
});

// Monitor: TunnelTermination Deletion Verification
bthread("monitor:TunnelTermination:deletion", function () {
  while (true) {
    let item = waitForAnyTunnelTerminationDeleted();
    block(matchAddedTunnelTermination(item.id), function () {
      verifyTunnelTerminationDoesNotExist(item.id);
    });
  }
});

// Story: crud:Tunnel:nondet:1:1
bthread("crud:Tunnel:nondet:1:1", function () {
  let id = 1480;
  let name = "name_1480";
  createTunnel(id, name);
  waitForTunnelAdded(id, name);
  tryToAddExistingTunnel(id, name);
  verifyTunnelExists(id, name);
  updateTunnel(id, name);
  deleteTunnel(id, name);
  tryToDeleteANonExistingTunnel(id, name);
  verifyTunnelDoesNotExist(id, name);
});

// Story: crud:Tunnel:nondet:1:2
bthread("crud:Tunnel:nondet:1:2", function () {
  let id = 1481;
  let name = "name_1481";
  createTunnel(id, name);
  tryToAddExistingTunnel(id, name);
  updateTunnel(id, name);
  verifyTunnelExists(id, name);
  deleteTunnel(id, name);
  tryToDeleteANonExistingTunnel(id, name);
  verifyTunnelDoesNotExist(id, name);
});

// Story: crud:Tunnel:nondet:negative:dup-add
bthread("crud:Tunnel:nondet:negative:dup-add", function () {
  let id = 1486;
  let name = "name_1486";
  createTunnel(id, name);
  verifyTunnelExists(id, name);
  tryToAddExistingTunnel(id, name);
  verifyTunnelExists(id, name);
});

// Monitor: Tunnel Addition Verification
bthread("monitor:Tunnel:addition", function () {
  while (true) {
    let item = waitForAnyTunnelAdded();
    block(matchDeletedTunnel(item.id, item.name), function () {
      verifyTunnelExists(item.id, item.name);
    });
  }
});

// Monitor: Tunnel Deletion Verification
bthread("monitor:Tunnel:deletion", function () {
  while (true) {
    let item = waitForAnyTunnelDeleted();
    block(matchAddedTunnel(item.id, item.name), function () {
      verifyTunnelDoesNotExist(item.id, item.name);
    });
  }
});

// Story: crud:WirelessLANGroup:nondet:1:1
bthread("crud:WirelessLANGroup:nondet:1:1", function () {
  let id = 1490;
  createWirelessLANGroup(id);
  waitForWirelessLANGroupAdded(id);
  tryToAddExistingWirelessLANGroup(id);
  verifyWirelessLANGroupExists(id);
  updateWirelessLANGroup(id);
  deleteWirelessLANGroup(id);
  tryToDeleteANonExistingWirelessLANGroup(id);
  verifyWirelessLANGroupDoesNotExist(id);
});

// Story: crud:WirelessLANGroup:nondet:1:2
bthread("crud:WirelessLANGroup:nondet:1:2", function () {
  let id = 1491;
  createWirelessLANGroup(id);
  tryToAddExistingWirelessLANGroup(id);
  updateWirelessLANGroup(id);
  verifyWirelessLANGroupExists(id);
  deleteWirelessLANGroup(id);
  tryToDeleteANonExistingWirelessLANGroup(id);
  verifyWirelessLANGroupDoesNotExist(id);
});

// Story: crud:WirelessLANGroup:nondet:negative:dup-add
bthread("crud:WirelessLANGroup:nondet:negative:dup-add", function () {
  let id = 1496;
  createWirelessLANGroup(id);
  verifyWirelessLANGroupExists(id);
  tryToAddExistingWirelessLANGroup(id);
  verifyWirelessLANGroupExists(id);
});

// Monitor: WirelessLANGroup Addition Verification
bthread("monitor:WirelessLANGroup:addition", function () {
  while (true) {
    let item = waitForAnyWirelessLANGroupAdded();
    block(matchDeletedWirelessLANGroup(item.id), function () {
      verifyWirelessLANGroupExists(item.id);
    });
  }
});

// Monitor: WirelessLANGroup Deletion Verification
bthread("monitor:WirelessLANGroup:deletion", function () {
  while (true) {
    let item = waitForAnyWirelessLANGroupDeleted();
    block(matchAddedWirelessLANGroup(item.id), function () {
      verifyWirelessLANGroupDoesNotExist(item.id);
    });
  }
});

// Story: crud:WirelessLAN:nondet:1:1
bthread("crud:WirelessLAN:nondet:1:1", function () {
  let id = 1500;
  createWirelessLAN(id);
  waitForWirelessLANAdded(id);
  tryToAddExistingWirelessLAN(id);
  verifyWirelessLANExists(id);
  updateWirelessLAN(id);
  deleteWirelessLAN(id);
  tryToDeleteANonExistingWirelessLAN(id);
  verifyWirelessLANDoesNotExist(id);
});

// Story: crud:WirelessLAN:nondet:1:2
bthread("crud:WirelessLAN:nondet:1:2", function () {
  let id = 1501;
  createWirelessLAN(id);
  tryToAddExistingWirelessLAN(id);
  updateWirelessLAN(id);
  verifyWirelessLANExists(id);
  deleteWirelessLAN(id);
  tryToDeleteANonExistingWirelessLAN(id);
  verifyWirelessLANDoesNotExist(id);
});

// Story: crud:WirelessLAN:nondet:negative:dup-add
bthread("crud:WirelessLAN:nondet:negative:dup-add", function () {
  let id = 1506;
  createWirelessLAN(id);
  verifyWirelessLANExists(id);
  tryToAddExistingWirelessLAN(id);
  verifyWirelessLANExists(id);
});

// Monitor: WirelessLAN Addition Verification
bthread("monitor:WirelessLAN:addition", function () {
  while (true) {
    let item = waitForAnyWirelessLANAdded();
    block(matchDeletedWirelessLAN(item.id), function () {
      verifyWirelessLANExists(item.id);
    });
  }
});

// Monitor: WirelessLAN Deletion Verification
bthread("monitor:WirelessLAN:deletion", function () {
  while (true) {
    let item = waitForAnyWirelessLANDeleted();
    block(matchAddedWirelessLAN(item.id), function () {
      verifyWirelessLANDoesNotExist(item.id);
    });
  }
});

// Story: crud:WirelessLink:nondet:1:1
bthread("crud:WirelessLink:nondet:1:1", function () {
  let id = 1510;
  createWirelessLink(id);
  waitForWirelessLinkAdded(id);
  tryToAddExistingWirelessLink(id);
  verifyWirelessLinkExists(id);
  updateWirelessLink(id);
  deleteWirelessLink(id);
  tryToDeleteANonExistingWirelessLink(id);
  verifyWirelessLinkDoesNotExist(id);
});

// Story: crud:WirelessLink:nondet:1:2
bthread("crud:WirelessLink:nondet:1:2", function () {
  let id = 1511;
  createWirelessLink(id);
  tryToAddExistingWirelessLink(id);
  updateWirelessLink(id);
  verifyWirelessLinkExists(id);
  deleteWirelessLink(id);
  tryToDeleteANonExistingWirelessLink(id);
  verifyWirelessLinkDoesNotExist(id);
});

// Story: crud:WirelessLink:nondet:negative:dup-add
bthread("crud:WirelessLink:nondet:negative:dup-add", function () {
  let id = 1516;
  createWirelessLink(id);
  verifyWirelessLinkExists(id);
  tryToAddExistingWirelessLink(id);
  verifyWirelessLinkExists(id);
});

// Monitor: WirelessLink Addition Verification
bthread("monitor:WirelessLink:addition", function () {
  while (true) {
    let item = waitForAnyWirelessLinkAdded();
    block(matchDeletedWirelessLink(item.id), function () {
      verifyWirelessLinkExists(item.id);
    });
  }
});

// Monitor: WirelessLink Deletion Verification
bthread("monitor:WirelessLink:deletion", function () {
  while (true) {
    let item = waitForAnyWirelessLinkDeleted();
    block(matchAddedWirelessLink(item.id), function () {
      verifyWirelessLinkDoesNotExist(item.id);
    });
  }
});
