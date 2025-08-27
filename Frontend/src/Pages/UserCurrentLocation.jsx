import React from "react";
import { Link } from "react-router-dom";

export default function UserCurrentLocation() {
  return (
    <div className="h-screen">
      <Link to={'/home'}>
        <div className="fixed bg-[#eee] rounded-2xl flex items-center justify-center  right-2 top-2 w-10 h-10 ">
          <i className="text-2xl ri-home-3-fill"></i>
        </div>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        {/* Car Image */}
        <div className="flex  gap-2 ">
          <img
            className="h-18"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
            alt="Car"
          />
          {/* Driver + Car Info */}
          <div className="flex w-full items-center">
            <div className="flex w-full items-center gap-3">
              <div className="w-full">
                <h4 className="font-semibold text-lg">KA15AK00-0</h4>
                <p className="text-sm text-gray-600">
                  White Suzuki <br /> S-Presso LXI
                </p>
              </div>
              <div className="w-full">
                <p className="text-2xl font-medium">SANTH</p>
                {/* <div className="py-2 flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-lg">₹193.20</h4>
                    <p className="text-sm text-gray-600">Cash Cash</p>
                  </div>
                  <i className="ri-wallet-3-fill text-2xl text-gray-600"></i>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Pickup */}
        {/* <div className="border-b py-3">
          <h4 className="font-semibold text-lg flex items-center gap-2">
            <i className="ri-map-pin-fill text-gray-600"></i> 562/11-A
          </h4>
          <p className="text-sm text-gray-600">
            Kaikondrahalli, Bengaluru, Karnataka
          </p>
        </div> */}

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
        <button className="w-full bg-black text-white mt-3 mb-1 font-semibold p-4 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
}
