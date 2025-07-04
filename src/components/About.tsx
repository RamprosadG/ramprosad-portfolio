import React from "react";

const services = [
  {
    title: "Backend",
    description:
      "Engineering secure, scalable, and high-performance server-side architectures that drive core application functionality and data integrity.",
  },
  {
    title: "Front-end",
    description:
      "Designing intuitive, accessible, and responsive user interfaces with modern frameworks to deliver seamless digital experiences.",
  },
  {
    title: "Custom Software",
    description:
      "Delivering bespoke software solutions tailored to specific business objectives, ensuring efficiency, flexibility, and long-term scalability.",
  },
  {
    title: "Software Maintenance",
    description:
      "Providing proactive support, optimization, and iterative improvements to ensure application stability, security, and compliance with evolving requirements.",
  },
];

const interests = [
  "Competitive Programming",
  "System Design",
  "Open Source Contribution",
  "Problem Solving",
  "Clean Code & Architecture",
  "Machine Learning",
];

const About: React.FC = () => {
  return (
    <div className="w-full text-white">
      {/* About Me Section */}
      <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">
        About Me
      </h2>
      <p className="text-gray-200 leading-relaxed text-lg mb-8 text-justify">
        <strong>Hello! I'm Ramprosad Gharami.</strong>
        <br />A Software Engineer and Competitive Programmer with a B.Sc. in
        Computer Science from Gopalganj Science and Technology University. I
        specialize in building full-stack web applications using modern
        technologies like Node.js, React.js, Tailwind CSS, and MongoDB.
        <br />
        <br />
        With a strong foundation in problem-solving and real-world development,
        I've worked on projects ranging from real-time apps with WebSockets to
        secure payment integrations (Paddle, UddoktaPay). I'm passionate about
        clean, scalable code and continuous learning.
        <br />
        <br />
        Beyond coding, I enjoy competitive programming, fast typing, and
        engaging with tech communities. I'm always eager to collaborate on
        impactful, challenging projects.
      </p>

      {/* Services Section */}
      <h3 className="text-2xl font-semibold mb-8 text-white text-center">
        Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 text-gray-200 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 transition"
          >
            <h4 className="text-lg font-semibold mb-2 text-white">
              {service.title}
            </h4>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Interests Section */}
      <h3 className="text-2xl font-semibold mb-8 text-white text-center">
        Interests
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white px-6 py-4 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
