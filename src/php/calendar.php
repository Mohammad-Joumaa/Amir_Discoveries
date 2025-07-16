<?php
// ==== Database Connection ====
$host = 'localhost';
$db_name = 'amir_discoveries'; // Change this to your DB name
$username = 'root';
$password = ''; // Change if you set a password in XAMPP

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// ==== Handle Form Submission ====
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get POST data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $company_name = $_POST['company_name'];
    $company_website = $_POST['company_website'];
    $phone_number = $_POST['phone_number'];
    $headcount = $_POST['headcount'];
    $hear_about = $_POST['hear_about'];
    $other_source = $_POST['other_source'];
    $automation_details = $_POST['automation_details'];
    $sms_number = $_POST['sms_number'];
    $booking_date = $_POST['booking_date'];
    $start_time = $_POST['start_time'];
    $end_time = $_POST['end_time'];
    $timezone = $_POST['timezone'];
    $guest_emails = isset($_POST['guest_emails']) ? $_POST['guest_emails'] : [];

    try {
        // Insert into bookings table
        $sql = "INSERT INTO bookings 
            (name, email, company_name, company_website, phone_number, headcount, hear_about, other_source, automation_details, sms_number, booking_date, start_time, end_time, timezone)
            VALUES
            (:name, :email, :company_name, :company_website, :phone_number, :headcount, :hear_about, :other_source, :automation_details, :sms_number, :booking_date, :start_time, :end_time, :timezone)";

        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':company_name' => $company_name,
            ':company_website' => $company_website,
            ':phone_number' => $phone_number,
            ':headcount' => $headcount,
            ':hear_about' => $hear_about,
            ':other_source' => $other_source,
            ':automation_details' => $automation_details,
            ':sms_number' => $sms_number,
            ':booking_date' => $booking_date,
            ':start_time' => $start_time,
            ':end_time' => $end_time,
            ':timezone' => $timezone
        ]);

        // Get last inserted booking ID
        $booking_id = $pdo->lastInsertId();

        // Insert guest emails into guests table
        if (!empty($guest_emails)) {
            $guest_sql = "INSERT INTO guests (booking_id, email) VALUES (:booking_id, :email)";
            $guest_stmt = $pdo->prepare($guest_sql);

            foreach ($guest_emails as $guest_email) {
                if (!empty($guest_email)) {
                    $guest_stmt->execute([
                        ':booking_id' => $booking_id,
                        ':email' => $guest_email
                    ]);
                }
            }
        }

        $success = true;
    } catch (PDOException $e) {
        $error = "Error: " . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Book Consultation</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f8f9fa; padding: 20px; }
        h2 { color: #007bff; }
        form { background: #fff; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto; }
        input, textarea, button { display: block; width: 100%; margin-bottom: 10px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
        button { background: #007bff; color: #fff; border: none; cursor: pointer; }
        button:hover { background: #0056b3; }
        .success { color: green; }
        .error { color: red; }
    </style>
</head>
<body>
    <h2>Book Your Consultation</h2>

    <?php if (isset($success) && $success): ?>
        <p class="success">✅ Booking successful!</p>
    <?php elseif (isset($error)): ?>
        <p class="error">❌ <?php echo $error; ?></p>
    <?php endif; ?>

    <form method="POST" action="">
        <input type="text" name="name" placeholder="Full Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="text" name="company_name" placeholder="Company Name" required>
        <input type="text" name="company_website" placeholder="Company Website" required>
        <input type="text" name="phone_number" placeholder="Phone Number" required>
        <input type="text" name="headcount" placeholder="Headcount" required>
        <input type="text" name="hear_about" placeholder="How did you hear about us?" required>
        <input type="text" name="other_source" placeholder="Other Source (Optional)">
        <textarea name="automation_details" placeholder="Automation Details"></textarea>
        <input type="text" name="sms_number" placeholder="SMS Number (Optional)">
        <input type="date" name="booking_date" required>
        <input type="time" name="start_time" required>
        <input type="time" name="end_time" required>
        <input type="text" name="timezone" placeholder="Timezone (e.g., Asia/Beirut)" required>
        <!-- Guest emails -->
        <input type="email" name="guest_emails[]" placeholder="Guest Email 1 (Optional)">
        <input type="email" name="guest_emails[]" placeholder="Guest Email 2 (Optional)">
        <button type="submit">Book Consultation</button>
    </form>
</body>
</html>
