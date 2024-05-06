import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Función para cargar las tareas desde el backend
  const loadTasks = () => {
    axios.get('http://localhost/todo/todo-backend/get_tasks.php')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
  };

  // Función para agregar una tarea
  const addTask = () => {
    axios.post('http://localhost/todo/todo-backend/add_task.php', `task=${newTask}`)
      .then(response => {
        console.log(response.data);
        loadTasks();  // Recargar lista de tareas
        setNewTask("");  // Limpiar campo de entrada
      })
      .catch(error => {
        console.error('Error adding task: ', error);
      })
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    axios.get(`http://localhost/todo/todo-backend/delete_task.php?id=${id}`)
      .then(response => {
        console.log(response.data);
        loadTasks();  // Recargar lista de tareas
      })
      .catch(error => {
        console.error('Error deleting task: ', error);
      })
  };

  // Cargar tareas al montar el componente
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task} <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
