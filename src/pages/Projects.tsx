import ProjectData from "../components/ProjectData";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

const Projects = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: '50px',
            duration: 1000,
            delay: 200,
            easing: 'ease-in-out',
            reset: true,
        });

        // Reveal the title section
        sr.reveal('.projects-title', {
            origin: 'bottom',
            distance: '100px',
            duration: 800,
            easing: 'ease-in-out',
        });

        // Reveal each project card with a delay
        sr.reveal('.project-card', {
            origin: 'bottom',
            distance: '100px',
            duration: 800,
            delay: 200,
            easing: 'ease-in-out',
            interval: 100,
        });

        // Reveal the "View All Projects" button
        sr.reveal('.view-all-button', {
            origin: 'bottom',
            distance: '100px',
            duration: 800,
            delay: 400,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <section id="projects" className="min-h-screen gradient-tech-background text-white pt-20">
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="projects-title text-center mb-16">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Projects</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-400">
                            Check out some of my recent work
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ProjectData.map((project) => (
                            <div key={project.id} className="project-card group bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
                                <div className="relative overflow-hidden rounded-lg mb-4">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-blue-400 font-semibold text-lg text-center px-4">
                                            {project.title}
                                        </div>
                                    )}
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-wide text-blue-400/70">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-semibold mb-2 mt-1 text-blue-400 group-hover:text-white transition-colors">{project.title}</h3>
                                <p className="text-gray-300 mb-4">
                                    {project.text}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
                                        >
                                            GitHub
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                    <Link
                                        to={`/projects/${project.slug}`}
                                        className="text-sm text-blue-400 hover:text-white transition-colors"
                                    >
                                        View Case Study →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="view-all-button text-center mt-12">
                        <a href="https://github.com/Ngetich-86" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        target="_blank" rel="noopener noreferrer">
                            View All Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;