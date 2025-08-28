import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import gsap from "gsap";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

export default function CaptainHome() {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);
  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        y: 0, // slide up
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        y: "100%",
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  }, [ridePopUpPanel]);

  useGSAP(() => {
    if (confirmRidePopUp) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        y: 40, // slide up
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        y: "100%",
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  }, [confirmRidePopUp]);

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
        <div className="h-2/5 ">
          <CaptainDetails />
        </div>
        <div
          ref={ridePopUpPanelRef}
          className="fixed form-animate w-full z-50  bg-white bottom-0 py-6 px-3  "
        >
          <RidePopUp  setConfirmRidePopUp={setConfirmRidePopUp}  setRidePopUpPanel={setRidePopUpPanel} />

        </div>
        <div
          ref={confirmRidePopUpPanelRef}
          className="fixed form-animate mt-10 w-full z-50 translate-y-full bg-white bottom-0 py-6 px-3  "
        >
          <ConfirmRidePopUp
            setConfirmRidePopUp={setConfirmRidePopUp}
            setRidePopUpPanel={setRidePopUpPanel}
          />
        </div>
      </div>
    </div>
  );
}
