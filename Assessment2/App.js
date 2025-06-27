import CheckBox from "./component/CheckBox";
import Child from "./component/Child";
import ChildComponent from "./component/ChildComponent";
import ControlInput from "./component/ControlInput";
import Counter from "./component/Counter";
import CounterBtn from "./component/CounterBtn";
import FormLogin from "./component/FormLogin";
import GrandParent from "./component/GrandParent";
import Names from "./component/Names";
import ParentComponent from "./component/ParentComponent";
import ToDo from "./component/ToDo";
import ToggleMessage from "./component/ToggleMessage";

function App() {
  return (
    <>
      <div>1</div>
      <CounterBtn />
      <hr></hr>
      <div>2</div>
      <ToggleMessage />
      <hr></hr>
      <div>3</div>
      <ParentComponent />
      <hr></hr>
      <div>4</div>
      <GrandParent />
      <hr></hr>
      <div>5</div>
      <Names />
      <hr></hr>
      <div>6</div>
      <h2>CheckBox</h2>
      <CheckBox />
      <hr></hr>
      <div>7</div>
      <ControlInput />
      <hr></hr>
      <div>9</div>
      <FormLogin />
      <hr></hr>
      <div>11</div>
      <ToDo />
      <hr></hr>
      <div>12</div>
      <Counter />
    </>
  );
}
export default App;
