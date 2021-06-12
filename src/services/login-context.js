import React from "react";
import { tokenIsStored } from "../utils/helper";
export const LoginContext = React.createContext();
function loginReducer(state, action) {
  switch (action.type) {
    case "IS_LOGGED_IN": {
      return { ...state, isLoggedIn: true };
    }
    case "IS_LOGGED_OFF": {
      return { ...state, isLoggedIn: false };
    }
    case "IS_LOGGED_ERROR": {
      return { ...state, isLoggedIn: false, error: action.error };
    }
    case "SET_LOGIN": {
      return { ...state, isEntreprise: action.isEntreprise, userId: action.userId,  isLoggedIn: true };
    }
    default: {
      return state;
    }
  }
}
function LoginProvider({ children }) {
  const [state, dispatch] = React.useReducer(loginReducer, {
    isLoggedIn: tokenIsStored(),
    isEntreprise: null,
    userId: null
  });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
function useIsLoggedInContext() {
  return React.useContext(LoginContext);
}
export { LoginProvider, useIsLoggedInContext };
