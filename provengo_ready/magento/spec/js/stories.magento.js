// Auto-generated stories for magento
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
// Monitor: Customers Verification (Existence)
bthread("monitor:Customers:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCustomersAdded() });
    let customerId = (e.data.parameters && e.data.parameters["customerId"]) ? e.data.parameters["customerId"] : e.data["customerId"];
    let email = (e.data.parameters && e.data.parameters["email"]) ? e.data.parameters["email"] : e.data["email"];
    let newPassword = (e.data.parameters && e.data.parameters["newPassword"]) ? e.data.parameters["newPassword"] : e.data["newPassword"];
    let resetPasswordLinkToken = (e.data.parameters && e.data.parameters["resetPasswordLinkToken"]) ? e.data.parameters["resetPasswordLinkToken"] : e.data["resetPasswordLinkToken"];
    let resetToken = (e.data.parameters && e.data.parameters["resetToken"]) ? e.data.parameters["resetToken"] : e.data["resetToken"];
    let template = (e.data.parameters && e.data.parameters["template"]) ? e.data.parameters["template"] : e.data["template"];
    let websiteId = (e.data.parameters && e.data.parameters["websiteId"]) ? e.data.parameters["websiteId"] : e.data["websiteId"];
    verifyCustomersExists(customerId, email, newPassword, resetPasswordLinkToken, resetToken, template, websiteId);
  }
});

// Monitor: GuestCarts Verification (Existence)
bthread("monitor:GuestCarts:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    verifyGuestCartsExists(cartId);
  }
});

// Monitor: GuestCartsEstimateShippingMethods Verification (Existence)
bthread("monitor:GuestCartsEstimateShippingMethods:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsEstimateShippingMethodsAdded() });
    let address = (e.data.parameters && e.data.parameters["address"]) ? e.data.parameters["address"] : e.data["address"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyGuestCartsEstimateShippingMethodsExists(address, cartId, id);
  }
});

// Monitor: GuestCartsItems Verification (Existence)
bthread("monitor:GuestCartsItems:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsItemsAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let cartItem = (e.data.parameters && e.data.parameters["cartItem"]) ? e.data.parameters["cartItem"] : e.data["cartItem"];
    let quoteGuestCartManagementV1PlaceOrderPutBody = (e.data.parameters && e.data.parameters["quoteGuestCartManagementV1PlaceOrderPutBody"]) ? e.data.parameters["quoteGuestCartManagementV1PlaceOrderPutBody"] : e.data["quoteGuestCartManagementV1PlaceOrderPutBody"];
    // Block Deletion while Verifying Existence
    block(matchDeletedGuestCartsItems(cartId, cartItem, quoteGuestCartManagementV1PlaceOrderPutBody), function() { verifyGuestCartsItemsExists(cartId, cartItem, quoteGuestCartManagementV1PlaceOrderPutBody); });
  }
});

// Monitor: GuestCartsItems Verification (Absence)
bthread("monitor:GuestCartsItems:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedGuestCartsItems() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let cartItem = (e.data.parameters && e.data.parameters["cartItem"]) ? e.data.parameters["cartItem"] : e.data["cartItem"];
    let quoteGuestCartManagementV1PlaceOrderPutBody = (e.data.parameters && e.data.parameters["quoteGuestCartManagementV1PlaceOrderPutBody"]) ? e.data.parameters["quoteGuestCartManagementV1PlaceOrderPutBody"] : e.data["quoteGuestCartManagementV1PlaceOrderPutBody"];
    // Block Creation while Verifying Absence
    block(matchAnyGuestCartsItemsAdded(), function() { verifyGuestCartsItemsDoesNotExist(cartId, cartItem, quoteGuestCartManagementV1PlaceOrderPutBody); });
  }
});

// Monitor: GuestCartsBillingAddress Verification (Existence)
bthread("monitor:GuestCartsBillingAddress:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsBillingAddressAdded() });
    let address = (e.data.parameters && e.data.parameters["address"]) ? e.data.parameters["address"] : e.data["address"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let useForShipping = (e.data.parameters && e.data.parameters["useForShipping"]) ? e.data.parameters["useForShipping"] : e.data["useForShipping"];
    verifyGuestCartsBillingAddressExists(address, cartId, useForShipping);
  }
});

// Monitor: GuestCartTotals Verification (Existence)
bthread("monitor:GuestCartTotals:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartTotalsAdded() });
    let additionalData = (e.data.parameters && e.data.parameters["additionalData"]) ? e.data.parameters["additionalData"] : e.data["additionalData"];
    let addressInformation = (e.data.parameters && e.data.parameters["addressInformation"]) ? e.data.parameters["addressInformation"] : e.data["addressInformation"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let paymentMethod = (e.data.parameters && e.data.parameters["paymentMethod"]) ? e.data.parameters["paymentMethod"] : e.data["paymentMethod"];
    let shippingCarrierCode = (e.data.parameters && e.data.parameters["shippingCarrierCode"]) ? e.data.parameters["shippingCarrierCode"] : e.data["shippingCarrierCode"];
    let shippingMethodCode = (e.data.parameters && e.data.parameters["shippingMethodCode"]) ? e.data.parameters["shippingMethodCode"] : e.data["shippingMethodCode"];
    verifyGuestCartTotalsExists(additionalData, addressInformation, cartId, paymentMethod, shippingCarrierCode, shippingMethodCode);
  }
});

// Monitor: AdminToken Verification (Existence)
bthread("monitor:AdminToken:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAdminTokenAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let password = (e.data.parameters && e.data.parameters["password"]) ? e.data.parameters["password"] : e.data["password"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    verifyAdminTokenExists(id, password, username);
  }
});

// Monitor: GuestCartsPaymentInformation Verification (Existence)
bthread("monitor:GuestCartsPaymentInformation:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsPaymentInformationAdded() });
    let addressInformation = (e.data.parameters && e.data.parameters["addressInformation"]) ? e.data.parameters["addressInformation"] : e.data["addressInformation"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    verifyGuestCartsPaymentInformationExists(addressInformation, cartId);
  }
});

// Monitor: GuestCartsSetPaymentInformation Verification (Existence)
bthread("monitor:GuestCartsSetPaymentInformation:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsSetPaymentInformationAdded() });
    let billingAddress = (e.data.parameters && e.data.parameters["billingAddress"]) ? e.data.parameters["billingAddress"] : e.data["billingAddress"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let email = (e.data.parameters && e.data.parameters["email"]) ? e.data.parameters["email"] : e.data["email"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let paymentMethod = (e.data.parameters && e.data.parameters["paymentMethod"]) ? e.data.parameters["paymentMethod"] : e.data["paymentMethod"];
    verifyGuestCartsSetPaymentInformationExists(billingAddress, cartId, email, id, paymentMethod);
  }
});

// Monitor: GuestCartsShippingInformation Verification (Existence)
bthread("monitor:GuestCartsShippingInformation:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsShippingInformationAdded() });
    let addressInformation = (e.data.parameters && e.data.parameters["addressInformation"]) ? e.data.parameters["addressInformation"] : e.data["addressInformation"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyGuestCartsShippingInformationExists(addressInformation, cartId, id);
  }
});

// Monitor: GuestCartsTotalsInformation Verification (Existence)
bthread("monitor:GuestCartsTotalsInformation:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartsTotalsInformationAdded() });
    let addressInformation = (e.data.parameters && e.data.parameters["addressInformation"]) ? e.data.parameters["addressInformation"] : e.data["addressInformation"];
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyGuestCartsTotalsInformationExists(addressInformation, cartId, id);
  }
});

// Monitor: CustomerToken Verification (Existence)
bthread("monitor:CustomerToken:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCustomerTokenAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let password = (e.data.parameters && e.data.parameters["password"]) ? e.data.parameters["password"] : e.data["password"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    verifyCustomerTokenExists(id, password, username);
  }
});

// Monitor: GuestCartGiftMessage Verification (Existence)
bthread("monitor:GuestCartGiftMessage:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartGiftMessageAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let giftMessage = (e.data.parameters && e.data.parameters["giftMessage"]) ? e.data.parameters["giftMessage"] : e.data["giftMessage"];
    verifyGuestCartGiftMessageExists(cartId, giftMessage);
  }
});

// Monitor: GuestItemGiftMessage Verification (Existence)
bthread("monitor:GuestItemGiftMessage:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestItemGiftMessageAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let giftMessage = (e.data.parameters && e.data.parameters["giftMessage"]) ? e.data.parameters["giftMessage"] : e.data["giftMessage"];
    let itemId = (e.data.parameters && e.data.parameters["itemId"]) ? e.data.parameters["itemId"] : e.data["itemId"];
    verifyGuestItemGiftMessageExists(cartId, giftMessage, itemId);
  }
});

// Monitor: GuestCartCollectionPoint Verification (Existence)
bthread("monitor:GuestCartCollectionPoint:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartCollectionPointAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let collectionPointId = (e.data.parameters && e.data.parameters["collectionPointId"]) ? e.data.parameters["collectionPointId"] : e.data["collectionPointId"];
    let countryId = (e.data.parameters && e.data.parameters["countryId"]) ? e.data.parameters["countryId"] : e.data["countryId"];
    let postcode = (e.data.parameters && e.data.parameters["postcode"]) ? e.data.parameters["postcode"] : e.data["postcode"];
    // Block Deletion while Verifying Existence
    block(matchDeletedGuestCartCollectionPoint(cartId, collectionPointId, countryId, postcode), function() { verifyGuestCartCollectionPointExists(cartId, collectionPointId, countryId, postcode); });
  }
});

// Monitor: GuestCartCollectionPoint Verification (Absence)
bthread("monitor:GuestCartCollectionPoint:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedGuestCartCollectionPoint() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let collectionPointId = (e.data.parameters && e.data.parameters["collectionPointId"]) ? e.data.parameters["collectionPointId"] : e.data["collectionPointId"];
    let countryId = (e.data.parameters && e.data.parameters["countryId"]) ? e.data.parameters["countryId"] : e.data["countryId"];
    let postcode = (e.data.parameters && e.data.parameters["postcode"]) ? e.data.parameters["postcode"] : e.data["postcode"];
    // Block Creation while Verifying Absence
    block(matchAnyGuestCartCollectionPointAdded(), function() { verifyGuestCartCollectionPointDoesNotExist(cartId, collectionPointId, countryId, postcode); });
  }
});

// Monitor: GuestCartCollectionPointSelect Verification (Existence)
bthread("monitor:GuestCartCollectionPointSelect:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartCollectionPointSelectAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let entityId = (e.data.parameters && e.data.parameters["entityId"]) ? e.data.parameters["entityId"] : e.data["entityId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyGuestCartCollectionPointSelectExists(cartId, entityId, id);
  }
});

// Monitor: GuestCartDeliveryOption Verification (Existence)
bthread("monitor:GuestCartDeliveryOption:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartDeliveryOptionAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let selectedOption = (e.data.parameters && e.data.parameters["selectedOption"]) ? e.data.parameters["selectedOption"] : e.data["selectedOption"];
    verifyGuestCartDeliveryOptionExists(cartId, id, selectedOption);
  }
});

// Monitor: GuestCartCheckoutFields Verification (Existence)
bthread("monitor:GuestCartCheckoutFields:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartCheckoutFieldsAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let serviceSelection = (e.data.parameters && e.data.parameters["serviceSelection"]) ? e.data.parameters["serviceSelection"] : e.data["serviceSelection"];
    verifyGuestCartCheckoutFieldsExists(cartId, id, serviceSelection);
  }
});

// Monitor: GuestCartPickupLocation Verification (Existence)
bthread("monitor:GuestCartPickupLocation:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartPickupLocationAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let pickupLocationId = (e.data.parameters && e.data.parameters["pickupLocationId"]) ? e.data.parameters["pickupLocationId"] : e.data["pickupLocationId"];
    verifyGuestCartPickupLocationExists(cartId, id, pickupLocationId);
  }
});

// Monitor: GuestCartDeliveryPickupLocation Verification (Existence)
bthread("monitor:GuestCartDeliveryPickupLocation:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyGuestCartDeliveryPickupLocationAdded() });
    let cartId = (e.data.parameters && e.data.parameters["cartId"]) ? e.data.parameters["cartId"] : e.data["cartId"];
    let entityId = (e.data.parameters && e.data.parameters["entityId"]) ? e.data.parameters["entityId"] : e.data["entityId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifyGuestCartDeliveryPickupLocationExists(cartId, entityId, id);
  }
});

// Story: crud:Customers:linear:1
bthread("crud:Customers:linear:1", function () {
  // -> Creating Customers
  let customerId_Customers_100 = Math.floor(Math.random() * 1000);
  let email_Customers_100 = "email_Customers_100_" + Math.floor(Math.random()*1000);
  let newPassword_Customers_100 = "newPassword_Customers_100_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_Customers_100 = "resetPasswordLinkToken_Customers_100_" + Math.floor(Math.random()*1000);
  let resetToken_Customers_100 = "resetToken_Customers_100_" + Math.floor(Math.random()*1000);
  let template_Customers_100 = "template_Customers_100_" + Math.floor(Math.random()*1000);
  let websiteId_Customers_100 = Math.floor(Math.random() * 1000);
  customerAccountManagementV1ResetPasswordPost(customerId_Customers_100, email_Customers_100, newPassword_Customers_100, resetPasswordLinkToken_Customers_100, resetToken_Customers_100, template_Customers_100, websiteId_Customers_100, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Customers
  let customerId_Customers_upd_100 = customerId_Customers_100;
  let email_Customers_upd_100 = "email_Customers_upd_100_" + Math.floor(Math.random()*1000);
  let newPassword_Customers_upd_100 = "newPassword_Customers_upd_100_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_Customers_upd_100 = "resetPasswordLinkToken_Customers_upd_100_" + Math.floor(Math.random()*1000);
  let resetToken_Customers_upd_100 = "resetToken_Customers_upd_100_" + Math.floor(Math.random()*1000);
  let template_Customers_upd_100 = "template_Customers_upd_100_" + Math.floor(Math.random()*1000);
  let websiteId_Customers_upd_100 = Math.floor(Math.random() * 1000);
  customerAccountManagementV1InitiatePasswordResetPut(customerId_Customers_upd_100, email_Customers_upd_100, newPassword_Customers_upd_100, resetPasswordLinkToken_Customers_upd_100, resetToken_Customers_upd_100, template_Customers_upd_100, websiteId_Customers_upd_100, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCarts:linear:1
bthread("crud:GuestCarts:linear:1", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_110 = "cartId_GuestCarts_110_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_110, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for GuestCarts to prevent foreign key errors (has active dependents)
});

// Story: crud:GuestCartsEstimateShippingMethods:linear:1
bthread("crud:GuestCartsEstimateShippingMethods:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsEstimateShippingMethods
  let address_GuestCartsEstimateShippingMethods_120 = "address_GuestCartsEstimateShippingMethods_120_" + Math.floor(Math.random()*1000);
  let cartId_GuestCartsEstimateShippingMethods_120 = GuestCartsId;
  let id_GuestCartsEstimateShippingMethods_120 = "id_GuestCartsEstimateShippingMethods_120_" + Math.floor(Math.random()*1000);
  estimateShippingMethods(address_GuestCartsEstimateShippingMethods_120, cartId_GuestCartsEstimateShippingMethods_120, id_GuestCartsEstimateShippingMethods_120, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsItems:linear:1
bthread("crud:GuestCartsItems:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsItems
  let cartId_GuestCartsItems_130 = GuestCartsId;
  let cartItem_GuestCartsItems_130 = "cartItem_GuestCartsItems_130_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_130 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_130_" + Math.floor(Math.random()*1000);
  addOrUpdateCartItem(cartId_GuestCartsItems_130, cartItem_GuestCartsItems_130, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_130, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartsItems
  let cartId_GuestCartsItems_upd_130 = cartId_GuestCartsItems_130;
  let cartItem_GuestCartsItems_upd_130 = "cartItem_GuestCartsItems_upd_130_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_130 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_130_" + Math.floor(Math.random()*1000);
  quoteGuestCartManagementV1PlaceOrderPut(cartId_GuestCartsItems_upd_130, cartItem_GuestCartsItems_upd_130, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_130, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GuestCartsItems
  quoteGuestCouponManagementV1RemoveDelete(cartId_GuestCartsItems_130, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsBillingAddress:linear:1
bthread("crud:GuestCartsBillingAddress:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsBillingAddress
  let address_GuestCartsBillingAddress_140 = {};
  let cartId_GuestCartsBillingAddress_140 = GuestCartsId;
  let useForShipping_GuestCartsBillingAddress_140 = true;
  quoteGuestBillingAddressManagementV1AssignPost(address_GuestCartsBillingAddress_140, cartId_GuestCartsBillingAddress_140, useForShipping_GuestCartsBillingAddress_140, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartTotals:linear:1
bthread("crud:GuestCartTotals:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartTotals
  let additionalData_GuestCartTotals_150 = "additionalData_GuestCartTotals_150_" + Math.floor(Math.random()*1000);
  let addressInformation_GuestCartTotals_150 = {};
  let cartId_GuestCartTotals_150 = GuestCartsId;
  let paymentMethod_GuestCartTotals_150 = "paymentMethod_GuestCartTotals_150_" + Math.floor(Math.random()*1000);
  let shippingCarrierCode_GuestCartTotals_150 = "shippingCarrierCode_GuestCartTotals_150_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCartTotals_150 = "shippingMethodCode_GuestCartTotals_150_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCartTotals_150, addressInformation_GuestCartTotals_150, cartId_GuestCartTotals_150, paymentMethod_GuestCartTotals_150, shippingCarrierCode_GuestCartTotals_150, shippingMethodCode_GuestCartTotals_150, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartTotals
  let additionalData_GuestCartTotals_upd_150 = "additionalData_GuestCartTotals_upd_150_" + Math.floor(Math.random()*1000);
  let addressInformation_GuestCartTotals_upd_150 = {};
  let cartId_GuestCartTotals_upd_150 = cartId_GuestCartTotals_150;
  let paymentMethod_GuestCartTotals_upd_150 = "paymentMethod_GuestCartTotals_upd_150_" + Math.floor(Math.random()*1000);
  let shippingCarrierCode_GuestCartTotals_upd_150 = "shippingCarrierCode_GuestCartTotals_upd_150_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCartTotals_upd_150 = "shippingMethodCode_GuestCartTotals_upd_150_" + Math.floor(Math.random()*1000);
  quoteGuestCartTotalManagementV1CollectTotalsPut(additionalData_GuestCartTotals_upd_150, addressInformation_GuestCartTotals_upd_150, cartId_GuestCartTotals_upd_150, paymentMethod_GuestCartTotals_upd_150, shippingCarrierCode_GuestCartTotals_upd_150, shippingMethodCode_GuestCartTotals_upd_150, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:AdminToken:linear:1
bthread("crud:AdminToken:linear:1", function () {
  // -> Creating AdminToken
  let id_AdminToken_160 = "id_AdminToken_160_" + Math.floor(Math.random()*1000);
  let password_AdminToken_160 = "password_AdminToken_160_" + Math.floor(Math.random()*1000);
  let username_AdminToken_160 = "username_AdminToken_160_" + Math.floor(Math.random()*1000);
  integrationAdminTokenServiceV1CreateAdminAccessTokenPost(id_AdminToken_160, password_AdminToken_160, username_AdminToken_160, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsPaymentInformation:linear:1
bthread("crud:GuestCartsPaymentInformation:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsPaymentInformation
  let addressInformation_GuestCartsPaymentInformation_170 = {};
  let cartId_GuestCartsPaymentInformation_170 = GuestCartsId;
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsPaymentInformation_170, cartId_GuestCartsPaymentInformation_170, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsSetPaymentInformation:linear:1
bthread("crud:GuestCartsSetPaymentInformation:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsSetPaymentInformation
  let billingAddress_GuestCartsSetPaymentInformation_180 = {};
  let cartId_GuestCartsSetPaymentInformation_180 = GuestCartsId;
  let email_GuestCartsSetPaymentInformation_180 = "email_GuestCartsSetPaymentInformation_180_" + Math.floor(Math.random()*1000);
  let id_GuestCartsSetPaymentInformation_180 = "id_GuestCartsSetPaymentInformation_180_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCartsSetPaymentInformation_180 = {};
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost(billingAddress_GuestCartsSetPaymentInformation_180, cartId_GuestCartsSetPaymentInformation_180, email_GuestCartsSetPaymentInformation_180, id_GuestCartsSetPaymentInformation_180, paymentMethod_GuestCartsSetPaymentInformation_180, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsShippingInformation:linear:1
bthread("crud:GuestCartsShippingInformation:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsShippingInformation
  let addressInformation_GuestCartsShippingInformation_190 = {};
  let cartId_GuestCartsShippingInformation_190 = GuestCartsId;
  let id_GuestCartsShippingInformation_190 = "id_GuestCartsShippingInformation_190_" + Math.floor(Math.random()*1000);
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsShippingInformation_190, cartId_GuestCartsShippingInformation_190, id_GuestCartsShippingInformation_190, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsTotalsInformation:linear:1
bthread("crud:GuestCartsTotalsInformation:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsTotalsInformation
  let addressInformation_GuestCartsTotalsInformation_200 = {};
  let cartId_GuestCartsTotalsInformation_200 = GuestCartsId;
  let id_GuestCartsTotalsInformation_200 = "id_GuestCartsTotalsInformation_200_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(addressInformation_GuestCartsTotalsInformation_200, cartId_GuestCartsTotalsInformation_200, id_GuestCartsTotalsInformation_200, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:CustomerToken:linear:1
bthread("crud:CustomerToken:linear:1", function () {
  // -> Creating CustomerToken
  let id_CustomerToken_210 = "id_CustomerToken_210_" + Math.floor(Math.random()*1000);
  let password_CustomerToken_210 = "password_CustomerToken_210_" + Math.floor(Math.random()*1000);
  let username_CustomerToken_210 = "username_CustomerToken_210_" + Math.floor(Math.random()*1000);
  integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost(id_CustomerToken_210, password_CustomerToken_210, username_CustomerToken_210, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartGiftMessage:linear:1
bthread("crud:GuestCartGiftMessage:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartGiftMessage
  let cartId_GuestCartGiftMessage_220 = GuestCartsId;
  let giftMessage_GuestCartGiftMessage_220 = {};
  giftMessageGuestCartRepositoryV1SavePost(cartId_GuestCartGiftMessage_220, giftMessage_GuestCartGiftMessage_220, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestItemGiftMessage:linear:1
bthread("crud:GuestItemGiftMessage:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestItemGiftMessage
  let cartId_GuestItemGiftMessage_230 = GuestCartsId;
  let giftMessage_GuestItemGiftMessage_230 = {};
  let itemId_GuestItemGiftMessage_230 = Math.floor(Math.random() * 1000);
  giftMessageGuestItemRepositoryV1SavePost(cartId_GuestItemGiftMessage_230, giftMessage_GuestItemGiftMessage_230, itemId_GuestItemGiftMessage_230, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCollectionPoint:linear:1
bthread("crud:GuestCartCollectionPoint:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_240 = GuestCartsId;
  let collectionPointId_GuestCartCollectionPoint_240 = "collectionPointId_GuestCartCollectionPoint_240_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_240 = "countryId_GuestCartCollectionPoint_240_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_240 = "postcode_GuestCartCollectionPoint_240_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPoint_240, collectionPointId_GuestCartCollectionPoint_240, countryId_GuestCartCollectionPoint_240, postcode_GuestCartCollectionPoint_240, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_upd_240 = cartId_GuestCartCollectionPoint_240;
  let collectionPointId_GuestCartCollectionPoint_upd_240 = "collectionPointId_GuestCartCollectionPoint_upd_240_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_upd_240 = "countryId_GuestCartCollectionPoint_upd_240_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_upd_240 = "postcode_GuestCartCollectionPoint_upd_240_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SaveSearchRequestPut(cartId_GuestCartCollectionPoint_upd_240, collectionPointId_GuestCartCollectionPoint_upd_240, countryId_GuestCartCollectionPoint_upd_240, postcode_GuestCartCollectionPoint_upd_240, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GuestCartCollectionPoint
  temandoShippingCheckoutGuestCartCollectionPointManagementV1DeleteSearchRequestDelete(cartId_GuestCartCollectionPoint_240, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCollectionPointSelect:linear:1
bthread("crud:GuestCartCollectionPointSelect:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCollectionPointSelect
  let cartId_GuestCartCollectionPointSelect_250 = GuestCartsId;
  let entityId_GuestCartCollectionPointSelect_250 = Math.floor(Math.random() * 1000);
  let id_GuestCartCollectionPointSelect_250 = "id_GuestCartCollectionPointSelect_250_" + Math.floor(Math.random()*1000);
  temandoShippingDeliveryGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPointSelect_250, entityId_GuestCartCollectionPointSelect_250, id_GuestCartCollectionPointSelect_250, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartDeliveryOption:linear:1
bthread("crud:GuestCartDeliveryOption:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartDeliveryOption
  let cartId_GuestCartDeliveryOption_260 = GuestCartsId;
  let id_GuestCartDeliveryOption_260 = "id_GuestCartDeliveryOption_260_" + Math.floor(Math.random()*1000);
  let selectedOption_GuestCartDeliveryOption_260 = "selectedOption_GuestCartDeliveryOption_260_" + Math.floor(Math.random()*1000);
  temandoShippingQuoteGuestCartDeliveryOptionManagementV1SavePost(cartId_GuestCartDeliveryOption_260, id_GuestCartDeliveryOption_260, selectedOption_GuestCartDeliveryOption_260, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCheckoutFields:linear:1
bthread("crud:GuestCartCheckoutFields:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCheckoutFields
  let cartId_GuestCartCheckoutFields_270 = GuestCartsId;
  let id_GuestCartCheckoutFields_270 = "id_GuestCartCheckoutFields_270_" + Math.floor(Math.random()*1000);
  let serviceSelection_GuestCartCheckoutFields_270 = [];
  saveCheckoutFields(cartId_GuestCartCheckoutFields_270, id_GuestCartCheckoutFields_270, serviceSelection_GuestCartCheckoutFields_270, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartPickupLocation:linear:1
bthread("crud:GuestCartPickupLocation:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartPickupLocation
  let cartId_GuestCartPickupLocation_280 = GuestCartsId;
  let id_GuestCartPickupLocation_280 = "id_GuestCartPickupLocation_280_" + Math.floor(Math.random()*1000);
  let pickupLocationId_GuestCartPickupLocation_280 = "pickupLocationId_GuestCartPickupLocation_280_" + Math.floor(Math.random()*1000);
  selectPickupLocationForCheckout(cartId_GuestCartPickupLocation_280, id_GuestCartPickupLocation_280, pickupLocationId_GuestCartPickupLocation_280, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartDeliveryPickupLocation:linear:1
bthread("crud:GuestCartDeliveryPickupLocation:linear:1", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartDeliveryPickupLocation
  let cartId_GuestCartDeliveryPickupLocation_290 = GuestCartsId;
  let entityId_GuestCartDeliveryPickupLocation_290 = Math.floor(Math.random() * 1000);
  let id_GuestCartDeliveryPickupLocation_290 = "id_GuestCartDeliveryPickupLocation_290_" + Math.floor(Math.random()*1000);
  selectPickupLocation(cartId_GuestCartDeliveryPickupLocation_290, entityId_GuestCartDeliveryPickupLocation_290, id_GuestCartDeliveryPickupLocation_290, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Customers:linear:2
bthread("crud:Customers:linear:2", function () {
  // -> Creating Customers
  let customerId_Customers_300 = Math.floor(Math.random() * 1000);
  let email_Customers_300 = "email_Customers_300_" + Math.floor(Math.random()*1000);
  let newPassword_Customers_300 = "newPassword_Customers_300_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_Customers_300 = "resetPasswordLinkToken_Customers_300_" + Math.floor(Math.random()*1000);
  let resetToken_Customers_300 = "resetToken_Customers_300_" + Math.floor(Math.random()*1000);
  let template_Customers_300 = "template_Customers_300_" + Math.floor(Math.random()*1000);
  let websiteId_Customers_300 = Math.floor(Math.random() * 1000);
  customerAccountManagementV1ResetPasswordPost(customerId_Customers_300, email_Customers_300, newPassword_Customers_300, resetPasswordLinkToken_Customers_300, resetToken_Customers_300, template_Customers_300, websiteId_Customers_300, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Customers
  let customerId_Customers_upd_300 = customerId_Customers_300;
  let email_Customers_upd_300 = "email_Customers_upd_300_" + Math.floor(Math.random()*1000);
  let newPassword_Customers_upd_300 = "newPassword_Customers_upd_300_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_Customers_upd_300 = "resetPasswordLinkToken_Customers_upd_300_" + Math.floor(Math.random()*1000);
  let resetToken_Customers_upd_300 = "resetToken_Customers_upd_300_" + Math.floor(Math.random()*1000);
  let template_Customers_upd_300 = "template_Customers_upd_300_" + Math.floor(Math.random()*1000);
  let websiteId_Customers_upd_300 = Math.floor(Math.random() * 1000);
  customerAccountManagementV1InitiatePasswordResetPut(customerId_Customers_upd_300, email_Customers_upd_300, newPassword_Customers_upd_300, resetPasswordLinkToken_Customers_upd_300, resetToken_Customers_upd_300, template_Customers_upd_300, websiteId_Customers_upd_300, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCarts:linear:2
bthread("crud:GuestCarts:linear:2", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_310 = "cartId_GuestCarts_310_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_310, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for GuestCarts to prevent foreign key errors (has active dependents)
});

// Story: crud:GuestCartsEstimateShippingMethods:linear:2
bthread("crud:GuestCartsEstimateShippingMethods:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsEstimateShippingMethods
  let address_GuestCartsEstimateShippingMethods_320 = "address_GuestCartsEstimateShippingMethods_320_" + Math.floor(Math.random()*1000);
  let cartId_GuestCartsEstimateShippingMethods_320 = GuestCartsId;
  let id_GuestCartsEstimateShippingMethods_320 = "id_GuestCartsEstimateShippingMethods_320_" + Math.floor(Math.random()*1000);
  estimateShippingMethods(address_GuestCartsEstimateShippingMethods_320, cartId_GuestCartsEstimateShippingMethods_320, id_GuestCartsEstimateShippingMethods_320, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsItems:linear:2
bthread("crud:GuestCartsItems:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsItems
  let cartId_GuestCartsItems_330 = GuestCartsId;
  let cartItem_GuestCartsItems_330 = "cartItem_GuestCartsItems_330_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_330 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_330_" + Math.floor(Math.random()*1000);
  addOrUpdateCartItem(cartId_GuestCartsItems_330, cartItem_GuestCartsItems_330, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_330, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartsItems
  let cartId_GuestCartsItems_upd_330 = cartId_GuestCartsItems_330;
  let cartItem_GuestCartsItems_upd_330 = "cartItem_GuestCartsItems_upd_330_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_330 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_330_" + Math.floor(Math.random()*1000);
  quoteGuestCartManagementV1PlaceOrderPut(cartId_GuestCartsItems_upd_330, cartItem_GuestCartsItems_upd_330, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_330, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GuestCartsItems
  quoteGuestCouponManagementV1RemoveDelete(cartId_GuestCartsItems_330, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsBillingAddress:linear:2
bthread("crud:GuestCartsBillingAddress:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsBillingAddress
  let address_GuestCartsBillingAddress_340 = {};
  let cartId_GuestCartsBillingAddress_340 = GuestCartsId;
  let useForShipping_GuestCartsBillingAddress_340 = true;
  quoteGuestBillingAddressManagementV1AssignPost(address_GuestCartsBillingAddress_340, cartId_GuestCartsBillingAddress_340, useForShipping_GuestCartsBillingAddress_340, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartTotals:linear:2
bthread("crud:GuestCartTotals:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartTotals
  let additionalData_GuestCartTotals_350 = "additionalData_GuestCartTotals_350_" + Math.floor(Math.random()*1000);
  let addressInformation_GuestCartTotals_350 = {};
  let cartId_GuestCartTotals_350 = GuestCartsId;
  let paymentMethod_GuestCartTotals_350 = "paymentMethod_GuestCartTotals_350_" + Math.floor(Math.random()*1000);
  let shippingCarrierCode_GuestCartTotals_350 = "shippingCarrierCode_GuestCartTotals_350_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCartTotals_350 = "shippingMethodCode_GuestCartTotals_350_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCartTotals_350, addressInformation_GuestCartTotals_350, cartId_GuestCartTotals_350, paymentMethod_GuestCartTotals_350, shippingCarrierCode_GuestCartTotals_350, shippingMethodCode_GuestCartTotals_350, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartTotals
  let additionalData_GuestCartTotals_upd_350 = "additionalData_GuestCartTotals_upd_350_" + Math.floor(Math.random()*1000);
  let addressInformation_GuestCartTotals_upd_350 = {};
  let cartId_GuestCartTotals_upd_350 = cartId_GuestCartTotals_350;
  let paymentMethod_GuestCartTotals_upd_350 = "paymentMethod_GuestCartTotals_upd_350_" + Math.floor(Math.random()*1000);
  let shippingCarrierCode_GuestCartTotals_upd_350 = "shippingCarrierCode_GuestCartTotals_upd_350_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCartTotals_upd_350 = "shippingMethodCode_GuestCartTotals_upd_350_" + Math.floor(Math.random()*1000);
  quoteGuestCartTotalManagementV1CollectTotalsPut(additionalData_GuestCartTotals_upd_350, addressInformation_GuestCartTotals_upd_350, cartId_GuestCartTotals_upd_350, paymentMethod_GuestCartTotals_upd_350, shippingCarrierCode_GuestCartTotals_upd_350, shippingMethodCode_GuestCartTotals_upd_350, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:AdminToken:linear:2
bthread("crud:AdminToken:linear:2", function () {
  // -> Creating AdminToken
  let id_AdminToken_360 = "id_AdminToken_360_" + Math.floor(Math.random()*1000);
  let password_AdminToken_360 = "password_AdminToken_360_" + Math.floor(Math.random()*1000);
  let username_AdminToken_360 = "username_AdminToken_360_" + Math.floor(Math.random()*1000);
  integrationAdminTokenServiceV1CreateAdminAccessTokenPost(id_AdminToken_360, password_AdminToken_360, username_AdminToken_360, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsPaymentInformation:linear:2
bthread("crud:GuestCartsPaymentInformation:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsPaymentInformation
  let addressInformation_GuestCartsPaymentInformation_370 = {};
  let cartId_GuestCartsPaymentInformation_370 = GuestCartsId;
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsPaymentInformation_370, cartId_GuestCartsPaymentInformation_370, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsSetPaymentInformation:linear:2
bthread("crud:GuestCartsSetPaymentInformation:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsSetPaymentInformation
  let billingAddress_GuestCartsSetPaymentInformation_380 = {};
  let cartId_GuestCartsSetPaymentInformation_380 = GuestCartsId;
  let email_GuestCartsSetPaymentInformation_380 = "email_GuestCartsSetPaymentInformation_380_" + Math.floor(Math.random()*1000);
  let id_GuestCartsSetPaymentInformation_380 = "id_GuestCartsSetPaymentInformation_380_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCartsSetPaymentInformation_380 = {};
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost(billingAddress_GuestCartsSetPaymentInformation_380, cartId_GuestCartsSetPaymentInformation_380, email_GuestCartsSetPaymentInformation_380, id_GuestCartsSetPaymentInformation_380, paymentMethod_GuestCartsSetPaymentInformation_380, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsShippingInformation:linear:2
bthread("crud:GuestCartsShippingInformation:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsShippingInformation
  let addressInformation_GuestCartsShippingInformation_390 = {};
  let cartId_GuestCartsShippingInformation_390 = GuestCartsId;
  let id_GuestCartsShippingInformation_390 = "id_GuestCartsShippingInformation_390_" + Math.floor(Math.random()*1000);
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsShippingInformation_390, cartId_GuestCartsShippingInformation_390, id_GuestCartsShippingInformation_390, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsTotalsInformation:linear:2
bthread("crud:GuestCartsTotalsInformation:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsTotalsInformation
  let addressInformation_GuestCartsTotalsInformation_400 = {};
  let cartId_GuestCartsTotalsInformation_400 = GuestCartsId;
  let id_GuestCartsTotalsInformation_400 = "id_GuestCartsTotalsInformation_400_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(addressInformation_GuestCartsTotalsInformation_400, cartId_GuestCartsTotalsInformation_400, id_GuestCartsTotalsInformation_400, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:CustomerToken:linear:2
bthread("crud:CustomerToken:linear:2", function () {
  // -> Creating CustomerToken
  let id_CustomerToken_410 = "id_CustomerToken_410_" + Math.floor(Math.random()*1000);
  let password_CustomerToken_410 = "password_CustomerToken_410_" + Math.floor(Math.random()*1000);
  let username_CustomerToken_410 = "username_CustomerToken_410_" + Math.floor(Math.random()*1000);
  integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost(id_CustomerToken_410, password_CustomerToken_410, username_CustomerToken_410, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartGiftMessage:linear:2
bthread("crud:GuestCartGiftMessage:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartGiftMessage
  let cartId_GuestCartGiftMessage_420 = GuestCartsId;
  let giftMessage_GuestCartGiftMessage_420 = {};
  giftMessageGuestCartRepositoryV1SavePost(cartId_GuestCartGiftMessage_420, giftMessage_GuestCartGiftMessage_420, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestItemGiftMessage:linear:2
bthread("crud:GuestItemGiftMessage:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestItemGiftMessage
  let cartId_GuestItemGiftMessage_430 = GuestCartsId;
  let giftMessage_GuestItemGiftMessage_430 = {};
  let itemId_GuestItemGiftMessage_430 = Math.floor(Math.random() * 1000);
  giftMessageGuestItemRepositoryV1SavePost(cartId_GuestItemGiftMessage_430, giftMessage_GuestItemGiftMessage_430, itemId_GuestItemGiftMessage_430, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCollectionPoint:linear:2
bthread("crud:GuestCartCollectionPoint:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_440 = GuestCartsId;
  let collectionPointId_GuestCartCollectionPoint_440 = "collectionPointId_GuestCartCollectionPoint_440_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_440 = "countryId_GuestCartCollectionPoint_440_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_440 = "postcode_GuestCartCollectionPoint_440_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPoint_440, collectionPointId_GuestCartCollectionPoint_440, countryId_GuestCartCollectionPoint_440, postcode_GuestCartCollectionPoint_440, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_upd_440 = cartId_GuestCartCollectionPoint_440;
  let collectionPointId_GuestCartCollectionPoint_upd_440 = "collectionPointId_GuestCartCollectionPoint_upd_440_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_upd_440 = "countryId_GuestCartCollectionPoint_upd_440_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_upd_440 = "postcode_GuestCartCollectionPoint_upd_440_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SaveSearchRequestPut(cartId_GuestCartCollectionPoint_upd_440, collectionPointId_GuestCartCollectionPoint_upd_440, countryId_GuestCartCollectionPoint_upd_440, postcode_GuestCartCollectionPoint_upd_440, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GuestCartCollectionPoint
  temandoShippingCheckoutGuestCartCollectionPointManagementV1DeleteSearchRequestDelete(cartId_GuestCartCollectionPoint_440, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCollectionPointSelect:linear:2
bthread("crud:GuestCartCollectionPointSelect:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCollectionPointSelect
  let cartId_GuestCartCollectionPointSelect_450 = GuestCartsId;
  let entityId_GuestCartCollectionPointSelect_450 = Math.floor(Math.random() * 1000);
  let id_GuestCartCollectionPointSelect_450 = "id_GuestCartCollectionPointSelect_450_" + Math.floor(Math.random()*1000);
  temandoShippingDeliveryGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPointSelect_450, entityId_GuestCartCollectionPointSelect_450, id_GuestCartCollectionPointSelect_450, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartDeliveryOption:linear:2
bthread("crud:GuestCartDeliveryOption:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartDeliveryOption
  let cartId_GuestCartDeliveryOption_460 = GuestCartsId;
  let id_GuestCartDeliveryOption_460 = "id_GuestCartDeliveryOption_460_" + Math.floor(Math.random()*1000);
  let selectedOption_GuestCartDeliveryOption_460 = "selectedOption_GuestCartDeliveryOption_460_" + Math.floor(Math.random()*1000);
  temandoShippingQuoteGuestCartDeliveryOptionManagementV1SavePost(cartId_GuestCartDeliveryOption_460, id_GuestCartDeliveryOption_460, selectedOption_GuestCartDeliveryOption_460, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCheckoutFields:linear:2
bthread("crud:GuestCartCheckoutFields:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCheckoutFields
  let cartId_GuestCartCheckoutFields_470 = GuestCartsId;
  let id_GuestCartCheckoutFields_470 = "id_GuestCartCheckoutFields_470_" + Math.floor(Math.random()*1000);
  let serviceSelection_GuestCartCheckoutFields_470 = [];
  saveCheckoutFields(cartId_GuestCartCheckoutFields_470, id_GuestCartCheckoutFields_470, serviceSelection_GuestCartCheckoutFields_470, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartPickupLocation:linear:2
bthread("crud:GuestCartPickupLocation:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartPickupLocation
  let cartId_GuestCartPickupLocation_480 = GuestCartsId;
  let id_GuestCartPickupLocation_480 = "id_GuestCartPickupLocation_480_" + Math.floor(Math.random()*1000);
  let pickupLocationId_GuestCartPickupLocation_480 = "pickupLocationId_GuestCartPickupLocation_480_" + Math.floor(Math.random()*1000);
  selectPickupLocationForCheckout(cartId_GuestCartPickupLocation_480, id_GuestCartPickupLocation_480, pickupLocationId_GuestCartPickupLocation_480, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartDeliveryPickupLocation:linear:2
bthread("crud:GuestCartDeliveryPickupLocation:linear:2", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartDeliveryPickupLocation
  let cartId_GuestCartDeliveryPickupLocation_490 = GuestCartsId;
  let entityId_GuestCartDeliveryPickupLocation_490 = Math.floor(Math.random() * 1000);
  let id_GuestCartDeliveryPickupLocation_490 = "id_GuestCartDeliveryPickupLocation_490_" + Math.floor(Math.random()*1000);
  selectPickupLocation(cartId_GuestCartDeliveryPickupLocation_490, entityId_GuestCartDeliveryPickupLocation_490, id_GuestCartDeliveryPickupLocation_490, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Customers:linear:3
bthread("crud:Customers:linear:3", function () {
  // -> Creating Customers
  let customerId_Customers_500 = Math.floor(Math.random() * 1000);
  let email_Customers_500 = "email_Customers_500_" + Math.floor(Math.random()*1000);
  let newPassword_Customers_500 = "newPassword_Customers_500_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_Customers_500 = "resetPasswordLinkToken_Customers_500_" + Math.floor(Math.random()*1000);
  let resetToken_Customers_500 = "resetToken_Customers_500_" + Math.floor(Math.random()*1000);
  let template_Customers_500 = "template_Customers_500_" + Math.floor(Math.random()*1000);
  let websiteId_Customers_500 = Math.floor(Math.random() * 1000);
  customerAccountManagementV1ResetPasswordPost(customerId_Customers_500, email_Customers_500, newPassword_Customers_500, resetPasswordLinkToken_Customers_500, resetToken_Customers_500, template_Customers_500, websiteId_Customers_500, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Customers
  let customerId_Customers_upd_500 = customerId_Customers_500;
  let email_Customers_upd_500 = "email_Customers_upd_500_" + Math.floor(Math.random()*1000);
  let newPassword_Customers_upd_500 = "newPassword_Customers_upd_500_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_Customers_upd_500 = "resetPasswordLinkToken_Customers_upd_500_" + Math.floor(Math.random()*1000);
  let resetToken_Customers_upd_500 = "resetToken_Customers_upd_500_" + Math.floor(Math.random()*1000);
  let template_Customers_upd_500 = "template_Customers_upd_500_" + Math.floor(Math.random()*1000);
  let websiteId_Customers_upd_500 = Math.floor(Math.random() * 1000);
  customerAccountManagementV1InitiatePasswordResetPut(customerId_Customers_upd_500, email_Customers_upd_500, newPassword_Customers_upd_500, resetPasswordLinkToken_Customers_upd_500, resetToken_Customers_upd_500, template_Customers_upd_500, websiteId_Customers_upd_500, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCarts:linear:3
bthread("crud:GuestCarts:linear:3", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_510 = "cartId_GuestCarts_510_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_510, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for GuestCarts to prevent foreign key errors (has active dependents)
});

// Story: crud:GuestCartsEstimateShippingMethods:linear:3
bthread("crud:GuestCartsEstimateShippingMethods:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsEstimateShippingMethods
  let address_GuestCartsEstimateShippingMethods_520 = "address_GuestCartsEstimateShippingMethods_520_" + Math.floor(Math.random()*1000);
  let cartId_GuestCartsEstimateShippingMethods_520 = GuestCartsId;
  let id_GuestCartsEstimateShippingMethods_520 = "id_GuestCartsEstimateShippingMethods_520_" + Math.floor(Math.random()*1000);
  estimateShippingMethods(address_GuestCartsEstimateShippingMethods_520, cartId_GuestCartsEstimateShippingMethods_520, id_GuestCartsEstimateShippingMethods_520, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsItems:linear:3
bthread("crud:GuestCartsItems:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsItems
  let cartId_GuestCartsItems_530 = GuestCartsId;
  let cartItem_GuestCartsItems_530 = "cartItem_GuestCartsItems_530_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_530 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_530_" + Math.floor(Math.random()*1000);
  addOrUpdateCartItem(cartId_GuestCartsItems_530, cartItem_GuestCartsItems_530, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_530, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartsItems
  let cartId_GuestCartsItems_upd_530 = cartId_GuestCartsItems_530;
  let cartItem_GuestCartsItems_upd_530 = "cartItem_GuestCartsItems_upd_530_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_530 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_530_" + Math.floor(Math.random()*1000);
  quoteGuestCartManagementV1PlaceOrderPut(cartId_GuestCartsItems_upd_530, cartItem_GuestCartsItems_upd_530, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_upd_530, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GuestCartsItems
  quoteGuestCouponManagementV1RemoveDelete(cartId_GuestCartsItems_530, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsBillingAddress:linear:3
bthread("crud:GuestCartsBillingAddress:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsBillingAddress
  let address_GuestCartsBillingAddress_540 = {};
  let cartId_GuestCartsBillingAddress_540 = GuestCartsId;
  let useForShipping_GuestCartsBillingAddress_540 = true;
  quoteGuestBillingAddressManagementV1AssignPost(address_GuestCartsBillingAddress_540, cartId_GuestCartsBillingAddress_540, useForShipping_GuestCartsBillingAddress_540, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartTotals:linear:3
bthread("crud:GuestCartTotals:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartTotals
  let additionalData_GuestCartTotals_550 = "additionalData_GuestCartTotals_550_" + Math.floor(Math.random()*1000);
  let addressInformation_GuestCartTotals_550 = {};
  let cartId_GuestCartTotals_550 = GuestCartsId;
  let paymentMethod_GuestCartTotals_550 = "paymentMethod_GuestCartTotals_550_" + Math.floor(Math.random()*1000);
  let shippingCarrierCode_GuestCartTotals_550 = "shippingCarrierCode_GuestCartTotals_550_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCartTotals_550 = "shippingMethodCode_GuestCartTotals_550_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCartTotals_550, addressInformation_GuestCartTotals_550, cartId_GuestCartTotals_550, paymentMethod_GuestCartTotals_550, shippingCarrierCode_GuestCartTotals_550, shippingMethodCode_GuestCartTotals_550, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartTotals
  let additionalData_GuestCartTotals_upd_550 = "additionalData_GuestCartTotals_upd_550_" + Math.floor(Math.random()*1000);
  let addressInformation_GuestCartTotals_upd_550 = {};
  let cartId_GuestCartTotals_upd_550 = cartId_GuestCartTotals_550;
  let paymentMethod_GuestCartTotals_upd_550 = "paymentMethod_GuestCartTotals_upd_550_" + Math.floor(Math.random()*1000);
  let shippingCarrierCode_GuestCartTotals_upd_550 = "shippingCarrierCode_GuestCartTotals_upd_550_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCartTotals_upd_550 = "shippingMethodCode_GuestCartTotals_upd_550_" + Math.floor(Math.random()*1000);
  quoteGuestCartTotalManagementV1CollectTotalsPut(additionalData_GuestCartTotals_upd_550, addressInformation_GuestCartTotals_upd_550, cartId_GuestCartTotals_upd_550, paymentMethod_GuestCartTotals_upd_550, shippingCarrierCode_GuestCartTotals_upd_550, shippingMethodCode_GuestCartTotals_upd_550, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:AdminToken:linear:3
bthread("crud:AdminToken:linear:3", function () {
  // -> Creating AdminToken
  let id_AdminToken_560 = "id_AdminToken_560_" + Math.floor(Math.random()*1000);
  let password_AdminToken_560 = "password_AdminToken_560_" + Math.floor(Math.random()*1000);
  let username_AdminToken_560 = "username_AdminToken_560_" + Math.floor(Math.random()*1000);
  integrationAdminTokenServiceV1CreateAdminAccessTokenPost(id_AdminToken_560, password_AdminToken_560, username_AdminToken_560, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsPaymentInformation:linear:3
bthread("crud:GuestCartsPaymentInformation:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsPaymentInformation
  let addressInformation_GuestCartsPaymentInformation_570 = {};
  let cartId_GuestCartsPaymentInformation_570 = GuestCartsId;
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsPaymentInformation_570, cartId_GuestCartsPaymentInformation_570, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsSetPaymentInformation:linear:3
bthread("crud:GuestCartsSetPaymentInformation:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsSetPaymentInformation
  let billingAddress_GuestCartsSetPaymentInformation_580 = {};
  let cartId_GuestCartsSetPaymentInformation_580 = GuestCartsId;
  let email_GuestCartsSetPaymentInformation_580 = "email_GuestCartsSetPaymentInformation_580_" + Math.floor(Math.random()*1000);
  let id_GuestCartsSetPaymentInformation_580 = "id_GuestCartsSetPaymentInformation_580_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCartsSetPaymentInformation_580 = {};
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost(billingAddress_GuestCartsSetPaymentInformation_580, cartId_GuestCartsSetPaymentInformation_580, email_GuestCartsSetPaymentInformation_580, id_GuestCartsSetPaymentInformation_580, paymentMethod_GuestCartsSetPaymentInformation_580, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsShippingInformation:linear:3
bthread("crud:GuestCartsShippingInformation:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsShippingInformation
  let addressInformation_GuestCartsShippingInformation_590 = {};
  let cartId_GuestCartsShippingInformation_590 = GuestCartsId;
  let id_GuestCartsShippingInformation_590 = "id_GuestCartsShippingInformation_590_" + Math.floor(Math.random()*1000);
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsShippingInformation_590, cartId_GuestCartsShippingInformation_590, id_GuestCartsShippingInformation_590, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartsTotalsInformation:linear:3
bthread("crud:GuestCartsTotalsInformation:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartsTotalsInformation
  let addressInformation_GuestCartsTotalsInformation_600 = {};
  let cartId_GuestCartsTotalsInformation_600 = GuestCartsId;
  let id_GuestCartsTotalsInformation_600 = "id_GuestCartsTotalsInformation_600_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(addressInformation_GuestCartsTotalsInformation_600, cartId_GuestCartsTotalsInformation_600, id_GuestCartsTotalsInformation_600, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:CustomerToken:linear:3
bthread("crud:CustomerToken:linear:3", function () {
  // -> Creating CustomerToken
  let id_CustomerToken_610 = "id_CustomerToken_610_" + Math.floor(Math.random()*1000);
  let password_CustomerToken_610 = "password_CustomerToken_610_" + Math.floor(Math.random()*1000);
  let username_CustomerToken_610 = "username_CustomerToken_610_" + Math.floor(Math.random()*1000);
  integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost(id_CustomerToken_610, password_CustomerToken_610, username_CustomerToken_610, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartGiftMessage:linear:3
bthread("crud:GuestCartGiftMessage:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartGiftMessage
  let cartId_GuestCartGiftMessage_620 = GuestCartsId;
  let giftMessage_GuestCartGiftMessage_620 = {};
  giftMessageGuestCartRepositoryV1SavePost(cartId_GuestCartGiftMessage_620, giftMessage_GuestCartGiftMessage_620, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestItemGiftMessage:linear:3
bthread("crud:GuestItemGiftMessage:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestItemGiftMessage
  let cartId_GuestItemGiftMessage_630 = GuestCartsId;
  let giftMessage_GuestItemGiftMessage_630 = {};
  let itemId_GuestItemGiftMessage_630 = Math.floor(Math.random() * 1000);
  giftMessageGuestItemRepositoryV1SavePost(cartId_GuestItemGiftMessage_630, giftMessage_GuestItemGiftMessage_630, itemId_GuestItemGiftMessage_630, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCollectionPoint:linear:3
bthread("crud:GuestCartCollectionPoint:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_640 = GuestCartsId;
  let collectionPointId_GuestCartCollectionPoint_640 = "collectionPointId_GuestCartCollectionPoint_640_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_640 = "countryId_GuestCartCollectionPoint_640_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_640 = "postcode_GuestCartCollectionPoint_640_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPoint_640, collectionPointId_GuestCartCollectionPoint_640, countryId_GuestCartCollectionPoint_640, postcode_GuestCartCollectionPoint_640, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_upd_640 = cartId_GuestCartCollectionPoint_640;
  let collectionPointId_GuestCartCollectionPoint_upd_640 = "collectionPointId_GuestCartCollectionPoint_upd_640_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_upd_640 = "countryId_GuestCartCollectionPoint_upd_640_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_upd_640 = "postcode_GuestCartCollectionPoint_upd_640_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SaveSearchRequestPut(cartId_GuestCartCollectionPoint_upd_640, collectionPointId_GuestCartCollectionPoint_upd_640, countryId_GuestCartCollectionPoint_upd_640, postcode_GuestCartCollectionPoint_upd_640, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting GuestCartCollectionPoint
  temandoShippingCheckoutGuestCartCollectionPointManagementV1DeleteSearchRequestDelete(cartId_GuestCartCollectionPoint_640, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCollectionPointSelect:linear:3
bthread("crud:GuestCartCollectionPointSelect:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCollectionPointSelect
  let cartId_GuestCartCollectionPointSelect_650 = GuestCartsId;
  let entityId_GuestCartCollectionPointSelect_650 = Math.floor(Math.random() * 1000);
  let id_GuestCartCollectionPointSelect_650 = "id_GuestCartCollectionPointSelect_650_" + Math.floor(Math.random()*1000);
  temandoShippingDeliveryGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPointSelect_650, entityId_GuestCartCollectionPointSelect_650, id_GuestCartCollectionPointSelect_650, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartDeliveryOption:linear:3
bthread("crud:GuestCartDeliveryOption:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartDeliveryOption
  let cartId_GuestCartDeliveryOption_660 = GuestCartsId;
  let id_GuestCartDeliveryOption_660 = "id_GuestCartDeliveryOption_660_" + Math.floor(Math.random()*1000);
  let selectedOption_GuestCartDeliveryOption_660 = "selectedOption_GuestCartDeliveryOption_660_" + Math.floor(Math.random()*1000);
  temandoShippingQuoteGuestCartDeliveryOptionManagementV1SavePost(cartId_GuestCartDeliveryOption_660, id_GuestCartDeliveryOption_660, selectedOption_GuestCartDeliveryOption_660, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartCheckoutFields:linear:3
bthread("crud:GuestCartCheckoutFields:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartCheckoutFields
  let cartId_GuestCartCheckoutFields_670 = GuestCartsId;
  let id_GuestCartCheckoutFields_670 = "id_GuestCartCheckoutFields_670_" + Math.floor(Math.random()*1000);
  let serviceSelection_GuestCartCheckoutFields_670 = [];
  saveCheckoutFields(cartId_GuestCartCheckoutFields_670, id_GuestCartCheckoutFields_670, serviceSelection_GuestCartCheckoutFields_670, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartPickupLocation:linear:3
bthread("crud:GuestCartPickupLocation:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartPickupLocation
  let cartId_GuestCartPickupLocation_680 = GuestCartsId;
  let id_GuestCartPickupLocation_680 = "id_GuestCartPickupLocation_680_" + Math.floor(Math.random()*1000);
  let pickupLocationId_GuestCartPickupLocation_680 = "pickupLocationId_GuestCartPickupLocation_680_" + Math.floor(Math.random()*1000);
  selectPickupLocationForCheckout(cartId_GuestCartPickupLocation_680, id_GuestCartPickupLocation_680, pickupLocationId_GuestCartPickupLocation_680, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:GuestCartDeliveryPickupLocation:linear:3
bthread("crud:GuestCartDeliveryPickupLocation:linear:3", function () {
  let deps = {};
  deps["GuestCarts"] = matchAnyGuestCartsAdded();
  let pkMap = {"GuestCarts": "cartId"};
  let captured = resolveDependencies(deps, pkMap);
  let GuestCartsId = captured["GuestCarts"];
  // -> Creating GuestCartDeliveryPickupLocation
  let cartId_GuestCartDeliveryPickupLocation_690 = GuestCartsId;
  let entityId_GuestCartDeliveryPickupLocation_690 = Math.floor(Math.random() * 1000);
  let id_GuestCartDeliveryPickupLocation_690 = "id_GuestCartDeliveryPickupLocation_690_" + Math.floor(Math.random()*1000);
  selectPickupLocation(cartId_GuestCartDeliveryPickupLocation_690, entityId_GuestCartDeliveryPickupLocation_690, id_GuestCartDeliveryPickupLocation_690, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain GuestCarts_GuestCartsEstimateShippingMethods (Self-Contained)
bthread("chain:GuestCarts_GuestCartsEstimateShippingMethods", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_700 = "cartId_GuestCarts_700_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_700, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsEstimateShippingMethods
  let address_GuestCartsEstimateShippingMethods_700 = "address_GuestCartsEstimateShippingMethods_700_" + Math.floor(Math.random()*1000);
  let cartId_GuestCartsEstimateShippingMethods_700 = cartId_GuestCarts_700;
  let id_GuestCartsEstimateShippingMethods_700 = "id_GuestCartsEstimateShippingMethods_700_" + Math.floor(Math.random()*1000);
  estimateShippingMethods(address_GuestCartsEstimateShippingMethods_700, cartId_GuestCartsEstimateShippingMethods_700, id_GuestCartsEstimateShippingMethods_700, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartsItems (Self-Contained)
bthread("chain:GuestCarts_GuestCartsItems", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_800 = "cartId_GuestCarts_800_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_800, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsItems
  let cartId_GuestCartsItems_800 = cartId_GuestCarts_800;
  let cartItem_GuestCartsItems_800 = "cartItem_GuestCartsItems_800_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_800 = "quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_800_" + Math.floor(Math.random()*1000);
  addOrUpdateCartItem(cartId_GuestCartsItems_800, cartItem_GuestCartsItems_800, quoteGuestCartManagementV1PlaceOrderPutBody_GuestCartsItems_800, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting GuestCartsItems
  quoteGuestCouponManagementV1RemoveDelete(cartId_GuestCartsItems_800, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain GuestCarts_GuestCartsBillingAddress (Self-Contained)
bthread("chain:GuestCarts_GuestCartsBillingAddress", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_900 = "cartId_GuestCarts_900_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_900, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsBillingAddress
  let address_GuestCartsBillingAddress_900 = {};
  let cartId_GuestCartsBillingAddress_900 = cartId_GuestCarts_900;
  let useForShipping_GuestCartsBillingAddress_900 = true;
  quoteGuestBillingAddressManagementV1AssignPost(address_GuestCartsBillingAddress_900, cartId_GuestCartsBillingAddress_900, useForShipping_GuestCartsBillingAddress_900, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartTotals (Self-Contained)
bthread("chain:GuestCarts_GuestCartTotals", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_1000 = "cartId_GuestCarts_1000_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_1000, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartTotals
  let additionalData_GuestCartTotals_1000 = "additionalData_GuestCartTotals_1000_" + Math.floor(Math.random()*1000);
  let addressInformation_GuestCartTotals_1000 = {};
  let cartId_GuestCartTotals_1000 = cartId_GuestCarts_1000;
  let paymentMethod_GuestCartTotals_1000 = "paymentMethod_GuestCartTotals_1000_" + Math.floor(Math.random()*1000);
  let shippingCarrierCode_GuestCartTotals_1000 = "shippingCarrierCode_GuestCartTotals_1000_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_GuestCartTotals_1000 = "shippingMethodCode_GuestCartTotals_1000_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(additionalData_GuestCartTotals_1000, addressInformation_GuestCartTotals_1000, cartId_GuestCartTotals_1000, paymentMethod_GuestCartTotals_1000, shippingCarrierCode_GuestCartTotals_1000, shippingMethodCode_GuestCartTotals_1000, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartsPaymentInformation (Self-Contained)
bthread("chain:GuestCarts_GuestCartsPaymentInformation", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_1100 = "cartId_GuestCarts_1100_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_1100, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsPaymentInformation
  let addressInformation_GuestCartsPaymentInformation_1100 = {};
  let cartId_GuestCartsPaymentInformation_1100 = cartId_GuestCarts_1100;
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsPaymentInformation_1100, cartId_GuestCartsPaymentInformation_1100, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartsSetPaymentInformation (Self-Contained)
bthread("chain:GuestCarts_GuestCartsSetPaymentInformation", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_1200 = "cartId_GuestCarts_1200_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_1200, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsSetPaymentInformation
  let billingAddress_GuestCartsSetPaymentInformation_1200 = {};
  let cartId_GuestCartsSetPaymentInformation_1200 = cartId_GuestCarts_1200;
  let email_GuestCartsSetPaymentInformation_1200 = "email_GuestCartsSetPaymentInformation_1200_" + Math.floor(Math.random()*1000);
  let id_GuestCartsSetPaymentInformation_1200 = "id_GuestCartsSetPaymentInformation_1200_" + Math.floor(Math.random()*1000);
  let paymentMethod_GuestCartsSetPaymentInformation_1200 = {};
  checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost(billingAddress_GuestCartsSetPaymentInformation_1200, cartId_GuestCartsSetPaymentInformation_1200, email_GuestCartsSetPaymentInformation_1200, id_GuestCartsSetPaymentInformation_1200, paymentMethod_GuestCartsSetPaymentInformation_1200, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartsShippingInformation (Self-Contained)
bthread("chain:GuestCarts_GuestCartsShippingInformation", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_1300 = "cartId_GuestCarts_1300_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_1300, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsShippingInformation
  let addressInformation_GuestCartsShippingInformation_1300 = {};
  let cartId_GuestCartsShippingInformation_1300 = cartId_GuestCarts_1300;
  let id_GuestCartsShippingInformation_1300 = "id_GuestCartsShippingInformation_1300_" + Math.floor(Math.random()*1000);
  checkoutGuestShippingInformationManagementV1SaveAddressInformationPost(addressInformation_GuestCartsShippingInformation_1300, cartId_GuestCartsShippingInformation_1300, id_GuestCartsShippingInformation_1300, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartsTotalsInformation (Self-Contained)
bthread("chain:GuestCarts_GuestCartsTotalsInformation", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_1400 = "cartId_GuestCarts_1400_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_1400, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartsTotalsInformation
  let addressInformation_GuestCartsTotalsInformation_1400 = {};
  let cartId_GuestCartsTotalsInformation_1400 = cartId_GuestCarts_1400;
  let id_GuestCartsTotalsInformation_1400 = "id_GuestCartsTotalsInformation_1400_" + Math.floor(Math.random()*1000);
  checkoutGuestTotalsInformationManagementV1CalculatePost(addressInformation_GuestCartsTotalsInformation_1400, cartId_GuestCartsTotalsInformation_1400, id_GuestCartsTotalsInformation_1400, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartGiftMessage (Self-Contained)
bthread("chain:GuestCarts_GuestCartGiftMessage", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_1500 = "cartId_GuestCarts_1500_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_1500, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartGiftMessage
  let cartId_GuestCartGiftMessage_1500 = cartId_GuestCarts_1500;
  let giftMessage_GuestCartGiftMessage_1500 = {};
  giftMessageGuestCartRepositoryV1SavePost(cartId_GuestCartGiftMessage_1500, giftMessage_GuestCartGiftMessage_1500, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestItemGiftMessage (Self-Contained)
bthread("chain:GuestCarts_GuestItemGiftMessage", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_1600 = "cartId_GuestCarts_1600_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_1600, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestItemGiftMessage
  let cartId_GuestItemGiftMessage_1600 = cartId_GuestCarts_1600;
  let giftMessage_GuestItemGiftMessage_1600 = {};
  let itemId_GuestItemGiftMessage_1600 = Math.floor(Math.random() * 1000);
  giftMessageGuestItemRepositoryV1SavePost(cartId_GuestItemGiftMessage_1600, giftMessage_GuestItemGiftMessage_1600, itemId_GuestItemGiftMessage_1600, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartCollectionPoint (Self-Contained)
bthread("chain:GuestCarts_GuestCartCollectionPoint", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_1700 = "cartId_GuestCarts_1700_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_1700, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartCollectionPoint
  let cartId_GuestCartCollectionPoint_1700 = cartId_GuestCarts_1700;
  let collectionPointId_GuestCartCollectionPoint_1700 = "collectionPointId_GuestCartCollectionPoint_1700_" + Math.floor(Math.random()*1000);
  let countryId_GuestCartCollectionPoint_1700 = "countryId_GuestCartCollectionPoint_1700_" + Math.floor(Math.random()*1000);
  let postcode_GuestCartCollectionPoint_1700 = "postcode_GuestCartCollectionPoint_1700_" + Math.floor(Math.random()*1000);
  temandoShippingCheckoutGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPoint_1700, collectionPointId_GuestCartCollectionPoint_1700, countryId_GuestCartCollectionPoint_1700, postcode_GuestCartCollectionPoint_1700, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting GuestCartCollectionPoint
  temandoShippingCheckoutGuestCartCollectionPointManagementV1DeleteSearchRequestDelete(cartId_GuestCartCollectionPoint_1700, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain GuestCarts_GuestCartCollectionPointSelect (Self-Contained)
bthread("chain:GuestCarts_GuestCartCollectionPointSelect", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_1800 = "cartId_GuestCarts_1800_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_1800, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartCollectionPointSelect
  let cartId_GuestCartCollectionPointSelect_1800 = cartId_GuestCarts_1800;
  let entityId_GuestCartCollectionPointSelect_1800 = Math.floor(Math.random() * 1000);
  let id_GuestCartCollectionPointSelect_1800 = "id_GuestCartCollectionPointSelect_1800_" + Math.floor(Math.random()*1000);
  temandoShippingDeliveryGuestCartCollectionPointManagementV1SelectCollectionPointPost(cartId_GuestCartCollectionPointSelect_1800, entityId_GuestCartCollectionPointSelect_1800, id_GuestCartCollectionPointSelect_1800, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartDeliveryOption (Self-Contained)
bthread("chain:GuestCarts_GuestCartDeliveryOption", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_1900 = "cartId_GuestCarts_1900_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_1900, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartDeliveryOption
  let cartId_GuestCartDeliveryOption_1900 = cartId_GuestCarts_1900;
  let id_GuestCartDeliveryOption_1900 = "id_GuestCartDeliveryOption_1900_" + Math.floor(Math.random()*1000);
  let selectedOption_GuestCartDeliveryOption_1900 = "selectedOption_GuestCartDeliveryOption_1900_" + Math.floor(Math.random()*1000);
  temandoShippingQuoteGuestCartDeliveryOptionManagementV1SavePost(cartId_GuestCartDeliveryOption_1900, id_GuestCartDeliveryOption_1900, selectedOption_GuestCartDeliveryOption_1900, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartCheckoutFields (Self-Contained)
bthread("chain:GuestCarts_GuestCartCheckoutFields", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_2000 = "cartId_GuestCarts_2000_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_2000, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartCheckoutFields
  let cartId_GuestCartCheckoutFields_2000 = cartId_GuestCarts_2000;
  let id_GuestCartCheckoutFields_2000 = "id_GuestCartCheckoutFields_2000_" + Math.floor(Math.random()*1000);
  let serviceSelection_GuestCartCheckoutFields_2000 = [];
  saveCheckoutFields(cartId_GuestCartCheckoutFields_2000, id_GuestCartCheckoutFields_2000, serviceSelection_GuestCartCheckoutFields_2000, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartPickupLocation (Self-Contained)
bthread("chain:GuestCarts_GuestCartPickupLocation", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_2100 = "cartId_GuestCarts_2100_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_2100, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartPickupLocation
  let cartId_GuestCartPickupLocation_2100 = cartId_GuestCarts_2100;
  let id_GuestCartPickupLocation_2100 = "id_GuestCartPickupLocation_2100_" + Math.floor(Math.random()*1000);
  let pickupLocationId_GuestCartPickupLocation_2100 = "pickupLocationId_GuestCartPickupLocation_2100_" + Math.floor(Math.random()*1000);
  selectPickupLocationForCheckout(cartId_GuestCartPickupLocation_2100, id_GuestCartPickupLocation_2100, pickupLocationId_GuestCartPickupLocation_2100, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});

// Story: Deep Chain GuestCarts_GuestCartDeliveryPickupLocation (Self-Contained)
bthread("chain:GuestCarts_GuestCartDeliveryPickupLocation", function () {
  // -> Creating GuestCarts
  let cartId_GuestCarts_2200 = "cartId_GuestCarts_2200_" + Math.floor(Math.random()*1000);
  createEmptyCart(cartId_GuestCarts_2200, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating GuestCartDeliveryPickupLocation
  let cartId_GuestCartDeliveryPickupLocation_2200 = cartId_GuestCarts_2200;
  let entityId_GuestCartDeliveryPickupLocation_2200 = Math.floor(Math.random() * 1000);
  let id_GuestCartDeliveryPickupLocation_2200 = "id_GuestCartDeliveryPickupLocation_2200_" + Math.floor(Math.random()*1000);
  selectPickupLocation(cartId_GuestCartDeliveryPickupLocation_2200, entityId_GuestCartDeliveryPickupLocation_2200, id_GuestCartDeliveryPickupLocation_2200, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
});
