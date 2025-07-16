import { useState } from "react";

function ToDo() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);
  function add() {
    if (task !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  }
  function del(index){
    const newItem=taskList.filter((task,i)=>i!==index)
    setTaskList(newItem)
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-success" onClick={add}>
        Add
      </button>
      <ul>
        {taskList.map((i, index) => (
          <li key={index}>
            {i}
            <button className="btn btn-danger" onClick={()=>{del(index)}}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ToDo;
