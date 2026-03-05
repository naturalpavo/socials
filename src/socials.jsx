import React from 'react';
import { Youtube, Instagram, Github, Bird, Mail } from 'lucide-react';

const DiscordIcon = ({ size = 20, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.721 11.721 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.1 18.058a.082.082 0 0 0 .031.056 19.908 19.908 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.027 14.027 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.23 10.23 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.291a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.891.077.077 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
  </svg>
);

export const socialLinks = [
  { title: 'YouTube', url: 'https://youtube.com/@naturalpavo', icon: Youtube, color: '#FF0000' },
  { title: 'Instagram', url: 'https://instagram.com/naturalpavo', icon: Instagram, color: '#E1306C' },
  { title: 'Discord', url: 'https://discord.gg/naturalpavo', icon: DiscordIcon, color: '#5865F2' },
  { title: 'GitHub', url: 'https://github.com/naturalpavo', icon: Github, color: '#FFFFFF' },
  { title: 'Official Website', url: 'https://naturalpavo.au', icon: Bird, color: '#0A9396' },
  { title: 'Business Inquiries', url: 'mailto:business@naturalpavo.au', icon: Mail, color: '#0a6e96' },
];

export const profileData = {
  name: "Natural Pavo",
  role: "Artist / Naturalist",
  avatar: "https://github.com/naturalpavo.png",
};