export default function Contact() {
  return (
    <section id="contact" className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-bold text-xl text-slate-900 dark:text-white">Let's work together</h3>
          <p className="text-xs sm:text-sm text-slate-400">Have a project in mind or want to discuss an opportunity? I'm always open to discussing new ideas.</p>
        </div>
        <button className="bg-[#6d28d9] hover:bg-[#5b21b6] text-white px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm self-start md:self-center transition flex items-center shadow-sm">
          ✉ Get In Touch
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-50 dark:border-slate-800">
        {[
          { label: "Email", value: "rasprogrammer@gmail.com" },
          { label: "Phone", value: "+91 62027 84972" },
          { label: "Location", value: "Motihari, Bihar, India" },
          { label: "Timezone", value: "IST (UTC+5:30)" }
        ].map((info, idx) => (
          <div key={idx} className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
            <span className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-slate-800 text-[#6d28d9] dark:text-purple-400 flex items-center justify-center text-sm">
              ℹ
            </span>
            <div className="min-w-0">
              <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{info.label}</div>
              <div className="text-xs font-medium text-slate-800 dark:text-slate-200 truncate">{info.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}