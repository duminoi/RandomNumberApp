import { createContext, useReducer } from "react";
import { initialValue, reducer } from "./reducer";
export const ProviderContext = createContext();
const ProviderApp = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
};
export default ProviderApp;
