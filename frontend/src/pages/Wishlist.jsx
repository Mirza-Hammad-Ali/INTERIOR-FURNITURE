
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingBag, FiTrash2 } from "react-icons/fi";

import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

import "./Wishlist.css";

function Wishlist() {
  const { wishlistItems, removeFromWishlist, clearWishlist } =
    useWishlist();

  const { addToCart } = useCart();

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="wishlist-page">
        <div className="wishlist-container">
          <div className="wishlist-heading">
            <span>YOUR FAVOURITES</span>
            <h1>My Wishlist</h1>
            <p>
              Keep your favourite furniture pieces together and find
              something perfect for your home.
            </p>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="wishlist-empty">
              <div className="wishlist-empty-icon">
                <FiHeart />
              </div>

              <h2>Your wishlist is empty</h2>

              <p>
                You haven't saved any products yet. Explore our collection
                and save your favourites here.
              </p>

              <Link to="/shop" className="wishlist-shop-btn">
                Explore Collection
              </Link>
            </div>
          ) : (
            <>
              <div className="wishlist-topbar">
                <p>
                  {wishlistItems.length}{" "}
                  {wishlistItems.length === 1 ? "Item" : "Items"} Saved
                </p>

                <button onClick={clearWishlist}>
                  <FiTrash2 />
                  Clear Wishlist
                </button>
              </div>

              <div className="wishlist-grid">
                {wishlistItems.map((product) => (
                  <div className="wishlist-card" key={product.id}>
                    <Link
                      to={`/product/${product.id}`}
                      className="wishlist-image-link"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>

                    <button
                      className="wishlist-remove-btn"
                      onClick={() => removeFromWishlist(product.id)}
                      aria-label={`Remove ${product.name} from wishlist`}
                    >
                      <FiHeart />
                    </button>

                    <div className="wishlist-card-content">
                      <span className="wishlist-category">
                        {product.category}
                      </span>

                      <Link
                        to={`/product/${product.id}`}
                        className="wishlist-product-name"
                      >
                        {product.name}
                      </Link>

                      <div className="wishlist-price">
                        <span>£{product.price.toFixed(2)}</span>

                        {product.oldPrice && (
                          <del>
                            £{product.oldPrice.toFixed(2)}
                          </del>
                        )}
                      </div>

                      <button
                        className="wishlist-add-cart-btn"
                        onClick={() => {
                          addToCart(product);
                        }}
                      >
                        <FiShoppingBag />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Wishlist;
