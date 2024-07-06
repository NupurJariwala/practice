import { useState } from "react";
import "./App.css";

function App() {
  let initialize = {
    name: "",
    check: "",
  };
  const [data, setData] = useState(initialize);
  const { name, check } = data;

  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <h1>name:{name}</h1>
      <h2>check:{check}</h2>
      <form action="" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => handlechange(e)}
          placeholder="enter name"
        />
        <input
          type="radio"
          value="yes"
          name="check"
          checked={check === "yes"}
          onChange={(e) => handlechange(e)}
        />
        yes
        <input
          type="radio"
          value="no"
          name="check"
          checked={check === "no"}
          onChange={(e) => handlechange(e)}
        />
        No
        <input type="submit" />
      </form>
      </>
  );
}

export default App;
