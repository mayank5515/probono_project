import { useState, useEffect } from "react";

const images = [
  "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
];
export default function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setTimeout(
          setCurrImg((prevIndex) => (prevIndex + 1) % images.length),
          2000
        );
      } else if (event.key === "ArrowLeft") {
        setTimeout(
          setCurrImg((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          ),
          2000
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="w-full border border-black ">
      <div
        className="w-full "
        style={{ transform: `translateX(-${currImg * 100}%)` }}
      >
        <img src={images[currImg]} alt={`img_${currImg}`} className="w-full" />
      </div>
    </div>
  );
}
