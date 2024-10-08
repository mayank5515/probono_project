import OuterBox from "../../pages/Home/home_content/OuterBox";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Testimonial from "../../pages/Home/home_content/testimonials/Testimonial";
import whatTheySayAboutUsArr from "../../utils/whatTheySayAboutUsArr";

export default function CompleteTestimonial({
  currIndex,
  nextSlide,
  prevSlide,
  disableBottomValue = false,
  disableTopValue = false,
}) {
  return (
    <div>
      <OuterBox
        title="What they say about us ?"
        disableBottomHr={disableBottomValue}
        disableTopHr={disableTopValue}
      >
        <section className="p-1 ">
          {/* CAROUSEL DIV (RED ONE IS)*/}
          <div className="flex flex-row justify-center items-center overflow-hidden p-2">
            <button
              className={`border-2 border-blue-400 h-[2.2rem] w-[2.2rem] hidden bg-white p-1 lg:-translate-x-2 lg:flex items-center text-blue-600 text-2xl`}
              onClick={() => nextSlide()}
            >
              <IoIosArrowBack />
            </button>

            <div className="flex w-[100%] md:w-[75%] lg:w-[50%] p-2 ">
              {whatTheySayAboutUsArr
                .slice(currIndex, currIndex + 1)
                .map((el, i) => (
                  <Testimonial
                    key={i}
                    index={i}
                    img_url={el.profileImg}
                    testimonial={el.testimonial}
                    name={el.name}
                    profile={el.profile}
                  />
                ))}
            </div>

            <button
              className={`border-2 border-blue-400 h-[2.2rem]  hidden lg:visible w-[2.2rem] bg-white p-1 lg:translate-x-2 lg:flex items-center text-blue-600 text-2xl`}
              onClick={() => prevSlide()}
            >
              <IoIosArrowForward />
            </button>
          </div>
          {/* CAROUSEL DIV */}
          {/* RESPONSIVE BUTTONS */}
          <div className=" flex justify-center lg:hidden mt-2">
            <div className="flex  p-1 space-x-2">
              <button
                className="border-2 border-blue-400 h-[2rem] w-[2rem]  bg-white p-1 lg:-translate-x-1 flex items-center text-blue-600 text-2xl"
                onClick={() => nextSlide()}
              >
                <IoIosArrowBack />
              </button>

              <button
                className="border-2 border-blue-400 h-[2rem] w-[2rem] bg-white p-1  flex items-center text-blue-600 text-2xl"
                onClick={() => prevSlide()}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          {/* RESPONSIVE BUTTONS */}
        </section>
      </OuterBox>
    </div>
  );
}
