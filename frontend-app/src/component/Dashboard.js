import React, { useState } from "react";
import UserList from "./UserList";
import "./Dashboard.css";

const Dashboard = () => {
  const [showUserList, setShowUserList] = useState(true);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Dashboard</h1>
      <div className="dashboard-options">
        <UserList />
      </div>
    </div>
  );
};

export default Dashboard;
