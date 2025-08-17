// src/components/Messenger.jsx
import React, { useState } from "react";

const fakeMessages = [
  {
    id: 1,
    sender: "Amina",
    text: "Hey, did you finish the GradGo dashboard?",
    time: "10:05 AM",
    fromMe: false,
  },
  {
    id: 2,
    sender: "Me",
    text: "Almost done! Just polishing the UI 😅",
    time: "10:06 AM",
    fromMe: true,
  },
  {
    id: 3,
    sender: "Amina",
    text: "Great! I’ll review it after lunch.",
    time: "10:07 AM",
    fromMe: false,
  },
  {
    id: 4,
    sender: "Me",
    text: "Cool 👍",
    time: "10:07 AM",
    fromMe: true,
  },
  {
    id: 5,
    sender: "Amina",
    text: "By the way, did you check today’s tasks?",
    time: "10:08 AM",
    fromMe: false,
  },
  {
    id: 6,
    sender: "Me",
    text: "Not yet, I’ll go through them after finishing this.",
    time: "10:09 AM",
    fromMe: true,
  },
];

const Messenger = () => {
  const [messages, setMessages] = useState(fakeMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const msg = {
      id: messages.length + 1,
      sender: "Me",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      fromMe: true,
    };

    setMessages([...messages, msg]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md mx-auto border rounded-2xl shadow-lg bg-white">
      {/* Header */}
      <div className="p-4 border-b font-semibold text-gray-800 bg-gray-100 rounded-t-2xl">
        Chat with Amina
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-2xl shadow-sm ${
                msg.fromMe
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs opacity-70 block mt-1 text-right">
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex items-center gap-2 bg-white rounded-b-2xl">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messenger;
