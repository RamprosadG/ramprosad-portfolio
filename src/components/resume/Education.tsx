import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  return (
    <div className="w-full text-white">
      <SectionTitle title="Education" />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        <div className="bg-secondary rounded-xl shadow-md">
          <div className="text-white text-lg font-semibold">
            B.Sc. in Computer Science And Engineering
          </div>
          <div className="text-gray-300">
            Gopalganj Science And Technology University
          </div>
          <div className="text-gray-300">Jan 2015 – Dec 2021</div>
        </div>
      </motion.div>
    </div>
  );
};


export default Education;
