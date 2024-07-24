<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];

    // Buat token verifikasi unik
    $token = bin2hex(random_bytes(16));

    // Simpan token dan email di basis data atau sesi
    session_start();
    $_SESSION['email_verification'][$token] = $email;

    $verificationLink = "https://hollysaga.shop/verifyEmail.php?token=$token";

    // Kirim email verifikasi menggunakan fungsi mail
    $subject = "Verifikasi Alamat Email Anda";
    $message = "Klik tautan berikut untuk memverifikasi email Anda: $verificationLink";
    $headers = "From: no-reply@hollysaga.shop";

    if (mail($email, $subject, $message, $headers)) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Gagal mengirim email.']);
    }
}
?>
