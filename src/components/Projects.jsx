import React, { useState } from 'react';
import { 
  Layers, 
  Github, 
} from 'lucide-react';
import ProjectCard from './Projectcard'
import {PROJECTS_DATA} from '../Projectsdata'



export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [view, setView] = useState('grid'); 

  // const handleOpenProject = (project) => {
  //   setActiveProject(project);
  //   setView('details');
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  const handleBack = () => {
    setView('grid');
    setActiveProject(null);
  };

  if (view === 'details' && activeProject) {
    return <ProjectPage project={activeProject} onBack={handleBack} />;
  }

  return (
    <section id="projects-section" className="relative min-h-screen py-32 px-8 md:px-16 lg:px-24 bg-black/70 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-emerald-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 mb-6">
            <Layers size={14} className="text-stone-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-500 italic">Portfolio</span>
          </div>
          <h2 className="text-xl md:text-4xl font-black text-stone-100 tracking-tighter uppercase mb-2 leading-none">
            Selected <span className="text-stone-500 italic font-serif lowercase tracking-normal">works</span>
          </h2>
          <p className="text-stone-500 max-w-xl text-sm md:text-base leading-relaxed font-medium">
            Projects that helped me strenthen my <span className="text-stone-300 italic">development fundamentals</span>.
          </p>
        </div>

        {/* Project List */}
        <div className="grid lg:grid-cols-2 gap-5 md:grid-cols-2 border-t border-stone-900">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard 
              live={project.live}
              key={project.id} 
              project={project} 
              tech={project.tech}
              // onOpen={() => handleOpenProject(project)} 
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-glow { text-shadow: 0 0 20px rgba(52, 211, 153, 0.3); }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-bottom { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: slide-in-bottom 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}} />
    </section>
  );
}