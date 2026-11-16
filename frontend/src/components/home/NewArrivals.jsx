
import "./NewArrivals.css";

const newProducts = [
  {
    id: 1,
    name: "Modern Bouclé Accent Chair",
    category: "Living Room",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=85",
    badge: "NEW",
  },
  {
    id: 2,
    name: "Minimalist Oak Coffee Table",
    category: "Living Room",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&q=85",
    badge: "NEW ARRIVAL",
  },
  {
    id: 3,
    name: "Contemporary Dining Chair",
    category: "Dining Room",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=85",
    badge: "NEW",
  },
  {
    id: 4,
    name: "Elegant Upholstered Sofa",
    category: "Living Room",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=85",
    badge: "JUST IN",
  },
];

function NewArrivals() {
  return (
    <section className="new-arrivals-section">
      <div className="new-arrivals-container">
        <div className="new-arrivals-heading">
          <div>
            <span className="new-arrivals-subtitle">FRESH FROM OUR COLLECTION</span>
            <h2>New Arrivals</h2>
            <p>Explore our latest pieces, thoughtfully selected for your home.</p>
          </div>

          <a href="/shop" className="new-arrivals-view-all">
            Explore All <span>→</span>
          </a>
        </div>

        <div className="new-arrivals-grid">
          {newProducts.map((product) => (
            <article className="new-arrival-card" key={product.id}>
              <div className="new-arrival-image-wrap">
                <img src={product.image} alt={product.name} />

                <span className="new-arrival-badge">{product.badge}</span>

                <button
                  className="new-arrival-cart-btn"
                  onClick={() => alert(`${product.name} added to cart!`)}
                >
                  Add to Cart
                </button>
              </div>

              <div className="new-arrival-info">
                <span className="new-arrival-category">{product.category}</span>
                <h3>{product.name}</h3>
                <span className="new-arrival-price">
                  £{product.price.toFixed(2)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
