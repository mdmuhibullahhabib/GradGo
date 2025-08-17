import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUserCircle, FaHeart, FaEnvelope, FaShoppingBag } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isRole] = useRole();

  const handleLogout = () => {
    logOut().catch(error => console.log(error));
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "btn btn-sm bg-primary text-white font-semibold"
      : "btn btn-sm bg-base-200 text-gray-700";

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-base-100 shadow-md px-4 py-3 flex items-center justify-between flex-wrap gap-y-2">
        
        {/* Left: Logo + Search + Links */}
        <div className="flex items-center gap-4 flex-wrap flex-1">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary whitespace-nowrap">🎓GradGo</Link>
          
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search services..."
            className="input input-bordered w-64 max-w-xs"
          />

          {/* Main Navigation Links */}
          <ul className="menu menu-horizontal px-1 space-x-2 hidden lg:flex">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/gigs" className={navLinkClass}>Gigs</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>

            {/* Role Based Dashboard Link */}
            {isRole === "student" && (
              <li><NavLink to="/dashboard/my-bookings" className={navLinkClass}>Dashboard</NavLink></li>
            )}
            {isRole === "consultant" && (
              <li><NavLink to="/dashboard/consultant-dashboard" className={navLinkClass}>Dashboard</NavLink></li>
            )}
            {isRole === "admin" && (
              <li><NavLink to="/dashboard/admin-dashboard" className={navLinkClass}>Admin Panel</NavLink></li>
            )}
          </ul>
        </div>

        {/* Right: Icons & Auth */}
        <div className="flex items-center gap-4">
          <Link to="/messages"><FaEnvelope className="text-xl cursor-pointer" /></Link>
          <Link to="/favorites"><FaHeart className="text-xl cursor-pointer" /></Link>
          <Link to="/orders"><FaShoppingBag className="text-xl cursor-pointer" /></Link>

          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <FaUserCircle className="text-2xl" />
              </div>
              <ul tabIndex={0} className="mt-3 z-[99] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <Link to="/auth/signin" className="btn btn-sm bg-orange-400 text-white hover:bg-orange-500">Login</Link>
          )}

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden w-full px-4 mt-2">
          <ul className="menu menu-vertical space-y-2">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/gigs" className={navLinkClass}>Gigs</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>

            {isRole === "student" && (
              <li><NavLink to="/dashboard/my-bookings" className={navLinkClass}>Dashboard</NavLink></li>
            )}
            {isRole === "consultant" && (
              <li><NavLink to="/dashboard/consultant-dashboard" className={navLinkClass}>Dashboard</NavLink></li>
            )}
            {isRole === "admin" && (
              <li><NavLink to="/dashboard/admin-dashboard" className={navLinkClass}>Admin Panel</NavLink></li>
            )}

            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>
      )}

      {/* Country + Service Tabs */}
      <div className="w-full bg-gray-100 py-2 shadow-inner">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 flex-wrap gap-2">
          {/* Country Tabs */}
          <div className="tabs tabs-boxed space-x-1">
            <a className="tab tab-active">🇧🇩 Bangladesh</a>
            <a className="tab">🇺🇸 USA</a>
            <a className="tab">🇬🇧 UK</a>
            <a className="tab">🇨🇦 Canada</a>
          </div>

          {/* Service Tabs */}
          <div className="tabs tabs-boxed space-x-1">
            <a className="tab tab-active">Visa</a>
            <a className="tab">University</a>
            <a className="tab">Language</a>
            <a className="tab">Consulting</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
