import React from "react";

export const LoginContext = React.createContext();
function loginReducer(state, action) {
  switch (action.type) {
    case "IS_LOGGED_IN": {
      return { isLoggedIn: true };
    }
    case "IS_LOGGED_OFF": {
      return { isLoggedIn: false };
    }
    case "IS_LOGGED_ERROR": {
      return { isLoggedIn: false, error: action.error };
    }
    default: {
      return { isLoggedIn: false };
    }
  }
}
function LoginProvider({ children }) {
  const [state, dispatch] = React.useReducer(loginReducer, {
    isLoggedIn: false,
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
