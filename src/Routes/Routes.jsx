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
import AdminDashboard from '../Layouts/DashboardLayout/AdminDashboard/AdminDashboard';
import AuthLayout from '../Layouts/AuthLayouts';
import MyBookings from '../Pages/Student/MyBookings';
import AllUsers from '../Pages/Admin/AllUsers';
import Earnings from '../Pages/Consultents/Earnings';

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
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/consultants',
                element: <Consultants></Consultants>
            },
            {
                path: '/student/my-bookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/consultant/earnings',
                element: <Earnings></Earnings>
            },
            {
                path: '/admin/users',
                element: <AllUsers></AllUsers>
            },
            {
                path: "/student/dashboard",
                element: <StudentDashboard></StudentDashboard>
            },
            {
                path: "/consultant/dashboard",
                element: <ConsultantDashboard></ConsultantDashboard>
            },
            {
                path: "/admin/dashboard",
                element: <AdminDashboard></AdminDashboard>
            },
        ]

    },
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