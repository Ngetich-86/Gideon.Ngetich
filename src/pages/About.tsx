import { useEffect } from 'react';
import { FaCode, FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';
import ScrollReveal from 'scrollreveal';

const About: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true,
    });

    // Reveal the image section
    sr.reveal('.about-image', {
      origin: 'left',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.95,
    });

    // Reveal the about text section
    sr.reveal('.about-text', {
      origin: 'right',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.95,
    });

    // Reveal the skills section title
    sr.reveal('.skills-title', {
      origin: 'bottom',
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
    });

    // Reveal each skill card with a delay
    sr.reveal('.skill-card', {
      origin: 'bottom',
      distance: '50px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
      interval: 100,
    });
  }, []);

  const skills = [
    {
      title: 'Frontend Development',
      icon: <FaCode className="text-4xl text-blue-400" />,
      description: 'Building responsive and interactive user interfaces using React, TypeScript, and modern CSS frameworks.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      title: 'Backend Development',
      icon: <FaServer className="text-4xl text-blue-400" />,
      description: 'Creating robust server-side applications with Node.js, Python, and various databases.',
      technologies: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Full Stack Solutions',
      icon: <FaLaptopCode className="text-4xl text-blue-400" />,
      description: 'Developing end-to-end solutions that seamlessly integrate frontend and backend technologies.',
      technologies: ['MERN Stack', 'REST APIs', 'GraphQL', 'WebSocket']
    },
    {
      title: 'DevOps & Tools',
      icon: <FaTools className="text-4xl text-blue-400" />,
      description: 'Implementing CI/CD pipelines, containerization, and cloud services for scalable applications.',
      technologies: ['Docker', 'AWS', 'Azure', 'Git', 'CI/CD']
    }
  ];

  return (
    <section id="about" className="min-h-screen gradient-background text-white pt-20">
      <div className=" mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image */}
          <div className="about-image">
            <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-2 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRlY2h8ZW58MHx8MHx8fDA%3D"
                alt="Profile"
                className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column - About Text */}
          <div className="about-text">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies.
              My journey in software development has equipped me with the skills to build modern, scalable applications
              that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With a focus on clean code and user experience, I strive to create applications that are not only
              functional but also intuitive and engaging. I'm constantly learning and adapting to new technologies
              to stay at the forefront of web development.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://drive.google.com/file/d/1FrF8MLK2k0sUdCxETcA_HHBkYX2V-S0K/view?usp=sharing" 
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download CV
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white/5 backdrop-blur-sm text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-16 skills-title">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">What I Do</span>
            </h2>
            <p className="text-lg text-gray-400">
              Specialized skills and technologies I work with
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="skill-card group bg-white/5 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-400 group-hover:text-white transition-colors">
                      {skill.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 flex-grow">
                    {skill.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
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
      </div>
    </section>
  );
};

export default About;
