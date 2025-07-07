import React from "react";
import { Link } from "react-router-dom";

const gigs = [
  {
    id: "gig1",
    title: "Study Abroad Guidance – USA",
    price: 3000,
    description: "Get personalized advice on applying to top US universities.",
    consultant: {
      id: "consult1",
      name: "Tanvir Rahman",
      shortBio: "5+ years experience with USA & Canada student visas",
    },
  },
  {
    id: "gig2",
    title: "IELTS Preparation with Expert",
    price: 2000,
    description: "High-band strategy and resources for IELTS success.",
    consultant: {
      id: "consult2",
      name: "Sumaiya Akter",
      shortBio: "IELTS trainer with British Council certification",
    },
  },
];

const Gigs = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-6">Available Consultancy Gigs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gigs.map((gig) => (
          <div key={gig.id} className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{gig.title}</h3>
            <p className="text-gray-600 mb-2">{gig.description}</p>
            <p className="font-bold text-blue-600 mb-3">৳ {gig.price}</p>
            <div className="text-sm text-gray-700 mb-4">
              <span className="font-medium">Consultant:</span>{" "}
              <Link to={`/consultant/${gig.consultant.id}`} className="text-indigo-600 underline">
                {gig.consultant.name}
              </Link>
              <div className="text-xs text-gray-500">{gig.consultant.shortBio}</div>
            </div>
            <Link
              to={`/gigs/${gig.id}`}
              className="btn btn-primary btn-sm"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gigs;
