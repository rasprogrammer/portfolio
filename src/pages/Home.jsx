import cvPdf from "@/assets/files/cv_pdf/Niladri_Chatterjee(CV).pdf";
import { VercelLogo } from "@/components/TechLogos";
import { CONTACT_INFO } from "@/config/contact";
import { fetcher, formatRepoCount, isTouchDevice } from "@/utils/helpers";
import { motion } from "framer-motion";
import {
  ArrowRightToLine,
  Check,
  Copy,
  FileDown,
  Github,
  Linkedin,
  MessageCircle,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

const GITHUB_API = `https://api.github.com/users/${import.meta.env.VITE_GITHUB_USERNAME || "niladri-1"}`;

const Home = () => {
  const [copied, setCopied] = useState(false);

  const { data: githubData } = useSWR(GITHUB_API, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 300000,
    shouldRetryOnError: true,
    errorRetryCount: 3,
  });

  const displayRepos = formatRepoCount(githubData?.public_repos ?? 0);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silent fail
    }
  };

  const handleEmailClick = () => {
    if (isTouchDevice()) {
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center pt-10 ">
      <div className="text-center z-10 ">
        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#120E2E] mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Rajeev Kumar
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-black/60 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Design &amp; Code for web
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-[#120E2E]/70 max-w-3xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Software Developer specializing in Full Stack Development with
          expertise in React.js, Node.js and modern Web Technologies.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-[#120E2E] text-[#F9F0FE] rounded-2xl font-semibold text-lg flex items-center gap-3 hover:bg-[#100E09] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <FileDown className="w-5 h-5" />
            Download CV
          </a>

          <Link
            to="/about"
            className="group px-8 py-4 border-2 border-[#120E2E] text-[#120E2E] hover:bg-[#120E2E] hover:text-[#F9F0FE] rounded-2xl font-medium text-lg flex items-center gap-3 transition-all duration-300"
          >
            <ArrowRightToLine />
            Show Works
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;