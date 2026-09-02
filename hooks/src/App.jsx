import { useEffect, useLayoutEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    console.log("Message from useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
  }, []);

  return (
    <>
      <div className="container">
        <h2>Test Message</h2>
      </div>
    </>
  );
};

export default App;
