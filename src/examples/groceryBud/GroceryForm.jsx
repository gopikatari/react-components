import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Alert from '../../common/alert';
import isEmpty from 'lodash/isEmpty';

const GroceryForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [isError, setIsError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(name)) {
      setIsError(true);
      return;
    }
    const item = {
      name,
      selected: true,
      id: nanoid(),
    };
    addItem(item);
    setName('');
  };

  return (
    <div className='grocery-form-container'>
      {isError && <Alert content='please enter an item' autoClose />}
      <form className='grocery-form' onSubmit={handleSubmit}>
        <input
          placeholder='Enter the item name'
          type='text'
          className='grocery-form-control'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          className='grocery-submit-btn'
          type='submit'
          value='submit'
        ></input>
      </form>
    </div>
  );
};

export default GroceryForm;
