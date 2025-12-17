/**
 * SCENARIO: Logistics Transfer Test
 * Description: Validates multi-site service capabilities.
 */
bthread("scenario:logistics:transfer", function () {
    let suffix = Date.now();
    let chainId = "ChainLog_" + suffix;
    let garageA = "GarageA_" + suffix;
    let garageB = "GarageB_" + suffix;
    let custId = "CustLog_" + suffix;
    let carId = "VinLog_" + suffix;

    // 1. Infrastructure
    createChain(chainId, "456ElmSt", chainId, "LogisticsCorp");
    createGarage("AddressA", 10, chainId, garageA, garageA, "NY", "GarageA", "5550001");
    createGarage("AddressB", 10, chainId, garageB, garageB, "LA", "GarageB", "5550002");
    createCustomer(custId, "jane@log.com", "JaneDoe", custId, "Jane", "5559999", "Regular");
    
    // 2. Car
    // Signature: createCar(id, make, mileage, model, ownerCustomerId, vin, year)
    createCar(carId, "Tesla", 500, "ModelS", custId, carId, 2023);

    // 3. Open RO in Garage A
    let roA = "ROA_" + suffix;
    // Signature: createRepairOrder(carVin, complaint, customerId, field1, field2, garageId, id, roId)
    createRepairOrder(carId, "Battery", custId, "dummy", "dummy", garageA, roA, roA);

    // 4. Attempt Open RO in Garage B (CRASH EXPECTED)
    let roB = "ROB_" + suffix;
    bp.log.info("Attempting concurrent service at secondary location (Should Fail Test)...");
    
    // The interface expects 200/201. The SUT will return 500.
    // Provengo will automatically mark this test as FAILED.
    createRepairOrder(carId, "Paint", custId, "dummy", "dummy", garageB, roB, roB);
});