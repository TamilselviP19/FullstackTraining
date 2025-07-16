
import { useState } from "react";

function BgColor() {
  const colors = ["red", "blue", "green", "orange", "purple","yellow","pink"];
  const [index, setIndex] = useState(0);

  function changeColor() {
    const nextIndex = (index + 1) ;
    setIndex(nextIndex);
  }

  return (
    <div
      style={{
        backgroundColor: colors[index],
        height: "100vh",
        padding: "20px",
        transition: "background-color 0.5s ease"
      }}
    >
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
}

export default BgColor;
