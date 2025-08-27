import React from "react";

export default function RidePopUp() {
  return (
    <>
      <div>
        <div className="w-full bg-white bottom-0 left-0 rounded-t-2xl shadow-lg ">
          <div className="p-1 text-center text-2xl mb-5 font-semibold ">
            A new ride for our Captain!
          </div>
          <div className="flex mt-7 items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-23 h-23 rounded-full object-fit"
                src="https://www.zmo.ai/wp-content/uploads/2023/11/ImgCreator.ai-1-9-6-0-long-redhead-cute-young-woman-looking-at-the-camera-wearing-a-black-French-beret-in-a-cute.webp"
                alt=""
              />
              <h2 className="text-xl font-medium">Selena Gomez</h2 >
            </div>
              <h5 className="text-lg font-semibold">10.37/km</h5>
          </div>
          {/* <button
            onClick={() => props.setConfirmRidePanel(false)}
            className="absolute right-5 top-5 text-2xl font-bold text-gray-600 z-10"
          >
            <i className="ri-arrow-down-s-line"></i>
          </button> */}
          {/* Car Image */}

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

          {/* Confirm Button */}
          <div className="mt-5 flex justify-around  w-full">
            <button className="w-30 bg-gray-300 text-black py-3 rounded-xl font-semibold text-lg">
              Reject
            </button>
            <button className="w-30 bg-green-400 text-white  py-3 rounded-xl font-semibold text-lg">
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
