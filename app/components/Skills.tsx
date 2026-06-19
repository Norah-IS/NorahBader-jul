const groups: Record<string, string[]> = {
  Languages:  ['Python', 'Java', 'TypeScript','CSS','HTML'],
  Frameworks: ['React', 'Next.js'],
  Tools:      ['GitHub', 'VS Code','Figma','Draw.io','Vercle'],
  Databases:  ['Oracle SQL Developer'],
  Working_On: ['Ai Engineering','Django','Python Analaytics','Data Science','Machine Learning'],
};

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        {/* Replace these placeholders with your confirmed stack */}
        <div className="skills-grid">
          {Object.entries(groups).map(([group, items]) => (
            <div key={group} className="skill-group">
              <h3 className="skill-group-label">{group}</h3>
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
