import React, { useEffect, useState } from 'react';
// 注意：这里我去掉了 src/，因为你的文件都在根目录
import { getProductsInCollection } from './lib/shopify';

interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    handle: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges:Array<{
        node: {
          url: string;
          altText?: string;
        };
      }>;
    };
  };
}

function App() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("正在向 Shopify 发起请求...");
        const data = await getProductsInCollection();
        console.log("成功收到 Shopify 数据:", data);
        if (data && data.length > 0) {
          setProducts(data);
        }
      } catch (error) {
        console.error("抓取数据失败:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F4F2] text-[#1a1a1a] font-mono selection:bg-gray-300">
      <header className="p-6 md:p-10 border-b border-[#e5e5e0] flex justify-between items-center sticky top-0 bg-[#F4F4F2]/90 backdrop-blur-sm z-50">
        <h1 className="text-2xl font-bold tracking-tighter">NOON ARCHIVE</h1>
        <div className="text-xs space-x-4 hidden md:block">
          <span>INDEX</span>
          <span>SEARCH</span>
          <span>CART (0)</span>
        </div>
      </header>

      <main className="p-6 md:p-10">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">INDEX</h2>
          <span className="text-xs text-gray-500">
             {loading ? "LOADING..." : `ITEMS: ${products.length}`}
          </span>
        </div>

        {loading && (
          <div className="h-40 flex items-center justify-center text-sm animate-pulse">
            CONNECTING TO SHOPIFY...
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
            {products.length === 0 && (
              <div className="col-span-full text-center py-20 border border-dashed border-gray-300">
                <p className="text-lg mb-2">暂无商品</p>
                <p className="text-xs text-gray-500">请检查 Shopify 后台是否勾选了 Headless 渠道</p>
              </div>
            )}

            {products.map((item) => {
              const product = item.node;
              const image = product.images.edges[0]?.node.url;
              const price = product.priceRange.minVariantPrice.amount;
              const currency = product.priceRange.minVariantPrice.currencyCode;

              return (
                <div key={product.id} className="group cursor-pointer flex flex-col gap-3">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#e5e5e0]">
                    {image ? (
                      <img 
                        src={image} 
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">NO IMAGE</div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold uppercase tracking-wide">{product.title}</h3>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>NEW ARRIVAL</span>
                      <span>{currency} {parseFloat(price).toFixed(0)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <footer className="p-10 mt-20 border-t border-[#e5e5e0] text-xs text-gray-400">
        <p>&copy; 2026 NOON ARCHIVE / POWERED BY SHOPIFY HEADLESS</p>
      </footer>
    </div>
  );
}

export default App;
