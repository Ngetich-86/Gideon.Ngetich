// import { IoLogoReddit } from 'react-icons/io5';
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import image1 from "../assets/images/heroimg.png";
import ScrollReveal from "scrollreveal";
import { useEffect } from 'react';
import TypingEffect from '../components/TypingEffect';
import { useAnalytics } from '../hooks/useAnalytics';

const HomePage = () => {
  const { trackPageView, trackEvent } = useAnalytics();

  useEffect(() => {
    // Track page view
    trackPageView('/', 'Home Page');

    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true,
    });

    
    sr.reveal('.fade-in', { origin: 'bottom' });

    sr.reveal('.typing-effect', { origin: 'left' });

    // Reveal elements with the class 'animate-image'
    sr.reveal('.animate-image', { 
      origin: 'right',
      distance: '250px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.9,
      reset: true
    });
    // Reveal the description from the bottom
    sr.reveal('.description', {
      origin: 'bottom',
      distance: '250px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.9,
      reset:true
    });

    // Reveal elements with the class 'animate-social'
    sr.reveal('.animate-social', {
      origin: 'right',
      distance: '100px',
      duration: 800,
      delay: 400,
      easing: 'ease-in-out',
      interval: 100
    });
  }, [trackPageView]);

  const handleSocialClick = (platform: string) => {
    trackEvent('social_click', {
      platform,
      location: 'homepage'
    });
  };

  return (
    <div className="h-fit min-h-screen w-full gradient-abstract-background flex items-center justify-center pt-24 pb-12 px-4">
      {/* Social Media Icons Section */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 text-2xl z-50">
        <a
          href="https://www.linkedin.com/in/gideon-ngetich/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-social"
          onClick={() => handleSocialClick('linkedin')}
        >
          <IoLogoLinkedin className="text-[#4169e1]" />
        </a>
        <a
          href="https://x.com/singh34274"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-social"
          onClick={() => handleSocialClick('twitter')}
        >
          <IoLogoTwitter className="text-[#4169e1]" />
        </a>
        <a
          href="https://github.com/Ngetich-86"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-social"
          onClick={() => handleSocialClick('github')}
        >
          <IoLogoGithub className="text-[#4169e1]" />
        </a>
        {/* <a
          href="https://www.reddit.com/user/IndependentZone7413/"
          target="_blank"
          rel="noreferrer"
          aria-label="Reddit"
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-social"
          onClick={() => handleSocialClick('reddit')}
        >
          <IoLogoReddit className="text-[#4169e1]" size={24} />
        </a> */}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg xs:text-3xl lg:text-2xl xl:text-5xl text-white typing-effect">
                Hello 👋, I'm{" "}
                <span className="text-[#00bfff]">
                  <TypingEffect 
                    text="< Gideon Ngetich />"
                    typingSpeed={120}
                    deletingSpeed={70}
                    delay={1000}
                    className="pl-2"
                  />
                </span>
              </h3>
              <p className="text-2xl md:text-3xl text-slate-300 font-medium fade-in">
                Software Developer & Cloud Enthusiast
              </p>
            </div>

            <div className="space-y-8 fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">Full Stack Developer</span>
                <br />
                Building Digital Experiences
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 description">
                I create modern, responsive web applications with cutting-edge technologies.
                Let's build something amazing together.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href='#contact' className="btn btn-primary bg-[#4169e1] hover:bg-[#2d4eb3] text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get in Touch
                </a>
                <a href='#projects' className="btn bg-white/90 hover:bg-white text-[#4169e1] px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-medium">
                  View Projects
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-64 md:w-80 animate-image">
            <div className="relative z-10">
              <img
                src={image1}
                alt="Gideon Ngetich"
                className='breathing-image w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#4169e1]/20 to-[#00bfff]/20 rounded-2xl blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
