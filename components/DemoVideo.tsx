import React, { useState } from 'react';
import { Button } from './Button';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

interface DemoVideoProps {
  videoUrl?: string;
  thumbnailUrl?: string;
}

export const DemoVideo: React.FC<DemoVideoProps> = ({ 
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", 
  thumbnailUrl = "/demo-thumbnail.png" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white/80 rounded-2xl shadow-lg p-8 backdrop-blur-md">
      <h3 className="text-2xl font-bold mb-6 text-center">Watch ADmyBRAND AI Suite in Action</h3>
      
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
        {isPlaying ? (
          <iframe
            src={`${videoUrl}?autoplay=1`}
            title="ADmyBRAND AI Suite Demo"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full">
            <img
              src={thumbnailUrl}
              alt="ADmyBRAND AI Suite Demo Video Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 transition-all hover:scale-110"
              >
                <PlayIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-4">
          See how ADmyBRAND AI Suite transforms your marketing workflow with AI-powered branding and analytics.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" size="md">
            Start Free Trial
          </Button>
          <Button variant="glass" size="md">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  );
}; 