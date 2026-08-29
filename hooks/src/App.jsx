import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Muktinath");

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, [count, name]);

  return (
    <>
      <div className="container">
        <h1>I've rendered {count} times!</h1>
      </div>
    </>
  );
};

export default App;
