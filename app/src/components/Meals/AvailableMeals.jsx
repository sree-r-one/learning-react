import React from 'react';
import { Card } from '../UI';
import { MealItem } from '.';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest Fish and Veggies',
    price: 22.69,
  },
  {
    id: 'm2',
    name: 'Burger',
    description: 'You like Beef and this is beef!!',
    price: 15.69,
  },
  {
    id: 'm3',
    name: 'Veg Burger',
    description: 'Did you say veggies?!',
    price: 10.69,
  },
  {
    id: 'm4',
    name: 'Barbecue Burger',
    description: 'Just how you like it, Burned!',
    price: 12.99,
  },
];

const AvailableMeals = () => {
  return (
    <section>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal, index) => (
            // <li>{meal.name}</li>
            <MealItem key={index} meal={meal}></MealItem>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
