import OuterBox from "./OuterBox";
import InnerBoxTemplate from "./InnerBoxTemplate";
import InnerBox from "./what_we_do/InnerBox";
import NewsInnerBox from "./news_and_articles/NewsInnerBox";
import { useContext } from "react";
import whatWeDoArr from "../../../utils/whatWeDoArr";
import newsAndArticleArr from "../../../utils/newsAndArticleArr";
import CompleteTestimonial from "../../../components/completeTestimonial/CompleteTestimonial";
import { TestimonialContext } from "../../../context/testimonialContext";
export default function Home_Content() {
  //CONSUMING CONTEXT
  const { currIndex, prevSlide, nextSlide } = useContext(TestimonialContext);
  return (
    <div className="flex-col justify-center">
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
      <hr className="border-t border-gray-300" />
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
      <hr className="border-t border-gray-300" />
      {/*  NEWS AND ARTICLES  */}
      {/*--------------------------------- */}
      {/* WHAT THEY SAY ABOUT US */}
      {/* COMPLETE TESITMONIAL */}
      <CompleteTestimonial
        currIndex={currIndex}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      {/* COMPLETE TESITMONIAL */}
      {/* WHAT THEY SAY ABOUT US */}
    </div>
  );
}
