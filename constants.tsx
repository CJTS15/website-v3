
import { LinkItem, SocialLink } from './types';
import avatarPhoto from '@/public/images/cj-sabijon-profile.webp';

export const PROFILE_DATA = {
  name: "CJ Sabijon",
  title: "WordPress Developer | CMS Support Specialist",
  bio: "I am a highly motivated web developer specializing in WordPress, proficient in creating responsive and user-friendly websites. My expertise extends beyond web development, as I am skilled in market research and providing technical support.",
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
    description: 'Sharing insights on how we built our co-working space and study hub from scratch.',
    url: 'https://thetechwolfcave.wordpress.com/2025/10/20/project-dmd/',
    label: 'Blog'
  },
  {
    id: '3',
    title: 'Ricing My Mint',
    description: 'I wrote a blog post about how I customized my Linux Mint setup to improve productivity and aesthetics.',
    url: 'https://thetechwolfcave.wordpress.com/2025/05/15/ricing-my-mint/',
    label: 'Blog'
  },
  {
    id: '4',
    title: 'The TechWolf Cave YouTube',
    description: 'Subscribe to my YouTube channel for unboxing and gaming walkthoughs.',
    url: 'https://youtube.com/@techwolfcave',
    label: 'YouTube'
  },
  {
    id: '5',
    title: 'DMD: Co-Working Space Management System',
    description: 'A simple management system for our co-working space and study hub.',
    url: 'https://github.com/CJTS15/dmd-hub-management-system',
    label: 'Project'
  },
  {
    id: '6',
    title: 'Anikoji',
    description: 'A small curated anime/manga directory.',
    url: 'https://github.com/CJTS15/anikoji',
    label: 'Project'
  },
];
