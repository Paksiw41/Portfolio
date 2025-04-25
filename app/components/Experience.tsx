export default function Experience() {
    return (
      <section id="experience" className="min-h-screen w-full bg-[white]-900 text-[var(--color-text-light)] flex items-center justify-center px-4 py-16">
        <div className="max-w-5xl w-full space-y-12">
          <h2 className="text-[3vw] font-semibold text-center">Experience</h2>
  
          {/* MMML Project */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-[1.5vw] font-bold text-[#18c79b]">Web Developer – Major Subject Project</h3>
            <p className="mt-2 text-[1vw]">MMML Recruitment Services Website — 2024</p>
            <ul className="mt-5 list-disc pl-6 text-[1vw] space-y-2">
              <li>Built a recruitment platform to simplify job applications and client management.</li>
              <li>Developed both the frontend (React.js) and backend (Node.js/Express), with MySQL for the database.</li>
              <li>Collaborated with classmates to plan and implement user-friendly workflows and features.</li>
              <li>Applied practical web development skills in a real-world simulation during academic coursework.</li>
            </ul>
          </div>
  
          {/* Personal Website */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-[1.5vw] font-bold text-[#18c79b]">Personal Portfolio Website</h3>
            <p className="mt-2 text-[1vw]">Self-initiated Project — 2024</p>
            <ul className="mt-5 list-disc pl-6 text-[1vw] space-y-2">
              <li>Designed and developed a personal website to showcase my skills, projects, and contact information.</li>
              <li>Built using React.js and Tailwind CSS; deployed on Vercel for easy sharing and accessibility.</li>
              <li>Enhanced skills in responsive design, UI/UX, and version control using GitHub.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  