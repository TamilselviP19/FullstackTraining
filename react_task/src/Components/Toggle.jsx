import { useState } from "react"

function Toggle(){
    const [val,setVal]=useState(true)
    const handleToggle=()=>{
        setVal(!val)
    }
    return(
        <>
            <p>{val ? "Hi bharu":"Pei bharu"}</p>
            <button onClick={handleToggle}>Clike me</button>
        </>
    )
}

export default Toggle