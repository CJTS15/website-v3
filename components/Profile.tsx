'use client';

import React from 'react';
import { PROFILE_DATA } from '@/constants';
import Image from 'next/image';

const Profile: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center space-y-4">
      <div className="relative">
        <div className="absolute rounded-full blur opacity-50"></div>
        <Image
          src={PROFILE_DATA.avatar}
          alt={PROFILE_DATA.name}
          width={512}
          height={512}
          className="relative w-24 h-24 rounded-full border-2 border-white/10 object-cover shadow-2xl"
        />
      </div>
      
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{PROFILE_DATA.name}</h1>
        <p className="text-zinc-500 font-medium">{PROFILE_DATA.title}</p>
      </div>

      <p className="max-w-max text-zinc-500 text-md leading-relaxed font-light">
        {PROFILE_DATA.bio}
      </p>
    </section>
  );
};

export default Profile;
