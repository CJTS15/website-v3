
export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  label?: string; // e.g. "Course", "Newsletter"
}

export interface SocialLink {
  id: string;
  icon: string;
  url: string;
  label: string;
}

export type Theme = 'dark' | 'light';
