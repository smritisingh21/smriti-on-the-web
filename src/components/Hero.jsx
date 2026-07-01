import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Code2, 
  Activity, 
  ArrowUpRight,
  Target,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';
import { FaGraduationCap } from 'react-icons/fa';

const BentoStats = () => {
  const [time, setTime] = useState('');
  const [maxStreak, setMaxStreak] = useState('...');
  const githubUsername = "smritisingh21";

  // Mock social links for the "Find me here" block
  const socialLinks = [
    { name: 'Github', href: `https://github.com/${githubUsername}`, icon: <Github size={20} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/smriti-singh-a06685257/', icon: <Linkedin size={20} /> },
    { name: 'Twitter', href: 'https://x.com/sillymilllly', icon: <Twitter size={20} /> },
    { 
         name: 'Email', 
         href:"https://mail.google.com/mail/?view=cm&fs=1&to=smritiiisinghh@gmail.com" ,
         icon: <Mail size={20} />, 
         color: 'group-hover:text-amber-400',
         glow: 'group-hover:shadow-amber-500/20'
       },
      
  ];

  // 1. Update local time for Bangalore (IST)
  useEffect(() => {
    const updateTime = () => {
      const options = { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Fetch and Calculate Real GitHub Max Streak Data
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch(`https://github-contributions-api.deno.dev/${githubUsername}.json`);
        const data = await response.json();
        
        const allDays = data.contributions.flat();
        
        let max = 0;
        let tempMax = 0;
        allDays.forEach(day => {
          if (day.count > 0) {
            tempMax++;
            if (tempMax > max) max = tempMax;
          } else {
            tempMax = 0;
          }
        });
        setMaxStreak(max);

      } catch (error) {
        console.error("Error fetching GitHub streaks:", error);
        setMaxStreak("180"); 
      }
    };

    fetchGithubData();
  }, [githubUsername]);

  return (
    <section id="stats" className="py-12 px-6 md:px-16 lg:px-24 bg-transparent relative z-10">
      
      {/* Section Header */}
      <div className="mb-10 flex justify-between items-end pb-7 border-b border-stone-900/50">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-600 mb-6 flex items-center gap-3">
            <Activity size={12} strokeWidth={3} /> Scroll and get to know me better -
          </div>
        </div>
        <div className="hidden md:flex flex-col items-end text-right">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">Last updated :</p>
          <p className="text-xs font-bold text-stone-400">June 2026</p>
        </div>
      </div>

      {/* Bento Grid: Standard 4 cols on desktop, 1 col on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[180px]">
        
        {/* CARD 1: Real GitHub Matrix (Visible Mobile + Desktop) */}
        <div className="md:col-span-3 md:row-span-1 bg-white/[0.02] backdrop-blur-sm border border-stone-700
          rounded-[2.5rem] p-5 flex flex-col justify-between group hover:border-stone-100/20 
          transition-all duration-700 min-h-[180px]">

          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
               <Github size={20} className="text-stone-500 group-hover:text-stone-100 transition-colors" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600">My Github Contributions</span>
            </div>
            <a 
              href={`https://github.com/${githubUsername}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-800 hover:text-stone-100 transition-all"
            >
              <ArrowUpRight size={16} />
            </a>
          </div>
          
          <div className="h-full flex items-center overflow-hidden">
            <img 
              src={`https://ghchart.rshah.org/40c463/${githubUsername}`} 
              alt={`${githubUsername}'s Github Chart`}
              className="w-full transition-all duration-700"
              style={{ maxHeight: '250px', objectFit: 'contain', }}
            />
          </div>
        </div>

        {/* CARD 2: Max Streak (Hidden on Mobile) */}
        <div className="hidden md:flex md:col-span-1 md:row-span-1 bg-white/[0.02] backdrop-blur-sm border border-stone-700 rounded-[2.5rem] p-8 flex-col justify-between group
         hover:border-stone-100/20 transition-all duration-700">
             <img
            src="https://media.giphy.com/media/11JTxkrmq4bGE0/giphy.gif"
            alt="Working cat"
            className="w-full h-full object-fill rounded-2xl"
  />
        </div>

        {/* CARD 3: About Me (Visible Mobile + Desktop) */}
        <div className="md:col-span-2 md:row-span-2 bg-white/[0.02] backdrop-blur-sm border border-stone-700 
        rounded-[2.5rem] p-6 flex flex-col justify-between group hover:border-stone-100/20 transition-all duration-700 min-h-[300px] md:min-h-auto">
          <div className="flex justify-between items-center">
             <div className="flex items-center  justify-center gap-4">
               <Code2 size={20} className="text-stone-500 group-hover:text-stone-100 transition-colors" />
               <span className="text-[10px] font-black uppercase  text-stone-400 mb-2">A little about me</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center py-6 md:py-12">

             <div className="relative w-full tracking-tight text-white/60 text-sm md:text-base leading-relaxed text-center md:text-left">
             Curious engineer. Backend enthusiast. I enjoy turning ideas into real products using modern web technologies, 
            AI, and cloud infrastructure while constantly pushing myself to learn something new.
            Passionate about backend engineering, distributed systems, and solving real-world problems through scalable software.
            Currently seeking <b>Software Engineering</b> and <b>Backend Development</b> internship or entry-level opportunities.
         </div>
          </div>
        </div>

        {/* CARD 4: Availability (Hidden on Mobile) */}
        <div className="hidden md:flex md:col-span-1 md:row-span-1 bg-stone-100/90 rounded-[2.5rem] p-8 flex-col justify-between shadow-2xl shadow-white/5 transition-transform duration-500 hover:scale-[1.02]">
          <div className="flex justify-between items-start text-stone-900 ">
             <Target size={20} strokeWidth={2.5} />
             <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,190,129,0.8)]" />
          </div>
          <div className="text-black">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-50">Current Status</p>
             <h3 className="text-3xl font-black uppercase tracking-tighter leading-none ">Open to<br/>Work</h3>
          </div>
        </div>

        {/* CARD 5: Current Location (Hidden on Mobile) */}
        <div className="hidden md:flex md:col-span-1 md:row-span-1 bg-white/[0.02] backdrop-blur-3xl border border-stone-700 rounded-[2.5rem] p-8 flex-col justify-between group hover:border-stone-100/20 transition-all duration-700">
          <FaGraduationCap fill='black' size={20}/> 
          <div className=" flex gap-2 text-[14px] font-semibold  text-stone-300 ">
            Bachelor of Technology,
          </div>
          <div className="text-[12px] font-semibold  text-stone-300   mb-2">
            Information Science Engineering
            </div>
          <div className="text-xs font-black text-stone-400  mb-2 ">Jain University, Bengaluru</div>
        </div>

        {/* CARD 6: Find Me Here (Visible Mobile + Desktop) */}
        <div className="md:col-span-2 md:row-span-1 bg-white/[0.02] backdrop-blur-3xl border border-stone-700 rounded-[2.5rem] p-8 flex flex-col items-center justify-center group hover:border-stone-100/20 transition-all duration-700 min-h-[180px]">
           <div className="text-center space-y-4 w-full">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-500">Find me here</span>
              <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                {socialLinks.map((s, idx) => (
                    <a 
                      key={idx} 
                      href={s.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-stone-300 hover:text-white transition-all transform hover:scale-110 active:scale-95 border border-white/10 rounded-full p-3 bg-white/5 hover:bg-white/10 hover:border-white/30"
                    >
                        {s.icon}
                    </a>
                ))}
              </div>
              <p className='text-stone-500 text-[10px] tracking-tight uppercase font-bold opacity-60'>
                Let's build something extraordinary.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BentoStats;