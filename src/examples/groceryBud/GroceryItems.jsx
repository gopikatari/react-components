import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryItems = ({ items, handleSelectedChange, handleDelete }) => {
  console.log(items);
  return (
    <div className='grocery-items-container'>
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <GroceryItem
            handleChanged={handleSelectedChange}
            key={item.id}
            item={item}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export default GroceryItems;
