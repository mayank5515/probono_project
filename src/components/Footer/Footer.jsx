import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer_Box from "./footer_box/Footer_Box";

export default function Footer() {
  const PagesArr = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "about",
      title: "About Us",
    },
    {
      path: "contact",
      title: "Contact Us",
    },
    {
      path: "blogs",
      title: "Blog",
    },
  ];
  const QuestionsArr = [
    {
      path: "#",
      title: "FAQS",
    },
    {
      path: "#",
      title: "More Info",
    },
  ];

  return (
    <div className=" w-full  py-4 bg-slate-950 text-white flex  flex-col lg:flex-row justify-center">
      <Footer_Box title="Pages" linksArr={PagesArr} />
      <Footer_Box title="Got Questions ? " linksArr={QuestionsArr} />
      {/* UGLY: not ugly code just changed width from w-[10%] to w-[18%] */}
      <div className="space-y-1 p-2 lg:w-[18%] w-auto flex flex-col items-center">
        <h1 className="text-xl font-[Raleway] font-semibold tracking-wider ">
          Follow Us
        </h1>
        <div className="flex flex-col lg:flex-row text-center items-center space-y-2 lg:space-y-0 p-2 space-x-2">
          {/* NOTE: might change color of icons in future */}
          <a
            href="www.linkedin.com"
            className="text-blue-600 hover:text-blue-300 transition"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="www.instagram.com"
            className="text-blue-600 hover:text-blue-300 transition"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="www.twitter.com"
            className="text-blue-600 hover:text-blue-300 transition"
          >
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
