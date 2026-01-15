<?php
use Magento\Framework\App\Bootstrap;
require 'app/bootstrap.php';
$bootstrap = Bootstrap::create(BP, $_SERVER);
$objectManager = $bootstrap->getObjectManager();
$state = $objectManager->get('Magento\Framework\App\State');
$state->setAreaCode('adminhtml');

$product = $objectManager->create('Magento\Catalog\Model\Product');
$product->setSku('SAT-PHONE-001');
$product->setName('Satellite Phone Research Unit');
$product->setTypeId('simple');
$product->setAttributeSetId(4);
$product->setPrice(1500);
$product->setInventoryData(['qty' => 10, 'is_in_stock' => 1]);
$product->save();
echo "Product Created Successfully\n";
