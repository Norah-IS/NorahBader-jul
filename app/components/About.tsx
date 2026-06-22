'use client';

import Image from 'next/image';
import { useLang } from '../context/LangContext';

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section">
      <div className="section-inner about-grid">
        <div className="about-img-wrap">
          <Image
            src="/images/norahLogo.png"
            alt="Norah Bader Aljulayfi"
            width={300}
            height={300}
            className="about-img"
            priority
          />
        </div>
        <div className="about-text">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="body-text placeholder-text">{t.about.text}</p>
        </div>
      </div>
    </section>
  );
}
