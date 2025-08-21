import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

export default function CaptainProtectWrapper({ children }) {
  const token = localStorage.getItem("token");
  const { setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // if no token, redirect
    if (!token) {
      navigate("/captain/login");
      return;
    }

    // fetch profile
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Profile fetch error:", error);
        localStorage.removeItem("token");
        navigate("/captain/login");
      });
  }, [token, navigate, setCaptain]); // run only when token changes

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { CaptainDataContext } from "../context/CaptainContext";
// import axios from "axios";
// // import { response } from "express";
// export default function CaptainProtectWrapper({ children }) {
//   const token = localStorage.getItem("token");
//   const { captain, setCaptain } = useContext(CaptainDataContext);
//   const [isLoading, setIsLoading] = useState(true);
//   console.log(token);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!token) {
//       navigate("/captain/login");
//     }

//     axios
//       .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         if (response.status === 200) {
//           setCaptain(response.data.captain);
//           setIsLoading(false);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         localStorage.removeItem("token");
//         navigate("/captain/login");
//       });
//   }, [token]);

//   if (isLoading) {
//     return <div className="">Loading...</div>;
//   }
//   return <>{children}</>;
// }
