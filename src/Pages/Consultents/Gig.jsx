import React from "react";
import { FaPlusCircle, FaEdit } from "react-icons/fa";

const gigData = [
  {
    id: 1,
    title: "UK University Application Support",
    price: 3000,
    status: "Active",
    description: "End-to-end support for UCAS and visa file preparation.",
  },
  {
    id: 2,
    title: "Canada Study Permit Guidance",
    price: 3500,
    status: "Paused",
    description: "Consultation and SOP review for Canadian universities.",
  },
];

const Gigs = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">My Gigs</h2>
        <button className="btn btn-sm btn-outline btn-primary">
          <FaPlusCircle className="mr-1" />
          Add Gig
        </button>
      </div>

      <div className="space-y-4">
        {gigData.map((gig) => (
          <div key={gig.id} className="border p-4 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{gig.title}</h3>
                <p className="text-sm text-gray-500">{gig.description}</p>
                <p className="mt-1 text-sm">৳ {gig.price} BDT</p>
                <span
                  className={`badge mt-2 ${
                    gig.status === "Active"
                      ? "badge-success"
                      : "badge-secondary"
                  }`}
                >
                  {gig.status}
                </span>
              </div>
              <button className="btn btn-sm btn-outline">
                <FaEdit className="mr-1" />
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gigs;
