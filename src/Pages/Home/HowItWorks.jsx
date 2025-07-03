import React from 'react';
import { FaSearch, FaComments, FaCheckCircle } from 'react-icons/fa';

const HowItWorks = () => (
  <section className="py-16 bg-base-100">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <FaSearch className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Find Consultant</h3>
          <p>Browse top-rated consultants based on your target country and needs.</p>
        </div>
        <div>
          <FaComments className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Consult & Plan</h3>
          <p>Chat or meet directly to plan your higher study journey.</p>
        </div>
        <div>
          <FaCheckCircle className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Apply with Confidence</h3>
          <p>Use expert help to submit a perfect application & visa file.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
