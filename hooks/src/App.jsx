import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [name, setName] = useLocalStorage("username", "");
  const [id, setId] = useLocalStorage("userid", "");

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

        <input
          type="text"
          placeholder="Enter you id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <h2>Your Id: {id}!</h2>
      </div>
    </>
  );
};

export default App;
