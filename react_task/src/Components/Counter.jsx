import { useState } from "react"

function Counter(){
    const[count,setCount]=useState(0)
    function inc(){
        setCount(count+1)
    }
    function reset(){
        setCount(0)
    }
    function dec(){
        setCount(count-1)
    }
    return (
        <>
        <h1>{count}</h1>
        <button className="btn btn-primary" onClick={inc}>Increment</button>
        <button className="btn btn-danger" onClick={reset}>Reset</button>
        <button className="btn btn-success"onClick={dec}>Decrement</button>
        </>
    )
}
export default Counter