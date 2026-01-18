import React, { useEffect, useState } from 'react';

// ==========================================
// 1. Shopify 连接逻辑 (只读真数据)
// ==========================================
const domain = import.meta.env.VITE_SHOPIFY_DOMAIN;
const storefrontAccessToken = import.meta.env.VITE_SHOPIFY_TOKEN;

async function getShopifyData() {
  // 如果没配置环境变量，直接返回空，绝不造假
  if (!domain || !storefrontAccessToken) return [];

  const query = `
  {
    products(first: 20) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }`;

  try {
    const URL = `https://${domain}/api/2023-10/graphql.json`;
    const options = {
      endpoint: URL,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };
    const res = await fetch(URL, options);
    const json = await res.json();
    // 拿到真数据
    return json.data?.products?.edges || [];
  } catch (error) {
    console.error("Shopify 连接失败:", error);
    return [];
  }
}

// ==========================================
// 2. 页面组件 (样板房的外观 + 真实的数据)
// ==========================================
function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      // 没有任何假数据兜底逻辑，直接去 Shopify 拿
      const realData = await getShopifyData();
      if (realData) {
        setProducts(realData);
      }
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F4F2] text-[#1a1a1a] font-mono selection:bg-gray-300">
      
      {/* --- HEADER (顶部导航 - 保持原样) --- */}
      <header className="p-6 md:p-10 border-b border-[#e5e5e0] flex justify-between items-center sticky top-0 bg-[#F4F4F2]/90 backdrop-blur-sm z-50">
        <h1 className="text-2xl font-bold tracking-tighter">NOON ARCHIVE</h1>
        <div className="text-xs space-x-4 hidden md:block">
          <span>INDEX</span>
          <span>SEARCH</span>
          <span>CART (0)</span>
        </div>
      </header>

      <main className="p-6 md:p-10">
        <div className="flex flex-col gap-4 mb-12">
          {/* --- 这就是你要找回的“样板房设计” (大标题 + 分类条) --- */}
          <h2 className="text-6xl font-bold tracking-tighter uppercase">Index</h2>
          
          <div className="flex justify-between items-end border-b border-[#e5e5e0] pb-2">
            {/* 这里的分类虽然暂时点不动，但必须存在，为了撑起页面的“设计感” */}
            <div className="text-xs space-x-6 text-gray-400 font-mono">
              <span className="text-black cursor-pointer font-bold border-b border-black pb-0.5">ALL</span>
              <span className="hover:text-black cursor-pointer transition-colors">OUTERWEAR</span>
              <span className="hover:text-black cursor-pointer transition-colors">FOOTWEAR</span>
              <span className="hover:text-black cursor-pointer transition-colors">OBJECTS</span>
            </div>
            {/* 真实的统计数据 */}
            <span className="text-xs font-mono text-gray-500">
               {loading ? "LOADING ARCHIVE..." : `FULL ARCHIVE • ${products.length} ITEMS`}
            </span>
          </div>
        </div>

        {/* --- 商品展示区 --- */}
        <div className="min-h-[50vh]">
          {loading && (
            <div className="pt-20 text-center text-xs text-gray-400 animate-pulse">
              CONNECTING TO SHOPIFY...
            </div>
          )}

          {/* 如果 Shopify 里真的没货 (0件)，优雅地显示空状态，而不是假货 */}
          {!loading && products.length === 0 && (
             <div className="py-32 border border-dashed border-[#e5e5e0] text-center">
               <p className="text-sm text-gray-400 mb-2">ARCHIVE IS EMPTY</p>
               <p className="text-[10px] text-gray-300">PLEASE ADD PRODUCTS IN SHOPIFY HEADLESS CHANNEL</p>
             </div>
          )}

          {/* 渲染真实的 Shopify 商品 (哪怕只有 1 个) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
            {products.map((item) => {
              const product = item.node;
              const image = product.images.edges[0]?.node.url;
              const price = product.priceRange.minVariantPrice.amount;
              const currency = product.priceRange.minVariantPrice.currencyCode;

              return (
                <div key={product.id} className="group cursor-pointer flex flex-col gap-3">
                  {/* 图片区域 - 保持原本的高级比例 */}
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
                  
                  {/* 文字区域 - 保持原本的排版 */}
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
        </div>
      </main>

      <footer className="p-10 mt-20 border-t border-[#e5e5e0] text-xs text-gray-400">
        <p>&copy; 2026 NOON ARCHIVE / POWERED BY SHOPIFY</p>
      </footer>
    </div>
  );
}

export default App;
