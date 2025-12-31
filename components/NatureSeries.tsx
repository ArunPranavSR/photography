import React, { useEffect, useRef } from 'react';

export const NatureSeries: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    // The scroller is the parent element with overflow-y-auto in App.tsx
    const scroller = section.parentElement;
    if (!scroller) return;

    const handleParallax = () => {
      const sectionRect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      // Only animate if the section is partially in view
      if (sectionRect.top < viewHeight && sectionRect.bottom > 0) {
        // Calculate the percentage of the section's progress through the viewport
        // 0 when section top is at viewport bottom, 1 when section bottom is at viewport top
        const range = viewHeight + sectionRect.height;
        const progress = (viewHeight - sectionRect.top) / range;
        
        // Use a sinusoidal mapping to make the movement more pronounced in the center
        // and subtle (slower) at the entrance and exit of the viewport.
        // Math.sin maps (-0.5 to 0.5) * PI to (-1 to 1) with the steepest slope at 0.
        const easedProgress = Math.sin((progress - 0.5) * Math.PI);
        const movement = easedProgress * 45; // Slightly increased amplitude for impact
        
        image.style.transform = `translateY(${movement}px) scale(1.2)`;
      }
    };

    scroller.addEventListener('scroll', handleParallax, { passive: true });
    // Initial call
    handleParallax();

    return () => scroller.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full h-screen snap-start bg-[#161616] text-[#e5e5e5] flex flex-col px-6 py-6 md:px-10 md:py-6 lg:px-14 lg:py-6 gap-4 lg:gap-6 overflow-hidden"
    >
      
      {/* Top Section: Large Image + Text Content */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
        
        {/* Large Image (Left) - Takes up about 60% of width on desktop */}
        <div className="w-full lg:w-[60%] h-full relative rounded-[2rem] overflow-hidden group">
          <img 
            ref={imageRef}
            src="https://picsum.photos/1600/1200?random=10" 
            alt="Nature photography main" 
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-out will-change-transform group-hover:grayscale-0"
            style={{ transform: 'scale(1.2)' }} // Increased base scale to accommodate more movement
          />
        </div>

        {/* Text Content (Right) - Takes up about 40% of width */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center items-start lg:pl-6 overflow-y-auto lg:overflow-visible custom-scrollbar z-10">
           
           {/* Meta Info */}
           <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-4">
              <span>March 2023</span>
              <span className="text-neutral-700">|</span>
              <span>Lake Kussharo, Japan</span>
           </div>
           
           {/* Title */}
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 text-[#e5e5e5] tracking-tight">
             A Symphony of Earthly Wonders
           </h2>
           
           {/* Description */}
           <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-8 max-w-md">
             Step into the mesmerizing world of Kenjo Sato's nature series, where the beauty of the natural world unfolds in breathtaking detail. Through his lens, Kenjo captures the harmony and grandeur of Earth's landscapes, from vast mountain ranges to delicate flower petals.
           </p>

           {/* Button */}
           <button className="px-8 py-3 rounded-full bg-[#d3cfcc] text-[#1a1a1a] text-sm font-semibold hover:bg-white hover:scale-105 transition-all duration-300">
             View case study
           </button>
        </div>
      </div>

      {/* Bottom Section: 3 Images - Fixed height ratio approx 35-40% of page */}
      <div className="h-[200px] md:h-[35%] shrink-0 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 z-10">
         {/* Image 1 */}
         <div className="relative rounded-[2rem] overflow-hidden group hidden md:block">
            <img 
              src="https://picsum.photos/800/600?random=11" 
              alt="Nature detail 1" 
              className="absolute inset-0 w-full h-full object-cover grayscale scale-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
         </div>
         
         {/* Image 2 */}
         <div className="relative rounded-[2rem] overflow-hidden group hidden md:block">
             <img 
              src="https://picsum.photos/800/600?random=12" 
              alt="Nature detail 2" 
              className="absolute inset-0 w-full h-full object-cover grayscale scale-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
         </div>
         
         {/* Image 3 */}
         <div className="relative rounded-[2rem] overflow-hidden group">
             <img 
              src="https://picsum.photos/800/600?random=13" 
              alt="Nature detail 3" 
              className="absolute inset-0 w-full h-full object-cover grayscale scale-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
         </div>
      </div>
    </section>
  );
};