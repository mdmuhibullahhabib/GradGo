import React, { useState } from "react";

const ProfileCard = () => {
  const [user, setUser] = useState({
    name: "Samiha Rahman",
    email: "samiha@mail.com",
    phone: "01712345678",
    bio: "Aspiring student applying to study in Canada.",
    image: "https://i.pravatar.cc/150?img=5",
  });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  return (
    <div className="bg-white p-6 shadow rounded space-y-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={user.image}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-primary"
        />
        <div className="flex-1 space-y-2">
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            disabled
          />
          <input
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <textarea
        name="bio"
        value={user.bio}
        onChange={handleChange}
        rows={3}
        className="textarea textarea-bordered w-full"
      />
      <button onClick={handleSubmit} className="btn btn-primary w-full">
        Save Changes
      </button>
    </div>
  );
};

export default ProfileCard;
