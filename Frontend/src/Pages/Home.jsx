import React, { useState, useRef, useEffect, useActionState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanels from "../components/LocationSearchPanels";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";

export default function Home() {
  const [pickup, setPickup] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [destination, setDestination] = useState("");
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const VehiclePanelRef = useRef(null);
  const ConfirmRideRef = useRef(null);
  const panelRef = useRef(null);
  const imgRef = useRef(null);
  const formRef = useRef(null);
  const searchRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (panelOpen) {
      // Expand panel
      gsap.to(panelRef.current, {
        height: "100%",
        duration: 0.6,
        ease: "power3.out",
      });

      // Fade out image
      gsap.to(imgRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      // Animate form elements (inputs + line together)
      gsap.fromTo(
        formRef.current.querySelectorAll(".form-animate"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      // Show LocationSearchPanels
      gsap.to(searchRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        padding: 20,
        ease: "power3.out",
        delay: 0.3,
      });
    } else {
      // Collapse panel
      gsap.to(panelRef.current, {
        height: "30%",
        duration: 0.6,
        ease: "power3.inOut",
      });

      // Bring image back
      gsap.to(imgRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      });

      // Hide LocationSearchPanels
      gsap.to(searchRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [panelOpen]);

  useEffect(() => {
    if (vehiclePanel) {
      gsap.to(VehiclePanelRef.current, {
        y: 0, // slide up
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(VehiclePanelRef.current, {
        y: "100%", // slide down
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  }, [vehiclePanel]);
  useEffect(() => {
    if (confirmRidePanel) {
      gsap.to(ConfirmRideRef.current, {
        y: 0, // slide up
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(VehiclePanelRef.current, {
        y: "100%", // slide down
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  }, [confirmRidePanel]);

  return (
    <>
      <div className="h-screen relative overflow-hidden ">
        {/* Background Image */}
        <div className="h-screen w-screen">
          <img
            ref={imgRef}
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            className="h-screen w-screen object-cover"
          />
        </div>

        {/* Panel */}
        <div className="flex flex-col justify-end h-screen absolute w-full top-0">
          <div
            ref={panelRef}
            className="h-[30%] p-5 bg-white relative rounded-t-2xl shadow-lg overflow-hidden"
          >
            {/* Cross button */}
            {panelOpen && (
              <button
                onClick={() => setPanelOpen(false)}
                className="absolute right-5 top-5 text-2xl font-bold text-gray-600 z-10"
              >
                <i className="ri-arrow-down-s-line"></i>
              </button>
            )}

            <h4 className="text-2xl font-semibold">Find a trip</h4>

            {/* Form with line + inputs */}
            <form ref={formRef} onSubmit={submitHandler} className="relative">
              {/* Line inside form */}
              <div className="form-animate absolute top-[25px] left-7 z-20 bg-gray-600 rounded-full h-20 w-1"></div>

              <input
                onClick={() => setPanelOpen(true)}
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="form-animate bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5 relative z-10"
                type="text"
                placeholder="Add a pick-up location"
              />

              <input
                onClick={() => setPanelOpen(true)}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="form-animate bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3 relative z-10"
                type="text"
                placeholder="Enter your destination "
              />
            </form>

            {/* Location Search Panel - hidden by default */}
            <div
              ref={searchRef}
              className="overflow-hidden opacity-0 h-0 transition-all p-0"
            >
              <LocationSearchPanels
                vehiclePanel={vehiclePanel}
                setVehiclePanel={setVehiclePanel}
                panelOpen={panelOpen}
                setPanelOpen={setPanelOpen}
              />
            </div>
          </div>
        </div>

        <div
          ref={VehiclePanelRef}
          className="form-animate w-full z-50 bg-white bottom-0 absolute py-6 px-3 translate-y-full "
        >
          <VehiclePanel
            setConfirmRidePanel={setConfirmRidePanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
        <div
          ref={ConfirmRideRef}
          className="form-animate w-full z-50 bg-white bottom-0 absolute py-6 px-3 translate-y-full "
        >
          <ConfirmRide
            setConfirmRidePanel={setConfirmRidePanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
    </>
  );
}
