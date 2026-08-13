'use client';

import { useLang } from '../context/LangContext';

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <h2 className="section-title">{t.about.title}</h2>
        <p className="body-text placeholder-text">{t.about.text}</p>
      </div>
    </section>
  );
}
