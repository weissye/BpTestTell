// Auto-generated stories for garage
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
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

// Story: Full Coverage for Chains
bthread("cover:Chains", function () {
  // -> Creating Chains
  let active_Chains_100 = true;
  let chainId_Chains_100 = "chainId_Chains_100_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_100 = "chainUpdate_Chains_100_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_100 = {};
  let name_Chains_100 = "name_Chains_100_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_100 = "uChains_100_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_100, chainId_Chains_100, chainUpdate_Chains_100, hqAddress_Chains_100, name_Chains_100, supportEmail_Chains_100);
  verifyChainsExists(chainId_Chains_100);

});

// Story: Full Coverage for Customers
bthread("cover:Customers", function () {
  // -> Creating Chains
  let active_Chains_150 = true;
  let chainId_Chains_150 = "chainId_Chains_150_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_150 = "chainUpdate_Chains_150_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_150 = {};
  let name_Chains_150 = "name_Chains_150_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_150 = "uChains_150_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_150, chainId_Chains_150, chainUpdate_Chains_150, hqAddress_Chains_150, name_Chains_150, supportEmail_Chains_150);
  verifyChainsExists(chainId_Chains_150);

  // -> Creating Garages
  let active_Garages_150 = true;
  let address_Garages_150 = {};
  let bayCount_Garages_150 = Math.floor(Math.random() * 1000) + 1990;
  let chainId_Garages_150 = chainId_Chains_150;
  let garageId_Garages_150 = "garageId_Garages_150_" + Math.floor(Math.random()*1000);
  let garageUpdate_Garages_150 = "garageUpdate_Garages_150_" + Math.floor(Math.random()*1000);
  let name_Garages_150 = "name_Garages_150_" + Math.floor(Math.random()*1000);
  let phone_Garages_150 = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_Garages_150 = [];
  createGarage(active_Garages_150, address_Garages_150, bayCount_Garages_150, chainId_Garages_150, garageId_Garages_150, garageUpdate_Garages_150, name_Garages_150, phone_Garages_150, servicesOffered_Garages_150);
  verifyGaragesExists(garageId_Garages_150);

  // -> Creating Customers
  let customerId_Customers_150 = "customerId_Customers_150_" + Math.floor(Math.random()*1000);
  let email_Customers_150 = "uCustomers_150_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_150 = "fullName_Customers_150_" + Math.floor(Math.random()*1000);
  let name_Customers_150 = "name_Customers_150_" + Math.floor(Math.random()*1000);
  let phone_Customers_150 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_150 = garageId_Garages_150;
  let type_Customers_150 = "type_Customers_150_" + Math.floor(Math.random()*1000);
  createCustomer(customerId_Customers_150, email_Customers_150, fullName_Customers_150, name_Customers_150, phone_Customers_150, preferredGarageId_Customers_150, type_Customers_150);
  verifyCustomersExists(customerId_Customers_150);

});

// Story: Full Coverage for Garages
bthread("cover:Garages", function () {
  // -> Creating Chains
  let active_Chains_200 = true;
  let chainId_Chains_200 = "chainId_Chains_200_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_200 = "chainUpdate_Chains_200_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_200 = {};
  let name_Chains_200 = "name_Chains_200_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_200 = "uChains_200_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_200, chainId_Chains_200, chainUpdate_Chains_200, hqAddress_Chains_200, name_Chains_200, supportEmail_Chains_200);
  verifyChainsExists(chainId_Chains_200);

  // -> Creating Garages
  let active_Garages_200 = true;
  let address_Garages_200 = {};
  let bayCount_Garages_200 = Math.floor(Math.random() * 1000) + 1990;
  let chainId_Garages_200 = chainId_Chains_200;
  let garageId_Garages_200 = "garageId_Garages_200_" + Math.floor(Math.random()*1000);
  let garageUpdate_Garages_200 = "garageUpdate_Garages_200_" + Math.floor(Math.random()*1000);
  let name_Garages_200 = "name_Garages_200_" + Math.floor(Math.random()*1000);
  let phone_Garages_200 = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_Garages_200 = [];
  createGarage(active_Garages_200, address_Garages_200, bayCount_Garages_200, chainId_Garages_200, garageId_Garages_200, garageUpdate_Garages_200, name_Garages_200, phone_Garages_200, servicesOffered_Garages_200);
  verifyGaragesExists(garageId_Garages_200);

});

// Story: Full Coverage for Cars
bthread("cover:Cars", function () {
  // -> Creating Chains
  let active_Chains_250 = true;
  let chainId_Chains_250 = "chainId_Chains_250_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_250 = "chainUpdate_Chains_250_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_250 = {};
  let name_Chains_250 = "name_Chains_250_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_250 = "uChains_250_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_250, chainId_Chains_250, chainUpdate_Chains_250, hqAddress_Chains_250, name_Chains_250, supportEmail_Chains_250);
  verifyChainsExists(chainId_Chains_250);

  // -> Creating Garages
  let active_Garages_250 = true;
  let address_Garages_250 = {};
  let bayCount_Garages_250 = Math.floor(Math.random() * 1000) + 1990;
  let chainId_Garages_250 = chainId_Chains_250;
  let garageId_Garages_250 = "garageId_Garages_250_" + Math.floor(Math.random()*1000);
  let garageUpdate_Garages_250 = "garageUpdate_Garages_250_" + Math.floor(Math.random()*1000);
  let name_Garages_250 = "name_Garages_250_" + Math.floor(Math.random()*1000);
  let phone_Garages_250 = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_Garages_250 = [];
  createGarage(active_Garages_250, address_Garages_250, bayCount_Garages_250, chainId_Garages_250, garageId_Garages_250, garageUpdate_Garages_250, name_Garages_250, phone_Garages_250, servicesOffered_Garages_250);
  verifyGaragesExists(garageId_Garages_250);

  // -> Creating Customers
  let customerId_Customers_250 = "customerId_Customers_250_" + Math.floor(Math.random()*1000);
  let email_Customers_250 = "uCustomers_250_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_250 = "fullName_Customers_250_" + Math.floor(Math.random()*1000);
  let name_Customers_250 = "name_Customers_250_" + Math.floor(Math.random()*1000);
  let phone_Customers_250 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_250 = garageId_Garages_250;
  let type_Customers_250 = "type_Customers_250_" + Math.floor(Math.random()*1000);
  createCustomer(customerId_Customers_250, email_Customers_250, fullName_Customers_250, name_Customers_250, phone_Customers_250, preferredGarageId_Customers_250, type_Customers_250);
  verifyCustomersExists(customerId_Customers_250);

  // -> Creating Cars
  let homeGarageId_Cars_250 = garageId_Garages_250;
  let make_Cars_250 = "make_Cars_250_" + Math.floor(Math.random()*1000);
  let mileage_Cars_250 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_250 = "model_Cars_250_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_250 = customerId_Customers_250;
  let vin_Cars_250 = "vin_Cars_250_" + Math.floor(Math.random()*1000);
  let year_Cars_250 = Math.floor(Math.random() * 1000) + 1990;
  createCar(homeGarageId_Cars_250, make_Cars_250, mileage_Cars_250, model_Cars_250, ownerCustomerId_Cars_250, vin_Cars_250, year_Cars_250);
  verifyCarsExists(vin_Cars_250);

});

// Story: Full Coverage for PeriodicMaintenance
bthread("cover:PeriodicMaintenance", function () {
  // -> Creating Chains
  let active_Chains_300 = true;
  let chainId_Chains_300 = "chainId_Chains_300_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_300 = "chainUpdate_Chains_300_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_300 = {};
  let name_Chains_300 = "name_Chains_300_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_300 = "uChains_300_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_300, chainId_Chains_300, chainUpdate_Chains_300, hqAddress_Chains_300, name_Chains_300, supportEmail_Chains_300);
  verifyChainsExists(chainId_Chains_300);

  // -> Creating Garages
  let active_Garages_300 = true;
  let address_Garages_300 = {};
  let bayCount_Garages_300 = Math.floor(Math.random() * 1000) + 1990;
  let chainId_Garages_300 = chainId_Chains_300;
  let garageId_Garages_300 = "garageId_Garages_300_" + Math.floor(Math.random()*1000);
  let garageUpdate_Garages_300 = "garageUpdate_Garages_300_" + Math.floor(Math.random()*1000);
  let name_Garages_300 = "name_Garages_300_" + Math.floor(Math.random()*1000);
  let phone_Garages_300 = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_Garages_300 = [];
  createGarage(active_Garages_300, address_Garages_300, bayCount_Garages_300, chainId_Garages_300, garageId_Garages_300, garageUpdate_Garages_300, name_Garages_300, phone_Garages_300, servicesOffered_Garages_300);
  verifyGaragesExists(garageId_Garages_300);

  // -> Creating Customers
  let customerId_Customers_300 = "customerId_Customers_300_" + Math.floor(Math.random()*1000);
  let email_Customers_300 = "uCustomers_300_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_300 = "fullName_Customers_300_" + Math.floor(Math.random()*1000);
  let name_Customers_300 = "name_Customers_300_" + Math.floor(Math.random()*1000);
  let phone_Customers_300 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_300 = garageId_Garages_300;
  let type_Customers_300 = "type_Customers_300_" + Math.floor(Math.random()*1000);
  createCustomer(customerId_Customers_300, email_Customers_300, fullName_Customers_300, name_Customers_300, phone_Customers_300, preferredGarageId_Customers_300, type_Customers_300);
  verifyCustomersExists(customerId_Customers_300);

  // -> Creating Cars
  let homeGarageId_Cars_300 = garageId_Garages_300;
  let make_Cars_300 = "make_Cars_300_" + Math.floor(Math.random()*1000);
  let mileage_Cars_300 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_300 = "model_Cars_300_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_300 = customerId_Customers_300;
  let vin_Cars_300 = "vin_Cars_300_" + Math.floor(Math.random()*1000);
  let year_Cars_300 = Math.floor(Math.random() * 1000) + 1990;
  createCar(homeGarageId_Cars_300, make_Cars_300, mileage_Cars_300, model_Cars_300, ownerCustomerId_Cars_300, vin_Cars_300, year_Cars_300);
  verifyCarsExists(vin_Cars_300);

  // -> Creating PeriodicMaintenance
  let carVin_PeriodicMaintenance_300 = vin_Cars_300;
  let garageId_PeriodicMaintenance_300 = garageId_Garages_300;
  let intervalKm_PeriodicMaintenance_300 = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_PeriodicMaintenance_300 = Math.floor(Math.random() * 1000) + 1990;
  let planType_PeriodicMaintenance_300 = "planType_PeriodicMaintenance_300_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_300 = "pmId_PeriodicMaintenance_300_" + Math.floor(Math.random()*1000);
  let schedule_PeriodicMaintenance_300 = "schedule_PeriodicMaintenance_300_" + Math.floor(Math.random()*1000);
  let status_PeriodicMaintenance_300 = "open";
  let tasks_PeriodicMaintenance_300 = [];
  createPMPlan(carVin_PeriodicMaintenance_300, garageId_PeriodicMaintenance_300, intervalKm_PeriodicMaintenance_300, intervalMonths_PeriodicMaintenance_300, planType_PeriodicMaintenance_300, pmId_PeriodicMaintenance_300, schedule_PeriodicMaintenance_300, status_PeriodicMaintenance_300, tasks_PeriodicMaintenance_300);
  verifyPeriodicMaintenanceExists(pmId_PeriodicMaintenance_300);

});

// Story: Full Coverage for RepairOrders
bthread("cover:RepairOrders", function () {
  // -> Creating Chains
  let active_Chains_350 = true;
  let chainId_Chains_350 = "chainId_Chains_350_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_350 = "chainUpdate_Chains_350_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_350 = {};
  let name_Chains_350 = "name_Chains_350_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_350 = "uChains_350_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_350, chainId_Chains_350, chainUpdate_Chains_350, hqAddress_Chains_350, name_Chains_350, supportEmail_Chains_350);
  verifyChainsExists(chainId_Chains_350);

  // -> Creating Garages
  let active_Garages_350 = true;
  let address_Garages_350 = {};
  let bayCount_Garages_350 = Math.floor(Math.random() * 1000) + 1990;
  let chainId_Garages_350 = chainId_Chains_350;
  let garageId_Garages_350 = "garageId_Garages_350_" + Math.floor(Math.random()*1000);
  let garageUpdate_Garages_350 = "garageUpdate_Garages_350_" + Math.floor(Math.random()*1000);
  let name_Garages_350 = "name_Garages_350_" + Math.floor(Math.random()*1000);
  let phone_Garages_350 = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_Garages_350 = [];
  createGarage(active_Garages_350, address_Garages_350, bayCount_Garages_350, chainId_Garages_350, garageId_Garages_350, garageUpdate_Garages_350, name_Garages_350, phone_Garages_350, servicesOffered_Garages_350);
  verifyGaragesExists(garageId_Garages_350);

  // -> Creating Customers
  let customerId_Customers_350 = "customerId_Customers_350_" + Math.floor(Math.random()*1000);
  let email_Customers_350 = "uCustomers_350_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_350 = "fullName_Customers_350_" + Math.floor(Math.random()*1000);
  let name_Customers_350 = "name_Customers_350_" + Math.floor(Math.random()*1000);
  let phone_Customers_350 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_350 = garageId_Garages_350;
  let type_Customers_350 = "type_Customers_350_" + Math.floor(Math.random()*1000);
  createCustomer(customerId_Customers_350, email_Customers_350, fullName_Customers_350, name_Customers_350, phone_Customers_350, preferredGarageId_Customers_350, type_Customers_350);
  verifyCustomersExists(customerId_Customers_350);

  // -> Creating Cars
  let homeGarageId_Cars_350 = garageId_Garages_350;
  let make_Cars_350 = "make_Cars_350_" + Math.floor(Math.random()*1000);
  let mileage_Cars_350 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_350 = "model_Cars_350_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_350 = customerId_Customers_350;
  let vin_Cars_350 = "vin_Cars_350_" + Math.floor(Math.random()*1000);
  let year_Cars_350 = Math.floor(Math.random() * 1000) + 1990;
  createCar(homeGarageId_Cars_350, make_Cars_350, mileage_Cars_350, model_Cars_350, ownerCustomerId_Cars_350, vin_Cars_350, year_Cars_350);
  verifyCarsExists(vin_Cars_350);

  // -> Creating RepairOrders
  let ROUpdate_RepairOrders_350 = "ROUpdate_RepairOrders_350_" + Math.floor(Math.random()*1000);
  let carVin_RepairOrders_350 = vin_Cars_350;
  let complaint_RepairOrders_350 = "complaint_RepairOrders_350_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_350 = customerId_Customers_350;
  let garageId_RepairOrders_350 = garageId_Garages_350;
  let roId_RepairOrders_350 = "roId_RepairOrders_350_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_350 = "open";
  createRepairOrder(ROUpdate_RepairOrders_350, carVin_RepairOrders_350, complaint_RepairOrders_350, customerId_RepairOrders_350, garageId_RepairOrders_350, roId_RepairOrders_350, status_RepairOrders_350);
  verifyRepairOrdersExists(roId_RepairOrders_350);

});
