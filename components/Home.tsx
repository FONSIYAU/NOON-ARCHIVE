
import React, { useState } from 'react';
import { Product, Region } from '../types';
import { ProductCard } from './ProductCard';
import { HERO_IMAGES, PRODUCTS, EXCHANGE_RATES, TRANSLATIONS } from '../data';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface HomeProps {
  onProductClick: (product: Product) => void;
  onViewIndex: () => void;
  onViewStory: () => void;
  region: Region;
}

export const Home: React.FC<HomeProps> = ({ onProductClick, onViewIndex, onViewStory, region }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  const rate = EXCHANGE_RATES[region.id] || 1;
  const t = TRANSLATIONS[region.id] || TRANSLATIONS['GB'];

  // Data segmentation
  const featuredProducts = PRODUCTS.slice(0, 4);
  const remainingProducts = PRODUCTS.slice(4);

  // Categories for filter
  const categories = ['ALL', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  // Filter logic
  const displayProducts = activeCategory === 'ALL'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="w-full flex flex-col bg-background-light dark:bg-background-dark font-sans">
      
      {/* 1. Main Editorial Hero */}
      <section className="w-full relative group cursor-pointer" onClick={() => onProductClick(PRODUCTS[0])}>
        <div className="w-full h-[70vh] md:h-[85vh] overflow-hidden">
            <img 
                src={HERO_IMAGES[0]} 
                alt="Campaign 01" 
                className="w-full h-full object-cover object-top block transform transition-transform duration-700 group-hover:scale-105"
            />
        </div>
        {/* Editorial Text Block - Positioned below image on mobile for clarity, overlay on desktop */}
        <div className="md:absolute md:bottom-12 md:left-12 md:max-w-md w-full bg-white dark:bg-background-dark md:bg-white/90 md:dark:bg-black/90 md:backdrop-blur-sm p-6 md:p-8 flex flex-col items-start border-b md:border-0 border-primary/10 dark:border-white/10">
             <span className="text-[10px] font-mono uppercase tracking-widest text-primary/60 dark:text-white/60 mb-2">
                {t.season}
             </span>
             <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-6 font-sans">
                {t.campaignTitle}
             </h2>
             <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all font-mono">
                {t.shopNow} <ArrowRight size={14} />
             </button>
        </div>
      </section>

      {/* 2. Marquee / Ticker */}
      <div className="w-full border-b border-primary/10 dark:border-white/10 py-3 overflow-hidden bg-primary text-white dark:bg-white dark:text-primary">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-[10px] md:text-xs font-mono uppercase tracking-widest">
            {Array(10).fill("").map((_, i) => (
                <React.Fragment key={i}>
                    <span>{t.collection}</span>
                    <span>•</span>
                    <span>{t.shippingWorldwide}</span>
                    <span>•</span>
                    <span>{t.archivalSeries}</span>
                    <span>•</span>
                </React.Fragment>
            ))}
        </div>
      </div>

      {/* 3. Featured Selection (Grid of 4) */}
      <section className="w-full px-6 py-12 md:px-8 md:py-24 border-b border-primary/10 dark:border-white/10">
        <div className="flex justify-between items-end mb-8">
            <h3 className="text-xl font-bold uppercase tracking-tight">{t.collection}</h3>
            <button onClick={onViewIndex} className="text-xs font-mono uppercase underline underline-offset-4 hover:text-primary/60">
                {t.viewAll}
            </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
            {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} onClick={onProductClick} region={region} />
            ))}
        </div>
      </section>

      {/* 4. Story / Editorial Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-primary/10 dark:border-white/10">
         <div className="order-2 md:order-1 flex flex-col justify-center p-8 md:p-24 bg-gray-50 dark:bg-white/5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary/60 dark:text-white/60 mb-4">
                {t.philosophyLabel}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 leading-none whitespace-pre-line font-sans">
                {t.philosophyTitle}
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-sans leading-relaxed mb-8 max-w-sm">
                {t.philosophyContent}
            </p>
            <button 
                onClick={onViewStory}
                className="w-fit border-b border-primary dark:border-white pb-1 text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity font-mono"
            >
                {t.readStory}
            </button>
         </div>
         <div className="order-1 md:order-2 relative w-full border-b md:border-b-0 md:border-l border-primary/10 dark:border-white/10 h-[50vh] md:h-auto">
             <img 
                src={HERO_IMAGES[1]} 
                alt="Philosophy" 
                className="w-full h-full object-cover"
             />
         </div>
      </section>

      {/* 5. Main Product Archive */}
      <main className="w-full px-6 py-12 md:px-8 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 sticky top-[73px] z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm py-4 -mx-6 px-6 md:-mx-8 md:px-8 border-b border-primary/5 dark:border-white/5">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight">{t.latestIndex}</h2>
          
          <div className="flex items-center gap-4 text-xs font-mono uppercase">
             <div className="relative">
                <button 
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="flex items-center gap-2 hover:opacity-50"
                >
                    {activeCategory === 'ALL' ? t.filter : activeCategory} <ChevronDown size={14} />
                </button>
                
                {isFilterOpen && (
                    <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsFilterOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-background-light dark:bg-background-dark border border-primary/10 dark:border-white/10 shadow-xl z-20 max-h-64 overflow-y-auto">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => { setActiveCategory(cat); setIsFilterOpen(false); }}
                                className={`w-full text-left px-4 py-3 hover:bg-primary/5 dark:hover:bg-white/5 transition-colors ${activeCategory === cat ? 'text-primary dark:text-white font-bold' : 'text-gray-500'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    </>
                )}
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-12">
            {displayProducts.map(product => (
                <ProductCard key={product.id} product={product} onClick={onProductClick} region={region} />
            ))}
        </div>
      </main>

      {/* 6. Footer Archive Banner */}
      <section className="w-full relative bg-black text-white overflow-hidden group">
         <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-700">
            <img 
                src={HERO_IMAGES[2]} 
                className="w-full h-full object-cover filter grayscale"
                alt="Archive"
            />
         </div>
         <div className="relative z-10 py-32 flex flex-col items-center justify-center text-center px-4">
             <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-6 font-sans">
                {t.archiveTitle}
             </h2>
             <p className="font-mono text-xs md:text-sm uppercase tracking-widest mb-8 max-w-lg">
                {t.archiveDescription}
             </p>
             <button 
                onClick={onViewIndex}
                className="bg-white text-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform font-mono"
             >
                {t.viewArchive}
             </button>
         </div>
      </section>

    </div>
  );
};
