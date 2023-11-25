import React, { useState } from 'react';
import './menu.css';
import TextTitle from '../text-title/TextTitle';
import menuData from '../../data/menu-data';
import MenuItem from './menuItem';
import menu from '../../data/menu-data';
import { MenuCard } from './MenuCard';

const MenuComp = () => {
  const className = {
    backGroundColor: 'red',
  };

  const [menus, setMenus] = useState(menuData);
  const [selectedMenu, setSelectedMenu] = useState('');
  const categories = ['all', ...new Set(menuData.map((cat) => cat.category))];
  const handleMenuClick = (item) => {
    setSelectedMenu(item);
    setMenus(
      item !== 'all'
        ? menuData.filter((menu) => menu.category === item)
        : menuData
    );
  };
  return (
    <div className='container margin-top-5'>
      <section className='menu'>
        <TextTitle text='our menu' className='text-center h-4' underline />
        <MenuItem
          selectedMenu={selectedMenu}
          className='menu-item'
          categories={categories}
          onMenuClick={handleMenuClick}
        />
        <div className='menu-cards'>
          {menus.map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuComp;
