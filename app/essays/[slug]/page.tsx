'use client';

import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Essay {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  description: string;
  readingTime: string;
  content: any;
}

export default function EssayPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [essay, setEssay] = useState<Essay | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEssay() {
      try {
        const response = await fetch(`/api/essays/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setEssay(data);
        }
      } catch (error) {
        console.error('Error loading essay:', error);
      } finally {
        setLoading(false);
      }
    }

    loadEssay();
  }, [slug]);

  if (loading) {
    return (
      <div className="space-y-6 max-w-3xl">
        <p className="opacity-70">loading...</p>
      </div>
    );
  }

  if (!essay) {
    return (
      <div className="space-y-6 max-w-3xl">
        <p className="opacity-70">Essay not found</p>
        <Link href="/essays" className="underline hover:bg-[#DCDCB4] hover:text-[#121212] transition-none">
          [ &lt;- back_to_essays ]
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl space-y-8">
      <Link href="/essays" className="inline-block text-sm opacity-70 hover:opacity-100 hover:bg-[#DCDCB4] hover:text-[#121212] transition-none p-1 -ml-1">
        [ &lt;- back_to_essays ]
      </Link>
      
      <header className="space-y-4 border-b-2 border-[#DCDCB4] pb-6">
        <h1 className="text-2xl font-bold"># {essay.title}</h1>
        <p className="opacity-90">{essay.description}</p>
        <div className="flex items-center gap-3 text-sm opacity-70">
          <time>{new Date(essay.date).toLocaleDateString('en-US')}</time>
          <span>|</span>
          <span>{essay.readingTime}</span>
        </div>
      </header>
      
      <div className="prose prose-invert prose-p:text-[#DCDCB4] prose-headings:text-[#DCDCB4] prose-a:text-[#DCDCB4] prose-strong:text-[#DCDCB4] prose-code:text-[#DCDCB4] prose-pre:bg-[#1a1a1a] prose-pre:border-2 prose-pre:border-[#DCDCB4] prose-blockquote:border-[#DCDCB4] prose-blockquote:border-l-4 prose-blockquote:text-[#DCDCB4] max-w-none font-mono">
        <MDXRemote {...essay.content} />
      </div>
    </article>
  );
}
