import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function SocialMediaLinks() {
  return (
    <div className="flex items-center  space-x-4 border-2 border-purple-400 ">
      <a
        href="www.linkedin.com"
        className="text-blue-600 hover:text-blue-400 transition"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="www.instagram.com"
        className="text-blue-600 hover:text-blue-400 transition"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="www.twitter.com"
        className="text-blue-600 hover:text-blue-400 transition"
      >
        <FaTwitter size={20} />
      </a>
    </div>
  );
}
