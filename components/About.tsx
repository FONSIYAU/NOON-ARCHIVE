
import React from 'react';
import { Region } from '../types';
import { PAGE_CONTENT } from '../data';

interface AboutProps {
  region?: Region;
}

export const About: React.FC<AboutProps> = ({ region }) => {
  const currentRegionId = region?.id || 'GB';
  const content = PAGE_CONTENT.ABOUT[currentRegionId] || PAGE_CONTENT.ABOUT['GB'];

  return (
    <div className="w-full px-6 py-12 md:px-8 md:py-24 max-w-3xl mx-auto min-h-screen">
      <div className="mb-12 border-b border-primary/10 dark:border-white/10 pb-8">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-2">{content.title}</h1>
        <p className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          {content.subtitle}
        </p>
      </div>

      <div className="space-y-12 font-sans text-sm md:text-base leading-relaxed">
        <section>
          <p className="text-xl md:text-2xl font-light leading-snug mb-8">
            {content.text1}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {content.text2}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
             {content.text3}
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-primary/10 dark:border-white/10 pt-8">
            <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-2">{content.inquiriesTitle}</h3>
                <p className="text-gray-600 dark:text-gray-300">info@noonarchive.com</p>
            </div>
            <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-2">{content.pressTitle}</h3>
                <p className="text-gray-600 dark:text-gray-300">press@noonarchive.com</p>
            </div>
        </section>
      </div>
    </div>
  );
};
