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
            <p className="text-purple-300 text-sm font-medium tracking-wider uppercase">
              Bharti Soft Tech
            </p>
            <h1 className="text-5xl font-bold text-white leading-tight">
              Front End Developer Intern
            </h1>
          </div>
          
          {/* Glass Effect Description with UI Preview */}
          <div className="relative">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl max-w-2xl">
              <p className="text-gray-200 text-lg leading-relaxed">
                A web app for visualizing personalized Spotify data. View your 
                top artists, top tracks, recently played tracks, and detailed audio 
                information about each track. Create and save new playlists of 
                recommended tracks based on your existing playlists and more.
              </p>
            </div>
            
            {/* UI Preview positioned to the right */}
            <div className="absolute top-0 right-0 transform -translate-x-44 -translate-y-10">
              <div className="w-96 h-96 bg-white rounded-2xl shadow-2xl p-6 rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Screenshot Placeholder</p>
                    <p className="text-xs mt-1">UI Preview Goes Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex space-x-4 pt-8">
            <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Second Project Section */}
      <div className="max-w-7xl mx-auto -translate-x-44">
        <div className="flex justify-end">
          <div className="space-y-6 text-right">
            {/* Project Header */}
            <div className="space-y-4">
              <p className="text-purple-300 text-sm font-medium tracking-wider uppercase">
                Featured Project
              </p>
              <h1 className="text-5xl font-bold text-white leading-tight">
                Example Project
              </h1>
            </div>
            
            {/* Glass Effect Description with UI Preview */}
            <div className="relative">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl max-w-2xl ml-auto">
                <p className="text-gray-200 text-lg leading-relaxed">
                  A web app for visualizing personalized Spotify data. View your 
                  top artists, top tracks, recently played tracks, and detailed audio 
                  information about each track. Create and save new playlists of 
                  recommended tracks based on your existing playlists and more.
                </p>
              </div>
              
              {/* UI Preview positioned to the left */}
              <div className="absolute top-0 left-0 transform -translate-x-96 -translate-y-10">
                <div className="w-96 h-96 bg-white rounded-2xl shadow-2xl p-6 -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Screenshot Placeholder</p>
                      <p className="text-xs mt-1">UI Preview Goes Here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex space-x-4 justify-end pt-8">
              <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}