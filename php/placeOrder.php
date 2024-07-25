<?php 
/*Install Midtrans PHP Library (https://github.com/Midtrans/midtrans-php)
composer require midtrans/midtrans-php
Alternatively, if you are not using **Composer**, you can download midtrans-php library 
(https://github.com/Midtrans/midtrans-php/archive/master.zip), and then require 
the file manually.   

require_once dirname(__FILE__) . '/pathofproject/Midtrans.php'; */

require_once dirname(__FILE__) . '/midtrans-php-master/Midtrans.php';

require 'config.php';

//SAMPLE REQUEST START HERE

// Set your Merchant Server Key
\Midtrans\Config::$serverKey = 'SB-Mid-server-_L195VVpepb_e8ubVPgy6FA8';
// Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
\Midtrans\Config::$isProduction = false;
// Set sanitization on (default)
\Midtrans\Config::$isSanitized = true;
// Set 3DS transaction for credit card to true
\Midtrans\Config::$is3ds = true;

$params = array(
    'transaction_details' => array(
        'order_id' => rand(),
        'gross_amount' => $_POST['total'],
    ),
    'item_details' => json_decode($_POST['items'], true),
    'customer_details' => array(
        'first_name' => $_POST['name'],
        'email' => $_POST['email'],
        'phone' => $_POST['phone'],
    ),
);

foreach ($params['item_details'] as &$item) {
    if (!isset($item['quantity'])) {
        $item['quantity'] = 1;
    }
}
$snapToken = \Midtrans\Snap::getSnapToken($params);
echo $snapToken;

// Simpan data order ke database
$orderID = $params['transaction_details']['order_id'];
$email = $_POST['email'];
foreach ($params['item_details'] as $item) {
    $productName = $item['name'];
    $price = $item['price'];
    $downloadLink = 'URL_TO_DOWNLOAD_FILE'; // Ganti dengan link file yang sesuai
    $insertOrderQuery = "INSERT INTO orders (order_id, email, product_name, price, download_link) VALUES ('$orderID', '$email', '$productName', '$price', '$downloadLink')";
    mysqli_query($conn, $insertOrderQuery);
}
?>