import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Duties = ({ duties }) => {
  console.log(duties);
  return (
    <div className='tab-info-duties'>
      {duties &&
        duties.length > 0 &&
        duties.map((duty) => (
          <React.Fragment key={duty}>
            <FaAngleDoubleRight className='tab-info-duties-icon' />
            <p>{duty}</p>
          </React.Fragment>
        ))}
    </div>
  );
};

export default Duties;
