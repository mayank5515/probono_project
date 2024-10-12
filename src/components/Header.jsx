import { IoMdArrowDropdown } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO_IMG from "../assets/nyaya_sarthak_logo.svg";

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

  // const onHoverShowDropDown =(e)=>{
  //   if(!ishove)
  // }

  return (
    <nav className=" px-6 bg-[#202020] text-white top-0 sticky z-50 w-full py-2">
      {/*  NOTE: OUTER MOST DIV */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-around border-2 border-green-500 ">
        {/* NAME AND LOGO */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link to="/">
            <img
              src={`${LOGO_IMG}`}
              className="h-[3rem] w-[3rem] bg-white"
              alt="logo_img"
            />
          </Link>
          <h1 className="text-2xl font-semibold">
            <Link to="/">NYAYASARTHAK</Link>
          </h1>
        </div>
        <button className="lg:hidden">
          <RxHamburgerMenu size={25} />
        </button>
        {/* NOTE: LINKS */}
        <div className=" w-full lg:w-auto lg:flex-row   flex flex-col   space-y-2  lg:items-center border-2 border-orange-400 lg:space-x-4 lg:space-y-0 p-2 font-[Raleway] text-[16px] font-semibold">
          {navlinksArr.map((el, i) => {
            if (el.linkTitle === "About") {
              return (
                <div key={i}>
                  <div className=" font-medium  border-2 border-purple-400  hover:text-[#e1dcd6] flex items-center">
                    <Link to={el.linkPath}>{el.linkTitle}</Link>
                    <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                      <IoMdArrowDropdown className="cursor-pointer hover:scale-125" />
                    </button>
                  </div>
                  {/* <div
                    className={`${
                      isDropDownOpen ? "visible" : "hidden"
                    } border-[2px] border-gray-500 rounded-md space-y-1 my-2 p-1 `}
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
                  </div> */}
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
          <div className="flex items-center  space-x-4 border-2 border-purple-400 ">
            <a
              href="www.linkedin.com"
              className="text-blue-600 hover:text-blue-400 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="www.instagram.com"
              className="text-blue-600 hover:text-blue-400 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="www.twitter.com"
              className="text-blue-600 hover:text-blue-400 transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
          {/* SOCIAL MEDIA LINKS IN ONE DIV */}
        </div>
        <button className="lg:hidden border-2 border-purple-400  rounded-md bg-[#eed814] my-3 hover:bg-[#afa016] transition-colors duration-1000 px-2 py-1 text-black text-[20px] font-bold">
          <Link to="/team">Our Team</Link>
        </button>
      </div>
    </nav>
  );
}

//  <nav className=" bg-[#000000dd] z-50 top-0 sticky text-white border border-black flex flex-wrap items-center justify-between p-4">
//       <div className=" flex p-2 space-x-4 items-center ">
//         <Link to="/" className="translate-x-2 mr-[0.75rem]">
//           <img
//             src={`${LOGO_IMG}`}
//             className="h-[3rem] w-[3rem] bg-white"
//             alt="logo_img"
//           />
//         </Link>
//         {/* hover:scale-105 transition  duration-400 NOTE: to scale*/}
//         <Link
//           to="/"
//           className="text-2xl font-[Raleway] font-semibold tracking-wide"
//         >
//           NYAYASARTHAK
//         </Link>
//       </div>
//       <button
//         onClick={() => setIsMobileMenuShown((prev) => !prev)}
//         className=" w-fit h-fit p-2 lg:hidden hover:bg-slate-500 border border-transparent focus:ring-2 focus:ring-gray-300 rounded-md relative  "
//       >
//         <RxHamburgerMenu size={25} />
//       </button>
//       {/* GENIUS TECHNIQUE w-full lg:w-auto , basically mobile-first approach use kr rhe h*/}
//       <div
//         className={`${
//           isMobileMenuShown ? "" : "hidden"
//         } w-full mt-4  lg:mt-0  lg:w-auto lg:block`} //ek toh block plus w-auto will only extend upto number of child elements this div has in it
//       >
//         <div className="flex p-2 flex-col text-start lg:flex-row space-y-2 lg:space-y-0 lg:space-x-3 border-2 border-slate-300 lg:border-transparent rounded-md font-[Raleway]   lg:font-semibold text-[14px]  lg:text-[18px]">
//           <div className=" flex-col">
//             {/* ABOUT AND DROPDOWN ARROW */}
//             <div className="flex space-x-1 items-center lg:translate-y-1">
//               <div className="">
//                 <Link
//                   to="/about"
//                   className={`${
//                     isMobileMenuShown
//                       ? "lg:hover:bg-transparent lg:hover:text-slate-400 hover:text-blue-500   "
//                       : "hover:text-slate-400"
//                   } px-2 py-1  border rounded-md border-transparent`}
//                 >
//                   About
//                 </Link>
//               </div>
//               <button onClick={() => setIsDropDownOpen((prev) => !prev)}>
//                 <IoMdArrowDropdown size={20} />
//               </button>
//             </div>
//             {/*  */}
//             <div
//               className={`lg:border-2 lg:border-grey p-2 flex-col lg:text-center items-center space-y-2 ${
//                 isDropDownOpen ? "" : "hidden"
//               } transition ease-in-out z-10 lg:absolute lg:translate-y-2 lg:bg-[#000000dd]`}
//             >
//               <div className="w-full hover:border-2 hover:border-gray-700">
//                 <Link
//                   to="about"
//                   className={`px-2 py-1 rounded-md hover:text-blue-500 lg:hover:text-slate-300`}
//                 >
//                   Who We Are
//                 </Link>
//               </div>
//               <div className="w-full hover:border-2 hover:border-gray-700">
//                 <Link
//                   to="/about/whatWeDo"
//                   className={`px-2 py-1 rounded-md hover:text-blue-500 lg:hover:text-slate-300`}
//                 >
//                   What We Do
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <Link
//             to="/contact"
//             className={`${
//               isMobileMenuShown
//                 ? " lg:hover:bg-transparent lg:hover:text-slate-400 hover:text-blue-500 "
//                 : "hover:text-slate-400"
//             } px-2 py-1  border rounded-md border-transparent`}
//           >
//             Contact Us
//           </Link>
//           <Link
//             to="/blogs"
//             className={`${
//               isMobileMenuShown
//                 ? "lg:hover:bg-transparent lg:hover:text-slate-400 hover:text-blue-500 "
//                 : "hover:text-slate-400"
//             } px-2 py-1  border rounded-md border-transparent`}
//           >
//             Blogs
//           </Link>
//           {/* SOCIAL MEDIA LINKS */}
//           <div className="flex items-center space-x-1">
// <a
//   href="www.linkedin.com"
//   className=" p-1 text-blue-600 hover:text-blue-400 transition"
// >
//   <FaLinkedin />
// </a>
// <a
//   href="www.instagram.com"
//   className=" p-1 text-blue-600 hover:text-blue-400 transition"
// >
//   <FaInstagram size={20} />
// </a>
// <a
//   href="www.twitter.com"
//   className=" p-1 text-blue-600 hover:text-blue-400 transition"
// >
//   <FaTwitter size={20} />
// </a>
//           </div>
//         </div>
//       </div>
//     </nav>
