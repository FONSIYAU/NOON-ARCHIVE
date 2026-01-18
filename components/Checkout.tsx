
import React, { useState } from 'react';
import { CartItem, Region } from '../types';
import { ChevronLeft, ShoppingBag, ChevronRight } from 'lucide-react';
import { EXCHANGE_RATES, TRANSLATIONS } from '../data';

interface CheckoutProps {
  items: CartItem[];
  onBack: () => void;
  onViewRefund: () => void;
  onViewPrivacy: () => void;
  onViewTerms: () => void;
  region: Region;
}

type CheckoutStep = 'INFORMATION' | 'SHIPPING' | 'PAYMENT';

export const Checkout: React.FC<CheckoutProps> = ({ items, onBack, onViewRefund, onViewPrivacy, onViewTerms, region }) => {
  const [step, setStep] = useState<CheckoutStep>('INFORMATION');
  
  // Form state (mock)
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postcode: '',
  });
  const [shippingMethod, setShippingMethod] = useState('standard');

  const rate = EXCHANGE_RATES[region.id] || 1;
  const t = TRANSLATIONS[region.id] || TRANSLATIONS['GB'];
  
  const baseSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  // Calculate shipping cost based on selection
  const baseShippingCost = shippingMethod === 'express' ? 25.00 : 0.00; // Standard is free on archive pieces
  
  const subtotal = baseSubtotal * rate;
  const shippingCost = baseShippingCost * rate; // Calculate displayed shipping
  
  // In Information step, shipping isn't added yet
  const total = subtotal + (step === 'INFORMATION' ? 0 : shippingCost);

  const formatPrice = (val: number) => {
    return region.id === 'JP' ? val.toFixed(0) : val.toFixed(2);
  };

  const inputClass = "w-full bg-white border border-gray-300 rounded px-3 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black outline-none placeholder-gray-500 transition-shadow";

  // Navigation handlers
  const goToShipping = () => setStep('SHIPPING');
  const goToPayment = () => setStep('PAYMENT');
  const goToInformation = () => setStep('INFORMATION');

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white text-[#333] font-sans">
      
      {/* Left Column - Form */}
      <div className="w-full lg:w-[58%] order-2 lg:order-1 pt-8 pb-12 px-6 lg:px-16 xl:px-24 border-r border-gray-200">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight uppercase cursor-pointer" onClick={onBack}>
              Noon Archive
            </h1>
            <div className="lg:hidden flex items-center gap-2 text-primary">
                <ShoppingBag size={20} />
                <span className="font-mono text-sm">{region.symbol}{formatPrice(total)}</span>
            </div>
        </div>

        {/* Breadcrumbs */}
        <div className="flex items-center text-xs md:text-sm mb-8 space-x-2 font-medium flex-wrap gap-y-2">
            <span className="text-primary cursor-pointer hover:underline" onClick={onBack}>{t.cart}</span>
            <ChevronRight size={14} className="text-gray-500" />
            
            <span 
                className={`${step === 'INFORMATION' ? 'text-black font-bold' : 'text-primary cursor-pointer hover:underline'}`}
                onClick={goToInformation}
            >
                Information
            </span>
            <ChevronRight size={14} className="text-gray-500" />
            
            <span 
                className={`${step === 'SHIPPING' ? 'text-black font-bold' : (step === 'PAYMENT' ? 'text-primary cursor-pointer hover:underline' : 'text-gray-500')}`}
                onClick={() => step === 'PAYMENT' && goToShipping()}
            >
                {t.shipping}
            </span>
            <ChevronRight size={14} className="text-gray-500" />
            
            <span className={`${step === 'PAYMENT' ? 'text-black font-bold' : 'text-gray-500'}`}>
                {t.payment}
            </span>
        </div>

        {/* STEP CONTENT */}
        {step === 'INFORMATION' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                {/* Express Checkout */}
                <div className="mb-8">
                    <div className="text-xs text-center text-gray-500 mb-3">{t.expressCheckout}</div>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="bg-[#5A31F4] text-white py-2.5 rounded text-sm font-bold hover:opacity-90 transition-opacity">
                            shop<span className="font-light">Pay</span>
                        </button>
                        <button className="bg-[#FFC439] text-[#2C2E2F] py-2.5 rounded text-sm font-bold italic hover:opacity-90 transition-opacity">
                            PayPal
                        </button>
                    </div>
                </div>

                <div className="relative flex items-center justify-center mb-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <span className="relative bg-white px-3 text-xs text-gray-500">{t.or}</span>
                </div>

                {/* Contact Information */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-medium">{t.contact}</h2>
                        <button className="text-sm underline text-primary hover:text-primary/70">{t.login}</button>
                    </div>
                    <input 
                        type="email" 
                        placeholder={t.emailPlaceholder}
                        className={`${inputClass} mb-3`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black bg-white" />
                        <span className="text-sm text-gray-600">{t.emailNews}</span>
                    </label>
                </div>

                {/* Delivery Address */}
                <div className="mb-10">
                    <h2 className="text-lg font-medium mb-4">{t.delivery}</h2>
                    <div className="space-y-3">
                        <select className={`${inputClass} bg-white`} defaultValue={region.name}>
                            <option>{region.name}</option>
                            <option disabled>──────────</option>
                            <option>United Kingdom</option>
                            <option>United States</option>
                            <option>Japan</option>
                            <option>France</option>
                        </select>

                        <div className="grid grid-cols-2 gap-3">
                            <input 
                                type="text" placeholder={t.firstName} className={inputClass} 
                                value={address.firstName} onChange={e => setAddress({...address, firstName: e.target.value})}
                            />
                            <input 
                                type="text" placeholder={t.lastName} className={inputClass} 
                                value={address.lastName} onChange={e => setAddress({...address, lastName: e.target.value})}
                            />
                        </div>

                        <input type="text" placeholder={t.company} className={inputClass} />
                        
                        <div className="relative">
                            <input 
                                type="text" placeholder={t.address} className={inputClass} 
                                value={address.address} onChange={e => setAddress({...address, address: e.target.value})}
                            />
                        </div>

                        <input type="text" placeholder={t.apartment} className={inputClass} />

                        <div className="grid grid-cols-2 gap-3">
                            <input 
                                type="text" placeholder={t.city} className={inputClass} 
                                value={address.city} onChange={e => setAddress({...address, city: e.target.value})}
                            />
                            <input 
                                type="text" placeholder={t.postcode} className={inputClass} 
                                value={address.postcode} onChange={e => setAddress({...address, postcode: e.target.value})}
                            />
                        </div>

                        <input type="tel" placeholder={t.phone} className={inputClass} />
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
                    <button onClick={onBack} className="text-sm text-primary hover:underline flex items-center gap-1">
                        <ChevronLeft size={16} /> {t.returnToCart}
                    </button>
                    <button 
                        onClick={goToShipping}
                        className="w-full md:w-auto bg-black text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                        Continue to shipping
                    </button>
                </div>
            </div>
        )}

        {step === 'SHIPPING' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                {/* Review Block */}
                <div className="border border-gray-200 rounded-md p-4 mb-8 text-sm">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-3">
                        <div className="flex gap-4">
                            <span className="text-gray-500 w-16">Contact</span>
                            <span>{email || 'user@example.com'}</span>
                        </div>
                        <button onClick={goToInformation} className="text-xs text-primary underline">Change</button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                            <span className="text-gray-500 w-16">Ship to</span>
                            <span className="truncate max-w-[200px]">{address.address || '123 Fashion St'}, {address.city || 'London'}</span>
                        </div>
                        <button onClick={goToInformation} className="text-xs text-primary underline">Change</button>
                    </div>
                </div>

                <h2 className="text-lg font-medium mb-4">{t.shippingMethod}</h2>
                <div className="border border-gray-200 rounded-md mb-8">
                    <label className="flex items-center justify-between p-4 cursor-pointer border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <input 
                                type="radio" name="shipping" 
                                checked={shippingMethod === 'standard'} 
                                onChange={() => setShippingMethod('standard')}
                                className="w-4 h-4 text-black focus:ring-black" 
                            />
                            <span className="text-sm">Standard Archive Shipping (5-7 days)</span>
                        </div>
                        <span className="text-sm font-bold">Free</span>
                    </label>
                    <label className="flex items-center justify-between p-4 cursor-pointer">
                         <div className="flex items-center gap-3">
                            <input 
                                type="radio" name="shipping" 
                                checked={shippingMethod === 'express'} 
                                onChange={() => setShippingMethod('express')}
                                className="w-4 h-4 text-black focus:ring-black" 
                            />
                            <span className="text-sm">Express Priority (1-2 days)</span>
                        </div>
                        <span className="text-sm font-bold">{region.symbol}{formatPrice(25 * rate)}</span>
                    </label>
                </div>

                <div className="mt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
                    <button onClick={goToInformation} className="text-sm text-primary hover:underline flex items-center gap-1">
                        <ChevronLeft size={16} /> Return to information
                    </button>
                    <button 
                        onClick={goToPayment}
                        className="w-full md:w-auto bg-black text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                        Continue to payment
                    </button>
                </div>
            </div>
        )}

        {step === 'PAYMENT' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                {/* Review Block */}
                <div className="border border-gray-200 rounded-md p-4 mb-8 text-sm">
                     <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-3">
                        <div className="flex gap-4">
                            <span className="text-gray-500 w-16">Contact</span>
                            <span>{email || 'user@example.com'}</span>
                        </div>
                        <button onClick={goToInformation} className="text-xs text-primary underline">Change</button>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-3">
                        <div className="flex gap-4">
                            <span className="text-gray-500 w-16">Ship to</span>
                            <span className="truncate max-w-[200px]">{address.address || '123 Fashion St'}, {address.city || 'London'}</span>
                        </div>
                        <button onClick={goToInformation} className="text-xs text-primary underline">Change</button>
                    </div>
                     <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                            <span className="text-gray-500 w-16">Method</span>
                            <span>{shippingMethod === 'express' ? 'Express Priority' : 'Standard Archive Shipping'}</span>
                        </div>
                        <button onClick={goToShipping} className="text-xs text-primary underline">Change</button>
                    </div>
                </div>

                 <div className="mb-8">
                    <h2 className="text-lg font-medium mb-2">{t.payment}</h2>
                    <p className="text-sm text-gray-500 mb-4">{t.paymentSecure}</p>
                    
                    <div className="border border-gray-300 rounded overflow-hidden">
                        {/* Credit Card Option */}
                        <div className="bg-[#f0f5ff] border-b border-primary border-opacity-20 p-4">
                            <div className="flex items-center justify-between mb-4">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-black focus:ring-black bg-white" />
                                    <span className="text-sm font-medium">{t.creditCard}</span>
                                </label>
                                <div className="flex space-x-1">
                                    <div className="w-8 h-5 bg-white border rounded flex items-center justify-center text-[8px] font-bold text-blue-800">VISA</div>
                                    <div className="w-8 h-5 bg-white border rounded flex items-center justify-center text-[8px] font-bold text-red-600">MC</div>
                                    <div className="w-8 h-5 bg-white border rounded flex items-center justify-center text-[8px] font-bold text-orange-500">AMEX</div>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="relative">
                                    <input type="text" placeholder={t.cardNumber} className={inputClass} />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <input type="text" placeholder={t.expirationDate} className={inputClass} />
                                    <div className="relative">
                                        <input type="text" placeholder={t.securityCode} className={inputClass} />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold border rounded-full w-4 h-4 flex items-center justify-center cursor-help">?</div>
                                    </div>
                                </div>
                                <input type="text" placeholder={t.nameOnCard} className={inputClass} />
                                
                                <label className="flex items-center space-x-2 cursor-pointer mt-2">
                                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black bg-white" />
                                    <span className="text-sm text-gray-600">{t.billingSameAsShipping}</span>
                                </label>
                            </div>
                        </div>

                        {/* PayPal Option */}
                        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" name="payment" className="w-4 h-4 text-black focus:ring-black bg-white" />
                                <span className="text-sm font-medium">PayPal</span>
                            </label>
                            <span className="text-blue-600 font-bold italic text-sm">PayPal</span>
                        </div>

                        {/* Klarna Option */}
                        <div className="p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" name="payment" className="w-4 h-4 text-black focus:ring-black bg-white" />
                                <span className="text-sm font-medium">Klarna - Flexible payments</span>
                            </label>
                            <span className="bg-pink-200 text-black text-[10px] font-bold px-1 rounded">Klarna.</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
                    <button onClick={goToShipping} className="text-sm text-primary hover:underline flex items-center gap-1">
                        <ChevronLeft size={16} /> Return to shipping
                    </button>
                    <button className="w-full md:w-auto bg-black text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                        {t.payNow}
                    </button>
                </div>
            </div>
        )}

        {/* Footer Links */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex gap-4 text-xs text-primary underline">
            <button onClick={onViewRefund} className="hover:text-primary/70">{t.refundPolicy}</button>
            <button onClick={onViewPrivacy} className="hover:text-primary/70">{t.privacyPolicy}</button>
            <button onClick={onViewTerms} className="hover:text-primary/70">{t.termsOfService}</button>
        </div>

      </div>

      {/* Right Column - Order Summary */}
      <div className="w-full lg:w-[42%] order-1 lg:order-2 bg-[#FAFAFA] border-l border-gray-200 pt-8 pb-12 px-6 lg:px-12 sticky top-0 h-fit min-h-screen">
        
        {/* Cart Items */}
        <div className="space-y-4 mb-8">
            {items.map((item, idx) => (
                <div key={`${item.id}-${item.size}-${idx}`} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 border border-gray-200 rounded bg-white p-1">
                            <div className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center z-10">
                                {item.quantity}
                            </div>
                            <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover rounded-sm mix-blend-multiply" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-800">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.size}</p>
                        </div>
                    </div>
                    <p className="text-sm font-medium">{region.symbol}{formatPrice(item.price * rate * item.quantity)}</p>
                </div>
            ))}
        </div>

        {/* Discount Code */}
        <div className="flex gap-3 mb-8 border-b border-gray-200 pb-8">
            <input 
                type="text" 
                placeholder={t.discountCode}
                className={`${inputClass}`}
            />
            <button className="bg-[#e3e3e3] text-gray-500 font-medium px-4 py-3 rounded text-sm hover:bg-gray-300 transition-colors">
                {t.apply}
            </button>
        </div>

        {/* Totals */}
        <div className="space-y-3 mb-6 border-b border-gray-200 pb-6">
            <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t.subtotal}</span>
                <span className="font-medium">{region.symbol}{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t.shipping}</span>
                <span className="text-gray-500 text-xs">
                    {step === 'INFORMATION' 
                        ? 'Calculated at next step' 
                        : (shippingCost === 0 ? 'Free' : `${region.symbol}${formatPrice(shippingCost)}`)
                    }
                </span>
            </div>
        </div>

        <div className="flex justify-between items-center">
            <div>
                <span className="text-base font-medium">{t.total}</span>
                <p className="text-xs text-gray-500 mt-1">{t.tax} {region.symbol}{formatPrice(total * 0.2)}</p>
            </div>
            <div className="flex items-baseline gap-2">
                <span className="text-xs text-gray-500 font-medium">{region.currency}</span>
                <span className="text-xl font-bold">{region.symbol}{formatPrice(total)}</span>
            </div>
        </div>

      </div>
    </div>
  );
};
