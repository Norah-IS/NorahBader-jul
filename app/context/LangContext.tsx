'use client';
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Lang = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      links: [
        { label: 'About',      href: '#about'      },
        { label: 'Skills',     href: '#skills'     },
        { label: 'Projects',   href: '#projects'   },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact',    href: '#contact'    },
      ],
      toggleLang: 'ع',
    },
    hero: {
      eyebrow: "Hello, I'm",
      name: 'Norah Bader Aljulayfi',
      role: 'Computer Information Systems Student | Interested in Software Engineering & AI',
      downloadCV: 'Download CV',
    },
    about: {
      title: 'About',
      text: "I'm Norah Aljulayfi, a Computer Information Systems student with a foundation in programming, databases, and web development. I'm especially drawn to AI engineering, and I enjoy the challenge of turning data into something that actually works",
    },
    skills: {
      title: 'Skills',
      groups: {
        Languages:  'Languages',
        Frameworks: 'Frameworks',
        Tools:      'Tools',
        Working_On: 'Working On',
      },
    },
    projects: {
      title: 'Projects',
      empty: 'Projects coming soon.',
      problem:  'Problem:',
      workedOn: 'I Worked On:',
      live:     'Live',
      report:   'Report',
    },
    experience: {
      title: 'Experience & Education',
      courses: 'Courses',
      viewCertificate: 'View Certificate',
      coursesList: [
        { name: 'Principles of Artificial Intelligence', issuer: 'SADAIA', date: 'SEP 2025', certificateUrl: '' },
        { name: 'VEX V5 & EXP Robotics', issuer: 'Imam Mohammad Ibn Saud Islamic University', date: 'MAY 2025', certificateUrl: '' },
      ],
      councils: {
        title: 'University Councils',
        text: 'Information Systems Department – Student Advisory Council\nImam Mohammad Ibn Saud Islamic University\n\nFirst: DevCounce\nStarted in DevCounc committee as a member and later served as the committee lead. The role involved coordination, task distribution, and contributing to the development of student-focused and council technical activities.\n\nSecond: Activity committee\nMember of the Student Activities Committee, later took on the role of Committee Lead, and then returned as a member while transitioning to a leadership role in another committee. Contributed to planning and organizing student activities and departmental initiatives, supporting engagement within the Information Systems department.\n\nCollege Student – Imam Mohammad Ibn Saud Islamic University\nMember of the Activities & Planning Committee\nParticipated in organizing and supporting college-level events and initiatives aimed at improving student engagement and experience.',
      },
      clubs: {
        title: 'University Clubs',
        text: 'RobotX Club – Imam Mohammad Ibn Saud Islamic University\nJoined the CodeFusion committee as a member for over a year, contributing to club technical activities. Later served as Media Lead for two months, where responsibilities included managing communication content and supporting the club\'s outreach and visibility.\n\nInnovation & Entrepreneurship Club – Imam Mohammad Ibn Saud Islamic University\nMember for ten months, participating in innovation-focused activities and entrepreneurship-related events. The experience helped strengthen creative thinking, teamwork, and exposure to startup and innovation environments.',
      },
      hackathon: {
        title: 'Hackathon Finalist',
        text: 'Imam Mohammad Ibn Saud Islamic University\nJune 2026 – Present\n\nParticipated in a university hackathon focused on building innovative solutions to enhance student engagement within campus environments.\n\n- Developed ImamuTechVerse, a digital platform aimed at improving interaction and engagement in university life\n- Collaborated with a multidisciplinary team to design, develop, and present the solution\n- Delivered the final project presentation and successfully qualified for the final stage\n\nGained hands-on experience in teamwork (Green IT), problem-solving, and rapid prototyping under pressure',
      },
    },
    contact: {
      title: 'Contact',
      intro: 'Open to opportunities, collaborations, and conversations.',
    },
    footer: {
      copy: '© 2026 Norah Aljulayfi',
    },
  },

  ar: {
    nav: {
      links: [
        { label: 'نبذة عني', href: '#about'      },
        { label: 'المهارات', href: '#skills'     },
        { label: 'المشاريع', href: '#projects'   },
        { label: 'الخبرات',  href: '#experience' },
        { label: 'التواصل',  href: '#contact'    },
      ],
      toggleLang: 'EN',
    },
    hero: {
      eyebrow: 'مرحباً، معكم',
      name: 'نورة بدر الجليفي',
      role: 'طالبة نظم معلومات حاسوبية | مهتمة بهندسة البرمجيات والذكاء الاصطناعي',
      downloadCV: 'تحميل السيرة الذاتية',
    },
    about: {
      title: 'نبذة عني',
      text: '  طالبة نظم معلومات حاسوبية لدي أساس في البرمجة وقواعد البيانات وتطوير الويب. اهتمامي يكمن في هندسة الذكاء الاصطناعي، وأستمتع بتحدي تحويل البيانات إلى شيء يعمل فعلاً.',
    },
    skills: {
      title: 'المهارات',
      groups: {
        Languages:  'لغات البرمجة',
        Frameworks: 'اطارات العمل',
        Tools:      'الأدوات',
        Working_On: 'أعمل على',
      },
    },
    projects: {
      title: 'المشاريع',
      empty: 'المشاريع قادمة قريباً.',
      problem:  'المشكلة:',
      workedOn: 'ما عملت عليه:',
      live:     'عرض مباشر',
      report:   'التقرير',
    },
    experience: {
      title: 'الخبرات ',
      courses: 'الدورات',
      viewCertificate: 'عرض الشهادة',
      coursesList: [
        { name: 'مبادئ الذكاء الاصطناعي', issuer: 'سدايا', date: 'سبتمبر 2025', certificateUrl: '' },
        { name: 'روبوتيكس VEX V5 & EXP', issuer: 'جامعة الإمام محمد بن سعود الإسلامية', date: 'مايو 2025', certificateUrl: '' },
      ],
      councils: {
        title: 'مجالس الجامعة',
        text: 'قسم نظم المعلومات – مجلس الطلاب الاستشاري\nجامعة الإمام محمد بن سعود الإسلامية\n\nأولاً: DevCounce\nبدأت في لجنة DevCounc عضواً ثم ترقيت إلى قائدة اللجنة. تضمّن الدور التنسيق وتوزيع المهام والمساهمة في تطوير الأنشطة التقنية الموجهة للطلاب.\n\nثانياً: لجنة الأنشطة\nعضو في لجنة أنشطة الطلاب، ثم قائدة اللجنة، ثم عدت كعضو خلال الانتقال إلى دور قيادي في لجنة DevCounc. ساهمت في تخطيط وتنظيم أنشطة الطلاب والمبادرات الإدارية.\n\n مجلس كلية علوم الحاسب والمعلومات \nعضو في لجنة الأنشطة والتخطيط\nشاركت في تنظيم ودعم الفعاليات على مستوى الكلية لتحسين تجربة الطلاب.',
      },
      clubs: {
        title: 'الأندية الجامعية',
        text: 'نادي RobotX – جامعة الإمام محمد بن سعود الإسلامية\nانضممت إلى لجنة CodeFusion عضواً لأكثر من عام، وساهمت في الأنشطة التقنية للنادي. ثم شغلت منصب قائدة الإعلام لمدة شهرين.\n\nنادي الابتكار وريادة الأعمال – جامعة الإمام محمد بن سعود الإسلامية\nعضو لمدة عشرة أشهر، شاركت في أنشطة الابتكار والأحداث المرتبطة بريادة الأعمال. ساعدت التجربة على تعزيز التفكير الإبداعي والعمل الجماعي.',
      },
      hackathon: {
        title: ' هاكاثون',
        text: 'جامعة الإمام محمد بن سعود الإسلامية\nيونيو 2026 – الحاضر\n\nشاركت في هاكاثون جامعي يركز على بناء حلول مبتكرة لتعزيز تفاعل الطلاب في البيئة الجامعية.\n\n- طوّرت ImamuTechVerse، منصة رقمية تهدف إلى تحسين التفاعل والمشاركة في الحياة الجامعية\n- تعاونت مع فريق متعدد التخصصات لتصميم الحل وتطويره وتقديمه\n- قدّمت عرض المشروع النهائي وتأهلت بنجاح للمرحلة النهائية\n\nاكتسبت خبرة عملية في العمل الجماعي وحل المشكلات والنمذجة السريعة تحت الضغط',
      },
    },
    contact: {
      title: 'التواصل',
      intro: 'متاحة للفرص والتعاون .',
    },
    footer: {
      copy: '© 2026 نورة الجليفي',
    },
  },
};

type Translations = typeof translations.en;

interface LangContextType {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  t: translations.en,
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'ar' || saved === 'en') setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }, [lang]);

  function toggle() {
    setLang(l => (l === 'en' ? 'ar' : 'en'));
  }

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
