import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import MobileNav from '@/components/MobileNav';

const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Guillermo Basterra',
  description: 'Personal website of Guillermo Basterra',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jbMono.variable}>
      <body className="bg-[#121212] text-[#DCDCB4]">
        <div className="tui-container">
          <MobileNav />
          
          {/* Left Pane (Content) */}
          <main className="tui-left-pane">
            <div className="tui-margin"></div>
            <div className="w-full">
              {children}
            </div>
          </main>

          {/* Right Pane (Nav) */}
          <aside className="tui-right-pane hidden md:flex">
            <Navigation />
          </aside>
        </div>

      </body>
    </html>
  );
}
