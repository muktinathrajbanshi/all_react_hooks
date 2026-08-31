import { useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Click Here</button>
      </div>
    </>
  );
};

export default App;
