import { SITE_LINKS } from '@/utils/constants';

const contactInfo = [
  { label: "Email", value: SITE_LINKS.email, href: `mailto:${SITE_LINKS.email}` },
  { label: "Phone", value: "+91 62027 84972", href: "tel:+916202784972" },
  { label: "Location", value: "Motihari, Bihar, India" },
  { label: "Timezone", value: "IST (UTC+5:30)" },
];

export default function Contact() {
  return (
    <dl className="space-y-1.5">
      {contactInfo.map((info) => (
        <div key={info.label} className="flex gap-3 text-body-s">
          <dt className="w-[4.5rem] shrink-0 text-subtle">{info.label}</dt>
          <dd className="min-w-0 font-medium text-fg truncate">
            {info.href ? (
              <a href={info.href} className="hover:text-accent-text">{info.value}</a>
            ) : (
              info.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
