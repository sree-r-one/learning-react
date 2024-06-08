import React from "react";
import { reactCoreComponents as reactCoreConcepts } from "../assets";
import "./introduction.css";

const Introduction: React.FC = () => {
  return (
    <>
      <header id="introduction-header">
        <img src={reactCoreConcepts} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </>
  );
};

export default Introduction;
