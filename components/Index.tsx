import React from 'react';
import { Filter } from 'lucide-react';
import { Product, Region } from '../types';
// 保留这个以防万一
import { PRODUCTS } from '../data'; 

interface IndexProps {
  onProductClick: (product: Product) => void;
  region: Region;
  // 关键修改：接收 App 传过来的真商品数据
  products?: Product[];
}

export const Index: React.FC<IndexProps> = ({ onProductClick, region, products }) => {
  // 核心逻辑：有真数据就用真数据，没有就用演示数据
  const displayProducts = products && products.length > 0 ? products : PRODUCTS;

  const formatPrice = (price: number) => {
    // 简单的汇率显示逻辑
    let finalPrice = price;
    if (region.id === 'GB') finalPrice = price * 0.8;
    if (region.id === 'JP') finalPrice = price * 150;
    if (region.id === 'CN') finalPrice = price * 7.2;
    
    return new Intl.NumberFormat(region.locale, {
      style: 'currency',
      currency: region.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(finalPrice);
  };

  return (
    <div className="w-full bg-[#F4F4F2] dark:bg-background-dark min-h-screen pt-20 md:pt-32 pb-20 px-6 md:px-10 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-2">Index</h1>
          <p className="font-mono text-xs text-text-muted dark:text-gray-400 uppercase tracking-widest">
            Full Archive / Collection 04
          </p>
        </div>
        
        <div className="w-full md:w-auto flex flex-col md:flex-row gap-8 md:items-center">
          <div className="flex gap-6 text-xs font-mono uppercase tracking-wider text-text-muted dark:text-gray-400 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button className="text-primary dark:text-white font-bold border-b border-primary dark:border-white pb-0.5 whitespace-nowrap">All <span className="text-[10px] align-top opacity-60 ml-0.5">{displayProducts.length}</span></button>
            <button className="hover:text-primary dark:hover:text-white transition-colors whitespace-nowrap">Outerwear</button>
            <button className="hover:text-primary dark:hover:text-white transition-colors whitespace-nowrap">Footwear</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16 md:gap-y-24">
        {displayProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer flex flex-col gap-4" onClick={() => onProductClick(product)}>
            <div className="relative aspect-[3/4] overflow-hidden bg-[#e5e5e0] dark:bg-gray-800">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-bold uppercase tracking-wide group-hover:underline underline-offset-4 decoration-1 text-primary dark:text-gray-100">
                  {product.name}
                </h3>
                <span className="font-mono text-xs text-text-muted dark:text-gray-400">
                  {formatPrice(product.price)}
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-wider text-text-muted dark:text-gray-500">
                <span>{product.category || 'New Arrival'}</span>
                {/* 加上这个标记，让你一眼看出是不是从 Shopify 来的 */}
                {typeof product.id === 'string' && product.id.includes('gid') && <span className="text-green-600">Shopify</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
