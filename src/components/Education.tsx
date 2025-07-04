import React from "react";

const Education: React.FC = () => {
  return (
    <div className="text-white py-12">
      <div className="w-full">
        <div className="text-xl md:text-2xl text-center font-semibold mb-8 text-white">
          Education
        </div>

        <div className="bg-secondary rounded-xl shadow-md">
          <div className="text-white text-lg font-semibold">
            B.Sc. in Computer Science And Engineering
          </div>
          <div className="text-gray-300">
            Gopalganj Science And Technology University
          </div>
          <div className="text-gray-300">Jan 2015 – Dec 2021</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
