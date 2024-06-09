import React, { ReactNode } from "react";
import "./Experts.css";

interface CardProps {
  name: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ name, children }) => {
  return (
    <div id="card">
      <h1>{name}</h1>
      {children}
    </div>
  );
};

const Experts: React.FC = () => {
  return (
    <>
      <h1>Available Experts</h1>
      <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card>
    </>
  );
};

export default Experts;
