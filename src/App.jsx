import Nav from "./Components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Components/card";
import FocusInput from "./Components/FocusInput";
import Stopwatch from "./Components/Stopwatch";
import PreviousValue from "./Components/Previousvalue";
import ClickCounter from "./Components/Clickcounter";
import FormValidationWithRef from "./Components/FormValidationWithRef";


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
    </>
  )
}
export default App;