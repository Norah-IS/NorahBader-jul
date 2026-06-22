'use client';

import { ArrowDown } from 'lucide-react';
import { useLang } from '../context/LangContext';

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero-section" aria-label="Introduction">
      <div className="hero-content">
        <p className="hero-eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero-name">{t.hero.name}</h1>
        <p className="hero-role">{t.hero.role}</p>
        <a href="/cv.pdf" download className="btn-primary">{t.hero.downloadCV}</a>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll to about section">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
