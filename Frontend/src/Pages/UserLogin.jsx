import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserLogin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [CaptainData, setCaptainData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    console.log(CaptainData);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
        <div className=" p-5">
          <h1 className="text-4xl font-bold text-gray-600">Uber</h1>
        </div>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          {/* Header */}
          <h1 className="text-xl font-medium text-black mb-6 text-center">
            What's your email & Password?
          </h1>
          {/* /* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          />
          {/* Email Input */}
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          />
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition"
          >
            Login
          </button>
          {/* Signup Option  */}
          <div className="w-full flex justify-center mt-4">
            <span className="text-gray-600">Don't have an account?</span>
            <Link
              to={"/signup"}
              className="ml-2 text-black font-medium hover:underline"
            >
              Sign up
            </Link>
          </div>
          {/* Divider */}
          <div className="flex items-center w-full my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
        </form>
        {/* Signin as Captain Button */}
        <div className="w-full space-y-3">
          <Link
            to={"/captain/login"}
            type="submit"
            className="w-full bg-[#e8bd95] text-white py-3 my-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition"
          >
            <button className="w-full bg-[#e8bd95]   rounded-lg text-lg font-medium hover:bg-gray-900 transition">
              Login as Captain
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
