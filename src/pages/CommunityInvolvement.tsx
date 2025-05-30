import React, { useState, useEffect } from 'react';
import { communityPhotos } from '../components/CommunityData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ScrollReveal from 'scrollreveal';

const CommunityInvolvement: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % communityPhotos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true,
    });

    // Reveal the title section
    sr.reveal('.community-title', {
      origin: 'bottom',
      distance: '100px',
      duration: 800,
      easing: 'ease-in-out',
    });

    // Reveal the carousel section
    sr.reveal('.community-carousel', {
      origin: 'bottom',
      distance: '100px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
    });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % communityPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + communityPhotos.length) % communityPhotos.length);
  };

  return (
    <section id='community' className="min-h-screen banner-gradient-background text-white pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="community-title text-4xl font-bold text-center text-white mb-8">
          Community Involvement
        </h1>
        
        <div className="community-carousel relative max-w-5xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {communityPhotos.map((photo) => (
                  <div key={photo.id} className="w-full flex-shrink-0">
                    <div className="bg-white">
                      <div className="relative h-[32rem]">
                        <img
                          src={photo.imageUrl}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {photo.title}
                          </h3>
                          <p className="text-gray-200 text-lg">
                            {photo.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <FaChevronLeft className="text-gray-800 text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <FaChevronRight className="text-gray-800 text-xl" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {communityPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityInvolvement;