import React from "react";

export default function LocationSearchPanels(props) {
  console.log(props);

  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "42A, Central Plaza, MG Road, Mumbai",
    "15C, Tech Park, Electronic City, Bangalore",
    "78D, Marina Beach Road, Chennai",
    "56E, Connaught Place, New Delhi",
    "93F, Salt Lake City, Kolkata",
  ];
  return (
    <>
      <div className="flex flex-col">
        {locations.map(function (element, id) {
          return (
            <div
              key={id}
              onClick={() => {
                props.setVehiclePanel(true);
                props.setPanelOpen(false);
              }}
              className="flex border-2 border-gray-50 p-2 active:border-2 active:border-black rounded-xl  gap-3  my-1 items-center"
            >
              <h2 className="bg-[#eee] p-1 rounded-full">
                <i className="ri-map-pin-fill"></i>
              </h2>
              <h4>{element}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
