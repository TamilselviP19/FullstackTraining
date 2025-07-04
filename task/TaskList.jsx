import React from "react";

function TaskList() {
  const tasks = ["Learn React", "Do Exercise", "Write Code"];

  const handleClick = (e) => {
    if (e.target.tagName === "LI") {
      alert("You clicked: " + e.target.textContent);
    }
  };

  return (
    <div>
      <h2>Event Delegation in React</h2>
      <ul onClick={handleClick}>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
