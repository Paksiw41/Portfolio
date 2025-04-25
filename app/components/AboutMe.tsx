export default function AboutMe() {
    return (
      <section id="about" className="min-h-screen w-full bg-[url('/bg-animation.gif')] bg-cover bg-center bg-fixed text-[var(--color-text-light)] flex items-center justify-center px-4 py-16">
        <div className="max-w-7xl flex flex-col md:flex-row items-center gap-12">
          <img src="IMG_2964.jpg" className="w-[12vw] rounded-[3.5vw]" />
          <div>
            <h2 className="text-[3vw] font-semibold">About Me</h2>
            <p className="text-[1vw] mt-4 text-lg">
              I'm a passionate 3rd Year College Computer Science student from <span className="text-[#18c79b] font-bold">Ateneo De Davao University</span> in the <span className="text-[#18c79b] font-bold">Philippines</span>, with a keen interest in software development, problem-solving, and building meaningful projects. I enjoy learning new technologies, including web designing, and constantly improving my skills to create efficient and innovative solutions.
            </p>
            <p className="text-[1vw] mt-10 text-lg">
              Below are some of the programming languages and technologies I have experience with:
            </p>
            <ul className="text-[1vw] mt-4 list-disc pl-6 text-lg">
              <li><span className="text-[#18c79b]">JavaScript</span> (React, Next.js, Node.js)</li>
              <li><span className="text-[#18c79b]">Python</span> (Django)</li>
              <li><span className="text-[#18c79b]">TypeScript</span></li>
              <li><span className="text-[#18c79b]">SQL</span> (MySQL, PostgreSQL)</li>
              <li><span className="text-[#18c79b]">HTML & CSS</span> (Tailwind CSS)</li>
              <li><span className="text-[#18c79b]">Git & GitHub</span> for version control</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  