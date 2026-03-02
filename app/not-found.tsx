import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-xl mb-8 font-bold">404 Not Found</h1>
      
      <p className="opacity-70">The page you are looking for does not exist.</p>
      
      <Link
        href="/"
        className="inline-block text-sm opacity-70 hover:opacity-100 hover:bg-[#DCDCB4] hover:text-[#121212] transition-none p-1 -ml-1 mt-4"
      >
        [ &lt;- back_to_home ]
      </Link>
    </div>
  );
}
