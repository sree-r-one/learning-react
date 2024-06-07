import React, { useState, ChangeEvent } from "react";
import { sculptureList } from "../data/data";

const Gallery: React.FC = () => {
  // Declaring UseStates
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleNextClick = () => {
    if (index === sculptureList.length - 1) {
      return;
    }
    setIndex(index + 1);
  };

  const handlePrevClick = () => {
    if (index === 0) {
      return;
    }

    setIndex(index - 1);
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  let sculpture = sculptureList[index];

  return (
    <>
      <div className="space-x-4 p-4">
        <h1 className="p-4 text-xl">Example 1</h1>

        <>
          <button
            className="rounded-lg bg-orange-400 px-4 py-2"
            onClick={handlePrevClick}
          >
            Previous
          </button>
          <button
            className="rounded-lg bg-green-400 px-4 py-2"
            onClick={handleNextClick}
          >
            Next
          </button>
        </>
        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>

        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>

        <button
          className="m-2 rounded-lg bg-blue-400 px-4 py-2"
          onClick={handleMoreClick}
        >
          {showMore ? "Hide" : "Show"} details
        </button>

        {showMore && <p className="w-96">{sculpture.description}</p>}

        <img src={sculpture.url} alt={sculpture.alt} />
      </div>
    </>
  );
};

//  function Form() {
const Form: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
};

const UseStateHook: React.FC = () => {
  return (
    <>
      <Gallery />
      <Form />
    </>
  );
};

export default UseStateHook;
