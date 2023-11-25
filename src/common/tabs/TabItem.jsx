import React from 'react';

const TabItem = ({ selectedItem = '', tabs, handleTabClick }) => {
  return (
    <div className='tabs'>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`${selectedItem === tab && 'active'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabItem;
