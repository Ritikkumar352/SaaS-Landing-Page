import React from 'react';
import { Button } from './Button';
import { CalendarIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How AI is Revolutionizing Brand Identity Design',
    excerpt: 'Discover how artificial intelligence is transforming the way brands create and manage their visual identities.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'AI & Design',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: '10 Marketing Trends to Watch in 2025',
    excerpt: 'Stay ahead of the curve with these emerging marketing trends that will dominate the industry this year.',
    author: 'Mike Chen',
    date: '2024-01-10',
    category: 'Marketing',
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'Building Customer Trust Through AI-Powered Analytics',
    excerpt: 'Learn how to leverage AI analytics to build stronger relationships with your customers.',
    author: 'Emma Davis',
    date: '2024-01-05',
    category: 'Analytics',
    readTime: '6 min read'
  }
];

export const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-white/60 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Insights & Resources</h2>
          <p className="text-xl text-gray-600">Stay updated with the latest in AI marketing and branding</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white/80 rounded-2xl shadow-lg overflow-hidden backdrop-blur-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">{post.title.charAt(0)}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <UserIcon className="w-4 h-4" />
                    {post.author}
                  </div>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <Button 
                  variant="glass" 
                  size="sm" 
                  className="w-full mt-4 flex items-center justify-center gap-2"
                >
                  Read More
                  <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="primary" size="lg">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}; 