import Card from './Card';

export default function Education({ className = "" }: { className?: string }) {
  return (
    <Card title="Education" className={className}>
      <h3 className="text-body-m font-semibold text-fg">Bachelor of Computer Application</h3>
      <p className="text-body-s text-muted">Computer Science & Engineering</p>
      <p className="mt-1 text-body-xs text-subtle">2022 – 2025 · Raipur, Chhattisgarh, India</p>
    </Card>
  );
}
