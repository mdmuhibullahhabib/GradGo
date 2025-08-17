import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import useGigs from "../../hooks/useGigs";
import ContactModal from "./ContactModal";

const GigDetails = () => {
  const { gigId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [gigs] = useGigs();
  const [gig, setGig] = useState(location.state?.gig || null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!gig && gigs.length > 0) {
      const found = gigs.find((g) => g._id === gigId);
      setGig(found);
    }
  }, [gigs, gigId, gig]);

  if (!gig) return <p className="text-center py-8">Gig not found</p>;

  const handleContact = () => {
    setOpenModal(true);
  };

  const handleBooking = () => {
    navigate(`/booking/${gig._id}`, { state: { gig } });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded-lg flex flex-col md:flex-row gap-6">
      {/* Left side buttons */}
      <div className="md:w-1/4 flex flex-col gap-4">
        <button
          onClick={handleContact}
          className="btn btn-outline btn-primary w-full"
        >
          Contact Consultant
        </button>
        <button
          onClick={handleBooking}
          className="btn btn-primary w-full"
        >
          Continue to Booking Consultation
        </button>
      </div>

      {/* Right side gig details */}
      <div className="md:w-3/4 flex-1">
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
      </div>

      {/* Contact Modal */}
      {openModal && <ContactModal gig={gig} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default GigDetails;
