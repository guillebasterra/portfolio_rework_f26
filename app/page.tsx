import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl relative">
      <div className="sticky top-0 z-20 h-0 overflow-visible">
        <h1 className="text-xl font-bold bg-[#121212] inline-block pr-4 py-2"># about</h1>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 items-start relative pt-12">
        {/* ID Card Section - Sticky */}
        <div className="lg:sticky lg:top-16 shrink-0 w-full max-w-[320px] z-10">
          <div 
            className="border-2 border-[#DCDCB4] bg-[#121212] p-4 relative"
            style={{ boxShadow: '8px 8px 0px 0px rgba(220, 220, 180, 0.2)' }}
          >
            {/* ID Card Header */}
            <div className="flex justify-between items-center mb-2 border-b-2 border-[#DCDCB4] pb-2">
              <span className="font-bold uppercase text-sm tracking-tighter">hi i'm guillermo</span>
              <span className="text-[10px] opacity-50 font-mono">#2044</span>
            </div>

            {/* ID Card Image Area */}
            <div className="border-2 border-[#DCDCB4] p-1 mb-4 overflow-hidden bg-black">
              <div className="relative aspect-[4/5] w-full filter grayscale contrast-[1.2] brightness-[1.1]">
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

            {/* ID Card Footer */}
            <div className="text-[10px] leading-tight font-mono opacity-70">
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span>LOS ANGELES, CA</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span>ACTIVE_STUDENT</span>
              </div>
              <div className="flex justify-between">
                <span>TIMESTAMP:</span>
                <span>{new Date().toISOString().split('T')[0]}</span>
              </div>
            </div>
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
