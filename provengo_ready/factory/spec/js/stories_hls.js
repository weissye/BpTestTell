// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        captured[k] = e.data.parameters[k] || e.data.parameters.id || e.data.parameters.customerId || e.data.parameters.vin || e.data.parameters.garageId || e.data.parameters.chainId || e.data.parameters.pmId || e.data.parameters.roId;
        delete deps[k];
      }
    }
  }
  return captured;
}

// Story: crud:Machine:read_only
bthread("crud:Machine:read_only", function () {

  verifyMachineExists();
});

// Story: crud:Workorder:read_only
bthread("crud:Workorder:read_only", function () {

  verifyWorkorderExists();
});

// Story: crud:MaintenanceTicket:read_only
bthread("crud:MaintenanceTicket:read_only", function () {

  verifyMaintenanceTicketExists();
});

// Story: crud:SensorReading:read_only
bthread("crud:SensorReading:read_only", function () {

  verifySensorReadingExists();
});
