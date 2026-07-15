

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faN, 
  faLeaf, 
  faDatabase, 
  faWind 
} from "@fortawesome/free-solid-svg-icons";
import { 
  faJs, 
  faReact, 
  faNodeJs, 
  faGitAlt, 
  faPython, 
  faDocker, 
  faAws, 
  faLinux 
} from "@fortawesome/free-brands-svg-icons";

export default function TechGrid() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 gap-y-6 gap-x-2 text-center">
      {/* JavaScript */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center text-xl shadow-inner">
          <FontAwesomeIcon icon={faJs} />
        </span>
        <span className="text-[11px] font-medium text-slate-500">JavaScript</span>
      </div>

      {/* TypeScript */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl shadow-inner">
          <FontAwesomeIcon icon={faCode} className="text-base" />
        </span>
        <span className="text-[11px] font-medium text-slate-500">TypeScript</span>
      </div>

      {/* React.js */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-500 flex items-center justify-center text-xl shadow-inner">
          <FontAwesomeIcon icon={faReact} />
        </span>
        <span className="text-[11px] font-medium text-slate-500">React.js</span>
      </div>

      {/* Next.js */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-neutral-50 text-neutral-800 flex items-center justify-center text-xl shadow-inner">
          <FontAwesomeIcon icon={faN} />
        </span>
        <span className="text-[11px] font-medium text-slate-500">Next.js</span>
      </div>

      {/* Node.js */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shadow-inner">
          <FontAwesomeIcon icon={faNodeJs} />
        </span>
        <span className="text-[11px] font-medium text-slate-500">Node.js</span>
      </div>

      {/* Express.js */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center text-xs font-bold shadow-inner">
          ex
        </span>
        <span className="text-[11px] font-medium text-slate-500">Express.js</span>
      </div>

      {/* MongoDB */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-xl shadow-inner">
          <FontAwesomeIcon icon={faLeaf} />
        </span>
        <span className="text-[11px] font-medium text-slate-500">MongoDB</span>
      </div>

      {/* PostgreSQL */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center text-xl shadow-inner">
          <FontAwesomeIcon icon={faDatabase} className="text-base" />
        </span>
        <span className="text-[11px] font-medium text-slate-500">PostgreSQL</span>
      </div>

      {/* Tailwind */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-teal-50 text-teal-400 flex items-center justify-center text-lg shadow-inner">
          <FontAwesomeIcon icon={faWind} />
        </span>
        <span className="text-[11px] font-medium text-slate-500">Tailwind</span>
      </div>

      {/* Git */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl shadow-inner">
          <FontAwesomeIcon icon={faGitAlt} />
        </span>
        <span className="text-[11px] font-medium text-slate-500">Git</span>
      </div>

      {/* Python */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center text-xl shadow-inner">
          <FontAwesomeIcon icon={faPython} />
        </span>
        <span className="text-[11px] font-medium text-slate-500">Python</span>
      </div>

      {/* Docker */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center text-base shadow-inner">
          <FontAwesomeIcon icon={faDocker} />
        </span>
        <span className="text-[11px] font-medium text-slate-500">Docker</span>
      </div>

      {/* AWS */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-orange-50 text-amber-600 flex items-center justify-center text-base shadow-inner">
          <FontAwesomeIcon icon={faAws} />
        </span>
        <span className="text-[11px] font-medium text-slate-500">AWS</span>
      </div>

      {/* Linux */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center text-base shadow-inner">
          <FontAwesomeIcon icon={faLinux} />
        </span>
        <span className="text-[11px] font-medium text-slate-500">Linux</span>
      </div>

      {/* REST API */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="w-10 h-10 rounded-xl bg-purple-50 text-brand flex items-center justify-center text-xs font-bold shadow-inner">
          API
        </span>
        <span className="text-[11px] font-medium text-slate-500">REST API</span>
      </div>
    </div>
  );
}
