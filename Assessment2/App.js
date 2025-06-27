//Question 1
// import React, { useState } from "react";

// function CounterBtn() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default CounterBtn;

//2. Toggle Message

// import React, { useState } from "react";

// function ToggleMessage() {
//   const [message, setMessage] = useState("Hello");

//   const toggleText = () => {
//     setMessage((prev) => (prev === "Hello" ? "Welcome Back" : "Hello"));
//   };

//   return (
//     <div className="text-center mt-5">
//       <h2>{message}</h2>
//       <button className="btn-secondary mt-3" onClick={toggleText}>
//         Click
//       </button>
//     </div>
//   );
// }

// export default ToggleMessage;

//Question 3
// import React from "react";

// function ChildComponent({ message }) {
//   return (
//     <div>
//       <h3>Message from Parent:</h3>
//       <p>{message}</p>
//     </div>
//   );
// }

// function ParentComponent() {
//   const message = "Good morning";

//   return <ChildComponent message={message} />;
// }

// export default ParentComponent;

//Question 4
// import React from "react";

// function Child({ message }) {
//   return (
//     <div>
//       <h3>Message from GrandParent:</h3>
//       <p>{message}</p>
//     </div>
//   );
// }

// function Parent({ message }) {
//   return <Child message={message} />;
// }

// function GrandParent() {
//   const message = "Hello from GrandParent";

//   return <Parent message={message} />;
// }

// export default GrandParent;

// // Question 5
// import React from "react";

// function Names() {
//   const names = ["John", "Jane", "Alex"];

//   return (
//     <div>
//       <h2>Name List</h2>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Names;

//6.CheckBox

// import React, { useState } from "react";

// function CheckBox() {
//   const [checked, setChecked] = useState(false);

//   const handleCheckboxChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={checked}
//           onChange={handleCheckboxChange}
//         />
//         Check me
//       </label>
//       {checked && <p>You checked the box!</p>}
//     </div>
//   );
// }

// export default CheckBox;

// // //Question 7
// import React, { useState } from "react";

// function ControlInput() {
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Controlled Input Example</h2>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//         placeholder="Type something..."
//       />
//       <p>Current value: {inputValue}</p>
//     </div>
//   );
// }
// export default ControlInput;

// Question 12
// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount((prevCount) => ((prevCount + 1) % 11 === 0 ? 0 : prevCount + 1));
//   };

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleClick}>Increase</button>
//     </div>
//   );
// }

// export default Counter;

//question 9
// import React, { useState } from "react";

// function FormLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const isFormValid = username.trim() !== "" && password.trim() !== "";

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert("Form submitted!");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" disabled={!isFormValid}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default FormLogin;

//Question 11

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
