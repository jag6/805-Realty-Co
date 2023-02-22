<?php

if (isset($_POST['submit'])) {

    //sanitize post data
    $_POST = filter_input_array(htmlspecialchars(INPUT_POST));

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $mailFrom = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    if(!empty($firstname)){
        $firstname = htmlspecialchars($firstname);
    }

    if(!empty($lastname)){
        $lastname = htmlspecialchars($lastname);
    }

    if(!empty($mailFrom)){
        $mailFrom = trim(htmlspecialchars($mailFrom));
    }

    if(!empty($phone)){
        $phone = htmlspecialchars($phone);
    }

    if(!empty($message)){
        $message = htmlspecialchars($message);
    }

    //send email to owner
    $mailTo = "XXXX";
    $header = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$firstname.$lastname.".\n\n".$message;

    mail($mailTo, $txt, $header);
    header("Location: thank-you.html?mailsent");
}