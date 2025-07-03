import React from 'react'
import Dashboard from "../Dashboard/Dashboard";
import { FaUserGraduate, FaDollarSign } from "react-icons/fa";

const menu = [
  { label: "My Students", path: "/consultant/my-students", icon: FaUserGraduate },
  { label: "Earnings", path: "/consultant/earnings", icon: FaDollarSign },
];

const ConsultantDashboard = () => {
  return (
    <Dashboard title="Consultant Dashboard" menu={menu}>
      <p>Track your students, manage appointments, and monitor earnings.</p>
    </Dashboard>
  );
};

export default ConsultantDashboard;
