
import React, { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { Product, Region } from '../types';
import { ProductCard } from './ProductCard';
import { TRANSLATIONS } from '../data';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onProductClick: (product: Product) => void;
  region: Region;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, products, onProductClick, region }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const t = TRANSLATIONS[region.id] || TRANSLATIONS['GB'];

  useEffect(() => {
    if (isOpen) {
      // Focus input when opened
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const filteredProducts = query.trim() === '' 
    ? [] 
    : products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.material.toLowerCase().includes(query.toLowerCase())
      );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background-light dark:bg-background-dark flex flex-col animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 md:px-8 md:py-5 border-b border-primary/10 dark:border-white/10 shrink-0">
        <div className="flex items-center gap-2 text-primary dark:text-white opacity-50">
           <Search size={20} />
           <span className="font-bold tracking-tighter uppercase">{t.searchArchive}</span>
        </div>
        <button 
            onClick={onClose} 
            className="hover:opacity-50 transition-opacity p-2 -mr-2 text-primary dark:text-white"
        >
          <X size={24} />
        </button>
      </div>

      {/* Search Input */}
      <div className="px-6 md:px-8 py-12 md:py-16 shrink-0">
        <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.typeToSearch}
            className="w-full bg-transparent text-3xl md:text-6xl font-bold uppercase tracking-tight border-b border-primary/20 dark:border-white/20 focus:border-primary dark:focus:border-white outline-none placeholder-gray-300 dark:placeholder-gray-700 pb-4 transition-colors font-sans"
        />
      </div>

      {/* Results Area */}
      <div className="flex-1 overflow-y-auto px-6 md:px-8 pb-12 no-scrollbar">
        {query.trim() === '' ? (
            <div className="text-xs font-mono uppercase text-gray-400 tracking-widest mt-4">
                {t.startTyping}
            </div>
        ) : (
            <>
                <div className="flex justify-between items-baseline mb-8 border-b border-primary/10 dark:border-white/10 pb-2">
                     <span className="text-xs font-mono uppercase text-gray-500 tracking-widest">
                        {filteredProducts.length} {t.resultsFound}
                     </span>
                </div>
                
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-12">
                        {filteredProducts.map(product => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                onClick={(p) => { onClose(); onProductClick(p); }} 
                                region={region}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-32 text-gray-400 font-mono uppercase text-sm">
                        {t.noItemsMatching} "{query}"
                    </div>
                )}
            </>
        )}
      </div>
    </div>
  );
};
