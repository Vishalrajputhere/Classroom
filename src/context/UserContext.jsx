
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext(); // Correctly spelled UserContext

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means no user logged in

  const login = (role) => {
    setUser({ role }); // set user role on login
  };

  const logout = () => {
    setUser(null); // clear user on logout
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired, 
  };

export const useUser = () => useContext(UserContext); 
