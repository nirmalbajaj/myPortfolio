import React, { useState, useEffect } from 'react';
import GooeyNav from './components/Navbar';
import Background from './components/Background';
import ShinyText from './components/NavButton';
import StarBorder from './components/Button';
import ThemeToggle from './components/Theme';
import ProfileCard from './components/ProfileCard';
import FaGithub  from './assets/github-mark-white.png';
import FaLinkedin from './assets/InBug-White.png'
import logo from './assets/NB-removebg-preview.png';
import photo from './assets/photo.png'
import RotatingText from './components/RotatingText';
import resume from './assets/Resume.pdf';

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

  const handleContactClick = () => {
    // Scroll to contact section or handle contact action
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Nirmal_Bajaj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const rotatingTitles = [
    'Full Stack Developer',
    'Web Developer',
    'Software Developer',
    'Software Engineer',
    'Creative Coder'
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
      <div className="relative z-10 container mx-auto pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-6rem)] px-4">
          {/* Left side - Introduction */}
          <div className="flex flex-col justify-center space-y-10 max-w-2xl">
            <div className="space-y-6">
              <div className="text-amber-200 text-2xl font-semibold tracking-wide pb-2 font-space">
                Hey, I'm Nirmal Bajaj 👋
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 text-2xl font-light font-poppins">Call Me</span>
                  <span className="lg:text-5xl font-bold text-white leading-none bg-cyan-600 rounded-lg font-space max-w-full px-3 py-2 border-0">
                    <RotatingText
                      texts={rotatingTitles}
                      mainClassName="text-gray-300 overflow-hidden"
                      staggerFrom="last"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="text-amber-100 text-xl leading-relaxed font-light max-w-xxl font-poppins max-w-full">
              Passionate about creating innovative web solutions and bringing ideas to life through code. 
              I specialize in modern technologies and love building user-centric applications.
            </div>
            <div className="pt-4">
              <StarBorder
                as="button"
                speed="5s"
                className="font-space text-white font-semibold text-lg hover:scale-105 transition-all duration-300 ease-in-out"
                onClick={handleDownloadResume}
              >
                📄  Download Resume
              </StarBorder>
            </div>
          </div>
          
          {/* Right side - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <ProfileCard
              name="Nirmal Bajaj"
              title="Software Developer"
              handle="nirmalbajaj99"
              status="Online"
              contactText="Contact Me"
              avatarUrl={photo} 
              showUserInfo={true}
              enableTilt={true}
              onContactClick={handleContactClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}