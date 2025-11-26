// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Machine:read_only
bthread("crud:Machine:read_only", function () {

  // Read-only check for Machine
  verifyMachineExists(id);
});

// Story: crud:Workorder:read_only
bthread("crud:Workorder:read_only", function () {

  // Read-only check for Workorder
  verifyWorkorderExists(id);
});

// Story: crud:MaintenanceTicket:read_only
bthread("crud:MaintenanceTicket:read_only", function () {

  // Read-only check for MaintenanceTicket
  verifyMaintenanceTicketExists(id);
});

// Story: crud:SensorReading:read_only
bthread("crud:SensorReading:read_only", function () {

  // Read-only check for SensorReading
  verifySensorReadingExists(id);
});
