import React from "react";
import SectionTitle from "./SectionTitle";

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
      <SectionTitle title="About Me" />
      <p className="text-gray-200 leading-relaxed mb-8 text-justify">
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

      {/* Services Section */}
      <SectionTitle title="Services" />
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
      <SectionTitle title="Interests" />
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
