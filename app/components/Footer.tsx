export default function Footer() {
    return (
      <footer className="bg-gray-800 text-[var(--color-text-light)] py-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-[1vw]">&copy; 2024 Niño U. All rights reserved.</p>
          <p className="text-[1vw]">Contact Me @</p>
  
          <div className="flex justify-center gap-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/nino.ursal.41"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
  
            {/* GitHub */}
            <a
              href="https://github.com/Paksiw41"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
  
            {/* Gmail */}
            <a
              href="mailto:marknino41@gmail.com"
              aria-label="Gmail"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/mail.svg" alt="Gmail" className="w-6 h-6" />
            </a>
  
            {/* Instagram */}
            <a
              href="https://instagram.com/nino_ursal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  