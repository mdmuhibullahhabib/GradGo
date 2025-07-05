import React, { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import {
    FaBars, FaHome, FaUserCog, FaTasks, FaUsers,
    FaUser, FaSuitcase, FaPen, FaPlusCircle, FaUserTie,
    FaUserEdit, FaClipboardList, FaFolderOpen, FaSignOutAlt,
    FaUsersCog,
    FaDashcube,
    FaDollarSign
} from "react-icons/fa";
// import useRole from "../hooks/useRole";

const Dashboard = () => {
    //   const [isRole] = useRole();
    const isRole = 'consultant'
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Sidebar */}
            <aside className={`bg-base-200 p-4 w-full lg:w-64 lg:block ${open ? 'block' : 'hidden'}`}>
                <nav className="space-y-2">

                    {isRole === "admin" && (
                        <>
                            <h3 className="text-lg font-bold mb-3">Admin Dashboard</h3>
                            <NavLink to="/dashboard/admin-dashboard" className="flex items-center gap-2 w-full btn btn-outline">
                                <FaUsersCog />
                                Dashboard
                            </NavLink>
                            <NavLink to="/dashboard/admin/finance" className="flex items-center gap-2 w-full btn btn-outline">
                                <FaUsersCog />
                                Finance
                            </NavLink>
                            <NavLink to="/dashboard/all-tranjection" className="flex items-center gap-2 w-full btn btn-outline">
                                <FaUserCog /> All Tranjections
                            </NavLink>
                            <NavLink to="/dashboard/admin/consultant-requests" className="flex items-center gap-2 w-full btn btn-outline">
                                <FaTasks /> Manage Candidates
                            </NavLink>
                            <NavLink to="/dashboard/admin/manage-gigs" className="flex items-center gap-2 w-full btn btn-outline">
                                <FaTasks /> Manage Gigs
                            </NavLink>
                            <NavLink to="/dashboard/admin/users" className="flex items-center gap-2 w-full btn btn-outline">
                                <FaUsers /> All Users
                            </NavLink>                           
                        </>
                    )}

                    {isRole === "consultant" && (
                        <>
                            <h3 className="text-lg font-bold mb-3">Consultant Dashboard</h3>
                            <NavLink to="/dashboard/consultant-dashboard" className="flex items-center gap-2 w-full btn btn-outline">
                                <FaDashcube /> Dashboard
                            </NavLink>
                            <NavLink to="/dashboard/consultant-earnings" className="flex items-center gap-2 w-full btn btn-outline">
                                <FaDollarSign /> Earnings
                            </NavLink>
                            <NavLink to="/dashboard/my-students" className="flex items-center gap-2 w-full btn btn-outline">
                                <FaUser /> My Students
                            </NavLink>
                            <NavLink to="/dashboard/my-gigs" className="flex items-center gap-2 w-full btn btn-outline">
                                <FaClipboardList /> My Gigs
                            </NavLink>
                        </>
                    )}

                    {isRole === "student" && (
                        <>
                            <h3 className="text-lg font-bold mb-3">Student Dashboard</h3>
                            <NavLink to="/dashboard/profile" className="btn btn-ghost justify-start gap-2 w-full">
                                <FaUser /> Manage Profile
                            </NavLink>
                            <NavLink to="/dashboard/bookings" className="btn btn-ghost justify-start gap-2 w-full">
                                <FaSuitcase /> My Bookings
                            </NavLink>
                            <NavLink to="/dashboard/join-consultant" className="btn btn-ghost justify-start gap-2 w-full">
                                <FaUserTie /> Become a Consultant
                            </NavLink>
                        </>
                    )}

                    <div className="divider"></div>
                  <div className="left">
                      <button className="btn btn-ghost w-full text-left">
                        <FaHome className="mr-2" /> Home
                    </button>
                    <button className="btn btn-ghost w-full text-left">
                        <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                  </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-base-100">
                {/* Mobile Top Bar */}
                <div className="lg:hidden mb-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-primary">Dashboard</h1>
                    <button onClick={() => setOpen(!open)} className="btn btn-sm">
                        <FaBars />
                    </button>
                </div>

                {/* Render nested routes */}
                <div className="bg-white shadow p-4 rounded min-h-[300px]">
                    <Outlet></Outlet>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
