import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import TiltedCard from "./TiltedCard";

import project1 from "../assets/project2.jpeg";
import project2 from "../assets/project1.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";

export default function Projects() {
  const projects = [
    { id: 1, image: project1 },
    { id: 2, image: project2 },
    { id: 3, image: project3 },
    { id: 4, image: project4 },
  ];

  return (
    <section className="w-full px-[25px] py-[25px] pb-0 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1400px] rounded-3xl bg-white border border-gray-100 shadow-lg overflow-hidden p-6 sm:p-8 lg:p-10 ml-[10px]"
      >
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              Featured Project
            </span>

            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-blue-600"
            >
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </motion.span>

            <div className="ml-auto">
              <button className="flex items-center gap-2 text-blue-600 text-sm font-medium ">
                Explore all <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 leading-tight ">
            A collection of my most{" "}
            <span className="text-blue-600">impactful UI UX projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative w-full aspect-square group"
            >
              <TiltedCard
                imageSrc={project.image}
                imageHeight="100%"
                rotateAmplitude={50}
                scaleOnHover={1.02}
              />

              <div className="absolute inset-0 bg-black/0  transition-colors duration-300 flex items-center justify-center pointer-events-none">
                <motion.button
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-blue-600 p-2 rounded-full pointer-events-auto"
                  aria-label="open project"
                >
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
