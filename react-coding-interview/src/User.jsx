import React from "react";
import "./User.css";

const User = ({ data }) => {
  return (
    <div className="user-card">
      <h3>{data.name}</h3>
      <p>{data.email}</p>
      <p>{data.id > 5 && "id is more than 5"}</p>
    </div>
  );
};

export default User;
