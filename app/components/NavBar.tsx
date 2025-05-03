import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-secondary bg-opacity-90 backdrop-blur-md flex justify-between items-center px-[17vw] py-4">
      <div className="flex gap-25">
        <div className="text-[1.1vw] font-bold text-[var(--color-text-light)] hover:text-[#18c79b]">Niño</div>
        <ul className="flex gap-4 text-lg text-[var(--color-text-light)]">
          <li className="text-[1.1vw] hover:text-[#18c79b] flex gap-2 items-center cursor-pointer group">
            <img src="home.svg" className="transition-transform group-hover:scale-110" style={{ width: '1.1vw', height: '1.1vw' }} />
            <Link href="#home">Home</Link>
          </li>
          <li className="text-[1.1vw] hover:text-[#18c79b] flex gap-2 items-center cursor-pointer group">
            <img src="user.svg" className="transition-transform group-hover:scale-110" style={{ width: '1.1vw', height: '1.1vw' }} />
            <Link href="#about">About</Link>
          </li>
          <li className="text-[1.1vw] hover:text-[#18c79b] flex gap-2 items-center cursor-pointer group">
            <img src="file-text.svg" className="transition-transform group-hover:scale-110" style={{ width: '1.1vw', height: '1.1vw' }} />
            <Link href="#experience">Experience</Link>
          </li>
          <li className="text-[1.1vw] hover:text-[#18c79b] flex gap-2 items-center cursor-pointer group">
            <img src="folder.svg" className="transition-transform group-hover:scale-110" style={{ width: '1.1vw', height: '1.1vw' }} />
            <Link href="#projects">Projects</Link>
          </li>
          <li className="text-[1.1vw] hover:text-[#18c79b] flex gap-2 items-center cursor-pointer group">
            <img src="file.svg" className="transition-transform group-hover:scale-110" style={{ width: '1.1vw', height: '1.1vw' }} />
            <a href="/Resume.pdf" download target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
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
  );
}
