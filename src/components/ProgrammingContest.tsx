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
    contest: "The 2019 ICPC Asia Dhaka Regional Site Online Preliminary Contest",
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
    <section className="py-12" id="achievements">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          <BsTrophy className="inline-block text-yellow-500 mr-2" size={28} />
          Top Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                🏆 {item.contest}
              </h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Team:</span> {item.team}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Rank:</span> {item.rank}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammignContest;
