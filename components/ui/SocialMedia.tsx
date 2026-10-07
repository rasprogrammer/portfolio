import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { SITE_LINKS } from '@/utils/constants';

const socialMediaLinks = [
  { name: "GitHub", icon: faGithub, link: SITE_LINKS.github },
  { name: "LinkedIn", icon: faLinkedin, link: SITE_LINKS.linkedin },
  { name: "X", icon: faXTwitter, link: SITE_LINKS.x },
  { name: "WhatsApp", icon: faWhatsapp, link: SITE_LINKS.whatsapp },
];

export default function SocialLinks() {
  return (
    <ul className="flex gap-2">
      {socialMediaLinks.map((social) => (
        <li key={social.name}>
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-muted hover:text-accent-text hover:border-accent-text transition-colors"
          >
            <FontAwesomeIcon icon={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
