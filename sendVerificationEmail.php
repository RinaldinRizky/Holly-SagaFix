<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

session_start();
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];

// Buat token verifikasi unik
$token = bin2hex(random_bytes(16));
$_SESSION['email_verification'][$token] = $email;

// Buat instance PHPMailer
$mail = new PHPMailer(true);

try {
    // Pengaturan server
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Set SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'hollysaga@gmail.com'; // SMTP username
    $mail->Password = 'wbae irad idfr wudr'; // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Penerima
    $mail->setFrom('hollysaga@gmail.com', 'Mailer');
    $mail->addAddress($email);

    // Konten email
    $verificationLink = "http://hollysaga.shop/verifyEmail.php?token=$token";
    $mail->isHTML(true);
    $mail->Subject = 'Email Verification';
    $mail->Body = "Please click the link below to verify your email: <a href='$verificationLink'>$verificationLink</a>";

    $mail->send();
    echo 'Verification email has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
