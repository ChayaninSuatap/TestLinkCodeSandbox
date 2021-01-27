import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(5);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{value}</h1>
        <button onClick={() => setValue(value + 1)}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
