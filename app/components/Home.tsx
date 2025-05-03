"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Dynamically load the animation JSON
    import('../../public/animations/world.json')
      .then((data) => setAnimationData(data.default))
      .catch((err) => console.error('Error loading animation:', err));
  }, []);

  return (
    <section id="home" className="font-[var(--font-poppins)] relative flex min-h-screen text-[var(--color-text-light)] items-center py-12">
      <header className="flex w-full justify-between items-center text-center pl-[17vw]">
        <div className="text-left flex flex-col">
          <h1 className="font-[var(--font-poppins)] text-[5vw] font-bold animate-typing tracking-tighter">
            <span>H</span><span>i</span><span>,</span><span> </span><span>I</span><span>'</span><span>m</span><span> </span><span>"</span>
            <span className=" text-[#18c79b]">N</span><span className=" text-[#18c79b]">i</span><span className=" text-[#18c79b]">ñ</span><span className=" text-[#18c79b]">o</span>
            <span>"</span><span>!</span>
          </h1>
          <motion.p
            initial={{ x: -800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              x: { duration: 3, ease: 'easeOut' },
              opacity: { duration: 3, ease: 'easeInOut' }
            }}
            className="text-[1.5vw] mt-4"
          >
            Aspiring | Game Developer, Web Developer, UI/UX Designer
          </motion.p>

            <motion.a
              href="mailto:marknino41@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: [1, 1.03, 1],
              }}
              transition={{
                y: { duration: 0.8, ease: 'easeOut' },
                opacity: { duration: 1, ease: 'easeInOut' },
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay: 3, // delay until after entrance
                },
                delay: 2.5,
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-[1.5vw] w-fit flex items-center gap-[0.6vw] bg-[#18c79b] text-[1.2vw] text-[#0B2F2C] font-medium px-[1.2vw] py-[0.6vw] rounded-full shadow-md hover:brightness-110"
            >
              <img src="/mailWhite.svg" alt="Mail Icon" className="w-[1.4vw] h-[1.4vw]" />
              Say Hi!
            </motion.a>

        </div>


        {/* Right side: Animation */}
        <div className="w-[20vw] sm:w-[30vw] md:w-[40vw] lg:w-[30vw] mr-[5vw] flex justify-center">
          {/* Only show Lottie animation if it has been loaded */}
          {animationData && (
            <Lottie animationData={animationData} loop autoplay className="w-full h-auto" />
          )}
        </div>
      </header>
    </section>
  );
}
