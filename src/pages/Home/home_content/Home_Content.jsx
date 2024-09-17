import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import OuterBox from "./OuterBox";
import IMAGE1 from "../../../assets/image1_whatwedo.png";
import IMAGE2 from "../../../assets/image2_whatwedo.jpg";
import IMAGE3 from "../../../assets/image3_whatwedo.png";
import IMAGE4 from "../../../assets/image4_whatwedo.jpg";
import IMAGE_NEWS_1 from "../../../assets/news_image1.png";
import IMAGE_NEWS_2 from "../../../assets/news_image2.jpg";
import IMAGE_NEWS_3 from "../../../assets/news_image3.jpg";
import IMAGE_NEWS_4 from "../../../assets/news_image4.png";
import InnerBoxTemplate from "./InnerBoxTemplate";
import InnerBox from "./what_we_do/InnerBox";
import NewsInnerBox from "./news_and_articles/NewsInnerBox";
import { useState } from "react";
import Testimonial from "./testimonials/Testimonial";
const whatWeDoArr = [
  {
    img_url: IMAGE1,
    innerText:
      "iProbono is a global group of social justice organisations and affiliates.",
  },
  {
    img_url: IMAGE2,
    innerText:
      "Our mission is to enable people to access their rights in pursuit of a just society.",
  },
  {
    img_url: IMAGE3,
    innerText:
      "We advance justice for all by representing people in need and strengthening the impact of civil society.",
  },
  {
    img_url: IMAGE4,
    innerText:
      "We also advocate for policies that promote social equity and end discrimination.",
  },
];
// ------------------------------------------------------//

const newsAndArticleArr = [
  {
    title: "#DesignTheLaw: Legal Design Workshop in Nepal",
    date: "MAY 2024",
    place: "SRI LANKA",
    img_url: IMAGE_NEWS_1,
  },
  {
    title: "Right to Information Win for Child Protection in Sri Lanka",
    date: "MAY 2024",
    place: "SRI LANKA",
    img_url: IMAGE_NEWS_2,
  },
  {
    title: "Looking back and Learning From Crisis",
    date: "JAN 2024",
    place: "SOUTH ASIA",
    img_url: IMAGE_NEWS_3,
  },
  {
    title: "Looking back and Learning From Crisis",
    date: "MAY 2024",
    place: "AFGANISTAN",
    img_url: IMAGE_NEWS_4,
  },
];
// const whatTheySayAboutUsArr = [
//   IMAGE1,
//   IMAGE2,
//   IMAGE3,
//   IMAGE4,
//   IMAGE_NEWS_1,
//   IMAGE_NEWS_2,
// ];
const whatTheySayAboutUsArr = [
  {
    profileImg: IMAGE1,
    testimonial:
      "Thanks to this amazing legal team, I was able to navigate a complex legal issue that I couldn't afford to face alone. Their support, guidance, and kindness helped me overcome a huge challenge. I can’t express how grateful I am for their commitment to helping those in need. Truly a life-changing experience!",
    name: "Sarah M",
    profile: "Human Rights and Capacity Development Expert , Canada",
  },
  {
    profileImg: IMAGE2,
    testimonial:
      "I felt lost when I needed legal help, but this charity came to my rescue. Their team provided clear, compassionate advice and stood by me through every step. I’m beyond thankful for their professionalism and dedication to people like me who can't afford legal assistance. They gave me hope when I had none.",
    name: "John Doe",
    profile: "ESCR Fellowship Advisor",
  },
  {
    profileImg: IMAGE3,
    testimonial:
      "I never expected to need legal help, but when I did, I couldn’t afford it. This organization stepped in with free, high-quality legal services. They treated me with dignity and respect, explaining everything in terms I could understand. They made a complicated process manageable, and I couldn’t be more grateful.",
    name: "Jane Doe",
    profile: "Legal Director , Hope for Justice , USA",
  },
  {
    profileImg: IMAGE4,
    testimonial:
      "I was overwhelmed by a legal issue I had no idea how to handle. This charity provided more than just legal advice—they gave me peace of mind. The team is incredibly compassionate, knowledgeable, and patient. They truly care about the people they help and do everything possible to fight for justice. I highly recommend them.",
    name: "David A",
    profile:
      "Sr. Attorney & Director - Data Center Policy , Microsoft Cloud Infrastructure Operations",
  },
  {
    profileImg: IMAGE_NEWS_1,
    testimonial:
      "I didn’t know where to turn when I faced a legal battle I couldn’t afford. This charity’s team stepped in and provided everything I needed, free of charge. Their dedication to justice and fairness for everyone, regardless of financial standing, is inspiring. I’m forever grateful for their help and support.",
    name: "Emily R",
    profile: "Human Rights and Capacity Development Expert , Canada",
  },
  {
    profileImg: IMAGE_NEWS_2,
    testimonial:
      "I was in a difficult situation with no means to pay for legal help, but this incredible team took on my case without hesitation. They explained everything clearly and fought for me every step of the way. They made what felt like an impossible situation, possible. I can’t thank them enough for their generosity and expertise.",
    name: "Deepak Sharma",
    profile: "Photojournalist , India",
  },
];
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
        <section className="border-2 border-black p-1 flex justify-center">
          {/* CAROUSEL DIV */}

          <div className="border-2 border-red-500 flex justify-center items-center overflow-hidden p-2">
            {/* <div className="border-2 border-green-500"><img src={IMAGE1} className="h-full" /></div>
          <div className="border-2 border-yellow-400"><img src={IMAGE2} className="h-full" /></div> */}
            <button
              className="border-2 border-blue-500 h-[2rem] w-[2rem] bg-white p-1 -translate-x-4 flex items-center text-blue-500 text-2xl"
              onClick={() => nextSlide()}
            >
              <IoIosArrowBack />
            </button>
            {whatTheySayAboutUsArr
              .slice(currIndex, currIndex + 2)
              .map((el, i) => (
                <Testimonial
                  key={i}
                  img_url={el.profileImg}
                  testimonial={el.testimonial}
                  name={el.name}
                  profile={el.profile}
                />
              ))}
            <button
              className="border-2 border-blue-500 h-[2rem] w-[2rem] bg-white p-1 translate-x-4 flex items-center text-blue-500 text-2xl"
              onClick={() => prevSlide()}
            >
              <IoIosArrowForward />
            </button>
          </div>

          {/* CAROUSEL DIV */}
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
