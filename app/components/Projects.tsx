'use client';

import { useState } from 'react';
import ColorMemoryGameModal from './GuessNumberGame';
import { motion } from 'framer-motion';

export default function Projects() {
  const [showGame, setShowGame] = useState(false);

  const projects = [
    {
      title: 'Project 1: Minecraft History',
      description: 'This was my first attempt at building a website. I explored the evolution of Minecraft and used basic HTML, CSS, and JS.',
      link: 'https://paksiw41.github.io/AppDevWebsite/',
      buttonLabel: 'View Project',
      backgroundImage: '/minecraft.png',
    },
    {
      title: 'Project 2: MMML Services Website',
      description: 'A recruitment website that streamlines job applications for OFWs, specifically targeting opportunities in the UAE. You can download my github repository here.',
      link: 'https://github.com/Paksiw41/MMML-Website/archive/refs/heads/main.zip',
      buttonLabel: 'Download Project',
      backgroundImage: '/MMML.png',
    },
    {
      title: 'Project 3: Guess Number Game',
      description: 'A minimalist number guessing game where players guess a number between 1 and 100 with real-time feedback and attempt tracking. Built using React, TypeScript, and Tailwind CSS in a clean modal UI.',
      link: '',
      buttonLabel: 'Play',
      backgroundImage: '/GuessTheNumber.png',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-secondary text-[var(--color-text-light)] flex flex-col justify-center py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-[3vw] md:text-[3vw] font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-[var(--color-primary)] p-8 rounded-xl shadow-lg border border-[var(--color-border)] relative overflow-hidden transform-gpu transition-transform duration-300 hover:scale-105 will-change-transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Background Image Animation */}
              <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                <motion.img
                  src={project.backgroundImage}
                  alt="Background Animation"
                  className="w-full h-full object-cover absolute bottom-[-100%] left-0 transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:opacity-30"
                />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10">
                <h3 className="text-[1.8vw] md:text-[1.5vw] font-semibold mb-2">
                  {project.title}
                </h3>

                <div
                  className="
                    opacity-100 translate-y-0
                    md:opacity-0 md:translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300
                  "
                >
                  <p className="text-[1.2vw] md:text-[1vw] leading-relaxed">
                    {project.description}
                  </p>
                  {project.buttonLabel === 'Play' ? (
                    <motion.button
                      onClick={() => setShowGame(true)}
                      className="inline-block mt-4 px-6 py-2 bg-[#18c79b] text-white rounded-md shadow-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      {project.buttonLabel}
                    </motion.button>
                  ) : (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-2 bg-[#18c79b] text-white rounded-md shadow-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      {project.buttonLabel}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {showGame && <ColorMemoryGameModal onClose={() => setShowGame(false)} />}
    </section>
  );
}
