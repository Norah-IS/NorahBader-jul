export type ProjectCategory = 'University Project' | 'Personal' | 'Coursework' | 'Improved Personal';

export interface Project {
  title: string;
  category: ProjectCategory[];
  summary: string;
  problem: string;
  I_Worked_On?:string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  files?: string;
}

export const projects: Project[] = [
  {
    title: "ImamuTechVerse",
    category: ["University Project", "Improved Personal"],
    summary: "A bilingual (Arabic / English) RTL-first web platform for managing student extracurricular activities at Imam Muhammad ibn Saud Islamic University. Students discover and register for events, check in via QR scan with live GPS verification, and receive digital attendance certificates automatically.",
    problem: "Campus activity management relied on paper forms and manual spreadsheets, making it impossible to track attendance accurately, issue certificates at scale, or give organizers real-time visibility into participation across colleges.",
    stack: ['React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'Radix UI',
      'React Router v6',
      'html5-qrcode',
      'qrcode.react',
      'Sonner',
      'Lucide React',],
    liveUrl: "https://imamu-tech-verse.vercel.app/",
    githubUrl: "https://github.com/Norah-IS/ImamuTechVerse",
    files: "https://drive.google.com/file/d/1LMB2aaPZg_q-ZAbfnGv9s70_xFptKLPW/view?usp=sharing",
    I_Worked_On: "Developing the prototype, CRC Card, Activity Diagram, checking the other diagrams"
  },
  {
    title: 'Personal Portfolio',
    category: ['Personal'],
    summary: 'This portfolio website — designed and built from scratch to showcase my projects and skills.',
    problem: 'Needed a clean, fast, and maintainable way to present my work online.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://norah-badr-aljulayfi.vercel.app/',
    githubUrl: 'https://github.com/Norah-IS/NorahBader-jul',
  },
  {
    title: 'Hear Me ',
    category: ["University Project"],
    summary:'Requirement Engineering project for building a perfect requirement spesification document for System designed to improve communication for deaf users through',
    problem:     'People with hearing difficulties face challenges in daily communication, and existing solutions had limitations in language support and platform availability.',
    stack: [    'Requirements Analysis',
    'Use Case Diagram',
    'Stakeholder Analysis',
    'User Stories',
    'Draw.io',
    'Figma'],
    files: 'https://drive.google.com/file/d/1GfRLN2nhXwCrpWHVpypcpAXC69lh03KW/view?usp=sharing',
  },{
    title: 'Zid Market',
    category: ["University Project"],
    summary: 'A database-driven full-featured platform for enabling sellers to list products and buyers to discover and purchase from multiple vendors with secure payment processing.',
    problem: 'Course project demonstrating relational database design and SQL query optimization.',
    stack: ['Oracle SQL Developer', "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "sql",
      "Vitest"],
    liveUrl: 'https://zidmarket-pi.vercel.app/',
    githubUrl: 'https://github.com/Norah-IS/zidmarket',
    files: 'https://docs.google.com/document/d/19MDBo_QtNITehgmnqInqCZPLInr3AdFm/edit?usp=sharing&ouid=114161749570463908296&rtpof=true&sd=true'
  },
];
