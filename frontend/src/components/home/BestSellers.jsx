import { Link } from "react-router-dom";
import "./BestSellers.css";

const products = [
  {
    id: 1,
    name: "Luxury Upholstered Bed",
    category: "Bedroom Furniture",
    price: 449,
    oldPrice: 599,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=85",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Modern Wooden Wardrobe",
    category: "Storage Furniture",
    price: 529,
    oldPrice: 649,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=85",
    badge: "POPULAR",
  },
  {
    id: 3,
    name: "Premium Comfort Mattress",
    category: "Mattresses",
    price: 299,
    oldPrice: 399,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=85",
    badge: "SALE",
  },
  {
    id: 4,
    name: "Elegant Bedside Table",
    category: "Bedroom Furniture",
    price: 129,
    oldPrice: 169,
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&q=85",
    badge: "BESTSELLER",
  },
];

function BestSellers() {
  return (
    <section className="best-sellers-section">
      <div className="best-sellers-container">
        <div className="best-sellers-heading">
          <div>
            <span className="best-sellers-subtitle">CUSTOMER FAVOURITES</span>
            <h2>Our Best Sellers</h2>
            <p>Discover the furniture pieces our customers love the most.</p>
          </div>

          <a href="/shop" className="best-sellers-view-all">
            View All Products <span>→</span>
          </a>
        </div>

        <div className="best-sellers-grid">
          {products.map((product) => (
            <article className="best-seller-card" key={product.id}>
              <div className="best-seller-image-wrap">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                </Link>

                <span className="best-seller-badge">{product.badge}</span>

                <button
                  className="best-seller-cart-btn"
                  onClick={() => alert(`${product.name} added to cart!`)}
                >
                  Add to Cart
                </button>
              </div>

              <div className="best-seller-info">
                <span className="best-seller-category">{product.category}</span>

                <h3>
                  <Link
                    to={`/product/${product.id}`}
                    className="best-seller-product-link"
                  >
                    {product.name}
                  </Link>
                </h3>

                <div className="best-seller-price">
                  <span>£{product.price.toFixed(2)}</span>
                  <del>£{product.oldPrice.toFixed(2)}</del>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
