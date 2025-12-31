import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Trophy, Star, Medal } from 'lucide-react';

export const Exhibitions: React.FC = () => {
  const exhibitions = [
    { year: '2023', title: 'Silence in Chaos', location: 'Tokyo Arts Center', type: 'Solo Exhibition' },
    { year: '2023', title: 'Modern Perspectives', location: 'Mori Art Museum', type: 'Group Show' },
    { year: '2022', title: 'Ephemeral Moments', location: 'Kyoto Photography Museum', type: 'Solo Exhibition' },
    { year: '2021', title: 'Urban Solitude', location: 'Gallery 91, New York', type: 'International Feature' },
    { year: '2020', title: 'The Void', location: 'Online Virtual Gallery', type: 'Digital Installation' },
  ];

  return (
    <section className="w-full h-screen snap-start bg-stone-custom text-text-dark flex flex-col px-6 py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 shrink-0 gap-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Exhibitions</h2>
        <span className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1">Selected Works 2020 — 2023</span>
      </div>

      {/* Main Content: List + Awards */}
      <div className="flex-1 flex flex-col min-h-0 overflow-y-auto custom-scrollbar pr-2">
        
        {/* Exhibition List */}
        <div className="flex flex-col mb-12">
          {exhibitions.map((item, index) => (
            <Link key={index} to={`/work/${index}`} className="group flex flex-col md:flex-row md:items-center border-b border-black/10 py-6 md:py-8 hover:bg-white/40 transition-colors px-4 rounded-xl cursor-pointer no-underline text-inherit">
              <div className="w-24 text-sm font-bold text-neutral-500 mb-2 md:mb-0">{item.year}</div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-xl md:text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between md:justify-end md:gap-8 w-full md:w-auto">
                  <span className="text-sm font-medium text-neutral-600">{item.location}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest border border-black/20 px-3 py-1 rounded-full hidden lg:block bg-white/50">
                      {item.type}
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Awards Section */}
        <div className="mt-auto pt-8 border-t-2 border-black/5">
           <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-5 h-5 text-neutral-800" />
              <h3 className="text-lg font-bold uppercase tracking-widest">Awards & Recognition</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#e5e2df] p-6 rounded-2xl hover:bg-[#eae8e6] transition-colors">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold bg-black text-white px-2 py-1 rounded">2023</span>
                    <Star className="w-4 h-4 text-neutral-400" />
                 </div>
                 <p className="font-bold text-lg mb-1">Sony World Photography</p>
                 <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">Shortlist, Architecture</p>
              </div>
              
              <div className="bg-[#e5e2df] p-6 rounded-2xl hover:bg-[#eae8e6] transition-colors">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold bg-black text-white px-2 py-1 rounded">2022</span>
                    <Medal className="w-4 h-4 text-neutral-400" />
                 </div>
                 <p className="font-bold text-lg mb-1">National Geographic</p>
                 <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">Travel Photographer of the Year</p>
              </div>
              
              <div className="bg-[#e5e2df] p-6 rounded-2xl hover:bg-[#eae8e6] transition-colors">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold bg-black text-white px-2 py-1 rounded">2021</span>
                    <Trophy className="w-4 h-4 text-neutral-400" />
                 </div>
                 <p className="font-bold text-lg mb-1">LensCulture</p>
                 <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">Street Photography Awards</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};