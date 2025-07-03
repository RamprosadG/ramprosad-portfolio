import React from "react";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Projects from "./Projects";
import ProgrammignContest from "./ProgrammingContest";
import Contact from "./Contact";
import ProblemSolving from "./ProblemSolving";
import Education from "./Education";
import Service from "./Service";
import Language from "./Language";

const MainContent: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <section id="about" className="">
        <About />
        <Service />
      </section>
      <section id="resume" className="">
        <Skills />
        <Experiences />
        <Education />
        <Language />
      </section>
      <Projects />
      <ProblemSolving />
      <ProgrammignContest />
      <Contact />
    </div>
  );
};

export default MainContent;
