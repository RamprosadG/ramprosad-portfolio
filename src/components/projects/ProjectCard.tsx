import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";

import { MdArrowRight } from "react-icons/md";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface TechStack {
  name: string;
  icon: IconType;
}
interface ProjectCardProps {
  title: string;
  images: string[];
  liveLink: string;
  techStack: TechStack[];
  description: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  images,
  liveLink,
  techStack,
  description,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prevSlide = () => {
    setDirection(-1);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    setDirection(1);
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const paginate = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="w-full bg-gray-800 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-700">
      {/* Image Carousel */}
      <div className="relative group w-full h-[300px] sm:h-[400px] bg-gray-900/50 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full object-contain"
          />
        </AnimatePresence>

        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/70 transition z-10"
        >
          <HiChevronLeft />
        </div>

        {/* Right Arrow */}
        <div
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/70 transition z-10"
        >
          <HiChevronRight />
        </div>

      </div>
      {/* Indicators */}
      <div className="flex justify-center gap-2 py-2 bg-gray-900/40 border-b border-gray-700">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => paginate(index)}
            className={`transition-all w-2 h-2 rounded-full cursor-pointer ${currentIndex === index
              ? "bg-amber-400 w-6"
              : "bg-gray-500 hover:bg-gray-300"
              }`}
          />
        ))}
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-bold text-white tracking-tight">{title}</h4>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Project"
          >
            <button className="hover:bg-amber-400 hover:text-gray-900 cursor-pointer text-amber-300 px-4 py-2 border border-amber-300 text-sm font-semibold rounded-lg transition-all transform hover:scale-105 active:scale-95">
              Live Project
            </button>
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-y-2 text-sm text-gray-300">
          {description?.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 + 0.5 }}
              className="flex items-start"
            >
              <MdArrowRight className="text-amber-400 text-lg shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>

        <div className="pt-4 border-t border-gray-700 flex flex-wrap items-center gap-3">
          <span className="text-sm font-bold text-white tracking-wider">
            Tech Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-900/50 border border-gray-700 text-gray-300 px-3 py-1.5 rounded-full hover:border-amber-400/50 hover:text-white transition-colors"
                >
                  <Icon className="text-lg text-amber-500" />
                  <span className="text-xs font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

