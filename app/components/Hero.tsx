import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Introduction">
      <div className="hero-content">
        <p className="hero-eyebrow">Hello, I&apos;m</p>
        <h1 className="hero-name">Norah Bader Aljulayfi</h1>
        <p className="hero-role">Computer Information Systems Student</p>
        <p className="hero-tagline">Building thoughtful software — one problem at a time.</p>
        <a href="/cv.pdf" download className="btn-primary">Download CV</a>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll to about section">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
