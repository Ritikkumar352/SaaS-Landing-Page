import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="rounded-2xl bg-white/80 shadow-lg p-6 flex flex-col items-center backdrop-blur-md">
    <div className="mb-4 text-blue-600 text-4xl">
      {icon || (
        <Image src="/ai-icon.png" alt="AI Feature" width={40} height={40} />
      )}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
); 