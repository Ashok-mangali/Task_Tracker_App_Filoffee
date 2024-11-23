import React, { useState, useEffect } from 'react';
import AddTaskFrom from './components/AddTaskFrom';
import ListTask from './components/ListTask';

import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <AddTaskFrom onAddTask={addTask} />
      <ListTask tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
