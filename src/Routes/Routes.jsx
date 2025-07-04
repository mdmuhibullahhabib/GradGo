import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Consultants from '../Pages/Consultants';
import StudentDashboard from '../Layouts/DashboardLayout/StudentDashboard/StudentDashboard';
import ConsultantDashboard from '../Layouts/DashboardLayout/ConsultantDashboard/ConsultantDashboard';
// import AdminDashboard from '../Layouts/DashboardLayout/AdminDashboard/AdminDashboard';
import AuthLayout from '../Layouts/AuthLayouts';
import MyBookings from '../Pages/Student/MyBookings';
import AllUsers from '../Pages/Admin/AllUsers';
import Earnings from '../Pages/Consultents/Earnings';
import Profile from '../Pages/Profile/Profile';
import Settings from '../Pages/Setting/Settings';
import Gigs from '../Pages/Consultents/Gig';
import MyStudents from '../Pages/Consultents/MyStudents';
import Dashboard from '../Layouts/DashboardLayout/Dashboard/Dashboard';
import ManageCandidates from '../Pages/Admin/ManageCandidates';
import Revenue from '../Pages/Admin/Revinue';
import AdminDashboard from '../Pages/Admin/AdminDashboard';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/consultants',
                element: <Consultants></Consultants>,
            },
            {
                path: '/student/my-bookings',
                element: <MyBookings></MyBookings>,
            },



            // DASHBOARD

            //    student
            {
                path: "/student/dashboard",
                element: <StudentDashboard></StudentDashboard>,
            },

            // consultant
            {
                path: "/consultant/dashboard",
                element: <ConsultantDashboard></ConsultantDashboard>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [

                    // colsultant
                    {
                        path: "/dashboard/my-gigs",
                        element: <Gigs></Gigs>
                    },
                    {
                        path: "/dashboard/my-students",
                        element: <MyStudents></MyStudents>
                    },

                    // admin
                    {
                        path: '/dashboard/admin-dashboard',
                        element: <AdminDashboard></AdminDashboard>
                    },
                    {
                        path: '/dashboard/admin/users',
                        element: <AllUsers></AllUsers>,
                    },
                    {
                        path: '/dashboard/admin/consultant-requests',
                        element: <ManageCandidates></ManageCandidates>
                    },
                    {
                        path: '/dashboard/admin/revenue',
                        element: <Revenue></Revenue>
                    },
                ]
            },

            // admin
            {
                path: "/admin/dashboard",
                element: <AdminDashboard></AdminDashboard>
            },

            // SETTINGS
            {
                path: "/settings",
                element: <Settings></Settings>
            },

            // PROFILE
            {
                path: "/profile",
                element: <Profile></Profile>
            },
        ]

    },

    // AUTH
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/auth/signin',
                element: <SignIn></SignIn>
            },
        ]
    }
])

export default Routes;