import React from "react";

const studentData = [
  {
    id: 1,
    name: "Sadia Ahmed",
    email: "sadia@mail.com",
    country: "Canada",
    bookingDate: "2025-07-02",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Tareq Hossain",
    email: "tareq@mail.com",
    country: "UK",
    bookingDate: "2025-07-05",
    status: "Pending",
  },
];

const MyStudents = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">My Students</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((s, i) => (
              <tr key={s.id}>
                <td>{i + 1}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.country}</td>
                <td>{s.bookingDate}</td>
                <td>
                  <span
                    className={`badge ${
                      s.status === "Confirmed"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyStudents;
