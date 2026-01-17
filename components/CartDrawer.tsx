
import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { CartItem, Region } from '../types';
import { EXCHANGE_RATES, TRANSLATIONS } from '../data';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
  region: Region;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onCheckout, region }) => {
  const rate = EXCHANGE_RATES[region.id] || 1;
  const t = TRANSLATIONS[region.id] || TRANSLATIONS['GB'];
  
  // Calculate subtotal in base currency first, then convert
  const baseSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const subtotal = baseSubtotal * rate;

  const formatPrice = (val: number) => {
    return region.id === 'JP' ? val.toFixed(0) : val.toFixed(2);
  };

  return (
    <div className={`fixed inset-0 z-[60] flex justify-end transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-primary/40 backdrop-blur-[2px] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`relative w-full md:w-[400px] h-full bg-background-light dark:bg-background-dark border-l border-primary/10 dark:border-white/10 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-primary/10 dark:border-white/10 shrink-0">
          <h2 className="text-sm font-bold font-mono tracking-tight">{t.cart} ({items.reduce((acc, i) => acc + i.quantity, 0)})</h2>
          <button onClick={onClose} className="hover:opacity-50 transition-opacity p-2 -mr-2">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 no-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex items-center justify-center text-gray-500 font-mono text-sm uppercase">
              {t.yourCartIsEmpty}
            </div>
          ) : (
            items.map((item) => {
                const itemPrice = item.price * rate;
                return (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 group">
                    <div className="w-20 md:w-24 aspect-[3/4] bg-gray-200 dark:bg-gray-800 overflow-hidden relative shrink-0">
                      <img 
                        alt={item.name} 
                        className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal" 
                        src={item.images[0]} 
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-1 py-0.5">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-bold uppercase leading-snug pr-4">{item.name}</h3>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mt-1 uppercase">{t.size}: {item.size}</p>
                      </div>
                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center border border-primary/20 dark:border-white/20">
                          <button onClick={() => onUpdateQuantity(item.id, -1)} className="px-2 py-0.5 hover:bg-primary/5">
                            <Minus size={12} />
                          </button>
                          <span className="text-xs px-2 font-mono">{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id, 1)} className="px-2 py-0.5 hover:bg-primary/5">
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="text-sm font-mono">{region.symbol} {formatPrice(itemPrice)}</p>
                      </div>
                    </div>
                  </div>
                );
            })
          )}
        </div>

        <div className="border-t border-primary/10 dark:border-white/10 px-6 py-6 bg-background-light dark:bg-background-dark shrink-0 z-10">
          <div className="flex justify-between items-center mb-4 text-sm font-mono">
            <span className="text-gray-500 dark:text-gray-400 uppercase">{t.subtotal}</span>
            <span className="font-bold">{region.symbol} {formatPrice(subtotal)}</span>
          </div>
          <p className="text-[10px] text-gray-400 mb-6 font-mono uppercase tracking-wide">
            {t.shippingCalc}
          </p>
          <button 
            onClick={onCheckout}
            className="w-full bg-primary text-white dark:bg-white dark:text-primary py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary/90 dark:hover:bg-gray-200 transition-colors"
          >
            {t.checkout}
          </button>
        </div>
      </div>
    </div>
  );
};
