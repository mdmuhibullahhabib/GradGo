import React from "react";
import {
  FaMoneyBillWave,
  FaUserGraduate,
  FaStar,
  FaClipboardList,
} from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const ConsultantDashboard = () => {
  const stats = {
    earnings: 48000,
    students: 12,
    gigs: 5,
    reviews: 24,
  };

  const earningsGrowth = [
    { month: "Jan", earnings: 5000 },
    { month: "Feb", earnings: 6500 },
    { month: "Mar", earnings: 7800 },
    { month: "Apr", earnings: 7000 },
    { month: "May", earnings: 9200 },
    { month: "Jun", earnings: 9500 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Welcome to Your Consultant Dashboard</h2>

      {/* Stat Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded p-4 flex items-center gap-4">
          <FaMoneyBillWave className="text-3xl text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Total Earnings</p>
            <h3 className="text-xl font-bold">৳ {stats.earnings.toLocaleString()}</h3>
          </div>
        </div>
        <div className="bg-white shadow rounded p-4 flex items-center gap-4">
          <FaUserGraduate className="text-3xl text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">My Students</p>
            <h3 className="text-xl font-bold">{stats.students}</h3>
          </div>
        </div>
        <div className="bg-white shadow rounded p-4 flex items-center gap-4">
          <FaClipboardList className="text-3xl text-purple-600" />
          <div>
            <p className="text-sm text-gray-500">My Gigs</p>
            <h3 className="text-xl font-bold">{stats.gigs}</h3>
          </div>
        </div>
        <div className="bg-white shadow rounded p-4 flex items-center gap-4">
          <FaStar className="text-3xl text-yellow-500" />
          <div>
            <p className="text-sm text-gray-500">Reviews</p>
            <h3 className="text-xl font-bold">{stats.reviews}</h3>
          </div>
        </div>
      </div>

      {/* Earnings Growth Chart */}
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold mb-4">Monthly Earnings Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={earningsGrowth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="earnings" stroke="#34d399" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ConsultantDashboard;
