import React from "react";

export default function WaitForDriver(props) {
  return (
    <>
      <div>
        <div className="w-full h-100 bg-white bottom-0 left-0 rounded-t-2xl shadow-lg p-5">
          <button
            onClick={() => props.setDriverFound(false)}
            className="absolute right-5 top-5 text-2xl font-bold text-gray-600 z-10"
          >
            <i className="ri-arrow-down-s-line"></i>
          </button>
          {/* Driver + Car Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg" // Driver photo
                alt="Driver"
                className="h-12 w-12 rounded-full"
              />
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png" // Car photo
                alt="Driver"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-lg">KA15AK00-0</h4>
                <p className="text-sm text-gray-600">
                  White Suzuki S-Presso LXI
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">SANTH</p>
              <div className="flex items-center justify-end gap-1 text-sm text-gray-600">
                <i className="ri-star-fill text-yellow-500"></i>
                4.9
              </div>
            </div>
          </div>

          {/* Message Box */}
          <div className="mt-4">
            <div className="flex items-center border rounded-xl px-3 py-2">
              <input
                type="text"
                placeholder="Send a message..."
                className="flex-1 outline-none text-sm"
              />
              <i className="ri-send-plane-2-fill text-gray-600 text-lg"></i>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-5">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100">
                <i className="ri-shield-check-line text-xl text-blue-600"></i>
              </div>
              <p className="text-xs mt-1">Safety</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100">
                <i className="ri-share-forward-line text-xl text-blue-600"></i>
              </div>
              <p className="text-xs mt-1">Share my trip</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100">
                <i className="ri-phone-fill text-xl text-blue-600"></i>
              </div>
              <p className="text-xs mt-1">Call driver</p>
            </div>
          </div>

          {/* Pickup Address */}
          <div className="border-t mt-5 pt-4">
            <h4 className="font-semibold text-base flex items-center gap-2">
              <i className="ri-map-pin-fill text-gray-600"></i> 562/11-A
            </h4>
            <p className="text-sm text-gray-600">
              Kaikondrahalli, Bengaluru, Karnataka
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
