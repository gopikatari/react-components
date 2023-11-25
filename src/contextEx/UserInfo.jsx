import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
// import { myContext } from '../customHooks/useUserContext';

export const UserInfo = () => {
  const context = useContext(GlobalContext);
  const { user, login, logout } = context.userContext;

  return (
    <div className='userContainer'>
      {user ? <p>Hello there, {user}</p> : <p>please login</p>}

      {user ? (
        <button onClick={logout} className='btn'>
          logout
        </button>
      ) : (
        <button onClick={login} className='btn'>
          login
        </button>
      )}
    </div>
  );
};
