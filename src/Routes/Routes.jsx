import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import MyBookings from '../Pages/Student/MyBookings';
import AllUsers from '../Pages/Admin/AllUsers';
import Profile from '../Pages/Profile/Profile';
import Settings from '../Pages/Setting/Settings';
// import Gigs from '../Pages/Consultents/Gig';
import AuthLayout from '../Layouts/AuthLayouts';
import MyStudents from '../Pages/Consultents/MyStudents';
import Dashboard from '../Layouts/DashboardLayout/Dashboard/Dashboard';
import ManageCandidates from '../Pages/Admin/ManageCandidates';
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import AllTransactions from '../Pages/Admin/AllTranjections';
import ManageGigs from '../Pages/Admin/ManageGigs';
import Finance from '../Pages/Admin/Revenue/Finance';
import ConsultantDashboard from '../Pages/Consultents/ConsultantDashboard';
import Earnings from '../Pages/Consultents/Earnings';
import JoinConsultant from '../Pages/Student/JoinColsultant';
import UpcomingSessions from '../Pages/Consultents/UpcomingSessions';
import Gigs from '../Pages/Gigs/Gigs';
import GigDetails from '../Pages/Gigs/GigDetails';

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
                path: '/gigs',
                element: <Gigs></Gigs>
            },
            {
                path: '/gigs/:_id',
                element: <GigDetails></GigDetails>,
            },

            // DASHBOARD

            //    student

            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [

                    // student
                    {
                        path: '/dashboard/my-bookings',
                        element: <MyBookings></MyBookings>,
                    },
                    {
                        path: '/dashboard/join-consultant',
                        element: <JoinConsultant></JoinConsultant>
                    },

                    // colsultant
                    {
                        path: "/dashboard/consultant-dashboard",
                        element: <ConsultantDashboard></ConsultantDashboard>
                    },
                    {
                        path: "/dashboard/consultant-earnings",
                        element: <Earnings></Earnings>,
                    },
                    {
                        path: "/dashboard/upcoming-sessions",
                        element: <UpcomingSessions></UpcomingSessions>,
                    },

                    // TO DO
                    // {
                    // 
                 
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
                        path: '/dashboard/all-tranjection',
                        element: <AllTransactions></AllTransactions>
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
                        path: '/dashboard/admin/manage-gigs',
                        element: <ManageGigs></ManageGigs>
                    },
                    {
                        path: '/dashboard/admin/finance',
                        element: <Finance></Finance>
                    },
                ]
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