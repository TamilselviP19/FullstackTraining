import React, { useState } from "react";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input.trim()]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
        style={{ padding: "5px", width: "200px" }}
      />
      <button onClick={addTodo} style={{ marginLeft: "10px" }}>
        Add
      </button>
      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {todo}{" "}
            <button
              onClick={() => deleteTodo(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;