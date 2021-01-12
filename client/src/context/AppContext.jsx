import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contextSearch, setContextSearch] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [results, setResults] = useState(null);
  const user = sessionStorage.getItem('user');

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get('/api/users/me', { withCredentials: true })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => {});
    }
  }, [currentUser, user]);

  return (
    <AppContext.Provider
      value={{
        contextSearch,
        setContextSearch,
        currentUser,
        setCurrentUser,
        results,
        setResults
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
