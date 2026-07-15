'use client';

import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "E-Mail Spam Detector",
    desc: "AI-powered email client that detects spam, summarizes emails, and lets you chat with your inbox.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    mock: "[E-Mail Spam Detector View]"
  },
  {
    title: "Book Store",
    desc: "A modern Book Management System with secure MERN stack. Features user auth, book CRUD, cart & order management.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    mock: "[Book Store Grid Dashboard]"
  },
  {
    title: "NetScan-Pro",
    desc: "Bash-based network scanning tool that provides live host discovery, port scanning, traceroute, and ping tests.",
    tags: ["Linux", "Bash", "Networking", "NMAP"],
    mock: "$ nmap -sS -O 192.168.1.1"
  },
  {
    title: "Student Portfolio",
    desc: "A professional portfolio template for engineers and developers. Easy to customize and deploy.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    mock: "John Doe's Portfolio"
  }
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