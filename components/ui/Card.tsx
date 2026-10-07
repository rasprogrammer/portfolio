export default function Card({
  title,
  className = "",
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`rounded-xl border border-line p-4 flex flex-col min-h-0 ${className}`}>
      {title && (
        <h2 className="text-eyebrow-s font-semibold uppercase tracking-[0.12em] text-subtle mb-2.5">{title}</h2>
      )}
      {/* On short screens a card scrolls inside itself so the page never does.
          Negative margin parks the scrollbar in the card's padding instead of over the text. */}
      <div className="scroll-area min-h-0 flex-1 overflow-y-auto -mr-3 pr-3">{children}</div>
    </section>
  );
}
