import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";

export default function CaptainHome() {
  return (
    <div>
      <div className="h-screen">
        <Link to={"/captain/login"}>
          <div className="fixed bg-[#eee] rounded-2xl flex items-center justify-center  right-2 top-2 w-10 h-10 ">
            <i className="text-2xl ri-logout-box-r-line"></i>
          </div>
        </Link>
        <div className="h-3/5">
          <img
            className="h-full w-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt=""
          />
        </div>
        <div className="h-2/5">
          <CaptainDetails />
        </div>
      </div>
    </div>
  );
}
