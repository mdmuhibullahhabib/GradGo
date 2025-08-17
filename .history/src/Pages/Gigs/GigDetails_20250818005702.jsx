import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fakeGigs } from "../../data/fakeGigs"; // use the 20 gigs I made above
import ContactModal from "./ContactModal";

const Gigs = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedGig, setSelectedGig] = useState(null);

  const handleContact = (gig) => {
    setSelectedGig(gig);
    setOpenModal(true);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-6">Explore Consultant Gigs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fakeGigs.map((gig) => (
          <div
            key={gig._id}
            className="relative bg-white/60 backdrop-blur-md shadow-lg p-5 rounded-xl border border-gray-200 hover:shadow-2xl transition-all flex flex-col"
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
                <p className="text-indigo-700 font-medium">{gig.consultant.name}</p>
                <p className="text-xs text-gray-500">{gig.consultant.shortBio}</p>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-2">
              <button
                onClick={() => handleContact(gig)}
                className="btn btn-sm btn-outline btn-primary w-full"
              >
                Contact
              </button>

              <Link
                to={`/booking/${gig._id}`}
                state={{ gig }}
                className="btn btn-sm btn-primary w-full"
              >
                Continue to Booking Consultation
              </Link>
            </div>
          </div>
        ))}
      </div>

      {openModal && selectedGig && (
        <ContactModal gig={selectedGig} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default Gigs;


export default GigDetails;
