import React, { useState } from "react";
import { FaCheckCircle, FaTrash, FaClock } from "react-icons/fa";
import useGigs from "../../hooks/useGigs";

const mockGigs = [
  {
    id: 1,
    title: "UK Student Visa Consultancy",
    consultant: "Farhana Sultana",
    price: 4500,
    status: "Pending",
  },
  {
    id: 2,
    title: "Canada Study Pathway Guidance",
    consultant: "Imran Hossain",
    price: 6000,
    status: "Approved",
  },
  {
    id: 3,
    title: "Australia Visa File Review",
    consultant: "Shamim Ahmed",
    price: 3800,
    status: "Rejected",
  },
];

const ManageGigs = () => {
  // const [gigs, setGigs] = useState(mockGigs);
      const [gigs] =useGigs();

  const handleApprove = (id) => {
    const updated = gigs.map((gig) =>
      gig.id === id ? { ...gig, status: "Approved" } : gig
    );
    setGigs(updated);
  };

  const handleReject = (id) => {
    const updated = gigs.map((gig) =>
      gig.id === id ? { ...gig, status: "Rejected" } : gig
    );
    setGigs(updated);
  };

  const handleDelete = (id) => {
    const updated = gigs.filter((gig) => gig.id !== id);
    setGigs(updated);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Manage Consultant Gigs</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Consultant</th>
              <th>Price (৳)</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {gigs.map((gig, index) => (
              <tr key={gig.id}>
                <td>{index + 1}</td>
                <td>{gig.title}</td>
                <td>{gig.consultant}</td>
                <td>৳ {gig.price}</td>
                <td>
                  <span
                    className={`badge text-white ${
                      gig.status === "Approved"
                        ? "bg-green-500"
                        : gig.status === "Rejected"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {gig.status}
                  </span>
                </td>
                <td className="flex gap-2 justify-center">
                  <button
                    className="btn btn-sm btn-success"
                    disabled={gig.status === "Approved"}
                    onClick={() => handleApprove(gig.id)}
                  >
                    <FaCheckCircle className="mr-1" /> Approve
                  </button>
                  <button
                    className="btn btn-sm btn-warning"
                    disabled={gig.status === "Rejected"}
                    onClick={() => handleReject(gig.id)}
                  >
                    <FaClock className="mr-1" /> Reject
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(gig.id)}
                  >
                    <FaTrash className="mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {gigs.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-400">
                  No gigs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageGigs;
