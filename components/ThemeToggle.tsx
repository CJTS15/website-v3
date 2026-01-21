'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-full transition-colors ${
        theme === 'dark' 
          ? 'bg-zinc-900 border border-zinc-800 hover:bg-zinc-800' 
          : 'bg-zinc-100 border border-zinc-200 hover:bg-zinc-200'
      }`}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={20} className="text-zinc-400" /> : <Moon size={20} className="text-zinc-600" />}
    </button>
  );
};

export default ThemeToggle;
