import { Link } from "react-router-dom";
export default function Footer_Box({ title, linksArr }) {
  return (
    <div className="border space-y-4 border-white p-2  w-auto flex flex-col items-center">
      <h1 className="text-2xl font-[Raleway] font-semibold tracking-wide">
        {title}
      </h1>
      <div className="flex flex-col text-center items-center space-y-1 p-1">
        {linksArr.map((el, i) => (
          <Link to={`${el.path}`} key={i} className="hover:text-slate-400">
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
