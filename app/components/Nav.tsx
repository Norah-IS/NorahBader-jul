'use client';

import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

export default function Nav() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [open, setOpen] = useState(false);

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
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
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
            {links.map(l => (
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
