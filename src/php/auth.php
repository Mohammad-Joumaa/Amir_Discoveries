<?php
// Enable CORS for all origins and methods
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Connect to DB
$host = 'localhost';
$db_name = 'amir_discoveries';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database connection failed: " . $e->getMessage()]);
    exit();
}

// Get JSON POST data
$data = json_decode(file_get_contents("php://input"), true);

// Debug logging (uncomment to debug)
// file_put_contents("debug.log", "Received data: " . json_encode($data, JSON_PRETTY_PRINT) . "\n", FILE_APPEND);

// Check if we have the required fields
if (!isset($data['action'], $data['username'], $data['password'])) {
    http_response_code(400);
    echo json_encode([
        "success" => false, 
        "message" => "Required fields are missing",
        "received" => array_keys($data ?: [])
    ]);
    exit();
}

$action = trim($data['action']);
$username = trim($data['username']);
$password = trim($data['password']);
$email = isset($data['email']) ? trim($data['email']) : "";

// Validate inputs
if (empty($username) || empty($password)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Username and password cannot be empty"]);
    exit();
}

if ($action === 'signup') {
    if (empty($email)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Email is required for signup"]);
        exit();
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Invalid email format"]);
        exit();
    }

    // Check if username exists
    $stmt = $pdo->prepare("SELECT id FROM users WHERE username = :username LIMIT 1");
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->execute();
    if ($stmt->fetch()) {
        http_response_code(409);
        echo json_encode(["success" => false, "message" => "Username already exists"]);
        exit();
    }

    // Check if email exists
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = :email LIMIT 1");
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->execute();
    if ($stmt->fetch()) {
        http_response_code(409);
        echo json_encode(["success" => false, "message" => "Email already exists"]);
        exit();
    }

    // Insert new user
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->bindParam(':password', $hashedPassword, PDO::PARAM_STR);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Account created successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to create account"]);
    }

} elseif ($action === 'login') {
    // Fetch user
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username LIMIT 1");
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        echo json_encode([
            "success" => true, 
            "message" => "Login successful",
            "user" => [
                "id" => $user['id'],
                "username" => $user['username'],
                "email" => $user['email']
            ]
        ]);
    } else {
        http_response_code(401);
        echo json_encode(["success" => false, "message" => "Invalid username or password"]);
    }

} else {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid action. Use 'login' or 'signup'"]);
}
?>