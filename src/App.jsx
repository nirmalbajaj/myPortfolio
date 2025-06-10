import React, { useState, useEffect } from 'react';
import GooeyNav from './components/Navbar';
import Background from './components/Background';
import ShinyText from './components/NavButton';
import StarBorder from './components/Button';
import ThemeToggle from './components/Theme';
import FaGithub  from './assets/github-mark-white.png';
import FaLinkedin from './assets/InBug-White.png'
import logo from './assets/NB-removebg-preview.png';

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }));

  // Initialize dark mode from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply theme to document and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#project" },
    { label: "Skills", href: "#skill" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <Background />
      <div className="fixed left-0 w-full z-50 flex items-center justify-between px-8">
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Portfolio Logo"
            className="h-36 w-auto object-contain"
          />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <GooeyNav
            items={navigationItems}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
        <div className="flex-shrink-0 flex items-center gap-4">
          <StarBorder
            as="a"
            href="https://github.com/nirmalbajaj"
            target="_blank"
            rel="noopener noreferrer"
            speed="5s"
          >
            <img src={FaGithub} alt="GitHub" className="w-6 h-6" />
          </StarBorder>
          <StarBorder
            as="a"
            href="https://www.linkedin.com/in/nirmal-bajaj/"
            target="_blank"
            rel="noopener noreferrer"
            speed="5s"
          >
            <img src={FaLinkedin} alt="LinkedIn" className="w-6 h-6" />
          </StarBorder>
          <ThemeToggle isDark={isDarkMode} onToggle={toggleTheme} />
          <ShinyText 
            text={currentTime}
            disabled={false} 
            speed={3} 
            className='custom-class' 
          />
        </div>
      </div>
      <div className="relative z-</div>10 container mx-auto pt-24">
      </div>
    </div>
  );
}