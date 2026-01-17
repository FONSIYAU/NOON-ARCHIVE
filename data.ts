


import { Product } from './types';

export const HERO_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBrJEh_d7P9ZHiGwHbqhWbTik60v26dqs4VgNrMvwll1UpRdv-1uFtK8IEAb9v8ksT_-vjG3bJquCSKj70aa41STp7vl65alY6Nv4jY1fhgNbcE3PxhLdWWt9IWHqBtuS-bJB_0oHX5BuidQ2ggIzmIUXPvo6gpYUZovM4mQydfqS19J_SA_LYVCqASyxiOfbYk8kyGxmzPYCm-RmWw7Hs9GDlOQ1DMk1iTozgXNWZ19qUdVlJP-BOZB77fKbgnNWXTPBYmgcDjuU7e",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCpZeo1b5imqN8qi1CoEzgUZbN2D-ghH472zRQ39lR9mpZRosdf-KrKUhGKy02326kM2KcRkhqb5G3j9mpkQng5gsjmCIVOm8au3kewa96mRjb78etL0-3NqsoBW3UypzZ1wOVzPsG-pwyJJRBt_s6Zg8h_zIXRA0CEPLpfOyp7X6ENimJiAVs7Pdr8UQhpU9ibUZwnNmKIwVl6o_I-K07rDLH_ojQ99CTqAnmKtmpbBUk0Nb7jMFuwA01vpGdbdJPRgzWFffsEx-e0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCeCIiPWwopGYalWrJHXOx4qvEyITl4pTG_MYsd_69YVi89asF8410dqxsJpMYSGawRD-7poKwq27AILcwkTNymNEgiMwmKe3vIWQH4lwruhA_68yT4m_hhFhwkii10btruy8QnHF3EWky9cjKhbWPHe8-lRPgiuOv1pf9_Ig41qcZrOisySzVLssX4PO3_5k26E6IxQ4HwpcFsCwnHxAHY9n-fEabr3w_AFVCGg_LlxKsg44N8rgQnGvLsCWszHmE2YzzaUf2gfxEx"
];

export const EDITORIAL_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBCaMnt2WWkgxZGjqJGb3ruXxNvdQ-3IQhs1Z-J4GKnVZ9vAJHQ6Gwn4cNf6zsMlAouF5OPx1sqZwxO6UHo78sxSksNug9A_Upfkm6SoNC_jsYDIx1mMlOMuTvnTLP46W8NOgDSYUOxSV-LcLvPGGwV1UPtx2vbK-dtomAjDMAh4jL4RfRttqmY4af-Ie9VtPMRhB4q8Dp-J7h7QEFrINOHqcpNmWOtBiKNJp8t36l4CIU9ZA56zHacLXvYVpKDFMxElSWHZkhjiqDQ";

// Base prices are in GBP
export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Structured Wool Jacket",
    price: 485.00,
    category: "Outerwear",
    material: "Wool",
    description: "Cut from heavy archival wool sourced in Bishu, Japan. This piece features a distinct drop shoulder silhouette and raw hem finish, embodying the unfinished yet structured philosophy of the collection. Designed for longevity, the fabric develops a unique patina over time.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBie_Vir2SOIaVSfv1JQA5bROP4LUjY9TnEyDt2g6IeYtuMoEEXJFgSfyYrHaUWlMaYaH664P9RDP-ubfo1ZzJBiLptzfc-dPJNyq74ecuDZBh89a-Jru4wIKVbnmC9z72E8atmqiekMfMS--bd7RYPcd_R1RzPiLnBnNxS8nCIWTXmrwieKQ23YA5jsvfcSn_AxFUpw7XjRY9MtOopDBm-0KQ4ANSmcMnJ-6sHH6nZUiUj2vLI0GlC8_2OGilNIu-OvVyPCWjHQNyC",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4YI8klxMhKDZeUCLbxFSKNmxKSbfSvzZetSe6ye3MQHaPHO3DMYHXZa4u3IWKazeJBEFQxd2c-NQ7_E6kD0fWvFjYF2HS2qfbaE11RwvOHirXnCbpwsJpn8IB8w1a1Ukmix9ELIEolVBcuPDwzG9uEIL-OHzp3drpMadsX1-DmwtuKrAoSlEJV7_CJY5OHxM0bFaTCWM9Nw55CHkxHz7MLCTFCmECtWmaaqzk49Nige2vbN1j_lPBEzljfLUzAG9QOJwQpL2ddkFE",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBf1K3gqgQiVrVKVi2b2PmybHH1r3tykds9bolKC23oqQF5MPamPZFzc1hB41-XZMGwPhRKdh44cZG8LV0WN1Ar594e8Hdzj3QhnxOKwprNPWeHS7YsnkqfivHCY-4UrtzH-6kodT9Ja2wE2CSoX4Iq2oAcAYLIdJZComswbUtYU9eweKttThxY1POgZOvHgt9ZwApHzqF4S_2iAvlDNTHiAzyBbwb7TtJuGjDaSCpsJLTClS3UTWZN39psHVDlRvQXIIrzfPAyzNyV"
    ]
  },
  {
    id: "p2",
    name: "Chelsea Boot 02",
    price: 320.00,
    category: "Footwear",
    material: "Leather",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB3XD10H7j2OV2UCAN5V_b5jb2pqtDQip26jKUVSywczAqGKLGoLKwlg-29wKxmVSpPe2C0lVr7Foh4jPiRWir3q0dvAAbARW_qkZyOhmgyNXMbywFhwNde4rOPhNCEBf78TAIeIYG5hZQMOgxGrU6sysf0ioYznv4tz_ex7ccbde43rrbkvRrSnfj12QcWYoHR4Qd55frD9kaTvxMPLld_4Zsghj4KbSJ65VafqN_V4-iv1ux7le5GGuwFjhIuP7MN4sv-Rvcj3Lkd"]
  },
  {
    id: "p3",
    name: "Knit Sweater 01",
    price: 245.00,
    category: "Stone",
    material: "Wool",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAXn2NFtsL8QVlM12R27yIzVXYquipyNAhyxYuBWYsyHEhi0xLZXxOLJcr7-CDFivw34T3yKLHeDTmVaOmyqZqdAt02ArHpcgdhTB7rXv4cW8IJpVIsl5iAN-5elnQU5gS-u7FJHqeJRb6fl2wR2MOopsiyJps3oHzZZpd_mBoIp-OZSI-bXlyZCgT53HpeeD4JXSuiK73HlOe8PihLybKlhkk5qHudQf1ZsLn5M4noaaNd3YSI7QkNbtkzOpkyoKlIR4fdVwzLXEVz"]
  },
  {
    id: "p4",
    name: "Oversized Shirt",
    price: 195.00,
    category: "Poplin",
    material: "White",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDb1NLCI0WWAdHDvv1wgfJ7EUbHNW7fx0ErUUjADNIKXGqDnKQ3bSUJJPYMrp9daaOxR3DhylKXt0ejQe2S_A8Tuz2iuiqYc83H3hm8_JPnyODaJFgL259HmIV4EwfiRXerv4y4ljk9OxhXjW2AXFP46yhRMglPUhyiIVkhS3r-cAb4DZM9y4FMhidvi6bRjX23JZVu1pffDnDp3BLHiL07e_RhWf5Vo9wBQyykAjwSV9judpf6-i3LdWL3PWmA-1zxE3f_XkVm65qG"]
  },
  {
    id: "p5",
    name: "Pleated Trouser",
    price: 280.00,
    category: "Navy",
    material: "Cotton",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB1M4pUfjO2GE5iL8WHURnRO-c_RH0Xm_zC8EcpVvhIWLyvzGkRxIfFKqJuwKsbo4rwmis5oAeI0OWHOrzuq1Mj1NeKgG9DuXYPtTNxcJzmVHaZX2DURpEEaFHfD-8RUSlHgwo2q7eOLGRBva0sjaRuzzYcP8hNLOWptoOBNtFeGbbioSG92ppYA3_Z0Q2uYf2R6x_3Wcr7WqELndJzPy6Bw0L5K2kJVj33A-Ogq-kLfTWK3wPMn1dPYMgh1qsJcYj6RgF151IykYkG"]
  },
  {
    id: "p6",
    name: "Everyday Tote",
    price: 550.00,
    category: "Black",
    material: "Leather",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCF4I5HY68UMRGhfGl2liMgBEfzOct1-EFfW3XUrQQgIYmksc-tiN_xquJ55o41xS2njvMSaDWWYA-zDjvs0Ia4CGM4EBhWFKpO8vSxUBNelRC70611FVj7wEH6YtgmvrFpFFolvarRPQGu8Q5ICxRNuS9PzacVHSlZiLCGkTFefbg5AUnoCygkylMg121b64PUAH3aKAhlYSyCKKZWM9RxMB7dkBkI6STxBv7L0WXJDYvv-83NGIUAvIpHxy8eEfNIJqnhza2_QjLO"]
  },
  {
    id: "p7",
    name: "Trench Coat",
    price: 620.00,
    category: "Sand",
    material: "Gabardine",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAEotRrZmbCWYK59gypiXieCT-1wKDZUR-Ii17Rrd6gdP3SAgPbO-1b_4sZMmLvrZlv9IOI6ffYjQ0QEw-PyTQIa9ypI96YWsZ60g326HKlG-gCsUL76pSDOa2AD4X1aOkmX_3jtlpf7ri4qMk45yfsUEalc8vhSU-ORzcp0DxPqq8dPVNl4p6ZAPXNWymtmEBa6vloV0XbyR-VnyVXcc-TR0JpvUQy7royagUPW1Rq3ApZT234sTn3ceClnXFQBcJqjeE1ieK6lDur"]
  },
  {
    id: "p8",
    name: "Box Tee",
    price: 95.00,
    category: "Grey",
    material: "Cotton",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBTqpay6BFuOlRIQ4lRohfDHotRTu70FJUMDJ_vaDG0mT-nfRvd7PuBC-aqwPOpzk-CahPfE-6_X9PB5NQ3dLWOjgAh9fTfokko9fHE8heKSMrmOC1nptq9rQm7bRtzFuBmANXmiTUIoJ0g1Si5rpUIQuZWPG4IPsVCCtnkQBbUy2rUNdRQBBs9C8GTeVREAtKQtx-j42YJdlbGegNKT2mJP1vJEAHQUWZp4CuaNa-snxbwXv-UbITXW-IZx8LC1YRMRK3kcbhg1-0o"]
  },
  {
    id: "p9",
    name: "Merino Scarf",
    price: 120.00,
    category: "Charcoal",
    material: "Wool",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDUerM7-av1qSGFhxj4kpnQzR2doaar0lPM_nRI4hqc70bgVWkdk4U74gYeP7OSnbSKGJ8_SveQxl9XVkJnFs9vRYyLig7XUnJnDryK5iz1MxPsmGH_IoVk9MD79BZyz8GOODrc9PR27ckJx58aqm1NtJpWikLT-TLhPL73dfDJ7f6cK5ABnTD7-H3DF0KXRRAYJhg8JjH1d4BVT3hXnZiOGy4GmUebWTAty-5rc5SVk6pi7suwVOz4UDC5eEoKmoNOr7YLtz5hQG37"]
  },
  {
    id: "p10",
    name: "Card Holder",
    price: 180.00,
    category: "Black",
    material: "Leather",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA02YWnmmrZHrvnwtsnMEYunXrobfkdg0isNH1eJ7xl9p4hLAdxDFulMByUFfHJPdiY9rvPQSE-j3NOQ8UEfYlOhtSg8di0R5LKXQ5ywaIdI3DIRvPbWQ2uF5w6GtbNcSu5dyoMo3RRdnPUkWDBjQqcyGXGbF13IvlRDnzfuLSPW2B3RBA9PHvkefDtIKuOf8cltlvUSQ4cE2jtQiJQxb-KCUPYnlN-TZ4u_ZwP3-B1BZEQhNRGVGCO6i76oRUK8NKtj_NS7WGsLKB6"]
  }
];

export const PRODUCT_TRANSLATIONS: Record<string, Record<string, { description: string }>> = {
  p1: {
    CN: {
      description: "采用源自日本尾州的厚重档案羊毛剪裁而成。这款单品采用独特的落肩轮廓和毛边饰面，体现了该系列未完成但结构化的理念。专为长久穿着而设计，面料会随着时间的推移呈现出独特的古铜色。",
    },
    JP: {
       description: "日本の尾州から調達した厚手のアーカイブウールで裁断されています。この作品は、独特のドロップショルダーのシルエットと切りっぱなしの裾の仕上げが特徴で、未完成でありながら構造化されたコレクションの哲学を体現しています。長く愛用できるように設計されており、生地は時間の経過とともに独特の風合いを醸し出します。",
    },
    FR: {
        description: "Coupe en laine d'archive lourde provenant de Bishu, au Japon. Cette pièce présente une silhouette distincte à épaules tombantes et une finition à ourlet brut, incarnant la philosophie inachevée mais structurée de la collection. Conçu pour la longévité, le tissu développe une patine unique au fil du temps."
    }
  }
};

export const EXCHANGE_RATES: Record<string, number> = {
  GB: 1,      // Base
  US: 1.27,   // GBP to USD
  JP: 190.5,  // GBP to JPY
  FR: 1.17,   // GBP to EUR
  CN: 9.15    // GBP to CNY
};

const commonTranslations = {
    addToBag: "Add to Bag",
    checkout: "Checkout",
    subtotal: "Subtotal",
    total: "Total",
    shipping: "Shipping",
    tax: "Including taxes",
    payNow: "Pay Now",
    quickAdd: "Quick Add",
    inStock: "In Stock",
    cart: "Cart",
    search: "Search",
    login: "Login",
    index: "Index",
    collection: "Collection 04",
    archivalSeries: "Archival Series",
    view: "View",
    latestIndex: "Latest Index",
    viewAll: "View All",
    filter: "Filter",
    noItemsFound: "No items found",
    clearFilter: "Clear Filter",
    item: "Item",
    selectSize: "Select Size",
    sizeGuide: "Size Guide",
    freeShipping: "Free worldwide shipping on archival pieces",
    materialOrigin: "Material & Origin",
    careInstructions: "Care Instructions",
    careInstructionsContent: "Do not wash. Do not bleach. Do not tumble dry. Iron at low temperature. Professional dry clean only. Store in provided garment bag to maintain structure.",
    shippingReturns: "Shipping & Returns",
    shippingReturnsContent: "Orders placed before 2PM EST ship same day. Returns accepted within 14 days of delivery for unworn items with original tags attached.",
    shell: "Shell",
    lining: "Lining",
    origin: "Origin",
    yourCartIsEmpty: "Your cart is empty",
    size: "Size",
    shippingCalc: "Shipping & taxes calculated at checkout",
    expressCheckout: "Express checkout",
    or: "OR",
    contact: "Contact",
    emailPlaceholder: "Email or mobile phone number",
    emailNews: "Email me with news and offers",
    delivery: "Delivery",
    firstName: "First name",
    lastName: "Last name",
    company: "Company (optional)",
    address: "Address",
    apartment: "Apartment, suite, etc. (optional)",
    city: "City",
    postcode: "Postcode",
    phone: "Phone",
    shippingMethod: "Shipping method",
    shippingMethodHint: "Enter your shipping address to view available shipping methods.",
    payment: "Payment",
    paymentSecure: "All transactions are secure and encrypted.",
    creditCard: "Credit card",
    cardNumber: "Card number",
    expirationDate: "Expiration date (MM / YY)",
    securityCode: "Security code",
    nameOnCard: "Name on card",
    billingSameAsShipping: "Use shipping address as billing address",
    returnToCart: "Return to cart",
    refundPolicy: "Refund policy",
    privacyPolicy: "Privacy policy",
    termsOfService: "Terms of service",
    discountCode: "Discount code or gift card",
    apply: "Apply",
    connect: "Connect",
    newsletter: "Newsletter",
    subscribeText: "Subscribe for archival updates and new collection releases.",
    emailAddress: "EMAIL ADDRESS",
    join: "JOIN",
    legal: "Legal",
    searchArchive: "Search Archive",
    typeToSearch: "TYPE TO SEARCH...",
    startTyping: "Start typing to search products, materials, or categories",
    resultsFound: "Results Found",
    noItemsMatching: "No items found matching",
    shippingWorldwide: "Now Shipping World Wide!",
    countryRegion: "Country/Region",
    updateRegion: "Update Country/Region",
    cancel: "Cancel",
    defaultProductDescription: "A foundational piece for the modern wardrobe. Constructed with attention to detail and material quality, ensuring longevity and timeless appeal.",
    shopNow: "Shop Now",
    readStory: "Read Story",
    viewArchive: "View Archive",
    season: "Autumn / Winter 2024",
    campaignTitle: "Structural Silence",
    philosophyLabel: "The Philosophy",
    philosophyTitle: "Form Follows Fiction",
    philosophyContent: "Our approach to garment construction is rooted in architectural principles. Removing the unnecessary to reveal the essential.",
    archiveTitle: "The Archive",
    archiveDescription: "Explore our complete history of released garments, materials, and concepts.",
};

export const TRANSLATIONS: Record<string, Record<string, string>> = {
  GB: commonTranslations,
  US: commonTranslations,
  JP: {
    addToBag: "カートに追加",
    checkout: "お会計",
    subtotal: "小計",
    total: "合計",
    shipping: "送料",
    tax: "税込",
    payNow: "支払う",
    quickAdd: "クイック追加",
    inStock: "在庫あり",
    cart: "カート",
    search: "検索",
    login: "ログイン",
    index: "インデックス",
    collection: "コレクション 04",
    archivalSeries: "アーカイブシリーズ",
    view: "見る",
    latestIndex: "最新インデックス",
    viewAll: "すべて見る",
    filter: "フィルター",
    noItemsFound: "商品が見つかりません",
    clearFilter: "フィルターを解除",
    item: "アイテム",
    selectSize: "サイズを選択",
    sizeGuide: "サイズガイド",
    freeShipping: "アーカイブ作品は全世界送料無料",
    materialOrigin: "素材と原産国",
    careInstructions: "お手入れ方法",
    careInstructionsContent: "洗濯しないでください。漂白しないでください。タンブル乾燥しないでください。低温でアイロンをかけてください。専門のドライクリーニングのみ。型崩れを防ぐため、付属のガーメントバッグに入れて保管してください。",
    shippingReturns: "配送と返品",
    shippingReturnsContent: "午後2時（EST）までのご注文は即日発送いたします。未使用でタグが付いた状態の商品は、到着後14日以内であれば返品可能です。",
    shell: "表地",
    lining: "裏地",
    origin: "原産国",
    yourCartIsEmpty: "カートは空です",
    size: "サイズ",
    shippingCalc: "送料と税金はチェックアウト時に計算されます",
    expressCheckout: "エクスプレスチェックアウト",
    or: "または",
    contact: "連絡先",
    emailPlaceholder: "メールアドレスまたは携帯電話番号",
    emailNews: "ニュースとオファーをメールで受け取る",
    delivery: "配送",
    firstName: "名",
    lastName: "姓",
    company: "会社名 (任意)",
    address: "住所",
    apartment: "建物名、部屋番号など (任意)",
    city: "市区町村",
    postcode: "郵便番号",
    phone: "電話番号",
    shippingMethod: "配送方法",
    shippingMethodHint: "配送先住所を入力して配送方法を表示",
    payment: "支払い",
    paymentSecure: "すべての取引は安全に暗号化されています",
    creditCard: "クレジットカード",
    cardNumber: "カード番号",
    expirationDate: "有効期限 (MM / YY)",
    securityCode: "セキュリティコード",
    nameOnCard: "カード名義人",
    billingSameAsShipping: "配送先住所を請求先住所として使用する",
    returnToCart: "カートに戻る",
    refundPolicy: "返金ポリシー",
    privacyPolicy: "プライバシーポリシー",
    termsOfService: "利用規約",
    discountCode: "割引コードまたはギフトカード",
    apply: "適用",
    connect: "接続",
    newsletter: "ニュースレター",
    subscribeText: "アーカイブの更新と新しいコレクションのリリースを購読する。",
    emailAddress: "メールアドレス",
    join: "参加",
    legal: "法務",
    searchArchive: "アーカイブを検索",
    typeToSearch: "入力して検索...",
    startTyping: "製品、素材、またはカテゴリを検索するには入力を開始してください",
    resultsFound: "件の結果が見つかりました",
    noItemsMatching: "一致するアイテムが見つかりません",
    shippingWorldwide: "全世界へ配送中！",
    countryRegion: "国/地域",
    updateRegion: "国/地域を更新",
    cancel: "キャンセル",
    defaultProductDescription: "モダンなワードローブの基礎となるアイテム。細部と素材の品質にこだわり、長寿命と時代を超越した魅力を保証します。",
    shopNow: "今すぐ購入",
    readStory: "ストーリーを読む",
    viewArchive: "アーカイブを見る",
    season: "2024年 秋 / 冬",
    campaignTitle: "構造的沈黙",
    philosophyLabel: "哲学",
    philosophyTitle: "形態はフィクションに従う",
    philosophyContent: "衣服構造へのアプローチは建築の原則に根ざしています。不必要なものを取り除き、本質を明らかにします。",
    archiveTitle: "アーカイブ",
    archiveDescription: "リリースされた衣服、素材、コンセプトの完全な歴史を探索してください。",
  },
  FR: {
    addToBag: "Ajouter au Panier",
    checkout: "Payer",
    subtotal: "Sous-total",
    total: "Total",
    shipping: "Livraison",
    tax: "Taxes incluses",
    payNow: "Payer maintenant",
    quickAdd: "Ajout Rapide",
    inStock: "En Stock",
    cart: "Panier",
    search: "Rechercher",
    login: "Connexion",
    index: "Index",
    collection: "Collection 04",
    archivalSeries: "Série d'Archives",
    view: "Voir",
    latestIndex: "Dernier Index",
    viewAll: "Tout Voir",
    filter: "Filtrer",
    noItemsFound: "Aucun article trouvé",
    clearFilter: "Effacer le filtre",
    item: "Article",
    selectSize: "Choisir la taille",
    sizeGuide: "Guide des tailles",
    freeShipping: "Livraison mondiale gratuite sur les pièces d'archives",
    materialOrigin: "Matériel et Origine",
    careInstructions: "Instructions d'entretien",
    careInstructionsContent: "Ne pas laver. Ne pas blanchir. Ne pas sécher en machine. Repasser à basse température. Nettoyage à sec professionnel uniquement. Ranger dans la housse fournie pour maintenir la structure.",
    shippingReturns: "Livraison et Retours",
    shippingReturnsContent: "Les commandes passées avant 14h EST sont expédiées le jour même. Les retours sont acceptés dans les 14 jours suivant la livraison pour les articles non portés avec les étiquettes d'origine.",
    shell: "Extérieur",
    lining: "Doublure",
    origin: "Origine",
    yourCartIsEmpty: "Votre panier est vide",
    size: "Taille",
    shippingCalc: "Livraison et taxes calculées au paiement",
    expressCheckout: "Paiement express",
    or: "OU",
    contact: "Contact",
    emailPlaceholder: "Email ou numéro de mobile",
    emailNews: "M'envoyer des nouvelles et des offres",
    delivery: "Livraison",
    firstName: "Prénom",
    lastName: "Nom",
    company: "Entreprise (facultatif)",
    address: "Adresse",
    apartment: "Appartement, suite, etc. (facultatif)",
    city: "Ville",
    postcode: "Code postal",
    phone: "Téléphone",
    shippingMethod: "Méthode de livraison",
    shippingMethodHint: "Entrez votre adresse pour voir les méthodes de livraison.",
    payment: "Paiement",
    paymentSecure: "Toutes les transactions sont sécurisées et cryptées.",
    creditCard: "Carte de crédit",
    cardNumber: "Numéro de carte",
    expirationDate: "Date d'expiration (MM / AA)",
    securityCode: "Code de sécurité",
    nameOnCard: "Nom sur la carte",
    billingSameAsShipping: "Utiliser l'adresse de livraison comme adresse de facturation",
    returnToCart: "Retour au panier",
    refundPolicy: "Politique de remboursement",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d'utilisation",
    discountCode: "Code de réduction ou carte cadeau",
    apply: "Appliquer",
    connect: "Connecter",
    newsletter: "Newsletter",
    subscribeText: "Abonnez-vous pour les mises à jour et les nouvelles collections.",
    emailAddress: "ADRESSE EMAIL",
    join: "REJOINDRE",
    legal: "Légal",
    searchArchive: "Rechercher dans l'archive",
    typeToSearch: "TAPEZ POUR RECHERCHER...",
    startTyping: "Commencez à taper pour rechercher...",
    resultsFound: "Résultats trouvés",
    noItemsMatching: "Aucun article correspondant à",
    shippingWorldwide: "Expédition dans le monde entier !",
    countryRegion: "Pays/Région",
    updateRegion: "Mettre à jour Pays/Région",
    cancel: "Annuler",
    defaultProductDescription: "Une pièce fondamentale pour la garde-robe moderne. Confectionnée avec le souci du détail et la qualité des matériaux, assurant longévité et attrait intemporel.",
    shopNow: "Acheter",
    readStory: "Lire l'histoire",
    viewArchive: "Voir l'archive",
    season: "Automne / Hiver 2024",
    campaignTitle: "Silence Structurel",
    philosophyLabel: "La Philosophie",
    philosophyTitle: "La Forme Suit La Fiction",
    philosophyContent: "Notre approche de la construction de vêtements est ancrée dans des principes architecturaux. Supprimer le superflu pour révéler l'essentiel.",
    archiveTitle: "L'Archive",
    archiveDescription: "Explorez notre histoire complète de vêtements, matériaux et concepts.",
  },
  CN: {
    addToBag: "加入购物车",
    checkout: "去结算",
    subtotal: "小计",
    total: "总计",
    shipping: "运费",
    tax: "含税",
    payNow: "立即支付",
    quickAdd: "快速添加",
    inStock: "有现货",
    cart: "购物车",
    search: "搜索",
    login: "登录",
    index: "索引",
    collection: "系列 04",
    archivalSeries: "档案系列",
    view: "查看",
    latestIndex: "最新索引",
    viewAll: "查看全部",
    filter: "筛选",
    noItemsFound: "未找到商品",
    clearFilter: "清除筛选",
    item: "商品",
    selectSize: "选择尺码",
    sizeGuide: "尺码指南",
    freeShipping: "档案单品全球免运费",
    materialOrigin: "材质与产地",
    careInstructions: "保养说明",
    careInstructionsContent: "不可水洗。不可漂白。不可翻转干燥。低温熨烫。仅限专业干洗。存放于提供的防尘袋中以保持结构。",
    shippingReturns: "配送与退货",
    shippingReturnsContent: "美国东部时间下午2点前下的订单当天发货。未穿过且带有原始标签的商品可在交货后14天内退货。",
    shell: "面料",
    lining: "里料",
    origin: "产地",
    yourCartIsEmpty: "您的购物车是空的",
    size: "尺码",
    shippingCalc: "运费和税费将在结算时计算",
    expressCheckout: "快速结账",
    or: "或",
    contact: "联系方式",
    emailPlaceholder: "电子邮件或手机号码",
    emailNews: "通过电子邮件向我发送新闻和优惠",
    delivery: "配送",
    firstName: "名字",
    lastName: "姓氏",
    company: "公司 (可选)",
    address: "地址",
    apartment: "公寓、套房等 (可选)",
    city: "城市",
    postcode: "邮政编码",
    phone: "电话",
    shippingMethod: "配送方式",
    shippingMethodHint: "输入您的收货地址以查看可用的配送方式。",
    payment: "支付",
    paymentSecure: "所有交易均安全加密。",
    creditCard: "信用卡",
    cardNumber: "卡号",
    expirationDate: "有效期 (MM / YY)",
    securityCode: "安全码",
    nameOnCard: "持卡人姓名",
    billingSameAsShipping: "使用收货地址作为账单地址",
    returnToCart: "返回购物车",
    refundPolicy: "退款政策",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    discountCode: "折扣码或礼品卡",
    apply: "应用",
    connect: "连接",
    newsletter: "通讯",
    subscribeText: "订阅以获取档案更新和新系列发布信息。",
    emailAddress: "电子邮件地址",
    join: "加入",
    legal: "法律",
    searchArchive: "搜索档案",
    typeToSearch: "输入以搜索...",
    startTyping: "开始输入以搜索产品、材质或类别",
    resultsFound: "个结果",
    noItemsMatching: "未找到匹配的商品",
    shippingWorldwide: "现在全球发货！",
    countryRegion: "国家/地区",
    updateRegion: "更新国家/地区",
    cancel: "取消",
    defaultProductDescription: "现代衣橱的基础单品。注重细节和材质质量，确保经久耐用和永恒的吸引力。",
    shopNow: "立即购买",
    readStory: "阅读故事",
    viewArchive: "查看档案",
    season: "2024 秋 / 冬",
    campaignTitle: "结构性沉默",
    philosophyLabel: "设计哲学",
    philosophyTitle: "形式追随虚构",
    philosophyContent: "我们的制衣理念植根于建筑原则。去除繁冗，仅以此揭示本质。",
    archiveTitle: "档案",
    archiveDescription: "探索我们完整的服装、材质与概念历史。",
  }
};

const GB_PAGE_CONTENT = {
    ABOUT: {
        title: "About Noon",
        subtitle: "Established 2024 / London, UK",
        text1: "NOON ARCHIVE is a curated space dedicated to the intersection of brutalist architecture and functional garment design.",
        text2: "We operate as both a digital archive and a retail platform, focusing on pieces that prioritize texture, silhouette, and longevity over fleeting trends. Our collection is built on the belief that clothing should be a quiet but powerful extension of the self.",
        text3: "We source globally, with a particular focus on Japanese textiles and Italian manufacturing, bridging the gap between traditional craftsmanship and modern, industrial aesthetics.",
        inquiriesTitle: "General Inquiries",
        pressTitle: "Press / Wholesale"
    },
    STORY: {
        title: "Our Story",
        subtitle: "The Philosophy of Silence",
        sections: [
            { title: "01. Origin", content: "NOON began as a study in reduction. In a world saturated with noise and visual clutter, we sought to create a uniform for the quiet observer. The name 'NOON' references the point of the day when shadows are shortest and clarity is highest—a metaphor for our design ethos: stripping away the unnecessary to reveal the essential form." },
            { title: "02. Materiality", content: "Our creative process always begins with the fabric. We believe that material dictates form. A heavy wool suggests a structured shoulder; a fluid silk demands a draped hem. By listening to the inherent properties of natural fibers, we create garments that feel inevitable rather than designed." },
            { title: "03. The Archive", content: "We view our collections not as seasonal drops, but as entries in an ongoing archive. Each piece is numbered and documented, designed to be relevant today, tomorrow, and ten years from now. We reject the concept of obsolescence in favor of evolution." }
        ]
    },
    PRIVACY: {
        title: "Privacy Policy",
        subtitle: "Last Updated: October 2024",
        sections: [
            { title: "01. Collection of Information", content: "We collect personal information you provide directly to us, such as when you make a purchase, sign up for our newsletter, or contact us. This may include your name, email address, shipping address, and payment details. We process this data to fulfill your orders and improve our archival services." },
            { title: "02. Use of Information", content: "The information we collect is used to process transactions, send related information, including confirmations and receipts, send you technical notices, updates, security alerts, and support messages, and communicate with you about products, services, offers, promotions, and events." },
            { title: "03. Data Protection", content: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems." },
            { title: "04. Cookies", content: "We use cookies to help us remember and process the items in your shopping cart and understand and save your preferences for future visits." }
        ]
    },
    TERMS: {
        title: "Terms of Service",
        subtitle: "Effective Date: October 2024",
        sections: [
            { title: "01. Agreement to Terms", content: "By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site." },
            { title: "02. Intellectual Property", content: "The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary rights." },
            { title: "03. Products and Pricing", content: "All features, content, specifications, products and prices of products and services described or depicted on this Web Site are subject to change at any time without notice. We make all reasonable efforts to accurately display the attributes of our products." },
            { title: "04. Governing Law", content: "These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the United Kingdom." }
        ]
    }
};

export const PAGE_CONTENT: Record<string, Record<string, any>> = {
    ABOUT: {
        GB: GB_PAGE_CONTENT.ABOUT,
        US: GB_PAGE_CONTENT.ABOUT,
        JP: {
            title: "Noonについて",
            subtitle: "設立 2024年 / 英国ロンドン",
            text1: "NOON ARCHIVEは、ブルータリズム建築と機能的な衣服デザインの交差点に特化したキュレーションスペースです。",
            text2: "私たちはデジタルアーカイブとリテールプラットフォームの両方として機能し、一時的なトレンドよりも質感、シルエット、寿命を優先した作品に焦点を当てています。私たちのコレクションは、衣服は静かでありながら強力な自己の延長であるべきだという信念に基づいています。",
            text3: "私たちは世界中から調達を行っており、特に日本のテキスタイルとイタリアの製造に重点を置き、伝統的な職人技と現代的な工業美学のギャップを埋めています。",
            inquiriesTitle: "一般的なお問い合わせ",
            pressTitle: "プレス / 卸売"
        },
        FR: {
            title: "À Propos de Noon",
            subtitle: "Établi en 2024 / Londres, Royaume-Uni",
            text1: "NOON ARCHIVE est un espace curaté dédié à l'intersection de l'architecture brutaliste et de la conception de vêtements fonctionnels.",
            text2: "Nous opérons à la fois comme une archive numérique et une plateforme de vente au détail, en nous concentrant sur des pièces qui privilégient la texture, la silhouette et la longévité aux tendances éphémères. Notre collection est construite sur la conviction que le vêtement doit être une extension silencieuse mais puissante de soi.",
            text3: "Nous nous approvisionnons dans le monde entier, avec un accent particulier sur les textiles japonais et la fabrication italienne, comblant le fossé entre l'artisanat traditionnel et l'esthétique industrielle moderne.",
            inquiriesTitle: "Demandes Générales",
            pressTitle: "Presse / Vente en Gros"
        },
        CN: {
            title: "关于 Noon",
            subtitle: "成立于 2024 年 / 英国伦敦",
            text1: "NOON ARCHIVE 是一个致力于野兽派建筑与功能性服装设计交汇的策划空间。",
            text2: "我们既是数字档案馆又是零售平台，专注于那些优先考虑质感、轮廓和寿命而非短暂趋势的作品。我们的系列建立在一个信念之上，即服装应该是自我安静但有力的延伸。",
            text3: "我们在全球范围内采购，特别注重日本纺织品和意大利制造，弥合了传统工艺与现代工业美学之间的差距。",
            inquiriesTitle: "一般咨询",
            pressTitle: "媒体 / 批发"
        }
    },
    STORY: {
        GB: GB_PAGE_CONTENT.STORY,
        US: GB_PAGE_CONTENT.STORY,
        JP: {
            title: "ストーリー",
            subtitle: "沈黙の哲学",
            sections: [
                { title: "01. 起源", content: "NOONは「削減」の研究として始まりました。騒音と視覚的な乱雑さで飽和した世界で、私たちは静かな観察者のためのユニフォームを作ろうとしました。「NOON（正午）」という名前は、影が最も短く、透明度が最も高い時間帯を指しており、不必要なものを取り除き、本質的な形を明らかにするという私たちのデザイン精神の比喩です。" },
                { title: "02. 物質性", content: "私たちの創造的なプロセスは常に生地から始まります。私たちは、素材が形を決定すると信じています。重いウールは構築的な肩を示唆し、流動的なシルクはドレープした裾を要求します。天然繊維の固有の特性に耳を傾けることで、デザインされたというよりも必然的に感じられる衣服を作ります。" },
                { title: "03. アーカイブ", content: "私たちはコレクションを季節ごとのドロップとしてではなく、進行中のアーカイブのエントリーとして見ています。各作品には番号が付けられ、文書化されており、今日、明日、そして10年後にも関連するように設計されています。私たちは進化のために陳腐化の概念を拒否します。" }
            ]
        },
        FR: {
            title: "Notre Histoire",
            subtitle: "La Philosophie du Silence",
            sections: [
                { title: "01. Origine", content: "NOON a commencé comme une étude de la réduction. Dans un monde saturé de bruit et de désordre visuel, nous avons cherché à créer un uniforme pour l'observateur silencieux. Le nom 'NOON' fait référence au moment de la journée où les ombres sont les plus courtes et la clarté la plus élevée — une métaphore de notre philosophie de conception : éliminer le superflu pour révéler la forme essentielle." },
                { title: "02. Matérialité", content: "Notre processus créatif commence toujours par le tissu. Nous croyons que la matière dicte la forme. Une laine lourde suggère une épaule structurée ; une soie fluide exige un ourlet drapé. En écoutant les propriétés inhérentes des fibres naturelles, nous créons des vêtements qui semblent inévitables plutôt que conçus." },
                { title: "03. L'Archive", content: "Nous ne considérons pas nos collections comme des lancements saisonniers, mais comme des entrées dans une archive en cours. Chaque pièce est numérotée et documentée, conçue pour être pertinente aujourd'hui, demain et dans dix ans. Nous rejetons le concept d'obsolescence en faveur de l'évolution." }
            ]
        },
        CN: {
            title: "品牌故事",
            subtitle: "沉默的哲学",
            sections: [
                { title: "01. 起源", content: "NOON 最初是一项关于“减少”的研究。在一个充满噪音和视觉混乱的世界里，我们试图为安静的观察者创造一套制服。“NOON（正午）”指的是一天中影子最短、清晰度最高的时刻——这是我们设计理念的隐喻：剥去不必要的东西，揭示本质的形式。" },
                { title: "02. 材质", content: "我们的创作过程总是从面料开始。我们相信材质决定形式。厚重的羊毛暗示着结构化的肩部；流动的丝绸需要垂坠的下摆。通过倾听天然纤维的固有特性，我们创造出感觉是必然存在而非设计出来的服装。" },
                { title: "03. 档案", content: "我们不将我们的系列视为季节性发布，而是视为正在进行的档案中的条目。每件作品都有编号和记录，旨在保持今天、明天以及十年后的相关性。我们拒绝过时的概念，转而追求进化。" }
            ]
        }
    },
    PRIVACY: {
        GB: GB_PAGE_CONTENT.PRIVACY,
        US: GB_PAGE_CONTENT.PRIVACY,
        JP: {
            title: "プライバシーポリシー",
            subtitle: "最終更新日：2024年10月",
            sections: [
                { title: "01. 情報の収集", content: "私たちは、購入、ニュースレターへの登録、またはお問い合わせの際に、お客様が直接提供する個人情報を収集します。これには、名前、メールアドレス、配送先住所、支払い詳細が含まれる場合があります。私たちは、注文を履行し、アーカイブサービスを改善するためにこのデータを処理します。" },
                { title: "02. 情報の使用", content: "収集した情報は、取引の処理、確認や領収書を含む関連情報の送信、技術的な通知、更新、セキュリティアラート、サポートメッセージの送信、および製品、サービス、オファー、プロモーション、イベントに関する連絡に使用されます。" },
                { title: "03. データ保護", content: "私たちは、個人情報の安全性を維持するためにさまざまなセキュリティ対策を実施しています。個人情報は安全なネットワークの背後に保管されており、そのようなシステムへの特別なアクセス権を持つ限られた数の人物のみがアクセスできます。" },
                { title: "04. クッキー", content: "私たちはクッキーを使用して、ショッピングカート内のアイテムを記憶および処理し、将来の訪問のために設定を理解して保存します。" }
            ]
        },
        FR: {
            title: "Politique de Confidentialité",
            subtitle: "Dernière mise à jour : Octobre 2024",
            sections: [
                { title: "01. Collecte d'informations", content: "Nous collectons les informations personnelles que vous nous fournissez directement, par exemple lorsque vous effectuez un achat, vous inscrivez à notre newsletter ou nous contactez. Cela peut inclure votre nom, adresse e-mail, adresse de livraison et détails de paiement." },
                { title: "02. Utilisation des informations", content: "Les informations que nous collectons sont utilisées pour traiter les transactions, envoyer des informations connexes, y compris des confirmations et des reçus, vous envoyer des avis techniques, des mises à jour, des alertes de sécurité et des messages de support." },
                { title: "03. Protection des données", content: "Nous mettons en œuvre diverses mesures de sécurité pour maintenir la sécurité de vos informations personnelles. Vos informations personnelles sont contenues derrière des réseaux sécurisés et ne sont accessibles qu'à un nombre limité de personnes." },
                { title: "04. Cookies", content: "Nous utilisons des cookies pour nous aider à mémoriser et traiter les articles de votre panier et à comprendre et enregistrer vos préférences pour vos futures visites." }
            ]
        },
        CN: {
            title: "隐私政策",
            subtitle: "最后更新：2024年10月",
            sections: [
                { title: "01. 信息收集", content: "我们收集您直接提供给我们的个人信息，例如当您进行购买、注册我们的通讯或联系我们时。这可能包括您的姓名、电子邮件地址、送货地址和付款详情。我们处理这些数据以完成您的订单并改善我们的档案服务。" },
                { title: "02. 信息使用", content: "我们收集的信息用于处理交易，发送相关信息，包括确认和收据，向您发送技术通知、更新、安全警报和支持消息，以及就产品、服务、优惠、促销和活动与您沟通。" },
                { title: "03. 数据保护", content: "我们实施各种安全措施以维护您个人信息的安全。您的个人信息包含在安全网络后面，只有少数拥有此类系统特殊访问权的人员才能访问。" },
                { title: "04. Cookie", content: "我们使用 Cookie 来帮助我们要记住和处理购物车中的商品，并了解和保存您的偏好以供将来访问。" }
            ]
        }
    },
    TERMS: {
        GB: GB_PAGE_CONTENT.TERMS,
        US: GB_PAGE_CONTENT.TERMS,
        JP: {
            title: "利用規約",
            subtitle: "発効日：2024年10月",
            sections: [
                { title: "01. 規約への同意", content: "当社のウェブサイトおよびサービスにアクセスまたは使用することにより、これらの利用規約およびすべての適用される法律および規制に拘束されることに同意するものとします。これらの条件のいずれかに同意しない場合は、このサイトの使用またはアクセスを禁止します。" },
                { title: "02. 知的財産", content: "サイトに関連するコンテンツ、組織、グラフィック、デザイン、編集、磁気翻訳、デジタル変換、およびその他の事項は、適用される著作権、商標、およびその他の所有権の下で保護されています。" },
                { title: "03. 製品と価格", content: "このWebサイトで説明または描写されているすべての機能、コンテンツ、仕様、製品、および製品とサービスの価格は、予告なしにいつでも変更される場合があります。" },
                { title: "04. 準拠法", content: "これらの利用規約および当社がサービスを提供する個別の契約は、英国の法律に準拠し、解釈されるものとします。" }
            ]
        },
        FR: {
            title: "Conditions d'Utilisation",
            subtitle: "Date d'entrée en vigueur : Octobre 2024",
            sections: [
                { title: "01. Acceptation des conditions", content: "En accédant ou en utilisant notre site Web et nos services, vous acceptez d'être lié par les présentes Conditions d'utilisation et toutes les lois et réglementations applicables." },
                { title: "02. Propriété intellectuelle", content: "Le contenu, l'organisation, les graphiques, la conception, la compilation, la traduction magnétique, la conversion numérique et d'autres questions liées au Site sont protégés par les droits d'auteur, marques de commerce et autres droits de propriété applicables." },
                { title: "03. Produits et prix", content: "Toutes les caractéristiques, contenus, spécifications, produits et prix des produits et services décrits ou représentés sur ce site Web sont susceptibles d'être modifiés à tout moment sans préavis." },
                { title: "04. Loi applicable", content: "Ces Conditions d'utilisation et tout accord séparé par lequel nous vous fournissons des Services seront régis et interprétés conformément aux lois du Royaume-Uni." }
            ]
        },
        CN: {
            title: "服务条款",
            subtitle: "生效日期：2024年10月",
            sections: [
                { title: "01. 同意条款", content: "通过访问或使用我们的网站和服务，您同意受这些服务条款以及所有适用法律和法规的约束。如果您不同意这些条款中的任何一项，您将被禁止使用或访问本网站。" },
                { title: "02. 知识产权", content: "与本网站相关的内容、组织、图形、设计、汇编、磁翻译、数字转换和其他事项受适用版权、商标和其他所有权的保护。" },
                { title: "03. 产品和定价", content: "本网站上描述或描绘的所有功能、内容、规格、产品以及产品和服务的价格随时可能更改，恕不另行通知。" },
                { title: "04. 适用法律", content: "这些服务条款以及我们向您提供服务的任何单独协议应受英国法律管辖并按其解释。" }
            ]
        }
    }
};
