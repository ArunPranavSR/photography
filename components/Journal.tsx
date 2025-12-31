import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export const Journal: React.FC = () => {
  const articles = [
    {
      category: 'Philosophy',
      title: 'The Art of Silence',
      date: 'Oct 12, 2023',
      excerpt: 'Exploring the quiet spaces between the noise of modern life, and how photography can capture the unseen moments of reflection.',
      image: 'https://picsum.photos/600/400?grayscale&random=20'
    },
    {
      category: 'Technique',
      title: 'Shadows & Light',
      date: 'Sep 28, 2023',
      excerpt: 'A technical deep dive into high-contrast black and white photography in low-light urban environments using analog film.',
      image: 'https://picsum.photos/600/400?grayscale&random=21'
    },
    {
      category: 'Travel',
      title: 'Hokkaido Winter',
      date: 'Jan 15, 2023',
      excerpt: 'Documenting the stark white landscapes of northern Japan during the harshest months of the year, focusing on minimalism.',
      image: 'https://picsum.photos/600/400?grayscale&random=22'
    }
  ];

  return (
    <section className="w-full h-screen snap-start bg-[#161616] text-[#e5e5e5] flex flex-col px-6 py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
       <div className="flex justify-between items-end mb-8 lg:mb-12 shrink-0">
        <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                <BookOpen className="w-4 h-4" />
                Latest Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#d3cfcc]">
            Journal
            </h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-white text-neutral-500 transition-colors group">
          View Archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 min-h-0 overflow-y-auto custom-scrollbar pb-4">
        {articles.map((article, idx) => (
          <div key={idx} className="group flex flex-col gap-4 cursor-pointer">
             <div className="w-full aspect-[4/3] overflow-hidden rounded-[1.5rem] relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                  {article.category}
                </div>
             </div>
             
             <div className="flex flex-col gap-2 px-2">
               <div className="flex items-center justify-between text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  <span>{article.date}</span>
                  <span className="w-8 h-[1px] bg-neutral-700"></span>
               </div>
               <h3 className="text-xl md:text-2xl font-bold group-hover:text-white transition-colors">{article.title}</h3>
               <p className="text-sm text-neutral-400 leading-relaxed">
                 {article.excerpt}
               </p>
               <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                  Read Article <ArrowRight className="w-3 h-3" />
               </div>
             </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 md:hidden flex justify-center shrink-0">
         <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-white text-neutral-500 transition-colors">
          View Archive <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};