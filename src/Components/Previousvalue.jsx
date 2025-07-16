import { useEffect, useRef, useState } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h3>Current: {count}</h3>
      <h4>Previous: {prevCount.current}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousValue;
