<?php
session_start();

if (isset($_GET['token'])) {
    $token = $_GET['token'];

    if (isset($_SESSION['email_verification'][$token])) {
        $email = $_SESSION['email_verification'][$token];

        // Tandai email sebagai terverifikasi di basis data atau sesi
        $_SESSION['email_verified'] = true;
        unset($_SESSION['email_verification'][$token]);
        echo "Email Anda telah diverifikasi. Anda dapat melanjutkan proses checkout.";
    } else {
        echo "Token verifikasi tidak valid atau sudah kedaluwarsa.";
    }
} else {
    echo "Token verifikasi tidak disertakan.";
}
?>
