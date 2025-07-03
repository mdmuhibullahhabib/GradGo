import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


function AuthLayout() {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('auth/login') || location.pathname.includes('auth/register')
    return (
        <div>
            <header>
                {noHeaderFooter || <Navbar></Navbar>}
            </header>
            
            <div className="mt-14">
                <Outlet></Outlet>
            </div>

            <footer>
               {noHeaderFooter ||  <Footer></Footer>}
            </footer>
        </div>)
}

export default AuthLayout