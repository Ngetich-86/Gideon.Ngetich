import { Link, useParams } from 'react-router-dom';
import ProjectData from '../components/ProjectData';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold text-blue-400 mb-3">{title}</h2>
    {children}
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-inside text-gray-300 space-y-2">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

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

  const cs = project.caseStudy;

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
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Section title="Overview">
          <p className="text-gray-300 leading-relaxed">{cs?.overview ?? project.text}</p>
        </Section>

        {cs?.engineeringProblem && (
          <Section title="Engineering Problem">
            <p className="text-gray-300 leading-relaxed">{cs.engineeringProblem}</p>
          </Section>
        )}

        {cs?.architecture && (
          <Section title="Architecture">
            <p className="text-gray-300 leading-relaxed">{cs.architecture}</p>
          </Section>
        )}

        {cs?.engineeringWork && (
          <Section title="My Engineering Work">
            <BulletList items={cs.engineeringWork} />
          </Section>
        )}

        {cs?.qualityStrategy && (
          <Section title="Quality Strategy">
            <BulletList items={cs.qualityStrategy} />
          </Section>
        )}

        {cs?.failureModes && (
          <Section title="Interesting Failure Modes & Edge Cases">
            <BulletList items={cs.failureModes} />
          </Section>
        )}

        {cs?.futureImprovements && (
          <Section title="Recommended Future Testing">
            <BulletList items={cs.futureImprovements} />
          </Section>
        )}

        <Section title="Source Code">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
            >
              GitHub Repository
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
        </Section>

        {cs?.keyTakeaway && (
          <div className="mt-10 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-400/70 mb-2">
              Key Takeaway
            </p>
            <p className="text-gray-200 leading-relaxed">{cs.keyTakeaway}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectCaseStudy;
