<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if(!$data){
    echo json_encode(["success" => false, "error" => "No data received"]);
    exit;
}

$name = $data["name"];
$email = $data["email"];
$mobile = $data["mobile"];
$area = $data["area"];
$state = $data["state"];
$pincode = $data["pincode"];
$message = $data["message"];

$to = "yourmail@example.com";  // <-- यहाँ अपनी email डालो
$subject = "New Contact Form Submission";
$body = "
Name: $name \n
Email: $email \n
Mobile: $mobile \n
Area: $area Sq Ft \n
State: $state \n
Pincode: $pincode \n
Message: $message
";

$headers = "From: noreply@yourdomain.com";

if(mail($to, $subject, $body, $headers)){
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}
?>
