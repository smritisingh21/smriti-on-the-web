import React, { useState } from 'react';
import { FaArrowCircleRight, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { FaGithub , FaLinkedin, FaLocationDot, FaX , FaInstagram} from 'react-icons/fa6';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/works' },
    { name: 'Selected Works', href: '/projects' },
    { name: 'Blogs', href: '/blogs' },
  ];

  const socials = [
    { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/smriti-singh-a06685257/" },
    { icon: <FaGithub  size={18} />, href: "https://github.com/smritisingh21" },
    { icon: <FaTwitter  size={18} />, href: "https://x.com/sillymilllly" },
    { icon: <FaInstagram  size={18} />, href: "https://www.instagram.com/smriti.made.these/" },
  ];

  return (
    <>
      {/* Mobile Toggle Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[110] p-6 flex justify-between items-center
       bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-stone-900">

        <div className="font-black tracking-tighter text-white">
          SMRITI SINGH<span className="text-stone-600">®</span>
          </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <FaX size={24} /> : <IoMenu size={24} />}
        </button>
      </div>

      {/* Main Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full z-[100] 
        bg-[#0a0a0a] border-r border-stone-900
        transition-all duration-700 ease-in-out
        w-full md:w-[22vw] lg:w-[18vw] 
        flex flex-col justify-start p-10 gap-10
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Top Section: Photo & Brand */}
        <div className="space-y-5">
          <div className="group relative w-24 h-24 md:w-32 md:h-32">

            <div className="absolute inset-0 bg-stone-500/20 blur-2xl 
            rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-stone-900 border
             border-stone-800">
               <img 
                 src="mili.jpg" 
                 alt="Smriti Singh" 
                 className="w-full h-full object-cover  transition-all duration-700"
               />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-stone-100/80 leading-none mb-2">
              Smriti Singh
            </h1>
            <p className="text-[10px] font-bold text-stone-600 uppercase tracking-wider">
             CS engineer / Developer
            </p>
            <p className=" flex items-center justify-start gap-1.5 text-[10px] font-bold text-stone-600  tracking-wider mt-3">
             <FaLocationDot size={12}/> Bengaluru ,India
            </p>
          </div>

          <div className=" border-t border-stone-900 pt-3 ">
          <div className="flex gap-5">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-stone-600 hover:text-stone-100 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        </div>
       

        {/* Middle Section: Navigation */}
        <nav className="flex flex-col gap-6">
          <div className="text-[9px] font-bold text-stone-700 uppercase tracking-[0.5em] mb-2">Menu</div>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-100 transition-all"
            >
              {link.name}
              <FaArrowCircleRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </Link>
          ))}
        </nav>

    
      </aside>
    </>
  );
};

export default Sidebar;