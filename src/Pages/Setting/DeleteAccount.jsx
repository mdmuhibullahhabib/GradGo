import React from "react";

const DeleteAccount = () => {
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete your account?")) {
      alert("Account deleted!");
    }
  };

  return (
    <div className="bg-red-50 border border-red-200 p-6 shadow rounded text-red-700">
      <h3 className="font-semibold mb-2">Danger Zone</h3>
      <p className="text-sm mb-4">This action is irreversible.</p>
      <button onClick={handleDelete} className="btn btn-error btn-outline">
        Delete My Account
      </button>
    </div>
  );
};

export default DeleteAccount;
