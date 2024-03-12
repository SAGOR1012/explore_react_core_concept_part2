import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import User from "./User";
import Friends from "./Friends";

function App() {
  const [count, setCount] = useState(0);
  function handelClick() {
    alert("button clicked");
  }
  function handelClick2() {
    alert("button clicked 2");
  }
  function addToFive(num) {
    alert(num + 5);
  }

  return (
    <>
      <h1>React core concept 2</h1>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handelClick}>Click me</button>
      <button onClick={handelClick2}>Click2</button>
      <button
        onClick={() => {
          alert("button clicked 3");
        }}>
        button3
      </button>
      {/* Halka vejal */}
      <button
        onClick={() => {
          addToFive(5);
        }}>
        Click4
      </button>
      <div className="card"></div>
      <User></User>
      <Friends></Friends>
    </>
  );
}

export default App;
