<?php
session_start();

// URL: https://hollysaga.shop/verifyEmail.php?token=...
if (isset($_GET['token'])) {
    $token = $_GET['token'];

    // Validasi token dan set status verifikasi email
    if (isset($_SESSION['email_verification'][$token])) {
        $email = $_SESSION['email_verification'][$token];

        // Update status verifikasi email di basis data atau sesi
        // Contoh: $_SESSION['verified_emails'][$email] = true;

        // Hapus token dari sesi untuk keamanan
        unset($_SESSION['email_verification'][$token]);

        // Alihkan kembali ke halaman checkout dengan pesan sukses
        header('Location: https://hollysaga.shop/checkout.php?verification=success');
        exit();
    } else {
        // Token tidak valid
        echo "Token verifikasi tidak valid.";
    }
}
?>
