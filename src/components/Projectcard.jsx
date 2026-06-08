import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS_DATA } from '../Projectsdata';

const ProjectCard = ({ project, onOpen }) => {
  const placeholderImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop";

  return (
    <div 
      className="group relative w-full  mb-16"
      onClick={onOpen}
    >
      {/* 1. SCREENSHOT CONTAINER */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-stone-900 border border-stone-800 group-hover:border-stone-400 transition-all duration-700 ease-out">
        <a href={project.live} target='_blank' 
              rel="noopener noreferrer" >
          <img 
          src={project?.img || placeholderImage} 
          alt={project?.title || "Project Screenshot"}
          className="w-full h-full object-fill  group-hover:scale-105 transition-all duration-1000 ease-in-out opacity-40 group-hover:opacity-100"
        />
        </a>
        
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        
        <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white">
              {project?.cat || "Development"}
            </span>
          </div>
        </div>
      </div>

      {/* 2. PROJECT META DATA */}
      <div className="mt-6 flex justify-evenly items-start px-1">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-3">
          
            <h3 className="text-xl font-black tracking-tight text-stone-200 group-hover:text-white transition-colors ">
              {project?.title || "Project Title"}
            </h3>
          </div>
          
          <p className='text-sm text-stone-500 leading-relaxed max-w-xl mb-3'>
            {project?.longDescription || "No description available"}
          </p>

          {/* TECH TAGS: Displayed beneath description */}
          <div className='flex flex-wrap gap-2'>
            {project?.tech.map((t) => (
              <span 
                key={t} 
                className="text-[8px] font-black uppercase tracking-[0.2em] text-stone-600 border border-stone-900 px-2 py-0.5 rounded transition-colors group-hover:border-stone-700 group-hover:text-stone-400"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Link Buttons */}
          <div className='flex items-center justify-end gap-3 mt-4'>

             <a 
              href={project?.github} 
              target='_blank'
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-300 hover:bg-stone-100 hover:text-stone-700 transition-all duration-500">
                <FaGithub size={18} />
              </div>


            </a>

             {project.live?(
              <a 
              href={project?.live } 
              target='_blank' 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
               
              <div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-300 hover:bg-stone-100 hover:text-stone-700 transition-all duration-500">
                
                <ArrowUpRight size={18} strokeWidth={2.5} /> 
              </div></a>)
              :
              (<p className='text-gray-500 tracking-tighter'>in progress...</p>)
              }
            

           
          </div>
        </div>       
      </div>

      {/* 3. HOVER LINE DECORATION */}
      <div className="absolute -bottom-4 left-0 w-0 h-[1px] bg-white/10 group-hover:w-full transition-all duration-1000 ease-in-out" />
    </div>
  );
};

export default ProjectCard;