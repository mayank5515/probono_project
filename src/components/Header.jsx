import { IoMdArrowDropdown } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO_IMG from "../assets/nyaya_sarthak_logo.svg";
export default function Header() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // UGLY: REFACTOR YOUR CODE
  return (
    <nav className=" bg-[#000000dd] z-50 top-0 sticky text-white border border-black flex flex-wrap items-center justify-between p-4">
      <div className=" flex p-2 space-x-4 items-center ">
        <Link to="/" className="translate-x-2 mr-[0.75rem]">
          <img
            src={`${LOGO_IMG}`}
            className="h-[3rem] w-[3rem] bg-white"
            alt="logo_img"
          />
        </Link>
        {/* hover:scale-105 transition  duration-400 NOTE: to scale*/}
        <Link
          to="/"
          className="text-2xl font-[Raleway] font-semibold tracking-wide"
        >
          NYAYASARTHAK
        </Link>
      </div>
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
          <div className=" flex-col">
            {/* ABOUT AND DROPDOWN ARROW */}
            <div className="flex space-x-1 items-center lg:translate-y-1">
              <div className="">
                <Link
                  to="/about"
                  className={`${
                    isMobileMenuShown
                      ? "lg:hover:bg-transparent lg:hover:text-slate-400 hover:text-blue-500   "
                      : "hover:text-slate-400"
                  } px-2 py-1  border rounded-md border-transparent`}
                >
                  About
                </Link>
              </div>
              <button onClick={() => setIsDropDownOpen((prev) => !prev)}>
                <IoMdArrowDropdown size={20} />
              </button>
            </div>
            {/*  */}
            <div
              className={`lg:border-2 lg:border-grey p-2 flex-col lg:text-center items-center space-y-2 ${
                isDropDownOpen ? "" : "hidden"
              } transition ease-in-out z-10 lg:absolute lg:translate-y-2 lg:bg-[#000000dd]`}
            >
              <div className="w-full hover:border-2 hover:border-gray-700">
                <Link
                  to="/about/whatWeDo"
                  className={`px-2 py-1 rounded-md hover:text-blue-500 lg:hover:text-slate-300`}
                >
                  What We Do ?
                </Link>
              </div>
              <div className="w-full hover:border-2 hover:border-gray-700">
                <Link
                  to="/about/whatWeDo"
                  className={`px-2 py-1 rounded-md hover:text-blue-500 lg:hover:text-slate-300`}
                >
                  FAQS
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className={`${
              isMobileMenuShown
                ? " lg:hover:bg-transparent lg:hover:text-slate-400 hover:text-blue-500 "
                : "hover:text-slate-400"
            } px-2 py-1  border rounded-md border-transparent`}
          >
            Contact Us
          </Link>
          <Link
            to="/blogs"
            className={`${
              isMobileMenuShown
                ? "lg:hover:bg-transparent lg:hover:text-slate-400 hover:text-blue-500 "
                : "hover:text-slate-400"
            } px-2 py-1  border rounded-md border-transparent`}
          >
            Blogs
          </Link>
          {/* SOCIAL MEDIA LINKS */}
          <div className="flex items-center space-x-1">
            <a
              href="www.linkedin.com"
              className=" p-1 text-blue-600 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="www.instagram.com"
              className=" p-1 text-blue-600 hover:text-blue-400 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="www.twitter.com"
              className=" p-1 text-blue-600 hover:text-blue-400 transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
