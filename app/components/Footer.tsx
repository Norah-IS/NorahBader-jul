'use client';

import { useLang } from '../context/LangContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <p>{t.footer.copy}</p>
    </footer>
  );
}
