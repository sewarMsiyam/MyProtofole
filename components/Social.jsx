import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, label: "GitHub", path: "https://github.com/sewarMsiyam" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", path: "https://www.linkedin.com/in/sewar-siyam-44ba25170/" },
  { icon: <FaInstagram />, label: "Instagram", path: "https://www.instagram.com/sewariyam/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <Link
          key={item.label}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
