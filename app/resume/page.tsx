export const metadata = {
  title: 'Resume - Guillermo Basterra',
  description: 'Resume of Guillermo Basterra',
};

export default function Resume() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-xl mb-8 font-bold">Resume</h1>
      
      <div className="space-y-4 leading-relaxed">
        <p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:bg-[#DCDCB4] hover:text-[#121212] transition-none">
            [ open_in_new_tab ]
          </a>
        </p>
        
        <div className="w-full h-[800px] border-2 border-[#DCDCB4] overflow-hidden bg-white/5" style={{ borderRadius: '8px' }}>
          <iframe 
            src="/resume.pdf" 
            className="w-full h-full border-none"
            title="Guillermo Basterra Resume"
          />
        </div>
        
      </div>
    </div>
  );
}
