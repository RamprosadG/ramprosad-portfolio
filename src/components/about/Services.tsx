import React from "react";
import { motion } from "framer-motion";

import SectionTitle from "../shared/SectionTitle";
import { FaNodeJs, FaHtml5 } from "react-icons/fa";
import { GrCloudSoftware, GrHostMaintenance } from "react-icons/gr";
import type { IconType } from "react-icons";

type Service = {
  icon: IconType;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: FaNodeJs,
    title: "Backend",
    description:
      "Engineering secure, scalable, and high-performance server-side architectures that drive core application functionality and data integrity.",
  },
  {
    icon: FaHtml5,
    title: "Front-end",
    description:
      "Designing intuitive, accessible, and responsive user interfaces with modern frameworks to deliver seamless digital experiences.",
  },
  {
    icon: GrCloudSoftware,
    title: "Custom Software",
    description:
      "Delivering bespoke software solutions tailored to specific business objectives, ensuring efficiency, flexibility, and long-term scalability.",
  },
  {
    icon: GrHostMaintenance,
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
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}

              className="bg-gray-800 text-gray-200 p-4 md:p-6 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 hover:border-amber-400/50 transition-colors"
            >
              {/* Icon and Title Row */}
              <div className="flex items-center justify-center mb-4 text-amber-300 gap-2">
                <Icon className="text-lg md:text-xl" />
                <h4 className="text-lg md:text-xl font-semibold">
                  {service.title}
                </h4>
              </div>
              {/* Description */}
              <p className="text-sm text-justify">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
