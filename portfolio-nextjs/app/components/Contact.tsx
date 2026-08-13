'use client';

import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { useLang } from '../context/LangContext';

const contacts = [
  { Icon: Mail,     label: 'norah.b.aljulayfi@gmail.com', href: 'mailto:norah.b.aljulayfi@gmail.com' },
  { Icon: Linkedin, label: 'LinkedIn',                    href: 'https://www.linkedin.com/in/norah-is' },
  { Icon: Github,   label: 'GitHub',                      href: 'https://github.com/Norah-IS' },
  { Icon: Phone,    label: '+966 500 548 747',            href: 'tel:+966500548747' },
];

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="body-text contact-intro">{t.contact.intro}</p>
        <ul className="contact-list">
          {contacts.map(({ Icon, label, href }) => (
            <li key={href}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-link"
              >
                <Icon size={20} aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
