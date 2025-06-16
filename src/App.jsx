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
import StackGallery from './components/StackGallery';
import Experience from './components/Experience'; // Import Experience 
import BlurText from './components/BlurText';
import Folder from './components/Folder';
import Loader from './components/Loader';
import SquishyCard from './components/SquishyCard';
import ChromaGrid from './components/ChromeGrid'; // Import ChromaGrid
import LikeButton from './components/LikeButton';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Add loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Time state
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }));

  // Theme state and effects
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

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

  // Clock effect
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

  // Update scroll tracking logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const index = navigationItems.findIndex(item => item.href === `#${sectionId}`);
          if (index !== -1) {
            const navItemEl = document.querySelector(`[href="#${sectionId}"]`);
            if (navItemEl) {
              const liEl = navItemEl.closest('li');
              if (liEl) {
                const event = { currentTarget: liEl };
                handleClick(event, index);
              }
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update handleNavClick to be more reliable
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigationItems = [
    { label: "Home", href: "#home", onClick: (e) => handleNavClick(e, '#home') },
    { label: "Skills", href: "#skill", onClick: (e) => handleNavClick(e, '#skill') },
    { label: "Experience", href: "#experience", onClick: (e) => handleNavClick(e, '#experience') },
    { label: "Projects", href: "#projects", onClick: (e) => handleNavClick(e, '#projects') }
  ];

  const rotatingTitles = [
    'Full Stack Developer',
    'Software Developer',
    'Software Engineer',
    'Creative Coder',
    'Problem Solver'
  ];

  // Project data for ChromaGrid
  const projectItems = [
    {
      image: "https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "StaySphere",
      subtitle: "Hotel Booking Platform",
      handle: "Full Stack",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #000)",
      url: "https://github.com/nirmalbajaj/staySphere"
    },
    {
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "BlogApp API",
      subtitle: "REST API for Blogging",
      handle: "Backend",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
      url: "https://github.com/nirmalbajaj/blogApp-api"
    },
    {
      image: "https://images.pexels.com/photos/32487828/pexels-photo-32487828/free-photo-of-commuter-train-passing-through-scenic-rail-tracks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Railway Project",
      subtitle: "Railway Management System",
      handle: "Full Stack",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "https://github.com/nirmalbajaj/RailwayProject"
    },
    {
      image: "https://images.pexels.com/photos/6127060/pexels-photo-6127060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Snake Game",
      subtitle: "Classic Snake Game",
      handle: "Full Stack",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "https://github.com/nirmalbajaj/Snake_Game_python"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop&crop=faces",
      title: "Consulting Pro",
      subtitle: "Business Website",
      handle: "Frontend",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "https://github.com/nirmalbajaj/ConsultingProWebsite"
    },
    {
      image: "https://media.istockphoto.com/id/1426988809/photo/security-password-login-online-concept-hands-typing-and-entering-username-and-password-of.jpg?b=1&s=612x612&w=0&k=20&c=GRrxNacgwlGcYl_w9Rs9oetyZVFRsrIjL9CAhNHL11o=",
      title: "Animated Login",
      subtitle: "Interactive Login Page",
      handle: "Frontend",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "https://github.com/nirmalbajaj/Animated_LoginPage"
    }
  ];

  // Event handlers
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '../public/Resume.pdf';
    link.download = 'Nirmal_Bajaj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-h-screen w-full relative overflow-hidden">
          <Background />
          
          {/* Navbar */}
          <div className="fixed left-0 w-full z-50 flex items-center justify-between px-8">
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="Portfolio Logo"
                className="h-28 w-auto object-contain cursor-pointer"
                onClick={() => window.location.reload()}
              />
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 lg:text-sm">
              <GooeyNav
                items={navigationItems}
                particleCount={15}
                particleDistances={[90, 10]}
                particleRadius={100}
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
                <img src={FaGithub} alt="GitHub" className="w-5 h-5" />
              </StarBorder>
              <StarBorder
                as="a"
                href="https://www.linkedin.com/in/nirmal-bajaj/"
                target="_blank"
                rel="noopener noreferrer"
                speed="5s"
              >
                <img src={FaLinkedin} alt="LinkedIn" className="w-5 h-5" />
              </StarBorder>
              <ThemeToggle isDark={isDarkMode} onToggle={toggleTheme} />
              <ShinyText
                isDark={isDarkMode}
                text={currentTime}
                disabled={false}
                speed={3}
                className='custom-class text-sm'
              />
            </div>
          </div>

          {/* Hero Section */}
          <div id="home" className="relative z-10 container mx-auto pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-6rem)] ">
              {/* Left side - Introduction */}
              <div className="flex flex-col justify-center space-y-10 max-w-4xl">
                <div className="space-y-6">
                  <div className="text-amber-200 text-2xl font-semibold tracking-wide pb-2 font-space">
                    Hey, I'm Nirmal Bajaj 👋
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 ">
                      <span className="text-gray-400 text-xl font-light font-poppins">Call Me</span>
                      <span className="lg:text-4xl font-bold text-white leading-none bg-cyan-600 rounded-lg font-space max-w-full px-3 py-2">
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
                <div className="text-amber-100 text-xl leading-relaxed  max-w-xxl font-poppins ">
                  Passionate about creating innovative solutions and bringing ideas to code with
                  specialization in modern technologies.
                </div>
                <div className="pt-6">
                  <StarBorder
                    as="button"
                    speed="5s"
                    className="font-space text-white font-semibold lg:text-sm hover:scale-105 transition-all duration-300 ease-in-out"
                    onClick={handleDownloadResume}
                  >
                    <div className='flex items-center w-xl' style={{ height: '30px' }}>
                      <Folder size={0.3} color="#5227FF" className="custom-folder" />
                      <span className='lg:-translate-x-3'>Download Resume</span>
                    </div>
                  </StarBorder>
                </div>
              </div>
              {/* Right side - Profile Card */}
              <div className="flex justify-center lg:justify-end lg:-translate-x-3">
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

          {/* Tech Stack Section */}
          <div id="skill" className="relative min-h-screen bg-white dark:bg-gray-900 py-20">
            <div className="container mx-auto px-4">
              <div className="flex justify-center mb-16">
                <BlurText
                  text="Stacks My Brain Has Scaled 🚀💻"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="font-bold text-gray-800 dark:text-amber-200 font-space text-3xl"
                />
              </div>
              <div style={{ height: '600px', position: 'relative' }}>
                <StackGallery 
                  bend={3} 
                  textColor={isDarkMode ? "#ffffff" : "#000000"} 
                  borderRadius={0.10} 
                />
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div id="experience" className="relative min-h-screen bg-gradient-to-br from-amber-500/20 to-amber-700/20 dark:from-amber-900/30 dark:to-amber-800/30 py-20">
            <div className="container mx-auto px-4">
              <div className="flex justify-center mb-16">
                <BlurText
                  text="Skills Proven in Real-World Tech Triumphs 📊⚙️"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-3xl font-bold text-white dark:text-amber-200 font-space"
                />
              </div>
              <Experience />
            </div>
          </div>

          {/* Education Section */}
          <div className="relative min-h-screen bg-white dark:bg-gray-900 py-20">
            <div className="container mx-auto px-4">
              <div className="flex justify-center mb-16">
                <BlurText
                  text="Educational Journey 🎓📚"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-3xl font-bold text-gray-800 dark:text-amber-200 font-space"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <SquishyCard
                  degree="MSc in Information Technology"
                  institution="MSU, Baroda"
                  year="2022 - 2024"
                  gpa="7/10"
                />
                <SquishyCard
                  degree="BSc in Information Technology"
                  institution="Charusat University"
                  year="2019 - 2022"
                  gpa="8.5/10"
                />
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div id="projects" className="relative min-h-screen bg-gradient-to-br from-amber-500/20 to-amber-700/20 dark:from-amber-900/30 dark:to-amber-800/30 py-12">
            <div className="container mx-auto px-2">
              <div className="flex justify-center mb-10">
                <BlurText
                  text="Projects That Showcase My Coding Journey 🚀💼"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-3xl font-bold text-white dark:text-amber-200 font-space"
                />
              </div>
              <ChromaGrid 
                items={projectItems}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
                className="py-4"
              />
            </div>
          </div>

          {/* Footer Section */}
          <footer className="relative bg-gradient-to-t from-gray-900 to-transparent dark:from-black dark:to-transparent py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center justify-center space-y-6">
                <LikeButton />
                <div className="text-center">
                  <p className="text-amber-200 text-sm font-space">
                    Designed & Built by Nirmal Bajaj
                  </p>
                  <p className="text-gray-400 text-xs mt-2 font-poppins">
                    © {new Date().getFullYear()} All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </footer>

        </div>
      )}
    </>
  );
}