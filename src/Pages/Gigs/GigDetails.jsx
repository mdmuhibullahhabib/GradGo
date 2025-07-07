import React from "react";
import { useParams, Link } from "react-router-dom";

const dummyGigs = {
  gig1: {
    id: "gig1",
    title: "Study Abroad Guidance – USA",
    price: 3000,
    description: "In-depth support on university selection, SOP review, and visa process.",
    consultant: {
      id: "consult1",
      name: "Tanvir Rahman",
      shortBio: "5+ years experience with USA & Canada student visas",
    },
  },
  gig2: {
    id: "gig2",
    title: "IELTS Preparation with Expert",
    price: 2000,
    description: "Weekly mock tests, speaking practice, and materials.",
    consultant: {
      id: "consult2",
      name: "Sumaiya Akter",
      shortBio: "IELTS trainer with British Council certification",
    },
  },
};

const GigDetails = () => {
  const { gigId } = useParams();
  const gig = dummyGigs[gigId];

  if (!gig) return <p className="text-center py-8">Gig not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded-lg">
      <h2 className="text-3xl font-bold text-primary mb-4">{gig.title}</h2>
      <p className="text-gray-700 mb-4">{gig.description}</p>
      <p className="text-xl font-semibold text-blue-600 mb-4">৳ {gig.price}</p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-1">Consultant Information</h3>
        <Link
          to={`/consultant/${gig.consultant.id}`}
          className="text-indigo-600 font-medium text-lg hover:underline"
        >
          {gig.consultant.name}
        </Link>
        <p className="text-sm text-gray-500">{gig.consultant.shortBio}</p>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-medium mb-2">Send a Message</h4>
        <textarea
          rows={3}
          className="w-full border border-gray-300 rounded p-2 mb-2"
          placeholder="Write your message to the consultant..."
        ></textarea>
        <button className="btn btn-primary">Send Message</button>
      </div>
    </div>
  );
};

export default GigDetails;
