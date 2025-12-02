// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        // 1. Try basic capture
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        // 2. Try using pkMap if available
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        // 3. Try fallback scan for any ID-like field
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
  // waitForCableTerminationAdded(cable, cable_end, id, termination_id, termination_type);
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
  // waitForCableTerminationAdded(cable, cable_end, id, termination_id, termination_type);
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
  // waitForCableTerminationAdded(cable, cable_end, id, termination_id, termination_type);
  verifyCableTerminationExists(cable, cable_end, id, termination_id, termination_type);
  tryToAddExistingCableTermination(cable, cable_end, id, termination_id, termination_type);
  verifyCableTerminationExists(cable, cable_end, id, termination_id, termination_type);
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
  // waitForCableAdded(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
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
  // waitForCableAdded(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
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
  // waitForCableAdded(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  verifyCableExists(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  tryToAddExistingCable(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
  verifyCableExists(a_terminations, b_terminations, color, comments, custom_fields, description, id, label, length, length_unit, status, tags, tenant, type);
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
  // waitForConsolePortTemplateAdded(description, device_type, id, label, module_type, name, type);
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
  // waitForConsolePortTemplateAdded(description, device_type, id, label, module_type, name, type);
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
  // waitForConsolePortTemplateAdded(description, device_type, id, label, module_type, name, type);
  verifyConsolePortTemplateExists(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsolePortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsolePortTemplateExists(description, device_type, id, label, module_type, name, type);
});

// Story: crud:ConsolePort:nondet:1:1
bthread("crud:ConsolePort:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_230";
  let device = "device_230";
  let id = 230;
  let label = "label_230";
  let mark_connected = "mark_connected_230";
  let module = "module_230";
  let name = "name_230";
  let speed = 230;
  let tags = "tags_230";
  let type = "type_230";
  createConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  // waitForConsolePortAdded(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
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
  let mark_connected = "mark_connected_231";
  let module = "module_231";
  let name = "name_231";
  let speed = 231;
  let tags = "tags_231";
  let type = "type_231";
  createConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  // waitForConsolePortAdded(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
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
  let mark_connected = "mark_connected_236";
  let module = "module_236";
  let name = "name_236";
  let speed = 236;
  let tags = "tags_236";
  let type = "type_236";
  createConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  // waitForConsolePortAdded(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsolePortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToAddExistingConsolePort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsolePortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
});

// Story: crud:ConsoleServerPortTemplate:nondet:1:1
bthread("crud:ConsoleServerPortTemplate:nondet:1:1", function () {
  let description = "description_240";
  let device_type = "device_type_240";
  let id = 240;
  let label = "label_240";
  let module_type = "module_type_240";
  let name = "name_240";
  let type = "type_240";
  createConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  // waitForConsoleServerPortTemplateAdded(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, id, label, module_type, name, type);
  updateConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  deleteConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  tryToDeleteANonExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateDoesNotExist(description, device_type, id, label, module_type, name, type);
});

// Story: crud:ConsoleServerPortTemplate:nondet:1:2
bthread("crud:ConsoleServerPortTemplate:nondet:1:2", function () {
  let description = "description_241";
  let device_type = "device_type_241";
  let id = 241;
  let label = "label_241";
  let module_type = "module_type_241";
  let name = "name_241";
  let type = "type_241";
  createConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  // waitForConsoleServerPortTemplateAdded(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  updateConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, id, label, module_type, name, type);
  deleteConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  tryToDeleteANonExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateDoesNotExist(description, device_type, id, label, module_type, name, type);
});

// Story: crud:ConsoleServerPortTemplate:nondet:negative:dup-add
bthread("crud:ConsoleServerPortTemplate:nondet:negative:dup-add", function () {
  let description = "description_246";
  let device_type = "device_type_246";
  let id = 246;
  let label = "label_246";
  let module_type = "module_type_246";
  let name = "name_246";
  let type = "type_246";
  createConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  // waitForConsoleServerPortTemplateAdded(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, id, label, module_type, name, type);
  tryToAddExistingConsoleServerPortTemplate(description, device_type, id, label, module_type, name, type);
  verifyConsoleServerPortTemplateExists(description, device_type, id, label, module_type, name, type);
});

// Story: crud:ConsoleServerPort:nondet:1:1
bthread("crud:ConsoleServerPort:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_250";
  let device = "device_250";
  let id = 250;
  let label = "label_250";
  let mark_connected = "mark_connected_250";
  let module = "module_250";
  let name = "name_250";
  let speed = 250;
  let tags = "tags_250";
  let type = "type_250";
  createConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  // waitForConsoleServerPortAdded(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
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
  let description = "description_251";
  let device = "device_251";
  let id = 251;
  let label = "label_251";
  let mark_connected = "mark_connected_251";
  let module = "module_251";
  let name = "name_251";
  let speed = 251;
  let tags = "tags_251";
  let type = "type_251";
  createConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  // waitForConsoleServerPortAdded(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
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
  let description = "description_256";
  let device = "device_256";
  let id = 256;
  let label = "label_256";
  let mark_connected = "mark_connected_256";
  let module = "module_256";
  let name = "name_256";
  let speed = 256;
  let tags = "tags_256";
  let type = "type_256";
  createConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  // waitForConsoleServerPortAdded(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsoleServerPortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  tryToAddExistingConsoleServerPort(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
  verifyConsoleServerPortExists(custom_fields, description, device, id, label, mark_connected, module, name, speed, tags, type);
});

// Story: crud:DeviceBayTemplate:nondet:1:1
bthread("crud:DeviceBayTemplate:nondet:1:1", function () {
  let description = "description_260";
  let device_type = "device_type_260";
  let id = 260;
  let label = "label_260";
  let name = "name_260";
  createDeviceBayTemplate(description, device_type, id, label, name);
  // waitForDeviceBayTemplateAdded(description, device_type, id, label, name);
  tryToAddExistingDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, id, label, name);
  updateDeviceBayTemplate(description, device_type, id, label, name);
  deleteDeviceBayTemplate(description, device_type, id, label, name);
  tryToDeleteANonExistingDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateDoesNotExist(description, device_type, id, label, name);
});

// Story: crud:DeviceBayTemplate:nondet:1:2
bthread("crud:DeviceBayTemplate:nondet:1:2", function () {
  let description = "description_261";
  let device_type = "device_type_261";
  let id = 261;
  let label = "label_261";
  let name = "name_261";
  createDeviceBayTemplate(description, device_type, id, label, name);
  // waitForDeviceBayTemplateAdded(description, device_type, id, label, name);
  tryToAddExistingDeviceBayTemplate(description, device_type, id, label, name);
  updateDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, id, label, name);
  deleteDeviceBayTemplate(description, device_type, id, label, name);
  tryToDeleteANonExistingDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateDoesNotExist(description, device_type, id, label, name);
});

// Story: crud:DeviceBayTemplate:nondet:negative:dup-add
bthread("crud:DeviceBayTemplate:nondet:negative:dup-add", function () {
  let description = "description_266";
  let device_type = "device_type_266";
  let id = 266;
  let label = "label_266";
  let name = "name_266";
  createDeviceBayTemplate(description, device_type, id, label, name);
  // waitForDeviceBayTemplateAdded(description, device_type, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, id, label, name);
  tryToAddExistingDeviceBayTemplate(description, device_type, id, label, name);
  verifyDeviceBayTemplateExists(description, device_type, id, label, name);
});

// Story: crud:DeviceBay:nondet:1:1
bthread("crud:DeviceBay:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_270";
  let device = "device_270";
  let id = 270;
  let installed_device = "installed_device_270";
  let label = "label_270";
  let name = "name_270";
  let tags = "tags_270";
  createDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  // waitForDeviceBayAdded(custom_fields, description, device, id, installed_device, label, name, tags);
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
  let description = "description_271";
  let device = "device_271";
  let id = 271;
  let installed_device = "installed_device_271";
  let label = "label_271";
  let name = "name_271";
  let tags = "tags_271";
  createDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  // waitForDeviceBayAdded(custom_fields, description, device, id, installed_device, label, name, tags);
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
  let description = "description_276";
  let device = "device_276";
  let id = 276;
  let installed_device = "installed_device_276";
  let label = "label_276";
  let name = "name_276";
  let tags = "tags_276";
  createDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  // waitForDeviceBayAdded(custom_fields, description, device, id, installed_device, label, name, tags);
  verifyDeviceBayExists(custom_fields, description, device, id, installed_device, label, name, tags);
  tryToAddExistingDeviceBay(custom_fields, description, device, id, installed_device, label, name, tags);
  verifyDeviceBayExists(custom_fields, description, device, id, installed_device, label, name, tags);
});

// Story: crud:DeviceRole:nondet:1:1
bthread("crud:DeviceRole:nondet:1:1", function () {
  let color = "color_280";
  let comments = "comments_280";
  let config_template = "config_template_280";
  let custom_fields = {};
  let description = "description_280";
  let id = 280;
  let name = "name_280";
  let parent = 280;
  let slug = "slug_280";
  let tags = "tags_280";
  let vm_role = "vm_role_280";
  createDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  // waitForDeviceRoleAdded(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToAddExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  updateDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  deleteDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToDeleteANonExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleDoesNotExist(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
});

// Story: crud:DeviceRole:nondet:1:2
bthread("crud:DeviceRole:nondet:1:2", function () {
  let color = "color_281";
  let comments = "comments_281";
  let config_template = "config_template_281";
  let custom_fields = {};
  let description = "description_281";
  let id = 281;
  let name = "name_281";
  let parent = 281;
  let slug = "slug_281";
  let tags = "tags_281";
  let vm_role = "vm_role_281";
  createDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  // waitForDeviceRoleAdded(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToAddExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  updateDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  deleteDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToDeleteANonExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleDoesNotExist(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
});

// Story: crud:DeviceRole:nondet:negative:dup-add
bthread("crud:DeviceRole:nondet:negative:dup-add", function () {
  let color = "color_286";
  let comments = "comments_286";
  let config_template = "config_template_286";
  let custom_fields = {};
  let description = "description_286";
  let id = 286;
  let name = "name_286";
  let parent = 286;
  let slug = "slug_286";
  let tags = "tags_286";
  let vm_role = "vm_role_286";
  createDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  // waitForDeviceRoleAdded(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  tryToAddExistingDeviceRole(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
  verifyDeviceRoleExists(color, comments, config_template, custom_fields, description, id, name, parent, slug, tags, vm_role);
});

// Story: crud:DeviceType:nondet:1:1
bthread("crud:DeviceType:nondet:1:1", function () {
  let airflow = "airflow_290";
  let comments = "comments_290";
  let custom_fields = {};
  let default_platform = "default_platform_290";
  let description = "description_290";
  let exclude_from_utilization = "exclude_from_utilization_290";
  let front_image = "front_image_290";
  let id = 290;
  let is_full_depth = "is_full_depth_290";
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
  createDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  // waitForDeviceTypeAdded(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToAddExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  updateDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  deleteDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToDeleteANonExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeDoesNotExist(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
});

// Story: crud:DeviceType:nondet:1:2
bthread("crud:DeviceType:nondet:1:2", function () {
  let airflow = "airflow_291";
  let comments = "comments_291";
  let custom_fields = {};
  let default_platform = "default_platform_291";
  let description = "description_291";
  let exclude_from_utilization = "exclude_from_utilization_291";
  let front_image = "front_image_291";
  let id = 291;
  let is_full_depth = "is_full_depth_291";
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
  createDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  // waitForDeviceTypeAdded(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToAddExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  updateDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  deleteDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToDeleteANonExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeDoesNotExist(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
});

// Story: crud:DeviceType:nondet:negative:dup-add
bthread("crud:DeviceType:nondet:negative:dup-add", function () {
  let airflow = "airflow_296";
  let comments = "comments_296";
  let custom_fields = {};
  let default_platform = "default_platform_296";
  let description = "description_296";
  let exclude_from_utilization = "exclude_from_utilization_296";
  let front_image = "front_image_296";
  let id = 296;
  let is_full_depth = "is_full_depth_296";
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
  createDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  // waitForDeviceTypeAdded(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  tryToAddExistingDeviceType(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
  verifyDeviceTypeExists(airflow, comments, custom_fields, default_platform, description, exclude_from_utilization, front_image, id, is_full_depth, manufacturer, model, part_number, rear_image, slug, subdevice_role, tags, u_height, weight, weight_unit);
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
  let device_type = "device_type_300";
  let face = "face_300";
  let id = 300;
  let latitude = 300;
  let local_context_data = "local_context_data_300";
  let location = "location_300";
  let longitude = 300;
  let name = "name_300";
  let oob_ip = "oob_ip_300";
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
  createDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  // waitForDeviceAdded(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToAddExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  updateDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  deleteDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToDeleteANonExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceDoesNotExist(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
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
  let device_type = "device_type_301";
  let face = "face_301";
  let id = 301;
  let latitude = 301;
  let local_context_data = "local_context_data_301";
  let location = "location_301";
  let longitude = 301;
  let name = "name_301";
  let oob_ip = "oob_ip_301";
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
  createDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  // waitForDeviceAdded(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToAddExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  updateDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  deleteDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToDeleteANonExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceDoesNotExist(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
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
  let device_type = "device_type_306";
  let face = "face_306";
  let id = 306;
  let latitude = 306;
  let local_context_data = "local_context_data_306";
  let location = "location_306";
  let longitude = 306;
  let name = "name_306";
  let oob_ip = "oob_ip_306";
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
  createDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  // waitForDeviceAdded(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  tryToAddExistingDevice(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
  verifyDeviceExists(airflow, asset_tag, cluster, comments, config_template, custom_fields, description, device_type, face, id, latitude, local_context_data, location, longitude, name, oob_ip, platform, position, primary_ip4, primary_ip6, rack, role, serial, site, status, tags, tenant, vc_position, vc_priority, virtual_chassis);
});

// Story: crud:FrontPortTemplate:nondet:1:1
bthread("crud:FrontPortTemplate:nondet:1:1", function () {
  let color = "color_310";
  let description = "description_310";
  let device_type = "device_type_310";
  let id = 310;
  let label = "label_310";
  let module_type = "module_type_310";
  let name = "name_310";
  let rear_port = "rear_port_310";
  let rear_port_position = 310;
  let type = "type_310";
  createFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  // waitForFrontPortTemplateAdded(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToAddExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateExists(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  updateFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  deleteFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToDeleteANonExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
});

// Story: crud:FrontPortTemplate:nondet:1:2
bthread("crud:FrontPortTemplate:nondet:1:2", function () {
  let color = "color_311";
  let description = "description_311";
  let device_type = "device_type_311";
  let id = 311;
  let label = "label_311";
  let module_type = "module_type_311";
  let name = "name_311";
  let rear_port = "rear_port_311";
  let rear_port_position = 311;
  let type = "type_311";
  createFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  // waitForFrontPortTemplateAdded(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToAddExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  updateFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateExists(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  deleteFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToDeleteANonExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
});

// Story: crud:FrontPortTemplate:nondet:negative:dup-add
bthread("crud:FrontPortTemplate:nondet:negative:dup-add", function () {
  let color = "color_316";
  let description = "description_316";
  let device_type = "device_type_316";
  let id = 316;
  let label = "label_316";
  let module_type = "module_type_316";
  let name = "name_316";
  let rear_port = "rear_port_316";
  let rear_port_position = 316;
  let type = "type_316";
  createFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  // waitForFrontPortTemplateAdded(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateExists(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  tryToAddExistingFrontPortTemplate(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
  verifyFrontPortTemplateExists(color, description, device_type, id, label, module_type, name, rear_port, rear_port_position, type);
});

// Story: crud:FrontPort:nondet:1:1
bthread("crud:FrontPort:nondet:1:1", function () {
  let color = "color_320";
  let custom_fields = {};
  let description = "description_320";
  let device = "device_320";
  let id = 320;
  let label = "label_320";
  let mark_connected = "mark_connected_320";
  let module = "module_320";
  let name = "name_320";
  let rear_port = 320;
  let rear_port_position = 320;
  let tags = "tags_320";
  let type = "type_320";
  createFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  // waitForFrontPortAdded(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  updateFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  deleteFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToDeleteANonExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortDoesNotExist(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
});

// Story: crud:FrontPort:nondet:1:2
bthread("crud:FrontPort:nondet:1:2", function () {
  let color = "color_321";
  let custom_fields = {};
  let description = "description_321";
  let device = "device_321";
  let id = 321;
  let label = "label_321";
  let mark_connected = "mark_connected_321";
  let module = "module_321";
  let name = "name_321";
  let rear_port = 321;
  let rear_port_position = 321;
  let tags = "tags_321";
  let type = "type_321";
  createFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  // waitForFrontPortAdded(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  updateFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  deleteFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToDeleteANonExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortDoesNotExist(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
});

// Story: crud:FrontPort:nondet:negative:dup-add
bthread("crud:FrontPort:nondet:negative:dup-add", function () {
  let color = "color_326";
  let custom_fields = {};
  let description = "description_326";
  let device = "device_326";
  let id = 326;
  let label = "label_326";
  let mark_connected = "mark_connected_326";
  let module = "module_326";
  let name = "name_326";
  let rear_port = 326;
  let rear_port_position = 326;
  let tags = "tags_326";
  let type = "type_326";
  createFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  // waitForFrontPortAdded(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  tryToAddExistingFrontPort(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
  verifyFrontPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, rear_port, rear_port_position, tags, type);
});

// Story: crud:FrontPortPaths:read_only
bthread("crud:FrontPortPaths:read_only", function () {
  let id = 330;
  verifyFrontPortPathsExists(id);
});

// Story: crud:InterfaceTemplate:nondet:1:1
bthread("crud:InterfaceTemplate:nondet:1:1", function () {
  let bridge = 340;
  let description = "description_340";
  let device_type = "device_type_340";
  let enabled = "enabled_340";
  let id = 340;
  let label = "label_340";
  let mgmt_only = "mgmt_only_340";
  let module_type = "module_type_340";
  let name = "name_340";
  let poe_mode = "poe_mode_340";
  let poe_type = "poe_type_340";
  let rf_role = "rf_role_340";
  let type = "type_340";
  createInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  // waitForInterfaceTemplateAdded(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  tryToAddExistingInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  verifyInterfaceTemplateExists(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  updateInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  deleteInterfaceTemplatesBulk(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  tryToDeleteANonExistingInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  verifyInterfaceTemplateDoesNotExist(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
});

// Story: crud:InterfaceTemplate:nondet:1:2
bthread("crud:InterfaceTemplate:nondet:1:2", function () {
  let bridge = 341;
  let description = "description_341";
  let device_type = "device_type_341";
  let enabled = "enabled_341";
  let id = 341;
  let label = "label_341";
  let mgmt_only = "mgmt_only_341";
  let module_type = "module_type_341";
  let name = "name_341";
  let poe_mode = "poe_mode_341";
  let poe_type = "poe_type_341";
  let rf_role = "rf_role_341";
  let type = "type_341";
  createInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  // waitForInterfaceTemplateAdded(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  tryToAddExistingInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  updateInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  verifyInterfaceTemplateExists(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  deleteInterfaceTemplatesBulk(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  tryToDeleteANonExistingInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  verifyInterfaceTemplateDoesNotExist(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
});

// Story: crud:InterfaceTemplate:nondet:negative:dup-add
bthread("crud:InterfaceTemplate:nondet:negative:dup-add", function () {
  let bridge = 346;
  let description = "description_346";
  let device_type = "device_type_346";
  let enabled = "enabled_346";
  let id = 346;
  let label = "label_346";
  let mgmt_only = "mgmt_only_346";
  let module_type = "module_type_346";
  let name = "name_346";
  let poe_mode = "poe_mode_346";
  let poe_type = "poe_type_346";
  let rf_role = "rf_role_346";
  let type = "type_346";
  createInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  // waitForInterfaceTemplateAdded(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  verifyInterfaceTemplateExists(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  tryToAddExistingInterfaceTemplate(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
  verifyInterfaceTemplateExists(bridge, description, device_type, enabled, id, label, mgmt_only, module_type, name, poe_mode, poe_type, rf_role, type);
});

// Story: crud:Interface:nondet:1:1
bthread("crud:Interface:nondet:1:1", function () {
  let bridge = 350;
  let custom_fields = {};
  let description = "description_350";
  let enabled = "enabled_350";
  let id = 350;
  let mode = "mode_350";
  let mtu = 350;
  let name = "name_350";
  let parent = 350;
  let primary_mac_address = "primary_mac_address_350";
  let qinq_svlan = "qinq_svlan_350";
  let tagged_vlans = "tagged_vlans_350";
  let tags = "tags_350";
  let untagged_vlan = "untagged_vlan_350";
  let virtual_machine = "virtual_machine_350";
  let vlan_translation_policy = "vlan_translation_policy_350";
  let vrf = "vrf_350";
  createInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  // waitForInterfaceAdded(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  tryToAddExistingInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceExists(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  updateInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  deleteInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  tryToDeleteANonExistingInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceDoesNotExist(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
});

// Story: crud:Interface:nondet:1:2
bthread("crud:Interface:nondet:1:2", function () {
  let bridge = 351;
  let custom_fields = {};
  let description = "description_351";
  let enabled = "enabled_351";
  let id = 351;
  let mode = "mode_351";
  let mtu = 351;
  let name = "name_351";
  let parent = 351;
  let primary_mac_address = "primary_mac_address_351";
  let qinq_svlan = "qinq_svlan_351";
  let tagged_vlans = "tagged_vlans_351";
  let tags = "tags_351";
  let untagged_vlan = "untagged_vlan_351";
  let virtual_machine = "virtual_machine_351";
  let vlan_translation_policy = "vlan_translation_policy_351";
  let vrf = "vrf_351";
  createInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  // waitForInterfaceAdded(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  tryToAddExistingInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  updateInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceExists(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  deleteInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  tryToDeleteANonExistingInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceDoesNotExist(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
});

// Story: crud:Interface:nondet:negative:dup-add
bthread("crud:Interface:nondet:negative:dup-add", function () {
  let bridge = 356;
  let custom_fields = {};
  let description = "description_356";
  let enabled = "enabled_356";
  let id = 356;
  let mode = "mode_356";
  let mtu = 356;
  let name = "name_356";
  let parent = 356;
  let primary_mac_address = "primary_mac_address_356";
  let qinq_svlan = "qinq_svlan_356";
  let tagged_vlans = "tagged_vlans_356";
  let tags = "tags_356";
  let untagged_vlan = "untagged_vlan_356";
  let virtual_machine = "virtual_machine_356";
  let vlan_translation_policy = "vlan_translation_policy_356";
  let vrf = "vrf_356";
  createInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  // waitForInterfaceAdded(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceExists(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  tryToAddExistingInterface(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
  verifyInterfaceExists(bridge, custom_fields, description, enabled, id, mode, mtu, name, parent, primary_mac_address, qinq_svlan, tagged_vlans, tags, untagged_vlan, virtual_machine, vlan_translation_policy, vrf);
});

// Story: crud:InventoryItemRole:nondet:1:1
bthread("crud:InventoryItemRole:nondet:1:1", function () {
  let color = "color_360";
  let custom_fields = {};
  let description = "description_360";
  let id = 360;
  let name = "name_360";
  let slug = "slug_360";
  let tags = "tags_360";
  createInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  // waitForInventoryItemRoleAdded(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  verifyInventoryItemRoleExists(color, custom_fields, description, id, name, slug, tags);
  updateInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  deleteInventoryItemRolesBulk(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  verifyInventoryItemRoleDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:InventoryItemRole:nondet:1:2
bthread("crud:InventoryItemRole:nondet:1:2", function () {
  let color = "color_361";
  let custom_fields = {};
  let description = "description_361";
  let id = 361;
  let name = "name_361";
  let slug = "slug_361";
  let tags = "tags_361";
  createInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  // waitForInventoryItemRoleAdded(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  updateInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  verifyInventoryItemRoleExists(color, custom_fields, description, id, name, slug, tags);
  deleteInventoryItemRolesBulk(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  verifyInventoryItemRoleDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:InventoryItemRole:nondet:negative:dup-add
bthread("crud:InventoryItemRole:nondet:negative:dup-add", function () {
  let color = "color_366";
  let custom_fields = {};
  let description = "description_366";
  let id = 366;
  let name = "name_366";
  let slug = "slug_366";
  let tags = "tags_366";
  createInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  // waitForInventoryItemRoleAdded(color, custom_fields, description, id, name, slug, tags);
  verifyInventoryItemRoleExists(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingInventoryItemRole(color, custom_fields, description, id, name, slug, tags);
  verifyInventoryItemRoleExists(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:InventoryItemTemplate:nondet:1:1
bthread("crud:InventoryItemTemplate:nondet:1:1", function () {
  let component_id = 370;
  let component_type = "component_type_370";
  let description = "description_370";
  let device_type = "device_type_370";
  let id = 370;
  let label = "label_370";
  let manufacturer = "manufacturer_370";
  let name = "name_370";
  let parent = 370;
  let part_id = 370;
  let role = "role_370";
  createInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  // waitForInventoryItemTemplateAdded(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  tryToAddExistingInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  verifyInventoryItemTemplateExists(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  updateInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  deleteInventoryItemTemplatesBulk(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  tryToDeleteANonExistingInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  verifyInventoryItemTemplateDoesNotExist(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
});

// Story: crud:InventoryItemTemplate:nondet:1:2
bthread("crud:InventoryItemTemplate:nondet:1:2", function () {
  let component_id = 371;
  let component_type = "component_type_371";
  let description = "description_371";
  let device_type = "device_type_371";
  let id = 371;
  let label = "label_371";
  let manufacturer = "manufacturer_371";
  let name = "name_371";
  let parent = 371;
  let part_id = 371;
  let role = "role_371";
  createInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  // waitForInventoryItemTemplateAdded(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  tryToAddExistingInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  updateInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  verifyInventoryItemTemplateExists(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  deleteInventoryItemTemplatesBulk(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  tryToDeleteANonExistingInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  verifyInventoryItemTemplateDoesNotExist(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
});

// Story: crud:InventoryItemTemplate:nondet:negative:dup-add
bthread("crud:InventoryItemTemplate:nondet:negative:dup-add", function () {
  let component_id = 376;
  let component_type = "component_type_376";
  let description = "description_376";
  let device_type = "device_type_376";
  let id = 376;
  let label = "label_376";
  let manufacturer = "manufacturer_376";
  let name = "name_376";
  let parent = 376;
  let part_id = 376;
  let role = "role_376";
  createInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  // waitForInventoryItemTemplateAdded(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  verifyInventoryItemTemplateExists(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  tryToAddExistingInventoryItemTemplate(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
  verifyInventoryItemTemplateExists(component_id, component_type, description, device_type, id, label, manufacturer, name, parent, part_id, role);
});

// Story: crud:InventoryItem:nondet:1:1
bthread("crud:InventoryItem:nondet:1:1", function () {
  let asset_tag = "asset_tag_380";
  let component_id = 380;
  let component_type = "component_type_380";
  let custom_fields = {};
  let description = "description_380";
  let device = "device_380";
  let discovered = "discovered_380";
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
  // waitForInventoryItemAdded(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
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
  let discovered = "discovered_381";
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
  // waitForInventoryItemAdded(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
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
  let discovered = "discovered_386";
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
  // waitForInventoryItemAdded(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  verifyInventoryItemExists(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  tryToAddExistingInventoryItem(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
  verifyInventoryItemExists(asset_tag, component_id, component_type, custom_fields, description, device, discovered, id, label, manufacturer, name, parent, part_id, role, serial, status, tags);
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
  // waitForLocationAdded(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
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
  // waitForLocationAdded(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
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
  // waitForLocationAdded(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  verifyLocationExists(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  tryToAddExistingLocation(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
  verifyLocationExists(comments, custom_fields, description, facility, id, name, parent, site, slug, status, tags, tenant);
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
  // waitForMACAddressAdded(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
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
  // waitForMACAddressAdded(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
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
  // waitForMACAddressAdded(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  verifyMACAddressExists(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  tryToAddExistingMACAddress(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
  verifyMACAddressExists(assigned_object_id, assigned_object_type, comments, custom_fields, description, id, mac_address, tags);
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
  // waitForManufacturerAdded(custom_fields, description, id, name, slug, tags);
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
  // waitForManufacturerAdded(custom_fields, description, id, name, slug, tags);
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
  // waitForManufacturerAdded(custom_fields, description, id, name, slug, tags);
  verifyManufacturerExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingManufacturer(custom_fields, description, id, name, slug, tags);
  verifyManufacturerExists(custom_fields, description, id, name, slug, tags);
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
  // waitForModuleBayTemplateAdded(description, device_type, id, label, module_type, name, position);
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
  // waitForModuleBayTemplateAdded(description, device_type, id, label, module_type, name, position);
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
  // waitForModuleBayTemplateAdded(description, device_type, id, label, module_type, name, position);
  verifyModuleBayTemplateExists(description, device_type, id, label, module_type, name, position);
  tryToAddExistingModuleBayTemplate(description, device_type, id, label, module_type, name, position);
  verifyModuleBayTemplateExists(description, device_type, id, label, module_type, name, position);
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
  // waitForModuleBayAdded(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
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
  // waitForModuleBayAdded(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
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
  // waitForModuleBayAdded(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  verifyModuleBayExists(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  tryToAddExistingModuleBay(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
  verifyModuleBayExists(custom_fields, description, device, id, installed_module, label, module, name, position, tags);
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
  // waitForModuleTypeProfileAdded(comments, custom_fields, description, id, name, schema, tags);
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
  // waitForModuleTypeProfileAdded(comments, custom_fields, description, id, name, schema, tags);
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
  // waitForModuleTypeProfileAdded(comments, custom_fields, description, id, name, schema, tags);
  verifyModuleTypeProfileExists(comments, custom_fields, description, id, name, schema, tags);
  tryToAddExistingModuleTypeProfile(comments, custom_fields, description, id, name, schema, tags);
  verifyModuleTypeProfileExists(comments, custom_fields, description, id, name, schema, tags);
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
  // waitForModuleTypeAdded(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
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
  // waitForModuleTypeAdded(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
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
  // waitForModuleTypeAdded(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  verifyModuleTypeExists(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  tryToAddExistingModuleType(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
  verifyModuleTypeExists(airflow, attributes, comments, custom_fields, description, id, manufacturer, model, part_number, profile, tags, weight, weight_unit);
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
  // waitForModuleAdded(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
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
  // waitForModuleAdded(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
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
  // waitForModuleAdded(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  verifyModuleExists(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  tryToAddExistingModule(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
  verifyModuleExists(asset_tag, comments, custom_fields, description, device, id, module_bay, module_type, serial, status, tags);
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
  // waitForPlatformAdded(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
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
  // waitForPlatformAdded(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
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
  // waitForPlatformAdded(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  verifyPlatformExists(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  tryToAddExistingPlatform(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
  verifyPlatformExists(comments, config_template, custom_fields, description, id, manufacturer, name, parent, slug, tags);
});

// Story: crud:PowerFeed:nondet:1:1
bthread("crud:PowerFeed:nondet:1:1", function () {
  let amperage = 480;
  let comments = "comments_480";
  let custom_fields = {};
  let description = "description_480";
  let id = 480;
  let mark_connected = "mark_connected_480";
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
  // waitForPowerFeedAdded(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
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
  let mark_connected = "mark_connected_481";
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
  // waitForPowerFeedAdded(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
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
  let mark_connected = "mark_connected_486";
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
  // waitForPowerFeedAdded(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  verifyPowerFeedExists(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  tryToAddExistingPowerFeed(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
  verifyPowerFeedExists(amperage, comments, custom_fields, description, id, mark_connected, max_utilization, name, phase, power_panel, rack, status, supply, tags, tenant, type, voltage);
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
  // waitForPowerOutletTemplateAdded(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
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
  // waitForPowerOutletTemplateAdded(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
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
  // waitForPowerOutletTemplateAdded(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  verifyPowerOutletTemplateExists(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  tryToAddExistingPowerOutletTemplate(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
  verifyPowerOutletTemplateExists(description, device_type, feed_leg, id, label, module_type, name, power_port, type);
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
  let mark_connected = "mark_connected_500";
  let module = "module_500";
  let name = "name_500";
  let power_port = "power_port_500";
  let status = "status_500";
  let tags = "tags_500";
  let type = "type_500";
  createPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  // waitForPowerOutletAdded(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
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
  let mark_connected = "mark_connected_501";
  let module = "module_501";
  let name = "name_501";
  let power_port = "power_port_501";
  let status = "status_501";
  let tags = "tags_501";
  let type = "type_501";
  createPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  // waitForPowerOutletAdded(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
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
  let mark_connected = "mark_connected_506";
  let module = "module_506";
  let name = "name_506";
  let power_port = "power_port_506";
  let status = "status_506";
  let tags = "tags_506";
  let type = "type_506";
  createPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  // waitForPowerOutletAdded(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  verifyPowerOutletExists(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  tryToAddExistingPowerOutlet(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
  verifyPowerOutletExists(color, custom_fields, description, device, feed_leg, id, label, mark_connected, module, name, power_port, status, tags, type);
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
  // waitForPowerPanelAdded(comments, custom_fields, description, id, location, name, site, tags);
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
  // waitForPowerPanelAdded(comments, custom_fields, description, id, location, name, site, tags);
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
  // waitForPowerPanelAdded(comments, custom_fields, description, id, location, name, site, tags);
  verifyPowerPanelExists(comments, custom_fields, description, id, location, name, site, tags);
  tryToAddExistingPowerPanel(comments, custom_fields, description, id, location, name, site, tags);
  verifyPowerPanelExists(comments, custom_fields, description, id, location, name, site, tags);
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
  // waitForPowerPortTemplateAdded(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
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
  // waitForPowerPortTemplateAdded(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
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
  // waitForPowerPortTemplateAdded(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  verifyPowerPortTemplateExists(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  tryToAddExistingPowerPortTemplate(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
  verifyPowerPortTemplateExists(allocated_draw, description, device_type, id, label, maximum_draw, module_type, name, type);
});

// Story: crud:PowerPort:nondet:1:1
bthread("crud:PowerPort:nondet:1:1", function () {
  let allocated_draw = 530;
  let custom_fields = {};
  let description = "description_530";
  let device = "device_530";
  let id = 530;
  let label = "label_530";
  let mark_connected = "mark_connected_530";
  let maximum_draw = 530;
  let module = "module_530";
  let name = "name_530";
  let tags = "tags_530";
  let type = "type_530";
  createPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  // waitForPowerPortAdded(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
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
  let mark_connected = "mark_connected_531";
  let maximum_draw = 531;
  let module = "module_531";
  let name = "name_531";
  let tags = "tags_531";
  let type = "type_531";
  createPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  // waitForPowerPortAdded(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
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
  let mark_connected = "mark_connected_536";
  let maximum_draw = 536;
  let module = "module_536";
  let name = "name_536";
  let tags = "tags_536";
  let type = "type_536";
  createPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  // waitForPowerPortAdded(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  verifyPowerPortExists(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  tryToAddExistingPowerPort(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
  verifyPowerPortExists(allocated_draw, custom_fields, description, device, id, label, mark_connected, maximum_draw, module, name, tags, type);
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
  // waitForRackReservationAdded(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
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
  // waitForRackReservationAdded(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
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
  // waitForRackReservationAdded(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  verifyRackReservationExists(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  tryToAddExistingRackReservation(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
  verifyRackReservationExists(comments, custom_fields, description, id, rack, status, tags, tenant, units, user);
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
  // waitForRackRoleAdded(color, custom_fields, description, id, name, slug, tags);
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
  // waitForRackRoleAdded(color, custom_fields, description, id, name, slug, tags);
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
  // waitForRackRoleAdded(color, custom_fields, description, id, name, slug, tags);
  verifyRackRoleExists(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingRackRole(color, custom_fields, description, id, name, slug, tags);
  verifyRackRoleExists(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:RackType:nondet:1:1
bthread("crud:RackType:nondet:1:1", function () {
  let comments = "comments_560";
  let custom_fields = {};
  let desc_units = "desc_units_560";
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
  createRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  // waitForRackTypeAdded(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToAddExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  updateRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  deleteRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeDoesNotExist(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
});

// Story: crud:RackType:nondet:1:2
bthread("crud:RackType:nondet:1:2", function () {
  let comments = "comments_561";
  let custom_fields = {};
  let desc_units = "desc_units_561";
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
  createRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  // waitForRackTypeAdded(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToAddExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  updateRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  deleteRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeDoesNotExist(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
});

// Story: crud:RackType:nondet:negative:dup-add
bthread("crud:RackType:nondet:negative:dup-add", function () {
  let comments = "comments_566";
  let custom_fields = {};
  let desc_units = "desc_units_566";
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
  createRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  // waitForRackTypeAdded(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  tryToAddExistingRackType(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
  verifyRackTypeExists(comments, custom_fields, desc_units, description, form_factor, id, manufacturer, max_weight, model, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, slug, starting_unit, tags, u_height, weight, weight_unit, width);
});

// Story: crud:Rack:nondet:1:1
bthread("crud:Rack:nondet:1:1", function () {
  let airflow = "airflow_570";
  let asset_tag = "asset_tag_570";
  let comments = "comments_570";
  let custom_fields = {};
  let desc_units = "desc_units_570";
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
  let u_height = 570;
  let weight = 570;
  let weight_unit = "weight_unit_570";
  let width = 570;
  createRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  // waitForRackAdded(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToAddExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  updateRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  deleteRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackDoesNotExist(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
});

// Story: crud:Rack:nondet:1:2
bthread("crud:Rack:nondet:1:2", function () {
  let airflow = "airflow_571";
  let asset_tag = "asset_tag_571";
  let comments = "comments_571";
  let custom_fields = {};
  let desc_units = "desc_units_571";
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
  let u_height = 571;
  let weight = 571;
  let weight_unit = "weight_unit_571";
  let width = 571;
  createRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  // waitForRackAdded(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToAddExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  updateRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  deleteRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToDeleteANonExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackDoesNotExist(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
});

// Story: crud:Rack:nondet:negative:dup-add
bthread("crud:Rack:nondet:negative:dup-add", function () {
  let airflow = "airflow_576";
  let asset_tag = "asset_tag_576";
  let comments = "comments_576";
  let custom_fields = {};
  let desc_units = "desc_units_576";
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
  let u_height = 576;
  let weight = 576;
  let weight_unit = "weight_unit_576";
  let width = 576;
  createRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  // waitForRackAdded(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  tryToAddExistingRack(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
  verifyRackExists(airflow, asset_tag, comments, custom_fields, desc_units, description, facility_id, form_factor, id, location, max_weight, mounting_depth, name, outer_depth, outer_height, outer_unit, outer_width, rack_type, role, serial, site, starting_unit, status, tags, tenant, u_height, weight, weight_unit, width);
});

// Story: crud:RearPortTemplate:nondet:1:1
bthread("crud:RearPortTemplate:nondet:1:1", function () {
  let color = "color_580";
  let description = "description_580";
  let device_type = "device_type_580";
  let id = 580;
  let label = "label_580";
  let module_type = "module_type_580";
  let name = "name_580";
  let positions = 580;
  let type = "type_580";
  createRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  // waitForRearPortTemplateAdded(color, description, device_type, id, label, module_type, name, positions, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, type);
  updateRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  deleteRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  tryToDeleteANonExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  verifyRearPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, positions, type);
});

// Story: crud:RearPortTemplate:nondet:1:2
bthread("crud:RearPortTemplate:nondet:1:2", function () {
  let color = "color_581";
  let description = "description_581";
  let device_type = "device_type_581";
  let id = 581;
  let label = "label_581";
  let module_type = "module_type_581";
  let name = "name_581";
  let positions = 581;
  let type = "type_581";
  createRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  // waitForRearPortTemplateAdded(color, description, device_type, id, label, module_type, name, positions, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  updateRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, type);
  deleteRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  tryToDeleteANonExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  verifyRearPortTemplateDoesNotExist(color, description, device_type, id, label, module_type, name, positions, type);
});

// Story: crud:RearPortTemplate:nondet:negative:dup-add
bthread("crud:RearPortTemplate:nondet:negative:dup-add", function () {
  let color = "color_586";
  let description = "description_586";
  let device_type = "device_type_586";
  let id = 586;
  let label = "label_586";
  let module_type = "module_type_586";
  let name = "name_586";
  let positions = 586;
  let type = "type_586";
  createRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  // waitForRearPortTemplateAdded(color, description, device_type, id, label, module_type, name, positions, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, type);
  tryToAddExistingRearPortTemplate(color, description, device_type, id, label, module_type, name, positions, type);
  verifyRearPortTemplateExists(color, description, device_type, id, label, module_type, name, positions, type);
});

// Story: crud:RearPort:nondet:1:1
bthread("crud:RearPort:nondet:1:1", function () {
  let color = "color_590";
  let custom_fields = {};
  let description = "description_590";
  let device = "device_590";
  let id = 590;
  let label = "label_590";
  let mark_connected = "mark_connected_590";
  let module = "module_590";
  let name = "name_590";
  let positions = 590;
  let tags = "tags_590";
  let type = "type_590";
  createRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  // waitForRearPortAdded(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  tryToAddExistingRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  verifyRearPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  updateRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  deleteRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  tryToDeleteANonExistingRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  verifyRearPortDoesNotExist(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
});

// Story: crud:RearPort:nondet:1:2
bthread("crud:RearPort:nondet:1:2", function () {
  let color = "color_591";
  let custom_fields = {};
  let description = "description_591";
  let device = "device_591";
  let id = 591;
  let label = "label_591";
  let mark_connected = "mark_connected_591";
  let module = "module_591";
  let name = "name_591";
  let positions = 591;
  let tags = "tags_591";
  let type = "type_591";
  createRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  // waitForRearPortAdded(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  tryToAddExistingRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  updateRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  verifyRearPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  deleteRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  tryToDeleteANonExistingRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  verifyRearPortDoesNotExist(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
});

// Story: crud:RearPort:nondet:negative:dup-add
bthread("crud:RearPort:nondet:negative:dup-add", function () {
  let color = "color_596";
  let custom_fields = {};
  let description = "description_596";
  let device = "device_596";
  let id = 596;
  let label = "label_596";
  let mark_connected = "mark_connected_596";
  let module = "module_596";
  let name = "name_596";
  let positions = 596;
  let tags = "tags_596";
  let type = "type_596";
  createRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  // waitForRearPortAdded(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  verifyRearPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  tryToAddExistingRearPort(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
  verifyRearPortExists(color, custom_fields, description, device, id, label, mark_connected, module, name, positions, tags, type);
});

// Story: crud:Region:nondet:1:1
bthread("crud:Region:nondet:1:1", function () {
  let comments = "comments_600";
  let custom_fields = {};
  let description = "description_600";
  let id = 600;
  let name = "name_600";
  let parent = 600;
  let slug = "slug_600";
  let tags = "tags_600";
  createRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  // waitForRegionAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, custom_fields, description, id, name, parent, slug, tags);
  updateRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:Region:nondet:1:2
bthread("crud:Region:nondet:1:2", function () {
  let comments = "comments_601";
  let custom_fields = {};
  let description = "description_601";
  let id = 601;
  let name = "name_601";
  let parent = 601;
  let slug = "slug_601";
  let tags = "tags_601";
  createRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  // waitForRegionAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  updateRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:Region:nondet:negative:dup-add
bthread("crud:Region:nondet:negative:dup-add", function () {
  let comments = "comments_606";
  let custom_fields = {};
  let description = "description_606";
  let id = 606;
  let name = "name_606";
  let parent = 606;
  let slug = "slug_606";
  let tags = "tags_606";
  createRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  // waitForRegionAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingRegion(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyRegionExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:SiteGroup:nondet:1:1
bthread("crud:SiteGroup:nondet:1:1", function () {
  let comments = "comments_610";
  let custom_fields = {};
  let description = "description_610";
  let id = 610;
  let name = "name_610";
  let parent = 610;
  let slug = "slug_610";
  let tags = "tags_610";
  createSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  // waitForSiteGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  updateSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:SiteGroup:nondet:1:2
bthread("crud:SiteGroup:nondet:1:2", function () {
  let comments = "comments_611";
  let custom_fields = {};
  let description = "description_611";
  let id = 611;
  let name = "name_611";
  let parent = 611;
  let slug = "slug_611";
  let tags = "tags_611";
  createSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  // waitForSiteGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  updateSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:SiteGroup:nondet:negative:dup-add
bthread("crud:SiteGroup:nondet:negative:dup-add", function () {
  let comments = "comments_616";
  let custom_fields = {};
  let description = "description_616";
  let id = 616;
  let name = "name_616";
  let parent = 616;
  let slug = "slug_616";
  let tags = "tags_616";
  createSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  // waitForSiteGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingSiteGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifySiteGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:Site:nondet:1:1
bthread("crud:Site:nondet:1:1", function () {
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
  createSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  // waitForSiteAdded(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToAddExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  updateSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  deleteSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToDeleteANonExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteDoesNotExist(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
});

// Story: crud:Site:nondet:1:2
bthread("crud:Site:nondet:1:2", function () {
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
  createSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  // waitForSiteAdded(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToAddExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  updateSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  deleteSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToDeleteANonExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteDoesNotExist(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
});

// Story: crud:Site:nondet:negative:dup-add
bthread("crud:Site:nondet:negative:dup-add", function () {
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
  createSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  // waitForSiteAdded(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  tryToAddExistingSite(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
  verifySiteExists(asns, comments, custom_fields, description, facility, group, id, latitude, longitude, name, physical_address, region, shipping_address, slug, status, tags, tenant, time_zone);
});

// Story: crud:VirtualChassis:nondet:1:1
bthread("crud:VirtualChassis:nondet:1:1", function () {
  let comments = "comments_630";
  let custom_fields = {};
  let description = "description_630";
  let domain = "domain_630";
  let id = 630;
  let master = 630;
  let name = "name_630";
  let tags = "tags_630";
  createVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  // waitForVirtualChassisAdded(comments, custom_fields, description, domain, id, master, name, tags);
  tryToAddExistingVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisExists(comments, custom_fields, description, domain, id, master, name, tags);
  updateVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  deleteVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  tryToDeleteANonExistingVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisDoesNotExist(comments, custom_fields, description, domain, id, master, name, tags);
});

// Story: crud:VirtualChassis:nondet:1:2
bthread("crud:VirtualChassis:nondet:1:2", function () {
  let comments = "comments_631";
  let custom_fields = {};
  let description = "description_631";
  let domain = "domain_631";
  let id = 631;
  let master = 631;
  let name = "name_631";
  let tags = "tags_631";
  createVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  // waitForVirtualChassisAdded(comments, custom_fields, description, domain, id, master, name, tags);
  tryToAddExistingVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  updateVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisExists(comments, custom_fields, description, domain, id, master, name, tags);
  deleteVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  tryToDeleteANonExistingVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisDoesNotExist(comments, custom_fields, description, domain, id, master, name, tags);
});

// Story: crud:VirtualChassis:nondet:negative:dup-add
bthread("crud:VirtualChassis:nondet:negative:dup-add", function () {
  let comments = "comments_636";
  let custom_fields = {};
  let description = "description_636";
  let domain = "domain_636";
  let id = 636;
  let master = 636;
  let name = "name_636";
  let tags = "tags_636";
  createVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  // waitForVirtualChassisAdded(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisExists(comments, custom_fields, description, domain, id, master, name, tags);
  tryToAddExistingVirtualChassis(comments, custom_fields, description, domain, id, master, name, tags);
  verifyVirtualChassisExists(comments, custom_fields, description, domain, id, master, name, tags);
});

// Story: crud:VirtualDeviceContext:nondet:1:1
bthread("crud:VirtualDeviceContext:nondet:1:1", function () {
  let comments = "comments_640";
  let custom_fields = {};
  let description = "description_640";
  let device = "device_640";
  let id = 640;
  let identifier = 640;
  let name = "name_640";
  let primary_ip4 = "primary_ip4_640";
  let primary_ip6 = "primary_ip6_640";
  let status = "status_640";
  let tags = "tags_640";
  let tenant = "tenant_640";
  createVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  // waitForVirtualDeviceContextAdded(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  tryToAddExistingVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextExists(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  updateVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  deleteVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  tryToDeleteANonExistingVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextDoesNotExist(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
});

// Story: crud:VirtualDeviceContext:nondet:1:2
bthread("crud:VirtualDeviceContext:nondet:1:2", function () {
  let comments = "comments_641";
  let custom_fields = {};
  let description = "description_641";
  let device = "device_641";
  let id = 641;
  let identifier = 641;
  let name = "name_641";
  let primary_ip4 = "primary_ip4_641";
  let primary_ip6 = "primary_ip6_641";
  let status = "status_641";
  let tags = "tags_641";
  let tenant = "tenant_641";
  createVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  // waitForVirtualDeviceContextAdded(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  tryToAddExistingVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  updateVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextExists(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  deleteVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  tryToDeleteANonExistingVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextDoesNotExist(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
});

// Story: crud:VirtualDeviceContext:nondet:negative:dup-add
bthread("crud:VirtualDeviceContext:nondet:negative:dup-add", function () {
  let comments = "comments_646";
  let custom_fields = {};
  let description = "description_646";
  let device = "device_646";
  let id = 646;
  let identifier = 646;
  let name = "name_646";
  let primary_ip4 = "primary_ip4_646";
  let primary_ip6 = "primary_ip6_646";
  let status = "status_646";
  let tags = "tags_646";
  let tenant = "tenant_646";
  createVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  // waitForVirtualDeviceContextAdded(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextExists(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  tryToAddExistingVirtualDeviceContext(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
  verifyVirtualDeviceContextExists(comments, custom_fields, description, device, id, identifier, name, primary_ip4, primary_ip6, status, tags, tenant);
});

// Story: crud:Bookmark:nondet:1:1
bthread("crud:Bookmark:nondet:1:1", function () {
  let id = 650;
  let object_id = 650;
  let object_type = "object_type_650";
  let user = "user_650";
  createBookmark(id, object_id, object_type, user);
  // waitForBookmarkAdded(id, object_id, object_type, user);
  tryToAddExistingBookmark(id, object_id, object_type, user);
  verifyBookmarkExists(id, object_id, object_type, user);
  updateBookmark(id, object_id, object_type, user);
  deleteBookmark(id, object_id, object_type, user);
  tryToDeleteANonExistingBookmark(id, object_id, object_type, user);
  verifyBookmarkDoesNotExist(id, object_id, object_type, user);
});

// Story: crud:Bookmark:nondet:1:2
bthread("crud:Bookmark:nondet:1:2", function () {
  let id = 651;
  let object_id = 651;
  let object_type = "object_type_651";
  let user = "user_651";
  createBookmark(id, object_id, object_type, user);
  // waitForBookmarkAdded(id, object_id, object_type, user);
  tryToAddExistingBookmark(id, object_id, object_type, user);
  updateBookmark(id, object_id, object_type, user);
  verifyBookmarkExists(id, object_id, object_type, user);
  deleteBookmark(id, object_id, object_type, user);
  tryToDeleteANonExistingBookmark(id, object_id, object_type, user);
  verifyBookmarkDoesNotExist(id, object_id, object_type, user);
});

// Story: crud:Bookmark:nondet:negative:dup-add
bthread("crud:Bookmark:nondet:negative:dup-add", function () {
  let id = 656;
  let object_id = 656;
  let object_type = "object_type_656";
  let user = "user_656";
  createBookmark(id, object_id, object_type, user);
  // waitForBookmarkAdded(id, object_id, object_type, user);
  verifyBookmarkExists(id, object_id, object_type, user);
  tryToAddExistingBookmark(id, object_id, object_type, user);
  verifyBookmarkExists(id, object_id, object_type, user);
});

// Story: crud:ConfigContextProfile:nondet:1:1
bthread("crud:ConfigContextProfile:nondet:1:1", function () {
  let comments = "comments_660";
  let data_source = "data_source_660";
  let description = "description_660";
  let id = 660;
  let name = "name_660";
  let schema = "schema_660";
  let tags = "tags_660";
  createConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  // waitForConfigContextProfileAdded(comments, data_source, description, id, name, schema, tags);
  tryToAddExistingConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileExists(comments, data_source, description, id, name, schema, tags);
  updateConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  deleteConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  tryToDeleteANonExistingConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileDoesNotExist(comments, data_source, description, id, name, schema, tags);
});

// Story: crud:ConfigContextProfile:nondet:1:2
bthread("crud:ConfigContextProfile:nondet:1:2", function () {
  let comments = "comments_661";
  let data_source = "data_source_661";
  let description = "description_661";
  let id = 661;
  let name = "name_661";
  let schema = "schema_661";
  let tags = "tags_661";
  createConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  // waitForConfigContextProfileAdded(comments, data_source, description, id, name, schema, tags);
  tryToAddExistingConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  updateConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileExists(comments, data_source, description, id, name, schema, tags);
  deleteConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  tryToDeleteANonExistingConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileDoesNotExist(comments, data_source, description, id, name, schema, tags);
});

// Story: crud:ConfigContextProfile:nondet:negative:dup-add
bthread("crud:ConfigContextProfile:nondet:negative:dup-add", function () {
  let comments = "comments_666";
  let data_source = "data_source_666";
  let description = "description_666";
  let id = 666;
  let name = "name_666";
  let schema = "schema_666";
  let tags = "tags_666";
  createConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  // waitForConfigContextProfileAdded(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileExists(comments, data_source, description, id, name, schema, tags);
  tryToAddExistingConfigContextProfile(comments, data_source, description, id, name, schema, tags);
  verifyConfigContextProfileExists(comments, data_source, description, id, name, schema, tags);
});

// Story: crud:ConfigContext:nondet:1:1
bthread("crud:ConfigContext:nondet:1:1", function () {
  let cluster_groups = "cluster_groups_670";
  let cluster_types = "cluster_types_670";
  let clusters = "clusters_670";
  let data = "data_670";
  let data_source = "data_source_670";
  let description = "description_670";
  let device_types = "device_types_670";
  let id = 670;
  let is_active = "is_active_670";
  let locations = "locations_670";
  let name = "name_670";
  let platforms = "platforms_670";
  let profile = "profile_670";
  let regions = "regions_670";
  let roles = "roles_670";
  let site_groups = "site_groups_670";
  let sites = "sites_670";
  let tags = "tags_670";
  let tenant_groups = "tenant_groups_670";
  let tenants = "tenants_670";
  let weight = 670;
  createConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  // waitForConfigContextAdded(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  tryToAddExistingConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextExists(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  updateConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  deleteConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  tryToDeleteANonExistingConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextDoesNotExist(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
});

// Story: crud:ConfigContext:nondet:1:2
bthread("crud:ConfigContext:nondet:1:2", function () {
  let cluster_groups = "cluster_groups_671";
  let cluster_types = "cluster_types_671";
  let clusters = "clusters_671";
  let data = "data_671";
  let data_source = "data_source_671";
  let description = "description_671";
  let device_types = "device_types_671";
  let id = 671;
  let is_active = "is_active_671";
  let locations = "locations_671";
  let name = "name_671";
  let platforms = "platforms_671";
  let profile = "profile_671";
  let regions = "regions_671";
  let roles = "roles_671";
  let site_groups = "site_groups_671";
  let sites = "sites_671";
  let tags = "tags_671";
  let tenant_groups = "tenant_groups_671";
  let tenants = "tenants_671";
  let weight = 671;
  createConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  // waitForConfigContextAdded(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  tryToAddExistingConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  updateConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextExists(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  deleteConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  tryToDeleteANonExistingConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextDoesNotExist(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
});

// Story: crud:ConfigContext:nondet:negative:dup-add
bthread("crud:ConfigContext:nondet:negative:dup-add", function () {
  let cluster_groups = "cluster_groups_676";
  let cluster_types = "cluster_types_676";
  let clusters = "clusters_676";
  let data = "data_676";
  let data_source = "data_source_676";
  let description = "description_676";
  let device_types = "device_types_676";
  let id = 676;
  let is_active = "is_active_676";
  let locations = "locations_676";
  let name = "name_676";
  let platforms = "platforms_676";
  let profile = "profile_676";
  let regions = "regions_676";
  let roles = "roles_676";
  let site_groups = "site_groups_676";
  let sites = "sites_676";
  let tags = "tags_676";
  let tenant_groups = "tenant_groups_676";
  let tenants = "tenants_676";
  let weight = 676;
  createConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  // waitForConfigContextAdded(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextExists(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  tryToAddExistingConfigContext(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
  verifyConfigContextExists(cluster_groups, cluster_types, clusters, data, data_source, description, device_types, id, is_active, locations, name, platforms, profile, regions, roles, site_groups, sites, tags, tenant_groups, tenants, weight);
});

// Story: crud:ConfigTemplate:nondet:1:1
bthread("crud:ConfigTemplate:nondet:1:1", function () {
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
  createConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  // waitForConfigTemplateAdded(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  tryToAddExistingConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  verifyConfigTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  updateConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  deleteConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  tryToDeleteANonExistingConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  verifyConfigTemplateDoesNotExist(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
});

// Story: crud:ConfigTemplate:nondet:1:2
bthread("crud:ConfigTemplate:nondet:1:2", function () {
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
  createConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  // waitForConfigTemplateAdded(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  tryToAddExistingConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  updateConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  verifyConfigTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  deleteConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  tryToDeleteANonExistingConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  verifyConfigTemplateDoesNotExist(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
});

// Story: crud:ConfigTemplate:nondet:negative:dup-add
bthread("crud:ConfigTemplate:nondet:negative:dup-add", function () {
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
  createConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  // waitForConfigTemplateAdded(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  verifyConfigTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  tryToAddExistingConfigTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
  verifyConfigTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, format, id, mime_type, name, tags, template_code);
});

// Story: crud:CustomFieldChoiceSet:nondet:1:1
bthread("crud:CustomFieldChoiceSet:nondet:1:1", function () {
  let base_choices = "base_choices_690";
  let description = "description_690";
  let extra_choices = "extra_choices_690";
  let id = 690;
  let name = "name_690";
  let order_alphabetically = "order_alphabetically_690";
  createCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  // waitForCustomFieldChoiceSetAdded(base_choices, description, extra_choices, id, name, order_alphabetically);
  tryToAddExistingCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  verifyCustomFieldChoiceSetExists(base_choices, description, extra_choices, id, name, order_alphabetically);
  updateCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  deleteCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  tryToDeleteANonExistingCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  verifyCustomFieldChoiceSetDoesNotExist(base_choices, description, extra_choices, id, name, order_alphabetically);
});

// Story: crud:CustomFieldChoiceSet:nondet:1:2
bthread("crud:CustomFieldChoiceSet:nondet:1:2", function () {
  let base_choices = "base_choices_691";
  let description = "description_691";
  let extra_choices = "extra_choices_691";
  let id = 691;
  let name = "name_691";
  let order_alphabetically = "order_alphabetically_691";
  createCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  // waitForCustomFieldChoiceSetAdded(base_choices, description, extra_choices, id, name, order_alphabetically);
  tryToAddExistingCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  updateCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  verifyCustomFieldChoiceSetExists(base_choices, description, extra_choices, id, name, order_alphabetically);
  deleteCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  tryToDeleteANonExistingCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  verifyCustomFieldChoiceSetDoesNotExist(base_choices, description, extra_choices, id, name, order_alphabetically);
});

// Story: crud:CustomFieldChoiceSet:nondet:negative:dup-add
bthread("crud:CustomFieldChoiceSet:nondet:negative:dup-add", function () {
  let base_choices = "base_choices_696";
  let description = "description_696";
  let extra_choices = "extra_choices_696";
  let id = 696;
  let name = "name_696";
  let order_alphabetically = "order_alphabetically_696";
  createCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  // waitForCustomFieldChoiceSetAdded(base_choices, description, extra_choices, id, name, order_alphabetically);
  verifyCustomFieldChoiceSetExists(base_choices, description, extra_choices, id, name, order_alphabetically);
  tryToAddExistingCustomFieldChoiceSet(base_choices, description, extra_choices, id, name, order_alphabetically);
  verifyCustomFieldChoiceSetExists(base_choices, description, extra_choices, id, name, order_alphabetically);
});

// Story: crud:CustomField:nondet:1:1
bthread("crud:CustomField:nondet:1:1", function () {
  let choice_set = "choice_set_700";
  let comments = "comments_700";
  let default = "default_700";
  let description = "description_700";
  let filter_logic = "filter_logic_700";
  let group_name = "group_name_700";
  let id = 700;
  let is_cloneable = "is_cloneable_700";
  let label = "label_700";
  let name = "name_700";
  let object_types = "object_types_700";
  let related_object_filter = "related_object_filter_700";
  let related_object_type = "related_object_type_700";
  let required = "required_700";
  let search_weight = 700;
  let type = "type_700";
  let ui_editable = "ui_editable_700";
  let ui_visible = "ui_visible_700";
  let unique = "unique_700";
  let validation_maximum = 700;
  let validation_minimum = 700;
  let validation_regex = "validation_regex_700";
  let weight = 700;
  createCustomField(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  // waitForCustomFieldAdded(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomField(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  updateCustomField(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  deleteCustomField(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToDeleteANonExistingCustomField(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldDoesNotExist(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomField:nondet:1:2
bthread("crud:CustomField:nondet:1:2", function () {
  let choice_set = "choice_set_701";
  let comments = "comments_701";
  let default = "default_701";
  let description = "description_701";
  let filter_logic = "filter_logic_701";
  let group_name = "group_name_701";
  let id = 701;
  let is_cloneable = "is_cloneable_701";
  let label = "label_701";
  let name = "name_701";
  let object_types = "object_types_701";
  let related_object_filter = "related_object_filter_701";
  let related_object_type = "related_object_type_701";
  let required = "required_701";
  let search_weight = 701;
  let type = "type_701";
  let ui_editable = "ui_editable_701";
  let ui_visible = "ui_visible_701";
  let unique = "unique_701";
  let validation_maximum = 701;
  let validation_minimum = 701;
  let validation_regex = "validation_regex_701";
  let weight = 701;
  createCustomField(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  // waitForCustomFieldAdded(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomField(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  updateCustomField(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  deleteCustomField(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToDeleteANonExistingCustomField(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldDoesNotExist(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomField:nondet:negative:dup-add
bthread("crud:CustomField:nondet:negative:dup-add", function () {
  let choice_set = "choice_set_706";
  let comments = "comments_706";
  let default = "default_706";
  let description = "description_706";
  let filter_logic = "filter_logic_706";
  let group_name = "group_name_706";
  let id = 706;
  let is_cloneable = "is_cloneable_706";
  let label = "label_706";
  let name = "name_706";
  let object_types = "object_types_706";
  let related_object_filter = "related_object_filter_706";
  let related_object_type = "related_object_type_706";
  let required = "required_706";
  let search_weight = 706;
  let type = "type_706";
  let ui_editable = "ui_editable_706";
  let ui_visible = "ui_visible_706";
  let unique = "unique_706";
  let validation_maximum = 706;
  let validation_minimum = 706;
  let validation_regex = "validation_regex_706";
  let weight = 706;
  createCustomField(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  // waitForCustomFieldAdded(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  tryToAddExistingCustomField(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
  verifyCustomFieldExists(choice_set, comments, default, description, filter_logic, group_name, id, is_cloneable, label, name, object_types, related_object_filter, related_object_type, required, search_weight, type, ui_editable, ui_visible, unique, validation_maximum, validation_minimum, validation_regex, weight);
});

// Story: crud:CustomLink:nondet:1:1
bthread("crud:CustomLink:nondet:1:1", function () {
  let button_class = "button_class_710";
  let enabled = "enabled_710";
  let group_name = "group_name_710";
  let id = 710;
  let link_text = "link_text_710";
  let link_url = "link_url_710";
  let name = "name_710";
  let new_window = "new_window_710";
  let object_types = "object_types_710";
  let weight = 710;
  createCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  // waitForCustomLinkAdded(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToAddExistingCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkExists(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  updateCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  deleteCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToDeleteANonExistingCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkDoesNotExist(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
});

// Story: crud:CustomLink:nondet:1:2
bthread("crud:CustomLink:nondet:1:2", function () {
  let button_class = "button_class_711";
  let enabled = "enabled_711";
  let group_name = "group_name_711";
  let id = 711;
  let link_text = "link_text_711";
  let link_url = "link_url_711";
  let name = "name_711";
  let new_window = "new_window_711";
  let object_types = "object_types_711";
  let weight = 711;
  createCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  // waitForCustomLinkAdded(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToAddExistingCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  updateCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkExists(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  deleteCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToDeleteANonExistingCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkDoesNotExist(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
});

// Story: crud:CustomLink:nondet:negative:dup-add
bthread("crud:CustomLink:nondet:negative:dup-add", function () {
  let button_class = "button_class_716";
  let enabled = "enabled_716";
  let group_name = "group_name_716";
  let id = 716;
  let link_text = "link_text_716";
  let link_url = "link_url_716";
  let name = "name_716";
  let new_window = "new_window_716";
  let object_types = "object_types_716";
  let weight = 716;
  createCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  // waitForCustomLinkAdded(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkExists(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  tryToAddExistingCustomLink(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
  verifyCustomLinkExists(button_class, enabled, group_name, id, link_text, link_url, name, new_window, object_types, weight);
});

// Story: crud:Dashboard:read_only
bthread("crud:Dashboard:read_only", function () {

  verifyDashboardExists();
});

// Story: crud:EventRule:nondet:1:1
bthread("crud:EventRule:nondet:1:1", function () {
  let action_object_id = 730;
  let action_object_type = "action_object_type_730";
  let action_type = "action_type_730";
  let conditions = "conditions_730";
  let custom_fields = {};
  let description = "description_730";
  let enabled = "enabled_730";
  let event_types = "event_types_730";
  let id = 730;
  let name = "name_730";
  let object_types = "object_types_730";
  let tags = "tags_730";
  createEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  // waitForEventRuleAdded(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  tryToAddExistingEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleExists(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  updateEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  deleteEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  tryToDeleteANonExistingEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleDoesNotExist(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
});

// Story: crud:EventRule:nondet:1:2
bthread("crud:EventRule:nondet:1:2", function () {
  let action_object_id = 731;
  let action_object_type = "action_object_type_731";
  let action_type = "action_type_731";
  let conditions = "conditions_731";
  let custom_fields = {};
  let description = "description_731";
  let enabled = "enabled_731";
  let event_types = "event_types_731";
  let id = 731;
  let name = "name_731";
  let object_types = "object_types_731";
  let tags = "tags_731";
  createEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  // waitForEventRuleAdded(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  tryToAddExistingEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  updateEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleExists(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  deleteEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  tryToDeleteANonExistingEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleDoesNotExist(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
});

// Story: crud:EventRule:nondet:negative:dup-add
bthread("crud:EventRule:nondet:negative:dup-add", function () {
  let action_object_id = 736;
  let action_object_type = "action_object_type_736";
  let action_type = "action_type_736";
  let conditions = "conditions_736";
  let custom_fields = {};
  let description = "description_736";
  let enabled = "enabled_736";
  let event_types = "event_types_736";
  let id = 736;
  let name = "name_736";
  let object_types = "object_types_736";
  let tags = "tags_736";
  createEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  // waitForEventRuleAdded(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleExists(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  tryToAddExistingEventRule(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
  verifyEventRuleExists(action_object_id, action_object_type, action_type, conditions, custom_fields, description, enabled, event_types, id, name, object_types, tags);
});

// Story: crud:ExportTemplate:nondet:1:1
bthread("crud:ExportTemplate:nondet:1:1", function () {
  let as_attachment = "as_attachment_740";
  let data_source = "data_source_740";
  let description = "description_740";
  let environment_params = "environment_params_740";
  let file_extension = "file_extension_740";
  let file_name = "file_name_740";
  let id = 740;
  let mime_type = "mime_type_740";
  let name = "name_740";
  let object_types = "object_types_740";
  let template_code = "template_code_740";
  createExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  // waitForExportTemplateAdded(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  tryToAddExistingExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  updateExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  deleteExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  tryToDeleteANonExistingExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateDoesNotExist(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
});

// Story: crud:ExportTemplate:nondet:1:2
bthread("crud:ExportTemplate:nondet:1:2", function () {
  let as_attachment = "as_attachment_741";
  let data_source = "data_source_741";
  let description = "description_741";
  let environment_params = "environment_params_741";
  let file_extension = "file_extension_741";
  let file_name = "file_name_741";
  let id = 741;
  let mime_type = "mime_type_741";
  let name = "name_741";
  let object_types = "object_types_741";
  let template_code = "template_code_741";
  createExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  // waitForExportTemplateAdded(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  tryToAddExistingExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  updateExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  deleteExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  tryToDeleteANonExistingExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateDoesNotExist(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
});

// Story: crud:ExportTemplate:nondet:negative:dup-add
bthread("crud:ExportTemplate:nondet:negative:dup-add", function () {
  let as_attachment = "as_attachment_746";
  let data_source = "data_source_746";
  let description = "description_746";
  let environment_params = "environment_params_746";
  let file_extension = "file_extension_746";
  let file_name = "file_name_746";
  let id = 746;
  let mime_type = "mime_type_746";
  let name = "name_746";
  let object_types = "object_types_746";
  let template_code = "template_code_746";
  createExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  // waitForExportTemplateAdded(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  tryToAddExistingExportTemplate(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
  verifyExportTemplateExists(as_attachment, data_source, description, environment_params, file_extension, file_name, id, mime_type, name, object_types, template_code);
});

// Story: crud:ImageAttachment:nondet:1:1
bthread("crud:ImageAttachment:nondet:1:1", function () {
  let description = "description_750";
  let id = 750;
  let image = "image_750";
  let name = "name_750";
  let object_id = 750;
  let object_type = "object_type_750";
  createImageAttachment(description, id, image, name, object_id, object_type);
  // waitForImageAttachmentAdded(description, id, image, name, object_id, object_type);
  tryToAddExistingImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentExists(description, id, image, name, object_id, object_type);
  updateImageAttachment(description, id, image, name, object_id, object_type);
  deleteImageAttachment(description, id, image, name, object_id, object_type);
  tryToDeleteANonExistingImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentDoesNotExist(description, id, image, name, object_id, object_type);
});

// Story: crud:ImageAttachment:nondet:1:2
bthread("crud:ImageAttachment:nondet:1:2", function () {
  let description = "description_751";
  let id = 751;
  let image = "image_751";
  let name = "name_751";
  let object_id = 751;
  let object_type = "object_type_751";
  createImageAttachment(description, id, image, name, object_id, object_type);
  // waitForImageAttachmentAdded(description, id, image, name, object_id, object_type);
  tryToAddExistingImageAttachment(description, id, image, name, object_id, object_type);
  updateImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentExists(description, id, image, name, object_id, object_type);
  deleteImageAttachment(description, id, image, name, object_id, object_type);
  tryToDeleteANonExistingImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentDoesNotExist(description, id, image, name, object_id, object_type);
});

// Story: crud:ImageAttachment:nondet:negative:dup-add
bthread("crud:ImageAttachment:nondet:negative:dup-add", function () {
  let description = "description_756";
  let id = 756;
  let image = "image_756";
  let name = "name_756";
  let object_id = 756;
  let object_type = "object_type_756";
  createImageAttachment(description, id, image, name, object_id, object_type);
  // waitForImageAttachmentAdded(description, id, image, name, object_id, object_type);
  verifyImageAttachmentExists(description, id, image, name, object_id, object_type);
  tryToAddExistingImageAttachment(description, id, image, name, object_id, object_type);
  verifyImageAttachmentExists(description, id, image, name, object_id, object_type);
});

// Story: crud:JournalEntry:nondet:1:1
bthread("crud:JournalEntry:nondet:1:1", function () {
  let assigned_object_id = 760;
  let assigned_object_type = "assigned_object_type_760";
  let comments = "comments_760";
  let created_by = 760;
  let custom_fields = {};
  let id = 760;
  let kind = "kind_760";
  let tags = "tags_760";
  createJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  // waitForJournalEntryAdded(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  tryToAddExistingJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryExists(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  updateJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  deleteJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  tryToDeleteANonExistingJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryDoesNotExist(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
});

// Story: crud:JournalEntry:nondet:1:2
bthread("crud:JournalEntry:nondet:1:2", function () {
  let assigned_object_id = 761;
  let assigned_object_type = "assigned_object_type_761";
  let comments = "comments_761";
  let created_by = 761;
  let custom_fields = {};
  let id = 761;
  let kind = "kind_761";
  let tags = "tags_761";
  createJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  // waitForJournalEntryAdded(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  tryToAddExistingJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  updateJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryExists(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  deleteJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  tryToDeleteANonExistingJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryDoesNotExist(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
});

// Story: crud:JournalEntry:nondet:negative:dup-add
bthread("crud:JournalEntry:nondet:negative:dup-add", function () {
  let assigned_object_id = 766;
  let assigned_object_type = "assigned_object_type_766";
  let comments = "comments_766";
  let created_by = 766;
  let custom_fields = {};
  let id = 766;
  let kind = "kind_766";
  let tags = "tags_766";
  createJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  // waitForJournalEntryAdded(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryExists(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  tryToAddExistingJournalEntry(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
  verifyJournalEntryExists(assigned_object_id, assigned_object_type, comments, created_by, custom_fields, id, kind, tags);
});

// Story: crud:NotificationGroup:nondet:1:1
bthread("crud:NotificationGroup:nondet:1:1", function () {
  let description = "description_770";
  let groups = "groups_770";
  let id = 770;
  let name = "name_770";
  let users = "users_770";
  createNotificationGroup(description, groups, id, name, users);
  // waitForNotificationGroupAdded(description, groups, id, name, users);
  tryToAddExistingNotificationGroup(description, groups, id, name, users);
  verifyNotificationGroupExists(description, groups, id, name, users);
  updateNotificationGroup(description, groups, id, name, users);
  deleteNotificationGroup(description, groups, id, name, users);
  tryToDeleteANonExistingNotificationGroup(description, groups, id, name, users);
  verifyNotificationGroupDoesNotExist(description, groups, id, name, users);
});

// Story: crud:NotificationGroup:nondet:1:2
bthread("crud:NotificationGroup:nondet:1:2", function () {
  let description = "description_771";
  let groups = "groups_771";
  let id = 771;
  let name = "name_771";
  let users = "users_771";
  createNotificationGroup(description, groups, id, name, users);
  // waitForNotificationGroupAdded(description, groups, id, name, users);
  tryToAddExistingNotificationGroup(description, groups, id, name, users);
  updateNotificationGroup(description, groups, id, name, users);
  verifyNotificationGroupExists(description, groups, id, name, users);
  deleteNotificationGroup(description, groups, id, name, users);
  tryToDeleteANonExistingNotificationGroup(description, groups, id, name, users);
  verifyNotificationGroupDoesNotExist(description, groups, id, name, users);
});

// Story: crud:NotificationGroup:nondet:negative:dup-add
bthread("crud:NotificationGroup:nondet:negative:dup-add", function () {
  let description = "description_776";
  let groups = "groups_776";
  let id = 776;
  let name = "name_776";
  let users = "users_776";
  createNotificationGroup(description, groups, id, name, users);
  // waitForNotificationGroupAdded(description, groups, id, name, users);
  verifyNotificationGroupExists(description, groups, id, name, users);
  tryToAddExistingNotificationGroup(description, groups, id, name, users);
  verifyNotificationGroupExists(description, groups, id, name, users);
});

// Story: crud:Notification:nondet:1:1
bthread("crud:Notification:nondet:1:1", function () {
  let event_type = "event_type_780";
  let id = 780;
  let object_id = 780;
  let object_type = "object_type_780";
  let read = "read_780";
  let user = "user_780";
  createNotification(event_type, id, object_id, object_type, read, user);
  // waitForNotificationAdded(event_type, id, object_id, object_type, read, user);
  tryToAddExistingNotification(event_type, id, object_id, object_type, read, user);
  verifyNotificationExists(event_type, id, object_id, object_type, read, user);
  updateNotification(event_type, id, object_id, object_type, read, user);
  deleteNotification(event_type, id, object_id, object_type, read, user);
  tryToDeleteANonExistingNotification(event_type, id, object_id, object_type, read, user);
  verifyNotificationDoesNotExist(event_type, id, object_id, object_type, read, user);
});

// Story: crud:Notification:nondet:1:2
bthread("crud:Notification:nondet:1:2", function () {
  let event_type = "event_type_781";
  let id = 781;
  let object_id = 781;
  let object_type = "object_type_781";
  let read = "read_781";
  let user = "user_781";
  createNotification(event_type, id, object_id, object_type, read, user);
  // waitForNotificationAdded(event_type, id, object_id, object_type, read, user);
  tryToAddExistingNotification(event_type, id, object_id, object_type, read, user);
  updateNotification(event_type, id, object_id, object_type, read, user);
  verifyNotificationExists(event_type, id, object_id, object_type, read, user);
  deleteNotification(event_type, id, object_id, object_type, read, user);
  tryToDeleteANonExistingNotification(event_type, id, object_id, object_type, read, user);
  verifyNotificationDoesNotExist(event_type, id, object_id, object_type, read, user);
});

// Story: crud:Notification:nondet:negative:dup-add
bthread("crud:Notification:nondet:negative:dup-add", function () {
  let event_type = "event_type_786";
  let id = 786;
  let object_id = 786;
  let object_type = "object_type_786";
  let read = "read_786";
  let user = "user_786";
  createNotification(event_type, id, object_id, object_type, read, user);
  // waitForNotificationAdded(event_type, id, object_id, object_type, read, user);
  verifyNotificationExists(event_type, id, object_id, object_type, read, user);
  tryToAddExistingNotification(event_type, id, object_id, object_type, read, user);
  verifyNotificationExists(event_type, id, object_id, object_type, read, user);
});

// Story: crud:ObjectType:read_only
bthread("crud:ObjectType:read_only", function () {
  let id = 790;
  verifyObjectTypeExists(id);
});

// Story: crud:SavedFilter:nondet:1:1
bthread("crud:SavedFilter:nondet:1:1", function () {
  let description = "description_800";
  let enabled = "enabled_800";
  let id = 800;
  let name = "name_800";
  let object_types = "object_types_800";
  let parameters = "parameters_800";
  let shared = "shared_800";
  let slug = "slug_800";
  let user = 800;
  let weight = 800;
  createSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  // waitForSavedFilterAdded(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  tryToAddExistingSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  updateSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  deleteSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  tryToDeleteANonExistingSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterDoesNotExist(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
});

// Story: crud:SavedFilter:nondet:1:2
bthread("crud:SavedFilter:nondet:1:2", function () {
  let description = "description_801";
  let enabled = "enabled_801";
  let id = 801;
  let name = "name_801";
  let object_types = "object_types_801";
  let parameters = "parameters_801";
  let shared = "shared_801";
  let slug = "slug_801";
  let user = 801;
  let weight = 801;
  createSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  // waitForSavedFilterAdded(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  tryToAddExistingSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  updateSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  deleteSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  tryToDeleteANonExistingSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterDoesNotExist(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
});

// Story: crud:SavedFilter:nondet:negative:dup-add
bthread("crud:SavedFilter:nondet:negative:dup-add", function () {
  let description = "description_806";
  let enabled = "enabled_806";
  let id = 806;
  let name = "name_806";
  let object_types = "object_types_806";
  let parameters = "parameters_806";
  let shared = "shared_806";
  let slug = "slug_806";
  let user = 806;
  let weight = 806;
  createSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  // waitForSavedFilterAdded(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  tryToAddExistingSavedFilter(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
  verifySavedFilterExists(description, enabled, id, name, object_types, parameters, shared, slug, user, weight);
});

// Story: crud:Script:nondet:1:1
bthread("crud:Script:nondet:1:1", function () {
  let id = 810;
  createScript(id);
  // waitForScriptAdded(id);
  tryToAddExistingScript(id);
  verifyScriptExists(id);
  updateScript(id);
  deleteScript(id);
  tryToDeleteANonExistingScript(id);
  verifyScriptDoesNotExist(id);
});

// Story: crud:Script:nondet:1:2
bthread("crud:Script:nondet:1:2", function () {
  let id = 811;
  createScript(id);
  // waitForScriptAdded(id);
  tryToAddExistingScript(id);
  updateScript(id);
  verifyScriptExists(id);
  deleteScript(id);
  tryToDeleteANonExistingScript(id);
  verifyScriptDoesNotExist(id);
});

// Story: crud:Script:nondet:negative:dup-add
bthread("crud:Script:nondet:negative:dup-add", function () {
  let id = 816;
  createScript(id);
  // waitForScriptAdded(id);
  verifyScriptExists(id);
  tryToAddExistingScript(id);
  verifyScriptExists(id);
});

// Story: crud:Subscription:nondet:1:1
bthread("crud:Subscription:nondet:1:1", function () {
  let id = 820;
  let object_id = 820;
  let object_type = "object_type_820";
  let user = "user_820";
  createSubscription(id, object_id, object_type, user);
  // waitForSubscriptionAdded(id, object_id, object_type, user);
  tryToAddExistingSubscription(id, object_id, object_type, user);
  verifySubscriptionExists(id, object_id, object_type, user);
  updateSubscription(id, object_id, object_type, user);
  deleteSubscription(id, object_id, object_type, user);
  tryToDeleteANonExistingSubscription(id, object_id, object_type, user);
  verifySubscriptionDoesNotExist(id, object_id, object_type, user);
});

// Story: crud:Subscription:nondet:1:2
bthread("crud:Subscription:nondet:1:2", function () {
  let id = 821;
  let object_id = 821;
  let object_type = "object_type_821";
  let user = "user_821";
  createSubscription(id, object_id, object_type, user);
  // waitForSubscriptionAdded(id, object_id, object_type, user);
  tryToAddExistingSubscription(id, object_id, object_type, user);
  updateSubscription(id, object_id, object_type, user);
  verifySubscriptionExists(id, object_id, object_type, user);
  deleteSubscription(id, object_id, object_type, user);
  tryToDeleteANonExistingSubscription(id, object_id, object_type, user);
  verifySubscriptionDoesNotExist(id, object_id, object_type, user);
});

// Story: crud:Subscription:nondet:negative:dup-add
bthread("crud:Subscription:nondet:negative:dup-add", function () {
  let id = 826;
  let object_id = 826;
  let object_type = "object_type_826";
  let user = "user_826";
  createSubscription(id, object_id, object_type, user);
  // waitForSubscriptionAdded(id, object_id, object_type, user);
  verifySubscriptionExists(id, object_id, object_type, user);
  tryToAddExistingSubscription(id, object_id, object_type, user);
  verifySubscriptionExists(id, object_id, object_type, user);
});

// Story: crud:TableConfig:nondet:1:1
bthread("crud:TableConfig:nondet:1:1", function () {
  let columns = "columns_830";
  let description = "description_830";
  let enabled = "enabled_830";
  let id = 830;
  let name = "name_830";
  let object_type = "object_type_830";
  let ordering = "ordering_830";
  let shared = "shared_830";
  let table = "table_830";
  let user = 830;
  let weight = 830;
  createTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  // waitForTableConfigAdded(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  tryToAddExistingTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigExists(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  updateTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  deleteTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  tryToDeleteANonExistingTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigDoesNotExist(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
});

// Story: crud:TableConfig:nondet:1:2
bthread("crud:TableConfig:nondet:1:2", function () {
  let columns = "columns_831";
  let description = "description_831";
  let enabled = "enabled_831";
  let id = 831;
  let name = "name_831";
  let object_type = "object_type_831";
  let ordering = "ordering_831";
  let shared = "shared_831";
  let table = "table_831";
  let user = 831;
  let weight = 831;
  createTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  // waitForTableConfigAdded(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  tryToAddExistingTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  updateTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigExists(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  deleteTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  tryToDeleteANonExistingTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigDoesNotExist(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
});

// Story: crud:TableConfig:nondet:negative:dup-add
bthread("crud:TableConfig:nondet:negative:dup-add", function () {
  let columns = "columns_836";
  let description = "description_836";
  let enabled = "enabled_836";
  let id = 836;
  let name = "name_836";
  let object_type = "object_type_836";
  let ordering = "ordering_836";
  let shared = "shared_836";
  let table = "table_836";
  let user = 836;
  let weight = 836;
  createTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  // waitForTableConfigAdded(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigExists(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  tryToAddExistingTableConfig(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
  verifyTableConfigExists(columns, description, enabled, id, name, object_type, ordering, shared, table, user, weight);
});

// Story: crud:TaggedObject:read_only
bthread("crud:TaggedObject:read_only", function () {
  let id = 840;
  verifyTaggedObjectExists(id);
});

// Story: crud:Tag:nondet:1:1
bthread("crud:Tag:nondet:1:1", function () {
  let color = "color_850";
  let description = "description_850";
  let id = 850;
  let name = "name_850";
  let object_types = "object_types_850";
  let slug = "slug_850";
  let weight = 850;
  createTag(color, description, id, name, object_types, slug, weight);
  // waitForTagAdded(color, description, id, name, object_types, slug, weight);
  tryToAddExistingTag(color, description, id, name, object_types, slug, weight);
  verifyTagExists(color, description, id, name, object_types, slug, weight);
  updateTag(color, description, id, name, object_types, slug, weight);
  deleteTag(color, description, id, name, object_types, slug, weight);
  tryToDeleteANonExistingTag(color, description, id, name, object_types, slug, weight);
  verifyTagDoesNotExist(color, description, id, name, object_types, slug, weight);
});

// Story: crud:Tag:nondet:1:2
bthread("crud:Tag:nondet:1:2", function () {
  let color = "color_851";
  let description = "description_851";
  let id = 851;
  let name = "name_851";
  let object_types = "object_types_851";
  let slug = "slug_851";
  let weight = 851;
  createTag(color, description, id, name, object_types, slug, weight);
  // waitForTagAdded(color, description, id, name, object_types, slug, weight);
  tryToAddExistingTag(color, description, id, name, object_types, slug, weight);
  updateTag(color, description, id, name, object_types, slug, weight);
  verifyTagExists(color, description, id, name, object_types, slug, weight);
  deleteTag(color, description, id, name, object_types, slug, weight);
  tryToDeleteANonExistingTag(color, description, id, name, object_types, slug, weight);
  verifyTagDoesNotExist(color, description, id, name, object_types, slug, weight);
});

// Story: crud:Tag:nondet:negative:dup-add
bthread("crud:Tag:nondet:negative:dup-add", function () {
  let color = "color_856";
  let description = "description_856";
  let id = 856;
  let name = "name_856";
  let object_types = "object_types_856";
  let slug = "slug_856";
  let weight = 856;
  createTag(color, description, id, name, object_types, slug, weight);
  // waitForTagAdded(color, description, id, name, object_types, slug, weight);
  verifyTagExists(color, description, id, name, object_types, slug, weight);
  tryToAddExistingTag(color, description, id, name, object_types, slug, weight);
  verifyTagExists(color, description, id, name, object_types, slug, weight);
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let additional_headers = "additional_headers_860";
  let body_template = "body_template_860";
  let ca_file_path = "ca_file_path_860";
  let custom_fields = {};
  let description = "description_860";
  let http_content_type = "http_content_type_860";
  let http_method = "http_method_860";
  let id = 860;
  let name = "name_860";
  let payload_url = "payload_url_860";
  let secret = "secret_860";
  let ssl_verification = "ssl_verification_860";
  let tags = "tags_860";
  createWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  // waitForWebhookAdded(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  tryToAddExistingWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookExists(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  updateWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  deleteWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  tryToDeleteANonExistingWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookDoesNotExist(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let additional_headers = "additional_headers_861";
  let body_template = "body_template_861";
  let ca_file_path = "ca_file_path_861";
  let custom_fields = {};
  let description = "description_861";
  let http_content_type = "http_content_type_861";
  let http_method = "http_method_861";
  let id = 861;
  let name = "name_861";
  let payload_url = "payload_url_861";
  let secret = "secret_861";
  let ssl_verification = "ssl_verification_861";
  let tags = "tags_861";
  createWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  // waitForWebhookAdded(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  tryToAddExistingWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  updateWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookExists(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  deleteWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  tryToDeleteANonExistingWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookDoesNotExist(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let additional_headers = "additional_headers_866";
  let body_template = "body_template_866";
  let ca_file_path = "ca_file_path_866";
  let custom_fields = {};
  let description = "description_866";
  let http_content_type = "http_content_type_866";
  let http_method = "http_method_866";
  let id = 866;
  let name = "name_866";
  let payload_url = "payload_url_866";
  let secret = "secret_866";
  let ssl_verification = "ssl_verification_866";
  let tags = "tags_866";
  createWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  // waitForWebhookAdded(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookExists(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  tryToAddExistingWebhook(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
  verifyWebhookExists(additional_headers, body_template, ca_file_path, custom_fields, description, http_content_type, http_method, id, name, payload_url, secret, ssl_verification, tags);
});

// Story: crud:Aggregate:nondet:1:1
bthread("crud:Aggregate:nondet:1:1", function () {
  let comments = "comments_870";
  let custom_fields = {};
  let date_added = "date_added_870";
  let description = "description_870";
  let id = 870;
  let prefix = "prefix_870";
  let rir = "rir_870";
  let tags = "tags_870";
  let tenant = "tenant_870";
  createAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  // waitForAggregateAdded(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  tryToAddExistingAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateExists(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  updateAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  deleteAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  tryToDeleteANonExistingAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateDoesNotExist(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
});

// Story: crud:Aggregate:nondet:1:2
bthread("crud:Aggregate:nondet:1:2", function () {
  let comments = "comments_871";
  let custom_fields = {};
  let date_added = "date_added_871";
  let description = "description_871";
  let id = 871;
  let prefix = "prefix_871";
  let rir = "rir_871";
  let tags = "tags_871";
  let tenant = "tenant_871";
  createAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  // waitForAggregateAdded(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  tryToAddExistingAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  updateAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateExists(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  deleteAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  tryToDeleteANonExistingAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateDoesNotExist(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
});

// Story: crud:Aggregate:nondet:negative:dup-add
bthread("crud:Aggregate:nondet:negative:dup-add", function () {
  let comments = "comments_876";
  let custom_fields = {};
  let date_added = "date_added_876";
  let description = "description_876";
  let id = 876;
  let prefix = "prefix_876";
  let rir = "rir_876";
  let tags = "tags_876";
  let tenant = "tenant_876";
  createAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  // waitForAggregateAdded(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateExists(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  tryToAddExistingAggregate(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
  verifyAggregateExists(comments, custom_fields, date_added, description, id, prefix, rir, tags, tenant);
});

// Story: crud:ASNRange:nondet:1:1
bthread("crud:ASNRange:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_880";
  let end = 880;
  let id = 880;
  let name = "name_880";
  let rir = "rir_880";
  let slug = "slug_880";
  let start = 880;
  let tags = "tags_880";
  let tenant = "tenant_880";
  createASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  // waitForASNRangeAdded(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
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
  let description = "description_881";
  let end = 881;
  let id = 881;
  let name = "name_881";
  let rir = "rir_881";
  let slug = "slug_881";
  let start = 881;
  let tags = "tags_881";
  let tenant = "tenant_881";
  createASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  // waitForASNRangeAdded(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
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
  let description = "description_886";
  let end = 886;
  let id = 886;
  let name = "name_886";
  let rir = "rir_886";
  let slug = "slug_886";
  let start = 886;
  let tags = "tags_886";
  let tenant = "tenant_886";
  createASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  // waitForASNRangeAdded(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  verifyASNRangeExists(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  tryToAddExistingASNRange(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
  verifyASNRangeExists(custom_fields, description, end, id, name, rir, slug, start, tags, tenant);
});

// Story: crud:ASN:nondet:1:1
bthread("crud:ASN:nondet:1:1", function () {
  let asn = 890;
  let comments = "comments_890";
  let custom_fields = {};
  let description = "description_890";
  let id = 890;
  let rir = "rir_890";
  let tags = "tags_890";
  let tenant = "tenant_890";
  createASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  // waitForASNAdded(asn, comments, custom_fields, description, id, rir, tags, tenant);
  tryToAddExistingASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNExists(asn, comments, custom_fields, description, id, rir, tags, tenant);
  updateASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  deleteASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  tryToDeleteANonExistingASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNDoesNotExist(asn, comments, custom_fields, description, id, rir, tags, tenant);
});

// Story: crud:ASN:nondet:1:2
bthread("crud:ASN:nondet:1:2", function () {
  let asn = 891;
  let comments = "comments_891";
  let custom_fields = {};
  let description = "description_891";
  let id = 891;
  let rir = "rir_891";
  let tags = "tags_891";
  let tenant = "tenant_891";
  createASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  // waitForASNAdded(asn, comments, custom_fields, description, id, rir, tags, tenant);
  tryToAddExistingASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  updateASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNExists(asn, comments, custom_fields, description, id, rir, tags, tenant);
  deleteASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  tryToDeleteANonExistingASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNDoesNotExist(asn, comments, custom_fields, description, id, rir, tags, tenant);
});

// Story: crud:ASN:nondet:negative:dup-add
bthread("crud:ASN:nondet:negative:dup-add", function () {
  let asn = 896;
  let comments = "comments_896";
  let custom_fields = {};
  let description = "description_896";
  let id = 896;
  let rir = "rir_896";
  let tags = "tags_896";
  let tenant = "tenant_896";
  createASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  // waitForASNAdded(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNExists(asn, comments, custom_fields, description, id, rir, tags, tenant);
  tryToAddExistingASN(asn, comments, custom_fields, description, id, rir, tags, tenant);
  verifyASNExists(asn, comments, custom_fields, description, id, rir, tags, tenant);
});

// Story: crud:FHRPGroupAssignment:nondet:1:1
bthread("crud:FHRPGroupAssignment:nondet:1:1", function () {
  let group = "group_900";
  let id = 900;
  let interface_type = "interface_type_900";
  let priority = 900;
  // Dependency Barrier
  let deps = {};
  deps["interface_id"] = matchAnyInterfaceAdded();
  let pkMap = {"interface_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  interface_id = captured["interface_id"];
  createFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  // waitForFHRPGroupAssignmentAdded(group, id, interface_id, interface_type, priority);
  tryToAddExistingFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  verifyFHRPGroupAssignmentExists(group, id, interface_id, interface_type, priority);
  updateFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  deleteFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  tryToDeleteANonExistingFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  verifyFHRPGroupAssignmentDoesNotExist(group, id, interface_id, interface_type, priority);
});

// Story: crud:FHRPGroupAssignment:nondet:1:2
bthread("crud:FHRPGroupAssignment:nondet:1:2", function () {
  let group = "group_901";
  let id = 901;
  let interface_type = "interface_type_901";
  let priority = 901;
  // Dependency Barrier
  let deps = {};
  deps["interface_id"] = matchAnyInterfaceAdded();
  let pkMap = {"interface_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  interface_id = captured["interface_id"];
  createFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  // waitForFHRPGroupAssignmentAdded(group, id, interface_id, interface_type, priority);
  tryToAddExistingFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  updateFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  verifyFHRPGroupAssignmentExists(group, id, interface_id, interface_type, priority);
  deleteFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  tryToDeleteANonExistingFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  verifyFHRPGroupAssignmentDoesNotExist(group, id, interface_id, interface_type, priority);
});

// Story: crud:FHRPGroupAssignment:nondet:negative:dup-add
bthread("crud:FHRPGroupAssignment:nondet:negative:dup-add", function () {
  let group = "group_906";
  let id = 906;
  let interface_type = "interface_type_906";
  let priority = 906;
  // Dependency Barrier
  let deps = {};
  deps["interface_id"] = matchAnyInterfaceAdded();
  let pkMap = {"interface_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  interface_id = captured["interface_id"];
  createFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  // waitForFHRPGroupAssignmentAdded(group, id, interface_id, interface_type, priority);
  verifyFHRPGroupAssignmentExists(group, id, interface_id, interface_type, priority);
  tryToAddExistingFHRPGroupAssignment(group, id, interface_id, interface_type, priority);
  verifyFHRPGroupAssignmentExists(group, id, interface_id, interface_type, priority);
});

// Story: crud:FHRPGroup:nondet:1:1
bthread("crud:FHRPGroup:nondet:1:1", function () {
  let auth_key = "auth_key_910";
  let auth_type = "auth_type_910";
  let comments = "comments_910";
  let custom_fields = {};
  let description = "description_910";
  let id = 910;
  let name = "name_910";
  let protocol = "protocol_910";
  let tags = "tags_910";
  // Dependency Barrier
  let deps = {};
  deps["group_id"] = matchAnyGroupAdded();
  let pkMap = {"group_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  group_id = captured["group_id"];
  createFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  // waitForFHRPGroupAdded(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  tryToAddExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  verifyFHRPGroupExists(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  updateFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  deleteFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  tryToDeleteANonExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  verifyFHRPGroupDoesNotExist(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
});

// Story: crud:FHRPGroup:nondet:1:2
bthread("crud:FHRPGroup:nondet:1:2", function () {
  let auth_key = "auth_key_911";
  let auth_type = "auth_type_911";
  let comments = "comments_911";
  let custom_fields = {};
  let description = "description_911";
  let id = 911;
  let name = "name_911";
  let protocol = "protocol_911";
  let tags = "tags_911";
  // Dependency Barrier
  let deps = {};
  deps["group_id"] = matchAnyGroupAdded();
  let pkMap = {"group_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  group_id = captured["group_id"];
  createFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  // waitForFHRPGroupAdded(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  tryToAddExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  updateFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  verifyFHRPGroupExists(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  deleteFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  tryToDeleteANonExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  verifyFHRPGroupDoesNotExist(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
});

// Story: crud:FHRPGroup:nondet:negative:dup-add
bthread("crud:FHRPGroup:nondet:negative:dup-add", function () {
  let auth_key = "auth_key_916";
  let auth_type = "auth_type_916";
  let comments = "comments_916";
  let custom_fields = {};
  let description = "description_916";
  let id = 916;
  let name = "name_916";
  let protocol = "protocol_916";
  let tags = "tags_916";
  // Dependency Barrier
  let deps = {};
  deps["group_id"] = matchAnyGroupAdded();
  let pkMap = {"group_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  group_id = captured["group_id"];
  createFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  // waitForFHRPGroupAdded(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  verifyFHRPGroupExists(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  tryToAddExistingFHRPGroup(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
  verifyFHRPGroupExists(auth_key, auth_type, comments, custom_fields, description, group_id, id, name, protocol, tags);
});

// Story: crud:IPAddress:nondet:1:1
bthread("crud:IPAddress:nondet:1:1", function () {
  let address = "address_920";
  let assigned_object_id = 920;
  let assigned_object_type = "assigned_object_type_920";
  let comments = "comments_920";
  let custom_fields = {};
  let description = "description_920";
  let dns_name = "dns_name_920";
  let id = 920;
  let nat_inside = 920;
  let role = "role_920";
  let status = "status_920";
  let tags = "tags_920";
  let tenant = "tenant_920";
  let vrf = "vrf_920";
  createIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  // waitForIPAddressAdded(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  updateIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  deleteIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  tryToDeleteANonExistingIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  verifyIPAddressDoesNotExist(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
});

// Story: crud:IPAddress:nondet:1:2
bthread("crud:IPAddress:nondet:1:2", function () {
  let address = "address_921";
  let assigned_object_id = 921;
  let assigned_object_type = "assigned_object_type_921";
  let comments = "comments_921";
  let custom_fields = {};
  let description = "description_921";
  let dns_name = "dns_name_921";
  let id = 921;
  let nat_inside = 921;
  let role = "role_921";
  let status = "status_921";
  let tags = "tags_921";
  let tenant = "tenant_921";
  let vrf = "vrf_921";
  createIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  // waitForIPAddressAdded(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  updateIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  deleteIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  tryToDeleteANonExistingIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  verifyIPAddressDoesNotExist(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
});

// Story: crud:IPAddress:nondet:negative:dup-add
bthread("crud:IPAddress:nondet:negative:dup-add", function () {
  let address = "address_926";
  let assigned_object_id = 926;
  let assigned_object_type = "assigned_object_type_926";
  let comments = "comments_926";
  let custom_fields = {};
  let description = "description_926";
  let dns_name = "dns_name_926";
  let id = 926;
  let nat_inside = 926;
  let role = "role_926";
  let status = "status_926";
  let tags = "tags_926";
  let tenant = "tenant_926";
  let vrf = "vrf_926";
  createIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  // waitForIPAddressAdded(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  tryToAddExistingIPAddress(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
  verifyIPAddressExists(address, assigned_object_id, assigned_object_type, comments, custom_fields, description, dns_name, id, nat_inside, role, status, tags, tenant, vrf);
});

// Story: crud:IPRange:nondet:1:1
bthread("crud:IPRange:nondet:1:1", function () {
  let comments = "comments_930";
  let custom_fields = {};
  let description = "description_930";
  let end_address = "end_address_930";
  let id = 930;
  let mark_populated = "mark_populated_930";
  let mark_utilized = "mark_utilized_930";
  let role = "role_930";
  let start_address = "start_address_930";
  let status = "status_930";
  let tags = "tags_930";
  let tenant = "tenant_930";
  let vrf = "vrf_930";
  createIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  // waitForIPRangeAdded(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  tryToAddExistingIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  updateIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  deleteIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  tryToDeleteANonExistingIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeDoesNotExist(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
});

// Story: crud:IPRange:nondet:1:2
bthread("crud:IPRange:nondet:1:2", function () {
  let comments = "comments_931";
  let custom_fields = {};
  let description = "description_931";
  let end_address = "end_address_931";
  let id = 931;
  let mark_populated = "mark_populated_931";
  let mark_utilized = "mark_utilized_931";
  let role = "role_931";
  let start_address = "start_address_931";
  let status = "status_931";
  let tags = "tags_931";
  let tenant = "tenant_931";
  let vrf = "vrf_931";
  createIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  // waitForIPRangeAdded(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  tryToAddExistingIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  updateIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  deleteIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  tryToDeleteANonExistingIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeDoesNotExist(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
});

// Story: crud:IPRange:nondet:negative:dup-add
bthread("crud:IPRange:nondet:negative:dup-add", function () {
  let comments = "comments_936";
  let custom_fields = {};
  let description = "description_936";
  let end_address = "end_address_936";
  let id = 936;
  let mark_populated = "mark_populated_936";
  let mark_utilized = "mark_utilized_936";
  let role = "role_936";
  let start_address = "start_address_936";
  let status = "status_936";
  let tags = "tags_936";
  let tenant = "tenant_936";
  let vrf = "vrf_936";
  createIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  // waitForIPRangeAdded(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  tryToAddExistingIPRange(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
  verifyIPRangeExists(comments, custom_fields, description, end_address, id, mark_populated, mark_utilized, role, start_address, status, tags, tenant, vrf);
});

// Story: crud:Prefix:nondet:1:1
bthread("crud:Prefix:nondet:1:1", function () {
  let comments = "comments_940";
  let custom_fields = {};
  let description = "description_940";
  let id = 940;
  let is_pool = "is_pool_940";
  let mark_utilized = "mark_utilized_940";
  let prefix = "prefix_940";
  let role = "role_940";
  let scope_id = 940;
  let scope_type = "scope_type_940";
  let status = "status_940";
  let tags = "tags_940";
  let tenant = "tenant_940";
  let vlan = "vlan_940";
  let vrf = "vrf_940";
  createPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  // waitForPrefixAdded(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  tryToAddExistingPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixExists(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  updatePrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  deletePrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  tryToDeleteANonExistingPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixDoesNotExist(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
});

// Story: crud:Prefix:nondet:1:2
bthread("crud:Prefix:nondet:1:2", function () {
  let comments = "comments_941";
  let custom_fields = {};
  let description = "description_941";
  let id = 941;
  let is_pool = "is_pool_941";
  let mark_utilized = "mark_utilized_941";
  let prefix = "prefix_941";
  let role = "role_941";
  let scope_id = 941;
  let scope_type = "scope_type_941";
  let status = "status_941";
  let tags = "tags_941";
  let tenant = "tenant_941";
  let vlan = "vlan_941";
  let vrf = "vrf_941";
  createPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  // waitForPrefixAdded(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  tryToAddExistingPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  updatePrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixExists(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  deletePrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  tryToDeleteANonExistingPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixDoesNotExist(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
});

// Story: crud:Prefix:nondet:negative:dup-add
bthread("crud:Prefix:nondet:negative:dup-add", function () {
  let comments = "comments_946";
  let custom_fields = {};
  let description = "description_946";
  let id = 946;
  let is_pool = "is_pool_946";
  let mark_utilized = "mark_utilized_946";
  let prefix = "prefix_946";
  let role = "role_946";
  let scope_id = 946;
  let scope_type = "scope_type_946";
  let status = "status_946";
  let tags = "tags_946";
  let tenant = "tenant_946";
  let vlan = "vlan_946";
  let vrf = "vrf_946";
  createPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  // waitForPrefixAdded(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixExists(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  tryToAddExistingPrefix(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
  verifyPrefixExists(comments, custom_fields, description, id, is_pool, mark_utilized, prefix, role, scope_id, scope_type, status, tags, tenant, vlan, vrf);
});

// Story: crud:RIR:nondet:1:1
bthread("crud:RIR:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_950";
  let id = 950;
  let is_private = "is_private_950";
  let name = "name_950";
  let slug = "slug_950";
  let tags = "tags_950";
  createRIR(custom_fields, description, id, is_private, name, slug, tags);
  // waitForRIRAdded(custom_fields, description, id, is_private, name, slug, tags);
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
  let description = "description_951";
  let id = 951;
  let is_private = "is_private_951";
  let name = "name_951";
  let slug = "slug_951";
  let tags = "tags_951";
  createRIR(custom_fields, description, id, is_private, name, slug, tags);
  // waitForRIRAdded(custom_fields, description, id, is_private, name, slug, tags);
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
  let description = "description_956";
  let id = 956;
  let is_private = "is_private_956";
  let name = "name_956";
  let slug = "slug_956";
  let tags = "tags_956";
  createRIR(custom_fields, description, id, is_private, name, slug, tags);
  // waitForRIRAdded(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, slug, tags);
  tryToAddExistingRIR(custom_fields, description, id, is_private, name, slug, tags);
  verifyRIRExists(custom_fields, description, id, is_private, name, slug, tags);
});

// Story: crud:Role:nondet:1:1
bthread("crud:Role:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_960";
  let id = 960;
  let name = "name_960";
  let slug = "slug_960";
  let tags = "tags_960";
  let weight = 960;
  createRole(custom_fields, description, id, name, slug, tags, weight);
  // waitForRoleAdded(custom_fields, description, id, name, slug, tags, weight);
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
  let description = "description_961";
  let id = 961;
  let name = "name_961";
  let slug = "slug_961";
  let tags = "tags_961";
  let weight = 961;
  createRole(custom_fields, description, id, name, slug, tags, weight);
  // waitForRoleAdded(custom_fields, description, id, name, slug, tags, weight);
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
  let description = "description_966";
  let id = 966;
  let name = "name_966";
  let slug = "slug_966";
  let tags = "tags_966";
  let weight = 966;
  createRole(custom_fields, description, id, name, slug, tags, weight);
  // waitForRoleAdded(custom_fields, description, id, name, slug, tags, weight);
  verifyRoleExists(custom_fields, description, id, name, slug, tags, weight);
  tryToAddExistingRole(custom_fields, description, id, name, slug, tags, weight);
  verifyRoleExists(custom_fields, description, id, name, slug, tags, weight);
});

// Story: crud:RouteTarget:nondet:1:1
bthread("crud:RouteTarget:nondet:1:1", function () {
  let comments = "comments_970";
  let custom_fields = {};
  let description = "description_970";
  let id = 970;
  let name = "name_970";
  let tags = "tags_970";
  let tenant = "tenant_970";
  createRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  // waitForRouteTargetAdded(comments, custom_fields, description, id, name, tags, tenant);
  tryToAddExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetExists(comments, custom_fields, description, id, name, tags, tenant);
  updateRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  deleteRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  tryToDeleteANonExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetDoesNotExist(comments, custom_fields, description, id, name, tags, tenant);
});

// Story: crud:RouteTarget:nondet:1:2
bthread("crud:RouteTarget:nondet:1:2", function () {
  let comments = "comments_971";
  let custom_fields = {};
  let description = "description_971";
  let id = 971;
  let name = "name_971";
  let tags = "tags_971";
  let tenant = "tenant_971";
  createRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  // waitForRouteTargetAdded(comments, custom_fields, description, id, name, tags, tenant);
  tryToAddExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  updateRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetExists(comments, custom_fields, description, id, name, tags, tenant);
  deleteRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  tryToDeleteANonExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetDoesNotExist(comments, custom_fields, description, id, name, tags, tenant);
});

// Story: crud:RouteTarget:nondet:negative:dup-add
bthread("crud:RouteTarget:nondet:negative:dup-add", function () {
  let comments = "comments_976";
  let custom_fields = {};
  let description = "description_976";
  let id = 976;
  let name = "name_976";
  let tags = "tags_976";
  let tenant = "tenant_976";
  createRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  // waitForRouteTargetAdded(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetExists(comments, custom_fields, description, id, name, tags, tenant);
  tryToAddExistingRouteTarget(comments, custom_fields, description, id, name, tags, tenant);
  verifyRouteTargetExists(comments, custom_fields, description, id, name, tags, tenant);
});

// Story: crud:ServiceTemplate:nondet:1:1
bthread("crud:ServiceTemplate:nondet:1:1", function () {
  let comments = "comments_980";
  let custom_fields = {};
  let description = "description_980";
  let id = 980;
  let name = "name_980";
  let ports = "ports_980";
  let protocol = "protocol_980";
  let tags = "tags_980";
  createServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  // waitForServiceTemplateAdded(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToAddExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, ports, protocol, tags);
  updateServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  deleteServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToDeleteANonExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateDoesNotExist(comments, custom_fields, description, id, name, ports, protocol, tags);
});

// Story: crud:ServiceTemplate:nondet:1:2
bthread("crud:ServiceTemplate:nondet:1:2", function () {
  let comments = "comments_981";
  let custom_fields = {};
  let description = "description_981";
  let id = 981;
  let name = "name_981";
  let ports = "ports_981";
  let protocol = "protocol_981";
  let tags = "tags_981";
  createServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  // waitForServiceTemplateAdded(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToAddExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  updateServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, ports, protocol, tags);
  deleteServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToDeleteANonExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateDoesNotExist(comments, custom_fields, description, id, name, ports, protocol, tags);
});

// Story: crud:ServiceTemplate:nondet:negative:dup-add
bthread("crud:ServiceTemplate:nondet:negative:dup-add", function () {
  let comments = "comments_986";
  let custom_fields = {};
  let description = "description_986";
  let id = 986;
  let name = "name_986";
  let ports = "ports_986";
  let protocol = "protocol_986";
  let tags = "tags_986";
  createServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  // waitForServiceTemplateAdded(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, ports, protocol, tags);
  tryToAddExistingServiceTemplate(comments, custom_fields, description, id, name, ports, protocol, tags);
  verifyServiceTemplateExists(comments, custom_fields, description, id, name, ports, protocol, tags);
});

// Story: crud:Service:nondet:1:1
bthread("crud:Service:nondet:1:1", function () {
  let comments = "comments_990";
  let custom_fields = {};
  let description = "description_990";
  let id = 990;
  let ipaddresses = "ipaddresses_990";
  let name = "name_990";
  let parent_object_id = 990;
  let parent_object_type = "parent_object_type_990";
  let ports = "ports_990";
  let protocol = "protocol_990";
  let tags = "tags_990";
  createService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  // waitForServiceAdded(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToAddExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceExists(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  updateService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  deleteService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToDeleteANonExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceDoesNotExist(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
});

// Story: crud:Service:nondet:1:2
bthread("crud:Service:nondet:1:2", function () {
  let comments = "comments_991";
  let custom_fields = {};
  let description = "description_991";
  let id = 991;
  let ipaddresses = "ipaddresses_991";
  let name = "name_991";
  let parent_object_id = 991;
  let parent_object_type = "parent_object_type_991";
  let ports = "ports_991";
  let protocol = "protocol_991";
  let tags = "tags_991";
  createService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  // waitForServiceAdded(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToAddExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  updateService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceExists(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  deleteService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToDeleteANonExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceDoesNotExist(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
});

// Story: crud:Service:nondet:negative:dup-add
bthread("crud:Service:nondet:negative:dup-add", function () {
  let comments = "comments_996";
  let custom_fields = {};
  let description = "description_996";
  let id = 996;
  let ipaddresses = "ipaddresses_996";
  let name = "name_996";
  let parent_object_id = 996;
  let parent_object_type = "parent_object_type_996";
  let ports = "ports_996";
  let protocol = "protocol_996";
  let tags = "tags_996";
  createService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  // waitForServiceAdded(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceExists(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  tryToAddExistingService(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
  verifyServiceExists(comments, custom_fields, description, id, ipaddresses, name, parent_object_id, parent_object_type, ports, protocol, tags);
});

// Story: crud:VLANGroup:nondet:1:1
bthread("crud:VLANGroup:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1000";
  let id = 1000;
  let name = "name_1000";
  let scope_id = 1000;
  let scope_type = "scope_type_1000";
  let slug = "slug_1000";
  let tags = "tags_1000";
  let tenant = "tenant_1000";
  let vid_ranges = "vid_ranges_1000";
  createVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  // waitForVLANGroupAdded(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
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
  let description = "description_1001";
  let id = 1001;
  let name = "name_1001";
  let scope_id = 1001;
  let scope_type = "scope_type_1001";
  let slug = "slug_1001";
  let tags = "tags_1001";
  let tenant = "tenant_1001";
  let vid_ranges = "vid_ranges_1001";
  createVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  // waitForVLANGroupAdded(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
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
  let description = "description_1006";
  let id = 1006;
  let name = "name_1006";
  let scope_id = 1006;
  let scope_type = "scope_type_1006";
  let slug = "slug_1006";
  let tags = "tags_1006";
  let tenant = "tenant_1006";
  let vid_ranges = "vid_ranges_1006";
  createVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  // waitForVLANGroupAdded(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  verifyVLANGroupExists(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  tryToAddExistingVLANGroup(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
  verifyVLANGroupExists(custom_fields, description, id, name, scope_id, scope_type, slug, tags, tenant, vid_ranges);
});

// Story: crud:AvailableVlan:read_only
bthread("crud:AvailableVlan:read_only", function () {
  let id = 1010;
  verifyAvailableVlanExists(id);
});

// Story: crud:VLANTranslationPolicy:nondet:1:1
bthread("crud:VLANTranslationPolicy:nondet:1:1", function () {
  let description = "description_1020";
  let id = 1020;
  let name = "name_1020";
  createVLANTranslationPolicy(description, id, name);
  // waitForVLANTranslationPolicyAdded(description, id, name);
  tryToAddExistingVLANTranslationPolicy(description, id, name);
  verifyVLANTranslationPolicyExists(description, id, name);
  updateVLANTranslationPolicy(description, id, name);
  deleteVLANTranslationPolicy(description, id, name);
  tryToDeleteANonExistingVLANTranslationPolicy(description, id, name);
  verifyVLANTranslationPolicyDoesNotExist(description, id, name);
});

// Story: crud:VLANTranslationPolicy:nondet:1:2
bthread("crud:VLANTranslationPolicy:nondet:1:2", function () {
  let description = "description_1021";
  let id = 1021;
  let name = "name_1021";
  createVLANTranslationPolicy(description, id, name);
  // waitForVLANTranslationPolicyAdded(description, id, name);
  tryToAddExistingVLANTranslationPolicy(description, id, name);
  updateVLANTranslationPolicy(description, id, name);
  verifyVLANTranslationPolicyExists(description, id, name);
  deleteVLANTranslationPolicy(description, id, name);
  tryToDeleteANonExistingVLANTranslationPolicy(description, id, name);
  verifyVLANTranslationPolicyDoesNotExist(description, id, name);
});

// Story: crud:VLANTranslationPolicy:nondet:negative:dup-add
bthread("crud:VLANTranslationPolicy:nondet:negative:dup-add", function () {
  let description = "description_1026";
  let id = 1026;
  let name = "name_1026";
  createVLANTranslationPolicy(description, id, name);
  // waitForVLANTranslationPolicyAdded(description, id, name);
  verifyVLANTranslationPolicyExists(description, id, name);
  tryToAddExistingVLANTranslationPolicy(description, id, name);
  verifyVLANTranslationPolicyExists(description, id, name);
});

// Story: crud:VLANTranslationRule:nondet:1:1
bthread("crud:VLANTranslationRule:nondet:1:1", function () {
  let description = "description_1030";
  let id = 1030;
  let local_vid = 1030;
  let policy = 1030;
  let remote_vid = 1030;
  createVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  // waitForVLANTranslationRuleAdded(description, id, local_vid, policy, remote_vid);
  tryToAddExistingVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  verifyVLANTranslationRuleExists(description, id, local_vid, policy, remote_vid);
  updateVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  deleteVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  tryToDeleteANonExistingVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  verifyVLANTranslationRuleDoesNotExist(description, id, local_vid, policy, remote_vid);
});

// Story: crud:VLANTranslationRule:nondet:1:2
bthread("crud:VLANTranslationRule:nondet:1:2", function () {
  let description = "description_1031";
  let id = 1031;
  let local_vid = 1031;
  let policy = 1031;
  let remote_vid = 1031;
  createVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  // waitForVLANTranslationRuleAdded(description, id, local_vid, policy, remote_vid);
  tryToAddExistingVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  updateVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  verifyVLANTranslationRuleExists(description, id, local_vid, policy, remote_vid);
  deleteVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  tryToDeleteANonExistingVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  verifyVLANTranslationRuleDoesNotExist(description, id, local_vid, policy, remote_vid);
});

// Story: crud:VLANTranslationRule:nondet:negative:dup-add
bthread("crud:VLANTranslationRule:nondet:negative:dup-add", function () {
  let description = "description_1036";
  let id = 1036;
  let local_vid = 1036;
  let policy = 1036;
  let remote_vid = 1036;
  createVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  // waitForVLANTranslationRuleAdded(description, id, local_vid, policy, remote_vid);
  verifyVLANTranslationRuleExists(description, id, local_vid, policy, remote_vid);
  tryToAddExistingVLANTranslationRule(description, id, local_vid, policy, remote_vid);
  verifyVLANTranslationRuleExists(description, id, local_vid, policy, remote_vid);
});

// Story: crud:VLAN:nondet:1:1
bthread("crud:VLAN:nondet:1:1", function () {
  let comments = "comments_1040";
  let custom_fields = {};
  let description = "description_1040";
  let group = "group_1040";
  let id = 1040;
  let name = "name_1040";
  let qinq_role = "qinq_role_1040";
  let qinq_svlan = 1040;
  let role = "role_1040";
  let site = "site_1040";
  let status = "status_1040";
  let tags = "tags_1040";
  let tenant = "tenant_1040";
  let vid = 1040;
  createVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  // waitForVLANAdded(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  tryToAddExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  verifyVLANExists(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  updateVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  deleteVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  tryToDeleteANonExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  verifyVLANDoesNotExist(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
});

// Story: crud:VLAN:nondet:1:2
bthread("crud:VLAN:nondet:1:2", function () {
  let comments = "comments_1041";
  let custom_fields = {};
  let description = "description_1041";
  let group = "group_1041";
  let id = 1041;
  let name = "name_1041";
  let qinq_role = "qinq_role_1041";
  let qinq_svlan = 1041;
  let role = "role_1041";
  let site = "site_1041";
  let status = "status_1041";
  let tags = "tags_1041";
  let tenant = "tenant_1041";
  let vid = 1041;
  createVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  // waitForVLANAdded(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  tryToAddExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  updateVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  verifyVLANExists(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  deleteVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  tryToDeleteANonExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  verifyVLANDoesNotExist(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
});

// Story: crud:VLAN:nondet:negative:dup-add
bthread("crud:VLAN:nondet:negative:dup-add", function () {
  let comments = "comments_1046";
  let custom_fields = {};
  let description = "description_1046";
  let group = "group_1046";
  let id = 1046;
  let name = "name_1046";
  let qinq_role = "qinq_role_1046";
  let qinq_svlan = 1046;
  let role = "role_1046";
  let site = "site_1046";
  let status = "status_1046";
  let tags = "tags_1046";
  let tenant = "tenant_1046";
  let vid = 1046;
  createVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  // waitForVLANAdded(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  verifyVLANExists(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  tryToAddExistingVLAN(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
  verifyVLANExists(comments, custom_fields, description, group, id, name, qinq_role, qinq_svlan, role, site, status, tags, tenant, vid);
});

// Story: crud:VRF:nondet:1:1
bthread("crud:VRF:nondet:1:1", function () {
  let comments = "comments_1050";
  let custom_fields = {};
  let description = "description_1050";
  let enforce_unique = "enforce_unique_1050";
  let export_targets = "export_targets_1050";
  let id = 1050;
  let import_targets = "import_targets_1050";
  let name = "name_1050";
  let rd = "rd_1050";
  let tags = "tags_1050";
  let tenant = "tenant_1050";
  createVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  // waitForVRFAdded(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  tryToAddExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  verifyVRFExists(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  updateVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  deleteVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  tryToDeleteANonExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  verifyVRFDoesNotExist(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
});

// Story: crud:VRF:nondet:1:2
bthread("crud:VRF:nondet:1:2", function () {
  let comments = "comments_1051";
  let custom_fields = {};
  let description = "description_1051";
  let enforce_unique = "enforce_unique_1051";
  let export_targets = "export_targets_1051";
  let id = 1051;
  let import_targets = "import_targets_1051";
  let name = "name_1051";
  let rd = "rd_1051";
  let tags = "tags_1051";
  let tenant = "tenant_1051";
  createVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  // waitForVRFAdded(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  tryToAddExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  updateVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  verifyVRFExists(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  deleteVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  tryToDeleteANonExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  verifyVRFDoesNotExist(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
});

// Story: crud:VRF:nondet:negative:dup-add
bthread("crud:VRF:nondet:negative:dup-add", function () {
  let comments = "comments_1056";
  let custom_fields = {};
  let description = "description_1056";
  let enforce_unique = "enforce_unique_1056";
  let export_targets = "export_targets_1056";
  let id = 1056;
  let import_targets = "import_targets_1056";
  let name = "name_1056";
  let rd = "rd_1056";
  let tags = "tags_1056";
  let tenant = "tenant_1056";
  createVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  // waitForVRFAdded(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  verifyVRFExists(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  tryToAddExistingVRF(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
  verifyVRFExists(comments, custom_fields, description, enforce_unique, export_targets, id, import_targets, name, rd, tags, tenant);
});

// Story: crud:CircuitGroupAssignment:nondet:1:1
bthread("crud:CircuitGroupAssignment:nondet:1:1", function () {
  let group = "group_1060";
  let id = 1060;
  let member_id = 1060;
  let member_type = "member_type_1060";
  let priority = "priority_1060";
  let tags = "tags_1060";
  createCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  // waitForCircuitGroupAssignmentAdded(group, id, member_id, member_type, priority, tags);
  tryToAddExistingCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentExists(group, id, member_id, member_type, priority, tags);
  updateCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  deleteCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  tryToDeleteANonExistingCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentDoesNotExist(group, id, member_id, member_type, priority, tags);
});

// Story: crud:CircuitGroupAssignment:nondet:1:2
bthread("crud:CircuitGroupAssignment:nondet:1:2", function () {
  let group = "group_1061";
  let id = 1061;
  let member_id = 1061;
  let member_type = "member_type_1061";
  let priority = "priority_1061";
  let tags = "tags_1061";
  createCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  // waitForCircuitGroupAssignmentAdded(group, id, member_id, member_type, priority, tags);
  tryToAddExistingCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  updateCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentExists(group, id, member_id, member_type, priority, tags);
  deleteCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  tryToDeleteANonExistingCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentDoesNotExist(group, id, member_id, member_type, priority, tags);
});

// Story: crud:CircuitGroupAssignment:nondet:negative:dup-add
bthread("crud:CircuitGroupAssignment:nondet:negative:dup-add", function () {
  let group = "group_1066";
  let id = 1066;
  let member_id = 1066;
  let member_type = "member_type_1066";
  let priority = "priority_1066";
  let tags = "tags_1066";
  createCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  // waitForCircuitGroupAssignmentAdded(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentExists(group, id, member_id, member_type, priority, tags);
  tryToAddExistingCircuitGroupAssignment(group, id, member_id, member_type, priority, tags);
  verifyCircuitGroupAssignmentExists(group, id, member_id, member_type, priority, tags);
});

// Story: crud:CircuitGroup:nondet:1:1
bthread("crud:CircuitGroup:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1070";
  let id = 1070;
  let name = "name_1070";
  let slug = "slug_1070";
  let tags = "tags_1070";
  let tenant = "tenant_1070";
  createCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  // waitForCircuitGroupAdded(custom_fields, description, id, name, slug, tags, tenant);
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
  let description = "description_1071";
  let id = 1071;
  let name = "name_1071";
  let slug = "slug_1071";
  let tags = "tags_1071";
  let tenant = "tenant_1071";
  createCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  // waitForCircuitGroupAdded(custom_fields, description, id, name, slug, tags, tenant);
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
  let description = "description_1076";
  let id = 1076;
  let name = "name_1076";
  let slug = "slug_1076";
  let tags = "tags_1076";
  let tenant = "tenant_1076";
  createCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  // waitForCircuitGroupAdded(custom_fields, description, id, name, slug, tags, tenant);
  verifyCircuitGroupExists(custom_fields, description, id, name, slug, tags, tenant);
  tryToAddExistingCircuitGroup(custom_fields, description, id, name, slug, tags, tenant);
  verifyCircuitGroupExists(custom_fields, description, id, name, slug, tags, tenant);
});

// Story: crud:CircuitTermination:nondet:1:1
bthread("crud:CircuitTermination:nondet:1:1", function () {
  let circuit = "circuit_1080";
  let custom_fields = {};
  let description = "description_1080";
  let id = 1080;
  let mark_connected = "mark_connected_1080";
  let port_speed = 1080;
  let pp_info = "pp_info_1080";
  let tags = "tags_1080";
  let term_side = "term_side_1080";
  let termination_id = 1080;
  let termination_type = "termination_type_1080";
  let upstream_speed = 1080;
  let xconnect_id = 1080;
  createCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  // waitForCircuitTerminationAdded(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  tryToAddExistingCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationExists(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  updateCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  deleteCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  tryToDeleteANonExistingCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationDoesNotExist(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
});

// Story: crud:CircuitTermination:nondet:1:2
bthread("crud:CircuitTermination:nondet:1:2", function () {
  let circuit = "circuit_1081";
  let custom_fields = {};
  let description = "description_1081";
  let id = 1081;
  let mark_connected = "mark_connected_1081";
  let port_speed = 1081;
  let pp_info = "pp_info_1081";
  let tags = "tags_1081";
  let term_side = "term_side_1081";
  let termination_id = 1081;
  let termination_type = "termination_type_1081";
  let upstream_speed = 1081;
  let xconnect_id = 1081;
  createCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  // waitForCircuitTerminationAdded(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  tryToAddExistingCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  updateCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationExists(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  deleteCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  tryToDeleteANonExistingCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationDoesNotExist(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
});

// Story: crud:CircuitTermination:nondet:negative:dup-add
bthread("crud:CircuitTermination:nondet:negative:dup-add", function () {
  let circuit = "circuit_1086";
  let custom_fields = {};
  let description = "description_1086";
  let id = 1086;
  let mark_connected = "mark_connected_1086";
  let port_speed = 1086;
  let pp_info = "pp_info_1086";
  let tags = "tags_1086";
  let term_side = "term_side_1086";
  let termination_id = 1086;
  let termination_type = "termination_type_1086";
  let upstream_speed = 1086;
  let xconnect_id = 1086;
  createCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  // waitForCircuitTerminationAdded(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationExists(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  tryToAddExistingCircuitTermination(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
  verifyCircuitTerminationExists(circuit, custom_fields, description, id, mark_connected, port_speed, pp_info, tags, term_side, termination_id, termination_type, upstream_speed, xconnect_id);
});

// Story: crud:CircuitType:nondet:1:1
bthread("crud:CircuitType:nondet:1:1", function () {
  let color = "color_1090";
  let custom_fields = {};
  let description = "description_1090";
  let id = 1090;
  let name = "name_1090";
  let slug = "slug_1090";
  let tags = "tags_1090";
  createCircuitType(color, custom_fields, description, id, name, slug, tags);
  // waitForCircuitTypeAdded(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  updateCircuitType(color, custom_fields, description, id, name, slug, tags);
  deleteCircuitType(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:CircuitType:nondet:1:2
bthread("crud:CircuitType:nondet:1:2", function () {
  let color = "color_1091";
  let custom_fields = {};
  let description = "description_1091";
  let id = 1091;
  let name = "name_1091";
  let slug = "slug_1091";
  let tags = "tags_1091";
  createCircuitType(color, custom_fields, description, id, name, slug, tags);
  // waitForCircuitTypeAdded(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingCircuitType(color, custom_fields, description, id, name, slug, tags);
  updateCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  deleteCircuitType(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:CircuitType:nondet:negative:dup-add
bthread("crud:CircuitType:nondet:negative:dup-add", function () {
  let color = "color_1096";
  let custom_fields = {};
  let description = "description_1096";
  let id = 1096;
  let name = "name_1096";
  let slug = "slug_1096";
  let tags = "tags_1096";
  createCircuitType(color, custom_fields, description, id, name, slug, tags);
  // waitForCircuitTypeAdded(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:Circuit:nondet:1:1
bthread("crud:Circuit:nondet:1:1", function () {
  let assignments = "assignments_1100";
  let cid = 1100;
  let comments = "comments_1100";
  let commit_rate = 1100;
  let custom_fields = {};
  let description = "description_1100";
  let distance = 1100;
  let distance_unit = "distance_unit_1100";
  let id = 1100;
  let install_date = "install_date_1100";
  let status = "status_1100";
  let tags = "tags_1100";
  let tenant = "tenant_1100";
  let termination_date = "termination_date_1100";
  let type = "type_1100";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["provider_account"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id", "provider_account": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  provider_account = captured["provider_account"];
  createCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  // waitForCircuitAdded(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  tryToAddExistingCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  verifyCircuitExists(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  updateCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  deleteCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  tryToDeleteANonExistingCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  verifyCircuitDoesNotExist(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
});

// Story: crud:Circuit:nondet:1:2
bthread("crud:Circuit:nondet:1:2", function () {
  let assignments = "assignments_1101";
  let cid = 1101;
  let comments = "comments_1101";
  let commit_rate = 1101;
  let custom_fields = {};
  let description = "description_1101";
  let distance = 1101;
  let distance_unit = "distance_unit_1101";
  let id = 1101;
  let install_date = "install_date_1101";
  let status = "status_1101";
  let tags = "tags_1101";
  let tenant = "tenant_1101";
  let termination_date = "termination_date_1101";
  let type = "type_1101";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["provider_account"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id", "provider_account": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  provider_account = captured["provider_account"];
  createCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  // waitForCircuitAdded(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  tryToAddExistingCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  updateCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  verifyCircuitExists(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  deleteCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  tryToDeleteANonExistingCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  verifyCircuitDoesNotExist(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
});

// Story: crud:Circuit:nondet:negative:dup-add
bthread("crud:Circuit:nondet:negative:dup-add", function () {
  let assignments = "assignments_1106";
  let cid = 1106;
  let comments = "comments_1106";
  let commit_rate = 1106;
  let custom_fields = {};
  let description = "description_1106";
  let distance = 1106;
  let distance_unit = "distance_unit_1106";
  let id = 1106;
  let install_date = "install_date_1106";
  let status = "status_1106";
  let tags = "tags_1106";
  let tenant = "tenant_1106";
  let termination_date = "termination_date_1106";
  let type = "type_1106";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["provider_account"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id", "provider_account": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  provider_account = captured["provider_account"];
  createCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  // waitForCircuitAdded(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  verifyCircuitExists(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  tryToAddExistingCircuit(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
  verifyCircuitExists(assignments, cid, comments, commit_rate, custom_fields, description, distance, distance_unit, id, install_date, provider, provider_account, status, tags, tenant, termination_date, type);
});

// Story: crud:ProviderAccount:nondet:1:1
bthread("crud:ProviderAccount:nondet:1:1", function () {
  let account = "account_1110";
  let comments = "comments_1110";
  let custom_fields = {};
  let description = "description_1110";
  let id = 1110;
  let name = "name_1110";
  let tags = "tags_1110";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  createProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  // waitForProviderAccountAdded(account, comments, custom_fields, description, id, name, provider, tags);
  tryToAddExistingProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  verifyProviderAccountExists(account, comments, custom_fields, description, id, name, provider, tags);
  updateProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  deleteProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  tryToDeleteANonExistingProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  verifyProviderAccountDoesNotExist(account, comments, custom_fields, description, id, name, provider, tags);
});

// Story: crud:ProviderAccount:nondet:1:2
bthread("crud:ProviderAccount:nondet:1:2", function () {
  let account = "account_1111";
  let comments = "comments_1111";
  let custom_fields = {};
  let description = "description_1111";
  let id = 1111;
  let name = "name_1111";
  let tags = "tags_1111";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  createProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  // waitForProviderAccountAdded(account, comments, custom_fields, description, id, name, provider, tags);
  tryToAddExistingProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  updateProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  verifyProviderAccountExists(account, comments, custom_fields, description, id, name, provider, tags);
  deleteProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  tryToDeleteANonExistingProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  verifyProviderAccountDoesNotExist(account, comments, custom_fields, description, id, name, provider, tags);
});

// Story: crud:ProviderAccount:nondet:negative:dup-add
bthread("crud:ProviderAccount:nondet:negative:dup-add", function () {
  let account = "account_1116";
  let comments = "comments_1116";
  let custom_fields = {};
  let description = "description_1116";
  let id = 1116;
  let name = "name_1116";
  let tags = "tags_1116";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  let pkMap = {"provider": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  createProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  // waitForProviderAccountAdded(account, comments, custom_fields, description, id, name, provider, tags);
  verifyProviderAccountExists(account, comments, custom_fields, description, id, name, provider, tags);
  tryToAddExistingProviderAccount(account, comments, custom_fields, description, id, name, provider, tags);
  verifyProviderAccountExists(account, comments, custom_fields, description, id, name, provider, tags);
});

// Story: crud:ProviderNetwork:nondet:1:1
bthread("crud:ProviderNetwork:nondet:1:1", function () {
  let comments = "comments_1120";
  let custom_fields = {};
  let description = "description_1120";
  let id = 1120;
  let name = "name_1120";
  let tags = "tags_1120";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["service_id"] = matchAnyServiceAdded();
  let pkMap = {"provider": "id", "service_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  service_id = captured["service_id"];
  createProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  // waitForProviderNetworkAdded(comments, custom_fields, description, id, name, provider, service_id, tags);
  tryToAddExistingProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  verifyProviderNetworkExists(comments, custom_fields, description, id, name, provider, service_id, tags);
  updateProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  deleteProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  tryToDeleteANonExistingProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  verifyProviderNetworkDoesNotExist(comments, custom_fields, description, id, name, provider, service_id, tags);
});

// Story: crud:ProviderNetwork:nondet:1:2
bthread("crud:ProviderNetwork:nondet:1:2", function () {
  let comments = "comments_1121";
  let custom_fields = {};
  let description = "description_1121";
  let id = 1121;
  let name = "name_1121";
  let tags = "tags_1121";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["service_id"] = matchAnyServiceAdded();
  let pkMap = {"provider": "id", "service_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  service_id = captured["service_id"];
  createProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  // waitForProviderNetworkAdded(comments, custom_fields, description, id, name, provider, service_id, tags);
  tryToAddExistingProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  updateProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  verifyProviderNetworkExists(comments, custom_fields, description, id, name, provider, service_id, tags);
  deleteProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  tryToDeleteANonExistingProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  verifyProviderNetworkDoesNotExist(comments, custom_fields, description, id, name, provider, service_id, tags);
});

// Story: crud:ProviderNetwork:nondet:negative:dup-add
bthread("crud:ProviderNetwork:nondet:negative:dup-add", function () {
  let comments = "comments_1126";
  let custom_fields = {};
  let description = "description_1126";
  let id = 1126;
  let name = "name_1126";
  let tags = "tags_1126";
  // Dependency Barrier
  let deps = {};
  deps["provider"] = matchAnyProviderAdded();
  deps["service_id"] = matchAnyServiceAdded();
  let pkMap = {"provider": "id", "service_id": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider = captured["provider"];
  service_id = captured["service_id"];
  createProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  // waitForProviderNetworkAdded(comments, custom_fields, description, id, name, provider, service_id, tags);
  verifyProviderNetworkExists(comments, custom_fields, description, id, name, provider, service_id, tags);
  tryToAddExistingProviderNetwork(comments, custom_fields, description, id, name, provider, service_id, tags);
  verifyProviderNetworkExists(comments, custom_fields, description, id, name, provider, service_id, tags);
});

// Story: crud:Provider:nondet:1:1
bthread("crud:Provider:nondet:1:1", function () {
  let accounts = "accounts_1130";
  let asns = "asns_1130";
  let comments = "comments_1130";
  let custom_fields = {};
  let description = "description_1130";
  let id = 1130;
  let name = "name_1130";
  let slug = "slug_1130";
  let tags = "tags_1130";
  createProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  // waitForProviderAdded(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  tryToAddExistingProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderExists(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  updateProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  deleteProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderDoesNotExist(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
});

// Story: crud:Provider:nondet:1:2
bthread("crud:Provider:nondet:1:2", function () {
  let accounts = "accounts_1131";
  let asns = "asns_1131";
  let comments = "comments_1131";
  let custom_fields = {};
  let description = "description_1131";
  let id = 1131;
  let name = "name_1131";
  let slug = "slug_1131";
  let tags = "tags_1131";
  createProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  // waitForProviderAdded(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  tryToAddExistingProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  updateProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderExists(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  deleteProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderDoesNotExist(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
});

// Story: crud:Provider:nondet:negative:dup-add
bthread("crud:Provider:nondet:negative:dup-add", function () {
  let accounts = "accounts_1136";
  let asns = "asns_1136";
  let comments = "comments_1136";
  let custom_fields = {};
  let description = "description_1136";
  let id = 1136;
  let name = "name_1136";
  let slug = "slug_1136";
  let tags = "tags_1136";
  createProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  // waitForProviderAdded(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderExists(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  tryToAddExistingProvider(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
  verifyProviderExists(accounts, asns, comments, custom_fields, description, id, name, slug, tags);
});

// Story: crud:VirtualCircuitTermination:nondet:1:1
bthread("crud:VirtualCircuitTermination:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1140";
  let id = 1140;
  let interface = "interface_1140";
  let role = "role_1140";
  let tags = "tags_1140";
  let virtual_circuit = "virtual_circuit_1140";
  createVirtualCircuitTermination(custom_fields, description, id, interface, role, tags, virtual_circuit);
  // waitForVirtualCircuitTerminationAdded(custom_fields, description, id, interface, role, tags, virtual_circuit);
  tryToAddExistingVirtualCircuitTermination(custom_fields, description, id, interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationExists(custom_fields, description, id, interface, role, tags, virtual_circuit);
  updateVirtualCircuitTermination(custom_fields, description, id, interface, role, tags, virtual_circuit);
  deleteVirtualCircuitTermination(custom_fields, description, id, interface, role, tags, virtual_circuit);
  tryToDeleteANonExistingVirtualCircuitTermination(custom_fields, description, id, interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationDoesNotExist(custom_fields, description, id, interface, role, tags, virtual_circuit);
});

// Story: crud:VirtualCircuitTermination:nondet:1:2
bthread("crud:VirtualCircuitTermination:nondet:1:2", function () {
  let custom_fields = {};
  let description = "description_1141";
  let id = 1141;
  let interface = "interface_1141";
  let role = "role_1141";
  let tags = "tags_1141";
  let virtual_circuit = "virtual_circuit_1141";
  createVirtualCircuitTermination(custom_fields, description, id, interface, role, tags, virtual_circuit);
  // waitForVirtualCircuitTerminationAdded(custom_fields, description, id, interface, role, tags, virtual_circuit);
  tryToAddExistingVirtualCircuitTermination(custom_fields, description, id, interface, role, tags, virtual_circuit);
  updateVirtualCircuitTermination(custom_fields, description, id, interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationExists(custom_fields, description, id, interface, role, tags, virtual_circuit);
  deleteVirtualCircuitTermination(custom_fields, description, id, interface, role, tags, virtual_circuit);
  tryToDeleteANonExistingVirtualCircuitTermination(custom_fields, description, id, interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationDoesNotExist(custom_fields, description, id, interface, role, tags, virtual_circuit);
});

// Story: crud:VirtualCircuitTermination:nondet:negative:dup-add
bthread("crud:VirtualCircuitTermination:nondet:negative:dup-add", function () {
  let custom_fields = {};
  let description = "description_1146";
  let id = 1146;
  let interface = "interface_1146";
  let role = "role_1146";
  let tags = "tags_1146";
  let virtual_circuit = "virtual_circuit_1146";
  createVirtualCircuitTermination(custom_fields, description, id, interface, role, tags, virtual_circuit);
  // waitForVirtualCircuitTerminationAdded(custom_fields, description, id, interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationExists(custom_fields, description, id, interface, role, tags, virtual_circuit);
  tryToAddExistingVirtualCircuitTermination(custom_fields, description, id, interface, role, tags, virtual_circuit);
  verifyVirtualCircuitTerminationExists(custom_fields, description, id, interface, role, tags, virtual_circuit);
});

// Story: crud:VirtualCircuitType:nondet:1:1
bthread("crud:VirtualCircuitType:nondet:1:1", function () {
  let color = "color_1150";
  let custom_fields = {};
  let description = "description_1150";
  let id = 1150;
  let name = "name_1150";
  let slug = "slug_1150";
  let tags = "tags_1150";
  createVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  // waitForVirtualCircuitTypeAdded(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  updateVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  deleteVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:VirtualCircuitType:nondet:1:2
bthread("crud:VirtualCircuitType:nondet:1:2", function () {
  let color = "color_1151";
  let custom_fields = {};
  let description = "description_1151";
  let id = 1151;
  let name = "name_1151";
  let slug = "slug_1151";
  let tags = "tags_1151";
  createVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  // waitForVirtualCircuitTypeAdded(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  updateVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  deleteVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  tryToDeleteANonExistingVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeDoesNotExist(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:VirtualCircuitType:nondet:negative:dup-add
bthread("crud:VirtualCircuitType:nondet:negative:dup-add", function () {
  let color = "color_1156";
  let custom_fields = {};
  let description = "description_1156";
  let id = 1156;
  let name = "name_1156";
  let slug = "slug_1156";
  let tags = "tags_1156";
  createVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  // waitForVirtualCircuitTypeAdded(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
  tryToAddExistingVirtualCircuitType(color, custom_fields, description, id, name, slug, tags);
  verifyVirtualCircuitTypeExists(color, custom_fields, description, id, name, slug, tags);
});

// Story: crud:VirtualCircuit:nondet:1:1
bthread("crud:VirtualCircuit:nondet:1:1", function () {
  let cid = 1160;
  let comments = "comments_1160";
  let custom_fields = {};
  let description = "description_1160";
  let id = 1160;
  let status = "status_1160";
  let tags = "tags_1160";
  let tenant = "tenant_1160";
  let type = "type_1160";
  // Dependency Barrier
  let deps = {};
  deps["provider_account"] = matchAnyProviderAdded();
  deps["provider_network"] = matchAnyProviderAdded();
  let pkMap = {"provider_account": "id", "provider_network": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider_account = captured["provider_account"];
  provider_network = captured["provider_network"];
  createVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  // waitForVirtualCircuitAdded(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  tryToAddExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  updateVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  deleteVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  tryToDeleteANonExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  verifyVirtualCircuitDoesNotExist(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
});

// Story: crud:VirtualCircuit:nondet:1:2
bthread("crud:VirtualCircuit:nondet:1:2", function () {
  let cid = 1161;
  let comments = "comments_1161";
  let custom_fields = {};
  let description = "description_1161";
  let id = 1161;
  let status = "status_1161";
  let tags = "tags_1161";
  let tenant = "tenant_1161";
  let type = "type_1161";
  // Dependency Barrier
  let deps = {};
  deps["provider_account"] = matchAnyProviderAdded();
  deps["provider_network"] = matchAnyProviderAdded();
  let pkMap = {"provider_account": "id", "provider_network": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider_account = captured["provider_account"];
  provider_network = captured["provider_network"];
  createVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  // waitForVirtualCircuitAdded(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  tryToAddExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  updateVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  deleteVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  tryToDeleteANonExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  verifyVirtualCircuitDoesNotExist(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
});

// Story: crud:VirtualCircuit:nondet:negative:dup-add
bthread("crud:VirtualCircuit:nondet:negative:dup-add", function () {
  let cid = 1166;
  let comments = "comments_1166";
  let custom_fields = {};
  let description = "description_1166";
  let id = 1166;
  let status = "status_1166";
  let tags = "tags_1166";
  let tenant = "tenant_1166";
  let type = "type_1166";
  // Dependency Barrier
  let deps = {};
  deps["provider_account"] = matchAnyProviderAdded();
  deps["provider_network"] = matchAnyProviderAdded();
  let pkMap = {"provider_account": "id", "provider_network": "id"};
  let captured = resolveDependencies(deps, pkMap);
  provider_account = captured["provider_account"];
  provider_network = captured["provider_network"];
  createVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  // waitForVirtualCircuitAdded(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  tryToAddExistingVirtualCircuit(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
  verifyVirtualCircuitExists(cid, comments, custom_fields, description, id, provider_account, provider_network, status, tags, tenant, type);
});

// Story: crud:BackgroundQueue:read_only
bthread("crud:BackgroundQueue:read_only", function () {
  let name = 1170;
  verifyBackgroundQueueExists(name);
});

// Story: crud:BackgroundTask:read_only
bthread("crud:BackgroundTask:read_only", function () {
  let id = 1180;
  verifyBackgroundTaskExists(id);
});

// Story: crud:BackgroundWorker:read_only
bthread("crud:BackgroundWorker:read_only", function () {
  let name = 1190;
  verifyBackgroundWorkerExists(name);
});

// Story: crud:DataFile:read_only
bthread("crud:DataFile:read_only", function () {
  let id = 1200;
  verifyDataFileExists(id);
});

// Story: crud:DataSource:nondet:1:1
bthread("crud:DataSource:nondet:1:1", function () {
  let comments = "comments_1210";
  let custom_fields = {};
  let description = "description_1210";
  let enabled = "enabled_1210";
  let id = 1210;
  let ignore_rules = "ignore_rules_1210";
  let name = "name_1210";
  let parameters = "parameters_1210";
  let source_url = "source_url_1210";
  let sync_interval = 1210;
  let type = "type_1210";
  createDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  // waitForDataSourceAdded(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  tryToAddExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  updateDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  deleteDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  tryToDeleteANonExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  verifyDataSourceDoesNotExist(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
});

// Story: crud:DataSource:nondet:1:2
bthread("crud:DataSource:nondet:1:2", function () {
  let comments = "comments_1211";
  let custom_fields = {};
  let description = "description_1211";
  let enabled = "enabled_1211";
  let id = 1211;
  let ignore_rules = "ignore_rules_1211";
  let name = "name_1211";
  let parameters = "parameters_1211";
  let source_url = "source_url_1211";
  let sync_interval = 1211;
  let type = "type_1211";
  createDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  // waitForDataSourceAdded(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  tryToAddExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  updateDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  deleteDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  tryToDeleteANonExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  verifyDataSourceDoesNotExist(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
});

// Story: crud:DataSource:nondet:negative:dup-add
bthread("crud:DataSource:nondet:negative:dup-add", function () {
  let comments = "comments_1216";
  let custom_fields = {};
  let description = "description_1216";
  let enabled = "enabled_1216";
  let id = 1216;
  let ignore_rules = "ignore_rules_1216";
  let name = "name_1216";
  let parameters = "parameters_1216";
  let source_url = "source_url_1216";
  let sync_interval = 1216;
  let type = "type_1216";
  createDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  // waitForDataSourceAdded(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  tryToAddExistingDataSource(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
  verifyDataSourceExists(comments, custom_fields, description, enabled, id, ignore_rules, name, parameters, source_url, sync_interval, type);
});

// Story: crud:Job:read_only
bthread("crud:Job:read_only", function () {
  let id = 1220;
  let name = "name_1220";
  verifyJobExists(id, name);
});

// Story: crud:ObjectChange:read_only
bthread("crud:ObjectChange:read_only", function () {
  let id = 1230;
  verifyObjectChangeExists(id);
});

// Story: crud:IKEPolicy:nondet:1:1
bthread("crud:IKEPolicy:nondet:1:1", function () {
  let comments = "comments_1240";
  let custom_fields = {};
  let description = "description_1240";
  let id = 1240;
  let mode = "mode_1240";
  let name = "name_1240";
  let preshared_key = "preshared_key_1240";
  let proposals = "proposals_1240";
  let tags = "tags_1240";
  let version = 1240;
  createIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  // waitForIKEPolicyAdded(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  tryToAddExistingIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyExists(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  updateIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  deleteIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  tryToDeleteANonExistingIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyDoesNotExist(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
});

// Story: crud:IKEPolicy:nondet:1:2
bthread("crud:IKEPolicy:nondet:1:2", function () {
  let comments = "comments_1241";
  let custom_fields = {};
  let description = "description_1241";
  let id = 1241;
  let mode = "mode_1241";
  let name = "name_1241";
  let preshared_key = "preshared_key_1241";
  let proposals = "proposals_1241";
  let tags = "tags_1241";
  let version = 1241;
  createIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  // waitForIKEPolicyAdded(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  tryToAddExistingIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  updateIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyExists(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  deleteIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  tryToDeleteANonExistingIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyDoesNotExist(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
});

// Story: crud:IKEPolicy:nondet:negative:dup-add
bthread("crud:IKEPolicy:nondet:negative:dup-add", function () {
  let comments = "comments_1246";
  let custom_fields = {};
  let description = "description_1246";
  let id = 1246;
  let mode = "mode_1246";
  let name = "name_1246";
  let preshared_key = "preshared_key_1246";
  let proposals = "proposals_1246";
  let tags = "tags_1246";
  let version = 1246;
  createIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  // waitForIKEPolicyAdded(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyExists(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  tryToAddExistingIKEPolicy(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
  verifyIKEPolicyExists(comments, custom_fields, description, id, mode, name, preshared_key, proposals, tags, version);
});

// Story: crud:IKEProposal:nondet:1:1
bthread("crud:IKEProposal:nondet:1:1", function () {
  let authentication_algorithm = "authentication_algorithm_1250";
  let authentication_method = "authentication_method_1250";
  let comments = "comments_1250";
  let custom_fields = {};
  let description = "description_1250";
  let encryption_algorithm = "encryption_algorithm_1250";
  let group = 1250;
  let id = 1250;
  let name = "name_1250";
  let sa_lifetime = 1250;
  let tags = "tags_1250";
  createIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  // waitForIKEProposalAdded(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  tryToAddExistingIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalExists(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  updateIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  deleteIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  tryToDeleteANonExistingIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalDoesNotExist(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
});

// Story: crud:IKEProposal:nondet:1:2
bthread("crud:IKEProposal:nondet:1:2", function () {
  let authentication_algorithm = "authentication_algorithm_1251";
  let authentication_method = "authentication_method_1251";
  let comments = "comments_1251";
  let custom_fields = {};
  let description = "description_1251";
  let encryption_algorithm = "encryption_algorithm_1251";
  let group = 1251;
  let id = 1251;
  let name = "name_1251";
  let sa_lifetime = 1251;
  let tags = "tags_1251";
  createIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  // waitForIKEProposalAdded(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  tryToAddExistingIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  updateIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalExists(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  deleteIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  tryToDeleteANonExistingIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalDoesNotExist(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
});

// Story: crud:IKEProposal:nondet:negative:dup-add
bthread("crud:IKEProposal:nondet:negative:dup-add", function () {
  let authentication_algorithm = "authentication_algorithm_1256";
  let authentication_method = "authentication_method_1256";
  let comments = "comments_1256";
  let custom_fields = {};
  let description = "description_1256";
  let encryption_algorithm = "encryption_algorithm_1256";
  let group = 1256;
  let id = 1256;
  let name = "name_1256";
  let sa_lifetime = 1256;
  let tags = "tags_1256";
  createIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  // waitForIKEProposalAdded(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalExists(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  tryToAddExistingIKEProposal(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
  verifyIKEProposalExists(authentication_algorithm, authentication_method, comments, custom_fields, description, encryption_algorithm, group, id, name, sa_lifetime, tags);
});

// Story: crud:IPSecPolicy:nondet:1:1
bthread("crud:IPSecPolicy:nondet:1:1", function () {
  let comments = "comments_1260";
  let custom_fields = {};
  let description = "description_1260";
  let id = 1260;
  let name = "name_1260";
  let pfs_group = 1260;
  let proposals = "proposals_1260";
  let tags = "tags_1260";
  createIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  // waitForIPSecPolicyAdded(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  tryToAddExistingIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyExists(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  updateIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  deleteIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  tryToDeleteANonExistingIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyDoesNotExist(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
});

// Story: crud:IPSecPolicy:nondet:1:2
bthread("crud:IPSecPolicy:nondet:1:2", function () {
  let comments = "comments_1261";
  let custom_fields = {};
  let description = "description_1261";
  let id = 1261;
  let name = "name_1261";
  let pfs_group = 1261;
  let proposals = "proposals_1261";
  let tags = "tags_1261";
  createIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  // waitForIPSecPolicyAdded(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  tryToAddExistingIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  updateIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyExists(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  deleteIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  tryToDeleteANonExistingIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyDoesNotExist(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
});

// Story: crud:IPSecPolicy:nondet:negative:dup-add
bthread("crud:IPSecPolicy:nondet:negative:dup-add", function () {
  let comments = "comments_1266";
  let custom_fields = {};
  let description = "description_1266";
  let id = 1266;
  let name = "name_1266";
  let pfs_group = 1266;
  let proposals = "proposals_1266";
  let tags = "tags_1266";
  createIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  // waitForIPSecPolicyAdded(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyExists(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  tryToAddExistingIPSecPolicy(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
  verifyIPSecPolicyExists(comments, custom_fields, description, id, name, pfs_group, proposals, tags);
});

// Story: crud:IPSecProfile:nondet:1:1
bthread("crud:IPSecProfile:nondet:1:1", function () {
  let comments = "comments_1270";
  let custom_fields = {};
  let description = "description_1270";
  let id = 1270;
  let ike_policy = "ike_policy_1270";
  let ipsec_policy = "ipsec_policy_1270";
  let mode = "mode_1270";
  let name = "name_1270";
  let tags = "tags_1270";
  createIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  // waitForIPSecProfileAdded(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  tryToAddExistingIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileExists(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  updateIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  deleteIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  tryToDeleteANonExistingIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileDoesNotExist(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
});

// Story: crud:IPSecProfile:nondet:1:2
bthread("crud:IPSecProfile:nondet:1:2", function () {
  let comments = "comments_1271";
  let custom_fields = {};
  let description = "description_1271";
  let id = 1271;
  let ike_policy = "ike_policy_1271";
  let ipsec_policy = "ipsec_policy_1271";
  let mode = "mode_1271";
  let name = "name_1271";
  let tags = "tags_1271";
  createIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  // waitForIPSecProfileAdded(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  tryToAddExistingIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  updateIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileExists(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  deleteIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  tryToDeleteANonExistingIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileDoesNotExist(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
});

// Story: crud:IPSecProfile:nondet:negative:dup-add
bthread("crud:IPSecProfile:nondet:negative:dup-add", function () {
  let comments = "comments_1276";
  let custom_fields = {};
  let description = "description_1276";
  let id = 1276;
  let ike_policy = "ike_policy_1276";
  let ipsec_policy = "ipsec_policy_1276";
  let mode = "mode_1276";
  let name = "name_1276";
  let tags = "tags_1276";
  createIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  // waitForIPSecProfileAdded(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileExists(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  tryToAddExistingIPSecProfile(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
  verifyIPSecProfileExists(comments, custom_fields, description, id, ike_policy, ipsec_policy, mode, name, tags);
});

// Story: crud:IPSecProposal:nondet:1:1
bthread("crud:IPSecProposal:nondet:1:1", function () {
  let authentication_algorithm = "authentication_algorithm_1280";
  let comments = "comments_1280";
  let custom_fields = {};
  let description = "description_1280";
  let encryption_algorithm = "encryption_algorithm_1280";
  let id = 1280;
  let name = "name_1280";
  let sa_lifetime_data = 1280;
  let sa_lifetime_seconds = 1280;
  let tags = "tags_1280";
  createIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  // waitForIPSecProposalAdded(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  tryToAddExistingIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalExists(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  updateIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  deleteIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  tryToDeleteANonExistingIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalDoesNotExist(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
});

// Story: crud:IPSecProposal:nondet:1:2
bthread("crud:IPSecProposal:nondet:1:2", function () {
  let authentication_algorithm = "authentication_algorithm_1281";
  let comments = "comments_1281";
  let custom_fields = {};
  let description = "description_1281";
  let encryption_algorithm = "encryption_algorithm_1281";
  let id = 1281;
  let name = "name_1281";
  let sa_lifetime_data = 1281;
  let sa_lifetime_seconds = 1281;
  let tags = "tags_1281";
  createIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  // waitForIPSecProposalAdded(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  tryToAddExistingIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  updateIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalExists(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  deleteIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  tryToDeleteANonExistingIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalDoesNotExist(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
});

// Story: crud:IPSecProposal:nondet:negative:dup-add
bthread("crud:IPSecProposal:nondet:negative:dup-add", function () {
  let authentication_algorithm = "authentication_algorithm_1286";
  let comments = "comments_1286";
  let custom_fields = {};
  let description = "description_1286";
  let encryption_algorithm = "encryption_algorithm_1286";
  let id = 1286;
  let name = "name_1286";
  let sa_lifetime_data = 1286;
  let sa_lifetime_seconds = 1286;
  let tags = "tags_1286";
  createIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  // waitForIPSecProposalAdded(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalExists(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  tryToAddExistingIPSecProposal(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
  verifyIPSecProposalExists(authentication_algorithm, comments, custom_fields, description, encryption_algorithm, id, name, sa_lifetime_data, sa_lifetime_seconds, tags);
});

// Story: crud:L2VPNTermination:nondet:1:1
bthread("crud:L2VPNTermination:nondet:1:1", function () {
  let assigned_object_id = 1290;
  let assigned_object_type = "assigned_object_type_1290";
  let custom_fields = {};
  let id = 1290;
  let l2vpn = "l2vpn_1290";
  let tags = "tags_1290";
  createL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  // waitForL2VPNTerminationAdded(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  tryToAddExistingL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationExists(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  updateL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  deleteL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  tryToDeleteANonExistingL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationDoesNotExist(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
});

// Story: crud:L2VPNTermination:nondet:1:2
bthread("crud:L2VPNTermination:nondet:1:2", function () {
  let assigned_object_id = 1291;
  let assigned_object_type = "assigned_object_type_1291";
  let custom_fields = {};
  let id = 1291;
  let l2vpn = "l2vpn_1291";
  let tags = "tags_1291";
  createL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  // waitForL2VPNTerminationAdded(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  tryToAddExistingL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  updateL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationExists(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  deleteL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  tryToDeleteANonExistingL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationDoesNotExist(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
});

// Story: crud:L2VPNTermination:nondet:negative:dup-add
bthread("crud:L2VPNTermination:nondet:negative:dup-add", function () {
  let assigned_object_id = 1296;
  let assigned_object_type = "assigned_object_type_1296";
  let custom_fields = {};
  let id = 1296;
  let l2vpn = "l2vpn_1296";
  let tags = "tags_1296";
  createL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  // waitForL2VPNTerminationAdded(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationExists(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  tryToAddExistingL2VPNTermination(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
  verifyL2VPNTerminationExists(assigned_object_id, assigned_object_type, custom_fields, id, l2vpn, tags);
});

// Story: crud:L2VPN:nondet:1:1
bthread("crud:L2VPN:nondet:1:1", function () {
  let comments = "comments_1300";
  let custom_fields = {};
  let description = "description_1300";
  let export_targets = "export_targets_1300";
  let id = 1300;
  let identifier = 1300;
  let import_targets = "import_targets_1300";
  let name = "name_1300";
  let slug = "slug_1300";
  let status = "status_1300";
  let tags = "tags_1300";
  let tenant = "tenant_1300";
  let type = "type_1300";
  createL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  // waitForL2VPNAdded(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  tryToAddExistingL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNExists(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  updateL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  deleteL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  tryToDeleteANonExistingL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNDoesNotExist(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
});

// Story: crud:L2VPN:nondet:1:2
bthread("crud:L2VPN:nondet:1:2", function () {
  let comments = "comments_1301";
  let custom_fields = {};
  let description = "description_1301";
  let export_targets = "export_targets_1301";
  let id = 1301;
  let identifier = 1301;
  let import_targets = "import_targets_1301";
  let name = "name_1301";
  let slug = "slug_1301";
  let status = "status_1301";
  let tags = "tags_1301";
  let tenant = "tenant_1301";
  let type = "type_1301";
  createL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  // waitForL2VPNAdded(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  tryToAddExistingL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  updateL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNExists(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  deleteL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  tryToDeleteANonExistingL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNDoesNotExist(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
});

// Story: crud:L2VPN:nondet:negative:dup-add
bthread("crud:L2VPN:nondet:negative:dup-add", function () {
  let comments = "comments_1306";
  let custom_fields = {};
  let description = "description_1306";
  let export_targets = "export_targets_1306";
  let id = 1306;
  let identifier = 1306;
  let import_targets = "import_targets_1306";
  let name = "name_1306";
  let slug = "slug_1306";
  let status = "status_1306";
  let tags = "tags_1306";
  let tenant = "tenant_1306";
  let type = "type_1306";
  createL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  // waitForL2VPNAdded(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNExists(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  tryToAddExistingL2VPN(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
  verifyL2VPNExists(comments, custom_fields, description, export_targets, id, identifier, import_targets, name, slug, status, tags, tenant, type);
});

// Story: crud:TunnelGroup:nondet:1:1
bthread("crud:TunnelGroup:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1310";
  let id = 1310;
  let name = "name_1310";
  let slug = "slug_1310";
  let tags = "tags_1310";
  createTunnelGroup(custom_fields, description, id, name, slug, tags);
  // waitForTunnelGroupAdded(custom_fields, description, id, name, slug, tags);
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
  let description = "description_1311";
  let id = 1311;
  let name = "name_1311";
  let slug = "slug_1311";
  let tags = "tags_1311";
  createTunnelGroup(custom_fields, description, id, name, slug, tags);
  // waitForTunnelGroupAdded(custom_fields, description, id, name, slug, tags);
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
  let description = "description_1316";
  let id = 1316;
  let name = "name_1316";
  let slug = "slug_1316";
  let tags = "tags_1316";
  createTunnelGroup(custom_fields, description, id, name, slug, tags);
  // waitForTunnelGroupAdded(custom_fields, description, id, name, slug, tags);
  verifyTunnelGroupExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingTunnelGroup(custom_fields, description, id, name, slug, tags);
  verifyTunnelGroupExists(custom_fields, description, id, name, slug, tags);
});

// Story: crud:TunnelTermination:nondet:1:1
bthread("crud:TunnelTermination:nondet:1:1", function () {
  let custom_fields = {};
  let id = 1320;
  let outside_ip = "outside_ip_1320";
  let role = "role_1320";
  let tags = "tags_1320";
  let termination_id = 1320;
  let termination_type = "termination_type_1320";
  let tunnel = "tunnel_1320";
  createTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  // waitForTunnelTerminationAdded(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
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
  let id = 1321;
  let outside_ip = "outside_ip_1321";
  let role = "role_1321";
  let tags = "tags_1321";
  let termination_id = 1321;
  let termination_type = "termination_type_1321";
  let tunnel = "tunnel_1321";
  createTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  // waitForTunnelTerminationAdded(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
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
  let id = 1326;
  let outside_ip = "outside_ip_1326";
  let role = "role_1326";
  let tags = "tags_1326";
  let termination_id = 1326;
  let termination_type = "termination_type_1326";
  let tunnel = "tunnel_1326";
  createTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  // waitForTunnelTerminationAdded(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  verifyTunnelTerminationExists(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  tryToAddExistingTunnelTermination(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
  verifyTunnelTerminationExists(custom_fields, id, outside_ip, role, tags, termination_id, termination_type, tunnel);
});

// Story: crud:Tunnel:nondet:1:1
bthread("crud:Tunnel:nondet:1:1", function () {
  let comments = "comments_1330";
  let custom_fields = {};
  let description = "description_1330";
  let encapsulation = "encapsulation_1330";
  let group = "group_1330";
  let id = 1330;
  let ipsec_profile = "ipsec_profile_1330";
  let name = "name_1330";
  let slug = "slug_1330";
  let status = "status_1330";
  let tags = "tags_1330";
  let tenant = "tenant_1330";
  let tunnel_id = 1330;
  createTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  // waitForTunnelAdded(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  tryToAddExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  verifyTunnelExists(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  updateTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  deleteTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  tryToDeleteANonExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  verifyTunnelDoesNotExist(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
});

// Story: crud:Tunnel:nondet:1:2
bthread("crud:Tunnel:nondet:1:2", function () {
  let comments = "comments_1331";
  let custom_fields = {};
  let description = "description_1331";
  let encapsulation = "encapsulation_1331";
  let group = "group_1331";
  let id = 1331;
  let ipsec_profile = "ipsec_profile_1331";
  let name = "name_1331";
  let slug = "slug_1331";
  let status = "status_1331";
  let tags = "tags_1331";
  let tenant = "tenant_1331";
  let tunnel_id = 1331;
  createTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  // waitForTunnelAdded(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  tryToAddExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  updateTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  verifyTunnelExists(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  deleteTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  tryToDeleteANonExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  verifyTunnelDoesNotExist(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
});

// Story: crud:Tunnel:nondet:negative:dup-add
bthread("crud:Tunnel:nondet:negative:dup-add", function () {
  let comments = "comments_1336";
  let custom_fields = {};
  let description = "description_1336";
  let encapsulation = "encapsulation_1336";
  let group = "group_1336";
  let id = 1336;
  let ipsec_profile = "ipsec_profile_1336";
  let name = "name_1336";
  let slug = "slug_1336";
  let status = "status_1336";
  let tags = "tags_1336";
  let tenant = "tenant_1336";
  let tunnel_id = 1336;
  createTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  // waitForTunnelAdded(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  verifyTunnelExists(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  tryToAddExistingTunnel(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
  verifyTunnelExists(comments, custom_fields, description, encapsulation, group, id, ipsec_profile, name, slug, status, tags, tenant, tunnel_id);
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
  // waitForClusterGroupAdded(custom_fields, description, id, name, slug, tags);
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
  // waitForClusterGroupAdded(custom_fields, description, id, name, slug, tags);
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
  // waitForClusterGroupAdded(custom_fields, description, id, name, slug, tags);
  verifyClusterGroupExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingClusterGroup(custom_fields, description, id, name, slug, tags);
  verifyClusterGroupExists(custom_fields, description, id, name, slug, tags);
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
  // waitForClusterTypeAdded(custom_fields, description, id, name, slug, tags);
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
  // waitForClusterTypeAdded(custom_fields, description, id, name, slug, tags);
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
  // waitForClusterTypeAdded(custom_fields, description, id, name, slug, tags);
  verifyClusterTypeExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingClusterType(custom_fields, description, id, name, slug, tags);
  verifyClusterTypeExists(custom_fields, description, id, name, slug, tags);
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
  // waitForClusterAdded(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
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
  // waitForClusterAdded(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
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
  // waitForClusterAdded(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  verifyClusterExists(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  tryToAddExistingCluster(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
  verifyClusterExists(comments, custom_fields, description, group, id, name, scope_id, scope_type, status, tags, tenant, type);
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
  // waitForVirtualDiskAdded(custom_fields, description, id, name, size, tags, virtual_machine);
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
  // waitForVirtualDiskAdded(custom_fields, description, id, name, size, tags, virtual_machine);
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
  // waitForVirtualDiskAdded(custom_fields, description, id, name, size, tags, virtual_machine);
  verifyVirtualDiskExists(custom_fields, description, id, name, size, tags, virtual_machine);
  tryToAddExistingVirtualDisk(custom_fields, description, id, name, size, tags, virtual_machine);
  verifyVirtualDiskExists(custom_fields, description, id, name, size, tags, virtual_machine);
});

// Story: crud:VirtualMachine:nondet:1:1
bthread("crud:VirtualMachine:nondet:1:1", function () {
  let cluster = "cluster_1380";
  let comments = "comments_1380";
  let config_template = "config_template_1380";
  let custom_fields = {};
  let description = "description_1380";
  let device = "device_1380";
  let disk = 1380;
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
  createVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  // waitForVirtualMachineAdded(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  tryToAddExistingVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  verifyVirtualMachineExists(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  updateVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  deleteVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  tryToDeleteANonExistingVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  verifyVirtualMachineDoesNotExist(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
});

// Story: crud:VirtualMachine:nondet:1:2
bthread("crud:VirtualMachine:nondet:1:2", function () {
  let cluster = "cluster_1381";
  let comments = "comments_1381";
  let config_template = "config_template_1381";
  let custom_fields = {};
  let description = "description_1381";
  let device = "device_1381";
  let disk = 1381;
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
  createVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  // waitForVirtualMachineAdded(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  tryToAddExistingVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  updateVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  verifyVirtualMachineExists(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  deleteVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  tryToDeleteANonExistingVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  verifyVirtualMachineDoesNotExist(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
});

// Story: crud:VirtualMachine:nondet:negative:dup-add
bthread("crud:VirtualMachine:nondet:negative:dup-add", function () {
  let cluster = "cluster_1386";
  let comments = "comments_1386";
  let config_template = "config_template_1386";
  let custom_fields = {};
  let description = "description_1386";
  let device = "device_1386";
  let disk = 1386;
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
  createVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  // waitForVirtualMachineAdded(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  verifyVirtualMachineExists(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  tryToAddExistingVirtualMachine(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
  verifyVirtualMachineExists(cluster, comments, config_template, custom_fields, description, device, disk, id, local_context_data, memory, name, platform, primary_ip4, primary_ip6, role, serial, site, status, tags, tenant, vcpus);
});

// Story: crud:ContactAssignment:nondet:1:1
bthread("crud:ContactAssignment:nondet:1:1", function () {
  let contact = "contact_1390";
  let custom_fields = {};
  let id = 1390;
  let object_id = 1390;
  let object_type = "object_type_1390";
  let priority = "priority_1390";
  let role = "role_1390";
  let tags = "tags_1390";
  createContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  // waitForContactAssignmentAdded(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  tryToAddExistingContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentExists(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  updateContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  deleteContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  tryToDeleteANonExistingContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentDoesNotExist(contact, custom_fields, id, object_id, object_type, priority, role, tags);
});

// Story: crud:ContactAssignment:nondet:1:2
bthread("crud:ContactAssignment:nondet:1:2", function () {
  let contact = "contact_1391";
  let custom_fields = {};
  let id = 1391;
  let object_id = 1391;
  let object_type = "object_type_1391";
  let priority = "priority_1391";
  let role = "role_1391";
  let tags = "tags_1391";
  createContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  // waitForContactAssignmentAdded(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  tryToAddExistingContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  updateContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentExists(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  deleteContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  tryToDeleteANonExistingContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentDoesNotExist(contact, custom_fields, id, object_id, object_type, priority, role, tags);
});

// Story: crud:ContactAssignment:nondet:negative:dup-add
bthread("crud:ContactAssignment:nondet:negative:dup-add", function () {
  let contact = "contact_1396";
  let custom_fields = {};
  let id = 1396;
  let object_id = 1396;
  let object_type = "object_type_1396";
  let priority = "priority_1396";
  let role = "role_1396";
  let tags = "tags_1396";
  createContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  // waitForContactAssignmentAdded(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentExists(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  tryToAddExistingContactAssignment(contact, custom_fields, id, object_id, object_type, priority, role, tags);
  verifyContactAssignmentExists(contact, custom_fields, id, object_id, object_type, priority, role, tags);
});

// Story: crud:ContactGroup:nondet:1:1
bthread("crud:ContactGroup:nondet:1:1", function () {
  let comments = "comments_1400";
  let custom_fields = {};
  let description = "description_1400";
  let id = 1400;
  let name = "name_1400";
  let parent = 1400;
  let slug = "slug_1400";
  let tags = "tags_1400";
  createContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  // waitForContactGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  updateContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:ContactGroup:nondet:1:2
bthread("crud:ContactGroup:nondet:1:2", function () {
  let comments = "comments_1401";
  let custom_fields = {};
  let description = "description_1401";
  let id = 1401;
  let name = "name_1401";
  let parent = 1401;
  let slug = "slug_1401";
  let tags = "tags_1401";
  createContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  // waitForContactGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  updateContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:ContactGroup:nondet:negative:dup-add
bthread("crud:ContactGroup:nondet:negative:dup-add", function () {
  let comments = "comments_1406";
  let custom_fields = {};
  let description = "description_1406";
  let id = 1406;
  let name = "name_1406";
  let parent = 1406;
  let slug = "slug_1406";
  let tags = "tags_1406";
  createContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  // waitForContactGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingContactGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyContactGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:ContactRole:nondet:1:1
bthread("crud:ContactRole:nondet:1:1", function () {
  let custom_fields = {};
  let description = "description_1410";
  let id = 1410;
  let name = "name_1410";
  let slug = "slug_1410";
  let tags = "tags_1410";
  createContactRole(custom_fields, description, id, name, slug, tags);
  // waitForContactRoleAdded(custom_fields, description, id, name, slug, tags);
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
  let description = "description_1411";
  let id = 1411;
  let name = "name_1411";
  let slug = "slug_1411";
  let tags = "tags_1411";
  createContactRole(custom_fields, description, id, name, slug, tags);
  // waitForContactRoleAdded(custom_fields, description, id, name, slug, tags);
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
  let description = "description_1416";
  let id = 1416;
  let name = "name_1416";
  let slug = "slug_1416";
  let tags = "tags_1416";
  createContactRole(custom_fields, description, id, name, slug, tags);
  // waitForContactRoleAdded(custom_fields, description, id, name, slug, tags);
  verifyContactRoleExists(custom_fields, description, id, name, slug, tags);
  tryToAddExistingContactRole(custom_fields, description, id, name, slug, tags);
  verifyContactRoleExists(custom_fields, description, id, name, slug, tags);
});

// Story: crud:Contact:nondet:1:1
bthread("crud:Contact:nondet:1:1", function () {
  let address = "address_1420";
  let comments = "comments_1420";
  let custom_fields = {};
  let description = "description_1420";
  let email = "email_1420";
  let groups = "groups_1420";
  let id = 1420;
  let link = "link_1420";
  let name = "name_1420";
  let phone = "phone_1420";
  let tags = "tags_1420";
  let title = "title_1420";
  createContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  // waitForContactAdded(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  tryToAddExistingContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactExists(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  updateContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  deleteContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  tryToDeleteANonExistingContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactDoesNotExist(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
});

// Story: crud:Contact:nondet:1:2
bthread("crud:Contact:nondet:1:2", function () {
  let address = "address_1421";
  let comments = "comments_1421";
  let custom_fields = {};
  let description = "description_1421";
  let email = "email_1421";
  let groups = "groups_1421";
  let id = 1421;
  let link = "link_1421";
  let name = "name_1421";
  let phone = "phone_1421";
  let tags = "tags_1421";
  let title = "title_1421";
  createContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  // waitForContactAdded(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  tryToAddExistingContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  updateContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactExists(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  deleteContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  tryToDeleteANonExistingContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactDoesNotExist(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
});

// Story: crud:Contact:nondet:negative:dup-add
bthread("crud:Contact:nondet:negative:dup-add", function () {
  let address = "address_1426";
  let comments = "comments_1426";
  let custom_fields = {};
  let description = "description_1426";
  let email = "email_1426";
  let groups = "groups_1426";
  let id = 1426;
  let link = "link_1426";
  let name = "name_1426";
  let phone = "phone_1426";
  let tags = "tags_1426";
  let title = "title_1426";
  createContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  // waitForContactAdded(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactExists(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  tryToAddExistingContact(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
  verifyContactExists(address, comments, custom_fields, description, email, groups, id, link, name, phone, tags, title);
});

// Story: crud:TenantGroup:nondet:1:1
bthread("crud:TenantGroup:nondet:1:1", function () {
  let comments = "comments_1430";
  let custom_fields = {};
  let description = "description_1430";
  let id = 1430;
  let name = "name_1430";
  let parent = 1430;
  let slug = "slug_1430";
  let tags = "tags_1430";
  createTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  // waitForTenantGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  updateTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:TenantGroup:nondet:1:2
bthread("crud:TenantGroup:nondet:1:2", function () {
  let comments = "comments_1431";
  let custom_fields = {};
  let description = "description_1431";
  let id = 1431;
  let name = "name_1431";
  let parent = 1431;
  let slug = "slug_1431";
  let tags = "tags_1431";
  createTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  // waitForTenantGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  updateTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  deleteTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToDeleteANonExistingTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupDoesNotExist(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:TenantGroup:nondet:negative:dup-add
bthread("crud:TenantGroup:nondet:negative:dup-add", function () {
  let comments = "comments_1436";
  let custom_fields = {};
  let description = "description_1436";
  let id = 1436;
  let name = "name_1436";
  let parent = 1436;
  let slug = "slug_1436";
  let tags = "tags_1436";
  createTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  // waitForTenantGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingTenantGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyTenantGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
});

// Story: crud:Tenant:nondet:1:1
bthread("crud:Tenant:nondet:1:1", function () {
  let comments = "comments_1440";
  let custom_fields = {};
  let description = "description_1440";
  let group = "group_1440";
  let id = 1440;
  let name = "name_1440";
  let slug = "slug_1440";
  let tags = "tags_1440";
  createTenant(comments, custom_fields, description, group, id, name, slug, tags);
  // waitForTenantAdded(comments, custom_fields, description, group, id, name, slug, tags);
  tryToAddExistingTenant(comments, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, custom_fields, description, group, id, name, slug, tags);
  updateTenant(comments, custom_fields, description, group, id, name, slug, tags);
  deleteTenant(comments, custom_fields, description, group, id, name, slug, tags);
  tryToDeleteANonExistingTenant(comments, custom_fields, description, group, id, name, slug, tags);
  verifyTenantDoesNotExist(comments, custom_fields, description, group, id, name, slug, tags);
});

// Story: crud:Tenant:nondet:1:2
bthread("crud:Tenant:nondet:1:2", function () {
  let comments = "comments_1441";
  let custom_fields = {};
  let description = "description_1441";
  let group = "group_1441";
  let id = 1441;
  let name = "name_1441";
  let slug = "slug_1441";
  let tags = "tags_1441";
  createTenant(comments, custom_fields, description, group, id, name, slug, tags);
  // waitForTenantAdded(comments, custom_fields, description, group, id, name, slug, tags);
  tryToAddExistingTenant(comments, custom_fields, description, group, id, name, slug, tags);
  updateTenant(comments, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, custom_fields, description, group, id, name, slug, tags);
  deleteTenant(comments, custom_fields, description, group, id, name, slug, tags);
  tryToDeleteANonExistingTenant(comments, custom_fields, description, group, id, name, slug, tags);
  verifyTenantDoesNotExist(comments, custom_fields, description, group, id, name, slug, tags);
});

// Story: crud:Tenant:nondet:negative:dup-add
bthread("crud:Tenant:nondet:negative:dup-add", function () {
  let comments = "comments_1446";
  let custom_fields = {};
  let description = "description_1446";
  let group = "group_1446";
  let id = 1446;
  let name = "name_1446";
  let slug = "slug_1446";
  let tags = "tags_1446";
  createTenant(comments, custom_fields, description, group, id, name, slug, tags);
  // waitForTenantAdded(comments, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, custom_fields, description, group, id, name, slug, tags);
  tryToAddExistingTenant(comments, custom_fields, description, group, id, name, slug, tags);
  verifyTenantExists(comments, custom_fields, description, group, id, name, slug, tags);
});

// Story: crud:Group:nondet:1:1
bthread("crud:Group:nondet:1:1", function () {
  let description = "description_1450";
  let id = 1450;
  let name = "name_1450";
  let permissions = "permissions_1450";
  createGroup(description, id, name, permissions);
  // waitForGroupAdded(description, id, name, permissions);
  tryToAddExistingGroup(description, id, name, permissions);
  verifyGroupExists(description, id, name, permissions);
  updateGroup(description, id, name, permissions);
  deleteGroup(description, id, name, permissions);
  tryToDeleteANonExistingGroup(description, id, name, permissions);
  verifyGroupDoesNotExist(description, id, name, permissions);
});

// Story: crud:Group:nondet:1:2
bthread("crud:Group:nondet:1:2", function () {
  let description = "description_1451";
  let id = 1451;
  let name = "name_1451";
  let permissions = "permissions_1451";
  createGroup(description, id, name, permissions);
  // waitForGroupAdded(description, id, name, permissions);
  tryToAddExistingGroup(description, id, name, permissions);
  updateGroup(description, id, name, permissions);
  verifyGroupExists(description, id, name, permissions);
  deleteGroup(description, id, name, permissions);
  tryToDeleteANonExistingGroup(description, id, name, permissions);
  verifyGroupDoesNotExist(description, id, name, permissions);
});

// Story: crud:Group:nondet:negative:dup-add
bthread("crud:Group:nondet:negative:dup-add", function () {
  let description = "description_1456";
  let id = 1456;
  let name = "name_1456";
  let permissions = "permissions_1456";
  createGroup(description, id, name, permissions);
  // waitForGroupAdded(description, id, name, permissions);
  verifyGroupExists(description, id, name, permissions);
  tryToAddExistingGroup(description, id, name, permissions);
  verifyGroupExists(description, id, name, permissions);
});

// Story: crud:Permission:nondet:1:1
bthread("crud:Permission:nondet:1:1", function () {
  let actions = "actions_1460";
  let constraints = "constraints_1460";
  let description = "description_1460";
  let enabled = "enabled_1460";
  let groups = "groups_1460";
  let id = 1460;
  let name = "name_1460";
  let object_types = "object_types_1460";
  let users = "users_1460";
  createPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  // waitForPermissionAdded(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToAddExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionExists(actions, constraints, description, enabled, groups, id, name, object_types, users);
  updatePermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  deletePermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToDeleteANonExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionDoesNotExist(actions, constraints, description, enabled, groups, id, name, object_types, users);
});

// Story: crud:Permission:nondet:1:2
bthread("crud:Permission:nondet:1:2", function () {
  let actions = "actions_1461";
  let constraints = "constraints_1461";
  let description = "description_1461";
  let enabled = "enabled_1461";
  let groups = "groups_1461";
  let id = 1461;
  let name = "name_1461";
  let object_types = "object_types_1461";
  let users = "users_1461";
  createPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  // waitForPermissionAdded(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToAddExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  updatePermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionExists(actions, constraints, description, enabled, groups, id, name, object_types, users);
  deletePermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToDeleteANonExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionDoesNotExist(actions, constraints, description, enabled, groups, id, name, object_types, users);
});

// Story: crud:Permission:nondet:negative:dup-add
bthread("crud:Permission:nondet:negative:dup-add", function () {
  let actions = "actions_1466";
  let constraints = "constraints_1466";
  let description = "description_1466";
  let enabled = "enabled_1466";
  let groups = "groups_1466";
  let id = 1466;
  let name = "name_1466";
  let object_types = "object_types_1466";
  let users = "users_1466";
  createPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  // waitForPermissionAdded(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionExists(actions, constraints, description, enabled, groups, id, name, object_types, users);
  tryToAddExistingPermission(actions, constraints, description, enabled, groups, id, name, object_types, users);
  verifyPermissionExists(actions, constraints, description, enabled, groups, id, name, object_types, users);
});

// Story: crud:Token:nondet:1:1
bthread("crud:Token:nondet:1:1", function () {
  let description = "description_1470";
  let expires = "expires_1470";
  let id = 1470;
  let key = "key_1470";
  let last_used = "last_used_1470";
  let user = "user_1470";
  let write_enabled = "write_enabled_1470";
  createToken(description, expires, id, key, last_used, user, write_enabled);
  // waitForTokenAdded(description, expires, id, key, last_used, user, write_enabled);
  tryToAddExistingToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenExists(description, expires, id, key, last_used, user, write_enabled);
  updateToken(description, expires, id, key, last_used, user, write_enabled);
  deleteToken(description, expires, id, key, last_used, user, write_enabled);
  tryToDeleteANonExistingToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenDoesNotExist(description, expires, id, key, last_used, user, write_enabled);
});

// Story: crud:Token:nondet:1:2
bthread("crud:Token:nondet:1:2", function () {
  let description = "description_1471";
  let expires = "expires_1471";
  let id = 1471;
  let key = "key_1471";
  let last_used = "last_used_1471";
  let user = "user_1471";
  let write_enabled = "write_enabled_1471";
  createToken(description, expires, id, key, last_used, user, write_enabled);
  // waitForTokenAdded(description, expires, id, key, last_used, user, write_enabled);
  tryToAddExistingToken(description, expires, id, key, last_used, user, write_enabled);
  updateToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenExists(description, expires, id, key, last_used, user, write_enabled);
  deleteToken(description, expires, id, key, last_used, user, write_enabled);
  tryToDeleteANonExistingToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenDoesNotExist(description, expires, id, key, last_used, user, write_enabled);
});

// Story: crud:Token:nondet:negative:dup-add
bthread("crud:Token:nondet:negative:dup-add", function () {
  let description = "description_1476";
  let expires = "expires_1476";
  let id = 1476;
  let key = "key_1476";
  let last_used = "last_used_1476";
  let user = "user_1476";
  let write_enabled = "write_enabled_1476";
  createToken(description, expires, id, key, last_used, user, write_enabled);
  // waitForTokenAdded(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenExists(description, expires, id, key, last_used, user, write_enabled);
  tryToAddExistingToken(description, expires, id, key, last_used, user, write_enabled);
  verifyTokenExists(description, expires, id, key, last_used, user, write_enabled);
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let date_joined = "date_joined_1480";
  let email = "email_1480";
  let first_name = "first_name_1480";
  let groups = "groups_1480";
  let id = 1480;
  let is_active = "is_active_1480";
  let is_staff = "is_staff_1480";
  let last_login = "last_login_1480";
  let last_name = "last_name_1480";
  let password = "password_1480";
  let permissions = "permissions_1480";
  let username = "username_1480";
  createUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  // waitForUserAdded(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToAddExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserExists(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  updateUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  deleteUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToDeleteANonExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserDoesNotExist(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let date_joined = "date_joined_1481";
  let email = "email_1481";
  let first_name = "first_name_1481";
  let groups = "groups_1481";
  let id = 1481;
  let is_active = "is_active_1481";
  let is_staff = "is_staff_1481";
  let last_login = "last_login_1481";
  let last_name = "last_name_1481";
  let password = "password_1481";
  let permissions = "permissions_1481";
  let username = "username_1481";
  createUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  // waitForUserAdded(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToAddExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  updateUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserExists(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  deleteUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToDeleteANonExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserDoesNotExist(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let date_joined = "date_joined_1486";
  let email = "email_1486";
  let first_name = "first_name_1486";
  let groups = "groups_1486";
  let id = 1486;
  let is_active = "is_active_1486";
  let is_staff = "is_staff_1486";
  let last_login = "last_login_1486";
  let last_name = "last_name_1486";
  let password = "password_1486";
  let permissions = "permissions_1486";
  let username = "username_1486";
  createUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  // waitForUserAdded(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserExists(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  tryToAddExistingUser(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
  verifyUserExists(date_joined, email, first_name, groups, id, is_active, is_staff, last_login, last_name, password, permissions, username);
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
  // waitForWirelessLANGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
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
  // waitForWirelessLANGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
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
  // waitForWirelessLANGroupAdded(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyWirelessLANGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
  tryToAddExistingWirelessLANGroup(comments, custom_fields, description, id, name, parent, slug, tags);
  verifyWirelessLANGroupExists(comments, custom_fields, description, id, name, parent, slug, tags);
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
  // waitForWirelessLANAdded(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
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
  // waitForWirelessLANAdded(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
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
  // waitForWirelessLANAdded(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  verifyWirelessLANExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  tryToAddExistingWirelessLAN(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
  verifyWirelessLANExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, group, id, scope_id, scope_type, ssid, status, tags, tenant, vlan);
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
  // waitForWirelessLinkAdded(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
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
  // waitForWirelessLinkAdded(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
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
  // waitForWirelessLinkAdded(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  verifyWirelessLinkExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  tryToAddExistingWirelessLink(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
  verifyWirelessLinkExists(auth_cipher, auth_psk, auth_type, comments, custom_fields, description, distance, distance_unit, id, interface_a, interface_b, ssid, status, tags, tenant);
});
