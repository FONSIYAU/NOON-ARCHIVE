
import React, { useState } from 'react';
import { Product, Region } from '../types';
import { ProductCard } from './ProductCard';
import { PRODUCTS, TRANSLATIONS } from '../data';

interface IndexProps {
  onProductClick: (product: Product) => void;
  region: Region;
}

export const Index: React.FC<IndexProps> = ({ onProductClick, region }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const t = TRANSLATIONS[region.id] || TRANSLATIONS['GB'];
  
  const categories = ['ALL', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  
  const filteredProducts = activeCategory === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="w-full px-6 py-8 md:px-8 md:py-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 border-b border-primary/10 dark:border-white/10 pb-8 mb-12">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-2">{t.index}</h1>
          <p className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Full Archive / {t.collection}
          </p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono uppercase tracking-widest transition-colors whitespace-nowrap ${
                activeCategory === cat 
                  ? 'text-primary dark:text-white underline underline-offset-4' 
                  : 'text-gray-400 hover:text-primary dark:hover:text-white'
              }`}
            >
              {cat} <span className="text-[10px] align-top ml-0.5 opacity-50">
                {cat === 'ALL' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-12">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onClick={onProductClick} region={region} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="w-full h-64 flex items-center justify-center">
            <p className="font-mono text-sm uppercase text-gray-400">{t.noItemsFound}</p>
        </div>
      )}
    </div>
  );
};
