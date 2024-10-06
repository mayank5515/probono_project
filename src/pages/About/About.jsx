import { NavLink, Outlet } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className="bg-white px-8 p-4 flex items-center justify-between font-bold text-sm">
        <div className="flex  space-x-3 lg:space-x-10 ">
          <div>
            <NavLink
              to="/about"
              end
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-600 hover:text-blue-800"
                    : "text-black hover:text-gray-400"
                } transistion-colors duration-300`
              }
            >
              WHO WE ARE
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about/whatwedo"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-600 hover:text-blue-300"
                    : "text-black hover:text-gray-600"
                } transistion-colors duration-300`
              }
            >
              WHAT WE DO
            </NavLink>
          </div>
        </div>
        <div className="hidden lg:flex ">
          <button className="border w-44 hover:opacity-65  border-blue-600 p-4 text-sm  text-black">
            SHARE THIS PAGE
          </button>
        </div>
      </div>
      <Outlet />
      {/* IT SHOULD HAVE BEEN WHO WE ARE PAGE */}
      {/* <WhatWeDo /> */}
    </>
  );
}
