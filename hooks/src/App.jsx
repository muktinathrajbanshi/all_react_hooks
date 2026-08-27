import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">I've rendered {count} times!</div>
    </>
  );
};

export default App;
