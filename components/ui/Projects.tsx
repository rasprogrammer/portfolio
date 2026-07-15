'use client';

import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "SchemaForge AI",
    slogan: "AI-Powered Database Schema Designer",
    desc: "AI-powered schema design tool built with Next.js, Node.js, PostgreSQL, and Claude API — generates, visualizes, and exports database schemas instantly.",
    // tags: ["MongoDB", "Express", "React", "Node.js"],
    mock: "[E-Mail Spam Detector View]"
  },
  {
    title: "PerpX",
    slogan: "Perpetual Futures Trading Platform",
    desc: "Production-grade crypto derivatives exchange with custom matching engine, margin/liquidation/funding systems, and real-time trading terminal built on TypeScript, Bun, Next.js.",
    // tags: ["MongoDB", "Express", "React", "Node.js"],
    mock: "[Perpetual Futures Trading Platform]"
  },
  {
    title: "SaaS Billing Engine",
    slogan: "Multi-Tenant SaaS Billing & Subscription Management Platform",
    desc: "Multi-tenant billing engine with metered subscriptions, plan-aware rate limiting, async invoicing, and a Next.js dashboard.",
    // tags: ["MongoDB", "Express", "React", "Node.js"],
    mock: "[Perpetual Futures Trading Platform]"
  },
  {
    title: "Sketch",
    slogan: "Real-Time Collaborative Whiteboard",
    desc: "Full-stack collaborative drawing app enabling multiple users to sketch, share, and sync shapes live across rooms in real time.",
    // tags: ["MongoDB", "Express", "React", "Node.js"],
    mock: "[Real-Time Collaborative Whiteboard Platform]"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl text-slate-900 dark:text-white">Featured Projects</h3>
        <a href="#" className="text-xs font-bold text-[#7c3aed] flex items-center hover:underline">
          View All Projects <span className="ml-1">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}