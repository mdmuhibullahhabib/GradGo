import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaUserTie } from "react-icons/fa";

const mockCandidates = [
  {
    id: 1,
    name: "Riyad Hasan",
    email: "riyad@example.com",
    phone: "01712345678",
    country: "Canada",
    status: "Pending",
  },
  {
    id: 2,
    name: "Mahira Rahman",
    email: "mahira@example.com",
    phone: "01898765432",
    country: "UK",
    status: "Pending",
  },
];

const ManageCandidates = () => {
  const [candidates, setCandidates] = useState(mockCandidates);

  const handleApprove = (id) => {
    const updated = candidates.map((c) =>
      c.id === id ? { ...c, status: "Approved" } : c
    );
    setCandidates(updated);
  };

  const handleReject = (id) => {
    const updated = candidates.map((c) =>
      c.id === id ? { ...c, status: "Rejected" } : c
    );
    setCandidates(updated);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Manage Consultant Candidates</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c, idx) => (
              <tr key={c.id}>
                <td>{idx + 1}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.country}</td>
                <td>
                  <span
                    className={`badge ${
                      c.status === "Approved"
                        ? "badge-success"
                        : c.status === "Rejected"
                        ? "badge-error"
                        : "badge-warning"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="flex gap-2 justify-center">
                  <button
                    className="btn btn-sm btn-success"
                    disabled={c.status !== "Pending"}
                    onClick={() => handleApprove(c.id)}
                  >
                    <FaCheckCircle className="mr-1" /> Approve
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    disabled={c.status !== "Pending"}
                    onClick={() => handleReject(c.id)}
                  >
                    <FaTimesCircle className="mr-1" /> Reject
                  </button>
                </td>
              </tr>
            ))}
            {candidates.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center text-gray-400 py-6">
                  No candidate applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCandidates;
