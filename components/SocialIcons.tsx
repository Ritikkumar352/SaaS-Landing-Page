import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export const SocialIcons: React.FC = () => (
  <div className="flex gap-4">
    <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-800 transition">
      <FaFacebookF size={22} />
    </a>
    <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-blue-600 transition">
      <FaTwitter size={22} />
    </a>
    <a href="#" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900 transition">
      <FaLinkedinIn size={22} />
    </a>
  </div>
); 