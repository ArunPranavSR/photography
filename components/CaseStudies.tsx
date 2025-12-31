import React from 'react';
import { Link } from 'react-router-dom';

export const CaseStudies: React.FC = () => {
  return (
    <section className="w-full h-screen snap-start bg-[#161616] text-[#e5e5e5] flex flex-col px-6 py-6 md:px-10 md:py-6 lg:px-14 lg:py-6">
      
      {/* Header */}
      <div className="mb-4 lg:mb-6 shrink-0">
        <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#d3cfcc]">
          Kenjo's Photography
        </h2>
      </div>

      {/* Grid Content - takes remaining height */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 min-h-0 pb-2">
        
        {/* Column 1: Info + Small Image */}
        <div className="flex flex-col h-full gap-4 lg:gap-6 overflow-y-auto lg:overflow-hidden custom-scrollbar">
          
          {/* Text Block */}
          <div className="flex flex-col items-start gap-3 lg:gap-4 shrink-0 pr-4 lg:pr-0">
             <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase mt-1">
                <span>April 2023</span>
                <span className="text-neutral-700">|</span>
                <span>Tokyo, Japan</span>
             </div>
             
             <h3 className="text-2xl md:text-3xl font-bold text-[#e5e5e5] tracking-tight">
               Portraits of Urban Rhythm
             </h3>
             
             <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
               Enter the bustling world of Tokyo's train stations through Kenjo Sato's lens as he captures the captivating essence of people navigating the vibrant cityscape. In this series, Kenjo delves into the unique rhythm and energy found within the heart of Tokyo's bustling transportation hubs.
             </p>

             <Link to="/work/0" className="mt-1 px-8 py-3 rounded-full bg-[#d3cfcc] text-[#1a1a1a] text-sm font-semibold hover:bg-white hover:scale-105 transition-all duration-300 no-underline">
               View case study
             </Link>
          </div>

          {/* Bottom Image (Random) */}
          <div className="flex-1 w-full min-h-[150px] relative rounded-[2rem] overflow-hidden group">
            <img 
               src="https://picsum.photos/800/600?random=1" 
               alt="Urban photography 1" 
               className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* Column 2: Tall Image (Random) */}
        <div className="hidden md:block h-full w-full relative rounded-[2rem] overflow-hidden group">
            <img 
               src="https://picsum.photos/600/1200?random=2" 
               alt="Urban photography 2" 
               className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
        </div>

        {/* Column 3: Tall Image (Random) */}
        <div className="hidden lg:block h-full w-full relative rounded-[2rem] overflow-hidden group">
            <img 
               src="https://picsum.photos/600/1200?random=3" 
               alt="Urban photography 3" 
               className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
        </div>

      </div>
    </section>
  )
};