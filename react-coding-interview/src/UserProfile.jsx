import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const UserProfile = () => {
  const { isAuthenticated } = useAuth();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      // Fetch user data when authenticated
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setUserData(data))
        .catch((error) => setError(error.message));
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <p>Please log in to view your profile.</p>;
  }

  if (error) {
    return <p>Error loading user data: {error}</p>;
  }

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h2>Welcome, {userData.name}!</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;
