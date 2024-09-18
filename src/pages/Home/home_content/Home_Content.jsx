import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import OuterBox from "./OuterBox";
import InnerBoxTemplate from "./InnerBoxTemplate";
import InnerBox from "./what_we_do/InnerBox";
import NewsInnerBox from "./news_and_articles/NewsInnerBox";
import { useState } from "react";
import Testimonial from "./testimonials/Testimonial";
import whatWeDoArr from "../../../utils/whatWeDoArr";
import newsAndArticleArr from "../../../utils/newsAndArticleArr";
import whatTheySayAboutUsArr from "../../../utils/whatTheySayAboutUsArr";
// FIX: add auto scroll to the carousel
export default function Home_Content() {
  // CAROUSEL 2
  //NOTE: make sure at least 2 items are there in the array (whatTheySayAboutUsArr) !
  const [currIndex, setCurrIndex] = useState(0);
  function nextSlide() {
    console.log("nextSlide", currIndex);
    setCurrIndex((prevIndex) => (prevIndex + 2) % whatTheySayAboutUsArr.length);
  }
  function prevSlide() {
    console.log("prevSlide", currIndex);
    setCurrIndex(
      (prevIndex) =>
        (prevIndex - 2 + whatTheySayAboutUsArr.length) %
        whatTheySayAboutUsArr.length
    );
  }
  return (
    <div className="border-2 border-red-400 flex-col justify-center">
      {/* WHAT THEY SAY ABOUT US */}
      <OuterBox title="What we do">
        {
          <InnerBoxTemplate>
            {whatWeDoArr.map((el, i) => (
              <InnerBox img_url={el.img_url} innerText={el.innerText} key={i} />
            ))}
          </InnerBoxTemplate>
        }
      </OuterBox>
      {/* WHAT THEY SAY ABOUT US */}
      {/* --------------------- */}
      {/*  NEWS AND ARTICLES  */}
      <OuterBox title="News And Articles">
        {
          <InnerBoxTemplate>
            {newsAndArticleArr.map((el, i) => (
              <NewsInnerBox
                title={el.title}
                date={el.date}
                img_url={el.img_url}
                place={el.place}
                key={i}
              />
            ))}
          </InnerBoxTemplate>
        }
      </OuterBox>
      {/*  NEWS AND ARTICLES  */}
      {/*--------------------------------- */}
      {/* WHAT THEY SAY ABOUT US */}
      <OuterBox title="What they say about us ?">
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
                .slice(currIndex, currIndex + 2)
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
      {/* WHAT THEY SAY ABOUT US */}
    </div>
  );
}
//--------------WHAT THEY SAY ABOUT US-------------------------//
// <div className="border-2 p-2 border-green-800 w-auto flex-col">
// <h1 className="text-black tracking-wide text-2xl font-semibold text-center lg:-translate-x-2 my-2 mb-4">
//   What we do
// </h1>
// <div className="flex-col lg:flex-row lg:px-48 flex p-2 ">
//   <InnerBox
//     img_url={IMAGE1}
//     innerText="iProbono is a global group of social justice organisations and
// affiliates."
//   />
//   <InnerBox
//     img_url={IMAGE2}
//     innerText="Our mission is to enable people to access their rights in pursuit of a just society."
//   />
//   <InnerBox
//     img_url={IMAGE3}
//     innerText="We advance justice for all by representing people in need and strengthening the impact of civil society."
//   />
//   <InnerBox
//     img_url={IMAGE4}
//     innerText="	We also advocate for policies that promote social equity and end discrimination"
//   />
// </div>
// </div>
