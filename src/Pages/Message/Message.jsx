// src/components/Message.jsx
import React from "react";

const messages = [
  {
    id: 1,
    sender: "Muhibullah Habib",
    text: "Hey! Did you check the latest update?",
    time: "10:15 AM",
  },
  {
    id: 2,
    sender: "Amina Khan",
    text: "Yes, looks great. We should deploy it today.",
    time: "10:20 AM",
  },
  {
    id: 3,
    sender: "John Doe",
    text: "I’ll prepare the presentation for tomorrow.",
    time: "10:25 AM",
  },
  {
    id: 4,
    sender: "Muhibullah Habib",
    text: "Perfect. Let’s sync up in the evening.",
    time: "10:30 AM",
  },
];

const Message = () => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-gray-50 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Messages</h2>
      <div className="space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="p-3 rounded-lg bg-white shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-800">{msg.sender}</span>
              <span className="text-xs text-gray-500">{msg.time}</span>
            </div>
            <p className="text-gray-700">{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
