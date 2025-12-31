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
  verifyChainsExists(active_Chains_100, chainId_Chains_100, chainUpdate_Chains_100, hqAddress_Chains_100, name_Chains_100, supportEmail_Chains_100);

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
  verifyChainsExists(active_Chains_150, chainId_Chains_150, chainUpdate_Chains_150, hqAddress_Chains_150, name_Chains_150, supportEmail_Chains_150);

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
  verifyGaragesExists(active_Garages_150, address_Garages_150, bayCount_Garages_150, chainId_Garages_150, garageId_Garages_150, garageUpdate_Garages_150, name_Garages_150, phone_Garages_150, servicesOffered_Garages_150);

  // -> Creating Customers
  let CustomerUpdate_Customers_150 = "CustomerUpdate_Customers_150_" + Math.floor(Math.random()*1000);
  let customerId_Customers_150 = "customerId_Customers_150_" + Math.floor(Math.random()*1000);
  let email_Customers_150 = "uCustomers_150_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_150 = "fullName_Customers_150_" + Math.floor(Math.random()*1000);
  let phone_Customers_150 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_150 = garageId_Garages_150;
  let type_Customers_150 = "type_Customers_150_" + Math.floor(Math.random()*1000);
  createCustomer(CustomerUpdate_Customers_150, customerId_Customers_150, email_Customers_150, fullName_Customers_150, phone_Customers_150, preferredGarageId_Customers_150, type_Customers_150);
  verifyCustomersExists(CustomerUpdate_Customers_150, customerId_Customers_150, email_Customers_150, fullName_Customers_150, phone_Customers_150, preferredGarageId_Customers_150, type_Customers_150);

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
  verifyChainsExists(active_Chains_200, chainId_Chains_200, chainUpdate_Chains_200, hqAddress_Chains_200, name_Chains_200, supportEmail_Chains_200);

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
  verifyGaragesExists(active_Garages_200, address_Garages_200, bayCount_Garages_200, chainId_Garages_200, garageId_Garages_200, garageUpdate_Garages_200, name_Garages_200, phone_Garages_200, servicesOffered_Garages_200);

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
  verifyChainsExists(active_Chains_250, chainId_Chains_250, chainUpdate_Chains_250, hqAddress_Chains_250, name_Chains_250, supportEmail_Chains_250);

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
  verifyGaragesExists(active_Garages_250, address_Garages_250, bayCount_Garages_250, chainId_Garages_250, garageId_Garages_250, garageUpdate_Garages_250, name_Garages_250, phone_Garages_250, servicesOffered_Garages_250);

  // -> Creating Customers
  let CustomerUpdate_Customers_250 = "CustomerUpdate_Customers_250_" + Math.floor(Math.random()*1000);
  let customerId_Customers_250 = "customerId_Customers_250_" + Math.floor(Math.random()*1000);
  let email_Customers_250 = "uCustomers_250_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_250 = "fullName_Customers_250_" + Math.floor(Math.random()*1000);
  let phone_Customers_250 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_250 = garageId_Garages_250;
  let type_Customers_250 = "type_Customers_250_" + Math.floor(Math.random()*1000);
  createCustomer(CustomerUpdate_Customers_250, customerId_Customers_250, email_Customers_250, fullName_Customers_250, phone_Customers_250, preferredGarageId_Customers_250, type_Customers_250);
  verifyCustomersExists(CustomerUpdate_Customers_250, customerId_Customers_250, email_Customers_250, fullName_Customers_250, phone_Customers_250, preferredGarageId_Customers_250, type_Customers_250);

  // -> Creating Cars
  let CarUpdate_Cars_250 = "CarUpdate_Cars_250_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_250 = garageId_Garages_250;
  let make_Cars_250 = "make_Cars_250_" + Math.floor(Math.random()*1000);
  let mileage_Cars_250 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_250 = "model_Cars_250_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_250 = customerId_Customers_250;
  let vin_Cars_250 = "vin_Cars_250_" + Math.floor(Math.random()*1000);
  let year_Cars_250 = Math.floor(Math.random() * 1000) + 1990;
  createCar(CarUpdate_Cars_250, homeGarageId_Cars_250, make_Cars_250, mileage_Cars_250, model_Cars_250, ownerCustomerId_Cars_250, vin_Cars_250, year_Cars_250);
  verifyCarsExists(CarUpdate_Cars_250, homeGarageId_Cars_250, make_Cars_250, mileage_Cars_250, model_Cars_250, ownerCustomerId_Cars_250, vin_Cars_250, year_Cars_250);

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
  verifyChainsExists(active_Chains_300, chainId_Chains_300, chainUpdate_Chains_300, hqAddress_Chains_300, name_Chains_300, supportEmail_Chains_300);

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
  verifyGaragesExists(active_Garages_300, address_Garages_300, bayCount_Garages_300, chainId_Garages_300, garageId_Garages_300, garageUpdate_Garages_300, name_Garages_300, phone_Garages_300, servicesOffered_Garages_300);

  // -> Creating Customers
  let CustomerUpdate_Customers_300 = "CustomerUpdate_Customers_300_" + Math.floor(Math.random()*1000);
  let customerId_Customers_300 = "customerId_Customers_300_" + Math.floor(Math.random()*1000);
  let email_Customers_300 = "uCustomers_300_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_300 = "fullName_Customers_300_" + Math.floor(Math.random()*1000);
  let phone_Customers_300 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_300 = garageId_Garages_300;
  let type_Customers_300 = "type_Customers_300_" + Math.floor(Math.random()*1000);
  createCustomer(CustomerUpdate_Customers_300, customerId_Customers_300, email_Customers_300, fullName_Customers_300, phone_Customers_300, preferredGarageId_Customers_300, type_Customers_300);
  verifyCustomersExists(CustomerUpdate_Customers_300, customerId_Customers_300, email_Customers_300, fullName_Customers_300, phone_Customers_300, preferredGarageId_Customers_300, type_Customers_300);

  // -> Creating Cars
  let CarUpdate_Cars_300 = "CarUpdate_Cars_300_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_300 = garageId_Garages_300;
  let make_Cars_300 = "make_Cars_300_" + Math.floor(Math.random()*1000);
  let mileage_Cars_300 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_300 = "model_Cars_300_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_300 = customerId_Customers_300;
  let vin_Cars_300 = "vin_Cars_300_" + Math.floor(Math.random()*1000);
  let year_Cars_300 = Math.floor(Math.random() * 1000) + 1990;
  createCar(CarUpdate_Cars_300, homeGarageId_Cars_300, make_Cars_300, mileage_Cars_300, model_Cars_300, ownerCustomerId_Cars_300, vin_Cars_300, year_Cars_300);
  verifyCarsExists(CarUpdate_Cars_300, homeGarageId_Cars_300, make_Cars_300, mileage_Cars_300, model_Cars_300, ownerCustomerId_Cars_300, vin_Cars_300, year_Cars_300);

  // -> Creating PeriodicMaintenance
  let PMUpdate_PeriodicMaintenance_300 = "PMUpdate_PeriodicMaintenance_300_" + Math.floor(Math.random()*1000);
  let carVin_PeriodicMaintenance_300 = "carVin_PeriodicMaintenance_300_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_300 = garageId_Garages_300;
  let intervalKm_PeriodicMaintenance_300 = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_PeriodicMaintenance_300 = Math.floor(Math.random() * 1000) + 1990;
  let planType_PeriodicMaintenance_300 = "planType_PeriodicMaintenance_300_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_300 = "pmId_PeriodicMaintenance_300_" + Math.floor(Math.random()*1000);
  let status_PeriodicMaintenance_300 = "open";
  let tasks_PeriodicMaintenance_300 = [];
  createPMPlan(PMUpdate_PeriodicMaintenance_300, carVin_PeriodicMaintenance_300, garageId_PeriodicMaintenance_300, intervalKm_PeriodicMaintenance_300, intervalMonths_PeriodicMaintenance_300, planType_PeriodicMaintenance_300, pmId_PeriodicMaintenance_300, status_PeriodicMaintenance_300, tasks_PeriodicMaintenance_300);
  verifyPeriodicMaintenanceExists(PMUpdate_PeriodicMaintenance_300, carVin_PeriodicMaintenance_300, garageId_PeriodicMaintenance_300, intervalKm_PeriodicMaintenance_300, intervalMonths_PeriodicMaintenance_300, planType_PeriodicMaintenance_300, pmId_PeriodicMaintenance_300, status_PeriodicMaintenance_300, tasks_PeriodicMaintenance_300);

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
  verifyChainsExists(active_Chains_350, chainId_Chains_350, chainUpdate_Chains_350, hqAddress_Chains_350, name_Chains_350, supportEmail_Chains_350);

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
  verifyGaragesExists(active_Garages_350, address_Garages_350, bayCount_Garages_350, chainId_Garages_350, garageId_Garages_350, garageUpdate_Garages_350, name_Garages_350, phone_Garages_350, servicesOffered_Garages_350);

  // -> Creating Customers
  let CustomerUpdate_Customers_350 = "CustomerUpdate_Customers_350_" + Math.floor(Math.random()*1000);
  let customerId_Customers_350 = "customerId_Customers_350_" + Math.floor(Math.random()*1000);
  let email_Customers_350 = "uCustomers_350_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_350 = "fullName_Customers_350_" + Math.floor(Math.random()*1000);
  let phone_Customers_350 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_350 = garageId_Garages_350;
  let type_Customers_350 = "type_Customers_350_" + Math.floor(Math.random()*1000);
  createCustomer(CustomerUpdate_Customers_350, customerId_Customers_350, email_Customers_350, fullName_Customers_350, phone_Customers_350, preferredGarageId_Customers_350, type_Customers_350);
  verifyCustomersExists(CustomerUpdate_Customers_350, customerId_Customers_350, email_Customers_350, fullName_Customers_350, phone_Customers_350, preferredGarageId_Customers_350, type_Customers_350);

  // -> Creating Cars
  let CarUpdate_Cars_350 = "CarUpdate_Cars_350_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_350 = garageId_Garages_350;
  let make_Cars_350 = "make_Cars_350_" + Math.floor(Math.random()*1000);
  let mileage_Cars_350 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_350 = "model_Cars_350_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_350 = customerId_Customers_350;
  let vin_Cars_350 = "vin_Cars_350_" + Math.floor(Math.random()*1000);
  let year_Cars_350 = Math.floor(Math.random() * 1000) + 1990;
  createCar(CarUpdate_Cars_350, homeGarageId_Cars_350, make_Cars_350, mileage_Cars_350, model_Cars_350, ownerCustomerId_Cars_350, vin_Cars_350, year_Cars_350);
  verifyCarsExists(CarUpdate_Cars_350, homeGarageId_Cars_350, make_Cars_350, mileage_Cars_350, model_Cars_350, ownerCustomerId_Cars_350, vin_Cars_350, year_Cars_350);

  // -> Creating RepairOrders
  let ROUpdate_RepairOrders_350 = "ROUpdate_RepairOrders_350_" + Math.floor(Math.random()*1000);
  let carVin_RepairOrders_350 = "carVin_RepairOrders_350_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_350 = "complaint_RepairOrders_350_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_350 = customerId_Customers_350;
  let garageId_RepairOrders_350 = garageId_Garages_350;
  let roId_RepairOrders_350 = "roId_RepairOrders_350_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_350 = "open";
  createRepairOrder(ROUpdate_RepairOrders_350, carVin_RepairOrders_350, complaint_RepairOrders_350, customerId_RepairOrders_350, garageId_RepairOrders_350, roId_RepairOrders_350, status_RepairOrders_350);
  verifyRepairOrdersExists(ROUpdate_RepairOrders_350, carVin_RepairOrders_350, complaint_RepairOrders_350, customerId_RepairOrders_350, garageId_RepairOrders_350, roId_RepairOrders_350, status_RepairOrders_350);

});

// Story: Deep Chain Chains_Garages_Customers_Cars_PeriodicMaintenance
bthread("chain:Chains_Garages_Customers_Cars_PeriodicMaintenance", function () {
  // -> Creating Chains
  let active_Chains_400 = true;
  let chainId_Chains_400 = "chainId_Chains_400_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_400 = "chainUpdate_Chains_400_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_400 = {};
  let name_Chains_400 = "name_Chains_400_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_400 = "uChains_400_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_400, chainId_Chains_400, chainUpdate_Chains_400, hqAddress_Chains_400, name_Chains_400, supportEmail_Chains_400);
  verifyChainsExists(active_Chains_400, chainId_Chains_400, chainUpdate_Chains_400, hqAddress_Chains_400, name_Chains_400, supportEmail_Chains_400);

  // -> Creating Garages
  let active_Garages_400 = true;
  let address_Garages_400 = {};
  let bayCount_Garages_400 = Math.floor(Math.random() * 1000) + 1990;
  let chainId_Garages_400 = chainId_Chains_400;
  let garageId_Garages_400 = "garageId_Garages_400_" + Math.floor(Math.random()*1000);
  let garageUpdate_Garages_400 = "garageUpdate_Garages_400_" + Math.floor(Math.random()*1000);
  let name_Garages_400 = "name_Garages_400_" + Math.floor(Math.random()*1000);
  let phone_Garages_400 = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_Garages_400 = [];
  createGarage(active_Garages_400, address_Garages_400, bayCount_Garages_400, chainId_Garages_400, garageId_Garages_400, garageUpdate_Garages_400, name_Garages_400, phone_Garages_400, servicesOffered_Garages_400);
  verifyGaragesExists(active_Garages_400, address_Garages_400, bayCount_Garages_400, chainId_Garages_400, garageId_Garages_400, garageUpdate_Garages_400, name_Garages_400, phone_Garages_400, servicesOffered_Garages_400);

  // -> Creating Customers
  let CustomerUpdate_Customers_400 = "CustomerUpdate_Customers_400_" + Math.floor(Math.random()*1000);
  let customerId_Customers_400 = "customerId_Customers_400_" + Math.floor(Math.random()*1000);
  let email_Customers_400 = "uCustomers_400_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_400 = "fullName_Customers_400_" + Math.floor(Math.random()*1000);
  let phone_Customers_400 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_400 = garageId_Garages_400;
  let type_Customers_400 = "type_Customers_400_" + Math.floor(Math.random()*1000);
  createCustomer(CustomerUpdate_Customers_400, customerId_Customers_400, email_Customers_400, fullName_Customers_400, phone_Customers_400, preferredGarageId_Customers_400, type_Customers_400);
  verifyCustomersExists(CustomerUpdate_Customers_400, customerId_Customers_400, email_Customers_400, fullName_Customers_400, phone_Customers_400, preferredGarageId_Customers_400, type_Customers_400);

  // -> Creating Cars
  let CarUpdate_Cars_400 = "CarUpdate_Cars_400_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_400 = garageId_Garages_400;
  let make_Cars_400 = "make_Cars_400_" + Math.floor(Math.random()*1000);
  let mileage_Cars_400 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_400 = "model_Cars_400_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_400 = customerId_Customers_400;
  let vin_Cars_400 = "vin_Cars_400_" + Math.floor(Math.random()*1000);
  let year_Cars_400 = Math.floor(Math.random() * 1000) + 1990;
  createCar(CarUpdate_Cars_400, homeGarageId_Cars_400, make_Cars_400, mileage_Cars_400, model_Cars_400, ownerCustomerId_Cars_400, vin_Cars_400, year_Cars_400);
  verifyCarsExists(CarUpdate_Cars_400, homeGarageId_Cars_400, make_Cars_400, mileage_Cars_400, model_Cars_400, ownerCustomerId_Cars_400, vin_Cars_400, year_Cars_400);

  // -> Creating PeriodicMaintenance
  let PMUpdate_PeriodicMaintenance_400 = "PMUpdate_PeriodicMaintenance_400_" + Math.floor(Math.random()*1000);
  let carVin_PeriodicMaintenance_400 = "carVin_PeriodicMaintenance_400_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_400 = garageId_Garages_400;
  let intervalKm_PeriodicMaintenance_400 = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_PeriodicMaintenance_400 = Math.floor(Math.random() * 1000) + 1990;
  let planType_PeriodicMaintenance_400 = "planType_PeriodicMaintenance_400_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_400 = "pmId_PeriodicMaintenance_400_" + Math.floor(Math.random()*1000);
  let status_PeriodicMaintenance_400 = "open";
  let tasks_PeriodicMaintenance_400 = [];
  createPMPlan(PMUpdate_PeriodicMaintenance_400, carVin_PeriodicMaintenance_400, garageId_PeriodicMaintenance_400, intervalKm_PeriodicMaintenance_400, intervalMonths_PeriodicMaintenance_400, planType_PeriodicMaintenance_400, pmId_PeriodicMaintenance_400, status_PeriodicMaintenance_400, tasks_PeriodicMaintenance_400);
  verifyPeriodicMaintenanceExists(PMUpdate_PeriodicMaintenance_400, carVin_PeriodicMaintenance_400, garageId_PeriodicMaintenance_400, intervalKm_PeriodicMaintenance_400, intervalMonths_PeriodicMaintenance_400, planType_PeriodicMaintenance_400, pmId_PeriodicMaintenance_400, status_PeriodicMaintenance_400, tasks_PeriodicMaintenance_400);

  // --- Teardown ---
  deletePMPlan(pmId_PeriodicMaintenance_400);
  verifyPeriodicMaintenanceDeleted(pmId_PeriodicMaintenance_400);
  deleteCar(vin_Cars_400);
  verifyCarsDeleted(vin_Cars_400);
  deleteCustomer(customerId_Customers_400);
  verifyCustomersDeleted(customerId_Customers_400);
  deleteGarage(garageId_Garages_400);
  verifyGaragesDeleted(garageId_Garages_400);
  deleteChain(chainId_Chains_400);
  verifyChainsDeleted(chainId_Chains_400);
});

// Story: Deep Chain Chains_Garages_Customers_Cars_RepairOrders
bthread("chain:Chains_Garages_Customers_Cars_RepairOrders", function () {
  // -> Creating Chains
  let active_Chains_500 = true;
  let chainId_Chains_500 = "chainId_Chains_500_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_500 = "chainUpdate_Chains_500_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_500 = {};
  let name_Chains_500 = "name_Chains_500_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_500 = "uChains_500_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_500, chainId_Chains_500, chainUpdate_Chains_500, hqAddress_Chains_500, name_Chains_500, supportEmail_Chains_500);
  verifyChainsExists(active_Chains_500, chainId_Chains_500, chainUpdate_Chains_500, hqAddress_Chains_500, name_Chains_500, supportEmail_Chains_500);

  // -> Creating Garages
  let active_Garages_500 = true;
  let address_Garages_500 = {};
  let bayCount_Garages_500 = Math.floor(Math.random() * 1000) + 1990;
  let chainId_Garages_500 = chainId_Chains_500;
  let garageId_Garages_500 = "garageId_Garages_500_" + Math.floor(Math.random()*1000);
  let garageUpdate_Garages_500 = "garageUpdate_Garages_500_" + Math.floor(Math.random()*1000);
  let name_Garages_500 = "name_Garages_500_" + Math.floor(Math.random()*1000);
  let phone_Garages_500 = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_Garages_500 = [];
  createGarage(active_Garages_500, address_Garages_500, bayCount_Garages_500, chainId_Garages_500, garageId_Garages_500, garageUpdate_Garages_500, name_Garages_500, phone_Garages_500, servicesOffered_Garages_500);
  verifyGaragesExists(active_Garages_500, address_Garages_500, bayCount_Garages_500, chainId_Garages_500, garageId_Garages_500, garageUpdate_Garages_500, name_Garages_500, phone_Garages_500, servicesOffered_Garages_500);

  // -> Creating Customers
  let CustomerUpdate_Customers_500 = "CustomerUpdate_Customers_500_" + Math.floor(Math.random()*1000);
  let customerId_Customers_500 = "customerId_Customers_500_" + Math.floor(Math.random()*1000);
  let email_Customers_500 = "uCustomers_500_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_500 = "fullName_Customers_500_" + Math.floor(Math.random()*1000);
  let phone_Customers_500 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_500 = garageId_Garages_500;
  let type_Customers_500 = "type_Customers_500_" + Math.floor(Math.random()*1000);
  createCustomer(CustomerUpdate_Customers_500, customerId_Customers_500, email_Customers_500, fullName_Customers_500, phone_Customers_500, preferredGarageId_Customers_500, type_Customers_500);
  verifyCustomersExists(CustomerUpdate_Customers_500, customerId_Customers_500, email_Customers_500, fullName_Customers_500, phone_Customers_500, preferredGarageId_Customers_500, type_Customers_500);

  // -> Creating Cars
  let CarUpdate_Cars_500 = "CarUpdate_Cars_500_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_500 = garageId_Garages_500;
  let make_Cars_500 = "make_Cars_500_" + Math.floor(Math.random()*1000);
  let mileage_Cars_500 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_500 = "model_Cars_500_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_500 = customerId_Customers_500;
  let vin_Cars_500 = "vin_Cars_500_" + Math.floor(Math.random()*1000);
  let year_Cars_500 = Math.floor(Math.random() * 1000) + 1990;
  createCar(CarUpdate_Cars_500, homeGarageId_Cars_500, make_Cars_500, mileage_Cars_500, model_Cars_500, ownerCustomerId_Cars_500, vin_Cars_500, year_Cars_500);
  verifyCarsExists(CarUpdate_Cars_500, homeGarageId_Cars_500, make_Cars_500, mileage_Cars_500, model_Cars_500, ownerCustomerId_Cars_500, vin_Cars_500, year_Cars_500);

  // -> Creating RepairOrders
  let ROUpdate_RepairOrders_500 = "ROUpdate_RepairOrders_500_" + Math.floor(Math.random()*1000);
  let carVin_RepairOrders_500 = "carVin_RepairOrders_500_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_500 = "complaint_RepairOrders_500_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_500 = customerId_Customers_500;
  let garageId_RepairOrders_500 = garageId_Garages_500;
  let roId_RepairOrders_500 = "roId_RepairOrders_500_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_500 = "open";
  createRepairOrder(ROUpdate_RepairOrders_500, carVin_RepairOrders_500, complaint_RepairOrders_500, customerId_RepairOrders_500, garageId_RepairOrders_500, roId_RepairOrders_500, status_RepairOrders_500);
  verifyRepairOrdersExists(ROUpdate_RepairOrders_500, carVin_RepairOrders_500, complaint_RepairOrders_500, customerId_RepairOrders_500, garageId_RepairOrders_500, roId_RepairOrders_500, status_RepairOrders_500);

  // --- Teardown ---
  deleteRepairOrder(roId_RepairOrders_500);
  verifyRepairOrdersDeleted(roId_RepairOrders_500);
  deleteCar(vin_Cars_500);
  verifyCarsDeleted(vin_Cars_500);
  deleteCustomer(customerId_Customers_500);
  verifyCustomersDeleted(customerId_Customers_500);
  deleteGarage(garageId_Garages_500);
  verifyGaragesDeleted(garageId_Garages_500);
  deleteChain(chainId_Chains_500);
  verifyChainsDeleted(chainId_Chains_500);
});

// Story: Deep Chain Chains_Garages_Customers_RepairOrders
bthread("chain:Chains_Garages_Customers_RepairOrders", function () {
  // -> Creating Chains
  let active_Chains_600 = true;
  let chainId_Chains_600 = "chainId_Chains_600_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_600 = "chainUpdate_Chains_600_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_600 = {};
  let name_Chains_600 = "name_Chains_600_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_600 = "uChains_600_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_600, chainId_Chains_600, chainUpdate_Chains_600, hqAddress_Chains_600, name_Chains_600, supportEmail_Chains_600);
  verifyChainsExists(active_Chains_600, chainId_Chains_600, chainUpdate_Chains_600, hqAddress_Chains_600, name_Chains_600, supportEmail_Chains_600);

  // -> Creating Garages
  let active_Garages_600 = true;
  let address_Garages_600 = {};
  let bayCount_Garages_600 = Math.floor(Math.random() * 1000) + 1990;
  let chainId_Garages_600 = chainId_Chains_600;
  let garageId_Garages_600 = "garageId_Garages_600_" + Math.floor(Math.random()*1000);
  let garageUpdate_Garages_600 = "garageUpdate_Garages_600_" + Math.floor(Math.random()*1000);
  let name_Garages_600 = "name_Garages_600_" + Math.floor(Math.random()*1000);
  let phone_Garages_600 = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_Garages_600 = [];
  createGarage(active_Garages_600, address_Garages_600, bayCount_Garages_600, chainId_Garages_600, garageId_Garages_600, garageUpdate_Garages_600, name_Garages_600, phone_Garages_600, servicesOffered_Garages_600);
  verifyGaragesExists(active_Garages_600, address_Garages_600, bayCount_Garages_600, chainId_Garages_600, garageId_Garages_600, garageUpdate_Garages_600, name_Garages_600, phone_Garages_600, servicesOffered_Garages_600);

  // -> Creating Customers
  let CustomerUpdate_Customers_600 = "CustomerUpdate_Customers_600_" + Math.floor(Math.random()*1000);
  let customerId_Customers_600 = "customerId_Customers_600_" + Math.floor(Math.random()*1000);
  let email_Customers_600 = "uCustomers_600_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_600 = "fullName_Customers_600_" + Math.floor(Math.random()*1000);
  let phone_Customers_600 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_600 = garageId_Garages_600;
  let type_Customers_600 = "type_Customers_600_" + Math.floor(Math.random()*1000);
  createCustomer(CustomerUpdate_Customers_600, customerId_Customers_600, email_Customers_600, fullName_Customers_600, phone_Customers_600, preferredGarageId_Customers_600, type_Customers_600);
  verifyCustomersExists(CustomerUpdate_Customers_600, customerId_Customers_600, email_Customers_600, fullName_Customers_600, phone_Customers_600, preferredGarageId_Customers_600, type_Customers_600);

  // -> Creating Cars
  let CarUpdate_Cars_600 = "CarUpdate_Cars_600_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_600 = garageId_Garages_600;
  let make_Cars_600 = "make_Cars_600_" + Math.floor(Math.random()*1000);
  let mileage_Cars_600 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_600 = "model_Cars_600_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_600 = customerId_Customers_600;
  let vin_Cars_600 = "vin_Cars_600_" + Math.floor(Math.random()*1000);
  let year_Cars_600 = Math.floor(Math.random() * 1000) + 1990;
  createCar(CarUpdate_Cars_600, homeGarageId_Cars_600, make_Cars_600, mileage_Cars_600, model_Cars_600, ownerCustomerId_Cars_600, vin_Cars_600, year_Cars_600);
  verifyCarsExists(CarUpdate_Cars_600, homeGarageId_Cars_600, make_Cars_600, mileage_Cars_600, model_Cars_600, ownerCustomerId_Cars_600, vin_Cars_600, year_Cars_600);

  // -> Creating RepairOrders
  let ROUpdate_RepairOrders_600 = "ROUpdate_RepairOrders_600_" + Math.floor(Math.random()*1000);
  let carVin_RepairOrders_600 = "carVin_RepairOrders_600_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_600 = "complaint_RepairOrders_600_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_600 = customerId_Customers_600;
  let garageId_RepairOrders_600 = garageId_Garages_600;
  let roId_RepairOrders_600 = "roId_RepairOrders_600_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_600 = "open";
  createRepairOrder(ROUpdate_RepairOrders_600, carVin_RepairOrders_600, complaint_RepairOrders_600, customerId_RepairOrders_600, garageId_RepairOrders_600, roId_RepairOrders_600, status_RepairOrders_600);
  verifyRepairOrdersExists(ROUpdate_RepairOrders_600, carVin_RepairOrders_600, complaint_RepairOrders_600, customerId_RepairOrders_600, garageId_RepairOrders_600, roId_RepairOrders_600, status_RepairOrders_600);

  // --- Teardown ---
  deleteRepairOrder(roId_RepairOrders_600);
  verifyRepairOrdersDeleted(roId_RepairOrders_600);
  deleteCustomer(customerId_Customers_600);
  verifyCustomersDeleted(customerId_Customers_600);
  deleteGarage(garageId_Garages_600);
  verifyGaragesDeleted(garageId_Garages_600);
  deleteChain(chainId_Chains_600);
  verifyChainsDeleted(chainId_Chains_600);
});

// Story: Deep Chain Chains_Garages_Cars_PeriodicMaintenance
bthread("chain:Chains_Garages_Cars_PeriodicMaintenance", function () {
  // -> Creating Chains
  let active_Chains_700 = true;
  let chainId_Chains_700 = "chainId_Chains_700_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_700 = "chainUpdate_Chains_700_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_700 = {};
  let name_Chains_700 = "name_Chains_700_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_700 = "uChains_700_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_700, chainId_Chains_700, chainUpdate_Chains_700, hqAddress_Chains_700, name_Chains_700, supportEmail_Chains_700);
  verifyChainsExists(active_Chains_700, chainId_Chains_700, chainUpdate_Chains_700, hqAddress_Chains_700, name_Chains_700, supportEmail_Chains_700);

  // -> Creating Garages
  let active_Garages_700 = true;
  let address_Garages_700 = {};
  let bayCount_Garages_700 = Math.floor(Math.random() * 1000) + 1990;
  let chainId_Garages_700 = chainId_Chains_700;
  let garageId_Garages_700 = "garageId_Garages_700_" + Math.floor(Math.random()*1000);
  let garageUpdate_Garages_700 = "garageUpdate_Garages_700_" + Math.floor(Math.random()*1000);
  let name_Garages_700 = "name_Garages_700_" + Math.floor(Math.random()*1000);
  let phone_Garages_700 = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_Garages_700 = [];
  createGarage(active_Garages_700, address_Garages_700, bayCount_Garages_700, chainId_Garages_700, garageId_Garages_700, garageUpdate_Garages_700, name_Garages_700, phone_Garages_700, servicesOffered_Garages_700);
  verifyGaragesExists(active_Garages_700, address_Garages_700, bayCount_Garages_700, chainId_Garages_700, garageId_Garages_700, garageUpdate_Garages_700, name_Garages_700, phone_Garages_700, servicesOffered_Garages_700);

  // -> Creating Customers
  let CustomerUpdate_Customers_700 = "CustomerUpdate_Customers_700_" + Math.floor(Math.random()*1000);
  let customerId_Customers_700 = "customerId_Customers_700_" + Math.floor(Math.random()*1000);
  let email_Customers_700 = "uCustomers_700_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_700 = "fullName_Customers_700_" + Math.floor(Math.random()*1000);
  let phone_Customers_700 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_700 = garageId_Garages_700;
  let type_Customers_700 = "type_Customers_700_" + Math.floor(Math.random()*1000);
  createCustomer(CustomerUpdate_Customers_700, customerId_Customers_700, email_Customers_700, fullName_Customers_700, phone_Customers_700, preferredGarageId_Customers_700, type_Customers_700);
  verifyCustomersExists(CustomerUpdate_Customers_700, customerId_Customers_700, email_Customers_700, fullName_Customers_700, phone_Customers_700, preferredGarageId_Customers_700, type_Customers_700);

  // -> Creating Cars
  let CarUpdate_Cars_700 = "CarUpdate_Cars_700_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_700 = garageId_Garages_700;
  let make_Cars_700 = "make_Cars_700_" + Math.floor(Math.random()*1000);
  let mileage_Cars_700 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_700 = "model_Cars_700_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_700 = customerId_Customers_700;
  let vin_Cars_700 = "vin_Cars_700_" + Math.floor(Math.random()*1000);
  let year_Cars_700 = Math.floor(Math.random() * 1000) + 1990;
  createCar(CarUpdate_Cars_700, homeGarageId_Cars_700, make_Cars_700, mileage_Cars_700, model_Cars_700, ownerCustomerId_Cars_700, vin_Cars_700, year_Cars_700);
  verifyCarsExists(CarUpdate_Cars_700, homeGarageId_Cars_700, make_Cars_700, mileage_Cars_700, model_Cars_700, ownerCustomerId_Cars_700, vin_Cars_700, year_Cars_700);

  // -> Creating PeriodicMaintenance
  let PMUpdate_PeriodicMaintenance_700 = "PMUpdate_PeriodicMaintenance_700_" + Math.floor(Math.random()*1000);
  let carVin_PeriodicMaintenance_700 = "carVin_PeriodicMaintenance_700_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_700 = garageId_Garages_700;
  let intervalKm_PeriodicMaintenance_700 = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_PeriodicMaintenance_700 = Math.floor(Math.random() * 1000) + 1990;
  let planType_PeriodicMaintenance_700 = "planType_PeriodicMaintenance_700_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_700 = "pmId_PeriodicMaintenance_700_" + Math.floor(Math.random()*1000);
  let status_PeriodicMaintenance_700 = "open";
  let tasks_PeriodicMaintenance_700 = [];
  createPMPlan(PMUpdate_PeriodicMaintenance_700, carVin_PeriodicMaintenance_700, garageId_PeriodicMaintenance_700, intervalKm_PeriodicMaintenance_700, intervalMonths_PeriodicMaintenance_700, planType_PeriodicMaintenance_700, pmId_PeriodicMaintenance_700, status_PeriodicMaintenance_700, tasks_PeriodicMaintenance_700);
  verifyPeriodicMaintenanceExists(PMUpdate_PeriodicMaintenance_700, carVin_PeriodicMaintenance_700, garageId_PeriodicMaintenance_700, intervalKm_PeriodicMaintenance_700, intervalMonths_PeriodicMaintenance_700, planType_PeriodicMaintenance_700, pmId_PeriodicMaintenance_700, status_PeriodicMaintenance_700, tasks_PeriodicMaintenance_700);

  // --- Teardown ---
  deletePMPlan(pmId_PeriodicMaintenance_700);
  verifyPeriodicMaintenanceDeleted(pmId_PeriodicMaintenance_700);
  deleteCar(vin_Cars_700);
  verifyCarsDeleted(vin_Cars_700);
  deleteGarage(garageId_Garages_700);
  verifyGaragesDeleted(garageId_Garages_700);
  deleteChain(chainId_Chains_700);
  verifyChainsDeleted(chainId_Chains_700);
});

// Story: Deep Chain Chains_Garages_Cars_RepairOrders
bthread("chain:Chains_Garages_Cars_RepairOrders", function () {
  // -> Creating Chains
  let active_Chains_800 = true;
  let chainId_Chains_800 = "chainId_Chains_800_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_800 = "chainUpdate_Chains_800_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_800 = {};
  let name_Chains_800 = "name_Chains_800_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_800 = "uChains_800_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_800, chainId_Chains_800, chainUpdate_Chains_800, hqAddress_Chains_800, name_Chains_800, supportEmail_Chains_800);
  verifyChainsExists(active_Chains_800, chainId_Chains_800, chainUpdate_Chains_800, hqAddress_Chains_800, name_Chains_800, supportEmail_Chains_800);

  // -> Creating Garages
  let active_Garages_800 = true;
  let address_Garages_800 = {};
  let bayCount_Garages_800 = Math.floor(Math.random() * 1000) + 1990;
  let chainId_Garages_800 = chainId_Chains_800;
  let garageId_Garages_800 = "garageId_Garages_800_" + Math.floor(Math.random()*1000);
  let garageUpdate_Garages_800 = "garageUpdate_Garages_800_" + Math.floor(Math.random()*1000);
  let name_Garages_800 = "name_Garages_800_" + Math.floor(Math.random()*1000);
  let phone_Garages_800 = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_Garages_800 = [];
  createGarage(active_Garages_800, address_Garages_800, bayCount_Garages_800, chainId_Garages_800, garageId_Garages_800, garageUpdate_Garages_800, name_Garages_800, phone_Garages_800, servicesOffered_Garages_800);
  verifyGaragesExists(active_Garages_800, address_Garages_800, bayCount_Garages_800, chainId_Garages_800, garageId_Garages_800, garageUpdate_Garages_800, name_Garages_800, phone_Garages_800, servicesOffered_Garages_800);

  // -> Creating Customers
  let CustomerUpdate_Customers_800 = "CustomerUpdate_Customers_800_" + Math.floor(Math.random()*1000);
  let customerId_Customers_800 = "customerId_Customers_800_" + Math.floor(Math.random()*1000);
  let email_Customers_800 = "uCustomers_800_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_800 = "fullName_Customers_800_" + Math.floor(Math.random()*1000);
  let phone_Customers_800 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_800 = garageId_Garages_800;
  let type_Customers_800 = "type_Customers_800_" + Math.floor(Math.random()*1000);
  createCustomer(CustomerUpdate_Customers_800, customerId_Customers_800, email_Customers_800, fullName_Customers_800, phone_Customers_800, preferredGarageId_Customers_800, type_Customers_800);
  verifyCustomersExists(CustomerUpdate_Customers_800, customerId_Customers_800, email_Customers_800, fullName_Customers_800, phone_Customers_800, preferredGarageId_Customers_800, type_Customers_800);

  // -> Creating Cars
  let CarUpdate_Cars_800 = "CarUpdate_Cars_800_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_800 = garageId_Garages_800;
  let make_Cars_800 = "make_Cars_800_" + Math.floor(Math.random()*1000);
  let mileage_Cars_800 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_800 = "model_Cars_800_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_800 = customerId_Customers_800;
  let vin_Cars_800 = "vin_Cars_800_" + Math.floor(Math.random()*1000);
  let year_Cars_800 = Math.floor(Math.random() * 1000) + 1990;
  createCar(CarUpdate_Cars_800, homeGarageId_Cars_800, make_Cars_800, mileage_Cars_800, model_Cars_800, ownerCustomerId_Cars_800, vin_Cars_800, year_Cars_800);
  verifyCarsExists(CarUpdate_Cars_800, homeGarageId_Cars_800, make_Cars_800, mileage_Cars_800, model_Cars_800, ownerCustomerId_Cars_800, vin_Cars_800, year_Cars_800);

  // -> Creating RepairOrders
  let ROUpdate_RepairOrders_800 = "ROUpdate_RepairOrders_800_" + Math.floor(Math.random()*1000);
  let carVin_RepairOrders_800 = "carVin_RepairOrders_800_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_800 = "complaint_RepairOrders_800_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_800 = customerId_Customers_800;
  let garageId_RepairOrders_800 = garageId_Garages_800;
  let roId_RepairOrders_800 = "roId_RepairOrders_800_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_800 = "open";
  createRepairOrder(ROUpdate_RepairOrders_800, carVin_RepairOrders_800, complaint_RepairOrders_800, customerId_RepairOrders_800, garageId_RepairOrders_800, roId_RepairOrders_800, status_RepairOrders_800);
  verifyRepairOrdersExists(ROUpdate_RepairOrders_800, carVin_RepairOrders_800, complaint_RepairOrders_800, customerId_RepairOrders_800, garageId_RepairOrders_800, roId_RepairOrders_800, status_RepairOrders_800);

  // --- Teardown ---
  deleteRepairOrder(roId_RepairOrders_800);
  verifyRepairOrdersDeleted(roId_RepairOrders_800);
  deleteCar(vin_Cars_800);
  verifyCarsDeleted(vin_Cars_800);
  deleteGarage(garageId_Garages_800);
  verifyGaragesDeleted(garageId_Garages_800);
  deleteChain(chainId_Chains_800);
  verifyChainsDeleted(chainId_Chains_800);
});

// Story: Deep Chain Chains_Garages_PeriodicMaintenance
bthread("chain:Chains_Garages_PeriodicMaintenance", function () {
  // -> Creating Chains
  let active_Chains_900 = true;
  let chainId_Chains_900 = "chainId_Chains_900_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_900 = "chainUpdate_Chains_900_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_900 = {};
  let name_Chains_900 = "name_Chains_900_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_900 = "uChains_900_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_900, chainId_Chains_900, chainUpdate_Chains_900, hqAddress_Chains_900, name_Chains_900, supportEmail_Chains_900);
  verifyChainsExists(active_Chains_900, chainId_Chains_900, chainUpdate_Chains_900, hqAddress_Chains_900, name_Chains_900, supportEmail_Chains_900);

  // -> Creating Garages
  let active_Garages_900 = true;
  let address_Garages_900 = {};
  let bayCount_Garages_900 = Math.floor(Math.random() * 1000) + 1990;
  let chainId_Garages_900 = chainId_Chains_900;
  let garageId_Garages_900 = "garageId_Garages_900_" + Math.floor(Math.random()*1000);
  let garageUpdate_Garages_900 = "garageUpdate_Garages_900_" + Math.floor(Math.random()*1000);
  let name_Garages_900 = "name_Garages_900_" + Math.floor(Math.random()*1000);
  let phone_Garages_900 = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_Garages_900 = [];
  createGarage(active_Garages_900, address_Garages_900, bayCount_Garages_900, chainId_Garages_900, garageId_Garages_900, garageUpdate_Garages_900, name_Garages_900, phone_Garages_900, servicesOffered_Garages_900);
  verifyGaragesExists(active_Garages_900, address_Garages_900, bayCount_Garages_900, chainId_Garages_900, garageId_Garages_900, garageUpdate_Garages_900, name_Garages_900, phone_Garages_900, servicesOffered_Garages_900);

  // -> Creating Customers
  let CustomerUpdate_Customers_900 = "CustomerUpdate_Customers_900_" + Math.floor(Math.random()*1000);
  let customerId_Customers_900 = "customerId_Customers_900_" + Math.floor(Math.random()*1000);
  let email_Customers_900 = "uCustomers_900_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_900 = "fullName_Customers_900_" + Math.floor(Math.random()*1000);
  let phone_Customers_900 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_900 = garageId_Garages_900;
  let type_Customers_900 = "type_Customers_900_" + Math.floor(Math.random()*1000);
  createCustomer(CustomerUpdate_Customers_900, customerId_Customers_900, email_Customers_900, fullName_Customers_900, phone_Customers_900, preferredGarageId_Customers_900, type_Customers_900);
  verifyCustomersExists(CustomerUpdate_Customers_900, customerId_Customers_900, email_Customers_900, fullName_Customers_900, phone_Customers_900, preferredGarageId_Customers_900, type_Customers_900);

  // -> Creating Cars
  let CarUpdate_Cars_900 = "CarUpdate_Cars_900_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_900 = garageId_Garages_900;
  let make_Cars_900 = "make_Cars_900_" + Math.floor(Math.random()*1000);
  let mileage_Cars_900 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_900 = "model_Cars_900_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_900 = customerId_Customers_900;
  let vin_Cars_900 = "vin_Cars_900_" + Math.floor(Math.random()*1000);
  let year_Cars_900 = Math.floor(Math.random() * 1000) + 1990;
  createCar(CarUpdate_Cars_900, homeGarageId_Cars_900, make_Cars_900, mileage_Cars_900, model_Cars_900, ownerCustomerId_Cars_900, vin_Cars_900, year_Cars_900);
  verifyCarsExists(CarUpdate_Cars_900, homeGarageId_Cars_900, make_Cars_900, mileage_Cars_900, model_Cars_900, ownerCustomerId_Cars_900, vin_Cars_900, year_Cars_900);

  // -> Creating PeriodicMaintenance
  let PMUpdate_PeriodicMaintenance_900 = "PMUpdate_PeriodicMaintenance_900_" + Math.floor(Math.random()*1000);
  let carVin_PeriodicMaintenance_900 = "carVin_PeriodicMaintenance_900_" + Math.floor(Math.random()*1000);
  let garageId_PeriodicMaintenance_900 = garageId_Garages_900;
  let intervalKm_PeriodicMaintenance_900 = Math.floor(Math.random() * 1000) + 1990;
  let intervalMonths_PeriodicMaintenance_900 = Math.floor(Math.random() * 1000) + 1990;
  let planType_PeriodicMaintenance_900 = "planType_PeriodicMaintenance_900_" + Math.floor(Math.random()*1000);
  let pmId_PeriodicMaintenance_900 = "pmId_PeriodicMaintenance_900_" + Math.floor(Math.random()*1000);
  let status_PeriodicMaintenance_900 = "open";
  let tasks_PeriodicMaintenance_900 = [];
  createPMPlan(PMUpdate_PeriodicMaintenance_900, carVin_PeriodicMaintenance_900, garageId_PeriodicMaintenance_900, intervalKm_PeriodicMaintenance_900, intervalMonths_PeriodicMaintenance_900, planType_PeriodicMaintenance_900, pmId_PeriodicMaintenance_900, status_PeriodicMaintenance_900, tasks_PeriodicMaintenance_900);
  verifyPeriodicMaintenanceExists(PMUpdate_PeriodicMaintenance_900, carVin_PeriodicMaintenance_900, garageId_PeriodicMaintenance_900, intervalKm_PeriodicMaintenance_900, intervalMonths_PeriodicMaintenance_900, planType_PeriodicMaintenance_900, pmId_PeriodicMaintenance_900, status_PeriodicMaintenance_900, tasks_PeriodicMaintenance_900);

  // --- Teardown ---
  deletePMPlan(pmId_PeriodicMaintenance_900);
  verifyPeriodicMaintenanceDeleted(pmId_PeriodicMaintenance_900);
  deleteGarage(garageId_Garages_900);
  verifyGaragesDeleted(garageId_Garages_900);
  deleteChain(chainId_Chains_900);
  verifyChainsDeleted(chainId_Chains_900);
});

// Story: Deep Chain Chains_Garages_RepairOrders
bthread("chain:Chains_Garages_RepairOrders", function () {
  // -> Creating Chains
  let active_Chains_1000 = true;
  let chainId_Chains_1000 = "chainId_Chains_1000_" + Math.floor(Math.random()*1000);
  let chainUpdate_Chains_1000 = "chainUpdate_Chains_1000_" + Math.floor(Math.random()*1000);
  let hqAddress_Chains_1000 = {};
  let name_Chains_1000 = "name_Chains_1000_" + Math.floor(Math.random()*1000);
  let supportEmail_Chains_1000 = "uChains_1000_" + Math.floor(Math.random()*1000) + "@test.com";
  createChain(active_Chains_1000, chainId_Chains_1000, chainUpdate_Chains_1000, hqAddress_Chains_1000, name_Chains_1000, supportEmail_Chains_1000);
  verifyChainsExists(active_Chains_1000, chainId_Chains_1000, chainUpdate_Chains_1000, hqAddress_Chains_1000, name_Chains_1000, supportEmail_Chains_1000);

  // -> Creating Garages
  let active_Garages_1000 = true;
  let address_Garages_1000 = {};
  let bayCount_Garages_1000 = Math.floor(Math.random() * 1000) + 1990;
  let chainId_Garages_1000 = chainId_Chains_1000;
  let garageId_Garages_1000 = "garageId_Garages_1000_" + Math.floor(Math.random()*1000);
  let garageUpdate_Garages_1000 = "garageUpdate_Garages_1000_" + Math.floor(Math.random()*1000);
  let name_Garages_1000 = "name_Garages_1000_" + Math.floor(Math.random()*1000);
  let phone_Garages_1000 = "+1555" + Math.floor(Math.random()*10000000);
  let servicesOffered_Garages_1000 = [];
  createGarage(active_Garages_1000, address_Garages_1000, bayCount_Garages_1000, chainId_Garages_1000, garageId_Garages_1000, garageUpdate_Garages_1000, name_Garages_1000, phone_Garages_1000, servicesOffered_Garages_1000);
  verifyGaragesExists(active_Garages_1000, address_Garages_1000, bayCount_Garages_1000, chainId_Garages_1000, garageId_Garages_1000, garageUpdate_Garages_1000, name_Garages_1000, phone_Garages_1000, servicesOffered_Garages_1000);

  // -> Creating Customers
  let CustomerUpdate_Customers_1000 = "CustomerUpdate_Customers_1000_" + Math.floor(Math.random()*1000);
  let customerId_Customers_1000 = "customerId_Customers_1000_" + Math.floor(Math.random()*1000);
  let email_Customers_1000 = "uCustomers_1000_" + Math.floor(Math.random()*1000) + "@test.com";
  let fullName_Customers_1000 = "fullName_Customers_1000_" + Math.floor(Math.random()*1000);
  let phone_Customers_1000 = "+1555" + Math.floor(Math.random()*10000000);
  let preferredGarageId_Customers_1000 = garageId_Garages_1000;
  let type_Customers_1000 = "type_Customers_1000_" + Math.floor(Math.random()*1000);
  createCustomer(CustomerUpdate_Customers_1000, customerId_Customers_1000, email_Customers_1000, fullName_Customers_1000, phone_Customers_1000, preferredGarageId_Customers_1000, type_Customers_1000);
  verifyCustomersExists(CustomerUpdate_Customers_1000, customerId_Customers_1000, email_Customers_1000, fullName_Customers_1000, phone_Customers_1000, preferredGarageId_Customers_1000, type_Customers_1000);

  // -> Creating Cars
  let CarUpdate_Cars_1000 = "CarUpdate_Cars_1000_" + Math.floor(Math.random()*1000);
  let homeGarageId_Cars_1000 = garageId_Garages_1000;
  let make_Cars_1000 = "make_Cars_1000_" + Math.floor(Math.random()*1000);
  let mileage_Cars_1000 = Math.floor(Math.random() * 1000) + 1990;
  let model_Cars_1000 = "model_Cars_1000_" + Math.floor(Math.random()*1000);
  let ownerCustomerId_Cars_1000 = customerId_Customers_1000;
  let vin_Cars_1000 = "vin_Cars_1000_" + Math.floor(Math.random()*1000);
  let year_Cars_1000 = Math.floor(Math.random() * 1000) + 1990;
  createCar(CarUpdate_Cars_1000, homeGarageId_Cars_1000, make_Cars_1000, mileage_Cars_1000, model_Cars_1000, ownerCustomerId_Cars_1000, vin_Cars_1000, year_Cars_1000);
  verifyCarsExists(CarUpdate_Cars_1000, homeGarageId_Cars_1000, make_Cars_1000, mileage_Cars_1000, model_Cars_1000, ownerCustomerId_Cars_1000, vin_Cars_1000, year_Cars_1000);

  // -> Creating RepairOrders
  let ROUpdate_RepairOrders_1000 = "ROUpdate_RepairOrders_1000_" + Math.floor(Math.random()*1000);
  let carVin_RepairOrders_1000 = "carVin_RepairOrders_1000_" + Math.floor(Math.random()*1000);
  let complaint_RepairOrders_1000 = "complaint_RepairOrders_1000_" + Math.floor(Math.random()*1000);
  let customerId_RepairOrders_1000 = customerId_Customers_1000;
  let garageId_RepairOrders_1000 = garageId_Garages_1000;
  let roId_RepairOrders_1000 = "roId_RepairOrders_1000_" + Math.floor(Math.random()*1000);
  let status_RepairOrders_1000 = "open";
  createRepairOrder(ROUpdate_RepairOrders_1000, carVin_RepairOrders_1000, complaint_RepairOrders_1000, customerId_RepairOrders_1000, garageId_RepairOrders_1000, roId_RepairOrders_1000, status_RepairOrders_1000);
  verifyRepairOrdersExists(ROUpdate_RepairOrders_1000, carVin_RepairOrders_1000, complaint_RepairOrders_1000, customerId_RepairOrders_1000, garageId_RepairOrders_1000, roId_RepairOrders_1000, status_RepairOrders_1000);

  // --- Teardown ---
  deleteRepairOrder(roId_RepairOrders_1000);
  verifyRepairOrdersDeleted(roId_RepairOrders_1000);
  deleteGarage(garageId_Garages_1000);
  verifyGaragesDeleted(garageId_Garages_1000);
  deleteChain(chainId_Chains_1000);
  verifyChainsDeleted(chainId_Chains_1000);
});
