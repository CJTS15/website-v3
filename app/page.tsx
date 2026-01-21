'use client';

import React, { useState, useEffect } from 'react';
import { Theme } from '@/types';
import ThemeToggle from '@/components/ThemeToggle';
import Profile from '@/components/Profile';
import SocialLinks from '@/components/SocialLinks';
import LinkCards from '@/components/LinkCards';
import Footer from '@/components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  if (!isMounted) return null;

  return (
    <div className={`min-h-screen flex flex-col items-center justify-start p-6 sm:p-12 ${theme === 'dark' ? 'dark text-white' : 'light text-black'}`}>
      {/* Header with Theme Toggle */}
      <header className="w-full max-w-xl flex justify-end mb-8">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      <main className="w-full max-w-2xl flex flex-col items-center space-y-12">
        <Profile />
        <SocialLinks theme={theme} />
        <LinkCards theme={theme} />
      </main>

      <Footer />
    </div>
  );
};

export default App;