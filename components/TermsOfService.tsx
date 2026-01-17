
import React from 'react';
import { Region } from '../types';
import { PAGE_CONTENT } from '../data';

interface TermsOfServiceProps {
  region?: Region;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ region }) => {
  const currentRegionId = region?.id || 'GB';
  const content = PAGE_CONTENT.TERMS[currentRegionId] || PAGE_CONTENT.TERMS['GB'];

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
      </div>
    </div>
  );
};
