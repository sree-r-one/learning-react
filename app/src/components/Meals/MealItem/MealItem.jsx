import React from 'react';

const MealItem = ({ meal }) => {
  return (
    <div className='my-2 border-b-2 border-orange-300 border-opacity-40'>
      <h3
        className='
                    mb-1
                    font-bold 
                    text-orange-700 
                    underline decoration-orange-400 underline-offset-2
                    decoration-2
                    
                    '
      >
        {meal.name}
      </h3>
      <p className='font-thin text-sm italic'>{meal.description}</p>
      <p className='font-medium text-orange-700 mb-2'>{`$${meal.price}`}</p>
    </div>
  );
};

export default MealItem;
