import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PortfolioShowcase() {
  return (
    <div className="min-h-screen p-8">
      {/* First Project Section */}
      <div className="max-w-7xl mx-auto mb-32">
        <div className="space-y-6">
          {/* Project Header */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-purple-300 text-sm font-medium tracking-wider uppercase">
                Bharti Soft Tech
              </p>
              <p className="text-gray-400 text-sm font-medium">
                September 2024 - March 2025
              </p>
            </div>
            <h1 className="text-3xl font-bold text-amber-300 leading-tight italic">
              Front End Developer Intern
            </h1>
          </div>
          
          {/* Extended Glass Effect Description */}
          <div className="relative">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Developed responsive front-end applications using modern frameworks, engaging in live projects to build practical development skills and enhance application functionality.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Designed intuitive user interfaces with seamless UX principles and integrated static front-end applications with backend systems for cohesive user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Project Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end">
          <div className="space-y-6 text-right">
            {/* Project Header */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm font-medium">
                  November 2023 - April 2024
                </p>
                <p className="text-purple-300 text-sm font-medium tracking-wider uppercase">
                  Indian Railways
                </p>
              </div>
              <h1 className="text-3xl font-bold text-amber-300 leading-tight italic">
                Software Developer Intern
              </h1>
            </div>
            
            {/* Extended Glass Effect Description */}
            <div className="relative">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      Developed a comprehensive rolling stock management system for Indian Railways, tracking vehicles from arrival to departure with detailed record-keeping and accuracy.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      Implemented customizable reporting features and module-based access controls, while integrating material procurement and master data management to optimize workshop operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}