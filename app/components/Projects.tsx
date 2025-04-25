export default function Projects() {
    return (
      <section id="projects" className="min-h-screen bg-secondary flex flex-col justify-center py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-[3vw] font-semibold text-center text-[var(--color-text-light)]">My Projects</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="bg-[var(--color-primary)] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 transition-all border border-[var(--color-border)]">
              <h3 className="text-[1.5vw] font-semibold text-[var(--color-text-light)]">Project 1: Minecraft History</h3>
              <p className="text-[1vw] mt-4 text-[var(--color-text-light)]">This was my first attempt at building a website...</p>
              <a href="https://paksiw41.github.io/AppDevWebsite/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-(--color-secondary) text-white rounded-md shadow-md hover:bg-[#18c79b]">
                View Project
              </a>
            </div>
  
            {/* Project 2 */}
            <div className="bg-[var(--color-primary)] p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 transition-all border border-[var(--color-border)]">
              <h3 className="text-[1.5vw] font-semibold text-[var(--color-text-light)]">Project 2: Admin Dashboard</h3>
              <p className="text-[1vw] mt-4 text-[var(--color-text-light)]">A project for managing and viewing user data...</p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-(--color-secondary) text-white rounded-md shadow-md hover:bg-[#18c79b]">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  