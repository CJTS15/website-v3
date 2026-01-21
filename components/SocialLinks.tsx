'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { Theme } from '../types';

interface SocialLinksProps {
  theme: Theme;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ theme }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {SOCIAL_LINKS.map((link) => {
        const Icon = (LucideIcons as any)[link.icon];
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-lg transition-all transform hover:-translate-y-1 ${
              theme === 'dark'
                ? 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                : 'bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-black hover:border-zinc-300 shadow-sm'
            }`}
            title={link.label}
          >
            {Icon && <Icon size={20} />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
