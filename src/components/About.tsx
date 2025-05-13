"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 8 },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-indigo-400">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-10 items-center"
          variants={containerVariants}
        >
          {/* Profile Image */}
          <motion.div className="lg:w-1/3 w-full" variants={itemVariants}>
            <div className="relative">
              {/* Image container with border effect */}
              <div className="w-64 h-64 mx-auto overflow-hidden rounded-2xl border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/10">
                {/* Your actual profile image */}
                <Image
                  src="/profile-image.jpg"
                  alt="Shervan Shahparnia"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-indigo-500/30 rounded-br-3xl -z-10"></div>
            </div>

            {/* Quick stats/info */}
            <motion.div
              className="mt-8 flex justify-center gap-6"
              variants={itemVariants}
            >
              <div className="text-center">
                <h4 className="font-bold text-indigo-400">Education</h4>
                <p className="text-gray-300 text-sm">SJSU</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-indigo-400">Focus</h4>
                <p className="text-gray-300 text-sm">AI & Data Science</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Bio content */}
          <motion.div className="lg:w-2/3 w-full" variants={itemVariants}>
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-indigo-500/20">
              <div className="flex items-center mb-6">
                <div className="w-2 h-12 bg-indigo-500 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  My Journey
                </h3>
              </div>

              <div className="space-y-6 text-gray-200">
                <p className="leading-relaxed">
                  Hello! I'm{" "}
                  <span className="text-indigo-300 font-medium">
                    Shervan Shahparnia
                  </span>
                  , a recent graduate from San Jose State University with a
                  Bachelor's degree in Data Science and a strong focus on
                  Machine Learning, AI, and Data Visualization and Analysis. I'm
                  passionate about leveraging data to solve complex problems and
                  build intelligent systems.
                </p>

                <p className="leading-relaxed">
                  This fall, I'm excited to continue my academic journey at
                  SJSU, pursuing a Master's degree in{" "}
                  <span className="text-indigo-300 font-medium">
                    Artificial Intelligence
                  </span>
                  . My goal is to deepen my understanding of AI and contribute
                  to cutting-edge research and development in the field.
                </p>

                <p className="leading-relaxed">
                  Throughout my undergraduate studies and personal projects,
                  I've gained hands-on experience in machine learning, data
                  analysis, software development, and various programming
                  languages and tools. I'm always eager to learn new
                  technologies and take on challenging projects.
                </p>

                <p className="leading-relaxed">
                  When I'm not coding or studying, I enjoy exploring new
                  datasets, contributing to open-source projects, and staying
                  updated with the latest advancements in AI and tech.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
