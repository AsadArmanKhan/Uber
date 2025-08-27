import React from "react";
import { Link } from "react-router-dom";
// import loadingGif from "../assets/loading.gif"; // Make sure to add a loading GIF in your assets folder

export default function LookingForDriver(props) {
  return (
    <div className="flex items-center justify-center  bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <button
          onClick={() => props.setVehicleFound(false)}
        className="absolute right-5 top-5 text-2xl font-bold text-gray-600 z-10"
      >
         <i className="ri-arrow-down-s-line"></i>
      </button>
        <img
          className="w-80 h-50 mx-auto mb-4"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
          alt=""
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Looking for your driver...
        </h2>
        {/* Pickup */}
        <div className="border-b py-3">
          <h4 className="font-semibold text-lg flex items-center gap-2">
            <i className="ri-map-pin-fill text-gray-600"></i> 562/11-A
          </h4>
          <p className="text-sm text-gray-600">
            Kaikondrahalli, Bengaluru, Karnataka
          </p>
        </div>

        {/* Destination */}
        <div className="border-b py-3">
          <h4 className="font-semibold text-lg flex items-center gap-2">
            <i className="ri-map-pin-2-fill text-gray-600"></i> Third Wave
            Coffee
          </h4>
          <p className="text-sm text-gray-600">
            17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
            Karnataka
          </p>
        </div>

        {/* Price & Payment */}
        <div className="border-b py-3 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-lg">₹193.20</h4>
            <p className="text-sm text-gray-600">Cash Cash</p>
          </div>
          <i className="ri-wallet-3-fill text-2xl text-gray-600"></i>
        </div>
        <p className="text-gray-600">
          Please wait while we connect you with a driver
        </p>
      </div>
    </div>
  );
}
