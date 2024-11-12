import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/sewarMsiyam" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sewar-siyam-44ba25170/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/sewariyam/" },
    // { icon: <FaTwitter />, path: "" },
  ];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
    {socials.map((item, index) => {
      return (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      );
    })}
  </div>
  );
}

export default Social
