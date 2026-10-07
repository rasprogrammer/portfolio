import Image from 'next/image';
import profileImage from "@/public/profile.png";

import Card from './Card';
import Contact from './Contact';
import SocialLinks from './SocialMedia';
import ThemeToggle from './ThemeToggle';
import { buttonClass } from './Button';
import { SITE_LINKS } from '@/utils/constants';

export default function Hero({ className = "" }: { className?: string }) {
  return (
    <Card className={className}>
      <div className="flex items-center gap-3">
        <div className="relative w-14 h-14 shrink-0 rounded-full bg-accent overflow-hidden">
          {/* Full-body cutout: zoom in and centre on head and shoulders */}
          <Image
            src={profileImage}
            alt="Portrait of Rajeev Kumar"
            priority
            sizes="128px"
            className="absolute left-1/2 top-1/2 w-[220%] max-w-none h-auto -translate-x-[54%] -translate-y-[27.5%]"
          />
        </div>
        <div className="min-w-0">
          <h1 className="text-title-xs font-bold text-fg">Rajeev Kumar</h1>
          <p className="text-body-s font-medium text-accent-text">Full Stack Developer</p>
        </div>
      </div>

      <p className="mt-3 text-body-s text-muted">
        I build web apps with React, Next.js, Node.js and PostgreSQL, from the database up to the UI.
      </p>

      <div className="mt-4 flex gap-2">
        <a href={SITE_LINKS.resume} target="_blank" rel="noopener noreferrer" className={buttonClass('primary', 'flex-1 h-10')}>
          Resume
        </a>
        <a href={`mailto:${SITE_LINKS.email}`} className={buttonClass('secondary', 'flex-1 h-10')}>
          Email me
        </a>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <SocialLinks />
        <ThemeToggle />
      </div>

      <div className="mt-4 pt-4 border-t border-line">
        <Contact />
      </div>
    </Card>
  );
}
