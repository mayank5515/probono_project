import OuterBox from "../Home/home_content/OuterBox";
import InnerBox from "../Home/home_content/what_we_do/InnerBox";
import InnerBoxTemplate from "../Home/home_content/InnerBoxTemplate";
import whatWeDoArr from "../../utils/whatWeDoArr";
import WhatWeDoPara from "../../components/whatWeDoPageComponents/whatWeDoPara";
import CompleteTestimonial from "../../components/completeTestimonial/CompleteTestimonial";
import { TestimonialContext } from "../../context/testimonialContext";
import { useContext } from "react";
// THIS IS WHAT WE DO PAGE
export default function WhatWeDo() {
  const { currIndex, nextSlide, prevSlide } = useContext(TestimonialContext);
  // NOTE: use section html tag for proper seperation
  return (
    <>
      <div className="border-2 border-yellow-300 flex justify-center items-center w-full  bg-[#1573bc]">
        <img
          src="https://i-probono.com/wp-content/uploads/2023/08/gf.jpg"
          className=" border-2 border-green-500 lg:h-[70vh] lg:w-[60vw]"
        />
      </div>
      {/* WHAT WE DO - PARA SECTION */}
      <section>
        <WhatWeDoPara title="What We Do">
          <p>
            iProbono&apos;s mission is to enable people to access their rights
            in pursuit of a just society.
          </p>

          <p className="leading-7">
            By promoting active citizenship and engaging a holistic model we:
            <br />
            1. Advance justice for all by representing people in need
            <br /> 2. Strengthen the impact of civil society
            <br /> 3. Advocate for policies that promote social equity and end
            discrimination
          </p>

          <p className="leading-6">
            iProbono provides holistic counsel with a strong, lean team that
            delivers strategic direction and execution, while also leveraging
            the expertise and commitment of a wide community of pro bono
            lawyers.
          </p>
        </WhatWeDoPara>
      </section>
      <hr className="border-t border-gray-300" />
      {/* WHAT WE DO - PARA SECTION */}
      {/* HOW WE WORK SECTION */}
      <section>
        <OuterBox title="How We Work">
          {
            <InnerBoxTemplate>
              {whatWeDoArr.map((el, i) => (
                <InnerBox
                  img_url={el.img_url}
                  innerText={el.innerText}
                  key={i}
                />
              ))}
            </InnerBoxTemplate>
          }
        </OuterBox>
        {/* HOW WE WORK SECTION */}
      </section>
      <hr className="border-t border-gray-300" />
      {/* HOW WE ARE STRUCTURED */}
      <section>
        <WhatWeDoPara title="How we are structured ?">
          <p className="leading-7">
            iProbono is a global organisation, founded in 2009 as a company
            limited by guarantee in the UK (a non-profit organisation) and
            registered with the Charity Commission. In India, iProbono is
            incorporated as a s8 company.
          </p>
        </WhatWeDoPara>
      </section>
      {/* HOW WE ARE STRUCTURED */}
      <hr className="border-t border-gray-300" />
      {/* COMPLETE TESTIMONIAL*/}
      <CompleteTestimonial
        currIndex={currIndex}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        disableBottomValue={true}
      />
      {/* COMPLETE TESTIMONIAL */}
    </>
  );
}
