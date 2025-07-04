import React from "react";

const mockBookings = [
  {
    id: 1,
    consultant: "Md. Arif Hossain",
    country: "UK",
    date: "2025-07-10",
    time: "03:00 PM",
    status: "Confirmed",
  },
  {
    id: 2,
    consultant: "Fatema Akter",
    country: "Canada",
    date: "2025-07-15",
    time: "11:00 AM",
    status: "Pending",
  },
  {
    id: 3,
    consultant: "Zahidul Islam",
    country: "Australia",
    date: "2025-07-18",
    time: "05:30 PM",
    status: "Cancelled",
  },
];

const MyBookings = () => {
  const handleCancel = (id) => {
    alert(`Cancel request for booking ID: ${id}`);
    // Optional: connect with backend to update status
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

      {mockBookings.length === 0 ? (
        <p className="text-gray-600">You haven’t made any bookings yet.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Consultant</th>
                <th>Country</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.map((booking, idx) => (
                <tr key={booking.id}>
                  <td>{idx + 1}</td>
                  <td>{booking.consultant}</td>
                  <td>{booking.country}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>
                    <span
                      className={`badge ${
                        booking.status === "Confirmed"
                          ? "badge-success"
                          : booking.status === "Pending"
                          ? "badge-warning"
                          : "badge-error"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    {booking.status === "Pending" ? (
                      <button
                        onClick={() => handleCancel(booking.id)}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        Cancel
                      </button>
                    ) : (
                      <span className="text-gray-400 text-sm">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
