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

// Story: crud:Machine:read_only
bthread("crud:Machine:read_only", function () {

  verifyMachineExists();
});

// Story: crud:WorkOrder:read_only
bthread("crud:WorkOrder:read_only", function () {

  verifyWorkOrderExists();
});

// Story: crud:MaintenanceTicket:read_only
bthread("crud:MaintenanceTicket:read_only", function () {

  verifyMaintenanceTicketExists();
});

// Story: crud:SensorReading:read_only
bthread("crud:SensorReading:read_only", function () {

  verifySensorReadingExists();
});
