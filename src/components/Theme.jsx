import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDark = false, onToggle = () => {} }) => {
  return (
    <button
      onClick={onToggle}
      className={`
        relative inline-flex items-center justify-center
        w-12 h-12 rounded-full
        transition-all duration-300 ease-in-out
        hover:scale-110 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isDark 
          ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400 focus:ring-yellow-400/50' 
          : 'bg-blue-100 hover:bg-blue-200 text-blue-600 focus:ring-blue-400/50'
        }
        shadow-lg hover:shadow-xl
        group overflow-hidden
      `}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Background glow effect */}
      <div className={`
        absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        ${isDark 
          ? 'bg-gradient-radial from-yellow-400/20 to-transparent' 
          : 'bg-gradient-radial from-blue-400/20 to-transparent'
        }
      `} />
      
      {/* Icon container */}
      <div className="relative z-10 flex items-center justify-center">
        {isDark ? (
          <Moon 
            size={20} 
            className="transform transition-all duration-300 group-hover:rotate-12" 
          />
        ) : (
          <Sun 
            size={20} 
            className="transform transition-all duration-300 group-hover:rotate-180" 
          />
        )}
      </div>
      
      {/* Ripple effect on click */}
      <div className={`
        absolute inset-0 rounded-full opacity-0 group-active:opacity-30
        ${isDark ? 'bg-yellow-400' : 'bg-blue-400'}
        transition-opacity duration-150
      `} />
    </button>
  );
};

export default ThemeToggle;