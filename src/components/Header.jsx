import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO_IMG from "../assets/nyaya_sarthak_logo.svg";
import BottomButtonHeader from "./HeaderComponents/BottomButtonHeader";
import SocialMediaLinks from "./HeaderComponents/SocialMediaLinks";
import LogoAndName from "./HeaderComponents/LogoAndName";

const navlinksArr = [
  {
    linkTitle: "About",
    linkPath: "/about",
  },
  {
    linkTitle: "Contact Us",
    linkPath: "/contact",
  },
  {
    linkTitle: "Our Team",
    linkPath: "/team",
  },
];

export default function Header() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // UGLY: REFACTOR YOUR CODE

  return (
    <nav className=" px-6 bg-[#202020] text-white top-0 sticky z-50 w-full py-2">
      {/*  NOTE: OUTER MOST DIV */}
      <section className="p-2 lg:p-0 flex flex-wrap lg:flex-nowrap items-center justify-around border-2 border-green-500 ">
        {/*----- NAME AND LOGO ------ */}
        <LogoAndName />
        {/*----- NAME AND LOGO ------ */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        >
          <RxHamburgerMenu size={25} />
        </button>
        {/* NOTE: LINKS */}
        <div
          className={` lg:flex ${
            isMobileMenuShown ? "" : "hidden"
          } w-full flex-row  lg:w-auto border-2 rounded-sm border-gray-400 lg:border-none mt-2 lg:my-0`}
        >
          {/* TO SEPARATE BOTTOM BUTTON HEADER COMPONENT AND OTHER LINKS IN MOBILE VIEW */}
          <section className={` border-2 border-yellow-400`}>
            <div
              className={`lg:flex-row flex flex-col space-y-2 lg:items-center border-2 border-orange-400 lg:space-x-4 lg:space-y-0 p-2 font-[Raleway] text-[16px] font-semibold`}
            >
              {navlinksArr.map((el, i) => {
                if (el.linkTitle === "About") {
                  return (
                    <div key={i}>
                      <div className=" font-medium  border-2 border-purple-400  hover:text-[#e1dcd6] flex items-center">
                        <Link to={el.linkPath}>{el.linkTitle}</Link>
                        <button
                          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                        >
                          <IoMdArrowDropdown className="cursor-pointer hover:scale-125" />
                        </button>
                      </div>

                      {/* DROPDOWN FOR ABOUT */}
                      <section
                        className={`${
                          isDropDownOpen ? "visible" : "hidden"
                        } border-[2px] border-gray-500 rounded-md space-y-1 my-2 p-1  lg:z-50 lg:border-2 lg:border-gray-700 lg:text-center  lg:p-2 lg:w-[10rem] lg:translate-y-2  lg:-translate-x-10 lg:absolute bg-[#202020]`}
                      >
                        <div className="hover:text-[#e1dcd6]">
                          <Link to="/about">Who We Are</Link>
                        </div>
                        <hr className="border-t border-gray-500" />
                        <div className="hover:text-[#e1dcd6]">
                          <Link to="/about/whatwedo">What We Do</Link>
                        </div>
                        <hr className="border-t border-gray-500" />
                        <div className="hover:text-[#e1dcd6]">
                          <Link to="/about/faqs">FAQS</Link>
                        </div>
                      </section>
                    </div>
                  );
                }
                if (el.linkTitle === "Our Team") {
                  return (
                    <button
                      className="hidden lg:block border-2 border-purple-400  rounded-md bg-[#eed814] hover:bg-[#afa016] transition-colors duration-1000 px-2 py-1 text-black text-[14px] font-bold"
                      key={i}
                    >
                      <Link to={el.linkPath}>{el.linkTitle}</Link>
                    </button>
                  );
                }
                return (
                  <div
                    className="hover:text-[#e1dcd6] border-2 border-purple-400 "
                    key={i}
                  >
                    <Link to={el.linkPath}>{el.linkTitle}</Link>
                  </div>
                );
              })}

              {/* SOCIAL MEDIA LINKS IN ONE DIV */}
              <SocialMediaLinks />
              {/* SOCIAL MEDIA LINKS IN ONE DIV */}
              {/* ORANGE DIV END */}
            </div>
            {/* BLUE DIV END */}
          </section>
          <BottomButtonHeader />
          {/* GREEN DIV END */}
        </div>
      </section>
    </nav>
  );
}
