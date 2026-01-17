
import React from 'react';
import { Product, Region } from '../types';
import { EXCHANGE_RATES, TRANSLATIONS } from '../data';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  region: Region;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, region }) => {
  const rate = EXCHANGE_RATES[region.id] || 1;
  const price = product.price * rate;
  const t = TRANSLATIONS[region.id] || TRANSLATIONS['GB'];

  return (
    <div 
      className="group flex flex-col cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="aspect-[3/4] w-full overflow-hidden bg-gray-200 dark:bg-gray-800 relative">
        <img 
          alt={product.name}
          className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-500 ease-in-out" 
          src={product.images[0]} 
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-background-light dark:bg-background-dark text-primary dark:text-white px-4 py-2 text-xs uppercase shadow-lg tracking-widest font-mono">
            {t.quickAdd}
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-col space-y-1">
        <div className="flex justify-between items-start">
          <span className="text-sm font-medium font-sans uppercase">{product.name}</span>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase">
          {product.category} / {product.material}
        </span>
        <span className="text-sm font-mono mt-1">
          {region.symbol} {region.id === 'JP' ? price.toFixed(0) : price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
