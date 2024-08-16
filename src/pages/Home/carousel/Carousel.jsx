import React, { useState, useEffect } from "react";
const images = [
  "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
];
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
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="w-full h-[75vh] flex overflow-hidden border border-black transition-opacity duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseDown={() => setIsHovered(false)}
    >
      {images.map((el, i) => (
        <div
          key={i}
          className={`w-full h-[100%] ${
            currentIndex === i ? ` animate-fadeIn` : "hidden"
          }`}
        >
          <img src={el} className={`w-full h-[100%]`} alt={`img_${i}`} />
        </div>
      ))}
    </div>
  );
}
