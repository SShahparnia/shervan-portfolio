"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const canvasRef = useRef(null);

  // Particles animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(
        (window.innerWidth * window.innerHeight) / 10000
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(172, 151, 255, ${Math.random() * 0.5 + 0.25})`,
        });
      }
    };

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap particles around the canvas
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((particleA, i) => {
        particles.slice(i + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(172, 151, 255, ${
              0.2 * (1 - distance / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions();
      initParticles();
    };

    setCanvasDimensions();
    initParticles();
    drawParticles();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 80, delay: 0.8 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(172, 151, 255, 0.4)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  const logoVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 20,
        duration: 0.8,
        delay: 0.1,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Text content */}
        <motion.div
          className="text-left md:w-3/5 mb-12 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
              Data Scientist & AI Enthusiast
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Shervan Shahparnia
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl"
            variants={itemVariants}
          >
            CS & Data Science Graduate exploring the frontiers of AI and Machine
            Learning at San Jose State University.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg flex items-center"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>

            <motion.a
              href="#contact"
              className="border-2 border-indigo-400 hover:border-indigo-300 text-indigo-300 hover:text-indigo-200 font-bold py-3 px-8 rounded-full text-lg flex items-center"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Decorative logo/image */}
        <motion.div
          className="md:w-2/5 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Abstract geometric logo */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl border border-indigo-500/30 shadow-2xl"></div>

            {/* Inner decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Circle */}
                <motion.div
                  className="absolute w-48 h-48 rounded-full border-4 border-indigo-400/30"
                  animate={{
                    rotate: 360,
                    transition: {
                      duration: 20,
                      ease: "linear",
                      repeat: Infinity,
                    },
                  }}
                ></motion.div>

                {/* Orbit 1 */}
                <motion.div
                  className="absolute w-40 h-40 top-4 left-4 rounded-full border-2 border-purple-400/40"
                  animate={{
                    rotate: -360,
                    transition: {
                      duration: 15,
                      ease: "linear",
                      repeat: Infinity,
                    },
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50"
                    animate={{
                      scale: [1, 1.2, 1],
                      transition: { duration: 2, repeat: Infinity },
                    }}
                  ></motion.div>
                </motion.div>

                {/* Orbit 2 */}
                <motion.div
                  className="absolute w-32 h-32 top-8 left-8 rounded-full border-2 border-indigo-500/30"
                  animate={{
                    rotate: 360,
                    transition: {
                      duration: 10,
                      ease: "linear",
                      repeat: Infinity,
                    },
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
                    animate={{
                      scale: [1, 1.3, 1],
                      transition: { duration: 3, repeat: Infinity },
                    }}
                  ></motion.div>
                </motion.div>

                {/* Center element */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg shadow-indigo-500/30"
                  animate={{
                    rotate: [0, 45, 0, -45, 0],
                    transition: { duration: 8, repeat: Infinity },
                  }}
                >
                  <div className="absolute inset-2 bg-gray-900 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-300 font-bold text-xl">
                      SS
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.2, duration: 0.5 },
        }}
      >
        <motion.div
          className="w-8 h-12 rounded-full border-2 border-indigo-400/50 flex justify-center p-2"
          animate={{
            y: [0, 5, 0],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        >
          <motion.div
            className="w-1 h-3 bg-indigo-400 rounded-full"
            animate={{
              y: [0, 6, 0],
              opacity: [0, 1, 0],
              transition: { duration: 1.5, repeat: Infinity },
            }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
