import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Building2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "myskoolerp",
    location: "Remote",
    period: "Jun 2024 - Aug 2024",
    type: "Internship",
    description: [
      "Optimized web application performance with JavaScript and React.js, achieving a 98% error-free rate",
      "Implemented advanced features on a React.js platform, resulting in a 40% surge in user interaction",
    ],
  },
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-20 max-w-6xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <ScrollAnimation key={exp.id}>
              <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm bg-gray-800/70 transition-all border border-white/5">
                <div className="">
                  <div className="p-6 sm:p-8">
                    {/* Clickable Full Heading */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="w-full text-left flex items-start justify-between bg-white/5 -mx-2 px-2 py-3 rounded-xl transition-all"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                            <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold">
                              {exp.title}
                            </h3>
                            <p className="text-gray-400 text-base sm:text-lg">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        {/* Location & Period */}
                        <div className="flex flex-wrap items-center gap-2 text-gray-300 text-sm sm:text-base pl-14 sm:pl-16">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Chevron */}
                      <div className="mt-1 ml-4">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 transition-transform" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 transition-transform" />
                        )}
                      </div>
                    </button>

                    {/* Expandable Description Section */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-white/10"
                        >
                          <ul className="space-y-3 sm:space-y-4 pl-1">
                            {exp.description.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                              >
                                <ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;