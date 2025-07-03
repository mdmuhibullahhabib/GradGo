import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <section className="bg-[#00e6c3] text-black py-12 text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Future?</h2>
    <p className="mb-6 text-lg">Sign up now and connect with trusted consultants.</p>
    <Link to="/register" className="btn btn-neutral btn-wide">Join Now</Link>
  </section>
);

export default CallToAction;
