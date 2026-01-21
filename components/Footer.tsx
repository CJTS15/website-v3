'use client';

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-20 pb-12 w-full text-center space-y-2">
      <div className="text-sm font-medium text-zinc-500 uppercase flex items-center justify-center space-x-2">
        <span>Built with ❤️</span>
        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
        <span>Made by CJ Sabijon</span>
        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
        <span>&copy; {currentYear}</span>
      </div>
    </footer>
  );
};

export default Footer;
