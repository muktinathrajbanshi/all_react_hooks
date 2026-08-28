import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, []);

  return (
    <>
      <div className="container">
        <h1>I've rendered {count} times!</h1>
      </div>
    </>
  );
};

export default App;
