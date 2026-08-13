'use client';

import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLang } from '../context/LangContext';

export default function Nav() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [open, setOpen] = useState(false);
  const { lang, t, toggle } = useLang();

  useEffect(() => {
    const saved = (localStorage.getItem('theme') ?? 'light') as 'light' | 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  return (
    <nav className="nav-bar" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#" className="nav-logo">Norah Aljulayfi</a>

        <ul className="nav-links" aria-label="Site sections">
          {t.nav.links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button onClick={toggle} aria-label="Toggle language" className="icon-btn" style={{ fontWeight: 600, fontSize: '0.85rem', minWidth: '2rem' }}>
            {t.nav.toggleLang}
          </button>
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="icon-btn">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-drawer">
          <ul>
            {t.nav.links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="drawer-link" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
