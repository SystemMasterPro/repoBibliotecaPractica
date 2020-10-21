<?php
//En el destino colocar el correo alque quieres que lleguen los datos del contacto de tu formulario
$to = "richardjimenez.9641@gmail.com";
$subject = "RAPIDS";
$message = "Este es mi primer envío de email con PHP";
$headers = "From: mi@cuentadeemail.com" . "\r\n" . "CC: destinatarioencopia@email.com";
mail($to, $subject, $message, $headers);
//Esto es opcional, aqui pueden colocar un mensaje de "enviado correctamente" o redireccionarlo a algun lugar
?>