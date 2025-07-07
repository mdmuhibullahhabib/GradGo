import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";


// Example: Assume role is passed via props or context
const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const [isRole] = useRole();
    console.log(isRole)

    const commonLinks = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gigs">Gigs</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </>
    );

    // const [isRole] = user?.role || "student";

    const roleBasedLinks = {
        student: (
            <>
                <li><Link to="/dashboard/my-bookings">Dashboard</Link></li>
            </>
        ),
        consultant: (
            <>
                <li><Link to="/dashboard/consultant-dashboard">Dashboard</Link></li>
            </>
        ),
        admin: (
            <>
                <li><Link to="/dashboard/admin-dashboard">Admin Panel</Link></li>
                <li><Link to="/admin/users">Users</Link></li>
            </>
        ),
    };
        const userLinks = roleBasedLinks[isRole || "student"];


    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div className="navbar bg-base-100 shadow-md px-4 py-2">
            <div className="flex-1">
                <Link to="/" className="text-xl font-bold text-primary">🎓GradGo</Link>
            </div>

            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {commonLinks}
                     {userLinks}
                </ul>
            </div>

            <div className="flex-none gap-2">
                {user && user?.email ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <FaUserCircle className="text-2xl" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[99] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/settings">Settings</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                ) : (
                    <Link to="/auth/signin" className="btn btn-sm bg-orange-400 text-white hover:bg-orange-500">Login</Link>
                )}

                {/* Mobile Toggle Button */}
                <div className="lg:hidden">
                    <button
                        className="btn btn-square btn-ghost"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="lg:hidden w-full mt-2">
                    <ul className="menu menu-vertical px-2">
                        {commonLinks}
                        {roleBasedLinks[role]}
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><button>Logout</button></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
