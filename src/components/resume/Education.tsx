import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white w-full"
    >
      <SectionTitle title="Education" direction="right" />

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
  );
};


export default Education;
