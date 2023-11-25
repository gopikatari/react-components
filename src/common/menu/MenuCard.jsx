import React from 'react';

export const MenuCard = ({ title, price, desc, img }) => {
  return (
    <div className='menu-card'>
      <img className='menu-img' src={img} alt={title}></img>
      <header className='card-header'>
        <h4 className='card-heading'>{title}</h4>
        <span className='card-price'>Rs.{price}</span>
      </header>
      <p className='card-info'>{desc}</p>
    </div>
  );
};
