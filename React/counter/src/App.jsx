import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>counter</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}

export default App;
