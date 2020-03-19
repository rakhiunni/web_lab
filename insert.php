<?php

/* Attempt MySQL server connection. Assuming you are running MySQL
  server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "", "demo");

// Check connection
if ($link === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Escape user inputs for security
$first_name = mysqli_real_escape_string($link, $_REQUEST['your_name']);
$phone_no = mysqli_real_escape_string($link, $_REQUEST['your_no']);
$email = mysqli_real_escape_string($link, $_REQUEST['your_email']);
$address = mysqli_real_escape_string($link, $_REQUEST['your_address']);

// Attempt insert query execution
$sql = "INSERT INTO contact (first_name, phone_no, email, address) VALUES ('$first_name', '$phone_no', '$email', '$address')";
//if (mysqli_query($link, $sql)) {
//    echo "Records added successfully.";
//} else {
//    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
//}
$toEmail = "rakhimolrajendran1.com";
$mailHeaders = "From: " . $first_name . "<" . $email . ">\r\n";
if (mail($toEmail, $first_name, $phone_no, $email, $address, $mailHeaders))
        {
    echo"<p class='success'>Successfully Sent</p>";
}
else
    {
    echo"<p class='Error'>Problem in Sending Mail.</p>";
    }
// Close connection
mysqli_close($link);
?>

<?php

$toEmail = "rakhimolrajendran1.com";
$mailHeaders = "From: " . $_POST["your_name"] . "<" . $_POST["your_email"] . ">\r\n";
if (mail($toEmail, $_POST["comments"], $_POST["your_phone"], $mailHeaders)) {
    echo"<p class='success'>Contact Mail Sent.</p>";
} else {
    echo"<p class='Error'>Problem in Sending Mail.</p>";
}
?>