'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'about' },
    { href: '/essays', label: 'essays' },
    { href: '/quotes', label: 'quotes' },
    { href: '/portfolio', label: 'portfolio' },
    { href: '/resume', label: 'resume' },
    { href: '/links', label: 'links' },
  ];

  return (
    <nav className="flex flex-col space-y-1">
      {links.map((link) => {
        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`block w-full px-1 py-0.5 rounded-sm lowercase ${
              isActive 
                ? 'text-[#D8D6D8] before:content-[">_"] before:mr-2' 
                : 'text-[#D8D6D8] hover:bg-[#D8D6D8] hover:text-[#121212]'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
