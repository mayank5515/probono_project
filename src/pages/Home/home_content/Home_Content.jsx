import IMAGE1 from "../../../assets/image1_whatwedo.png";
import IMAGE2 from "../../../assets/image2_whatwedo.jpg";
import IMAGE3 from "../../../assets/image3_whatwedo.png";
import IMAGE4 from "../../../assets/image4_whatwedo.jpg";
import InnerBox from "./what_we_do/innerBox";
export default function Home_Content() {
  return (
    <div className="border-2 border-red-400 flex justify-center">
      {/* WHAT THEY SAY ABOUT US */}
      <div className="border-2 p-2 border-green-600 w-auto flex-col">
        <h1 className="text-black text-2xl font-semibold text-center">
          What we do
        </h1>
        <div className="border-2 border-purple-600 flex-col p-2">
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
        </div>
      </div>
      {/* WHAT THEY SAY ABOUT US */}
    </div>
  );
}
