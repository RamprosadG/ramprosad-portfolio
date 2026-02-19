import React from "react";
import About from "../about/About";
import Skills from "../resume/Skills";
import Experiences from "../resume/Experiences";
import Projects from "../projects/Projects";
import ProgrammignContest from "../achievements/ProgrammingContest";
import Contact from "../contact/Contact";
import ProblemSolving from "../achievements/ProblemSolving";
import Education from "../resume/Education";
import Profile from "../shared/Profile";
import Services from "../about/Services";
import Interests from "../about/Interests";

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
