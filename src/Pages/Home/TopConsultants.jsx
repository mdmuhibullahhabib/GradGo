import React from 'react';
import { Link } from 'react-router-dom';

const mockConsultants = [
  { name: "Md. Anwar Hossain", country: "UK Expert", rating: 4.9 },
  { name: "Fatima Yasmin", country: "Canada Specialist", rating: 4.8 },
  { name: "Zahidur Rahman", country: "Australia Advisor", rating: 4.7 }
];

const TopConsultants = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Top Rated Consultants</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {mockConsultants.map((consultant, idx) => (
          <div key={idx} className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold">{consultant.name}</h3>
            <p className="text-sm text-gray-600">{consultant.country}</p>
            <p className="text-yellow-500 mt-2">⭐ {consultant.rating} / 5</p>
            <Link to="/consultants" className="btn btn-sm btn-outline mt-4">View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TopConsultants;
