import React from 'react';
import Duties from './Duties';

const TabContent = ({ tabInfo }) => {
  return (
    <div className='tabs-info'>
      <h2>{tabInfo.title}</h2>
      <span className='tab-info-company'>{tabInfo.company}</span>
      <p className='tab-info-date'>{tabInfo.dates}</p>
      <Duties duties={tabInfo.duties} />
    </div>
  );
};

export default TabContent;
