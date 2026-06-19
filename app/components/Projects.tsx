import { ExternalLink, Github } from 'lucide-react';
import { projects } from './projects';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>

        {projects.length === 0 ? (
          <div className="empty-state" role="status">
            <p>Projects coming soon.</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map(p => (
              <article key={p.title} className="project-card">
                <span className={`card-badge card-badge--${p.category.toLowerCase().replace(' ', '-')}`}>
                  {p.category}
                </span>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-summary">{p.summary}</p>
                <p className="card-problem">
                  <span className="label">Problem: </span>{p.problem}
                </p>
                <ul className="stack-tags" aria-label="Tech stack">
                  {p.stack.map(t => <li key={t}>{t}</li>)}
                </ul>
                <div className="card-links">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="card-link">
                      <ExternalLink size={14} aria-hidden="true" /> Live
                    </a>
                  )}
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="card-link">
                      <Github size={14} aria-hidden="true" /> GitHub
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
