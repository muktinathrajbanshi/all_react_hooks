import { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculation done!");
    return Math.pow(num, 3);
  }

  const result = cubeNum(number);

  return (
    <>
      <div className="container">
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <h1>Cube of the number: {result}</h1>
      </div>
    </>
  );
};

export default App;
