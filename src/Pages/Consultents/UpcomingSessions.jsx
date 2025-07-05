import React, { useState } from "react";
import {
  FaClock,
  FaHashtag,
  FaUser,
  FaDollarSign,
  FaCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa";

const upcomingConsults = [
  {
    id: "ORD-1001",
    student: "Tanvir Rahman",
    time: "July 6, 2025 - 3:00 PM",
    value: 1500,
    status: "Confirmed",
  },
  {
    id: "ORD-1002",
    student: "Sumaiya Akter",
    time: "July 7, 2025 - 11:00 AM",
    value: 2000,
    status: "Pending",
  },
];

const completedConsults = [
  {
    id: "ORD-0951",
    student: "Shahriar Hasan",
    time: "June 28, 2025 - 6:30 PM",
    value: 1800,
    status: "Completed",
  },
  {
    id: "ORD-0930",
    student: "Sadia Jahan",
    time: "June 26, 2025 - 2:00 PM",
    value: 1600,
    status: "Completed",
  },
];

const statusColor = {
  Confirmed: "text-green-600 bg-green-100",
  Pending: "text-yellow-600 bg-yellow-100",
  Completed: "text-blue-600 bg-blue-100",
};

const ConsultSessions = () => {
  const [tab, setTab] = useState("upcoming");

  const sessions = tab === "upcoming" ? upcomingConsults : completedConsults;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-primary">Consultation Sessions</h2>
        <div className="flex gap-2">
          <button
            className={`btn btn-sm ${tab === "upcoming" ? "btn-primary" : "btn-outline"}`}
            onClick={() => setTab("upcoming")}
          >
            <FaHourglassHalf /> Upcoming
          </button>
          <button
            className={`btn btn-sm ${tab === "completed" ? "btn-primary" : "btn-outline"}`}
            onClick={() => setTab("completed")}
          >
            <FaCheckCircle /> Completed
          </button>
        </div>
      </div>

      {sessions.length > 0 ? (
        <div className="space-y-4">
          {sessions.map((session, idx) => (
            <div
              key={idx}
              className="p-4 bg-base-100 rounded-lg border flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <h3 className="text-md font-semibold mb-1 flex items-center gap-2 text-gray-800">
                  <FaUser /> {session.student}
                </h3>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaClock /> {session.time}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaHashtag /> Order ID: <span className="font-mono">{session.id}</span>
                </p>
              </div>
              <div className="mt-3 md:mt-0 text-right">
                <p className="text-md font-bold text-blue-600 flex items-center justify-end gap-1">
                  <FaDollarSign className="text-sm" /> {session.value}
                </p>
                <span
                  className={`mt-1 inline-block px-3 py-1 text-xs rounded-full font-semibold ${
                    statusColor[session.status] || "bg-gray-200"
                  }`}
                >
                  {session.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-6">No {tab} sessions available.</p>
      )}
    </div>
  );
};

export default ConsultSessions;
