import React from 'react';

const MenuItem = ({ selectedMenu, categories, className, onMenuClick }) => {
  console.log(selectedMenu);
  return (
    <div className='menu-item__container'>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onMenuClick(cat)}
          className={`${className} btn ${
            cat !== 'all' && cat === selectedMenu ? 'active-menu' : ''
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default MenuItem;
