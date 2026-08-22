import CertData, { Certification as CertificationEntry } from "../components/CertData";
import { Suspense, lazy, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { FaCertificate } from 'react-icons/fa';

const Confetti = lazy(() => import("../components/Confetti"));

const GROUP_ORDER: CertificationEntry['group'][] = [
  'Cloud & AI',
  'Linux & Cloud Native',
  'Development & Community'
];

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
        <Suspense fallback={null}>
          <Confetti />
        </Suspense>
        <div className="certification-title text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Badges & Certifications</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-400">
            Professional credentials across cloud, Linux/cloud-native, and software development
          </p>
        </div>

        {GROUP_ORDER.map((group) => {
          const entries = CertData.filter((certification) => certification.group === group);
          if (entries.length === 0) return null;

          return (
            <div key={group} className="mb-14">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-6 text-center md:text-left">
                {group}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {entries.map((certification) => {
                  const cardContent = (
                    <div className="flex flex-col items-center h-full">
                      <div className="w-20 h-20 md:w-24 md:h-24 mb-6 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                        {certification.icon ? (
                          <img
                            src={certification.icon}
                            alt={certification.name}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        ) : (
                          <FaCertificate className="text-5xl text-blue-400/70" />
                        )}
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-center text-gray-200 group-hover:text-white transition-colors mb-2">
                        {certification.name}
                      </h3>
                      {certification.issuer && (
                        <p className="text-sm text-gray-400 text-center mb-4">{certification.issuer}</p>
                      )}
                      {certification.link && (
                        <div className="mt-auto text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to verify →
                        </div>
                      )}
                    </div>
                  );

                  const cardClassName =
                    "certification-card group bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1";

                  return certification.link ? (
                    <a
                      key={certification.id}
                      href={certification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClassName}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div key={certification.id} className={cardClassName}>
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certification;