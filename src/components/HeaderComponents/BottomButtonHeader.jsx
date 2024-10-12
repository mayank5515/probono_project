import { Link } from "react-router-dom";
export default function BottomButtonHeader() {
  return (
    <div className="border-2 lg:hidden border-red-400 flex justify-center">
      <button className="border-2 border-purple-400  rounded-md bg-[#eed814] my-3 hover:bg-[#afa016] transition-colors duration-1000 px-2 py-1 text-black text-[20px] font-bold">
        <Link to="/team">Our Team</Link>
      </button>
    </div>
  );
}
