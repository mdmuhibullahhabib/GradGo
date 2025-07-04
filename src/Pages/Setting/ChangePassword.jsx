import React, { useState } from "react";

const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleChange = (e) =>
    setPasswords({ ...passwords, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match.");
      return;
    }
    alert("Password changed!");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
      <h3 className="text-lg font-semibold">Change Password</h3>
      <input
        type="password"
        name="current"
        placeholder="Current Password"
        value={passwords.current}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="password"
        name="new"
        placeholder="New Password"
        value={passwords.new}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="password"
        name="confirm"
        placeholder="Confirm New Password"
        value={passwords.confirm}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <button type="submit" className="btn btn-primary w-full">Update Password</button>
    </form>
  );
};

export default ChangePassword;
