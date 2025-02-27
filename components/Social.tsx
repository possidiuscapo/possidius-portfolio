import Link from "next/link";
import path from "path";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaSkype,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/possidiuscapo" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/possidius-capo-chichi-35373a21b/",
  },
  { icon: <FaTwitter />, path: "https://twitter.com/possidius_" },
  // {
  //   icon: <FaYoutube />,
  //   path: "https://www.youtube.com/channel/UCSu3O04950vV3eY_u16fXGQ",
  // },
  {
    icon: <FaSkype />,
    path: "https://join.skype.com/invite/JH5LbjmwD2t5",
  },
];

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          passHref
          target="_blank"
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
