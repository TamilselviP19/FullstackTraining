// import { useState } from "react"

// function Traffic(){

//     const [light,setLight]=useState(null)
//     function red(){
//         setLight("red")
//         if (light=="red"){
//             setInterval(()=>{
//                 alert("red")
//             },20000)
//     }
// }
//  function green(){
//         setLight("green")
//         if (light=="green"){
//             setInterval(()=>{
//                 alert("green")
//             },5000)
//     }
// }
//  function yellow(){
//         setLight("yellow")
//         if (light=="yellow"){
//             setInterval(()=>{
//                 alert("yellow")
//             },2000)
//     }
// }

//     return (
//         <>
//         <div  className="div1" onClick={red} ></div>
//         <div className="div1" onClick={yellow}></div>
//         <div className="div1" onClick={green}></div>
//         </>
//     )
// }
// export default Traffic;


import { useState, useEffect } from "react";

function TrafficLight() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    let timer;

    if (light === "red") {
      timer = setTimeout(() => setLight("green"), 20000); // 20 sec
    } else if (light === "green") {
      timer = setTimeout(() => setLight("yellow"), 15000); // 15 sec
    } else if (light === "yellow") {
      timer = setTimeout(() => setLight("red"), 5000); // 5 sec
    }

    return () => clearTimeout(timer);
  }, [light]);

  const getStyle = (color) => ({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "10px auto",
    backgroundColor: light === color ? color : "#ddd"
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div style={getStyle("red")}></div>
      <div style={getStyle("yellow")}></div>
      <div style={getStyle("green")}></div>
      <h3>Current Light: {light.toUpperCase()}</h3>
    </div>
  );
}

export default TrafficLight;