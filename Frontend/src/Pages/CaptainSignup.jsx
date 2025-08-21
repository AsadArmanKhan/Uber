import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaFacebookF, FaTwitter } from "react-icons/fa";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

export default function CaptainSignup() {
  // State Management
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  // const [UserData, setUserData] = useState({});
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
    console.log(captainData);
    // Reset form
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Images-for-Project/Login-image.png')" }}
    >
      <div className="relative z-10 w-full max-w-md  px-6 py-2   bg-opacity-70 rounded-xl">
        {/* Header */}
        <h1 className=" text-white text-5xl font-bold mb-8 text-center tracking-wider">
          UBER
        </h1>

        {/* Sign Up Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="space-y-4">
            <h2 className="text-white text-xl font-semibold mb-2">
              Personal Information
            </h2>
            <div className="flex gap-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-1/2 px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
                placeholder="First Name"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-1/2 px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
              />
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
            />
          </div>

          {/* Vehicle Information Section */}
          <div className="space-y-4">
            <h2 className="text-white text-xl font-semibold mb-2">
              Vehicle Information
            </h2>
            <div className="flex gap-4">
              <input
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className="w-1/2 px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
                placeholder="Vehicle Color"
              />
              <input
                type="text"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className="w-1/2 px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
                placeholder="Vehicle Plate"
              />
            </div>

            <div className="flex gap-4">
              <input
                type="number"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className="w-1/2 px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
                placeholder="Vehicle Capacity"
              />
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-1/2 px-4 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400"
              >
                <option value="" className="text-black">
                  Vehicle Type
                </option>
                <option value="car" className="text-black">
                  Car
                </option>
                <option value="motorcycle" className="text-black">
                  Motorcycle
                </option>
                <option value="auto" className="text-black">
                  Auto
                </option>
                <option value="electricAuto" className="text-black">
                  Electric Auto
                </option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Sign Up as Captain
          </button>
        </form>

        {/* Footer Links */}
        <div className="mb-2 space-y-4">
          <div className="flex justify-center text-sm"></div>
          <span className="text-white">Already a captain?</span>
          <Link
            to="/captain/login"
            className="ml-2 text-blue-400 hover:underline"
          >
            Login here
          </Link>
        </div>

        <div className="flex justify-center space-x-6 mb-2 text-white text-lg">
          <FaFacebookF className="cursor-pointer hover:text-blue-400 transition-colors" />
          <FaTwitter className="cursor-pointer hover:text-blue-400 transition-colors" />
        </div>

        <Link
          to="/login"
          className="block w-full bg-gray-600 text-white py-3 rounded-lg text-center font-medium hover:bg-gray-700 transition-colors"
        >
          Login as User
        </Link>
      </div>
    </div>
  );
}
