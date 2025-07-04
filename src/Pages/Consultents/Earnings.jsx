import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const mockEarnings = [
  {
    id: 1,
    student: "Tanjina Akter",
    date: "2025-06-10",
    amount: 2000,
    status: "Paid",
  },
  {
    id: 2,
    student: "Tanvir Rahman",
    date: "2025-06-16",
    amount: 1500,
    status: "Paid",
  },
  {
    id: 3,
    student: "Rifat Alam",
    date: "2025-06-20",
    amount: 1800,
    status: "Pending",
  },
];

const Earnings = () => {
  const totalEarnings = mockEarnings
    .filter((e) => e.status === "Paid")
    .reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">My Earnings</h2>

      {/* Summary Card */}
      <div className="bg-base-200 p-4 rounded mb-6 flex justify-between items-center">
        <div>
          <p className="text-lg">Total Paid Earnings</p>
          <h3 className="text-3xl font-bold text-primary">৳ {totalEarnings}</h3>
        </div>
        <FaCheckCircle className="text-4xl text-green-500" />
      </div>

      {/* Earnings Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Student</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockEarnings.map((earning, idx) => (
              <tr key={earning.id}>
                <td>{idx + 1}</td>
                <td>{earning.student}</td>
                <td>{earning.date}</td>
                <td>৳ {earning.amount}</td>
                <td>
                  <span
                    className={`badge ${
                      earning.status === "Paid" ? "badge-success" : "badge-warning"
                    }`}
                  >
                    {earning.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Earnings;
