import Card from './Card';
import ProjectCard, { type Project } from './ProjectCard';

// `github` and `live` links show next to each title once a URL is filled in.
const projects: Project[] = [
  {
    title: "SchemaForge AI",
    slogan: "AI-Powered Database Schema Designer",
    desc: "AI-powered schema design tool built with Next.js, Node.js, PostgreSQL, and Claude API — generates, visualizes, and exports database schemas instantly.",
    github: "https://github.com/rasprogrammer/MeshSchema",
    live: "https://github.com/rasprogrammer",
  },
  {
    title: "PerpX",
    slogan: "Perpetual Futures Trading Platform",
    desc: "Production-grade crypto derivatives exchange with custom matching engine, margin/liquidation/funding systems, and real-time trading terminal built on TypeScript, Bun, Next.js.",
    github: "",
    live: "https://github.com/rasprogrammer",
  },
  {
    title: "SaaS Billing Engine",
    slogan: "Multi-Tenant SaaS Billing & Subscription Management Platform",
    desc: "Multi-tenant billing engine with metered subscriptions, plan-aware rate limiting, async invoicing, and a Next.js dashboard.",
    github: "https://github.com/rasprogrammer/saas-billing-engine",
    live: "https://github.com/rasprogrammer",
  },
  {
    title: "Sketch",
    slogan: "Real-Time Collaborative Whiteboard",
    desc: "Full-stack collaborative drawing app enabling multiple users to sketch, share, and sync shapes live across rooms in real time.",
    github: "https://github.com/rasprogrammer/drawsketch",
    live: "https://github.com/rasprogrammer",
  },
];

export default function Projects({ className = "" }: { className?: string }) {
  return (
    <Card title="Projects" className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Card>
  );
}
