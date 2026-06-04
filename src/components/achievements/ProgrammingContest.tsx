import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";

import { FaTrophy, FaMedal } from "react-icons/fa";
import type { IconType } from "react-icons";

type Achievement = {
  contest: string;
  team: string;
  rank: number | string;
  icon: IconType;
};

const achievements: Achievement[] = [
  {
    contest: "UGV 1st ICT Carnival programming contest 2019",
    team: "BSMRSTU_WeAreOnTour2.0",
    rank: "1st",
    icon: FaTrophy,
  },
  {
    contest: "The 2017 City University IUPC Onsite Programming Contest",
    team: "BSMRSTU_WeAreOnTour",
    rank: "4",
    icon: FaMedal,
  },
  {
    contest: "The 2020 ACM-ICPC Bangladesh MIST NCPC Onsite Contest",
    team: "BSMRSTU_Comfort_Zone_Crackers",
    rank: "25",
    icon: FaMedal,
  },
  {
    contest: "The 2020 ICPC Asia Dhaka Regional Onsite Contest",
    team: "BSMRSTU_Comfort_Zone_Crackers",
    rank: "36",
    icon: FaMedal,
  },
  {
    contest:
      "The 2019 ICPC Asia Dhaka Regional Site Online Preliminary Contest",
    team: "BSMRSTU_Survivor",
    rank: "36",
    icon: FaMedal,
  },
  {
    contest: "The 2018 ICPC Asia Dhaka Regional Site Onsite Contest",
    team: "BSMRSTU_Night_Coder",
    rank: "60",
    icon: FaMedal,
  },
];

const ProgrammignContest: React.FC = () => {
  return (
    <div className="text-white w-full">
      <SectionTitle title="Programming Contests" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}

              className="bg-gray-800 text-gray-200 p-6 rounded-2xl shadow-md border border-white/10 backdrop-blur-sm hover:shadow-lg border border-white/10 hover:border-amber-400/50 transition-colors"
            >
              <div className="flex flex-col items-center gap-2 mb-4">
                <Icon className="text-4xl text-amber-400" />
                <div className="text-left text-base font-medium text-gray-100">
                  {item.contest}
                </div>
              </div>
              <p className="text-sm">
                <span>Team:</span> {item.team}
              </p>
              <p className="text-sm">
                <span>Rank:</span> {item.rank}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgrammignContest;
