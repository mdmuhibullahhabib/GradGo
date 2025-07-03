import React, { useContext } from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../Provider/Authprovider';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2'

const SignUp = () => {

  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { user, signUp, setUser, updateUserProfile } = useContext(AuthContext);


  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;

    const userData = { name, email }
    setError('');
    if (password.length < 5) {
      setError("Must be more the 5 character long");
      return;
    }
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    // if (!passwordRegex.test(password)) {
    //   setError("Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.")
    //   return;
    // }

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: image })
        .then(() => {
          axiosPublic.post('/users', userData)
          .then(res => {
            if (res.data.insertedId) {
              console.log('add to database', res.data)
              setUser({ ...user, displayName: name, photoURL: image });
              navigate("/");
              Swal.fire({
                title: "Registration Successfully!",
                icon: "success",
                draggable: true
              });
            }
          })
        })
      })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#013c36] px-4 py-10">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Left Side Graphic */}
        <div className="hidden md:flex items-center justify-center bg-[#013c36] w-1/2 p-10 relative">
          <img
            src="https://i.ibb.co/hRC2CT49/6333050.jpg"
            alt="Signup Graphic"
            className="h-full w-full rounded-sm"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up to HASHI</h2>

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Enter your image URL"
              className="input input-bordered w-full"
              required
            />
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
              Create Account
            </button>
          </form>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <p className="text-center mt-4 text-sm">
            Already registered?{" "}
            <Link to="/signin" className="text-orange-500 font-semibold hover:underline">
              SIGN IN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;