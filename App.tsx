
import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag, Sun, Moon, User, Globe } from 'lucide-react';
import { Product, CartItem, ViewState, Region } from './types';
import { PRODUCTS, TRANSLATIONS } from './data';
import { Home } from './components/Home';
import { ProductDetail } from './components/ProductDetail';
import { Index } from './components/Index';
import { CartDrawer } from './components/CartDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { LoginDrawer } from './components/LoginDrawer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { RefundPolicy } from './components/RefundPolicy';
import { About } from './components/About';
import { Story } from './components/Story';
import { Instagram } from './components/Instagram';
import { Checkout } from './components/Checkout';
import { RegionModal } from './components/RegionModal';
import { MobileMenu } from './components/MobileMenu';

const REGIONS: Region[] = [
  { id: 'GB', name: 'United Kingdom', currency: 'GBP', symbol: '£', locale: 'en-GB', flag: '🇬🇧' },
  { id: 'US', name: 'United States', currency: 'USD', symbol: '$', locale: 'en-US', flag: '🇺🇸' },
  { id: 'JP', name: 'Japan', currency: 'JPY', symbol: '¥', locale: 'ja-JP', flag: '🇯🇵' },
  { id: 'FR', name: 'France', currency: 'EUR', symbol: '€', locale: 'fr-FR', flag: '🇫🇷' },
  { id: 'CN', name: 'Mainland China', currency: 'CNY', symbol: '¥', locale: 'zh-CN', flag: '🇨🇳' },
];

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regionModalOpen, setRegionModalOpen] = useState(false);
  const [currentRegion, setCurrentRegion] = useState<Region>(REGIONS[0]);
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('PRODUCT_DETAIL');
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setView('HOME');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const goIndex = () => {
    setView('INDEX');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const goPrivacy = () => {
    setView('PRIVACY');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const goTerms = () => {
    setView('TERMS');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const goRefund = () => {
    setView('REFUND');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const goAbout = () => {
    setView('ABOUT');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const goStory = () => {
    setView('STORY');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const goInstagram = () => {
    setView('INSTAGRAM');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const goCheckout = () => {
    setCartOpen(false);
    setView('CHECKOUT');
    window.scrollTo(0, 0);
  };

  const addToCart = (product: Product, size: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, size, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  const t = TRANSLATIONS[currentRegion.id] || TRANSLATIONS['GB'];

  if (view === 'CHECKOUT') {
    return (
        <Checkout 
            items={cartItems} 
            onBack={() => setView('HOME')} 
            onViewRefund={goRefund}
            onViewPrivacy={goPrivacy}
            onViewTerms={goTerms}
            region={currentRegion}
        />
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-primary/10 dark:border-white/10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm transition-colors duration-300">
        <div className="flex justify-between items-center px-6 py-4 md:px-8 md:py-5">
          <div className="flex-1 flex items-center gap-4">
             <button 
                className="md:hidden hover:opacity-50 transition-opacity" 
                aria-label="Menu"
                onClick={() => setMobileMenuOpen(true)}
             >
                <Menu size={24} />
             </button>
            <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }} className="text-lg md:text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
              NOON ARCHIVE
            </a>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 text-sm md:text-base font-medium tracking-wide font-mono uppercase">
            
            {/* Region Trigger */}
            <button 
                onClick={() => setRegionModalOpen(true)}
                className="hidden md:flex items-center gap-2 cursor-pointer hover:opacity-70"
            >
                <span>{currentRegion.id} / {currentRegion.symbol}</span>
            </button>

            <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); goIndex(); }} 
                className={`hidden md:inline-block hover:underline decoration-1 underline-offset-4 ${view === 'INDEX' ? 'underline' : ''}`}
            >
                {t.index}
            </a>
            <button 
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex items-center gap-2 cursor-pointer hover:opacity-70"
            >
                <Search size={16} />
                <span>{t.search}</span>
            </button>
            <button 
                onClick={() => setLoginOpen(true)}
                className="hidden md:flex items-center gap-2 cursor-pointer hover:underline decoration-1 underline-offset-4"
            >
                <span>{t.login}</span>
            </button>
            <button 
              onClick={() => setCartOpen(true)}
              className="group flex items-center gap-2 hover:opacity-70"
            >
              <span className="hidden md:inline">{t.cart}</span>
              <div className="relative">
                  <ShoppingBag size={20} className="md:hidden" />
                  <span className="absolute -top-1 -right-1 md:static bg-primary text-white dark:bg-white dark:text-primary px-1.5 py-0.5 text-[10px] md:text-xs rounded-full md:rounded-sm leading-none min-w-[16px] text-center">
                    {cartCount}
                  </span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-[1920px] mx-auto">
        {view === 'HOME' && (
          <Home 
            onProductClick={handleProductClick} 
            onViewIndex={goIndex} 
            onViewStory={goStory}
            region={currentRegion} 
          />
        )}
        
        {view === 'INDEX' && (
            <Index onProductClick={handleProductClick} region={currentRegion} />
        )}

        {view === 'PRODUCT_DETAIL' && selectedProduct && (
            <ProductDetail 
              product={selectedProduct} 
              onAddToCart={addToCart} 
              region={currentRegion}
            />
        )}

        {view === 'PRIVACY' && (
            <PrivacyPolicy region={currentRegion} />
        )}

        {view === 'TERMS' && (
            <TermsOfService region={currentRegion} />
        )}

        {view === 'REFUND' && (
            <RefundPolicy region={currentRegion} />
        )}

        {view === 'ABOUT' && (
            <About region={currentRegion} />
        )}

        {view === 'STORY' && (
            <Story region={currentRegion} />
        )}

        {view === 'INSTAGRAM' && (
            <Instagram />
        )}
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-primary/10 dark:border-white/10 bg-background-light dark:bg-background-dark">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/10 dark:divide-white/10">
          <div className="p-8 md:p-12 flex flex-col justify-between h-48 md:h-64">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-mono">{t.connect}</h4>
            <div className="flex flex-col space-y-2 text-sm font-sans">
              <button onClick={goInstagram} className="text-left hover:translate-x-1 transition-transform">Instagram</button>
              <a href="#" className="hover:translate-x-1 transition-transform">Twitter</a>
              <a href="#" className="hover:translate-x-1 transition-transform">Pinterest</a>
              <button onClick={goAbout} className="text-left hover:translate-x-1 transition-transform">About</button>
              <button onClick={goStory} className="text-left hover:translate-x-1 transition-transform">Story</button>
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-between h-48 md:h-64">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-mono">{t.newsletter}</h4>
            <div>
              <p className="text-sm mb-4 max-w-xs text-text-muted">{t.subscribeText}</p>
              <form className="flex border-b border-primary dark:border-white pb-1">
                <input 
                  type="email" 
                  placeholder={t.emailAddress}
                  className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 placeholder-gray-400 font-mono" 
                />
                <button type="button" className="uppercase text-xs font-bold hover:text-gray-500 font-mono">{t.join}</button>
              </form>
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-between h-48 md:h-64">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-mono">{t.legal}</h4>
            <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400 font-sans">
              <button onClick={goPrivacy} className="text-left hover:text-primary dark:hover:text-white">{t.privacyPolicy}</button>
              <button onClick={goTerms} className="text-left hover:text-primary dark:hover:text-white">{t.termsOfService}</button>
              <span className="mt-4 text-xs opacity-50 font-mono">© 2024 NOON ARCHIVE</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        items={cartItems} 
        onUpdateQuantity={updateCartQuantity}
        onCheckout={goCheckout}
        region={currentRegion}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={(view) => {
            if (view === 'HOME') goHome();
            if (view === 'INDEX') goIndex();
            if (view === 'STORY') goStory();
            if (view === 'ABOUT') goAbout();
        }}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
        onOpenRegion={() => setRegionModalOpen(true)}
        region={currentRegion}
      />
      
      {/* Search Overlay */}
      <SearchOverlay 
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={PRODUCTS}
        onProductClick={handleProductClick}
        region={currentRegion}
      />
      
      {/* Login Drawer */}
      <LoginDrawer 
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      />

      {/* Region Modal */}
      <RegionModal 
        isOpen={regionModalOpen}
        onClose={() => setRegionModalOpen(false)}
        regions={REGIONS}
        currentRegion={currentRegion}
        onUpdate={setCurrentRegion}
      />

      {/* Theme Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-10 bg-primary text-white dark:bg-white dark:text-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
};

export default App;
