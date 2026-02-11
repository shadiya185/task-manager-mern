import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const addTask = () => {
    if (!title) return;
    setTasks([...tasks, { title, completed: false }]);
    setTitle("");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Task Manager</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
