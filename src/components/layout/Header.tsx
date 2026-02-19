import React from "react";
import { navigationItems } from "../../static/navigationItems";
import ProfileImage from "../../assets/images/profile/Ramprosad.jpg";

const Header: React.FC = () => {
  return (
    <nav className="flex items-center h-full gap-2 md:gap-4 lg:gap-6 justify-center text-xs md:text-base font-normal font-serif overflow-x-auto">
      <div className="flex items-center justify-center md:hidden">
        <a href="#profile" title="Ramprosad Gharami">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-6 h-6 rounded-full object-cover border border-amber-300"
          />
        </a>
      </div>
      {navigationItems.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          aria-label={`${label.toLowerCase()}`}
          className="relative py-1 h-full flex items-center text-center text-white transition-colors
                       after:content-[''] hover:text-amber-300 after:absolute after:left-0 after:bottom-2 after:h-[2px] after:w-0
                       after:bg-amber-300 hover:after:w-full after:transition-all after:duration-300"
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Header;
