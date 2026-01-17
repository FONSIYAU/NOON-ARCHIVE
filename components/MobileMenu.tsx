
import React from 'react';
import { X, Globe, ChevronRight } from 'lucide-react';
import { Region } from '../types';
import { TRANSLATIONS } from '../data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string) => void;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
  onOpenRegion: () => void;
  region: Region;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, onClose, onNavigate, onOpenSearch, onOpenLogin, onOpenRegion, region 
}) => {
  const t = TRANSLATIONS[region.id] || TRANSLATIONS['GB'];

  return (
    <div className={`fixed inset-0 z-[60] flex pointer-events-none ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-primary/40 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-auto ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Drawer - Sliding from LEFT */}
      <div className={`relative w-[300px] h-full bg-background-light dark:bg-background-dark border-r border-primary/10 dark:border-white/10 shadow-2xl flex flex-col pointer-events-auto transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-primary/10 dark:border-white/10 shrink-0">
          <h2 className="text-sm font-bold font-mono tracking-tight uppercase">Menu</h2>
          <button onClick={onClose} className="hover:opacity-50 transition-opacity p-2 -mr-2">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
            <nav className="flex flex-col space-y-6">
                <button onClick={() => { onNavigate('HOME'); onClose(); }} className="text-2xl font-bold uppercase tracking-tighter text-left hover:text-primary/70">
                    Home
                </button>
                <button onClick={() => { onNavigate('INDEX'); onClose(); }} className="text-2xl font-bold uppercase tracking-tighter text-left hover:text-primary/70">
                    {t.index}
                </button>
                <button onClick={() => { onOpenSearch(); onClose(); }} className="text-2xl font-bold uppercase tracking-tighter text-left hover:text-primary/70">
                    {t.search}
                </button>
                 <button onClick={() => { onNavigate('STORY'); onClose(); }} className="text-2xl font-bold uppercase tracking-tighter text-left hover:text-primary/70">
                    {t.readStory}
                </button>
                <button onClick={() => { onNavigate('ABOUT'); onClose(); }} className="text-2xl font-bold uppercase tracking-tighter text-left hover:text-primary/70">
                    About
                </button>
                <button onClick={() => { onOpenLogin(); onClose(); }} className="text-xl font-mono uppercase tracking-widest text-left text-gray-500 hover:text-primary pt-4">
                    {t.login}
                </button>
            </nav>
        </div>

        <div className="p-6 border-t border-primary/10 dark:border-white/10 bg-gray-50 dark:bg-white/5">
             <button onClick={() => { onOpenRegion(); onClose(); }} className="flex items-center justify-between w-full group">
                <div className="flex items-center gap-3">
                    <Globe size={18} className="text-gray-500" />
                    <span className="text-sm font-mono uppercase tracking-wide">{region.name}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-primary text-white dark:bg-white dark:text-primary px-2 py-0.5 rounded-sm font-mono">
                        {region.currency}
                    </span>
                    <ChevronRight size={14} className="text-gray-400" />
                </div>
            </button>
        </div>
      </div>
    </div>
  );
};
