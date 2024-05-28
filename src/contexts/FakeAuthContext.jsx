import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();

function authProvider({ children }) {
    function login(user, password) {}
    function logout() {}
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("authContext was used outside the authProvider");
  return context;
}
