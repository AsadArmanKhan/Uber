import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaFacebookF, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

export default function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UserData, setUserData] = useState({});
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captain = { email: email, password: password };
    console.log(captain);
    setEmail("");
    setPassword("");

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
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
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div className="flex items-center bg-white rounded-lg px-3">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 py-3 outline-none bg-transparent"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center bg-white rounded-lg px-3">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 py-3 outline-none bg-transparent"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
          >
            Sign in
          </button>
        </form>

        {/* Signup Option */}
        <div className="flex justify-center mt-4 text-sm">
          <span className="text-white">Join a Fleet?</span>
          <Link
            to={"/captain/signup"}
            className="ml-2 text-gray-300 font-medium hover:underline"
          >
            Register as captain
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
