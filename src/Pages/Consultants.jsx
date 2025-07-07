import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import useConsultant from "../hooks/useConsultant";

const consultants = [
  {
    id: 1,
    name: "Md. Arif Hossain",
    country: "UK Expert",
    rating: 4.9,
    university: "University of Manchester",
    experience: "6+ Years",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Fatema Akter",
    country: "Canada Specialist",
    rating: 4.8,
    university: "University of Toronto",
    experience: "5+ Years",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Zahidul Islam",
    country: "Australia Advisor",
    rating: 4.7,
    university: "Monash University",
    experience: "4+ Years",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

const Consultants = () => {

  const[consultant] = useConsultant();
  console.log(consultant)
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">
        Meet Our Trusted Consultants
      </h1>

      {/* Search bar (optional) */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search by country or name..."
          className="input input-bordered w-full max-w-md"
        />
      </div>

      {/* Consultant Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {consultants.map((consultant) => (
          <div
            key={consultant.id}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <img
              src={consultant.image}
              alt={consultant.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold">{consultant.name}</h2>
            <p className="text-sm text-gray-500">{consultant.country}</p>
            <p className="mt-1 text-sm text-gray-600">
              🎓 {consultant.university}
            </p>
            <p className="text-sm text-gray-600">💼 {consultant.experience}</p>
            <div className="flex justify-center items-center gap-1 mt-2">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-medium">{consultant.rating}</span>
            </div>
            <Link
              to={`/consultant/${consultant.id}`}
              className="btn btn-outline btn-sm mt-4"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consultants;
