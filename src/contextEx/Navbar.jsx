import React, { createContext, useState } from 'react';
import { NavLinks } from './NavLinks';
import { contextObj } from '../../context';
// export const userContext = createContext(null);

export const Navbar1 = () => {
  const [user, setUser] = useState('');
  contextObj.userContext = {};
  contextObj.userContext.user = user;
  contextObj.userContext.setUser = setUser;
  contextObj.userContext.logout = logout;
  contextObj.userContext.login = login;
  // contextObj.userContext.user;

  console.log(contextObj);
  function login() {
    setUser('Gopi');
  }
  function logout() {
    setUser('');
  }

  return (
    <nav className='navbar'>
      <h4>Context API</h4>
      <NavLinks />
    </nav>
  );
};

export default Navbar1;
