export const metadata = {
  title: 'Resources - Guillermo Basterra',
  description: 'Get in touch with Guillermo Basterra',
};

export default function Resources() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-xl mb-8 font-bold">Resources</h1>
      
      <div className="space-y-4 leading-relaxed">
        <p>
          Shoot me an email:{' '}
          <a href="mailto:guillebasterra@gmail.com" className="underline hover:bg-[#DCDCB4] hover:text-[#121212] transition-none">
            guillebasterra@gmail.com
          </a>
        </p>
        <p>
          Or DM me on X:{' '}
          <a href="https://x.com/willybasterra" target="_blank" rel="noopener noreferrer" className="underline hover:bg-[#DCDCB4] hover:text-[#121212] transition-none">
            @willybasterra
          </a>
        </p>

        <div className="space-y-4 pt-4">
          <p>
            <a 
              href="https://www.linkedin.com/in/guillermo-basterra-diezhandino" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:bg-[#DCDCB4] hover:text-[#121212] transition-none"
            >
              [ linkedin ]
            </a>
          </p>
          
          <p>
            <a 
              href="https://github.com/guillebasterra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:bg-[#DCDCB4] hover:text-[#121212] transition-none"
            >
              [ github ]
            </a>
          </p>

          <p>
            <a 
              href="https://www.youtube.com/@willybasterra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:bg-[#DCDCB4] hover:text-[#121212] transition-none"
            >
              [ youtube ]
            </a> - Covers and video essays
          </p>

          <p>
            <a 
              href="https://guillermobasterra.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:bg-[#DCDCB4] hover:text-[#121212] transition-none"
            >
              [ substack ]
            </a> - Personal newsletter
          </p>

          <p>
            <a 
              href="https://www.goodreads.com/guillebasterra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:bg-[#DCDCB4] hover:text-[#121212] transition-none"
            >
              [ goodreads ]
            </a> - My reading list
          </p>
        </div>

        <p className="pt-4 opacity-80">Reach out, I'd love to talk.</p>
      </div>
    </div>
  );
}
