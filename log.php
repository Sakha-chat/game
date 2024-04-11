<?php
$email = $_POST['email'];
$name = $_POST['name'];
$emailAddress = $_POST['email-address'];
$phoneNumber = $_POST['phone-number'];
$instagramHandle = $_POST['instagram-handle'];

$data = array(
    'Email' => $email,
    'Name' => $name,
    'Email Address' => $emailAddress,
    'Phone Number' => $phoneNumber,
    'Instagram Handle' => $instagramHandle
);

$log = 'log.html';
$logData = "<table><tr><th>Email</th><th>Name</th><th>Email Address</th><th>Phone Number</th><th>Instagram Handle</th></tr>";
foreach ($data as $key => $value) {
    $logData .= "<tr><td>" . $value . "</td></tr>";
}
$logData .= "</table>";

file_put_contents($log, $logData, FILE_APPEND);

header('Location: index.html');
exit;
?>