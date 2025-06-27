import react from "react";
import Child from "./Child";
function Parent({ message }) {
  return <Child message={message} />;
}
export default Parent;
