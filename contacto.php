<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$provincia = $_POST['provincia'];
$localidad = $_POST['localidad'];
$tel = $_POST['tel'];
$tipo = $_POST['tipo'];
$mensaje = $_POST['mensaje'];
$para = 'info@bolsanova.com.ar';
$titulo = 'Nuevo Contacto - '. $tipo . ' - Web BolsaNova';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Provincia: $provincia\n Localidad: $localidad\n Teléfono: $tel\n $email\n Mensaje:\n $mensaje";

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