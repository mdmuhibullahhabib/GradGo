import React from "react";

const About = () => {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About StudyLink BD</h1>
        <p className="text-lg text-gray-600">
          Empowering Bangladeshi students to achieve their dreams of studying abroad.
        </p>
      </div>

      {/* Who We Are */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Who We Are</h2>
        <p>
          StudyLink BD is Bangladesh’s leading online platform connecting students with top-rated education consultants. 
          Our goal is to simplify the application and visa process, making global education accessible to all.
        </p>
        <p>
          With hundreds of verified consultants and thousands of successful students, we offer end-to-end support for university selection,
          SOP writing, visa application, and pre-departure advice.
        </p>
      </section>

      {/* Mission */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Provide transparent, ethical and expert advice for higher study</li>
          <li>Support students throughout the entire admission journey</li>
          <li>Empower local consultants with a digital platform</li>
        </ul>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Verified Consultants Only",
            "Affordable Packages",
            "Live Chat & Booking System",
            "Support for 10+ Countries",
            "bKash/Nagad Payment Integration",
            "Application & Visa File Review",
          ].map((feature, idx) => (
            <div key={idx} className="p-4 bg-white shadow rounded">
              <h4 className="text-lg font-medium">{feature}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-100 p-6 rounded-lg grid md:grid-cols-4 gap-6 text-center">
        {[
          { label: "Students Helped", value: "5,000+" },
          { label: "Consultants Onboarded", value: "300+" },
          { label: "Countries Supported", value: "10+" },
          { label: "Applications Approved", value: "4,700+" },
        ].map((stat, idx) => (
          <div key={idx}>
            <p className="text-3xl font-bold text-primary">{stat.value}</p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Partners */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Trusted University Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["University of Toronto", "University of Melbourne", "University of Manchester", "University of British Columbia"].map(
            (name, idx) => (
              <div key={idx} className="bg-white shadow p-4 rounded text-center">
                <p className="text-sm">{name}</p>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
