import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { isauth, Login, Logout } = useContext(AuthContext);
  console.log(theme);
  return (
    <>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          molestias alias expedita cupiditate culpa cum saepe dolor, quae esse
          repellendus. Minus ut voluptas perferendis eveniet?
        </p>
      </div>
      <h4>I am {isauth ? "Login" : "Logout"} </h4>
      <button onClick={toggleTheme}>changetheme</button>
      <button onClick={Login}>Login</button>
      <button onClick={Logout}>Logout</button>
    </>
  );
}

export default App;
