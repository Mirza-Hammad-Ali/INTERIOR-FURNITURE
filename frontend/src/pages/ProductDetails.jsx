
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiShoppingBag, FiMinus, FiPlus, FiArrowLeft } from "react-icons/fi";

import products from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  return (
    <section className="product-details-page">
      <div className="product-details-container">
        <Link to="/shop" className="product-back-link">
          <FiArrowLeft /> Back to Shop
        </Link>

        <div className="product-details-grid">
          <div className="product-details-image">
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

            <button
              className="product-add-cart-btn"
              onClick={() =>
                alert(`${quantity} x ${product.name} added to cart!`)
              }
            >
              <FiShoppingBag /> Add to Cart
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
