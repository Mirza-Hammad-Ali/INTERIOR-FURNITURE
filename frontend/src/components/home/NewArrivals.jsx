
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import products from "../../data/products";
import "./NewArrivals.css";

const newProducts = products.filter((product) =>
  [9, 10, 11, 12].includes(product.id)
);

function NewArrivals() {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  function handleWishlist(product) {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

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
          {newProducts.map((product) => {
            const saved = isInWishlist(product.id);

            return (
              <article className="new-arrival-card" key={product.id}>
                <div className="new-arrival-image-wrap relative">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>

                  <span className="new-arrival-badge">
                    {product.badge}
                  </span>

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    onClick={() => handleWishlist(product)}
                    aria-label={
                      saved
                        ? `Remove ${product.name} from wishlist`
                        : `Add ${product.name} to wishlist`
                    }
                    title={saved ? "Remove from Wishlist" : "Add to Wishlist"}
                    className={`absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:bg-[#514b40] hover:text-white ${
                      saved ? "text-red-600" : "text-[#514b40]"
                    }`}
                  >
                    <FiHeart
                      size={19}
                      className={saved ? "fill-current" : ""}
                    />
                  </button>

                  {/* Add to Cart */}
                  <button
                    className="new-arrival-cart-btn"
                    onClick={() => addToCart(product)}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
