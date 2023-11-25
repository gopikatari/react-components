import React, { useEffect, useState } from 'react';
import useToggle from './customHooks/useToggle';

export const ControlledInputs = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [show, toggle] = useToggle(false);

  useEffect(() => {
    console.log(show);
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({ name: '', email: '' });
  };
  const handleChange = (event) => {
    event.preventDefault();
    setUser((user) => {
      return {
        ...user,
        [event.target.id]: event.target.value,
      };
    });
  };
  const { name, email } = user;
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>controlled inputs</h2>
      <div className='form-row'>
        <label htmlFor='isEligible' className='form-label'>
          IsElgible?
        </label>
        <input
          type='checkbox'
          id='isElgibile'
          name='isElgible'
          checked={show}
          // checked={isElgibile}
          // onChange={() => {
          //   setIsElgible(!isElgibile);
          // }}
          onChange={toggle}
          style={{ textAlign: 'left' }}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          className='form-input'
          onChange={handleChange}
          id='name'
          name='name'
          value={name}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='email'
          className='form-input'
          onChange={handleChange}
          value={email}
          name='email'
          id='email'
        />
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  );
};
