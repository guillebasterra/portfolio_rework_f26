export const metadata = {
  title: 'Links - Guillermo Basterra',
  description: 'Get in touch with Guillermo Basterra',
};

export default function Links() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-xl mb-8 font-bold"># links</h1>
      
      <div className="space-y-4 leading-relaxed">
        <p>
          Shoot me an email:{' '}
          <a href="mailto:guillebasterra@gmail.com" className="underline hover:bg-[#E0E0E0] hover:text-[#121212] transition-none">
            guillebasterra@gmail.com
          </a>
        </p>
        <p>
          Or DM me on X:{' '}
          <a href="https://twitter.com/willybasterra" target="_blank" rel="noopener noreferrer" className="underline hover:bg-[#E0E0E0] hover:text-[#121212] transition-none">
            @willybasterra
          </a>
        </p>
        <p className="pt-4">
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="underline hover:bg-[#E0E0E0] hover:text-[#121212] transition-none">
            [ youtube ]
          </a> - Covers and video essays
        </p>
        <p>
          <a href="https://strava.com/" target="_blank" rel="noopener noreferrer" className="underline hover:bg-[#E0E0E0] hover:text-[#121212] transition-none">
            [ strava ]
          </a> - Running and workouts
        </p>
        <p>
          <a href="https://goodreads.com/" target="_blank" rel="noopener noreferrer" className="underline hover:bg-[#E0E0E0] hover:text-[#121212] transition-none">
            [ goodreads ]
          </a> - Reading list
        </p>
        <p className="pt-4 opacity-80">Reach out, I'd love to talk.</p>
      </div>
    </div>
  );
}
