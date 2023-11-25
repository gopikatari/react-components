import React from 'react';
import { UserInfo } from './UserInfo';

export const NavLinks = () => {
  return (
    <div className='navlinks'>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
      </ul>
      <UserInfo />
    </div>
  );
};
