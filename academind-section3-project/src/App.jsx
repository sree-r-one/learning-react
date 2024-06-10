import React from "react";
import { Header, UserInput, ResultsTable } from "./components";

const App = () => {
  return (
    <div className="w-full">
      <div className="container m-2 mx-auto rounded-md bg-blue-300 px-3 pb-4">
        <Header />
        <UserInput />
        <ResultsTable />
      </div>
    </div>
  );
};

export default App;
