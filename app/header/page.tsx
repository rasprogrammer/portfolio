"use client"; 

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


export default function Header() {

  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return <>
    
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            <span className="text-[#6d28d9]">&lt;/&gt;</span>
            <span>RAJEEV</span>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#home" className="text-[#6d28d9] border-b-2 border-[#6d28d9] pb-1">Home</a>
            <a href="#about" className="hover:text-[#6d28d9] transition">About</a>
            <a href="#skills" className="hover:text-[#6d28d9] transition">Skills</a>
            <a href="#experience" className="hover:text-[#6d28d9] transition">Experience</a>
            <a href="#projects" className="hover:text-[#6d28d9] transition">Projects</a>
            <a href="#contact" className="hover:text-[#6d28d9] transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-2 transition"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M6.343 4.343l.707.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <a href="#" className="bg-[#6d28d9] hover:bg-[#5b21b6] text-white px-4 h-9 flex items-center rounded-lg text-sm font-medium transition shadow-sm shadow-[#6d28d9]/20">
              <svg className="w-3.5 h-3.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download CV
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-slate-600 dark:text-slate-300 focus:outline-none p-2"
          >
            <span className="text-xl">{mobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* --- MOBILE DRAWER --- */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-1 overflow-hidden"
            >
              <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-[#6d28d9] bg-[#f5f0ff] dark:bg-slate-800">Home</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Skills</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Experience</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Projects</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Contact</a>
              <div className="pt-4 flex flex-col gap-2 border-t border-slate-100 dark:border-slate-800 mt-2">
                <button onClick={() => setDarkMode(!darkMode)} className="w-full text-center py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">
                  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
                <a href="#" className="w-full text-center bg-[#6d28d9] text-white py-2 rounded-lg text-sm font-medium">
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
  </>;
}