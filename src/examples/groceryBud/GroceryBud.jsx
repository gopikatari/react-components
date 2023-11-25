import React, { useState } from 'react';
import GroceryForm from './GroceryForm';
import GroceryItems from './GroceryItems';
import './GroceryBud.css';

const GroceryBud = () => {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([...items, item]);
  };
  const handleChanged = (id) => {
    console.log(id);
    const newItems = items.map((item) => {
      if (item.id === id) {
        item.selected = !item.selected;
      }
      return item;
    });

    setItems(newItems);
  };
  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  return (
    <div className='grocery-container'>
      <GroceryForm addItem={addItem} />
      <GroceryItems
        items={items}
        handleSelectedChange={handleChanged}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default GroceryBud;
