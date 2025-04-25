'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-secondary text-[var(--color-text-light)] flex flex-col justify-center py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-[2.5vw] md:text-[2vw] font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {[ 
            {
              title: 'Project 1: Minecraft History',
              description: 'This was my first attempt at building a website. I explored the evolution of Minecraft and used basic HTML, CSS, and JS.',
              link: 'https://paksiw41.github.io/AppDevWebsite/'
            },
            {
              title: 'Project 2: Admin Dashboard',
              description: 'A responsive dashboard for managing users with role-based access, data tables, and backend integration.',
              link: '#'
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-primary)] p-8 rounded-xl shadow-lg border border-[var(--color-border)] hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[1.8vw] md:text-[1.5vw] font-semibold mb-4">{project.title}</h3>
              <p className="text-[1.2vw] md:text-[1vw] leading-relaxed">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-2 bg-[#18c79b] text-white rounded-md shadow-md hover:scale-105 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
