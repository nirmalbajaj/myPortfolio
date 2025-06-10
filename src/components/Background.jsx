import React from 'react';

export default function Background() {
  return (
    <>
      <div 
        className="absolute inset-0 transition-colors duration-300"
        style={{
          background: 'linear-gradient(-45deg, var(--gradient-colors))',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 20s ease infinite',
          '--gradient-colors': 'var(--gradient-start, #958E69), var(--gradient-mid1, #000000), var(--gradient-mid2, #923CB5), var(--gradient-mid3, #000000), var(--gradient-mid4, #958E69), var(--gradient-end, #923CB5)'
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-60 transition-colors duration-300"
        style={{
          background: 'linear-gradient(45deg, rgba(149, 142, 105, 0.4), rgba(0, 0, 0, 0.6), rgba(146, 60, 181, 0.4))',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 20s ease infinite reverse'
        }}
      />

      <style jsx>{`
        :root {
          --gradient-start: #958E69;
          --gradient-mid1: #000000;
          --gradient-mid2: #923CB5;
          --gradient-mid3: #000000;
          --gradient-mid4: #958E69;
          --gradient-end: #923CB5;
        }

        .dark {
          --gradient-start: #2C2C2C;
          --gradient-mid1: #000000;
          --gradient-mid2: #4A1B5D;
          --gradient-mid3: #000000;
          --gradient-mid4: #2C2C2C;
          --gradient-end: #4A1B5D;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
}
