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
      <h1 className="text-xl mb-8 font-bold">Portfolio</h1>

      <div className="space-y-6">
        <p className="text-lg opacity-90 italic">
          This page is currently under construction.
        </p>
        <p className="leading-relaxed">
          I am in the process of migrating and documenting my projects. In the meantime, you can find most of my work on my GitHub:
        </p>
        <p>
          <a 
            href="https://github.com/guillebasterra" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:bg-[#DCDCB4] hover:text-[#121212] transition-none"
          >
            [ github.com/guillebasterra ]
          </a>
        </p>
      </div>

      {/* 
        PREVIOUS PROJECTS SECTION - Set aside for now
        
        <div className="space-y-12 mt-12 border-t-2 border-[#DCDCB4] pt-12 opacity-50 grayscale pointer-events-none">
          <p className="text-sm uppercase tracking-widest font-bold">Archives (In Migration)</p>
          {projects.map((project) => (
            <article key={project.slug} className="space-y-3 border-t-2 border-[#DCDCB4] pt-6 first:border-t-0 first:pt-0">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <time className="text-sm opacity-70 whitespace-nowrap">[{project.date}]</time>
              </div>

              <p className="leading-relaxed opacity-90">{project.description}</p>

              <div className="flex gap-4 pt-2">
                {project.links.live && (
                  <span className="underline">[ live_site ]</span>
                )}
                {project.links.github && (
                  <span className="underline">[ github ]</span>
                )}
              </div>
            </article>
          ))}
        </div>
      */}
    </div>
  );
}
