import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";


const GigDetails = () => {
    const location = useLocation()
  const { _id } = useParams();
    const gig = location.state?.gig;

// console.log(gig)
console.log(_id)


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
