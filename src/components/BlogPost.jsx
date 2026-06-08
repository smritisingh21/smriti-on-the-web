import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Copy, Check } from 'lucide-react';
import { blogs } from '../Blogs.js';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';


// ── Main BlogPost component ──────────────────────────────────────
const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? dark : light;

  // Find the blog from your imported array
  const blog = blogs.find((b) => b.id === parseInt(id));

  // 1. Handle "Not Found" state
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white font-mono">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Post not found</h1>
          <button onClick={() => navigate('/blog')} className="border border-white/20 px-4 py-2 rounded-full text-xs uppercase tracking-widest">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...theme.bg, minHeight: '100vh', fontFamily: "'DM Mono', monospace", transition: 'all 0.4s ease' }}>
      


      {/* Main Content */}
      <main style={{ marginLeft: '10vw', padding: '3rem 3rem 5rem 4rem', maxWidth: 720 }}>
        
        {/* Title Block */}
        <header style={{ borderBottom: `1px solid ${theme.border}`, paddingBottom: '2rem', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: 9, color: theme.dimmer, letterSpacing: '0.5em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '1rem' }}>
            — Blog Post
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: theme.text, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            {blog.title}
          </h1>
        </header>

        {/* Article Body */}
        <article>
          {blog.content.map((block, i) => {
            if (block.type === 'p') {
              return (
                <p key={i} style={{
                  fontSize: 16, 
                  color: theme.muted, 
                  lineHeight: 1.85, 
                  margin: '0 0 1.4rem',
                  whiteSpace: 'pre-line' 
                }}>
                  {block.text}
                </p>
              );
            }
            if (block.type === 'code') {
                return <CodeBlock key={i} text={block.text} lang={block.lang} theme={theme} />;
            }
            return null;
          })}
        </article>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid ${theme.border}`, marginTop: '4rem', paddingTop: '2rem' }}>
            <button
              onClick={() => navigate('/blogs')}
              style={{
                background: 'none', border: `1px solid ${theme.border}`, color: theme.muted,
                borderRadius: 40, padding: '8px 18px', fontSize: 9, letterSpacing: '0.3em',
                textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6
              }}
            >
              <ArrowLeft size={11} /> All posts
            </button>
        </footer>
      </main>
    </div>
  );
};

// ── Themes ───────────────────────────────────────────────────────
const dark = {
  bgColor: '#0a0a0a',
  bg: { background: '#0a0a0a' },
  sidebar: '#0a0a0a',
  card: 'rgba(255,255,255,0.02)',
  codeBg: '#111',
  codeText: '#a8a89a',
  text: '#e7e5df',
  muted: '#6b6b6b',
  dimmer: '#3d3d3d',
  border: '#1c1c1c',
  borderHover: 'rgba(255,255,255,0.15)',
};

const light = {
  bgColor: '#f5f3ee',
  bg: { background: '#f5f3ee' },
  sidebar: '#eeece7',
  card: 'rgba(0,0,0,0.025)',
  codeBg: '#e8e6e1',
  codeText: '#444',
  text: '#1a1a1a',
  muted: '#777',
  dimmer: '#bbb',
  border: '#e0ded9',
  borderHover: 'rgba(0,0,0,0.25)',
};

export default BlogPost;