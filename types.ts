export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  material: string;
  images: string[];
  description?: string;
}

export interface CartItem extends Product {
  size: string;
  quantity: number;
}

export type ViewState = 'HOME' | 'PRODUCT_DETAIL' | 'INDEX' | 'PRIVACY' | 'TERMS' | 'ABOUT' | 'STORY' | 'INSTAGRAM' | 'CHECKOUT';

export interface Region {
  id: string;
  name: string;
  currency: string;
  symbol: string;
  locale: string; // e.g., 'en-GB', 'zh-CN'
  flag: string; // Emoji flag or code
}