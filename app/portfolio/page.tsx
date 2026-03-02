import projectsData from '@/content/projects/projects.json';

interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  links: {
    live?: string;
    github?: string;
  };
}

export const metadata = {
  title: 'Portfolio - Guillermo Basterra',
  description: 'Portfolio of projects and experiences',
};

export default function Portfolio() {
  const projects: Project[] = projectsData;

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-xl mb-8 font-bold"># portfolio</h1>

      <div className="space-y-12">
        {projects.map((project) => (
          <article key={project.slug} className="space-y-3 border-t-2 border-[#DCDCB4] pt-6 first:border-t-0 first:pt-0">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <time className="text-sm opacity-70 whitespace-nowrap">[{project.date}]</time>
            </div>

            <p className="leading-relaxed opacity-90">{project.description}</p>

            <div className="flex gap-4 pt-2">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="underline hover:bg-[#DCDCB4] hover:text-[#121212] transition-none">
                  [ live_site ]
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="underline hover:bg-[#DCDCB4] hover:text-[#121212] transition-none">
                  [ github ]
                </a>
              )}
            </div>
          </article>
        ))}

        {projects.length === 0 && (
          <p className="opacity-70">No projects yet. Add projects to content/projects/projects.json</p>
        )}
      </div>
    </div>
  );
}
