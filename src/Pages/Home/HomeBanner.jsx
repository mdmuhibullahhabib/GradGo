import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=1470&q=80')", // You can replace with your own image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="hero-content text-center text-white relative z-10 px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Start Your Higher Study Journey with <span className="text-[#00E6C3]">Experts</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Connect with verified education consultants to study in the UK, USA, Canada, Australia & more — all from Bangladesh.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/consultants" className="btn btn-primary rounded-full px-6">
              Browse Consultants
            </Link>
            <Link to="/gigs" className="btn btn-outline btn-accent rounded-full px-6">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
