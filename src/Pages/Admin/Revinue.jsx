import React from "react";
import { FaMoneyBillWave, FaUserTie, FaUserGraduate, FaCalendarAlt } from "react-icons/fa";

const Revenue = () => {
  const stats = {
    totalEarnings: 125000,
    totalConsultants: 32,
    totalStudents: 248,
    totalBookings: 512,
  };

  const monthlyRevenue = [
    { month: "January", amount: 9000 },
    { month: "February", amount: 11000 },
    { month: "March", amount: 15000 },
    { month: "April", amount: 12500 },
    { month: "May", amount: 13500 },
    { month: "June", amount: 14500 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Revenue Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow p-4 rounded flex items-center gap-4">
          <FaMoneyBillWave className="text-3xl text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Total Earnings</p>
            <h3 className="text-xl font-semibold">৳ {stats.totalEarnings.toLocaleString()}</h3>
          </div>
        </div>

        <div className="bg-white shadow p-4 rounded flex items-center gap-4">
          <FaUserTie className="text-3xl text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Consultants</p>
            <h3 className="text-xl font-semibold">{stats.totalConsultants}</h3>
          </div>
        </div>

        <div className="bg-white shadow p-4 rounded flex items-center gap-4">
          <FaUserGraduate className="text-3xl text-purple-600" />
          <div>
            <p className="text-sm text-gray-500">Students</p>
            <h3 className="text-xl font-semibold">{stats.totalStudents}</h3>
          </div>
        </div>

        <div className="bg-white shadow p-4 rounded flex items-center gap-4">
          <FaCalendarAlt className="text-3xl text-orange-600" />
          <div>
            <p className="text-sm text-gray-500">Total Bookings</p>
            <h3 className="text-xl font-semibold">{stats.totalBookings}</h3>
          </div>
        </div>
      </div>

      {/* Monthly Revenue Table */}
      <div className="bg-white rounded shadow overflow-x-auto p-4">
        <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Month</th>
              <th>Revenue (৳)</th>
            </tr>
          </thead>
          <tbody>
            {monthlyRevenue.map((rev, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{rev.month}</td>
                <td>৳ {rev.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Revenue;
