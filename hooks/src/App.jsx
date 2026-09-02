import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState(
    localStorage.getItem("username") ? localStorage.getItem("username") : "",
  );

  useEffect(() => {
    localStorage.setItem("username", name);
  }, [name]);

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Enter you name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h2>Hello, {name}!</h2>
      </div>
    </>
  );
};

export default App;
