'use client';

import { useLang } from '../context/LangContext';

const groups: Record<string, string[]> = {
  Languages:  ['Python', 'Java', 'TypeScript', 'CSS', 'HTML', 'SQL'],
  Frameworks: ['React', 'Next.js'],
  Tools:      ['GitHub', 'VS Code', 'Figma', 'Draw.io', 'Vercel', 'Loveable', 'Oracle SQL Developer'],
  Working_On: ['AI Engineering', 'Django', 'Python Analytics', 'Data Science', 'Machine Learning'],
};

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="skills-grid">
          {Object.entries(groups).map(([group, items]) => (
            <div key={group} className="skill-group">
              <h3 className="skill-group-label">
                {t.skills.groups[group as keyof typeof t.skills.groups] ?? group}
              </h3>
              <ul className="skill-tags">
                {items.map(s => <li key={s} className="skill-tag">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
