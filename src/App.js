import logo from "./logo.svg";
import "./App.css";
import { DynamicPart } from "./dynamic";
import { StaticPart } from "./static-part";

function App() {
  return (
    <div className='App'>
      <DynamicPart />
      <StaticPart />
    </div>
  );
}

export default App;
