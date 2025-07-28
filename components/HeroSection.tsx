import React from 'react';
import { Button } from './Button';
import Image from 'next/image';

export const HeroSection: React.FC = () => (
  <section id="hero" className="py-20 flex flex-col items-center justify-center text-center">
    <div className="mb-8">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ADmyBRAND AI Suite</h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-6">Transform your marketing with AI-powered branding, analytics, and market intelligence. Create stunning brand identities in seconds.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="primary">Start Free Trial</Button>
        <Button size="lg" variant="glass">Watch Demo</Button>
      </div>
    </div>
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-3xl bg-white/60 shadow-xl h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-ai-dashboard.png"
          alt="ADmyBRAND AI Suite Dashboard - AI-powered marketing and branding platform"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  </section>
); 