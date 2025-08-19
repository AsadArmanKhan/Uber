import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [UserData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(UserData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/Images-for-Project/Login-image.png')",
      }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm px-6 text-center">
        {/* Uber Logo */}
        <h1 className="text-white text-5xl font-bold mb-12 tracking-wider">
          UBER
        </h1>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First Name + Last Name */}
          <div className="flex gap-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-1/2 px-4 py-2 border rounded-lg text-white focus:ring-2 focus:ring-black"
              placeholder="First Name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 border rounded-lg  text-white focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg text-white focus:ring-2 focus:ring-black"
          />

          {/* Password */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg text-white focus:ring-2 focus:ring-black"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Signup Option */}
        <div className="flex justify-center mt-4 text-sm">
          <span className="text-white">Join a Fleet?</span>
          <Link
            to={"/captain/login"}
            className="ml-2 text-gray-300 font-medium hover:underline"
          >
            Login as captain
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6 text-white text-lg">
          <FaFacebookF className="cursor-pointer hover:text-gray-400" />
          <FaTwitter className="cursor-pointer hover:text-gray-400" />
        </div>

        {/* Signup as User Button */}
        <div className="mt-6">
          <Link
            to={"/login"}
            className="w-full bg-gray-500 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition block"
          >
            Login as User
          </Link>
        </div>
      </div>
    </div>
  );
}
