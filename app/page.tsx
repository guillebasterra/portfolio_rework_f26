import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="max-w-4xl relative">
      <div className="pt-1 pb-4 mb-4">
        <h1 className="text-xl font-bold">About</h1>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 items-start relative pt-2">
        {/* Simplified Wireframe ID Card Section */}
        <div className="lg:sticky lg:top-16 shrink-0 w-full max-w-[320px] z-10">
          <div className="border border-[#DCDCB4] p-0 relative bg-[#121212] overflow-hidden" style={{ borderRadius: '0px' }}>
            {/* Header */}
            <div className="px-3 py-2 border-b border-[#DCDCB4] flex justify-between items-center">
              <span className="font-bold text-xs tracking-[0.2em] uppercase">Guillermo Basterra</span>
            </div>

            {/* Microfiche Style Image Frame - No Border */}
            <div className="p-4 pb-2">
              <div className="relative aspect-[4/5] w-full filter grayscale contrast-[1.1] brightness-[1.05]">
                <Image 
                  src="/my_photo.jpg" 
                  alt="Guillermo Basterra" 
                  fill
                  className="object-cover"
                  style={{ 
                    imageRendering: 'pixelated',
                  }}
                />
              </div>
            </div>

            {/* Information Section */}
            <div className="px-4 pb-6 pt-4 space-y-2">
              <div className="text-[9px] font-mono opacity-60 uppercase tracking-[0.2em] flex gap-2">
                <span className="opacity-40">Currently:</span>
                <span className="font-bold">CS @ USC</span>
              </div>
              <div className="text-[9px] font-mono opacity-60 uppercase tracking-[0.2em] flex gap-2">
                <span className="opacity-40">Location:</span>
                <span className="font-bold">Los Angeles</span>
              </div>
            </div>
            
            {/* Corner Accent Decor */}
            <div className="absolute top-0 right-0 w-3 h-3 border-l border-b border-[#DCDCB4] opacity-20"></div>
          </div>
          
          <div className="mt-4 text-[9px] font-mono opacity-30 text-center uppercase tracking-[0.3em]">
            Archive // B-2044
          </div>
        </div>

        {/* Text Content Area */}
        <div className="space-y-4 text-[#DCDCB4] leading-relaxed flex-grow pb-12">
          <p>
            Hi, I'm Guillermo. I’m an undergraduate Computer Science at USC. My work up until now has focused on applied LLMs, simulating human behavior with Digital Twins and synthetic personas.

          </p>

          <p>I was born in Spain and live in Los Angeles. I like to play the guitar, run and lift weights, read, write, and spend time in the great outdoors.</p>
          <p>Right now I am interested in climate tech, hard tech, and computational cognition. Above all I want to live courageously, take risks, experience all that I can, and do work that will make this world a better place.</p>
          <p>Check out the <Link href="/resources" className="underline decoration-1 underline-offset-2 hover:bg-[#DCDCB4] hover:text-[#121212]">resources</Link> page for links to my GitHub, LinkedIn, Substack, and even my Goodreads if you are curious.</p>
       </div>
      </div>
    </div>
  );
}
