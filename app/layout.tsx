// @ts-ignore: allow side-effect CSS import when type declarations are missing
import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import { LangProvider } from './context/LangContext';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const playfair  = Playfair_Display({ variable: '--font-display', subsets: ['latin'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title:       'Norah Bader Aljulayfi',
  description: 'Computer Information Systems student. Explore my projects, skills, and experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);var l=localStorage.getItem('lang');if(l==='ar'){document.documentElement.lang='ar';document.documentElement.dir='rtl';}})();`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
        <LangProvider>{children}</LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
