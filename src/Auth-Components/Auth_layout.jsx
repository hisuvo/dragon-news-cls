import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Auth_layout() {
  return <div className="bg-[#E7E7E7] p-10 font-poppins">
    <nav className='w-11/12 mx-auto'>
        <Navbar/>
    </nav>
    <Outlet/>
  </div>;
}
