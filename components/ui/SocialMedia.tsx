import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const socialMediaIcons = [
  { name: "GitHub", icon: <FontAwesomeIcon icon={faGithub} />, link: "https://github.com/rasprogrammer" },
  { name: "LinkedIn", icon: <FontAwesomeIcon icon={faLinkedin} />, link: "https://linkedin.com" },
  { name: "Twitter", icon: <FontAwesomeIcon icon={faTwitter} />, link: "https://twitter.com/rasprogrammer" },
  { name: "WhatsApp", icon: <FontAwesomeIcon icon={faWhatsapp} />, link: "https://wa.me/+916202784972" }
];

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4 mt-6 text-md text-slate-500 dark:text-slate-400 font-medium">
      <span>Connect with me</span>
      <div className="flex space-x-3">
        {socialMediaIcons.map((social, i) => (
          <a 
            key={i} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer"
            title={social.name}
            className="w-20 h-20 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center bg-white dark:bg-slate-900 hover:text-[#6d28d9] hover:border-[#6d28d9] transition text-sm"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
