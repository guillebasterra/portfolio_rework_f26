import Link from 'next/link';
import { getAllEssays } from '@/lib/mdx';

export const metadata = {
  title: 'Essays - Guillermo Basterra',
  description: 'Writing and essays',
};

export default async function Essays() {
  const essays = await getAllEssays();

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-xl mb-8 font-bold"># essays</h1>
      
      {essays.length > 0 ? (
        <div className="space-y-4">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/essays/${essay.slug}`}
              className="group flex gap-4 items-baseline hover:bg-[#E0E0E0] hover:text-[#121212] transition-none p-1 -ml-1"
            >
              <time className="opacity-70 text-sm shrink-0 whitespace-nowrap">
                [{new Date(essay.date).getFullYear()}]
              </time>
              <span className="group-hover:text-[#121212]">
                {essay.title}
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="opacity-70">No essays yet.</p>
      )}
    </div>
  );
}
