export const metadata = {
  title: 'Resume - Guillermo Basterra',
  description: 'Resume of Guillermo Basterra',
};

export default function Resume() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-xl mb-8 font-bold"># resume</h1>
      
      <div className="space-y-4 leading-relaxed">
        <p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:bg-[#E0E0E0] hover:text-[#121212] transition-none">
            [ download_pdf ]
          </a>
        </p>
        
        <div className="mt-8 border-t border-[#E0E0E0] pt-6">
          <h2 className="font-bold mb-4">Education</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>University of Southern California (USC)</span>
              <span>[ 2022 - 2026 ]</span>
            </div>
            <p className="opacity-80 pl-4">B.S. in Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
}
