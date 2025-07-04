import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


function AuthLayout() {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('auth/signin') || location.pathname.includes('auth/signup')
    return (
        <div>
            <header>
                {noHeaderFooter || <Navbar></Navbar>}
            </header>
            
            <div className="">
                <Outlet></Outlet>
            </div>

            <footer>
               {noHeaderFooter ||  <Footer></Footer>}
            </footer>
        </div>)
}

export default AuthLayout