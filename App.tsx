import React, { useEffect, useState } from 'react';

// ==========================================
// 第一部分：原本在 lib/shopify.ts 里的代码
// (直接搬到这里，防止找不到文件)
// ==========================================

const domain = import.meta.env.VITE_SHOPIFY_DOMAIN;
const storefrontAccessToken = import.meta.env.VITE_SHOPIFY_TOKEN;

async function shopifyData(query: string) {
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

  try {
    const res = await fetch(URL, options);
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Products not fetched");
  }
}

async function getProductsInCollection() {
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

  const response = await shopifyData(query);
  // 加一个保护，防止数据结构不对导致报错
  return response.data?.products?.edges || [];
}

// ==========================================
// 第二部分：原本的 App 组件代码
// ==========================================

// 定义类型，让 TypeScript 即使报错也不要卡住构建
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
        console.log("正在请求 Shopify 数据...");
        const data = await getProductsInCollection();
        console.log("拿到的数据:", data);
        
        if (data && data.length > 0) {
          setProducts(data);
        }
      } catch (error) {
        console.error("抓取失败:", error);
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
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-6xl font-bold tracking-tighter uppercase">Index</h2>
          
          {/* 分类条 */}
          <div className="flex justify-between items-end border-b border-[#e5e5e0] pb-2">
            <div className="text-xs space-x-6 text-gray-400 font-mono">
              <span className="text-black cursor-pointer font-bold">ALL</span>
              <span className="hover:text-black cursor-pointer transition-colors">OUTERWEAR</span>
              <span className="hover:text-black cursor-pointer transition-colors">FOOTWEAR</span>
              <span className="hover:text-black cursor-pointer transition-colors">OBJECTS</span>
            </div>
            <span className="text-xs font-mono text-gray-500">
               {loading ? "LOADING..." : `FULL ARCHIVE • ${products.length} ITEMS`}
            </span>
          </div>
        </div>

        {/* Loading 动画 */}
        {loading && (
          <div className="h-40 flex items-center justify-center text-sm animate-pulse text-gray-400">
            CONNECTING TO SHOPIFY...
          </div>
        )}

        {/* 商品展示区 */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
            
            {products.length === 0 && (
              <div className="col-span-full text-center py-20 border border-dashed border-gray-300">
                <p className="text-lg mb-2">暂无商品</p>
                <p className="text-xs text-gray-500">请去 Shopify 后台添加商品并勾选 Headless 渠道</p>
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
        <p>&copy; 2026 NOON ARCHIVE</p>
      </footer>
    </div>
  );
}

export default App;
