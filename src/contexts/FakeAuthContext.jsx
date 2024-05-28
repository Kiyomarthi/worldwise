import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();
const initialState = {
    user : null,
    isAuthenticated: false;
}

function reducer(state, action){
    switch(action.type)
}

function authProvider({ children }) {
    const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialState)
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
