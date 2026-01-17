import React, { useState } from 'react';
import { X } from 'lucide-react';

interface LoginDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginDrawer: React.FC<LoginDrawerProps> = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);

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
          <h2 className="text-sm font-bold font-mono tracking-tight uppercase">{isRegister ? 'Create Account' : 'Login'}</h2>
          <button onClick={onClose} className="hover:opacity-50 transition-opacity p-2 -mr-2">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-primary/20 dark:border-white/20 py-2 focus:border-primary dark:focus:border-white outline-none transition-colors font-sans" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Password</label>
                    <input type="password" className="w-full bg-transparent border-b border-primary/20 dark:border-white/20 py-2 focus:border-primary dark:focus:border-white outline-none transition-colors font-sans" placeholder="••••••••" />
                </div>
                
                <button className="w-full bg-primary text-white dark:bg-white dark:text-primary py-4 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity mt-8">
                    {isRegister ? 'Register' : 'Sign In'}
                </button>
            </form>

            <div className="mt-8 text-center space-y-4">
                <button 
                    onClick={() => setIsRegister(!isRegister)} 
                    className="text-xs font-mono uppercase underline decoration-1 underline-offset-4 hover:text-gray-500"
                >
                    {isRegister ? 'Already have an account? Sign In' : 'New Client? Create Account'}
                </button>
                {!isRegister && (
                    <div>
                        <button className="text-[10px] font-mono uppercase text-gray-400 hover:text-primary dark:hover:text-white">
                            Forgot Password?
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};