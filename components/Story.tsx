
import React from 'react';
import { Region } from '../types';
import { PAGE_CONTENT } from '../data';

interface StoryProps {
  region?: Region;
}

export const Story: React.FC<StoryProps> = ({ region }) => {
  const currentRegionId = region?.id || 'GB';
  const content = PAGE_CONTENT.STORY[currentRegionId] || PAGE_CONTENT.STORY['GB'];

  return (
    <div className="w-full px-6 py-12 md:px-8 md:py-24 max-w-3xl mx-auto min-h-screen">
      <div className="mb-12 border-b border-primary/10 dark:border-white/10 pb-8">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-2">{content.title}</h1>
        <p className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          {content.subtitle}
        </p>
      </div>

      <div className="space-y-12 font-sans text-sm md:text-base leading-relaxed">
        {content.sections.map((section: any, idx: number) => (
            <section key={idx}>
            <h2 className="text-lg font-bold uppercase tracking-widest mb-4 font-mono">{section.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
                {section.content}
            </p>
            </section>
        ))}
        
        <div className="w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-800 mt-12 relative overflow-hidden grayscale">
             <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrJEh_d7P9ZHiGwHbqhWbTik60v26dqs4VgNrMvwll1UpRdv-1uFtK8IEAb9v8ksT_-vjG3bJquCSKj70aa41STp7vl65alY6Nv4jY1fhgNbcE3PxhLdWWt9IWHqBtuS-bJB_0oHX5BuidQ2ggIzmIUXPvo6gpYUZovM4mQydfqS19J_SA_LYVCqASyxiOfbYk8kyGxmzPYCm-RmWw7Hs9GDlOQ1DMk1iTozgXNWZ19qUdVlJP-BOZB77fKbgnNWXTPBYmgcDjuU7e" 
                alt="Studio Texture" 
                className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-80"
             />
        </div>
      </div>
    </div>
  );
};
