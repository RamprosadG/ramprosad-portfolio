import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";
import type { JSX } from "react/jsx-runtime";

interface SocialLink {
  href: string;
  icon: JSX.Element;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://linkedin.com/in/ramprosad-gharami",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/RamprosadG",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://wa.me/8801323410373",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
  },
  {
    href: "https://www.facebook.com/ramprosad.gharami.568",
    icon: <FaFacebook />,
    label: "Facebook",
  },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="w-full justify-center flex items-center gap-2 text-xl text-gray-300">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="p-1 rounded-full hover:bg-yellow-500 hover:text-black transition-colors duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
