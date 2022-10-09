import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import { HeaderCartButton } from '.';
import { MealsSummary } from '../Meals';

const Header = ({ children }) => {
  return (
    <Fragment>
      <header className='flex'>
        <nav
          className='p-2 mb-2
                    items-center
                    w-full relative 
                    shadow-md 
                    flex justify-between '
        >
          <h2 className='text-gray-800 font-medium text-xl'>React Food</h2>
          <HeaderCartButton></HeaderCartButton>
        </nav>
      </header>
      <div className='bg-red-200 relative w-full'>
        <img
          className='object-cover w-full h-96 brightness-100  duration-300 ease-in-out'
          src={mealsImage}
        />
        <MealsSummary></MealsSummary>
      </div>
    </Fragment>
  );
};

export default Header;
