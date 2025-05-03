'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects'];
      let current = '';

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= window.innerHeight / 2) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', icon: 'home.svg', id: 'home' },
    { label: 'About', href: '#about', icon: 'user.svg', id: 'about' },
    { label: 'Experience', href: '#experience', icon: 'file-text.svg', id: 'experience' },
    { label: 'Projects', href: '#projects', icon: 'folder.svg', id: 'projects' },
    { label: 'Resume', href: '/Resume.pdf', icon: 'file.svg', id: '', download: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      className="w-full fixed top-0 left-0 z-50 bg-opacity-90 backdrop-blur-md flex justify-between items-center px-[17vw] py-4"
    >
      <div className="flex gap-25">
        <div className="text-[1.1vw] font-bold text-[var(--color-text-light)] hover:text-[#18c79b]">Niño</div>
        <ul className="flex gap-4 text-lg text-[var(--color-text-light)]">
          {navItems.map(({ label, href, icon, id, download }) => (
            <li
              key={label}
              className={`text-[1.1vw] flex gap-2 items-center cursor-pointer group ${
                activeSection === id ? 'text-[#18c79b]' : 'hover:text-[#18c79b]'
              }`}
            >
              <img
                src={icon}
                className="transition-transform group-hover:scale-110"
                style={{ width: '1.1vw', height: '1.1vw' }}
              />
              {download ? (
                <a href={href} download target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </li>
          ))}
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
    </motion.nav>
  );
}
