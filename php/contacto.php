<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "crud";

$name=$_POST['name'];
$mail=test_input($_POST['mail']);
if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
  echo "<script>window.location.href = 'index.html?errorCom=Mal formato de mail.#comentarios';</script>";;
}
$mensaje=$_POST['message'];

$conn=new mysqli($servername,$username,$password,$dbname);

if($conn->connect_error){
    die("Error de conexión: ".$conn->connect_error);
}
$mensaje=$conn->real_escape_string($mensaje);
$query="INSERT INTO comentarios (nombre, mail, mensaje) VALUES(?,?,?)";
$stmt=$conn->prepare($query);
$stmt->bind_param("sss",$name, $mail,$mensaje);
if($stmt->execute()){
    echo "<script>window.location.href = 'index.html?corCom=Comentario enviado correctamente#comentarios';</script>";
}else{
    echo "<script>window.location.href = 'index.html?errorCom=Error al mandar el comentario.#comentarios';</script>";
}
$stmt->close();
$con->close();