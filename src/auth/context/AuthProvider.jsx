import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initState = { logged: false }

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initState)

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
