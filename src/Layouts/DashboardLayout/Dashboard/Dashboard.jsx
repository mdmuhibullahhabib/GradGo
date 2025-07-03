import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaUser, FaSignOutAlt } from "react-icons/fa";

const Dashboard = ({ title = "Dashboard", children, menu = [] }) => {
    const [open, setOpen] = useState(false);
  
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            
            {/* Sidebar */}
            <div className={`lg:w-64 w-full bg-base-200 p-4 lg:block ${open ? 'block' : 'hidden'}`}>
                <h2 className="text-2xl font-bold mb-6 text-primary">StudyLink BD</h2>
                <ul className="menu space-y-2">
                    <li>
                        <Link to="/">
                            <FaHome className="mr-2" /> Home
                        </Link>
                    </li>
                    {menu.map((item, i) => (
                        <li key={i}>
                            <Link to={item.path}>
                                {item.icon && <item.icon className="mr-2" />}
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button>
                            <FaSignOutAlt className="mr-2" /> Logout
                        </button>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4">
                {/* Topbar (Mobile) */}
                <div className="lg:hidden flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-primary">{title}</h1>
                    <button className="btn btn-sm" onClick={() => setOpen(!open)}>
                        <FaBars />
                    </button>
                </div>

                {/* Desktop title */}
                <div className="hidden lg:block">
                    <h1 className="text-3xl font-bold text-primary mb-6">{title}</h1>
                </div>

                {/* Injected Children */}
                <div className="bg-white shadow rounded p-4">{children}</div>
            </div>
        </div>
    );
};

export default Dashboard;
