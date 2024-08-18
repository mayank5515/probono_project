/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Carousel_Info({
  onClickNextSlide,
  onClickPrevSlide,
  currentSlideData,
}) {
  // HACK: not a hack just removing borders from EVERY div
  return (
    <div className="flex flex-col lg:w-[720px] ">
      <div className=" text-center border border-blue-300 px-[14px] py-[12px] text-white bg-[#1573bc] font-normal text-[14px]">
        iProbono strengthens civil society, litigates for people in need,
        advocates for equal justice
      </div>
      {/* ------- */}
      <div className="  text-white bg-[#000000CC] px-4 py-2 justify-between flex space-x-2 ">
        <button
          onClick={onClickPrevSlide}
          className="flex justify-center items-center"
        >
          <FaArrowLeft size={25} />
        </button>
        <p className="p-2 text-[14px]">
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsa,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          facilis quibusdam consequuntur vel, vero, itaque praesentium quasi
          ipsum voluptatem assumenda ullam illum soluta fugit officia accusamus.
          Sapiente recusandae quae veniam. */}
          {currentSlideData}
        </p>
        <button
          onClick={onClickNextSlide}
          className="flex justify-center items-center "
        >
          <FaArrowRight size={25} />
        </button>
      </div>
    </div>
  );
}
