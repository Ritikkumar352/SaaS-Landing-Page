import React from 'react';
import Head from 'next/head';
import { HeroSection } from '../components/HeroSection';
import { FeatureCard } from '../components/FeatureCard';
import { PricingCard } from '../components/PricingCard';
import { TestimonialItem } from '../components/TestimonialItem';
import { Accordion } from '../components/Accordion';
import { ContactForm } from '../components/ContactForm';
import { SocialIcons } from '../components/SocialIcons';
import { PricingCalculator } from '../components/PricingCalculator';
import { DemoVideo } from '../components/DemoVideo';
import { BlogSection } from '../components/BlogSection';
import { RocketLaunchIcon, ShieldCheckIcon, ChartBarIcon, DevicePhoneMobileIcon, Cog6ToothIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { FaUserCircle, FaUserTie, FaUserAlt } from 'react-icons/fa';

const features = [
  {
    icon: <RocketLaunchIcon className="w-10 h-10" />, title: 'AI-Powered Branding', description: 'Create stunning brand identities in seconds with our advanced AI algorithms.'
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10" />, title: 'Smart Analytics', description: 'Track brand performance with real-time AI insights and predictive analytics.'
  },
  {
    icon: <ChartBarIcon className="w-10 h-10" />, title: 'Market Intelligence', description: 'AI-driven market research to understand your audience and competitors.'
  },
  {
    icon: <DevicePhoneMobileIcon className="w-10 h-10" />, title: 'Multi-Platform Sync', description: 'Seamlessly manage your brand across all digital platforms.'
  },
  {
    icon: <Cog6ToothIcon className="w-10 h-10" />, title: 'Custom AI Models', description: 'Train AI models specific to your industry and brand requirements.'
  },
  {
    icon: <UserGroupIcon className="w-10 h-10" />, title: 'Team Collaboration', description: 'Built-in collaboration tools for your marketing team and stakeholders.'
  },
];

const pricing = [
  {
    title: 'Starter', price: '$29/mo', features: ['AI Brand Generator', 'Basic Analytics', 'Email Support'], featured: false
  },
  {
    title: 'Professional', price: '$79/mo', features: ['Advanced AI Models', 'Real-time Analytics', 'Priority Support'], featured: true
  },
  {
    title: 'Enterprise', price: 'Contact Us', features: ['Custom AI Training', 'Dedicated Support', 'White-label Options'], featured: false
  },
];

const testimonials = [
  {
    avatar: <FaUserCircle className="w-12 h-12 text-blue-400" />, name: 'Sarah Johnson', quote: 'ADmyBRAND AI transformed our marketing strategy completely!'
  },
  {
    avatar: <FaUserTie className="w-12 h-12 text-blue-600" />, name: 'Mike Chen', quote: 'The AI insights helped us increase brand awareness by 300%.'
  },
  {
    avatar: <FaUserAlt className="w-12 h-12 text-blue-800" />, name: 'Emma Davis', quote: 'Best AI-powered marketing tool we have ever used.'
  },
];

const faqs = [
  { question: 'How does the AI branding work?', answer: 'Our AI analyzes your industry, competitors, and target audience to generate unique brand identities that resonate with your market.' },
  { question: 'Can I customize the AI suggestions?', answer: 'Absolutely! You can train the AI with your preferences and manually adjust all generated content.' },
  { question: 'Is my brand data secure?', answer: 'We use enterprise-grade encryption and never share your brand data with third parties.' },
  { question: 'Do you offer API access?', answer: 'Yes, Enterprise plans include full API access for custom integrations.' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>ADmyBRAND AI Suite - AI-Powered Marketing & Branding Platform</title>
        <meta name="description" content="Transform your marketing with AI-powered branding, analytics, and market intelligence. Create stunning brand identities in seconds." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="ADmyBRAND AI Suite - AI-Powered Marketing & Branding Platform" />
        <meta property="og:description" content="Transform your marketing with AI-powered branding, analytics, and market intelligence. Create stunning brand identities in seconds." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-deployment-url.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ADmyBRAND AI Suite - AI-Powered Marketing & Branding Platform" />
        <meta name="twitter:description" content="Transform your marketing with AI-powered branding, analytics, and market intelligence. Create stunning brand identities in seconds." />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      <main className="bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen flex flex-col">
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-white/60 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI-Powered Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section id="demo" className="py-20">
          <div className="container mx-auto px-4">
            <DemoVideo />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white/60 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your AI Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {pricing.map((p, i) => (
                <PricingCard key={i} title={p.title} price={p.price} features={p.features} featured={p.featured} />
              ))}
            </div>
            
            {/* Interactive Pricing Calculator */}
            <div className="max-w-2xl mx-auto">
              <PricingCalculator />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {testimonials.map((t, i) => (
                <TestimonialItem key={i} avatar={t.avatar} name={t.name} quote={t.quote} />
              ))}
            </div>
          </div>
        </section>

        {/* Blog/Resources Section */}
        <BlogSection />

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white/60 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto">
              {faqs.map((f, i) => (
                <Accordion key={i} question={f.question} answer={f.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get Started Today</h2>
            <div className="max-w-lg mx-auto bg-white/80 rounded-2xl shadow-lg p-8">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-8 bg-white/80 shadow-inner mt-auto">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <SocialIcons />
            <div className="text-gray-600">&copy; {new Date().getFullYear()} ADmyBRAND AI Suite. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#features" className="text-blue-600 hover:underline">Features</a>
              <a href="#pricing" className="text-blue-600 hover:underline">Pricing</a>
              <a href="#contact" className="text-blue-600 hover:underline">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
