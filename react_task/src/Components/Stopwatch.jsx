import { useRef, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  function start() {
    if (intervalRef.current !== null) return; 
    intervalRef.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function reset() {
    stop();
    setSeconds(0);
  }

  return (
    <div>
      <h3>Stopwatch: {seconds}s</h3>
      <button onClick={start} >Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
