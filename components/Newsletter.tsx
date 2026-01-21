'use client';

import React, { useState } from 'react';
import { Theme } from '../types';
import { Send } from 'lucide-react';

interface NewsletterProps {
  theme: Theme;
}

const Newsletter: React.FC<NewsletterProps> = ({ theme }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <section className={`w-full p-8 rounded-2xl border transition-all ${
      theme === 'dark'
        ? 'bg-zinc-900/40 border-zinc-800'
        : 'bg-zinc-50 border-zinc-200 shadow-inner'
    }`}>
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold">Subscribe to my newsletter</h2>
          <p className="text-sm text-zinc-500">Get notified about new content and updates.</p>
        </div>

        <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-2 mt-4">
          <div className="relative flex-grow">
             <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === 'loading'}
              className={`w-full px-4 py-3 rounded-lg text-sm outline-none border transition-all ${
                theme === 'dark'
                  ? 'bg-zinc-950 border-zinc-800 focus:border-blue-500 text-white'
                  : 'bg-white border-zinc-300 focus:border-blue-500 text-black'
              }`}
              required
            />
            {status === 'success' && (
               <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 animate-pulse text-xs font-medium">
                  Subscribed!
               </div>
            )}
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all flex items-center justify-center space-x-2 ${
              theme === 'dark'
                ? 'bg-white text-black hover:bg-zinc-200'
                : 'bg-black text-white hover:bg-zinc-800'
            } disabled:opacity-50`}
          >
            {status === 'loading' ? (
              <div className="w-5 h-5 border-2 border-zinc-500 border-t-zinc-200 rounded-full animate-spin"></div>
            ) : (
              <>
                <span>Subscribe</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
