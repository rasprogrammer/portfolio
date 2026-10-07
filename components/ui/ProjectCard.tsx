export type Project = {
  title: string;
  slogan: string;
  desc: string;
  github?: string;
  live?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const links = [
    { label: "GitHub", href: project.github },
    { label: "Live", href: project.live },
  ].filter((link) => link.href);

  return (
    <article className="space-y-1">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-body-m font-semibold text-fg">{project.title}</h3>
        {links.length > 0 && (
          <div className="flex shrink-0 gap-3 text-body-xs font-medium">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-subtle hover:text-accent-text transition-colors"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
      <p className="text-body-xs font-medium text-accent-text">{project.slogan}</p>
      <p className="text-body-s text-muted">{project.desc}</p>
    </article>
  );
}
