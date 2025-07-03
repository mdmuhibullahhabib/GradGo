import React from 'react'
import Dashboard from "../Dashboard/Dashboard";
import { FaUsers, FaShieldAlt } from "react-icons/fa";

const menu = [
  { label: "All Users", path: "/admin/users", icon: FaUsers },
  { label: "Consultant Requests", path: "/admin/consultant-requests", icon: FaShieldAlt },
];

const AdminDashboard = () => {
  return (
    <Dashboard title="Admin Panel" menu={menu}>
      <p>Manage users, verify consultants, and review system activity.</p>
    </Dashboard>
  );
};

export default AdminDashboard;
