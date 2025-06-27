import ChildComponent from "./ChildComponent";
function ParentComponent() {
  const message = "Good morning";

  return <ChildComponent message={message} />;
}

export default ParentComponent;
