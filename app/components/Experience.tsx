"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Web Developer – Major Subject Project",
    subtitle: "MMML Recruitment Services Website — 2024",
    points: [
      "Built a recruitment platform to simplify job applications and client management.",
      "Developed both the frontend (React.js) and backend (Node.js/Express), with MySQL for the database.",
      "Collaborated with classmates to plan and implement user-friendly workflows and features.",
      "Applied practical web development skills in a real-world simulation during academic coursework.",
    ],
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "Self-initiated Project — 2024",
    points: [
      "Designed and developed a personal website to showcase my skills, projects, and contact information.",
      "Built using React.js and Tailwind CSS; deployed on Vercel for easy sharing and accessibility.",
      "Enhanced skills in responsive design, UI/UX, and version control using GitHub.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full bg-pimary text-[var(--color-text-light)] flex items-center justify-center px-4 py-16"
    >
      <motion.div
        className="max-w-5xl w-full space-y-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[3vw] font-semibold text-center">Experience</h2>

        {experienceData.map((exp, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[1.5vw] font-bold text-[#18c79b]">{exp.title}</h3>
            <p className="mt-2 text-[1vw]">{exp.subtitle}</p>
            <ul className="mt-5 list-disc pl-6 text-[1vw] space-y-2">
              {exp.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
