import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contextSearch, setContextSearch] = useState('');

  return (
    <AppContext.Provider
      value={{
        contextSearch,
        setContextSearch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
