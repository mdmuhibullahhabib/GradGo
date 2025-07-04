import React from "react";
import { FaUserShield, FaTrashAlt } from "react-icons/fa";

const mockUsers = [
  { id: 1, name: "Samiha Rahman", email: "samiha@mail.com", role: "student" },
  { id: 2, name: "Zahidul Islam", email: "zahid@study.com", role: "consultant" },
  { id: 3, name: "Afsana Admin", email: "admin@study.com", role: "admin" },
];

const AllUsers = () => {
  const handleDelete = (id) => {
    alert(`Delete user ID: ${id}`);
    // Connect with backend API here
  };

  const handleMakeAdmin = (id) => {
    alert(`Make admin: ${id}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">All Registered Users</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user, idx) => (
              <tr key={user.id}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className="badge badge-info capitalize">{user.role}</span>
                </td>
                <td className="flex gap-2">
                  {user.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user.id)}
                      className="btn btn-xs btn-success"
                    >
                      <FaUserShield className="mr-1" />
                      Make Admin
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-xs btn-error"
                  >
                    <FaTrashAlt className="mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
