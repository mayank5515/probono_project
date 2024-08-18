import { Link } from "react-router-dom";
export default function Footer_Box({ title, linksArr }) {
  return (
    <div className=" space-y-4 p-2 w-auto lg:w-[20%] flex flex-col items-center">
      <h1 className="text-xl font-[Raleway] font-semibold tracking-wider">
        {title}
      </h1>
      <div className="flex flex-col text-center  items-center space-y-1 p-2">
        {linksArr.map((el, i) => (
          <Link
            to={`${el.path}`}
            key={i}
            className="hover:text-slate-400 text-[14px] tracking-wide"
          >
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
