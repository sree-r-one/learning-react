import React from 'react';
import { FcFeedIn } from 'react-icons/fc';

const HeaderCartButton = ({ children }) => {
  return (
    <div className='flex  rounded p-2 items-center px-6'>
      <span className='rounded-lg p-1 '>
        <FcFeedIn size={38} />
      </span>
      <span className='bg-red-500 text-white text-xl font-medium px-4 py-1 ml-2 rounded-lg'>
        0
      </span>
    </div>
  );
};

export default HeaderCartButton;
