import React from "react";
import { Link } from "react-router-dom";

export default function CaptainHome() {
  return (
    <div>
      <div className="h-screen">
        <Link to={"/captain-home"}>
          <div className="fixed bg-[#eee] rounded-2xl flex items-center justify-center  right-2 top-2 w-10 h-10 ">
            <i className="text-2xl ri-logout-box-r-line"></i>
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
        <div className="">
          <div className="">
            <img src="" alt="" />
            <h4>Harish Malhotra</h4>
          </div>
          <div className="">
            <h4>₹295</h4>
            <p>Earned</p>
          </div>
        </div>
        <div className="">
          <div className=""><i class="ri-time-line"></i></div>
          <div className=""><i class="ri-speed-up-fill"></i></div>
          <div className=""></div>
        </div>
        </div>
      </div>
    </div>
  );
}
