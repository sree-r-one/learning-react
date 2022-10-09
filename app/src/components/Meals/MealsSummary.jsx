import React from 'react';

const MealsSummary = () => {
  return (
    <section
      className='
                absolute
                p-10 rounded-lg
                bg-gray-700 bg-opacity-50 text-white
                left-1/2 top-1/2
                -translate-x-1/2
                -translate-y-1/2
                grid  justify-items-center
                  text-center

                '
    >
      <h2
        className='
                underline underline-offset-8 decoration-orange-400
                text-orange-300
                  text-4xl font-sans font-bold mb-4
                  '
      >
        Delicious Food, Delivered to you
      </h2>
      <p className='text-orange-100 text-xl mb-2'>
        Choose your favourite meal from the selection available
      </p>
      <p className='italic'>All our meals are freshly cooked!</p>
    </section>
  );
};

export default MealsSummary;
