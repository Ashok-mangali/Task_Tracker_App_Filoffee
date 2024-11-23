import React, { useState } from 'react';
import './Addform.css';

function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      status,
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setDueDate('');
    setStatus('Pending');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="form-control mb-2"
          required 
        />
      </div>
      <div className="form-group">
        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="form-control mb-2"
          required 
        />
      </div>
      <div className="form-group">
        <input 
          type="date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
          className="form-control mb-2"
          required 
        />
      </div>
      <div className="form-group">
        <select 
          value={status} 
          onChange={(e) => setStatus(e.target.value)} 
          className="form-control mb-2"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
