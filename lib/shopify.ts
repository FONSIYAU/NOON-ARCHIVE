// lib/shopify.ts

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
    console.error("Error:", error);
    throw new Error("Products not fetched");
  }
}

// 注意：这里改成了 getShopifyProducts，为了配合 App.tsx
export async function getShopifyProducts() {
  const query = `
  {
    products(first: 20) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 4) {
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
  return response.data?.products?.edges || [];
}
