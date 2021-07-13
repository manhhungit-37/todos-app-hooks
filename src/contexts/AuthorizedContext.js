import { createContext, useReducer } from "react";
import { authorizedReducer, initialState } from "../reducers/AuthorizeReducer";

export const AuthorizedContext = createContext();

const AuthorizedContextProvider = ({ children }) => {
  const [authorized, dispatchAuthor] = useReducer(authorizedReducer, initialState);

  const AuthorizedContextData = {
    authorized,
    dispatchAuthor
  }

  return (
    <AuthorizedContext.Provider value={AuthorizedContextData}>
      {children}
    </AuthorizedContext.Provider>
  )
}

export default AuthorizedContextProvider;
