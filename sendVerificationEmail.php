<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Generate a unique verification token
        $token = bin2hex(random_bytes(16));
        $_SESSION['email_verification'][$token] = $email;

        // Send the verification email
        $verificationLink = "http://yourdomain.com/verifyEmail.php?token=" . $token;
        $subject = "Email Verification";
        $message = "Please click the following link to verify your email: " . $verificationLink;
        $headers = "From: no-reply@hollysaga.com";

        if (mail($email, $subject, $message, $headers)) {
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error']);
        }
    } else {
        echo json_encode(['status' => 'error']);
    }
}
?>
