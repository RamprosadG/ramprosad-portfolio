import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="relative w-full flex justify-center mb-12">
      <h2 className="relative z-10 px-4 pb-5 text-xl md:text-2xl font-bold text-center text-amber-300">
        {title}
      </h2>
      <div className="absolute bottom-0 h-0.5 w-[230px] md:w-[280px] bg-amber-300" />
    </div>
  );
};

export default SectionTitle;
