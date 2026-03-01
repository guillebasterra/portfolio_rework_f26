import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

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
      <body className="bg-[#121212] text-[#E0E0E0]">
        <div className="tui-container">
          {/* Left Pane (Content) */}
          <main className="tui-left-pane">
            <div className="tui-margin"></div>
            <div className="w-full">
              {children}
            </div>
          </main>

          {/* Right Pane (Nav) */}
          <aside className="tui-right-pane">
            <Navigation />
          </aside>
        </div>

        {/* Dithered Art Overlay - Keep as requested if possible, but let's hide it if it breaks the terminal aesthetic. For now, we'll keep it subtle or absolute */}
        <div
          className="fixed bottom-0 left-0 right-0 pointer-events-none z-[9999] opacity-20"
          style={{
            isolation: 'isolate',
            transform: 'translateZ(0)',
          }}
        >
          <img
            src="/dithered-overlay.png"
            alt=""
            className="w-full block"
            style={{ display: 'block', margin: 0, padding: 0, verticalAlign: 'bottom' }}
          />
        </div>
      </body>
    </html>
  );
}
