import { Link } from "react-router-dom";
export default function BottomButtonHeader() {
  return (
    <div className="lg:hidden flex justify-center">
      <button className="  rounded-md bg-[#eed814] my-3 hover:bg-[#afa016] transition-colors duration-1000 px-2 py-1 text-black text-[20px] font-bold">
        <Link to="/team">Our Team</Link>
      </button>
    </div>
  );
}
