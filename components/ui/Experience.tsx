import { useState } from 'react';

export default function Experience() {
  // Toggle to show full text or preview inside the card
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="experience" className="lg:col-span-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-base text-slate-900 dark:text-white">Experience</h3>
        {/* Link points to your dedicated experience page */}
        <a href="/experience" className="text-xs font-semibold text-[#7c3aed] hover:underline">
          View All
        </a>
      </div>
      
      {/* Scrollable Container with Max Height */}
      <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2 scrollbar-thin">
        <div className="flex items-start space-x-3">
          <div className="w-9 h-9 min-w-[36px] bg-purple-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-[#6d28d9] text-xs font-bold">
            💼
          </div>
          <div className="space-y-2">
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Full Stack Developer</h4>
              <div className="text-xs text-[#7c3aed] font-medium mt-0.5">Myskoolerp</div>
              <div className="flex items-center space-x-3 text-[11px] text-slate-400 mt-1">
                <span>📅 Aug 2022 - July 2026</span>
                <span>📍 Remote</span>
              </div>
            </div>
            
            <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 list-disc pl-3 leading-relaxed">
              <li>Engineered RBAC system using encrypted session-based authorization to secure sensitive academic and financial data.</li>
              <li>Developed end-to-end admission workflow utilizing dynamic forms and bulk imports, reducing manual onboarding errors by 50%+.</li>
              <li>Designed centralized Student Information System (SIS) with a scalable database structure, boosting faculty and administrative efficiency.</li>
              
              {/* Conditional truncation logic */}
              {!isExpanded ? (
                <li className="list-none pl-0 ml-[-12px]">
                  <button 
                    onClick={() => setIsExpanded(true)} 
                    className="text-[#7c3aed] hover:underline font-medium text-left cursor-pointer"
                  >
                    ... Read More
                  </button>
                </li>
              ) : (
                <>
                  <li>Created automated timetable scheduler featuring algorithmic slot allocation, eliminating scheduling conflicts and optimizing resource utilization.</li>
                  <li>Architected comprehensive financial module to automate fees, wallets, and billing processes, maximizing operational accuracy and transparency.</li>
                  <li>Integrated ISGPay payment gateway via secure REST APIs and webhooks, achieving reliable, real-time transaction reconciliation.</li>
                  <li>Converted core ERP into a Progressive Web App (PWA) featuring offline caching, reducing administrative workloads by 80%+.</li>
                  <li className="list-none pl-0 ml-[-12px]">
                    <button 
                    onClick={() => setIsExpanded(false)} 
                    className="text-[#7c3aed] hover:underline font-medium text-left cursor-pointer"
                    >
                      Show Less
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
