
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const exhibitions = [
    {
        year: '2023',
        title: 'Silence in Chaos',
        location: 'Tokyo Arts Center',
        type: 'Solo Exhibition',
        description: 'A solo exhibition exploring the relationship between silence and chaos in urban environments. The series features a collection of black and white photographs taken in Tokyo. The work delves into finding moments of stillness amidst the bustling city life, presented through high-contrast monochrome prints.',
        mainImage: 'https://picsum.photos/seed/chaos/1600/1200',
        gallery: [
            'https://picsum.photos/seed/chaos1/800/1000',
            'https://picsum.photos/seed/chaos2/1200/800',
            'https://picsum.photos/seed/chaos3/800/600',
        ]
    },
    {
        year: '2023',
        title: 'Modern Perspectives',
        location: 'Mori Art Museum',
        type: 'Group Show',
        description: 'A group show featuring contemporary artists from around the world. My work, \'Urban Solitude,\' was selected for this exhibition, which aimed to showcase new voices in photography and digital art. The piece explores the feeling of isolation in densely populated areas.',
        mainImage: 'https://picsum.photos/seed/modern/1600/1200',
        gallery: [
            'https://picsum.photos/seed/modern1/800/1000',
            'https://picsum.photos/seed/modern2/1200/800',
            'https://picsum.photos/seed/modern3/800/600',
        ]
    },
    {
        year: '2022',
        title: 'Ephemeral Moments',
        location: 'Kyoto Photography Museum',
        type: 'Solo Exhibition',
        description: 'This exhibition captures the fleeting beauty of everyday moments in the historic city of Kyoto. The photographs were taken over a period of one year, focusing on the changing seasons and the quiet, often overlooked, details of life.',
        mainImage: 'https://picsum.photos/seed/eph/1600/1200',
        gallery: [
            'https://picsum.photos/seed/eph1/800/1000',
            'https://picsum.photos/seed/eph2/1200/800',
            'https://picsum.photos/seed/eph3/800/600',
        ]
    },
    {
        year: '2021',
        title: 'Urban Solitude',
        location: 'Gallery 91, New York',
        type: 'International Feature',
        description: 'An international feature of my work at Gallery 91 in New York. The exhibition showcased my \'Urban Solitude\' series, which gained international recognition and was a pivotal moment in my career. The series was praised for its atmospheric and cinematic quality.',
        mainImage: 'https://picsum.photos/seed/solitude/1600/1200',
        gallery: [
            'https://picsum.photos/seed/solitude1/800/1000',
            'https://picsum.photos/seed/solitude2/1200/800',
            'https://picsum.photos/seed/solitude3/800/600',
        ]
    },
    {
        year: '2020',
        title: 'The Void',
        location: 'Online Virtual Gallery',
        type: 'Digital Installation',
        description: 'A digital installation exploring the concept of the void through a series of manipulated images and immersive soundscapes. The work was created during the global lockdown and reflects on themes of emptiness, connection, and the digital realm as a new frontier for art.',
        mainImage: 'https://picsum.photos/seed/void/1600/1200',
        gallery: [
            'https://picsum.photos/seed/void1/800/1000',
            'https://picsum.photos/seed/void2/1200/800',
            'https://picsum.photos/seed/void3/800/600',
        ]
    },
  ];

  if (exhibitions.length === 0) {
    return (
      <div className="h-screen w-full bg-stone-custom text-text-dark font-sans p-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl mb-4">Work not found</h1>
        <Link to="/" className="flex items-center gap-2 text-lg hover:underline">
          <ArrowLeft size={20} />
          Back to Exhibitions
        </Link>
      </div>
    );
  }

  const workId = parseInt(id || '0', 10);
  const work = exhibitions[workId % exhibitions.length];

  if (!work) {
    return (
        <div className="h-screen w-full bg-stone-custom text-text-dark font-sans p-8 flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-4">Work not found</h1>
            <Link to="/" className="flex items-center gap-2 text-lg hover:underline">
                <ArrowLeft size={20} />
                Back to Exhibitions
            </Link>
        </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-stone-custom text-text-dark font-sans">
      <div className="p-6 md:p-10 lg:p-14">
        {/* -- Back Link -- */}
        <div className="mb-12">
            <Link to="/" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 mb-8 w-fit hover:border-black/50 transition-colors">
                <ArrowLeft size={16} />
                All Works
            </Link>
        </div>

        {/* -- Project Header -- */}
        <header className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">{work.title}</h1>
            <p className="text-lg md:text-xl text-neutral-600 font-medium">{work.location}</p>
            <div className="mt-6 flex justify-center items-center gap-4">
                <span className="text-sm font-bold bg-black text-white px-3 py-1 rounded">{work.year}</span>
                <span className="text-xs font-bold uppercase tracking-widest border border-black/20 px-3 py-1 rounded-full bg-white/50">{work.type}</span>
            </div>
        </header>

        {/* -- Main Image -- */}
        <div className="mb-16 rounded-[2rem] overflow-hidden group h-[50vh] md:h-[80vh] relative">
            <img 
                src={work.mainImage} 
                alt={work.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out transform group-hover:scale-105"
            />
        </div>

        {/* -- Project Description -- */}
        <section className="max-w-2xl mx-auto mb-20">
            <h2 className="text-lg font-bold uppercase tracking-widest mb-6 text-neutral-500">About the Project</h2>
            <p className="text-base md:text-lg leading-relaxed text-neutral-800">{work.description}</p>
        </section>

        {/* -- Gallery -- */}
        <section className="mb-20">
            <h2 className="text-lg font-bold uppercase tracking-widest mb-8 text-neutral-500 max-w-2xl mx-auto">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-7 rounded-[2rem] overflow-hidden h-96 md:h-auto group">
                    <img src={work.gallery[0]} alt={`${work.title} gallery image 1`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"/>
                </div>
                <div className="md:col-span-5 rounded-[2rem] overflow-hidden h-96 md:h-auto group">
                    <img src={work.gallery[1]} alt={`${work.title} gallery image 2`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"/>
                </div>
                 <div className="md:col-span-12 rounded-[2rem] overflow-hidden h-96 md:h-auto group mt-4">
                    <img src={work.gallery[2]} alt={`${work.title} gallery image 3`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"/>
                </div>
            </div>
        </section>

      </div>
    </main>
  );
};

export default WorkDetail;
