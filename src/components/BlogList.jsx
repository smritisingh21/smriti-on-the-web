import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { blogs } from '../Blogs';
import { Link } from 'react-router';


const BlogList = () => {
  return (
      <div className="min-h-50 bg-[#0a0a0a] text-[#e7e5df] font-roboto flex">
      
      <main className="flex-1  p-8 md:p-16 max-w-4xl">
        <header className="border-b border-[#1c1c1c] pb-8 mb-10">
          <h1 className="text-5xl font-black tracking-tighter mt-4 flex justify-center">Blogs</h1>
        </header>

        <div className="flex flex-col gap-4">
          {blogs.map((blog) => (
            <Link to={blog.link}>
            <div
              key={blog.id}
              className="group flex items-center justify-between p-6 bg-white/5 border border-[#1c1c1c] rounded-2xl hover:border-white/20 hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div>
                <div className="flex gap-2 mb-2">
                  {blog.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#3d3d3d] border border-[#1c1c1c] px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-bold leading-tight group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h2>
                <div className="text-[9px] text-[#3d3d3d] font-bold tracking-[0.1em] mt-2">
                  {blog.date} · {blog.readTime}
                </div>
              </div>
              <ArrowUpRight className="text-[#3d3d3d] group-hover:text-[#e7e5df] transition-colors" size={20} />
            </div>
          </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogList;