import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen text-[var(--foreground)] bg-[url('/bg-animation.gif')] bg-cover bg-center bg-fixed">
      {/* Full Screen Header Section with ID */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-secondary bg-opacity-90 backdrop-blur-md flex justify-between items-center px-[17vw] py-4">
        <div className="flex gap-25">
          <div className="text-[1.1vw] font-bold text-[var(--color-text-light)] hover:text-[#18c79b]">Niño</div>
            <ul className="flex gap-4 text-lg text-[var(--color-text-light)]">
              <li className="text-[1.1vw] hover:text-[#18c79b] flex gap-2 items-center cursor-pointer group"><img src='home.svg' className="transition-transform group-hover:scale-110" style={{ width: '1.1vw', height: '1.1vw' }}/><a href="#home">Home</a></li>
              <li className="text-[1.1vw] hover:text-[#18c79b] flex gap-2 items-center cursor-pointer group"><img src='user.svg' className="transition-transform group-hover:scale-110" style={{ width: '1.1vw', height: '1.1vw' }}/><a href="#about">About</a></li>
              <li className="text-[1.1vw] hover:text-[#18c79b] flex gap-2 items-center cursor-pointer group"><img src='file-text.svg' className="transition-transform group-hover:scale-110" style={{ width: '1.1vw', height: '1.1vw' }}/><a href="#experience">Experience</a></li>
              <li className="text-[1.1vw] hover:text-[#18c79b] flex gap-2 items-center cursor-pointer group"><img src='folder.svg' className="transition-transform group-hover:scale-110" style={{ width: '1.1vw', height: '1.1vw' }}/><a href="#projects">Projects</a></li>
            </ul>
          </div>
          <div className="flex gap-5">
              <a href="https://github.com/Paksiw41" target="_blank" rel="noopener noreferrer">
                <img src="/github.svg" alt="GitHub" className="hover:scale-110 transition-transform" style={{ width: '1.1vw', height: '1.1vw' }} />
              </a>
              <a href="https://www.facebook.com/nino.ursal.41" target="_blank" rel="noopener noreferrer">
                <img src="/facebook.svg" alt="Facebook" className="hover:scale-110 transition-transform" style={{ width: '1.1vw', height: '1.1vw' }} />
              </a>
              <a href="mailto:marknino41@gmail.com">
                <img src="/mail.svg" alt="Email" className="hover:scale-110 transition-transform" style={{ width: '1.1vw', height: '1.1vw' }} />
              </a>
              <a href="https://www.instagram.com/nino_ursal/" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.svg" alt="Instagram" className="hover:scale-110 transition-transform" style={{ width: '1.1vw', height: '1.1vw' }} />
              </a>
          </div>
          </nav>
      <section id="home">
        <header className="relative min-h-screen bg-secondary text-[var(--color-text-light)] flex flex-col justify-center items-start text-center py-12 leading-[6vw] pl-[17vw]">
          <h1 className="text-[6vw] font-bold text-left animate-typing font-Courier tracking-tighter">
            <span>H</span>
            <span>i</span>
            <span>,</span>
            <span> </span>
            <span>I</span>
            <span>'</span>
            <span>m</span>
            <span> </span>
            <span>"</span>
            <span className="text-[6vw] text-[#18c79b]">N</span>
            <span className="text-[6vw] text-[#18c79b]">i</span>
            <span className="text-[6vw] text-[#18c79b]">ñ</span>
            <span className="text-[6vw] text-[#18c79b]">o</span>
            <span>"</span>
            <span>!</span>
          </h1>
          <p className="text-[1.5vw] text-lg">Aspiring | Game Developer, Web Developer, UI/UX Designer </p>

        </header>
      </section>


      {/* About Me Section */}
      <section id="about" className="min-h-screen w-full bg-[url('/bg-animation.gif')] bg-cover bg-center bg-fixed text-[var(--color-text-light)] flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl flex flex-col md:flex-row items-center gap-12">
      <img src='IMG_2964.jpg' className="w-[12vw] rounded-[3.5vw]"/>
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

      {/* Experience Section */}
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


      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-secondary flex flex-col justify-center py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-[3vw] font-semibold text-center text-[var(--color-text-light)]">My Projects</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="bg-[var(--color-primary)] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 transition-all border border-[var(--color-border)]">
              <h3 className="text-[1.5vw] font-semibold text-[var(--color-text-light)]">Project 1: Minecraft History</h3>
              <p className="text-[1vw] mt-4 text-[var(--color-text-light)]">This was my first attempt at building a website...</p>
              <a 
                href="https://paksiw41.github.io/AppDevWebsite/"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block mt-4 px-6 py-2 bg-(--color-secondary) text-white rounded-md shadow-md hover:bg-[#18c79b]"
              >
                View Project
              </a>
            </div>

            {/* Project 2 */} 
            <div className="bg-[var(--color-primary)] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 transition-all border border-[var(--color-border)]">
              <h3 className="text-[1.5vw] font-semibold text-[var(--color-text-light)]">Project 2: MMML Website</h3>
              <p className="text-[1vw] mt-4 text-[var(--color-text-light)]">This project was developed for my major subject, and it marks my first experience working with a framework. There is no live demo for this but you can download my repository on github!</p>
              <a 
                href="https://github.com/Paksiw41/MMML-Website/archive/refs/heads/main.zip" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block mt-4 px-6 py-2 bg-(--color-secondary) text-white rounded-md shadow-md hover:bg-[#18c79b]"
              >
                Download Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary text-[var(--color-text-light)] py-6 text-center">
        <p>&copy; 2025 Built and Design by Mark Niño Ursal.</p>
        <p>All Rights Reserved.</p>
      </footer>
    </div>
  );
}
