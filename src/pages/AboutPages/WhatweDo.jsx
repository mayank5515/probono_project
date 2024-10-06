import OuterBox from "../Home/home_content/OuterBox";
import InnerBox from "../Home/home_content/what_we_do/InnerBox";
import InnerBoxTemplate from "../Home/home_content/InnerBoxTemplate";
import whatWeDoArr from "../../utils/whatWeDoArr";
// THIS IS WHAT WE DO PAGE
export default function WhatWeDo() {
  // NOTE: use section html tag for proper seperation
  return (
    <>
      <div className="border-2 border-yellow-300 flex justify-center items-center w-full  bg-[#1573bc]">
        <img
          src="https://i-probono.com/wp-content/uploads/2023/08/gf.jpg"
          className=" border-2 border-green-500 lg:h-[70vh] lg:w-[60vw]"
        />
      </div>

      <section className="border-2 border-black  flex justify-center">
        <div className="border-2 border-green-400 p-4 lg:w-[65vw] flex-col justify-center">
          <h1 className="text-black text-2xl font-semibold p-2">What we do</h1>
          <div className="border-2 space-y-2 border-purple-500  p-2 flex-col items-center text-black text-[16px]">
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
          </div>
        </div>
      </section>
      <OuterBox title="What we do">
        {
          <InnerBoxTemplate>
            {whatWeDoArr.map((el, i) => (
              <InnerBox img_url={el.img_url} innerText={el.innerText} key={i} />
            ))}
          </InnerBoxTemplate>
        }
      </OuterBox>
    </>
  );
}
