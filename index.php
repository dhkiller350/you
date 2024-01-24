<?php

// set your e-mail address first, where you'll receive the notifications
$yourEmailAddress = "user@domain.com";

$emailSubject = "New Visitor on Webpage";
$remoteIpAddress = $_SERVER['REMOTE_ADDR'];
$emailContent = "Someone visited your webpage. IP address:".$remoteIpAddress;

// send the message
mail($yourEmailAddress, $emailSubject, $emailContent);

?>
