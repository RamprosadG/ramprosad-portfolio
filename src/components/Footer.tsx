import React from "react";

const Footer: React.FC = () => {
  return (
      <div className="text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
  );
};

export default Footer;