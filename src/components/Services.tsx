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

const Services: React.FC = () => {
  return (
    <div className="w-full text-white">
      <SectionTitle title="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
};

export default Services;
