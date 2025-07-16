import { useRef } from "react";

function Clickcounter() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current += 1;
    console.log("Clicked:", countRef.current);
    alert(`Click count: ${countRef.current}`);
  }

  return (
    <div>
      <h3>Click Counter (No Re-render)</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Clickcounter;
