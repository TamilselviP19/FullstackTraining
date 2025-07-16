import { useRef } from "react";

function FormValidationWithRef() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault(); 

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();

    if (name === "") {
      alert("Name is required");
      nameRef.current.focus();
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email");
      emailRef.current.focus(); 
      return;
    }

    alert("Form submitted successfully!");
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>Form Validation using useRef</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label><br />
          <input type="text" ref={nameRef} placeholder="Enter name" />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label><br />
          <input type="text" ref={emailRef} placeholder="Enter email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidationWithRef;
