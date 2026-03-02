import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl relative">
      <div className="sticky top-0 z-20 pt-1 pb-4 mb-4">
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
            Microfiche Archive // B-2044
          </div>
        </div>

        {/* Text Content Area */}
        <div className="space-y-4 text-[#DCDCB4] leading-relaxed flex-grow pb-12">
          <p>
            My name is Guillermo Basterra. Right now I'm a Computer Science student at USC. I am trying to figure out what I want to do with my life.
          </p>

          <p>
            Above all, I want to live courageously. And take risks. See and do great things. Do meaningful work. The first, at least, I can control.
          </p>

          <p>
            I built this website for anyone who has any interest in figuring out who I am. I'll give a quick fire:
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Born in Spain, to Spanish parents, moved around while growing up.</li>
            <li>Favorite book: Zorba the Greek by Nikos Kazantzakis.</li>
            <li>Hobbies: I play the guitar and sing, I like writing and want to be better at it, I read a lot, I play soccer (football, I should say), and I run (for fun, and the occasional marathon) and lift weights.</li>
            <li>Interests: I have illusions of grandeur and wish to work on things that matter and will make the world a better place. I am dying to find this work and pour myself into it.</li>
          </ul>

          <p className="pt-4">
            Now you know more about me feel free to explore this website.
          </p>
        </div>
      </div>
    </div>
  );
}
