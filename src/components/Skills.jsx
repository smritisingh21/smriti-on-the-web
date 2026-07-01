import React, { useState, useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';


const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Responsive Design",

    ]
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication (JWT, OAuth)",
      "Zod",
      "Redis",
      "Role-Based Access Control (RBAC)",
      "MongoDB",
      "Mongoose",
      "Prisma ORM",
      "AWS",
      "Vercel",
      "Render",
      "Docker"
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "Ollama",
      "LLM Integration",
    ]
  },

  {
    category: "Tools",
    skills: [
      "Postman",
      "GitHub",
      "Figma",
      
    ]
  },

];


  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative min-h-100 py-10 px-8 bg-black/50 overflow-hidden"
    >
      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-4">
            <span className="text-[8px] font-medium tracking-[0.4em] text-stone-500 italic">Tech stack</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans text-stone-100 tracking-tighter uppercase mb-4 leading-none">
            Technical <span className="text-stone-500 italic font-sans lowercase tracking-normal">Kit </span>
          </h2>
          <p className="text-[13px] flex justify-center font-bold text-stone-400 ">
            A serialized overview of tools and frameworks i've used until now.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-8">
          {skillCategories.map((group, groupIndex) => (
            <div 
              key={groupIndex}
              className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${groupIndex * 150}ms` }}
            >
              {/* Category Heading */}
              <h3 className="text-[12px] font-medium   text-stone-400 mb-6 flex items-center gap-3">
                <Plus size={10} strokeWidth={4} /> {group.category}
              </h3>
                <hr  className='p-3 opacity-15'/>

              
              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="
                      group relative px-3 py-1.5 
                      bg-stone-900 border border-stone-800 rounded-md
                      transition-all duration-200 ease-out
                      hover:bg-stone-100 hover:border-stone-100 
                      cursor-default
                    "
                  >
                    <span className="
                      text-[14px]   tracking-normal
                      text-stone-400 group-hover:text-black 
                      transition-colors duration-300
                    ">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      

        {/* Bottom Decoration */}
        <div className={`mt-24 transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
           <div className="text-stone-900">
              <Plus size={16} strokeWidth={2} />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;