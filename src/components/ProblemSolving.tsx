import React from "react";
import codeforcesImage from "../assets/Codeforces.jpg";
import codechefImage from "../assets/Codechef.png";
import atcoderImg from "../assets/Atcoder.png";
import leetcodeImage from "../assets/LeetCode.png";
import stopTalkImage from "../assets/Stopstalk.png";
import SectionTitle from "./SectionTitle";

const problemData = [
  {
    name: "Codeforces",
    handle: "Ramprosad",
    profileUrl: "https://codeforces.com/profile/Ramprosad",
    image: codeforcesImage,
    solving: "1970+",
    contest: "215+",
    rating: "1800",
    title: "Expert",
    color: "text-cyan-400",
  },
  {
    name: "Codechef",
    handle: "ramprosadg",
    profileUrl: "https://www.codechef.com/users/ramprosadg",
    image: codechefImage,
    solving: "147+",
    contest: "34+",
    rating: "1944",
    title: "4Star",
    color: "text-purple-900",
  },
  {
    name: "AtCoder",
    handle: "Ramprosad",
    profileUrl: "https://atcoder.jp/users/Ramprosad",
    image: atcoderImg,
    solving: "130+",
    contest: "30+",
    rating: "1101",
    title: "Brown",
    color: "text-orange-700",
  },
  {
    name: "LeetCode",
    handle: "Ramprosad",
    profileUrl: "https://leetcode.com/u/Ramprosad/",
    image: leetcodeImage,
    solving: "177+",
    contest: "17+",
    rating: "1896",
    title: "Badge: 13",
    color: "text-yellow-700",
  },
  {
    name: "StopStalk",
    handle: "Ramprosad",
    profileUrl: "https://www.stopstalk.com/user/profile/Ramprosad",
    image: stopTalkImage,
    solving: "2600+",
    contest: "False",
    rating: "False",
    title: "False",
    color: "text-purple-900",
  },
];

const ProblemSolving: React.FC = () => {
  return (
    <div className="w-full text-white">
      <SectionTitle title="Problem Solving" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {problemData?.map((platform, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={100 * (idx + 1)}
          >
            <img
              src={platform.image}
              alt={platform.name}
              className="w-full object-contain"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold text-white">
                  {platform.name}
                </h4>
                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm hover:underline"
                >
                  Show Profile
                </a>
              </div>

              <p className="text-sm">
                <span className="font-medium text-gray-300">Handle:</span>{" "}
                <span className=" text-gray-400">{platform.handle}</span>
              </p>

              <div className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-400">
                <p>
                  <span className="font-medium text-gray-300">Solving:</span>{" "}
                  {platform.solving}
                </p>
                <p>
                  <span className="font-medium text-gray-300">Contest:</span>{" "}
                  {platform.contest}
                </p>
                <p>
                  <span className="font-medium text-gray-300">Max Rating:</span>{" "}
                  {platform.rating}
                </p>
                <p>
                  <span className="font-medium text-gray-300">
                    {platform.name === "LeetCode" ? "Badge" : "Title"}:
                  </span>{" "}
                  {platform.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSolving;
