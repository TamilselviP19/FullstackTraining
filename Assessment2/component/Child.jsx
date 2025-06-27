import React from "react";
function Child({ message }) {
  return (
    <div>
      <h3>Message from GrandParent:</h3>
      <p>{message}</p>
    </div>
  );
}
export default Child;
