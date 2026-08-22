import { Link, useParams } from 'react-router-dom';
import ProjectData from '../components/ProjectData';

const ProjectCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = ProjectData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen gradient-tech-background text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Link to="/#projects" className="text-blue-400 hover:text-white transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen gradient-tech-background text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/#projects" className="text-blue-400 hover:text-white transition-colors">
          ← Back to Projects
        </Link>

        <div className="mt-8 mb-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-400/70">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-1 mb-4">
            <span className="gradient-text">{project.title}</span>
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">{project.text}</p>
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
          >
            Source Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectCaseStudy;
