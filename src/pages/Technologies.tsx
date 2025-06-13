import React, { useEffect } from "react";
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiDocker, SiNextdotjs } from 'react-icons/si';
import ScrollReveal from 'scrollreveal';

const Technologies: React.FC = () => {
  // const [visibleSkills, setVisibleSkills] = useState<string[]>([]);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true,
    });

    // Reveal the title section
    sr.reveal('.tech-title', {
      origin: 'top',
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
    });

    // Reveal each tech card with a delay
    sr.reveal('.tech-card', {
      origin: 'bottom',
      distance: '50px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
      interval: 100,
    });
  }, []);

  const skillData = [
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-[#F7DF1E]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-[#3178C6]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-[#06B6D4]" /> },
    { name: 'React JS', icon: <FaReact className="text-4xl text-[#61DAFB]" /> },
    { name: 'NextJS', icon: <SiNextdotjs className="text-4xl text-gray-800" /> },
    { name: 'Node JS', icon: <FaNodeJs className="text-4xl text-[#339933]" /> },
    { name: 'SQL', icon: <FaDatabase className="text-4xl text-[#4169E1]" /> },
    { name: 'Git', icon: <FaGitAlt className="text-4xl text-[#F05032]" /> },
    { name: 'GitHub', icon: <FaGitAlt className="text-4xl text-[#181717]" /> },
    { name: 'AWS', icon: <FaAws className="text-4xl text-[#FF9900]" /> },
    { name: 'Docker', icon: <SiDocker className="text-4xl text-[#2496ED]" /> },
  ];

  return (
    <section id="technologies" className="py-20 gradient-stylish-background">
      <div className="container mx-auto px-4">
        <div className="tech-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-gray-400">
            Technologies I work with to build amazing applications
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillData.map((skill) => (
            <div
              key={skill.name}
              className="tech-card glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
