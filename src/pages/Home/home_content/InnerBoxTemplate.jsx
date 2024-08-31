import InnerBox from "./what_we_do/innerBox";
// import IMAGE1 from "../../../assets/image1_whatwedo.png";
// import IMAGE2 from "../../../assets/image2_whatwedo.jpg";
// import IMAGE3 from "../../../assets/image3_whatwedo.png";
// import IMAGE4 from "../../../assets/image4_whatwedo.jpg";

export default function InnerBoxTemplate({ innerBoxArr = [] }) {
  return (
    <>
      <div className="flex-col lg:flex-row lg:px-48  flex p-2  ">
        {/* <InnerBox
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
          innerText="We also advocate for policies that promote social equity and end discrimination"
        /> */}
        {innerBoxArr.map((el, i) => (
          <InnerBox img_url={el.img_url} innerText={el.innerText} key={i} />
        ))}
      </div>
    </>
  );
}
