import { useEffect } from 'react';
import { FaBug, FaCode, FaDatabase, FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';
import ScrollReveal from 'scrollreveal';
import Lottie from "lottie-react";
import aboutAnimation from "../assets/images/aboutAnimation.json"

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
      title: 'Quality Engineering',
      icon: <FaBug className="text-4xl text-blue-400" />,
      description: 'Designing and automating tests that validate functionality, APIs, and performance before issues reach production.',
      technologies: ['Playwright', 'Selenium', 'Postman', 'Insomnia', 'Grafana k6', 'Jest', 'Supertest']
    },
    {
      title: 'Programming & Software Engineering',
      icon: <FaCode className="text-4xl text-blue-400" />,
      description: 'Writing and reasoning about code across multiple languages and paradigms.',
      technologies: ['JavaScript', 'TypeScript', 'Java', 'C#', 'Python', 'SQL']
    },
    {
      title: 'Frontend',
      icon: <FaLaptopCode className="text-4xl text-blue-400" />,
      description: 'Building responsive, accessible user interfaces with modern web frameworks.',
      technologies: ['React', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Backend & APIs',
      icon: <FaServer className="text-4xl text-blue-400" />,
      description: 'Designing and building server-side services and REST APIs.',
      technologies: ['Node.js', 'Express.js', 'Java Spring Boot', 'REST APIs', 'Hono.js']
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="text-4xl text-blue-400" />,
      description: 'Working with relational and NoSQL data stores.',
      technologies: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'MongoDB', 'SQLite']
    },
    {
      title: 'DevOps, Cloud & Reliability',
      icon: <FaTools className="text-4xl text-blue-400" />,
      description: 'Supporting reliable delivery through CI/CD pipelines, containers, and cloud infrastructure.',
      technologies: ['Git', 'GitHub', 'GitLab', 'Docker', 'Jenkins', 'GitHub Actions', 'Azure', 'AWS', 'SonarQube', 'Trivy', 'Prometheus', 'Grafana', 'CI/CD']
    }
  ];

  return (
    <section id="about" className="min-h-screen beautiful-background text-white pt-20">
      <div className=" mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* lottie - Image */}
          <div className="about-image flex justify-center items-center">
            <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-2 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 flex justify-center items-center">
              <Lottie 
                animationData={aboutAnimation} 
                loop={true} 
                className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto" 
              />
            </div>
          </div>

          {/* Right Column - About Text */}
          <div className="about-text">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I am a Software Engineering graduate and QA Engineer focused on building reliable software
              through technical testing and automation. My experience spans browser automation, API and
              integration testing, regression testing, performance testing, CI/CD quality gates, and
              full-stack development.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Because I have worked on both development and QA, I approach quality from the application
              architecture, API, database, user, and delivery perspectives rather than treating testing
              as an isolated final step.
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
              Technology ecosystems I work across, from quality engineering to full-stack development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
