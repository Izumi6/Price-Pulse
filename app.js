// ===== PRICEPULSE APP =====

let currentCategory = 'all';
let currentSort = 'asc';
let currentSearch = '';

// ===== HELPERS =====
function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function getBestPrice(product) {
  return Math.min(...product.prices.map(p => p.price));
}

function getHighestPrice(product) {
  return Math.max(...product.prices.map(p => p.price));
}

function getSavings(product) {
  return getHighestPrice(product) - getBestPrice(product);
}

function getBestStore(product) {
  const best = getBestPrice(product);
  return product.prices.find(p => p.price === best);
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
});

// ===== MOBILE MENU =====
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

function closeMobileMenu() {
  mobileBtn.classList.remove('active');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== SEARCH =====
document.getElementById('searchInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});

function handleSearch() {
  currentSearch = document.getElementById('searchInput').value.trim().toLowerCase();
  currentCategory = 'all';
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  document.querySelector('[data-cat="all"]').classList.add('active');
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function quickSearch(term) {
  document.getElementById('searchInput').value = term;
  handleSearch();
}

// ===== FILTER & SORT =====
function filterCategory(cat) {
  currentCategory = cat;
  currentSearch = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  document.querySelector(`[data-cat="${cat}"]`).classList.add('active');

  const titles = {
    all: 'All Products', smartphones: 'Smartphones', laptops: 'Laptops',
    audio: 'Audio', tvs: 'TVs & Displays', gaming: 'Gaming',
    tablets: 'Tablets', wearables: 'Wearables'
  };
  document.getElementById('productsTitle').textContent = titles[cat] || 'Products';
  renderProducts();
}

function sortBy(type) {
  currentSort = type;
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
  if (type === 'asc') document.getElementById('sortLow').classList.add('active');
  else if (type === 'desc') document.getElementById('sortHigh').classList.add('active');
  else document.getElementById('sortSavings').classList.add('active');
  renderProducts();
}

// ===== RENDER PRODUCTS =====
function getFilteredProducts() {
  let filtered = [...PRODUCTS];

  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (currentSearch) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(currentSearch) ||
      p.brand.toLowerCase().includes(currentSearch) ||
      p.category.toLowerCase().includes(currentSearch)
    );
  }

  if (currentSort === 'asc') {
    filtered.sort((a, b) => getBestPrice(a) - getBestPrice(b));
  } else if (currentSort === 'desc') {
    filtered.sort((a, b) => getBestPrice(b) - getBestPrice(a));
  } else {
    filtered.sort((a, b) => getSavings(b) - getSavings(a));
  }

  return filtered;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const products = getFilteredProducts();

  if (products.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }

  noResults.classList.add('hidden');
  grid.innerHTML = products.map(product => {
    const best = getBestPrice(product);
    const savings = getSavings(product);
    const bestStore = getBestStore(product);

    const priceRows = product.prices
      .slice()
      .sort((a, b) => a.price - b.price)
      .map(p => {
        const isBest = p.price === best;
        return `
          <div class="price-row ${isBest ? 'best' : ''}">
            <div class="store-info">
              <span class="store-dot ${p.color}"></span>
              <span class="store-name">${p.store}</span>
            </div>
            <div class="price-info">
              <span class="price-amount">${formatPrice(p.price)}</span>
              ${isBest ? '<span class="price-badge">Best</span>' : ''}
            </div>
          </div>
        `;
      }).join('');

    return `
      <div class="product-card">
        <div class="product-header">
          <div class="product-img">${product.emoji}</div>
          <div class="product-meta">
            <span class="product-cat">${product.category}</span>
            <h3 class="product-name">${product.name}</h3>
            <span class="product-brand">${product.brand}</span>
          </div>
        </div>
        <div class="product-prices">${priceRows}</div>
        <div class="product-footer">
          <span class="savings-text">${savings > 0 ? `Save ${formatPrice(savings)}` : 'Same price everywhere'}</span>
          <a href="${bestStore.url}" target="_blank" rel="noopener" class="buy-link">
            Buy on ${bestStore.store} →
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// ===== RENDER DEALS =====
function renderDeals() {
  const deals = [...PRODUCTS]
    .map(p => ({ ...p, savings: getSavings(p) }))
    .filter(p => p.savings > 0)
    .sort((a, b) => b.savings - a.savings)
    .slice(0, 6);

  document.getElementById('dealsGrid').innerHTML = deals.map(p => {
    const best = getBestPrice(p);
    const high = getHighestPrice(p);
    const bestStore = getBestStore(p);
    const pct = Math.round((p.savings / high) * 100);

    return `
      <div class="deal-card">
        <div class="deal-name">${p.emoji} ${p.name}</div>
        <div class="deal-prices">
          <span class="deal-best">${formatPrice(best)}</span>
          <span class="deal-high">${formatPrice(high)}</span>
        </div>
        <div class="deal-save">Save ${formatPrice(p.savings)} (${pct}% cheaper on ${bestStore.store})</div>
        <div class="deal-store">${bestStore.store} has the lowest price</div>
      </div>
    `;
  }).join('');
}

// ===== HERO STATS COUNTER =====
function animateCounter(el, target, prefix = '', suffix = '') {
  let current = 0;
  const step = Math.ceil(target / 40);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = prefix + current.toLocaleString('en-IN') + suffix;
    if (current >= target) clearInterval(timer);
  }, 30);
}

// ===== INIT =====
function init() {
  renderProducts();
  renderDeals();

  // Animate stats
  const statProducts = document.getElementById('statProducts');
  animateCounter(statProducts, PRODUCTS.length);

  // Calculate avg savings
  const totalSavings = PRODUCTS.reduce((s, p) => s + getSavings(p), 0);
  const avgSavings = Math.round(totalSavings / PRODUCTS.length);
  const statEls = document.querySelectorAll('.stat-num');
  if (statEls[2]) {
    animateCounter(statEls[2], avgSavings, '₹');
  }
}

init();
