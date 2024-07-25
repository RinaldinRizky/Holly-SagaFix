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

// Fetch order history
$orderQuery = mysqli_query($conn, "SELECT * FROM orders WHERE email='{$_SESSION['SESSION_EMAIL']}'");
$orders = [];
while ($orderRow = mysqli_fetch_assoc($orderQuery)) {
    $orders[] = $orderRow;
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
        <div class="order-history">
            <h2>Order History</h2>
            <?php if (count($orders) > 0): ?>
                <ul>
                    <?php foreach ($orders as $order): ?>
                        <li>
                            <h3><?php echo $order['product_name']; ?></h3>
                            <p>Price: <?php echo $order['price']; ?></p>
                            <p><a href="<?php echo $order['download_link']; ?>" target="_blank">Download Design</a></p>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php else: ?>
                <p>No orders found.</p>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
