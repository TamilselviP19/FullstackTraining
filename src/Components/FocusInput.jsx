import { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(); 
  }, []);

  return (
    <div>
      <h3>Autofocus Input</h3>
      <input ref={inputRef} type="text" placeholder="Type here..."  style={{marginLeft:"20px"}}/>
    </div>
  );
}

export default FocusInput;
