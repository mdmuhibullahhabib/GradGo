import React from "react";
import {
  FaUserCog,
  FaMoneyBill,
  FaUsers,
  FaTasks,
  FaChartBar,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const AdminDashboard = () => {
  const stats = {
    earnings: 125000,
    users: 280,
    candidates: 18,
    consultants: 34,
  };

  const growthData = [
    { month: "Jan", earnings: 8000 },
    { month: "Feb", earnings: 11000 },
    { month: "Mar", earnings: 15000 },
    { month: "Apr", earnings: 12500 },
    { month: "May", earnings: 16000 },
    { month: "Jun", earnings: 19000 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Welcome to Admin Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded shadow p-4 flex items-center gap-4">
          <FaMoneyBill className="text-3xl text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Total Earnings</p>
            <h3 className="text-xl font-bold">৳ {stats.earnings.toLocaleString()}</h3>
          </div>
        </div>
        <div className="bg-white rounded shadow p-4 flex items-center gap-4">
          <FaUsers className="text-3xl text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Total Users</p>
            <h3 className="text-xl font-bold">{stats.users}</h3>
          </div>
        </div>
        <div className="bg-white rounded shadow p-4 flex items-center gap-4">
          <FaTasks className="text-3xl text-orange-600" />
          <div>
            <p className="text-sm text-gray-500">Candidates</p>
            <h3 className="text-xl font-bold">{stats.candidates}</h3>
          </div>
        </div>
        <div className="bg-white rounded shadow p-4 flex items-center gap-4">
          <FaUserTie className="text-3xl text-purple-600" />
          <div>
            <p className="text-sm text-gray-500">Consultants</p>
            <h3 className="text-xl font-bold">{stats.consultants}</h3>
          </div>
        </div>
      </div>

      {/* Growth Chart */}
      <div className="bg-white rounded shadow p-4 mb-8">
        <h3 className="text-lg font-semibold mb-4">Revenue Growth (৳)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="earnings" stroke="#4ade80" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Access Links */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/dashboard/manage-users"
          className="btn btn-outline btn-accent w-full flex justify-start gap-3 text-lg"
        >
          <FaUsers /> Manage Users
        </Link>
        <Link
          to="/dashboard/manage-candidates"
          className="btn btn-outline btn-primary w-full flex justify-start gap-3 text-lg"
        >
          <FaTasks /> Manage Candidates
        </Link>
        <Link
          to="/dashboard/revenue"
          className="btn btn-outline btn-success w-full flex justify-start gap-3 text-lg"
        >
          <FaChartBar /> Revenue Overview
        </Link>
        <Link
          to="/dashboard/admin-profile"
          className="btn btn-outline btn-warning w-full flex justify-start gap-3 text-lg"
        >
          <FaUserCog /> Admin Profile
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
