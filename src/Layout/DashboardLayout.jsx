import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Header />
      <div className="dash-sublayout">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
