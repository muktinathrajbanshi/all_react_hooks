// import { useState } from "react";
// import "./App.css";

// const App = () => {
//   // const [counter, setCounter] = useState(10);
//   // console.log(counter);

//   const [color, setColor] = useState("Red");

//   // let color = "Red";
//   // const changeColor = () => {
//   //   color = "Blue";
//   //   console.log(color);
//   // };

//   const changeColor = () => {
//     setColor("Blue");
//   };

//   return (
//     <>
//       <div className="container">
//         <h1>My favourite color is is {color}!</h1>
//         <button onClick={changeColor}>Blue</button>
//       </div>
//     </>
//   );
// };

// export default App;

// 2.
// import { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [car, setCar] = useState({
//     brand: "Ferrari",
//     model: "Roma",
//     year: "2026",
//     color: "red",
//   });

//   const changeColor = () => {
//     setCar((prev) => {
//       return { ...prev, color: "blue" };
//     });
//   };

//   // const [model, setModel] = useState("Roma");
//   // const [year, setYear] = useState("2026");
//   // const [color, setColor] = useState("red");

//   return (
//     <>
//       <div className="container">
//         <h1>My {car.brand}</h1>
//         <h2>
//           It us a {car.color} {car.model} from {car.year}
//         </h2>
//         <button onClick={changeColor}>Blue</button>
//       </div>
//     </>
//   );
// };

// export default App;

// 3:
// import { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//   };

//   return (
//     <>
//       <div className="container">
//         <h1>Count: {count}</h1>
//         <button onClick={increaseCount}>Increase by 4</button>
//       </div>
//     </>
//   );
// };

// export default App;
