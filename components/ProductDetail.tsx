
import React, { useState } from 'react';
import { Product, Region } from '../types';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { EXCHANGE_RATES, TRANSLATIONS, PRODUCT_TRANSLATIONS } from '../data';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
  region?: Region;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, region }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  
  // Default to GB if not provided (safety check)
  const currentRegionId = region?.id || 'GB';
  const rate = EXCHANGE_RATES[currentRegionId] || 1;
  const price = product.price * rate;
  const t = TRANSLATIONS[currentRegionId] || TRANSLATIONS['GB'];
  const symbol = region?.symbol || '£';

  // Use generic description if specific one isn't available, check for translations first
  const translatedDescription = PRODUCT_TRANSLATIONS[product.id]?.[currentRegionId]?.description;
  const description = translatedDescription || product.description || t.defaultProductDescription;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Column: Image Gallery */}
      <div className="w-full lg:w-[60%] flex flex-col gap-1 lg:gap-0 lg:border-r border-border-subtle dark:border-white/10">
        {product.images.map((img, idx) => (
            <div key={idx} className="w-full relative aspect-[3/4] lg:aspect-auto lg:h-[120vh]">
                <div 
                    className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 bg-center bg-cover mix-blend-multiply dark:mix-blend-normal"
                    style={{ backgroundImage: `url('${img}')` }}
                />
            </div>
        ))}
        {/* Fallback image if only 1 image provided to fill space or show repetition for aesthetic */}
        {product.images.length === 1 && (
             <div className="w-full relative aspect-[3/4] lg:aspect-auto lg:h-[120vh]">
                <div 
                    className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 bg-center bg-cover mix-blend-multiply dark:mix-blend-normal filter grayscale contrast-125"
                    style={{ backgroundImage: `url('${product.images[0]}')` }}
                />
            </div>
        )}
      </div>

      {/* Right Column: Sticky Sidebar */}
      <div className="w-full lg:w-[40%] relative bg-background-light dark:bg-background-dark">
        <div className="lg:sticky lg:top-[73px] flex flex-col h-auto lg:h-[calc(100vh-73px)] overflow-y-auto no-scrollbar p-6 lg:p-12 xl:p-16">
          
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 mb-8 text-xs font-mono tracking-widest text-text-muted uppercase">
            <span className="hover:text-primary cursor-pointer">{t.index}</span>
            <span>/</span>
            <span className="hover:text-primary cursor-pointer">{product.category}</span>
            <span>/</span>
            <span className="text-text-main dark:text-white">Item-{product.id}</span>
          </div>

          {/* Product Header */}
          <div className="mb-8 border-b border-border-subtle dark:border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-none tracking-tight mb-4 uppercase">
              {product.name}
            </h1>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-xl font-mono text-primary dark:text-white font-medium">
                {symbol} {currentRegionId === 'JP' ? price.toFixed(0) : price.toFixed(2)}
              </span>
              <span className="text-xs text-text-muted uppercase tracking-widest font-mono">{t.inStock}</span>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted font-mono">{t.selectSize}</span>
              <button className="text-xs underline decoration-1 underline-offset-2 hover:text-primary font-mono text-text-muted">{t.sizeGuide}</button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <label key={size} className="cursor-pointer group">
                  <input 
                    type="radio" 
                    name="size" 
                    value={size} 
                    className="peer sr-only"
                    checked={selectedSize === size}
                    onChange={() => setSelectedSize(size)}
                    disabled={size === 'XL'}
                  />
                  <div className={`
                    h-12 w-full flex items-center justify-center border text-sm font-medium transition-all font-mono
                    ${size === 'XL' 
                        ? 'border-border-subtle dark:border-white/5 bg-gray-100 dark:bg-white/5 text-text-muted/40 cursor-not-allowed line-through' 
                        : 'border-border-subtle dark:border-white/20 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:border-primary dark:hover:border-white'
                    }
                  `}>
                    {size}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Add to Bag */}
          <div className="mb-12">
            <button 
                onClick={() => onAddToCart(product, selectedSize)}
                className="w-full bg-primary dark:bg-white text-white dark:text-primary h-14 text-sm font-bold tracking-widest hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2 uppercase"
            >
              {t.addToBag}
              <ArrowRight size={18} />
            </button>
            <p className="text-[10px] text-center mt-3 text-text-muted uppercase tracking-wider font-mono">{t.freeShipping}</p>
          </div>

          {/* Description */}
          <div className="space-y-8 flex-grow">
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <p className="text-base leading-relaxed text-text-main dark:text-gray-300 font-light">
                {description}
              </p>
            </div>

            {/* Details Accordions */}
            <div className="border-t border-border-subtle dark:border-white/10 pt-4">
                {[
                    { title: t.materialOrigin, content: (
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between"><span>{t.shell}</span><span className="text-text-main dark:text-white">100% {product.material}</span></div>
                            <div className="flex justify-between"><span>{t.lining}</span><span className="text-text-main dark:text-white">100% Cupro</span></div>
                            <div className="flex justify-between"><span>{t.origin}</span><span className="text-text-main dark:text-white">Made in Italy</span></div>
                        </div>
                    )},
                    { title: t.careInstructions, content: t.careInstructionsContent },
                    { title: t.shippingReturns, content: t.shippingReturnsContent }
                ].map((item, idx) => (
                    <details key={idx} className="group py-2 border-b border-border-subtle dark:border-white/10 last:border-0">
                        <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors py-2">
                            <span>{item.title}</span>
                            <ChevronDown className="transition-transform group-open:rotate-180" size={16} />
                        </summary>
                        <div className="pt-4 pb-2 text-sm text-text-muted leading-relaxed font-sans">
                           {item.content}
                        </div>
                    </details>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
