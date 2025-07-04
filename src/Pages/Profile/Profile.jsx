import React from "react";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>
      <ProfileCard></ProfileCard>
    </div>
  );
};

export default Profile;
