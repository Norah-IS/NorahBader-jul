import Image from 'next/image';

export default function About() {
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
          <h2 className="section-title">About</h2>
          {/* Replace this with your real bio — 2–3 sentences */}
          <p className="body-text placeholder-text">
  I'm Norah Aljulayfi, a Computer Information Systems student with a
  foundation in programming, databases, and web development. I'm especially
  drawn to AI engineering, and I enjoy the challenge of turning data into
  something that actually works </p>        </div>
      </div>
    </section>
  );
}
