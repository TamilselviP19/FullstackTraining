
import { useState, useEffect } from "react";

function Form() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  
  useEffect(() => {
    if (username.trim() !== "" && password.trim() !== "") {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [username, password]);

  function handleSubmit() {
    console.log("Username:", username);
    console.log("Password:", password);
    setSubmitted(true);
    setSubmitDisabled(true);
  }

  return (
    <div style={{ padding: "20px" }}>
      <label htmlFor="user">UserName:</label>
      <input
        id="user"
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>Typed Username: {username}</p>

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Typed Password: {password}</p>

      <button onClick={handleSubmit} disabled={submitDisabled}>
        Submit
      </button>

      {submitted && <p style={{ color: "green" }}>Form submitted!</p>}
    </div>
  );
}

export default Form;
