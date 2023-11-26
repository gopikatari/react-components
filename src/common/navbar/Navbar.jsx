import React, { useRef } from 'react';
import { FaBars } from 'react-icons/fa6';
import './Navbar.css';
import { links } from '../../data/navbar-data.jsx';
import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleToggle = () => {
    setShowLinks((showLinks) => {
      return !showLinks;
    });
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height + 20}px`
      : '0px',
  };
  return (
    <section className='Navbar'>
      <div className='navbar-center'>
        <header className='navbar-header'>
          <h2 className='navbar-brand'>Gopi Katari</h2>
          <button onClick={handleToggle} className='navbar-toggle'>
            <FaBars />
          </button>
        </header>
        <div className='links-container' style={linkStyles}>
          <ul className='nav-links' ref={linksRef}>
            {links.map((link) => (
              <li key={link.id} className='nav-item'>
                <a className='nav-link' href={link.url}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='navbar-user'>
          <div>Welcome</div>
          <div className='navbar-user-logo'>
            <FaSignInAlt />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
