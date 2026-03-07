// function UserProfile({ data, loading, error }) {
//     if (loading) return <div className="spinner">Loading user...</div>;
//     if (error) return <div className="error">Error: {error.message}</div>;
//     if (!data) return null; // Render nothing if no data is present
  
//     return (
//       <div className="profile">
//         <h1>{data.name}</h1>
//         <p>{data.bio}</p>
//       </div>
//     );
//   }

import React, { useState } from 'react';

function TodoApp() {
  // 1. Initial State (Hamaray tasks ki list)
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice Map" }
  ]);

  // 2. Delete Function
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  // 3. Add Function
  const addTask = () => {
    const newTask = { id: Date.now(), text: "New Task" };
    setTasks([...tasks, newTask]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Tasks</h2>
      <button onClick={addTask}>Add Task</button>
      
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} 
            <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}