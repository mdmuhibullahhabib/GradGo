import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Consultants from '../Pages/Consultents/Consultants';
import StudentDashboard from '../Layouts/DashboardLayout/StudentDashboard/StudentDashboard';
import ConsultantDashboard from '../Layouts/DashboardLayout/ConsultantDashboard/ConsultantDashboard';
import AdminDashboard from '../Layouts/DashboardLayout/AdminDashboard/AdminDashboard';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
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

//             <Route path="/student/dashboard" element={<StudentDashboard />} />
// <Route path="/consultant/dashboard" element={<ConsultantDashboard />} />
// <Route path="/admin/dashboard" element={<AdminDashboard />} />
            // {
            //     path: '/',
            //     element: <Home></Home>
            // },
        ]
    }
])

export default Routes;