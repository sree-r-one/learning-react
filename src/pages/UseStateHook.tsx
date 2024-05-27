import React, { useState } from "react";
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
      <button onClick={handlePrevClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>

      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>

      {showMore && <p>{sculpture.description}</p>}

      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
};

const UseStateHook: React.FC = () => {
  return (
    <>
      <Gallery />
    </>
  );
};

export default UseStateHook;
