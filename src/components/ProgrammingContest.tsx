import React from "react";
import { BsTrophy } from "react-icons/bs";

type Achievement = {
  contest: string;
  team: string;
  rank: number | string;
};

const achievements: Achievement[] = [
  {
    contest: "UGV 1st ICT Carnival programming contest 2019",
    team: "BSMRSTU_WeAreOnTour2.0",
    rank: "1st",
  },
  {
    contest: "The 2017 City University IUPC Onsite Programming Contest",
    team: "BSMRSTU_WeAreOnTour",
    rank: "4",
  },
  {
    contest: "The 2020 ACM-ICPC Bangladesh MIST NCPC Onsite Contest",
    team: "BSMRSTU_Comfort_Zone_Crackers",
    rank: "25",
  },
  {
    contest: "The 2020 ICPC Asia Dhaka Regional Onsite Contest",
    team: "BSMRSTU_Comfort_Zone_Crackers",
    rank: "36",
  },
  {
    contest:
      "The 2019 ICPC Asia Dhaka Regional Site Online Preliminary Contest",
    team: "BSMRSTU_Survivor",
    rank: "36",
  },
  {
    contest: "The 2018 ICPC Asia Dhaka Regional Site Onsite Contest",
    team: "BSMRSTU_Night_Coder",
    rank: "60",
  },
];

const ProgrammignContest: React.FC = () => {
  return (
    <div className="py-12 text-white" id="achievements">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10">
          Programming Contests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 text-gray-200 p-6 rounded-2xl shadow-md border border-white/10 backdrop-blur-sm transition duration-300 hover:shadow-lg"
            >
              <div className="text-lg font-medium text-white mb-4">
                {item.contest}
              </div>
              <p className="text-sm">
                <span className="font-medium text-white">Team:</span>{" "}
                {item.team}
              </p>
              <p className="text-sm">
                <span className="font-medium text-white">Rank:</span>{" "}
                {item.rank}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgrammignContest;
