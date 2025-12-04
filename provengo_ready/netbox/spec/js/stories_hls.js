// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

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

// Story: crud:CableTermination:nondet:1:1
bthread("crud:CableTermination:nondet:1:1", function () {
  let cable = 200;
  let cable_end = "cable_end_200";
  let id = 200;
  let termination_id = 200;
  let termination_type = "termination_type_200";
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
  let cable = 201;
  let cable_end = "cable_end_201";
  let id = 201;
  let termination_id = 201;
  let termination_type = "termination_type_201";
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
  let cable = 206;
  let cable_end = "cable_end_206";
  let id = 206;
  let termination_id = 206;
  let termination_type = "termination_type_206";
  createCableTermination(cable, cable_end, id, termination_id, termination_type);
  verifyCableTerminationExists(cable, cable_end, id, termination_id, termination_type);
  tryToAddExistingCableTermination(cable, cable_end, id, termination_id, termination_type);
  verifyCableTerminationExists(cable, cable_end, id, termination_id, termination_type);
});

<<<<<<< HEAD
=======
// Story: crud:CableTermination:nondet:existing:update
bthread("crud:CableTermination:nondet:existing:update", function () {
  let ev = waitForAnyCableTerminationAdded();
  let args = Object.values(ev);
  block(matchDeletedCableTermination.apply(null, args), function () {
    verifyCableTerminationExists.apply(null, args);
    updateCableTermination.apply(null, args);
    verifyCableTerminationExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:CableTermination:add
bthread("monitor:CableTermination:add", function () {
  while (true) {
    let ev = waitForAnyCableTerminationAdded();
    block(matchDeletedCableTermination(ev.cable, ev.cable_end, ev.id, ev.termination_id, ev.termination_type), function () {
      verifyCableTerminationExists(ev.cable, ev.cable_end, ev.id, ev.termination_id, ev.termination_type);
    });
  }
});

// Story: monitor:CableTermination:deletion
bthread("monitor:CableTermination:deletion", function () {
  while (true) {
    let ev = waitForAnyCableTerminationDeleted();
    block(matchAddedCableTermination(ev.cable, ev.cable_end, ev.id, ev.termination_id, ev.termination_type), function () {
      verifyCableTerminationDoesNotExist(ev.cable, ev.cable_end, ev.id, ev.termination_id, ev.termination_type);
    });
  }
});

// Story: crud:Cable:nondet:1:1
bthread("crud:Cable:nondet:1:1", function () {
  let a_terminations = "a_terminations_210";
  let b_terminations = "b_terminations_210";
  let color = "color_210";
  let comments = "comments_210";
  let custom_fields = {};
  let description = "description_210";
  let id = 210;
  let label = "label_210";
  let length = 210;
  let length_unit = "length_unit_210";
  let status = "status_210";
  let tags = "tags_210";
  let tenant = "tenant_210";
  let type = "type_210";
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
  let a_terminations = "a_terminations_211";
  let b_terminations = "b_terminations_211";
  let color = "color_211";
  let comments = "comments_211";
  let custom_fields = {};
  let description = "description_211";
  let id = 211;
  let label = "label_211";
  let length = 211;
  let length_unit = "length_unit_211";
  let status = "status_211";
  let tags = "tags_211";
  let tenant = "tenant_211";
  let type = "type_211";
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
  let a_terminations = "a_terminations_216";
  let b_terminations = "b_terminations_216";
  let color = "color_216";
  let comments = "comments_216";
  let custom_fields = {};
  let description = "description_216";
  let id = 216;
  let label = "label_216";
  let length = 216;
  let length_unit = "length_unit_216";
  let status = "status_216";
  let tags = "tags_216";
  let tenant = "tenant_216";
  let type = "type_216";
  createCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  verifyCableExists(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  tryToAddExistingCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  verifyCableExists(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
});

<<<<<<< HEAD
=======
// Story: crud:Cable:nondet:existing:update
bthread("crud:Cable:nondet:existing:update", function () {
  let ev = waitForAnyCableAdded();
  let args = Object.values(ev);
  block(matchDeletedCable.apply(null, args), function () {
    verifyCableExists.apply(null, args);
    updateCable.apply(null, args);
    verifyCableExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Cable:add
bthread("monitor:Cable:add", function () {
  while (true) {
    let ev = waitForAnyCableAdded();
    block(matchDeletedCable(ev.a_terminations, ev.b_terminations, ev.color, ev.comments, ev.custom_fields, ev.description, ev.id, ev.label, ev.length, ev.length_unit, ev.status, ev.tags, ev.tenant, ev.type), function () {
      verifyCableExists(ev.a_terminations, ev.b_terminations, ev.color, ev.comments, ev.custom_fields, ev.description, ev.id, ev.label, ev.length, ev.length_unit, ev.status, ev.tags, ev.tenant, ev.type);
    });
  }
});

// Story: monitor:Cable:deletion
bthread("monitor:Cable:deletion", function () {
  while (true) {
    let ev = waitForAnyCableDeleted();
    block(matchAddedCable(ev.a_terminations, ev.b_terminations, ev.color, ev.comments, ev.custom_fields, ev.description, ev.id, ev.label, ev.length, ev.length_unit, ev.status, ev.tags, ev.tenant, ev.type), function () {
      verifyCableDoesNotExist(ev.a_terminations, ev.b_terminations, ev.color, ev.comments, ev.custom_fields, ev.description, ev.id, ev.label, ev.length, ev.length_unit, ev.status, ev.tags, ev.tenant, ev.type);
    });
  }
});

// Story: crud:ConsolePortTemplate:nondet:1:1
bthread("crud:ConsolePortTemplate:nondet:1:1", function () {
  let description = "description_220";
  let device_type = "device_type_220";
  let id = 220;
  let label = "label_220";
  let module_type = "module_type_220";
  let name = "name_220";
  let type = "type_220";
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
  let description = "description_221";
  let device_type = "device_type_221";
  let id = 221;
  let label = "label_221";
  let module_type = "module_type_221";
  let name = "name_221";
  let type = "type_221";
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
  let description = "description_226";
  let device_type = "device_type_226";
  let id = 226;
  let label = "label_226";
  let module_type = "module_type_226";
  let name = "name_226";
  let type = "type_226";
  createConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsolePortTemplateExists(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsolePortTemplateExists(description, device_type, id, label, module_type, name, type);
});

<<<<<<< HEAD
=======
// Story: crud:ConsolePortTemplate:nondet:existing:update
bthread("crud:ConsolePortTemplate:nondet:existing:update", function () {
  let ev = waitForAnyConsolePortTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedConsolePortTemplate.apply(null, args), function () {
    verifyConsolePortTemplateExists.apply(null, args);
    updateConsolePortTemplate.apply(null, args);
    verifyConsolePortTemplateExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ConsolePortTemplate:add
bthread("monitor:ConsolePortTemplate:add", function () {
  while (true) {
    let ev = waitForAnyConsolePortTemplateAdded();
    block(matchDeletedConsolePortTemplate(ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.type), function () {
      verifyConsolePortTemplateExists(ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.type);
    });
  }
});

// Story: monitor:ConsolePortTemplate:deletion
bthread("monitor:ConsolePortTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyConsolePortTemplateDeleted();
    block(matchAddedConsolePortTemplate(ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.type), function () {
      verifyConsolePortTemplateDoesNotExist(ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.type);
    });
  }
});

// Story: crud:ConsolePort:nondet:1:1
bthread("crud:ConsolePort:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_230";
  let device = "device_230";
  let id = 230;
  let label = "label_230";
  let mark_connected = true;
  let module = "module_230";
  let name = "name_230";
  let speed = 230;
  let tags = "tags_230";
  let type = "type_230";
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
  let description = "description_231";
  let device = "device_231";
  let id = 231;
  let label = "label_231";
  let mark_connected = true;
  let module = "module_231";
  let name = "name_231";
  let speed = 231;
  let tags = "tags_231";
  let type = "type_231";
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
  let description = "description_236";
  let device = "device_236";
  let id = 236;
  let label = "label_236";
  let mark_connected = true;
  let module = "module_236";
  let name = "name_236";
  let speed = 236;
  let tags = "tags_236";
  let type = "type_236";
  createConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsolePortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToAddExistingConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsolePortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
});

<<<<<<< HEAD
=======
// Story: crud:ConsolePort:nondet:existing:update
bthread("crud:ConsolePort:nondet:existing:update", function () {
  let ev = waitForAnyConsolePortAdded();
  let args = Object.values(ev);
  block(matchDeletedConsolePort.apply(null, args), function () {
    verifyConsolePortExists.apply(null, args);
    updateConsolePort.apply(null, args);
    verifyConsolePortExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ConsolePort:add
bthread("monitor:ConsolePort:add", function () {
  while (true) {
    let ev = waitForAnyConsolePortAdded();
    block(matchDeletedConsolePort(ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.speed, ev.tags, ev.type), function () {
      verifyConsolePortExists(ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.speed, ev.tags, ev.type);
    });
  }
});

// Story: monitor:ConsolePort:deletion
bthread("monitor:ConsolePort:deletion", function () {
  while (true) {
    let ev = waitForAnyConsolePortDeleted();
    block(matchAddedConsolePort(ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.speed, ev.tags, ev.type), function () {
      verifyConsolePortDoesNotExist(ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.speed, ev.tags, ev.type);
    });
  }
});

// Story: crud:ConsoleServerPortTemplate:nondet:1:1
bthread("crud:ConsoleServerPortTemplate:nondet:1:1", function () {
  let description = "description_240";
  let device_type = "device_type_240";
  let device_type_id;
  let id = 240;
  let label = "label_240";
  let module_type = "module_type_240";
  let module_type_id;
  let name = "name_240";
  let type = "type_240";
  // Dependency Barrier
  let deps = {};
  deps["device_type_id"] = matchAnyDeviceAdded();
  deps["module_type_id"] = matchAnyModuleAdded();
  let pkMap = {"device_type_id": "id", "module_type_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  device_type_id = captured["device_type_id"];
  module_type_id = captured["module_type_id"];
  createConsoleServerPortTemplate(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  waitForConsoleServerPortTemplateAdded(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  tryToAddExistingConsoleServerPortTemplate(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  updateConsoleServerPortTemplate(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  deleteConsoleServerPortTemplate(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  tryToDeleteANonExistingConsoleServerPortTemplate(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  verifyConsoleServerPortTemplateDoesNotExist(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
});

// Story: crud:ConsoleServerPortTemplate:nondet:1:2
bthread("crud:ConsoleServerPortTemplate:nondet:1:2", function () {
  let description = "description_241";
  let device_type = "device_type_241";
  let device_type_id;
  let id = 241;
  let label = "label_241";
  let module_type = "module_type_241";
  let module_type_id;
  let name = "name_241";
  let type = "type_241";
<<<<<<< HEAD
  createConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  updateConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, id, label, module_type, name, type);
  deleteConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  tryToDeleteANonExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateDoesNotExist(description, device_type, id, label, module_type, name, type);
=======
  // Dependency Barrier
  let deps = {};
  deps["device_type_id"] = matchAnyDeviceAdded();
  deps["module_type_id"] = matchAnyModuleAdded();
  let pkMap = {"device_type_id": "id", "module_type_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  device_type_id = captured["device_type_id"];
  module_type_id = captured["module_type_id"];
  createConsoleServerPortTemplate(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  tryToAddExistingConsoleServerPortTemplate(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  updateConsoleServerPortTemplate(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  deleteConsoleServerPortTemplate(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  tryToDeleteANonExistingConsoleServerPortTemplate(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  verifyConsoleServerPortTemplateDoesNotExist(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:ConsoleServerPortTemplate:nondet:negative:dup-add
bthread("crud:ConsoleServerPortTemplate:nondet:negative:dup-add", function () {
  let description = "description_246";
  let device_type = "device_type_246";
  let device_type_id;
  let id = 246;
  let label = "label_246";
  let module_type = "module_type_246";
  let module_type_id;
  let name = "name_246";
  let type = "type_246";
<<<<<<< HEAD
  createConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, id, label, module_type, name, type);
=======
  // Dependency Barrier
  let deps = {};
  deps["device_type_id"] = matchAnyDeviceAdded();
  deps["module_type_id"] = matchAnyModuleAdded();
  let pkMap = {"device_type_id": "id", "module_type_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  device_type_id = captured["device_type_id"];
  module_type_id = captured["module_type_id"];
  createConsoleServerPortTemplate(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  tryToAddExistingConsoleServerPortTemplate(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, device_type_id, id, label, module_type, module_type_id, name, type);
});

// Story: crud:ConsoleServerPortTemplate:nondet:existing:update
bthread("crud:ConsoleServerPortTemplate:nondet:existing:update", function () {
  let ev = waitForAnyConsoleServerPortTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedConsoleServerPortTemplate.apply(null, args), function () {
    verifyConsoleServerPortTemplateExists.apply(null, args);
    updateConsoleServerPortTemplate.apply(null, args);
    verifyConsoleServerPortTemplateExists.apply(null, args);
  });
});

// Story: monitor:ConsoleServerPortTemplate:add
bthread("monitor:ConsoleServerPortTemplate:add", function () {
  while (true) {
    let ev = waitForAnyConsoleServerPortTemplateAdded();
    block(matchDeletedConsoleServerPortTemplate(ev.description, ev.device_type, ev.device_type_id, ev.id, ev.label, ev.module_type, ev.module_type_id, ev.name, ev.type), function () {
      verifyConsoleServerPortTemplateExists(ev.description, ev.device_type, ev.device_type_id, ev.id, ev.label, ev.module_type, ev.module_type_id, ev.name, ev.type);
    });
  }
});

// Story: monitor:ConsoleServerPortTemplate:deletion
bthread("monitor:ConsoleServerPortTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyConsoleServerPortTemplateDeleted();
    block(matchAddedConsoleServerPortTemplate(ev.description, ev.device_type, ev.device_type_id, ev.id, ev.label, ev.module_type, ev.module_type_id, ev.name, ev.type), function () {
      verifyConsoleServerPortTemplateDoesNotExist(ev.description, ev.device_type, ev.device_type_id, ev.id, ev.label, ev.module_type, ev.module_type_id, ev.name, ev.type);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:ConsoleServerPortTemplate:add
bthread("monitor:ConsoleServerPortTemplate:add", function () {
  while (true) {
    let ev = waitForAnyConsoleServerPortTemplateAdded();
    block(matchDeletedConsoleServerPortTemplate(ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.type), function () {
      verifyConsoleServerPortTemplateExists(ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.type);
    });
  }
});

// Story: monitor:ConsoleServerPortTemplate:deletion
bthread("monitor:ConsoleServerPortTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyConsoleServerPortTemplateDeleted();
    block(matchAddedConsoleServerPortTemplate(ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.type), function () {
      verifyConsoleServerPortTemplateDoesNotExist(ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.type);
    });
  }
});

// Story: crud:ConsoleServerPort:nondet:1:1
bthread("crud:ConsoleServerPort:nondet:1:1", function () {
  let cable_end = "cable_end_250";
  let cable_id;
  let custom_fields = {};
  let description = "description_250";
  let device = "device_250";
  let device_id;
  let device_role_id;
  let id = 250;
  let label = "label_250";
<<<<<<< HEAD
  let mark_connected = true;
=======
  let location_id;
  let mark_connected = "mark_connected_250";
>>>>>>> 1302d9a (Fix emitter bugs)
  let module = "module_250";
  let module_id;
  let name = "name_250";
  let rack_id;
  let speed = 250;
  let tag_id;
  let tags = "tags_250";
  let type = "type_250";
  let virtual_chassis_id = 250;
  // Dependency Barrier
  let deps = {};
  deps["cable_id"] = matchAnyCableAdded();
  deps["device_id"] = matchAnyDeviceAdded();
  deps["device_role_id"] = matchAnyDeviceAdded();
  deps["device_role_id"] = matchAnyRoleAdded();
  deps["location_id"] = matchAnyLocationAdded();
  deps["module_id"] = matchAnyModuleAdded();
  deps["rack_id"] = matchAnyRackAdded();
  deps["tag_id"] = matchAnyTagAdded();
  let pkMap = {"cable_id": "id", "device_id": "id", "device_role_id": "id", "location_id": "id", "module_id": "id", "rack_id": "id", "tag_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  cable_id = captured["cable_id"];
  device_id = captured["device_id"];
  device_role_id = captured["device_role_id"];
  device_role_id = captured["device_role_id"];
  location_id = captured["location_id"];
  module_id = captured["module_id"];
  rack_id = captured["rack_id"];
  tag_id = captured["tag_id"];
  createConsoleServerPort(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  waitForConsoleServerPortAdded(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  tryToAddExistingConsoleServerPort(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  verifyConsoleServerPortExists(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  updateConsoleServerPort(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  deleteConsoleServerPort(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  tryToDeleteANonExistingConsoleServerPort(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  verifyConsoleServerPortDoesNotExist(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
});

// Story: crud:ConsoleServerPort:nondet:1:2
bthread("crud:ConsoleServerPort:nondet:1:2", function () {
  let cable_end = "cable_end_251";
  let cable_id;
  let custom_fields = {};
  let description = "description_251";
  let device = "device_251";
  let device_id;
  let device_role_id;
  let id = 251;
  let label = "label_251";
<<<<<<< HEAD
  let mark_connected = true;
=======
  let location_id;
  let mark_connected = "mark_connected_251";
>>>>>>> 1302d9a (Fix emitter bugs)
  let module = "module_251";
  let module_id;
  let name = "name_251";
  let rack_id;
  let speed = 251;
  let tag_id;
  let tags = "tags_251";
  let type = "type_251";
<<<<<<< HEAD
  createConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToAddExistingConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  updateConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsoleServerPortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  deleteConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToDeleteANonExistingConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsoleServerPortDoesNotExist(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
=======
  let virtual_chassis_id = 251;
  // Dependency Barrier
  let deps = {};
  deps["cable_id"] = matchAnyCableAdded();
  deps["device_id"] = matchAnyDeviceAdded();
  deps["device_role_id"] = matchAnyDeviceAdded();
  deps["device_role_id"] = matchAnyRoleAdded();
  deps["location_id"] = matchAnyLocationAdded();
  deps["module_id"] = matchAnyModuleAdded();
  deps["rack_id"] = matchAnyRackAdded();
  deps["tag_id"] = matchAnyTagAdded();
  let pkMap = {"cable_id": "id", "device_id": "id", "device_role_id": "id", "location_id": "id", "module_id": "id", "rack_id": "id", "tag_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  cable_id = captured["cable_id"];
  device_id = captured["device_id"];
  device_role_id = captured["device_role_id"];
  device_role_id = captured["device_role_id"];
  location_id = captured["location_id"];
  module_id = captured["module_id"];
  rack_id = captured["rack_id"];
  tag_id = captured["tag_id"];
  createConsoleServerPort(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  tryToAddExistingConsoleServerPort(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  updateConsoleServerPort(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  verifyConsoleServerPortExists(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  deleteConsoleServerPort(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  tryToDeleteANonExistingConsoleServerPort(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  verifyConsoleServerPortDoesNotExist(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:ConsoleServerPort:nondet:negative:dup-add
bthread("crud:ConsoleServerPort:nondet:negative:dup-add", function () {
  let cable_end = "cable_end_256";
  let cable_id;
  let custom_fields = {};
  let description = "description_256";
  let device = "device_256";
  let device_id;
  let device_role_id;
  let id = 256;
  let label = "label_256";
<<<<<<< HEAD
  let mark_connected = true;
=======
  let location_id;
  let mark_connected = "mark_connected_256";
>>>>>>> 1302d9a (Fix emitter bugs)
  let module = "module_256";
  let module_id;
  let name = "name_256";
  let rack_id;
  let speed = 256;
  let tag_id;
  let tags = "tags_256";
  let type = "type_256";
<<<<<<< HEAD
  createConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsoleServerPortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToAddExistingConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsoleServerPortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
=======
  let virtual_chassis_id = 256;
  // Dependency Barrier
  let deps = {};
  deps["cable_id"] = matchAnyCableAdded();
  deps["device_id"] = matchAnyDeviceAdded();
  deps["device_role_id"] = matchAnyDeviceAdded();
  deps["device_role_id"] = matchAnyRoleAdded();
  deps["location_id"] = matchAnyLocationAdded();
  deps["module_id"] = matchAnyModuleAdded();
  deps["rack_id"] = matchAnyRackAdded();
  deps["tag_id"] = matchAnyTagAdded();
  let pkMap = {"cable_id": "id", "device_id": "id", "device_role_id": "id", "location_id": "id", "module_id": "id", "rack_id": "id", "tag_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  cable_id = captured["cable_id"];
  device_id = captured["device_id"];
  device_role_id = captured["device_role_id"];
  device_role_id = captured["device_role_id"];
  location_id = captured["location_id"];
  module_id = captured["module_id"];
  rack_id = captured["rack_id"];
  tag_id = captured["tag_id"];
  createConsoleServerPort(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  verifyConsoleServerPortExists(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  tryToAddExistingConsoleServerPort(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
  verifyConsoleServerPortExists(cable_end, cable_id, custom_fields, description, device, device_id, device_role_id, id, label, location_id, mark_connected, module, module_id, name, rack_id, speed, tag_id, tags, type, virtual_chassis_id);
});

// Story: crud:ConsoleServerPort:nondet:existing:update
bthread("crud:ConsoleServerPort:nondet:existing:update", function () {
  let ev = waitForAnyConsoleServerPortAdded();
  let args = Object.values(ev);
  block(matchDeletedConsoleServerPort.apply(null, args), function () {
    verifyConsoleServerPortExists.apply(null, args);
    updateConsoleServerPort.apply(null, args);
    verifyConsoleServerPortExists.apply(null, args);
  });
});

// Story: monitor:ConsoleServerPort:add
bthread("monitor:ConsoleServerPort:add", function () {
  while (true) {
    let ev = waitForAnyConsoleServerPortAdded();
    block(matchDeletedConsoleServerPort(ev.cable_end, ev.cable_id, ev.custom_fields, ev.description, ev.device, ev.device_id, ev.device_role_id, ev.id, ev.label, ev.location_id, ev.mark_connected, ev.module, ev.module_id, ev.name, ev.rack_id, ev.speed, ev.tag_id, ev.tags, ev.type, ev.virtual_chassis_id), function () {
      verifyConsoleServerPortExists(ev.cable_end, ev.cable_id, ev.custom_fields, ev.description, ev.device, ev.device_id, ev.device_role_id, ev.id, ev.label, ev.location_id, ev.mark_connected, ev.module, ev.module_id, ev.name, ev.rack_id, ev.speed, ev.tag_id, ev.tags, ev.type, ev.virtual_chassis_id);
    });
  }
});

// Story: monitor:ConsoleServerPort:deletion
bthread("monitor:ConsoleServerPort:deletion", function () {
  while (true) {
    let ev = waitForAnyConsoleServerPortDeleted();
    block(matchAddedConsoleServerPort(ev.cable_end, ev.cable_id, ev.custom_fields, ev.description, ev.device, ev.device_id, ev.device_role_id, ev.id, ev.label, ev.location_id, ev.mark_connected, ev.module, ev.module_id, ev.name, ev.rack_id, ev.speed, ev.tag_id, ev.tags, ev.type, ev.virtual_chassis_id), function () {
      verifyConsoleServerPortDoesNotExist(ev.cable_end, ev.cable_id, ev.custom_fields, ev.description, ev.device, ev.device_id, ev.device_role_id, ev.id, ev.label, ev.location_id, ev.mark_connected, ev.module, ev.module_id, ev.name, ev.rack_id, ev.speed, ev.tag_id, ev.tags, ev.type, ev.virtual_chassis_id);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:ConsoleServerPort:add
bthread("monitor:ConsoleServerPort:add", function () {
  while (true) {
    let ev = waitForAnyConsoleServerPortAdded();
    block(matchDeletedConsoleServerPort(ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.speed, ev.tags, ev.type), function () {
      verifyConsoleServerPortExists(ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.speed, ev.tags, ev.type);
    });
  }
});

// Story: monitor:ConsoleServerPort:deletion
bthread("monitor:ConsoleServerPort:deletion", function () {
  while (true) {
    let ev = waitForAnyConsoleServerPortDeleted();
    block(matchAddedConsoleServerPort(ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.speed, ev.tags, ev.type), function () {
      verifyConsoleServerPortDoesNotExist(ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.speed, ev.tags, ev.type);
    });
  }
});

// Story: crud:DeviceBayTemplate:nondet:1:1
bthread("crud:DeviceBayTemplate:nondet:1:1", function () {
  let description = "description_260";
  let device_type = "device_type_260";
  let device_type_id;
  let id = 260;
  let label = "label_260";
  let name = "name_260";
  // Dependency Barrier
  let deps = {};
  deps["device_type_id"] = matchAnyDeviceAdded();
  let pkMap = {"device_type_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  device_type_id = captured["device_type_id"];
  createDeviceBayTemplate(description, device_type, device_type_id, id, label, name);
  waitForDeviceBayTemplateAdded(description, device_type, device_type_id, id, label, name);
  tryToAddExistingDeviceBayTemplate(description, device_type, device_type_id, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, device_type_id, id, label, name);
  updateDeviceBayTemplate(description, device_type, device_type_id, id, label, name);
  deleteDeviceBayTemplate(description, device_type, device_type_id, id, label, name);
  tryToDeleteANonExistingDeviceBayTemplate(description, device_type, device_type_id, id, label, name);
  verifyDeviceBayTemplateDoesNotExist(description, device_type, device_type_id, id, label, name);
});

// Story: crud:DeviceBayTemplate:nondet:1:2
bthread("crud:DeviceBayTemplate:nondet:1:2", function () {
  let description = "description_261";
  let device_type = "device_type_261";
  let device_type_id;
  let id = 261;
  let label = "label_261";
  let name = "name_261";
<<<<<<< HEAD
  createDeviceBayTemplate(description, device_type, id, label, name);
  tryToAddExistingDeviceBayTemplate(description, device_type, id, label, name);
  updateDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, id, label, name);
  deleteDeviceBayTemplate(description, device_type, id, label, name);
  tryToDeleteANonExistingDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateDoesNotExist(description, device_type, id, label, name);
=======
  // Dependency Barrier
  let deps = {};
  deps["device_type_id"] = matchAnyDeviceAdded();
  let pkMap = {"device_type_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  device_type_id = captured["device_type_id"];
  createDeviceBayTemplate(description, device_type, device_type_id, id, label, name);
  tryToAddExistingDeviceBayTemplate(description, device_type, device_type_id, id, label, name);
  updateDeviceBayTemplate(description, device_type, device_type_id, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, device_type_id, id, label, name);
  deleteDeviceBayTemplate(description, device_type, device_type_id, id, label, name);
  tryToDeleteANonExistingDeviceBayTemplate(description, device_type, device_type_id, id, label, name);
  verifyDeviceBayTemplateDoesNotExist(description, device_type, device_type_id, id, label, name);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:DeviceBayTemplate:nondet:negative:dup-add
bthread("crud:DeviceBayTemplate:nondet:negative:dup-add", function () {
  let description = "description_266";
  let device_type = "device_type_266";
  let device_type_id;
  let id = 266;
  let label = "label_266";
  let name = "name_266";
<<<<<<< HEAD
  createDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, id, label, name);
  tryToAddExistingDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, id, label, name);
=======
  // Dependency Barrier
  let deps = {};
  deps["device_type_id"] = matchAnyDeviceAdded();
  let pkMap = {"device_type_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  device_type_id = captured["device_type_id"];
  createDeviceBayTemplate(description, device_type, device_type_id, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, device_type_id, id, label, name);
  tryToAddExistingDeviceBayTemplate(description, device_type, device_type_id, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, device_type_id, id, label, name);
});

// Story: crud:DeviceBayTemplate:nondet:existing:update
bthread("crud:DeviceBayTemplate:nondet:existing:update", function () {
  let ev = waitForAnyDeviceBayTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedDeviceBayTemplate.apply(null, args), function () {
    verifyDeviceBayTemplateExists.apply(null, args);
    updateDeviceBayTemplate.apply(null, args);
    verifyDeviceBayTemplateExists.apply(null, args);
  });
});

// Story: monitor:DeviceBayTemplate:add
bthread("monitor:DeviceBayTemplate:add", function () {
  while (true) {
    let ev = waitForAnyDeviceBayTemplateAdded();
    block(matchDeletedDeviceBayTemplate(ev.description, ev.device_type, ev.device_type_id, ev.id, ev.label, ev.name), function () {
      verifyDeviceBayTemplateExists(ev.description, ev.device_type, ev.device_type_id, ev.id, ev.label, ev.name);
    });
  }
});

// Story: monitor:DeviceBayTemplate:deletion
bthread("monitor:DeviceBayTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyDeviceBayTemplateDeleted();
    block(matchAddedDeviceBayTemplate(ev.description, ev.device_type, ev.device_type_id, ev.id, ev.label, ev.name), function () {
      verifyDeviceBayTemplateDoesNotExist(ev.description, ev.device_type, ev.device_type_id, ev.id, ev.label, ev.name);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:DeviceBayTemplate:add
bthread("monitor:DeviceBayTemplate:add", function () {
  while (true) {
    let ev = waitForAnyDeviceBayTemplateAdded();
    block(matchDeletedDeviceBayTemplate(ev.description, ev.device_type, ev.id, ev.label, ev.name), function () {
      verifyDeviceBayTemplateExists(ev.description, ev.device_type, ev.id, ev.label, ev.name);
    });
  }
});

// Story: monitor:DeviceBayTemplate:deletion
bthread("monitor:DeviceBayTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyDeviceBayTemplateDeleted();
    block(matchAddedDeviceBayTemplate(ev.description, ev.device_type, ev.id, ev.label, ev.name), function () {
      verifyDeviceBayTemplateDoesNotExist(ev.description, ev.device_type, ev.id, ev.label, ev.name);
    });
  }
});

// Story: crud:DeviceBay:nondet:1:1
bthread("crud:DeviceBay:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_270";
  let device = "device_270";
  let device_bay_template_id;
  let device_id;
  let device_role_id;
  let id = 270;
  let installed_device = "installed_device_270";
  let installed_device_id;
  let label = "label_270";
  let location_id;
  let name = "name_270";
  let rack_id;
  let site_id;
  let tag_id;
  let tags = "tags_270";
  let virtual_chassis_id = 270;
  // Dependency Barrier
  let deps = {};
  deps["device_bay_template_id"] = matchAnyDeviceAdded();
  deps["device_id"] = matchAnyDeviceAdded();
  deps["device_role_id"] = matchAnyDeviceAdded();
  deps["device_role_id"] = matchAnyRoleAdded();
  deps["installed_device_id"] = matchAnyDeviceAdded();
  deps["location_id"] = matchAnyLocationAdded();
  deps["rack_id"] = matchAnyRackAdded();
  deps["site_id"] = matchAnySiteAdded();
  deps["tag_id"] = matchAnyTagAdded();
  let pkMap = {"device_bay_template_id": "id", "device_id": "id", "device_role_id": "id", "installed_device_id": "id", "location_id": "id", "rack_id": "id", "site_id": "id", "tag_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  device_bay_template_id = captured["device_bay_template_id"];
  device_id = captured["device_id"];
  device_role_id = captured["device_role_id"];
  device_role_id = captured["device_role_id"];
  installed_device_id = captured["installed_device_id"];
  location_id = captured["location_id"];
  rack_id = captured["rack_id"];
  site_id = captured["site_id"];
  tag_id = captured["tag_id"];
  createDeviceBay(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  waitForDeviceBayAdded(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  tryToAddExistingDeviceBay(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  verifyDeviceBayExists(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  updateDeviceBay(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  deleteDeviceBay(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  tryToDeleteANonExistingDeviceBay(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  verifyDeviceBayDoesNotExist(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
});

// Story: crud:DeviceBay:nondet:1:2
bthread("crud:DeviceBay:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_271";
  let device = "device_271";
  let device_bay_template_id;
  let device_id;
  let device_role_id;
  let id = 271;
  let installed_device = "installed_device_271";
  let installed_device_id;
  let label = "label_271";
  let location_id;
  let name = "name_271";
  let rack_id;
  let site_id;
  let tag_id;
  let tags = "tags_271";
<<<<<<< HEAD
  createDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  tryToAddExistingDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  updateDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  verifyDeviceBayExists(custom_fields, description, device, id, installed_device, label, name, tags);
  deleteDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  tryToDeleteANonExistingDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  verifyDeviceBayDoesNotExist(custom_fields, description, device, id, installed_device, label, name, tags);
=======
  let virtual_chassis_id = 271;
  // Dependency Barrier
  let deps = {};
  deps["device_bay_template_id"] = matchAnyDeviceAdded();
  deps["device_id"] = matchAnyDeviceAdded();
  deps["device_role_id"] = matchAnyDeviceAdded();
  deps["device_role_id"] = matchAnyRoleAdded();
  deps["installed_device_id"] = matchAnyDeviceAdded();
  deps["location_id"] = matchAnyLocationAdded();
  deps["rack_id"] = matchAnyRackAdded();
  deps["site_id"] = matchAnySiteAdded();
  deps["tag_id"] = matchAnyTagAdded();
  let pkMap = {"device_bay_template_id": "id", "device_id": "id", "device_role_id": "id", "installed_device_id": "id", "location_id": "id", "rack_id": "id", "site_id": "id", "tag_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  device_bay_template_id = captured["device_bay_template_id"];
  device_id = captured["device_id"];
  device_role_id = captured["device_role_id"];
  device_role_id = captured["device_role_id"];
  installed_device_id = captured["installed_device_id"];
  location_id = captured["location_id"];
  rack_id = captured["rack_id"];
  site_id = captured["site_id"];
  tag_id = captured["tag_id"];
  createDeviceBay(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  tryToAddExistingDeviceBay(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  updateDeviceBay(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  verifyDeviceBayExists(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  deleteDeviceBay(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  tryToDeleteANonExistingDeviceBay(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  verifyDeviceBayDoesNotExist(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:DeviceBay:nondet:negative:dup-add
bthread("crud:DeviceBay:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_276";
  let device = "device_276";
  let device_bay_template_id;
  let device_id;
  let device_role_id;
  let id = 276;
  let installed_device = "installed_device_276";
  let installed_device_id;
  let label = "label_276";
  let location_id;
  let name = "name_276";
  let rack_id;
  let site_id;
  let tag_id;
  let tags = "tags_276";
<<<<<<< HEAD
  createDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  verifyDeviceBayExists(custom_fields, description, device, id, installed_device, label, name, tags);
  tryToAddExistingDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  verifyDeviceBayExists(custom_fields, description, device, id, installed_device, label, name, tags);
=======
  let virtual_chassis_id = 276;
  // Dependency Barrier
  let deps = {};
  deps["device_bay_template_id"] = matchAnyDeviceAdded();
  deps["device_id"] = matchAnyDeviceAdded();
  deps["device_role_id"] = matchAnyDeviceAdded();
  deps["device_role_id"] = matchAnyRoleAdded();
  deps["installed_device_id"] = matchAnyDeviceAdded();
  deps["location_id"] = matchAnyLocationAdded();
  deps["rack_id"] = matchAnyRackAdded();
  deps["site_id"] = matchAnySiteAdded();
  deps["tag_id"] = matchAnyTagAdded();
  let pkMap = {"device_bay_template_id": "id", "device_id": "id", "device_role_id": "id", "installed_device_id": "id", "location_id": "id", "rack_id": "id", "site_id": "id", "tag_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  device_bay_template_id = captured["device_bay_template_id"];
  device_id = captured["device_id"];
  device_role_id = captured["device_role_id"];
  device_role_id = captured["device_role_id"];
  installed_device_id = captured["installed_device_id"];
  location_id = captured["location_id"];
  rack_id = captured["rack_id"];
  site_id = captured["site_id"];
  tag_id = captured["tag_id"];
  createDeviceBay(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  verifyDeviceBayExists(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  tryToAddExistingDeviceBay(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
  verifyDeviceBayExists(custom_fields, description, device, device_bay_template_id, device_id, device_role_id, id, installed_device, installed_device_id, label, location_id, name, rack_id, site_id, tag_id, tags, virtual_chassis_id);
});

// Story: crud:DeviceBay:nondet:existing:update
bthread("crud:DeviceBay:nondet:existing:update", function () {
  let ev = waitForAnyDeviceBayAdded();
  let args = Object.values(ev);
  block(matchDeletedDeviceBay.apply(null, args), function () {
    verifyDeviceBayExists.apply(null, args);
    updateDeviceBay.apply(null, args);
    verifyDeviceBayExists.apply(null, args);
  });
});

// Story: monitor:DeviceBay:add
bthread("monitor:DeviceBay:add", function () {
  while (true) {
    let ev = waitForAnyDeviceBayAdded();
    block(matchDeletedDeviceBay(ev.custom_fields, ev.description, ev.device, ev.device_bay_template_id, ev.device_id, ev.device_role_id, ev.id, ev.installed_device, ev.installed_device_id, ev.label, ev.location_id, ev.name, ev.rack_id, ev.site_id, ev.tag_id, ev.tags, ev.virtual_chassis_id), function () {
      verifyDeviceBayExists(ev.custom_fields, ev.description, ev.device, ev.device_bay_template_id, ev.device_id, ev.device_role_id, ev.id, ev.installed_device, ev.installed_device_id, ev.label, ev.location_id, ev.name, ev.rack_id, ev.site_id, ev.tag_id, ev.tags, ev.virtual_chassis_id);
    });
  }
});

// Story: monitor:DeviceBay:deletion
bthread("monitor:DeviceBay:deletion", function () {
  while (true) {
    let ev = waitForAnyDeviceBayDeleted();
    block(matchAddedDeviceBay(ev.custom_fields, ev.description, ev.device, ev.device_bay_template_id, ev.device_id, ev.device_role_id, ev.id, ev.installed_device, ev.installed_device_id, ev.label, ev.location_id, ev.name, ev.rack_id, ev.site_id, ev.tag_id, ev.tags, ev.virtual_chassis_id), function () {
      verifyDeviceBayDoesNotExist(ev.custom_fields, ev.description, ev.device, ev.device_bay_template_id, ev.device_id, ev.device_role_id, ev.id, ev.installed_device, ev.installed_device_id, ev.label, ev.location_id, ev.name, ev.rack_id, ev.site_id, ev.tag_id, ev.tags, ev.virtual_chassis_id);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:DeviceBay:add
bthread("monitor:DeviceBay:add", function () {
  while (true) {
    let ev = waitForAnyDeviceBayAdded();
    block(matchDeletedDeviceBay(ev.custom_fields, ev.description, ev.device, ev.id, ev.installed_device, ev.label, ev.name, ev.tags), function () {
      verifyDeviceBayExists(ev.custom_fields, ev.description, ev.device, ev.id, ev.installed_device, ev.label, ev.name, ev.tags);
    });
  }
});

// Story: monitor:DeviceBay:deletion
bthread("monitor:DeviceBay:deletion", function () {
  while (true) {
    let ev = waitForAnyDeviceBayDeleted();
    block(matchAddedDeviceBay(ev.custom_fields, ev.description, ev.device, ev.id, ev.installed_device, ev.label, ev.name, ev.tags), function () {
      verifyDeviceBayDoesNotExist(ev.custom_fields, ev.description, ev.device, ev.id, ev.installed_device, ev.label, ev.name, ev.tags);
    });
  }
});

// Story: crud:DeviceRole:nondet:1:1
bthread("crud:DeviceRole:nondet:1:1", function () {
  let color = "color_280";
  let comments = "comments_280";
  let config_template = "config_template_280";
  let config_template_id = 280;
  let content_types = "content_types_280";
  let custom_fields = {};
  let description = "description_280";
  let id = 280;
  let name = "name_280";
  let parent = 280;
  let parent_id = 280;
  let slug = "slug_280";
  let tags = "tags_280";
<<<<<<< HEAD
  let vm_role = true;
  createDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  waitForDeviceRoleAdded(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToAddExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  updateDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  deleteDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToDeleteANonExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleDoesNotExist(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
=======
  let vm_role = "vm_role_280";
  createDeviceRole(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  waitForDeviceRoleAdded(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  tryToAddExistingDeviceRole(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  updateDeviceRole(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  deleteDeviceRole(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  tryToDeleteANonExistingDeviceRole(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  verifyDeviceRoleDoesNotExist(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:DeviceRole:nondet:1:2
bthread("crud:DeviceRole:nondet:1:2", function () {
  let color = "color_281";
  let comments = "comments_281";
  let config_template = "config_template_281";
  let config_template_id = 281;
  let content_types = "content_types_281";
  let custom_fields = {};
  let description = "description_281";
  let id = 281;
  let name = "name_281";
  let parent = 281;
  let parent_id = 281;
  let slug = "slug_281";
  let tags = "tags_281";
<<<<<<< HEAD
  let vm_role = true;
  createDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToAddExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  updateDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  deleteDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToDeleteANonExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleDoesNotExist(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
=======
  let vm_role = "vm_role_281";
  createDeviceRole(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  tryToAddExistingDeviceRole(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  updateDeviceRole(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  deleteDeviceRole(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  tryToDeleteANonExistingDeviceRole(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  verifyDeviceRoleDoesNotExist(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:DeviceRole:nondet:negative:dup-add
bthread("crud:DeviceRole:nondet:negative:dup-add", function () {
  let color = "color_286";
  let comments = "comments_286";
  let config_template = "config_template_286";
  let config_template_id = 286;
  let content_types = "content_types_286";
  let custom_fields = {};
  let description = "description_286";
  let id = 286;
  let name = "name_286";
  let parent = 286;
  let parent_id = 286;
  let slug = "slug_286";
  let tags = "tags_286";
<<<<<<< HEAD
  let vm_role = true;
  createDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToAddExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
=======
  let vm_role = "vm_role_286";
  createDeviceRole(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  tryToAddExistingDeviceRole(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, config_template_id, content_types, custom_fields, description, id, name, parent, parent_id, slug, tags, vm_role);
});

// Story: crud:DeviceRole:nondet:existing:update
bthread("crud:DeviceRole:nondet:existing:update", function () {
  let ev = waitForAnyDeviceRoleAdded();
  let args = Object.values(ev);
  block(matchDeletedDeviceRole.apply(null, args), function () {
    verifyDeviceRoleExists.apply(null, args);
    updateDeviceRole.apply(null, args);
    verifyDeviceRoleExists.apply(null, args);
  });
});

// Story: monitor:DeviceRole:add
bthread("monitor:DeviceRole:add", function () {
  while (true) {
    let ev = waitForAnyDeviceRoleAdded();
    block(matchDeletedDeviceRole(ev.color, ev.comments, ev.config_template, ev.config_template_id, ev.content_types, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.parent_id, ev.slug, ev.tags, ev.vm_role), function () {
      verifyDeviceRoleExists(ev.color, ev.comments, ev.config_template, ev.config_template_id, ev.content_types, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.parent_id, ev.slug, ev.tags, ev.vm_role);
    });
  }
});

// Story: monitor:DeviceRole:deletion
bthread("monitor:DeviceRole:deletion", function () {
  while (true) {
    let ev = waitForAnyDeviceRoleDeleted();
    block(matchAddedDeviceRole(ev.color, ev.comments, ev.config_template, ev.config_template_id, ev.content_types, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.parent_id, ev.slug, ev.tags, ev.vm_role), function () {
      verifyDeviceRoleDoesNotExist(ev.color, ev.comments, ev.config_template, ev.config_template_id, ev.content_types, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.parent_id, ev.slug, ev.tags, ev.vm_role);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:DeviceRole:add
bthread("monitor:DeviceRole:add", function () {
  while (true) {
    let ev = waitForAnyDeviceRoleAdded();
    block(matchDeletedDeviceRole(ev.color, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags, ev.vm_role), function () {
      verifyDeviceRoleExists(ev.color, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags, ev.vm_role);
    });
  }
});

// Story: monitor:DeviceRole:deletion
bthread("monitor:DeviceRole:deletion", function () {
  while (true) {
    let ev = waitForAnyDeviceRoleDeleted();
    block(matchAddedDeviceRole(ev.color, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags, ev.vm_role), function () {
      verifyDeviceRoleDoesNotExist(ev.color, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags, ev.vm_role);
    });
  }
});

// Story: crud:DeviceType:nondet:1:1
bthread("crud:DeviceType:nondet:1:1", function () {
  let airflow = "airflow_290";
  let comments = "comments_290";
  let config_template = "config_template_290";
  let custom_fields = {};
  let default_platform = "default_platform_290";
  let description = "description_290";
  let exclude_from_utilization = true;
  let front_image = "front_image_290";
  let id = 290;
  let is_full_depth = true;
  let manufacturer = "manufacturer_290";
  let model = "model_290";
  let part_number = "part_number_290";
  let rear_image = "rear_image_290";
  let slug = "slug_290";
  let subdevice_role = "subdevice_role_290";
  let tags = "tags_290";
  let u_height = 290;
  let weight = 290;
  let weight_unit = "weight_unit_290";
  createDeviceType(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  waitForDeviceTypeAdded(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToAddExistingDeviceType(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  updateDeviceType(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  deleteDeviceType(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToDeleteANonExistingDeviceType(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeDoesNotExist(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
});

// Story: crud:DeviceType:nondet:1:2
bthread("crud:DeviceType:nondet:1:2", function () {
  let airflow = "airflow_291";
  let comments = "comments_291";
  let config_template = "config_template_291";
  let custom_fields = {};
  let default_platform = "default_platform_291";
  let description = "description_291";
  let exclude_from_utilization = true;
  let front_image = "front_image_291";
  let id = 291;
  let is_full_depth = true;
  let manufacturer = "manufacturer_291";
  let model = "model_291";
  let part_number = "part_number_291";
  let rear_image = "rear_image_291";
  let slug = "slug_291";
  let subdevice_role = "subdevice_role_291";
  let tags = "tags_291";
  let u_height = 291;
  let weight = 291;
  let weight_unit = "weight_unit_291";
<<<<<<< HEAD
  createDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToAddExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  updateDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  deleteDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToDeleteANonExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeDoesNotExist(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
=======
  createDeviceType(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToAddExistingDeviceType(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  updateDeviceType(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  deleteDeviceType(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToDeleteANonExistingDeviceType(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeDoesNotExist(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:DeviceType:nondet:negative:dup-add
bthread("crud:DeviceType:nondet:negative:dup-add", function () {
  let airflow = "airflow_296";
  let comments = "comments_296";
  let config_template = "config_template_296";
  let custom_fields = {};
  let default_platform = "default_platform_296";
  let description = "description_296";
  let exclude_from_utilization = true;
  let front_image = "front_image_296";
  let id = 296;
  let is_full_depth = true;
  let manufacturer = "manufacturer_296";
  let model = "model_296";
  let part_number = "part_number_296";
  let rear_image = "rear_image_296";
  let slug = "slug_296";
  let subdevice_role = "subdevice_role_296";
  let tags = "tags_296";
  let u_height = 296;
  let weight = 296;
  let weight_unit = "weight_unit_296";
<<<<<<< HEAD
  createDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToAddExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
=======
  createDeviceType(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToAddExistingDeviceType(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, config_template, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
});

// Story: crud:DeviceType:nondet:existing:update
bthread("crud:DeviceType:nondet:existing:update", function () {
  let ev = waitForAnyDeviceTypeAdded();
  let args = Object.values(ev);
  block(matchDeletedDeviceType.apply(null, args), function () {
    verifyDeviceTypeExists.apply(null, args);
    updateDeviceType.apply(null, args);
    verifyDeviceTypeExists.apply(null, args);
  });
});

// Story: monitor:DeviceType:add
bthread("monitor:DeviceType:add", function () {
  while (true) {
    let ev = waitForAnyDeviceTypeAdded();
    block(matchDeletedDeviceType(ev.airflow, ev.comments, ev.config_template, ev.custom_fields, ev.default_platform, ev.description, ev.exclude_from_utilization, ev.front_image, ev.id, ev.is_full_depth, ev.manufacturer, ev.model, ev.part_number, ev.rear_image, ev.slug, ev.subdevice_role, ev.tags, ev.u_height, ev.weight, ev.weight_unit), function () {
      verifyDeviceTypeExists(ev.airflow, ev.comments, ev.config_template, ev.custom_fields, ev.default_platform, ev.description, ev.exclude_from_utilization, ev.front_image, ev.id, ev.is_full_depth, ev.manufacturer, ev.model, ev.part_number, ev.rear_image, ev.slug, ev.subdevice_role, ev.tags, ev.u_height, ev.weight, ev.weight_unit);
    });
  }
});

// Story: monitor:DeviceType:deletion
bthread("monitor:DeviceType:deletion", function () {
  while (true) {
    let ev = waitForAnyDeviceTypeDeleted();
    block(matchAddedDeviceType(ev.airflow, ev.comments, ev.config_template, ev.custom_fields, ev.default_platform, ev.description, ev.exclude_from_utilization, ev.front_image, ev.id, ev.is_full_depth, ev.manufacturer, ev.model, ev.part_number, ev.rear_image, ev.slug, ev.subdevice_role, ev.tags, ev.u_height, ev.weight, ev.weight_unit), function () {
      verifyDeviceTypeDoesNotExist(ev.airflow, ev.comments, ev.config_template, ev.custom_fields, ev.default_platform, ev.description, ev.exclude_from_utilization, ev.front_image, ev.id, ev.is_full_depth, ev.manufacturer, ev.model, ev.part_number, ev.rear_image, ev.slug, ev.subdevice_role, ev.tags, ev.u_height, ev.weight, ev.weight_unit);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:DeviceType:add
bthread("monitor:DeviceType:add", function () {
  while (true) {
    let ev = waitForAnyDeviceTypeAdded();
    block(matchDeletedDeviceType(ev.airflow, ev.comments, ev.custom_fields, ev.default_platform, ev.description, ev.exclude_from_utilization, ev.front_image, ev.id, ev.is_full_depth, ev.manufacturer, ev.model, ev.part_number, ev.rear_image, ev.slug, ev.subdevice_role, ev.tags, ev.u_height, ev.weight, ev.weight_unit), function () {
      verifyDeviceTypeExists(ev.airflow, ev.comments, ev.custom_fields, ev.default_platform, ev.description, ev.exclude_from_utilization, ev.front_image, ev.id, ev.is_full_depth, ev.manufacturer, ev.model, ev.part_number, ev.rear_image, ev.slug, ev.subdevice_role, ev.tags, ev.u_height, ev.weight, ev.weight_unit);
    });
  }
});

// Story: monitor:DeviceType:deletion
bthread("monitor:DeviceType:deletion", function () {
  while (true) {
    let ev = waitForAnyDeviceTypeDeleted();
    block(matchAddedDeviceType(ev.airflow, ev.comments, ev.custom_fields, ev.default_platform, ev.description, ev.exclude_from_utilization, ev.front_image, ev.id, ev.is_full_depth, ev.manufacturer, ev.model, ev.part_number, ev.rear_image, ev.slug, ev.subdevice_role, ev.tags, ev.u_height, ev.weight, ev.weight_unit), function () {
      verifyDeviceTypeDoesNotExist(ev.airflow, ev.comments, ev.custom_fields, ev.default_platform, ev.description, ev.exclude_from_utilization, ev.front_image, ev.id, ev.is_full_depth, ev.manufacturer, ev.model, ev.part_number, ev.rear_image, ev.slug, ev.subdevice_role, ev.tags, ev.u_height, ev.weight, ev.weight_unit);
    });
  }
});

// Story: crud:Device:nondet:1:1
bthread("crud:Device:nondet:1:1", function () {
  let airflow = "airflow_300";
  let asset_tag = "asset_tag_300";
  let cluster = "cluster_300";
  let comments = "comments_300";
  let config_template = "config_template_300";
  let custom_fields = {};
  let description = "description_300";
  let device_role = "device_role_300";
  let device_type = "device_type_300";
  let face = "face_300";
  let id = 300;
  let latitude = 300;
  let local_context_data = "local_context_data_300";
  let location = "location_300";
  let longitude = 300;
  let name = "name_300";
  let oob_ip = "oob_ip_300";
  let parent_bay = "parent_bay_300";
  let parent_device = "parent_device_300";
  let platform = "platform_300";
  let position = 300;
  let primary_ip4 = "primary_ip4_300";
  let primary_ip6 = "primary_ip6_300";
  let rack = "rack_300";
  let role = "role_300";
  let serial = "serial_300";
  let site = "site_300";
  let status = "status_300";
  let tags = "tags_300";
  let tenant = "tenant_300";
  let vc_position = 300;
  let vc_priority = 300;
  let virtual_chassis = "virtual_chassis_300";
  createDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  waitForDeviceAdded(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToAddExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  updateDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  deleteDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToDeleteANonExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceDoesNotExist(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
});

// Story: crud:Device:nondet:1:2
bthread("crud:Device:nondet:1:2", function () {
  let airflow = "airflow_301";
  let asset_tag = "asset_tag_301";
  let cluster = "cluster_301";
  let comments = "comments_301";
  let config_template = "config_template_301";
  let custom_fields = {};
  let description = "description_301";
  let device_role = "device_role_301";
  let device_type = "device_type_301";
  let face = "face_301";
  let id = 301;
  let latitude = 301;
  let local_context_data = "local_context_data_301";
  let location = "location_301";
  let longitude = 301;
  let name = "name_301";
  let oob_ip = "oob_ip_301";
  let parent_bay = "parent_bay_301";
  let parent_device = "parent_device_301";
  let platform = "platform_301";
  let position = 301;
  let primary_ip4 = "primary_ip4_301";
  let primary_ip6 = "primary_ip6_301";
  let rack = "rack_301";
  let role = "role_301";
  let serial = "serial_301";
  let site = "site_301";
  let status = "status_301";
  let tags = "tags_301";
  let tenant = "tenant_301";
  let vc_position = 301;
  let vc_priority = 301;
  let virtual_chassis = "virtual_chassis_301";
<<<<<<< HEAD
  createDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToAddExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  updateDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  deleteDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToDeleteANonExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceDoesNotExist(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
=======
  createDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToAddExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  updateDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  deleteDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToDeleteANonExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceDoesNotExist(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:Device:nondet:negative:dup-add
bthread("crud:Device:nondet:negative:dup-add", function () {
  let airflow = "airflow_306";
  let asset_tag = "asset_tag_306";
  let cluster = "cluster_306";
  let comments = "comments_306";
  let config_template = "config_template_306";
  let custom_fields = {};
  let description = "description_306";
  let device_role = "device_role_306";
  let device_type = "device_type_306";
  let face = "face_306";
  let id = 306;
  let latitude = 306;
  let local_context_data = "local_context_data_306";
  let location = "location_306";
  let longitude = 306;
  let name = "name_306";
  let oob_ip = "oob_ip_306";
  let parent_bay = "parent_bay_306";
  let parent_device = "parent_device_306";
  let platform = "platform_306";
  let position = 306;
  let primary_ip4 = "primary_ip4_306";
  let primary_ip6 = "primary_ip6_306";
  let rack = "rack_306";
  let role = "role_306";
  let serial = "serial_306";
  let site = "site_306";
  let status = "status_306";
  let tags = "tags_306";
  let tenant = "tenant_306";
  let vc_position = 306;
  let vc_priority = 306;
  let virtual_chassis = "virtual_chassis_306";
<<<<<<< HEAD
  createDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToAddExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
=======
  createDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToAddExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_role, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, parent_bay, parent_device, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
});

// Story: crud:Device:nondet:existing:update
bthread("crud:Device:nondet:existing:update", function () {
  let ev = waitForAnyDeviceAdded();
  let args = Object.values(ev);
  block(matchDeletedDevice.apply(null, args), function () {
    verifyDeviceExists.apply(null, args);
    updateDevice.apply(null, args);
    verifyDeviceExists.apply(null, args);
  });
});

// Story: monitor:Device:add
bthread("monitor:Device:add", function () {
  while (true) {
    let ev = waitForAnyDeviceAdded();
    block(matchDeletedDevice(ev.airflow, ev.asset_tag, ev.cluster, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.device_role, ev.device_type, ev.face, ev.id, ev.latitude, ev.local_context_data, ev.location, ev.longitude, ev.name, ev.oob_ip, ev.parent_bay, ev.parent_device, ev.platform, ev.position, ev.primary_ip4, ev.primary_ip6, ev.rack, ev.role, ev.serial, ev.site, ev.status, ev.tags, ev.tenant, ev.vc_position, ev.vc_priority, ev.virtual_chassis), function () {
      verifyDeviceExists(ev.airflow, ev.asset_tag, ev.cluster, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.device_role, ev.device_type, ev.face, ev.id, ev.latitude, ev.local_context_data, ev.location, ev.longitude, ev.name, ev.oob_ip, ev.parent_bay, ev.parent_device, ev.platform, ev.position, ev.primary_ip4, ev.primary_ip6, ev.rack, ev.role, ev.serial, ev.site, ev.status, ev.tags, ev.tenant, ev.vc_position, ev.vc_priority, ev.virtual_chassis);
    });
  }
});

// Story: monitor:Device:deletion
bthread("monitor:Device:deletion", function () {
  while (true) {
    let ev = waitForAnyDeviceDeleted();
    block(matchAddedDevice(ev.airflow, ev.asset_tag, ev.cluster, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.device_role, ev.device_type, ev.face, ev.id, ev.latitude, ev.local_context_data, ev.location, ev.longitude, ev.name, ev.oob_ip, ev.parent_bay, ev.parent_device, ev.platform, ev.position, ev.primary_ip4, ev.primary_ip6, ev.rack, ev.role, ev.serial, ev.site, ev.status, ev.tags, ev.tenant, ev.vc_position, ev.vc_priority, ev.virtual_chassis), function () {
      verifyDeviceDoesNotExist(ev.airflow, ev.asset_tag, ev.cluster, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.device_role, ev.device_type, ev.face, ev.id, ev.latitude, ev.local_context_data, ev.location, ev.longitude, ev.name, ev.oob_ip, ev.parent_bay, ev.parent_device, ev.platform, ev.position, ev.primary_ip4, ev.primary_ip6, ev.rack, ev.role, ev.serial, ev.site, ev.status, ev.tags, ev.tenant, ev.vc_position, ev.vc_priority, ev.virtual_chassis);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:Device:add
bthread("monitor:Device:add", function () {
  while (true) {
    let ev = waitForAnyDeviceAdded();
    block(matchDeletedDevice(ev.airflow, ev.asset_tag, ev.cluster, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.device_type, ev.face, ev.id, ev.latitude, ev.local_context_data, ev.location, ev.longitude, ev.name, ev.oob_ip, ev.platform, ev.position, ev.primary_ip4, ev.primary_ip6, ev.rack, ev.role, ev.serial, ev.site, ev.status, ev.tags, ev.tenant, ev.vc_position, ev.vc_priority, ev.virtual_chassis), function () {
      verifyDeviceExists(ev.airflow, ev.asset_tag, ev.cluster, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.device_type, ev.face, ev.id, ev.latitude, ev.local_context_data, ev.location, ev.longitude, ev.name, ev.oob_ip, ev.platform, ev.position, ev.primary_ip4, ev.primary_ip6, ev.rack, ev.role, ev.serial, ev.site, ev.status, ev.tags, ev.tenant, ev.vc_position, ev.vc_priority, ev.virtual_chassis);
    });
  }
});

// Story: monitor:Device:deletion
bthread("monitor:Device:deletion", function () {
  while (true) {
    let ev = waitForAnyDeviceDeleted();
    block(matchAddedDevice(ev.airflow, ev.asset_tag, ev.cluster, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.device_type, ev.face, ev.id, ev.latitude, ev.local_context_data, ev.location, ev.longitude, ev.name, ev.oob_ip, ev.platform, ev.position, ev.primary_ip4, ev.primary_ip6, ev.rack, ev.role, ev.serial, ev.site, ev.status, ev.tags, ev.tenant, ev.vc_position, ev.vc_priority, ev.virtual_chassis), function () {
      verifyDeviceDoesNotExist(ev.airflow, ev.asset_tag, ev.cluster, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.device_type, ev.face, ev.id, ev.latitude, ev.local_context_data, ev.location, ev.longitude, ev.name, ev.oob_ip, ev.platform, ev.position, ev.primary_ip4, ev.primary_ip6, ev.rack, ev.role, ev.serial, ev.site, ev.status, ev.tags, ev.tenant, ev.vc_position, ev.vc_priority, ev.virtual_chassis);
    });
  }
});

// Story: crud:FrontPortTemplate:nondet:1:1
bthread("crud:FrontPortTemplate:nondet:1:1", function () {
  let color = "color_310";
  let custom_fields = "custom_fields_310";
  let description = "description_310";
  let device_type = "device_type_310";
  let id = 310;
  let label = "label_310";
  let module_type = "module_type_310";
  let name = "name_310";
  let rear_port = "rear_port_310";
  let rear_port_position = 310;
  let tags = "tags_310";
  let type = "type_310";
  createFrontPortTemplate(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  waitForFrontPortTemplateAdded(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPortTemplate(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortTemplateExists(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  updateFrontPortTemplate(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  deleteFrontPortTemplate(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  tryToDeleteANonExistingFrontPortTemplate(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortTemplateDoesNotExist(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
});

// Story: crud:FrontPortTemplate:nondet:1:2
bthread("crud:FrontPortTemplate:nondet:1:2", function () {
  let color = "color_311";
  let custom_fields = "custom_fields_311";
  let description = "description_311";
  let device_type = "device_type_311";
  let id = 311;
  let label = "label_311";
  let module_type = "module_type_311";
  let name = "name_311";
  let rear_port = "rear_port_311";
  let rear_port_position = 311;
  let tags = "tags_311";
  let type = "type_311";
<<<<<<< HEAD
  createFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToAddExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  updateFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateExists(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  deleteFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToDeleteANonExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
=======
  createFrontPortTemplate(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPortTemplate(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  updateFrontPortTemplate(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortTemplateExists(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  deleteFrontPortTemplate(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  tryToDeleteANonExistingFrontPortTemplate(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortTemplateDoesNotExist(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:FrontPortTemplate:nondet:negative:dup-add
bthread("crud:FrontPortTemplate:nondet:negative:dup-add", function () {
  let color = "color_316";
  let custom_fields = "custom_fields_316";
  let description = "description_316";
  let device_type = "device_type_316";
  let id = 316;
  let label = "label_316";
  let module_type = "module_type_316";
  let name = "name_316";
  let rear_port = "rear_port_316";
  let rear_port_position = 316;
  let tags = "tags_316";
  let type = "type_316";
<<<<<<< HEAD
  createFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateExists(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToAddExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateExists(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
=======
  createFrontPortTemplate(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortTemplateExists(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPortTemplate(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortTemplateExists(color, custom_fields, description, device_type, id, label, module_type, name, rear_port, rear_port_position, tags, type);
});

// Story: crud:FrontPortTemplate:nondet:existing:update
bthread("crud:FrontPortTemplate:nondet:existing:update", function () {
  let ev = waitForAnyFrontPortTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedFrontPortTemplate.apply(null, args), function () {
    verifyFrontPortTemplateExists.apply(null, args);
    updateFrontPortTemplate.apply(null, args);
    verifyFrontPortTemplateExists.apply(null, args);
  });
});

// Story: monitor:FrontPortTemplate:add
bthread("monitor:FrontPortTemplate:add", function () {
  while (true) {
    let ev = waitForAnyFrontPortTemplateAdded();
    block(matchDeletedFrontPortTemplate(ev.color, ev.custom_fields, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.rear_port, ev.rear_port_position, ev.tags, ev.type), function () {
      verifyFrontPortTemplateExists(ev.color, ev.custom_fields, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.rear_port, ev.rear_port_position, ev.tags, ev.type);
    });
  }
});

// Story: monitor:FrontPortTemplate:deletion
bthread("monitor:FrontPortTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyFrontPortTemplateDeleted();
    block(matchAddedFrontPortTemplate(ev.color, ev.custom_fields, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.rear_port, ev.rear_port_position, ev.tags, ev.type), function () {
      verifyFrontPortTemplateDoesNotExist(ev.color, ev.custom_fields, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.rear_port, ev.rear_port_position, ev.tags, ev.type);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:FrontPortTemplate:add
bthread("monitor:FrontPortTemplate:add", function () {
  while (true) {
    let ev = waitForAnyFrontPortTemplateAdded();
    block(matchDeletedFrontPortTemplate(ev.color, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.rear_port, ev.rear_port_position, ev.type), function () {
      verifyFrontPortTemplateExists(ev.color, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.rear_port, ev.rear_port_position, ev.type);
    });
  }
});

// Story: monitor:FrontPortTemplate:deletion
bthread("monitor:FrontPortTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyFrontPortTemplateDeleted();
    block(matchAddedFrontPortTemplate(ev.color, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.rear_port, ev.rear_port_position, ev.type), function () {
      verifyFrontPortTemplateDoesNotExist(ev.color, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.rear_port, ev.rear_port_position, ev.type);
    });
  }
});

// Story: crud:FrontPort:nondet:1:1
bthread("crud:FrontPort:nondet:1:1", function () {
  let cable = "cable_320";
  let cable_end = "cable_end_320";
  let color = "color_320";
  let custom_fields = {};
  let description = "description_320";
  let device = "device_320";
  let id = 320;
  let label = "label_320";
  let mark_connected = true;
  let module = "module_320";
  let name = "name_320";
  let rear_port = 320;
  let rear_port_position = 320;
  let tags = "tags_320";
  let type = "type_320";
  createFrontPort(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  waitForFrontPortAdded(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPort(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  updateFrontPort(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  deleteFrontPort(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToDeleteANonExistingFrontPort(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortDoesNotExist(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
});

// Story: crud:FrontPort:nondet:1:2
bthread("crud:FrontPort:nondet:1:2", function () {
  let cable = "cable_321";
  let cable_end = "cable_end_321";
  let color = "color_321";
  let custom_fields = {};
  let description = "description_321";
  let device = "device_321";
  let id = 321;
  let label = "label_321";
  let mark_connected = true;
  let module = "module_321";
  let name = "name_321";
  let rear_port = 321;
  let rear_port_position = 321;
  let tags = "tags_321";
  let type = "type_321";
<<<<<<< HEAD
  createFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  updateFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  deleteFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToDeleteANonExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortDoesNotExist(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
=======
  createFrontPort(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPort(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  updateFrontPort(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  deleteFrontPort(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToDeleteANonExistingFrontPort(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortDoesNotExist(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:FrontPort:nondet:negative:dup-add
bthread("crud:FrontPort:nondet:negative:dup-add", function () {
  let cable = "cable_326";
  let cable_end = "cable_end_326";
  let color = "color_326";
  let custom_fields = {};
  let description = "description_326";
  let device = "device_326";
  let id = 326;
  let label = "label_326";
  let mark_connected = true;
  let module = "module_326";
  let name = "name_326";
  let rear_port = 326;
  let rear_port_position = 326;
  let tags = "tags_326";
  let type = "type_326";
<<<<<<< HEAD
  createFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
=======
  createFrontPort(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPort(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(cable, cable_end, color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
});

// Story: crud:FrontPort:nondet:existing:update
bthread("crud:FrontPort:nondet:existing:update", function () {
  let ev = waitForAnyFrontPortAdded();
  let args = Object.values(ev);
  block(matchDeletedFrontPort.apply(null, args), function () {
    verifyFrontPortExists.apply(null, args);
    updateFrontPort.apply(null, args);
    verifyFrontPortExists.apply(null, args);
  });
});

// Story: monitor:FrontPort:add
bthread("monitor:FrontPort:add", function () {
  while (true) {
    let ev = waitForAnyFrontPortAdded();
    block(matchDeletedFrontPort(ev.cable, ev.cable_end, ev.color, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.rear_port, ev.rear_port_position, ev.tags, ev.type), function () {
      verifyFrontPortExists(ev.cable, ev.cable_end, ev.color, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.rear_port, ev.rear_port_position, ev.tags, ev.type);
    });
  }
});

// Story: monitor:FrontPort:deletion
bthread("monitor:FrontPort:deletion", function () {
  while (true) {
    let ev = waitForAnyFrontPortDeleted();
    block(matchAddedFrontPort(ev.cable, ev.cable_end, ev.color, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.rear_port, ev.rear_port_position, ev.tags, ev.type), function () {
      verifyFrontPortDoesNotExist(ev.cable, ev.cable_end, ev.color, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.rear_port, ev.rear_port_position, ev.tags, ev.type);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:FrontPort:add
bthread("monitor:FrontPort:add", function () {
  while (true) {
    let ev = waitForAnyFrontPortAdded();
    block(matchDeletedFrontPort(ev.color, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.rear_port, ev.rear_port_position, ev.tags, ev.type), function () {
      verifyFrontPortExists(ev.color, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.rear_port, ev.rear_port_position, ev.tags, ev.type);
    });
  }
});

// Story: monitor:FrontPort:deletion
bthread("monitor:FrontPort:deletion", function () {
  while (true) {
    let ev = waitForAnyFrontPortDeleted();
    block(matchAddedFrontPort(ev.color, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.rear_port, ev.rear_port_position, ev.tags, ev.type), function () {
      verifyFrontPortDoesNotExist(ev.color, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.rear_port, ev.rear_port_position, ev.tags, ev.type);
    });
  }
});

// Story: crud:InterfaceTemplate:nondet:1:1
bthread("crud:InterfaceTemplate:nondet:1:1", function () {
<<<<<<< HEAD
  let bridge = 330;
  let description = "description_330";
  let device_type = "device_type_330";
  let enabled = true;
  let id = 330;
  let label = "label_330";
  let mgmt_only = true;
  let module_type = "module_type_330";
  let name = "name_330";
  let poe_mode = "poe_mode_330";
  let poe_type = "poe_type_330";
  let rf_role = "rf_role_330";
  let type = "type_330";
  createInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  waitForInterfaceTemplateAdded(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  tryToAddExistingInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  verifyInterfaceTemplateExists(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  updateInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  deleteInterfaceTemplatesBulk(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  tryToDeleteANonExistingInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  verifyInterfaceTemplateDoesNotExist(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
=======
  let bridge = 340;
  let created_by_request = "created_by_request_340";
  let description = "description_340";
  let device_type = "device_type_340";
  let device_type_id;
  let enabled = "enabled_340";
  let id = 340;
  let label = "label_340";
  let mgmt_only = "mgmt_only_340";
  let modified_by_request = "modified_by_request_340";
  let module_type = "module_type_340";
  let module_type_id;
  let name = "name_340";
  let poe_mode = "poe_mode_340";
  let poe_type = "poe_type_340";
  let rf_role = "rf_role_340";
  let type = "type_340";
  let updated_by_request = "updated_by_request_340";
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
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:InterfaceTemplate:nondet:1:2
bthread("crud:InterfaceTemplate:nondet:1:2", function () {
<<<<<<< HEAD
  let bridge = 331;
  let description = "description_331";
  let device_type = "device_type_331";
  let enabled = true;
  let id = 331;
  let label = "label_331";
  let mgmt_only = true;
  let module_type = "module_type_331";
  let name = "name_331";
  let poe_mode = "poe_mode_331";
  let poe_type = "poe_type_331";
  let rf_role = "rf_role_331";
  let type = "type_331";
  createInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  tryToAddExistingInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  updateInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  verifyInterfaceTemplateExists(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  deleteInterfaceTemplatesBulk(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  tryToDeleteANonExistingInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  verifyInterfaceTemplateDoesNotExist(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
=======
  let bridge = 341;
  let created_by_request = "created_by_request_341";
  let description = "description_341";
  let device_type = "device_type_341";
  let device_type_id;
  let enabled = "enabled_341";
  let id = 341;
  let label = "label_341";
  let mgmt_only = "mgmt_only_341";
  let modified_by_request = "modified_by_request_341";
  let module_type = "module_type_341";
  let module_type_id;
  let name = "name_341";
  let poe_mode = "poe_mode_341";
  let poe_type = "poe_type_341";
  let rf_role = "rf_role_341";
  let type = "type_341";
  let updated_by_request = "updated_by_request_341";
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
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:InterfaceTemplate:nondet:negative:dup-add
bthread("crud:InterfaceTemplate:nondet:negative:dup-add", function () {
<<<<<<< HEAD
  let bridge = 336;
  let description = "description_336";
  let device_type = "device_type_336";
  let enabled = true;
  let id = 336;
  let label = "label_336";
  let mgmt_only = true;
  let module_type = "module_type_336";
  let name = "name_336";
  let poe_mode = "poe_mode_336";
  let poe_type = "poe_type_336";
  let rf_role = "rf_role_336";
  let type = "type_336";
  createInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  verifyInterfaceTemplateExists(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  tryToAddExistingInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  verifyInterfaceTemplateExists(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
=======
  let bridge = 346;
  let created_by_request = "created_by_request_346";
  let description = "description_346";
  let device_type = "device_type_346";
  let device_type_id;
  let enabled = "enabled_346";
  let id = 346;
  let label = "label_346";
  let mgmt_only = "mgmt_only_346";
  let modified_by_request = "modified_by_request_346";
  let module_type = "module_type_346";
  let module_type_id;
  let name = "name_346";
  let poe_mode = "poe_mode_346";
  let poe_type = "poe_type_346";
  let rf_role = "rf_role_346";
  let type = "type_346";
  let updated_by_request = "updated_by_request_346";
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

// Story: crud:InterfaceTemplate:nondet:existing:update
bthread("crud:InterfaceTemplate:nondet:existing:update", function () {
  let ev = waitForAnyInterfaceTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedInterfaceTemplate.apply(null, args), function () {
    verifyInterfaceTemplateExists.apply(null, args);
    updateInterfaceTemplate.apply(null, args);
    verifyInterfaceTemplateExists.apply(null, args);
  });
});

// Story: monitor:InterfaceTemplate:add
bthread("monitor:InterfaceTemplate:add", function () {
  while (true) {
    let ev = waitForAnyInterfaceTemplateAdded();
    block(matchDeletedInterfaceTemplate(ev.bridge, ev.created_by_request, ev.description, ev.device_type, ev.device_type_id, ev.enabled, ev.id, ev.label, ev.mgmt_only, ev.modified_by_request, ev.module_type, ev.module_type_id, ev.name, ev.poe_mode, ev.poe_type, ev.rf_role, ev.type, ev.updated_by_request), function () {
      verifyInterfaceTemplateExists(ev.bridge, ev.created_by_request, ev.description, ev.device_type, ev.device_type_id, ev.enabled, ev.id, ev.label, ev.mgmt_only, ev.modified_by_request, ev.module_type, ev.module_type_id, ev.name, ev.poe_mode, ev.poe_type, ev.rf_role, ev.type, ev.updated_by_request);
    });
  }
});

// Story: monitor:InterfaceTemplate:deletion
bthread("monitor:InterfaceTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyInterfaceTemplateDeleted();
    block(matchAddedInterfaceTemplate(ev.bridge, ev.created_by_request, ev.description, ev.device_type, ev.device_type_id, ev.enabled, ev.id, ev.label, ev.mgmt_only, ev.modified_by_request, ev.module_type, ev.module_type_id, ev.name, ev.poe_mode, ev.poe_type, ev.rf_role, ev.type, ev.updated_by_request), function () {
      verifyInterfaceTemplateDoesNotExist(ev.bridge, ev.created_by_request, ev.description, ev.device_type, ev.device_type_id, ev.enabled, ev.id, ev.label, ev.mgmt_only, ev.modified_by_request, ev.module_type, ev.module_type_id, ev.name, ev.poe_mode, ev.poe_type, ev.rf_role, ev.type, ev.updated_by_request);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:InterfaceTemplate:add
bthread("monitor:InterfaceTemplate:add", function () {
  while (true) {
    let ev = waitForAnyInterfaceTemplateAdded();
    block(matchDeletedInterfaceTemplate(ev.bridge, ev.description, ev.device_type, ev.enabled, ev.id, ev.label, ev.mgmt_only, ev.module_type, ev.name, ev.poe_mode, ev.poe_type, ev.rf_role, ev.type), function () {
      verifyInterfaceTemplateExists(ev.bridge, ev.description, ev.device_type, ev.enabled, ev.id, ev.label, ev.mgmt_only, ev.module_type, ev.name, ev.poe_mode, ev.poe_type, ev.rf_role, ev.type);
    });
  }
});

// Story: monitor:InterfaceTemplate:deletion
bthread("monitor:InterfaceTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyInterfaceTemplateDeleted();
    block(matchAddedInterfaceTemplate(ev.bridge, ev.description, ev.device_type, ev.enabled, ev.id, ev.label, ev.mgmt_only, ev.module_type, ev.name, ev.poe_mode, ev.poe_type, ev.rf_role, ev.type), function () {
      verifyInterfaceTemplateDoesNotExist(ev.bridge, ev.description, ev.device_type, ev.enabled, ev.id, ev.label, ev.mgmt_only, ev.module_type, ev.name, ev.poe_mode, ev.poe_type, ev.rf_role, ev.type);
    });
  }
});

// Story: crud:Interface:nondet:1:1
bthread("crud:Interface:nondet:1:1", function () {
  let bridge = 340;
  let custom_fields = {};
  let description = "description_340";
  let enabled = true;
  let id = 340;
  let mode = "mode_340";
  let mtu = 340;
  let name = "name_340";
  let parent = 340;
  let primary_mac_address = "primary_mac_address_340";
  let qinq_svlan = "qinq_svlan_340";
  let tagged_vlans = "tagged_vlans_340";
  let tags = "tags_340";
  let untagged_vlan = "untagged_vlan_340";
  let virtual_machine = "virtual_machine_340";
  let vlan_translation_policy = "vlan_translation_policy_340";
  let vrf = "vrf_340";
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
  let bridge = 341;
  let custom_fields = {};
  let description = "description_341";
  let enabled = true;
  let id = 341;
  let mode = "mode_341";
  let mtu = 341;
  let name = "name_341";
  let parent = 341;
  let primary_mac_address = "primary_mac_address_341";
  let qinq_svlan = "qinq_svlan_341";
  let tagged_vlans = "tagged_vlans_341";
  let tags = "tags_341";
  let untagged_vlan = "untagged_vlan_341";
  let virtual_machine = "virtual_machine_341";
  let vlan_translation_policy = "vlan_translation_policy_341";
  let vrf = "vrf_341";
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
  let bridge = 346;
  let custom_fields = {};
  let description = "description_346";
  let enabled = true;
  let id = 346;
  let mode = "mode_346";
  let mtu = 346;
  let name = "name_346";
  let parent = 346;
  let primary_mac_address = "primary_mac_address_346";
  let qinq_svlan = "qinq_svlan_346";
  let tagged_vlans = "tagged_vlans_346";
  let tags = "tags_346";
  let untagged_vlan = "untagged_vlan_346";
  let virtual_machine = "virtual_machine_346";
  let vlan_translation_policy = "vlan_translation_policy_346";
  let vrf = "vrf_346";
  createInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceExists(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  tryToAddExistingInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceExists(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
});

<<<<<<< HEAD
=======
// Story: crud:Interface:nondet:existing:update
bthread("crud:Interface:nondet:existing:update", function () {
  let ev = waitForAnyInterfaceAdded();
  let args = Object.values(ev);
  block(matchDeletedInterface.apply(null, args), function () {
    verifyInterfaceExists.apply(null, args);
    updateInterface.apply(null, args);
    verifyInterfaceExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Interface:add
bthread("monitor:Interface:add", function () {
  while (true) {
    let ev = waitForAnyInterfaceAdded();
    block(matchDeletedInterface(ev.bridge, ev.custom_fields, ev.description, ev.enabled, ev.id, ev.mode, ev.mtu, ev.name, ev.parent, ev.primary_mac_address, ev.qinq_svlan, ev.tagged_vlans, ev.tags, ev.untagged_vlan, ev.virtual_machine, ev.vlan_translation_policy, ev.vrf), function () {
      verifyInterfaceExists(ev.bridge, ev.custom_fields, ev.description, ev.enabled, ev.id, ev.mode, ev.mtu, ev.name, ev.parent, ev.primary_mac_address, ev.qinq_svlan, ev.tagged_vlans, ev.tags, ev.untagged_vlan, ev.virtual_machine, ev.vlan_translation_policy, ev.vrf);
    });
  }
});

// Story: monitor:Interface:deletion
bthread("monitor:Interface:deletion", function () {
  while (true) {
    let ev = waitForAnyInterfaceDeleted();
    block(matchAddedInterface(ev.bridge, ev.custom_fields, ev.description, ev.enabled, ev.id, ev.mode, ev.mtu, ev.name, ev.parent, ev.primary_mac_address, ev.qinq_svlan, ev.tagged_vlans, ev.tags, ev.untagged_vlan, ev.virtual_machine, ev.vlan_translation_policy, ev.vrf), function () {
      verifyInterfaceDoesNotExist(ev.bridge, ev.custom_fields, ev.description, ev.enabled, ev.id, ev.mode, ev.mtu, ev.name, ev.parent, ev.primary_mac_address, ev.qinq_svlan, ev.tagged_vlans, ev.tags, ev.untagged_vlan, ev.virtual_machine, ev.vlan_translation_policy, ev.vrf);
    });
  }
});

// Story: crud:InventoryItemRole:nondet:1:1
bthread("crud:InventoryItemRole:nondet:1:1", function () {
  let color = "color_350";
  let custom_fields = {};
  let description = "description_350";
  let id = 350;
  let name = "name_350";
  let slug = "slug_350";
  let tags = "tags_350";
  createInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  waitForInventoryItemRoleAdded(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  verifyInventoryItemRoleExists(color, custom_fields, description, id, name, slug, tags);
  updateInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  deleteInventoryItemRolesBulk(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  verifyInventoryItemRoleDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:InventoryItemRole:nondet:1:2
bthread("crud:InventoryItemRole:nondet:1:2", function () {
  let color = "color_351";
  let custom_fields = {};
  let description = "description_351";
  let id = 351;
  let name = "name_351";
  let slug = "slug_351";
  let tags = "tags_351";
  createInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  updateInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  verifyInventoryItemRoleExists(color, custom_fields, description, id, name, slug, tags);
  deleteInventoryItemRolesBulk(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  verifyInventoryItemRoleDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:InventoryItemRole:nondet:negative:dup-add
bthread("crud:InventoryItemRole:nondet:negative:dup-add", function () {
  let color = "color_356";
  let custom_fields = {};
  let description = "description_356";
  let id = 356;
  let name = "name_356";
  let slug = "slug_356";
  let tags = "tags_356";
  createInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  verifyInventoryItemRoleExists(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  verifyInventoryItemRoleExists(color, custom_fields, description, id, name, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:InventoryItemRole:nondet:existing:update
bthread("crud:InventoryItemRole:nondet:existing:update", function () {
  let ev = waitForAnyInventoryItemRoleAdded();
  let args = Object.values(ev);
  block(matchDeletedInventoryItemRole.apply(null, args), function () {
    verifyInventoryItemRoleExists.apply(null, args);
    updateInventoryItemRole.apply(null, args);
    verifyInventoryItemRoleExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:InventoryItemRole:add
bthread("monitor:InventoryItemRole:add", function () {
  while (true) {
    let ev = waitForAnyInventoryItemRoleAdded();
    block(matchDeletedInventoryItemRole(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyInventoryItemRoleExists(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:InventoryItemRole:deletion
bthread("monitor:InventoryItemRole:deletion", function () {
  while (true) {
    let ev = waitForAnyInventoryItemRoleDeleted();
    block(matchAddedInventoryItemRole(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyInventoryItemRoleDoesNotExist(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: crud:InventoryItemTemplate:nondet:1:1
bthread("crud:InventoryItemTemplate:nondet:1:1", function () {
  let component_id = 360;
  let component_type = "component_type_360";
  let description = "description_360";
  let device_type = "device_type_360";
  let id = 360;
  let label = "label_360";
  let manufacturer = "manufacturer_360";
  let name = "name_360";
  let parent = 360;
  let part_id = 360;
  let role = "role_360";
  createInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  waitForInventoryItemTemplateAdded(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  tryToAddExistingInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  verifyInventoryItemTemplateExists(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  updateInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  deleteInventoryItemTemplatesBulk(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  tryToDeleteANonExistingInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  verifyInventoryItemTemplateDoesNotExist(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
});

// Story: crud:InventoryItemTemplate:nondet:1:2
bthread("crud:InventoryItemTemplate:nondet:1:2", function () {
  let component_id = 361;
  let component_type = "component_type_361";
  let description = "description_361";
  let device_type = "device_type_361";
  let id = 361;
  let label = "label_361";
  let manufacturer = "manufacturer_361";
  let name = "name_361";
  let parent = 361;
  let part_id = 361;
  let role = "role_361";
  createInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  tryToAddExistingInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  updateInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  verifyInventoryItemTemplateExists(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  deleteInventoryItemTemplatesBulk(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  tryToDeleteANonExistingInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  verifyInventoryItemTemplateDoesNotExist(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
});

// Story: crud:InventoryItemTemplate:nondet:negative:dup-add
bthread("crud:InventoryItemTemplate:nondet:negative:dup-add", function () {
  let component_id = 366;
  let component_type = "component_type_366";
  let description = "description_366";
  let device_type = "device_type_366";
  let id = 366;
  let label = "label_366";
  let manufacturer = "manufacturer_366";
  let name = "name_366";
  let parent = 366;
  let part_id = 366;
  let role = "role_366";
  createInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  verifyInventoryItemTemplateExists(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  tryToAddExistingInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  verifyInventoryItemTemplateExists(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
});

<<<<<<< HEAD
=======
// Story: crud:InventoryItemTemplate:nondet:existing:update
bthread("crud:InventoryItemTemplate:nondet:existing:update", function () {
  let ev = waitForAnyInventoryItemTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedInventoryItemTemplate.apply(null, args), function () {
    verifyInventoryItemTemplateExists.apply(null, args);
    updateInventoryItemTemplate.apply(null, args);
    verifyInventoryItemTemplateExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:InventoryItemTemplate:add
bthread("monitor:InventoryItemTemplate:add", function () {
  while (true) {
    let ev = waitForAnyInventoryItemTemplateAdded();
    block(matchDeletedInventoryItemTemplate(ev.component_id, ev.component_type, ev.description, ev.device_type, ev.id, ev.label, ev.manufacturer, ev.name, ev.parent, ev.part_id, ev.role), function () {
      verifyInventoryItemTemplateExists(ev.component_id, ev.component_type, ev.description, ev.device_type, ev.id, ev.label, ev.manufacturer, ev.name, ev.parent, ev.part_id, ev.role);
    });
  }
});

// Story: monitor:InventoryItemTemplate:deletion
bthread("monitor:InventoryItemTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyInventoryItemTemplateDeleted();
    block(matchAddedInventoryItemTemplate(ev.component_id, ev.component_type, ev.description, ev.device_type, ev.id, ev.label, ev.manufacturer, ev.name, ev.parent, ev.part_id, ev.role), function () {
      verifyInventoryItemTemplateDoesNotExist(ev.component_id, ev.component_type, ev.description, ev.device_type, ev.id, ev.label, ev.manufacturer, ev.name, ev.parent, ev.part_id, ev.role);
    });
  }
});

<<<<<<< HEAD
// Story: crud:FrontPortPaths:read_only
bthread("crud:FrontPortPaths:read_only", function () {
  let id = 370;
  verifyFrontPortPathsExists(id);
});

=======
>>>>>>> 1302d9a (Fix emitter bugs)
// Story: crud:InventoryItem:nondet:1:1
bthread("crud:InventoryItem:nondet:1:1", function () {
  let asset_tag = "asset_tag_380";
  let component_id = 380;
  let component_type = "component_type_380";
  let custom_fields = {};
  let description = "description_380";
  let device = "device_380";
  let discovered = true;
  let id = 380;
  let label = "label_380";
  let manufacturer = "manufacturer_380";
  let name = "name_380";
  let parent = 380;
  let part_id = 380;
  let role = "role_380";
  let serial = "serial_380";
  let status = "status_380";
  let tags = "tags_380";
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
  let asset_tag = "asset_tag_381";
  let component_id = 381;
  let component_type = "component_type_381";
  let custom_fields = {};
  let description = "description_381";
  let device = "device_381";
  let discovered = true;
  let id = 381;
  let label = "label_381";
  let manufacturer = "manufacturer_381";
  let name = "name_381";
  let parent = 381;
  let part_id = 381;
  let role = "role_381";
  let serial = "serial_381";
  let status = "status_381";
  let tags = "tags_381";
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
  let asset_tag = "asset_tag_386";
  let component_id = 386;
  let component_type = "component_type_386";
  let custom_fields = {};
  let description = "description_386";
  let device = "device_386";
  let discovered = true;
  let id = 386;
  let label = "label_386";
  let manufacturer = "manufacturer_386";
  let name = "name_386";
  let parent = 386;
  let part_id = 386;
  let role = "role_386";
  let serial = "serial_386";
  let status = "status_386";
  let tags = "tags_386";
  createInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  verifyInventoryItemExists(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  tryToAddExistingInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  verifyInventoryItemExists(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
});

<<<<<<< HEAD
=======
// Story: crud:InventoryItem:nondet:existing:update
bthread("crud:InventoryItem:nondet:existing:update", function () {
  let ev = waitForAnyInventoryItemAdded();
  let args = Object.values(ev);
  block(matchDeletedInventoryItem.apply(null, args), function () {
    verifyInventoryItemExists.apply(null, args);
    updateInventoryItem.apply(null, args);
    verifyInventoryItemExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:InventoryItem:add
bthread("monitor:InventoryItem:add", function () {
  while (true) {
    let ev = waitForAnyInventoryItemAdded();
    block(matchDeletedInventoryItem(ev.asset_tag, ev.component_id, ev.component_type, ev.custom_fields, ev.description, ev.device, ev.discovered, ev.id, ev.label, ev.manufacturer, ev.name, ev.parent, ev.part_id, ev.role, ev.serial, ev.status, ev.tags), function () {
      verifyInventoryItemExists(ev.asset_tag, ev.component_id, ev.component_type, ev.custom_fields, ev.description, ev.device, ev.discovered, ev.id, ev.label, ev.manufacturer, ev.name, ev.parent, ev.part_id, ev.role, ev.serial, ev.status, ev.tags);
    });
  }
});

// Story: monitor:InventoryItem:deletion
bthread("monitor:InventoryItem:deletion", function () {
  while (true) {
    let ev = waitForAnyInventoryItemDeleted();
    block(matchAddedInventoryItem(ev.asset_tag, ev.component_id, ev.component_type, ev.custom_fields, ev.description, ev.device, ev.discovered, ev.id, ev.label, ev.manufacturer, ev.name, ev.parent, ev.part_id, ev.role, ev.serial, ev.status, ev.tags), function () {
      verifyInventoryItemDoesNotExist(ev.asset_tag, ev.component_id, ev.component_type, ev.custom_fields, ev.description, ev.device, ev.discovered, ev.id, ev.label, ev.manufacturer, ev.name, ev.parent, ev.part_id, ev.role, ev.serial, ev.status, ev.tags);
    });
  }
});

// Story: crud:Location:nondet:1:1
bthread("crud:Location:nondet:1:1", function () {
  let comments = "comments_390";
  let custom_fields = {};
  let description = "description_390";
  let facility = "facility_390";
  let id = 390;
  let name = "name_390";
  let parent = 390;
  let site = "site_390";
  let slug = "slug_390";
  let status = "status_390";
  let tags = "tags_390";
  let tenant = "tenant_390";
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
  let comments = "comments_391";
  let custom_fields = {};
  let description = "description_391";
  let facility = "facility_391";
  let id = 391;
  let name = "name_391";
  let parent = 391;
  let site = "site_391";
  let slug = "slug_391";
  let status = "status_391";
  let tags = "tags_391";
  let tenant = "tenant_391";
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
  let comments = "comments_396";
  let custom_fields = {};
  let description = "description_396";
  let facility = "facility_396";
  let id = 396;
  let name = "name_396";
  let parent = 396;
  let site = "site_396";
  let slug = "slug_396";
  let status = "status_396";
  let tags = "tags_396";
  let tenant = "tenant_396";
  createLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  verifyLocationExists(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  tryToAddExistingLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  verifyLocationExists(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
});

<<<<<<< HEAD
=======
// Story: crud:Location:nondet:existing:update
bthread("crud:Location:nondet:existing:update", function () {
  let ev = waitForAnyLocationAdded();
  let args = Object.values(ev);
  block(matchDeletedLocation.apply(null, args), function () {
    verifyLocationExists.apply(null, args);
    updateLocation.apply(null, args);
    verifyLocationExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Location:add
bthread("monitor:Location:add", function () {
  while (true) {
    let ev = waitForAnyLocationAdded();
    block(matchDeletedLocation(ev.comments, ev.custom_fields, ev.description, ev.facility, ev.id, ev.name, ev.parent, ev.site, ev.slug, ev.status, ev.tags, ev.tenant), function () {
      verifyLocationExists(ev.comments, ev.custom_fields, ev.description, ev.facility, ev.id, ev.name, ev.parent, ev.site, ev.slug, ev.status, ev.tags, ev.tenant);
    });
  }
});

// Story: monitor:Location:deletion
bthread("monitor:Location:deletion", function () {
  while (true) {
    let ev = waitForAnyLocationDeleted();
    block(matchAddedLocation(ev.comments, ev.custom_fields, ev.description, ev.facility, ev.id, ev.name, ev.parent, ev.site, ev.slug, ev.status, ev.tags, ev.tenant), function () {
      verifyLocationDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.facility, ev.id, ev.name, ev.parent, ev.site, ev.slug, ev.status, ev.tags, ev.tenant);
    });
  }
});

// Story: crud:MACAddress:nondet:1:1
bthread("crud:MACAddress:nondet:1:1", function () {
  let assigned_object_id = 400;
  let assigned_object_type = "assigned_object_type_400";
  let comments = "comments_400";
  let custom_fields = {};
  let description = "description_400";
  let id = 400;
  let mac_address = "mac_address_400";
  let tags = "tags_400";
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
  let assigned_object_id = 401;
  let assigned_object_type = "assigned_object_type_401";
  let comments = "comments_401";
  let custom_fields = {};
  let description = "description_401";
  let id = 401;
  let mac_address = "mac_address_401";
  let tags = "tags_401";
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
  let assigned_object_id = 406;
  let assigned_object_type = "assigned_object_type_406";
  let comments = "comments_406";
  let custom_fields = {};
  let description = "description_406";
  let id = 406;
  let mac_address = "mac_address_406";
  let tags = "tags_406";
  createMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  verifyMACAddressExists(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  tryToAddExistingMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  verifyMACAddressExists(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
});

<<<<<<< HEAD
=======
// Story: crud:MACAddress:nondet:existing:update
bthread("crud:MACAddress:nondet:existing:update", function () {
  let ev = waitForAnyMACAddressAdded();
  let args = Object.values(ev);
  block(matchDeletedMACAddress.apply(null, args), function () {
    verifyMACAddressExists.apply(null, args);
    updateMACAddress.apply(null, args);
    verifyMACAddressExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:MACAddress:add
bthread("monitor:MACAddress:add", function () {
  while (true) {
    let ev = waitForAnyMACAddressAdded();
    block(matchDeletedMACAddress(ev.assigned_object_id, ev.assigned_object_type, ev.comments, ev.custom_fields, ev.description, ev.id, ev.mac_address, ev.tags), function () {
      verifyMACAddressExists(ev.assigned_object_id, ev.assigned_object_type, ev.comments, ev.custom_fields, ev.description, ev.id, ev.mac_address, ev.tags);
    });
  }
});

// Story: monitor:MACAddress:deletion
bthread("monitor:MACAddress:deletion", function () {
  while (true) {
    let ev = waitForAnyMACAddressDeleted();
    block(matchAddedMACAddress(ev.assigned_object_id, ev.assigned_object_type, ev.comments, ev.custom_fields, ev.description, ev.id, ev.mac_address, ev.tags), function () {
      verifyMACAddressDoesNotExist(ev.assigned_object_id, ev.assigned_object_type, ev.comments, ev.custom_fields, ev.description, ev.id, ev.mac_address, ev.tags);
    });
  }
});

// Story: crud:Manufacturer:nondet:1:1
bthread("crud:Manufacturer:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_410";
  let id = 410;
  let name = "name_410";
  let slug = "slug_410";
  let tags = "tags_410";
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
  let description = "description_411";
  let id = 411;
  let name = "name_411";
  let slug = "slug_411";
  let tags = "tags_411";
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
  let description = "description_416";
  let id = 416;
  let name = "name_416";
  let slug = "slug_416";
  let tags = "tags_416";
  createManufacturer(custom_fields, description, id, name, slug, tags);
  verifyManufacturerExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingManufacturer(custom_fields, description, id, name, slug, tags);
  verifyManufacturerExists(custom_fields, description, id, name, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:Manufacturer:nondet:existing:update
bthread("crud:Manufacturer:nondet:existing:update", function () {
  let ev = waitForAnyManufacturerAdded();
  let args = Object.values(ev);
  block(matchDeletedManufacturer.apply(null, args), function () {
    verifyManufacturerExists.apply(null, args);
    updateManufacturer.apply(null, args);
    verifyManufacturerExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Manufacturer:add
bthread("monitor:Manufacturer:add", function () {
  while (true) {
    let ev = waitForAnyManufacturerAdded();
    block(matchDeletedManufacturer(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyManufacturerExists(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:Manufacturer:deletion
bthread("monitor:Manufacturer:deletion", function () {
  while (true) {
    let ev = waitForAnyManufacturerDeleted();
    block(matchAddedManufacturer(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyManufacturerDoesNotExist(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: crud:ModuleBayTemplate:nondet:1:1
bthread("crud:ModuleBayTemplate:nondet:1:1", function () {
  let description = "description_420";
  let device_type = "device_type_420";
  let id = 420;
  let label = "label_420";
  let module_type = "module_type_420";
  let name = "name_420";
  let position = "position_420";
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
  let description = "description_421";
  let device_type = "device_type_421";
  let id = 421;
  let label = "label_421";
  let module_type = "module_type_421";
  let name = "name_421";
  let position = "position_421";
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
  let description = "description_426";
  let device_type = "device_type_426";
  let id = 426;
  let label = "label_426";
  let module_type = "module_type_426";
  let name = "name_426";
  let position = "position_426";
  createModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  verifyModuleBayTemplateExists(description, device_type, id, label, module_type, name, position);
  tryToAddExistingModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  verifyModuleBayTemplateExists(description, device_type, id, label, module_type, name, position);
});

<<<<<<< HEAD
=======
// Story: crud:ModuleBayTemplate:nondet:existing:update
bthread("crud:ModuleBayTemplate:nondet:existing:update", function () {
  let ev = waitForAnyModuleBayTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedModuleBayTemplate.apply(null, args), function () {
    verifyModuleBayTemplateExists.apply(null, args);
    updateModuleBayTemplate.apply(null, args);
    verifyModuleBayTemplateExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ModuleBayTemplate:add
bthread("monitor:ModuleBayTemplate:add", function () {
  while (true) {
    let ev = waitForAnyModuleBayTemplateAdded();
    block(matchDeletedModuleBayTemplate(ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.position), function () {
      verifyModuleBayTemplateExists(ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.position);
    });
  }
});

// Story: monitor:ModuleBayTemplate:deletion
bthread("monitor:ModuleBayTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyModuleBayTemplateDeleted();
    block(matchAddedModuleBayTemplate(ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.position), function () {
      verifyModuleBayTemplateDoesNotExist(ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.position);
    });
  }
});

// Story: crud:ModuleBay:nondet:1:1
bthread("crud:ModuleBay:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_430";
  let device = "device_430";
  let id = 430;
  let installed_module = "installed_module_430";
  let label = "label_430";
  let module = "module_430";
  let name = "name_430";
  let position = "position_430";
  let tags = "tags_430";
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
  let description = "description_431";
  let device = "device_431";
  let id = 431;
  let installed_module = "installed_module_431";
  let label = "label_431";
  let module = "module_431";
  let name = "name_431";
  let position = "position_431";
  let tags = "tags_431";
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
  let description = "description_436";
  let device = "device_436";
  let id = 436;
  let installed_module = "installed_module_436";
  let label = "label_436";
  let module = "module_436";
  let name = "name_436";
  let position = "position_436";
  let tags = "tags_436";
  createModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  verifyModuleBayExists(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  tryToAddExistingModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  verifyModuleBayExists(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
});

<<<<<<< HEAD
=======
// Story: crud:ModuleBay:nondet:existing:update
bthread("crud:ModuleBay:nondet:existing:update", function () {
  let ev = waitForAnyModuleBayAdded();
  let args = Object.values(ev);
  block(matchDeletedModuleBay.apply(null, args), function () {
    verifyModuleBayExists.apply(null, args);
    updateModuleBay.apply(null, args);
    verifyModuleBayExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ModuleBay:add
bthread("monitor:ModuleBay:add", function () {
  while (true) {
    let ev = waitForAnyModuleBayAdded();
    block(matchDeletedModuleBay(ev.custom_fields, ev.description, ev.device, ev.id, ev.installed_module, ev.label, ev.module, ev.name, ev.position, ev.tags), function () {
      verifyModuleBayExists(ev.custom_fields, ev.description, ev.device, ev.id, ev.installed_module, ev.label, ev.module, ev.name, ev.position, ev.tags);
    });
  }
});

// Story: monitor:ModuleBay:deletion
bthread("monitor:ModuleBay:deletion", function () {
  while (true) {
    let ev = waitForAnyModuleBayDeleted();
    block(matchAddedModuleBay(ev.custom_fields, ev.description, ev.device, ev.id, ev.installed_module, ev.label, ev.module, ev.name, ev.position, ev.tags), function () {
      verifyModuleBayDoesNotExist(ev.custom_fields, ev.description, ev.device, ev.id, ev.installed_module, ev.label, ev.module, ev.name, ev.position, ev.tags);
    });
  }
});

// Story: crud:ModuleTypeProfile:nondet:1:1
bthread("crud:ModuleTypeProfile:nondet:1:1", function () {
  let comments = "comments_440";
  let custom_fields = {};
  let description = "description_440";
  let id = 440;
  let name = "name_440";
  let schema = "schema_440";
  let tags = "tags_440";
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
  let comments = "comments_441";
  let custom_fields = {};
  let description = "description_441";
  let id = 441;
  let name = "name_441";
  let schema = "schema_441";
  let tags = "tags_441";
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
  let comments = "comments_446";
  let custom_fields = {};
  let description = "description_446";
  let id = 446;
  let name = "name_446";
  let schema = "schema_446";
  let tags = "tags_446";
  createModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  verifyModuleTypeProfileExists(comments, custom_fields, description, id, name, schema, tags);
  tryToAddExistingModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  verifyModuleTypeProfileExists(comments, custom_fields, description, id, name, schema, tags);
});

<<<<<<< HEAD
=======
// Story: crud:ModuleTypeProfile:nondet:existing:update
bthread("crud:ModuleTypeProfile:nondet:existing:update", function () {
  let ev = waitForAnyModuleTypeProfileAdded();
  let args = Object.values(ev);
  block(matchDeletedModuleTypeProfile.apply(null, args), function () {
    verifyModuleTypeProfileExists.apply(null, args);
    updateModuleTypeProfile.apply(null, args);
    verifyModuleTypeProfileExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ModuleTypeProfile:add
bthread("monitor:ModuleTypeProfile:add", function () {
  while (true) {
    let ev = waitForAnyModuleTypeProfileAdded();
    block(matchDeletedModuleTypeProfile(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.schema, ev.tags), function () {
      verifyModuleTypeProfileExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.schema, ev.tags);
    });
  }
});

// Story: monitor:ModuleTypeProfile:deletion
bthread("monitor:ModuleTypeProfile:deletion", function () {
  while (true) {
    let ev = waitForAnyModuleTypeProfileDeleted();
    block(matchAddedModuleTypeProfile(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.schema, ev.tags), function () {
      verifyModuleTypeProfileDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.schema, ev.tags);
    });
  }
});

// Story: crud:ModuleType:nondet:1:1
bthread("crud:ModuleType:nondet:1:1", function () {
  let airflow = "airflow_450";
  let attributes = "attributes_450";
  let comments = "comments_450";
  let custom_fields = {};
  let description = "description_450";
  let id = 450;
  let manufacturer = "manufacturer_450";
  let model = "model_450";
  let part_number = "part_number_450";
  let profile = "profile_450";
  let tags = "tags_450";
  let weight = 450;
  let weight_unit = "weight_unit_450";
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
  let airflow = "airflow_451";
  let attributes = "attributes_451";
  let comments = "comments_451";
  let custom_fields = {};
  let description = "description_451";
  let id = 451;
  let manufacturer = "manufacturer_451";
  let model = "model_451";
  let part_number = "part_number_451";
  let profile = "profile_451";
  let tags = "tags_451";
  let weight = 451;
  let weight_unit = "weight_unit_451";
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
  let airflow = "airflow_456";
  let attributes = "attributes_456";
  let comments = "comments_456";
  let custom_fields = {};
  let description = "description_456";
  let id = 456;
  let manufacturer = "manufacturer_456";
  let model = "model_456";
  let part_number = "part_number_456";
  let profile = "profile_456";
  let tags = "tags_456";
  let weight = 456;
  let weight_unit = "weight_unit_456";
  createModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  verifyModuleTypeExists(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  tryToAddExistingModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  verifyModuleTypeExists(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
});

<<<<<<< HEAD
=======
// Story: crud:ModuleType:nondet:existing:update
bthread("crud:ModuleType:nondet:existing:update", function () {
  let ev = waitForAnyModuleTypeAdded();
  let args = Object.values(ev);
  block(matchDeletedModuleType.apply(null, args), function () {
    verifyModuleTypeExists.apply(null, args);
    updateModuleType.apply(null, args);
    verifyModuleTypeExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ModuleType:add
bthread("monitor:ModuleType:add", function () {
  while (true) {
    let ev = waitForAnyModuleTypeAdded();
    block(matchDeletedModuleType(ev.airflow, ev.attributes, ev.comments, ev.custom_fields, ev.description, ev.id, ev.manufacturer, ev.model, ev.part_number, ev.profile, ev.tags, ev.weight, ev.weight_unit), function () {
      verifyModuleTypeExists(ev.airflow, ev.attributes, ev.comments, ev.custom_fields, ev.description, ev.id, ev.manufacturer, ev.model, ev.part_number, ev.profile, ev.tags, ev.weight, ev.weight_unit);
    });
  }
});

// Story: monitor:ModuleType:deletion
bthread("monitor:ModuleType:deletion", function () {
  while (true) {
    let ev = waitForAnyModuleTypeDeleted();
    block(matchAddedModuleType(ev.airflow, ev.attributes, ev.comments, ev.custom_fields, ev.description, ev.id, ev.manufacturer, ev.model, ev.part_number, ev.profile, ev.tags, ev.weight, ev.weight_unit), function () {
      verifyModuleTypeDoesNotExist(ev.airflow, ev.attributes, ev.comments, ev.custom_fields, ev.description, ev.id, ev.manufacturer, ev.model, ev.part_number, ev.profile, ev.tags, ev.weight, ev.weight_unit);
    });
  }
});

// Story: crud:Module:nondet:1:1
bthread("crud:Module:nondet:1:1", function () {
  let asset_tag = "asset_tag_460";
  let comments = "comments_460";
  let custom_fields = {};
  let description = "description_460";
  let device = "device_460";
  let id = 460;
  let module_bay = 460;
  let module_type = "module_type_460";
  let serial = "serial_460";
  let status = "status_460";
  let tags = "tags_460";
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
  let asset_tag = "asset_tag_461";
  let comments = "comments_461";
  let custom_fields = {};
  let description = "description_461";
  let device = "device_461";
  let id = 461;
  let module_bay = 461;
  let module_type = "module_type_461";
  let serial = "serial_461";
  let status = "status_461";
  let tags = "tags_461";
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
  let asset_tag = "asset_tag_466";
  let comments = "comments_466";
  let custom_fields = {};
  let description = "description_466";
  let device = "device_466";
  let id = 466;
  let module_bay = 466;
  let module_type = "module_type_466";
  let serial = "serial_466";
  let status = "status_466";
  let tags = "tags_466";
  createModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  verifyModuleExists(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  tryToAddExistingModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  verifyModuleExists(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
});

<<<<<<< HEAD
=======
// Story: crud:Module:nondet:existing:update
bthread("crud:Module:nondet:existing:update", function () {
  let ev = waitForAnyModuleAdded();
  let args = Object.values(ev);
  block(matchDeletedModule.apply(null, args), function () {
    verifyModuleExists.apply(null, args);
    updateModule.apply(null, args);
    verifyModuleExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Module:add
bthread("monitor:Module:add", function () {
  while (true) {
    let ev = waitForAnyModuleAdded();
    block(matchDeletedModule(ev.asset_tag, ev.comments, ev.custom_fields, ev.description, ev.device, ev.id, ev.module_bay, ev.module_type, ev.serial, ev.status, ev.tags), function () {
      verifyModuleExists(ev.asset_tag, ev.comments, ev.custom_fields, ev.description, ev.device, ev.id, ev.module_bay, ev.module_type, ev.serial, ev.status, ev.tags);
    });
  }
});

// Story: monitor:Module:deletion
bthread("monitor:Module:deletion", function () {
  while (true) {
    let ev = waitForAnyModuleDeleted();
    block(matchAddedModule(ev.asset_tag, ev.comments, ev.custom_fields, ev.description, ev.device, ev.id, ev.module_bay, ev.module_type, ev.serial, ev.status, ev.tags), function () {
      verifyModuleDoesNotExist(ev.asset_tag, ev.comments, ev.custom_fields, ev.description, ev.device, ev.id, ev.module_bay, ev.module_type, ev.serial, ev.status, ev.tags);
    });
  }
});

// Story: crud:Platform:nondet:1:1
bthread("crud:Platform:nondet:1:1", function () {
  let comments = "comments_470";
  let config_template = "config_template_470";
  let custom_fields = {};
  let description = "description_470";
  let id = 470;
  let manufacturer = "manufacturer_470";
  let name = "name_470";
  let parent = 470;
  let slug = "slug_470";
  let tags = "tags_470";
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
  let comments = "comments_471";
  let config_template = "config_template_471";
  let custom_fields = {};
  let description = "description_471";
  let id = 471;
  let manufacturer = "manufacturer_471";
  let name = "name_471";
  let parent = 471;
  let slug = "slug_471";
  let tags = "tags_471";
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
  let comments = "comments_476";
  let config_template = "config_template_476";
  let custom_fields = {};
  let description = "description_476";
  let id = 476;
  let manufacturer = "manufacturer_476";
  let name = "name_476";
  let parent = 476;
  let slug = "slug_476";
  let tags = "tags_476";
  createPlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  verifyPlatformExists(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  tryToAddExistingPlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  verifyPlatformExists(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:Platform:nondet:existing:update
bthread("crud:Platform:nondet:existing:update", function () {
  let ev = waitForAnyPlatformAdded();
  let args = Object.values(ev);
  block(matchDeletedPlatform.apply(null, args), function () {
    verifyPlatformExists.apply(null, args);
    updatePlatform.apply(null, args);
    verifyPlatformExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Platform:add
bthread("monitor:Platform:add", function () {
  while (true) {
    let ev = waitForAnyPlatformAdded();
    block(matchDeletedPlatform(ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.id, ev.manufacturer, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifyPlatformExists(ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.id, ev.manufacturer, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:Platform:deletion
bthread("monitor:Platform:deletion", function () {
  while (true) {
    let ev = waitForAnyPlatformDeleted();
    block(matchAddedPlatform(ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.id, ev.manufacturer, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifyPlatformDoesNotExist(ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.id, ev.manufacturer, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: crud:PowerFeed:nondet:1:1
bthread("crud:PowerFeed:nondet:1:1", function () {
  let amperage = 480;
  let comments = "comments_480";
  let custom_fields = {};
  let description = "description_480";
  let id = 480;
  let mark_connected = true;
  let max_utilization = 480;
  let name = "name_480";
  let phase = "phase_480";
  let power_panel = "power_panel_480";
  let rack = "rack_480";
  let status = "status_480";
  let supply = "supply_480";
  let tags = "tags_480";
  let tenant = "tenant_480";
  let type = "type_480";
  let voltage = 480;
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
  let amperage = 481;
  let comments = "comments_481";
  let custom_fields = {};
  let description = "description_481";
  let id = 481;
  let mark_connected = true;
  let max_utilization = 481;
  let name = "name_481";
  let phase = "phase_481";
  let power_panel = "power_panel_481";
  let rack = "rack_481";
  let status = "status_481";
  let supply = "supply_481";
  let tags = "tags_481";
  let tenant = "tenant_481";
  let type = "type_481";
  let voltage = 481;
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
  let amperage = 486;
  let comments = "comments_486";
  let custom_fields = {};
  let description = "description_486";
  let id = 486;
  let mark_connected = true;
  let max_utilization = 486;
  let name = "name_486";
  let phase = "phase_486";
  let power_panel = "power_panel_486";
  let rack = "rack_486";
  let status = "status_486";
  let supply = "supply_486";
  let tags = "tags_486";
  let tenant = "tenant_486";
  let type = "type_486";
  let voltage = 486;
  createPowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  verifyPowerFeedExists(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  tryToAddExistingPowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  verifyPowerFeedExists(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
});

<<<<<<< HEAD
=======
// Story: crud:PowerFeed:nondet:existing:update
bthread("crud:PowerFeed:nondet:existing:update", function () {
  let ev = waitForAnyPowerFeedAdded();
  let args = Object.values(ev);
  block(matchDeletedPowerFeed.apply(null, args), function () {
    verifyPowerFeedExists.apply(null, args);
    updatePowerFeed.apply(null, args);
    verifyPowerFeedExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:PowerFeed:add
bthread("monitor:PowerFeed:add", function () {
  while (true) {
    let ev = waitForAnyPowerFeedAdded();
    block(matchDeletedPowerFeed(ev.amperage, ev.comments, ev.custom_fields, ev.description, ev.id, ev.mark_connected, ev.max_utilization, ev.name, ev.phase, ev.power_panel, ev.rack, ev.status, ev.supply, ev.tags, ev.tenant, ev.type, ev.voltage), function () {
      verifyPowerFeedExists(ev.amperage, ev.comments, ev.custom_fields, ev.description, ev.id, ev.mark_connected, ev.max_utilization, ev.name, ev.phase, ev.power_panel, ev.rack, ev.status, ev.supply, ev.tags, ev.tenant, ev.type, ev.voltage);
    });
  }
});

// Story: monitor:PowerFeed:deletion
bthread("monitor:PowerFeed:deletion", function () {
  while (true) {
    let ev = waitForAnyPowerFeedDeleted();
    block(matchAddedPowerFeed(ev.amperage, ev.comments, ev.custom_fields, ev.description, ev.id, ev.mark_connected, ev.max_utilization, ev.name, ev.phase, ev.power_panel, ev.rack, ev.status, ev.supply, ev.tags, ev.tenant, ev.type, ev.voltage), function () {
      verifyPowerFeedDoesNotExist(ev.amperage, ev.comments, ev.custom_fields, ev.description, ev.id, ev.mark_connected, ev.max_utilization, ev.name, ev.phase, ev.power_panel, ev.rack, ev.status, ev.supply, ev.tags, ev.tenant, ev.type, ev.voltage);
    });
  }
});

// Story: crud:PowerOutletTemplate:nondet:1:1
bthread("crud:PowerOutletTemplate:nondet:1:1", function () {
  let description = "description_490";
  let device_type = "device_type_490";
  let feed_leg = "feed_leg_490";
  let id = 490;
  let label = "label_490";
  let module_type = "module_type_490";
  let name = "name_490";
  let power_port = "power_port_490";
  let type = "type_490";
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
  let description = "description_491";
  let device_type = "device_type_491";
  let feed_leg = "feed_leg_491";
  let id = 491;
  let label = "label_491";
  let module_type = "module_type_491";
  let name = "name_491";
  let power_port = "power_port_491";
  let type = "type_491";
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
  let description = "description_496";
  let device_type = "device_type_496";
  let feed_leg = "feed_leg_496";
  let id = 496;
  let label = "label_496";
  let module_type = "module_type_496";
  let name = "name_496";
  let power_port = "power_port_496";
  let type = "type_496";
  createPowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  verifyPowerOutletTemplateExists(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  tryToAddExistingPowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  verifyPowerOutletTemplateExists(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
});

<<<<<<< HEAD
=======
// Story: crud:PowerOutletTemplate:nondet:existing:update
bthread("crud:PowerOutletTemplate:nondet:existing:update", function () {
  let ev = waitForAnyPowerOutletTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedPowerOutletTemplate.apply(null, args), function () {
    verifyPowerOutletTemplateExists.apply(null, args);
    updatePowerOutletTemplate.apply(null, args);
    verifyPowerOutletTemplateExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:PowerOutletTemplate:add
bthread("monitor:PowerOutletTemplate:add", function () {
  while (true) {
    let ev = waitForAnyPowerOutletTemplateAdded();
    block(matchDeletedPowerOutletTemplate(ev.description, ev.device_type, ev.feed_leg, ev.id, ev.label, ev.module_type, ev.name, ev.power_port, ev.type), function () {
      verifyPowerOutletTemplateExists(ev.description, ev.device_type, ev.feed_leg, ev.id, ev.label, ev.module_type, ev.name, ev.power_port, ev.type);
    });
  }
});

// Story: monitor:PowerOutletTemplate:deletion
bthread("monitor:PowerOutletTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyPowerOutletTemplateDeleted();
    block(matchAddedPowerOutletTemplate(ev.description, ev.device_type, ev.feed_leg, ev.id, ev.label, ev.module_type, ev.name, ev.power_port, ev.type), function () {
      verifyPowerOutletTemplateDoesNotExist(ev.description, ev.device_type, ev.feed_leg, ev.id, ev.label, ev.module_type, ev.name, ev.power_port, ev.type);
    });
  }
});

// Story: crud:PowerOutlet:nondet:1:1
bthread("crud:PowerOutlet:nondet:1:1", function () {
  let color = "color_500";
  let custom_fields = {};
  let description = "description_500";
  let device = "device_500";
  let feed_leg = "feed_leg_500";
  let id = 500;
  let label = "label_500";
  let mark_connected = true;
  let module = "module_500";
  let name = "name_500";
  let power_port = "power_port_500";
  let status = "status_500";
  let tags = "tags_500";
  let type = "type_500";
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
  let color = "color_501";
  let custom_fields = {};
  let description = "description_501";
  let device = "device_501";
  let feed_leg = "feed_leg_501";
  let id = 501;
  let label = "label_501";
  let mark_connected = true;
  let module = "module_501";
  let name = "name_501";
  let power_port = "power_port_501";
  let status = "status_501";
  let tags = "tags_501";
  let type = "type_501";
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
  let color = "color_506";
  let custom_fields = {};
  let description = "description_506";
  let device = "device_506";
  let feed_leg = "feed_leg_506";
  let id = 506;
  let label = "label_506";
  let mark_connected = true;
  let module = "module_506";
  let name = "name_506";
  let power_port = "power_port_506";
  let status = "status_506";
  let tags = "tags_506";
  let type = "type_506";
  createPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  verifyPowerOutletExists(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  tryToAddExistingPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  verifyPowerOutletExists(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
});

<<<<<<< HEAD
=======
// Story: crud:PowerOutlet:nondet:existing:update
bthread("crud:PowerOutlet:nondet:existing:update", function () {
  let ev = waitForAnyPowerOutletAdded();
  let args = Object.values(ev);
  block(matchDeletedPowerOutlet.apply(null, args), function () {
    verifyPowerOutletExists.apply(null, args);
    updatePowerOutlet.apply(null, args);
    verifyPowerOutletExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:PowerOutlet:add
bthread("monitor:PowerOutlet:add", function () {
  while (true) {
    let ev = waitForAnyPowerOutletAdded();
    block(matchDeletedPowerOutlet(ev.color, ev.custom_fields, ev.description, ev.device, ev.feed_leg, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.power_port, ev.status, ev.tags, ev.type), function () {
      verifyPowerOutletExists(ev.color, ev.custom_fields, ev.description, ev.device, ev.feed_leg, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.power_port, ev.status, ev.tags, ev.type);
    });
  }
});

// Story: monitor:PowerOutlet:deletion
bthread("monitor:PowerOutlet:deletion", function () {
  while (true) {
    let ev = waitForAnyPowerOutletDeleted();
    block(matchAddedPowerOutlet(ev.color, ev.custom_fields, ev.description, ev.device, ev.feed_leg, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.power_port, ev.status, ev.tags, ev.type), function () {
      verifyPowerOutletDoesNotExist(ev.color, ev.custom_fields, ev.description, ev.device, ev.feed_leg, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.power_port, ev.status, ev.tags, ev.type);
    });
  }
});

// Story: crud:PowerPanel:nondet:1:1
bthread("crud:PowerPanel:nondet:1:1", function () {
  let comments = "comments_510";
  let custom_fields = {};
  let description = "description_510";
  let id = 510;
  let location = "location_510";
  let name = "name_510";
  let site = "site_510";
  let tags = "tags_510";
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
  let comments = "comments_511";
  let custom_fields = {};
  let description = "description_511";
  let id = 511;
  let location = "location_511";
  let name = "name_511";
  let site = "site_511";
  let tags = "tags_511";
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
  let comments = "comments_516";
  let custom_fields = {};
  let description = "description_516";
  let id = 516;
  let location = "location_516";
  let name = "name_516";
  let site = "site_516";
  let tags = "tags_516";
  createPowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  verifyPowerPanelExists(comments, custom_fields, description, id, location, name, site, tags);
  tryToAddExistingPowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  verifyPowerPanelExists(comments, custom_fields, description, id, location, name, site, tags);
});

<<<<<<< HEAD
=======
// Story: crud:PowerPanel:nondet:existing:update
bthread("crud:PowerPanel:nondet:existing:update", function () {
  let ev = waitForAnyPowerPanelAdded();
  let args = Object.values(ev);
  block(matchDeletedPowerPanel.apply(null, args), function () {
    verifyPowerPanelExists.apply(null, args);
    updatePowerPanel.apply(null, args);
    verifyPowerPanelExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:PowerPanel:add
bthread("monitor:PowerPanel:add", function () {
  while (true) {
    let ev = waitForAnyPowerPanelAdded();
    block(matchDeletedPowerPanel(ev.comments, ev.custom_fields, ev.description, ev.id, ev.location, ev.name, ev.site, ev.tags), function () {
      verifyPowerPanelExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.location, ev.name, ev.site, ev.tags);
    });
  }
});

// Story: monitor:PowerPanel:deletion
bthread("monitor:PowerPanel:deletion", function () {
  while (true) {
    let ev = waitForAnyPowerPanelDeleted();
    block(matchAddedPowerPanel(ev.comments, ev.custom_fields, ev.description, ev.id, ev.location, ev.name, ev.site, ev.tags), function () {
      verifyPowerPanelDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.location, ev.name, ev.site, ev.tags);
    });
  }
});

// Story: crud:PowerPortTemplate:nondet:1:1
bthread("crud:PowerPortTemplate:nondet:1:1", function () {
  let allocated_draw = 520;
  let description = "description_520";
  let device_type = "device_type_520";
  let id = 520;
  let label = "label_520";
  let maximum_draw = 520;
  let module_type = "module_type_520";
  let name = "name_520";
  let type = "type_520";
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
  let allocated_draw = 521;
  let description = "description_521";
  let device_type = "device_type_521";
  let id = 521;
  let label = "label_521";
  let maximum_draw = 521;
  let module_type = "module_type_521";
  let name = "name_521";
  let type = "type_521";
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
  let allocated_draw = 526;
  let description = "description_526";
  let device_type = "device_type_526";
  let id = 526;
  let label = "label_526";
  let maximum_draw = 526;
  let module_type = "module_type_526";
  let name = "name_526";
  let type = "type_526";
  createPowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  verifyPowerPortTemplateExists(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  tryToAddExistingPowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  verifyPowerPortTemplateExists(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
});

<<<<<<< HEAD
=======
// Story: crud:PowerPortTemplate:nondet:existing:update
bthread("crud:PowerPortTemplate:nondet:existing:update", function () {
  let ev = waitForAnyPowerPortTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedPowerPortTemplate.apply(null, args), function () {
    verifyPowerPortTemplateExists.apply(null, args);
    updatePowerPortTemplate.apply(null, args);
    verifyPowerPortTemplateExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:PowerPortTemplate:add
bthread("monitor:PowerPortTemplate:add", function () {
  while (true) {
    let ev = waitForAnyPowerPortTemplateAdded();
    block(matchDeletedPowerPortTemplate(ev.allocated_draw, ev.description, ev.device_type, ev.id, ev.label, ev.maximum_draw, ev.module_type, ev.name, ev.type), function () {
      verifyPowerPortTemplateExists(ev.allocated_draw, ev.description, ev.device_type, ev.id, ev.label, ev.maximum_draw, ev.module_type, ev.name, ev.type);
    });
  }
});

// Story: monitor:PowerPortTemplate:deletion
bthread("monitor:PowerPortTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyPowerPortTemplateDeleted();
    block(matchAddedPowerPortTemplate(ev.allocated_draw, ev.description, ev.device_type, ev.id, ev.label, ev.maximum_draw, ev.module_type, ev.name, ev.type), function () {
      verifyPowerPortTemplateDoesNotExist(ev.allocated_draw, ev.description, ev.device_type, ev.id, ev.label, ev.maximum_draw, ev.module_type, ev.name, ev.type);
    });
  }
});

// Story: crud:PowerPort:nondet:1:1
bthread("crud:PowerPort:nondet:1:1", function () {
  let allocated_draw = 530;
  let custom_fields = {};
  let description = "description_530";
  let device = "device_530";
  let id = 530;
  let label = "label_530";
  let mark_connected = true;
  let maximum_draw = 530;
  let module = "module_530";
  let name = "name_530";
  let tags = "tags_530";
  let type = "type_530";
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
  let allocated_draw = 531;
  let custom_fields = {};
  let description = "description_531";
  let device = "device_531";
  let id = 531;
  let label = "label_531";
  let mark_connected = true;
  let maximum_draw = 531;
  let module = "module_531";
  let name = "name_531";
  let tags = "tags_531";
  let type = "type_531";
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
  let allocated_draw = 536;
  let custom_fields = {};
  let description = "description_536";
  let device = "device_536";
  let id = 536;
  let label = "label_536";
  let mark_connected = true;
  let maximum_draw = 536;
  let module = "module_536";
  let name = "name_536";
  let tags = "tags_536";
  let type = "type_536";
  createPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  verifyPowerPortExists(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  tryToAddExistingPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  verifyPowerPortExists(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
});

<<<<<<< HEAD
=======
// Story: crud:PowerPort:nondet:existing:update
bthread("crud:PowerPort:nondet:existing:update", function () {
  let ev = waitForAnyPowerPortAdded();
  let args = Object.values(ev);
  block(matchDeletedPowerPort.apply(null, args), function () {
    verifyPowerPortExists.apply(null, args);
    updatePowerPort.apply(null, args);
    verifyPowerPortExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:PowerPort:add
bthread("monitor:PowerPort:add", function () {
  while (true) {
    let ev = waitForAnyPowerPortAdded();
    block(matchDeletedPowerPort(ev.allocated_draw, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.maximum_draw, ev.module, ev.name, ev.tags, ev.type), function () {
      verifyPowerPortExists(ev.allocated_draw, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.maximum_draw, ev.module, ev.name, ev.tags, ev.type);
    });
  }
});

// Story: monitor:PowerPort:deletion
bthread("monitor:PowerPort:deletion", function () {
  while (true) {
    let ev = waitForAnyPowerPortDeleted();
    block(matchAddedPowerPort(ev.allocated_draw, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.maximum_draw, ev.module, ev.name, ev.tags, ev.type), function () {
      verifyPowerPortDoesNotExist(ev.allocated_draw, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.maximum_draw, ev.module, ev.name, ev.tags, ev.type);
    });
  }
});

// Story: crud:RackReservation:nondet:1:1
bthread("crud:RackReservation:nondet:1:1", function () {
  let comments = "comments_540";
  let custom_fields = {};
  let description = "description_540";
  let id = 540;
  let rack = "rack_540";
  let status = "status_540";
  let tags = "tags_540";
  let tenant = "tenant_540";
  let units = "units_540";
  let user = "user_540";
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
  let comments = "comments_541";
  let custom_fields = {};
  let description = "description_541";
  let id = 541;
  let rack = "rack_541";
  let status = "status_541";
  let tags = "tags_541";
  let tenant = "tenant_541";
  let units = "units_541";
  let user = "user_541";
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
  let comments = "comments_546";
  let custom_fields = {};
  let description = "description_546";
  let id = 546;
  let rack = "rack_546";
  let status = "status_546";
  let tags = "tags_546";
  let tenant = "tenant_546";
  let units = "units_546";
  let user = "user_546";
  createRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  verifyRackReservationExists(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  tryToAddExistingRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  verifyRackReservationExists(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
});

<<<<<<< HEAD
=======
// Story: crud:RackReservation:nondet:existing:update
bthread("crud:RackReservation:nondet:existing:update", function () {
  let ev = waitForAnyRackReservationAdded();
  let args = Object.values(ev);
  block(matchDeletedRackReservation.apply(null, args), function () {
    verifyRackReservationExists.apply(null, args);
    updateRackReservation.apply(null, args);
    verifyRackReservationExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:RackReservation:add
bthread("monitor:RackReservation:add", function () {
  while (true) {
    let ev = waitForAnyRackReservationAdded();
    block(matchDeletedRackReservation(ev.comments, ev.custom_fields, ev.description, ev.id, ev.rack, ev.status, ev.tags, ev.tenant, ev.units, ev.user), function () {
      verifyRackReservationExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.rack, ev.status, ev.tags, ev.tenant, ev.units, ev.user);
    });
  }
});

// Story: monitor:RackReservation:deletion
bthread("monitor:RackReservation:deletion", function () {
  while (true) {
    let ev = waitForAnyRackReservationDeleted();
    block(matchAddedRackReservation(ev.comments, ev.custom_fields, ev.description, ev.id, ev.rack, ev.status, ev.tags, ev.tenant, ev.units, ev.user), function () {
      verifyRackReservationDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.rack, ev.status, ev.tags, ev.tenant, ev.units, ev.user);
    });
  }
});

// Story: crud:RackRole:nondet:1:1
bthread("crud:RackRole:nondet:1:1", function () {
  let color = "color_550";
  let custom_fields = {};
  let description = "description_550";
  let id = 550;
  let name = "name_550";
  let slug = "slug_550";
  let tags = "tags_550";
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
  let color = "color_551";
  let custom_fields = {};
  let description = "description_551";
  let id = 551;
  let name = "name_551";
  let slug = "slug_551";
  let tags = "tags_551";
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
  let color = "color_556";
  let custom_fields = {};
  let description = "description_556";
  let id = 556;
  let name = "name_556";
  let slug = "slug_556";
  let tags = "tags_556";
  createRackRole(color, custom_fields, description, id, name, slug, tags);
  verifyRackRoleExists(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingRackRole(color, custom_fields, description, id, name, slug, tags);
  verifyRackRoleExists(color, custom_fields, description, id, name, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:RackRole:nondet:existing:update
bthread("crud:RackRole:nondet:existing:update", function () {
  let ev = waitForAnyRackRoleAdded();
  let args = Object.values(ev);
  block(matchDeletedRackRole.apply(null, args), function () {
    verifyRackRoleExists.apply(null, args);
    updateRackRole.apply(null, args);
    verifyRackRoleExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:RackRole:add
bthread("monitor:RackRole:add", function () {
  while (true) {
    let ev = waitForAnyRackRoleAdded();
    block(matchDeletedRackRole(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyRackRoleExists(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:RackRole:deletion
bthread("monitor:RackRole:deletion", function () {
  while (true) {
    let ev = waitForAnyRackRoleDeleted();
    block(matchAddedRackRole(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyRackRoleDoesNotExist(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: crud:RackType:nondet:1:1
bthread("crud:RackType:nondet:1:1", function () {
  let color = "color_560";
  let comments = "comments_560";
  let custom_fields = {};
  let desc_units = true;
  let description = "description_560";
  let form_factor = "form_factor_560";
  let id = 560;
  let manufacturer = "manufacturer_560";
  let max_weight = 560;
  let model = "model_560";
  let mounting_depth = 560;
  let name = "name_560";
  let outer_depth = 560;
  let outer_height = 560;
  let outer_unit = "outer_unit_560";
  let outer_width = 560;
  let slug = "slug_560";
  let starting_unit = 560;
  let tags = "tags_560";
  let u_height = 560;
  let weight = 560;
  let weight_unit = "weight_unit_560";
  let width = 560;
  createRackType(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  waitForRackTypeAdded(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToAddExistingRackType(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  updateRackType(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  deleteRackType(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRackType(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeDoesNotExist(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
});

// Story: crud:RackType:nondet:1:2
bthread("crud:RackType:nondet:1:2", function () {
  let color = "color_561";
  let comments = "comments_561";
  let custom_fields = {};
  let desc_units = true;
  let description = "description_561";
  let form_factor = "form_factor_561";
  let id = 561;
  let manufacturer = "manufacturer_561";
  let max_weight = 561;
  let model = "model_561";
  let mounting_depth = 561;
  let name = "name_561";
  let outer_depth = 561;
  let outer_height = 561;
  let outer_unit = "outer_unit_561";
  let outer_width = 561;
  let slug = "slug_561";
  let starting_unit = 561;
  let tags = "tags_561";
  let u_height = 561;
  let weight = 561;
  let weight_unit = "weight_unit_561";
  let width = 561;
<<<<<<< HEAD
  createRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToAddExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  updateRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  deleteRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeDoesNotExist(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
=======
  createRackType(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToAddExistingRackType(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  updateRackType(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  deleteRackType(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRackType(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeDoesNotExist(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:RackType:nondet:negative:dup-add
bthread("crud:RackType:nondet:negative:dup-add", function () {
  let color = "color_566";
  let comments = "comments_566";
  let custom_fields = {};
  let desc_units = true;
  let description = "description_566";
  let form_factor = "form_factor_566";
  let id = 566;
  let manufacturer = "manufacturer_566";
  let max_weight = 566;
  let model = "model_566";
  let mounting_depth = 566;
  let name = "name_566";
  let outer_depth = 566;
  let outer_height = 566;
  let outer_unit = "outer_unit_566";
  let outer_width = 566;
  let slug = "slug_566";
  let starting_unit = 566;
  let tags = "tags_566";
  let u_height = 566;
  let weight = 566;
  let weight_unit = "weight_unit_566";
  let width = 566;
<<<<<<< HEAD
  createRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToAddExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
=======
  createRackType(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToAddExistingRackType(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(color, comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
});

// Story: crud:RackType:nondet:existing:update
bthread("crud:RackType:nondet:existing:update", function () {
  let ev = waitForAnyRackTypeAdded();
  let args = Object.values(ev);
  block(matchDeletedRackType.apply(null, args), function () {
    verifyRackTypeExists.apply(null, args);
    updateRackType.apply(null, args);
    verifyRackTypeExists.apply(null, args);
  });
});

// Story: monitor:RackType:add
bthread("monitor:RackType:add", function () {
  while (true) {
    let ev = waitForAnyRackTypeAdded();
    block(matchDeletedRackType(ev.color, ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.form_factor, ev.id, ev.manufacturer, ev.max_weight, ev.model, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.slug, ev.starting_unit, ev.tags, ev.u_height, ev.weight, ev.weight_unit, ev.width), function () {
      verifyRackTypeExists(ev.color, ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.form_factor, ev.id, ev.manufacturer, ev.max_weight, ev.model, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.slug, ev.starting_unit, ev.tags, ev.u_height, ev.weight, ev.weight_unit, ev.width);
    });
  }
});

// Story: monitor:RackType:deletion
bthread("monitor:RackType:deletion", function () {
  while (true) {
    let ev = waitForAnyRackTypeDeleted();
    block(matchAddedRackType(ev.color, ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.form_factor, ev.id, ev.manufacturer, ev.max_weight, ev.model, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.slug, ev.starting_unit, ev.tags, ev.u_height, ev.weight, ev.weight_unit, ev.width), function () {
      verifyRackTypeDoesNotExist(ev.color, ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.form_factor, ev.id, ev.manufacturer, ev.max_weight, ev.model, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.slug, ev.starting_unit, ev.tags, ev.u_height, ev.weight, ev.weight_unit, ev.width);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:RackType:add
bthread("monitor:RackType:add", function () {
  while (true) {
    let ev = waitForAnyRackTypeAdded();
    block(matchDeletedRackType(ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.form_factor, ev.id, ev.manufacturer, ev.max_weight, ev.model, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.slug, ev.starting_unit, ev.tags, ev.u_height, ev.weight, ev.weight_unit, ev.width), function () {
      verifyRackTypeExists(ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.form_factor, ev.id, ev.manufacturer, ev.max_weight, ev.model, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.slug, ev.starting_unit, ev.tags, ev.u_height, ev.weight, ev.weight_unit, ev.width);
    });
  }
});

// Story: monitor:RackType:deletion
bthread("monitor:RackType:deletion", function () {
  while (true) {
    let ev = waitForAnyRackTypeDeleted();
    block(matchAddedRackType(ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.form_factor, ev.id, ev.manufacturer, ev.max_weight, ev.model, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.slug, ev.starting_unit, ev.tags, ev.u_height, ev.weight, ev.weight_unit, ev.width), function () {
      verifyRackTypeDoesNotExist(ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.form_factor, ev.id, ev.manufacturer, ev.max_weight, ev.model, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.slug, ev.starting_unit, ev.tags, ev.u_height, ev.weight, ev.weight_unit, ev.width);
    });
  }
});

// Story: crud:Rack:nondet:1:1
bthread("crud:Rack:nondet:1:1", function () {
  let airflow = "airflow_570";
  let asset_tag = "asset_tag_570";
  let comments = "comments_570";
  let custom_fields = {};
  let desc_units = true;
  let description = "description_570";
  let facility_id = 570;
  let form_factor = "form_factor_570";
  let id = 570;
  let location = "location_570";
  let max_weight = 570;
  let mounting_depth = 570;
  let name = "name_570";
  let outer_depth = 570;
  let outer_height = 570;
  let outer_unit = "outer_unit_570";
  let outer_width = 570;
  let rack_type = "rack_type_570";
  let role = "role_570";
  let serial = "serial_570";
  let site = "site_570";
  let starting_unit = 570;
  let status = "status_570";
  let tags = "tags_570";
  let tenant = "tenant_570";
  let tenant_group = "tenant_group_570";
  let u_height = 570;
  let weight = 570;
  let weight_unit = "weight_unit_570";
  let width = 570;
  createRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  waitForRackAdded(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  tryToAddExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  updateRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  deleteRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  verifyRackDoesNotExist(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
});

// Story: crud:Rack:nondet:1:2
bthread("crud:Rack:nondet:1:2", function () {
  let airflow = "airflow_571";
  let asset_tag = "asset_tag_571";
  let comments = "comments_571";
  let custom_fields = {};
  let desc_units = true;
  let description = "description_571";
  let facility_id = 571;
  let form_factor = "form_factor_571";
  let id = 571;
  let location = "location_571";
  let max_weight = 571;
  let mounting_depth = 571;
  let name = "name_571";
  let outer_depth = 571;
  let outer_height = 571;
  let outer_unit = "outer_unit_571";
  let outer_width = 571;
  let rack_type = "rack_type_571";
  let role = "role_571";
  let serial = "serial_571";
  let site = "site_571";
  let starting_unit = 571;
  let status = "status_571";
  let tags = "tags_571";
  let tenant = "tenant_571";
  let tenant_group = "tenant_group_571";
  let u_height = 571;
  let weight = 571;
  let weight_unit = "weight_unit_571";
  let width = 571;
<<<<<<< HEAD
  createRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToAddExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  updateRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  deleteRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackDoesNotExist(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
=======
  createRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  tryToAddExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  updateRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  deleteRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  verifyRackDoesNotExist(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:Rack:nondet:negative:dup-add
bthread("crud:Rack:nondet:negative:dup-add", function () {
  let airflow = "airflow_576";
  let asset_tag = "asset_tag_576";
  let comments = "comments_576";
  let custom_fields = {};
  let desc_units = true;
  let description = "description_576";
  let facility_id = 576;
  let form_factor = "form_factor_576";
  let id = 576;
  let location = "location_576";
  let max_weight = 576;
  let mounting_depth = 576;
  let name = "name_576";
  let outer_depth = 576;
  let outer_height = 576;
  let outer_unit = "outer_unit_576";
  let outer_width = 576;
  let rack_type = "rack_type_576";
  let role = "role_576";
  let serial = "serial_576";
  let site = "site_576";
  let starting_unit = 576;
  let status = "status_576";
  let tags = "tags_576";
  let tenant = "tenant_576";
  let tenant_group = "tenant_group_576";
  let u_height = 576;
  let weight = 576;
  let weight_unit = "weight_unit_576";
  let width = 576;
<<<<<<< HEAD
  createRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToAddExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
=======
  createRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  tryToAddExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, tenant_group, u_height, weight, weight_unit, width);
});

// Story: crud:Rack:nondet:existing:update
bthread("crud:Rack:nondet:existing:update", function () {
  let ev = waitForAnyRackAdded();
  let args = Object.values(ev);
  block(matchDeletedRack.apply(null, args), function () {
    verifyRackExists.apply(null, args);
    updateRack.apply(null, args);
    verifyRackExists.apply(null, args);
  });
});

// Story: monitor:Rack:add
bthread("monitor:Rack:add", function () {
  while (true) {
    let ev = waitForAnyRackAdded();
    block(matchDeletedRack(ev.airflow, ev.asset_tag, ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.facility_id, ev.form_factor, ev.id, ev.location, ev.max_weight, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.rack_type, ev.role, ev.serial, ev.site, ev.starting_unit, ev.status, ev.tags, ev.tenant, ev.tenant_group, ev.u_height, ev.weight, ev.weight_unit, ev.width), function () {
      verifyRackExists(ev.airflow, ev.asset_tag, ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.facility_id, ev.form_factor, ev.id, ev.location, ev.max_weight, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.rack_type, ev.role, ev.serial, ev.site, ev.starting_unit, ev.status, ev.tags, ev.tenant, ev.tenant_group, ev.u_height, ev.weight, ev.weight_unit, ev.width);
    });
  }
});

// Story: monitor:Rack:deletion
bthread("monitor:Rack:deletion", function () {
  while (true) {
    let ev = waitForAnyRackDeleted();
    block(matchAddedRack(ev.airflow, ev.asset_tag, ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.facility_id, ev.form_factor, ev.id, ev.location, ev.max_weight, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.rack_type, ev.role, ev.serial, ev.site, ev.starting_unit, ev.status, ev.tags, ev.tenant, ev.tenant_group, ev.u_height, ev.weight, ev.weight_unit, ev.width), function () {
      verifyRackDoesNotExist(ev.airflow, ev.asset_tag, ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.facility_id, ev.form_factor, ev.id, ev.location, ev.max_weight, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.rack_type, ev.role, ev.serial, ev.site, ev.starting_unit, ev.status, ev.tags, ev.tenant, ev.tenant_group, ev.u_height, ev.weight, ev.weight_unit, ev.width);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:Rack:add
bthread("monitor:Rack:add", function () {
  while (true) {
    let ev = waitForAnyRackAdded();
    block(matchDeletedRack(ev.airflow, ev.asset_tag, ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.facility_id, ev.form_factor, ev.id, ev.location, ev.max_weight, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.rack_type, ev.role, ev.serial, ev.site, ev.starting_unit, ev.status, ev.tags, ev.tenant, ev.u_height, ev.weight, ev.weight_unit, ev.width), function () {
      verifyRackExists(ev.airflow, ev.asset_tag, ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.facility_id, ev.form_factor, ev.id, ev.location, ev.max_weight, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.rack_type, ev.role, ev.serial, ev.site, ev.starting_unit, ev.status, ev.tags, ev.tenant, ev.u_height, ev.weight, ev.weight_unit, ev.width);
    });
  }
});

// Story: monitor:Rack:deletion
bthread("monitor:Rack:deletion", function () {
  while (true) {
    let ev = waitForAnyRackDeleted();
    block(matchAddedRack(ev.airflow, ev.asset_tag, ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.facility_id, ev.form_factor, ev.id, ev.location, ev.max_weight, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.rack_type, ev.role, ev.serial, ev.site, ev.starting_unit, ev.status, ev.tags, ev.tenant, ev.u_height, ev.weight, ev.weight_unit, ev.width), function () {
      verifyRackDoesNotExist(ev.airflow, ev.asset_tag, ev.comments, ev.custom_fields, ev.desc_units, ev.description, ev.facility_id, ev.form_factor, ev.id, ev.location, ev.max_weight, ev.mounting_depth, ev.name, ev.outer_depth, ev.outer_height, ev.outer_unit, ev.outer_width, ev.rack_type, ev.role, ev.serial, ev.site, ev.starting_unit, ev.status, ev.tags, ev.tenant, ev.u_height, ev.weight, ev.weight_unit, ev.width);
    });
  }
});

// Story: crud:RackElevation:read_only
bthread("crud:RackElevation:read_only", function () {
  let id = 580;
  verifyRackElevationExists(id);
});

// Story: crud:RearPortTemplate:nondet:1:1
bthread("crud:RearPortTemplate:nondet:1:1", function () {
<<<<<<< HEAD
  let color = "color_590";
  let description = "description_590";
  let device_type = "device_type_590";
  let id = 590;
  let label = "label_590";
  let module_type = "module_type_590";
  let name = "name_590";
  let positions = 590;
  let type = "type_590";
  createRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  waitForRearPortTemplateAdded(color, description, device_type, id, label, module_type, name, positions, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, type);
  updateRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  deleteRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  tryToDeleteANonExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  verifyRearPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, positions, type);
=======
  let color = "color_580";
  let description = "description_580";
  let device_type = "device_type_580";
  let id = 580;
  let label = "label_580";
  let module_type = "module_type_580";
  let name = "name_580";
  let positions = 580;
  let rear_port = "rear_port_580";
  let type = "type_580";
  createRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  waitForRearPortTemplateAdded(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  updateRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  deleteRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  tryToDeleteANonExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  verifyRearPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:RearPortTemplate:nondet:1:2
bthread("crud:RearPortTemplate:nondet:1:2", function () {
<<<<<<< HEAD
  let color = "color_591";
  let description = "description_591";
  let device_type = "device_type_591";
  let id = 591;
  let label = "label_591";
  let module_type = "module_type_591";
  let name = "name_591";
  let positions = 591;
  let type = "type_591";
  createRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  updateRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, type);
  deleteRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  tryToDeleteANonExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  verifyRearPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, positions, type);
=======
  let color = "color_581";
  let description = "description_581";
  let device_type = "device_type_581";
  let id = 581;
  let label = "label_581";
  let module_type = "module_type_581";
  let name = "name_581";
  let positions = 581;
  let rear_port = "rear_port_581";
  let type = "type_581";
  createRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  updateRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  deleteRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  tryToDeleteANonExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  verifyRearPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:RearPortTemplate:nondet:negative:dup-add
bthread("crud:RearPortTemplate:nondet:negative:dup-add", function () {
<<<<<<< HEAD
  let color = "color_596";
  let description = "description_596";
  let device_type = "device_type_596";
  let id = 596;
  let label = "label_596";
  let module_type = "module_type_596";
  let name = "name_596";
  let positions = 596;
  let type = "type_596";
  createRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, type);
=======
  let color = "color_586";
  let description = "description_586";
  let device_type = "device_type_586";
  let id = 586;
  let label = "label_586";
  let module_type = "module_type_586";
  let name = "name_586";
  let positions = 586;
  let rear_port = "rear_port_586";
  let type = "type_586";
  createRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, rear_port, type);
});

// Story: crud:RearPortTemplate:nondet:existing:update
bthread("crud:RearPortTemplate:nondet:existing:update", function () {
  let ev = waitForAnyRearPortTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedRearPortTemplate.apply(null, args), function () {
    verifyRearPortTemplateExists.apply(null, args);
    updateRearPortTemplate.apply(null, args);
    verifyRearPortTemplateExists.apply(null, args);
  });
});

// Story: monitor:RearPortTemplate:add
bthread("monitor:RearPortTemplate:add", function () {
  while (true) {
    let ev = waitForAnyRearPortTemplateAdded();
    block(matchDeletedRearPortTemplate(ev.color, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.positions, ev.rear_port, ev.type), function () {
      verifyRearPortTemplateExists(ev.color, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.positions, ev.rear_port, ev.type);
    });
  }
});

// Story: monitor:RearPortTemplate:deletion
bthread("monitor:RearPortTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyRearPortTemplateDeleted();
    block(matchAddedRearPortTemplate(ev.color, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.positions, ev.rear_port, ev.type), function () {
      verifyRearPortTemplateDoesNotExist(ev.color, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.positions, ev.rear_port, ev.type);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:RearPortTemplate:add
bthread("monitor:RearPortTemplate:add", function () {
  while (true) {
    let ev = waitForAnyRearPortTemplateAdded();
    block(matchDeletedRearPortTemplate(ev.color, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.positions, ev.type), function () {
      verifyRearPortTemplateExists(ev.color, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.positions, ev.type);
    });
  }
});

// Story: monitor:RearPortTemplate:deletion
bthread("monitor:RearPortTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyRearPortTemplateDeleted();
    block(matchAddedRearPortTemplate(ev.color, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.positions, ev.type), function () {
      verifyRearPortTemplateDoesNotExist(ev.color, ev.description, ev.device_type, ev.id, ev.label, ev.module_type, ev.name, ev.positions, ev.type);
    });
  }
});

// Story: crud:RearPort:nondet:1:1
bthread("crud:RearPort:nondet:1:1", function () {
<<<<<<< HEAD
  let color = "color_600";
  let custom_fields = {};
  let description = "description_600";
  let device = "device_600";
  let id = 600;
  let label = "label_600";
  let mark_connected = true;
  let module = "module_600";
  let name = "name_600";
  let positions = 600;
  let tags = "tags_600";
  let type = "type_600";
  createRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  waitForRearPortAdded(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  tryToAddExistingRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  verifyRearPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  updateRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  deleteRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  tryToDeleteANonExistingRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  verifyRearPortDoesNotExist(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
=======
  let cable = "cable_590";
  let cable_end = "cable_end_590";
  let color = "color_590";
  let custom_fields = {};
  let description = "description_590";
  let device = "device_590";
  let device_role = "device_role_590";
  let device_type = "device_type_590";
  let id = 590;
  let label = "label_590";
  let mark_connected = "mark_connected_590";
  let module = "module_590";
  let name = "name_590";
  let positions = 590;
  let rack = "rack_590";
  let status = "status_590";
  let tags = "tags_590";
  let type = "type_590";
  let virtual_chassis = "virtual_chassis_590";
  createRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  waitForRearPortAdded(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  tryToAddExistingRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  verifyRearPortExists(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  updateRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  deleteRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  tryToDeleteANonExistingRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  verifyRearPortDoesNotExist(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:RearPort:nondet:1:2
bthread("crud:RearPort:nondet:1:2", function () {
<<<<<<< HEAD
  let color = "color_601";
  let custom_fields = {};
  let description = "description_601";
  let device = "device_601";
  let id = 601;
  let label = "label_601";
  let mark_connected = true;
  let module = "module_601";
  let name = "name_601";
  let positions = 601;
  let tags = "tags_601";
  let type = "type_601";
  createRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  tryToAddExistingRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  updateRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  verifyRearPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  deleteRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  tryToDeleteANonExistingRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  verifyRearPortDoesNotExist(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
=======
  let cable = "cable_591";
  let cable_end = "cable_end_591";
  let color = "color_591";
  let custom_fields = {};
  let description = "description_591";
  let device = "device_591";
  let device_role = "device_role_591";
  let device_type = "device_type_591";
  let id = 591;
  let label = "label_591";
  let mark_connected = "mark_connected_591";
  let module = "module_591";
  let name = "name_591";
  let positions = 591;
  let rack = "rack_591";
  let status = "status_591";
  let tags = "tags_591";
  let type = "type_591";
  let virtual_chassis = "virtual_chassis_591";
  createRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  tryToAddExistingRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  updateRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  verifyRearPortExists(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  deleteRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  tryToDeleteANonExistingRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  verifyRearPortDoesNotExist(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:RearPort:nondet:negative:dup-add
bthread("crud:RearPort:nondet:negative:dup-add", function () {
<<<<<<< HEAD
  let color = "color_606";
  let custom_fields = {};
  let description = "description_606";
  let device = "device_606";
  let id = 606;
  let label = "label_606";
  let mark_connected = true;
  let module = "module_606";
  let name = "name_606";
  let positions = 606;
  let tags = "tags_606";
  let type = "type_606";
  createRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  verifyRearPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  tryToAddExistingRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  verifyRearPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
=======
  let cable = "cable_596";
  let cable_end = "cable_end_596";
  let color = "color_596";
  let custom_fields = {};
  let description = "description_596";
  let device = "device_596";
  let device_role = "device_role_596";
  let device_type = "device_type_596";
  let id = 596;
  let label = "label_596";
  let mark_connected = "mark_connected_596";
  let module = "module_596";
  let name = "name_596";
  let positions = 596;
  let rack = "rack_596";
  let status = "status_596";
  let tags = "tags_596";
  let type = "type_596";
  let virtual_chassis = "virtual_chassis_596";
  createRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  verifyRearPortExists(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  tryToAddExistingRearPort(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
  verifyRearPortExists(cable, cable_end, color, custom_fields, description, device, device_role, device_type, id, label, mark_connected, module, name, positions, rack, status, tags, type, virtual_chassis);
});

// Story: crud:RearPort:nondet:existing:update
bthread("crud:RearPort:nondet:existing:update", function () {
  let ev = waitForAnyRearPortAdded();
  let args = Object.values(ev);
  block(matchDeletedRearPort.apply(null, args), function () {
    verifyRearPortExists.apply(null, args);
    updateRearPort.apply(null, args);
    verifyRearPortExists.apply(null, args);
  });
});

// Story: monitor:RearPort:add
bthread("monitor:RearPort:add", function () {
  while (true) {
    let ev = waitForAnyRearPortAdded();
    block(matchDeletedRearPort(ev.cable, ev.cable_end, ev.color, ev.custom_fields, ev.description, ev.device, ev.device_role, ev.device_type, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.positions, ev.rack, ev.status, ev.tags, ev.type, ev.virtual_chassis), function () {
      verifyRearPortExists(ev.cable, ev.cable_end, ev.color, ev.custom_fields, ev.description, ev.device, ev.device_role, ev.device_type, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.positions, ev.rack, ev.status, ev.tags, ev.type, ev.virtual_chassis);
    });
  }
});

// Story: monitor:RearPort:deletion
bthread("monitor:RearPort:deletion", function () {
  while (true) {
    let ev = waitForAnyRearPortDeleted();
    block(matchAddedRearPort(ev.cable, ev.cable_end, ev.color, ev.custom_fields, ev.description, ev.device, ev.device_role, ev.device_type, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.positions, ev.rack, ev.status, ev.tags, ev.type, ev.virtual_chassis), function () {
      verifyRearPortDoesNotExist(ev.cable, ev.cable_end, ev.color, ev.custom_fields, ev.description, ev.device, ev.device_role, ev.device_type, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.positions, ev.rack, ev.status, ev.tags, ev.type, ev.virtual_chassis);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:RearPort:add
bthread("monitor:RearPort:add", function () {
  while (true) {
    let ev = waitForAnyRearPortAdded();
    block(matchDeletedRearPort(ev.color, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.positions, ev.tags, ev.type), function () {
      verifyRearPortExists(ev.color, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.positions, ev.tags, ev.type);
    });
  }
});

// Story: monitor:RearPort:deletion
bthread("monitor:RearPort:deletion", function () {
  while (true) {
    let ev = waitForAnyRearPortDeleted();
    block(matchAddedRearPort(ev.color, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.positions, ev.tags, ev.type), function () {
      verifyRearPortDoesNotExist(ev.color, ev.custom_fields, ev.description, ev.device, ev.id, ev.label, ev.mark_connected, ev.module, ev.name, ev.positions, ev.tags, ev.type);
    });
  }
});

// Story: crud:Region:nondet:1:1
bthread("crud:Region:nondet:1:1", function () {
<<<<<<< HEAD
  let comments = "comments_610";
  let custom_fields = {};
  let description = "description_610";
  let id = 610;
  let name = "name_610";
  let parent = 610;
  let slug = "slug_610";
  let tags = "tags_610";
  createRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  waitForRegionAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, custom_fields, description, id, name, parent, slug, tags);
  updateRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
=======
  let comments = "comments_600";
  let contact = "contact_600";
  let contact_group = "contact_group_600";
  let contact_role = "contact_role_600";
  let custom_fields = {};
  let description = "description_600";
  let id = 600;
  let name = "name_600";
  let parent = 600;
  let slug = "slug_600";
  let tags = "tags_600";
  createRegion(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  waitForRegionAdded(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingRegion(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  updateRegion(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  deleteRegion(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingRegion(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionDoesNotExist(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:Region:nondet:1:2
bthread("crud:Region:nondet:1:2", function () {
<<<<<<< HEAD
  let comments = "comments_611";
  let custom_fields = {};
  let description = "description_611";
  let id = 611;
  let name = "name_611";
  let parent = 611;
  let slug = "slug_611";
  let tags = "tags_611";
  createRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  updateRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
=======
  let comments = "comments_601";
  let contact = "contact_601";
  let contact_group = "contact_group_601";
  let contact_role = "contact_role_601";
  let custom_fields = {};
  let description = "description_601";
  let id = 601;
  let name = "name_601";
  let parent = 601;
  let slug = "slug_601";
  let tags = "tags_601";
  createRegion(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingRegion(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  updateRegion(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  deleteRegion(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingRegion(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionDoesNotExist(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:Region:nondet:negative:dup-add
bthread("crud:Region:nondet:negative:dup-add", function () {
<<<<<<< HEAD
  let comments = "comments_616";
  let custom_fields = {};
  let description = "description_616";
  let id = 616;
  let name = "name_616";
  let parent = 616;
  let slug = "slug_616";
  let tags = "tags_616";
  createRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, custom_fields, description, id, name, parent, slug, tags);
=======
  let comments = "comments_606";
  let contact = "contact_606";
  let contact_group = "contact_group_606";
  let contact_role = "contact_role_606";
  let custom_fields = {};
  let description = "description_606";
  let id = 606;
  let name = "name_606";
  let parent = 606;
  let slug = "slug_606";
  let tags = "tags_606";
  createRegion(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingRegion(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, contact, contact_group, contact_role, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:Region:nondet:existing:update
bthread("crud:Region:nondet:existing:update", function () {
  let ev = waitForAnyRegionAdded();
  let args = Object.values(ev);
  block(matchDeletedRegion.apply(null, args), function () {
    verifyRegionExists.apply(null, args);
    updateRegion.apply(null, args);
    verifyRegionExists.apply(null, args);
  });
});

// Story: monitor:Region:add
bthread("monitor:Region:add", function () {
  while (true) {
    let ev = waitForAnyRegionAdded();
    block(matchDeletedRegion(ev.comments, ev.contact, ev.contact_group, ev.contact_role, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifyRegionExists(ev.comments, ev.contact, ev.contact_group, ev.contact_role, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:Region:deletion
bthread("monitor:Region:deletion", function () {
  while (true) {
    let ev = waitForAnyRegionDeleted();
    block(matchAddedRegion(ev.comments, ev.contact, ev.contact_group, ev.contact_role, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifyRegionDoesNotExist(ev.comments, ev.contact, ev.contact_group, ev.contact_role, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:Region:add
bthread("monitor:Region:add", function () {
  while (true) {
    let ev = waitForAnyRegionAdded();
    block(matchDeletedRegion(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifyRegionExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:Region:deletion
bthread("monitor:Region:deletion", function () {
  while (true) {
    let ev = waitForAnyRegionDeleted();
    block(matchAddedRegion(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifyRegionDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: crud:SiteGroup:nondet:1:1
bthread("crud:SiteGroup:nondet:1:1", function () {
  let comments = "comments_620";
  let custom_fields = {};
  let description = "description_620";
  let id = 620;
  let name = "name_620";
  let parent = 620;
  let slug = "slug_620";
  let tags = "tags_620";
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
  let comments = "comments_621";
  let custom_fields = {};
  let description = "description_621";
  let id = 621;
  let name = "name_621";
  let parent = 621;
  let slug = "slug_621";
  let tags = "tags_621";
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
  let comments = "comments_626";
  let custom_fields = {};
  let description = "description_626";
  let id = 626;
  let name = "name_626";
  let parent = 626;
  let slug = "slug_626";
  let tags = "tags_626";
  createSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:SiteGroup:nondet:existing:update
bthread("crud:SiteGroup:nondet:existing:update", function () {
  let ev = waitForAnySiteGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedSiteGroup.apply(null, args), function () {
    verifySiteGroupExists.apply(null, args);
    updateSiteGroup.apply(null, args);
    verifySiteGroupExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:SiteGroup:add
bthread("monitor:SiteGroup:add", function () {
  while (true) {
    let ev = waitForAnySiteGroupAdded();
    block(matchDeletedSiteGroup(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifySiteGroupExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:SiteGroup:deletion
bthread("monitor:SiteGroup:deletion", function () {
  while (true) {
    let ev = waitForAnySiteGroupDeleted();
    block(matchAddedSiteGroup(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifySiteGroupDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: crud:Site:nondet:1:1
bthread("crud:Site:nondet:1:1", function () {
<<<<<<< HEAD
  let asns = "asns_630";
  let comments = "comments_630";
  let custom_fields = {};
  let description = "description_630";
  let facility = "facility_630";
  let group = "group_630";
  let id = 630;
  let latitude = 630;
  let longitude = 630;
  let name = "name_630";
  let physical_address = "physical_address_630";
  let region = "region_630";
  let shipping_address = "shipping_address_630";
  let slug = "slug_630";
  let status = "status_630";
  let tags = "tags_630";
  let tenant = "tenant_630";
  let time_zone = "time_zone_630";
  createSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  waitForSiteAdded(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToAddExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  updateSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  deleteSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToDeleteANonExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteDoesNotExist(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
=======
  let asn = "asn_620";
  let asns = "asns_620";
  let comments = "comments_620";
  let custom_fields = {};
  let description = "description_620";
  let facility = "facility_620";
  let group = "group_620";
  let id = 620;
  let latitude = 620;
  let longitude = 620;
  let name = "name_620";
  let physical_address = "physical_address_620";
  let region = "region_620";
  let shipping_address = "shipping_address_620";
  let slug = "slug_620";
  let status = "status_620";
  let tags = "tags_620";
  let tenant = "tenant_620";
  let time_zone = "time_zone_620";
  createSite(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  waitForSiteAdded(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToAddExistingSite(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  updateSite(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  deleteSite(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToDeleteANonExistingSite(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteDoesNotExist(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:Site:nondet:1:2
bthread("crud:Site:nondet:1:2", function () {
<<<<<<< HEAD
  let asns = "asns_631";
  let comments = "comments_631";
  let custom_fields = {};
  let description = "description_631";
  let facility = "facility_631";
  let group = "group_631";
  let id = 631;
  let latitude = 631;
  let longitude = 631;
  let name = "name_631";
  let physical_address = "physical_address_631";
  let region = "region_631";
  let shipping_address = "shipping_address_631";
  let slug = "slug_631";
  let status = "status_631";
  let tags = "tags_631";
  let tenant = "tenant_631";
  let time_zone = "time_zone_631";
  createSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToAddExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  updateSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  deleteSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToDeleteANonExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteDoesNotExist(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
=======
  let asn = "asn_621";
  let asns = "asns_621";
  let comments = "comments_621";
  let custom_fields = {};
  let description = "description_621";
  let facility = "facility_621";
  let group = "group_621";
  let id = 621;
  let latitude = 621;
  let longitude = 621;
  let name = "name_621";
  let physical_address = "physical_address_621";
  let region = "region_621";
  let shipping_address = "shipping_address_621";
  let slug = "slug_621";
  let status = "status_621";
  let tags = "tags_621";
  let tenant = "tenant_621";
  let time_zone = "time_zone_621";
  createSite(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToAddExistingSite(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  updateSite(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  deleteSite(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToDeleteANonExistingSite(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteDoesNotExist(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:Site:nondet:negative:dup-add
bthread("crud:Site:nondet:negative:dup-add", function () {
<<<<<<< HEAD
  let asns = "asns_636";
  let comments = "comments_636";
  let custom_fields = {};
  let description = "description_636";
  let facility = "facility_636";
  let group = "group_636";
  let id = 636;
  let latitude = 636;
  let longitude = 636;
  let name = "name_636";
  let physical_address = "physical_address_636";
  let region = "region_636";
  let shipping_address = "shipping_address_636";
  let slug = "slug_636";
  let status = "status_636";
  let tags = "tags_636";
  let tenant = "tenant_636";
  let time_zone = "time_zone_636";
  createSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToAddExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
=======
  let asn = "asn_626";
  let asns = "asns_626";
  let comments = "comments_626";
  let custom_fields = {};
  let description = "description_626";
  let facility = "facility_626";
  let group = "group_626";
  let id = 626;
  let latitude = 626;
  let longitude = 626;
  let name = "name_626";
  let physical_address = "physical_address_626";
  let region = "region_626";
  let shipping_address = "shipping_address_626";
  let slug = "slug_626";
  let status = "status_626";
  let tags = "tags_626";
  let tenant = "tenant_626";
  let time_zone = "time_zone_626";
  createSite(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToAddExistingSite(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asn, asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
});

// Story: crud:Site:nondet:existing:update
bthread("crud:Site:nondet:existing:update", function () {
  let ev = waitForAnySiteAdded();
  let args = Object.values(ev);
  block(matchDeletedSite.apply(null, args), function () {
    verifySiteExists.apply(null, args);
    updateSite.apply(null, args);
    verifySiteExists.apply(null, args);
  });
});

// Story: monitor:Site:add
bthread("monitor:Site:add", function () {
  while (true) {
    let ev = waitForAnySiteAdded();
    block(matchDeletedSite(ev.asn, ev.asns, ev.comments, ev.custom_fields, ev.description, ev.facility, ev.group, ev.id, ev.latitude, ev.longitude, ev.name, ev.physical_address, ev.region, ev.shipping_address, ev.slug, ev.status, ev.tags, ev.tenant, ev.time_zone), function () {
      verifySiteExists(ev.asn, ev.asns, ev.comments, ev.custom_fields, ev.description, ev.facility, ev.group, ev.id, ev.latitude, ev.longitude, ev.name, ev.physical_address, ev.region, ev.shipping_address, ev.slug, ev.status, ev.tags, ev.tenant, ev.time_zone);
    });
  }
});

// Story: monitor:Site:deletion
bthread("monitor:Site:deletion", function () {
  while (true) {
    let ev = waitForAnySiteDeleted();
    block(matchAddedSite(ev.asn, ev.asns, ev.comments, ev.custom_fields, ev.description, ev.facility, ev.group, ev.id, ev.latitude, ev.longitude, ev.name, ev.physical_address, ev.region, ev.shipping_address, ev.slug, ev.status, ev.tags, ev.tenant, ev.time_zone), function () {
      verifySiteDoesNotExist(ev.asn, ev.asns, ev.comments, ev.custom_fields, ev.description, ev.facility, ev.group, ev.id, ev.latitude, ev.longitude, ev.name, ev.physical_address, ev.region, ev.shipping_address, ev.slug, ev.status, ev.tags, ev.tenant, ev.time_zone);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:Site:add
bthread("monitor:Site:add", function () {
  while (true) {
    let ev = waitForAnySiteAdded();
    block(matchDeletedSite(ev.asns, ev.comments, ev.custom_fields, ev.description, ev.facility, ev.group, ev.id, ev.latitude, ev.longitude, ev.name, ev.physical_address, ev.region, ev.shipping_address, ev.slug, ev.status, ev.tags, ev.tenant, ev.time_zone), function () {
      verifySiteExists(ev.asns, ev.comments, ev.custom_fields, ev.description, ev.facility, ev.group, ev.id, ev.latitude, ev.longitude, ev.name, ev.physical_address, ev.region, ev.shipping_address, ev.slug, ev.status, ev.tags, ev.tenant, ev.time_zone);
    });
  }
});

// Story: monitor:Site:deletion
bthread("monitor:Site:deletion", function () {
  while (true) {
    let ev = waitForAnySiteDeleted();
    block(matchAddedSite(ev.asns, ev.comments, ev.custom_fields, ev.description, ev.facility, ev.group, ev.id, ev.latitude, ev.longitude, ev.name, ev.physical_address, ev.region, ev.shipping_address, ev.slug, ev.status, ev.tags, ev.tenant, ev.time_zone), function () {
      verifySiteDoesNotExist(ev.asns, ev.comments, ev.custom_fields, ev.description, ev.facility, ev.group, ev.id, ev.latitude, ev.longitude, ev.name, ev.physical_address, ev.region, ev.shipping_address, ev.slug, ev.status, ev.tags, ev.tenant, ev.time_zone);
    });
  }
});

// Story: crud:VirtualChassis:nondet:1:1
bthread("crud:VirtualChassis:nondet:1:1", function () {
  let comments = "comments_640";
  let custom_fields = {};
  let description = "description_640";
  let domain = "domain_640";
  let id = 640;
  let master = 640;
  let name = "name_640";
  let tags = "tags_640";
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
  let comments = "comments_641";
  let custom_fields = {};
  let description = "description_641";
  let domain = "domain_641";
  let id = 641;
  let master = 641;
  let name = "name_641";
  let tags = "tags_641";
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
  let comments = "comments_646";
  let custom_fields = {};
  let description = "description_646";
  let domain = "domain_646";
  let id = 646;
  let master = 646;
  let name = "name_646";
  let tags = "tags_646";
  createVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisExists(comments, custom_fields, description, domain, id, master, name, tags);
  tryToAddExistingVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisExists(comments, custom_fields, description, domain, id, master, name, tags);
});

<<<<<<< HEAD
=======
// Story: crud:VirtualChassis:nondet:existing:update
bthread("crud:VirtualChassis:nondet:existing:update", function () {
  let ev = waitForAnyVirtualChassisAdded();
  let args = Object.values(ev);
  block(matchDeletedVirtualChassis.apply(null, args), function () {
    verifyVirtualChassisExists.apply(null, args);
    updateVirtualChassis.apply(null, args);
    verifyVirtualChassisExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:VirtualChassis:add
bthread("monitor:VirtualChassis:add", function () {
  while (true) {
    let ev = waitForAnyVirtualChassisAdded();
    block(matchDeletedVirtualChassis(ev.comments, ev.custom_fields, ev.description, ev.domain, ev.id, ev.master, ev.name, ev.tags), function () {
      verifyVirtualChassisExists(ev.comments, ev.custom_fields, ev.description, ev.domain, ev.id, ev.master, ev.name, ev.tags);
    });
  }
});

// Story: monitor:VirtualChassis:deletion
bthread("monitor:VirtualChassis:deletion", function () {
  while (true) {
    let ev = waitForAnyVirtualChassisDeleted();
    block(matchAddedVirtualChassis(ev.comments, ev.custom_fields, ev.description, ev.domain, ev.id, ev.master, ev.name, ev.tags), function () {
      verifyVirtualChassisDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.domain, ev.id, ev.master, ev.name, ev.tags);
    });
  }
});

// Story: crud:VirtualDeviceContext:nondet:1:1
bthread("crud:VirtualDeviceContext:nondet:1:1", function () {
  let comments = "comments_650";
  let custom_fields = {};
  let description = "description_650";
  let device = "device_650";
  let id = 650;
  let identifier = 650;
  let name = "name_650";
  let primary_ip4 = "primary_ip4_650";
  let primary_ip6 = "primary_ip6_650";
  let status = "status_650";
  let tags = "tags_650";
  let tenant = "tenant_650";
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
  let comments = "comments_651";
  let custom_fields = {};
  let description = "description_651";
  let device = "device_651";
  let id = 651;
  let identifier = 651;
  let name = "name_651";
  let primary_ip4 = "primary_ip4_651";
  let primary_ip6 = "primary_ip6_651";
  let status = "status_651";
  let tags = "tags_651";
  let tenant = "tenant_651";
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
  let comments = "comments_656";
  let custom_fields = {};
  let description = "description_656";
  let device = "device_656";
  let id = 656;
  let identifier = 656;
  let name = "name_656";
  let primary_ip4 = "primary_ip4_656";
  let primary_ip6 = "primary_ip6_656";
  let status = "status_656";
  let tags = "tags_656";
  let tenant = "tenant_656";
  createVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextExists(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  tryToAddExistingVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextExists(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
});

<<<<<<< HEAD
=======
// Story: crud:VirtualDeviceContext:nondet:existing:update
bthread("crud:VirtualDeviceContext:nondet:existing:update", function () {
  let ev = waitForAnyVirtualDeviceContextAdded();
  let args = Object.values(ev);
  block(matchDeletedVirtualDeviceContext.apply(null, args), function () {
    verifyVirtualDeviceContextExists.apply(null, args);
    updateVirtualDeviceContext.apply(null, args);
    verifyVirtualDeviceContextExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:VirtualDeviceContext:add
bthread("monitor:VirtualDeviceContext:add", function () {
  while (true) {
    let ev = waitForAnyVirtualDeviceContextAdded();
    block(matchDeletedVirtualDeviceContext(ev.comments, ev.custom_fields, ev.description, ev.device, ev.id, ev.identifier, ev.name, ev.primary_ip4, ev.primary_ip6, ev.status, ev.tags, ev.tenant), function () {
      verifyVirtualDeviceContextExists(ev.comments, ev.custom_fields, ev.description, ev.device, ev.id, ev.identifier, ev.name, ev.primary_ip4, ev.primary_ip6, ev.status, ev.tags, ev.tenant);
    });
  }
});

// Story: monitor:VirtualDeviceContext:deletion
bthread("monitor:VirtualDeviceContext:deletion", function () {
  while (true) {
    let ev = waitForAnyVirtualDeviceContextDeleted();
    block(matchAddedVirtualDeviceContext(ev.comments, ev.custom_fields, ev.description, ev.device, ev.id, ev.identifier, ev.name, ev.primary_ip4, ev.primary_ip6, ev.status, ev.tags, ev.tenant), function () {
      verifyVirtualDeviceContextDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.device, ev.id, ev.identifier, ev.name, ev.primary_ip4, ev.primary_ip6, ev.status, ev.tags, ev.tenant);
    });
  }
});

// Story: crud:Bookmark:nondet:1:1
bthread("crud:Bookmark:nondet:1:1", function () {
  let id = 660;
  let object_id = 660;
  let object_type = "object_type_660";
  let user = "user_660";
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
  let id = 661;
  let object_id = 661;
  let object_type = "object_type_661";
  let user = "user_661";
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
  let id = 666;
  let object_id = 666;
  let object_type = "object_type_666";
  let user = "user_666";
  createBookmark(id, object_id, object_type, user);
  verifyBookmarkExists(id, object_id, object_type, user);
  tryToAddExistingBookmark(id, object_id, object_type, user);
  verifyBookmarkExists(id, object_id, object_type, user);
});

<<<<<<< HEAD
=======
// Story: crud:Bookmark:nondet:existing:update
bthread("crud:Bookmark:nondet:existing:update", function () {
  let ev = waitForAnyBookmarkAdded();
  let args = Object.values(ev);
  block(matchDeletedBookmark.apply(null, args), function () {
    verifyBookmarkExists.apply(null, args);
    updateBookmark.apply(null, args);
    verifyBookmarkExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Bookmark:add
bthread("monitor:Bookmark:add", function () {
  while (true) {
    let ev = waitForAnyBookmarkAdded();
    block(matchDeletedBookmark(ev.id, ev.object_id, ev.object_type, ev.user), function () {
      verifyBookmarkExists(ev.id, ev.object_id, ev.object_type, ev.user);
    });
  }
});

// Story: monitor:Bookmark:deletion
bthread("monitor:Bookmark:deletion", function () {
  while (true) {
    let ev = waitForAnyBookmarkDeleted();
    block(matchAddedBookmark(ev.id, ev.object_id, ev.object_type, ev.user), function () {
      verifyBookmarkDoesNotExist(ev.id, ev.object_id, ev.object_type, ev.user);
    });
  }
});

// Story: crud:ConfigContextProfile:nondet:1:1
bthread("crud:ConfigContextProfile:nondet:1:1", function () {
  let comments = "comments_670";
  let data_source = "data_source_670";
  let description = "description_670";
  let id = 670;
  let name = "name_670";
  let schema = "schema_670";
  let tags = "tags_670";
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
  let comments = "comments_671";
  let data_source = "data_source_671";
  let description = "description_671";
  let id = 671;
  let name = "name_671";
  let schema = "schema_671";
  let tags = "tags_671";
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
  let comments = "comments_676";
  let data_source = "data_source_676";
  let description = "description_676";
  let id = 676;
  let name = "name_676";
  let schema = "schema_676";
  let tags = "tags_676";
  createConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileExists(comments, data_source, description, id, name, schema, tags);
  tryToAddExistingConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileExists(comments, data_source, description, id, name, schema, tags);
});

<<<<<<< HEAD
=======
// Story: crud:ConfigContextProfile:nondet:existing:update
bthread("crud:ConfigContextProfile:nondet:existing:update", function () {
  let ev = waitForAnyConfigContextProfileAdded();
  let args = Object.values(ev);
  block(matchDeletedConfigContextProfile.apply(null, args), function () {
    verifyConfigContextProfileExists.apply(null, args);
    updateConfigContextProfile.apply(null, args);
    verifyConfigContextProfileExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ConfigContextProfile:add
bthread("monitor:ConfigContextProfile:add", function () {
  while (true) {
    let ev = waitForAnyConfigContextProfileAdded();
    block(matchDeletedConfigContextProfile(ev.comments, ev.data_source, ev.description, ev.id, ev.name, ev.schema, ev.tags), function () {
      verifyConfigContextProfileExists(ev.comments, ev.data_source, ev.description, ev.id, ev.name, ev.schema, ev.tags);
    });
  }
});

// Story: monitor:ConfigContextProfile:deletion
bthread("monitor:ConfigContextProfile:deletion", function () {
  while (true) {
    let ev = waitForAnyConfigContextProfileDeleted();
    block(matchAddedConfigContextProfile(ev.comments, ev.data_source, ev.description, ev.id, ev.name, ev.schema, ev.tags), function () {
      verifyConfigContextProfileDoesNotExist(ev.comments, ev.data_source, ev.description, ev.id, ev.name, ev.schema, ev.tags);
    });
  }
});

// Story: crud:ConfigContext:nondet:1:1
bthread("crud:ConfigContext:nondet:1:1", function () {
  let cluster_groups = "cluster_groups_680";
  let cluster_types = "cluster_types_680";
  let clusters = "clusters_680";
  let data = "data_680";
  let data_source = "data_source_680";
  let description = "description_680";
  let device_types = "device_types_680";
  let id = 680;
  let is_active = true;
  let locations = "locations_680";
  let name = "name_680";
  let platforms = "platforms_680";
  let profile = "profile_680";
  let regions = "regions_680";
  let roles = "roles_680";
  let site_groups = "site_groups_680";
  let sites = "sites_680";
  let tags = "tags_680";
  let tenant_groups = "tenant_groups_680";
  let tenants = "tenants_680";
  let weight = 680;
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
  let cluster_groups = "cluster_groups_681";
  let cluster_types = "cluster_types_681";
  let clusters = "clusters_681";
  let data = "data_681";
  let data_source = "data_source_681";
  let description = "description_681";
  let device_types = "device_types_681";
  let id = 681;
  let is_active = true;
  let locations = "locations_681";
  let name = "name_681";
  let platforms = "platforms_681";
  let profile = "profile_681";
  let regions = "regions_681";
  let roles = "roles_681";
  let site_groups = "site_groups_681";
  let sites = "sites_681";
  let tags = "tags_681";
  let tenant_groups = "tenant_groups_681";
  let tenants = "tenants_681";
  let weight = 681;
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
  let cluster_groups = "cluster_groups_686";
  let cluster_types = "cluster_types_686";
  let clusters = "clusters_686";
  let data = "data_686";
  let data_source = "data_source_686";
  let description = "description_686";
  let device_types = "device_types_686";
  let id = 686;
  let is_active = true;
  let locations = "locations_686";
  let name = "name_686";
  let platforms = "platforms_686";
  let profile = "profile_686";
  let regions = "regions_686";
  let roles = "roles_686";
  let site_groups = "site_groups_686";
  let sites = "sites_686";
  let tags = "tags_686";
  let tenant_groups = "tenant_groups_686";
  let tenants = "tenants_686";
  let weight = 686;
  createConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextExists(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  tryToAddExistingConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextExists(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
});

<<<<<<< HEAD
=======
// Story: crud:ConfigContext:nondet:existing:update
bthread("crud:ConfigContext:nondet:existing:update", function () {
  let ev = waitForAnyConfigContextAdded();
  let args = Object.values(ev);
  block(matchDeletedConfigContext.apply(null, args), function () {
    verifyConfigContextExists.apply(null, args);
    updateConfigContext.apply(null, args);
    verifyConfigContextExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ConfigContext:add
bthread("monitor:ConfigContext:add", function () {
  while (true) {
    let ev = waitForAnyConfigContextAdded();
    block(matchDeletedConfigContext(ev.cluster_groups, ev.cluster_types, ev.clusters, ev.data, ev.data_source, ev.description, ev.device_types, ev.id, ev.is_active, ev.locations, ev.name, ev.platforms, ev.profile, ev.regions, ev.roles, ev.site_groups, ev.sites, ev.tags, ev.tenant_groups, ev.tenants, ev.weight), function () {
      verifyConfigContextExists(ev.cluster_groups, ev.cluster_types, ev.clusters, ev.data, ev.data_source, ev.description, ev.device_types, ev.id, ev.is_active, ev.locations, ev.name, ev.platforms, ev.profile, ev.regions, ev.roles, ev.site_groups, ev.sites, ev.tags, ev.tenant_groups, ev.tenants, ev.weight);
    });
  }
});

// Story: monitor:ConfigContext:deletion
bthread("monitor:ConfigContext:deletion", function () {
  while (true) {
    let ev = waitForAnyConfigContextDeleted();
    block(matchAddedConfigContext(ev.cluster_groups, ev.cluster_types, ev.clusters, ev.data, ev.data_source, ev.description, ev.device_types, ev.id, ev.is_active, ev.locations, ev.name, ev.platforms, ev.profile, ev.regions, ev.roles, ev.site_groups, ev.sites, ev.tags, ev.tenant_groups, ev.tenants, ev.weight), function () {
      verifyConfigContextDoesNotExist(ev.cluster_groups, ev.cluster_types, ev.clusters, ev.data, ev.data_source, ev.description, ev.device_types, ev.id, ev.is_active, ev.locations, ev.name, ev.platforms, ev.profile, ev.regions, ev.roles, ev.site_groups, ev.sites, ev.tags, ev.tenant_groups, ev.tenants, ev.weight);
    });
  }
});

// Story: crud:ConfigTemplate:nondet:1:1
bthread("crud:ConfigTemplate:nondet:1:1", function () {
<<<<<<< HEAD
  let as_attachment = true;
  let data_source = "data_source_690";
  let description = "description_690";
  let environment_params = "environment_params_690";
  let file_extension = "file_extension_690";
  let file_name = "file_name_690";
  let format = "format_690";
  let id = 690;
  let mime_type = "mime_type_690";
  let name = "name_690";
  let tags = "tags_690";
  let template_code = "template_code_690";
=======
  let as_attachment = "as_attachment_680";
  let data_source = "data_source_680";
  let description = "description_680";
  let environment_params = "environment_params_680";
  let file_extension = "file_extension_680";
  let file_name = "file_name_680";
  let format = "format_680";
  let id = 680;
  let mime_type = "mime_type_680";
  let name = "name_680";
  let tags = "tags_680";
  let template_code = "template_code_680";
>>>>>>> 1302d9a (Fix emitter bugs)
  createConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  waitForConfigTemplateAdded(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  tryToAddExistingConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  verifyConfigTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  updateConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  deleteConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  tryToDeleteANonExistingConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  verifyConfigTemplateDoesNotExist(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
});

// Story: crud:ConfigTemplate:nondet:1:2
bthread("crud:ConfigTemplate:nondet:1:2", function () {
<<<<<<< HEAD
  let as_attachment = true;
  let data_source = "data_source_691";
  let description = "description_691";
  let environment_params = "environment_params_691";
  let file_extension = "file_extension_691";
  let file_name = "file_name_691";
  let format = "format_691";
  let id = 691;
  let mime_type = "mime_type_691";
  let name = "name_691";
  let tags = "tags_691";
  let template_code = "template_code_691";
=======
  let as_attachment = "as_attachment_681";
  let data_source = "data_source_681";
  let description = "description_681";
  let environment_params = "environment_params_681";
  let file_extension = "file_extension_681";
  let file_name = "file_name_681";
  let format = "format_681";
  let id = 681;
  let mime_type = "mime_type_681";
  let name = "name_681";
  let tags = "tags_681";
  let template_code = "template_code_681";
>>>>>>> 1302d9a (Fix emitter bugs)
  createConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  tryToAddExistingConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  updateConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  verifyConfigTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  deleteConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  tryToDeleteANonExistingConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  verifyConfigTemplateDoesNotExist(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
});

// Story: crud:ConfigTemplate:nondet:negative:dup-add
bthread("crud:ConfigTemplate:nondet:negative:dup-add", function () {
<<<<<<< HEAD
  let as_attachment = true;
  let data_source = "data_source_696";
  let description = "description_696";
  let environment_params = "environment_params_696";
  let file_extension = "file_extension_696";
  let file_name = "file_name_696";
  let format = "format_696";
  let id = 696;
  let mime_type = "mime_type_696";
  let name = "name_696";
  let tags = "tags_696";
  let template_code = "template_code_696";
=======
  let as_attachment = "as_attachment_686";
  let data_source = "data_source_686";
  let description = "description_686";
  let environment_params = "environment_params_686";
  let file_extension = "file_extension_686";
  let file_name = "file_name_686";
  let format = "format_686";
  let id = 686;
  let mime_type = "mime_type_686";
  let name = "name_686";
  let tags = "tags_686";
  let template_code = "template_code_686";
>>>>>>> 1302d9a (Fix emitter bugs)
  createConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  verifyConfigTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  tryToAddExistingConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  verifyConfigTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
});

<<<<<<< HEAD
=======
// Story: crud:ConfigTemplate:nondet:existing:update
bthread("crud:ConfigTemplate:nondet:existing:update", function () {
  let ev = waitForAnyConfigTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedConfigTemplate.apply(null, args), function () {
    verifyConfigTemplateExists.apply(null, args);
    updateConfigTemplate.apply(null, args);
    verifyConfigTemplateExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ConfigTemplate:add
bthread("monitor:ConfigTemplate:add", function () {
  while (true) {
    let ev = waitForAnyConfigTemplateAdded();
    block(matchDeletedConfigTemplate(ev.as_attachment, ev.data_source, ev.description, ev.environment_params, ev.file_extension, ev.file_name, ev.format, ev.id, ev.mime_type, ev.name, ev.tags, ev.template_code), function () {
      verifyConfigTemplateExists(ev.as_attachment, ev.data_source, ev.description, ev.environment_params, ev.file_extension, ev.file_name, ev.format, ev.id, ev.mime_type, ev.name, ev.tags, ev.template_code);
    });
  }
});

// Story: monitor:ConfigTemplate:deletion
bthread("monitor:ConfigTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyConfigTemplateDeleted();
    block(matchAddedConfigTemplate(ev.as_attachment, ev.data_source, ev.description, ev.environment_params, ev.file_extension, ev.file_name, ev.format, ev.id, ev.mime_type, ev.name, ev.tags, ev.template_code), function () {
      verifyConfigTemplateDoesNotExist(ev.as_attachment, ev.data_source, ev.description, ev.environment_params, ev.file_extension, ev.file_name, ev.format, ev.id, ev.mime_type, ev.name, ev.tags, ev.template_code);
    });
  }
});

// Story: crud:CustomFieldChoiceSet:nondet:1:1
bthread("crud:CustomFieldChoiceSet:nondet:1:1", function () {
  let base_choices = "base_choices_700";
  let description = "description_700";
  let extra_choices = "extra_choices_700";
  let id = 700;
  let name = "name_700";
  let order_alphabetically = true;
  createCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  waitForCustomFieldChoiceSetAdded(base_choices, description, extra_choices, id, name, order_alphabetically);
  tryToAddExistingCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  verifyCustomFieldChoiceSetExists(base_choices, description, extra_choices, id, name, order_alphabetically);
  updateCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  deleteCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  tryToDeleteANonExistingCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  verifyCustomFieldChoiceSetDoesNotExist(base_choices, description, extra_choices, id, name, order_alphabetically);
});

// Story: crud:CustomFieldChoiceSet:nondet:1:2
bthread("crud:CustomFieldChoiceSet:nondet:1:2", function () {
  let base_choices = "base_choices_701";
  let description = "description_701";
  let extra_choices = "extra_choices_701";
  let id = 701;
  let name = "name_701";
  let order_alphabetically = true;
  createCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  tryToAddExistingCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  updateCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  verifyCustomFieldChoiceSetExists(base_choices, description, extra_choices, id, name, order_alphabetically);
  deleteCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  tryToDeleteANonExistingCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  verifyCustomFieldChoiceSetDoesNotExist(base_choices, description, extra_choices, id, name, order_alphabetically);
});

// Story: crud:CustomFieldChoiceSet:nondet:negative:dup-add
bthread("crud:CustomFieldChoiceSet:nondet:negative:dup-add", function () {
  let base_choices = "base_choices_706";
  let description = "description_706";
  let extra_choices = "extra_choices_706";
  let id = 706;
  let name = "name_706";
  let order_alphabetically = true;
  createCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  verifyCustomFieldChoiceSetExists(base_choices, description, extra_choices, id, name, order_alphabetically);
  tryToAddExistingCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  verifyCustomFieldChoiceSetExists(base_choices, description, extra_choices, id, name, order_alphabetically);
});

<<<<<<< HEAD
=======
// Story: crud:CustomFieldChoiceSet:nondet:existing:update
bthread("crud:CustomFieldChoiceSet:nondet:existing:update", function () {
  let ev = waitForAnyCustomFieldChoiceSetAdded();
  let args = Object.values(ev);
  block(matchDeletedCustomFieldChoiceSet.apply(null, args), function () {
    verifyCustomFieldChoiceSetExists.apply(null, args);
    updateCustomFieldChoiceSet.apply(null, args);
    verifyCustomFieldChoiceSetExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:CustomFieldChoiceSet:add
bthread("monitor:CustomFieldChoiceSet:add", function () {
  while (true) {
    let ev = waitForAnyCustomFieldChoiceSetAdded();
    block(matchDeletedCustomFieldChoiceSet(ev.base_choices, ev.description, ev.extra_choices, ev.id, ev.name, ev.order_alphabetically), function () {
      verifyCustomFieldChoiceSetExists(ev.base_choices, ev.description, ev.extra_choices, ev.id, ev.name, ev.order_alphabetically);
    });
  }
});

// Story: monitor:CustomFieldChoiceSet:deletion
bthread("monitor:CustomFieldChoiceSet:deletion", function () {
  while (true) {
    let ev = waitForAnyCustomFieldChoiceSetDeleted();
    block(matchAddedCustomFieldChoiceSet(ev.base_choices, ev.description, ev.extra_choices, ev.id, ev.name, ev.order_alphabetically), function () {
      verifyCustomFieldChoiceSetDoesNotExist(ev.base_choices, ev.description, ev.extra_choices, ev.id, ev.name, ev.order_alphabetically);
    });
  }
});

// Story: crud:CustomField:nondet:1:1
bthread("crud:CustomField:nondet:1:1", function () {
  let choice_set = "choice_set_710";
  let comments = "comments_710";
  let _default = "default_710";
  let description = "description_710";
  let filter_logic = "filter_logic_710";
  let group_name = "group_name_710";
  let id = 710;
  let is_cloneable = true;
  let label = "label_710";
  let name = "name_710";
  let object_types = "object_types_710";
  let related_object_filter = "related_object_filter_710";
  let related_object_type = "related_object_type_710";
  let required = true;
  let search_weight = 710;
  let type = "type_710";
  let ui_editable = "ui_editable_710";
  let ui_visible = "ui_visible_710";
  let unique = true;
  let validation_maximum = 710;
  let validation_minimum = 710;
  let validation_regex = "validation_regex_710";
  let weight = 710;
  createCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  waitForCustomFieldAdded(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  updateCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  deleteCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToDeleteANonExistingCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldDoesNotExist(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomField:nondet:1:2
bthread("crud:CustomField:nondet:1:2", function () {
  let choice_set = "choice_set_711";
  let comments = "comments_711";
  let _default = "default_711";
  let description = "description_711";
  let filter_logic = "filter_logic_711";
  let group_name = "group_name_711";
  let id = 711;
  let is_cloneable = true;
  let label = "label_711";
  let name = "name_711";
  let object_types = "object_types_711";
  let related_object_filter = "related_object_filter_711";
  let related_object_type = "related_object_type_711";
  let required = true;
  let search_weight = 711;
  let type = "type_711";
  let ui_editable = "ui_editable_711";
  let ui_visible = "ui_visible_711";
  let unique = true;
  let validation_maximum = 711;
  let validation_minimum = 711;
  let validation_regex = "validation_regex_711";
  let weight = 711;
  createCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  updateCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  deleteCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToDeleteANonExistingCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldDoesNotExist(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomField:nondet:negative:dup-add
bthread("crud:CustomField:nondet:negative:dup-add", function () {
  let choice_set = "choice_set_716";
  let comments = "comments_716";
  let _default = "default_716";
  let description = "description_716";
  let filter_logic = "filter_logic_716";
  let group_name = "group_name_716";
  let id = 716;
  let is_cloneable = true;
  let label = "label_716";
  let name = "name_716";
  let object_types = "object_types_716";
  let related_object_filter = "related_object_filter_716";
  let related_object_type = "related_object_type_716";
  let required = true;
  let search_weight = 716;
  let type = "type_716";
  let ui_editable = "ui_editable_716";
  let ui_visible = "ui_visible_716";
  let unique = true;
  let validation_maximum = 716;
  let validation_minimum = 716;
  let validation_regex = "validation_regex_716";
  let weight = 716;
  createCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomField(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, comments, _default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

<<<<<<< HEAD
=======
// Story: crud:CustomField:nondet:existing:update
bthread("crud:CustomField:nondet:existing:update", function () {
  let ev = waitForAnyCustomFieldAdded();
  let args = Object.values(ev);
  block(matchDeletedCustomField.apply(null, args), function () {
    verifyCustomFieldExists.apply(null, args);
    updateCustomField.apply(null, args);
    verifyCustomFieldExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:CustomField:add
bthread("monitor:CustomField:add", function () {
  while (true) {
    let ev = waitForAnyCustomFieldAdded();
    block(matchDeletedCustomField(ev.choice_set, ev.comments, ev._default, ev.description, ev.filter_logic, ev.group_name, ev.id, ev.is_cloneable, ev.label, ev.name, ev.object_types, ev.related_object_filter, ev.related_object_type, ev.required, ev.search_weight, ev.type, ev.ui_editable, ev.ui_visible, ev.unique, ev.validation_maximum, ev.validation_minimum, ev.validation_regex, ev.weight), function () {
      verifyCustomFieldExists(ev.choice_set, ev.comments, ev._default, ev.description, ev.filter_logic, ev.group_name, ev.id, ev.is_cloneable, ev.label, ev.name, ev.object_types, ev.related_object_filter, ev.related_object_type, ev.required, ev.search_weight, ev.type, ev.ui_editable, ev.ui_visible, ev.unique, ev.validation_maximum, ev.validation_minimum, ev.validation_regex, ev.weight);
    });
  }
});

// Story: monitor:CustomField:deletion
bthread("monitor:CustomField:deletion", function () {
  while (true) {
    let ev = waitForAnyCustomFieldDeleted();
    block(matchAddedCustomField(ev.choice_set, ev.comments, ev._default, ev.description, ev.filter_logic, ev.group_name, ev.id, ev.is_cloneable, ev.label, ev.name, ev.object_types, ev.related_object_filter, ev.related_object_type, ev.required, ev.search_weight, ev.type, ev.ui_editable, ev.ui_visible, ev.unique, ev.validation_maximum, ev.validation_minimum, ev.validation_regex, ev.weight), function () {
      verifyCustomFieldDoesNotExist(ev.choice_set, ev.comments, ev._default, ev.description, ev.filter_logic, ev.group_name, ev.id, ev.is_cloneable, ev.label, ev.name, ev.object_types, ev.related_object_filter, ev.related_object_type, ev.required, ev.search_weight, ev.type, ev.ui_editable, ev.ui_visible, ev.unique, ev.validation_maximum, ev.validation_minimum, ev.validation_regex, ev.weight);
    });
  }
});

// Story: crud:CustomLink:nondet:1:1
bthread("crud:CustomLink:nondet:1:1", function () {
  let button_class = "button_class_720";
  let enabled = true;
  let group_name = "group_name_720";
  let id = 720;
  let link_text = "link_text_720";
  let link_url = "link_url_720";
  let name = "name_720";
  let new_window = true;
  let object_types = "object_types_720";
  let weight = 720;
  createCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  waitForCustomLinkAdded(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToAddExistingCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkExists(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  updateCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  deleteCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToDeleteANonExistingCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkDoesNotExist(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
});

// Story: crud:CustomLink:nondet:1:2
bthread("crud:CustomLink:nondet:1:2", function () {
  let button_class = "button_class_721";
  let enabled = true;
  let group_name = "group_name_721";
  let id = 721;
  let link_text = "link_text_721";
  let link_url = "link_url_721";
  let name = "name_721";
  let new_window = true;
  let object_types = "object_types_721";
  let weight = 721;
  createCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToAddExistingCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  updateCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkExists(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  deleteCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToDeleteANonExistingCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkDoesNotExist(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
});

// Story: crud:CustomLink:nondet:negative:dup-add
bthread("crud:CustomLink:nondet:negative:dup-add", function () {
  let button_class = "button_class_726";
  let enabled = true;
  let group_name = "group_name_726";
  let id = 726;
  let link_text = "link_text_726";
  let link_url = "link_url_726";
  let name = "name_726";
  let new_window = true;
  let object_types = "object_types_726";
  let weight = 726;
  createCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkExists(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToAddExistingCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkExists(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
});

<<<<<<< HEAD
=======
// Story: crud:CustomLink:nondet:existing:update
bthread("crud:CustomLink:nondet:existing:update", function () {
  let ev = waitForAnyCustomLinkAdded();
  let args = Object.values(ev);
  block(matchDeletedCustomLink.apply(null, args), function () {
    verifyCustomLinkExists.apply(null, args);
    updateCustomLink.apply(null, args);
    verifyCustomLinkExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:CustomLink:add
bthread("monitor:CustomLink:add", function () {
  while (true) {
    let ev = waitForAnyCustomLinkAdded();
    block(matchDeletedCustomLink(ev.button_class, ev.enabled, ev.group_name, ev.id, ev.link_text, ev.link_url, ev.name, ev.new_window, ev.object_types, ev.weight), function () {
      verifyCustomLinkExists(ev.button_class, ev.enabled, ev.group_name, ev.id, ev.link_text, ev.link_url, ev.name, ev.new_window, ev.object_types, ev.weight);
    });
  }
});

// Story: monitor:CustomLink:deletion
bthread("monitor:CustomLink:deletion", function () {
  while (true) {
    let ev = waitForAnyCustomLinkDeleted();
    block(matchAddedCustomLink(ev.button_class, ev.enabled, ev.group_name, ev.id, ev.link_text, ev.link_url, ev.name, ev.new_window, ev.object_types, ev.weight), function () {
      verifyCustomLinkDoesNotExist(ev.button_class, ev.enabled, ev.group_name, ev.id, ev.link_text, ev.link_url, ev.name, ev.new_window, ev.object_types, ev.weight);
    });
  }
});

// Story: crud:Dashboard:read_only
bthread("crud:Dashboard:read_only", function () {

  verifyDashboardExists();
});

// Story: crud:EventRule:nondet:1:1
bthread("crud:EventRule:nondet:1:1", function () {
  let action_object_id = 740;
  let action_object_type = "action_object_type_740";
  let action_type = "action_type_740";
  let conditions = "conditions_740";
  let custom_fields = {};
  let description = "description_740";
  let enabled = true;
  let event_types = "event_types_740";
  let id = 740;
  let name = "name_740";
  let object_types = "object_types_740";
  let tags = "tags_740";
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
  let action_object_id = 741;
  let action_object_type = "action_object_type_741";
  let action_type = "action_type_741";
  let conditions = "conditions_741";
  let custom_fields = {};
  let description = "description_741";
  let enabled = true;
  let event_types = "event_types_741";
  let id = 741;
  let name = "name_741";
  let object_types = "object_types_741";
  let tags = "tags_741";
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
  let action_object_id = 746;
  let action_object_type = "action_object_type_746";
  let action_type = "action_type_746";
  let conditions = "conditions_746";
  let custom_fields = {};
  let description = "description_746";
  let enabled = true;
  let event_types = "event_types_746";
  let id = 746;
  let name = "name_746";
  let object_types = "object_types_746";
  let tags = "tags_746";
  createEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleExists(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  tryToAddExistingEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleExists(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
});

<<<<<<< HEAD
=======
// Story: crud:EventRule:nondet:existing:update
bthread("crud:EventRule:nondet:existing:update", function () {
  let ev = waitForAnyEventRuleAdded();
  let args = Object.values(ev);
  block(matchDeletedEventRule.apply(null, args), function () {
    verifyEventRuleExists.apply(null, args);
    updateEventRule.apply(null, args);
    verifyEventRuleExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:EventRule:add
bthread("monitor:EventRule:add", function () {
  while (true) {
    let ev = waitForAnyEventRuleAdded();
    block(matchDeletedEventRule(ev.action_object_id, ev.action_object_type, ev.action_type, ev.conditions, ev.custom_fields, ev.description, ev.enabled, ev.event_types, ev.id, ev.name, ev.object_types, ev.tags), function () {
      verifyEventRuleExists(ev.action_object_id, ev.action_object_type, ev.action_type, ev.conditions, ev.custom_fields, ev.description, ev.enabled, ev.event_types, ev.id, ev.name, ev.object_types, ev.tags);
    });
  }
});

// Story: monitor:EventRule:deletion
bthread("monitor:EventRule:deletion", function () {
  while (true) {
    let ev = waitForAnyEventRuleDeleted();
    block(matchAddedEventRule(ev.action_object_id, ev.action_object_type, ev.action_type, ev.conditions, ev.custom_fields, ev.description, ev.enabled, ev.event_types, ev.id, ev.name, ev.object_types, ev.tags), function () {
      verifyEventRuleDoesNotExist(ev.action_object_id, ev.action_object_type, ev.action_type, ev.conditions, ev.custom_fields, ev.description, ev.enabled, ev.event_types, ev.id, ev.name, ev.object_types, ev.tags);
    });
  }
});

// Story: crud:ExportTemplate:nondet:1:1
bthread("crud:ExportTemplate:nondet:1:1", function () {
  let as_attachment = true;
  let data_source = "data_source_750";
  let description = "description_750";
  let environment_params = "environment_params_750";
  let file_extension = "file_extension_750";
  let file_name = "file_name_750";
  let id = 750;
  let mime_type = "mime_type_750";
  let name = "name_750";
  let object_types = "object_types_750";
  let template_code = "template_code_750";
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
  let as_attachment = true;
  let data_source = "data_source_751";
  let description = "description_751";
  let environment_params = "environment_params_751";
  let file_extension = "file_extension_751";
  let file_name = "file_name_751";
  let id = 751;
  let mime_type = "mime_type_751";
  let name = "name_751";
  let object_types = "object_types_751";
  let template_code = "template_code_751";
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
  let as_attachment = true;
  let data_source = "data_source_756";
  let description = "description_756";
  let environment_params = "environment_params_756";
  let file_extension = "file_extension_756";
  let file_name = "file_name_756";
  let id = 756;
  let mime_type = "mime_type_756";
  let name = "name_756";
  let object_types = "object_types_756";
  let template_code = "template_code_756";
  createExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  tryToAddExistingExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
});

<<<<<<< HEAD
=======
// Story: crud:ExportTemplate:nondet:existing:update
bthread("crud:ExportTemplate:nondet:existing:update", function () {
  let ev = waitForAnyExportTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedExportTemplate.apply(null, args), function () {
    verifyExportTemplateExists.apply(null, args);
    updateExportTemplate.apply(null, args);
    verifyExportTemplateExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ExportTemplate:add
bthread("monitor:ExportTemplate:add", function () {
  while (true) {
    let ev = waitForAnyExportTemplateAdded();
    block(matchDeletedExportTemplate(ev.as_attachment, ev.data_source, ev.description, ev.environment_params, ev.file_extension, ev.file_name, ev.id, ev.mime_type, ev.name, ev.object_types, ev.template_code), function () {
      verifyExportTemplateExists(ev.as_attachment, ev.data_source, ev.description, ev.environment_params, ev.file_extension, ev.file_name, ev.id, ev.mime_type, ev.name, ev.object_types, ev.template_code);
    });
  }
});

// Story: monitor:ExportTemplate:deletion
bthread("monitor:ExportTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyExportTemplateDeleted();
    block(matchAddedExportTemplate(ev.as_attachment, ev.data_source, ev.description, ev.environment_params, ev.file_extension, ev.file_name, ev.id, ev.mime_type, ev.name, ev.object_types, ev.template_code), function () {
      verifyExportTemplateDoesNotExist(ev.as_attachment, ev.data_source, ev.description, ev.environment_params, ev.file_extension, ev.file_name, ev.id, ev.mime_type, ev.name, ev.object_types, ev.template_code);
    });
  }
});

// Story: crud:ImageAttachment:nondet:1:1
bthread("crud:ImageAttachment:nondet:1:1", function () {
  let description = "description_760";
  let id = 760;
  let image = "image_760";
  let name = "name_760";
  let object_id = 760;
  let object_type = "object_type_760";
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
  let description = "description_761";
  let id = 761;
  let image = "image_761";
  let name = "name_761";
  let object_id = 761;
  let object_type = "object_type_761";
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
  let description = "description_766";
  let id = 766;
  let image = "image_766";
  let name = "name_766";
  let object_id = 766;
  let object_type = "object_type_766";
  createImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentExists(description, id, image, name, object_id, object_type);
  tryToAddExistingImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentExists(description, id, image, name, object_id, object_type);
});

<<<<<<< HEAD
=======
// Story: crud:ImageAttachment:nondet:existing:update
bthread("crud:ImageAttachment:nondet:existing:update", function () {
  let ev = waitForAnyImageAttachmentAdded();
  let args = Object.values(ev);
  block(matchDeletedImageAttachment.apply(null, args), function () {
    verifyImageAttachmentExists.apply(null, args);
    updateImageAttachment.apply(null, args);
    verifyImageAttachmentExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ImageAttachment:add
bthread("monitor:ImageAttachment:add", function () {
  while (true) {
    let ev = waitForAnyImageAttachmentAdded();
    block(matchDeletedImageAttachment(ev.description, ev.id, ev.image, ev.name, ev.object_id, ev.object_type), function () {
      verifyImageAttachmentExists(ev.description, ev.id, ev.image, ev.name, ev.object_id, ev.object_type);
    });
  }
});

// Story: monitor:ImageAttachment:deletion
bthread("monitor:ImageAttachment:deletion", function () {
  while (true) {
    let ev = waitForAnyImageAttachmentDeleted();
    block(matchAddedImageAttachment(ev.description, ev.id, ev.image, ev.name, ev.object_id, ev.object_type), function () {
      verifyImageAttachmentDoesNotExist(ev.description, ev.id, ev.image, ev.name, ev.object_id, ev.object_type);
    });
  }
});

// Story: crud:JournalEntry:nondet:1:1
bthread("crud:JournalEntry:nondet:1:1", function () {
  let assigned_object_id = 770;
  let assigned_object_type = "assigned_object_type_770";
  let comments = "comments_770";
  let created_by = 770;
  let custom_fields = {};
  let id = 770;
  let kind = "kind_770";
  let tags = "tags_770";
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
  let assigned_object_id = 771;
  let assigned_object_type = "assigned_object_type_771";
  let comments = "comments_771";
  let created_by = 771;
  let custom_fields = {};
  let id = 771;
  let kind = "kind_771";
  let tags = "tags_771";
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
  let assigned_object_id = 776;
  let assigned_object_type = "assigned_object_type_776";
  let comments = "comments_776";
  let created_by = 776;
  let custom_fields = {};
  let id = 776;
  let kind = "kind_776";
  let tags = "tags_776";
  createJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryExists(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  tryToAddExistingJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryExists(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
});

<<<<<<< HEAD
=======
// Story: crud:JournalEntry:nondet:existing:update
bthread("crud:JournalEntry:nondet:existing:update", function () {
  let ev = waitForAnyJournalEntryAdded();
  let args = Object.values(ev);
  block(matchDeletedJournalEntry.apply(null, args), function () {
    verifyJournalEntryExists.apply(null, args);
    updateJournalEntry.apply(null, args);
    verifyJournalEntryExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:JournalEntry:add
bthread("monitor:JournalEntry:add", function () {
  while (true) {
    let ev = waitForAnyJournalEntryAdded();
    block(matchDeletedJournalEntry(ev.assigned_object_id, ev.assigned_object_type, ev.comments, ev.created_by, ev.custom_fields, ev.id, ev.kind, ev.tags), function () {
      verifyJournalEntryExists(ev.assigned_object_id, ev.assigned_object_type, ev.comments, ev.created_by, ev.custom_fields, ev.id, ev.kind, ev.tags);
    });
  }
});

// Story: monitor:JournalEntry:deletion
bthread("monitor:JournalEntry:deletion", function () {
  while (true) {
    let ev = waitForAnyJournalEntryDeleted();
    block(matchAddedJournalEntry(ev.assigned_object_id, ev.assigned_object_type, ev.comments, ev.created_by, ev.custom_fields, ev.id, ev.kind, ev.tags), function () {
      verifyJournalEntryDoesNotExist(ev.assigned_object_id, ev.assigned_object_type, ev.comments, ev.created_by, ev.custom_fields, ev.id, ev.kind, ev.tags);
    });
  }
});

// Story: crud:NotificationGroup:nondet:1:1
bthread("crud:NotificationGroup:nondet:1:1", function () {
  let description = "description_780";
  let groups = "groups_780";
  let id = 780;
  let name = "name_780";
  let users = "users_780";
  createNotificationGroup(description, groups, id, name, users);
  waitForNotificationGroupAdded(description, groups, id, name, users);
  tryToAddExistingNotificationGroup(description, groups, id, name, users);
  verifyNotificationGroupExists(description, groups, id, name, users);
  updateNotificationGroup(description, groups, id, name, users);
  deleteNotificationGroup(description, groups, id, name, users);
  tryToDeleteANonExistingNotificationGroup(description, groups, id, name, users);
  verifyNotificationGroupDoesNotExist(description, groups, id, name, users);
});

// Story: crud:NotificationGroup:nondet:1:2
bthread("crud:NotificationGroup:nondet:1:2", function () {
  let description = "description_781";
  let groups = "groups_781";
  let id = 781;
  let name = "name_781";
  let users = "users_781";
  createNotificationGroup(description, groups, id, name, users);
  tryToAddExistingNotificationGroup(description, groups, id, name, users);
  updateNotificationGroup(description, groups, id, name, users);
  verifyNotificationGroupExists(description, groups, id, name, users);
  deleteNotificationGroup(description, groups, id, name, users);
  tryToDeleteANonExistingNotificationGroup(description, groups, id, name, users);
  verifyNotificationGroupDoesNotExist(description, groups, id, name, users);
});

// Story: crud:NotificationGroup:nondet:negative:dup-add
bthread("crud:NotificationGroup:nondet:negative:dup-add", function () {
  let description = "description_786";
  let groups = "groups_786";
  let id = 786;
  let name = "name_786";
  let users = "users_786";
  createNotificationGroup(description, groups, id, name, users);
  verifyNotificationGroupExists(description, groups, id, name, users);
  tryToAddExistingNotificationGroup(description, groups, id, name, users);
  verifyNotificationGroupExists(description, groups, id, name, users);
});

<<<<<<< HEAD
=======
// Story: crud:NotificationGroup:nondet:existing:update
bthread("crud:NotificationGroup:nondet:existing:update", function () {
  let ev = waitForAnyNotificationGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedNotificationGroup.apply(null, args), function () {
    verifyNotificationGroupExists.apply(null, args);
    updateNotificationGroup.apply(null, args);
    verifyNotificationGroupExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:NotificationGroup:add
bthread("monitor:NotificationGroup:add", function () {
  while (true) {
    let ev = waitForAnyNotificationGroupAdded();
    block(matchDeletedNotificationGroup(ev.description, ev.groups, ev.id, ev.name, ev.users), function () {
      verifyNotificationGroupExists(ev.description, ev.groups, ev.id, ev.name, ev.users);
    });
  }
});

// Story: monitor:NotificationGroup:deletion
bthread("monitor:NotificationGroup:deletion", function () {
  while (true) {
    let ev = waitForAnyNotificationGroupDeleted();
    block(matchAddedNotificationGroup(ev.description, ev.groups, ev.id, ev.name, ev.users), function () {
      verifyNotificationGroupDoesNotExist(ev.description, ev.groups, ev.id, ev.name, ev.users);
    });
  }
});

// Story: crud:Notification:nondet:1:1
bthread("crud:Notification:nondet:1:1", function () {
  let event_type = "event_type_790";
  let id = 790;
  let object_id = 790;
  let object_type = "object_type_790";
  let read = "read_790";
  let user = "user_790";
  createNotification(event_type, id, object_id, object_type, read, user);
  waitForNotificationAdded(event_type, id, object_id, object_type, read, user);
  tryToAddExistingNotification(event_type, id, object_id, object_type, read, user);
  verifyNotificationExists(event_type, id, object_id, object_type, read, user);
  updateNotification(event_type, id, object_id, object_type, read, user);
  deleteNotification(event_type, id, object_id, object_type, read, user);
  tryToDeleteANonExistingNotification(event_type, id, object_id, object_type, read, user);
  verifyNotificationDoesNotExist(event_type, id, object_id, object_type, read, user);
});

// Story: crud:Notification:nondet:1:2
bthread("crud:Notification:nondet:1:2", function () {
  let event_type = "event_type_791";
  let id = 791;
  let object_id = 791;
  let object_type = "object_type_791";
  let read = "read_791";
  let user = "user_791";
  createNotification(event_type, id, object_id, object_type, read, user);
  tryToAddExistingNotification(event_type, id, object_id, object_type, read, user);
  updateNotification(event_type, id, object_id, object_type, read, user);
  verifyNotificationExists(event_type, id, object_id, object_type, read, user);
  deleteNotification(event_type, id, object_id, object_type, read, user);
  tryToDeleteANonExistingNotification(event_type, id, object_id, object_type, read, user);
  verifyNotificationDoesNotExist(event_type, id, object_id, object_type, read, user);
});

// Story: crud:Notification:nondet:negative:dup-add
bthread("crud:Notification:nondet:negative:dup-add", function () {
  let event_type = "event_type_796";
  let id = 796;
  let object_id = 796;
  let object_type = "object_type_796";
  let read = "read_796";
  let user = "user_796";
  createNotification(event_type, id, object_id, object_type, read, user);
  verifyNotificationExists(event_type, id, object_id, object_type, read, user);
  tryToAddExistingNotification(event_type, id, object_id, object_type, read, user);
  verifyNotificationExists(event_type, id, object_id, object_type, read, user);
});

<<<<<<< HEAD
=======
// Story: crud:Notification:nondet:existing:update
bthread("crud:Notification:nondet:existing:update", function () {
  let ev = waitForAnyNotificationAdded();
  let args = Object.values(ev);
  block(matchDeletedNotification.apply(null, args), function () {
    verifyNotificationExists.apply(null, args);
    updateNotification.apply(null, args);
    verifyNotificationExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Notification:add
bthread("monitor:Notification:add", function () {
  while (true) {
    let ev = waitForAnyNotificationAdded();
    block(matchDeletedNotification(ev.event_type, ev.id, ev.object_id, ev.object_type, ev.read, ev.user), function () {
      verifyNotificationExists(ev.event_type, ev.id, ev.object_id, ev.object_type, ev.read, ev.user);
    });
  }
});

// Story: monitor:Notification:deletion
bthread("monitor:Notification:deletion", function () {
  while (true) {
    let ev = waitForAnyNotificationDeleted();
    block(matchAddedNotification(ev.event_type, ev.id, ev.object_id, ev.object_type, ev.read, ev.user), function () {
      verifyNotificationDoesNotExist(ev.event_type, ev.id, ev.object_id, ev.object_type, ev.read, ev.user);
    });
  }
});

// Story: crud:ObjectType:read_only
bthread("crud:ObjectType:read_only", function () {
  let id = 800;
  verifyObjectTypeExists(id);
});

// Story: crud:SavedFilter:nondet:1:1
bthread("crud:SavedFilter:nondet:1:1", function () {
  let description = "description_810";
  let enabled = true;
  let id = 810;
  let name = "name_810";
  let object_types = "object_types_810";
  let parameters = "parameters_810";
  let shared = true;
  let slug = "slug_810";
  let user = 810;
  let weight = 810;
  createSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  waitForSavedFilterAdded(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  tryToAddExistingSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  updateSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  deleteSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  tryToDeleteANonExistingSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterDoesNotExist(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
});

// Story: crud:SavedFilter:nondet:1:2
bthread("crud:SavedFilter:nondet:1:2", function () {
  let description = "description_811";
  let enabled = true;
  let id = 811;
  let name = "name_811";
  let object_types = "object_types_811";
  let parameters = "parameters_811";
  let shared = true;
  let slug = "slug_811";
  let user = 811;
  let weight = 811;
  createSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  tryToAddExistingSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  updateSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  deleteSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  tryToDeleteANonExistingSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterDoesNotExist(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
});

// Story: crud:SavedFilter:nondet:negative:dup-add
bthread("crud:SavedFilter:nondet:negative:dup-add", function () {
  let description = "description_816";
  let enabled = true;
  let id = 816;
  let name = "name_816";
  let object_types = "object_types_816";
  let parameters = "parameters_816";
  let shared = true;
  let slug = "slug_816";
  let user = 816;
  let weight = 816;
  createSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  tryToAddExistingSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
});

<<<<<<< HEAD
=======
// Story: crud:SavedFilter:nondet:existing:update
bthread("crud:SavedFilter:nondet:existing:update", function () {
  let ev = waitForAnySavedFilterAdded();
  let args = Object.values(ev);
  block(matchDeletedSavedFilter.apply(null, args), function () {
    verifySavedFilterExists.apply(null, args);
    updateSavedFilter.apply(null, args);
    verifySavedFilterExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:SavedFilter:add
bthread("monitor:SavedFilter:add", function () {
  while (true) {
    let ev = waitForAnySavedFilterAdded();
    block(matchDeletedSavedFilter(ev.description, ev.enabled, ev.id, ev.name, ev.object_types, ev.parameters, ev.shared, ev.slug, ev.user, ev.weight), function () {
      verifySavedFilterExists(ev.description, ev.enabled, ev.id, ev.name, ev.object_types, ev.parameters, ev.shared, ev.slug, ev.user, ev.weight);
    });
  }
});

// Story: monitor:SavedFilter:deletion
bthread("monitor:SavedFilter:deletion", function () {
  while (true) {
    let ev = waitForAnySavedFilterDeleted();
    block(matchAddedSavedFilter(ev.description, ev.enabled, ev.id, ev.name, ev.object_types, ev.parameters, ev.shared, ev.slug, ev.user, ev.weight), function () {
      verifySavedFilterDoesNotExist(ev.description, ev.enabled, ev.id, ev.name, ev.object_types, ev.parameters, ev.shared, ev.slug, ev.user, ev.weight);
    });
  }
});

// Story: crud:Script:nondet:1:1
bthread("crud:Script:nondet:1:1", function () {
<<<<<<< HEAD
  let id = 820;
  createScript(id);
  waitForScriptAdded(id);
  tryToAddExistingScript(id);
  verifyScriptExists(id);
  updateScript(id);
  deleteScript(id);
  tryToDeleteANonExistingScript(id);
  verifyScriptDoesNotExist(id);
=======
  let id = 810;
  let name = "name_810";
  createScript(id, name);
  waitForScriptAdded(id, name);
  tryToAddExistingScript(id, name);
  verifyScriptExists(id, name);
  updateScript(id, name);
  deleteScript(id, name);
  tryToDeleteANonExistingScript(id, name);
  verifyScriptDoesNotExist(id, name);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:Script:nondet:1:2
bthread("crud:Script:nondet:1:2", function () {
<<<<<<< HEAD
  let id = 821;
  createScript(id);
  tryToAddExistingScript(id);
  updateScript(id);
  verifyScriptExists(id);
  deleteScript(id);
  tryToDeleteANonExistingScript(id);
  verifyScriptDoesNotExist(id);
=======
  let id = 811;
  let name = "name_811";
  createScript(id, name);
  tryToAddExistingScript(id, name);
  updateScript(id, name);
  verifyScriptExists(id, name);
  deleteScript(id, name);
  tryToDeleteANonExistingScript(id, name);
  verifyScriptDoesNotExist(id, name);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:Script:nondet:negative:dup-add
bthread("crud:Script:nondet:negative:dup-add", function () {
<<<<<<< HEAD
  let id = 826;
  createScript(id);
  verifyScriptExists(id);
  tryToAddExistingScript(id);
  verifyScriptExists(id);
=======
  let id = 816;
  let name = "name_816";
  createScript(id, name);
  verifyScriptExists(id, name);
  tryToAddExistingScript(id, name);
  verifyScriptExists(id, name);
});

// Story: crud:Script:nondet:existing:update
bthread("crud:Script:nondet:existing:update", function () {
  let ev = waitForAnyScriptAdded();
  let args = Object.values(ev);
  block(matchDeletedScript.apply(null, args), function () {
    verifyScriptExists.apply(null, args);
    updateScript.apply(null, args);
    verifyScriptExists.apply(null, args);
  });
});

// Story: monitor:Script:add
bthread("monitor:Script:add", function () {
  while (true) {
    let ev = waitForAnyScriptAdded();
    block(matchDeletedScript(ev.id, ev.name), function () {
      verifyScriptExists(ev.id, ev.name);
    });
  }
});

// Story: monitor:Script:deletion
bthread("monitor:Script:deletion", function () {
  while (true) {
    let ev = waitForAnyScriptDeleted();
    block(matchAddedScript(ev.id, ev.name), function () {
      verifyScriptDoesNotExist(ev.id, ev.name);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:Script:add
bthread("monitor:Script:add", function () {
  while (true) {
    let ev = waitForAnyScriptAdded();
    block(matchDeletedScript(ev.id), function () {
      verifyScriptExists(ev.id);
    });
  }
});

// Story: monitor:Script:deletion
bthread("monitor:Script:deletion", function () {
  while (true) {
    let ev = waitForAnyScriptDeleted();
    block(matchAddedScript(ev.id), function () {
      verifyScriptDoesNotExist(ev.id);
    });
  }
});

// Story: crud:Subscription:nondet:1:1
bthread("crud:Subscription:nondet:1:1", function () {
  let id = 830;
  let object_id = 830;
  let object_type = "object_type_830";
  let user = "user_830";
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
  let id = 831;
  let object_id = 831;
  let object_type = "object_type_831";
  let user = "user_831";
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
  let id = 836;
  let object_id = 836;
  let object_type = "object_type_836";
  let user = "user_836";
  createSubscription(id, object_id, object_type, user);
  verifySubscriptionExists(id, object_id, object_type, user);
  tryToAddExistingSubscription(id, object_id, object_type, user);
  verifySubscriptionExists(id, object_id, object_type, user);
});

<<<<<<< HEAD
=======
// Story: crud:Subscription:nondet:existing:update
bthread("crud:Subscription:nondet:existing:update", function () {
  let ev = waitForAnySubscriptionAdded();
  let args = Object.values(ev);
  block(matchDeletedSubscription.apply(null, args), function () {
    verifySubscriptionExists.apply(null, args);
    updateSubscription.apply(null, args);
    verifySubscriptionExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Subscription:add
bthread("monitor:Subscription:add", function () {
  while (true) {
    let ev = waitForAnySubscriptionAdded();
    block(matchDeletedSubscription(ev.id, ev.object_id, ev.object_type, ev.user), function () {
      verifySubscriptionExists(ev.id, ev.object_id, ev.object_type, ev.user);
    });
  }
});

// Story: monitor:Subscription:deletion
bthread("monitor:Subscription:deletion", function () {
  while (true) {
    let ev = waitForAnySubscriptionDeleted();
    block(matchAddedSubscription(ev.id, ev.object_id, ev.object_type, ev.user), function () {
      verifySubscriptionDoesNotExist(ev.id, ev.object_id, ev.object_type, ev.user);
    });
  }
});

// Story: crud:TableConfig:nondet:1:1
bthread("crud:TableConfig:nondet:1:1", function () {
  let columns = "columns_840";
  let description = "description_840";
  let enabled = true;
  let id = 840;
  let name = "name_840";
  let object_type = "object_type_840";
  let ordering = "ordering_840";
  let shared = true;
  let table = "table_840";
  let user = 840;
  let weight = 840;
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
  let columns = "columns_841";
  let description = "description_841";
  let enabled = true;
  let id = 841;
  let name = "name_841";
  let object_type = "object_type_841";
  let ordering = "ordering_841";
  let shared = true;
  let table = "table_841";
  let user = 841;
  let weight = 841;
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
  let columns = "columns_846";
  let description = "description_846";
  let enabled = true;
  let id = 846;
  let name = "name_846";
  let object_type = "object_type_846";
  let ordering = "ordering_846";
  let shared = true;
  let table = "table_846";
  let user = 846;
  let weight = 846;
  createTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigExists(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  tryToAddExistingTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigExists(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
});

<<<<<<< HEAD
=======
// Story: crud:TableConfig:nondet:existing:update
bthread("crud:TableConfig:nondet:existing:update", function () {
  let ev = waitForAnyTableConfigAdded();
  let args = Object.values(ev);
  block(matchDeletedTableConfig.apply(null, args), function () {
    verifyTableConfigExists.apply(null, args);
    updateTableConfig.apply(null, args);
    verifyTableConfigExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:TableConfig:add
bthread("monitor:TableConfig:add", function () {
  while (true) {
    let ev = waitForAnyTableConfigAdded();
    block(matchDeletedTableConfig(ev.columns, ev.description, ev.enabled, ev.id, ev.name, ev.object_type, ev.ordering, ev.shared, ev.table, ev.user, ev.weight), function () {
      verifyTableConfigExists(ev.columns, ev.description, ev.enabled, ev.id, ev.name, ev.object_type, ev.ordering, ev.shared, ev.table, ev.user, ev.weight);
    });
  }
});

// Story: monitor:TableConfig:deletion
bthread("monitor:TableConfig:deletion", function () {
  while (true) {
    let ev = waitForAnyTableConfigDeleted();
    block(matchAddedTableConfig(ev.columns, ev.description, ev.enabled, ev.id, ev.name, ev.object_type, ev.ordering, ev.shared, ev.table, ev.user, ev.weight), function () {
      verifyTableConfigDoesNotExist(ev.columns, ev.description, ev.enabled, ev.id, ev.name, ev.object_type, ev.ordering, ev.shared, ev.table, ev.user, ev.weight);
    });
  }
});

// Story: crud:TaggedObject:read_only
bthread("crud:TaggedObject:read_only", function () {
  let id = 850;
  verifyTaggedObjectExists(id);
});

// Story: crud:Tag:nondet:1:1
bthread("crud:Tag:nondet:1:1", function () {
  let color = "color_860";
  let description = "description_860";
  let id = 860;
  let name = "name_860";
  let object_types = "object_types_860";
  let slug = "slug_860";
  let weight = 860;
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
  let color = "color_861";
  let description = "description_861";
  let id = 861;
  let name = "name_861";
  let object_types = "object_types_861";
  let slug = "slug_861";
  let weight = 861;
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
  let color = "color_866";
  let description = "description_866";
  let id = 866;
  let name = "name_866";
  let object_types = "object_types_866";
  let slug = "slug_866";
  let weight = 866;
  createTag(color, description, id, name, object_types, slug, weight);
  verifyTagExists(color, description, id, name, object_types, slug, weight);
  tryToAddExistingTag(color, description, id, name, object_types, slug, weight);
  verifyTagExists(color, description, id, name, object_types, slug, weight);
});

<<<<<<< HEAD
=======
// Story: crud:Tag:nondet:existing:update
bthread("crud:Tag:nondet:existing:update", function () {
  let ev = waitForAnyTagAdded();
  let args = Object.values(ev);
  block(matchDeletedTag.apply(null, args), function () {
    verifyTagExists.apply(null, args);
    updateTag.apply(null, args);
    verifyTagExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Tag:add
bthread("monitor:Tag:add", function () {
  while (true) {
    let ev = waitForAnyTagAdded();
    block(matchDeletedTag(ev.color, ev.description, ev.id, ev.name, ev.object_types, ev.slug, ev.weight), function () {
      verifyTagExists(ev.color, ev.description, ev.id, ev.name, ev.object_types, ev.slug, ev.weight);
    });
  }
});

// Story: monitor:Tag:deletion
bthread("monitor:Tag:deletion", function () {
  while (true) {
    let ev = waitForAnyTagDeleted();
    block(matchAddedTag(ev.color, ev.description, ev.id, ev.name, ev.object_types, ev.slug, ev.weight), function () {
      verifyTagDoesNotExist(ev.color, ev.description, ev.id, ev.name, ev.object_types, ev.slug, ev.weight);
    });
  }
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let additional_headers = "additional_headers_870";
  let body_template = "body_template_870";
  let ca_file_path = "ca_file_path_870";
  let custom_fields = {};
  let description = "description_870";
  let http_content_type = "http_content_type_870";
  let http_method = "http_method_870";
  let id = 870;
  let name = "name_870";
  let payload_url = "payload_url_870";
  let secret = "secret_870";
  let ssl_verification = true;
  let tags = "tags_870";
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
  let additional_headers = "additional_headers_871";
  let body_template = "body_template_871";
  let ca_file_path = "ca_file_path_871";
  let custom_fields = {};
  let description = "description_871";
  let http_content_type = "http_content_type_871";
  let http_method = "http_method_871";
  let id = 871;
  let name = "name_871";
  let payload_url = "payload_url_871";
  let secret = "secret_871";
  let ssl_verification = true;
  let tags = "tags_871";
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
  let additional_headers = "additional_headers_876";
  let body_template = "body_template_876";
  let ca_file_path = "ca_file_path_876";
  let custom_fields = {};
  let description = "description_876";
  let http_content_type = "http_content_type_876";
  let http_method = "http_method_876";
  let id = 876;
  let name = "name_876";
  let payload_url = "payload_url_876";
  let secret = "secret_876";
  let ssl_verification = true;
  let tags = "tags_876";
  createWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookExists(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  tryToAddExistingWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookExists(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
});

<<<<<<< HEAD
=======
// Story: crud:Webhook:nondet:existing:update
bthread("crud:Webhook:nondet:existing:update", function () {
  let ev = waitForAnyWebhookAdded();
  let args = Object.values(ev);
  block(matchDeletedWebhook.apply(null, args), function () {
    verifyWebhookExists.apply(null, args);
    updateWebhook.apply(null, args);
    verifyWebhookExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Webhook:add
bthread("monitor:Webhook:add", function () {
  while (true) {
    let ev = waitForAnyWebhookAdded();
    block(matchDeletedWebhook(ev.additional_headers, ev.body_template, ev.ca_file_path, ev.custom_fields, ev.description, ev.http_content_type, ev.http_method, ev.id, ev.name, ev.payload_url, ev.secret, ev.ssl_verification, ev.tags), function () {
      verifyWebhookExists(ev.additional_headers, ev.body_template, ev.ca_file_path, ev.custom_fields, ev.description, ev.http_content_type, ev.http_method, ev.id, ev.name, ev.payload_url, ev.secret, ev.ssl_verification, ev.tags);
    });
  }
});

// Story: monitor:Webhook:deletion
bthread("monitor:Webhook:deletion", function () {
  while (true) {
    let ev = waitForAnyWebhookDeleted();
    block(matchAddedWebhook(ev.additional_headers, ev.body_template, ev.ca_file_path, ev.custom_fields, ev.description, ev.http_content_type, ev.http_method, ev.id, ev.name, ev.payload_url, ev.secret, ev.ssl_verification, ev.tags), function () {
      verifyWebhookDoesNotExist(ev.additional_headers, ev.body_template, ev.ca_file_path, ev.custom_fields, ev.description, ev.http_content_type, ev.http_method, ev.id, ev.name, ev.payload_url, ev.secret, ev.ssl_verification, ev.tags);
    });
  }
});

// Story: crud:Aggregate:nondet:1:1
bthread("crud:Aggregate:nondet:1:1", function () {
  let comments = "comments_880";
  let custom_fields = {};
  let date_added = "date_added_880";
  let description = "description_880";
  let id = 880;
  let prefix = "prefix_880";
  let rir = "rir_880";
  let tags = "tags_880";
  let tenant = "tenant_880";
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
  let comments = "comments_881";
  let custom_fields = {};
  let date_added = "date_added_881";
  let description = "description_881";
  let id = 881;
  let prefix = "prefix_881";
  let rir = "rir_881";
  let tags = "tags_881";
  let tenant = "tenant_881";
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
  let comments = "comments_886";
  let custom_fields = {};
  let date_added = "date_added_886";
  let description = "description_886";
  let id = 886;
  let prefix = "prefix_886";
  let rir = "rir_886";
  let tags = "tags_886";
  let tenant = "tenant_886";
  createAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateExists(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  tryToAddExistingAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateExists(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
});

<<<<<<< HEAD
=======
// Story: crud:Aggregate:nondet:existing:update
bthread("crud:Aggregate:nondet:existing:update", function () {
  let ev = waitForAnyAggregateAdded();
  let args = Object.values(ev);
  block(matchDeletedAggregate.apply(null, args), function () {
    verifyAggregateExists.apply(null, args);
    updateAggregate.apply(null, args);
    verifyAggregateExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Aggregate:add
bthread("monitor:Aggregate:add", function () {
  while (true) {
    let ev = waitForAnyAggregateAdded();
    block(matchDeletedAggregate(ev.comments, ev.custom_fields, ev.date_added, ev.description, ev.id, ev.prefix, ev.rir, ev.tags, ev.tenant), function () {
      verifyAggregateExists(ev.comments, ev.custom_fields, ev.date_added, ev.description, ev.id, ev.prefix, ev.rir, ev.tags, ev.tenant);
    });
  }
});

// Story: monitor:Aggregate:deletion
bthread("monitor:Aggregate:deletion", function () {
  while (true) {
    let ev = waitForAnyAggregateDeleted();
    block(matchAddedAggregate(ev.comments, ev.custom_fields, ev.date_added, ev.description, ev.id, ev.prefix, ev.rir, ev.tags, ev.tenant), function () {
      verifyAggregateDoesNotExist(ev.comments, ev.custom_fields, ev.date_added, ev.description, ev.id, ev.prefix, ev.rir, ev.tags, ev.tenant);
    });
  }
});

// Story: crud:ASNRange:nondet:1:1
bthread("crud:ASNRange:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_890";
  let end = 890;
  let id = 890;
  let name = "name_890";
  let rir = "rir_890";
  let slug = "slug_890";
  let start = 890;
  let tags = "tags_890";
  let tenant = "tenant_890";
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
  let description = "description_891";
  let end = 891;
  let id = 891;
  let name = "name_891";
  let rir = "rir_891";
  let slug = "slug_891";
  let start = 891;
  let tags = "tags_891";
  let tenant = "tenant_891";
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
  let description = "description_896";
  let end = 896;
  let id = 896;
  let name = "name_896";
  let rir = "rir_896";
  let slug = "slug_896";
  let start = 896;
  let tags = "tags_896";
  let tenant = "tenant_896";
  createASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  verifyASNRangeExists(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  tryToAddExistingASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  verifyASNRangeExists(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
});

<<<<<<< HEAD
=======
// Story: crud:ASNRange:nondet:existing:update
bthread("crud:ASNRange:nondet:existing:update", function () {
  let ev = waitForAnyASNRangeAdded();
  let args = Object.values(ev);
  block(matchDeletedASNRange.apply(null, args), function () {
    verifyASNRangeExists.apply(null, args);
    updateASNRange.apply(null, args);
    verifyASNRangeExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ASNRange:add
bthread("monitor:ASNRange:add", function () {
  while (true) {
    let ev = waitForAnyASNRangeAdded();
    block(matchDeletedASNRange(ev.custom_fields, ev.description, ev.end, ev.id, ev.name, ev.rir, ev.slug, ev.start, ev.tags, ev.tenant), function () {
      verifyASNRangeExists(ev.custom_fields, ev.description, ev.end, ev.id, ev.name, ev.rir, ev.slug, ev.start, ev.tags, ev.tenant);
    });
  }
});

// Story: monitor:ASNRange:deletion
bthread("monitor:ASNRange:deletion", function () {
  while (true) {
    let ev = waitForAnyASNRangeDeleted();
    block(matchAddedASNRange(ev.custom_fields, ev.description, ev.end, ev.id, ev.name, ev.rir, ev.slug, ev.start, ev.tags, ev.tenant), function () {
      verifyASNRangeDoesNotExist(ev.custom_fields, ev.description, ev.end, ev.id, ev.name, ev.rir, ev.slug, ev.start, ev.tags, ev.tenant);
    });
  }
});

// Story: crud:ASN:nondet:1:1
bthread("crud:ASN:nondet:1:1", function () {
  let asn = 900;
  let comments = "comments_900";
  let custom_fields = {};
  let description = "description_900";
  let id = 900;
  let rir = "rir_900";
  let tags = "tags_900";
  let tenant = "tenant_900";
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
  let asn = 901;
  let comments = "comments_901";
  let custom_fields = {};
  let description = "description_901";
  let id = 901;
  let rir = "rir_901";
  let tags = "tags_901";
  let tenant = "tenant_901";
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
  let asn = 906;
  let comments = "comments_906";
  let custom_fields = {};
  let description = "description_906";
  let id = 906;
  let rir = "rir_906";
  let tags = "tags_906";
  let tenant = "tenant_906";
  createASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNExists(asn, comments, custom_fields, description, id, rir, tags, tenant);
  tryToAddExistingASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNExists(asn, comments, custom_fields, description, id, rir, tags, tenant);
});

<<<<<<< HEAD
=======
// Story: crud:ASN:nondet:existing:update
bthread("crud:ASN:nondet:existing:update", function () {
  let ev = waitForAnyASNAdded();
  let args = Object.values(ev);
  block(matchDeletedASN.apply(null, args), function () {
    verifyASNExists.apply(null, args);
    updateASN.apply(null, args);
    verifyASNExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ASN:add
bthread("monitor:ASN:add", function () {
  while (true) {
    let ev = waitForAnyASNAdded();
    block(matchDeletedASN(ev.asn, ev.comments, ev.custom_fields, ev.description, ev.id, ev.rir, ev.tags, ev.tenant), function () {
      verifyASNExists(ev.asn, ev.comments, ev.custom_fields, ev.description, ev.id, ev.rir, ev.tags, ev.tenant);
    });
  }
});

// Story: monitor:ASN:deletion
bthread("monitor:ASN:deletion", function () {
  while (true) {
    let ev = waitForAnyASNDeleted();
    block(matchAddedASN(ev.asn, ev.comments, ev.custom_fields, ev.description, ev.id, ev.rir, ev.tags, ev.tenant), function () {
      verifyASNDoesNotExist(ev.asn, ev.comments, ev.custom_fields, ev.description, ev.id, ev.rir, ev.tags, ev.tenant);
    });
  }
});

// Story: crud:FHRPGroupAssignment:nondet:1:1
bthread("crud:FHRPGroupAssignment:nondet:1:1", function () {
  let group = "group_910";
  let id = 910;
  let interface_id;
  let interface_type = "interface_type_910";
  let priority = 910;
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
  let group = "group_911";
  let id = 911;
  let interface_id;
  let interface_type = "interface_type_911";
  let priority = 911;
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
  let group = "group_916";
  let id = 916;
  let interface_id;
  let interface_type = "interface_type_916";
  let priority = 916;
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

<<<<<<< HEAD
=======
// Story: crud:FHRPGroupAssignment:nondet:existing:update
bthread("crud:FHRPGroupAssignment:nondet:existing:update", function () {
  let ev = waitForAnyFHRPGroupAssignmentAdded();
  let args = Object.values(ev);
  block(matchDeletedFHRPGroupAssignment.apply(null, args), function () {
    verifyFHRPGroupAssignmentExists.apply(null, args);
    updateFHRPGroupAssignment.apply(null, args);
    verifyFHRPGroupAssignmentExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:FHRPGroupAssignment:add
bthread("monitor:FHRPGroupAssignment:add", function () {
  while (true) {
    let ev = waitForAnyFHRPGroupAssignmentAdded();
    block(matchDeletedFHRPGroupAssignment(ev.group, ev.id, ev.interface_id, ev.interface_type, ev.priority), function () {
      verifyFHRPGroupAssignmentExists(ev.group, ev.id, ev.interface_id, ev.interface_type, ev.priority);
    });
  }
});

// Story: monitor:FHRPGroupAssignment:deletion
bthread("monitor:FHRPGroupAssignment:deletion", function () {
  while (true) {
    let ev = waitForAnyFHRPGroupAssignmentDeleted();
    block(matchAddedFHRPGroupAssignment(ev.group, ev.id, ev.interface_id, ev.interface_type, ev.priority), function () {
      verifyFHRPGroupAssignmentDoesNotExist(ev.group, ev.id, ev.interface_id, ev.interface_type, ev.priority);
    });
  }
});

// Story: crud:FHRPGroup:nondet:1:1
bthread("crud:FHRPGroup:nondet:1:1", function () {
  let auth_key = "auth_key_920";
  let auth_type = "auth_type_920";
  let comments = "comments_920";
  let custom_fields = {};
  let description = "description_920";
  let group_id;
  let id = 920;
  let name = "name_920";
  let protocol = "protocol_920";
  let tags = "tags_920";
  // Dependency Barrier
  let deps = {};
  deps["group_id"] = matchAnyGroupAdded();
  let pkMap = {"group_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  group_id = captured["group_id"];
  createFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  waitForFHRPGroupAdded(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  tryToAddExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  verifyFHRPGroupExists(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  updateFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  deleteFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  tryToDeleteANonExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  verifyFHRPGroupDoesNotExist(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
});

// Story: crud:FHRPGroup:nondet:1:2
bthread("crud:FHRPGroup:nondet:1:2", function () {
  let auth_key = "auth_key_921";
  let auth_type = "auth_type_921";
  let comments = "comments_921";
  let custom_fields = {};
  let description = "description_921";
  let group_id;
  let id = 921;
  let name = "name_921";
  let protocol = "protocol_921";
  let tags = "tags_921";
  // Dependency Barrier
  let deps = {};
  deps["group_id"] = matchAnyGroupAdded();
  let pkMap = {"group_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  group_id = captured["group_id"];
  createFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  tryToAddExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  updateFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  verifyFHRPGroupExists(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  deleteFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  tryToDeleteANonExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  verifyFHRPGroupDoesNotExist(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
});

// Story: crud:FHRPGroup:nondet:negative:dup-add
bthread("crud:FHRPGroup:nondet:negative:dup-add", function () {
  let auth_key = "auth_key_926";
  let auth_type = "auth_type_926";
  let comments = "comments_926";
  let custom_fields = {};
  let description = "description_926";
  let group_id;
  let id = 926;
  let name = "name_926";
  let protocol = "protocol_926";
  let tags = "tags_926";
  // Dependency Barrier
  let deps = {};
  deps["group_id"] = matchAnyGroupAdded();
  let pkMap = {"group_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  group_id = captured["group_id"];
  createFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  verifyFHRPGroupExists(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  tryToAddExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  verifyFHRPGroupExists(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
});

<<<<<<< HEAD
=======
// Story: crud:FHRPGroup:nondet:existing:update
bthread("crud:FHRPGroup:nondet:existing:update", function () {
  let ev = waitForAnyFHRPGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedFHRPGroup.apply(null, args), function () {
    verifyFHRPGroupExists.apply(null, args);
    updateFHRPGroup.apply(null, args);
    verifyFHRPGroupExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:FHRPGroup:add
bthread("monitor:FHRPGroup:add", function () {
  while (true) {
    let ev = waitForAnyFHRPGroupAdded();
    block(matchDeletedFHRPGroup(ev.auth_key, ev.auth_type, ev.comments, ev.custom_fields, ev.description, ev.group_id, ev.id, ev.name, ev.protocol, ev.tags), function () {
      verifyFHRPGroupExists(ev.auth_key, ev.auth_type, ev.comments, ev.custom_fields, ev.description, ev.group_id, ev.id, ev.name, ev.protocol, ev.tags);
    });
  }
});

// Story: monitor:FHRPGroup:deletion
bthread("monitor:FHRPGroup:deletion", function () {
  while (true) {
    let ev = waitForAnyFHRPGroupDeleted();
    block(matchAddedFHRPGroup(ev.auth_key, ev.auth_type, ev.comments, ev.custom_fields, ev.description, ev.group_id, ev.id, ev.name, ev.protocol, ev.tags), function () {
      verifyFHRPGroupDoesNotExist(ev.auth_key, ev.auth_type, ev.comments, ev.custom_fields, ev.description, ev.group_id, ev.id, ev.name, ev.protocol, ev.tags);
    });
  }
});

// Story: crud:IPAddress:nondet:1:1
bthread("crud:IPAddress:nondet:1:1", function () {
  let address = "address_930";
  let assigned_object_id = 930;
  let assigned_object_type = "assigned_object_type_930";
  let comments = "comments_930";
  let custom_fields = {};
  let description = "description_930";
  let dns_name = "dns_name_930";
  let id = 930;
  let nat_inside = 930;
  let role = "role_930";
  let status = "status_930";
  let tags = "tags_930";
  let tenant = "tenant_930";
  let vrf = "vrf_930";
  createIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  waitForIPAddressAdded(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  updateIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  deleteIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  tryToDeleteANonExistingIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  verifyIPAddressDoesNotExist(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
});

// Story: crud:IPAddress:nondet:1:2
bthread("crud:IPAddress:nondet:1:2", function () {
  let address = "address_931";
  let assigned_object_id = 931;
  let assigned_object_type = "assigned_object_type_931";
  let comments = "comments_931";
  let custom_fields = {};
  let description = "description_931";
  let dns_name = "dns_name_931";
  let id = 931;
  let nat_inside = 931;
  let role = "role_931";
  let status = "status_931";
  let tags = "tags_931";
  let tenant = "tenant_931";
  let vrf = "vrf_931";
  createIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  updateIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  deleteIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  tryToDeleteANonExistingIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  verifyIPAddressDoesNotExist(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
});

// Story: crud:IPAddress:nondet:negative:dup-add
bthread("crud:IPAddress:nondet:negative:dup-add", function () {
  let address = "address_936";
  let assigned_object_id = 936;
  let assigned_object_type = "assigned_object_type_936";
  let comments = "comments_936";
  let custom_fields = {};
  let description = "description_936";
  let dns_name = "dns_name_936";
  let id = 936;
  let nat_inside = 936;
  let role = "role_936";
  let status = "status_936";
  let tags = "tags_936";
  let tenant = "tenant_936";
  let vrf = "vrf_936";
  createIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
});

<<<<<<< HEAD
=======
// Story: crud:IPAddress:nondet:existing:update
bthread("crud:IPAddress:nondet:existing:update", function () {
  let ev = waitForAnyIPAddressAdded();
  let args = Object.values(ev);
  block(matchDeletedIPAddress.apply(null, args), function () {
    verifyIPAddressExists.apply(null, args);
    updateIPAddress.apply(null, args);
    verifyIPAddressExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:IPAddress:add
bthread("monitor:IPAddress:add", function () {
  while (true) {
    let ev = waitForAnyIPAddressAdded();
    block(matchDeletedIPAddress(ev.address, ev.assigned_object_id, ev.assigned_object_type, ev.comments, ev.custom_fields, ev.description, ev.dns_name, ev.id, ev.nat_inside, ev.role, ev.status, ev.tags, ev.tenant, ev.vrf), function () {
      verifyIPAddressExists(ev.address, ev.assigned_object_id, ev.assigned_object_type, ev.comments, ev.custom_fields, ev.description, ev.dns_name, ev.id, ev.nat_inside, ev.role, ev.status, ev.tags, ev.tenant, ev.vrf);
    });
  }
});

// Story: monitor:IPAddress:deletion
bthread("monitor:IPAddress:deletion", function () {
  while (true) {
    let ev = waitForAnyIPAddressDeleted();
    block(matchAddedIPAddress(ev.address, ev.assigned_object_id, ev.assigned_object_type, ev.comments, ev.custom_fields, ev.description, ev.dns_name, ev.id, ev.nat_inside, ev.role, ev.status, ev.tags, ev.tenant, ev.vrf), function () {
      verifyIPAddressDoesNotExist(ev.address, ev.assigned_object_id, ev.assigned_object_type, ev.comments, ev.custom_fields, ev.description, ev.dns_name, ev.id, ev.nat_inside, ev.role, ev.status, ev.tags, ev.tenant, ev.vrf);
    });
  }
});

// Story: crud:IPRange:nondet:1:1
bthread("crud:IPRange:nondet:1:1", function () {
  let comments = "comments_940";
  let custom_fields = {};
  let description = "description_940";
  let end_address = "end_address_940";
  let id = 940;
  let mark_populated = true;
  let mark_utilized = true;
  let role = "role_940";
  let start_address = "start_address_940";
  let status = "status_940";
  let tags = "tags_940";
  let tenant = "tenant_940";
  let vrf = "vrf_940";
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
  let comments = "comments_941";
  let custom_fields = {};
  let description = "description_941";
  let end_address = "end_address_941";
  let id = 941;
  let mark_populated = true;
  let mark_utilized = true;
  let role = "role_941";
  let start_address = "start_address_941";
  let status = "status_941";
  let tags = "tags_941";
  let tenant = "tenant_941";
  let vrf = "vrf_941";
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
  let comments = "comments_946";
  let custom_fields = {};
  let description = "description_946";
  let end_address = "end_address_946";
  let id = 946;
  let mark_populated = true;
  let mark_utilized = true;
  let role = "role_946";
  let start_address = "start_address_946";
  let status = "status_946";
  let tags = "tags_946";
  let tenant = "tenant_946";
  let vrf = "vrf_946";
  createIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  tryToAddExistingIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
});

<<<<<<< HEAD
=======
// Story: crud:IPRange:nondet:existing:update
bthread("crud:IPRange:nondet:existing:update", function () {
  let ev = waitForAnyIPRangeAdded();
  let args = Object.values(ev);
  block(matchDeletedIPRange.apply(null, args), function () {
    verifyIPRangeExists.apply(null, args);
    updateIPRange.apply(null, args);
    verifyIPRangeExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:IPRange:add
bthread("monitor:IPRange:add", function () {
  while (true) {
    let ev = waitForAnyIPRangeAdded();
    block(matchDeletedIPRange(ev.comments, ev.custom_fields, ev.description, ev.end_address, ev.id, ev.mark_populated, ev.mark_utilized, ev.role, ev.start_address, ev.status, ev.tags, ev.tenant, ev.vrf), function () {
      verifyIPRangeExists(ev.comments, ev.custom_fields, ev.description, ev.end_address, ev.id, ev.mark_populated, ev.mark_utilized, ev.role, ev.start_address, ev.status, ev.tags, ev.tenant, ev.vrf);
    });
  }
});

// Story: monitor:IPRange:deletion
bthread("monitor:IPRange:deletion", function () {
  while (true) {
    let ev = waitForAnyIPRangeDeleted();
    block(matchAddedIPRange(ev.comments, ev.custom_fields, ev.description, ev.end_address, ev.id, ev.mark_populated, ev.mark_utilized, ev.role, ev.start_address, ev.status, ev.tags, ev.tenant, ev.vrf), function () {
      verifyIPRangeDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.end_address, ev.id, ev.mark_populated, ev.mark_utilized, ev.role, ev.start_address, ev.status, ev.tags, ev.tenant, ev.vrf);
    });
  }
});

// Story: crud:Prefix:nondet:1:1
bthread("crud:Prefix:nondet:1:1", function () {
  let comments = "comments_950";
  let custom_fields = {};
  let description = "description_950";
  let id = 950;
  let is_pool = true;
  let mark_utilized = true;
  let prefix = "prefix_950";
  let role = "role_950";
  let scope_id = 950;
  let scope_type = "scope_type_950";
  let status = "status_950";
  let tags = "tags_950";
  let tenant = "tenant_950";
  let vlan = "vlan_950";
  let vrf = "vrf_950";
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
  let comments = "comments_951";
  let custom_fields = {};
  let description = "description_951";
  let id = 951;
  let is_pool = true;
  let mark_utilized = true;
  let prefix = "prefix_951";
  let role = "role_951";
  let scope_id = 951;
  let scope_type = "scope_type_951";
  let status = "status_951";
  let tags = "tags_951";
  let tenant = "tenant_951";
  let vlan = "vlan_951";
  let vrf = "vrf_951";
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
  let comments = "comments_956";
  let custom_fields = {};
  let description = "description_956";
  let id = 956;
  let is_pool = true;
  let mark_utilized = true;
  let prefix = "prefix_956";
  let role = "role_956";
  let scope_id = 956;
  let scope_type = "scope_type_956";
  let status = "status_956";
  let tags = "tags_956";
  let tenant = "tenant_956";
  let vlan = "vlan_956";
  let vrf = "vrf_956";
  createPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixExists(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  tryToAddExistingPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixExists(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
});

<<<<<<< HEAD
=======
// Story: crud:Prefix:nondet:existing:update
bthread("crud:Prefix:nondet:existing:update", function () {
  let ev = waitForAnyPrefixAdded();
  let args = Object.values(ev);
  block(matchDeletedPrefix.apply(null, args), function () {
    verifyPrefixExists.apply(null, args);
    updatePrefix.apply(null, args);
    verifyPrefixExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Prefix:add
bthread("monitor:Prefix:add", function () {
  while (true) {
    let ev = waitForAnyPrefixAdded();
    block(matchDeletedPrefix(ev.comments, ev.custom_fields, ev.description, ev.id, ev.is_pool, ev.mark_utilized, ev.prefix, ev.role, ev.scope_id, ev.scope_type, ev.status, ev.tags, ev.tenant, ev.vlan, ev.vrf), function () {
      verifyPrefixExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.is_pool, ev.mark_utilized, ev.prefix, ev.role, ev.scope_id, ev.scope_type, ev.status, ev.tags, ev.tenant, ev.vlan, ev.vrf);
    });
  }
});

// Story: monitor:Prefix:deletion
bthread("monitor:Prefix:deletion", function () {
  while (true) {
    let ev = waitForAnyPrefixDeleted();
    block(matchAddedPrefix(ev.comments, ev.custom_fields, ev.description, ev.id, ev.is_pool, ev.mark_utilized, ev.prefix, ev.role, ev.scope_id, ev.scope_type, ev.status, ev.tags, ev.tenant, ev.vlan, ev.vrf), function () {
      verifyPrefixDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.is_pool, ev.mark_utilized, ev.prefix, ev.role, ev.scope_id, ev.scope_type, ev.status, ev.tags, ev.tenant, ev.vlan, ev.vrf);
    });
  }
});

// Story: crud:RIR:nondet:1:1
bthread("crud:RIR:nondet:1:1", function () {
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_960";
  let id = 960;
  let is_private = true;
  let name = "name_960";
  let slug = "slug_960";
  let tags = "tags_960";
  createRIR(custom_fields, description, id, is_private, name, slug, tags);
  waitForRIRAdded(custom_fields, description, id, is_private, name, slug, tags);
  tryToAddExistingRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, slug, tags);
  updateRIR(custom_fields, description, id, is_private, name, slug, tags);
  deleteRIR(custom_fields, description, id, is_private, name, slug, tags);
  tryToDeleteANonExistingRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRDoesNotExist(custom_fields, description, id, is_private, name, slug, tags);
=======
  let description = "description_950";
  let id = 950;
  let is_private = "is_private_950";
  let name = "name_950";
  let rir_date = "rir_date_950";
  let rir_date_accuracy = "rir_date_accuracy_950";
  let rir_date_comment = "rir_date_comment_950";
  let rir_date_source = "rir_date_source_950";
  let rir_date_source_comment = "rir_date_source_comment_950";
  let rir_date_source_url = "rir_date_source_url_950";
  let rir_date_source_url_comment = "rir_date_source_url_comment_950";
  let rir_date_source_url_date = "rir_date_source_url_date_950";
  let rir_date_source_url_date_comment = "rir_date_source_url_date_comment_950";
  let rir_date_source_url_date_source = "rir_date_source_url_date_source_950";
  let rir_date_source_url_date_source_comment = "rir_date_source_url_date_source_comment_950";
  let rir_date_source_url_date_source_url = "rir_date_source_url_date_source_url_950";
  let rir_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_comment_950";
  let rir_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_950";
  let rir_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_comment_950";
  let rir_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_950";
  let rir_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_comment_950";
  let rir_date_source_url_date_source_url_date_source_url = "rir_date_source_url_date_source_url_date_source_url_950";
  let rir_date_source_url_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_date_source_url_comment_950";
  let rir_date_source_url_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_source_url_date_950";
  let rir_date_source_url_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_source_url_date_comment_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_url_date_source_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_comment_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url = "rir_date_source_url_date_source_url_date_source_url_date_source_url_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_comment_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_950";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment_950";
  let slug = "slug_950";
  let tags = "tags_950";
  createRIR(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  waitForRIRAdded(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  tryToAddExistingRIR(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  updateRIR(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  deleteRIR(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  tryToDeleteANonExistingRIR(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  verifyRIRDoesNotExist(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:RIR:nondet:1:2
bthread("crud:RIR:nondet:1:2", function () {
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_961";
  let id = 961;
  let is_private = true;
  let name = "name_961";
  let slug = "slug_961";
  let tags = "tags_961";
  createRIR(custom_fields, description, id, is_private, name, slug, tags);
  tryToAddExistingRIR(custom_fields, description, id, is_private, name, slug, tags);
  updateRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, slug, tags);
  deleteRIR(custom_fields, description, id, is_private, name, slug, tags);
  tryToDeleteANonExistingRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRDoesNotExist(custom_fields, description, id, is_private, name, slug, tags);
=======
  let description = "description_951";
  let id = 951;
  let is_private = "is_private_951";
  let name = "name_951";
  let rir_date = "rir_date_951";
  let rir_date_accuracy = "rir_date_accuracy_951";
  let rir_date_comment = "rir_date_comment_951";
  let rir_date_source = "rir_date_source_951";
  let rir_date_source_comment = "rir_date_source_comment_951";
  let rir_date_source_url = "rir_date_source_url_951";
  let rir_date_source_url_comment = "rir_date_source_url_comment_951";
  let rir_date_source_url_date = "rir_date_source_url_date_951";
  let rir_date_source_url_date_comment = "rir_date_source_url_date_comment_951";
  let rir_date_source_url_date_source = "rir_date_source_url_date_source_951";
  let rir_date_source_url_date_source_comment = "rir_date_source_url_date_source_comment_951";
  let rir_date_source_url_date_source_url = "rir_date_source_url_date_source_url_951";
  let rir_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_comment_951";
  let rir_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_951";
  let rir_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_comment_951";
  let rir_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_951";
  let rir_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_comment_951";
  let rir_date_source_url_date_source_url_date_source_url = "rir_date_source_url_date_source_url_date_source_url_951";
  let rir_date_source_url_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_date_source_url_comment_951";
  let rir_date_source_url_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_source_url_date_951";
  let rir_date_source_url_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_source_url_date_comment_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_url_date_source_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_comment_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url = "rir_date_source_url_date_source_url_date_source_url_date_source_url_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_comment_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_951";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment_951";
  let slug = "slug_951";
  let tags = "tags_951";
  createRIR(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  tryToAddExistingRIR(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  updateRIR(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  deleteRIR(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  tryToDeleteANonExistingRIR(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  verifyRIRDoesNotExist(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:RIR:nondet:negative:dup-add
bthread("crud:RIR:nondet:negative:dup-add", function () {
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_966";
  let id = 966;
  let is_private = true;
  let name = "name_966";
  let slug = "slug_966";
  let tags = "tags_966";
  createRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, slug, tags);
  tryToAddExistingRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, slug, tags);
=======
  let description = "description_956";
  let id = 956;
  let is_private = "is_private_956";
  let name = "name_956";
  let rir_date = "rir_date_956";
  let rir_date_accuracy = "rir_date_accuracy_956";
  let rir_date_comment = "rir_date_comment_956";
  let rir_date_source = "rir_date_source_956";
  let rir_date_source_comment = "rir_date_source_comment_956";
  let rir_date_source_url = "rir_date_source_url_956";
  let rir_date_source_url_comment = "rir_date_source_url_comment_956";
  let rir_date_source_url_date = "rir_date_source_url_date_956";
  let rir_date_source_url_date_comment = "rir_date_source_url_date_comment_956";
  let rir_date_source_url_date_source = "rir_date_source_url_date_source_956";
  let rir_date_source_url_date_source_comment = "rir_date_source_url_date_source_comment_956";
  let rir_date_source_url_date_source_url = "rir_date_source_url_date_source_url_956";
  let rir_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_comment_956";
  let rir_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_956";
  let rir_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_comment_956";
  let rir_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_956";
  let rir_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_comment_956";
  let rir_date_source_url_date_source_url_date_source_url = "rir_date_source_url_date_source_url_date_source_url_956";
  let rir_date_source_url_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_date_source_url_comment_956";
  let rir_date_source_url_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_source_url_date_956";
  let rir_date_source_url_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_source_url_date_comment_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_url_date_source_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_comment_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url = "rir_date_source_url_date_source_url_date_source_url_date_source_url_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_comment_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_956";
  let rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment = "rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment_956";
  let slug = "slug_956";
  let tags = "tags_956";
  createRIR(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  tryToAddExistingRIR(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, rir_date, rir_date_accuracy, rir_date_comment, rir_date_source, rir_date_source_comment, rir_date_source_url, rir_date_source_url_comment, rir_date_source_url_date, rir_date_source_url_date_comment, rir_date_source_url_date_source, rir_date_source_url_date_source_comment, rir_date_source_url_date_source_url, rir_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, slug, tags);
});

// Story: crud:RIR:nondet:existing:update
bthread("crud:RIR:nondet:existing:update", function () {
  let ev = waitForAnyRIRAdded();
  let args = Object.values(ev);
  block(matchDeletedRIR.apply(null, args), function () {
    verifyRIRExists.apply(null, args);
    updateRIR.apply(null, args);
    verifyRIRExists.apply(null, args);
  });
});

// Story: monitor:RIR:add
bthread("monitor:RIR:add", function () {
  while (true) {
    let ev = waitForAnyRIRAdded();
    block(matchDeletedRIR(ev.custom_fields, ev.description, ev.id, ev.is_private, ev.name, ev.rir_date, ev.rir_date_accuracy, ev.rir_date_comment, ev.rir_date_source, ev.rir_date_source_comment, ev.rir_date_source_url, ev.rir_date_source_url_comment, ev.rir_date_source_url_date, ev.rir_date_source_url_date_comment, ev.rir_date_source_url_date_source, ev.rir_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, ev.slug, ev.tags), function () {
      verifyRIRExists(ev.custom_fields, ev.description, ev.id, ev.is_private, ev.name, ev.rir_date, ev.rir_date_accuracy, ev.rir_date_comment, ev.rir_date_source, ev.rir_date_source_comment, ev.rir_date_source_url, ev.rir_date_source_url_comment, ev.rir_date_source_url_date, ev.rir_date_source_url_date_comment, ev.rir_date_source_url_date_source, ev.rir_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:RIR:deletion
bthread("monitor:RIR:deletion", function () {
  while (true) {
    let ev = waitForAnyRIRDeleted();
    block(matchAddedRIR(ev.custom_fields, ev.description, ev.id, ev.is_private, ev.name, ev.rir_date, ev.rir_date_accuracy, ev.rir_date_comment, ev.rir_date_source, ev.rir_date_source_comment, ev.rir_date_source_url, ev.rir_date_source_url_comment, ev.rir_date_source_url_date, ev.rir_date_source_url_date_comment, ev.rir_date_source_url_date_source, ev.rir_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, ev.slug, ev.tags), function () {
      verifyRIRDoesNotExist(ev.custom_fields, ev.description, ev.id, ev.is_private, ev.name, ev.rir_date, ev.rir_date_accuracy, ev.rir_date_comment, ev.rir_date_source, ev.rir_date_source_comment, ev.rir_date_source_url, ev.rir_date_source_url_comment, ev.rir_date_source_url_date, ev.rir_date_source_url_date_comment, ev.rir_date_source_url_date_source, ev.rir_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_comment, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source, ev.rir_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_url_date_source_comment, ev.slug, ev.tags);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:RIR:add
bthread("monitor:RIR:add", function () {
  while (true) {
    let ev = waitForAnyRIRAdded();
    block(matchDeletedRIR(ev.custom_fields, ev.description, ev.id, ev.is_private, ev.name, ev.slug, ev.tags), function () {
      verifyRIRExists(ev.custom_fields, ev.description, ev.id, ev.is_private, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:RIR:deletion
bthread("monitor:RIR:deletion", function () {
  while (true) {
    let ev = waitForAnyRIRDeleted();
    block(matchAddedRIR(ev.custom_fields, ev.description, ev.id, ev.is_private, ev.name, ev.slug, ev.tags), function () {
      verifyRIRDoesNotExist(ev.custom_fields, ev.description, ev.id, ev.is_private, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: crud:Role:nondet:1:1
bthread("crud:Role:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_970";
  let id = 970;
  let name = "name_970";
  let slug = "slug_970";
  let tags = "tags_970";
  let weight = 970;
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
  let description = "description_971";
  let id = 971;
  let name = "name_971";
  let slug = "slug_971";
  let tags = "tags_971";
  let weight = 971;
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
  let description = "description_976";
  let id = 976;
  let name = "name_976";
  let slug = "slug_976";
  let tags = "tags_976";
  let weight = 976;
  createRole(custom_fields, description, id, name, slug, tags, weight);
  verifyRoleExists(custom_fields, description, id, name, slug, tags, weight);
  tryToAddExistingRole(custom_fields, description, id, name, slug, tags, weight);
  verifyRoleExists(custom_fields, description, id, name, slug, tags, weight);
});

<<<<<<< HEAD
=======
// Story: crud:Role:nondet:existing:update
bthread("crud:Role:nondet:existing:update", function () {
  let ev = waitForAnyRoleAdded();
  let args = Object.values(ev);
  block(matchDeletedRole.apply(null, args), function () {
    verifyRoleExists.apply(null, args);
    updateRole.apply(null, args);
    verifyRoleExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Role:add
bthread("monitor:Role:add", function () {
  while (true) {
    let ev = waitForAnyRoleAdded();
    block(matchDeletedRole(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags, ev.weight), function () {
      verifyRoleExists(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags, ev.weight);
    });
  }
});

// Story: monitor:Role:deletion
bthread("monitor:Role:deletion", function () {
  while (true) {
    let ev = waitForAnyRoleDeleted();
    block(matchAddedRole(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags, ev.weight), function () {
      verifyRoleDoesNotExist(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags, ev.weight);
    });
  }
});

// Story: crud:RouteTarget:nondet:1:1
bthread("crud:RouteTarget:nondet:1:1", function () {
  let comments = "comments_980";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_980";
  let id = 980;
  let name = "name_980";
  let tags = "tags_980";
  let tenant = "tenant_980";
  createRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  waitForRouteTargetAdded(comments, custom_fields, description, id, name, tags, tenant);
  tryToAddExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetExists(comments, custom_fields, description, id, name, tags, tenant);
  updateRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  deleteRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  tryToDeleteANonExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetDoesNotExist(comments, custom_fields, description, id, name, tags, tenant);
=======
  let description = "description_970";
  let exporting_l2vpn = "exporting_l2vpn_970";
  let exporting_vrf = "exporting_vrf_970";
  let id = 970;
  let importing_l2vpn = "importing_l2vpn_970";
  let importing_vrf = "importing_vrf_970";
  let name = "name_970";
  let slug = "slug_970";
  let tags = "tags_970";
  let tenant = "tenant_970";
  let tenant_group = "tenant_group_970";
  createRouteTarget(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  waitForRouteTargetAdded(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  tryToAddExistingRouteTarget(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  verifyRouteTargetExists(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  updateRouteTarget(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  deleteRouteTarget(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  tryToDeleteANonExistingRouteTarget(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  verifyRouteTargetDoesNotExist(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:RouteTarget:nondet:1:2
bthread("crud:RouteTarget:nondet:1:2", function () {
  let comments = "comments_981";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_981";
  let id = 981;
  let name = "name_981";
  let tags = "tags_981";
  let tenant = "tenant_981";
  createRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  tryToAddExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  updateRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetExists(comments, custom_fields, description, id, name, tags, tenant);
  deleteRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  tryToDeleteANonExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetDoesNotExist(comments, custom_fields, description, id, name, tags, tenant);
=======
  let description = "description_971";
  let exporting_l2vpn = "exporting_l2vpn_971";
  let exporting_vrf = "exporting_vrf_971";
  let id = 971;
  let importing_l2vpn = "importing_l2vpn_971";
  let importing_vrf = "importing_vrf_971";
  let name = "name_971";
  let slug = "slug_971";
  let tags = "tags_971";
  let tenant = "tenant_971";
  let tenant_group = "tenant_group_971";
  createRouteTarget(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  tryToAddExistingRouteTarget(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  updateRouteTarget(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  verifyRouteTargetExists(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  deleteRouteTarget(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  tryToDeleteANonExistingRouteTarget(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  verifyRouteTargetDoesNotExist(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:RouteTarget:nondet:negative:dup-add
bthread("crud:RouteTarget:nondet:negative:dup-add", function () {
  let comments = "comments_986";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_986";
  let id = 986;
  let name = "name_986";
  let tags = "tags_986";
  let tenant = "tenant_986";
  createRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetExists(comments, custom_fields, description, id, name, tags, tenant);
  tryToAddExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetExists(comments, custom_fields, description, id, name, tags, tenant);
=======
  let description = "description_976";
  let exporting_l2vpn = "exporting_l2vpn_976";
  let exporting_vrf = "exporting_vrf_976";
  let id = 976;
  let importing_l2vpn = "importing_l2vpn_976";
  let importing_vrf = "importing_vrf_976";
  let name = "name_976";
  let slug = "slug_976";
  let tags = "tags_976";
  let tenant = "tenant_976";
  let tenant_group = "tenant_group_976";
  createRouteTarget(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  verifyRouteTargetExists(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  tryToAddExistingRouteTarget(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
  verifyRouteTargetExists(comments, custom_fields, description, exporting_l2vpn, exporting_vrf, id, importing_l2vpn, importing_vrf, name, slug, tags, tenant, tenant_group);
});

// Story: crud:RouteTarget:nondet:existing:update
bthread("crud:RouteTarget:nondet:existing:update", function () {
  let ev = waitForAnyRouteTargetAdded();
  let args = Object.values(ev);
  block(matchDeletedRouteTarget.apply(null, args), function () {
    verifyRouteTargetExists.apply(null, args);
    updateRouteTarget.apply(null, args);
    verifyRouteTargetExists.apply(null, args);
  });
});

// Story: monitor:RouteTarget:add
bthread("monitor:RouteTarget:add", function () {
  while (true) {
    let ev = waitForAnyRouteTargetAdded();
    block(matchDeletedRouteTarget(ev.comments, ev.custom_fields, ev.description, ev.exporting_l2vpn, ev.exporting_vrf, ev.id, ev.importing_l2vpn, ev.importing_vrf, ev.name, ev.slug, ev.tags, ev.tenant, ev.tenant_group), function () {
      verifyRouteTargetExists(ev.comments, ev.custom_fields, ev.description, ev.exporting_l2vpn, ev.exporting_vrf, ev.id, ev.importing_l2vpn, ev.importing_vrf, ev.name, ev.slug, ev.tags, ev.tenant, ev.tenant_group);
    });
  }
});

// Story: monitor:RouteTarget:deletion
bthread("monitor:RouteTarget:deletion", function () {
  while (true) {
    let ev = waitForAnyRouteTargetDeleted();
    block(matchAddedRouteTarget(ev.comments, ev.custom_fields, ev.description, ev.exporting_l2vpn, ev.exporting_vrf, ev.id, ev.importing_l2vpn, ev.importing_vrf, ev.name, ev.slug, ev.tags, ev.tenant, ev.tenant_group), function () {
      verifyRouteTargetDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.exporting_l2vpn, ev.exporting_vrf, ev.id, ev.importing_l2vpn, ev.importing_vrf, ev.name, ev.slug, ev.tags, ev.tenant, ev.tenant_group);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:RouteTarget:add
bthread("monitor:RouteTarget:add", function () {
  while (true) {
    let ev = waitForAnyRouteTargetAdded();
    block(matchDeletedRouteTarget(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.tags, ev.tenant), function () {
      verifyRouteTargetExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.tags, ev.tenant);
    });
  }
});

// Story: monitor:RouteTarget:deletion
bthread("monitor:RouteTarget:deletion", function () {
  while (true) {
    let ev = waitForAnyRouteTargetDeleted();
    block(matchAddedRouteTarget(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.tags, ev.tenant), function () {
      verifyRouteTargetDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.tags, ev.tenant);
    });
  }
});

// Story: crud:ServiceTemplate:nondet:1:1
bthread("crud:ServiceTemplate:nondet:1:1", function () {
  let comments = "comments_990";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_990";
  let id = 990;
  let name = "name_990";
  let ports = "ports_990";
  let protocol = "protocol_990";
  let tags = "tags_990";
  createServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  waitForServiceTemplateAdded(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToAddExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, ports, protocol, tags);
  updateServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  deleteServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToDeleteANonExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateDoesNotExist(comments, custom_fields, description, id, name, ports, protocol, tags);
=======
  let description = "description_980";
  let id = 980;
  let name = "name_980";
  let port = "port_980";
  let ports = "ports_980";
  let protocol = "protocol_980";
  let slug = "slug_980";
  let tags = "tags_980";
  createServiceTemplate(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  waitForServiceTemplateAdded(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  tryToAddExistingServiceTemplate(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  updateServiceTemplate(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  deleteServiceTemplate(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  tryToDeleteANonExistingServiceTemplate(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  verifyServiceTemplateDoesNotExist(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:ServiceTemplate:nondet:1:2
bthread("crud:ServiceTemplate:nondet:1:2", function () {
  let comments = "comments_991";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_991";
  let id = 991;
  let name = "name_991";
  let ports = "ports_991";
  let protocol = "protocol_991";
  let tags = "tags_991";
  createServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToAddExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  updateServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, ports, protocol, tags);
  deleteServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToDeleteANonExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateDoesNotExist(comments, custom_fields, description, id, name, ports, protocol, tags);
=======
  let description = "description_981";
  let id = 981;
  let name = "name_981";
  let port = "port_981";
  let ports = "ports_981";
  let protocol = "protocol_981";
  let slug = "slug_981";
  let tags = "tags_981";
  createServiceTemplate(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  tryToAddExistingServiceTemplate(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  updateServiceTemplate(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  deleteServiceTemplate(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  tryToDeleteANonExistingServiceTemplate(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  verifyServiceTemplateDoesNotExist(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:ServiceTemplate:nondet:negative:dup-add
bthread("crud:ServiceTemplate:nondet:negative:dup-add", function () {
  let comments = "comments_996";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_996";
  let id = 996;
  let name = "name_996";
  let ports = "ports_996";
  let protocol = "protocol_996";
  let tags = "tags_996";
  createServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToAddExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, ports, protocol, tags);
=======
  let description = "description_986";
  let id = 986;
  let name = "name_986";
  let port = "port_986";
  let ports = "ports_986";
  let protocol = "protocol_986";
  let slug = "slug_986";
  let tags = "tags_986";
  createServiceTemplate(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  tryToAddExistingServiceTemplate(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, port, ports, protocol, slug, tags);
});

// Story: crud:ServiceTemplate:nondet:existing:update
bthread("crud:ServiceTemplate:nondet:existing:update", function () {
  let ev = waitForAnyServiceTemplateAdded();
  let args = Object.values(ev);
  block(matchDeletedServiceTemplate.apply(null, args), function () {
    verifyServiceTemplateExists.apply(null, args);
    updateServiceTemplate.apply(null, args);
    verifyServiceTemplateExists.apply(null, args);
  });
});

// Story: monitor:ServiceTemplate:add
bthread("monitor:ServiceTemplate:add", function () {
  while (true) {
    let ev = waitForAnyServiceTemplateAdded();
    block(matchDeletedServiceTemplate(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.port, ev.ports, ev.protocol, ev.slug, ev.tags), function () {
      verifyServiceTemplateExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.port, ev.ports, ev.protocol, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:ServiceTemplate:deletion
bthread("monitor:ServiceTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyServiceTemplateDeleted();
    block(matchAddedServiceTemplate(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.port, ev.ports, ev.protocol, ev.slug, ev.tags), function () {
      verifyServiceTemplateDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.port, ev.ports, ev.protocol, ev.slug, ev.tags);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:ServiceTemplate:add
bthread("monitor:ServiceTemplate:add", function () {
  while (true) {
    let ev = waitForAnyServiceTemplateAdded();
    block(matchDeletedServiceTemplate(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.ports, ev.protocol, ev.tags), function () {
      verifyServiceTemplateExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.ports, ev.protocol, ev.tags);
    });
  }
});

// Story: monitor:ServiceTemplate:deletion
bthread("monitor:ServiceTemplate:deletion", function () {
  while (true) {
    let ev = waitForAnyServiceTemplateDeleted();
    block(matchAddedServiceTemplate(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.ports, ev.protocol, ev.tags), function () {
      verifyServiceTemplateDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.ports, ev.protocol, ev.tags);
    });
  }
});

// Story: crud:Service:nondet:1:1
bthread("crud:Service:nondet:1:1", function () {
<<<<<<< HEAD
  let comments = "comments_1000";
  let custom_fields = {};
  let description = "description_1000";
  let id = 1000;
  let ipaddresses = "ipaddresses_1000";
  let name = "name_1000";
  let parent_object_id = 1000;
  let parent_object_type = "parent_object_type_1000";
  let ports = "ports_1000";
  let protocol = "protocol_1000";
  let tags = "tags_1000";
  createService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  waitForServiceAdded(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToAddExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceExists(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  updateService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  deleteService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToDeleteANonExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceDoesNotExist(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
=======
  let comments = "comments_990";
  let contact = "contact_990";
  let contact_group = "contact_group_990";
  let contact_role = "contact_role_990";
  let custom_fields = {};
  let description = "description_990";
  let device = "device_990";
  let fhrpgroup = "fhrpgroup_990";
  let id = 990;
  let ip_address = {};
  let ipaddresses = "ipaddresses_990";
  let name = "name_990";
  let parent_object_id = 990;
  let parent_object_type = "parent_object_type_990";
  let port = "port_990";
  let ports = "ports_990";
  let protocol = "protocol_990";
  let tags = "tags_990";
  let virtual_machine = "virtual_machine_990";
  createService(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  waitForServiceAdded(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  tryToAddExistingService(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  verifyServiceExists(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  updateService(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  deleteService(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  tryToDeleteANonExistingService(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  verifyServiceDoesNotExist(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:Service:nondet:1:2
bthread("crud:Service:nondet:1:2", function () {
<<<<<<< HEAD
  let comments = "comments_1001";
  let custom_fields = {};
  let description = "description_1001";
  let id = 1001;
  let ipaddresses = "ipaddresses_1001";
  let name = "name_1001";
  let parent_object_id = 1001;
  let parent_object_type = "parent_object_type_1001";
  let ports = "ports_1001";
  let protocol = "protocol_1001";
  let tags = "tags_1001";
  createService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToAddExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  updateService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceExists(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  deleteService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToDeleteANonExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceDoesNotExist(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
=======
  let comments = "comments_991";
  let contact = "contact_991";
  let contact_group = "contact_group_991";
  let contact_role = "contact_role_991";
  let custom_fields = {};
  let description = "description_991";
  let device = "device_991";
  let fhrpgroup = "fhrpgroup_991";
  let id = 991;
  let ip_address = {};
  let ipaddresses = "ipaddresses_991";
  let name = "name_991";
  let parent_object_id = 991;
  let parent_object_type = "parent_object_type_991";
  let port = "port_991";
  let ports = "ports_991";
  let protocol = "protocol_991";
  let tags = "tags_991";
  let virtual_machine = "virtual_machine_991";
  createService(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  tryToAddExistingService(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  updateService(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  verifyServiceExists(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  deleteService(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  tryToDeleteANonExistingService(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  verifyServiceDoesNotExist(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:Service:nondet:negative:dup-add
bthread("crud:Service:nondet:negative:dup-add", function () {
<<<<<<< HEAD
  let comments = "comments_1006";
  let custom_fields = {};
  let description = "description_1006";
  let id = 1006;
  let ipaddresses = "ipaddresses_1006";
  let name = "name_1006";
  let parent_object_id = 1006;
  let parent_object_type = "parent_object_type_1006";
  let ports = "ports_1006";
  let protocol = "protocol_1006";
  let tags = "tags_1006";
  createService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceExists(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToAddExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceExists(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
=======
  let comments = "comments_996";
  let contact = "contact_996";
  let contact_group = "contact_group_996";
  let contact_role = "contact_role_996";
  let custom_fields = {};
  let description = "description_996";
  let device = "device_996";
  let fhrpgroup = "fhrpgroup_996";
  let id = 996;
  let ip_address = {};
  let ipaddresses = "ipaddresses_996";
  let name = "name_996";
  let parent_object_id = 996;
  let parent_object_type = "parent_object_type_996";
  let port = "port_996";
  let ports = "ports_996";
  let protocol = "protocol_996";
  let tags = "tags_996";
  let virtual_machine = "virtual_machine_996";
  createService(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  verifyServiceExists(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  tryToAddExistingService(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
  verifyServiceExists(comments, contact, contact_group, contact_role, custom_fields, description, device, fhrpgroup, id, ip_address, ipaddresses, name, parent_object_id, parent_object_type, port, ports, protocol, tags, virtual_machine);
});

// Story: crud:Service:nondet:existing:update
bthread("crud:Service:nondet:existing:update", function () {
  let ev = waitForAnyServiceAdded();
  let args = Object.values(ev);
  block(matchDeletedService.apply(null, args), function () {
    verifyServiceExists.apply(null, args);
    updateService.apply(null, args);
    verifyServiceExists.apply(null, args);
  });
});

// Story: monitor:Service:add
bthread("monitor:Service:add", function () {
  while (true) {
    let ev = waitForAnyServiceAdded();
    block(matchDeletedService(ev.comments, ev.contact, ev.contact_group, ev.contact_role, ev.custom_fields, ev.description, ev.device, ev.fhrpgroup, ev.id, ev.ip_address, ev.ipaddresses, ev.name, ev.parent_object_id, ev.parent_object_type, ev.port, ev.ports, ev.protocol, ev.tags, ev.virtual_machine), function () {
      verifyServiceExists(ev.comments, ev.contact, ev.contact_group, ev.contact_role, ev.custom_fields, ev.description, ev.device, ev.fhrpgroup, ev.id, ev.ip_address, ev.ipaddresses, ev.name, ev.parent_object_id, ev.parent_object_type, ev.port, ev.ports, ev.protocol, ev.tags, ev.virtual_machine);
    });
  }
});

// Story: monitor:Service:deletion
bthread("monitor:Service:deletion", function () {
  while (true) {
    let ev = waitForAnyServiceDeleted();
    block(matchAddedService(ev.comments, ev.contact, ev.contact_group, ev.contact_role, ev.custom_fields, ev.description, ev.device, ev.fhrpgroup, ev.id, ev.ip_address, ev.ipaddresses, ev.name, ev.parent_object_id, ev.parent_object_type, ev.port, ev.ports, ev.protocol, ev.tags, ev.virtual_machine), function () {
      verifyServiceDoesNotExist(ev.comments, ev.contact, ev.contact_group, ev.contact_role, ev.custom_fields, ev.description, ev.device, ev.fhrpgroup, ev.id, ev.ip_address, ev.ipaddresses, ev.name, ev.parent_object_id, ev.parent_object_type, ev.port, ev.ports, ev.protocol, ev.tags, ev.virtual_machine);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:Service:add
bthread("monitor:Service:add", function () {
  while (true) {
    let ev = waitForAnyServiceAdded();
    block(matchDeletedService(ev.comments, ev.custom_fields, ev.description, ev.id, ev.ipaddresses, ev.name, ev.parent_object_id, ev.parent_object_type, ev.ports, ev.protocol, ev.tags), function () {
      verifyServiceExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.ipaddresses, ev.name, ev.parent_object_id, ev.parent_object_type, ev.ports, ev.protocol, ev.tags);
    });
  }
});

// Story: monitor:Service:deletion
bthread("monitor:Service:deletion", function () {
  while (true) {
    let ev = waitForAnyServiceDeleted();
    block(matchAddedService(ev.comments, ev.custom_fields, ev.description, ev.id, ev.ipaddresses, ev.name, ev.parent_object_id, ev.parent_object_type, ev.ports, ev.protocol, ev.tags), function () {
      verifyServiceDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.ipaddresses, ev.name, ev.parent_object_id, ev.parent_object_type, ev.ports, ev.protocol, ev.tags);
    });
  }
});

// Story: crud:VLANGroup:nondet:1:1
bthread("crud:VLANGroup:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1010";
  let id = 1010;
  let name = "name_1010";
  let scope_id = 1010;
  let scope_type = "scope_type_1010";
  let slug = "slug_1010";
  let tags = "tags_1010";
  let tenant = "tenant_1010";
  let vid_ranges = "vid_ranges_1010";
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
  let description = "description_1011";
  let id = 1011;
  let name = "name_1011";
  let scope_id = 1011;
  let scope_type = "scope_type_1011";
  let slug = "slug_1011";
  let tags = "tags_1011";
  let tenant = "tenant_1011";
  let vid_ranges = "vid_ranges_1011";
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
  let description = "description_1016";
  let id = 1016;
  let name = "name_1016";
  let scope_id = 1016;
  let scope_type = "scope_type_1016";
  let slug = "slug_1016";
  let tags = "tags_1016";
  let tenant = "tenant_1016";
  let vid_ranges = "vid_ranges_1016";
  createVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  verifyVLANGroupExists(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  tryToAddExistingVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  verifyVLANGroupExists(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
});

<<<<<<< HEAD
=======
// Story: crud:VLANGroup:nondet:existing:update
bthread("crud:VLANGroup:nondet:existing:update", function () {
  let ev = waitForAnyVLANGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedVLANGroup.apply(null, args), function () {
    verifyVLANGroupExists.apply(null, args);
    updateVLANGroup.apply(null, args);
    verifyVLANGroupExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:VLANGroup:add
bthread("monitor:VLANGroup:add", function () {
  while (true) {
    let ev = waitForAnyVLANGroupAdded();
    block(matchDeletedVLANGroup(ev.custom_fields, ev.description, ev.id, ev.name, ev.scope_id, ev.scope_type, ev.slug, ev.tags, ev.tenant, ev.vid_ranges), function () {
      verifyVLANGroupExists(ev.custom_fields, ev.description, ev.id, ev.name, ev.scope_id, ev.scope_type, ev.slug, ev.tags, ev.tenant, ev.vid_ranges);
    });
  }
});

// Story: monitor:VLANGroup:deletion
bthread("monitor:VLANGroup:deletion", function () {
  while (true) {
    let ev = waitForAnyVLANGroupDeleted();
    block(matchAddedVLANGroup(ev.custom_fields, ev.description, ev.id, ev.name, ev.scope_id, ev.scope_type, ev.slug, ev.tags, ev.tenant, ev.vid_ranges), function () {
      verifyVLANGroupDoesNotExist(ev.custom_fields, ev.description, ev.id, ev.name, ev.scope_id, ev.scope_type, ev.slug, ev.tags, ev.tenant, ev.vid_ranges);
    });
  }
});

<<<<<<< HEAD
// Story: crud:VLANGroupsAvailableVlan:read_only
bthread("crud:VLANGroupsAvailableVlan:read_only", function () {
  let id = 1020;
  verifyVLANGroupsAvailableVlanExists(id);
=======
// Story: crud:AvailableVlan:read_only
bthread("crud:AvailableVlan:read_only", function () {
  let id = 1010;
  verifyAvailableVlanExists(id);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:VLANTranslationPolicy:nondet:1:1
bthread("crud:VLANTranslationPolicy:nondet:1:1", function () {
  let description = "description_1030";
  let id = 1030;
  let name = "name_1030";
  createVLANTranslationPolicy(description, id, name);
  waitForVLANTranslationPolicyAdded(description, id, name);
  tryToAddExistingVLANTranslationPolicy(description, id, name);
  verifyVLANTranslationPolicyExists(description, id, name);
  updateVLANTranslationPolicy(description, id, name);
  deleteVLANTranslationPolicy(description, id, name);
  tryToDeleteANonExistingVLANTranslationPolicy(description, id, name);
  verifyVLANTranslationPolicyDoesNotExist(description, id, name);
});

// Story: crud:VLANTranslationPolicy:nondet:1:2
bthread("crud:VLANTranslationPolicy:nondet:1:2", function () {
  let description = "description_1031";
  let id = 1031;
  let name = "name_1031";
  createVLANTranslationPolicy(description, id, name);
  tryToAddExistingVLANTranslationPolicy(description, id, name);
  updateVLANTranslationPolicy(description, id, name);
  verifyVLANTranslationPolicyExists(description, id, name);
  deleteVLANTranslationPolicy(description, id, name);
  tryToDeleteANonExistingVLANTranslationPolicy(description, id, name);
  verifyVLANTranslationPolicyDoesNotExist(description, id, name);
});

// Story: crud:VLANTranslationPolicy:nondet:negative:dup-add
bthread("crud:VLANTranslationPolicy:nondet:negative:dup-add", function () {
  let description = "description_1036";
  let id = 1036;
  let name = "name_1036";
  createVLANTranslationPolicy(description, id, name);
  verifyVLANTranslationPolicyExists(description, id, name);
  tryToAddExistingVLANTranslationPolicy(description, id, name);
  verifyVLANTranslationPolicyExists(description, id, name);
});

<<<<<<< HEAD
=======
// Story: crud:VLANTranslationPolicy:nondet:existing:update
bthread("crud:VLANTranslationPolicy:nondet:existing:update", function () {
  let ev = waitForAnyVLANTranslationPolicyAdded();
  let args = Object.values(ev);
  block(matchDeletedVLANTranslationPolicy.apply(null, args), function () {
    verifyVLANTranslationPolicyExists.apply(null, args);
    updateVLANTranslationPolicy.apply(null, args);
    verifyVLANTranslationPolicyExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:VLANTranslationPolicy:add
bthread("monitor:VLANTranslationPolicy:add", function () {
  while (true) {
    let ev = waitForAnyVLANTranslationPolicyAdded();
    block(matchDeletedVLANTranslationPolicy(ev.description, ev.id, ev.name), function () {
      verifyVLANTranslationPolicyExists(ev.description, ev.id, ev.name);
    });
  }
});

// Story: monitor:VLANTranslationPolicy:deletion
bthread("monitor:VLANTranslationPolicy:deletion", function () {
  while (true) {
    let ev = waitForAnyVLANTranslationPolicyDeleted();
    block(matchAddedVLANTranslationPolicy(ev.description, ev.id, ev.name), function () {
      verifyVLANTranslationPolicyDoesNotExist(ev.description, ev.id, ev.name);
    });
  }
});

// Story: crud:VLANTranslationRule:nondet:1:1
bthread("crud:VLANTranslationRule:nondet:1:1", function () {
  let description = "description_1040";
  let id = 1040;
  let local_vid = 1040;
  let policy = 1040;
  let remote_vid = 1040;
  createVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  waitForVLANTranslationRuleAdded(description, id, local_vid, policy, remote_vid);
  tryToAddExistingVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  verifyVLANTranslationRuleExists(description, id, local_vid, policy, remote_vid);
  updateVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  deleteVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  tryToDeleteANonExistingVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  verifyVLANTranslationRuleDoesNotExist(description, id, local_vid, policy, remote_vid);
});

// Story: crud:VLANTranslationRule:nondet:1:2
bthread("crud:VLANTranslationRule:nondet:1:2", function () {
  let description = "description_1041";
  let id = 1041;
  let local_vid = 1041;
  let policy = 1041;
  let remote_vid = 1041;
  createVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  tryToAddExistingVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  updateVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  verifyVLANTranslationRuleExists(description, id, local_vid, policy, remote_vid);
  deleteVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  tryToDeleteANonExistingVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  verifyVLANTranslationRuleDoesNotExist(description, id, local_vid, policy, remote_vid);
});

// Story: crud:VLANTranslationRule:nondet:negative:dup-add
bthread("crud:VLANTranslationRule:nondet:negative:dup-add", function () {
  let description = "description_1046";
  let id = 1046;
  let local_vid = 1046;
  let policy = 1046;
  let remote_vid = 1046;
  createVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  verifyVLANTranslationRuleExists(description, id, local_vid, policy, remote_vid);
  tryToAddExistingVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  verifyVLANTranslationRuleExists(description, id, local_vid, policy, remote_vid);
});

<<<<<<< HEAD
=======
// Story: crud:VLANTranslationRule:nondet:existing:update
bthread("crud:VLANTranslationRule:nondet:existing:update", function () {
  let ev = waitForAnyVLANTranslationRuleAdded();
  let args = Object.values(ev);
  block(matchDeletedVLANTranslationRule.apply(null, args), function () {
    verifyVLANTranslationRuleExists.apply(null, args);
    updateVLANTranslationRule.apply(null, args);
    verifyVLANTranslationRuleExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:VLANTranslationRule:add
bthread("monitor:VLANTranslationRule:add", function () {
  while (true) {
    let ev = waitForAnyVLANTranslationRuleAdded();
    block(matchDeletedVLANTranslationRule(ev.description, ev.id, ev.local_vid, ev.policy, ev.remote_vid), function () {
      verifyVLANTranslationRuleExists(ev.description, ev.id, ev.local_vid, ev.policy, ev.remote_vid);
    });
  }
});

// Story: monitor:VLANTranslationRule:deletion
bthread("monitor:VLANTranslationRule:deletion", function () {
  while (true) {
    let ev = waitForAnyVLANTranslationRuleDeleted();
    block(matchAddedVLANTranslationRule(ev.description, ev.id, ev.local_vid, ev.policy, ev.remote_vid), function () {
      verifyVLANTranslationRuleDoesNotExist(ev.description, ev.id, ev.local_vid, ev.policy, ev.remote_vid);
    });
  }
});

// Story: crud:VLAN:nondet:1:1
bthread("crud:VLAN:nondet:1:1", function () {
  let comments = "comments_1050";
  let custom_fields = {};
  let description = "description_1050";
  let group = "group_1050";
  let id = 1050;
  let name = "name_1050";
  let qinq_role = "qinq_role_1050";
  let qinq_svlan = 1050;
  let role = "role_1050";
  let site = "site_1050";
  let status = "status_1050";
  let tags = "tags_1050";
  let tenant = "tenant_1050";
  let vid = 1050;
  createVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  waitForVLANAdded(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  tryToAddExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  verifyVLANExists(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  updateVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  deleteVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  tryToDeleteANonExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  verifyVLANDoesNotExist(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
});

// Story: crud:VLAN:nondet:1:2
bthread("crud:VLAN:nondet:1:2", function () {
  let comments = "comments_1051";
  let custom_fields = {};
  let description = "description_1051";
  let group = "group_1051";
  let id = 1051;
  let name = "name_1051";
  let qinq_role = "qinq_role_1051";
  let qinq_svlan = 1051;
  let role = "role_1051";
  let site = "site_1051";
  let status = "status_1051";
  let tags = "tags_1051";
  let tenant = "tenant_1051";
  let vid = 1051;
  createVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  tryToAddExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  updateVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  verifyVLANExists(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  deleteVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  tryToDeleteANonExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  verifyVLANDoesNotExist(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
});

// Story: crud:VLAN:nondet:negative:dup-add
bthread("crud:VLAN:nondet:negative:dup-add", function () {
  let comments = "comments_1056";
  let custom_fields = {};
  let description = "description_1056";
  let group = "group_1056";
  let id = 1056;
  let name = "name_1056";
  let qinq_role = "qinq_role_1056";
  let qinq_svlan = 1056;
  let role = "role_1056";
  let site = "site_1056";
  let status = "status_1056";
  let tags = "tags_1056";
  let tenant = "tenant_1056";
  let vid = 1056;
  createVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  verifyVLANExists(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  tryToAddExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  verifyVLANExists(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
});

<<<<<<< HEAD
=======
// Story: crud:VLAN:nondet:existing:update
bthread("crud:VLAN:nondet:existing:update", function () {
  let ev = waitForAnyVLANAdded();
  let args = Object.values(ev);
  block(matchDeletedVLAN.apply(null, args), function () {
    verifyVLANExists.apply(null, args);
    updateVLAN.apply(null, args);
    verifyVLANExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:VLAN:add
bthread("monitor:VLAN:add", function () {
  while (true) {
    let ev = waitForAnyVLANAdded();
    block(matchDeletedVLAN(ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.qinq_role, ev.qinq_svlan, ev.role, ev.site, ev.status, ev.tags, ev.tenant, ev.vid), function () {
      verifyVLANExists(ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.qinq_role, ev.qinq_svlan, ev.role, ev.site, ev.status, ev.tags, ev.tenant, ev.vid);
    });
  }
});

// Story: monitor:VLAN:deletion
bthread("monitor:VLAN:deletion", function () {
  while (true) {
    let ev = waitForAnyVLANDeleted();
    block(matchAddedVLAN(ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.qinq_role, ev.qinq_svlan, ev.role, ev.site, ev.status, ev.tags, ev.tenant, ev.vid), function () {
      verifyVLANDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.qinq_role, ev.qinq_svlan, ev.role, ev.site, ev.status, ev.tags, ev.tenant, ev.vid);
    });
  }
});

// Story: crud:VRF:nondet:1:1
bthread("crud:VRF:nondet:1:1", function () {
  let comments = "comments_1060";
  let custom_fields = {};
  let description = "description_1060";
  let enforce_unique = true;
  let export_targets = "export_targets_1060";
  let id = 1060;
  let import_targets = "import_targets_1060";
  let name = "name_1060";
  let rd = "rd_1060";
  let tags = "tags_1060";
  let tenant = "tenant_1060";
  createVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  waitForVRFAdded(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  tryToAddExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  verifyVRFExists(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  updateVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  deleteVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  tryToDeleteANonExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  verifyVRFDoesNotExist(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
});

// Story: crud:VRF:nondet:1:2
bthread("crud:VRF:nondet:1:2", function () {
  let comments = "comments_1061";
  let custom_fields = {};
  let description = "description_1061";
  let enforce_unique = true;
  let export_targets = "export_targets_1061";
  let id = 1061;
  let import_targets = "import_targets_1061";
  let name = "name_1061";
  let rd = "rd_1061";
  let tags = "tags_1061";
  let tenant = "tenant_1061";
  createVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  tryToAddExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  updateVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  verifyVRFExists(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  deleteVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  tryToDeleteANonExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  verifyVRFDoesNotExist(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
});

// Story: crud:VRF:nondet:negative:dup-add
bthread("crud:VRF:nondet:negative:dup-add", function () {
  let comments = "comments_1066";
  let custom_fields = {};
  let description = "description_1066";
  let enforce_unique = true;
  let export_targets = "export_targets_1066";
  let id = 1066;
  let import_targets = "import_targets_1066";
  let name = "name_1066";
  let rd = "rd_1066";
  let tags = "tags_1066";
  let tenant = "tenant_1066";
  createVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  verifyVRFExists(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  tryToAddExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  verifyVRFExists(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
});

<<<<<<< HEAD
=======
// Story: crud:VRF:nondet:existing:update
bthread("crud:VRF:nondet:existing:update", function () {
  let ev = waitForAnyVRFAdded();
  let args = Object.values(ev);
  block(matchDeletedVRF.apply(null, args), function () {
    verifyVRFExists.apply(null, args);
    updateVRF.apply(null, args);
    verifyVRFExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:VRF:add
bthread("monitor:VRF:add", function () {
  while (true) {
    let ev = waitForAnyVRFAdded();
    block(matchDeletedVRF(ev.comments, ev.custom_fields, ev.description, ev.enforce_unique, ev.export_targets, ev.id, ev.import_targets, ev.name, ev.rd, ev.tags, ev.tenant), function () {
      verifyVRFExists(ev.comments, ev.custom_fields, ev.description, ev.enforce_unique, ev.export_targets, ev.id, ev.import_targets, ev.name, ev.rd, ev.tags, ev.tenant);
    });
  }
});

// Story: monitor:VRF:deletion
bthread("monitor:VRF:deletion", function () {
  while (true) {
    let ev = waitForAnyVRFDeleted();
    block(matchAddedVRF(ev.comments, ev.custom_fields, ev.description, ev.enforce_unique, ev.export_targets, ev.id, ev.import_targets, ev.name, ev.rd, ev.tags, ev.tenant), function () {
      verifyVRFDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.enforce_unique, ev.export_targets, ev.id, ev.import_targets, ev.name, ev.rd, ev.tags, ev.tenant);
    });
  }
});

// Story: crud:CircuitGroupAssignment:nondet:1:1
bthread("crud:CircuitGroupAssignment:nondet:1:1", function () {
  let group = "group_1070";
  let id = 1070;
  let member_id = 1070;
  let member_type = "member_type_1070";
  let priority = "priority_1070";
  let tags = "tags_1070";
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
  let group = "group_1071";
  let id = 1071;
  let member_id = 1071;
  let member_type = "member_type_1071";
  let priority = "priority_1071";
  let tags = "tags_1071";
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
  let group = "group_1076";
  let id = 1076;
  let member_id = 1076;
  let member_type = "member_type_1076";
  let priority = "priority_1076";
  let tags = "tags_1076";
  createCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentExists(group, id, member_id, member_type, priority, tags);
  tryToAddExistingCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentExists(group, id, member_id, member_type, priority, tags);
});

<<<<<<< HEAD
=======
// Story: crud:CircuitGroupAssignment:nondet:existing:update
bthread("crud:CircuitGroupAssignment:nondet:existing:update", function () {
  let ev = waitForAnyCircuitGroupAssignmentAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuitGroupAssignment.apply(null, args), function () {
    verifyCircuitGroupAssignmentExists.apply(null, args);
    updateCircuitGroupAssignment.apply(null, args);
    verifyCircuitGroupAssignmentExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:CircuitGroupAssignment:add
bthread("monitor:CircuitGroupAssignment:add", function () {
  while (true) {
    let ev = waitForAnyCircuitGroupAssignmentAdded();
    block(matchDeletedCircuitGroupAssignment(ev.group, ev.id, ev.member_id, ev.member_type, ev.priority, ev.tags), function () {
      verifyCircuitGroupAssignmentExists(ev.group, ev.id, ev.member_id, ev.member_type, ev.priority, ev.tags);
    });
  }
});

// Story: monitor:CircuitGroupAssignment:deletion
bthread("monitor:CircuitGroupAssignment:deletion", function () {
  while (true) {
    let ev = waitForAnyCircuitGroupAssignmentDeleted();
    block(matchAddedCircuitGroupAssignment(ev.group, ev.id, ev.member_id, ev.member_type, ev.priority, ev.tags), function () {
      verifyCircuitGroupAssignmentDoesNotExist(ev.group, ev.id, ev.member_id, ev.member_type, ev.priority, ev.tags);
    });
  }
});

// Story: crud:CircuitGroup:nondet:1:1
bthread("crud:CircuitGroup:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1080";
  let id = 1080;
  let name = "name_1080";
  let slug = "slug_1080";
  let tags = "tags_1080";
  let tenant = "tenant_1080";
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
  let description = "description_1081";
  let id = 1081;
  let name = "name_1081";
  let slug = "slug_1081";
  let tags = "tags_1081";
  let tenant = "tenant_1081";
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
  let description = "description_1086";
  let id = 1086;
  let name = "name_1086";
  let slug = "slug_1086";
  let tags = "tags_1086";
  let tenant = "tenant_1086";
  createCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  verifyCircuitGroupExists(custom_fields, description, id, name, slug, tags, tenant);
  tryToAddExistingCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  verifyCircuitGroupExists(custom_fields, description, id, name, slug, tags, tenant);
});

<<<<<<< HEAD
=======
// Story: crud:CircuitGroup:nondet:existing:update
bthread("crud:CircuitGroup:nondet:existing:update", function () {
  let ev = waitForAnyCircuitGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuitGroup.apply(null, args), function () {
    verifyCircuitGroupExists.apply(null, args);
    updateCircuitGroup.apply(null, args);
    verifyCircuitGroupExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:CircuitGroup:add
bthread("monitor:CircuitGroup:add", function () {
  while (true) {
    let ev = waitForAnyCircuitGroupAdded();
    block(matchDeletedCircuitGroup(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags, ev.tenant), function () {
      verifyCircuitGroupExists(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags, ev.tenant);
    });
  }
});

// Story: monitor:CircuitGroup:deletion
bthread("monitor:CircuitGroup:deletion", function () {
  while (true) {
    let ev = waitForAnyCircuitGroupDeleted();
    block(matchAddedCircuitGroup(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags, ev.tenant), function () {
      verifyCircuitGroupDoesNotExist(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags, ev.tenant);
    });
  }
});

// Story: crud:CircuitTermination:nondet:1:1
bthread("crud:CircuitTermination:nondet:1:1", function () {
  let circuit = "circuit_1090";
  let custom_fields = {};
  let description = "description_1090";
  let id = 1090;
  let mark_connected = true;
  let port_speed = 1090;
  let pp_info = "pp_info_1090";
  let tags = "tags_1090";
  let term_side = "term_side_1090";
  let termination_id = 1090;
  let termination_type = "termination_type_1090";
  let upstream_speed = 1090;
  let xconnect_id = 1090;
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
  let circuit = "circuit_1091";
  let custom_fields = {};
  let description = "description_1091";
  let id = 1091;
  let mark_connected = true;
  let port_speed = 1091;
  let pp_info = "pp_info_1091";
  let tags = "tags_1091";
  let term_side = "term_side_1091";
  let termination_id = 1091;
  let termination_type = "termination_type_1091";
  let upstream_speed = 1091;
  let xconnect_id = 1091;
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
  let circuit = "circuit_1096";
  let custom_fields = {};
  let description = "description_1096";
  let id = 1096;
  let mark_connected = true;
  let port_speed = 1096;
  let pp_info = "pp_info_1096";
  let tags = "tags_1096";
  let term_side = "term_side_1096";
  let termination_id = 1096;
  let termination_type = "termination_type_1096";
  let upstream_speed = 1096;
  let xconnect_id = 1096;
  createCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationExists(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  tryToAddExistingCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationExists(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
});

<<<<<<< HEAD
=======
// Story: crud:CircuitTermination:nondet:existing:update
bthread("crud:CircuitTermination:nondet:existing:update", function () {
  let ev = waitForAnyCircuitTerminationAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuitTermination.apply(null, args), function () {
    verifyCircuitTerminationExists.apply(null, args);
    updateCircuitTermination.apply(null, args);
    verifyCircuitTerminationExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:CircuitTermination:add
bthread("monitor:CircuitTermination:add", function () {
  while (true) {
    let ev = waitForAnyCircuitTerminationAdded();
    block(matchDeletedCircuitTermination(ev.circuit, ev.custom_fields, ev.description, ev.id, ev.mark_connected, ev.port_speed, ev.pp_info, ev.tags, ev.term_side, ev.termination_id, ev.termination_type, ev.upstream_speed, ev.xconnect_id), function () {
      verifyCircuitTerminationExists(ev.circuit, ev.custom_fields, ev.description, ev.id, ev.mark_connected, ev.port_speed, ev.pp_info, ev.tags, ev.term_side, ev.termination_id, ev.termination_type, ev.upstream_speed, ev.xconnect_id);
    });
  }
});

// Story: monitor:CircuitTermination:deletion
bthread("monitor:CircuitTermination:deletion", function () {
  while (true) {
    let ev = waitForAnyCircuitTerminationDeleted();
    block(matchAddedCircuitTermination(ev.circuit, ev.custom_fields, ev.description, ev.id, ev.mark_connected, ev.port_speed, ev.pp_info, ev.tags, ev.term_side, ev.termination_id, ev.termination_type, ev.upstream_speed, ev.xconnect_id), function () {
      verifyCircuitTerminationDoesNotExist(ev.circuit, ev.custom_fields, ev.description, ev.id, ev.mark_connected, ev.port_speed, ev.pp_info, ev.tags, ev.term_side, ev.termination_id, ev.termination_type, ev.upstream_speed, ev.xconnect_id);
    });
  }
});

// Story: crud:CircuitType:nondet:1:1
bthread("crud:CircuitType:nondet:1:1", function () {
  let color = "color_1100";
  let custom_fields = {};
  let description = "description_1100";
  let id = 1100;
  let name = "name_1100";
  let slug = "slug_1100";
  let tags = "tags_1100";
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
  let color = "color_1101";
  let custom_fields = {};
  let description = "description_1101";
  let id = 1101;
  let name = "name_1101";
  let slug = "slug_1101";
  let tags = "tags_1101";
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
  let color = "color_1106";
  let custom_fields = {};
  let description = "description_1106";
  let id = 1106;
  let name = "name_1106";
  let slug = "slug_1106";
  let tags = "tags_1106";
  createCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:CircuitType:nondet:existing:update
bthread("crud:CircuitType:nondet:existing:update", function () {
  let ev = waitForAnyCircuitTypeAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuitType.apply(null, args), function () {
    verifyCircuitTypeExists.apply(null, args);
    updateCircuitType.apply(null, args);
    verifyCircuitTypeExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:CircuitType:add
bthread("monitor:CircuitType:add", function () {
  while (true) {
    let ev = waitForAnyCircuitTypeAdded();
    block(matchDeletedCircuitType(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyCircuitTypeExists(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:CircuitType:deletion
bthread("monitor:CircuitType:deletion", function () {
  while (true) {
    let ev = waitForAnyCircuitTypeDeleted();
    block(matchAddedCircuitType(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyCircuitTypeDoesNotExist(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: crud:Circuit:nondet:1:1
bthread("crud:Circuit:nondet:1:1", function () {
  let assignments = "assignments_1110";
  let cid = 1110;
  let comments = "comments_1110";
  let commit_rate = 1110;
  let custom_fields = {};
  let description = "description_1110";
  let distance = 1110;
  let distance_unit = "distance_unit_1110";
  let id = 1110;
  let install_date = "install_date_1110";
  let provider;
  let provider_account;
  let status = "status_1110";
  let tags = "tags_1110";
  let tenant = "tenant_1110";
  let termination_date = "termination_date_1110";
  let type = "type_1110";
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
  let assignments = "assignments_1111";
  let cid = 1111;
  let comments = "comments_1111";
  let commit_rate = 1111;
  let custom_fields = {};
  let description = "description_1111";
  let distance = 1111;
  let distance_unit = "distance_unit_1111";
  let id = 1111;
  let install_date = "install_date_1111";
  let provider;
  let provider_account;
  let status = "status_1111";
  let tags = "tags_1111";
  let tenant = "tenant_1111";
  let termination_date = "termination_date_1111";
  let type = "type_1111";
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
  let assignments = "assignments_1116";
  let cid = 1116;
  let comments = "comments_1116";
  let commit_rate = 1116;
  let custom_fields = {};
  let description = "description_1116";
  let distance = 1116;
  let distance_unit = "distance_unit_1116";
  let id = 1116;
  let install_date = "install_date_1116";
  let provider;
  let provider_account;
  let status = "status_1116";
  let tags = "tags_1116";
  let tenant = "tenant_1116";
  let termination_date = "termination_date_1116";
  let type = "type_1116";
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

<<<<<<< HEAD
=======
// Story: crud:Circuit:nondet:existing:update
bthread("crud:Circuit:nondet:existing:update", function () {
  let ev = waitForAnyCircuitAdded();
  let args = Object.values(ev);
  block(matchDeletedCircuit.apply(null, args), function () {
    verifyCircuitExists.apply(null, args);
    updateCircuit.apply(null, args);
    verifyCircuitExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Circuit:add
bthread("monitor:Circuit:add", function () {
  while (true) {
    let ev = waitForAnyCircuitAdded();
    block(matchDeletedCircuit(ev.assignments, ev.cid, ev.comments, ev.commit_rate, ev.custom_fields, ev.description, ev.distance, ev.distance_unit, ev.id, ev.install_date, ev.provider, ev.provider_account, ev.status, ev.tags, ev.tenant, ev.termination_date, ev.type), function () {
      verifyCircuitExists(ev.assignments, ev.cid, ev.comments, ev.commit_rate, ev.custom_fields, ev.description, ev.distance, ev.distance_unit, ev.id, ev.install_date, ev.provider, ev.provider_account, ev.status, ev.tags, ev.tenant, ev.termination_date, ev.type);
    });
  }
});

// Story: monitor:Circuit:deletion
bthread("monitor:Circuit:deletion", function () {
  while (true) {
    let ev = waitForAnyCircuitDeleted();
    block(matchAddedCircuit(ev.assignments, ev.cid, ev.comments, ev.commit_rate, ev.custom_fields, ev.description, ev.distance, ev.distance_unit, ev.id, ev.install_date, ev.provider, ev.provider_account, ev.status, ev.tags, ev.tenant, ev.termination_date, ev.type), function () {
      verifyCircuitDoesNotExist(ev.assignments, ev.cid, ev.comments, ev.commit_rate, ev.custom_fields, ev.description, ev.distance, ev.distance_unit, ev.id, ev.install_date, ev.provider, ev.provider_account, ev.status, ev.tags, ev.tenant, ev.termination_date, ev.type);
    });
  }
});

// Story: crud:ProviderAccount:nondet:1:1
bthread("crud:ProviderAccount:nondet:1:1", function () {
  let account = "account_1120";
  let comments = "comments_1120";
  let custom_fields = {};
  let description = "description_1120";
  let id = 1120;
  let name = "name_1120";
  let provider;
  let tags = "tags_1120";
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
  let account = "account_1121";
  let comments = "comments_1121";
  let custom_fields = {};
  let description = "description_1121";
  let id = 1121;
  let name = "name_1121";
  let provider;
  let tags = "tags_1121";
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
  let account = "account_1126";
  let comments = "comments_1126";
  let custom_fields = {};
  let description = "description_1126";
  let id = 1126;
  let name = "name_1126";
  let provider;
  let tags = "tags_1126";
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

<<<<<<< HEAD
=======
// Story: crud:ProviderAccount:nondet:existing:update
bthread("crud:ProviderAccount:nondet:existing:update", function () {
  let ev = waitForAnyProviderAccountAdded();
  let args = Object.values(ev);
  block(matchDeletedProviderAccount.apply(null, args), function () {
    verifyProviderAccountExists.apply(null, args);
    updateProviderAccount.apply(null, args);
    verifyProviderAccountExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ProviderAccount:add
bthread("monitor:ProviderAccount:add", function () {
  while (true) {
    let ev = waitForAnyProviderAccountAdded();
    block(matchDeletedProviderAccount(ev.account, ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.provider, ev.tags), function () {
      verifyProviderAccountExists(ev.account, ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.provider, ev.tags);
    });
  }
});

// Story: monitor:ProviderAccount:deletion
bthread("monitor:ProviderAccount:deletion", function () {
  while (true) {
    let ev = waitForAnyProviderAccountDeleted();
    block(matchAddedProviderAccount(ev.account, ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.provider, ev.tags), function () {
      verifyProviderAccountDoesNotExist(ev.account, ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.provider, ev.tags);
    });
  }
});

// Story: crud:ProviderNetwork:nondet:1:1
bthread("crud:ProviderNetwork:nondet:1:1", function () {
  let comments = "comments_1130";
  let custom_fields = {};
  let description = "description_1130";
  let id = 1130;
  let name = "name_1130";
  let provider;
  let service_id;
  let tags = "tags_1130";
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
  let comments = "comments_1131";
  let custom_fields = {};
  let description = "description_1131";
  let id = 1131;
  let name = "name_1131";
  let provider;
  let service_id;
  let tags = "tags_1131";
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
  let comments = "comments_1136";
  let custom_fields = {};
  let description = "description_1136";
  let id = 1136;
  let name = "name_1136";
  let provider;
  let service_id;
  let tags = "tags_1136";
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

<<<<<<< HEAD
=======
// Story: crud:ProviderNetwork:nondet:existing:update
bthread("crud:ProviderNetwork:nondet:existing:update", function () {
  let ev = waitForAnyProviderNetworkAdded();
  let args = Object.values(ev);
  block(matchDeletedProviderNetwork.apply(null, args), function () {
    verifyProviderNetworkExists.apply(null, args);
    updateProviderNetwork.apply(null, args);
    verifyProviderNetworkExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ProviderNetwork:add
bthread("monitor:ProviderNetwork:add", function () {
  while (true) {
    let ev = waitForAnyProviderNetworkAdded();
    block(matchDeletedProviderNetwork(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.provider, ev.service_id, ev.tags), function () {
      verifyProviderNetworkExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.provider, ev.service_id, ev.tags);
    });
  }
});

// Story: monitor:ProviderNetwork:deletion
bthread("monitor:ProviderNetwork:deletion", function () {
  while (true) {
    let ev = waitForAnyProviderNetworkDeleted();
    block(matchAddedProviderNetwork(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.provider, ev.service_id, ev.tags), function () {
      verifyProviderNetworkDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.provider, ev.service_id, ev.tags);
    });
  }
});

// Story: crud:Provider:nondet:1:1
bthread("crud:Provider:nondet:1:1", function () {
  let accounts = "accounts_1140";
  let asns = "asns_1140";
  let comments = "comments_1140";
  let custom_fields = {};
  let description = "description_1140";
  let id = 1140;
  let name = "name_1140";
  let slug = "slug_1140";
  let tags = "tags_1140";
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
  let accounts = "accounts_1141";
  let asns = "asns_1141";
  let comments = "comments_1141";
  let custom_fields = {};
  let description = "description_1141";
  let id = 1141;
  let name = "name_1141";
  let slug = "slug_1141";
  let tags = "tags_1141";
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
  let accounts = "accounts_1146";
  let asns = "asns_1146";
  let comments = "comments_1146";
  let custom_fields = {};
  let description = "description_1146";
  let id = 1146;
  let name = "name_1146";
  let slug = "slug_1146";
  let tags = "tags_1146";
  createProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderExists(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  tryToAddExistingProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderExists(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:Provider:nondet:existing:update
bthread("crud:Provider:nondet:existing:update", function () {
  let ev = waitForAnyProviderAdded();
  let args = Object.values(ev);
  block(matchDeletedProvider.apply(null, args), function () {
    verifyProviderExists.apply(null, args);
    updateProvider.apply(null, args);
    verifyProviderExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Provider:add
bthread("monitor:Provider:add", function () {
  while (true) {
    let ev = waitForAnyProviderAdded();
    block(matchDeletedProvider(ev.accounts, ev.asns, ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyProviderExists(ev.accounts, ev.asns, ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:Provider:deletion
bthread("monitor:Provider:deletion", function () {
  while (true) {
    let ev = waitForAnyProviderDeleted();
    block(matchAddedProvider(ev.accounts, ev.asns, ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyProviderDoesNotExist(ev.accounts, ev.asns, ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: crud:VirtualCircuitTermination:nondet:1:1
bthread("crud:VirtualCircuitTermination:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1150";
  let id = 1150;
  let _interface = "interface_1150";
  let role = "role_1150";
  let tags = "tags_1150";
  let virtual_circuit = "virtual_circuit_1150";
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
  let description = "description_1151";
  let id = 1151;
  let _interface = "interface_1151";
  let role = "role_1151";
  let tags = "tags_1151";
  let virtual_circuit = "virtual_circuit_1151";
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
  let description = "description_1156";
  let id = 1156;
  let _interface = "interface_1156";
  let role = "role_1156";
  let tags = "tags_1156";
  let virtual_circuit = "virtual_circuit_1156";
  createVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationExists(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  tryToAddExistingVirtualCircuitTermination(custom_fields, description, id, _interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationExists(custom_fields, description, id, _interface, role, tags, virtual_circuit);
});

<<<<<<< HEAD
=======
// Story: crud:VirtualCircuitTermination:nondet:existing:update
bthread("crud:VirtualCircuitTermination:nondet:existing:update", function () {
  let ev = waitForAnyVirtualCircuitTerminationAdded();
  let args = Object.values(ev);
  block(matchDeletedVirtualCircuitTermination.apply(null, args), function () {
    verifyVirtualCircuitTerminationExists.apply(null, args);
    updateVirtualCircuitTermination.apply(null, args);
    verifyVirtualCircuitTerminationExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:VirtualCircuitTermination:add
bthread("monitor:VirtualCircuitTermination:add", function () {
  while (true) {
    let ev = waitForAnyVirtualCircuitTerminationAdded();
    block(matchDeletedVirtualCircuitTermination(ev.custom_fields, ev.description, ev.id, ev._interface, ev.role, ev.tags, ev.virtual_circuit), function () {
      verifyVirtualCircuitTerminationExists(ev.custom_fields, ev.description, ev.id, ev._interface, ev.role, ev.tags, ev.virtual_circuit);
    });
  }
});

// Story: monitor:VirtualCircuitTermination:deletion
bthread("monitor:VirtualCircuitTermination:deletion", function () {
  while (true) {
    let ev = waitForAnyVirtualCircuitTerminationDeleted();
    block(matchAddedVirtualCircuitTermination(ev.custom_fields, ev.description, ev.id, ev._interface, ev.role, ev.tags, ev.virtual_circuit), function () {
      verifyVirtualCircuitTerminationDoesNotExist(ev.custom_fields, ev.description, ev.id, ev._interface, ev.role, ev.tags, ev.virtual_circuit);
    });
  }
});

// Story: crud:VirtualCircuitType:nondet:1:1
bthread("crud:VirtualCircuitType:nondet:1:1", function () {
  let color = "color_1160";
  let custom_fields = {};
  let description = "description_1160";
  let id = 1160;
  let name = "name_1160";
  let slug = "slug_1160";
  let tags = "tags_1160";
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
  let color = "color_1161";
  let custom_fields = {};
  let description = "description_1161";
  let id = 1161;
  let name = "name_1161";
  let slug = "slug_1161";
  let tags = "tags_1161";
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
  let color = "color_1166";
  let custom_fields = {};
  let description = "description_1166";
  let id = 1166;
  let name = "name_1166";
  let slug = "slug_1166";
  let tags = "tags_1166";
  createVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:VirtualCircuitType:nondet:existing:update
bthread("crud:VirtualCircuitType:nondet:existing:update", function () {
  let ev = waitForAnyVirtualCircuitTypeAdded();
  let args = Object.values(ev);
  block(matchDeletedVirtualCircuitType.apply(null, args), function () {
    verifyVirtualCircuitTypeExists.apply(null, args);
    updateVirtualCircuitType.apply(null, args);
    verifyVirtualCircuitTypeExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:VirtualCircuitType:add
bthread("monitor:VirtualCircuitType:add", function () {
  while (true) {
    let ev = waitForAnyVirtualCircuitTypeAdded();
    block(matchDeletedVirtualCircuitType(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyVirtualCircuitTypeExists(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:VirtualCircuitType:deletion
bthread("monitor:VirtualCircuitType:deletion", function () {
  while (true) {
    let ev = waitForAnyVirtualCircuitTypeDeleted();
    block(matchAddedVirtualCircuitType(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyVirtualCircuitTypeDoesNotExist(ev.color, ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: crud:VirtualCircuit:nondet:1:1
bthread("crud:VirtualCircuit:nondet:1:1", function () {
  let cid = 1170;
  let comments = "comments_1170";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_1170";
  let id = 1170;
  let provider_account;
  let provider_network;
  let status = "status_1170";
  let tags = "tags_1170";
  let tenant = "tenant_1170";
  let type = "type_1170";
=======
  let description = "description_1160";
  let id = 1160;
  let provider;
  let provider_account;
  let provider_network;
  let provider_network_id;
  let status = "status_1160";
  let tags = "tags_1160";
  let tenant = "tenant_1160";
  let tenant_group = "tenant_group_1160";
  let type = "type_1160";
>>>>>>> 1302d9a (Fix emitter bugs)
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
  let cid = 1171;
  let comments = "comments_1171";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_1171";
  let id = 1171;
  let provider_account;
  let provider_network;
  let status = "status_1171";
  let tags = "tags_1171";
  let tenant = "tenant_1171";
  let type = "type_1171";
=======
  let description = "description_1161";
  let id = 1161;
  let provider;
  let provider_account;
  let provider_network;
  let provider_network_id;
  let status = "status_1161";
  let tags = "tags_1161";
  let tenant = "tenant_1161";
  let tenant_group = "tenant_group_1161";
  let type = "type_1161";
>>>>>>> 1302d9a (Fix emitter bugs)
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
<<<<<<< HEAD
  createVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  tryToAddExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  updateVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  deleteVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  tryToDeleteANonExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  verifyVirtualCircuitDoesNotExist(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
=======
  provider_network_id = captured["provider_network_id"];
  createVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  tryToAddExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  updateVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  deleteVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  tryToDeleteANonExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  verifyVirtualCircuitDoesNotExist(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:VirtualCircuit:nondet:negative:dup-add
bthread("crud:VirtualCircuit:nondet:negative:dup-add", function () {
  let cid = 1176;
  let comments = "comments_1176";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_1176";
  let id = 1176;
  let provider_account;
  let provider_network;
  let status = "status_1176";
  let tags = "tags_1176";
  let tenant = "tenant_1176";
  let type = "type_1176";
=======
  let description = "description_1166";
  let id = 1166;
  let provider;
  let provider_account;
  let provider_network;
  let provider_network_id;
  let status = "status_1166";
  let tags = "tags_1166";
  let tenant = "tenant_1166";
  let tenant_group = "tenant_group_1166";
  let type = "type_1166";
>>>>>>> 1302d9a (Fix emitter bugs)
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
<<<<<<< HEAD
  createVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  tryToAddExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
=======
  provider_network_id = captured["provider_network_id"];
  createVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  tryToAddExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider, provider_account, provider_network, provider_network_id, status, tags, tenant, tenant_group, type);
});

// Story: crud:VirtualCircuit:nondet:existing:update
bthread("crud:VirtualCircuit:nondet:existing:update", function () {
  let ev = waitForAnyVirtualCircuitAdded();
  let args = Object.values(ev);
  block(matchDeletedVirtualCircuit.apply(null, args), function () {
    verifyVirtualCircuitExists.apply(null, args);
    updateVirtualCircuit.apply(null, args);
    verifyVirtualCircuitExists.apply(null, args);
  });
});

// Story: monitor:VirtualCircuit:add
bthread("monitor:VirtualCircuit:add", function () {
  while (true) {
    let ev = waitForAnyVirtualCircuitAdded();
    block(matchDeletedVirtualCircuit(ev.cid, ev.comments, ev.custom_fields, ev.description, ev.id, ev.provider, ev.provider_account, ev.provider_network, ev.provider_network_id, ev.status, ev.tags, ev.tenant, ev.tenant_group, ev.type), function () {
      verifyVirtualCircuitExists(ev.cid, ev.comments, ev.custom_fields, ev.description, ev.id, ev.provider, ev.provider_account, ev.provider_network, ev.provider_network_id, ev.status, ev.tags, ev.tenant, ev.tenant_group, ev.type);
    });
  }
});

// Story: monitor:VirtualCircuit:deletion
bthread("monitor:VirtualCircuit:deletion", function () {
  while (true) {
    let ev = waitForAnyVirtualCircuitDeleted();
    block(matchAddedVirtualCircuit(ev.cid, ev.comments, ev.custom_fields, ev.description, ev.id, ev.provider, ev.provider_account, ev.provider_network, ev.provider_network_id, ev.status, ev.tags, ev.tenant, ev.tenant_group, ev.type), function () {
      verifyVirtualCircuitDoesNotExist(ev.cid, ev.comments, ev.custom_fields, ev.description, ev.id, ev.provider, ev.provider_account, ev.provider_network, ev.provider_network_id, ev.status, ev.tags, ev.tenant, ev.tenant_group, ev.type);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:VirtualCircuit:add
bthread("monitor:VirtualCircuit:add", function () {
  while (true) {
    let ev = waitForAnyVirtualCircuitAdded();
    block(matchDeletedVirtualCircuit(ev.cid, ev.comments, ev.custom_fields, ev.description, ev.id, ev.provider_account, ev.provider_network, ev.status, ev.tags, ev.tenant, ev.type), function () {
      verifyVirtualCircuitExists(ev.cid, ev.comments, ev.custom_fields, ev.description, ev.id, ev.provider_account, ev.provider_network, ev.status, ev.tags, ev.tenant, ev.type);
    });
  }
});

// Story: monitor:VirtualCircuit:deletion
bthread("monitor:VirtualCircuit:deletion", function () {
  while (true) {
    let ev = waitForAnyVirtualCircuitDeleted();
    block(matchAddedVirtualCircuit(ev.cid, ev.comments, ev.custom_fields, ev.description, ev.id, ev.provider_account, ev.provider_network, ev.status, ev.tags, ev.tenant, ev.type), function () {
      verifyVirtualCircuitDoesNotExist(ev.cid, ev.comments, ev.custom_fields, ev.description, ev.id, ev.provider_account, ev.provider_network, ev.status, ev.tags, ev.tenant, ev.type);
    });
  }
});

// Story: crud:BackgroundQueue:read_only
bthread("crud:BackgroundQueue:read_only", function () {
  let name = 1180;
  verifyBackgroundQueueExists(name);
});

// Story: crud:BackgroundTask:read_only
bthread("crud:BackgroundTask:read_only", function () {
  let id = 1190;
  verifyBackgroundTaskExists(id);
});

// Story: crud:BackgroundWorker:read_only
bthread("crud:BackgroundWorker:read_only", function () {
  let name = 1200;
  verifyBackgroundWorkerExists(name);
});

// Story: crud:DataFile:read_only
bthread("crud:DataFile:read_only", function () {
  let id = 1210;
  verifyDataFileExists(id);
});

// Story: crud:DataSource:nondet:1:1
bthread("crud:DataSource:nondet:1:1", function () {
  let comments = "comments_1220";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_1220";
  let enabled = true;
  let id = 1220;
  let ignore_rules = "ignore_rules_1220";
  let name = "name_1220";
  let parameters = "parameters_1220";
  let source_url = "source_url_1220";
  let sync_interval = 1220;
  let type = "type_1220";
  createDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  waitForDataSourceAdded(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  tryToAddExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  updateDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  deleteDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  tryToDeleteANonExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  verifyDataSourceDoesNotExist(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
=======
  let description = "description_1210";
  let enabled = "enabled_1210";
  let id = 1210;
  let ignore_rules = "ignore_rules_1210";
  let name = "name_1210";
  let parameters = "parameters_1210";
  let source_url = "source_url_1210";
  let status = "status_1210";
  let sync_interval = 1210;
  let tag = "tag_1210";
  let type = "type_1210";
  createDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  waitForDataSourceAdded(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  tryToAddExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  updateDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  deleteDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  tryToDeleteANonExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  verifyDataSourceDoesNotExist(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:DataSource:nondet:1:2
bthread("crud:DataSource:nondet:1:2", function () {
  let comments = "comments_1221";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_1221";
  let enabled = true;
  let id = 1221;
  let ignore_rules = "ignore_rules_1221";
  let name = "name_1221";
  let parameters = "parameters_1221";
  let source_url = "source_url_1221";
  let sync_interval = 1221;
  let type = "type_1221";
  createDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  tryToAddExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  updateDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  deleteDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  tryToDeleteANonExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  verifyDataSourceDoesNotExist(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
=======
  let description = "description_1211";
  let enabled = "enabled_1211";
  let id = 1211;
  let ignore_rules = "ignore_rules_1211";
  let name = "name_1211";
  let parameters = "parameters_1211";
  let source_url = "source_url_1211";
  let status = "status_1211";
  let sync_interval = 1211;
  let tag = "tag_1211";
  let type = "type_1211";
  createDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  tryToAddExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  updateDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  deleteDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  tryToDeleteANonExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  verifyDataSourceDoesNotExist(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:DataSource:nondet:negative:dup-add
bthread("crud:DataSource:nondet:negative:dup-add", function () {
  let comments = "comments_1226";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_1226";
  let enabled = true;
  let id = 1226;
  let ignore_rules = "ignore_rules_1226";
  let name = "name_1226";
  let parameters = "parameters_1226";
  let source_url = "source_url_1226";
  let sync_interval = 1226;
  let type = "type_1226";
  createDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  tryToAddExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
=======
  let description = "description_1216";
  let enabled = "enabled_1216";
  let id = 1216;
  let ignore_rules = "ignore_rules_1216";
  let name = "name_1216";
  let parameters = "parameters_1216";
  let source_url = "source_url_1216";
  let status = "status_1216";
  let sync_interval = 1216;
  let tag = "tag_1216";
  let type = "type_1216";
  createDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  tryToAddExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, status, sync_interval, tag, type);
});

// Story: crud:DataSource:nondet:existing:update
bthread("crud:DataSource:nondet:existing:update", function () {
  let ev = waitForAnyDataSourceAdded();
  let args = Object.values(ev);
  block(matchDeletedDataSource.apply(null, args), function () {
    verifyDataSourceExists.apply(null, args);
    updateDataSource.apply(null, args);
    verifyDataSourceExists.apply(null, args);
  });
});

// Story: monitor:DataSource:add
bthread("monitor:DataSource:add", function () {
  while (true) {
    let ev = waitForAnyDataSourceAdded();
    block(matchDeletedDataSource(ev.comments, ev.custom_fields, ev.description, ev.enabled, ev.id, ev.ignore_rules, ev.name, ev.parameters, ev.source_url, ev.status, ev.sync_interval, ev.tag, ev.type), function () {
      verifyDataSourceExists(ev.comments, ev.custom_fields, ev.description, ev.enabled, ev.id, ev.ignore_rules, ev.name, ev.parameters, ev.source_url, ev.status, ev.sync_interval, ev.tag, ev.type);
    });
  }
});

// Story: monitor:DataSource:deletion
bthread("monitor:DataSource:deletion", function () {
  while (true) {
    let ev = waitForAnyDataSourceDeleted();
    block(matchAddedDataSource(ev.comments, ev.custom_fields, ev.description, ev.enabled, ev.id, ev.ignore_rules, ev.name, ev.parameters, ev.source_url, ev.status, ev.sync_interval, ev.tag, ev.type), function () {
      verifyDataSourceDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.enabled, ev.id, ev.ignore_rules, ev.name, ev.parameters, ev.source_url, ev.status, ev.sync_interval, ev.tag, ev.type);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:DataSource:add
bthread("monitor:DataSource:add", function () {
  while (true) {
    let ev = waitForAnyDataSourceAdded();
    block(matchDeletedDataSource(ev.comments, ev.custom_fields, ev.description, ev.enabled, ev.id, ev.ignore_rules, ev.name, ev.parameters, ev.source_url, ev.sync_interval, ev.type), function () {
      verifyDataSourceExists(ev.comments, ev.custom_fields, ev.description, ev.enabled, ev.id, ev.ignore_rules, ev.name, ev.parameters, ev.source_url, ev.sync_interval, ev.type);
    });
  }
});

// Story: monitor:DataSource:deletion
bthread("monitor:DataSource:deletion", function () {
  while (true) {
    let ev = waitForAnyDataSourceDeleted();
    block(matchAddedDataSource(ev.comments, ev.custom_fields, ev.description, ev.enabled, ev.id, ev.ignore_rules, ev.name, ev.parameters, ev.source_url, ev.sync_interval, ev.type), function () {
      verifyDataSourceDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.enabled, ev.id, ev.ignore_rules, ev.name, ev.parameters, ev.source_url, ev.sync_interval, ev.type);
    });
  }
});

// Story: crud:Job:read_only
bthread("crud:Job:read_only", function () {
<<<<<<< HEAD
  let id = 1230;
  verifyJobExists(id);
=======
  let id = 1220;
  let name = "name_1220";
  verifyJobExists(id, name);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:ObjectChange:read_only
bthread("crud:ObjectChange:read_only", function () {
  let id = 1240;
  verifyObjectChangeExists(id);
});

// Story: crud:IKEPolicy:nondet:1:1
bthread("crud:IKEPolicy:nondet:1:1", function () {
  let comments = "comments_1250";
  let custom_fields = {};
  let description = "description_1250";
  let id = 1250;
  let mode = "mode_1250";
  let name = "name_1250";
  let preshared_key = "preshared_key_1250";
  let proposals = "proposals_1250";
  let tags = "tags_1250";
  let version = 1250;
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
  let comments = "comments_1251";
  let custom_fields = {};
  let description = "description_1251";
  let id = 1251;
  let mode = "mode_1251";
  let name = "name_1251";
  let preshared_key = "preshared_key_1251";
  let proposals = "proposals_1251";
  let tags = "tags_1251";
  let version = 1251;
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
  let comments = "comments_1256";
  let custom_fields = {};
  let description = "description_1256";
  let id = 1256;
  let mode = "mode_1256";
  let name = "name_1256";
  let preshared_key = "preshared_key_1256";
  let proposals = "proposals_1256";
  let tags = "tags_1256";
  let version = 1256;
  createIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyExists(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  tryToAddExistingIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyExists(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
});

<<<<<<< HEAD
=======
// Story: crud:IKEPolicy:nondet:existing:update
bthread("crud:IKEPolicy:nondet:existing:update", function () {
  let ev = waitForAnyIKEPolicyAdded();
  let args = Object.values(ev);
  block(matchDeletedIKEPolicy.apply(null, args), function () {
    verifyIKEPolicyExists.apply(null, args);
    updateIKEPolicy.apply(null, args);
    verifyIKEPolicyExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:IKEPolicy:add
bthread("monitor:IKEPolicy:add", function () {
  while (true) {
    let ev = waitForAnyIKEPolicyAdded();
    block(matchDeletedIKEPolicy(ev.comments, ev.custom_fields, ev.description, ev.id, ev.mode, ev.name, ev.preshared_key, ev.proposals, ev.tags, ev.version), function () {
      verifyIKEPolicyExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.mode, ev.name, ev.preshared_key, ev.proposals, ev.tags, ev.version);
    });
  }
});

// Story: monitor:IKEPolicy:deletion
bthread("monitor:IKEPolicy:deletion", function () {
  while (true) {
    let ev = waitForAnyIKEPolicyDeleted();
    block(matchAddedIKEPolicy(ev.comments, ev.custom_fields, ev.description, ev.id, ev.mode, ev.name, ev.preshared_key, ev.proposals, ev.tags, ev.version), function () {
      verifyIKEPolicyDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.mode, ev.name, ev.preshared_key, ev.proposals, ev.tags, ev.version);
    });
  }
});

// Story: crud:IKEProposal:nondet:1:1
bthread("crud:IKEProposal:nondet:1:1", function () {
  let authentication_algorithm = "authentication_algorithm_1260";
  let authentication_method = "authentication_method_1260";
  let comments = "comments_1260";
  let custom_fields = {};
  let description = "description_1260";
  let encryption_algorithm = "encryption_algorithm_1260";
  let group = 1260;
  let id = 1260;
  let name = "name_1260";
  let sa_lifetime = 1260;
  let tags = "tags_1260";
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
  let authentication_algorithm = "authentication_algorithm_1261";
  let authentication_method = "authentication_method_1261";
  let comments = "comments_1261";
  let custom_fields = {};
  let description = "description_1261";
  let encryption_algorithm = "encryption_algorithm_1261";
  let group = 1261;
  let id = 1261;
  let name = "name_1261";
  let sa_lifetime = 1261;
  let tags = "tags_1261";
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
  let authentication_algorithm = "authentication_algorithm_1266";
  let authentication_method = "authentication_method_1266";
  let comments = "comments_1266";
  let custom_fields = {};
  let description = "description_1266";
  let encryption_algorithm = "encryption_algorithm_1266";
  let group = 1266;
  let id = 1266;
  let name = "name_1266";
  let sa_lifetime = 1266;
  let tags = "tags_1266";
  createIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalExists(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  tryToAddExistingIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalExists(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
});

<<<<<<< HEAD
=======
// Story: crud:IKEProposal:nondet:existing:update
bthread("crud:IKEProposal:nondet:existing:update", function () {
  let ev = waitForAnyIKEProposalAdded();
  let args = Object.values(ev);
  block(matchDeletedIKEProposal.apply(null, args), function () {
    verifyIKEProposalExists.apply(null, args);
    updateIKEProposal.apply(null, args);
    verifyIKEProposalExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:IKEProposal:add
bthread("monitor:IKEProposal:add", function () {
  while (true) {
    let ev = waitForAnyIKEProposalAdded();
    block(matchDeletedIKEProposal(ev.authentication_algorithm, ev.authentication_method, ev.comments, ev.custom_fields, ev.description, ev.encryption_algorithm, ev.group, ev.id, ev.name, ev.sa_lifetime, ev.tags), function () {
      verifyIKEProposalExists(ev.authentication_algorithm, ev.authentication_method, ev.comments, ev.custom_fields, ev.description, ev.encryption_algorithm, ev.group, ev.id, ev.name, ev.sa_lifetime, ev.tags);
    });
  }
});

// Story: monitor:IKEProposal:deletion
bthread("monitor:IKEProposal:deletion", function () {
  while (true) {
    let ev = waitForAnyIKEProposalDeleted();
    block(matchAddedIKEProposal(ev.authentication_algorithm, ev.authentication_method, ev.comments, ev.custom_fields, ev.description, ev.encryption_algorithm, ev.group, ev.id, ev.name, ev.sa_lifetime, ev.tags), function () {
      verifyIKEProposalDoesNotExist(ev.authentication_algorithm, ev.authentication_method, ev.comments, ev.custom_fields, ev.description, ev.encryption_algorithm, ev.group, ev.id, ev.name, ev.sa_lifetime, ev.tags);
    });
  }
});

// Story: crud:IPSecPolicy:nondet:1:1
bthread("crud:IPSecPolicy:nondet:1:1", function () {
  let comments = "comments_1270";
  let custom_fields = {};
  let description = "description_1270";
  let id = 1270;
  let name = "name_1270";
  let pfs_group = 1270;
  let proposals = "proposals_1270";
  let tags = "tags_1270";
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
  let comments = "comments_1271";
  let custom_fields = {};
  let description = "description_1271";
  let id = 1271;
  let name = "name_1271";
  let pfs_group = 1271;
  let proposals = "proposals_1271";
  let tags = "tags_1271";
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
  let comments = "comments_1276";
  let custom_fields = {};
  let description = "description_1276";
  let id = 1276;
  let name = "name_1276";
  let pfs_group = 1276;
  let proposals = "proposals_1276";
  let tags = "tags_1276";
  createIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyExists(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  tryToAddExistingIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyExists(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
});

<<<<<<< HEAD
=======
// Story: crud:IPSecPolicy:nondet:existing:update
bthread("crud:IPSecPolicy:nondet:existing:update", function () {
  let ev = waitForAnyIPSecPolicyAdded();
  let args = Object.values(ev);
  block(matchDeletedIPSecPolicy.apply(null, args), function () {
    verifyIPSecPolicyExists.apply(null, args);
    updateIPSecPolicy.apply(null, args);
    verifyIPSecPolicyExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:IPSecPolicy:add
bthread("monitor:IPSecPolicy:add", function () {
  while (true) {
    let ev = waitForAnyIPSecPolicyAdded();
    block(matchDeletedIPSecPolicy(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.pfs_group, ev.proposals, ev.tags), function () {
      verifyIPSecPolicyExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.pfs_group, ev.proposals, ev.tags);
    });
  }
});

// Story: monitor:IPSecPolicy:deletion
bthread("monitor:IPSecPolicy:deletion", function () {
  while (true) {
    let ev = waitForAnyIPSecPolicyDeleted();
    block(matchAddedIPSecPolicy(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.pfs_group, ev.proposals, ev.tags), function () {
      verifyIPSecPolicyDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.pfs_group, ev.proposals, ev.tags);
    });
  }
});

// Story: crud:IPSecProfile:nondet:1:1
bthread("crud:IPSecProfile:nondet:1:1", function () {
  let comments = "comments_1280";
  let custom_fields = {};
  let description = "description_1280";
  let id = 1280;
  let ike_policy = "ike_policy_1280";
  let ipsec_policy = "ipsec_policy_1280";
  let mode = "mode_1280";
  let name = "name_1280";
  let tags = "tags_1280";
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
  let comments = "comments_1281";
  let custom_fields = {};
  let description = "description_1281";
  let id = 1281;
  let ike_policy = "ike_policy_1281";
  let ipsec_policy = "ipsec_policy_1281";
  let mode = "mode_1281";
  let name = "name_1281";
  let tags = "tags_1281";
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
  let comments = "comments_1286";
  let custom_fields = {};
  let description = "description_1286";
  let id = 1286;
  let ike_policy = "ike_policy_1286";
  let ipsec_policy = "ipsec_policy_1286";
  let mode = "mode_1286";
  let name = "name_1286";
  let tags = "tags_1286";
  createIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileExists(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  tryToAddExistingIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileExists(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
});

<<<<<<< HEAD
=======
// Story: crud:IPSecProfile:nondet:existing:update
bthread("crud:IPSecProfile:nondet:existing:update", function () {
  let ev = waitForAnyIPSecProfileAdded();
  let args = Object.values(ev);
  block(matchDeletedIPSecProfile.apply(null, args), function () {
    verifyIPSecProfileExists.apply(null, args);
    updateIPSecProfile.apply(null, args);
    verifyIPSecProfileExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:IPSecProfile:add
bthread("monitor:IPSecProfile:add", function () {
  while (true) {
    let ev = waitForAnyIPSecProfileAdded();
    block(matchDeletedIPSecProfile(ev.comments, ev.custom_fields, ev.description, ev.id, ev.ike_policy, ev.ipsec_policy, ev.mode, ev.name, ev.tags), function () {
      verifyIPSecProfileExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.ike_policy, ev.ipsec_policy, ev.mode, ev.name, ev.tags);
    });
  }
});

// Story: monitor:IPSecProfile:deletion
bthread("monitor:IPSecProfile:deletion", function () {
  while (true) {
    let ev = waitForAnyIPSecProfileDeleted();
    block(matchAddedIPSecProfile(ev.comments, ev.custom_fields, ev.description, ev.id, ev.ike_policy, ev.ipsec_policy, ev.mode, ev.name, ev.tags), function () {
      verifyIPSecProfileDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.ike_policy, ev.ipsec_policy, ev.mode, ev.name, ev.tags);
    });
  }
});

// Story: crud:IPSecProposal:nondet:1:1
bthread("crud:IPSecProposal:nondet:1:1", function () {
  let authentication_algorithm = "authentication_algorithm_1290";
  let comments = "comments_1290";
  let custom_fields = {};
  let description = "description_1290";
  let encryption_algorithm = "encryption_algorithm_1290";
  let id = 1290;
  let name = "name_1290";
  let sa_lifetime_data = 1290;
  let sa_lifetime_seconds = 1290;
  let tags = "tags_1290";
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
  let authentication_algorithm = "authentication_algorithm_1291";
  let comments = "comments_1291";
  let custom_fields = {};
  let description = "description_1291";
  let encryption_algorithm = "encryption_algorithm_1291";
  let id = 1291;
  let name = "name_1291";
  let sa_lifetime_data = 1291;
  let sa_lifetime_seconds = 1291;
  let tags = "tags_1291";
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
  let authentication_algorithm = "authentication_algorithm_1296";
  let comments = "comments_1296";
  let custom_fields = {};
  let description = "description_1296";
  let encryption_algorithm = "encryption_algorithm_1296";
  let id = 1296;
  let name = "name_1296";
  let sa_lifetime_data = 1296;
  let sa_lifetime_seconds = 1296;
  let tags = "tags_1296";
  createIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalExists(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  tryToAddExistingIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalExists(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
});

<<<<<<< HEAD
=======
// Story: crud:IPSecProposal:nondet:existing:update
bthread("crud:IPSecProposal:nondet:existing:update", function () {
  let ev = waitForAnyIPSecProposalAdded();
  let args = Object.values(ev);
  block(matchDeletedIPSecProposal.apply(null, args), function () {
    verifyIPSecProposalExists.apply(null, args);
    updateIPSecProposal.apply(null, args);
    verifyIPSecProposalExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:IPSecProposal:add
bthread("monitor:IPSecProposal:add", function () {
  while (true) {
    let ev = waitForAnyIPSecProposalAdded();
    block(matchDeletedIPSecProposal(ev.authentication_algorithm, ev.comments, ev.custom_fields, ev.description, ev.encryption_algorithm, ev.id, ev.name, ev.sa_lifetime_data, ev.sa_lifetime_seconds, ev.tags), function () {
      verifyIPSecProposalExists(ev.authentication_algorithm, ev.comments, ev.custom_fields, ev.description, ev.encryption_algorithm, ev.id, ev.name, ev.sa_lifetime_data, ev.sa_lifetime_seconds, ev.tags);
    });
  }
});

// Story: monitor:IPSecProposal:deletion
bthread("monitor:IPSecProposal:deletion", function () {
  while (true) {
    let ev = waitForAnyIPSecProposalDeleted();
    block(matchAddedIPSecProposal(ev.authentication_algorithm, ev.comments, ev.custom_fields, ev.description, ev.encryption_algorithm, ev.id, ev.name, ev.sa_lifetime_data, ev.sa_lifetime_seconds, ev.tags), function () {
      verifyIPSecProposalDoesNotExist(ev.authentication_algorithm, ev.comments, ev.custom_fields, ev.description, ev.encryption_algorithm, ev.id, ev.name, ev.sa_lifetime_data, ev.sa_lifetime_seconds, ev.tags);
    });
  }
});

// Story: crud:L2VPNTermination:nondet:1:1
bthread("crud:L2VPNTermination:nondet:1:1", function () {
  let assigned_object_id = 1300;
  let assigned_object_type = "assigned_object_type_1300";
  let custom_fields = {};
  let id = 1300;
  let l2vpn = "l2vpn_1300";
  let tags = "tags_1300";
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
  let assigned_object_id = 1301;
  let assigned_object_type = "assigned_object_type_1301";
  let custom_fields = {};
  let id = 1301;
  let l2vpn = "l2vpn_1301";
  let tags = "tags_1301";
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
  let assigned_object_id = 1306;
  let assigned_object_type = "assigned_object_type_1306";
  let custom_fields = {};
  let id = 1306;
  let l2vpn = "l2vpn_1306";
  let tags = "tags_1306";
  createL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationExists(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  tryToAddExistingL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationExists(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
});

<<<<<<< HEAD
=======
// Story: crud:L2VPNTermination:nondet:existing:update
bthread("crud:L2VPNTermination:nondet:existing:update", function () {
  let ev = waitForAnyL2VPNTerminationAdded();
  let args = Object.values(ev);
  block(matchDeletedL2VPNTermination.apply(null, args), function () {
    verifyL2VPNTerminationExists.apply(null, args);
    updateL2VPNTermination.apply(null, args);
    verifyL2VPNTerminationExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:L2VPNTermination:add
bthread("monitor:L2VPNTermination:add", function () {
  while (true) {
    let ev = waitForAnyL2VPNTerminationAdded();
    block(matchDeletedL2VPNTermination(ev.assigned_object_id, ev.assigned_object_type, ev.custom_fields, ev.id, ev.l2vpn, ev.tags), function () {
      verifyL2VPNTerminationExists(ev.assigned_object_id, ev.assigned_object_type, ev.custom_fields, ev.id, ev.l2vpn, ev.tags);
    });
  }
});

// Story: monitor:L2VPNTermination:deletion
bthread("monitor:L2VPNTermination:deletion", function () {
  while (true) {
    let ev = waitForAnyL2VPNTerminationDeleted();
    block(matchAddedL2VPNTermination(ev.assigned_object_id, ev.assigned_object_type, ev.custom_fields, ev.id, ev.l2vpn, ev.tags), function () {
      verifyL2VPNTerminationDoesNotExist(ev.assigned_object_id, ev.assigned_object_type, ev.custom_fields, ev.id, ev.l2vpn, ev.tags);
    });
  }
});

// Story: crud:L2VPN:nondet:1:1
bthread("crud:L2VPN:nondet:1:1", function () {
  let comments = "comments_1310";
  let custom_fields = {};
  let description = "description_1310";
  let export_targets = "export_targets_1310";
  let id = 1310;
  let identifier = 1310;
  let import_targets = "import_targets_1310";
  let name = "name_1310";
  let slug = "slug_1310";
  let status = "status_1310";
  let tags = "tags_1310";
  let tenant = "tenant_1310";
  let type = "type_1310";
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
  let comments = "comments_1311";
  let custom_fields = {};
  let description = "description_1311";
  let export_targets = "export_targets_1311";
  let id = 1311;
  let identifier = 1311;
  let import_targets = "import_targets_1311";
  let name = "name_1311";
  let slug = "slug_1311";
  let status = "status_1311";
  let tags = "tags_1311";
  let tenant = "tenant_1311";
  let type = "type_1311";
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
  let comments = "comments_1316";
  let custom_fields = {};
  let description = "description_1316";
  let export_targets = "export_targets_1316";
  let id = 1316;
  let identifier = 1316;
  let import_targets = "import_targets_1316";
  let name = "name_1316";
  let slug = "slug_1316";
  let status = "status_1316";
  let tags = "tags_1316";
  let tenant = "tenant_1316";
  let type = "type_1316";
  createL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNExists(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  tryToAddExistingL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNExists(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
});

<<<<<<< HEAD
=======
// Story: crud:L2VPN:nondet:existing:update
bthread("crud:L2VPN:nondet:existing:update", function () {
  let ev = waitForAnyL2VPNAdded();
  let args = Object.values(ev);
  block(matchDeletedL2VPN.apply(null, args), function () {
    verifyL2VPNExists.apply(null, args);
    updateL2VPN.apply(null, args);
    verifyL2VPNExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:L2VPN:add
bthread("monitor:L2VPN:add", function () {
  while (true) {
    let ev = waitForAnyL2VPNAdded();
    block(matchDeletedL2VPN(ev.comments, ev.custom_fields, ev.description, ev.export_targets, ev.id, ev.identifier, ev.import_targets, ev.name, ev.slug, ev.status, ev.tags, ev.tenant, ev.type), function () {
      verifyL2VPNExists(ev.comments, ev.custom_fields, ev.description, ev.export_targets, ev.id, ev.identifier, ev.import_targets, ev.name, ev.slug, ev.status, ev.tags, ev.tenant, ev.type);
    });
  }
});

// Story: monitor:L2VPN:deletion
bthread("monitor:L2VPN:deletion", function () {
  while (true) {
    let ev = waitForAnyL2VPNDeleted();
    block(matchAddedL2VPN(ev.comments, ev.custom_fields, ev.description, ev.export_targets, ev.id, ev.identifier, ev.import_targets, ev.name, ev.slug, ev.status, ev.tags, ev.tenant, ev.type), function () {
      verifyL2VPNDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.export_targets, ev.id, ev.identifier, ev.import_targets, ev.name, ev.slug, ev.status, ev.tags, ev.tenant, ev.type);
    });
  }
});

// Story: crud:TunnelGroup:nondet:1:1
bthread("crud:TunnelGroup:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1320";
  let id = 1320;
  let name = "name_1320";
  let slug = "slug_1320";
  let tags = "tags_1320";
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
  let description = "description_1321";
  let id = 1321;
  let name = "name_1321";
  let slug = "slug_1321";
  let tags = "tags_1321";
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
  let description = "description_1326";
  let id = 1326;
  let name = "name_1326";
  let slug = "slug_1326";
  let tags = "tags_1326";
  createTunnelGroup(custom_fields, description, id, name, slug, tags);
  verifyTunnelGroupExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingTunnelGroup(custom_fields, description, id, name, slug, tags);
  verifyTunnelGroupExists(custom_fields, description, id, name, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:TunnelGroup:nondet:existing:update
bthread("crud:TunnelGroup:nondet:existing:update", function () {
  let ev = waitForAnyTunnelGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedTunnelGroup.apply(null, args), function () {
    verifyTunnelGroupExists.apply(null, args);
    updateTunnelGroup.apply(null, args);
    verifyTunnelGroupExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:TunnelGroup:add
bthread("monitor:TunnelGroup:add", function () {
  while (true) {
    let ev = waitForAnyTunnelGroupAdded();
    block(matchDeletedTunnelGroup(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyTunnelGroupExists(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:TunnelGroup:deletion
bthread("monitor:TunnelGroup:deletion", function () {
  while (true) {
    let ev = waitForAnyTunnelGroupDeleted();
    block(matchAddedTunnelGroup(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyTunnelGroupDoesNotExist(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: crud:TunnelTermination:nondet:1:1
bthread("crud:TunnelTermination:nondet:1:1", function () {
  let custom_fields = {};
  let id = 1330;
  let outside_ip = "outside_ip_1330";
  let role = "role_1330";
  let tags = "tags_1330";
  let termination_id = 1330;
  let termination_type = "termination_type_1330";
  let tunnel = "tunnel_1330";
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
  let id = 1331;
  let outside_ip = "outside_ip_1331";
  let role = "role_1331";
  let tags = "tags_1331";
  let termination_id = 1331;
  let termination_type = "termination_type_1331";
  let tunnel = "tunnel_1331";
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
  let id = 1336;
  let outside_ip = "outside_ip_1336";
  let role = "role_1336";
  let tags = "tags_1336";
  let termination_id = 1336;
  let termination_type = "termination_type_1336";
  let tunnel = "tunnel_1336";
  createTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  verifyTunnelTerminationExists(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  tryToAddExistingTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  verifyTunnelTerminationExists(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
});

<<<<<<< HEAD
=======
// Story: crud:TunnelTermination:nondet:existing:update
bthread("crud:TunnelTermination:nondet:existing:update", function () {
  let ev = waitForAnyTunnelTerminationAdded();
  let args = Object.values(ev);
  block(matchDeletedTunnelTermination.apply(null, args), function () {
    verifyTunnelTerminationExists.apply(null, args);
    updateTunnelTermination.apply(null, args);
    verifyTunnelTerminationExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:TunnelTermination:add
bthread("monitor:TunnelTermination:add", function () {
  while (true) {
    let ev = waitForAnyTunnelTerminationAdded();
    block(matchDeletedTunnelTermination(ev.custom_fields, ev.id, ev.outside_ip, ev.role, ev.tags, ev.termination_id, ev.termination_type, ev.tunnel), function () {
      verifyTunnelTerminationExists(ev.custom_fields, ev.id, ev.outside_ip, ev.role, ev.tags, ev.termination_id, ev.termination_type, ev.tunnel);
    });
  }
});

// Story: monitor:TunnelTermination:deletion
bthread("monitor:TunnelTermination:deletion", function () {
  while (true) {
    let ev = waitForAnyTunnelTerminationDeleted();
    block(matchAddedTunnelTermination(ev.custom_fields, ev.id, ev.outside_ip, ev.role, ev.tags, ev.termination_id, ev.termination_type, ev.tunnel), function () {
      verifyTunnelTerminationDoesNotExist(ev.custom_fields, ev.id, ev.outside_ip, ev.role, ev.tags, ev.termination_id, ev.termination_type, ev.tunnel);
    });
  }
});

// Story: crud:Tunnel:nondet:1:1
bthread("crud:Tunnel:nondet:1:1", function () {
  let comments = "comments_1340";
  let custom_fields = {};
  let description = "description_1340";
  let encapsulation = "encapsulation_1340";
  let group = "group_1340";
  let id = 1340;
  let ipsec_profile = "ipsec_profile_1340";
  let name = "name_1340";
  let slug = "slug_1340";
  let status = "status_1340";
  let tags = "tags_1340";
  let tenant = "tenant_1340";
  let tunnel_id = 1340;
  createTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  waitForTunnelAdded(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  tryToAddExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  verifyTunnelExists(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  updateTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  deleteTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  tryToDeleteANonExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  verifyTunnelDoesNotExist(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
});

// Story: crud:Tunnel:nondet:1:2
bthread("crud:Tunnel:nondet:1:2", function () {
  let comments = "comments_1341";
  let custom_fields = {};
  let description = "description_1341";
  let encapsulation = "encapsulation_1341";
  let group = "group_1341";
  let id = 1341;
  let ipsec_profile = "ipsec_profile_1341";
  let name = "name_1341";
  let slug = "slug_1341";
  let status = "status_1341";
  let tags = "tags_1341";
  let tenant = "tenant_1341";
  let tunnel_id = 1341;
  createTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  tryToAddExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  updateTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  verifyTunnelExists(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  deleteTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  tryToDeleteANonExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  verifyTunnelDoesNotExist(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
});

// Story: crud:Tunnel:nondet:negative:dup-add
bthread("crud:Tunnel:nondet:negative:dup-add", function () {
  let comments = "comments_1346";
  let custom_fields = {};
  let description = "description_1346";
  let encapsulation = "encapsulation_1346";
  let group = "group_1346";
  let id = 1346;
  let ipsec_profile = "ipsec_profile_1346";
  let name = "name_1346";
  let slug = "slug_1346";
  let status = "status_1346";
  let tags = "tags_1346";
  let tenant = "tenant_1346";
  let tunnel_id = 1346;
  createTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  verifyTunnelExists(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  tryToAddExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  verifyTunnelExists(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
});

<<<<<<< HEAD
=======
// Story: crud:Tunnel:nondet:existing:update
bthread("crud:Tunnel:nondet:existing:update", function () {
  let ev = waitForAnyTunnelAdded();
  let args = Object.values(ev);
  block(matchDeletedTunnel.apply(null, args), function () {
    verifyTunnelExists.apply(null, args);
    updateTunnel.apply(null, args);
    verifyTunnelExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Tunnel:add
bthread("monitor:Tunnel:add", function () {
  while (true) {
    let ev = waitForAnyTunnelAdded();
    block(matchDeletedTunnel(ev.comments, ev.custom_fields, ev.description, ev.encapsulation, ev.group, ev.id, ev.ipsec_profile, ev.name, ev.slug, ev.status, ev.tags, ev.tenant, ev.tunnel_id), function () {
      verifyTunnelExists(ev.comments, ev.custom_fields, ev.description, ev.encapsulation, ev.group, ev.id, ev.ipsec_profile, ev.name, ev.slug, ev.status, ev.tags, ev.tenant, ev.tunnel_id);
    });
  }
});

// Story: monitor:Tunnel:deletion
bthread("monitor:Tunnel:deletion", function () {
  while (true) {
    let ev = waitForAnyTunnelDeleted();
    block(matchAddedTunnel(ev.comments, ev.custom_fields, ev.description, ev.encapsulation, ev.group, ev.id, ev.ipsec_profile, ev.name, ev.slug, ev.status, ev.tags, ev.tenant, ev.tunnel_id), function () {
      verifyTunnelDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.encapsulation, ev.group, ev.id, ev.ipsec_profile, ev.name, ev.slug, ev.status, ev.tags, ev.tenant, ev.tunnel_id);
    });
  }
});

// Story: crud:ClusterGroup:nondet:1:1
bthread("crud:ClusterGroup:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1350";
  let id = 1350;
  let name = "name_1350";
  let slug = "slug_1350";
  let tags = "tags_1350";
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
  let description = "description_1351";
  let id = 1351;
  let name = "name_1351";
  let slug = "slug_1351";
  let tags = "tags_1351";
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
  let description = "description_1356";
  let id = 1356;
  let name = "name_1356";
  let slug = "slug_1356";
  let tags = "tags_1356";
  createClusterGroup(custom_fields, description, id, name, slug, tags);
  verifyClusterGroupExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingClusterGroup(custom_fields, description, id, name, slug, tags);
  verifyClusterGroupExists(custom_fields, description, id, name, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:ClusterGroup:nondet:existing:update
bthread("crud:ClusterGroup:nondet:existing:update", function () {
  let ev = waitForAnyClusterGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedClusterGroup.apply(null, args), function () {
    verifyClusterGroupExists.apply(null, args);
    updateClusterGroup.apply(null, args);
    verifyClusterGroupExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ClusterGroup:add
bthread("monitor:ClusterGroup:add", function () {
  while (true) {
    let ev = waitForAnyClusterGroupAdded();
    block(matchDeletedClusterGroup(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyClusterGroupExists(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:ClusterGroup:deletion
bthread("monitor:ClusterGroup:deletion", function () {
  while (true) {
    let ev = waitForAnyClusterGroupDeleted();
    block(matchAddedClusterGroup(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyClusterGroupDoesNotExist(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: crud:ClusterType:nondet:1:1
bthread("crud:ClusterType:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1360";
  let id = 1360;
  let name = "name_1360";
  let slug = "slug_1360";
  let tags = "tags_1360";
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
  let description = "description_1361";
  let id = 1361;
  let name = "name_1361";
  let slug = "slug_1361";
  let tags = "tags_1361";
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
  let description = "description_1366";
  let id = 1366;
  let name = "name_1366";
  let slug = "slug_1366";
  let tags = "tags_1366";
  createClusterType(custom_fields, description, id, name, slug, tags);
  verifyClusterTypeExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingClusterType(custom_fields, description, id, name, slug, tags);
  verifyClusterTypeExists(custom_fields, description, id, name, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:ClusterType:nondet:existing:update
bthread("crud:ClusterType:nondet:existing:update", function () {
  let ev = waitForAnyClusterTypeAdded();
  let args = Object.values(ev);
  block(matchDeletedClusterType.apply(null, args), function () {
    verifyClusterTypeExists.apply(null, args);
    updateClusterType.apply(null, args);
    verifyClusterTypeExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ClusterType:add
bthread("monitor:ClusterType:add", function () {
  while (true) {
    let ev = waitForAnyClusterTypeAdded();
    block(matchDeletedClusterType(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyClusterTypeExists(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:ClusterType:deletion
bthread("monitor:ClusterType:deletion", function () {
  while (true) {
    let ev = waitForAnyClusterTypeDeleted();
    block(matchAddedClusterType(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyClusterTypeDoesNotExist(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: crud:Cluster:nondet:1:1
bthread("crud:Cluster:nondet:1:1", function () {
  let comments = "comments_1370";
  let custom_fields = {};
  let description = "description_1370";
  let group = "group_1370";
  let id = 1370;
  let name = "name_1370";
  let scope_id = 1370;
  let scope_type = "scope_type_1370";
  let status = "status_1370";
  let tags = "tags_1370";
  let tenant = "tenant_1370";
  let type = "type_1370";
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
  let comments = "comments_1371";
  let custom_fields = {};
  let description = "description_1371";
  let group = "group_1371";
  let id = 1371;
  let name = "name_1371";
  let scope_id = 1371;
  let scope_type = "scope_type_1371";
  let status = "status_1371";
  let tags = "tags_1371";
  let tenant = "tenant_1371";
  let type = "type_1371";
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
  let comments = "comments_1376";
  let custom_fields = {};
  let description = "description_1376";
  let group = "group_1376";
  let id = 1376;
  let name = "name_1376";
  let scope_id = 1376;
  let scope_type = "scope_type_1376";
  let status = "status_1376";
  let tags = "tags_1376";
  let tenant = "tenant_1376";
  let type = "type_1376";
  createCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  verifyClusterExists(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  tryToAddExistingCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  verifyClusterExists(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
});

<<<<<<< HEAD
=======
// Story: crud:Cluster:nondet:existing:update
bthread("crud:Cluster:nondet:existing:update", function () {
  let ev = waitForAnyClusterAdded();
  let args = Object.values(ev);
  block(matchDeletedCluster.apply(null, args), function () {
    verifyClusterExists.apply(null, args);
    updateCluster.apply(null, args);
    verifyClusterExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Cluster:add
bthread("monitor:Cluster:add", function () {
  while (true) {
    let ev = waitForAnyClusterAdded();
    block(matchDeletedCluster(ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.scope_id, ev.scope_type, ev.status, ev.tags, ev.tenant, ev.type), function () {
      verifyClusterExists(ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.scope_id, ev.scope_type, ev.status, ev.tags, ev.tenant, ev.type);
    });
  }
});

// Story: monitor:Cluster:deletion
bthread("monitor:Cluster:deletion", function () {
  while (true) {
    let ev = waitForAnyClusterDeleted();
    block(matchAddedCluster(ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.scope_id, ev.scope_type, ev.status, ev.tags, ev.tenant, ev.type), function () {
      verifyClusterDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.scope_id, ev.scope_type, ev.status, ev.tags, ev.tenant, ev.type);
    });
  }
});

// Story: crud:VirtualDisk:nondet:1:1
bthread("crud:VirtualDisk:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1380";
  let id = 1380;
  let name = "name_1380";
  let size = 1380;
  let tags = "tags_1380";
  let virtual_machine = "virtual_machine_1380";
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
  let description = "description_1381";
  let id = 1381;
  let name = "name_1381";
  let size = 1381;
  let tags = "tags_1381";
  let virtual_machine = "virtual_machine_1381";
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
  let description = "description_1386";
  let id = 1386;
  let name = "name_1386";
  let size = 1386;
  let tags = "tags_1386";
  let virtual_machine = "virtual_machine_1386";
  createVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  verifyVirtualDiskExists(custom_fields, description, id, name, size, tags, virtual_machine);
  tryToAddExistingVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  verifyVirtualDiskExists(custom_fields, description, id, name, size, tags, virtual_machine);
});

<<<<<<< HEAD
=======
// Story: crud:VirtualDisk:nondet:existing:update
bthread("crud:VirtualDisk:nondet:existing:update", function () {
  let ev = waitForAnyVirtualDiskAdded();
  let args = Object.values(ev);
  block(matchDeletedVirtualDisk.apply(null, args), function () {
    verifyVirtualDiskExists.apply(null, args);
    updateVirtualDisk.apply(null, args);
    verifyVirtualDiskExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:VirtualDisk:add
bthread("monitor:VirtualDisk:add", function () {
  while (true) {
    let ev = waitForAnyVirtualDiskAdded();
    block(matchDeletedVirtualDisk(ev.custom_fields, ev.description, ev.id, ev.name, ev.size, ev.tags, ev.virtual_machine), function () {
      verifyVirtualDiskExists(ev.custom_fields, ev.description, ev.id, ev.name, ev.size, ev.tags, ev.virtual_machine);
    });
  }
});

// Story: monitor:VirtualDisk:deletion
bthread("monitor:VirtualDisk:deletion", function () {
  while (true) {
    let ev = waitForAnyVirtualDiskDeleted();
    block(matchAddedVirtualDisk(ev.custom_fields, ev.description, ev.id, ev.name, ev.size, ev.tags, ev.virtual_machine), function () {
      verifyVirtualDiskDoesNotExist(ev.custom_fields, ev.description, ev.id, ev.name, ev.size, ev.tags, ev.virtual_machine);
    });
  }
});

// Story: crud:VirtualMachine:nondet:1:1
bthread("crud:VirtualMachine:nondet:1:1", function () {
  let cluster = "cluster_1390";
  let comments = "comments_1390";
  let config_template = "config_template_1390";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_1390";
  let device = "device_1390";
  let disk = 1390;
  let format = "format_1390";
  let id = 1390;
  let local_context_data = "local_context_data_1390";
  let memory = 1390;
  let name = "name_1390";
  let platform = "platform_1390";
  let primary_ip4 = "primary_ip4_1390";
  let primary_ip6 = "primary_ip6_1390";
  let role = "role_1390";
  let serial = "serial_1390";
  let site = "site_1390";
  let status = "status_1390";
  let tags = "tags_1390";
  let tenant = "tenant_1390";
  let vcpus = 1390;
=======
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
  let tags = "tags_1380";
  let tenant = "tenant_1380";
  let vcpus = 1380;
>>>>>>> 1302d9a (Fix emitter bugs)
  createVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  waitForVirtualMachineAdded(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  tryToAddExistingVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  verifyVirtualMachineExists(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  updateVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  deleteVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  tryToDeleteANonExistingVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  verifyVirtualMachineDoesNotExist(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
});

// Story: crud:VirtualMachine:nondet:1:2
bthread("crud:VirtualMachine:nondet:1:2", function () {
  let cluster = "cluster_1391";
  let comments = "comments_1391";
  let config_template = "config_template_1391";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_1391";
  let device = "device_1391";
  let disk = 1391;
  let format = "format_1391";
  let id = 1391;
  let local_context_data = "local_context_data_1391";
  let memory = 1391;
  let name = "name_1391";
  let platform = "platform_1391";
  let primary_ip4 = "primary_ip4_1391";
  let primary_ip6 = "primary_ip6_1391";
  let role = "role_1391";
  let serial = "serial_1391";
  let site = "site_1391";
  let status = "status_1391";
  let tags = "tags_1391";
  let tenant = "tenant_1391";
  let vcpus = 1391;
=======
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
  let tags = "tags_1381";
  let tenant = "tenant_1381";
  let vcpus = 1381;
>>>>>>> 1302d9a (Fix emitter bugs)
  createVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  tryToAddExistingVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  updateVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  verifyVirtualMachineExists(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  deleteVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  tryToDeleteANonExistingVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  verifyVirtualMachineDoesNotExist(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
});

// Story: crud:VirtualMachine:nondet:negative:dup-add
bthread("crud:VirtualMachine:nondet:negative:dup-add", function () {
  let cluster = "cluster_1396";
  let comments = "comments_1396";
  let config_template = "config_template_1396";
  let custom_fields = {};
<<<<<<< HEAD
  let description = "description_1396";
  let device = "device_1396";
  let disk = 1396;
  let format = "format_1396";
  let id = 1396;
  let local_context_data = "local_context_data_1396";
  let memory = 1396;
  let name = "name_1396";
  let platform = "platform_1396";
  let primary_ip4 = "primary_ip4_1396";
  let primary_ip6 = "primary_ip6_1396";
  let role = "role_1396";
  let serial = "serial_1396";
  let site = "site_1396";
  let status = "status_1396";
  let tags = "tags_1396";
  let tenant = "tenant_1396";
  let vcpus = 1396;
=======
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
  let tags = "tags_1386";
  let tenant = "tenant_1386";
  let vcpus = 1386;
>>>>>>> 1302d9a (Fix emitter bugs)
  createVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  verifyVirtualMachineExists(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  tryToAddExistingVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  verifyVirtualMachineExists(cluster, comments, config_template, custom_fields, description, device, disk, format, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
});

<<<<<<< HEAD
=======
// Story: crud:VirtualMachine:nondet:existing:update
bthread("crud:VirtualMachine:nondet:existing:update", function () {
  let ev = waitForAnyVirtualMachineAdded();
  let args = Object.values(ev);
  block(matchDeletedVirtualMachine.apply(null, args), function () {
    verifyVirtualMachineExists.apply(null, args);
    updateVirtualMachine.apply(null, args);
    verifyVirtualMachineExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:VirtualMachine:add
bthread("monitor:VirtualMachine:add", function () {
  while (true) {
    let ev = waitForAnyVirtualMachineAdded();
    block(matchDeletedVirtualMachine(ev.cluster, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.device, ev.disk, ev.format, ev.id, ev.local_context_data, ev.memory, ev.name, ev.platform, ev.primary_ip4, ev.primary_ip6, ev.role, ev.serial, ev.site, ev.status, ev.tags, ev.tenant, ev.vcpus), function () {
      verifyVirtualMachineExists(ev.cluster, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.device, ev.disk, ev.format, ev.id, ev.local_context_data, ev.memory, ev.name, ev.platform, ev.primary_ip4, ev.primary_ip6, ev.role, ev.serial, ev.site, ev.status, ev.tags, ev.tenant, ev.vcpus);
    });
  }
});

// Story: monitor:VirtualMachine:deletion
bthread("monitor:VirtualMachine:deletion", function () {
  while (true) {
    let ev = waitForAnyVirtualMachineDeleted();
    block(matchAddedVirtualMachine(ev.cluster, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.device, ev.disk, ev.format, ev.id, ev.local_context_data, ev.memory, ev.name, ev.platform, ev.primary_ip4, ev.primary_ip6, ev.role, ev.serial, ev.site, ev.status, ev.tags, ev.tenant, ev.vcpus), function () {
      verifyVirtualMachineDoesNotExist(ev.cluster, ev.comments, ev.config_template, ev.custom_fields, ev.description, ev.device, ev.disk, ev.format, ev.id, ev.local_context_data, ev.memory, ev.name, ev.platform, ev.primary_ip4, ev.primary_ip6, ev.role, ev.serial, ev.site, ev.status, ev.tags, ev.tenant, ev.vcpus);
    });
  }
});

// Story: crud:ContactAssignment:nondet:1:1
bthread("crud:ContactAssignment:nondet:1:1", function () {
  let contact = "contact_1400";
  let custom_fields = {};
  let id = 1400;
  let object_id = 1400;
  let object_type = "object_type_1400";
  let priority = "priority_1400";
  let role = "role_1400";
  let tags = "tags_1400";
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
  let contact = "contact_1401";
  let custom_fields = {};
  let id = 1401;
  let object_id = 1401;
  let object_type = "object_type_1401";
  let priority = "priority_1401";
  let role = "role_1401";
  let tags = "tags_1401";
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
  let contact = "contact_1406";
  let custom_fields = {};
  let id = 1406;
  let object_id = 1406;
  let object_type = "object_type_1406";
  let priority = "priority_1406";
  let role = "role_1406";
  let tags = "tags_1406";
  createContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentExists(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  tryToAddExistingContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentExists(contact, custom_fields, id, object_id, object_type, priority, role, tags);
});

<<<<<<< HEAD
=======
// Story: crud:ContactAssignment:nondet:existing:update
bthread("crud:ContactAssignment:nondet:existing:update", function () {
  let ev = waitForAnyContactAssignmentAdded();
  let args = Object.values(ev);
  block(matchDeletedContactAssignment.apply(null, args), function () {
    verifyContactAssignmentExists.apply(null, args);
    updateContactAssignment.apply(null, args);
    verifyContactAssignmentExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ContactAssignment:add
bthread("monitor:ContactAssignment:add", function () {
  while (true) {
    let ev = waitForAnyContactAssignmentAdded();
    block(matchDeletedContactAssignment(ev.contact, ev.custom_fields, ev.id, ev.object_id, ev.object_type, ev.priority, ev.role, ev.tags), function () {
      verifyContactAssignmentExists(ev.contact, ev.custom_fields, ev.id, ev.object_id, ev.object_type, ev.priority, ev.role, ev.tags);
    });
  }
});

// Story: monitor:ContactAssignment:deletion
bthread("monitor:ContactAssignment:deletion", function () {
  while (true) {
    let ev = waitForAnyContactAssignmentDeleted();
    block(matchAddedContactAssignment(ev.contact, ev.custom_fields, ev.id, ev.object_id, ev.object_type, ev.priority, ev.role, ev.tags), function () {
      verifyContactAssignmentDoesNotExist(ev.contact, ev.custom_fields, ev.id, ev.object_id, ev.object_type, ev.priority, ev.role, ev.tags);
    });
  }
});

// Story: crud:ContactGroup:nondet:1:1
bthread("crud:ContactGroup:nondet:1:1", function () {
  let comments = "comments_1410";
  let custom_fields = {};
  let description = "description_1410";
  let id = 1410;
  let name = "name_1410";
  let parent = 1410;
  let slug = "slug_1410";
  let tags = "tags_1410";
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
  let comments = "comments_1411";
  let custom_fields = {};
  let description = "description_1411";
  let id = 1411;
  let name = "name_1411";
  let parent = 1411;
  let slug = "slug_1411";
  let tags = "tags_1411";
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
  let comments = "comments_1416";
  let custom_fields = {};
  let description = "description_1416";
  let id = 1416;
  let name = "name_1416";
  let parent = 1416;
  let slug = "slug_1416";
  let tags = "tags_1416";
  createContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:ContactGroup:nondet:existing:update
bthread("crud:ContactGroup:nondet:existing:update", function () {
  let ev = waitForAnyContactGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedContactGroup.apply(null, args), function () {
    verifyContactGroupExists.apply(null, args);
    updateContactGroup.apply(null, args);
    verifyContactGroupExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ContactGroup:add
bthread("monitor:ContactGroup:add", function () {
  while (true) {
    let ev = waitForAnyContactGroupAdded();
    block(matchDeletedContactGroup(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifyContactGroupExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:ContactGroup:deletion
bthread("monitor:ContactGroup:deletion", function () {
  while (true) {
    let ev = waitForAnyContactGroupDeleted();
    block(matchAddedContactGroup(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifyContactGroupDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: crud:ContactRole:nondet:1:1
bthread("crud:ContactRole:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1420";
  let id = 1420;
  let name = "name_1420";
  let slug = "slug_1420";
  let tags = "tags_1420";
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
  let description = "description_1421";
  let id = 1421;
  let name = "name_1421";
  let slug = "slug_1421";
  let tags = "tags_1421";
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
  let description = "description_1426";
  let id = 1426;
  let name = "name_1426";
  let slug = "slug_1426";
  let tags = "tags_1426";
  createContactRole(custom_fields, description, id, name, slug, tags);
  verifyContactRoleExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingContactRole(custom_fields, description, id, name, slug, tags);
  verifyContactRoleExists(custom_fields, description, id, name, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:ContactRole:nondet:existing:update
bthread("crud:ContactRole:nondet:existing:update", function () {
  let ev = waitForAnyContactRoleAdded();
  let args = Object.values(ev);
  block(matchDeletedContactRole.apply(null, args), function () {
    verifyContactRoleExists.apply(null, args);
    updateContactRole.apply(null, args);
    verifyContactRoleExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:ContactRole:add
bthread("monitor:ContactRole:add", function () {
  while (true) {
    let ev = waitForAnyContactRoleAdded();
    block(matchDeletedContactRole(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyContactRoleExists(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:ContactRole:deletion
bthread("monitor:ContactRole:deletion", function () {
  while (true) {
    let ev = waitForAnyContactRoleDeleted();
    block(matchAddedContactRole(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyContactRoleDoesNotExist(ev.custom_fields, ev.description, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: crud:Contact:nondet:1:1
bthread("crud:Contact:nondet:1:1", function () {
  let address = "address_1430";
  let comments = "comments_1430";
  let custom_fields = {};
  let description = "description_1430";
  let email = "email_1430";
  let groups = "groups_1430";
  let id = 1430;
  let link = "link_1430";
  let name = "name_1430";
  let phone = "phone_1430";
  let tags = "tags_1430";
  let title = "title_1430";
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
  let address = "address_1431";
  let comments = "comments_1431";
  let custom_fields = {};
  let description = "description_1431";
  let email = "email_1431";
  let groups = "groups_1431";
  let id = 1431;
  let link = "link_1431";
  let name = "name_1431";
  let phone = "phone_1431";
  let tags = "tags_1431";
  let title = "title_1431";
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
  let address = "address_1436";
  let comments = "comments_1436";
  let custom_fields = {};
  let description = "description_1436";
  let email = "email_1436";
  let groups = "groups_1436";
  let id = 1436;
  let link = "link_1436";
  let name = "name_1436";
  let phone = "phone_1436";
  let tags = "tags_1436";
  let title = "title_1436";
  createContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactExists(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  tryToAddExistingContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactExists(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
});

<<<<<<< HEAD
=======
// Story: crud:Contact:nondet:existing:update
bthread("crud:Contact:nondet:existing:update", function () {
  let ev = waitForAnyContactAdded();
  let args = Object.values(ev);
  block(matchDeletedContact.apply(null, args), function () {
    verifyContactExists.apply(null, args);
    updateContact.apply(null, args);
    verifyContactExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Contact:add
bthread("monitor:Contact:add", function () {
  while (true) {
    let ev = waitForAnyContactAdded();
    block(matchDeletedContact(ev.address, ev.comments, ev.custom_fields, ev.description, ev.email, ev.groups, ev.id, ev.link, ev.name, ev.phone, ev.tags, ev.title), function () {
      verifyContactExists(ev.address, ev.comments, ev.custom_fields, ev.description, ev.email, ev.groups, ev.id, ev.link, ev.name, ev.phone, ev.tags, ev.title);
    });
  }
});

// Story: monitor:Contact:deletion
bthread("monitor:Contact:deletion", function () {
  while (true) {
    let ev = waitForAnyContactDeleted();
    block(matchAddedContact(ev.address, ev.comments, ev.custom_fields, ev.description, ev.email, ev.groups, ev.id, ev.link, ev.name, ev.phone, ev.tags, ev.title), function () {
      verifyContactDoesNotExist(ev.address, ev.comments, ev.custom_fields, ev.description, ev.email, ev.groups, ev.id, ev.link, ev.name, ev.phone, ev.tags, ev.title);
    });
  }
});

// Story: crud:TenantGroup:nondet:1:1
bthread("crud:TenantGroup:nondet:1:1", function () {
  let comments = "comments_1440";
  let custom_fields = {};
  let description = "description_1440";
  let id = 1440;
  let name = "name_1440";
  let parent = 1440;
  let slug = "slug_1440";
  let tags = "tags_1440";
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
  let comments = "comments_1441";
  let custom_fields = {};
  let description = "description_1441";
  let id = 1441;
  let name = "name_1441";
  let parent = 1441;
  let slug = "slug_1441";
  let tags = "tags_1441";
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
  let comments = "comments_1446";
  let custom_fields = {};
  let description = "description_1446";
  let id = 1446;
  let name = "name_1446";
  let parent = 1446;
  let slug = "slug_1446";
  let tags = "tags_1446";
  createTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:TenantGroup:nondet:existing:update
bthread("crud:TenantGroup:nondet:existing:update", function () {
  let ev = waitForAnyTenantGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedTenantGroup.apply(null, args), function () {
    verifyTenantGroupExists.apply(null, args);
    updateTenantGroup.apply(null, args);
    verifyTenantGroupExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:TenantGroup:add
bthread("monitor:TenantGroup:add", function () {
  while (true) {
    let ev = waitForAnyTenantGroupAdded();
    block(matchDeletedTenantGroup(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifyTenantGroupExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:TenantGroup:deletion
bthread("monitor:TenantGroup:deletion", function () {
  while (true) {
    let ev = waitForAnyTenantGroupDeleted();
    block(matchAddedTenantGroup(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifyTenantGroupDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: crud:Tenant:nondet:1:1
bthread("crud:Tenant:nondet:1:1", function () {
<<<<<<< HEAD
  let comments = "comments_1450";
  let custom_fields = {};
  let description = "description_1450";
  let group = "group_1450";
  let id = 1450;
  let name = "name_1450";
  let slug = "slug_1450";
  let tags = "tags_1450";
  createTenant(comments, custom_fields, description, group, id, name, slug, tags);
  waitForTenantAdded(comments, custom_fields, description, group, id, name, slug, tags);
  tryToAddExistingTenant(comments, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, custom_fields, description, group, id, name, slug, tags);
  updateTenant(comments, custom_fields, description, group, id, name, slug, tags);
  deleteTenant(comments, custom_fields, description, group, id, name, slug, tags);
  tryToDeleteANonExistingTenant(comments, custom_fields, description, group, id, name, slug, tags);
  verifyTenantDoesNotExist(comments, custom_fields, description, group, id, name, slug, tags);
=======
  let comments = "comments_1440";
  let contact = "contact_1440";
  let contact_group = "contact_group_1440";
  let contact_role = "contact_role_1440";
  let custom_fields = {};
  let description = "description_1440";
  let group = "group_1440";
  let id = 1440;
  let name = "name_1440";
  let slug = "slug_1440";
  let tags = "tags_1440";
  createTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  waitForTenantAdded(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  tryToAddExistingTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  updateTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  deleteTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  tryToDeleteANonExistingTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  verifyTenantDoesNotExist(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:Tenant:nondet:1:2
bthread("crud:Tenant:nondet:1:2", function () {
<<<<<<< HEAD
  let comments = "comments_1451";
  let custom_fields = {};
  let description = "description_1451";
  let group = "group_1451";
  let id = 1451;
  let name = "name_1451";
  let slug = "slug_1451";
  let tags = "tags_1451";
  createTenant(comments, custom_fields, description, group, id, name, slug, tags);
  tryToAddExistingTenant(comments, custom_fields, description, group, id, name, slug, tags);
  updateTenant(comments, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, custom_fields, description, group, id, name, slug, tags);
  deleteTenant(comments, custom_fields, description, group, id, name, slug, tags);
  tryToDeleteANonExistingTenant(comments, custom_fields, description, group, id, name, slug, tags);
  verifyTenantDoesNotExist(comments, custom_fields, description, group, id, name, slug, tags);
=======
  let comments = "comments_1441";
  let contact = "contact_1441";
  let contact_group = "contact_group_1441";
  let contact_role = "contact_role_1441";
  let custom_fields = {};
  let description = "description_1441";
  let group = "group_1441";
  let id = 1441;
  let name = "name_1441";
  let slug = "slug_1441";
  let tags = "tags_1441";
  createTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  tryToAddExistingTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  updateTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  deleteTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  tryToDeleteANonExistingTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  verifyTenantDoesNotExist(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: crud:Tenant:nondet:negative:dup-add
bthread("crud:Tenant:nondet:negative:dup-add", function () {
<<<<<<< HEAD
  let comments = "comments_1456";
  let custom_fields = {};
  let description = "description_1456";
  let group = "group_1456";
  let id = 1456;
  let name = "name_1456";
  let slug = "slug_1456";
  let tags = "tags_1456";
  createTenant(comments, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, custom_fields, description, group, id, name, slug, tags);
  tryToAddExistingTenant(comments, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, custom_fields, description, group, id, name, slug, tags);
=======
  let comments = "comments_1446";
  let contact = "contact_1446";
  let contact_group = "contact_group_1446";
  let contact_role = "contact_role_1446";
  let custom_fields = {};
  let description = "description_1446";
  let group = "group_1446";
  let id = 1446;
  let name = "name_1446";
  let slug = "slug_1446";
  let tags = "tags_1446";
  createTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  tryToAddExistingTenant(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, contact, contact_group, contact_role, custom_fields, description, group, id, name, slug, tags);
});

// Story: crud:Tenant:nondet:existing:update
bthread("crud:Tenant:nondet:existing:update", function () {
  let ev = waitForAnyTenantAdded();
  let args = Object.values(ev);
  block(matchDeletedTenant.apply(null, args), function () {
    verifyTenantExists.apply(null, args);
    updateTenant.apply(null, args);
    verifyTenantExists.apply(null, args);
  });
});

// Story: monitor:Tenant:add
bthread("monitor:Tenant:add", function () {
  while (true) {
    let ev = waitForAnyTenantAdded();
    block(matchDeletedTenant(ev.comments, ev.contact, ev.contact_group, ev.contact_role, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyTenantExists(ev.comments, ev.contact, ev.contact_group, ev.contact_role, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:Tenant:deletion
bthread("monitor:Tenant:deletion", function () {
  while (true) {
    let ev = waitForAnyTenantDeleted();
    block(matchAddedTenant(ev.comments, ev.contact, ev.contact_group, ev.contact_role, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyTenantDoesNotExist(ev.comments, ev.contact, ev.contact_group, ev.contact_role, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
>>>>>>> 1302d9a (Fix emitter bugs)
});

// Story: monitor:Tenant:add
bthread("monitor:Tenant:add", function () {
  while (true) {
    let ev = waitForAnyTenantAdded();
    block(matchDeletedTenant(ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyTenantExists(ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:Tenant:deletion
bthread("monitor:Tenant:deletion", function () {
  while (true) {
    let ev = waitForAnyTenantDeleted();
    block(matchAddedTenant(ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.slug, ev.tags), function () {
      verifyTenantDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.name, ev.slug, ev.tags);
    });
  }
});

// Story: crud:Group:nondet:1:1
bthread("crud:Group:nondet:1:1", function () {
  let description = "description_1460";
  let id = 1460;
  let name = "name_1460";
  let permissions = "permissions_1460";
  createGroup(description, id, name, permissions);
  waitForGroupAdded(description, id, name, permissions);
  tryToAddExistingGroup(description, id, name, permissions);
  verifyGroupExists(description, id, name, permissions);
  updateGroup(description, id, name, permissions);
  deleteGroup(description, id, name, permissions);
  tryToDeleteANonExistingGroup(description, id, name, permissions);
  verifyGroupDoesNotExist(description, id, name, permissions);
});

// Story: crud:Group:nondet:1:2
bthread("crud:Group:nondet:1:2", function () {
  let description = "description_1461";
  let id = 1461;
  let name = "name_1461";
  let permissions = "permissions_1461";
  createGroup(description, id, name, permissions);
  tryToAddExistingGroup(description, id, name, permissions);
  updateGroup(description, id, name, permissions);
  verifyGroupExists(description, id, name, permissions);
  deleteGroup(description, id, name, permissions);
  tryToDeleteANonExistingGroup(description, id, name, permissions);
  verifyGroupDoesNotExist(description, id, name, permissions);
});

// Story: crud:Group:nondet:negative:dup-add
bthread("crud:Group:nondet:negative:dup-add", function () {
  let description = "description_1466";
  let id = 1466;
  let name = "name_1466";
  let permissions = "permissions_1466";
  createGroup(description, id, name, permissions);
  verifyGroupExists(description, id, name, permissions);
  tryToAddExistingGroup(description, id, name, permissions);
  verifyGroupExists(description, id, name, permissions);
});

<<<<<<< HEAD
=======
// Story: crud:Group:nondet:existing:update
bthread("crud:Group:nondet:existing:update", function () {
  let ev = waitForAnyGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedGroup.apply(null, args), function () {
    verifyGroupExists.apply(null, args);
    updateGroup.apply(null, args);
    verifyGroupExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Group:add
bthread("monitor:Group:add", function () {
  while (true) {
    let ev = waitForAnyGroupAdded();
    block(matchDeletedGroup(ev.description, ev.id, ev.name, ev.permissions), function () {
      verifyGroupExists(ev.description, ev.id, ev.name, ev.permissions);
    });
  }
});

// Story: monitor:Group:deletion
bthread("monitor:Group:deletion", function () {
  while (true) {
    let ev = waitForAnyGroupDeleted();
    block(matchAddedGroup(ev.description, ev.id, ev.name, ev.permissions), function () {
      verifyGroupDoesNotExist(ev.description, ev.id, ev.name, ev.permissions);
    });
  }
});

// Story: crud:Permission:nondet:1:1
bthread("crud:Permission:nondet:1:1", function () {
  let actions = "actions_1470";
  let constraints = "constraints_1470";
  let description = "description_1470";
  let enabled = true;
  let groups = "groups_1470";
  let id = 1470;
  let name = "name_1470";
  let object_types = "object_types_1470";
  let users = "users_1470";
  createPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  waitForPermissionAdded(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToAddExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionExists(actions, constraints, description, enabled, groups, id, name, object_types, users);
  updatePermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  deletePermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToDeleteANonExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionDoesNotExist(actions, constraints, description, enabled, groups, id, name, object_types, users);
});

// Story: crud:Permission:nondet:1:2
bthread("crud:Permission:nondet:1:2", function () {
  let actions = "actions_1471";
  let constraints = "constraints_1471";
  let description = "description_1471";
  let enabled = true;
  let groups = "groups_1471";
  let id = 1471;
  let name = "name_1471";
  let object_types = "object_types_1471";
  let users = "users_1471";
  createPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToAddExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  updatePermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionExists(actions, constraints, description, enabled, groups, id, name, object_types, users);
  deletePermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToDeleteANonExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionDoesNotExist(actions, constraints, description, enabled, groups, id, name, object_types, users);
});

// Story: crud:Permission:nondet:negative:dup-add
bthread("crud:Permission:nondet:negative:dup-add", function () {
  let actions = "actions_1476";
  let constraints = "constraints_1476";
  let description = "description_1476";
  let enabled = true;
  let groups = "groups_1476";
  let id = 1476;
  let name = "name_1476";
  let object_types = "object_types_1476";
  let users = "users_1476";
  createPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionExists(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToAddExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionExists(actions, constraints, description, enabled, groups, id, name, object_types, users);
});

<<<<<<< HEAD
=======
// Story: crud:Permission:nondet:existing:update
bthread("crud:Permission:nondet:existing:update", function () {
  let ev = waitForAnyPermissionAdded();
  let args = Object.values(ev);
  block(matchDeletedPermission.apply(null, args), function () {
    verifyPermissionExists.apply(null, args);
    updatePermission.apply(null, args);
    verifyPermissionExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Permission:add
bthread("monitor:Permission:add", function () {
  while (true) {
    let ev = waitForAnyPermissionAdded();
    block(matchDeletedPermission(ev.actions, ev.constraints, ev.description, ev.enabled, ev.groups, ev.id, ev.name, ev.object_types, ev.users), function () {
      verifyPermissionExists(ev.actions, ev.constraints, ev.description, ev.enabled, ev.groups, ev.id, ev.name, ev.object_types, ev.users);
    });
  }
});

// Story: monitor:Permission:deletion
bthread("monitor:Permission:deletion", function () {
  while (true) {
    let ev = waitForAnyPermissionDeleted();
    block(matchAddedPermission(ev.actions, ev.constraints, ev.description, ev.enabled, ev.groups, ev.id, ev.name, ev.object_types, ev.users), function () {
      verifyPermissionDoesNotExist(ev.actions, ev.constraints, ev.description, ev.enabled, ev.groups, ev.id, ev.name, ev.object_types, ev.users);
    });
  }
});

// Story: crud:Token:nondet:1:1
bthread("crud:Token:nondet:1:1", function () {
  let description = "description_1480";
  let expires = "expires_1480";
  let id = 1480;
  let key = "key_1480";
  let last_used = "last_used_1480";
  let user = "user_1480";
  let write_enabled = true;
  createToken(description, expires, id, key, last_used, user, write_enabled);
  waitForTokenAdded(description, expires, id, key, last_used, user, write_enabled);
  tryToAddExistingToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenExists(description, expires, id, key, last_used, user, write_enabled);
  updateToken(description, expires, id, key, last_used, user, write_enabled);
  deleteToken(description, expires, id, key, last_used, user, write_enabled);
  tryToDeleteANonExistingToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenDoesNotExist(description, expires, id, key, last_used, user, write_enabled);
});

// Story: crud:Token:nondet:1:2
bthread("crud:Token:nondet:1:2", function () {
  let description = "description_1481";
  let expires = "expires_1481";
  let id = 1481;
  let key = "key_1481";
  let last_used = "last_used_1481";
  let user = "user_1481";
  let write_enabled = true;
  createToken(description, expires, id, key, last_used, user, write_enabled);
  tryToAddExistingToken(description, expires, id, key, last_used, user, write_enabled);
  updateToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenExists(description, expires, id, key, last_used, user, write_enabled);
  deleteToken(description, expires, id, key, last_used, user, write_enabled);
  tryToDeleteANonExistingToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenDoesNotExist(description, expires, id, key, last_used, user, write_enabled);
});

// Story: crud:Token:nondet:negative:dup-add
bthread("crud:Token:nondet:negative:dup-add", function () {
  let description = "description_1486";
  let expires = "expires_1486";
  let id = 1486;
  let key = "key_1486";
  let last_used = "last_used_1486";
  let user = "user_1486";
  let write_enabled = true;
  createToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenExists(description, expires, id, key, last_used, user, write_enabled);
  tryToAddExistingToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenExists(description, expires, id, key, last_used, user, write_enabled);
});

<<<<<<< HEAD
=======
// Story: crud:Token:nondet:existing:update
bthread("crud:Token:nondet:existing:update", function () {
  let ev = waitForAnyTokenAdded();
  let args = Object.values(ev);
  block(matchDeletedToken.apply(null, args), function () {
    verifyTokenExists.apply(null, args);
    updateToken.apply(null, args);
    verifyTokenExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:Token:add
bthread("monitor:Token:add", function () {
  while (true) {
    let ev = waitForAnyTokenAdded();
    block(matchDeletedToken(ev.description, ev.expires, ev.id, ev.key, ev.last_used, ev.user, ev.write_enabled), function () {
      verifyTokenExists(ev.description, ev.expires, ev.id, ev.key, ev.last_used, ev.user, ev.write_enabled);
    });
  }
});

// Story: monitor:Token:deletion
bthread("monitor:Token:deletion", function () {
  while (true) {
    let ev = waitForAnyTokenDeleted();
    block(matchAddedToken(ev.description, ev.expires, ev.id, ev.key, ev.last_used, ev.user, ev.write_enabled), function () {
      verifyTokenDoesNotExist(ev.description, ev.expires, ev.id, ev.key, ev.last_used, ev.user, ev.write_enabled);
    });
  }
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let date_joined = "date_joined_1490";
  let email = "email_1490";
  let first_name = "first_name_1490";
  let groups = "groups_1490";
  let id = 1490;
  let is_active = true;
  let is_staff = true;
  let last_login = "last_login_1490";
  let last_name = "last_name_1490";
  let password = "password_1490";
  let permissions = "permissions_1490";
  let username = "username_1490";
  createUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  waitForUserAdded(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToAddExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserExists(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  updateUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  deleteUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToDeleteANonExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserDoesNotExist(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let date_joined = "date_joined_1491";
  let email = "email_1491";
  let first_name = "first_name_1491";
  let groups = "groups_1491";
  let id = 1491;
  let is_active = true;
  let is_staff = true;
  let last_login = "last_login_1491";
  let last_name = "last_name_1491";
  let password = "password_1491";
  let permissions = "permissions_1491";
  let username = "username_1491";
  createUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToAddExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  updateUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserExists(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  deleteUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToDeleteANonExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserDoesNotExist(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let date_joined = "date_joined_1496";
  let email = "email_1496";
  let first_name = "first_name_1496";
  let groups = "groups_1496";
  let id = 1496;
  let is_active = true;
  let is_staff = true;
  let last_login = "last_login_1496";
  let last_name = "last_name_1496";
  let password = "password_1496";
  let permissions = "permissions_1496";
  let username = "username_1496";
  createUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserExists(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToAddExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserExists(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
});

<<<<<<< HEAD
=======
// Story: crud:User:nondet:existing:update
bthread("crud:User:nondet:existing:update", function () {
  let ev = waitForAnyUserAdded();
  let args = Object.values(ev);
  block(matchDeletedUser.apply(null, args), function () {
    verifyUserExists.apply(null, args);
    updateUser.apply(null, args);
    verifyUserExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:User:add
bthread("monitor:User:add", function () {
  while (true) {
    let ev = waitForAnyUserAdded();
    block(matchDeletedUser(ev.date_joined, ev.email, ev.first_name, ev.groups, ev.id, ev.is_active, ev.is_staff, ev.last_login, ev.last_name, ev.password, ev.permissions, ev.username), function () {
      verifyUserExists(ev.date_joined, ev.email, ev.first_name, ev.groups, ev.id, ev.is_active, ev.is_staff, ev.last_login, ev.last_name, ev.password, ev.permissions, ev.username);
    });
  }
});

// Story: monitor:User:deletion
bthread("monitor:User:deletion", function () {
  while (true) {
    let ev = waitForAnyUserDeleted();
    block(matchAddedUser(ev.date_joined, ev.email, ev.first_name, ev.groups, ev.id, ev.is_active, ev.is_staff, ev.last_login, ev.last_name, ev.password, ev.permissions, ev.username), function () {
      verifyUserDoesNotExist(ev.date_joined, ev.email, ev.first_name, ev.groups, ev.id, ev.is_active, ev.is_staff, ev.last_login, ev.last_name, ev.password, ev.permissions, ev.username);
    });
  }
});

// Story: crud:WirelessLANGroup:nondet:1:1
bthread("crud:WirelessLANGroup:nondet:1:1", function () {
  let comments = "comments_1500";
  let custom_fields = {};
  let description = "description_1500";
  let id = 1500;
  let name = "name_1500";
  let parent = 1500;
  let slug = "slug_1500";
  let tags = "tags_1500";
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
  let comments = "comments_1501";
  let custom_fields = {};
  let description = "description_1501";
  let id = 1501;
  let name = "name_1501";
  let parent = 1501;
  let slug = "slug_1501";
  let tags = "tags_1501";
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
  let comments = "comments_1506";
  let custom_fields = {};
  let description = "description_1506";
  let id = 1506;
  let name = "name_1506";
  let parent = 1506;
  let slug = "slug_1506";
  let tags = "tags_1506";
  createWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyWirelessLANGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyWirelessLANGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

<<<<<<< HEAD
=======
// Story: crud:WirelessLANGroup:nondet:existing:update
bthread("crud:WirelessLANGroup:nondet:existing:update", function () {
  let ev = waitForAnyWirelessLANGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedWirelessLANGroup.apply(null, args), function () {
    verifyWirelessLANGroupExists.apply(null, args);
    updateWirelessLANGroup.apply(null, args);
    verifyWirelessLANGroupExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:WirelessLANGroup:add
bthread("monitor:WirelessLANGroup:add", function () {
  while (true) {
    let ev = waitForAnyWirelessLANGroupAdded();
    block(matchDeletedWirelessLANGroup(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifyWirelessLANGroupExists(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: monitor:WirelessLANGroup:deletion
bthread("monitor:WirelessLANGroup:deletion", function () {
  while (true) {
    let ev = waitForAnyWirelessLANGroupDeleted();
    block(matchAddedWirelessLANGroup(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags), function () {
      verifyWirelessLANGroupDoesNotExist(ev.comments, ev.custom_fields, ev.description, ev.id, ev.name, ev.parent, ev.slug, ev.tags);
    });
  }
});

// Story: crud:WirelessLAN:nondet:1:1
bthread("crud:WirelessLAN:nondet:1:1", function () {
  let auth_cipher = "auth_cipher_1510";
  let auth_psk = "auth_psk_1510";
  let auth_type = "auth_type_1510";
  let comments = "comments_1510";
  let custom_fields = {};
  let description = "description_1510";
  let group = "group_1510";
  let id = 1510;
  let scope_id = 1510;
  let scope_type = "scope_type_1510";
  let ssid = 1510;
  let status = "status_1510";
  let tags = "tags_1510";
  let tenant = "tenant_1510";
  let vlan = "vlan_1510";
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
  let auth_cipher = "auth_cipher_1511";
  let auth_psk = "auth_psk_1511";
  let auth_type = "auth_type_1511";
  let comments = "comments_1511";
  let custom_fields = {};
  let description = "description_1511";
  let group = "group_1511";
  let id = 1511;
  let scope_id = 1511;
  let scope_type = "scope_type_1511";
  let ssid = 1511;
  let status = "status_1511";
  let tags = "tags_1511";
  let tenant = "tenant_1511";
  let vlan = "vlan_1511";
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
  let auth_cipher = "auth_cipher_1516";
  let auth_psk = "auth_psk_1516";
  let auth_type = "auth_type_1516";
  let comments = "comments_1516";
  let custom_fields = {};
  let description = "description_1516";
  let group = "group_1516";
  let id = 1516;
  let scope_id = 1516;
  let scope_type = "scope_type_1516";
  let ssid = 1516;
  let status = "status_1516";
  let tags = "tags_1516";
  let tenant = "tenant_1516";
  let vlan = "vlan_1516";
  createWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  verifyWirelessLANExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  tryToAddExistingWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  verifyWirelessLANExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
});

<<<<<<< HEAD
=======
// Story: crud:WirelessLAN:nondet:existing:update
bthread("crud:WirelessLAN:nondet:existing:update", function () {
  let ev = waitForAnyWirelessLANAdded();
  let args = Object.values(ev);
  block(matchDeletedWirelessLAN.apply(null, args), function () {
    verifyWirelessLANExists.apply(null, args);
    updateWirelessLAN.apply(null, args);
    verifyWirelessLANExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:WirelessLAN:add
bthread("monitor:WirelessLAN:add", function () {
  while (true) {
    let ev = waitForAnyWirelessLANAdded();
    block(matchDeletedWirelessLAN(ev.auth_cipher, ev.auth_psk, ev.auth_type, ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.scope_id, ev.scope_type, ev.ssid, ev.status, ev.tags, ev.tenant, ev.vlan), function () {
      verifyWirelessLANExists(ev.auth_cipher, ev.auth_psk, ev.auth_type, ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.scope_id, ev.scope_type, ev.ssid, ev.status, ev.tags, ev.tenant, ev.vlan);
    });
  }
});

// Story: monitor:WirelessLAN:deletion
bthread("monitor:WirelessLAN:deletion", function () {
  while (true) {
    let ev = waitForAnyWirelessLANDeleted();
    block(matchAddedWirelessLAN(ev.auth_cipher, ev.auth_psk, ev.auth_type, ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.scope_id, ev.scope_type, ev.ssid, ev.status, ev.tags, ev.tenant, ev.vlan), function () {
      verifyWirelessLANDoesNotExist(ev.auth_cipher, ev.auth_psk, ev.auth_type, ev.comments, ev.custom_fields, ev.description, ev.group, ev.id, ev.scope_id, ev.scope_type, ev.ssid, ev.status, ev.tags, ev.tenant, ev.vlan);
    });
  }
});

// Story: crud:WirelessLink:nondet:1:1
bthread("crud:WirelessLink:nondet:1:1", function () {
  let auth_cipher = "auth_cipher_1520";
  let auth_psk = "auth_psk_1520";
  let auth_type = "auth_type_1520";
  let comments = "comments_1520";
  let custom_fields = {};
  let description = "description_1520";
  let distance = 1520;
  let distance_unit = "distance_unit_1520";
  let id = 1520;
  let interface_a = "interface_a_1520";
  let interface_b = "interface_b_1520";
  let ssid = 1520;
  let status = "status_1520";
  let tags = "tags_1520";
  let tenant = "tenant_1520";
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
  let auth_cipher = "auth_cipher_1521";
  let auth_psk = "auth_psk_1521";
  let auth_type = "auth_type_1521";
  let comments = "comments_1521";
  let custom_fields = {};
  let description = "description_1521";
  let distance = 1521;
  let distance_unit = "distance_unit_1521";
  let id = 1521;
  let interface_a = "interface_a_1521";
  let interface_b = "interface_b_1521";
  let ssid = 1521;
  let status = "status_1521";
  let tags = "tags_1521";
  let tenant = "tenant_1521";
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
  let auth_cipher = "auth_cipher_1526";
  let auth_psk = "auth_psk_1526";
  let auth_type = "auth_type_1526";
  let comments = "comments_1526";
  let custom_fields = {};
  let description = "description_1526";
  let distance = 1526;
  let distance_unit = "distance_unit_1526";
  let id = 1526;
  let interface_a = "interface_a_1526";
  let interface_b = "interface_b_1526";
  let ssid = 1526;
  let status = "status_1526";
  let tags = "tags_1526";
  let tenant = "tenant_1526";
  createWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  verifyWirelessLinkExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  tryToAddExistingWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  verifyWirelessLinkExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
});

<<<<<<< HEAD
=======
// Story: crud:WirelessLink:nondet:existing:update
bthread("crud:WirelessLink:nondet:existing:update", function () {
  let ev = waitForAnyWirelessLinkAdded();
  let args = Object.values(ev);
  block(matchDeletedWirelessLink.apply(null, args), function () {
    verifyWirelessLinkExists.apply(null, args);
    updateWirelessLink.apply(null, args);
    verifyWirelessLinkExists.apply(null, args);
  });
});

>>>>>>> 1302d9a (Fix emitter bugs)
// Story: monitor:WirelessLink:add
bthread("monitor:WirelessLink:add", function () {
  while (true) {
    let ev = waitForAnyWirelessLinkAdded();
    block(matchDeletedWirelessLink(ev.auth_cipher, ev.auth_psk, ev.auth_type, ev.comments, ev.custom_fields, ev.description, ev.distance, ev.distance_unit, ev.id, ev.interface_a, ev.interface_b, ev.ssid, ev.status, ev.tags, ev.tenant), function () {
      verifyWirelessLinkExists(ev.auth_cipher, ev.auth_psk, ev.auth_type, ev.comments, ev.custom_fields, ev.description, ev.distance, ev.distance_unit, ev.id, ev.interface_a, ev.interface_b, ev.ssid, ev.status, ev.tags, ev.tenant);
    });
  }
});

// Story: monitor:WirelessLink:deletion
bthread("monitor:WirelessLink:deletion", function () {
  while (true) {
    let ev = waitForAnyWirelessLinkDeleted();
    block(matchAddedWirelessLink(ev.auth_cipher, ev.auth_psk, ev.auth_type, ev.comments, ev.custom_fields, ev.description, ev.distance, ev.distance_unit, ev.id, ev.interface_a, ev.interface_b, ev.ssid, ev.status, ev.tags, ev.tenant), function () {
      verifyWirelessLinkDoesNotExist(ev.auth_cipher, ev.auth_psk, ev.auth_type, ev.comments, ev.custom_fields, ev.description, ev.distance, ev.distance_unit, ev.id, ev.interface_a, ev.interface_b, ev.ssid, ev.status, ev.tags, ev.tenant);
    });
  }
});
