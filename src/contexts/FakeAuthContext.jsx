import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "login":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("unkwon action");
  }
}

function authProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function login(user, password) {}
  function logout() {}
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("authContext was used outside the authProvider");
  return context;
}
