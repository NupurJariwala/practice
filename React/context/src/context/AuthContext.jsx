// eslint-disable-next-line no-unused-vars
import { children, createContext, useState } from "react";

export const AuthContext = createContext();

//provider

// eslint-disable-next-line react/prop-types
export function AuthContextProvider({ children }) {
  const [isauth, setAuth] = useState(false);
  const Login = () => {
    setAuth(true);
  };
  const Logout = () => {
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isauth, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}
