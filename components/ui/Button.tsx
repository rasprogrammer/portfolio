type Variant = "primary" | "secondary" | "tertiary";

const base =
  "inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg text-body-s font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white border border-accent hover:bg-dark-blue hover:border-dark-blue dark:hover:bg-accent-text dark:hover:border-accent-text",
  secondary: "bg-bg text-fg border border-line hover:bg-surface",
  tertiary: "text-accent-text hover:underline underline-offset-4 px-0 h-auto",
};

export function buttonClass(variant: Variant = "primary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`;
}
