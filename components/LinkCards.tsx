'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LINK_ITEMS } from '@/constants';
import { Theme } from '@/types';

interface LinkCardsProps {
  theme: Theme;
}

const LinkCards: React.FC<LinkCardsProps> = ({ theme }) => {
  return (
    <div className="w-full space-y-4">
      {LINK_ITEMS.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group block w-full p-5 rounded-xl border transition-all duration-300 hover:scale-[1.01] ${
            theme === 'dark'
              ? 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900'
              : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-lg shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-base flex items-center">
                  {item.label && (
                    <span className="mr-2 text-xs uppercase tracking-wider px-1.5 py-0.5 rounded border border-zinc-500/30 text-zinc-500 font-bold">
                      {item.label}
                    </span>
                  )}
                  {item.title}
                </span>
              </div>
              <p className={`text-sm pr-6 ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'}`}>
                {item.description}
              </p>
            </div>
            <div className={`p-2 rounded-lg transition-colors group-hover:translate-x-1 ${
              theme === 'dark' ? 'bg-zinc-800 text-zinc-400 group-hover:text-white' : 'bg-zinc-100 text-zinc-500 group-hover:text-black'
            }`}>
              <ArrowRight size={18} />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default LinkCards;
