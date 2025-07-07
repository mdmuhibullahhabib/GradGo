import React from "react";
import { Link } from "react-router-dom";

const gigs = [
  {
    id: "gig1",
    title: "Study Abroad Guidance – USA",
    price: 3000,
    description: "Get personalized advice on applying to top US universities.",
    category: "USA Admission",
    consultant: {
      id: "consult1",
      name: "Tanvir Rahman",
      photo: "https://i.pravatar.cc/40?img=3",
      shortBio: "5+ years of experience with USA & Canada student visas",
    },
  },
  {
    id: "gig2",
    title: "IELTS Preparation with Expert",
    price: 2000,
    description: "High-band strategy and resources for IELTS success.",
    category: "IELTS Training",
    consultant: {
      id: "consult2",
      name: "Sumaiya Akter",
      photo: "https://i.pravatar.cc/40?img=5",
      shortBio: "IELTS trainer with British Council certification",
    },
  },
];

const Gigs = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-6">Explore Consultant Gigs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gigs.map((gig) => (
          <div
            key={gig.id}
            className="relative bg-white/60 backdrop-blur-md shadow-lg p-5 rounded-xl border border-gray-200 hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{gig.title}</h3>

            <p className="text-sm text-gray-600 mb-2 line-clamp-3">{gig.description}</p>

            <span className="text-xs font-medium text-white bg-blue-500 px-2 py-1 rounded-full inline-block mb-3">
              {gig.category}
            </span>

            <p className="text-lg text-green-600 font-semibold mb-4">৳ {gig.price}</p>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={gig.consultant.photo}
                alt={gig.consultant.name}
                className="w-10 h-10 rounded-full border-2 border-primary"
              />
              <div>
                <Link
                  to={`/consultant/${gig.consultant.id}`}
                  className="text-indigo-700 hover:underline font-medium"
                >
                  {gig.consultant.name}
                </Link>
                <p className="text-xs text-gray-500">{gig.consultant.shortBio}</p>
              </div>
            </div>

            <Link
              to={`/gigs/${gig.id}`}
                state={{ gig }}
              className="btn btn-sm btn-primary w-full mt-auto"
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
