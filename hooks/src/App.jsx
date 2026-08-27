import { useState } from "react";
import "./App.css";

const App = () => {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2026",
    color: "red",
  });

  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "blue" };
    });
  };

  // const [model, setModel] = useState("Roma");
  // const [year, setYear] = useState("2026");
  // const [color, setColor] = useState("red");

  return (
    <>
      <div className="container">
        <h1>My {car.brand}</h1>
        <h2>
          It us a {car.color} {car.model} from {car.year}
        </h2>
        <button onClick={changeColor}>Blue</button>
      </div>
    </>
  );
};

export default App;
