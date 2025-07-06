import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Footer = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '30px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
      reset: false,
      origin: 'bottom',
      viewFactor: 0.3,
      mobile: true
    });

    // Reveal the brand section
    sr.reveal('.footer-brand', {
      origin: 'left',
      distance: '30px',
      duration: 800,
      easing: 'ease-in-out',
    });

    // Reveal the quick links section
    sr.reveal('.footer-links', {
      origin: 'bottom',
      distance: '30px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
    });

    // Reveal the social links section
    sr.reveal('.footer-social', {
      origin: 'right',
      distance: '30px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
    });

    // Reveal the copyright section
    sr.reveal('.footer-copyright', {
      origin: 'bottom',
      distance: '20px',
      duration: 800,
      delay: 400,
      easing: 'ease-in-out',
    });
  }, []);

    return (
    <footer className="banner-gradient-background backdrop-blur-sm text-white py-8 w-full overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="footer-brand text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-4">Gideon Ngetich</h3>
            <p className="text-gray-300">
              Full Stack Developer passionate about creating innovative solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links text-center">
            <h4 className="text-xl font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4 text-blue-400">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/Ngetich-86"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-white transition-colors hover:scale-110 transform"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/gideon-ngetich/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-white transition-colors hover:scale-110 transform"
              >
                <FaLinkedin />
        </a>
              <a
                href="https://x.com/singh34274"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-white transition-colors hover:scale-110 transform"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Gideon Ngetich. All rights reserved.
      </p>
        </div>
      </div>
  </footer>
  );
};
  
export default Footer;


