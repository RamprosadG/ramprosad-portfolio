import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="text-sm">
      © {new Date().getFullYear()} Ramprosad Gharami. All rights reserved.
    </div>
  );
};

export default Footer;
