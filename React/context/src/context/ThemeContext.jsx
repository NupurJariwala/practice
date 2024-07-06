// eslint-disable-next-line no-unused-vars
import { createContext, children, useState } from "react";
export const ThemeContext = createContext();

//provider
// eslint-disable-next-line react/prop-types
export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
