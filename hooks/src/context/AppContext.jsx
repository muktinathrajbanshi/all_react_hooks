import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+977 4234323324";

  return (
    <AppContext.Provider value={phone}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
