// src/components/Messenger.jsx
import React, { useState } from "react";

const fakeConversations = [
  {
    id: 1,
    name: "Amina Khan",
    avatar: "https://i.pravatar.cc/150?img=1",
    messages: [
      { id: 1, text: "Hey, did you finish the GradGo dashboard?", fromMe: false, time: "10:05 AM" },
      { id: 2, text: "Almost done! Just polishing the UI 😅", fromMe: true, time: "10:06 AM" },
      { id: 3, text: "Great! I’ll review it after lunch.", fromMe: false, time: "10:07 AM" },
    ],
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=2",
    messages: [
      { id: 1, text: "Are we still on for the meeting?", fromMe: false, time: "9:00 AM" },
      { id: 2, text: "Yes, I’ll join in 10 mins!", fromMe: true, time: "9:05 AM" },
    ],
  },
  {
    id: 3,
    name: "Sophia Ali",
    avatar: "https://i.pravatar.cc/150?img=3",
    messages: [
      { id: 1, text: "Don’t forget to send the report 📄", fromMe: false, time: "Yesterday" },
      { id: 2, text: "Sure, will do it by tonight.", fromMe: true, time: "Yesterday" },
    ],
  },
];

const Messenger = () => {
  const [conversations] = useState(fakeConversations);
  const [activeChat, setActiveChat] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const msg = {
      id: activeChat.messages.length + 1,
      text: newMessage,
      fromMe: true,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const updatedChat = {
      ...activeChat,
      messages: [...activeChat.messages, msg],
    };

    setActiveChat(updatedChat);
    setNewMessage("");
  };

  return (
    <div className="flex h-[600px] w-full max-w-5xl mx-auto border rounded-2xl shadow-lg bg-white">
      {/* Left Sidebar - Conversations */}
      <div className="w-1/3 border-r bg-gray-50 rounded-l-2xl overflow-y-auto">
        <div className="p-4 font-bold text-gray-700">Messages</div>
        {conversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => setActiveChat(conv)}
            className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 ${
              activeChat.id === conv.id ? "bg-gray-200" : ""
            }`}
          >
            <img
              src={conv.avatar}
              alt={conv.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-medium text-gray-800">{conv.name}</div>
              <div className="text-sm text-gray-500 truncate w-40">
                {conv.messages[conv.messages.length - 1]?.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Panel - Active Chat */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b bg-gray-100 rounded-tr-2xl">
          <img
            src={activeChat.avatar}
            alt={activeChat.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="font-semibold">{activeChat.name}</div>
            <div className="text-xs text-gray-500">Active now</div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
          {activeChat.messages.map((msg) => (
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
