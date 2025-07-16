import Nav from "./Components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Components/card";
import FocusInput from "./Components/FocusInput";
import Stopwatch from "./Components/Stopwatch";
import PreviousValue from "./Components/Previousvalue";
import ClickCounter from "./Components/Clickcounter";
import FormValidationWithRef from "./Components/FormValidationWithRef";
import Counter from "./Components/Counter";
import ToDo from "./Components/ToDo";
import BgColor from "./Components/BgColor";
import Toggle from "./Components/Toggle";
import Form from "./Components/Form";


function App(){
  return (
    <>
    <FocusInput/>
    <hr/>
    <PreviousValue/>
    <hr/>
    <FormValidationWithRef/>
    <hr/>
    <Stopwatch/>
    <hr/>
    <ClickCounter/>
    <hr/>
    <Form/>
    <hr/>
    <Counter/>
    <hr/>
    <ToDo/>
    <hr/>
    <BgColor/>
    <hr/>
    <Toggle/>
    <hr/>
   
    </>
  )
}
export default App;