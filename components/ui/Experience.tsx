import Card from './Card';

const highlights = [
  "Engineered RBAC system using encrypted session-based authorization to secure sensitive academic and financial data.",
  "Developed end-to-end admission workflow utilizing dynamic forms and bulk imports, reducing manual onboarding errors by 50%+.",
  "Designed centralized Student Information System (SIS) with a scalable database structure, boosting faculty and administrative efficiency.",
  "Created automated timetable scheduler featuring algorithmic slot allocation, eliminating scheduling conflicts and optimizing resource utilization.",
  "Architected comprehensive financial module to automate fees, wallets, and billing processes, maximizing operational accuracy and transparency.",
  "Integrated ISGPay payment gateway via secure REST APIs and webhooks, achieving reliable, real-time transaction reconciliation.",
  "Converted core ERP into a Progressive Web App (PWA) featuring offline caching, reducing administrative workloads by 80%+.",
];

export default function Experience({ className = "" }: { className?: string }) {
  return (
    <Card title="Experience" className={className}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-body-l font-semibold text-fg">
          Full Stack Developer <span className="text-accent-text">· Myskoolerp</span>
        </h3>
        <p className="text-body-xs text-subtle">Aug 2022 – Jul 2026 · Remote</p>
      </div>

      <ul className="mt-2.5 space-y-1.5 list-disc pl-4 marker:text-subtle">
        {highlights.map((item) => (
          <li key={item} className="text-body-s text-muted">{item}</li>
        ))}
      </ul>
    </Card>
  );
}
