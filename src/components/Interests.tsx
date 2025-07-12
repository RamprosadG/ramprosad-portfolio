import React from "react";
import SectionTitle from "./SectionTitle";

const interests = [
  "Competitive Programming",
  "System Design",
  "Open Source Contribution",
  "Problem Solving",
  "Clean Code & Architecture",
  "Machine Learning",
];

const Interests: React.FC = () => {
  return (
    <div className="w-full text-white">
      <SectionTitle title="Interests" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white px-6 py-4 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
