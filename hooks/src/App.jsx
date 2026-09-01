import { useState } from "react";
import "./App.css";
import { useReducer } from "react";

const App = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    return { count: state.count + 1 };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="container">
        <h1>{state.count}</h1>
        <div className="btn">
          <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
          <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
        </div>
      </div>
    </>
  );
};

export default App;
