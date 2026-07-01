import React, { useState } from 'react';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';


const Experience = () => {
  // Track which ID is currently expanded (null if none)
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const experiences = [
  
    { 
      id: '01', 
      role: 'Full-stack developer', 
      company: 'Freelance', 
      year: '2025- present',
      description: `Architecting high-performance web applications.Spent a lot of time focusing on web fundamentals and worked on my personal projects. \n
      \n  Worked with organisations like the Eastern Himalayan Center for Public Policy , providing solutions for their website needs and technical support, including complete design and development of their landing page.`
      
    },
    { 
      id: '02', 
      role: 'Creative head', 
      company: 'Altalune Atelier ', 
      year: 'Oct 2023 - Dec 2023',
      description: 'Altalune Atelier is a social media agency that helped creators to developed brand identities online.I lead teams for designs and video-edits. My role also involved facing clients directly and collaborating to understand their needs and deliver results.'
    },
    { 
      id: '03', 
      role: 'Video editor', 
      company: 'Freelance', 
      year: 'June 2023 - October 2024',
      description:'Learned video-editing in AevyTV cohort and edited videos for YT channels while managing college , designed thumbnails for videos, enhanced my understanding of content-creation space.'
    }
  ];

  return (
    <section id="experience" className="py-20 px-8 md:px-16 lg:px-24 bg-black/30">
      <div className="max-w-5xl mx-auto">
        {/* Compact Header */}
          <h2 className="text-4xl tracking-tight text-stone-400 font-medium ont-sans mb-4"> Work experience</h2>

        {/* Interactive List */}
        <div className="flex flex-col border-t border-stone-300">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className={`
                group border-b border-stone-900 transition-all duration-500 cursor-pointer
                ${expandedId === exp.id ? 'bg-white/[0.02] px-4' : 'hover:px-4'}
              `}
              onPointerOver={() => toggleExpand(exp.id)}
            >
              {/* Visible Header Row */}
              <div className="flex items-center justify-between py-6">
                <div className="flex items-center gap-2 md:gap-12">
                  <span className="text-[10px] font-bold text-stone-800 group-hover:text-stone-400 transition-colors">
                    {exp.id}
                  </span>
                  <div className='flex-col'>

                  <h3 className={`text-lg md:text-2xl font-semibold tracking-tight transition-colors ${
                    expandedId === exp.id ? 'text-stone-50' : 'text-stone-200 group-hover:text-stone-50'
                  }`}>
                    {exp.role}
                  </h3>
                  <p className="hidden md:block text-[16px] font-sans text-stone-500  tracking-normal ">
                    - {exp.company}
                  </p>
                  </div>
                  
                </div>
                
                <div className="flex items-center gap-6 md:gap-12">
                  
                  <p className="text-[14px] font-sans text-stone-100 ">
                    {exp.year}
                  </p>
                  <div className={`transition-transform duration-500 ${expandedId === exp.id ? 'rotate-180 text-stone-100' : 'text-stone-800 group-hover:text-stone-100'}`}>
                    {expandedId === exp.id ? <FaMinusCircle size={16} /> : <FaPlusCircle size={16} />}
                  </div>
                </div>
              </div>

              {/* Expandable Description Area */}
              <div className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${expandedId === exp.id ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="max-w-2xl ml-16 md:ml-24">
                  <p className="text-stone-400 text-sm md:text-base leading-relaxed font-medium">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <div className="w-1 h-1 bg-stone-100 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;