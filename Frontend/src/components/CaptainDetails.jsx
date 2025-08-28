import React from "react";
import RidePopUp from "./RidePopUp";

export default function CaptainDetails() {
  return (
    <>
      <div className="shadow-2xl shadow-gray-200 rounded-xl p-2 flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <img
            className="rounded-full w-15 h-15 shadow-gray-400 shadow-2xl object-cover"
            src="https://thispersonnotexist.org/static/img/Random_female_face_1.jpeg"
            alt=""
          />
          <h4 className="text-lg font-medium  p-2 ">jennifer lopez</h4>
        </div>
        <div className="shadow-2xl  p-4 rounded-xl shadow-gray-400">
          <h4 className="text-xl flex font-medium ">
            <p className=" text-green-600">₹295.20</p>
          </h4>
          <p className="font-medium text-sm flex justify-center  text-gray-600">
            Earned
          </p>
        </div>
      </div>
      <div className="flex justify-evenly bg-gray-100 shadow-amber-200   p-1 mt-4 rounded-2xl   items-start gap-2">
        <div className="text-center shadow-2xl  bg-white rounded-xl p-3 ">
          <i className="ri-time-line text-3xl mb-5  font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-xs text-gray-600">Hours Online</p>
        </div>
        <div className="text-center   shadow-2xl bg-white rounded-xl p-3  ">
          <i className="ri-speed-up-line text-3xl mb-5  font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-xs text-gray-600">Hours Online</p>
        </div>
        <div className="text-center shadow-2xl  bg-white rounded-xl p-3   ">
          <i className="ri-booklet-line text-3xl mb-5  font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-xs text-gray-600">Hours Online</p>
        </div>
      </div>
      {/* <div className="form-animate w-full  z-50 bg-white bottom-0 fixed py-6 px-3  ">
        <RidePopUp />
      </div> */}
    </>
  );
}
