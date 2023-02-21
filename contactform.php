<?php

if (isset($_POST['send'])) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $mailFrom = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $mailTo = "XXXX";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$firstname.$lastname.".\n\n".$message;

    mail( $mailTo, $txt, $headers);
    header("Location: index.php?mailsent");
}
