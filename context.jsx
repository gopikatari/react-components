import { createContext, useContext } from 'react';

export const GlobalContext = createContext();
export const contextObj = {};

const AppContext = ({ children }) => {
  return (
    <GlobalContext.Provider value={contextObj}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
