import React, { useContext } from 'react'
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../Provider/Authprovider';
import Swal from 'sweetalert2'

const SignIn = () => {

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);

   const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        navigate(location?.state ? location.state : "/")
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
            showConfirmButton: false,
            timer: 1500
        });
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: 'please try again with valid email & password',
          icon: 'error',
          draggable: true
        })
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#013c36] px-4 py-10">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Left Side Graphic */}
        <div className="hidden md:flex items-center justify-center bg-[#013c36] w-1/2 p-10 relative">
          <img
            src="https://i.ibb.co/r2mXjypB/3094352.jpg"
            alt="Login Graphic"
            className="h-full w-full rounded-sm"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Login to HASHI</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />

            <button type="submit" className="btn w-full bg-orange-400 hover:bg-orange-500 text-white">
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Don’t have an account?{" "}
            <Link to="/auth/signup" className="text-orange-500 font-semibold hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;