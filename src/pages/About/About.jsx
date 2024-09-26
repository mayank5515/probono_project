import React from "react";
import { NavLink } from "react-router-dom";
import WhatWeDo from "../AboutPages/WhatweDo";
export default function About() {
  return (
    <>
      <div className="bg-white px-10 p-5 flex items-center justify-between font-bold text-sm">
        <div className="flex justify-between space-x-12">
          <div>
            <NavLink 
              to="/about"
              className={
                ({isActive}) => 
                  `${isActive ? "text-blue-600" : "text-black"} hover:text-blue-800`
              }
            >
              WHAT WE ARE
            </NavLink>
          </div>
          <div>
            <NavLink 
              to="/whatwedo"
              className={
                ({isActive}) => 
                  `${isActive ? "text-blue-600" : "text-black"} hover:text-blue-800`
              }
            >
              WHAT WE DO
            </NavLink>
          </div>
        </div>
        <div>
          <button className="border w-44  border-blue-600 p-4 text-sm">
            SHARE THIS PAGE
          </button>
        </div>
      </div>
      <WhatWeDo />
    </>
  );
}
