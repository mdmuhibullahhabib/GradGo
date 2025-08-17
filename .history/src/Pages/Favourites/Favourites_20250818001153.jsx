// src/components/Favorites.jsx
import React from "react";

const favoriteUsers = [
  {
    id: 1,
    name: "Amina Khan",
    avatar: "https://i.pravatar.cc/150?img=1",
    status: "online",
  },
  {
    id: 2,
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=2",
    status: "offline",
  },
  {
    id: 3,
    name: "Sophia Ali",
    avatar: "https://i.pravatar.cc/150?img=3",
    status: "online",
  },
  {
    id: 4,
    name: "Rahim Uddin",
    avatar: "https://i.pravatar.cc/150?img=4",
    status: "online",
  },
  {
    id: 5,
    name: "Emily Smith",
    avatar: "https://i.pravatar.cc/150?img=5",
    status: "offline",
  },
];

const Favourites = () => {
  return (
    <div className="bg-white border rounded-2xl shadow p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Favorites</h2>

      {/* Responsive layout */}
      <div className="hidden md:flex flex-col gap-3">
        {favoriteUsers.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
          >
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                  user.status === "online" ? "bg-green-500" : "bg-gray-400"
                }`}
              ></span>
            </div>
            <div>
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-500">{user.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile horizontal scroll */}
      <div className="flex md:hidden gap-4 overflow-x-auto">
        {favoriteUsers.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <span
                className={`absolute bottom-1 right-1 w-3 h-3 rounded-full border-2 border-white ${
                  user.status === "online" ? "bg-green-500" : "bg-gray-400"
                }`}
              ></span>
            </div>
            <p className="text-xs mt-1 text-gray-700 truncate w-14 text-center">
              {user.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
