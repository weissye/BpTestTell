// Auto-generated NEGATIVE (Fuzzing) stories for magento
//@provengo summon rest

bthread("fuzz:Customers:customerId_InvalidType", function () {
  let customerId_valid = Math.floor(Math.random() * 1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let newPassword_valid = "newPassword_valid_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_valid = "resetPasswordLinkToken_valid_" + Math.floor(Math.random()*1000);
  let resetToken_valid = "resetToken_valid_" + Math.floor(Math.random()*1000);
  let template_valid = "template_valid_" + Math.floor(Math.random()*1000);
  let websiteId_valid = Math.floor(Math.random() * 1000);
  let bad_customerId = "INVALID_STRING";
  verifyCustomersRejects(bad_customerId, email_valid, newPassword_valid, resetPasswordLinkToken_valid, resetToken_valid, template_valid, websiteId_valid);
});
bthread("fuzz:Customers:email_InvalidType", function () {
  let customerId_valid = Math.floor(Math.random() * 1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let newPassword_valid = "newPassword_valid_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_valid = "resetPasswordLinkToken_valid_" + Math.floor(Math.random()*1000);
  let resetToken_valid = "resetToken_valid_" + Math.floor(Math.random()*1000);
  let template_valid = "template_valid_" + Math.floor(Math.random()*1000);
  let websiteId_valid = Math.floor(Math.random() * 1000);
  let bad_email = ["NOT_A_STRING"];
  verifyCustomersRejects(customerId_valid, bad_email, newPassword_valid, resetPasswordLinkToken_valid, resetToken_valid, template_valid, websiteId_valid);
});
bthread("fuzz:Customers:newPassword_InvalidType", function () {
  let customerId_valid = Math.floor(Math.random() * 1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let newPassword_valid = "newPassword_valid_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_valid = "resetPasswordLinkToken_valid_" + Math.floor(Math.random()*1000);
  let resetToken_valid = "resetToken_valid_" + Math.floor(Math.random()*1000);
  let template_valid = "template_valid_" + Math.floor(Math.random()*1000);
  let websiteId_valid = Math.floor(Math.random() * 1000);
  let bad_newPassword = ["NOT_A_STRING"];
  verifyCustomersRejects(customerId_valid, email_valid, bad_newPassword, resetPasswordLinkToken_valid, resetToken_valid, template_valid, websiteId_valid);
});
bthread("fuzz:Customers:resetPasswordLinkToken_InvalidType", function () {
  let customerId_valid = Math.floor(Math.random() * 1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let newPassword_valid = "newPassword_valid_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_valid = "resetPasswordLinkToken_valid_" + Math.floor(Math.random()*1000);
  let resetToken_valid = "resetToken_valid_" + Math.floor(Math.random()*1000);
  let template_valid = "template_valid_" + Math.floor(Math.random()*1000);
  let websiteId_valid = Math.floor(Math.random() * 1000);
  let bad_resetPasswordLinkToken = ["NOT_A_STRING"];
  verifyCustomersRejects(customerId_valid, email_valid, newPassword_valid, bad_resetPasswordLinkToken, resetToken_valid, template_valid, websiteId_valid);
});
bthread("fuzz:Customers:resetToken_InvalidType", function () {
  let customerId_valid = Math.floor(Math.random() * 1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let newPassword_valid = "newPassword_valid_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_valid = "resetPasswordLinkToken_valid_" + Math.floor(Math.random()*1000);
  let resetToken_valid = "resetToken_valid_" + Math.floor(Math.random()*1000);
  let template_valid = "template_valid_" + Math.floor(Math.random()*1000);
  let websiteId_valid = Math.floor(Math.random() * 1000);
  let bad_resetToken = ["NOT_A_STRING"];
  verifyCustomersRejects(customerId_valid, email_valid, newPassword_valid, resetPasswordLinkToken_valid, bad_resetToken, template_valid, websiteId_valid);
});
bthread("fuzz:Customers:template_InvalidType", function () {
  let customerId_valid = Math.floor(Math.random() * 1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let newPassword_valid = "newPassword_valid_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_valid = "resetPasswordLinkToken_valid_" + Math.floor(Math.random()*1000);
  let resetToken_valid = "resetToken_valid_" + Math.floor(Math.random()*1000);
  let template_valid = "template_valid_" + Math.floor(Math.random()*1000);
  let websiteId_valid = Math.floor(Math.random() * 1000);
  let bad_template = ["NOT_A_STRING"];
  verifyCustomersRejects(customerId_valid, email_valid, newPassword_valid, resetPasswordLinkToken_valid, resetToken_valid, bad_template, websiteId_valid);
});
bthread("fuzz:Customers:websiteId_InvalidType", function () {
  let customerId_valid = Math.floor(Math.random() * 1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let newPassword_valid = "newPassword_valid_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_valid = "resetPasswordLinkToken_valid_" + Math.floor(Math.random()*1000);
  let resetToken_valid = "resetToken_valid_" + Math.floor(Math.random()*1000);
  let template_valid = "template_valid_" + Math.floor(Math.random()*1000);
  let websiteId_valid = Math.floor(Math.random() * 1000);
  let bad_websiteId = "INVALID_STRING";
  verifyCustomersRejects(customerId_valid, email_valid, newPassword_valid, resetPasswordLinkToken_valid, resetToken_valid, template_valid, bad_websiteId);
});
bthread("fuzz:Customers:customerId_Missing", function () {
  let customerId_valid = Math.floor(Math.random() * 1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let newPassword_valid = "newPassword_valid_" + Math.floor(Math.random()*1000);
  let resetPasswordLinkToken_valid = "resetPasswordLinkToken_valid_" + Math.floor(Math.random()*1000);
  let resetToken_valid = "resetToken_valid_" + Math.floor(Math.random()*1000);
  let template_valid = "template_valid_" + Math.floor(Math.random()*1000);
  let websiteId_valid = Math.floor(Math.random() * 1000);
  let missing_customerId = undefined;
  verifyCustomersRejects(missing_customerId, email_valid, newPassword_valid, resetPasswordLinkToken_valid, resetToken_valid, template_valid, websiteId_valid);
});
bthread("fuzz:GuestCarts:cartId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartsRejects(bad_cartId);
});
bthread("fuzz:GuestCarts:cartId_Missing", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let missing_cartId = undefined;
  verifyGuestCartsRejects(missing_cartId);
});
bthread("fuzz:GuestCartsEstimateShippingMethods:cartId_InvalidType", function () {
  let address_valid = "address_valid_" + Math.floor(Math.random()*1000);
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartsEstimateShippingMethodsRejects(address_valid, bad_cartId, id_valid);
});
bthread("fuzz:GuestCartsEstimateShippingMethods:id_InvalidType", function () {
  let address_valid = "address_valid_" + Math.floor(Math.random()*1000);
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = ["NOT_A_STRING"];
  verifyGuestCartsEstimateShippingMethodsRejects(address_valid, cartId_valid, bad_id);
});
bthread("fuzz:GuestCartsEstimateShippingMethods:id_Missing", function () {
  let address_valid = "address_valid_" + Math.floor(Math.random()*1000);
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyGuestCartsEstimateShippingMethodsRejects(address_valid, cartId_valid, missing_id);
});
bthread("fuzz:GuestCartsItems:cartId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let cartItem_valid = "cartItem_valid_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_valid = "quoteGuestCartManagementV1PlaceOrderPutBody_valid_" + Math.floor(Math.random()*1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartsItemsRejects(bad_cartId, cartItem_valid, quoteGuestCartManagementV1PlaceOrderPutBody_valid);
});
bthread("fuzz:GuestCartsItems:quoteGuestCartManagementV1PlaceOrderPutBody_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let cartItem_valid = "cartItem_valid_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_valid = "quoteGuestCartManagementV1PlaceOrderPutBody_valid_" + Math.floor(Math.random()*1000);
  let bad_quoteGuestCartManagementV1PlaceOrderPutBody = ["NOT_A_STRING"];
  verifyGuestCartsItemsRejects(cartId_valid, cartItem_valid, bad_quoteGuestCartManagementV1PlaceOrderPutBody);
});
bthread("fuzz:GuestCartsItems:cartId_Missing", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let cartItem_valid = "cartItem_valid_" + Math.floor(Math.random()*1000);
  let quoteGuestCartManagementV1PlaceOrderPutBody_valid = "quoteGuestCartManagementV1PlaceOrderPutBody_valid_" + Math.floor(Math.random()*1000);
  let missing_cartId = undefined;
  verifyGuestCartsItemsRejects(missing_cartId, cartItem_valid, quoteGuestCartManagementV1PlaceOrderPutBody_valid);
});
bthread("fuzz:GuestCartsBillingAddress:address_InvalidType", function () {
  let address_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let useForShipping_valid = true;
  let bad_address = 12345;
  verifyGuestCartsBillingAddressRejects(bad_address, cartId_valid, useForShipping_valid);
});
bthread("fuzz:GuestCartsBillingAddress:cartId_InvalidType", function () {
  let address_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let useForShipping_valid = true;
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartsBillingAddressRejects(address_valid, bad_cartId, useForShipping_valid);
});
bthread("fuzz:GuestCartsBillingAddress:useForShipping_InvalidType", function () {
  let address_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let useForShipping_valid = true;
  let bad_useForShipping = "NOT_A_BOOL";
  verifyGuestCartsBillingAddressRejects(address_valid, cartId_valid, bad_useForShipping);
});
bthread("fuzz:GuestCartsBillingAddress:cartId_Missing", function () {
  let address_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let useForShipping_valid = true;
  let missing_cartId = undefined;
  verifyGuestCartsBillingAddressRejects(address_valid, missing_cartId, useForShipping_valid);
});
bthread("fuzz:GuestCartTotals:addressInformation_InvalidType", function () {
  let additionalData_valid = "additionalData_valid_" + Math.floor(Math.random()*1000);
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let paymentMethod_valid = "paymentMethod_valid_" + Math.floor(Math.random()*1000);
  let shippingCarrierCode_valid = "shippingCarrierCode_valid_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_valid = "shippingMethodCode_valid_" + Math.floor(Math.random()*1000);
  let bad_addressInformation = 12345;
  verifyGuestCartTotalsRejects(additionalData_valid, bad_addressInformation, cartId_valid, paymentMethod_valid, shippingCarrierCode_valid, shippingMethodCode_valid);
});
bthread("fuzz:GuestCartTotals:cartId_InvalidType", function () {
  let additionalData_valid = "additionalData_valid_" + Math.floor(Math.random()*1000);
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let paymentMethod_valid = "paymentMethod_valid_" + Math.floor(Math.random()*1000);
  let shippingCarrierCode_valid = "shippingCarrierCode_valid_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_valid = "shippingMethodCode_valid_" + Math.floor(Math.random()*1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartTotalsRejects(additionalData_valid, addressInformation_valid, bad_cartId, paymentMethod_valid, shippingCarrierCode_valid, shippingMethodCode_valid);
});
bthread("fuzz:GuestCartTotals:cartId_Missing", function () {
  let additionalData_valid = "additionalData_valid_" + Math.floor(Math.random()*1000);
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let paymentMethod_valid = "paymentMethod_valid_" + Math.floor(Math.random()*1000);
  let shippingCarrierCode_valid = "shippingCarrierCode_valid_" + Math.floor(Math.random()*1000);
  let shippingMethodCode_valid = "shippingMethodCode_valid_" + Math.floor(Math.random()*1000);
  let missing_cartId = undefined;
  verifyGuestCartTotalsRejects(additionalData_valid, addressInformation_valid, missing_cartId, paymentMethod_valid, shippingCarrierCode_valid, shippingMethodCode_valid);
});
bthread("fuzz:AdminToken:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let password_valid = "password_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_id = ["NOT_A_STRING"];
  verifyAdminTokenRejects(bad_id, password_valid, username_valid);
});
bthread("fuzz:AdminToken:id_Missing", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let password_valid = "password_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyAdminTokenRejects(missing_id, password_valid, username_valid);
});
bthread("fuzz:GuestCartsPaymentInformation:addressInformation_InvalidType", function () {
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let bad_addressInformation = 12345;
  verifyGuestCartsPaymentInformationRejects(bad_addressInformation, cartId_valid);
});
bthread("fuzz:GuestCartsPaymentInformation:cartId_InvalidType", function () {
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartsPaymentInformationRejects(addressInformation_valid, bad_cartId);
});
bthread("fuzz:GuestCartsPaymentInformation:cartId_Missing", function () {
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let missing_cartId = undefined;
  verifyGuestCartsPaymentInformationRejects(addressInformation_valid, missing_cartId);
});
bthread("fuzz:GuestCartsSetPaymentInformation:billingAddress_InvalidType", function () {
  let billingAddress_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let paymentMethod_valid = {};
  let bad_billingAddress = 12345;
  verifyGuestCartsSetPaymentInformationRejects(bad_billingAddress, cartId_valid, email_valid, id_valid, paymentMethod_valid);
});
bthread("fuzz:GuestCartsSetPaymentInformation:cartId_InvalidType", function () {
  let billingAddress_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let paymentMethod_valid = {};
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartsSetPaymentInformationRejects(billingAddress_valid, bad_cartId, email_valid, id_valid, paymentMethod_valid);
});
bthread("fuzz:GuestCartsSetPaymentInformation:email_InvalidType", function () {
  let billingAddress_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let paymentMethod_valid = {};
  let bad_email = ["NOT_A_STRING"];
  verifyGuestCartsSetPaymentInformationRejects(billingAddress_valid, cartId_valid, bad_email, id_valid, paymentMethod_valid);
});
bthread("fuzz:GuestCartsSetPaymentInformation:id_InvalidType", function () {
  let billingAddress_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let paymentMethod_valid = {};
  let bad_id = ["NOT_A_STRING"];
  verifyGuestCartsSetPaymentInformationRejects(billingAddress_valid, cartId_valid, email_valid, bad_id, paymentMethod_valid);
});
bthread("fuzz:GuestCartsSetPaymentInformation:paymentMethod_InvalidType", function () {
  let billingAddress_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let paymentMethod_valid = {};
  let bad_paymentMethod = 12345;
  verifyGuestCartsSetPaymentInformationRejects(billingAddress_valid, cartId_valid, email_valid, id_valid, bad_paymentMethod);
});
bthread("fuzz:GuestCartsSetPaymentInformation:id_Missing", function () {
  let billingAddress_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let email_valid = "email_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let paymentMethod_valid = {};
  let missing_id = undefined;
  verifyGuestCartsSetPaymentInformationRejects(billingAddress_valid, cartId_valid, email_valid, missing_id, paymentMethod_valid);
});
bthread("fuzz:GuestCartsShippingInformation:addressInformation_InvalidType", function () {
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_addressInformation = 12345;
  verifyGuestCartsShippingInformationRejects(bad_addressInformation, cartId_valid, id_valid);
});
bthread("fuzz:GuestCartsShippingInformation:cartId_InvalidType", function () {
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartsShippingInformationRejects(addressInformation_valid, bad_cartId, id_valid);
});
bthread("fuzz:GuestCartsShippingInformation:id_InvalidType", function () {
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = ["NOT_A_STRING"];
  verifyGuestCartsShippingInformationRejects(addressInformation_valid, cartId_valid, bad_id);
});
bthread("fuzz:GuestCartsShippingInformation:id_Missing", function () {
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyGuestCartsShippingInformationRejects(addressInformation_valid, cartId_valid, missing_id);
});
bthread("fuzz:GuestCartsTotalsInformation:addressInformation_InvalidType", function () {
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_addressInformation = 12345;
  verifyGuestCartsTotalsInformationRejects(bad_addressInformation, cartId_valid, id_valid);
});
bthread("fuzz:GuestCartsTotalsInformation:cartId_InvalidType", function () {
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartsTotalsInformationRejects(addressInformation_valid, bad_cartId, id_valid);
});
bthread("fuzz:GuestCartsTotalsInformation:id_InvalidType", function () {
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = ["NOT_A_STRING"];
  verifyGuestCartsTotalsInformationRejects(addressInformation_valid, cartId_valid, bad_id);
});
bthread("fuzz:GuestCartsTotalsInformation:id_Missing", function () {
  let addressInformation_valid = {};
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyGuestCartsTotalsInformationRejects(addressInformation_valid, cartId_valid, missing_id);
});
bthread("fuzz:CustomerToken:id_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let password_valid = "password_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_id = ["NOT_A_STRING"];
  verifyCustomerTokenRejects(bad_id, password_valid, username_valid);
});
bthread("fuzz:CustomerToken:password_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let password_valid = "password_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_password = ["NOT_A_STRING"];
  verifyCustomerTokenRejects(id_valid, bad_password, username_valid);
});
bthread("fuzz:CustomerToken:username_InvalidType", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let password_valid = "password_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let bad_username = ["NOT_A_STRING"];
  verifyCustomerTokenRejects(id_valid, password_valid, bad_username);
});
bthread("fuzz:CustomerToken:id_Missing", function () {
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let password_valid = "password_valid_" + Math.floor(Math.random()*1000);
  let username_valid = "username_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyCustomerTokenRejects(missing_id, password_valid, username_valid);
});
bthread("fuzz:GuestCartGiftMessage:cartId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let giftMessage_valid = {};
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartGiftMessageRejects(bad_cartId, giftMessage_valid);
});
bthread("fuzz:GuestCartGiftMessage:giftMessage_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let giftMessage_valid = {};
  let bad_giftMessage = 12345;
  verifyGuestCartGiftMessageRejects(cartId_valid, bad_giftMessage);
});
bthread("fuzz:GuestCartGiftMessage:cartId_Missing", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let giftMessage_valid = {};
  let missing_cartId = undefined;
  verifyGuestCartGiftMessageRejects(missing_cartId, giftMessage_valid);
});
bthread("fuzz:GuestItemGiftMessage:cartId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let giftMessage_valid = {};
  let itemId_valid = Math.floor(Math.random() * 1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestItemGiftMessageRejects(bad_cartId, giftMessage_valid, itemId_valid);
});
bthread("fuzz:GuestItemGiftMessage:giftMessage_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let giftMessage_valid = {};
  let itemId_valid = Math.floor(Math.random() * 1000);
  let bad_giftMessage = 12345;
  verifyGuestItemGiftMessageRejects(cartId_valid, bad_giftMessage, itemId_valid);
});
bthread("fuzz:GuestItemGiftMessage:itemId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let giftMessage_valid = {};
  let itemId_valid = Math.floor(Math.random() * 1000);
  let bad_itemId = "INVALID_STRING";
  verifyGuestItemGiftMessageRejects(cartId_valid, giftMessage_valid, bad_itemId);
});
bthread("fuzz:GuestItemGiftMessage:cartId_Missing", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let giftMessage_valid = {};
  let itemId_valid = Math.floor(Math.random() * 1000);
  let missing_cartId = undefined;
  verifyGuestItemGiftMessageRejects(missing_cartId, giftMessage_valid, itemId_valid);
});
bthread("fuzz:GuestCartCollectionPoint:cartId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let collectionPointId_valid = "collectionPointId_valid_" + Math.floor(Math.random()*1000);
  let countryId_valid = "countryId_valid_" + Math.floor(Math.random()*1000);
  let postcode_valid = "postcode_valid_" + Math.floor(Math.random()*1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartCollectionPointRejects(bad_cartId, collectionPointId_valid, countryId_valid, postcode_valid);
});
bthread("fuzz:GuestCartCollectionPoint:collectionPointId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let collectionPointId_valid = "collectionPointId_valid_" + Math.floor(Math.random()*1000);
  let countryId_valid = "countryId_valid_" + Math.floor(Math.random()*1000);
  let postcode_valid = "postcode_valid_" + Math.floor(Math.random()*1000);
  let bad_collectionPointId = ["NOT_A_STRING"];
  verifyGuestCartCollectionPointRejects(cartId_valid, bad_collectionPointId, countryId_valid, postcode_valid);
});
bthread("fuzz:GuestCartCollectionPoint:countryId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let collectionPointId_valid = "collectionPointId_valid_" + Math.floor(Math.random()*1000);
  let countryId_valid = "countryId_valid_" + Math.floor(Math.random()*1000);
  let postcode_valid = "postcode_valid_" + Math.floor(Math.random()*1000);
  let bad_countryId = ["NOT_A_STRING"];
  verifyGuestCartCollectionPointRejects(cartId_valid, collectionPointId_valid, bad_countryId, postcode_valid);
});
bthread("fuzz:GuestCartCollectionPoint:postcode_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let collectionPointId_valid = "collectionPointId_valid_" + Math.floor(Math.random()*1000);
  let countryId_valid = "countryId_valid_" + Math.floor(Math.random()*1000);
  let postcode_valid = "postcode_valid_" + Math.floor(Math.random()*1000);
  let bad_postcode = ["NOT_A_STRING"];
  verifyGuestCartCollectionPointRejects(cartId_valid, collectionPointId_valid, countryId_valid, bad_postcode);
});
bthread("fuzz:GuestCartCollectionPoint:cartId_Missing", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let collectionPointId_valid = "collectionPointId_valid_" + Math.floor(Math.random()*1000);
  let countryId_valid = "countryId_valid_" + Math.floor(Math.random()*1000);
  let postcode_valid = "postcode_valid_" + Math.floor(Math.random()*1000);
  let missing_cartId = undefined;
  verifyGuestCartCollectionPointRejects(missing_cartId, collectionPointId_valid, countryId_valid, postcode_valid);
});
bthread("fuzz:GuestCartCollectionPointSelect:cartId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let entityId_valid = Math.floor(Math.random() * 1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartCollectionPointSelectRejects(bad_cartId, entityId_valid, id_valid);
});
bthread("fuzz:GuestCartCollectionPointSelect:entityId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let entityId_valid = Math.floor(Math.random() * 1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_entityId = "INVALID_STRING";
  verifyGuestCartCollectionPointSelectRejects(cartId_valid, bad_entityId, id_valid);
});
bthread("fuzz:GuestCartCollectionPointSelect:id_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let entityId_valid = Math.floor(Math.random() * 1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = ["NOT_A_STRING"];
  verifyGuestCartCollectionPointSelectRejects(cartId_valid, entityId_valid, bad_id);
});
bthread("fuzz:GuestCartCollectionPointSelect:id_Missing", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let entityId_valid = Math.floor(Math.random() * 1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyGuestCartCollectionPointSelectRejects(cartId_valid, entityId_valid, missing_id);
});
bthread("fuzz:GuestCartDeliveryOption:cartId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let selectedOption_valid = "selectedOption_valid_" + Math.floor(Math.random()*1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartDeliveryOptionRejects(bad_cartId, id_valid, selectedOption_valid);
});
bthread("fuzz:GuestCartDeliveryOption:id_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let selectedOption_valid = "selectedOption_valid_" + Math.floor(Math.random()*1000);
  let bad_id = ["NOT_A_STRING"];
  verifyGuestCartDeliveryOptionRejects(cartId_valid, bad_id, selectedOption_valid);
});
bthread("fuzz:GuestCartDeliveryOption:selectedOption_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let selectedOption_valid = "selectedOption_valid_" + Math.floor(Math.random()*1000);
  let bad_selectedOption = ["NOT_A_STRING"];
  verifyGuestCartDeliveryOptionRejects(cartId_valid, id_valid, bad_selectedOption);
});
bthread("fuzz:GuestCartDeliveryOption:id_Missing", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let selectedOption_valid = "selectedOption_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyGuestCartDeliveryOptionRejects(cartId_valid, missing_id, selectedOption_valid);
});
bthread("fuzz:GuestCartCheckoutFields:cartId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let serviceSelection_valid = [];
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartCheckoutFieldsRejects(bad_cartId, id_valid, serviceSelection_valid);
});
bthread("fuzz:GuestCartCheckoutFields:id_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let serviceSelection_valid = [];
  let bad_id = ["NOT_A_STRING"];
  verifyGuestCartCheckoutFieldsRejects(cartId_valid, bad_id, serviceSelection_valid);
});
bthread("fuzz:GuestCartCheckoutFields:serviceSelection_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let serviceSelection_valid = [];
  let bad_serviceSelection = "NOT_AN_ARRAY";
  verifyGuestCartCheckoutFieldsRejects(cartId_valid, id_valid, bad_serviceSelection);
});
bthread("fuzz:GuestCartCheckoutFields:id_Missing", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let serviceSelection_valid = [];
  let missing_id = undefined;
  verifyGuestCartCheckoutFieldsRejects(cartId_valid, missing_id, serviceSelection_valid);
});
bthread("fuzz:GuestCartPickupLocation:cartId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let pickupLocationId_valid = "pickupLocationId_valid_" + Math.floor(Math.random()*1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartPickupLocationRejects(bad_cartId, id_valid, pickupLocationId_valid);
});
bthread("fuzz:GuestCartPickupLocation:id_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let pickupLocationId_valid = "pickupLocationId_valid_" + Math.floor(Math.random()*1000);
  let bad_id = ["NOT_A_STRING"];
  verifyGuestCartPickupLocationRejects(cartId_valid, bad_id, pickupLocationId_valid);
});
bthread("fuzz:GuestCartPickupLocation:pickupLocationId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let pickupLocationId_valid = "pickupLocationId_valid_" + Math.floor(Math.random()*1000);
  let bad_pickupLocationId = ["NOT_A_STRING"];
  verifyGuestCartPickupLocationRejects(cartId_valid, id_valid, bad_pickupLocationId);
});
bthread("fuzz:GuestCartPickupLocation:id_Missing", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let pickupLocationId_valid = "pickupLocationId_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyGuestCartPickupLocationRejects(cartId_valid, missing_id, pickupLocationId_valid);
});
bthread("fuzz:GuestCartDeliveryPickupLocation:cartId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let entityId_valid = Math.floor(Math.random() * 1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_cartId = ["NOT_A_STRING"];
  verifyGuestCartDeliveryPickupLocationRejects(bad_cartId, entityId_valid, id_valid);
});
bthread("fuzz:GuestCartDeliveryPickupLocation:entityId_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let entityId_valid = Math.floor(Math.random() * 1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_entityId = "INVALID_STRING";
  verifyGuestCartDeliveryPickupLocationRejects(cartId_valid, bad_entityId, id_valid);
});
bthread("fuzz:GuestCartDeliveryPickupLocation:id_InvalidType", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let entityId_valid = Math.floor(Math.random() * 1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let bad_id = ["NOT_A_STRING"];
  verifyGuestCartDeliveryPickupLocationRejects(cartId_valid, entityId_valid, bad_id);
});
bthread("fuzz:GuestCartDeliveryPickupLocation:id_Missing", function () {
  let cartId_valid = "cartId_valid_" + Math.floor(Math.random()*1000);
  let entityId_valid = Math.floor(Math.random() * 1000);
  let id_valid = "id_valid_" + Math.floor(Math.random()*1000);
  let missing_id = undefined;
  verifyGuestCartDeliveryPickupLocationRejects(cartId_valid, entityId_valid, missing_id);
});