// src/components/Messenger.jsx
import React, { useState } from "react";

const fakeConversations = [
  {
    id: 1,
    name: "Amina Khan",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastSeen: "Online",
    unread: 2,
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
    lastSeen: "5 min ago",
    unread: 1,
    messages: [
      { id: 1, text: "Are we still on for the meeting?", fromMe: false, time: "9:00 AM" },
      { id: 2, text: "Yes, I’ll join in 10 mins!", fromMe: true, time: "9:05 AM" },
    ],
  },
  {
    id: 3,
    name: "Sophia Ali",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastSeen: "Yesterday",
    unread: 0,
    messages: [
      { id: 1, text: "Don’t forget to send the report 📄", fromMe: false, time: "Yesterday" },
      { id: 2, text: "Sure, will do it by tonight.", fromMe: true, time: "Yesterday" },
    ],
  },
];

const Messenger = () => {
  const [conversations, setConversations] = useState(fakeConversations);
  const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!newMessage.trim() || !activeChat) return;

    const msg = {
      id: activeChat.messages.length + 1,
      text: newMessage,
      fromMe: true,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // update chat
    const updatedChat = {
      ...activeChat,
      messages: [...activeChat.messages, msg],
    };

    setActiveChat(updatedChat);
    setNewMessage("");

    // simulate reply
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const reply = {
          id: updatedChat.messages.length + 1,
          text: "Got it 👍",
          fromMe: false,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setActiveChat((prev) => ({
          ...prev,
          messages: [...prev.messages, reply],
        }));
      }, 2000);
    }, 1000);
  };

  return (
    <div className="flex h-[600px] w-full max-w-5xl mx-auto border rounded-2xl shadow-lg bg-white overflow-hidden">
      {/* LEFT SIDEBAR */}
      <div
        className={`${
          activeChat ? "hidden md:block" : "block"
        } w-full md:w-1/3 border-r bg-gray-50 rounded-l-2xl overflow-y-auto`}
      >
        <div className="p-4 font-bold text-gray-700 border-b">Messages</div>
        {conversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => {
              setActiveChat(conv);
              // mark as read
              setConversations((prev) =>
                prev.map((c) =>
                  c.id === conv.id ? { ...c, unread: 0 } : c
                )
              );
            }}
            className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 ${
              activeChat?.id === conv.id ? "bg-gray-200" : ""
            }`}
          >
            <img
              src={conv.avatar}
              alt={conv.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">{conv.name}</span>
                {conv.unread > 0 && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {conv.unread}
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-500 truncate w-40">
                {conv.messages[conv.messages.length - 1]?.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT CHAT PANEL */}
      <div
        className={`${
          activeChat ? "flex" : "hidden md:flex"
        } flex-col flex-1`}
      >
        {activeChat ? (
          <>
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b bg-gray-100 rounded-tr-2xl">
              <button
                className="md:hidden text-sm text-blue-500"
                onClick={() => setActiveChat(null)}
              >
                ← Back
              </button>
              <img
                src={activeChat.avatar}
                alt={activeChat.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-semibold">{activeChat.name}</div>
                <div className="text-xs text-gray-500">
                  {isTyping ? "Typing..." : activeChat.lastSeen}
                </div>
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
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-600 p-2 rounded-2xl rounded-bl-none text-sm animate-pulse">
                    Typing...
                  </div>
                </div>
              )}
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
          </>
        ) : (
          // Empty State
          <div className="flex flex-col items-center justify-center flex-1 text-center p-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Pick up where you left off
            </h2>
            <p className="text-gray-500 mt-2">
              Select a conversation and chat away.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messenger;
