"use client";

import React from "react";
import { motion } from "framer-motion";

const Education = ({ educationHistory }) => {
  // Fixed education data - won't be overridden by props unless explicitly provided
  const defaultEducation = [
    {
      institution: "San Jose State University",
      degree: "M.S. in Artificial Intelligence",
      duration: "Expected Fall 2025 - Spring 2027",
      details:
        "Pursuing advanced studies in AI, focusing on machine learning, deep learning, and natural language processing.",
    },
    {
      institution: "San Jose State University",
      degree: "B.S. in Data Science",
      duration: "Graduated May 2025",
      details:
        "Relevant coursework: Data Structures and Algorithms, Database Management Systems, Processing Big Data, Data Visualization, Intro Artificial Intelligence, Intro Machine Learning, Applied Probability and Statistics, Object-Oriented Design. Dean's Scholar.",
    },
  ];

  // Use defaultEducation if no props are provided OR empty array is provided
  const displayEducation =
    educationHistory && educationHistory.length > 0
      ? educationHistory
      : defaultEducation;

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
      id="education"
      className="py-16 px-4 bg-gradient-to-b from-gray-800 to-gray-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-indigo-400">Education</span> Journey
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div className="space-y-8" variants={containerVariants}>
          {displayEducation.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-indigo-500/20"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="flex items-start">
                <div className="w-2 h-12 bg-indigo-500 rounded-full mr-4 mt-1"></div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {edu.institution}
                      </h3>
                      <p className="text-xl font-medium text-white mt-1">
                        {edu.degree}
                      </p>
                    </div>
                    <p className="text-indigo-300 font-medium mt-2 md:mt-0 md:text-right">
                      {edu.duration}
                    </p>
                  </div>
                  <div className="mt-4 leading-relaxed text-gray-200">
                    {edu.details && (
                      <div>
                        {edu.details.includes("Relevant coursework") ? (
                          <>
                            <p className="mb-2 font-medium text-indigo-300">
                              Relevant coursework:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 pl-4">
                              {edu.details
                                .split("Relevant coursework: ")[1]
                                .split(". Dean")[0]
                                .split(", ")
                                .map((course, i) => (
                                  <li key={i} className="text-gray-300">
                                    • {course}
                                  </li>
                                ))}
                            </ul>
                            <p className="mt-3 text-indigo-300 font-medium">
                              Dean's Scholar
                            </p>
                          </>
                        ) : (
                          <p>{edu.details}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
