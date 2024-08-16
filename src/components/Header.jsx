import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO_IMG from "../assets/nyaya_sarthak_logo.svg";
export default function Header() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className=" bg-[#000000dd] z-50 top-0 sticky text-white border border-black flex flex-wrap items-center justify-between p-4">
      <Link to="/" className="translate-x-2">
        <img
          src={`${LOGO_IMG}`}
          className="h-[3rem] w-[3rem] bg-white"
          alt="logo_img"
        />
      </Link>
      <button
        onClick={() => setIsMobileMenuShown((prev) => !prev)}
        className=" w-fit h-fit p-2 lg:hidden hover:bg-slate-500 border border-transparent focus:ring-2 focus:ring-gray-300 rounded-md relative  "
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* GENIUS TECHNIQUE w-full lg:w-auto , basically mobile-first approach use kr rhe h*/}
      <div
        className={`${
          isMobileMenuShown ? "" : "hidden"
        } w-full mt-4  lg:mt-0  lg:w-auto lg:block`} //ek toh block plus w-auto will only extend upto number of child elements this div has in it
      >
        <div className="flex p-2 flex-col text-start lg:flex-row space-y-2 lg:space-y-0 lg:space-x-3 border-2 border-slate-300 lg:border-transparent rounded-md font-[Raleway]   lg:font-semibold text-[14px]  lg:text-[18px]">
          <Link
            to="/about"
            className={`${
              isMobileMenuShown ? "hover:text-blue-500 hover:bg-slate-600" : ""
            } px-2 py-1  border rounded-md border-transparent`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${
              isMobileMenuShown ? "hover:text-blue-500 hover:bg-slate-600" : ""
            } px-2 py-1  border rounded-md border-transparent`}
          >
            Contact Us
          </Link>
          <Link
            to="/blogs"
            className={`${
              isMobileMenuShown ? "hover:text-blue-500 hover:bg-slate-600" : ""
            } px-2 py-1  border rounded-md border-transparent`}
          >
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
}
