import React, { useState, useEffect } from "react";
const images = [
  "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
];
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="w-full flex overflow-hidden border border-black transition-opacity duration-300 ease-in-out">
      {images.map((el, i) => (
        <div
          key={i}
          className={`w-full ${
            currentIndex === i ? ` animate-fadeIn` : "hidden"
          }`}
        >
          <img src={el} className={`w-full`} alt={`img_${i}`} />
        </div>
      ))}
    </div>

    // ---------------------------------------//
    // <div className="carousel-container relative w-full max-w-lg mx-auto overflow-hidden">
    //   <div
    //     className="carousel-inner flex transition-transform duration-500 ease-in-out"
    //     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    //   >
    //     {images.map((image, index) => (
    //       <div key={index} className="carousel-item min-w-full">
    //         <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
    //       </div>
    //     ))}
    //   </div>
    //   <div className="carousel-controls absolute inset-0 flex justify-between items-center p-4">
    //     <button
    //       onClick={prevSlide}
    //       className="bg-gray-800 text-white p-2 rounded-full"
    //     >
    //       Previous
    //     </button>
    //     <button
    //       onClick={nextSlide}
    //       className="bg-gray-800 text-white p-2 rounded-full"
    //     >
    //       Next
    //     </button>
    //   </div>
    // </div>
  );
}
