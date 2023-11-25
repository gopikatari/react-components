import React, { useRef, useState } from 'react';

export const UseRefEx = () => {
  const nameRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            ref={nameRef}
            className='form-input'
            type='text'
            id='name'
            name='name'
          />
          <button className='btn btn-block' type='submit'>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
