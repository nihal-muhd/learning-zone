import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const hanldleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };
  return (
    <div>
      {/* <div>
        Welcome, <h1>{user.name}</h1>
      </div>
      <button onClick={hanldleLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
