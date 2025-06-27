import React, { useState } from "react";

function ControlInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Controlled Input Example</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Current value: {inputValue}</p>
    </div>
  );
}
export default ControlInput;