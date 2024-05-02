<?php
include 'db.php';

// Verificar si la clave 'task' existe en $_POST y no está vacía
if(isset($_POST['task']) && !empty($_POST['task'])) {
    $task = $_POST['task'];

    $sql = "INSERT INTO tasks (task) VALUES ('$task')";
    if ($conn->query($sql) === TRUE) {
        echo "New task added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Task is empty or not set";
}

$conn->close();
?>
