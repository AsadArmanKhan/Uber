import React from "react";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <>
      <div>
        <div className="relative min-h-screen w-full bg-pink-200 flex flex-col">
          {/* Background Image */}
          <div className="absolute">
            <img
              src="/Images-for-Project/Get-Started.png"
              alt="Uber Intro"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay for slight fade */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div> */}

          {/* Header */}
          <div className="relative flex justify-start p-5">
            <h1 className="text-4xl font-semibold text-black">Uber</h1>
          </div>

          {/* Bottom Card */}
          <div className="relative mt-auto bg-white rounded-t-3xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-black mb-6">
              Get started with Uber
            </h2>
            <Link to={'/login'}>
              <button className="w-full bg-black text-white py-4 rounded-xl text-lg font-medium hover:bg-gray-900 transition">
                Continue →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
