// App.jsx
import React from "react";
import { AuthProvider } from "./AuthContext";
import AuthStatus from "./AuthStatus";
import Users from "./Users";
import UserProfile from "./UserProfile";
const App = () => (
  <AuthProvider>
    <AuthStatus />
    <UserProfile />
    <Users />
  </AuthProvider>
);

export default App;
