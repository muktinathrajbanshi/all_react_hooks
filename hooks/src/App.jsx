import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="container">
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}>Increase by 4</button>
      </div>
    </>
  );
};

export default App;
