import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import useCandidates from "../../hooks/useCandidates";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ManageCandidates = () => {
  const axiosSecure = useAxiosSecure();
  const [candidates, refetch] = useCandidates();

  const handleApprove = (c) => {
    console.log(c)
    Swal.fire({
      title: "Are you sure?",
      text: `Can you make Consultant this user!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, make Consultant!`
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/consultant/${c._id}`, { role: 'consultant' })
        axiosSecure.post('/consultant', c)
          .then(res => {
            axiosSecure.delete(`/consultant/application/${c._id}`)
            refetch();
            if (res.data.modifiedCound > 0) {
              Swal.fire('Success', `Succesfully add to Consultant.`, 'success');
            }
          })
      }
    });
  };

  const handleReject = (id) => {
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Reject this Candidates?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Reject it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/candidates/application/${id}`)
          .then(res => {
            refetch()
            console.log(res)
            if (res.data.deletedCount > 0) {
              Swal.fire('Rejected!', 'Candidates has been Delete.', 'success');
            }
          });
      }
    });
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
              <tr key={c._id}>
                <td>{idx + 1}</td>
                <td>
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-gray-500">{c.email}</p>
                  <p className="text-sm text-gray-500">{c.phone}</p>
                  <p className="text-sm text-gray-500">🌍 {c.country}</p>
                </td>
                <td>
                  <p>{c.university}</p>
                  <a
                    href={c.offerLetterUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline text-sm"
                  >
                    View Offer
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
                    className={`badge ${c.status === "Approved"
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
                    onClick={() => handleApprove(c)}
                  >
                    <FaCheckCircle className="mr-1" /> Approve
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    disabled={c.status !== "Pending"}
                    onClick={() => handleReject(c._id)}
                  >
                    <FaTimesCircle className="mr-1" /> Reject
                  </button>
                </td>
              </tr>
            ))}

            {candidates.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-400">
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
