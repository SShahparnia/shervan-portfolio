"use client";

import React from "react";
import { motion } from "framer-motion";

// Individual project card component
const ProjectCard = ({
  name,
  description,
  tech,
  duration,
  details,
  githubLink,
  liveLink,
}) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 8 },
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow:
        "0 20px 25px -5px rgba(76, 29, 149, 0.1), 0 10px 10px -5px rgba(76, 29, 149, 0.04)",
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <motion.div
      className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-indigo-500/20"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="flex items-start mb-4">
        <div className="w-2 h-12 bg-indigo-500 rounded-full mr-4 mt-1"></div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {name}
            </h3>
            {duration && (
              <span className="mt-2 md:mt-0 text-indigo-300 font-medium text-sm">
                {duration}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700/70 text-gray-200 rounded-lg text-xs font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4 mb-6">
        {description && <p className="text-gray-300 mb-4">{description}</p>}

        {/* Bullet points from details array */}
        {details && details.length > 0 && (
          <ul className="space-y-2 text-gray-200">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Links */}
      <div className="mt-auto pt-4 border-t border-gray-700/50 flex gap-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = ({ projects }) => {
  // Real project data from your resume
  const yourProjects = [
    {
      name: "Predictive Analytics for Safer Roads",
      tech: ["Google Cloud", "BigQuery", "PyTorch", "Dash"],
      duration: "January 2025 - Present",
      details: [
        "Built a full-stack pipeline to predict U.S. traffic accident severity using BigQuery, PyTorch neural networks, and Plotly Dash on Google App Engine.",
        "Engineered over 20 weather, road, and time-based features and trained classification models to distinguish severity levels with high accuracy.",
        "Used NLP to classify potential causes from accident descriptions and visualized findings through interactive dashboards.",
      ],
      githubLink: "#",
    },
    {
      name: "HARTH Human Activity Recognition",
      tech: ["Python", "Scikit-Learn", "Random Forest", "FFT"],
      duration: "March 2025 - May 2025",
      details: [
        "Segmented motion sensor data using a sliding window approach and extracted time and frequency domain features including mean, std, skewness, and FFT components.",
        "Trained and evaluated multiple models including KNN, SVM, and Random Forest, achieving over 82% accuracy in LOSO (Leave-One-Subject-Out) cross-validation.",
        "Demonstrated the effectiveness of classical ML over deep learning for lightweight and interpretable human activity classification.",
      ],
      githubLink: "#",
    },
    {
      name: "Club-Hub",
      tech: ["JavaScript", "React", "Node.js", "MySQL"],
      duration: "Dec 2024 - Present",
      details: [
        "Developed and deployed a club management platform using React for the front-end and Node.js for the backend, implementing dashboard navigation, dark mode, and club creation features to enhance user experience.",
        "Collaborated with a cross-functional team to build a real-time Chat Room with @mention functionality, integrating Node.js backend queries for seamless communication.",
        "Engineered secure authentication by designing React components and Node.js middleware for sign-up functionality, private routes, and user restrictions.",
      ],
      githubLink: "#",
      liveLink: "#",
    },
  ];

  const displayProjects =
    projects && projects.length > 0 ? projects : yourProjects;

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

  const headerVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 8 },
    },
  };

  return (
    <motion.section
      id="projects"
      className="py-16 px-4 bg-gradient-to-b from-gray-800 to-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="text-indigo-400">My</span> Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {displayProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
