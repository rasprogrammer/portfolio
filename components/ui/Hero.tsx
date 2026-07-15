'use client';

import { motion } from 'framer-motion';
import profileImage from "@/public/profile.png";
import Image from 'next/image';

import SocialLinks from './SocialMedia';

export default function Hero() {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-7 space-y-6 order-2 lg:order-1"
      >
        <div className="inline-flex items-center bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-900/50">
          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          Available for opportunities
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Rajeev <span className="text-[#7c3aed]">Kumar</span>
        </h1>
        
        <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200">
          Design & Code for web
        </h2>
        
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl text-sm sm:text-base">
          Software Developer specializing in Full Stack Development with expertise in React.js, Node.js and modern Web Technologies.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#" className="bg-[#6d28d9] hover:bg-[#5b21b6] text-white px-5 py-2.5 rounded-xl font-medium transition flex items-center shadow-md shadow-[#6d28d9]/20 text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download CV
          </a>
          <a href="#projects" className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-5 py-2.5 rounded-xl font-medium transition flex items-center text-sm">
            View My Work <span className="ml-2 text-slate-400 dark:text-slate-500">→</span>
          </a>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2"
      >
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-[#f5f0ff] dark:bg-slate-900 flex items-center justify-center overflow-hidden">
            <Image src={profileImage} width={400} height={400} alt='Profile Image' className='relative top-20 shadow-2xl'/>
        </div>
        
        <SocialLinks />
      </motion.div>
    </section>
  );
}