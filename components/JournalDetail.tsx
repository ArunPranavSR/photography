
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';

const JournalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const articles = [
    {
      category: 'Philosophy',
      title: 'The Art of Silence',
      date: 'Oct 12, 2023',
      excerpt: 'Exploring the quiet spaces between the noise of modern life, and how photography can capture the unseen moments of reflection.',
      image: 'https://picsum.photos/seed/journal1/1600/1000',
      content: `
<p>In our hyper-connected world, true silence has become a rare commodity. This series of photographs is a journey to find and capture those fleeting moments of quiet contemplation. It’s an exploration of the spaces in between – the pause in a conversation, the stillness of a city at dawn, the soft rustle of leaves in an empty park.</p>
<p>The technical approach was to use a long exposure to blur the chaos of life, leaving only the constants. The resulting images have an ethereal quality, where the noise of the world fades into a soft hum, and the viewer is invited to step into a moment of peace.</p>
<p>Ultimately, “The Art of Silence” is not just about the absence of noise, but the presence of a deeper, more profound connection to our surroundings and ourselves. It’s a reminder that sometimes, the most powerful statements are made in the quietest moments.</p>
`
    },
    {
      category: 'Technique',
      title: 'Shadows & Light',
      date: 'Sep 28, 2023',
      excerpt: 'A technical deep dive into high-contrast black and white photography in low-light urban environments using analog film.',
      image: 'https://picsum.photos/seed/journal2/1600/1000',
      content: `
<p>This article is for the purists, the film lovers, the ones who find magic in the darkroom. We’ll explore the technical challenges and artistic rewards of shooting high-contrast black and white film in the heart of the city at night. From choosing the right film stock (and pushing it to its limits) to mastering the art of metering in tricky lighting, this is a comprehensive guide to creating dramatic, atmospheric images.</p>
<p>I share my personal techniques for developing film to enhance grain and contrast, as well as my printing process for creating rich, deep blacks and sparkling highlights. We’ll also discuss composition, and how to use shadow and light as active elements in your storytelling.</p>
`
    },
    {
      category: 'Travel',
      title: 'Hokkaido Winter',
      date: 'Jan 15, 2023',
      excerpt: 'Documenting the stark white landscapes of northern Japan during the harshest months of the year, focusing on minimalism.',
      image: 'https://picsum.photos/seed/journal3/1600/1000',
      content: `
<p>Hokkaido in winter is a world transformed. It is a landscape of profound minimalism, where the world is reduced to its essential forms. This photo essay is a record of a three-week journey through this winter wonderland, a personal meditation on solitude, resilience, and the awesome power of nature.</p>
<p>The challenge was to capture the subtlety of the landscape – the delicate textures of snow, the stark silhouettes of trees, the soft, diffused light of a winter sky. I chose to work with a medium format camera to capture the immense detail and to create prints that convey the scale and grandeur of the scenes.</p>
<p>This series is an invitation to embrace the quiet beauty of winter, and to find a sense of peace in the simplicity of a world blanketed in snow.</p>
`
    }
  ];

  const articleId = parseInt(id || '0');
  const article = articles[articleId % articles.length];

  if (!article) {
    return (
        <div className="h-screen w-full bg-[#161616] text-[#e5e5e5] font-sans p-8 flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-4">Article not found</h1>
            <Link to="/" className="flex items-center gap-2 text-lg hover:underline">
                <ArrowLeft size={20} />
                Back to Journal
            </Link>
        </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#161616] text-[#e5e5e5] font-sans">
      <article className="p-6 md:p-10 lg:p-14">
        <div className="mb-12 max-w-4xl mx-auto">
            <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors w-fit">
                <ArrowLeft size={16} />
                All Articles
            </Link>
        </div>

        <header className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <div className="flex justify-center items-center gap-4 mb-4">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
                    <BookOpen size={14}/> {article.category}
                </span>
                <span className="text-neutral-600">•</span>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
                    <Clock size={14}/> {article.date}
                </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#d3cfcc] mb-4">{article.title}</h1>
        </header>

        <div className="mb-12 md:mb-16 rounded-[2rem] overflow-hidden group h-[40vh] md:h-[70vh] relative max-w-6xl mx-auto">
            <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform scale-105 opacity-90"
            />
        </div>

        <div className="prose prose-invert prose-lg max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: article.content }}></div>

      </article>
      
      <footer className="px-6 md:px-10 lg:px-14 pb-8">
          <div className="max-w-2xl mx-auto mt-16 pt-8 border-t border-white/10 flex justify-center">
              <Link to="/" className="text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">
                  Back to Journal
              </Link>
          </div>
      </footer>
    </main>
  );
};

export default JournalDetail;
