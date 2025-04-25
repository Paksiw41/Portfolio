"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const skills = [
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Python", level: 65 },
  { name: "SQL", level: 60 },
  { name: "Git", level: 80 },
];

const techStack = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "GitHub", logo: "/github.svg" },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-pimary text-[var(--color-text-light)] flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-7xl flex flex-col md:flex-row items-start justify-between gap-20 w-full">

        {/* About Me Section */}
        <motion.div
          className="md:w-1/2 flex flex-col items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="IMG_2964.jpg" alt="Profile Image" className="w-[15vw] sm:w-[10vw] rounded-[3.5vw] mt-3" />
          <h2 className="text-[3vw] sm:text-[2.5vw] font-semibold">About Me</h2>
          <p className="text-[1vw] sm:text-[1.2vw] mt-4 text-lg">
            I'm a passionate 3rd Year College Computer Science student from{" "}
            <span className="text-[#18c79b] font-bold">Ateneo De Davao University</span> in the{" "}
            <span className="text-[#18c79b] font-bold">Philippines</span>, with a keen interest in software development, problem-solving, and building meaningful projects.
          </p>
          <p className="text-[1vw] sm:text-[1.2vw] mt-10 text-lg">Technologies I work with:</p>
          <ul className="text-[1vw] sm:text-[1.2vw] mt-4 list-disc pl-6 text-lg">
            <li><span className="text-[#18c79b]">JavaScript</span> (React, Next.js, Node.js)</li>
            <li><span className="text-[#18c79b]">Python</span> (Django)</li>
            <li><span className="text-[#18c79b]">TypeScript</span></li>
            <li><span className="text-[#18c79b]">SQL</span> (MySQL, PostgreSQL)</li>
            <li><span className="text-[#18c79b]">HTML & CSS</span> (Tailwind CSS)</li>
            <li><span className="text-[#18c79b]">Git & GitHub</span> for version control</li>
          </ul>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="md:w-1/2 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[3vw] sm:text-[2.5vw] font-semibold">Skills</h2>

          {/* Animated Skill Bars */}
          <div className="space-y-4">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between">
                  <p className="text-[1vw] sm:text-[1.2vw]">{skill.name}</p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                  </motion.div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 mt-1 overflow-hidden">
                  <motion.div
                    className="bg-[#18c79b] h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div>
            <h3 className="text-[1.2vw] sm:text-[1.5vw] mt-8 mb-4 font-semibold">Tech Stack</h3>
            <div className="grid grid-cols-4 gap-4">
              {techStack.map((tool, i) => (
                <div key={i} className="group relative flex justify-center items-center">
                  <img src={tool.logo} alt={tool.name} className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform" />
                  <div className="absolute bottom-full mb-2 text-xs sm:text-sm bg-black bg-opacity-70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-white">
                    {tool.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
