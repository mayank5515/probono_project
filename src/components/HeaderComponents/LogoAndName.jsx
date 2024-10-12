import LOGO_IMG from "../../assets/nyaya_sarthak_logo.svg";
import { Link } from "react-router-dom";
export default function LogoAndName() {
  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      <Link to="/">
        <img
          src={`${LOGO_IMG}`}
          className="h-[3rem] w-[3rem] bg-white"
          alt="logo_img"
        />
      </Link>
      <h1 className="text-2xl font-semibold">
        <Link to="/">NYAYASARTHAK</Link>
      </h1>
    </div>
  );
}
