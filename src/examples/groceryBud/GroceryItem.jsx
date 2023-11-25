import React from 'react';
import { FaTrash } from 'react-icons/fa6';

const GroceryItem = ({ item, handleChanged, handleDelete }) => {
  const { id, name, selected } = item;
  return (
    <div className='grocery-item'>
      <input
        className='grocery-item-check'
        type='checkbox'
        checked={selected}
        onChange={() => handleChanged(id)}
      />
      <p
        style={{
          textDecoration: selected && 'line-through',
        }}
      >
        {name}
      </p>
      <button onClick={() => handleDelete(id)} className='grocery-delete'>
        <FaTrash />
      </button>
    </div>
  );
};

export default GroceryItem;
