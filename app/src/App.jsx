import { Header } from './components/Layout';
import React, { Fragment } from 'react';
import { Meals } from './components/Meals';

const App = () => {
  return (
    <div className=''>
      <Header />
      <main>
        <Meals></Meals>
      </main>
    </div>
  );
};

export default App;
