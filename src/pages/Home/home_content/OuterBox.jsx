// import { Children } from "react";
// import IMAGE1 from "../../../assets/image1_whatwedo.png";
// import IMAGE2 from "../../../assets/image2_whatwedo.jpg";
// import IMAGE3 from "../../../assets/image3_whatwedo.png";
// import IMAGE4 from "../../../assets/image4_whatwedo.jpg";
// import IMAGE_NEWS_1 from "../../../assets/news_image1.png";
// import IMAGE_NEWS_2 from "../../../assets/news_image2.jpg";
// import IMAGE_NEWS_3 from "../../../assets/news_image3.jpg";
// import IMAGE_NEWS_4 from "../../../assets/news_image4.png";
// import InnerBoxTemplate from "./InnerBoxTemplate";
// import InnerBox from "./what_we_do/innerBox";
// const whatWeDoArr = [
//   {
//     img_url: IMAGE1,
//     innerText:
//       "iProbono is a global group of social justice organisations and affiliates.",
//   },
//   {
//     img_url: IMAGE2,
//     innerText:
//       "Our mission is to enable people to access their rights in pursuit of a just society.",
//   },
//   {
//     img_url: IMAGE3,
//     innerText:
//       "We advance justice for all by representing people in need and strengthening the impact of civil society.",
//   },
//   {
//     img_url: IMAGE4,
//     innerText:
//       "We also advocate for policies that promote social equity and end discrimination.",
//   },
// ];
// const newsAndArticleArr = [
//   {
//     title: "#DesignTheLaw: Legal Design Workshop in Nepal",
//   },
//   {
//     date: "MAY 2024",
//   },
//   {
//     country: "SRI LANKA",
//   },
//   {
//     img_url: IMAGE_NEWS_1,
//   },
// ];
export default function OuterBox({ title = "Title", children }) {
  return (
    <div className=" p-2  w-auto flex-col mt-4">
      <h1 className="text-black tracking-wide text-3xl font-semibold text-center lg:-translate-x-2 my-2 mb-4">
        {title}
      </h1>
      {children}
      {/* INCLUDE THIS ONLY FOR WHAT WE DO CONTENT */}
      <hr className="border-t border-gray-300" />
    </div>
  );
}

/* <div className="flex-col lg:flex-row lg:px-48 border-2 border-green-600 flex p-2 ">
        <InnerBox
          img_url={IMAGE1}
          innerText="iProbono is a global group of social justice organisations and
  affiliates."
        />
        <InnerBox
          img_url={IMAGE2}
          innerText="Our mission is to enable people to access their rights in pursuit of a just society."
        />
        <InnerBox
          img_url={IMAGE3}
          innerText="We advance justice for all by representing people in need and strengthening the impact of civil society."
        />
        <InnerBox
          img_url={IMAGE4}
          innerText="	We also advocate for policies that promote social equity and end discrimination"
        />
      </div> */
