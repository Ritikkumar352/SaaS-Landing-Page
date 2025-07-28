import React from 'react';
import Image from 'next/image';

interface TestimonialItemProps {
  avatar?: React.ReactNode;
  name: string;
  quote: string;
}

export const TestimonialItem: React.FC<TestimonialItemProps> = ({ avatar, name, quote }) => (
  <div className="rounded-2xl bg-white/80 shadow-lg p-6 flex flex-col items-center max-w-xs backdrop-blur-md">
    <div className="w-16 h-16 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
      {avatar || <Image src="/user-avatar.png" alt="User Avatar" width={48} height={48} className="rounded-full" />}
    </div>
    <p className="italic text-gray-700 mb-2">"{quote}"</p>
    <span className="font-semibold">{name}</span>
  </div>
); 