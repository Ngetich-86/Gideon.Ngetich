import CertData from "../components/CertData";
import Confetti from "../components/Confetti";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Certification = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true,
    });

    // Reveal the title section
    sr.reveal('.certification-title', {
      origin: 'bottom',
      distance: '100px',
      duration: 800,
      easing: 'ease-in-out',
    });

    // Reveal each certification card with a delay
    sr.reveal('.certification-card', {
      origin: 'bottom',
      distance: '100px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
      interval: 100,
    });
  }, []);

  return (
    <div className="min-h-screen futuristic-gradient-background text-white pt-20 pb-20">
      <div className="container mx-auto px-4 py-12 max-w-7xl relative">
        <Confetti />
        <div className="certification-title text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Badges & Certifications</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-400">
            Click to view my verified achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CertData.map((certification) => (
            <a
              key={certification.id}
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-card group bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center h-full">
                <div className="w-24 h-24 md:w-32 md:h-32 mb-6 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={certification.icon}
                    alt={certification.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-center text-gray-200 group-hover:text-white transition-colors mb-4">
                  {certification.name}
                </h3>
                <div className="mt-auto text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to verify →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;