import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaUserTie } from "react-icons/fa";
import useCandidates from "../../hooks/useCandidates";

const initialCandidates = [
  {
    id: 1,
    name: "Riyad Hasan",
    email: "riyad@example.com",
    phone: "01712345678",
    country: "Canada",
    university: "University of Toronto",
    experience: 3,
    linkedIn: "https://linkedin.com/in/riyad-hasan",
    offerLetterUrl: "https://yourserver.com/uploads/riyad_offer.pdf",
    bio: "I’ve helped 100+ Bangladeshi students successfully apply to Canadian universities.",
    status: "Pending",
  },
  {
    id: 2,
    name: "Mahira Rahman",
    email: "mahira@example.com",
    phone: "01898765432",
    country: "UK",
    university: "University of Edinburgh",
    experience: 2,
    linkedIn: "https://linkedin.com/in/mahira-rahman",
    offerLetterUrl: "https://yourserver.com/uploads/mahira_offer.jpg",
    bio: "Helping students with scholarship-based admissions to UK top-ranked universities.",
    status: "Pending",
  },
  {
    id: 3,
    name: "Sakib Chowdhury",
    email: "sakibc@example.com",
    phone: "01678904567",
    country: "Australia",
    university: "University of Melbourne",
    experience: 4,
    linkedIn: "https://linkedin.com/in/sakib-chowdhury",
    offerLetterUrl: "https://yourserver.com/uploads/sakib_offer.pdf",
    bio: "Expert in Australian immigration and educational consulting with 4+ years experience.",
    status: "Pending",
  }
];

const ManageCandidates = () => {
  const [candidates, refetch] = useCandidates();
  
  const [candidates, setCandidates] = useState(initialCandidates);

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
              <th>Basic Info</th>
              <th>University</th>
              <th>Experience</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c, idx) => (
              <tr key={c.id}>
                <td>{idx + 1}</td>
                <td>
                  <div>
                    <p className="font-semibold">{c.name}</p>
                    <p className="text-sm text-gray-500">{c.email}</p>
                    <p className="text-sm text-gray-500">{c.phone}</p>
                    <p className="text-sm text-gray-500">🌍 {c.country}</p>
                  </div>
                </td>
                <td>
                  <p>{c.university}</p>
                  <a
                    href={c.offerLetterUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline text-sm"
                  >
                    View Offer Letter
                  </a>
                </td>
                <td>
                  <p>{c.experience} yrs</p>
                  <a
                    href={c.linkedIn}
                    className="text-blue-600 underline text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </td>
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
                <td className="flex gap-2 justify-center flex-wrap">
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
                <td colSpan={6} className="text-center py-6 text-gray-400">
                  No candidates found.
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
