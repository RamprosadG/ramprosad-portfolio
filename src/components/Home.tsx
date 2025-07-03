import React from "react";
import programmerImg from '../assets/programmer.webp';
import codingLeft from '../assets/coding-left.webp';
import codingRight from '../assets/coding-right.webp';

const Home: React.FC = () => {
  return (
    <div id="home" className="section py-2 flex flex-col w-full">
      <div className="flex h-[200px] w-full">
        {/* Left Image */}
        <div className="w-[100px] flex justify-start items-end">
          <img
            className="w-full object-contain"
            src={codingLeft}
            alt="Left side image"
            data-tilt
          />
        </div>

        {/* Center Content */}
        <div className="w-full flex text-[#1c8e96] justify-center items-center">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-2xl md:text-4xl font-bold text-center">
              Ramprosad Gharami
            </h1>
            <h2 className="text-lg md:text-2xl text-center">
              Software Engineer
            </h2>
            <h2 className="text-lg md:text-2xl text-center">
              IT Scholar
            </h2>
          </div>

        </div>

        {/* Right Image */}
        <div className="w-[100px] flex justify-start items-start">
          <img
            className="w-full object-contain"
            src={codingRight}
            alt="Right side image"
          />
        </div>
      </div>

      {/* Bottom Main Image */}
      <div className="w-full flex justify-center items-center">
        <img
          className="w-[300px] object-contain"
          src={programmerImg}
          alt="Programmer image"
        />
      </div>
    </div>
  );
};

export default Home;
