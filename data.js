const PRODUCTS = [
  {
    id: 1, name: 'iPhone 15 Pro Max 256GB', brand: 'Apple', category: 'smartphones', emoji: '📱',
    prices: [
      { store: 'Amazon', price: 156900, url: 'https://www.amazon.in/s?k=iPhone+15+Pro+Max', color: 'amazon' },
      { store: 'Flipkart', price: 154999, url: 'https://www.flipkart.com/search?q=iphone+15+pro+max', color: 'flipkart' },
      { store: 'Croma', price: 159900, url: 'https://www.croma.com/searchB?q=iphone+15+pro+max', color: 'croma' },
    ]
  },
  {
    id: 2, name: 'Samsung Galaxy S24 Ultra 256GB', brand: 'Samsung', category: 'smartphones', emoji: '📱',
    prices: [
      { store: 'Amazon', price: 129999, url: 'https://www.amazon.in/s?k=Samsung+Galaxy+S24+Ultra', color: 'amazon' },
      { store: 'Flipkart', price: 127999, url: 'https://www.flipkart.com/search?q=samsung+galaxy+s24+ultra', color: 'flipkart' },
      { store: 'Croma', price: 131999, url: 'https://www.croma.com/searchB?q=samsung+galaxy+s24+ultra', color: 'croma' },
    ]
  },
  {
    id: 3, name: 'MacBook Air M3 15" 16GB/512GB', brand: 'Apple', category: 'laptops', emoji: '💻',
    prices: [
      { store: 'Amazon', price: 147900, url: 'https://www.amazon.in/s?k=MacBook+Air+M3', color: 'amazon' },
      { store: 'Flipkart', price: 149900, url: 'https://www.flipkart.com/search?q=macbook+air+m3', color: 'flipkart' },
      { store: 'Croma', price: 147900, url: 'https://www.croma.com/searchB?q=macbook+air+m3', color: 'croma' },
    ]
  },
  {
    id: 4, name: 'Sony WH-1000XM5 Wireless ANC', brand: 'Sony', category: 'audio', emoji: '🎧',
    prices: [
      { store: 'Amazon', price: 26990, url: 'https://www.amazon.in/s?k=Sony+WH-1000XM5', color: 'amazon' },
      { store: 'Flipkart', price: 27490, url: 'https://www.flipkart.com/search?q=sony+wh-1000xm5', color: 'flipkart' },
      { store: 'Croma', price: 29990, url: 'https://www.croma.com/searchB?q=sony+wh1000xm5', color: 'croma' },
    ]
  },
  {
    id: 5, name: 'PlayStation 5 Slim Digital Edition', brand: 'Sony', category: 'gaming', emoji: '🎮',
    prices: [
      { store: 'Amazon', price: 39990, url: 'https://www.amazon.in/s?k=PS5+Slim', color: 'amazon' },
      { store: 'Flipkart', price: 39990, url: 'https://www.flipkart.com/search?q=ps5+slim', color: 'flipkart' },
      { store: 'Croma', price: 41990, url: 'https://www.croma.com/searchB?q=ps5+slim', color: 'croma' },
    ]
  },
  {
    id: 6, name: 'iPad Air M2 11" 128GB Wi-Fi', brand: 'Apple', category: 'tablets', emoji: '📟',
    prices: [
      { store: 'Amazon', price: 69900, url: 'https://www.amazon.in/s?k=iPad+Air+M2', color: 'amazon' },
      { store: 'Flipkart', price: 68900, url: 'https://www.flipkart.com/search?q=ipad+air+m2', color: 'flipkart' },
      { store: 'Croma', price: 69900, url: 'https://www.croma.com/searchB?q=ipad+air+m2', color: 'croma' },
    ]
  },
  {
    id: 7, name: 'Samsung 55" Crystal 4K Neo QLED', brand: 'Samsung', category: 'tvs', emoji: '📺',
    prices: [
      { store: 'Amazon', price: 52990, url: 'https://www.amazon.in/s?k=Samsung+55+QLED+TV', color: 'amazon' },
      { store: 'Flipkart', price: 49990, url: 'https://www.flipkart.com/search?q=samsung+55+qled+tv', color: 'flipkart' },
      { store: 'Croma', price: 54990, url: 'https://www.croma.com/searchB?q=samsung+55+qled', color: 'croma' },
    ]
  },
  {
    id: 8, name: 'Apple Watch Series 9 GPS 45mm', brand: 'Apple', category: 'wearables', emoji: '⌚',
    prices: [
      { store: 'Amazon', price: 41900, url: 'https://www.amazon.in/s?k=Apple+Watch+Series+9', color: 'amazon' },
      { store: 'Flipkart', price: 40900, url: 'https://www.flipkart.com/search?q=apple+watch+series+9', color: 'flipkart' },
      { store: 'Croma', price: 44900, url: 'https://www.croma.com/searchB?q=apple+watch+series+9', color: 'croma' },
    ]
  },
  {
    id: 9, name: 'Dell XPS 15 i7 16GB/512GB', brand: 'Dell', category: 'laptops', emoji: '💻',
    prices: [
      { store: 'Amazon', price: 139990, url: 'https://www.amazon.in/s?k=Dell+XPS+15', color: 'amazon' },
      { store: 'Flipkart', price: 142990, url: 'https://www.flipkart.com/search?q=dell+xps+15', color: 'flipkart' },
      { store: 'Croma', price: 144990, url: 'https://www.croma.com/searchB?q=dell+xps+15', color: 'croma' },
    ]
  },
  {
    id: 10, name: 'AirPods Pro 2nd Gen USB-C', brand: 'Apple', category: 'audio', emoji: '🎧',
    prices: [
      { store: 'Amazon', price: 20900, url: 'https://www.amazon.in/s?k=AirPods+Pro+2', color: 'amazon' },
      { store: 'Flipkart', price: 21490, url: 'https://www.flipkart.com/search?q=airpods+pro+2', color: 'flipkart' },
      { store: 'Croma', price: 24900, url: 'https://www.croma.com/searchB?q=airpods+pro+2', color: 'croma' },
    ]
  },
  {
    id: 11, name: 'LG 65" C3 4K OLED evo TV', brand: 'LG', category: 'tvs', emoji: '📺',
    prices: [
      { store: 'Amazon', price: 149990, url: 'https://www.amazon.in/s?k=LG+65+C3+OLED', color: 'amazon' },
      { store: 'Flipkart', price: 146990, url: 'https://www.flipkart.com/search?q=lg+65+c3+oled', color: 'flipkart' },
      { store: 'Croma', price: 154990, url: 'https://www.croma.com/searchB?q=lg+65+c3+oled', color: 'croma' },
    ]
  },
  {
    id: 12, name: 'OnePlus 12 16GB/256GB', brand: 'OnePlus', category: 'smartphones', emoji: '📱',
    prices: [
      { store: 'Amazon', price: 59999, url: 'https://www.amazon.in/s?k=OnePlus+12', color: 'amazon' },
      { store: 'Flipkart', price: 57999, url: 'https://www.flipkart.com/search?q=oneplus+12', color: 'flipkart' },
      { store: 'Croma', price: 64999, url: 'https://www.croma.com/searchB?q=oneplus+12', color: 'croma' },
    ]
  },
  {
    id: 13, name: 'Nintendo Switch OLED Model', brand: 'Nintendo', category: 'gaming', emoji: '🎮',
    prices: [
      { store: 'Amazon', price: 28999, url: 'https://www.amazon.in/s?k=Nintendo+Switch+OLED', color: 'amazon' },
      { store: 'Flipkart', price: 27999, url: 'https://www.flipkart.com/search?q=nintendo+switch+oled', color: 'flipkart' },
      { store: 'Croma', price: 30499, url: 'https://www.croma.com/searchB?q=nintendo+switch+oled', color: 'croma' },
    ]
  },
  {
    id: 14, name: 'Samsung Galaxy Watch 6 Classic 47mm', brand: 'Samsung', category: 'wearables', emoji: '⌚',
    prices: [
      { store: 'Amazon', price: 32999, url: 'https://www.amazon.in/s?k=Galaxy+Watch+6+Classic', color: 'amazon' },
      { store: 'Flipkart', price: 30999, url: 'https://www.flipkart.com/search?q=galaxy+watch+6+classic', color: 'flipkart' },
      { store: 'Croma', price: 34999, url: 'https://www.croma.com/searchB?q=galaxy+watch+6+classic', color: 'croma' },
    ]
  },
  {
    id: 15, name: 'Samsung Galaxy Tab S9 FE 128GB', brand: 'Samsung', category: 'tablets', emoji: '📟',
    prices: [
      { store: 'Amazon', price: 39999, url: 'https://www.amazon.in/s?k=Galaxy+Tab+S9+FE', color: 'amazon' },
      { store: 'Flipkart', price: 38999, url: 'https://www.flipkart.com/search?q=galaxy+tab+s9+fe', color: 'flipkart' },
      { store: 'Croma', price: 41999, url: 'https://www.croma.com/searchB?q=galaxy+tab+s9+fe', color: 'croma' },
    ]
  },
  {
    id: 16, name: 'Bose QuietComfort Ultra Headphones', brand: 'Bose', category: 'audio', emoji: '🎧',
    prices: [
      { store: 'Amazon', price: 29990, url: 'https://www.amazon.in/s?k=Bose+QuietComfort+Ultra', color: 'amazon' },
      { store: 'Flipkart', price: 31490, url: 'https://www.flipkart.com/search?q=bose+quietcomfort+ultra', color: 'flipkart' },
      { store: 'Croma', price: 32990, url: 'https://www.croma.com/searchB?q=bose+quietcomfort+ultra', color: 'croma' },
    ]
  },
];
