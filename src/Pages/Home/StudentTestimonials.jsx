import React from 'react';

const reviews = [
  {
    name: "Samiha Rahman",
    text: "Thanks to StudyLink BD, I got admitted to University of Toronto with full support!",
  },
  {
    name: "Tanvir Islam",
    text: "The consultant helped with SOP and visa process. Very professional service.",
  },
  {
    name: "Farzana Haque",
    text: "Smooth booking process and expert advice! Highly recommended!",
  },
];

const StudentTestimonials = () => (
  <section className="py-16 bg-base-100">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">What Students Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white shadow rounded p-6">
            <p className="italic text-gray-600 mb-4">"{review.text}"</p>
            <h4 className="font-semibold text-sm text-primary">{review.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StudentTestimonials;
