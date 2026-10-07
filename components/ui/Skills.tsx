import Card from './Card';

const skills = [
  "JavaScript", "TypeScript", "Python",
  "React.js", "Next.js", "Tailwind CSS",
  "Node.js", "Express.js", "REST APIs",
  "PostgreSQL", "MongoDB",
  "Git", "Docker", "AWS", "Linux",
];

export default function Skills({ className = "" }: { className?: string }) {
  return (
    <Card title="Skills" className={className}>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="px-2.5 py-1 rounded-md bg-surface text-body-s font-medium text-fg">
            {skill}
          </li>
        ))}
      </ul>
    </Card>
  );
}
