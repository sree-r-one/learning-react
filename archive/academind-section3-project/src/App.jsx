import React, { useState } from "react";
import { Header, UserInput, ResultsTable } from "./components";

const App = () => {
  const initialValues = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };

  // State to manage the values
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: +value });
  };

  return (
    <div className="w-full">
      <div className="container m-2 mx-auto rounded-md bg-blue-300 px-3 pb-4">
        <Header />
        <UserInput
          values={values}
          onChange={handleChange}
          setValues={setValues}
          initialValues={initialValues}
        />

        <div className="">
          {values === initialValues ? (
            "Please enter values to begin"
          ) : (
            <ResultsTable userInput={values} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
