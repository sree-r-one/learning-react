import React from "react";
import { useAuth } from "./AuthContext";

const AuthStatus = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <p>User is {isAuthenticated ? "logged in" : "logged out"}</p>
      <button onClick={login}>Login</button>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthStatus;
