// Auto-generated stories for garage
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    bp.log.info("DEBUG: [resolveDependencies] Caught event: " + e.name);
    if (e.data) bp.log.info("DEBUG: [resolveDependencies] Data: " + JSON.stringify(e.data));
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (val) {
            captured[k] = val;
            bp.log.info("DEBUG: [resolveDependencies] Resolved " + k + " -> " + val);
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// --- Monitors ---
// Monitor: Chains Verification (Existence)
bthread("monitor:Chains:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyChainsAdded() });
    let active = (e.data.parameters && e.data.parameters["active"]) ? e.data.parameters["active"] : e.data["active"];
    let chainId = (e.data.parameters && e.data.parameters["chainId"]) ? e.data.parameters["chainId"] : e.data["chainId"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let hqAddress = (e.data.parameters && e.data.parameters["hqAddress"]) ? e.data.parameters["hqAddress"] : e.data["hqAddress"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let supportEmail = (e.data.parameters && e.data.parameters["supportEmail"]) ? e.data.parameters["supportEmail"] : e.data["supportEmail"];
    // Block Deletion while Verifying Existence
    block(matchDeletedChains(active, chainId, description, hqAddress, name, supportEmail), function() {
        verifyChainsExists(active, chainId, description, hqAddress, name, supportEmail);
    });
  }
});

// Monitor: Chains Verification (Absence)
bthread("monitor:Chains:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedChains() });
    let active = (e.data.parameters && e.data.parameters["active"]) ? e.data.parameters["active"] : e.data["active"];
    let chainId = (e.data.parameters && e.data.parameters["chainId"]) ? e.data.parameters["chainId"] : e.data["chainId"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let hqAddress = (e.data.parameters && e.data.parameters["hqAddress"]) ? e.data.parameters["hqAddress"] : e.data["hqAddress"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let supportEmail = (e.data.parameters && e.data.parameters["supportEmail"]) ? e.data.parameters["supportEmail"] : e.data["supportEmail"];
    // Block Creation while Verifying Absence
    block(matchAnyChainsAdded(), function() {
        verifyChainsDoesNotExist(active, chainId, description, hqAddress, name, supportEmail);
    });
  }
});

// Monitor: Customers Verification (Existence)
bthread("monitor:Customers:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCustomersAdded() });
    let customerId = (e.data.parameters && e.data.parameters["customerId"]) ? e.data.parameters["customerId"] : e.data["customerId"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let email = (e.data.parameters && e.data.parameters["email"]) ? e.data.parameters["email"] : e.data["email"];
    let fullName = (e.data.parameters && e.data.parameters["fullName"]) ? e.data.parameters["fullName"] : e.data["fullName"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let phone = (e.data.parameters && e.data.parameters["phone"]) ? e.data.parameters["phone"] : e.data["phone"];
    let preferredGarageId = (e.data.parameters && e.data.parameters["preferredGarageId"]) ? e.data.parameters["preferredGarageId"] : e.data["preferredGarageId"];
    let type = (e.data.parameters && e.data.parameters["type"]) ? e.data.parameters["type"] : e.data["type"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCustomers(customerId, description, email, fullName, name, phone, preferredGarageId, type), function() {
        verifyCustomersExists(customerId, description, email, fullName, name, phone, preferredGarageId, type);
    });
  }
});

// Monitor: Customers Verification (Absence)
bthread("monitor:Customers:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedCustomers() });
    let customerId = (e.data.parameters && e.data.parameters["customerId"]) ? e.data.parameters["customerId"] : e.data["customerId"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let email = (e.data.parameters && e.data.parameters["email"]) ? e.data.parameters["email"] : e.data["email"];
    let fullName = (e.data.parameters && e.data.parameters["fullName"]) ? e.data.parameters["fullName"] : e.data["fullName"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let phone = (e.data.parameters && e.data.parameters["phone"]) ? e.data.parameters["phone"] : e.data["phone"];
    let preferredGarageId = (e.data.parameters && e.data.parameters["preferredGarageId"]) ? e.data.parameters["preferredGarageId"] : e.data["preferredGarageId"];
    let type = (e.data.parameters && e.data.parameters["type"]) ? e.data.parameters["type"] : e.data["type"];
    // Block Creation while Verifying Absence
    block(matchAnyCustomersAdded(), function() {
        verifyCustomersDoesNotExist(customerId, description, email, fullName, name, phone, preferredGarageId, type);
    });
  }
});

// Monitor: Garages Verification (Existence)
bthread("monitor:Garages:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGaragesAdded() });
    let active = (e.data.parameters && e.data.parameters["active"]) ? e.data.parameters["active"] : e.data["active"];
    let address = (e.data.parameters && e.data.parameters["address"]) ? e.data.parameters["address"] : e.data["address"];
    let bayCount = (e.data.parameters && e.data.parameters["bayCount"]) ? e.data.parameters["bayCount"] : e.data["bayCount"];
    let capacity = (e.data.parameters && e.data.parameters["capacity"]) ? e.data.parameters["capacity"] : e.data["capacity"];
    let chainId = (e.data.parameters && e.data.parameters["chainId"]) ? e.data.parameters["chainId"] : e.data["chainId"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let garageId = (e.data.parameters && e.data.parameters["garageId"]) ? e.data.parameters["garageId"] : e.data["garageId"];
    let location = (e.data.parameters && e.data.parameters["location"]) ? e.data.parameters["location"] : e.data["location"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let phone = (e.data.parameters && e.data.parameters["phone"]) ? e.data.parameters["phone"] : e.data["phone"];
    let servicesOffered = (e.data.parameters && e.data.parameters["servicesOffered"]) ? e.data.parameters["servicesOffered"] : e.data["servicesOffered"];
    // Block Deletion while Verifying Existence
    block(matchDeletedGarages(active, address, bayCount, capacity, chainId, description, garageId, location, name, phone, servicesOffered), function() {
        verifyGaragesExists(active, address, bayCount, capacity, chainId, description, garageId, location, name, phone, servicesOffered);
    });
  }
});

// Monitor: Garages Verification (Absence)
bthread("monitor:Garages:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedGarages() });
    let active = (e.data.parameters && e.data.parameters["active"]) ? e.data.parameters["active"] : e.data["active"];
    let address = (e.data.parameters && e.data.parameters["address"]) ? e.data.parameters["address"] : e.data["address"];
    let bayCount = (e.data.parameters && e.data.parameters["bayCount"]) ? e.data.parameters["bayCount"] : e.data["bayCount"];
    let capacity = (e.data.parameters && e.data.parameters["capacity"]) ? e.data.parameters["capacity"] : e.data["capacity"];
    let chainId = (e.data.parameters && e.data.parameters["chainId"]) ? e.data.parameters["chainId"] : e.data["chainId"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let garageId = (e.data.parameters && e.data.parameters["garageId"]) ? e.data.parameters["garageId"] : e.data["garageId"];
    let location = (e.data.parameters && e.data.parameters["location"]) ? e.data.parameters["location"] : e.data["location"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let phone = (e.data.parameters && e.data.parameters["phone"]) ? e.data.parameters["phone"] : e.data["phone"];
    let servicesOffered = (e.data.parameters && e.data.parameters["servicesOffered"]) ? e.data.parameters["servicesOffered"] : e.data["servicesOffered"];
    // Block Creation while Verifying Absence
    block(matchAnyGaragesAdded(), function() {
        verifyGaragesDoesNotExist(active, address, bayCount, capacity, chainId, description, garageId, location, name, phone, servicesOffered);
    });
  }
});

// Monitor: Cars Verification (Existence)
bthread("monitor:Cars:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCarsAdded() });
    let color = (e.data.parameters && e.data.parameters["color"]) ? e.data.parameters["color"] : e.data["color"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let homeGarageId = (e.data.parameters && e.data.parameters["homeGarageId"]) ? e.data.parameters["homeGarageId"] : e.data["homeGarageId"];
    let licensePlate = (e.data.parameters && e.data.parameters["licensePlate"]) ? e.data.parameters["licensePlate"] : e.data["licensePlate"];
    let make = (e.data.parameters && e.data.parameters["make"]) ? e.data.parameters["make"] : e.data["make"];
    let mileage = (e.data.parameters && e.data.parameters["mileage"]) ? e.data.parameters["mileage"] : e.data["mileage"];
    let model = (e.data.parameters && e.data.parameters["model"]) ? e.data.parameters["model"] : e.data["model"];
    let ownerCustomerId = (e.data.parameters && e.data.parameters["ownerCustomerId"]) ? e.data.parameters["ownerCustomerId"] : e.data["ownerCustomerId"];
    let vin = (e.data.parameters && e.data.parameters["vin"]) ? e.data.parameters["vin"] : e.data["vin"];
    let year = (e.data.parameters && e.data.parameters["year"]) ? e.data.parameters["year"] : e.data["year"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCars(color, description, homeGarageId, licensePlate, make, mileage, model, ownerCustomerId, vin, year), function() {
        verifyCarsExists(color, description, homeGarageId, licensePlate, make, mileage, model, ownerCustomerId, vin, year);
    });
  }
});

// Monitor: Cars Verification (Absence)
bthread("monitor:Cars:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedCars() });
    let color = (e.data.parameters && e.data.parameters["color"]) ? e.data.parameters["color"] : e.data["color"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let homeGarageId = (e.data.parameters && e.data.parameters["homeGarageId"]) ? e.data.parameters["homeGarageId"] : e.data["homeGarageId"];
    let licensePlate = (e.data.parameters && e.data.parameters["licensePlate"]) ? e.data.parameters["licensePlate"] : e.data["licensePlate"];
    let make = (e.data.parameters && e.data.parameters["make"]) ? e.data.parameters["make"] : e.data["make"];
    let mileage = (e.data.parameters && e.data.parameters["mileage"]) ? e.data.parameters["mileage"] : e.data["mileage"];
    let model = (e.data.parameters && e.data.parameters["model"]) ? e.data.parameters["model"] : e.data["model"];
    let ownerCustomerId = (e.data.parameters && e.data.parameters["ownerCustomerId"]) ? e.data.parameters["ownerCustomerId"] : e.data["ownerCustomerId"];
    let vin = (e.data.parameters && e.data.parameters["vin"]) ? e.data.parameters["vin"] : e.data["vin"];
    let year = (e.data.parameters && e.data.parameters["year"]) ? e.data.parameters["year"] : e.data["year"];
    // Block Creation while Verifying Absence
    block(matchAnyCarsAdded(), function() {
        verifyCarsDoesNotExist(color, description, homeGarageId, licensePlate, make, mileage, model, ownerCustomerId, vin, year);
    });
  }
});

// Monitor: PeriodicMaintenance Verification (Existence)
bthread("monitor:PeriodicMaintenance:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPeriodicMaintenanceAdded() });
    let carVin = (e.data.parameters && e.data.parameters["carVin"]) ? e.data.parameters["carVin"] : e.data["carVin"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let garageId = (e.data.parameters && e.data.parameters["garageId"]) ? e.data.parameters["garageId"] : e.data["garageId"];
    let intervalKm = (e.data.parameters && e.data.parameters["intervalKm"]) ? e.data.parameters["intervalKm"] : e.data["intervalKm"];
    let intervalMonths = (e.data.parameters && e.data.parameters["intervalMonths"]) ? e.data.parameters["intervalMonths"] : e.data["intervalMonths"];
    let planType = (e.data.parameters && e.data.parameters["planType"]) ? e.data.parameters["planType"] : e.data["planType"];
    let pmId = (e.data.parameters && e.data.parameters["pmId"]) ? e.data.parameters["pmId"] : e.data["pmId"];
    let schedule = (e.data.parameters && e.data.parameters["schedule"]) ? e.data.parameters["schedule"] : e.data["schedule"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    let tasks = (e.data.parameters && e.data.parameters["tasks"]) ? e.data.parameters["tasks"] : e.data["tasks"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPeriodicMaintenance(carVin, description, garageId, intervalKm, intervalMonths, planType, pmId, schedule, status, tasks), function() {
        verifyPeriodicMaintenanceExists(carVin, description, garageId, intervalKm, intervalMonths, planType, pmId, schedule, status, tasks);
    });
  }
});

// Monitor: PeriodicMaintenance Verification (Absence)
bthread("monitor:PeriodicMaintenance:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedPeriodicMaintenance() });
    let carVin = (e.data.parameters && e.data.parameters["carVin"]) ? e.data.parameters["carVin"] : e.data["carVin"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let garageId = (e.data.parameters && e.data.parameters["garageId"]) ? e.data.parameters["garageId"] : e.data["garageId"];
    let intervalKm = (e.data.parameters && e.data.parameters["intervalKm"]) ? e.data.parameters["intervalKm"] : e.data["intervalKm"];
    let intervalMonths = (e.data.parameters && e.data.parameters["intervalMonths"]) ? e.data.parameters["intervalMonths"] : e.data["intervalMonths"];
    let planType = (e.data.parameters && e.data.parameters["planType"]) ? e.data.parameters["planType"] : e.data["planType"];
    let pmId = (e.data.parameters && e.data.parameters["pmId"]) ? e.data.parameters["pmId"] : e.data["pmId"];
    let schedule = (e.data.parameters && e.data.parameters["schedule"]) ? e.data.parameters["schedule"] : e.data["schedule"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    let tasks = (e.data.parameters && e.data.parameters["tasks"]) ? e.data.parameters["tasks"] : e.data["tasks"];
    // Block Creation while Verifying Absence
    block(matchAnyPeriodicMaintenanceAdded(), function() {
        verifyPeriodicMaintenanceDoesNotExist(carVin, description, garageId, intervalKm, intervalMonths, planType, pmId, schedule, status, tasks);
    });
  }
});

// Monitor: RepairOrders Verification (Existence)
bthread("monitor:RepairOrders:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRepairOrdersAdded() });
    let carVin = (e.data.parameters && e.data.parameters["carVin"]) ? e.data.parameters["carVin"] : e.data["carVin"];
    let complaint = (e.data.parameters && e.data.parameters["complaint"]) ? e.data.parameters["complaint"] : e.data["complaint"];
    let customerId = (e.data.parameters && e.data.parameters["customerId"]) ? e.data.parameters["customerId"] : e.data["customerId"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let garageId = (e.data.parameters && e.data.parameters["garageId"]) ? e.data.parameters["garageId"] : e.data["garageId"];
    let roId = (e.data.parameters && e.data.parameters["roId"]) ? e.data.parameters["roId"] : e.data["roId"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRepairOrders(carVin, complaint, customerId, description, garageId, roId, status), function() {
        verifyRepairOrdersExists(carVin, complaint, customerId, description, garageId, roId, status);
    });
  }
});

// Monitor: RepairOrders Verification (Absence)
bthread("monitor:RepairOrders:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedRepairOrders() });
    let carVin = (e.data.parameters && e.data.parameters["carVin"]) ? e.data.parameters["carVin"] : e.data["carVin"];
    let complaint = (e.data.parameters && e.data.parameters["complaint"]) ? e.data.parameters["complaint"] : e.data["complaint"];
    let customerId = (e.data.parameters && e.data.parameters["customerId"]) ? e.data.parameters["customerId"] : e.data["customerId"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let garageId = (e.data.parameters && e.data.parameters["garageId"]) ? e.data.parameters["garageId"] : e.data["garageId"];
    let roId = (e.data.parameters && e.data.parameters["roId"]) ? e.data.parameters["roId"] : e.data["roId"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    // Block Creation while Verifying Absence
    block(matchAnyRepairOrdersAdded(), function() {
        verifyRepairOrdersDoesNotExist(carVin, complaint, customerId, description, garageId, roId, status);
    });
  }
});

// Story: crud:Chains:linear:1
bthread("crud:Chains:linear:1", function () {
  // -> Creating Chains
  let active_Chains_100 = true;
  let chainId_Chains_100 = "chainId_Chains_100_" + Math.floor(Math.random()*1000);
  let description_Chains_100 = "description_Chains_100_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_100 = {};
  let name_Chains_100 = "name_Chains_100_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_100 = "supportEmail_Chains_100_" + Math.floor(Math.random()*1000);
  let res_Chains_100 = createChain(active_Chains_100, chainId_Chains_100, description_Chains_100, hqAddress_Chains_100, name_Chains_100, supportEmail_Chains_100);
  if (res_Chains_100 && res_Chains_100.status >= 200 && res_Chains_100.status < 300) {
      verifyChainsExists(chainId_Chains_100);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Updating Chains
  let active_Chains_upd_100 = true;
  let chainId_Chains_upd_100 = chainId_Chains_100;
  let description_Chains_upd_100 = "description_Chains_upd_100_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_upd_100 = {};
  let name_Chains_upd_100 = "name_Chains_upd_100_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_upd_100 = "supportEmail_Chains_upd_100_" + Math.floor(Math.random()*1000);
  updateChain(active_Chains_upd_100, chainId_Chains_upd_100, description_Chains_upd_100, hqAddress_Chains_upd_100, name_Chains_upd_100, supportEmail_Chains_upd_100);

  // Skip delete for Chains to prevent foreign key errors (has active dependents)
});

// Story: crud:Customers:linear:1
bthread("crud:Customers:linear:1", function () {
  // -> Creating Customers
  let customerId_Customers_110 = "customerId_Customers_110_" + Math.floor(Math.random()*1000);
  let description_Customers_110 = "description_Customers_110_" + Math.floor(Math.random()*1000);
  let email_Customers_110 = "email_Customers_110_" + Math.floor(Math.random()*1000);
  let fullName_Customers_110 = "fullName_Customers_110_" + Math.floor(Math.random()*1000);
  let name_Customers_110 = "name_Customers_110_" + Math.floor(Math.random()*1000);
  let phone_Customers_110 = "phone_Customers_110_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_110 = "preferredGarageId_Customers_110_" + Math.floor(Math.random()*1000);
  let type_Customers_110 = "type_Customers_110_" + Math.floor(Math.random()*1000);
  let res_Customers_110 = createCustomer(customerId_Customers_110, description_Customers_110, email_Customers_110, fullName_Customers_110, name_Customers_110, phone_Customers_110, preferredGarageId_Customers_110, type_Customers_110);
  if (res_Customers_110 && res_Customers_110.status >= 200 && res_Customers_110.status < 300) {
      verifyCustomersExists(customerId_Customers_110);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Updating Customers
  let customerId_Customers_upd_110 = customerId_Customers_110;
  let description_Customers_upd_110 = "description_Customers_upd_110_" + Math.floor(Math.random()*1000);
  let email_Customers_upd_110 = "email_Customers_upd_110_" + Math.floor(Math.random()*1000);
  let fullName_Customers_upd_110 = "fullName_Customers_upd_110_" + Math.floor(Math.random()*1000);
  let name_Customers_upd_110 = "name_Customers_upd_110_" + Math.floor(Math.random()*1000);
  let phone_Customers_upd_110 = "phone_Customers_upd_110_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_upd_110 = "preferredGarageId_Customers_upd_110_" + Math.floor(Math.random()*1000);
  let type_Customers_upd_110 = "type_Customers_upd_110_" + Math.floor(Math.random()*1000);
  updateCustomer(customerId_Customers_upd_110, description_Customers_upd_110, email_Customers_upd_110, fullName_Customers_upd_110, name_Customers_upd_110, phone_Customers_upd_110, preferredGarageId_Customers_upd_110, type_Customers_upd_110);

  // Skip delete for Customers to prevent foreign key errors (has active dependents)
});

// Story: crud:Garages:linear:1
bthread("crud:Garages:linear:1", function () {
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Chains"] = matchAnyChainsAdded();
  let pkMap = {"Chains": "chainId"};
  let captured = resolveDependencies(deps, pkMap);
  let ChainsId = captured["Chains"];
  // -> Creating Garages
  let active_Garages_120 = true;
  let address_Garages_120 = {};
  let bayCount_Garages_120 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_120 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_120 = ChainsId;
  let description_Garages_120 = "description_Garages_120_" + Math.floor(Math.random()*1000);
  let garageId_Garages_120 = "garageId_Garages_120_" + Math.floor(Math.random()*1000);
  let location_Garages_120 = {};
  let name_Garages_120 = "name_Garages_120_" + Math.floor(Math.random()*1000);
  let phone_Garages_120 = "phone_Garages_120_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_120 = [];
  let res_Garages_120 = createGarage(active_Garages_120, address_Garages_120, bayCount_Garages_120, capacity_Garages_120, chainId_Garages_120, description_Garages_120, garageId_Garages_120, location_Garages_120, name_Garages_120, phone_Garages_120, servicesOffered_Garages_120);
  if (res_Garages_120 && res_Garages_120.status >= 200 && res_Garages_120.status < 300) {
      verifyGaragesExists(garageId_Garages_120);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Updating Garages
  let active_Garages_upd_120 = true;
  let address_Garages_upd_120 = {};
  let bayCount_Garages_upd_120 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_upd_120 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_upd_120 = "chainId_Garages_upd_120_" + Math.floor(Math.random()*1000);
  let description_Garages_upd_120 = "description_Garages_upd_120_" + Math.floor(Math.random()*1000);
  let garageId_Garages_upd_120 = garageId_Garages_120;
  let location_Garages_upd_120 = {};
  let name_Garages_upd_120 = "name_Garages_upd_120_" + Math.floor(Math.random()*1000);
  let phone_Garages_upd_120 = "phone_Garages_upd_120_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_upd_120 = [];
  updateGarage(active_Garages_upd_120, address_Garages_upd_120, bayCount_Garages_upd_120, capacity_Garages_upd_120, chainId_Garages_upd_120, description_Garages_upd_120, garageId_Garages_upd_120, location_Garages_upd_120, name_Garages_upd_120, phone_Garages_upd_120, servicesOffered_Garages_upd_120);

  // Skip delete for Garages to prevent foreign key errors (has active dependents)
});

// Story: crud:Cars:linear:1
bthread("crud:Cars:linear:1", function () {
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Customers"] = matchAnyCustomersAdded();
  deps["Garages"] = matchAnyGaragesAdded();
  let pkMap = {"Customers": "customerId", "Garages": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  let CustomersId = captured["Customers"];
  let GaragesId = captured["Garages"];
  // -> Creating Cars
  let color_Cars_130 = "color_Cars_130_" + Math.floor(Math.random()*1000);
  let description_Cars_130 = "description_Cars_130_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_130 = GaragesId;
  let licensePlate_Cars_130 = "licensePlate_Cars_130_" + Math.floor(Math.random()*1000);
  let make_Cars_130 = "make_Cars_130_" + Math.floor(Math.random()*1000);
  let mileage_Cars_130 = Math.floor(Math.random() * 1000000);
  let model_Cars_130 = "model_Cars_130_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_130 = CustomersId;
  let vin_Cars_130 = "vin_Cars_130_" + Math.floor(Math.random()*1000);
  let year_Cars_130 = Math.floor(Math.random() * 1000000);
  let res_Cars_130 = createCar(color_Cars_130, description_Cars_130, homeGarageId_Cars_130, licensePlate_Cars_130, make_Cars_130, mileage_Cars_130, model_Cars_130, ownerCustomerId_Cars_130, vin_Cars_130, year_Cars_130);
  if (res_Cars_130 && res_Cars_130.status >= 200 && res_Cars_130.status < 300) {
      verifyCarsExists(vin_Cars_130);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Updating Cars
  let color_Cars_upd_130 = "color_Cars_upd_130_" + Math.floor(Math.random()*1000);
  let description_Cars_upd_130 = "description_Cars_upd_130_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_upd_130 = "homeGarageId_Cars_upd_130_" + Math.floor(Math.random()*1000);
  let licensePlate_Cars_upd_130 = "licensePlate_Cars_upd_130_" + Math.floor(Math.random()*1000);
  let make_Cars_upd_130 = "make_Cars_upd_130_" + Math.floor(Math.random()*1000);
  let mileage_Cars_upd_130 = Math.floor(Math.random() * 1000000);
  let model_Cars_upd_130 = "model_Cars_upd_130_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_upd_130 = "ownerCustomerId_Cars_upd_130_" + Math.floor(Math.random()*1000);
  let vin_Cars_upd_130 = vin_Cars_130;
  let year_Cars_upd_130 = Math.floor(Math.random() * 1000000);
  updateCar(color_Cars_upd_130, description_Cars_upd_130, homeGarageId_Cars_upd_130, licensePlate_Cars_upd_130, make_Cars_upd_130, mileage_Cars_upd_130, model_Cars_upd_130, ownerCustomerId_Cars_upd_130, vin_Cars_upd_130, year_Cars_upd_130);

  // Skip delete for Cars to prevent foreign key errors (has active dependents)
});

// Story: crud:PeriodicMaintenance:linear:1
bthread("crud:PeriodicMaintenance:linear:1", function () {
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Cars"] = matchAnyCarsAdded();
  deps["Garages"] = matchAnyGaragesAdded();
  let pkMap = {"Cars": "vin", "Garages": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  let CarsId = captured["Cars"];
  let GaragesId = captured["Garages"];
  // -> Creating PeriodicMaintenance
  let carVin_PeriodicMaintenance_140 = "carVin_PeriodicMaintenance_140_" + Math.floor(Math.random()*1000);
  let description_PeriodicMaintenance_140 = "description_PeriodicMaintenance_140_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_140 = GaragesId;
  let intervalKm_PeriodicMaintenance_140 = Math.floor(Math.random() * 1000000);
  let intervalMonths_PeriodicMaintenance_140 = Math.floor(Math.random() * 1000000);
  let planType_PeriodicMaintenance_140 = "planType_PeriodicMaintenance_140_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_140 = "pmId_PeriodicMaintenance_140_" + Math.floor(Math.random()*1000);
  let schedule_PeriodicMaintenance_140 = {};
  let status_PeriodicMaintenance_140 = "open";
  let tasks_PeriodicMaintenance_140 = [];
  let res_PeriodicMaintenance_140 = createPMPlan(carVin_PeriodicMaintenance_140, description_PeriodicMaintenance_140, garageId_PeriodicMaintenance_140, intervalKm_PeriodicMaintenance_140, intervalMonths_PeriodicMaintenance_140, planType_PeriodicMaintenance_140, pmId_PeriodicMaintenance_140, schedule_PeriodicMaintenance_140, status_PeriodicMaintenance_140, tasks_PeriodicMaintenance_140);
  if (res_PeriodicMaintenance_140 && res_PeriodicMaintenance_140.status >= 200 && res_PeriodicMaintenance_140.status < 300) {
      verifyPeriodicMaintenanceExists(pmId_PeriodicMaintenance_140);
  } else {
      bp.log.error("Failed to create PeriodicMaintenance, skipping verification.");
  }

  // -> Updating PeriodicMaintenance
  let carVin_PeriodicMaintenance_upd_140 = "carVin_PeriodicMaintenance_upd_140_" + Math.floor(Math.random()*1000);
  let description_PeriodicMaintenance_upd_140 = "description_PeriodicMaintenance_upd_140_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_upd_140 = "garageId_PeriodicMaintenance_upd_140_" + Math.floor(Math.random()*1000);
  let intervalKm_PeriodicMaintenance_upd_140 = Math.floor(Math.random() * 1000000);
  let intervalMonths_PeriodicMaintenance_upd_140 = Math.floor(Math.random() * 1000000);
  let planType_PeriodicMaintenance_upd_140 = "planType_PeriodicMaintenance_upd_140_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_upd_140 = pmId_PeriodicMaintenance_140;
  let schedule_PeriodicMaintenance_upd_140 = {};
  let status_PeriodicMaintenance_upd_140 = "open";
  let tasks_PeriodicMaintenance_upd_140 = [];
  updatePMPlan(carVin_PeriodicMaintenance_upd_140, description_PeriodicMaintenance_upd_140, garageId_PeriodicMaintenance_upd_140, intervalKm_PeriodicMaintenance_upd_140, intervalMonths_PeriodicMaintenance_upd_140, planType_PeriodicMaintenance_upd_140, pmId_PeriodicMaintenance_upd_140, schedule_PeriodicMaintenance_upd_140, status_PeriodicMaintenance_upd_140, tasks_PeriodicMaintenance_upd_140);

  // -> Deleting PeriodicMaintenance
  deletePMPlan(pmId_PeriodicMaintenance_140);
  verifyPeriodicMaintenanceDoesNotExist(carVin_PeriodicMaintenance_140, description_PeriodicMaintenance_140, garageId_PeriodicMaintenance_140, intervalKm_PeriodicMaintenance_140, intervalMonths_PeriodicMaintenance_140, planType_PeriodicMaintenance_140, pmId_PeriodicMaintenance_140, schedule_PeriodicMaintenance_140, status_PeriodicMaintenance_140, tasks_PeriodicMaintenance_140);

});

// Story: crud:RepairOrders:linear:1
bthread("crud:RepairOrders:linear:1", function () {
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Cars"] = matchAnyCarsAdded();
  deps["Customers"] = matchAnyCustomersAdded();
  deps["Garages"] = matchAnyGaragesAdded();
  let pkMap = {"Cars": "vin", "Customers": "customerId", "Garages": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  let CarsId = captured["Cars"];
  let CustomersId = captured["Customers"];
  let GaragesId = captured["Garages"];
  // -> Creating RepairOrders
  let carVin_RepairOrders_150 = "carVin_RepairOrders_150_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_150 = "complaint_RepairOrders_150_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_150 = CustomersId;
  let description_RepairOrders_150 = "description_RepairOrders_150_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_150 = GaragesId;
  let roId_RepairOrders_150 = "roId_RepairOrders_150_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_150 = "open";
  let res_RepairOrders_150 = createRepairOrder(carVin_RepairOrders_150, complaint_RepairOrders_150, customerId_RepairOrders_150, description_RepairOrders_150, garageId_RepairOrders_150, roId_RepairOrders_150, status_RepairOrders_150);
  if (res_RepairOrders_150 && res_RepairOrders_150.status >= 200 && res_RepairOrders_150.status < 300) {
      verifyRepairOrdersExists(roId_RepairOrders_150);
  } else {
      bp.log.error("Failed to create RepairOrders, skipping verification.");
  }

  // -> Updating RepairOrders
  let carVin_RepairOrders_upd_150 = "carVin_RepairOrders_upd_150_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_upd_150 = "complaint_RepairOrders_upd_150_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_upd_150 = "customerId_RepairOrders_upd_150_" + Math.floor(Math.random()*1000);
  let description_RepairOrders_upd_150 = "description_RepairOrders_upd_150_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_upd_150 = "garageId_RepairOrders_upd_150_" + Math.floor(Math.random()*1000);
  let roId_RepairOrders_upd_150 = roId_RepairOrders_150;
  let status_RepairOrders_upd_150 = "open";
  updateRepairOrder(carVin_RepairOrders_upd_150, complaint_RepairOrders_upd_150, customerId_RepairOrders_upd_150, description_RepairOrders_upd_150, garageId_RepairOrders_upd_150, roId_RepairOrders_upd_150, status_RepairOrders_upd_150);

  // -> Deleting RepairOrders
  deleteRepairOrder(roId_RepairOrders_150);
  verifyRepairOrdersDoesNotExist(carVin_RepairOrders_150, complaint_RepairOrders_150, customerId_RepairOrders_150, description_RepairOrders_150, garageId_RepairOrders_150, roId_RepairOrders_150, status_RepairOrders_150);

});

// Story: crud:Chains:linear:2
bthread("crud:Chains:linear:2", function () {
  // -> Creating Chains
  let active_Chains_160 = true;
  let chainId_Chains_160 = "chainId_Chains_160_" + Math.floor(Math.random()*1000);
  let description_Chains_160 = "description_Chains_160_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_160 = {};
  let name_Chains_160 = "name_Chains_160_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_160 = "supportEmail_Chains_160_" + Math.floor(Math.random()*1000);
  let res_Chains_160 = createChain(active_Chains_160, chainId_Chains_160, description_Chains_160, hqAddress_Chains_160, name_Chains_160, supportEmail_Chains_160);
  if (res_Chains_160 && res_Chains_160.status >= 200 && res_Chains_160.status < 300) {
      verifyChainsExists(chainId_Chains_160);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Updating Chains
  let active_Chains_upd_160 = true;
  let chainId_Chains_upd_160 = chainId_Chains_160;
  let description_Chains_upd_160 = "description_Chains_upd_160_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_upd_160 = {};
  let name_Chains_upd_160 = "name_Chains_upd_160_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_upd_160 = "supportEmail_Chains_upd_160_" + Math.floor(Math.random()*1000);
  updateChain(active_Chains_upd_160, chainId_Chains_upd_160, description_Chains_upd_160, hqAddress_Chains_upd_160, name_Chains_upd_160, supportEmail_Chains_upd_160);

  // Skip delete for Chains to prevent foreign key errors (has active dependents)
});

// Story: crud:Customers:linear:2
bthread("crud:Customers:linear:2", function () {
  // -> Creating Customers
  let customerId_Customers_170 = "customerId_Customers_170_" + Math.floor(Math.random()*1000);
  let description_Customers_170 = "description_Customers_170_" + Math.floor(Math.random()*1000);
  let email_Customers_170 = "email_Customers_170_" + Math.floor(Math.random()*1000);
  let fullName_Customers_170 = "fullName_Customers_170_" + Math.floor(Math.random()*1000);
  let name_Customers_170 = "name_Customers_170_" + Math.floor(Math.random()*1000);
  let phone_Customers_170 = "phone_Customers_170_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_170 = "preferredGarageId_Customers_170_" + Math.floor(Math.random()*1000);
  let type_Customers_170 = "type_Customers_170_" + Math.floor(Math.random()*1000);
  let res_Customers_170 = createCustomer(customerId_Customers_170, description_Customers_170, email_Customers_170, fullName_Customers_170, name_Customers_170, phone_Customers_170, preferredGarageId_Customers_170, type_Customers_170);
  if (res_Customers_170 && res_Customers_170.status >= 200 && res_Customers_170.status < 300) {
      verifyCustomersExists(customerId_Customers_170);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Updating Customers
  let customerId_Customers_upd_170 = customerId_Customers_170;
  let description_Customers_upd_170 = "description_Customers_upd_170_" + Math.floor(Math.random()*1000);
  let email_Customers_upd_170 = "email_Customers_upd_170_" + Math.floor(Math.random()*1000);
  let fullName_Customers_upd_170 = "fullName_Customers_upd_170_" + Math.floor(Math.random()*1000);
  let name_Customers_upd_170 = "name_Customers_upd_170_" + Math.floor(Math.random()*1000);
  let phone_Customers_upd_170 = "phone_Customers_upd_170_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_upd_170 = "preferredGarageId_Customers_upd_170_" + Math.floor(Math.random()*1000);
  let type_Customers_upd_170 = "type_Customers_upd_170_" + Math.floor(Math.random()*1000);
  updateCustomer(customerId_Customers_upd_170, description_Customers_upd_170, email_Customers_upd_170, fullName_Customers_upd_170, name_Customers_upd_170, phone_Customers_upd_170, preferredGarageId_Customers_upd_170, type_Customers_upd_170);

  // Skip delete for Customers to prevent foreign key errors (has active dependents)
});

// Story: crud:Garages:linear:2
bthread("crud:Garages:linear:2", function () {
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Chains"] = matchAnyChainsAdded();
  let pkMap = {"Chains": "chainId"};
  let captured = resolveDependencies(deps, pkMap);
  let ChainsId = captured["Chains"];
  // -> Creating Garages
  let active_Garages_180 = true;
  let address_Garages_180 = {};
  let bayCount_Garages_180 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_180 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_180 = ChainsId;
  let description_Garages_180 = "description_Garages_180_" + Math.floor(Math.random()*1000);
  let garageId_Garages_180 = "garageId_Garages_180_" + Math.floor(Math.random()*1000);
  let location_Garages_180 = {};
  let name_Garages_180 = "name_Garages_180_" + Math.floor(Math.random()*1000);
  let phone_Garages_180 = "phone_Garages_180_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_180 = [];
  let res_Garages_180 = createGarage(active_Garages_180, address_Garages_180, bayCount_Garages_180, capacity_Garages_180, chainId_Garages_180, description_Garages_180, garageId_Garages_180, location_Garages_180, name_Garages_180, phone_Garages_180, servicesOffered_Garages_180);
  if (res_Garages_180 && res_Garages_180.status >= 200 && res_Garages_180.status < 300) {
      verifyGaragesExists(garageId_Garages_180);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Updating Garages
  let active_Garages_upd_180 = true;
  let address_Garages_upd_180 = {};
  let bayCount_Garages_upd_180 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_upd_180 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_upd_180 = "chainId_Garages_upd_180_" + Math.floor(Math.random()*1000);
  let description_Garages_upd_180 = "description_Garages_upd_180_" + Math.floor(Math.random()*1000);
  let garageId_Garages_upd_180 = garageId_Garages_180;
  let location_Garages_upd_180 = {};
  let name_Garages_upd_180 = "name_Garages_upd_180_" + Math.floor(Math.random()*1000);
  let phone_Garages_upd_180 = "phone_Garages_upd_180_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_upd_180 = [];
  updateGarage(active_Garages_upd_180, address_Garages_upd_180, bayCount_Garages_upd_180, capacity_Garages_upd_180, chainId_Garages_upd_180, description_Garages_upd_180, garageId_Garages_upd_180, location_Garages_upd_180, name_Garages_upd_180, phone_Garages_upd_180, servicesOffered_Garages_upd_180);

  // Skip delete for Garages to prevent foreign key errors (has active dependents)
});

// Story: crud:Cars:linear:2
bthread("crud:Cars:linear:2", function () {
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Customers"] = matchAnyCustomersAdded();
  deps["Garages"] = matchAnyGaragesAdded();
  let pkMap = {"Customers": "customerId", "Garages": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  let CustomersId = captured["Customers"];
  let GaragesId = captured["Garages"];
  // -> Creating Cars
  let color_Cars_190 = "color_Cars_190_" + Math.floor(Math.random()*1000);
  let description_Cars_190 = "description_Cars_190_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_190 = GaragesId;
  let licensePlate_Cars_190 = "licensePlate_Cars_190_" + Math.floor(Math.random()*1000);
  let make_Cars_190 = "make_Cars_190_" + Math.floor(Math.random()*1000);
  let mileage_Cars_190 = Math.floor(Math.random() * 1000000);
  let model_Cars_190 = "model_Cars_190_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_190 = CustomersId;
  let vin_Cars_190 = "vin_Cars_190_" + Math.floor(Math.random()*1000);
  let year_Cars_190 = Math.floor(Math.random() * 1000000);
  let res_Cars_190 = createCar(color_Cars_190, description_Cars_190, homeGarageId_Cars_190, licensePlate_Cars_190, make_Cars_190, mileage_Cars_190, model_Cars_190, ownerCustomerId_Cars_190, vin_Cars_190, year_Cars_190);
  if (res_Cars_190 && res_Cars_190.status >= 200 && res_Cars_190.status < 300) {
      verifyCarsExists(vin_Cars_190);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Updating Cars
  let color_Cars_upd_190 = "color_Cars_upd_190_" + Math.floor(Math.random()*1000);
  let description_Cars_upd_190 = "description_Cars_upd_190_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_upd_190 = "homeGarageId_Cars_upd_190_" + Math.floor(Math.random()*1000);
  let licensePlate_Cars_upd_190 = "licensePlate_Cars_upd_190_" + Math.floor(Math.random()*1000);
  let make_Cars_upd_190 = "make_Cars_upd_190_" + Math.floor(Math.random()*1000);
  let mileage_Cars_upd_190 = Math.floor(Math.random() * 1000000);
  let model_Cars_upd_190 = "model_Cars_upd_190_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_upd_190 = "ownerCustomerId_Cars_upd_190_" + Math.floor(Math.random()*1000);
  let vin_Cars_upd_190 = vin_Cars_190;
  let year_Cars_upd_190 = Math.floor(Math.random() * 1000000);
  updateCar(color_Cars_upd_190, description_Cars_upd_190, homeGarageId_Cars_upd_190, licensePlate_Cars_upd_190, make_Cars_upd_190, mileage_Cars_upd_190, model_Cars_upd_190, ownerCustomerId_Cars_upd_190, vin_Cars_upd_190, year_Cars_upd_190);

  // Skip delete for Cars to prevent foreign key errors (has active dependents)
});

// Story: crud:PeriodicMaintenance:linear:2
bthread("crud:PeriodicMaintenance:linear:2", function () {
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Cars"] = matchAnyCarsAdded();
  deps["Garages"] = matchAnyGaragesAdded();
  let pkMap = {"Cars": "vin", "Garages": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  let CarsId = captured["Cars"];
  let GaragesId = captured["Garages"];
  // -> Creating PeriodicMaintenance
  let carVin_PeriodicMaintenance_200 = "carVin_PeriodicMaintenance_200_" + Math.floor(Math.random()*1000);
  let description_PeriodicMaintenance_200 = "description_PeriodicMaintenance_200_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_200 = GaragesId;
  let intervalKm_PeriodicMaintenance_200 = Math.floor(Math.random() * 1000000);
  let intervalMonths_PeriodicMaintenance_200 = Math.floor(Math.random() * 1000000);
  let planType_PeriodicMaintenance_200 = "planType_PeriodicMaintenance_200_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_200 = "pmId_PeriodicMaintenance_200_" + Math.floor(Math.random()*1000);
  let schedule_PeriodicMaintenance_200 = {};
  let status_PeriodicMaintenance_200 = "open";
  let tasks_PeriodicMaintenance_200 = [];
  let res_PeriodicMaintenance_200 = createPMPlan(carVin_PeriodicMaintenance_200, description_PeriodicMaintenance_200, garageId_PeriodicMaintenance_200, intervalKm_PeriodicMaintenance_200, intervalMonths_PeriodicMaintenance_200, planType_PeriodicMaintenance_200, pmId_PeriodicMaintenance_200, schedule_PeriodicMaintenance_200, status_PeriodicMaintenance_200, tasks_PeriodicMaintenance_200);
  if (res_PeriodicMaintenance_200 && res_PeriodicMaintenance_200.status >= 200 && res_PeriodicMaintenance_200.status < 300) {
      verifyPeriodicMaintenanceExists(pmId_PeriodicMaintenance_200);
  } else {
      bp.log.error("Failed to create PeriodicMaintenance, skipping verification.");
  }

  // -> Updating PeriodicMaintenance
  let carVin_PeriodicMaintenance_upd_200 = "carVin_PeriodicMaintenance_upd_200_" + Math.floor(Math.random()*1000);
  let description_PeriodicMaintenance_upd_200 = "description_PeriodicMaintenance_upd_200_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_upd_200 = "garageId_PeriodicMaintenance_upd_200_" + Math.floor(Math.random()*1000);
  let intervalKm_PeriodicMaintenance_upd_200 = Math.floor(Math.random() * 1000000);
  let intervalMonths_PeriodicMaintenance_upd_200 = Math.floor(Math.random() * 1000000);
  let planType_PeriodicMaintenance_upd_200 = "planType_PeriodicMaintenance_upd_200_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_upd_200 = pmId_PeriodicMaintenance_200;
  let schedule_PeriodicMaintenance_upd_200 = {};
  let status_PeriodicMaintenance_upd_200 = "open";
  let tasks_PeriodicMaintenance_upd_200 = [];
  updatePMPlan(carVin_PeriodicMaintenance_upd_200, description_PeriodicMaintenance_upd_200, garageId_PeriodicMaintenance_upd_200, intervalKm_PeriodicMaintenance_upd_200, intervalMonths_PeriodicMaintenance_upd_200, planType_PeriodicMaintenance_upd_200, pmId_PeriodicMaintenance_upd_200, schedule_PeriodicMaintenance_upd_200, status_PeriodicMaintenance_upd_200, tasks_PeriodicMaintenance_upd_200);

  // -> Deleting PeriodicMaintenance
  deletePMPlan(pmId_PeriodicMaintenance_200);
  verifyPeriodicMaintenanceDoesNotExist(carVin_PeriodicMaintenance_200, description_PeriodicMaintenance_200, garageId_PeriodicMaintenance_200, intervalKm_PeriodicMaintenance_200, intervalMonths_PeriodicMaintenance_200, planType_PeriodicMaintenance_200, pmId_PeriodicMaintenance_200, schedule_PeriodicMaintenance_200, status_PeriodicMaintenance_200, tasks_PeriodicMaintenance_200);

});

// Story: crud:RepairOrders:linear:2
bthread("crud:RepairOrders:linear:2", function () {
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Cars"] = matchAnyCarsAdded();
  deps["Customers"] = matchAnyCustomersAdded();
  deps["Garages"] = matchAnyGaragesAdded();
  let pkMap = {"Cars": "vin", "Customers": "customerId", "Garages": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  let CarsId = captured["Cars"];
  let CustomersId = captured["Customers"];
  let GaragesId = captured["Garages"];
  // -> Creating RepairOrders
  let carVin_RepairOrders_210 = "carVin_RepairOrders_210_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_210 = "complaint_RepairOrders_210_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_210 = CustomersId;
  let description_RepairOrders_210 = "description_RepairOrders_210_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_210 = GaragesId;
  let roId_RepairOrders_210 = "roId_RepairOrders_210_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_210 = "open";
  let res_RepairOrders_210 = createRepairOrder(carVin_RepairOrders_210, complaint_RepairOrders_210, customerId_RepairOrders_210, description_RepairOrders_210, garageId_RepairOrders_210, roId_RepairOrders_210, status_RepairOrders_210);
  if (res_RepairOrders_210 && res_RepairOrders_210.status >= 200 && res_RepairOrders_210.status < 300) {
      verifyRepairOrdersExists(roId_RepairOrders_210);
  } else {
      bp.log.error("Failed to create RepairOrders, skipping verification.");
  }

  // -> Updating RepairOrders
  let carVin_RepairOrders_upd_210 = "carVin_RepairOrders_upd_210_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_upd_210 = "complaint_RepairOrders_upd_210_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_upd_210 = "customerId_RepairOrders_upd_210_" + Math.floor(Math.random()*1000);
  let description_RepairOrders_upd_210 = "description_RepairOrders_upd_210_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_upd_210 = "garageId_RepairOrders_upd_210_" + Math.floor(Math.random()*1000);
  let roId_RepairOrders_upd_210 = roId_RepairOrders_210;
  let status_RepairOrders_upd_210 = "open";
  updateRepairOrder(carVin_RepairOrders_upd_210, complaint_RepairOrders_upd_210, customerId_RepairOrders_upd_210, description_RepairOrders_upd_210, garageId_RepairOrders_upd_210, roId_RepairOrders_upd_210, status_RepairOrders_upd_210);

  // -> Deleting RepairOrders
  deleteRepairOrder(roId_RepairOrders_210);
  verifyRepairOrdersDoesNotExist(carVin_RepairOrders_210, complaint_RepairOrders_210, customerId_RepairOrders_210, description_RepairOrders_210, garageId_RepairOrders_210, roId_RepairOrders_210, status_RepairOrders_210);

});

// Story: crud:Chains:linear:3
bthread("crud:Chains:linear:3", function () {
  // -> Creating Chains
  let active_Chains_220 = true;
  let chainId_Chains_220 = "chainId_Chains_220_" + Math.floor(Math.random()*1000);
  let description_Chains_220 = "description_Chains_220_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_220 = {};
  let name_Chains_220 = "name_Chains_220_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_220 = "supportEmail_Chains_220_" + Math.floor(Math.random()*1000);
  let res_Chains_220 = createChain(active_Chains_220, chainId_Chains_220, description_Chains_220, hqAddress_Chains_220, name_Chains_220, supportEmail_Chains_220);
  if (res_Chains_220 && res_Chains_220.status >= 200 && res_Chains_220.status < 300) {
      verifyChainsExists(chainId_Chains_220);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Updating Chains
  let active_Chains_upd_220 = true;
  let chainId_Chains_upd_220 = chainId_Chains_220;
  let description_Chains_upd_220 = "description_Chains_upd_220_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_upd_220 = {};
  let name_Chains_upd_220 = "name_Chains_upd_220_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_upd_220 = "supportEmail_Chains_upd_220_" + Math.floor(Math.random()*1000);
  updateChain(active_Chains_upd_220, chainId_Chains_upd_220, description_Chains_upd_220, hqAddress_Chains_upd_220, name_Chains_upd_220, supportEmail_Chains_upd_220);

  // Skip delete for Chains to prevent foreign key errors (has active dependents)
});

// Story: crud:Customers:linear:3
bthread("crud:Customers:linear:3", function () {
  // -> Creating Customers
  let customerId_Customers_230 = "customerId_Customers_230_" + Math.floor(Math.random()*1000);
  let description_Customers_230 = "description_Customers_230_" + Math.floor(Math.random()*1000);
  let email_Customers_230 = "email_Customers_230_" + Math.floor(Math.random()*1000);
  let fullName_Customers_230 = "fullName_Customers_230_" + Math.floor(Math.random()*1000);
  let name_Customers_230 = "name_Customers_230_" + Math.floor(Math.random()*1000);
  let phone_Customers_230 = "phone_Customers_230_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_230 = "preferredGarageId_Customers_230_" + Math.floor(Math.random()*1000);
  let type_Customers_230 = "type_Customers_230_" + Math.floor(Math.random()*1000);
  let res_Customers_230 = createCustomer(customerId_Customers_230, description_Customers_230, email_Customers_230, fullName_Customers_230, name_Customers_230, phone_Customers_230, preferredGarageId_Customers_230, type_Customers_230);
  if (res_Customers_230 && res_Customers_230.status >= 200 && res_Customers_230.status < 300) {
      verifyCustomersExists(customerId_Customers_230);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Updating Customers
  let customerId_Customers_upd_230 = customerId_Customers_230;
  let description_Customers_upd_230 = "description_Customers_upd_230_" + Math.floor(Math.random()*1000);
  let email_Customers_upd_230 = "email_Customers_upd_230_" + Math.floor(Math.random()*1000);
  let fullName_Customers_upd_230 = "fullName_Customers_upd_230_" + Math.floor(Math.random()*1000);
  let name_Customers_upd_230 = "name_Customers_upd_230_" + Math.floor(Math.random()*1000);
  let phone_Customers_upd_230 = "phone_Customers_upd_230_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_upd_230 = "preferredGarageId_Customers_upd_230_" + Math.floor(Math.random()*1000);
  let type_Customers_upd_230 = "type_Customers_upd_230_" + Math.floor(Math.random()*1000);
  updateCustomer(customerId_Customers_upd_230, description_Customers_upd_230, email_Customers_upd_230, fullName_Customers_upd_230, name_Customers_upd_230, phone_Customers_upd_230, preferredGarageId_Customers_upd_230, type_Customers_upd_230);

  // Skip delete for Customers to prevent foreign key errors (has active dependents)
});

// Story: crud:Garages:linear:3
bthread("crud:Garages:linear:3", function () {
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Chains"] = matchAnyChainsAdded();
  let pkMap = {"Chains": "chainId"};
  let captured = resolveDependencies(deps, pkMap);
  let ChainsId = captured["Chains"];
  // -> Creating Garages
  let active_Garages_240 = true;
  let address_Garages_240 = {};
  let bayCount_Garages_240 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_240 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_240 = ChainsId;
  let description_Garages_240 = "description_Garages_240_" + Math.floor(Math.random()*1000);
  let garageId_Garages_240 = "garageId_Garages_240_" + Math.floor(Math.random()*1000);
  let location_Garages_240 = {};
  let name_Garages_240 = "name_Garages_240_" + Math.floor(Math.random()*1000);
  let phone_Garages_240 = "phone_Garages_240_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_240 = [];
  let res_Garages_240 = createGarage(active_Garages_240, address_Garages_240, bayCount_Garages_240, capacity_Garages_240, chainId_Garages_240, description_Garages_240, garageId_Garages_240, location_Garages_240, name_Garages_240, phone_Garages_240, servicesOffered_Garages_240);
  if (res_Garages_240 && res_Garages_240.status >= 200 && res_Garages_240.status < 300) {
      verifyGaragesExists(garageId_Garages_240);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Updating Garages
  let active_Garages_upd_240 = true;
  let address_Garages_upd_240 = {};
  let bayCount_Garages_upd_240 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_upd_240 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_upd_240 = "chainId_Garages_upd_240_" + Math.floor(Math.random()*1000);
  let description_Garages_upd_240 = "description_Garages_upd_240_" + Math.floor(Math.random()*1000);
  let garageId_Garages_upd_240 = garageId_Garages_240;
  let location_Garages_upd_240 = {};
  let name_Garages_upd_240 = "name_Garages_upd_240_" + Math.floor(Math.random()*1000);
  let phone_Garages_upd_240 = "phone_Garages_upd_240_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_upd_240 = [];
  updateGarage(active_Garages_upd_240, address_Garages_upd_240, bayCount_Garages_upd_240, capacity_Garages_upd_240, chainId_Garages_upd_240, description_Garages_upd_240, garageId_Garages_upd_240, location_Garages_upd_240, name_Garages_upd_240, phone_Garages_upd_240, servicesOffered_Garages_upd_240);

  // Skip delete for Garages to prevent foreign key errors (has active dependents)
});

// Story: crud:Cars:linear:3
bthread("crud:Cars:linear:3", function () {
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Customers"] = matchAnyCustomersAdded();
  deps["Garages"] = matchAnyGaragesAdded();
  let pkMap = {"Customers": "customerId", "Garages": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  let CustomersId = captured["Customers"];
  let GaragesId = captured["Garages"];
  // -> Creating Cars
  let color_Cars_250 = "color_Cars_250_" + Math.floor(Math.random()*1000);
  let description_Cars_250 = "description_Cars_250_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_250 = GaragesId;
  let licensePlate_Cars_250 = "licensePlate_Cars_250_" + Math.floor(Math.random()*1000);
  let make_Cars_250 = "make_Cars_250_" + Math.floor(Math.random()*1000);
  let mileage_Cars_250 = Math.floor(Math.random() * 1000000);
  let model_Cars_250 = "model_Cars_250_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_250 = CustomersId;
  let vin_Cars_250 = "vin_Cars_250_" + Math.floor(Math.random()*1000);
  let year_Cars_250 = Math.floor(Math.random() * 1000000);
  let res_Cars_250 = createCar(color_Cars_250, description_Cars_250, homeGarageId_Cars_250, licensePlate_Cars_250, make_Cars_250, mileage_Cars_250, model_Cars_250, ownerCustomerId_Cars_250, vin_Cars_250, year_Cars_250);
  if (res_Cars_250 && res_Cars_250.status >= 200 && res_Cars_250.status < 300) {
      verifyCarsExists(vin_Cars_250);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Updating Cars
  let color_Cars_upd_250 = "color_Cars_upd_250_" + Math.floor(Math.random()*1000);
  let description_Cars_upd_250 = "description_Cars_upd_250_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_upd_250 = "homeGarageId_Cars_upd_250_" + Math.floor(Math.random()*1000);
  let licensePlate_Cars_upd_250 = "licensePlate_Cars_upd_250_" + Math.floor(Math.random()*1000);
  let make_Cars_upd_250 = "make_Cars_upd_250_" + Math.floor(Math.random()*1000);
  let mileage_Cars_upd_250 = Math.floor(Math.random() * 1000000);
  let model_Cars_upd_250 = "model_Cars_upd_250_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_upd_250 = "ownerCustomerId_Cars_upd_250_" + Math.floor(Math.random()*1000);
  let vin_Cars_upd_250 = vin_Cars_250;
  let year_Cars_upd_250 = Math.floor(Math.random() * 1000000);
  updateCar(color_Cars_upd_250, description_Cars_upd_250, homeGarageId_Cars_upd_250, licensePlate_Cars_upd_250, make_Cars_upd_250, mileage_Cars_upd_250, model_Cars_upd_250, ownerCustomerId_Cars_upd_250, vin_Cars_upd_250, year_Cars_upd_250);

  // Skip delete for Cars to prevent foreign key errors (has active dependents)
});

// Story: crud:PeriodicMaintenance:linear:3
bthread("crud:PeriodicMaintenance:linear:3", function () {
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Cars"] = matchAnyCarsAdded();
  deps["Garages"] = matchAnyGaragesAdded();
  let pkMap = {"Cars": "vin", "Garages": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  let CarsId = captured["Cars"];
  let GaragesId = captured["Garages"];
  // -> Creating PeriodicMaintenance
  let carVin_PeriodicMaintenance_260 = "carVin_PeriodicMaintenance_260_" + Math.floor(Math.random()*1000);
  let description_PeriodicMaintenance_260 = "description_PeriodicMaintenance_260_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_260 = GaragesId;
  let intervalKm_PeriodicMaintenance_260 = Math.floor(Math.random() * 1000000);
  let intervalMonths_PeriodicMaintenance_260 = Math.floor(Math.random() * 1000000);
  let planType_PeriodicMaintenance_260 = "planType_PeriodicMaintenance_260_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_260 = "pmId_PeriodicMaintenance_260_" + Math.floor(Math.random()*1000);
  let schedule_PeriodicMaintenance_260 = {};
  let status_PeriodicMaintenance_260 = "open";
  let tasks_PeriodicMaintenance_260 = [];
  let res_PeriodicMaintenance_260 = createPMPlan(carVin_PeriodicMaintenance_260, description_PeriodicMaintenance_260, garageId_PeriodicMaintenance_260, intervalKm_PeriodicMaintenance_260, intervalMonths_PeriodicMaintenance_260, planType_PeriodicMaintenance_260, pmId_PeriodicMaintenance_260, schedule_PeriodicMaintenance_260, status_PeriodicMaintenance_260, tasks_PeriodicMaintenance_260);
  if (res_PeriodicMaintenance_260 && res_PeriodicMaintenance_260.status >= 200 && res_PeriodicMaintenance_260.status < 300) {
      verifyPeriodicMaintenanceExists(pmId_PeriodicMaintenance_260);
  } else {
      bp.log.error("Failed to create PeriodicMaintenance, skipping verification.");
  }

  // -> Updating PeriodicMaintenance
  let carVin_PeriodicMaintenance_upd_260 = "carVin_PeriodicMaintenance_upd_260_" + Math.floor(Math.random()*1000);
  let description_PeriodicMaintenance_upd_260 = "description_PeriodicMaintenance_upd_260_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_upd_260 = "garageId_PeriodicMaintenance_upd_260_" + Math.floor(Math.random()*1000);
  let intervalKm_PeriodicMaintenance_upd_260 = Math.floor(Math.random() * 1000000);
  let intervalMonths_PeriodicMaintenance_upd_260 = Math.floor(Math.random() * 1000000);
  let planType_PeriodicMaintenance_upd_260 = "planType_PeriodicMaintenance_upd_260_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_upd_260 = pmId_PeriodicMaintenance_260;
  let schedule_PeriodicMaintenance_upd_260 = {};
  let status_PeriodicMaintenance_upd_260 = "open";
  let tasks_PeriodicMaintenance_upd_260 = [];
  updatePMPlan(carVin_PeriodicMaintenance_upd_260, description_PeriodicMaintenance_upd_260, garageId_PeriodicMaintenance_upd_260, intervalKm_PeriodicMaintenance_upd_260, intervalMonths_PeriodicMaintenance_upd_260, planType_PeriodicMaintenance_upd_260, pmId_PeriodicMaintenance_upd_260, schedule_PeriodicMaintenance_upd_260, status_PeriodicMaintenance_upd_260, tasks_PeriodicMaintenance_upd_260);

  // -> Deleting PeriodicMaintenance
  deletePMPlan(pmId_PeriodicMaintenance_260);
  verifyPeriodicMaintenanceDoesNotExist(carVin_PeriodicMaintenance_260, description_PeriodicMaintenance_260, garageId_PeriodicMaintenance_260, intervalKm_PeriodicMaintenance_260, intervalMonths_PeriodicMaintenance_260, planType_PeriodicMaintenance_260, pmId_PeriodicMaintenance_260, schedule_PeriodicMaintenance_260, status_PeriodicMaintenance_260, tasks_PeriodicMaintenance_260);

});

// Story: crud:RepairOrders:linear:3
bthread("crud:RepairOrders:linear:3", function () {
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Cars"] = matchAnyCarsAdded();
  deps["Customers"] = matchAnyCustomersAdded();
  deps["Garages"] = matchAnyGaragesAdded();
  let pkMap = {"Cars": "vin", "Customers": "customerId", "Garages": "garageId"};
  let captured = resolveDependencies(deps, pkMap);
  let CarsId = captured["Cars"];
  let CustomersId = captured["Customers"];
  let GaragesId = captured["Garages"];
  // -> Creating RepairOrders
  let carVin_RepairOrders_270 = "carVin_RepairOrders_270_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_270 = "complaint_RepairOrders_270_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_270 = CustomersId;
  let description_RepairOrders_270 = "description_RepairOrders_270_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_270 = GaragesId;
  let roId_RepairOrders_270 = "roId_RepairOrders_270_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_270 = "open";
  let res_RepairOrders_270 = createRepairOrder(carVin_RepairOrders_270, complaint_RepairOrders_270, customerId_RepairOrders_270, description_RepairOrders_270, garageId_RepairOrders_270, roId_RepairOrders_270, status_RepairOrders_270);
  if (res_RepairOrders_270 && res_RepairOrders_270.status >= 200 && res_RepairOrders_270.status < 300) {
      verifyRepairOrdersExists(roId_RepairOrders_270);
  } else {
      bp.log.error("Failed to create RepairOrders, skipping verification.");
  }

  // -> Updating RepairOrders
  let carVin_RepairOrders_upd_270 = "carVin_RepairOrders_upd_270_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_upd_270 = "complaint_RepairOrders_upd_270_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_upd_270 = "customerId_RepairOrders_upd_270_" + Math.floor(Math.random()*1000);
  let description_RepairOrders_upd_270 = "description_RepairOrders_upd_270_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_upd_270 = "garageId_RepairOrders_upd_270_" + Math.floor(Math.random()*1000);
  let roId_RepairOrders_upd_270 = roId_RepairOrders_270;
  let status_RepairOrders_upd_270 = "open";
  updateRepairOrder(carVin_RepairOrders_upd_270, complaint_RepairOrders_upd_270, customerId_RepairOrders_upd_270, description_RepairOrders_upd_270, garageId_RepairOrders_upd_270, roId_RepairOrders_upd_270, status_RepairOrders_upd_270);

  // -> Deleting RepairOrders
  deleteRepairOrder(roId_RepairOrders_270);
  verifyRepairOrdersDoesNotExist(carVin_RepairOrders_270, complaint_RepairOrders_270, customerId_RepairOrders_270, description_RepairOrders_270, garageId_RepairOrders_270, roId_RepairOrders_270, status_RepairOrders_270);

});

// Story: Deep Chain Chains_Garages_Cars_PeriodicMaintenance (Self-Contained)
bthread("chain:Chains_Garages_Cars_PeriodicMaintenance", function () {
  // -> Creating Chains
  let active_Chains_280 = true;
  let chainId_Chains_280 = "chainId_Chains_280_" + Math.floor(Math.random()*1000);
  let description_Chains_280 = "description_Chains_280_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_280 = {};
  let name_Chains_280 = "name_Chains_280_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_280 = "supportEmail_Chains_280_" + Math.floor(Math.random()*1000);
  let res_Chains_280 = createChain(active_Chains_280, chainId_Chains_280, description_Chains_280, hqAddress_Chains_280, name_Chains_280, supportEmail_Chains_280);
  if (res_Chains_280 && res_Chains_280.status >= 200 && res_Chains_280.status < 300) {
      verifyChainsExists(chainId_Chains_280);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_280 = true;
  let address_Garages_280 = {};
  let bayCount_Garages_280 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_280 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_280 = chainId_Chains_280;
  let description_Garages_280 = "description_Garages_280_" + Math.floor(Math.random()*1000);
  let garageId_Garages_280 = "garageId_Garages_280_" + Math.floor(Math.random()*1000);
  let location_Garages_280 = {};
  let name_Garages_280 = "name_Garages_280_" + Math.floor(Math.random()*1000);
  let phone_Garages_280 = "phone_Garages_280_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_280 = [];
  let res_Garages_280 = createGarage(active_Garages_280, address_Garages_280, bayCount_Garages_280, capacity_Garages_280, chainId_Garages_280, description_Garages_280, garageId_Garages_280, location_Garages_280, name_Garages_280, phone_Garages_280, servicesOffered_Garages_280);
  if (res_Garages_280 && res_Garages_280.status >= 200 && res_Garages_280.status < 300) {
      verifyGaragesExists(garageId_Garages_280);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Customers
  let customerId_Customers_280 = "customerId_Customers_280_" + Math.floor(Math.random()*1000);
  let description_Customers_280 = "description_Customers_280_" + Math.floor(Math.random()*1000);
  let email_Customers_280 = "email_Customers_280_" + Math.floor(Math.random()*1000);
  let fullName_Customers_280 = "fullName_Customers_280_" + Math.floor(Math.random()*1000);
  let name_Customers_280 = "name_Customers_280_" + Math.floor(Math.random()*1000);
  let phone_Customers_280 = "phone_Customers_280_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_280 = "preferredGarageId_Customers_280_" + Math.floor(Math.random()*1000);
  let type_Customers_280 = "type_Customers_280_" + Math.floor(Math.random()*1000);
  let res_Customers_280 = createCustomer(customerId_Customers_280, description_Customers_280, email_Customers_280, fullName_Customers_280, name_Customers_280, phone_Customers_280, preferredGarageId_Customers_280, type_Customers_280);
  if (res_Customers_280 && res_Customers_280.status >= 200 && res_Customers_280.status < 300) {
      verifyCustomersExists(customerId_Customers_280);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_280 = "color_Cars_280_" + Math.floor(Math.random()*1000);
  let description_Cars_280 = "description_Cars_280_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_280 = garageId_Garages_280;
  let licensePlate_Cars_280 = "licensePlate_Cars_280_" + Math.floor(Math.random()*1000);
  let make_Cars_280 = "make_Cars_280_" + Math.floor(Math.random()*1000);
  let mileage_Cars_280 = Math.floor(Math.random() * 1000000);
  let model_Cars_280 = "model_Cars_280_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_280 = customerId_Customers_280;
  let vin_Cars_280 = "vin_Cars_280_" + Math.floor(Math.random()*1000);
  let year_Cars_280 = Math.floor(Math.random() * 1000000);
  let res_Cars_280 = createCar(color_Cars_280, description_Cars_280, homeGarageId_Cars_280, licensePlate_Cars_280, make_Cars_280, mileage_Cars_280, model_Cars_280, ownerCustomerId_Cars_280, vin_Cars_280, year_Cars_280);
  if (res_Cars_280 && res_Cars_280.status >= 200 && res_Cars_280.status < 300) {
      verifyCarsExists(vin_Cars_280);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating PeriodicMaintenance
  let carVin_PeriodicMaintenance_280 = "carVin_PeriodicMaintenance_280_" + Math.floor(Math.random()*1000);
  let description_PeriodicMaintenance_280 = "description_PeriodicMaintenance_280_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_280 = garageId_Garages_280;
  let intervalKm_PeriodicMaintenance_280 = Math.floor(Math.random() * 1000000);
  let intervalMonths_PeriodicMaintenance_280 = Math.floor(Math.random() * 1000000);
  let planType_PeriodicMaintenance_280 = "planType_PeriodicMaintenance_280_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_280 = "pmId_PeriodicMaintenance_280_" + Math.floor(Math.random()*1000);
  let schedule_PeriodicMaintenance_280 = {};
  let status_PeriodicMaintenance_280 = "open";
  let tasks_PeriodicMaintenance_280 = [];
  let res_PeriodicMaintenance_280 = createPMPlan(carVin_PeriodicMaintenance_280, description_PeriodicMaintenance_280, garageId_PeriodicMaintenance_280, intervalKm_PeriodicMaintenance_280, intervalMonths_PeriodicMaintenance_280, planType_PeriodicMaintenance_280, pmId_PeriodicMaintenance_280, schedule_PeriodicMaintenance_280, status_PeriodicMaintenance_280, tasks_PeriodicMaintenance_280);
  if (res_PeriodicMaintenance_280 && res_PeriodicMaintenance_280.status >= 200 && res_PeriodicMaintenance_280.status < 300) {
      verifyPeriodicMaintenanceExists(pmId_PeriodicMaintenance_280);
  } else {
      bp.log.error("Failed to create PeriodicMaintenance, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PeriodicMaintenance
  deletePMPlan(pmId_PeriodicMaintenance_280);
  verifyPeriodicMaintenanceDoesNotExist(carVin_PeriodicMaintenance_280, description_PeriodicMaintenance_280, garageId_PeriodicMaintenance_280, intervalKm_PeriodicMaintenance_280, intervalMonths_PeriodicMaintenance_280, planType_PeriodicMaintenance_280, pmId_PeriodicMaintenance_280, schedule_PeriodicMaintenance_280, status_PeriodicMaintenance_280, tasks_PeriodicMaintenance_280);

  // -> Deleting Cars
  deleteCar(vin_Cars_280);
  verifyCarsDoesNotExist(color_Cars_280, description_Cars_280, homeGarageId_Cars_280, licensePlate_Cars_280, make_Cars_280, mileage_Cars_280, model_Cars_280, ownerCustomerId_Cars_280, vin_Cars_280, year_Cars_280);

  // -> Deleting Garages
  deleteGarage(garageId_Garages_280);
  verifyGaragesDoesNotExist(active_Garages_280, address_Garages_280, bayCount_Garages_280, capacity_Garages_280, chainId_Garages_280, description_Garages_280, garageId_Garages_280, location_Garages_280, name_Garages_280, phone_Garages_280, servicesOffered_Garages_280);

  // -> Deleting Chains
  deleteChain(chainId_Chains_280);
  verifyChainsDoesNotExist(active_Chains_280, chainId_Chains_280, description_Chains_280, hqAddress_Chains_280, name_Chains_280, supportEmail_Chains_280);

});

// Story: Deep Chain Chains_Garages_Cars_RepairOrders (Self-Contained)
bthread("chain:Chains_Garages_Cars_RepairOrders", function () {
  // -> Creating Chains
  let active_Chains_380 = true;
  let chainId_Chains_380 = "chainId_Chains_380_" + Math.floor(Math.random()*1000);
  let description_Chains_380 = "description_Chains_380_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_380 = {};
  let name_Chains_380 = "name_Chains_380_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_380 = "supportEmail_Chains_380_" + Math.floor(Math.random()*1000);
  let res_Chains_380 = createChain(active_Chains_380, chainId_Chains_380, description_Chains_380, hqAddress_Chains_380, name_Chains_380, supportEmail_Chains_380);
  if (res_Chains_380 && res_Chains_380.status >= 200 && res_Chains_380.status < 300) {
      verifyChainsExists(chainId_Chains_380);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_380 = true;
  let address_Garages_380 = {};
  let bayCount_Garages_380 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_380 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_380 = chainId_Chains_380;
  let description_Garages_380 = "description_Garages_380_" + Math.floor(Math.random()*1000);
  let garageId_Garages_380 = "garageId_Garages_380_" + Math.floor(Math.random()*1000);
  let location_Garages_380 = {};
  let name_Garages_380 = "name_Garages_380_" + Math.floor(Math.random()*1000);
  let phone_Garages_380 = "phone_Garages_380_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_380 = [];
  let res_Garages_380 = createGarage(active_Garages_380, address_Garages_380, bayCount_Garages_380, capacity_Garages_380, chainId_Garages_380, description_Garages_380, garageId_Garages_380, location_Garages_380, name_Garages_380, phone_Garages_380, servicesOffered_Garages_380);
  if (res_Garages_380 && res_Garages_380.status >= 200 && res_Garages_380.status < 300) {
      verifyGaragesExists(garageId_Garages_380);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Customers
  let customerId_Customers_380 = "customerId_Customers_380_" + Math.floor(Math.random()*1000);
  let description_Customers_380 = "description_Customers_380_" + Math.floor(Math.random()*1000);
  let email_Customers_380 = "email_Customers_380_" + Math.floor(Math.random()*1000);
  let fullName_Customers_380 = "fullName_Customers_380_" + Math.floor(Math.random()*1000);
  let name_Customers_380 = "name_Customers_380_" + Math.floor(Math.random()*1000);
  let phone_Customers_380 = "phone_Customers_380_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_380 = "preferredGarageId_Customers_380_" + Math.floor(Math.random()*1000);
  let type_Customers_380 = "type_Customers_380_" + Math.floor(Math.random()*1000);
  let res_Customers_380 = createCustomer(customerId_Customers_380, description_Customers_380, email_Customers_380, fullName_Customers_380, name_Customers_380, phone_Customers_380, preferredGarageId_Customers_380, type_Customers_380);
  if (res_Customers_380 && res_Customers_380.status >= 200 && res_Customers_380.status < 300) {
      verifyCustomersExists(customerId_Customers_380);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_380 = "color_Cars_380_" + Math.floor(Math.random()*1000);
  let description_Cars_380 = "description_Cars_380_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_380 = garageId_Garages_380;
  let licensePlate_Cars_380 = "licensePlate_Cars_380_" + Math.floor(Math.random()*1000);
  let make_Cars_380 = "make_Cars_380_" + Math.floor(Math.random()*1000);
  let mileage_Cars_380 = Math.floor(Math.random() * 1000000);
  let model_Cars_380 = "model_Cars_380_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_380 = customerId_Customers_380;
  let vin_Cars_380 = "vin_Cars_380_" + Math.floor(Math.random()*1000);
  let year_Cars_380 = Math.floor(Math.random() * 1000000);
  let res_Cars_380 = createCar(color_Cars_380, description_Cars_380, homeGarageId_Cars_380, licensePlate_Cars_380, make_Cars_380, mileage_Cars_380, model_Cars_380, ownerCustomerId_Cars_380, vin_Cars_380, year_Cars_380);
  if (res_Cars_380 && res_Cars_380.status >= 200 && res_Cars_380.status < 300) {
      verifyCarsExists(vin_Cars_380);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating RepairOrders
  let carVin_RepairOrders_380 = "carVin_RepairOrders_380_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_380 = "complaint_RepairOrders_380_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_380 = customerId_Customers_380;
  let description_RepairOrders_380 = "description_RepairOrders_380_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_380 = garageId_Garages_380;
  let roId_RepairOrders_380 = "roId_RepairOrders_380_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_380 = "open";
  let res_RepairOrders_380 = createRepairOrder(carVin_RepairOrders_380, complaint_RepairOrders_380, customerId_RepairOrders_380, description_RepairOrders_380, garageId_RepairOrders_380, roId_RepairOrders_380, status_RepairOrders_380);
  if (res_RepairOrders_380 && res_RepairOrders_380.status >= 200 && res_RepairOrders_380.status < 300) {
      verifyRepairOrdersExists(roId_RepairOrders_380);
  } else {
      bp.log.error("Failed to create RepairOrders, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting RepairOrders
  deleteRepairOrder(roId_RepairOrders_380);
  verifyRepairOrdersDoesNotExist(carVin_RepairOrders_380, complaint_RepairOrders_380, customerId_RepairOrders_380, description_RepairOrders_380, garageId_RepairOrders_380, roId_RepairOrders_380, status_RepairOrders_380);

  // -> Deleting Cars
  deleteCar(vin_Cars_380);
  verifyCarsDoesNotExist(color_Cars_380, description_Cars_380, homeGarageId_Cars_380, licensePlate_Cars_380, make_Cars_380, mileage_Cars_380, model_Cars_380, ownerCustomerId_Cars_380, vin_Cars_380, year_Cars_380);

  // -> Deleting Garages
  deleteGarage(garageId_Garages_380);
  verifyGaragesDoesNotExist(active_Garages_380, address_Garages_380, bayCount_Garages_380, capacity_Garages_380, chainId_Garages_380, description_Garages_380, garageId_Garages_380, location_Garages_380, name_Garages_380, phone_Garages_380, servicesOffered_Garages_380);

  // -> Deleting Chains
  deleteChain(chainId_Chains_380);
  verifyChainsDoesNotExist(active_Chains_380, chainId_Chains_380, description_Chains_380, hqAddress_Chains_380, name_Chains_380, supportEmail_Chains_380);

});

// Story: Deep Chain Chains_Garages_PeriodicMaintenance (Self-Contained)
bthread("chain:Chains_Garages_PeriodicMaintenance", function () {
  // -> Creating Chains
  let active_Chains_480 = true;
  let chainId_Chains_480 = "chainId_Chains_480_" + Math.floor(Math.random()*1000);
  let description_Chains_480 = "description_Chains_480_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_480 = {};
  let name_Chains_480 = "name_Chains_480_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_480 = "supportEmail_Chains_480_" + Math.floor(Math.random()*1000);
  let res_Chains_480 = createChain(active_Chains_480, chainId_Chains_480, description_Chains_480, hqAddress_Chains_480, name_Chains_480, supportEmail_Chains_480);
  if (res_Chains_480 && res_Chains_480.status >= 200 && res_Chains_480.status < 300) {
      verifyChainsExists(chainId_Chains_480);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_480 = true;
  let address_Garages_480 = {};
  let bayCount_Garages_480 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_480 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_480 = chainId_Chains_480;
  let description_Garages_480 = "description_Garages_480_" + Math.floor(Math.random()*1000);
  let garageId_Garages_480 = "garageId_Garages_480_" + Math.floor(Math.random()*1000);
  let location_Garages_480 = {};
  let name_Garages_480 = "name_Garages_480_" + Math.floor(Math.random()*1000);
  let phone_Garages_480 = "phone_Garages_480_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_480 = [];
  let res_Garages_480 = createGarage(active_Garages_480, address_Garages_480, bayCount_Garages_480, capacity_Garages_480, chainId_Garages_480, description_Garages_480, garageId_Garages_480, location_Garages_480, name_Garages_480, phone_Garages_480, servicesOffered_Garages_480);
  if (res_Garages_480 && res_Garages_480.status >= 200 && res_Garages_480.status < 300) {
      verifyGaragesExists(garageId_Garages_480);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Customers
  let customerId_Customers_480 = "customerId_Customers_480_" + Math.floor(Math.random()*1000);
  let description_Customers_480 = "description_Customers_480_" + Math.floor(Math.random()*1000);
  let email_Customers_480 = "email_Customers_480_" + Math.floor(Math.random()*1000);
  let fullName_Customers_480 = "fullName_Customers_480_" + Math.floor(Math.random()*1000);
  let name_Customers_480 = "name_Customers_480_" + Math.floor(Math.random()*1000);
  let phone_Customers_480 = "phone_Customers_480_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_480 = "preferredGarageId_Customers_480_" + Math.floor(Math.random()*1000);
  let type_Customers_480 = "type_Customers_480_" + Math.floor(Math.random()*1000);
  let res_Customers_480 = createCustomer(customerId_Customers_480, description_Customers_480, email_Customers_480, fullName_Customers_480, name_Customers_480, phone_Customers_480, preferredGarageId_Customers_480, type_Customers_480);
  if (res_Customers_480 && res_Customers_480.status >= 200 && res_Customers_480.status < 300) {
      verifyCustomersExists(customerId_Customers_480);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_480 = "color_Cars_480_" + Math.floor(Math.random()*1000);
  let description_Cars_480 = "description_Cars_480_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_480 = garageId_Garages_480;
  let licensePlate_Cars_480 = "licensePlate_Cars_480_" + Math.floor(Math.random()*1000);
  let make_Cars_480 = "make_Cars_480_" + Math.floor(Math.random()*1000);
  let mileage_Cars_480 = Math.floor(Math.random() * 1000000);
  let model_Cars_480 = "model_Cars_480_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_480 = customerId_Customers_480;
  let vin_Cars_480 = "vin_Cars_480_" + Math.floor(Math.random()*1000);
  let year_Cars_480 = Math.floor(Math.random() * 1000000);
  let res_Cars_480 = createCar(color_Cars_480, description_Cars_480, homeGarageId_Cars_480, licensePlate_Cars_480, make_Cars_480, mileage_Cars_480, model_Cars_480, ownerCustomerId_Cars_480, vin_Cars_480, year_Cars_480);
  if (res_Cars_480 && res_Cars_480.status >= 200 && res_Cars_480.status < 300) {
      verifyCarsExists(vin_Cars_480);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating PeriodicMaintenance
  let carVin_PeriodicMaintenance_480 = "carVin_PeriodicMaintenance_480_" + Math.floor(Math.random()*1000);
  let description_PeriodicMaintenance_480 = "description_PeriodicMaintenance_480_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_480 = garageId_Garages_480;
  let intervalKm_PeriodicMaintenance_480 = Math.floor(Math.random() * 1000000);
  let intervalMonths_PeriodicMaintenance_480 = Math.floor(Math.random() * 1000000);
  let planType_PeriodicMaintenance_480 = "planType_PeriodicMaintenance_480_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_480 = "pmId_PeriodicMaintenance_480_" + Math.floor(Math.random()*1000);
  let schedule_PeriodicMaintenance_480 = {};
  let status_PeriodicMaintenance_480 = "open";
  let tasks_PeriodicMaintenance_480 = [];
  let res_PeriodicMaintenance_480 = createPMPlan(carVin_PeriodicMaintenance_480, description_PeriodicMaintenance_480, garageId_PeriodicMaintenance_480, intervalKm_PeriodicMaintenance_480, intervalMonths_PeriodicMaintenance_480, planType_PeriodicMaintenance_480, pmId_PeriodicMaintenance_480, schedule_PeriodicMaintenance_480, status_PeriodicMaintenance_480, tasks_PeriodicMaintenance_480);
  if (res_PeriodicMaintenance_480 && res_PeriodicMaintenance_480.status >= 200 && res_PeriodicMaintenance_480.status < 300) {
      verifyPeriodicMaintenanceExists(pmId_PeriodicMaintenance_480);
  } else {
      bp.log.error("Failed to create PeriodicMaintenance, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PeriodicMaintenance
  deletePMPlan(pmId_PeriodicMaintenance_480);
  verifyPeriodicMaintenanceDoesNotExist(carVin_PeriodicMaintenance_480, description_PeriodicMaintenance_480, garageId_PeriodicMaintenance_480, intervalKm_PeriodicMaintenance_480, intervalMonths_PeriodicMaintenance_480, planType_PeriodicMaintenance_480, pmId_PeriodicMaintenance_480, schedule_PeriodicMaintenance_480, status_PeriodicMaintenance_480, tasks_PeriodicMaintenance_480);

  // -> Deleting Garages
  deleteGarage(garageId_Garages_480);
  verifyGaragesDoesNotExist(active_Garages_480, address_Garages_480, bayCount_Garages_480, capacity_Garages_480, chainId_Garages_480, description_Garages_480, garageId_Garages_480, location_Garages_480, name_Garages_480, phone_Garages_480, servicesOffered_Garages_480);

  // -> Deleting Chains
  deleteChain(chainId_Chains_480);
  verifyChainsDoesNotExist(active_Chains_480, chainId_Chains_480, description_Chains_480, hqAddress_Chains_480, name_Chains_480, supportEmail_Chains_480);

});

// Story: Deep Chain Chains_Garages_RepairOrders (Self-Contained)
bthread("chain:Chains_Garages_RepairOrders", function () {
  // -> Creating Chains
  let active_Chains_580 = true;
  let chainId_Chains_580 = "chainId_Chains_580_" + Math.floor(Math.random()*1000);
  let description_Chains_580 = "description_Chains_580_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_580 = {};
  let name_Chains_580 = "name_Chains_580_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_580 = "supportEmail_Chains_580_" + Math.floor(Math.random()*1000);
  let res_Chains_580 = createChain(active_Chains_580, chainId_Chains_580, description_Chains_580, hqAddress_Chains_580, name_Chains_580, supportEmail_Chains_580);
  if (res_Chains_580 && res_Chains_580.status >= 200 && res_Chains_580.status < 300) {
      verifyChainsExists(chainId_Chains_580);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_580 = true;
  let address_Garages_580 = {};
  let bayCount_Garages_580 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_580 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_580 = chainId_Chains_580;
  let description_Garages_580 = "description_Garages_580_" + Math.floor(Math.random()*1000);
  let garageId_Garages_580 = "garageId_Garages_580_" + Math.floor(Math.random()*1000);
  let location_Garages_580 = {};
  let name_Garages_580 = "name_Garages_580_" + Math.floor(Math.random()*1000);
  let phone_Garages_580 = "phone_Garages_580_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_580 = [];
  let res_Garages_580 = createGarage(active_Garages_580, address_Garages_580, bayCount_Garages_580, capacity_Garages_580, chainId_Garages_580, description_Garages_580, garageId_Garages_580, location_Garages_580, name_Garages_580, phone_Garages_580, servicesOffered_Garages_580);
  if (res_Garages_580 && res_Garages_580.status >= 200 && res_Garages_580.status < 300) {
      verifyGaragesExists(garageId_Garages_580);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Customers
  let customerId_Customers_580 = "customerId_Customers_580_" + Math.floor(Math.random()*1000);
  let description_Customers_580 = "description_Customers_580_" + Math.floor(Math.random()*1000);
  let email_Customers_580 = "email_Customers_580_" + Math.floor(Math.random()*1000);
  let fullName_Customers_580 = "fullName_Customers_580_" + Math.floor(Math.random()*1000);
  let name_Customers_580 = "name_Customers_580_" + Math.floor(Math.random()*1000);
  let phone_Customers_580 = "phone_Customers_580_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_580 = "preferredGarageId_Customers_580_" + Math.floor(Math.random()*1000);
  let type_Customers_580 = "type_Customers_580_" + Math.floor(Math.random()*1000);
  let res_Customers_580 = createCustomer(customerId_Customers_580, description_Customers_580, email_Customers_580, fullName_Customers_580, name_Customers_580, phone_Customers_580, preferredGarageId_Customers_580, type_Customers_580);
  if (res_Customers_580 && res_Customers_580.status >= 200 && res_Customers_580.status < 300) {
      verifyCustomersExists(customerId_Customers_580);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_580 = "color_Cars_580_" + Math.floor(Math.random()*1000);
  let description_Cars_580 = "description_Cars_580_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_580 = garageId_Garages_580;
  let licensePlate_Cars_580 = "licensePlate_Cars_580_" + Math.floor(Math.random()*1000);
  let make_Cars_580 = "make_Cars_580_" + Math.floor(Math.random()*1000);
  let mileage_Cars_580 = Math.floor(Math.random() * 1000000);
  let model_Cars_580 = "model_Cars_580_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_580 = customerId_Customers_580;
  let vin_Cars_580 = "vin_Cars_580_" + Math.floor(Math.random()*1000);
  let year_Cars_580 = Math.floor(Math.random() * 1000000);
  let res_Cars_580 = createCar(color_Cars_580, description_Cars_580, homeGarageId_Cars_580, licensePlate_Cars_580, make_Cars_580, mileage_Cars_580, model_Cars_580, ownerCustomerId_Cars_580, vin_Cars_580, year_Cars_580);
  if (res_Cars_580 && res_Cars_580.status >= 200 && res_Cars_580.status < 300) {
      verifyCarsExists(vin_Cars_580);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating RepairOrders
  let carVin_RepairOrders_580 = "carVin_RepairOrders_580_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_580 = "complaint_RepairOrders_580_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_580 = customerId_Customers_580;
  let description_RepairOrders_580 = "description_RepairOrders_580_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_580 = garageId_Garages_580;
  let roId_RepairOrders_580 = "roId_RepairOrders_580_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_580 = "open";
  let res_RepairOrders_580 = createRepairOrder(carVin_RepairOrders_580, complaint_RepairOrders_580, customerId_RepairOrders_580, description_RepairOrders_580, garageId_RepairOrders_580, roId_RepairOrders_580, status_RepairOrders_580);
  if (res_RepairOrders_580 && res_RepairOrders_580.status >= 200 && res_RepairOrders_580.status < 300) {
      verifyRepairOrdersExists(roId_RepairOrders_580);
  } else {
      bp.log.error("Failed to create RepairOrders, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting RepairOrders
  deleteRepairOrder(roId_RepairOrders_580);
  verifyRepairOrdersDoesNotExist(carVin_RepairOrders_580, complaint_RepairOrders_580, customerId_RepairOrders_580, description_RepairOrders_580, garageId_RepairOrders_580, roId_RepairOrders_580, status_RepairOrders_580);

  // -> Deleting Garages
  deleteGarage(garageId_Garages_580);
  verifyGaragesDoesNotExist(active_Garages_580, address_Garages_580, bayCount_Garages_580, capacity_Garages_580, chainId_Garages_580, description_Garages_580, garageId_Garages_580, location_Garages_580, name_Garages_580, phone_Garages_580, servicesOffered_Garages_580);

  // -> Deleting Chains
  deleteChain(chainId_Chains_580);
  verifyChainsDoesNotExist(active_Chains_580, chainId_Chains_580, description_Chains_580, hqAddress_Chains_580, name_Chains_580, supportEmail_Chains_580);

});

// Story: Deep Chain Customers_Cars_PeriodicMaintenance (Self-Contained)
bthread("chain:Customers_Cars_PeriodicMaintenance", function () {
  // -> Creating Customers
  let customerId_Customers_680 = "customerId_Customers_680_" + Math.floor(Math.random()*1000);
  let description_Customers_680 = "description_Customers_680_" + Math.floor(Math.random()*1000);
  let email_Customers_680 = "email_Customers_680_" + Math.floor(Math.random()*1000);
  let fullName_Customers_680 = "fullName_Customers_680_" + Math.floor(Math.random()*1000);
  let name_Customers_680 = "name_Customers_680_" + Math.floor(Math.random()*1000);
  let phone_Customers_680 = "phone_Customers_680_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_680 = "preferredGarageId_Customers_680_" + Math.floor(Math.random()*1000);
  let type_Customers_680 = "type_Customers_680_" + Math.floor(Math.random()*1000);
  let res_Customers_680 = createCustomer(customerId_Customers_680, description_Customers_680, email_Customers_680, fullName_Customers_680, name_Customers_680, phone_Customers_680, preferredGarageId_Customers_680, type_Customers_680);
  if (res_Customers_680 && res_Customers_680.status >= 200 && res_Customers_680.status < 300) {
      verifyCustomersExists(customerId_Customers_680);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Chains
  let active_Chains_680 = true;
  let chainId_Chains_680 = "chainId_Chains_680_" + Math.floor(Math.random()*1000);
  let description_Chains_680 = "description_Chains_680_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_680 = {};
  let name_Chains_680 = "name_Chains_680_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_680 = "supportEmail_Chains_680_" + Math.floor(Math.random()*1000);
  let res_Chains_680 = createChain(active_Chains_680, chainId_Chains_680, description_Chains_680, hqAddress_Chains_680, name_Chains_680, supportEmail_Chains_680);
  if (res_Chains_680 && res_Chains_680.status >= 200 && res_Chains_680.status < 300) {
      verifyChainsExists(chainId_Chains_680);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_680 = true;
  let address_Garages_680 = {};
  let bayCount_Garages_680 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_680 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_680 = chainId_Chains_680;
  let description_Garages_680 = "description_Garages_680_" + Math.floor(Math.random()*1000);
  let garageId_Garages_680 = "garageId_Garages_680_" + Math.floor(Math.random()*1000);
  let location_Garages_680 = {};
  let name_Garages_680 = "name_Garages_680_" + Math.floor(Math.random()*1000);
  let phone_Garages_680 = "phone_Garages_680_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_680 = [];
  let res_Garages_680 = createGarage(active_Garages_680, address_Garages_680, bayCount_Garages_680, capacity_Garages_680, chainId_Garages_680, description_Garages_680, garageId_Garages_680, location_Garages_680, name_Garages_680, phone_Garages_680, servicesOffered_Garages_680);
  if (res_Garages_680 && res_Garages_680.status >= 200 && res_Garages_680.status < 300) {
      verifyGaragesExists(garageId_Garages_680);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_680 = "color_Cars_680_" + Math.floor(Math.random()*1000);
  let description_Cars_680 = "description_Cars_680_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_680 = garageId_Garages_680;
  let licensePlate_Cars_680 = "licensePlate_Cars_680_" + Math.floor(Math.random()*1000);
  let make_Cars_680 = "make_Cars_680_" + Math.floor(Math.random()*1000);
  let mileage_Cars_680 = Math.floor(Math.random() * 1000000);
  let model_Cars_680 = "model_Cars_680_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_680 = customerId_Customers_680;
  let vin_Cars_680 = "vin_Cars_680_" + Math.floor(Math.random()*1000);
  let year_Cars_680 = Math.floor(Math.random() * 1000000);
  let res_Cars_680 = createCar(color_Cars_680, description_Cars_680, homeGarageId_Cars_680, licensePlate_Cars_680, make_Cars_680, mileage_Cars_680, model_Cars_680, ownerCustomerId_Cars_680, vin_Cars_680, year_Cars_680);
  if (res_Cars_680 && res_Cars_680.status >= 200 && res_Cars_680.status < 300) {
      verifyCarsExists(vin_Cars_680);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating PeriodicMaintenance
  let carVin_PeriodicMaintenance_680 = "carVin_PeriodicMaintenance_680_" + Math.floor(Math.random()*1000);
  let description_PeriodicMaintenance_680 = "description_PeriodicMaintenance_680_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_680 = garageId_Garages_680;
  let intervalKm_PeriodicMaintenance_680 = Math.floor(Math.random() * 1000000);
  let intervalMonths_PeriodicMaintenance_680 = Math.floor(Math.random() * 1000000);
  let planType_PeriodicMaintenance_680 = "planType_PeriodicMaintenance_680_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_680 = "pmId_PeriodicMaintenance_680_" + Math.floor(Math.random()*1000);
  let schedule_PeriodicMaintenance_680 = {};
  let status_PeriodicMaintenance_680 = "open";
  let tasks_PeriodicMaintenance_680 = [];
  let res_PeriodicMaintenance_680 = createPMPlan(carVin_PeriodicMaintenance_680, description_PeriodicMaintenance_680, garageId_PeriodicMaintenance_680, intervalKm_PeriodicMaintenance_680, intervalMonths_PeriodicMaintenance_680, planType_PeriodicMaintenance_680, pmId_PeriodicMaintenance_680, schedule_PeriodicMaintenance_680, status_PeriodicMaintenance_680, tasks_PeriodicMaintenance_680);
  if (res_PeriodicMaintenance_680 && res_PeriodicMaintenance_680.status >= 200 && res_PeriodicMaintenance_680.status < 300) {
      verifyPeriodicMaintenanceExists(pmId_PeriodicMaintenance_680);
  } else {
      bp.log.error("Failed to create PeriodicMaintenance, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PeriodicMaintenance
  deletePMPlan(pmId_PeriodicMaintenance_680);
  verifyPeriodicMaintenanceDoesNotExist(carVin_PeriodicMaintenance_680, description_PeriodicMaintenance_680, garageId_PeriodicMaintenance_680, intervalKm_PeriodicMaintenance_680, intervalMonths_PeriodicMaintenance_680, planType_PeriodicMaintenance_680, pmId_PeriodicMaintenance_680, schedule_PeriodicMaintenance_680, status_PeriodicMaintenance_680, tasks_PeriodicMaintenance_680);

  // -> Deleting Cars
  deleteCar(vin_Cars_680);
  verifyCarsDoesNotExist(color_Cars_680, description_Cars_680, homeGarageId_Cars_680, licensePlate_Cars_680, make_Cars_680, mileage_Cars_680, model_Cars_680, ownerCustomerId_Cars_680, vin_Cars_680, year_Cars_680);

  // -> Deleting Customers
  deleteCustomer(customerId_Customers_680);
  verifyCustomersDoesNotExist(customerId_Customers_680, description_Customers_680, email_Customers_680, fullName_Customers_680, name_Customers_680, phone_Customers_680, preferredGarageId_Customers_680, type_Customers_680);

});

// Story: Deep Chain Customers_Cars_RepairOrders (Self-Contained)
bthread("chain:Customers_Cars_RepairOrders", function () {
  // -> Creating Customers
  let customerId_Customers_780 = "customerId_Customers_780_" + Math.floor(Math.random()*1000);
  let description_Customers_780 = "description_Customers_780_" + Math.floor(Math.random()*1000);
  let email_Customers_780 = "email_Customers_780_" + Math.floor(Math.random()*1000);
  let fullName_Customers_780 = "fullName_Customers_780_" + Math.floor(Math.random()*1000);
  let name_Customers_780 = "name_Customers_780_" + Math.floor(Math.random()*1000);
  let phone_Customers_780 = "phone_Customers_780_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_780 = "preferredGarageId_Customers_780_" + Math.floor(Math.random()*1000);
  let type_Customers_780 = "type_Customers_780_" + Math.floor(Math.random()*1000);
  let res_Customers_780 = createCustomer(customerId_Customers_780, description_Customers_780, email_Customers_780, fullName_Customers_780, name_Customers_780, phone_Customers_780, preferredGarageId_Customers_780, type_Customers_780);
  if (res_Customers_780 && res_Customers_780.status >= 200 && res_Customers_780.status < 300) {
      verifyCustomersExists(customerId_Customers_780);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Chains
  let active_Chains_780 = true;
  let chainId_Chains_780 = "chainId_Chains_780_" + Math.floor(Math.random()*1000);
  let description_Chains_780 = "description_Chains_780_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_780 = {};
  let name_Chains_780 = "name_Chains_780_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_780 = "supportEmail_Chains_780_" + Math.floor(Math.random()*1000);
  let res_Chains_780 = createChain(active_Chains_780, chainId_Chains_780, description_Chains_780, hqAddress_Chains_780, name_Chains_780, supportEmail_Chains_780);
  if (res_Chains_780 && res_Chains_780.status >= 200 && res_Chains_780.status < 300) {
      verifyChainsExists(chainId_Chains_780);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_780 = true;
  let address_Garages_780 = {};
  let bayCount_Garages_780 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_780 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_780 = chainId_Chains_780;
  let description_Garages_780 = "description_Garages_780_" + Math.floor(Math.random()*1000);
  let garageId_Garages_780 = "garageId_Garages_780_" + Math.floor(Math.random()*1000);
  let location_Garages_780 = {};
  let name_Garages_780 = "name_Garages_780_" + Math.floor(Math.random()*1000);
  let phone_Garages_780 = "phone_Garages_780_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_780 = [];
  let res_Garages_780 = createGarage(active_Garages_780, address_Garages_780, bayCount_Garages_780, capacity_Garages_780, chainId_Garages_780, description_Garages_780, garageId_Garages_780, location_Garages_780, name_Garages_780, phone_Garages_780, servicesOffered_Garages_780);
  if (res_Garages_780 && res_Garages_780.status >= 200 && res_Garages_780.status < 300) {
      verifyGaragesExists(garageId_Garages_780);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_780 = "color_Cars_780_" + Math.floor(Math.random()*1000);
  let description_Cars_780 = "description_Cars_780_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_780 = garageId_Garages_780;
  let licensePlate_Cars_780 = "licensePlate_Cars_780_" + Math.floor(Math.random()*1000);
  let make_Cars_780 = "make_Cars_780_" + Math.floor(Math.random()*1000);
  let mileage_Cars_780 = Math.floor(Math.random() * 1000000);
  let model_Cars_780 = "model_Cars_780_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_780 = customerId_Customers_780;
  let vin_Cars_780 = "vin_Cars_780_" + Math.floor(Math.random()*1000);
  let year_Cars_780 = Math.floor(Math.random() * 1000000);
  let res_Cars_780 = createCar(color_Cars_780, description_Cars_780, homeGarageId_Cars_780, licensePlate_Cars_780, make_Cars_780, mileage_Cars_780, model_Cars_780, ownerCustomerId_Cars_780, vin_Cars_780, year_Cars_780);
  if (res_Cars_780 && res_Cars_780.status >= 200 && res_Cars_780.status < 300) {
      verifyCarsExists(vin_Cars_780);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating RepairOrders
  let carVin_RepairOrders_780 = "carVin_RepairOrders_780_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_780 = "complaint_RepairOrders_780_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_780 = customerId_Customers_780;
  let description_RepairOrders_780 = "description_RepairOrders_780_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_780 = garageId_Garages_780;
  let roId_RepairOrders_780 = "roId_RepairOrders_780_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_780 = "open";
  let res_RepairOrders_780 = createRepairOrder(carVin_RepairOrders_780, complaint_RepairOrders_780, customerId_RepairOrders_780, description_RepairOrders_780, garageId_RepairOrders_780, roId_RepairOrders_780, status_RepairOrders_780);
  if (res_RepairOrders_780 && res_RepairOrders_780.status >= 200 && res_RepairOrders_780.status < 300) {
      verifyRepairOrdersExists(roId_RepairOrders_780);
  } else {
      bp.log.error("Failed to create RepairOrders, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting RepairOrders
  deleteRepairOrder(roId_RepairOrders_780);
  verifyRepairOrdersDoesNotExist(carVin_RepairOrders_780, complaint_RepairOrders_780, customerId_RepairOrders_780, description_RepairOrders_780, garageId_RepairOrders_780, roId_RepairOrders_780, status_RepairOrders_780);

  // -> Deleting Cars
  deleteCar(vin_Cars_780);
  verifyCarsDoesNotExist(color_Cars_780, description_Cars_780, homeGarageId_Cars_780, licensePlate_Cars_780, make_Cars_780, mileage_Cars_780, model_Cars_780, ownerCustomerId_Cars_780, vin_Cars_780, year_Cars_780);

  // -> Deleting Customers
  deleteCustomer(customerId_Customers_780);
  verifyCustomersDoesNotExist(customerId_Customers_780, description_Customers_780, email_Customers_780, fullName_Customers_780, name_Customers_780, phone_Customers_780, preferredGarageId_Customers_780, type_Customers_780);

});

// Story: Deep Chain Customers_RepairOrders (Self-Contained)
bthread("chain:Customers_RepairOrders", function () {
  // -> Creating Customers
  let customerId_Customers_880 = "customerId_Customers_880_" + Math.floor(Math.random()*1000);
  let description_Customers_880 = "description_Customers_880_" + Math.floor(Math.random()*1000);
  let email_Customers_880 = "email_Customers_880_" + Math.floor(Math.random()*1000);
  let fullName_Customers_880 = "fullName_Customers_880_" + Math.floor(Math.random()*1000);
  let name_Customers_880 = "name_Customers_880_" + Math.floor(Math.random()*1000);
  let phone_Customers_880 = "phone_Customers_880_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_880 = "preferredGarageId_Customers_880_" + Math.floor(Math.random()*1000);
  let type_Customers_880 = "type_Customers_880_" + Math.floor(Math.random()*1000);
  let res_Customers_880 = createCustomer(customerId_Customers_880, description_Customers_880, email_Customers_880, fullName_Customers_880, name_Customers_880, phone_Customers_880, preferredGarageId_Customers_880, type_Customers_880);
  if (res_Customers_880 && res_Customers_880.status >= 200 && res_Customers_880.status < 300) {
      verifyCustomersExists(customerId_Customers_880);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Chains
  let active_Chains_880 = true;
  let chainId_Chains_880 = "chainId_Chains_880_" + Math.floor(Math.random()*1000);
  let description_Chains_880 = "description_Chains_880_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_880 = {};
  let name_Chains_880 = "name_Chains_880_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_880 = "supportEmail_Chains_880_" + Math.floor(Math.random()*1000);
  let res_Chains_880 = createChain(active_Chains_880, chainId_Chains_880, description_Chains_880, hqAddress_Chains_880, name_Chains_880, supportEmail_Chains_880);
  if (res_Chains_880 && res_Chains_880.status >= 200 && res_Chains_880.status < 300) {
      verifyChainsExists(chainId_Chains_880);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_880 = true;
  let address_Garages_880 = {};
  let bayCount_Garages_880 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_880 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_880 = chainId_Chains_880;
  let description_Garages_880 = "description_Garages_880_" + Math.floor(Math.random()*1000);
  let garageId_Garages_880 = "garageId_Garages_880_" + Math.floor(Math.random()*1000);
  let location_Garages_880 = {};
  let name_Garages_880 = "name_Garages_880_" + Math.floor(Math.random()*1000);
  let phone_Garages_880 = "phone_Garages_880_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_880 = [];
  let res_Garages_880 = createGarage(active_Garages_880, address_Garages_880, bayCount_Garages_880, capacity_Garages_880, chainId_Garages_880, description_Garages_880, garageId_Garages_880, location_Garages_880, name_Garages_880, phone_Garages_880, servicesOffered_Garages_880);
  if (res_Garages_880 && res_Garages_880.status >= 200 && res_Garages_880.status < 300) {
      verifyGaragesExists(garageId_Garages_880);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_880 = "color_Cars_880_" + Math.floor(Math.random()*1000);
  let description_Cars_880 = "description_Cars_880_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_880 = garageId_Garages_880;
  let licensePlate_Cars_880 = "licensePlate_Cars_880_" + Math.floor(Math.random()*1000);
  let make_Cars_880 = "make_Cars_880_" + Math.floor(Math.random()*1000);
  let mileage_Cars_880 = Math.floor(Math.random() * 1000000);
  let model_Cars_880 = "model_Cars_880_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_880 = customerId_Customers_880;
  let vin_Cars_880 = "vin_Cars_880_" + Math.floor(Math.random()*1000);
  let year_Cars_880 = Math.floor(Math.random() * 1000000);
  let res_Cars_880 = createCar(color_Cars_880, description_Cars_880, homeGarageId_Cars_880, licensePlate_Cars_880, make_Cars_880, mileage_Cars_880, model_Cars_880, ownerCustomerId_Cars_880, vin_Cars_880, year_Cars_880);
  if (res_Cars_880 && res_Cars_880.status >= 200 && res_Cars_880.status < 300) {
      verifyCarsExists(vin_Cars_880);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating RepairOrders
  let carVin_RepairOrders_880 = "carVin_RepairOrders_880_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_880 = "complaint_RepairOrders_880_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_880 = customerId_Customers_880;
  let description_RepairOrders_880 = "description_RepairOrders_880_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_880 = garageId_Garages_880;
  let roId_RepairOrders_880 = "roId_RepairOrders_880_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_880 = "open";
  let res_RepairOrders_880 = createRepairOrder(carVin_RepairOrders_880, complaint_RepairOrders_880, customerId_RepairOrders_880, description_RepairOrders_880, garageId_RepairOrders_880, roId_RepairOrders_880, status_RepairOrders_880);
  if (res_RepairOrders_880 && res_RepairOrders_880.status >= 200 && res_RepairOrders_880.status < 300) {
      verifyRepairOrdersExists(roId_RepairOrders_880);
  } else {
      bp.log.error("Failed to create RepairOrders, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting RepairOrders
  deleteRepairOrder(roId_RepairOrders_880);
  verifyRepairOrdersDoesNotExist(carVin_RepairOrders_880, complaint_RepairOrders_880, customerId_RepairOrders_880, description_RepairOrders_880, garageId_RepairOrders_880, roId_RepairOrders_880, status_RepairOrders_880);

  // -> Deleting Customers
  deleteCustomer(customerId_Customers_880);
  verifyCustomersDoesNotExist(customerId_Customers_880, description_Customers_880, email_Customers_880, fullName_Customers_880, name_Customers_880, phone_Customers_880, preferredGarageId_Customers_880, type_Customers_880);

});

// Story: Deep Chain Garages_Cars_PeriodicMaintenance (Self-Contained)
bthread("chain:Garages_Cars_PeriodicMaintenance", function () {
  // -> Creating Chains
  let active_Chains_980 = true;
  let chainId_Chains_980 = "chainId_Chains_980_" + Math.floor(Math.random()*1000);
  let description_Chains_980 = "description_Chains_980_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_980 = {};
  let name_Chains_980 = "name_Chains_980_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_980 = "supportEmail_Chains_980_" + Math.floor(Math.random()*1000);
  let res_Chains_980 = createChain(active_Chains_980, chainId_Chains_980, description_Chains_980, hqAddress_Chains_980, name_Chains_980, supportEmail_Chains_980);
  if (res_Chains_980 && res_Chains_980.status >= 200 && res_Chains_980.status < 300) {
      verifyChainsExists(chainId_Chains_980);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_980 = true;
  let address_Garages_980 = {};
  let bayCount_Garages_980 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_980 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_980 = chainId_Chains_980;
  let description_Garages_980 = "description_Garages_980_" + Math.floor(Math.random()*1000);
  let garageId_Garages_980 = "garageId_Garages_980_" + Math.floor(Math.random()*1000);
  let location_Garages_980 = {};
  let name_Garages_980 = "name_Garages_980_" + Math.floor(Math.random()*1000);
  let phone_Garages_980 = "phone_Garages_980_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_980 = [];
  let res_Garages_980 = createGarage(active_Garages_980, address_Garages_980, bayCount_Garages_980, capacity_Garages_980, chainId_Garages_980, description_Garages_980, garageId_Garages_980, location_Garages_980, name_Garages_980, phone_Garages_980, servicesOffered_Garages_980);
  if (res_Garages_980 && res_Garages_980.status >= 200 && res_Garages_980.status < 300) {
      verifyGaragesExists(garageId_Garages_980);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Customers
  let customerId_Customers_980 = "customerId_Customers_980_" + Math.floor(Math.random()*1000);
  let description_Customers_980 = "description_Customers_980_" + Math.floor(Math.random()*1000);
  let email_Customers_980 = "email_Customers_980_" + Math.floor(Math.random()*1000);
  let fullName_Customers_980 = "fullName_Customers_980_" + Math.floor(Math.random()*1000);
  let name_Customers_980 = "name_Customers_980_" + Math.floor(Math.random()*1000);
  let phone_Customers_980 = "phone_Customers_980_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_980 = "preferredGarageId_Customers_980_" + Math.floor(Math.random()*1000);
  let type_Customers_980 = "type_Customers_980_" + Math.floor(Math.random()*1000);
  let res_Customers_980 = createCustomer(customerId_Customers_980, description_Customers_980, email_Customers_980, fullName_Customers_980, name_Customers_980, phone_Customers_980, preferredGarageId_Customers_980, type_Customers_980);
  if (res_Customers_980 && res_Customers_980.status >= 200 && res_Customers_980.status < 300) {
      verifyCustomersExists(customerId_Customers_980);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_980 = "color_Cars_980_" + Math.floor(Math.random()*1000);
  let description_Cars_980 = "description_Cars_980_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_980 = garageId_Garages_980;
  let licensePlate_Cars_980 = "licensePlate_Cars_980_" + Math.floor(Math.random()*1000);
  let make_Cars_980 = "make_Cars_980_" + Math.floor(Math.random()*1000);
  let mileage_Cars_980 = Math.floor(Math.random() * 1000000);
  let model_Cars_980 = "model_Cars_980_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_980 = customerId_Customers_980;
  let vin_Cars_980 = "vin_Cars_980_" + Math.floor(Math.random()*1000);
  let year_Cars_980 = Math.floor(Math.random() * 1000000);
  let res_Cars_980 = createCar(color_Cars_980, description_Cars_980, homeGarageId_Cars_980, licensePlate_Cars_980, make_Cars_980, mileage_Cars_980, model_Cars_980, ownerCustomerId_Cars_980, vin_Cars_980, year_Cars_980);
  if (res_Cars_980 && res_Cars_980.status >= 200 && res_Cars_980.status < 300) {
      verifyCarsExists(vin_Cars_980);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating PeriodicMaintenance
  let carVin_PeriodicMaintenance_980 = "carVin_PeriodicMaintenance_980_" + Math.floor(Math.random()*1000);
  let description_PeriodicMaintenance_980 = "description_PeriodicMaintenance_980_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_980 = garageId_Garages_980;
  let intervalKm_PeriodicMaintenance_980 = Math.floor(Math.random() * 1000000);
  let intervalMonths_PeriodicMaintenance_980 = Math.floor(Math.random() * 1000000);
  let planType_PeriodicMaintenance_980 = "planType_PeriodicMaintenance_980_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_980 = "pmId_PeriodicMaintenance_980_" + Math.floor(Math.random()*1000);
  let schedule_PeriodicMaintenance_980 = {};
  let status_PeriodicMaintenance_980 = "open";
  let tasks_PeriodicMaintenance_980 = [];
  let res_PeriodicMaintenance_980 = createPMPlan(carVin_PeriodicMaintenance_980, description_PeriodicMaintenance_980, garageId_PeriodicMaintenance_980, intervalKm_PeriodicMaintenance_980, intervalMonths_PeriodicMaintenance_980, planType_PeriodicMaintenance_980, pmId_PeriodicMaintenance_980, schedule_PeriodicMaintenance_980, status_PeriodicMaintenance_980, tasks_PeriodicMaintenance_980);
  if (res_PeriodicMaintenance_980 && res_PeriodicMaintenance_980.status >= 200 && res_PeriodicMaintenance_980.status < 300) {
      verifyPeriodicMaintenanceExists(pmId_PeriodicMaintenance_980);
  } else {
      bp.log.error("Failed to create PeriodicMaintenance, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PeriodicMaintenance
  deletePMPlan(pmId_PeriodicMaintenance_980);
  verifyPeriodicMaintenanceDoesNotExist(carVin_PeriodicMaintenance_980, description_PeriodicMaintenance_980, garageId_PeriodicMaintenance_980, intervalKm_PeriodicMaintenance_980, intervalMonths_PeriodicMaintenance_980, planType_PeriodicMaintenance_980, pmId_PeriodicMaintenance_980, schedule_PeriodicMaintenance_980, status_PeriodicMaintenance_980, tasks_PeriodicMaintenance_980);

  // -> Deleting Cars
  deleteCar(vin_Cars_980);
  verifyCarsDoesNotExist(color_Cars_980, description_Cars_980, homeGarageId_Cars_980, licensePlate_Cars_980, make_Cars_980, mileage_Cars_980, model_Cars_980, ownerCustomerId_Cars_980, vin_Cars_980, year_Cars_980);

  // -> Deleting Garages
  deleteGarage(garageId_Garages_980);
  verifyGaragesDoesNotExist(active_Garages_980, address_Garages_980, bayCount_Garages_980, capacity_Garages_980, chainId_Garages_980, description_Garages_980, garageId_Garages_980, location_Garages_980, name_Garages_980, phone_Garages_980, servicesOffered_Garages_980);

});

// Story: Deep Chain Garages_Cars_RepairOrders (Self-Contained)
bthread("chain:Garages_Cars_RepairOrders", function () {
  // -> Creating Chains
  let active_Chains_1080 = true;
  let chainId_Chains_1080 = "chainId_Chains_1080_" + Math.floor(Math.random()*1000);
  let description_Chains_1080 = "description_Chains_1080_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_1080 = {};
  let name_Chains_1080 = "name_Chains_1080_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_1080 = "supportEmail_Chains_1080_" + Math.floor(Math.random()*1000);
  let res_Chains_1080 = createChain(active_Chains_1080, chainId_Chains_1080, description_Chains_1080, hqAddress_Chains_1080, name_Chains_1080, supportEmail_Chains_1080);
  if (res_Chains_1080 && res_Chains_1080.status >= 200 && res_Chains_1080.status < 300) {
      verifyChainsExists(chainId_Chains_1080);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_1080 = true;
  let address_Garages_1080 = {};
  let bayCount_Garages_1080 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_1080 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_1080 = chainId_Chains_1080;
  let description_Garages_1080 = "description_Garages_1080_" + Math.floor(Math.random()*1000);
  let garageId_Garages_1080 = "garageId_Garages_1080_" + Math.floor(Math.random()*1000);
  let location_Garages_1080 = {};
  let name_Garages_1080 = "name_Garages_1080_" + Math.floor(Math.random()*1000);
  let phone_Garages_1080 = "phone_Garages_1080_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_1080 = [];
  let res_Garages_1080 = createGarage(active_Garages_1080, address_Garages_1080, bayCount_Garages_1080, capacity_Garages_1080, chainId_Garages_1080, description_Garages_1080, garageId_Garages_1080, location_Garages_1080, name_Garages_1080, phone_Garages_1080, servicesOffered_Garages_1080);
  if (res_Garages_1080 && res_Garages_1080.status >= 200 && res_Garages_1080.status < 300) {
      verifyGaragesExists(garageId_Garages_1080);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Customers
  let customerId_Customers_1080 = "customerId_Customers_1080_" + Math.floor(Math.random()*1000);
  let description_Customers_1080 = "description_Customers_1080_" + Math.floor(Math.random()*1000);
  let email_Customers_1080 = "email_Customers_1080_" + Math.floor(Math.random()*1000);
  let fullName_Customers_1080 = "fullName_Customers_1080_" + Math.floor(Math.random()*1000);
  let name_Customers_1080 = "name_Customers_1080_" + Math.floor(Math.random()*1000);
  let phone_Customers_1080 = "phone_Customers_1080_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_1080 = "preferredGarageId_Customers_1080_" + Math.floor(Math.random()*1000);
  let type_Customers_1080 = "type_Customers_1080_" + Math.floor(Math.random()*1000);
  let res_Customers_1080 = createCustomer(customerId_Customers_1080, description_Customers_1080, email_Customers_1080, fullName_Customers_1080, name_Customers_1080, phone_Customers_1080, preferredGarageId_Customers_1080, type_Customers_1080);
  if (res_Customers_1080 && res_Customers_1080.status >= 200 && res_Customers_1080.status < 300) {
      verifyCustomersExists(customerId_Customers_1080);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_1080 = "color_Cars_1080_" + Math.floor(Math.random()*1000);
  let description_Cars_1080 = "description_Cars_1080_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_1080 = garageId_Garages_1080;
  let licensePlate_Cars_1080 = "licensePlate_Cars_1080_" + Math.floor(Math.random()*1000);
  let make_Cars_1080 = "make_Cars_1080_" + Math.floor(Math.random()*1000);
  let mileage_Cars_1080 = Math.floor(Math.random() * 1000000);
  let model_Cars_1080 = "model_Cars_1080_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_1080 = customerId_Customers_1080;
  let vin_Cars_1080 = "vin_Cars_1080_" + Math.floor(Math.random()*1000);
  let year_Cars_1080 = Math.floor(Math.random() * 1000000);
  let res_Cars_1080 = createCar(color_Cars_1080, description_Cars_1080, homeGarageId_Cars_1080, licensePlate_Cars_1080, make_Cars_1080, mileage_Cars_1080, model_Cars_1080, ownerCustomerId_Cars_1080, vin_Cars_1080, year_Cars_1080);
  if (res_Cars_1080 && res_Cars_1080.status >= 200 && res_Cars_1080.status < 300) {
      verifyCarsExists(vin_Cars_1080);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating RepairOrders
  let carVin_RepairOrders_1080 = "carVin_RepairOrders_1080_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_1080 = "complaint_RepairOrders_1080_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_1080 = customerId_Customers_1080;
  let description_RepairOrders_1080 = "description_RepairOrders_1080_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_1080 = garageId_Garages_1080;
  let roId_RepairOrders_1080 = "roId_RepairOrders_1080_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_1080 = "open";
  let res_RepairOrders_1080 = createRepairOrder(carVin_RepairOrders_1080, complaint_RepairOrders_1080, customerId_RepairOrders_1080, description_RepairOrders_1080, garageId_RepairOrders_1080, roId_RepairOrders_1080, status_RepairOrders_1080);
  if (res_RepairOrders_1080 && res_RepairOrders_1080.status >= 200 && res_RepairOrders_1080.status < 300) {
      verifyRepairOrdersExists(roId_RepairOrders_1080);
  } else {
      bp.log.error("Failed to create RepairOrders, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting RepairOrders
  deleteRepairOrder(roId_RepairOrders_1080);
  verifyRepairOrdersDoesNotExist(carVin_RepairOrders_1080, complaint_RepairOrders_1080, customerId_RepairOrders_1080, description_RepairOrders_1080, garageId_RepairOrders_1080, roId_RepairOrders_1080, status_RepairOrders_1080);

  // -> Deleting Cars
  deleteCar(vin_Cars_1080);
  verifyCarsDoesNotExist(color_Cars_1080, description_Cars_1080, homeGarageId_Cars_1080, licensePlate_Cars_1080, make_Cars_1080, mileage_Cars_1080, model_Cars_1080, ownerCustomerId_Cars_1080, vin_Cars_1080, year_Cars_1080);

  // -> Deleting Garages
  deleteGarage(garageId_Garages_1080);
  verifyGaragesDoesNotExist(active_Garages_1080, address_Garages_1080, bayCount_Garages_1080, capacity_Garages_1080, chainId_Garages_1080, description_Garages_1080, garageId_Garages_1080, location_Garages_1080, name_Garages_1080, phone_Garages_1080, servicesOffered_Garages_1080);

});

// Story: Deep Chain Garages_PeriodicMaintenance (Self-Contained)
bthread("chain:Garages_PeriodicMaintenance", function () {
  // -> Creating Chains
  let active_Chains_1180 = true;
  let chainId_Chains_1180 = "chainId_Chains_1180_" + Math.floor(Math.random()*1000);
  let description_Chains_1180 = "description_Chains_1180_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_1180 = {};
  let name_Chains_1180 = "name_Chains_1180_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_1180 = "supportEmail_Chains_1180_" + Math.floor(Math.random()*1000);
  let res_Chains_1180 = createChain(active_Chains_1180, chainId_Chains_1180, description_Chains_1180, hqAddress_Chains_1180, name_Chains_1180, supportEmail_Chains_1180);
  if (res_Chains_1180 && res_Chains_1180.status >= 200 && res_Chains_1180.status < 300) {
      verifyChainsExists(chainId_Chains_1180);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_1180 = true;
  let address_Garages_1180 = {};
  let bayCount_Garages_1180 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_1180 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_1180 = chainId_Chains_1180;
  let description_Garages_1180 = "description_Garages_1180_" + Math.floor(Math.random()*1000);
  let garageId_Garages_1180 = "garageId_Garages_1180_" + Math.floor(Math.random()*1000);
  let location_Garages_1180 = {};
  let name_Garages_1180 = "name_Garages_1180_" + Math.floor(Math.random()*1000);
  let phone_Garages_1180 = "phone_Garages_1180_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_1180 = [];
  let res_Garages_1180 = createGarage(active_Garages_1180, address_Garages_1180, bayCount_Garages_1180, capacity_Garages_1180, chainId_Garages_1180, description_Garages_1180, garageId_Garages_1180, location_Garages_1180, name_Garages_1180, phone_Garages_1180, servicesOffered_Garages_1180);
  if (res_Garages_1180 && res_Garages_1180.status >= 200 && res_Garages_1180.status < 300) {
      verifyGaragesExists(garageId_Garages_1180);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Customers
  let customerId_Customers_1180 = "customerId_Customers_1180_" + Math.floor(Math.random()*1000);
  let description_Customers_1180 = "description_Customers_1180_" + Math.floor(Math.random()*1000);
  let email_Customers_1180 = "email_Customers_1180_" + Math.floor(Math.random()*1000);
  let fullName_Customers_1180 = "fullName_Customers_1180_" + Math.floor(Math.random()*1000);
  let name_Customers_1180 = "name_Customers_1180_" + Math.floor(Math.random()*1000);
  let phone_Customers_1180 = "phone_Customers_1180_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_1180 = "preferredGarageId_Customers_1180_" + Math.floor(Math.random()*1000);
  let type_Customers_1180 = "type_Customers_1180_" + Math.floor(Math.random()*1000);
  let res_Customers_1180 = createCustomer(customerId_Customers_1180, description_Customers_1180, email_Customers_1180, fullName_Customers_1180, name_Customers_1180, phone_Customers_1180, preferredGarageId_Customers_1180, type_Customers_1180);
  if (res_Customers_1180 && res_Customers_1180.status >= 200 && res_Customers_1180.status < 300) {
      verifyCustomersExists(customerId_Customers_1180);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_1180 = "color_Cars_1180_" + Math.floor(Math.random()*1000);
  let description_Cars_1180 = "description_Cars_1180_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_1180 = garageId_Garages_1180;
  let licensePlate_Cars_1180 = "licensePlate_Cars_1180_" + Math.floor(Math.random()*1000);
  let make_Cars_1180 = "make_Cars_1180_" + Math.floor(Math.random()*1000);
  let mileage_Cars_1180 = Math.floor(Math.random() * 1000000);
  let model_Cars_1180 = "model_Cars_1180_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_1180 = customerId_Customers_1180;
  let vin_Cars_1180 = "vin_Cars_1180_" + Math.floor(Math.random()*1000);
  let year_Cars_1180 = Math.floor(Math.random() * 1000000);
  let res_Cars_1180 = createCar(color_Cars_1180, description_Cars_1180, homeGarageId_Cars_1180, licensePlate_Cars_1180, make_Cars_1180, mileage_Cars_1180, model_Cars_1180, ownerCustomerId_Cars_1180, vin_Cars_1180, year_Cars_1180);
  if (res_Cars_1180 && res_Cars_1180.status >= 200 && res_Cars_1180.status < 300) {
      verifyCarsExists(vin_Cars_1180);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating PeriodicMaintenance
  let carVin_PeriodicMaintenance_1180 = "carVin_PeriodicMaintenance_1180_" + Math.floor(Math.random()*1000);
  let description_PeriodicMaintenance_1180 = "description_PeriodicMaintenance_1180_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_1180 = garageId_Garages_1180;
  let intervalKm_PeriodicMaintenance_1180 = Math.floor(Math.random() * 1000000);
  let intervalMonths_PeriodicMaintenance_1180 = Math.floor(Math.random() * 1000000);
  let planType_PeriodicMaintenance_1180 = "planType_PeriodicMaintenance_1180_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_1180 = "pmId_PeriodicMaintenance_1180_" + Math.floor(Math.random()*1000);
  let schedule_PeriodicMaintenance_1180 = {};
  let status_PeriodicMaintenance_1180 = "open";
  let tasks_PeriodicMaintenance_1180 = [];
  let res_PeriodicMaintenance_1180 = createPMPlan(carVin_PeriodicMaintenance_1180, description_PeriodicMaintenance_1180, garageId_PeriodicMaintenance_1180, intervalKm_PeriodicMaintenance_1180, intervalMonths_PeriodicMaintenance_1180, planType_PeriodicMaintenance_1180, pmId_PeriodicMaintenance_1180, schedule_PeriodicMaintenance_1180, status_PeriodicMaintenance_1180, tasks_PeriodicMaintenance_1180);
  if (res_PeriodicMaintenance_1180 && res_PeriodicMaintenance_1180.status >= 200 && res_PeriodicMaintenance_1180.status < 300) {
      verifyPeriodicMaintenanceExists(pmId_PeriodicMaintenance_1180);
  } else {
      bp.log.error("Failed to create PeriodicMaintenance, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PeriodicMaintenance
  deletePMPlan(pmId_PeriodicMaintenance_1180);
  verifyPeriodicMaintenanceDoesNotExist(carVin_PeriodicMaintenance_1180, description_PeriodicMaintenance_1180, garageId_PeriodicMaintenance_1180, intervalKm_PeriodicMaintenance_1180, intervalMonths_PeriodicMaintenance_1180, planType_PeriodicMaintenance_1180, pmId_PeriodicMaintenance_1180, schedule_PeriodicMaintenance_1180, status_PeriodicMaintenance_1180, tasks_PeriodicMaintenance_1180);

  // -> Deleting Garages
  deleteGarage(garageId_Garages_1180);
  verifyGaragesDoesNotExist(active_Garages_1180, address_Garages_1180, bayCount_Garages_1180, capacity_Garages_1180, chainId_Garages_1180, description_Garages_1180, garageId_Garages_1180, location_Garages_1180, name_Garages_1180, phone_Garages_1180, servicesOffered_Garages_1180);

});

// Story: Deep Chain Garages_RepairOrders (Self-Contained)
bthread("chain:Garages_RepairOrders", function () {
  // -> Creating Chains
  let active_Chains_1280 = true;
  let chainId_Chains_1280 = "chainId_Chains_1280_" + Math.floor(Math.random()*1000);
  let description_Chains_1280 = "description_Chains_1280_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_1280 = {};
  let name_Chains_1280 = "name_Chains_1280_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_1280 = "supportEmail_Chains_1280_" + Math.floor(Math.random()*1000);
  let res_Chains_1280 = createChain(active_Chains_1280, chainId_Chains_1280, description_Chains_1280, hqAddress_Chains_1280, name_Chains_1280, supportEmail_Chains_1280);
  if (res_Chains_1280 && res_Chains_1280.status >= 200 && res_Chains_1280.status < 300) {
      verifyChainsExists(chainId_Chains_1280);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_1280 = true;
  let address_Garages_1280 = {};
  let bayCount_Garages_1280 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_1280 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_1280 = chainId_Chains_1280;
  let description_Garages_1280 = "description_Garages_1280_" + Math.floor(Math.random()*1000);
  let garageId_Garages_1280 = "garageId_Garages_1280_" + Math.floor(Math.random()*1000);
  let location_Garages_1280 = {};
  let name_Garages_1280 = "name_Garages_1280_" + Math.floor(Math.random()*1000);
  let phone_Garages_1280 = "phone_Garages_1280_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_1280 = [];
  let res_Garages_1280 = createGarage(active_Garages_1280, address_Garages_1280, bayCount_Garages_1280, capacity_Garages_1280, chainId_Garages_1280, description_Garages_1280, garageId_Garages_1280, location_Garages_1280, name_Garages_1280, phone_Garages_1280, servicesOffered_Garages_1280);
  if (res_Garages_1280 && res_Garages_1280.status >= 200 && res_Garages_1280.status < 300) {
      verifyGaragesExists(garageId_Garages_1280);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Customers
  let customerId_Customers_1280 = "customerId_Customers_1280_" + Math.floor(Math.random()*1000);
  let description_Customers_1280 = "description_Customers_1280_" + Math.floor(Math.random()*1000);
  let email_Customers_1280 = "email_Customers_1280_" + Math.floor(Math.random()*1000);
  let fullName_Customers_1280 = "fullName_Customers_1280_" + Math.floor(Math.random()*1000);
  let name_Customers_1280 = "name_Customers_1280_" + Math.floor(Math.random()*1000);
  let phone_Customers_1280 = "phone_Customers_1280_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_1280 = "preferredGarageId_Customers_1280_" + Math.floor(Math.random()*1000);
  let type_Customers_1280 = "type_Customers_1280_" + Math.floor(Math.random()*1000);
  let res_Customers_1280 = createCustomer(customerId_Customers_1280, description_Customers_1280, email_Customers_1280, fullName_Customers_1280, name_Customers_1280, phone_Customers_1280, preferredGarageId_Customers_1280, type_Customers_1280);
  if (res_Customers_1280 && res_Customers_1280.status >= 200 && res_Customers_1280.status < 300) {
      verifyCustomersExists(customerId_Customers_1280);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_1280 = "color_Cars_1280_" + Math.floor(Math.random()*1000);
  let description_Cars_1280 = "description_Cars_1280_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_1280 = garageId_Garages_1280;
  let licensePlate_Cars_1280 = "licensePlate_Cars_1280_" + Math.floor(Math.random()*1000);
  let make_Cars_1280 = "make_Cars_1280_" + Math.floor(Math.random()*1000);
  let mileage_Cars_1280 = Math.floor(Math.random() * 1000000);
  let model_Cars_1280 = "model_Cars_1280_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_1280 = customerId_Customers_1280;
  let vin_Cars_1280 = "vin_Cars_1280_" + Math.floor(Math.random()*1000);
  let year_Cars_1280 = Math.floor(Math.random() * 1000000);
  let res_Cars_1280 = createCar(color_Cars_1280, description_Cars_1280, homeGarageId_Cars_1280, licensePlate_Cars_1280, make_Cars_1280, mileage_Cars_1280, model_Cars_1280, ownerCustomerId_Cars_1280, vin_Cars_1280, year_Cars_1280);
  if (res_Cars_1280 && res_Cars_1280.status >= 200 && res_Cars_1280.status < 300) {
      verifyCarsExists(vin_Cars_1280);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating RepairOrders
  let carVin_RepairOrders_1280 = "carVin_RepairOrders_1280_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_1280 = "complaint_RepairOrders_1280_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_1280 = customerId_Customers_1280;
  let description_RepairOrders_1280 = "description_RepairOrders_1280_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_1280 = garageId_Garages_1280;
  let roId_RepairOrders_1280 = "roId_RepairOrders_1280_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_1280 = "open";
  let res_RepairOrders_1280 = createRepairOrder(carVin_RepairOrders_1280, complaint_RepairOrders_1280, customerId_RepairOrders_1280, description_RepairOrders_1280, garageId_RepairOrders_1280, roId_RepairOrders_1280, status_RepairOrders_1280);
  if (res_RepairOrders_1280 && res_RepairOrders_1280.status >= 200 && res_RepairOrders_1280.status < 300) {
      verifyRepairOrdersExists(roId_RepairOrders_1280);
  } else {
      bp.log.error("Failed to create RepairOrders, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting RepairOrders
  deleteRepairOrder(roId_RepairOrders_1280);
  verifyRepairOrdersDoesNotExist(carVin_RepairOrders_1280, complaint_RepairOrders_1280, customerId_RepairOrders_1280, description_RepairOrders_1280, garageId_RepairOrders_1280, roId_RepairOrders_1280, status_RepairOrders_1280);

  // -> Deleting Garages
  deleteGarage(garageId_Garages_1280);
  verifyGaragesDoesNotExist(active_Garages_1280, address_Garages_1280, bayCount_Garages_1280, capacity_Garages_1280, chainId_Garages_1280, description_Garages_1280, garageId_Garages_1280, location_Garages_1280, name_Garages_1280, phone_Garages_1280, servicesOffered_Garages_1280);

});

// Story: Deep Chain Cars_PeriodicMaintenance (Self-Contained)
bthread("chain:Cars_PeriodicMaintenance", function () {
  // -> Creating Customers
  let customerId_Customers_1380 = "customerId_Customers_1380_" + Math.floor(Math.random()*1000);
  let description_Customers_1380 = "description_Customers_1380_" + Math.floor(Math.random()*1000);
  let email_Customers_1380 = "email_Customers_1380_" + Math.floor(Math.random()*1000);
  let fullName_Customers_1380 = "fullName_Customers_1380_" + Math.floor(Math.random()*1000);
  let name_Customers_1380 = "name_Customers_1380_" + Math.floor(Math.random()*1000);
  let phone_Customers_1380 = "phone_Customers_1380_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_1380 = "preferredGarageId_Customers_1380_" + Math.floor(Math.random()*1000);
  let type_Customers_1380 = "type_Customers_1380_" + Math.floor(Math.random()*1000);
  let res_Customers_1380 = createCustomer(customerId_Customers_1380, description_Customers_1380, email_Customers_1380, fullName_Customers_1380, name_Customers_1380, phone_Customers_1380, preferredGarageId_Customers_1380, type_Customers_1380);
  if (res_Customers_1380 && res_Customers_1380.status >= 200 && res_Customers_1380.status < 300) {
      verifyCustomersExists(customerId_Customers_1380);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Chains
  let active_Chains_1380 = true;
  let chainId_Chains_1380 = "chainId_Chains_1380_" + Math.floor(Math.random()*1000);
  let description_Chains_1380 = "description_Chains_1380_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_1380 = {};
  let name_Chains_1380 = "name_Chains_1380_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_1380 = "supportEmail_Chains_1380_" + Math.floor(Math.random()*1000);
  let res_Chains_1380 = createChain(active_Chains_1380, chainId_Chains_1380, description_Chains_1380, hqAddress_Chains_1380, name_Chains_1380, supportEmail_Chains_1380);
  if (res_Chains_1380 && res_Chains_1380.status >= 200 && res_Chains_1380.status < 300) {
      verifyChainsExists(chainId_Chains_1380);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_1380 = true;
  let address_Garages_1380 = {};
  let bayCount_Garages_1380 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_1380 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_1380 = chainId_Chains_1380;
  let description_Garages_1380 = "description_Garages_1380_" + Math.floor(Math.random()*1000);
  let garageId_Garages_1380 = "garageId_Garages_1380_" + Math.floor(Math.random()*1000);
  let location_Garages_1380 = {};
  let name_Garages_1380 = "name_Garages_1380_" + Math.floor(Math.random()*1000);
  let phone_Garages_1380 = "phone_Garages_1380_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_1380 = [];
  let res_Garages_1380 = createGarage(active_Garages_1380, address_Garages_1380, bayCount_Garages_1380, capacity_Garages_1380, chainId_Garages_1380, description_Garages_1380, garageId_Garages_1380, location_Garages_1380, name_Garages_1380, phone_Garages_1380, servicesOffered_Garages_1380);
  if (res_Garages_1380 && res_Garages_1380.status >= 200 && res_Garages_1380.status < 300) {
      verifyGaragesExists(garageId_Garages_1380);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_1380 = "color_Cars_1380_" + Math.floor(Math.random()*1000);
  let description_Cars_1380 = "description_Cars_1380_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_1380 = garageId_Garages_1380;
  let licensePlate_Cars_1380 = "licensePlate_Cars_1380_" + Math.floor(Math.random()*1000);
  let make_Cars_1380 = "make_Cars_1380_" + Math.floor(Math.random()*1000);
  let mileage_Cars_1380 = Math.floor(Math.random() * 1000000);
  let model_Cars_1380 = "model_Cars_1380_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_1380 = customerId_Customers_1380;
  let vin_Cars_1380 = "vin_Cars_1380_" + Math.floor(Math.random()*1000);
  let year_Cars_1380 = Math.floor(Math.random() * 1000000);
  let res_Cars_1380 = createCar(color_Cars_1380, description_Cars_1380, homeGarageId_Cars_1380, licensePlate_Cars_1380, make_Cars_1380, mileage_Cars_1380, model_Cars_1380, ownerCustomerId_Cars_1380, vin_Cars_1380, year_Cars_1380);
  if (res_Cars_1380 && res_Cars_1380.status >= 200 && res_Cars_1380.status < 300) {
      verifyCarsExists(vin_Cars_1380);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating PeriodicMaintenance
  let carVin_PeriodicMaintenance_1380 = "carVin_PeriodicMaintenance_1380_" + Math.floor(Math.random()*1000);
  let description_PeriodicMaintenance_1380 = "description_PeriodicMaintenance_1380_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_1380 = garageId_Garages_1380;
  let intervalKm_PeriodicMaintenance_1380 = Math.floor(Math.random() * 1000000);
  let intervalMonths_PeriodicMaintenance_1380 = Math.floor(Math.random() * 1000000);
  let planType_PeriodicMaintenance_1380 = "planType_PeriodicMaintenance_1380_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_1380 = "pmId_PeriodicMaintenance_1380_" + Math.floor(Math.random()*1000);
  let schedule_PeriodicMaintenance_1380 = {};
  let status_PeriodicMaintenance_1380 = "open";
  let tasks_PeriodicMaintenance_1380 = [];
  let res_PeriodicMaintenance_1380 = createPMPlan(carVin_PeriodicMaintenance_1380, description_PeriodicMaintenance_1380, garageId_PeriodicMaintenance_1380, intervalKm_PeriodicMaintenance_1380, intervalMonths_PeriodicMaintenance_1380, planType_PeriodicMaintenance_1380, pmId_PeriodicMaintenance_1380, schedule_PeriodicMaintenance_1380, status_PeriodicMaintenance_1380, tasks_PeriodicMaintenance_1380);
  if (res_PeriodicMaintenance_1380 && res_PeriodicMaintenance_1380.status >= 200 && res_PeriodicMaintenance_1380.status < 300) {
      verifyPeriodicMaintenanceExists(pmId_PeriodicMaintenance_1380);
  } else {
      bp.log.error("Failed to create PeriodicMaintenance, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting PeriodicMaintenance
  deletePMPlan(pmId_PeriodicMaintenance_1380);
  verifyPeriodicMaintenanceDoesNotExist(carVin_PeriodicMaintenance_1380, description_PeriodicMaintenance_1380, garageId_PeriodicMaintenance_1380, intervalKm_PeriodicMaintenance_1380, intervalMonths_PeriodicMaintenance_1380, planType_PeriodicMaintenance_1380, pmId_PeriodicMaintenance_1380, schedule_PeriodicMaintenance_1380, status_PeriodicMaintenance_1380, tasks_PeriodicMaintenance_1380);

  // -> Deleting Cars
  deleteCar(vin_Cars_1380);
  verifyCarsDoesNotExist(color_Cars_1380, description_Cars_1380, homeGarageId_Cars_1380, licensePlate_Cars_1380, make_Cars_1380, mileage_Cars_1380, model_Cars_1380, ownerCustomerId_Cars_1380, vin_Cars_1380, year_Cars_1380);

});

// Story: Deep Chain Cars_RepairOrders (Self-Contained)
bthread("chain:Cars_RepairOrders", function () {
  // -> Creating Customers
  let customerId_Customers_1480 = "customerId_Customers_1480_" + Math.floor(Math.random()*1000);
  let description_Customers_1480 = "description_Customers_1480_" + Math.floor(Math.random()*1000);
  let email_Customers_1480 = "email_Customers_1480_" + Math.floor(Math.random()*1000);
  let fullName_Customers_1480 = "fullName_Customers_1480_" + Math.floor(Math.random()*1000);
  let name_Customers_1480 = "name_Customers_1480_" + Math.floor(Math.random()*1000);
  let phone_Customers_1480 = "phone_Customers_1480_" + Math.floor(Math.random()*1000);
  let preferredGarageId_Customers_1480 = "preferredGarageId_Customers_1480_" + Math.floor(Math.random()*1000);
  let type_Customers_1480 = "type_Customers_1480_" + Math.floor(Math.random()*1000);
  let res_Customers_1480 = createCustomer(customerId_Customers_1480, description_Customers_1480, email_Customers_1480, fullName_Customers_1480, name_Customers_1480, phone_Customers_1480, preferredGarageId_Customers_1480, type_Customers_1480);
  if (res_Customers_1480 && res_Customers_1480.status >= 200 && res_Customers_1480.status < 300) {
      verifyCustomersExists(customerId_Customers_1480);
  } else {
      bp.log.error("Failed to create Customers, skipping verification.");
  }

  // -> Creating Chains
  let active_Chains_1480 = true;
  let chainId_Chains_1480 = "chainId_Chains_1480_" + Math.floor(Math.random()*1000);
  let description_Chains_1480 = "description_Chains_1480_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_1480 = {};
  let name_Chains_1480 = "name_Chains_1480_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_1480 = "supportEmail_Chains_1480_" + Math.floor(Math.random()*1000);
  let res_Chains_1480 = createChain(active_Chains_1480, chainId_Chains_1480, description_Chains_1480, hqAddress_Chains_1480, name_Chains_1480, supportEmail_Chains_1480);
  if (res_Chains_1480 && res_Chains_1480.status >= 200 && res_Chains_1480.status < 300) {
      verifyChainsExists(chainId_Chains_1480);
  } else {
      bp.log.error("Failed to create Chains, skipping verification.");
  }

  // -> Creating Garages
  let active_Garages_1480 = true;
  let address_Garages_1480 = {};
  let bayCount_Garages_1480 = Math.floor(Math.random() * 1000000);
  let capacity_Garages_1480 = Math.floor(Math.random() * 1000000);
  let chainId_Garages_1480 = chainId_Chains_1480;
  let description_Garages_1480 = "description_Garages_1480_" + Math.floor(Math.random()*1000);
  let garageId_Garages_1480 = "garageId_Garages_1480_" + Math.floor(Math.random()*1000);
  let location_Garages_1480 = {};
  let name_Garages_1480 = "name_Garages_1480_" + Math.floor(Math.random()*1000);
  let phone_Garages_1480 = "phone_Garages_1480_" + Math.floor(Math.random()*1000);
  let servicesOffered_Garages_1480 = [];
  let res_Garages_1480 = createGarage(active_Garages_1480, address_Garages_1480, bayCount_Garages_1480, capacity_Garages_1480, chainId_Garages_1480, description_Garages_1480, garageId_Garages_1480, location_Garages_1480, name_Garages_1480, phone_Garages_1480, servicesOffered_Garages_1480);
  if (res_Garages_1480 && res_Garages_1480.status >= 200 && res_Garages_1480.status < 300) {
      verifyGaragesExists(garageId_Garages_1480);
  } else {
      bp.log.error("Failed to create Garages, skipping verification.");
  }

  // -> Creating Cars
  let color_Cars_1480 = "color_Cars_1480_" + Math.floor(Math.random()*1000);
  let description_Cars_1480 = "description_Cars_1480_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_1480 = garageId_Garages_1480;
  let licensePlate_Cars_1480 = "licensePlate_Cars_1480_" + Math.floor(Math.random()*1000);
  let make_Cars_1480 = "make_Cars_1480_" + Math.floor(Math.random()*1000);
  let mileage_Cars_1480 = Math.floor(Math.random() * 1000000);
  let model_Cars_1480 = "model_Cars_1480_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_1480 = customerId_Customers_1480;
  let vin_Cars_1480 = "vin_Cars_1480_" + Math.floor(Math.random()*1000);
  let year_Cars_1480 = Math.floor(Math.random() * 1000000);
  let res_Cars_1480 = createCar(color_Cars_1480, description_Cars_1480, homeGarageId_Cars_1480, licensePlate_Cars_1480, make_Cars_1480, mileage_Cars_1480, model_Cars_1480, ownerCustomerId_Cars_1480, vin_Cars_1480, year_Cars_1480);
  if (res_Cars_1480 && res_Cars_1480.status >= 200 && res_Cars_1480.status < 300) {
      verifyCarsExists(vin_Cars_1480);
  } else {
      bp.log.error("Failed to create Cars, skipping verification.");
  }

  // -> Creating RepairOrders
  let carVin_RepairOrders_1480 = "carVin_RepairOrders_1480_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_1480 = "complaint_RepairOrders_1480_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_1480 = customerId_Customers_1480;
  let description_RepairOrders_1480 = "description_RepairOrders_1480_" + Math.floor(Math.random()*1000);
  let garageId_RepairOrders_1480 = garageId_Garages_1480;
  let roId_RepairOrders_1480 = "roId_RepairOrders_1480_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_1480 = "open";
  let res_RepairOrders_1480 = createRepairOrder(carVin_RepairOrders_1480, complaint_RepairOrders_1480, customerId_RepairOrders_1480, description_RepairOrders_1480, garageId_RepairOrders_1480, roId_RepairOrders_1480, status_RepairOrders_1480);
  if (res_RepairOrders_1480 && res_RepairOrders_1480.status >= 200 && res_RepairOrders_1480.status < 300) {
      verifyRepairOrdersExists(roId_RepairOrders_1480);
  } else {
      bp.log.error("Failed to create RepairOrders, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting RepairOrders
  deleteRepairOrder(roId_RepairOrders_1480);
  verifyRepairOrdersDoesNotExist(carVin_RepairOrders_1480, complaint_RepairOrders_1480, customerId_RepairOrders_1480, description_RepairOrders_1480, garageId_RepairOrders_1480, roId_RepairOrders_1480, status_RepairOrders_1480);

  // -> Deleting Cars
  deleteCar(vin_Cars_1480);
  verifyCarsDoesNotExist(color_Cars_1480, description_Cars_1480, homeGarageId_Cars_1480, licensePlate_Cars_1480, make_Cars_1480, mileage_Cars_1480, model_Cars_1480, ownerCustomerId_Cars_1480, vin_Cars_1480, year_Cars_1480);

});
