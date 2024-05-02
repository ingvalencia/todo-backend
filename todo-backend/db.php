<?php
$servername = "localhost";
$username = "root";
$password = "";  // Asumiendo que no tienes contraseña, si tienes una, inclúyela aquí.
$dbname = "todo_appg";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Revisar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>