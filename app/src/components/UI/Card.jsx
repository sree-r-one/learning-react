import React from 'react';

const Card = ({ children }) => {
  return (
    <div
      className='
                p-6 block object-center
                mx-auto my-4
                max-w-3xl
                shadow-lg rounded-lg
                border-2 border-opacity-40 border-orange-400 
                '
    >
      {children}
    </div>
  );
};

export default Card;
