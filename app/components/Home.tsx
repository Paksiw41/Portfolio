"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

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
          <p className="text-[1.5vw]">Aspiring | Game Developer, Web Developer, UI/UX Designer</p>
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
