import { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const inputElem = useRef();

  const btnClicked = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "blue";
  };

  return (
    <>
      <div className="container">
        <input type="text" ref={inputElem} />
        <button onClick={btnClicked}>Click Here</button>
      </div>
    </>
  );
};

export default App;
