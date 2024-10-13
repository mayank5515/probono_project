import { Link } from "react-router-dom";
export default function AboutDropdown({ isDropDownOpen }) {
  return (
    <section
      className={`${
        isDropDownOpen ? "visible" : "hidden"
      } border-[2px] border-gray-500 rounded-md space-y-1 my-2 p-1  lg:z-50 lg:border-2  lg:text-center  lg:p-2 lg:w-[10rem] lg:translate-y-2  lg:-translate-x-10 lg:absolute bg-[#202020]`}
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
  );
}
