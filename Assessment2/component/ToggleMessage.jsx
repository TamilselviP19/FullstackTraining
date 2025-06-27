
import React, { useState } from "react";

function ToggleMessage() {
  const [message, setMessage] = useState("Hello");

  const toggleText = () => {
    setMessage((prev) => (prev === "Hello" ? "Welcome Back" : "Hello"));
  };

  return (
    <div className="text-center mt-5">
      <h2>{message}</h2>
      <button className="btn-secondary mt-3" onClick={toggleText}>
        Click
      </button>
    </div>
  );
}

export default ToggleMessage;