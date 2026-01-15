<?php
use Magento\Framework\App\Bootstrap;
require 'app/bootstrap.php';
$bootstrap = Bootstrap::create(BP, $_SERVER);
$objectManager = $bootstrap->getObjectManager();
$state = $objectManager->get('Magento\Framework\App\State');
$state->setAreaCode('adminhtml');

$customer = $objectManager->create('Magento\Customer\Model\Customer');
$customer->setWebsiteId(1);
$customer->loadByEmail('roni_costa@example.com');
if (!$customer->getId()) {
    $customer->setEmail('roni_costa@example.com');
    $customer->setFirstname('Roni');
    $customer->setLastname('Costa');
    $customer->setPassword('Password123');
    $customer->save();
    echo "Customer Roni Costa Created Successfully\n";
} else {
    echo "Customer already exists\n";
}
