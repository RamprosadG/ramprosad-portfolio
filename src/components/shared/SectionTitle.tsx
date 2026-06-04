import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full flex justify-center mb-12"
    >
      <h2 className="relative z-10 px-4 pb-5 text-xl md:text-2xl font-bold text-center text-amber-300">
        {title}
      </h2>
      <div className="absolute bottom-0 h-0.5 w-[230px] md:w-[280px] bg-amber-300" />
    </motion.div>
  );
};

export default SectionTitle;
