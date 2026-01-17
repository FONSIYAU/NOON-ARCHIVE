import React from 'react';
import { PRODUCTS, HERO_IMAGES } from '../data';
import { Grid, Bookmark, User, Heart, MessageCircle } from 'lucide-react';

export const Instagram: React.FC = () => {
  // Combine all images for the feed
  const feedImages = [
    ...HERO_IMAGES,
    ...PRODUCTS.flatMap(p => p.images)
  ].slice(0, 12); // Limit to 12 for the demo

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-12">
          {/* Profile Image */}
          <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px] shrink-0">
            <div className="w-full h-full rounded-full bg-white dark:bg-black p-[2px]">
              <img 
                src={HERO_IMAGES[0]} 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 flex flex-col items-center md:items-start w-full">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <h2 className="text-xl md:text-2xl font-light">noon.archive</h2>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  Following
                </button>
                <button className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  Message
                </button>
              </div>
            </div>

            <div className="flex gap-8 mb-4 text-sm md:text-base">
              <div className="text-center md:text-left"><span className="font-bold">142</span> posts</div>
              <div className="text-center md:text-left"><span className="font-bold">12.4k</span> followers</div>
              <div className="text-center md:text-left"><span className="font-bold">482</span> following</div>
            </div>

            <div className="text-sm md:text-base text-center md:text-left space-y-1">
              <h3 className="font-bold">NOON ARCHIVE</h3>
              <p className="text-gray-600 dark:text-gray-300">Architecture / Texture / Form</p>
              <p>Curated minimalist garments.</p>
              <p>London, UK 🇬🇧</p>
              <a href="#" className="text-blue-900 dark:text-blue-200 font-semibold hover:underline">noonarchive.com</a>
            </div>
          </div>
        </div>

        {/* Story Highlights (Mock) */}
        <div className="flex gap-6 overflow-x-auto pb-4 mb-12 no-scrollbar justify-center md:justify-start">
            {['New In', 'Editorial', 'Process', 'Press', 'Studio'].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className="w-16 h-16 rounded-full border border-gray-200 dark:border-gray-800 p-1 group-hover:border-gray-400 transition-colors">
                        <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-xs font-mono text-gray-500">
                             {item[0]}
                        </div>
                    </div>
                    <span className="text-xs font-medium">{item}</span>
                </div>
            ))}
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-200 dark:border-gray-800 mb-1">
          <div className="flex justify-center gap-12">
            <button className="flex items-center gap-2 py-4 border-t border-black dark:border-white text-xs uppercase tracking-widest font-bold">
              <Grid size={12} /> Posts
            </button>
            <button className="flex items-center gap-2 py-4 text-gray-400 text-xs uppercase tracking-widest font-bold hover:text-gray-600">
              <Bookmark size={12} /> Saved
            </button>
            <button className="flex items-center gap-2 py-4 text-gray-400 text-xs uppercase tracking-widest font-bold hover:text-gray-600">
              <User size={12} /> Tagged
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-1 md:gap-8">
          {feedImages.map((src, index) => (
            <div key={index} className="aspect-square relative group cursor-pointer bg-gray-100 dark:bg-gray-900 overflow-hidden">
              <img 
                src={src} 
                alt={`Post ${index}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
                <div className="flex items-center gap-2">
                    <Heart size={20} fill="white" /> 
                    <span>{Math.floor(Math.random() * 500) + 100}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MessageCircle size={20} fill="white" /> 
                    <span>{Math.floor(Math.random() * 20) + 2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-xs text-gray-400 font-sans">
             <p>Meta • About • Blog • Jobs • Help • API • Privacy • Terms • Top Accounts • Locations • Instagram Lite</p>
             <p className="mt-4">© 2024 Instagram from Meta (Mockup for Noon Archive)</p>
        </div>

      </div>
    </div>
  );
};