import React from "react";
import { motion } from "framer-motion";
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
      <SectionTitle title="Interests" direction="left" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}

              className="bg-gray-800 text-white px-6 py-6 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 text-sm flex flex-col items-center justify-center gap-2 hover:border-amber-400/50 transition-colors"
            >
              <Icon className="text-4xl text-amber-300" />
              <span className="text-sm text-center">{interest.title}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Interests;
