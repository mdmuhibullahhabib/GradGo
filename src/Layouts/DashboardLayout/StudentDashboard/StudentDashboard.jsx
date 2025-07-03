import React from 'react'
import { FaBook, FaCalendarAlt } from "react-icons/fa";
import Dashboard from "../Dashboard/Dashboard";

const menu = [
  { label: "My Bookings", path: "/student/my-bookings", icon: FaBook },
  { label: "Consultants", path: "/consultants", icon: FaCalendarAlt },
];

const StudentDashboard = () => {
    
  return (
    <Dashboard title="Student Dashboard" menu={menu}>
      <p>Welcome to your dashboard! Here you can manage your bookings, explore consultants, and view updates.</p>
    </Dashboard>
  );
};

export default StudentDashboard;
