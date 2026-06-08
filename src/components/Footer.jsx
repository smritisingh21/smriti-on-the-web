import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaGlobe } from 'react-icons/fa';
import { socialLinks } from '../SocialsData';
const Footer = () => {
  const [time, setTime] = useState('');
    const links = [
    { name: 'Home', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Selected Works', href: '#projects-section' },
    { name: 'Contact', href: '#contacts' },
  ];

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative z-10 bg-[#0a0a0a] text-stone-200 pt-32 pb-12 px-8 md:px-20 border-t border-stone-900">
   

      {/* 2. THE DIRECTORY: Multi-column links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-32">
        
        {/* Column 1: Directory */}
        {/* <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-600 mb-2">Directory</h4>
          {links.map((item) => (
            <a key={item} href={item.href} className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-100 transition-colors">
              {item.name}
            </a>
          ))}
        </div> */}

        {/* Column 2: Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-600 mb-2">Socials</h4>
          {socialLinks.map((item) => (
            <a key={item.name} href={item.href} target='_blank' className="text-xs cursor-pointer font-bold uppercase tracking-widest text-stone-400 hover:text-stone-100 transition-colors">
              {item.name}
            </a>
          ))}
        </div>

        {/* Column 3: Availability / Status */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-600 mb-2">Availability</h4>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <p className="text-xs font-bold text-stone-300 uppercase tracking-widest">Available for hire</p>
          </div>
          <p className="text-[10px] text-stone-600 leading-relaxed uppercase tracking-widest">
            Currently accepting <br /> freelance inquiries <br /> for Q1 / 2026.
          </p>
        </div>

        {/* Column 4: Local Time */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-600 mb-2">Local Time</h4>
          <div className="text-xl font-bold text-stone-100 tabular-nums">
            {time}
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-stone-600 uppercase tracking-widest">
            <FaGlobe  size={12} /> Bangalore, India
          </div>
        </div>

      </div>

      {/* 3. LEGAL / FOOTNOTE: The bottom line */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-stone-900">
        <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-700">
          © 2026 SMRITI SINGH <span className="md:ml-4 text-stone-800">®</span>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-700 italic">
          
        </div>
      </div>

    </footer>
  );
};

export default Footer;