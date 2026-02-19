import React from "react";
import SectionTitle from "../shared/SectionTitle";

const Education: React.FC = () => {
  return (
    <div className="text-white w-full">
      <SectionTitle title="Education" />

      <div className="bg-secondary rounded-xl shadow-md">
        <div className="text-white text-lg font-semibold">
          B.Sc. in Computer Science And Engineering
        </div>
        <div className="text-gray-300">
          Gopalganj Science And Technology University
        </div>
        <div className="text-gray-300">Jan 2015 – Dec 2021</div>
      </div>
    </div>
  );
};

export default Education;
