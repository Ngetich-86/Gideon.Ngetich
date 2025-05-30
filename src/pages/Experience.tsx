import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { ExperienceData } from '../components/ExperienceData';

const Experience: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true,
    });

    // Reveal the title section
    sr.reveal('.experience-title', {
      origin: 'bottom',
      distance: '100px',
      duration: 800,
      easing: 'ease-in-out',
    });

    // Reveal each experience card with a delay
    sr.reveal('.experience-card', {
      origin: 'bottom',
      distance: '100px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
      interval: 100,
    });
  }, []);

  return (
    <section id="experience" className="min-h-screen gradient-background text-white pt-20 pb-20">
      <div className="container mx-auto px-4 py-12">
        <div className="experience-title text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-400">
            My professional journey and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ExperienceData.map((item) => (
            <div
              key={item.id}
              className="experience-card group bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="w-16 h-16 object-contain rounded-lg bg-white/10 p-2 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-400">
                      {item.period}
                    </span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-gray-300 mb-4">
                  <li>{item.description}</li>
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.technologiesLearnt.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;