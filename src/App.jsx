import React from 'react';
import { ExternalLink } from 'lucide-react';
import { socialLinks, profileData } from './socials';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="background-glow" />
      
      <header className="profile">
        <div className="avatar-container">
          <img src={profileData.avatar} alt={profileData.name} className="avatar" />
        </div>
        <h1 className="name">─── {profileData.name} ───</h1>
        <p className="role">{profileData.role}</p>
      </header>

      <main className="links-container">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-card"
              style={{ '--accent-color': link.color }}
            >
              <div className="link-content">
                <Icon size={22} className="icon" />
                <span className="link-title">{link.title}</span>
              </div>
              <ExternalLink size={16} className="arrow" />
            </a>
          );
        })}
      </main>

      <footer>
        <p>© {new Date().getFullYear()} - {profileData.name}</p>
      </footer>
    </div>
  );
}

export default App;