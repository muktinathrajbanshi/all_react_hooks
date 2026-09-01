import { useState } from "react";
import "./App.css";
import { useReducer } from "react";

const App = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="container">
        <h1>{state.count}</h1>
        <div className="btn">
          <button onClick={() => dispatch({ type: "increase" })}>
            Increase
          </button>
          <button onClick={() => dispatch({ type: "decrease" })}>
            Decrease
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
