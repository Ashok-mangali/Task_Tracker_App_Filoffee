import React, { useState } from 'react';
import EditTask from './EditTask';
import './Addform.css'

function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  const [editingTask, setEditingTask] = useState(null);
  const updateTask = (updatedTask) => {
    onUpdateTask(updatedTask); 
    setEditingTask(null); 
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center">No tasks available.</p>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due-Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.status}</td>
                  <td>
                    <button 
                      className="btn btn-sm btn-warning me-2" 
                      onClick={() => setEditingTask(task)}>
                      Edit
                    </button>
                    <button 
                      className="btn btn-sm btn-danger" 
                      onClick={() => onDeleteTask(task.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    {editingTask && (
  <EditTask
    task={editingTask}
    onClose={() => setEditingTask(null)}
    onSave={updateTask}
  />
)}
    </div>
  );
}

export default TaskList;
