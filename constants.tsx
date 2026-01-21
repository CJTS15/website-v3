
import { LinkItem, SocialLink } from './types';
import avatarPhoto from '@/public/images/cj-sabijon-profile.webp';

export const PROFILE_DATA = {
  name: "CJ Sabijon",
  title: "WordPress Developer | CMS Support Specialist",
  bio: "Passionate about crafting seamless digital experiences through WordPress development and CMS support. Dedicated to helping businesses thrive online with tailored solutions and expert guidance. Let's build something amazing together!",
  avatar: avatarPhoto,
};

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'website', icon: 'Globe', url: 'https://cjsabijon.vercel.app/', label: 'Website' },
  { id: 'linkedin', icon: 'Linkedin', url: 'https://www.linkedin.com/in/cjsabijon/', label: 'LinkedIn' },
  { id: 'wordpress', icon: 'Rss', url: 'https://thetechwolfcave.wordpress.com/', label: 'WordPress' },
  { id: 'github', icon: 'Github', url: 'https://github.com/CJTS15', label: 'GitHub' },
  { id: 'youtube', icon: 'Youtube', url: 'https://youtube.com/@techwolfcave', label: 'YouTube' },
  { id: 'mail', icon: 'Mail', url: 'mailto:cjtsabijon@gmail.com', label: 'Mail' },
];

export const LINK_ITEMS: LinkItem[] = [
  {
    id: '1',
    title: 'Google Developers Group Community Volunteer',
    description: 'GDG Cagayan de Oro is a group of developers that foster the learning of Google’s developer technologies. Since 2013, we organize free events for students and professionals that tackle the latest Google technologies and how they can integrate them into their day-to-day projects.',
    url: 'https://gdg.community.dev/gdg-cagayan-de-oro/',
  },
  {
    id: '2',
    title: 'Project: DMD',
    description: 'Sharing insights on how we built our co-working space and study hub from scratch. Planning and designing the space, selecting furniture and equipment, and creating a productive environment for clients.',
    url: 'https://thetechwolfcave.wordpress.com/2025/10/20/project-dmd/',
    label: 'Blog'
  },
  {
    id: '3',
    title: 'Ricing My Mint',
    description: 'I wrote a blog post about how I customized my Linux Mint setup to improve productivity and aesthetics. I shared my favorite themes, icons, and extensions that transformed my desktop environment.',
    url: 'https://thetechwolfcave.wordpress.com/2025/05/15/ricing-my-mint/',
    label: 'Blog'
  },
  {
    id: '4',
    title: 'The TechWolf Cave YouTube',
    description: 'Subscribe to my YouTube channel for unboxing and gaming walkthroughs. Join me as I explore the latest tech gadgets and share my gaming experiences.',
    url: 'https://youtube.com/@techwolfcave',
    label: 'YouTube'
  },
  {
    id: '5',
    title: 'DMD: Co-Working Space Management System',
    description: 'A simple management system for our co-working space and study hub. Built with NextJS, TailwindCSS, Shadcn and Supabase for seamless booking and user management.',
    url: 'https://github.com/CJTS15/dmd-hub-management-system',
    label: 'Project'
  },
  {
    id: '6',
    title: 'Anikoji',
    description: 'A small curated anime/manga directory. Built with NextJS, TailwindCSS, and Shadcn for a sleek and user-friendly experience. I am using APIs from AniList and Jikan to fetch anime/manga data.',
    url: 'https://github.com/CJTS15/anikoji',
    label: 'Project'
  },
];
