// Auto-generated stories for garage
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

// Story: crud:Chains:linear:1
bthread("crud:Chains:linear:1", function () {
  let chainId = "chainId_210_" + Math.floor(Math.random() * 10000);
  let description = "description_210_" + Math.floor(Math.random() * 10000);
  let hqAddress = "hqAddress_210_" + Math.floor(Math.random() * 10000);
  let id = "id_210_" + Math.floor(Math.random() * 10000);
  let name = "name_210_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createChain(chainId, description, hqAddress, id, name);
  verifyChainsExists(chainId, description, hqAddress, id, name);
  updateChain(chainId, description, hqAddress, id, name);
  // Skip delete for Chains to prevent foreign key errors (has active dependents)
});

// Story: crud:Chains:linear:2
bthread("crud:Chains:linear:2", function () {
  let chainId = "chainId_220_" + Math.floor(Math.random() * 10000);
  let description = "description_220_" + Math.floor(Math.random() * 10000);
  let hqAddress = "hqAddress_220_" + Math.floor(Math.random() * 10000);
  let id = "id_220_" + Math.floor(Math.random() * 10000);
  let name = "name_220_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createChain(chainId, description, hqAddress, id, name);
  verifyChainsExists(chainId, description, hqAddress, id, name);
  updateChain(chainId, description, hqAddress, id, name);
  // Skip delete for Chains to prevent foreign key errors (has active dependents)
});

// Story: crud:Chains:linear:3
bthread("crud:Chains:linear:3", function () {
  let chainId = "chainId_230_" + Math.floor(Math.random() * 10000);
  let description = "description_230_" + Math.floor(Math.random() * 10000);
  let hqAddress = "hqAddress_230_" + Math.floor(Math.random() * 10000);
  let id = "id_230_" + Math.floor(Math.random() * 10000);
  let name = "name_230_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createChain(chainId, description, hqAddress, id, name);
  verifyChainsExists(chainId, description, hqAddress, id, name);
  updateChain(chainId, description, hqAddress, id, name);
  // Skip delete for Chains to prevent foreign key errors (has active dependents)
});

// Monitor: Chains Verification
bthread("monitor:Chains", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyChainsAdded() });
    let chainId = (e.data.parameters && e.data.parameters["chainId"]) ? e.data.parameters["chainId"] : e.data["chainId"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let hqAddress = (e.data.parameters && e.data.parameters["hqAddress"]) ? e.data.parameters["hqAddress"] : e.data["hqAddress"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    // Monitor Chains: Verifying existence (Deletion skipped due to dependencies)
    verifyChainsExists(chainId, description, hqAddress, id, name);
  }
});

// Story: crud:Customers:linear:1
bthread("crud:Customers:linear:1", function () {
  let customerId = "customerId_260_" + Math.floor(Math.random() * 10000);
  let email = "email_260_" + Math.floor(Math.random() * 10000);
  let fullName = "fullName_260_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let id = "id_260_" + Math.floor(Math.random() * 10000);
  let name = "name_260_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let phone = "phone_260_" + Math.floor(Math.random() * 10000);
  let type = "type_260_" + Math.floor(Math.random() * 10000);
  createCustomer(customerId, email, fullName, id, name, phone, type);
  verifyCustomersExists(customerId, email, fullName, id, name, phone, type);
  updateCustomer(customerId, email, fullName, id, name, phone, type);
  // Skip delete for Customers to prevent foreign key errors (has active dependents)
});

// Story: crud:Customers:linear:2
bthread("crud:Customers:linear:2", function () {
  let customerId = "customerId_270_" + Math.floor(Math.random() * 10000);
  let email = "email_270_" + Math.floor(Math.random() * 10000);
  let fullName = "fullName_270_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let id = "id_270_" + Math.floor(Math.random() * 10000);
  let name = "name_270_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let phone = "phone_270_" + Math.floor(Math.random() * 10000);
  let type = "type_270_" + Math.floor(Math.random() * 10000);
  createCustomer(customerId, email, fullName, id, name, phone, type);
  verifyCustomersExists(customerId, email, fullName, id, name, phone, type);
  updateCustomer(customerId, email, fullName, id, name, phone, type);
  // Skip delete for Customers to prevent foreign key errors (has active dependents)
});

// Story: crud:Customers:linear:3
bthread("crud:Customers:linear:3", function () {
  let customerId = "customerId_280_" + Math.floor(Math.random() * 10000);
  let email = "email_280_" + Math.floor(Math.random() * 10000);
  let fullName = "fullName_280_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let id = "id_280_" + Math.floor(Math.random() * 10000);
  let name = "name_280_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let phone = "phone_280_" + Math.floor(Math.random() * 10000);
  let type = "type_280_" + Math.floor(Math.random() * 10000);
  createCustomer(customerId, email, fullName, id, name, phone, type);
  verifyCustomersExists(customerId, email, fullName, id, name, phone, type);
  updateCustomer(customerId, email, fullName, id, name, phone, type);
  // Skip delete for Customers to prevent foreign key errors (has active dependents)
});

// Monitor: Customers Verification
bthread("monitor:Customers", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCustomersAdded() });
    let customerId = (e.data.parameters && e.data.parameters["customerId"]) ? e.data.parameters["customerId"] : e.data["customerId"];
    let email = (e.data.parameters && e.data.parameters["email"]) ? e.data.parameters["email"] : e.data["email"];
    let fullName = (e.data.parameters && e.data.parameters["fullName"]) ? e.data.parameters["fullName"] : e.data["fullName"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let phone = (e.data.parameters && e.data.parameters["phone"]) ? e.data.parameters["phone"] : e.data["phone"];
    let type = (e.data.parameters && e.data.parameters["type"]) ? e.data.parameters["type"] : e.data["type"];
    // Monitor Customers: Verifying existence (Deletion skipped due to dependencies)
    verifyCustomersExists(customerId, email, fullName, id, name, phone, type);
  }
});

// Story: crud:Garages:linear:1
bthread("crud:Garages:linear:1", function () {
  let address = "address_310_" + Math.floor(Math.random() * 10000);
  let capacity = 31000000 + Math.floor(Math.random() * 100000);
  let chainId; // Resolved Dependency
  let garageId = "garageId_310_" + Math.floor(Math.random() * 10000);
  let id = "id_310_" + Math.floor(Math.random() * 10000);
  let location = "location_310_" + Math.floor(Math.random() * 10000);
  let name = "name_310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let phone = "phone_310_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["chainId"] = matchAnyChainsAdded();
  let pkMap = {"chainId": "chainId"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  chainId = captured["chainId"];
  createGarage(address, capacity, chainId, garageId, id, location, name, phone);
  verifyGaragesExists(address, capacity, chainId, garageId, id, location, name, phone);
  updateGarage(address, capacity, chainId, garageId, id, location, name, phone);
  // Skip delete for Garages to prevent foreign key errors (has active dependents)
});

// Story: crud:Garages:linear:2
bthread("crud:Garages:linear:2", function () {
  let address = "address_320_" + Math.floor(Math.random() * 10000);
  let capacity = 32000000 + Math.floor(Math.random() * 100000);
  let chainId; // Resolved Dependency
  let garageId = "garageId_320_" + Math.floor(Math.random() * 10000);
  let id = "id_320_" + Math.floor(Math.random() * 10000);
  let location = "location_320_" + Math.floor(Math.random() * 10000);
  let name = "name_320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let phone = "phone_320_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["chainId"] = matchAnyChainsAdded();
  let pkMap = {"chainId": "chainId"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  chainId = captured["chainId"];
  createGarage(address, capacity, chainId, garageId, id, location, name, phone);
  verifyGaragesExists(address, capacity, chainId, garageId, id, location, name, phone);
  updateGarage(address, capacity, chainId, garageId, id, location, name, phone);
  // Skip delete for Garages to prevent foreign key errors (has active dependents)
});

// Story: crud:Garages:linear:3
bthread("crud:Garages:linear:3", function () {
  let address = "address_330_" + Math.floor(Math.random() * 10000);
  let capacity = 33000000 + Math.floor(Math.random() * 100000);
  let chainId; // Resolved Dependency
  let garageId = "garageId_330_" + Math.floor(Math.random() * 10000);
  let id = "id_330_" + Math.floor(Math.random() * 10000);
  let location = "location_330_" + Math.floor(Math.random() * 10000);
  let name = "name_330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let phone = "phone_330_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["chainId"] = matchAnyChainsAdded();
  let pkMap = {"chainId": "chainId"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  chainId = captured["chainId"];
  createGarage(address, capacity, chainId, garageId, id, location, name, phone);
  verifyGaragesExists(address, capacity, chainId, garageId, id, location, name, phone);
  updateGarage(address, capacity, chainId, garageId, id, location, name, phone);
  // Skip delete for Garages to prevent foreign key errors (has active dependents)
});

// Monitor: Garages Verification
bthread("monitor:Garages", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGaragesAdded() });
    let address = (e.data.parameters && e.data.parameters["address"]) ? e.data.parameters["address"] : e.data["address"];
    let capacity = (e.data.parameters && e.data.parameters["capacity"]) ? e.data.parameters["capacity"] : e.data["capacity"];
    let chainId = (e.data.parameters && e.data.parameters["chainId"]) ? e.data.parameters["chainId"] : e.data["chainId"];
    let garageId = (e.data.parameters && e.data.parameters["garageId"]) ? e.data.parameters["garageId"] : e.data["garageId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let location = (e.data.parameters && e.data.parameters["location"]) ? e.data.parameters["location"] : e.data["location"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let phone = (e.data.parameters && e.data.parameters["phone"]) ? e.data.parameters["phone"] : e.data["phone"];
    // Monitor Garages: Verifying existence (Deletion skipped due to dependencies)
    verifyGaragesExists(address, capacity, chainId, garageId, id, location, name, phone);
  }
});

// Story: crud:Cars:linear:1
bthread("crud:Cars:linear:1", function () {
  let id = "id_360_" + Math.floor(Math.random() * 10000);
  let make = "make_360_" + Math.floor(Math.random() * 10000);
  let mileage = 36000000 + Math.floor(Math.random() * 100000);
  let model = "model_360_" + Math.floor(Math.random() * 10000);
  let ownerCustomerId; // Resolved Dependency
  let vin = "vin_360_" + Math.floor(Math.random() * 10000);
  let year = 36000000 + Math.floor(Math.random() * 100000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["ownerCustomerId"] = matchAnyCustomersAdded();
  let pkMap = {"ownerCustomerId": "customerId"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  ownerCustomerId = captured["ownerCustomerId"];
  createCar(id, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarsExists(id, make, mileage, model, ownerCustomerId, vin, year);
  updateCar(id, make, mileage, model, ownerCustomerId, vin, year);
  // Skip delete for Cars to prevent foreign key errors (has active dependents)
});

// Story: crud:Cars:linear:2
bthread("crud:Cars:linear:2", function () {
  let id = "id_370_" + Math.floor(Math.random() * 10000);
  let make = "make_370_" + Math.floor(Math.random() * 10000);
  let mileage = 37000000 + Math.floor(Math.random() * 100000);
  let model = "model_370_" + Math.floor(Math.random() * 10000);
  let ownerCustomerId; // Resolved Dependency
  let vin = "vin_370_" + Math.floor(Math.random() * 10000);
  let year = 37000000 + Math.floor(Math.random() * 100000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["ownerCustomerId"] = matchAnyCustomersAdded();
  let pkMap = {"ownerCustomerId": "customerId"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  ownerCustomerId = captured["ownerCustomerId"];
  createCar(id, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarsExists(id, make, mileage, model, ownerCustomerId, vin, year);
  updateCar(id, make, mileage, model, ownerCustomerId, vin, year);
  // Skip delete for Cars to prevent foreign key errors (has active dependents)
});

// Story: crud:Cars:linear:3
bthread("crud:Cars:linear:3", function () {
  let id = "id_380_" + Math.floor(Math.random() * 10000);
  let make = "make_380_" + Math.floor(Math.random() * 10000);
  let mileage = 38000000 + Math.floor(Math.random() * 100000);
  let model = "model_380_" + Math.floor(Math.random() * 10000);
  let ownerCustomerId; // Resolved Dependency
  let vin = "vin_380_" + Math.floor(Math.random() * 10000);
  let year = 38000000 + Math.floor(Math.random() * 100000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["ownerCustomerId"] = matchAnyCustomersAdded();
  let pkMap = {"ownerCustomerId": "customerId"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  ownerCustomerId = captured["ownerCustomerId"];
  createCar(id, make, mileage, model, ownerCustomerId, vin, year);
  verifyCarsExists(id, make, mileage, model, ownerCustomerId, vin, year);
  updateCar(id, make, mileage, model, ownerCustomerId, vin, year);
  // Skip delete for Cars to prevent foreign key errors (has active dependents)
});

// Monitor: Cars Verification
bthread("monitor:Cars", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCarsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let make = (e.data.parameters && e.data.parameters["make"]) ? e.data.parameters["make"] : e.data["make"];
    let mileage = (e.data.parameters && e.data.parameters["mileage"]) ? e.data.parameters["mileage"] : e.data["mileage"];
    let model = (e.data.parameters && e.data.parameters["model"]) ? e.data.parameters["model"] : e.data["model"];
    let ownerCustomerId = (e.data.parameters && e.data.parameters["ownerCustomerId"]) ? e.data.parameters["ownerCustomerId"] : e.data["ownerCustomerId"];
    let vin = (e.data.parameters && e.data.parameters["vin"]) ? e.data.parameters["vin"] : e.data["vin"];
    let year = (e.data.parameters && e.data.parameters["year"]) ? e.data.parameters["year"] : e.data["year"];
    // Monitor Cars: Verifying existence (Deletion skipped due to dependencies)
    verifyCarsExists(id, make, mileage, model, ownerCustomerId, vin, year);
  }
});

// Story: crud:PeriodicMaintenance:linear:1
bthread("crud:PeriodicMaintenance:linear:1", function () {
  let carVin; // Resolved Dependency
  let garageId; // Resolved Dependency
  let id = "id_410_" + Math.floor(Math.random() * 10000);
  let planType = "planType_410_" + Math.floor(Math.random() * 10000);
  let pmId = "pmId_410_" + Math.floor(Math.random() * 10000);
  let schedule = "schedule_410_" + Math.floor(Math.random() * 10000);
  let tasks = "tasks_410_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["carVin"] = matchAnyCarsAdded();
  deps["garageId"] = matchAnyGaragesAdded();
  let pkMap = {"carVin": "vin", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  carVin = captured["carVin"];
  garageId = captured["garageId"];
  createPMPlan(carVin, garageId, id, planType, pmId, schedule, tasks);
});

// Story: crud:PeriodicMaintenance:linear:2
bthread("crud:PeriodicMaintenance:linear:2", function () {
  let carVin; // Resolved Dependency
  let garageId; // Resolved Dependency
  let id = "id_420_" + Math.floor(Math.random() * 10000);
  let planType = "planType_420_" + Math.floor(Math.random() * 10000);
  let pmId = "pmId_420_" + Math.floor(Math.random() * 10000);
  let schedule = "schedule_420_" + Math.floor(Math.random() * 10000);
  let tasks = "tasks_420_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["carVin"] = matchAnyCarsAdded();
  deps["garageId"] = matchAnyGaragesAdded();
  let pkMap = {"carVin": "vin", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  carVin = captured["carVin"];
  garageId = captured["garageId"];
  createPMPlan(carVin, garageId, id, planType, pmId, schedule, tasks);
});

// Story: crud:PeriodicMaintenance:linear:3
bthread("crud:PeriodicMaintenance:linear:3", function () {
  let carVin; // Resolved Dependency
  let garageId; // Resolved Dependency
  let id = "id_430_" + Math.floor(Math.random() * 10000);
  let planType = "planType_430_" + Math.floor(Math.random() * 10000);
  let pmId = "pmId_430_" + Math.floor(Math.random() * 10000);
  let schedule = "schedule_430_" + Math.floor(Math.random() * 10000);
  let tasks = "tasks_430_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["carVin"] = matchAnyCarsAdded();
  deps["garageId"] = matchAnyGaragesAdded();
  let pkMap = {"carVin": "vin", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  carVin = captured["carVin"];
  garageId = captured["garageId"];
  createPMPlan(carVin, garageId, id, planType, pmId, schedule, tasks);
});

// Story: crud:RepairOrders:linear:1
bthread("crud:RepairOrders:linear:1", function () {
  let carVin; // Resolved Dependency
  let complaint = "complaint_460_" + Math.floor(Math.random() * 10000);
  let customerId; // Resolved Dependency
  let field1 = "field1_460_" + Math.floor(Math.random() * 10000);
  let field2 = 46000000 + Math.floor(Math.random() * 100000);
  let garageId; // Resolved Dependency
  let id = "id_460_" + Math.floor(Math.random() * 10000);
  let roId = "roId_460_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["carVin"] = matchAnyCarsAdded();
  deps["customerId"] = matchAnyCustomersAdded();
  deps["garageId"] = matchAnyGaragesAdded();
  let pkMap = {"carVin": "vin", "customerId": "customerId", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  carVin = captured["carVin"];
  customerId = captured["customerId"];
  garageId = captured["garageId"];
  createRepairOrder(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  verifyRepairOrdersExists(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  updateRepairOrder(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  deleteRepairOrder(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  tryToDeleteANonExistingRepairOrders(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  verifyRepairOrdersDoesNotExist(carVin, complaint, customerId, field1, field2, garageId, id, roId);
});

// Story: crud:RepairOrders:linear:2
bthread("crud:RepairOrders:linear:2", function () {
  let carVin; // Resolved Dependency
  let complaint = "complaint_470_" + Math.floor(Math.random() * 10000);
  let customerId; // Resolved Dependency
  let field1 = "field1_470_" + Math.floor(Math.random() * 10000);
  let field2 = 47000000 + Math.floor(Math.random() * 100000);
  let garageId; // Resolved Dependency
  let id = "id_470_" + Math.floor(Math.random() * 10000);
  let roId = "roId_470_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["carVin"] = matchAnyCarsAdded();
  deps["customerId"] = matchAnyCustomersAdded();
  deps["garageId"] = matchAnyGaragesAdded();
  let pkMap = {"carVin": "vin", "customerId": "customerId", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  carVin = captured["carVin"];
  customerId = captured["customerId"];
  garageId = captured["garageId"];
  createRepairOrder(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  verifyRepairOrdersExists(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  updateRepairOrder(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  deleteRepairOrder(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  tryToDeleteANonExistingRepairOrders(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  verifyRepairOrdersDoesNotExist(carVin, complaint, customerId, field1, field2, garageId, id, roId);
});

// Story: crud:RepairOrders:linear:3
bthread("crud:RepairOrders:linear:3", function () {
  let carVin; // Resolved Dependency
  let complaint = "complaint_480_" + Math.floor(Math.random() * 10000);
  let customerId; // Resolved Dependency
  let field1 = "field1_480_" + Math.floor(Math.random() * 10000);
  let field2 = 48000000 + Math.floor(Math.random() * 100000);
  let garageId; // Resolved Dependency
  let id = "id_480_" + Math.floor(Math.random() * 10000);
  let roId = "roId_480_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["carVin"] = matchAnyCarsAdded();
  deps["customerId"] = matchAnyCustomersAdded();
  deps["garageId"] = matchAnyGaragesAdded();
  let pkMap = {"carVin": "vin", "customerId": "customerId", "garageId": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  carVin = captured["carVin"];
  customerId = captured["customerId"];
  garageId = captured["garageId"];
  createRepairOrder(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  verifyRepairOrdersExists(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  updateRepairOrder(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  deleteRepairOrder(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  tryToDeleteANonExistingRepairOrders(carVin, complaint, customerId, field1, field2, garageId, id, roId);
  verifyRepairOrdersDoesNotExist(carVin, complaint, customerId, field1, field2, garageId, id, roId);
});

// Monitor: RepairOrders Verification
bthread("monitor:RepairOrders", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepairOrdersAdded() });
    let carVin = (e.data.parameters && e.data.parameters["carVin"]) ? e.data.parameters["carVin"] : e.data["carVin"];
    let complaint = (e.data.parameters && e.data.parameters["complaint"]) ? e.data.parameters["complaint"] : e.data["complaint"];
    let customerId = (e.data.parameters && e.data.parameters["customerId"]) ? e.data.parameters["customerId"] : e.data["customerId"];
    let field1 = (e.data.parameters && e.data.parameters["field1"]) ? e.data.parameters["field1"] : e.data["field1"];
    let field2 = (e.data.parameters && e.data.parameters["field2"]) ? e.data.parameters["field2"] : e.data["field2"];
    let garageId = (e.data.parameters && e.data.parameters["garageId"]) ? e.data.parameters["garageId"] : e.data["garageId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let roId = (e.data.parameters && e.data.parameters["roId"]) ? e.data.parameters["roId"] : e.data["roId"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRepairOrders(carVin, complaint, customerId, field1, field2, garageId, id, roId), function() {
      bp.log.info(`Monitor RepairOrders: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRepairOrdersExists(carVin, complaint, customerId, field1, field2, garageId, id, roId);
    });
  }
});
