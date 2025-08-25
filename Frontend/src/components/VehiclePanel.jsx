import React from "react";

export default function VehiclePanel(props) {
  return (
    <>
      <div>
        {" "}
        <div className="flex justify-between">
          <h5 className="text-2xl font-medium">Choose your Vehicle</h5>

          <button
            onClick={() => props.setVehiclePanel(false)}
            className="absolute right-5 top-5 text-2xl font-bold text-gray-600 z-10"
          >
            <i className="ri-arrow-down-s-line"></i>
          </button>
        </div>
        {/* Motorcycle */}
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
          }}
          className="flex w-full items-center active:border-2 gap-3 rounded-2xl p-3 justify-between"
        >
          <img
            className="h-15"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>
              </span>
              1
            </h4>
            <h5 className="font-medium text-sm">1 min away</h5>
            <p className="font-normal text-xs">Quick bike rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹89.50</h2>
        </div>
        {/* Auto */}
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
          }}
          className="flex w-full items-center active:border-2  gap-3 rounded-2xl p-3 justify-between"
        >
          <img
            className="h-15"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-base">
              Auto{" "}
              <span>
                <i className="ri-user-3-fill"></i>
              </span>
              3
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs">Convenient auto rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹145.00</h2>
        </div>
        {/* Electric Auto */}
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
          }}
          className="flex w-full items-center  gap-3 active:border-2 rounded-2xl p-3 justify-between"
        >
          <img
            className="h-15"
            src="https://mahindralastmilemobility.com/assets/front/images/treo-metal/slider/1.png"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-base">
              Electric Auto{" "}
              <span>
                <i className="ri-user-3-fill"></i>
              </span>
              3
            </h4>
            <h5 className="font-medium text-sm">4 mins away</h5>
            <p className="font-normal text-xs">Eco-friendly auto rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹155.00</h2>
        </div>
        {/* UberGO */}
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
          }}
          className="flex w-full items-center  gap-3 rounded-2xl p-3 active:border-2 justify-between"
        >
          <img
            className="h-15"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-base">
              UberGO{" "}
              <span>
                <i className="ri-user-3-fill"></i>
              </span>
              4
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹193.20</h2>
        </div>
      </div>
    </>
  );
}
