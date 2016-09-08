<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$mensaje = $_POST['mensaje'];
$para = 'info@bolsanova.com.ar';
$titulo = 'Nuevo Contacto - Web BolsaNova';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Teléfono: $tel\n $email\n Mensaje:\n $mensaje";

if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Mensaje enviado, muchas gracias.');
window.location.href = 'http://bolsanova.com.ar';
</script>";
} else {
echo 'Falló el envio';
}
}
?>