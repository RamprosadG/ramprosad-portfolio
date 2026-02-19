import React from "react";
import SectionTitle from "../shared/SectionTitle";
import {
  FaCode,
  FaGithub,
  FaLightbulb,
  FaNetworkWired,
  FaProjectDiagram,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import type { IconType } from "react-icons";

type Interest = {
  icon: IconType;
  title: string;
};

const interests: Interest[] = [
  {
    icon: FaProjectDiagram,
    title: "Clean Code & Architecture",
  },
  {
    icon: FaNetworkWired,
    title: "System Design",
  },
  {
    icon: GiArtificialIntelligence,
    title: "Learning New Technology",
  },
  {
    icon: FaCode,
    title: "Competitive Programming",
  },
  {
    icon: FaLightbulb,
    title: "Problem Solving",
  },
  {
    icon: FaGithub,
    title: "Open Source Contribution",
  },
];

const Interests: React.FC = () => {
  return (
    <div className="w-full text-white">
      <SectionTitle title="Interests" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <div
              key={index}
              className="bg-gray-800 text-white px-6 py-6 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 text-sm flex flex-col items-center justify-center gap-2"
            >
              <Icon className="text-4xl text-amber-300" />
              <span className="text-sm text-center">{interest.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Interests;
