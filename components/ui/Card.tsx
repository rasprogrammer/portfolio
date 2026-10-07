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
    <section className={`rounded-xl border border-line p-4 flex flex-col lg:min-h-0 ${className}`}>
      {title && (
        <h2 className="text-eyebrow-s font-semibold uppercase tracking-[0.12em] text-subtle mb-2.5">{title}</h2>
      )}
      {/* Desktop only: on short screens a card scrolls inside itself so the page never does.
          Negative margin parks the scrollbar in the card's padding instead of over the text.
          Below lg cards show everything and only the page scrolls, so a swipe never gets trapped. */}
      <div className="scroll-area lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:-mr-3 lg:pr-3">{children}</div>
    </section>
  );
}
