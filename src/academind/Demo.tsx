import React, { useState } from "react";
import "./demo.css";

const Demo: React.FC = () => {
  const [activeContentIndex, setActiveContentIndex] = useState<number>(0);

  const content: string[][] = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem",
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering",
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)",
    ],
  ];
  return (
    <>
      {/* Header */}
      <header>
        <img src="vite.svg" alt="" />
        <div>
          <h1>React.js</h1>
          <p>Using React library for rendering UI </p>
        </div>
      </header>

      {/* Tabs */}
      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
        </menu>
      </div>

      {/* Content */}
      <div id="tab-content">
        {content[activeContentIndex].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </>
  );
};

export default Demo;
