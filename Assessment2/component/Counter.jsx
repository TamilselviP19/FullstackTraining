import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => ((prevCount + 1) % 11 === 0 ? 0 : prevCount + 1));
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default Counter;