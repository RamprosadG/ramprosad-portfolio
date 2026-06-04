import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="w-full text-white">
      <SectionTitle title="About Me" />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-gray-200 leading-relaxed text-justify">
          Hello! I'm Ramprosad Gharami — a Software Engineer and Competitive
          Programmer with a B.Sc. in Computer Science and Engineering from
          Gopalganj Science and Technology University. I specialize in building
          modern full-stack web applications using modern technologies like
          JavaScript, TypeScript, Node.js, React.js, Redux, Tailwind CSS, MongoDB
          etc. My work spans from real-time applications with WebSockets to secure
          payment gateway integrations such as Paddle and UddoktaPay. With a
          strong foundation in problem-solving and practical software development,
          I focus on writing clean, scalable, and maintainable code. I'm deeply
          passionate about continuous learning and staying updated with emerging
          technologies. Outside of coding, I actively participate in competitive
          programming, enjoy fast typing, and engage with tech communities. I'm
          always open to collaborating on impactful and technically challenging
          projects. Let's build something amazing together!
        </p>
      </motion.div>
    </div>
  );
};


export default About;
