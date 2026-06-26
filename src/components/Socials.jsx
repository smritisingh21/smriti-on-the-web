import React, { useEffect, useState, useRef } from 'react';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Instagram, 
  Github, 
  Sparkles,
  ArrowRight,
  Send
} from 'lucide-react';

/**
 * THE CONTACT STRATEGY:
 * 1. FORM INTEGRATION: Adds a high-fidelity contact form to the existing Socials layout.
 * 2. GLASS UI: Minimalist inputs with high-contrast stone-900 borders and stone-100 focus states.
 * 3. TRANSPARENCY: Zero background color, allowing the fixed planetary video to show through.
 * 4. FEEDBACK: Integrated success/error messages with cinematic animations.
 */

const Socials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => { if (containerRef.current) observer.unobserve(containerRef.current); };
  }, []);



  // Handle form submission via Formspree (or similar)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    try {
      // REPLACE 'your_form_id' with your actual Formspree ID
      const response = await fetch("https://formspree.io/f/mreppjwk", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div 
      id="contacts" 
      ref={containerRef}
      className="flex flex-col items-center justify-center py-32 px-6 bg-black/80 relative overflow-hidden"
    >
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-600/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6"> */}
          {/* <Sparkles size={12} className="text-amber-400" /> */}
          {/* <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">Send me a mail</span> */}
        {/* </div> */}
        <h2 className="text-4xl md:text-7xl font-black text-stone-100 tracking-tighter uppercase leading-none">
          Want to connect ?<br/><span className="text-gray-400 italic font-thin lowercase tracking-normal">Let's talk</span>
        </h2>
      </div>

      {/* Contact Form Section */}
      <div className={`max-w-2xl w-full mb-32 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[15px] font-black  text-stone-200 ml-4">Name</label>
              <input 
                type="text" name="name" required
                placeholder="John Doe"
                className="w-full bg-white/[0.02] border border-stone-900 focus:border-gray-500/50 rounded-2xl px-6 py-4 text-stone-100 outline-none transition-all placeholder:text-stone-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[15px] font-black  text-stone-200 ml-4">Email</label>
              <input 
                type="email" name="email" required
                placeholder="john@example.com"
                className="w-full bg-white/[0.02] border border-stone-900 focus:border-gray-500/50 rounded-2xl px-6 py-4 text-stone-100 outline-none transition-all placeholder:text-stone-500"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[15px] font-black  text-stone-200 ml-4">Your Message</label>
            <textarea 
              name="message" required rows="6"
              placeholder="What's on your mind?"
              className="w-full bg-white/[0.02] border border-stone-900 focus:border-gray-500/50 rounded-[2.5rem] px-6 py-6 text-stone-100 outline-none transition-all placeholder:text-stone-500 resize-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="group w-full py-6 bg-stone-100 text-black rounded-full font-black uppercase tracking-widest text-[10px] 
            flex items-center justify-center gap-4 hover:bg-transparent hover:text-white transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : (
              <>Send mail <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /></>
            )}
          </button>

          {/* Feedback Status */}
          {status === 'success' && <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest text-center animate-pulse">Message Sent. I'll get back to you soon.</p>}
          {status === 'error' && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest text-center">Transmission Failed. Please try again.</p>}
        </form>
      </div>

      {/* The Social Dock (The Original Logic Integrated) */}
     
      <style dangerouslySetInnerHTML={{ __html: `
        .text-glow { text-shadow: 0 0 15px rgba(52, 211, 153, 0.4); }
      `}} />
    </div>
  );
}

export default Socials;