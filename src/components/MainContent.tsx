import React from "react";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Projects from "./Projects";
import ProgrammignContest from "./ProgrammingContest";
import Contact from "./Contact";
import ProblemSolving from "./ProblemSolving";
import Education from "./Education";
import Profile from "./Profile";

const MainContent: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <section id="profile" className=" md:hidden">
        <Profile />
      </section>
      <section id="about" className="">
        <About />
      </section>
      <section id="resume" className="">
        <Skills />
        <Experiences />
        <Education />
      </section>
      <section id="projects" className="">
        <Projects />
      </section>
      <section id="achievements" className="">
        <ProblemSolving />
        <ProgrammignContest />
      </section>
      <section id="contact" className="">
        <Contact />
      </section>
    </div>
  );
};

export default MainContent;
