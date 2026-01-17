
import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { Region } from '../types';
import { TRANSLATIONS } from '../data';

interface RegionModalProps {
  isOpen: boolean;
  onClose: () => void;
  regions: Region[];
  currentRegion: Region;
  onUpdate: (region: Region) => void;
}

export const RegionModal: React.FC<RegionModalProps> = ({ isOpen, onClose, regions, currentRegion, onUpdate }) => {
  const [selectedId, setSelectedId] = useState(currentRegion.id);
  const t = TRANSLATIONS[currentRegion.id] || TRANSLATIONS['GB'];

  useEffect(() => {
    if (isOpen) {
      setSelectedId(currentRegion.id);
    }
  }, [isOpen, currentRegion]);

  if (!isOpen) return null;

  const handleUpdate = () => {
    const region = regions.find(r => r.id === selectedId);
    if (region) {
      onUpdate(region);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-background-dark w-full max-w-[500px] p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight uppercase mb-2">Noon Archive</h2>
          <p className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            {t.shippingWorldwide}
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-mono">
              {t.countryRegion}
            </label>
            <div className="relative">
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full appearance-none bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-none px-4 py-3 text-sm font-medium focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              >
                {regions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.name} ({region.currency} {region.symbol})
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={handleUpdate}
              className="w-full bg-black text-white dark:bg-white dark:text-black py-4 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              {t.updateRegion}
            </button>
            <button
              onClick={onClose}
              className="w-full bg-transparent border border-gray-200 dark:border-gray-800 text-black dark:text-white py-4 text-sm font-bold uppercase tracking-widest hover:border-black dark:hover:border-white transition-colors"
            >
              {t.cancel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
