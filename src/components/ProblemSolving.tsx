import React from "react";
import codeforcesImage from "../assets/Codeforces.jpg";
import codechefImage from "../assets/Codechef.png";
import atcoderImg from "../assets/Atcoder.png";
import leetcodeImage from "../assets/LeetCode.png";
import stopTalkImage from "../assets/Stopstalk.png";
import tophImage from "../assets/toph.png";
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
  },
  {
    name: "Toph",
    handle: "Ramprosad",
    profileUrl: "https://toph.co/u/RamprosadG",
    image: tophImage,
    solving: "230+",
    contest: "10+",
    rating: "1697",
    title: "A",
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
            <div className="p-4 text-gray-200">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-xl font-semibold text-gray-100">
                  {platform.name}
                </h4>
                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="hover:bg-gray-600 cursor-pointer text-amber-300 px-3 py-1 border border-amber-300 text-sm rounded-md transition">
                    Show Profile
                  </button>
                </a>
              </div>

              <p className="text-sm">
                <span className="font-medium">Handle:</span>{" "}
                <span className=" ">{platform.handle}</span>
              </p>

              <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                <p>
                  <span className="font-medium">Solving:</span>{" "}
                  {platform.solving}
                </p>
                <p>
                  <span className="font-medium">Contest:</span>{" "}
                  {platform.contest}
                </p>
                <p>
                  <span className="font-medium">Max Rating:</span>{" "}
                  {platform.rating}
                </p>
                <p>
                  <span className="font-medium">
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
