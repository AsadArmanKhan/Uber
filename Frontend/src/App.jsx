import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./Pages/Start";
import UserLogin from "./Pages/UserLogin";
import UserSignup from "./Pages/UserSignup";
import CaptainLogin from "./Pages/CaptainLogin";
import CaptainSignup from "./Pages/CaptainSignup";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Start />} />

        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain/login" element={<CaptainLogin />} />
        <Route path="/captain/signup" element={<CaptainSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
