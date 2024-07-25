<?php
session_start();
if (!isset($_SESSION['SESSION_EMAIL'])) {
    header("Location: login.php");
    die();
}

include 'config.php';

$query = mysqli_query($conn, "SELECT * FROM users WHERE email='{$_SESSION['SESSION_EMAIL']}'");

if (mysqli_num_rows($query) > 0) {
    $row = mysqli_fetch_assoc($query);
    $userName = $row['name'];
} else {
    $userName = "User not found.";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="/css/welcome.css">
</head>
<body>
    <div class="container">
        <div class="welcome-box">
            <img src="/img/logo-h.png" alt="Logo" class="logo">
            <h1>Welcome, <?php echo $userName; ?></h1>
            <a href="logout.php" class="logout-button">Logout</a>
            <a href="index.php" class="back-button">Back to Home</a>
        </div>
    </div>
</body>
</html>


