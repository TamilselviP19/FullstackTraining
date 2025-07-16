import { useRef } from "react";

function RenderCounter() {
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>Component Render Tracker</h3>
      <p>This component has rendered <strong>{renderCount.current}</strong> times.</p>
    </div>
  );
}

export default RenderCounter;
