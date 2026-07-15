'use client';

import { motion } from 'framer-motion';

type Project = {
  title: string;
  slogan: string;
  desc: string;
  // tags: string[];
  mock: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between h-full group hover:shadow-md transition"
    >
      <div>
        <div className="h-40 bg-slate-900 dark:bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden text-center">
          <span className="text-white/70 font-mono text-xs z-10 border border-white/10 px-3 py-1.5 rounded-md bg-white/5">
            {project.mock}
          </span>
        </div>
        <div className="p-4 space-y-2">
          <h4 className="font-bold text-md text-slate-900 dark:text-white">{project.title}</h4>
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
            {project.slogan}
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-400 line-clamp-3 leading-relaxed">
            {project.desc}
          </p>
        </div>
      </div>
      
      <div className="p-4 pt-0 space-y-3">
        <div className="flex flex-wrap gap-1">
          {/* {project.tags.map((tag, tIdx) => (
            <span key={tIdx} className="bg-[#f5f0ff] dark:bg-slate-800 text-[#7c3aed] dark:text-purple-400 text-[10px] px-2 py-0.5 rounded-md font-medium">
              {tag}
            </span>
          ))} */}
        </div>
        <div className="flex items-center space-x-4 pt-1 text-sm font-medium text-slate-600 dark:text-slate-400 border-t border-slate-50 dark:border-slate-800">
          <a href="#" className="hover:text-[#6d28d9] flex items-center">↗ Code</a>
          <a href="#" className="hover:text-[#6d28d9] flex items-center">👁 Live Demo</a>
        </div>
      </div>
    </motion.div>
  );
}