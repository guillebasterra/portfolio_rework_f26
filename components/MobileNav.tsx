'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'about' },
    { href: '/essays', label: 'essays' },
    { href: '/resources', label: 'resources' },
    { href: '/quotes', label: 'quotes' },
    { href: '/resume', label: 'resume' },
  ];

  const currentLink = links.find(link => 
    pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
  );

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <div className="md:hidden w-full border-b-2 border-[#DCDCB4] bg-[#121212] sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center space-x-2">
          <span className="text-[#DCDCB4] opacity-50 font-bold tracking-tighter">GB://</span>
          <span className="font-bold lowercase">{currentLink?.label || 'about'}</span>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className="w-6 h-0.5 bg-[#DCDCB4] rotate-45 translate-y-0.5"></div>
              <div className="w-6 h-0.5 bg-[#DCDCB4] -rotate-45 -translate-y-0.5"></div>
            </div>
          ) : (
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <div className="w-6 h-0.5 bg-[#DCDCB4]"></div>
              <div className="w-4 h-0.5 bg-[#DCDCB4]"></div>
              <div className="w-6 h-0.5 bg-[#DCDCB4]"></div>
            </div>
          )}
        </button>
      </div>

      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[54px] bg-[#121212] z-40 flex flex-col p-8 space-y-6">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl lowercase ${
                  isActive 
                    ? 'text-[#DCDCB4] before:content-[">_"] before:mr-2' 
                    : 'text-[#DCDCB4] opacity-70'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          <div className="mt-auto pt-8 border-t border-[#DCDCB4] border-opacity-20">
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-30">
              Microfiche Archive // System 2026
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
