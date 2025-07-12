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
import Services from "./Services";
import Interests from "./Interests";

const MainContent: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <section id="profile" className="md:hidden">
        <Profile />
      </section>
      <section id="about" className="flex flex-col gap-12">
        <About />
        <Services />
        <Interests />
      </section>
      <section id="resume" className="flex flex-col gap-12">
        <Skills />
        <Experiences />
        <Education />
      </section>
      <section id="projects" className="">
        <Projects />
      </section>
      <section id="achievements" className="flex flex-col gap-12">
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
