<?php
use Magento\Framework\App\Bootstrap;
require 'app/bootstrap.php';
$bootstrap = Bootstrap::create(BP, $_SERVER);
$objectManager = $bootstrap->getObjectManager();
$state = $objectManager->get('Magento\Framework\App\State');
$state->setAreaCode('adminhtml');

$users = [
    ['email' => 'roni_cost@example.com', 'first' => 'Roni', 'last' => 'Cost'],
    ['email' => 'david_lowcost@example.com', 'first' => 'David', 'last' => 'Lowcost']
];

foreach ($users as $u) {
    $customer = $objectManager->create('Magento\Customer\Model\Customer');
    $customer->setWebsiteId(1);
    $customer->loadByEmail($u['email']);
    if (!$customer->getId()) {
        $customer->setEmail($u['email']);
        $customer->setFirstname($u['first']);
        $customer->setLastname($u['last']);
        $customer->setPassword('Password123'); // Standard testing password
        $customer->save();
        echo "Restored Luma User: " . $u['email'] . "\n";
    }
}
