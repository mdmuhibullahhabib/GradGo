import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";

const mockTransactions = [
  {
    id: "TXN001",
    student: "Anik Hossain",
    consultant: "Raihan Ahmed",
    amount: 5000,
    status: "Success",
    date: "2025-07-01",
  },
  {
    id: "TXN002",
    student: "Nusrat Jahan",
    consultant: "Farhana Sultana",
    amount: 6500,
    status: "Pending",
    date: "2025-07-03",
  },
  {
    id: "TXN003",
    student: "Fahim Reza",
    consultant: "Kamal Uddin",
    amount: 7200,
    status: "Failed",
    date: "2025-06-28",
  },
];

const AllTransactions = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaMoneyCheckAlt /> All Transactions
      </h2>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction ID</th>
              <th>Student</th>
              <th>Consultant</th>
              <th>Amount (৳)</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {mockTransactions.map((txn, i) => (
              <tr key={txn.id}>
                <td>{i + 1}</td>
                <td className="font-medium">{txn.id}</td>
                <td>{txn.student}</td>
                <td>{txn.consultant}</td>
                <td>৳ {txn.amount.toLocaleString()}</td>
                <td>
                  <span
                    className={`badge ${
                      txn.status === "Success"
                        ? "badge-success"
                        : txn.status === "Pending"
                        ? "badge-warning"
                        : "badge-error"
                    }`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td>{txn.date}</td>
              </tr>
            ))}

            {mockTransactions.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-400">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTransactions;
