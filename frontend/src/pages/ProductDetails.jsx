
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  FiShoppingBag,
  FiMinus,
  FiPlus,
  FiArrowLeft,
  FiHeart,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

import products from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  const saved = isInWishlist(product.id);

  function handleAddToCart() {
    addToCart(product, quantity);
    alert(`${quantity} x ${product.name} added to cart!`);
  }

  function handleWishlist() {
    if (saved) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <section className="product-details-page">
      <div className="product-details-container">
        <Link to="/shop" className="product-back-link">
          <FiArrowLeft /> Back to Shop
        </Link>

        <div className="product-details-grid">
          <div className="product-details-image relative">
            <img src={product.image} alt={product.name} />

            {product.badge && (
              <span className="product-details-badge">
                {product.badge}
              </span>
            )}
          </div>

          <div className="product-details-info">
            <span className="product-details-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <div className="product-details-price">
              <strong>£{product.price.toFixed(2)}</strong>
              <del>£{product.oldPrice.toFixed(2)}</del>
            </div>

            <p className="product-details-description">
              {product.description}
            </p>

            <div className="product-quantity">
              <span>Quantity</span>

              <div className="quantity-controls">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <FiMinus />
                </button>

                <strong>{quantity}</strong>

                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <FiPlus />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className="product-add-cart-btn"
              onClick={handleAddToCart}
            >
              <FiShoppingBag /> Add to Cart
            </button>

            {/* Wishlist Button */}
            <button
              type="button"
              onClick={handleWishlist}
              aria-label={
                saved
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"
              }
              className={`mt-3 flex min-h-[48px] w-full items-center justify-center gap-3 border border-[#514b40] px-5 text-sm font-medium transition-all duration-300 hover:bg-[#514b40] hover:text-white ${
                saved
                  ? "bg-[#514b40] text-white"
                  : "bg-transparent text-[#514b40]"
              }`}
            >
              <FiHeart
                size={18}
                className={saved ? "fill-current" : ""}
              />

              {saved ? "Added to Wishlist" : "Add to Wishlist"}
            </button>

            <div className="product-details-extra">
              <p>✓ UK Delivery Available</p>
              <p>✓ Secure Shopping</p>
              <p>✓ Quality Furniture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
