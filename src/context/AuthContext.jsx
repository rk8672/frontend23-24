// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
   const [apiBaseUrl, setApiBaseUrl] = useState('https://mernbackend23-24.onrender.com'); 
  //const [apiBaseUrl, setApiBaseUrl] = useState('http://localhost:10000');
  useEffect(() => {
    // Check for an existing token in local storage or cookies
    const token = localStorage.getItem('userToken');
    if (token) {
      // Set the user as authenticated if a token exists
      setUser({ token });
    }
  }, []);

  const login = (userCredentials) => {
    // Implement your login logic here and set the user state.
    // After successful login, store the user's token.
    localStorage.setItem('userToken', userCredentials.token);
    setUser(userCredentials);
  };

  const logout = () => {
    // Implement your logout logic here and clear the user state and token.
    localStorage.removeItem('userToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, apiBaseUrl, setApiBaseUrl }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => React.useContext(AuthContext);
