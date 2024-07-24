<?php
session_start();

if (isset($_GET['token'])) {
    $token = $_GET['token'];

    if (isset($_SESSION['email_verification'][$token])) {
        $email = $_SESSION['email_verification'][$token];

        $_SESSION['verified_emails'][$email] = true;

        unset($_SESSION['email_verification'][$token]);

        header('Location: https://hollysaga.shop/checkout.php?verification=success');
        exit();
    } else {
        echo "Token verifikasi tidak valid.";
    }
}
?>
