import React from "react";
import ChangePassword from "./ChangePassword";
import NotificationToggle from "./NotificationToggle";
import DeleteAccount from "./DeleteAccount";

const Settings = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>
      <ChangePassword></ChangePassword>
      <NotificationToggle></NotificationToggle>
      <DeleteAccount></DeleteAccount>
    </div>
  );
};

export default Settings;
