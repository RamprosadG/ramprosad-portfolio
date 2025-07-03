import React from "react";

const problemData = [
  {
    name: "Codeforces",
    handle: "Ramprosad",
    profileUrl: "https://codeforces.com/profile/Ramprosad",
    image: "/content/Codeforces.jpg",
    solving: "1970+",
    contest: "215+",
    rating: "1800",
    title: "Expert",
    color: "text-cyan-400"
  },
  {
    name: "Codechef",
    handle: "ramprosadg",
    profileUrl: "https://www.codechef.com/users/ramprosadg",
    image: "/content/Codechef.png",
    solving: "147+",
    contest: "34+",
    rating: "1944",
    title: "4Star",
    color: "text-purple-900"
  },
  {
    name: "AtCoder",
    handle: "Ramprosad",
    profileUrl: "https://atcoder.jp/users/Ramprosad",
    image: "/content/Atcoder.png",
    solving: "130+",
    contest: "30+",
    rating: "1101",
    title: "Brown",
    color: "text-orange-700"
  },
  {
    name: "LeetCode",
    handle: "Ramprosad",
    profileUrl: "https://leetcode.com/u/Ramprosad/",
    image: "/content/LeetCode.png",
    solving: "177+",
    contest: "17+",
    rating: "1896",
    title: "Badge: 13",
    color: "text-yellow-700"
  },
  {
    name: "StopStalk",
    handle: "Ramprosad",
    profileUrl: "https://www.stopstalk.com/user/profile/Ramprosad",
    image: "/content/Stopstalk.png",
    solving: "2600+",
    contest: "False",
    rating: "False",
    title: "False",
    color: "text-purple-900"
  },
];

const ProblemSolving: React.FC = () => {
  return (
    <section id="problem_solve" className="py-12 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Problem Solving</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemData.map((platform, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={100 * (idx + 1)}
            >
              <img
                src={platform.image}
                alt={platform.name}
                className="w-full h-40 object-contain p-4"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-semibold">{platform.name}</h4>
                  <a
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Show Profile
                  </a>
                </div>
                <p className="mt-2">
                  <strong>Handle:</strong>{" "}
                  <span className={`text-lg font-semibold ${platform.color}`}>
                    {platform.handle}
                  </span>
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                  <p><strong>Solving:</strong> {platform.solving}</p>
                  <p><strong>Contest:</strong> {platform.contest}</p>
                  <p><strong>Max Rating:</strong> {platform.rating}</p>
                  <p><strong>{platform.name === "LeetCode" ? "Badge" : "Title"}:</strong> {platform.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
