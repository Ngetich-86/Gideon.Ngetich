import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass fixed w-full z-50 top-0 left-0 shadow-lg transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold gradient-text">
            Gideon Ngetich
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-xl">
            <a href="#" className="text-blue-400 hover:text-white transition-colors duration-300">Home</a>
            <a href="#about" className="text-blue-400 hover:text-white transition-colors duration-300">About</a>
            <a href="#technologies" className="text-blue-400 hover:text-white transition-colors duration-300">Technologies</a>
            <a href="#projects" className="text-blue-400 hover:text-white transition-colors duration-300">Projects</a>
            <a href="#experience" className="text-blue-400 hover:text-white transition-colors duration-300">Experience</a>
            <a href="#community" className="text-blue-400 hover:text-white transition-colors duration-300">Community</a>
            <a href="#contact" className="text-blue-400 hover:text-white transition-colors duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-blue-400 hover:text-white transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/5 backdrop-blur-sm rounded-lg shadow-lg mt-2">
              <a
                href="#"
                className="block px-3 py-2 text-blue-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-blue-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#technologies"
                className="block px-3 py-2 text-blue-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Technologies
              </a>
              <a
                href="#community"
                className="block px-3 py-2 text-blue-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Community
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-blue-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
