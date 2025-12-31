import React from 'react';
import { ArrowDown, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <main className="w-full h-screen snap-start px-6 py-6 md:px-10 md:py-8 lg:px-14 lg:py-4">
      
      {/* 
         Grid Layout Container 
         - grid-rows-[auto_1fr_auto]: Creates a header, a flexible middle, and a footer.
         - h-full: Ensures it takes up the full height of the container.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_1fr_auto] gap-y-4 lg:gap-y-0 lg:gap-x-8 h-full w-full">
        
        {/* --- IMAGE COLUMN (Right side, spans full height) --- */}
        {/* Placed first in DOM for stacking context, but positioned via grid-column/row */}
        <div className="hidden lg:block lg:col-span-4 lg:col-start-9 lg:row-span-3 h-full relative pl-4">
          <div className="w-full h-full relative overflow-hidden rounded-[2.5rem]">
             <img 
               src="https://picsum.photos/800/1200?grayscale" 
               alt="Portrait" 
               className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700 ease-out"
             />
             <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>

        {/* --- TOP ROW (Header) --- */}
        
        {/* Logo */}
        <div className="col-span-1 lg:col-span-4 lg:row-start-1 pt-2">
          <h1 className="text-lg md:text-xl font-bold tracking-tight">
            Kōsuke Nakamura<sup className="text-[0.6em] ml-0.5">®</sup>
          </h1>
        </div>

        {/* Intro Text */}
        <div className="col-span-1 lg:col-span-4 lg:row-start-1 lg:pr-8 pt-2">
          {/* Reduced text size by 1px again: 14->13px, 16->15px */}
          <p className="text-[13px] md:text-[15px] leading-relaxed text-neutral-800/90 font-medium max-w-sm">
            Welcome to the world as seen through the lens of Kōsuke Nakamura, an acclaimed photographer specializing in both nature and people, Kōsuke possesses an innate ability to encapsulate the essence of life's beautiful moments in his images.
          </p>
        </div>


        {/* --- MIDDLE ROW (Main Content) --- */}
        
        <div className="col-span-1 lg:col-span-8 lg:row-start-2 flex flex-col justify-center items-start z-10 py-4 lg:py-0">
          {/* Using vh units for font size to ensure it fits vertically on laptops */}
          <h2 className="text-5xl md:text-7xl lg:text-[11vh] xl:text-[12vh] leading-[0.85] font-bold tracking-tighter mb-6 lg:mb-10 text-gray-900">
            Kōsuke Nakamura<sup className="text-2xl lg:text-4xl align-top top-0 ml-2">®</sup>
          </h2>
          
          <button className="group flex items-center gap-3 bg-[#1c1c1c] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full transition-all hover:scale-105 active:scale-95 duration-300">
            <span className="text-xs lg:text-sm font-medium tracking-wide">View portfolio</span>
            <ArrowDown className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>


        {/* --- BOTTOM ROW (Footer) --- */}

        {/* Location */}
        <div className="col-span-1 lg:col-span-4 lg:row-start-3 flex items-end pb-2">
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-neutral-800">
            <span>From Tokyo, Japan</span>
            <Globe className="w-3 h-3 lg:w-4 lg:h-4 stroke-1.5" />
          </div>
        </div>

        {/* Description Text */}
        <div className="col-span-1 lg:col-span-4 lg:row-start-3 lg:pr-12 flex items-end pb-2">
           <p className="text-xs md:text-sm leading-relaxed text-neutral-800/90 font-medium max-w-md">
            A journey into the spaces we inhabit, the people we encounter, and the collective stories we share. Embark on a visual journey like no other.
          </p>
        </div>

      </div>
    </main>
  );
};