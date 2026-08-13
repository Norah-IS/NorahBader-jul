'use client';

import { useLang } from '../context/LangContext';

function PreLine({ text }: { text: string }) {
  return <p className="placeholder-text" style={{ whiteSpace: 'pre-line' }}>{text}</p>;
}

export default function Experience() {
  const { t } = useLang();
  const exp = t.experience;
  return (
    <section id="experience" className="section section-alt">
      <div className="section-inner">
        <h2 className="section-title">{exp.title}</h2>
        <div className="exp-list">

          <div className="exp-block">
            <h3 className="exp-heading">{exp.courses}</h3>
            <div className="courses-list">
              {exp.coursesList.map((c, i) => (
                <div key={i} className="course-card">
                  <p className="course-name">🏆 {c.name}</p>
                  <p className="course-issuer">{c.issuer}</p>
                  <p className="course-date">{c.date}</p>
                  {c.certificateUrl && (
                    <a href={c.certificateUrl} target="_blank" rel="noopener noreferrer" className="course-cert-btn">
                      {exp.viewCertificate}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="exp-block">
            <h3 className="exp-heading">{exp.councils.title}</h3>
            <PreLine text={exp.councils.text} />
          </div>

          <div className="exp-block">
            <h3 className="exp-heading">{exp.clubs.title}</h3>
            <PreLine text={exp.clubs.text} />
          </div>

          <div className="exp-block">
            <h3 className="exp-heading">{exp.hackathon.title}</h3>
            <PreLine text={exp.hackathon.text} />
          </div>

        </div>
      </div>
    </section>
  );
}
