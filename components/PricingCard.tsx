import React from 'react';
import { Button } from './Button';
import Image from 'next/image';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, featured, onClick, icon }) => (
  <div className={`rounded-2xl bg-white/80 shadow-lg p-8 flex flex-col items-center backdrop-blur-md border ${featured ? 'border-blue-500 scale-105' : 'border-transparent'}`}>
    <div className="mb-4 text-blue-600 text-4xl">
      {icon || <Image src="/ai-icon.png" alt="AI Pricing" width={40} height={40} />}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <div className="text-4xl font-extrabold mb-4">{price}</div>
    <ul className="mb-6 text-gray-600">
      {features.map((f, i) => <li key={i}>{f}</li>)}
    </ul>
    <Button variant={featured ? 'primary' : 'secondary'} size="md" onClick={onClick}>Choose</Button>
  </div>
); 