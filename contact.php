<?php
// contact.php

// جمع البيانات من النموذج
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// تكوين الرسالة


$to = "alabsiali247@gmail.com"; // قم بتغيير هذا إلى بريدك الإلكتروني
$subject = "رسالة جديدة من موقع الويب";
$message = "
اسم المرسل: $name
البريد الإلكتروني: $email
العنوان: $address
رقم الهاتف: $phone
الرسالة:
$message
";
$headers = "From: $email";

// إرسال البريد الإلكتروني
mail($to, $subject, $message, $headers);

// إعادة توجيه المستخدم إلى صفحة شكر
header('Location: thank_you.html');
exit;
?>