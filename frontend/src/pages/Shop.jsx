
import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { FiSliders, FiShoppingBag } from "react-icons/fi";

import { useCart } from "../context/CartContext";
import products from "../data/products";
import "./Shop.css";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const urlCategory = searchParams.get("category");

  const activeCategory = categories.includes(urlCategory)
    ? urlCategory
    : "All Products";

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

  function handleCategoryChange(category) {
    if (category === "All Products") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  }

  function resetFilters() {
    setSearchParams({});
    setMaxPrice(1000);
    setSortBy("default");
  }

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
                onClick={() => handleCategoryChange(category)}
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

          <button className="shop-reset-btn" onClick={resetFilters}>
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
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt={product.name} />
                    </Link>

                    {product.badge && (
                      <span className="shop-product-badge">
                        {product.badge}
                      </span>
                    )}

                    <button
                      className="shop-add-cart"
                      onClick={() => addToCart(product)}
                    >
                      <FiShoppingBag /> Add to Cart
                    </button>
                  </div>

                  <div className="shop-product-info">
                    <span>{product.category}</span>

                    <h3>
                      <Link to={`/product/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>

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
