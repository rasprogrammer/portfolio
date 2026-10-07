import Hero from '@/components/ui/Hero';
import Experience from '@/components/ui/Experience';
import Skills from '@/components/ui/Skills';
import Education from '@/components/ui/Education';
import Projects from '@/components/ui/Projects';

// One screen on desktop: a fixed-height grid, no page scroll. Phones stack and scroll.
export default function Portfolio() {
  return (
    <main className="w-full max-w-[1600px] mx-auto p-4 grid grid-cols-1 gap-4 lg:p-3 lg:gap-3 lg:h-dvh lg:grid-cols-12 lg:grid-rows-[minmax(0,1fr)_auto]">
      <Hero className="lg:col-span-3" />
      <Experience className="lg:col-span-6" />
      <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-3 min-h-0">
        <Skills className="flex-1" />
        <Education />
      </div>
      <Projects className="lg:col-span-12" />
    </main>
  );
}
