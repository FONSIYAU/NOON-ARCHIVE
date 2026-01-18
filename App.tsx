import React, { useEffect, useState } from 'react';

// ==========================================
// 1. Shopify 连接逻辑 (保持不变，因为它是对的)
// ==========================================
const domain = import.meta.env.VITE_SHOPIFY_DOMAIN;
const storefrontAccessToken = import.meta.env.VITE_SHOPIFY_TOKEN;

async function getShopifyData() {
  const query = `
  {
    products(first: 8) {
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
    return json.data?.products?.edges || [];
  } catch (error) {
    console.error("Shopify fetch failed:", error);
    return [];
  }
}

// ==========================================
// 2. 页面组件 (颜值恢复版)
// ==========================================
function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const realData = await getShopifyData();
      if (realData) setProducts(realData);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F4F2] text-[#1a1a1a] font-mono selection:bg-gray-300">
      
      {/* --- HEADER (顶部导航) --- */}
      <header className="fixed top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference text-white">
        <h1 className="text-2xl font-bold tracking-tighter">NOON ARCHIVE</h1>
        <div className="text-xs space-x-6 hidden md:flex font-bold">
          <span className="cursor-pointer hover:opacity-70">INDEX</span>
          <span className="cursor-pointer hover:opacity-70">STORY</span>
          <span className="cursor-pointer hover:opacity-70">CART (0)</span>
        </div>
      </header>

      {/* --- HERO SECTION (你要回来的封面大图) --- */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {/* 这里的图片地址你可以换成你自己的 */}
        <img 
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop" 
          alt="Campaign" 
          className="w-full h-full object-cover filter brightness-[0.85]"
        />
        <div className="absolute bottom-10 left-6 md:left-10 text-white">
          <p className="text-xs mb-2">COLLECTION 01</p>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none">
            SILENCE <br/> IN MOTION
          </h2>
        </div>
      </section>

      {/* --- STORY SECTION (你要回来的品牌故事) --- */}
      <section className="py-24 px-6 md:px-10 max-w-4xl mx-auto text-center">
        <span className="text-xs text-gray-400 block mb-6">THE STORY</span>
        <p className="text-lg md:text-2xl leading-relaxed text-[#1a1a1a] font-sans font-light">
          "Noon Archive is not just a store. It represents a curated dialogue between 
          functionality and aesthetics. We collect objects that endure the test of time, 
          focusing on materials, texture, and silence."
        </p>
        <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
          Established 2026 • Based in Shanghai
        </p>
      </section>

      {/* --- PRODUCT GRID (Shopify 商品区) --- */}
      <main className="p-6 md:p-10 border-t border-[#e5e5e0]">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-6xl font-bold tracking-tighter uppercase">Index</h2>
          <span className="text-xs font-mono text-gray-500">
             {loading ? "LOADING STOCK..." : `AVAILABLE ITEMS: ${products.length}`}
          </span>
        </div>

        {/* 商品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16">
          
          {/* 如果还没进货，显示提示 */}
          {!loading && products.length === 0 && (
            <div className="col-span-full py-20 text-center border border-dashed border-gray-300 text-gray-400">
              <p>NO ITEMS FOUND IN SHOPIFY</p>
            </div>
          )}

          {/* 渲染真商品 */}
          {products.map((item) => {
            const product = item.node;
            const image = product.images.edges[0]?.node.url;
            const price = product.priceRange.minVariantPrice.amount;
            const currency = product.priceRange.minVariantPrice.currencyCode;

            return (
              <div key={product.id} className="group cursor-pointer flex flex-col gap-4">
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
                  <h3 className="text-sm font-bold uppercase tracking-wide group-hover:underline decoration-1 underline-offset-4">
                    {product.title}
                  </h3>
                  <div className="flex justify-between items-center text-xs text-gray-500 font-sans">
                    <span>In Stock</span>
                    <span>{currency} {parseFloat(price).toFixed(0)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1a1a1a] text-[#F4F4F2] p-10 mt-20">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h4 className="font-bold mb-4">NEWSLETTER</h4>
            <div className="flex border-b border-[#555] pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent outline-none w-full placeholder-gray-500 text-sm"/>
              <button className="text-xs font-bold uppercase">Join</button>
            </div>
          </div>
          <div className="text-xs text-gray-400 flex flex-col gap-2 text-right">
            <p>INSTAGRAM</p>
            <p>WEIBO</p>
            <p>&copy; 2026 NOON ARCHIVE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
