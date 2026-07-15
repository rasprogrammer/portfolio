export default function Education() {
  return (
    <div className="lg:col-span-3 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-5">
      <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center">
        <span className="mr-2 text-sm">🎓</span> Education
      </h3>
      
      <div className="space-y-4">
        <div className="relative pl-4 border-l-2 border-slate-100 dark:border-slate-800 space-y-1">
          <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#6d28d9]"></div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Bachelor of Computer Application</h4>
          <div className="text-xs text-slate-500 dark:text-slate-400">Computer Science & Engineering</div>
          <div className="text-[11px] text-slate-400 pt-1">2022 - 2025</div>
          <div className="text-[11px] text-slate-400">Raipur, Chhattisgarh, India</div>
        </div>
      </div>
    </div>
  );
}