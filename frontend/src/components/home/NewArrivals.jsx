
import { Link } from "react-router-dom";
import products from "../../data/products";
import "./NewArrivals.css";

const newProducts = products.filter((product) =>
  [9, 10, 11, 12].includes(product.id)
);

function NewArrivals() {
  return (
    <section className="new-arrivals-section">
      <div className="new-arrivals-container">
        <div className="new-arrivals-heading">
          <div>
            <span className="new-arrivals-subtitle">
              FRESH FROM OUR COLLECTION
            </span>
            <h2>New Arrivals</h2>
            <p>
              Explore our latest pieces, thoughtfully selected for your home.
            </p>
          </div>

          <Link to="/shop" className="new-arrivals-view-all">
            Explore All <span>→</span>
          </Link>
        </div>

        <div className="new-arrivals-grid">
          {newProducts.map((product) => (
            <article className="new-arrival-card" key={product.id}>
              <div className="new-arrival-image-wrap">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                </Link>

                <span className="new-arrival-badge">{product.badge}</span>

                <button
                  className="new-arrival-cart-btn"
                  onClick={() => alert(`${product.name} added to cart!`)}
                >
                  Add to Cart
                </button>
              </div>

              <div className="new-arrival-info">
                <span className="new-arrival-category">
                  {product.category}
                </span>

                <h3>
                  <Link to={`/product/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>

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
