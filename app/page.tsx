'use client';

import "font-awesome/css/font-awesome.min.css";

import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import Skills from '@/components/ui/Skills';
import Experience from '@/components/ui/Experience';
import Education from '@/components/ui/Education';
import Projects from '@/components/ui/Projects';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/layout/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased font-sans">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <Hero />
        <hr className="border-slate-100 dark:border-slate-900" />

        {/* Skills + Experience + Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Skills />
          <Experience />
          <Education />
        </div>

        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}