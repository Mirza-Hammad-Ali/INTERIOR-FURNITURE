
import { useState } from "react";
import { FiSliders, FiShoppingBag } from "react-icons/fi";
import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Luxury Upholstered Bed",
    category: "Beds",
    price: 449,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=85",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Modern Wooden Wardrobe",
    category: "Wardrobes",
    price: 529,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=700&q=85",
    badge: "",
  },
  {
    id: 3,
    name: "Premium Comfort Mattress",
    category: "Mattresses",
    price: 299,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=85",
    badge: "POPULAR",
  },
  {
    id: 4,
    name: "Elegant Bedside Table",
    category: "Chest of Drawers",
    price: 129,
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=700&q=85",
    badge: "",
  },
  {
    id: 5,
    name: "Modern Dining Chair",
    category: "Dining Furniture",
    price: 149,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=700&q=85",
    badge: "NEW",
  },
  {
    id: 6,
    name: "Contemporary Sofa",
    category: "Sofas",
    price: 799,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=85",
    badge: "",
  },
  {
    id: 7,
    name: "Wooden Bunk Bed",
    category: "Bunk Beds",
    price: 389,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=85",
    badge: "NEW",
  },
  {
    id: 8,
    name: "Classic Bedroom Bed",
    category: "Beds",
    price: 599,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=85",
    badge: "",
  },
];

const categories = [
  "All Products",
  "Beds",
  "Wardrobes",
  "Mattresses",
  "Chest of Drawers",
  "Dining Furniture",
  "Sofas",
  "Bunk Beds",
];

function Shop() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("default");
  const [maxPrice, setMaxPrice] = useState(1000);

  const filteredProducts = products
    .filter((product) =>
      activeCategory === "All Products"
        ? true
        : product.category === activeCategory
    )
    .filter((product) => product.price <= maxPrice)
    .sort((a, b) => {
      if (sortBy === "low-high") return a.price - b.price;
      if (sortBy === "high-low") return b.price - a.price;
      if (sortBy === "newest") return b.id - a.id;
      return 0;
    });

  return (
    <div className="shop-page">
      <section className="shop-page-banner">
        <span>EXPLORE OUR COLLECTION</span>
        <h1>Shop Furniture</h1>
        <p>Thoughtfully selected furniture for beautiful everyday living.</p>
      </section>

      <div className="shop-container">
        <aside className="shop-sidebar">
          <div className="shop-filter-heading">
            <FiSliders />
            <h2>Filters</h2>
          </div>

          <div className="shop-filter-group">
            <h3>Categories</h3>

            {categories.map((category) => (
              <button
                key={category}
                className={`shop-category-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="shop-filter-group shop-price-filter">
            <h3>Maximum Price</h3>
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <div className="shop-price-values">
              <span>£100</span>
              <strong>£{maxPrice}</strong>
            </div>
          </div>

          <button
            className="shop-reset-btn"
            onClick={() => {
              setActiveCategory("All Products");
              setMaxPrice(1000);
              setSortBy("default");
            }}
          >
            Clear All Filters
          </button>
        </aside>

        <section className="shop-products-area">
          <div className="shop-toolbar">
            <p>
              Showing <strong>{filteredProducts.length}</strong> products
            </p>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort products"
            >
              <option value="default">Default Sorting</option>
              <option value="newest">Newest First</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="shop-products-grid">
              {filteredProducts.map((product) => (
                <article className="shop-product-card" key={product.id}>
                  <div className="shop-product-image">
                    <img src={product.image} alt={product.name} />

                    {product.badge && (
                      <span className="shop-product-badge">
                        {product.badge}
                      </span>
                    )}

                    <button
                      className="shop-add-cart"
                      onClick={() => alert(`${product.name} added to cart!`)}
                    >
                      <FiShoppingBag /> Add to Cart
                    </button>
                  </div>

                  <div className="shop-product-info">
                    <span>{product.category}</span>
                    <h3>{product.name}</h3>
                    <strong>£{product.price.toFixed(2)}</strong>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="shop-no-products">
              <h3>No products found</h3>
              <p>Try changing your category or price filters.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Shop;
