// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:CircuitGroupAssignment:nondet:1:1
bthread("crud:CircuitGroupAssignment:nondet:1:1", function () {
  let id = 200;
  addCircuitGroupAssignment(200);
  tryToAddExistingCircuitGroupAssignment(200);
  verifyCircuitGroupAssignmentExists(id);
  updateCircuitGroupAssignment(id, 200);
  deleteCircuitGroupAssignment(id);
  tryToDeleteANonExistingCircuitGroupAssignment(id);
  verifyCircuitGroupAssignmentDoesNotExist(id);
});

// Story: crud:CircuitGroupAssignment:nondet:1:2
bthread("crud:CircuitGroupAssignment:nondet:1:2", function () {
  let id = 201;
  addCircuitGroupAssignment(201);
  tryToAddExistingCircuitGroupAssignment(201);
  updateCircuitGroupAssignment(id, 201);
  verifyCircuitGroupAssignmentExists(id);
  deleteCircuitGroupAssignment(id);
  tryToDeleteANonExistingCircuitGroupAssignment(id);
  verifyCircuitGroupAssignmentDoesNotExist(id);
});

// Story: crud:CircuitGroupAssignment:nondet:negative:dup-add
bthread("crud:CircuitGroupAssignment:nondet:negative:dup-add", function () {
  let id = 206;
  addCircuitGroupAssignment(206);
  verifyCircuitGroupAssignmentExists(id);
  tryToAddExistingCircuitGroupAssignment(206);
  verifyCircuitGroupAssignmentExists(id);
});

// Story: crud:CircuitGroupAssignment:nondet:existing:update
bthread("crud:CircuitGroupAssignment:nondet:existing:update", function () {
  let ev = waitForAnyCircuitGroupAssignmentAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuitGroupAssignment.apply(null, args), function () {
    // verifyCircuitGroupAssignmentExists.apply(null, args);
    // updateCircuitGroupAssignment.apply(null, args);
  });
});

// Story: monitor:CircuitGroupAssignment:add
bthread("monitor:CircuitGroupAssignment:add", function () {
  while (true) {
    let ev = waitForAnyCircuitGroupAssignmentAdded();
    let args = Object.values(ev);
    block(matchDeletedCircuitGroupAssignment.apply(null, args), function () {
      // verifyCircuitGroupAssignmentExists.apply(null, args);
    });
  }
});

// Story: crud:CircuitGroup:nondet:1:1
bthread("crud:CircuitGroup:nondet:1:1", function () {
  let id = 210;
  addCircuitGroup(210);
  tryToAddExistingCircuitGroup(210);
  verifyCircuitGroupExists(id);
  updateCircuitGroup(id, 210);
  deleteCircuitGroup(id);
  tryToDeleteANonExistingCircuitGroup(id);
  verifyCircuitGroupDoesNotExist(id);
});

// Story: crud:CircuitGroup:nondet:1:2
bthread("crud:CircuitGroup:nondet:1:2", function () {
  let id = 211;
  addCircuitGroup(211);
  tryToAddExistingCircuitGroup(211);
  updateCircuitGroup(id, 211);
  verifyCircuitGroupExists(id);
  deleteCircuitGroup(id);
  tryToDeleteANonExistingCircuitGroup(id);
  verifyCircuitGroupDoesNotExist(id);
});

// Story: crud:CircuitGroup:nondet:negative:dup-add
bthread("crud:CircuitGroup:nondet:negative:dup-add", function () {
  let id = 216;
  addCircuitGroup(216);
  verifyCircuitGroupExists(id);
  tryToAddExistingCircuitGroup(216);
  verifyCircuitGroupExists(id);
});

// Story: crud:CircuitGroup:nondet:existing:update
bthread("crud:CircuitGroup:nondet:existing:update", function () {
  let ev = waitForAnyCircuitGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuitGroup.apply(null, args), function () {
    // verifyCircuitGroupExists.apply(null, args);
    // updateCircuitGroup.apply(null, args);
  });
});

// Story: monitor:CircuitGroup:add
bthread("monitor:CircuitGroup:add", function () {
  while (true) {
    let ev = waitForAnyCircuitGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedCircuitGroup.apply(null, args), function () {
      // verifyCircuitGroupExists.apply(null, args);
    });
  }
});

// Story: crud:CircuitTermination:nondet:1:1
bthread("crud:CircuitTermination:nondet:1:1", function () {
  let id = 220;
  addCircuitTermination(220);
  tryToAddExistingCircuitTermination(220);
  verifyCircuitTerminationExists(id);
  updateCircuitTermination(id, 220);
  deleteCircuitTermination(id);
  tryToDeleteANonExistingCircuitTermination(id);
  verifyCircuitTerminationDoesNotExist(id);
});

// Story: crud:CircuitTermination:nondet:1:2
bthread("crud:CircuitTermination:nondet:1:2", function () {
  let id = 221;
  addCircuitTermination(221);
  tryToAddExistingCircuitTermination(221);
  updateCircuitTermination(id, 221);
  verifyCircuitTerminationExists(id);
  deleteCircuitTermination(id);
  tryToDeleteANonExistingCircuitTermination(id);
  verifyCircuitTerminationDoesNotExist(id);
});

// Story: crud:CircuitTermination:nondet:negative:dup-add
bthread("crud:CircuitTermination:nondet:negative:dup-add", function () {
  let id = 226;
  addCircuitTermination(226);
  verifyCircuitTerminationExists(id);
  tryToAddExistingCircuitTermination(226);
  verifyCircuitTerminationExists(id);
});

// Story: crud:CircuitTermination:nondet:existing:update
bthread("crud:CircuitTermination:nondet:existing:update", function () {
  let ev = waitForAnyCircuitTerminationAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuitTermination.apply(null, args), function () {
    // verifyCircuitTerminationExists.apply(null, args);
    // updateCircuitTermination.apply(null, args);
  });
});

// Story: monitor:CircuitTermination:add
bthread("monitor:CircuitTermination:add", function () {
  while (true) {
    let ev = waitForAnyCircuitTerminationAdded();
    let args = Object.values(ev);
    block(matchDeletedCircuitTermination.apply(null, args), function () {
      // verifyCircuitTerminationExists.apply(null, args);
    });
  }
});
