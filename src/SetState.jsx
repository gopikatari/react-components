import React, { useState } from 'react';

export const SetState = () => {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setTimeout(() => {
      setCount((c) => c + 1);
    }, 3000);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleChange} className='btn'>
        Change
      </button>
    </div>
  );
};
