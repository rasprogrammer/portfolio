import TechGrid from "./TechGrid";

export default function Skills() {
  return (
    <div id="skills" className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Skills & Technologies</h3>
          <a href="#" className="text-xs font-semibold text-[#7c3aed] hover:underline">View All</a>
        </div>
        
        <TechGrid />
      </div>
    </div>
  );
}