import { useState, useEffect } from "react";
import Carousel_Info from "../carousel_info/Carousel_Info";
const images = [
  {
    text: "Image 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsa, Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis quibusdam consequuntur vel, vero, itaque praesentium quasi ipsum voluptatem assumenda ullam illum soluta fugit officia accusamus. Sapiente recusandae quae veniam.",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp", //NOTE: or image path
  },
  {
    text: "Image 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsa, Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis quibusdam consequuntur vel, vero, itaque praesentium quasi ipsum voluptatem assumenda ullam illum soluta fugit officia accusamus. Sapiente recusandae quae veniam.",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  },
  {
    text: "Image 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsa, Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis quibusdam consequuntur vel, vero, itaque praesentium quasi ipsum voluptatem assumenda ullam illum soluta fugit officia accusamus. Sapiente recusandae quae veniam.",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  },
  {
    text: "Image 4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsa, Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis quibusdam consequuntur vel, vero, itaque praesentium quasi ipsum voluptatem assumenda ullam illum soluta fugit officia accusamus. Sapiente recusandae quae veniam.",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  },
];
// const imagees = [
//   "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
//   "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
//   "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
//   "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
// ];
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  // BUG: setInterval(() => nextSlide(), 2000);
  //NOTE: AUTO SLIDE
  // useEffect(() => {
  //   let interval;
  //   if (!isHovered) {
  //     interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //     }, 9000);

  //     return () => clearInterval(interval);
  //   }
  // }, [currentIndex, isHovered]);
  useEffect(() => {
    let interval;
    // NOTE: AUTO SLIDE IMPLEMENTED HERE
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); //NOTE: change time to whatever suits you
    }
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="flex flex-col  relative ">
        <div
          className=" w-full h-[95vh] flex overflow-hidden transition-opacity duration-300 ease-in-out"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((el, i) => (
            <div
              key={i}
              className={`w-full h-[100%] ${
                currentIndex === i ? ` animate-fadeIn` : "hidden"
              }`}
            >
              <img
                src={el.imageUrl}
                className={`w-full h-[100%]`}
                alt={`img_${i}`}
              />
            </div>
          ))}
        </div>
        {/*UGLY code ::  check here  */}
        {/* FIXME: slightly align to center on 'xl' */}
        <div className=" flex lg:absolute lg:bottom-0 lg:translate-x-[20vw] xl:translate-x-[25vw]  lg:-translate-y-[20%] justify-center  items-center  ">
          <Carousel_Info
            onClickNextSlide={nextSlide}
            onClickPrevSlide={prevSlide}
            currentSlideData={images[currentIndex].text}
          />
        </div>
      </div>
    </>
  );
}
