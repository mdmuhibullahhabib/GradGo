import React from 'react'
import Dashboard from "../Dashboard/Dashboard";
import { FaUserGraduate, FaDollarSign, FaClipboardList } from "react-icons/fa";
import MyStudents from '../../../Pages/Consultents/MyStudents';
import Gigs from '../../../Pages/Consultents/Gig';

const menu = [
  { label: "My Students", path: "/consultant/my-students", icon: FaUserGraduate },
  { label: "Earnings", path: "/consultant/earnings", icon: FaDollarSign },
  { label: "My Gigs", path: "/consultant/my-gigs", icon: FaClipboardList },
];

const ConsultantDashboard = () => {
  return (
    <Dashboard title="Consultant Dashboard" menu={menu}>
      <p>Track your students, manage appointments, and monitor earnings.</p>
      <div className="grid md:grid-cols-2 gap-8">
      </div>
    </Dashboard>
  );
};

export default ConsultantDashboard;
