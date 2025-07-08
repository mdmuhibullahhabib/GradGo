import React from "react";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import useGigs from "../../hooks/useGigs";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageGigs = () => {
  const axiosSecure = useAxiosSecure();
  const [gigs, refetch] = useGigs();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This gig will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/gigs/${id}`)
          .then(res => {
            refetch()
            console.log(res)
            if (res.data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your User has been Delete.', 'success');
            }
          });
      }
    });
  };



  const getStatus = (gig) => {
    return gigStatus[gig._id] || gig.status || "Pending";
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
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {gigs.map((gig, index) => (
              <tr key={gig._id}>
                <td>{index + 1}</td>
                <td>{gig.title}</td>
                <td>{gig.consultant?.name}</td>
                <td>৳ {gig.price}</td>
                <td className="flex gap-2 justify-center">
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(gig._id)}
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
