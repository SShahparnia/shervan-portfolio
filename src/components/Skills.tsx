"use client";

import React from "react";
import { motion } from "framer-motion";

const Skills = ({ skills }) => {
  const placeholderSkills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "Java", "C++", "SQL", "R"],
    },
    {
      category: "Data Science & ML",
      items: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Keras",
      ],
    },
    {
      category: "Web Development",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Firebase",
      ],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "Docker",
        "Jupyter Notebooks",
        "VS Code",
        "Linux",
      ],
    },
  ];

  const displaySkills =
    skills && skills.length > 0 ? skills : placeholderSkills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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
      id="skills"
      className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-indigo-400">My</span> Skills
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {displaySkills.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-indigo-500/20 hover:border-indigo-400/40"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-2 h-12 bg-indigo-500 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {skillCategory.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item, itemIndex) => (
                  <motion.span
                    key={itemIndex}
                    className="px-3 py-1 bg-gray-700/70 text-gray-200 rounded-lg text-sm font-medium hover:bg-indigo-500/30 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * itemIndex, duration: 0.2 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
