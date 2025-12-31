
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real app, you might fetch this based on the id.
  const caseStudy = {
    title: 'Portraits of Urban Rhythm',
    date: 'April 2023',
    location: 'Tokyo, Japan',
    description: 'Enter the bustling world of Tokyo\'s train stations through Kōsuke Nakamura\'s lens as he captures the captivating essence of people navigating the vibrant cityscape. In this series, Kōsuke delves into the unique rhythm and energy found within the heart of Tokyo\'s bustling transportation hubs. This project involved spending over 100 hours in various stations, observing and waiting for the perfect moments that tell a story of movement, community, and the individual within the crowd. The resulting collection of 50 curated photographs aims to showcase the poetry of the daily commute.',
    mainImage: 'https://picsum.photos/seed/urban-main/1600/900',
    gallery: [
      'https://picsum.photos/seed/urban1/800/600',
      'https://picsum.photos/seed/urban2/1200/800',
      'https://picsum.photos/seed/urban3/800/1000',
      'https://picsum.photos/seed/urban4/1200/900',
    ],
    challenges: 'One of the main challenges was the constant motion and the low-light conditions of the subway. Capturing sharp, candid moments without disturbing the subjects required patience and technical skill. I used a high-speed lens and pushed my film to capture the ambient light and preserve the natural atmosphere of the stations.',
    outcome: 'The series was featured in a solo exhibition at the Tokyo Metropolitan Theatre and received positive reviews for its authentic portrayal of city life. Several pieces were acquired by private collectors. The project solidified my passion for street photography and a capturing the human element within urban landscapes.'
  };

  return (
    <main className="w-full min-h-screen bg-stone-custom text-text-dark font-sans">
      <div className="p-6 md:p-10 lg:p-14">
        <div className="mb-12">
            <Link to="/" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 mb-8 w-fit hover:border-black/50 transition-colors">
                <ArrowLeft size={16} />
                Back to Home
            </Link>
        </div>

        <header className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">{caseStudy.title}</h1>
            <p className="text-lg md:text-xl text-neutral-600 font-medium">{caseStudy.location} - {caseStudy.date}</p>
        </header>

        <div className="mb-16 rounded-[2rem] overflow-hidden group h-[50vh] md:h-[80vh] relative">
            <img
                src={caseStudy.mainImage}
                alt={caseStudy.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out transform group-hover:scale-105"
            />
        </div>

        <section className="max-w-3xl mx-auto mb-20 prose lg:prose-xl">
            <h2>About the Project</h2>
            <p>{caseStudy.description}</p>

            <h2>Challenges</h2>
            <p>{caseStudy.challenges}</p>

            <h2>Outcome</h2>
            <p>{caseStudy.outcome}</p>
        </section>

        <section className="mb-20">
            <h2 className="text-lg font-bold uppercase tracking-widest mb-8 text-neutral-500 max-w-3xl mx-auto">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                {caseStudy.gallery.map((img, index) => (
                    <div key={index} className="rounded-[2rem] overflow-hidden h-96 md:h-[60vh] group">
                        <img src={img} alt={`${caseStudy.title} gallery image ${index + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"/>
                    </div>
                ))}
            </div>
        </section>

      </div>
    </main>
  );
};

export default CaseStudyDetail;
