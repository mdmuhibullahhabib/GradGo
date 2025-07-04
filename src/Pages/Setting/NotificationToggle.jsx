import React, { useState } from "react";

const NotificationToggle = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="bg-white p-6 shadow rounded flex justify-between items-center">
      <span className="font-semibold">Enable Notifications</span>
      <input
        type="checkbox"
        className="toggle toggle-primary"
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
      />
    </div>
  );
};

export default NotificationToggle;
